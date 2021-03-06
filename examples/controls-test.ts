import * as wgl from '../gl/web-gl'
import * as waud from '../aud/web-audio'
import { mat4, quat, vec3, glMatrix } from 'gl-matrix'

export async function main() {

	//	audio init

	const audioManager = new waud.AudioContextManager()
	const nLevels = 32
	const analyser = new waud.AudioAnalyser(audioManager.getContext(), {levelsCount: nLevels})
	const files = ['sounds/sep30.aac']

	analyser.setup()

	await Promise.all(audioManager.loadSounds(files))

	const destination = analyser.getAnalyserNode()

	const togglePlay = () => audioManager.togglePlay(files[0], destination)

	//	end autio init

	document.body.style.padding = '0'
	document.body.style.margin = '0'
	document.body.style.position = 'fixed'

	const keyboard = new wgl.Input.Keyboard()
	const canvas = new wgl.Canvas()
	const canvasElement = canvas.element
	const frameStats = new wgl.FrameStats()

	keyboard.down(evt => togglePlay(), wgl.Input.Keys.space)

	const gl: WebGLRenderingContext = canvasElement.getContext('webgl')

	if (!gl) 
		throw new Error('Unable to initialize GL context.')

	let firstObj = await wgl.Loaders.OBJ.loadMesh(gl, '/obj/test:test.obj')
	let firstTex = await wgl.Loaders.TEX.load2D(gl, '/tex/neb.png')

	const scene = new wgl.Scene(gl)
	const renderer = new wgl.renderers.functional(gl)
	const camera = new wgl.Camera()
	const keyboardMoveControls = new wgl.Controls.Movement.Keyboard(keyboard, camera, 5.0)
	const touchInput = new wgl.Input.Touch()
	const mouseInput = new wgl.Input.PointerLock(canvas.element)
	const touchMoveControls = new wgl.Controls.Movement.Touch(touchInput, camera, 25.0)

	let rotationControls: any

	if (wgl.capabilities.hasPointerLock()) {
		rotationControls = new wgl.Controls.Orbit.Orbit2(mouseInput, camera)
	} else {
		rotationControls = new wgl.Controls.Orbit.Orbit(touchInput, camera)
	}

	// const touchRotateControls = new wgl.Controls.Rotation.Touch(touchInput, camera, 25.0)

	canvas.element.onclick = evt => togglePlay()

	renderer.setAspect(canvas.aspect)
	renderer.setNearFar(0.1, 1000)

	const light = wgl.Light.Light.Point(gl)
	const light2 = wgl.Light.Light.Directional(gl)

	const skyboxProg = wgl.ShaderFactory.Create(gl, wgl.ShaderLibrary.Skybox)

	light.setColor([1, 0.5, 0.25])
	light.getAttribute('position').setValue([0, 0, -2])

	light2.setColor([0, 0, 1])
	light2.getAttribute('direction').setValue([-30, -30, -30])

	const sphere = wgl.MeshFactory.create(gl, 'sphere')
	const plane = wgl.MeshFactory.create(gl, 'quad')
	const cubeMesh = wgl.MeshFactory.create(gl, 'cube')
	const skyboxMesh = wgl.MeshFactory.create(gl, 'skybox')

	const mat = wgl.Material.Material.Physical(gl)

	const planeModel = new wgl.Model(gl, plane, mat)
	const sphereModel = new wgl.Model(gl, sphere, mat)
	const cottageModel = new wgl.Model(gl, firstObj, mat.clone())
	const sun = new wgl.Model(gl, sphere, mat.clone())
	const anchor = new wgl.Model(gl, sphere, mat.clone())
	const skybox = new wgl.Model(gl, skyboxMesh, mat.clone(), skyboxProg)

	skybox.material.getAttribute('albedo').setValue(firstTex)

	sun.material.getAttribute('albedo').setValue(light2.getColor())
	let dir = light2.getAttribute('direction').peekValue()
	sun.setPosition(vec3.negate(vec3.create(), dir as vec3))
	sun.setScale(10)

	cottageModel.material.getAttribute('albedo').setValue([0, 1, 0])
	cottageModel.setPosition([-5, -5, -5])

	planeModel.setPosition(vec3.fromValues(0, -1, 0))
	planeModel.setRotation(vec3.fromValues(90, 0, 0))
	planeModel.setScale(vec3.fromValues(2, 2, 2))

	let planeModels = getPlaneModels(gl, planeModel, nLevels)
	let farPlaneModels = getFarPlaneModels(gl, planeModel, nLevels)
	farPlaneModels.map(model => model.setMesh(cubeMesh))
	let farPlanePositions = farPlaneModels.map(model => model.getPosition())

	scene.add(farPlaneModels)
	scene.add([light, light2])
	scene.add(cottageModel)

	scene.add(sun)
	scene.add(sphereModel)

	scene.background = skybox

	farPlaneModels.map(model => anchor.addChild(model))

	sphereModel.setPosition([-5, -5, 0])

	camera.setPosition([30, 8, 31])
	camera.setPitch(-17)
	camera.setYaw(-487)

	const animate = () => {

		keyboardMoveControls.update()
		rotationControls.update()
		touchMoveControls.update()

		frameStats.update()
		analyser.update()

		let levels = analyser.getLevels()
		let waves = analyser.getWave()

		planeModels.map((model, i) => {
			let color = [levels[i], 1-levels[i], 0]
			model.material.getAttribute('albedo').setValue(color)
		})

		let pos = anchor.getRotation()
		pos[1] += Math.cos(1/60) * (audioManager.getSound(files[0]).isPlaying ? 0.1 : 0)
		anchor.setRotation(pos)

		sphereModel.setPosition([-5, waves[0]*0.2, 0])
		// light.getAttribute('color').setValue([0, 1-Math.abs(waves[0]*0.1), 1])

		farPlaneModels.map((model, i) => {
			let subs = wgl.util.common.ind2sub(i, [nLevels, nLevels])
			let row = subs[0]
			let col = subs[1]
			let value = levels[col]
			let fracMax = row / nLevels
			let color = [0, 1-value, fracMax * value]
			model.material.getAttribute('albedo').setValue(color)
		})

		renderer.render(scene, camera)

		// gl.finish()

		window.requestAnimationFrame(animate)
	}

	animate()
}

function getPlaneModels(gl: WebGLRenderingContext, ref: wgl.Model, nLevels: number): Array<wgl.Model> {
	let planeModels = []
	for (let i: number = 0; i < nLevels; i++) {
		let planeModel: wgl.Model = new wgl.Model(gl, ref.mesh, ref.material.clone(), ref.program)
		planeModel.setPosition([0, -i-1, 0])
		planeModel.setRotation([90, 0, 0])
		planeModels.push(planeModel)
	}
	return planeModels
}

function getFarPlaneModels(gl: WebGLRenderingContext, ref: wgl.Model, nModels: number): Array<wgl.Model> {
	let planeModels: Array<wgl.Model> = []
	for (let i: number = 0; i < nModels; i++) {
		for (let j: number = 0; j < nModels; j++) {
			let planeModel: wgl.Model = new wgl.Model(gl, ref.mesh, ref.material.clone(), ref.program)
			planeModel.setPosition([i/2, j/2, -10])
			planeModel.setScale(0.5)
			planeModels.push(planeModel)
		}
	}
	return planeModels
}
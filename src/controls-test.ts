import * as wgl from '../gl/src/web-gl'
import * as waud from '../aud/src/web-audio'
import { mat4, vec3, glMatrix } from 'gl-matrix'

//
//	steps:
//		translate camera to position along the front vector
//		rotate at this origin
//		translate back along front vector
//	
//

function getPlaneModels(gl: WebGLRenderingContext, ref: wgl.Model, nLevels: number): Array<wgl.Model> {
	let planeModels = []
	for (let i: number = 0; i < nLevels; i++) {
		let planeModel: wgl.Model = new wgl.Model(gl, ref.program, ref.mesh, ref.material.clone())
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
			let planeModel: wgl.Model = new wgl.Model(gl, ref.program, ref.mesh, ref.material.clone())
			planeModel.setPosition([i/2, j/2, -10])
			planeModel.setScale(0.5)
			planeModels.push(planeModel)
		}
	}
	return planeModels
}

export async function main() {

	//	audio init

	const audioManager = new waud.AudioContextManager()
	const nLevels = 32
	const analyser = new waud.AudioAnalyser(audioManager.getContext(), {levelsCount: nLevels})
	const files = ['sep30.aac']

	analyser.setup()

	await Promise.all(audioManager.loadSounds(files))

	const destination = analyser.getAnalyserNode()

	const player = () => audioManager.togglePlay(files[0], destination)

	//	end autio init

	document.body.style.padding = '0'
	document.body.style.margin = '0'
	document.body.style.position = 'fixed'

	const keyboard = new wgl.Input.Keyboard()
	const canvas = new wgl.Canvas()
	const canvasElement = canvas.element
	const frameStats = new wgl.FrameStats()

	keyboard.down((evt) => {
		if (evt.keyCode == wgl.Input.Keys.space) player()
	})

	const gl: WebGLRenderingContext = canvasElement.getContext('webgl')

	if (!gl) throw new Error('Unable to initialize GL context.')

	// let firstObj = await wgl.Loaders.OBJ.loadMesh(gl, '/obj/stall:stall.obj')
	// let firstObj = await wgl.Loaders.OBJ.loadMesh(gl, '/obj/cube:cube.obj')
	// let firstObj = await wgl.Loaders.OBJ.loadMesh(gl, '/obj/lp_tree:lowpolytree.obj')
	let firstObj = await wgl.Loaders.OBJ.loadMesh(gl, '/obj/test:test.obj', {finalize: true})

	const scene = new wgl.Scene(gl)
	const renderer = new wgl.renderers.functional(gl)
	const light = wgl.Light.Light.Point(gl)
	const light2 = wgl.Light.Light.Directional(gl)
	const camera: wgl.Camera = new wgl.Camera()
	const keyboardMoveControls = new wgl.Controls.Movement.Keyboard(keyboard, camera, 5.0)
	const touchInput = new wgl.Input.Touch()
	const mouseInput = new wgl.Input.Mouse()

	let rotationControls: wgl.Controls.Orbit.Orbit

	if ('requestPointerLock' in canvas.element) {
		rotationControls = new wgl.Controls.Orbit.Orbit(mouseInput, camera)
	} else {
		rotationControls = new wgl.Controls.Orbit.Orbit(touchInput, camera)
	}

	const touchMoveControls = new wgl.Controls.Movement.Touch(touchInput, camera, 25.0)
	// const touchRotateControls = new wgl.Controls.Rotation.Touch(touchInput, camera, 25.0)

	canvas.element.onclick = (evt) => audioManager.togglePlay(files[0], destination)

	renderer.setAspect(canvas.aspect)

	const prog: wgl.ShaderProgram = wgl.ShaderFactory.Create(gl, wgl.ShaderLibrary.PBR1)

	light.setColor([1, 0.5, 0.25])
	light.getAttribute('position').setValue([0, 0, -2])
	light.setIndex(0)

	light2.setColor([1, 0, 0])
	light2.getAttribute('direction').setValue([-20, -20, -20])

	const sphere = wgl.MeshFactory.create(gl, 'sphere', {finalize: true})
	const plane = wgl.MeshFactory.create(gl, 'quad', {finalize: true})
	const cubeMesh = wgl.MeshFactory.create(gl, 'cube', {finalize: true})

	const mat = wgl.Material.Material.Physical(gl)

	const planeModel = new wgl.Model(gl, prog, plane, mat)
	const sphereModel = new wgl.Model(gl, prog, sphere, mat)
	const cottageModel = new wgl.Model(gl, prog, firstObj, mat.clone())
	const sun = new wgl.Model(gl, prog, sphere, mat.clone())

	sun.material.getAttribute('albedo').setValue(light2.getColor())
	let dir = light2.getAttribute('direction').peekValue()
	sun.setPosition(vec3.negate(vec3.create(), dir as vec3))
	sun.setScale(5)

	cottageModel.material.getAttribute('albedo').setValue([0, 1, 0])
	cottageModel.setPosition([-5, -5, -5])

	planeModel.setPosition(vec3.fromValues(0, -1, 0))
	planeModel.setRotation(vec3.fromValues(90, 0, 0))
	planeModel.setScale(vec3.fromValues(2, 2, 2))

	let planeModels = getPlaneModels(gl, planeModel, nLevels)
	let farPlaneModels = getFarPlaneModels(gl, planeModel, nLevels)
	farPlaneModels.map(model => model.setMesh(cubeMesh))
	let farPlanePositions = farPlaneModels.map(model => model.getPosition())

	farPlaneModels.map(model => scene.add(model))
	// planeModels.map(model => scene.add(model))
	scene.add(cottageModel)

	scene.add(light)
	scene.add(light2)
	scene.add(sun)

	sphereModel.setPosition([-5, -5, 0])

	scene.add(sphereModel)

	let sphereModelPos = sphereModel.getPosition()

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

		window.requestAnimationFrame(animate)
	}

	animate()
}
import * as wgl from '../gl/src/web-gl'
import * as waud from '../aud/src/web-audio'
import { mat4, vec3, glMatrix } from 'gl-matrix'

function getPlaneModels(gl: WebGLRenderingContext, ref: wgl.Model, nLevels: number) {
	let planeModels = []
	for (let i: number = 0; i < nLevels; i++) {
		let planeModel: wgl.Model = new wgl.Model(gl, ref.program, ref.mesh, ref.material)
		planeModel.setPosition(vec3.fromValues(0, -i-1, 0))
		planeModel.setRotation(vec3.fromValues(90, 0, 0))
		planeModels.push(planeModel)
	}
	return planeModels
}

async function main() {

	//	audio init

	const audioManager = new waud.AudioContextManager()
	const nLevels = 32
	const analyser = new waud.AudioAnalyser(audioManager.getContext(), {levelsCount: nLevels})
	const files = ['sep30.mp3']

	analyser.setup()

	await Promise.all(audioManager.loadSounds(files))

	const destination = analyser.getAnalyserNode()

	const player = () => audioManager.togglePlay(files[0], destination)

	window.addEventListener('keydown', (evt) => {
		if (evt.keyCode == 32)
			player()
	})

	//	end autio init

	document.body.style.padding = '0'
	document.body.style.margin = '0'
	document.body.style.position = 'fixed'

	const canvas = new wgl.Canvas()
	const canvasElement = canvas.element

	const gl: WebGLRenderingContext = canvasElement.getContext('webgl')

	if (!gl) throw new Error('Unable to initialize GL context.')

	const scene = new wgl.Scene(gl)
	const renderer = new wgl.renderers.functional(gl)
	const light = new wgl.Light.Lights.Point(gl)
	const camera: wgl.Camera = new wgl.Camera()

	renderer.setAspect(canvas.aspect)

	const prog: wgl.ShaderProgram = wgl.ShaderFactory.Create(gl, wgl.ShaderLibrary.PBR1)

	camera.setPosition(vec3.fromValues(0, 0, 1))
	light.setColor([0, 0, 0])
	light.setPosition([0, 0, -1])
	light.setActive(true)

	const sphere: wgl.Mesh = wgl.MeshFactory.create(gl, wgl.MeshTypes.sphere, {finalize: true})
	const plane: wgl.Mesh = wgl.MeshFactory.create(gl, wgl.MeshTypes.quad, {finalize: true})
	const mat = new wgl.Material.Materials.Physical(gl)

	const planeModel = new wgl.Model(gl, prog, plane, mat)
	const sphereModel = new wgl.Model(gl, prog, sphere, mat)

	planeModel.setPosition(vec3.fromValues(0, -1, 0))
	planeModel.setRotation(vec3.fromValues(90, 0, 0))
	planeModel.setScale(vec3.fromValues(2, 2, 2))

	let keyStates: { [key:string]: boolean } = { 87: false, 65: false, 83: false, 68: false }
	let keyCodes = Object.keys(keyStates)

	const keySetter = (evt: KeyboardEvent, value: boolean) => {
		keyCodes.map((code) => {
			if (evt.keyCode == parseInt(code)) {
				keyStates[code] = value
			}
		})
	}

	let offsetX: number = 0
	let offsetY: number = 0
	let newMovement: boolean = false

	window.addEventListener('keydown', (evt: KeyboardEvent) => keySetter(evt, true))
	window.addEventListener('keyup', (evt: KeyboardEvent) => keySetter(evt, false))

	const onLockChange = () => {
		window.addEventListener('mousemove', (evt: MouseEvent) => {
			offsetX = evt.movementX
			offsetY = evt.movementY
			newMovement = true
		})
	}

	document.addEventListener('pointerlockchange', onLockChange, false)
	canvasElement.onclick = () => {
		if (canvasElement.requestPointerLock)
			canvasElement.requestPointerLock()
		player()
	}

	let lastTime = Date.now()
	let planeModels = getPlaneModels(gl, planeModel, nLevels)

	for (let model of planeModels) {
		scene.add(model)
	}

	scene.add(light)

	sphereModel.setPosition([-5, -5, 0])
	scene.add(sphereModel)

	camera.setPosition([13, 8, 12])
	camera.setPitch(-53)
	camera.setYaw(-508)

	const animate = () => {
		let currentTime = Date.now()
		let dt = (currentTime - lastTime) / 1000
		let speed = 2.0

		if (keyStates[87]) camera.move(wgl.directions.forwards, dt, speed)
		if (keyStates[65]) camera.move(wgl.directions.left, dt, speed)
		if (keyStates[68]) camera.move(wgl.directions.right, dt, speed)
		if (keyStates[83]) camera.move(wgl.directions.backwards, dt, speed)

		if (newMovement) {
			camera.rotate(offsetX, -offsetY)
			newMovement = false
		}
		lastTime = currentTime
		analyser.update()
		let levels = analyser.getLevels()
		for (let i: number = 0; i < planeModels.length; i++) {
			// let mat = <wgl.Material.Materials.Physical>planeModels[i].material
			mat.setAlbedo(vec3.fromValues(levels[i], 0, 1-levels[i]))
		}

		renderer.render(scene, camera)

		window.requestAnimationFrame(animate)
	}

	animate()
}

main()
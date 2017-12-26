import * as wgl from '../gl/src/web-gl'
import * as waud from '../aud/src/web-audio'
import { mat4, vec3, glMatrix } from 'gl-matrix'

function getPlaneModels(gl: WebGLRenderingContext, ref: wgl.Model, nLevels: number) {
	let planeModels = []
	for (let i: number = 0; i < nLevels; i++) {
		let planeModel: wgl.Model = new wgl.Model(gl, ref.mesh, ref.program)
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

	const canvas = document.createElement('canvas')
	document.body.appendChild(canvas)

	const dpr: number = window.devicePixelRatio || 1
	const canvasWidth = window.innerWidth
	const canvasHeight = window.innerHeight

	canvas.style.width = canvasWidth + 'px'
	canvas.style.height = canvasHeight + 'px'
	canvas.width = canvas.clientWidth * dpr
	canvas.height = canvas.clientHeight * dpr

	const gl: WebGLRenderingContext = canvas.getContext('webgl')

	if (!gl) throw new Error('Unable to initialize GL context.')

	const scene = new wgl.Scene(gl)
	const renderer = new wgl.Renderer(gl)

	renderer.setAspect(canvasWidth/canvasHeight)

	const prog: wgl.ShaderProgram = wgl.ShaderFactory.Create(gl, wgl.ShaderLibrary.PBR1)
	const prog1: wgl.ShaderProgram = wgl.ShaderFactory.Create(gl, wgl.ShaderLibrary.Basic)

	prog.bind()

	let camera: wgl.Camera = new wgl.Camera()

	camera.setPosition(vec3.fromValues(0, 0, 1))
	prog.setVec3f('point_lights[0].color', vec3.fromValues(1.0, 0.0, 0.0))
	prog.setVec3f('point_lights[0].position', vec3.fromValues(0.0, 0.0, -1.0))
	prog.setb('calculate_lighting', true)

	const sphere: wgl.Mesh = wgl.MeshFactory.create(gl, wgl.MeshTypes.sphere)
	const plane: wgl.Mesh = wgl.MeshFactory.create(gl, wgl.MeshTypes.quad)

	sphere.finalize()
	plane.finalize()

	const planeModel = new wgl.Model(gl, plane, prog)
	const sphereModel = new wgl.Model(gl, sphere, prog)

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
	canvas.onclick = () => {
		if (canvas.requestPointerLock)
			canvas.requestPointerLock()
		player()
	}

	let lastTime = Date.now()
	let planeModels = getPlaneModels(gl, planeModel, nLevels)

	for (let model of planeModels) {
		scene.addModel(model)
	}

	sphereModel.setPosition(vec3.fromValues(-5, -5, 0))
	scene.addModel(sphereModel)

	camera.setPosition(vec3.fromValues(13, 8, 12))
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
			planeModels[i].setColor(vec3.fromValues(levels[i], 0, 1-levels[i]))
		}

		renderer.render(scene, camera)

		window.requestAnimationFrame(animate)
	}

	animate()
}

main()
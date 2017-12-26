import * as wgl from '../gl/src/web-gl'
import * as waud from '../aud/src/web-audio'
import { mat4, vec3, glMatrix } from 'gl-matrix'

function getPlaneMatrices(nLevels: number) {
	let planeModels = []
	for (let i: number = 0; i < nLevels; i++) {
		let planeModel: mat4 = mat4.create()
		planeModel = mat4.translate(planeModel, planeModel, [0, -i-1, 0])
		planeModel = mat4.rotate(planeModel, planeModel, glMatrix.toRadian(90), [1, 0, 0])
		planeModels.push(planeModel)
	}
	return planeModels
}

async function GL() {

	//	audio init

	const audioManager = waud.AudioContextManager()
	const nLevels = 32
	const analyser = waud.AudioAnalyser(audioManager.getContext(), {levelsCount: nLevels})
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

	gl.enable(gl.DEPTH_TEST)
	gl.clearColor(0.2, 0.2, 0.2, 1.0)
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

	const prog: wgl.ShaderProgram = wgl.ShaderFactory.Create(gl, wgl.ShaderLibrary.PBR1)

	prog.bind()

	let camera: wgl.Camera = new wgl.Camera()
	let projection: mat4 = mat4.create()
	let planeModel: mat4 = mat4.create()

	planeModel = mat4.translate(planeModel, planeModel, [0, -1, 0])
	planeModel = mat4.rotate(planeModel, planeModel, glMatrix.toRadian(90), [1, 0, 0])
	planeModel = mat4.scale(planeModel, planeModel, [2, 2, 2])

	mat4.perspective(projection, 45, canvasWidth/canvasHeight, 0.1, 100)
	let model: mat4 = mat4.create()

	camera.setPosition(vec3.fromValues(0, 0, 1))

	prog.setMat4f('projection', projection)
	prog.setVec3f('light_color', vec3.fromValues(1.0, 0.0, 0.0))

	const mesh: wgl.Mesh = wgl.MeshFactory.create(gl, wgl.MeshTypes.sphere)
	const plane: wgl.Mesh = wgl.MeshFactory.create(gl, wgl.MeshTypes.quad)

	mesh.finalize()
	plane.finalize()
	
	prog.setVec3f('color', vec3.fromValues(0.25, 0.25, 1.0))
	prog.setVec3f('albedo', vec3.fromValues(0.5, 1.0, 0.0))

	mat4.translate(model, model, [0, -1, 2])
	mat4.scale(model, model, [0.4, 0.4, 0.4])
	prog.setMat4f('model', model)

	let keyStates = { 87: false, 65: false, 83: false, 68: false }
	let keyCodes = Object.keys(keyStates)

	const keySetter = (evt, value) => {
		keyCodes.map((code) => {
			if (evt.keyCode == parseInt(code)) {
				keyStates[code] = value
			}
		})
	}

	let lastX: number
	let lastY: number
	let offsetX: number = 0
	let offsetY: number = 0
	let firstMouse: boolean = true
	let newMovement: boolean = false

	window.addEventListener('keydown', (evt) => keySetter(evt, true))
	window.addEventListener('keyup', (evt) => keySetter(evt, false))

	const onLockChange = () => {
		window.addEventListener('mousemove', (evt) => {
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
	let planeModels = getPlaneMatrices(nLevels)

	camera.setPosition(vec3.fromValues(13, 8, 12))
	camera.setPitch(-53)
	camera.setYaw(-508)

	const animate = () => {
		let currentTime = Date.now()
		let dt = (currentTime - lastTime) / 1000
		let speed = 2.0
		if (keyStates[87])
			camera.move(wgl.directions.forwards, dt, speed)
		if (keyStates[65])
			camera.move(wgl.directions.left, dt, speed)
		if (keyStates[68])
			camera.move(wgl.directions.right, dt, speed)
		if (keyStates[83])
			camera.move(wgl.directions.backwards, dt, speed)
		if (newMovement) {
			camera.rotate(offsetX, -offsetY)
			newMovement = false
		}
		prog.setMat4f('view', camera.getViewMatrix())
		prog.setVec3f('cam_position', camera.position)
		lastTime = currentTime
		gl.clearColor(0.2, 0.2, 0.2, 1.0)
		gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
		plane.bind(prog)
		analyser.update()
		let levels = analyser.getLevels()
		for (let i: number = 0; i < planeModels.length; i++) {
			prog.setMat4f('model', planeModels[i])
			prog.setVec3f('light_color', vec3.fromValues(levels[i], 0, 1-levels[i]))
			plane.draw()
		}
		plane.unbind()

		prog.setMat4f('model', model)
		mesh.bind(prog)
		mesh.draw()
		mesh.unbind()

		window.requestAnimationFrame(animate)
	}

	mesh.bind(prog)
	animate()
}

GL()
import * as wgl from '../gl/src/web-gl'
import * as waud from '../aud/src/web-audio'
import { mat4, vec3, glMatrix } from 'gl-matrix'

const GL = () => {

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

	gl.clearColor(0.2, 0.2, 0.2, 1.0)
	gl.clear(gl.COLOR_BUFFER_BIT)

	const prog: wgl.ShaderProgram = wgl.ShaderFactory.Create(gl, wgl.ShaderLibrary.PBR1)

	prog.bind()

	let camera: wgl.Camera = new wgl.Camera()
	let projection: mat4 = mat4.create()
	let planeModel: mat4 = mat4.create()

	planeModel = mat4.translate(planeModel, planeModel, [0, -1, 0])
	planeModel = mat4.rotate(planeModel, planeModel, glMatrix.toRadian(90), [1, 0, 0])

	mat4.perspective(projection, 45, canvasWidth/canvasHeight, 0.1, 100)
	let model: mat4 = mat4.create()

	camera.setPosition(vec3.fromValues(0, 0, 1))

	prog.setMat4f('model', model)
	prog.setMat4f('projection', projection)
	prog.setMat4f('view', camera.getViewMatrix())
	prog.setVec3f('color', vec3.fromValues(1.0, 1.0, 1.0))

	const mesh: wgl.Mesh = new wgl.Mesh(gl)
	const plane: wgl.Mesh = new wgl.Mesh(gl)

	wgl.MeshFactory.makeSphere(mesh, 128)
	wgl.MeshFactory.makeQuad(plane)
	mesh.finalize()
	plane.finalize()
	
	prog.setVec3f('color', vec3.fromValues(0.25, 0.25, 1.0))
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
	canvas.onclick = () => canvas.requestPointerLock()

	let lastTime = Date.now()

	const animate = () => {
		let currentTime = Date.now()
		let dt = (currentTime - lastTime) / 1000
		let speed = 0.5
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
		gl.clear(gl.COLOR_BUFFER_BIT)
		prog.setMat4f('model', model)
		mesh.bind(prog)
		mesh.draw()
		mesh.unbind()
		prog.setMat4f('model', planeModel)
		plane.bind(prog)
		plane.draw()
		plane.unbind()
		window.requestAnimationFrame(animate)
	}

	mesh.bind(prog)
	animate()
	// mesh2.unbind()

}

GL()
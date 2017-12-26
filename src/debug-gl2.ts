import * as wgl from '../gl/src/web-gl'
import * as waud from '../aud/src/web-audio'
import { mat4, vec3, glMatrix } from 'gl-matrix'

const DEBUG = {
	drawLightSpheres: false
}

function makeVec3(x: number, y: number, z: number): vec3 {
	return vec3.fromValues(x, y, z)
}

function getPlaneMatrices(nLevels: number): Array<mat4> {
	let planeModels: Array<mat4> = []
	for (let i: number = 0; i < nLevels; i++) {
		let planeModel: mat4 = mat4.create()
		mat4.translate(planeModel, planeModel, [0, -i-1, 0])
		mat4.rotate(planeModel, planeModel, glMatrix.toRadian(90), [1, 0, 0])
		// mat4.scale(planeModel, planeModel, makeVec3(2, 10, 2))
		planeModels.push(planeModel)
	}
	return planeModels
}

type fpsStatsT = {
	el: HTMLElement,
	stats: wgl.FrameStats
}

const fpsStats: fpsStatsT = {
	el: null,
	stats: null
}

function initStats(): void {
	const statsEl = document.createElement('div')
	statsEl.style.position = 'fixed'
	statsEl.style.left = '0px'
	statsEl.style.top = '0px'
	statsEl.style.backgroundColor = 'black'
	statsEl.style.opacity = '0.5'
	statsEl.style.color = 'white'

	document.body.appendChild(statsEl)

	fpsStats.el = statsEl
	fpsStats.stats = new wgl.FrameStats()
}

function updateStats(dt: number) {
	fpsStats.stats.update(dt)
	fpsStats.el.innerHTML = fpsStats.stats.getString()
}

async function main() {

	//	audio init

	const audioManager = new waud.AudioContextManager()
	const nLevels = 32
	const analyserOpts = waud.AudioAnalyser.Defaults()
	analyserOpts.levelsCount = nLevels
	const analyser = new waud.AudioAnalyser(audioManager.getContext(), analyserOpts)
	const files = ['water.mp3']

	analyser.setup()

	await Promise.all(audioManager.loadSounds(files))

	const destination = analyser.getAnalyserNode()

	const togglePlay = () => audioManager.togglePlay(files[0], destination)

	window.addEventListener('keydown', (evt: KeyboardEvent) => {
		if (evt.keyCode == 32)
			togglePlay()
	})

	initStats()

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
	let lightModel: mat4 = mat4.create()

	mat4.translate(planeModel, planeModel, [0, -1, 0])
	mat4.rotate(planeModel, planeModel, glMatrix.toRadian(90), [1, 0, 0])
	mat4.scale(planeModel, planeModel, [2, 2, 2])

	mat4.perspective(projection, 45, canvasWidth/canvasHeight, 0.1, 100)
	let sphereModel: mat4 = mat4.create()

	prog.setMat4f('projection', projection)

	const mesh: wgl.Mesh = wgl.MeshFactory.create(gl, wgl.MeshTypes.sphere)
	const plane: wgl.Mesh = wgl.MeshFactory.create(gl, wgl.MeshTypes.quad)
	const lightMesh: wgl.Mesh = wgl.MeshFactory.create(gl, wgl.MeshTypes.sphere)

	mesh.finalize()
	plane.finalize()
	lightMesh.finalize()

	const lightPosition = makeVec3(0, 0, -1)
	mat4.translate(lightModel, lightModel, lightPosition)
	
	prog.setVec3f('point_lights[0].position', lightPosition)
	prog.setVec3f('point_lights[0].color', makeVec3(1.0, 0.0, 0.0))

	prog.setVec3f('albedo', vec3.fromValues(0.5, 1.0, 0.0))
	prog.setf('roughness', 0.4)
	prog.setf('metallic', 0.2)

	mat4.translate(sphereModel, sphereModel, [0, -5, 4])
	mat4.scale(sphereModel, sphereModel, [0.4, 0.4, 0.4])
	prog.setMat4f('model', sphereModel)

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
		togglePlay()
	}

	let lastTime = Date.now()
	let planeModels = getPlaneMatrices(nLevels)

	camera.setPosition(vec3.fromValues(13, 8, 12))
	camera.setPitch(-53)
	camera.setYaw(-508)

	let planeModelCopies: Array<mat4> = planeModels.map(model => mat4.create())

	let firstIteration: boolean = true

	const animate = () => {

		gl.clearColor(0.2, 0.2, 0.2, 1.0)
		gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

		let currentTime = Date.now()
		let dt = (currentTime - lastTime) / 1000
		let speed = 2.0
		lastTime = currentTime

		if (!firstIteration) updateStats(dt)
		if (firstIteration) firstIteration = false

		if (keyStates[87]) camera.move(wgl.directions.forwards, dt, speed)
		if (keyStates[65]) camera.move(wgl.directions.left, dt, speed)
		if (keyStates[68]) camera.move(wgl.directions.right, dt, speed)
		if (keyStates[83]) camera.move(wgl.directions.backwards, dt, speed)

		if (newMovement) {
			camera.rotate(offsetX, -offsetY)
			newMovement = false
		}

		prog.setb('calculate_lighting', true)
		prog.setVec3f('albedo', vec3.fromValues(0.5, 1.0, 0.0))
		prog.setMat4f('view', camera.getViewMatrix())
		prog.setVec3f('cam_position', camera.position)

		plane.bind(prog)

		analyser.update()
		let levels = analyser.getLevels()
		let wave = analyser.getWave()

		for (let i: number = 0; i < planeModels.length; i++) {
			let displacement = wave[i] * .1
			mat4.translate(planeModelCopies[i], planeModels[i], vec3.fromValues(0, displacement, 0))
			// prog.setMat4f('model', planeModelCopies[i])
			prog.setMat4f('model', planeModels[i])
			prog.setVec3f('point_lights[0].color', vec3.fromValues(levels[i], 0, 1-levels[i]))
			plane.draw()
		}

		plane.unbind()

		let sphereModelCopy = mat4.copy(mat4.create(), sphereModel)
		mat4.translate(sphereModelCopy, sphereModelCopy, vec3.fromValues(0, wave[0]*0.2, 0))

		prog.setVec3f('point_lights[0].color', vec3.fromValues(levels[0], 0, 1-levels[0]))
		prog.setMat4f('model', sphereModelCopy)

		mesh.bind(prog)
		mesh.draw()
		mesh.unbind()

		if (DEBUG.drawLightSpheres) {
			prog.setb('calculate_lighting', false)
			prog.setVec3f('albedo', makeVec3(levels[0], 0, 1-levels[0]))
			prog.setMat4f('model', lightModel)
			lightMesh.bind(prog)
			lightMesh.draw()
			lightMesh.unbind()
		}

		window.requestAnimationFrame(animate)
	}

	mesh.bind(prog)
	animate()
}

main()
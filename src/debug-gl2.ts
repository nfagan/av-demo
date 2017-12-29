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
		let planeModel = new wgl.util.matrix.transform()
			.translate([0, -i-1, 0])
			.rotate(wgl.math.radians(90), [1, 0, 0])
			.mat()
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

export async function main() {

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
		if (evt.keyCode == 192)
			audioManager.stop(files[0])
	})

	initStats()

	//	end autio init

	document.body.style.padding = '0'
	document.body.style.margin = '0'
	document.body.style.position = 'fixed'

	const canvas = new wgl.Canvas()
	const canvasElement = canvas.element

	const gl: WebGLRenderingContext = canvasElement.getContext('webgl')

	if (!gl) throw new Error('Unable to initialize GL context.')

	const renderer = new wgl.renderers.functional(gl)
	const prog: wgl.ShaderProgram = wgl.ShaderFactory.Create(gl, wgl.ShaderLibrary.PBR1)
	let camera: wgl.Camera = new wgl.Camera()

	renderer.setAspect(canvas.aspect)

	const firstLight = wgl.Light.Light.Point(gl)
	firstLight.setColor([1, 0, 0])
	firstLight.getAttribute('position').setValue([0, 0, -1])

	let planeModel = new wgl.util.matrix.transform()
		.translate([0, -1, 0])
		.rotate(wgl.math.radians(90), [1, 0, 0])
		.scale([2, 2, 2])
		.mat()

	let sphereModel = new wgl.util.matrix.transform()
		.translate([0, -5, 4])
		.scale([0.4, 0.4, 0.4])
		.mat()

	let lightModel = new wgl.util.matrix.transform()
		.translate(<vec3>firstLight.getAttribute('position').getValue())
		.mat()

	const meshCreateOpts = { finalize: true }
	const oscillatingSphere = wgl.MeshFactory.create(gl, wgl.MeshTypes.sphere, meshCreateOpts)
	const plane = wgl.MeshFactory.create(gl, wgl.MeshTypes.quad, meshCreateOpts)
	const lightMesh = wgl.MeshFactory.create(gl, wgl.MeshTypes.sphere, meshCreateOpts)

	let planeMaterial = wgl.Material.Material.Physical(gl, [0.5, 1.0, 0.0], 0.4, 0.2)
	let lightSphereMaterial = wgl.Material.Material.Physical(gl, [1, 1, 1], 0.4, 0.2)

	renderer.configureTransform(prog, sphereModel)

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
		togglePlay()
	}

	let lastTime = Date.now()
	let planeModels = getPlaneMatrices(nLevels)

	camera.setPosition(vec3.fromValues(13, 8, 12))
	camera.setPitch(-53)
	camera.setYaw(-508)

	renderer.configureCamera(prog, camera)

	let planeModelCopies: Array<mat4> = planeModels.map(model => mat4.create())

	let firstIteration: boolean = true

	const animate = () => {

		renderer.clear()

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

		renderer.configureCamera(prog, camera)
		renderer.configureMaterial(prog, planeMaterial)

		analyser.update()
		let levels = analyser.getLevels()
		let wave = analyser.getWave()

		// let attr = planeMaterial.setRoughness(0.1)

		firstLight.setActive(true)

		for (let i: number = 0; i < planeModels.length; i++) {
			let displacement = wave[i] * .1
			mat4.translate(planeModelCopies[i], planeModels[i], [0, displacement, 0])
			firstLight.setColor([levels[i], 0, 1-levels[i]])
			renderer.configureTransform(prog, planeModels[i])
			renderer.configureLight(prog, firstLight)
			renderer.draw(prog, plane)
		}

		let sphereModelCopy = mat4.copy(mat4.create(), sphereModel)
		mat4.translate(sphereModelCopy, sphereModelCopy, [0, wave[0]*0.2, 0])

		firstLight.setColor([levels[0], 0, 1-levels[0]])
		renderer.configureLight(prog, firstLight)
		renderer.configureTransform(prog, sphereModelCopy)

		renderer.draw(prog, oscillatingSphere)

		if (DEBUG.drawLightSpheres) {
			firstLight.setActive(false)
			renderer.configureLight(prog, firstLight)
			renderer.configureMaterial(prog, lightSphereMaterial)
			renderer.configureTransform(prog, lightModel)
			renderer.draw(prog, lightMesh)
		}

		window.requestAnimationFrame(animate)
	}

	animate()
}
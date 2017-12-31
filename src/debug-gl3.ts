import * as wgl from '../gl/src/web-gl'
import * as waud from '../aud/src/web-audio'
import { mat4, vec4, vec3, glMatrix } from 'gl-matrix'

function getPlaneModels(gl: WebGLRenderingContext, ref: wgl.Model, nLevels: number): Array<wgl.Model> {
	let planeModels = []
	for (let i: number = 0; i < nLevels; i++) {
		let planeModel: wgl.Model = new wgl.Model(gl, ref.program, ref.mesh, ref.material.clone())
		planeModel.setPosition(vec3.fromValues(0, -i-1, 0))
		planeModel.setRotation(vec3.fromValues(90, 0, 0))
		planeModels.push(planeModel)
	}
	return planeModels
}

function getFarPlaneModels(gl: WebGLRenderingContext, ref: wgl.Model, nModels: number): Array<wgl.Model> {
	let planeModels: Array<wgl.Model> = []
	for (let i: number = 0; i < nModels; i++) {
		for (let j: number = 0; j < nModels; j++) {
			let planeModel: wgl.Model = new wgl.Model(gl, ref.program, ref.mesh, ref.material.clone())
			planeModel.setPosition(vec3.fromValues(i/2, j/2, -10))
			planeModel.setScale(0.5)
			planeModels.push(planeModel)
		}
	}
	return planeModels
}

type fpsStatsT = {
	el: HTMLElement,
	stats: wgl.FrameStats
	visible: boolean
}

const fpsStats: fpsStatsT = {
	el: null,
	stats: null,
	visible: false
}

function initStats(): void {
	const statsEl = document.createElement('div')
	statsEl.style.position = 'fixed'
	statsEl.style.left = '0px'
	statsEl.style.top = '0px'
	statsEl.style.backgroundColor = 'black'
	statsEl.style.opacity = '0.0'
	statsEl.style.color = 'white'
	statsEl.onclick = (evt: MouseEvent) => {
		if (fpsStats.visible) {
			statsEl.style.opacity = '0'
			fpsStats.visible = false
		} else {
			statsEl.style.opacity = '0.5'
			fpsStats.visible = true
		}
	}

	document.body.appendChild(statsEl)

	fpsStats.el = statsEl
	fpsStats.stats = new wgl.FrameStats()
}

function updateStats() {
	fpsStats.stats.update()
	fpsStats.el.innerHTML = fpsStats.stats.getString()
}

function Distance(a: {x:number, y:number}, b: {x:number, y:number}): number {
	return Math.sqrt(Math.pow(b.x-a.x, 2) + Math.pow(b.y-a.y, 2))
}
function Mean(a: Array<{x:number, y:number}>): {x:number, y:number} {
	let sum = {x:0, y:0}, n = a.length
	if (n === 0) return sum
	for (let i = 0; i < n; i++) {
		sum.x += a[i].x
		sum.y += a[i].y
	}
	sum.x /= n
	sum.y /= n
	return sum
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

	window.addEventListener('keydown', (evt) => {
		if (evt.keyCode == 32)
			player()
	})

	//	end autio init

	document.body.style.padding = '0'
	document.body.style.margin = '0'
	document.body.style.position = 'fixed'

	const keyboard = new wgl.Input.Keyboard()
	const canvas = new wgl.Canvas()
	const canvasElement = canvas.element

	const gl: WebGLRenderingContext = canvasElement.getContext('webgl')

	if (!gl) throw new Error('Unable to initialize GL context.')

	let firstObj = await wgl.Loaders.OBJ.loadMesh(gl, '/obj/lp_tree:lowpolytree.obj')
	firstObj.finalize()

	initStats()

	const scene = new wgl.Scene(gl)
	const renderer = new wgl.renderers.functional(gl)
	const light = wgl.Light.Light.Point(gl)
	const light2 = wgl.Light.Light.Point(gl)
	const camera: wgl.Camera = new wgl.Camera()
	const moveControls = new wgl.Controls.Movement.Keyboard(keyboard, camera, 5.0)

	renderer.setAspect(canvas.aspect)

	const prog: wgl.ShaderProgram = wgl.ShaderFactory.Create(gl, wgl.ShaderLibrary.PBR1)

	camera.setPosition(vec3.fromValues(0, 0, 1))
	light.setColor([1, 1, 1])
	light.getAttribute('position').setValue([0, 0, -2])

	light2.setColor([0, 0, 1])
	light2.getAttribute('position').setValue([-5, -5, -5])
	light2.setIndex(1)

	const sphere = wgl.MeshFactory.create(gl, 'sphere', {finalize: true})
	const plane = wgl.MeshFactory.create(gl, 'quad', {finalize: true})
	const cubeMesh = wgl.MeshFactory.create(gl, 'cube', {finalize: true})
	const mat = wgl.Material.Material.Physical(gl)

	const planeModel = new wgl.Model(gl, prog, plane, mat)
	const sphereModel = new wgl.Model(gl, prog, sphere, mat)
	const cottageModel = new wgl.Model(gl, prog, firstObj, mat)
	const bigSphere = new wgl.Model(gl, prog, sphere, mat)

	cottageModel.setPosition([-5, -5, -5])

	scene.add(cottageModel)

	bigSphere.setPosition([0, 0, 0])
	bigSphere.setScale(5)

	planeModel.setPosition(vec3.fromValues(0, -1, 0))
	planeModel.setRotation(vec3.fromValues(90, 0, 0))
	planeModel.setScale(vec3.fromValues(2, 2, 2))

	let offsetX: number = 0
	let offsetY: number = 0
	type pt = {x:number, y:number}
	const lasts : {x:number, y:number,record:boolean,velocities:Array<pt>, 
		lastT:number, nVels:number, meanVel:pt, isRelease: boolean } = 
		{ x: 0, y: 0, record: false, velocities: [], 
			lastT: 0, nVels: 100, meanVel: {x:0, y:0}, isRelease: false }
	const lastsZ = { dist: 0, record: false, lastT: 0, offDist: 0 }
	let newMovement: boolean = false

	let isMouseListening: boolean = false
	let isMouseControls: boolean = canvasElement.requestPointerLock !== undefined
	let isVelocitySensitive: boolean = true

	const mouseListen = (evt: MouseEvent) => {
		offsetX = evt.movementX
		offsetY = evt.movementY
		newMovement = true
	}

	const onLockChange = () => {
		if (!isMouseListening) {
			window.addEventListener('mousemove', mouseListen)
			isMouseListening = true
		}
	}

	if (!canvasElement.requestPointerLock) {
		let touchBegan: boolean = false
		window.addEventListener('touchstart', (evt: TouchEvent) => {
			if (touchBegan || evt.touches.length > 2 || evt.touches.length == 1)
				return
			touchBegan = true
			lasts.isRelease = false
		})
		window.addEventListener('touchmove', (evt: TouchEvent) => {
			evt.preventDefault()
			if (evt.touches.length > 2)
				return
			if (lasts.record) {
				offsetX = evt.touches[0].clientX - lasts.x
				offsetY = evt.touches[0].clientY - lasts.y
				offsetX = -offsetX
				offsetY = -offsetY
				let vel: pt = {x: evt.touches[0].clientX - lasts.x, y: evt.touches[0].clientY - lasts.y}
				let dt = Date.now() - lasts.lastT
				if (dt > 0) {
					vel.x = vel.x / dt
					vel.y = vel.y / dt
					if (lasts.velocities.length < lasts.nVels) {
						lasts.velocities.push(vel)
					} else {
						lasts.velocities.shift()
						lasts.velocities.push(vel)
						// lasts.velocities[lasts.nVels-1] = vel
					}
				}
				lasts.meanVel = Mean(lasts.velocities)
			} else {
				offsetX = 0
				offsetY = 0
				lasts.velocities = []
				lasts.record = true
			}
			lasts.x = evt.touches[0].clientX
			lasts.y = evt.touches[0].clientY
			lasts.lastT = Date.now()
			newMovement = true
			if (evt.touches.length == 1)
				return
			let currX1 = evt.touches[0].clientX,
				currX2 = evt.touches[1].clientX,
				currY1 = evt.touches[0].clientY,
				currY2 = evt.touches[1].clientY
			let pt1 = {x: currX1, y: currY1}
			let pt2 = {x: currX2, y: currY2}
			let currDist = Distance(pt1, pt2)
			if (lastsZ.record) {
				let offDist = currDist - lastsZ.dist
				lastsZ.offDist = offDist
				let dt = Date.now() - lastsZ.lastT
				let dir: wgl.directions = offDist > 0 ? 'forwards' : 'backwards'
				camera.move(dir, dt, 0.01)
			} else {
				lastsZ.offDist = 0
				lastsZ.record = true
			}
			lastsZ.dist = currDist
			lastsZ.lastT = Date.now()
		})
		window.addEventListener('touchend', (evt: TouchEvent) => {
			lasts.record = false
			lastsZ.record = false
			lasts.isRelease = true
			touchBegan = false
		})
	}

	keyboard.down((evt) => {
		if (evt.keyCode == 27) {
			window.removeEventListener('mousemove', mouseListen)
			isMouseListening = false
		}
	})

	document.addEventListener('pointerlockchange', onLockChange, false)
	canvasElement.onclick = () => {
		player()
		if (canvasElement.requestPointerLock) {
			canvasElement.requestPointerLock()
		}
	}

	let lastTime = Date.now()
	let planeModels = getPlaneModels(gl, planeModel, nLevels)
	let farPlaneModels = getFarPlaneModels(gl, planeModel, nLevels)
	farPlaneModels.map(model => model.setMesh(cubeMesh))
	let farPlanePositions = farPlaneModels.map(model => model.getPosition())

	farPlaneModels.map(model => scene.add(model))
	// planeModels.map(model => scene.add(model))

	// scene.add(cottageModel)
	// scene.add(bigSphere)

	scene.add(light)
	scene.add(light2)

	sphereModel.setPosition([-5, -5, 0])

	scene.add(sphereModel)

	camera.setPosition([13, 8, 12])
	camera.setPitch(-53)
	camera.setYaw(-508)

	let firstIteration: boolean = true

	let sphereModelPos = sphereModel.getPosition()

	camera.setPosition([30, 8, 31])
	camera.setPitch(-17)
	camera.setYaw(-487)

	// camera.setPosition([0, 0, 30])
	// camera.setPitch(0)
	// camera.setYaw(-90)

	// camera.setPosition([9, 12, 5])
	// camera.setPitch(-15)
	// camera.setYaw(-450)

	let needRecalc: boolean = false

	const animate = () => {
		let currentTime = Date.now()
		let dt = (currentTime - lastTime) / 1000
		let speed = 5.0

		moveControls.update()

		if (newMovement) {
			camera.rotate(offsetX, -offsetY)
			newMovement = false
		}

		if (isVelocitySensitive && !isMouseControls && lasts.isRelease) {
			camera.rotate(-lasts.meanVel.x, lasts.meanVel.y)
			let sign: pt = {x: -1, y: -1}
			if (lasts.meanVel.x < 0) sign.x = 1
			if (lasts.meanVel.y < 0) sign.y = 1
			lasts.meanVel.x += (0.05 * sign.x)
			lasts.meanVel.y += (0.05 * sign.y)
			if (Math.abs(lasts.meanVel.x) < 0.00001) lasts.meanVel.x = 0
			if (Math.abs(lasts.meanVel.y) < 0.00001) lasts.meanVel.y = 0
		}

		if (!firstIteration) updateStats()
		if (firstIteration) firstIteration = false

		lastTime = currentTime
		analyser.update()

		let levels = analyser.getLevels()
		let waves = analyser.getWave()

		planeModels.map((model, i) => {
			let color = [levels[i], 0, 1-levels[i]]
			model.material.getAttribute('albedo').setValue(color)
		})

		sphereModel.setPosition([-5, waves[0]*0.2, 0])

		farPlaneModels.map((model, i) => {
			let subs = wgl.util.common.ind2sub(i, [nLevels, nLevels])
			let row = subs[0]
			let col = subs[1]
			let value = levels[col]
			let fracMax = row / nLevels
			let color = [1-value, 0, fracMax * value]
			model.material.getAttribute('albedo').setValue(color)
		})

		let isLeftDown = keyboard.isDown(wgl.Input.Keys.Left)
		let isRightDown = keyboard.isDown(wgl.Input.Keys.Right)

		const clone = wgl.util.common.clone
		let focusPoint = [0, 0, 0]
		let pos = <vec3>clone(camera.position)
		let camFocus = vec3.subtract(vec3.create(), pos, focusPoint)
		let right = <vec3>clone(camera.right)
		let up = <vec3>clone(camera.up)
		let newPos = vec3.create()

		if (isLeftDown || isRightDown) {

			// camera.rotate(3, 0)
			// camera.move('left', 1/60, 3)

			right = vec3.normalize(right, right)
			up = vec3.normalize(up, up)

			let yaw = 1

			if (isLeftDown)
				yaw = -1

			let mat = new wgl.util.matrix.transform()
				.rotate(wgl.math.radians(yaw), up)
				.mat()

			let camFocus4 = vec4.fromValues(camFocus[0], camFocus[1], camFocus[2], 1)
			vec4.transformMat4(camFocus4, camFocus4, mat)
			vec4.add(camFocus4, camFocus4, [focusPoint[0], focusPoint[1], focusPoint[2], 0])

			newPos[0] = camFocus4[0]
			newPos[1] = camFocus4[1]
			newPos[2] = camFocus4[2]

			camera.setPosition(newPos)

			// camera.lookAt(focusPoint)

			needRecalc = true
		} else if (needRecalc) {
			// camera.lookAt(null)

			// let direction = vec3.subtract(vec3.create(), focusPoint, camera.position)
			// vec3.normalize(direction, direction)
			// let newRight = vec3.cross(vec3.create(), direction, up)
			// newRight[2] = 0
			// vec3.normalize(newRight, newRight)
			// let newUp = vec3.cross(vec3.create(), right, direction)
			// vec3.normalize(newUp, newUp)

			// camera.right = newRight
			// camera.up = newUp

			// needRecalc = false
		}

		renderer.render(scene, camera)

		window.requestAnimationFrame(animate)
	}

	animate()
}
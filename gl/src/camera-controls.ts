import * as _Keyboard from './keyboard'
import * as XY from './input-xy'
import { Camera, directions } from './camera'
import { DeltaTimer, ratios } from './time-util'
import { vec2, vec3, vec4 } from 'gl-matrix'
import * as math from './wgl-math'
import { common, matrix } from './util'

export namespace Orbit {

	type OrbitTouchOpts = {
		nVelocitySamples: number,
		velocityDecaySensitivity: number
	}

	export class Touch {

		private timer: DeltaTimer
		private touch: XY.Touch
		private camera: Camera

		private began: boolean
		private released: boolean
		private velocities: Array<vec2>
		private velocity: vec2
		private nVelocitySamples: number
		private meanVelocity: vec2
		private coordinates: vec2
		private deltas: vec2
		private velocityDecaySensitivity: number

		constructor(touch: XY.Touch, camera: Camera, opts: OrbitTouchOpts = Touch.Defaults()) {
			this.timer = new DeltaTimer()
			this.touch = touch
			this.camera = camera

			this.began = false
			this.released = false
			this.velocities = []
			this.velocity = vec2.fromValues(0, 0)
			this.nVelocitySamples = opts.nVelocitySamples
			this.velocityDecaySensitivity = opts.velocityDecaySensitivity
			this.meanVelocity = vec2.fromValues(0, 0)
			this.coordinates = vec2.fromValues(0, 0)
			this.deltas = vec2.fromValues(0, 0)

			this.setup()
		}

		public update(): void {
			const deltas = this.deltas
			const camera = this.camera
			const ratio = this.timer.getRatio()
			const decaySens = this.velocityDecaySensitivity

			if (!this.released) {
				camera.rotate(-deltas[0], deltas[1])
			} else {
				let vel = this.meanVelocity
				let xvel = (vel[0] * ratio.second) / ratio.first
				let yvel = (vel[1] * ratio.second) / ratio.first
				camera.rotate(-xvel, yvel)
				vel[0] /= decaySens
				vel[1] /= decaySens
				if (Math.abs(vel[0]) < 0.00001) vel[0] = 0
				if (Math.abs(vel[1]) < 0.00001) vel[1] = 0
			}
		}

		private setup(): void {
			const touch = this.touch
			const self = this

			touch.start(evt => {
				if (self.began || evt.touches.length !== 1)
					return
				let touch0 = evt.touches[0]
				self.coordinates[0] = touch0.clientX
				self.coordinates[1] = touch0.clientY
				self.timer.update()
				self.began = true
				self.released = false
				self.deltas[0] = 0
				self.deltas[1] = 0
				self.velocities = []
			})

			touch.move(evt => {
				evt.preventDefault()
				self.timer.update()
				let touch0 = evt.touches[0]
				let currentCoordinates = vec2.fromValues(touch0.clientX, touch0.clientY)
				self.deltas = vec2.subtract(self.deltas, currentCoordinates, self.coordinates)
				let deltaT = self.timer.delta()
				if (deltaT > 0) {
					let velocity = vec2.copy(self.velocity, self.deltas)
					vec2.divide(velocity, velocity, vec2.fromValues(deltaT, deltaT))
					if (self.velocities.length < self.nVelocitySamples) {
						self.velocities.push(velocity)
					} else {
						self.velocities.shift()
						self.velocities.push(velocity)
					}
				}
				if (self.velocities.length > 0) {
					self.meanVelocity = <vec2>math.vecmean(self.velocities)
				} else {
					self.meanVelocity = vec2.fromValues(0, 0)
				}
				self.coordinates = currentCoordinates
			})

			touch.end(evt => {
				self.released = true
				self.began = false
			})
		}

		public static Defaults(): OrbitTouchOpts {
			return {
				nVelocitySamples: 100,
				velocityDecaySensitivity: 1.1
			}
		}

	}

}

export namespace Movement {

	type KeyT = { [K in directions]: number }

	abstract class movement<T> {
		protected timer: DeltaTimer
		protected input: T
		protected camera: Camera
		protected speed: number

		abstract update(): void

		constructor(input: T, camera: Camera, speed: number) {
			this.timer = new DeltaTimer()
			this.input = input
			this.camera = camera
			this.speed = speed
		}
	}

	export class Keyboard extends movement<_Keyboard.Keyboard> {

		public Keys: KeyT = {
			forwards: _Keyboard.Keys.W,
			backwards: _Keyboard.Keys.S,
			left: _Keyboard.Keys.A,
			right: _Keyboard.Keys.D
		}

		constructor(kb: _Keyboard.Keyboard, camera: Camera, speed: number) {
			super(kb, camera, speed)
		}

		public update(): void {
			const timer = this.timer
			timer.update()
			const input = this.input
			const camera = this.camera
			const keys = this.Keys
			const speed = this.speed
			const dt = timer.delta()
			Object.keys(keys).map(dir => {
				let keyN = Keyboard.get(keys, dir as directions)
				if (input.isDown(keyN)) {
					camera.move(dir as directions, dt, speed)
				}
			})
		}

		public static get<T, K extends keyof T>(obj: T, name: K): T[K] {
    		return obj[name];
		}
	}

	export class Touch extends movement<XY.Touch> {

		dist: number
		began: boolean

		constructor(touch: XY.Touch, camera: Camera, speed: number) {
			super(touch, camera, speed)

			this.dist = 0
			this.began = false

			this.setupMovement()
			this.setupRotation()
		}

		private setupRotation(): void {
			const touch = this.input
			const self = this
			const camera = this.camera

			touch.start(evt => {
				if (self.began || evt.touches.length !== 3)
					return
				self.began = true
				self.timer.update()
			})

			// touch.move(evt => {
			// 	evt.preventDefault()
			// 	self.timer.update()
			// 	if (evt.touches.length !== 3)
			// 		return
			// 	const clone = common.clone
			// 	let focusPoint = [0, 0, 0]
			// 	let pos = <vec3>clone(camera.position)
			// 	let camFocus = vec3.subtract(vec3.create(), pos, focusPoint)
			// 	let right = <vec3>clone(camera.right)
			// 	let up = <vec3>clone(camera.up)
			// 	let newPos = vec3.create()
			// 	right = vec3.normalize(right, right)
			// 	up = vec3.normalize(up, up)

			// 	// let yaw = 1

			// 	// if (isLeftDown)
			// 	let yaw = -1 * self.timer.delta()

			// 	let mat = new matrix.transform()
			// 		.rotate(math.radians(yaw), up)
			// 		.mat()

			// 	let camFocus4 = vec4.fromValues(camFocus[0], camFocus[1], camFocus[2], 1)
			// 	vec4.transformMat4(camFocus4, camFocus4, mat)
			// 	vec4.add(camFocus4, camFocus4, [focusPoint[0], focusPoint[1], focusPoint[2], 0])

			// 	newPos[0] = camFocus4[0]
			// 	newPos[1] = camFocus4[1]
			// 	newPos[2] = camFocus4[2]
			// 	camera.setPosition(newPos)
			// })

			touch.end(evt => {
				self.began = false
			})
		}

		private setupMovement(): void {
			const touch = this.input
			const self = this

			const getDistance = (evt: TouchEvent) => {
				let currX1 = evt.touches[0].clientX,
					currX2 = evt.touches[1].clientX,
					currY1 = evt.touches[0].clientY,
					currY2 = evt.touches[1].clientY
				let pt1 = vec2.fromValues(currX1, currY1)
				let pt2 = vec2.fromValues(currX2, currY2)
				return math.distance(pt1, pt2)
			}

			touch.start(evt => {
				if (self.began || evt.touches.length !== 2)
					return
				self.began = true
				self.dist = getDistance(evt)
				self.timer.update()
			})

			touch.move(evt => {
				evt.preventDefault()
				self.timer.update()
				if (evt.touches.length !== 2)
					return
				let currDist = getDistance(evt)
				let offDist = currDist - self.dist
				let dt = self.timer.delta()
				let dir: directions = offDist > 0 ? 'forwards' : 'backwards'
				self.camera.move(dir, dt, self.speed)
				self.dist = currDist
			})

			touch.end(evt => {
				self.began = false
			})
		}

		public update(): void {
			this.timer.update()
		}

	}
}
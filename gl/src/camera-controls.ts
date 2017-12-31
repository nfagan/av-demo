import * as _Keyboard from './keyboard'
import * as XY from './input-xy'
import { Camera, directions } from './camera'
import { DeltaTimer, ratios } from './time-util'
import { vec2, vec3, vec4 } from 'gl-matrix'
import * as math from './wgl-math'
import { common, matrix } from './util'

export namespace Orbit {

	type OrbitOpts = {
		nVelocitySamples: number,
		velocityDecaySensitivity: number
	}

	abstract class _Orbit<T extends XY.XYEvent, X extends XY.xy<T>> {

		private input: X
		private timer: DeltaTimer

		began: boolean
		released: boolean
		velocities: Array<vec2>
		velocity: vec2
		nVelocitySamples: number
		meanVelocity: vec2
		coordinates: vec2
		deltas: vec2
		velocityDecaySensitivity: number

		constructor(input: X, timer: DeltaTimer, opts: OrbitOpts) {
			this.input = input
			this.timer = timer

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

		protected abstract shouldBegin(evt: T): boolean
		protected abstract getCoordinates(evt: T): vec2
		public abstract shouldInvert(): boolean

		private setup(): void {
			const input = this.input
			const self = this

			input.start((evt: T) => {
				if (self.began || !self.shouldBegin(evt))
					return
				let coords = self.getCoordinates(evt)
				self.coordinates[0] = coords[0]
				self.coordinates[1] = coords[1]
				self.timer.update()
				self.began = true
				self.released = false
				self.deltas[0] = 0
				self.deltas[1] = 0
				self.velocities = []
			})

			input.move((evt: T) => {
				evt.preventDefault()
				self.timer.update()
				let currentCoordinates = self.getCoordinates(evt)
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

			input.end((evt: T) => {
				self.released = true
				self.began = false
			})
		}

		public static Defaults(): OrbitOpts {
			return {
				nVelocitySamples: 100,
				velocityDecaySensitivity: 1.1
			}
		}
	}

	class OrbitMouse extends _Orbit<MouseEvent, XY.Mouse> {
		protected getCoordinates(evt: MouseEvent): vec2 {
			return vec2.fromValues(evt.clientX, evt.clientY)
		}
		protected shouldBegin(evt: MouseEvent): boolean {
			return true
		}
		public shouldInvert(): boolean {
			return false
		}
	}

	class OrbitTouch extends _Orbit<TouchEvent, XY.Touch> {
		protected getCoordinates(evt: TouchEvent): vec2 {
			if (evt.touches.length === 0)
				throw new Error('Attempted to get coordinates when there were 0 touch-points.')
			let touch0 = evt.touches[0]
			return vec2.fromValues(touch0.clientX, touch0.clientY)
		}
		protected shouldBegin(evt: TouchEvent): boolean {
			return evt.touches.length === 1
		}
		public shouldInvert(): boolean {
			return true
		}
	}

	export class Orbit {

		private input: XY.Mouse | XY.Touch
		private camera: Camera
		private orbit: OrbitMouse | OrbitTouch
		private timer: DeltaTimer

		constructor(input: XY.Mouse | XY.Touch, camera: Camera, opts: OrbitOpts = _Orbit.Defaults()) {
			this.input = input
			this.camera = camera
			this.timer = new DeltaTimer()
			if (input instanceof XY.Mouse) {
				this.orbit = new OrbitMouse(input, this.timer, opts)
			} else if (input instanceof XY.Touch) {
				this.orbit = new OrbitTouch(input, this.timer, opts)
			}
		}

		public update(): void {
			const orbit = this.orbit
			const deltas = orbit.deltas
			const camera = this.camera
			const ratio = this.timer.getRatio()
			const decaySens = this.orbit.velocityDecaySensitivity

			if (!orbit.released) {
				if (orbit.shouldInvert()) {
					camera.rotate(-deltas[0], deltas[1])
				} else {
					camera.rotate(deltas[0], -deltas[1])
				}
				deltas[0] = 0
				deltas[1] = 0
			} else {
				let vel = orbit.meanVelocity
				let xvel = (vel[0] * ratio.second) / ratio.first
				let yvel = (vel[1] * ratio.second) / ratio.first
				if (orbit.shouldInvert()) {
					camera.rotate(-xvel, yvel)
				} else {
					camera.rotate(xvel, -yvel)
				}
				vel[0] /= decaySens
				vel[1] /= decaySens
				if (Math.abs(vel[0]) < 0.00001) vel[0] = 0
				if (Math.abs(vel[1]) < 0.00001) vel[1] = 0
			}
		}
	}

	export function Mouse(mouse: XY.Mouse, camera: Camera, opts: OrbitOpts = _Orbit.Defaults()): Orbit {
		return new Orbit(mouse, camera, opts)
	}

	export function Touch(touch: XY.Touch, camera: Camera, opts: OrbitOpts = _Orbit.Defaults()): Orbit {
		return new Orbit(touch, camera, opts)
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
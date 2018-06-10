import * as _Keyboard from './keyboard'
import * as XY from './input-xy'
import { Camera, directions } from '../camera/camera'
import { DeltaTimer, ratios, Ratio } from '../util/time-util'
import { vec2, vec3, vec4 } from 'gl-matrix'
import * as math from '../math/wgl-math'
import { common, matrix } from '../util/util'

export namespace Orbit {

	type OrbitOpts = {
		nVelocitySamples: number,
		velocityDecaySensitivity: number,
		maxVelocity: number,
		speed: number,
		smooth: boolean
	}

	export class Orbit2<K extends XY.XYEvent, T extends XY.xy<K>> {

		private input: T
		private camera: Camera
		private timer: DeltaTimer

		private released: boolean
		private currentCoordinates: vec2
		private tmpCurrentCoordinates: vec2
		private lastCoordinates: vec2
		private velocity: vec2
		private totalVelocity: vec2
		private delta: vec2
		private dts: vec2
		private opts: OrbitOpts

		public onBeforeRotate: (vel: vec2) => void

		constructor(input: T, camera: Camera, opts?: OrbitOpts) {
			this.input = input
			this.camera = camera
			this.timer = new DeltaTimer()

			if (!opts)
				opts = Orbit2.Defaults()

			this.released = false
			this.lastCoordinates = vec2.fromValues(0, 0)
			this.currentCoordinates = vec2.fromValues(0, 0)
			this.tmpCurrentCoordinates = vec2.fromValues(0, 0)
			this.velocity = vec2.fromValues(0, 0)
			this.totalVelocity = vec2.fromValues(0, 0)
			this.delta = vec2.fromValues(0, 0)
			this.dts = vec2.fromValues(0, 0)

			this.onBeforeRotate = () => {}

			this.opts = opts

			this.timer.setRatio(ratios.ms())

			this.setup()
		}

		public update() {
			const input = this.input
			const timer = this.timer
			const camera = this.camera
			const tmpCoords = this.tmpCurrentCoordinates
			const coords = this.currentCoordinates
			const lastCoords = this.lastCoordinates
			const velocity = this.velocity
			const totalVelocity = this.totalVelocity
			const delta = this.delta
			const dts = this.dts
			const speedMultipler = this.opts.speed
			const decaySens = this.opts.velocityDecaySensitivity

			timer.update()

			tmpCoords.set(coords)

			vec2.subtract(delta, tmpCoords, lastCoords)

			const dt = timer.delta()

			dts[0] = dt
			dts[1] = dt

			if (dt > 0)
				vec2.divide(velocity, delta, dts)

			velocity[0] = Ratio.scale(timer.getRatio(), velocity[0])
			velocity[1] = Ratio.scale(timer.getRatio(), velocity[1])

			vec2.mul(velocity, velocity, [speedMultipler, speedMultipler])

			vec2.add(totalVelocity, totalVelocity, velocity)

			let targetVelocity = this.opts.smooth ? totalVelocity : velocity

			this.onBeforeRotate(targetVelocity)

			if (input.shouldInvert()) {
				camera.rotate(-targetVelocity[0], targetVelocity[1])
			} else {
				camera.rotate(targetVelocity[0], -targetVelocity[1])
			}

			lastCoords.set(tmpCoords)

			totalVelocity[0] /= decaySens
			totalVelocity[1] /= decaySens

			if (Math.abs(totalVelocity[0]) < 0.00001) totalVelocity[0] = 0
			if (Math.abs(totalVelocity[1]) < 0.00001) totalVelocity[1] = 0
		}

		private setup(): void {
			const input = this.input
			const self = this

			input.start((evt: K) => {
				self.released = false
				self.currentCoordinates = self.input.getPrimaryCoordinates(evt)
				self.lastCoordinates.set(self.currentCoordinates)
			})

			input.move((evt: K) => {
				evt.preventDefault()
				self.currentCoordinates = self.input.getPrimaryCoordinates(evt)
			})

			input.end((evt: K) => {
				self.released = true
			})
		}

		public static Defaults(): OrbitOpts {
			return {
				nVelocitySamples: 100,
				velocityDecaySensitivity: 1.2,
				maxVelocity: 4000,
				speed: 2,
				smooth: true
			}
		}
	}

	//
	//	regular
	//

	abstract class _Orbit<T extends XY.XYEvent, X extends XY.xy<T>> {

		private input: X
		private timer: DeltaTimer

		began: boolean
		released: boolean
		velocities: Array<vec2>
		velocity: vec2
		nVelocitySamples: number
		speed: number
		maxVelocity: number
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
			this.speed = opts.speed
			this.maxVelocity = opts.maxVelocity
			this.meanVelocity = vec2.fromValues(0, 0)
			this.coordinates = vec2.fromValues(0, 0)
			this.deltas = vec2.fromValues(0, 0)

			this.setup()
		}

		protected abstract shouldBegin(evt: T): boolean
		protected abstract getCoordinates(evt: T): vec2
		public abstract shouldInvert(): boolean
		public getMeanVelocity(): vec2 {
			if (this.velocities.length > 0) {
				this.meanVelocity = <vec2>math.vecmean(this.velocities)
			} else {
				this.meanVelocity = vec2.fromValues(0, 0)
			}
			return this.meanVelocity
		}

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
					//	keep values in range [-Infinity, maxVelocity], preserving sign
					math.signedClamp(velocity, -Infinity, self.maxVelocity)
					if (self.velocities.length === self.nVelocitySamples)
						self.velocities.shift()
					self.velocities.push(velocity)
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
				velocityDecaySensitivity: 1.1,
				maxVelocity: 4000,
				speed: 4,
				smooth: true
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
				let xvel = (vel[0] * ratio.second) / ratio.first * orbit.speed
				let yvel = (vel[1] * ratio.second) / ratio.first * orbit.speed
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
}

export namespace Movement {

	type KeyT = { [K in directions]: number }

	export abstract class movement<T> {
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

		public setSpeed(speed: number): void {
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

		constructor(kb: _Keyboard.Keyboard, camera: Camera, speed: number = 1.0) {
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

		constructor(touch: XY.Touch, camera: Camera, speed: number = 1.0) {
			super(touch, camera, speed)

			this.dist = 0
			this.began = false

			this.setup()
		}

		private setup(): void {
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

export namespace Rotation {

	export class Touch extends Movement.movement<XY.Touch> {

		didTap: boolean
		tapDetector: XY.DoubleTapDetector
		last: vec2
		lastVel: vec2
		current: vec2
		velocities: Array<vec2> = []
		nVelocities: number = 100

		constructor(touch: XY.Touch, camera: Camera, speed: number) {
			super(touch, camera, speed)

			this.didTap = false
			this.tapDetector = new XY.DoubleTapDetector(touch)

			this.last = vec2.create()
			this.current = vec2.create()
			this.lastVel = vec2.create()

			this.setup()
		}

		public update(): void {
			this.timer.update()
		}

		private setup(): void {
			const touch = this.input
			const self = this
			const camera = this.camera
			const detector = this.tapDetector

			const reset = (evt: TouchEvent) => {
				self.didTap = true
				self.last[0] = evt.touches[0].clientX
				self.last[1] = evt.touches[0].clientY
				self.velocities = []
			}

			// detector.doubletap(evt => {
			// 	reset(evt)
			// })

			// touch.start(evt => {
			// 	self.timer.update()
			// })

			touch.start(evt => {
				if (evt.touches.length !== 3) 
					return
				reset(evt)
				self.timer.update()
			})

			touch.move(evt => {
				if (!self.didTap || evt.touches.length !== 3)
					return

				evt.preventDefault()
				evt.stopPropagation()
				self.timer.update()
				const clone = common.clone
				let touch0 = evt.touches[0]
				let focusPoint = [0, 0, 0]
				let pos = <vec3>clone(camera.position)
				let camFocus = vec3.subtract(vec3.create(), pos, focusPoint)
				let right = <vec3>clone(camera.right)
				let up = <vec3>clone(camera.up)
				let newPos = vec3.create()
				right = vec3.normalize(right, right)
				up = vec3.normalize(up, up)

				let deltaPos = vec2.fromValues(touch0.clientX, touch0.clientY)
				let dt = self.timer.delta()
				let vel = vec2.fromValues(0, 0)
				deltaPos = vec2.subtract(deltaPos, deltaPos, self.last)

				if (dt > 0) {
					vel = vec2.divide(vel, deltaPos, vec2.fromValues(dt, dt))
				} else {
					vel.set(this.lastVel)
				}

				let speed = vec2.copy(vec2.create(), vel)
				math.abs(speed)

				if (self.velocities.length > 0) {
					speed = math.vecmean(self.velocities)
				} else {
					speed[0] = vel[0]
					speed[1] = vel[1]
				}

				let yaw = vel[0] * 0.002
				let pitch = vel[1] * 0.002

				// let yaw = speed[0] === 0 ? 0 : vel[0] / speed[0]
				// let pitch = speed[1] === 0 ? 0 : vel[1] / speed[1]

				let mat = new matrix.transform()
					.rotate(math.radians(yaw), up)
					.rotate(math.radians(pitch), right)
					.mat()

				let camFocus4 = vec4.fromValues(camFocus[0], camFocus[1], camFocus[2], 1)
				vec4.transformMat4(camFocus4, camFocus4, mat)
				vec4.add(camFocus4, camFocus4, [focusPoint[0], focusPoint[1], focusPoint[2], 0])

				newPos[0] = camFocus4[0]
				newPos[1] = camFocus4[1]
				newPos[2] = camFocus4[2]

				camera.setPosition(newPos)

				self.last[0] = touch0.clientX
				self.last[1] = touch0.clientY
				self.lastVel.set(vel)

				if (self.velocities.length === self.nVelocities)
					self.velocities.shift()
				self.velocities.push(vec2.fromValues(speed[0], speed[1]))
			})

			touch.end(evt => {
				self.didTap = false
			})
		}

	}

}
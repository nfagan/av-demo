import { time } from './util'
import { vec2 } from 'gl-matrix'
import * as math from './wgl-math'

export type TouchCBT = (evt: TouchEvent) => void
export type MouseCBT = (evt: MouseEvent) => void
export type ListenerT<K> = (evt: K) => void
export type XYEvent = TouchEvent | MouseEvent

type listeners = 'start' | 'move' | 'end'
type listenerMap = { [K in listeners]: string }

export abstract class xy<K extends XYEvent> {
	el: HTMLElement

	constructor(el?: HTMLElement) {
		this.el = (el === null || el === undefined) ? document.body : el
	}

	start(cb: ListenerT<K>): void {
		this.el.addEventListener(this.getListenerNames()['start'], cb)
	}

	end(cb: ListenerT<K>): void {
		this.el.addEventListener(this.getListenerNames()['end'], cb)
	}

	move(cb: ListenerT<K>): void {
		this.el.addEventListener(this.getListenerNames()['move'], cb)
	}

	public abstract getListenerNames(): listenerMap
}

export class Touch extends xy<TouchEvent> {

	el: HTMLElement

	getListenerNames(): listenerMap {
		return {
			'start': 'touchstart',
			'end': 'touchend',
			'move': 'touchmove'
		}
	}
}

export class Mouse extends xy<MouseEvent> {

	el: HTMLElement

	getListenerNames(): listenerMap {
		return {
			'start': 'mouseenter',
			'end': 'mouseleave',
			'move': 'mousemove'
		}
	}

}

export type DoubleTapDetectorOpts = {
	timeThreshold: time.Duration,
	positionThreshold: number
}

export class DoubleTapDetector {
	private timer: time.DeltaTimer
	private touch: Touch
	private began: boolean
	private doubletapFunc: TouchCBT
	private deltaDur: time.Duration
	private timeThreshold: time.Duration
	private positionThreshold: number
	private coordinates: vec2
	private currentCoordinates: vec2

	constructor(touch: Touch, opts?: DoubleTapDetectorOpts) {
		this.touch = touch
		this.timer = new time.DeltaTimer()
		this.timer.setRatio(time.ratios.ms())
		this.began = false
		this.doubletapFunc = (evt) => {}
		this.deltaDur = new time.Duration(time.ratios.ms(), 0)
		if (!opts)
			opts = DoubleTapDetector.Defaults()
		this.timeThreshold = opts.timeThreshold
		this.positionThreshold = opts.positionThreshold
		this.coordinates = vec2.create()
		this.currentCoordinates = vec2.create()
		this.setup()
	}

	public doubletap(func: TouchCBT): void {
		this.doubletapFunc = func
	}

	private setup(): void {
		const touch = this.touch
		const self = this

		touch.start(evt => {
			if (evt.touches.length !== 1)
				return
			self.timer.update()
			self.currentCoordinates[0] = evt.touches[0].clientX
			self.currentCoordinates[1] = evt.touches[0].clientY
			if (self.began) {
				let delta = self.timer.deltaDuration(self.deltaDur)
				let inTime = time.Duration.le(delta, self.timeThreshold)
				let dist = math.distance(self.currentCoordinates, self.coordinates)
				if (inTime && dist < self.positionThreshold) {
					self.doubletapFunc(evt)
				}
			}
			self.began = true
			self.coordinates = vec2.copy(self.coordinates, self.currentCoordinates)
		})
	}

	public static Defaults(): DoubleTapDetectorOpts {
		return {
			timeThreshold: new time.Duration(time.ratios.ms(), 350),
			positionThreshold: 40
		}
	}
}

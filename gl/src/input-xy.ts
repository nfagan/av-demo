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

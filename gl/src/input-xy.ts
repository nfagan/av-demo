type TouchCBT = (evt: TouchEvent) => void
type MouseCBT = (evt: MouseEvent) => void
type ListenerT = TouchCBT | MouseCBT

type listeners = 'start' | 'move' | 'end'
type listenerMap = { [K in listeners]: string }

abstract class xy<T extends ListenerT> {
	el: HTMLElement

	constructor(el?: HTMLElement) {
		this.el = (el === null || el === undefined) ? document.body : el
	}

	start(cb: T): void {
		this.el.addEventListener(this.getListenerNames()['start'], cb)
	}

	end(cb: T): void {
		this.el.addEventListener(this.getListenerNames()['end'], cb)
	}

	move(cb: T): void {
		this.el.addEventListener(this.getListenerNames()['move'], cb)
	}

	public abstract getListenerNames(): listenerMap
}

export class Touch extends xy<TouchCBT> {

	el: HTMLElement

	getListenerNames(): listenerMap {
		return {
			'start': 'touchstart',
			'end': 'touchend',
			'move': 'touchmove'
		}
	}
}

export class Mouse extends xy<MouseCBT> {

	el: HTMLElement

	getListenerNames(): listenerMap {
		return {
			'start': 'mouseenter',
			'end': 'mouseleave',
			'move': 'mousemove'
		}
	}

}

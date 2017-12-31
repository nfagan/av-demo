type KeyboardEventCBT = (evt: KeyboardEvent) => void

export enum Keys {
	W = 87,
	A = 65,
	S = 83,
	D = 68,
	Left = 37,
	Right = 39,
	Up = 38,
	Down = 40,
	space = 32
}

export class Keyboard {
	
	private state: { [key:number]: boolean } = {}

	constructor() {
		let state = this.state
		window.addEventListener('keydown', (evt: KeyboardEvent) => {
			state[evt.keyCode] = true
		})
		window.addEventListener('keyup', (evt: KeyboardEvent) => {
			state[evt.keyCode] = false
		})
	}

	public isDown(key: number): boolean {
		let res = this.state[key]
		return res === undefined ? false : res
	}

	public down(func: KeyboardEventCBT): void {
		window.addEventListener('keydown', func)
	}

	public up(func: KeyboardEventCBT): void {
		window.addEventListener('keyup', func)
	}
}
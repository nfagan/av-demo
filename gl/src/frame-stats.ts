import { time } from './util'

class FrameStats {

	private timer: time.DeltaTimer
	min: number = Infinity
	max: number = -Infinity
	mean: number = 0
	iterations: number = 0
	current: number = NaN
	places: number = 2

	el: HTMLElement
	visible: boolean = true

	constructor() {
		this.timer = new time.DeltaTimer()
		this.timer.setRatio(new time.ratios.s())
		this.setupElement()
	}

	private setupElement() {
		const el = document.createElement('div')
		const self = this
		el.style.position = 'fixed'
		el.style.left = '0px'
		el.style.top = '0px'
		el.style.backgroundColor = 'black'
		el.style.opacity = '0'
		el.style.color = 'white'
		el.onclick = (evt: MouseEvent) => {
			el.style.opacity = self.visible ? '0' : '0.5'
			self.visible = !self.visible
		}
		document.body.appendChild(el)
		this.el = el
	}

	public update() {
		let wasFirst = this.timer.firstUpdate()
		this.timer.update()
		if (wasFirst)
			return

		let dt = this.timer.delta()
		if (dt < this.min) this.min = dt
		if (dt > this.max) this.max = dt

		this.current = dt
		this.mean = ((this.mean * this.iterations) + dt) / (this.iterations + 1)
		this.iterations++

		this.el.innerHTML = this.getString()
	}

	public getString(): string {
		const places = this.places
		const self = this

		const current = this.getTimeFPSString('current', this.current)
		const min = this.getTimeFPSString('min', this.min)
		const max = this.getTimeFPSString('max', this.max)
		const mean = this.getTimeFPSString('mean', this.mean)

		return current + min + max + mean
	}

	private getTimeFPSString(kind: string, val: number): string {
		let timeUnits = this.timer.getRatio().alias
		const ms = `${kind}: ${(val).toFixed(this.places)} ${timeUnits}, `
		const fps = `${(1/val).toFixed(this.places)} FPS<br>`
		return ms + fps
	}

}

export { FrameStats }
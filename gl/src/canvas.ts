type CanvasOptions = {
	width: number,
	height: number
}

class Canvas {

	dpr: number
	aspect: number
	width: number
	height: number
	element: HTMLCanvasElement

	constructor(opts: CanvasOptions = Canvas.Defaults()) {

		if (!opts.width)
			opts.width = window.innerWidth
		if (!opts.height)
			opts.height = window.innerHeight

		this.width = opts.width
		this.height = opts.height
		this.aspect = this.width / this.height
		this.dpr = window.devicePixelRatio || 1

		this.createCanvas()
		this.resize()
	}

	private createCanvas(): void {
		this.element = document.createElement('canvas')
		document.body.appendChild(this.element)
	}

	public resize(): void {
		const el = this.element
		el.style.width = this.width + 'px'
		el.style.height = this.height + 'px'
		el.width = this.width * this.dpr
		el.height = this.height * this.dpr
	}

	public static Defaults(): CanvasOptions {
		return {
			width: null,
			height: null
		}
	}

}

export { Canvas }
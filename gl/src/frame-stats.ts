class FrameStats {

	min: number = Infinity
	max: number = -Infinity
	mean: number = 0
	iterations: number = 0
	current: number = NaN
	places: number = 2

	constructor() {
		//
	}

	public update(dt: number) {
		if (dt < this.min) this.min = dt
		if (dt > this.max) this.max = dt

		this.current = dt
		this.mean = ((this.mean * this.iterations) + dt) / (this.iterations + 1)
		this.iterations++
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
		const ms = `${kind}: ${(1000*val).toFixed(this.places)} ms, `
		const fps = `${(1/val).toFixed(this.places)} FPS<br>`
		return ms + fps
	}

}

export { FrameStats }
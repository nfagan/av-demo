export interface Ratio {
	readonly first: number,
	readonly second: number,
	readonly alias: string
}

export namespace ratios {
	export class ms implements Ratio {
		readonly first = 1
		readonly second = 1
		readonly alias = 'ms'
	}

	export class s implements Ratio {
		readonly first = 1
		readonly second = 1/1000
		readonly alias = 's'
	}
}

export class DeltaTimer {
	private last: number = 0
	private _delta: number = 0
	private first: boolean = true
	private ratio: Ratio

	constructor() { this.ratio = new ratios.s() }

	public update(): void {
		let now = Date.now()
		if (this.first) {
			this.last = now
			this.first = false
			return
		}
		this._delta = now - this.last
		this.last = now
	}

	public firstUpdate(): boolean {
		return this.first
	}

	public setRatio(ratio: Ratio): void {
		this.ratio = ratio
	}

	public getRatio(): Ratio {
		return this.ratio
	}

	public delta(): number { 
		return (this._delta / this.ratio.first) * this.ratio.second
	}
}
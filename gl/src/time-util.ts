export class Ratio {
	readonly first: number
	readonly second: number
	readonly alias: string

	constructor(first: number, second: number, alias: string) {
		this.first = first
		this.second = second
		this.alias = alias
	}
}

export class Duration {
	ratio: Ratio
	amount: number

	constructor(ratio: Ratio, amount: number) {
		this.ratio = ratio
		this.amount = amount
	}

	public value(): number {
		let first = this.ratio.first
		let sec = this.ratio.second
		let amt = this.amount
		return (amt / sec) * first
	}

	public static lt(a: Duration, b: Duration): boolean {
		return a.value() < b.value()
	}

	public static le(a: Duration, b: Duration): boolean {
		return a.value() <= b.value()
	}

	public static eq(a: Duration, b: Duration): boolean {
		return a.value() == b.value()
	}

	public static gt(a: Duration, b: Duration): boolean {
		return a.value() > b.value()
	}

	public static ge(a: Duration, b: Duration): boolean {
		return a.value() >= b.value()
	}
}

export namespace ratios {
	export function ms(): Ratio {
		return new Ratio(1, 1, 'ms')
	}
	
	export function s(): Ratio {
		return new Ratio(1, 1/1000, 's')
	}
}

export class DeltaTimer {
	private last: number = 0
	private _delta: number = 0
	private first: boolean = true
	private ratio: Ratio

	constructor() { this.ratio = ratios.s() }

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

	public deltaDuration(a: Duration | null): Duration {
		if (a === null) {
			a = new Duration(this.ratio, this._delta)
			return a
		}
		a.ratio = this.ratio
		a.amount = this._delta
		return a
	}
}
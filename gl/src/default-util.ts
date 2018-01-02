export abstract class Defaults<T> {
	public options: T
	constructor(...args: any[]) { this.options = this.get(...args) }
	public abstract get(...args: any[]): T
	public set<K extends keyof T, V>(name: K, value: T[K]): Defaults<T> {
		this.options[name] = value
		return this
	}
}
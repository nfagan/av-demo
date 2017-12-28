import { Resource } from './resource'

//
//	Attribute
//

abstract class _AttributeBase {
	name: string
}

export abstract class _Attribute<ST, GT, K extends string> extends _AttributeBase {
	name: K
	value: GT = null
	isDirty: boolean = true
	constructor(name: K, value: ST) {
		super()
		this.name = name
		this.setValue(value)
	}
	getValue(): GT {
		this.isDirty = false
		return this.value
	}
	abstract setValue(value: ST): void
}

export class _AttributeMap<T extends _AttributeBase> {
	items: { [key: string]: T } = {}

	constructor() {}

	public add(val: T): void {
		this.items[val.name] = val
	}

	public getAll(): Array<T> {
		let items = this.items
		let keys: Array<string> = Object.keys(items)
		let values: Array<T> = keys.map(key => items[key])
		return values
	}

	public has<X extends string>(key: X): boolean {
		return this.items[key] !== undefined
	}

	public getOne<X extends string>(key: X): T {
		let item = this.items[key]
		if (item === undefined)
			throw new Error(`Requested non-present attribute "${key}".`)
		return item
	}
}

export abstract class Attributable<AtT extends _AttributeBase, MapT extends _AttributeMap<AtT>, K extends string> extends Resource {
	attributes: MapT

	constructor() { super() }

	public addAttribute(attr: AtT): void {
		this.attributes.add(attr)
	}

	public addAttributes(...attrs: Array<AtT>) {
		for (let attr of attrs) {
			this.addAttribute(attr)
		}
	}

	public hasAttribute(name: K): boolean {
		return this.attributes.has(name)
	}

	public enumerateAttributes(): Array<AtT> {
		return this.attributes.getAll()
	}

	public getAttribute(name: K): AtT {
		return this.attributes.getOne(name)
	}
}
import { Resource } from './resource'

//
//	Attribute
//

abstract class _AttributeBase {
	name: string
}

type _ValidatorT<T extends _AttributeBase, K> = (attr: T, value: K) => void

export abstract class _Attribute<ST, GT, K extends string> extends _AttributeBase {
	name: K
	value: GT = null
	isDirty: boolean = true
	validator: _ValidatorT<_Attribute<ST, GT, K>, ST>
	constructor(name: K, value: ST, validator: _ValidatorT<_Attribute<ST, GT, K>, ST> = validators.Any) {
		super()
		this.name = name
		this.setValidator(validator)
		this.validate(value)
		this.setValue(value)
	}
	getValue(): GT {
		this.isDirty = false
		return this.value
	}
	abstract setValue(value: ST): void
	setValidator(validator: _ValidatorT<_Attribute<ST, GT, K>, ST>): void {
		this.validator = validator
	}
	validate(value: ST): void {
		if (this.validator) this.validator(this, value)
	}
}

export namespace validators {
	export function Any<ST, GT, K extends string>(attr: _Attribute<ST, GT, K>, data: ST) {}
	export function Number<ST, GT, K extends string>(attr: _Attribute<ST, GT, K>, data: ST) {
		if (typeof(data) !== 'number')
			throw new Error(`Attribute "${attr.name}" must be a number.`)
	}
	export function Boolean<ST, GT, K extends string>(attr: _Attribute<ST, GT, K>, data: ST) {
		if (typeof(data) !== 'boolean')
			throw new Error(`Attribute "${attr.name}" must be a boolean.`)
	}
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
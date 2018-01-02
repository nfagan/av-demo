import { Resource } from './resource'
import * as types from './type-util'
import * as common from './common-util'

//
//	Attribute
//

abstract class _AttributeBase {
	name: any
	protected value: any
	validator: any
	constructor(name: any, value: any, validator: any) {
		this.name = name
		this.value = value
		this.validator = validator
	}
	abstract peekValue(): any
	abstract setValue(...args: any[]): any
	public activator<T extends _AttributeBase>
		(type: {new(...args : any[]): T ;}, ...args : any[]): T {
		return new type(...args)
	}
}

type _ValidatorT<T extends _AttributeBase, K> = (attr: T, value: K) => void

export abstract class _Attribute<ST extends types.cloneable, 
	GT extends types.cloneable, K extends string> extends _AttributeBase {
	name: K
	value: GT = null
	isDirty: boolean = true
	validator: _ValidatorT<_Attribute<ST, GT, K>, ST>
	constructor(name: K, value: ST, validator: _ValidatorT<_Attribute<ST, GT, K>, ST> = validators.Any) {
		super(name, value, validator)
		this.name = name
		this.setValidator(validator)
		this.validate(value)
		this.setValue(value)
	}
	getValue(): GT {
		this.isDirty = false
		return this.value
	}
	public peekValue(): GT {
		return this.value
	}
	setValue(value: ST): void {
		this.validate(value)
		this.value = this._setValue(value)
		this.isDirty = true
	}
	protected abstract _setValue(value: ST): GT
	protected setValidator(validator: _ValidatorT<_Attribute<ST, GT, K>, ST>): void {
		this.validator = validator
	}
	protected validate(value: ST): void {
		if (this.validator) this.validator(this, value)
	}
}

export namespace validators {
	export function Any<ST extends types.cloneable, 
		GT extends types.cloneable, K extends string>(attr: _Attribute<ST, GT, K>, data: ST) {}
	export function Number<ST extends types.cloneable, 
		GT extends types.cloneable, K extends string>(attr: _Attribute<ST, GT, K>, data: ST) {
		if (typeof(data) !== 'number')
			throw new Error(`Attribute "${attr.name}" must be a number.`)
	}
	export function Vec3<ST extends types.cloneable, 
		GT extends types.cloneable, K extends string>(attr: _Attribute<ST, GT, K>, data: ST) {
		if (!types.isNElementArray(data, 3)) {
			throw new Error(`Attribute "${attr.name}" must be a vec3, or equivalent array-type.`)
		}
	}
	export function Vec3OrTexture<ST extends types.cloneable, 
		GT extends types.cloneable, K extends string>(attr: _Attribute<ST, GT, K>, data: ST) {
		if (!types.isNElementArray(data, 3) && !types.isTexture(data)) {
			throw new Error(`Attribute "${attr.name}" must be a vec3 (or equivalent array-type), or a texture.`)
		}
	}
	export function Boolean<ST extends types.cloneable, 
		GT extends types.cloneable, K extends string>(attr: _Attribute<ST, GT, K>, data: ST) {
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

export abstract class Attributable<AtT extends _AttributeBase, MapT extends _AttributeMap<AtT>, 
	K extends string> extends Resource {
	attributes: MapT

	constructor() { super() }

	protected addAttribute(attr: AtT): void {
		this.attributes.add(attr)
	}

	protected addAttributes(...attrs: Array<AtT>) {
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

	protected activator<AtT extends _AttributeBase, MapT extends _AttributeMap<AtT>, 
		K extends string, T extends Attributable<AtT, MapT, K>>
		(type: {new(...args : any[]): T ;}, ...args: any[]): T {
		return new type(...args)
	}

	protected _clone<AtT extends _AttributeBase, MapT extends _AttributeMap<AtT>, 
		K extends string, T extends Attributable<AtT, MapT, K>, 
		X extends AtT>
		(attributableConstructor: {new(...args : any[]): T ;}, 
			attributeConstructor: {new(...args : any[]): X ;}, ...args: any[]): T {

		let copy: T = this.activator(attributableConstructor, ...args)
		for (let attr of this.enumerateAttributes()) {
			if (!copy.hasAttribute(attr.name)) {
				let copyAtt = common.clone(attr.peekValue())
				let attr_ = attr.activator(attributeConstructor, attr.name, copyAtt, attr.validator)
				copy.addAttribute(attr_)
			} else {
				copy.getAttribute(attr.name).setValue(common.clone(attr.peekValue()))
			}
		}
		return copy
	}
}
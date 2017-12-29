import { vec3 } from 'gl-matrix'
import { vector, types, attribute } from './util'
import { Resource } from './resource'

type AttributeNames = 'color' | 'position' | 'index' | 'active'
type LightNames = 'point_lights'
type ValidatorT = (attr: Attribute, data: SetT) => void
type SetT = types.vec3Convertible | number | boolean
type GetT = vec3 | number | boolean

class Attribute extends attribute._Attribute<SetT, GetT, AttributeNames> {
	_setValue(value: SetT): GetT {
		if (typeof(value) !== 'number' && typeof(value) !== 'boolean')
			value = vector.requireVec3(value)
		return value
	}
}

class LightAttributeMap extends attribute._AttributeMap<Attribute> { constructor() { super() } }

class Light extends attribute.Attributable<Attribute, LightAttributeMap, AttributeNames> {
	gl: WebGLRenderingContext
	private name: LightNames

	constructor(gl: WebGLRenderingContext, 
			_index: number = 0, 
			_active: boolean = true, 
			_color: types.vec3Convertible = [1, 1, 1]) {
		super()
		this.gl = gl
		this.attributes = new LightAttributeMap()
		this.addAttribute(new Attribute('active', _active, attribute.validators.Boolean))
		this.addAttribute(new Attribute('index', _index, attribute.validators.Number))
		this.addAttribute(new Attribute('color', _color, attribute.validators.Vec3))
	}
	public setColor(val: types.vec3Convertible): void {
		this.getAttribute('color').setValue(val)
	}
	public setIndex(val: number): void {
		this.getAttribute('index').setValue(val)
	}
	public setActive(val: boolean): void {
		this.getAttribute('active').setValue(val)
	}
	public getActive(): boolean {
		return <boolean>this.getAttribute('active').getValue()
	}
	public getIndex(): number {
		return <number>this.getAttribute('index').getValue()
	}
	public getColor(): vec3 {
		return <vec3>this.getAttribute('color').getValue()
	}
	public getName(): string {
		return this.name
	}

	clone(): Light {
		return this._clone(Light, Attribute, this.gl)
	}

	public static Point(gl: WebGLRenderingContext, 
				_position: types.vec3Convertible = [1, 1, 1], 
				_color: types.vec3Convertible = [1, 1, 1],
				_active: boolean = true,
				_index: number = 0) {
		let light = new Light(gl, _index, _active, _color)
		light.addAttribute(new Attribute('position', _position))
		light.name = 'point_lights'
		return light
	}
}

export { Light, LightNames, Attribute, AttributeNames }
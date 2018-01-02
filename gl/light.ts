import { vec3 } from 'gl-matrix'
import { vector, types, attribute } from './util'
import { Resource } from './resource'

type AttributeNames = 'color' | 'position' | 'mask' | 'direction'
type LightNames = 'point' | 'directional'
type LightUniformNames = AttributeNames | LightNames

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
	public active: boolean = true
	private index: number

	constructor(gl: WebGLRenderingContext, 
			_index: number = 0,  
			_color: types.vec3Convertible = [1, 1, 1],
			_mask: types.vec3Convertible = [1, 1, 1]) {
		super()
		this.gl = gl
		this.index = _index
		this.attributes = new LightAttributeMap()
		this.addAttribute(new Attribute('color', _color, attribute.validators.Vec3))
		this.addAttribute(new Attribute('mask', _mask, attribute.validators.Vec3))
	}
	public setMask(val: types.vec3Convertible): void {
		this.getAttribute('mask').setValue(val)
	}
	public setColor(val: types.vec3Convertible): void {
		this.getAttribute('color').setValue(val)
	}
	public setIndex(val: number): void {
		this.index = val
	}
	public getIndex(): number {
		return this.index
	}
	public getColor(): vec3 {
		return <vec3>this.getAttribute('color').peekValue()
	}
	public getName(): LightNames {
		return this.name
	}
	public getMask(): vec3 {
		return <vec3>this.getAttribute('mask').peekValue()
	}

	clone(): Light {
		return this._clone(Light, Attribute, this.gl)
	}

	public static Point(gl: WebGLRenderingContext, 
				_position: types.vec3Convertible = [1, 1, 1], 
				_color: types.vec3Convertible = [1, 1, 1],
				_index: number = 0) {
		let light = new Light(gl, _index, _color)
		light.addAttribute(new Attribute('position', _position))
		light.name = 'point'
		return light
	}

	public static Directional(gl: WebGLRenderingContext,
			_direction: types.vec3Convertible = [1, 1, 1],
			_color: types.vec3Convertible = [1, 1, 1],
			_index: number = 0) {
		let light = new Light(gl, _index, _color)
		light.addAttribute(new Attribute('direction', _direction))
		light.name = 'directional'
		return light
	}
}

export { Light, LightNames, Attribute, AttributeNames, LightUniformNames }
import { vec3 } from 'gl-matrix'
import { vector, types, attribute } from './util'
import { Resource } from './resource'

type AttributeNames = 'color' | 'position' | 'index' | 'active'
type SetAttributeT = types.isVec3Convertible | number | boolean
type GetAttributeT = SetAttributeT

class Attribute extends attribute._Attribute<SetAttributeT, GetAttributeT, AttributeNames> {
	constructor(name: AttributeNames, value: SetAttributeT) {
		super(name, value)
		this.setValue(value)
	}
	setValue(value: SetAttributeT): void {
		if (typeof(value) !== 'number' && typeof(value) !== 'boolean')
			value = vector.requireVec3(value)
		this.value = value
		this.isDirty = true
	}
}

class LightAttributeMap extends attribute._AttributeMap<Attribute> {
	constructor() {
		super()
	}
}

class Light extends attribute.Attributable<Attribute, LightAttributeMap, AttributeNames> {
	gl: WebGLRenderingContext
	name: string

	constructor(gl: WebGLRenderingContext, 
			_index: number = 0, 
			_active: boolean = true, 
			_color: types.isVec3Convertible = [1, 1, 1]) {
		super()
		this.gl = gl
		this.attributes = new LightAttributeMap()
		this.addAttribute(new Attribute('active', _active))
		this.addAttribute(new Attribute('index', _index))
		this.addAttribute(new Attribute('color', _color))
	}
	public setColor(val: types.isVec3Convertible): void {
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

}

namespace Lights {

	export class Point extends Light {
		constructor(gl: WebGLRenderingContext, 
				_position: types.isVec3Convertible = [1, 1, 1], 
				_color: types.isVec3Convertible = [1, 1, 1],
				_active: boolean = true,
				_index: number = 0) {
			super(gl, _index, _active, _color)
			this.addAttribute(new Attribute('position', _position))
			this.name = 'point_lights'
		}
		public setPosition(val: types.isVec3Convertible): void {
			this.getAttribute('position').setValue(val)
		}
		public getPosition(): vec3 {
			return <vec3>this.getAttribute('position').getValue()
		}
	}
}

export { Lights, Light, Attribute, AttributeNames }
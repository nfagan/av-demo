import { vec3 } from 'gl-matrix'
import { types, vector, attribute } from './util'

type AttributeNames = 'roughness' | 'albedo' | 'metallic'
type SetAttributeT = number | types.isVec3Convertible
type GetAttributeT = number | vec3

class Attribute extends attribute._Attribute<SetAttributeT, GetAttributeT, AttributeNames> {
	constructor(name: AttributeNames, value: SetAttributeT) {
		super(name, value)
		this.setValue(value)
	}
	setValue(value: SetAttributeT): void {
		if (typeof(value) != 'number')
			value = vector.requireVec3(value)
		this.value = value
		this.isDirty = true
	}
}

class MaterialAttributeMap extends attribute._AttributeMap<Attribute> {
	constructor() {
		super()
	}
}

class Material extends attribute.Attributable<Attribute, MaterialAttributeMap, AttributeNames> {
	protected gl: WebGLRenderingContext

	constructor(gl: WebGLRenderingContext) {
		super()
		this.attributes = new MaterialAttributeMap()
		this.gl = gl
	}

	clone(): Material {
		let copy = new Material(this.gl)
		for (let attr of this.enumerateAttributes()) {
			if (!copy.hasAttribute(attr.name)) {
				copy.addAttribute(new Attribute(attr.name, vector.cloneVec3Convertible(attr.value)))
			} else {
				copy.getAttribute(attr.name).setValue(vector.cloneVec3Convertible(attr.value))
			}
		}
		return copy
	}
}

namespace Materials {
	export class Physical extends Material {
		constructor(gl: WebGLRenderingContext, 
				_albedo: types.isVec3Convertible = [1, 1, 1], 
				_roughness: number = 0.1,
				_metallic: number = 0.1) {
			super(gl)
			this.addAttribute(new Attribute('albedo', _albedo))
			this.addAttribute(new Attribute('metallic', _metallic))
			this.addAttribute(new Attribute('roughness', _roughness))
		}
		public setAlbedo(val: types.isVec3Convertible) {
			this.getAttribute('albedo').setValue(val)
		}
		public setRoughness(val: number) {
			this.getAttribute('roughness').setValue(val)
		}
		public setMetallic(val: number) {
			this.getAttribute('metallic').setValue(val)
		}
	}
}

export {
	Material,
	Materials,
	AttributeNames,
	Attribute
}
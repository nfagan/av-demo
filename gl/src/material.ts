import { vec3 } from 'gl-matrix'
import { types, vector, attribute, common } from './util'

type AttributeNames = 'roughness' | 'albedo' | 'metallic'
type ValidatorT = (attr: Attribute, data: SetT) => void
type SetT = number | types.vec3Convertible
type GetT = number | vec3

class Attribute extends attribute._Attribute<SetT, GetT, AttributeNames> {
	constructor(name: AttributeNames, value: SetT, validator: ValidatorT = attribute.validators.Any) {
		super(name, value, validator)
		this.setValue(value)
	}
	_setValue(value: SetT): GetT {
		if (typeof(value) != 'number')
			value = vector.requireVec3(value)
		return value
	}
}

class MaterialAttributeMap extends attribute._AttributeMap<Attribute> { constructor() { super() } }

class Material extends attribute.Attributable<Attribute, MaterialAttributeMap, AttributeNames> {
	protected gl: WebGLRenderingContext

	constructor(gl: WebGLRenderingContext) {
		super()
		this.attributes = new MaterialAttributeMap()
		this.gl = gl
	}

	clone(): Material {
		return this._clone(Material, Attribute, this.gl)
	}

	public static Physical(gl: WebGLRenderingContext,
				_albedo: types.vec3Convertible = [1, 1, 1], 
				_roughness: number = 0.1,
				_metallic: number = 0.1): Material {
		let mat = new Material(gl)
		mat.addAttribute(new Attribute('albedo', _albedo, attribute.validators.Vec3))
		mat.addAttribute(new Attribute('metallic', _metallic, attribute.validators.Number))
		mat.addAttribute(new Attribute('roughness', _roughness, attribute.validators.Number))
		return mat
	}
}

export {
	Material,
	AttributeNames,
	Attribute
}
import { vec3 } from 'gl-matrix'
import { types, vector, attribute, common } from '../util/util'
import { LightingModels } from '../shader/types'
import * as texture from '../texture/texture'

type AttributeNames = 'roughness' | 'albedo' | 'metallic'
type ValidatorT = (attr: Attribute, data: SetT) => void
type SetT = number | types.vec3Convertible | texture.Texture
type GetT = number | vec3 | texture.Texture

class Attribute extends attribute._Attribute<SetT, GetT, AttributeNames> {
	_setValue(value: SetT): GetT {
		if (typeof(value) != 'number' && !(value instanceof texture.Texture)) {
			value = vector.requireVec3(value)
		}
		return value
	}
	public isTexture(): boolean {
		return types.isTexture(this.value)
	}
}

class MaterialAttributeMap extends attribute._AttributeMap<Attribute> { constructor() { super() } }

class Material extends attribute.Attributable<Attribute, MaterialAttributeMap, AttributeNames> {
	protected gl: WebGLRenderingContext
	protected lightingModel: LightingModels

	constructor(gl: WebGLRenderingContext) {
		super()
		this.attributes = new MaterialAttributeMap()
		this.gl = gl
	}

	public isTexture(name: AttributeNames): boolean {
		return this.getAttribute(name).isTexture()
	}

	public getLightingModel(): LightingModels {
		return this.lightingModel
	}

	public hasTexture(): boolean {
		for (let attr of this.enumerateAttributes()) {
			if (this.isTexture(attr.name))
				return true
		}
		return false
	}

	clone(): Material {
		return this._clone(Material, Attribute, this.gl)
	}

	public static Basic(gl: WebGLRenderingContext,
			_albedo: types.vec3Convertible = [1, 1, 1]): Material {
		
		let mat = new Material(gl)
		mat.lightingModel = 'physical'
		mat.addAttribute(new Attribute('albedo', _albedo, attribute.validators.Vec3OrTexture))
		return mat
	}

	public static Physical(gl: WebGLRenderingContext,
				_albedo: types.vec3Convertible = [1, 1, 1], 
				_roughness: number = 0.1,
				_metallic: number = 0.1): Material {

		let mat = new Material(gl)
		mat.lightingModel = 'physical'
		mat.addAttribute(new Attribute('albedo', _albedo, attribute.validators.Vec3OrTexture))
		mat.addAttribute(new Attribute('roughness', _roughness, attribute.validators.Number))
		mat.addAttribute(new Attribute('metallic', _metallic, attribute.validators.Number))
		return mat
	}
}

export {
	Material,
	AttributeNames,
	Attribute
}
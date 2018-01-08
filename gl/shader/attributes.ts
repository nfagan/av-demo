import { types } from '../util/util'

type ShaderAttribute = {
	name: string,
	location: number
}

export type ShaderAttributeKinds = 'position' | 'uv' | 'normal'

export type ShaderAttributeDataTypeFuncT = (name: ShaderAttributeKinds) => types.glsl

const ShaderAttributeDataType3DMap: { [K in ShaderAttributeKinds]: types.glsl } = {
	'position': 'vec3',
	'normal': 'vec3',
	'uv': 'vec2'
}

export const ShaderAttributeDataType3D: ShaderAttributeDataTypeFuncT = (name) => {
	return ShaderAttributeDataType3DMap[name]
}

export class ShaderAttributeMap {
	static items: { [K in ShaderAttributeKinds]: string } = {
		'position': 'in_position',
		'uv': 'in_uv',
		'normal': 'in_normal'
	}

	static getAttribute(name: ShaderAttributeKinds): string {
		return ShaderAttributeMap.items[name]
	}
}

export class ShaderAttributes {

	[key: string]: ShaderAttribute

	position: ShaderAttribute
	uv: ShaderAttribute
	normal: ShaderAttribute

	constructor() {
		this.position = {
			name: 'in_position',
			location: null
		}
		this.uv = {
			name: 'in_uv',
			location: null
		}
		this.normal = {
			name: 'in_normal',
			location: null
		}
	}
}
import { types } from '../util/util'

type ShaderAttribute = {
	name: string,
	location: number
}

export type ShaderAttributeKinds = 'position' | 'uv' | 'normal' | 'index'

export type ShaderAttributeDataTypeFuncT = (name: ShaderAttributeKinds) => types.glsl

const ShaderAttributeDataType3DMap: { [K in ShaderAttributeKinds]: types.glsl } = {
	'position': 'vec3',
	'normal': 'vec3',
	'uv': 'vec2',
	'index': 'vec2'
}

export const ShaderAttributeDataType3D: ShaderAttributeDataTypeFuncT = (name) => {
	return ShaderAttributeDataType3DMap[name]
}

export function makeAttributeString(name: string): string {
	return `in_${name}`
}
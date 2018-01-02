import { mat4, vec2, vec3, glMatrix } from 'gl-matrix'
import * as texture from './texture'

export type arrayPrimitive = Array<number>
export type arrayLike = Array<number> | Float32Array
export type glmArrayPrimitive = Float32Array
export type glmArray = vec3 | mat4
export type primitive = number | boolean | string
export type vec3Convertible = number | vec3 | Array<number>
export type cloneable = primitive | mat4 | vec3 | arrayPrimitive | texture.Texture
export type vector = vec2 | vec3

export enum core {
	mat4,
	vec3,
	Float32Array,
	number,
	boolean,
	string
}

export function isMat4(data: vec3 | mat4): data is mat4 {
	return data.length === 16
}

export function isVec3(data: vec3 | mat4): data is vec3 {
	return data.length === 3
}

export function isPrimitive(data: cloneable): data is primitive {
	if (typeof data === 'number' || typeof data === 'boolean' || typeof data === 'string')
		return true
	return false
}

export function isNElementArray(data: cloneable, N: number): boolean {
	if (isPrimitive(data)) {
		return false
	} else if (isTexture(data)) {
		return false
	}
	return ('length' in data) && (data.length === N)
}

export function isTexture(data: cloneable): data is texture.Texture {
	return data instanceof texture.Texture
}

export function isArray(data: cloneable): data is arrayPrimitive {
	if (Array.isArray(data))
		return true
	return false
}

export function isGLMArrayType(data: cloneable): data is glmArray {
	if (isPrimitive(data)) {
		return false
	} else if (!(data instanceof Float32Array)) {
		return false
	} else {
		return isMat4(data) || isVec3(data)
	}
}
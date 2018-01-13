import { mat4, vec2, vec3, glMatrix } from 'gl-matrix'
import * as texture from '../texture/texture'
import { LightNames } from '../light/light'

export type arrayPrimitive = Array<number>
export type arrayLike = Array<number> | Float32Array
export type glmArrayPrimitive = Float32Array
export type glmArray = vec3 | mat4
export type primitive = number | boolean | string
export type vec3Convertible = number | vec3 | Array<number>
export type cloneable = primitive | mat4 | vec3 | arrayPrimitive | texture.Texture | Integer
export type vector = vec2 | vec3
export type glsl = LightNames | 'int' | 'float' | 'vec2' | 'vec3' | 'vec4' | 'mat3' | 'mat4' | 'sampler2D'
export type glslPrecision = 'mediump' | 'highp'

export enum core {
	mat4,
	vec3,
	Float32Array,
	number,
	boolean,
	string
}

export function getGLSLType(data: number | vec3 | texture.Texture): glsl {
	if (isTexture(data))
		return 'sampler2D'
	if (isNElementArray(data, 2))
		return 'vec2'
	if (isNElementArray(data, 3))
		return 'vec3'
	if (isNElementArray(data, 4))
		return 'vec4'
	if (isNumber(data))
		return 'float'
	
	console.log(data)
	throw new Error('Cannot resolve the glsl data type for the given js data.')
}

export function isMat4(data: vec3 | mat4): data is mat4 {
	return data.length === 16
}

export function isVec3(data: vec3 | mat4): data is vec3 {
	return data.length === 3
}

export function isNumber(data: cloneable): data is number {
	return typeof data === 'number'
}

export function isBoolean(data: cloneable): data is boolean {
	return typeof data === 'boolean'
}

export function isInteger(data: cloneable): data is Integer {
	return data instanceof Integer
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
	} else if (isInteger(data)) {
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

export class Integer {
	private _value: number
	constructor(value: number) { 
		this.set(value)
	}
	public get(): number { 
		return this._value
	}
	public set(value: number): void { 
		this._value = Math.round(value)
	}
}
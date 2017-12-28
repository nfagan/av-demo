import { mat4, vec3, glMatrix } from 'gl-matrix'

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

export type isVec3Convertible = number | vec3 | Array<number>
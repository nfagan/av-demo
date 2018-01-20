import * as types from './type-util'
import * as glm from 'gl-matrix'
import { Texture } from '../texture/texture'

function cloneGLMArray(data: types.glmArray): types.glmArray {
	if (types.isMat4(data)) {
		return glm.mat4.copy(glm.mat4.create(), data)
	} else if (types.isVec3(data)) {
		return glm.vec3.copy(glm.vec3.create(), data)
	}
}

export function unsafeHash(data: string): number {
	// https://stackoverflow.com/questions/6122571/simple-non-secure-hash-function-for-javascript
    let hash = 0
    if (data.length === 0)
    	return hash
    for (let i = 0; i < data.length; i++) {
    	let char = data.charCodeAt(i)
    	hash = ((hash<<5) - hash) + char
        hash = hash & hash
    }
    return hash
}

export function unsafeHashFunc(data: Function): number {
	return unsafeHash(data.toString())
}

export function clone(data: types.cloneable) : types.cloneable {
	if (types.isPrimitive(data)) {
		return data
	} else if (types.isGLMArrayType(data)) {
		return cloneGLMArray(data)
	} else if (types.isArray(data)) {
		return data.slice()
	} else if (types.isTexture(data)) {
		return data.clone()
	}
	throw new Error(`Unrecognized type.`)
}

export function ind2sub(idx: number, dims: Array<number>): Array<number> {

	// http://kritisen.com/2011/08/17/subscripts-from-linear-index-and-vice-versa-c/

	let n: number = dims.length
	let prod: Array<number> = []
	let result = new Array<number>(n)
	for (let i: number = 0; i < n; i++) {
		prod[i] = 1
		for (let j: number = n-1; j > i; j--) prod[i] *= dims[j]
	}
	for (let i: number = 0; i < n; i++) {
		result[i] = idx
		for (let j: number = 0; j < i; j++)
			result[i] = result[i] % prod[j]
		result[i] = Math.floor(result[i] / prod[i])
	}
	return result
}
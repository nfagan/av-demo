import * as glm from 'gl-matrix'
import * as types from './type-util'

export function requireVec3(val: glm.vec3 | Array<number> | number): glm.vec3 {
	if (val instanceof Array) {
		let len = val.length
		if (len !== 3)
			throw new Error(`Array must have 3 elements; ${len} were present.`)
		val = glm.vec3.fromValues(val[0], val[1], val[2])
	} else if (typeof(val) == 'number') {
		val = glm.vec3.fromValues(val, val, val)
	}
	return val
}

export function cloneVec3Convertible(data: types.vec3Convertible): types.vec3Convertible {
	if (typeof(data) == 'number') {
		return data
	} else if (Array.isArray(data)) {
		return data.slice()
	} else {
		return glm.vec3.clone(data)
	}
}
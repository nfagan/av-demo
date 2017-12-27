import * as glm from 'gl-matrix'

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
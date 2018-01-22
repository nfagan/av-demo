import * as glm from 'gl-matrix'
import { vector, types } from './util'
import * as math from '../math/wgl-math'
import { decompose, recompose, compositionT, slerp, requireCompleteCompositionT } from './matrix-composition-util'

class transform {

	data: glm.mat4

	constructor(data: glm.mat4 = glm.mat4.create()) {
		this.data = data
	}

	public identity(): transform {
		glm.mat4.identity(this.data)
		return this
	}

	public translate(val: types.vec3Convertible): transform {
		val = vector.requireVec3(val)
		glm.mat4.translate(this.data, this.data, val)
		return this
	}

	public rotate(rad: number, axis: types.vec3Convertible): transform {
		axis = vector.requireVec3(axis)
		glm.mat4.rotate(this.data, this.data, rad, axis)
		return this
	}

	public quatRotate(q: glm.quat): transform {
		math.quatToRotationMatrix(q, this.data)
		return this
	}

	public scale(val: types.vec3Convertible): transform {
		val = vector.requireVec3(val)
		glm.mat4.scale(this.data, this.data, val)
		return this
	}

	public mat(): glm.mat4 {
		return this.data
	}

	public clone(): transform {
		return new transform(this.matCopy())
	}

	public matCopy(): glm.mat4 {
		return glm.mat4.copy(glm.mat4.create(), this.data)
	}

}

export {
	transform,
	slerp,
	decompose,
	recompose,
	compositionT,
	requireCompleteCompositionT
}
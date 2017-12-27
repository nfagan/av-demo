import * as glm from 'gl-matrix'
import { vector } from './util'

export class transform {

	data: glm.mat4

	constructor(data?: glm.mat4) {
		if (data == null) {
			this.data = glm.mat4.create()
		} else {
			this.data = data
		}
	}

	public translate(val: glm.vec3 | Array<number>): transform {
		val = vector.requireVec3(val)
		glm.mat4.translate(this.data, this.data, val)
		return this
	}

	public rotate(rad: number, axis: glm.vec3 | Array<number>): transform {
		axis = vector.requireVec3(axis)
		glm.mat4.rotate(this.data, this.data, rad, axis)
		return this
	}

	public scale(val: glm.vec3 | Array<number> | number): transform {
		val = vector.requireVec3(val)
		glm.mat4.scale(this.data, this.data, val)
		return this
	}

	public mat(): glm.mat4 {
		// return glm.mat4.copy(glm.mat4.create(), this.data)
		return this.data
	}

}
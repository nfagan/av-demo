import { vec3 } from 'gl-matrix'
import { vector } from './util'
import { Resource } from './resource'

enum LightTypes {
	directional,
	point,
	spot
}

type LightParameterMap = {
	[key: string]: vec3
}

class Light extends Resource {

	gl: WebGLRenderingContext
	position: vec3
	color: vec3
	index: number
	kind: LightTypes = LightTypes.point
	active: boolean = true

	constructor(gl: WebGLRenderingContext) {
		super()
		this.gl = gl
		this.position = vec3.fromValues(0, 0, 0)
		this.color = vec3.fromValues(1, 1, 1)
		this.index = 0
	}

	public setPosition(val: vec3 | Array<number>) {
		this.position = vector.requireVec3(val)
	}

	public setColor(val: vec3 | Array<number> | number) {
		this.color = vector.requireVec3(val)
	}

	public enumerate(): LightParameterMap {
		return {
			position: this.position,
			color: this.color
		}
	}
}

export { Light, LightTypes }
import { mat4, vec3 } from 'gl-matrix'
import * as types from '../util/type-util'
import * as vector from '../util/vector-util'

export default class {

	protected gl: WebGLRenderingContext
	protected projection: mat4
	protected clearColor: vec3
	protected fov: number = 45.0
	protected near: number = 0.1
	protected far: number = 1000.0
	protected aspect: number = 1.0
	protected clearBits: number

	constructor(gl: WebGLRenderingContext) {
		this.gl = gl
		this.projection = this.getProjectionMatrix()
		this.clearColor = vec3.fromValues(0.2, 0.2, 0.2)
		this.setup()
	}

	protected setup(): void {
		const gl = this.gl
		gl.enable(gl.DEPTH_TEST)
		this.clearBits = gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT
	}

	public setClearBits(bits: number | null) {
		this.clearBits = bits
	}

	public setNearFar(near: number, far: number): void {
		this.near = near
		this.far = far
		this.projection = this.getProjectionMatrix()
	}

	public setClearColor(color: types.vec3Convertible): void {
		this.clearColor = vector.requireVec3(color)
	}

	public clear(): void {
		const gl = this.gl
		const cc = this.clearColor
		const cb = this.clearBits
		gl.clearColor(cc[0], cc[1], cc[2], 1.0)
		if (cb !== null)
			gl.clear(cb)
	}

	public setAspect(ar: number) {
		this.aspect = ar
		this.projection = this.getProjectionMatrix()
	}

	public getProjectionMatrix(): mat4 {
		let projection = mat4.create()
		return mat4.perspective(projection, this.fov, this.aspect, this.near, this.far)
	}
}
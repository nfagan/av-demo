import { mat4, vec3 } from 'gl-matrix'

export default class {

	protected gl: WebGLRenderingContext
	protected projection: mat4
	protected clearColor: vec3
	protected fov: number = 45.0
	protected near: number = 0.1
	protected far: number = 100.0
	protected aspect: number = 1.0

	constructor(gl: WebGLRenderingContext) {
		this.gl = gl
		this.projection = this.getProjectionMatrix()
		this.clearColor = vec3.fromValues(0.2, 0.2, 0.2)
		this.setup()
	}

	protected setup(): void {
		const gl = this.gl
		gl.enable(gl.DEPTH_TEST)
	}

	public clear(): void {
		const gl = this.gl
		const cc = this.clearColor
		gl.clearColor(cc[0], cc[1], cc[2], 1.0)
		gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
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
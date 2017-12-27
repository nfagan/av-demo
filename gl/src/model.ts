import { Resource } from './resource'
import { Mesh } from './mesh'
import { mat4, vec3, glMatrix } from 'gl-matrix'
import { ShaderProgram } from './shader'
import { matrix } from './util'
import * as math from './wgl-math'

class Model extends Resource {

	private gl: WebGLRenderingContext
	public mesh: Mesh
	public program: ShaderProgram

	private position: vec3
	private rotation: vec3
	private scale: vec3
	private color: vec3

	constructor(gl: WebGLRenderingContext, mesh: Mesh, program: ShaderProgram) {
		super()
		this.gl = gl
		this.mesh = mesh
		this.program = program
		this.position = vec3.fromValues(0, 0, 0)
		this.rotation = vec3.fromValues(0, 0, 0)
		this.scale = vec3.fromValues(1, 1, 1)
		this.color = vec3.fromValues(1, 1, 1)
	}

	public setPosition(pos: vec3): void {
		this.position = pos
	}

	public setColor(color: vec3): void {
		this.color = color
	}

	public setRotation(rot: vec3): void {
		this.rotation = rot
	}

	public setScale(scale: vec3): void {
		this.scale = scale
	}

	public getColor(): vec3 {
		return this.color
	}

	public bind(): void {
		this.mesh.bind(this.program)
	}

	public unbind(): void {
		this.mesh.unbind()
	}

	public getTransformationMatrix(): mat4 {
		return new matrix.transform()
			.translate(this.position)
			.rotate(math.radians(this.rotation[0]), [1, 0, 0])
			.rotate(math.radians(this.rotation[1]), [0, 1, 0])
			.rotate(math.radians(this.rotation[2]), [0, 0, 1])
			.scale(this.scale)
			.mat()
	}

	public static compareMeshUUID(a: Model, b: Model): number {
		return Mesh.compareUUID(a.mesh, b.mesh)
	}

}

export { Model }
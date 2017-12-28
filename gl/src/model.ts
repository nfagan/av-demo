import { Resource } from './resource'
import { Mesh } from './mesh'
import { mat4, vec3, glMatrix } from 'gl-matrix'
import { ShaderProgram } from './shader'
import { matrix, types, vector } from './util'
import * as math from './wgl-math'
import * as Material from './material'

class Model extends Resource {

	private gl: WebGLRenderingContext
	public mesh: Mesh
	public program: ShaderProgram
	public material: Material.Material

	private position: vec3
	private rotation: vec3
	private scale: vec3

	constructor(gl: WebGLRenderingContext, program: ShaderProgram, mesh: Mesh, material: Material.Material) {
		super()
		this.gl = gl
		this.program = program
		this.mesh = mesh
		this.material = material
		this.position = vec3.fromValues(0, 0, 0)
		this.rotation = vec3.fromValues(0, 0, 0)
		this.scale = vec3.fromValues(1, 1, 1)
	}

	public setPosition(pos: types.isVec3Convertible): void {
		this.position = vector.requireVec3(pos)
	}

	public setRotation(rot: types.isVec3Convertible): void {
		this.rotation = vector.requireVec3(rot)
	}

	public setScale(scale: types.isVec3Convertible): void {
		this.scale = vector.requireVec3(scale)
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
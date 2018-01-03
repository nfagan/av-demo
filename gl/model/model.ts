import { Resource } from '../common/resource'
import { Mesh } from '../mesh/mesh'
import { mat4, vec3, glMatrix } from 'gl-matrix'
import { ShaderProgram } from '../shader/shader'
import { matrix, types, vector } from '../util/util'
import * as math from '../math/wgl-math'
import * as Material from '../material/material'

export type RenderCallbackT = () => void

class Model extends Resource {

	private gl: WebGLRenderingContext
	public mesh: Mesh
	public program: ShaderProgram
	public material: Material.Material

	public alias: string

	private parent: Model
	private children: { [key: string]: Model }

	private position: vec3
	private rotation: vec3
	private scale: vec3
	private transform: matrix.transform

	//	Events
	public onBeforeRender: RenderCallbackT
	public onAfterRender: RenderCallbackT

	constructor(gl: WebGLRenderingContext, program: ShaderProgram, mesh: Mesh, material: Material.Material) {
		super()
		this.gl = gl
		this.program = program
		this.mesh = mesh
		this.material = material
		this.position = vec3.fromValues(0, 0, 0)
		this.rotation = vec3.fromValues(0, 0, 0)
		this.scale = vec3.fromValues(1, 1, 1)
		this.alias = ''
		this.transform = new matrix.transform

		this.parent = null
		this.children = {}

		this.onBeforeRender = () => {}
		this.onAfterRender = () => {}
	}

	public setMesh(mesh: Mesh): void { 
		this.mesh = mesh 
	}

	public setMaterial(material: Material.Material): void { 
		this.material = material 
	}

	public setPosition(pos: types.vec3Convertible): void {
		this.position = vector.requireVec3(pos)
	}

	public setRotation(rot: types.vec3Convertible): void {
		this.rotation = vector.requireVec3(rot)
	}

	public setScale(scale: types.vec3Convertible): void {
		this.scale = vector.requireVec3(scale)
	}

	public getPosition(): vec3 { return this.position }
	public getRotation(): vec3 { return this.rotation }
	public getScale(): vec3 { return this.scale }

	public getWorldMatrix(): mat4 {
		let local: mat4 = this.getLocalMatrix()
		if (this.parent === null)
			return local
		let parentWorld: mat4 = this.parent.getWorldMatrix()
		return mat4.mul(parentWorld, parentWorld, local)
	}

	public getLocalMatrix(): mat4 {
		let trans = this.transform
		let pos = this.position
		let rot = this.rotation
		let scl = this.scale
		
		return trans.identity()
			.translate(pos)
			.rotate(math.radians(rot[0]), [1, 0, 0])
			.rotate(math.radians(rot[1]), [0, 1, 0])
			.rotate(math.radians(rot[2]), [0, 0, 1])
			.scale(scl)
			.mat()
	}

	public static compareMeshUUID(a: Model, b: Model): number {
		return Mesh.compareUUID(a.mesh, b.mesh)
	}

	public addChild(model: Model): void {
		this.children[model.uuid] = model
		model.parent = this
	}

	public hasChild(model: Model): boolean {
		return this.children[model.uuid] !== undefined
	}

	public removeChild(model: Model): void {
		if (!this.hasChild(model)) {
			throw new Error(`Model "${model.alias}" is not a child of "${this.alias}".`)
		}
		this.children[model.uuid] = undefined
		model.parent = null
	}

}

export { Model }
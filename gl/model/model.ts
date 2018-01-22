import { Resource } from '../common/resource'
import { Mesh } from '../mesh/mesh'
import { mat4, quat, vec3, glMatrix } from 'gl-matrix'
import { ShaderProgram } from '../shader/shader'
import { matrix, types, vector } from '../util/util'
import * as math from '../math/wgl-math'
import * as Material from '../material/material'
import { SkeletalAnimation } from '../animation/skeletal-animator'

export type RenderCallbackT = (a: Model) => void

class Model extends Resource {

	public gl: WebGLRenderingContext
	public mesh: Mesh
	public program: ShaderProgram
	public material: Material.Material

	public alias: string

	private parent: Model
	private children: { [key: string]: Model }

	public position: vec3
	public rotation: vec3
	public orientation: quat
	public scale: vec3
	public transform: matrix.transform

	public order: number

	//	Animation
	public animation: SkeletalAnimation

	//	Properties
	public receivesLight: boolean
	public receivesShadow: boolean
	public visible: boolean

	//	Events
	public onBeforeRender: RenderCallbackT
	public onAfterRender: RenderCallbackT

	constructor(gl: WebGLRenderingContext, mesh: Mesh, material: Material.Material, program: ShaderProgram = null) {
		super()
		this.gl = gl
		this.program = program
		this.mesh = mesh
		this.material = material
		this.position = vec3.fromValues(0, 0, 0)
		this.rotation = vec3.fromValues(0, 0, 0)
		this.scale = vec3.fromValues(1, 1, 1)
		this.orientation = quat.create()
		this.alias = ''
		this.transform = new matrix.transform
		this.order = 0

		this.parent = null
		this.children = {}

		//	properties
		this.receivesLight = true
		this.receivesShadow = true
		this.visible = true

		//	events
		this.onBeforeRender = (a: this) => {}
		this.onAfterRender = (a: this) => {}

		//	animation
		this.animation = null
	}

	public hasAnimation(): boolean {
		return this.animation !== null && this.animation !== undefined
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
		const vrot = vector.requireVec3(rot)
		this.orientation = quat.fromEuler(this.orientation, vrot[0], vrot[1], vrot[2])
	}

	public setScale(scale: types.vec3Convertible): void {
		this.scale = vector.requireVec3(scale)
	}

	public getPosition(): vec3 { return this.position }
	public getRotation(): vec3 { return this.rotation }
	public getOrientation(): quat { return this.orientation }
	public getScale(): vec3 { return this.scale }

	public getWorldMatrix(): mat4 {
		let local: mat4 = this.getLocalMatrix()
		if (this.parent === null)
			return local
		let parentWorld: mat4 = this.parent.getWorldMatrix()
		return mat4.mul(parentWorld, parentWorld, local)
	}

	public getLocalMatrix(): mat4 {
		const trans = this.transform.data
		const position = this.position
		const orientation = this.orientation
		const scale = this.scale

		return matrix.recompose(trans, {
			quaternion: orientation,
			translation: position,
			scale
		})
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

	public static compareMeshUUID(a: Model, b: Model): number {
		return Mesh.compareUUID(a.mesh, b.mesh)
	}

	public static compareOrder(a: Model, b: Model): number {
		if (a.uuid === b.uuid)
			return 0
		return a.order > b.order ? 1 : -1
	}

	public static compareOrderThenMeshUUID(a: Model, b: Model): number {
		let res = Model.compareOrder(a, b)
		if (res !== 0)
			return res
		return Model.compareMeshUUID(a, b)
	}

}

export { Model }
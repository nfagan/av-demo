import base from './base-renderer'
import * as Shader from '../shader'
import * as Light from '../light'
import { Mesh } from '../mesh'
import { Maps } from '../uniforms'
import { Model } from '../model'
import { Camera } from '../camera'
import { mat4 } from 'gl-matrix'
import * as Material from '../material'
import { Scene } from '../scene'

export default class extends base {

	lastMesh: Mesh = null
	lastProgram: Shader.ShaderProgram = null

	constructor(gl: WebGLRenderingContext) {
		super(gl)
	}

	public render(scene: Scene, camera: Camera) {
		this.clear()

		if (scene.models.length === 0) return
		if (!scene.modelsSorted) scene.sortModels(Model.compareMeshUUID)

		this.configureCamera(scene.models[0].program, camera)

		for (let model of scene.models) {
			const prog = model.program
			const material = model.material
			const mesh = model.mesh
			if (this.conditionalBindProgram(prog)) {
				this.configureCamera(prog, camera)
				this.configureLights(prog, scene.lights)
			}
			this.configureTransform(prog, model.getTransformationMatrix())
			this.configureMaterial(prog, material)
			this.draw(prog, mesh)
		}
	}

	public draw(prog: Shader.ShaderProgram, mesh: Mesh) {
		this.conditionalBindProgram(prog)
		this.conditionalBindMesh(prog, mesh)
		mesh.draw()
	}

	public configureTransform(prog: Shader.ShaderProgram, transformMatrix: mat4) {
		this.conditionalBindProgram(prog)
		prog.setUniform(Maps.Core.getUniform('model'), transformMatrix)
	}

	public configureCamera(prog: Shader.ShaderProgram, camera: Camera): void {
		this.conditionalBindProgram(prog)
		prog.setUniform(Maps.Core.getUniform('projection'), this.projection)
		prog.setUniform(Maps.Core.getUniform('view'), camera.getViewMatrix())
		prog.setUniform(Maps.Core.getUniform('camera_position'), camera.position)
	}

	public configureMaterial(prog: Shader.ShaderProgram, material: Material.Material): void {
		this.conditionalBindProgram(prog)
		let attrs: Array<Material.Attribute> = material.enumerateAttributes()
		for (let attr of attrs) {
			if (attr.isDirty) {
				prog.setUniform(Maps.Material.getUniform(attr.name), attr.getValue())
			}
		}
	}

	public configureLight(prog: Shader.ShaderProgram, light: Light.Light): void {
		this.conditionalBindProgram(prog)
		let active = light.getActive()
		let index = light.getIndex()
		let attrs: Array<Light.Attribute> = light.enumerateAttributes()
		prog.setUniform(Maps.Light.getUniform('active'), active)
		if (!active) return
		for (let attr of attrs) {
			if (attr.name === 'index' || attr.name === 'active') continue
			if (attr.isDirty) {
				let un = Maps.Light.getUniform(attr.name)
				let unf = `${light.getName()}[${index}].${un}`
				prog.setUniform(unf, attr.getValue())
			}
		}
	}

	private configureLights(prog: Shader.ShaderProgram, lights: Array<Light.Light>): void {
		for (let light of lights) {
			this.configureLight(prog, light)
		}
	}

	private conditionalBindMesh(prog: Shader.ShaderProgram, mesh: Mesh): boolean {
		let isNullLastMesh: boolean = this.lastMesh == null
		let isNewMesh: boolean = isNullLastMesh || !Mesh.equals(mesh, this.lastMesh)
		if (isNewMesh) {
			if (!isNullLastMesh && this.lastMesh.isBound()) this.lastMesh.unbind()
			if (!mesh.isBound()) mesh.bind(prog)
		}
		this.lastMesh = mesh
		return isNewMesh
	}

	private conditionalBindProgram(prog: Shader.ShaderProgram): boolean {
		let isNullLastProgram: boolean = this.lastProgram == null
		let isNewProgram: boolean = isNullLastProgram || !Shader.ShaderProgram.equals(prog, this.lastProgram)
		if (isNewProgram) {
			if (!isNullLastProgram && this.lastProgram.isBound()) this.lastProgram.unbind()
			if (!prog.isBound()) prog.bind()
		}
		this.lastProgram = prog
		return isNewProgram
	}

}
import base from './base-renderer'
import * as Shader from '../shader/shader'
import * as Light from '../light/light'
import { Mesh } from '../mesh/mesh'
import * as uniforms from '../shader/uniforms'
import { Model } from '../model/model'
import { Camera } from '../camera/camera'
import { mat4 } from 'gl-matrix'
import * as Material from '../material/material'
import * as texture from '../texture/texture'
import { types } from '../util/util'
import { Scene } from '../scene/scene'

export default class extends base {

	lastMesh: Mesh = null
	lastProgram: Shader.ShaderProgram = null
	lastMaterial: Material.Material = null

	constructor(gl: WebGLRenderingContext) {
		super(gl)
	}

	public render(scene: Scene, camera: Camera) {
		this.clear()

		if (scene.models.length === 0) return
		if (!scene.modelsSorted) scene.sortModels(Model.compareMeshUUID)

		this.configureCamera(scene.models[0].program, camera)
		this.configureLights(scene.models[0].program, scene.lights)

		for (let model of scene.models) {
			this.drawModel(scene, camera, model)
		}

		this.drawBackground(scene, camera)
	}

	private drawBackground(scene: Scene, camera: Camera): void {
		if (!scene.background)
			return
		const gl = this.gl
		gl.depthFunc(gl.LEQUAL)
		this.drawModel(scene, camera, scene.background)
		gl.depthFunc(gl.LESS)
	}

	private drawModel(scene: Scene, camera: Camera, model: Model): void {
		model.onBeforeRender()
		const prog = model.program
		const material = model.material
		const mesh = model.mesh
		if (this.conditionalBindProgram(prog)) {
			this.configureCamera(prog, camera)
			this.configureLights(prog, scene.lights)
		}
		this.configureTransform(prog, model.getWorldMatrix())
		this.configureMaterial(prog, material)
		this.draw(prog, mesh)
		model.onAfterRender()
	}

	public draw(prog: Shader.ShaderProgram, mesh: Mesh): void {
		this.conditionalBindProgram(prog)
		this.conditionalBindMesh(prog, mesh)
		mesh.draw()
	}

	public configureTransform(prog: Shader.ShaderProgram, transformMatrix: mat4): void {
		this.conditionalBindProgram(prog)
		this.conditionalSetUniform(prog, 'model', transformMatrix)
	}

	public configureCamera(prog: Shader.ShaderProgram, camera: Camera): void {
		this.conditionalBindProgram(prog)
		this.conditionalSetUniform(prog, 'projection', this.projection)
		this.conditionalSetUniform(prog, 'view', camera.getViewMatrix())
		this.conditionalSetUniform(prog, 'camera_position', camera.position)
	}

	public configureMaterial(prog: Shader.ShaderProgram, material: Material.Material): void {
		this.conditionalBindProgram(prog)
		let isNew = this.checkNewMaterial(material)
		let attrs: Array<Material.Attribute> = material.enumerateAttributes()
		for (let attr of attrs) {
			if (isNew || attr.isDirty) {
				this.conditionalSetUniform(prog, attr.name, attr.getValue())
			}
			if (types.isTexture(attr.peekValue())) {
				this.configureTexture(prog, attr.getValue() as texture.Texture)
			}
		}
	}

	public configureTexture(prog: Shader.ShaderProgram, tex: texture.Texture): void {
		this.conditionalBindProgram(prog)
		tex.bind()
	}

	public configureLight(prog: Shader.ShaderProgram, light: Light.Light): void {
		this.conditionalBindProgram(prog)
		let active: boolean = light.active
		if (!active) return
		let index = light.getIndex()
		let attrs: Array<Light.Attribute> = light.enumerateAttributes()
		for (let attr of attrs) {
			if (attr.isDirty) {
				let un = uniforms.Map.getUniform(attr.name)
				let mappedName = uniforms.Map.getUniform(light.getName())
				let unf = `${mappedName}[${index}].${un}`
				if (prog.hasUniform(light.getName())) {
					prog.setUniform(unf, attr.getValue())
				}
			}
		}
	}

	private configureLights(prog: Shader.ShaderProgram, lights: Array<Light.Light>): void {
		for (let light of lights) {
			this.configureLight(prog, light)
		}
	}

	private checkNewMaterial(material: Material.Material): boolean {
		let isNullLastMaterial: boolean = this.lastMaterial === null
		let isNewMaterial: boolean = isNullLastMaterial || 
			!Material.Material.equals(material, this.lastMaterial)
		this.lastMaterial = material
		return isNewMaterial
	}

	private conditionalBindMesh(prog: Shader.ShaderProgram, mesh: Mesh): boolean {
		let isNullLastMesh: boolean = this.lastMesh === null
		let isNewMesh: boolean = isNullLastMesh || !Mesh.equals(mesh, this.lastMesh)
		if (isNewMesh) {
			if (!isNullLastMesh && this.lastMesh.isBound()) this.lastMesh.unbind()
			if (!mesh.isBound()) mesh.bind(prog)
		}
		this.lastMesh = mesh
		return isNewMesh
	}

	private conditionalBindProgram(prog: Shader.ShaderProgram): boolean {
		let isNullLastProgram: boolean = this.lastProgram === null
		let isNewProgram: boolean = isNullLastProgram || !Shader.ShaderProgram.equals(prog, this.lastProgram)
		if (isNewProgram) {
			if (!isNullLastProgram && this.lastProgram.isBound()) this.lastProgram.unbind()
			if (!prog.isBound()) prog.bind()
		}
		this.lastProgram = prog
		return isNewProgram
	}

	private conditionalSetUniform(prog: Shader.ShaderProgram, name: uniforms.UniformNames, value: Shader.UniformSettable): void {
		if (prog.hasUniform(name)) {
			prog.setUniform(uniforms.Map.getUniform(name), value)
		}
	}

}
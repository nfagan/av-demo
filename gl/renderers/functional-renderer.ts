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

	public reset(): void {
		this.lastMesh = null
		this.lastProgram = null
		this.lastMaterial = null
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

	public drawModel(scene: Scene, camera: Camera, model: Model): void {
		model.onBeforeRender()
		const prog = model.program
		const material = model.material
		const mesh = model.mesh
		let forceUpdate = false
		if (this.conditionalBindProgram(prog)) {
			forceUpdate = true
			this.configureCamera(prog, camera)
			this.configureLights(prog, scene.lights, forceUpdate)
		}
		this.configureTransform(prog, model.getWorldMatrix())
		this.configureMaterial(prog, material, forceUpdate)
		this.draw(prog, mesh, forceUpdate)
		model.onAfterRender()
	}

	public draw(prog: Shader.ShaderProgram, mesh: Mesh, force: boolean = false): void {
		this.conditionalBindProgram(prog)
		this.conditionalBindMesh(prog, mesh, force)
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

	public configureMaterial(prog: Shader.ShaderProgram, material: Material.Material, force: boolean = false): void {
		let isNewProg = this.conditionalBindProgram(prog)
		let isNewMat = this.checkNewMaterial(material)
		let attrs: Array<Material.Attribute> = material.enumerateAttributes()
		for (let attr of attrs) {
			if (isNewMat || isNewProg || force || attr.isDirty) {
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

	public configureLight(prog: Shader.ShaderProgram, light: Light.Light, force: boolean = false): void {
		let isNewProg = this.conditionalBindProgram(prog)
		if (!light.active) return
		let index = light.getIndex()
		let attrs: Array<Light.Attribute> = light.enumerateAttributes()
		for (let attr of attrs) {
			if (isNewProg || force || attr.isDirty) {
				let un = uniforms.Map.getUniform(attr.name)
				let mappedName = uniforms.Map.getUniform(light.getName())
				let unf = `${mappedName}[${index}].${un}`
				if (prog.hasUniform(light.getName())) {
					prog.setUniform(unf, attr.getValue())
				}
			}
		}
	}

	private configureLights(prog: Shader.ShaderProgram, lights: Array<Light.Light>, force: boolean = false): void {
		for (let light of lights) {
			this.configureLight(prog, light, force)
		}
	}

	private checkNewMaterial(material: Material.Material): boolean {
		let isNullLastMaterial: boolean = this.lastMaterial === null
		let isNewMaterial: boolean = isNullLastMaterial || 
			!Material.Material.equals(material, this.lastMaterial)
		this.lastMaterial = material
		return isNewMaterial
	}

	public conditionalBindMesh(prog: Shader.ShaderProgram, mesh: Mesh, force: boolean = false): boolean {
		let isNullLastMesh = this.lastMesh === null
		let isNewBoundProg = !mesh.isBoundTo(prog)
		let isNewMesh = force || isNullLastMesh || !Mesh.equals(mesh, this.lastMesh) || isNewBoundProg
		if (isNewMesh) {
			if (!isNullLastMesh && this.lastMesh.isBound()) this.lastMesh.unbind()
			if (!mesh.isBound() || isNewBoundProg) mesh.bind(prog)
		}
		this.lastMesh = mesh
		return isNewMesh
	}

	public conditionalBindProgram(prog: Shader.ShaderProgram, force: boolean = false): boolean {
		let isNullLastProgram = this.lastProgram === null
		let isNewProgram = force || isNullLastProgram || !Shader.ShaderProgram.equals(prog, this.lastProgram)
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
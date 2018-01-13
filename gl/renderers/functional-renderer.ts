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
import { FBO } from '../fbo/fbo'
import { types } from '../util/util'
import { Scene } from '../scene/scene'
import { fromModel } from '../shader-builder/shader-builder-index'

export default class extends base {

	private lastMesh: Mesh = null
	private lastProgram: Shader.ShaderProgram = null
	private lastMaterial: Material.Material = null
	private lastFBO: FBO = null

	private lightIds: {[key: string]: {[key: string]: Array<string>}} = {}
	private textureIds: {[key: string]: Array<string>} = {}

	constructor(gl: WebGLRenderingContext) {
		super(gl)
	}

	public reset(): void {
		this.lastMesh = null
		this.lastProgram = null
		this.lastMaterial = null
		this.clearLightIds()
		this.clearTextureIds()
	}

	public render(scene: Scene, camera: Camera) {
		this.clear()

		if (scene.models.length === 0) return
		if (!scene.modelsSorted) scene.sortModels(Model.compareMeshUUID)

		const self = this

		scene.models.map(model => self.requireProgram(model))

		this.clearLightIds()

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
		if (!model.visible)
			return

		model.onBeforeRender()

		this.clearTextureIds()

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
		const index = this.getTextureIndex(prog, tex)
		const gl = this.gl
		tex.index = index
		gl.activeTexture(gl.TEXTURE0 + index)
		tex.bind()
	}

	public configureLight(prog: Shader.ShaderProgram, light: Light.Light, force: boolean = false): void {
		let isNewProg = this.conditionalBindProgram(prog)
		if (!light.active) return
		let index = this.getLightIndex(prog, light)
		let attrs: Array<Light.Attribute> = light.enumerateAttributes()
		for (let attr of attrs) {
			if (isNewProg || force || attr.isDirty) {
				let un = uniforms.Map.getUniform(attr.name)
				let mappedName = uniforms.requireUniformName(light.getName())
				let unf = `${mappedName}[${index}].${un}`
				if (prog.hasUniform(unf)) {
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

	private clearLightIds(): void {
		this.lightIds = {}
	}

	private clearTextureIds(): void {
		this.textureIds = {}
	}

	private getLightIndex(prog: Shader.ShaderProgram, light: Light.Light): number {
		let ids = this.lightIds[prog.uuid]
		let lightName = light.getName()
		if (ids === undefined) {
			this.lightIds[prog.uuid] = {}
			this.lightIds[prog.uuid][lightName] = [light.uuid]
			return 0
		}
		let idsThisLightKind = this.lightIds[prog.uuid][lightName]
		if (idsThisLightKind === undefined) {
			this.lightIds[prog.uuid][lightName] = [light.uuid]
			return 0
		}
		for (let i = 0; i < idsThisLightKind.length; i++) {
			if (idsThisLightKind[i] === light.uuid)
				return i
		}
		idsThisLightKind.push(light.uuid)
		return idsThisLightKind.length - 1
	}

	private getTextureIndex(prog: Shader.ShaderProgram, tex: texture.Texture): number {
		let ids = this.textureIds[prog.uuid]
		if (ids === undefined) {
			this.textureIds[prog.uuid] = [tex.uuid]
			return 0
		}
		for (let i = 0; i < ids.length; i++) {
			if (ids[i] === tex.uuid)
				return i
		}
		ids.push(tex.uuid)
		return ids.length - 1
	}

	public requireProgram(model: Model) {
		if (model.program === null) {
			model.program = fromModel(model)
		}		
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

	public conditionalBindFBO(fbo: FBO, force: boolean = false): boolean {
		let isNullLastFBO = this.lastFBO === null
		let isNewFBO = force || isNullLastFBO || !FBO.equals(fbo, this.lastFBO)
		if (isNewFBO) {
			if (!isNullLastFBO && this.lastFBO.isBound()) this.lastFBO.unbind()
			if (fbo !== null && !fbo.isBound()) fbo.bind()
		}
		this.lastFBO = fbo
		return isNewFBO
	}

	private conditionalSetUniform(prog: Shader.ShaderProgram, name: uniforms.UniformNames, value: Shader.UniformSettable): void {
		let name_ = uniforms.requireUniformString(name)
		if (prog.hasUniform(name_)) {
			prog.setUniform(name_, value)
		}
	}

}
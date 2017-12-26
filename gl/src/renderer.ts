import { mat4, vec3 } from 'gl-matrix'
import { Scene } from './scene'
import { Camera } from './camera'
import { ShaderProgram } from './shader'
import { Model } from './model'

class Renderer {

	private gl: WebGLRenderingContext
	private projection: mat4
	private clearColor: vec3
	private fov: number = 45.0
	private near: number = 0.1
	private far: number = 100.0
	private aspect: number = 1.0
	private lastModel: Model = null

	constructor(gl: WebGLRenderingContext) {
		this.gl = gl
		this.projection = this.getProjectionMatrix()
		this.clearColor = vec3.fromValues(0.2, 0.2, 0.2)
		this.setup()
	}

	private setup(): void {
		const gl = this.gl
		gl.enable(gl.DEPTH_TEST)
	}

	private prepare(): void {
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

	private configureNewShader(prog: ShaderProgram, camera: Camera): void {
		prog.setMat4f('projection', this.getProjectionMatrix())
	}

	private configureModel(prog: ShaderProgram, model: Model): void {
		prog.setMat4f('model', model.getTransformationMatrix())
		prog.setVec3f('albedo', model.getColor())
	}

	private configureCamera(prog: ShaderProgram, camera: Camera): void {
		prog.setVec3f('cam_position', camera.position)
		prog.setMat4f('view', camera.getViewMatrix())
	}

	public render(scene: Scene, camera: Camera): void {
		this.prepare()

		if (!scene.modelsSorted) {
			scene.sortModels()
		}

		let isFirstShader: boolean = true

		for (let model of scene.models) {
			if (model === null) {
				console.warn('Attempted to draw a null model')
				continue
			}

			let lastModel = this.lastModel
			let isNewMesh: boolean
			let isNewShader: boolean
			let isNullLast: boolean = lastModel === null

			if (isNullLast) {
				isNewShader = true
				isNewMesh = true
			} else {
				isNewMesh = !Model.equals(lastModel.mesh, model.mesh)
				isNewShader = !ShaderProgram.equals(lastModel.program, model.program)
			}

			if (isNewShader) {
				if (!isNullLast) {
					lastModel.program.unbind()
				}
				model.program.bind()
				this.configureNewShader(model.program, camera)
				isFirstShader = true
			}

			if (isFirstShader) {
				this.configureCamera(model.program, camera)
				isFirstShader = false
			}

			if (isNewMesh) {
				if (!isNullLast) {
					lastModel.unbind()
				}
				model.bind()
			}

			this.configureModel(model.program, model)
			model.mesh.draw()
			this.lastModel = model
			isFirstShader = false
		}
	}
}

export { Renderer }
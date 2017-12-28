import { mat4, vec3 } from 'gl-matrix'
import { Scene } from '../scene'
import { Camera } from '../camera'
import { ShaderProgram } from '../shader'
import { Model } from '../model'
import base from './base-renderer'

export default class extends base {

	private lastModel: Model = null

	constructor(gl: WebGLRenderingContext) {
		super(gl)
	}

	private configureNewShader(prog: ShaderProgram, camera: Camera): void {
		prog.setMat4f('projection', this.getProjectionMatrix())
	}

	private configureModel(prog: ShaderProgram, model: Model): void {
		prog.setMat4f('model', model.getTransformationMatrix())
		// prog.setVec3f('albedo', model.getColor())
	}

	private configureCamera(prog: ShaderProgram, camera: Camera): void {
		prog.setVec3f('cam_position', camera.position)
		prog.setMat4f('view', camera.getViewMatrix())
	}

	public render(scene: Scene, camera: Camera): void {
		this.clear()

		if (!scene.modelsSorted) {
			scene.sortModels(Model.compareMeshUUID)
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

// export { Renderer }
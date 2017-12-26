import { Model } from './model'
import { Mesh } from './mesh'

class Scene {

	private gl: WebGLRenderingContext

	public models: Array<Model> = []
	public modelsSorted: boolean = false

	constructor(gl: WebGLRenderingContext) {
		this.gl = gl
	}

	public addModel(model: Model): void {
		this.models.push(model)
		this.modelsSorted = false
	}

	public sortModels(comparator: (a: Model, b: Model) => number = Model.compareMeshUUID) {
		this.models.sort(comparator)
		this.modelsSorted = true
	}
}

export { Scene }
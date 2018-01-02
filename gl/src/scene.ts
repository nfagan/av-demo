import { Model } from './model'
import { Mesh } from './mesh'
import * as Light from './light'

class Scene {

	private gl: WebGLRenderingContext

	public models: Array<Model> = []
	public lights: Array<Light.Light> = []
	public modelsSorted: boolean = false
	public background: Model

	constructor(gl: WebGLRenderingContext) {
		this.gl = gl
		this.background = null
	}

	public sortModels(comparator: (a: Model, b: Model) => number) {
		this.models.sort(comparator)
		this.modelsSorted = true
	}

	public add(element: Model | Light.Light): void {
		if (element instanceof Model) {
			this.addModel(element)
		} else if (element instanceof Light.Light) {
			this.addLight(element)
		}
	}

	private addLight(light: Light.Light): void {
		this.lights.push(light)
	}

	private addModel(model: Model): void {
		this.models.push(model)
		this.modelsSorted = false
	}
}

export { Scene }
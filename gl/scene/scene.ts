import { Model } from '../model/model'
import { Mesh } from '../mesh/mesh'
import * as Light from '../light/light'

export type SceneAddable = Model | Light.Light

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

	public add(element: SceneAddable | Array<SceneAddable>): void {
		if (Array.isArray(element)) {
			if (element.length === 0)
				return
			const self = this
			element.map(el => self.addOne(el))
		} else {
			this.addOne(element)
		}
	}

	private addOne(element: SceneAddable): void {
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
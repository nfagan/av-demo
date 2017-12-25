import { Resource } from './resource'
import { Mesh } from './mesh'

class Model extends Resource {

	gl: WebGLRenderingContext
	mesh: Mesh

	constructor(gl: WebGLRenderingContext, mesh: Mesh) {
		super()
		this.gl = gl
		this.mesh = mesh
	}

}

export { Model }
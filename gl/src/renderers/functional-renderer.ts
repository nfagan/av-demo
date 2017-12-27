import base from './base-renderer'
import { ShaderProgram } from '../shader'
import { Light, LightTypes } from '../light'
import { Mesh } from '../mesh'
import { UniformMap } from '../uniforms'
import { Camera } from '../camera'
import { mat4 } from 'gl-matrix'

export default class extends base {

	lastMesh: Mesh = null
	lastProgram: ShaderProgram = null

	constructor(gl: WebGLRenderingContext) {
		super(gl)
	}

	public draw(prog: ShaderProgram, mesh: Mesh) {
		if (this.conditionalBindProgram(prog)) {
			this.configure(prog)
		}
		this.conditionalBindMesh(prog, mesh)
		mesh.draw()
	}

	public configureTransform(prog: ShaderProgram, transformMatrix: mat4) {
		this.conditionalBindProgram(prog)
		let modelUniform: string = UniformMap.core.model
		prog.setMat4f(modelUniform, transformMatrix)
	}

	public configure(prog: ShaderProgram): void {
		this.conditionalBindProgram(prog)
		let projUniform: string = UniformMap.core.projection
		prog.setMat4f(projUniform, this.projection)
	}

	public configureCamera(prog: ShaderProgram, camera: Camera): void {
		this.conditionalBindProgram(prog)
		let viewUniform: string = UniformMap.core.view
		let posUniform: string = UniformMap.camera.position
		prog.setMat4f(viewUniform, camera.getViewMatrix())
		prog.setVec3f(posUniform, camera.position)
	}

	public configureLight(prog: ShaderProgram, light: Light): void {

		if (light.kind !== LightTypes.point)
			throw new Error(`Non-point lights not yet implemented.`)

		this.conditionalBindProgram(prog)

		switch (light.kind) {
			case LightTypes.point:
				prog.setb(UniformMap.light.point.properties['active'], light.active)
				if (!light.active) return
				const index = light.index
				const name: string = UniformMap.light.point.name
				const props = light.enumerate()
				const propNames: Array<string> = Object.keys(props)
				for (let prop of propNames) {
					let value = props[prop]
					let propName = UniformMap.light.point.properties[prop]
					let fullName: string = `${name}[${index}].${propName}`
					prog.setVec3f(fullName, value)
				}
				break
		}
	}

	private conditionalBindMesh(prog: ShaderProgram, mesh: Mesh): boolean {
		let isNullLastMesh: boolean = this.lastMesh == null
		let isNewMesh: boolean = isNullLastMesh || !Mesh.equals(mesh, this.lastMesh)
		if (isNewMesh) {
			if (!isNullLastMesh && this.lastMesh.isBound()) {
				this.lastMesh.unbind()
			}
			if (!mesh.isBound()) {
				mesh.bind(prog)
			}
		}
		this.lastMesh = mesh
		return isNewMesh
	}

	private conditionalBindProgram(prog: ShaderProgram): boolean {
		let isNullLastProgram: boolean = this.lastProgram == null
		let isNewProgram: boolean = isNullLastProgram || !ShaderProgram.equals(prog, this.lastProgram)
		if (isNewProgram) {
			if (!isNullLastProgram && this.lastProgram.isBound()) {
				this.lastProgram.unbind()
			}
			if (!prog.isBound()) {
				prog.bind()
			}
		}
		this.lastProgram = prog
		return isNewProgram
	}

}
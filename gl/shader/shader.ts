import { mat4, vec3 } from 'gl-matrix'
import { Resource } from '../common/resource'
import { vector, types } from '../util/util'
import { UniformNames, UniformNameOrString, ShaderCoreUniformKinds, requireUniformString } from './uniforms'
import { ShaderAttributeKinds } from './attributes'
import * as texture from '../texture/texture'

export type UniformSettable = number | boolean | mat4 | vec3 | Array<number> | texture.Texture | types.Integer

enum ShaderTypes {
	VERTEX,
	FRAGMENT
}

type ShaderSource = {
	source: string,
	type: ShaderTypes,
	uniforms: UniformNames[]
}

type ShaderProgramSource = {
	sources: Array<ShaderSource>
}

class Shader extends Resource {

	private gl: WebGLRenderingContext
	private source: string
	private type: number
	private shader?: WebGLShader

	public isValid: boolean

	constructor(gl: WebGLRenderingContext, src: ShaderSource) {
		super()
		this.gl = gl
		this.source = src.source
		this.type = Shader.getShaderType(gl, src.type)
		this.isValid = true
		this.setup()
	}

	public getGLShader(): WebGLShader {
		return this.shader
	}

	public dispose(): void {
		this.gl.deleteShader(this.shader)
		this.shader = null
		this.isValid = false
	}

	private setup(): void {
		const gl = this.gl
		this.shader = gl.createShader(this.type)
		gl.shaderSource(this.shader, this.source)
		gl.compileShader(this.shader)
		if (!gl.getShaderParameter(this.shader, gl.COMPILE_STATUS)) {
			let message: string = 'Shader compilation error: ' + 
				gl.getShaderInfoLog(this.shader)
			console.error(message)
			this.dispose()
		}
	}

	private static getShaderType(gl: WebGLRenderingContext, type: ShaderTypes): number {
		if (type === ShaderTypes.FRAGMENT)
			return gl.FRAGMENT_SHADER
		if (type === ShaderTypes.VERTEX)
			return gl.VERTEX_SHADER
		throw new Error('Unrecognized shader type.')
	}
}

//
//	program
//

class ShaderProgram extends Resource {

	private gl: WebGLRenderingContext
	private shaders: Array<Shader>
	private program?: WebGLProgram
	private _isBound: boolean = false
	private uniformLocations: { [key: string]: WebGLUniformLocation }
	private attributeLocations: { [key: string]: number }

	public isValid: boolean = true
	public isFinalized: boolean = false

	constructor(gl: WebGLRenderingContext) {
		super()
		this.gl = gl
		this.uniformLocations = {}
		this.attributeLocations = {}
	}

	public attach(shaders: Array<Shader>) {
		this.assertNotFinalized('attach')
		for (let shader of shaders) {
			if (!shader.isValid)
				throw new Error('Attempted to attach an invalid shader.')
		}
		this.shaders = shaders
		this.finalize()
	}

	public bind(): void {
		this.assertFinalized('bind')
		this.gl.useProgram(this.program)
		this._isBound = true
	}

	public unbind(): void {
		this.assertFinalized('unbind')
		this.gl.useProgram(null)
		this._isBound = false
	}

	public dispose(): void {
		this.gl.deleteProgram(this.program)
		this.program = null
		this.isValid = false
		this.isFinalized = false

		this.shaders.map(shader => shader.dispose)
	}

	public hasUniform(name: string): boolean {
		return this.getUniformLocation(name, true) !== null
	}

	public isBound(): boolean {
		return this._isBound
	}

	public setUniform(name: string, value: UniformSettable) {
		if (types.isNumber(value)) {
			this.setf(name, value)

		} else if (types.isInteger(value)) {
			this.seti(name, value.get())

		} else if (types.isBoolean(value)) {
			this.setb(name, value)

		} else if (Array.isArray(value)) {
			this.setVec3f(name, value)

		} else if (types.isTexture(value)) {
			this.seti(name, value.index)

		} else if (types.isMat4(value)) {
			this.setMat4f(name, value)

		} else if (types.isVec3(value)) {
			this.setVec3f(name, value)
		}
	}

	private setf(name: string, value: number): void {
		this.gl.uniform1f(this.getUniformLocation(name), value)
	}

	private setb(name: string, value: boolean): void {
		this.gl.uniform1i(this.getUniformLocation(name), value ? 1 : 0)
	}

	private seti(name: string, value: number): void {
		this.gl.uniform1i(this.getUniformLocation(name), value)
	}

	private setMat4f(name: string, value: mat4) {
		this.gl.uniformMatrix4fv(this.getUniformLocation(name), false, value)
	}

	private setVec3f(name: string, value: vec3 | Array<number> | number) {
		value = vector.requireVec3(value)
		this.gl.uniform3fv(this.getUniformLocation(name), value)
	}

	private finalize(): void {
		this.assertNotFinalized('finalize')
		const gl = this.gl
		const shaders = this.shaders
		let program: WebGLProgram = gl.createProgram()
		for (let i: number = 0; i < shaders.length; i++) {
			gl.attachShader(program, shaders[i].getGLShader())
		}
		gl.linkProgram(program)
		if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
			let message: string = 'Shader program initialization error: ' + 
				gl.getProgramInfoLog(program)
    		console.error(message)
    		program = null
    		this.isValid = false
  		}
  		this.program = program
  		this.isFinalized = true
	}

	public getAttributeLocation(name: string): number {
		let loc = this.attributeLocations[name]
		if (loc !== undefined)
			return loc
		loc = this.gl.getAttribLocation(this.program, name)
		this.attributeLocations[name] = loc
		return loc
	}

	public getProgram(): WebGLProgram {
		return this.program
	}

	private getUniformLocation(name: string, silent: boolean = false): WebGLUniformLocation {
		this.assertFinalized('uniform')
		let loc: WebGLUniformLocation = this.uniformLocations[name]
		if (loc === undefined) {
			loc = this.gl.getUniformLocation(this.program, name)
			this.uniformLocations[name] = loc
		}
		if (loc === null && !silent) {
			console.warn(`"${name}" is not a recognized uniform name.`)
		}
		return loc
	}

	private assertNotFinalized(op: string): void {
		if (this.isFinalized)
			throw new Error(`Cannot call method / op "${op}" after finalizing the program.`)
	}

	private assertFinalized(op: string): void {
		if (!this.isFinalized)
			throw new Error(`Cannot call method / op "${op}" before finalizing the program.`)
	}
}

export { 
	Shader, 
	ShaderProgram, 
	ShaderSource, 
	ShaderProgramSource, 
	ShaderTypes,
	ShaderAttributeKinds,
	ShaderCoreUniformKinds
}
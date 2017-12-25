import { mat4, vec3 } from 'gl-matrix'
import { Resource } from './resource'

enum ShaderTypes {
	VERTEX,
	FRAGMENT
}

type ShaderSource = {
	source: string,
	type: ShaderTypes,
	uniforms: Array<string>
}

class Shader extends Resource {

	private gl: WebGLRenderingContext
	private source: string
	private type: number
	private shader?: WebGLShader

	public isValid: boolean

	constructor(gl: WebGLRenderingContext, src: string, type: number) {
		super()
		this.gl = gl
		this.source = src
		this.type = type
		this.isValid = true
		this.setup()
	}

	public getGLShader(): WebGLShader {
		return this.shader
	}

	private setup(): void {
		const gl = this.gl
		let shader: WebGLShader = gl.createShader(this.type)
		gl.shaderSource(shader, this.source)
		gl.compileShader(shader)
		if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
			let message: string = 'Shader compilation error: ' + 
				gl.getShaderInfoLog(shader)
			console.error(message)
			gl.deleteShader(shader)
			shader = null
			this.isValid = false
	  	}
	  	this.shader = shader
	}
}

//
//	program
//

class ShaderProgram extends Resource {

	private gl: WebGLRenderingContext
	private shaders: Array<Shader>
	private program?: WebGLProgram
	public isValid: boolean = true
	public isFinalized: boolean = false

	constructor(gl: WebGLRenderingContext) {
		super()
		this.gl = gl
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
	}

	public unbind(): void {
		this.assertFinalized('unbind')
		this.gl.useProgram(null)
	}

	//	set uniforms

	public setf(name: string, value: number): void {
		this.gl.uniform1f(this.getUniformLocation(name), value)
	}

	public setMat4f(name: string, value: mat4) {
		this.gl.uniformMatrix4fv(this.getUniformLocation(name), false, value)
	}

	public setVec3f(name: string, value: vec3) {
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

	private getUniformLocation(name: string): WebGLUniformLocation {
		this.assertFinalized('uniform')
		return this.gl.getUniformLocation(this.program, name)
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

export { Shader, ShaderProgram, ShaderSource, ShaderTypes }
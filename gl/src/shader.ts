import { mat4, vec3 } from 'gl-matrix'
import { Resource } from './resource'

enum ShaderTypes {
	VERTEX,
	FRAGMENT
}

type ShaderSource = {
	source: string,
	type: ShaderTypes
}

type ShaderProgramSource = {
	sources: Array<ShaderSource>
	uniforms: Array<string>
}

type ShaderAttribute = {
	name: string,
	location: number
}

enum ShaderAttributeKinds {
	position = 'position',
	uv = 'uv',
	normal = 'normal'
}

class ShaderAttributes {
	position: ShaderAttribute
	uv: ShaderAttribute
	normal: ShaderAttribute

	constructor() {
		this.position = {
			name: 'in_position',
			location: null
		}
		this.uv = {
			name: 'in_uv',
			location: null
		}
		this.normal = {
			name: 'in_normal',
			location: null
		}
	}
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

	private static getShaderType(gl: WebGLRenderingContext, type: ShaderTypes): number {
		if (type == ShaderTypes.FRAGMENT)
			return gl.FRAGMENT_SHADER
		if (type == ShaderTypes.VERTEX)
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
	private attributes: ShaderAttributes

	public isValid: boolean = true
	public isFinalized: boolean = false

	constructor(gl: WebGLRenderingContext) {
		super()
		this.attributes = new ShaderAttributes()
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
		this.getAttributeLocations()
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

	public getAttributeLocation(kind: ShaderAttributeKinds): number {
		return this.attributes[kind].location
	}

	private getAttributeLocations(): void {
		let attributes = this.attributes
		const gl = this.gl
		const program = this.program
		let attribNames: Array<string> = Object.keys(attributes)
		for (let attrib of attribNames) {
			attributes[attrib].location = gl.getAttribLocation(program, attributes[attrib].name)
		}
	}

	public getProgram(): WebGLProgram {
		return this.program
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

export { 
	Shader, 
	ShaderProgram, 
	ShaderSource, 
	ShaderProgramSource, 
	ShaderTypes,
	ShaderAttributeKinds
}
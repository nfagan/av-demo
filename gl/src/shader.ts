import { mat4, vec3 } from 'gl-matrix'
import { Resource } from './resource'
import { vector, types } from './util'
import { UniformNames, UniformMap } from './uniforms'
import * as texture from './texture'

type LocationMappable = {
	[key: string]: WebGLUniformLocation
}

export type UniformSettable = number | boolean | mat4 | vec3 | Array<number> | texture.Texture

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

type ShaderAttribute = {
	name: string,
	location: number
}

type ShaderAttributeKinds = 'position' | 'uv' | 'normal'
type ShaderCoreUniformKinds = 'model' | 'view' | 'projection' | 'camera_position'

class ShaderAttributes {

	[key: string]: ShaderAttribute

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
	private uniforms: UniformMap<boolean>

	public isValid: boolean

	constructor(gl: WebGLRenderingContext, src: ShaderSource) {
		super()
		this.gl = gl
		this.source = src.source
		this.type = Shader.getShaderType(gl, src.type)
		this.isValid = true
		this.uniforms = new UniformMap(src.uniforms, true)
		this.setup()
	}

	public getGLShader(): WebGLShader {
		return this.shader
	}

	public hasUniform(name: UniformNames): boolean {
		return this.uniforms.hasUniform(name)
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
	private _isBound: boolean = false
	private uniformLocations: LocationMappable = {}

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
		this._isBound = true
	}

	public unbind(): void {
		this.assertFinalized('unbind')
		this.gl.useProgram(null)
		this._isBound = false
	}

	public hasUniform(name: UniformNames) {
		for (let shader of this.shaders) {
			if (shader.hasUniform(name))
				return true
		}
		return false
	}

	public isBound(): boolean {
		return this._isBound
	}

	public setUniform(name: string, value: UniformSettable) {
		if (typeof(value) == 'number') {
			this.setf(name, value)

		} else if (typeof(value) == 'boolean') {
			this.setb(name, value)

		} else if (Array.isArray(value)) {
			this.setVec3f(name, value)

		} else if (value instanceof texture.Texture) {
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

	public getAttributeLocation(kind: ShaderAttributeKinds): number {
		return this.attributes[kind].location
	}

	private getAttributeLocations(): void {
		let attributes = this.attributes
		const gl = this.gl
		const program = this.program
		//
		//	@TODO: Avoid string indexing into attributes
		//
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
		let loc: WebGLUniformLocation = this.uniformLocations[name]
		if (loc === undefined) {
			loc = this.gl.getUniformLocation(this.program, name)
			if (loc == null) {
				console.warn(`Unrecognized uniform name "${name}".`)
			} else {
				this.uniformLocations[name] = loc
			}
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
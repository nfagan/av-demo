import { Shader, ShaderProgram, ShaderSource, ShaderTypes } from './shader'

class ShaderFactory {
	public static Create(gl: WebGLRenderingContext, sources: Array<ShaderSource>): ShaderProgram {
		let shaders: Array<Shader> = sources.map((source: ShaderSource) => {
			return new Shader(gl, source.source, ShaderFactory.getShaderType(gl, source.type))
		})
		let program: ShaderProgram = new ShaderProgram(gl)
		try {
			program.attach(shaders)
		} catch (err) {
			console.error(err.message)
			return null
		}
		return program
	}

	private static getShaderType(gl: WebGLRenderingContext, type: ShaderTypes): number {
		if (type == ShaderTypes.FRAGMENT)
			return gl.FRAGMENT_SHADER
		if (type == ShaderTypes.VERTEX)
			return gl.VERTEX_SHADER
		throw new Error('Unrecognized shader type.')
	}
}

export { ShaderFactory }
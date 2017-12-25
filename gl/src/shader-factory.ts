import { Shader, ShaderProgram, ShaderSource, ShaderProgramSource, ShaderTypes } from './shader'

class ShaderFactory {
	public static Create(gl: WebGLRenderingContext, programSource: ShaderProgramSource): ShaderProgram {
		let shaders: Array<Shader> = programSource.sources.map((source: ShaderSource) => {
			return new Shader(gl, source)
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
}

export { ShaderFactory }
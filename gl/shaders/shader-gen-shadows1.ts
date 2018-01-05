import { ShaderSource, ShaderProgramSource, ShaderTypes } from '../shader/shader'

namespace _sources {
	export const vertex: string = `
		attribute vec3 in_position;

		uniform mat4 model;
		uniform mat4 view;
		uniform mat4 projection;

		void main() {
			gl_Position = projection * view * model * vec4(in_position, 1.0);
		}
	`

	export const fragment: string = `
		void main() {
		    gl_FragColor = vec4(1.0);
		}
	`
}

const GenShadows1: ShaderProgramSource = {
	sources: [
		{
			source: _sources.vertex,
			type: ShaderTypes.VERTEX,
			uniforms: ['model', 'view', 'projection']
		},
		{
			source: _sources.fragment,
			type: ShaderTypes.FRAGMENT,
			uniforms: []
		}
	]
}

export { GenShadows1 }
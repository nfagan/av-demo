import { ShaderSource, ShaderProgramSource, ShaderTypes } from '../shader'

namespace _sources {
	export const vertex: string = `
		attribute vec3 in_position;
		attribute vec2 in_uv;
		attribute vec3 in_normal;

		uniform mat4 model;
		uniform mat4 projection;
		uniform mat4 view;

		void main() {
			gl_Position = projection * view * model * vec4(in_position, 1.0);
		}
	`
	export const fragment: string = `
		precision mediump float;

		uniform vec3 albedo;

		void main() {
      		gl_FragColor = vec4(albedo, 1.0);
    	}
	`
}

const Basic: ShaderProgramSource = {
	sources: [
		{
			source: _sources.vertex,
			type: ShaderTypes.VERTEX
		},
		{
			source: _sources.fragment,
			type: ShaderTypes.FRAGMENT,
		}
	],
	uniforms: ['model', 'projection', 'view', 'color']
}

export { Basic }
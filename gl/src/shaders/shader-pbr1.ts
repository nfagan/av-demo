import { ShaderSource, ShaderTypes } from '../shader'

namespace _sources {
	export const vertex: string = `
		attribute vec3 in_position;
		attribute vec2 in_uv;

		uniform mat4 model;
		uniform mat4 projection;
		uniform mat4 view;

		void main() {
			gl_Position = projection * view * model * vec4(in_position, 1.0);
		}
	`
	export const fragment: string = `
		precision mediump float;

		uniform vec3 color;

		void main() {
      		gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
    	}
	`
}

class PBR1 {
	public static readonly sources: Array<ShaderSource> = [
		{
			source: _sources.vertex,
			type: ShaderTypes.VERTEX,
			uniforms: ['model', 'projection', 'view']
		},
		{
			source: _sources.fragment,
			type: ShaderTypes.FRAGMENT,
			uniforms: ['color']
		}
	]
}

export { PBR1 }
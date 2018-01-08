import { ShaderSource, ShaderProgramSource, ShaderTypes } from '../shader/shader'

namespace _sources {
	export const vertex: string = `
		attribute vec3 in_position;
		attribute vec3 in_normal;
		attribute vec2 in_uv;

		varying vec2 v_uv;

		uniform mat4 model;
		uniform mat4 projection;
		uniform mat4 view;

		void main() {
			v_uv = in_uv;
			gl_Position = projection * view * model * vec4(in_position, 1.0);
		}
	`
	export const fragment: string = `
		precision mediump float;

		varying vec2 v_uv;

		uniform sampler2D albedo;

		void main() {
			vec3 albedo_ = texture2D(albedo, v_uv).rgb;
      		gl_FragColor = vec4(albedo_, 1.0);
    	}
	`
}

const BasicTex: ShaderProgramSource = {
	sources: [
		{
			source: _sources.vertex,
			type: ShaderTypes.VERTEX,
			uniforms: ['model', 'view', 'projection']
		},
		{
			source: _sources.fragment,
			type: ShaderTypes.FRAGMENT,
			uniforms: ['albedo']
		}
	]
}

export { BasicTex }
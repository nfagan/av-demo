import { ShaderSource, ShaderProgramSource, ShaderTypes } from '../shader/shader'

namespace _sources {
	export const vertex: string = `
		attribute vec3 in_position;
		attribute vec3 in_normal;
		attribute vec2 in_uv;

		uniform mat4 projection;
		uniform mat4 view;
		uniform mat4 model;

		varying mediump vec2 v_uv;
		varying mediump vec3 v_normal;

		void main() {
			mat4 viewT = mat4(mat3(view));
			vec4 pos = projection * viewT * vec4(in_position, 1.0);
			v_uv = in_uv;
			v_normal = in_normal;
			gl_Position = pos.xyww;
		}
	`
	export const fragment: string = `

		precision mediump float;

		varying mediump vec2 v_uv;
		varying mediump vec3 v_normal;

		uniform sampler2D albedo;

		void main() {
      		gl_FragColor = texture2D(albedo, v_uv);
    	}
	`
}

const Skybox: ShaderProgramSource = {
	sources: [
		{
			source: _sources.vertex,
			type: ShaderTypes.VERTEX,
			uniforms: ['view', 'projection']
		},
		{
			source: _sources.fragment,
			type: ShaderTypes.FRAGMENT,
			uniforms: ['albedo']
		}
	]
}

export { Skybox }
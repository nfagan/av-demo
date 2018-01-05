import { ShaderSource, ShaderProgramSource, ShaderTypes } from '../shader/shader'

// https://github.com/Erkaman/glsl-godrays 
// https://developer.nvidia.com/gpugems/GPUGems3/gpugems3_ch13.html

namespace _sources {
	export const vertex: string = `
		attribute vec3 in_position;
		attribute vec3 in_normal;
		attribute vec2 in_uv;

		varying mediump vec2 v_uv;

		void main() {
			v_uv = in_uv;
			gl_Position = vec4(in_position, 1.0);
		}
	`

	export const fragment: string = `

		precision highp float;

		vec3 godrays(
		    float density,
		    float weight,
		    float decay,
		    float exposure,
		    int numSamples,
		    sampler2D occlusionTexture,
		    vec2 screenSpaceLightPos,
		    vec2 uv
	    ) {

		    vec3 fragColor = vec3(0.0,0.0,0.0);

			vec2 deltaTexCoord = vec2( uv - screenSpaceLightPos.xy );

			vec2 texCoord = uv.xy;
			deltaTexCoord *= (1.0 / float(numSamples)) * density;
			float illuminationDecay = 1.0;

			for(int i=0; i < 100 ; i++){
			    if(numSamples < i) {
		            break;
			    }

				texCoord -= deltaTexCoord;
				vec3 samp = texture2D(occlusionTexture, texCoord).xyz;
				samp *= illuminationDecay * weight;
				fragColor += samp;
				illuminationDecay *= decay;
			}

			fragColor *= exposure;

		    return fragColor;
		}

		varying vec2 v_uv;
		varying vec3 v_normal;

		uniform vec3 uScreenSpaceSunPos;
		uniform sampler2D uOcclusionTexture;

		uniform float uDensity;
		uniform float uWeight;
		uniform float uDecay;
		uniform float uExposure;
		uniform int uNumSamples;

		void main() {

			vec2 screenSpaceSunPos = uScreenSpaceSunPos.xy;

			vec3 fragColor = godrays(
			    uDensity,
			    uWeight,
			    uDecay,
			    uExposure,
			    uNumSamples,
			    uOcclusionTexture,
			    screenSpaceSunPos,
			    v_uv
		    );

		    gl_FragColor = vec4(fragColor, 1.0);
		}
	`
}

const Volume: ShaderProgramSource = {
	sources: [
		{
			source: _sources.vertex,
			type: ShaderTypes.VERTEX,
			uniforms: []
		},
		{
			source: _sources.fragment,
			type: ShaderTypes.FRAGMENT,
			uniforms: []
		}
	]
}

export { Volume }
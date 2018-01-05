import { ShaderSource, ShaderProgramSource, ShaderTypes } from '../shader/shader'

namespace _sources {
	export const vertex: string = `
		attribute vec3 in_position;
		attribute vec3 in_normal;
		attribute vec2 in_uv;

		uniform mat4 model;
		uniform mat4 view;
		uniform mat4 projection;

		uniform mat4 light_space_transform;

		varying mediump vec3 v_position;
		varying mediump vec2 v_uv;
		varying mediump vec3 v_normal;

		varying mediump vec4 v_light_space_position;

		void main() {
			vec4 v4_position = vec4(in_position, 1.0);
			v_position = vec3(model * v4_position);
			v_uv = in_uv;
			v_normal = in_normal;
			v_light_space_position = light_space_transform * model * v4_position;
			gl_Position = projection * view * model * vec4(in_position, 1.0);
		}
	`
	export const fragment: string = `

		precision mediump float;

		const float PI = 3.14159265359;

		float distribution_ggx(vec3 N, vec3 H, float roughness);
		float geometry_schlick_ggx(float NdotV, float roughness);
		float geometry_smith(vec3 N, vec3 V, vec3 L, float roughness);
		vec3 fresnel_schlick(float cos_theta, vec3 F0);

		vec3 PBR(
		     vec3 normals,
		     vec3 albedo,
		     float roughness,
		     float metallic,
		     vec3 cam_position,
		     vec3 world_position,
		     vec3 light_position,
		     vec3 light_color,
		     bool is_directional) {
		    
		    vec3 F0 = vec3(0.04);
		    F0 = mix(F0, albedo, metallic);
		    
		    vec3 N = normalize(normals);
		    vec3 V = normalize(cam_position - world_position);
		    
		    vec3 L;

		    if (!is_directional) {
		    	L = normalize(light_position - world_position);
		    } else {
		    	L = normalize(-light_position);
		    }

		    vec3 H = normalize(V + L);

		    float attenuation = 1.0;
		    
		    if (!is_directional) {
		    	float distance = length(light_position - world_position);
		    	attenuation = 1.0 / (distance * distance * 0.0002);
		    }
		    
		    vec3 radiance = light_color * attenuation;
		    
		    vec3 F = fresnel_schlick(max(dot(H, V), 0.0), F0);
		    float NDF = distribution_ggx(N, H, roughness);
		    float G = geometry_smith(N, V, L, roughness);
		    vec3 numer = vec3(NDF) * vec3(G) * F;
		    float denom = 4.0 * max(dot(N, V), 0.0) * max(dot(N, L), 0.0) + 0.001;
		    vec3 specular = numer / denom;
		    
		    vec3 kS = F;
		    vec3 kD = vec3(1.0) - kS;
		    kD *= 1.0 - metallic;
		    
		    float NdotL = max(dot(N, L), 0.0);
		    return (kD * albedo / PI + specular) * radiance * NdotL;
		}

		//
		//  Fresnel component (F)
		//

		vec3 fresnel_schlick(float cosTheta, vec3 F0) {
		    return F0 + (1.0 - F0) * pow(1.0 - cosTheta, 5.0);
		}

		//
		//  Normal distribution component (D)
		//

		float distribution_beckman(vec3 h, vec3 n, float roughness) {
		    float a = roughness * roughness;
		    float a2 = a * a;
		    float n_dot_h = max(dot(n, h), 0.0);
		    float n_dot_h2 = n_dot_h * n_dot_h;
		    float part_a = 1.0 / (PI * a2 * pow(n_dot_h, 4.0));
		    float exp_component = (n_dot_h2 - 1.0) / (a2 * n_dot_h2);
		    return part_a * exp(exp_component);
		}

		float distribution_ggx(vec3 N, vec3 H, float roughness) {
		    float a = roughness * roughness;
		    float a2 = a * a;
		    float NdotH = max(dot(N, H), 0.0);
		    float NdotH2 = NdotH * NdotH;
		    
		    float denom = (NdotH2 * (a2-1.0) + 1.0);
		    denom = PI * denom * denom;
		    
		    return a2 / denom;
		}

		//
		//  Geometry distribution component (G)
		//

		float geometry_schlick_ggx(float NdotV, float roughness) {
		    float r = roughness + 1.0;
		    //  direct light
		    float k = (r*r) / 8.0;
		    //  IBL
		    //  float k = (roughness * roughness) / 2;
		    float denom = NdotV * (1.0 - k) + k;
		    return NdotV / denom;
		}

		float geometry_smith(vec3 N, vec3 V, vec3 L, float roughness) {
		    float NdotV = max(dot(N, V), 0.0);
		    float NdotL = max(dot(N, L), 0.0);
		    float ggx2 = geometry_schlick_ggx(NdotV, roughness);
		    float ggx1 = geometry_schlick_ggx(NdotL, roughness);
		    return ggx1 * ggx2;
		}

		//
		//	shadow stuff
		//

		float calculate_shadows(vec4 light_space_position, sampler2D depth_tex, float texture_size, float bias) {
			vec3 proj_coords = light_space_position.xyz / light_space_position.w;
			vec2 texel_size = vec2(1.0 / texture_size);
			proj_coords = proj_coords * 0.5 + 0.5;

			float shadow = 0.0;

			for (int x = -1; x <= 1; ++x) {
				for (int y = -1; y <= 1; ++y) {
					float nearest = texture2D(depth_tex, proj_coords.xy + (vec2(x, y) * texel_size)).r;
					float test = proj_coords.z;
					shadow += (test - bias > nearest ? 0.0 : 1.0);
				}
			}

			return shadow / 9.0;
		}

		vec2 gauss_filter[7];

		float calculate_shadows_gauss(vec4 light_space_position, sampler2D depth_tex, float texture_size, float bias) {
			vec3 proj_coords = light_space_position.xyz / light_space_position.w;
			proj_coords = proj_coords * 0.5 + 0.5;
			float shadow = 0.0;
			float scale = 0.005;
			for(int i = 0; i < 7; i++) {
				float test = proj_coords.z;
				float nearest = texture2D(depth_tex, (proj_coords.xy + gauss_filter[i].y * scale)).r;
				shadow += (test - bias > nearest ? 0.0 : 1.0);
			}
			return shadow / 7.0;
		}

		void setup_gauss_filter() {
			gauss_filter[0] = vec2(-3.0, 0.015625);
			gauss_filter[1] = vec2(-2.0, 0.09375);
			gauss_filter[2] = vec2(-1.0, 0.234375);
			gauss_filter[3] = vec2(0.0,	0.3125);
			gauss_filter[4] = vec2(1.0,	0.234375);
			gauss_filter[5] = vec2(2.0,	0.09375);
			gauss_filter[6] = vec2(3.0,	0.015625);
		}

		struct PointLight {
			vec3 position;
			vec3 color;
			vec3 mask;
			bool casts_shadow;
		};

		struct DirectionalLight {
			vec3 direction;
			vec3 color;
			vec3 mask;
		};

		const int n_point_lights = 1;
		const int n_directional_lights = 1;

		uniform PointLight point_lights[n_point_lights];
		uniform DirectionalLight directional_lights[n_directional_lights];

		uniform vec3 cam_position;

		//	shadow stuff
		uniform sampler2D shadow_depth_map;
		uniform float shadow_size;

		uniform vec3 albedo;
		uniform float roughness;
		uniform float metallic;

		varying mediump vec4 v_light_space_position;

		varying mediump vec3 v_position;
		varying mediump vec2 v_uv;
		varying mediump vec3 v_normal;

		void main() {

			//	shadow stuff

			setup_gauss_filter();

			float shadow1 = calculate_shadows(v_light_space_position, shadow_depth_map, shadow_size, 0.005);

			//	regular stuff

			vec3 final_color = albedo;

			vec3 Lo = vec3(0.0);

			//	point lights

			for (int i = 0; i < n_point_lights; i++) {
				bool is_directional = false;
				vec3 res = PBR(v_normal, albedo, roughness, metallic, 
					cam_position, v_position, point_lights[i].position, point_lights[i].color, is_directional);
				res *= point_lights[i].mask;
				res *= shadow1;
				Lo += res;
			}

			//	directional lights

			for (int i = 0; i < n_directional_lights; i++) {
				bool is_directional = true;
				vec3 res = PBR(v_normal, albedo, roughness, metallic, 
					cam_position, v_position, directional_lights[i].direction, directional_lights[i].color, is_directional);
				res *= directional_lights[i].mask;
				Lo += res;
			}

			vec3 ambient = vec3(0.03) * albedo;

		    final_color = ambient + Lo;
		    final_color = final_color / (final_color + vec3(1.0));
		    final_color = pow(final_color, vec3(1.0/2.2));

      		gl_FragColor = vec4(final_color, 1.0);
    	}
	`
}

const UseShadows1: ShaderProgramSource = {
	sources: [
		{
			source: _sources.vertex,
			type: ShaderTypes.VERTEX,
			uniforms: ['model', 'view', 'projection']
		},
		{
			source: _sources.fragment,
			type: ShaderTypes.FRAGMENT,
			uniforms: ['point', 'directional', 'direction', 'position', 'color', 'mask',
				 'albedo', 'roughness', 'metallic', 'camera_position']
		}
	]
}

export { UseShadows1 }
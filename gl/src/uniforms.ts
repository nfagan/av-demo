import { types } from './util'
import * as _Light from './light'
import * as _Material from './material'
import * as _Shader from './shader'

export namespace Maps {

	export class Material {
		static items: { [K in _Material.AttributeNames]: string } = {
			'albedo': 'albedo',
			'roughness': 'roughness',
			'metallic': 'metallic'
		}
		static getUniform(val: _Material.AttributeNames): string {
			return Material.items[val]
		}
	}

	export class Light {
		static items: { [K in _Light.LightUniformNames]: string } = {
			'position': 'position',
			'direction': 'direction',
			'color': 'color',
			'index': 'index',
			'mask': 'mask',
			'point': 'point_lights',
			'directional': 'directional_lights'
		}
		static getUniform(val: _Light.LightUniformNames): string {
			return Light.items[val]
		}
	}

	export class Core {
		static items: { [K in _Shader.ShaderCoreUniformKinds]: string } = {
			'model': 'model',
			'view': 'view',
			'projection': 'projection',
			'camera_position': 'cam_position'
		}
		static getUniform(val: _Shader.ShaderCoreUniformKinds): string {
			return Core.items[val]
		}
	}
}
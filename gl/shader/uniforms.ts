import { types } from '../util/util'
import * as _Light from '../light/light'
import * as _Material from '../material/material'
import * as _Shader from './shader'

export type UniformNames = _Material.AttributeNames | _Light.LightUniformNames | _Shader.ShaderCoreUniformKinds

export class UniformMap<T> {
	public items: { [key: string]: T }
	constructor(names: UniformNames[], value: T) {
		this.items = {}
		const items = this.items
		names.map(name => items[name] = value)
	}
	public hasUniform(name: UniformNames) {
		return this.items[name] !== undefined
	}
}

export class Map {
	static items: { [K in UniformNames]: string } = {
		// material
		'albedo': 'albedo',
		'roughness': 'roughness',
		'metallic': 'metallic',

		//	light
		'position': 'position',
		'direction': 'direction',
		'color': 'color',
		'mask': 'mask',
		'point': 'point_lights',
		'directional': 'directional_lights',

		//	core
		'model': 'model',
		'view': 'view',
		'projection': 'projection',
		'camera_position': 'cam_position'
	}

	static getUniform(name: UniformNames): string {
		return Map.items[name]
	}
}
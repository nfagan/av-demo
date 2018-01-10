import { types } from '../util/util'
import * as _Light from '../light/light'
import * as _Material from '../material/material'
import * as _Shader from './shader'
import { Stream } from 'stream';

export type ShaderCoreUniformKinds = 'model' | 'view' | 'projection' | 'camera_position'

export type UniformNames = _Material.AttributeNames | _Light.LightUniformNames | ShaderCoreUniformKinds

export type UniformNameOrString = UniformNames | string

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

	static isUniform(name: string): name is UniformNames {
		return Map.getUniform(name as UniformNames) !== undefined
	}
}

export function requireUniformString(value: UniformNameOrString): string {
	let item = Map.items[value as UniformNames]
	if (item !== undefined)
		return item
	return value
}

export function requireUniformName(name: UniformNames): string {
	return Map.getUniform(name)
}
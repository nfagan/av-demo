import { LightTypes } from './light'

type StringMappable = {
	[key: string]: string
}

type LightUniformT = {
	[key: string]: StringMappable | string,
	name: string,
	properties: StringMappable
}

type LightUniformsT = {
	[key: string]: LightUniformT,
	'point': LightUniformT
}

const LightUniforms: LightUniformsT = {
	'point': {
		'name': 'point_lights',
		'properties': {
			'color': 'color',
			'position': 'position',
			'active': 'calculate_lighting'
		}
	}
}

type UniformMapT = {
	'core': StringMappable,
	'material': StringMappable,
	'light': LightUniformsT,
	'camera': StringMappable
}

const UniformMap: UniformMapT = {
	'core': {
		'model': 'model',
		'view': 'view',
		'projection': 'projection'
	},
	'material': {
		'albedo': 'albedo',
		'roughness': 'roughness',
		'metallic': 'metallic'
	},
	'camera': {
		'position': 'cam_position'
	},
	'light': LightUniforms
}

export { UniformMap }
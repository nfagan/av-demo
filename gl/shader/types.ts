import { types } from '../util/util'
import { LightNames } from '../light/light'

export type LightingModels = 'physical'

export class LightingModelsMap {
	static readonly items: { [K in LightingModels]: string } = {
		'physical': 'physical'
	}

	static getLightingModel(name: LightingModels): string {
		return LightingModelsMap.items[name]
	}
}

export class LightTypesMap {
	static readonly items: { [K in LightNames]: string } = {
		'point': 'PointLight',
		'directional': 'DirectionalLight'
	}

	static getLightType(name: LightNames): string {
		return LightTypesMap.items[name]
	}
}

export class GLSLTypeMap {
	static readonly items: { [K in types.glsl]: string } = {
		'int': 'int',
		'float': 'float',
		'vec2': 'vec2',
		'vec3': 'vec3',
		'vec4': 'vec4',
		'mat3': 'mat3',
		'mat4': 'mat4',
		'sampler2D': 'sampler2D',
		'point': 'PointLight',
		'directional': 'DirectionalLight'
	}

	static getType(name: types.glsl): string {
		return GLSLTypeMap.items[name]
	}
}

export class GLSLPrecisionMap {
	static readonly items: { [K in types.glslPrecision]: string } = {
		'mediump': 'mediump',
		'highp': 'highp'
	}

	static getPrecision(name: types.glslPrecision): string {
		return GLSLPrecisionMap.items[name]
	}
}
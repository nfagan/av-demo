import { ShaderAttributeKinds } from './attributes'

export class ShaderVaryingMap {
	static items: { [K in ShaderAttributeKinds]: string } = {
		'position': 'v_position',
		'uv': 'v_uv',
		'normal': 'v_normal'
	}

	static getVarying(name: ShaderAttributeKinds): string {
		return ShaderVaryingMap.items[name]
	}
}
import * as primitives from '../primitives'
import { ShaderAttributeDataType3D } from '../../shader/attributes'

export namespace main {
	export const assignPosition: primitives.makeFuncT = () => {
		const model = primitives.getUniformName('model')
		const view = primitives.getUniformName('view')
		const proj = primitives.getUniformName('projection')
		const pos = primitives.getAttributeName('position')

		return `gl_Position = ${proj} * ${view} * ${model} * vec4(${pos}, 1.0);`
	}

	export const passUV: primitives.makeFuncT = () => {
		return primitives.makePassedAttribute(ShaderAttributeDataType3D, 'uv')
	}

	export const passPosition: primitives.makeFuncT = () => {
		return primitives.makePassedAttribute(ShaderAttributeDataType3D, 'position')	
	}

	export const passWorldPosition: primitives.makeFuncT = () => {
		let vPos = primitives.getVaryingName('position')
		let aPos = primitives.getAttributeName('position')
		let model = primitives.getUniformName('model')
		return `${vPos} = vec3(${model} * vec4(${aPos}, 1.0));`
	}

	export const passNormal: primitives.makeFuncT = () => {
		return primitives.makePassedAttribute(ShaderAttributeDataType3D, 'normal')
	}
}
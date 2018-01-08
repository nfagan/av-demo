import * as primitives from '../primitives'
import * as components from '../components/vertex'
import * as attributes from '../../shader/attributes'

export const MVPMat4: primitives.uniformArrayT = [
	{name: 'model', kind: 'mat4'},
	{name: 'view', kind: 'mat4'},
	{name: 'projection', kind: 'mat4'}
]

export function mvp(): primitives.VertexSource {
	return {
		attributes: ['position', 'uv', 'normal'],
		varyings: ['position', 'uv', 'normal'],
		uniforms: MVPMat4,
		userUniforms: [],
		attributeMapFunc: attributes.ShaderAttributeDataType3D,

		body: () => '',
		main: [
			components.main.passWorldPosition,
			components.main.passNormal,
			components.main.passUV,
			components.main.assignPosition
		]
	}
}
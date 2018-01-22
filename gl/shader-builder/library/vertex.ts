import * as primitives from '../primitives'
import * as components from '../components/vertex'
import * as attributes from '../../shader/attributes'

export const MVPMat4: primitives.uniformT[] = [
	{name: 'model', kind: 'mat4'},
	{name: 'view', kind: 'mat4'},
	{name: 'projection', kind: 'mat4'}
]

export function jointTransforms(N: number): primitives.uniformT {
	return {
		name: 'joint_transforms',
		kind: 'mat4',
		isArray: true,
		length: N
	}
}
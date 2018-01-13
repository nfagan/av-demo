import * as primitives from '../primitives'
import * as components from '../components/vertex'
import * as attributes from '../../shader/attributes'

export const MVPMat4: primitives.uniformT[] = [
	{name: 'model', kind: 'mat4'},
	{name: 'view', kind: 'mat4'},
	{name: 'projection', kind: 'mat4'}
]
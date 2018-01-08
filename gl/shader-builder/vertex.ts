import * as primitives from './primitives'
import * as uniforms from '../shader/uniforms'
import * as attributes from '../shader/attributes'
import * as components from './components/vertex'
import * as library from './library/vertex'
import { types } from '../util/util'

export function make(source: primitives.VertexSource): string {
	const src: Array<string> = []

	const attrs = source.attributes
	const varyings = source.varyings
	const uns = source.uniforms
	const userUns = source.userUniforms
	const mapFunc = source.attributeMapFunc
	const head = primitives.makeHeader(mapFunc, attrs, varyings, uns, userUns)

	src.push(head)

	primitives.makeFuncOrArrayFunc(src, source.body)

	src.push(primitives.makeMain(source.main))	

	return src.join('\n')
}

export { components, library }
import * as primitives from './primitives'
import * as uniforms from '../shader/uniforms'
import * as attributes from '../shader/attributes'
import * as components from './components/fragment'
import * as library from './library/fragment'
import { ShaderAttributeDataType3D } from '../shader/attributes'
import { types } from '../util/util'

export { library }

export function make(source: primitives.FragmentSource): string {
	const src: Array<string> = []

	const varyings = source.varyings
	const uns = source.uniforms
	const userUns = source.userUniforms
	const mapFunc = ShaderAttributeDataType3D
	const head = primitives.makeHeader(mapFunc, [], varyings, uns, userUns)

	src.push(`precision ${source.precision} float;`)

	primitives.makeFuncOrArrayFunc(src, source.body)
	
	src.push(head)

	src.push(primitives.makeMain(source.main))	

	return src.join('\n')
}
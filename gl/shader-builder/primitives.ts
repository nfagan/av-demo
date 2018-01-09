import * as uniforms from '../shader/uniforms'
import { ShaderAttributeMap, ShaderAttributeKinds, ShaderAttributeDataType3D, ShaderAttributeDataTypeFuncT } from '../shader/attributes'
import { ShaderVaryingMap } from '../shader/varying'
import { GLSLTypeMap, GLSLPrecisionMap, LightTypesMap } from '../shader/types'
import { types, common } from '../util/util'
import { LightNames } from '../light/light'

export type uniformT = {
	name: uniforms.UniformNames,
	kind: types.glsl,
	isArray?: boolean,
	length?: number,
	components?: string
}
export type userUniformT = {
	name: string,
	kind: types.glsl,
	isArray?: boolean,
	length?: number,
	components?: string
}

export type uniformArrayT = Array<uniformT>
export type userUniformArrayT = Array<userUniformT>

export type makeFuncT = () => string

export type VertexSource = {
	attributes: ShaderAttributeKinds[],
	varyings: ShaderAttributeKinds[],
	uniforms: uniformArrayT,
	userUniforms: userUniformArrayT,

	attributeMapFunc: ShaderAttributeDataTypeFuncT

	body: Array<makeFuncT> | makeFuncT,
	main: Array<makeFuncT> | makeFuncT
}

export type FragmentSource = {
	varyings: ShaderAttributeKinds[],
	uniforms: uniformArrayT,
	userUniforms: userUniformArrayT,
	precision: types.glslPrecision,

	body: Array<makeFuncT> | makeFuncT,
	main: Array<makeFuncT> | makeFuncT
}

export type PipelineSource = {
	body: Array<makeFuncT> | makeFuncT,
	main: Array<makeFuncT> | makeFuncT
}

export const defaultAttributeMapFunc = ShaderAttributeDataType3D

export function getAttributeName(name: ShaderAttributeKinds): string {
	return ShaderAttributeMap.getAttribute(name)
}

export function getVaryingName(name: ShaderAttributeKinds): string {
	return ShaderVaryingMap.getVarying(name)
}

export function getUniformName(name: uniforms.UniformNames): string {
	return uniforms.Map.getUniform(name)
}

export function getGLSLTypeName(name: types.glsl): string {
	return GLSLTypeMap.getType(name)
}

export function getGLSLPrecisionName(name: types.glslPrecision): string {
	return GLSLPrecisionMap.getPrecision(name)
}

export function getLightTypeName(name: LightNames): string {
	return LightTypesMap.getLightType(name)
}

export function getUniformNamesFromUniformArrayT(arr: uniformArrayT): uniforms.UniformNames[] {
	return arr.map(val => val.name)
}

export function makeAttribute(name: ShaderAttributeKinds, kind: types.glsl): string {
	let attr = getAttributeName(name)
	let kindStr = GLSLTypeMap.getType(kind)
	return `attribute ${kindStr} ${attr};`
}

export function makeVarying(name: ShaderAttributeKinds, kind: types.glsl): string {
	let varying = getVaryingName(name)
	let kindStr = GLSLTypeMap.getType(kind)
	return `varying ${kindStr} ${varying};`
}

export function makeUniform(name: uniforms.UniformNames, kind: types.glsl): string {
	let uniform = getUniformName(name)
	let kindStr = GLSLTypeMap.getType(kind)
	return `uniform ${kindStr} ${uniform};`
}

export function makeUniformArray(name: uniforms.UniformNames, kind: types.glsl, N: number): string {
	let uniform = getUniformName(name)
	let kindStr = GLSLTypeMap.getType(kind)
	return `uniform ${kindStr} ${uniform}[${N}];`
}

export function makeUserUniform(name: string, kind: types.glsl): string {
	let kindStr = GLSLTypeMap.getType(kind)
	return `uniform ${kindStr} ${name};`
}

export function makeUserUniformArray(name: string, kind: types.glsl, N: number): string {
	let kindStr = GLSLTypeMap.getType(kind)
	return `uniform ${kindStr} ${name}[${N}];`
}

export function makeMainNameFromUniform(name: uniforms.UniformNames): string {
	return `${name}_`
}

export function makeTextureOrVec3UniformToVec3(name: uniforms.UniformNames, isTexture: boolean): string {
	return _makeTextureOrTUniformToT(name, 'vec3', isTexture, 'rgb')
}

export function makeTextureOrFloatUniformToFloat(name: uniforms.UniformNames, isTexture: boolean, component: string = 'r'): string {
	return _makeTextureOrTUniformToT(name, 'float', isTexture, component)
}

function _makeTextureOrTUniformToT(name: uniforms.UniformNames, assignedType: types.glsl, isTexture: boolean, components: string): string {
	let uniformName = getUniformName(name)
	let assignedName = makeMainNameFromUniform(name)
	let uvName = getVaryingName('uv')
	if (isTexture) {
		return `${assignedType} ${assignedName} = texture2D(${uniformName}, ${uvName}).${components};`
	} else {
		return `${assignedType} ${assignedName} = ${uniformName};`
	}
}

function requireTextureComponents(un: uniformT, assignedT: types.glsl): string {
	if (un.components)
		return un.components
	if (assignedT === 'float')
		return 'r'
	if (assignedT === 'vec2')
		return 'rg'
	if (assignedT === 'vec3')
		return 'rgb'
	throw new Error(`Unsupported texture-to-type conversion for type "${assignedT}".`)
}

export function makeTextureOrTUniformToT(un: uniformT, assignedT: types.glsl): string {
	let isTexture = un.kind === 'sampler2D'
	let components = requireTextureComponents(un, assignedT)
	return _makeTextureOrTUniformToT(un.name, assignedT, isTexture, components)
}

export function makeHeader(mapFunc: ShaderAttributeDataTypeFuncT, 
		attributes: ShaderAttributeKinds[], 
		varying: ShaderAttributeKinds[], 
		uns: uniformArrayT,
		userUniforms: userUniformArrayT): string {

	let lines: Array<string> = []

	attributes.map(attr => lines.push(makeAttribute(attr, mapFunc(attr))))
	
	varying.map(varying_ => lines.push(makeVarying(varying_, mapFunc(varying_))))

	uns.map(un => {
		if (un.isArray)
			lines.push(makeUniformArray(un.name, un.kind, un.length))
		else
			lines.push(makeUniform(un.name, un.kind))
	})

	userUniforms.map(un => {
		if (un.isArray)
			lines.push(makeUserUniformArray(un.name, un.kind, un.length))
		else
			lines.push(makeUserUniform(un.name, un.kind))
	})

	return lines.join('\n')
}

export function makePassedAttribute(mapFunc: ShaderAttributeDataTypeFuncT, attr: ShaderAttributeKinds): string {
	let varyingName = ShaderVaryingMap.getVarying(attr)
	let attrName = ShaderAttributeMap.getAttribute(attr)
	return `${varyingName} = ${attrName};`
}

export function makePassedAttributes(mapFunc: ShaderAttributeDataTypeFuncT, attributes: ShaderAttributeKinds[]): string {
	return attributes.map(attr => makePassedAttribute(mapFunc, attr)).join('\n')
}

export function makeFuncOrArrayFunc(src: Array<string>, funcs: Array<makeFuncT> | makeFuncT): void {
	if (Array.isArray(funcs))
		funcs.map(func => src.push(func()))
	else
		src.push(funcs())
}

export function makeMain(funcs: Array<makeFuncT> | makeFuncT): string {
	funcs = common.ensureArray(funcs)

	let lines = ['void main() {']
	let statements: Array<string> = []

	funcs.map(func => statements.push(func()))

	lines.push(statements.join('\n\t'))
	lines.push('}')

	return lines.join('\n')
}

export function hashSource(source: VertexSource | FragmentSource): number {
	let body = common.ensureArray(source.body)
	let main = common.ensureArray(source.main)

	let bodyStr = body.map(body_ => body_.toString())
	let mainStr = main.map(main_ => main_.toString())

	let allVals = bodyStr.join('\n') + mainStr.join('\n')

	return common.unsafeHash(allVals)
}
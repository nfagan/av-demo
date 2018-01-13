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

export type makeFuncT = () => string

export type VertexSource = {
	attributes: ShaderAttributeKinds[],
	varyings: ShaderAttributeKinds[],
	uniforms: uniformT[],
	userUniforms: userUniformT[],

	attributeMapFunc: ShaderAttributeDataTypeFuncT

	body: Array<makeFuncT> | makeFuncT,
	main: Array<makeFuncT> | makeFuncT
}

export type FragmentSource = {
	varyings: ShaderAttributeKinds[],
	uniforms: uniformT[],
	userUniforms: userUniformT[],
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

export function getUniformName(name: uniforms.UniformNameOrString): string {
	return uniforms.requireUniformString(name)
}

export function getBuiltinUniformName(name: uniforms.UniformNames): string {
	return getUniformName(name)
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

export function getUniformNamesFromUniformArrayT(arr: uniformT[]): uniforms.UniformNames[] {
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

export function makeUniformArray(name: uniforms.UniformNameOrString, kind: types.glsl, N: number): string {
	let uniform = getUniformName(name)
	let kindStr = GLSLTypeMap.getType(kind)
	return `uniform ${kindStr} ${uniform}[${N}];`
}

export function makeUniform(name: uniforms.UniformNameOrString, kind: types.glsl): string {
	let uniform = getUniformName(name)
	let kindStr = GLSLTypeMap.getType(kind)
	return `uniform ${kindStr} ${uniform};`
}

export function makeBuiltinUniform(name: uniforms.UniformNames, kind: types.glsl): string {
	return makeUniform(name, kind)
}

export function makeBuiltinUniformArray(name: uniforms.UniformNames, kind: types.glsl, N: number): string {
	return makeUniformArray(name, kind, N)
}

export function makeMainNameFromBuiltinUniform(name: uniforms.UniformNames): string {
	return makeMainNameFromUniform(name)
}

export function makeMainNameFromUniform(name: uniforms.UniformNameOrString): string {
	let name_ = getUniformName(name)
	return `${name_}_`
}

function _makeTextureOrTUniformToT(name: uniforms.UniformNameOrString, assignedType: types.glsl, isTexture: boolean, components: string): string {
	let uniformName = getUniformName(name)
	let assignedName = makeMainNameFromUniform(name)
	let uvName = getVaryingName('uv')
	if (isTexture) {
		return `${assignedType} ${assignedName} = texture2D(${uniformName}, ${uvName}).${components};`
	} else {
		return `${assignedType} ${assignedName} = ${uniformName};`
	}
}

function requireTextureComponents(un: uniformT | userUniformT, assignedT: types.glsl): string {
	if (un.components)
		return un.components
	if (assignedT === 'float')
		return 'r'
	if (assignedT === 'vec2')
		return 'rg'
	if (assignedT === 'vec3')
		return 'rgb'
	if (assignedT === 'vec4')
		return 'rgba'
	throw new Error(`Unsupported texture-to-type conversion for type "${assignedT}".`)
}

export function makeTextureOrTBuiltinUniformToT(un: uniformT, assignedT: types.glsl): string {
	let isTexture = un.kind === 'sampler2D'
	let components = requireTextureComponents(un, assignedT)
	return _makeTextureOrTUniformToT(un.name, assignedT, isTexture, components)
}

export function makeTextureOrTUniformToT(un: userUniformT, assignedT: types.glsl): string {
	let isTexture = un.kind === 'sampler2D'
	let components = requireTextureComponents(un, assignedT)
	return _makeTextureOrTUniformToT(un.name, assignedT, isTexture, components)
}

export function makeHeader(mapFunc: ShaderAttributeDataTypeFuncT, 
		attributes: ShaderAttributeKinds[], 
		varying: ShaderAttributeKinds[], 
		uns: uniformT[],
		userUniforms: userUniformT[]): string {

	let lines: Array<string> = []

	attributes.map(attr => lines.push(makeAttribute(attr, mapFunc(attr))))
	
	varying.map(varying_ => lines.push(makeVarying(varying_, mapFunc(varying_))))

	uns.map(un => {
		if (un.isArray)
			lines.push(makeBuiltinUniformArray(un.name, un.kind, un.length))
		else
			lines.push(makeBuiltinUniform(un.name, un.kind))
	})

	userUniforms.map(un => {
		if (un.isArray)
			lines.push(makeUniformArray(un.name, un.kind, un.length))
		else
			lines.push(makeUniform(un.name, un.kind))
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
	funcs = common.ensureArray(funcs)
	funcs.map(func => src.push(func()))
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
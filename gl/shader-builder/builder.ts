import { Model } from '../model/model'
import * as material from '../material/material'
import * as shader from '../shader/shader'
import * as primitives from './primitives'
import * as vertex from './vertex'
import * as fragment from './fragment'
import * as constants from '../shader/constants'
import { types, common, attribute } from '../util/util'

type sourceReturnT = {vertex: primitives.VertexSource, fragment: primitives.FragmentSource}

const shaders: {[key: string]: shader.ShaderProgram} = {}

export function fromModel(model: Model): shader.ShaderProgram {

	const sources = getSource(model)

	return fromSource(model.gl, sources.vertex, sources.fragment)
}

export function getSource(model: Model): sourceReturnT {

	let attributes: shader.ShaderAttributeKinds[] = ['position']
	let varying: shader.ShaderAttributeKinds[] = []
	let fragUniforms: primitives.uniformT[] = []
	const vertexUniforms: primitives.uniformT[] = vertex.library.MVPMat4

	const nPointLights = constants.N_POINT_LIGHTS
	const nDirLights = constants.N_DIRECTIONAL_LIGHTS
	const nJoints = constants.N_JOINTS
	const nJointInfluencers = constants.N_JOINT_INFLUENCES_PER_VERTEX

	let vertBody: Array<primitives.makeFuncT> = []
	let vertMain: Array<primitives.makeFuncT> = []
	let fragBody: Array<primitives.makeFuncT> = []
	let fragMain: Array<primitives.makeFuncT> = []

	//
	//	vertex
	//

	vertMain.push(vertex.components.main.makePosition)

	const hasAnimation = model.hasAnimation()

	if (hasAnimation) {
		attributes.push('joint_weight')
		attributes.push('joint_index')

		vertexUniforms.push(vertex.library.jointTransforms(nJoints))

		vertBody.push(vertex.components.body.inverse)
		vertBody.push(vertex.components.body.transpose)
		vertBody.push(vertex.components.body.normalMat)
	}

	if (model.receivesLight || hasAnimation) {
		attributes.push('normal')
		vertMain.push(vertex.components.main.makeNormal)
	}

	if (model.receivesLight) {
		varying.push('normal')
		varying.push('position')		

		if (hasAnimation)
			vertMain.push(() => vertex.components.main.makeSkeletalAnimationLoop(nJointInfluencers))

		vertMain.push(vertex.components.main.passWorldNormal)
		vertMain.push(vertex.components.main.passWorldPosition)
	}

	if (model.material.hasTexture()) {
		attributes.push('uv')
		varying.push('uv')

		vertMain.push(vertex.components.main.passUV)
	}

	vertMain.push(vertex.components.main.assignPosition)

	//	
	//	fragment
	//

	let lightingModel = model.material.getLightingModel()

	if (lightingModel !== 'physical')
		throw new Error(`Lighting model ${lightingModel} is not yet supported.`)

	const albedoAtt = model.material.getAttribute('albedo')

	let albedoUniform: primitives.uniformT = {
		name: 'albedo', 
		kind: albedoAtt.getGLSLType() 
	}

	fragUniforms.push(albedoUniform)

	let lightBody: Array<primitives.makeFuncT> = []
	let lightMain: Array<primitives.makeFuncT> = []

	const hasRoughness = model.material.hasAttribute('roughness')
	const hasMetallic = model.material.hasAttribute('metallic')

	if (model.receivesLight && hasRoughness && hasMetallic) {
		const roughnessAtt = model.material.getAttribute('roughness')
		const metallicAtt = model.material.getAttribute('metallic')

		const roughness: primitives.uniformT = {
			name: 'roughness',
			kind: roughnessAtt.getGLSLType()
		}

		const metallic: primitives.uniformT = {
			name: 'metallic',
			kind: metallicAtt.getGLSLType()
		}

		fragUniforms.push({name: 'camera_position', kind: 'vec3'})
		fragUniforms.push({name: 'directional', kind: 'directional', isArray: true, length: nDirLights})
		fragUniforms.push({name: 'point', kind: 'point', isArray: true, length: nPointLights})
		fragUniforms.push(roughness)
		fragUniforms.push(metallic)

		lightBody = fragment.library.body.physical1(nPointLights, nDirLights)
		
		lightMain = fragment.library.main.physical1(albedoUniform, roughness, metallic)
	} else {
		lightMain = fragment.library.main.noLighting(albedoUniform)
	}

	lightBody.map(body => fragBody.push(body))
	lightMain.map(main => fragMain.push(main))

	let vertexSource: primitives.VertexSource = {
		attributes: attributes,
		varyings: varying,
		uniforms: vertexUniforms,
		userUniforms: [],
		attributeMapFunc: primitives.defaultAttributeMapFunc,
		body: vertBody,
		main: vertMain
	}

	let fragSource: primitives.FragmentSource = {
		varyings: varying,
		uniforms: fragUniforms,
		userUniforms: [],
		precision: 'mediump',
		body: fragBody,
		main: fragMain
	}

	return {
		vertex: vertexSource,
		fragment: fragSource
	}

}

export function fromSource(gl: WebGLRenderingContext, 
	vert: primitives.VertexSource, 
	frag: primitives.FragmentSource): shader.ShaderProgram {

	const vertShaderSource: shader.ShaderSource = {
		source: vertex.make(vert),
		type: shader.ShaderTypes.VERTEX,
		uniforms: primitives.getUniformNamesFromUniformArrayT(vert.uniforms)
	}

	const fragShaderSource: shader.ShaderSource = {
		source: fragment.make(frag),
		type: shader.ShaderTypes.FRAGMENT,
		uniforms: primitives.getUniformNamesFromUniformArrayT(frag.uniforms)
	}

	const hashKey = common.unsafeHash(vertShaderSource.source + fragShaderSource.source)

	let cachedShader = shaders[hashKey]

	if (cachedShader !== undefined) {
		console.log('Using cached shader ...')
		return cachedShader
	}

	const vertShader = new shader.Shader(gl, vertShaderSource)
	const fragShader = new shader.Shader(gl, fragShaderSource)

	const prog = new shader.ShaderProgram(gl)

	prog.attach([vertShader, fragShader])

	shaders[hashKey] = prog

	return prog
}
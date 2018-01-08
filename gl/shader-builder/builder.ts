import { Model } from '../model/model'
import * as material from '../material/material'
import * as shader from '../shader/shader'
import * as primitives from './primitives'
import * as vertex from './vertex'
import * as fragment from './fragment'
import * as constants from '../shader/constants'
import { types } from '../util/util'

export class Builder {

	static shaders: {[key: string]: shader.ShaderProgram} = {}

	public static fromModel(model: Model): shader.ShaderProgram {

		let attributes: shader.ShaderAttributeKinds[] = ['position']
		let varying: shader.ShaderAttributeKinds[] = []
		let fragUniforms: primitives.uniformArrayT = []
		const vertexUniforms: primitives.uniformArrayT = vertex.library.MVPMat4

		const nPointLights = constants.N_POINT_LIGHTS
		const nDirLights = constants.N_DIRECTIONAL_LIGHTS

		let vertBody: Array<primitives.makeFuncT> = []
		let vertMain: Array<primitives.makeFuncT> = []
		let fragBody: Array<primitives.makeFuncT> = []
		let fragMain: Array<primitives.makeFuncT> = []

		if (model.receivesLight) {
			vertMain.push(vertex.components.main.passWorldPosition)
			vertMain.push(vertex.components.main.passNormal)
			attributes.push('normal')
			varying.push('normal')
			varying.push('position')
		}

		if (model.material.hasTexture()) {
			vertMain.push(vertex.components.main.passUV)
			attributes.push('uv')
			varying.push('uv')
		}

		vertMain.push(vertex.components.main.assignPosition)

		// for (let attr of model.material.enumerateAttributes()) {
		// 	let name = attr.name
		// 	let value = attr.peekValue()
		// 	if (types.isTexture(value)) {
		// 		fragUniforms.push({name: name, kind: 'sampler2D'})
		// 	} else if (types.isGLMArrayType(value) && value.length === 3) {
		// 		fragUniforms.push({name: name, kind: 'vec3'})
		// 	} else {
		// 		if (!types.isNumber(value))
		// 			throw new Error(`Data for attribute "${name}" were of an unrecognized type.`)
		// 		fragUniforms.push({name: name, kind: 'float'})
		// 	}
		// }

		Builder.assertAttributePresent(model.material, 'albedo', 'shader construction')

		const albedoIsTexture = model.material.getAttribute('albedo').isTexture()

		fragUniforms.push({name: 'albedo', kind: albedoIsTexture ? 'sampler2D' : 'vec3'})

		let lightBody: Array<primitives.makeFuncT> = []
		let lightMain: Array<primitives.makeFuncT> = []

		if (model.receivesLight) {
			let lightingModel = model.material.getLightingModel()

			if (lightingModel !== 'physical')
				throw new Error(`Lighting model ${lightingModel} is not yet supported.`)

			fragUniforms.push({name: 'camera_position', kind: 'vec3'})
			fragUniforms.push({name: 'directional', kind: 'directional', isArray: true, length: nDirLights})
			fragUniforms.push({name: 'point', kind: 'point', isArray: true, length: nPointLights})
			fragUniforms.push({name: 'roughness', kind: 'float'})
			fragUniforms.push({name: 'metallic', kind: 'float'})

			lightBody = fragment.library.body.physical1(nPointLights, nDirLights)
			
			lightMain = fragment.library.main.physical1(albedoIsTexture)
		} else {
			lightMain = fragment.library.main.noLighting(albedoIsTexture)
		}

		lightBody.map(body => fragBody.push(body))
		lightMain.map(main => fragMain.push(main))

		let vertexSource: primitives.VertexSource = {
			attributes: attributes,
			varyings: varying,
			uniforms: vertexUniforms,
			userUniforms: [],
			attributeMapFunc: primitives.defaultAttributeMapFunc,
			body: [],
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

		const vertHash = primitives.hashSource(vertexSource)
		const fragHash = primitives.hashSource(fragSource)
		const hashKey = `${vertHash}, ${fragHash}`

		let cachedShader = Builder.shaders[hashKey]

		if (cachedShader !== undefined) {
			console.log('Using cached shader ...')
			return cachedShader
		} else {
			console.log(Builder.shaders)
		}

		const vertShaderSource: shader.ShaderSource = {
			source: vertex.make(vertexSource),
			type: shader.ShaderTypes.VERTEX,
			uniforms: primitives.getUniformNamesFromUniformArrayT(vertexUniforms)
		}

		const fragShaderSource: shader.ShaderSource = {
			source: fragment.make(fragSource),
			type: shader.ShaderTypes.FRAGMENT,
			uniforms: primitives.getUniformNamesFromUniformArrayT(fragUniforms)
		}

		const vertShader = new shader.Shader(model.gl, vertShaderSource)
		const fragShader = new shader.Shader(model.gl, fragShaderSource)

		const prog = new shader.ShaderProgram(model.gl)

		prog.attach([vertShader, fragShader])

		Builder.shaders[hashKey] = prog

		return prog
	}

	private static assertAttributePresent(mat: material.Material, attr: material.AttributeNames, op: string): void {
		if (!mat.hasAttribute(attr))
			throw new Error(`Operation of type "${op}" requires that the attribute "${attr}" be present.`)
	}
}
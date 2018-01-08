import * as primitives from '../primitives'
import * as components from '../components/fragment'
import { types } from '../../util/util'
import { ShaderAttributeKinds } from '../../shader/attributes'

export namespace body {
	export function physical1(nPtLights: number, nDirLights: number): Array<primitives.makeFuncT> {
		return [
			components.lighting.PBR,
			() => components.constants.defineNDirectionalLights(nDirLights),
			() => components.constants.defineNPointLights(nPtLights),
			components.lighting.makeDirectionalLightStruct,
			components.lighting.makePointLightStruct,
		]
	}
}

export namespace main {
	export function physical1(albedoIsTexture: boolean): Array<primitives.makeFuncT> {
		return [
			() => components.main.makeAlbedo(albedoIsTexture),
			components.main.makeLo,
			components.main.makeAmbient,
			components.main.startDirectionalLightLoop,
			components.main.makeDirectionalLight,
			components.main.accumulateLighting,
			components.main.closeBrace,
			components.main.startPointLightLoop,
			components.main.makePointLight,
			components.main.accumulateLighting,
			components.main.closeBrace,
			components.main.makeFinalColor,
			components.main.assignFinalColor
		]
	}

	export function noLighting(albedoIsTexture: boolean): Array<primitives.makeFuncT> {
		return [
			() => components.main.makeAlbedo(albedoIsTexture),
			components.main.assignAlbedo
		]
	}
}
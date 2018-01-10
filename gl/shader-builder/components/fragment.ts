import * as primitives from '../primitives'
import { types } from '../../util/util'
import * as lighting from './lighting'
import * as constants from './constants'
import { UniformNames } from '../../shader/uniforms'

import { ShaderAttributeDataType3D } from '../../shader/attributes'

function getAmbientName(): string { return 'ambient' }
function getLoName(): string { return 'Lo' }
function getIntermediateLightingCalcName(): string { return 'res' }
function getFinalColorName(): string { return 'final_color' }

export namespace main {

	export function makeAlbedo(albedo: primitives.uniformT): string {
		return primitives.makeTextureOrTBuiltinUniformToT(albedo, 'vec3')
	}

	export function makeRoughness(roughness: primitives.uniformT): string {
		return primitives.makeTextureOrTBuiltinUniformToT(roughness, 'float')
	}

	export function makeMetallic(metallic: primitives.uniformT): string {
		return primitives.makeTextureOrTBuiltinUniformToT(metallic, 'float')
	}

	export function assignWhite(): string {
		return 'gl_FragColor = vec4(1.0);'
	}

	export function assignAlbedo(): string {
		let albedoName = primitives.makeMainNameFromBuiltinUniform('albedo')
		return `gl_FragColor = vec4(${albedoName}, 1.0);`
	}

	export function makeAmbient(amt: number = 0.03): string {
		let albedoName = primitives.makeMainNameFromBuiltinUniform('albedo')
		let ambientName = getAmbientName()
		let amtStr = amt.toFixed(2).toString()
		return `vec3 ${ambientName} = vec3(${amtStr}) * ${albedoName};`
	}

	export function makeLo(): string {
		return `vec3 ${getLoName()} = vec3(0.0);`
	}

	export function makePointLight(): string {
		const norm = primitives.getVaryingName('normal')
		const pos = primitives.getVaryingName('position')
		const albedo = primitives.makeMainNameFromBuiltinUniform('albedo')
		const roughness = primitives.makeMainNameFromBuiltinUniform('roughness')
		const metallic = primitives.makeMainNameFromBuiltinUniform('metallic')
		const camPos = primitives.getBuiltinUniformName('camera_position')
		const ptLight = primitives.getBuiltinUniformName('point')
		const lightPos = primitives.getBuiltinUniformName('position')
		const lightCol = primitives.getBuiltinUniformName('color')
		const lightMask = primitives.getBuiltinUniformName('mask')
		const loName = getLoName()
		const resName = getIntermediateLightingCalcName()
		const res = `
			bool is_directional = false;
			vec3 ${resName} = PBR(${norm}, ${albedo}, ${roughness}, ${metallic}, 
				${camPos}, ${pos}, ${ptLight}[i].${lightPos}, 
				${ptLight}[i].${lightCol}, is_directional);
				${resName} *= ${ptLight}[i].${lightMask};`
		return res
	}

	export function startPointLightLoop(): string {
		const nPtLights = lighting.getNPointLightsName()
		return `for (int i = 0; i < ${nPtLights}; i++) {`
	}

	export function startDirectionalLightLoop(): string {
		const nDirLights = lighting.getNDirectionalLightsName()
		return `for (int i = 0; i < ${nDirLights}; i++) {`
	}

	export function closeBrace(): string {
		return '}'
	}

	export function accumulateLighting(): string {
		return `${getLoName()} += ${getIntermediateLightingCalcName()};`
	}

	export function makeDirectionalLight(): string {
		const norm = primitives.getVaryingName('normal')
		const pos = primitives.getVaryingName('position')
		const albedo = primitives.makeMainNameFromBuiltinUniform('albedo')
		const roughness = primitives.makeMainNameFromBuiltinUniform('roughness')
		const metallic = primitives.makeMainNameFromBuiltinUniform('metallic')
		const camPos = primitives.getBuiltinUniformName('camera_position')
		const dirLight = primitives.getBuiltinUniformName('directional')
		const lightDir = primitives.getBuiltinUniformName('direction')
		const lightCol = primitives.getBuiltinUniformName('color')
		const lightMask = primitives.getBuiltinUniformName('mask')
		const loName = getLoName()
		const resName = getIntermediateLightingCalcName()
		const res = `
			bool is_directional = true;
			vec3 ${resName} = PBR(${norm}, ${albedo}, ${roughness}, ${metallic}, 
				${camPos}, ${pos}, ${dirLight}[i].${lightDir}, 
				${dirLight}[i].${lightCol}, is_directional);
				${resName} *= ${dirLight}[i].${lightMask};`
		return res
	}

	export function makeFinalColor(): string {
		const finalColor = getFinalColorName()
		const ambientName = getAmbientName()
		const loName = getLoName()
		return `
			vec3 ${finalColor} = ${ambientName} + ${loName};
			${finalColor} = ${finalColor} / (${finalColor} + vec3(1.0));
			${finalColor} = pow(${finalColor}, vec3(1.0/2.2));`
	}

	export function assignFinalColor(): string {
		return `gl_FragColor = vec4(${getFinalColorName()}, 1.0);`
	}

	export function assignAmbient(): string {
		return `gl_FragColor = ${getAmbientName()};`
	}

}

export { lighting, constants }
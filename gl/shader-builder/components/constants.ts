import { assert } from '../../util/util'
import * as lighting from './lighting'

export function PI(): string {
	return `const float PI = 3.14159265359;`
}

export function defineNPointLights(N: number): string {
	assert.assertInteger(N, 'number of point lights')
	let name = lighting.getNPointLightsName()
	return `const int ${name} = ${N};`
}

export function defineNDirectionalLights(N: number): string {
	assert.assertInteger(N, 'number of point lights')
	let name = lighting.getNDirectionalLightsName()
	return `const int ${name} = ${N};`
}


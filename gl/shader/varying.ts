import { ShaderAttributeKinds } from './attributes'

export function makeVaryingString(name: string): string {
	return `v_${name}`
}
import * as primitives from '../primitives'
import { ShaderAttributeDataType3D, ShaderAttributeDataTypeFuncT } from '../../shader/attributes'
import { ShaderAttributeKinds } from '../../shader/shader';

function getLocalPrefix(): string {
	return 'local'
}

function getWorldPrefix(): string {
	return 'w'
}

export namespace body {

	export function normalMat(): string {
		//	https://github.com/toji/building-the-game/blob/part-3/public/js/skinned-model.js
		return `
		mat3 getNormalMat(mat4 mat) {
        	return mat3(mat[0][0], mat[1][0], mat[2][0], mat[0][1], mat[1][1], mat[2][1], mat[0][2], mat[1][2], mat[2][2]);
        }`
	}

	export function inverse(): string {
		return `
		mat4 inverse(mat4 m) {
			float
				a00 = m[0][0], a01 = m[0][1], a02 = m[0][2], a03 = m[0][3],
				a10 = m[1][0], a11 = m[1][1], a12 = m[1][2], a13 = m[1][3],
				a20 = m[2][0], a21 = m[2][1], a22 = m[2][2], a23 = m[2][3],
				a30 = m[3][0], a31 = m[3][1], a32 = m[3][2], a33 = m[3][3],
		  
				b00 = a00 * a11 - a01 * a10,
				b01 = a00 * a12 - a02 * a10,
				b02 = a00 * a13 - a03 * a10,
				b03 = a01 * a12 - a02 * a11,
				b04 = a01 * a13 - a03 * a11,
				b05 = a02 * a13 - a03 * a12,
				b06 = a20 * a31 - a21 * a30,
				b07 = a20 * a32 - a22 * a30,
				b08 = a20 * a33 - a23 * a30,
				b09 = a21 * a32 - a22 * a31,
				b10 = a21 * a33 - a23 * a31,
				b11 = a22 * a33 - a23 * a32,
		  
				det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
		  
			return mat4(
				a11 * b11 - a12 * b10 + a13 * b09,
				a02 * b10 - a01 * b11 - a03 * b09,
				a31 * b05 - a32 * b04 + a33 * b03,
				a22 * b04 - a21 * b05 - a23 * b03,
				a12 * b08 - a10 * b11 - a13 * b07,
				a00 * b11 - a02 * b08 + a03 * b07,
				a32 * b02 - a30 * b05 - a33 * b01,
				a20 * b05 - a22 * b02 + a23 * b01,
				a10 * b10 - a11 * b08 + a13 * b06,
				a01 * b08 - a00 * b10 - a03 * b06,
				a30 * b04 - a31 * b02 + a33 * b00,
				a21 * b02 - a20 * b04 - a23 * b00,
				a11 * b07 - a10 * b09 - a12 * b06,
				a00 * b09 - a01 * b07 + a02 * b06,
				a31 * b01 - a30 * b03 - a32 * b00,
				a20 * b03 - a21 * b01 + a22 * b00) / det;
		  }
		`
	}

	export function transpose(): string {
		return `
		mat4 transpose(mat4 m) {
			return mat4(m[0][0], m[1][0], m[2][0], m[3][0],
						m[0][1], m[1][1], m[2][1], m[3][1],
						m[0][2], m[1][2], m[2][2], m[3][2],
						m[0][3], m[1][3], m[2][3], m[3][3]);
			}`
	}
}

export namespace main {

	function makeAttributeCopy(name: ShaderAttributeKinds, mapFunc: ShaderAttributeDataTypeFuncT = primitives.defaultAttributeMapFunc): string {
		const attName = primitives.getAttributeName(name)
		const copyName = primitives.makeMainName(attName)
		const kind = mapFunc(name)
		return primitives.makeCopyAssignment(attName, copyName, kind)
	}

	function passAttribute(name: ShaderAttributeKinds): string {
		const vName = primitives.getVaryingName(name)
		const aName = primitives.makeMainName(primitives.getAttributeName(name))
		return `${vName} = ${aName};`
	}

	export function makePosition(mapFunc: ShaderAttributeDataTypeFuncT = primitives.defaultAttributeMapFunc): string {
		return makeAttributeCopy('position', mapFunc)
	}
	
	export function makeNormal(mapFunc: ShaderAttributeDataTypeFuncT = primitives.defaultAttributeMapFunc): string {
		return makeAttributeCopy('normal', mapFunc)
	}

	export function makeJointWeight(mapFunc: ShaderAttributeDataTypeFuncT = primitives.defaultAttributeMapFunc): string {
		return makeAttributeCopy('joint_weight', mapFunc)
	}

	export function makeJointIndex(mapFunc: ShaderAttributeDataTypeFuncT = primitives.defaultAttributeMapFunc): string {
		return makeAttributeCopy('joint_index', mapFunc)
	}

	export function assignPosition(): string {
		const model = primitives.getBuiltinUniformName('model')
		const view = primitives.getBuiltinUniformName('view')
		const proj = primitives.getBuiltinUniformName('projection')
		const pos = primitives.makeMainName(primitives.getAttributeName('position'))

		return `gl_Position = ${proj} * ${view} * ${model} * vec4(${pos}, 1.0);`
	}

	export function passUV(): string {
		return primitives.makePassedAttribute(ShaderAttributeDataType3D, 'uv')
	}

	export function passPosition(): string {
		return passAttribute('position')
	}

	export function passWorldPosition(): string {
		let vPos = primitives.getVaryingName('position')
		let aPos = primitives.makeMainName(primitives.getAttributeName('position'))
		let model = primitives.getBuiltinUniformName('model')
		return `${vPos} = vec3(${model} * vec4(${aPos}, 1.0));`
	}

	export function passWorldNormal(): string {
		let vNorm = primitives.getVaryingName('normal')
		let aNorm = primitives.makeMainName(primitives.getAttributeName('normal'))
		let model = primitives.getBuiltinUniformName('model')
		return `${vNorm} = vec3(${model} * vec4(${aNorm}, 0.0));`
	}

	export function passNormal(): string {
		return passAttribute('normal')
	}

	export function makeSkeletalAnimationLoop(N: number, 
		attributeMapFunc: ShaderAttributeDataTypeFuncT = primitives.defaultAttributeMapFunc): string {

		const lines = []
		const weightAtt = primitives.getAttributeName('joint_weight')
		const indexAtt = primitives.getAttributeName('joint_index')
		const weightStr = primitives.makeMainName(weightAtt)
		const indexStr = primitives.makeMainName(indexAtt)
		const weightAssignStr = primitives.makeCopyAssignment(weightAtt, weightStr, attributeMapFunc('joint_weight'))
		const indexAssignStr = primitives.makeCopyAssignment(indexAtt, indexStr, attributeMapFunc('joint_index'))

		const posAttName = primitives.getAttributeName('position')
		const normAttName = primitives.getAttributeName('normal')

		const localPrefix = getLocalPrefix()

		const localPositionName = `${localPrefix}_position`
		const localNormalName = `${localPrefix}_normal`

		const mainPositionName = primitives.makeMainName(posAttName)
		const mainNormalName = primitives.makeMainName(normAttName)

		const jointUn = primitives.getUniformName('joint_transforms')
		
		lines.push(weightAssignStr)
		lines.push(indexAssignStr)

		lines.push(`
		mat4 trans = mat4(0.0);

		for (int i = 0; i < ${N}; i++) {
			int index = int(${indexStr}[i]);
			float weight = ${weightStr}[i];

			if (weight == 0.0)
				break;

			trans += ${jointUn}[index] * weight;
		}

		${mainPositionName} = (trans * vec4(${mainPositionName}, 1.0)).xyz;
		${mainNormalName} = (trans * vec4(${mainNormalName}, 0.0)).xyz;
		`)

		return lines.join('\n')
	}
}
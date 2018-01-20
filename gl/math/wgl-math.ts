import * as glm from 'gl-matrix'
import { vector, types } from '../util/util'

export function clamp<T extends Float32Array>(val: T, min: number, max: number): void {
	for (let i: number = 0; i < val.length; i++) {
		if (val[i] < min) val[i] = min
		if (val[i] > max) val[i] = max
	}
}

export function clampScalar(val: number, min: number, max: number): number {
	return val < min ? min : val > max ? max : val
}

export function signedClamp<T extends Float32Array>(val: T, min: number, max: number): void {
	for (let i: number = 0; i < val.length; i++) {
		let _val = val[i]
		let sign = _val < 0 ? -1 : 1
		if (Math.abs(_val) < min) {
			val[i] = min * sign
		}
		if (Math.abs(_val) > max) {
			val[i] = max * sign
		}
	}
}

export function abs<T extends Float32Array>(val: T): void {
	for (let i: number = 0; i < val.length; i++) {
		val[i] = Math.abs(val[i])
	}
}

export function radians(val: number): number {
	return glm.glMatrix.toRadian(val)
}

export function vecsum<T extends types.vector>(arr: Array<T>): T {
	if (arr.length === 0)
		return null
	let res: types.vector
	if (arr[0].length === 2) {
		res = glm.vec2.fromValues(0, 0)
	} else if (arr[0].length === 3) {
		res = glm.vec3.fromValues(0, 0, 0)
	}
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < res.length; j++) {
			res[j] += arr[i][j]
		}
	}
	return <T>res
}

export function vecmean<T extends types.vector>(arr: Array<T>): T {
	let sum = vecsum(arr)
	if (sum === null)
		return null
	let mean = sum
	for (let i = 0; i < mean.length; i++) {
		mean[i] /= arr.length
	}
	return <T>mean
}

export function distance(a: glm.vec2, b: glm.vec2): number {
	return Math.sqrt(Math.pow(b[0]-a[0], 2) + Math.pow(b[1]-a[1], 2))
}

export function max(arr: Array<number>) {
	let max = -Infinity
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) max = arr[i]
	}
	return max
}

export function min(arr: Array<number>) {
	let min = Infinity
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) min = arr[i]
	}
	return min
}

export function isPow2(n: number) {
	if (n === 0)
		return false
	while (n !== 1) {
		if (n % 2 !== 0)
			return false
		n = n / 2
	}
	return true
}

export function arraySum(arr: Array<number>): number {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i]
	}
	return sum
}

export function lookAt(out: glm.mat4, eye: glm.vec3, center: glm.vec3, up: glm.vec3): glm.mat4 {
	let x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
	let eyex = eye[0];
	let eyey = eye[1];
	let eyez = eye[2];
	let upx = up[0];
	let upy = up[1];
	let upz = up[2];
	let centerx = center[0];
	let centery = center[1];
	let centerz = center[2];

	if (Math.abs(eyex - centerx) < glm.glMatrix.EPSILON &&
	  	Math.abs(eyey - centery) < glm.glMatrix.EPSILON &&
	  	Math.abs(eyez - centerz) < glm.glMatrix.EPSILON) {
		return glm.mat4.identity(out)
	}

	z0 = eyex - centerx;
	z1 = eyey - centery;
	z2 = eyez - centerz;

	len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
	z0 *= len;
	z1 *= len;
	z2 *= len;

	x0 = upy * z2 - upz * z1;
	x1 = upz * z0 - upx * z2;
	x2 = upx * z1 - upy * z0;
	len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
	if (!len) {
	x0 = 0;
	x1 = 0;
	x2 = 0;
	} else {
	len = 1 / len;
	x0 *= len;
	x1 *= len;
	x2 *= len;
	}

	y0 = z1 * x2 - z2 * x1;
	y1 = z2 * x0 - z0 * x2;
	y2 = z0 * x1 - z1 * x0;

	len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
	if (!len) {
		y0 = 0;
		y1 = 0;
		y2 = 0;
	} else {
		len = 1 / len;
		y0 *= len;
		y1 *= len;
		y2 *= len;
	}

	out[0] = x0;
	out[1] = y0;
	out[2] = z0;
	out[3] = 0;
	out[4] = x1;
	out[5] = y1;
	out[6] = z1;
	out[7] = 0;
	out[8] = x2;
	out[9] = y2;
	out[10] = z2;
	out[11] = 0;
	out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
	out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
	out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
	out[15] = 1;

	return out;
}

export function extractPosition(a: glm.mat4): glm.vec3 {
	return glm.vec3.fromValues(a[12], a[13], a[14])
}

export function quatToRotationMatrix(q: glm.quat, te?: glm.mat4): glm.mat4 {
	//	https://github.com/mrdoob/three.js/blob/dev/src/math/Matrix4.js
	let x = q[0], y = q[1], z = q[1], w = q[3]
	let x2 = x + x, y2 = y + y, z2 = z + z
	let xx = x * x2, xy = x * y2, xz = x * z2
	let yy = y * y2, yz = y * z2, zz = z * z2
	let wx = w * x2, wy = w * y2, wz = w * z2

	const setLastCol = te === undefined || te === null

	if (setLastCol)
		te = glm.mat4.create()

	te[ 0 ] = 1 - ( yy + zz )
	te[ 4 ] = xy - wz
	te[ 8 ] = xz + wy

	te[ 1 ] = xy + wz
	te[ 5 ] = 1 - ( xx + zz )
	te[ 9 ] = yz - wx

	te[ 2 ] = xz - wy
	te[ 6 ] = yz + wx
	te[ 10 ] = 1 - ( xx + yy )

	if (setLastCol) {
		te[ 3 ] = 0
		te[ 7 ] = 0
		te[ 11 ] = 0
	}

	// bottom row
	te[ 12 ] = 0
	te[ 13 ] = 0
	te[ 14 ] = 0
	te[ 15 ] = 1

	return te
}

export function extractRotationMat3(a: glm.mat4): glm.mat3 {
	return glm.mat3.fromValues(
		//
		a[0],
		a[1],
		a[2],
		//
		a[4],
		a[5],
		a[6],
		//
		a[8],
		a[9],
		a[10]
	)
}
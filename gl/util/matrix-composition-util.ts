import { mat4, vec3, vec4, quat } from 'gl-matrix'
import * as types from './type-util'

//  https://github.com/mattdesl/mat4-decompose
//  https://github.com/mattdesl/mat4-recompose

let tmp = mat4.create()
let perspectiveMatrix = mat4.create()
const tmpVec4 = [0, 0, 0, 0]
const row: Array<vec3> = [ gvec3(), gvec3(), gvec3() ]
const pdum3 = gvec3()

function gvec3(): vec3 {
    return vec3.fromValues(0, 0, 0)
}

function mnormalize(out: mat4, mat: mat4): boolean {
    var m44 = mat[15]
    if (m44 === 0) 
        return false
    var scale = 1 / m44
    for (var i=0; i<16; i++)
        out[i] = mat[i] * scale
    return true
}

export type compositionT = {
    [key: string]: boolean | vec3 | vec4 | quat,
    success?: boolean,
    translation?: vec3,
    scale?: vec3,
    skew?: vec3,
    perspective?: vec4,
    quaternion?: quat
}

export function recompose(matrix: mat4, comp: compositionT): mat4 {
    comp = requireCompleteCompositionT(comp)

    const translation = comp.translation
    const quaternion = comp.quaternion
    const perspective = comp.perspective
    const skew = comp.skew
    const scale = comp.scale

    mat4.identity(matrix)

    mat4.fromRotationTranslation(matrix, quaternion, translation)

    matrix[3] = perspective[0]
    matrix[7] = perspective[1]
    matrix[11] = perspective[2]
    matrix[15] = perspective[3]
        
    mat4.identity(tmp)

    if (skew[2] !== 0) {
        tmp[9] = skew[2]
        mat4.multiply(matrix, matrix, tmp)
    }

    if (skew[1] !== 0) {
        tmp[9] = 0
        tmp[8] = skew[1]
        mat4.multiply(matrix, matrix, tmp)
    }

    if (skew[0] !== 0) {
        tmp[8] = 0
        tmp[4] = skew[0]
        mat4.multiply(matrix, matrix, tmp)
    }

    mat4.scale(matrix, matrix, scale)
    return matrix
}

export function requireCompleteCompositionT(comp?: compositionT): compositionT {
    if (!comp)
        comp = {}
    if (comp.success === undefined) comp.success = true
    if (!comp.translation) comp.translation = gvec3()
    if (!comp.scale) comp.scale = gvec3()
    if (!comp.skew) comp.skew = gvec3()
    if (!comp.perspective) comp.perspective = vec4.fromValues(0, 0, 0, 1)
    if (!comp.quaternion) comp.quaternion = quat.fromValues(0, 0, 0, 1)
    return comp
}

export function copyCompositionT(comp: compositionT, deep: boolean = false): compositionT {
    const keys = Object.keys(comp)
    const out: compositionT = {}
    for (const key of keys) {
        if (!deep) {
            out[key] = comp[key] as any
            continue
        }
        const val = comp[key]
        if (typeof val === 'boolean') {
            out[key] = val
        } else if (val instanceof Float32Array) {
            const arrCopy = Float32Array.from(val)
            out[key] = arrCopy as any
        } else {
            throw new Error(`copyCompositionT: Unrecognized composition parameter type.`)
        }
    }
    return out
}

export function decompose(matrix: mat4): compositionT {
    const comp = requireCompleteCompositionT()

    let translation = comp.translation
    let scale = comp.scale
    let skew = comp.skew
    let perspective = comp.perspective
    let quaternion = comp.quaternion

    tmp = mat4.identity(tmp)

    if (!mnormalize(tmp, matrix))
        return {success: false}

    perspectiveMatrix = mat4.clone(tmp)

    perspectiveMatrix[3] = 0
    perspectiveMatrix[7] = 0
    perspectiveMatrix[11] = 0
    perspectiveMatrix[15] = 1

    if (Math.abs(mat4.determinant(perspectiveMatrix)) < 1e-8)
        return {success: false}

    var a03 = tmp[3], a13 = tmp[7], a23 = tmp[11],
            a30 = tmp[12], a31 = tmp[13], a32 = tmp[14], a33 = tmp[15]

    if (a03 !== 0 || a13 !== 0 || a23 !== 0) {
        tmpVec4[0] = a03
        tmpVec4[1] = a13
        tmpVec4[2] = a23
        tmpVec4[3] = a33

        var ret = mat4.invert(perspectiveMatrix, perspectiveMatrix)
        if (!ret) return {success: false}
        perspectiveMatrix = mat4.transpose(perspectiveMatrix, perspectiveMatrix)

        vec4multMat4(perspective, tmpVec4, perspectiveMatrix)
    } else { 
        perspective[0] = perspective[1] = perspective[2] = 0
        perspective[3] = 1
    }

    translation[0] = a30
    translation[1] = a31
    translation[2] = a32

    mat3from4(row, tmp)

    scale[0] = vec3.length(row[0])
    vec3.normalize(row[0], row[0])

    skew[0] = vec3.dot(row[0], row[1])
    combine(row[1], row[1], row[0], 1.0, -skew[0])

    scale[1] = vec3.length(row[1])
    vec3.normalize(row[1], row[1])
    skew[0] /= scale[1]

    skew[1] = vec3.dot(row[0], row[2])
    combine(row[2], row[2], row[0], 1.0, -skew[1])
    skew[2] = vec3.dot(row[1], row[2])
    combine(row[2], row[2], row[1], 1.0, -skew[2])

    scale[2] = vec3.length(row[2])
    vec3.normalize(row[2], row[2])
    skew[1] /= scale[2]
    skew[2] /= scale[2]

    vec3.cross(pdum3, row[1], row[2])
    if (vec3.dot(row[0], pdum3) < 0) {
        for (var i = 0; i < 3; i++) {
            scale[i] *= -1;
            row[i][0] *= -1
            row[i][1] *= -1
            row[i][2] *= -1
        }
    }

    quaternion[0] = 0.5 * Math.sqrt(Math.max(1 + row[0][0] - row[1][1] - row[2][2], 0))
    quaternion[1] = 0.5 * Math.sqrt(Math.max(1 - row[0][0] + row[1][1] - row[2][2], 0))
    quaternion[2] = 0.5 * Math.sqrt(Math.max(1 - row[0][0] - row[1][1] + row[2][2], 0))
    quaternion[3] = 0.5 * Math.sqrt(Math.max(1 + row[0][0] + row[1][1] + row[2][2], 0))

    if (row[2][1] > row[1][2])
        quaternion[0] = -quaternion[0]
    if (row[0][2] > row[2][0])
        quaternion[1] = -quaternion[1]
    if (row[1][0] > row[0][1])
        quaternion[2] = -quaternion[2]

    return {
        success: true,
        translation,
        scale,
        skew,
        perspective,
        quaternion
    }
}

function lerpVec3(out: vec3, a: vec3, b: vec3, amt: number): vec3 {
    for (let i = 0; i < out.length; i++)
        out[i] = a[i] + (b[i] - a[i]) * amt
    return out
}

export function lerp(a: compositionT, b: compositionT, amt: number): compositionT {
    //
    //  @TODO: Add complete set of interpolations!
    //
    const out = requireCompleteCompositionT()
    const a_ = requireCompleteCompositionT(copyCompositionT(a))
    const b_ = requireCompleteCompositionT(copyCompositionT(b))
    
    out.quaternion = quat.lerp(out.quaternion, a_.quaternion, b_.quaternion, amt)
    
    lerpVec3(out.translation, a_.translation, b_.translation, amt)
    lerpVec3(out.scale, a_.scale, b_.scale, amt)

    return out
}

function vec4multMat4(out: any, a: any, m: any) {
    var x = a[0], y = a[1], z = a[2], w = a[3];
    out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
    out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
    out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
    out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
    return out;
}

function mat3from4(out: any, mat4x4: any) {
    out[0][0] = mat4x4[0]
    out[0][1] = mat4x4[1]
    out[0][2] = mat4x4[2]
    
    out[1][0] = mat4x4[4]
    out[1][1] = mat4x4[5]
    out[1][2] = mat4x4[6]

    out[2][0] = mat4x4[8]
    out[2][1] = mat4x4[9]
    out[2][2] = mat4x4[10]
}

function combine(out: any, a: any, b: any, scale1: any, scale2: any) {
    out[0] = a[0] * scale1 + b[0] * scale2
    out[1] = a[1] * scale1 + b[1] * scale2
    out[2] = a[2] * scale1 + b[2] * scale2
}
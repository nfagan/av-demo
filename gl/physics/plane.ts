import { vec4, vec3 } from 'gl-matrix'

export class Plane {

    public equation: vec4
    public origin: vec3
    public normal: vec3

    constructor() {
        this.equation = vec4.create()
        this.origin = vec3.create()
        this.normal = vec3.create()
    }

    public signedDistance(p: vec3): number {
        return vec3.dot(this.normal, p) + this.equation[3]
    }

    public isFrontFacingTo(direction: vec3): boolean {
        return vec3.dot(this.normal, direction) <= 0
    }
    
    public static fromTriangle(out: Plane, p1: vec3, p2: vec3, p3: vec3): Plane {
        const a = vec3.create()
        const b = vec3.create()

        vec3.sub(a, p2, p1)
        vec3.sub(b, p3, p1)

        vec3.cross(a, a, b)

        out.origin = vec3.copy(out.origin, p1)
        out.normal = vec3.normalize(a, a)

        out.equation[0] = a[0]
        out.equation[1] = a[1]
        out.equation[2] = a[2]
        out.equation[3] = -(a[0]*p1[0] + a[1]*p1[1] + a[2]*p1[2])

        return out
    }

}
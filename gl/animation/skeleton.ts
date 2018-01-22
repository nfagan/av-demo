import { mat4, quat, vec3 } from 'gl-matrix'
// import { transform } from '../util/matrix-util';
import * as matrix from '../util/matrix-util'
import * as math from '../math/wgl-math'

export class JointTransform {

    public components: matrix.compositionT
    private transform: mat4

    constructor(components: matrix.compositionT) {
        this.transform = mat4.create()
        this.components = components
        this.updateTransform()
    }

    public updateTransform(): void {
        matrix.recompose(this.transform, this.components)
    }

    public getTransform(): mat4 {
        return this.transform
    }

    public static fromMat4(a: mat4): JointTransform {
        let comp = matrix.decompose(a)
        if (!comp.success) {
            console.error('Failed to decompose joint-transformation matrix.')
            comp = matrix.requireCompleteCompositionT(comp)
        }
        const trans = new JointTransform(comp)
        return trans
    }
}

export class Joint {

    public name: string
    public index: number
    public localTransform: mat4
    public inverseBindTransform: mat4
    public animationTransform: mat4

    public children: Array<Joint> = []

    constructor(name: string, index: number, inverseBindTransform: mat4) {
        this.name = name
        this.index = index
        this.inverseBindTransform = inverseBindTransform
        this.localTransform = mat4.create()
        this.animationTransform = mat4.create()
    }

    public addChild(joint: Joint): void {
        this.children.push(joint)
    }

    public setLocalTransform(transform: mat4): void {
        for (let i = 0; i < transform.length; i++) {
            this.localTransform[i] = transform[i]
        }
    }

    public getAnimationTransform(): mat4 {
        return this.animationTransform
    }

    public applyTransforms(parentT: mat4): void {
        const locT = this.localTransform
        const current = mat4.multiply(locT, parentT, locT)
        for (const child of this.children) {
            child.applyTransforms(current)
        }
        this.updateAnimationTransform()
    }

    private updateAnimationTransform(): void {
        const animTrans = this.animationTransform
        const localTrans = this.localTransform
        const invBindTrans = this.inverseBindTransform
        this.animationTransform = mat4.multiply(animTrans, localTrans, invBindTrans)
    }
}

export class Skeleton {

    public joints: {[key: string]: Joint}
    public root: Joint
    private _size: number
    private rootTransform: mat4

    constructor(root: Joint) {
        this.joints = {}
        this.root = root
        this._size = 0
        this.rootTransform = mat4.create()
        this.assignJoints(this.root)
    }

    public applyTransforms(): void {
        this.root.applyTransforms(this.rootTransform)
    }

    public size(): number {
        return this._size
    }

    public traverse(func: (joint: Joint) => void): void {
        this._traverse(this.root, func)
    }

    private _traverse(node: Joint, func: (joint: Joint) => void): void {
        const children = node.children
        for (const child of children) {
            this._traverse(child, func)
        }
        func(node)
    }

    private assignJoints(node: Joint): void {
        const children = node.children
        for (const child of children) {
            this.assignJoints(child)
        }
        this.joints[node.name] = node
        this._size++
    }

}
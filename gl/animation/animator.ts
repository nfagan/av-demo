import { mat4 } from 'gl-matrix'
import * as arr from '../util/array-util'
import { assert, matrix, time } from '../util/util';
import { JointTransform, Skeleton } from './skeleton'

export class KeyFrames {

    public times: Array<number>
    public transforms: Array<JointTransform>

    constructor(times: Array<number>, transforms: Array<JointTransform>) {
        if (times.length !== transforms.length)
            throw new Error('Animation times and transforms must be arrays of the same length.')
        this.times = times
        this.transforms = transforms
        this.sortByTimes()
    }

    private sortByTimes(): void {
        const index = arr.getSortedIndex(this.times, (a, b) => a[0] - b[0])
        this.times = arr.arrange(this.times, index)
        this.transforms = arr.arrange(this.transforms, index)
    }

    public getLastTime(): number {
        if (this.times.length === 0)
            return NaN
        return this.times[this.times.length-1]
    }

    public getIndexBefore(t: number): number {
        const times = this.times
        let diffs = times.map(time => t - time)
        let mins = arr.min(arr.keep(diffs, arr.test(diffs, x => x > 0)))
        let minInd = arr.find(arr.test(diffs, diff => diff === mins))
        if (minInd.length === 0)
            return this.transforms.length - 1
        if (minInd.length !== 1)
            console.warn('Multiple key frames shared the same time.')
        return minInd[0]
    }

    public getIndexAfter(t: number): number {
        const times = this.times
        let diffs = times.map(time => time - t)
        let mins = arr.min(arr.keep(diffs, arr.test(diffs, x => x >= 0)))
        let minInd = arr.find(arr.test(diffs, diff => diff === mins))
        if (minInd.length === 0)
            return 0
        if (minInd.length !== 1)
            console.warn('Multiple key frames shared the same time.')
        return minInd[0]
    }

    public getPrevIndex(afterIndex: number): number {
        let prev = afterIndex - 1
        return prev >= 0 ? prev : this.times.length - 1
    }

    public getNextIndex(beforeIndex: number): number {
        let next = beforeIndex + 1
        return next > this.times.length-1 ? 0 : next
    }

    public getTransformBefore(t: number): JointTransform {
        return this.transforms[this.getIndexBefore(t)]
    }

    public getTransformAfter(t: number): JointTransform {
        return this.transforms[this.getIndexAfter(t)]
    }
}

export class SkeletalAnimation {
    public sources: {[key: string]: KeyFrames}
    public skeleton: Skeleton
    private timer: time.DeltaTimer

    private currentTime: number
    public duration: number

    private tmpTransform: mat4

    constructor(skeleton: Skeleton, duration: number) {
        this.sources = {}
        this.skeleton = skeleton
        this.timer = new time.DeltaTimer()
        this.timer.setRatio(time.ratios.s())

        this.currentTime = 0
        this.duration = duration

        this.tmpTransform = mat4.create()
    }

    public addSource(name: string, source: KeyFrames): void {
        this.sources[name] = source
    }

    public getSource(name: string): KeyFrames {
        const frames = this.sources[name]
        if (frames === undefined)
            console.warn(`No sources matched the name "${name}".`)
        return frames
    }

    public update(): void {
        this.updateTime()

        const self = this
        const skeleton = this.skeleton
        const timer = this.timer

        skeleton.traverse(joint => {
            const frames = self.getSource(joint.name)
            const currentTime = self.currentTime
			const beforeIdx = frames.getIndexBefore(currentTime)
			const beforeT = frames.times[beforeIdx]
			const before = frames.transforms[beforeIdx]
			const afterIdx = frames.getNextIndex(beforeIdx)
			const afterT = frames.times[afterIdx]
            const after = frames.transforms[afterIdx]
            
            let fracT: number

            if (afterIdx < beforeIdx) { //  if wrapping around to the first animation
                const denom = self.duration - beforeT
                fracT = denom === 0 ? 0 : (currentTime - afterT) / denom
            } else {
                fracT = (currentTime - beforeT) / (afterT - beforeT)
            }

            const interp = matrix.lerp(before.components, after.components, fracT)
            const animTrans = matrix.recompose(self.tmpTransform, interp)
            
			joint.setLocalTransform(animTrans)
        })
        
		skeleton.applyTransforms()
    }

    private updateTime(): void {
        this.timer.update()
        const currentTime = this.timer.delta() + this.currentTime
        this.currentTime = currentTime > this.duration ? 0 : currentTime
    }
}
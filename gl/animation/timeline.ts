import { time } from "../util/util";
import * as easings from './easings'
import { math } from "../web-gl";

export class Clip {
    public duration: number

    private currentTime: number
    private progress: number
    private timer: time.DeltaTimer

    public from: number
    public to: number

    private easing: easings.easingT

    public loop: boolean
    private _ended: boolean

    public onEnd: (a: Clip) => void
    public onStart: (a: Clip) => void

    private _value: number

    constructor(from: number, to: number, duration: number, func: easings.easingT, timer: time.DeltaTimer) {
        this.from = from
        this.to = to

        this.duration = duration
        this.easing = func

        this.timer = timer

        this.currentTime = 0
        this.progress = 0

        this._value = 0

        this.loop = false
        this._ended = false

        this.onEnd = () => {}
        this.onStart = () => {}
    }

    public ended(): boolean {
        return this._ended
    }

    public update(): void {
        if (this.currentTime === 0)
            this.onStart(this)

        this.currentTime += this.timer.delta()

        if (this.currentTime > this.duration) {
            this._ended = true
            this.onEnd(this)
            this.currentTime = this.loop ? 0 : this.duration
        } else {
            this._ended = false
        }

        this.progress = this.currentTime / this.duration

        const t = this.easing(this.progress)

        this._value = t * (this.to - this.from) + this.from
    }

    public value(): number {
        return this._value
    }

    public reset(): void {
        this.currentTime = 0
        this._ended = false
    }
}

export class Timeline {

    private _loop: boolean
    private _playing: boolean
    private _duration: number

    private currentClip: Clip
    private currentClipIndex: number

    private timer: time.DeltaTimer

    private clips: Array<Clip>
    private relativeDurations: Array<number>

    private _current: number
    private _next: number

    private _onUpdate: (a: Timeline) => void

    constructor() {
        this.currentClip = null
        this.currentClipIndex = -1

        this.clips = []
        this.relativeDurations = []

        this.timer = new time.DeltaTimer()
        this.timer.setRatio(time.ratios.s())

        this._loop = false
        this._playing = true

        this._next = NaN

        this._onUpdate = () => {}
    }

    public onUpdate(func: (a: Timeline) => void): Timeline {
        this._onUpdate = func
        return this
    }

    public duration(val: number): Timeline {
        this._duration = val
        for (let i = 0; i < this.clips.length; i++) {
            this.clips[i].duration = this.relativeDurations[i] * val
        }
        return this
    }

    public ratio(val: time.Ratio): Timeline {
        this.timer.setRatio(val)
        return this
    }

    public fromTo(from: number, to: number, relativeDuration: number, ease: easings.easingT = easings.linear): Timeline {
        relativeDuration = math.clampScalar(relativeDuration, 0, 1)

        const clip = new Clip(from, to, relativeDuration * this._duration, ease, this.timer)

        this.clips.push(clip)
        this.relativeDurations.push(relativeDuration)

        if (!this.currentClip)
            this.currentClip = this.nextClip()

        this._next = to

        return this
    }

    public to(_to: number, relativeDuration: number, ease: easings.easingT = easings.linear): Timeline {
        if (isNaN(this._next)) {
            console.warn('A call to fromTo() must preceed a call to to().')
            return this
        }
        return this.fromTo(this._next, _to, relativeDuration, ease)
    }

    public isEmpty(): boolean {
        return this.clips.length === 0
    }

    private nextClip(): Clip {
        if (this.isEmpty())
            return null

        const currIndex = this.currentClipIndex
        let nextIndex = currIndex + 1
        const ended = nextIndex > this.clips.length - 1
        this.currentClipIndex = ended ? 0 : nextIndex

        if (!this._loop && ended)
            return null
        
        return this.clips[this.currentClipIndex]
    }

    public value(): number {
        return this._current
    }

    public loop(): Timeline {
        this._loop = true
        return this
    }

    public pause(): Timeline {
        this._playing = false
        return this
    }

    public play(): Timeline {
        this._playing = true
        return this
    }

    public togglePlay(): Timeline {
        return this._playing ? this.pause() : this.play()
    }

    public trigger(): Timeline {
        if (this.isEmpty())
            return this
        this.play()
        this.currentClip = this.clips[0]
        this.currentClipIndex = 0
        this.currentClip.reset()
        return this
    }

    public update(): void {
        this.timer.update()

        let currentClip = this.currentClip
        
        if (!currentClip)
            return
        
        if (currentClip.ended()) {
            this.currentClip = currentClip = this.nextClip()
            if (!currentClip) {
                return
            }
            currentClip.reset()
        }

        if (this._playing)
            currentClip.update()

        this._current = currentClip.value()
        this._onUpdate(this)
    }
}
//  https://gist.github.com/gre/1650294

export type easingT = (t: number) => number

export function zero(t: number): number {
    return 0.0
}

export function one(t: number): number {
    return 1.0
}

export function linear(t: number): number {
    return t
}

export function easeInQuad(t: number): number {
    return t * t
}

export function easeOutQuad(t: number): number {
    return t * (2-t)
}

export function easeInOutQuad(t: number): number { 
    return t < 0.5 ? 2*t*t : -1 + (4-2*t) * t 
}

export function easeInCubic(t: number): number {
    return t * t * t
}

export function easeOutCubic(t: number): number {
    return (--t) * t * t + 1
}

export function easeInOutCubic(t: number): number {
    return t < 0.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1
}
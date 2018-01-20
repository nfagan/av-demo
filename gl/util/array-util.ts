import * as assert from './assert-util'

export function ensureArray<T>(val: T | Array<T>) : Array<T> {
	if (!Array.isArray(val))
		val = [val]
	return val
}

export function getSortedIndex<T>(data: Array<T>, comparator: (a: [T, number], b: [T, number]) => number): Array<number> {
	const dataWithIndex: Array<[T, number]> = []
	for (let i = 0; i < data.length; i++) {
		dataWithIndex.push([data[i], i])
	}
	dataWithIndex.sort(comparator)
	const index: Array<number> = []
	for (let i = 0; i < dataWithIndex.length; i++) {
		index.push(dataWithIndex[i][1])
	}
	return index
}

export function keep<T>(data: Array<T>, mask: Array<boolean>): Array<T> {
    assert.assertMatchingLengths(data, mask)
    const masked: Array<T> = []
    for (let i = 0; i < mask.length; i++) {
        if (mask[i])
            masked.push(data[i])
    }
    return masked
}

function minMax(data: Array<number>, isMin: boolean): number {
    if (data.length === 0)
        return NaN
    let _val: number
    if (isMin)
        _val = Infinity
    else
        _val = -Infinity
    for (let i = 0; i < data.length; i++) {
        if (isMin && data[i] < _val)
            _val = data[i]
        else if (!isMin && data[i] > _val)
            _val = data[i]
    }
    return _val
}

export function min(data: Array<number>): number {
    return minMax(data, true)
}

export function max(data: Array<number>): number {
    return minMax(data, false)
}

export function test<T>(data: Array<T>, func: (data: T) => boolean): Array<boolean> {
    const res: Array<boolean> = []
    for (let i = 0; i < data.length; i++) {
        res.push(func(data[i]))
    }
    return res
}

export function arrange<T>(data: Array<T>, indices: Array<number>): Array<T> {
    let out: Array<T> = []
    for (let i = 0; i < indices.length; i++) {
        if (indices[i] < 0 || indices[i] > data.length-1)
            throw new Error('Index exceeds array dimensions.')
        out.push(data[indices[i]])
    }
    return out
}

export function find(data: Array<boolean>): Array<number> {
    let indices: Array<number> = []
    for (let i = 0; i < data.length; i++) {
        if (data[i])
            indices.push(i)
    }
    return indices
}
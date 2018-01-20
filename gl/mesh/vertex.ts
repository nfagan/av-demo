import { makeAttributeString, requireAttributeString } from '../shader/attributes'

class Vertex {

	private attributes: {[key: string]: Float32Array} = {}
	private names: Array<string> = []

	constructor() {
		//
	}

	public setPosition(pos: Float32Array): void {
		this.assertValidArraySize(pos, 3, 'position')
		const name = makeAttributeString(requireAttributeString('position'))
		this.setAttribute(name, pos)
	}

	public setUV(uv: Float32Array): void {
		this.assertValidArraySize(uv, 2, 'uv')
		const name = makeAttributeString(requireAttributeString('uv'))
		this.setAttribute(name, uv)
	}

	public setNormal(norm: Float32Array): void {
		this.assertValidArraySize(norm, 3, 'normal')
		const name = makeAttributeString(requireAttributeString('normal'))
		this.setAttribute(name, norm)
	}

	public setWeights(weights: Float32Array): void {
		this.assertValidArraySize(weights, 3, 'weights')
		const name = makeAttributeString(requireAttributeString('joint_weight'))
		this.setAttribute(name, weights)
	}

	public setIndices(indices: Float32Array): void {
		this.assertValidArraySize(indices, 3, 'indices')
		const name = makeAttributeString(requireAttributeString('joint_index'))
		this.setAttribute(name, indices)
	}

	public setAttribute(name: string, value: Float32Array): void {
		let exists = this.hasAttribute(name)
		this.attributes[name] = value
		if (exists)
			return
		this.names.push(name)
		this.names.sort()
	}

	public hasAttribute(name: string): boolean {
		return this.attributes[name] !== undefined
	}

	public sizeof(name: string): number {
		let attr = this.attributes[name]
		return attr === undefined ? 0 : attr.length
	}

	public size(): number {
		let attrNames = this.getAttributeNames()
		let sz = 0
		for (let i = 0; i < attrNames.length; i++) {
			sz += this.sizeof(attrNames[i])
		}
		return sz
	}

	public bytesPerElement(): number {
		return Float32Array.BYTES_PER_ELEMENT
	}

	public getAttributeNames(): Array<string> {
		return this.names
	}

	public getInterleavedData(): Float32Array {
		let data = new Float32Array(this.size())
		let i = 0
		let attrNames = this.getAttributeNames()
		for (let j = 0; j < attrNames.length; j++) {
			let name = attrNames[j]
			let _data = this.attributes[name]
			for (let k = 0; k < _data.length; k++) {
				data[i] = _data[k]
				i++
			}
		}
		return data
	}

	public sizesMatch(b: Vertex): boolean {
		let namesA = this.getAttributeNames()
		let namesB = b.getAttributeNames()
		if (namesA.length !== namesB.length)
			return false
		for (let i = 0; i < namesA.length; i++) {
			let nameA = namesA[i]
			let nameB = namesB[i]
			if (nameA !== nameB)
				return false
			if (this.sizeof(nameA) !== b.sizeof(nameA))
				return false
		}		
		return true
	}

	private assertValidArraySize(arr: Float32Array, size: number, type?: string) {
		if (!type)
			type = '(unspecified)'
		if (arr.length !== size) {
			let message: string = `Expected attribute of type "${type}" to be of size ${size};
				instead was ${arr.length}`
			throw new Error(message)
		}
	}
}

class Topologies {
	public static TRIANGLES: number = 0
	public static TRIANGLE_STRIP: number = 1
}

export { Vertex, Topologies }
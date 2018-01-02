class Vertex {

	private position: Float32Array
	private uv: Float32Array
	private normal: Float32Array
	private positionCount: number = 0
	private uvCount: number = 0
	private normalCount: number = 0

	constructor() {
		this.position = new Float32Array(3)
		this.uv = new Float32Array(2)
		this.normal = new Float32Array(3)
	}

	public setPosition(pos: Float32Array): void {
		this.assertValidArraySize(pos, 3, 'position')
		this.position = pos
		this.positionCount = 3
	}

	public setUV(uv: Float32Array): void {
		this.assertValidArraySize(uv, 2, 'uv')
		this.uv = uv
		this.uvCount = 2
	}

	public setNormal(norm: Float32Array): void {
		this.assertValidArraySize(norm, 3, 'normals')
		this.normal = norm
		this.normalCount = 3
	}

	public sizePosition(): number {
		return this.positionCount
	}

	public sizeUV(): number {
		return this.uvCount
	}

	public sizeNormal(): number {
		return this.normalCount
	}

	public size(): number {
		return this.sizePosition() + this.sizeNormal() + this.sizeUV()
	}

	public bytesPerElement(): number {
		return this.position.BYTES_PER_ELEMENT
	}

	public getInterleavedData(): Float32Array {
		let data: Float32Array = new Float32Array(this.size())
		let i: number = 0
		for (let j: number = 0; j < this.positionCount; j++) {
			data[i] = this.position[j]
			i++
		}
		for (let j: number = 0; j < this.uvCount; j++) {
			data[i] = this.uv[j]
			i++
		}
		for (let j: number = 0; j < this.normalCount; j++) {
			data[i] = this.normal[j]
			i++
		}
		return data
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
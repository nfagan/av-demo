import { Vertex, Topologies } from './vertex'
import { Resource } from './resource'

class Mesh extends Resource {

	private topology: number
	private gl: WebGLRenderingContext
	private vbo: WebGLBuffer
	private ebo: WebGLBuffer
	private isFinalized: boolean = false

	private vertices: Array<Vertex> = []
	private indices: Uint16Array = new Uint16Array(0)

	constructor(gl: WebGLRenderingContext) {
		super()
		this.gl = gl
		this.vbo = this.gl.createBuffer()
		this.ebo = this.gl.createBuffer()
	}

	public addVertex(vertex: Vertex): void {
		this.assertNotFinalized('addVertex')
		if (this.vertices.length !== 0) {
			if (vertex.size() !== this.vertices[0].size())
				throw new Error('All vertices must have consistent numbers of elements.')
		}
		this.vertices.push(vertex)
	}

	public setIndices(indices: Uint16Array): void {
		this.assertNotFinalized('setIndices')
		this.indices = indices
	}

	public setTopology(topology: number): void {
		this.assertNotFinalized('setTopology')
		this.topology = topology
	}

	private getDrawType(): number {
		const gl = this.gl
		if (this.topology === Topologies.TRIANGLES) {
			return gl.TRIANGLES
		} else if (this.topology === Topologies.TRIANGLE_STRIP) {
			return gl.TRIANGLE_STRIP
		} else {
			throw new Error(`Unrecognized topology ${this.topology}`)
		}
	}

	public draw(): void {
		const gl = this.gl
		let nIndices: number = this.indices.length
		let useIndices: boolean = nIndices > 0
		let nVertices: number = this.vertices.length
		let drawType: number = this.getDrawType()
		if (useIndices) {
			gl.drawElements(drawType, nIndices, gl.UNSIGNED_SHORT, 0)
		} else {
			gl.drawArrays(drawType, 0, nVertices)
		}
	}

	public finalize(): void {
		this.assertNotFinalized('finalize')
		if (this.vertices.length === 0)
			return
		this.storeBufferData()
		this.isFinalized = true
	}

	public bind(): void {
		if (this.vertices.length === 0)
			return

		const gl = this.gl
		let vert0 = this.vertices[0]
		let stride: number = vert0.size()
		let bytes: number = vert0.bytesPerElement()
		let offset: number = 0
		let nIndices: number = this.indices.length
		let attrib: number = 0

		gl.bindBuffer(gl.ARRAY_BUFFER, this.vbo)

		//	position
		gl.enableVertexAttribArray(attrib)
		gl.vertexAttribPointer(attrib, 3, gl.FLOAT, false, stride*bytes, offset*bytes)
		offset += 3
		attrib++

		//	uv
		if (vert0.sizeUV() > 0) {
			gl.enableVertexAttribArray(attrib)
			gl.vertexAttribPointer(attrib, 2, gl.FLOAT, false, stride*bytes, offset*bytes)
			offset += 2
			attrib++
		}

		//	normals
		if (vert0.sizeNormal() > 0) {
			gl.enableVertexAttribArray(attrib)
			gl.vertexAttribPointer(attrib, 3, gl.FLOAT, false, stride*bytes, offset*bytes)
			offset += 3
			attrib++
		}

		//	indices
		if (nIndices > 0) {
			gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.ebo)
		}
	}

	public unbind(): void {
		const gl = this.gl
		const indices = this.indices
		gl.bindBuffer(gl.ARRAY_BUFFER, null)
		if (indices.length > 0) {
			gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null)
		}
	}


	private storeBufferData(): void {
		const gl = this.gl
		let data: Float32Array = this.getInterleavedData()
		let nIndices: number = this.indices.length

		//	vbo
		gl.bindBuffer(gl.ARRAY_BUFFER, this.vbo)
		gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW)

		//	ebo
		if (nIndices > 0) {
			gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.ebo)
			gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, gl.STATIC_DRAW)
		}
	}

	private getInterleavedData(): Float32Array {
		const vertices = this.vertices
		let nVertices = vertices.length
		if (nVertices == 0)
			return new Float32Array(0)
		let totalSize: number = nVertices * vertices[0].size()
		let allData: Float32Array = new Float32Array(totalSize)
		let allDataIndex: number = 0
		for (let i: number = 0; i < nVertices; i++) {
			let data: Float32Array = vertices[i].getInterleavedData()
			for (let j: number = 0; j < data.length; j++) {
				allData[allDataIndex] = data[j]
				allDataIndex++
			}
		}
		return allData
	}

	private assertNotFinalized(op?: string): void {
		if (!op)
			op = '(unspecified)'
		if (this.isFinalized)
			throw new Error(`Method / operation "${op}" was called after finalizing mesh.`)
	}
}

export { Mesh }
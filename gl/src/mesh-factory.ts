import { Vertex, Topologies } from './vertex'
import { Mesh } from './mesh'
import { Util } from './util'
import { MeshLibrary } from './mesh-library'

// https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL

class MeshFactory {
	
	public static makeQuad(mesh: Mesh) {

        const float32VertexData: Float32Array = new Float32Array(MeshLibrary.quad.data)

        for (let i: number = 0; i < 6; i++) {
        	let vertex: Vertex = new Vertex()
        	let x, y, z, u, v, nx, ny, nz: number

        	x = float32VertexData[i*8+0]
        	y = float32VertexData[i*8+1]
        	z = float32VertexData[i*8+2]
        	u = float32VertexData[i*8+3]
        	v = float32VertexData[i*8+4]
        	nx = float32VertexData[i*8+5]
        	ny = float32VertexData[i*8+6]
        	nz = float32VertexData[i*8+7]

        	vertex.setPosition(new Float32Array([x, y, z]))
        	vertex.setUV(new Float32Array([u, v]))
        	vertex.setNormal(new Float32Array([nx, ny, nz]))

        	mesh.addVertex(vertex)
        }
        mesh.setTopology(Topologies.TRIANGLES)
	}

	public static makeCube(mesh: Mesh) {

		const float32VertexData: Float32Array = new Float32Array(MeshLibrary.cube.data)

		for (let i: number = 0; i < 24; i++) {
        	let vertex: Vertex = new Vertex()
        	let x, y, z: number

        	x = float32VertexData[i*3+0]
        	y = float32VertexData[i*3+1]
        	z = float32VertexData[i*3+2]

        	vertex.setPosition(new Float32Array([x, y, z]))
        	mesh.addVertex(vertex)
        }

        const indices = new Uint16Array(MeshLibrary.cube.indices)

        mesh.setIndices(indices)
        mesh.setTopology(Topologies.TRIANGLES)
	}

	public static makeTriangle(mesh: Mesh) {

		const float32VertexData: Float32Array = new Float32Array(MeshLibrary.triangle.data)

        for (let i: number = 0; i < 3; i++) {
        	let vertex: Vertex = new Vertex()

        	let x, y, z, u, v, nx, ny, nz: number
        	x = float32VertexData[i*8+0]
        	y = float32VertexData[i*8+1]
        	z = float32VertexData[i*8+2]
        	u = float32VertexData[i*8+3]
        	v = float32VertexData[i*8+4]
        	nx = float32VertexData[i*8+5]
        	ny = float32VertexData[i*8+6]
        	nz = float32VertexData[i*8+7]

        	vertex.setPosition(new Float32Array([x, y, z]))
        	vertex.setUV(new Float32Array([u, v]))
        	vertex.setNormal(new Float32Array([nx, ny, nz]))

        	mesh.addVertex(vertex)
        }
        mesh.setTopology(Topologies.TRIANGLES)
	}

	public static makeSphere(mesh: Mesh, vertexCount: number = 64) {
		if (!Util.isPow2(vertexCount))
			throw new Error('Vertex count must be a power of 2.')

		for (let i: number = 0; i < vertexCount; i++) {
			for (let j: number = 0; j < vertexCount; j++) {
				let xSegment: number = j / (vertexCount-1)
				let ySegment: number = i / (vertexCount-1)

				let xPos: number = Math.cos(xSegment * 2 * Math.PI) * Math.sin(ySegment * Math.PI)
				let yPos: number = Math.cos(ySegment * Math.PI)
				let zPos: number = Math.sin(xSegment * 2 * Math.PI) * Math.sin(ySegment * Math.PI)

				let vertex: Vertex = new Vertex()
				vertex.setPosition(new Float32Array([xPos, yPos, zPos]))
				vertex.setUV(new Float32Array([xSegment, ySegment]))
				vertex.setNormal(new Float32Array([xPos, yPos, zPos]))

				mesh.addVertex(vertex)
			}
		}

		let firstIndex: number = 0
		let nextIndex: number = vertexCount
		let indexStp: number = 0
		let shouldProceed: boolean = true
		let indices: Array<number> = []

		while (shouldProceed) {
			indices.push(firstIndex)
			indices.push(nextIndex)
			indexStp += 2

			shouldProceed = nextIndex != (vertexCount * vertexCount) - 1

			if (indexStp > 0 && (nextIndex+1) % vertexCount == 0 && shouldProceed) {
				indices.push(nextIndex)
				indices.push(firstIndex+1)
				indexStp += 2
			}

			firstIndex++
			nextIndex++
		}

		mesh.setTopology(Topologies.TRIANGLE_STRIP)
		mesh.setIndices(new Uint16Array(indices))

	}

}

export { MeshFactory }
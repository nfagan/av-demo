import { Vertex, Topologies } from './vertex'
import { Mesh } from './mesh'
import { MeshLibrary } from './mesh-library'
import * as math from './wgl-math'

// https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL

type MeshTypes = 'quad' | 'triangle' | 'sphere' | 'cube'

type MeshCreateOptions = {
    finalize: boolean
    vertexCount: number
}

class MeshFactory {

    public static Defaults(): MeshCreateOptions {
        return {
            finalize: false,
            vertexCount: 64
        }
    }

    public static create(gl: WebGLRenderingContext, 
        kind: MeshTypes, inOpts: Object = MeshFactory.Defaults()): Mesh {

        const opts = MeshFactory.Defaults()
        Object.assign(opts, inOpts)

        let mesh: Mesh = new Mesh(gl)
        switch (kind) {
            case 'quad':
                MeshFactory.makeQuad(mesh)
                break
            case 'triangle':
                MeshFactory.makeTriangle(mesh)
                break
            case 'sphere':
                MeshFactory.makeSphere(mesh, opts.vertexCount)
                break
            case 'cube':
                MeshFactory.makeCube(mesh)
                break
        }

        if (opts.finalize)
            mesh.finalize()

        return mesh
    }
	
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

		const float32VertexData: Float32Array = new Float32Array(MeshLibrary.cube2.data)

		for (let i: number = 0; i < 36; i++) {
        	let vertex: Vertex = new Vertex()
        	let x, y, z: number
        	let nx, ny, nz, u, v: number

        	x = float32VertexData[i*8+0]
        	y = float32VertexData[i*8+1]
        	z = float32VertexData[i*8+2]

            // these are flipped because they were copied that way,
            // and im too lazy to change it

        	nx = float32VertexData[i*8+3]
        	ny = float32VertexData[i*8+4]
        	nz = float32VertexData[i*8+5]

        	u = float32VertexData[i*8+6]
        	v = float32VertexData[i*8+7]

        	vertex.setPosition(new Float32Array([x, y, z]))
        	vertex.setNormal(new Float32Array([nx, ny, nz]))
        	vertex.setUV(new Float32Array([u, v]))
        	mesh.addVertex(vertex)
        }

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
		if (!math.isPow2(vertexCount))
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

export { MeshFactory, MeshTypes }
import { Mesh } from '../mesh/mesh'
import { Vertex, Topologies } from '../mesh/vertex'
import * as assert from '../util/assert-util'

// https://github.com/YuqinShao/WebGL-Obj-Loader/blob/master/webgl-obj-loader.js

type ObjT = {
    indices: Array<number>,
    vertices: Array<number>,
    normals: Array<number>,
    uvs: Array<number>
}

export type MeshLoadOpts = {
    finalize: boolean
}

export namespace OBJ {

    export function Defaults(): MeshLoadOpts {
        return { finalize: true }
    }

    export async function loadMesh(gl: WebGLRenderingContext, url: string, opts?: MeshLoadOpts): Promise<Mesh> {
        if (!opts)
            opts = Defaults()
        let loader = new Promise<string>((resolve, reject) => {
            let xhr = new XMLHttpRequest()
            xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    resolve(xhr.responseText)
                } else {
                    reject(xhr)
                }
             }
            }
            xhr.open('GET', url)
            xhr.send()
        })
        return loader.then((data) => {
            return parseMesh(gl, data, opts)
        })
    }

    export function parseMesh(gl: WebGLRenderingContext, objectData: string, opts?: MeshLoadOpts): Mesh {

        if (!opts)
            opts = Defaults()

        let lines: Array<string> = objectData.split('\n')

        let raw: ObjT = {
            indices: [],
            vertices: [],
            normals: [],
            uvs: []
        }

        let packed: ObjT = {
            indices: [],
            vertices: [],
            normals: [],
            uvs: []
        }

        let mesh = new Mesh(gl)

        let index = 0

        for (const line of lines) {
            let isV = line.startsWith('v')
            let isVN = line.startsWith('vn')
            let isVT = line.startsWith('vt')
            let isF = line.startsWith('f')

            if (isV && !isVN && !isVT) {
                rawAppender('vertices', line.split(' '), 4, 'vertex data')
            } else if (isVN) {
                rawAppender('normals', line.split(' '), 4, 'vertex normal data')
            } else if (isVT) {
                rawAppender('uvs', line.split(' '), 3, 'uv data')
            } else if (isF) {

                let _indices = line.split(' ').map(inds => inds.split('/'))

                _indices.map((ind, i) => {
                    let msg = 'Face data were formatted incorrectly'
                    if (i == 0 && ind.length !== 1)
                        throw new Error(msg)
                    if (i > 0 && ind.length !== 3)
                        throw new Error(msg)
                })

                _indices.shift()

                let parsedIndices = _indices.map(ind => parseIndices(ind))

                packedAppender(parsedIndices, [0, 1, 2])

                for (let i = 3; i < parsedIndices.length; ++i) {
                    packedAppender(parsedIndices, [i-3, i-1, i])
                }
            }
        }

        mesh.setIndices(new Uint16Array(packed.indices))
        mesh.setTopology(Topologies.TRIANGLES)

        if (opts.finalize) {
            mesh.finalize()
        }

        return mesh

        //
        //    helpers
        //

        function parseAndValidate(value: string, func: (val: string) => number, alias: string): number {
            let res = func(value)
            if (isNaN(res))
                throw new Error(`Error parsing "${alias}": value was NaN.`)
            return res
        }

        function rawAppender(name: keyof ObjT, values: Array<string>, N: number, alias: string) {
            assert.assertNValues(values, N, alias)
            for (let i = 1; i < N; i++) {
                raw[name].push(parseAndValidate(values[i], parseFloat, alias))
            }
        }

        function vertexAppender(vi: number, ni: number, ui: number) {
            let vertex = new Vertex()

            let x = raw.vertices[(vi-1)*3+0]
            let y = raw.vertices[(vi-1)*3+1]
            let z = raw.vertices[(vi-1)*3+2]

            let nx = raw.normals[(ni-1)*3+0]
            let ny = raw.normals[(ni-1)*3+1]
            let nz = raw.normals[(ni-1)*3+2]

            vertex.setPosition(new Float32Array([x, y, z]))
            vertex.setNormal(new Float32Array([nx, ny, nz]))

            packed.indices.push(index++)

            if (ui === null) {
                vertex.setUV(new Float32Array([0, 0]))
                mesh.addVertex(vertex)
                return
            }

            let u = raw.uvs[(ui-1)*2+0]
            let v = raw.uvs[(ui-1)*2+1]

            vertex.setUV(new Float32Array([u, v]))

            mesh.addVertex(vertex)
        }

        function packedAppender(inds: Array<Array<number>>, fragInds: Array<number>) {
            assert.assertNValues(fragInds, 3, 'triangles')
            for (let i = 0; i < 3; i++) {
                let ind = fragInds[i]
                vertexAppender(inds[ind][0], inds[ind][2], inds[ind][1])
            }
        }

        function parseIndices(inds: Array<string>): Array<number> {
            let vertIndex = parseAndValidate(inds[0], parseInt, 'vertex index')
            let normIndex = parseAndValidate(inds[2], parseInt, 'normal index')
            let uvIndex = null
            if (inds[1] !== '')
                uvIndex = parseAndValidate(inds[1], parseInt, 'uv index')
            return [vertIndex, uvIndex, normIndex]
        }

    }
}
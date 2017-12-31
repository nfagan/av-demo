import { Mesh } from './mesh'
import { Vertex, Topologies } from './vertex'

// https://github.com/YuqinShao/WebGL-Obj-Loader/blob/master/webgl-obj-loader.js

export namespace OBJ {

    export async function loadMesh(gl: WebGLRenderingContext, url: string): Promise<Mesh> {
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
            return parseMesh(gl, data)
        })
    }

    export function parseMesh(gl: WebGLRenderingContext, objectData: string): Mesh {

        var verts = [];
        var vertNormals = [];
        var textures = [];
        
        var packed: {
            verts: Array<string>,
            norms: Array<string>,
            textures: Array<string>,
            hashindices: any,
            indices: Array<any>,
            index: number
        } = {
            verts: [],
            norms: [],
            textures: [],
            hashindices: [],
            indices: [],
            index: 0
        }
        
        // array of lines separated by the newline
        var lines: Array<string> = objectData.split( '\n' )
        for( var i=0; i<lines.length; i++ ){
          // if this is a vertex
          if( lines[ i ].startsWith( 'v ' ) ){
            let line = lines[ i ].slice( 2 ).split( " " )
            verts.push( line[ 0 ] );
            verts.push( line[ 1 ] );
            verts.push( line[ 2 ] );
          }
          // if this is a vertex normal
          else if( lines[ i ].startsWith( 'vn' ) ){
            let line = lines[ i ].slice( 3 ).split( " " )
            vertNormals.push( line[ 0 ] );
            vertNormals.push( line[ 1 ] );
            vertNormals.push( line[ 2 ] );
          }
          // if this is a texture
          else if( lines[ i ].startsWith( 'vt' ) ){
            let line = lines[ i ].slice( 3 ).split( " " )
            textures.push( line[ 0 ] );
            textures.push( line[ 1 ] );
          }
          // if this is a face
          else if( lines[ i ].startsWith( 'f ' ) ){
            let line = lines[ i ].slice( 2 ).split( " " );
            var quad = false;
            for(var j=0; j<line.length; j++){
                // Triangulating quads
                // quad: 'f v0/t0/vn0 v1/t1/vn1 v2/t2/vn2 v3/t3/vn3/'
                // corresponding triangles:
                //      'f v0/t0/vn0 v1/t1/vn1 v2/t2/vn2'
                //      'f v2/t2/vn2 v3/t3/vn3 v0/t0/vn0'
                if(j == 3 && !quad) {
                    // add v2/t2/vn2 in again before continuing to 3
                    j = 2;
                    quad = true;
                }

                if( line[ j ] in packed.hashindices ){
                    packed.indices.push( packed.hashindices[ line[ j ] ] );
                }
                else{
                    let face = line[ j ].split( '/' )
                    let i0 = parseInt(face[0])
                    let i1 = parseInt(face[1])
                    let i2 = parseInt(face[2])
                    // vertex position
                    packed.verts.push( verts[ (i0 - 1) * 3 + 0 ] );
                    packed.verts.push( verts[ (i0 - 1) * 3 + 1 ] );
                    packed.verts.push( verts[ (i0 - 1) * 3 + 2 ] );
                    // vertex textures
                    packed.textures.push( textures[ (i1 - 1) * 2 + 0 ] );
                    packed.textures.push( textures[ (i1 - 1) * 2 + 1 ] );
                    // vertex normals
                    packed.norms.push( vertNormals[ (i2 - 1) * 3 + 0 ] );
                    packed.norms.push( vertNormals[ (i2 - 1) * 3 + 1 ] );
                    packed.norms.push( vertNormals[ (i2 - 1) * 3 + 2 ] );
                    // add the newly created vertex to the list of indices
                    packed.hashindices[ line[ j ] ] = packed.index;
                    packed.indices.push( packed.index );
                    // increment the counter
                    packed.index += 1;
                }

                if(j == 3 && quad) {
                    // add v0/t0/vn0 onto the second triangle
                    packed.indices.push( packed.hashindices[ line[ 0 ] ] );
                }
            }
          }
        }

        let nVerts: number = packed.verts.length
        let nNorms: number = packed.norms.length
        let nTex: number = packed.textures.length

        if (nVerts % 3 !== 0) {
            throw new Error('Error parsing object: vertex data did not have a multiple of 3 elements.')
        }

        if (nVerts !== nNorms) {
            throw new Error('Error parsing object: vertex data did not match number of normals data.')
        }

        if (nTex/2 !== nVerts/3) {
            throw new Error('Error parsing object: texture data did not match number of vertex elements.')
        }

        let nFragments = nVerts/3
        let vertices_ = packed.verts.map(vert => parseFloat(vert))
        let textures_ = packed.textures.map(tex => parseFloat(tex))
        let normals_ = packed.norms.map(norm => parseFloat(norm))

        let mesh = new Mesh(gl)

        for (let i: number = 0; i < nFragments; i++) {
            let x = vertices_[i*3+0]
            let y = vertices_[i*3+1]
            let z = vertices_[i*3+2]

            let nx = normals_[i*3+0]
            let ny = normals_[i*3+1]
            let nz = normals_[i*3+2]

            let u = textures_[i*2+0]
            let v = textures_[i*2+1]

            let vert = new Vertex()
            vert.setPosition(new Float32Array([x, y, z]))
            vert.setNormal(new Float32Array([nx, ny, nz]))
            vert.setUV(new Float32Array([u, v]))

            mesh.addVertex(vert)
        }

        mesh.setIndices(new Uint16Array(packed.indices))
        mesh.setTopology(Topologies.TRIANGLES)

        return mesh
    }
}
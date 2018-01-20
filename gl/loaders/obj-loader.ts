import { Mesh } from '../mesh/mesh'
import { text } from './text-loader'
import { obj } from '../parsers/obj'

export namespace OBJ {
    export async function loadMesh(gl: WebGLRenderingContext, url: string): Promise<Mesh> {
        return text.load(url).then((data) => {
            return obj(gl, data)
        })
    }
}
import * as Texture from '../texture/texture'
import { image } from './image-loader'

export namespace TEX {

	export async function load2D(gl: WebGLRenderingContext, url: string, opts?: Texture.TextureOpts): Promise<Texture.Texture> {
        return image.load(url).then(data => parse2D(gl, data, opts))
    }

    function parse2D(gl: WebGLRenderingContext, data: HTMLImageElement, opts?: Texture.TextureOpts): Texture.Texture {
    	return Texture.Tex2D(gl, data, opts)
    }

}
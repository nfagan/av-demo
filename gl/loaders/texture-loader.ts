import * as Texture from '../texture/texture'

export namespace TEX {

	export async function load2D(gl: WebGLRenderingContext, url: string, opts?: Texture.TextureOpts): Promise<Texture.Texture> {
        let loader = new Promise<HTMLImageElement>((resolve, reject) => {
    		let img = document.createElement('img')

    		img.onload = (e) => {
    			window.URL.revokeObjectURL(img.src)
    			resolve(img)
    		}

    		img.onerror = (e) => {
    			reject(e)
    		}

    		img.src = url
        })
        return loader.then((data) => {
            return parse2D(gl, data, opts)
        })
    }

    function parse2D(gl: WebGLRenderingContext, data: HTMLImageElement, opts?: Texture.TextureOpts): Texture.Texture {
    	return Texture.Tex2D(gl, data, opts)
    }

}
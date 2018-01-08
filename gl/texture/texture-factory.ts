import { Texture, TextureOpts, TextureDataTypes } from './texture'

export namespace Factory {

	export function makeShadows(gl: WebGLRenderingContext, sz: number): TextureOpts {
		let opts = TextureOpts.Default2D(gl)
		opts.width = sz
		opts.height = sz
		opts.internalFormat = gl.DEPTH_COMPONENT
		opts.sourceFormat = gl.DEPTH_COMPONENT
		opts.dataType = gl.UNSIGNED_SHORT
		opts.generateMips = false
		opts.wrapS = gl.CLAMP_TO_EDGE
		opts.wrapT = gl.CLAMP_TO_EDGE
		opts.magFilter = gl.NEAREST
		opts.minFilter = gl.NEAREST
		return opts
	}

	export function makeVolume(gl: WebGLRenderingContext, w: number, h: number): TextureOpts {
		let opts = TextureOpts.Default2D(gl)
		opts.width = w
		opts.height = h
		opts.dataType = gl.UNSIGNED_BYTE
		opts.generateMips = false
		opts.wrapS = gl.CLAMP_TO_EDGE
		opts.wrapT = gl.CLAMP_TO_EDGE
		opts.magFilter = gl.LINEAR
		return opts
	}

	export function makeImage(gl: WebGLRenderingContext, data: HTMLImageElement): TextureOpts {
		let opts = TextureOpts.Default2D(gl)
		opts.width = data.width
		opts.height = data.height
		return opts
	}
}
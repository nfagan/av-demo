import * as defaults from '../util/default-util'
import * as math from '../math/wgl-math'
import { Resource } from '../common/resource'

export type TextureDataTypes = HTMLImageElement | Uint8Array | null

export class TextureOpts {
	level: number
	width: number
	height: number
	border: number
	internalFormat: number
	sourceFormat: number
	type: number
	dataType: number
	wrapS: number
	wrapT: number
	generateMips: boolean
	minFilter: number
	magFilter: number

	public static Default2D(gl: WebGLRenderingContext): TextureOpts {
		let opts = new TextureOpts()
		opts.level = 0
		opts.height = 0
		opts.border = 0
		opts.internalFormat = gl.RGBA
		opts.sourceFormat = gl.RGBA
		opts.type = gl.TEXTURE_2D
		opts.dataType = gl.UNSIGNED_BYTE
		opts.wrapS = gl.CLAMP_TO_EDGE
		opts.wrapT = gl.CLAMP_TO_EDGE
		opts.minFilter = gl.LINEAR
		opts.magFilter = gl.LINEAR
		opts.generateMips = false
		return opts
	}
}

export function Tex2D(gl: WebGLRenderingContext, data: TextureDataTypes, opts?: TextureOpts): Texture {
	if (!opts) {
		opts = TextureOpts.Default2D(gl)
		if (data && data instanceof HTMLImageElement) {
			opts.width = data.width
			opts.height = data.height
		}
	}
	return new Texture(gl, data, opts)
}

export class Texture extends Resource {

	private gl: WebGLRenderingContext
	private opts: TextureOpts
	public handle: WebGLTexture
	private _exists: boolean
	private _bound: boolean
	public data: TextureDataTypes

	public index: number

	constructor(gl: WebGLRenderingContext, data: TextureDataTypes, opts: TextureOpts) {
		super()
		this.gl = gl
		this.opts = opts
		this.data = data
		this._exists = false
		this._bound = false
		this.create()
	}

	private configure2D(tex: WebGLTexture): void {

		const data = this.data
		const opts = this.opts
		const gl = this.gl

		if (data === null || data instanceof Uint8Array) {
			this.configure2DData(<any>data, tex)
		} else {
			this.configure2DImage(data, tex)
		}

		if (opts.generateMips && math.isPow2(opts.width) && math.isPow2(opts.height)) {
			gl.generateMipmap(gl.TEXTURE_2D)
		} else {
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, opts.wrapS)
	    	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, opts.wrapT)
	    	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, opts.minFilter)
	    }
	}

	private configure2DImage(data: HTMLImageElement, tex: WebGLTexture): void {
		const opts = this.opts
		const gl = this.gl
		gl.texImage2D(gl.TEXTURE_2D, opts.level, opts.internalFormat, 
			opts.sourceFormat, opts.dataType, data)
		opts.width = data.width
		opts.height = data.height
	}

	private configure2DData(data: Uint8Array | null, tex: WebGLTexture): void {
		const opts = this.opts
		const gl = this.gl
		gl.texImage2D(gl.TEXTURE_2D, opts.level, opts.internalFormat,
                opts.width, opts.height, opts.border,
                opts.sourceFormat, opts.dataType, data)
	}

	public create(): WebGLTexture {
		this.assertDoesNotExist('create')

		const gl = this.gl
		const opts = this.opts
		const tex = gl.createTexture()

		gl.bindTexture(opts.type, tex)

		if (opts.type === gl.TEXTURE_2D) {
			this.configure2D(tex)
		} else {
			throw new Error(`Unrecognized texture type.`)
		}

		gl.bindTexture(opts.type, null)

		this._exists = true
		this.handle = tex
		return this.handle
	}

	public exists(): boolean {
		return this._exists
	}

	public isBound(): boolean {
		return this._bound
	}

	public clone(): Texture {
		//
		//	@TODO: Fix cloning
		//
		throw new Error('Cloning not yet implemented')
	}

	public bind(): void {
		this.assertExists('bind')
		this.gl.bindTexture(this.opts.type, this.handle)
		this._bound = true
	}

	public unbind(): void {
		this.assertExists('unbind')
		this.gl.bindTexture(this.opts.type, null)
		this._bound = false
	}

	public dispose(): void {
		const gl = this.gl
		if (!this.exists()) {
			console.warn('Attempted to dispose of a texture before creating it.')
			return
		}
		gl.deleteTexture(this.handle)
		this._exists = false
	}

	private assertExists(op: string): void {
		if (!this.exists())
			throw new Error(`Operation / method "${op}" requires a call to create().`)
	}
	private assertDoesNotExist(op: string): void {
		if (this.exists())
			throw new Error(`Operation / method "${op}" cannot be called once the texture exists.`)
	}

}
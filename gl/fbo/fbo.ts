import * as texture from '../texture/texture'
import { Resource } from '../common/resource'

export class FBO extends Resource {

	private gl: WebGLRenderingContext
	private handle: WebGLFramebuffer
	private _isBound: boolean

	private textures: { [kind: number]: texture.Texture }

	constructor(gl: WebGLRenderingContext) {
		super()
		this.gl = gl
		this.handle = gl.createFramebuffer()
		this.textures = {}
	}

	public bind(): void {
		this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.handle)
		this._isBound = true
	}

	public unbind(): void {
		this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null)
		this._isBound = false
	}

	public isBound(): boolean {
		return this._isBound
	}

	public checkStatus(): boolean {
		const gl = this.gl
		let status = gl.checkFramebufferStatus(gl.FRAMEBUFFER)

		switch (status) {
			case gl.FRAMEBUFFER_COMPLETE:
				break
			case gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
				console.warn('FRAMEBUFFER_INCOMPLETE_ATTACHMENT')
				break
			case gl.FRAMEBUFFER_UNSUPPORTED:
				console.warn('FRAMEBUFFER_UNSUPPORTED')
				break
			case gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
				console.warn('FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT')
				break
			case gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
				console.warn('FRAMEBUFFER_INCOMPLETE_DIMENSIONS')
			default:
				console.warn(`(unspecified): ${status}`)
				break
		}

		return status === gl.FRAMEBUFFER_COMPLETE
	}

	public getTexture(kind: number): texture.Texture {
		let tex = this.textures[kind]
		if (tex === undefined) {
			console.warn(`Requested non-attached texture: "${kind}".`)
			return null
		}
		return tex
	}

	public attach(kind: number, texture: texture.Texture) {
		this.assertBound('bind')
		const gl = this.gl
		gl.framebufferTexture2D(gl.FRAMEBUFFER, kind, gl.TEXTURE_2D, texture.handle, 0)
		this.textures[kind] = texture
	}

	private assertBound(op: string): void {
		if (!this._isBound)
			throw new Error(`Operation / method "${op}" requires that the FBO be bound first.`)
	}

}
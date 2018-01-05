import * as wgl from '../gl/web-gl'
import * as waud from '../aud/web-audio'
import { mat4, quat, vec3, vec4, glMatrix } from 'gl-matrix'

type FBO = { fbo: WebGLFramebuffer, texture: wgl.texture.Texture }

function checkFBO(gl: WebGLRenderingContext): void {

	let status = gl.checkFramebufferStatus(gl.FRAMEBUFFER)

	switch (status) {
		case gl.FRAMEBUFFER_COMPLETE:
			break
		case gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
			console.log('FRAMEBUFFER_INCOMPLETE_ATTACHMENT')
			break
		case gl.FRAMEBUFFER_UNSUPPORTED:
			console.log('FRAMEBUFFER_UNSUPPORTED')
			break
		case gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
			console.log('FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT')
			break
		case gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
			console.log('FRAMEBUFFER_INCOMPLETE_DIMENSIONS')
		default:
			console.log('unspecified')
			console.log(status)
			break
	}

	if (status !== gl.FRAMEBUFFER_COMPLETE) {
		throw new Error('incomplete frame buffer')
	}

}

function configureFBO(gl: WebGLRenderingContext, w: number, h: number): FBO {

	const opts = wgl.texture.TextureOpts.Default2D(gl)

	opts.width = w
	opts.height = h
	opts.dataType = gl.UNSIGNED_BYTE
	opts.generateMips = false
	opts.wrapS = gl.CLAMP_TO_EDGE
	opts.wrapT = gl.CLAMP_TO_EDGE
	opts.magFilter = gl.LINEAR

	const tex = wgl.texture.Tex2D(gl, null, opts)

	const fbo = gl.createFramebuffer()
	const attach = gl.COLOR_ATTACHMENT0

	gl.bindFramebuffer(gl.FRAMEBUFFER, fbo)
	gl.framebufferTexture2D(gl.FRAMEBUFFER, attach, gl.TEXTURE_2D, tex.handle, 0)

	checkFBO(gl)

	gl.bindFramebuffer(gl.FRAMEBUFFER, null)

	return {fbo, texture: tex}
}

function configureShadowFBO(gl: WebGLRenderingContext, sz: number): FBO {
	const depthOpts = wgl.texture.TextureOpts.Default2D(gl)
	const colorOpts = wgl.texture.TextureOpts.Default2D(gl)

	var ext = gl.getExtension('WEBGL_depth_texture')

	if (!ext) throw new Error('Depth textures are no supported.')

	depthOpts.width = sz
	depthOpts.height = sz
	depthOpts.internalFormat = gl.DEPTH_COMPONENT
	depthOpts.sourceFormat = gl.DEPTH_COMPONENT
	depthOpts.dataType = gl.UNSIGNED_SHORT
	depthOpts.generateMips = false
	depthOpts.wrapS = gl.CLAMP_TO_EDGE
	depthOpts.wrapT = gl.CLAMP_TO_EDGE
	depthOpts.magFilter = gl.NEAREST
	depthOpts.minFilter = gl.NEAREST

	colorOpts.width = sz
	colorOpts.height = sz

	const depthTex = wgl.texture.Tex2D(gl, null, depthOpts)
	const colorTex = wgl.texture.Tex2D(gl, null, colorOpts)

	const fbo = gl.createFramebuffer()

	gl.bindFramebuffer(gl.FRAMEBUFFER, fbo)
	gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, depthTex.handle, 0)
	gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, colorTex.handle, 0)

	checkFBO(gl)

	gl.bindFramebuffer(gl.FRAMEBUFFER, null)

	return {fbo, texture: depthTex}
}

export async function main() {

	document.body.style.padding = '0'
	document.body.style.margin = '0'
	document.body.style.position = 'fixed'

	const keyboard = new wgl.Input.Keyboard()
	const canvas = new wgl.Canvas()
	const canvasElement = canvas.element

	const gl: WebGLRenderingContext = canvasElement.getContext('webgl')

	if (!gl) 
		throw new Error('Unable to initialize GL context.')

	const scene = new wgl.Scene(gl)
	const renderer = new wgl.renderers.functional(gl)
	const camera = new wgl.Camera()

	const mouseInput = new wgl.Input.PointerLock(canvas.element)
	const touchInput = new wgl.Input.Touch()
	const keyboardMoveControls = new wgl.Controls.Movement.Keyboard(keyboard, camera, 5.0)
	const touchMoveControls = new wgl.Controls.Movement.Touch(touchInput, camera, 10.0)

	let rotationControls: any
	if (wgl.capabilities.hasPointerLock()) {
		rotationControls = new wgl.Controls.Orbit.Orbit2(mouseInput, camera)
	} else {
		rotationControls = new wgl.Controls.Orbit.Orbit(touchInput, camera)
	}

	const genShadowProg = wgl.ShaderFactory.Create(gl, wgl.ShaderLibrary.GenShadows1)
	const prog = wgl.ShaderFactory.Create(gl, wgl.ShaderLibrary.UseShadows1)
	const basicProg = wgl.ShaderFactory.Create(gl, wgl.ShaderLibrary.Basic)
	const postProg = wgl.ShaderFactory.Create(gl, wgl.ShaderLibrary.Volume)

	const sphere = wgl.MeshFactory.create(gl, 'sphere')
	const quad = wgl.MeshFactory.create(gl, 'quad')
	const mat = wgl.Material.Material.Physical(gl)
	const sphereModel = new wgl.Model(gl, prog, sphere, mat)
	const model2 = new wgl.Model(gl, prog, wgl.MeshFactory.create(gl, 'cube'), mat.clone())
	const light = wgl.Light.Light.Point(gl)
	const lightSphereModel = new wgl.Model(gl, basicProg, sphere, mat.clone())
	const planeModel = new wgl.Model(gl, prog, wgl.MeshFactory.create(gl, 'quad'), mat.clone())

	const fboW = canvas.width*canvas.dpr/4
	const fboH = canvas.height*canvas.dpr/4
	const fbo = configureFBO(gl, fboW, fboH)

	const shadowSz = 1024
	const shadowFbo = configureShadowFBO(gl, shadowSz)

	renderer.setAspect(canvas.aspect)
	renderer.setNearFar(0.1, 1000)
	renderer.setClearColor([0, 0, 0])
	
	scene.add([sphereModel, model2, lightSphereModel, planeModel, light])

	const lightColor = [1, 1, 1]
	const lightPosition = [5, 5, 10]
	const sphereColor = [1, 0, 0]
	const spherePosition = [0, 0, 0]
	const lightSpherePosition = lightPosition

	light.getAttribute('position').setValue(lightPosition)
	light.getAttribute('color').setValue(lightColor)
	sphereModel.setPosition(spherePosition)
	sphereModel.material.getAttribute('albedo').setValue(sphereColor)
	lightSphereModel.setPosition(lightSpherePosition)
	lightSphereModel.material.getAttribute('albedo').setValue(lightColor)
	model2.material.getAttribute('albedo').setValue(sphereColor)
	model2.setPosition([2, -2, -2])
	planeModel.setPosition([0, -5, 0])
	planeModel.setRotation([90, 0, 0])
	planeModel.setScale(10)
	planeModel.material.getAttribute('albedo').setValue(sphereColor)

	camera.setPosition([0, 0, -10])
	camera.setPitch(5)
	camera.setYaw(80)

	let addRays = true

	canvas.element.onclick = () => addRays = !addRays

	const animate = () => {

		keyboardMoveControls.update()
		rotationControls.update()

		moveCube()

		//	shadows

		depthLightPass()

		//	volumetrics

		blackPass()
		regularPass()

		if (addRays)
			blendPass()

		window.requestAnimationFrame(animate)
	}

	animate()

	function moveCube(): void {
		let pos = model2.getPosition()
		let amt = 0.1
		if (keyboard.isDown(wgl.Input.Keys.Left)) pos[0] += amt
		if (keyboard.isDown(wgl.Input.Keys.Right)) pos[0] -= amt
		if (keyboard.isDown(wgl.Input.Keys.Down)) 
			if (keyboard.isDown(wgl.Input.Keys.shift))
				pos[2] -= amt
			else
				pos[1] -= amt
		if (keyboard.isDown(wgl.Input.Keys.Up)) 
			if (keyboard.isDown(wgl.Input.Keys.shift))
				pos[2] += amt
			else
				pos[1] += amt
	}


	//	shadows

	function depthLightPass() {

		let transforms = getLightSpaceProjView()

		const models = scene.models

		gl.bindFramebuffer(gl.FRAMEBUFFER, shadowFbo.fbo)

		gl.clear(gl.DEPTH_BUFFER_BIT)

		gl.viewport(0, 0, shadowSz, shadowSz)

		renderer.conditionalBindProgram(genShadowProg)
		genShadowProg.setUniform('view', transforms.view)
		genShadowProg.setUniform('projection', transforms.proj)

		for (let model of models) {
			renderer.conditionalBindMesh(genShadowProg, model.mesh)
			genShadowProg.setUniform('model', model.getWorldMatrix())
			model.mesh.draw()
		}

		gl.bindFramebuffer(gl.FRAMEBUFFER, null)

		gl.viewport(0, 0, canvas.width*canvas.dpr, canvas.height*canvas.dpr)

	}

	function getLightSpaceProjView(): {proj: mat4, view: mat4} {
		const rvec = wgl.util.vector.requireVec3
		const origin = vec3.fromValues(0, 0, 0)
		const up = vec3.fromValues(0, 1, 0)
		// const lightSpaceProj = mat4.ortho(mat4.create(), -10, 10, -10, 10, 1, 7.5)
		const lightSpaceProj = mat4.ortho(mat4.create(), -10, 10, -10, 10, 1, 200)
		const lightSpaceView = wgl.math.lookAt(mat4.create(), rvec(lightPosition), origin, up)
		return {view: lightSpaceView, proj: lightSpaceProj}
	}


	//	volumes

	function regularPass() {

		const transforms = getLightSpaceProjView()
		const trans = mat4.multiply(mat4.create(), transforms.proj, transforms.view)

		renderer.conditionalBindProgram(prog)

		shadowFbo.texture.bind()

		prog.setUniform('shadow_depth_map', shadowFbo.texture)
		prog.setUniform('shadow_size', shadowSz)
		prog.setUniform('light_space_transform', trans)

		renderer.render(scene, camera)

		shadowFbo.texture.unbind()
	}

	function blackPass() {
		gl.bindFramebuffer(gl.FRAMEBUFFER, fbo.fbo)
		gl.viewport(0, 0, fboW, fboH)

		sphereModel.program = basicProg
		planeModel.program = basicProg
		model2.program = basicProg
		sphereModel.material.getAttribute('albedo').setValue([0, 0, 0])

		//	make sure the light is drawn first
		lightSphereModel.order = -1
		scene.sortModels(wgl.Model.compareOrder)

		renderer.render(scene, camera)

		sphereModel.program = prog
		planeModel.program = prog
		model2.program = prog
		sphereModel.material.getAttribute('albedo').setValue(sphereColor)
		lightSphereModel.material.getAttribute('albedo').setValue(lightColor)

		gl.bindFramebuffer(gl.FRAMEBUFFER, null)

		gl.viewport(0, 0, canvas.width * canvas.dpr, canvas.height * canvas.dpr)
	}

	function blendPass() {
		gl.enable(gl.BLEND)
		gl.blendFunc(gl.SRC_ALPHA, gl.ONE)

		renderer.conditionalBindProgram(postProg)
		renderer.conditionalBindMesh(postProg, quad)

		fbo.texture.index = 0

		let pos = getScreenSpacePosition(lightPosition, camera.getViewMatrix(), renderer.getProjectionMatrix())

		postProg.setUniform('uScreenSpaceSunPos', pos)
		postProg.setUniform('uDensity', 1.0)
		postProg.setUniform('uWeight', 0.008)
		postProg.setUniform('uDecay', 1.0)
		postProg.setUniform('uExposure', 1.0)
		postProg.seti('uNumSamples', 25)
		postProg.setUniform('uOcclusionTexture', fbo.texture)

		fbo.texture.bind()

		quad.bind(postProg)
		quad.draw()
		quad.unbind()

		fbo.texture.unbind()

		gl.disable(gl.BLEND)
	}

}

function getScreenSpacePosition(pos: wgl.util.types.vec3Convertible, view: mat4, proj: mat4): vec3 {

	pos = wgl.util.vector.requireVec3(pos)

    var v = vec4.fromValues(pos[0], pos[1], pos[2], 1.0)
    vec4.transformMat4(v, v, view)
    vec4.transformMat4(v, v, proj)

    // perspective division
    vec4.scale(v, v, 1.0 / v[3] )

    // scale (x,y) from range [-1,+1] to range [0,+1]
    vec4.add(v, v, [1.0, 1.0, 0.0, 0.0] )
    vec4.scale(v, v, 0.5)

    return vec3.fromValues(v[0], v[1], 0)
}


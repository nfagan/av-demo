import * as wgl from '../gl/web-gl'
import { mat4, quat, vec3 } from 'gl-matrix'
import * as demo from './demo-util'

export async function main(glInit: demo.initReturnT): Promise<{animationFrameId: number}> {

	const gl = glInit.gl
	const scene = glInit.scene
	const canvas = glInit.canvas
	const keyboard = glInit.keyboard
	const canvasElement = canvas.element
	const renderer = glInit.renderer
	const camera = glInit.camera
	const stats = glInit.stats
	const touchInput = glInit.touchInput
	const mouseInput = glInit.mouseInput
	const keyboardMoveControls = glInit.keyboardMoveControls
	const touchMoveControls = glInit.touchMoveControls
	const rotationControls = glInit.rotationControls

	renderer.reset()
	scene.clear()

	touchMoveControls.setSpeed(30.0)
	keyboardMoveControls.setSpeed(10.0)

	const tex0 = await wgl.Loaders.TEX.load2D(gl, '/tex/neb.png')
	const skyTex = await wgl.Loaders.TEX.load2D(gl, '/tex/skys:sky3.png')

	const sphere = wgl.MeshFactory.create(gl, 'sphere')
	const mat = wgl.Material.Physical(gl)
	const sphereModel = new wgl.Model(gl, sphere, mat)
	const light = wgl.Light.Point(gl)
	const lightModel = new wgl.Model(gl, sphere, mat.clone())

	renderer.setAspect(canvas.aspect)
	renderer.setNearFar(0.1, 1000)
	
	scene.add([sphereModel, light, lightModel])

	const lightPosition = [5, 5, 5]
	const lightColor = [1, 0, 1]
	const sphereColor = [1, 1, 1]
	const spherePosition = [0, 0, 0]

	light.getAttribute('position').setValue(lightPosition)
	light.getAttribute('color').setValue(lightColor)

	sphereModel.setPosition(spherePosition)
	sphereModel.material.getAttribute('albedo').setValue(skyTex)
	sphereModel.material.getAttribute('metallic').setValue(tex0.clone())

	lightModel.material.getAttribute('albedo').setValue(lightColor)
	lightModel.setPosition(lightPosition)
	lightModel.receivesLight = false

	camera.setPosition([0, 5, 20])

	//
	//	sky dome
	//

	const farPlane = 1000
	
	const sky = new wgl.Model(gl, sphere, mat.clone())

	const sun = wgl.Light.Directional(gl)
	const sunHelper = new wgl.Model(gl, sphere, mat.clone())
	const sunDir = [-10, -50, -10]
	const sunColor = [1, 1, 1]
	sun.getAttribute('direction').setValue(sunDir)
	sun.getAttribute('color').setValue(sunColor)
	sunHelper.position = vec3.negate(sunHelper.position, sunDir)
	sunHelper.receivesLight = false
	sunHelper.material.getAttribute('albedo').setValue(sun.getColor())

	scene.add([sun, sunHelper])

	sky.receivesLight = false
	
	sky.material.getAttribute('albedo').setValue(skyTex)
	sky.setPosition([0, 0, 0])
	sky.setScale(farPlane - 10)

	let origPosition = vec3.create()

	sky.onBeforeRender = () => {
		let pos = camera.position
		origPosition = vec3.copy(origPosition, pos)
		camera.setPosition([0, 0, 0])
		renderer.configureCamera(sky.program, camera)
	}

	sky.onAfterRender = () => {
		camera.setPosition(origPosition)
		renderer.configureCamera(sky.program, camera)
	}

	scene.add(sky)

	renderer.setNearFar(0.1, farPlane)
	
    //
    //  anim stuff
    //

	const scene0 = await wgl.Loaders.text.load('/obj/test:room3.dae')
	const scene1 = await wgl.Loaders.text.load('/obj/test:test-anim-2-smooth.dae')
	// let cubeSrc = await wgl.Loaders.text.load('/obj/test:test-anim-2-smooth.dae')
	let colladaSource0 = wgl.parsers.collada(gl, scene0)
	let colladaSource1 = wgl.parsers.collada(gl, scene1)

	const colladaSource = colladaSource0.concat(colladaSource1)
	// const colladaSource = colladaSource1

	let animatedModel: wgl.Model
	const animations: Array<wgl.animation.SkeletalAnimation> = []

	const anchor = new wgl.Model(gl, null, null)
	anchor.setRotation([-90, 180, 0])

	for (const modelSource of colladaSource) {
		const model = new wgl.Model(gl, modelSource.mesh, sphereModel.material.clone())

		const components = wgl.util.matrix.decompose(modelSource.transform)

		if (components.success) {
			model.position = components.translation
			model.orientation = components.quaternion
			model.scale = components.scale
		} else {
			console.warn('Failed to parse.')
		}

		// model.setRotation([-90, 0, 0])

		scene.add(model)

		if (!modelSource.animation) {
			anchor.addChild(model)
			continue
		}

		model.setRotation([-90, 180, 0])

		model.animation = modelSource.animation

		keyboard.down(evt => modelSource.animation.togglePlay(), wgl.Input.Keys.space)

		animatedModel = model

		animations.push(model.animation)

		// model.setPosition([-5, -5, -5])
		// model.setScale(1)
	}

	// animatedModel.material.getAttribute('albedo').setValue(tex0)
	// animatedModel.material.getAttribute('roughness').setValue(tex0)
	// animatedModel.material.getAttribute('metallic').setValue(tex0)

	anchor.setScale(7)

	const timelines: Array<wgl.animation.Timeline> = []

	const timeline = new wgl.animation.Timeline()
		.duration(2)
		.loop()
		.fromTo(0, 1, 1/3, wgl.animation.easings.easeInCubic)
		.to(1, 1/3, wgl.animation.easings.one)
		.to(0, 1/3, wgl.animation.easings.easeOutQuad)
		.onUpdate(tl => {
			const att = animatedModel.material.getAttribute('albedo')
			att.setValue([tl.value(), tl.value(), 0])
		})
	
	keyboard.down(evt => timeline.trigger(), wgl.Input.Keys.shift)
	keyboard.down(evt => timeline.togglePlay(), wgl.Input.Keys.space)

	timelines.push(timeline)

	const animId = {
		animationFrameId: 0
	}

	const animate = () => {
		keyboardMoveControls.update()
		touchMoveControls.update()
		rotationControls.update()

		animations.map(anim => anim.update())
		timelines.map(tl => tl.update())

		if (animatedModel) {
			// if (keyboard.isDown(wgl.Input.Keys.Up)) anchor.orientation[0] += 0.02
			// if (keyboard.isDown(wgl.Input.Keys.Down)) anchor.orientation[0] -= 0.02
			// if (keyboard.isDown(wgl.Input.Keys.Left)) anchor.orientation[1] -= 0.02
			// if (keyboard.isDown(wgl.Input.Keys.Right)) anchor.orientation[1] += 0.02
			// quat.normalize(anchor.orientation, anchor.orientation)

			if (keyboard.isDown(wgl.Input.Keys.Up)) animatedModel.position[2] -= 0.15
			if (keyboard.isDown(wgl.Input.Keys.Down)) animatedModel.position[2] += 0.15
			if (keyboard.isDown(wgl.Input.Keys.Left)) animatedModel.position[0] -= 0.15
			if (keyboard.isDown(wgl.Input.Keys.Right)) animatedModel.position[0] += 0.15
		}

		// camera.lookAt(animatedModel.position)
		// camera.position[0] = cubeModel.position[0]
		// camera.position[1] = cubeModel.position[1] + 5
		// camera.position[2] = cubeModel.position[2] + 10

		renderer.render(scene, camera)
		animId.animationFrameId = window.requestAnimationFrame(animate)
	}

	animate()

	return new Promise<{animationFrameId: number}>((resolve, reject) => {
		resolve(animId)
	})
}
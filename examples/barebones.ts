import * as wgl from '../gl/web-gl'
import * as demo from './demo-util'

export async function main() {

	const glInit = demo.init()

	const gl = glInit.gl
	const renderer = glInit.renderer
	const canvas = glInit.canvas
	const scene = glInit.scene
	const camera = glInit.camera
	const keyboard = glInit.keyboard
	const keyboardMoveControls = glInit.keyboardMoveControls
	const rotationControls = glInit.rotationControls

	keyboardMoveControls.setSpeed(5.0)

	const sphereMesh = wgl.MeshFactory.create(gl, 'sphere')
	const sphereMat = wgl.Material.Physical(gl)
	const sphereModel = new wgl.Model(gl, sphereMesh, sphereMat)
	const sphereTex = await wgl.Loaders.TEX.load2D(gl, '/tex/neb.png')
	const light = wgl.Light.Point(gl)
	const lightModel = new wgl.Model(gl, sphereMesh, sphereMat.clone())

	renderer.setAspect(canvas.aspect)
	renderer.setNearFar(0.1, 1000)
	
	scene.add([sphereModel, light, lightModel])

	const lightPosition = [5, 5, 5]
	const sphereColor = [0.25, 1, 0.25]
	const spherePosition = [0, 0, 0]

	light.getAttribute('position').setValue(lightPosition)
	sphereModel.setPosition(spherePosition)
	sphereModel.material.getAttribute('albedo').setValue(sphereColor)

	lightModel.setPosition(lightPosition)
	lightModel.receivesLight = false

	camera.setPosition([0, 0, 5])

	const spacePressed = () => keyboard.isDown(wgl.Input.Keys.space)
	let isTex = false
	let lastPress = Infinity
	const pressTimeout = 0.3
	const pressTimer = new wgl.util.time.DeltaTimer()

	const animate = () => {

		keyboardMoveControls.update()
		rotationControls.update()
		pressTimer.update()

		lastPress += pressTimer.delta()

		if (spacePressed() && lastPress > pressTimeout) {
			const albedo = sphereMat.getAttribute('albedo')
			if (isTex) {
				albedo.setValue(sphereColor)
			} else {
				albedo.setValue(sphereTex)
			}
			//	reset sphere model program so that
			//	the correct shader is chosen
			sphereModel.program = null
			isTex = !isTex
			lastPress = 0
		}

		renderer.render(scene, camera)
		window.requestAnimationFrame(animate)
	}

	animate()
}
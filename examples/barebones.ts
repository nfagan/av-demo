import * as wgl from '../gl/web-gl'

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
	const keyboardMoveControls = new wgl.Controls.Movement.Keyboard(keyboard, camera, 5.0)
	const mouseInput = new wgl.Input.PointerLock(canvas.element)
	const rotationControls = new wgl.Controls.Orbit.Orbit2(mouseInput, camera)

	const sphere = wgl.MeshFactory.create(gl, 'sphere')
	const mat = wgl.Material.Physical(gl)
	const sphereModel = new wgl.Model(gl, sphere, mat)
	const light = wgl.Light.Point(gl)
	const lightModel = new wgl.Model(gl, sphere, mat.clone())

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

	const animate = () => {

		keyboardMoveControls.update()
		rotationControls.update()

		renderer.render(scene, camera)
		window.requestAnimationFrame(animate)
	}

	animate()
}
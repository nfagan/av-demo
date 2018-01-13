import * as wgl from '../gl/web-gl'
import * as waud from '../aud/web-audio'
import { mat4, quat, vec3, glMatrix } from 'gl-matrix'

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

	const tex = await wgl.Loaders.TEX.load2D(gl, '/tex/skys:sky3.png')

	const mat = wgl.Material.Material.Physical(gl)
	const sphere = wgl.MeshFactory.create(gl, 'quad')
	const sphereModel = new wgl.Model(gl, sphere, mat)
	const light = wgl.Light.Light.Point(gl)

	sphereModel.setRotation([90, 0, 0])
	sphereModel.setScale(100)

	light.setColor([1, 1, 1])
	light.getAttribute('position').setValue([0, 5, 0])

	mat.getAttribute('albedo').setValue(tex)

	sphereModel.receivesLight = true
	sphereModel.program = wgl.ShaderBuilder.fromModel(sphereModel)
	// sphereModel.program = wgl.ShaderFactory.Create(gl, wgl.ShaderLibrary.PBRTex)

	renderer.setAspect(canvas.aspect)
	renderer.setNearFar(0.1, 1000)
	
	scene.add([sphereModel, light])

	camera.setPosition([0, 8, 5])

	const animate = () => {

		keyboardMoveControls.update()
		rotationControls.update()

		renderer.render(scene, camera)
		window.requestAnimationFrame(animate)
	}

	animate()
}
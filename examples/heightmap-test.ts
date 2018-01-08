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

	const mouseInput = new wgl.Input.PointerLock(canvas.element)
	const touchInput = new wgl.Input.Touch()
	const keyboardMoveControls = new wgl.Controls.Movement.Keyboard(keyboard, camera, 10.0)
	const touchMoveControls = new wgl.Controls.Movement.Touch(touchInput, camera, 10.0)

	let rotationControls: any
	
	if (wgl.capabilities.hasPointerLock()) {
		rotationControls = new wgl.Controls.Orbit.Orbit2(mouseInput, camera)
	} else {
		rotationControls = new wgl.Controls.Orbit.Orbit(touchInput, camera)
	}

	const sphere = wgl.MeshFactory.create(gl, 'sphere')
	const mat = wgl.Material.Material.Physical(gl)
	const sphereModel = new wgl.Model(gl, null, sphere, mat)
	const light = wgl.Light.Light.Point(gl)
	const light2 = wgl.Light.Light.Directional(gl)
	const sky = new wgl.Model(gl, null, sphere, mat.clone())
	const sphere2 = new wgl.Model(gl, null, sphere, mat.clone())

	sphereModel.receivesLight = false
	sky.receivesLight = false

	const light2Dir = [5, -50, -50]
	const light2Col = [1, 0, 0]
	light2.setIndex(0)
	light2.getAttribute('color').setValue(light2Col)
	light2.getAttribute('direction').setValue(light2Dir)
	sphere2.material.getAttribute('albedo').setValue(light2Col)
	sphere2.receivesLight = false
	sphere2.setPosition(vec3.negate(vec3.create(), light2Dir))

	const farPlane = 1000

	const skyTex = await wgl.Loaders.TEX.load2D(gl, '/tex/skys:sky3.png')
	sky.material.getAttribute('albedo').setValue(skyTex)
	sky.setPosition([0, 0, 0])
	sky.setScale(farPlane - 10)

	renderer.setAspect(canvas.aspect)
	renderer.setNearFar(0.1, farPlane)
	
	// scene.add([sphereModel, light, light2, sphere2, sky])
	scene.add([light2, sphere2, sky])

	const lightColor = [1, 1, 1]
	const lightDirection = [-5, -10, -5]
	const lightPositon = vec3.negate(vec3.create(), lightDirection)
	const spherePosition = lightPositon

	// light.getAttribute('direction').setValue(lightDirection)
	light.getAttribute('position').setValue(lightPositon)
	sphereModel.setPosition(spherePosition)
	sphereModel.material.getAttribute('albedo').setValue(lightColor)

	camera.setPosition([0, 10, 10])

	let origPosition: vec3

	sky.onBeforeRender = () => {
		let pos = camera.position
		origPosition = vec3.fromValues(pos[0], pos[1], pos[2])
		camera.setPosition([0, 0, 0])
		renderer.configureCamera(sky.program, camera)
	}

	sphere2.onBeforeRender = () => {
		let pos = camera.position
		origPosition = vec3.fromValues(pos[0], pos[1], pos[2])
		camera.setPosition([0, 0, 0])
		renderer.configureCamera(sky.program, camera)
	}
	sphere2.onAfterRender = () => camera.setPosition(origPosition)

	sky.onAfterRender = () => camera.setPosition(origPosition)

	//
	//	heightmap stuff
	//

	// const terrain = await getTerrain(gl, prog)
	const terrain = await getTerrain(gl, null)

	scene.add(terrain)

	const animate = () => {

		keyboardMoveControls.update()
		rotationControls.update()
		touchMoveControls.update()

		renderer.render(scene, camera)
		window.requestAnimationFrame(animate)
	}

	animate()
}

async function getTerrain(gl: WebGLRenderingContext, prog: wgl.ShaderProgram): Promise<wgl.Model> {
	const heightImageElement = await wgl.Loaders.image.load('/tex/h4.jpg')
	const heightImage = new wgl.util.image.Image(heightImageElement)
	const heightMap = wgl.terrain.HeightMap.fromImageElement(heightImageElement)
	const heightMesh = new wgl.Mesh(gl)
	const nQuads = 64

	const makeVec3 = (values: Array<number>): vec3 => {
		return vec3.fromValues(values[0], values[1], values[2])
	}

	const makeClipSpace = (val: vec3): void => {
		val[0] = -1 + (val[0] * 2)
		val[2] = -1 + (val[2] * 2)
	}

	const addTriangle = (positions: Array<Array<number>>): void => {

		let p0 = makeVec3(positions[0])
		let p1 = makeVec3(positions[1])
		let p2 = makeVec3(positions[2])

		makeClipSpace(p0)
		makeClipSpace(p1)
		makeClipSpace(p2)

		let p1subp0 = vec3.subtract(vec3.create(), p1, p0)
		let p2subp0 = vec3.subtract(vec3.create(), p2, p0)

		let norm = vec3.cross(vec3.create(), p1subp0, p2subp0)
		norm = vec3.normalize(norm, norm)

		let newPositions = [p0, p1, p2]

		for (let i = 0; i < newPositions.length; i++) {
			let vert = new wgl.Vertex()
			vert.setPosition(newPositions[i])
			vert.setNormal(Float32Array.from(norm))
			vert.setUV(new Float32Array([0, 0]))
			heightMesh.addVertex(vert)
		}
	}

	for (let i = 0; i < nQuads-1; i++) {
		for (let j = 0; j < nQuads-1; j++) {
			let x0 = j / (nQuads-1)
			let z0 = i / (nQuads-1)
			let x1 = (j+1) / (nQuads-1)
			let z1 = (i+1) / (nQuads-1)

			let v1 = [x0, 0, z0]
			let v2 = [x0, 0, z1]
			let v3 = [x1, 0, z1]
			let v4 = [x1, 0, z0]

			v1[1] = heightMap.valueAtNearestXZ(v1[0], v1[2])
			v2[1] = heightMap.valueAtNearestXZ(v2[0], v2[2])
			v3[1] = heightMap.valueAtNearestXZ(v3[0], v3[2])
			v4[1] = heightMap.valueAtNearestXZ(v4[0], v4[2])

			addTriangle([v1, v2, v3])
			addTriangle([v3, v4, v1])
		}
	}

	heightMesh.setTopology(wgl.Topologies.TRIANGLES)
	heightMesh.finalize()

	let heightMat = wgl.Material.Material.Physical(gl)
	heightMat.getAttribute('albedo').setValue([1, 1, 1])

	let terrain = new wgl.Model(gl, prog, heightMesh, heightMat)
	// terrain.setScale([100, 100, 100])
	terrain.setScale([100, 10, 100])
	terrain.setPosition([0, 0, 0])
	terrain.receivesLight = true

	return terrain
}
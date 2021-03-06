import * as wgl from '../gl/web-gl'
import * as waud from '../aud/web-audio'
import { mat4, quat, vec2, vec3, glMatrix } from 'gl-matrix'
import * as demo from './demo-util'

export async function main(glInit: demo.initReturnT) {

	const audioManager = new waud.AudioContextManager()
	const nLevels = 32
	const analyser = new waud.AudioAnalyser(audioManager.getContext(), {levelsCount: nLevels})
	const files = ['/sounds/sep30.aac']
	const SOUND_AFFECTS_LIGHT = true

	analyser.setup()

	await Promise.all(audioManager.loadSounds(files))

	const destination = analyser.getAnalyserNode()

	const togglePlay = () => audioManager.togglePlay(files[0], destination)
	// const togglePlay = () => 0

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

	canvasElement.onclick = () => togglePlay()

	keyboard.down(togglePlay, wgl.Input.Keys.space)

	const skyTex = await wgl.Loaders.TEX.load2D(gl, '/tex/skys:sky3.png')
	const nebTex = await wgl.Loaders.TEX.load2D(gl, '/tex/neb.png')
	const treeMesh = await wgl.Loaders.OBJ.loadMesh(gl, '/obj/tree1:tree1.obj')
	const treeTex = await wgl.Loaders.TEX.load2D(gl, '/tex/tree1.png')

	const sphere = wgl.MeshFactory.create(gl, 'sphere')
	const mat = wgl.Material.Physical(gl)
	const sphereModel = new wgl.Model(gl, sphere, mat)
	const light = wgl.Light.Point(gl)
	const light2 = wgl.Light.Directional(gl)
	const sky = new wgl.Model(gl, sphere, mat.clone())
	const sphere2 = new wgl.Model(gl, sphere, mat.clone())
	const sphere3 = new wgl.Model(gl, sphere, mat.clone())
	const treeModel = new wgl.Model(gl, treeMesh, mat.clone())

	treeModel.setPosition([0, 10, 10])
	treeModel.setScale(1.0)
	treeModel.material.getAttribute('albedo').setValue(treeTex)
	treeModel.receivesLight = true

	// scene.add(treeModel)

	sphere3.setPosition([0, 20, 0])
	sphere3.setScale(10)

	sphere3.material.getAttribute('roughness').setValue(nebTex)
	sphere3.material.getAttribute('albedo').setValue(skyTex)
	sphere3.material.getAttribute('metallic').setValue(nebTex)

	sphere3.receivesLight = true

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

	sky.material.getAttribute('albedo').setValue(skyTex)
	sky.setPosition([0, 0, 0])
	sky.setScale(farPlane - 10)

	renderer.setAspect(canvas.aspect)
	renderer.setNearFar(0.1, farPlane)
	
	scene.add([light2, sphere2, sky, sphere3])

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
	sphere2.onAfterRender = () => {
		camera.setPosition(origPosition)
		renderer.configureCamera(sky.program, camera)
	}

	sky.onAfterRender = () => {
		camera.setPosition(origPosition)
		renderer.configureCamera(sky.program, camera)
	}

	const terrain = await getTerrain(gl, null)

	scene.add(terrain.model)

	const treeModels: Array<wgl.Model> = []
	for (let i = 0; i < 0; i++) {
		let treeMod = new wgl.Model(gl, treeMesh, mat.clone())
		let x = -100 + Math.random() * 200
		let z = -100 + Math.random() * 200
		let fracX = (x + 100) / 200
		let fracZ = (z + 100) / 200
		let pos = vec3.fromValues(x, terrain.heightMap.valueAtNearestXZ(fracX, fracZ), z)
		treeMod.setPosition(pos)
		treeMod.receivesLight = true
		treeMod.material.getAttribute('albedo').setValue(treeTex)
		scene.add(treeMod)
		treeModels.push(treeMod)
	}

	//
	//	heightmap stuff
	//

	const animate = () => {

		stats.update()

		keyboardMoveControls.update()
		touchMoveControls.update()
		rotationControls.update()

		// camera.position[1] = 10
		// camera.lookAt(sphere3.getPosition())

		analyser.update()

		const mvamt = 0.1
		if (keyboard.isDown(wgl.Input.Keys.Up)) sphere3.position[2] -= mvamt
		if (keyboard.isDown(wgl.Input.Keys.Down)) sphere3.position[2] += mvamt
		if (keyboard.isDown(wgl.Input.Keys.Left)) sphere3.position[0] -= mvamt
		if (keyboard.isDown(wgl.Input.Keys.Right)) sphere3.position[0] += mvamt

		if (SOUND_AFFECTS_LIGHT) {
			let levels = analyser.getLevels()

			let newColor = [Math.pow(levels[0], 2), 0.25, 0.5]
			light2.setColor(newColor)
			sphere2.material.getAttribute('albedo').setValue(newColor)
		}

		renderer.render(scene, camera)

		window.requestAnimationFrame(animate)
	}

	animate()
}

type heightmapT = {model: wgl.Model, heightMap: wgl.terrain.HeightMap}

async function getTerrain(gl: WebGLRenderingContext, prog: wgl.ShaderProgram): Promise<heightmapT> {
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

	let terrain = new wgl.Model(gl, heightMesh, heightMat, prog)
	terrain.setScale([100, 10, 100])
	terrain.setPosition([0, 0, 0])
	terrain.receivesLight = true

	return {
		model: terrain,
		heightMap: heightMap
	}
}
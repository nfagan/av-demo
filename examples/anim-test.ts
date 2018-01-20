import * as wgl from '../gl/web-gl'
import { mat4 } from 'gl-matrix'

function getJointVertexShaderSource(N: number): wgl.ShaderBuilder.primitives.VertexSource {

	const mainSrc = () => {
		return `

		vec3 joint_weights_ = in_joint_weight;
		vec3 joint_indices_ = in_joint_index;

		vec4 local_position = vec4(0.0);
		vec4 local_normal = vec4(0.0);

		for (int i = 0; i < 3; i++) {
			int index = int(joint_indices_[i]);
			float weight = joint_weights_[i];

			if (weight == 0.0)
				break;

			mat4 trans = joint_transforms[index];
			vec4 pose = trans * vec4(in_position, 1.0);

			local_position += pose * weight;
		}

		gl_Position = projection * view * model * vec4(local_position.xyz, 1.0);
		`
	}

	return {
		attributes: ['position', 'normal', 'uv', 'joint_index', 'joint_weight'],
		varyings: [],
		uniforms: wgl.ShaderBuilder.vertex.library.MVPMat4,
		userUniforms: [{name: 'joint_transforms', kind: 'mat4', isArray: true, length: N}],
		body: () => '',
		main: [mainSrc]
	}
}

function getJointFragmentShaderSource(): wgl.ShaderBuilder.primitives.FragmentSource {
	return {
		uniforms: [],
		userUniforms: [],
		varyings: [],
		precision: 'mediump',
		main: () => {
			return `
				gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
			`
		},
		body: () => '',
	}
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
	
	// scene.add([sphereModel, light, lightModel])
	scene.add(sphereModel)

	const lightPosition = [5, 5, 5]
	const sphereColor = [0.25, 1, 0.25]
	const spherePosition = [0, 0, 0]

	light.getAttribute('position').setValue(lightPosition)
	sphereModel.setPosition(spherePosition)
	sphereModel.material.getAttribute('albedo').setValue(sphereColor)

	lightModel.setPosition(lightPosition)
	lightModel.receivesLight = false

    camera.setPosition([0, 0, 5])
    
    //
    //  anim stuff
    //

	let cubeSrc = await wgl.Loaders.text.load('/obj/test:test-anim-run2.dae')
	// let cubeSrc = await wgl.Loaders.text.load('/obj/test:test-anim-2.dae')
    let colladaSource = wgl.parsers.collada(gl, cubeSrc)

	const cubeModel = new wgl.Model(gl, colladaSource.mesh, sphereModel.material.clone())
	const skeleton = colladaSource.skeleton
	const animation = colladaSource.animation

	// const shaderSources = wgl.ShaderBuilder.getSource(cubeModel)
	// shaderSources.vertex = getJointVertexShaderSource()

	const nJoints = skeleton.size()
	const vertShaderSource = getJointVertexShaderSource(nJoints)
	const fragShaderSource = getJointFragmentShaderSource()
	const customProg = wgl.ShaderBuilder.fromSource(gl, vertShaderSource, fragShaderSource)

	// debugger

	cubeModel.program = customProg

	// console.log(customProg.shaders[0].source)

    cubeModel.setPosition([-5, -5, -5])
    cubeModel.setScale(1)

	scene.add(cubeModel)

	
	cubeModel.onBeforeRender = () => {
		animation.update()
		renderer.conditionalBindProgram(cubeModel.program)
		skeleton.traverse(joint => {
			const animTrans = joint.getAnimationTransform()
			cubeModel.program.setUniform(`joint_transforms[${joint.index}]`, animTrans)
		})
		renderer.conditionalBindProgram(null)
	}

	const animate = () => {
		keyboardMoveControls.update()
		rotationControls.update()

		renderer.render(scene, camera)
		window.requestAnimationFrame(animate)
	}

	animate()
}
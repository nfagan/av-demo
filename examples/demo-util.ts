import * as wgl from '../gl/web-gl'

export type initReturnT = {
    gl: WebGLRenderingContext,
    scene: wgl.Scene,
    renderer: wgl.renderers.functional,
    camera: wgl.Camera,
    stats: wgl.FrameStats,
    keyboard: wgl.Input.Keyboard,
    canvas: wgl.Canvas,
    mouseInput: wgl.Input.PointerLock,
    touchInput: wgl.Input.Touch,
    keyboardMoveControls: wgl.Controls.Movement.Keyboard,
    touchMoveControls: wgl.Controls.Movement.Touch,
    rotationControls: any
}

export function getRotationControls(mouseInput: wgl.Input.Mouse, touchInput: wgl.Input.Touch, camera: wgl.Camera): any {
    if (wgl.capabilities.hasPointerLock()) {
		return new wgl.Controls.Orbit.Orbit2(mouseInput, camera)
	} else {
		return new wgl.Controls.Orbit.Orbit(touchInput, camera)
    }
}

export function init(): initReturnT {

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
	const stats = new wgl.FrameStats()

	const mouseInput = new wgl.Input.PointerLock(canvas.element)
    const touchInput = new wgl.Input.Touch()
    
    const keyboardMoveControls = new wgl.Controls.Movement.Keyboard(keyboard, camera)
	const touchMoveControls = new wgl.Controls.Movement.Touch(touchInput, camera)
	const rotationControls = getRotationControls(mouseInput, touchInput, camera)
    
    return {
        gl,
        scene,
        renderer,
        camera,
        stats,
        keyboard,
        canvas,
        mouseInput,
        touchInput,
        keyboardMoveControls,
        touchMoveControls,
        rotationControls
    }

}
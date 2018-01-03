import { quat, mat4, vec3, glMatrix } from 'gl-matrix'
import { vector, types } from '../util/util'
import * as math from '../math/wgl-math'

type directions = 'forwards' | 'backwards' | 'left' | 'right'

class Camera {

	yaw: number = -90.0
	pitch: number = 0.0
	position: vec3
	up: vec3
	worldUp: vec3
	right: vec3
	front: vec3
	movementSpeed: number = 2.5
	rotationSensitivity: number = 0.1
	target: vec3 | null = null

	constructor() {
		this.position = vec3.fromValues(0, 0, 0)
		this.up = vec3.fromValues(0, 1, 0)
		this.worldUp = vec3.fromValues(0, 1, 0)
		this.right = vec3.create()
		this.front = vec3.fromValues(0, 0, -1)
		this.updateCameraVectors()
	}

	public getViewMatrix(): mat4 {
		let hasTarget = this.target !== null
		let target: vec3 = hasTarget ? this.target : vec3.create()
		let view: mat4 = mat4.create()
		let position = this.position
		let front = this.front
		let up = this.up
		if (!hasTarget)
			vec3.add(target, position, front)
		math.lookAt(view, position, target, up)
		return view
	}

	public lookAt(where: types.vec3Convertible | null) {
		if (where === null) {
			this.target = null
			return
		}
		this.target = vector.requireVec3(where)
	}

	public setPosition(position: types.vec3Convertible) {
		this.position = vector.requireVec3(position)
	}

	public setPitch(pitch: number) {
		this.pitch = this.constrainPitch(pitch)
		this.updateCameraVectors()
	}

	public setYaw(yaw: number) {
		this.yaw = yaw
		this.updateCameraVectors()
	}

	public move(direction: directions, dt: number, speed?: number) {
		if (!speed)
			speed = this.movementSpeed

		let vel: number = speed * dt
		let velocity: vec3 = vec3.fromValues(vel, vel, vel)
		let front_ = vec3.create()
		let right_ = vec3.create()
		let front = this.front
		let right = this.right
		let position = this.position

		vec3.copy(front_, front)
		vec3.copy(right_, right)

		if (direction === 'forwards') {
			vec3.add(position, position, vec3.multiply(front_, front_, velocity))
		} else if (direction === 'backwards') {
			vec3.sub(position, position, vec3.multiply(front_, front_, velocity))
		} else if (direction === 'left') {
			vec3.sub(position, position, vec3.multiply(right_, right_, velocity))
		} else if (direction === 'right') {
			vec3.add(position, position, vec3.multiply(right_, right_, velocity))
		}
	}

	public rotate(x: number, y: number, sensitivity?: number) {
		if (!sensitivity)
			sensitivity = this.rotationSensitivity

		this.yaw += (x * sensitivity)
		this.pitch += (y * sensitivity)
		this.pitch = this.constrainPitch(this.pitch)

		this.updateCameraVectors()
	}

	private constrainPitch(pitch: number): number {
		if (pitch > 89.0)
			pitch = 89.0
		if (pitch < -89.0)
			pitch = -89.0
		return pitch
	}

	private updateCameraVectors(): void {
		let front_: vec3 = vec3.create()
		let right = this.right
		let front = this.front
		let up = this.up
		let worldUp = this.worldUp
		let pitch = this.pitch
		let yaw = this.yaw

		front_[0] = Math.cos(glMatrix.toRadian(yaw)) * Math.cos(glMatrix.toRadian(pitch))
		front_[1] = Math.sin(glMatrix.toRadian(pitch))
		front_[2] = Math.sin(glMatrix.toRadian(yaw))

		vec3.copy(front, front_)

		vec3.cross(right, front, worldUp)
		vec3.normalize(right, right)
		vec3.cross(up, right, front)
		vec3.normalize(up, up)
	}

}

export { Camera, directions }
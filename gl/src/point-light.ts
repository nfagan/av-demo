import { vec3 } from 'gl-matrix'
import { Resource } from './resource'

class PointLight extends Resource {

	private position: vec3
	private color: vec3
	private index: number

	constructor() {
		super()
		this.position = vec3.fromValues(0, 0, 0)
		this.color = vec3.fromValues(1, 1, 1)
		this.index = 0
	}

	getColor(): vec3 {
		return this.color
	}

	getPosition(): vec3 {
		return this.position
	}

	getIndex(): number {
		return this.index
	}

	setColor(color: vec3) {
		this.color = color
	}

	setPosition(pos: vec3) {
		this.position = pos
	}

	setIndex(index: number) {
		this.index = index
	}

}

export { PointLight }
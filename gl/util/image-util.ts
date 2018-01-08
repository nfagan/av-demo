import { assert, common } from '../util/util'

export function getImageData(image: HTMLImageElement): Uint8ClampedArray {
	const canvas = document.createElement('canvas')
	const context = canvas.getContext('2d')

	canvas.width = image.width
	canvas.height = image.height

	context.drawImage(image, 0, 0)

	return context.getImageData(0, 0, image.width, image.height).data
}

export class Image {

	private element: HTMLImageElement
	private data: Uint8ClampedArray
	public readonly nComponents: number
	public readonly width: number
	public readonly height: number
	public readonly maxValue: number

	constructor(image: HTMLImageElement, nComponents: number = 4, maxValue: number = 255) {
		this.element = image
		this.data = getImageData(image)
		this.nComponents = nComponents
		this.width = image.width
		this.height = image.height
		this.maxValue = maxValue
	}

	public size(): number {
		return this.data.length / this.nComponents
	}

	public valuesAt(index: number): Uint8ClampedArray {
		assert.assertInteger(index, 'pixel index')
		let values = new Uint8ClampedArray(this.nComponents)
		for (let i = 0; i < this.nComponents; i++) {
			values[i] = this.data[index+i]
		}
		return values
	}

	public valuesAtXY(x: number, y: number): Uint8ClampedArray {
		assert.assertInteger(x, 'x coordinate')
		assert.assertInteger(y, 'y coordinate')
		let index = (y * (this.width) + x) * this.nComponents
		return this.valuesAt(index)
	}

	public drawIntoDebug(canvas: HTMLCanvasElement) {
		let context = canvas.getContext('2d')
		let w = this.width
		for (let y = 0; y < this.height; y++) {
			for (let x = 0; x < this.width; x++) {
				let values = this.valuesAtXY(x, y)
				let r = values[0],
					g = values[1],
					b = values[2],
					a = values[3]
				context.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`
				context.fillRect(x, y, 1, 1)
			}
		}
	}
}
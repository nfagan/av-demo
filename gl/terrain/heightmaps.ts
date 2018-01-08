import { image, assert } from '../util/util'

export class HeightMap {

	data: Float32Array
	width: number
	depth: number

	constructor(data: Float32Array, width: number, depth: number) {
		this.data = Float32Array.from(data)
		this.width = width
		this.depth = depth
	}

	public valueAtXZ(x: number, y: number): number {
		assert.assertInteger(x, 'terrain x coordinate')
		assert.assertInteger(y, 'terrain y coordinate')
		let index = (y * (this.width) + x)
		return this.data[index]
	}

	public valueAtNearestXZ(x: number, y: number): number {
		let ix = Math.floor((this.width-1) * x)
		let iy = Math.floor((this.depth-1) * y)
		return this.valueAtXZ(ix, iy)
	}

	public static fromImageElement(img: HTMLImageElement): HeightMap {
		let imageData = new image.Image(img)
		let rData = new Float32Array(imageData.size())

		for (let i = 0; i < imageData.size(); i++) {
			let pix = imageData.valuesAt(i)
			let fracMax = (pix[0] + pix[1] + pix[2]) / 3 / imageData.maxValue
			rData[i] = -1 + fracMax * 2
		}

		return new HeightMap(rData, imageData.width, imageData.height)
	}

}
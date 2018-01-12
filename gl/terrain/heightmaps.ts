import { image, assert } from '../util/util'
import * as math from '../math/wgl-math'

export class HeightMap {

	data: Float32Array
	width: number
	depth: number

	constructor(data: Float32Array, width: number, depth: number) {
		this.data = Float32Array.from(data)
		this.width = width
		this.depth = depth
	}

	public valueAtXZ(x: number, z: number): number {
		assert.assertInteger(x, 'terrain x coordinate')
		assert.assertInteger(z, 'terrain y coordinate')
		let index = (z * (this.width) + x)
		return this.data[index]
	}

	public valueAtNearestXZ(x: number, z: number): number {
		x = math.clampScalar(x, 0, 1)
		z = math.clampScalar(z, 0, 1)
		let ix = Math.floor((this.width-1) * x)
		let iz = Math.floor((this.depth-1) * z)
		return this.valueAtXZ(ix, iz)
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
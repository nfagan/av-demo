import * as wgl from '../gl/web-gl'
import * as waud from '../aud/web-audio'
import { mat4, quat, vec3, glMatrix } from 'gl-matrix'

function opt1(heightImageElement: HTMLImageElement) {

	const canvas = document.createElement('canvas')
	let context = canvas.getContext('2d')

	canvas.width = heightImageElement.width
	canvas.height = heightImageElement.height

	context.drawImage(heightImageElement, 0, 0)

	var imageData = context.getImageData(0, 0, heightImageElement.width, heightImageElement.height);
	var data = imageData.data;

	context.clearRect(0, 0, canvas.width, canvas.height)

	let imageHeight = heightImageElement.height
	let imageWidth = heightImageElement.width

	// iterate over all pixels based on x and y coordinates
	for(var y = 0; y < imageHeight; y++) {
	  // loop through each column
	  for(var x = 0; x < imageWidth; x++) {
	    var red = data[((imageWidth * y) + x) * 4];
	    var green = data[((imageWidth * y) + x) * 4 + 1];
	    var blue = data[((imageWidth * y) + x) * 4 + 2];
	    var alpha = data[((imageWidth * y) + x) * 4 + 3];
	    context.fillStyle = `rgba(${red}, ${green}, ${blue}, ${alpha})`
	    context.fillRect(x, y, 1, 1)
	  }
	}

	document.body.appendChild(canvas)

}

function opt2(heightImageElement: HTMLImageElement) {
	const heightImage = new wgl.util.image.Image(heightImageElement)

	const canvas = document.createElement('canvas')
	canvas.width = heightImageElement.width
	canvas.height = heightImageElement.height
	document.body.appendChild(canvas)

	heightImage.drawIntoDebug(canvas)
}

export async function main() {
	const heightImageElement = await wgl.Loaders.image.load('/tex/h3.png')

	// opt1(heightImageElement)
	opt2(heightImageElement)
}
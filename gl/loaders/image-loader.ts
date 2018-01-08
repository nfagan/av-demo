export namespace image {
	export async function load(url: string): Promise<HTMLImageElement> {
        return new Promise<HTMLImageElement>((resolve, reject) => {
    		let img = document.createElement('img')

    		img.onload = (e) => {
    			window.URL.revokeObjectURL(img.src)
    			resolve(img)
    		}

    		img.onerror = (e) => reject(e)
    		
    		img.src = url
        })
    }
}
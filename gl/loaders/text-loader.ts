export namespace text {
    export async function load(url: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            let xhr = new XMLHttpRequest()

            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(xhr.responseText)
                    } else {
                        reject(xhr)
                    }
                }
            }
            
            xhr.open('GET', url)
            xhr.send()
        })
    }
}
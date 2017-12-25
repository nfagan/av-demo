import { v4 } from 'uuid'

class Resource {

	public uuid: string

	constructor() {
		this.uuid = v4()
	}

}

export { Resource }
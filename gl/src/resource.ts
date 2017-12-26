import { v4 } from 'uuid'

class Resource {

	public uuid: string

	constructor() {
		this.uuid = v4()
	}

	public static equals(a: Resource, b: Resource): boolean {
		if (a === null || b === null)
			return false
		return a.uuid === b.uuid
	}

}

export { Resource }
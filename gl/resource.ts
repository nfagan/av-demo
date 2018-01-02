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

	public static compareUUID(a: Resource, b: Resource): number {
		if (a.uuid === b.uuid)
			return 0
		return 1
	}

}

export { Resource }
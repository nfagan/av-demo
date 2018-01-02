export function hasPointerLock(): boolean {
	return 'onpointerlockchange' in document
}
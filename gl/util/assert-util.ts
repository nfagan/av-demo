export function assertNValues<T>(arr: Array<T>, N: number, contents: string = '(unspecified)'): void {
	if (arr.length !== N) {
		throw new Error(`Expected the array of ${contents} to contain ${N} values; ${arr.length} were present.`)
	}
}

export function assertInteger(val: number, kind: string = '(unspecified)'): void {
	if (val % 1 !== 0)
		throw new Error(`Expected value of type "${kind}" to be an integer; was ${val}.`)
}
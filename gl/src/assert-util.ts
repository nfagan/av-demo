export function assertNValues<T>(arr: Array<T>, N: number, contents: string = '(unspecified)'): void {
	if (arr.length !== N) {
		throw new Error(`Expected the array of ${contents} to contain ${N} values; ${arr.length} were present.`)
	}
}
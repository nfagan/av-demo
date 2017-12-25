class Util {
	
	public static max(arr: Array<number>) {
		let max = -Infinity
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] > max) max = arr[i]
		}
		return max
	}

	public static min(arr: Array<number>) {
		let min = Infinity
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] < min) min = arr[i]
		}
		return min
	}

	public static isPow2(n: number) {
		if (n === 0)
			return false
		while (n !== 1) {
			if (n % 2 !== 0)
				return false
			n = n / 2
		}
		return true
	}
}

export { Util }
const Util = {
	
	max(arr) {
		let max = -Infinity
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] > max) max = arr[i]
		}
		return max
	},

	min(arr) {
		let min = Infinity
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] < min) min = arr[i]
		}
		return min
	},

	isPow2(n) {
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
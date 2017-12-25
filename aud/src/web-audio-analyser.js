import { Util } from './util'

function AudioAnalyser(context, opts) {

	//
	//	init
	//

	if (!context)
		throw new Error('Invalid or missing audio context.')

	if (!opts)
		opts = {}

	let analyser
	let freqByteData
	let binCount
	let levelsCount = opts.levelsCount || 128
	let levelsBins
	let levels = []

	if (!Util.isPow2(levelsCount))
		throw new Error('levelsCount must be a power of 2.')

	//
	//	methods
	//

	const getAnalyserNode = () => { return analyser }
	const getLevels = () => { return levels }

	const setup = () => {

		analyser = context.createAnalyser()
		analyser.smoothingTimeConstant = 0.8
		analyser.fftSize = 1024
		analyser.connect(context.destination)

		binCount = analyser.frequencyBinCount
		levelsBins = Math.floor(binCount / levelsCount)

		if (binCount !== 512)
			throw new Error(`Expected bin count to be 512, was ${binCount}`)

		freqByteData = new Uint8Array(binCount)
	}

	const update = () => {
		analyser.getByteFrequencyData(freqByteData)
		updateLevels()
	}

	const updateLevels = () => {
		for (let i = 0; i < levelsCount; i++) {
			let sum = 0
			for (let j = 0; j < levelsBins; j++) {
				sum += freqByteData[(i * levelsBins) + j]
			}
			levels[i] = sum / levelsBins/256
			levels[i] *= 1 + (i/levelsCount)/2
		}
	}

	return {
		setup,
		update,
		getAnalyserNode,
		getLevels,
	}
}

export { AudioAnalyser }
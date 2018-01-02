import { Util } from './util'

type AnalyserOptions = {
	levelsCount: number
}

class AudioAnalyser {

	private context: AudioContext
	private opts: AnalyserOptions
	private analyser: AnalyserNode
	private freqByteData: Uint8Array
	private timeByteData: Uint8Array
	private binCount: number
	private levelsCount: number
	private levelsBins: number
	private levels: Array<number> = []
	private wave: Array<number> = []

	constructor(context: AudioContext, opts: AnalyserOptions = AudioAnalyser.Defaults()) {
		if (!context)
			throw new Error('Invalid or missing audio context.')
		this.context = context
		this.opts = opts
		this.setOptions()
	}

	private setOptions() {
		if (!Util.isPow2(this.opts.levelsCount))
			throw new Error('levelsCount must be a power of 2.')
		this.levelsCount = this.opts.levelsCount
	}

	public setup(): void {
		const context = this.context
		const analyser: AnalyserNode = context.createAnalyser()
		
		analyser.smoothingTimeConstant = 0.8
		analyser.fftSize = 1024
		analyser.connect(context.destination)

		const binCount: number = analyser.frequencyBinCount
		this.levelsBins = Math.floor(binCount / this.levelsCount)

		if (binCount !== 512)
			throw new Error(`Expected bin count to be 512, was ${binCount}`)

		this.analyser = analyser
		this.freqByteData = new Uint8Array(binCount)
		this.timeByteData = new Uint8Array(binCount)
		this.binCount = binCount
	}

	public update(): void {
		this.analyser.getByteFrequencyData(this.freqByteData)
		this.updateLevels()
		this.updateWave()
	}

	private updateLevels(): void {
		const levelsCount = this.levelsCount
		const levelsBins = this.levelsBins
		const freqByteData = this.freqByteData
		const levels = this.levels

		for (let i = 0; i < levelsCount; i++) {
			let sum = 0
			for (let j = 0; j < levelsBins; j++) {
				sum += freqByteData[(i * levelsBins) + j]
			}
			levels[i] = sum / levelsBins/256
			levels[i] *= 1 + (i/levelsCount)/2
		}
	}

	private updateWave(): void {
		const wave = this.wave
		const binCount = this.binCount
		const analyser = this.analyser
		const timeByteData = this.timeByteData

		analyser.getByteTimeDomainData(timeByteData)

		for (let i: number = 0; i < binCount; i++) {
			wave[i] = ((timeByteData[i] - 128) / 128)
		}
	}

	public getAnalyserNode(): AnalyserNode { 
		return this.analyser 
	}

	public getLevels(): Array<number> { 
		return this.levels 
	}

	public getWave(): Array<number> {
		return this.wave
	}

	public static Defaults(): AnalyserOptions {
		return {
			levelsCount: 128
		}
	}
}

export { AudioAnalyser }
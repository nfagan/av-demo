import { Util } from './util'

type Sound = {
	filename: string,
	buffer: AudioBuffer,
	source: AudioBufferSourceNode,
	isPlaying: boolean
}

type SoundMap = {
	[key: string]: Sound
}

class AudioContextManager {

	private context: AudioContext
	private sounds: SoundMap = {}

	constructor() {
		let audioContext = window.AudioContext || (<any>window).webkitAudioContext || -1
		if (audioContext === -1)
			throw new Error('Web audio is not supported on your platform.')
		this.context = new audioContext()
		this.sounds
	}

	public getContext(): AudioContext {
		return this.context
	}

	public loadSound(filename: string) {
		const context = this.context
		const sounds = this.sounds
		let loader = new Promise((resolve, reject) => {
			let request = new XMLHttpRequest(),
				fullfile: string = '/sounds/' + filename
			request.open('GET', fullfile);
			request.responseType = 'arraybuffer';
			request.onload = () => {
				context.decodeAudioData(request.response, (buffer) => {
					const sound: Sound = {filename, buffer, isPlaying: false, source: null}
					resolve(sound)
				})
			}
			request.onerror = (err) => reject(err)
			request.send()
		})

		return loader.then((sound: Sound) => {
			sounds[sound.filename] = sound
		})
	}

	public loadSounds(names: Array<string>) {
		const self = this
		return names.map((name) => { return self.loadSound(name) })
	}

	public getSound(filename: string): Sound {
		let sound = this.sounds[filename]
		if (sound === undefined)
			throw new Error(`Unrecognized sound ${filename}.`)
		return sound
	}

	public play(filename: string, to?: AudioNode) {
		const context = this.context
		const sounds = this.sounds
		const self = this
		return new Promise((resolve, reject) => {
			if (!to)
				to = context.destination
			let sound = self.getSound(filename)
			if (sound.isPlaying) 
				return
			let source = context.createBufferSource()
			source.buffer = sound.buffer
			source.connect(to);
			source.start(0);
			sounds[filename].source = source
			sounds[filename].isPlaying = true
			resolve()
		})
	}

	public togglePlay(filename: string, to?: AudioNode) {
		const self = this
		return new Promise((resolve, reject) => {
			let sound = self.getSound(filename)
			if (sound.isPlaying)
				return self.stop(filename)
			return self.play(filename, to)
		})
	}

	public stop(filename: string) {
		const self = this
		return new Promise((resolve, reject) => {
			let sound = self.getSound(filename)
			let source = sound.source
			if (source === undefined)
				throw new Error(`No source for sound ${filename}.`)
			source.stop(0)
			sound.isPlaying = false
			resolve()
		})
	}
}

export { AudioContextManager }

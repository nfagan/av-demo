import { Util } from './util'

type Sound = {
	filename: string,
	buffer: AudioBuffer,
	source: AudioBufferSourceNode,
	isPlaying: boolean,
	startTime: number,
	startAt: number
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
			let request = new XMLHttpRequest()
			request.open('GET', filename)
			request.responseType = 'arraybuffer';
			request.onload = () => {
				context.decodeAudioData(request.response, (buffer) => {
					const sound: Sound = {
						filename, 
						buffer, 
						isPlaying: false, 
						source: null,
						startTime: null,
						startAt: 0
					}
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
			source.connect(to)
			source.start(0, sound.startAt)
			sounds[filename].source = source
			sounds[filename].isPlaying = true
			sounds[filename].startTime = self.context.currentTime
			resolve()
		})
	}

	public togglePlay(filename: string, to?: AudioNode) {
		const self = this
		return new Promise((resolve, reject) => {
			let sound = self.getSound(filename)
			if (sound.isPlaying)
				return self.pause(filename)
			return self.play(filename, to)
		})
	}

	private _pause(filename: string, reset: boolean) {
		const self = this
		return new Promise((resolve, reject) => {
			let sound = self.getSound(filename)
			let source = sound.source
			if (source === undefined){
				throw new Error(`No source for sound ${filename}.`)
			}
			if (sound.isPlaying) {
				source.stop(0)
			}
			sound.isPlaying = false
			if (reset) {
				sound.startAt = 0
			} else {
				if (sound.startTime !== null) {
					sound.startAt += (self.context.currentTime - sound.startTime)
				}
			}
			resolve()
		})
	}

	public pause(filename: string) {
		return this._pause(filename, false)
	}

	public stop(filename: string) {
		return this._pause(filename, true)
	}
}

export { AudioContextManager }

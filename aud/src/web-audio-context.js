import { Util } from './util'

function AudioContextManager() {

	const Sound = (filename, buffer, isPlaying) => {
		return {
			filename,
			buffer,
			isPlaying
		}
	}

	const context = (() => {
		let audioContext = window.AudioContext || window.webkitAudioContext || -1
		if (audioContext === -1)
			throw new Error('Web audio is not supported on your platform.')
		return new audioContext()
	})()

	const sounds = {}

	const getContext = () => { return context }

	const loadSound = (filename) => {
		let loader = new Promise((resolve, reject) => {
			let request = new XMLHttpRequest(),
				fullfile = '/sounds/' + filename
			request.open('GET', fullfile);
			request.responseType = 'arraybuffer';
			request.onload = () => {
				context.decodeAudioData(request.response, (buffer) => {
					const sound = Sound(filename, buffer, false)
					resolve(sound)
				})
			}
			request.onerror = (err) => reject(err)
			request.send()
		})

		return loader.then((sound) => {
			sounds[sound.filename] = sound
		})
	}

	const loadSounds = (names) => {
		return names.map((name) => { return loadSound(name) })
	}

	const getSound = (filename) => {
		let sound = sounds[filename]
		if (sound === undefined)
			throw new Error(`Unrecognized sound ${filename}.`)
		return sound
	}

	const play = (filename, to) => {
		return new Promise((resolve, reject) => {
			if (to === undefined)
				to = context.destination
			let sound = getSound(filename)
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

	const togglePlay = (filename, to) => {
		return new Promise((resolve, reject) => {
			let sound = getSound(filename)
			if (sound.isPlaying)
				return stop(filename)
			return play(filename, to)
		})
	}

	const stop = (filename) => {
		return new Promise((resolve, reject) => {
			let sound = getSound(filename)
			let source = sound.source
			if (source === undefined)
				throw new Error(`No source for sound ${filename}.`)
			source.stop(0)
			sound.isPlaying = false
			resolve()
		})
	}

	return {
		getContext,
		loadSounds,
		play,
		stop,
		togglePlay
	}
}

export { AudioContextManager }

define("util", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Util {
        static max(arr) {
            let max = -Infinity;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > max)
                    max = arr[i];
            }
            return max;
        }
        static min(arr) {
            let min = Infinity;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] < min)
                    min = arr[i];
            }
            return min;
        }
        static isPow2(n) {
            if (n === 0)
                return false;
            while (n !== 1) {
                if (n % 2 !== 0)
                    return false;
                n = n / 2;
            }
            return true;
        }
    }
    exports.Util = Util;
});
define("web-audio-analyser", ["require", "exports", "util"], function (require, exports, util_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function AudioAnalyser(context, opts) {
        //
        //	init
        //
        if (!context)
            throw new Error('Invalid or missing audio context.');
        if (!opts)
            opts = {};
        let analyser;
        let freqByteData;
        let binCount;
        let levelsCount = opts.levelsCount || 128;
        let levelsBins;
        let levels = [];
        if (!util_1.Util.isPow2(levelsCount))
            throw new Error('levelsCount must be a power of 2.');
        //
        //	methods
        //
        const getAnalyserNode = () => { return analyser; };
        const getLevels = () => { return levels; };
        const setup = () => {
            analyser = context.createAnalyser();
            analyser.smoothingTimeConstant = 0.8;
            analyser.fftSize = 1024;
            analyser.connect(context.destination);
            binCount = analyser.frequencyBinCount;
            levelsBins = Math.floor(binCount / levelsCount);
            if (binCount !== 512)
                throw new Error(`Expected bin count to be 512, was ${binCount}`);
            freqByteData = new Uint8Array(binCount);
        };
        const update = () => {
            analyser.getByteFrequencyData(freqByteData);
            updateLevels();
        };
        const updateLevels = () => {
            for (let i = 0; i < levelsCount; i++) {
                let sum = 0;
                for (let j = 0; j < levelsBins; j++) {
                    sum += freqByteData[(i * levelsBins) + j];
                }
                levels[i] = sum / levelsBins / 256;
                levels[i] *= 1 + (i / levelsCount) / 2;
            }
        };
        return {
            setup,
            update,
            getAnalyserNode,
            getLevels,
        };
    }
    exports.AudioAnalyser = AudioAnalyser;
});
define("web-audio-context", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function AudioContextManager() {
        const Sound = (filename, buffer, isPlaying) => {
            return {
                filename,
                buffer,
                isPlaying
            };
        };
        const context = (() => {
            let audioContext = window.AudioContext || window.webkitAudioContext || -1;
            if (audioContext === -1)
                throw new Error('Web audio is not supported on your platform.');
            return new audioContext();
        })();
        const sounds = {};
        const getContext = () => { return context; };
        const loadSound = (filename) => {
            let loader = new Promise((resolve, reject) => {
                let request = new XMLHttpRequest(), fullfile = '/sounds/' + filename;
                request.open('GET', fullfile);
                request.responseType = 'arraybuffer';
                request.onload = () => {
                    context.decodeAudioData(request.response, (buffer) => {
                        const sound = Sound(filename, buffer, false);
                        resolve(sound);
                    });
                };
                request.onerror = (err) => reject(err);
                request.send();
            });
            return loader.then((sound) => {
                sounds[sound.filename] = sound;
            });
        };
        const loadSounds = (names) => {
            return names.map((name) => { return loadSound(name); });
        };
        const getSound = (filename) => {
            let sound = sounds[filename];
            if (sound === undefined)
                throw new Error(`Unrecognized sound ${filename}.`);
            return sound;
        };
        const play = (filename, to) => {
            return new Promise((resolve, reject) => {
                if (to === undefined)
                    to = context.destination;
                let sound = getSound(filename);
                if (sound.isPlaying)
                    return;
                let source = context.createBufferSource();
                source.buffer = sound.buffer;
                source.connect(to);
                source.start(0);
                sounds[filename].source = source;
                sounds[filename].isPlaying = true;
                resolve();
            });
        };
        const togglePlay = (filename, to) => {
            return new Promise((resolve, reject) => {
                let sound = getSound(filename);
                if (sound.isPlaying)
                    return stop(filename);
                return play(filename, to);
            });
        };
        const stop = (filename) => {
            return new Promise((resolve, reject) => {
                let sound = getSound(filename);
                let source = sound.source;
                if (source === undefined)
                    throw new Error(`No source for sound ${filename}.`);
                source.stop(0);
                sound.isPlaying = false;
                resolve();
            });
        };
        return {
            getContext,
            loadSounds,
            play,
            stop,
            togglePlay
        };
    }
    exports.AudioContextManager = AudioContextManager;
});
define("web-audio", ["require", "exports", "web-audio-analyser", "web-audio-context"], function (require, exports, web_audio_analyser_1, web_audio_context_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        AudioAnalyser: web_audio_analyser_1.AudioAnalyser,
        AudioContextManager: web_audio_context_1.AudioContextManager
    };
});
//# sourceMappingURL=web-aud.js.map
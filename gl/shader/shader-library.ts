import { Basic } from '../shaders/shader-basic'
import { PBR1 } from '../shaders/shader-pbr1'
import { Skybox } from '../shaders/shader-skybox'
import { Volume } from '../shaders/shader-volume'
import { GenShadows1 } from '../shaders/shader-gen-shadows1'
import { UseShadows1 } from '../shaders/shader-use-shadows1'

const ShaderLibrary = {
	Basic,
	GenShadows1,
	UseShadows1,
	PBR1,
	Skybox,
	Volume,
}

export { ShaderLibrary }
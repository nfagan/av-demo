import * as primitives from '../shader-builder/primitives'
import * as components from '../shader-builder/components/fragment'

export function fragment(): primitives.FragmentSource {
    return {
        precision: 'mediump',
        varyings: ['normal', 'uv'],
        uniforms: [],
        userUniforms: [
            {name: 'uDensity', kind: 'float'},
            {name: 'uWeight', kind: 'float'},
            {name: 'uExposure', kind: 'float'},
            {name: 'uDecay', kind: 'float'},
            {name: 'uNumSamples', kind: 'int'}
        ],
        body: () => '',
        main: [
            () => components.main.makeUniform({name: 'uDensity', kind: 'float'}, 'float'),
            components.main.assignWhite,
        ]
    }
}
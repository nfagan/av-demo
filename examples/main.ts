import * as controlsTest from './controls-test'
import * as barebones from './barebones'
import * as volume from './volumetric-test'
import * as height from './heightmap-test'
import * as anim from './anim-test'
import * as phys from './phys-test'
import { init } from './demo-util'

const hash = window.location.hash

if (hash === '#anim') {
    const glInit = init()
    anim.main(glInit)

} else if (hash === '#height') {
    const glInit = init()
    height.main(glInit)

} else if (hash === '#volume') {
    volume.main()

} else if (hash === '#controls') {
    controlsTest.main()

} else if (hash === '#barebones') {
    barebones.main()

} else {
    console.warn(`Unrecognized demo "${hash}".`)
    const glInit = init()
    height.main(glInit)
}
import * as wgl from '../gl/web-gl'
import { vec3 } from 'gl-matrix'

let _tmp0: vec3 = vec3.create()
let _tmp1: vec3 = vec3.create()
let _tmp2: vec3 = vec3.create()

function getTriangle(): Array<vec3> {
    const p1 = vec3.fromValues(1, 1, 0)
    const p2 = vec3.fromValues(1, -1, 0)
    const p3 = vec3.fromValues(-1, -1, 0)

    return [p1, p2, p3]
}

function getTriangle2(): Array<vec3> {
    const p1 = vec3.fromValues(-1, -1, 0)
    const p2 = vec3.fromValues(-1, 1, 0)
    const p3 = vec3.fromValues(1, 1, 0)

    return [p1, p2, p3]
}

function _getNonIndexedTriangles(mesh: wgl.Mesh, N: number): Array<Array<vec3>> {
    const verts = mesh.getVertices()
    const allTriangles: Array<Array<vec3>> = []
    for (let i = 0; i < verts.length / 3; i++) {
        const _verts: Array<vec3> = []
        const idx = i * 3
        for (let j = 0; j < 3; j++) {
            const pos = verts[idx + j].getAttribute('in_position')
            _verts.push(vec3.fromValues(pos[0] * N, pos[1] * N, pos[2] * N))
        }
        allTriangles.push(_verts)
    }
    return allTriangles
}

function getTriangles(mesh: wgl.Mesh, N: number): Array<Array<vec3>> {
    if (!mesh.hasIndices())
        return _getNonIndexedTriangles(mesh, N)
    
    const vertices = mesh.getVertices()
    const indices = mesh.getIndices()

    const allTriangles: Array<Array<vec3>> = []

    for (let i = 0; i < indices.length / 3; i++) {
        const _verts: Array<vec3> = []
        const idx = i * 3
        for (let j = 0; j < 3; j++) {
            const vIndex = indices[idx + j]
            const pos = vertices[vIndex].getAttribute('in_position')
            _verts.push(vec3.fromValues(pos[0] * N, pos[1] * N, pos[2] * N))
        }
        allTriangles.push(_verts)
    }

    return allTriangles
}

function getPointInsideTriangle(tp: vec3, p1: vec3, p2: vec3, p3: vec3): boolean {
    //  http://blackpawn.com/texts/pointinpoly/

    _tmp0 = vec3.sub(_tmp0, p3, p1)
    _tmp1 = vec3.sub(_tmp1, p2, p1)
    _tmp2 = vec3.sub(_tmp2, tp, p1)

    const dot00 = vec3.dot(_tmp0, _tmp0)
    const dot01 = vec3.dot(_tmp0, _tmp1)
    const dot02 = vec3.dot(_tmp0, _tmp2)
    const dot11 = vec3.dot(_tmp1, _tmp1)
    const dot12 = vec3.dot(_tmp1, _tmp2)

    const invDenom = 1 / (dot00 * dot11 - dot01 * dot01)
    const u = (dot11 * dot02 - dot01 * dot12) * invDenom
    const v = (dot00 * dot12 - dot01 * dot02) * invDenom

    return (u >= 0) && (v >= 0) && (u + v < 1)
}

function getLowestRoot(a: number, b: number, c: number): {root: number, success: boolean} {
    const res = { root: -1, success: false }

    const determinant = (b * b) - (4 * a * c)

    if (determinant < 0)
        return res

    const sqrtD = Math.sqrt(determinant)

    let r1 = (-b - sqrtD) / (2 * a)
    let r2 = (-b + sqrtD) / (2 * a)

    if (r1 > r2) {
        const tmp = r1
        r1 = r2
        r2 = tmp
    }

    if (r1 > 0) {
        res.root = r1
        res.success = true
        return res
    }

    if (r2 > 0) {
        res.root = r2
        res.success = true
        return res
    }

    return res
}

function getT01(out: Array<number>, plane: wgl.physics.Plane, p: vec3, velocity: vec3): void {
    const denom = vec3.dot(plane.normal, velocity)
    const dist = plane.signedDistance(p)
    const epsilon = 1e-7

    //  if traveling perpendicular to plane
    if (Math.abs(denom) < epsilon) {
        //  embedded in plane
        if (Math.abs(dist) < 1) {
            out[0] = 0
            out[1] = 1
            return
        }
        //  outside of plane
        out[0] = -2
        out[1] = 2
        return
    }

    const t0 = (1 - dist) / denom
    const t1 = (-1 - dist) / denom

    out[0] = t0
    out[1] = t1
}

function getPlaneIntersectionPoint(out: vec3, pos: vec3, plane: wgl.physics.Plane, t0: number, velocity: vec3): void {
    _tmp0 = vec3.sub(_tmp0, pos, plane.normal)
    _tmp1[0] = t0
    _tmp1[1] = t0
    _tmp1[2] = t0
    out = vec3.add(out, _tmp0, vec3.multiply(_tmp1, _tmp1, velocity))
}

function getTriangleMesh(gl: WebGLRenderingContext, triangleVerts: Array<vec3>): wgl.Mesh {
    const mesh = new wgl.Mesh(gl)
    for (let i = 0; i < triangleVerts.length; i++) {
        const vertex = new wgl.Vertex()
        vertex.setPosition(Float32Array.from(triangleVerts[i]))
        vertex.setNormal(Float32Array.from([0, 0, 0]))
        mesh.addVertex(vertex)
    }
    mesh.setTopology(wgl.Topologies.TRIANGLES)
    mesh.finalize()
    return mesh
}

export async function main() {

	document.body.style.padding = '0'
	document.body.style.margin = '0'
	document.body.style.position = 'fixed'

	const keyboard = new wgl.Input.Keyboard()
	const canvas = new wgl.Canvas()
	const canvasElement = canvas.element

	const gl = canvasElement.getContext('webgl')

    if (!gl) {
        console.error('Unable to initialize web GL ontext.')
        return
    }

	const scene = new wgl.Scene(gl)
	const renderer = new wgl.renderers.functional(gl)
	const camera = new wgl.Camera()
	const keyboardMoveControls = new wgl.Controls.Movement.Keyboard(keyboard, camera, 5.0)
	const mouseInput = new wgl.Input.PointerLock(canvas.element)
    const rotationControls = new wgl.Controls.Orbit.Orbit2(mouseInput, camera)
    
    const mat = wgl.Material.Physical(gl)

    const sphere = wgl.MeshFactory.create(gl, 'sphere')
    // const cube = wgl.MeshFactory.create(gl, 'cube')
    const cubeSource = await wgl.Loaders.text.load('/obj/test:cube.dae')
    const cubeElements = wgl.parsers.collada(gl, cubeSource)

    const cube = cubeElements[0].mesh
    // const triangleMesh = wgl.MeshFactory.create(gl, 'triangle')

    const light = wgl.Light.Point(gl)
    const lightPos = [5, 10, 5]
    const lightModel = new wgl.Model(gl, sphere, mat.clone())
    lightModel.receivesLight = false

    light.getAttribute('position').setValue(lightPos)
    lightModel.setPosition(lightPos)
    
    const sphereModel = new wgl.Model(gl, sphere, mat)
    const cubeModel = new wgl.Model(gl, cube, mat)

	renderer.setAspect(canvas.aspect)
	renderer.setNearFar(0.1, 1000)
	
	scene.add([cubeModel, sphereModel, light, lightModel])

	const sphereColor = [0.25, 1, 0.25]
	const spherePosition = vec3.fromValues(0, 0, 3)

	sphereModel.setPosition(spherePosition)
    sphereModel.material.getAttribute('albedo').setValue(sphereColor)
    
    cubeModel.setPosition([0, 0, 0])
    cubeModel.setScale(2)

    camera.setPosition([0, 5, 8])
    
    //
    //  phys
    //

    const collisionPointModel = new wgl.Model(gl, sphere, mat.clone())
    collisionPointModel.setScale(0.1)
    collisionPointModel.material.getAttribute('albedo').setValue([1, 0, 0])
    
    scene.add(collisionPointModel)

    const cubeTriangles = getTriangles(cube, 2)

    const triangle = getTriangle()
    const triangle2 = getTriangle2()
    const plane = new wgl.physics.Plane()

    const t01: Array<number> = []
    let intersectionPoint = vec3.create()
    // const edgeIndices = [[1, 0], [2, 1], [2, 0]]
    const edgeIndices = [[0, 1], [1, 2], [2, 0]]

    const sphereVelocity = vec3.create()

    const triangleMesh = getTriangleMesh(gl, triangle)
    const triangleMesh2 = getTriangleMesh(gl, triangle2)
    const triangleModel = new wgl.Model(gl, triangleMesh, mat.clone())
    const triangleModel2 = new wgl.Model(gl, triangleMesh2, triangleModel.material)
    triangleModel.receivesLight = false
    triangleModel2.receivesLight = false

    triangleModel.material.getAttribute('albedo').setValue([1, 0, 0])
    triangleModel.setPosition([0, 0, 0.01])
    triangleModel2.setPosition([0, 0, 0.01])

    // const allTriangles = [triangle, triangle2]
    const allTriangles = cubeTriangles

    scene.add([triangleModel, triangleModel2])

    let t = Infinity
    let collisionPoint = vec3.create()
    let intersectionDistance = vec3.create()
    let fs = vec3.create()
    let foundCollision = false

	const animate = () => {

		keyboardMoveControls.update()
        rotationControls.update()

        for (let i = 0; i < sphereVelocity.length; i++) sphereVelocity[i] = 0

        const _v = keyboard.isDown(wgl.Input.Keys.shift) ? 0.15 : 0.05
        
        if (keyboard.isDown(wgl.Input.Keys.Up)) sphereVelocity[2] = -_v
        if (keyboard.isDown(wgl.Input.Keys.Down)) sphereVelocity[2] = _v
        if (keyboard.isDown(wgl.Input.Keys.Left)) sphereVelocity[0] = -_v
        if (keyboard.isDown(wgl.Input.Keys.Right)) sphereVelocity[0] = _v
        if (keyboard.isDown(wgl.Input.Keys.Z)) sphereVelocity[1] = -_v
        if (keyboard.isDown(wgl.Input.Keys.X)) sphereVelocity[1] = _v

        //
        //  begin collision
        //

        foundCollision = false
        t = Infinity

        allTriangles.map(tri => collisionDetection(tri))

        if (foundCollision) {
            for (let i = 0; i < sphereVelocity.length; i++) sphereVelocity[i] = 0
            collisionPointModel.setPosition(collisionPoint)
        }

        //
        //  end collision
        //

        vec3.add(sphereModel.position, sphereModel.position, sphereVelocity)

        renderer.render(scene, camera)
        
		window.requestAnimationFrame(animate)
	}

    animate()
    
    function collisionDetection(triangle: Array<vec3>) {

        //
        //  collision
        //

        t = Infinity

        wgl.physics.Plane.fromTriangle(plane, triangle[0], triangle[1], triangle[2])

        _tmp0 = vec3.normalize(_tmp0, sphereVelocity)

        if(!plane.isFrontFacingTo(_tmp0))
            return

        getT01(t01, plane, spherePosition, sphereVelocity)

        let t0 = t01[0]
        let t1 = t01[1]

        const embedded = t0 === 0 && t1 === 1
        const invalidT = (t0 >= 1 || t0 < 0) && (t1 > 1 || t1 <= 0)

        if (invalidT)
            return

        getPlaneIntersectionPoint(intersectionPoint, spherePosition, plane, t0, sphereVelocity)

        //  hits face

        if (getPointInsideTriangle(intersectionPoint, triangle[0], triangle[1], triangle[2])) {
            console.log('Inside face!')
            if (t0 < t) {
                t = t0
                collisionPoint.set(intersectionPoint)
                foundCollision = true
            }
            return
        }

        //  sweep vertices
        for (let i = 0; i < triangle.length; i++) {
            const vp = triangle[i]
            const A = vec3.squaredLength(sphereVelocity)
            const B = 2 * (vec3.dot(sphereVelocity, vec3.subtract(_tmp0, spherePosition, vp)))
            _tmp0 = vec3.subtract(_tmp0, vp, spherePosition)
            const C = vec3.squaredLength(_tmp0) - 1
            const res = getLowestRoot(A, B, C)
            const _t = res.root
            if (res.success && _t < t && _t >= 0 && _t <= 1) {
                console.log('Vertex!')
                t = _t
                collisionPoint.set(vp)
                foundCollision = true
            }
            if (!res.success)
                console.log('No root for vertex.')
        }

        //  sweep edges
        for (let i = 0; i < edgeIndices.length; i++) {
            const edgeIndex = edgeIndices[i]
            const p1 = triangle[edgeIndex[0]]
            const p2 = triangle[edgeIndex[1]]
            const edge = vec3.sub(_tmp0, p2, p1)
            const baseToVertex = vec3.sub(_tmp1, p1, spherePosition)

            const eDotV = vec3.dot(edge, sphereVelocity)
            const vDotBase = vec3.dot(sphereVelocity, baseToVertex)
            const eDotBase = vec3.dot(edge, baseToVertex)
            const eLengthSq = vec3.squaredLength(edge)
            const vLengthSq = vec3.squaredLength(sphereVelocity)
            const bLengthSq = vec3.squaredLength(baseToVertex)

            const A = eLengthSq * -vLengthSq + (eDotV * eDotV)
            const B = eLengthSq * 2 * vDotBase - (2 * (eDotV * eDotBase))
            const C = eLengthSq * (1 - bLengthSq) + (eDotBase * eDotBase)

            const res = getLowestRoot(A, B, C)
            const _t = res.root

            if (res.success && _t < t && _t <= 1) {
                const f = (eDotV * _t - eDotBase) / eLengthSq
                if (f >= 0 && f <= 1) {
                    console.log('Edge!')
                    t = _t
                    for (let j = 0; j < fs.length; j++) fs[j] = f
                    _tmp2 = vec3.multiply(_tmp2, fs, edge)
                    collisionPoint = vec3.add(collisionPoint, p1, _tmp2)
                    foundCollision = true
                }
            }
            if (!res.success) {
                console.log('No root for edge.')
                console.log(`A is: ${A}, B is: ${B}, C is: ${C}`)
            }
        }
    }

}
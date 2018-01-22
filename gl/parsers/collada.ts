import { Mesh } from '../mesh/mesh'
import { Vertex, Topologies } from '../mesh/vertex'
import * as assert from '../util/assert-util'
import { mat4, vec4 } from 'gl-matrix'
import { assertNotNaN, assertInteger, assertNValues } from '../util/assert-util';
import * as math from '../math/wgl-math'
import * as matrix from '../util/matrix-util'
import * as constants from '../shader/constants'
import { Skeleton, Joint, JointTransform } from '../animation/skeleton'
import { KeyFrames, SkeletalAnimation } from '../animation/skeletal-animator'

type jointWeightT = {weights: Array<number>, ids: Array<number>}
type joinPackedDataT = { [key:string]: {data: Array<number>, stride: number, offset: number} }
type jointDataT = {[key: string]: {index: number, inverseBindT: mat4}}
type jointSkeletonT = {name: string, index: number, inverseBindT: mat4, children: Array<jointSkeletonT>}
type keyFrameT = {[key: string]: KeyFrames}
type skeletonReturnT = {keyFrames: keyFrameT, animation: SkeletalAnimation, skeleton: Skeleton, vertexData: Array<jointWeightT>}
type keyFramePrimitiveT = {times: Array<number>, transforms: Array<mat4>}
type parseReturnT = {mesh: Mesh, transform: mat4, skeleton: Skeleton, animation: SkeletalAnimation}
type sceneTransformReturnT = {[key: string]: mat4}

export function collada(gl: WebGLRenderingContext, data: string): Array<parseReturnT> {

    const dom = new DOMParser()
    const xml = dom.parseFromString(data, 'text/xml')

    checkParseError(xml)

    const geometryLibrary = xml.getElementsByTagName('library_geometries')
    assertNElements(geometryLibrary, 1, 'library_geometries')
    const geometries = geometryLibrary[0].getElementsByTagName('geometry')
    
    const out: Array<parseReturnT> = []

    const sceneTransforms = parseVisualSceneMatrices(xml)

    for (const geometry of geometries) {
        const meshData = parseOneMesh(gl, xml, geometry, sceneTransforms)
        out.push(meshData)
    }

    return out
}

function parseOneMesh(gl: WebGLRenderingContext, 
    xml: Document, 
    geometryElement: Element, 
    sceneTransforms: sceneTransformReturnT): parseReturnT {

    const allVerts: Array<Vertex> = []
    const allVertIndices: Array<number> = []

    const meshElement = requireOneTag(geometryElement, 'mesh', 'mesh data')

    const _vertexInfo = meshElement.getElementsByTagName('polylist')

    assertNElements(_vertexInfo, 1, 'polylist')

    const vertexInfo = _vertexInfo[0]

    const sources = vertexInfo.getElementsByTagName('input')
    const _vCount = vertexInfo.getElementsByTagName('vcount')
    const _vIndices = vertexInfo.getElementsByTagName('p')

    assertNElements(_vCount, 1, 'vcount')
    assertNElements(_vIndices, 1, 'p')

    const vCount = _vCount[0].innerHTML
        .split(' ')
        .map(ind => parseInt(ind))
        .filter(v => !isNaN(v))
    const vIndices = _vIndices[0].innerHTML
        .split(' ')
        .map(ind => parseInt(ind))
        .filter(v => !isNaN(v))

    const stride = sources.length
    const packedData: joinPackedDataT = {}

    for (let i = 0; i < sources.length; i++) {
        const source = sources[i]
        let id = source.getAttribute('source')
        let el = xml.querySelector(id)
        let arr = el.getElementsByTagName('float_array')
        let meta = el.getElementsByTagName('technique_common')
        let semantic = source.getAttribute('semantic')

        if (arr.length === 0) {
            const alias = el.getElementsByTagName('input')
            assertNElements(alias, 1, 'input')
            id = alias[0].getAttribute('source')
            if (id === '')
                throw new Error('Invalid position data.')
            let src = xml.querySelector(id)
            arr = src.getElementsByTagName('float_array')
            meta = src.getElementsByTagName('technique_common')
        }

        assertNElements(arr, 1, 'float_array')
        assertNElements(meta, 1, 'meta')

        const accessor = meta[0].getElementsByTagName('accessor')

        assertNElements(accessor, 1, 'accessor')

        const stride = parseInt(accessor[0].getAttribute('stride'))
        const offset = parseInt(source.getAttribute('offset'))

        assert.assertNotNaN(stride, `stride for ${semantic}`)
        assert.assertNotNaN(offset, `offset for ${semantic}`)

        const dat = arr[0].innerHTML.split(' ')
            .map(val => parseFloat(val))
            .filter(val => !isNaN(val))

        packedData[semantic] = {
            data: dat,
            stride: stride,
            offset: offset
        }
    }

    //
    //  skeleton
    //

    const animationData = parseSkeleton(xml)
    const hasAnimationData = animationData.animation !== null

    //
    //  vertex data
    //

    const vertices: Array<Vertex> = []
    const aliases = Object.keys(packedData)
    const hashIndices: {[key: string]: number} = {}
    const posAlias = 'VERTEX'
    const positionIndex = aliases.indexOf(posAlias)

    if (positionIndex === -1)
        throw new Error(`Mesh must have "${posAlias}" attribute.`)

    let vertexIndex = 0

    for (let i = 0; i < vIndices.length; i += stride) {
        const inds: Array<number> = []

        for (let j = 0; j < stride; j++) {
            let alias = aliases[j]
            const offset = packedData[alias].offset
            const indexIntoVIndices = i + offset
            const indexIntoData = vIndices[indexIntoVIndices]
            inds.push(indexIntoData)
        }

        const hash = inds.join(',')
        const hashedIndex = hashIndices[hash]

        if (hashedIndex !== undefined) {
            allVertIndices.push(hashedIndex)
            continue
        }

        allVertIndices.push(vertexIndex)
        hashIndices[hash] = vertexIndex
        vertexIndex++

        const vert = new Vertex()

        for (let j = 0; j < stride; j++) {
            let alias = aliases[j]

            const offset = packedData[alias].offset
            const _stride = packedData[alias].stride
            const data = packedData[alias].data
            const indexIntoVIndices = i + offset
            const indexIntoData = vIndices[indexIntoVIndices] * _stride
            const vertData = new Float32Array(_stride)

            for (let k = 0; k < _stride; k++) {
                const dat = data[indexIntoData + k]
                if (isNaN(dat) || dat === undefined || dat === null)
                    throw new Error('Bad vertex data.')
                vertData[k] = dat
            }

            if (alias === 'VERTEX')
                vert.setPosition(vertData)
            else if (alias === 'NORMAL')
                vert.setNormal(vertData)
            else if (alias === 'TEXCOORD')
                vert.setUV(vertData)
            else if (alias === 'COLOR')
                continue
            else
                throw new Error(`Unrecognized alias "${alias}".`)
        }

        if (hasAnimationData) {
            const posOffset = packedData[posAlias].offset
            const posIdx = vIndices[i + posOffset]
            if (posIdx > animationData.vertexData.length - 1 || posIdx < 0)
                throw new Error('Position index was out of bounds.')
            const jointData = animationData.vertexData[posIdx]
            vert.setWeights(Float32Array.from(jointData.weights))
            vert.setIndices(Float32Array.from(jointData.ids))
        }

        allVerts.push(vert)
    }

    //
    //  build mesh
    //

    const mesh = new Mesh(gl)

    for (let vert of allVerts) {
        mesh.addVertex(vert)
    }

    mesh.setTopology(Topologies.TRIANGLES)

    if (allVertIndices.length > 0) {
        mesh.setIndices(Uint16Array.from(allVertIndices))
    }

    mesh.finalize()

    //
    //  parse transform
    //

    const meshId = geometryElement.getAttribute('id')

    let meshTransform = sceneTransforms[meshId]

    if (meshTransform === undefined)
        meshTransform = mat4.create()

    return {
        mesh,
        transform: meshTransform,
        animation: animationData.animation,
        skeleton: animationData.skeleton,
    }
}

function parseVisualSceneMatrices(xml: Document): sceneTransformReturnT {
    const visualScenes = xml.querySelector('library_visual_scenes')
    const matrixMap: sceneTransformReturnT = {}

    if (!visualScenes) {
        console.warn('No visual scene node present.')
        return matrixMap
    }

    const visualScene = requireOneTag(visualScenes, 'visual_scene', 'visual scene')
    const nodes = visualScene.getElementsByTagName('node')

    for (const node of nodes) {
        const nodeId = node.getAttribute('id')
        const matrix = node.querySelector('matrix')
        const link = node.querySelector('instance_geometry')

        if (!matrix || !link) {
            continue
        }

        const url = link.getAttribute('url')

        if (url === '') {
            console.warn(`No url was provided for node "${nodeId}".`)
            continue
        }

        const trans = parseInnerHTMLToNumbers(matrix, parseFloat)
        const id = url.substr(1, url.length-1)
        matrixMap[id] = getMat4FromLinearData(trans)
    }

    return matrixMap 
}

function parseSkeleton(xml: Document): skeletonReturnT {

    const libControllers = xml.getElementsByTagName('library_controllers')

    const nullSrc: skeletonReturnT = {
        animation: null,
        keyFrames: null,
        skeleton: null,
        vertexData: null
    }

    if (libControllers.length === 0) {
        return nullSrc
    }
    
    assertNElements(libControllers, 1, 'library controllers')

    const controllers = libControllers[0].getElementsByTagName('controller')

    if (controllers.length === 0){
        return nullSrc
    } else {
        if (controllers.length !== 1)
            throw new Error('Multiple animation sources not yet supported.')
    }

    const controller = controllers[0]

    const jointData: jointDataT = {}

    const joint = requireOneTag(controller, 'joints', 'joints')
    const inputs = joint.getElementsByTagName('input')
    assertNElements(inputs, 2, 'joint data')

    const jointLinks = filterNodeList(inputs, inp => inp.getAttribute('semantic') === 'JOINT')
    const invBindLinks = filterNodeList(inputs, inp => inp.getAttribute('semantic') === 'INV_BIND_MATRIX')

    assert.assertNValues(jointLinks, 1, 'joint names')
    assert.assertNValues(invBindLinks, 1, 'inverse bind matrix data')

    const jointLink = jointLinks[0]
    const invBindLink = invBindLinks[0]

    const jointSource = xml.querySelector(jointLink.getAttribute('source'))

    if (!jointSource)
        throw new Error('No joint name source found.')
    
    const nameArray = requireOneTag(jointSource, 'Name_array', 'joint names')
    const jointNames = nameArray.innerHTML.split(' ')

    const invBindSource = xml.querySelector(invBindLink.getAttribute('source'))
    if (!invBindSource)
        throw new Error('No joint inverse bind matrices found')

    const invBindTechnique = requireOneTag(invBindSource, 'technique_common', 'inverse bind technique')
    const invBindAccessor = requireOneTag(invBindTechnique, 'accessor', 'inverse bind accessor')

    const invBindMatStride = parseInt(invBindAccessor.getAttribute('stride'))
    if (invBindMatStride !== 16)
        throw new Error(`mat4 inverse bind transform stride must be 16; was ${invBindMatStride}`)

    const invBindArrays = requireOneTag(invBindSource, 'float_array', 'inverse bind array source')

    const inverseBindMatrices = invBindArrays.innerHTML.split(' ')
        .map(el => parseFloat(el))
        .filter(el => !isNaN(el))
    
    if (inverseBindMatrices.length !== parseInt(invBindArrays.getAttribute('count')))
        throw new Error('Wrong number of parsed inverse bind matrix data elements.')
    
    const invStride = invBindSource.getElementsByTagName('technique_common')
    
    for (let j = 0; j < jointNames.length; j++) {
        const name = jointNames[j]
        const ind = j * invBindMatStride
        const invBindMat = getMat4FromLinearData(inverseBindMatrices, ind)
        jointData[name] = {
            index: j,
            inverseBindT: invBindMat
        }
    }

    //
    //  get weights
    //

    const vertexWeights = requireOneTag(controller, 'vertex_weights', 'vertex weights')

    const vCounts = requireOneTag(vertexWeights, 'vcount', 'vertex counts').innerHTML
        .split(' ')
        .map(val => parseInt(val))
        .filter(val => !isNaN(val))

    const vIndices = requireOneTag(vertexWeights, 'v', 'vertex indices').innerHTML
        .split(' ')
        .map(val => parseInt(val))
        .filter(val => !isNaN(val))

    const vSources = vertexWeights.getElementsByTagName('input')

    const vJointSources = filterNodeList(vSources, el => el.getAttribute('semantic') === 'JOINT')
    const vWeightSources = filterNodeList(vSources, el => el.getAttribute('semantic') === 'WEIGHT')

    assert.assertNValues(vJointSources, 1, 'the joint source')
    assert.assertNValues(vWeightSources, 1, 'the weight source')

    const vJointSource = vJointSources[0]
    const vWeightSource = vWeightSources[0]

    const vWeights = requireOneTag(xml.querySelector(vWeightSource.getAttribute('source')), 'float_array', 'weight data')
        .innerHTML
        .split(' ')
        .map(val => parseFloat(val))
        .filter(val => !isNaN(val))

    const jointOffset = parseInt(vJointSource.getAttribute('offset'))
    const weightOffset = parseInt(vWeightSource.getAttribute('offset'))

    assert.assertNotNaN(jointOffset, 'joint offset')
    assert.assertNotNaN(weightOffset, 'weight offset')

    let vJointDataInd = 0
    let vJointData: Array<jointWeightT> = []
    const nInfluencers = constants.N_JOINT_INFLUENCES_PER_VERTEX

    for (let i = 0; i < vCounts.length; i++) {
        const currentNAffected = vCounts[i]
        const vertData: {weights: Array<number>, ids: Array<number>} = {weights: [], ids: []}
        for (let j = 0; j < currentNAffected; j++) {
            const weightInd = vIndices[vJointDataInd + weightOffset]
            const weight = vWeights[weightInd]
            const jointId = vIndices[vJointDataInd + jointOffset]
            vertData.weights.push(weight)
            vertData.ids.push(jointId)
            vJointDataInd += 2
        }
        vJointData.push(requireNWeights(vertData, nInfluencers))
    }

    //
    //  get hierarchy
    //

    const armatureNode = xml.getElementById('Armature')
    const root = filterNodeList(armatureNode.children, el => el.getAttribute('type') === 'JOINT')
    assert.assertNValues(root, 1, 'the root joint')
    const tree = buildJointSkeleton(root[0], jointData, null)
    const skeleton = new Skeleton(tree)

    //
    //  get key frames
    //

    const animNode = requireOneTag(xml, 'library_animations', 'key frames parent node')
    const keyFrameNodes = animNode.getElementsByTagName('animation')
    const keyFrames: keyFrameT = {}
    const animation = new SkeletalAnimation(skeleton, 0)
    let duration = -Infinity

    for (let i = 0; i < keyFrameNodes.length; i++) {
        const _keyFrames = processOneAnimationNode(xml, keyFrameNodes[i])
        const times = _keyFrames.keyFrames.times
        const transforms = _keyFrames.keyFrames.transforms
        const jointTransforms = transforms.map(trans => JointTransform.fromMat4(trans))
        const frame = new KeyFrames(times, jointTransforms)
        const lastT = frame.getLastTime()
        if (lastT > duration)
            duration = lastT
        keyFrames[_keyFrames.name] = frame
        animation.addSource(_keyFrames.name, frame)
    }

    if (duration === -Infinity) {
        console.warn('Invalid key frame data detected.')
    } else {
        animation.duration = duration
    }

    return {
        keyFrames,
        animation,
        skeleton: skeleton,
        vertexData: vJointData
    }
}

function getMat4FromLinearData(data: Array<number>, ind: number = 0): mat4 {
    return mat4.fromValues(
        data[ind + 0],
        data[ind + 4],
        data[ind + 8],
        data[ind + 12],
        // 
        data[ind + 1],
        data[ind + 5],
        data[ind + 9],
        data[ind + 13],
        //
        data[ind + 2],
        data[ind + 6],
        data[ind + 10],
        data[ind + 14],
        //
        data[ind + 3],
        data[ind + 7],
        data[ind + 11],
        data[ind + 15]
    )
}

function processOneAnimationNode(xml: Document, node: Element): {name: string, keyFrames: keyFramePrimitiveT} {
    const armStr = 'Armature_'
    const id = node.getAttribute('id')
    const armIndex = id.indexOf(armStr)
    const poseMatIndex = id.indexOf('_pose_matrix')
    if (armIndex === -1 || poseMatIndex === -1)
        throw new Error('Invalid joint name format in animation node id.')
    const name = id.substr(armIndex + armStr.length, poseMatIndex - armStr.length)

    const times = xml.getElementById(id + '-input')
        .getElementsByTagName('float_array')[0]
        .innerHTML
        .split(' ')
        .map(val => parseFloat(val))
        .filter(val => !isNaN(val))

    const transformData = xml.getElementById(id + '-output')
        .getElementsByTagName('float_array')[0]
        .innerHTML
        .split(' ')
        .map(val => parseFloat(val))
        .filter(val => !isNaN(val))
    
    if (times.length * 16 !== transformData.length)
        throw new Error(`Failed to parse transformation / key frame time data for "${id}".`)
    
    const keyFrames: keyFramePrimitiveT = {
        times: [],
        transforms: []
    }
    
    for (let i = 0; i < times.length; i++) {
        const ind = i * 16
        keyFrames.times.push(times[i])
        keyFrames.transforms.push(getMat4FromLinearData(transformData, ind))
    }
    
    return {
        name,
        keyFrames
    }
}

function buildJointSkeleton(node: Element, flatJointData: jointDataT, parent: Joint): Joint {
    const children = filterNodeList(node.children, el => el.getAttribute('type') === 'JOINT')
    const current = getTreeJointData(node, flatJointData)
    for (let i = 0; i < children.length; i++) {
        buildJointSkeleton(children[i], flatJointData, current)
    }
    if (!parent)
        parent = current
    else
        parent.addChild(current)
    return parent
}

function getTreeJointData(node: Element, flatData: jointDataT): Joint {
    const name = node.getAttribute('sid')
    return new Joint(name, flatData[name].index, flatData[name].inverseBindT)
}

function requireNWeights(vertData: jointWeightT, N: number): jointWeightT {
    if (vertData.weights.length === N) {
        return vertData
    } else if (vertData.weights.length < N) {
        const n = N - vertData.weights.length
        for (let i = 0; i < n; i++) {
            vertData.ids.push(0)
            vertData.weights.push(0)
        }
        return vertData
    }
    const fixedData: jointWeightT = { weights: [], ids: [] }
    const weightsWithIndices = []
    for (let i = 0; i < vertData.weights.length; i++) {
        weightsWithIndices[i] = [vertData.weights[i], i]
    }
    weightsWithIndices.sort((a, b) => b[0] - a[0])
    let sum = 0
    for (let i = 0; i < N; i++) {
        let index = weightsWithIndices[i][1]
        const weight = vertData.weights[index]
        fixedData.weights[i] = weight
        fixedData.ids[i] = vertData.ids[index]
        sum += weight
    }
    for (let i = 0; i < N; i++) {
        fixedData.weights[i] /= sum
    }
    return fixedData
}

function parseNumbers(data: Array<string>, func: (a: string) => number): Array<number> {
    const out: Array<number> = []
    for (let i = 0; i < data.length; i++) {
        const val = func(data[i])
        if (!isNaN(val))
            out.push(val)
    }
    return out
}

function parseInnerHTMLToNumbers(el: Element, parseFunc: (a: string) => number, splitOn: string = ' '): Array<number> {
    return parseNumbers(el.innerHTML.split(splitOn), parseFunc)
} 

function requireOneTag(el: Element | Document, tagName: string, alias: string): Element {
    let child = el.getElementsByTagName(tagName)
    assertNElements(child, 1, alias)
    return child[0]
}

function filterNodeList(els: NodeListOf<Element> | HTMLCollection, func: (el: Element) => boolean): Array<Element> {
    const out: Array<Element> = []
    for (let i = 0; i < els.length; i++) {
        if (func(els[i]))
            out.push(els[i])
    }
    return out
}

function checkParseError(xml: Document): void {
    if (xml.getElementsByTagName('parsererror').length !== 0) {
        throw new Error('Failed to parse XML structure.')
    }
}

function assertNElements(els: NodeListOf<Element>, n: number, alias: string) {
    if (els.length !== n)
        throw new Error(`Expected ${n} elements of kind "${alias}", but there were ${els.length}.`)
}

function assertHasAttribute(el: Element, attr: string, alias: string = '(unspecified)'): void {
    if (!el.hasAttribute(attr))
        throw new Error(`Attribute "${attr}" does not exist on element of type "${alias}".`)
}
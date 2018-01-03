/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vector_util__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__matrix_util__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type_util__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__attribute_util__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_util__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__time_util__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assert_util__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__default_util__ = __webpack_require__(42);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return __WEBPACK_IMPORTED_MODULE_6__assert_util__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return __WEBPACK_IMPORTED_MODULE_7__default_util__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "vector", function() { return __WEBPACK_IMPORTED_MODULE_0__vector_util__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "matrix", function() { return __WEBPACK_IMPORTED_MODULE_1__matrix_util__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "types", function() { return __WEBPACK_IMPORTED_MODULE_2__type_util__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "common", function() { return __WEBPACK_IMPORTED_MODULE_4__common_util__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "attribute", function() { return __WEBPACK_IMPORTED_MODULE_3__attribute_util__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "time", function() { return __WEBPACK_IMPORTED_MODULE_5__time_util__; });











/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gl_matrix_common__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gl_matrix_mat2__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gl_matrix_mat2d__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gl_matrix_mat3__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gl_matrix_mat4__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gl_matrix_quat__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gl_matrix_vec2__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__gl_matrix_vec3__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__gl_matrix_vec4__ = __webpack_require__(16);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__gl_matrix_common__; });
/* unused harmony reexport mat2 */
/* unused harmony reexport mat2d */
/* unused harmony reexport mat3 */
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__gl_matrix_mat4__; });
/* unused harmony reexport quat */
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_6__gl_matrix_vec2__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_7__gl_matrix_vec3__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_8__gl_matrix_vec4__; });
/**
 * @fileoverview gl-matrix - High performance matrix and vector operations
 * @author Brandon Jones
 * @author Colin MacKenzie IV
 * @version 2.4.0
 */

/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */
// END HEADER













/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARRAY_TYPE", function() { return ARRAY_TYPE; });
/* harmony export (immutable) */ __webpack_exports__["setMatrixArrayType"] = setMatrixArrayType;
/* harmony export (immutable) */ __webpack_exports__["toRadian"] = toRadian;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

/**
 * Common utilities
 * @module glMatrix
 */

// Configuration Constants
const EPSILON = 0.000001;
/* harmony export (immutable) */ __webpack_exports__["EPSILON"] = EPSILON;

let ARRAY_TYPE = (typeof Float32Array !== 'undefined') ? Float32Array : Array;
const RANDOM = Math.random;
/* harmony export (immutable) */ __webpack_exports__["RANDOM"] = RANDOM;


/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Type} type Array type, such as Float32Array or Array
 */
function setMatrixArrayType(type) {
  ARRAY_TYPE = type;
}

const degree = Math.PI / 180;

/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */
function toRadian(a) {
  return a * degree;
}

/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */
function equals(a, b) {
  return Math.abs(a - b) <= EPSILON*Math.max(1.0, Math.abs(a), Math.abs(b));
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export clamp */
/* harmony export (immutable) */ __webpack_exports__["f"] = signedClamp;
/* harmony export (immutable) */ __webpack_exports__["a"] = abs;
/* harmony export (immutable) */ __webpack_exports__["e"] = radians;
/* unused harmony export vecsum */
/* harmony export (immutable) */ __webpack_exports__["g"] = vecmean;
/* harmony export (immutable) */ __webpack_exports__["b"] = distance;
/* unused harmony export max */
/* unused harmony export min */
/* harmony export (immutable) */ __webpack_exports__["c"] = isPow2;
/* harmony export (immutable) */ __webpack_exports__["d"] = lookAt;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(1);

function clamp(val, min, max) {
    for (let i = 0; i < val.length; i++) {
        if (val[i] < min)
            val[i] = min;
        if (val[i] > max)
            val[i] = max;
    }
}
function signedClamp(val, min, max) {
    for (let i = 0; i < val.length; i++) {
        let _val = val[i];
        let sign = _val < 0 ? -1 : 1;
        if (Math.abs(_val) < min) {
            val[i] = min * sign;
        }
        if (Math.abs(_val) > max) {
            val[i] = max * sign;
        }
    }
}
function abs(val) {
    for (let i = 0; i < val.length; i++) {
        val[i] = Math.abs(val[i]);
    }
}
function radians(val) {
    return __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* glMatrix */].toRadian(val);
}
function vecsum(arr) {
    if (arr.length === 0)
        return null;
    let res;
    if (arr[0].length === 2) {
        res = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* vec2 */].fromValues(0, 0);
    }
    else if (arr[0].length === 3) {
        res = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0, 0, 0);
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < res.length; j++) {
            res[j] += arr[i][j];
        }
    }
    return res;
}
function vecmean(arr) {
    let sum = vecsum(arr);
    if (sum === null)
        return null;
    let mean = sum;
    for (let i = 0; i < mean.length; i++) {
        mean[i] /= arr.length;
    }
    return mean;
}
function distance(a, b) {
    return Math.sqrt(Math.pow(b[0] - a[0], 2) + Math.pow(b[1] - a[1], 2));
}
function max(arr) {
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max)
            max = arr[i];
    }
    return max;
}
function min(arr) {
    let min = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min)
            min = arr[i];
    }
    return min;
}
function isPow2(n) {
    if (n === 0)
        return false;
    while (n !== 1) {
        if (n % 2 !== 0)
            return false;
        n = n / 2;
    }
    return true;
}
function lookAt(out, eye, center, up) {
    let x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
    let eyex = eye[0];
    let eyey = eye[1];
    let eyez = eye[2];
    let upx = up[0];
    let upy = up[1];
    let upz = up[2];
    let centerx = center[0];
    let centery = center[1];
    let centerz = center[2];
    if (Math.abs(eyex - centerx) < __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* glMatrix */].EPSILON &&
        Math.abs(eyey - centery) < __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* glMatrix */].EPSILON &&
        Math.abs(eyez - centerz) < __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* glMatrix */].EPSILON) {
        return __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].identity(out);
    }
    z0 = eyex - centerx;
    z1 = eyey - centery;
    z2 = eyez - centerz;
    len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
    z0 *= len;
    z1 *= len;
    z2 *= len;
    x0 = upy * z2 - upz * z1;
    x1 = upz * z0 - upx * z2;
    x2 = upx * z1 - upy * z0;
    len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
    if (!len) {
        x0 = 0;
        x1 = 0;
        x2 = 0;
    }
    else {
        len = 1 / len;
        x0 *= len;
        x1 *= len;
        x2 *= len;
    }
    y0 = z1 * x2 - z2 * x1;
    y1 = z2 * x0 - z0 * x2;
    y2 = z0 * x1 - z1 * x0;
    len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
    if (!len) {
        y0 = 0;
        y1 = 0;
        y2 = 0;
    }
    else {
        len = 1 / len;
        y0 *= len;
        y1 *= len;
        y2 *= len;
    }
    out[0] = x0;
    out[1] = y0;
    out[2] = z0;
    out[3] = 0;
    out[4] = x1;
    out[5] = y1;
    out[6] = z1;
    out[7] = 0;
    out[8] = x2;
    out[9] = y2;
    out[10] = z2;
    out[11] = 0;
    out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
    out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
    out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
    out[15] = 1;
    return out;
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Shader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ShaderProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ShaderTypes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_resource__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__uniforms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__texture_texture__ = __webpack_require__(8);




var ShaderTypes;
(function (ShaderTypes) {
    ShaderTypes[ShaderTypes["VERTEX"] = 0] = "VERTEX";
    ShaderTypes[ShaderTypes["FRAGMENT"] = 1] = "FRAGMENT";
})(ShaderTypes || (ShaderTypes = {}));
class ShaderAttributes {
    constructor() {
        this.position = {
            name: 'in_position',
            location: null
        };
        this.uv = {
            name: 'in_uv',
            location: null
        };
        this.normal = {
            name: 'in_normal',
            location: null
        };
    }
}
class Shader extends __WEBPACK_IMPORTED_MODULE_0__common_resource__["a" /* Resource */] {
    constructor(gl, src) {
        super();
        this.gl = gl;
        this.source = src.source;
        this.type = Shader.getShaderType(gl, src.type);
        this.isValid = true;
        this.uniforms = new __WEBPACK_IMPORTED_MODULE_2__uniforms__["b" /* UniformMap */](src.uniforms, true);
        this.setup();
    }
    getGLShader() {
        return this.shader;
    }
    hasUniform(name) {
        return this.uniforms.hasUniform(name);
    }
    setup() {
        const gl = this.gl;
        let shader = gl.createShader(this.type);
        gl.shaderSource(shader, this.source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            let message = 'Shader compilation error: ' +
                gl.getShaderInfoLog(shader);
            console.error(message);
            gl.deleteShader(shader);
            shader = null;
            this.isValid = false;
        }
        this.shader = shader;
    }
    static getShaderType(gl, type) {
        if (type == ShaderTypes.FRAGMENT)
            return gl.FRAGMENT_SHADER;
        if (type == ShaderTypes.VERTEX)
            return gl.VERTEX_SHADER;
        throw new Error('Unrecognized shader type.');
    }
}
//
//	program
//
class ShaderProgram extends __WEBPACK_IMPORTED_MODULE_0__common_resource__["a" /* Resource */] {
    constructor(gl) {
        super();
        this._isBound = false;
        this.uniformLocations = {};
        this.isValid = true;
        this.isFinalized = false;
        this.attributes = new ShaderAttributes();
        this.gl = gl;
    }
    attach(shaders) {
        this.assertNotFinalized('attach');
        for (let shader of shaders) {
            if (!shader.isValid)
                throw new Error('Attempted to attach an invalid shader.');
        }
        this.shaders = shaders;
        this.finalize();
        this.getAttributeLocations();
    }
    bind() {
        this.assertFinalized('bind');
        this.gl.useProgram(this.program);
        this._isBound = true;
    }
    unbind() {
        this.assertFinalized('unbind');
        this.gl.useProgram(null);
        this._isBound = false;
    }
    hasUniform(name) {
        for (let shader of this.shaders) {
            if (shader.hasUniform(name))
                return true;
        }
        return false;
    }
    isBound() {
        return this._isBound;
    }
    setUniform(name, value) {
        if (typeof (value) == 'number') {
            this.setf(name, value);
        }
        else if (typeof (value) == 'boolean') {
            this.setb(name, value);
        }
        else if (Array.isArray(value)) {
            this.setVec3f(name, value);
        }
        else if (value instanceof __WEBPACK_IMPORTED_MODULE_3__texture_texture__["b" /* Texture */]) {
            this.seti(name, value.index);
        }
        else if (__WEBPACK_IMPORTED_MODULE_1__util_util__["types"].isMat4(value)) {
            this.setMat4f(name, value);
        }
        else if (__WEBPACK_IMPORTED_MODULE_1__util_util__["types"].isVec3(value)) {
            this.setVec3f(name, value);
        }
    }
    setf(name, value) {
        this.gl.uniform1f(this.getUniformLocation(name), value);
    }
    setb(name, value) {
        this.gl.uniform1i(this.getUniformLocation(name), value ? 1 : 0);
    }
    seti(name, value) {
        this.gl.uniform1i(this.getUniformLocation(name), value);
    }
    setMat4f(name, value) {
        this.gl.uniformMatrix4fv(this.getUniformLocation(name), false, value);
    }
    setVec3f(name, value) {
        value = __WEBPACK_IMPORTED_MODULE_1__util_util__["vector"].requireVec3(value);
        this.gl.uniform3fv(this.getUniformLocation(name), value);
    }
    finalize() {
        this.assertNotFinalized('finalize');
        const gl = this.gl;
        const shaders = this.shaders;
        let program = gl.createProgram();
        for (let i = 0; i < shaders.length; i++) {
            gl.attachShader(program, shaders[i].getGLShader());
        }
        gl.linkProgram(program);
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            let message = 'Shader program initialization error: ' +
                gl.getProgramInfoLog(program);
            console.error(message);
            program = null;
            this.isValid = false;
        }
        this.program = program;
        this.isFinalized = true;
    }
    getAttributeLocation(kind) {
        return this.attributes[kind].location;
    }
    getAttributeLocations() {
        let attributes = this.attributes;
        const gl = this.gl;
        const program = this.program;
        //
        //	@TODO: Avoid string indexing into attributes
        //
        let attribNames = Object.keys(attributes);
        for (let attrib of attribNames) {
            attributes[attrib].location = gl.getAttribLocation(program, attributes[attrib].name);
        }
    }
    getProgram() {
        return this.program;
    }
    getUniformLocation(name) {
        this.assertFinalized('uniform');
        let loc = this.uniformLocations[name];
        if (loc === undefined) {
            loc = this.gl.getUniformLocation(this.program, name);
            if (loc == null) {
                console.warn(`Unrecognized uniform name "${name}".`);
            }
            else {
                this.uniformLocations[name] = loc;
            }
        }
        return loc;
    }
    assertNotFinalized(op) {
        if (this.isFinalized)
            throw new Error(`Cannot call method / op "${op}" after finalizing the program.`);
    }
    assertFinalized(op) {
        if (!this.isFinalized)
            throw new Error(`Cannot call method / op "${op}" before finalizing the program.`);
    }
}



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mesh; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vertex__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_resource__ = __webpack_require__(6);


class Mesh extends __WEBPACK_IMPORTED_MODULE_1__common_resource__["a" /* Resource */] {
    constructor(gl) {
        super();
        this.isFinalized = false;
        this._isBound = false;
        this.vertices = [];
        this.indices = new Uint16Array(0);
        this.gl = gl;
        this.vbo = this.gl.createBuffer();
        this.ebo = this.gl.createBuffer();
    }
    addVertex(vertex) {
        this.assertNotFinalized('addVertex');
        if (this.vertices.length !== 0) {
            if (vertex.size() !== this.vertices[0].size())
                throw new Error('All vertices must have consistent numbers of elements.');
        }
        this.vertices.push(vertex);
    }
    setIndices(indices) {
        this.assertNotFinalized('setIndices');
        this.indices = indices;
    }
    setTopology(topology) {
        this.assertNotFinalized('setTopology');
        this.topology = topology;
    }
    getDrawType() {
        const gl = this.gl;
        if (this.topology === __WEBPACK_IMPORTED_MODULE_0__vertex__["a" /* Topologies */].TRIANGLES) {
            return gl.TRIANGLES;
        }
        else if (this.topology === __WEBPACK_IMPORTED_MODULE_0__vertex__["a" /* Topologies */].TRIANGLE_STRIP) {
            return gl.TRIANGLE_STRIP;
        }
        else {
            throw new Error(`Unrecognized topology ${this.topology}`);
        }
    }
    draw() {
        this.assertFinalized('draw');
        const gl = this.gl;
        let nIndices = this.indices.length;
        let useIndices = nIndices > 0;
        let nVertices = this.vertices.length;
        let drawType = this.getDrawType();
        if (useIndices) {
            gl.drawElements(drawType, nIndices, gl.UNSIGNED_SHORT, 0);
        }
        else {
            gl.drawArrays(drawType, 0, nVertices);
        }
    }
    finalize() {
        this.assertNotFinalized('finalize');
        if (this.vertices.length === 0)
            return;
        this.storeBufferData();
        this.isFinalized = true;
    }
    isBound() {
        return this._isBound;
    }
    bind(program) {
        this.assertFinalized('bind');
        if (this.vertices.length === 0)
            return;
        const gl = this.gl;
        let vert0 = this.vertices[0];
        let stride = vert0.size();
        let bytes = vert0.bytesPerElement();
        let offset = 0;
        let nIndices = this.indices.length;
        let attrib = 0;
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vbo);
        //	position
        let posLoc = program.getAttributeLocation('position');
        gl.enableVertexAttribArray(posLoc);
        gl.vertexAttribPointer(posLoc, 3, gl.FLOAT, false, stride * bytes, offset * bytes);
        offset += 3;
        //	uv
        if (vert0.sizeUV() > 0) {
            let uvLoc = program.getAttributeLocation('uv');
            gl.enableVertexAttribArray(uvLoc);
            gl.vertexAttribPointer(uvLoc, 2, gl.FLOAT, false, stride * bytes, offset * bytes);
            offset += 2;
        }
        //	normals
        if (vert0.sizeNormal() > 0) {
            let normLoc = program.getAttributeLocation('normal');
            gl.enableVertexAttribArray(normLoc);
            gl.vertexAttribPointer(normLoc, 3, gl.FLOAT, false, stride * bytes, offset * bytes);
            offset += 3;
        }
        //	indices
        if (nIndices > 0) {
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.ebo);
        }
        this._isBound = true;
    }
    unbind() {
        const gl = this.gl;
        const indices = this.indices;
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        if (indices.length > 0) {
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
        }
        this._isBound = false;
    }
    dispose() {
        if (!this.isFinalized)
            return;
        const gl = this.gl;
        gl.deleteBuffer(this.vbo);
        gl.deleteBuffer(this.ebo);
    }
    storeBufferData() {
        const gl = this.gl;
        let data = this.getInterleavedData();
        let nIndices = this.indices.length;
        //	vbo
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vbo);
        gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
        //	ebo
        if (nIndices > 0) {
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.ebo);
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, gl.STATIC_DRAW);
        }
    }
    getInterleavedData() {
        const vertices = this.vertices;
        let nVertices = vertices.length;
        if (nVertices == 0)
            return new Float32Array(0);
        let totalSize = nVertices * vertices[0].size();
        let allData = new Float32Array(totalSize);
        let allDataIndex = 0;
        for (let i = 0; i < nVertices; i++) {
            let data = vertices[i].getInterleavedData();
            for (let j = 0; j < data.length; j++) {
                allData[allDataIndex] = data[j];
                allDataIndex++;
            }
        }
        return allData;
    }
    assertNotFinalized(op) {
        if (!op)
            op = '(unspecified)';
        if (this.isFinalized)
            throw new Error(`Method / operation "${op}" was called after finalizing mesh.`);
    }
    assertFinalized(op = '(unspecified)') {
        if (!this.isFinalized)
            throw new Error(`Method / operation "${op}" was called before finalizing mesh.`);
    }
}



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Resource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_uuid__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_uuid__);

class Resource {
    constructor() {
        this.uuid = Object(__WEBPACK_IMPORTED_MODULE_0_uuid__["v4"])();
    }
    static equals(a, b) {
        if (a === null || b === null)
            return false;
        return a.uuid === b.uuid;
    }
    static compareUUID(a, b) {
        if (a.uuid === b.uuid)
            return 0;
        return 1;
    }
}



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Vertex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Topologies; });
class Vertex {
    constructor() {
        this.positionCount = 0;
        this.uvCount = 0;
        this.normalCount = 0;
        this.position = new Float32Array(3);
        this.uv = new Float32Array(2);
        this.normal = new Float32Array(3);
    }
    setPosition(pos) {
        this.assertValidArraySize(pos, 3, 'position');
        this.position = pos;
        this.positionCount = 3;
    }
    setUV(uv) {
        this.assertValidArraySize(uv, 2, 'uv');
        this.uv = uv;
        this.uvCount = 2;
    }
    setNormal(norm) {
        this.assertValidArraySize(norm, 3, 'normals');
        this.normal = norm;
        this.normalCount = 3;
    }
    sizePosition() {
        return this.positionCount;
    }
    sizeUV() {
        return this.uvCount;
    }
    sizeNormal() {
        return this.normalCount;
    }
    size() {
        return this.sizePosition() + this.sizeNormal() + this.sizeUV();
    }
    bytesPerElement() {
        return this.position.BYTES_PER_ELEMENT;
    }
    getInterleavedData() {
        let data = new Float32Array(this.size());
        let i = 0;
        for (let j = 0; j < this.positionCount; j++) {
            data[i] = this.position[j];
            i++;
        }
        for (let j = 0; j < this.uvCount; j++) {
            data[i] = this.uv[j];
            i++;
        }
        for (let j = 0; j < this.normalCount; j++) {
            data[i] = this.normal[j];
            i++;
        }
        return data;
    }
    assertValidArraySize(arr, size, type) {
        if (!type)
            type = '(unspecified)';
        if (arr.length !== size) {
            let message = `Expected attribute of type "${type}" to be of size ${size};
				instead was ${arr.length}`;
            throw new Error(message);
        }
    }
}
class Topologies {
}
Topologies.TRIANGLES = 0;
Topologies.TRIANGLE_STRIP = 1;



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Tex2D;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_wgl_math__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_resource__ = __webpack_require__(6);


class TextureOpts {
    static Default2D(gl) {
        let opts = new TextureOpts();
        opts.level = 0;
        opts.height = 0;
        opts.border = 0;
        opts.internalFormat = gl.RGBA;
        opts.sourceFormat = gl.RGBA;
        opts.type = gl.TEXTURE_2D;
        opts.dataType = gl.UNSIGNED_BYTE;
        opts.wrapS = gl.CLAMP_TO_EDGE;
        opts.wrapT = gl.CLAMP_TO_EDGE;
        return opts;
    }
}
/* unused harmony export TextureOpts */

function Tex2D(gl, data, opts) {
    if (!opts) {
        opts = TextureOpts.Default2D(gl);
        if (data && data instanceof HTMLImageElement) {
            opts.width = data.width;
            opts.height = data.height;
        }
    }
    return new Texture(gl, data, opts);
}
class Texture extends __WEBPACK_IMPORTED_MODULE_1__common_resource__["a" /* Resource */] {
    constructor(gl, data, opts) {
        super();
        this.gl = gl;
        this.opts = opts;
        this.data = data;
        this._exists = false;
        this._bound = false;
        this.create();
    }
    configure2D(tex) {
        if (this.data === null || this.data instanceof Uint8Array) {
            this.configure2DData(this.data, tex);
        }
        else {
            this.configure2DImage(this.data, tex);
        }
    }
    configure2DImage(data, tex) {
        const opts = this.opts;
        const gl = this.gl;
        gl.texImage2D(gl.TEXTURE_2D, opts.level, opts.internalFormat, opts.sourceFormat, opts.dataType, data);
        if (__WEBPACK_IMPORTED_MODULE_0__math_wgl_math__["c" /* isPow2 */](data.width) && __WEBPACK_IMPORTED_MODULE_0__math_wgl_math__["c" /* isPow2 */](data.height)) {
            gl.generateMipmap(gl.TEXTURE_2D);
        }
        else {
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, opts.wrapS);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, opts.wrapT);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        }
    }
    configure2DData(data, tex) {
        const opts = this.opts;
        const gl = this.gl;
        gl.texImage2D(gl.TEXTURE_2D, opts.level, opts.internalFormat, opts.width, opts.height, opts.border, opts.sourceFormat, opts.dataType, data);
    }
    create() {
        this.assertDoesNotExist('create');
        const gl = this.gl;
        const opts = this.opts;
        const tex = gl.createTexture();
        gl.bindTexture(opts.type, tex);
        if (opts.type === gl.TEXTURE_2D) {
            this.configure2D(tex);
        }
        else {
            throw new Error(`Unrecognized texture type.`);
        }
        gl.bindTexture(opts.type, null);
        this._exists = true;
        this.handle = tex;
        return this.handle;
    }
    exists() {
        return this._exists;
    }
    isBound() {
        return this._bound;
    }
    clone() {
        //
        //	@TODO: Fix cloning
        //
        throw new Error('Cloning not yet implemented');
    }
    bind() {
        this.assertExists('bind');
        this.gl.bindTexture(this.opts.type, this.handle);
        this._bound = true;
    }
    unbind() {
        this.assertExists('unbind');
        this.gl.bindTexture(this.opts.type, null);
        this._bound = false;
    }
    dispose() {
        const gl = this.gl;
        if (!this.exists()) {
            console.warn('Attempted to dispose of a texture before creating it.');
            return;
        }
        gl.deleteTexture(this.handle);
        this._exists = false;
    }
    assertExists(op) {
        if (!this.exists())
            throw new Error(`Operation / method "${op}" requires a call to create().`);
    }
    assertDoesNotExist(op) {
        if (this.exists())
            throw new Error(`Operation / method "${op}" cannot be called once the texture exists.`);
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = Texture;



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "core", function() { return core; });
/* harmony export (immutable) */ __webpack_exports__["isMat4"] = isMat4;
/* harmony export (immutable) */ __webpack_exports__["isVec3"] = isVec3;
/* harmony export (immutable) */ __webpack_exports__["isPrimitive"] = isPrimitive;
/* harmony export (immutable) */ __webpack_exports__["isNElementArray"] = isNElementArray;
/* harmony export (immutable) */ __webpack_exports__["isTexture"] = isTexture;
/* harmony export (immutable) */ __webpack_exports__["isArray"] = isArray;
/* harmony export (immutable) */ __webpack_exports__["isGLMArrayType"] = isGLMArrayType;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__texture_texture__ = __webpack_require__(8);

var core;
(function (core) {
    core[core["mat4"] = 0] = "mat4";
    core[core["vec3"] = 1] = "vec3";
    core[core["Float32Array"] = 2] = "Float32Array";
    core[core["number"] = 3] = "number";
    core[core["boolean"] = 4] = "boolean";
    core[core["string"] = 5] = "string";
})(core || (core = {}));
function isMat4(data) {
    return data.length === 16;
}
function isVec3(data) {
    return data.length === 3;
}
function isPrimitive(data) {
    if (typeof data === 'number' || typeof data === 'boolean' || typeof data === 'string')
        return true;
    return false;
}
function isNElementArray(data, N) {
    if (isPrimitive(data)) {
        return false;
    }
    else if (isTexture(data)) {
        return false;
    }
    return ('length' in data) && (data.length === N);
}
function isTexture(data) {
    return data instanceof __WEBPACK_IMPORTED_MODULE_0__texture_texture__["b" /* Texture */];
}
function isArray(data) {
    if (Array.isArray(data))
        return true;
    return false;
}
function isGLMArrayType(data) {
    if (isPrimitive(data)) {
        return false;
    }
    else if (!(data instanceof Float32Array)) {
        return false;
    }
    else {
        return isMat4(data) || isVec3(data);
    }
}


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Model; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_resource__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mesh_mesh__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_gl_matrix__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__math_wgl_math__ = __webpack_require__(3);





class Model extends __WEBPACK_IMPORTED_MODULE_0__common_resource__["a" /* Resource */] {
    constructor(gl, program, mesh, material) {
        super();
        this.gl = gl;
        this.program = program;
        this.mesh = mesh;
        this.material = material;
        this.position = __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["d" /* vec3 */].fromValues(0, 0, 0);
        this.rotation = __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["d" /* vec3 */].fromValues(0, 0, 0);
        this.scale = __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["d" /* vec3 */].fromValues(1, 1, 1);
        this.alias = '';
        this.transform = new __WEBPACK_IMPORTED_MODULE_3__util_util__["matrix"].transform;
        this.parent = null;
        this.children = {};
        this.onBeforeRender = () => { };
        this.onAfterRender = () => { };
    }
    setMesh(mesh) {
        this.mesh = mesh;
    }
    setMaterial(material) {
        this.material = material;
    }
    setPosition(pos) {
        this.position = __WEBPACK_IMPORTED_MODULE_3__util_util__["vector"].requireVec3(pos);
    }
    setRotation(rot) {
        this.rotation = __WEBPACK_IMPORTED_MODULE_3__util_util__["vector"].requireVec3(rot);
    }
    setScale(scale) {
        this.scale = __WEBPACK_IMPORTED_MODULE_3__util_util__["vector"].requireVec3(scale);
    }
    getPosition() { return this.position; }
    getRotation() { return this.rotation; }
    getScale() { return this.scale; }
    getWorldMatrix() {
        let local = this.getLocalMatrix();
        if (this.parent === null)
            return local;
        let parentWorld = this.parent.getWorldMatrix();
        return __WEBPACK_IMPORTED_MODULE_2_gl_matrix__["b" /* mat4 */].mul(parentWorld, parentWorld, local);
    }
    getLocalMatrix() {
        let trans = this.transform;
        let pos = this.position;
        let rot = this.rotation;
        let scl = this.scale;
        return trans.identity()
            .translate(pos)
            .rotate(__WEBPACK_IMPORTED_MODULE_4__math_wgl_math__["e" /* radians */](rot[0]), [1, 0, 0])
            .rotate(__WEBPACK_IMPORTED_MODULE_4__math_wgl_math__["e" /* radians */](rot[1]), [0, 1, 0])
            .rotate(__WEBPACK_IMPORTED_MODULE_4__math_wgl_math__["e" /* radians */](rot[2]), [0, 0, 1])
            .scale(scl)
            .mat();
    }
    static compareMeshUUID(a, b) {
        return __WEBPACK_IMPORTED_MODULE_1__mesh_mesh__["a" /* Mesh */].compareUUID(a.mesh, b.mesh);
    }
    addChild(model) {
        this.children[model.uuid] = model;
        model.parent = this;
    }
    hasChild(model) {
        return this.children[model.uuid] !== undefined;
    }
    removeChild(model) {
        if (!this.hasChild(model)) {
            throw new Error(`Model "${model.alias}" is not a child of "${this.alias}".`);
        }
        this.children[model.uuid] = undefined;
        model.parent = null;
    }
}



/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection
var rng;

var crypto = global.crypto || global.msCrypto; // for IE 11
if (crypto && crypto.getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef
  rng = function whatwgRNG() {
    crypto.getRandomValues(rnds8);
    return rnds8;
  };
}

if (!rng) {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);
  rng = function() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}

module.exports = rng;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32)))

/***/ }),
/* 12 */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

module.exports = bytesToUuid;


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeshLibrary; });
class MeshLibrary {
}
MeshLibrary.quad = {
    data: [
        -1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0,
        -1.0, -1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0,
        1.0, -1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0,
        1.0, -1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0,
        1.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0,
        -1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0
    ],
    indices: []
};
MeshLibrary.triangle = {
    data: [
        -1.0, -1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0,
        1.0, -1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0,
        0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0
    ],
    indices: []
};
MeshLibrary.skybox = {
    data: [
        -1.0, -1.0, -1.0, 0, 0,
        -1.0, 1.0, -1.0, 0, 0.5,
        1.0, -1.0, -1.0, 0.25, 0,
        -1.0, 1.0, -1.0, 0, 0.5,
        1.0, 1.0, -1.0, 0.25, 0.5,
        1.0, -1.0, -1.0, 0.25, 0,
        -1.0, -1.0, 1.0, 0.25, 0,
        1.0, -1.0, 1.0, 0.5, 0,
        -1.0, 1.0, 1.0, 0.25, 0.5,
        -1.0, 1.0, 1.0, 0.25, 0.5,
        1.0, -1.0, 1.0, 0.5, 0,
        1.0, 1.0, 1.0, 0.5, 0.5,
        -1.0, 1.0, -1.0, 0.5, 0,
        -1.0, 1.0, 1.0, 0.5, 0.5,
        1.0, 1.0, -1.0, 0.75, 0,
        -1.0, 1.0, 1.0, 0.5, 0.5,
        1.0, 1.0, 1.0, 0.75, 0.5,
        1.0, 1.0, -1.0, 0.75, 0,
        -1.0, -1.0, -1.0, 0, 0.5,
        1.0, -1.0, -1.0, 0.25, 0.5,
        -1.0, -1.0, 1.0, 0, 1,
        -1.0, -1.0, 1.0, 0, 1,
        1.0, -1.0, -1.0, 0.25, 0.5,
        1.0, -1.0, 1.0, 0.25, 1,
        -1.0, -1.0, -1.0, 0.25, 0.5,
        -1.0, -1.0, 1.0, 0.25, 1,
        -1.0, 1.0, -1.0, 0.5, 0.5,
        -1.0, -1.0, 1.0, 0.25, 1,
        -1.0, 1.0, 1.0, 0.5, 1,
        -1.0, 1.0, -1.0, 0.5, 0.5,
        1.0, -1.0, -1.0, 0.5, 0.5,
        1.0, 1.0, -1.0, 0.75, 0.5,
        1.0, -1.0, 1.0, 0.5, 1,
        1, -1, 1.0, 0.5, 1,
        1, 1, -1, 0.75, 0.5,
        1, 1, 1, 0.75, 1,
    ],
    indices: []
};
MeshLibrary.cube2 = {
    data: [
        -0.5, -0.5, -0.5, 0.0, 0.0, -1.0, 0.0, 0.0,
        0.5, -0.5, -0.5, 0.0, 0.0, -1.0, 1.0, 0.0,
        0.5, 0.5, -0.5, 0.0, 0.0, -1.0, 1.0, 1.0,
        0.5, 0.5, -0.5, 0.0, 0.0, -1.0, 1.0, 1.0,
        -0.5, 0.5, -0.5, 0.0, 0.0, -1.0, 0.0, 1.0,
        -0.5, -0.5, -0.5, 0.0, 0.0, -1.0, 0.0, 0.0,
        -0.5, -0.5, 0.5, 0.0, 0.0, 1.0, 0.0, 0.0,
        0.5, -0.5, 0.5, 0.0, 0.0, 1.0, 1.0, 0.0,
        0.5, 0.5, 0.5, 0.0, 0.0, 1.0, 1.0, 1.0,
        0.5, 0.5, 0.5, 0.0, 0.0, 1.0, 1.0, 1.0,
        -0.5, 0.5, 0.5, 0.0, 0.0, 1.0, 0.0, 1.0,
        -0.5, -0.5, 0.5, 0.0, 0.0, 1.0, 0.0, 0.0,
        -0.5, 0.5, 0.5, -1.0, 0.0, 0.0, 1.0, 0.0,
        -0.5, 0.5, -0.5, -1.0, 0.0, 0.0, 1.0, 1.0,
        -0.5, -0.5, -0.5, -1.0, 0.0, 0.0, 0.0, 1.0,
        -0.5, -0.5, -0.5, -1.0, 0.0, 0.0, 0.0, 1.0,
        -0.5, -0.5, 0.5, -1.0, 0.0, 0.0, 0.0, 0.0,
        -0.5, 0.5, 0.5, -1.0, 0.0, 0.0, 1.0, 0.0, 0.5,
        0.5, 0.5, 1.0, 0.0, 0.0, 1.0, 0.0, 0.5, 0.5,
        -0.5, 1.0, 0.0, 0.0, 1.0, 1.0, 0.5, -0.5, -0.5,
        1.0, 0.0, 0.0, 0.0, 1.0, 0.5, -0.5, -0.5,
        1.0, 0.0, 0.0, 0.0, 1.0, 0.5, -0.5, 0.5, 1.0,
        0.0, 0.0, 0.0, 0.0, 0.5, 0.5, 0.5, 1.0, 0.0,
        0.0, 1.0, 0.0, -0.5, -0.5, -0.5, 0.0, -1.0,
        0.0, 0.0, 1.0, 0.5, -0.5, -0.5, 0.0, -1.0,
        0.0, 1.0, 1.0, 0.5, -0.5, 0.5, 0.0, -1.0,
        0.0, 1.0, 0.0, 0.5, -0.5, 0.5, 0.0, -1.0,
        0.0, 1.0, 0.0, -0.5, -0.5, 0.5, 0.0, -1.0,
        0.0, 0.0, 0.0, -0.5, -0.5, -0.5, 0.0, -1.0,
        0.0, 0.0, 1.0, -0.5, 0.5, -0.5, 0.0, 1.0,
        0.0, 0.0, 1.0, 0.5, 0.5, -0.5, 0.0, 1.0, 0.0,
        1.0, 1.0, 0.5, 0.5, 0.5, 0.0, 1.0, 0.0, 1.0, 0.0,
        0.5, 0.5, 0.5, 0.0, 1.0, 0.0, 1.0, 0.0, -0.5, 0.5,
        0.5, 0.0, 1.0, 0.0, 0.0, 0.0, -0.5, 0.5, -0.5,
        0.0, 1.0, 0.0, 0.0, 1.0
    ],
    indices: []
};
MeshLibrary.cube = {
    data: [
        -1.0, -1.0, 1.0,
        1.0, -1.0, 1.0,
        1.0, 1.0, 1.0,
        -1.0, 1.0, 1.0,
        -1.0, -1.0, -1.0,
        -1.0, 1.0, -1.0,
        1.0, 1.0, -1.0,
        1.0, -1.0, -1.0,
        -1.0, 1.0, -1.0,
        -1.0, 1.0, 1.0,
        1.0, 1.0, 1.0,
        1.0, 1.0, -1.0,
        -1.0, -1.0, -1.0,
        1.0, -1.0, -1.0,
        1.0, -1.0, 1.0,
        -1.0, -1.0, 1.0,
        1.0, -1.0, -1.0,
        1.0, 1.0, -1.0,
        1.0, 1.0, 1.0,
        1.0, -1.0, 1.0,
        -1.0, -1.0, -1.0,
        -1.0, -1.0, 1.0,
        -1.0, 1.0, 1.0,
        -1.0, 1.0, -1.0,
    ],
    indices: [
        0, 1, 2, 0, 2, 3,
        4, 5, 6, 4, 6, 7,
        8, 9, 10, 8, 10, 11,
        12, 13, 14, 12, 14, 15,
        16, 17, 18, 16, 18, 19,
        20, 21, 22, 20, 22, 23,
    ]
};



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = create;
/* unused harmony export fromMat4 */
/* unused harmony export clone */
/* unused harmony export copy */
/* unused harmony export fromValues */
/* unused harmony export set */
/* unused harmony export identity */
/* unused harmony export transpose */
/* unused harmony export invert */
/* unused harmony export adjoint */
/* unused harmony export determinant */
/* unused harmony export multiply */
/* unused harmony export translate */
/* unused harmony export rotate */
/* unused harmony export scale */
/* unused harmony export fromTranslation */
/* unused harmony export fromRotation */
/* unused harmony export fromScaling */
/* unused harmony export fromMat2d */
/* unused harmony export fromQuat */
/* unused harmony export normalFromMat4 */
/* unused harmony export projection */
/* unused harmony export str */
/* unused harmony export frob */
/* unused harmony export add */
/* unused harmony export subtract */
/* unused harmony export multiplyScalar */
/* unused harmony export multiplyScalarAndAdd */
/* unused harmony export exactEquals */
/* unused harmony export equals */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(2);
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */



/**
 * 3x3 Matrix
 * @module mat3
 */

/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](9);
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {mat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */
function fromMat4(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[4];
  out[4] = a[5];
  out[5] = a[6];
  out[6] = a[8];
  out[7] = a[9];
  out[8] = a[10];
  return out;
}

/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {mat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */
function clone(a) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](9);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}

/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}

/**
 * Create a new mat3 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} A new mat3
 */
function fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](9);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}

/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} out
 */
function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}

/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    let a01 = a[1], a02 = a[2], a12 = a[5];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a01;
    out[5] = a[7];
    out[6] = a02;
    out[7] = a12;
  } else {
    out[0] = a[0];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a[1];
    out[4] = a[4];
    out[5] = a[7];
    out[6] = a[2];
    out[7] = a[5];
    out[8] = a[8];
  }

  return out;
}

/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function invert(out, a) {
  let a00 = a[0], a01 = a[1], a02 = a[2];
  let a10 = a[3], a11 = a[4], a12 = a[5];
  let a20 = a[6], a21 = a[7], a22 = a[8];

  let b01 = a22 * a11 - a12 * a21;
  let b11 = -a22 * a10 + a12 * a20;
  let b21 = a21 * a10 - a11 * a20;

  // Calculate the determinant
  let det = a00 * b01 + a01 * b11 + a02 * b21;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = b01 * det;
  out[1] = (-a22 * a01 + a02 * a21) * det;
  out[2] = (a12 * a01 - a02 * a11) * det;
  out[3] = b11 * det;
  out[4] = (a22 * a00 - a02 * a20) * det;
  out[5] = (-a12 * a00 + a02 * a10) * det;
  out[6] = b21 * det;
  out[7] = (-a21 * a00 + a01 * a20) * det;
  out[8] = (a11 * a00 - a01 * a10) * det;
  return out;
}

/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function adjoint(out, a) {
  let a00 = a[0], a01 = a[1], a02 = a[2];
  let a10 = a[3], a11 = a[4], a12 = a[5];
  let a20 = a[6], a21 = a[7], a22 = a[8];

  out[0] = (a11 * a22 - a12 * a21);
  out[1] = (a02 * a21 - a01 * a22);
  out[2] = (a01 * a12 - a02 * a11);
  out[3] = (a12 * a20 - a10 * a22);
  out[4] = (a00 * a22 - a02 * a20);
  out[5] = (a02 * a10 - a00 * a12);
  out[6] = (a10 * a21 - a11 * a20);
  out[7] = (a01 * a20 - a00 * a21);
  out[8] = (a00 * a11 - a01 * a10);
  return out;
}

/**
 * Calculates the determinant of a mat3
 *
 * @param {mat3} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  let a00 = a[0], a01 = a[1], a02 = a[2];
  let a10 = a[3], a11 = a[4], a12 = a[5];
  let a20 = a[6], a21 = a[7], a22 = a[8];

  return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}

/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function multiply(out, a, b) {
  let a00 = a[0], a01 = a[1], a02 = a[2];
  let a10 = a[3], a11 = a[4], a12 = a[5];
  let a20 = a[6], a21 = a[7], a22 = a[8];

  let b00 = b[0], b01 = b[1], b02 = b[2];
  let b10 = b[3], b11 = b[4], b12 = b[5];
  let b20 = b[6], b21 = b[7], b22 = b[8];

  out[0] = b00 * a00 + b01 * a10 + b02 * a20;
  out[1] = b00 * a01 + b01 * a11 + b02 * a21;
  out[2] = b00 * a02 + b01 * a12 + b02 * a22;

  out[3] = b10 * a00 + b11 * a10 + b12 * a20;
  out[4] = b10 * a01 + b11 * a11 + b12 * a21;
  out[5] = b10 * a02 + b11 * a12 + b12 * a22;

  out[6] = b20 * a00 + b21 * a10 + b22 * a20;
  out[7] = b20 * a01 + b21 * a11 + b22 * a21;
  out[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return out;
}

/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to translate
 * @param {vec2} v vector to translate by
 * @returns {mat3} out
 */
function translate(out, a, v) {
  let a00 = a[0], a01 = a[1], a02 = a[2],
    a10 = a[3], a11 = a[4], a12 = a[5],
    a20 = a[6], a21 = a[7], a22 = a[8],
    x = v[0], y = v[1];

  out[0] = a00;
  out[1] = a01;
  out[2] = a02;

  out[3] = a10;
  out[4] = a11;
  out[5] = a12;

  out[6] = x * a00 + y * a10 + a20;
  out[7] = x * a01 + y * a11 + a21;
  out[8] = x * a02 + y * a12 + a22;
  return out;
}

/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */
function rotate(out, a, rad) {
  let a00 = a[0], a01 = a[1], a02 = a[2],
    a10 = a[3], a11 = a[4], a12 = a[5],
    a20 = a[6], a21 = a[7], a22 = a[8],

    s = Math.sin(rad),
    c = Math.cos(rad);

  out[0] = c * a00 + s * a10;
  out[1] = c * a01 + s * a11;
  out[2] = c * a02 + s * a12;

  out[3] = c * a10 - s * a00;
  out[4] = c * a11 - s * a01;
  out[5] = c * a12 - s * a02;

  out[6] = a20;
  out[7] = a21;
  out[8] = a22;
  return out;
};

/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/
function scale(out, a, v) {
  let x = v[0], y = v[1];

  out[0] = x * a[0];
  out[1] = x * a[1];
  out[2] = x * a[2];

  out[3] = y * a[3];
  out[4] = y * a[4];
  out[5] = y * a[5];

  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.translate(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat3} out
 */
function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = v[0];
  out[7] = v[1];
  out[8] = 1;
  return out;
}

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.rotate(dest, dest, rad);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */
function fromRotation(out, rad) {
  let s = Math.sin(rad), c = Math.cos(rad);

  out[0] = c;
  out[1] = s;
  out[2] = 0;

  out[3] = -s;
  out[4] = c;
  out[5] = 0;

  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.scale(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat3} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;

  out[3] = 0;
  out[4] = v[1];
  out[5] = 0;

  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat2d} a the matrix to copy
 * @returns {mat3} out
 **/
function fromMat2d(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = 0;

  out[3] = a[2];
  out[4] = a[3];
  out[5] = 0;

  out[6] = a[4];
  out[7] = a[5];
  out[8] = 1;
  return out;
}

/**
* Calculates a 3x3 matrix from the given quaternion
*
* @param {mat3} out mat3 receiving operation result
* @param {quat} q Quaternion to create matrix from
*
* @returns {mat3} out
*/
function fromQuat(out, q) {
  let x = q[0], y = q[1], z = q[2], w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;

  let xx = x * x2;
  let yx = y * x2;
  let yy = y * y2;
  let zx = z * x2;
  let zy = z * y2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;

  out[0] = 1 - yy - zz;
  out[3] = yx - wz;
  out[6] = zx + wy;

  out[1] = yx + wz;
  out[4] = 1 - xx - zz;
  out[7] = zy - wx;

  out[2] = zx - wy;
  out[5] = zy + wx;
  out[8] = 1 - xx - yy;

  return out;
}

/**
* Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
*
* @param {mat3} out mat3 receiving operation result
* @param {mat4} a Mat4 to derive the normal matrix from
*
* @returns {mat3} out
*/
function normalFromMat4(out, a) {
  let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

  let b00 = a00 * a11 - a01 * a10;
  let b01 = a00 * a12 - a02 * a10;
  let b02 = a00 * a13 - a03 * a10;
  let b03 = a01 * a12 - a02 * a11;
  let b04 = a01 * a13 - a03 * a11;
  let b05 = a02 * a13 - a03 * a12;
  let b06 = a20 * a31 - a21 * a30;
  let b07 = a20 * a32 - a22 * a30;
  let b08 = a20 * a33 - a23 * a30;
  let b09 = a21 * a32 - a22 * a31;
  let b10 = a21 * a33 - a23 * a31;
  let b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;

  out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;

  out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;

  return out;
}

/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {mat3} out mat3 frustum matrix will be written into
 * @param {number} width Width of your gl context
 * @param {number} height Height of gl context
 * @returns {mat3} out
 */
function projection(out, width, height) {
    out[0] = 2 / width;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = -2 / height;
    out[5] = 0;
    out[6] = -1;
    out[7] = 1;
    out[8] = 1;
    return out;
}

/**
 * Returns a string representation of a mat3
 *
 * @param {mat3} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' +
          a[3] + ', ' + a[4] + ', ' + a[5] + ', ' +
          a[6] + ', ' + a[7] + ', ' + a[8] + ')';
}

/**
 * Returns Frobenius norm of a mat3
 *
 * @param {mat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2)))
}

/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  return out;
}



/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  return out;
}

/**
 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat3} out the receiving vector
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat3} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  out[2] = a[2] + (b[2] * scale);
  out[3] = a[3] + (b[3] * scale);
  out[4] = a[4] + (b[4] * scale);
  out[5] = a[5] + (b[5] * scale);
  out[6] = a[6] + (b[6] * scale);
  out[7] = a[7] + (b[7] * scale);
  out[8] = a[8] + (b[8] * scale);
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] &&
         a[3] === b[3] && a[4] === b[4] && a[5] === b[5] &&
         a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7], a8 = a[8];
  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8];
  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
          Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
          Math.abs(a4 - b4) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
          Math.abs(a5 - b5) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a5), Math.abs(b5)) &&
          Math.abs(a6 - b6) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a6), Math.abs(b6)) &&
          Math.abs(a7 - b7) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a7), Math.abs(b7)) &&
          Math.abs(a8 - b8) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a8), Math.abs(b8)));
}

/**
 * Alias for {@link mat3.multiply}
 * @function
 */
const mul = multiply;
/* unused harmony export mul */


/**
 * Alias for {@link mat3.subtract}
 * @function
 */
const sub = subtract;
/* unused harmony export sub */



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["length"] = length;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["divide"] = divide;
/* harmony export (immutable) */ __webpack_exports__["ceil"] = ceil;
/* harmony export (immutable) */ __webpack_exports__["floor"] = floor;
/* harmony export (immutable) */ __webpack_exports__["min"] = min;
/* harmony export (immutable) */ __webpack_exports__["max"] = max;
/* harmony export (immutable) */ __webpack_exports__["round"] = round;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["scaleAndAdd"] = scaleAndAdd;
/* harmony export (immutable) */ __webpack_exports__["distance"] = distance;
/* harmony export (immutable) */ __webpack_exports__["squaredDistance"] = squaredDistance;
/* harmony export (immutable) */ __webpack_exports__["squaredLength"] = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["negate"] = negate;
/* harmony export (immutable) */ __webpack_exports__["inverse"] = inverse;
/* harmony export (immutable) */ __webpack_exports__["normalize"] = normalize;
/* harmony export (immutable) */ __webpack_exports__["dot"] = dot;
/* harmony export (immutable) */ __webpack_exports__["cross"] = cross;
/* harmony export (immutable) */ __webpack_exports__["lerp"] = lerp;
/* harmony export (immutable) */ __webpack_exports__["hermite"] = hermite;
/* harmony export (immutable) */ __webpack_exports__["bezier"] = bezier;
/* harmony export (immutable) */ __webpack_exports__["random"] = random;
/* harmony export (immutable) */ __webpack_exports__["transformMat4"] = transformMat4;
/* harmony export (immutable) */ __webpack_exports__["transformMat3"] = transformMat3;
/* harmony export (immutable) */ __webpack_exports__["transformQuat"] = transformQuat;
/* harmony export (immutable) */ __webpack_exports__["rotateX"] = rotateX;
/* harmony export (immutable) */ __webpack_exports__["rotateY"] = rotateY;
/* harmony export (immutable) */ __webpack_exports__["rotateZ"] = rotateZ;
/* harmony export (immutable) */ __webpack_exports__["angle"] = angle;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(2);
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */



/**
 * 3 Dimensional Vector
 * @module vec3
 */

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](3);
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  return out;
}

/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {vec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */
function clone(a) {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}

/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  return Math.sqrt(x*x + y*y + z*z);
}

/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */
function fromValues(x, y, z) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}

/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}

/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */
function set(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}

/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}

/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}

/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}

/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to ceil
 * @returns {vec3} out
 */
function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  return out;
}

/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to floor
 * @returns {vec3} out
 */
function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  return out;
}

/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  return out;
}

/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  return out;
}

/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to round
 * @returns {vec3} out
 */
function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  return out;
}

/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}

/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */
function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  out[2] = a[2] + (b[2] * scale);
  return out;
}

/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
  let x = b[0] - a[0];
  let y = b[1] - a[1];
  let z = b[2] - a[2];
  return Math.sqrt(x*x + y*y + z*z);
}

/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
  let x = b[0] - a[0];
  let y = b[1] - a[1];
  let z = b[2] - a[2];
  return x*x + y*y + z*z;
}

/**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  return x*x + y*y + z*z;
}

/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}

/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to invert
 * @returns {vec3} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
}

/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */
function normalize(out, a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let len = x*x + y*y + z*z;
  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
    out[0] = a[0] * len;
    out[1] = a[1] * len;
    out[2] = a[2] * len;
  }
  return out;
}

/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
  let ax = a[0], ay = a[1], az = a[2];
  let bx = b[0], by = b[1], bz = b[2];

  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}

/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */
function lerp(out, a, b, t) {
  let ax = a[0];
  let ay = a[1];
  let az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}

/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */
function hermite(out, a, b, c, d, t) {
  let factorTimes2 = t * t;
  let factor1 = factorTimes2 * (2 * t - 3) + 1;
  let factor2 = factorTimes2 * (t - 2) + t;
  let factor3 = factorTimes2 * (t - 1);
  let factor4 = factorTimes2 * (3 - 2 * t);

  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;

  return out;
}

/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */
function bezier(out, a, b, c, d, t) {
  let inverseFactor = 1 - t;
  let inverseFactorTimesTwo = inverseFactor * inverseFactor;
  let factorTimes2 = t * t;
  let factor1 = inverseFactorTimesTwo * inverseFactor;
  let factor2 = 3 * t * inverseFactorTimesTwo;
  let factor3 = 3 * factorTimes2 * inverseFactor;
  let factor4 = factorTimes2 * t;

  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;

  return out;
}

/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */
function random(out, scale) {
  scale = scale || 1.0;

  let r = __WEBPACK_IMPORTED_MODULE_0__common__["RANDOM"]() * 2.0 * Math.PI;
  let z = (__WEBPACK_IMPORTED_MODULE_0__common__["RANDOM"]() * 2.0) - 1.0;
  let zScale = Math.sqrt(1.0-z*z) * scale;

  out[0] = Math.cos(r) * zScale;
  out[1] = Math.sin(r) * zScale;
  out[2] = z * scale;
  return out;
}

/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */
function transformMat4(out, a, m) {
  let x = a[0], y = a[1], z = a[2];
  let w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}

/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */
function transformMat3(out, a, m) {
  let x = a[0], y = a[1], z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}

/**
 * Transforms the vec3 with a quat
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */
function transformQuat(out, a, q) {
  // benchmarks: http://jsperf.com/quaternion-transform-vec3-implementations

  let x = a[0], y = a[1], z = a[2];
  let qx = q[0], qy = q[1], qz = q[2], qw = q[3];

  // calculate quat * vec
  let ix = qw * x + qy * z - qz * y;
  let iy = qw * y + qz * x - qx * z;
  let iz = qw * z + qx * y - qy * x;
  let iw = -qx * x - qy * y - qz * z;

  // calculate result * inverse quat
  out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
  return out;
}

/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateX(out, a, b, c){
  let p = [], r=[];
  //Translate point to the origin
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];

  //perform rotation
  r[0] = p[0];
  r[1] = p[1]*Math.cos(c) - p[2]*Math.sin(c);
  r[2] = p[1]*Math.sin(c) + p[2]*Math.cos(c);

  //translate to correct position
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];

  return out;
}

/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateY(out, a, b, c){
  let p = [], r=[];
  //Translate point to the origin
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];

  //perform rotation
  r[0] = p[2]*Math.sin(c) + p[0]*Math.cos(c);
  r[1] = p[1];
  r[2] = p[2]*Math.cos(c) - p[0]*Math.sin(c);

  //translate to correct position
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];

  return out;
}

/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateZ(out, a, b, c){
  let p = [], r=[];
  //Translate point to the origin
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];

  //perform rotation
  r[0] = p[0]*Math.cos(c) - p[1]*Math.sin(c);
  r[1] = p[0]*Math.sin(c) + p[1]*Math.cos(c);
  r[2] = p[2];

  //translate to correct position
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];

  return out;
}

/**
 * Get the angle between two 3D vectors
 * @param {vec3} a The first operand
 * @param {vec3} b The second operand
 * @returns {Number} The angle in radians
 */
function angle(a, b) {
  let tempA = fromValues(a[0], a[1], a[2]);
  let tempB = fromValues(b[0], b[1], b[2]);

  normalize(tempA, tempA);
  normalize(tempB, tempB);

  let cosine = dot(tempA, tempB);

  if(cosine > 1.0) {
    return 0;
  }
  else if(cosine < -1.0) {
    return Math.PI;
  } else {
    return Math.acos(cosine);
  }
}

/**
 * Returns a string representation of a vector
 *
 * @param {vec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
}

/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2];
  let b0 = b[0], b1 = b[1], b2 = b[2];
  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a2), Math.abs(b2)));
}

/**
 * Alias for {@link vec3.subtract}
 * @function
 */
const sub = subtract;
/* harmony export (immutable) */ __webpack_exports__["sub"] = sub;


/**
 * Alias for {@link vec3.multiply}
 * @function
 */
const mul = multiply;
/* harmony export (immutable) */ __webpack_exports__["mul"] = mul;


/**
 * Alias for {@link vec3.divide}
 * @function
 */
const div = divide;
/* harmony export (immutable) */ __webpack_exports__["div"] = div;


/**
 * Alias for {@link vec3.distance}
 * @function
 */
const dist = distance;
/* harmony export (immutable) */ __webpack_exports__["dist"] = dist;


/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */
const sqrDist = squaredDistance;
/* harmony export (immutable) */ __webpack_exports__["sqrDist"] = sqrDist;


/**
 * Alias for {@link vec3.length}
 * @function
 */
const len = length;
/* harmony export (immutable) */ __webpack_exports__["len"] = len;


/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */
const sqrLen = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["sqrLen"] = sqrLen;


/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
const forEach = (function() {
  let vec = create();

  return function(a, stride, offset, count, fn, arg) {
    let i, l;
    if(!stride) {
      stride = 3;
    }

    if(!offset) {
      offset = 0;
    }

    if(count) {
      l = Math.min((count * stride) + offset, a.length);
    } else {
      l = a.length;
    }

    for(i = offset; i < l; i += stride) {
      vec[0] = a[i]; vec[1] = a[i+1]; vec[2] = a[i+2];
      fn(vec, vec, arg);
      a[i] = vec[0]; a[i+1] = vec[1]; a[i+2] = vec[2];
    }

    return a;
  };
})();
/* harmony export (immutable) */ __webpack_exports__["forEach"] = forEach;



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["divide"] = divide;
/* harmony export (immutable) */ __webpack_exports__["ceil"] = ceil;
/* harmony export (immutable) */ __webpack_exports__["floor"] = floor;
/* harmony export (immutable) */ __webpack_exports__["min"] = min;
/* harmony export (immutable) */ __webpack_exports__["max"] = max;
/* harmony export (immutable) */ __webpack_exports__["round"] = round;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["scaleAndAdd"] = scaleAndAdd;
/* harmony export (immutable) */ __webpack_exports__["distance"] = distance;
/* harmony export (immutable) */ __webpack_exports__["squaredDistance"] = squaredDistance;
/* harmony export (immutable) */ __webpack_exports__["length"] = length;
/* harmony export (immutable) */ __webpack_exports__["squaredLength"] = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["negate"] = negate;
/* harmony export (immutable) */ __webpack_exports__["inverse"] = inverse;
/* harmony export (immutable) */ __webpack_exports__["normalize"] = normalize;
/* harmony export (immutable) */ __webpack_exports__["dot"] = dot;
/* harmony export (immutable) */ __webpack_exports__["lerp"] = lerp;
/* harmony export (immutable) */ __webpack_exports__["random"] = random;
/* harmony export (immutable) */ __webpack_exports__["transformMat4"] = transformMat4;
/* harmony export (immutable) */ __webpack_exports__["transformQuat"] = transformQuat;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(2);
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */



/**
 * 4 Dimensional Vector
 * @module vec4
 */

/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](4);
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  return out;
}

/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {vec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */
function clone(a) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */
function fromValues(x, y, z, w) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](4);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}

/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the source vector
 * @returns {vec4} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */
function set(out, x, y, z, w) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}

/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}

/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  out[3] = a[3] * b[3];
  return out;
}

/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  out[3] = a[3] / b[3];
  return out;
}

/**
 * Math.ceil the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to ceil
 * @returns {vec4} out
 */
function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  out[3] = Math.ceil(a[3]);
  return out;
}

/**
 * Math.floor the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to floor
 * @returns {vec4} out
 */
function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  out[3] = Math.floor(a[3]);
  return out;
}

/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  out[3] = Math.min(a[3], b[3]);
  return out;
}

/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  out[3] = Math.max(a[3], b[3]);
  return out;
}

/**
 * Math.round the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to round
 * @returns {vec4} out
 */
function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  out[3] = Math.round(a[3]);
  return out;
}

/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}

/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */
function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  out[2] = a[2] + (b[2] * scale);
  out[3] = a[3] + (b[3] * scale);
  return out;
}

/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
  let x = b[0] - a[0];
  let y = b[1] - a[1];
  let z = b[2] - a[2];
  let w = b[3] - a[3];
  return Math.sqrt(x*x + y*y + z*z + w*w);
}

/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
  let x = b[0] - a[0];
  let y = b[1] - a[1];
  let z = b[2] - a[2];
  let w = b[3] - a[3];
  return x*x + y*y + z*z + w*w;
}

/**
 * Calculates the length of a vec4
 *
 * @param {vec4} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let w = a[3];
  return Math.sqrt(x*x + y*y + z*z + w*w);
}

/**
 * Calculates the squared length of a vec4
 *
 * @param {vec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let w = a[3];
  return x*x + y*y + z*z + w*w;
}

/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to negate
 * @returns {vec4} out
 */
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = -a[3];
  return out;
}

/**
 * Returns the inverse of the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to invert
 * @returns {vec4} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  out[3] = 1.0 / a[3];
  return out;
}

/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to normalize
 * @returns {vec4} out
 */
function normalize(out, a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let w = a[3];
  let len = x*x + y*y + z*z + w*w;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
    out[0] = x * len;
    out[1] = y * len;
    out[2] = z * len;
    out[3] = w * len;
  }
  return out;
}

/**
 * Calculates the dot product of two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}

/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec4} out
 */
function lerp(out, a, b, t) {
  let ax = a[0];
  let ay = a[1];
  let az = a[2];
  let aw = a[3];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  out[3] = aw + t * (b[3] - aw);
  return out;
}

/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */
function random(out, vectorScale) {
  vectorScale = vectorScale || 1.0;

  //TODO: This is a pretty awful way of doing this. Find something better.
  out[0] = __WEBPACK_IMPORTED_MODULE_0__common__["RANDOM"]();
  out[1] = __WEBPACK_IMPORTED_MODULE_0__common__["RANDOM"]();
  out[2] = __WEBPACK_IMPORTED_MODULE_0__common__["RANDOM"]();
  out[3] = __WEBPACK_IMPORTED_MODULE_0__common__["RANDOM"]();
  normalize(out, out);
  scale(out, out, vectorScale);
  return out;
}

/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec4} out
 */
function transformMat4(out, a, m) {
  let x = a[0], y = a[1], z = a[2], w = a[3];
  out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
  out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
  out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
  out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
  return out;
}

/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec4} out
 */
function transformQuat(out, a, q) {
  let x = a[0], y = a[1], z = a[2];
  let qx = q[0], qy = q[1], qz = q[2], qw = q[3];

  // calculate quat * vec
  let ix = qw * x + qy * z - qz * y;
  let iy = qw * y + qz * x - qx * z;
  let iz = qw * z + qx * y - qy * x;
  let iw = -qx * x - qy * y - qz * z;

  // calculate result * inverse quat
  out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
  out[3] = a[3];
  return out;
}

/**
 * Returns a string representation of a vector
 *
 * @param {vec4} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}

/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
          Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a3), Math.abs(b3)));
}

/**
 * Alias for {@link vec4.subtract}
 * @function
 */
const sub = subtract;
/* harmony export (immutable) */ __webpack_exports__["sub"] = sub;


/**
 * Alias for {@link vec4.multiply}
 * @function
 */
const mul = multiply;
/* harmony export (immutable) */ __webpack_exports__["mul"] = mul;


/**
 * Alias for {@link vec4.divide}
 * @function
 */
const div = divide;
/* harmony export (immutable) */ __webpack_exports__["div"] = div;


/**
 * Alias for {@link vec4.distance}
 * @function
 */
const dist = distance;
/* harmony export (immutable) */ __webpack_exports__["dist"] = dist;


/**
 * Alias for {@link vec4.squaredDistance}
 * @function
 */
const sqrDist = squaredDistance;
/* harmony export (immutable) */ __webpack_exports__["sqrDist"] = sqrDist;


/**
 * Alias for {@link vec4.length}
 * @function
 */
const len = length;
/* harmony export (immutable) */ __webpack_exports__["len"] = len;


/**
 * Alias for {@link vec4.squaredLength}
 * @function
 */
const sqrLen = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["sqrLen"] = sqrLen;


/**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
const forEach = (function() {
  let vec = create();

  return function(a, stride, offset, count, fn, arg) {
    let i, l;
    if(!stride) {
      stride = 4;
    }

    if(!offset) {
      offset = 0;
    }

    if(count) {
      l = Math.min((count * stride) + offset, a.length);
    } else {
      l = a.length;
    }

    for(i = offset; i < l; i += stride) {
      vec[0] = a[i]; vec[1] = a[i+1]; vec[2] = a[i+2]; vec[3] = a[i+3];
      fn(vec, vec, arg);
      a[i] = vec[0]; a[i+1] = vec[1]; a[i+2] = vec[2]; a[i+3] = vec[3];
    }

    return a;
  };
})();
/* harmony export (immutable) */ __webpack_exports__["forEach"] = forEach;



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Material", function() { return Material; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Attribute", function() { return Attribute; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__texture_texture__ = __webpack_require__(8);


class Attribute extends __WEBPACK_IMPORTED_MODULE_0__util_util__["attribute"]._Attribute {
    _setValue(value) {
        if (typeof (value) != 'number' && !(value instanceof __WEBPACK_IMPORTED_MODULE_1__texture_texture__["b" /* Texture */])) {
            value = __WEBPACK_IMPORTED_MODULE_0__util_util__["vector"].requireVec3(value);
        }
        return value;
    }
}
class MaterialAttributeMap extends __WEBPACK_IMPORTED_MODULE_0__util_util__["attribute"]._AttributeMap {
    constructor() { super(); }
}
class Material extends __WEBPACK_IMPORTED_MODULE_0__util_util__["attribute"].Attributable {
    constructor(gl) {
        super();
        this.attributes = new MaterialAttributeMap();
        this.gl = gl;
    }
    clone() {
        return this._clone(Material, Attribute, this.gl);
    }
    static Basic(gl, _albedo = [1, 1, 1]) {
        let mat = new Material(gl);
        mat.addAttribute(new Attribute('albedo', _albedo, __WEBPACK_IMPORTED_MODULE_0__util_util__["attribute"].validators.Vec3OrTexture));
        return mat;
    }
    static Physical(gl, _albedo = [1, 1, 1], _roughness = 0.1, _metallic = 0.1) {
        let mat = new Material(gl);
        mat.addAttribute(new Attribute('albedo', _albedo, __WEBPACK_IMPORTED_MODULE_0__util_util__["attribute"].validators.Vec3OrTexture));
        mat.addAttribute(new Attribute('roughness', _roughness, __WEBPACK_IMPORTED_MODULE_0__util_util__["attribute"].validators.Number));
        mat.addAttribute(new Attribute('metallic', _metallic, __WEBPACK_IMPORTED_MODULE_0__util_util__["attribute"].validators.Number));
        return mat;
    }
}



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["ind2sub"] = ind2sub;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__type_util__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_gl_matrix__ = __webpack_require__(1);


function cloneGLMArray(data) {
    if (__WEBPACK_IMPORTED_MODULE_0__type_util__["isMat4"](data)) {
        return __WEBPACK_IMPORTED_MODULE_1_gl_matrix__["b" /* mat4 */].copy(__WEBPACK_IMPORTED_MODULE_1_gl_matrix__["b" /* mat4 */].create(), data);
    }
    else if (__WEBPACK_IMPORTED_MODULE_0__type_util__["isVec3"](data)) {
        return __WEBPACK_IMPORTED_MODULE_1_gl_matrix__["d" /* vec3 */].copy(__WEBPACK_IMPORTED_MODULE_1_gl_matrix__["d" /* vec3 */].create(), data);
    }
}
function clone(data) {
    if (__WEBPACK_IMPORTED_MODULE_0__type_util__["isPrimitive"](data)) {
        return data;
    }
    else if (__WEBPACK_IMPORTED_MODULE_0__type_util__["isGLMArrayType"](data)) {
        return cloneGLMArray(data);
    }
    else if (__WEBPACK_IMPORTED_MODULE_0__type_util__["isArray"](data)) {
        return data.slice();
    }
    else if (__WEBPACK_IMPORTED_MODULE_0__type_util__["isTexture"](data)) {
        return data.clone();
    }
    throw new Error(`Unrecognized type.`);
}
function ind2sub(idx, dims) {
    // http://kritisen.com/2011/08/17/subscripts-from-linear-index-and-vice-versa-c/
    let n = dims.length;
    let prod = [];
    let result = new Array(n);
    for (let i = 0; i < n; i++) {
        prod[i] = 1;
        for (let j = n - 1; j > i; j--)
            prod[i] *= dims[j];
    }
    for (let i = 0; i < n; i++) {
        result[i] = idx;
        for (let j = 0; j < i; j++)
            result[i] = result[i] % prod[j];
        result[i] = Math.floor(result[i] / prod[i]);
    }
    return result;
}


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ratios", function() { return ratios; });
class Ratio {
    constructor(first, second, alias) {
        this.first = first;
        this.second = second;
        this.alias = alias;
    }
    static scale(a, b) {
        return (b / a.second) * a.first;
    }
}
/* harmony export (immutable) */ __webpack_exports__["Ratio"] = Ratio;

class Duration {
    constructor(ratio, amount) {
        this.ratio = ratio;
        this.amount = amount;
    }
    value() {
        return Ratio.scale(this.ratio, this.amount);
        // return (amt / sec) * first
    }
    static lt(a, b) {
        return a.value() < b.value();
    }
    static le(a, b) {
        return a.value() <= b.value();
    }
    static eq(a, b) {
        return a.value() == b.value();
    }
    static gt(a, b) {
        return a.value() > b.value();
    }
    static ge(a, b) {
        return a.value() >= b.value();
    }
}
/* harmony export (immutable) */ __webpack_exports__["Duration"] = Duration;

var ratios;
(function (ratios) {
    function ms() {
        return new Ratio(1, 1, 'ms');
    }
    ratios.ms = ms;
    function s() {
        return new Ratio(1, 1 / 1000, 's');
    }
    ratios.s = s;
})(ratios || (ratios = {}));
class DeltaTimer {
    constructor() {
        this.last = 0;
        this._delta = 0;
        this.first = true;
        this.ratio = ratios.s();
    }
    update() {
        let now = Date.now();
        if (this.first) {
            this.last = now;
            this.first = false;
            return;
        }
        this._delta = now - this.last;
        this.last = now;
    }
    firstUpdate() {
        return this.first;
    }
    setRatio(ratio) {
        this.ratio = ratio;
    }
    getRatio() {
        return this.ratio;
    }
    delta() {
        return (this._delta / this.ratio.first) * this.ratio.second;
    }
    deltaDuration(a) {
        if (a === null) {
            a = new Duration(this.ratio, this._delta);
            return a;
        }
        a.ratio = this.ratio;
        a.amount = this._delta;
        return a;
    }
}
/* harmony export (immutable) */ __webpack_exports__["DeltaTimer"] = DeltaTimer;



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["assertNValues"] = assertNValues;
function assertNValues(arr, N, contents = '(unspecified)') {
    if (arr.length !== N) {
        throw new Error(`Expected the array of ${contents} to contain ${N} values; ${arr.length} were present.`);
    }
}


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Light", function() { return Light; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Attribute", function() { return Attribute; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_util__ = __webpack_require__(0);

class Attribute extends __WEBPACK_IMPORTED_MODULE_0__util_util__["attribute"]._Attribute {
    _setValue(value) {
        if (typeof (value) !== 'number' && typeof (value) !== 'boolean')
            value = __WEBPACK_IMPORTED_MODULE_0__util_util__["vector"].requireVec3(value);
        return value;
    }
}
class LightAttributeMap extends __WEBPACK_IMPORTED_MODULE_0__util_util__["attribute"]._AttributeMap {
    constructor() { super(); }
}
class Light extends __WEBPACK_IMPORTED_MODULE_0__util_util__["attribute"].Attributable {
    constructor(gl, _index = 0, _color = [1, 1, 1], _mask = [1, 1, 1]) {
        super();
        this.active = true;
        this.gl = gl;
        this.index = _index;
        this.attributes = new LightAttributeMap();
        this.addAttribute(new Attribute('color', _color, __WEBPACK_IMPORTED_MODULE_0__util_util__["attribute"].validators.Vec3));
        this.addAttribute(new Attribute('mask', _mask, __WEBPACK_IMPORTED_MODULE_0__util_util__["attribute"].validators.Vec3));
    }
    setMask(val) {
        this.getAttribute('mask').setValue(val);
    }
    setColor(val) {
        this.getAttribute('color').setValue(val);
    }
    setIndex(val) {
        this.index = val;
    }
    getIndex() {
        return this.index;
    }
    getColor() {
        return this.getAttribute('color').peekValue();
    }
    getName() {
        return this.name;
    }
    getMask() {
        return this.getAttribute('mask').peekValue();
    }
    clone() {
        return this._clone(Light, Attribute, this.gl);
    }
    static Point(gl, _position = [1, 1, 1], _color = [1, 1, 1], _index = 0) {
        let light = new Light(gl, _index, _color);
        light.addAttribute(new Attribute('position', _position));
        light.name = 'point';
        return light;
    }
    static Directional(gl, _direction = [1, 1, 1], _color = [1, 1, 1], _index = 0) {
        let light = new Light(gl, _index, _color);
        light.addAttribute(new Attribute('direction', _direction));
        light.name = 'directional';
        return light;
    }
}



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class UniformMap {
    constructor(names, value) {
        this.items = {};
        const items = this.items;
        names.map(name => items[name] = value);
    }
    hasUniform(name) {
        return this.items[name] !== undefined;
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = UniformMap;

class Map {
    static getUniform(name) {
        return Map.items[name];
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Map;

Map.items = {
    // material
    'albedo': 'albedo',
    'roughness': 'roughness',
    'metallic': 'metallic',
    //	light
    'position': 'position',
    'direction': 'direction',
    'color': 'color',
    'mask': 'mask',
    'point': 'point_lights',
    'directional': 'directional_lights',
    //	core
    'model': 'model',
    'view': 'view',
    'projection': 'projection',
    'camera_position': 'cam_position'
};


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_gl_matrix__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_wgl_math__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_capabilities__ = __webpack_require__(24);




class xy {
    constructor(el) {
        this.el = (el === null || el === undefined) ? document.body : el;
    }
    start(cb) {
        this.el.addEventListener(this.getListenerNames()['start'], cb);
    }
    end(cb) {
        this.el.addEventListener(this.getListenerNames()['end'], cb);
    }
    move(cb) {
        this.el.addEventListener(this.getListenerNames()['move'], cb);
    }
}
/* unused harmony export xy */

class Touch extends xy {
    getListenerNames() {
        return {
            'start': 'touchstart',
            'end': 'touchend',
            'move': 'touchmove'
        };
    }
    shouldInvert() { return true; }
    getPrimaryCoordinates(evt, out) {
        if (!out)
            out = __WEBPACK_IMPORTED_MODULE_1_gl_matrix__["c" /* vec2 */].create();
        if (evt.touches.length === 0) {
            out[0] = 0;
            out[1] = 0;
        }
        else {
            out[0] = evt.touches[0].clientX;
            out[1] = evt.touches[0].clientY;
        }
        return out;
    }
}
/* harmony export (immutable) */ __webpack_exports__["d"] = Touch;

class Mouse extends xy {
    getListenerNames() {
        return {
            'start': 'mouseenter',
            'end': 'mouseleave',
            'move': 'mousemove'
        };
    }
    shouldInvert() { return false; }
    getPrimaryCoordinates(evt, out) {
        if (!out)
            out = __WEBPACK_IMPORTED_MODULE_1_gl_matrix__["c" /* vec2 */].create();
        out[0] = evt.clientX;
        out[1] = evt.clientY;
        return out;
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = Mouse;

class PointerLock extends Mouse {
    constructor(el) {
        super(el);
        this.coordinates = __WEBPACK_IMPORTED_MODULE_1_gl_matrix__["c" /* vec2 */].fromValues(0, 0);
        this.isLocked = false;
        this.setup();
    }
    setup() {
        if (!__WEBPACK_IMPORTED_MODULE_3__common_capabilities__["hasPointerLock"]()) {
            console.warn('Pointer locking is not supported in your browser;' +
                ' regular mouse input will be used instead.');
            return;
        }
        let self = this;
        document.addEventListener('pointerlockchange', (evt) => {
            self.isLocked = !self.isLocked;
        }, false);
        self.el.addEventListener('click', (evt) => {
            evt.preventDefault();
            if (!self.isLocked) {
                self.el.requestPointerLock();
            }
        });
    }
    getPrimaryCoordinates(evt, out) {
        if (!out)
            out = __WEBPACK_IMPORTED_MODULE_1_gl_matrix__["c" /* vec2 */].create();
        if (this.isLocked) {
            this.coordinates[0] += evt.movementX;
            this.coordinates[1] += evt.movementY;
        }
        else {
            this.coordinates[0] = evt.clientX;
            this.coordinates[1] = evt.clientY;
        }
        out.set(this.coordinates);
        return out;
    }
}
/* harmony export (immutable) */ __webpack_exports__["c"] = PointerLock;

class DoubleTapDetector {
    constructor(touch, opts) {
        this.touch = touch;
        this.timer = new __WEBPACK_IMPORTED_MODULE_0__util_util__["time"].DeltaTimer();
        this.timer.setRatio(__WEBPACK_IMPORTED_MODULE_0__util_util__["time"].ratios.ms());
        this.began = false;
        this.doubletapFunc = (evt) => { };
        this.deltaDur = new __WEBPACK_IMPORTED_MODULE_0__util_util__["time"].Duration(__WEBPACK_IMPORTED_MODULE_0__util_util__["time"].ratios.ms(), 0);
        if (!opts)
            opts = DoubleTapDetector.Defaults();
        this.timeThreshold = opts.timeThreshold;
        this.positionThreshold = opts.positionThreshold;
        this.coordinates = __WEBPACK_IMPORTED_MODULE_1_gl_matrix__["c" /* vec2 */].create();
        this.currentCoordinates = __WEBPACK_IMPORTED_MODULE_1_gl_matrix__["c" /* vec2 */].create();
        this.setup();
    }
    doubletap(func) {
        this.doubletapFunc = func;
    }
    setup() {
        const touch = this.touch;
        const self = this;
        touch.start(evt => {
            if (evt.touches.length !== 1)
                return;
            self.timer.update();
            self.currentCoordinates[0] = evt.touches[0].clientX;
            self.currentCoordinates[1] = evt.touches[0].clientY;
            if (self.began) {
                let delta = self.timer.deltaDuration(self.deltaDur);
                let inTime = __WEBPACK_IMPORTED_MODULE_0__util_util__["time"].Duration.le(delta, self.timeThreshold);
                let dist = __WEBPACK_IMPORTED_MODULE_2__math_wgl_math__["b" /* distance */](self.currentCoordinates, self.coordinates);
                if (inTime && dist < self.positionThreshold) {
                    self.doubletapFunc(evt);
                }
            }
            self.began = true;
            self.coordinates = __WEBPACK_IMPORTED_MODULE_1_gl_matrix__["c" /* vec2 */].copy(self.coordinates, self.currentCoordinates);
        });
    }
    static Defaults() {
        return {
            timeThreshold: new __WEBPACK_IMPORTED_MODULE_0__util_util__["time"].Duration(__WEBPACK_IMPORTED_MODULE_0__util_util__["time"].ratios.ms(), 350),
            positionThreshold: 40
        };
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DoubleTapDetector;



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["hasPointerLock"] = hasPointerLock;
function hasPointerLock() {
    return 'onpointerlockchange' in document;
}


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Keys; });
var Keys;
(function (Keys) {
    Keys[Keys["W"] = 87] = "W";
    Keys[Keys["A"] = 65] = "A";
    Keys[Keys["S"] = 83] = "S";
    Keys[Keys["D"] = 68] = "D";
    Keys[Keys["Left"] = 37] = "Left";
    Keys[Keys["Right"] = 39] = "Right";
    Keys[Keys["Up"] = 38] = "Up";
    Keys[Keys["Down"] = 40] = "Down";
    Keys[Keys["space"] = 32] = "space";
})(Keys || (Keys = {}));
class Keyboard {
    constructor() {
        this.state = {};
        let state = this.state;
        window.addEventListener('keydown', (evt) => {
            state[evt.keyCode] = true;
        });
        window.addEventListener('keyup', (evt) => {
            state[evt.keyCode] = false;
        });
    }
    isDown(key) {
        let res = this.state[key];
        return res === undefined ? false : res;
    }
    down(func, key) {
        this.listenerImpl(func, 'keydown', key);
    }
    up(func, key) {
        this.listenerImpl(func, 'keyup', key);
    }
    listenerImpl(func, kind, key) {
        let anyKey = key === undefined || key === null;
        window.addEventListener(kind, (evt) => {
            if (anyKey || evt.keyCode === key) {
                func(evt);
            }
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Keyboard;



/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controls_test__ = __webpack_require__(27);

__WEBPACK_IMPORTED_MODULE_0__controls_test__["a" /* main */]();
// eg1.main()
// eg2.main() 


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = main;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aud_web_audio__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_gl_matrix__ = __webpack_require__(1);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function main() {
    return __awaiter(this, void 0, void 0, function* () {
        //	audio init
        const audioManager = new __WEBPACK_IMPORTED_MODULE_1__aud_web_audio__["b" /* AudioContextManager */]();
        const nLevels = 32;
        const analyser = new __WEBPACK_IMPORTED_MODULE_1__aud_web_audio__["a" /* AudioAnalyser */](audioManager.getContext(), { levelsCount: nLevels });
        const files = ['sep30.aac'];
        analyser.setup();
        yield Promise.all(audioManager.loadSounds(files));
        const destination = analyser.getAnalyserNode();
        const togglePlay = () => audioManager.togglePlay(files[0], destination);
        //	end autio init
        document.body.style.padding = '0';
        document.body.style.margin = '0';
        document.body.style.position = 'fixed';
        const keyboard = new __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["e" /* Input */].Keyboard();
        const canvas = new __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["b" /* Canvas */]();
        const canvasElement = canvas.element;
        const frameStats = new __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["d" /* FrameStats */]();
        keyboard.down(evt => togglePlay(), __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["e" /* Input */].Keys.space);
        const gl = canvasElement.getContext('webgl');
        if (!gl)
            throw new Error('Unable to initialize GL context.');
        let firstObj = yield __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["g" /* Loaders */].OBJ.loadMesh(gl, '/obj/test:test.obj');
        let firstTex = yield __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["g" /* Loaders */].TEX.load2D(gl, '/tex/neb.png');
        const scene = new __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["k" /* Scene */](gl);
        const renderer = new __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["o" /* renderers */].functional(gl);
        const camera = new __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["a" /* Camera */]();
        const keyboardMoveControls = new __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["c" /* Controls */].Movement.Keyboard(keyboard, camera, 5.0);
        const touchInput = new __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["e" /* Input */].Touch();
        const mouseInput = new __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["e" /* Input */].PointerLock(canvas.element);
        const touchMoveControls = new __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["c" /* Controls */].Movement.Touch(touchInput, camera, 25.0);
        let rotationControls;
        if (__WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["n" /* capabilities */].hasPointerLock()) {
            rotationControls = new __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["c" /* Controls */].Orbit.Orbit2(mouseInput, camera);
        }
        else {
            rotationControls = new __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["c" /* Controls */].Orbit.Orbit(touchInput, camera);
        }
        // const touchRotateControls = new wgl.Controls.Rotation.Touch(touchInput, camera, 25.0)
        canvas.element.onclick = evt => togglePlay();
        renderer.setAspect(canvas.aspect);
        renderer.setNearFar(0.1, 1000);
        const light = __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["f" /* Light */].Light.Point(gl);
        const light2 = __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["f" /* Light */].Light.Directional(gl);
        const prog = __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["l" /* ShaderFactory */].Create(gl, __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["m" /* ShaderLibrary */].PBR1);
        const skyboxProg = __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["l" /* ShaderFactory */].Create(gl, __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["m" /* ShaderLibrary */].Skybox);
        light.setColor([1, 0.5, 0.25]);
        light.getAttribute('position').setValue([0, 0, -2]);
        light2.setColor([0, 0, 1]);
        light2.getAttribute('direction').setValue([-30, -30, -30]);
        const sphere = __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["i" /* MeshFactory */].create(gl, 'sphere');
        const plane = __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["i" /* MeshFactory */].create(gl, 'quad');
        const cubeMesh = __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["i" /* MeshFactory */].create(gl, 'cube');
        const skyboxMesh = __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["i" /* MeshFactory */].create(gl, 'skybox');
        const mat = __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["h" /* Material */].Material.Physical(gl);
        const planeModel = new __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["j" /* Model */](gl, prog, plane, mat);
        const sphereModel = new __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["j" /* Model */](gl, prog, sphere, mat);
        const cottageModel = new __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["j" /* Model */](gl, prog, firstObj, mat.clone());
        const sun = new __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["j" /* Model */](gl, prog, sphere, mat.clone());
        const anchor = new __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["j" /* Model */](gl, prog, sphere, mat.clone());
        const skybox = new __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["j" /* Model */](gl, skyboxProg, skyboxMesh, mat.clone());
        skybox.material.getAttribute('albedo').setValue(firstTex);
        sun.material.getAttribute('albedo').setValue(light2.getColor());
        let dir = light2.getAttribute('direction').peekValue();
        sun.setPosition(__WEBPACK_IMPORTED_MODULE_2_gl_matrix__["d" /* vec3 */].negate(__WEBPACK_IMPORTED_MODULE_2_gl_matrix__["d" /* vec3 */].create(), dir));
        sun.setScale(10);
        cottageModel.material.getAttribute('albedo').setValue([0, 1, 0]);
        cottageModel.setPosition([-5, -5, -5]);
        planeModel.setPosition(__WEBPACK_IMPORTED_MODULE_2_gl_matrix__["d" /* vec3 */].fromValues(0, -1, 0));
        planeModel.setRotation(__WEBPACK_IMPORTED_MODULE_2_gl_matrix__["d" /* vec3 */].fromValues(90, 0, 0));
        planeModel.setScale(__WEBPACK_IMPORTED_MODULE_2_gl_matrix__["d" /* vec3 */].fromValues(2, 2, 2));
        let planeModels = getPlaneModels(gl, planeModel, nLevels);
        let farPlaneModels = getFarPlaneModels(gl, planeModel, nLevels);
        farPlaneModels.map(model => model.setMesh(cubeMesh));
        let farPlanePositions = farPlaneModels.map(model => model.getPosition());
        scene.add(farPlaneModels);
        scene.add([light, light2]);
        scene.add(cottageModel);
        scene.add(sun);
        scene.add(sphereModel);
        scene.background = skybox;
        farPlaneModels.map(model => anchor.addChild(model));
        sphereModel.setPosition([-5, -5, 0]);
        camera.setPosition([30, 8, 31]);
        camera.setPitch(-17);
        camera.setYaw(-487);
        const animate = () => {
            keyboardMoveControls.update();
            rotationControls.update();
            touchMoveControls.update();
            frameStats.update();
            analyser.update();
            let levels = analyser.getLevels();
            let waves = analyser.getWave();
            planeModels.map((model, i) => {
                let color = [levels[i], 1 - levels[i], 0];
                model.material.getAttribute('albedo').setValue(color);
            });
            let pos = anchor.getRotation();
            pos[1] += Math.cos(1 / 60) * (audioManager.getSound(files[0]).isPlaying ? 0.1 : 0);
            anchor.setRotation(pos);
            sphereModel.setPosition([-5, waves[0] * 0.2, 0]);
            // light.getAttribute('color').setValue([0, 1-Math.abs(waves[0]*0.1), 1])
            farPlaneModels.map((model, i) => {
                let subs = __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["p" /* util */].common.ind2sub(i, [nLevels, nLevels]);
                let row = subs[0];
                let col = subs[1];
                let value = levels[col];
                let fracMax = row / nLevels;
                let color = [0, 1 - value, fracMax * value];
                model.material.getAttribute('albedo').setValue(color);
            });
            renderer.render(scene, camera);
            // gl.finish()
            window.requestAnimationFrame(animate);
        };
        animate();
    });
}
function getPlaneModels(gl, ref, nLevels) {
    let planeModels = [];
    for (let i = 0; i < nLevels; i++) {
        let planeModel = new __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["j" /* Model */](gl, ref.program, ref.mesh, ref.material.clone());
        planeModel.setPosition([0, -i - 1, 0]);
        planeModel.setRotation([90, 0, 0]);
        planeModels.push(planeModel);
    }
    return planeModels;
}
function getFarPlaneModels(gl, ref, nModels) {
    let planeModels = [];
    for (let i = 0; i < nModels; i++) {
        for (let j = 0; j < nModels; j++) {
            let planeModel = new __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["j" /* Model */](gl, ref.program, ref.mesh, ref.material.clone());
            planeModel.setPosition([i / 2, j / 2, -10]);
            planeModel.setScale(0.5);
            planeModels.push(planeModel);
        }
    }
    return planeModels;
}


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mesh_mesh_factory__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mesh_mesh_library__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_material__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__light_light__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mesh_mesh__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_model__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mesh_vertex__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shader_shader__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shader_shader_library__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shader_shader_factory__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__camera_camera__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__scene_scene__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_frame_stats__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__renderers_renderers__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__math_wgl_math__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__util_util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__common_canvas__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__loaders_loaders__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__input_input__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__input_camera_controls__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__common_capabilities__ = __webpack_require__(24);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_20__common_capabilities__; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_10__camera_camera__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_16__common_canvas__["a"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_19__input_camera_controls__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_18__input_input__; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_12__common_frame_stats__["a"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__light_light__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_17__loaders_loaders__; });
/* unused harmony reexport math */
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_2__material_material__; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_0__mesh_mesh_factory__["a"]; });
/* unused harmony reexport MeshLibrary */
/* unused harmony reexport Mesh */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_5__model_model__["a"]; });
/* unused harmony reexport Vertex */
/* unused harmony reexport Topologies */
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_13__renderers_renderers__; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_11__scene_scene__["a"]; });
/* unused harmony reexport ShaderTypes */
/* unused harmony reexport Shader */
/* unused harmony reexport ShaderProgram */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_8__shader_shader_library__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_9__shader_shader_factory__["a"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_15__util_util__; });
























/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeshFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vertex__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mesh__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mesh_library__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math_wgl_math__ = __webpack_require__(3);




class MeshFactory {
    static Defaults() {
        return {
            finalize: true,
            vertexCount: 64
        };
    }
    static create(gl, kind, inOpts = MeshFactory.Defaults()) {
        const opts = MeshFactory.Defaults();
        Object.assign(opts, inOpts);
        let mesh = new __WEBPACK_IMPORTED_MODULE_1__mesh__["a" /* Mesh */](gl);
        switch (kind) {
            case 'quad':
                MeshFactory.makeQuad(mesh);
                break;
            case 'triangle':
                MeshFactory.makeTriangle(mesh);
                break;
            case 'sphere':
                MeshFactory.makeSphere(mesh, opts.vertexCount);
                break;
            case 'cube':
                MeshFactory.makeCube(mesh);
                break;
            case 'skybox':
                MeshFactory.makeSkybox(mesh);
                break;
        }
        if (opts.finalize)
            mesh.finalize();
        return mesh;
    }
    static makeSkybox(mesh) {
        const float32VertexData = new Float32Array(__WEBPACK_IMPORTED_MODULE_2__mesh_library__["a" /* MeshLibrary */].skybox.data);
        for (let i = 0; i < 36; i++) {
            let vertex = new __WEBPACK_IMPORTED_MODULE_0__vertex__["b" /* Vertex */]();
            let x, y, z, u, v, nx, ny, nz;
            x = float32VertexData[i * 5 + 0];
            y = float32VertexData[i * 5 + 1];
            z = float32VertexData[i * 5 + 2];
            u = float32VertexData[i * 5 + 3];
            v = float32VertexData[i * 5 + 4];
            nx = 0;
            ny = 0;
            nz = 0;
            vertex.setPosition(new Float32Array([x, y, z]));
            vertex.setUV(new Float32Array([u, v]));
            vertex.setNormal(new Float32Array([nx, ny, nz]));
            mesh.addVertex(vertex);
        }
        mesh.setTopology(__WEBPACK_IMPORTED_MODULE_0__vertex__["a" /* Topologies */].TRIANGLES);
    }
    static makeQuad(mesh) {
        const float32VertexData = new Float32Array(__WEBPACK_IMPORTED_MODULE_2__mesh_library__["a" /* MeshLibrary */].quad.data);
        for (let i = 0; i < 6; i++) {
            let vertex = new __WEBPACK_IMPORTED_MODULE_0__vertex__["b" /* Vertex */]();
            let x, y, z, u, v, nx, ny, nz;
            x = float32VertexData[i * 8 + 0];
            y = float32VertexData[i * 8 + 1];
            z = float32VertexData[i * 8 + 2];
            u = float32VertexData[i * 8 + 3];
            v = float32VertexData[i * 8 + 4];
            nx = float32VertexData[i * 8 + 5];
            ny = float32VertexData[i * 8 + 6];
            nz = float32VertexData[i * 8 + 7];
            vertex.setPosition(new Float32Array([x, y, z]));
            vertex.setUV(new Float32Array([u, v]));
            vertex.setNormal(new Float32Array([nx, ny, nz]));
            mesh.addVertex(vertex);
        }
        mesh.setTopology(__WEBPACK_IMPORTED_MODULE_0__vertex__["a" /* Topologies */].TRIANGLES);
    }
    static makeCube(mesh) {
        const float32VertexData = new Float32Array(__WEBPACK_IMPORTED_MODULE_2__mesh_library__["a" /* MeshLibrary */].cube2.data);
        for (let i = 0; i < 36; i++) {
            let vertex = new __WEBPACK_IMPORTED_MODULE_0__vertex__["b" /* Vertex */]();
            let x, y, z;
            let nx, ny, nz, u, v;
            x = float32VertexData[i * 8 + 0];
            y = float32VertexData[i * 8 + 1];
            z = float32VertexData[i * 8 + 2];
            // these are flipped because they were copied that way,
            // and im too lazy to change it
            nx = float32VertexData[i * 8 + 3];
            ny = float32VertexData[i * 8 + 4];
            nz = float32VertexData[i * 8 + 5];
            u = float32VertexData[i * 8 + 6];
            v = float32VertexData[i * 8 + 7];
            vertex.setPosition(new Float32Array([x, y, z]));
            vertex.setNormal(new Float32Array([nx, ny, nz]));
            vertex.setUV(new Float32Array([u, v]));
            mesh.addVertex(vertex);
        }
        mesh.setTopology(__WEBPACK_IMPORTED_MODULE_0__vertex__["a" /* Topologies */].TRIANGLES);
    }
    static makeTriangle(mesh) {
        const float32VertexData = new Float32Array(__WEBPACK_IMPORTED_MODULE_2__mesh_library__["a" /* MeshLibrary */].triangle.data);
        for (let i = 0; i < 3; i++) {
            let vertex = new __WEBPACK_IMPORTED_MODULE_0__vertex__["b" /* Vertex */]();
            let x, y, z, u, v, nx, ny, nz;
            x = float32VertexData[i * 8 + 0];
            y = float32VertexData[i * 8 + 1];
            z = float32VertexData[i * 8 + 2];
            u = float32VertexData[i * 8 + 3];
            v = float32VertexData[i * 8 + 4];
            nx = float32VertexData[i * 8 + 5];
            ny = float32VertexData[i * 8 + 6];
            nz = float32VertexData[i * 8 + 7];
            vertex.setPosition(new Float32Array([x, y, z]));
            vertex.setUV(new Float32Array([u, v]));
            vertex.setNormal(new Float32Array([nx, ny, nz]));
            mesh.addVertex(vertex);
        }
        mesh.setTopology(__WEBPACK_IMPORTED_MODULE_0__vertex__["a" /* Topologies */].TRIANGLES);
    }
    static makeSphere(mesh, vertexCount = 64) {
        if (!__WEBPACK_IMPORTED_MODULE_3__math_wgl_math__["c" /* isPow2 */](vertexCount))
            throw new Error('Vertex count must be a power of 2.');
        for (let i = 0; i < vertexCount; i++) {
            for (let j = 0; j < vertexCount; j++) {
                let xSegment = j / (vertexCount - 1);
                let ySegment = i / (vertexCount - 1);
                let xPos = Math.cos(xSegment * 2 * Math.PI) * Math.sin(ySegment * Math.PI);
                let yPos = Math.cos(ySegment * Math.PI);
                let zPos = Math.sin(xSegment * 2 * Math.PI) * Math.sin(ySegment * Math.PI);
                let vertex = new __WEBPACK_IMPORTED_MODULE_0__vertex__["b" /* Vertex */]();
                vertex.setPosition(new Float32Array([xPos, yPos, zPos]));
                vertex.setUV(new Float32Array([xSegment, ySegment]));
                vertex.setNormal(new Float32Array([xPos, yPos, zPos]));
                mesh.addVertex(vertex);
            }
        }
        let firstIndex = 0;
        let nextIndex = vertexCount;
        let indexStp = 0;
        let shouldProceed = true;
        let indices = [];
        while (shouldProceed) {
            indices.push(firstIndex);
            indices.push(nextIndex);
            indexStp += 2;
            shouldProceed = nextIndex != (vertexCount * vertexCount) - 1;
            if (indexStp > 0 && (nextIndex + 1) % vertexCount == 0 && shouldProceed) {
                indices.push(nextIndex);
                indices.push(firstIndex + 1);
                indexStp += 2;
            }
            firstIndex++;
            nextIndex++;
        }
        mesh.setTopology(__WEBPACK_IMPORTED_MODULE_0__vertex__["a" /* Topologies */].TRIANGLE_STRIP);
        mesh.setIndices(new Uint16Array(indices));
    }
}



/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(31);
var v4 = __webpack_require__(33);

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(11);
var bytesToUuid = __webpack_require__(12);

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

// random #'s we need to init node and clockseq
var _seedBytes = rng();

// Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
var _nodeId = [
  _seedBytes[0] | 0x01,
  _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
];

// Per 4.2.2, randomize (14 bit) clockseq
var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;

// Previous uuid creation time
var _lastMSecs = 0, _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};

  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  var node = options.node || _nodeId;
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),
/* 32 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(11);
var bytesToUuid = __webpack_require__(12);

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options == 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export create */
/* unused harmony export clone */
/* unused harmony export copy */
/* unused harmony export identity */
/* unused harmony export fromValues */
/* unused harmony export set */
/* unused harmony export transpose */
/* unused harmony export invert */
/* unused harmony export adjoint */
/* unused harmony export determinant */
/* unused harmony export multiply */
/* unused harmony export rotate */
/* unused harmony export scale */
/* unused harmony export fromRotation */
/* unused harmony export fromScaling */
/* unused harmony export str */
/* unused harmony export frob */
/* unused harmony export LDU */
/* unused harmony export add */
/* unused harmony export subtract */
/* unused harmony export exactEquals */
/* unused harmony export equals */
/* unused harmony export multiplyScalar */
/* unused harmony export multiplyScalarAndAdd */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(2);
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */



/**
 * 2x2 Matrix
 * @module mat2
 */

/**
 * Creates a new identity mat2
 *
 * @returns {mat2} a new 2x2 matrix
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](4);
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Creates a new mat2 initialized with values from an existing matrix
 *
 * @param {mat2} a matrix to clone
 * @returns {mat2} a new 2x2 matrix
 */
function clone(a) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Copy the values from one mat2 to another
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Set a mat2 to the identity matrix
 *
 * @param {mat2} out the receiving matrix
 * @returns {mat2} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Create a new mat2 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out A new 2x2 matrix
 */
function fromValues(m00, m01, m10, m11) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](4);
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}

/**
 * Set the components of a mat2 to the given values
 *
 * @param {mat2} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out
 */
function set(out, m00, m01, m10, m11) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}

/**
 * Transpose the values of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache
  // some values
  if (out === a) {
    let a1 = a[1];
    out[1] = a[2];
    out[2] = a1;
  } else {
    out[0] = a[0];
    out[1] = a[2];
    out[2] = a[1];
    out[3] = a[3];
  }

  return out;
}

/**
 * Inverts a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function invert(out, a) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];

  // Calculate the determinant
  let det = a0 * a3 - a2 * a1;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] =  a3 * det;
  out[1] = -a1 * det;
  out[2] = -a2 * det;
  out[3] =  a0 * det;

  return out;
}

/**
 * Calculates the adjugate of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function adjoint(out, a) {
  // Caching this value is nessecary if out == a
  let a0 = a[0];
  out[0] =  a[3];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] =  a0;

  return out;
}

/**
 * Calculates the determinant of a mat2
 *
 * @param {mat2} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  return a[0] * a[3] - a[2] * a[1];
}

/**
 * Multiplies two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
function multiply(out, a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  return out;
}

/**
 * Rotates a mat2 by the given angle
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */
function rotate(out, a, rad) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  out[0] = a0 *  c + a2 * s;
  out[1] = a1 *  c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  return out;
}

/**
 * Scales the mat2 by the dimensions in the given vec2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2} out
 **/
function scale(out, a, v) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  let v0 = v[0], v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  return out;
}

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.rotate(dest, dest, rad);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */
function fromRotation(out, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.scale(dest, dest, vec);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat2} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  return out;
}

/**
 * Returns a string representation of a mat2
 *
 * @param {mat2} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}

/**
 * Returns Frobenius norm of a mat2
 *
 * @param {mat2} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2)))
}

/**
 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
 * @param {mat2} L the lower triangular matrix
 * @param {mat2} D the diagonal matrix
 * @param {mat2} U the upper triangular matrix
 * @param {mat2} a the input matrix to factorize
 */

function LDU(L, D, U, a) {
  L[2] = a[2]/a[0];
  U[0] = a[0];
  U[1] = a[1];
  U[3] = a[3] - L[2] * U[1];
  return [L, D, U];
}

/**
 * Adds two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat2} a The first matrix.
 * @param {mat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat2} a The first matrix.
 * @param {mat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
          Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a3), Math.abs(b3)));
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}

/**
 * Adds two mat2's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2} out the receiving vector
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  out[2] = a[2] + (b[2] * scale);
  out[3] = a[3] + (b[3] * scale);
  return out;
}

/**
 * Alias for {@link mat2.multiply}
 * @function
 */
const mul = multiply;
/* unused harmony export mul */


/**
 * Alias for {@link mat2.subtract}
 * @function
 */
const sub = subtract;
/* unused harmony export sub */



/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export create */
/* unused harmony export clone */
/* unused harmony export copy */
/* unused harmony export identity */
/* unused harmony export fromValues */
/* unused harmony export set */
/* unused harmony export invert */
/* unused harmony export determinant */
/* unused harmony export multiply */
/* unused harmony export rotate */
/* unused harmony export scale */
/* unused harmony export translate */
/* unused harmony export fromRotation */
/* unused harmony export fromScaling */
/* unused harmony export fromTranslation */
/* unused harmony export str */
/* unused harmony export frob */
/* unused harmony export add */
/* unused harmony export subtract */
/* unused harmony export multiplyScalar */
/* unused harmony export multiplyScalarAndAdd */
/* unused harmony export exactEquals */
/* unused harmony export equals */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(2);
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */



/**
 * 2x3 Matrix
 * @module mat2d
 *
 * @description
 * A mat2d contains six elements defined as:
 * <pre>
 * [a, c, tx,
 *  b, d, ty]
 * </pre>
 * This is a short form for the 3x3 matrix:
 * <pre>
 * [a, c, tx,
 *  b, d, ty,
 *  0, 0, 1]
 * </pre>
 * The last row is ignored so the array is shorter and operations are faster.
 */

/**
 * Creates a new identity mat2d
 *
 * @returns {mat2d} a new 2x3 matrix
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](6);
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  return out;
}

/**
 * Creates a new mat2d initialized with values from an existing matrix
 *
 * @param {mat2d} a matrix to clone
 * @returns {mat2d} a new 2x3 matrix
 */
function clone(a) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](6);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}

/**
 * Copy the values from one mat2d to another
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}

/**
 * Set a mat2d to the identity matrix
 *
 * @param {mat2d} out the receiving matrix
 * @returns {mat2d} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  return out;
}

/**
 * Create a new mat2d with the given values
 *
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} A new mat2d
 */
function fromValues(a, b, c, d, tx, ty) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](6);
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}

/**
 * Set the components of a mat2d to the given values
 *
 * @param {mat2d} out the receiving matrix
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} out
 */
function set(out, a, b, c, d, tx, ty) {
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}

/**
 * Inverts a mat2d
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */
function invert(out, a) {
  let aa = a[0], ab = a[1], ac = a[2], ad = a[3];
  let atx = a[4], aty = a[5];

  let det = aa * ad - ab * ac;
  if(!det){
    return null;
  }
  det = 1.0 / det;

  out[0] = ad * det;
  out[1] = -ab * det;
  out[2] = -ac * det;
  out[3] = aa * det;
  out[4] = (ac * aty - ad * atx) * det;
  out[5] = (ab * atx - aa * aty) * det;
  return out;
}

/**
 * Calculates the determinant of a mat2d
 *
 * @param {mat2d} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  return a[0] * a[3] - a[1] * a[2];
}

/**
 * Multiplies two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
function multiply(out, a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  out[4] = a0 * b4 + a2 * b5 + a4;
  out[5] = a1 * b4 + a3 * b5 + a5;
  return out;
}

/**
 * Rotates a mat2d by the given angle
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */
function rotate(out, a, rad) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  out[0] = a0 *  c + a2 * s;
  out[1] = a1 *  c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  out[4] = a4;
  out[5] = a5;
  return out;
}

/**
 * Scales the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2d} out
 **/
function scale(out, a, v) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
  let v0 = v[0], v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  out[4] = a4;
  out[5] = a5;
  return out;
}

/**
 * Translates the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to translate the matrix by
 * @returns {mat2d} out
 **/
function translate(out, a, v) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
  let v0 = v[0], v1 = v[1];
  out[0] = a0;
  out[1] = a1;
  out[2] = a2;
  out[3] = a3;
  out[4] = a0 * v0 + a2 * v1 + a4;
  out[5] = a1 * v0 + a3 * v1 + a5;
  return out;
}

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.rotate(dest, dest, rad);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */
function fromRotation(out, rad) {
  let s = Math.sin(rad), c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  out[4] = 0;
  out[5] = 0;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.scale(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat2d} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  out[4] = 0;
  out[5] = 0;
  return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.translate(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat2d} out
 */
function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = v[0];
  out[5] = v[1];
  return out;
}

/**
 * Returns a string representation of a mat2d
 *
 * @param {mat2d} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat2d(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' +
          a[3] + ', ' + a[4] + ', ' + a[5] + ')';
}

/**
 * Returns Frobenius norm of a mat2d
 *
 * @param {mat2d} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + 1))
}

/**
 * Adds two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  return out;
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2d} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  return out;
}

/**
 * Adds two mat2d's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2d} out the receiving vector
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2d} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  out[2] = a[2] + (b[2] * scale);
  out[3] = a[3] + (b[3] * scale);
  out[4] = a[4] + (b[4] * scale);
  out[5] = a[5] + (b[5] * scale);
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat2d} a The first matrix.
 * @param {mat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat2d} a The first matrix.
 * @param {mat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
          Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
          Math.abs(a4 - b4) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
          Math.abs(a5 - b5) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a5), Math.abs(b5)));
}

/**
 * Alias for {@link mat2d.multiply}
 * @function
 */
const mul = multiply;
/* unused harmony export mul */


/**
 * Alias for {@link mat2d.subtract}
 * @function
 */
const sub = subtract;
/* unused harmony export sub */



/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["identity"] = identity;
/* harmony export (immutable) */ __webpack_exports__["transpose"] = transpose;
/* harmony export (immutable) */ __webpack_exports__["invert"] = invert;
/* harmony export (immutable) */ __webpack_exports__["adjoint"] = adjoint;
/* harmony export (immutable) */ __webpack_exports__["determinant"] = determinant;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["translate"] = translate;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["rotate"] = rotate;
/* harmony export (immutable) */ __webpack_exports__["rotateX"] = rotateX;
/* harmony export (immutable) */ __webpack_exports__["rotateY"] = rotateY;
/* harmony export (immutable) */ __webpack_exports__["rotateZ"] = rotateZ;
/* harmony export (immutable) */ __webpack_exports__["fromTranslation"] = fromTranslation;
/* harmony export (immutable) */ __webpack_exports__["fromScaling"] = fromScaling;
/* harmony export (immutable) */ __webpack_exports__["fromRotation"] = fromRotation;
/* harmony export (immutable) */ __webpack_exports__["fromXRotation"] = fromXRotation;
/* harmony export (immutable) */ __webpack_exports__["fromYRotation"] = fromYRotation;
/* harmony export (immutable) */ __webpack_exports__["fromZRotation"] = fromZRotation;
/* harmony export (immutable) */ __webpack_exports__["fromRotationTranslation"] = fromRotationTranslation;
/* harmony export (immutable) */ __webpack_exports__["getTranslation"] = getTranslation;
/* harmony export (immutable) */ __webpack_exports__["getScaling"] = getScaling;
/* harmony export (immutable) */ __webpack_exports__["getRotation"] = getRotation;
/* harmony export (immutable) */ __webpack_exports__["fromRotationTranslationScale"] = fromRotationTranslationScale;
/* harmony export (immutable) */ __webpack_exports__["fromRotationTranslationScaleOrigin"] = fromRotationTranslationScaleOrigin;
/* harmony export (immutable) */ __webpack_exports__["fromQuat"] = fromQuat;
/* harmony export (immutable) */ __webpack_exports__["frustum"] = frustum;
/* harmony export (immutable) */ __webpack_exports__["perspective"] = perspective;
/* harmony export (immutable) */ __webpack_exports__["perspectiveFromFieldOfView"] = perspectiveFromFieldOfView;
/* harmony export (immutable) */ __webpack_exports__["ortho"] = ortho;
/* harmony export (immutable) */ __webpack_exports__["lookAt"] = lookAt;
/* harmony export (immutable) */ __webpack_exports__["targetTo"] = targetTo;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["frob"] = frob;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalar"] = multiplyScalar;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalarAndAdd"] = multiplyScalarAndAdd;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(2);
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */



/**
 * 4x4 Matrix
 * @module mat4
 */

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](16);
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {mat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */
function clone(a) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](16);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */
function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](16);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}

/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */
function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}


/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    let a01 = a[1], a02 = a[2], a03 = a[3];
    let a12 = a[6], a13 = a[7];
    let a23 = a[11];

    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }

  return out;
}

/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function invert(out, a) {
  let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

  let b00 = a00 * a11 - a01 * a10;
  let b01 = a00 * a12 - a02 * a10;
  let b02 = a00 * a13 - a03 * a10;
  let b03 = a01 * a12 - a02 * a11;
  let b04 = a01 * a13 - a03 * a11;
  let b05 = a02 * a13 - a03 * a12;
  let b06 = a20 * a31 - a21 * a30;
  let b07 = a20 * a32 - a22 * a30;
  let b08 = a20 * a33 - a23 * a30;
  let b09 = a21 * a32 - a22 * a31;
  let b10 = a21 * a33 - a23 * a31;
  let b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

  return out;
}

/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function adjoint(out, a) {
  let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

  out[0]  =  (a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22));
  out[1]  = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
  out[2]  =  (a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12));
  out[3]  = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
  out[4]  = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
  out[5]  =  (a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22));
  out[6]  = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
  out[7]  =  (a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12));
  out[8]  =  (a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21));
  out[9]  = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
  out[10] =  (a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11));
  out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
  out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
  out[13] =  (a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21));
  out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
  out[15] =  (a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11));
  return out;
}

/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

  let b00 = a00 * a11 - a01 * a10;
  let b01 = a00 * a12 - a02 * a10;
  let b02 = a00 * a13 - a03 * a10;
  let b03 = a01 * a12 - a02 * a11;
  let b04 = a01 * a13 - a03 * a11;
  let b05 = a02 * a13 - a03 * a12;
  let b06 = a20 * a31 - a21 * a30;
  let b07 = a20 * a32 - a22 * a30;
  let b08 = a20 * a33 - a23 * a30;
  let b09 = a21 * a32 - a22 * a31;
  let b10 = a21 * a33 - a23 * a31;
  let b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}

/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function multiply(out, a, b) {
  let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

  // Cache only the current line of the second matrix
  let b0  = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  out[0] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
  out[1] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
  out[2] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
  out[3] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

  b0 = b[4]; b1 = b[5]; b2 = b[6]; b3 = b[7];
  out[4] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
  out[5] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
  out[6] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
  out[7] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

  b0 = b[8]; b1 = b[9]; b2 = b[10]; b3 = b[11];
  out[8] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
  out[9] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
  out[10] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
  out[11] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

  b0 = b[12]; b1 = b[13]; b2 = b[14]; b3 = b[15];
  out[12] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
  out[13] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
  out[14] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
  out[15] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
  return out;
}

/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */
function translate(out, a, v) {
  let x = v[0], y = v[1], z = v[2];
  let a00, a01, a02, a03;
  let a10, a11, a12, a13;
  let a20, a21, a22, a23;

  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
    a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
    a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

    out[0] = a00; out[1] = a01; out[2] = a02; out[3] = a03;
    out[4] = a10; out[5] = a11; out[6] = a12; out[7] = a13;
    out[8] = a20; out[9] = a21; out[10] = a22; out[11] = a23;

    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }

  return out;
}

/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/
function scale(out, a, v) {
  let x = v[0], y = v[1], z = v[2];

  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
function rotate(out, a, rad, axis) {
  let x = axis[0], y = axis[1], z = axis[2];
  let len = Math.sqrt(x * x + y * y + z * z);
  let s, c, t;
  let a00, a01, a02, a03;
  let a10, a11, a12, a13;
  let a20, a21, a22, a23;
  let b00, b01, b02;
  let b10, b11, b12;
  let b20, b21, b22;

  if (Math.abs(len) < __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]) { return null; }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;

  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;

  a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
  a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
  a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

  // Construct the elements of the rotation matrix
  b00 = x * x * t + c; b01 = y * x * t + z * s; b02 = z * x * t - y * s;
  b10 = x * y * t - z * s; b11 = y * y * t + c; b12 = z * y * t + x * s;
  b20 = x * z * t + y * s; b21 = y * z * t - x * s; b22 = z * z * t + c;

  // Perform rotation-specific matrix multiplication
  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;

  if (a !== out) { // If the source and destination differ, copy the unchanged last row
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }
  return out;
}

/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateX(out, a, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  let a10 = a[4];
  let a11 = a[5];
  let a12 = a[6];
  let a13 = a[7];
  let a20 = a[8];
  let a21 = a[9];
  let a22 = a[10];
  let a23 = a[11];

  if (a !== out) { // If the source and destination differ, copy the unchanged rows
    out[0]  = a[0];
    out[1]  = a[1];
    out[2]  = a[2];
    out[3]  = a[3];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  // Perform axis-specific matrix multiplication
  out[4] = a10 * c + a20 * s;
  out[5] = a11 * c + a21 * s;
  out[6] = a12 * c + a22 * s;
  out[7] = a13 * c + a23 * s;
  out[8] = a20 * c - a10 * s;
  out[9] = a21 * c - a11 * s;
  out[10] = a22 * c - a12 * s;
  out[11] = a23 * c - a13 * s;
  return out;
}

/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateY(out, a, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  let a00 = a[0];
  let a01 = a[1];
  let a02 = a[2];
  let a03 = a[3];
  let a20 = a[8];
  let a21 = a[9];
  let a22 = a[10];
  let a23 = a[11];

  if (a !== out) { // If the source and destination differ, copy the unchanged rows
    out[4]  = a[4];
    out[5]  = a[5];
    out[6]  = a[6];
    out[7]  = a[7];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  // Perform axis-specific matrix multiplication
  out[0] = a00 * c - a20 * s;
  out[1] = a01 * c - a21 * s;
  out[2] = a02 * c - a22 * s;
  out[3] = a03 * c - a23 * s;
  out[8] = a00 * s + a20 * c;
  out[9] = a01 * s + a21 * c;
  out[10] = a02 * s + a22 * c;
  out[11] = a03 * s + a23 * c;
  return out;
}

/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateZ(out, a, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  let a00 = a[0];
  let a01 = a[1];
  let a02 = a[2];
  let a03 = a[3];
  let a10 = a[4];
  let a11 = a[5];
  let a12 = a[6];
  let a13 = a[7];

  if (a !== out) { // If the source and destination differ, copy the unchanged last row
    out[8]  = a[8];
    out[9]  = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  // Perform axis-specific matrix multiplication
  out[0] = a00 * c + a10 * s;
  out[1] = a01 * c + a11 * s;
  out[2] = a02 * c + a12 * s;
  out[3] = a03 * c + a13 * s;
  out[4] = a10 * c - a00 * s;
  out[5] = a11 * c - a01 * s;
  out[6] = a12 * c - a02 * s;
  out[7] = a13 * c - a03 * s;
  return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */
function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Scaling vector
 * @returns {mat4} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = v[1];
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = v[2];
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
function fromRotation(out, rad, axis) {
  let x = axis[0], y = axis[1], z = axis[2];
  let len = Math.sqrt(x * x + y * y + z * z);
  let s, c, t;

  if (Math.abs(len) < __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]) { return null; }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;

  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;

  // Perform rotation-specific matrix multiplication
  out[0] = x * x * t + c;
  out[1] = y * x * t + z * s;
  out[2] = z * x * t - y * s;
  out[3] = 0;
  out[4] = x * y * t - z * s;
  out[5] = y * y * t + c;
  out[6] = z * y * t + x * s;
  out[7] = 0;
  out[8] = x * z * t + y * s;
  out[9] = y * z * t - x * s;
  out[10] = z * z * t + c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromXRotation(out, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);

  // Perform axis-specific matrix multiplication
  out[0]  = 1;
  out[1]  = 0;
  out[2]  = 0;
  out[3]  = 0;
  out[4] = 0;
  out[5] = c;
  out[6] = s;
  out[7] = 0;
  out[8] = 0;
  out[9] = -s;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromYRotation(out, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);

  // Perform axis-specific matrix multiplication
  out[0]  = c;
  out[1]  = 0;
  out[2]  = -s;
  out[3]  = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = s;
  out[9] = 0;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromZRotation(out, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);

  // Perform axis-specific matrix multiplication
  out[0]  = c;
  out[1]  = s;
  out[2]  = 0;
  out[3]  = 0;
  out[4] = -s;
  out[5] = c;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */
function fromRotationTranslation(out, q, v) {
  // Quaternion math
  let x = q[0], y = q[1], z = q[2], w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;

  let xx = x * x2;
  let xy = x * y2;
  let xz = x * z2;
  let yy = y * y2;
  let yz = y * z2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;

  out[0] = 1 - (yy + zz);
  out[1] = xy + wz;
  out[2] = xz - wy;
  out[3] = 0;
  out[4] = xy - wz;
  out[5] = 1 - (xx + zz);
  out[6] = yz + wx;
  out[7] = 0;
  out[8] = xz + wy;
  out[9] = yz - wx;
  out[10] = 1 - (xx + yy);
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;

  return out;
}

/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */
function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];

  return out;
}

/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */
function getScaling(out, mat) {
  let m11 = mat[0];
  let m12 = mat[1];
  let m13 = mat[2];
  let m21 = mat[4];
  let m22 = mat[5];
  let m23 = mat[6];
  let m31 = mat[8];
  let m32 = mat[9];
  let m33 = mat[10];

  out[0] = Math.sqrt(m11 * m11 + m12 * m12 + m13 * m13);
  out[1] = Math.sqrt(m21 * m21 + m22 * m22 + m23 * m23);
  out[2] = Math.sqrt(m31 * m31 + m32 * m32 + m33 * m33);

  return out;
}

/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {mat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */
function getRotation(out, mat) {
  // Algorithm taken from http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm
  let trace = mat[0] + mat[5] + mat[10];
  let S = 0;

  if (trace > 0) {
    S = Math.sqrt(trace + 1.0) * 2;
    out[3] = 0.25 * S;
    out[0] = (mat[6] - mat[9]) / S;
    out[1] = (mat[8] - mat[2]) / S;
    out[2] = (mat[1] - mat[4]) / S;
  } else if ((mat[0] > mat[5])&(mat[0] > mat[10])) {
    S = Math.sqrt(1.0 + mat[0] - mat[5] - mat[10]) * 2;
    out[3] = (mat[6] - mat[9]) / S;
    out[0] = 0.25 * S;
    out[1] = (mat[1] + mat[4]) / S;
    out[2] = (mat[8] + mat[2]) / S;
  } else if (mat[5] > mat[10]) {
    S = Math.sqrt(1.0 + mat[5] - mat[0] - mat[10]) * 2;
    out[3] = (mat[8] - mat[2]) / S;
    out[0] = (mat[1] + mat[4]) / S;
    out[1] = 0.25 * S;
    out[2] = (mat[6] + mat[9]) / S;
  } else {
    S = Math.sqrt(1.0 + mat[10] - mat[0] - mat[5]) * 2;
    out[3] = (mat[1] - mat[4]) / S;
    out[0] = (mat[8] + mat[2]) / S;
    out[1] = (mat[6] + mat[9]) / S;
    out[2] = 0.25 * S;
  }

  return out;
}

/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @returns {mat4} out
 */
function fromRotationTranslationScale(out, q, v, s) {
  // Quaternion math
  let x = q[0], y = q[1], z = q[2], w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;

  let xx = x * x2;
  let xy = x * y2;
  let xz = x * z2;
  let yy = y * y2;
  let yz = y * z2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;
  let sx = s[0];
  let sy = s[1];
  let sz = s[2];

  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;

  return out;
}

/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @param {vec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */
function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
  // Quaternion math
  let x = q[0], y = q[1], z = q[2], w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;

  let xx = x * x2;
  let xy = x * y2;
  let xz = x * z2;
  let yy = y * y2;
  let yz = y * z2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;

  let sx = s[0];
  let sy = s[1];
  let sz = s[2];

  let ox = o[0];
  let oy = o[1];
  let oz = o[2];

  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0] + ox - (out[0] * ox + out[4] * oy + out[8] * oz);
  out[13] = v[1] + oy - (out[1] * ox + out[5] * oy + out[9] * oz);
  out[14] = v[2] + oz - (out[2] * ox + out[6] * oy + out[10] * oz);
  out[15] = 1;

  return out;
}

/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */
function fromQuat(out, q) {
  let x = q[0], y = q[1], z = q[2], w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;

  let xx = x * x2;
  let yx = y * x2;
  let yy = y * y2;
  let zx = z * x2;
  let zy = z * y2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;

  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;

  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;

  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;

  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;

  return out;
}

/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */
function frustum(out, left, right, bottom, top, near, far) {
  let rl = 1 / (right - left);
  let tb = 1 / (top - bottom);
  let nf = 1 / (near - far);
  out[0] = (near * 2) * rl;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = (near * 2) * tb;
  out[6] = 0;
  out[7] = 0;
  out[8] = (right + left) * rl;
  out[9] = (top + bottom) * tb;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = (far * near * 2) * nf;
  out[15] = 0;
  return out;
}

/**
 * Generates a perspective projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function perspective(out, fovy, aspect, near, far) {
  let f = 1.0 / Math.tan(fovy / 2);
  let nf = 1 / (near - far);
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = (2 * far * near) * nf;
  out[15] = 0;
  return out;
}

/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function perspectiveFromFieldOfView(out, fov, near, far) {
  let upTan = Math.tan(fov.upDegrees * Math.PI/180.0);
  let downTan = Math.tan(fov.downDegrees * Math.PI/180.0);
  let leftTan = Math.tan(fov.leftDegrees * Math.PI/180.0);
  let rightTan = Math.tan(fov.rightDegrees * Math.PI/180.0);
  let xScale = 2.0 / (leftTan + rightTan);
  let yScale = 2.0 / (upTan + downTan);

  out[0] = xScale;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  out[4] = 0.0;
  out[5] = yScale;
  out[6] = 0.0;
  out[7] = 0.0;
  out[8] = -((leftTan - rightTan) * xScale * 0.5);
  out[9] = ((upTan - downTan) * yScale * 0.5);
  out[10] = far / (near - far);
  out[11] = -1.0;
  out[12] = 0.0;
  out[13] = 0.0;
  out[14] = (far * near) / (near - far);
  out[15] = 0.0;
  return out;
}

/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function ortho(out, left, right, bottom, top, near, far) {
  let lr = 1 / (left - right);
  let bt = 1 / (bottom - top);
  let nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}

/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
function lookAt(out, eye, center, up) {
  let x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
  let eyex = eye[0];
  let eyey = eye[1];
  let eyez = eye[2];
  let upx = up[0];
  let upy = up[1];
  let upz = up[2];
  let centerx = center[0];
  let centery = center[1];
  let centerz = center[2];

  if (Math.abs(eyex - centerx) < __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"] &&
      Math.abs(eyey - centery) < __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"] &&
      Math.abs(eyez - centerz) < __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]) {
    return mat4.identity(out);
  }

  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;

  len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
  z0 *= len;
  z1 *= len;
  z2 *= len;

  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
  if (!len) {
    x0 = 0;
    x1 = 0;
    x2 = 0;
  } else {
    len = 1 / len;
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  y0 = z1 * x2 - z2 * x1;
  y1 = z2 * x0 - z0 * x2;
  y2 = z0 * x1 - z1 * x0;

  len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
  if (!len) {
    y0 = 0;
    y1 = 0;
    y2 = 0;
  } else {
    len = 1 / len;
    y0 *= len;
    y1 *= len;
    y2 *= len;
  }

  out[0] = x0;
  out[1] = y0;
  out[2] = z0;
  out[3] = 0;
  out[4] = x1;
  out[5] = y1;
  out[6] = z1;
  out[7] = 0;
  out[8] = x2;
  out[9] = y2;
  out[10] = z2;
  out[11] = 0;
  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
  out[15] = 1;

  return out;
}

/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
function targetTo(out, eye, target, up) {
  let eyex = eye[0],
      eyey = eye[1],
      eyez = eye[2],
      upx = up[0],
      upy = up[1],
      upz = up[2];

  let z0 = eyex - target[0],
      z1 = eyey - target[1],
      z2 = eyez - target[2];

  let len = z0*z0 + z1*z1 + z2*z2;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
    z0 *= len;
    z1 *= len;
    z2 *= len;
  }

  let x0 = upy * z2 - upz * z1,
      x1 = upz * z0 - upx * z2,
      x2 = upx * z1 - upy * z0;

  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
};

/**
 * Returns a string representation of a mat4
 *
 * @param {mat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' +
          a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' +
          a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' +
          a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
}

/**
 * Returns Frobenius norm of a mat4
 *
 * @param {mat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2) + Math.pow(a[9], 2) + Math.pow(a[10], 2) + Math.pow(a[11], 2) + Math.pow(a[12], 2) + Math.pow(a[13], 2) + Math.pow(a[14], 2) + Math.pow(a[15], 2) ))
}

/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}

/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  out[2] = a[2] + (b[2] * scale);
  out[3] = a[3] + (b[3] * scale);
  out[4] = a[4] + (b[4] * scale);
  out[5] = a[5] + (b[5] * scale);
  out[6] = a[6] + (b[6] * scale);
  out[7] = a[7] + (b[7] * scale);
  out[8] = a[8] + (b[8] * scale);
  out[9] = a[9] + (b[9] * scale);
  out[10] = a[10] + (b[10] * scale);
  out[11] = a[11] + (b[11] * scale);
  out[12] = a[12] + (b[12] * scale);
  out[13] = a[13] + (b[13] * scale);
  out[14] = a[14] + (b[14] * scale);
  out[15] = a[15] + (b[15] * scale);
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] &&
         a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] &&
         a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] &&
         a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  let a0  = a[0],  a1  = a[1],  a2  = a[2],  a3  = a[3];
  let a4  = a[4],  a5  = a[5],  a6  = a[6],  a7  = a[7];
  let a8  = a[8],  a9  = a[9],  a10 = a[10], a11 = a[11];
  let a12 = a[12], a13 = a[13], a14 = a[14], a15 = a[15];

  let b0  = b[0],  b1  = b[1],  b2  = b[2],  b3  = b[3];
  let b4  = b[4],  b5  = b[5],  b6  = b[6],  b7  = b[7];
  let b8  = b[8],  b9  = b[9],  b10 = b[10], b11 = b[11];
  let b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];

  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
          Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
          Math.abs(a4 - b4) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
          Math.abs(a5 - b5) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a5), Math.abs(b5)) &&
          Math.abs(a6 - b6) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a6), Math.abs(b6)) &&
          Math.abs(a7 - b7) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a7), Math.abs(b7)) &&
          Math.abs(a8 - b8) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a8), Math.abs(b8)) &&
          Math.abs(a9 - b9) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a9), Math.abs(b9)) &&
          Math.abs(a10 - b10) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a10), Math.abs(b10)) &&
          Math.abs(a11 - b11) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a11), Math.abs(b11)) &&
          Math.abs(a12 - b12) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a12), Math.abs(b12)) &&
          Math.abs(a13 - b13) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a13), Math.abs(b13)) &&
          Math.abs(a14 - b14) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a14), Math.abs(b14)) &&
          Math.abs(a15 - b15) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a15), Math.abs(b15)));
}

/**
 * Alias for {@link mat4.multiply}
 * @function
 */
const mul = multiply;
/* harmony export (immutable) */ __webpack_exports__["mul"] = mul;


/**
 * Alias for {@link mat4.subtract}
 * @function
 */
const sub = subtract;
/* harmony export (immutable) */ __webpack_exports__["sub"] = sub;



/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export create */
/* unused harmony export identity */
/* unused harmony export setAxisAngle */
/* unused harmony export getAxisAngle */
/* unused harmony export multiply */
/* unused harmony export rotateX */
/* unused harmony export rotateY */
/* unused harmony export rotateZ */
/* unused harmony export calculateW */
/* unused harmony export slerp */
/* unused harmony export invert */
/* unused harmony export conjugate */
/* unused harmony export fromMat3 */
/* unused harmony export fromEuler */
/* unused harmony export str */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mat3__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vec3__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vec4__ = __webpack_require__(16);
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */






/**
 * Quaternion
 * @module quat
 */

/**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](4);
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */
function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/
function setAxisAngle(out, axis, rad) {
  rad = rad * 0.5;
  let s = Math.sin(rad);
  out[0] = s * axis[0];
  out[1] = s * axis[1];
  out[2] = s * axis[2];
  out[3] = Math.cos(rad);
  return out;
}

/**
 * Gets the rotation axis and angle for a given
 *  quaternion. If a quaternion is created with
 *  setAxisAngle, this method will return the same
 *  values as providied in the original parameter list
 *  OR functionally equivalent values.
 * Example: The quaternion formed by axis [0, 0, 1] and
 *  angle -90 is the same as the quaternion formed by
 *  [0, 0, 1] and 270. This method favors the latter.
 * @param  {vec3} out_axis  Vector receiving the axis of rotation
 * @param  {quat} q     Quaternion to be decomposed
 * @return {Number}     Angle, in radians, of the rotation
 */
function getAxisAngle(out_axis, q) {
  let rad = Math.acos(q[3]) * 2.0;
  let s = Math.sin(rad / 2.0);
  if (s != 0.0) {
    out_axis[0] = q[0] / s;
    out_axis[1] = q[1] / s;
    out_axis[2] = q[2] / s;
  } else {
    // If s is zero, return any axis (no rotation - axis does not matter)
    out_axis[0] = 1;
    out_axis[1] = 0;
    out_axis[2] = 0;
  }
  return rad;
}

/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 */
function multiply(out, a, b) {
  let ax = a[0], ay = a[1], az = a[2], aw = a[3];
  let bx = b[0], by = b[1], bz = b[2], bw = b[3];

  out[0] = ax * bw + aw * bx + ay * bz - az * by;
  out[1] = ay * bw + aw * by + az * bx - ax * bz;
  out[2] = az * bw + aw * bz + ax * by - ay * bx;
  out[3] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateX(out, a, rad) {
  rad *= 0.5;

  let ax = a[0], ay = a[1], az = a[2], aw = a[3];
  let bx = Math.sin(rad), bw = Math.cos(rad);

  out[0] = ax * bw + aw * bx;
  out[1] = ay * bw + az * bx;
  out[2] = az * bw - ay * bx;
  out[3] = aw * bw - ax * bx;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateY(out, a, rad) {
  rad *= 0.5;

  let ax = a[0], ay = a[1], az = a[2], aw = a[3];
  let by = Math.sin(rad), bw = Math.cos(rad);

  out[0] = ax * bw - az * by;
  out[1] = ay * bw + aw * by;
  out[2] = az * bw + ax * by;
  out[3] = aw * bw - ay * by;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateZ(out, a, rad) {
  rad *= 0.5;

  let ax = a[0], ay = a[1], az = a[2], aw = a[3];
  let bz = Math.sin(rad), bw = Math.cos(rad);

  out[0] = ax * bw + ay * bz;
  out[1] = ay * bw - ax * bz;
  out[2] = az * bw + aw * bz;
  out[3] = aw * bw - az * bz;
  return out;
}

/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate W component of
 * @returns {quat} out
 */
function calculateW(out, a) {
  let x = a[0], y = a[1], z = a[2];

  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
  return out;
}

/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 */
function slerp(out, a, b, t) {
  // benchmarks:
  //    http://jsperf.com/quaternion-slerp-implementations
  let ax = a[0], ay = a[1], az = a[2], aw = a[3];
  let bx = b[0], by = b[1], bz = b[2], bw = b[3];

  let omega, cosom, sinom, scale0, scale1;

  // calc cosine
  cosom = ax * bx + ay * by + az * bz + aw * bw;
  // adjust signs (if necessary)
  if ( cosom < 0.0 ) {
    cosom = -cosom;
    bx = - bx;
    by = - by;
    bz = - bz;
    bw = - bw;
  }
  // calculate coefficients
  if ( (1.0 - cosom) > 0.000001 ) {
    // standard case (slerp)
    omega  = Math.acos(cosom);
    sinom  = Math.sin(omega);
    scale0 = Math.sin((1.0 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    // "from" and "to" quaternions are very close
    //  ... so we can do a linear interpolation
    scale0 = 1.0 - t;
    scale1 = t;
  }
  // calculate final values
  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;

  return out;
}

/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate inverse of
 * @returns {quat} out
 */
function invert(out, a) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  let dot = a0*a0 + a1*a1 + a2*a2 + a3*a3;
  let invDot = dot ? 1.0/dot : 0;

  // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

  out[0] = -a0*invDot;
  out[1] = -a1*invDot;
  out[2] = -a2*invDot;
  out[3] = a3*invDot;
  return out;
}

/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate conjugate of
 * @returns {quat} out
 */
function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  return out;
}

/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {mat3} m rotation matrix
 * @returns {quat} out
 * @function
 */
function fromMat3(out, m) {
  // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
  // article "Quaternion Calculus and Fast Animation".
  let fTrace = m[0] + m[4] + m[8];
  let fRoot;

  if ( fTrace > 0.0 ) {
    // |w| > 1/2, may as well choose w > 1/2
    fRoot = Math.sqrt(fTrace + 1.0);  // 2w
    out[3] = 0.5 * fRoot;
    fRoot = 0.5/fRoot;  // 1/(4w)
    out[0] = (m[5]-m[7])*fRoot;
    out[1] = (m[6]-m[2])*fRoot;
    out[2] = (m[1]-m[3])*fRoot;
  } else {
    // |w| <= 1/2
    let i = 0;
    if ( m[4] > m[0] )
      i = 1;
    if ( m[8] > m[i*3+i] )
      i = 2;
    let j = (i+1)%3;
    let k = (i+2)%3;

    fRoot = Math.sqrt(m[i*3+i]-m[j*3+j]-m[k*3+k] + 1.0);
    out[i] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[3] = (m[j*3+k] - m[k*3+j]) * fRoot;
    out[j] = (m[j*3+i] + m[i*3+j]) * fRoot;
    out[k] = (m[k*3+i] + m[i*3+k]) * fRoot;
  }

  return out;
}

/**
 * Creates a quaternion from the given euler angle x, y, z.
 *
 * @param {quat} out the receiving quaternion
 * @param {x} Angle to rotate around X axis in degrees.
 * @param {y} Angle to rotate around Y axis in degrees.
 * @param {z} Angle to rotate around Z axis in degrees.
 * @returns {quat} out
 * @function
 */
function fromEuler(out, x, y, z) {
    let halfToRad = 0.5 * Math.PI / 180.0;
    x *= halfToRad;
    y *= halfToRad;
    z *= halfToRad;

    let sx = Math.sin(x);
    let cx = Math.cos(x);
    let sy = Math.sin(y);
    let cy = Math.cos(y);
    let sz = Math.sin(z);
    let cz = Math.cos(z);

    out[0] = sx * cy * cz - cx * sy * sz;
    out[1] = cx * sy * cz + sx * cy * sz;
    out[2] = cx * cy * sz - sx * sy * cz;
    out[3] = cx * cy * cz + sx * sy * sz;

    return out;
}

/**
 * Returns a string representation of a quatenion
 *
 * @param {quat} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}

/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {quat} a quaternion to clone
 * @returns {quat} a new quaternion
 * @function
 */
const clone = __WEBPACK_IMPORTED_MODULE_3__vec4__["clone"];
/* unused harmony export clone */


/**
 * Creates a new quat initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} a new quaternion
 * @function
 */
const fromValues = __WEBPACK_IMPORTED_MODULE_3__vec4__["fromValues"];
/* unused harmony export fromValues */


/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the source quaternion
 * @returns {quat} out
 * @function
 */
const copy = __WEBPACK_IMPORTED_MODULE_3__vec4__["copy"];
/* unused harmony export copy */


/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */
const set = __WEBPACK_IMPORTED_MODULE_3__vec4__["set"];
/* unused harmony export set */


/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 * @function
 */
const add = __WEBPACK_IMPORTED_MODULE_3__vec4__["add"];
/* unused harmony export add */


/**
 * Alias for {@link quat.multiply}
 * @function
 */
const mul = multiply;
/* unused harmony export mul */


/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {quat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */
const scale = __WEBPACK_IMPORTED_MODULE_3__vec4__["scale"];
/* unused harmony export scale */


/**
 * Calculates the dot product of two quat's
 *
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */
const dot = __WEBPACK_IMPORTED_MODULE_3__vec4__["dot"];
/* unused harmony export dot */


/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 * @function
 */
const lerp = __WEBPACK_IMPORTED_MODULE_3__vec4__["lerp"];
/* unused harmony export lerp */


/**
 * Calculates the length of a quat
 *
 * @param {quat} a vector to calculate length of
 * @returns {Number} length of a
 */
const length = __WEBPACK_IMPORTED_MODULE_3__vec4__["length"];
/* unused harmony export length */


/**
 * Alias for {@link quat.length}
 * @function
 */
const len = length;
/* unused harmony export len */


/**
 * Calculates the squared length of a quat
 *
 * @param {quat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */
const squaredLength = __WEBPACK_IMPORTED_MODULE_3__vec4__["squaredLength"];
/* unused harmony export squaredLength */


/**
 * Alias for {@link quat.squaredLength}
 * @function
 */
const sqrLen = squaredLength;
/* unused harmony export sqrLen */


/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */
const normalize = __WEBPACK_IMPORTED_MODULE_3__vec4__["normalize"];
/* unused harmony export normalize */


/**
 * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {quat} a The first quaternion.
 * @param {quat} b The second quaternion.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
const exactEquals = __WEBPACK_IMPORTED_MODULE_3__vec4__["exactEquals"];
/* unused harmony export exactEquals */


/**
 * Returns whether or not the quaternions have approximately the same elements in the same position.
 *
 * @param {quat} a The first vector.
 * @param {quat} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
const equals = __WEBPACK_IMPORTED_MODULE_3__vec4__["equals"];
/* unused harmony export equals */


/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {vec3} a the initial vector
 * @param {vec3} b the destination vector
 * @returns {quat} out
 */
const rotationTo = (function() {
  let tmpvec3 = __WEBPACK_IMPORTED_MODULE_2__vec3__["create"]();
  let xUnitVec3 = __WEBPACK_IMPORTED_MODULE_2__vec3__["fromValues"](1,0,0);
  let yUnitVec3 = __WEBPACK_IMPORTED_MODULE_2__vec3__["fromValues"](0,1,0);

  return function(out, a, b) {
    let dot = __WEBPACK_IMPORTED_MODULE_2__vec3__["dot"](a, b);
    if (dot < -0.999999) {
      __WEBPACK_IMPORTED_MODULE_2__vec3__["cross"](tmpvec3, xUnitVec3, a);
      if (__WEBPACK_IMPORTED_MODULE_2__vec3__["len"](tmpvec3) < 0.000001)
        __WEBPACK_IMPORTED_MODULE_2__vec3__["cross"](tmpvec3, yUnitVec3, a);
      __WEBPACK_IMPORTED_MODULE_2__vec3__["normalize"](tmpvec3, tmpvec3);
      setAxisAngle(out, tmpvec3, Math.PI);
      return out;
    } else if (dot > 0.999999) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    } else {
      __WEBPACK_IMPORTED_MODULE_2__vec3__["cross"](tmpvec3, a, b);
      out[0] = tmpvec3[0];
      out[1] = tmpvec3[1];
      out[2] = tmpvec3[2];
      out[3] = 1 + dot;
      return normalize(out, out);
    }
  };
})();
/* unused harmony export rotationTo */


/**
 * Performs a spherical linear interpolation with two control points
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {quat} c the third operand
 * @param {quat} d the fourth operand
 * @param {Number} t interpolation amount
 * @returns {quat} out
 */
const sqlerp = (function () {
  let temp1 = create();
  let temp2 = create();

  return function (out, a, b, c, d, t) {
    slerp(temp1, a, d, t);
    slerp(temp2, b, c, t);
    slerp(out, temp1, temp2, 2 * t * (1 - t));

    return out;
  };
}());
/* unused harmony export sqlerp */


/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {vec3} view  the vector representing the viewing direction
 * @param {vec3} right the vector representing the local "right" direction
 * @param {vec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */
const setAxes = (function() {
  let matr = __WEBPACK_IMPORTED_MODULE_1__mat3__["a" /* create */]();

  return function(out, view, right, up) {
    matr[0] = right[0];
    matr[3] = right[1];
    matr[6] = right[2];

    matr[1] = up[0];
    matr[4] = up[1];
    matr[7] = up[2];

    matr[2] = -view[0];
    matr[5] = -view[1];
    matr[8] = -view[2];

    return normalize(out, fromMat3(out, matr));
  };
})();
/* unused harmony export setAxes */



/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["divide"] = divide;
/* harmony export (immutable) */ __webpack_exports__["ceil"] = ceil;
/* harmony export (immutable) */ __webpack_exports__["floor"] = floor;
/* harmony export (immutable) */ __webpack_exports__["min"] = min;
/* harmony export (immutable) */ __webpack_exports__["max"] = max;
/* harmony export (immutable) */ __webpack_exports__["round"] = round;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["scaleAndAdd"] = scaleAndAdd;
/* harmony export (immutable) */ __webpack_exports__["distance"] = distance;
/* harmony export (immutable) */ __webpack_exports__["squaredDistance"] = squaredDistance;
/* harmony export (immutable) */ __webpack_exports__["length"] = length;
/* harmony export (immutable) */ __webpack_exports__["squaredLength"] = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["negate"] = negate;
/* harmony export (immutable) */ __webpack_exports__["inverse"] = inverse;
/* harmony export (immutable) */ __webpack_exports__["normalize"] = normalize;
/* harmony export (immutable) */ __webpack_exports__["dot"] = dot;
/* harmony export (immutable) */ __webpack_exports__["cross"] = cross;
/* harmony export (immutable) */ __webpack_exports__["lerp"] = lerp;
/* harmony export (immutable) */ __webpack_exports__["random"] = random;
/* harmony export (immutable) */ __webpack_exports__["transformMat2"] = transformMat2;
/* harmony export (immutable) */ __webpack_exports__["transformMat2d"] = transformMat2d;
/* harmony export (immutable) */ __webpack_exports__["transformMat3"] = transformMat3;
/* harmony export (immutable) */ __webpack_exports__["transformMat4"] = transformMat4;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(2);
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */



/**
 * 2 Dimensional Vector
 * @module vec2
 */

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](2);
  out[0] = 0;
  out[1] = 0;
  return out;
}

/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {vec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */
function clone(a) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](2);
  out[0] = a[0];
  out[1] = a[1];
  return out;
}

/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */
function fromValues(x, y) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](2);
  out[0] = x;
  out[1] = y;
  return out;
}

/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the source vector
 * @returns {vec2} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  return out;
}

/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */
function set(out, x, y) {
  out[0] = x;
  out[1] = y;
  return out;
}

/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  return out;
}

/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  return out;
};

/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  return out;
};

/**
 * Math.ceil the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to ceil
 * @returns {vec2} out
 */
function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  return out;
};

/**
 * Math.floor the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to floor
 * @returns {vec2} out
 */
function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  return out;
};

/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  return out;
};

/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  return out;
};

/**
 * Math.round the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to round
 * @returns {vec2} out
 */
function round (out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  return out;
};

/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  return out;
};

/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */
function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  return out;
};

/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
  var x = b[0] - a[0],
    y = b[1] - a[1];
  return Math.sqrt(x*x + y*y);
};

/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
  var x = b[0] - a[0],
    y = b[1] - a[1];
  return x*x + y*y;
};

/**
 * Calculates the length of a vec2
 *
 * @param {vec2} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
  var x = a[0],
    y = a[1];
  return Math.sqrt(x*x + y*y);
};

/**
 * Calculates the squared length of a vec2
 *
 * @param {vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength (a) {
  var x = a[0],
    y = a[1];
  return x*x + y*y;
};

/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  return out;
};

/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to invert
 * @returns {vec2} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  return out;
};

/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */
function normalize(out, a) {
  var x = a[0],
    y = a[1];
  var len = x*x + y*y;
  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
    out[0] = a[0] * len;
    out[1] = a[1] * len;
  }
  return out;
};

/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1];
};

/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
  var z = a[0] * b[1] - a[1] * b[0];
  out[0] = out[1] = 0;
  out[2] = z;
  return out;
};

/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec2} out
 */
function lerp(out, a, b, t) {
  var ax = a[0],
    ay = a[1];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  return out;
};

/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */
function random(out, scale) {
  scale = scale || 1.0;
  var r = __WEBPACK_IMPORTED_MODULE_0__common__["RANDOM"]() * 2.0 * Math.PI;
  out[0] = Math.cos(r) * scale;
  out[1] = Math.sin(r) * scale;
  return out;
};

/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat2(out, a, m) {
  var x = a[0],
    y = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  return out;
};

/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat2d(out, a, m) {
  var x = a[0],
    y = a[1];
  out[0] = m[0] * x + m[2] * y + m[4];
  out[1] = m[1] * x + m[3] * y + m[5];
  return out;
};

/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat3(out, a, m) {
  var x = a[0],
    y = a[1];
  out[0] = m[0] * x + m[3] * y + m[6];
  out[1] = m[1] * x + m[4] * y + m[7];
  return out;
};

/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat4(out, a, m) {
  let x = a[0];
  let y = a[1];
  out[0] = m[0] * x + m[4] * y + m[12];
  out[1] = m[1] * x + m[5] * y + m[13];
  return out;
}

/**
 * Returns a string representation of a vector
 *
 * @param {vec2} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'vec2(' + a[0] + ', ' + a[1] + ')';
}

/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0], a1 = a[1];
  let b0 = b[0], b1 = b[1];
  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a1), Math.abs(b1)));
}

/**
 * Alias for {@link vec2.length}
 * @function
 */
const len = length;
/* harmony export (immutable) */ __webpack_exports__["len"] = len;


/**
 * Alias for {@link vec2.subtract}
 * @function
 */
const sub = subtract;
/* harmony export (immutable) */ __webpack_exports__["sub"] = sub;


/**
 * Alias for {@link vec2.multiply}
 * @function
 */
const mul = multiply;
/* harmony export (immutable) */ __webpack_exports__["mul"] = mul;


/**
 * Alias for {@link vec2.divide}
 * @function
 */
const div = divide;
/* harmony export (immutable) */ __webpack_exports__["div"] = div;


/**
 * Alias for {@link vec2.distance}
 * @function
 */
const dist = distance;
/* harmony export (immutable) */ __webpack_exports__["dist"] = dist;


/**
 * Alias for {@link vec2.squaredDistance}
 * @function
 */
const sqrDist = squaredDistance;
/* harmony export (immutable) */ __webpack_exports__["sqrDist"] = sqrDist;


/**
 * Alias for {@link vec2.squaredLength}
 * @function
 */
const sqrLen = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["sqrLen"] = sqrLen;


/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
const forEach = (function() {
  let vec = create();

  return function(a, stride, offset, count, fn, arg) {
    let i, l;
    if(!stride) {
      stride = 2;
    }

    if(!offset) {
      offset = 0;
    }

    if(count) {
      l = Math.min((count * stride) + offset, a.length);
    } else {
      l = a.length;
    }

    for(i = offset; i < l; i += stride) {
      vec[0] = a[i]; vec[1] = a[i+1];
      fn(vec, vec, arg);
      a[i] = vec[0]; a[i+1] = vec[1];
    }

    return a;
  };
})();
/* harmony export (immutable) */ __webpack_exports__["forEach"] = forEach;



/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["requireVec3"] = requireVec3;
/* harmony export (immutable) */ __webpack_exports__["cloneVec3Convertible"] = cloneVec3Convertible;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(1);

function requireVec3(val) {
    if (val instanceof Array) {
        let len = val.length;
        if (len !== 3)
            throw new Error(`Array must have 3 elements; ${len} were present.`);
        val = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(val[0], val[1], val[2]);
    }
    else if (typeof (val) == 'number') {
        val = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(val, val, val);
    }
    return val;
}
function cloneVec3Convertible(data) {
    if (typeof (data) == 'number') {
        return data;
    }
    else if (Array.isArray(data)) {
        return data.slice();
    }
    else {
        return __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].clone(data);
    }
}


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);


class transform {
    constructor(data = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].create()) {
        this.data = data;
    }
    identity() {
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].identity(this.data);
        return this;
    }
    translate(val) {
        val = __WEBPACK_IMPORTED_MODULE_1__util__["vector"].requireVec3(val);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].translate(this.data, this.data, val);
        return this;
    }
    rotate(rad, axis) {
        axis = __WEBPACK_IMPORTED_MODULE_1__util__["vector"].requireVec3(axis);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].rotate(this.data, this.data, rad, axis);
        return this;
    }
    scale(val) {
        val = __WEBPACK_IMPORTED_MODULE_1__util__["vector"].requireVec3(val);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].scale(this.data, this.data, val);
        return this;
    }
    mat() {
        return this.data;
    }
    clone() {
        return new transform(this.matCopy());
    }
    matCopy() {
        return __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].copy(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].create(), this.data);
    }
}
/* harmony export (immutable) */ __webpack_exports__["transform"] = transform;



/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validators", function() { return validators; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_resource__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__type_util__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_util__ = __webpack_require__(18);



//
//	Attribute
//
class _AttributeBase {
    constructor(name, value, validator) {
        this.name = name;
        this.value = value;
        this.validator = validator;
    }
    activator(type, ...args) {
        return new type(...args);
    }
}
class _Attribute extends _AttributeBase {
    constructor(name, value, validator = validators.Any) {
        super(name, value, validator);
        this.value = null;
        this.isDirty = true;
        this.name = name;
        this.setValidator(validator);
        this.validate(value);
        this.setValue(value);
    }
    getValue() {
        this.isDirty = false;
        return this.value;
    }
    peekValue() {
        return this.value;
    }
    setValue(value) {
        this.validate(value);
        this.value = this._setValue(value);
        this.isDirty = true;
    }
    setValidator(validator) {
        this.validator = validator;
    }
    validate(value) {
        if (this.validator)
            this.validator(this, value);
    }
}
/* harmony export (immutable) */ __webpack_exports__["_Attribute"] = _Attribute;

var validators;
(function (validators) {
    function Any(attr, data) { }
    validators.Any = Any;
    function Number(attr, data) {
        if (typeof (data) !== 'number')
            throw new Error(`Attribute "${attr.name}" must be a number.`);
    }
    validators.Number = Number;
    function Vec3(attr, data) {
        if (!__WEBPACK_IMPORTED_MODULE_1__type_util__["isNElementArray"](data, 3)) {
            throw new Error(`Attribute "${attr.name}" must be a vec3, or equivalent array-type.`);
        }
    }
    validators.Vec3 = Vec3;
    function Vec3OrTexture(attr, data) {
        if (!__WEBPACK_IMPORTED_MODULE_1__type_util__["isNElementArray"](data, 3) && !__WEBPACK_IMPORTED_MODULE_1__type_util__["isTexture"](data)) {
            throw new Error(`Attribute "${attr.name}" must be a vec3 (or equivalent array-type), or a texture.`);
        }
    }
    validators.Vec3OrTexture = Vec3OrTexture;
    function Boolean(attr, data) {
        if (typeof (data) !== 'boolean')
            throw new Error(`Attribute "${attr.name}" must be a boolean.`);
    }
    validators.Boolean = Boolean;
})(validators || (validators = {}));
class _AttributeMap {
    constructor() {
        this.items = {};
    }
    add(val) {
        this.items[val.name] = val;
    }
    getAll() {
        let items = this.items;
        let keys = Object.keys(items);
        let values = keys.map(key => items[key]);
        return values;
    }
    has(key) {
        return this.items[key] !== undefined;
    }
    getOne(key) {
        let item = this.items[key];
        if (item === undefined)
            throw new Error(`Requested non-present attribute "${key}".`);
        return item;
    }
}
/* harmony export (immutable) */ __webpack_exports__["_AttributeMap"] = _AttributeMap;

class Attributable extends __WEBPACK_IMPORTED_MODULE_0__common_resource__["a" /* Resource */] {
    constructor() { super(); }
    addAttribute(attr) {
        this.attributes.add(attr);
    }
    addAttributes(...attrs) {
        for (let attr of attrs) {
            this.addAttribute(attr);
        }
    }
    hasAttribute(name) {
        return this.attributes.has(name);
    }
    enumerateAttributes() {
        return this.attributes.getAll();
    }
    getAttribute(name) {
        return this.attributes.getOne(name);
    }
    activator(type, ...args) {
        return new type(...args);
    }
    _clone(attributableConstructor, attributeConstructor, ...args) {
        let copy = this.activator(attributableConstructor, ...args);
        for (let attr of this.enumerateAttributes()) {
            if (!copy.hasAttribute(attr.name)) {
                let copyAtt = __WEBPACK_IMPORTED_MODULE_2__common_util__["clone"](attr.peekValue());
                let attr_ = attr.activator(attributeConstructor, attr.name, copyAtt, attr.validator);
                copy.addAttribute(attr_);
            }
            else {
                copy.getAttribute(attr.name).setValue(__WEBPACK_IMPORTED_MODULE_2__common_util__["clone"](attr.peekValue()));
            }
        }
        return copy;
    }
}
/* harmony export (immutable) */ __webpack_exports__["Attributable"] = Attributable;



/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
class Defaults {
    constructor(...args) { this.options = this.get(...args); }
    set(name, value) {
        this.options[name] = value;
        return this;
    }
}
/* harmony export (immutable) */ __webpack_exports__["Defaults"] = Defaults;



/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShaderLibrary; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shaders_shader_basic__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shaders_shader_pbr1__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shaders_shader_skybox__ = __webpack_require__(46);



const ShaderLibrary = {
    Basic: __WEBPACK_IMPORTED_MODULE_0__shaders_shader_basic__["a" /* Basic */],
    PBR1: __WEBPACK_IMPORTED_MODULE_1__shaders_shader_pbr1__["a" /* PBR1 */],
    Skybox: __WEBPACK_IMPORTED_MODULE_2__shaders_shader_skybox__["a" /* Skybox */]
};



/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Basic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shader_shader__ = __webpack_require__(4);

var _sources;
(function (_sources) {
    _sources.vertex = `
		attribute vec3 in_position;
		attribute vec3 in_normal;
		attribute vec2 in_uv;

		uniform mat4 model;
		uniform mat4 projection;
		uniform mat4 view;

		void main() {
			gl_Position = projection * view * model * vec4(in_position, 1.0);
		}
	`;
    _sources.fragment = `
		precision mediump float;

		uniform vec3 albedo;

		void main() {
      		gl_FragColor = vec4(albedo, 1.0);
    	}
	`;
})(_sources || (_sources = {}));
const Basic = {
    sources: [
        {
            source: _sources.vertex,
            type: __WEBPACK_IMPORTED_MODULE_0__shader_shader__["c" /* ShaderTypes */].VERTEX,
            uniforms: ['model', 'view', 'projection']
        },
        {
            source: _sources.fragment,
            type: __WEBPACK_IMPORTED_MODULE_0__shader_shader__["c" /* ShaderTypes */].FRAGMENT,
            uniforms: ['albedo']
        }
    ]
};



/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PBR1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shader_shader__ = __webpack_require__(4);

var _sources;
(function (_sources) {
    _sources.vertex = `
		attribute vec3 in_position;
		attribute vec3 in_normal;
		attribute vec2 in_uv;

		uniform mat4 model;
		uniform mat4 view;
		uniform mat4 projection;

		varying mediump vec3 v_position;
		varying mediump vec2 v_uv;
		varying mediump vec3 v_normal;

		void main() {
			gl_Position = projection * view * model * vec4(in_position, 1.0);
			v_position = vec3(model * vec4(in_position, 1.0));
			v_uv = in_uv;
			v_normal = in_normal;
		}
	`;
    _sources.fragment = `

		precision mediump float;

		const float PI = 3.14159265359;

		float distribution_ggx(vec3 N, vec3 H, float roughness);
		float geometry_schlick_ggx(float NdotV, float roughness);
		float geometry_smith(vec3 N, vec3 V, vec3 L, float roughness);
		vec3 fresnel_schlick(float cos_theta, vec3 F0);

		vec3 PBR(
		     vec3 normals,
		     vec3 albedo,
		     float roughness,
		     float metallic,
		     vec3 cam_position,
		     vec3 world_position,
		     vec3 light_position,
		     vec3 light_color,
		     bool is_directional) {
		    
		    vec3 F0 = vec3(0.04);
		    F0 = mix(F0, albedo, metallic);
		    
		    vec3 N = normalize(normals);
		    vec3 V = normalize(cam_position - world_position);
		    
		    vec3 L;

		    if (!is_directional) {
		    	L = normalize(light_position - world_position);
		    } else {
		    	L = normalize(-light_position);
		    }

		    vec3 H = normalize(V + L);

		    float attenuation = 1.0;
		    
		    if (!is_directional) {
		    	float distance = length(light_position - world_position);
		    	attenuation = 1.0 / (distance * distance * 0.0002);
		    }
		    
		    vec3 radiance = light_color * attenuation;
		    
		    vec3 F = fresnel_schlick(max(dot(H, V), 0.0), F0);
		    float NDF = distribution_ggx(N, H, roughness);
		    float G = geometry_smith(N, V, L, roughness);
		    vec3 numer = vec3(NDF) * vec3(G) * F;
		    float denom = 4.0 * max(dot(N, V), 0.0) * max(dot(N, L), 0.0) + 0.001;
		    vec3 specular = numer / denom;
		    
		    vec3 kS = F;
		    vec3 kD = vec3(1.0) - kS;
		    kD *= 1.0 - metallic;
		    
		    float NdotL = max(dot(N, L), 0.0);
		    return (kD * albedo / PI + specular) * radiance * NdotL;
		}

		//
		//  Fresnel component (F)
		//

		vec3 fresnel_schlick(float cosTheta, vec3 F0) {
		    return F0 + (1.0 - F0) * pow(1.0 - cosTheta, 5.0);
		}

		//
		//  Normal distribution component (D)
		//

		float distribution_beckman(vec3 h, vec3 n, float roughness) {
		    float a = roughness * roughness;
		    float a2 = a * a;
		    float n_dot_h = max(dot(n, h), 0.0);
		    float n_dot_h2 = n_dot_h * n_dot_h;
		    float part_a = 1.0 / (PI * a2 * pow(n_dot_h, 4.0));
		    float exp_component = (n_dot_h2 - 1.0) / (a2 * n_dot_h2);
		    return part_a * exp(exp_component);
		}

		float distribution_ggx(vec3 N, vec3 H, float roughness) {
		    float a = roughness * roughness;
		    float a2 = a * a;
		    float NdotH = max(dot(N, H), 0.0);
		    float NdotH2 = NdotH * NdotH;
		    
		    float denom = (NdotH2 * (a2-1.0) + 1.0);
		    denom = PI * denom * denom;
		    
		    return a2 / denom;
		}

		//
		//  Geometry distribution component (G)
		//

		float geometry_schlick_ggx(float NdotV, float roughness) {
		    float r = roughness + 1.0;
		    //  direct light
		    float k = (r*r) / 8.0;
		    //  IBL
		    //  float k = (roughness * roughness) / 2;
		    float denom = NdotV * (1.0 - k) + k;
		    return NdotV / denom;
		}

		float geometry_smith(vec3 N, vec3 V, vec3 L, float roughness) {
		    float NdotV = max(dot(N, V), 0.0);
		    float NdotL = max(dot(N, L), 0.0);
		    float ggx2 = geometry_schlick_ggx(NdotV, roughness);
		    float ggx1 = geometry_schlick_ggx(NdotL, roughness);
		    return ggx1 * ggx2;
		}

		struct PointLight {
			vec3 position;
			vec3 color;
			vec3 mask;
		};

		struct DirectionalLight {
			vec3 direction;
			vec3 color;
			vec3 mask;
		};

		const int n_point_lights = 2;
		const int n_directional_lights = 1;

		uniform PointLight point_lights[n_point_lights];
		uniform DirectionalLight directional_lights[n_directional_lights];

		uniform vec3 cam_position;

		uniform vec3 albedo;
		uniform float roughness;
		uniform float metallic;

		varying mediump vec3 v_position;
		varying mediump vec2 v_uv;
		varying mediump vec3 v_normal;

		void main() {

			vec3 final_color = albedo;

			vec3 Lo = vec3(0.0);

			//	point lights

			for (int i = 0; i < n_point_lights; i++) {
				bool is_directional = false;
				vec3 res = PBR(v_normal, albedo, roughness, metallic, 
					cam_position, v_position, point_lights[i].position, point_lights[i].color, is_directional);
				res *= point_lights[i].mask;
				Lo += res;
			}

			//	directional lights

			for (int i = 0; i < n_directional_lights; i++) {
				bool is_directional = true;
				vec3 res = PBR(v_normal, albedo, roughness, metallic, 
					cam_position, v_position, directional_lights[i].direction, directional_lights[i].color, is_directional);
				res *= directional_lights[i].mask;
				Lo += res;
			}

			vec3 ambient = vec3(0.03) * albedo;

		    final_color = ambient + Lo;
		    final_color = final_color / (final_color + vec3(1.0));
		    final_color = pow(final_color, vec3(1.0/2.2));

      		gl_FragColor = vec4(final_color, 1.0);
    	}
	`;
})(_sources || (_sources = {}));
const PBR1 = {
    sources: [
        {
            source: _sources.vertex,
            type: __WEBPACK_IMPORTED_MODULE_0__shader_shader__["c" /* ShaderTypes */].VERTEX,
            uniforms: ['model', 'view', 'projection']
        },
        {
            source: _sources.fragment,
            type: __WEBPACK_IMPORTED_MODULE_0__shader_shader__["c" /* ShaderTypes */].FRAGMENT,
            uniforms: ['point', 'directional', 'direction', 'position', 'color', 'mask',
                'albedo', 'roughness', 'metallic', 'camera_position']
        }
    ]
};



/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Skybox; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shader_shader__ = __webpack_require__(4);

var _sources;
(function (_sources) {
    _sources.vertex = `
		attribute vec3 in_position;
		attribute vec3 in_normal;
		attribute vec2 in_uv;

		uniform mat4 projection;
		uniform mat4 view;
		uniform mat4 model;

		varying mediump vec2 v_uv;
		varying mediump vec3 v_normal;

		void main() {
			mat4 viewT = mat4(mat3(view));
			vec4 pos = projection * viewT * vec4(in_position, 1.0);
			v_uv = in_uv;
			v_normal = in_normal;
			gl_Position = pos.xyww;
		}
	`;
    _sources.fragment = `

		precision mediump float;

		varying mediump vec2 v_uv;
		varying mediump vec3 v_normal;

		uniform sampler2D albedo;

		void main() {
      		gl_FragColor = texture2D(albedo, v_uv);
    	}
	`;
})(_sources || (_sources = {}));
const Skybox = {
    sources: [
        {
            source: _sources.vertex,
            type: __WEBPACK_IMPORTED_MODULE_0__shader_shader__["c" /* ShaderTypes */].VERTEX,
            uniforms: ['view', 'projection']
        },
        {
            source: _sources.fragment,
            type: __WEBPACK_IMPORTED_MODULE_0__shader_shader__["c" /* ShaderTypes */].FRAGMENT,
            uniforms: ['albedo']
        }
    ]
};



/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShaderFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shader__ = __webpack_require__(4);

class ShaderFactory {
    static Create(gl, programSource) {
        let shaders = programSource.sources.map((source) => {
            return new __WEBPACK_IMPORTED_MODULE_0__shader__["a" /* Shader */](gl, source);
        });
        let program = new __WEBPACK_IMPORTED_MODULE_0__shader__["b" /* ShaderProgram */](gl);
        try {
            program.attach(shaders);
        }
        catch (err) {
            console.error(err.message);
            return null;
        }
        return program;
    }
}



/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Camera; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_wgl_math__ = __webpack_require__(3);



class Camera {
    constructor() {
        this.yaw = -90.0;
        this.pitch = 0.0;
        this.movementSpeed = 2.5;
        this.rotationSensitivity = 0.1;
        this.target = null;
        this.position = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0, 0, 0);
        this.up = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0, 1, 0);
        this.worldUp = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0, 1, 0);
        this.right = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].create();
        this.front = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0, 0, -1);
        this.updateCameraVectors();
    }
    getViewMatrix() {
        let hasTarget = this.target !== null;
        let target = hasTarget ? this.target : __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].create();
        let view = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].create();
        let position = this.position;
        let front = this.front;
        let up = this.up;
        if (!hasTarget)
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].add(target, position, front);
        __WEBPACK_IMPORTED_MODULE_2__math_wgl_math__["d" /* lookAt */](view, position, target, up);
        return view;
    }
    lookAt(where) {
        if (where === null) {
            this.target = null;
            return;
        }
        this.target = __WEBPACK_IMPORTED_MODULE_1__util_util__["vector"].requireVec3(where);
    }
    setPosition(position) {
        this.position = __WEBPACK_IMPORTED_MODULE_1__util_util__["vector"].requireVec3(position);
    }
    setPitch(pitch) {
        this.pitch = this.constrainPitch(pitch);
        this.updateCameraVectors();
    }
    setYaw(yaw) {
        this.yaw = yaw;
        this.updateCameraVectors();
    }
    move(direction, dt, speed) {
        if (!speed)
            speed = this.movementSpeed;
        let vel = speed * dt;
        let velocity = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(vel, vel, vel);
        let front_ = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].create();
        let right_ = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].create();
        let front = this.front;
        let right = this.right;
        let position = this.position;
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].copy(front_, front);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].copy(right_, right);
        if (direction === 'forwards') {
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].add(position, position, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].multiply(front_, front_, velocity));
        }
        else if (direction === 'backwards') {
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].sub(position, position, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].multiply(front_, front_, velocity));
        }
        else if (direction === 'left') {
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].sub(position, position, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].multiply(right_, right_, velocity));
        }
        else if (direction === 'right') {
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].add(position, position, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].multiply(right_, right_, velocity));
        }
    }
    rotate(x, y, sensitivity) {
        if (!sensitivity)
            sensitivity = this.rotationSensitivity;
        this.yaw += (x * sensitivity);
        this.pitch += (y * sensitivity);
        this.pitch = this.constrainPitch(this.pitch);
        this.updateCameraVectors();
    }
    constrainPitch(pitch) {
        if (pitch > 89.0)
            pitch = 89.0;
        if (pitch < -89.0)
            pitch = -89.0;
        return pitch;
    }
    updateCameraVectors() {
        let front_ = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].create();
        let right = this.right;
        let front = this.front;
        let up = this.up;
        let worldUp = this.worldUp;
        let pitch = this.pitch;
        let yaw = this.yaw;
        front_[0] = Math.cos(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* glMatrix */].toRadian(yaw)) * Math.cos(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* glMatrix */].toRadian(pitch));
        front_[1] = Math.sin(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* glMatrix */].toRadian(pitch));
        front_[2] = Math.sin(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* glMatrix */].toRadian(yaw));
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].copy(front, front_);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].cross(right, front, worldUp);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].normalize(right, right);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].cross(up, right, front);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].normalize(up, up);
    }
}



/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Scene; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_model__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__light_light__ = __webpack_require__(21);


class Scene {
    constructor(gl) {
        this.models = [];
        this.lights = [];
        this.modelsSorted = false;
        this.gl = gl;
        this.background = null;
    }
    sortModels(comparator) {
        this.models.sort(comparator);
        this.modelsSorted = true;
    }
    add(element) {
        if (Array.isArray(element)) {
            if (element.length === 0)
                return;
            const self = this;
            element.map(el => self.addOne(el));
        }
        else {
            this.addOne(element);
        }
    }
    addOne(element) {
        if (element instanceof __WEBPACK_IMPORTED_MODULE_0__model_model__["a" /* Model */]) {
            this.addModel(element);
        }
        else if (element instanceof __WEBPACK_IMPORTED_MODULE_1__light_light__["Light"]) {
            this.addLight(element);
        }
    }
    addLight(light) {
        this.lights.push(light);
    }
    addModel(model) {
        this.models.push(model);
        this.modelsSorted = false;
    }
}



/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrameStats; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_util__ = __webpack_require__(0);

class FrameStats {
    constructor() {
        this.min = Infinity;
        this.max = -Infinity;
        this.mean = 0;
        this.iterations = 0;
        this.current = NaN;
        this.places = 2;
        this.visible = true;
        this.timer = new __WEBPACK_IMPORTED_MODULE_0__util_util__["time"].DeltaTimer();
        this.timer.setRatio(__WEBPACK_IMPORTED_MODULE_0__util_util__["time"].ratios.s());
        this.setupElement();
    }
    setupElement() {
        const el = document.createElement('div');
        const self = this;
        el.style.position = 'fixed';
        el.style.left = '0px';
        el.style.top = '0px';
        el.style.backgroundColor = 'black';
        el.style.opacity = '0.5';
        el.style.color = 'white';
        el.onclick = (evt) => {
            el.style.opacity = self.visible ? '0' : '0.5';
            self.visible = !self.visible;
        };
        document.body.appendChild(el);
        this.el = el;
    }
    update() {
        let wasFirst = this.timer.firstUpdate();
        this.timer.update();
        if (wasFirst)
            return;
        let dt = this.timer.delta();
        if (dt < this.min)
            this.min = dt;
        if (dt > this.max)
            this.max = dt;
        this.current = dt;
        this.mean = ((this.mean * this.iterations) + dt) / (this.iterations + 1);
        this.iterations++;
        this.el.innerHTML = this.getString();
    }
    getString() {
        const places = this.places;
        const self = this;
        const current = this.getTimeFPSString('current', this.current);
        const min = this.getTimeFPSString('min', this.min);
        const max = this.getTimeFPSString('max', this.max);
        const mean = this.getTimeFPSString('mean', this.mean);
        return current + min + max + mean;
    }
    getTimeFPSString(kind, val) {
        let timeUnits = this.timer.getRatio().alias;
        const ms = `${kind}: ${(val).toFixed(this.places)} ${timeUnits}, `;
        const fps = `${(1 / val).toFixed(this.places)} FPS<br>`;
        return ms + fps;
    }
}



/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__functional_renderer__ = __webpack_require__(52);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "functional", function() { return __WEBPACK_IMPORTED_MODULE_0__functional_renderer__["a"]; });




/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_renderer__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shader_shader__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mesh_mesh__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shader_uniforms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_model__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_material__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_util__ = __webpack_require__(0);







/* harmony default export */ __webpack_exports__["a"] = (class extends __WEBPACK_IMPORTED_MODULE_0__base_renderer__["a" /* default */] {
    constructor(gl) {
        super(gl);
        this.lastMesh = null;
        this.lastProgram = null;
        this.lastMaterial = null;
    }
    render(scene, camera) {
        this.clear();
        if (scene.models.length === 0)
            return;
        if (!scene.modelsSorted)
            scene.sortModels(__WEBPACK_IMPORTED_MODULE_4__model_model__["a" /* Model */].compareMeshUUID);
        this.configureCamera(scene.models[0].program, camera);
        this.configureLights(scene.models[0].program, scene.lights);
        for (let model of scene.models) {
            this.drawModel(scene, camera, model);
        }
        this.drawBackground(scene, camera);
    }
    drawBackground(scene, camera) {
        if (!scene.background)
            return;
        const gl = this.gl;
        gl.depthFunc(gl.LEQUAL);
        this.drawModel(scene, camera, scene.background);
        gl.depthFunc(gl.LESS);
    }
    drawModel(scene, camera, model) {
        model.onBeforeRender();
        const prog = model.program;
        const material = model.material;
        const mesh = model.mesh;
        if (this.conditionalBindProgram(prog)) {
            this.configureCamera(prog, camera);
            this.configureLights(prog, scene.lights);
        }
        this.configureTransform(prog, model.getWorldMatrix());
        this.configureMaterial(prog, material);
        this.draw(prog, mesh);
        model.onAfterRender();
    }
    draw(prog, mesh) {
        this.conditionalBindProgram(prog);
        this.conditionalBindMesh(prog, mesh);
        mesh.draw();
    }
    configureTransform(prog, transformMatrix) {
        this.conditionalBindProgram(prog);
        this.conditionalSetUniform(prog, 'model', transformMatrix);
    }
    configureCamera(prog, camera) {
        this.conditionalBindProgram(prog);
        this.conditionalSetUniform(prog, 'projection', this.projection);
        this.conditionalSetUniform(prog, 'view', camera.getViewMatrix());
        this.conditionalSetUniform(prog, 'camera_position', camera.position);
    }
    configureMaterial(prog, material) {
        this.conditionalBindProgram(prog);
        let isNew = this.checkNewMaterial(material);
        let attrs = material.enumerateAttributes();
        for (let attr of attrs) {
            if (isNew || attr.isDirty) {
                this.conditionalSetUniform(prog, attr.name, attr.getValue());
            }
            if (__WEBPACK_IMPORTED_MODULE_6__util_util__["types"].isTexture(attr.peekValue())) {
                this.configureTexture(prog, attr.getValue());
            }
        }
    }
    configureTexture(prog, tex) {
        this.conditionalBindProgram(prog);
        tex.bind();
    }
    configureLight(prog, light) {
        this.conditionalBindProgram(prog);
        let active = light.active;
        if (!active)
            return;
        let index = light.getIndex();
        let attrs = light.enumerateAttributes();
        for (let attr of attrs) {
            if (attr.isDirty) {
                let un = __WEBPACK_IMPORTED_MODULE_3__shader_uniforms__["a" /* Map */].getUniform(attr.name);
                let mappedName = __WEBPACK_IMPORTED_MODULE_3__shader_uniforms__["a" /* Map */].getUniform(light.getName());
                let unf = `${mappedName}[${index}].${un}`;
                if (prog.hasUniform(light.getName())) {
                    prog.setUniform(unf, attr.getValue());
                }
            }
        }
    }
    configureLights(prog, lights) {
        for (let light of lights) {
            this.configureLight(prog, light);
        }
    }
    checkNewMaterial(material) {
        let isNullLastMaterial = this.lastMaterial === null;
        let isNewMaterial = isNullLastMaterial ||
            !__WEBPACK_IMPORTED_MODULE_5__material_material__["Material"].equals(material, this.lastMaterial);
        this.lastMaterial = material;
        return isNewMaterial;
    }
    conditionalBindMesh(prog, mesh) {
        let isNullLastMesh = this.lastMesh === null;
        let isNewMesh = isNullLastMesh || !__WEBPACK_IMPORTED_MODULE_2__mesh_mesh__["a" /* Mesh */].equals(mesh, this.lastMesh);
        if (isNewMesh) {
            if (!isNullLastMesh && this.lastMesh.isBound())
                this.lastMesh.unbind();
            if (!mesh.isBound())
                mesh.bind(prog);
        }
        this.lastMesh = mesh;
        return isNewMesh;
    }
    conditionalBindProgram(prog) {
        let isNullLastProgram = this.lastProgram === null;
        let isNewProgram = isNullLastProgram || !__WEBPACK_IMPORTED_MODULE_1__shader_shader__["b" /* ShaderProgram */].equals(prog, this.lastProgram);
        if (isNewProgram) {
            if (!isNullLastProgram && this.lastProgram.isBound())
                this.lastProgram.unbind();
            if (!prog.isBound())
                prog.bind();
        }
        this.lastProgram = prog;
        return isNewProgram;
    }
    conditionalSetUniform(prog, name, value) {
        if (prog.hasUniform(name)) {
            prog.setUniform(__WEBPACK_IMPORTED_MODULE_3__shader_uniforms__["a" /* Map */].getUniform(name), value);
        }
    }
});


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(1);

/* harmony default export */ __webpack_exports__["a"] = (class {
    constructor(gl) {
        this.fov = 45.0;
        this.near = 0.1;
        this.far = 1000.0;
        this.aspect = 1.0;
        this.gl = gl;
        this.projection = this.getProjectionMatrix();
        this.clearColor = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec3 */].fromValues(0.2, 0.2, 0.2);
        this.setup();
    }
    setup() {
        const gl = this.gl;
        gl.enable(gl.DEPTH_TEST);
    }
    setNearFar(near, far) {
        this.near = near;
        this.far = far;
        this.projection = this.getProjectionMatrix();
    }
    clear() {
        const gl = this.gl;
        const cc = this.clearColor;
        gl.clearColor(cc[0], cc[1], cc[2], 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    }
    setAspect(ar) {
        this.aspect = ar;
        this.projection = this.getProjectionMatrix();
    }
    getProjectionMatrix() {
        let projection = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].create();
        return __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].perspective(projection, this.fov, this.aspect, this.near, this.far);
    }
});


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Canvas; });
class Canvas {
    constructor(opts = Canvas.Defaults()) {
        if (!opts.width)
            opts.width = window.innerWidth;
        if (!opts.height)
            opts.height = window.innerHeight;
        this.width = opts.width;
        this.height = opts.height;
        this.aspect = this.width / this.height;
        this.dpr = window.devicePixelRatio || 1;
        this.createCanvas();
        this.resize();
    }
    createCanvas() {
        this.element = document.createElement('canvas');
        document.body.appendChild(this.element);
    }
    resize() {
        const el = this.element;
        el.style.width = this.width + 'px';
        el.style.height = this.height + 'px';
        el.width = this.width * this.dpr;
        el.height = this.height * this.dpr;
    }
    static Defaults() {
        return {
            width: null,
            height: null
        };
    }
}



/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__obj_loader__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__texture_loader__ = __webpack_require__(57);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "OBJ", function() { return __WEBPACK_IMPORTED_MODULE_0__obj_loader__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TEX", function() { return __WEBPACK_IMPORTED_MODULE_1__texture_loader__["a"]; });





/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OBJ; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mesh_mesh__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mesh_vertex__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_assert_util__ = __webpack_require__(20);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



var OBJ;
(function (OBJ) {
    function Defaults() {
        return { finalize: true };
    }
    OBJ.Defaults = Defaults;
    function loadMesh(gl, url, opts) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!opts)
                opts = Defaults();
            let loader = new Promise((resolve, reject) => {
                let xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4) {
                        if (xhr.status == 200) {
                            resolve(xhr.responseText);
                        }
                        else {
                            reject(xhr);
                        }
                    }
                };
                xhr.open('GET', url);
                xhr.send();
            });
            return loader.then((data) => {
                return parseMesh(gl, data, opts);
            });
        });
    }
    OBJ.loadMesh = loadMesh;
    function parseMesh(gl, objectData, opts) {
        if (!opts)
            opts = Defaults();
        let lines = objectData.split('\n');
        let raw = {
            indices: [],
            vertices: [],
            normals: [],
            uvs: []
        };
        let packed = {
            indices: [],
            vertices: [],
            normals: [],
            uvs: []
        };
        let mesh = new __WEBPACK_IMPORTED_MODULE_0__mesh_mesh__["a" /* Mesh */](gl);
        let index = 0;
        for (const line of lines) {
            let isV = line.startsWith('v');
            let isVN = line.startsWith('vn');
            let isVT = line.startsWith('vt');
            let isF = line.startsWith('f');
            if (isV && !isVN && !isVT) {
                rawAppender('vertices', line.split(' '), 4, 'vertex data');
            }
            else if (isVN) {
                rawAppender('normals', line.split(' '), 4, 'vertex normal data');
            }
            else if (isVT) {
                rawAppender('uvs', line.split(' '), 3, 'uv data');
            }
            else if (isF) {
                let _indices = line.split(' ').map(inds => inds.split('/'));
                _indices.map((ind, i) => {
                    let msg = 'Face data were formatted incorrectly';
                    if (i == 0 && ind.length !== 1)
                        throw new Error(msg);
                    if (i > 0 && ind.length !== 3)
                        throw new Error(msg);
                });
                _indices.shift();
                let parsedIndices = _indices.map(ind => parseIndices(ind));
                packedAppender(parsedIndices, [0, 1, 2]);
                for (let i = 3; i < parsedIndices.length; ++i) {
                    packedAppender(parsedIndices, [i - 3, i - 1, i]);
                }
            }
        }
        mesh.setIndices(new Uint16Array(packed.indices));
        mesh.setTopology(__WEBPACK_IMPORTED_MODULE_1__mesh_vertex__["a" /* Topologies */].TRIANGLES);
        if (opts.finalize) {
            mesh.finalize();
        }
        return mesh;
        //
        //    helpers
        //
        function parseAndValidate(value, func, alias) {
            let res = func(value);
            if (isNaN(res))
                throw new Error(`Error parsing "${alias}": value was NaN.`);
            return res;
        }
        function rawAppender(name, values, N, alias) {
            __WEBPACK_IMPORTED_MODULE_2__util_assert_util__["assertNValues"](values, N, alias);
            for (let i = 1; i < N; i++) {
                raw[name].push(parseAndValidate(values[i], parseFloat, alias));
            }
        }
        function vertexAppender(vi, ni, ui) {
            let vertex = new __WEBPACK_IMPORTED_MODULE_1__mesh_vertex__["b" /* Vertex */]();
            let x = raw.vertices[(vi - 1) * 3 + 0];
            let y = raw.vertices[(vi - 1) * 3 + 1];
            let z = raw.vertices[(vi - 1) * 3 + 2];
            let nx = raw.normals[(ni - 1) * 3 + 0];
            let ny = raw.normals[(ni - 1) * 3 + 1];
            let nz = raw.normals[(ni - 1) * 3 + 2];
            vertex.setPosition(new Float32Array([x, y, z]));
            vertex.setNormal(new Float32Array([nx, ny, nz]));
            packed.indices.push(index++);
            if (ui === null) {
                vertex.setUV(new Float32Array([0, 0]));
                mesh.addVertex(vertex);
                return;
            }
            let u = raw.uvs[(ui - 1) * 2 + 0];
            let v = raw.uvs[(ui - 1) * 2 + 1];
            vertex.setUV(new Float32Array([u, v]));
            mesh.addVertex(vertex);
        }
        function packedAppender(inds, fragInds) {
            __WEBPACK_IMPORTED_MODULE_2__util_assert_util__["assertNValues"](fragInds, 3, 'triangles');
            for (let i = 0; i < 3; i++) {
                let ind = fragInds[i];
                vertexAppender(inds[ind][0], inds[ind][2], inds[ind][1]);
            }
        }
        function parseIndices(inds) {
            let vertIndex = parseAndValidate(inds[0], parseInt, 'vertex index');
            let normIndex = parseAndValidate(inds[2], parseInt, 'normal index');
            let uvIndex = null;
            if (inds[1] !== '')
                uvIndex = parseAndValidate(inds[1], parseInt, 'uv index');
            return [vertIndex, uvIndex, normIndex];
        }
    }
    OBJ.parseMesh = parseMesh;
})(OBJ || (OBJ = {}));


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TEX; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__texture_texture__ = __webpack_require__(8);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

var TEX;
(function (TEX) {
    function load2D(gl, url, opts) {
        return __awaiter(this, void 0, void 0, function* () {
            let loader = new Promise((resolve, reject) => {
                let img = document.createElement('img');
                img.onload = (e) => {
                    window.URL.revokeObjectURL(img.src);
                    resolve(img);
                };
                img.onerror = (e) => {
                    reject(e);
                };
                img.src = url;
            });
            return loader.then((data) => {
                return parse2D(gl, data, opts);
            });
        });
    }
    TEX.load2D = load2D;
    function parse2D(gl, data, opts) {
        return __WEBPACK_IMPORTED_MODULE_0__texture_texture__["a" /* Tex2D */](gl, data, opts);
    }
})(TEX || (TEX = {}));


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__input_xy__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keyboard__ = __webpack_require__(25);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Touch", function() { return __WEBPACK_IMPORTED_MODULE_0__input_xy__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DoubleTapDetector", function() { return __WEBPACK_IMPORTED_MODULE_0__input_xy__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Mouse", function() { return __WEBPACK_IMPORTED_MODULE_0__input_xy__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PointerLock", function() { return __WEBPACK_IMPORTED_MODULE_0__input_xy__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Keyboard", function() { return __WEBPACK_IMPORTED_MODULE_1__keyboard__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Keys", function() { return __WEBPACK_IMPORTED_MODULE_1__keyboard__["b"]; });





/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Orbit", function() { return Orbit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Movement", function() { return Movement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rotation", function() { return Rotation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__keyboard__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__input_xy__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_time_util__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_gl_matrix__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__math_wgl_math__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_util__ = __webpack_require__(0);






var Orbit;
(function (Orbit_1) {
    class Orbit2 {
        constructor(input, camera, opts) {
            this.input = input;
            this.camera = camera;
            this.timer = new __WEBPACK_IMPORTED_MODULE_2__util_time_util__["DeltaTimer"]();
            if (!opts)
                opts = Orbit2.Defaults();
            this.released = false;
            this.lastCoordinates = __WEBPACK_IMPORTED_MODULE_3_gl_matrix__["c" /* vec2 */].fromValues(0, 0);
            this.currentCoordinates = __WEBPACK_IMPORTED_MODULE_3_gl_matrix__["c" /* vec2 */].fromValues(0, 0);
            this.tmpCurrentCoordinates = __WEBPACK_IMPORTED_MODULE_3_gl_matrix__["c" /* vec2 */].fromValues(0, 0);
            this.velocity = __WEBPACK_IMPORTED_MODULE_3_gl_matrix__["c" /* vec2 */].fromValues(0, 0);
            this.totalVelocity = __WEBPACK_IMPORTED_MODULE_3_gl_matrix__["c" /* vec2 */].fromValues(0, 0);
            this.delta = __WEBPACK_IMPORTED_MODULE_3_gl_matrix__["c" /* vec2 */].fromValues(0, 0);
            this.dts = __WEBPACK_IMPORTED_MODULE_3_gl_matrix__["c" /* vec2 */].fromValues(0, 0);
            this.opts = opts;
            this.timer.setRatio(__WEBPACK_IMPORTED_MODULE_2__util_time_util__["ratios"].ms());
            this.setup();
        }
        update() {
            const input = this.input;
            const timer = this.timer;
            const camera = this.camera;
            const tmpCoords = this.tmpCurrentCoordinates;
            const coords = this.currentCoordinates;
            const lastCoords = this.lastCoordinates;
            const velocity = this.velocity;
            const totalVelocity = this.totalVelocity;
            const delta = this.delta;
            const dts = this.dts;
            const speedMultipler = this.opts.speed;
            const decaySens = this.opts.velocityDecaySensitivity;
            timer.update();
            tmpCoords.set(coords);
            __WEBPACK_IMPORTED_MODULE_3_gl_matrix__["c" /* vec2 */].subtract(delta, tmpCoords, lastCoords);
            const dt = timer.delta();
            dts[0] = dt;
            dts[1] = dt;
            if (dt > 0)
                __WEBPACK_IMPORTED_MODULE_3_gl_matrix__["c" /* vec2 */].divide(velocity, delta, dts);
            velocity[0] = __WEBPACK_IMPORTED_MODULE_2__util_time_util__["Ratio"].scale(timer.getRatio(), velocity[0]);
            velocity[1] = __WEBPACK_IMPORTED_MODULE_2__util_time_util__["Ratio"].scale(timer.getRatio(), velocity[1]);
            __WEBPACK_IMPORTED_MODULE_3_gl_matrix__["c" /* vec2 */].mul(velocity, velocity, [speedMultipler, speedMultipler]);
            __WEBPACK_IMPORTED_MODULE_3_gl_matrix__["c" /* vec2 */].add(totalVelocity, totalVelocity, velocity);
            let targetVelocity = this.opts.smooth ? totalVelocity : velocity;
            if (input.shouldInvert()) {
                camera.rotate(-targetVelocity[0], targetVelocity[1]);
            }
            else {
                camera.rotate(targetVelocity[0], -targetVelocity[1]);
            }
            lastCoords.set(tmpCoords);
            totalVelocity[0] /= decaySens;
            totalVelocity[1] /= decaySens;
            if (Math.abs(totalVelocity[0]) < 0.00001)
                totalVelocity[0] = 0;
            if (Math.abs(totalVelocity[1]) < 0.00001)
                totalVelocity[1] = 0;
        }
        setup() {
            const input = this.input;
            const self = this;
            input.start((evt) => {
                self.released = false;
                self.currentCoordinates = self.input.getPrimaryCoordinates(evt);
                self.lastCoordinates.set(self.currentCoordinates);
            });
            input.move((evt) => {
                evt.preventDefault();
                self.currentCoordinates = self.input.getPrimaryCoordinates(evt);
            });
            input.end((evt) => {
                self.released = true;
            });
        }
        static Defaults() {
            return {
                nVelocitySamples: 100,
                velocityDecaySensitivity: 1.2,
                maxVelocity: 4000,
                speed: 2,
                smooth: true
            };
        }
    }
    Orbit_1.Orbit2 = Orbit2;
    //
    //	regular
    //
    class _Orbit {
        constructor(input, timer, opts) {
            this.input = input;
            this.timer = timer;
            this.began = false;
            this.released = false;
            this.velocities = [];
            this.velocity = __WEBPACK_IMPORTED_MODULE_3_gl_matrix__["c" /* vec2 */].fromValues(0, 0);
            this.nVelocitySamples = opts.nVelocitySamples;
            this.velocityDecaySensitivity = opts.velocityDecaySensitivity;
            this.speed = opts.speed;
            this.maxVelocity = opts.maxVelocity;
            this.meanVelocity = __WEBPACK_IMPORTED_MODULE_3_gl_matrix__["c" /* vec2 */].fromValues(0, 0);
            this.coordinates = __WEBPACK_IMPORTED_MODULE_3_gl_matrix__["c" /* vec2 */].fromValues(0, 0);
            this.deltas = __WEBPACK_IMPORTED_MODULE_3_gl_matrix__["c" /* vec2 */].fromValues(0, 0);
            this.setup();
        }
        getMeanVelocity() {
            if (this.velocities.length > 0) {
                this.meanVelocity = __WEBPACK_IMPORTED_MODULE_4__math_wgl_math__["g" /* vecmean */](this.velocities);
            }
            else {
                this.meanVelocity = __WEBPACK_IMPORTED_MODULE_3_gl_matrix__["c" /* vec2 */].fromValues(0, 0);
            }
            return this.meanVelocity;
        }
        setup() {
            const input = this.input;
            const self = this;
            input.start((evt) => {
                if (self.began || !self.shouldBegin(evt))
                    return;
                let coords = self.getCoordinates(evt);
                self.coordinates[0] = coords[0];
                self.coordinates[1] = coords[1];
                self.timer.update();
                self.began = true;
                self.released = false;
                self.deltas[0] = 0;
                self.deltas[1] = 0;
                self.velocities = [];
            });
            input.move((evt) => {
                evt.preventDefault();
                self.timer.update();
                let currentCoordinates = self.getCoordinates(evt);
                self.deltas = __WEBPACK_IMPORTED_MODULE_3_gl_matrix__["c" /* vec2 */].subtract(self.deltas, currentCoordinates, self.coordinates);
                let deltaT = self.timer.delta();
                if (deltaT > 0) {
                    let velocity = __WEBPACK_IMPORTED_MODULE_3_gl_matrix__["c" /* vec2 */].copy(self.velocity, self.deltas);
                    __WEBPACK_IMPORTED_MODULE_3_gl_matrix__["c" /* vec2 */].divide(velocity, velocity, __WEBPACK_IMPORTED_MODULE_3_gl_matrix__["c" /* vec2 */].fromValues(deltaT, deltaT));
                    //	keep values in range [-Infinity, maxVelocity], preserving sign
                    __WEBPACK_IMPORTED_MODULE_4__math_wgl_math__["f" /* signedClamp */](velocity, -Infinity, self.maxVelocity);
                    if (self.velocities.length === self.nVelocitySamples)
                        self.velocities.shift();
                    self.velocities.push(velocity);
                }
                if (self.velocities.length > 0) {
                    self.meanVelocity = __WEBPACK_IMPORTED_MODULE_4__math_wgl_math__["g" /* vecmean */](self.velocities);
                }
                else {
                    self.meanVelocity = __WEBPACK_IMPORTED_MODULE_3_gl_matrix__["c" /* vec2 */].fromValues(0, 0);
                }
                self.coordinates = currentCoordinates;
            });
            input.end((evt) => {
                self.released = true;
                self.began = false;
            });
        }
        static Defaults() {
            return {
                nVelocitySamples: 100,
                velocityDecaySensitivity: 1.1,
                maxVelocity: 4000,
                speed: 4,
                smooth: true
            };
        }
    }
    class OrbitMouse extends _Orbit {
        getCoordinates(evt) {
            return __WEBPACK_IMPORTED_MODULE_3_gl_matrix__["c" /* vec2 */].fromValues(evt.clientX, evt.clientY);
        }
        shouldBegin(evt) {
            return true;
        }
        shouldInvert() {
            return false;
        }
    }
    class OrbitTouch extends _Orbit {
        getCoordinates(evt) {
            if (evt.touches.length === 0)
                throw new Error('Attempted to get coordinates when there were 0 touch-points.');
            let touch0 = evt.touches[0];
            return __WEBPACK_IMPORTED_MODULE_3_gl_matrix__["c" /* vec2 */].fromValues(touch0.clientX, touch0.clientY);
        }
        shouldBegin(evt) {
            return evt.touches.length === 1;
        }
        shouldInvert() {
            return true;
        }
    }
    class Orbit {
        constructor(input, camera, opts = _Orbit.Defaults()) {
            this.input = input;
            this.camera = camera;
            this.timer = new __WEBPACK_IMPORTED_MODULE_2__util_time_util__["DeltaTimer"]();
            if (input instanceof __WEBPACK_IMPORTED_MODULE_1__input_xy__["b" /* Mouse */]) {
                this.orbit = new OrbitMouse(input, this.timer, opts);
            }
            else if (input instanceof __WEBPACK_IMPORTED_MODULE_1__input_xy__["d" /* Touch */]) {
                this.orbit = new OrbitTouch(input, this.timer, opts);
            }
        }
        update() {
            const orbit = this.orbit;
            const deltas = orbit.deltas;
            const camera = this.camera;
            const ratio = this.timer.getRatio();
            const decaySens = this.orbit.velocityDecaySensitivity;
            if (!orbit.released) {
                if (orbit.shouldInvert()) {
                    camera.rotate(-deltas[0], deltas[1]);
                }
                else {
                    camera.rotate(deltas[0], -deltas[1]);
                }
                deltas[0] = 0;
                deltas[1] = 0;
            }
            else {
                let vel = orbit.meanVelocity;
                let xvel = (vel[0] * ratio.second) / ratio.first * orbit.speed;
                let yvel = (vel[1] * ratio.second) / ratio.first * orbit.speed;
                if (orbit.shouldInvert()) {
                    camera.rotate(-xvel, yvel);
                }
                else {
                    camera.rotate(xvel, -yvel);
                }
                vel[0] /= decaySens;
                vel[1] /= decaySens;
                if (Math.abs(vel[0]) < 0.00001)
                    vel[0] = 0;
                if (Math.abs(vel[1]) < 0.00001)
                    vel[1] = 0;
            }
        }
    }
    Orbit_1.Orbit = Orbit;
})(Orbit || (Orbit = {}));
var Movement;
(function (Movement) {
    class movement {
        constructor(input, camera, speed) {
            this.timer = new __WEBPACK_IMPORTED_MODULE_2__util_time_util__["DeltaTimer"]();
            this.input = input;
            this.camera = camera;
            this.speed = speed;
        }
    }
    Movement.movement = movement;
    class Keyboard extends movement {
        constructor(kb, camera, speed) {
            super(kb, camera, speed);
            this.Keys = {
                forwards: __WEBPACK_IMPORTED_MODULE_0__keyboard__["b" /* Keys */].W,
                backwards: __WEBPACK_IMPORTED_MODULE_0__keyboard__["b" /* Keys */].S,
                left: __WEBPACK_IMPORTED_MODULE_0__keyboard__["b" /* Keys */].A,
                right: __WEBPACK_IMPORTED_MODULE_0__keyboard__["b" /* Keys */].D
            };
        }
        update() {
            const timer = this.timer;
            timer.update();
            const input = this.input;
            const camera = this.camera;
            const keys = this.Keys;
            const speed = this.speed;
            const dt = timer.delta();
            Object.keys(keys).map(dir => {
                let keyN = Keyboard.get(keys, dir);
                if (input.isDown(keyN)) {
                    camera.move(dir, dt, speed);
                }
            });
        }
        static get(obj, name) {
            return obj[name];
        }
    }
    Movement.Keyboard = Keyboard;
    class Touch extends movement {
        constructor(touch, camera, speed) {
            super(touch, camera, speed);
            this.dist = 0;
            this.began = false;
            this.setup();
        }
        setup() {
            const touch = this.input;
            const self = this;
            const getDistance = (evt) => {
                let currX1 = evt.touches[0].clientX, currX2 = evt.touches[1].clientX, currY1 = evt.touches[0].clientY, currY2 = evt.touches[1].clientY;
                let pt1 = __WEBPACK_IMPORTED_MODULE_3_gl_matrix__["c" /* vec2 */].fromValues(currX1, currY1);
                let pt2 = __WEBPACK_IMPORTED_MODULE_3_gl_matrix__["c" /* vec2 */].fromValues(currX2, currY2);
                return __WEBPACK_IMPORTED_MODULE_4__math_wgl_math__["b" /* distance */](pt1, pt2);
            };
            touch.start(evt => {
                if (self.began || evt.touches.length !== 2)
                    return;
                self.began = true;
                self.dist = getDistance(evt);
                self.timer.update();
            });
            touch.move(evt => {
                evt.preventDefault();
                self.timer.update();
                if (evt.touches.length !== 2)
                    return;
                let currDist = getDistance(evt);
                let offDist = currDist - self.dist;
                let dt = self.timer.delta();
                let dir = offDist > 0 ? 'forwards' : 'backwards';
                self.camera.move(dir, dt, self.speed);
                self.dist = currDist;
            });
            touch.end(evt => {
                self.began = false;
            });
        }
        update() {
            this.timer.update();
        }
    }
    Movement.Touch = Touch;
})(Movement || (Movement = {}));
var Rotation;
(function (Rotation) {
    class Touch extends Movement.movement {
        constructor(touch, camera, speed) {
            super(touch, camera, speed);
            this.velocities = [];
            this.nVelocities = 100;
            this.didTap = false;
            this.tapDetector = new __WEBPACK_IMPORTED_MODULE_1__input_xy__["a" /* DoubleTapDetector */](touch);
            this.last = __WEBPACK_IMPORTED_MODULE_3_gl_matrix__["c" /* vec2 */].create();
            this.current = __WEBPACK_IMPORTED_MODULE_3_gl_matrix__["c" /* vec2 */].create();
            this.lastVel = __WEBPACK_IMPORTED_MODULE_3_gl_matrix__["c" /* vec2 */].create();
            this.setup();
        }
        update() {
            this.timer.update();
        }
        setup() {
            const touch = this.input;
            const self = this;
            const camera = this.camera;
            const detector = this.tapDetector;
            const reset = (evt) => {
                self.didTap = true;
                self.last[0] = evt.touches[0].clientX;
                self.last[1] = evt.touches[0].clientY;
                self.velocities = [];
            };
            // detector.doubletap(evt => {
            // 	reset(evt)
            // })
            // touch.start(evt => {
            // 	self.timer.update()
            // })
            touch.start(evt => {
                if (evt.touches.length !== 3)
                    return;
                reset(evt);
                self.timer.update();
            });
            touch.move(evt => {
                if (!self.didTap || evt.touches.length !== 3)
                    return;
                evt.preventDefault();
                evt.stopPropagation();
                self.timer.update();
                const clone = __WEBPACK_IMPORTED_MODULE_5__util_util__["common"].clone;
                let touch0 = evt.touches[0];
                let focusPoint = [0, 0, 0];
                let pos = clone(camera.position);
                let camFocus = __WEBPACK_IMPORTED_MODULE_3_gl_matrix__["d" /* vec3 */].subtract(__WEBPACK_IMPORTED_MODULE_3_gl_matrix__["d" /* vec3 */].create(), pos, focusPoint);
                let right = clone(camera.right);
                let up = clone(camera.up);
                let newPos = __WEBPACK_IMPORTED_MODULE_3_gl_matrix__["d" /* vec3 */].create();
                right = __WEBPACK_IMPORTED_MODULE_3_gl_matrix__["d" /* vec3 */].normalize(right, right);
                up = __WEBPACK_IMPORTED_MODULE_3_gl_matrix__["d" /* vec3 */].normalize(up, up);
                let deltaPos = __WEBPACK_IMPORTED_MODULE_3_gl_matrix__["c" /* vec2 */].fromValues(touch0.clientX, touch0.clientY);
                let dt = self.timer.delta();
                let vel = __WEBPACK_IMPORTED_MODULE_3_gl_matrix__["c" /* vec2 */].fromValues(0, 0);
                deltaPos = __WEBPACK_IMPORTED_MODULE_3_gl_matrix__["c" /* vec2 */].subtract(deltaPos, deltaPos, self.last);
                if (dt > 0) {
                    vel = __WEBPACK_IMPORTED_MODULE_3_gl_matrix__["c" /* vec2 */].divide(vel, deltaPos, __WEBPACK_IMPORTED_MODULE_3_gl_matrix__["c" /* vec2 */].fromValues(dt, dt));
                }
                else {
                    vel.set(this.lastVel);
                }
                let speed = __WEBPACK_IMPORTED_MODULE_3_gl_matrix__["c" /* vec2 */].copy(__WEBPACK_IMPORTED_MODULE_3_gl_matrix__["c" /* vec2 */].create(), vel);
                __WEBPACK_IMPORTED_MODULE_4__math_wgl_math__["a" /* abs */](speed);
                if (self.velocities.length > 0) {
                    speed = __WEBPACK_IMPORTED_MODULE_4__math_wgl_math__["g" /* vecmean */](self.velocities);
                }
                else {
                    speed[0] = vel[0];
                    speed[1] = vel[1];
                }
                let yaw = vel[0] * 0.002;
                let pitch = vel[1] * 0.002;
                // let yaw = speed[0] === 0 ? 0 : vel[0] / speed[0]
                // let pitch = speed[1] === 0 ? 0 : vel[1] / speed[1]
                let mat = new __WEBPACK_IMPORTED_MODULE_5__util_util__["matrix"].transform()
                    .rotate(__WEBPACK_IMPORTED_MODULE_4__math_wgl_math__["e" /* radians */](yaw), up)
                    .rotate(__WEBPACK_IMPORTED_MODULE_4__math_wgl_math__["e" /* radians */](pitch), right)
                    .mat();
                let camFocus4 = __WEBPACK_IMPORTED_MODULE_3_gl_matrix__["e" /* vec4 */].fromValues(camFocus[0], camFocus[1], camFocus[2], 1);
                __WEBPACK_IMPORTED_MODULE_3_gl_matrix__["e" /* vec4 */].transformMat4(camFocus4, camFocus4, mat);
                __WEBPACK_IMPORTED_MODULE_3_gl_matrix__["e" /* vec4 */].add(camFocus4, camFocus4, [focusPoint[0], focusPoint[1], focusPoint[2], 0]);
                newPos[0] = camFocus4[0];
                newPos[1] = camFocus4[1];
                newPos[2] = camFocus4[2];
                camera.setPosition(newPos);
                self.last[0] = touch0.clientX;
                self.last[1] = touch0.clientY;
                self.lastVel.set(vel);
                if (self.velocities.length === self.nVelocities)
                    self.velocities.shift();
                self.velocities.push(__WEBPACK_IMPORTED_MODULE_3_gl_matrix__["c" /* vec2 */].fromValues(speed[0], speed[1]));
            });
            touch.end(evt => {
                self.didTap = false;
            });
        }
    }
    Rotation.Touch = Touch;
})(Rotation || (Rotation = {}));


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__web_audio_analyser__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__web_audio_context__ = __webpack_require__(63);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__web_audio_analyser__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__web_audio_context__["a"]; });

// import { AudioContextManager } from './web-audio-context'




/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioAnalyser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(62);

class AudioAnalyser {
    constructor(context, opts = AudioAnalyser.Defaults()) {
        this.levels = [];
        this.wave = [];
        if (!context)
            throw new Error('Invalid or missing audio context.');
        this.context = context;
        this.opts = opts;
        this.setOptions();
    }
    setOptions() {
        if (!__WEBPACK_IMPORTED_MODULE_0__util__["a" /* Util */].isPow2(this.opts.levelsCount))
            throw new Error('levelsCount must be a power of 2.');
        this.levelsCount = this.opts.levelsCount;
    }
    setup() {
        const context = this.context;
        const analyser = context.createAnalyser();
        analyser.smoothingTimeConstant = 0.8;
        analyser.fftSize = 1024;
        analyser.connect(context.destination);
        const binCount = analyser.frequencyBinCount;
        this.levelsBins = Math.floor(binCount / this.levelsCount);
        if (binCount !== 512)
            throw new Error(`Expected bin count to be 512, was ${binCount}`);
        this.analyser = analyser;
        this.freqByteData = new Uint8Array(binCount);
        this.timeByteData = new Uint8Array(binCount);
        this.binCount = binCount;
    }
    update() {
        this.analyser.getByteFrequencyData(this.freqByteData);
        this.updateLevels();
        this.updateWave();
    }
    updateLevels() {
        const levelsCount = this.levelsCount;
        const levelsBins = this.levelsBins;
        const freqByteData = this.freqByteData;
        const levels = this.levels;
        for (let i = 0; i < levelsCount; i++) {
            let sum = 0;
            for (let j = 0; j < levelsBins; j++) {
                sum += freqByteData[(i * levelsBins) + j];
            }
            levels[i] = sum / levelsBins / 256;
            levels[i] *= 1 + (i / levelsCount) / 2;
        }
    }
    updateWave() {
        const wave = this.wave;
        const binCount = this.binCount;
        const analyser = this.analyser;
        const timeByteData = this.timeByteData;
        analyser.getByteTimeDomainData(timeByteData);
        for (let i = 0; i < binCount; i++) {
            wave[i] = ((timeByteData[i] - 128) / 128);
        }
    }
    getAnalyserNode() {
        return this.analyser;
    }
    getLevels() {
        return this.levels;
    }
    getWave() {
        return this.wave;
    }
    static Defaults() {
        return {
            levelsCount: 128
        };
    }
}



/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Util; });
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



/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioContextManager; });
class AudioContextManager {
    constructor() {
        this.sounds = {};
        let audioContext = window.AudioContext || window.webkitAudioContext || -1;
        if (audioContext === -1)
            throw new Error('Web audio is not supported on your platform.');
        this.context = new audioContext();
        this.sounds;
    }
    getContext() {
        return this.context;
    }
    loadSound(filename) {
        const context = this.context;
        const sounds = this.sounds;
        let loader = new Promise((resolve, reject) => {
            let request = new XMLHttpRequest(), fullfile = '/sounds/' + filename;
            request.open('GET', fullfile);
            request.responseType = 'arraybuffer';
            request.onload = () => {
                context.decodeAudioData(request.response, (buffer) => {
                    const sound = {
                        filename,
                        buffer,
                        isPlaying: false,
                        source: null,
                        startTime: null,
                        startAt: 0
                    };
                    resolve(sound);
                });
            };
            request.onerror = (err) => reject(err);
            request.send();
        });
        return loader.then((sound) => {
            sounds[sound.filename] = sound;
        });
    }
    loadSounds(names) {
        const self = this;
        return names.map((name) => { return self.loadSound(name); });
    }
    getSound(filename) {
        let sound = this.sounds[filename];
        if (sound === undefined)
            throw new Error(`Unrecognized sound ${filename}.`);
        return sound;
    }
    play(filename, to) {
        const context = this.context;
        const sounds = this.sounds;
        const self = this;
        return new Promise((resolve, reject) => {
            if (!to)
                to = context.destination;
            let sound = self.getSound(filename);
            if (sound.isPlaying)
                return;
            let source = context.createBufferSource();
            source.buffer = sound.buffer;
            source.connect(to);
            source.start(0, sound.startAt);
            sounds[filename].source = source;
            sounds[filename].isPlaying = true;
            sounds[filename].startTime = self.context.currentTime;
            resolve();
        });
    }
    togglePlay(filename, to) {
        const self = this;
        return new Promise((resolve, reject) => {
            let sound = self.getSound(filename);
            if (sound.isPlaying)
                return self.pause(filename);
            return self.play(filename, to);
        });
    }
    _pause(filename, reset) {
        const self = this;
        return new Promise((resolve, reject) => {
            let sound = self.getSound(filename);
            let source = sound.source;
            if (source === undefined) {
                throw new Error(`No source for sound ${filename}.`);
            }
            if (sound.isPlaying) {
                source.stop(0);
            }
            sound.isPlaying = false;
            if (reset) {
                sound.startAt = 0;
            }
            else {
                if (sound.startTime !== null) {
                    sound.startAt += (self.context.currentTime - sound.startTime);
                }
            }
            resolve();
        });
    }
    pause(filename) {
        return this._pause(filename, false);
    }
    stop(filename) {
        return this._pause(filename, true);
    }
}



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMThmYzdlNzk5YTIxODdkZGRmZjciLCJ3ZWJwYWNrOi8vLy4vZ2wvdXRpbC91dGlsLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nbC1tYXRyaXgvc3JjL2dsLW1hdHJpeC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2wtbWF0cml4L3NyYy9nbC1tYXRyaXgvY29tbW9uLmpzIiwid2VicGFjazovLy8uL2dsL21hdGgvd2dsLW1hdGgudHMiLCJ3ZWJwYWNrOi8vLy4vZ2wvc2hhZGVyL3NoYWRlci50cyIsIndlYnBhY2s6Ly8vLi9nbC9tZXNoL21lc2gudHMiLCJ3ZWJwYWNrOi8vLy4vZ2wvY29tbW9uL3Jlc291cmNlLnRzIiwid2VicGFjazovLy8uL2dsL21lc2gvdmVydGV4LnRzIiwid2VicGFjazovLy8uL2dsL3RleHR1cmUvdGV4dHVyZS50cyIsIndlYnBhY2s6Ly8vLi9nbC91dGlsL3R5cGUtdXRpbC50cyIsIndlYnBhY2s6Ly8vLi9nbC9tb2RlbC9tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvcm5nLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvbGliL2J5dGVzVG9VdWlkLmpzIiwid2VicGFjazovLy8uL2dsL21lc2gvbWVzaC1saWJyYXJ5LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nbC1tYXRyaXgvc3JjL2dsLW1hdHJpeC9tYXQzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nbC1tYXRyaXgvc3JjL2dsLW1hdHJpeC92ZWMzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nbC1tYXRyaXgvc3JjL2dsLW1hdHJpeC92ZWM0LmpzIiwid2VicGFjazovLy8uL2dsL21hdGVyaWFsL21hdGVyaWFsLnRzIiwid2VicGFjazovLy8uL2dsL3V0aWwvY29tbW9uLXV0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vZ2wvdXRpbC90aW1lLXV0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vZ2wvdXRpbC9hc3NlcnQtdXRpbC50cyIsIndlYnBhY2s6Ly8vLi9nbC9saWdodC9saWdodC50cyIsIndlYnBhY2s6Ly8vLi9nbC9zaGFkZXIvdW5pZm9ybXMudHMiLCJ3ZWJwYWNrOi8vLy4vZ2wvaW5wdXQvaW5wdXQteHkudHMiLCJ3ZWJwYWNrOi8vLy4vZ2wvY29tbW9uL2NhcGFiaWxpdGllcy50cyIsIndlYnBhY2s6Ly8vLi9nbC9pbnB1dC9rZXlib2FyZC50cyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9tYWluLnRzIiwid2VicGFjazovLy8uL2V4YW1wbGVzL2NvbnRyb2xzLXRlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vZ2wvd2ViLWdsLnRzIiwid2VicGFjazovLy8uL2dsL21lc2gvbWVzaC1mYWN0b3J5LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL3YxLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvdjQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsLW1hdHJpeC9zcmMvZ2wtbWF0cml4L21hdDIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsLW1hdHJpeC9zcmMvZ2wtbWF0cml4L21hdDJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nbC1tYXRyaXgvc3JjL2dsLW1hdHJpeC9tYXQ0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nbC1tYXRyaXgvc3JjL2dsLW1hdHJpeC9xdWF0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nbC1tYXRyaXgvc3JjL2dsLW1hdHJpeC92ZWMyLmpzIiwid2VicGFjazovLy8uL2dsL3V0aWwvdmVjdG9yLXV0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vZ2wvdXRpbC9tYXRyaXgtdXRpbC50cyIsIndlYnBhY2s6Ly8vLi9nbC91dGlsL2F0dHJpYnV0ZS11dGlsLnRzIiwid2VicGFjazovLy8uL2dsL3V0aWwvZGVmYXVsdC11dGlsLnRzIiwid2VicGFjazovLy8uL2dsL3NoYWRlci9zaGFkZXItbGlicmFyeS50cyIsIndlYnBhY2s6Ly8vLi9nbC9zaGFkZXJzL3NoYWRlci1iYXNpYy50cyIsIndlYnBhY2s6Ly8vLi9nbC9zaGFkZXJzL3NoYWRlci1wYnIxLnRzIiwid2VicGFjazovLy8uL2dsL3NoYWRlcnMvc2hhZGVyLXNreWJveC50cyIsIndlYnBhY2s6Ly8vLi9nbC9zaGFkZXIvc2hhZGVyLWZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vZ2wvY2FtZXJhL2NhbWVyYS50cyIsIndlYnBhY2s6Ly8vLi9nbC9zY2VuZS9zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9nbC9jb21tb24vZnJhbWUtc3RhdHMudHMiLCJ3ZWJwYWNrOi8vLy4vZ2wvcmVuZGVyZXJzL3JlbmRlcmVycy50cyIsIndlYnBhY2s6Ly8vLi9nbC9yZW5kZXJlcnMvZnVuY3Rpb25hbC1yZW5kZXJlci50cyIsIndlYnBhY2s6Ly8vLi9nbC9yZW5kZXJlcnMvYmFzZS1yZW5kZXJlci50cyIsIndlYnBhY2s6Ly8vLi9nbC9jb21tb24vY2FudmFzLnRzIiwid2VicGFjazovLy8uL2dsL2xvYWRlcnMvbG9hZGVycy50cyIsIndlYnBhY2s6Ly8vLi9nbC9sb2FkZXJzL29iai1sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vZ2wvbG9hZGVycy90ZXh0dXJlLWxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi9nbC9pbnB1dC9pbnB1dC50cyIsIndlYnBhY2s6Ly8vLi9nbC9pbnB1dC9jYW1lcmEtY29udHJvbHMudHMiLCJ3ZWJwYWNrOi8vLy4vYXVkL3dlYi1hdWRpby50cyIsIndlYnBhY2s6Ly8vLi9hdWQvd2ViLWF1ZGlvLWFuYWx5c2VyLnRzIiwid2VicGFjazovLy8uL2F1ZC91dGls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UUFDVixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1AsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNQLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDUixDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDUCxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNkLEVBQUUsSUFBSSxHQUFHLENBQUM7UUFDVixFQUFFLElBQUksR0FBRyxDQUFDO1FBQ1YsRUFBRSxJQUFJLEdBQUcsQ0FBQztJQUNYLENBQUM7SUFFRCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ1osR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNaLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDWixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ1gsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNaLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDWixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ1osR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNYLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDWixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ1osR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNiLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDWixHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxJQUFJLEdBQUcsRUFBRSxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDL0MsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxJQUFJLEdBQUcsRUFBRSxHQUFH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RyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLEdBQUcsRUFBRyxHQUFHLEVBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO1FBRTNCLENBQUMsR0FBRyxFQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUcsQ0FBQztRQUMxQixDQUFDLEdBQUcsRUFBSSxHQUFHLEVBQUcsR0FBRyxFQUFFLEdBQUcsRUFBRyxHQUFHO1FBQzNCLEdBQUcsRUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUcsSUFBSSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxHQUFHLEVBQUksR0FBRyxFQUFHLEdBQUcsRUFBRSxHQUFHLEVBQUcsR0FBRztRQUMzQixHQUFHLEVBQUksR0FBRyxFQUFHLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRztRQUMzQixHQUFHLEVBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDO1FBRTFCLENBQUMsR0FBRyxFQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBSyxHQUFHO1FBQzNCLEdBQUcsRUFBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRyxJQUFJLEVBQUUsR0FBRztRQUM3QixDQUFDLEdBQUcsRUFBRyxDQUFDLEdBQUcsRUFBRyxHQUFHLEVBQUUsQ0FBQyxFQUFLLENBQUM7UUFDMUIsQ0FBQyxHQUFHLEVBQUcsQ0FBQyxHQUFHLEVBQUcsR0FBRyxFQUFFLENBQUMsRUFBSyxDQUFDO1FBQ3pCLEdBQUcsRUFBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRztRQUMzQixHQUFHLEVBQUcsQ0FBQyxHQUFHLEVBQUcsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDO1FBRTFCLENBQUMsR0FBRyxFQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFHLElBQUksRUFBRSxHQUFHO1FBQzdCLENBQUMsR0FBRyxFQUFHLENBQUMsR0FBRyxFQUFHLEdBQUcsRUFBRyxJQUFJLEVBQUUsQ0FBQztRQUMzQixDQUFDLEdBQUcsRUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFHLEdBQUc7UUFDNUIsQ0FBQyxHQUFHLEVBQUcsQ0FBQyxHQUFHLEVBQUcsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDO1FBQzFCLENBQUMsR0FBRyxFQUFJLEdBQUcsRUFBRyxHQUFHLEVBQUUsR0FBRyxFQUFHLENBQUM7UUFDMUIsQ0FBQyxHQUFHLEVBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRyxHQUFHO1FBRTNCLEdBQUcsRUFBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUcsR0FBRztRQUMzQixHQUFHLEVBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFHLElBQUksRUFBRSxHQUFHO1FBQzVCLEdBQUcsRUFBRyxDQUFDLEdBQUcsRUFBRyxHQUFHLEVBQUcsR0FBRyxFQUFHLENBQUM7UUFDMUIsQ0FBQyxFQUFHLENBQUMsQ0FBQyxFQUFHLEdBQUcsRUFBRSxHQUFHLEVBQUcsQ0FBQztRQUNyQixDQUFDLEVBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHO1FBQ3JCLENBQUMsRUFBSSxDQUFDLEVBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDO0tBQ3ZCO0lBQ0QsT0FBTyxFQUFFLEVBQUU7Q0FDWDtBQUVhLGlCQUFLLEdBQW1CO0lBQ3JDLElBQUksRUFBRTtRQUNMLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7UUFDMUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7UUFDekMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO1FBQ3hDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztRQUN4QyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztRQUN6QyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO1FBQzFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztRQUN4QyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO1FBQ3ZDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO1FBQ3RDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO1FBQ3RDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7UUFDdkMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO1FBQ3hDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztRQUN4QyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztRQUN6QyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO1FBQzFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7UUFDMUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7UUFDekMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztRQUM3QyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7UUFDM0MsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHO1FBQzlDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRztRQUN4QyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztRQUM1QyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7UUFDM0MsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRztRQUMxQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRztRQUN6QyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUc7UUFDeEMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHO1FBQ3hDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHO1FBQ3pDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUc7UUFDMUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO1FBQ3hDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO1FBQzVDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxNQUFNO0FBQ2pCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsS0FBSztBQUNmLFVBQVUsS0FBSztBQUNmO0FBQ0EsWUFBWSxLQUFLO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLEtBQUs7QUFDZixVQUFVLEtBQUs7QUFDZjtBQUNBLFlBQVksS0FBSztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1dkJBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsYUFB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDamRBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlFQUF5QyxhQUFhOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksS0FBSztBQUNqQixZQUFZLEtBQUs7QUFDakIsWUFBWSxLQUFLO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLEtBQUs7QUFDakIsWUFBWSxLQUFLO0FBQ2pCLFlBQVksS0FBSztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFlBQVksS0FBSztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLE1BQU07QUFDakIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEI7QUFDQSxhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaHBEQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdB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O0FBQ2IsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUFBO0FBQUE7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQUE7QUFBQTs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2puQkQ7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsTUFBTTtBQUNqQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FB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QUcsRUFBRTtRQUM1QixJQUFJLFFBQVEsR0FBUyx1REFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztRQUNuRCxJQUFJLE1BQU0sR0FBRyx1REFBSSxDQUFDLE1BQU0sRUFBRTtRQUMxQixJQUFJLE1BQU0sR0FBRyx1REFBSSxDQUFDLE1BQU0sRUFBRTtRQUMxQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSztRQUN0QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSztRQUN0QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUTtRQUU1Qix1REFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDO1FBQ3hCLHVEQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUM7UUFFeEIsRUFBRSxDQUFDLENBQUMsU0FBUyxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDOUIsdURBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSx1REFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3RFLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDdEMsdURBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSx1REFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3RFLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDakMsdURBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSx1REFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3RFLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxD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QyxDQUFDO29CQUNQLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxDQUFDO2dCQUNELE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO2dCQUNiLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQ2QsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNQLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxZQUFZO2dCQUM1QixJQUFJLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSztnQkFDOUQsSUFBSSxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUs7Z0JBQzlELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQzFCLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO2dCQUMzQixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNQLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDO2dCQUMzQixDQUFDO2dCQUNELEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTO2dCQUNuQixHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUztnQkFDbkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUM7b0JBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0JBQzFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMs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SSxLQUFLLENBQUMsdUJBQXVCLFFBQVEsR0FBRyxDQUFDO1lBQ3BELENBQUM7WUFDRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDZixDQUFDO1lBQ0QsS0FBSyxDQUFDLFNBQVMsR0FBRyxLQUFLO1lBQ3ZCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDO1lBQ2xCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDUCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQzlCLEtBQUssQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO2dCQUM5RCxDQUFDO1lBQ0YsQ0FBQztZQUNELE9BQU8sRUFBRTtRQUNWLENBQUMsQ0FBQztJQUNILENBQUM7SUFFTSxLQUFLLENBQUMsUUFBZ0I7UUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQztJQUNwQyxDQUFDO0lBRU0sSUFBSSxDQUFDLFFBQWdCO1FBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7SUFDbkMsQ0FBQztDQUNEO0FBRTZCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDI2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxOGZjN2U3OTlhMjE4N2RkZGZmNyIsImltcG9ydCAqIGFzIHZlY3RvciBmcm9tICcuL3ZlY3Rvci11dGlsJ1xuaW1wb3J0ICogYXMgbWF0cml4IGZyb20gJy4vbWF0cml4LXV0aWwnXG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL3R5cGUtdXRpbCdcbmltcG9ydCAqIGFzIGF0dHJpYnV0ZSBmcm9tICcuL2F0dHJpYnV0ZS11dGlsJ1xuaW1wb3J0ICogYXMgY29tbW9uIGZyb20gJy4vY29tbW9uLXV0aWwnXG5pbXBvcnQgKiBhcyB0aW1lIGZyb20gJy4vdGltZS11dGlsJ1xuaW1wb3J0ICogYXMgYXNzZXJ0IGZyb20gJy4vYXNzZXJ0LXV0aWwnXG5pbXBvcnQgKiBhcyBkZWZhdWx0cyBmcm9tICcuL2RlZmF1bHQtdXRpbCdcblxuZXhwb3J0IHtcblx0YXNzZXJ0LFxuXHRkZWZhdWx0cyxcblx0dmVjdG9yLFxuXHRtYXRyaXgsXG5cdHR5cGVzLFxuXHRjb21tb24sXG5cdGF0dHJpYnV0ZSxcblx0dGltZVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2dsL3V0aWwvdXRpbC50cyIsIi8qKlxuICogQGZpbGVvdmVydmlldyBnbC1tYXRyaXggLSBIaWdoIHBlcmZvcm1hbmNlIG1hdHJpeCBhbmQgdmVjdG9yIG9wZXJhdGlvbnNcbiAqIEBhdXRob3IgQnJhbmRvbiBKb25lc1xuICogQGF1dGhvciBDb2xpbiBNYWNLZW56aWUgSVZcbiAqIEB2ZXJzaW9uIDIuNC4wXG4gKi9cblxuLyogQ29weXJpZ2h0IChjKSAyMDE1LCBCcmFuZG9uIEpvbmVzLCBDb2xpbiBNYWNLZW56aWUgSVYuXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cblRIRSBTT0ZUV0FSRS4gKi9cbi8vIEVORCBIRUFERVJcblxuaW1wb3J0ICogYXMgZ2xNYXRyaXggZnJvbSBcIi4vZ2wtbWF0cml4L2NvbW1vblwiO1xuaW1wb3J0ICogYXMgbWF0MiBmcm9tIFwiLi9nbC1tYXRyaXgvbWF0MlwiO1xuaW1wb3J0ICogYXMgbWF0MmQgZnJvbSBcIi4vZ2wtbWF0cml4L21hdDJkXCI7XG5pbXBvcnQgKiBhcyBtYXQzIGZyb20gXCIuL2dsLW1hdHJpeC9tYXQzXCI7XG5pbXBvcnQgKiBhcyBtYXQ0IGZyb20gXCIuL2dsLW1hdHJpeC9tYXQ0XCI7XG5pbXBvcnQgKiBhcyBxdWF0IGZyb20gXCIuL2dsLW1hdHJpeC9xdWF0XCI7XG5pbXBvcnQgKiBhcyB2ZWMyIGZyb20gXCIuL2dsLW1hdHJpeC92ZWMyXCI7XG5pbXBvcnQgKiBhcyB2ZWMzIGZyb20gXCIuL2dsLW1hdHJpeC92ZWMzXCI7XG5pbXBvcnQgKiBhcyB2ZWM0IGZyb20gXCIuL2dsLW1hdHJpeC92ZWM0XCI7XG5cbmV4cG9ydCB7XG4gIGdsTWF0cml4LFxuICBtYXQyLCBtYXQyZCwgbWF0MywgbWF0NCxcbiAgcXVhdCxcbiAgdmVjMiwgdmVjMywgdmVjNCxcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2wtbWF0cml4L3NyYy9nbC1tYXRyaXguanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQ29weXJpZ2h0IChjKSAyMDE1LCBCcmFuZG9uIEpvbmVzLCBDb2xpbiBNYWNLZW56aWUgSVYuXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cblRIRSBTT0ZUV0FSRS4gKi9cblxuLyoqXG4gKiBDb21tb24gdXRpbGl0aWVzXG4gKiBAbW9kdWxlIGdsTWF0cml4XG4gKi9cblxuLy8gQ29uZmlndXJhdGlvbiBDb25zdGFudHNcbmV4cG9ydCBjb25zdCBFUFNJTE9OID0gMC4wMDAwMDE7XG5leHBvcnQgbGV0IEFSUkFZX1RZUEUgPSAodHlwZW9mIEZsb2F0MzJBcnJheSAhPT0gJ3VuZGVmaW5lZCcpID8gRmxvYXQzMkFycmF5IDogQXJyYXk7XG5leHBvcnQgY29uc3QgUkFORE9NID0gTWF0aC5yYW5kb207XG5cbi8qKlxuICogU2V0cyB0aGUgdHlwZSBvZiBhcnJheSB1c2VkIHdoZW4gY3JlYXRpbmcgbmV3IHZlY3RvcnMgYW5kIG1hdHJpY2VzXG4gKlxuICogQHBhcmFtIHtUeXBlfSB0eXBlIEFycmF5IHR5cGUsIHN1Y2ggYXMgRmxvYXQzMkFycmF5IG9yIEFycmF5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRNYXRyaXhBcnJheVR5cGUodHlwZSkge1xuICBBUlJBWV9UWVBFID0gdHlwZTtcbn1cblxuY29uc3QgZGVncmVlID0gTWF0aC5QSSAvIDE4MDtcblxuLyoqXG4gKiBDb252ZXJ0IERlZ3JlZSBUbyBSYWRpYW5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gYSBBbmdsZSBpbiBEZWdyZWVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b1JhZGlhbihhKSB7XG4gIHJldHVybiBhICogZGVncmVlO1xufVxuXG4vKipcbiAqIFRlc3RzIHdoZXRoZXIgb3Igbm90IHRoZSBhcmd1bWVudHMgaGF2ZSBhcHByb3hpbWF0ZWx5IHRoZSBzYW1lIHZhbHVlLCB3aXRoaW4gYW4gYWJzb2x1dGVcbiAqIG9yIHJlbGF0aXZlIHRvbGVyYW5jZSBvZiBnbE1hdHJpeC5FUFNJTE9OIChhbiBhYnNvbHV0ZSB0b2xlcmFuY2UgaXMgdXNlZCBmb3IgdmFsdWVzIGxlc3NcbiAqIHRoYW4gb3IgZXF1YWwgdG8gMS4wLCBhbmQgYSByZWxhdGl2ZSB0b2xlcmFuY2UgaXMgdXNlZCBmb3IgbGFyZ2VyIHZhbHVlcylcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gYSBUaGUgZmlyc3QgbnVtYmVyIHRvIHRlc3QuXG4gKiBAcGFyYW0ge051bWJlcn0gYiBUaGUgc2Vjb25kIG51bWJlciB0byB0ZXN0LlxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIG51bWJlcnMgYXJlIGFwcHJveGltYXRlbHkgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVxdWFscyhhLCBiKSB7XG4gIHJldHVybiBNYXRoLmFicyhhIC0gYikgPD0gRVBTSUxPTipNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEpLCBNYXRoLmFicyhiKSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nbC1tYXRyaXgvc3JjL2dsLW1hdHJpeC9jb21tb24uanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgZ2xtIGZyb20gJ2dsLW1hdHJpeCdcbmltcG9ydCB7IHZlY3RvciwgdHlwZXMgfSBmcm9tICcuLi91dGlsL3V0aWwnXG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFtcDxUIGV4dGVuZHMgRmxvYXQzMkFycmF5Pih2YWw6IFQsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IHZvaWQge1xuXHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdmFsLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYgKHZhbFtpXSA8IG1pbikgdmFsW2ldID0gbWluXG5cdFx0aWYgKHZhbFtpXSA+IG1heCkgdmFsW2ldID0gbWF4XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25lZENsYW1wPFQgZXh0ZW5kcyBGbG9hdDMyQXJyYXk+KHZhbDogVCwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogdm9pZCB7XG5cdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB2YWwubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgX3ZhbCA9IHZhbFtpXVxuXHRcdGxldCBzaWduID0gX3ZhbCA8IDAgPyAtMSA6IDFcblx0XHRpZiAoTWF0aC5hYnMoX3ZhbCkgPCBtaW4pIHtcblx0XHRcdHZhbFtpXSA9IG1pbiAqIHNpZ25cblx0XHR9XG5cdFx0aWYgKE1hdGguYWJzKF92YWwpID4gbWF4KSB7XG5cdFx0XHR2YWxbaV0gPSBtYXggKiBzaWduXG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhYnM8VCBleHRlbmRzIEZsb2F0MzJBcnJheT4odmFsOiBUKTogdm9pZCB7XG5cdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB2YWwubGVuZ3RoOyBpKyspIHtcblx0XHR2YWxbaV0gPSBNYXRoLmFicyh2YWxbaV0pXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhZGlhbnModmFsOiBudW1iZXIpOiBudW1iZXIge1xuXHRyZXR1cm4gZ2xtLmdsTWF0cml4LnRvUmFkaWFuKHZhbClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlY3N1bTxUIGV4dGVuZHMgdHlwZXMudmVjdG9yPihhcnI6IEFycmF5PFQ+KTogVCB7XG5cdGlmIChhcnIubGVuZ3RoID09PSAwKVxuXHRcdHJldHVybiBudWxsXG5cdGxldCByZXM6IHR5cGVzLnZlY3RvclxuXHRpZiAoYXJyWzBdLmxlbmd0aCA9PT0gMikge1xuXHRcdHJlcyA9IGdsbS52ZWMyLmZyb21WYWx1ZXMoMCwgMClcblx0fSBlbHNlIGlmIChhcnJbMF0ubGVuZ3RoID09PSAzKSB7XG5cdFx0cmVzID0gZ2xtLnZlYzMuZnJvbVZhbHVlcygwLCAwLCAwKVxuXHR9XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG5cdFx0Zm9yIChsZXQgaiA9IDA7IGogPCByZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdHJlc1tqXSArPSBhcnJbaV1bal1cblx0XHR9XG5cdH1cblx0cmV0dXJuIDxUPnJlc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVjbWVhbjxUIGV4dGVuZHMgdHlwZXMudmVjdG9yPihhcnI6IEFycmF5PFQ+KTogVCB7XG5cdGxldCBzdW0gPSB2ZWNzdW0oYXJyKVxuXHRpZiAoc3VtID09PSBudWxsKVxuXHRcdHJldHVybiBudWxsXG5cdGxldCBtZWFuID0gc3VtXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgbWVhbi5sZW5ndGg7IGkrKykge1xuXHRcdG1lYW5baV0gLz0gYXJyLmxlbmd0aFxuXHR9XG5cdHJldHVybiA8VD5tZWFuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXN0YW5jZShhOiBnbG0udmVjMiwgYjogZ2xtLnZlYzIpOiBudW1iZXIge1xuXHRyZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KGJbMF0tYVswXSwgMikgKyBNYXRoLnBvdyhiWzFdLWFbMV0sIDIpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWF4KGFycjogQXJyYXk8bnVtYmVyPikge1xuXHRsZXQgbWF4ID0gLUluZmluaXR5XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYgKGFycltpXSA+IG1heCkgbWF4ID0gYXJyW2ldXG5cdH1cblx0cmV0dXJuIG1heFxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWluKGFycjogQXJyYXk8bnVtYmVyPikge1xuXHRsZXQgbWluID0gSW5maW5pdHlcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcblx0XHRpZiAoYXJyW2ldIDwgbWluKSBtaW4gPSBhcnJbaV1cblx0fVxuXHRyZXR1cm4gbWluXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BvdzIobjogbnVtYmVyKSB7XG5cdGlmIChuID09PSAwKVxuXHRcdHJldHVybiBmYWxzZVxuXHR3aGlsZSAobiAhPT0gMSkge1xuXHRcdGlmIChuICUgMiAhPT0gMClcblx0XHRcdHJldHVybiBmYWxzZVxuXHRcdG4gPSBuIC8gMlxuXHR9XG5cdHJldHVybiB0cnVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb29rQXQob3V0OiBnbG0ubWF0NCwgZXllOiBnbG0udmVjMywgY2VudGVyOiBnbG0udmVjMywgdXA6IGdsbS52ZWMzKTogZ2xtLm1hdDQge1xuXHRsZXQgeDAsIHgxLCB4MiwgeTAsIHkxLCB5MiwgejAsIHoxLCB6MiwgbGVuO1xuXHRsZXQgZXlleCA9IGV5ZVswXTtcblx0bGV0IGV5ZXkgPSBleWVbMV07XG5cdGxldCBleWV6ID0gZXllWzJdO1xuXHRsZXQgdXB4ID0gdXBbMF07XG5cdGxldCB1cHkgPSB1cFsxXTtcblx0bGV0IHVweiA9IHVwWzJdO1xuXHRsZXQgY2VudGVyeCA9IGNlbnRlclswXTtcblx0bGV0IGNlbnRlcnkgPSBjZW50ZXJbMV07XG5cdGxldCBjZW50ZXJ6ID0gY2VudGVyWzJdO1xuXG5cdGlmIChNYXRoLmFicyhleWV4IC0gY2VudGVyeCkgPCBnbG0uZ2xNYXRyaXguRVBTSUxPTiAmJlxuXHQgIFx0TWF0aC5hYnMoZXlleSAtIGNlbnRlcnkpIDwgZ2xtLmdsTWF0cml4LkVQU0lMT04gJiZcblx0ICBcdE1hdGguYWJzKGV5ZXogLSBjZW50ZXJ6KSA8IGdsbS5nbE1hdHJpeC5FUFNJTE9OKSB7XG5cdFx0cmV0dXJuIGdsbS5tYXQ0LmlkZW50aXR5KG91dClcblx0fVxuXG5cdHowID0gZXlleCAtIGNlbnRlcng7XG5cdHoxID0gZXlleSAtIGNlbnRlcnk7XG5cdHoyID0gZXlleiAtIGNlbnRlcno7XG5cblx0bGVuID0gMSAvIE1hdGguc3FydCh6MCAqIHowICsgejEgKiB6MSArIHoyICogejIpO1xuXHR6MCAqPSBsZW47XG5cdHoxICo9IGxlbjtcblx0ejIgKj0gbGVuO1xuXG5cdHgwID0gdXB5ICogejIgLSB1cHogKiB6MTtcblx0eDEgPSB1cHogKiB6MCAtIHVweCAqIHoyO1xuXHR4MiA9IHVweCAqIHoxIC0gdXB5ICogejA7XG5cdGxlbiA9IE1hdGguc3FydCh4MCAqIHgwICsgeDEgKiB4MSArIHgyICogeDIpO1xuXHRpZiAoIWxlbikge1xuXHR4MCA9IDA7XG5cdHgxID0gMDtcblx0eDIgPSAwO1xuXHR9IGVsc2Uge1xuXHRsZW4gPSAxIC8gbGVuO1xuXHR4MCAqPSBsZW47XG5cdHgxICo9IGxlbjtcblx0eDIgKj0gbGVuO1xuXHR9XG5cblx0eTAgPSB6MSAqIHgyIC0gejIgKiB4MTtcblx0eTEgPSB6MiAqIHgwIC0gejAgKiB4Mjtcblx0eTIgPSB6MCAqIHgxIC0gejEgKiB4MDtcblxuXHRsZW4gPSBNYXRoLnNxcnQoeTAgKiB5MCArIHkxICogeTEgKyB5MiAqIHkyKTtcblx0aWYgKCFsZW4pIHtcblx0XHR5MCA9IDA7XG5cdFx0eTEgPSAwO1xuXHRcdHkyID0gMDtcblx0fSBlbHNlIHtcblx0XHRsZW4gPSAxIC8gbGVuO1xuXHRcdHkwICo9IGxlbjtcblx0XHR5MSAqPSBsZW47XG5cdFx0eTIgKj0gbGVuO1xuXHR9XG5cblx0b3V0WzBdID0geDA7XG5cdG91dFsxXSA9IHkwO1xuXHRvdXRbMl0gPSB6MDtcblx0b3V0WzNdID0gMDtcblx0b3V0WzRdID0geDE7XG5cdG91dFs1XSA9IHkxO1xuXHRvdXRbNl0gPSB6MTtcblx0b3V0WzddID0gMDtcblx0b3V0WzhdID0geDI7XG5cdG91dFs5XSA9IHkyO1xuXHRvdXRbMTBdID0gejI7XG5cdG91dFsxMV0gPSAwO1xuXHRvdXRbMTJdID0gLSh4MCAqIGV5ZXggKyB4MSAqIGV5ZXkgKyB4MiAqIGV5ZXopO1xuXHRvdXRbMTNdID0gLSh5MCAqIGV5ZXggKyB5MSAqIGV5ZXkgKyB5MiAqIGV5ZXopO1xuXHRvdXRbMTRdID0gLSh6MCAqIGV5ZXggKyB6MSAqIGV5ZXkgKyB6MiAqIGV5ZXopO1xuXHRvdXRbMTVdID0gMTtcblxuXHRyZXR1cm4gb3V0O1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2dsL21hdGgvd2dsLW1hdGgudHMiLCJpbXBvcnQgeyBtYXQ0LCB2ZWMzIH0gZnJvbSAnZ2wtbWF0cml4J1xuaW1wb3J0IHsgUmVzb3VyY2UgfSBmcm9tICcuLi9jb21tb24vcmVzb3VyY2UnXG5pbXBvcnQgeyB2ZWN0b3IsIHR5cGVzIH0gZnJvbSAnLi4vdXRpbC91dGlsJ1xuaW1wb3J0IHsgVW5pZm9ybU5hbWVzLCBVbmlmb3JtTWFwIH0gZnJvbSAnLi91bmlmb3JtcydcbmltcG9ydCAqIGFzIHRleHR1cmUgZnJvbSAnLi4vdGV4dHVyZS90ZXh0dXJlJ1xuXG50eXBlIExvY2F0aW9uTWFwcGFibGUgPSB7XG5cdFtrZXk6IHN0cmluZ106IFdlYkdMVW5pZm9ybUxvY2F0aW9uXG59XG5cbmV4cG9ydCB0eXBlIFVuaWZvcm1TZXR0YWJsZSA9IG51bWJlciB8IGJvb2xlYW4gfCBtYXQ0IHwgdmVjMyB8IEFycmF5PG51bWJlcj4gfCB0ZXh0dXJlLlRleHR1cmVcblxuZW51bSBTaGFkZXJUeXBlcyB7XG5cdFZFUlRFWCxcblx0RlJBR01FTlRcbn1cblxudHlwZSBTaGFkZXJTb3VyY2UgPSB7XG5cdHNvdXJjZTogc3RyaW5nLFxuXHR0eXBlOiBTaGFkZXJUeXBlcyxcblx0dW5pZm9ybXM6IFVuaWZvcm1OYW1lc1tdXG59XG5cbnR5cGUgU2hhZGVyUHJvZ3JhbVNvdXJjZSA9IHtcblx0c291cmNlczogQXJyYXk8U2hhZGVyU291cmNlPlxufVxuXG50eXBlIFNoYWRlckF0dHJpYnV0ZSA9IHtcblx0bmFtZTogc3RyaW5nLFxuXHRsb2NhdGlvbjogbnVtYmVyXG59XG5cbnR5cGUgU2hhZGVyQXR0cmlidXRlS2luZHMgPSAncG9zaXRpb24nIHwgJ3V2JyB8ICdub3JtYWwnXG50eXBlIFNoYWRlckNvcmVVbmlmb3JtS2luZHMgPSAnbW9kZWwnIHwgJ3ZpZXcnIHwgJ3Byb2plY3Rpb24nIHwgJ2NhbWVyYV9wb3NpdGlvbidcblxuY2xhc3MgU2hhZGVyQXR0cmlidXRlcyB7XG5cblx0W2tleTogc3RyaW5nXTogU2hhZGVyQXR0cmlidXRlXG5cblx0cG9zaXRpb246IFNoYWRlckF0dHJpYnV0ZVxuXHR1djogU2hhZGVyQXR0cmlidXRlXG5cdG5vcm1hbDogU2hhZGVyQXR0cmlidXRlXG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5wb3NpdGlvbiA9IHtcblx0XHRcdG5hbWU6ICdpbl9wb3NpdGlvbicsXG5cdFx0XHRsb2NhdGlvbjogbnVsbFxuXHRcdH1cblx0XHR0aGlzLnV2ID0ge1xuXHRcdFx0bmFtZTogJ2luX3V2Jyxcblx0XHRcdGxvY2F0aW9uOiBudWxsXG5cdFx0fVxuXHRcdHRoaXMubm9ybWFsID0ge1xuXHRcdFx0bmFtZTogJ2luX25vcm1hbCcsXG5cdFx0XHRsb2NhdGlvbjogbnVsbFxuXHRcdH1cblx0fVxufVxuXG5jbGFzcyBTaGFkZXIgZXh0ZW5kcyBSZXNvdXJjZSB7XG5cblx0cHJpdmF0ZSBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0XG5cdHByaXZhdGUgc291cmNlOiBzdHJpbmdcblx0cHJpdmF0ZSB0eXBlOiBudW1iZXJcblx0cHJpdmF0ZSBzaGFkZXI/OiBXZWJHTFNoYWRlclxuXHRwcml2YXRlIHVuaWZvcm1zOiBVbmlmb3JtTWFwPGJvb2xlYW4+XG5cblx0cHVibGljIGlzVmFsaWQ6IGJvb2xlYW5cblxuXHRjb25zdHJ1Y3RvcihnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCBzcmM6IFNoYWRlclNvdXJjZSkge1xuXHRcdHN1cGVyKClcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnNvdXJjZSA9IHNyYy5zb3VyY2Vcblx0XHR0aGlzLnR5cGUgPSBTaGFkZXIuZ2V0U2hhZGVyVHlwZShnbCwgc3JjLnR5cGUpXG5cdFx0dGhpcy5pc1ZhbGlkID0gdHJ1ZVxuXHRcdHRoaXMudW5pZm9ybXMgPSBuZXcgVW5pZm9ybU1hcChzcmMudW5pZm9ybXMsIHRydWUpXG5cdFx0dGhpcy5zZXR1cCgpXG5cdH1cblxuXHRwdWJsaWMgZ2V0R0xTaGFkZXIoKTogV2ViR0xTaGFkZXIge1xuXHRcdHJldHVybiB0aGlzLnNoYWRlclxuXHR9XG5cblx0cHVibGljIGhhc1VuaWZvcm0obmFtZTogVW5pZm9ybU5hbWVzKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMudW5pZm9ybXMuaGFzVW5pZm9ybShuYW1lKVxuXHR9XG5cblx0cHJpdmF0ZSBzZXR1cCgpOiB2b2lkIHtcblx0XHRjb25zdCBnbCA9IHRoaXMuZ2xcblx0XHRsZXQgc2hhZGVyOiBXZWJHTFNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcih0aGlzLnR5cGUpXG5cdFx0Z2wuc2hhZGVyU291cmNlKHNoYWRlciwgdGhpcy5zb3VyY2UpXG5cdFx0Z2wuY29tcGlsZVNoYWRlcihzaGFkZXIpXG5cdFx0aWYgKCFnbC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUykpIHtcblx0XHRcdGxldCBtZXNzYWdlOiBzdHJpbmcgPSAnU2hhZGVyIGNvbXBpbGF0aW9uIGVycm9yOiAnICsgXG5cdFx0XHRcdGdsLmdldFNoYWRlckluZm9Mb2coc2hhZGVyKVxuXHRcdFx0Y29uc29sZS5lcnJvcihtZXNzYWdlKVxuXHRcdFx0Z2wuZGVsZXRlU2hhZGVyKHNoYWRlcilcblx0XHRcdHNoYWRlciA9IG51bGxcblx0XHRcdHRoaXMuaXNWYWxpZCA9IGZhbHNlXG5cdCAgXHR9XG5cdCAgXHR0aGlzLnNoYWRlciA9IHNoYWRlclxuXHR9XG5cblx0cHJpdmF0ZSBzdGF0aWMgZ2V0U2hhZGVyVHlwZShnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCB0eXBlOiBTaGFkZXJUeXBlcyk6IG51bWJlciB7XG5cdFx0aWYgKHR5cGUgPT0gU2hhZGVyVHlwZXMuRlJBR01FTlQpXG5cdFx0XHRyZXR1cm4gZ2wuRlJBR01FTlRfU0hBREVSXG5cdFx0aWYgKHR5cGUgPT0gU2hhZGVyVHlwZXMuVkVSVEVYKVxuXHRcdFx0cmV0dXJuIGdsLlZFUlRFWF9TSEFERVJcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ1VucmVjb2duaXplZCBzaGFkZXIgdHlwZS4nKVxuXHR9XG59XG5cbi8vXG4vL1x0cHJvZ3JhbVxuLy9cblxuY2xhc3MgU2hhZGVyUHJvZ3JhbSBleHRlbmRzIFJlc291cmNlIHtcblxuXHRwcml2YXRlIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHRcblx0cHJpdmF0ZSBzaGFkZXJzOiBBcnJheTxTaGFkZXI+XG5cdHByaXZhdGUgcHJvZ3JhbT86IFdlYkdMUHJvZ3JhbVxuXHRwcml2YXRlIGF0dHJpYnV0ZXM6IFNoYWRlckF0dHJpYnV0ZXNcblx0cHJpdmF0ZSBfaXNCb3VuZDogYm9vbGVhbiA9IGZhbHNlXG5cdHByaXZhdGUgdW5pZm9ybUxvY2F0aW9uczogTG9jYXRpb25NYXBwYWJsZSA9IHt9XG5cblx0cHVibGljIGlzVmFsaWQ6IGJvb2xlYW4gPSB0cnVlXG5cdHB1YmxpYyBpc0ZpbmFsaXplZDogYm9vbGVhbiA9IGZhbHNlXG5cblx0Y29uc3RydWN0b3IoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCkge1xuXHRcdHN1cGVyKClcblx0XHR0aGlzLmF0dHJpYnV0ZXMgPSBuZXcgU2hhZGVyQXR0cmlidXRlcygpXG5cdFx0dGhpcy5nbCA9IGdsXG5cdH1cblxuXHRwdWJsaWMgYXR0YWNoKHNoYWRlcnM6IEFycmF5PFNoYWRlcj4pIHtcblx0XHR0aGlzLmFzc2VydE5vdEZpbmFsaXplZCgnYXR0YWNoJylcblx0XHRmb3IgKGxldCBzaGFkZXIgb2Ygc2hhZGVycykge1xuXHRcdFx0aWYgKCFzaGFkZXIuaXNWYWxpZClcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdBdHRlbXB0ZWQgdG8gYXR0YWNoIGFuIGludmFsaWQgc2hhZGVyLicpXG5cdFx0fVxuXHRcdHRoaXMuc2hhZGVycyA9IHNoYWRlcnNcblx0XHR0aGlzLmZpbmFsaXplKClcblx0XHR0aGlzLmdldEF0dHJpYnV0ZUxvY2F0aW9ucygpXG5cdH1cblxuXHRwdWJsaWMgYmluZCgpOiB2b2lkIHtcblx0XHR0aGlzLmFzc2VydEZpbmFsaXplZCgnYmluZCcpXG5cdFx0dGhpcy5nbC51c2VQcm9ncmFtKHRoaXMucHJvZ3JhbSlcblx0XHR0aGlzLl9pc0JvdW5kID0gdHJ1ZVxuXHR9XG5cblx0cHVibGljIHVuYmluZCgpOiB2b2lkIHtcblx0XHR0aGlzLmFzc2VydEZpbmFsaXplZCgndW5iaW5kJylcblx0XHR0aGlzLmdsLnVzZVByb2dyYW0obnVsbClcblx0XHR0aGlzLl9pc0JvdW5kID0gZmFsc2Vcblx0fVxuXG5cdHB1YmxpYyBoYXNVbmlmb3JtKG5hbWU6IFVuaWZvcm1OYW1lcykge1xuXHRcdGZvciAobGV0IHNoYWRlciBvZiB0aGlzLnNoYWRlcnMpIHtcblx0XHRcdGlmIChzaGFkZXIuaGFzVW5pZm9ybShuYW1lKSlcblx0XHRcdFx0cmV0dXJuIHRydWVcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlXG5cdH1cblxuXHRwdWJsaWMgaXNCb3VuZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5faXNCb3VuZFxuXHR9XG5cblx0cHVibGljIHNldFVuaWZvcm0obmFtZTogc3RyaW5nLCB2YWx1ZTogVW5pZm9ybVNldHRhYmxlKSB7XG5cdFx0aWYgKHR5cGVvZih2YWx1ZSkgPT0gJ251bWJlcicpIHtcblx0XHRcdHRoaXMuc2V0ZihuYW1lLCB2YWx1ZSlcblxuXHRcdH0gZWxzZSBpZiAodHlwZW9mKHZhbHVlKSA9PSAnYm9vbGVhbicpIHtcblx0XHRcdHRoaXMuc2V0YihuYW1lLCB2YWx1ZSlcblxuXHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRcdHRoaXMuc2V0VmVjM2YobmFtZSwgdmFsdWUpXG5cblx0XHR9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgdGV4dHVyZS5UZXh0dXJlKSB7XG5cdFx0XHR0aGlzLnNldGkobmFtZSwgdmFsdWUuaW5kZXgpXG5cblx0XHR9IGVsc2UgaWYgKHR5cGVzLmlzTWF0NCh2YWx1ZSkpIHtcblx0XHRcdHRoaXMuc2V0TWF0NGYobmFtZSwgdmFsdWUpXG5cblx0XHR9IGVsc2UgaWYgKHR5cGVzLmlzVmVjMyh2YWx1ZSkpIHtcblx0XHRcdHRoaXMuc2V0VmVjM2YobmFtZSwgdmFsdWUpXG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBzZXRmKG5hbWU6IHN0cmluZywgdmFsdWU6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuZ2wudW5pZm9ybTFmKHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9uKG5hbWUpLCB2YWx1ZSlcblx0fVxuXG5cdHByaXZhdGUgc2V0YihuYW1lOiBzdHJpbmcsIHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5nbC51bmlmb3JtMWkodGhpcy5nZXRVbmlmb3JtTG9jYXRpb24obmFtZSksIHZhbHVlID8gMSA6IDApXG5cdH1cblxuXHRwcml2YXRlIHNldGkobmFtZTogc3RyaW5nLCB2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5nbC51bmlmb3JtMWkodGhpcy5nZXRVbmlmb3JtTG9jYXRpb24obmFtZSksIHZhbHVlKVxuXHR9XG5cblx0cHJpdmF0ZSBzZXRNYXQ0ZihuYW1lOiBzdHJpbmcsIHZhbHVlOiBtYXQ0KSB7XG5cdFx0dGhpcy5nbC51bmlmb3JtTWF0cml4NGZ2KHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9uKG5hbWUpLCBmYWxzZSwgdmFsdWUpXG5cdH1cblxuXHRwcml2YXRlIHNldFZlYzNmKG5hbWU6IHN0cmluZywgdmFsdWU6IHZlYzMgfCBBcnJheTxudW1iZXI+IHwgbnVtYmVyKSB7XG5cdFx0dmFsdWUgPSB2ZWN0b3IucmVxdWlyZVZlYzModmFsdWUpXG5cdFx0dGhpcy5nbC51bmlmb3JtM2Z2KHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9uKG5hbWUpLCB2YWx1ZSlcblx0fVxuXG5cdHByaXZhdGUgZmluYWxpemUoKTogdm9pZCB7XG5cdFx0dGhpcy5hc3NlcnROb3RGaW5hbGl6ZWQoJ2ZpbmFsaXplJylcblx0XHRjb25zdCBnbCA9IHRoaXMuZ2xcblx0XHRjb25zdCBzaGFkZXJzID0gdGhpcy5zaGFkZXJzXG5cdFx0bGV0IHByb2dyYW06IFdlYkdMUHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKVxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBzaGFkZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgc2hhZGVyc1tpXS5nZXRHTFNoYWRlcigpKVxuXHRcdH1cblx0XHRnbC5saW5rUHJvZ3JhbShwcm9ncmFtKVxuXHRcdGlmICghZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBnbC5MSU5LX1NUQVRVUykpIHtcblx0XHRcdGxldCBtZXNzYWdlOiBzdHJpbmcgPSAnU2hhZGVyIHByb2dyYW0gaW5pdGlhbGl6YXRpb24gZXJyb3I6ICcgKyBcblx0XHRcdFx0Z2wuZ2V0UHJvZ3JhbUluZm9Mb2cocHJvZ3JhbSlcbiAgICBcdFx0Y29uc29sZS5lcnJvcihtZXNzYWdlKVxuICAgIFx0XHRwcm9ncmFtID0gbnVsbFxuICAgIFx0XHR0aGlzLmlzVmFsaWQgPSBmYWxzZVxuICBcdFx0fVxuICBcdFx0dGhpcy5wcm9ncmFtID0gcHJvZ3JhbVxuICBcdFx0dGhpcy5pc0ZpbmFsaXplZCA9IHRydWVcblx0fVxuXG5cdHB1YmxpYyBnZXRBdHRyaWJ1dGVMb2NhdGlvbihraW5kOiBTaGFkZXJBdHRyaWJ1dGVLaW5kcyk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuYXR0cmlidXRlc1traW5kXS5sb2NhdGlvblxuXHR9XG5cblx0cHJpdmF0ZSBnZXRBdHRyaWJ1dGVMb2NhdGlvbnMoKTogdm9pZCB7XG5cdFx0bGV0IGF0dHJpYnV0ZXMgPSB0aGlzLmF0dHJpYnV0ZXNcblx0XHRjb25zdCBnbCA9IHRoaXMuZ2xcblx0XHRjb25zdCBwcm9ncmFtID0gdGhpcy5wcm9ncmFtXG5cdFx0Ly9cblx0XHQvL1x0QFRPRE86IEF2b2lkIHN0cmluZyBpbmRleGluZyBpbnRvIGF0dHJpYnV0ZXNcblx0XHQvL1xuXHRcdGxldCBhdHRyaWJOYW1lczogQXJyYXk8c3RyaW5nPiA9IE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpXG5cdFx0Zm9yIChsZXQgYXR0cmliIG9mIGF0dHJpYk5hbWVzKSB7XG5cdFx0XHRhdHRyaWJ1dGVzW2F0dHJpYl0ubG9jYXRpb24gPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCBhdHRyaWJ1dGVzW2F0dHJpYl0ubmFtZSlcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgZ2V0UHJvZ3JhbSgpOiBXZWJHTFByb2dyYW0ge1xuXHRcdHJldHVybiB0aGlzLnByb2dyYW1cblx0fVxuXG5cdHByaXZhdGUgZ2V0VW5pZm9ybUxvY2F0aW9uKG5hbWU6IHN0cmluZyk6IFdlYkdMVW5pZm9ybUxvY2F0aW9uIHtcblx0XHR0aGlzLmFzc2VydEZpbmFsaXplZCgndW5pZm9ybScpXG5cdFx0bGV0IGxvYzogV2ViR0xVbmlmb3JtTG9jYXRpb24gPSB0aGlzLnVuaWZvcm1Mb2NhdGlvbnNbbmFtZV1cblx0XHRpZiAobG9jID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGxvYyA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgbmFtZSlcblx0XHRcdGlmIChsb2MgPT0gbnVsbCkge1xuXHRcdFx0XHRjb25zb2xlLndhcm4oYFVucmVjb2duaXplZCB1bmlmb3JtIG5hbWUgXCIke25hbWV9XCIuYClcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMudW5pZm9ybUxvY2F0aW9uc1tuYW1lXSA9IGxvY1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gbG9jXG5cdH1cblxuXHRwcml2YXRlIGFzc2VydE5vdEZpbmFsaXplZChvcDogc3RyaW5nKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaXNGaW5hbGl6ZWQpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBjYWxsIG1ldGhvZCAvIG9wIFwiJHtvcH1cIiBhZnRlciBmaW5hbGl6aW5nIHRoZSBwcm9ncmFtLmApXG5cdH1cblxuXHRwcml2YXRlIGFzc2VydEZpbmFsaXplZChvcDogc3RyaW5nKTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLmlzRmluYWxpemVkKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgY2FsbCBtZXRob2QgLyBvcCBcIiR7b3B9XCIgYmVmb3JlIGZpbmFsaXppbmcgdGhlIHByb2dyYW0uYClcblx0fVxufVxuXG5leHBvcnQgeyBcblx0U2hhZGVyLCBcblx0U2hhZGVyUHJvZ3JhbSwgXG5cdFNoYWRlclNvdXJjZSwgXG5cdFNoYWRlclByb2dyYW1Tb3VyY2UsIFxuXHRTaGFkZXJUeXBlcyxcblx0U2hhZGVyQXR0cmlidXRlS2luZHMsXG5cdFNoYWRlckNvcmVVbmlmb3JtS2luZHNcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC9zaGFkZXIvc2hhZGVyLnRzIiwiaW1wb3J0IHsgVmVydGV4LCBUb3BvbG9naWVzIH0gZnJvbSAnLi92ZXJ0ZXgnXG5pbXBvcnQgeyBSZXNvdXJjZSB9IGZyb20gJy4uL2NvbW1vbi9yZXNvdXJjZSdcbmltcG9ydCB7IFNoYWRlclByb2dyYW0sIFNoYWRlckF0dHJpYnV0ZUtpbmRzIH0gZnJvbSAnLi4vc2hhZGVyL3NoYWRlcidcblxuY2xhc3MgTWVzaCBleHRlbmRzIFJlc291cmNlIHtcblxuXHRwcml2YXRlIHRvcG9sb2d5OiBudW1iZXJcblx0cHJpdmF0ZSBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0XG5cdHByaXZhdGUgdmJvOiBXZWJHTEJ1ZmZlclxuXHRwcml2YXRlIGVibzogV2ViR0xCdWZmZXJcblx0cHJpdmF0ZSBpc0ZpbmFsaXplZDogYm9vbGVhbiA9IGZhbHNlXG5cdHByaXZhdGUgX2lzQm91bmQ6IGJvb2xlYW4gPSBmYWxzZVxuXG5cdHByaXZhdGUgdmVydGljZXM6IEFycmF5PFZlcnRleD4gPSBbXVxuXHRwcml2YXRlIGluZGljZXM6IFVpbnQxNkFycmF5ID0gbmV3IFVpbnQxNkFycmF5KDApXG5cblx0Y29uc3RydWN0b3IoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCkge1xuXHRcdHN1cGVyKClcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnZibyA9IHRoaXMuZ2wuY3JlYXRlQnVmZmVyKClcblx0XHR0aGlzLmVibyA9IHRoaXMuZ2wuY3JlYXRlQnVmZmVyKClcblx0fVxuXG5cdHB1YmxpYyBhZGRWZXJ0ZXgodmVydGV4OiBWZXJ0ZXgpOiB2b2lkIHtcblx0XHR0aGlzLmFzc2VydE5vdEZpbmFsaXplZCgnYWRkVmVydGV4Jylcblx0XHRpZiAodGhpcy52ZXJ0aWNlcy5sZW5ndGggIT09IDApIHtcblx0XHRcdGlmICh2ZXJ0ZXguc2l6ZSgpICE9PSB0aGlzLnZlcnRpY2VzWzBdLnNpemUoKSlcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdBbGwgdmVydGljZXMgbXVzdCBoYXZlIGNvbnNpc3RlbnQgbnVtYmVycyBvZiBlbGVtZW50cy4nKVxuXHRcdH1cblx0XHR0aGlzLnZlcnRpY2VzLnB1c2godmVydGV4KVxuXHR9XG5cblx0cHVibGljIHNldEluZGljZXMoaW5kaWNlczogVWludDE2QXJyYXkpOiB2b2lkIHtcblx0XHR0aGlzLmFzc2VydE5vdEZpbmFsaXplZCgnc2V0SW5kaWNlcycpXG5cdFx0dGhpcy5pbmRpY2VzID0gaW5kaWNlc1xuXHR9XG5cblx0cHVibGljIHNldFRvcG9sb2d5KHRvcG9sb2d5OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmFzc2VydE5vdEZpbmFsaXplZCgnc2V0VG9wb2xvZ3knKVxuXHRcdHRoaXMudG9wb2xvZ3kgPSB0b3BvbG9neVxuXHR9XG5cblx0cHJpdmF0ZSBnZXREcmF3VHlwZSgpOiBudW1iZXIge1xuXHRcdGNvbnN0IGdsID0gdGhpcy5nbFxuXHRcdGlmICh0aGlzLnRvcG9sb2d5ID09PSBUb3BvbG9naWVzLlRSSUFOR0xFUykge1xuXHRcdFx0cmV0dXJuIGdsLlRSSUFOR0xFU1xuXHRcdH0gZWxzZSBpZiAodGhpcy50b3BvbG9neSA9PT0gVG9wb2xvZ2llcy5UUklBTkdMRV9TVFJJUCkge1xuXHRcdFx0cmV0dXJuIGdsLlRSSUFOR0xFX1NUUklQXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgVW5yZWNvZ25pemVkIHRvcG9sb2d5ICR7dGhpcy50b3BvbG9neX1gKVxuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBkcmF3KCk6IHZvaWQge1xuXHRcdHRoaXMuYXNzZXJ0RmluYWxpemVkKCdkcmF3Jylcblx0XHRjb25zdCBnbCA9IHRoaXMuZ2xcblx0XHRsZXQgbkluZGljZXM6IG51bWJlciA9IHRoaXMuaW5kaWNlcy5sZW5ndGhcblx0XHRsZXQgdXNlSW5kaWNlczogYm9vbGVhbiA9IG5JbmRpY2VzID4gMFxuXHRcdGxldCBuVmVydGljZXM6IG51bWJlciA9IHRoaXMudmVydGljZXMubGVuZ3RoXG5cdFx0bGV0IGRyYXdUeXBlOiBudW1iZXIgPSB0aGlzLmdldERyYXdUeXBlKClcblx0XHRpZiAodXNlSW5kaWNlcykge1xuXHRcdFx0Z2wuZHJhd0VsZW1lbnRzKGRyYXdUeXBlLCBuSW5kaWNlcywgZ2wuVU5TSUdORURfU0hPUlQsIDApXG5cdFx0fSBlbHNlIHtcblx0XHRcdGdsLmRyYXdBcnJheXMoZHJhd1R5cGUsIDAsIG5WZXJ0aWNlcylcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgZmluYWxpemUoKTogdm9pZCB7XG5cdFx0dGhpcy5hc3NlcnROb3RGaW5hbGl6ZWQoJ2ZpbmFsaXplJylcblx0XHRpZiAodGhpcy52ZXJ0aWNlcy5sZW5ndGggPT09IDApXG5cdFx0XHRyZXR1cm5cblx0XHR0aGlzLnN0b3JlQnVmZmVyRGF0YSgpXG5cdFx0dGhpcy5pc0ZpbmFsaXplZCA9IHRydWVcblx0fVxuXG5cdHB1YmxpYyBpc0JvdW5kKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLl9pc0JvdW5kXG5cdH1cblxuXHRwdWJsaWMgYmluZChwcm9ncmFtOiBTaGFkZXJQcm9ncmFtKTogdm9pZCB7XG5cdFx0dGhpcy5hc3NlcnRGaW5hbGl6ZWQoJ2JpbmQnKVxuXHRcdGlmICh0aGlzLnZlcnRpY2VzLmxlbmd0aCA9PT0gMClcblx0XHRcdHJldHVyblxuXG5cdFx0Y29uc3QgZ2wgPSB0aGlzLmdsXG5cdFx0bGV0IHZlcnQwID0gdGhpcy52ZXJ0aWNlc1swXVxuXHRcdGxldCBzdHJpZGU6IG51bWJlciA9IHZlcnQwLnNpemUoKVxuXHRcdGxldCBieXRlczogbnVtYmVyID0gdmVydDAuYnl0ZXNQZXJFbGVtZW50KClcblx0XHRsZXQgb2Zmc2V0OiBudW1iZXIgPSAwXG5cdFx0bGV0IG5JbmRpY2VzOiBudW1iZXIgPSB0aGlzLmluZGljZXMubGVuZ3RoXG5cdFx0bGV0IGF0dHJpYjogbnVtYmVyID0gMFxuXG5cdFx0Z2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMudmJvKVxuXG5cdFx0Ly9cdHBvc2l0aW9uXG5cdFx0bGV0IHBvc0xvYzogbnVtYmVyID0gcHJvZ3JhbS5nZXRBdHRyaWJ1dGVMb2NhdGlvbigncG9zaXRpb24nKVxuXHRcdGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHBvc0xvYylcblx0XHRnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHBvc0xvYywgMywgZ2wuRkxPQVQsIGZhbHNlLCBzdHJpZGUqYnl0ZXMsIG9mZnNldCpieXRlcylcblx0XHRvZmZzZXQgKz0gM1xuXG5cdFx0Ly9cdHV2XG5cdFx0aWYgKHZlcnQwLnNpemVVVigpID4gMCkge1xuXHRcdFx0bGV0IHV2TG9jOiBudW1iZXIgPSBwcm9ncmFtLmdldEF0dHJpYnV0ZUxvY2F0aW9uKCd1dicpXG5cdFx0XHRnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh1dkxvYylcblx0XHRcdGdsLnZlcnRleEF0dHJpYlBvaW50ZXIodXZMb2MsIDIsIGdsLkZMT0FULCBmYWxzZSwgc3RyaWRlKmJ5dGVzLCBvZmZzZXQqYnl0ZXMpXG5cdFx0XHRvZmZzZXQgKz0gMlxuXHRcdH1cblxuXHRcdC8vXHRub3JtYWxzXG5cdFx0aWYgKHZlcnQwLnNpemVOb3JtYWwoKSA+IDApIHtcblx0XHRcdGxldCBub3JtTG9jOiBudW1iZXIgPSBwcm9ncmFtLmdldEF0dHJpYnV0ZUxvY2F0aW9uKCdub3JtYWwnKVxuXHRcdFx0Z2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkobm9ybUxvYylcblx0XHRcdGdsLnZlcnRleEF0dHJpYlBvaW50ZXIobm9ybUxvYywgMywgZ2wuRkxPQVQsIGZhbHNlLCBzdHJpZGUqYnl0ZXMsIG9mZnNldCpieXRlcylcblx0XHRcdG9mZnNldCArPSAzXG5cdFx0fVxuXG5cdFx0Ly9cdGluZGljZXNcblx0XHRpZiAobkluZGljZXMgPiAwKSB7XG5cdFx0XHRnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCB0aGlzLmVibylcblx0XHR9XG5cblx0XHR0aGlzLl9pc0JvdW5kID0gdHJ1ZVxuXHR9XG5cblx0cHVibGljIHVuYmluZCgpOiB2b2lkIHtcblx0XHRjb25zdCBnbCA9IHRoaXMuZ2xcblx0XHRjb25zdCBpbmRpY2VzID0gdGhpcy5pbmRpY2VzXG5cdFx0Z2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIG51bGwpXG5cdFx0aWYgKGluZGljZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0Z2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgbnVsbClcblx0XHR9XG5cdFx0dGhpcy5faXNCb3VuZCA9IGZhbHNlXG5cdH1cblxuXHRwdWJsaWMgZGlzcG9zZSgpOiB2b2lkIHtcblx0XHRpZiAoIXRoaXMuaXNGaW5hbGl6ZWQpXG5cdFx0XHRyZXR1cm5cblx0XHRjb25zdCBnbCA9IHRoaXMuZ2xcblx0XHRnbC5kZWxldGVCdWZmZXIodGhpcy52Ym8pXG5cdFx0Z2wuZGVsZXRlQnVmZmVyKHRoaXMuZWJvKVxuXHR9XG5cblx0cHJpdmF0ZSBzdG9yZUJ1ZmZlckRhdGEoKTogdm9pZCB7XG5cdFx0Y29uc3QgZ2wgPSB0aGlzLmdsXG5cdFx0bGV0IGRhdGE6IEZsb2F0MzJBcnJheSA9IHRoaXMuZ2V0SW50ZXJsZWF2ZWREYXRhKClcblx0XHRsZXQgbkluZGljZXM6IG51bWJlciA9IHRoaXMuaW5kaWNlcy5sZW5ndGhcblxuXHRcdC8vXHR2Ym9cblx0XHRnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy52Ym8pXG5cdFx0Z2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIGRhdGEsIGdsLlNUQVRJQ19EUkFXKVxuXG5cdFx0Ly9cdGVib1xuXHRcdGlmIChuSW5kaWNlcyA+IDApIHtcblx0XHRcdGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIHRoaXMuZWJvKVxuXHRcdFx0Z2wuYnVmZmVyRGF0YShnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy5pbmRpY2VzLCBnbC5TVEFUSUNfRFJBVylcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGdldEludGVybGVhdmVkRGF0YSgpOiBGbG9hdDMyQXJyYXkge1xuXHRcdGNvbnN0IHZlcnRpY2VzID0gdGhpcy52ZXJ0aWNlc1xuXHRcdGxldCBuVmVydGljZXMgPSB2ZXJ0aWNlcy5sZW5ndGhcblx0XHRpZiAoblZlcnRpY2VzID09IDApXG5cdFx0XHRyZXR1cm4gbmV3IEZsb2F0MzJBcnJheSgwKVxuXHRcdGxldCB0b3RhbFNpemU6IG51bWJlciA9IG5WZXJ0aWNlcyAqIHZlcnRpY2VzWzBdLnNpemUoKVxuXHRcdGxldCBhbGxEYXRhOiBGbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsU2l6ZSlcblx0XHRsZXQgYWxsRGF0YUluZGV4OiBudW1iZXIgPSAwXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG5WZXJ0aWNlczsgaSsrKSB7XG5cdFx0XHRsZXQgZGF0YTogRmxvYXQzMkFycmF5ID0gdmVydGljZXNbaV0uZ2V0SW50ZXJsZWF2ZWREYXRhKClcblx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCBkYXRhLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGFsbERhdGFbYWxsRGF0YUluZGV4XSA9IGRhdGFbal1cblx0XHRcdFx0YWxsRGF0YUluZGV4Kytcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGFsbERhdGFcblx0fVxuXG5cdHByaXZhdGUgYXNzZXJ0Tm90RmluYWxpemVkKG9wPzogc3RyaW5nKTogdm9pZCB7XG5cdFx0aWYgKCFvcClcblx0XHRcdG9wID0gJyh1bnNwZWNpZmllZCknXG5cdFx0aWYgKHRoaXMuaXNGaW5hbGl6ZWQpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYE1ldGhvZCAvIG9wZXJhdGlvbiBcIiR7b3B9XCIgd2FzIGNhbGxlZCBhZnRlciBmaW5hbGl6aW5nIG1lc2guYClcblx0fVxuXG5cdHByaXZhdGUgYXNzZXJ0RmluYWxpemVkKG9wOiBzdHJpbmcgPSAnKHVuc3BlY2lmaWVkKScpOiB2b2lkIHtcblx0XHRpZiAoIXRoaXMuaXNGaW5hbGl6ZWQpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYE1ldGhvZCAvIG9wZXJhdGlvbiBcIiR7b3B9XCIgd2FzIGNhbGxlZCBiZWZvcmUgZmluYWxpemluZyBtZXNoLmApXHRcblx0fVxufVxuXG5leHBvcnQgeyBNZXNoIH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC9tZXNoL21lc2gudHMiLCJpbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnXG5cbmNsYXNzIFJlc291cmNlIHtcblxuXHRwdWJsaWMgdXVpZDogc3RyaW5nXG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy51dWlkID0gdjQoKVxuXHR9XG5cblx0cHVibGljIHN0YXRpYyBlcXVhbHMoYTogUmVzb3VyY2UsIGI6IFJlc291cmNlKTogYm9vbGVhbiB7XG5cdFx0aWYgKGEgPT09IG51bGwgfHwgYiA9PT0gbnVsbClcblx0XHRcdHJldHVybiBmYWxzZVxuXHRcdHJldHVybiBhLnV1aWQgPT09IGIudXVpZFxuXHR9XG5cblx0cHVibGljIHN0YXRpYyBjb21wYXJlVVVJRChhOiBSZXNvdXJjZSwgYjogUmVzb3VyY2UpOiBudW1iZXIge1xuXHRcdGlmIChhLnV1aWQgPT09IGIudXVpZClcblx0XHRcdHJldHVybiAwXG5cdFx0cmV0dXJuIDFcblx0fVxuXG59XG5cbmV4cG9ydCB7IFJlc291cmNlIH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC9jb21tb24vcmVzb3VyY2UudHMiLCJjbGFzcyBWZXJ0ZXgge1xuXG5cdHByaXZhdGUgcG9zaXRpb246IEZsb2F0MzJBcnJheVxuXHRwcml2YXRlIHV2OiBGbG9hdDMyQXJyYXlcblx0cHJpdmF0ZSBub3JtYWw6IEZsb2F0MzJBcnJheVxuXHRwcml2YXRlIHBvc2l0aW9uQ291bnQ6IG51bWJlciA9IDBcblx0cHJpdmF0ZSB1dkNvdW50OiBudW1iZXIgPSAwXG5cdHByaXZhdGUgbm9ybWFsQ291bnQ6IG51bWJlciA9IDBcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLnBvc2l0aW9uID0gbmV3IEZsb2F0MzJBcnJheSgzKVxuXHRcdHRoaXMudXYgPSBuZXcgRmxvYXQzMkFycmF5KDIpXG5cdFx0dGhpcy5ub3JtYWwgPSBuZXcgRmxvYXQzMkFycmF5KDMpXG5cdH1cblxuXHRwdWJsaWMgc2V0UG9zaXRpb24ocG9zOiBGbG9hdDMyQXJyYXkpOiB2b2lkIHtcblx0XHR0aGlzLmFzc2VydFZhbGlkQXJyYXlTaXplKHBvcywgMywgJ3Bvc2l0aW9uJylcblx0XHR0aGlzLnBvc2l0aW9uID0gcG9zXG5cdFx0dGhpcy5wb3NpdGlvbkNvdW50ID0gM1xuXHR9XG5cblx0cHVibGljIHNldFVWKHV2OiBGbG9hdDMyQXJyYXkpOiB2b2lkIHtcblx0XHR0aGlzLmFzc2VydFZhbGlkQXJyYXlTaXplKHV2LCAyLCAndXYnKVxuXHRcdHRoaXMudXYgPSB1dlxuXHRcdHRoaXMudXZDb3VudCA9IDJcblx0fVxuXG5cdHB1YmxpYyBzZXROb3JtYWwobm9ybTogRmxvYXQzMkFycmF5KTogdm9pZCB7XG5cdFx0dGhpcy5hc3NlcnRWYWxpZEFycmF5U2l6ZShub3JtLCAzLCAnbm9ybWFscycpXG5cdFx0dGhpcy5ub3JtYWwgPSBub3JtXG5cdFx0dGhpcy5ub3JtYWxDb3VudCA9IDNcblx0fVxuXG5cdHB1YmxpYyBzaXplUG9zaXRpb24oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5wb3NpdGlvbkNvdW50XG5cdH1cblxuXHRwdWJsaWMgc2l6ZVVWKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMudXZDb3VudFxuXHR9XG5cblx0cHVibGljIHNpemVOb3JtYWwoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5ub3JtYWxDb3VudFxuXHR9XG5cblx0cHVibGljIHNpemUoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5zaXplUG9zaXRpb24oKSArIHRoaXMuc2l6ZU5vcm1hbCgpICsgdGhpcy5zaXplVVYoKVxuXHR9XG5cblx0cHVibGljIGJ5dGVzUGVyRWxlbWVudCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnBvc2l0aW9uLkJZVEVTX1BFUl9FTEVNRU5UXG5cdH1cblxuXHRwdWJsaWMgZ2V0SW50ZXJsZWF2ZWREYXRhKCk6IEZsb2F0MzJBcnJheSB7XG5cdFx0bGV0IGRhdGE6IEZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5zaXplKCkpXG5cdFx0bGV0IGk6IG51bWJlciA9IDBcblx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgdGhpcy5wb3NpdGlvbkNvdW50OyBqKyspIHtcblx0XHRcdGRhdGFbaV0gPSB0aGlzLnBvc2l0aW9uW2pdXG5cdFx0XHRpKytcblx0XHR9XG5cdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IHRoaXMudXZDb3VudDsgaisrKSB7XG5cdFx0XHRkYXRhW2ldID0gdGhpcy51dltqXVxuXHRcdFx0aSsrXG5cdFx0fVxuXHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCB0aGlzLm5vcm1hbENvdW50OyBqKyspIHtcblx0XHRcdGRhdGFbaV0gPSB0aGlzLm5vcm1hbFtqXVxuXHRcdFx0aSsrXG5cdFx0fVxuXHRcdHJldHVybiBkYXRhXG5cdH1cblxuXHRwcml2YXRlIGFzc2VydFZhbGlkQXJyYXlTaXplKGFycjogRmxvYXQzMkFycmF5LCBzaXplOiBudW1iZXIsIHR5cGU/OiBzdHJpbmcpIHtcblx0XHRpZiAoIXR5cGUpXG5cdFx0XHR0eXBlID0gJyh1bnNwZWNpZmllZCknXG5cdFx0aWYgKGFyci5sZW5ndGggIT09IHNpemUpIHtcblx0XHRcdGxldCBtZXNzYWdlOiBzdHJpbmcgPSBgRXhwZWN0ZWQgYXR0cmlidXRlIG9mIHR5cGUgXCIke3R5cGV9XCIgdG8gYmUgb2Ygc2l6ZSAke3NpemV9O1xuXHRcdFx0XHRpbnN0ZWFkIHdhcyAke2Fyci5sZW5ndGh9YFxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG5cdFx0fVxuXG5cdH1cbn1cblxuY2xhc3MgVG9wb2xvZ2llcyB7XG5cdHB1YmxpYyBzdGF0aWMgVFJJQU5HTEVTOiBudW1iZXIgPSAwXG5cdHB1YmxpYyBzdGF0aWMgVFJJQU5HTEVfU1RSSVA6IG51bWJlciA9IDFcbn1cblxuZXhwb3J0IHsgVmVydGV4LCBUb3BvbG9naWVzIH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC9tZXNoL3ZlcnRleC50cyIsImltcG9ydCAqIGFzIGRlZmF1bHRzIGZyb20gJy4uL3V0aWwvZGVmYXVsdC11dGlsJ1xuaW1wb3J0ICogYXMgbWF0aCBmcm9tICcuLi9tYXRoL3dnbC1tYXRoJ1xuaW1wb3J0IHsgUmVzb3VyY2UgfSBmcm9tICcuLi9jb21tb24vcmVzb3VyY2UnXG5cbmV4cG9ydCB0eXBlIERhdGFUeXBlcyA9IEhUTUxJbWFnZUVsZW1lbnQgfCBVaW50OEFycmF5IHwgbnVsbFxuXG5leHBvcnQgY2xhc3MgVGV4dHVyZU9wdHMge1xuXHRsZXZlbDogbnVtYmVyXG5cdHdpZHRoOiBudW1iZXJcblx0aGVpZ2h0OiBudW1iZXJcblx0Ym9yZGVyOiBudW1iZXJcblx0aW50ZXJuYWxGb3JtYXQ6IG51bWJlclxuXHRzb3VyY2VGb3JtYXQ6IG51bWJlclxuXHR0eXBlOiBudW1iZXJcblx0ZGF0YVR5cGU6IG51bWJlclxuXHR3cmFwUzogbnVtYmVyXG5cdHdyYXBUOiBudW1iZXJcblxuXHRwdWJsaWMgc3RhdGljIERlZmF1bHQyRChnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0KTogVGV4dHVyZU9wdHMge1xuXHRcdGxldCBvcHRzID0gbmV3IFRleHR1cmVPcHRzKClcblx0XHRvcHRzLmxldmVsID0gMFxuXHRcdG9wdHMuaGVpZ2h0ID0gMFxuXHRcdG9wdHMuYm9yZGVyID0gMFxuXHRcdG9wdHMuaW50ZXJuYWxGb3JtYXQgPSBnbC5SR0JBXG5cdFx0b3B0cy5zb3VyY2VGb3JtYXQgPSBnbC5SR0JBXG5cdFx0b3B0cy50eXBlID0gZ2wuVEVYVFVSRV8yRFxuXHRcdG9wdHMuZGF0YVR5cGUgPSBnbC5VTlNJR05FRF9CWVRFXG5cdFx0b3B0cy53cmFwUyA9IGdsLkNMQU1QX1RPX0VER0Vcblx0XHRvcHRzLndyYXBUID0gZ2wuQ0xBTVBfVE9fRURHRVxuXHRcdHJldHVybiBvcHRzXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRleDJEKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsIGRhdGE6IERhdGFUeXBlcywgb3B0cz86IFRleHR1cmVPcHRzKTogVGV4dHVyZSB7XG5cdGlmICghb3B0cykge1xuXHRcdG9wdHMgPSBUZXh0dXJlT3B0cy5EZWZhdWx0MkQoZ2wpXG5cdFx0aWYgKGRhdGEgJiYgZGF0YSBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQpIHtcblx0XHRcdG9wdHMud2lkdGggPSBkYXRhLndpZHRoXG5cdFx0XHRvcHRzLmhlaWdodCA9IGRhdGEuaGVpZ2h0XG5cdFx0fVxuXHR9XG5cdHJldHVybiBuZXcgVGV4dHVyZShnbCwgZGF0YSwgb3B0cylcbn1cblxuZXhwb3J0IGNsYXNzIFRleHR1cmUgZXh0ZW5kcyBSZXNvdXJjZSB7XG5cblx0cHJpdmF0ZSBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0XG5cdHByaXZhdGUgb3B0czogVGV4dHVyZU9wdHNcblx0cHVibGljIGhhbmRsZTogV2ViR0xUZXh0dXJlXG5cdHByaXZhdGUgX2V4aXN0czogYm9vbGVhblxuXHRwcml2YXRlIF9ib3VuZDogYm9vbGVhblxuXHRwdWJsaWMgZGF0YTogRGF0YVR5cGVzXG5cblx0cHVibGljIGluZGV4OiBudW1iZXJcblxuXHRjb25zdHJ1Y3RvcihnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCBkYXRhOiBEYXRhVHlwZXMsIG9wdHM6IFRleHR1cmVPcHRzKSB7XG5cdFx0c3VwZXIoKVxuXHRcdHRoaXMuZ2wgPSBnbFxuXHRcdHRoaXMub3B0cyA9IG9wdHNcblx0XHR0aGlzLmRhdGEgPSBkYXRhXG5cdFx0dGhpcy5fZXhpc3RzID0gZmFsc2Vcblx0XHR0aGlzLl9ib3VuZCA9IGZhbHNlXG5cdFx0dGhpcy5jcmVhdGUoKVxuXHR9XG5cblx0cHJpdmF0ZSBjb25maWd1cmUyRCh0ZXg6IFdlYkdMVGV4dHVyZSk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmRhdGEgPT09IG51bGwgfHwgdGhpcy5kYXRhIGluc3RhbmNlb2YgVWludDhBcnJheSkge1xuXHRcdFx0dGhpcy5jb25maWd1cmUyRERhdGEoPGFueT50aGlzLmRhdGEsIHRleClcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jb25maWd1cmUyREltYWdlKHRoaXMuZGF0YSwgdGV4KVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY29uZmlndXJlMkRJbWFnZShkYXRhOiBIVE1MSW1hZ2VFbGVtZW50LCB0ZXg6IFdlYkdMVGV4dHVyZSk6IHZvaWQge1xuXHRcdGNvbnN0IG9wdHMgPSB0aGlzLm9wdHNcblx0XHRjb25zdCBnbCA9IHRoaXMuZ2xcblx0XHRnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIG9wdHMubGV2ZWwsIG9wdHMuaW50ZXJuYWxGb3JtYXQsIFxuXHRcdFx0b3B0cy5zb3VyY2VGb3JtYXQsIG9wdHMuZGF0YVR5cGUsIGRhdGEpXG5cblx0XHRpZiAobWF0aC5pc1BvdzIoZGF0YS53aWR0aCkgJiYgbWF0aC5pc1BvdzIoZGF0YS5oZWlnaHQpKSB7XG5cdFx0XHRnbC5nZW5lcmF0ZU1pcG1hcChnbC5URVhUVVJFXzJEKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9TLCBvcHRzLndyYXBTKVxuXHQgICAgXHRnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBvcHRzLndyYXBUKVxuXHQgICAgXHRnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTElORUFSKVxuXHQgICAgfVxuXHR9XG5cblx0cHJpdmF0ZSBjb25maWd1cmUyRERhdGEoZGF0YTogVWludDhBcnJheSB8IG51bGwsIHRleDogV2ViR0xUZXh0dXJlKTogdm9pZCB7XG5cdFx0Y29uc3Qgb3B0cyA9IHRoaXMub3B0c1xuXHRcdGNvbnN0IGdsID0gdGhpcy5nbFxuXHRcdGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgb3B0cy5sZXZlbCwgb3B0cy5pbnRlcm5hbEZvcm1hdCxcbiAgICAgICAgICAgICAgICBvcHRzLndpZHRoLCBvcHRzLmhlaWdodCwgb3B0cy5ib3JkZXIsXG4gICAgICAgICAgICAgICAgb3B0cy5zb3VyY2VGb3JtYXQsIG9wdHMuZGF0YVR5cGUsIGRhdGEpXG5cdH1cblxuXHRwdWJsaWMgY3JlYXRlKCk6IFdlYkdMVGV4dHVyZSB7XG5cdFx0dGhpcy5hc3NlcnREb2VzTm90RXhpc3QoJ2NyZWF0ZScpXG5cblx0XHRjb25zdCBnbCA9IHRoaXMuZ2xcblx0XHRjb25zdCBvcHRzID0gdGhpcy5vcHRzXG5cdFx0Y29uc3QgdGV4ID0gZ2wuY3JlYXRlVGV4dHVyZSgpXG5cblx0XHRnbC5iaW5kVGV4dHVyZShvcHRzLnR5cGUsIHRleClcblxuXHRcdGlmIChvcHRzLnR5cGUgPT09IGdsLlRFWFRVUkVfMkQpIHtcblx0XHRcdHRoaXMuY29uZmlndXJlMkQodGV4KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFVucmVjb2duaXplZCB0ZXh0dXJlIHR5cGUuYClcblx0XHR9XG5cblx0XHRnbC5iaW5kVGV4dHVyZShvcHRzLnR5cGUsIG51bGwpXG5cblx0XHR0aGlzLl9leGlzdHMgPSB0cnVlXG5cdFx0dGhpcy5oYW5kbGUgPSB0ZXhcblx0XHRyZXR1cm4gdGhpcy5oYW5kbGVcblx0fVxuXG5cdHB1YmxpYyBleGlzdHMoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuX2V4aXN0c1xuXHR9XG5cblx0cHVibGljIGlzQm91bmQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuX2JvdW5kXG5cdH1cblxuXHRwdWJsaWMgY2xvbmUoKTogVGV4dHVyZSB7XG5cdFx0Ly9cblx0XHQvL1x0QFRPRE86IEZpeCBjbG9uaW5nXG5cdFx0Ly9cblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0Nsb25pbmcgbm90IHlldCBpbXBsZW1lbnRlZCcpXG5cdH1cblxuXHRwdWJsaWMgYmluZCgpOiB2b2lkIHtcblx0XHR0aGlzLmFzc2VydEV4aXN0cygnYmluZCcpXG5cdFx0dGhpcy5nbC5iaW5kVGV4dHVyZSh0aGlzLm9wdHMudHlwZSwgdGhpcy5oYW5kbGUpXG5cdFx0dGhpcy5fYm91bmQgPSB0cnVlXG5cdH1cblxuXHRwdWJsaWMgdW5iaW5kKCk6IHZvaWQge1xuXHRcdHRoaXMuYXNzZXJ0RXhpc3RzKCd1bmJpbmQnKVxuXHRcdHRoaXMuZ2wuYmluZFRleHR1cmUodGhpcy5vcHRzLnR5cGUsIG51bGwpXG5cdFx0dGhpcy5fYm91bmQgPSBmYWxzZVxuXHR9XG5cblx0cHVibGljIGRpc3Bvc2UoKTogdm9pZCB7XG5cdFx0Y29uc3QgZ2wgPSB0aGlzLmdsXG5cdFx0aWYgKCF0aGlzLmV4aXN0cygpKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oJ0F0dGVtcHRlZCB0byBkaXNwb3NlIG9mIGEgdGV4dHVyZSBiZWZvcmUgY3JlYXRpbmcgaXQuJylcblx0XHRcdHJldHVyblxuXHRcdH1cblx0XHRnbC5kZWxldGVUZXh0dXJlKHRoaXMuaGFuZGxlKVxuXHRcdHRoaXMuX2V4aXN0cyA9IGZhbHNlXG5cdH1cblxuXHRwcml2YXRlIGFzc2VydEV4aXN0cyhvcDogc3RyaW5nKTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLmV4aXN0cygpKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBPcGVyYXRpb24gLyBtZXRob2QgXCIke29wfVwiIHJlcXVpcmVzIGEgY2FsbCB0byBjcmVhdGUoKS5gKVxuXHR9XG5cdHByaXZhdGUgYXNzZXJ0RG9lc05vdEV4aXN0KG9wOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5leGlzdHMoKSlcblx0XHRcdHRocm93IG5ldyBFcnJvcihgT3BlcmF0aW9uIC8gbWV0aG9kIFwiJHtvcH1cIiBjYW5ub3QgYmUgY2FsbGVkIG9uY2UgdGhlIHRleHR1cmUgZXhpc3RzLmApXG5cdH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2dsL3RleHR1cmUvdGV4dHVyZS50cyIsImltcG9ydCB7IG1hdDQsIHZlYzIsIHZlYzMsIGdsTWF0cml4IH0gZnJvbSAnZ2wtbWF0cml4J1xuaW1wb3J0ICogYXMgdGV4dHVyZSBmcm9tICcuLi90ZXh0dXJlL3RleHR1cmUnXG5cbmV4cG9ydCB0eXBlIGFycmF5UHJpbWl0aXZlID0gQXJyYXk8bnVtYmVyPlxuZXhwb3J0IHR5cGUgYXJyYXlMaWtlID0gQXJyYXk8bnVtYmVyPiB8IEZsb2F0MzJBcnJheVxuZXhwb3J0IHR5cGUgZ2xtQXJyYXlQcmltaXRpdmUgPSBGbG9hdDMyQXJyYXlcbmV4cG9ydCB0eXBlIGdsbUFycmF5ID0gdmVjMyB8IG1hdDRcbmV4cG9ydCB0eXBlIHByaW1pdGl2ZSA9IG51bWJlciB8IGJvb2xlYW4gfCBzdHJpbmdcbmV4cG9ydCB0eXBlIHZlYzNDb252ZXJ0aWJsZSA9IG51bWJlciB8IHZlYzMgfCBBcnJheTxudW1iZXI+XG5leHBvcnQgdHlwZSBjbG9uZWFibGUgPSBwcmltaXRpdmUgfCBtYXQ0IHwgdmVjMyB8IGFycmF5UHJpbWl0aXZlIHwgdGV4dHVyZS5UZXh0dXJlXG5leHBvcnQgdHlwZSB2ZWN0b3IgPSB2ZWMyIHwgdmVjM1xuXG5leHBvcnQgZW51bSBjb3JlIHtcblx0bWF0NCxcblx0dmVjMyxcblx0RmxvYXQzMkFycmF5LFxuXHRudW1iZXIsXG5cdGJvb2xlYW4sXG5cdHN0cmluZ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNNYXQ0KGRhdGE6IHZlYzMgfCBtYXQ0KTogZGF0YSBpcyBtYXQ0IHtcblx0cmV0dXJuIGRhdGEubGVuZ3RoID09PSAxNlxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNWZWMzKGRhdGE6IHZlYzMgfCBtYXQ0KTogZGF0YSBpcyB2ZWMzIHtcblx0cmV0dXJuIGRhdGEubGVuZ3RoID09PSAzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1ByaW1pdGl2ZShkYXRhOiBjbG9uZWFibGUpOiBkYXRhIGlzIHByaW1pdGl2ZSB7XG5cdGlmICh0eXBlb2YgZGF0YSA9PT0gJ251bWJlcicgfHwgdHlwZW9mIGRhdGEgPT09ICdib29sZWFuJyB8fCB0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpXG5cdFx0cmV0dXJuIHRydWVcblx0cmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc05FbGVtZW50QXJyYXkoZGF0YTogY2xvbmVhYmxlLCBOOiBudW1iZXIpOiBib29sZWFuIHtcblx0aWYgKGlzUHJpbWl0aXZlKGRhdGEpKSB7XG5cdFx0cmV0dXJuIGZhbHNlXG5cdH0gZWxzZSBpZiAoaXNUZXh0dXJlKGRhdGEpKSB7XG5cdFx0cmV0dXJuIGZhbHNlXG5cdH1cblx0cmV0dXJuICgnbGVuZ3RoJyBpbiBkYXRhKSAmJiAoZGF0YS5sZW5ndGggPT09IE4pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RleHR1cmUoZGF0YTogY2xvbmVhYmxlKTogZGF0YSBpcyB0ZXh0dXJlLlRleHR1cmUge1xuXHRyZXR1cm4gZGF0YSBpbnN0YW5jZW9mIHRleHR1cmUuVGV4dHVyZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheShkYXRhOiBjbG9uZWFibGUpOiBkYXRhIGlzIGFycmF5UHJpbWl0aXZlIHtcblx0aWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpXG5cdFx0cmV0dXJuIHRydWVcblx0cmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0dMTUFycmF5VHlwZShkYXRhOiBjbG9uZWFibGUpOiBkYXRhIGlzIGdsbUFycmF5IHtcblx0aWYgKGlzUHJpbWl0aXZlKGRhdGEpKSB7XG5cdFx0cmV0dXJuIGZhbHNlXG5cdH0gZWxzZSBpZiAoIShkYXRhIGluc3RhbmNlb2YgRmxvYXQzMkFycmF5KSkge1xuXHRcdHJldHVybiBmYWxzZVxuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBpc01hdDQoZGF0YSkgfHwgaXNWZWMzKGRhdGEpXG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC91dGlsL3R5cGUtdXRpbC50cyIsImltcG9ydCB7IFJlc291cmNlIH0gZnJvbSAnLi4vY29tbW9uL3Jlc291cmNlJ1xuaW1wb3J0IHsgTWVzaCB9IGZyb20gJy4uL21lc2gvbWVzaCdcbmltcG9ydCB7IG1hdDQsIHZlYzMsIGdsTWF0cml4IH0gZnJvbSAnZ2wtbWF0cml4J1xuaW1wb3J0IHsgU2hhZGVyUHJvZ3JhbSB9IGZyb20gJy4uL3NoYWRlci9zaGFkZXInXG5pbXBvcnQgeyBtYXRyaXgsIHR5cGVzLCB2ZWN0b3IgfSBmcm9tICcuLi91dGlsL3V0aWwnXG5pbXBvcnQgKiBhcyBtYXRoIGZyb20gJy4uL21hdGgvd2dsLW1hdGgnXG5pbXBvcnQgKiBhcyBNYXRlcmlhbCBmcm9tICcuLi9tYXRlcmlhbC9tYXRlcmlhbCdcblxuZXhwb3J0IHR5cGUgUmVuZGVyQ2FsbGJhY2tUID0gKCkgPT4gdm9pZFxuXG5jbGFzcyBNb2RlbCBleHRlbmRzIFJlc291cmNlIHtcblxuXHRwcml2YXRlIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHRcblx0cHVibGljIG1lc2g6IE1lc2hcblx0cHVibGljIHByb2dyYW06IFNoYWRlclByb2dyYW1cblx0cHVibGljIG1hdGVyaWFsOiBNYXRlcmlhbC5NYXRlcmlhbFxuXG5cdHB1YmxpYyBhbGlhczogc3RyaW5nXG5cblx0cHJpdmF0ZSBwYXJlbnQ6IE1vZGVsXG5cdHByaXZhdGUgY2hpbGRyZW46IHsgW2tleTogc3RyaW5nXTogTW9kZWwgfVxuXG5cdHByaXZhdGUgcG9zaXRpb246IHZlYzNcblx0cHJpdmF0ZSByb3RhdGlvbjogdmVjM1xuXHRwcml2YXRlIHNjYWxlOiB2ZWMzXG5cdHByaXZhdGUgdHJhbnNmb3JtOiBtYXRyaXgudHJhbnNmb3JtXG5cblx0Ly9cdEV2ZW50c1xuXHRwdWJsaWMgb25CZWZvcmVSZW5kZXI6IFJlbmRlckNhbGxiYWNrVFxuXHRwdWJsaWMgb25BZnRlclJlbmRlcjogUmVuZGVyQ2FsbGJhY2tUXG5cblx0Y29uc3RydWN0b3IoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCwgcHJvZ3JhbTogU2hhZGVyUHJvZ3JhbSwgbWVzaDogTWVzaCwgbWF0ZXJpYWw6IE1hdGVyaWFsLk1hdGVyaWFsKSB7XG5cdFx0c3VwZXIoKVxuXHRcdHRoaXMuZ2wgPSBnbFxuXHRcdHRoaXMucHJvZ3JhbSA9IHByb2dyYW1cblx0XHR0aGlzLm1lc2ggPSBtZXNoXG5cdFx0dGhpcy5tYXRlcmlhbCA9IG1hdGVyaWFsXG5cdFx0dGhpcy5wb3NpdGlvbiA9IHZlYzMuZnJvbVZhbHVlcygwLCAwLCAwKVxuXHRcdHRoaXMucm90YXRpb24gPSB2ZWMzLmZyb21WYWx1ZXMoMCwgMCwgMClcblx0XHR0aGlzLnNjYWxlID0gdmVjMy5mcm9tVmFsdWVzKDEsIDEsIDEpXG5cdFx0dGhpcy5hbGlhcyA9ICcnXG5cdFx0dGhpcy50cmFuc2Zvcm0gPSBuZXcgbWF0cml4LnRyYW5zZm9ybVxuXG5cdFx0dGhpcy5wYXJlbnQgPSBudWxsXG5cdFx0dGhpcy5jaGlsZHJlbiA9IHt9XG5cblx0XHR0aGlzLm9uQmVmb3JlUmVuZGVyID0gKCkgPT4ge31cblx0XHR0aGlzLm9uQWZ0ZXJSZW5kZXIgPSAoKSA9PiB7fVxuXHR9XG5cblx0cHVibGljIHNldE1lc2gobWVzaDogTWVzaCk6IHZvaWQgeyBcblx0XHR0aGlzLm1lc2ggPSBtZXNoIFxuXHR9XG5cblx0cHVibGljIHNldE1hdGVyaWFsKG1hdGVyaWFsOiBNYXRlcmlhbC5NYXRlcmlhbCk6IHZvaWQgeyBcblx0XHR0aGlzLm1hdGVyaWFsID0gbWF0ZXJpYWwgXG5cdH1cblxuXHRwdWJsaWMgc2V0UG9zaXRpb24ocG9zOiB0eXBlcy52ZWMzQ29udmVydGlibGUpOiB2b2lkIHtcblx0XHR0aGlzLnBvc2l0aW9uID0gdmVjdG9yLnJlcXVpcmVWZWMzKHBvcylcblx0fVxuXG5cdHB1YmxpYyBzZXRSb3RhdGlvbihyb3Q6IHR5cGVzLnZlYzNDb252ZXJ0aWJsZSk6IHZvaWQge1xuXHRcdHRoaXMucm90YXRpb24gPSB2ZWN0b3IucmVxdWlyZVZlYzMocm90KVxuXHR9XG5cblx0cHVibGljIHNldFNjYWxlKHNjYWxlOiB0eXBlcy52ZWMzQ29udmVydGlibGUpOiB2b2lkIHtcblx0XHR0aGlzLnNjYWxlID0gdmVjdG9yLnJlcXVpcmVWZWMzKHNjYWxlKVxuXHR9XG5cblx0cHVibGljIGdldFBvc2l0aW9uKCk6IHZlYzMgeyByZXR1cm4gdGhpcy5wb3NpdGlvbiB9XG5cdHB1YmxpYyBnZXRSb3RhdGlvbigpOiB2ZWMzIHsgcmV0dXJuIHRoaXMucm90YXRpb24gfVxuXHRwdWJsaWMgZ2V0U2NhbGUoKTogdmVjMyB7IHJldHVybiB0aGlzLnNjYWxlIH1cblxuXHRwdWJsaWMgZ2V0V29ybGRNYXRyaXgoKTogbWF0NCB7XG5cdFx0bGV0IGxvY2FsOiBtYXQ0ID0gdGhpcy5nZXRMb2NhbE1hdHJpeCgpXG5cdFx0aWYgKHRoaXMucGFyZW50ID09PSBudWxsKVxuXHRcdFx0cmV0dXJuIGxvY2FsXG5cdFx0bGV0IHBhcmVudFdvcmxkOiBtYXQ0ID0gdGhpcy5wYXJlbnQuZ2V0V29ybGRNYXRyaXgoKVxuXHRcdHJldHVybiBtYXQ0Lm11bChwYXJlbnRXb3JsZCwgcGFyZW50V29ybGQsIGxvY2FsKVxuXHR9XG5cblx0cHVibGljIGdldExvY2FsTWF0cml4KCk6IG1hdDQge1xuXHRcdGxldCB0cmFucyA9IHRoaXMudHJhbnNmb3JtXG5cdFx0bGV0IHBvcyA9IHRoaXMucG9zaXRpb25cblx0XHRsZXQgcm90ID0gdGhpcy5yb3RhdGlvblxuXHRcdGxldCBzY2wgPSB0aGlzLnNjYWxlXG5cdFx0XG5cdFx0cmV0dXJuIHRyYW5zLmlkZW50aXR5KClcblx0XHRcdC50cmFuc2xhdGUocG9zKVxuXHRcdFx0LnJvdGF0ZShtYXRoLnJhZGlhbnMocm90WzBdKSwgWzEsIDAsIDBdKVxuXHRcdFx0LnJvdGF0ZShtYXRoLnJhZGlhbnMocm90WzFdKSwgWzAsIDEsIDBdKVxuXHRcdFx0LnJvdGF0ZShtYXRoLnJhZGlhbnMocm90WzJdKSwgWzAsIDAsIDFdKVxuXHRcdFx0LnNjYWxlKHNjbClcblx0XHRcdC5tYXQoKVxuXHR9XG5cblx0cHVibGljIHN0YXRpYyBjb21wYXJlTWVzaFVVSUQoYTogTW9kZWwsIGI6IE1vZGVsKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gTWVzaC5jb21wYXJlVVVJRChhLm1lc2gsIGIubWVzaClcblx0fVxuXG5cdHB1YmxpYyBhZGRDaGlsZChtb2RlbDogTW9kZWwpOiB2b2lkIHtcblx0XHR0aGlzLmNoaWxkcmVuW21vZGVsLnV1aWRdID0gbW9kZWxcblx0XHRtb2RlbC5wYXJlbnQgPSB0aGlzXG5cdH1cblxuXHRwdWJsaWMgaGFzQ2hpbGQobW9kZWw6IE1vZGVsKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY2hpbGRyZW5bbW9kZWwudXVpZF0gIT09IHVuZGVmaW5lZFxuXHR9XG5cblx0cHVibGljIHJlbW92ZUNoaWxkKG1vZGVsOiBNb2RlbCk6IHZvaWQge1xuXHRcdGlmICghdGhpcy5oYXNDaGlsZChtb2RlbCkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgTW9kZWwgXCIke21vZGVsLmFsaWFzfVwiIGlzIG5vdCBhIGNoaWxkIG9mIFwiJHt0aGlzLmFsaWFzfVwiLmApXG5cdFx0fVxuXHRcdHRoaXMuY2hpbGRyZW5bbW9kZWwudXVpZF0gPSB1bmRlZmluZWRcblx0XHRtb2RlbC5wYXJlbnQgPSBudWxsXG5cdH1cblxufVxuXG5leHBvcnQgeyBNb2RlbCB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2wvbW9kZWwvbW9kZWwudHMiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiAgSW4gdGhlXG4vLyBicm93c2VyIHRoaXMgaXMgYSBsaXR0bGUgY29tcGxpY2F0ZWQgZHVlIHRvIHVua25vd24gcXVhbGl0eSBvZiBNYXRoLnJhbmRvbSgpXG4vLyBhbmQgaW5jb25zaXN0ZW50IHN1cHBvcnQgZm9yIHRoZSBgY3J5cHRvYCBBUEkuICBXZSBkbyB0aGUgYmVzdCB3ZSBjYW4gdmlhXG4vLyBmZWF0dXJlLWRldGVjdGlvblxudmFyIHJuZztcblxudmFyIGNyeXB0byA9IGdsb2JhbC5jcnlwdG8gfHwgZ2xvYmFsLm1zQ3J5cHRvOyAvLyBmb3IgSUUgMTFcbmlmIChjcnlwdG8gJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcykge1xuICAvLyBXSEFUV0cgY3J5cHRvIFJORyAtIGh0dHA6Ly93aWtpLndoYXR3Zy5vcmcvd2lraS9DcnlwdG9cbiAgdmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gIHJuZyA9IGZ1bmN0aW9uIHdoYXR3Z1JORygpIHtcbiAgICBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbiAgICByZXR1cm4gcm5kczg7XG4gIH07XG59XG5cbmlmICghcm5nKSB7XG4gIC8vIE1hdGgucmFuZG9tKCktYmFzZWQgKFJORylcbiAgLy9cbiAgLy8gSWYgYWxsIGVsc2UgZmFpbHMsIHVzZSBNYXRoLnJhbmRvbSgpLiAgSXQncyBmYXN0LCBidXQgaXMgb2YgdW5zcGVjaWZpZWRcbiAgLy8gcXVhbGl0eS5cbiAgdmFyIHJuZHMgPSBuZXcgQXJyYXkoMTYpO1xuICBybmcgPSBmdW5jdGlvbigpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgcjsgaSA8IDE2OyBpKyspIHtcbiAgICAgIGlmICgoaSAmIDB4MDMpID09PSAwKSByID0gTWF0aC5yYW5kb20oKSAqIDB4MTAwMDAwMDAwO1xuICAgICAgcm5kc1tpXSA9IHIgPj4+ICgoaSAmIDB4MDMpIDw8IDMpICYgMHhmZjtcbiAgICB9XG5cbiAgICByZXR1cm4gcm5kcztcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBybmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ybmctYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG52YXIgYnl0ZVRvSGV4ID0gW107XG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleFtpXSA9IChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSk7XG59XG5cbmZ1bmN0aW9uIGJ5dGVzVG9VdWlkKGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gb2Zmc2V0IHx8IDA7XG4gIHZhciBidGggPSBieXRlVG9IZXg7XG4gIHJldHVybiBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnl0ZXNUb1V1aWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ieXRlc1RvVXVpZC5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidHlwZSBHZW9tZXRyeVNvdXJjZSA9IHtcblx0ZGF0YTogQXJyYXk8bnVtYmVyPlxuXHRpbmRpY2VzOiBBcnJheTxudW1iZXI+XG59XG5cbmNsYXNzIE1lc2hMaWJyYXJ5IHtcblxuXHRwdWJsaWMgc3RhdGljIHF1YWQ6IEdlb21ldHJ5U291cmNlID0ge1xuXHRcdGRhdGE6IFtcblx0XHRcdC0xLjAsIDEuMCwgMC4wLCAwLjAsIDEuMCwgMC4wLCAxLjAsIDAuMCxcbiAgICAgICAgICAgIC0xLjAsIC0xLjAsIDAuMCwgMC4wLCAwLjAsIDAuMCwgMS4wLCAwLjAsXG4gICAgICAgICAgICAxLjAsIC0xLjAsIDAuMCwgMS4wLCAwLjAsIDAuMCwgMS4wLCAwLjAsXG4gICAgICAgICAgICAxLjAsIC0xLjAsIDAuMCwgMS4wLCAwLjAsIDAuMCwgMS4wLCAwLjAsXG4gICAgICAgICAgICAxLjAsIDEuMCwgMC4wLCAxLjAsIDEuMCwgMC4wLCAxLjAsIDAuMCxcbiAgICAgICAgICAgIC0xLjAsIDEuMCwgMC4wLCAwLjAsIDEuMCwgMC4wLCAxLjAsIDAuMFxuICAgICAgICBdLFxuICAgICAgICBpbmRpY2VzOiBbXVxuXHR9XG5cblx0cHVibGljIHN0YXRpYyB0cmlhbmdsZTogR2VvbWV0cnlTb3VyY2UgPSB7XG5cdFx0ZGF0YTogW1xuXHRcdFx0LTEuMCwgLTEuMCwgMC4wLCAwLjAsIDEuMCwgMC4wLCAxLjAsIDAuMCxcbiAgICAgICAgICAgIDEuMCwgLTEuMCwgMC4wLCAwLjAsIDEuMCwgMC4wLCAxLjAsIDAuMCxcbiAgICAgICAgICAgIDAuMCwgMS4wLCAwLjAsIDAuMCwgMS4wLCAwLjAsIDEuMCwgMC4wXG5cdFx0XSxcblx0XHRpbmRpY2VzOiBbXVxuXHR9XG5cblx0cHVibGljIHN0YXRpYyBza3lib3g6IEdlb21ldHJ5U291cmNlID0ge1xuXHRcdGRhdGE6IFtcblx0XHQgICAgLTEuMCwgLTEuMCwgIC0xLjAsIDAsIDAsXG5cdFx0ICAgIC0xLjAsICAxLjAsICAtMS4wLCAwLCAwLjUsXG5cdFx0ICAgICAxLjAsIC0xLjAsICAtMS4wLCAwLjI1LCAwLFxuXHRcdCAgICAtMS4wLCAgMS4wLCAgLTEuMCwgMCwgMC41LFxuXHRcdCAgICAgMS4wLCAgMS4wLCAgLTEuMCwgMC4yNSwgMC41LFxuXHRcdCAgICAgMS4wLCAtMS4wLCAgLTEuMCwgMC4yNSwgMCxcblxuXHRcdCAgICAtMS4wLCAtMS4wLCAgIDEuMCwgMC4yNSwgMCxcblx0XHQgICAgIDEuMCwgLTEuMCwgICAxLjAsIDAuNSAsIDAsXG5cdFx0ICAgIC0xLjAsICAxLjAsICAgMS4wLCAwLjI1LCAwLjUsXG5cdFx0ICAgIC0xLjAsICAxLjAsICAgMS4wLCAwLjI1LCAwLjUsXG5cdFx0ICAgICAxLjAsIC0xLjAsICAgMS4wLCAwLjUsIDAsXG5cdFx0ICAgICAxLjAsICAxLjAsICAgMS4wLCAwLjUsIDAuNSxcblxuXHRcdCAgICAtMS4wLCAgIDEuMCwgLTEuMCwgMC41ICwgMCAgLFxuXHRcdCAgICAtMS4wLCAgIDEuMCwgIDEuMCwgMC41ICwgMC41LFxuXHRcdCAgICAgMS4wLCAgIDEuMCwgLTEuMCwgIDAuNzUsIDAgICxcblx0XHQgICAgLTEuMCwgICAxLjAsICAxLjAsIDAuNSAsIDAuNSxcblx0XHQgICAgIDEuMCwgICAxLjAsICAxLjAsIDAuNzUsIDAuNSxcblx0XHQgICAgIDEuMCwgICAxLjAsIC0xLjAsIDAuNzUsIDAgICxcblxuXHRcdCAgICAtMS4wLCAgLTEuMCwgLTEuMCwgMCAgICwgMC41LFxuXHRcdCAgICAgMS4wLCAgLTEuMCwgLTEuMCwgIDAuMjUsIDAuNSxcblx0XHQgICAgLTEuMCwgIC0xLjAsICAxLjAsIDAgICAsIDEgICxcblx0XHQgICAgLTEuMCwgIC0xLjAsICAxLjAsIDAgICAsIDEgICxcblx0XHQgICAgIDEuMCwgIC0xLjAsIC0xLjAsIDAuMjUsIDAuNSxcblx0XHQgICAgIDEuMCwgIC0xLjAsICAxLjAsIDAuMjUsIDEgICxcbiBcblx0XHQgICAgLTEuMCwgIC0xLjAsIC0xLjAsICAwLjI1LCAwLjUsXG5cdFx0ICAgIC0xLjAsICAtMS4wLCAgMS4wLCAgMC4yNSwgMSAgLFxuXHRcdCAgICAtMS4wLCAgIDEuMCwgLTEuMCwgMC41ICwgMC41LFxuXHRcdCAgICAtMS4wLCAgLTEuMCwgIDEuMCwgMC4yNSwgMSAgLFxuXHRcdCAgICAtMS4wLCAgIDEuMCwgIDEuMCwgMC41ICwgMSAgLFxuXHRcdCAgICAtMS4wLCAgIDEuMCwgLTEuMCwgMC41ICwgMC41LFxuXG5cdFx0ICAgICAxLjAsICAtMS4wLCAtMS4wLCAwLjUgLCAwLjUsXG5cdFx0ICAgICAxLjAsICAgMS4wLCAtMS4wLCAgMC43NSwgMC41LFxuXHRcdCAgICAgMS4wLCAgLTEuMCwgIDEuMCwgIDAuNSAsIDEgICxcblx0XHQgICAgIDEsICAtMSwgIDEuMCwgMC41ICwgMSAgLFxuXHRcdCAgICAgMSwgICAxLCAtMSwgMC43NSwgMC41LFxuXHRcdCAgICAgMSwgICAxLCAgMSwgMC43NSwgMSAgLFxuXHRcdF0sXG5cdFx0aW5kaWNlczogW11cblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgY3ViZTI6IEdlb21ldHJ5U291cmNlID0ge1xuXHRcdGRhdGE6IFsgXG5cdFx0XHQtMC41LCAtMC41LCAtMC41LCAwLjAsIDAuMCwgLTEuMCwgMC4wLCAwLjAsIFxuXHRcdFx0MC41LCAtMC41LCAtMC41LCAwLjAsIDAuMCwgLTEuMCwgMS4wLCAwLjAsIFxuXHRcdFx0MC41LCAwLjUsIC0wLjUsIDAuMCwgMC4wLCAtMS4wLCAxLjAsIDEuMCxcblx0XHRcdDAuNSwgMC41LCAtMC41LCAwLjAsIDAuMCwgLTEuMCwgMS4wLCAxLjAsIFxuXHRcdFx0LTAuNSwgMC41LCAtMC41LCAwLjAsIDAuMCwgLTEuMCwgMC4wLCAxLjAsIFxuXHRcdFx0LTAuNSwgLTAuNSwgLTAuNSwgMC4wLCAwLjAsIC0xLjAsIDAuMCwgMC4wLCBcblx0XHRcdC0wLjUsIC0wLjUsIDAuNSwgMC4wLCAwLjAsIDEuMCwgMC4wLCAwLjAsIFxuXHRcdFx0MC41LCAtMC41LCAwLjUsIDAuMCwgMC4wLCAxLjAsIDEuMCwgMC4wLCBcblx0XHRcdDAuNSwgMC41LCAwLjUsIDAuMCwgMC4wLCAxLjAsIDEuMCwgMS4wLCBcblx0XHRcdDAuNSwgMC41LCAwLjUsIDAuMCwgMC4wLCAxLjAsIDEuMCwgMS4wLCBcblx0XHRcdC0wLjUsIDAuNSwgMC41LCAwLjAsIDAuMCwgMS4wLCAwLjAsIDEuMCwgXG5cdFx0XHQtMC41LCAtMC41LCAwLjUsIDAuMCwgMC4wLCAxLjAsIDAuMCwgMC4wLCBcblx0XHRcdC0wLjUsIDAuNSwgMC41LCAtMS4wLCAwLjAsIDAuMCwgMS4wLCAwLjAsIFxuXHRcdFx0LTAuNSwgMC41LCAtMC41LCAtMS4wLCAwLjAsIDAuMCwgMS4wLCAxLjAsIFxuXHRcdFx0LTAuNSwgLTAuNSwgLTAuNSwgLTEuMCwgMC4wLCAwLjAsIDAuMCwgMS4wLCBcblx0XHRcdC0wLjUsIC0wLjUsIC0wLjUsIC0xLjAsIDAuMCwgMC4wLCAwLjAsIDEuMCwgXG5cdFx0XHQtMC41LCAtMC41LCAwLjUsIC0xLjAsIDAuMCwgMC4wLCAwLjAsIDAuMCwgXG5cdFx0XHQtMC41LCAwLjUsIDAuNSwgLTEuMCwgMC4wLCAwLjAsIDEuMCwgMC4wLCAwLjUsIFxuXHRcdFx0MC41LCAwLjUsIDEuMCwgMC4wLCAwLjAsIDEuMCwgMC4wLCAwLjUsIDAuNSwgXG5cdFx0XHQtMC41LCAxLjAsIDAuMCwgMC4wLCAxLjAsIDEuMCwgMC41LCAtMC41LCAtMC41LCBcblx0XHRcdDEuMCwgMC4wLCAwLjAsIDAuMCwgMS4wLCAwLjUsIC0wLjUsIC0wLjUsIFxuXHRcdFx0MS4wLCAwLjAsIDAuMCwgMC4wLCAxLjAsIDAuNSwgLTAuNSwgMC41LCAxLjAsXG5cdFx0XHQwLjAsIDAuMCwgMC4wLCAwLjAsIDAuNSwgMC41LCAwLjUsIDEuMCwgMC4wLCBcblx0XHRcdDAuMCwgMS4wLCAwLjAsIC0wLjUsIC0wLjUsIC0wLjUsIDAuMCwgLTEuMCwgXG5cdFx0XHQwLjAsIDAuMCwgMS4wLCAwLjUsIC0wLjUsIC0wLjUsIDAuMCwgLTEuMCwgXG5cdFx0XHQwLjAsIDEuMCwgMS4wLCAwLjUsIC0wLjUsIDAuNSwgMC4wLCAtMS4wLCBcblx0XHRcdDAuMCwgMS4wLCAwLjAsIDAuNSwgLTAuNSwgMC41LCAwLjAsIC0xLjAsIFxuXHRcdFx0MC4wLCAxLjAsIDAuMCwgLTAuNSwgLTAuNSwgMC41LCAwLjAsIC0xLjAsIFxuXHRcdFx0MC4wLCAwLjAsIDAuMCwgLTAuNSwgLTAuNSwgLTAuNSwgMC4wLCAtMS4wLCBcblx0XHRcdDAuMCwgMC4wLCAxLjAsIC0wLjUsIDAuNSwgLTAuNSwgMC4wLCAxLjAsIFxuXHRcdFx0MC4wLCAwLjAsIDEuMCwgMC41LCAwLjUsIC0wLjUsIDAuMCwgMS4wLCAwLjAsIFxuXHRcdFx0MS4wLCAxLjAsIDAuNSwgMC41LCAwLjUsIDAuMCwgMS4wLCAwLjAsIDEuMCwgMC4wLCBcblx0XHRcdDAuNSwgMC41LCAwLjUsIDAuMCwgMS4wLCAwLjAsIDEuMCwgMC4wLCAtMC41LCAwLjUsIFxuXHRcdFx0MC41LCAwLjAsIDEuMCwgMC4wLCAwLjAsIDAuMCwgLTAuNSwgMC41LCAtMC41LCBcblx0XHRcdDAuMCwgMS4wLCAwLjAsIDAuMCwgMS4wXG4gICAgICAgIF0sXG4gICAgICAgIGluZGljZXM6IFtdXG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIGN1YmU6IEdlb21ldHJ5U291cmNlID0ge1xuXHRcdGRhdGE6IFtcblx0XHQgIC0xLjAsIC0xLjAsICAxLjAsXG5cdFx0ICAgMS4wLCAtMS4wLCAgMS4wLCBcblx0XHQgICAxLjAsICAxLjAsICAxLjAsXG5cdFx0ICAtMS4wLCAgMS4wLCAgMS4wLFxuXHRcdCAgXG5cdFx0ICAtMS4wLCAtMS4wLCAtMS4wLFxuXHRcdCAgLTEuMCwgIDEuMCwgLTEuMCxcblx0XHQgICAxLjAsICAxLjAsIC0xLjAsXG5cdFx0ICAgMS4wLCAtMS4wLCAtMS4wLFxuXHRcdCAgXG5cdFx0ICAtMS4wLCAgMS4wLCAtMS4wLFxuXHRcdCAgLTEuMCwgIDEuMCwgIDEuMCxcblx0XHQgICAxLjAsICAxLjAsICAxLjAsXG5cdFx0ICAgMS4wLCAgMS4wLCAtMS4wLFxuXHRcdCAgXG5cdFx0ICAtMS4wLCAtMS4wLCAtMS4wLFxuXHRcdCAgIDEuMCwgLTEuMCwgLTEuMCxcblx0XHQgICAxLjAsIC0xLjAsICAxLjAsXG5cdFx0ICAtMS4wLCAtMS4wLCAgMS4wLFxuXHRcdCAgXG5cdFx0ICAgMS4wLCAtMS4wLCAtMS4wLFxuXHRcdCAgIDEuMCwgIDEuMCwgLTEuMCxcblx0XHQgICAxLjAsICAxLjAsICAxLjAsXG5cdFx0ICAgMS4wLCAtMS4wLCAgMS4wLFxuXHRcdCAgXG5cdFx0ICAtMS4wLCAtMS4wLCAtMS4wLFxuXHRcdCAgLTEuMCwgLTEuMCwgIDEuMCxcblx0XHQgIC0xLjAsICAxLjAsICAxLjAsXG5cdFx0ICAtMS4wLCAgMS4wLCAtMS4wLFxuXHRcdF0sXG5cdFx0aW5kaWNlczogW1xuXHRcdFx0MCwgIDEsICAyLCAgICAgIDAsICAyLCAgMywgICAgLy8gZnJvbnRcblx0XHRcdDQsICA1LCAgNiwgICAgICA0LCAgNiwgIDcsICAgIC8vIGJhY2tcblx0XHRcdDgsICA5LCAgMTAsICAgICA4LCAgMTAsIDExLCAgIC8vIHRvcFxuXHRcdFx0MTIsIDEzLCAxNCwgICAgIDEyLCAxNCwgMTUsICAgLy8gYm90dG9tXG5cdFx0XHQxNiwgMTcsIDE4LCAgICAgMTYsIDE4LCAxOSwgICAvLyByaWdodFxuXHRcdFx0MjAsIDIxLCAyMiwgICAgIDIwLCAyMiwgMjMsICAgLy8gbGVmdFxuXHRcdF1cblx0fVxuXG59XG5cbmV4cG9ydCB7IE1lc2hMaWJyYXJ5IH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC9tZXNoL21lc2gtbGlicmFyeS50cyIsIi8qIENvcHlyaWdodCAoYykgMjAxNSwgQnJhbmRvbiBKb25lcywgQ29saW4gTWFjS2VuemllIElWLlxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbmZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG5hbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG5USEUgU09GVFdBUkUuICovXG5cbmltcG9ydCAqIGFzIGdsTWF0cml4IGZyb20gXCIuL2NvbW1vblwiO1xuXG4vKipcbiAqIDN4MyBNYXRyaXhcbiAqIEBtb2R1bGUgbWF0M1xuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBpZGVudGl0eSBtYXQzXG4gKlxuICogQHJldHVybnMge21hdDN9IGEgbmV3IDN4MyBtYXRyaXhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgbGV0IG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDkpO1xuICBvdXRbMF0gPSAxO1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSAxO1xuICBvdXRbNV0gPSAwO1xuICBvdXRbNl0gPSAwO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENvcGllcyB0aGUgdXBwZXItbGVmdCAzeDMgdmFsdWVzIGludG8gdGhlIGdpdmVuIG1hdDMuXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyAzeDMgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgICB0aGUgc291cmNlIDR4NCBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21NYXQ0KG91dCwgYSkge1xuICBvdXRbMF0gPSBhWzBdO1xuICBvdXRbMV0gPSBhWzFdO1xuICBvdXRbMl0gPSBhWzJdO1xuICBvdXRbM10gPSBhWzRdO1xuICBvdXRbNF0gPSBhWzVdO1xuICBvdXRbNV0gPSBhWzZdO1xuICBvdXRbNl0gPSBhWzhdO1xuICBvdXRbN10gPSBhWzldO1xuICBvdXRbOF0gPSBhWzEwXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IG1hdDMgaW5pdGlhbGl6ZWQgd2l0aCB2YWx1ZXMgZnJvbSBhbiBleGlzdGluZyBtYXRyaXhcbiAqXG4gKiBAcGFyYW0ge21hdDN9IGEgbWF0cml4IHRvIGNsb25lXG4gKiBAcmV0dXJucyB7bWF0M30gYSBuZXcgM3gzIG1hdHJpeFxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUoYSkge1xuICBsZXQgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoOSk7XG4gIG91dFswXSA9IGFbMF07XG4gIG91dFsxXSA9IGFbMV07XG4gIG91dFsyXSA9IGFbMl07XG4gIG91dFszXSA9IGFbM107XG4gIG91dFs0XSA9IGFbNF07XG4gIG91dFs1XSA9IGFbNV07XG4gIG91dFs2XSA9IGFbNl07XG4gIG91dFs3XSA9IGFbN107XG4gIG91dFs4XSA9IGFbOF07XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIG1hdDMgdG8gYW5vdGhlclxuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHkob3V0LCBhKSB7XG4gIG91dFswXSA9IGFbMF07XG4gIG91dFsxXSA9IGFbMV07XG4gIG91dFsyXSA9IGFbMl07XG4gIG91dFszXSA9IGFbM107XG4gIG91dFs0XSA9IGFbNF07XG4gIG91dFs1XSA9IGFbNV07XG4gIG91dFs2XSA9IGFbNl07XG4gIG91dFs3XSA9IGFbN107XG4gIG91dFs4XSA9IGFbOF07XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IG1hdDMgd2l0aCB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMCBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAwIHBvc2l0aW9uIChpbmRleCAwKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMSBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAxIHBvc2l0aW9uIChpbmRleCAxKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMiBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAyIHBvc2l0aW9uIChpbmRleCAyKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMCBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAwIHBvc2l0aW9uIChpbmRleCAzKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMSBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAxIHBvc2l0aW9uIChpbmRleCA0KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMiBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAyIHBvc2l0aW9uIChpbmRleCA1KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMCBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAwIHBvc2l0aW9uIChpbmRleCA2KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMSBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAxIHBvc2l0aW9uIChpbmRleCA3KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMiBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAyIHBvc2l0aW9uIChpbmRleCA4KVxuICogQHJldHVybnMge21hdDN9IEEgbmV3IG1hdDNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21WYWx1ZXMobTAwLCBtMDEsIG0wMiwgbTEwLCBtMTEsIG0xMiwgbTIwLCBtMjEsIG0yMikge1xuICBsZXQgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoOSk7XG4gIG91dFswXSA9IG0wMDtcbiAgb3V0WzFdID0gbTAxO1xuICBvdXRbMl0gPSBtMDI7XG4gIG91dFszXSA9IG0xMDtcbiAgb3V0WzRdID0gbTExO1xuICBvdXRbNV0gPSBtMTI7XG4gIG91dFs2XSA9IG0yMDtcbiAgb3V0WzddID0gbTIxO1xuICBvdXRbOF0gPSBtMjI7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU2V0IHRoZSBjb21wb25lbnRzIG9mIGEgbWF0MyB0byB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMDAgQ29tcG9uZW50IGluIGNvbHVtbiAwLCByb3cgMCBwb3NpdGlvbiAoaW5kZXggMClcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMDEgQ29tcG9uZW50IGluIGNvbHVtbiAwLCByb3cgMSBwb3NpdGlvbiAoaW5kZXggMSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMDIgQ29tcG9uZW50IGluIGNvbHVtbiAwLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggMilcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMTAgQ29tcG9uZW50IGluIGNvbHVtbiAxLCByb3cgMCBwb3NpdGlvbiAoaW5kZXggMylcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMTEgQ29tcG9uZW50IGluIGNvbHVtbiAxLCByb3cgMSBwb3NpdGlvbiAoaW5kZXggNClcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMTIgQ29tcG9uZW50IGluIGNvbHVtbiAxLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggNSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjAgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMCBwb3NpdGlvbiAoaW5kZXggNilcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjEgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMSBwb3NpdGlvbiAoaW5kZXggNylcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjIgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggOClcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldChvdXQsIG0wMCwgbTAxLCBtMDIsIG0xMCwgbTExLCBtMTIsIG0yMCwgbTIxLCBtMjIpIHtcbiAgb3V0WzBdID0gbTAwO1xuICBvdXRbMV0gPSBtMDE7XG4gIG91dFsyXSA9IG0wMjtcbiAgb3V0WzNdID0gbTEwO1xuICBvdXRbNF0gPSBtMTE7XG4gIG91dFs1XSA9IG0xMjtcbiAgb3V0WzZdID0gbTIwO1xuICBvdXRbN10gPSBtMjE7XG4gIG91dFs4XSA9IG0yMjtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTZXQgYSBtYXQzIHRvIHRoZSBpZGVudGl0eSBtYXRyaXhcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHkob3V0KSB7XG4gIG91dFswXSA9IDE7XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IDE7XG4gIG91dFs1XSA9IDA7XG4gIG91dFs2XSA9IDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogVHJhbnNwb3NlIHRoZSB2YWx1ZXMgb2YgYSBtYXQzXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNwb3NlKG91dCwgYSkge1xuICAvLyBJZiB3ZSBhcmUgdHJhbnNwb3Npbmcgb3Vyc2VsdmVzIHdlIGNhbiBza2lwIGEgZmV3IHN0ZXBzIGJ1dCBoYXZlIHRvIGNhY2hlIHNvbWUgdmFsdWVzXG4gIGlmIChvdXQgPT09IGEpIHtcbiAgICBsZXQgYTAxID0gYVsxXSwgYTAyID0gYVsyXSwgYTEyID0gYVs1XTtcbiAgICBvdXRbMV0gPSBhWzNdO1xuICAgIG91dFsyXSA9IGFbNl07XG4gICAgb3V0WzNdID0gYTAxO1xuICAgIG91dFs1XSA9IGFbN107XG4gICAgb3V0WzZdID0gYTAyO1xuICAgIG91dFs3XSA9IGExMjtcbiAgfSBlbHNlIHtcbiAgICBvdXRbMF0gPSBhWzBdO1xuICAgIG91dFsxXSA9IGFbM107XG4gICAgb3V0WzJdID0gYVs2XTtcbiAgICBvdXRbM10gPSBhWzFdO1xuICAgIG91dFs0XSA9IGFbNF07XG4gICAgb3V0WzVdID0gYVs3XTtcbiAgICBvdXRbNl0gPSBhWzJdO1xuICAgIG91dFs3XSA9IGFbNV07XG4gICAgb3V0WzhdID0gYVs4XTtcbiAgfVxuXG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogSW52ZXJ0cyBhIG1hdDNcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQzfSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQob3V0LCBhKSB7XG4gIGxldCBhMDAgPSBhWzBdLCBhMDEgPSBhWzFdLCBhMDIgPSBhWzJdO1xuICBsZXQgYTEwID0gYVszXSwgYTExID0gYVs0XSwgYTEyID0gYVs1XTtcbiAgbGV0IGEyMCA9IGFbNl0sIGEyMSA9IGFbN10sIGEyMiA9IGFbOF07XG5cbiAgbGV0IGIwMSA9IGEyMiAqIGExMSAtIGExMiAqIGEyMTtcbiAgbGV0IGIxMSA9IC1hMjIgKiBhMTAgKyBhMTIgKiBhMjA7XG4gIGxldCBiMjEgPSBhMjEgKiBhMTAgLSBhMTEgKiBhMjA7XG5cbiAgLy8gQ2FsY3VsYXRlIHRoZSBkZXRlcm1pbmFudFxuICBsZXQgZGV0ID0gYTAwICogYjAxICsgYTAxICogYjExICsgYTAyICogYjIxO1xuXG4gIGlmICghZGV0KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgZGV0ID0gMS4wIC8gZGV0O1xuXG4gIG91dFswXSA9IGIwMSAqIGRldDtcbiAgb3V0WzFdID0gKC1hMjIgKiBhMDEgKyBhMDIgKiBhMjEpICogZGV0O1xuICBvdXRbMl0gPSAoYTEyICogYTAxIC0gYTAyICogYTExKSAqIGRldDtcbiAgb3V0WzNdID0gYjExICogZGV0O1xuICBvdXRbNF0gPSAoYTIyICogYTAwIC0gYTAyICogYTIwKSAqIGRldDtcbiAgb3V0WzVdID0gKC1hMTIgKiBhMDAgKyBhMDIgKiBhMTApICogZGV0O1xuICBvdXRbNl0gPSBiMjEgKiBkZXQ7XG4gIG91dFs3XSA9ICgtYTIxICogYTAwICsgYTAxICogYTIwKSAqIGRldDtcbiAgb3V0WzhdID0gKGExMSAqIGEwMCAtIGEwMSAqIGExMCkgKiBkZXQ7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgYWRqdWdhdGUgb2YgYSBtYXQzXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRqb2ludChvdXQsIGEpIHtcbiAgbGV0IGEwMCA9IGFbMF0sIGEwMSA9IGFbMV0sIGEwMiA9IGFbMl07XG4gIGxldCBhMTAgPSBhWzNdLCBhMTEgPSBhWzRdLCBhMTIgPSBhWzVdO1xuICBsZXQgYTIwID0gYVs2XSwgYTIxID0gYVs3XSwgYTIyID0gYVs4XTtcblxuICBvdXRbMF0gPSAoYTExICogYTIyIC0gYTEyICogYTIxKTtcbiAgb3V0WzFdID0gKGEwMiAqIGEyMSAtIGEwMSAqIGEyMik7XG4gIG91dFsyXSA9IChhMDEgKiBhMTIgLSBhMDIgKiBhMTEpO1xuICBvdXRbM10gPSAoYTEyICogYTIwIC0gYTEwICogYTIyKTtcbiAgb3V0WzRdID0gKGEwMCAqIGEyMiAtIGEwMiAqIGEyMCk7XG4gIG91dFs1XSA9IChhMDIgKiBhMTAgLSBhMDAgKiBhMTIpO1xuICBvdXRbNl0gPSAoYTEwICogYTIxIC0gYTExICogYTIwKTtcbiAgb3V0WzddID0gKGEwMSAqIGEyMCAtIGEwMCAqIGEyMSk7XG4gIG91dFs4XSA9IChhMDAgKiBhMTEgLSBhMDEgKiBhMTApO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRldGVybWluYW50IG9mIGEgbWF0M1xuICpcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge051bWJlcn0gZGV0ZXJtaW5hbnQgb2YgYVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGV0ZXJtaW5hbnQoYSkge1xuICBsZXQgYTAwID0gYVswXSwgYTAxID0gYVsxXSwgYTAyID0gYVsyXTtcbiAgbGV0IGExMCA9IGFbM10sIGExMSA9IGFbNF0sIGExMiA9IGFbNV07XG4gIGxldCBhMjAgPSBhWzZdLCBhMjEgPSBhWzddLCBhMjIgPSBhWzhdO1xuXG4gIHJldHVybiBhMDAgKiAoYTIyICogYTExIC0gYTEyICogYTIxKSArIGEwMSAqICgtYTIyICogYTEwICsgYTEyICogYTIwKSArIGEwMiAqIChhMjEgKiBhMTAgLSBhMTEgKiBhMjApO1xufVxuXG4vKipcbiAqIE11bHRpcGxpZXMgdHdvIG1hdDMnc1xuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7bWF0M30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5KG91dCwgYSwgYikge1xuICBsZXQgYTAwID0gYVswXSwgYTAxID0gYVsxXSwgYTAyID0gYVsyXTtcbiAgbGV0IGExMCA9IGFbM10sIGExMSA9IGFbNF0sIGExMiA9IGFbNV07XG4gIGxldCBhMjAgPSBhWzZdLCBhMjEgPSBhWzddLCBhMjIgPSBhWzhdO1xuXG4gIGxldCBiMDAgPSBiWzBdLCBiMDEgPSBiWzFdLCBiMDIgPSBiWzJdO1xuICBsZXQgYjEwID0gYlszXSwgYjExID0gYls0XSwgYjEyID0gYls1XTtcbiAgbGV0IGIyMCA9IGJbNl0sIGIyMSA9IGJbN10sIGIyMiA9IGJbOF07XG5cbiAgb3V0WzBdID0gYjAwICogYTAwICsgYjAxICogYTEwICsgYjAyICogYTIwO1xuICBvdXRbMV0gPSBiMDAgKiBhMDEgKyBiMDEgKiBhMTEgKyBiMDIgKiBhMjE7XG4gIG91dFsyXSA9IGIwMCAqIGEwMiArIGIwMSAqIGExMiArIGIwMiAqIGEyMjtcblxuICBvdXRbM10gPSBiMTAgKiBhMDAgKyBiMTEgKiBhMTAgKyBiMTIgKiBhMjA7XG4gIG91dFs0XSA9IGIxMCAqIGEwMSArIGIxMSAqIGExMSArIGIxMiAqIGEyMTtcbiAgb3V0WzVdID0gYjEwICogYTAyICsgYjExICogYTEyICsgYjEyICogYTIyO1xuXG4gIG91dFs2XSA9IGIyMCAqIGEwMCArIGIyMSAqIGExMCArIGIyMiAqIGEyMDtcbiAgb3V0WzddID0gYjIwICogYTAxICsgYjIxICogYTExICsgYjIyICogYTIxO1xuICBvdXRbOF0gPSBiMjAgKiBhMDIgKyBiMjEgKiBhMTIgKyBiMjIgKiBhMjI7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogVHJhbnNsYXRlIGEgbWF0MyBieSB0aGUgZ2l2ZW4gdmVjdG9yXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgbWF0cml4IHRvIHRyYW5zbGF0ZVxuICogQHBhcmFtIHt2ZWMyfSB2IHZlY3RvciB0byB0cmFuc2xhdGUgYnlcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZShvdXQsIGEsIHYpIHtcbiAgbGV0IGEwMCA9IGFbMF0sIGEwMSA9IGFbMV0sIGEwMiA9IGFbMl0sXG4gICAgYTEwID0gYVszXSwgYTExID0gYVs0XSwgYTEyID0gYVs1XSxcbiAgICBhMjAgPSBhWzZdLCBhMjEgPSBhWzddLCBhMjIgPSBhWzhdLFxuICAgIHggPSB2WzBdLCB5ID0gdlsxXTtcblxuICBvdXRbMF0gPSBhMDA7XG4gIG91dFsxXSA9IGEwMTtcbiAgb3V0WzJdID0gYTAyO1xuXG4gIG91dFszXSA9IGExMDtcbiAgb3V0WzRdID0gYTExO1xuICBvdXRbNV0gPSBhMTI7XG5cbiAgb3V0WzZdID0geCAqIGEwMCArIHkgKiBhMTAgKyBhMjA7XG4gIG91dFs3XSA9IHggKiBhMDEgKyB5ICogYTExICsgYTIxO1xuICBvdXRbOF0gPSB4ICogYTAyICsgeSAqIGExMiArIGEyMjtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSb3RhdGVzIGEgbWF0MyBieSB0aGUgZ2l2ZW4gYW5nbGVcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQzfSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlKG91dCwgYSwgcmFkKSB7XG4gIGxldCBhMDAgPSBhWzBdLCBhMDEgPSBhWzFdLCBhMDIgPSBhWzJdLFxuICAgIGExMCA9IGFbM10sIGExMSA9IGFbNF0sIGExMiA9IGFbNV0sXG4gICAgYTIwID0gYVs2XSwgYTIxID0gYVs3XSwgYTIyID0gYVs4XSxcblxuICAgIHMgPSBNYXRoLnNpbihyYWQpLFxuICAgIGMgPSBNYXRoLmNvcyhyYWQpO1xuXG4gIG91dFswXSA9IGMgKiBhMDAgKyBzICogYTEwO1xuICBvdXRbMV0gPSBjICogYTAxICsgcyAqIGExMTtcbiAgb3V0WzJdID0gYyAqIGEwMiArIHMgKiBhMTI7XG5cbiAgb3V0WzNdID0gYyAqIGExMCAtIHMgKiBhMDA7XG4gIG91dFs0XSA9IGMgKiBhMTEgLSBzICogYTAxO1xuICBvdXRbNV0gPSBjICogYTEyIC0gcyAqIGEwMjtcblxuICBvdXRbNl0gPSBhMjA7XG4gIG91dFs3XSA9IGEyMTtcbiAgb3V0WzhdID0gYTIyO1xuICByZXR1cm4gb3V0O1xufTtcblxuLyoqXG4gKiBTY2FsZXMgdGhlIG1hdDMgYnkgdGhlIGRpbWVuc2lvbnMgaW4gdGhlIGdpdmVuIHZlYzJcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQzfSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXG4gKiBAcGFyYW0ge3ZlYzJ9IHYgdGhlIHZlYzIgdG8gc2NhbGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDN9IG91dFxuICoqL1xuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlKG91dCwgYSwgdikge1xuICBsZXQgeCA9IHZbMF0sIHkgPSB2WzFdO1xuXG4gIG91dFswXSA9IHggKiBhWzBdO1xuICBvdXRbMV0gPSB4ICogYVsxXTtcbiAgb3V0WzJdID0geCAqIGFbMl07XG5cbiAgb3V0WzNdID0geSAqIGFbM107XG4gIG91dFs0XSA9IHkgKiBhWzRdO1xuICBvdXRbNV0gPSB5ICogYVs1XTtcblxuICBvdXRbNl0gPSBhWzZdO1xuICBvdXRbN10gPSBhWzddO1xuICBvdXRbOF0gPSBhWzhdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIHZlY3RvciB0cmFuc2xhdGlvblxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDMuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0My50cmFuc2xhdGUoZGVzdCwgZGVzdCwgdmVjKTtcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCBtYXQzIHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge3ZlYzJ9IHYgVHJhbnNsYXRpb24gdmVjdG9yXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tVHJhbnNsYXRpb24ob3V0LCB2KSB7XG4gIG91dFswXSA9IDE7XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IDE7XG4gIG91dFs1XSA9IDA7XG4gIG91dFs2XSA9IHZbMF07XG4gIG91dFs3XSA9IHZbMV07XG4gIG91dFs4XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgZ2l2ZW4gYW5nbGVcbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxuICpcbiAqICAgICBtYXQzLmlkZW50aXR5KGRlc3QpO1xuICogICAgIG1hdDMucm90YXRlKGRlc3QsIGRlc3QsIHJhZCk7XG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgbWF0MyByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21Sb3RhdGlvbihvdXQsIHJhZCkge1xuICBsZXQgcyA9IE1hdGguc2luKHJhZCksIGMgPSBNYXRoLmNvcyhyYWQpO1xuXG4gIG91dFswXSA9IGM7XG4gIG91dFsxXSA9IHM7XG4gIG91dFsyXSA9IDA7XG5cbiAgb3V0WzNdID0gLXM7XG4gIG91dFs0XSA9IGM7XG4gIG91dFs1XSA9IDA7XG5cbiAgb3V0WzZdID0gMDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSB2ZWN0b3Igc2NhbGluZ1xuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDMuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0My5zY2FsZShkZXN0LCBkZXN0LCB2ZWMpO1xuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IG1hdDMgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7dmVjMn0gdiBTY2FsaW5nIHZlY3RvclxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVNjYWxpbmcob3V0LCB2KSB7XG4gIG91dFswXSA9IHZbMF07XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG5cbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gdlsxXTtcbiAgb3V0WzVdID0gMDtcblxuICBvdXRbNl0gPSAwO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENvcGllcyB0aGUgdmFsdWVzIGZyb20gYSBtYXQyZCBpbnRvIGEgbWF0M1xuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDJkfSBhIHRoZSBtYXRyaXggdG8gY29weVxuICogQHJldHVybnMge21hdDN9IG91dFxuICoqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21NYXQyZChvdXQsIGEpIHtcbiAgb3V0WzBdID0gYVswXTtcbiAgb3V0WzFdID0gYVsxXTtcbiAgb3V0WzJdID0gMDtcblxuICBvdXRbM10gPSBhWzJdO1xuICBvdXRbNF0gPSBhWzNdO1xuICBvdXRbNV0gPSAwO1xuXG4gIG91dFs2XSA9IGFbNF07XG4gIG91dFs3XSA9IGFbNV07XG4gIG91dFs4XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuKiBDYWxjdWxhdGVzIGEgM3gzIG1hdHJpeCBmcm9tIHRoZSBnaXZlbiBxdWF0ZXJuaW9uXG4qXG4qIEBwYXJhbSB7bWF0M30gb3V0IG1hdDMgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiogQHBhcmFtIHtxdWF0fSBxIFF1YXRlcm5pb24gdG8gY3JlYXRlIG1hdHJpeCBmcm9tXG4qXG4qIEByZXR1cm5zIHttYXQzfSBvdXRcbiovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVF1YXQob3V0LCBxKSB7XG4gIGxldCB4ID0gcVswXSwgeSA9IHFbMV0sIHogPSBxWzJdLCB3ID0gcVszXTtcbiAgbGV0IHgyID0geCArIHg7XG4gIGxldCB5MiA9IHkgKyB5O1xuICBsZXQgejIgPSB6ICsgejtcblxuICBsZXQgeHggPSB4ICogeDI7XG4gIGxldCB5eCA9IHkgKiB4MjtcbiAgbGV0IHl5ID0geSAqIHkyO1xuICBsZXQgenggPSB6ICogeDI7XG4gIGxldCB6eSA9IHogKiB5MjtcbiAgbGV0IHp6ID0geiAqIHoyO1xuICBsZXQgd3ggPSB3ICogeDI7XG4gIGxldCB3eSA9IHcgKiB5MjtcbiAgbGV0IHd6ID0gdyAqIHoyO1xuXG4gIG91dFswXSA9IDEgLSB5eSAtIHp6O1xuICBvdXRbM10gPSB5eCAtIHd6O1xuICBvdXRbNl0gPSB6eCArIHd5O1xuXG4gIG91dFsxXSA9IHl4ICsgd3o7XG4gIG91dFs0XSA9IDEgLSB4eCAtIHp6O1xuICBvdXRbN10gPSB6eSAtIHd4O1xuXG4gIG91dFsyXSA9IHp4IC0gd3k7XG4gIG91dFs1XSA9IHp5ICsgd3g7XG4gIG91dFs4XSA9IDEgLSB4eCAtIHl5O1xuXG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuKiBDYWxjdWxhdGVzIGEgM3gzIG5vcm1hbCBtYXRyaXggKHRyYW5zcG9zZSBpbnZlcnNlKSBmcm9tIHRoZSA0eDQgbWF0cml4XG4qXG4qIEBwYXJhbSB7bWF0M30gb3V0IG1hdDMgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiogQHBhcmFtIHttYXQ0fSBhIE1hdDQgdG8gZGVyaXZlIHRoZSBub3JtYWwgbWF0cml4IGZyb21cbipcbiogQHJldHVybnMge21hdDN9IG91dFxuKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxGcm9tTWF0NChvdXQsIGEpIHtcbiAgbGV0IGEwMCA9IGFbMF0sIGEwMSA9IGFbMV0sIGEwMiA9IGFbMl0sIGEwMyA9IGFbM107XG4gIGxldCBhMTAgPSBhWzRdLCBhMTEgPSBhWzVdLCBhMTIgPSBhWzZdLCBhMTMgPSBhWzddO1xuICBsZXQgYTIwID0gYVs4XSwgYTIxID0gYVs5XSwgYTIyID0gYVsxMF0sIGEyMyA9IGFbMTFdO1xuICBsZXQgYTMwID0gYVsxMl0sIGEzMSA9IGFbMTNdLCBhMzIgPSBhWzE0XSwgYTMzID0gYVsxNV07XG5cbiAgbGV0IGIwMCA9IGEwMCAqIGExMSAtIGEwMSAqIGExMDtcbiAgbGV0IGIwMSA9IGEwMCAqIGExMiAtIGEwMiAqIGExMDtcbiAgbGV0IGIwMiA9IGEwMCAqIGExMyAtIGEwMyAqIGExMDtcbiAgbGV0IGIwMyA9IGEwMSAqIGExMiAtIGEwMiAqIGExMTtcbiAgbGV0IGIwNCA9IGEwMSAqIGExMyAtIGEwMyAqIGExMTtcbiAgbGV0IGIwNSA9IGEwMiAqIGExMyAtIGEwMyAqIGExMjtcbiAgbGV0IGIwNiA9IGEyMCAqIGEzMSAtIGEyMSAqIGEzMDtcbiAgbGV0IGIwNyA9IGEyMCAqIGEzMiAtIGEyMiAqIGEzMDtcbiAgbGV0IGIwOCA9IGEyMCAqIGEzMyAtIGEyMyAqIGEzMDtcbiAgbGV0IGIwOSA9IGEyMSAqIGEzMiAtIGEyMiAqIGEzMTtcbiAgbGV0IGIxMCA9IGEyMSAqIGEzMyAtIGEyMyAqIGEzMTtcbiAgbGV0IGIxMSA9IGEyMiAqIGEzMyAtIGEyMyAqIGEzMjtcblxuICAvLyBDYWxjdWxhdGUgdGhlIGRldGVybWluYW50XG4gIGxldCBkZXQgPSBiMDAgKiBiMTEgLSBiMDEgKiBiMTAgKyBiMDIgKiBiMDkgKyBiMDMgKiBiMDggLSBiMDQgKiBiMDcgKyBiMDUgKiBiMDY7XG5cbiAgaWYgKCFkZXQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBkZXQgPSAxLjAgLyBkZXQ7XG5cbiAgb3V0WzBdID0gKGExMSAqIGIxMSAtIGExMiAqIGIxMCArIGExMyAqIGIwOSkgKiBkZXQ7XG4gIG91dFsxXSA9IChhMTIgKiBiMDggLSBhMTAgKiBiMTEgLSBhMTMgKiBiMDcpICogZGV0O1xuICBvdXRbMl0gPSAoYTEwICogYjEwIC0gYTExICogYjA4ICsgYTEzICogYjA2KSAqIGRldDtcblxuICBvdXRbM10gPSAoYTAyICogYjEwIC0gYTAxICogYjExIC0gYTAzICogYjA5KSAqIGRldDtcbiAgb3V0WzRdID0gKGEwMCAqIGIxMSAtIGEwMiAqIGIwOCArIGEwMyAqIGIwNykgKiBkZXQ7XG4gIG91dFs1XSA9IChhMDEgKiBiMDggLSBhMDAgKiBiMTAgLSBhMDMgKiBiMDYpICogZGV0O1xuXG4gIG91dFs2XSA9IChhMzEgKiBiMDUgLSBhMzIgKiBiMDQgKyBhMzMgKiBiMDMpICogZGV0O1xuICBvdXRbN10gPSAoYTMyICogYjAyIC0gYTMwICogYjA1IC0gYTMzICogYjAxKSAqIGRldDtcbiAgb3V0WzhdID0gKGEzMCAqIGIwNCAtIGEzMSAqIGIwMiArIGEzMyAqIGIwMCkgKiBkZXQ7XG5cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSAyRCBwcm9qZWN0aW9uIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBib3VuZHNcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCBtYXQzIGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXG4gKiBAcGFyYW0ge251bWJlcn0gd2lkdGggV2lkdGggb2YgeW91ciBnbCBjb250ZXh0XG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IEhlaWdodCBvZiBnbCBjb250ZXh0XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0aW9uKG91dCwgd2lkdGgsIGhlaWdodCkge1xuICAgIG91dFswXSA9IDIgLyB3aWR0aDtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSAtMiAvIGhlaWdodDtcbiAgICBvdXRbNV0gPSAwO1xuICAgIG91dFs2XSA9IC0xO1xuICAgIG91dFs3XSA9IDE7XG4gICAgb3V0WzhdID0gMTtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBtYXQzXG4gKlxuICogQHBhcmFtIHttYXQzfSBhIG1hdHJpeCB0byByZXByZXNlbnQgYXMgYSBzdHJpbmdcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgbWF0cml4XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHIoYSkge1xuICByZXR1cm4gJ21hdDMoJyArIGFbMF0gKyAnLCAnICsgYVsxXSArICcsICcgKyBhWzJdICsgJywgJyArXG4gICAgICAgICAgYVszXSArICcsICcgKyBhWzRdICsgJywgJyArIGFbNV0gKyAnLCAnICtcbiAgICAgICAgICBhWzZdICsgJywgJyArIGFbN10gKyAnLCAnICsgYVs4XSArICcpJztcbn1cblxuLyoqXG4gKiBSZXR1cm5zIEZyb2Jlbml1cyBub3JtIG9mIGEgbWF0M1xuICpcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgbWF0cml4IHRvIGNhbGN1bGF0ZSBGcm9iZW5pdXMgbm9ybSBvZlxuICogQHJldHVybnMge051bWJlcn0gRnJvYmVuaXVzIG5vcm1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb2IoYSkge1xuICByZXR1cm4oTWF0aC5zcXJ0KE1hdGgucG93KGFbMF0sIDIpICsgTWF0aC5wb3coYVsxXSwgMikgKyBNYXRoLnBvdyhhWzJdLCAyKSArIE1hdGgucG93KGFbM10sIDIpICsgTWF0aC5wb3coYVs0XSwgMikgKyBNYXRoLnBvdyhhWzVdLCAyKSArIE1hdGgucG93KGFbNl0sIDIpICsgTWF0aC5wb3coYVs3XSwgMikgKyBNYXRoLnBvdyhhWzhdLCAyKSkpXG59XG5cbi8qKlxuICogQWRkcyB0d28gbWF0MydzXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHttYXQzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICsgYlswXTtcbiAgb3V0WzFdID0gYVsxXSArIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gKyBiWzJdO1xuICBvdXRbM10gPSBhWzNdICsgYlszXTtcbiAgb3V0WzRdID0gYVs0XSArIGJbNF07XG4gIG91dFs1XSA9IGFbNV0gKyBiWzVdO1xuICBvdXRbNl0gPSBhWzZdICsgYls2XTtcbiAgb3V0WzddID0gYVs3XSArIGJbN107XG4gIG91dFs4XSA9IGFbOF0gKyBiWzhdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFN1YnRyYWN0cyBtYXRyaXggYiBmcm9tIG1hdHJpeCBhXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHttYXQzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3Qob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gLSBiWzBdO1xuICBvdXRbMV0gPSBhWzFdIC0gYlsxXTtcbiAgb3V0WzJdID0gYVsyXSAtIGJbMl07XG4gIG91dFszXSA9IGFbM10gLSBiWzNdO1xuICBvdXRbNF0gPSBhWzRdIC0gYls0XTtcbiAgb3V0WzVdID0gYVs1XSAtIGJbNV07XG4gIG91dFs2XSA9IGFbNl0gLSBiWzZdO1xuICBvdXRbN10gPSBhWzddIC0gYls3XTtcbiAgb3V0WzhdID0gYVs4XSAtIGJbOF07XG4gIHJldHVybiBvdXQ7XG59XG5cblxuXG4vKipcbiAqIE11bHRpcGx5IGVhY2ggZWxlbWVudCBvZiB0aGUgbWF0cml4IGJ5IGEgc2NhbGFyLlxuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIG1hdHJpeCB0byBzY2FsZVxuICogQHBhcmFtIHtOdW1iZXJ9IGIgYW1vdW50IHRvIHNjYWxlIHRoZSBtYXRyaXgncyBlbGVtZW50cyBieVxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHlTY2FsYXIob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKiBiO1xuICBvdXRbMV0gPSBhWzFdICogYjtcbiAgb3V0WzJdID0gYVsyXSAqIGI7XG4gIG91dFszXSA9IGFbM10gKiBiO1xuICBvdXRbNF0gPSBhWzRdICogYjtcbiAgb3V0WzVdID0gYVs1XSAqIGI7XG4gIG91dFs2XSA9IGFbNl0gKiBiO1xuICBvdXRbN10gPSBhWzddICogYjtcbiAgb3V0WzhdID0gYVs4XSAqIGI7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQWRkcyB0d28gbWF0MydzIGFmdGVyIG11bHRpcGx5aW5nIGVhY2ggZWxlbWVudCBvZiB0aGUgc2Vjb25kIG9wZXJhbmQgYnkgYSBzY2FsYXIgdmFsdWUuXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHttYXQzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxlIHRoZSBhbW91bnQgdG8gc2NhbGUgYidzIGVsZW1lbnRzIGJ5IGJlZm9yZSBhZGRpbmdcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5U2NhbGFyQW5kQWRkKG91dCwgYSwgYiwgc2NhbGUpIHtcbiAgb3V0WzBdID0gYVswXSArIChiWzBdICogc2NhbGUpO1xuICBvdXRbMV0gPSBhWzFdICsgKGJbMV0gKiBzY2FsZSk7XG4gIG91dFsyXSA9IGFbMl0gKyAoYlsyXSAqIHNjYWxlKTtcbiAgb3V0WzNdID0gYVszXSArIChiWzNdICogc2NhbGUpO1xuICBvdXRbNF0gPSBhWzRdICsgKGJbNF0gKiBzY2FsZSk7XG4gIG91dFs1XSA9IGFbNV0gKyAoYls1XSAqIHNjYWxlKTtcbiAgb3V0WzZdID0gYVs2XSArIChiWzZdICogc2NhbGUpO1xuICBvdXRbN10gPSBhWzddICsgKGJbN10gKiBzY2FsZSk7XG4gIG91dFs4XSA9IGFbOF0gKyAoYls4XSAqIHNjYWxlKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSBtYXRyaWNlcyBoYXZlIGV4YWN0bHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24gKHdoZW4gY29tcGFyZWQgd2l0aCA9PT0pXG4gKlxuICogQHBhcmFtIHttYXQzfSBhIFRoZSBmaXJzdCBtYXRyaXguXG4gKiBAcGFyYW0ge21hdDN9IGIgVGhlIHNlY29uZCBtYXRyaXguXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgbWF0cmljZXMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGFjdEVxdWFscyhhLCBiKSB7XG4gIHJldHVybiBhWzBdID09PSBiWzBdICYmIGFbMV0gPT09IGJbMV0gJiYgYVsyXSA9PT0gYlsyXSAmJlxuICAgICAgICAgYVszXSA9PT0gYlszXSAmJiBhWzRdID09PSBiWzRdICYmIGFbNV0gPT09IGJbNV0gJiZcbiAgICAgICAgIGFbNl0gPT09IGJbNl0gJiYgYVs3XSA9PT0gYls3XSAmJiBhWzhdID09PSBiWzhdO1xufVxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIG1hdHJpY2VzIGhhdmUgYXBwcm94aW1hdGVseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbi5cbiAqXG4gKiBAcGFyYW0ge21hdDN9IGEgVGhlIGZpcnN0IG1hdHJpeC5cbiAqIEBwYXJhbSB7bWF0M30gYiBUaGUgc2Vjb25kIG1hdHJpeC5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSBtYXRyaWNlcyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVxdWFscyhhLCBiKSB7XG4gIGxldCBhMCA9IGFbMF0sIGExID0gYVsxXSwgYTIgPSBhWzJdLCBhMyA9IGFbM10sIGE0ID0gYVs0XSwgYTUgPSBhWzVdLCBhNiA9IGFbNl0sIGE3ID0gYVs3XSwgYTggPSBhWzhdO1xuICBsZXQgYjAgPSBiWzBdLCBiMSA9IGJbMV0sIGIyID0gYlsyXSwgYjMgPSBiWzNdLCBiNCA9IGJbNF0sIGI1ID0gYls1XSwgYjYgPSBiWzZdLCBiNyA9IGJbN10sIGI4ID0gYls4XTtcbiAgcmV0dXJuIChNYXRoLmFicyhhMCAtIGIwKSA8PSBnbE1hdHJpeC5FUFNJTE9OKk1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTApLCBNYXRoLmFicyhiMCkpICYmXG4gICAgICAgICAgTWF0aC5hYnMoYTEgLSBiMSkgPD0gZ2xNYXRyaXguRVBTSUxPTipNYXRoLm1heCgxLjAsIE1hdGguYWJzKGExKSwgTWF0aC5hYnMoYjEpKSAmJlxuICAgICAgICAgIE1hdGguYWJzKGEyIC0gYjIpIDw9IGdsTWF0cml4LkVQU0lMT04qTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMiksIE1hdGguYWJzKGIyKSkgJiZcbiAgICAgICAgICBNYXRoLmFicyhhMyAtIGIzKSA8PSBnbE1hdHJpeC5FUFNJTE9OKk1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTMpLCBNYXRoLmFicyhiMykpICYmXG4gICAgICAgICAgTWF0aC5hYnMoYTQgLSBiNCkgPD0gZ2xNYXRyaXguRVBTSUxPTipNYXRoLm1heCgxLjAsIE1hdGguYWJzKGE0KSwgTWF0aC5hYnMoYjQpKSAmJlxuICAgICAgICAgIE1hdGguYWJzKGE1IC0gYjUpIDw9IGdsTWF0cml4LkVQU0lMT04qTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhNSksIE1hdGguYWJzKGI1KSkgJiZcbiAgICAgICAgICBNYXRoLmFicyhhNiAtIGI2KSA8PSBnbE1hdHJpeC5FUFNJTE9OKk1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTYpLCBNYXRoLmFicyhiNikpICYmXG4gICAgICAgICAgTWF0aC5hYnMoYTcgLSBiNykgPD0gZ2xNYXRyaXguRVBTSUxPTipNYXRoLm1heCgxLjAsIE1hdGguYWJzKGE3KSwgTWF0aC5hYnMoYjcpKSAmJlxuICAgICAgICAgIE1hdGguYWJzKGE4IC0gYjgpIDw9IGdsTWF0cml4LkVQU0lMT04qTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhOCksIE1hdGguYWJzKGI4KSkpO1xufVxuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgbWF0My5tdWx0aXBseX1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3QgbXVsID0gbXVsdGlwbHk7XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayBtYXQzLnN1YnRyYWN0fVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBzdWIgPSBzdWJ0cmFjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dsLW1hdHJpeC9zcmMvZ2wtbWF0cml4L21hdDMuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIENvcHlyaWdodCAoYykgMjAxNSwgQnJhbmRvbiBKb25lcywgQ29saW4gTWFjS2VuemllIElWLlxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbmZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG5hbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG5USEUgU09GVFdBUkUuICovXG5cbmltcG9ydCAqIGFzIGdsTWF0cml4IGZyb20gXCIuL2NvbW1vblwiO1xuXG4vKipcbiAqIDMgRGltZW5zaW9uYWwgVmVjdG9yXG4gKiBAbW9kdWxlIHZlYzNcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcsIGVtcHR5IHZlYzNcbiAqXG4gKiBAcmV0dXJucyB7dmVjM30gYSBuZXcgM0QgdmVjdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gIGxldCBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSgzKTtcbiAgb3V0WzBdID0gMDtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHZlYzMgaW5pdGlhbGl6ZWQgd2l0aCB2YWx1ZXMgZnJvbSBhbiBleGlzdGluZyB2ZWN0b3JcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdmVjdG9yIHRvIGNsb25lXG4gKiBAcmV0dXJucyB7dmVjM30gYSBuZXcgM0QgdmVjdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShhKSB7XG4gIHZhciBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSgzKTtcbiAgb3V0WzBdID0gYVswXTtcbiAgb3V0WzFdID0gYVsxXTtcbiAgb3V0WzJdID0gYVsyXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBsZW5ndGggb2YgYSB2ZWMzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBhIHZlY3RvciB0byBjYWxjdWxhdGUgbGVuZ3RoIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBsZW5ndGggb2YgYVxuICovXG5leHBvcnQgZnVuY3Rpb24gbGVuZ3RoKGEpIHtcbiAgbGV0IHggPSBhWzBdO1xuICBsZXQgeSA9IGFbMV07XG4gIGxldCB6ID0gYVsyXTtcbiAgcmV0dXJuIE1hdGguc3FydCh4KnggKyB5KnkgKyB6KnopO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgdmVjMyBpbml0aWFsaXplZCB3aXRoIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0geCBYIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB6IFogY29tcG9uZW50XG4gKiBAcmV0dXJucyB7dmVjM30gYSBuZXcgM0QgdmVjdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tVmFsdWVzKHgsIHksIHopIHtcbiAgbGV0IG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDMpO1xuICBvdXRbMF0gPSB4O1xuICBvdXRbMV0gPSB5O1xuICBvdXRbMl0gPSB6O1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENvcHkgdGhlIHZhbHVlcyBmcm9tIG9uZSB2ZWMzIHRvIGFub3RoZXJcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBzb3VyY2UgdmVjdG9yXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KG91dCwgYSkge1xuICBvdXRbMF0gPSBhWzBdO1xuICBvdXRbMV0gPSBhWzFdO1xuICBvdXRbMl0gPSBhWzJdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzMgdG8gdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge051bWJlcn0geCBYIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB6IFogY29tcG9uZW50XG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXQob3V0LCB4LCB5LCB6KSB7XG4gIG91dFswXSA9IHg7XG4gIG91dFsxXSA9IHk7XG4gIG91dFsyXSA9IHo7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQWRkcyB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICsgYlswXTtcbiAgb3V0WzFdID0gYVsxXSArIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gKyBiWzJdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFN1YnRyYWN0cyB2ZWN0b3IgYiBmcm9tIHZlY3RvciBhXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3Qob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gLSBiWzBdO1xuICBvdXRbMV0gPSBhWzFdIC0gYlsxXTtcbiAgb3V0WzJdID0gYVsyXSAtIGJbMl07XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogTXVsdGlwbGllcyB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKiBiWzBdO1xuICBvdXRbMV0gPSBhWzFdICogYlsxXTtcbiAgb3V0WzJdID0gYVsyXSAqIGJbMl07XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogRGl2aWRlcyB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGl2aWRlKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdIC8gYlswXTtcbiAgb3V0WzFdID0gYVsxXSAvIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gLyBiWzJdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIE1hdGguY2VpbCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzNcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHZlY3RvciB0byBjZWlsXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjZWlsKG91dCwgYSkge1xuICBvdXRbMF0gPSBNYXRoLmNlaWwoYVswXSk7XG4gIG91dFsxXSA9IE1hdGguY2VpbChhWzFdKTtcbiAgb3V0WzJdID0gTWF0aC5jZWlsKGFbMl0pO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIE1hdGguZmxvb3IgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB2ZWN0b3IgdG8gZmxvb3JcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZsb29yKG91dCwgYSkge1xuICBvdXRbMF0gPSBNYXRoLmZsb29yKGFbMF0pO1xuICBvdXRbMV0gPSBNYXRoLmZsb29yKGFbMV0pO1xuICBvdXRbMl0gPSBNYXRoLmZsb29yKGFbMl0pO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG1pbmltdW0gb2YgdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1pbihvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gTWF0aC5taW4oYVswXSwgYlswXSk7XG4gIG91dFsxXSA9IE1hdGgubWluKGFbMV0sIGJbMV0pO1xuICBvdXRbMl0gPSBNYXRoLm1pbihhWzJdLCBiWzJdKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBtYXhpbXVtIG9mIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXgob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IE1hdGgubWF4KGFbMF0sIGJbMF0pO1xuICBvdXRbMV0gPSBNYXRoLm1heChhWzFdLCBiWzFdKTtcbiAgb3V0WzJdID0gTWF0aC5tYXgoYVsyXSwgYlsyXSk7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogTWF0aC5yb3VuZCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzNcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHZlY3RvciB0byByb3VuZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcm91bmQob3V0LCBhKSB7XG4gIG91dFswXSA9IE1hdGgucm91bmQoYVswXSk7XG4gIG91dFsxXSA9IE1hdGgucm91bmQoYVsxXSk7XG4gIG91dFsyXSA9IE1hdGgucm91bmQoYVsyXSk7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU2NhbGVzIGEgdmVjMyBieSBhIHNjYWxhciBudW1iZXJcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSB2ZWN0b3IgdG8gc2NhbGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBiIGFtb3VudCB0byBzY2FsZSB0aGUgdmVjdG9yIGJ5XG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZShvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAqIGI7XG4gIG91dFsxXSA9IGFbMV0gKiBiO1xuICBvdXRbMl0gPSBhWzJdICogYjtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBBZGRzIHR3byB2ZWMzJ3MgYWZ0ZXIgc2NhbGluZyB0aGUgc2Vjb25kIG9wZXJhbmQgYnkgYSBzY2FsYXIgdmFsdWVcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gc2NhbGUgdGhlIGFtb3VudCB0byBzY2FsZSBiIGJ5IGJlZm9yZSBhZGRpbmdcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlQW5kQWRkKG91dCwgYSwgYiwgc2NhbGUpIHtcbiAgb3V0WzBdID0gYVswXSArIChiWzBdICogc2NhbGUpO1xuICBvdXRbMV0gPSBhWzFdICsgKGJbMV0gKiBzY2FsZSk7XG4gIG91dFsyXSA9IGFbMl0gKyAoYlsyXSAqIHNjYWxlKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBldWNsaWRpYW4gZGlzdGFuY2UgYmV0d2VlbiB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkaXN0YW5jZSBiZXR3ZWVuIGEgYW5kIGJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpc3RhbmNlKGEsIGIpIHtcbiAgbGV0IHggPSBiWzBdIC0gYVswXTtcbiAgbGV0IHkgPSBiWzFdIC0gYVsxXTtcbiAgbGV0IHogPSBiWzJdIC0gYVsyXTtcbiAgcmV0dXJuIE1hdGguc3FydCh4KnggKyB5KnkgKyB6KnopO1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgZXVjbGlkaWFuIGRpc3RhbmNlIGJldHdlZW4gdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gc3F1YXJlZCBkaXN0YW5jZSBiZXR3ZWVuIGEgYW5kIGJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNxdWFyZWREaXN0YW5jZShhLCBiKSB7XG4gIGxldCB4ID0gYlswXSAtIGFbMF07XG4gIGxldCB5ID0gYlsxXSAtIGFbMV07XG4gIGxldCB6ID0gYlsyXSAtIGFbMl07XG4gIHJldHVybiB4KnggKyB5KnkgKyB6Kno7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgc3F1YXJlZCBsZW5ndGggb2YgYSB2ZWMzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBhIHZlY3RvciB0byBjYWxjdWxhdGUgc3F1YXJlZCBsZW5ndGggb2ZcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHNxdWFyZWQgbGVuZ3RoIG9mIGFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNxdWFyZWRMZW5ndGgoYSkge1xuICBsZXQgeCA9IGFbMF07XG4gIGxldCB5ID0gYVsxXTtcbiAgbGV0IHogPSBhWzJdO1xuICByZXR1cm4geCp4ICsgeSp5ICsgeip6O1xufVxuXG4vKipcbiAqIE5lZ2F0ZXMgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB2ZWN0b3IgdG8gbmVnYXRlXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGUob3V0LCBhKSB7XG4gIG91dFswXSA9IC1hWzBdO1xuICBvdXRbMV0gPSAtYVsxXTtcbiAgb3V0WzJdID0gLWFbMl07XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgaW52ZXJzZSBvZiB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzNcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHZlY3RvciB0byBpbnZlcnRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludmVyc2Uob3V0LCBhKSB7XG4gIG91dFswXSA9IDEuMCAvIGFbMF07XG4gIG91dFsxXSA9IDEuMCAvIGFbMV07XG4gIG91dFsyXSA9IDEuMCAvIGFbMl07XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogTm9ybWFsaXplIGEgdmVjM1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdmVjdG9yIHRvIG5vcm1hbGl6ZVxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplKG91dCwgYSkge1xuICBsZXQgeCA9IGFbMF07XG4gIGxldCB5ID0gYVsxXTtcbiAgbGV0IHogPSBhWzJdO1xuICBsZXQgbGVuID0geCp4ICsgeSp5ICsgeip6O1xuICBpZiAobGVuID4gMCkge1xuICAgIC8vVE9ETzogZXZhbHVhdGUgdXNlIG9mIGdsbV9pbnZzcXJ0IGhlcmU/XG4gICAgbGVuID0gMSAvIE1hdGguc3FydChsZW4pO1xuICAgIG91dFswXSA9IGFbMF0gKiBsZW47XG4gICAgb3V0WzFdID0gYVsxXSAqIGxlbjtcbiAgICBvdXRbMl0gPSBhWzJdICogbGVuO1xuICB9XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZG90IHByb2R1Y3Qgb2YgdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gZG90IHByb2R1Y3Qgb2YgYSBhbmQgYlxuICovXG5leHBvcnQgZnVuY3Rpb24gZG90KGEsIGIpIHtcbiAgcmV0dXJuIGFbMF0gKiBiWzBdICsgYVsxXSAqIGJbMV0gKyBhWzJdICogYlsyXTtcbn1cblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgY3Jvc3MgcHJvZHVjdCBvZiB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3Jvc3Mob3V0LCBhLCBiKSB7XG4gIGxldCBheCA9IGFbMF0sIGF5ID0gYVsxXSwgYXogPSBhWzJdO1xuICBsZXQgYnggPSBiWzBdLCBieSA9IGJbMV0sIGJ6ID0gYlsyXTtcblxuICBvdXRbMF0gPSBheSAqIGJ6IC0gYXogKiBieTtcbiAgb3V0WzFdID0gYXogKiBieCAtIGF4ICogYno7XG4gIG91dFsyXSA9IGF4ICogYnkgLSBheSAqIGJ4O1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFBlcmZvcm1zIGEgbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbGVycChvdXQsIGEsIGIsIHQpIHtcbiAgbGV0IGF4ID0gYVswXTtcbiAgbGV0IGF5ID0gYVsxXTtcbiAgbGV0IGF6ID0gYVsyXTtcbiAgb3V0WzBdID0gYXggKyB0ICogKGJbMF0gLSBheCk7XG4gIG91dFsxXSA9IGF5ICsgdCAqIChiWzFdIC0gYXkpO1xuICBvdXRbMl0gPSBheiArIHQgKiAoYlsyXSAtIGF6KTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBQZXJmb3JtcyBhIGhlcm1pdGUgaW50ZXJwb2xhdGlvbiB3aXRoIHR3byBjb250cm9sIHBvaW50c1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYyB0aGUgdGhpcmQgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBkIHRoZSBmb3VydGggb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gaGVybWl0ZShvdXQsIGEsIGIsIGMsIGQsIHQpIHtcbiAgbGV0IGZhY3RvclRpbWVzMiA9IHQgKiB0O1xuICBsZXQgZmFjdG9yMSA9IGZhY3RvclRpbWVzMiAqICgyICogdCAtIDMpICsgMTtcbiAgbGV0IGZhY3RvcjIgPSBmYWN0b3JUaW1lczIgKiAodCAtIDIpICsgdDtcbiAgbGV0IGZhY3RvcjMgPSBmYWN0b3JUaW1lczIgKiAodCAtIDEpO1xuICBsZXQgZmFjdG9yNCA9IGZhY3RvclRpbWVzMiAqICgzIC0gMiAqIHQpO1xuXG4gIG91dFswXSA9IGFbMF0gKiBmYWN0b3IxICsgYlswXSAqIGZhY3RvcjIgKyBjWzBdICogZmFjdG9yMyArIGRbMF0gKiBmYWN0b3I0O1xuICBvdXRbMV0gPSBhWzFdICogZmFjdG9yMSArIGJbMV0gKiBmYWN0b3IyICsgY1sxXSAqIGZhY3RvcjMgKyBkWzFdICogZmFjdG9yNDtcbiAgb3V0WzJdID0gYVsyXSAqIGZhY3RvcjEgKyBiWzJdICogZmFjdG9yMiArIGNbMl0gKiBmYWN0b3IzICsgZFsyXSAqIGZhY3RvcjQ7XG5cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBQZXJmb3JtcyBhIGJlemllciBpbnRlcnBvbGF0aW9uIHdpdGggdHdvIGNvbnRyb2wgcG9pbnRzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBjIHRoZSB0aGlyZCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGQgdGhlIGZvdXJ0aCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gdCBpbnRlcnBvbGF0aW9uIGFtb3VudCBiZXR3ZWVuIHRoZSB0d28gaW5wdXRzXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiZXppZXIob3V0LCBhLCBiLCBjLCBkLCB0KSB7XG4gIGxldCBpbnZlcnNlRmFjdG9yID0gMSAtIHQ7XG4gIGxldCBpbnZlcnNlRmFjdG9yVGltZXNUd28gPSBpbnZlcnNlRmFjdG9yICogaW52ZXJzZUZhY3RvcjtcbiAgbGV0IGZhY3RvclRpbWVzMiA9IHQgKiB0O1xuICBsZXQgZmFjdG9yMSA9IGludmVyc2VGYWN0b3JUaW1lc1R3byAqIGludmVyc2VGYWN0b3I7XG4gIGxldCBmYWN0b3IyID0gMyAqIHQgKiBpbnZlcnNlRmFjdG9yVGltZXNUd287XG4gIGxldCBmYWN0b3IzID0gMyAqIGZhY3RvclRpbWVzMiAqIGludmVyc2VGYWN0b3I7XG4gIGxldCBmYWN0b3I0ID0gZmFjdG9yVGltZXMyICogdDtcblxuICBvdXRbMF0gPSBhWzBdICogZmFjdG9yMSArIGJbMF0gKiBmYWN0b3IyICsgY1swXSAqIGZhY3RvcjMgKyBkWzBdICogZmFjdG9yNDtcbiAgb3V0WzFdID0gYVsxXSAqIGZhY3RvcjEgKyBiWzFdICogZmFjdG9yMiArIGNbMV0gKiBmYWN0b3IzICsgZFsxXSAqIGZhY3RvcjQ7XG4gIG91dFsyXSA9IGFbMl0gKiBmYWN0b3IxICsgYlsyXSAqIGZhY3RvcjIgKyBjWzJdICogZmFjdG9yMyArIGRbMl0gKiBmYWN0b3I0O1xuXG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgcmFuZG9tIHZlY3RvciB3aXRoIHRoZSBnaXZlbiBzY2FsZVxuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge051bWJlcn0gW3NjYWxlXSBMZW5ndGggb2YgdGhlIHJlc3VsdGluZyB2ZWN0b3IuIElmIG9tbWl0dGVkLCBhIHVuaXQgdmVjdG9yIHdpbGwgYmUgcmV0dXJuZWRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbShvdXQsIHNjYWxlKSB7XG4gIHNjYWxlID0gc2NhbGUgfHwgMS4wO1xuXG4gIGxldCByID0gZ2xNYXRyaXguUkFORE9NKCkgKiAyLjAgKiBNYXRoLlBJO1xuICBsZXQgeiA9IChnbE1hdHJpeC5SQU5ET00oKSAqIDIuMCkgLSAxLjA7XG4gIGxldCB6U2NhbGUgPSBNYXRoLnNxcnQoMS4wLXoqeikgKiBzY2FsZTtcblxuICBvdXRbMF0gPSBNYXRoLmNvcyhyKSAqIHpTY2FsZTtcbiAgb3V0WzFdID0gTWF0aC5zaW4ocikgKiB6U2NhbGU7XG4gIG91dFsyXSA9IHogKiBzY2FsZTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWMzIHdpdGggYSBtYXQ0LlxuICogNHRoIHZlY3RvciBjb21wb25lbnQgaXMgaW1wbGljaXRseSAnMSdcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXG4gKiBAcGFyYW0ge21hdDR9IG0gbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1NYXQ0KG91dCwgYSwgbSkge1xuICBsZXQgeCA9IGFbMF0sIHkgPSBhWzFdLCB6ID0gYVsyXTtcbiAgbGV0IHcgPSBtWzNdICogeCArIG1bN10gKiB5ICsgbVsxMV0gKiB6ICsgbVsxNV07XG4gIHcgPSB3IHx8IDEuMDtcbiAgb3V0WzBdID0gKG1bMF0gKiB4ICsgbVs0XSAqIHkgKyBtWzhdICogeiArIG1bMTJdKSAvIHc7XG4gIG91dFsxXSA9IChtWzFdICogeCArIG1bNV0gKiB5ICsgbVs5XSAqIHogKyBtWzEzXSkgLyB3O1xuICBvdXRbMl0gPSAobVsyXSAqIHggKyBtWzZdICogeSArIG1bMTBdICogeiArIG1bMTRdKSAvIHc7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjMyB3aXRoIGEgbWF0My5cbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXG4gKiBAcGFyYW0ge21hdDN9IG0gdGhlIDN4MyBtYXRyaXggdG8gdHJhbnNmb3JtIHdpdGhcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybU1hdDMob3V0LCBhLCBtKSB7XG4gIGxldCB4ID0gYVswXSwgeSA9IGFbMV0sIHogPSBhWzJdO1xuICBvdXRbMF0gPSB4ICogbVswXSArIHkgKiBtWzNdICsgeiAqIG1bNl07XG4gIG91dFsxXSA9IHggKiBtWzFdICsgeSAqIG1bNF0gKyB6ICogbVs3XTtcbiAgb3V0WzJdID0geCAqIG1bMl0gKyB5ICogbVs1XSArIHogKiBtWzhdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzMgd2l0aCBhIHF1YXRcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXG4gKiBAcGFyYW0ge3F1YXR9IHEgcXVhdGVybmlvbiB0byB0cmFuc2Zvcm0gd2l0aFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtUXVhdChvdXQsIGEsIHEpIHtcbiAgLy8gYmVuY2htYXJrczogaHR0cDovL2pzcGVyZi5jb20vcXVhdGVybmlvbi10cmFuc2Zvcm0tdmVjMy1pbXBsZW1lbnRhdGlvbnNcblxuICBsZXQgeCA9IGFbMF0sIHkgPSBhWzFdLCB6ID0gYVsyXTtcbiAgbGV0IHF4ID0gcVswXSwgcXkgPSBxWzFdLCBxeiA9IHFbMl0sIHF3ID0gcVszXTtcblxuICAvLyBjYWxjdWxhdGUgcXVhdCAqIHZlY1xuICBsZXQgaXggPSBxdyAqIHggKyBxeSAqIHogLSBxeiAqIHk7XG4gIGxldCBpeSA9IHF3ICogeSArIHF6ICogeCAtIHF4ICogejtcbiAgbGV0IGl6ID0gcXcgKiB6ICsgcXggKiB5IC0gcXkgKiB4O1xuICBsZXQgaXcgPSAtcXggKiB4IC0gcXkgKiB5IC0gcXogKiB6O1xuXG4gIC8vIGNhbGN1bGF0ZSByZXN1bHQgKiBpbnZlcnNlIHF1YXRcbiAgb3V0WzBdID0gaXggKiBxdyArIGl3ICogLXF4ICsgaXkgKiAtcXogLSBpeiAqIC1xeTtcbiAgb3V0WzFdID0gaXkgKiBxdyArIGl3ICogLXF5ICsgaXogKiAtcXggLSBpeCAqIC1xejtcbiAgb3V0WzJdID0gaXogKiBxdyArIGl3ICogLXF6ICsgaXggKiAtcXkgLSBpeSAqIC1xeDtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSb3RhdGUgYSAzRCB2ZWN0b3IgYXJvdW5kIHRoZSB4LWF4aXNcbiAqIEBwYXJhbSB7dmVjM30gb3V0IFRoZSByZWNlaXZpbmcgdmVjM1xuICogQHBhcmFtIHt2ZWMzfSBhIFRoZSB2ZWMzIHBvaW50IHRvIHJvdGF0ZVxuICogQHBhcmFtIHt2ZWMzfSBiIFRoZSBvcmlnaW4gb2YgdGhlIHJvdGF0aW9uXG4gKiBAcGFyYW0ge051bWJlcn0gYyBUaGUgYW5nbGUgb2Ygcm90YXRpb25cbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVgob3V0LCBhLCBiLCBjKXtcbiAgbGV0IHAgPSBbXSwgcj1bXTtcbiAgLy9UcmFuc2xhdGUgcG9pbnQgdG8gdGhlIG9yaWdpblxuICBwWzBdID0gYVswXSAtIGJbMF07XG4gIHBbMV0gPSBhWzFdIC0gYlsxXTtcbiAgcFsyXSA9IGFbMl0gLSBiWzJdO1xuXG4gIC8vcGVyZm9ybSByb3RhdGlvblxuICByWzBdID0gcFswXTtcbiAgclsxXSA9IHBbMV0qTWF0aC5jb3MoYykgLSBwWzJdKk1hdGguc2luKGMpO1xuICByWzJdID0gcFsxXSpNYXRoLnNpbihjKSArIHBbMl0qTWF0aC5jb3MoYyk7XG5cbiAgLy90cmFuc2xhdGUgdG8gY29ycmVjdCBwb3NpdGlvblxuICBvdXRbMF0gPSByWzBdICsgYlswXTtcbiAgb3V0WzFdID0gclsxXSArIGJbMV07XG4gIG91dFsyXSA9IHJbMl0gKyBiWzJdO1xuXG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUm90YXRlIGEgM0QgdmVjdG9yIGFyb3VuZCB0aGUgeS1heGlzXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCBUaGUgcmVjZWl2aW5nIHZlYzNcbiAqIEBwYXJhbSB7dmVjM30gYSBUaGUgdmVjMyBwb2ludCB0byByb3RhdGVcbiAqIEBwYXJhbSB7dmVjM30gYiBUaGUgb3JpZ2luIG9mIHRoZSByb3RhdGlvblxuICogQHBhcmFtIHtOdW1iZXJ9IGMgVGhlIGFuZ2xlIG9mIHJvdGF0aW9uXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVZKG91dCwgYSwgYiwgYyl7XG4gIGxldCBwID0gW10sIHI9W107XG4gIC8vVHJhbnNsYXRlIHBvaW50IHRvIHRoZSBvcmlnaW5cbiAgcFswXSA9IGFbMF0gLSBiWzBdO1xuICBwWzFdID0gYVsxXSAtIGJbMV07XG4gIHBbMl0gPSBhWzJdIC0gYlsyXTtcblxuICAvL3BlcmZvcm0gcm90YXRpb25cbiAgclswXSA9IHBbMl0qTWF0aC5zaW4oYykgKyBwWzBdKk1hdGguY29zKGMpO1xuICByWzFdID0gcFsxXTtcbiAgclsyXSA9IHBbMl0qTWF0aC5jb3MoYykgLSBwWzBdKk1hdGguc2luKGMpO1xuXG4gIC8vdHJhbnNsYXRlIHRvIGNvcnJlY3QgcG9zaXRpb25cbiAgb3V0WzBdID0gclswXSArIGJbMF07XG4gIG91dFsxXSA9IHJbMV0gKyBiWzFdO1xuICBvdXRbMl0gPSByWzJdICsgYlsyXTtcblxuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJvdGF0ZSBhIDNEIHZlY3RvciBhcm91bmQgdGhlIHotYXhpc1xuICogQHBhcmFtIHt2ZWMzfSBvdXQgVGhlIHJlY2VpdmluZyB2ZWMzXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVGhlIHZlYzMgcG9pbnQgdG8gcm90YXRlXG4gKiBAcGFyYW0ge3ZlYzN9IGIgVGhlIG9yaWdpbiBvZiB0aGUgcm90YXRpb25cbiAqIEBwYXJhbSB7TnVtYmVyfSBjIFRoZSBhbmdsZSBvZiByb3RhdGlvblxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWihvdXQsIGEsIGIsIGMpe1xuICBsZXQgcCA9IFtdLCByPVtdO1xuICAvL1RyYW5zbGF0ZSBwb2ludCB0byB0aGUgb3JpZ2luXG4gIHBbMF0gPSBhWzBdIC0gYlswXTtcbiAgcFsxXSA9IGFbMV0gLSBiWzFdO1xuICBwWzJdID0gYVsyXSAtIGJbMl07XG5cbiAgLy9wZXJmb3JtIHJvdGF0aW9uXG4gIHJbMF0gPSBwWzBdKk1hdGguY29zKGMpIC0gcFsxXSpNYXRoLnNpbihjKTtcbiAgclsxXSA9IHBbMF0qTWF0aC5zaW4oYykgKyBwWzFdKk1hdGguY29zKGMpO1xuICByWzJdID0gcFsyXTtcblxuICAvL3RyYW5zbGF0ZSB0byBjb3JyZWN0IHBvc2l0aW9uXG4gIG91dFswXSA9IHJbMF0gKyBiWzBdO1xuICBvdXRbMV0gPSByWzFdICsgYlsxXTtcbiAgb3V0WzJdID0gclsyXSArIGJbMl07XG5cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGFuZ2xlIGJldHdlZW4gdHdvIDNEIHZlY3RvcnNcbiAqIEBwYXJhbSB7dmVjM30gYSBUaGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIFRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gVGhlIGFuZ2xlIGluIHJhZGlhbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFuZ2xlKGEsIGIpIHtcbiAgbGV0IHRlbXBBID0gZnJvbVZhbHVlcyhhWzBdLCBhWzFdLCBhWzJdKTtcbiAgbGV0IHRlbXBCID0gZnJvbVZhbHVlcyhiWzBdLCBiWzFdLCBiWzJdKTtcblxuICBub3JtYWxpemUodGVtcEEsIHRlbXBBKTtcbiAgbm9ybWFsaXplKHRlbXBCLCB0ZW1wQik7XG5cbiAgbGV0IGNvc2luZSA9IGRvdCh0ZW1wQSwgdGVtcEIpO1xuXG4gIGlmKGNvc2luZSA+IDEuMCkge1xuICAgIHJldHVybiAwO1xuICB9XG4gIGVsc2UgaWYoY29zaW5lIDwgLTEuMCkge1xuICAgIHJldHVybiBNYXRoLlBJO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBNYXRoLmFjb3MoY29zaW5lKTtcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSB2ZWN0b3JcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdmVjdG9yIHRvIHJlcHJlc2VudCBhcyBhIHN0cmluZ1xuICogQHJldHVybnMge1N0cmluZ30gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cihhKSB7XG4gIHJldHVybiAndmVjMygnICsgYVswXSArICcsICcgKyBhWzFdICsgJywgJyArIGFbMl0gKyAnKSc7XG59XG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgdmVjdG9ycyBoYXZlIGV4YWN0bHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24gKHdoZW4gY29tcGFyZWQgd2l0aCA9PT0pXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBhIFRoZSBmaXJzdCB2ZWN0b3IuXG4gKiBAcGFyYW0ge3ZlYzN9IGIgVGhlIHNlY29uZCB2ZWN0b3IuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmVjdG9ycyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4YWN0RXF1YWxzKGEsIGIpIHtcbiAgcmV0dXJuIGFbMF0gPT09IGJbMF0gJiYgYVsxXSA9PT0gYlsxXSAmJiBhWzJdID09PSBiWzJdO1xufVxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHZlY3RvcnMgaGF2ZSBhcHByb3hpbWF0ZWx5IHRoZSBzYW1lIGVsZW1lbnRzIGluIHRoZSBzYW1lIHBvc2l0aW9uLlxuICpcbiAqIEBwYXJhbSB7dmVjM30gYSBUaGUgZmlyc3QgdmVjdG9yLlxuICogQHBhcmFtIHt2ZWMzfSBiIFRoZSBzZWNvbmQgdmVjdG9yLlxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIHZlY3RvcnMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHMoYSwgYikge1xuICBsZXQgYTAgPSBhWzBdLCBhMSA9IGFbMV0sIGEyID0gYVsyXTtcbiAgbGV0IGIwID0gYlswXSwgYjEgPSBiWzFdLCBiMiA9IGJbMl07XG4gIHJldHVybiAoTWF0aC5hYnMoYTAgLSBiMCkgPD0gZ2xNYXRyaXguRVBTSUxPTipNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEwKSwgTWF0aC5hYnMoYjApKSAmJlxuICAgICAgICAgIE1hdGguYWJzKGExIC0gYjEpIDw9IGdsTWF0cml4LkVQU0lMT04qTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMSksIE1hdGguYWJzKGIxKSkgJiZcbiAgICAgICAgICBNYXRoLmFicyhhMiAtIGIyKSA8PSBnbE1hdHJpeC5FUFNJTE9OKk1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTIpLCBNYXRoLmFicyhiMikpKTtcbn1cblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzMuc3VidHJhY3R9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IHN1YiA9IHN1YnRyYWN0O1xuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMy5tdWx0aXBseX1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3QgbXVsID0gbXVsdGlwbHk7XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayB2ZWMzLmRpdmlkZX1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3QgZGl2ID0gZGl2aWRlO1xuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMy5kaXN0YW5jZX1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3QgZGlzdCA9IGRpc3RhbmNlO1xuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMy5zcXVhcmVkRGlzdGFuY2V9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IHNxckRpc3QgPSBzcXVhcmVkRGlzdGFuY2U7XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayB2ZWMzLmxlbmd0aH1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3QgbGVuID0gbGVuZ3RoO1xuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMy5zcXVhcmVkTGVuZ3RofVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBzcXJMZW4gPSBzcXVhcmVkTGVuZ3RoO1xuXG4vKipcbiAqIFBlcmZvcm0gc29tZSBvcGVyYXRpb24gb3ZlciBhbiBhcnJheSBvZiB2ZWMzcy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhIHRoZSBhcnJheSBvZiB2ZWN0b3JzIHRvIGl0ZXJhdGUgb3ZlclxuICogQHBhcmFtIHtOdW1iZXJ9IHN0cmlkZSBOdW1iZXIgb2YgZWxlbWVudHMgYmV0d2VlbiB0aGUgc3RhcnQgb2YgZWFjaCB2ZWMzLiBJZiAwIGFzc3VtZXMgdGlnaHRseSBwYWNrZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBvZmZzZXQgTnVtYmVyIG9mIGVsZW1lbnRzIHRvIHNraXAgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgYXJyYXlcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb3VudCBOdW1iZXIgb2YgdmVjM3MgdG8gaXRlcmF0ZSBvdmVyLiBJZiAwIGl0ZXJhdGVzIG92ZXIgZW50aXJlIGFycmF5XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBGdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIHZlY3RvciBpbiB0aGUgYXJyYXlcbiAqIEBwYXJhbSB7T2JqZWN0fSBbYXJnXSBhZGRpdGlvbmFsIGFyZ3VtZW50IHRvIHBhc3MgdG8gZm5cbiAqIEByZXR1cm5zIHtBcnJheX0gYVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBmb3JFYWNoID0gKGZ1bmN0aW9uKCkge1xuICBsZXQgdmVjID0gY3JlYXRlKCk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGEsIHN0cmlkZSwgb2Zmc2V0LCBjb3VudCwgZm4sIGFyZykge1xuICAgIGxldCBpLCBsO1xuICAgIGlmKCFzdHJpZGUpIHtcbiAgICAgIHN0cmlkZSA9IDM7XG4gICAgfVxuXG4gICAgaWYoIW9mZnNldCkge1xuICAgICAgb2Zmc2V0ID0gMDtcbiAgICB9XG5cbiAgICBpZihjb3VudCkge1xuICAgICAgbCA9IE1hdGgubWluKChjb3VudCAqIHN0cmlkZSkgKyBvZmZzZXQsIGEubGVuZ3RoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbCA9IGEubGVuZ3RoO1xuICAgIH1cblxuICAgIGZvcihpID0gb2Zmc2V0OyBpIDwgbDsgaSArPSBzdHJpZGUpIHtcbiAgICAgIHZlY1swXSA9IGFbaV07IHZlY1sxXSA9IGFbaSsxXTsgdmVjWzJdID0gYVtpKzJdO1xuICAgICAgZm4odmVjLCB2ZWMsIGFyZyk7XG4gICAgICBhW2ldID0gdmVjWzBdOyBhW2krMV0gPSB2ZWNbMV07IGFbaSsyXSA9IHZlY1syXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYTtcbiAgfTtcbn0pKCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nbC1tYXRyaXgvc3JjL2dsLW1hdHJpeC92ZWMzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEJyYW5kb24gSm9uZXMsIENvbGluIE1hY0tlbnppZSBJVi5cblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5mdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5BVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuVEhFIFNPRlRXQVJFLiAqL1xuXG5pbXBvcnQgKiBhcyBnbE1hdHJpeCBmcm9tIFwiLi9jb21tb25cIjtcblxuLyoqXG4gKiA0IERpbWVuc2lvbmFsIFZlY3RvclxuICogQG1vZHVsZSB2ZWM0XG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3LCBlbXB0eSB2ZWM0XG4gKlxuICogQHJldHVybnMge3ZlYzR9IGEgbmV3IDREIHZlY3RvclxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlKCkge1xuICBsZXQgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoNCk7XG4gIG91dFswXSA9IDA7XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDA7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyB2ZWM0IGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgdmVjdG9yXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBhIHZlY3RvciB0byBjbG9uZVxuICogQHJldHVybnMge3ZlYzR9IGEgbmV3IDREIHZlY3RvclxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUoYSkge1xuICBsZXQgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoNCk7XG4gIG91dFswXSA9IGFbMF07XG4gIG91dFsxXSA9IGFbMV07XG4gIG91dFsyXSA9IGFbMl07XG4gIG91dFszXSA9IGFbM107XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyB2ZWM0IGluaXRpYWxpemVkIHdpdGggdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFggY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geSBZIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHogWiBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB3IFcgY29tcG9uZW50XG4gKiBAcmV0dXJucyB7dmVjNH0gYSBuZXcgNEQgdmVjdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tVmFsdWVzKHgsIHksIHosIHcpIHtcbiAgbGV0IG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDQpO1xuICBvdXRbMF0gPSB4O1xuICBvdXRbMV0gPSB5O1xuICBvdXRbMl0gPSB6O1xuICBvdXRbM10gPSB3O1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENvcHkgdGhlIHZhbHVlcyBmcm9tIG9uZSB2ZWM0IHRvIGFub3RoZXJcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBzb3VyY2UgdmVjdG9yXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KG91dCwgYSkge1xuICBvdXRbMF0gPSBhWzBdO1xuICBvdXRbMV0gPSBhWzFdO1xuICBvdXRbMl0gPSBhWzJdO1xuICBvdXRbM10gPSBhWzNdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzQgdG8gdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge051bWJlcn0geCBYIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB6IFogY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0gdyBXIGNvbXBvbmVudFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0KG91dCwgeCwgeSwgeiwgdykge1xuICBvdXRbMF0gPSB4O1xuICBvdXRbMV0gPSB5O1xuICBvdXRbMl0gPSB6O1xuICBvdXRbM10gPSB3O1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEFkZHMgdHdvIHZlYzQnc1xuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSArIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gKyBiWzFdO1xuICBvdXRbMl0gPSBhWzJdICsgYlsyXTtcbiAgb3V0WzNdID0gYVszXSArIGJbM107XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU3VidHJhY3RzIHZlY3RvciBiIGZyb20gdmVjdG9yIGFcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAtIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gLSBiWzFdO1xuICBvdXRbMl0gPSBhWzJdIC0gYlsyXTtcbiAgb3V0WzNdID0gYVszXSAtIGJbM107XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogTXVsdGlwbGllcyB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKiBiWzBdO1xuICBvdXRbMV0gPSBhWzFdICogYlsxXTtcbiAgb3V0WzJdID0gYVsyXSAqIGJbMl07XG4gIG91dFszXSA9IGFbM10gKiBiWzNdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIERpdmlkZXMgdHdvIHZlYzQnc1xuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpdmlkZShvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAvIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gLyBiWzFdO1xuICBvdXRbMl0gPSBhWzJdIC8gYlsyXTtcbiAgb3V0WzNdID0gYVszXSAvIGJbM107XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogTWF0aC5jZWlsIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjNFxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdmVjdG9yIHRvIGNlaWxcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNlaWwob3V0LCBhKSB7XG4gIG91dFswXSA9IE1hdGguY2VpbChhWzBdKTtcbiAgb3V0WzFdID0gTWF0aC5jZWlsKGFbMV0pO1xuICBvdXRbMl0gPSBNYXRoLmNlaWwoYVsyXSk7XG4gIG91dFszXSA9IE1hdGguY2VpbChhWzNdKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBNYXRoLmZsb29yIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjNFxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdmVjdG9yIHRvIGZsb29yXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmbG9vcihvdXQsIGEpIHtcbiAgb3V0WzBdID0gTWF0aC5mbG9vcihhWzBdKTtcbiAgb3V0WzFdID0gTWF0aC5mbG9vcihhWzFdKTtcbiAgb3V0WzJdID0gTWF0aC5mbG9vcihhWzJdKTtcbiAgb3V0WzNdID0gTWF0aC5mbG9vcihhWzNdKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBtaW5pbXVtIG9mIHR3byB2ZWM0J3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtaW4ob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IE1hdGgubWluKGFbMF0sIGJbMF0pO1xuICBvdXRbMV0gPSBNYXRoLm1pbihhWzFdLCBiWzFdKTtcbiAgb3V0WzJdID0gTWF0aC5taW4oYVsyXSwgYlsyXSk7XG4gIG91dFszXSA9IE1hdGgubWluKGFbM10sIGJbM10pO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG1heGltdW0gb2YgdHdvIHZlYzQnc1xuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1heChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gTWF0aC5tYXgoYVswXSwgYlswXSk7XG4gIG91dFsxXSA9IE1hdGgubWF4KGFbMV0sIGJbMV0pO1xuICBvdXRbMl0gPSBNYXRoLm1heChhWzJdLCBiWzJdKTtcbiAgb3V0WzNdID0gTWF0aC5tYXgoYVszXSwgYlszXSk7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogTWF0aC5yb3VuZCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzRcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHZlY3RvciB0byByb3VuZFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcm91bmQob3V0LCBhKSB7XG4gIG91dFswXSA9IE1hdGgucm91bmQoYVswXSk7XG4gIG91dFsxXSA9IE1hdGgucm91bmQoYVsxXSk7XG4gIG91dFsyXSA9IE1hdGgucm91bmQoYVsyXSk7XG4gIG91dFszXSA9IE1hdGgucm91bmQoYVszXSk7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU2NhbGVzIGEgdmVjNCBieSBhIHNjYWxhciBudW1iZXJcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSB2ZWN0b3IgdG8gc2NhbGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBiIGFtb3VudCB0byBzY2FsZSB0aGUgdmVjdG9yIGJ5XG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZShvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAqIGI7XG4gIG91dFsxXSA9IGFbMV0gKiBiO1xuICBvdXRbMl0gPSBhWzJdICogYjtcbiAgb3V0WzNdID0gYVszXSAqIGI7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQWRkcyB0d28gdmVjNCdzIGFmdGVyIHNjYWxpbmcgdGhlIHNlY29uZCBvcGVyYW5kIGJ5IGEgc2NhbGFyIHZhbHVlXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxlIHRoZSBhbW91bnQgdG8gc2NhbGUgYiBieSBiZWZvcmUgYWRkaW5nXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZUFuZEFkZChvdXQsIGEsIGIsIHNjYWxlKSB7XG4gIG91dFswXSA9IGFbMF0gKyAoYlswXSAqIHNjYWxlKTtcbiAgb3V0WzFdID0gYVsxXSArIChiWzFdICogc2NhbGUpO1xuICBvdXRbMl0gPSBhWzJdICsgKGJbMl0gKiBzY2FsZSk7XG4gIG91dFszXSA9IGFbM10gKyAoYlszXSAqIHNjYWxlKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBldWNsaWRpYW4gZGlzdGFuY2UgYmV0d2VlbiB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkaXN0YW5jZSBiZXR3ZWVuIGEgYW5kIGJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpc3RhbmNlKGEsIGIpIHtcbiAgbGV0IHggPSBiWzBdIC0gYVswXTtcbiAgbGV0IHkgPSBiWzFdIC0gYVsxXTtcbiAgbGV0IHogPSBiWzJdIC0gYVsyXTtcbiAgbGV0IHcgPSBiWzNdIC0gYVszXTtcbiAgcmV0dXJuIE1hdGguc3FydCh4KnggKyB5KnkgKyB6KnogKyB3KncpO1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgZXVjbGlkaWFuIGRpc3RhbmNlIGJldHdlZW4gdHdvIHZlYzQnc1xuICpcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gc3F1YXJlZCBkaXN0YW5jZSBiZXR3ZWVuIGEgYW5kIGJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNxdWFyZWREaXN0YW5jZShhLCBiKSB7XG4gIGxldCB4ID0gYlswXSAtIGFbMF07XG4gIGxldCB5ID0gYlsxXSAtIGFbMV07XG4gIGxldCB6ID0gYlsyXSAtIGFbMl07XG4gIGxldCB3ID0gYlszXSAtIGFbM107XG4gIHJldHVybiB4KnggKyB5KnkgKyB6KnogKyB3Knc7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgbGVuZ3RoIG9mIGEgdmVjNFxuICpcbiAqIEBwYXJhbSB7dmVjNH0gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIGxlbmd0aCBvZlxuICogQHJldHVybnMge051bWJlcn0gbGVuZ3RoIG9mIGFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxlbmd0aChhKSB7XG4gIGxldCB4ID0gYVswXTtcbiAgbGV0IHkgPSBhWzFdO1xuICBsZXQgeiA9IGFbMl07XG4gIGxldCB3ID0gYVszXTtcbiAgcmV0dXJuIE1hdGguc3FydCh4KnggKyB5KnkgKyB6KnogKyB3KncpO1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgbGVuZ3RoIG9mIGEgdmVjNFxuICpcbiAqIEBwYXJhbSB7dmVjNH0gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIHNxdWFyZWQgbGVuZ3RoIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGxlbmd0aCBvZiBhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcXVhcmVkTGVuZ3RoKGEpIHtcbiAgbGV0IHggPSBhWzBdO1xuICBsZXQgeSA9IGFbMV07XG4gIGxldCB6ID0gYVsyXTtcbiAgbGV0IHcgPSBhWzNdO1xuICByZXR1cm4geCp4ICsgeSp5ICsgeip6ICsgdyp3O1xufVxuXG4vKipcbiAqIE5lZ2F0ZXMgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWM0XG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB2ZWN0b3IgdG8gbmVnYXRlXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGUob3V0LCBhKSB7XG4gIG91dFswXSA9IC1hWzBdO1xuICBvdXRbMV0gPSAtYVsxXTtcbiAgb3V0WzJdID0gLWFbMl07XG4gIG91dFszXSA9IC1hWzNdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGludmVyc2Ugb2YgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWM0XG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB2ZWN0b3IgdG8gaW52ZXJ0XG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnNlKG91dCwgYSkge1xuICBvdXRbMF0gPSAxLjAgLyBhWzBdO1xuICBvdXRbMV0gPSAxLjAgLyBhWzFdO1xuICBvdXRbMl0gPSAxLjAgLyBhWzJdO1xuICBvdXRbM10gPSAxLjAgLyBhWzNdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIE5vcm1hbGl6ZSBhIHZlYzRcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHZlY3RvciB0byBub3JtYWxpemVcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZShvdXQsIGEpIHtcbiAgbGV0IHggPSBhWzBdO1xuICBsZXQgeSA9IGFbMV07XG4gIGxldCB6ID0gYVsyXTtcbiAgbGV0IHcgPSBhWzNdO1xuICBsZXQgbGVuID0geCp4ICsgeSp5ICsgeip6ICsgdyp3O1xuICBpZiAobGVuID4gMCkge1xuICAgIGxlbiA9IDEgLyBNYXRoLnNxcnQobGVuKTtcbiAgICBvdXRbMF0gPSB4ICogbGVuO1xuICAgIG91dFsxXSA9IHkgKiBsZW47XG4gICAgb3V0WzJdID0geiAqIGxlbjtcbiAgICBvdXRbM10gPSB3ICogbGVuO1xuICB9XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZG90IHByb2R1Y3Qgb2YgdHdvIHZlYzQnc1xuICpcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gZG90IHByb2R1Y3Qgb2YgYSBhbmQgYlxuICovXG5leHBvcnQgZnVuY3Rpb24gZG90KGEsIGIpIHtcbiAgcmV0dXJuIGFbMF0gKiBiWzBdICsgYVsxXSAqIGJbMV0gKyBhWzJdICogYlsyXSArIGFbM10gKiBiWzNdO1xufVxuXG4vKipcbiAqIFBlcmZvcm1zIGEgbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbGVycChvdXQsIGEsIGIsIHQpIHtcbiAgbGV0IGF4ID0gYVswXTtcbiAgbGV0IGF5ID0gYVsxXTtcbiAgbGV0IGF6ID0gYVsyXTtcbiAgbGV0IGF3ID0gYVszXTtcbiAgb3V0WzBdID0gYXggKyB0ICogKGJbMF0gLSBheCk7XG4gIG91dFsxXSA9IGF5ICsgdCAqIChiWzFdIC0gYXkpO1xuICBvdXRbMl0gPSBheiArIHQgKiAoYlsyXSAtIGF6KTtcbiAgb3V0WzNdID0gYXcgKyB0ICogKGJbM10gLSBhdyk7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgcmFuZG9tIHZlY3RvciB3aXRoIHRoZSBnaXZlbiBzY2FsZVxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge051bWJlcn0gW3NjYWxlXSBMZW5ndGggb2YgdGhlIHJlc3VsdGluZyB2ZWN0b3IuIElmIG9tbWl0dGVkLCBhIHVuaXQgdmVjdG9yIHdpbGwgYmUgcmV0dXJuZWRcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbShvdXQsIHZlY3RvclNjYWxlKSB7XG4gIHZlY3RvclNjYWxlID0gdmVjdG9yU2NhbGUgfHwgMS4wO1xuXG4gIC8vVE9ETzogVGhpcyBpcyBhIHByZXR0eSBhd2Z1bCB3YXkgb2YgZG9pbmcgdGhpcy4gRmluZCBzb21ldGhpbmcgYmV0dGVyLlxuICBvdXRbMF0gPSBnbE1hdHJpeC5SQU5ET00oKTtcbiAgb3V0WzFdID0gZ2xNYXRyaXguUkFORE9NKCk7XG4gIG91dFsyXSA9IGdsTWF0cml4LlJBTkRPTSgpO1xuICBvdXRbM10gPSBnbE1hdHJpeC5SQU5ET00oKTtcbiAgbm9ybWFsaXplKG91dCwgb3V0KTtcbiAgc2NhbGUob3V0LCBvdXQsIHZlY3RvclNjYWxlKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWM0IHdpdGggYSBtYXQ0LlxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7bWF0NH0gbSBtYXRyaXggdG8gdHJhbnNmb3JtIHdpdGhcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybU1hdDQob3V0LCBhLCBtKSB7XG4gIGxldCB4ID0gYVswXSwgeSA9IGFbMV0sIHogPSBhWzJdLCB3ID0gYVszXTtcbiAgb3V0WzBdID0gbVswXSAqIHggKyBtWzRdICogeSArIG1bOF0gKiB6ICsgbVsxMl0gKiB3O1xuICBvdXRbMV0gPSBtWzFdICogeCArIG1bNV0gKiB5ICsgbVs5XSAqIHogKyBtWzEzXSAqIHc7XG4gIG91dFsyXSA9IG1bMl0gKiB4ICsgbVs2XSAqIHkgKyBtWzEwXSAqIHogKyBtWzE0XSAqIHc7XG4gIG91dFszXSA9IG1bM10gKiB4ICsgbVs3XSAqIHkgKyBtWzExXSAqIHogKyBtWzE1XSAqIHc7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjNCB3aXRoIGEgcXVhdFxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7cXVhdH0gcSBxdWF0ZXJuaW9uIHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1RdWF0KG91dCwgYSwgcSkge1xuICBsZXQgeCA9IGFbMF0sIHkgPSBhWzFdLCB6ID0gYVsyXTtcbiAgbGV0IHF4ID0gcVswXSwgcXkgPSBxWzFdLCBxeiA9IHFbMl0sIHF3ID0gcVszXTtcblxuICAvLyBjYWxjdWxhdGUgcXVhdCAqIHZlY1xuICBsZXQgaXggPSBxdyAqIHggKyBxeSAqIHogLSBxeiAqIHk7XG4gIGxldCBpeSA9IHF3ICogeSArIHF6ICogeCAtIHF4ICogejtcbiAgbGV0IGl6ID0gcXcgKiB6ICsgcXggKiB5IC0gcXkgKiB4O1xuICBsZXQgaXcgPSAtcXggKiB4IC0gcXkgKiB5IC0gcXogKiB6O1xuXG4gIC8vIGNhbGN1bGF0ZSByZXN1bHQgKiBpbnZlcnNlIHF1YXRcbiAgb3V0WzBdID0gaXggKiBxdyArIGl3ICogLXF4ICsgaXkgKiAtcXogLSBpeiAqIC1xeTtcbiAgb3V0WzFdID0gaXkgKiBxdyArIGl3ICogLXF5ICsgaXogKiAtcXggLSBpeCAqIC1xejtcbiAgb3V0WzJdID0gaXogKiBxdyArIGl3ICogLXF6ICsgaXggKiAtcXkgLSBpeSAqIC1xeDtcbiAgb3V0WzNdID0gYVszXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgdmVjdG9yXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBhIHZlY3RvciB0byByZXByZXNlbnQgYXMgYSBzdHJpbmdcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHIoYSkge1xuICByZXR1cm4gJ3ZlYzQoJyArIGFbMF0gKyAnLCAnICsgYVsxXSArICcsICcgKyBhWzJdICsgJywgJyArIGFbM10gKyAnKSc7XG59XG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgdmVjdG9ycyBoYXZlIGV4YWN0bHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24gKHdoZW4gY29tcGFyZWQgd2l0aCA9PT0pXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBhIFRoZSBmaXJzdCB2ZWN0b3IuXG4gKiBAcGFyYW0ge3ZlYzR9IGIgVGhlIHNlY29uZCB2ZWN0b3IuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmVjdG9ycyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4YWN0RXF1YWxzKGEsIGIpIHtcbiAgcmV0dXJuIGFbMF0gPT09IGJbMF0gJiYgYVsxXSA9PT0gYlsxXSAmJiBhWzJdID09PSBiWzJdICYmIGFbM10gPT09IGJbM107XG59XG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgdmVjdG9ycyBoYXZlIGFwcHJveGltYXRlbHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24uXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBhIFRoZSBmaXJzdCB2ZWN0b3IuXG4gKiBAcGFyYW0ge3ZlYzR9IGIgVGhlIHNlY29uZCB2ZWN0b3IuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmVjdG9ycyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVxdWFscyhhLCBiKSB7XG4gIGxldCBhMCA9IGFbMF0sIGExID0gYVsxXSwgYTIgPSBhWzJdLCBhMyA9IGFbM107XG4gIGxldCBiMCA9IGJbMF0sIGIxID0gYlsxXSwgYjIgPSBiWzJdLCBiMyA9IGJbM107XG4gIHJldHVybiAoTWF0aC5hYnMoYTAgLSBiMCkgPD0gZ2xNYXRyaXguRVBTSUxPTipNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEwKSwgTWF0aC5hYnMoYjApKSAmJlxuICAgICAgICAgIE1hdGguYWJzKGExIC0gYjEpIDw9IGdsTWF0cml4LkVQU0lMT04qTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMSksIE1hdGguYWJzKGIxKSkgJiZcbiAgICAgICAgICBNYXRoLmFicyhhMiAtIGIyKSA8PSBnbE1hdHJpeC5FUFNJTE9OKk1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTIpLCBNYXRoLmFicyhiMikpICYmXG4gICAgICAgICAgTWF0aC5hYnMoYTMgLSBiMykgPD0gZ2xNYXRyaXguRVBTSUxPTipNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEzKSwgTWF0aC5hYnMoYjMpKSk7XG59XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayB2ZWM0LnN1YnRyYWN0fVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBzdWIgPSBzdWJ0cmFjdDtcblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzQubXVsdGlwbHl9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IG11bCA9IG11bHRpcGx5O1xuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjNC5kaXZpZGV9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IGRpdiA9IGRpdmlkZTtcblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzQuZGlzdGFuY2V9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IGRpc3QgPSBkaXN0YW5jZTtcblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzQuc3F1YXJlZERpc3RhbmNlfVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBzcXJEaXN0ID0gc3F1YXJlZERpc3RhbmNlO1xuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjNC5sZW5ndGh9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IGxlbiA9IGxlbmd0aDtcblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzQuc3F1YXJlZExlbmd0aH1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3Qgc3FyTGVuID0gc3F1YXJlZExlbmd0aDtcblxuLyoqXG4gKiBQZXJmb3JtIHNvbWUgb3BlcmF0aW9uIG92ZXIgYW4gYXJyYXkgb2YgdmVjNHMuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYSB0aGUgYXJyYXkgb2YgdmVjdG9ycyB0byBpdGVyYXRlIG92ZXJcbiAqIEBwYXJhbSB7TnVtYmVyfSBzdHJpZGUgTnVtYmVyIG9mIGVsZW1lbnRzIGJldHdlZW4gdGhlIHN0YXJ0IG9mIGVhY2ggdmVjNC4gSWYgMCBhc3N1bWVzIHRpZ2h0bHkgcGFja2VkXG4gKiBAcGFyYW0ge051bWJlcn0gb2Zmc2V0IE51bWJlciBvZiBlbGVtZW50cyB0byBza2lwIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGFycmF5XG4gKiBAcGFyYW0ge051bWJlcn0gY291bnQgTnVtYmVyIG9mIHZlYzRzIHRvIGl0ZXJhdGUgb3Zlci4gSWYgMCBpdGVyYXRlcyBvdmVyIGVudGlyZSBhcnJheVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gRnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCB2ZWN0b3IgaW4gdGhlIGFycmF5XG4gKiBAcGFyYW0ge09iamVjdH0gW2FyZ10gYWRkaXRpb25hbCBhcmd1bWVudCB0byBwYXNzIHRvIGZuXG4gKiBAcmV0dXJucyB7QXJyYXl9IGFcbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3QgZm9yRWFjaCA9IChmdW5jdGlvbigpIHtcbiAgbGV0IHZlYyA9IGNyZWF0ZSgpO1xuXG4gIHJldHVybiBmdW5jdGlvbihhLCBzdHJpZGUsIG9mZnNldCwgY291bnQsIGZuLCBhcmcpIHtcbiAgICBsZXQgaSwgbDtcbiAgICBpZighc3RyaWRlKSB7XG4gICAgICBzdHJpZGUgPSA0O1xuICAgIH1cblxuICAgIGlmKCFvZmZzZXQpIHtcbiAgICAgIG9mZnNldCA9IDA7XG4gICAgfVxuXG4gICAgaWYoY291bnQpIHtcbiAgICAgIGwgPSBNYXRoLm1pbigoY291bnQgKiBzdHJpZGUpICsgb2Zmc2V0LCBhLmxlbmd0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGwgPSBhLmxlbmd0aDtcbiAgICB9XG5cbiAgICBmb3IoaSA9IG9mZnNldDsgaSA8IGw7IGkgKz0gc3RyaWRlKSB7XG4gICAgICB2ZWNbMF0gPSBhW2ldOyB2ZWNbMV0gPSBhW2krMV07IHZlY1syXSA9IGFbaSsyXTsgdmVjWzNdID0gYVtpKzNdO1xuICAgICAgZm4odmVjLCB2ZWMsIGFyZyk7XG4gICAgICBhW2ldID0gdmVjWzBdOyBhW2krMV0gPSB2ZWNbMV07IGFbaSsyXSA9IHZlY1syXTsgYVtpKzNdID0gdmVjWzNdO1xuICAgIH1cblxuICAgIHJldHVybiBhO1xuICB9O1xufSkoKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dsLW1hdHJpeC9zcmMvZ2wtbWF0cml4L3ZlYzQuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IHZlYzMgfSBmcm9tICdnbC1tYXRyaXgnXG5pbXBvcnQgeyB0eXBlcywgdmVjdG9yLCBhdHRyaWJ1dGUsIGNvbW1vbiB9IGZyb20gJy4uL3V0aWwvdXRpbCdcbmltcG9ydCAqIGFzIHRleHR1cmUgZnJvbSAnLi4vdGV4dHVyZS90ZXh0dXJlJ1xuXG50eXBlIEF0dHJpYnV0ZU5hbWVzID0gJ3JvdWdobmVzcycgfCAnYWxiZWRvJyB8ICdtZXRhbGxpYydcbnR5cGUgVmFsaWRhdG9yVCA9IChhdHRyOiBBdHRyaWJ1dGUsIGRhdGE6IFNldFQpID0+IHZvaWRcbnR5cGUgU2V0VCA9IG51bWJlciB8IHR5cGVzLnZlYzNDb252ZXJ0aWJsZSB8IHRleHR1cmUuVGV4dHVyZVxudHlwZSBHZXRUID0gbnVtYmVyIHwgdmVjMyB8IHRleHR1cmUuVGV4dHVyZVxuXG5jbGFzcyBBdHRyaWJ1dGUgZXh0ZW5kcyBhdHRyaWJ1dGUuX0F0dHJpYnV0ZTxTZXRULCBHZXRULCBBdHRyaWJ1dGVOYW1lcz4ge1xuXHRfc2V0VmFsdWUodmFsdWU6IFNldFQpOiBHZXRUIHtcblx0XHRpZiAodHlwZW9mKHZhbHVlKSAhPSAnbnVtYmVyJyAmJiAhKHZhbHVlIGluc3RhbmNlb2YgdGV4dHVyZS5UZXh0dXJlKSkge1xuXHRcdFx0dmFsdWUgPSB2ZWN0b3IucmVxdWlyZVZlYzModmFsdWUpXG5cdFx0fVxuXHRcdHJldHVybiB2YWx1ZVxuXHR9XG59XG5cbmNsYXNzIE1hdGVyaWFsQXR0cmlidXRlTWFwIGV4dGVuZHMgYXR0cmlidXRlLl9BdHRyaWJ1dGVNYXA8QXR0cmlidXRlPiB7IGNvbnN0cnVjdG9yKCkgeyBzdXBlcigpIH0gfVxuXG5jbGFzcyBNYXRlcmlhbCBleHRlbmRzIGF0dHJpYnV0ZS5BdHRyaWJ1dGFibGU8QXR0cmlidXRlLCBNYXRlcmlhbEF0dHJpYnV0ZU1hcCwgQXR0cmlidXRlTmFtZXM+IHtcblx0cHJvdGVjdGVkIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHRcblxuXHRjb25zdHJ1Y3RvcihnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0KSB7XG5cdFx0c3VwZXIoKVxuXHRcdHRoaXMuYXR0cmlidXRlcyA9IG5ldyBNYXRlcmlhbEF0dHJpYnV0ZU1hcCgpXG5cdFx0dGhpcy5nbCA9IGdsXG5cdH1cblxuXHRjbG9uZSgpOiBNYXRlcmlhbCB7XG5cdFx0cmV0dXJuIHRoaXMuX2Nsb25lKE1hdGVyaWFsLCBBdHRyaWJ1dGUsIHRoaXMuZ2wpXG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIEJhc2ljKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsXG5cdFx0XHRfYWxiZWRvOiB0eXBlcy52ZWMzQ29udmVydGlibGUgPSBbMSwgMSwgMV0pOiBNYXRlcmlhbCB7XG5cdFx0XG5cdFx0bGV0IG1hdCA9IG5ldyBNYXRlcmlhbChnbClcblx0XHRtYXQuYWRkQXR0cmlidXRlKG5ldyBBdHRyaWJ1dGUoJ2FsYmVkbycsIF9hbGJlZG8sIGF0dHJpYnV0ZS52YWxpZGF0b3JzLlZlYzNPclRleHR1cmUpKVxuXHRcdHJldHVybiBtYXRcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgUGh5c2ljYWwoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCxcblx0XHRcdFx0X2FsYmVkbzogdHlwZXMudmVjM0NvbnZlcnRpYmxlID0gWzEsIDEsIDFdLCBcblx0XHRcdFx0X3JvdWdobmVzczogbnVtYmVyID0gMC4xLFxuXHRcdFx0XHRfbWV0YWxsaWM6IG51bWJlciA9IDAuMSk6IE1hdGVyaWFsIHtcblxuXHRcdGxldCBtYXQgPSBuZXcgTWF0ZXJpYWwoZ2wpXG5cdFx0bWF0LmFkZEF0dHJpYnV0ZShuZXcgQXR0cmlidXRlKCdhbGJlZG8nLCBfYWxiZWRvLCBhdHRyaWJ1dGUudmFsaWRhdG9ycy5WZWMzT3JUZXh0dXJlKSlcblx0XHRtYXQuYWRkQXR0cmlidXRlKG5ldyBBdHRyaWJ1dGUoJ3JvdWdobmVzcycsIF9yb3VnaG5lc3MsIGF0dHJpYnV0ZS52YWxpZGF0b3JzLk51bWJlcikpXG5cdFx0bWF0LmFkZEF0dHJpYnV0ZShuZXcgQXR0cmlidXRlKCdtZXRhbGxpYycsIF9tZXRhbGxpYywgYXR0cmlidXRlLnZhbGlkYXRvcnMuTnVtYmVyKSlcblx0XHRyZXR1cm4gbWF0XG5cdH1cbn1cblxuZXhwb3J0IHtcblx0TWF0ZXJpYWwsXG5cdEF0dHJpYnV0ZU5hbWVzLFxuXHRBdHRyaWJ1dGVcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC9tYXRlcmlhbC9tYXRlcmlhbC50cyIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vdHlwZS11dGlsJ1xuaW1wb3J0ICogYXMgZ2xtIGZyb20gJ2dsLW1hdHJpeCdcbmltcG9ydCB7IFRleHR1cmUgfSBmcm9tICcuLi90ZXh0dXJlL3RleHR1cmUnXG5cbmZ1bmN0aW9uIGNsb25lR0xNQXJyYXkoZGF0YTogdHlwZXMuZ2xtQXJyYXkpOiB0eXBlcy5nbG1BcnJheSB7XG5cdGlmICh0eXBlcy5pc01hdDQoZGF0YSkpIHtcblx0XHRyZXR1cm4gZ2xtLm1hdDQuY29weShnbG0ubWF0NC5jcmVhdGUoKSwgZGF0YSlcblx0fSBlbHNlIGlmICh0eXBlcy5pc1ZlYzMoZGF0YSkpIHtcblx0XHRyZXR1cm4gZ2xtLnZlYzMuY29weShnbG0udmVjMy5jcmVhdGUoKSwgZGF0YSlcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUoZGF0YTogdHlwZXMuY2xvbmVhYmxlKSA6IHR5cGVzLmNsb25lYWJsZSB7XG5cdGlmICh0eXBlcy5pc1ByaW1pdGl2ZShkYXRhKSkge1xuXHRcdHJldHVybiBkYXRhXG5cdH0gZWxzZSBpZiAodHlwZXMuaXNHTE1BcnJheVR5cGUoZGF0YSkpIHtcblx0XHRyZXR1cm4gY2xvbmVHTE1BcnJheShkYXRhKVxuXHR9IGVsc2UgaWYgKHR5cGVzLmlzQXJyYXkoZGF0YSkpIHtcblx0XHRyZXR1cm4gZGF0YS5zbGljZSgpXG5cdH0gZWxzZSBpZiAodHlwZXMuaXNUZXh0dXJlKGRhdGEpKSB7XG5cdFx0cmV0dXJuIGRhdGEuY2xvbmUoKVxuXHR9XG5cdHRocm93IG5ldyBFcnJvcihgVW5yZWNvZ25pemVkIHR5cGUuYClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluZDJzdWIoaWR4OiBudW1iZXIsIGRpbXM6IEFycmF5PG51bWJlcj4pOiBBcnJheTxudW1iZXI+IHtcblxuXHQvLyBodHRwOi8va3JpdGlzZW4uY29tLzIwMTEvMDgvMTcvc3Vic2NyaXB0cy1mcm9tLWxpbmVhci1pbmRleC1hbmQtdmljZS12ZXJzYS1jL1xuXG5cdGxldCBuOiBudW1iZXIgPSBkaW1zLmxlbmd0aFxuXHRsZXQgcHJvZDogQXJyYXk8bnVtYmVyPiA9IFtdXG5cdGxldCByZXN1bHQgPSBuZXcgQXJyYXk8bnVtYmVyPihuKVxuXHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbjsgaSsrKSB7XG5cdFx0cHJvZFtpXSA9IDFcblx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSBuLTE7IGogPiBpOyBqLS0pIHByb2RbaV0gKj0gZGltc1tqXVxuXHR9XG5cdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBuOyBpKyspIHtcblx0XHRyZXN1bHRbaV0gPSBpZHhcblx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgaTsgaisrKVxuXHRcdFx0cmVzdWx0W2ldID0gcmVzdWx0W2ldICUgcHJvZFtqXVxuXHRcdHJlc3VsdFtpXSA9IE1hdGguZmxvb3IocmVzdWx0W2ldIC8gcHJvZFtpXSlcblx0fVxuXHRyZXR1cm4gcmVzdWx0XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2wvdXRpbC9jb21tb24tdXRpbC50cyIsImV4cG9ydCBjbGFzcyBSYXRpbyB7XG5cdHJlYWRvbmx5IGZpcnN0OiBudW1iZXJcblx0cmVhZG9ubHkgc2Vjb25kOiBudW1iZXJcblx0cmVhZG9ubHkgYWxpYXM6IHN0cmluZ1xuXG5cdGNvbnN0cnVjdG9yKGZpcnN0OiBudW1iZXIsIHNlY29uZDogbnVtYmVyLCBhbGlhczogc3RyaW5nKSB7XG5cdFx0dGhpcy5maXJzdCA9IGZpcnN0XG5cdFx0dGhpcy5zZWNvbmQgPSBzZWNvbmRcblx0XHR0aGlzLmFsaWFzID0gYWxpYXNcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgc2NhbGUoYTogUmF0aW8sIGI6IG51bWJlcikge1xuXHRcdHJldHVybiAoYiAvIGEuc2Vjb25kKSAqIGEuZmlyc3Rcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgRHVyYXRpb24ge1xuXHRyYXRpbzogUmF0aW9cblx0YW1vdW50OiBudW1iZXJcblxuXHRjb25zdHJ1Y3RvcihyYXRpbzogUmF0aW8sIGFtb3VudDogbnVtYmVyKSB7XG5cdFx0dGhpcy5yYXRpbyA9IHJhdGlvXG5cdFx0dGhpcy5hbW91bnQgPSBhbW91bnRcblx0fVxuXG5cdHB1YmxpYyB2YWx1ZSgpOiBudW1iZXIge1xuXHRcdHJldHVybiBSYXRpby5zY2FsZSh0aGlzLnJhdGlvLCB0aGlzLmFtb3VudClcblx0XHQvLyByZXR1cm4gKGFtdCAvIHNlYykgKiBmaXJzdFxuXHR9XG5cblx0cHVibGljIHN0YXRpYyBsdChhOiBEdXJhdGlvbiwgYjogRHVyYXRpb24pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gYS52YWx1ZSgpIDwgYi52YWx1ZSgpXG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIGxlKGE6IER1cmF0aW9uLCBiOiBEdXJhdGlvbik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBhLnZhbHVlKCkgPD0gYi52YWx1ZSgpXG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIGVxKGE6IER1cmF0aW9uLCBiOiBEdXJhdGlvbik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBhLnZhbHVlKCkgPT0gYi52YWx1ZSgpXG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIGd0KGE6IER1cmF0aW9uLCBiOiBEdXJhdGlvbik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBhLnZhbHVlKCkgPiBiLnZhbHVlKClcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgZ2UoYTogRHVyYXRpb24sIGI6IER1cmF0aW9uKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGEudmFsdWUoKSA+PSBiLnZhbHVlKClcblx0fVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIHJhdGlvcyB7XG5cdGV4cG9ydCBmdW5jdGlvbiBtcygpOiBSYXRpbyB7XG5cdFx0cmV0dXJuIG5ldyBSYXRpbygxLCAxLCAnbXMnKVxuXHR9XG5cdFxuXHRleHBvcnQgZnVuY3Rpb24gcygpOiBSYXRpbyB7XG5cdFx0cmV0dXJuIG5ldyBSYXRpbygxLCAxLzEwMDAsICdzJylcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgRGVsdGFUaW1lciB7XG5cdHByaXZhdGUgbGFzdDogbnVtYmVyID0gMFxuXHRwcml2YXRlIF9kZWx0YTogbnVtYmVyID0gMFxuXHRwcml2YXRlIGZpcnN0OiBib29sZWFuID0gdHJ1ZVxuXHRwcml2YXRlIHJhdGlvOiBSYXRpb1xuXG5cdGNvbnN0cnVjdG9yKCkgeyB0aGlzLnJhdGlvID0gcmF0aW9zLnMoKSB9XG5cblx0cHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcblx0XHRsZXQgbm93ID0gRGF0ZS5ub3coKVxuXHRcdGlmICh0aGlzLmZpcnN0KSB7XG5cdFx0XHR0aGlzLmxhc3QgPSBub3dcblx0XHRcdHRoaXMuZmlyc3QgPSBmYWxzZVxuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXHRcdHRoaXMuX2RlbHRhID0gbm93IC0gdGhpcy5sYXN0XG5cdFx0dGhpcy5sYXN0ID0gbm93XG5cdH1cblxuXHRwdWJsaWMgZmlyc3RVcGRhdGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZmlyc3Rcblx0fVxuXG5cdHB1YmxpYyBzZXRSYXRpbyhyYXRpbzogUmF0aW8pOiB2b2lkIHtcblx0XHR0aGlzLnJhdGlvID0gcmF0aW9cblx0fVxuXG5cdHB1YmxpYyBnZXRSYXRpbygpOiBSYXRpbyB7XG5cdFx0cmV0dXJuIHRoaXMucmF0aW9cblx0fVxuXG5cdHB1YmxpYyBkZWx0YSgpOiBudW1iZXIgeyBcblx0XHRyZXR1cm4gKHRoaXMuX2RlbHRhIC8gdGhpcy5yYXRpby5maXJzdCkgKiB0aGlzLnJhdGlvLnNlY29uZFxuXHR9XG5cblx0cHVibGljIGRlbHRhRHVyYXRpb24oYTogRHVyYXRpb24gfCBudWxsKTogRHVyYXRpb24ge1xuXHRcdGlmIChhID09PSBudWxsKSB7XG5cdFx0XHRhID0gbmV3IER1cmF0aW9uKHRoaXMucmF0aW8sIHRoaXMuX2RlbHRhKVxuXHRcdFx0cmV0dXJuIGFcblx0XHR9XG5cdFx0YS5yYXRpbyA9IHRoaXMucmF0aW9cblx0XHRhLmFtb3VudCA9IHRoaXMuX2RlbHRhXG5cdFx0cmV0dXJuIGFcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2dsL3V0aWwvdGltZS11dGlsLnRzIiwiZXhwb3J0IGZ1bmN0aW9uIGFzc2VydE5WYWx1ZXM8VD4oYXJyOiBBcnJheTxUPiwgTjogbnVtYmVyLCBjb250ZW50czogc3RyaW5nID0gJyh1bnNwZWNpZmllZCknKTogdm9pZCB7XG5cdGlmIChhcnIubGVuZ3RoICE9PSBOKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCB0aGUgYXJyYXkgb2YgJHtjb250ZW50c30gdG8gY29udGFpbiAke059IHZhbHVlczsgJHthcnIubGVuZ3RofSB3ZXJlIHByZXNlbnQuYClcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2dsL3V0aWwvYXNzZXJ0LXV0aWwudHMiLCJpbXBvcnQgeyB2ZWMzIH0gZnJvbSAnZ2wtbWF0cml4J1xuaW1wb3J0IHsgdmVjdG9yLCB0eXBlcywgYXR0cmlidXRlIH0gZnJvbSAnLi4vdXRpbC91dGlsJ1xuaW1wb3J0IHsgUmVzb3VyY2UgfSBmcm9tICcuLi9jb21tb24vcmVzb3VyY2UnXG5cbnR5cGUgQXR0cmlidXRlTmFtZXMgPSAnY29sb3InIHwgJ3Bvc2l0aW9uJyB8ICdtYXNrJyB8ICdkaXJlY3Rpb24nXG50eXBlIExpZ2h0TmFtZXMgPSAncG9pbnQnIHwgJ2RpcmVjdGlvbmFsJ1xudHlwZSBMaWdodFVuaWZvcm1OYW1lcyA9IEF0dHJpYnV0ZU5hbWVzIHwgTGlnaHROYW1lc1xuXG50eXBlIFZhbGlkYXRvclQgPSAoYXR0cjogQXR0cmlidXRlLCBkYXRhOiBTZXRUKSA9PiB2b2lkXG50eXBlIFNldFQgPSB0eXBlcy52ZWMzQ29udmVydGlibGUgfCBudW1iZXIgfCBib29sZWFuXG50eXBlIEdldFQgPSB2ZWMzIHwgbnVtYmVyIHwgYm9vbGVhblxuXG5jbGFzcyBBdHRyaWJ1dGUgZXh0ZW5kcyBhdHRyaWJ1dGUuX0F0dHJpYnV0ZTxTZXRULCBHZXRULCBBdHRyaWJ1dGVOYW1lcz4ge1xuXHRfc2V0VmFsdWUodmFsdWU6IFNldFQpOiBHZXRUIHtcblx0XHRpZiAodHlwZW9mKHZhbHVlKSAhPT0gJ251bWJlcicgJiYgdHlwZW9mKHZhbHVlKSAhPT0gJ2Jvb2xlYW4nKVxuXHRcdFx0dmFsdWUgPSB2ZWN0b3IucmVxdWlyZVZlYzModmFsdWUpXG5cdFx0cmV0dXJuIHZhbHVlXG5cdH1cbn1cblxuY2xhc3MgTGlnaHRBdHRyaWJ1dGVNYXAgZXh0ZW5kcyBhdHRyaWJ1dGUuX0F0dHJpYnV0ZU1hcDxBdHRyaWJ1dGU+IHsgY29uc3RydWN0b3IoKSB7IHN1cGVyKCkgfSB9XG5cbmNsYXNzIExpZ2h0IGV4dGVuZHMgYXR0cmlidXRlLkF0dHJpYnV0YWJsZTxBdHRyaWJ1dGUsIExpZ2h0QXR0cmlidXRlTWFwLCBBdHRyaWJ1dGVOYW1lcz4ge1xuXHRnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0XG5cdHByaXZhdGUgbmFtZTogTGlnaHROYW1lc1xuXHRwdWJsaWMgYWN0aXZlOiBib29sZWFuID0gdHJ1ZVxuXHRwcml2YXRlIGluZGV4OiBudW1iZXJcblxuXHRjb25zdHJ1Y3RvcihnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCBcblx0XHRcdF9pbmRleDogbnVtYmVyID0gMCwgIFxuXHRcdFx0X2NvbG9yOiB0eXBlcy52ZWMzQ29udmVydGlibGUgPSBbMSwgMSwgMV0sXG5cdFx0XHRfbWFzazogdHlwZXMudmVjM0NvbnZlcnRpYmxlID0gWzEsIDEsIDFdKSB7XG5cdFx0c3VwZXIoKVxuXHRcdHRoaXMuZ2wgPSBnbFxuXHRcdHRoaXMuaW5kZXggPSBfaW5kZXhcblx0XHR0aGlzLmF0dHJpYnV0ZXMgPSBuZXcgTGlnaHRBdHRyaWJ1dGVNYXAoKVxuXHRcdHRoaXMuYWRkQXR0cmlidXRlKG5ldyBBdHRyaWJ1dGUoJ2NvbG9yJywgX2NvbG9yLCBhdHRyaWJ1dGUudmFsaWRhdG9ycy5WZWMzKSlcblx0XHR0aGlzLmFkZEF0dHJpYnV0ZShuZXcgQXR0cmlidXRlKCdtYXNrJywgX21hc2ssIGF0dHJpYnV0ZS52YWxpZGF0b3JzLlZlYzMpKVxuXHR9XG5cdHB1YmxpYyBzZXRNYXNrKHZhbDogdHlwZXMudmVjM0NvbnZlcnRpYmxlKTogdm9pZCB7XG5cdFx0dGhpcy5nZXRBdHRyaWJ1dGUoJ21hc2snKS5zZXRWYWx1ZSh2YWwpXG5cdH1cblx0cHVibGljIHNldENvbG9yKHZhbDogdHlwZXMudmVjM0NvbnZlcnRpYmxlKTogdm9pZCB7XG5cdFx0dGhpcy5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykuc2V0VmFsdWUodmFsKVxuXHR9XG5cdHB1YmxpYyBzZXRJbmRleCh2YWw6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuaW5kZXggPSB2YWxcblx0fVxuXHRwdWJsaWMgZ2V0SW5kZXgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5pbmRleFxuXHR9XG5cdHB1YmxpYyBnZXRDb2xvcigpOiB2ZWMzIHtcblx0XHRyZXR1cm4gPHZlYzM+dGhpcy5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykucGVla1ZhbHVlKClcblx0fVxuXHRwdWJsaWMgZ2V0TmFtZSgpOiBMaWdodE5hbWVzIHtcblx0XHRyZXR1cm4gdGhpcy5uYW1lXG5cdH1cblx0cHVibGljIGdldE1hc2soKTogdmVjMyB7XG5cdFx0cmV0dXJuIDx2ZWMzPnRoaXMuZ2V0QXR0cmlidXRlKCdtYXNrJykucGVla1ZhbHVlKClcblx0fVxuXG5cdGNsb25lKCk6IExpZ2h0IHtcblx0XHRyZXR1cm4gdGhpcy5fY2xvbmUoTGlnaHQsIEF0dHJpYnV0ZSwgdGhpcy5nbClcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgUG9pbnQoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCwgXG5cdFx0XHRcdF9wb3NpdGlvbjogdHlwZXMudmVjM0NvbnZlcnRpYmxlID0gWzEsIDEsIDFdLCBcblx0XHRcdFx0X2NvbG9yOiB0eXBlcy52ZWMzQ29udmVydGlibGUgPSBbMSwgMSwgMV0sXG5cdFx0XHRcdF9pbmRleDogbnVtYmVyID0gMCkge1xuXHRcdGxldCBsaWdodCA9IG5ldyBMaWdodChnbCwgX2luZGV4LCBfY29sb3IpXG5cdFx0bGlnaHQuYWRkQXR0cmlidXRlKG5ldyBBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgX3Bvc2l0aW9uKSlcblx0XHRsaWdodC5uYW1lID0gJ3BvaW50J1xuXHRcdHJldHVybiBsaWdodFxuXHR9XG5cblx0cHVibGljIHN0YXRpYyBEaXJlY3Rpb25hbChnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LFxuXHRcdFx0X2RpcmVjdGlvbjogdHlwZXMudmVjM0NvbnZlcnRpYmxlID0gWzEsIDEsIDFdLFxuXHRcdFx0X2NvbG9yOiB0eXBlcy52ZWMzQ29udmVydGlibGUgPSBbMSwgMSwgMV0sXG5cdFx0XHRfaW5kZXg6IG51bWJlciA9IDApIHtcblx0XHRsZXQgbGlnaHQgPSBuZXcgTGlnaHQoZ2wsIF9pbmRleCwgX2NvbG9yKVxuXHRcdGxpZ2h0LmFkZEF0dHJpYnV0ZShuZXcgQXR0cmlidXRlKCdkaXJlY3Rpb24nLCBfZGlyZWN0aW9uKSlcblx0XHRsaWdodC5uYW1lID0gJ2RpcmVjdGlvbmFsJ1xuXHRcdHJldHVybiBsaWdodFxuXHR9XG59XG5cbmV4cG9ydCB7IExpZ2h0LCBMaWdodE5hbWVzLCBBdHRyaWJ1dGUsIEF0dHJpYnV0ZU5hbWVzLCBMaWdodFVuaWZvcm1OYW1lcyB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2wvbGlnaHQvbGlnaHQudHMiLCJpbXBvcnQgeyB0eXBlcyB9IGZyb20gJy4uL3V0aWwvdXRpbCdcbmltcG9ydCAqIGFzIF9MaWdodCBmcm9tICcuLi9saWdodC9saWdodCdcbmltcG9ydCAqIGFzIF9NYXRlcmlhbCBmcm9tICcuLi9tYXRlcmlhbC9tYXRlcmlhbCdcbmltcG9ydCAqIGFzIF9TaGFkZXIgZnJvbSAnLi9zaGFkZXInXG5cbmV4cG9ydCB0eXBlIFVuaWZvcm1OYW1lcyA9IF9NYXRlcmlhbC5BdHRyaWJ1dGVOYW1lcyB8IF9MaWdodC5MaWdodFVuaWZvcm1OYW1lcyB8IF9TaGFkZXIuU2hhZGVyQ29yZVVuaWZvcm1LaW5kc1xuXG5leHBvcnQgY2xhc3MgVW5pZm9ybU1hcDxUPiB7XG5cdHB1YmxpYyBpdGVtczogeyBba2V5OiBzdHJpbmddOiBUIH1cblx0Y29uc3RydWN0b3IobmFtZXM6IFVuaWZvcm1OYW1lc1tdLCB2YWx1ZTogVCkge1xuXHRcdHRoaXMuaXRlbXMgPSB7fVxuXHRcdGNvbnN0IGl0ZW1zID0gdGhpcy5pdGVtc1xuXHRcdG5hbWVzLm1hcChuYW1lID0+IGl0ZW1zW25hbWVdID0gdmFsdWUpXG5cdH1cblx0cHVibGljIGhhc1VuaWZvcm0obmFtZTogVW5pZm9ybU5hbWVzKSB7XG5cdFx0cmV0dXJuIHRoaXMuaXRlbXNbbmFtZV0gIT09IHVuZGVmaW5lZFxuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBNYXAge1xuXHRzdGF0aWMgaXRlbXM6IHsgW0sgaW4gVW5pZm9ybU5hbWVzXTogc3RyaW5nIH0gPSB7XG5cdFx0Ly8gbWF0ZXJpYWxcblx0XHQnYWxiZWRvJzogJ2FsYmVkbycsXG5cdFx0J3JvdWdobmVzcyc6ICdyb3VnaG5lc3MnLFxuXHRcdCdtZXRhbGxpYyc6ICdtZXRhbGxpYycsXG5cblx0XHQvL1x0bGlnaHRcblx0XHQncG9zaXRpb24nOiAncG9zaXRpb24nLFxuXHRcdCdkaXJlY3Rpb24nOiAnZGlyZWN0aW9uJyxcblx0XHQnY29sb3InOiAnY29sb3InLFxuXHRcdCdtYXNrJzogJ21hc2snLFxuXHRcdCdwb2ludCc6ICdwb2ludF9saWdodHMnLFxuXHRcdCdkaXJlY3Rpb25hbCc6ICdkaXJlY3Rpb25hbF9saWdodHMnLFxuXG5cdFx0Ly9cdGNvcmVcblx0XHQnbW9kZWwnOiAnbW9kZWwnLFxuXHRcdCd2aWV3JzogJ3ZpZXcnLFxuXHRcdCdwcm9qZWN0aW9uJzogJ3Byb2plY3Rpb24nLFxuXHRcdCdjYW1lcmFfcG9zaXRpb24nOiAnY2FtX3Bvc2l0aW9uJ1xuXHR9XG5cblx0c3RhdGljIGdldFVuaWZvcm0obmFtZTogVW5pZm9ybU5hbWVzKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gTWFwLml0ZW1zW25hbWVdXG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC9zaGFkZXIvdW5pZm9ybXMudHMiLCJpbXBvcnQgeyB0aW1lIH0gZnJvbSAnLi4vdXRpbC91dGlsJ1xuaW1wb3J0IHsgdmVjMiB9IGZyb20gJ2dsLW1hdHJpeCdcbmltcG9ydCAqIGFzIG1hdGggZnJvbSAnLi4vbWF0aC93Z2wtbWF0aCdcbmltcG9ydCAqIGFzIGNhcGFiaWxpdGllcyBmcm9tICcuLi9jb21tb24vY2FwYWJpbGl0aWVzJ1xuXG5leHBvcnQgdHlwZSBUb3VjaENCVCA9IChldnQ6IFRvdWNoRXZlbnQpID0+IHZvaWRcbmV4cG9ydCB0eXBlIE1vdXNlQ0JUID0gKGV2dDogTW91c2VFdmVudCkgPT4gdm9pZFxuZXhwb3J0IHR5cGUgTGlzdGVuZXJUPEs+ID0gKGV2dDogSykgPT4gdm9pZFxuZXhwb3J0IHR5cGUgWFlFdmVudCA9IFRvdWNoRXZlbnQgfCBNb3VzZUV2ZW50XG5cbnR5cGUgbGlzdGVuZXJzID0gJ3N0YXJ0JyB8ICdtb3ZlJyB8ICdlbmQnXG50eXBlIGxpc3RlbmVyTWFwID0geyBbSyBpbiBsaXN0ZW5lcnNdOiBzdHJpbmcgfVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgeHk8SyBleHRlbmRzIFhZRXZlbnQ+IHtcblx0ZWw6IEhUTUxFbGVtZW50IHwgV2luZG93XG5cblx0Y29uc3RydWN0b3IoZWw/OiBIVE1MRWxlbWVudCB8IFdpbmRvdykge1xuXHRcdHRoaXMuZWwgPSAoZWwgPT09IG51bGwgfHwgZWwgPT09IHVuZGVmaW5lZCkgPyBkb2N1bWVudC5ib2R5IDogZWxcblx0fVxuXG5cdHN0YXJ0KGNiOiBMaXN0ZW5lclQ8Sz4pOiB2b2lkIHtcblx0XHR0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5nZXRMaXN0ZW5lck5hbWVzKClbJ3N0YXJ0J10sIGNiKVxuXHR9XG5cblx0ZW5kKGNiOiBMaXN0ZW5lclQ8Sz4pOiB2b2lkIHtcblx0XHR0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5nZXRMaXN0ZW5lck5hbWVzKClbJ2VuZCddLCBjYilcblx0fVxuXG5cdG1vdmUoY2I6IExpc3RlbmVyVDxLPik6IHZvaWQge1xuXHRcdHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmdldExpc3RlbmVyTmFtZXMoKVsnbW92ZSddLCBjYilcblx0fVxuXG5cdHB1YmxpYyBhYnN0cmFjdCBnZXRMaXN0ZW5lck5hbWVzKCk6IGxpc3RlbmVyTWFwXG5cdHB1YmxpYyBhYnN0cmFjdCBzaG91bGRJbnZlcnQoKTogYm9vbGVhblxuXHRwdWJsaWMgYWJzdHJhY3QgZ2V0UHJpbWFyeUNvb3JkaW5hdGVzKGV2dDogSyk6IHZlYzJcbn1cblxuZXhwb3J0IGNsYXNzIFRvdWNoIGV4dGVuZHMgeHk8VG91Y2hFdmVudD4ge1xuXG5cdGVsOiBIVE1MRWxlbWVudCB8IFdpbmRvd1xuXG5cdGdldExpc3RlbmVyTmFtZXMoKTogbGlzdGVuZXJNYXAge1xuXHRcdHJldHVybiB7XG5cdFx0XHQnc3RhcnQnOiAndG91Y2hzdGFydCcsXG5cdFx0XHQnZW5kJzogJ3RvdWNoZW5kJyxcblx0XHRcdCdtb3ZlJzogJ3RvdWNobW92ZSdcblx0XHR9XG5cdH1cblxuXHRzaG91bGRJbnZlcnQoKTogYm9vbGVhbiB7IHJldHVybiB0cnVlIH1cblxuXHRnZXRQcmltYXJ5Q29vcmRpbmF0ZXMoZXZ0OiBUb3VjaEV2ZW50LCBvdXQ/OiB2ZWMyKTogdmVjMiB7XG5cdFx0aWYgKCFvdXQpXG5cdFx0XHRvdXQgPSB2ZWMyLmNyZWF0ZSgpXG5cdFx0aWYgKGV2dC50b3VjaGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0b3V0WzBdID0gMFxuXHRcdFx0b3V0WzFdID0gMFxuXHRcdH0gZWxzZSB7XG5cdFx0XHRvdXRbMF0gPSBldnQudG91Y2hlc1swXS5jbGllbnRYXG5cdFx0XHRvdXRbMV0gPSBldnQudG91Y2hlc1swXS5jbGllbnRZXG5cdFx0fVxuXHRcdHJldHVybiBvdXRcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTW91c2UgZXh0ZW5kcyB4eTxNb3VzZUV2ZW50PiB7XG5cblx0ZWw6IEhUTUxFbGVtZW50IHwgV2luZG93XG5cblx0Z2V0TGlzdGVuZXJOYW1lcygpOiBsaXN0ZW5lck1hcCB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdCdzdGFydCc6ICdtb3VzZWVudGVyJyxcblx0XHRcdCdlbmQnOiAnbW91c2VsZWF2ZScsXG5cdFx0XHQnbW92ZSc6ICdtb3VzZW1vdmUnXG5cdFx0fVxuXHR9XG5cblx0c2hvdWxkSW52ZXJ0KCk6IGJvb2xlYW4geyByZXR1cm4gZmFsc2UgfVxuXG5cdGdldFByaW1hcnlDb29yZGluYXRlcyhldnQ6IE1vdXNlRXZlbnQsIG91dD86IHZlYzIpOiB2ZWMyIHtcblx0XHRpZiAoIW91dClcblx0XHRcdG91dCA9IHZlYzIuY3JlYXRlKClcblx0XHRvdXRbMF0gPSBldnQuY2xpZW50WFxuXHRcdG91dFsxXSA9IGV2dC5jbGllbnRZXG5cdFx0cmV0dXJuIG91dFxuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBQb2ludGVyTG9jayBleHRlbmRzIE1vdXNlIHtcblxuXHRlbDogSFRNTENhbnZhc0VsZW1lbnRcblx0Y29vcmRpbmF0ZXM6IHZlYzJcblx0aXNMb2NrZWQ6IGJvb2xlYW5cblxuXHRjb25zdHJ1Y3RvcihlbDogSFRNTENhbnZhc0VsZW1lbnQpIHtcblx0XHRzdXBlcihlbClcblx0XHR0aGlzLmNvb3JkaW5hdGVzID0gdmVjMi5mcm9tVmFsdWVzKDAsIDApXG5cdFx0dGhpcy5pc0xvY2tlZCA9IGZhbHNlXG5cdFx0dGhpcy5zZXR1cCgpXG5cdH1cblxuXHRwcml2YXRlIHNldHVwKCk6IHZvaWQge1xuXHRcdGlmICghY2FwYWJpbGl0aWVzLmhhc1BvaW50ZXJMb2NrKCkpIHtcblx0XHRcdGNvbnNvbGUud2FybignUG9pbnRlciBsb2NraW5nIGlzIG5vdCBzdXBwb3J0ZWQgaW4geW91ciBicm93c2VyOycgK1xuXHRcdFx0XHQnIHJlZ3VsYXIgbW91c2UgaW5wdXQgd2lsbCBiZSB1c2VkIGluc3RlYWQuJylcblx0XHRcdHJldHVyblxuXHRcdH1cblx0XHRsZXQgc2VsZiA9IHRoaXNcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVybG9ja2NoYW5nZScsIChldnQ6IE1vdXNlRXZlbnQpID0+IHtcblx0XHRcdHNlbGYuaXNMb2NrZWQgPSAhc2VsZi5pc0xvY2tlZFxuXHRcdH0sIGZhbHNlKVxuXHRcdHNlbGYuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZ0OiBNb3VzZUV2ZW50KSA9PiB7XG5cdFx0XHRldnQucHJldmVudERlZmF1bHQoKVxuXHRcdFx0aWYgKCFzZWxmLmlzTG9ja2VkKSB7XG5cdFx0XHRcdHNlbGYuZWwucmVxdWVzdFBvaW50ZXJMb2NrKClcblx0XHRcdH1cblx0XHR9KVxuXHR9XG5cblx0Z2V0UHJpbWFyeUNvb3JkaW5hdGVzKGV2dDogTW91c2VFdmVudCwgb3V0PzogdmVjMik6IHZlYzIge1xuXHRcdGlmICghb3V0KVxuXHRcdFx0b3V0ID0gdmVjMi5jcmVhdGUoKVxuXHRcdGlmICh0aGlzLmlzTG9ja2VkKSB7XG5cdFx0XHR0aGlzLmNvb3JkaW5hdGVzWzBdICs9IGV2dC5tb3ZlbWVudFhcblx0XHRcdHRoaXMuY29vcmRpbmF0ZXNbMV0gKz0gZXZ0Lm1vdmVtZW50WVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNvb3JkaW5hdGVzWzBdID0gZXZ0LmNsaWVudFhcblx0XHRcdHRoaXMuY29vcmRpbmF0ZXNbMV0gPSBldnQuY2xpZW50WVxuXHRcdH1cblx0XHRvdXQuc2V0KHRoaXMuY29vcmRpbmF0ZXMpXG5cdFx0cmV0dXJuIG91dFxuXHR9XG59XG5cbmV4cG9ydCB0eXBlIERvdWJsZVRhcERldGVjdG9yT3B0cyA9IHtcblx0dGltZVRocmVzaG9sZDogdGltZS5EdXJhdGlvbixcblx0cG9zaXRpb25UaHJlc2hvbGQ6IG51bWJlclxufVxuXG5leHBvcnQgY2xhc3MgRG91YmxlVGFwRGV0ZWN0b3Ige1xuXHRwcml2YXRlIHRpbWVyOiB0aW1lLkRlbHRhVGltZXJcblx0cHJpdmF0ZSB0b3VjaDogVG91Y2hcblx0cHJpdmF0ZSBiZWdhbjogYm9vbGVhblxuXHRwcml2YXRlIGRvdWJsZXRhcEZ1bmM6IFRvdWNoQ0JUXG5cdHByaXZhdGUgZGVsdGFEdXI6IHRpbWUuRHVyYXRpb25cblx0cHJpdmF0ZSB0aW1lVGhyZXNob2xkOiB0aW1lLkR1cmF0aW9uXG5cdHByaXZhdGUgcG9zaXRpb25UaHJlc2hvbGQ6IG51bWJlclxuXHRwcml2YXRlIGNvb3JkaW5hdGVzOiB2ZWMyXG5cdHByaXZhdGUgY3VycmVudENvb3JkaW5hdGVzOiB2ZWMyXG5cblx0Y29uc3RydWN0b3IodG91Y2g6IFRvdWNoLCBvcHRzPzogRG91YmxlVGFwRGV0ZWN0b3JPcHRzKSB7XG5cdFx0dGhpcy50b3VjaCA9IHRvdWNoXG5cdFx0dGhpcy50aW1lciA9IG5ldyB0aW1lLkRlbHRhVGltZXIoKVxuXHRcdHRoaXMudGltZXIuc2V0UmF0aW8odGltZS5yYXRpb3MubXMoKSlcblx0XHR0aGlzLmJlZ2FuID0gZmFsc2Vcblx0XHR0aGlzLmRvdWJsZXRhcEZ1bmMgPSAoZXZ0KSA9PiB7fVxuXHRcdHRoaXMuZGVsdGFEdXIgPSBuZXcgdGltZS5EdXJhdGlvbih0aW1lLnJhdGlvcy5tcygpLCAwKVxuXHRcdGlmICghb3B0cylcblx0XHRcdG9wdHMgPSBEb3VibGVUYXBEZXRlY3Rvci5EZWZhdWx0cygpXG5cdFx0dGhpcy50aW1lVGhyZXNob2xkID0gb3B0cy50aW1lVGhyZXNob2xkXG5cdFx0dGhpcy5wb3NpdGlvblRocmVzaG9sZCA9IG9wdHMucG9zaXRpb25UaHJlc2hvbGRcblx0XHR0aGlzLmNvb3JkaW5hdGVzID0gdmVjMi5jcmVhdGUoKVxuXHRcdHRoaXMuY3VycmVudENvb3JkaW5hdGVzID0gdmVjMi5jcmVhdGUoKVxuXHRcdHRoaXMuc2V0dXAoKVxuXHR9XG5cblx0cHVibGljIGRvdWJsZXRhcChmdW5jOiBUb3VjaENCVCk6IHZvaWQge1xuXHRcdHRoaXMuZG91YmxldGFwRnVuYyA9IGZ1bmNcblx0fVxuXG5cdHByaXZhdGUgc2V0dXAoKTogdm9pZCB7XG5cdFx0Y29uc3QgdG91Y2ggPSB0aGlzLnRvdWNoXG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXNcblxuXHRcdHRvdWNoLnN0YXJ0KGV2dCA9PiB7XG5cdFx0XHRpZiAoZXZ0LnRvdWNoZXMubGVuZ3RoICE9PSAxKVxuXHRcdFx0XHRyZXR1cm5cblx0XHRcdHNlbGYudGltZXIudXBkYXRlKClcblx0XHRcdHNlbGYuY3VycmVudENvb3JkaW5hdGVzWzBdID0gZXZ0LnRvdWNoZXNbMF0uY2xpZW50WFxuXHRcdFx0c2VsZi5jdXJyZW50Q29vcmRpbmF0ZXNbMV0gPSBldnQudG91Y2hlc1swXS5jbGllbnRZXG5cdFx0XHRpZiAoc2VsZi5iZWdhbikge1xuXHRcdFx0XHRsZXQgZGVsdGEgPSBzZWxmLnRpbWVyLmRlbHRhRHVyYXRpb24oc2VsZi5kZWx0YUR1cilcblx0XHRcdFx0bGV0IGluVGltZSA9IHRpbWUuRHVyYXRpb24ubGUoZGVsdGEsIHNlbGYudGltZVRocmVzaG9sZClcblx0XHRcdFx0bGV0IGRpc3QgPSBtYXRoLmRpc3RhbmNlKHNlbGYuY3VycmVudENvb3JkaW5hdGVzLCBzZWxmLmNvb3JkaW5hdGVzKVxuXHRcdFx0XHRpZiAoaW5UaW1lICYmIGRpc3QgPCBzZWxmLnBvc2l0aW9uVGhyZXNob2xkKSB7XG5cdFx0XHRcdFx0c2VsZi5kb3VibGV0YXBGdW5jKGV2dClcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0c2VsZi5iZWdhbiA9IHRydWVcblx0XHRcdHNlbGYuY29vcmRpbmF0ZXMgPSB2ZWMyLmNvcHkoc2VsZi5jb29yZGluYXRlcywgc2VsZi5jdXJyZW50Q29vcmRpbmF0ZXMpXG5cdFx0fSlcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgRGVmYXVsdHMoKTogRG91YmxlVGFwRGV0ZWN0b3JPcHRzIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dGltZVRocmVzaG9sZDogbmV3IHRpbWUuRHVyYXRpb24odGltZS5yYXRpb3MubXMoKSwgMzUwKSxcblx0XHRcdHBvc2l0aW9uVGhyZXNob2xkOiA0MFxuXHRcdH1cblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2wvaW5wdXQvaW5wdXQteHkudHMiLCJleHBvcnQgZnVuY3Rpb24gaGFzUG9pbnRlckxvY2soKTogYm9vbGVhbiB7XG5cdHJldHVybiAnb25wb2ludGVybG9ja2NoYW5nZScgaW4gZG9jdW1lbnRcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC9jb21tb24vY2FwYWJpbGl0aWVzLnRzIiwidHlwZSBLZXlib2FyZEV2ZW50Q0JUID0gKGV2dDogS2V5Ym9hcmRFdmVudCkgPT4gdm9pZFxuXG5leHBvcnQgZW51bSBLZXlzIHtcblx0VyA9IDg3LFxuXHRBID0gNjUsXG5cdFMgPSA4Myxcblx0RCA9IDY4LFxuXHRMZWZ0ID0gMzcsXG5cdFJpZ2h0ID0gMzksXG5cdFVwID0gMzgsXG5cdERvd24gPSA0MCxcblx0c3BhY2UgPSAzMlxufVxuXG5leHBvcnQgY2xhc3MgS2V5Ym9hcmQge1xuXHRcblx0cHJpdmF0ZSBzdGF0ZTogeyBba2V5Om51bWJlcl06IGJvb2xlYW4gfSA9IHt9XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0bGV0IHN0YXRlID0gdGhpcy5zdGF0ZVxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2dDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuXHRcdFx0c3RhdGVbZXZ0LmtleUNvZGVdID0gdHJ1ZVxuXHRcdH0pXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2dDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuXHRcdFx0c3RhdGVbZXZ0LmtleUNvZGVdID0gZmFsc2Vcblx0XHR9KVxuXHR9XG5cblx0cHVibGljIGlzRG93bihrZXk6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdGxldCByZXMgPSB0aGlzLnN0YXRlW2tleV1cblx0XHRyZXR1cm4gcmVzID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IHJlc1xuXHR9XG5cblx0cHVibGljIGRvd24oZnVuYzogS2V5Ym9hcmRFdmVudENCVCwga2V5PzogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5saXN0ZW5lckltcGwoZnVuYywgJ2tleWRvd24nLCBrZXkpXG5cdH1cblxuXHRwdWJsaWMgdXAoZnVuYzogS2V5Ym9hcmRFdmVudENCVCwga2V5PzogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5saXN0ZW5lckltcGwoZnVuYywgJ2tleXVwJywga2V5KVxuXHR9XG5cblx0cHJpdmF0ZSBsaXN0ZW5lckltcGwoZnVuYzogS2V5Ym9hcmRFdmVudENCVCwga2luZDogc3RyaW5nLCBrZXk/OiBudW1iZXIpOiB2b2lkIHtcblx0XHRsZXQgYW55S2V5ID0ga2V5ID09PSB1bmRlZmluZWQgfHwga2V5ID09PSBudWxsXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoa2luZCwgKGV2dDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuXHRcdFx0aWYgKGFueUtleSB8fCBldnQua2V5Q29kZSA9PT0ga2V5KSB7XG5cdFx0XHRcdGZ1bmMoZXZ0KVxuXHRcdFx0fVxuXHRcdH0pXG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC9pbnB1dC9rZXlib2FyZC50cyIsImltcG9ydCAqIGFzIGVnMSBmcm9tICcuL2RlYnVnLWdsMidcbmltcG9ydCAqIGFzIGVnMiBmcm9tICcuL2RlYnVnLWdsMydcbmltcG9ydCAqIGFzIGNvbnRyb2xzVGVzdCBmcm9tICcuL2NvbnRyb2xzLXRlc3QnXG5cbmNvbnRyb2xzVGVzdC5tYWluKClcbi8vIGVnMS5tYWluKClcbi8vIGVnMi5tYWluKClcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9leGFtcGxlcy9tYWluLnRzIiwiaW1wb3J0ICogYXMgd2dsIGZyb20gJy4uL2dsL3dlYi1nbCdcbmltcG9ydCAqIGFzIHdhdWQgZnJvbSAnLi4vYXVkL3dlYi1hdWRpbydcbmltcG9ydCB7IG1hdDQsIHF1YXQsIHZlYzMsIGdsTWF0cml4IH0gZnJvbSAnZ2wtbWF0cml4J1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFpbigpIHtcblxuXHQvL1x0YXVkaW8gaW5pdFxuXG5cdGNvbnN0IGF1ZGlvTWFuYWdlciA9IG5ldyB3YXVkLkF1ZGlvQ29udGV4dE1hbmFnZXIoKVxuXHRjb25zdCBuTGV2ZWxzID0gMzJcblx0Y29uc3QgYW5hbHlzZXIgPSBuZXcgd2F1ZC5BdWRpb0FuYWx5c2VyKGF1ZGlvTWFuYWdlci5nZXRDb250ZXh0KCksIHtsZXZlbHNDb3VudDogbkxldmVsc30pXG5cdGNvbnN0IGZpbGVzID0gWydzZXAzMC5hYWMnXVxuXG5cdGFuYWx5c2VyLnNldHVwKClcblxuXHRhd2FpdCBQcm9taXNlLmFsbChhdWRpb01hbmFnZXIubG9hZFNvdW5kcyhmaWxlcykpXG5cblx0Y29uc3QgZGVzdGluYXRpb24gPSBhbmFseXNlci5nZXRBbmFseXNlck5vZGUoKVxuXG5cdGNvbnN0IHRvZ2dsZVBsYXkgPSAoKSA9PiBhdWRpb01hbmFnZXIudG9nZ2xlUGxheShmaWxlc1swXSwgZGVzdGluYXRpb24pXG5cblx0Ly9cdGVuZCBhdXRpbyBpbml0XG5cblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nID0gJzAnXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luID0gJzAnXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnXG5cblx0Y29uc3Qga2V5Ym9hcmQgPSBuZXcgd2dsLklucHV0LktleWJvYXJkKClcblx0Y29uc3QgY2FudmFzID0gbmV3IHdnbC5DYW52YXMoKVxuXHRjb25zdCBjYW52YXNFbGVtZW50ID0gY2FudmFzLmVsZW1lbnRcblx0Y29uc3QgZnJhbWVTdGF0cyA9IG5ldyB3Z2wuRnJhbWVTdGF0cygpXG5cblx0a2V5Ym9hcmQuZG93bihldnQgPT4gdG9nZ2xlUGxheSgpLCB3Z2wuSW5wdXQuS2V5cy5zcGFjZSlcblxuXHRjb25zdCBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0ID0gY2FudmFzRWxlbWVudC5nZXRDb250ZXh0KCd3ZWJnbCcpXG5cblx0aWYgKCFnbCkgXG5cdFx0dGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gaW5pdGlhbGl6ZSBHTCBjb250ZXh0LicpXG5cblx0bGV0IGZpcnN0T2JqID0gYXdhaXQgd2dsLkxvYWRlcnMuT0JKLmxvYWRNZXNoKGdsLCAnL29iai90ZXN0OnRlc3Qub2JqJylcblx0bGV0IGZpcnN0VGV4ID0gYXdhaXQgd2dsLkxvYWRlcnMuVEVYLmxvYWQyRChnbCwgJy90ZXgvbmViLnBuZycpXG5cblx0Y29uc3Qgc2NlbmUgPSBuZXcgd2dsLlNjZW5lKGdsKVxuXHRjb25zdCByZW5kZXJlciA9IG5ldyB3Z2wucmVuZGVyZXJzLmZ1bmN0aW9uYWwoZ2wpXG5cdGNvbnN0IGNhbWVyYSA9IG5ldyB3Z2wuQ2FtZXJhKClcblx0Y29uc3Qga2V5Ym9hcmRNb3ZlQ29udHJvbHMgPSBuZXcgd2dsLkNvbnRyb2xzLk1vdmVtZW50LktleWJvYXJkKGtleWJvYXJkLCBjYW1lcmEsIDUuMClcblx0Y29uc3QgdG91Y2hJbnB1dCA9IG5ldyB3Z2wuSW5wdXQuVG91Y2goKVxuXHRjb25zdCBtb3VzZUlucHV0ID0gbmV3IHdnbC5JbnB1dC5Qb2ludGVyTG9jayhjYW52YXMuZWxlbWVudClcblx0Y29uc3QgdG91Y2hNb3ZlQ29udHJvbHMgPSBuZXcgd2dsLkNvbnRyb2xzLk1vdmVtZW50LlRvdWNoKHRvdWNoSW5wdXQsIGNhbWVyYSwgMjUuMClcblxuXHRsZXQgcm90YXRpb25Db250cm9sczogYW55XG5cblx0aWYgKHdnbC5jYXBhYmlsaXRpZXMuaGFzUG9pbnRlckxvY2soKSkge1xuXHRcdHJvdGF0aW9uQ29udHJvbHMgPSBuZXcgd2dsLkNvbnRyb2xzLk9yYml0Lk9yYml0Mihtb3VzZUlucHV0LCBjYW1lcmEpXG5cdH0gZWxzZSB7XG5cdFx0cm90YXRpb25Db250cm9scyA9IG5ldyB3Z2wuQ29udHJvbHMuT3JiaXQuT3JiaXQodG91Y2hJbnB1dCwgY2FtZXJhKVxuXHR9XG5cblx0Ly8gY29uc3QgdG91Y2hSb3RhdGVDb250cm9scyA9IG5ldyB3Z2wuQ29udHJvbHMuUm90YXRpb24uVG91Y2godG91Y2hJbnB1dCwgY2FtZXJhLCAyNS4wKVxuXG5cdGNhbnZhcy5lbGVtZW50Lm9uY2xpY2sgPSBldnQgPT4gdG9nZ2xlUGxheSgpXG5cblx0cmVuZGVyZXIuc2V0QXNwZWN0KGNhbnZhcy5hc3BlY3QpXG5cdHJlbmRlcmVyLnNldE5lYXJGYXIoMC4xLCAxMDAwKVxuXG5cdGNvbnN0IGxpZ2h0ID0gd2dsLkxpZ2h0LkxpZ2h0LlBvaW50KGdsKVxuXHRjb25zdCBsaWdodDIgPSB3Z2wuTGlnaHQuTGlnaHQuRGlyZWN0aW9uYWwoZ2wpXG5cblx0Y29uc3QgcHJvZzogd2dsLlNoYWRlclByb2dyYW0gPSB3Z2wuU2hhZGVyRmFjdG9yeS5DcmVhdGUoZ2wsIHdnbC5TaGFkZXJMaWJyYXJ5LlBCUjEpXG5cdGNvbnN0IHNreWJveFByb2cgPSB3Z2wuU2hhZGVyRmFjdG9yeS5DcmVhdGUoZ2wsIHdnbC5TaGFkZXJMaWJyYXJ5LlNreWJveClcblxuXHRsaWdodC5zZXRDb2xvcihbMSwgMC41LCAwLjI1XSlcblx0bGlnaHQuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLnNldFZhbHVlKFswLCAwLCAtMl0pXG5cblx0bGlnaHQyLnNldENvbG9yKFswLCAwLCAxXSlcblx0bGlnaHQyLmdldEF0dHJpYnV0ZSgnZGlyZWN0aW9uJykuc2V0VmFsdWUoWy0zMCwgLTMwLCAtMzBdKVxuXG5cdGNvbnN0IHNwaGVyZSA9IHdnbC5NZXNoRmFjdG9yeS5jcmVhdGUoZ2wsICdzcGhlcmUnKVxuXHRjb25zdCBwbGFuZSA9IHdnbC5NZXNoRmFjdG9yeS5jcmVhdGUoZ2wsICdxdWFkJylcblx0Y29uc3QgY3ViZU1lc2ggPSB3Z2wuTWVzaEZhY3RvcnkuY3JlYXRlKGdsLCAnY3ViZScpXG5cdGNvbnN0IHNreWJveE1lc2ggPSB3Z2wuTWVzaEZhY3RvcnkuY3JlYXRlKGdsLCAnc2t5Ym94JylcblxuXHRjb25zdCBtYXQgPSB3Z2wuTWF0ZXJpYWwuTWF0ZXJpYWwuUGh5c2ljYWwoZ2wpXG5cblx0Y29uc3QgcGxhbmVNb2RlbCA9IG5ldyB3Z2wuTW9kZWwoZ2wsIHByb2csIHBsYW5lLCBtYXQpXG5cdGNvbnN0IHNwaGVyZU1vZGVsID0gbmV3IHdnbC5Nb2RlbChnbCwgcHJvZywgc3BoZXJlLCBtYXQpXG5cdGNvbnN0IGNvdHRhZ2VNb2RlbCA9IG5ldyB3Z2wuTW9kZWwoZ2wsIHByb2csIGZpcnN0T2JqLCBtYXQuY2xvbmUoKSlcblx0Y29uc3Qgc3VuID0gbmV3IHdnbC5Nb2RlbChnbCwgcHJvZywgc3BoZXJlLCBtYXQuY2xvbmUoKSlcblx0Y29uc3QgYW5jaG9yID0gbmV3IHdnbC5Nb2RlbChnbCwgcHJvZywgc3BoZXJlLCBtYXQuY2xvbmUoKSlcblx0Y29uc3Qgc2t5Ym94ID0gbmV3IHdnbC5Nb2RlbChnbCwgc2t5Ym94UHJvZywgc2t5Ym94TWVzaCwgbWF0LmNsb25lKCkpXG5cblx0c2t5Ym94Lm1hdGVyaWFsLmdldEF0dHJpYnV0ZSgnYWxiZWRvJykuc2V0VmFsdWUoZmlyc3RUZXgpXG5cblx0c3VuLm1hdGVyaWFsLmdldEF0dHJpYnV0ZSgnYWxiZWRvJykuc2V0VmFsdWUobGlnaHQyLmdldENvbG9yKCkpXG5cdGxldCBkaXIgPSBsaWdodDIuZ2V0QXR0cmlidXRlKCdkaXJlY3Rpb24nKS5wZWVrVmFsdWUoKVxuXHRzdW4uc2V0UG9zaXRpb24odmVjMy5uZWdhdGUodmVjMy5jcmVhdGUoKSwgZGlyIGFzIHZlYzMpKVxuXHRzdW4uc2V0U2NhbGUoMTApXG5cblx0Y290dGFnZU1vZGVsLm1hdGVyaWFsLmdldEF0dHJpYnV0ZSgnYWxiZWRvJykuc2V0VmFsdWUoWzAsIDEsIDBdKVxuXHRjb3R0YWdlTW9kZWwuc2V0UG9zaXRpb24oWy01LCAtNSwgLTVdKVxuXG5cdHBsYW5lTW9kZWwuc2V0UG9zaXRpb24odmVjMy5mcm9tVmFsdWVzKDAsIC0xLCAwKSlcblx0cGxhbmVNb2RlbC5zZXRSb3RhdGlvbih2ZWMzLmZyb21WYWx1ZXMoOTAsIDAsIDApKVxuXHRwbGFuZU1vZGVsLnNldFNjYWxlKHZlYzMuZnJvbVZhbHVlcygyLCAyLCAyKSlcblxuXHRsZXQgcGxhbmVNb2RlbHMgPSBnZXRQbGFuZU1vZGVscyhnbCwgcGxhbmVNb2RlbCwgbkxldmVscylcblx0bGV0IGZhclBsYW5lTW9kZWxzID0gZ2V0RmFyUGxhbmVNb2RlbHMoZ2wsIHBsYW5lTW9kZWwsIG5MZXZlbHMpXG5cdGZhclBsYW5lTW9kZWxzLm1hcChtb2RlbCA9PiBtb2RlbC5zZXRNZXNoKGN1YmVNZXNoKSlcblx0bGV0IGZhclBsYW5lUG9zaXRpb25zID0gZmFyUGxhbmVNb2RlbHMubWFwKG1vZGVsID0+IG1vZGVsLmdldFBvc2l0aW9uKCkpXG5cblx0c2NlbmUuYWRkKGZhclBsYW5lTW9kZWxzKVxuXHRzY2VuZS5hZGQoW2xpZ2h0LCBsaWdodDJdKVxuXHRzY2VuZS5hZGQoY290dGFnZU1vZGVsKVxuXG5cdHNjZW5lLmFkZChzdW4pXG5cdHNjZW5lLmFkZChzcGhlcmVNb2RlbClcblxuXHRzY2VuZS5iYWNrZ3JvdW5kID0gc2t5Ym94XG5cblx0ZmFyUGxhbmVNb2RlbHMubWFwKG1vZGVsID0+IGFuY2hvci5hZGRDaGlsZChtb2RlbCkpXG5cblx0c3BoZXJlTW9kZWwuc2V0UG9zaXRpb24oWy01LCAtNSwgMF0pXG5cblx0Y2FtZXJhLnNldFBvc2l0aW9uKFszMCwgOCwgMzFdKVxuXHRjYW1lcmEuc2V0UGl0Y2goLTE3KVxuXHRjYW1lcmEuc2V0WWF3KC00ODcpXG5cblx0Y29uc3QgYW5pbWF0ZSA9ICgpID0+IHtcblxuXHRcdGtleWJvYXJkTW92ZUNvbnRyb2xzLnVwZGF0ZSgpXG5cdFx0cm90YXRpb25Db250cm9scy51cGRhdGUoKVxuXHRcdHRvdWNoTW92ZUNvbnRyb2xzLnVwZGF0ZSgpXG5cblx0XHRmcmFtZVN0YXRzLnVwZGF0ZSgpXG5cdFx0YW5hbHlzZXIudXBkYXRlKClcblxuXHRcdGxldCBsZXZlbHMgPSBhbmFseXNlci5nZXRMZXZlbHMoKVxuXHRcdGxldCB3YXZlcyA9IGFuYWx5c2VyLmdldFdhdmUoKVxuXG5cdFx0cGxhbmVNb2RlbHMubWFwKChtb2RlbCwgaSkgPT4ge1xuXHRcdFx0bGV0IGNvbG9yID0gW2xldmVsc1tpXSwgMS1sZXZlbHNbaV0sIDBdXG5cdFx0XHRtb2RlbC5tYXRlcmlhbC5nZXRBdHRyaWJ1dGUoJ2FsYmVkbycpLnNldFZhbHVlKGNvbG9yKVxuXHRcdH0pXG5cblx0XHRsZXQgcG9zID0gYW5jaG9yLmdldFJvdGF0aW9uKClcblx0XHRwb3NbMV0gKz0gTWF0aC5jb3MoMS82MCkgKiAoYXVkaW9NYW5hZ2VyLmdldFNvdW5kKGZpbGVzWzBdKS5pc1BsYXlpbmcgPyAwLjEgOiAwKVxuXHRcdGFuY2hvci5zZXRSb3RhdGlvbihwb3MpXG5cblx0XHRzcGhlcmVNb2RlbC5zZXRQb3NpdGlvbihbLTUsIHdhdmVzWzBdKjAuMiwgMF0pXG5cdFx0Ly8gbGlnaHQuZ2V0QXR0cmlidXRlKCdjb2xvcicpLnNldFZhbHVlKFswLCAxLU1hdGguYWJzKHdhdmVzWzBdKjAuMSksIDFdKVxuXG5cdFx0ZmFyUGxhbmVNb2RlbHMubWFwKChtb2RlbCwgaSkgPT4ge1xuXHRcdFx0bGV0IHN1YnMgPSB3Z2wudXRpbC5jb21tb24uaW5kMnN1YihpLCBbbkxldmVscywgbkxldmVsc10pXG5cdFx0XHRsZXQgcm93ID0gc3Vic1swXVxuXHRcdFx0bGV0IGNvbCA9IHN1YnNbMV1cblx0XHRcdGxldCB2YWx1ZSA9IGxldmVsc1tjb2xdXG5cdFx0XHRsZXQgZnJhY01heCA9IHJvdyAvIG5MZXZlbHNcblx0XHRcdGxldCBjb2xvciA9IFswLCAxLXZhbHVlLCBmcmFjTWF4ICogdmFsdWVdXG5cdFx0XHRtb2RlbC5tYXRlcmlhbC5nZXRBdHRyaWJ1dGUoJ2FsYmVkbycpLnNldFZhbHVlKGNvbG9yKVxuXHRcdH0pXG5cblx0XHRyZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSlcblxuXHRcdC8vIGdsLmZpbmlzaCgpXG5cblx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpXG5cdH1cblxuXHRhbmltYXRlKClcbn1cblxuZnVuY3Rpb24gZ2V0UGxhbmVNb2RlbHMoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCwgcmVmOiB3Z2wuTW9kZWwsIG5MZXZlbHM6IG51bWJlcik6IEFycmF5PHdnbC5Nb2RlbD4ge1xuXHRsZXQgcGxhbmVNb2RlbHMgPSBbXVxuXHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbkxldmVsczsgaSsrKSB7XG5cdFx0bGV0IHBsYW5lTW9kZWw6IHdnbC5Nb2RlbCA9IG5ldyB3Z2wuTW9kZWwoZ2wsIHJlZi5wcm9ncmFtLCByZWYubWVzaCwgcmVmLm1hdGVyaWFsLmNsb25lKCkpXG5cdFx0cGxhbmVNb2RlbC5zZXRQb3NpdGlvbihbMCwgLWktMSwgMF0pXG5cdFx0cGxhbmVNb2RlbC5zZXRSb3RhdGlvbihbOTAsIDAsIDBdKVxuXHRcdHBsYW5lTW9kZWxzLnB1c2gocGxhbmVNb2RlbClcblx0fVxuXHRyZXR1cm4gcGxhbmVNb2RlbHNcbn1cblxuZnVuY3Rpb24gZ2V0RmFyUGxhbmVNb2RlbHMoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCwgcmVmOiB3Z2wuTW9kZWwsIG5Nb2RlbHM6IG51bWJlcik6IEFycmF5PHdnbC5Nb2RlbD4ge1xuXHRsZXQgcGxhbmVNb2RlbHM6IEFycmF5PHdnbC5Nb2RlbD4gPSBbXVxuXHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbk1vZGVsczsgaSsrKSB7XG5cdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IG5Nb2RlbHM7IGorKykge1xuXHRcdFx0bGV0IHBsYW5lTW9kZWw6IHdnbC5Nb2RlbCA9IG5ldyB3Z2wuTW9kZWwoZ2wsIHJlZi5wcm9ncmFtLCByZWYubWVzaCwgcmVmLm1hdGVyaWFsLmNsb25lKCkpXG5cdFx0XHRwbGFuZU1vZGVsLnNldFBvc2l0aW9uKFtpLzIsIGovMiwgLTEwXSlcblx0XHRcdHBsYW5lTW9kZWwuc2V0U2NhbGUoMC41KVxuXHRcdFx0cGxhbmVNb2RlbHMucHVzaChwbGFuZU1vZGVsKVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gcGxhbmVNb2RlbHNcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9leGFtcGxlcy9jb250cm9scy10ZXN0LnRzIiwiaW1wb3J0IHsgTWVzaEZhY3RvcnksIE1lc2hUeXBlcyB9IGZyb20gJy4vbWVzaC9tZXNoLWZhY3RvcnknXG5pbXBvcnQgeyBNZXNoTGlicmFyeSB9IGZyb20gJy4vbWVzaC9tZXNoLWxpYnJhcnknXG5pbXBvcnQgKiBhcyBNYXRlcmlhbCBmcm9tICcuL21hdGVyaWFsL21hdGVyaWFsJ1xuaW1wb3J0ICogYXMgTGlnaHQgZnJvbSAnLi9saWdodC9saWdodCdcbmltcG9ydCB7IE1lc2ggfSBmcm9tICcuL21lc2gvbWVzaCdcbmltcG9ydCB7IE1vZGVsIH0gZnJvbSAnLi9tb2RlbC9tb2RlbCdcbmltcG9ydCB7IFZlcnRleCwgVG9wb2xvZ2llcyB9IGZyb20gJy4vbWVzaC92ZXJ0ZXgnXG5pbXBvcnQgeyBTaGFkZXIsIFNoYWRlclByb2dyYW0sIFNoYWRlclNvdXJjZSwgU2hhZGVyVHlwZXMgfSBmcm9tICcuL3NoYWRlci9zaGFkZXInXG5pbXBvcnQgeyBTaGFkZXJMaWJyYXJ5IH0gZnJvbSAnLi9zaGFkZXIvc2hhZGVyLWxpYnJhcnknXG5pbXBvcnQgeyBTaGFkZXJGYWN0b3J5IH0gZnJvbSAnLi9zaGFkZXIvc2hhZGVyLWZhY3RvcnknXG5pbXBvcnQgeyBDYW1lcmEsIGRpcmVjdGlvbnMgfSBmcm9tICcuL2NhbWVyYS9jYW1lcmEnXG5pbXBvcnQgeyBTY2VuZSB9IGZyb20gJy4vc2NlbmUvc2NlbmUnXG5pbXBvcnQgeyBGcmFtZVN0YXRzIH0gZnJvbSAnLi9jb21tb24vZnJhbWUtc3RhdHMnXG5pbXBvcnQgKiBhcyByZW5kZXJlcnMgZnJvbSAnLi9yZW5kZXJlcnMvcmVuZGVyZXJzJ1xuaW1wb3J0ICogYXMgbWF0aCBmcm9tICcuL21hdGgvd2dsLW1hdGgnXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbC91dGlsJ1xuaW1wb3J0IHsgQ2FudmFzIH0gZnJvbSAnLi9jb21tb24vY2FudmFzJ1xuaW1wb3J0ICogYXMgTG9hZGVycyBmcm9tICcuL2xvYWRlcnMvbG9hZGVycydcbmltcG9ydCAqIGFzIElucHV0IGZyb20gJy4vaW5wdXQvaW5wdXQnXG5pbXBvcnQgKiBhcyBDb250cm9scyBmcm9tICcuL2lucHV0L2NhbWVyYS1jb250cm9scydcbmltcG9ydCAqIGFzIGNhcGFiaWxpdGllcyBmcm9tICcuL2NvbW1vbi9jYXBhYmlsaXRpZXMnXG5cbmV4cG9ydCB7XG5cdGNhcGFiaWxpdGllcyxcblx0Q2FtZXJhLFxuXHRDYW52YXMsXG5cdENvbnRyb2xzLFxuXHRkaXJlY3Rpb25zLFxuXHRJbnB1dCxcblx0RnJhbWVTdGF0cyxcblx0TGlnaHQsXG5cdExvYWRlcnMsXG5cdG1hdGgsXG5cdE1hdGVyaWFsLFxuXHRNZXNoRmFjdG9yeSxcblx0TWVzaFR5cGVzLFxuXHRNZXNoTGlicmFyeSxcblx0TWVzaCxcblx0TW9kZWwsXG5cdFZlcnRleCxcblx0VG9wb2xvZ2llcyxcblx0cmVuZGVyZXJzLFxuXHRTY2VuZSxcblx0U2hhZGVyU291cmNlLFxuXHRTaGFkZXJUeXBlcyxcblx0U2hhZGVyLFxuXHRTaGFkZXJQcm9ncmFtLFxuXHRTaGFkZXJMaWJyYXJ5LFxuXHRTaGFkZXJGYWN0b3J5LFxuXHR1dGlsXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2wvd2ViLWdsLnRzIiwiaW1wb3J0IHsgVmVydGV4LCBUb3BvbG9naWVzIH0gZnJvbSAnLi92ZXJ0ZXgnXG5pbXBvcnQgeyBNZXNoIH0gZnJvbSAnLi9tZXNoJ1xuaW1wb3J0IHsgTWVzaExpYnJhcnkgfSBmcm9tICcuL21lc2gtbGlicmFyeSdcbmltcG9ydCAqIGFzIG1hdGggZnJvbSAnLi4vbWF0aC93Z2wtbWF0aCdcblxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dlYkdMX0FQSS9UdXRvcmlhbC9DcmVhdGluZ18zRF9vYmplY3RzX3VzaW5nX1dlYkdMXG5cbnR5cGUgTWVzaFR5cGVzID0gJ3F1YWQnIHwgJ3RyaWFuZ2xlJyB8ICdzcGhlcmUnIHwgJ2N1YmUnIHwgJ3NreWJveCdcblxudHlwZSBNZXNoQ3JlYXRlT3B0aW9ucyA9IHtcbiAgICBmaW5hbGl6ZTogYm9vbGVhblxuICAgIHZlcnRleENvdW50OiBudW1iZXJcbn1cblxuY2xhc3MgTWVzaEZhY3Rvcnkge1xuXG4gICAgcHVibGljIHN0YXRpYyBEZWZhdWx0cygpOiBNZXNoQ3JlYXRlT3B0aW9ucyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmaW5hbGl6ZTogdHJ1ZSxcbiAgICAgICAgICAgIHZlcnRleENvdW50OiA2NFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGUoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCwgXG4gICAgICAgIGtpbmQ6IE1lc2hUeXBlcywgaW5PcHRzOiBPYmplY3QgPSBNZXNoRmFjdG9yeS5EZWZhdWx0cygpKTogTWVzaCB7XG5cbiAgICAgICAgY29uc3Qgb3B0cyA9IE1lc2hGYWN0b3J5LkRlZmF1bHRzKClcbiAgICAgICAgT2JqZWN0LmFzc2lnbihvcHRzLCBpbk9wdHMpXG5cbiAgICAgICAgbGV0IG1lc2g6IE1lc2ggPSBuZXcgTWVzaChnbClcbiAgICAgICAgc3dpdGNoIChraW5kKSB7XG4gICAgICAgICAgICBjYXNlICdxdWFkJzpcbiAgICAgICAgICAgICAgICBNZXNoRmFjdG9yeS5tYWtlUXVhZChtZXNoKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICd0cmlhbmdsZSc6XG4gICAgICAgICAgICAgICAgTWVzaEZhY3RvcnkubWFrZVRyaWFuZ2xlKG1lc2gpXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ3NwaGVyZSc6XG4gICAgICAgICAgICAgICAgTWVzaEZhY3RvcnkubWFrZVNwaGVyZShtZXNoLCBvcHRzLnZlcnRleENvdW50KVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdjdWJlJzpcbiAgICAgICAgICAgICAgICBNZXNoRmFjdG9yeS5tYWtlQ3ViZShtZXNoKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdza3lib3gnOlxuICAgICAgICAgICAgICAgIE1lc2hGYWN0b3J5Lm1ha2VTa3lib3gobWVzaClcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdHMuZmluYWxpemUpXG4gICAgICAgICAgICBtZXNoLmZpbmFsaXplKClcblxuICAgICAgICByZXR1cm4gbWVzaFxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgbWFrZVNreWJveChtZXNoOiBNZXNoKSB7XG4gICAgICAgIGNvbnN0IGZsb2F0MzJWZXJ0ZXhEYXRhOiBGbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KE1lc2hMaWJyYXJ5LnNreWJveC5kYXRhKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM2OyBpKyspIHtcbiAgICAgICAgICAgIGxldCB2ZXJ0ZXg6IFZlcnRleCA9IG5ldyBWZXJ0ZXgoKVxuICAgICAgICAgICAgbGV0IHgsIHksIHosIHUsIHYsIG54LCBueSwgbno6IG51bWJlclxuXG4gICAgICAgICAgICB4ID0gZmxvYXQzMlZlcnRleERhdGFbaSo1KzBdXG4gICAgICAgICAgICB5ID0gZmxvYXQzMlZlcnRleERhdGFbaSo1KzFdXG4gICAgICAgICAgICB6ID0gZmxvYXQzMlZlcnRleERhdGFbaSo1KzJdXG5cbiAgICAgICAgICAgIHUgPSBmbG9hdDMyVmVydGV4RGF0YVtpKjUrM11cbiAgICAgICAgICAgIHYgPSBmbG9hdDMyVmVydGV4RGF0YVtpKjUrNF1cblxuICAgICAgICAgICAgbnggPSAwXG4gICAgICAgICAgICBueSA9IDBcbiAgICAgICAgICAgIG56ID0gMFxuXG4gICAgICAgICAgICB2ZXJ0ZXguc2V0UG9zaXRpb24obmV3IEZsb2F0MzJBcnJheShbeCwgeSwgel0pKVxuICAgICAgICAgICAgdmVydGV4LnNldFVWKG5ldyBGbG9hdDMyQXJyYXkoW3UsIHZdKSlcbiAgICAgICAgICAgIHZlcnRleC5zZXROb3JtYWwobmV3IEZsb2F0MzJBcnJheShbbngsIG55LCBuel0pKVxuXG4gICAgICAgICAgICBtZXNoLmFkZFZlcnRleCh2ZXJ0ZXgpXG4gICAgICAgIH1cblxuICAgICAgICBtZXNoLnNldFRvcG9sb2d5KFRvcG9sb2dpZXMuVFJJQU5HTEVTKVxuICAgIH1cblx0XG5cdHB1YmxpYyBzdGF0aWMgbWFrZVF1YWQobWVzaDogTWVzaCkge1xuXG4gICAgICAgIGNvbnN0IGZsb2F0MzJWZXJ0ZXhEYXRhOiBGbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KE1lc2hMaWJyYXJ5LnF1YWQuZGF0YSlcblxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgIFx0bGV0IHZlcnRleDogVmVydGV4ID0gbmV3IFZlcnRleCgpXG4gICAgICAgIFx0bGV0IHgsIHksIHosIHUsIHYsIG54LCBueSwgbno6IG51bWJlclxuXG4gICAgICAgIFx0eCA9IGZsb2F0MzJWZXJ0ZXhEYXRhW2kqOCswXVxuICAgICAgICBcdHkgPSBmbG9hdDMyVmVydGV4RGF0YVtpKjgrMV1cbiAgICAgICAgXHR6ID0gZmxvYXQzMlZlcnRleERhdGFbaSo4KzJdXG4gICAgICAgIFx0dSA9IGZsb2F0MzJWZXJ0ZXhEYXRhW2kqOCszXVxuICAgICAgICBcdHYgPSBmbG9hdDMyVmVydGV4RGF0YVtpKjgrNF1cbiAgICAgICAgXHRueCA9IGZsb2F0MzJWZXJ0ZXhEYXRhW2kqOCs1XVxuICAgICAgICBcdG55ID0gZmxvYXQzMlZlcnRleERhdGFbaSo4KzZdXG4gICAgICAgIFx0bnogPSBmbG9hdDMyVmVydGV4RGF0YVtpKjgrN11cblxuICAgICAgICBcdHZlcnRleC5zZXRQb3NpdGlvbihuZXcgRmxvYXQzMkFycmF5KFt4LCB5LCB6XSkpXG4gICAgICAgIFx0dmVydGV4LnNldFVWKG5ldyBGbG9hdDMyQXJyYXkoW3UsIHZdKSlcbiAgICAgICAgXHR2ZXJ0ZXguc2V0Tm9ybWFsKG5ldyBGbG9hdDMyQXJyYXkoW254LCBueSwgbnpdKSlcblxuICAgICAgICBcdG1lc2guYWRkVmVydGV4KHZlcnRleClcbiAgICAgICAgfVxuICAgICAgICBtZXNoLnNldFRvcG9sb2d5KFRvcG9sb2dpZXMuVFJJQU5HTEVTKVxuXHR9XG5cblx0cHVibGljIHN0YXRpYyBtYWtlQ3ViZShtZXNoOiBNZXNoKSB7XG5cblx0XHRjb25zdCBmbG9hdDMyVmVydGV4RGF0YTogRmxvYXQzMkFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShNZXNoTGlicmFyeS5jdWJlMi5kYXRhKVxuXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IDM2OyBpKyspIHtcbiAgICAgICAgXHRsZXQgdmVydGV4OiBWZXJ0ZXggPSBuZXcgVmVydGV4KClcbiAgICAgICAgXHRsZXQgeCwgeSwgejogbnVtYmVyXG4gICAgICAgIFx0bGV0IG54LCBueSwgbnosIHUsIHY6IG51bWJlclxuXG4gICAgICAgIFx0eCA9IGZsb2F0MzJWZXJ0ZXhEYXRhW2kqOCswXVxuICAgICAgICBcdHkgPSBmbG9hdDMyVmVydGV4RGF0YVtpKjgrMV1cbiAgICAgICAgXHR6ID0gZmxvYXQzMlZlcnRleERhdGFbaSo4KzJdXG5cbiAgICAgICAgICAgIC8vIHRoZXNlIGFyZSBmbGlwcGVkIGJlY2F1c2UgdGhleSB3ZXJlIGNvcGllZCB0aGF0IHdheSxcbiAgICAgICAgICAgIC8vIGFuZCBpbSB0b28gbGF6eSB0byBjaGFuZ2UgaXRcblxuICAgICAgICBcdG54ID0gZmxvYXQzMlZlcnRleERhdGFbaSo4KzNdXG4gICAgICAgIFx0bnkgPSBmbG9hdDMyVmVydGV4RGF0YVtpKjgrNF1cbiAgICAgICAgXHRueiA9IGZsb2F0MzJWZXJ0ZXhEYXRhW2kqOCs1XVxuXG4gICAgICAgIFx0dSA9IGZsb2F0MzJWZXJ0ZXhEYXRhW2kqOCs2XVxuICAgICAgICBcdHYgPSBmbG9hdDMyVmVydGV4RGF0YVtpKjgrN11cblxuICAgICAgICBcdHZlcnRleC5zZXRQb3NpdGlvbihuZXcgRmxvYXQzMkFycmF5KFt4LCB5LCB6XSkpXG4gICAgICAgIFx0dmVydGV4LnNldE5vcm1hbChuZXcgRmxvYXQzMkFycmF5KFtueCwgbnksIG56XSkpXG4gICAgICAgIFx0dmVydGV4LnNldFVWKG5ldyBGbG9hdDMyQXJyYXkoW3UsIHZdKSlcbiAgICAgICAgXHRtZXNoLmFkZFZlcnRleCh2ZXJ0ZXgpXG4gICAgICAgIH1cblxuICAgICAgICBtZXNoLnNldFRvcG9sb2d5KFRvcG9sb2dpZXMuVFJJQU5HTEVTKVxuXHR9XG5cblx0cHVibGljIHN0YXRpYyBtYWtlVHJpYW5nbGUobWVzaDogTWVzaCkge1xuXG5cdFx0Y29uc3QgZmxvYXQzMlZlcnRleERhdGE6IEZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoTWVzaExpYnJhcnkudHJpYW5nbGUuZGF0YSlcblxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgIFx0bGV0IHZlcnRleDogVmVydGV4ID0gbmV3IFZlcnRleCgpXG5cbiAgICAgICAgXHRsZXQgeCwgeSwgeiwgdSwgdiwgbngsIG55LCBuejogbnVtYmVyXG4gICAgICAgIFx0eCA9IGZsb2F0MzJWZXJ0ZXhEYXRhW2kqOCswXVxuICAgICAgICBcdHkgPSBmbG9hdDMyVmVydGV4RGF0YVtpKjgrMV1cbiAgICAgICAgXHR6ID0gZmxvYXQzMlZlcnRleERhdGFbaSo4KzJdXG4gICAgICAgIFx0dSA9IGZsb2F0MzJWZXJ0ZXhEYXRhW2kqOCszXVxuICAgICAgICBcdHYgPSBmbG9hdDMyVmVydGV4RGF0YVtpKjgrNF1cbiAgICAgICAgXHRueCA9IGZsb2F0MzJWZXJ0ZXhEYXRhW2kqOCs1XVxuICAgICAgICBcdG55ID0gZmxvYXQzMlZlcnRleERhdGFbaSo4KzZdXG4gICAgICAgIFx0bnogPSBmbG9hdDMyVmVydGV4RGF0YVtpKjgrN11cblxuICAgICAgICBcdHZlcnRleC5zZXRQb3NpdGlvbihuZXcgRmxvYXQzMkFycmF5KFt4LCB5LCB6XSkpXG4gICAgICAgIFx0dmVydGV4LnNldFVWKG5ldyBGbG9hdDMyQXJyYXkoW3UsIHZdKSlcbiAgICAgICAgXHR2ZXJ0ZXguc2V0Tm9ybWFsKG5ldyBGbG9hdDMyQXJyYXkoW254LCBueSwgbnpdKSlcblxuICAgICAgICBcdG1lc2guYWRkVmVydGV4KHZlcnRleClcbiAgICAgICAgfVxuICAgICAgICBtZXNoLnNldFRvcG9sb2d5KFRvcG9sb2dpZXMuVFJJQU5HTEVTKVxuXHR9XG5cblx0cHVibGljIHN0YXRpYyBtYWtlU3BoZXJlKG1lc2g6IE1lc2gsIHZlcnRleENvdW50OiBudW1iZXIgPSA2NCkge1xuXHRcdGlmICghbWF0aC5pc1BvdzIodmVydGV4Q291bnQpKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdWZXJ0ZXggY291bnQgbXVzdCBiZSBhIHBvd2VyIG9mIDIuJylcblxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB2ZXJ0ZXhDb3VudDsgaSsrKSB7XG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgdmVydGV4Q291bnQ7IGorKykge1xuXHRcdFx0XHRsZXQgeFNlZ21lbnQ6IG51bWJlciA9IGogLyAodmVydGV4Q291bnQtMSlcblx0XHRcdFx0bGV0IHlTZWdtZW50OiBudW1iZXIgPSBpIC8gKHZlcnRleENvdW50LTEpXG5cblx0XHRcdFx0bGV0IHhQb3M6IG51bWJlciA9IE1hdGguY29zKHhTZWdtZW50ICogMiAqIE1hdGguUEkpICogTWF0aC5zaW4oeVNlZ21lbnQgKiBNYXRoLlBJKVxuXHRcdFx0XHRsZXQgeVBvczogbnVtYmVyID0gTWF0aC5jb3MoeVNlZ21lbnQgKiBNYXRoLlBJKVxuXHRcdFx0XHRsZXQgelBvczogbnVtYmVyID0gTWF0aC5zaW4oeFNlZ21lbnQgKiAyICogTWF0aC5QSSkgKiBNYXRoLnNpbih5U2VnbWVudCAqIE1hdGguUEkpXG5cblx0XHRcdFx0bGV0IHZlcnRleDogVmVydGV4ID0gbmV3IFZlcnRleCgpXG5cdFx0XHRcdHZlcnRleC5zZXRQb3NpdGlvbihuZXcgRmxvYXQzMkFycmF5KFt4UG9zLCB5UG9zLCB6UG9zXSkpXG5cdFx0XHRcdHZlcnRleC5zZXRVVihuZXcgRmxvYXQzMkFycmF5KFt4U2VnbWVudCwgeVNlZ21lbnRdKSlcblx0XHRcdFx0dmVydGV4LnNldE5vcm1hbChuZXcgRmxvYXQzMkFycmF5KFt4UG9zLCB5UG9zLCB6UG9zXSkpXG5cblx0XHRcdFx0bWVzaC5hZGRWZXJ0ZXgodmVydGV4KVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGxldCBmaXJzdEluZGV4OiBudW1iZXIgPSAwXG5cdFx0bGV0IG5leHRJbmRleDogbnVtYmVyID0gdmVydGV4Q291bnRcblx0XHRsZXQgaW5kZXhTdHA6IG51bWJlciA9IDBcblx0XHRsZXQgc2hvdWxkUHJvY2VlZDogYm9vbGVhbiA9IHRydWVcblx0XHRsZXQgaW5kaWNlczogQXJyYXk8bnVtYmVyPiA9IFtdXG5cblx0XHR3aGlsZSAoc2hvdWxkUHJvY2VlZCkge1xuXHRcdFx0aW5kaWNlcy5wdXNoKGZpcnN0SW5kZXgpXG5cdFx0XHRpbmRpY2VzLnB1c2gobmV4dEluZGV4KVxuXHRcdFx0aW5kZXhTdHAgKz0gMlxuXG5cdFx0XHRzaG91bGRQcm9jZWVkID0gbmV4dEluZGV4ICE9ICh2ZXJ0ZXhDb3VudCAqIHZlcnRleENvdW50KSAtIDFcblxuXHRcdFx0aWYgKGluZGV4U3RwID4gMCAmJiAobmV4dEluZGV4KzEpICUgdmVydGV4Q291bnQgPT0gMCAmJiBzaG91bGRQcm9jZWVkKSB7XG5cdFx0XHRcdGluZGljZXMucHVzaChuZXh0SW5kZXgpXG5cdFx0XHRcdGluZGljZXMucHVzaChmaXJzdEluZGV4KzEpXG5cdFx0XHRcdGluZGV4U3RwICs9IDJcblx0XHRcdH1cblxuXHRcdFx0Zmlyc3RJbmRleCsrXG5cdFx0XHRuZXh0SW5kZXgrK1xuXHRcdH1cblxuXHRcdG1lc2guc2V0VG9wb2xvZ3koVG9wb2xvZ2llcy5UUklBTkdMRV9TVFJJUClcblx0XHRtZXNoLnNldEluZGljZXMobmV3IFVpbnQxNkFycmF5KGluZGljZXMpKVxuXG5cdH1cblxufVxuXG5leHBvcnQgeyBNZXNoRmFjdG9yeSwgTWVzaFR5cGVzIH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC9tZXNoL21lc2gtZmFjdG9yeS50cyIsInZhciB2MSA9IHJlcXVpcmUoJy4vdjEnKTtcbnZhciB2NCA9IHJlcXVpcmUoJy4vdjQnKTtcblxudmFyIHV1aWQgPSB2NDtcbnV1aWQudjEgPSB2MTtcbnV1aWQudjQgPSB2NDtcblxubW9kdWxlLmV4cG9ydHMgPSB1dWlkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdXVpZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJuZyA9IHJlcXVpcmUoJy4vbGliL3JuZycpO1xudmFyIGJ5dGVzVG9VdWlkID0gcmVxdWlyZSgnLi9saWIvYnl0ZXNUb1V1aWQnKTtcblxuLy8gKipgdjEoKWAgLSBHZW5lcmF0ZSB0aW1lLWJhc2VkIFVVSUQqKlxuLy9cbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9MaW9zSy9VVUlELmpzXG4vLyBhbmQgaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L3V1aWQuaHRtbFxuXG4vLyByYW5kb20gIydzIHdlIG5lZWQgdG8gaW5pdCBub2RlIGFuZCBjbG9ja3NlcVxudmFyIF9zZWVkQnl0ZXMgPSBybmcoKTtcblxuLy8gUGVyIDQuNSwgY3JlYXRlIGFuZCA0OC1iaXQgbm9kZSBpZCwgKDQ3IHJhbmRvbSBiaXRzICsgbXVsdGljYXN0IGJpdCA9IDEpXG52YXIgX25vZGVJZCA9IFtcbiAgX3NlZWRCeXRlc1swXSB8IDB4MDEsXG4gIF9zZWVkQnl0ZXNbMV0sIF9zZWVkQnl0ZXNbMl0sIF9zZWVkQnl0ZXNbM10sIF9zZWVkQnl0ZXNbNF0sIF9zZWVkQnl0ZXNbNV1cbl07XG5cbi8vIFBlciA0LjIuMiwgcmFuZG9taXplICgxNCBiaXQpIGNsb2Nrc2VxXG52YXIgX2Nsb2Nrc2VxID0gKF9zZWVkQnl0ZXNbNl0gPDwgOCB8IF9zZWVkQnl0ZXNbN10pICYgMHgzZmZmO1xuXG4vLyBQcmV2aW91cyB1dWlkIGNyZWF0aW9uIHRpbWVcbnZhciBfbGFzdE1TZWNzID0gMCwgX2xhc3ROU2VjcyA9IDA7XG5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYnJvb2ZhL25vZGUtdXVpZCBmb3IgQVBJIGRldGFpbHNcbmZ1bmN0aW9uIHYxKG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuICB2YXIgYiA9IGJ1ZiB8fCBbXTtcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB2YXIgY2xvY2tzZXEgPSBvcHRpb25zLmNsb2Nrc2VxICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmNsb2Nrc2VxIDogX2Nsb2Nrc2VxO1xuXG4gIC8vIFVVSUQgdGltZXN0YW1wcyBhcmUgMTAwIG5hbm8tc2Vjb25kIHVuaXRzIHNpbmNlIHRoZSBHcmVnb3JpYW4gZXBvY2gsXG4gIC8vICgxNTgyLTEwLTE1IDAwOjAwKS4gIEpTTnVtYmVycyBhcmVuJ3QgcHJlY2lzZSBlbm91Z2ggZm9yIHRoaXMsIHNvXG4gIC8vIHRpbWUgaXMgaGFuZGxlZCBpbnRlcm5hbGx5IGFzICdtc2VjcycgKGludGVnZXIgbWlsbGlzZWNvbmRzKSBhbmQgJ25zZWNzJ1xuICAvLyAoMTAwLW5hbm9zZWNvbmRzIG9mZnNldCBmcm9tIG1zZWNzKSBzaW5jZSB1bml4IGVwb2NoLCAxOTcwLTAxLTAxIDAwOjAwLlxuICB2YXIgbXNlY3MgPSBvcHRpb25zLm1zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm1zZWNzIDogbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgLy8gUGVyIDQuMi4xLjIsIHVzZSBjb3VudCBvZiB1dWlkJ3MgZ2VuZXJhdGVkIGR1cmluZyB0aGUgY3VycmVudCBjbG9ja1xuICAvLyBjeWNsZSB0byBzaW11bGF0ZSBoaWdoZXIgcmVzb2x1dGlvbiBjbG9ja1xuICB2YXIgbnNlY3MgPSBvcHRpb25zLm5zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5zZWNzIDogX2xhc3ROU2VjcyArIDE7XG5cbiAgLy8gVGltZSBzaW5jZSBsYXN0IHV1aWQgY3JlYXRpb24gKGluIG1zZWNzKVxuICB2YXIgZHQgPSAobXNlY3MgLSBfbGFzdE1TZWNzKSArIChuc2VjcyAtIF9sYXN0TlNlY3MpLzEwMDAwO1xuXG4gIC8vIFBlciA0LjIuMS4yLCBCdW1wIGNsb2Nrc2VxIG9uIGNsb2NrIHJlZ3Jlc3Npb25cbiAgaWYgKGR0IDwgMCAmJiBvcHRpb25zLmNsb2Nrc2VxID09PSB1bmRlZmluZWQpIHtcbiAgICBjbG9ja3NlcSA9IGNsb2Nrc2VxICsgMSAmIDB4M2ZmZjtcbiAgfVxuXG4gIC8vIFJlc2V0IG5zZWNzIGlmIGNsb2NrIHJlZ3Jlc3NlcyAobmV3IGNsb2Nrc2VxKSBvciB3ZSd2ZSBtb3ZlZCBvbnRvIGEgbmV3XG4gIC8vIHRpbWUgaW50ZXJ2YWxcbiAgaWYgKChkdCA8IDAgfHwgbXNlY3MgPiBfbGFzdE1TZWNzKSAmJiBvcHRpb25zLm5zZWNzID09PSB1bmRlZmluZWQpIHtcbiAgICBuc2VjcyA9IDA7XG4gIH1cblxuICAvLyBQZXIgNC4yLjEuMiBUaHJvdyBlcnJvciBpZiB0b28gbWFueSB1dWlkcyBhcmUgcmVxdWVzdGVkXG4gIGlmIChuc2VjcyA+PSAxMDAwMCkge1xuICAgIHRocm93IG5ldyBFcnJvcigndXVpZC52MSgpOiBDYW5cXCd0IGNyZWF0ZSBtb3JlIHRoYW4gMTBNIHV1aWRzL3NlYycpO1xuICB9XG5cbiAgX2xhc3RNU2VjcyA9IG1zZWNzO1xuICBfbGFzdE5TZWNzID0gbnNlY3M7XG4gIF9jbG9ja3NlcSA9IGNsb2Nrc2VxO1xuXG4gIC8vIFBlciA0LjEuNCAtIENvbnZlcnQgZnJvbSB1bml4IGVwb2NoIHRvIEdyZWdvcmlhbiBlcG9jaFxuICBtc2VjcyArPSAxMjIxOTI5MjgwMDAwMDtcblxuICAvLyBgdGltZV9sb3dgXG4gIHZhciB0bCA9ICgobXNlY3MgJiAweGZmZmZmZmYpICogMTAwMDAgKyBuc2VjcykgJSAweDEwMDAwMDAwMDtcbiAgYltpKytdID0gdGwgPj4+IDI0ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDE2ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bCAmIDB4ZmY7XG5cbiAgLy8gYHRpbWVfbWlkYFxuICB2YXIgdG1oID0gKG1zZWNzIC8gMHgxMDAwMDAwMDAgKiAxMDAwMCkgJiAweGZmZmZmZmY7XG4gIGJbaSsrXSA9IHRtaCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRtaCAmIDB4ZmY7XG5cbiAgLy8gYHRpbWVfaGlnaF9hbmRfdmVyc2lvbmBcbiAgYltpKytdID0gdG1oID4+PiAyNCAmIDB4ZiB8IDB4MTA7IC8vIGluY2x1ZGUgdmVyc2lvblxuICBiW2krK10gPSB0bWggPj4+IDE2ICYgMHhmZjtcblxuICAvLyBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGAgKFBlciA0LjIuMiAtIGluY2x1ZGUgdmFyaWFudClcbiAgYltpKytdID0gY2xvY2tzZXEgPj4+IDggfCAweDgwO1xuXG4gIC8vIGBjbG9ja19zZXFfbG93YFxuICBiW2krK10gPSBjbG9ja3NlcSAmIDB4ZmY7XG5cbiAgLy8gYG5vZGVgXG4gIHZhciBub2RlID0gb3B0aW9ucy5ub2RlIHx8IF9ub2RlSWQ7XG4gIGZvciAodmFyIG4gPSAwOyBuIDwgNjsgKytuKSB7XG4gICAgYltpICsgbl0gPSBub2RlW25dO1xuICB9XG5cbiAgcmV0dXJuIGJ1ZiA/IGJ1ZiA6IGJ5dGVzVG9VdWlkKGIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHYxO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdXVpZC92MS5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcm5nID0gcmVxdWlyZSgnLi9saWIvcm5nJyk7XG52YXIgYnl0ZXNUb1V1aWQgPSByZXF1aXJlKCcuL2xpYi9ieXRlc1RvVXVpZCcpO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcblxuICBpZiAodHlwZW9mKG9wdGlvbnMpID09ICdzdHJpbmcnKSB7XG4gICAgYnVmID0gb3B0aW9ucyA9PSAnYmluYXJ5JyA/IG5ldyBBcnJheSgxNikgOiBudWxsO1xuICAgIG9wdGlvbnMgPSBudWxsO1xuICB9XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTtcblxuICAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG4gIHJuZHNbNl0gPSAocm5kc1s2XSAmIDB4MGYpIHwgMHg0MDtcbiAgcm5kc1s4XSA9IChybmRzWzhdICYgMHgzZikgfCAweDgwO1xuXG4gIC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuICBpZiAoYnVmKSB7XG4gICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IDE2OyArK2lpKSB7XG4gICAgICBidWZbaSArIGlpXSA9IHJuZHNbaWldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBidWYgfHwgYnl0ZXNUb1V1aWQocm5kcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdjQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy91dWlkL3Y0LmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEJyYW5kb24gSm9uZXMsIENvbGluIE1hY0tlbnppZSBJVi5cblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5mdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5BVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuVEhFIFNPRlRXQVJFLiAqL1xuXG5pbXBvcnQgKiBhcyBnbE1hdHJpeCBmcm9tIFwiLi9jb21tb25cIlxuXG4vKipcbiAqIDJ4MiBNYXRyaXhcbiAqIEBtb2R1bGUgbWF0MlxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBpZGVudGl0eSBtYXQyXG4gKlxuICogQHJldHVybnMge21hdDJ9IGEgbmV3IDJ4MiBtYXRyaXhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgbGV0IG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDQpO1xuICBvdXRbMF0gPSAxO1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgbWF0MiBpbml0aWFsaXplZCB3aXRoIHZhbHVlcyBmcm9tIGFuIGV4aXN0aW5nIG1hdHJpeFxuICpcbiAqIEBwYXJhbSB7bWF0Mn0gYSBtYXRyaXggdG8gY2xvbmVcbiAqIEByZXR1cm5zIHttYXQyfSBhIG5ldyAyeDIgbWF0cml4XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShhKSB7XG4gIGxldCBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSg0KTtcbiAgb3V0WzBdID0gYVswXTtcbiAgb3V0WzFdID0gYVsxXTtcbiAgb3V0WzJdID0gYVsyXTtcbiAgb3V0WzNdID0gYVszXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDb3B5IHRoZSB2YWx1ZXMgZnJvbSBvbmUgbWF0MiB0byBhbm90aGVyXG4gKlxuICogQHBhcmFtIHttYXQyfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0Mn0gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29weShvdXQsIGEpIHtcbiAgb3V0WzBdID0gYVswXTtcbiAgb3V0WzFdID0gYVsxXTtcbiAgb3V0WzJdID0gYVsyXTtcbiAgb3V0WzNdID0gYVszXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTZXQgYSBtYXQyIHRvIHRoZSBpZGVudGl0eSBtYXRyaXhcbiAqXG4gKiBAcGFyYW0ge21hdDJ9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHJldHVybnMge21hdDJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHkob3V0KSB7XG4gIG91dFswXSA9IDE7XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IG1hdDIgd2l0aCB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMCBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAwIHBvc2l0aW9uIChpbmRleCAwKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMSBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAxIHBvc2l0aW9uIChpbmRleCAxKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMCBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAwIHBvc2l0aW9uIChpbmRleCAyKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMSBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAxIHBvc2l0aW9uIChpbmRleCAzKVxuICogQHJldHVybnMge21hdDJ9IG91dCBBIG5ldyAyeDIgbWF0cml4XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tVmFsdWVzKG0wMCwgbTAxLCBtMTAsIG0xMSkge1xuICBsZXQgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoNCk7XG4gIG91dFswXSA9IG0wMDtcbiAgb3V0WzFdID0gbTAxO1xuICBvdXRbMl0gPSBtMTA7XG4gIG91dFszXSA9IG0xMTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIGNvbXBvbmVudHMgb2YgYSBtYXQyIHRvIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge21hdDJ9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMCBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAwIHBvc2l0aW9uIChpbmRleCAwKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMSBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAxIHBvc2l0aW9uIChpbmRleCAxKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMCBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAwIHBvc2l0aW9uIChpbmRleCAyKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMSBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAxIHBvc2l0aW9uIChpbmRleCAzKVxuICogQHJldHVybnMge21hdDJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0KG91dCwgbTAwLCBtMDEsIG0xMCwgbTExKSB7XG4gIG91dFswXSA9IG0wMDtcbiAgb3V0WzFdID0gbTAxO1xuICBvdXRbMl0gPSBtMTA7XG4gIG91dFszXSA9IG0xMTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBUcmFuc3Bvc2UgdGhlIHZhbHVlcyBvZiBhIG1hdDJcbiAqXG4gKiBAcGFyYW0ge21hdDJ9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQyfSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0Mn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc3Bvc2Uob3V0LCBhKSB7XG4gIC8vIElmIHdlIGFyZSB0cmFuc3Bvc2luZyBvdXJzZWx2ZXMgd2UgY2FuIHNraXAgYSBmZXcgc3RlcHMgYnV0IGhhdmUgdG8gY2FjaGVcbiAgLy8gc29tZSB2YWx1ZXNcbiAgaWYgKG91dCA9PT0gYSkge1xuICAgIGxldCBhMSA9IGFbMV07XG4gICAgb3V0WzFdID0gYVsyXTtcbiAgICBvdXRbMl0gPSBhMTtcbiAgfSBlbHNlIHtcbiAgICBvdXRbMF0gPSBhWzBdO1xuICAgIG91dFsxXSA9IGFbMl07XG4gICAgb3V0WzJdID0gYVsxXTtcbiAgICBvdXRbM10gPSBhWzNdO1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBJbnZlcnRzIGEgbWF0MlxuICpcbiAqIEBwYXJhbSB7bWF0Mn0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDJ9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludmVydChvdXQsIGEpIHtcbiAgbGV0IGEwID0gYVswXSwgYTEgPSBhWzFdLCBhMiA9IGFbMl0sIGEzID0gYVszXTtcblxuICAvLyBDYWxjdWxhdGUgdGhlIGRldGVybWluYW50XG4gIGxldCBkZXQgPSBhMCAqIGEzIC0gYTIgKiBhMTtcblxuICBpZiAoIWRldCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGRldCA9IDEuMCAvIGRldDtcblxuICBvdXRbMF0gPSAgYTMgKiBkZXQ7XG4gIG91dFsxXSA9IC1hMSAqIGRldDtcbiAgb3V0WzJdID0gLWEyICogZGV0O1xuICBvdXRbM10gPSAgYTAgKiBkZXQ7XG5cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBhZGp1Z2F0ZSBvZiBhIG1hdDJcbiAqXG4gKiBAcGFyYW0ge21hdDJ9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQyfSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0Mn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGpvaW50KG91dCwgYSkge1xuICAvLyBDYWNoaW5nIHRoaXMgdmFsdWUgaXMgbmVzc2VjYXJ5IGlmIG91dCA9PSBhXG4gIGxldCBhMCA9IGFbMF07XG4gIG91dFswXSA9ICBhWzNdO1xuICBvdXRbMV0gPSAtYVsxXTtcbiAgb3V0WzJdID0gLWFbMl07XG4gIG91dFszXSA9ICBhMDtcblxuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRldGVybWluYW50IG9mIGEgbWF0MlxuICpcbiAqIEBwYXJhbSB7bWF0Mn0gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge051bWJlcn0gZGV0ZXJtaW5hbnQgb2YgYVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGV0ZXJtaW5hbnQoYSkge1xuICByZXR1cm4gYVswXSAqIGFbM10gLSBhWzJdICogYVsxXTtcbn1cblxuLyoqXG4gKiBNdWx0aXBsaWVzIHR3byBtYXQyJ3NcbiAqXG4gKiBAcGFyYW0ge21hdDJ9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge21hdDJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7bWF0Mn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseShvdXQsIGEsIGIpIHtcbiAgbGV0IGEwID0gYVswXSwgYTEgPSBhWzFdLCBhMiA9IGFbMl0sIGEzID0gYVszXTtcbiAgbGV0IGIwID0gYlswXSwgYjEgPSBiWzFdLCBiMiA9IGJbMl0sIGIzID0gYlszXTtcbiAgb3V0WzBdID0gYTAgKiBiMCArIGEyICogYjE7XG4gIG91dFsxXSA9IGExICogYjAgKyBhMyAqIGIxO1xuICBvdXRbMl0gPSBhMCAqIGIyICsgYTIgKiBiMztcbiAgb3V0WzNdID0gYTEgKiBiMiArIGEzICogYjM7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUm90YXRlcyBhIG1hdDIgYnkgdGhlIGdpdmVuIGFuZ2xlXG4gKlxuICogQHBhcmFtIHttYXQyfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0Mn0gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZShvdXQsIGEsIHJhZCkge1xuICBsZXQgYTAgPSBhWzBdLCBhMSA9IGFbMV0sIGEyID0gYVsyXSwgYTMgPSBhWzNdO1xuICBsZXQgcyA9IE1hdGguc2luKHJhZCk7XG4gIGxldCBjID0gTWF0aC5jb3MocmFkKTtcbiAgb3V0WzBdID0gYTAgKiAgYyArIGEyICogcztcbiAgb3V0WzFdID0gYTEgKiAgYyArIGEzICogcztcbiAgb3V0WzJdID0gYTAgKiAtcyArIGEyICogYztcbiAgb3V0WzNdID0gYTEgKiAtcyArIGEzICogYztcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTY2FsZXMgdGhlIG1hdDIgYnkgdGhlIGRpbWVuc2lvbnMgaW4gdGhlIGdpdmVuIHZlYzJcbiAqXG4gKiBAcGFyYW0ge21hdDJ9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQyfSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXG4gKiBAcGFyYW0ge3ZlYzJ9IHYgdGhlIHZlYzIgdG8gc2NhbGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDJ9IG91dFxuICoqL1xuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlKG91dCwgYSwgdikge1xuICBsZXQgYTAgPSBhWzBdLCBhMSA9IGFbMV0sIGEyID0gYVsyXSwgYTMgPSBhWzNdO1xuICBsZXQgdjAgPSB2WzBdLCB2MSA9IHZbMV07XG4gIG91dFswXSA9IGEwICogdjA7XG4gIG91dFsxXSA9IGExICogdjA7XG4gIG91dFsyXSA9IGEyICogdjE7XG4gIG91dFszXSA9IGEzICogdjE7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgZ2l2ZW4gYW5nbGVcbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxuICpcbiAqICAgICBtYXQyLmlkZW50aXR5KGRlc3QpO1xuICogICAgIG1hdDIucm90YXRlKGRlc3QsIGRlc3QsIHJhZCk7XG4gKlxuICogQHBhcmFtIHttYXQyfSBvdXQgbWF0MiByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21Sb3RhdGlvbihvdXQsIHJhZCkge1xuICBsZXQgcyA9IE1hdGguc2luKHJhZCk7XG4gIGxldCBjID0gTWF0aC5jb3MocmFkKTtcbiAgb3V0WzBdID0gYztcbiAgb3V0WzFdID0gcztcbiAgb3V0WzJdID0gLXM7XG4gIG91dFszXSA9IGM7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgdmVjdG9yIHNjYWxpbmdcbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxuICpcbiAqICAgICBtYXQyLmlkZW50aXR5KGRlc3QpO1xuICogICAgIG1hdDIuc2NhbGUoZGVzdCwgZGVzdCwgdmVjKTtcbiAqXG4gKiBAcGFyYW0ge21hdDJ9IG91dCBtYXQyIHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge3ZlYzJ9IHYgU2NhbGluZyB2ZWN0b3JcbiAqIEByZXR1cm5zIHttYXQyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21TY2FsaW5nKG91dCwgdikge1xuICBvdXRbMF0gPSB2WzBdO1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSB2WzFdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBtYXQyXG4gKlxuICogQHBhcmFtIHttYXQyfSBhIG1hdHJpeCB0byByZXByZXNlbnQgYXMgYSBzdHJpbmdcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgbWF0cml4XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHIoYSkge1xuICByZXR1cm4gJ21hdDIoJyArIGFbMF0gKyAnLCAnICsgYVsxXSArICcsICcgKyBhWzJdICsgJywgJyArIGFbM10gKyAnKSc7XG59XG5cbi8qKlxuICogUmV0dXJucyBGcm9iZW5pdXMgbm9ybSBvZiBhIG1hdDJcbiAqXG4gKiBAcGFyYW0ge21hdDJ9IGEgdGhlIG1hdHJpeCB0byBjYWxjdWxhdGUgRnJvYmVuaXVzIG5vcm0gb2ZcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IEZyb2Jlbml1cyBub3JtXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9iKGEpIHtcbiAgcmV0dXJuKE1hdGguc3FydChNYXRoLnBvdyhhWzBdLCAyKSArIE1hdGgucG93KGFbMV0sIDIpICsgTWF0aC5wb3coYVsyXSwgMikgKyBNYXRoLnBvdyhhWzNdLCAyKSkpXG59XG5cbi8qKlxuICogUmV0dXJucyBMLCBEIGFuZCBVIG1hdHJpY2VzIChMb3dlciB0cmlhbmd1bGFyLCBEaWFnb25hbCBhbmQgVXBwZXIgdHJpYW5ndWxhcikgYnkgZmFjdG9yaXppbmcgdGhlIGlucHV0IG1hdHJpeFxuICogQHBhcmFtIHttYXQyfSBMIHRoZSBsb3dlciB0cmlhbmd1bGFyIG1hdHJpeFxuICogQHBhcmFtIHttYXQyfSBEIHRoZSBkaWFnb25hbCBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0Mn0gVSB0aGUgdXBwZXIgdHJpYW5ndWxhciBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0Mn0gYSB0aGUgaW5wdXQgbWF0cml4IHRvIGZhY3Rvcml6ZVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBMRFUoTCwgRCwgVSwgYSkge1xuICBMWzJdID0gYVsyXS9hWzBdO1xuICBVWzBdID0gYVswXTtcbiAgVVsxXSA9IGFbMV07XG4gIFVbM10gPSBhWzNdIC0gTFsyXSAqIFVbMV07XG4gIHJldHVybiBbTCwgRCwgVV07XG59XG5cbi8qKlxuICogQWRkcyB0d28gbWF0MidzXG4gKlxuICogQHBhcmFtIHttYXQyfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0Mn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHttYXQyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge21hdDJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICsgYlswXTtcbiAgb3V0WzFdID0gYVsxXSArIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gKyBiWzJdO1xuICBvdXRbM10gPSBhWzNdICsgYlszXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTdWJ0cmFjdHMgbWF0cml4IGIgZnJvbSBtYXRyaXggYVxuICpcbiAqIEBwYXJhbSB7bWF0Mn0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7bWF0Mn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHttYXQyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0KG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdIC0gYlswXTtcbiAgb3V0WzFdID0gYVsxXSAtIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gLSBiWzJdO1xuICBvdXRbM10gPSBhWzNdIC0gYlszXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSBtYXRyaWNlcyBoYXZlIGV4YWN0bHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24gKHdoZW4gY29tcGFyZWQgd2l0aCA9PT0pXG4gKlxuICogQHBhcmFtIHttYXQyfSBhIFRoZSBmaXJzdCBtYXRyaXguXG4gKiBAcGFyYW0ge21hdDJ9IGIgVGhlIHNlY29uZCBtYXRyaXguXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgbWF0cmljZXMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGFjdEVxdWFscyhhLCBiKSB7XG4gIHJldHVybiBhWzBdID09PSBiWzBdICYmIGFbMV0gPT09IGJbMV0gJiYgYVsyXSA9PT0gYlsyXSAmJiBhWzNdID09PSBiWzNdO1xufVxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIG1hdHJpY2VzIGhhdmUgYXBwcm94aW1hdGVseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbi5cbiAqXG4gKiBAcGFyYW0ge21hdDJ9IGEgVGhlIGZpcnN0IG1hdHJpeC5cbiAqIEBwYXJhbSB7bWF0Mn0gYiBUaGUgc2Vjb25kIG1hdHJpeC5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSBtYXRyaWNlcyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVxdWFscyhhLCBiKSB7XG4gIGxldCBhMCA9IGFbMF0sIGExID0gYVsxXSwgYTIgPSBhWzJdLCBhMyA9IGFbM107XG4gIGxldCBiMCA9IGJbMF0sIGIxID0gYlsxXSwgYjIgPSBiWzJdLCBiMyA9IGJbM107XG4gIHJldHVybiAoTWF0aC5hYnMoYTAgLSBiMCkgPD0gZ2xNYXRyaXguRVBTSUxPTipNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEwKSwgTWF0aC5hYnMoYjApKSAmJlxuICAgICAgICAgIE1hdGguYWJzKGExIC0gYjEpIDw9IGdsTWF0cml4LkVQU0lMT04qTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMSksIE1hdGguYWJzKGIxKSkgJiZcbiAgICAgICAgICBNYXRoLmFicyhhMiAtIGIyKSA8PSBnbE1hdHJpeC5FUFNJTE9OKk1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTIpLCBNYXRoLmFicyhiMikpICYmXG4gICAgICAgICAgTWF0aC5hYnMoYTMgLSBiMykgPD0gZ2xNYXRyaXguRVBTSUxPTipNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEzKSwgTWF0aC5hYnMoYjMpKSk7XG59XG5cbi8qKlxuICogTXVsdGlwbHkgZWFjaCBlbGVtZW50IG9mIHRoZSBtYXRyaXggYnkgYSBzY2FsYXIuXG4gKlxuICogQHBhcmFtIHttYXQyfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0Mn0gYSB0aGUgbWF0cml4IHRvIHNjYWxlXG4gKiBAcGFyYW0ge051bWJlcn0gYiBhbW91bnQgdG8gc2NhbGUgdGhlIG1hdHJpeCdzIGVsZW1lbnRzIGJ5XG4gKiBAcmV0dXJucyB7bWF0Mn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseVNjYWxhcihvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAqIGI7XG4gIG91dFsxXSA9IGFbMV0gKiBiO1xuICBvdXRbMl0gPSBhWzJdICogYjtcbiAgb3V0WzNdID0gYVszXSAqIGI7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQWRkcyB0d28gbWF0MidzIGFmdGVyIG11bHRpcGx5aW5nIGVhY2ggZWxlbWVudCBvZiB0aGUgc2Vjb25kIG9wZXJhbmQgYnkgYSBzY2FsYXIgdmFsdWUuXG4gKlxuICogQHBhcmFtIHttYXQyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7bWF0Mn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHttYXQyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxlIHRoZSBhbW91bnQgdG8gc2NhbGUgYidzIGVsZW1lbnRzIGJ5IGJlZm9yZSBhZGRpbmdcbiAqIEByZXR1cm5zIHttYXQyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5U2NhbGFyQW5kQWRkKG91dCwgYSwgYiwgc2NhbGUpIHtcbiAgb3V0WzBdID0gYVswXSArIChiWzBdICogc2NhbGUpO1xuICBvdXRbMV0gPSBhWzFdICsgKGJbMV0gKiBzY2FsZSk7XG4gIG91dFsyXSA9IGFbMl0gKyAoYlsyXSAqIHNjYWxlKTtcbiAgb3V0WzNdID0gYVszXSArIChiWzNdICogc2NhbGUpO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgbWF0Mi5tdWx0aXBseX1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3QgbXVsID0gbXVsdGlwbHk7XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayBtYXQyLnN1YnRyYWN0fVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBzdWIgPSBzdWJ0cmFjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dsLW1hdHJpeC9zcmMvZ2wtbWF0cml4L21hdDIuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIENvcHlyaWdodCAoYykgMjAxNSwgQnJhbmRvbiBKb25lcywgQ29saW4gTWFjS2VuemllIElWLlxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbmZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG5hbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG5USEUgU09GVFdBUkUuICovXG5cbmltcG9ydCAqIGFzIGdsTWF0cml4IGZyb20gXCIuL2NvbW1vblwiO1xuXG4vKipcbiAqIDJ4MyBNYXRyaXhcbiAqIEBtb2R1bGUgbWF0MmRcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEEgbWF0MmQgY29udGFpbnMgc2l4IGVsZW1lbnRzIGRlZmluZWQgYXM6XG4gKiA8cHJlPlxuICogW2EsIGMsIHR4LFxuICogIGIsIGQsIHR5XVxuICogPC9wcmU+XG4gKiBUaGlzIGlzIGEgc2hvcnQgZm9ybSBmb3IgdGhlIDN4MyBtYXRyaXg6XG4gKiA8cHJlPlxuICogW2EsIGMsIHR4LFxuICogIGIsIGQsIHR5LFxuICogIDAsIDAsIDFdXG4gKiA8L3ByZT5cbiAqIFRoZSBsYXN0IHJvdyBpcyBpZ25vcmVkIHNvIHRoZSBhcnJheSBpcyBzaG9ydGVyIGFuZCBvcGVyYXRpb25zIGFyZSBmYXN0ZXIuXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGlkZW50aXR5IG1hdDJkXG4gKlxuICogQHJldHVybnMge21hdDJkfSBhIG5ldyAyeDMgbWF0cml4XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gIGxldCBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSg2KTtcbiAgb3V0WzBdID0gMTtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMTtcbiAgb3V0WzRdID0gMDtcbiAgb3V0WzVdID0gMDtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IG1hdDJkIGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgbWF0cml4XG4gKlxuICogQHBhcmFtIHttYXQyZH0gYSBtYXRyaXggdG8gY2xvbmVcbiAqIEByZXR1cm5zIHttYXQyZH0gYSBuZXcgMngzIG1hdHJpeFxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUoYSkge1xuICBsZXQgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoNik7XG4gIG91dFswXSA9IGFbMF07XG4gIG91dFsxXSA9IGFbMV07XG4gIG91dFsyXSA9IGFbMl07XG4gIG91dFszXSA9IGFbM107XG4gIG91dFs0XSA9IGFbNF07XG4gIG91dFs1XSA9IGFbNV07XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIG1hdDJkIHRvIGFub3RoZXJcbiAqXG4gKiBAcGFyYW0ge21hdDJkfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0MmR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQyZH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KG91dCwgYSkge1xuICBvdXRbMF0gPSBhWzBdO1xuICBvdXRbMV0gPSBhWzFdO1xuICBvdXRbMl0gPSBhWzJdO1xuICBvdXRbM10gPSBhWzNdO1xuICBvdXRbNF0gPSBhWzRdO1xuICBvdXRbNV0gPSBhWzVdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNldCBhIG1hdDJkIHRvIHRoZSBpZGVudGl0eSBtYXRyaXhcbiAqXG4gKiBAcGFyYW0ge21hdDJkfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQyZH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eShvdXQpIHtcbiAgb3V0WzBdID0gMTtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMTtcbiAgb3V0WzRdID0gMDtcbiAgb3V0WzVdID0gMDtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgbWF0MmQgd2l0aCB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGEgQ29tcG9uZW50IEEgKGluZGV4IDApXG4gKiBAcGFyYW0ge051bWJlcn0gYiBDb21wb25lbnQgQiAoaW5kZXggMSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBjIENvbXBvbmVudCBDIChpbmRleCAyKVxuICogQHBhcmFtIHtOdW1iZXJ9IGQgQ29tcG9uZW50IEQgKGluZGV4IDMpXG4gKiBAcGFyYW0ge051bWJlcn0gdHggQ29tcG9uZW50IFRYIChpbmRleCA0KVxuICogQHBhcmFtIHtOdW1iZXJ9IHR5IENvbXBvbmVudCBUWSAoaW5kZXggNSlcbiAqIEByZXR1cm5zIHttYXQyZH0gQSBuZXcgbWF0MmRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21WYWx1ZXMoYSwgYiwgYywgZCwgdHgsIHR5KSB7XG4gIGxldCBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSg2KTtcbiAgb3V0WzBdID0gYTtcbiAgb3V0WzFdID0gYjtcbiAgb3V0WzJdID0gYztcbiAgb3V0WzNdID0gZDtcbiAgb3V0WzRdID0gdHg7XG4gIG91dFs1XSA9IHR5O1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIG1hdDJkIHRvIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge21hdDJkfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7TnVtYmVyfSBhIENvbXBvbmVudCBBIChpbmRleCAwKVxuICogQHBhcmFtIHtOdW1iZXJ9IGIgQ29tcG9uZW50IEIgKGluZGV4IDEpXG4gKiBAcGFyYW0ge051bWJlcn0gYyBDb21wb25lbnQgQyAoaW5kZXggMilcbiAqIEBwYXJhbSB7TnVtYmVyfSBkIENvbXBvbmVudCBEIChpbmRleCAzKVxuICogQHBhcmFtIHtOdW1iZXJ9IHR4IENvbXBvbmVudCBUWCAoaW5kZXggNClcbiAqIEBwYXJhbSB7TnVtYmVyfSB0eSBDb21wb25lbnQgVFkgKGluZGV4IDUpXG4gKiBAcmV0dXJucyB7bWF0MmR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0KG91dCwgYSwgYiwgYywgZCwgdHgsIHR5KSB7XG4gIG91dFswXSA9IGE7XG4gIG91dFsxXSA9IGI7XG4gIG91dFsyXSA9IGM7XG4gIG91dFszXSA9IGQ7XG4gIG91dFs0XSA9IHR4O1xuICBvdXRbNV0gPSB0eTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBJbnZlcnRzIGEgbWF0MmRcbiAqXG4gKiBAcGFyYW0ge21hdDJkfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0MmR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQyZH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQob3V0LCBhKSB7XG4gIGxldCBhYSA9IGFbMF0sIGFiID0gYVsxXSwgYWMgPSBhWzJdLCBhZCA9IGFbM107XG4gIGxldCBhdHggPSBhWzRdLCBhdHkgPSBhWzVdO1xuXG4gIGxldCBkZXQgPSBhYSAqIGFkIC0gYWIgKiBhYztcbiAgaWYoIWRldCl7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgZGV0ID0gMS4wIC8gZGV0O1xuXG4gIG91dFswXSA9IGFkICogZGV0O1xuICBvdXRbMV0gPSAtYWIgKiBkZXQ7XG4gIG91dFsyXSA9IC1hYyAqIGRldDtcbiAgb3V0WzNdID0gYWEgKiBkZXQ7XG4gIG91dFs0XSA9IChhYyAqIGF0eSAtIGFkICogYXR4KSAqIGRldDtcbiAgb3V0WzVdID0gKGFiICogYXR4IC0gYWEgKiBhdHkpICogZGV0O1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRldGVybWluYW50IG9mIGEgbWF0MmRcbiAqXG4gKiBAcGFyYW0ge21hdDJkfSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkZXRlcm1pbmFudCBvZiBhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXRlcm1pbmFudChhKSB7XG4gIHJldHVybiBhWzBdICogYVszXSAtIGFbMV0gKiBhWzJdO1xufVxuXG4vKipcbiAqIE11bHRpcGxpZXMgdHdvIG1hdDJkJ3NcbiAqXG4gKiBAcGFyYW0ge21hdDJkfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0MmR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7bWF0MmR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7bWF0MmR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkob3V0LCBhLCBiKSB7XG4gIGxldCBhMCA9IGFbMF0sIGExID0gYVsxXSwgYTIgPSBhWzJdLCBhMyA9IGFbM10sIGE0ID0gYVs0XSwgYTUgPSBhWzVdO1xuICBsZXQgYjAgPSBiWzBdLCBiMSA9IGJbMV0sIGIyID0gYlsyXSwgYjMgPSBiWzNdLCBiNCA9IGJbNF0sIGI1ID0gYls1XTtcbiAgb3V0WzBdID0gYTAgKiBiMCArIGEyICogYjE7XG4gIG91dFsxXSA9IGExICogYjAgKyBhMyAqIGIxO1xuICBvdXRbMl0gPSBhMCAqIGIyICsgYTIgKiBiMztcbiAgb3V0WzNdID0gYTEgKiBiMiArIGEzICogYjM7XG4gIG91dFs0XSA9IGEwICogYjQgKyBhMiAqIGI1ICsgYTQ7XG4gIG91dFs1XSA9IGExICogYjQgKyBhMyAqIGI1ICsgYTU7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUm90YXRlcyBhIG1hdDJkIGJ5IHRoZSBnaXZlbiBhbmdsZVxuICpcbiAqIEBwYXJhbSB7bWF0MmR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQyZH0gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQyZH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGUob3V0LCBhLCByYWQpIHtcbiAgbGV0IGEwID0gYVswXSwgYTEgPSBhWzFdLCBhMiA9IGFbMl0sIGEzID0gYVszXSwgYTQgPSBhWzRdLCBhNSA9IGFbNV07XG4gIGxldCBzID0gTWF0aC5zaW4ocmFkKTtcbiAgbGV0IGMgPSBNYXRoLmNvcyhyYWQpO1xuICBvdXRbMF0gPSBhMCAqICBjICsgYTIgKiBzO1xuICBvdXRbMV0gPSBhMSAqICBjICsgYTMgKiBzO1xuICBvdXRbMl0gPSBhMCAqIC1zICsgYTIgKiBjO1xuICBvdXRbM10gPSBhMSAqIC1zICsgYTMgKiBjO1xuICBvdXRbNF0gPSBhNDtcbiAgb3V0WzVdID0gYTU7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU2NhbGVzIHRoZSBtYXQyZCBieSB0aGUgZGltZW5zaW9ucyBpbiB0aGUgZ2l2ZW4gdmVjMlxuICpcbiAqIEBwYXJhbSB7bWF0MmR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQyZH0gYSB0aGUgbWF0cml4IHRvIHRyYW5zbGF0ZVxuICogQHBhcmFtIHt2ZWMyfSB2IHRoZSB2ZWMyIHRvIHNjYWxlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQyZH0gb3V0XG4gKiovXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUob3V0LCBhLCB2KSB7XG4gIGxldCBhMCA9IGFbMF0sIGExID0gYVsxXSwgYTIgPSBhWzJdLCBhMyA9IGFbM10sIGE0ID0gYVs0XSwgYTUgPSBhWzVdO1xuICBsZXQgdjAgPSB2WzBdLCB2MSA9IHZbMV07XG4gIG91dFswXSA9IGEwICogdjA7XG4gIG91dFsxXSA9IGExICogdjA7XG4gIG91dFsyXSA9IGEyICogdjE7XG4gIG91dFszXSA9IGEzICogdjE7XG4gIG91dFs0XSA9IGE0O1xuICBvdXRbNV0gPSBhNTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBUcmFuc2xhdGVzIHRoZSBtYXQyZCBieSB0aGUgZGltZW5zaW9ucyBpbiB0aGUgZ2l2ZW4gdmVjMlxuICpcbiAqIEBwYXJhbSB7bWF0MmR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQyZH0gYSB0aGUgbWF0cml4IHRvIHRyYW5zbGF0ZVxuICogQHBhcmFtIHt2ZWMyfSB2IHRoZSB2ZWMyIHRvIHRyYW5zbGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0MmR9IG91dFxuICoqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZShvdXQsIGEsIHYpIHtcbiAgbGV0IGEwID0gYVswXSwgYTEgPSBhWzFdLCBhMiA9IGFbMl0sIGEzID0gYVszXSwgYTQgPSBhWzRdLCBhNSA9IGFbNV07XG4gIGxldCB2MCA9IHZbMF0sIHYxID0gdlsxXTtcbiAgb3V0WzBdID0gYTA7XG4gIG91dFsxXSA9IGExO1xuICBvdXRbMl0gPSBhMjtcbiAgb3V0WzNdID0gYTM7XG4gIG91dFs0XSA9IGEwICogdjAgKyBhMiAqIHYxICsgYTQ7XG4gIG91dFs1XSA9IGExICogdjAgKyBhMyAqIHYxICsgYTU7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgZ2l2ZW4gYW5nbGVcbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxuICpcbiAqICAgICBtYXQyZC5pZGVudGl0eShkZXN0KTtcbiAqICAgICBtYXQyZC5yb3RhdGUoZGVzdCwgZGVzdCwgcmFkKTtcbiAqXG4gKiBAcGFyYW0ge21hdDJkfSBvdXQgbWF0MmQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0MmR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVJvdGF0aW9uKG91dCwgcmFkKSB7XG4gIGxldCBzID0gTWF0aC5zaW4ocmFkKSwgYyA9IE1hdGguY29zKHJhZCk7XG4gIG91dFswXSA9IGM7XG4gIG91dFsxXSA9IHM7XG4gIG91dFsyXSA9IC1zO1xuICBvdXRbM10gPSBjO1xuICBvdXRbNF0gPSAwO1xuICBvdXRbNV0gPSAwO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIHZlY3RvciBzY2FsaW5nXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcbiAqXG4gKiAgICAgbWF0MmQuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0MmQuc2NhbGUoZGVzdCwgZGVzdCwgdmVjKTtcbiAqXG4gKiBAcGFyYW0ge21hdDJkfSBvdXQgbWF0MmQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7dmVjMn0gdiBTY2FsaW5nIHZlY3RvclxuICogQHJldHVybnMge21hdDJkfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21TY2FsaW5nKG91dCwgdikge1xuICBvdXRbMF0gPSB2WzBdO1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSB2WzFdO1xuICBvdXRbNF0gPSAwO1xuICBvdXRbNV0gPSAwO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIHZlY3RvciB0cmFuc2xhdGlvblxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDJkLmlkZW50aXR5KGRlc3QpO1xuICogICAgIG1hdDJkLnRyYW5zbGF0ZShkZXN0LCBkZXN0LCB2ZWMpO1xuICpcbiAqIEBwYXJhbSB7bWF0MmR9IG91dCBtYXQyZCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHt2ZWMyfSB2IFRyYW5zbGF0aW9uIHZlY3RvclxuICogQHJldHVybnMge21hdDJkfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21UcmFuc2xhdGlvbihvdXQsIHYpIHtcbiAgb3V0WzBdID0gMTtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMTtcbiAgb3V0WzRdID0gdlswXTtcbiAgb3V0WzVdID0gdlsxXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgbWF0MmRcbiAqXG4gKiBAcGFyYW0ge21hdDJkfSBhIG1hdHJpeCB0byByZXByZXNlbnQgYXMgYSBzdHJpbmdcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgbWF0cml4XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHIoYSkge1xuICByZXR1cm4gJ21hdDJkKCcgKyBhWzBdICsgJywgJyArIGFbMV0gKyAnLCAnICsgYVsyXSArICcsICcgK1xuICAgICAgICAgIGFbM10gKyAnLCAnICsgYVs0XSArICcsICcgKyBhWzVdICsgJyknO1xufVxuXG4vKipcbiAqIFJldHVybnMgRnJvYmVuaXVzIG5vcm0gb2YgYSBtYXQyZFxuICpcbiAqIEBwYXJhbSB7bWF0MmR9IGEgdGhlIG1hdHJpeCB0byBjYWxjdWxhdGUgRnJvYmVuaXVzIG5vcm0gb2ZcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IEZyb2Jlbml1cyBub3JtXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9iKGEpIHtcbiAgcmV0dXJuKE1hdGguc3FydChNYXRoLnBvdyhhWzBdLCAyKSArIE1hdGgucG93KGFbMV0sIDIpICsgTWF0aC5wb3coYVsyXSwgMikgKyBNYXRoLnBvdyhhWzNdLCAyKSArIE1hdGgucG93KGFbNF0sIDIpICsgTWF0aC5wb3coYVs1XSwgMikgKyAxKSlcbn1cblxuLyoqXG4gKiBBZGRzIHR3byBtYXQyZCdzXG4gKlxuICogQHBhcmFtIHttYXQyZH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDJkfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge21hdDJkfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge21hdDJkfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSArIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gKyBiWzFdO1xuICBvdXRbMl0gPSBhWzJdICsgYlsyXTtcbiAgb3V0WzNdID0gYVszXSArIGJbM107XG4gIG91dFs0XSA9IGFbNF0gKyBiWzRdO1xuICBvdXRbNV0gPSBhWzVdICsgYls1XTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTdWJ0cmFjdHMgbWF0cml4IGIgZnJvbSBtYXRyaXggYVxuICpcbiAqIEBwYXJhbSB7bWF0MmR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQyZH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHttYXQyZH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHttYXQyZH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAtIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gLSBiWzFdO1xuICBvdXRbMl0gPSBhWzJdIC0gYlsyXTtcbiAgb3V0WzNdID0gYVszXSAtIGJbM107XG4gIG91dFs0XSA9IGFbNF0gLSBiWzRdO1xuICBvdXRbNV0gPSBhWzVdIC0gYls1XTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBNdWx0aXBseSBlYWNoIGVsZW1lbnQgb2YgdGhlIG1hdHJpeCBieSBhIHNjYWxhci5cbiAqXG4gKiBAcGFyYW0ge21hdDJkfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0MmR9IGEgdGhlIG1hdHJpeCB0byBzY2FsZVxuICogQHBhcmFtIHtOdW1iZXJ9IGIgYW1vdW50IHRvIHNjYWxlIHRoZSBtYXRyaXgncyBlbGVtZW50cyBieVxuICogQHJldHVybnMge21hdDJkfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5U2NhbGFyKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICogYjtcbiAgb3V0WzFdID0gYVsxXSAqIGI7XG4gIG91dFsyXSA9IGFbMl0gKiBiO1xuICBvdXRbM10gPSBhWzNdICogYjtcbiAgb3V0WzRdID0gYVs0XSAqIGI7XG4gIG91dFs1XSA9IGFbNV0gKiBiO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEFkZHMgdHdvIG1hdDJkJ3MgYWZ0ZXIgbXVsdGlwbHlpbmcgZWFjaCBlbGVtZW50IG9mIHRoZSBzZWNvbmQgb3BlcmFuZCBieSBhIHNjYWxhciB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge21hdDJkfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7bWF0MmR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7bWF0MmR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gc2NhbGUgdGhlIGFtb3VudCB0byBzY2FsZSBiJ3MgZWxlbWVudHMgYnkgYmVmb3JlIGFkZGluZ1xuICogQHJldHVybnMge21hdDJkfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5U2NhbGFyQW5kQWRkKG91dCwgYSwgYiwgc2NhbGUpIHtcbiAgb3V0WzBdID0gYVswXSArIChiWzBdICogc2NhbGUpO1xuICBvdXRbMV0gPSBhWzFdICsgKGJbMV0gKiBzY2FsZSk7XG4gIG91dFsyXSA9IGFbMl0gKyAoYlsyXSAqIHNjYWxlKTtcbiAgb3V0WzNdID0gYVszXSArIChiWzNdICogc2NhbGUpO1xuICBvdXRbNF0gPSBhWzRdICsgKGJbNF0gKiBzY2FsZSk7XG4gIG91dFs1XSA9IGFbNV0gKyAoYls1XSAqIHNjYWxlKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSBtYXRyaWNlcyBoYXZlIGV4YWN0bHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24gKHdoZW4gY29tcGFyZWQgd2l0aCA9PT0pXG4gKlxuICogQHBhcmFtIHttYXQyZH0gYSBUaGUgZmlyc3QgbWF0cml4LlxuICogQHBhcmFtIHttYXQyZH0gYiBUaGUgc2Vjb25kIG1hdHJpeC5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSBtYXRyaWNlcyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4YWN0RXF1YWxzKGEsIGIpIHtcbiAgcmV0dXJuIGFbMF0gPT09IGJbMF0gJiYgYVsxXSA9PT0gYlsxXSAmJiBhWzJdID09PSBiWzJdICYmIGFbM10gPT09IGJbM10gJiYgYVs0XSA9PT0gYls0XSAmJiBhWzVdID09PSBiWzVdO1xufVxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIG1hdHJpY2VzIGhhdmUgYXBwcm94aW1hdGVseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbi5cbiAqXG4gKiBAcGFyYW0ge21hdDJkfSBhIFRoZSBmaXJzdCBtYXRyaXguXG4gKiBAcGFyYW0ge21hdDJkfSBiIFRoZSBzZWNvbmQgbWF0cml4LlxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIG1hdHJpY2VzIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxzKGEsIGIpIHtcbiAgbGV0IGEwID0gYVswXSwgYTEgPSBhWzFdLCBhMiA9IGFbMl0sIGEzID0gYVszXSwgYTQgPSBhWzRdLCBhNSA9IGFbNV07XG4gIGxldCBiMCA9IGJbMF0sIGIxID0gYlsxXSwgYjIgPSBiWzJdLCBiMyA9IGJbM10sIGI0ID0gYls0XSwgYjUgPSBiWzVdO1xuICByZXR1cm4gKE1hdGguYWJzKGEwIC0gYjApIDw9IGdsTWF0cml4LkVQU0lMT04qTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMCksIE1hdGguYWJzKGIwKSkgJiZcbiAgICAgICAgICBNYXRoLmFicyhhMSAtIGIxKSA8PSBnbE1hdHJpeC5FUFNJTE9OKk1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTEpLCBNYXRoLmFicyhiMSkpICYmXG4gICAgICAgICAgTWF0aC5hYnMoYTIgLSBiMikgPD0gZ2xNYXRyaXguRVBTSUxPTipNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEyKSwgTWF0aC5hYnMoYjIpKSAmJlxuICAgICAgICAgIE1hdGguYWJzKGEzIC0gYjMpIDw9IGdsTWF0cml4LkVQU0lMT04qTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMyksIE1hdGguYWJzKGIzKSkgJiZcbiAgICAgICAgICBNYXRoLmFicyhhNCAtIGI0KSA8PSBnbE1hdHJpeC5FUFNJTE9OKk1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTQpLCBNYXRoLmFicyhiNCkpICYmXG4gICAgICAgICAgTWF0aC5hYnMoYTUgLSBiNSkgPD0gZ2xNYXRyaXguRVBTSUxPTipNYXRoLm1heCgxLjAsIE1hdGguYWJzKGE1KSwgTWF0aC5hYnMoYjUpKSk7XG59XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayBtYXQyZC5tdWx0aXBseX1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3QgbXVsID0gbXVsdGlwbHk7XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayBtYXQyZC5zdWJ0cmFjdH1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3Qgc3ViID0gc3VidHJhY3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nbC1tYXRyaXgvc3JjL2dsLW1hdHJpeC9tYXQyZC5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQ29weXJpZ2h0IChjKSAyMDE1LCBCcmFuZG9uIEpvbmVzLCBDb2xpbiBNYWNLZW56aWUgSVYuXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cblRIRSBTT0ZUV0FSRS4gKi9cblxuaW1wb3J0ICogYXMgZ2xNYXRyaXggZnJvbSBcIi4vY29tbW9uXCI7XG5cbi8qKlxuICogNHg0IE1hdHJpeFxuICogQG1vZHVsZSBtYXQ0XG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGlkZW50aXR5IG1hdDRcbiAqXG4gKiBAcmV0dXJucyB7bWF0NH0gYSBuZXcgNHg0IG1hdHJpeFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlKCkge1xuICBsZXQgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoMTYpO1xuICBvdXRbMF0gPSAxO1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSAwO1xuICBvdXRbNV0gPSAxO1xuICBvdXRbNl0gPSAwO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSAwO1xuICBvdXRbOV0gPSAwO1xuICBvdXRbMTBdID0gMTtcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSAwO1xuICBvdXRbMTNdID0gMDtcbiAgb3V0WzE0XSA9IDA7XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgbWF0NCBpbml0aWFsaXplZCB3aXRoIHZhbHVlcyBmcm9tIGFuIGV4aXN0aW5nIG1hdHJpeFxuICpcbiAqIEBwYXJhbSB7bWF0NH0gYSBtYXRyaXggdG8gY2xvbmVcbiAqIEByZXR1cm5zIHttYXQ0fSBhIG5ldyA0eDQgbWF0cml4XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShhKSB7XG4gIGxldCBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSgxNik7XG4gIG91dFswXSA9IGFbMF07XG4gIG91dFsxXSA9IGFbMV07XG4gIG91dFsyXSA9IGFbMl07XG4gIG91dFszXSA9IGFbM107XG4gIG91dFs0XSA9IGFbNF07XG4gIG91dFs1XSA9IGFbNV07XG4gIG91dFs2XSA9IGFbNl07XG4gIG91dFs3XSA9IGFbN107XG4gIG91dFs4XSA9IGFbOF07XG4gIG91dFs5XSA9IGFbOV07XG4gIG91dFsxMF0gPSBhWzEwXTtcbiAgb3V0WzExXSA9IGFbMTFdO1xuICBvdXRbMTJdID0gYVsxMl07XG4gIG91dFsxM10gPSBhWzEzXTtcbiAgb3V0WzE0XSA9IGFbMTRdO1xuICBvdXRbMTVdID0gYVsxNV07XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIG1hdDQgdG8gYW5vdGhlclxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHkob3V0LCBhKSB7XG4gIG91dFswXSA9IGFbMF07XG4gIG91dFsxXSA9IGFbMV07XG4gIG91dFsyXSA9IGFbMl07XG4gIG91dFszXSA9IGFbM107XG4gIG91dFs0XSA9IGFbNF07XG4gIG91dFs1XSA9IGFbNV07XG4gIG91dFs2XSA9IGFbNl07XG4gIG91dFs3XSA9IGFbN107XG4gIG91dFs4XSA9IGFbOF07XG4gIG91dFs5XSA9IGFbOV07XG4gIG91dFsxMF0gPSBhWzEwXTtcbiAgb3V0WzExXSA9IGFbMTFdO1xuICBvdXRbMTJdID0gYVsxMl07XG4gIG91dFsxM10gPSBhWzEzXTtcbiAgb3V0WzE0XSA9IGFbMTRdO1xuICBvdXRbMTVdID0gYVsxNV07XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IG1hdDQgd2l0aCB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMCBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAwIHBvc2l0aW9uIChpbmRleCAwKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMSBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAxIHBvc2l0aW9uIChpbmRleCAxKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMiBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAyIHBvc2l0aW9uIChpbmRleCAyKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMyBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAzIHBvc2l0aW9uIChpbmRleCAzKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMCBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAwIHBvc2l0aW9uIChpbmRleCA0KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMSBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAxIHBvc2l0aW9uIChpbmRleCA1KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMiBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAyIHBvc2l0aW9uIChpbmRleCA2KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMyBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAzIHBvc2l0aW9uIChpbmRleCA3KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMCBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAwIHBvc2l0aW9uIChpbmRleCA4KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMSBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAxIHBvc2l0aW9uIChpbmRleCA5KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMiBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAyIHBvc2l0aW9uIChpbmRleCAxMClcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjMgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMyBwb3NpdGlvbiAoaW5kZXggMTEpXG4gKiBAcGFyYW0ge051bWJlcn0gbTMwIENvbXBvbmVudCBpbiBjb2x1bW4gMywgcm93IDAgcG9zaXRpb24gKGluZGV4IDEyKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0zMSBDb21wb25lbnQgaW4gY29sdW1uIDMsIHJvdyAxIHBvc2l0aW9uIChpbmRleCAxMylcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMzIgQ29tcG9uZW50IGluIGNvbHVtbiAzLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggMTQpXG4gKiBAcGFyYW0ge051bWJlcn0gbTMzIENvbXBvbmVudCBpbiBjb2x1bW4gMywgcm93IDMgcG9zaXRpb24gKGluZGV4IDE1KVxuICogQHJldHVybnMge21hdDR9IEEgbmV3IG1hdDRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21WYWx1ZXMobTAwLCBtMDEsIG0wMiwgbTAzLCBtMTAsIG0xMSwgbTEyLCBtMTMsIG0yMCwgbTIxLCBtMjIsIG0yMywgbTMwLCBtMzEsIG0zMiwgbTMzKSB7XG4gIGxldCBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSgxNik7XG4gIG91dFswXSA9IG0wMDtcbiAgb3V0WzFdID0gbTAxO1xuICBvdXRbMl0gPSBtMDI7XG4gIG91dFszXSA9IG0wMztcbiAgb3V0WzRdID0gbTEwO1xuICBvdXRbNV0gPSBtMTE7XG4gIG91dFs2XSA9IG0xMjtcbiAgb3V0WzddID0gbTEzO1xuICBvdXRbOF0gPSBtMjA7XG4gIG91dFs5XSA9IG0yMTtcbiAgb3V0WzEwXSA9IG0yMjtcbiAgb3V0WzExXSA9IG0yMztcbiAgb3V0WzEyXSA9IG0zMDtcbiAgb3V0WzEzXSA9IG0zMTtcbiAgb3V0WzE0XSA9IG0zMjtcbiAgb3V0WzE1XSA9IG0zMztcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIGNvbXBvbmVudHMgb2YgYSBtYXQ0IHRvIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMCBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAwIHBvc2l0aW9uIChpbmRleCAwKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMSBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAxIHBvc2l0aW9uIChpbmRleCAxKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMiBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAyIHBvc2l0aW9uIChpbmRleCAyKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMyBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAzIHBvc2l0aW9uIChpbmRleCAzKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMCBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAwIHBvc2l0aW9uIChpbmRleCA0KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMSBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAxIHBvc2l0aW9uIChpbmRleCA1KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMiBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAyIHBvc2l0aW9uIChpbmRleCA2KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMyBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAzIHBvc2l0aW9uIChpbmRleCA3KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMCBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAwIHBvc2l0aW9uIChpbmRleCA4KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMSBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAxIHBvc2l0aW9uIChpbmRleCA5KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMiBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAyIHBvc2l0aW9uIChpbmRleCAxMClcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjMgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMyBwb3NpdGlvbiAoaW5kZXggMTEpXG4gKiBAcGFyYW0ge051bWJlcn0gbTMwIENvbXBvbmVudCBpbiBjb2x1bW4gMywgcm93IDAgcG9zaXRpb24gKGluZGV4IDEyKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0zMSBDb21wb25lbnQgaW4gY29sdW1uIDMsIHJvdyAxIHBvc2l0aW9uIChpbmRleCAxMylcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMzIgQ29tcG9uZW50IGluIGNvbHVtbiAzLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggMTQpXG4gKiBAcGFyYW0ge051bWJlcn0gbTMzIENvbXBvbmVudCBpbiBjb2x1bW4gMywgcm93IDMgcG9zaXRpb24gKGluZGV4IDE1KVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0KG91dCwgbTAwLCBtMDEsIG0wMiwgbTAzLCBtMTAsIG0xMSwgbTEyLCBtMTMsIG0yMCwgbTIxLCBtMjIsIG0yMywgbTMwLCBtMzEsIG0zMiwgbTMzKSB7XG4gIG91dFswXSA9IG0wMDtcbiAgb3V0WzFdID0gbTAxO1xuICBvdXRbMl0gPSBtMDI7XG4gIG91dFszXSA9IG0wMztcbiAgb3V0WzRdID0gbTEwO1xuICBvdXRbNV0gPSBtMTE7XG4gIG91dFs2XSA9IG0xMjtcbiAgb3V0WzddID0gbTEzO1xuICBvdXRbOF0gPSBtMjA7XG4gIG91dFs5XSA9IG0yMTtcbiAgb3V0WzEwXSA9IG0yMjtcbiAgb3V0WzExXSA9IG0yMztcbiAgb3V0WzEyXSA9IG0zMDtcbiAgb3V0WzEzXSA9IG0zMTtcbiAgb3V0WzE0XSA9IG0zMjtcbiAgb3V0WzE1XSA9IG0zMztcbiAgcmV0dXJuIG91dDtcbn1cblxuXG4vKipcbiAqIFNldCBhIG1hdDQgdG8gdGhlIGlkZW50aXR5IG1hdHJpeFxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eShvdXQpIHtcbiAgb3V0WzBdID0gMTtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gMDtcbiAgb3V0WzVdID0gMTtcbiAgb3V0WzZdID0gMDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gMDtcbiAgb3V0WzldID0gMDtcbiAgb3V0WzEwXSA9IDE7XG4gIG91dFsxMV0gPSAwO1xuICBvdXRbMTJdID0gMDtcbiAgb3V0WzEzXSA9IDA7XG4gIG91dFsxNF0gPSAwO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBUcmFuc3Bvc2UgdGhlIHZhbHVlcyBvZiBhIG1hdDRcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc3Bvc2Uob3V0LCBhKSB7XG4gIC8vIElmIHdlIGFyZSB0cmFuc3Bvc2luZyBvdXJzZWx2ZXMgd2UgY2FuIHNraXAgYSBmZXcgc3RlcHMgYnV0IGhhdmUgdG8gY2FjaGUgc29tZSB2YWx1ZXNcbiAgaWYgKG91dCA9PT0gYSkge1xuICAgIGxldCBhMDEgPSBhWzFdLCBhMDIgPSBhWzJdLCBhMDMgPSBhWzNdO1xuICAgIGxldCBhMTIgPSBhWzZdLCBhMTMgPSBhWzddO1xuICAgIGxldCBhMjMgPSBhWzExXTtcblxuICAgIG91dFsxXSA9IGFbNF07XG4gICAgb3V0WzJdID0gYVs4XTtcbiAgICBvdXRbM10gPSBhWzEyXTtcbiAgICBvdXRbNF0gPSBhMDE7XG4gICAgb3V0WzZdID0gYVs5XTtcbiAgICBvdXRbN10gPSBhWzEzXTtcbiAgICBvdXRbOF0gPSBhMDI7XG4gICAgb3V0WzldID0gYTEyO1xuICAgIG91dFsxMV0gPSBhWzE0XTtcbiAgICBvdXRbMTJdID0gYTAzO1xuICAgIG91dFsxM10gPSBhMTM7XG4gICAgb3V0WzE0XSA9IGEyMztcbiAgfSBlbHNlIHtcbiAgICBvdXRbMF0gPSBhWzBdO1xuICAgIG91dFsxXSA9IGFbNF07XG4gICAgb3V0WzJdID0gYVs4XTtcbiAgICBvdXRbM10gPSBhWzEyXTtcbiAgICBvdXRbNF0gPSBhWzFdO1xuICAgIG91dFs1XSA9IGFbNV07XG4gICAgb3V0WzZdID0gYVs5XTtcbiAgICBvdXRbN10gPSBhWzEzXTtcbiAgICBvdXRbOF0gPSBhWzJdO1xuICAgIG91dFs5XSA9IGFbNl07XG4gICAgb3V0WzEwXSA9IGFbMTBdO1xuICAgIG91dFsxMV0gPSBhWzE0XTtcbiAgICBvdXRbMTJdID0gYVszXTtcbiAgICBvdXRbMTNdID0gYVs3XTtcbiAgICBvdXRbMTRdID0gYVsxMV07XG4gICAgb3V0WzE1XSA9IGFbMTVdO1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBJbnZlcnRzIGEgbWF0NFxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludmVydChvdXQsIGEpIHtcbiAgbGV0IGEwMCA9IGFbMF0sIGEwMSA9IGFbMV0sIGEwMiA9IGFbMl0sIGEwMyA9IGFbM107XG4gIGxldCBhMTAgPSBhWzRdLCBhMTEgPSBhWzVdLCBhMTIgPSBhWzZdLCBhMTMgPSBhWzddO1xuICBsZXQgYTIwID0gYVs4XSwgYTIxID0gYVs5XSwgYTIyID0gYVsxMF0sIGEyMyA9IGFbMTFdO1xuICBsZXQgYTMwID0gYVsxMl0sIGEzMSA9IGFbMTNdLCBhMzIgPSBhWzE0XSwgYTMzID0gYVsxNV07XG5cbiAgbGV0IGIwMCA9IGEwMCAqIGExMSAtIGEwMSAqIGExMDtcbiAgbGV0IGIwMSA9IGEwMCAqIGExMiAtIGEwMiAqIGExMDtcbiAgbGV0IGIwMiA9IGEwMCAqIGExMyAtIGEwMyAqIGExMDtcbiAgbGV0IGIwMyA9IGEwMSAqIGExMiAtIGEwMiAqIGExMTtcbiAgbGV0IGIwNCA9IGEwMSAqIGExMyAtIGEwMyAqIGExMTtcbiAgbGV0IGIwNSA9IGEwMiAqIGExMyAtIGEwMyAqIGExMjtcbiAgbGV0IGIwNiA9IGEyMCAqIGEzMSAtIGEyMSAqIGEzMDtcbiAgbGV0IGIwNyA9IGEyMCAqIGEzMiAtIGEyMiAqIGEzMDtcbiAgbGV0IGIwOCA9IGEyMCAqIGEzMyAtIGEyMyAqIGEzMDtcbiAgbGV0IGIwOSA9IGEyMSAqIGEzMiAtIGEyMiAqIGEzMTtcbiAgbGV0IGIxMCA9IGEyMSAqIGEzMyAtIGEyMyAqIGEzMTtcbiAgbGV0IGIxMSA9IGEyMiAqIGEzMyAtIGEyMyAqIGEzMjtcblxuICAvLyBDYWxjdWxhdGUgdGhlIGRldGVybWluYW50XG4gIGxldCBkZXQgPSBiMDAgKiBiMTEgLSBiMDEgKiBiMTAgKyBiMDIgKiBiMDkgKyBiMDMgKiBiMDggLSBiMDQgKiBiMDcgKyBiMDUgKiBiMDY7XG5cbiAgaWYgKCFkZXQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBkZXQgPSAxLjAgLyBkZXQ7XG5cbiAgb3V0WzBdID0gKGExMSAqIGIxMSAtIGExMiAqIGIxMCArIGExMyAqIGIwOSkgKiBkZXQ7XG4gIG91dFsxXSA9IChhMDIgKiBiMTAgLSBhMDEgKiBiMTEgLSBhMDMgKiBiMDkpICogZGV0O1xuICBvdXRbMl0gPSAoYTMxICogYjA1IC0gYTMyICogYjA0ICsgYTMzICogYjAzKSAqIGRldDtcbiAgb3V0WzNdID0gKGEyMiAqIGIwNCAtIGEyMSAqIGIwNSAtIGEyMyAqIGIwMykgKiBkZXQ7XG4gIG91dFs0XSA9IChhMTIgKiBiMDggLSBhMTAgKiBiMTEgLSBhMTMgKiBiMDcpICogZGV0O1xuICBvdXRbNV0gPSAoYTAwICogYjExIC0gYTAyICogYjA4ICsgYTAzICogYjA3KSAqIGRldDtcbiAgb3V0WzZdID0gKGEzMiAqIGIwMiAtIGEzMCAqIGIwNSAtIGEzMyAqIGIwMSkgKiBkZXQ7XG4gIG91dFs3XSA9IChhMjAgKiBiMDUgLSBhMjIgKiBiMDIgKyBhMjMgKiBiMDEpICogZGV0O1xuICBvdXRbOF0gPSAoYTEwICogYjEwIC0gYTExICogYjA4ICsgYTEzICogYjA2KSAqIGRldDtcbiAgb3V0WzldID0gKGEwMSAqIGIwOCAtIGEwMCAqIGIxMCAtIGEwMyAqIGIwNikgKiBkZXQ7XG4gIG91dFsxMF0gPSAoYTMwICogYjA0IC0gYTMxICogYjAyICsgYTMzICogYjAwKSAqIGRldDtcbiAgb3V0WzExXSA9IChhMjEgKiBiMDIgLSBhMjAgKiBiMDQgLSBhMjMgKiBiMDApICogZGV0O1xuICBvdXRbMTJdID0gKGExMSAqIGIwNyAtIGExMCAqIGIwOSAtIGExMiAqIGIwNikgKiBkZXQ7XG4gIG91dFsxM10gPSAoYTAwICogYjA5IC0gYTAxICogYjA3ICsgYTAyICogYjA2KSAqIGRldDtcbiAgb3V0WzE0XSA9IChhMzEgKiBiMDEgLSBhMzAgKiBiMDMgLSBhMzIgKiBiMDApICogZGV0O1xuICBvdXRbMTVdID0gKGEyMCAqIGIwMyAtIGEyMSAqIGIwMSArIGEyMiAqIGIwMCkgKiBkZXQ7XG5cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBhZGp1Z2F0ZSBvZiBhIG1hdDRcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGpvaW50KG91dCwgYSkge1xuICBsZXQgYTAwID0gYVswXSwgYTAxID0gYVsxXSwgYTAyID0gYVsyXSwgYTAzID0gYVszXTtcbiAgbGV0IGExMCA9IGFbNF0sIGExMSA9IGFbNV0sIGExMiA9IGFbNl0sIGExMyA9IGFbN107XG4gIGxldCBhMjAgPSBhWzhdLCBhMjEgPSBhWzldLCBhMjIgPSBhWzEwXSwgYTIzID0gYVsxMV07XG4gIGxldCBhMzAgPSBhWzEyXSwgYTMxID0gYVsxM10sIGEzMiA9IGFbMTRdLCBhMzMgPSBhWzE1XTtcblxuICBvdXRbMF0gID0gIChhMTEgKiAoYTIyICogYTMzIC0gYTIzICogYTMyKSAtIGEyMSAqIChhMTIgKiBhMzMgLSBhMTMgKiBhMzIpICsgYTMxICogKGExMiAqIGEyMyAtIGExMyAqIGEyMikpO1xuICBvdXRbMV0gID0gLShhMDEgKiAoYTIyICogYTMzIC0gYTIzICogYTMyKSAtIGEyMSAqIChhMDIgKiBhMzMgLSBhMDMgKiBhMzIpICsgYTMxICogKGEwMiAqIGEyMyAtIGEwMyAqIGEyMikpO1xuICBvdXRbMl0gID0gIChhMDEgKiAoYTEyICogYTMzIC0gYTEzICogYTMyKSAtIGExMSAqIChhMDIgKiBhMzMgLSBhMDMgKiBhMzIpICsgYTMxICogKGEwMiAqIGExMyAtIGEwMyAqIGExMikpO1xuICBvdXRbM10gID0gLShhMDEgKiAoYTEyICogYTIzIC0gYTEzICogYTIyKSAtIGExMSAqIChhMDIgKiBhMjMgLSBhMDMgKiBhMjIpICsgYTIxICogKGEwMiAqIGExMyAtIGEwMyAqIGExMikpO1xuICBvdXRbNF0gID0gLShhMTAgKiAoYTIyICogYTMzIC0gYTIzICogYTMyKSAtIGEyMCAqIChhMTIgKiBhMzMgLSBhMTMgKiBhMzIpICsgYTMwICogKGExMiAqIGEyMyAtIGExMyAqIGEyMikpO1xuICBvdXRbNV0gID0gIChhMDAgKiAoYTIyICogYTMzIC0gYTIzICogYTMyKSAtIGEyMCAqIChhMDIgKiBhMzMgLSBhMDMgKiBhMzIpICsgYTMwICogKGEwMiAqIGEyMyAtIGEwMyAqIGEyMikpO1xuICBvdXRbNl0gID0gLShhMDAgKiAoYTEyICogYTMzIC0gYTEzICogYTMyKSAtIGExMCAqIChhMDIgKiBhMzMgLSBhMDMgKiBhMzIpICsgYTMwICogKGEwMiAqIGExMyAtIGEwMyAqIGExMikpO1xuICBvdXRbN10gID0gIChhMDAgKiAoYTEyICogYTIzIC0gYTEzICogYTIyKSAtIGExMCAqIChhMDIgKiBhMjMgLSBhMDMgKiBhMjIpICsgYTIwICogKGEwMiAqIGExMyAtIGEwMyAqIGExMikpO1xuICBvdXRbOF0gID0gIChhMTAgKiAoYTIxICogYTMzIC0gYTIzICogYTMxKSAtIGEyMCAqIChhMTEgKiBhMzMgLSBhMTMgKiBhMzEpICsgYTMwICogKGExMSAqIGEyMyAtIGExMyAqIGEyMSkpO1xuICBvdXRbOV0gID0gLShhMDAgKiAoYTIxICogYTMzIC0gYTIzICogYTMxKSAtIGEyMCAqIChhMDEgKiBhMzMgLSBhMDMgKiBhMzEpICsgYTMwICogKGEwMSAqIGEyMyAtIGEwMyAqIGEyMSkpO1xuICBvdXRbMTBdID0gIChhMDAgKiAoYTExICogYTMzIC0gYTEzICogYTMxKSAtIGExMCAqIChhMDEgKiBhMzMgLSBhMDMgKiBhMzEpICsgYTMwICogKGEwMSAqIGExMyAtIGEwMyAqIGExMSkpO1xuICBvdXRbMTFdID0gLShhMDAgKiAoYTExICogYTIzIC0gYTEzICogYTIxKSAtIGExMCAqIChhMDEgKiBhMjMgLSBhMDMgKiBhMjEpICsgYTIwICogKGEwMSAqIGExMyAtIGEwMyAqIGExMSkpO1xuICBvdXRbMTJdID0gLShhMTAgKiAoYTIxICogYTMyIC0gYTIyICogYTMxKSAtIGEyMCAqIChhMTEgKiBhMzIgLSBhMTIgKiBhMzEpICsgYTMwICogKGExMSAqIGEyMiAtIGExMiAqIGEyMSkpO1xuICBvdXRbMTNdID0gIChhMDAgKiAoYTIxICogYTMyIC0gYTIyICogYTMxKSAtIGEyMCAqIChhMDEgKiBhMzIgLSBhMDIgKiBhMzEpICsgYTMwICogKGEwMSAqIGEyMiAtIGEwMiAqIGEyMSkpO1xuICBvdXRbMTRdID0gLShhMDAgKiAoYTExICogYTMyIC0gYTEyICogYTMxKSAtIGExMCAqIChhMDEgKiBhMzIgLSBhMDIgKiBhMzEpICsgYTMwICogKGEwMSAqIGExMiAtIGEwMiAqIGExMSkpO1xuICBvdXRbMTVdID0gIChhMDAgKiAoYTExICogYTIyIC0gYTEyICogYTIxKSAtIGExMCAqIChhMDEgKiBhMjIgLSBhMDIgKiBhMjEpICsgYTIwICogKGEwMSAqIGExMiAtIGEwMiAqIGExMSkpO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRldGVybWluYW50IG9mIGEgbWF0NFxuICpcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge051bWJlcn0gZGV0ZXJtaW5hbnQgb2YgYVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGV0ZXJtaW5hbnQoYSkge1xuICBsZXQgYTAwID0gYVswXSwgYTAxID0gYVsxXSwgYTAyID0gYVsyXSwgYTAzID0gYVszXTtcbiAgbGV0IGExMCA9IGFbNF0sIGExMSA9IGFbNV0sIGExMiA9IGFbNl0sIGExMyA9IGFbN107XG4gIGxldCBhMjAgPSBhWzhdLCBhMjEgPSBhWzldLCBhMjIgPSBhWzEwXSwgYTIzID0gYVsxMV07XG4gIGxldCBhMzAgPSBhWzEyXSwgYTMxID0gYVsxM10sIGEzMiA9IGFbMTRdLCBhMzMgPSBhWzE1XTtcblxuICBsZXQgYjAwID0gYTAwICogYTExIC0gYTAxICogYTEwO1xuICBsZXQgYjAxID0gYTAwICogYTEyIC0gYTAyICogYTEwO1xuICBsZXQgYjAyID0gYTAwICogYTEzIC0gYTAzICogYTEwO1xuICBsZXQgYjAzID0gYTAxICogYTEyIC0gYTAyICogYTExO1xuICBsZXQgYjA0ID0gYTAxICogYTEzIC0gYTAzICogYTExO1xuICBsZXQgYjA1ID0gYTAyICogYTEzIC0gYTAzICogYTEyO1xuICBsZXQgYjA2ID0gYTIwICogYTMxIC0gYTIxICogYTMwO1xuICBsZXQgYjA3ID0gYTIwICogYTMyIC0gYTIyICogYTMwO1xuICBsZXQgYjA4ID0gYTIwICogYTMzIC0gYTIzICogYTMwO1xuICBsZXQgYjA5ID0gYTIxICogYTMyIC0gYTIyICogYTMxO1xuICBsZXQgYjEwID0gYTIxICogYTMzIC0gYTIzICogYTMxO1xuICBsZXQgYjExID0gYTIyICogYTMzIC0gYTIzICogYTMyO1xuXG4gIC8vIENhbGN1bGF0ZSB0aGUgZGV0ZXJtaW5hbnRcbiAgcmV0dXJuIGIwMCAqIGIxMSAtIGIwMSAqIGIxMCArIGIwMiAqIGIwOSArIGIwMyAqIGIwOCAtIGIwNCAqIGIwNyArIGIwNSAqIGIwNjtcbn1cblxuLyoqXG4gKiBNdWx0aXBsaWVzIHR3byBtYXQ0c1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7bWF0NH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5KG91dCwgYSwgYikge1xuICBsZXQgYTAwID0gYVswXSwgYTAxID0gYVsxXSwgYTAyID0gYVsyXSwgYTAzID0gYVszXTtcbiAgbGV0IGExMCA9IGFbNF0sIGExMSA9IGFbNV0sIGExMiA9IGFbNl0sIGExMyA9IGFbN107XG4gIGxldCBhMjAgPSBhWzhdLCBhMjEgPSBhWzldLCBhMjIgPSBhWzEwXSwgYTIzID0gYVsxMV07XG4gIGxldCBhMzAgPSBhWzEyXSwgYTMxID0gYVsxM10sIGEzMiA9IGFbMTRdLCBhMzMgPSBhWzE1XTtcblxuICAvLyBDYWNoZSBvbmx5IHRoZSBjdXJyZW50IGxpbmUgb2YgdGhlIHNlY29uZCBtYXRyaXhcbiAgbGV0IGIwICA9IGJbMF0sIGIxID0gYlsxXSwgYjIgPSBiWzJdLCBiMyA9IGJbM107XG4gIG91dFswXSA9IGIwKmEwMCArIGIxKmExMCArIGIyKmEyMCArIGIzKmEzMDtcbiAgb3V0WzFdID0gYjAqYTAxICsgYjEqYTExICsgYjIqYTIxICsgYjMqYTMxO1xuICBvdXRbMl0gPSBiMCphMDIgKyBiMSphMTIgKyBiMiphMjIgKyBiMyphMzI7XG4gIG91dFszXSA9IGIwKmEwMyArIGIxKmExMyArIGIyKmEyMyArIGIzKmEzMztcblxuICBiMCA9IGJbNF07IGIxID0gYls1XTsgYjIgPSBiWzZdOyBiMyA9IGJbN107XG4gIG91dFs0XSA9IGIwKmEwMCArIGIxKmExMCArIGIyKmEyMCArIGIzKmEzMDtcbiAgb3V0WzVdID0gYjAqYTAxICsgYjEqYTExICsgYjIqYTIxICsgYjMqYTMxO1xuICBvdXRbNl0gPSBiMCphMDIgKyBiMSphMTIgKyBiMiphMjIgKyBiMyphMzI7XG4gIG91dFs3XSA9IGIwKmEwMyArIGIxKmExMyArIGIyKmEyMyArIGIzKmEzMztcblxuICBiMCA9IGJbOF07IGIxID0gYls5XTsgYjIgPSBiWzEwXTsgYjMgPSBiWzExXTtcbiAgb3V0WzhdID0gYjAqYTAwICsgYjEqYTEwICsgYjIqYTIwICsgYjMqYTMwO1xuICBvdXRbOV0gPSBiMCphMDEgKyBiMSphMTEgKyBiMiphMjEgKyBiMyphMzE7XG4gIG91dFsxMF0gPSBiMCphMDIgKyBiMSphMTIgKyBiMiphMjIgKyBiMyphMzI7XG4gIG91dFsxMV0gPSBiMCphMDMgKyBiMSphMTMgKyBiMiphMjMgKyBiMyphMzM7XG5cbiAgYjAgPSBiWzEyXTsgYjEgPSBiWzEzXTsgYjIgPSBiWzE0XTsgYjMgPSBiWzE1XTtcbiAgb3V0WzEyXSA9IGIwKmEwMCArIGIxKmExMCArIGIyKmEyMCArIGIzKmEzMDtcbiAgb3V0WzEzXSA9IGIwKmEwMSArIGIxKmExMSArIGIyKmEyMSArIGIzKmEzMTtcbiAgb3V0WzE0XSA9IGIwKmEwMiArIGIxKmExMiArIGIyKmEyMiArIGIzKmEzMjtcbiAgb3V0WzE1XSA9IGIwKmEwMyArIGIxKmExMyArIGIyKmEyMyArIGIzKmEzMztcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBUcmFuc2xhdGUgYSBtYXQ0IGJ5IHRoZSBnaXZlbiB2ZWN0b3JcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBtYXRyaXggdG8gdHJhbnNsYXRlXG4gKiBAcGFyYW0ge3ZlYzN9IHYgdmVjdG9yIHRvIHRyYW5zbGF0ZSBieVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlKG91dCwgYSwgdikge1xuICBsZXQgeCA9IHZbMF0sIHkgPSB2WzFdLCB6ID0gdlsyXTtcbiAgbGV0IGEwMCwgYTAxLCBhMDIsIGEwMztcbiAgbGV0IGExMCwgYTExLCBhMTIsIGExMztcbiAgbGV0IGEyMCwgYTIxLCBhMjIsIGEyMztcblxuICBpZiAoYSA9PT0gb3V0KSB7XG4gICAgb3V0WzEyXSA9IGFbMF0gKiB4ICsgYVs0XSAqIHkgKyBhWzhdICogeiArIGFbMTJdO1xuICAgIG91dFsxM10gPSBhWzFdICogeCArIGFbNV0gKiB5ICsgYVs5XSAqIHogKyBhWzEzXTtcbiAgICBvdXRbMTRdID0gYVsyXSAqIHggKyBhWzZdICogeSArIGFbMTBdICogeiArIGFbMTRdO1xuICAgIG91dFsxNV0gPSBhWzNdICogeCArIGFbN10gKiB5ICsgYVsxMV0gKiB6ICsgYVsxNV07XG4gIH0gZWxzZSB7XG4gICAgYTAwID0gYVswXTsgYTAxID0gYVsxXTsgYTAyID0gYVsyXTsgYTAzID0gYVszXTtcbiAgICBhMTAgPSBhWzRdOyBhMTEgPSBhWzVdOyBhMTIgPSBhWzZdOyBhMTMgPSBhWzddO1xuICAgIGEyMCA9IGFbOF07IGEyMSA9IGFbOV07IGEyMiA9IGFbMTBdOyBhMjMgPSBhWzExXTtcblxuICAgIG91dFswXSA9IGEwMDsgb3V0WzFdID0gYTAxOyBvdXRbMl0gPSBhMDI7IG91dFszXSA9IGEwMztcbiAgICBvdXRbNF0gPSBhMTA7IG91dFs1XSA9IGExMTsgb3V0WzZdID0gYTEyOyBvdXRbN10gPSBhMTM7XG4gICAgb3V0WzhdID0gYTIwOyBvdXRbOV0gPSBhMjE7IG91dFsxMF0gPSBhMjI7IG91dFsxMV0gPSBhMjM7XG5cbiAgICBvdXRbMTJdID0gYTAwICogeCArIGExMCAqIHkgKyBhMjAgKiB6ICsgYVsxMl07XG4gICAgb3V0WzEzXSA9IGEwMSAqIHggKyBhMTEgKiB5ICsgYTIxICogeiArIGFbMTNdO1xuICAgIG91dFsxNF0gPSBhMDIgKiB4ICsgYTEyICogeSArIGEyMiAqIHogKyBhWzE0XTtcbiAgICBvdXRbMTVdID0gYTAzICogeCArIGExMyAqIHkgKyBhMjMgKiB6ICsgYVsxNV07XG4gIH1cblxuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNjYWxlcyB0aGUgbWF0NCBieSB0aGUgZGltZW5zaW9ucyBpbiB0aGUgZ2l2ZW4gdmVjMyBub3QgdXNpbmcgdmVjdG9yaXphdGlvblxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byBzY2FsZVxuICogQHBhcmFtIHt2ZWMzfSB2IHRoZSB2ZWMzIHRvIHNjYWxlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqKi9cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZShvdXQsIGEsIHYpIHtcbiAgbGV0IHggPSB2WzBdLCB5ID0gdlsxXSwgeiA9IHZbMl07XG5cbiAgb3V0WzBdID0gYVswXSAqIHg7XG4gIG91dFsxXSA9IGFbMV0gKiB4O1xuICBvdXRbMl0gPSBhWzJdICogeDtcbiAgb3V0WzNdID0gYVszXSAqIHg7XG4gIG91dFs0XSA9IGFbNF0gKiB5O1xuICBvdXRbNV0gPSBhWzVdICogeTtcbiAgb3V0WzZdID0gYVs2XSAqIHk7XG4gIG91dFs3XSA9IGFbN10gKiB5O1xuICBvdXRbOF0gPSBhWzhdICogejtcbiAgb3V0WzldID0gYVs5XSAqIHo7XG4gIG91dFsxMF0gPSBhWzEwXSAqIHo7XG4gIG91dFsxMV0gPSBhWzExXSAqIHo7XG4gIG91dFsxMl0gPSBhWzEyXTtcbiAgb3V0WzEzXSA9IGFbMTNdO1xuICBvdXRbMTRdID0gYVsxNF07XG4gIG91dFsxNV0gPSBhWzE1XTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSb3RhdGVzIGEgbWF0NCBieSB0aGUgZ2l2ZW4gYW5nbGUgYXJvdW5kIHRoZSBnaXZlbiBheGlzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEBwYXJhbSB7dmVjM30gYXhpcyB0aGUgYXhpcyB0byByb3RhdGUgYXJvdW5kXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGUob3V0LCBhLCByYWQsIGF4aXMpIHtcbiAgbGV0IHggPSBheGlzWzBdLCB5ID0gYXhpc1sxXSwgeiA9IGF4aXNbMl07XG4gIGxldCBsZW4gPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6KTtcbiAgbGV0IHMsIGMsIHQ7XG4gIGxldCBhMDAsIGEwMSwgYTAyLCBhMDM7XG4gIGxldCBhMTAsIGExMSwgYTEyLCBhMTM7XG4gIGxldCBhMjAsIGEyMSwgYTIyLCBhMjM7XG4gIGxldCBiMDAsIGIwMSwgYjAyO1xuICBsZXQgYjEwLCBiMTEsIGIxMjtcbiAgbGV0IGIyMCwgYjIxLCBiMjI7XG5cbiAgaWYgKE1hdGguYWJzKGxlbikgPCBnbE1hdHJpeC5FUFNJTE9OKSB7IHJldHVybiBudWxsOyB9XG5cbiAgbGVuID0gMSAvIGxlbjtcbiAgeCAqPSBsZW47XG4gIHkgKj0gbGVuO1xuICB6ICo9IGxlbjtcblxuICBzID0gTWF0aC5zaW4ocmFkKTtcbiAgYyA9IE1hdGguY29zKHJhZCk7XG4gIHQgPSAxIC0gYztcblxuICBhMDAgPSBhWzBdOyBhMDEgPSBhWzFdOyBhMDIgPSBhWzJdOyBhMDMgPSBhWzNdO1xuICBhMTAgPSBhWzRdOyBhMTEgPSBhWzVdOyBhMTIgPSBhWzZdOyBhMTMgPSBhWzddO1xuICBhMjAgPSBhWzhdOyBhMjEgPSBhWzldOyBhMjIgPSBhWzEwXTsgYTIzID0gYVsxMV07XG5cbiAgLy8gQ29uc3RydWN0IHRoZSBlbGVtZW50cyBvZiB0aGUgcm90YXRpb24gbWF0cml4XG4gIGIwMCA9IHggKiB4ICogdCArIGM7IGIwMSA9IHkgKiB4ICogdCArIHogKiBzOyBiMDIgPSB6ICogeCAqIHQgLSB5ICogcztcbiAgYjEwID0geCAqIHkgKiB0IC0geiAqIHM7IGIxMSA9IHkgKiB5ICogdCArIGM7IGIxMiA9IHogKiB5ICogdCArIHggKiBzO1xuICBiMjAgPSB4ICogeiAqIHQgKyB5ICogczsgYjIxID0geSAqIHogKiB0IC0geCAqIHM7IGIyMiA9IHogKiB6ICogdCArIGM7XG5cbiAgLy8gUGVyZm9ybSByb3RhdGlvbi1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cbiAgb3V0WzBdID0gYTAwICogYjAwICsgYTEwICogYjAxICsgYTIwICogYjAyO1xuICBvdXRbMV0gPSBhMDEgKiBiMDAgKyBhMTEgKiBiMDEgKyBhMjEgKiBiMDI7XG4gIG91dFsyXSA9IGEwMiAqIGIwMCArIGExMiAqIGIwMSArIGEyMiAqIGIwMjtcbiAgb3V0WzNdID0gYTAzICogYjAwICsgYTEzICogYjAxICsgYTIzICogYjAyO1xuICBvdXRbNF0gPSBhMDAgKiBiMTAgKyBhMTAgKiBiMTEgKyBhMjAgKiBiMTI7XG4gIG91dFs1XSA9IGEwMSAqIGIxMCArIGExMSAqIGIxMSArIGEyMSAqIGIxMjtcbiAgb3V0WzZdID0gYTAyICogYjEwICsgYTEyICogYjExICsgYTIyICogYjEyO1xuICBvdXRbN10gPSBhMDMgKiBiMTAgKyBhMTMgKiBiMTEgKyBhMjMgKiBiMTI7XG4gIG91dFs4XSA9IGEwMCAqIGIyMCArIGExMCAqIGIyMSArIGEyMCAqIGIyMjtcbiAgb3V0WzldID0gYTAxICogYjIwICsgYTExICogYjIxICsgYTIxICogYjIyO1xuICBvdXRbMTBdID0gYTAyICogYjIwICsgYTEyICogYjIxICsgYTIyICogYjIyO1xuICBvdXRbMTFdID0gYTAzICogYjIwICsgYTEzICogYjIxICsgYTIzICogYjIyO1xuXG4gIGlmIChhICE9PSBvdXQpIHsgLy8gSWYgdGhlIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gZGlmZmVyLCBjb3B5IHRoZSB1bmNoYW5nZWQgbGFzdCByb3dcbiAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICBvdXRbMTVdID0gYVsxNV07XG4gIH1cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSb3RhdGVzIGEgbWF0cml4IGJ5IHRoZSBnaXZlbiBhbmdsZSBhcm91bmQgdGhlIFggYXhpc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVYKG91dCwgYSwgcmFkKSB7XG4gIGxldCBzID0gTWF0aC5zaW4ocmFkKTtcbiAgbGV0IGMgPSBNYXRoLmNvcyhyYWQpO1xuICBsZXQgYTEwID0gYVs0XTtcbiAgbGV0IGExMSA9IGFbNV07XG4gIGxldCBhMTIgPSBhWzZdO1xuICBsZXQgYTEzID0gYVs3XTtcbiAgbGV0IGEyMCA9IGFbOF07XG4gIGxldCBhMjEgPSBhWzldO1xuICBsZXQgYTIyID0gYVsxMF07XG4gIGxldCBhMjMgPSBhWzExXTtcblxuICBpZiAoYSAhPT0gb3V0KSB7IC8vIElmIHRoZSBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIGRpZmZlciwgY29weSB0aGUgdW5jaGFuZ2VkIHJvd3NcbiAgICBvdXRbMF0gID0gYVswXTtcbiAgICBvdXRbMV0gID0gYVsxXTtcbiAgICBvdXRbMl0gID0gYVsyXTtcbiAgICBvdXRbM10gID0gYVszXTtcbiAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICBvdXRbMTVdID0gYVsxNV07XG4gIH1cblxuICAvLyBQZXJmb3JtIGF4aXMtc3BlY2lmaWMgbWF0cml4IG11bHRpcGxpY2F0aW9uXG4gIG91dFs0XSA9IGExMCAqIGMgKyBhMjAgKiBzO1xuICBvdXRbNV0gPSBhMTEgKiBjICsgYTIxICogcztcbiAgb3V0WzZdID0gYTEyICogYyArIGEyMiAqIHM7XG4gIG91dFs3XSA9IGExMyAqIGMgKyBhMjMgKiBzO1xuICBvdXRbOF0gPSBhMjAgKiBjIC0gYTEwICogcztcbiAgb3V0WzldID0gYTIxICogYyAtIGExMSAqIHM7XG4gIG91dFsxMF0gPSBhMjIgKiBjIC0gYTEyICogcztcbiAgb3V0WzExXSA9IGEyMyAqIGMgLSBhMTMgKiBzO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJvdGF0ZXMgYSBtYXRyaXggYnkgdGhlIGdpdmVuIGFuZ2xlIGFyb3VuZCB0aGUgWSBheGlzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVkob3V0LCBhLCByYWQpIHtcbiAgbGV0IHMgPSBNYXRoLnNpbihyYWQpO1xuICBsZXQgYyA9IE1hdGguY29zKHJhZCk7XG4gIGxldCBhMDAgPSBhWzBdO1xuICBsZXQgYTAxID0gYVsxXTtcbiAgbGV0IGEwMiA9IGFbMl07XG4gIGxldCBhMDMgPSBhWzNdO1xuICBsZXQgYTIwID0gYVs4XTtcbiAgbGV0IGEyMSA9IGFbOV07XG4gIGxldCBhMjIgPSBhWzEwXTtcbiAgbGV0IGEyMyA9IGFbMTFdO1xuXG4gIGlmIChhICE9PSBvdXQpIHsgLy8gSWYgdGhlIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gZGlmZmVyLCBjb3B5IHRoZSB1bmNoYW5nZWQgcm93c1xuICAgIG91dFs0XSAgPSBhWzRdO1xuICAgIG91dFs1XSAgPSBhWzVdO1xuICAgIG91dFs2XSAgPSBhWzZdO1xuICAgIG91dFs3XSAgPSBhWzddO1xuICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICBvdXRbMTNdID0gYVsxM107XG4gICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgfVxuXG4gIC8vIFBlcmZvcm0gYXhpcy1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cbiAgb3V0WzBdID0gYTAwICogYyAtIGEyMCAqIHM7XG4gIG91dFsxXSA9IGEwMSAqIGMgLSBhMjEgKiBzO1xuICBvdXRbMl0gPSBhMDIgKiBjIC0gYTIyICogcztcbiAgb3V0WzNdID0gYTAzICogYyAtIGEyMyAqIHM7XG4gIG91dFs4XSA9IGEwMCAqIHMgKyBhMjAgKiBjO1xuICBvdXRbOV0gPSBhMDEgKiBzICsgYTIxICogYztcbiAgb3V0WzEwXSA9IGEwMiAqIHMgKyBhMjIgKiBjO1xuICBvdXRbMTFdID0gYTAzICogcyArIGEyMyAqIGM7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUm90YXRlcyBhIG1hdHJpeCBieSB0aGUgZ2l2ZW4gYW5nbGUgYXJvdW5kIHRoZSBaIGF4aXNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWihvdXQsIGEsIHJhZCkge1xuICBsZXQgcyA9IE1hdGguc2luKHJhZCk7XG4gIGxldCBjID0gTWF0aC5jb3MocmFkKTtcbiAgbGV0IGEwMCA9IGFbMF07XG4gIGxldCBhMDEgPSBhWzFdO1xuICBsZXQgYTAyID0gYVsyXTtcbiAgbGV0IGEwMyA9IGFbM107XG4gIGxldCBhMTAgPSBhWzRdO1xuICBsZXQgYTExID0gYVs1XTtcbiAgbGV0IGExMiA9IGFbNl07XG4gIGxldCBhMTMgPSBhWzddO1xuXG4gIGlmIChhICE9PSBvdXQpIHsgLy8gSWYgdGhlIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gZGlmZmVyLCBjb3B5IHRoZSB1bmNoYW5nZWQgbGFzdCByb3dcbiAgICBvdXRbOF0gID0gYVs4XTtcbiAgICBvdXRbOV0gID0gYVs5XTtcbiAgICBvdXRbMTBdID0gYVsxMF07XG4gICAgb3V0WzExXSA9IGFbMTFdO1xuICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICBvdXRbMTNdID0gYVsxM107XG4gICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgfVxuXG4gIC8vIFBlcmZvcm0gYXhpcy1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cbiAgb3V0WzBdID0gYTAwICogYyArIGExMCAqIHM7XG4gIG91dFsxXSA9IGEwMSAqIGMgKyBhMTEgKiBzO1xuICBvdXRbMl0gPSBhMDIgKiBjICsgYTEyICogcztcbiAgb3V0WzNdID0gYTAzICogYyArIGExMyAqIHM7XG4gIG91dFs0XSA9IGExMCAqIGMgLSBhMDAgKiBzO1xuICBvdXRbNV0gPSBhMTEgKiBjIC0gYTAxICogcztcbiAgb3V0WzZdID0gYTEyICogYyAtIGEwMiAqIHM7XG4gIG91dFs3XSA9IGExMyAqIGMgLSBhMDMgKiBzO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIHZlY3RvciB0cmFuc2xhdGlvblxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0NC50cmFuc2xhdGUoZGVzdCwgZGVzdCwgdmVjKTtcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge3ZlYzN9IHYgVHJhbnNsYXRpb24gdmVjdG9yXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tVHJhbnNsYXRpb24ob3V0LCB2KSB7XG4gIG91dFswXSA9IDE7XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IDA7XG4gIG91dFs1XSA9IDE7XG4gIG91dFs2XSA9IDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IDA7XG4gIG91dFs5XSA9IDA7XG4gIG91dFsxMF0gPSAxO1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IHZbMF07XG4gIG91dFsxM10gPSB2WzFdO1xuICBvdXRbMTRdID0gdlsyXTtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgdmVjdG9yIHNjYWxpbmdcbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxuICpcbiAqICAgICBtYXQ0LmlkZW50aXR5KGRlc3QpO1xuICogICAgIG1hdDQuc2NhbGUoZGVzdCwgZGVzdCwgdmVjKTtcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge3ZlYzN9IHYgU2NhbGluZyB2ZWN0b3JcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21TY2FsaW5nKG91dCwgdikge1xuICBvdXRbMF0gPSB2WzBdO1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSAwO1xuICBvdXRbNV0gPSB2WzFdO1xuICBvdXRbNl0gPSAwO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSAwO1xuICBvdXRbOV0gPSAwO1xuICBvdXRbMTBdID0gdlsyXTtcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSAwO1xuICBvdXRbMTNdID0gMDtcbiAgb3V0WzE0XSA9IDA7XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIGdpdmVuIGFuZ2xlIGFyb3VuZCBhIGdpdmVuIGF4aXNcbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxuICpcbiAqICAgICBtYXQ0LmlkZW50aXR5KGRlc3QpO1xuICogICAgIG1hdDQucm90YXRlKGRlc3QsIGRlc3QsIHJhZCwgYXhpcyk7XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEBwYXJhbSB7dmVjM30gYXhpcyB0aGUgYXhpcyB0byByb3RhdGUgYXJvdW5kXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUm90YXRpb24ob3V0LCByYWQsIGF4aXMpIHtcbiAgbGV0IHggPSBheGlzWzBdLCB5ID0gYXhpc1sxXSwgeiA9IGF4aXNbMl07XG4gIGxldCBsZW4gPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6KTtcbiAgbGV0IHMsIGMsIHQ7XG5cbiAgaWYgKE1hdGguYWJzKGxlbikgPCBnbE1hdHJpeC5FUFNJTE9OKSB7IHJldHVybiBudWxsOyB9XG5cbiAgbGVuID0gMSAvIGxlbjtcbiAgeCAqPSBsZW47XG4gIHkgKj0gbGVuO1xuICB6ICo9IGxlbjtcblxuICBzID0gTWF0aC5zaW4ocmFkKTtcbiAgYyA9IE1hdGguY29zKHJhZCk7XG4gIHQgPSAxIC0gYztcblxuICAvLyBQZXJmb3JtIHJvdGF0aW9uLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuICBvdXRbMF0gPSB4ICogeCAqIHQgKyBjO1xuICBvdXRbMV0gPSB5ICogeCAqIHQgKyB6ICogcztcbiAgb3V0WzJdID0geiAqIHggKiB0IC0geSAqIHM7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IHggKiB5ICogdCAtIHogKiBzO1xuICBvdXRbNV0gPSB5ICogeSAqIHQgKyBjO1xuICBvdXRbNl0gPSB6ICogeSAqIHQgKyB4ICogcztcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0geCAqIHogKiB0ICsgeSAqIHM7XG4gIG91dFs5XSA9IHkgKiB6ICogdCAtIHggKiBzO1xuICBvdXRbMTBdID0geiAqIHogKiB0ICsgYztcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSAwO1xuICBvdXRbMTNdID0gMDtcbiAgb3V0WzE0XSA9IDA7XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSB0aGUgZ2l2ZW4gYW5nbGUgYXJvdW5kIHRoZSBYIGF4aXNcbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxuICpcbiAqICAgICBtYXQ0LmlkZW50aXR5KGRlc3QpO1xuICogICAgIG1hdDQucm90YXRlWChkZXN0LCBkZXN0LCByYWQpO1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tWFJvdGF0aW9uKG91dCwgcmFkKSB7XG4gIGxldCBzID0gTWF0aC5zaW4ocmFkKTtcbiAgbGV0IGMgPSBNYXRoLmNvcyhyYWQpO1xuXG4gIC8vIFBlcmZvcm0gYXhpcy1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cbiAgb3V0WzBdICA9IDE7XG4gIG91dFsxXSAgPSAwO1xuICBvdXRbMl0gID0gMDtcbiAgb3V0WzNdICA9IDA7XG4gIG91dFs0XSA9IDA7XG4gIG91dFs1XSA9IGM7XG4gIG91dFs2XSA9IHM7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IDA7XG4gIG91dFs5XSA9IC1zO1xuICBvdXRbMTBdID0gYztcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSAwO1xuICBvdXRbMTNdID0gMDtcbiAgb3V0WzE0XSA9IDA7XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSB0aGUgZ2l2ZW4gYW5nbGUgYXJvdW5kIHRoZSBZIGF4aXNcbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxuICpcbiAqICAgICBtYXQ0LmlkZW50aXR5KGRlc3QpO1xuICogICAgIG1hdDQucm90YXRlWShkZXN0LCBkZXN0LCByYWQpO1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tWVJvdGF0aW9uKG91dCwgcmFkKSB7XG4gIGxldCBzID0gTWF0aC5zaW4ocmFkKTtcbiAgbGV0IGMgPSBNYXRoLmNvcyhyYWQpO1xuXG4gIC8vIFBlcmZvcm0gYXhpcy1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cbiAgb3V0WzBdICA9IGM7XG4gIG91dFsxXSAgPSAwO1xuICBvdXRbMl0gID0gLXM7XG4gIG91dFszXSAgPSAwO1xuICBvdXRbNF0gPSAwO1xuICBvdXRbNV0gPSAxO1xuICBvdXRbNl0gPSAwO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSBzO1xuICBvdXRbOV0gPSAwO1xuICBvdXRbMTBdID0gYztcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSAwO1xuICBvdXRbMTNdID0gMDtcbiAgb3V0WzE0XSA9IDA7XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSB0aGUgZ2l2ZW4gYW5nbGUgYXJvdW5kIHRoZSBaIGF4aXNcbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxuICpcbiAqICAgICBtYXQ0LmlkZW50aXR5KGRlc3QpO1xuICogICAgIG1hdDQucm90YXRlWihkZXN0LCBkZXN0LCByYWQpO1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tWlJvdGF0aW9uKG91dCwgcmFkKSB7XG4gIGxldCBzID0gTWF0aC5zaW4ocmFkKTtcbiAgbGV0IGMgPSBNYXRoLmNvcyhyYWQpO1xuXG4gIC8vIFBlcmZvcm0gYXhpcy1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cbiAgb3V0WzBdICA9IGM7XG4gIG91dFsxXSAgPSBzO1xuICBvdXRbMl0gID0gMDtcbiAgb3V0WzNdICA9IDA7XG4gIG91dFs0XSA9IC1zO1xuICBvdXRbNV0gPSBjO1xuICBvdXRbNl0gPSAwO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSAwO1xuICBvdXRbOV0gPSAwO1xuICBvdXRbMTBdID0gMTtcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSAwO1xuICBvdXRbMTNdID0gMDtcbiAgb3V0WzE0XSA9IDA7XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIHF1YXRlcm5pb24gcm90YXRpb24gYW5kIHZlY3RvciB0cmFuc2xhdGlvblxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0NC50cmFuc2xhdGUoZGVzdCwgdmVjKTtcbiAqICAgICBsZXQgcXVhdE1hdCA9IG1hdDQuY3JlYXRlKCk7XG4gKiAgICAgcXVhdDQudG9NYXQ0KHF1YXQsIHF1YXRNYXQpO1xuICogICAgIG1hdDQubXVsdGlwbHkoZGVzdCwgcXVhdE1hdCk7XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtxdWF0NH0gcSBSb3RhdGlvbiBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge3ZlYzN9IHYgVHJhbnNsYXRpb24gdmVjdG9yXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUm90YXRpb25UcmFuc2xhdGlvbihvdXQsIHEsIHYpIHtcbiAgLy8gUXVhdGVybmlvbiBtYXRoXG4gIGxldCB4ID0gcVswXSwgeSA9IHFbMV0sIHogPSBxWzJdLCB3ID0gcVszXTtcbiAgbGV0IHgyID0geCArIHg7XG4gIGxldCB5MiA9IHkgKyB5O1xuICBsZXQgejIgPSB6ICsgejtcblxuICBsZXQgeHggPSB4ICogeDI7XG4gIGxldCB4eSA9IHggKiB5MjtcbiAgbGV0IHh6ID0geCAqIHoyO1xuICBsZXQgeXkgPSB5ICogeTI7XG4gIGxldCB5eiA9IHkgKiB6MjtcbiAgbGV0IHp6ID0geiAqIHoyO1xuICBsZXQgd3ggPSB3ICogeDI7XG4gIGxldCB3eSA9IHcgKiB5MjtcbiAgbGV0IHd6ID0gdyAqIHoyO1xuXG4gIG91dFswXSA9IDEgLSAoeXkgKyB6eik7XG4gIG91dFsxXSA9IHh5ICsgd3o7XG4gIG91dFsyXSA9IHh6IC0gd3k7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IHh5IC0gd3o7XG4gIG91dFs1XSA9IDEgLSAoeHggKyB6eik7XG4gIG91dFs2XSA9IHl6ICsgd3g7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IHh6ICsgd3k7XG4gIG91dFs5XSA9IHl6IC0gd3g7XG4gIG91dFsxMF0gPSAxIC0gKHh4ICsgeXkpO1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IHZbMF07XG4gIG91dFsxM10gPSB2WzFdO1xuICBvdXRbMTRdID0gdlsyXTtcbiAgb3V0WzE1XSA9IDE7XG5cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSB0cmFuc2xhdGlvbiB2ZWN0b3IgY29tcG9uZW50IG9mIGEgdHJhbnNmb3JtYXRpb25cbiAqICBtYXRyaXguIElmIGEgbWF0cml4IGlzIGJ1aWx0IHdpdGggZnJvbVJvdGF0aW9uVHJhbnNsYXRpb24sXG4gKiAgdGhlIHJldHVybmVkIHZlY3RvciB3aWxsIGJlIHRoZSBzYW1lIGFzIHRoZSB0cmFuc2xhdGlvbiB2ZWN0b3JcbiAqICBvcmlnaW5hbGx5IHN1cHBsaWVkLlxuICogQHBhcmFtICB7dmVjM30gb3V0IFZlY3RvciB0byByZWNlaXZlIHRyYW5zbGF0aW9uIGNvbXBvbmVudFxuICogQHBhcmFtICB7bWF0NH0gbWF0IE1hdHJpeCB0byBiZSBkZWNvbXBvc2VkIChpbnB1dClcbiAqIEByZXR1cm4ge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJhbnNsYXRpb24ob3V0LCBtYXQpIHtcbiAgb3V0WzBdID0gbWF0WzEyXTtcbiAgb3V0WzFdID0gbWF0WzEzXTtcbiAgb3V0WzJdID0gbWF0WzE0XTtcblxuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHNjYWxpbmcgZmFjdG9yIGNvbXBvbmVudCBvZiBhIHRyYW5zZm9ybWF0aW9uXG4gKiAgbWF0cml4LiBJZiBhIG1hdHJpeCBpcyBidWlsdCB3aXRoIGZyb21Sb3RhdGlvblRyYW5zbGF0aW9uU2NhbGVcbiAqICB3aXRoIGEgbm9ybWFsaXplZCBRdWF0ZXJuaW9uIHBhcmFtdGVyLCB0aGUgcmV0dXJuZWQgdmVjdG9yIHdpbGwgYmVcbiAqICB0aGUgc2FtZSBhcyB0aGUgc2NhbGluZyB2ZWN0b3JcbiAqICBvcmlnaW5hbGx5IHN1cHBsaWVkLlxuICogQHBhcmFtICB7dmVjM30gb3V0IFZlY3RvciB0byByZWNlaXZlIHNjYWxpbmcgZmFjdG9yIGNvbXBvbmVudFxuICogQHBhcmFtICB7bWF0NH0gbWF0IE1hdHJpeCB0byBiZSBkZWNvbXBvc2VkIChpbnB1dClcbiAqIEByZXR1cm4ge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NhbGluZyhvdXQsIG1hdCkge1xuICBsZXQgbTExID0gbWF0WzBdO1xuICBsZXQgbTEyID0gbWF0WzFdO1xuICBsZXQgbTEzID0gbWF0WzJdO1xuICBsZXQgbTIxID0gbWF0WzRdO1xuICBsZXQgbTIyID0gbWF0WzVdO1xuICBsZXQgbTIzID0gbWF0WzZdO1xuICBsZXQgbTMxID0gbWF0WzhdO1xuICBsZXQgbTMyID0gbWF0WzldO1xuICBsZXQgbTMzID0gbWF0WzEwXTtcblxuICBvdXRbMF0gPSBNYXRoLnNxcnQobTExICogbTExICsgbTEyICogbTEyICsgbTEzICogbTEzKTtcbiAgb3V0WzFdID0gTWF0aC5zcXJ0KG0yMSAqIG0yMSArIG0yMiAqIG0yMiArIG0yMyAqIG0yMyk7XG4gIG91dFsyXSA9IE1hdGguc3FydChtMzEgKiBtMzEgKyBtMzIgKiBtMzIgKyBtMzMgKiBtMzMpO1xuXG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHF1YXRlcm5pb24gcmVwcmVzZW50aW5nIHRoZSByb3RhdGlvbmFsIGNvbXBvbmVudFxuICogIG9mIGEgdHJhbnNmb3JtYXRpb24gbWF0cml4LiBJZiBhIG1hdHJpeCBpcyBidWlsdCB3aXRoXG4gKiAgZnJvbVJvdGF0aW9uVHJhbnNsYXRpb24sIHRoZSByZXR1cm5lZCBxdWF0ZXJuaW9uIHdpbGwgYmUgdGhlXG4gKiAgc2FtZSBhcyB0aGUgcXVhdGVybmlvbiBvcmlnaW5hbGx5IHN1cHBsaWVkLlxuICogQHBhcmFtIHtxdWF0fSBvdXQgUXVhdGVybmlvbiB0byByZWNlaXZlIHRoZSByb3RhdGlvbiBjb21wb25lbnRcbiAqIEBwYXJhbSB7bWF0NH0gbWF0IE1hdHJpeCB0byBiZSBkZWNvbXBvc2VkIChpbnB1dClcbiAqIEByZXR1cm4ge3F1YXR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um90YXRpb24ob3V0LCBtYXQpIHtcbiAgLy8gQWxnb3JpdGhtIHRha2VuIGZyb20gaHR0cDovL3d3dy5ldWNsaWRlYW5zcGFjZS5jb20vbWF0aHMvZ2VvbWV0cnkvcm90YXRpb25zL2NvbnZlcnNpb25zL21hdHJpeFRvUXVhdGVybmlvbi9pbmRleC5odG1cbiAgbGV0IHRyYWNlID0gbWF0WzBdICsgbWF0WzVdICsgbWF0WzEwXTtcbiAgbGV0IFMgPSAwO1xuXG4gIGlmICh0cmFjZSA+IDApIHtcbiAgICBTID0gTWF0aC5zcXJ0KHRyYWNlICsgMS4wKSAqIDI7XG4gICAgb3V0WzNdID0gMC4yNSAqIFM7XG4gICAgb3V0WzBdID0gKG1hdFs2XSAtIG1hdFs5XSkgLyBTO1xuICAgIG91dFsxXSA9IChtYXRbOF0gLSBtYXRbMl0pIC8gUztcbiAgICBvdXRbMl0gPSAobWF0WzFdIC0gbWF0WzRdKSAvIFM7XG4gIH0gZWxzZSBpZiAoKG1hdFswXSA+IG1hdFs1XSkmKG1hdFswXSA+IG1hdFsxMF0pKSB7XG4gICAgUyA9IE1hdGguc3FydCgxLjAgKyBtYXRbMF0gLSBtYXRbNV0gLSBtYXRbMTBdKSAqIDI7XG4gICAgb3V0WzNdID0gKG1hdFs2XSAtIG1hdFs5XSkgLyBTO1xuICAgIG91dFswXSA9IDAuMjUgKiBTO1xuICAgIG91dFsxXSA9IChtYXRbMV0gKyBtYXRbNF0pIC8gUztcbiAgICBvdXRbMl0gPSAobWF0WzhdICsgbWF0WzJdKSAvIFM7XG4gIH0gZWxzZSBpZiAobWF0WzVdID4gbWF0WzEwXSkge1xuICAgIFMgPSBNYXRoLnNxcnQoMS4wICsgbWF0WzVdIC0gbWF0WzBdIC0gbWF0WzEwXSkgKiAyO1xuICAgIG91dFszXSA9IChtYXRbOF0gLSBtYXRbMl0pIC8gUztcbiAgICBvdXRbMF0gPSAobWF0WzFdICsgbWF0WzRdKSAvIFM7XG4gICAgb3V0WzFdID0gMC4yNSAqIFM7XG4gICAgb3V0WzJdID0gKG1hdFs2XSArIG1hdFs5XSkgLyBTO1xuICB9IGVsc2Uge1xuICAgIFMgPSBNYXRoLnNxcnQoMS4wICsgbWF0WzEwXSAtIG1hdFswXSAtIG1hdFs1XSkgKiAyO1xuICAgIG91dFszXSA9IChtYXRbMV0gLSBtYXRbNF0pIC8gUztcbiAgICBvdXRbMF0gPSAobWF0WzhdICsgbWF0WzJdKSAvIFM7XG4gICAgb3V0WzFdID0gKG1hdFs2XSArIG1hdFs5XSkgLyBTO1xuICAgIG91dFsyXSA9IDAuMjUgKiBTO1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSBxdWF0ZXJuaW9uIHJvdGF0aW9uLCB2ZWN0b3IgdHJhbnNsYXRpb24gYW5kIHZlY3RvciBzY2FsZVxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0NC50cmFuc2xhdGUoZGVzdCwgdmVjKTtcbiAqICAgICBsZXQgcXVhdE1hdCA9IG1hdDQuY3JlYXRlKCk7XG4gKiAgICAgcXVhdDQudG9NYXQ0KHF1YXQsIHF1YXRNYXQpO1xuICogICAgIG1hdDQubXVsdGlwbHkoZGVzdCwgcXVhdE1hdCk7XG4gKiAgICAgbWF0NC5zY2FsZShkZXN0LCBzY2FsZSlcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge3F1YXQ0fSBxIFJvdGF0aW9uIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7dmVjM30gdiBUcmFuc2xhdGlvbiB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gcyBTY2FsaW5nIHZlY3RvclxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVJvdGF0aW9uVHJhbnNsYXRpb25TY2FsZShvdXQsIHEsIHYsIHMpIHtcbiAgLy8gUXVhdGVybmlvbiBtYXRoXG4gIGxldCB4ID0gcVswXSwgeSA9IHFbMV0sIHogPSBxWzJdLCB3ID0gcVszXTtcbiAgbGV0IHgyID0geCArIHg7XG4gIGxldCB5MiA9IHkgKyB5O1xuICBsZXQgejIgPSB6ICsgejtcblxuICBsZXQgeHggPSB4ICogeDI7XG4gIGxldCB4eSA9IHggKiB5MjtcbiAgbGV0IHh6ID0geCAqIHoyO1xuICBsZXQgeXkgPSB5ICogeTI7XG4gIGxldCB5eiA9IHkgKiB6MjtcbiAgbGV0IHp6ID0geiAqIHoyO1xuICBsZXQgd3ggPSB3ICogeDI7XG4gIGxldCB3eSA9IHcgKiB5MjtcbiAgbGV0IHd6ID0gdyAqIHoyO1xuICBsZXQgc3ggPSBzWzBdO1xuICBsZXQgc3kgPSBzWzFdO1xuICBsZXQgc3ogPSBzWzJdO1xuXG4gIG91dFswXSA9ICgxIC0gKHl5ICsgenopKSAqIHN4O1xuICBvdXRbMV0gPSAoeHkgKyB3eikgKiBzeDtcbiAgb3V0WzJdID0gKHh6IC0gd3kpICogc3g7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9ICh4eSAtIHd6KSAqIHN5O1xuICBvdXRbNV0gPSAoMSAtICh4eCArIHp6KSkgKiBzeTtcbiAgb3V0WzZdID0gKHl6ICsgd3gpICogc3k7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9ICh4eiArIHd5KSAqIHN6O1xuICBvdXRbOV0gPSAoeXogLSB3eCkgKiBzejtcbiAgb3V0WzEwXSA9ICgxIC0gKHh4ICsgeXkpKSAqIHN6O1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IHZbMF07XG4gIG91dFsxM10gPSB2WzFdO1xuICBvdXRbMTRdID0gdlsyXTtcbiAgb3V0WzE1XSA9IDE7XG5cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSBxdWF0ZXJuaW9uIHJvdGF0aW9uLCB2ZWN0b3IgdHJhbnNsYXRpb24gYW5kIHZlY3RvciBzY2FsZSwgcm90YXRpbmcgYW5kIHNjYWxpbmcgYXJvdW5kIHRoZSBnaXZlbiBvcmlnaW5cbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxuICpcbiAqICAgICBtYXQ0LmlkZW50aXR5KGRlc3QpO1xuICogICAgIG1hdDQudHJhbnNsYXRlKGRlc3QsIHZlYyk7XG4gKiAgICAgbWF0NC50cmFuc2xhdGUoZGVzdCwgb3JpZ2luKTtcbiAqICAgICBsZXQgcXVhdE1hdCA9IG1hdDQuY3JlYXRlKCk7XG4gKiAgICAgcXVhdDQudG9NYXQ0KHF1YXQsIHF1YXRNYXQpO1xuICogICAgIG1hdDQubXVsdGlwbHkoZGVzdCwgcXVhdE1hdCk7XG4gKiAgICAgbWF0NC5zY2FsZShkZXN0LCBzY2FsZSlcbiAqICAgICBtYXQ0LnRyYW5zbGF0ZShkZXN0LCBuZWdhdGl2ZU9yaWdpbik7XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtxdWF0NH0gcSBSb3RhdGlvbiBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge3ZlYzN9IHYgVHJhbnNsYXRpb24gdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IHMgU2NhbGluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gbyBUaGUgb3JpZ2luIHZlY3RvciBhcm91bmQgd2hpY2ggdG8gc2NhbGUgYW5kIHJvdGF0ZVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVJvdGF0aW9uVHJhbnNsYXRpb25TY2FsZU9yaWdpbihvdXQsIHEsIHYsIHMsIG8pIHtcbiAgLy8gUXVhdGVybmlvbiBtYXRoXG4gIGxldCB4ID0gcVswXSwgeSA9IHFbMV0sIHogPSBxWzJdLCB3ID0gcVszXTtcbiAgbGV0IHgyID0geCArIHg7XG4gIGxldCB5MiA9IHkgKyB5O1xuICBsZXQgejIgPSB6ICsgejtcblxuICBsZXQgeHggPSB4ICogeDI7XG4gIGxldCB4eSA9IHggKiB5MjtcbiAgbGV0IHh6ID0geCAqIHoyO1xuICBsZXQgeXkgPSB5ICogeTI7XG4gIGxldCB5eiA9IHkgKiB6MjtcbiAgbGV0IHp6ID0geiAqIHoyO1xuICBsZXQgd3ggPSB3ICogeDI7XG4gIGxldCB3eSA9IHcgKiB5MjtcbiAgbGV0IHd6ID0gdyAqIHoyO1xuXG4gIGxldCBzeCA9IHNbMF07XG4gIGxldCBzeSA9IHNbMV07XG4gIGxldCBzeiA9IHNbMl07XG5cbiAgbGV0IG94ID0gb1swXTtcbiAgbGV0IG95ID0gb1sxXTtcbiAgbGV0IG96ID0gb1syXTtcblxuICBvdXRbMF0gPSAoMSAtICh5eSArIHp6KSkgKiBzeDtcbiAgb3V0WzFdID0gKHh5ICsgd3opICogc3g7XG4gIG91dFsyXSA9ICh4eiAtIHd5KSAqIHN4O1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSAoeHkgLSB3eikgKiBzeTtcbiAgb3V0WzVdID0gKDEgLSAoeHggKyB6eikpICogc3k7XG4gIG91dFs2XSA9ICh5eiArIHd4KSAqIHN5O1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSAoeHogKyB3eSkgKiBzejtcbiAgb3V0WzldID0gKHl6IC0gd3gpICogc3o7XG4gIG91dFsxMF0gPSAoMSAtICh4eCArIHl5KSkgKiBzejtcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSB2WzBdICsgb3ggLSAob3V0WzBdICogb3ggKyBvdXRbNF0gKiBveSArIG91dFs4XSAqIG96KTtcbiAgb3V0WzEzXSA9IHZbMV0gKyBveSAtIChvdXRbMV0gKiBveCArIG91dFs1XSAqIG95ICsgb3V0WzldICogb3opO1xuICBvdXRbMTRdID0gdlsyXSArIG96IC0gKG91dFsyXSAqIG94ICsgb3V0WzZdICogb3kgKyBvdXRbMTBdICogb3opO1xuICBvdXRbMTVdID0gMTtcblxuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgYSA0eDQgbWF0cml4IGZyb20gdGhlIGdpdmVuIHF1YXRlcm5pb25cbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge3F1YXR9IHEgUXVhdGVybmlvbiB0byBjcmVhdGUgbWF0cml4IGZyb21cbiAqXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUXVhdChvdXQsIHEpIHtcbiAgbGV0IHggPSBxWzBdLCB5ID0gcVsxXSwgeiA9IHFbMl0sIHcgPSBxWzNdO1xuICBsZXQgeDIgPSB4ICsgeDtcbiAgbGV0IHkyID0geSArIHk7XG4gIGxldCB6MiA9IHogKyB6O1xuXG4gIGxldCB4eCA9IHggKiB4MjtcbiAgbGV0IHl4ID0geSAqIHgyO1xuICBsZXQgeXkgPSB5ICogeTI7XG4gIGxldCB6eCA9IHogKiB4MjtcbiAgbGV0IHp5ID0geiAqIHkyO1xuICBsZXQgenogPSB6ICogejI7XG4gIGxldCB3eCA9IHcgKiB4MjtcbiAgbGV0IHd5ID0gdyAqIHkyO1xuICBsZXQgd3ogPSB3ICogejI7XG5cbiAgb3V0WzBdID0gMSAtIHl5IC0geno7XG4gIG91dFsxXSA9IHl4ICsgd3o7XG4gIG91dFsyXSA9IHp4IC0gd3k7XG4gIG91dFszXSA9IDA7XG5cbiAgb3V0WzRdID0geXggLSB3ejtcbiAgb3V0WzVdID0gMSAtIHh4IC0geno7XG4gIG91dFs2XSA9IHp5ICsgd3g7XG4gIG91dFs3XSA9IDA7XG5cbiAgb3V0WzhdID0genggKyB3eTtcbiAgb3V0WzldID0genkgLSB3eDtcbiAgb3V0WzEwXSA9IDEgLSB4eCAtIHl5O1xuICBvdXRbMTFdID0gMDtcblxuICBvdXRbMTJdID0gMDtcbiAgb3V0WzEzXSA9IDA7XG4gIG91dFsxNF0gPSAwO1xuICBvdXRbMTVdID0gMTtcblxuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIGZydXN0dW0gbWF0cml4IHdpdGggdGhlIGdpdmVuIGJvdW5kc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cbiAqIEBwYXJhbSB7TnVtYmVyfSBsZWZ0IExlZnQgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7TnVtYmVyfSByaWdodCBSaWdodCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtOdW1iZXJ9IGJvdHRvbSBCb3R0b20gYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7TnVtYmVyfSB0b3AgVG9wIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge051bWJlcn0gbmVhciBOZWFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge051bWJlcn0gZmFyIEZhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJ1c3R1bShvdXQsIGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhciwgZmFyKSB7XG4gIGxldCBybCA9IDEgLyAocmlnaHQgLSBsZWZ0KTtcbiAgbGV0IHRiID0gMSAvICh0b3AgLSBib3R0b20pO1xuICBsZXQgbmYgPSAxIC8gKG5lYXIgLSBmYXIpO1xuICBvdXRbMF0gPSAobmVhciAqIDIpICogcmw7XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IDA7XG4gIG91dFs1XSA9IChuZWFyICogMikgKiB0YjtcbiAgb3V0WzZdID0gMDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gKHJpZ2h0ICsgbGVmdCkgKiBybDtcbiAgb3V0WzldID0gKHRvcCArIGJvdHRvbSkgKiB0YjtcbiAgb3V0WzEwXSA9IChmYXIgKyBuZWFyKSAqIG5mO1xuICBvdXRbMTFdID0gLTE7XG4gIG91dFsxMl0gPSAwO1xuICBvdXRbMTNdID0gMDtcbiAgb3V0WzE0XSA9IChmYXIgKiBuZWFyICogMikgKiBuZjtcbiAgb3V0WzE1XSA9IDA7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgcGVyc3BlY3RpdmUgcHJvamVjdGlvbiBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gYm91bmRzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xuICogQHBhcmFtIHtudW1iZXJ9IGZvdnkgVmVydGljYWwgZmllbGQgb2YgdmlldyBpbiByYWRpYW5zXG4gKiBAcGFyYW0ge251bWJlcn0gYXNwZWN0IEFzcGVjdCByYXRpby4gdHlwaWNhbGx5IHZpZXdwb3J0IHdpZHRoL2hlaWdodFxuICogQHBhcmFtIHtudW1iZXJ9IG5lYXIgTmVhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IGZhciBGYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBlcnNwZWN0aXZlKG91dCwgZm92eSwgYXNwZWN0LCBuZWFyLCBmYXIpIHtcbiAgbGV0IGYgPSAxLjAgLyBNYXRoLnRhbihmb3Z5IC8gMik7XG4gIGxldCBuZiA9IDEgLyAobmVhciAtIGZhcik7XG4gIG91dFswXSA9IGYgLyBhc3BlY3Q7XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IDA7XG4gIG91dFs1XSA9IGY7XG4gIG91dFs2XSA9IDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IDA7XG4gIG91dFs5XSA9IDA7XG4gIG91dFsxMF0gPSAoZmFyICsgbmVhcikgKiBuZjtcbiAgb3V0WzExXSA9IC0xO1xuICBvdXRbMTJdID0gMDtcbiAgb3V0WzEzXSA9IDA7XG4gIG91dFsxNF0gPSAoMiAqIGZhciAqIG5lYXIpICogbmY7XG4gIG91dFsxNV0gPSAwO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHBlcnNwZWN0aXZlIHByb2plY3Rpb24gbWF0cml4IHdpdGggdGhlIGdpdmVuIGZpZWxkIG9mIHZpZXcuXG4gKiBUaGlzIGlzIHByaW1hcmlseSB1c2VmdWwgZm9yIGdlbmVyYXRpbmcgcHJvamVjdGlvbiBtYXRyaWNlcyB0byBiZSB1c2VkXG4gKiB3aXRoIHRoZSBzdGlsbCBleHBlcmllbWVudGFsIFdlYlZSIEFQSS5cbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXG4gKiBAcGFyYW0ge09iamVjdH0gZm92IE9iamVjdCBjb250YWluaW5nIHRoZSBmb2xsb3dpbmcgdmFsdWVzOiB1cERlZ3JlZXMsIGRvd25EZWdyZWVzLCBsZWZ0RGVncmVlcywgcmlnaHREZWdyZWVzXG4gKiBAcGFyYW0ge251bWJlcn0gbmVhciBOZWFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gZmFyIEZhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcGVyc3BlY3RpdmVGcm9tRmllbGRPZlZpZXcob3V0LCBmb3YsIG5lYXIsIGZhcikge1xuICBsZXQgdXBUYW4gPSBNYXRoLnRhbihmb3YudXBEZWdyZWVzICogTWF0aC5QSS8xODAuMCk7XG4gIGxldCBkb3duVGFuID0gTWF0aC50YW4oZm92LmRvd25EZWdyZWVzICogTWF0aC5QSS8xODAuMCk7XG4gIGxldCBsZWZ0VGFuID0gTWF0aC50YW4oZm92LmxlZnREZWdyZWVzICogTWF0aC5QSS8xODAuMCk7XG4gIGxldCByaWdodFRhbiA9IE1hdGgudGFuKGZvdi5yaWdodERlZ3JlZXMgKiBNYXRoLlBJLzE4MC4wKTtcbiAgbGV0IHhTY2FsZSA9IDIuMCAvIChsZWZ0VGFuICsgcmlnaHRUYW4pO1xuICBsZXQgeVNjYWxlID0gMi4wIC8gKHVwVGFuICsgZG93blRhbik7XG5cbiAgb3V0WzBdID0geFNjYWxlO1xuICBvdXRbMV0gPSAwLjA7XG4gIG91dFsyXSA9IDAuMDtcbiAgb3V0WzNdID0gMC4wO1xuICBvdXRbNF0gPSAwLjA7XG4gIG91dFs1XSA9IHlTY2FsZTtcbiAgb3V0WzZdID0gMC4wO1xuICBvdXRbN10gPSAwLjA7XG4gIG91dFs4XSA9IC0oKGxlZnRUYW4gLSByaWdodFRhbikgKiB4U2NhbGUgKiAwLjUpO1xuICBvdXRbOV0gPSAoKHVwVGFuIC0gZG93blRhbikgKiB5U2NhbGUgKiAwLjUpO1xuICBvdXRbMTBdID0gZmFyIC8gKG5lYXIgLSBmYXIpO1xuICBvdXRbMTFdID0gLTEuMDtcbiAgb3V0WzEyXSA9IDAuMDtcbiAgb3V0WzEzXSA9IDAuMDtcbiAgb3V0WzE0XSA9IChmYXIgKiBuZWFyKSAvIChuZWFyIC0gZmFyKTtcbiAgb3V0WzE1XSA9IDAuMDtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBvcnRob2dvbmFsIHByb2plY3Rpb24gbWF0cml4IHdpdGggdGhlIGdpdmVuIGJvdW5kc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cbiAqIEBwYXJhbSB7bnVtYmVyfSBsZWZ0IExlZnQgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSByaWdodCBSaWdodCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IGJvdHRvbSBCb3R0b20gYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSB0b3AgVG9wIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gbmVhciBOZWFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gZmFyIEZhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gb3J0aG8ob3V0LCBsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXIsIGZhcikge1xuICBsZXQgbHIgPSAxIC8gKGxlZnQgLSByaWdodCk7XG4gIGxldCBidCA9IDEgLyAoYm90dG9tIC0gdG9wKTtcbiAgbGV0IG5mID0gMSAvIChuZWFyIC0gZmFyKTtcbiAgb3V0WzBdID0gLTIgKiBscjtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gMDtcbiAgb3V0WzVdID0gLTIgKiBidDtcbiAgb3V0WzZdID0gMDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gMDtcbiAgb3V0WzldID0gMDtcbiAgb3V0WzEwXSA9IDIgKiBuZjtcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSAobGVmdCArIHJpZ2h0KSAqIGxyO1xuICBvdXRbMTNdID0gKHRvcCArIGJvdHRvbSkgKiBidDtcbiAgb3V0WzE0XSA9IChmYXIgKyBuZWFyKSAqIG5mO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBsb29rLWF0IG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBleWUgcG9zaXRpb24sIGZvY2FsIHBvaW50LCBhbmQgdXAgYXhpc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cbiAqIEBwYXJhbSB7dmVjM30gZXllIFBvc2l0aW9uIG9mIHRoZSB2aWV3ZXJcbiAqIEBwYXJhbSB7dmVjM30gY2VudGVyIFBvaW50IHRoZSB2aWV3ZXIgaXMgbG9va2luZyBhdFxuICogQHBhcmFtIHt2ZWMzfSB1cCB2ZWMzIHBvaW50aW5nIHVwXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb29rQXQob3V0LCBleWUsIGNlbnRlciwgdXApIHtcbiAgbGV0IHgwLCB4MSwgeDIsIHkwLCB5MSwgeTIsIHowLCB6MSwgejIsIGxlbjtcbiAgbGV0IGV5ZXggPSBleWVbMF07XG4gIGxldCBleWV5ID0gZXllWzFdO1xuICBsZXQgZXlleiA9IGV5ZVsyXTtcbiAgbGV0IHVweCA9IHVwWzBdO1xuICBsZXQgdXB5ID0gdXBbMV07XG4gIGxldCB1cHogPSB1cFsyXTtcbiAgbGV0IGNlbnRlcnggPSBjZW50ZXJbMF07XG4gIGxldCBjZW50ZXJ5ID0gY2VudGVyWzFdO1xuICBsZXQgY2VudGVyeiA9IGNlbnRlclsyXTtcblxuICBpZiAoTWF0aC5hYnMoZXlleCAtIGNlbnRlcngpIDwgZ2xNYXRyaXguRVBTSUxPTiAmJlxuICAgICAgTWF0aC5hYnMoZXlleSAtIGNlbnRlcnkpIDwgZ2xNYXRyaXguRVBTSUxPTiAmJlxuICAgICAgTWF0aC5hYnMoZXlleiAtIGNlbnRlcnopIDwgZ2xNYXRyaXguRVBTSUxPTikge1xuICAgIHJldHVybiBtYXQ0LmlkZW50aXR5KG91dCk7XG4gIH1cblxuICB6MCA9IGV5ZXggLSBjZW50ZXJ4O1xuICB6MSA9IGV5ZXkgLSBjZW50ZXJ5O1xuICB6MiA9IGV5ZXogLSBjZW50ZXJ6O1xuXG4gIGxlbiA9IDEgLyBNYXRoLnNxcnQoejAgKiB6MCArIHoxICogejEgKyB6MiAqIHoyKTtcbiAgejAgKj0gbGVuO1xuICB6MSAqPSBsZW47XG4gIHoyICo9IGxlbjtcblxuICB4MCA9IHVweSAqIHoyIC0gdXB6ICogejE7XG4gIHgxID0gdXB6ICogejAgLSB1cHggKiB6MjtcbiAgeDIgPSB1cHggKiB6MSAtIHVweSAqIHowO1xuICBsZW4gPSBNYXRoLnNxcnQoeDAgKiB4MCArIHgxICogeDEgKyB4MiAqIHgyKTtcbiAgaWYgKCFsZW4pIHtcbiAgICB4MCA9IDA7XG4gICAgeDEgPSAwO1xuICAgIHgyID0gMDtcbiAgfSBlbHNlIHtcbiAgICBsZW4gPSAxIC8gbGVuO1xuICAgIHgwICo9IGxlbjtcbiAgICB4MSAqPSBsZW47XG4gICAgeDIgKj0gbGVuO1xuICB9XG5cbiAgeTAgPSB6MSAqIHgyIC0gejIgKiB4MTtcbiAgeTEgPSB6MiAqIHgwIC0gejAgKiB4MjtcbiAgeTIgPSB6MCAqIHgxIC0gejEgKiB4MDtcblxuICBsZW4gPSBNYXRoLnNxcnQoeTAgKiB5MCArIHkxICogeTEgKyB5MiAqIHkyKTtcbiAgaWYgKCFsZW4pIHtcbiAgICB5MCA9IDA7XG4gICAgeTEgPSAwO1xuICAgIHkyID0gMDtcbiAgfSBlbHNlIHtcbiAgICBsZW4gPSAxIC8gbGVuO1xuICAgIHkwICo9IGxlbjtcbiAgICB5MSAqPSBsZW47XG4gICAgeTIgKj0gbGVuO1xuICB9XG5cbiAgb3V0WzBdID0geDA7XG4gIG91dFsxXSA9IHkwO1xuICBvdXRbMl0gPSB6MDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0geDE7XG4gIG91dFs1XSA9IHkxO1xuICBvdXRbNl0gPSB6MTtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0geDI7XG4gIG91dFs5XSA9IHkyO1xuICBvdXRbMTBdID0gejI7XG4gIG91dFsxMV0gPSAwO1xuICBvdXRbMTJdID0gLSh4MCAqIGV5ZXggKyB4MSAqIGV5ZXkgKyB4MiAqIGV5ZXopO1xuICBvdXRbMTNdID0gLSh5MCAqIGV5ZXggKyB5MSAqIGV5ZXkgKyB5MiAqIGV5ZXopO1xuICBvdXRbMTRdID0gLSh6MCAqIGV5ZXggKyB6MSAqIGV5ZXkgKyB6MiAqIGV5ZXopO1xuICBvdXRbMTVdID0gMTtcblxuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIG1hdHJpeCB0aGF0IG1ha2VzIHNvbWV0aGluZyBsb29rIGF0IHNvbWV0aGluZyBlbHNlLlxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cbiAqIEBwYXJhbSB7dmVjM30gZXllIFBvc2l0aW9uIG9mIHRoZSB2aWV3ZXJcbiAqIEBwYXJhbSB7dmVjM30gY2VudGVyIFBvaW50IHRoZSB2aWV3ZXIgaXMgbG9va2luZyBhdFxuICogQHBhcmFtIHt2ZWMzfSB1cCB2ZWMzIHBvaW50aW5nIHVwXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0YXJnZXRUbyhvdXQsIGV5ZSwgdGFyZ2V0LCB1cCkge1xuICBsZXQgZXlleCA9IGV5ZVswXSxcbiAgICAgIGV5ZXkgPSBleWVbMV0sXG4gICAgICBleWV6ID0gZXllWzJdLFxuICAgICAgdXB4ID0gdXBbMF0sXG4gICAgICB1cHkgPSB1cFsxXSxcbiAgICAgIHVweiA9IHVwWzJdO1xuXG4gIGxldCB6MCA9IGV5ZXggLSB0YXJnZXRbMF0sXG4gICAgICB6MSA9IGV5ZXkgLSB0YXJnZXRbMV0sXG4gICAgICB6MiA9IGV5ZXogLSB0YXJnZXRbMl07XG5cbiAgbGV0IGxlbiA9IHowKnowICsgejEqejEgKyB6Mip6MjtcbiAgaWYgKGxlbiA+IDApIHtcbiAgICBsZW4gPSAxIC8gTWF0aC5zcXJ0KGxlbik7XG4gICAgejAgKj0gbGVuO1xuICAgIHoxICo9IGxlbjtcbiAgICB6MiAqPSBsZW47XG4gIH1cblxuICBsZXQgeDAgPSB1cHkgKiB6MiAtIHVweiAqIHoxLFxuICAgICAgeDEgPSB1cHogKiB6MCAtIHVweCAqIHoyLFxuICAgICAgeDIgPSB1cHggKiB6MSAtIHVweSAqIHowO1xuXG4gIG91dFswXSA9IHgwO1xuICBvdXRbMV0gPSB4MTtcbiAgb3V0WzJdID0geDI7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IHoxICogeDIgLSB6MiAqIHgxO1xuICBvdXRbNV0gPSB6MiAqIHgwIC0gejAgKiB4MjtcbiAgb3V0WzZdID0gejAgKiB4MSAtIHoxICogeDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IHowO1xuICBvdXRbOV0gPSB6MTtcbiAgb3V0WzEwXSA9IHoyO1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IGV5ZXg7XG4gIG91dFsxM10gPSBleWV5O1xuICBvdXRbMTRdID0gZXllejtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59O1xuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBtYXQ0XG4gKlxuICogQHBhcmFtIHttYXQ0fSBhIG1hdHJpeCB0byByZXByZXNlbnQgYXMgYSBzdHJpbmdcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgbWF0cml4XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHIoYSkge1xuICByZXR1cm4gJ21hdDQoJyArIGFbMF0gKyAnLCAnICsgYVsxXSArICcsICcgKyBhWzJdICsgJywgJyArIGFbM10gKyAnLCAnICtcbiAgICAgICAgICBhWzRdICsgJywgJyArIGFbNV0gKyAnLCAnICsgYVs2XSArICcsICcgKyBhWzddICsgJywgJyArXG4gICAgICAgICAgYVs4XSArICcsICcgKyBhWzldICsgJywgJyArIGFbMTBdICsgJywgJyArIGFbMTFdICsgJywgJyArXG4gICAgICAgICAgYVsxMl0gKyAnLCAnICsgYVsxM10gKyAnLCAnICsgYVsxNF0gKyAnLCAnICsgYVsxNV0gKyAnKSc7XG59XG5cbi8qKlxuICogUmV0dXJucyBGcm9iZW5pdXMgbm9ybSBvZiBhIG1hdDRcbiAqXG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byBjYWxjdWxhdGUgRnJvYmVuaXVzIG5vcm0gb2ZcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IEZyb2Jlbml1cyBub3JtXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9iKGEpIHtcbiAgcmV0dXJuKE1hdGguc3FydChNYXRoLnBvdyhhWzBdLCAyKSArIE1hdGgucG93KGFbMV0sIDIpICsgTWF0aC5wb3coYVsyXSwgMikgKyBNYXRoLnBvdyhhWzNdLCAyKSArIE1hdGgucG93KGFbNF0sIDIpICsgTWF0aC5wb3coYVs1XSwgMikgKyBNYXRoLnBvdyhhWzZdLCAyKSArIE1hdGgucG93KGFbN10sIDIpICsgTWF0aC5wb3coYVs4XSwgMikgKyBNYXRoLnBvdyhhWzldLCAyKSArIE1hdGgucG93KGFbMTBdLCAyKSArIE1hdGgucG93KGFbMTFdLCAyKSArIE1hdGgucG93KGFbMTJdLCAyKSArIE1hdGgucG93KGFbMTNdLCAyKSArIE1hdGgucG93KGFbMTRdLCAyKSArIE1hdGgucG93KGFbMTVdLCAyKSApKVxufVxuXG4vKipcbiAqIEFkZHMgdHdvIG1hdDQnc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7bWF0NH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSArIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gKyBiWzFdO1xuICBvdXRbMl0gPSBhWzJdICsgYlsyXTtcbiAgb3V0WzNdID0gYVszXSArIGJbM107XG4gIG91dFs0XSA9IGFbNF0gKyBiWzRdO1xuICBvdXRbNV0gPSBhWzVdICsgYls1XTtcbiAgb3V0WzZdID0gYVs2XSArIGJbNl07XG4gIG91dFs3XSA9IGFbN10gKyBiWzddO1xuICBvdXRbOF0gPSBhWzhdICsgYls4XTtcbiAgb3V0WzldID0gYVs5XSArIGJbOV07XG4gIG91dFsxMF0gPSBhWzEwXSArIGJbMTBdO1xuICBvdXRbMTFdID0gYVsxMV0gKyBiWzExXTtcbiAgb3V0WzEyXSA9IGFbMTJdICsgYlsxMl07XG4gIG91dFsxM10gPSBhWzEzXSArIGJbMTNdO1xuICBvdXRbMTRdID0gYVsxNF0gKyBiWzE0XTtcbiAgb3V0WzE1XSA9IGFbMTVdICsgYlsxNV07XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU3VidHJhY3RzIG1hdHJpeCBiIGZyb20gbWF0cml4IGFcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge21hdDR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAtIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gLSBiWzFdO1xuICBvdXRbMl0gPSBhWzJdIC0gYlsyXTtcbiAgb3V0WzNdID0gYVszXSAtIGJbM107XG4gIG91dFs0XSA9IGFbNF0gLSBiWzRdO1xuICBvdXRbNV0gPSBhWzVdIC0gYls1XTtcbiAgb3V0WzZdID0gYVs2XSAtIGJbNl07XG4gIG91dFs3XSA9IGFbN10gLSBiWzddO1xuICBvdXRbOF0gPSBhWzhdIC0gYls4XTtcbiAgb3V0WzldID0gYVs5XSAtIGJbOV07XG4gIG91dFsxMF0gPSBhWzEwXSAtIGJbMTBdO1xuICBvdXRbMTFdID0gYVsxMV0gLSBiWzExXTtcbiAgb3V0WzEyXSA9IGFbMTJdIC0gYlsxMl07XG4gIG91dFsxM10gPSBhWzEzXSAtIGJbMTNdO1xuICBvdXRbMTRdID0gYVsxNF0gLSBiWzE0XTtcbiAgb3V0WzE1XSA9IGFbMTVdIC0gYlsxNV07XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogTXVsdGlwbHkgZWFjaCBlbGVtZW50IG9mIHRoZSBtYXRyaXggYnkgYSBzY2FsYXIuXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgbWF0cml4IHRvIHNjYWxlXG4gKiBAcGFyYW0ge051bWJlcn0gYiBhbW91bnQgdG8gc2NhbGUgdGhlIG1hdHJpeCdzIGVsZW1lbnRzIGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseVNjYWxhcihvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAqIGI7XG4gIG91dFsxXSA9IGFbMV0gKiBiO1xuICBvdXRbMl0gPSBhWzJdICogYjtcbiAgb3V0WzNdID0gYVszXSAqIGI7XG4gIG91dFs0XSA9IGFbNF0gKiBiO1xuICBvdXRbNV0gPSBhWzVdICogYjtcbiAgb3V0WzZdID0gYVs2XSAqIGI7XG4gIG91dFs3XSA9IGFbN10gKiBiO1xuICBvdXRbOF0gPSBhWzhdICogYjtcbiAgb3V0WzldID0gYVs5XSAqIGI7XG4gIG91dFsxMF0gPSBhWzEwXSAqIGI7XG4gIG91dFsxMV0gPSBhWzExXSAqIGI7XG4gIG91dFsxMl0gPSBhWzEyXSAqIGI7XG4gIG91dFsxM10gPSBhWzEzXSAqIGI7XG4gIG91dFsxNF0gPSBhWzE0XSAqIGI7XG4gIG91dFsxNV0gPSBhWzE1XSAqIGI7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQWRkcyB0d28gbWF0NCdzIGFmdGVyIG11bHRpcGx5aW5nIGVhY2ggZWxlbWVudCBvZiB0aGUgc2Vjb25kIG9wZXJhbmQgYnkgYSBzY2FsYXIgdmFsdWUuXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHttYXQ0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxlIHRoZSBhbW91bnQgdG8gc2NhbGUgYidzIGVsZW1lbnRzIGJ5IGJlZm9yZSBhZGRpbmdcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5U2NhbGFyQW5kQWRkKG91dCwgYSwgYiwgc2NhbGUpIHtcbiAgb3V0WzBdID0gYVswXSArIChiWzBdICogc2NhbGUpO1xuICBvdXRbMV0gPSBhWzFdICsgKGJbMV0gKiBzY2FsZSk7XG4gIG91dFsyXSA9IGFbMl0gKyAoYlsyXSAqIHNjYWxlKTtcbiAgb3V0WzNdID0gYVszXSArIChiWzNdICogc2NhbGUpO1xuICBvdXRbNF0gPSBhWzRdICsgKGJbNF0gKiBzY2FsZSk7XG4gIG91dFs1XSA9IGFbNV0gKyAoYls1XSAqIHNjYWxlKTtcbiAgb3V0WzZdID0gYVs2XSArIChiWzZdICogc2NhbGUpO1xuICBvdXRbN10gPSBhWzddICsgKGJbN10gKiBzY2FsZSk7XG4gIG91dFs4XSA9IGFbOF0gKyAoYls4XSAqIHNjYWxlKTtcbiAgb3V0WzldID0gYVs5XSArIChiWzldICogc2NhbGUpO1xuICBvdXRbMTBdID0gYVsxMF0gKyAoYlsxMF0gKiBzY2FsZSk7XG4gIG91dFsxMV0gPSBhWzExXSArIChiWzExXSAqIHNjYWxlKTtcbiAgb3V0WzEyXSA9IGFbMTJdICsgKGJbMTJdICogc2NhbGUpO1xuICBvdXRbMTNdID0gYVsxM10gKyAoYlsxM10gKiBzY2FsZSk7XG4gIG91dFsxNF0gPSBhWzE0XSArIChiWzE0XSAqIHNjYWxlKTtcbiAgb3V0WzE1XSA9IGFbMTVdICsgKGJbMTVdICogc2NhbGUpO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIG1hdHJpY2VzIGhhdmUgZXhhY3RseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbiAod2hlbiBjb21wYXJlZCB3aXRoID09PSlcbiAqXG4gKiBAcGFyYW0ge21hdDR9IGEgVGhlIGZpcnN0IG1hdHJpeC5cbiAqIEBwYXJhbSB7bWF0NH0gYiBUaGUgc2Vjb25kIG1hdHJpeC5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSBtYXRyaWNlcyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4YWN0RXF1YWxzKGEsIGIpIHtcbiAgcmV0dXJuIGFbMF0gPT09IGJbMF0gJiYgYVsxXSA9PT0gYlsxXSAmJiBhWzJdID09PSBiWzJdICYmIGFbM10gPT09IGJbM10gJiZcbiAgICAgICAgIGFbNF0gPT09IGJbNF0gJiYgYVs1XSA9PT0gYls1XSAmJiBhWzZdID09PSBiWzZdICYmIGFbN10gPT09IGJbN10gJiZcbiAgICAgICAgIGFbOF0gPT09IGJbOF0gJiYgYVs5XSA9PT0gYls5XSAmJiBhWzEwXSA9PT0gYlsxMF0gJiYgYVsxMV0gPT09IGJbMTFdICYmXG4gICAgICAgICBhWzEyXSA9PT0gYlsxMl0gJiYgYVsxM10gPT09IGJbMTNdICYmIGFbMTRdID09PSBiWzE0XSAmJiBhWzE1XSA9PT0gYlsxNV07XG59XG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgbWF0cmljZXMgaGF2ZSBhcHByb3hpbWF0ZWx5IHRoZSBzYW1lIGVsZW1lbnRzIGluIHRoZSBzYW1lIHBvc2l0aW9uLlxuICpcbiAqIEBwYXJhbSB7bWF0NH0gYSBUaGUgZmlyc3QgbWF0cml4LlxuICogQHBhcmFtIHttYXQ0fSBiIFRoZSBzZWNvbmQgbWF0cml4LlxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIG1hdHJpY2VzIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxzKGEsIGIpIHtcbiAgbGV0IGEwICA9IGFbMF0sICBhMSAgPSBhWzFdLCAgYTIgID0gYVsyXSwgIGEzICA9IGFbM107XG4gIGxldCBhNCAgPSBhWzRdLCAgYTUgID0gYVs1XSwgIGE2ICA9IGFbNl0sICBhNyAgPSBhWzddO1xuICBsZXQgYTggID0gYVs4XSwgIGE5ICA9IGFbOV0sICBhMTAgPSBhWzEwXSwgYTExID0gYVsxMV07XG4gIGxldCBhMTIgPSBhWzEyXSwgYTEzID0gYVsxM10sIGExNCA9IGFbMTRdLCBhMTUgPSBhWzE1XTtcblxuICBsZXQgYjAgID0gYlswXSwgIGIxICA9IGJbMV0sICBiMiAgPSBiWzJdLCAgYjMgID0gYlszXTtcbiAgbGV0IGI0ICA9IGJbNF0sICBiNSAgPSBiWzVdLCAgYjYgID0gYls2XSwgIGI3ICA9IGJbN107XG4gIGxldCBiOCAgPSBiWzhdLCAgYjkgID0gYls5XSwgIGIxMCA9IGJbMTBdLCBiMTEgPSBiWzExXTtcbiAgbGV0IGIxMiA9IGJbMTJdLCBiMTMgPSBiWzEzXSwgYjE0ID0gYlsxNF0sIGIxNSA9IGJbMTVdO1xuXG4gIHJldHVybiAoTWF0aC5hYnMoYTAgLSBiMCkgPD0gZ2xNYXRyaXguRVBTSUxPTipNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEwKSwgTWF0aC5hYnMoYjApKSAmJlxuICAgICAgICAgIE1hdGguYWJzKGExIC0gYjEpIDw9IGdsTWF0cml4LkVQU0lMT04qTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMSksIE1hdGguYWJzKGIxKSkgJiZcbiAgICAgICAgICBNYXRoLmFicyhhMiAtIGIyKSA8PSBnbE1hdHJpeC5FUFNJTE9OKk1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTIpLCBNYXRoLmFicyhiMikpICYmXG4gICAgICAgICAgTWF0aC5hYnMoYTMgLSBiMykgPD0gZ2xNYXRyaXguRVBTSUxPTipNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEzKSwgTWF0aC5hYnMoYjMpKSAmJlxuICAgICAgICAgIE1hdGguYWJzKGE0IC0gYjQpIDw9IGdsTWF0cml4LkVQU0lMT04qTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhNCksIE1hdGguYWJzKGI0KSkgJiZcbiAgICAgICAgICBNYXRoLmFicyhhNSAtIGI1KSA8PSBnbE1hdHJpeC5FUFNJTE9OKk1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTUpLCBNYXRoLmFicyhiNSkpICYmXG4gICAgICAgICAgTWF0aC5hYnMoYTYgLSBiNikgPD0gZ2xNYXRyaXguRVBTSUxPTipNYXRoLm1heCgxLjAsIE1hdGguYWJzKGE2KSwgTWF0aC5hYnMoYjYpKSAmJlxuICAgICAgICAgIE1hdGguYWJzKGE3IC0gYjcpIDw9IGdsTWF0cml4LkVQU0lMT04qTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhNyksIE1hdGguYWJzKGI3KSkgJiZcbiAgICAgICAgICBNYXRoLmFicyhhOCAtIGI4KSA8PSBnbE1hdHJpeC5FUFNJTE9OKk1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTgpLCBNYXRoLmFicyhiOCkpICYmXG4gICAgICAgICAgTWF0aC5hYnMoYTkgLSBiOSkgPD0gZ2xNYXRyaXguRVBTSUxPTipNYXRoLm1heCgxLjAsIE1hdGguYWJzKGE5KSwgTWF0aC5hYnMoYjkpKSAmJlxuICAgICAgICAgIE1hdGguYWJzKGExMCAtIGIxMCkgPD0gZ2xNYXRyaXguRVBTSUxPTipNYXRoLm1heCgxLjAsIE1hdGguYWJzKGExMCksIE1hdGguYWJzKGIxMCkpICYmXG4gICAgICAgICAgTWF0aC5hYnMoYTExIC0gYjExKSA8PSBnbE1hdHJpeC5FUFNJTE9OKk1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTExKSwgTWF0aC5hYnMoYjExKSkgJiZcbiAgICAgICAgICBNYXRoLmFicyhhMTIgLSBiMTIpIDw9IGdsTWF0cml4LkVQU0lMT04qTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMTIpLCBNYXRoLmFicyhiMTIpKSAmJlxuICAgICAgICAgIE1hdGguYWJzKGExMyAtIGIxMykgPD0gZ2xNYXRyaXguRVBTSUxPTipNYXRoLm1heCgxLjAsIE1hdGguYWJzKGExMyksIE1hdGguYWJzKGIxMykpICYmXG4gICAgICAgICAgTWF0aC5hYnMoYTE0IC0gYjE0KSA8PSBnbE1hdHJpeC5FUFNJTE9OKk1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTE0KSwgTWF0aC5hYnMoYjE0KSkgJiZcbiAgICAgICAgICBNYXRoLmFicyhhMTUgLSBiMTUpIDw9IGdsTWF0cml4LkVQU0lMT04qTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMTUpLCBNYXRoLmFicyhiMTUpKSk7XG59XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayBtYXQ0Lm11bHRpcGx5fVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBtdWwgPSBtdWx0aXBseTtcblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIG1hdDQuc3VidHJhY3R9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IHN1YiA9IHN1YnRyYWN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2wtbWF0cml4L3NyYy9nbC1tYXRyaXgvbWF0NC5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQ29weXJpZ2h0IChjKSAyMDE1LCBCcmFuZG9uIEpvbmVzLCBDb2xpbiBNYWNLZW56aWUgSVYuXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cblRIRSBTT0ZUV0FSRS4gKi9cblxuaW1wb3J0ICogYXMgZ2xNYXRyaXggZnJvbSBcIi4vY29tbW9uXCJcbmltcG9ydCAqIGFzIG1hdDMgZnJvbSBcIi4vbWF0M1wiXG5pbXBvcnQgKiBhcyB2ZWMzIGZyb20gXCIuL3ZlYzNcIlxuaW1wb3J0ICogYXMgdmVjNCBmcm9tIFwiLi92ZWM0XCJcblxuLyoqXG4gKiBRdWF0ZXJuaW9uXG4gKiBAbW9kdWxlIHF1YXRcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgaWRlbnRpdHkgcXVhdFxuICpcbiAqIEByZXR1cm5zIHtxdWF0fSBhIG5ldyBxdWF0ZXJuaW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gIGxldCBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSg0KTtcbiAgb3V0WzBdID0gMDtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTZXQgYSBxdWF0IHRvIHRoZSBpZGVudGl0eSBxdWF0ZXJuaW9uXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eShvdXQpIHtcbiAgb3V0WzBdID0gMDtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTZXRzIGEgcXVhdCBmcm9tIHRoZSBnaXZlbiBhbmdsZSBhbmQgcm90YXRpb24gYXhpcyxcbiAqIHRoZW4gcmV0dXJucyBpdC5cbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7dmVjM30gYXhpcyB0aGUgYXhpcyBhcm91bmQgd2hpY2ggdG8gcm90YXRlXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSBpbiByYWRpYW5zXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKiovXG5leHBvcnQgZnVuY3Rpb24gc2V0QXhpc0FuZ2xlKG91dCwgYXhpcywgcmFkKSB7XG4gIHJhZCA9IHJhZCAqIDAuNTtcbiAgbGV0IHMgPSBNYXRoLnNpbihyYWQpO1xuICBvdXRbMF0gPSBzICogYXhpc1swXTtcbiAgb3V0WzFdID0gcyAqIGF4aXNbMV07XG4gIG91dFsyXSA9IHMgKiBheGlzWzJdO1xuICBvdXRbM10gPSBNYXRoLmNvcyhyYWQpO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIHJvdGF0aW9uIGF4aXMgYW5kIGFuZ2xlIGZvciBhIGdpdmVuXG4gKiAgcXVhdGVybmlvbi4gSWYgYSBxdWF0ZXJuaW9uIGlzIGNyZWF0ZWQgd2l0aFxuICogIHNldEF4aXNBbmdsZSwgdGhpcyBtZXRob2Qgd2lsbCByZXR1cm4gdGhlIHNhbWVcbiAqICB2YWx1ZXMgYXMgcHJvdmlkaWVkIGluIHRoZSBvcmlnaW5hbCBwYXJhbWV0ZXIgbGlzdFxuICogIE9SIGZ1bmN0aW9uYWxseSBlcXVpdmFsZW50IHZhbHVlcy5cbiAqIEV4YW1wbGU6IFRoZSBxdWF0ZXJuaW9uIGZvcm1lZCBieSBheGlzIFswLCAwLCAxXSBhbmRcbiAqICBhbmdsZSAtOTAgaXMgdGhlIHNhbWUgYXMgdGhlIHF1YXRlcm5pb24gZm9ybWVkIGJ5XG4gKiAgWzAsIDAsIDFdIGFuZCAyNzAuIFRoaXMgbWV0aG9kIGZhdm9ycyB0aGUgbGF0dGVyLlxuICogQHBhcmFtICB7dmVjM30gb3V0X2F4aXMgIFZlY3RvciByZWNlaXZpbmcgdGhlIGF4aXMgb2Ygcm90YXRpb25cbiAqIEBwYXJhbSAge3F1YXR9IHEgICAgIFF1YXRlcm5pb24gdG8gYmUgZGVjb21wb3NlZFxuICogQHJldHVybiB7TnVtYmVyfSAgICAgQW5nbGUsIGluIHJhZGlhbnMsIG9mIHRoZSByb3RhdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXhpc0FuZ2xlKG91dF9heGlzLCBxKSB7XG4gIGxldCByYWQgPSBNYXRoLmFjb3MocVszXSkgKiAyLjA7XG4gIGxldCBzID0gTWF0aC5zaW4ocmFkIC8gMi4wKTtcbiAgaWYgKHMgIT0gMC4wKSB7XG4gICAgb3V0X2F4aXNbMF0gPSBxWzBdIC8gcztcbiAgICBvdXRfYXhpc1sxXSA9IHFbMV0gLyBzO1xuICAgIG91dF9heGlzWzJdID0gcVsyXSAvIHM7XG4gIH0gZWxzZSB7XG4gICAgLy8gSWYgcyBpcyB6ZXJvLCByZXR1cm4gYW55IGF4aXMgKG5vIHJvdGF0aW9uIC0gYXhpcyBkb2VzIG5vdCBtYXR0ZXIpXG4gICAgb3V0X2F4aXNbMF0gPSAxO1xuICAgIG91dF9heGlzWzFdID0gMDtcbiAgICBvdXRfYXhpc1syXSA9IDA7XG4gIH1cbiAgcmV0dXJuIHJhZDtcbn1cblxuLyoqXG4gKiBNdWx0aXBsaWVzIHR3byBxdWF0J3NcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7cXVhdH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtxdWF0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3F1YXR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkob3V0LCBhLCBiKSB7XG4gIGxldCBheCA9IGFbMF0sIGF5ID0gYVsxXSwgYXogPSBhWzJdLCBhdyA9IGFbM107XG4gIGxldCBieCA9IGJbMF0sIGJ5ID0gYlsxXSwgYnogPSBiWzJdLCBidyA9IGJbM107XG5cbiAgb3V0WzBdID0gYXggKiBidyArIGF3ICogYnggKyBheSAqIGJ6IC0gYXogKiBieTtcbiAgb3V0WzFdID0gYXkgKiBidyArIGF3ICogYnkgKyBheiAqIGJ4IC0gYXggKiBiejtcbiAgb3V0WzJdID0gYXogKiBidyArIGF3ICogYnogKyBheCAqIGJ5IC0gYXkgKiBieDtcbiAgb3V0WzNdID0gYXcgKiBidyAtIGF4ICogYnggLSBheSAqIGJ5IC0gYXogKiBiejtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSb3RhdGVzIGEgcXVhdGVybmlvbiBieSB0aGUgZ2l2ZW4gYW5nbGUgYWJvdXQgdGhlIFggYXhpc1xuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHF1YXQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7cXVhdH0gYSBxdWF0IHRvIHJvdGF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IHJhZCBhbmdsZSAoaW4gcmFkaWFucykgdG8gcm90YXRlXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVYKG91dCwgYSwgcmFkKSB7XG4gIHJhZCAqPSAwLjU7XG5cbiAgbGV0IGF4ID0gYVswXSwgYXkgPSBhWzFdLCBheiA9IGFbMl0sIGF3ID0gYVszXTtcbiAgbGV0IGJ4ID0gTWF0aC5zaW4ocmFkKSwgYncgPSBNYXRoLmNvcyhyYWQpO1xuXG4gIG91dFswXSA9IGF4ICogYncgKyBhdyAqIGJ4O1xuICBvdXRbMV0gPSBheSAqIGJ3ICsgYXogKiBieDtcbiAgb3V0WzJdID0gYXogKiBidyAtIGF5ICogYng7XG4gIG91dFszXSA9IGF3ICogYncgLSBheCAqIGJ4O1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJvdGF0ZXMgYSBxdWF0ZXJuaW9uIGJ5IHRoZSBnaXZlbiBhbmdsZSBhYm91dCB0aGUgWSBheGlzXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgcXVhdCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtxdWF0fSBhIHF1YXQgdG8gcm90YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkIGFuZ2xlIChpbiByYWRpYW5zKSB0byByb3RhdGVcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVkob3V0LCBhLCByYWQpIHtcbiAgcmFkICo9IDAuNTtcblxuICBsZXQgYXggPSBhWzBdLCBheSA9IGFbMV0sIGF6ID0gYVsyXSwgYXcgPSBhWzNdO1xuICBsZXQgYnkgPSBNYXRoLnNpbihyYWQpLCBidyA9IE1hdGguY29zKHJhZCk7XG5cbiAgb3V0WzBdID0gYXggKiBidyAtIGF6ICogYnk7XG4gIG91dFsxXSA9IGF5ICogYncgKyBhdyAqIGJ5O1xuICBvdXRbMl0gPSBheiAqIGJ3ICsgYXggKiBieTtcbiAgb3V0WzNdID0gYXcgKiBidyAtIGF5ICogYnk7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUm90YXRlcyBhIHF1YXRlcm5pb24gYnkgdGhlIGdpdmVuIGFuZ2xlIGFib3V0IHRoZSBaIGF4aXNcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCBxdWF0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge3F1YXR9IGEgcXVhdCB0byByb3RhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSByYWQgYW5nbGUgKGluIHJhZGlhbnMpIHRvIHJvdGF0ZVxuICogQHJldHVybnMge3F1YXR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWihvdXQsIGEsIHJhZCkge1xuICByYWQgKj0gMC41O1xuXG4gIGxldCBheCA9IGFbMF0sIGF5ID0gYVsxXSwgYXogPSBhWzJdLCBhdyA9IGFbM107XG4gIGxldCBieiA9IE1hdGguc2luKHJhZCksIGJ3ID0gTWF0aC5jb3MocmFkKTtcblxuICBvdXRbMF0gPSBheCAqIGJ3ICsgYXkgKiBiejtcbiAgb3V0WzFdID0gYXkgKiBidyAtIGF4ICogYno7XG4gIG91dFsyXSA9IGF6ICogYncgKyBhdyAqIGJ6O1xuICBvdXRbM10gPSBhdyAqIGJ3IC0gYXogKiBiejtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBXIGNvbXBvbmVudCBvZiBhIHF1YXQgZnJvbSB0aGUgWCwgWSwgYW5kIFogY29tcG9uZW50cy5cbiAqIEFzc3VtZXMgdGhhdCBxdWF0ZXJuaW9uIGlzIDEgdW5pdCBpbiBsZW5ndGguXG4gKiBBbnkgZXhpc3RpbmcgVyBjb21wb25lbnQgd2lsbCBiZSBpZ25vcmVkLlxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHtxdWF0fSBhIHF1YXQgdG8gY2FsY3VsYXRlIFcgY29tcG9uZW50IG9mXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVXKG91dCwgYSkge1xuICBsZXQgeCA9IGFbMF0sIHkgPSBhWzFdLCB6ID0gYVsyXTtcblxuICBvdXRbMF0gPSB4O1xuICBvdXRbMV0gPSB5O1xuICBvdXRbMl0gPSB6O1xuICBvdXRbM10gPSBNYXRoLnNxcnQoTWF0aC5hYnMoMS4wIC0geCAqIHggLSB5ICogeSAtIHogKiB6KSk7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUGVyZm9ybXMgYSBzcGhlcmljYWwgbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiB0d28gcXVhdFxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHtxdWF0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3F1YXR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gdCBpbnRlcnBvbGF0aW9uIGFtb3VudCBiZXR3ZWVuIHRoZSB0d28gaW5wdXRzXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzbGVycChvdXQsIGEsIGIsIHQpIHtcbiAgLy8gYmVuY2htYXJrczpcbiAgLy8gICAgaHR0cDovL2pzcGVyZi5jb20vcXVhdGVybmlvbi1zbGVycC1pbXBsZW1lbnRhdGlvbnNcbiAgbGV0IGF4ID0gYVswXSwgYXkgPSBhWzFdLCBheiA9IGFbMl0sIGF3ID0gYVszXTtcbiAgbGV0IGJ4ID0gYlswXSwgYnkgPSBiWzFdLCBieiA9IGJbMl0sIGJ3ID0gYlszXTtcblxuICBsZXQgb21lZ2EsIGNvc29tLCBzaW5vbSwgc2NhbGUwLCBzY2FsZTE7XG5cbiAgLy8gY2FsYyBjb3NpbmVcbiAgY29zb20gPSBheCAqIGJ4ICsgYXkgKiBieSArIGF6ICogYnogKyBhdyAqIGJ3O1xuICAvLyBhZGp1c3Qgc2lnbnMgKGlmIG5lY2Vzc2FyeSlcbiAgaWYgKCBjb3NvbSA8IDAuMCApIHtcbiAgICBjb3NvbSA9IC1jb3NvbTtcbiAgICBieCA9IC0gYng7XG4gICAgYnkgPSAtIGJ5O1xuICAgIGJ6ID0gLSBiejtcbiAgICBidyA9IC0gYnc7XG4gIH1cbiAgLy8gY2FsY3VsYXRlIGNvZWZmaWNpZW50c1xuICBpZiAoICgxLjAgLSBjb3NvbSkgPiAwLjAwMDAwMSApIHtcbiAgICAvLyBzdGFuZGFyZCBjYXNlIChzbGVycClcbiAgICBvbWVnYSAgPSBNYXRoLmFjb3MoY29zb20pO1xuICAgIHNpbm9tICA9IE1hdGguc2luKG9tZWdhKTtcbiAgICBzY2FsZTAgPSBNYXRoLnNpbigoMS4wIC0gdCkgKiBvbWVnYSkgLyBzaW5vbTtcbiAgICBzY2FsZTEgPSBNYXRoLnNpbih0ICogb21lZ2EpIC8gc2lub207XG4gIH0gZWxzZSB7XG4gICAgLy8gXCJmcm9tXCIgYW5kIFwidG9cIiBxdWF0ZXJuaW9ucyBhcmUgdmVyeSBjbG9zZVxuICAgIC8vICAuLi4gc28gd2UgY2FuIGRvIGEgbGluZWFyIGludGVycG9sYXRpb25cbiAgICBzY2FsZTAgPSAxLjAgLSB0O1xuICAgIHNjYWxlMSA9IHQ7XG4gIH1cbiAgLy8gY2FsY3VsYXRlIGZpbmFsIHZhbHVlc1xuICBvdXRbMF0gPSBzY2FsZTAgKiBheCArIHNjYWxlMSAqIGJ4O1xuICBvdXRbMV0gPSBzY2FsZTAgKiBheSArIHNjYWxlMSAqIGJ5O1xuICBvdXRbMl0gPSBzY2FsZTAgKiBheiArIHNjYWxlMSAqIGJ6O1xuICBvdXRbM10gPSBzY2FsZTAgKiBhdyArIHNjYWxlMSAqIGJ3O1xuXG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgaW52ZXJzZSBvZiBhIHF1YXRcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7cXVhdH0gYSBxdWF0IHRvIGNhbGN1bGF0ZSBpbnZlcnNlIG9mXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQob3V0LCBhKSB7XG4gIGxldCBhMCA9IGFbMF0sIGExID0gYVsxXSwgYTIgPSBhWzJdLCBhMyA9IGFbM107XG4gIGxldCBkb3QgPSBhMCphMCArIGExKmExICsgYTIqYTIgKyBhMyphMztcbiAgbGV0IGludkRvdCA9IGRvdCA/IDEuMC9kb3QgOiAwO1xuXG4gIC8vIFRPRE86IFdvdWxkIGJlIGZhc3RlciB0byByZXR1cm4gWzAsMCwwLDBdIGltbWVkaWF0ZWx5IGlmIGRvdCA9PSAwXG5cbiAgb3V0WzBdID0gLWEwKmludkRvdDtcbiAgb3V0WzFdID0gLWExKmludkRvdDtcbiAgb3V0WzJdID0gLWEyKmludkRvdDtcbiAgb3V0WzNdID0gYTMqaW52RG90O1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGNvbmp1Z2F0ZSBvZiBhIHF1YXRcbiAqIElmIHRoZSBxdWF0ZXJuaW9uIGlzIG5vcm1hbGl6ZWQsIHRoaXMgZnVuY3Rpb24gaXMgZmFzdGVyIHRoYW4gcXVhdC5pbnZlcnNlIGFuZCBwcm9kdWNlcyB0aGUgc2FtZSByZXN1bHQuXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge3F1YXR9IGEgcXVhdCB0byBjYWxjdWxhdGUgY29uanVnYXRlIG9mXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25qdWdhdGUob3V0LCBhKSB7XG4gIG91dFswXSA9IC1hWzBdO1xuICBvdXRbMV0gPSAtYVsxXTtcbiAgb3V0WzJdID0gLWFbMl07XG4gIG91dFszXSA9IGFbM107XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHF1YXRlcm5pb24gZnJvbSB0aGUgZ2l2ZW4gM3gzIHJvdGF0aW9uIG1hdHJpeC5cbiAqXG4gKiBOT1RFOiBUaGUgcmVzdWx0YW50IHF1YXRlcm5pb24gaXMgbm90IG5vcm1hbGl6ZWQsIHNvIHlvdSBzaG91bGQgYmUgc3VyZVxuICogdG8gcmVub3JtYWxpemUgdGhlIHF1YXRlcm5pb24geW91cnNlbGYgd2hlcmUgbmVjZXNzYXJ5LlxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHttYXQzfSBtIHJvdGF0aW9uIG1hdHJpeFxuICogQHJldHVybnMge3F1YXR9IG91dFxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tTWF0MyhvdXQsIG0pIHtcbiAgLy8gQWxnb3JpdGhtIGluIEtlbiBTaG9lbWFrZSdzIGFydGljbGUgaW4gMTk4NyBTSUdHUkFQSCBjb3Vyc2Ugbm90ZXNcbiAgLy8gYXJ0aWNsZSBcIlF1YXRlcm5pb24gQ2FsY3VsdXMgYW5kIEZhc3QgQW5pbWF0aW9uXCIuXG4gIGxldCBmVHJhY2UgPSBtWzBdICsgbVs0XSArIG1bOF07XG4gIGxldCBmUm9vdDtcblxuICBpZiAoIGZUcmFjZSA+IDAuMCApIHtcbiAgICAvLyB8d3wgPiAxLzIsIG1heSBhcyB3ZWxsIGNob29zZSB3ID4gMS8yXG4gICAgZlJvb3QgPSBNYXRoLnNxcnQoZlRyYWNlICsgMS4wKTsgIC8vIDJ3XG4gICAgb3V0WzNdID0gMC41ICogZlJvb3Q7XG4gICAgZlJvb3QgPSAwLjUvZlJvb3Q7ICAvLyAxLyg0dylcbiAgICBvdXRbMF0gPSAobVs1XS1tWzddKSpmUm9vdDtcbiAgICBvdXRbMV0gPSAobVs2XS1tWzJdKSpmUm9vdDtcbiAgICBvdXRbMl0gPSAobVsxXS1tWzNdKSpmUm9vdDtcbiAgfSBlbHNlIHtcbiAgICAvLyB8d3wgPD0gMS8yXG4gICAgbGV0IGkgPSAwO1xuICAgIGlmICggbVs0XSA+IG1bMF0gKVxuICAgICAgaSA9IDE7XG4gICAgaWYgKCBtWzhdID4gbVtpKjMraV0gKVxuICAgICAgaSA9IDI7XG4gICAgbGV0IGogPSAoaSsxKSUzO1xuICAgIGxldCBrID0gKGkrMiklMztcblxuICAgIGZSb290ID0gTWF0aC5zcXJ0KG1baSozK2ldLW1baiozK2pdLW1bayozK2tdICsgMS4wKTtcbiAgICBvdXRbaV0gPSAwLjUgKiBmUm9vdDtcbiAgICBmUm9vdCA9IDAuNSAvIGZSb290O1xuICAgIG91dFszXSA9IChtW2oqMytrXSAtIG1bayozK2pdKSAqIGZSb290O1xuICAgIG91dFtqXSA9IChtW2oqMytpXSArIG1baSozK2pdKSAqIGZSb290O1xuICAgIG91dFtrXSA9IChtW2sqMytpXSArIG1baSozK2tdKSAqIGZSb290O1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgcXVhdGVybmlvbiBmcm9tIHRoZSBnaXZlbiBldWxlciBhbmdsZSB4LCB5LCB6LlxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHt4fSBBbmdsZSB0byByb3RhdGUgYXJvdW5kIFggYXhpcyBpbiBkZWdyZWVzLlxuICogQHBhcmFtIHt5fSBBbmdsZSB0byByb3RhdGUgYXJvdW5kIFkgYXhpcyBpbiBkZWdyZWVzLlxuICogQHBhcmFtIHt6fSBBbmdsZSB0byByb3RhdGUgYXJvdW5kIFogYXhpcyBpbiBkZWdyZWVzLlxuICogQHJldHVybnMge3F1YXR9IG91dFxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tRXVsZXIob3V0LCB4LCB5LCB6KSB7XG4gICAgbGV0IGhhbGZUb1JhZCA9IDAuNSAqIE1hdGguUEkgLyAxODAuMDtcbiAgICB4ICo9IGhhbGZUb1JhZDtcbiAgICB5ICo9IGhhbGZUb1JhZDtcbiAgICB6ICo9IGhhbGZUb1JhZDtcblxuICAgIGxldCBzeCA9IE1hdGguc2luKHgpO1xuICAgIGxldCBjeCA9IE1hdGguY29zKHgpO1xuICAgIGxldCBzeSA9IE1hdGguc2luKHkpO1xuICAgIGxldCBjeSA9IE1hdGguY29zKHkpO1xuICAgIGxldCBzeiA9IE1hdGguc2luKHopO1xuICAgIGxldCBjeiA9IE1hdGguY29zKHopO1xuXG4gICAgb3V0WzBdID0gc3ggKiBjeSAqIGN6IC0gY3ggKiBzeSAqIHN6O1xuICAgIG91dFsxXSA9IGN4ICogc3kgKiBjeiArIHN4ICogY3kgKiBzejtcbiAgICBvdXRbMl0gPSBjeCAqIGN5ICogc3ogLSBzeCAqIHN5ICogY3o7XG4gICAgb3V0WzNdID0gY3ggKiBjeSAqIGN6ICsgc3ggKiBzeSAqIHN6O1xuXG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgcXVhdGVuaW9uXG4gKlxuICogQHBhcmFtIHtxdWF0fSBhIHZlY3RvciB0byByZXByZXNlbnQgYXMgYSBzdHJpbmdcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHIoYSkge1xuICByZXR1cm4gJ3F1YXQoJyArIGFbMF0gKyAnLCAnICsgYVsxXSArICcsICcgKyBhWzJdICsgJywgJyArIGFbM10gKyAnKSc7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBxdWF0IGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgcXVhdGVybmlvblxuICpcbiAqIEBwYXJhbSB7cXVhdH0gYSBxdWF0ZXJuaW9uIHRvIGNsb25lXG4gKiBAcmV0dXJucyB7cXVhdH0gYSBuZXcgcXVhdGVybmlvblxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBjbG9uZSA9IHZlYzQuY2xvbmU7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBxdWF0IGluaXRpYWxpemVkIHdpdGggdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFggY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geSBZIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHogWiBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB3IFcgY29tcG9uZW50XG4gKiBAcmV0dXJucyB7cXVhdH0gYSBuZXcgcXVhdGVybmlvblxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBmcm9tVmFsdWVzID0gdmVjNC5mcm9tVmFsdWVzO1xuXG4vKipcbiAqIENvcHkgdGhlIHZhbHVlcyBmcm9tIG9uZSBxdWF0IHRvIGFub3RoZXJcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7cXVhdH0gYSB0aGUgc291cmNlIHF1YXRlcm5pb25cbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3QgY29weSA9IHZlYzQuY29weTtcblxuLyoqXG4gKiBTZXQgdGhlIGNvbXBvbmVudHMgb2YgYSBxdWF0IHRvIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFggY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geSBZIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHogWiBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB3IFcgY29tcG9uZW50XG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IHNldCA9IHZlYzQuc2V0O1xuXG4vKipcbiAqIEFkZHMgdHdvIHF1YXQnc1xuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHtxdWF0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3F1YXR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IGFkZCA9IHZlYzQuYWRkO1xuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgcXVhdC5tdWx0aXBseX1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3QgbXVsID0gbXVsdGlwbHk7XG5cbi8qKlxuICogU2NhbGVzIGEgcXVhdCBieSBhIHNjYWxhciBudW1iZXJcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtxdWF0fSBhIHRoZSB2ZWN0b3IgdG8gc2NhbGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBiIGFtb3VudCB0byBzY2FsZSB0aGUgdmVjdG9yIGJ5XG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IHNjYWxlID0gdmVjNC5zY2FsZTtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBkb3QgcHJvZHVjdCBvZiB0d28gcXVhdCdzXG4gKlxuICogQHBhcmFtIHtxdWF0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3F1YXR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkb3QgcHJvZHVjdCBvZiBhIGFuZCBiXG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IGRvdCA9IHZlYzQuZG90O1xuXG4vKipcbiAqIFBlcmZvcm1zIGEgbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiB0d28gcXVhdCdzXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge3F1YXR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7cXVhdH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSB0IGludGVycG9sYXRpb24gYW1vdW50IGJldHdlZW4gdGhlIHR3byBpbnB1dHNcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3QgbGVycCA9IHZlYzQubGVycDtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBsZW5ndGggb2YgYSBxdWF0XG4gKlxuICogQHBhcmFtIHtxdWF0fSBhIHZlY3RvciB0byBjYWxjdWxhdGUgbGVuZ3RoIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBsZW5ndGggb2YgYVxuICovXG5leHBvcnQgY29uc3QgbGVuZ3RoID0gdmVjNC5sZW5ndGg7XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayBxdWF0Lmxlbmd0aH1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3QgbGVuID0gbGVuZ3RoO1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgbGVuZ3RoIG9mIGEgcXVhdFxuICpcbiAqIEBwYXJhbSB7cXVhdH0gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIHNxdWFyZWQgbGVuZ3RoIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGxlbmd0aCBvZiBhXG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IHNxdWFyZWRMZW5ndGggPSB2ZWM0LnNxdWFyZWRMZW5ndGg7XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayBxdWF0LnNxdWFyZWRMZW5ndGh9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IHNxckxlbiA9IHNxdWFyZWRMZW5ndGg7XG5cbi8qKlxuICogTm9ybWFsaXplIGEgcXVhdFxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHtxdWF0fSBhIHF1YXRlcm5pb24gdG8gbm9ybWFsaXplXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZSA9IHZlYzQubm9ybWFsaXplO1xuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHF1YXRlcm5pb25zIGhhdmUgZXhhY3RseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbiAod2hlbiBjb21wYXJlZCB3aXRoID09PSlcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IGEgVGhlIGZpcnN0IHF1YXRlcm5pb24uXG4gKiBAcGFyYW0ge3F1YXR9IGIgVGhlIHNlY29uZCBxdWF0ZXJuaW9uLlxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIHZlY3RvcnMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBjb25zdCBleGFjdEVxdWFscyA9IHZlYzQuZXhhY3RFcXVhbHM7XG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgcXVhdGVybmlvbnMgaGF2ZSBhcHByb3hpbWF0ZWx5IHRoZSBzYW1lIGVsZW1lbnRzIGluIHRoZSBzYW1lIHBvc2l0aW9uLlxuICpcbiAqIEBwYXJhbSB7cXVhdH0gYSBUaGUgZmlyc3QgdmVjdG9yLlxuICogQHBhcmFtIHtxdWF0fSBiIFRoZSBzZWNvbmQgdmVjdG9yLlxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIHZlY3RvcnMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBjb25zdCBlcXVhbHMgPSB2ZWM0LmVxdWFscztcblxuLyoqXG4gKiBTZXRzIGEgcXVhdGVybmlvbiB0byByZXByZXNlbnQgdGhlIHNob3J0ZXN0IHJvdGF0aW9uIGZyb20gb25lXG4gKiB2ZWN0b3IgdG8gYW5vdGhlci5cbiAqXG4gKiBCb3RoIHZlY3RvcnMgYXJlIGFzc3VtZWQgdG8gYmUgdW5pdCBsZW5ndGguXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uLlxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBpbml0aWFsIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBkZXN0aW5hdGlvbiB2ZWN0b3JcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqL1xuZXhwb3J0IGNvbnN0IHJvdGF0aW9uVG8gPSAoZnVuY3Rpb24oKSB7XG4gIGxldCB0bXB2ZWMzID0gdmVjMy5jcmVhdGUoKTtcbiAgbGV0IHhVbml0VmVjMyA9IHZlYzMuZnJvbVZhbHVlcygxLDAsMCk7XG4gIGxldCB5VW5pdFZlYzMgPSB2ZWMzLmZyb21WYWx1ZXMoMCwxLDApO1xuXG4gIHJldHVybiBmdW5jdGlvbihvdXQsIGEsIGIpIHtcbiAgICBsZXQgZG90ID0gdmVjMy5kb3QoYSwgYik7XG4gICAgaWYgKGRvdCA8IC0wLjk5OTk5OSkge1xuICAgICAgdmVjMy5jcm9zcyh0bXB2ZWMzLCB4VW5pdFZlYzMsIGEpO1xuICAgICAgaWYgKHZlYzMubGVuKHRtcHZlYzMpIDwgMC4wMDAwMDEpXG4gICAgICAgIHZlYzMuY3Jvc3ModG1wdmVjMywgeVVuaXRWZWMzLCBhKTtcbiAgICAgIHZlYzMubm9ybWFsaXplKHRtcHZlYzMsIHRtcHZlYzMpO1xuICAgICAgc2V0QXhpc0FuZ2xlKG91dCwgdG1wdmVjMywgTWF0aC5QSSk7XG4gICAgICByZXR1cm4gb3V0O1xuICAgIH0gZWxzZSBpZiAoZG90ID4gMC45OTk5OTkpIHtcbiAgICAgIG91dFswXSA9IDA7XG4gICAgICBvdXRbMV0gPSAwO1xuICAgICAgb3V0WzJdID0gMDtcbiAgICAgIG91dFszXSA9IDE7XG4gICAgICByZXR1cm4gb3V0O1xuICAgIH0gZWxzZSB7XG4gICAgICB2ZWMzLmNyb3NzKHRtcHZlYzMsIGEsIGIpO1xuICAgICAgb3V0WzBdID0gdG1wdmVjM1swXTtcbiAgICAgIG91dFsxXSA9IHRtcHZlYzNbMV07XG4gICAgICBvdXRbMl0gPSB0bXB2ZWMzWzJdO1xuICAgICAgb3V0WzNdID0gMSArIGRvdDtcbiAgICAgIHJldHVybiBub3JtYWxpemUob3V0LCBvdXQpO1xuICAgIH1cbiAgfTtcbn0pKCk7XG5cbi8qKlxuICogUGVyZm9ybXMgYSBzcGhlcmljYWwgbGluZWFyIGludGVycG9sYXRpb24gd2l0aCB0d28gY29udHJvbCBwb2ludHNcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7cXVhdH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtxdWF0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtxdWF0fSBjIHRoZSB0aGlyZCBvcGVyYW5kXG4gKiBAcGFyYW0ge3F1YXR9IGQgdGhlIGZvdXJ0aCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gdCBpbnRlcnBvbGF0aW9uIGFtb3VudFxuICogQHJldHVybnMge3F1YXR9IG91dFxuICovXG5leHBvcnQgY29uc3Qgc3FsZXJwID0gKGZ1bmN0aW9uICgpIHtcbiAgbGV0IHRlbXAxID0gY3JlYXRlKCk7XG4gIGxldCB0ZW1wMiA9IGNyZWF0ZSgpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAob3V0LCBhLCBiLCBjLCBkLCB0KSB7XG4gICAgc2xlcnAodGVtcDEsIGEsIGQsIHQpO1xuICAgIHNsZXJwKHRlbXAyLCBiLCBjLCB0KTtcbiAgICBzbGVycChvdXQsIHRlbXAxLCB0ZW1wMiwgMiAqIHQgKiAoMSAtIHQpKTtcblxuICAgIHJldHVybiBvdXQ7XG4gIH07XG59KCkpO1xuXG4vKipcbiAqIFNldHMgdGhlIHNwZWNpZmllZCBxdWF0ZXJuaW9uIHdpdGggdmFsdWVzIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGdpdmVuXG4gKiBheGVzLiBFYWNoIGF4aXMgaXMgYSB2ZWMzIGFuZCBpcyBleHBlY3RlZCB0byBiZSB1bml0IGxlbmd0aCBhbmRcbiAqIHBlcnBlbmRpY3VsYXIgdG8gYWxsIG90aGVyIHNwZWNpZmllZCBheGVzLlxuICpcbiAqIEBwYXJhbSB7dmVjM30gdmlldyAgdGhlIHZlY3RvciByZXByZXNlbnRpbmcgdGhlIHZpZXdpbmcgZGlyZWN0aW9uXG4gKiBAcGFyYW0ge3ZlYzN9IHJpZ2h0IHRoZSB2ZWN0b3IgcmVwcmVzZW50aW5nIHRoZSBsb2NhbCBcInJpZ2h0XCIgZGlyZWN0aW9uXG4gKiBAcGFyYW0ge3ZlYzN9IHVwICAgIHRoZSB2ZWN0b3IgcmVwcmVzZW50aW5nIHRoZSBsb2NhbCBcInVwXCIgZGlyZWN0aW9uXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKi9cbmV4cG9ydCBjb25zdCBzZXRBeGVzID0gKGZ1bmN0aW9uKCkge1xuICBsZXQgbWF0ciA9IG1hdDMuY3JlYXRlKCk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKG91dCwgdmlldywgcmlnaHQsIHVwKSB7XG4gICAgbWF0clswXSA9IHJpZ2h0WzBdO1xuICAgIG1hdHJbM10gPSByaWdodFsxXTtcbiAgICBtYXRyWzZdID0gcmlnaHRbMl07XG5cbiAgICBtYXRyWzFdID0gdXBbMF07XG4gICAgbWF0cls0XSA9IHVwWzFdO1xuICAgIG1hdHJbN10gPSB1cFsyXTtcblxuICAgIG1hdHJbMl0gPSAtdmlld1swXTtcbiAgICBtYXRyWzVdID0gLXZpZXdbMV07XG4gICAgbWF0cls4XSA9IC12aWV3WzJdO1xuXG4gICAgcmV0dXJuIG5vcm1hbGl6ZShvdXQsIGZyb21NYXQzKG91dCwgbWF0cikpO1xuICB9O1xufSkoKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dsLW1hdHJpeC9zcmMvZ2wtbWF0cml4L3F1YXQuanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIENvcHlyaWdodCAoYykgMjAxNSwgQnJhbmRvbiBKb25lcywgQ29saW4gTWFjS2VuemllIElWLlxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbmZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG5hbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG5USEUgU09GVFdBUkUuICovXG5cbmltcG9ydCAqIGFzIGdsTWF0cml4IGZyb20gXCIuL2NvbW1vblwiO1xuXG4vKipcbiAqIDIgRGltZW5zaW9uYWwgVmVjdG9yXG4gKiBAbW9kdWxlIHZlYzJcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcsIGVtcHR5IHZlYzJcbiAqXG4gKiBAcmV0dXJucyB7dmVjMn0gYSBuZXcgMkQgdmVjdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gIGxldCBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSgyKTtcbiAgb3V0WzBdID0gMDtcbiAgb3V0WzFdID0gMDtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHZlYzIgaW5pdGlhbGl6ZWQgd2l0aCB2YWx1ZXMgZnJvbSBhbiBleGlzdGluZyB2ZWN0b3JcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdmVjdG9yIHRvIGNsb25lXG4gKiBAcmV0dXJucyB7dmVjMn0gYSBuZXcgMkQgdmVjdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShhKSB7XG4gIGxldCBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSgyKTtcbiAgb3V0WzBdID0gYVswXTtcbiAgb3V0WzFdID0gYVsxXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHZlYzIgaW5pdGlhbGl6ZWQgd2l0aCB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB5IFkgY29tcG9uZW50XG4gKiBAcmV0dXJucyB7dmVjMn0gYSBuZXcgMkQgdmVjdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tVmFsdWVzKHgsIHkpIHtcbiAgbGV0IG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDIpO1xuICBvdXRbMF0gPSB4O1xuICBvdXRbMV0gPSB5O1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENvcHkgdGhlIHZhbHVlcyBmcm9tIG9uZSB2ZWMyIHRvIGFub3RoZXJcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBzb3VyY2UgdmVjdG9yXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KG91dCwgYSkge1xuICBvdXRbMF0gPSBhWzBdO1xuICBvdXRbMV0gPSBhWzFdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzIgdG8gdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge051bWJlcn0geCBYIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldChvdXQsIHgsIHkpIHtcbiAgb3V0WzBdID0geDtcbiAgb3V0WzFdID0geTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBBZGRzIHR3byB2ZWMyJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGQob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKyBiWzBdO1xuICBvdXRbMV0gPSBhWzFdICsgYlsxXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTdWJ0cmFjdHMgdmVjdG9yIGIgZnJvbSB2ZWN0b3IgYVxuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0KG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdIC0gYlswXTtcbiAgb3V0WzFdID0gYVsxXSAtIGJbMV07XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogTXVsdGlwbGllcyB0d28gdmVjMidzXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKiBiWzBdO1xuICBvdXRbMV0gPSBhWzFdICogYlsxXTtcbiAgcmV0dXJuIG91dDtcbn07XG5cbi8qKlxuICogRGl2aWRlcyB0d28gdmVjMidzXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGl2aWRlKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdIC8gYlswXTtcbiAgb3V0WzFdID0gYVsxXSAvIGJbMV07XG4gIHJldHVybiBvdXQ7XG59O1xuXG4vKipcbiAqIE1hdGguY2VpbCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzJcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHZlY3RvciB0byBjZWlsXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjZWlsKG91dCwgYSkge1xuICBvdXRbMF0gPSBNYXRoLmNlaWwoYVswXSk7XG4gIG91dFsxXSA9IE1hdGguY2VpbChhWzFdKTtcbiAgcmV0dXJuIG91dDtcbn07XG5cbi8qKlxuICogTWF0aC5mbG9vciB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzJcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHZlY3RvciB0byBmbG9vclxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZmxvb3Iob3V0LCBhKSB7XG4gIG91dFswXSA9IE1hdGguZmxvb3IoYVswXSk7XG4gIG91dFsxXSA9IE1hdGguZmxvb3IoYVsxXSk7XG4gIHJldHVybiBvdXQ7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIG1pbmltdW0gb2YgdHdvIHZlYzInc1xuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1pbihvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gTWF0aC5taW4oYVswXSwgYlswXSk7XG4gIG91dFsxXSA9IE1hdGgubWluKGFbMV0sIGJbMV0pO1xuICByZXR1cm4gb3V0O1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBtYXhpbXVtIG9mIHR3byB2ZWMyJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXgob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IE1hdGgubWF4KGFbMF0sIGJbMF0pO1xuICBvdXRbMV0gPSBNYXRoLm1heChhWzFdLCBiWzFdKTtcbiAgcmV0dXJuIG91dDtcbn07XG5cbi8qKlxuICogTWF0aC5yb3VuZCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzJcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHZlY3RvciB0byByb3VuZFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcm91bmQgKG91dCwgYSkge1xuICBvdXRbMF0gPSBNYXRoLnJvdW5kKGFbMF0pO1xuICBvdXRbMV0gPSBNYXRoLnJvdW5kKGFbMV0pO1xuICByZXR1cm4gb3V0O1xufTtcblxuLyoqXG4gKiBTY2FsZXMgYSB2ZWMyIGJ5IGEgc2NhbGFyIG51bWJlclxuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIHZlY3RvciB0byBzY2FsZVxuICogQHBhcmFtIHtOdW1iZXJ9IGIgYW1vdW50IHRvIHNjYWxlIHRoZSB2ZWN0b3IgYnlcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICogYjtcbiAgb3V0WzFdID0gYVsxXSAqIGI7XG4gIHJldHVybiBvdXQ7XG59O1xuXG4vKipcbiAqIEFkZHMgdHdvIHZlYzIncyBhZnRlciBzY2FsaW5nIHRoZSBzZWNvbmQgb3BlcmFuZCBieSBhIHNjYWxhciB2YWx1ZVxuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsZSB0aGUgYW1vdW50IHRvIHNjYWxlIGIgYnkgYmVmb3JlIGFkZGluZ1xuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2NhbGVBbmRBZGQob3V0LCBhLCBiLCBzY2FsZSkge1xuICBvdXRbMF0gPSBhWzBdICsgKGJbMF0gKiBzY2FsZSk7XG4gIG91dFsxXSA9IGFbMV0gKyAoYlsxXSAqIHNjYWxlKTtcbiAgcmV0dXJuIG91dDtcbn07XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZXVjbGlkaWFuIGRpc3RhbmNlIGJldHdlZW4gdHdvIHZlYzInc1xuICpcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXN0YW5jZShhLCBiKSB7XG4gIHZhciB4ID0gYlswXSAtIGFbMF0sXG4gICAgeSA9IGJbMV0gLSBhWzFdO1xuICByZXR1cm4gTWF0aC5zcXJ0KHgqeCArIHkqeSk7XG59O1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgZXVjbGlkaWFuIGRpc3RhbmNlIGJldHdlZW4gdHdvIHZlYzInc1xuICpcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gc3F1YXJlZCBkaXN0YW5jZSBiZXR3ZWVuIGEgYW5kIGJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNxdWFyZWREaXN0YW5jZShhLCBiKSB7XG4gIHZhciB4ID0gYlswXSAtIGFbMF0sXG4gICAgeSA9IGJbMV0gLSBhWzFdO1xuICByZXR1cm4geCp4ICsgeSp5O1xufTtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBsZW5ndGggb2YgYSB2ZWMyXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBhIHZlY3RvciB0byBjYWxjdWxhdGUgbGVuZ3RoIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBsZW5ndGggb2YgYVxuICovXG5leHBvcnQgZnVuY3Rpb24gbGVuZ3RoKGEpIHtcbiAgdmFyIHggPSBhWzBdLFxuICAgIHkgPSBhWzFdO1xuICByZXR1cm4gTWF0aC5zcXJ0KHgqeCArIHkqeSk7XG59O1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgbGVuZ3RoIG9mIGEgdmVjMlxuICpcbiAqIEBwYXJhbSB7dmVjMn0gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIHNxdWFyZWQgbGVuZ3RoIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGxlbmd0aCBvZiBhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcXVhcmVkTGVuZ3RoIChhKSB7XG4gIHZhciB4ID0gYVswXSxcbiAgICB5ID0gYVsxXTtcbiAgcmV0dXJuIHgqeCArIHkqeTtcbn07XG5cbi8qKlxuICogTmVnYXRlcyB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzJcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHZlY3RvciB0byBuZWdhdGVcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5lZ2F0ZShvdXQsIGEpIHtcbiAgb3V0WzBdID0gLWFbMF07XG4gIG91dFsxXSA9IC1hWzFdO1xuICByZXR1cm4gb3V0O1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBpbnZlcnNlIG9mIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjMlxuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdmVjdG9yIHRvIGludmVydFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJzZShvdXQsIGEpIHtcbiAgb3V0WzBdID0gMS4wIC8gYVswXTtcbiAgb3V0WzFdID0gMS4wIC8gYVsxXTtcbiAgcmV0dXJuIG91dDtcbn07XG5cbi8qKlxuICogTm9ybWFsaXplIGEgdmVjMlxuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdmVjdG9yIHRvIG5vcm1hbGl6ZVxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplKG91dCwgYSkge1xuICB2YXIgeCA9IGFbMF0sXG4gICAgeSA9IGFbMV07XG4gIHZhciBsZW4gPSB4KnggKyB5Knk7XG4gIGlmIChsZW4gPiAwKSB7XG4gICAgLy9UT0RPOiBldmFsdWF0ZSB1c2Ugb2YgZ2xtX2ludnNxcnQgaGVyZT9cbiAgICBsZW4gPSAxIC8gTWF0aC5zcXJ0KGxlbik7XG4gICAgb3V0WzBdID0gYVswXSAqIGxlbjtcbiAgICBvdXRbMV0gPSBhWzFdICogbGVuO1xuICB9XG4gIHJldHVybiBvdXQ7XG59O1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byB2ZWMyJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRvdCBwcm9kdWN0IG9mIGEgYW5kIGJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRvdChhLCBiKSB7XG4gIHJldHVybiBhWzBdICogYlswXSArIGFbMV0gKiBiWzFdO1xufTtcblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgY3Jvc3MgcHJvZHVjdCBvZiB0d28gdmVjMidzXG4gKiBOb3RlIHRoYXQgdGhlIGNyb3NzIHByb2R1Y3QgbXVzdCBieSBkZWZpbml0aW9uIHByb2R1Y2UgYSAzRCB2ZWN0b3JcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcm9zcyhvdXQsIGEsIGIpIHtcbiAgdmFyIHogPSBhWzBdICogYlsxXSAtIGFbMV0gKiBiWzBdO1xuICBvdXRbMF0gPSBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSB6O1xuICByZXR1cm4gb3V0O1xufTtcblxuLyoqXG4gKiBQZXJmb3JtcyBhIGxpbmVhciBpbnRlcnBvbGF0aW9uIGJldHdlZW4gdHdvIHZlYzInc1xuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSB0IGludGVycG9sYXRpb24gYW1vdW50IGJldHdlZW4gdGhlIHR3byBpbnB1dHNcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxlcnAob3V0LCBhLCBiLCB0KSB7XG4gIHZhciBheCA9IGFbMF0sXG4gICAgYXkgPSBhWzFdO1xuICBvdXRbMF0gPSBheCArIHQgKiAoYlswXSAtIGF4KTtcbiAgb3V0WzFdID0gYXkgKyB0ICogKGJbMV0gLSBheSk7XG4gIHJldHVybiBvdXQ7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHJhbmRvbSB2ZWN0b3Igd2l0aCB0aGUgZ2l2ZW4gc2NhbGVcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtOdW1iZXJ9IFtzY2FsZV0gTGVuZ3RoIG9mIHRoZSByZXN1bHRpbmcgdmVjdG9yLiBJZiBvbW1pdHRlZCwgYSB1bml0IHZlY3RvciB3aWxsIGJlIHJldHVybmVkXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByYW5kb20ob3V0LCBzY2FsZSkge1xuICBzY2FsZSA9IHNjYWxlIHx8IDEuMDtcbiAgdmFyIHIgPSBnbE1hdHJpeC5SQU5ET00oKSAqIDIuMCAqIE1hdGguUEk7XG4gIG91dFswXSA9IE1hdGguY29zKHIpICogc2NhbGU7XG4gIG91dFsxXSA9IE1hdGguc2luKHIpICogc2NhbGU7XG4gIHJldHVybiBvdXQ7XG59O1xuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzIgd2l0aCBhIG1hdDJcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXG4gKiBAcGFyYW0ge21hdDJ9IG0gbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1NYXQyKG91dCwgYSwgbSkge1xuICB2YXIgeCA9IGFbMF0sXG4gICAgeSA9IGFbMV07XG4gIG91dFswXSA9IG1bMF0gKiB4ICsgbVsyXSAqIHk7XG4gIG91dFsxXSA9IG1bMV0gKiB4ICsgbVszXSAqIHk7XG4gIHJldHVybiBvdXQ7XG59O1xuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzIgd2l0aCBhIG1hdDJkXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxuICogQHBhcmFtIHttYXQyZH0gbSBtYXRyaXggdG8gdHJhbnNmb3JtIHdpdGhcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybU1hdDJkKG91dCwgYSwgbSkge1xuICB2YXIgeCA9IGFbMF0sXG4gICAgeSA9IGFbMV07XG4gIG91dFswXSA9IG1bMF0gKiB4ICsgbVsyXSAqIHkgKyBtWzRdO1xuICBvdXRbMV0gPSBtWzFdICogeCArIG1bM10gKiB5ICsgbVs1XTtcbiAgcmV0dXJuIG91dDtcbn07XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjMiB3aXRoIGEgbWF0M1xuICogM3JkIHZlY3RvciBjb21wb25lbnQgaXMgaW1wbGljaXRseSAnMSdcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXG4gKiBAcGFyYW0ge21hdDN9IG0gbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1NYXQzKG91dCwgYSwgbSkge1xuICB2YXIgeCA9IGFbMF0sXG4gICAgeSA9IGFbMV07XG4gIG91dFswXSA9IG1bMF0gKiB4ICsgbVszXSAqIHkgKyBtWzZdO1xuICBvdXRbMV0gPSBtWzFdICogeCArIG1bNF0gKiB5ICsgbVs3XTtcbiAgcmV0dXJuIG91dDtcbn07XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjMiB3aXRoIGEgbWF0NFxuICogM3JkIHZlY3RvciBjb21wb25lbnQgaXMgaW1wbGljaXRseSAnMCdcbiAqIDR0aCB2ZWN0b3IgY29tcG9uZW50IGlzIGltcGxpY2l0bHkgJzEnXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxuICogQHBhcmFtIHttYXQ0fSBtIG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtTWF0NChvdXQsIGEsIG0pIHtcbiAgbGV0IHggPSBhWzBdO1xuICBsZXQgeSA9IGFbMV07XG4gIG91dFswXSA9IG1bMF0gKiB4ICsgbVs0XSAqIHkgKyBtWzEyXTtcbiAgb3V0WzFdID0gbVsxXSAqIHggKyBtWzVdICogeSArIG1bMTNdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSB2ZWN0b3JcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdmVjdG9yIHRvIHJlcHJlc2VudCBhcyBhIHN0cmluZ1xuICogQHJldHVybnMge1N0cmluZ30gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cihhKSB7XG4gIHJldHVybiAndmVjMignICsgYVswXSArICcsICcgKyBhWzFdICsgJyknO1xufVxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHZlY3RvcnMgZXhhY3RseSBoYXZlIHRoZSBzYW1lIGVsZW1lbnRzIGluIHRoZSBzYW1lIHBvc2l0aW9uICh3aGVuIGNvbXBhcmVkIHdpdGggPT09KVxuICpcbiAqIEBwYXJhbSB7dmVjMn0gYSBUaGUgZmlyc3QgdmVjdG9yLlxuICogQHBhcmFtIHt2ZWMyfSBiIFRoZSBzZWNvbmQgdmVjdG9yLlxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIHZlY3RvcnMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGFjdEVxdWFscyhhLCBiKSB7XG4gIHJldHVybiBhWzBdID09PSBiWzBdICYmIGFbMV0gPT09IGJbMV07XG59XG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgdmVjdG9ycyBoYXZlIGFwcHJveGltYXRlbHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24uXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBhIFRoZSBmaXJzdCB2ZWN0b3IuXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgVGhlIHNlY29uZCB2ZWN0b3IuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmVjdG9ycyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVxdWFscyhhLCBiKSB7XG4gIGxldCBhMCA9IGFbMF0sIGExID0gYVsxXTtcbiAgbGV0IGIwID0gYlswXSwgYjEgPSBiWzFdO1xuICByZXR1cm4gKE1hdGguYWJzKGEwIC0gYjApIDw9IGdsTWF0cml4LkVQU0lMT04qTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMCksIE1hdGguYWJzKGIwKSkgJiZcbiAgICAgICAgICBNYXRoLmFicyhhMSAtIGIxKSA8PSBnbE1hdHJpeC5FUFNJTE9OKk1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTEpLCBNYXRoLmFicyhiMSkpKTtcbn1cblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzIubGVuZ3RofVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBsZW4gPSBsZW5ndGg7XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayB2ZWMyLnN1YnRyYWN0fVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBzdWIgPSBzdWJ0cmFjdDtcblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzIubXVsdGlwbHl9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IG11bCA9IG11bHRpcGx5O1xuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMi5kaXZpZGV9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IGRpdiA9IGRpdmlkZTtcblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzIuZGlzdGFuY2V9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IGRpc3QgPSBkaXN0YW5jZTtcblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzIuc3F1YXJlZERpc3RhbmNlfVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBzcXJEaXN0ID0gc3F1YXJlZERpc3RhbmNlO1xuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMi5zcXVhcmVkTGVuZ3RofVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBzcXJMZW4gPSBzcXVhcmVkTGVuZ3RoO1xuXG4vKipcbiAqIFBlcmZvcm0gc29tZSBvcGVyYXRpb24gb3ZlciBhbiBhcnJheSBvZiB2ZWMycy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhIHRoZSBhcnJheSBvZiB2ZWN0b3JzIHRvIGl0ZXJhdGUgb3ZlclxuICogQHBhcmFtIHtOdW1iZXJ9IHN0cmlkZSBOdW1iZXIgb2YgZWxlbWVudHMgYmV0d2VlbiB0aGUgc3RhcnQgb2YgZWFjaCB2ZWMyLiBJZiAwIGFzc3VtZXMgdGlnaHRseSBwYWNrZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBvZmZzZXQgTnVtYmVyIG9mIGVsZW1lbnRzIHRvIHNraXAgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgYXJyYXlcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb3VudCBOdW1iZXIgb2YgdmVjMnMgdG8gaXRlcmF0ZSBvdmVyLiBJZiAwIGl0ZXJhdGVzIG92ZXIgZW50aXJlIGFycmF5XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBGdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIHZlY3RvciBpbiB0aGUgYXJyYXlcbiAqIEBwYXJhbSB7T2JqZWN0fSBbYXJnXSBhZGRpdGlvbmFsIGFyZ3VtZW50IHRvIHBhc3MgdG8gZm5cbiAqIEByZXR1cm5zIHtBcnJheX0gYVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBmb3JFYWNoID0gKGZ1bmN0aW9uKCkge1xuICBsZXQgdmVjID0gY3JlYXRlKCk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGEsIHN0cmlkZSwgb2Zmc2V0LCBjb3VudCwgZm4sIGFyZykge1xuICAgIGxldCBpLCBsO1xuICAgIGlmKCFzdHJpZGUpIHtcbiAgICAgIHN0cmlkZSA9IDI7XG4gICAgfVxuXG4gICAgaWYoIW9mZnNldCkge1xuICAgICAgb2Zmc2V0ID0gMDtcbiAgICB9XG5cbiAgICBpZihjb3VudCkge1xuICAgICAgbCA9IE1hdGgubWluKChjb3VudCAqIHN0cmlkZSkgKyBvZmZzZXQsIGEubGVuZ3RoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbCA9IGEubGVuZ3RoO1xuICAgIH1cblxuICAgIGZvcihpID0gb2Zmc2V0OyBpIDwgbDsgaSArPSBzdHJpZGUpIHtcbiAgICAgIHZlY1swXSA9IGFbaV07IHZlY1sxXSA9IGFbaSsxXTtcbiAgICAgIGZuKHZlYywgdmVjLCBhcmcpO1xuICAgICAgYVtpXSA9IHZlY1swXTsgYVtpKzFdID0gdmVjWzFdO1xuICAgIH1cblxuICAgIHJldHVybiBhO1xuICB9O1xufSkoKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dsLW1hdHJpeC9zcmMvZ2wtbWF0cml4L3ZlYzIuanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIGdsbSBmcm9tICdnbC1tYXRyaXgnXG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL3R5cGUtdXRpbCdcblxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVpcmVWZWMzKHZhbDogZ2xtLnZlYzMgfCBBcnJheTxudW1iZXI+IHwgbnVtYmVyKTogZ2xtLnZlYzMge1xuXHRpZiAodmFsIGluc3RhbmNlb2YgQXJyYXkpIHtcblx0XHRsZXQgbGVuID0gdmFsLmxlbmd0aFxuXHRcdGlmIChsZW4gIT09IDMpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYEFycmF5IG11c3QgaGF2ZSAzIGVsZW1lbnRzOyAke2xlbn0gd2VyZSBwcmVzZW50LmApXG5cdFx0dmFsID0gZ2xtLnZlYzMuZnJvbVZhbHVlcyh2YWxbMF0sIHZhbFsxXSwgdmFsWzJdKVxuXHR9IGVsc2UgaWYgKHR5cGVvZih2YWwpID09ICdudW1iZXInKSB7XG5cdFx0dmFsID0gZ2xtLnZlYzMuZnJvbVZhbHVlcyh2YWwsIHZhbCwgdmFsKVxuXHR9XG5cdHJldHVybiB2YWxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lVmVjM0NvbnZlcnRpYmxlKGRhdGE6IHR5cGVzLnZlYzNDb252ZXJ0aWJsZSk6IHR5cGVzLnZlYzNDb252ZXJ0aWJsZSB7XG5cdGlmICh0eXBlb2YoZGF0YSkgPT0gJ251bWJlcicpIHtcblx0XHRyZXR1cm4gZGF0YVxuXHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcblx0XHRyZXR1cm4gZGF0YS5zbGljZSgpXG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIGdsbS52ZWMzLmNsb25lKGRhdGEpXG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC91dGlsL3ZlY3Rvci11dGlsLnRzIiwiaW1wb3J0ICogYXMgZ2xtIGZyb20gJ2dsLW1hdHJpeCdcbmltcG9ydCB7IHZlY3RvciwgdHlwZXMgfSBmcm9tICcuL3V0aWwnXG5cbmV4cG9ydCBjbGFzcyB0cmFuc2Zvcm0ge1xuXG5cdGRhdGE6IGdsbS5tYXQ0XG5cblx0Y29uc3RydWN0b3IoZGF0YTogZ2xtLm1hdDQgPSBnbG0ubWF0NC5jcmVhdGUoKSkge1xuXHRcdHRoaXMuZGF0YSA9IGRhdGFcblx0fVxuXG5cdHB1YmxpYyBpZGVudGl0eSgpOiB0cmFuc2Zvcm0ge1xuXHRcdGdsbS5tYXQ0LmlkZW50aXR5KHRoaXMuZGF0YSlcblx0XHRyZXR1cm4gdGhpc1xuXHR9XG5cblx0cHVibGljIHRyYW5zbGF0ZSh2YWw6IHR5cGVzLnZlYzNDb252ZXJ0aWJsZSk6IHRyYW5zZm9ybSB7XG5cdFx0dmFsID0gdmVjdG9yLnJlcXVpcmVWZWMzKHZhbClcblx0XHRnbG0ubWF0NC50cmFuc2xhdGUodGhpcy5kYXRhLCB0aGlzLmRhdGEsIHZhbClcblx0XHRyZXR1cm4gdGhpc1xuXHR9XG5cblx0cHVibGljIHJvdGF0ZShyYWQ6IG51bWJlciwgYXhpczogdHlwZXMudmVjM0NvbnZlcnRpYmxlKTogdHJhbnNmb3JtIHtcblx0XHRheGlzID0gdmVjdG9yLnJlcXVpcmVWZWMzKGF4aXMpXG5cdFx0Z2xtLm1hdDQucm90YXRlKHRoaXMuZGF0YSwgdGhpcy5kYXRhLCByYWQsIGF4aXMpXG5cdFx0cmV0dXJuIHRoaXNcblx0fVxuXG5cdHB1YmxpYyBzY2FsZSh2YWw6IHR5cGVzLnZlYzNDb252ZXJ0aWJsZSk6IHRyYW5zZm9ybSB7XG5cdFx0dmFsID0gdmVjdG9yLnJlcXVpcmVWZWMzKHZhbClcblx0XHRnbG0ubWF0NC5zY2FsZSh0aGlzLmRhdGEsIHRoaXMuZGF0YSwgdmFsKVxuXHRcdHJldHVybiB0aGlzXG5cdH1cblxuXHRwdWJsaWMgbWF0KCk6IGdsbS5tYXQ0IHtcblx0XHRyZXR1cm4gdGhpcy5kYXRhXG5cdH1cblxuXHRwdWJsaWMgY2xvbmUoKTogdHJhbnNmb3JtIHtcblx0XHRyZXR1cm4gbmV3IHRyYW5zZm9ybSh0aGlzLm1hdENvcHkoKSlcblx0fVxuXG5cdHB1YmxpYyBtYXRDb3B5KCk6IGdsbS5tYXQ0IHtcblx0XHRyZXR1cm4gZ2xtLm1hdDQuY29weShnbG0ubWF0NC5jcmVhdGUoKSwgdGhpcy5kYXRhKVxuXHR9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC91dGlsL21hdHJpeC11dGlsLnRzIiwiaW1wb3J0IHsgUmVzb3VyY2UgfSBmcm9tICcuLi9jb21tb24vcmVzb3VyY2UnXG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL3R5cGUtdXRpbCdcbmltcG9ydCAqIGFzIGNvbW1vbiBmcm9tICcuL2NvbW1vbi11dGlsJ1xuXG4vL1xuLy9cdEF0dHJpYnV0ZVxuLy9cblxuYWJzdHJhY3QgY2xhc3MgX0F0dHJpYnV0ZUJhc2Uge1xuXHRuYW1lOiBhbnlcblx0cHJvdGVjdGVkIHZhbHVlOiBhbnlcblx0dmFsaWRhdG9yOiBhbnlcblx0Y29uc3RydWN0b3IobmFtZTogYW55LCB2YWx1ZTogYW55LCB2YWxpZGF0b3I6IGFueSkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWVcblx0XHR0aGlzLnZhbHVlID0gdmFsdWVcblx0XHR0aGlzLnZhbGlkYXRvciA9IHZhbGlkYXRvclxuXHR9XG5cdGFic3RyYWN0IHBlZWtWYWx1ZSgpOiBhbnlcblx0YWJzdHJhY3Qgc2V0VmFsdWUoLi4uYXJnczogYW55W10pOiBhbnlcblx0cHVibGljIGFjdGl2YXRvcjxUIGV4dGVuZHMgX0F0dHJpYnV0ZUJhc2U+XG5cdFx0KHR5cGU6IHtuZXcoLi4uYXJncyA6IGFueVtdKTogVCA7fSwgLi4uYXJncyA6IGFueVtdKTogVCB7XG5cdFx0cmV0dXJuIG5ldyB0eXBlKC4uLmFyZ3MpXG5cdH1cbn1cblxudHlwZSBfVmFsaWRhdG9yVDxUIGV4dGVuZHMgX0F0dHJpYnV0ZUJhc2UsIEs+ID0gKGF0dHI6IFQsIHZhbHVlOiBLKSA9PiB2b2lkXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBfQXR0cmlidXRlPFNUIGV4dGVuZHMgdHlwZXMuY2xvbmVhYmxlLCBcblx0R1QgZXh0ZW5kcyB0eXBlcy5jbG9uZWFibGUsIEsgZXh0ZW5kcyBzdHJpbmc+IGV4dGVuZHMgX0F0dHJpYnV0ZUJhc2Uge1xuXHRuYW1lOiBLXG5cdHZhbHVlOiBHVCA9IG51bGxcblx0aXNEaXJ0eTogYm9vbGVhbiA9IHRydWVcblx0dmFsaWRhdG9yOiBfVmFsaWRhdG9yVDxfQXR0cmlidXRlPFNULCBHVCwgSz4sIFNUPlxuXHRjb25zdHJ1Y3RvcihuYW1lOiBLLCB2YWx1ZTogU1QsIHZhbGlkYXRvcjogX1ZhbGlkYXRvclQ8X0F0dHJpYnV0ZTxTVCwgR1QsIEs+LCBTVD4gPSB2YWxpZGF0b3JzLkFueSkge1xuXHRcdHN1cGVyKG5hbWUsIHZhbHVlLCB2YWxpZGF0b3IpXG5cdFx0dGhpcy5uYW1lID0gbmFtZVxuXHRcdHRoaXMuc2V0VmFsaWRhdG9yKHZhbGlkYXRvcilcblx0XHR0aGlzLnZhbGlkYXRlKHZhbHVlKVxuXHRcdHRoaXMuc2V0VmFsdWUodmFsdWUpXG5cdH1cblx0Z2V0VmFsdWUoKTogR1Qge1xuXHRcdHRoaXMuaXNEaXJ0eSA9IGZhbHNlXG5cdFx0cmV0dXJuIHRoaXMudmFsdWVcblx0fVxuXHRwdWJsaWMgcGVla1ZhbHVlKCk6IEdUIHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZVxuXHR9XG5cdHNldFZhbHVlKHZhbHVlOiBTVCk6IHZvaWQge1xuXHRcdHRoaXMudmFsaWRhdGUodmFsdWUpXG5cdFx0dGhpcy52YWx1ZSA9IHRoaXMuX3NldFZhbHVlKHZhbHVlKVxuXHRcdHRoaXMuaXNEaXJ0eSA9IHRydWVcblx0fVxuXHRwcm90ZWN0ZWQgYWJzdHJhY3QgX3NldFZhbHVlKHZhbHVlOiBTVCk6IEdUXG5cdHByb3RlY3RlZCBzZXRWYWxpZGF0b3IodmFsaWRhdG9yOiBfVmFsaWRhdG9yVDxfQXR0cmlidXRlPFNULCBHVCwgSz4sIFNUPik6IHZvaWQge1xuXHRcdHRoaXMudmFsaWRhdG9yID0gdmFsaWRhdG9yXG5cdH1cblx0cHJvdGVjdGVkIHZhbGlkYXRlKHZhbHVlOiBTVCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLnZhbGlkYXRvcikgdGhpcy52YWxpZGF0b3IodGhpcywgdmFsdWUpXG5cdH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSB2YWxpZGF0b3JzIHtcblx0ZXhwb3J0IGZ1bmN0aW9uIEFueTxTVCBleHRlbmRzIHR5cGVzLmNsb25lYWJsZSwgXG5cdFx0R1QgZXh0ZW5kcyB0eXBlcy5jbG9uZWFibGUsIEsgZXh0ZW5kcyBzdHJpbmc+KGF0dHI6IF9BdHRyaWJ1dGU8U1QsIEdULCBLPiwgZGF0YTogU1QpIHt9XG5cdGV4cG9ydCBmdW5jdGlvbiBOdW1iZXI8U1QgZXh0ZW5kcyB0eXBlcy5jbG9uZWFibGUsIFxuXHRcdEdUIGV4dGVuZHMgdHlwZXMuY2xvbmVhYmxlLCBLIGV4dGVuZHMgc3RyaW5nPihhdHRyOiBfQXR0cmlidXRlPFNULCBHVCwgSz4sIGRhdGE6IFNUKSB7XG5cdFx0aWYgKHR5cGVvZihkYXRhKSAhPT0gJ251bWJlcicpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYEF0dHJpYnV0ZSBcIiR7YXR0ci5uYW1lfVwiIG11c3QgYmUgYSBudW1iZXIuYClcblx0fVxuXHRleHBvcnQgZnVuY3Rpb24gVmVjMzxTVCBleHRlbmRzIHR5cGVzLmNsb25lYWJsZSwgXG5cdFx0R1QgZXh0ZW5kcyB0eXBlcy5jbG9uZWFibGUsIEsgZXh0ZW5kcyBzdHJpbmc+KGF0dHI6IF9BdHRyaWJ1dGU8U1QsIEdULCBLPiwgZGF0YTogU1QpIHtcblx0XHRpZiAoIXR5cGVzLmlzTkVsZW1lbnRBcnJheShkYXRhLCAzKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBBdHRyaWJ1dGUgXCIke2F0dHIubmFtZX1cIiBtdXN0IGJlIGEgdmVjMywgb3IgZXF1aXZhbGVudCBhcnJheS10eXBlLmApXG5cdFx0fVxuXHR9XG5cdGV4cG9ydCBmdW5jdGlvbiBWZWMzT3JUZXh0dXJlPFNUIGV4dGVuZHMgdHlwZXMuY2xvbmVhYmxlLCBcblx0XHRHVCBleHRlbmRzIHR5cGVzLmNsb25lYWJsZSwgSyBleHRlbmRzIHN0cmluZz4oYXR0cjogX0F0dHJpYnV0ZTxTVCwgR1QsIEs+LCBkYXRhOiBTVCkge1xuXHRcdGlmICghdHlwZXMuaXNORWxlbWVudEFycmF5KGRhdGEsIDMpICYmICF0eXBlcy5pc1RleHR1cmUoZGF0YSkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgQXR0cmlidXRlIFwiJHthdHRyLm5hbWV9XCIgbXVzdCBiZSBhIHZlYzMgKG9yIGVxdWl2YWxlbnQgYXJyYXktdHlwZSksIG9yIGEgdGV4dHVyZS5gKVxuXHRcdH1cblx0fVxuXHRleHBvcnQgZnVuY3Rpb24gQm9vbGVhbjxTVCBleHRlbmRzIHR5cGVzLmNsb25lYWJsZSwgXG5cdFx0R1QgZXh0ZW5kcyB0eXBlcy5jbG9uZWFibGUsIEsgZXh0ZW5kcyBzdHJpbmc+KGF0dHI6IF9BdHRyaWJ1dGU8U1QsIEdULCBLPiwgZGF0YTogU1QpIHtcblx0XHRpZiAodHlwZW9mKGRhdGEpICE9PSAnYm9vbGVhbicpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYEF0dHJpYnV0ZSBcIiR7YXR0ci5uYW1lfVwiIG11c3QgYmUgYSBib29sZWFuLmApXG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIF9BdHRyaWJ1dGVNYXA8VCBleHRlbmRzIF9BdHRyaWJ1dGVCYXNlPiB7XG5cdGl0ZW1zOiB7IFtrZXk6IHN0cmluZ106IFQgfSA9IHt9XG5cblx0Y29uc3RydWN0b3IoKSB7fVxuXG5cdHB1YmxpYyBhZGQodmFsOiBUKTogdm9pZCB7XG5cdFx0dGhpcy5pdGVtc1t2YWwubmFtZV0gPSB2YWxcblx0fVxuXG5cdHB1YmxpYyBnZXRBbGwoKTogQXJyYXk8VD4ge1xuXHRcdGxldCBpdGVtcyA9IHRoaXMuaXRlbXNcblx0XHRsZXQga2V5czogQXJyYXk8c3RyaW5nPiA9IE9iamVjdC5rZXlzKGl0ZW1zKVxuXHRcdGxldCB2YWx1ZXM6IEFycmF5PFQ+ID0ga2V5cy5tYXAoa2V5ID0+IGl0ZW1zW2tleV0pXG5cdFx0cmV0dXJuIHZhbHVlc1xuXHR9XG5cblx0cHVibGljIGhhczxYIGV4dGVuZHMgc3RyaW5nPihrZXk6IFgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5pdGVtc1trZXldICE9PSB1bmRlZmluZWRcblx0fVxuXG5cdHB1YmxpYyBnZXRPbmU8WCBleHRlbmRzIHN0cmluZz4oa2V5OiBYKTogVCB7XG5cdFx0bGV0IGl0ZW0gPSB0aGlzLml0ZW1zW2tleV1cblx0XHRpZiAoaXRlbSA9PT0gdW5kZWZpbmVkKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBSZXF1ZXN0ZWQgbm9uLXByZXNlbnQgYXR0cmlidXRlIFwiJHtrZXl9XCIuYClcblx0XHRyZXR1cm4gaXRlbVxuXHR9XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBdHRyaWJ1dGFibGU8QXRUIGV4dGVuZHMgX0F0dHJpYnV0ZUJhc2UsIE1hcFQgZXh0ZW5kcyBfQXR0cmlidXRlTWFwPEF0VD4sIFxuXHRLIGV4dGVuZHMgc3RyaW5nPiBleHRlbmRzIFJlc291cmNlIHtcblx0YXR0cmlidXRlczogTWFwVFxuXG5cdGNvbnN0cnVjdG9yKCkgeyBzdXBlcigpIH1cblxuXHRwcm90ZWN0ZWQgYWRkQXR0cmlidXRlKGF0dHI6IEF0VCk6IHZvaWQge1xuXHRcdHRoaXMuYXR0cmlidXRlcy5hZGQoYXR0cilcblx0fVxuXG5cdHByb3RlY3RlZCBhZGRBdHRyaWJ1dGVzKC4uLmF0dHJzOiBBcnJheTxBdFQ+KSB7XG5cdFx0Zm9yIChsZXQgYXR0ciBvZiBhdHRycykge1xuXHRcdFx0dGhpcy5hZGRBdHRyaWJ1dGUoYXR0cilcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgaGFzQXR0cmlidXRlKG5hbWU6IEspOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5hdHRyaWJ1dGVzLmhhcyhuYW1lKVxuXHR9XG5cblx0cHVibGljIGVudW1lcmF0ZUF0dHJpYnV0ZXMoKTogQXJyYXk8QXRUPiB7XG5cdFx0cmV0dXJuIHRoaXMuYXR0cmlidXRlcy5nZXRBbGwoKVxuXHR9XG5cblx0cHVibGljIGdldEF0dHJpYnV0ZShuYW1lOiBLKTogQXRUIHtcblx0XHRyZXR1cm4gdGhpcy5hdHRyaWJ1dGVzLmdldE9uZShuYW1lKVxuXHR9XG5cblx0cHJvdGVjdGVkIGFjdGl2YXRvcjxBdFQgZXh0ZW5kcyBfQXR0cmlidXRlQmFzZSwgTWFwVCBleHRlbmRzIF9BdHRyaWJ1dGVNYXA8QXRUPiwgXG5cdFx0SyBleHRlbmRzIHN0cmluZywgVCBleHRlbmRzIEF0dHJpYnV0YWJsZTxBdFQsIE1hcFQsIEs+PlxuXHRcdCh0eXBlOiB7bmV3KC4uLmFyZ3MgOiBhbnlbXSk6IFQgO30sIC4uLmFyZ3M6IGFueVtdKTogVCB7XG5cdFx0cmV0dXJuIG5ldyB0eXBlKC4uLmFyZ3MpXG5cdH1cblxuXHRwcm90ZWN0ZWQgX2Nsb25lPEF0VCBleHRlbmRzIF9BdHRyaWJ1dGVCYXNlLCBNYXBUIGV4dGVuZHMgX0F0dHJpYnV0ZU1hcDxBdFQ+LCBcblx0XHRLIGV4dGVuZHMgc3RyaW5nLCBUIGV4dGVuZHMgQXR0cmlidXRhYmxlPEF0VCwgTWFwVCwgSz4sIFxuXHRcdFggZXh0ZW5kcyBBdFQ+XG5cdFx0KGF0dHJpYnV0YWJsZUNvbnN0cnVjdG9yOiB7bmV3KC4uLmFyZ3MgOiBhbnlbXSk6IFQgO30sIFxuXHRcdFx0YXR0cmlidXRlQ29uc3RydWN0b3I6IHtuZXcoLi4uYXJncyA6IGFueVtdKTogWCA7fSwgLi4uYXJnczogYW55W10pOiBUIHtcblxuXHRcdGxldCBjb3B5OiBUID0gdGhpcy5hY3RpdmF0b3IoYXR0cmlidXRhYmxlQ29uc3RydWN0b3IsIC4uLmFyZ3MpXG5cdFx0Zm9yIChsZXQgYXR0ciBvZiB0aGlzLmVudW1lcmF0ZUF0dHJpYnV0ZXMoKSkge1xuXHRcdFx0aWYgKCFjb3B5Lmhhc0F0dHJpYnV0ZShhdHRyLm5hbWUpKSB7XG5cdFx0XHRcdGxldCBjb3B5QXR0ID0gY29tbW9uLmNsb25lKGF0dHIucGVla1ZhbHVlKCkpXG5cdFx0XHRcdGxldCBhdHRyXyA9IGF0dHIuYWN0aXZhdG9yKGF0dHJpYnV0ZUNvbnN0cnVjdG9yLCBhdHRyLm5hbWUsIGNvcHlBdHQsIGF0dHIudmFsaWRhdG9yKVxuXHRcdFx0XHRjb3B5LmFkZEF0dHJpYnV0ZShhdHRyXylcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvcHkuZ2V0QXR0cmlidXRlKGF0dHIubmFtZSkuc2V0VmFsdWUoY29tbW9uLmNsb25lKGF0dHIucGVla1ZhbHVlKCkpKVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gY29weVxuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2wvdXRpbC9hdHRyaWJ1dGUtdXRpbC50cyIsImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEZWZhdWx0czxUPiB7XG5cdHB1YmxpYyBvcHRpb25zOiBUXG5cdGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7IHRoaXMub3B0aW9ucyA9IHRoaXMuZ2V0KC4uLmFyZ3MpIH1cblx0cHVibGljIGFic3RyYWN0IGdldCguLi5hcmdzOiBhbnlbXSk6IFRcblx0cHVibGljIHNldDxLIGV4dGVuZHMga2V5b2YgVCwgVj4obmFtZTogSywgdmFsdWU6IFRbS10pOiBEZWZhdWx0czxUPiB7XG5cdFx0dGhpcy5vcHRpb25zW25hbWVdID0gdmFsdWVcblx0XHRyZXR1cm4gdGhpc1xuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2wvdXRpbC9kZWZhdWx0LXV0aWwudHMiLCJpbXBvcnQgeyBCYXNpYyB9IGZyb20gJy4uL3NoYWRlcnMvc2hhZGVyLWJhc2ljJ1xuaW1wb3J0IHsgUEJSMSB9IGZyb20gJy4uL3NoYWRlcnMvc2hhZGVyLXBicjEnXG5pbXBvcnQgeyBTa3lib3ggfSBmcm9tICcuLi9zaGFkZXJzL3NoYWRlci1za3lib3gnXG5cbmNvbnN0IFNoYWRlckxpYnJhcnkgPSB7XG5cdEJhc2ljLFxuXHRQQlIxLFxuXHRTa3lib3hcbn1cblxuZXhwb3J0IHsgU2hhZGVyTGlicmFyeSB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2wvc2hhZGVyL3NoYWRlci1saWJyYXJ5LnRzIiwiaW1wb3J0IHsgU2hhZGVyU291cmNlLCBTaGFkZXJQcm9ncmFtU291cmNlLCBTaGFkZXJUeXBlcyB9IGZyb20gJy4uL3NoYWRlci9zaGFkZXInXG5cbm5hbWVzcGFjZSBfc291cmNlcyB7XG5cdGV4cG9ydCBjb25zdCB2ZXJ0ZXg6IHN0cmluZyA9IGBcblx0XHRhdHRyaWJ1dGUgdmVjMyBpbl9wb3NpdGlvbjtcblx0XHRhdHRyaWJ1dGUgdmVjMyBpbl9ub3JtYWw7XG5cdFx0YXR0cmlidXRlIHZlYzIgaW5fdXY7XG5cblx0XHR1bmlmb3JtIG1hdDQgbW9kZWw7XG5cdFx0dW5pZm9ybSBtYXQ0IHByb2plY3Rpb247XG5cdFx0dW5pZm9ybSBtYXQ0IHZpZXc7XG5cblx0XHR2b2lkIG1haW4oKSB7XG5cdFx0XHRnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb24gKiB2aWV3ICogbW9kZWwgKiB2ZWM0KGluX3Bvc2l0aW9uLCAxLjApO1xuXHRcdH1cblx0YFxuXHRleHBvcnQgY29uc3QgZnJhZ21lbnQ6IHN0cmluZyA9IGBcblx0XHRwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcblxuXHRcdHVuaWZvcm0gdmVjMyBhbGJlZG87XG5cblx0XHR2b2lkIG1haW4oKSB7XG4gICAgICBcdFx0Z2xfRnJhZ0NvbG9yID0gdmVjNChhbGJlZG8sIDEuMCk7XG4gICAgXHR9XG5cdGBcbn1cblxuY29uc3QgQmFzaWM6IFNoYWRlclByb2dyYW1Tb3VyY2UgPSB7XG5cdHNvdXJjZXM6IFtcblx0XHR7XG5cdFx0XHRzb3VyY2U6IF9zb3VyY2VzLnZlcnRleCxcblx0XHRcdHR5cGU6IFNoYWRlclR5cGVzLlZFUlRFWCxcblx0XHRcdHVuaWZvcm1zOiBbJ21vZGVsJywgJ3ZpZXcnLCAncHJvamVjdGlvbiddXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzb3VyY2U6IF9zb3VyY2VzLmZyYWdtZW50LFxuXHRcdFx0dHlwZTogU2hhZGVyVHlwZXMuRlJBR01FTlQsXG5cdFx0XHR1bmlmb3JtczogWydhbGJlZG8nXVxuXHRcdH1cblx0XVxufVxuXG5leHBvcnQgeyBCYXNpYyB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2wvc2hhZGVycy9zaGFkZXItYmFzaWMudHMiLCJpbXBvcnQgeyBTaGFkZXJTb3VyY2UsIFNoYWRlclByb2dyYW1Tb3VyY2UsIFNoYWRlclR5cGVzIH0gZnJvbSAnLi4vc2hhZGVyL3NoYWRlcidcblxubmFtZXNwYWNlIF9zb3VyY2VzIHtcblx0ZXhwb3J0IGNvbnN0IHZlcnRleDogc3RyaW5nID0gYFxuXHRcdGF0dHJpYnV0ZSB2ZWMzIGluX3Bvc2l0aW9uO1xuXHRcdGF0dHJpYnV0ZSB2ZWMzIGluX25vcm1hbDtcblx0XHRhdHRyaWJ1dGUgdmVjMiBpbl91djtcblxuXHRcdHVuaWZvcm0gbWF0NCBtb2RlbDtcblx0XHR1bmlmb3JtIG1hdDQgdmlldztcblx0XHR1bmlmb3JtIG1hdDQgcHJvamVjdGlvbjtcblxuXHRcdHZhcnlpbmcgbWVkaXVtcCB2ZWMzIHZfcG9zaXRpb247XG5cdFx0dmFyeWluZyBtZWRpdW1wIHZlYzIgdl91djtcblx0XHR2YXJ5aW5nIG1lZGl1bXAgdmVjMyB2X25vcm1hbDtcblxuXHRcdHZvaWQgbWFpbigpIHtcblx0XHRcdGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbiAqIHZpZXcgKiBtb2RlbCAqIHZlYzQoaW5fcG9zaXRpb24sIDEuMCk7XG5cdFx0XHR2X3Bvc2l0aW9uID0gdmVjMyhtb2RlbCAqIHZlYzQoaW5fcG9zaXRpb24sIDEuMCkpO1xuXHRcdFx0dl91diA9IGluX3V2O1xuXHRcdFx0dl9ub3JtYWwgPSBpbl9ub3JtYWw7XG5cdFx0fVxuXHRgXG5cdGV4cG9ydCBjb25zdCBmcmFnbWVudDogc3RyaW5nID0gYFxuXG5cdFx0cHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XG5cblx0XHRjb25zdCBmbG9hdCBQSSA9IDMuMTQxNTkyNjUzNTk7XG5cblx0XHRmbG9hdCBkaXN0cmlidXRpb25fZ2d4KHZlYzMgTiwgdmVjMyBILCBmbG9hdCByb3VnaG5lc3MpO1xuXHRcdGZsb2F0IGdlb21ldHJ5X3NjaGxpY2tfZ2d4KGZsb2F0IE5kb3RWLCBmbG9hdCByb3VnaG5lc3MpO1xuXHRcdGZsb2F0IGdlb21ldHJ5X3NtaXRoKHZlYzMgTiwgdmVjMyBWLCB2ZWMzIEwsIGZsb2F0IHJvdWdobmVzcyk7XG5cdFx0dmVjMyBmcmVzbmVsX3NjaGxpY2soZmxvYXQgY29zX3RoZXRhLCB2ZWMzIEYwKTtcblxuXHRcdHZlYzMgUEJSKFxuXHRcdCAgICAgdmVjMyBub3JtYWxzLFxuXHRcdCAgICAgdmVjMyBhbGJlZG8sXG5cdFx0ICAgICBmbG9hdCByb3VnaG5lc3MsXG5cdFx0ICAgICBmbG9hdCBtZXRhbGxpYyxcblx0XHQgICAgIHZlYzMgY2FtX3Bvc2l0aW9uLFxuXHRcdCAgICAgdmVjMyB3b3JsZF9wb3NpdGlvbixcblx0XHQgICAgIHZlYzMgbGlnaHRfcG9zaXRpb24sXG5cdFx0ICAgICB2ZWMzIGxpZ2h0X2NvbG9yLFxuXHRcdCAgICAgYm9vbCBpc19kaXJlY3Rpb25hbCkge1xuXHRcdCAgICBcblx0XHQgICAgdmVjMyBGMCA9IHZlYzMoMC4wNCk7XG5cdFx0ICAgIEYwID0gbWl4KEYwLCBhbGJlZG8sIG1ldGFsbGljKTtcblx0XHQgICAgXG5cdFx0ICAgIHZlYzMgTiA9IG5vcm1hbGl6ZShub3JtYWxzKTtcblx0XHQgICAgdmVjMyBWID0gbm9ybWFsaXplKGNhbV9wb3NpdGlvbiAtIHdvcmxkX3Bvc2l0aW9uKTtcblx0XHQgICAgXG5cdFx0ICAgIHZlYzMgTDtcblxuXHRcdCAgICBpZiAoIWlzX2RpcmVjdGlvbmFsKSB7XG5cdFx0ICAgIFx0TCA9IG5vcm1hbGl6ZShsaWdodF9wb3NpdGlvbiAtIHdvcmxkX3Bvc2l0aW9uKTtcblx0XHQgICAgfSBlbHNlIHtcblx0XHQgICAgXHRMID0gbm9ybWFsaXplKC1saWdodF9wb3NpdGlvbik7XG5cdFx0ICAgIH1cblxuXHRcdCAgICB2ZWMzIEggPSBub3JtYWxpemUoViArIEwpO1xuXG5cdFx0ICAgIGZsb2F0IGF0dGVudWF0aW9uID0gMS4wO1xuXHRcdCAgICBcblx0XHQgICAgaWYgKCFpc19kaXJlY3Rpb25hbCkge1xuXHRcdCAgICBcdGZsb2F0IGRpc3RhbmNlID0gbGVuZ3RoKGxpZ2h0X3Bvc2l0aW9uIC0gd29ybGRfcG9zaXRpb24pO1xuXHRcdCAgICBcdGF0dGVudWF0aW9uID0gMS4wIC8gKGRpc3RhbmNlICogZGlzdGFuY2UgKiAwLjAwMDIpO1xuXHRcdCAgICB9XG5cdFx0ICAgIFxuXHRcdCAgICB2ZWMzIHJhZGlhbmNlID0gbGlnaHRfY29sb3IgKiBhdHRlbnVhdGlvbjtcblx0XHQgICAgXG5cdFx0ICAgIHZlYzMgRiA9IGZyZXNuZWxfc2NobGljayhtYXgoZG90KEgsIFYpLCAwLjApLCBGMCk7XG5cdFx0ICAgIGZsb2F0IE5ERiA9IGRpc3RyaWJ1dGlvbl9nZ3goTiwgSCwgcm91Z2huZXNzKTtcblx0XHQgICAgZmxvYXQgRyA9IGdlb21ldHJ5X3NtaXRoKE4sIFYsIEwsIHJvdWdobmVzcyk7XG5cdFx0ICAgIHZlYzMgbnVtZXIgPSB2ZWMzKE5ERikgKiB2ZWMzKEcpICogRjtcblx0XHQgICAgZmxvYXQgZGVub20gPSA0LjAgKiBtYXgoZG90KE4sIFYpLCAwLjApICogbWF4KGRvdChOLCBMKSwgMC4wKSArIDAuMDAxO1xuXHRcdCAgICB2ZWMzIHNwZWN1bGFyID0gbnVtZXIgLyBkZW5vbTtcblx0XHQgICAgXG5cdFx0ICAgIHZlYzMga1MgPSBGO1xuXHRcdCAgICB2ZWMzIGtEID0gdmVjMygxLjApIC0ga1M7XG5cdFx0ICAgIGtEICo9IDEuMCAtIG1ldGFsbGljO1xuXHRcdCAgICBcblx0XHQgICAgZmxvYXQgTmRvdEwgPSBtYXgoZG90KE4sIEwpLCAwLjApO1xuXHRcdCAgICByZXR1cm4gKGtEICogYWxiZWRvIC8gUEkgKyBzcGVjdWxhcikgKiByYWRpYW5jZSAqIE5kb3RMO1xuXHRcdH1cblxuXHRcdC8vXG5cdFx0Ly8gIEZyZXNuZWwgY29tcG9uZW50IChGKVxuXHRcdC8vXG5cblx0XHR2ZWMzIGZyZXNuZWxfc2NobGljayhmbG9hdCBjb3NUaGV0YSwgdmVjMyBGMCkge1xuXHRcdCAgICByZXR1cm4gRjAgKyAoMS4wIC0gRjApICogcG93KDEuMCAtIGNvc1RoZXRhLCA1LjApO1xuXHRcdH1cblxuXHRcdC8vXG5cdFx0Ly8gIE5vcm1hbCBkaXN0cmlidXRpb24gY29tcG9uZW50IChEKVxuXHRcdC8vXG5cblx0XHRmbG9hdCBkaXN0cmlidXRpb25fYmVja21hbih2ZWMzIGgsIHZlYzMgbiwgZmxvYXQgcm91Z2huZXNzKSB7XG5cdFx0ICAgIGZsb2F0IGEgPSByb3VnaG5lc3MgKiByb3VnaG5lc3M7XG5cdFx0ICAgIGZsb2F0IGEyID0gYSAqIGE7XG5cdFx0ICAgIGZsb2F0IG5fZG90X2ggPSBtYXgoZG90KG4sIGgpLCAwLjApO1xuXHRcdCAgICBmbG9hdCBuX2RvdF9oMiA9IG5fZG90X2ggKiBuX2RvdF9oO1xuXHRcdCAgICBmbG9hdCBwYXJ0X2EgPSAxLjAgLyAoUEkgKiBhMiAqIHBvdyhuX2RvdF9oLCA0LjApKTtcblx0XHQgICAgZmxvYXQgZXhwX2NvbXBvbmVudCA9IChuX2RvdF9oMiAtIDEuMCkgLyAoYTIgKiBuX2RvdF9oMik7XG5cdFx0ICAgIHJldHVybiBwYXJ0X2EgKiBleHAoZXhwX2NvbXBvbmVudCk7XG5cdFx0fVxuXG5cdFx0ZmxvYXQgZGlzdHJpYnV0aW9uX2dneCh2ZWMzIE4sIHZlYzMgSCwgZmxvYXQgcm91Z2huZXNzKSB7XG5cdFx0ICAgIGZsb2F0IGEgPSByb3VnaG5lc3MgKiByb3VnaG5lc3M7XG5cdFx0ICAgIGZsb2F0IGEyID0gYSAqIGE7XG5cdFx0ICAgIGZsb2F0IE5kb3RIID0gbWF4KGRvdChOLCBIKSwgMC4wKTtcblx0XHQgICAgZmxvYXQgTmRvdEgyID0gTmRvdEggKiBOZG90SDtcblx0XHQgICAgXG5cdFx0ICAgIGZsb2F0IGRlbm9tID0gKE5kb3RIMiAqIChhMi0xLjApICsgMS4wKTtcblx0XHQgICAgZGVub20gPSBQSSAqIGRlbm9tICogZGVub207XG5cdFx0ICAgIFxuXHRcdCAgICByZXR1cm4gYTIgLyBkZW5vbTtcblx0XHR9XG5cblx0XHQvL1xuXHRcdC8vICBHZW9tZXRyeSBkaXN0cmlidXRpb24gY29tcG9uZW50IChHKVxuXHRcdC8vXG5cblx0XHRmbG9hdCBnZW9tZXRyeV9zY2hsaWNrX2dneChmbG9hdCBOZG90ViwgZmxvYXQgcm91Z2huZXNzKSB7XG5cdFx0ICAgIGZsb2F0IHIgPSByb3VnaG5lc3MgKyAxLjA7XG5cdFx0ICAgIC8vICBkaXJlY3QgbGlnaHRcblx0XHQgICAgZmxvYXQgayA9IChyKnIpIC8gOC4wO1xuXHRcdCAgICAvLyAgSUJMXG5cdFx0ICAgIC8vICBmbG9hdCBrID0gKHJvdWdobmVzcyAqIHJvdWdobmVzcykgLyAyO1xuXHRcdCAgICBmbG9hdCBkZW5vbSA9IE5kb3RWICogKDEuMCAtIGspICsgaztcblx0XHQgICAgcmV0dXJuIE5kb3RWIC8gZGVub207XG5cdFx0fVxuXG5cdFx0ZmxvYXQgZ2VvbWV0cnlfc21pdGgodmVjMyBOLCB2ZWMzIFYsIHZlYzMgTCwgZmxvYXQgcm91Z2huZXNzKSB7XG5cdFx0ICAgIGZsb2F0IE5kb3RWID0gbWF4KGRvdChOLCBWKSwgMC4wKTtcblx0XHQgICAgZmxvYXQgTmRvdEwgPSBtYXgoZG90KE4sIEwpLCAwLjApO1xuXHRcdCAgICBmbG9hdCBnZ3gyID0gZ2VvbWV0cnlfc2NobGlja19nZ3goTmRvdFYsIHJvdWdobmVzcyk7XG5cdFx0ICAgIGZsb2F0IGdneDEgPSBnZW9tZXRyeV9zY2hsaWNrX2dneChOZG90TCwgcm91Z2huZXNzKTtcblx0XHQgICAgcmV0dXJuIGdneDEgKiBnZ3gyO1xuXHRcdH1cblxuXHRcdHN0cnVjdCBQb2ludExpZ2h0IHtcblx0XHRcdHZlYzMgcG9zaXRpb247XG5cdFx0XHR2ZWMzIGNvbG9yO1xuXHRcdFx0dmVjMyBtYXNrO1xuXHRcdH07XG5cblx0XHRzdHJ1Y3QgRGlyZWN0aW9uYWxMaWdodCB7XG5cdFx0XHR2ZWMzIGRpcmVjdGlvbjtcblx0XHRcdHZlYzMgY29sb3I7XG5cdFx0XHR2ZWMzIG1hc2s7XG5cdFx0fTtcblxuXHRcdGNvbnN0IGludCBuX3BvaW50X2xpZ2h0cyA9IDI7XG5cdFx0Y29uc3QgaW50IG5fZGlyZWN0aW9uYWxfbGlnaHRzID0gMTtcblxuXHRcdHVuaWZvcm0gUG9pbnRMaWdodCBwb2ludF9saWdodHNbbl9wb2ludF9saWdodHNdO1xuXHRcdHVuaWZvcm0gRGlyZWN0aW9uYWxMaWdodCBkaXJlY3Rpb25hbF9saWdodHNbbl9kaXJlY3Rpb25hbF9saWdodHNdO1xuXG5cdFx0dW5pZm9ybSB2ZWMzIGNhbV9wb3NpdGlvbjtcblxuXHRcdHVuaWZvcm0gdmVjMyBhbGJlZG87XG5cdFx0dW5pZm9ybSBmbG9hdCByb3VnaG5lc3M7XG5cdFx0dW5pZm9ybSBmbG9hdCBtZXRhbGxpYztcblxuXHRcdHZhcnlpbmcgbWVkaXVtcCB2ZWMzIHZfcG9zaXRpb247XG5cdFx0dmFyeWluZyBtZWRpdW1wIHZlYzIgdl91djtcblx0XHR2YXJ5aW5nIG1lZGl1bXAgdmVjMyB2X25vcm1hbDtcblxuXHRcdHZvaWQgbWFpbigpIHtcblxuXHRcdFx0dmVjMyBmaW5hbF9jb2xvciA9IGFsYmVkbztcblxuXHRcdFx0dmVjMyBMbyA9IHZlYzMoMC4wKTtcblxuXHRcdFx0Ly9cdHBvaW50IGxpZ2h0c1xuXG5cdFx0XHRmb3IgKGludCBpID0gMDsgaSA8IG5fcG9pbnRfbGlnaHRzOyBpKyspIHtcblx0XHRcdFx0Ym9vbCBpc19kaXJlY3Rpb25hbCA9IGZhbHNlO1xuXHRcdFx0XHR2ZWMzIHJlcyA9IFBCUih2X25vcm1hbCwgYWxiZWRvLCByb3VnaG5lc3MsIG1ldGFsbGljLCBcblx0XHRcdFx0XHRjYW1fcG9zaXRpb24sIHZfcG9zaXRpb24sIHBvaW50X2xpZ2h0c1tpXS5wb3NpdGlvbiwgcG9pbnRfbGlnaHRzW2ldLmNvbG9yLCBpc19kaXJlY3Rpb25hbCk7XG5cdFx0XHRcdHJlcyAqPSBwb2ludF9saWdodHNbaV0ubWFzaztcblx0XHRcdFx0TG8gKz0gcmVzO1xuXHRcdFx0fVxuXG5cdFx0XHQvL1x0ZGlyZWN0aW9uYWwgbGlnaHRzXG5cblx0XHRcdGZvciAoaW50IGkgPSAwOyBpIDwgbl9kaXJlY3Rpb25hbF9saWdodHM7IGkrKykge1xuXHRcdFx0XHRib29sIGlzX2RpcmVjdGlvbmFsID0gdHJ1ZTtcblx0XHRcdFx0dmVjMyByZXMgPSBQQlIodl9ub3JtYWwsIGFsYmVkbywgcm91Z2huZXNzLCBtZXRhbGxpYywgXG5cdFx0XHRcdFx0Y2FtX3Bvc2l0aW9uLCB2X3Bvc2l0aW9uLCBkaXJlY3Rpb25hbF9saWdodHNbaV0uZGlyZWN0aW9uLCBkaXJlY3Rpb25hbF9saWdodHNbaV0uY29sb3IsIGlzX2RpcmVjdGlvbmFsKTtcblx0XHRcdFx0cmVzICo9IGRpcmVjdGlvbmFsX2xpZ2h0c1tpXS5tYXNrO1xuXHRcdFx0XHRMbyArPSByZXM7XG5cdFx0XHR9XG5cblx0XHRcdHZlYzMgYW1iaWVudCA9IHZlYzMoMC4wMykgKiBhbGJlZG87XG5cblx0XHQgICAgZmluYWxfY29sb3IgPSBhbWJpZW50ICsgTG87XG5cdFx0ICAgIGZpbmFsX2NvbG9yID0gZmluYWxfY29sb3IgLyAoZmluYWxfY29sb3IgKyB2ZWMzKDEuMCkpO1xuXHRcdCAgICBmaW5hbF9jb2xvciA9IHBvdyhmaW5hbF9jb2xvciwgdmVjMygxLjAvMi4yKSk7XG5cbiAgICAgIFx0XHRnbF9GcmFnQ29sb3IgPSB2ZWM0KGZpbmFsX2NvbG9yLCAxLjApO1xuICAgIFx0fVxuXHRgXG59XG5cbmNvbnN0IFBCUjE6IFNoYWRlclByb2dyYW1Tb3VyY2UgPSB7XG5cdHNvdXJjZXM6IFtcblx0XHR7XG5cdFx0XHRzb3VyY2U6IF9zb3VyY2VzLnZlcnRleCxcblx0XHRcdHR5cGU6IFNoYWRlclR5cGVzLlZFUlRFWCxcblx0XHRcdHVuaWZvcm1zOiBbJ21vZGVsJywgJ3ZpZXcnLCAncHJvamVjdGlvbiddXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzb3VyY2U6IF9zb3VyY2VzLmZyYWdtZW50LFxuXHRcdFx0dHlwZTogU2hhZGVyVHlwZXMuRlJBR01FTlQsXG5cdFx0XHR1bmlmb3JtczogWydwb2ludCcsICdkaXJlY3Rpb25hbCcsICdkaXJlY3Rpb24nLCAncG9zaXRpb24nLCAnY29sb3InLCAnbWFzaycsXG5cdFx0XHRcdCAnYWxiZWRvJywgJ3JvdWdobmVzcycsICdtZXRhbGxpYycsICdjYW1lcmFfcG9zaXRpb24nXVxuXHRcdH1cblx0XVxufVxuXG5leHBvcnQgeyBQQlIxIH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC9zaGFkZXJzL3NoYWRlci1wYnIxLnRzIiwiaW1wb3J0IHsgU2hhZGVyU291cmNlLCBTaGFkZXJQcm9ncmFtU291cmNlLCBTaGFkZXJUeXBlcyB9IGZyb20gJy4uL3NoYWRlci9zaGFkZXInXG5cbm5hbWVzcGFjZSBfc291cmNlcyB7XG5cdGV4cG9ydCBjb25zdCB2ZXJ0ZXg6IHN0cmluZyA9IGBcblx0XHRhdHRyaWJ1dGUgdmVjMyBpbl9wb3NpdGlvbjtcblx0XHRhdHRyaWJ1dGUgdmVjMyBpbl9ub3JtYWw7XG5cdFx0YXR0cmlidXRlIHZlYzIgaW5fdXY7XG5cblx0XHR1bmlmb3JtIG1hdDQgcHJvamVjdGlvbjtcblx0XHR1bmlmb3JtIG1hdDQgdmlldztcblx0XHR1bmlmb3JtIG1hdDQgbW9kZWw7XG5cblx0XHR2YXJ5aW5nIG1lZGl1bXAgdmVjMiB2X3V2O1xuXHRcdHZhcnlpbmcgbWVkaXVtcCB2ZWMzIHZfbm9ybWFsO1xuXG5cdFx0dm9pZCBtYWluKCkge1xuXHRcdFx0bWF0NCB2aWV3VCA9IG1hdDQobWF0Myh2aWV3KSk7XG5cdFx0XHR2ZWM0IHBvcyA9IHByb2plY3Rpb24gKiB2aWV3VCAqIHZlYzQoaW5fcG9zaXRpb24sIDEuMCk7XG5cdFx0XHR2X3V2ID0gaW5fdXY7XG5cdFx0XHR2X25vcm1hbCA9IGluX25vcm1hbDtcblx0XHRcdGdsX1Bvc2l0aW9uID0gcG9zLnh5d3c7XG5cdFx0fVxuXHRgXG5cdGV4cG9ydCBjb25zdCBmcmFnbWVudDogc3RyaW5nID0gYFxuXG5cdFx0cHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XG5cblx0XHR2YXJ5aW5nIG1lZGl1bXAgdmVjMiB2X3V2O1xuXHRcdHZhcnlpbmcgbWVkaXVtcCB2ZWMzIHZfbm9ybWFsO1xuXG5cdFx0dW5pZm9ybSBzYW1wbGVyMkQgYWxiZWRvO1xuXG5cdFx0dm9pZCBtYWluKCkge1xuICAgICAgXHRcdGdsX0ZyYWdDb2xvciA9IHRleHR1cmUyRChhbGJlZG8sIHZfdXYpO1xuICAgIFx0fVxuXHRgXG59XG5cbmNvbnN0IFNreWJveDogU2hhZGVyUHJvZ3JhbVNvdXJjZSA9IHtcblx0c291cmNlczogW1xuXHRcdHtcblx0XHRcdHNvdXJjZTogX3NvdXJjZXMudmVydGV4LFxuXHRcdFx0dHlwZTogU2hhZGVyVHlwZXMuVkVSVEVYLFxuXHRcdFx0dW5pZm9ybXM6IFsndmlldycsICdwcm9qZWN0aW9uJ11cblx0XHR9LFxuXHRcdHtcblx0XHRcdHNvdXJjZTogX3NvdXJjZXMuZnJhZ21lbnQsXG5cdFx0XHR0eXBlOiBTaGFkZXJUeXBlcy5GUkFHTUVOVCxcblx0XHRcdHVuaWZvcm1zOiBbJ2FsYmVkbyddXG5cdFx0fVxuXHRdXG59XG5cbmV4cG9ydCB7IFNreWJveCB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2wvc2hhZGVycy9zaGFkZXItc2t5Ym94LnRzIiwiaW1wb3J0IHsgU2hhZGVyLCBTaGFkZXJQcm9ncmFtLCBTaGFkZXJTb3VyY2UsIFNoYWRlclByb2dyYW1Tb3VyY2UsIFNoYWRlclR5cGVzIH0gZnJvbSAnLi9zaGFkZXInXG5cbmNsYXNzIFNoYWRlckZhY3Rvcnkge1xuXHRwdWJsaWMgc3RhdGljIENyZWF0ZShnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCBwcm9ncmFtU291cmNlOiBTaGFkZXJQcm9ncmFtU291cmNlKTogU2hhZGVyUHJvZ3JhbSB7XG5cdFx0bGV0IHNoYWRlcnM6IEFycmF5PFNoYWRlcj4gPSBwcm9ncmFtU291cmNlLnNvdXJjZXMubWFwKChzb3VyY2U6IFNoYWRlclNvdXJjZSkgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBTaGFkZXIoZ2wsIHNvdXJjZSlcblx0XHR9KVxuXHRcdGxldCBwcm9ncmFtOiBTaGFkZXJQcm9ncmFtID0gbmV3IFNoYWRlclByb2dyYW0oZ2wpXG5cdFx0dHJ5IHtcblx0XHRcdHByb2dyYW0uYXR0YWNoKHNoYWRlcnMpXG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKVxuXHRcdFx0cmV0dXJuIG51bGxcblx0XHR9XG5cdFx0cmV0dXJuIHByb2dyYW1cblx0fVxufVxuXG5leHBvcnQgeyBTaGFkZXJGYWN0b3J5IH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC9zaGFkZXIvc2hhZGVyLWZhY3RvcnkudHMiLCJpbXBvcnQgeyBxdWF0LCBtYXQ0LCB2ZWMzLCBnbE1hdHJpeCB9IGZyb20gJ2dsLW1hdHJpeCdcbmltcG9ydCB7IHZlY3RvciwgdHlwZXMgfSBmcm9tICcuLi91dGlsL3V0aWwnXG5pbXBvcnQgKiBhcyBtYXRoIGZyb20gJy4uL21hdGgvd2dsLW1hdGgnXG5cbnR5cGUgZGlyZWN0aW9ucyA9ICdmb3J3YXJkcycgfCAnYmFja3dhcmRzJyB8ICdsZWZ0JyB8ICdyaWdodCdcblxuY2xhc3MgQ2FtZXJhIHtcblxuXHR5YXc6IG51bWJlciA9IC05MC4wXG5cdHBpdGNoOiBudW1iZXIgPSAwLjBcblx0cG9zaXRpb246IHZlYzNcblx0dXA6IHZlYzNcblx0d29ybGRVcDogdmVjM1xuXHRyaWdodDogdmVjM1xuXHRmcm9udDogdmVjM1xuXHRtb3ZlbWVudFNwZWVkOiBudW1iZXIgPSAyLjVcblx0cm90YXRpb25TZW5zaXRpdml0eTogbnVtYmVyID0gMC4xXG5cdHRhcmdldDogdmVjMyB8IG51bGwgPSBudWxsXG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5wb3NpdGlvbiA9IHZlYzMuZnJvbVZhbHVlcygwLCAwLCAwKVxuXHRcdHRoaXMudXAgPSB2ZWMzLmZyb21WYWx1ZXMoMCwgMSwgMClcblx0XHR0aGlzLndvcmxkVXAgPSB2ZWMzLmZyb21WYWx1ZXMoMCwgMSwgMClcblx0XHR0aGlzLnJpZ2h0ID0gdmVjMy5jcmVhdGUoKVxuXHRcdHRoaXMuZnJvbnQgPSB2ZWMzLmZyb21WYWx1ZXMoMCwgMCwgLTEpXG5cdFx0dGhpcy51cGRhdGVDYW1lcmFWZWN0b3JzKClcblx0fVxuXG5cdHB1YmxpYyBnZXRWaWV3TWF0cml4KCk6IG1hdDQge1xuXHRcdGxldCBoYXNUYXJnZXQgPSB0aGlzLnRhcmdldCAhPT0gbnVsbFxuXHRcdGxldCB0YXJnZXQ6IHZlYzMgPSBoYXNUYXJnZXQgPyB0aGlzLnRhcmdldCA6IHZlYzMuY3JlYXRlKClcblx0XHRsZXQgdmlldzogbWF0NCA9IG1hdDQuY3JlYXRlKClcblx0XHRsZXQgcG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uXG5cdFx0bGV0IGZyb250ID0gdGhpcy5mcm9udFxuXHRcdGxldCB1cCA9IHRoaXMudXBcblx0XHRpZiAoIWhhc1RhcmdldClcblx0XHRcdHZlYzMuYWRkKHRhcmdldCwgcG9zaXRpb24sIGZyb250KVxuXHRcdG1hdGgubG9va0F0KHZpZXcsIHBvc2l0aW9uLCB0YXJnZXQsIHVwKVxuXHRcdHJldHVybiB2aWV3XG5cdH1cblxuXHRwdWJsaWMgbG9va0F0KHdoZXJlOiB0eXBlcy52ZWMzQ29udmVydGlibGUgfCBudWxsKSB7XG5cdFx0aWYgKHdoZXJlID09PSBudWxsKSB7XG5cdFx0XHR0aGlzLnRhcmdldCA9IG51bGxcblx0XHRcdHJldHVyblxuXHRcdH1cblx0XHR0aGlzLnRhcmdldCA9IHZlY3Rvci5yZXF1aXJlVmVjMyh3aGVyZSlcblx0fVxuXG5cdHB1YmxpYyBzZXRQb3NpdGlvbihwb3NpdGlvbjogdHlwZXMudmVjM0NvbnZlcnRpYmxlKSB7XG5cdFx0dGhpcy5wb3NpdGlvbiA9IHZlY3Rvci5yZXF1aXJlVmVjMyhwb3NpdGlvbilcblx0fVxuXG5cdHB1YmxpYyBzZXRQaXRjaChwaXRjaDogbnVtYmVyKSB7XG5cdFx0dGhpcy5waXRjaCA9IHRoaXMuY29uc3RyYWluUGl0Y2gocGl0Y2gpXG5cdFx0dGhpcy51cGRhdGVDYW1lcmFWZWN0b3JzKClcblx0fVxuXG5cdHB1YmxpYyBzZXRZYXcoeWF3OiBudW1iZXIpIHtcblx0XHR0aGlzLnlhdyA9IHlhd1xuXHRcdHRoaXMudXBkYXRlQ2FtZXJhVmVjdG9ycygpXG5cdH1cblxuXHRwdWJsaWMgbW92ZShkaXJlY3Rpb246IGRpcmVjdGlvbnMsIGR0OiBudW1iZXIsIHNwZWVkPzogbnVtYmVyKSB7XG5cdFx0aWYgKCFzcGVlZClcblx0XHRcdHNwZWVkID0gdGhpcy5tb3ZlbWVudFNwZWVkXG5cblx0XHRsZXQgdmVsOiBudW1iZXIgPSBzcGVlZCAqIGR0XG5cdFx0bGV0IHZlbG9jaXR5OiB2ZWMzID0gdmVjMy5mcm9tVmFsdWVzKHZlbCwgdmVsLCB2ZWwpXG5cdFx0bGV0IGZyb250XyA9IHZlYzMuY3JlYXRlKClcblx0XHRsZXQgcmlnaHRfID0gdmVjMy5jcmVhdGUoKVxuXHRcdGxldCBmcm9udCA9IHRoaXMuZnJvbnRcblx0XHRsZXQgcmlnaHQgPSB0aGlzLnJpZ2h0XG5cdFx0bGV0IHBvc2l0aW9uID0gdGhpcy5wb3NpdGlvblxuXG5cdFx0dmVjMy5jb3B5KGZyb250XywgZnJvbnQpXG5cdFx0dmVjMy5jb3B5KHJpZ2h0XywgcmlnaHQpXG5cblx0XHRpZiAoZGlyZWN0aW9uID09PSAnZm9yd2FyZHMnKSB7XG5cdFx0XHR2ZWMzLmFkZChwb3NpdGlvbiwgcG9zaXRpb24sIHZlYzMubXVsdGlwbHkoZnJvbnRfLCBmcm9udF8sIHZlbG9jaXR5KSlcblx0XHR9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2JhY2t3YXJkcycpIHtcblx0XHRcdHZlYzMuc3ViKHBvc2l0aW9uLCBwb3NpdGlvbiwgdmVjMy5tdWx0aXBseShmcm9udF8sIGZyb250XywgdmVsb2NpdHkpKVxuXHRcdH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnbGVmdCcpIHtcblx0XHRcdHZlYzMuc3ViKHBvc2l0aW9uLCBwb3NpdGlvbiwgdmVjMy5tdWx0aXBseShyaWdodF8sIHJpZ2h0XywgdmVsb2NpdHkpKVxuXHRcdH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG5cdFx0XHR2ZWMzLmFkZChwb3NpdGlvbiwgcG9zaXRpb24sIHZlYzMubXVsdGlwbHkocmlnaHRfLCByaWdodF8sIHZlbG9jaXR5KSlcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgcm90YXRlKHg6IG51bWJlciwgeTogbnVtYmVyLCBzZW5zaXRpdml0eT86IG51bWJlcikge1xuXHRcdGlmICghc2Vuc2l0aXZpdHkpXG5cdFx0XHRzZW5zaXRpdml0eSA9IHRoaXMucm90YXRpb25TZW5zaXRpdml0eVxuXG5cdFx0dGhpcy55YXcgKz0gKHggKiBzZW5zaXRpdml0eSlcblx0XHR0aGlzLnBpdGNoICs9ICh5ICogc2Vuc2l0aXZpdHkpXG5cdFx0dGhpcy5waXRjaCA9IHRoaXMuY29uc3RyYWluUGl0Y2godGhpcy5waXRjaClcblxuXHRcdHRoaXMudXBkYXRlQ2FtZXJhVmVjdG9ycygpXG5cdH1cblxuXHRwcml2YXRlIGNvbnN0cmFpblBpdGNoKHBpdGNoOiBudW1iZXIpOiBudW1iZXIge1xuXHRcdGlmIChwaXRjaCA+IDg5LjApXG5cdFx0XHRwaXRjaCA9IDg5LjBcblx0XHRpZiAocGl0Y2ggPCAtODkuMClcblx0XHRcdHBpdGNoID0gLTg5LjBcblx0XHRyZXR1cm4gcGl0Y2hcblx0fVxuXG5cdHByaXZhdGUgdXBkYXRlQ2FtZXJhVmVjdG9ycygpOiB2b2lkIHtcblx0XHRsZXQgZnJvbnRfOiB2ZWMzID0gdmVjMy5jcmVhdGUoKVxuXHRcdGxldCByaWdodCA9IHRoaXMucmlnaHRcblx0XHRsZXQgZnJvbnQgPSB0aGlzLmZyb250XG5cdFx0bGV0IHVwID0gdGhpcy51cFxuXHRcdGxldCB3b3JsZFVwID0gdGhpcy53b3JsZFVwXG5cdFx0bGV0IHBpdGNoID0gdGhpcy5waXRjaFxuXHRcdGxldCB5YXcgPSB0aGlzLnlhd1xuXG5cdFx0ZnJvbnRfWzBdID0gTWF0aC5jb3MoZ2xNYXRyaXgudG9SYWRpYW4oeWF3KSkgKiBNYXRoLmNvcyhnbE1hdHJpeC50b1JhZGlhbihwaXRjaCkpXG5cdFx0ZnJvbnRfWzFdID0gTWF0aC5zaW4oZ2xNYXRyaXgudG9SYWRpYW4ocGl0Y2gpKVxuXHRcdGZyb250X1syXSA9IE1hdGguc2luKGdsTWF0cml4LnRvUmFkaWFuKHlhdykpXG5cblx0XHR2ZWMzLmNvcHkoZnJvbnQsIGZyb250XylcblxuXHRcdHZlYzMuY3Jvc3MocmlnaHQsIGZyb250LCB3b3JsZFVwKVxuXHRcdHZlYzMubm9ybWFsaXplKHJpZ2h0LCByaWdodClcblx0XHR2ZWMzLmNyb3NzKHVwLCByaWdodCwgZnJvbnQpXG5cdFx0dmVjMy5ub3JtYWxpemUodXAsIHVwKVxuXHR9XG5cbn1cblxuZXhwb3J0IHsgQ2FtZXJhLCBkaXJlY3Rpb25zIH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC9jYW1lcmEvY2FtZXJhLnRzIiwiaW1wb3J0IHsgTW9kZWwgfSBmcm9tICcuLi9tb2RlbC9tb2RlbCdcbmltcG9ydCB7IE1lc2ggfSBmcm9tICcuLi9tZXNoL21lc2gnXG5pbXBvcnQgKiBhcyBMaWdodCBmcm9tICcuLi9saWdodC9saWdodCdcblxuZXhwb3J0IHR5cGUgU2NlbmVBZGRhYmxlID0gTW9kZWwgfCBMaWdodC5MaWdodFxuXG5jbGFzcyBTY2VuZSB7XG5cblx0cHJpdmF0ZSBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0XG5cblx0cHVibGljIG1vZGVsczogQXJyYXk8TW9kZWw+ID0gW11cblx0cHVibGljIGxpZ2h0czogQXJyYXk8TGlnaHQuTGlnaHQ+ID0gW11cblx0cHVibGljIG1vZGVsc1NvcnRlZDogYm9vbGVhbiA9IGZhbHNlXG5cdHB1YmxpYyBiYWNrZ3JvdW5kOiBNb2RlbFxuXG5cdGNvbnN0cnVjdG9yKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQpIHtcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLmJhY2tncm91bmQgPSBudWxsXG5cdH1cblxuXHRwdWJsaWMgc29ydE1vZGVscyhjb21wYXJhdG9yOiAoYTogTW9kZWwsIGI6IE1vZGVsKSA9PiBudW1iZXIpIHtcblx0XHR0aGlzLm1vZGVscy5zb3J0KGNvbXBhcmF0b3IpXG5cdFx0dGhpcy5tb2RlbHNTb3J0ZWQgPSB0cnVlXG5cdH1cblxuXHRwdWJsaWMgYWRkKGVsZW1lbnQ6IFNjZW5lQWRkYWJsZSB8IEFycmF5PFNjZW5lQWRkYWJsZT4pOiB2b2lkIHtcblx0XHRpZiAoQXJyYXkuaXNBcnJheShlbGVtZW50KSkge1xuXHRcdFx0aWYgKGVsZW1lbnQubGVuZ3RoID09PSAwKVxuXHRcdFx0XHRyZXR1cm5cblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzXG5cdFx0XHRlbGVtZW50Lm1hcChlbCA9PiBzZWxmLmFkZE9uZShlbCkpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuYWRkT25lKGVsZW1lbnQpXG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBhZGRPbmUoZWxlbWVudDogU2NlbmVBZGRhYmxlKTogdm9pZCB7XG5cdFx0aWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBNb2RlbCkge1xuXHRcdFx0dGhpcy5hZGRNb2RlbChlbGVtZW50KVxuXHRcdH0gZWxzZSBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIExpZ2h0LkxpZ2h0KSB7XG5cdFx0XHR0aGlzLmFkZExpZ2h0KGVsZW1lbnQpXG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBhZGRMaWdodChsaWdodDogTGlnaHQuTGlnaHQpOiB2b2lkIHtcblx0XHR0aGlzLmxpZ2h0cy5wdXNoKGxpZ2h0KVxuXHR9XG5cblx0cHJpdmF0ZSBhZGRNb2RlbChtb2RlbDogTW9kZWwpOiB2b2lkIHtcblx0XHR0aGlzLm1vZGVscy5wdXNoKG1vZGVsKVxuXHRcdHRoaXMubW9kZWxzU29ydGVkID0gZmFsc2Vcblx0fVxufVxuXG5leHBvcnQgeyBTY2VuZSB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2wvc2NlbmUvc2NlbmUudHMiLCJpbXBvcnQgeyB0aW1lIH0gZnJvbSAnLi4vdXRpbC91dGlsJ1xuXG5jbGFzcyBGcmFtZVN0YXRzIHtcblxuXHRwcml2YXRlIHRpbWVyOiB0aW1lLkRlbHRhVGltZXJcblx0bWluOiBudW1iZXIgPSBJbmZpbml0eVxuXHRtYXg6IG51bWJlciA9IC1JbmZpbml0eVxuXHRtZWFuOiBudW1iZXIgPSAwXG5cdGl0ZXJhdGlvbnM6IG51bWJlciA9IDBcblx0Y3VycmVudDogbnVtYmVyID0gTmFOXG5cdHBsYWNlczogbnVtYmVyID0gMlxuXG5cdGVsOiBIVE1MRWxlbWVudFxuXHR2aXNpYmxlOiBib29sZWFuID0gdHJ1ZVxuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMudGltZXIgPSBuZXcgdGltZS5EZWx0YVRpbWVyKClcblx0XHR0aGlzLnRpbWVyLnNldFJhdGlvKHRpbWUucmF0aW9zLnMoKSlcblx0XHR0aGlzLnNldHVwRWxlbWVudCgpXG5cdH1cblxuXHRwcml2YXRlIHNldHVwRWxlbWVudCgpIHtcblx0XHRjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXNcblx0XHRlbC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCdcblx0XHRlbC5zdHlsZS5sZWZ0ID0gJzBweCdcblx0XHRlbC5zdHlsZS50b3AgPSAnMHB4J1xuXHRcdGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdibGFjaydcblx0XHRlbC5zdHlsZS5vcGFjaXR5ID0gJzAuNSdcblx0XHRlbC5zdHlsZS5jb2xvciA9ICd3aGl0ZSdcblx0XHRlbC5vbmNsaWNrID0gKGV2dDogTW91c2VFdmVudCkgPT4ge1xuXHRcdFx0ZWwuc3R5bGUub3BhY2l0eSA9IHNlbGYudmlzaWJsZSA/ICcwJyA6ICcwLjUnXG5cdFx0XHRzZWxmLnZpc2libGUgPSAhc2VsZi52aXNpYmxlXG5cdFx0fVxuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpXG5cdFx0dGhpcy5lbCA9IGVsXG5cdH1cblxuXHRwdWJsaWMgdXBkYXRlKCkge1xuXHRcdGxldCB3YXNGaXJzdCA9IHRoaXMudGltZXIuZmlyc3RVcGRhdGUoKVxuXHRcdHRoaXMudGltZXIudXBkYXRlKClcblx0XHRpZiAod2FzRmlyc3QpXG5cdFx0XHRyZXR1cm5cblxuXHRcdGxldCBkdCA9IHRoaXMudGltZXIuZGVsdGEoKVxuXHRcdGlmIChkdCA8IHRoaXMubWluKSB0aGlzLm1pbiA9IGR0XG5cdFx0aWYgKGR0ID4gdGhpcy5tYXgpIHRoaXMubWF4ID0gZHRcblxuXHRcdHRoaXMuY3VycmVudCA9IGR0XG5cdFx0dGhpcy5tZWFuID0gKCh0aGlzLm1lYW4gKiB0aGlzLml0ZXJhdGlvbnMpICsgZHQpIC8gKHRoaXMuaXRlcmF0aW9ucyArIDEpXG5cdFx0dGhpcy5pdGVyYXRpb25zKytcblxuXHRcdHRoaXMuZWwuaW5uZXJIVE1MID0gdGhpcy5nZXRTdHJpbmcoKVxuXHR9XG5cblx0cHVibGljIGdldFN0cmluZygpOiBzdHJpbmcge1xuXHRcdGNvbnN0IHBsYWNlcyA9IHRoaXMucGxhY2VzXG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXNcblxuXHRcdGNvbnN0IGN1cnJlbnQgPSB0aGlzLmdldFRpbWVGUFNTdHJpbmcoJ2N1cnJlbnQnLCB0aGlzLmN1cnJlbnQpXG5cdFx0Y29uc3QgbWluID0gdGhpcy5nZXRUaW1lRlBTU3RyaW5nKCdtaW4nLCB0aGlzLm1pbilcblx0XHRjb25zdCBtYXggPSB0aGlzLmdldFRpbWVGUFNTdHJpbmcoJ21heCcsIHRoaXMubWF4KVxuXHRcdGNvbnN0IG1lYW4gPSB0aGlzLmdldFRpbWVGUFNTdHJpbmcoJ21lYW4nLCB0aGlzLm1lYW4pXG5cblx0XHRyZXR1cm4gY3VycmVudCArIG1pbiArIG1heCArIG1lYW5cblx0fVxuXG5cdHByaXZhdGUgZ2V0VGltZUZQU1N0cmluZyhraW5kOiBzdHJpbmcsIHZhbDogbnVtYmVyKTogc3RyaW5nIHtcblx0XHRsZXQgdGltZVVuaXRzID0gdGhpcy50aW1lci5nZXRSYXRpbygpLmFsaWFzXG5cdFx0Y29uc3QgbXMgPSBgJHtraW5kfTogJHsodmFsKS50b0ZpeGVkKHRoaXMucGxhY2VzKX0gJHt0aW1lVW5pdHN9LCBgXG5cdFx0Y29uc3QgZnBzID0gYCR7KDEvdmFsKS50b0ZpeGVkKHRoaXMucGxhY2VzKX0gRlBTPGJyPmBcblx0XHRyZXR1cm4gbXMgKyBmcHNcblx0fVxuXG59XG5cbmV4cG9ydCB7IEZyYW1lU3RhdHMgfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2dsL2NvbW1vbi9mcmFtZS1zdGF0cy50cyIsImltcG9ydCBmdW5jdGlvbmFsIGZyb20gJy4vZnVuY3Rpb25hbC1yZW5kZXJlcidcblxuZXhwb3J0IHtcblx0ZnVuY3Rpb25hbFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2dsL3JlbmRlcmVycy9yZW5kZXJlcnMudHMiLCJpbXBvcnQgYmFzZSBmcm9tICcuL2Jhc2UtcmVuZGVyZXInXG5pbXBvcnQgKiBhcyBTaGFkZXIgZnJvbSAnLi4vc2hhZGVyL3NoYWRlcidcbmltcG9ydCAqIGFzIExpZ2h0IGZyb20gJy4uL2xpZ2h0L2xpZ2h0J1xuaW1wb3J0IHsgTWVzaCB9IGZyb20gJy4uL21lc2gvbWVzaCdcbmltcG9ydCAqIGFzIHVuaWZvcm1zIGZyb20gJy4uL3NoYWRlci91bmlmb3JtcydcbmltcG9ydCB7IE1vZGVsIH0gZnJvbSAnLi4vbW9kZWwvbW9kZWwnXG5pbXBvcnQgeyBDYW1lcmEgfSBmcm9tICcuLi9jYW1lcmEvY2FtZXJhJ1xuaW1wb3J0IHsgbWF0NCB9IGZyb20gJ2dsLW1hdHJpeCdcbmltcG9ydCAqIGFzIE1hdGVyaWFsIGZyb20gJy4uL21hdGVyaWFsL21hdGVyaWFsJ1xuaW1wb3J0ICogYXMgdGV4dHVyZSBmcm9tICcuLi90ZXh0dXJlL3RleHR1cmUnXG5pbXBvcnQgeyB0eXBlcyB9IGZyb20gJy4uL3V0aWwvdXRpbCdcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi4vc2NlbmUvc2NlbmUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgYmFzZSB7XG5cblx0bGFzdE1lc2g6IE1lc2ggPSBudWxsXG5cdGxhc3RQcm9ncmFtOiBTaGFkZXIuU2hhZGVyUHJvZ3JhbSA9IG51bGxcblx0bGFzdE1hdGVyaWFsOiBNYXRlcmlhbC5NYXRlcmlhbCA9IG51bGxcblxuXHRjb25zdHJ1Y3RvcihnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0KSB7XG5cdFx0c3VwZXIoZ2wpXG5cdH1cblxuXHRwdWJsaWMgcmVuZGVyKHNjZW5lOiBTY2VuZSwgY2FtZXJhOiBDYW1lcmEpIHtcblx0XHR0aGlzLmNsZWFyKClcblxuXHRcdGlmIChzY2VuZS5tb2RlbHMubGVuZ3RoID09PSAwKSByZXR1cm5cblx0XHRpZiAoIXNjZW5lLm1vZGVsc1NvcnRlZCkgc2NlbmUuc29ydE1vZGVscyhNb2RlbC5jb21wYXJlTWVzaFVVSUQpXG5cblx0XHR0aGlzLmNvbmZpZ3VyZUNhbWVyYShzY2VuZS5tb2RlbHNbMF0ucHJvZ3JhbSwgY2FtZXJhKVxuXHRcdHRoaXMuY29uZmlndXJlTGlnaHRzKHNjZW5lLm1vZGVsc1swXS5wcm9ncmFtLCBzY2VuZS5saWdodHMpXG5cblx0XHRmb3IgKGxldCBtb2RlbCBvZiBzY2VuZS5tb2RlbHMpIHtcblx0XHRcdHRoaXMuZHJhd01vZGVsKHNjZW5lLCBjYW1lcmEsIG1vZGVsKVxuXHRcdH1cblxuXHRcdHRoaXMuZHJhd0JhY2tncm91bmQoc2NlbmUsIGNhbWVyYSlcblx0fVxuXG5cdHByaXZhdGUgZHJhd0JhY2tncm91bmQoc2NlbmU6IFNjZW5lLCBjYW1lcmE6IENhbWVyYSk6IHZvaWQge1xuXHRcdGlmICghc2NlbmUuYmFja2dyb3VuZClcblx0XHRcdHJldHVyblxuXHRcdGNvbnN0IGdsID0gdGhpcy5nbFxuXHRcdGdsLmRlcHRoRnVuYyhnbC5MRVFVQUwpXG5cdFx0dGhpcy5kcmF3TW9kZWwoc2NlbmUsIGNhbWVyYSwgc2NlbmUuYmFja2dyb3VuZClcblx0XHRnbC5kZXB0aEZ1bmMoZ2wuTEVTUylcblx0fVxuXG5cdHByaXZhdGUgZHJhd01vZGVsKHNjZW5lOiBTY2VuZSwgY2FtZXJhOiBDYW1lcmEsIG1vZGVsOiBNb2RlbCk6IHZvaWQge1xuXHRcdG1vZGVsLm9uQmVmb3JlUmVuZGVyKClcblx0XHRjb25zdCBwcm9nID0gbW9kZWwucHJvZ3JhbVxuXHRcdGNvbnN0IG1hdGVyaWFsID0gbW9kZWwubWF0ZXJpYWxcblx0XHRjb25zdCBtZXNoID0gbW9kZWwubWVzaFxuXHRcdGlmICh0aGlzLmNvbmRpdGlvbmFsQmluZFByb2dyYW0ocHJvZykpIHtcblx0XHRcdHRoaXMuY29uZmlndXJlQ2FtZXJhKHByb2csIGNhbWVyYSlcblx0XHRcdHRoaXMuY29uZmlndXJlTGlnaHRzKHByb2csIHNjZW5lLmxpZ2h0cylcblx0XHR9XG5cdFx0dGhpcy5jb25maWd1cmVUcmFuc2Zvcm0ocHJvZywgbW9kZWwuZ2V0V29ybGRNYXRyaXgoKSlcblx0XHR0aGlzLmNvbmZpZ3VyZU1hdGVyaWFsKHByb2csIG1hdGVyaWFsKVxuXHRcdHRoaXMuZHJhdyhwcm9nLCBtZXNoKVxuXHRcdG1vZGVsLm9uQWZ0ZXJSZW5kZXIoKVxuXHR9XG5cblx0cHVibGljIGRyYXcocHJvZzogU2hhZGVyLlNoYWRlclByb2dyYW0sIG1lc2g6IE1lc2gpOiB2b2lkIHtcblx0XHR0aGlzLmNvbmRpdGlvbmFsQmluZFByb2dyYW0ocHJvZylcblx0XHR0aGlzLmNvbmRpdGlvbmFsQmluZE1lc2gocHJvZywgbWVzaClcblx0XHRtZXNoLmRyYXcoKVxuXHR9XG5cblx0cHVibGljIGNvbmZpZ3VyZVRyYW5zZm9ybShwcm9nOiBTaGFkZXIuU2hhZGVyUHJvZ3JhbSwgdHJhbnNmb3JtTWF0cml4OiBtYXQ0KTogdm9pZCB7XG5cdFx0dGhpcy5jb25kaXRpb25hbEJpbmRQcm9ncmFtKHByb2cpXG5cdFx0dGhpcy5jb25kaXRpb25hbFNldFVuaWZvcm0ocHJvZywgJ21vZGVsJywgdHJhbnNmb3JtTWF0cml4KVxuXHR9XG5cblx0cHVibGljIGNvbmZpZ3VyZUNhbWVyYShwcm9nOiBTaGFkZXIuU2hhZGVyUHJvZ3JhbSwgY2FtZXJhOiBDYW1lcmEpOiB2b2lkIHtcblx0XHR0aGlzLmNvbmRpdGlvbmFsQmluZFByb2dyYW0ocHJvZylcblx0XHR0aGlzLmNvbmRpdGlvbmFsU2V0VW5pZm9ybShwcm9nLCAncHJvamVjdGlvbicsIHRoaXMucHJvamVjdGlvbilcblx0XHR0aGlzLmNvbmRpdGlvbmFsU2V0VW5pZm9ybShwcm9nLCAndmlldycsIGNhbWVyYS5nZXRWaWV3TWF0cml4KCkpXG5cdFx0dGhpcy5jb25kaXRpb25hbFNldFVuaWZvcm0ocHJvZywgJ2NhbWVyYV9wb3NpdGlvbicsIGNhbWVyYS5wb3NpdGlvbilcblx0fVxuXG5cdHB1YmxpYyBjb25maWd1cmVNYXRlcmlhbChwcm9nOiBTaGFkZXIuU2hhZGVyUHJvZ3JhbSwgbWF0ZXJpYWw6IE1hdGVyaWFsLk1hdGVyaWFsKTogdm9pZCB7XG5cdFx0dGhpcy5jb25kaXRpb25hbEJpbmRQcm9ncmFtKHByb2cpXG5cdFx0bGV0IGlzTmV3ID0gdGhpcy5jaGVja05ld01hdGVyaWFsKG1hdGVyaWFsKVxuXHRcdGxldCBhdHRyczogQXJyYXk8TWF0ZXJpYWwuQXR0cmlidXRlPiA9IG1hdGVyaWFsLmVudW1lcmF0ZUF0dHJpYnV0ZXMoKVxuXHRcdGZvciAobGV0IGF0dHIgb2YgYXR0cnMpIHtcblx0XHRcdGlmIChpc05ldyB8fCBhdHRyLmlzRGlydHkpIHtcblx0XHRcdFx0dGhpcy5jb25kaXRpb25hbFNldFVuaWZvcm0ocHJvZywgYXR0ci5uYW1lLCBhdHRyLmdldFZhbHVlKCkpXG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZXMuaXNUZXh0dXJlKGF0dHIucGVla1ZhbHVlKCkpKSB7XG5cdFx0XHRcdHRoaXMuY29uZmlndXJlVGV4dHVyZShwcm9nLCBhdHRyLmdldFZhbHVlKCkgYXMgdGV4dHVyZS5UZXh0dXJlKVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBjb25maWd1cmVUZXh0dXJlKHByb2c6IFNoYWRlci5TaGFkZXJQcm9ncmFtLCB0ZXg6IHRleHR1cmUuVGV4dHVyZSk6IHZvaWQge1xuXHRcdHRoaXMuY29uZGl0aW9uYWxCaW5kUHJvZ3JhbShwcm9nKVxuXHRcdHRleC5iaW5kKClcblx0fVxuXG5cdHB1YmxpYyBjb25maWd1cmVMaWdodChwcm9nOiBTaGFkZXIuU2hhZGVyUHJvZ3JhbSwgbGlnaHQ6IExpZ2h0LkxpZ2h0KTogdm9pZCB7XG5cdFx0dGhpcy5jb25kaXRpb25hbEJpbmRQcm9ncmFtKHByb2cpXG5cdFx0bGV0IGFjdGl2ZTogYm9vbGVhbiA9IGxpZ2h0LmFjdGl2ZVxuXHRcdGlmICghYWN0aXZlKSByZXR1cm5cblx0XHRsZXQgaW5kZXggPSBsaWdodC5nZXRJbmRleCgpXG5cdFx0bGV0IGF0dHJzOiBBcnJheTxMaWdodC5BdHRyaWJ1dGU+ID0gbGlnaHQuZW51bWVyYXRlQXR0cmlidXRlcygpXG5cdFx0Zm9yIChsZXQgYXR0ciBvZiBhdHRycykge1xuXHRcdFx0aWYgKGF0dHIuaXNEaXJ0eSkge1xuXHRcdFx0XHRsZXQgdW4gPSB1bmlmb3Jtcy5NYXAuZ2V0VW5pZm9ybShhdHRyLm5hbWUpXG5cdFx0XHRcdGxldCBtYXBwZWROYW1lID0gdW5pZm9ybXMuTWFwLmdldFVuaWZvcm0obGlnaHQuZ2V0TmFtZSgpKVxuXHRcdFx0XHRsZXQgdW5mID0gYCR7bWFwcGVkTmFtZX1bJHtpbmRleH1dLiR7dW59YFxuXHRcdFx0XHRpZiAocHJvZy5oYXNVbmlmb3JtKGxpZ2h0LmdldE5hbWUoKSkpIHtcblx0XHRcdFx0XHRwcm9nLnNldFVuaWZvcm0odW5mLCBhdHRyLmdldFZhbHVlKCkpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNvbmZpZ3VyZUxpZ2h0cyhwcm9nOiBTaGFkZXIuU2hhZGVyUHJvZ3JhbSwgbGlnaHRzOiBBcnJheTxMaWdodC5MaWdodD4pOiB2b2lkIHtcblx0XHRmb3IgKGxldCBsaWdodCBvZiBsaWdodHMpIHtcblx0XHRcdHRoaXMuY29uZmlndXJlTGlnaHQocHJvZywgbGlnaHQpXG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjaGVja05ld01hdGVyaWFsKG1hdGVyaWFsOiBNYXRlcmlhbC5NYXRlcmlhbCk6IGJvb2xlYW4ge1xuXHRcdGxldCBpc051bGxMYXN0TWF0ZXJpYWw6IGJvb2xlYW4gPSB0aGlzLmxhc3RNYXRlcmlhbCA9PT0gbnVsbFxuXHRcdGxldCBpc05ld01hdGVyaWFsOiBib29sZWFuID0gaXNOdWxsTGFzdE1hdGVyaWFsIHx8IFxuXHRcdFx0IU1hdGVyaWFsLk1hdGVyaWFsLmVxdWFscyhtYXRlcmlhbCwgdGhpcy5sYXN0TWF0ZXJpYWwpXG5cdFx0dGhpcy5sYXN0TWF0ZXJpYWwgPSBtYXRlcmlhbFxuXHRcdHJldHVybiBpc05ld01hdGVyaWFsXG5cdH1cblxuXHRwcml2YXRlIGNvbmRpdGlvbmFsQmluZE1lc2gocHJvZzogU2hhZGVyLlNoYWRlclByb2dyYW0sIG1lc2g6IE1lc2gpOiBib29sZWFuIHtcblx0XHRsZXQgaXNOdWxsTGFzdE1lc2g6IGJvb2xlYW4gPSB0aGlzLmxhc3RNZXNoID09PSBudWxsXG5cdFx0bGV0IGlzTmV3TWVzaDogYm9vbGVhbiA9IGlzTnVsbExhc3RNZXNoIHx8ICFNZXNoLmVxdWFscyhtZXNoLCB0aGlzLmxhc3RNZXNoKVxuXHRcdGlmIChpc05ld01lc2gpIHtcblx0XHRcdGlmICghaXNOdWxsTGFzdE1lc2ggJiYgdGhpcy5sYXN0TWVzaC5pc0JvdW5kKCkpIHRoaXMubGFzdE1lc2gudW5iaW5kKClcblx0XHRcdGlmICghbWVzaC5pc0JvdW5kKCkpIG1lc2guYmluZChwcm9nKVxuXHRcdH1cblx0XHR0aGlzLmxhc3RNZXNoID0gbWVzaFxuXHRcdHJldHVybiBpc05ld01lc2hcblx0fVxuXG5cdHByaXZhdGUgY29uZGl0aW9uYWxCaW5kUHJvZ3JhbShwcm9nOiBTaGFkZXIuU2hhZGVyUHJvZ3JhbSk6IGJvb2xlYW4ge1xuXHRcdGxldCBpc051bGxMYXN0UHJvZ3JhbTogYm9vbGVhbiA9IHRoaXMubGFzdFByb2dyYW0gPT09IG51bGxcblx0XHRsZXQgaXNOZXdQcm9ncmFtOiBib29sZWFuID0gaXNOdWxsTGFzdFByb2dyYW0gfHwgIVNoYWRlci5TaGFkZXJQcm9ncmFtLmVxdWFscyhwcm9nLCB0aGlzLmxhc3RQcm9ncmFtKVxuXHRcdGlmIChpc05ld1Byb2dyYW0pIHtcblx0XHRcdGlmICghaXNOdWxsTGFzdFByb2dyYW0gJiYgdGhpcy5sYXN0UHJvZ3JhbS5pc0JvdW5kKCkpIHRoaXMubGFzdFByb2dyYW0udW5iaW5kKClcblx0XHRcdGlmICghcHJvZy5pc0JvdW5kKCkpIHByb2cuYmluZCgpXG5cdFx0fVxuXHRcdHRoaXMubGFzdFByb2dyYW0gPSBwcm9nXG5cdFx0cmV0dXJuIGlzTmV3UHJvZ3JhbVxuXHR9XG5cblx0cHJpdmF0ZSBjb25kaXRpb25hbFNldFVuaWZvcm0ocHJvZzogU2hhZGVyLlNoYWRlclByb2dyYW0sIG5hbWU6IHVuaWZvcm1zLlVuaWZvcm1OYW1lcywgdmFsdWU6IFNoYWRlci5Vbmlmb3JtU2V0dGFibGUpOiB2b2lkIHtcblx0XHRpZiAocHJvZy5oYXNVbmlmb3JtKG5hbWUpKSB7XG5cdFx0XHRwcm9nLnNldFVuaWZvcm0odW5pZm9ybXMuTWFwLmdldFVuaWZvcm0obmFtZSksIHZhbHVlKVxuXHRcdH1cblx0fVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2wvcmVuZGVyZXJzL2Z1bmN0aW9uYWwtcmVuZGVyZXIudHMiLCJpbXBvcnQgeyBtYXQ0LCB2ZWMzIH0gZnJvbSAnZ2wtbWF0cml4J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cblx0cHJvdGVjdGVkIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHRcblx0cHJvdGVjdGVkIHByb2plY3Rpb246IG1hdDRcblx0cHJvdGVjdGVkIGNsZWFyQ29sb3I6IHZlYzNcblx0cHJvdGVjdGVkIGZvdjogbnVtYmVyID0gNDUuMFxuXHRwcm90ZWN0ZWQgbmVhcjogbnVtYmVyID0gMC4xXG5cdHByb3RlY3RlZCBmYXI6IG51bWJlciA9IDEwMDAuMFxuXHRwcm90ZWN0ZWQgYXNwZWN0OiBudW1iZXIgPSAxLjBcblxuXHRjb25zdHJ1Y3RvcihnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0KSB7XG5cdFx0dGhpcy5nbCA9IGdsXG5cdFx0dGhpcy5wcm9qZWN0aW9uID0gdGhpcy5nZXRQcm9qZWN0aW9uTWF0cml4KClcblx0XHR0aGlzLmNsZWFyQ29sb3IgPSB2ZWMzLmZyb21WYWx1ZXMoMC4yLCAwLjIsIDAuMilcblx0XHR0aGlzLnNldHVwKClcblx0fVxuXG5cdHByb3RlY3RlZCBzZXR1cCgpOiB2b2lkIHtcblx0XHRjb25zdCBnbCA9IHRoaXMuZ2xcblx0XHRnbC5lbmFibGUoZ2wuREVQVEhfVEVTVClcblx0fVxuXG5cdHB1YmxpYyBzZXROZWFyRmFyKG5lYXI6IG51bWJlciwgZmFyOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLm5lYXIgPSBuZWFyXG5cdFx0dGhpcy5mYXIgPSBmYXJcblx0XHR0aGlzLnByb2plY3Rpb24gPSB0aGlzLmdldFByb2plY3Rpb25NYXRyaXgoKVxuXHR9XG5cblx0cHVibGljIGNsZWFyKCk6IHZvaWQge1xuXHRcdGNvbnN0IGdsID0gdGhpcy5nbFxuXHRcdGNvbnN0IGNjID0gdGhpcy5jbGVhckNvbG9yXG5cdFx0Z2wuY2xlYXJDb2xvcihjY1swXSwgY2NbMV0sIGNjWzJdLCAxLjApXG5cdFx0Z2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCB8IGdsLkRFUFRIX0JVRkZFUl9CSVQpXG5cdH1cblxuXHRwdWJsaWMgc2V0QXNwZWN0KGFyOiBudW1iZXIpIHtcblx0XHR0aGlzLmFzcGVjdCA9IGFyXG5cdFx0dGhpcy5wcm9qZWN0aW9uID0gdGhpcy5nZXRQcm9qZWN0aW9uTWF0cml4KClcblx0fVxuXG5cdHB1YmxpYyBnZXRQcm9qZWN0aW9uTWF0cml4KCk6IG1hdDQge1xuXHRcdGxldCBwcm9qZWN0aW9uID0gbWF0NC5jcmVhdGUoKVxuXHRcdHJldHVybiBtYXQ0LnBlcnNwZWN0aXZlKHByb2plY3Rpb24sIHRoaXMuZm92LCB0aGlzLmFzcGVjdCwgdGhpcy5uZWFyLCB0aGlzLmZhcilcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2dsL3JlbmRlcmVycy9iYXNlLXJlbmRlcmVyLnRzIiwidHlwZSBDYW52YXNPcHRpb25zID0ge1xuXHR3aWR0aDogbnVtYmVyLFxuXHRoZWlnaHQ6IG51bWJlclxufVxuXG5jbGFzcyBDYW52YXMge1xuXG5cdGRwcjogbnVtYmVyXG5cdGFzcGVjdDogbnVtYmVyXG5cdHdpZHRoOiBudW1iZXJcblx0aGVpZ2h0OiBudW1iZXJcblx0ZWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnRcblxuXHRjb25zdHJ1Y3RvcihvcHRzOiBDYW52YXNPcHRpb25zID0gQ2FudmFzLkRlZmF1bHRzKCkpIHtcblxuXHRcdGlmICghb3B0cy53aWR0aClcblx0XHRcdG9wdHMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuXHRcdGlmICghb3B0cy5oZWlnaHQpXG5cdFx0XHRvcHRzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxuXG5cdFx0dGhpcy53aWR0aCA9IG9wdHMud2lkdGhcblx0XHR0aGlzLmhlaWdodCA9IG9wdHMuaGVpZ2h0XG5cdFx0dGhpcy5hc3BlY3QgPSB0aGlzLndpZHRoIC8gdGhpcy5oZWlnaHRcblx0XHR0aGlzLmRwciA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDFcblxuXHRcdHRoaXMuY3JlYXRlQ2FudmFzKClcblx0XHR0aGlzLnJlc2l6ZSgpXG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZUNhbnZhcygpOiB2b2lkIHtcblx0XHR0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KVxuXHR9XG5cblx0cHVibGljIHJlc2l6ZSgpOiB2b2lkIHtcblx0XHRjb25zdCBlbCA9IHRoaXMuZWxlbWVudFxuXHRcdGVsLnN0eWxlLndpZHRoID0gdGhpcy53aWR0aCArICdweCdcblx0XHRlbC5zdHlsZS5oZWlnaHQgPSB0aGlzLmhlaWdodCArICdweCdcblx0XHRlbC53aWR0aCA9IHRoaXMud2lkdGggKiB0aGlzLmRwclxuXHRcdGVsLmhlaWdodCA9IHRoaXMuaGVpZ2h0ICogdGhpcy5kcHJcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgRGVmYXVsdHMoKTogQ2FudmFzT3B0aW9ucyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHdpZHRoOiBudWxsLFxuXHRcdFx0aGVpZ2h0OiBudWxsXG5cdFx0fVxuXHR9XG5cbn1cblxuZXhwb3J0IHsgQ2FudmFzIH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC9jb21tb24vY2FudmFzLnRzIiwiaW1wb3J0IHsgT0JKIH0gZnJvbSAnLi9vYmotbG9hZGVyJ1xuaW1wb3J0IHsgVEVYIH0gZnJvbSAnLi90ZXh0dXJlLWxvYWRlcidcblxuZXhwb3J0IHtcblx0T0JKLFxuXHRURVhcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC9sb2FkZXJzL2xvYWRlcnMudHMiLCJpbXBvcnQgeyBNZXNoIH0gZnJvbSAnLi4vbWVzaC9tZXNoJ1xuaW1wb3J0IHsgVmVydGV4LCBUb3BvbG9naWVzIH0gZnJvbSAnLi4vbWVzaC92ZXJ0ZXgnXG5pbXBvcnQgKiBhcyBhc3NlcnQgZnJvbSAnLi4vdXRpbC9hc3NlcnQtdXRpbCdcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL1l1cWluU2hhby9XZWJHTC1PYmotTG9hZGVyL2Jsb2IvbWFzdGVyL3dlYmdsLW9iai1sb2FkZXIuanNcblxudHlwZSBPYmpUID0ge1xuICAgIGluZGljZXM6IEFycmF5PG51bWJlcj4sXG4gICAgdmVydGljZXM6IEFycmF5PG51bWJlcj4sXG4gICAgbm9ybWFsczogQXJyYXk8bnVtYmVyPixcbiAgICB1dnM6IEFycmF5PG51bWJlcj5cbn1cblxuZXhwb3J0IHR5cGUgTWVzaExvYWRPcHRzID0ge1xuICAgIGZpbmFsaXplOiBib29sZWFuXG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgT0JKIHtcblxuICAgIGV4cG9ydCBmdW5jdGlvbiBEZWZhdWx0cygpOiBNZXNoTG9hZE9wdHMge1xuICAgICAgICByZXR1cm4geyBmaW5hbGl6ZTogdHJ1ZSB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRNZXNoKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsIHVybDogc3RyaW5nLCBvcHRzPzogTWVzaExvYWRPcHRzKTogUHJvbWlzZTxNZXNoPiB7XG4gICAgICAgIGlmICghb3B0cylcbiAgICAgICAgICAgIG9wdHMgPSBEZWZhdWx0cygpXG4gICAgICAgIGxldCBsb2FkZXIgPSBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQpIHtcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh4aHIucmVzcG9uc2VUZXh0KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCh4aHIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHhoci5vcGVuKCdHRVQnLCB1cmwpXG4gICAgICAgICAgICB4aHIuc2VuZCgpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBsb2FkZXIudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlTWVzaChnbCwgZGF0YSwgb3B0cylcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBleHBvcnQgZnVuY3Rpb24gcGFyc2VNZXNoKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsIG9iamVjdERhdGE6IHN0cmluZywgb3B0cz86IE1lc2hMb2FkT3B0cyk6IE1lc2gge1xuXG4gICAgICAgIGlmICghb3B0cylcbiAgICAgICAgICAgIG9wdHMgPSBEZWZhdWx0cygpXG5cbiAgICAgICAgbGV0IGxpbmVzOiBBcnJheTxzdHJpbmc+ID0gb2JqZWN0RGF0YS5zcGxpdCgnXFxuJylcblxuICAgICAgICBsZXQgcmF3OiBPYmpUID0ge1xuICAgICAgICAgICAgaW5kaWNlczogW10sXG4gICAgICAgICAgICB2ZXJ0aWNlczogW10sXG4gICAgICAgICAgICBub3JtYWxzOiBbXSxcbiAgICAgICAgICAgIHV2czogW11cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwYWNrZWQ6IE9ialQgPSB7XG4gICAgICAgICAgICBpbmRpY2VzOiBbXSxcbiAgICAgICAgICAgIHZlcnRpY2VzOiBbXSxcbiAgICAgICAgICAgIG5vcm1hbHM6IFtdLFxuICAgICAgICAgICAgdXZzOiBbXVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG1lc2ggPSBuZXcgTWVzaChnbClcblxuICAgICAgICBsZXQgaW5kZXggPSAwXG5cbiAgICAgICAgZm9yIChjb25zdCBsaW5lIG9mIGxpbmVzKSB7XG4gICAgICAgICAgICBsZXQgaXNWID0gbGluZS5zdGFydHNXaXRoKCd2JylcbiAgICAgICAgICAgIGxldCBpc1ZOID0gbGluZS5zdGFydHNXaXRoKCd2bicpXG4gICAgICAgICAgICBsZXQgaXNWVCA9IGxpbmUuc3RhcnRzV2l0aCgndnQnKVxuICAgICAgICAgICAgbGV0IGlzRiA9IGxpbmUuc3RhcnRzV2l0aCgnZicpXG5cbiAgICAgICAgICAgIGlmIChpc1YgJiYgIWlzVk4gJiYgIWlzVlQpIHtcbiAgICAgICAgICAgICAgICByYXdBcHBlbmRlcigndmVydGljZXMnLCBsaW5lLnNwbGl0KCcgJyksIDQsICd2ZXJ0ZXggZGF0YScpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzVk4pIHtcbiAgICAgICAgICAgICAgICByYXdBcHBlbmRlcignbm9ybWFscycsIGxpbmUuc3BsaXQoJyAnKSwgNCwgJ3ZlcnRleCBub3JtYWwgZGF0YScpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzVlQpIHtcbiAgICAgICAgICAgICAgICByYXdBcHBlbmRlcigndXZzJywgbGluZS5zcGxpdCgnICcpLCAzLCAndXYgZGF0YScpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzRikge1xuXG4gICAgICAgICAgICAgICAgbGV0IF9pbmRpY2VzID0gbGluZS5zcGxpdCgnICcpLm1hcChpbmRzID0+IGluZHMuc3BsaXQoJy8nKSlcblxuICAgICAgICAgICAgICAgIF9pbmRpY2VzLm1hcCgoaW5kLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtc2cgPSAnRmFjZSBkYXRhIHdlcmUgZm9ybWF0dGVkIGluY29ycmVjdGx5J1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSAwICYmIGluZC5sZW5ndGggIT09IDEpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKVxuICAgICAgICAgICAgICAgICAgICBpZiAoaSA+IDAgJiYgaW5kLmxlbmd0aCAhPT0gMylcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIF9pbmRpY2VzLnNoaWZ0KClcblxuICAgICAgICAgICAgICAgIGxldCBwYXJzZWRJbmRpY2VzID0gX2luZGljZXMubWFwKGluZCA9PiBwYXJzZUluZGljZXMoaW5kKSlcblxuICAgICAgICAgICAgICAgIHBhY2tlZEFwcGVuZGVyKHBhcnNlZEluZGljZXMsIFswLCAxLCAyXSlcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAzOyBpIDwgcGFyc2VkSW5kaWNlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBwYWNrZWRBcHBlbmRlcihwYXJzZWRJbmRpY2VzLCBbaS0zLCBpLTEsIGldKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1lc2guc2V0SW5kaWNlcyhuZXcgVWludDE2QXJyYXkocGFja2VkLmluZGljZXMpKVxuICAgICAgICBtZXNoLnNldFRvcG9sb2d5KFRvcG9sb2dpZXMuVFJJQU5HTEVTKVxuXG4gICAgICAgIGlmIChvcHRzLmZpbmFsaXplKSB7XG4gICAgICAgICAgICBtZXNoLmZpbmFsaXplKClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtZXNoXG5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgaGVscGVyc1xuICAgICAgICAvL1xuXG4gICAgICAgIGZ1bmN0aW9uIHBhcnNlQW5kVmFsaWRhdGUodmFsdWU6IHN0cmluZywgZnVuYzogKHZhbDogc3RyaW5nKSA9PiBudW1iZXIsIGFsaWFzOiBzdHJpbmcpOiBudW1iZXIge1xuICAgICAgICAgICAgbGV0IHJlcyA9IGZ1bmModmFsdWUpXG4gICAgICAgICAgICBpZiAoaXNOYU4ocmVzKSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yIHBhcnNpbmcgXCIke2FsaWFzfVwiOiB2YWx1ZSB3YXMgTmFOLmApXG4gICAgICAgICAgICByZXR1cm4gcmVzXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByYXdBcHBlbmRlcihuYW1lOiBrZXlvZiBPYmpULCB2YWx1ZXM6IEFycmF5PHN0cmluZz4sIE46IG51bWJlciwgYWxpYXM6IHN0cmluZykge1xuICAgICAgICAgICAgYXNzZXJ0LmFzc2VydE5WYWx1ZXModmFsdWVzLCBOLCBhbGlhcylcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgTjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcmF3W25hbWVdLnB1c2gocGFyc2VBbmRWYWxpZGF0ZSh2YWx1ZXNbaV0sIHBhcnNlRmxvYXQsIGFsaWFzKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHZlcnRleEFwcGVuZGVyKHZpOiBudW1iZXIsIG5pOiBudW1iZXIsIHVpOiBudW1iZXIpIHtcbiAgICAgICAgICAgIGxldCB2ZXJ0ZXggPSBuZXcgVmVydGV4KClcblxuICAgICAgICAgICAgbGV0IHggPSByYXcudmVydGljZXNbKHZpLTEpKjMrMF1cbiAgICAgICAgICAgIGxldCB5ID0gcmF3LnZlcnRpY2VzWyh2aS0xKSozKzFdXG4gICAgICAgICAgICBsZXQgeiA9IHJhdy52ZXJ0aWNlc1sodmktMSkqMysyXVxuXG4gICAgICAgICAgICBsZXQgbnggPSByYXcubm9ybWFsc1sobmktMSkqMyswXVxuICAgICAgICAgICAgbGV0IG55ID0gcmF3Lm5vcm1hbHNbKG5pLTEpKjMrMV1cbiAgICAgICAgICAgIGxldCBueiA9IHJhdy5ub3JtYWxzWyhuaS0xKSozKzJdXG5cbiAgICAgICAgICAgIHZlcnRleC5zZXRQb3NpdGlvbihuZXcgRmxvYXQzMkFycmF5KFt4LCB5LCB6XSkpXG4gICAgICAgICAgICB2ZXJ0ZXguc2V0Tm9ybWFsKG5ldyBGbG9hdDMyQXJyYXkoW254LCBueSwgbnpdKSlcblxuICAgICAgICAgICAgcGFja2VkLmluZGljZXMucHVzaChpbmRleCsrKVxuXG4gICAgICAgICAgICBpZiAodWkgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB2ZXJ0ZXguc2V0VVYobmV3IEZsb2F0MzJBcnJheShbMCwgMF0pKVxuICAgICAgICAgICAgICAgIG1lc2guYWRkVmVydGV4KHZlcnRleClcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHUgPSByYXcudXZzWyh1aS0xKSoyKzBdXG4gICAgICAgICAgICBsZXQgdiA9IHJhdy51dnNbKHVpLTEpKjIrMV1cblxuICAgICAgICAgICAgdmVydGV4LnNldFVWKG5ldyBGbG9hdDMyQXJyYXkoW3UsIHZdKSlcblxuICAgICAgICAgICAgbWVzaC5hZGRWZXJ0ZXgodmVydGV4KVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcGFja2VkQXBwZW5kZXIoaW5kczogQXJyYXk8QXJyYXk8bnVtYmVyPj4sIGZyYWdJbmRzOiBBcnJheTxudW1iZXI+KSB7XG4gICAgICAgICAgICBhc3NlcnQuYXNzZXJ0TlZhbHVlcyhmcmFnSW5kcywgMywgJ3RyaWFuZ2xlcycpXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBpbmQgPSBmcmFnSW5kc1tpXVxuICAgICAgICAgICAgICAgIHZlcnRleEFwcGVuZGVyKGluZHNbaW5kXVswXSwgaW5kc1tpbmRdWzJdLCBpbmRzW2luZF1bMV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBwYXJzZUluZGljZXMoaW5kczogQXJyYXk8c3RyaW5nPik6IEFycmF5PG51bWJlcj4ge1xuICAgICAgICAgICAgbGV0IHZlcnRJbmRleCA9IHBhcnNlQW5kVmFsaWRhdGUoaW5kc1swXSwgcGFyc2VJbnQsICd2ZXJ0ZXggaW5kZXgnKVxuICAgICAgICAgICAgbGV0IG5vcm1JbmRleCA9IHBhcnNlQW5kVmFsaWRhdGUoaW5kc1syXSwgcGFyc2VJbnQsICdub3JtYWwgaW5kZXgnKVxuICAgICAgICAgICAgbGV0IHV2SW5kZXggPSBudWxsXG4gICAgICAgICAgICBpZiAoaW5kc1sxXSAhPT0gJycpXG4gICAgICAgICAgICAgICAgdXZJbmRleCA9IHBhcnNlQW5kVmFsaWRhdGUoaW5kc1sxXSwgcGFyc2VJbnQsICd1diBpbmRleCcpXG4gICAgICAgICAgICByZXR1cm4gW3ZlcnRJbmRleCwgdXZJbmRleCwgbm9ybUluZGV4XVxuICAgICAgICB9XG5cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2wvbG9hZGVycy9vYmotbG9hZGVyLnRzIiwiaW1wb3J0ICogYXMgVGV4dHVyZSBmcm9tICcuLi90ZXh0dXJlL3RleHR1cmUnXG5cbmV4cG9ydCBuYW1lc3BhY2UgVEVYIHtcblxuXHRleHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZDJEKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsIHVybDogc3RyaW5nLCBvcHRzPzogVGV4dHVyZS5UZXh0dXJlT3B0cyk6IFByb21pc2U8VGV4dHVyZS5UZXh0dXJlPiB7XG4gICAgICAgIGxldCBsb2FkZXIgPSBuZXcgUHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgXHRcdGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuXG4gICAgXHRcdGltZy5vbmxvYWQgPSAoZSkgPT4ge1xuICAgIFx0XHRcdHdpbmRvdy5VUkwucmV2b2tlT2JqZWN0VVJMKGltZy5zcmMpXG4gICAgXHRcdFx0cmVzb2x2ZShpbWcpXG4gICAgXHRcdH1cblxuICAgIFx0XHRpbWcub25lcnJvciA9IChlKSA9PiB7XG4gICAgXHRcdFx0cmVqZWN0KGUpXG4gICAgXHRcdH1cblxuICAgIFx0XHRpbWcuc3JjID0gdXJsXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBsb2FkZXIudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlMkQoZ2wsIGRhdGEsIG9wdHMpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyc2UyRChnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCBkYXRhOiBIVE1MSW1hZ2VFbGVtZW50LCBvcHRzPzogVGV4dHVyZS5UZXh0dXJlT3B0cyk6IFRleHR1cmUuVGV4dHVyZSB7XG4gICAgXHRyZXR1cm4gVGV4dHVyZS5UZXgyRChnbCwgZGF0YSwgb3B0cylcbiAgICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC9sb2FkZXJzL3RleHR1cmUtbG9hZGVyLnRzIiwiaW1wb3J0IHsgVG91Y2gsIE1vdXNlLCBQb2ludGVyTG9jaywgRG91YmxlVGFwRGV0ZWN0b3IgfSBmcm9tICcuL2lucHV0LXh5J1xuaW1wb3J0IHsgS2V5Ym9hcmQsIEtleXMgfSBmcm9tICcuL2tleWJvYXJkJ1xuXG5leHBvcnQge1xuXHRUb3VjaCxcblx0RG91YmxlVGFwRGV0ZWN0b3IsXG5cdE1vdXNlLFxuXHRQb2ludGVyTG9jayxcblx0S2V5Ym9hcmQsXG5cdEtleXNcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC9pbnB1dC9pbnB1dC50cyIsImltcG9ydCAqIGFzIF9LZXlib2FyZCBmcm9tICcuL2tleWJvYXJkJ1xuaW1wb3J0ICogYXMgWFkgZnJvbSAnLi9pbnB1dC14eSdcbmltcG9ydCB7IENhbWVyYSwgZGlyZWN0aW9ucyB9IGZyb20gJy4uL2NhbWVyYS9jYW1lcmEnXG5pbXBvcnQgeyBEZWx0YVRpbWVyLCByYXRpb3MsIFJhdGlvIH0gZnJvbSAnLi4vdXRpbC90aW1lLXV0aWwnXG5pbXBvcnQgeyB2ZWMyLCB2ZWMzLCB2ZWM0IH0gZnJvbSAnZ2wtbWF0cml4J1xuaW1wb3J0ICogYXMgbWF0aCBmcm9tICcuLi9tYXRoL3dnbC1tYXRoJ1xuaW1wb3J0IHsgY29tbW9uLCBtYXRyaXggfSBmcm9tICcuLi91dGlsL3V0aWwnXG5cbmV4cG9ydCBuYW1lc3BhY2UgT3JiaXQge1xuXG5cdHR5cGUgT3JiaXRPcHRzID0ge1xuXHRcdG5WZWxvY2l0eVNhbXBsZXM6IG51bWJlcixcblx0XHR2ZWxvY2l0eURlY2F5U2Vuc2l0aXZpdHk6IG51bWJlcixcblx0XHRtYXhWZWxvY2l0eTogbnVtYmVyLFxuXHRcdHNwZWVkOiBudW1iZXIsXG5cdFx0c21vb3RoOiBib29sZWFuXG5cdH1cblxuXHRleHBvcnQgY2xhc3MgT3JiaXQyPEsgZXh0ZW5kcyBYWS5YWUV2ZW50LCBUIGV4dGVuZHMgWFkueHk8Sz4+IHtcblxuXHRcdHByaXZhdGUgaW5wdXQ6IFRcblx0XHRwcml2YXRlIGNhbWVyYTogQ2FtZXJhXG5cdFx0cHJpdmF0ZSB0aW1lcjogRGVsdGFUaW1lclxuXG5cdFx0cHJpdmF0ZSByZWxlYXNlZDogYm9vbGVhblxuXHRcdHByaXZhdGUgY3VycmVudENvb3JkaW5hdGVzOiB2ZWMyXG5cdFx0cHJpdmF0ZSB0bXBDdXJyZW50Q29vcmRpbmF0ZXM6IHZlYzJcblx0XHRwcml2YXRlIGxhc3RDb29yZGluYXRlczogdmVjMlxuXHRcdHByaXZhdGUgdmVsb2NpdHk6IHZlYzJcblx0XHRwcml2YXRlIHRvdGFsVmVsb2NpdHk6IHZlYzJcblx0XHRwcml2YXRlIGRlbHRhOiB2ZWMyXG5cdFx0cHJpdmF0ZSBkdHM6IHZlYzJcblx0XHRwcml2YXRlIG9wdHM6IE9yYml0T3B0c1xuXG5cdFx0Y29uc3RydWN0b3IoaW5wdXQ6IFQsIGNhbWVyYTogQ2FtZXJhLCBvcHRzPzogT3JiaXRPcHRzKSB7XG5cdFx0XHR0aGlzLmlucHV0ID0gaW5wdXRcblx0XHRcdHRoaXMuY2FtZXJhID0gY2FtZXJhXG5cdFx0XHR0aGlzLnRpbWVyID0gbmV3IERlbHRhVGltZXIoKVxuXG5cdFx0XHRpZiAoIW9wdHMpXG5cdFx0XHRcdG9wdHMgPSBPcmJpdDIuRGVmYXVsdHMoKVxuXG5cdFx0XHR0aGlzLnJlbGVhc2VkID0gZmFsc2Vcblx0XHRcdHRoaXMubGFzdENvb3JkaW5hdGVzID0gdmVjMi5mcm9tVmFsdWVzKDAsIDApXG5cdFx0XHR0aGlzLmN1cnJlbnRDb29yZGluYXRlcyA9IHZlYzIuZnJvbVZhbHVlcygwLCAwKVxuXHRcdFx0dGhpcy50bXBDdXJyZW50Q29vcmRpbmF0ZXMgPSB2ZWMyLmZyb21WYWx1ZXMoMCwgMClcblx0XHRcdHRoaXMudmVsb2NpdHkgPSB2ZWMyLmZyb21WYWx1ZXMoMCwgMClcblx0XHRcdHRoaXMudG90YWxWZWxvY2l0eSA9IHZlYzIuZnJvbVZhbHVlcygwLCAwKVxuXHRcdFx0dGhpcy5kZWx0YSA9IHZlYzIuZnJvbVZhbHVlcygwLCAwKVxuXHRcdFx0dGhpcy5kdHMgPSB2ZWMyLmZyb21WYWx1ZXMoMCwgMClcblxuXHRcdFx0dGhpcy5vcHRzID0gb3B0c1xuXG5cdFx0XHR0aGlzLnRpbWVyLnNldFJhdGlvKHJhdGlvcy5tcygpKVxuXG5cdFx0XHR0aGlzLnNldHVwKClcblx0XHR9XG5cblx0XHRwdWJsaWMgdXBkYXRlKCkge1xuXHRcdFx0Y29uc3QgaW5wdXQgPSB0aGlzLmlucHV0XG5cdFx0XHRjb25zdCB0aW1lciA9IHRoaXMudGltZXJcblx0XHRcdGNvbnN0IGNhbWVyYSA9IHRoaXMuY2FtZXJhXG5cdFx0XHRjb25zdCB0bXBDb29yZHMgPSB0aGlzLnRtcEN1cnJlbnRDb29yZGluYXRlc1xuXHRcdFx0Y29uc3QgY29vcmRzID0gdGhpcy5jdXJyZW50Q29vcmRpbmF0ZXNcblx0XHRcdGNvbnN0IGxhc3RDb29yZHMgPSB0aGlzLmxhc3RDb29yZGluYXRlc1xuXHRcdFx0Y29uc3QgdmVsb2NpdHkgPSB0aGlzLnZlbG9jaXR5XG5cdFx0XHRjb25zdCB0b3RhbFZlbG9jaXR5ID0gdGhpcy50b3RhbFZlbG9jaXR5XG5cdFx0XHRjb25zdCBkZWx0YSA9IHRoaXMuZGVsdGFcblx0XHRcdGNvbnN0IGR0cyA9IHRoaXMuZHRzXG5cdFx0XHRjb25zdCBzcGVlZE11bHRpcGxlciA9IHRoaXMub3B0cy5zcGVlZFxuXHRcdFx0Y29uc3QgZGVjYXlTZW5zID0gdGhpcy5vcHRzLnZlbG9jaXR5RGVjYXlTZW5zaXRpdml0eVxuXG5cdFx0XHR0aW1lci51cGRhdGUoKVxuXG5cdFx0XHR0bXBDb29yZHMuc2V0KGNvb3JkcylcblxuXHRcdFx0dmVjMi5zdWJ0cmFjdChkZWx0YSwgdG1wQ29vcmRzLCBsYXN0Q29vcmRzKVxuXG5cdFx0XHRjb25zdCBkdCA9IHRpbWVyLmRlbHRhKClcblxuXHRcdFx0ZHRzWzBdID0gZHRcblx0XHRcdGR0c1sxXSA9IGR0XG5cblx0XHRcdGlmIChkdCA+IDApXG5cdFx0XHRcdHZlYzIuZGl2aWRlKHZlbG9jaXR5LCBkZWx0YSwgZHRzKVxuXG5cdFx0XHR2ZWxvY2l0eVswXSA9IFJhdGlvLnNjYWxlKHRpbWVyLmdldFJhdGlvKCksIHZlbG9jaXR5WzBdKVxuXHRcdFx0dmVsb2NpdHlbMV0gPSBSYXRpby5zY2FsZSh0aW1lci5nZXRSYXRpbygpLCB2ZWxvY2l0eVsxXSlcblxuXHRcdFx0dmVjMi5tdWwodmVsb2NpdHksIHZlbG9jaXR5LCBbc3BlZWRNdWx0aXBsZXIsIHNwZWVkTXVsdGlwbGVyXSlcblxuXHRcdFx0dmVjMi5hZGQodG90YWxWZWxvY2l0eSwgdG90YWxWZWxvY2l0eSwgdmVsb2NpdHkpXG5cblx0XHRcdGxldCB0YXJnZXRWZWxvY2l0eSA9IHRoaXMub3B0cy5zbW9vdGggPyB0b3RhbFZlbG9jaXR5IDogdmVsb2NpdHlcblxuXHRcdFx0aWYgKGlucHV0LnNob3VsZEludmVydCgpKSB7XG5cdFx0XHRcdGNhbWVyYS5yb3RhdGUoLXRhcmdldFZlbG9jaXR5WzBdLCB0YXJnZXRWZWxvY2l0eVsxXSlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNhbWVyYS5yb3RhdGUodGFyZ2V0VmVsb2NpdHlbMF0sIC10YXJnZXRWZWxvY2l0eVsxXSlcblx0XHRcdH1cblxuXHRcdFx0bGFzdENvb3Jkcy5zZXQodG1wQ29vcmRzKVxuXG5cdFx0XHR0b3RhbFZlbG9jaXR5WzBdIC89IGRlY2F5U2Vuc1xuXHRcdFx0dG90YWxWZWxvY2l0eVsxXSAvPSBkZWNheVNlbnNcblxuXHRcdFx0aWYgKE1hdGguYWJzKHRvdGFsVmVsb2NpdHlbMF0pIDwgMC4wMDAwMSkgdG90YWxWZWxvY2l0eVswXSA9IDBcblx0XHRcdGlmIChNYXRoLmFicyh0b3RhbFZlbG9jaXR5WzFdKSA8IDAuMDAwMDEpIHRvdGFsVmVsb2NpdHlbMV0gPSAwXG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBzZXR1cCgpOiB2b2lkIHtcblx0XHRcdGNvbnN0IGlucHV0ID0gdGhpcy5pbnB1dFxuXHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXNcblxuXHRcdFx0aW5wdXQuc3RhcnQoKGV2dDogSykgPT4ge1xuXHRcdFx0XHRzZWxmLnJlbGVhc2VkID0gZmFsc2Vcblx0XHRcdFx0c2VsZi5jdXJyZW50Q29vcmRpbmF0ZXMgPSBzZWxmLmlucHV0LmdldFByaW1hcnlDb29yZGluYXRlcyhldnQpXG5cdFx0XHRcdHNlbGYubGFzdENvb3JkaW5hdGVzLnNldChzZWxmLmN1cnJlbnRDb29yZGluYXRlcylcblx0XHRcdH0pXG5cblx0XHRcdGlucHV0Lm1vdmUoKGV2dDogSykgPT4ge1xuXHRcdFx0XHRldnQucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHRzZWxmLmN1cnJlbnRDb29yZGluYXRlcyA9IHNlbGYuaW5wdXQuZ2V0UHJpbWFyeUNvb3JkaW5hdGVzKGV2dClcblx0XHRcdH0pXG5cblx0XHRcdGlucHV0LmVuZCgoZXZ0OiBLKSA9PiB7XG5cdFx0XHRcdHNlbGYucmVsZWFzZWQgPSB0cnVlXG5cdFx0XHR9KVxuXHRcdH1cblxuXHRcdHB1YmxpYyBzdGF0aWMgRGVmYXVsdHMoKTogT3JiaXRPcHRzIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdG5WZWxvY2l0eVNhbXBsZXM6IDEwMCxcblx0XHRcdFx0dmVsb2NpdHlEZWNheVNlbnNpdGl2aXR5OiAxLjIsXG5cdFx0XHRcdG1heFZlbG9jaXR5OiA0MDAwLFxuXHRcdFx0XHRzcGVlZDogMixcblx0XHRcdFx0c21vb3RoOiB0cnVlXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly9cblx0Ly9cdHJlZ3VsYXJcblx0Ly9cblxuXHRhYnN0cmFjdCBjbGFzcyBfT3JiaXQ8VCBleHRlbmRzIFhZLlhZRXZlbnQsIFggZXh0ZW5kcyBYWS54eTxUPj4ge1xuXG5cdFx0cHJpdmF0ZSBpbnB1dDogWFxuXHRcdHByaXZhdGUgdGltZXI6IERlbHRhVGltZXJcblxuXHRcdGJlZ2FuOiBib29sZWFuXG5cdFx0cmVsZWFzZWQ6IGJvb2xlYW5cblx0XHR2ZWxvY2l0aWVzOiBBcnJheTx2ZWMyPlxuXHRcdHZlbG9jaXR5OiB2ZWMyXG5cdFx0blZlbG9jaXR5U2FtcGxlczogbnVtYmVyXG5cdFx0c3BlZWQ6IG51bWJlclxuXHRcdG1heFZlbG9jaXR5OiBudW1iZXJcblx0XHRtZWFuVmVsb2NpdHk6IHZlYzJcblx0XHRjb29yZGluYXRlczogdmVjMlxuXHRcdGRlbHRhczogdmVjMlxuXHRcdHZlbG9jaXR5RGVjYXlTZW5zaXRpdml0eTogbnVtYmVyXG5cblx0XHRjb25zdHJ1Y3RvcihpbnB1dDogWCwgdGltZXI6IERlbHRhVGltZXIsIG9wdHM6IE9yYml0T3B0cykge1xuXHRcdFx0dGhpcy5pbnB1dCA9IGlucHV0XG5cdFx0XHR0aGlzLnRpbWVyID0gdGltZXJcblxuXHRcdFx0dGhpcy5iZWdhbiA9IGZhbHNlXG5cdFx0XHR0aGlzLnJlbGVhc2VkID0gZmFsc2Vcblx0XHRcdHRoaXMudmVsb2NpdGllcyA9IFtdXG5cdFx0XHR0aGlzLnZlbG9jaXR5ID0gdmVjMi5mcm9tVmFsdWVzKDAsIDApXG5cdFx0XHR0aGlzLm5WZWxvY2l0eVNhbXBsZXMgPSBvcHRzLm5WZWxvY2l0eVNhbXBsZXNcblx0XHRcdHRoaXMudmVsb2NpdHlEZWNheVNlbnNpdGl2aXR5ID0gb3B0cy52ZWxvY2l0eURlY2F5U2Vuc2l0aXZpdHlcblx0XHRcdHRoaXMuc3BlZWQgPSBvcHRzLnNwZWVkXG5cdFx0XHR0aGlzLm1heFZlbG9jaXR5ID0gb3B0cy5tYXhWZWxvY2l0eVxuXHRcdFx0dGhpcy5tZWFuVmVsb2NpdHkgPSB2ZWMyLmZyb21WYWx1ZXMoMCwgMClcblx0XHRcdHRoaXMuY29vcmRpbmF0ZXMgPSB2ZWMyLmZyb21WYWx1ZXMoMCwgMClcblx0XHRcdHRoaXMuZGVsdGFzID0gdmVjMi5mcm9tVmFsdWVzKDAsIDApXG5cblx0XHRcdHRoaXMuc2V0dXAoKVxuXHRcdH1cblxuXHRcdHByb3RlY3RlZCBhYnN0cmFjdCBzaG91bGRCZWdpbihldnQ6IFQpOiBib29sZWFuXG5cdFx0cHJvdGVjdGVkIGFic3RyYWN0IGdldENvb3JkaW5hdGVzKGV2dDogVCk6IHZlYzJcblx0XHRwdWJsaWMgYWJzdHJhY3Qgc2hvdWxkSW52ZXJ0KCk6IGJvb2xlYW5cblx0XHRwdWJsaWMgZ2V0TWVhblZlbG9jaXR5KCk6IHZlYzIge1xuXHRcdFx0aWYgKHRoaXMudmVsb2NpdGllcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHRoaXMubWVhblZlbG9jaXR5ID0gPHZlYzI+bWF0aC52ZWNtZWFuKHRoaXMudmVsb2NpdGllcylcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMubWVhblZlbG9jaXR5ID0gdmVjMi5mcm9tVmFsdWVzKDAsIDApXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy5tZWFuVmVsb2NpdHlcblx0XHR9XG5cblx0XHRwcml2YXRlIHNldHVwKCk6IHZvaWQge1xuXHRcdFx0Y29uc3QgaW5wdXQgPSB0aGlzLmlucHV0XG5cdFx0XHRjb25zdCBzZWxmID0gdGhpc1xuXG5cdFx0XHRpbnB1dC5zdGFydCgoZXZ0OiBUKSA9PiB7XG5cdFx0XHRcdGlmIChzZWxmLmJlZ2FuIHx8ICFzZWxmLnNob3VsZEJlZ2luKGV2dCkpXG5cdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdGxldCBjb29yZHMgPSBzZWxmLmdldENvb3JkaW5hdGVzKGV2dClcblx0XHRcdFx0c2VsZi5jb29yZGluYXRlc1swXSA9IGNvb3Jkc1swXVxuXHRcdFx0XHRzZWxmLmNvb3JkaW5hdGVzWzFdID0gY29vcmRzWzFdXG5cdFx0XHRcdHNlbGYudGltZXIudXBkYXRlKClcblx0XHRcdFx0c2VsZi5iZWdhbiA9IHRydWVcblx0XHRcdFx0c2VsZi5yZWxlYXNlZCA9IGZhbHNlXG5cdFx0XHRcdHNlbGYuZGVsdGFzWzBdID0gMFxuXHRcdFx0XHRzZWxmLmRlbHRhc1sxXSA9IDBcblx0XHRcdFx0c2VsZi52ZWxvY2l0aWVzID0gW11cblx0XHRcdH0pXG5cblx0XHRcdGlucHV0Lm1vdmUoKGV2dDogVCkgPT4ge1xuXHRcdFx0XHRldnQucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHRzZWxmLnRpbWVyLnVwZGF0ZSgpXG5cdFx0XHRcdGxldCBjdXJyZW50Q29vcmRpbmF0ZXMgPSBzZWxmLmdldENvb3JkaW5hdGVzKGV2dClcblx0XHRcdFx0c2VsZi5kZWx0YXMgPSB2ZWMyLnN1YnRyYWN0KHNlbGYuZGVsdGFzLCBjdXJyZW50Q29vcmRpbmF0ZXMsIHNlbGYuY29vcmRpbmF0ZXMpXG5cdFx0XHRcdGxldCBkZWx0YVQgPSBzZWxmLnRpbWVyLmRlbHRhKClcblx0XHRcdFx0aWYgKGRlbHRhVCA+IDApIHtcblx0XHRcdFx0XHRsZXQgdmVsb2NpdHkgPSB2ZWMyLmNvcHkoc2VsZi52ZWxvY2l0eSwgc2VsZi5kZWx0YXMpXG5cdFx0XHRcdFx0dmVjMi5kaXZpZGUodmVsb2NpdHksIHZlbG9jaXR5LCB2ZWMyLmZyb21WYWx1ZXMoZGVsdGFULCBkZWx0YVQpKVxuXHRcdFx0XHRcdC8vXHRrZWVwIHZhbHVlcyBpbiByYW5nZSBbLUluZmluaXR5LCBtYXhWZWxvY2l0eV0sIHByZXNlcnZpbmcgc2lnblxuXHRcdFx0XHRcdG1hdGguc2lnbmVkQ2xhbXAodmVsb2NpdHksIC1JbmZpbml0eSwgc2VsZi5tYXhWZWxvY2l0eSlcblx0XHRcdFx0XHRpZiAoc2VsZi52ZWxvY2l0aWVzLmxlbmd0aCA9PT0gc2VsZi5uVmVsb2NpdHlTYW1wbGVzKVxuXHRcdFx0XHRcdFx0c2VsZi52ZWxvY2l0aWVzLnNoaWZ0KClcblx0XHRcdFx0XHRzZWxmLnZlbG9jaXRpZXMucHVzaCh2ZWxvY2l0eSlcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoc2VsZi52ZWxvY2l0aWVzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRzZWxmLm1lYW5WZWxvY2l0eSA9IDx2ZWMyPm1hdGgudmVjbWVhbihzZWxmLnZlbG9jaXRpZXMpXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c2VsZi5tZWFuVmVsb2NpdHkgPSB2ZWMyLmZyb21WYWx1ZXMoMCwgMClcblx0XHRcdFx0fVxuXHRcdFx0XHRzZWxmLmNvb3JkaW5hdGVzID0gY3VycmVudENvb3JkaW5hdGVzXG5cdFx0XHR9KVxuXG5cdFx0XHRpbnB1dC5lbmQoKGV2dDogVCkgPT4ge1xuXHRcdFx0XHRzZWxmLnJlbGVhc2VkID0gdHJ1ZVxuXHRcdFx0XHRzZWxmLmJlZ2FuID0gZmFsc2Vcblx0XHRcdH0pXG5cdFx0fVxuXG5cdFx0cHVibGljIHN0YXRpYyBEZWZhdWx0cygpOiBPcmJpdE9wdHMge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0blZlbG9jaXR5U2FtcGxlczogMTAwLFxuXHRcdFx0XHR2ZWxvY2l0eURlY2F5U2Vuc2l0aXZpdHk6IDEuMSxcblx0XHRcdFx0bWF4VmVsb2NpdHk6IDQwMDAsXG5cdFx0XHRcdHNwZWVkOiA0LFxuXHRcdFx0XHRzbW9vdGg6IHRydWVcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjbGFzcyBPcmJpdE1vdXNlIGV4dGVuZHMgX09yYml0PE1vdXNlRXZlbnQsIFhZLk1vdXNlPiB7XG5cdFx0cHJvdGVjdGVkIGdldENvb3JkaW5hdGVzKGV2dDogTW91c2VFdmVudCk6IHZlYzIge1xuXHRcdFx0cmV0dXJuIHZlYzIuZnJvbVZhbHVlcyhldnQuY2xpZW50WCwgZXZ0LmNsaWVudFkpXG5cdFx0fVxuXHRcdHByb3RlY3RlZCBzaG91bGRCZWdpbihldnQ6IE1vdXNlRXZlbnQpOiBib29sZWFuIHtcblx0XHRcdHJldHVybiB0cnVlXG5cdFx0fVxuXHRcdHB1YmxpYyBzaG91bGRJbnZlcnQoKTogYm9vbGVhbiB7XG5cdFx0XHRyZXR1cm4gZmFsc2Vcblx0XHR9XG5cdH1cblxuXHRjbGFzcyBPcmJpdFRvdWNoIGV4dGVuZHMgX09yYml0PFRvdWNoRXZlbnQsIFhZLlRvdWNoPiB7XG5cdFx0cHJvdGVjdGVkIGdldENvb3JkaW5hdGVzKGV2dDogVG91Y2hFdmVudCk6IHZlYzIge1xuXHRcdFx0aWYgKGV2dC50b3VjaGVzLmxlbmd0aCA9PT0gMClcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdBdHRlbXB0ZWQgdG8gZ2V0IGNvb3JkaW5hdGVzIHdoZW4gdGhlcmUgd2VyZSAwIHRvdWNoLXBvaW50cy4nKVxuXHRcdFx0bGV0IHRvdWNoMCA9IGV2dC50b3VjaGVzWzBdXG5cdFx0XHRyZXR1cm4gdmVjMi5mcm9tVmFsdWVzKHRvdWNoMC5jbGllbnRYLCB0b3VjaDAuY2xpZW50WSlcblx0XHR9XG5cdFx0cHJvdGVjdGVkIHNob3VsZEJlZ2luKGV2dDogVG91Y2hFdmVudCk6IGJvb2xlYW4ge1xuXHRcdFx0cmV0dXJuIGV2dC50b3VjaGVzLmxlbmd0aCA9PT0gMVxuXHRcdH1cblx0XHRwdWJsaWMgc2hvdWxkSW52ZXJ0KCk6IGJvb2xlYW4ge1xuXHRcdFx0cmV0dXJuIHRydWVcblx0XHR9XG5cdH1cblxuXHRleHBvcnQgY2xhc3MgT3JiaXQge1xuXG5cdFx0cHJpdmF0ZSBpbnB1dDogWFkuTW91c2UgfCBYWS5Ub3VjaFxuXHRcdHByaXZhdGUgY2FtZXJhOiBDYW1lcmFcblx0XHRwcml2YXRlIG9yYml0OiBPcmJpdE1vdXNlIHwgT3JiaXRUb3VjaFxuXHRcdHByaXZhdGUgdGltZXI6IERlbHRhVGltZXJcblxuXHRcdGNvbnN0cnVjdG9yKGlucHV0OiBYWS5Nb3VzZSB8IFhZLlRvdWNoLCBjYW1lcmE6IENhbWVyYSwgb3B0czogT3JiaXRPcHRzID0gX09yYml0LkRlZmF1bHRzKCkpIHtcblx0XHRcdHRoaXMuaW5wdXQgPSBpbnB1dFxuXHRcdFx0dGhpcy5jYW1lcmEgPSBjYW1lcmFcblx0XHRcdHRoaXMudGltZXIgPSBuZXcgRGVsdGFUaW1lcigpXG5cdFx0XHRpZiAoaW5wdXQgaW5zdGFuY2VvZiBYWS5Nb3VzZSkge1xuXHRcdFx0XHR0aGlzLm9yYml0ID0gbmV3IE9yYml0TW91c2UoaW5wdXQsIHRoaXMudGltZXIsIG9wdHMpXG5cdFx0XHR9IGVsc2UgaWYgKGlucHV0IGluc3RhbmNlb2YgWFkuVG91Y2gpIHtcblx0XHRcdFx0dGhpcy5vcmJpdCA9IG5ldyBPcmJpdFRvdWNoKGlucHV0LCB0aGlzLnRpbWVyLCBvcHRzKVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XG5cdFx0XHRjb25zdCBvcmJpdCA9IHRoaXMub3JiaXRcblx0XHRcdGNvbnN0IGRlbHRhcyA9IG9yYml0LmRlbHRhc1xuXHRcdFx0Y29uc3QgY2FtZXJhID0gdGhpcy5jYW1lcmFcblx0XHRcdGNvbnN0IHJhdGlvID0gdGhpcy50aW1lci5nZXRSYXRpbygpXG5cdFx0XHRjb25zdCBkZWNheVNlbnMgPSB0aGlzLm9yYml0LnZlbG9jaXR5RGVjYXlTZW5zaXRpdml0eVxuXG5cdFx0XHRpZiAoIW9yYml0LnJlbGVhc2VkKSB7XG5cdFx0XHRcdGlmIChvcmJpdC5zaG91bGRJbnZlcnQoKSkge1xuXHRcdFx0XHRcdGNhbWVyYS5yb3RhdGUoLWRlbHRhc1swXSwgZGVsdGFzWzFdKVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNhbWVyYS5yb3RhdGUoZGVsdGFzWzBdLCAtZGVsdGFzWzFdKVxuXHRcdFx0XHR9XG5cdFx0XHRcdGRlbHRhc1swXSA9IDBcblx0XHRcdFx0ZGVsdGFzWzFdID0gMFxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bGV0IHZlbCA9IG9yYml0Lm1lYW5WZWxvY2l0eVxuXHRcdFx0XHRsZXQgeHZlbCA9ICh2ZWxbMF0gKiByYXRpby5zZWNvbmQpIC8gcmF0aW8uZmlyc3QgKiBvcmJpdC5zcGVlZFxuXHRcdFx0XHRsZXQgeXZlbCA9ICh2ZWxbMV0gKiByYXRpby5zZWNvbmQpIC8gcmF0aW8uZmlyc3QgKiBvcmJpdC5zcGVlZFxuXHRcdFx0XHRpZiAob3JiaXQuc2hvdWxkSW52ZXJ0KCkpIHtcblx0XHRcdFx0XHRjYW1lcmEucm90YXRlKC14dmVsLCB5dmVsKVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNhbWVyYS5yb3RhdGUoeHZlbCwgLXl2ZWwpXG5cdFx0XHRcdH1cblx0XHRcdFx0dmVsWzBdIC89IGRlY2F5U2Vuc1xuXHRcdFx0XHR2ZWxbMV0gLz0gZGVjYXlTZW5zXG5cdFx0XHRcdGlmIChNYXRoLmFicyh2ZWxbMF0pIDwgMC4wMDAwMSkgdmVsWzBdID0gMFxuXHRcdFx0XHRpZiAoTWF0aC5hYnModmVsWzFdKSA8IDAuMDAwMDEpIHZlbFsxXSA9IDBcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBNb3ZlbWVudCB7XG5cblx0dHlwZSBLZXlUID0geyBbSyBpbiBkaXJlY3Rpb25zXTogbnVtYmVyIH1cblxuXHRleHBvcnQgYWJzdHJhY3QgY2xhc3MgbW92ZW1lbnQ8VD4ge1xuXHRcdHByb3RlY3RlZCB0aW1lcjogRGVsdGFUaW1lclxuXHRcdHByb3RlY3RlZCBpbnB1dDogVFxuXHRcdHByb3RlY3RlZCBjYW1lcmE6IENhbWVyYVxuXHRcdHByb3RlY3RlZCBzcGVlZDogbnVtYmVyXG5cblx0XHRhYnN0cmFjdCB1cGRhdGUoKTogdm9pZFxuXG5cdFx0Y29uc3RydWN0b3IoaW5wdXQ6IFQsIGNhbWVyYTogQ2FtZXJhLCBzcGVlZDogbnVtYmVyKSB7XG5cdFx0XHR0aGlzLnRpbWVyID0gbmV3IERlbHRhVGltZXIoKVxuXHRcdFx0dGhpcy5pbnB1dCA9IGlucHV0XG5cdFx0XHR0aGlzLmNhbWVyYSA9IGNhbWVyYVxuXHRcdFx0dGhpcy5zcGVlZCA9IHNwZWVkXG5cdFx0fVxuXHR9XG5cblx0ZXhwb3J0IGNsYXNzIEtleWJvYXJkIGV4dGVuZHMgbW92ZW1lbnQ8X0tleWJvYXJkLktleWJvYXJkPiB7XG5cblx0XHRwdWJsaWMgS2V5czogS2V5VCA9IHtcblx0XHRcdGZvcndhcmRzOiBfS2V5Ym9hcmQuS2V5cy5XLFxuXHRcdFx0YmFja3dhcmRzOiBfS2V5Ym9hcmQuS2V5cy5TLFxuXHRcdFx0bGVmdDogX0tleWJvYXJkLktleXMuQSxcblx0XHRcdHJpZ2h0OiBfS2V5Ym9hcmQuS2V5cy5EXG5cdFx0fVxuXG5cdFx0Y29uc3RydWN0b3Ioa2I6IF9LZXlib2FyZC5LZXlib2FyZCwgY2FtZXJhOiBDYW1lcmEsIHNwZWVkOiBudW1iZXIpIHtcblx0XHRcdHN1cGVyKGtiLCBjYW1lcmEsIHNwZWVkKVxuXHRcdH1cblxuXHRcdHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XG5cdFx0XHRjb25zdCB0aW1lciA9IHRoaXMudGltZXJcblx0XHRcdHRpbWVyLnVwZGF0ZSgpXG5cdFx0XHRjb25zdCBpbnB1dCA9IHRoaXMuaW5wdXRcblx0XHRcdGNvbnN0IGNhbWVyYSA9IHRoaXMuY2FtZXJhXG5cdFx0XHRjb25zdCBrZXlzID0gdGhpcy5LZXlzXG5cdFx0XHRjb25zdCBzcGVlZCA9IHRoaXMuc3BlZWRcblx0XHRcdGNvbnN0IGR0ID0gdGltZXIuZGVsdGEoKVxuXHRcdFx0T2JqZWN0LmtleXMoa2V5cykubWFwKGRpciA9PiB7XG5cdFx0XHRcdGxldCBrZXlOID0gS2V5Ym9hcmQuZ2V0KGtleXMsIGRpciBhcyBkaXJlY3Rpb25zKVxuXHRcdFx0XHRpZiAoaW5wdXQuaXNEb3duKGtleU4pKSB7XG5cdFx0XHRcdFx0Y2FtZXJhLm1vdmUoZGlyIGFzIGRpcmVjdGlvbnMsIGR0LCBzcGVlZClcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHR9XG5cblx0XHRwdWJsaWMgc3RhdGljIGdldDxULCBLIGV4dGVuZHMga2V5b2YgVD4ob2JqOiBULCBuYW1lOiBLKTogVFtLXSB7XG4gICAgXHRcdHJldHVybiBvYmpbbmFtZV07XG5cdFx0fVxuXHR9XG5cblx0ZXhwb3J0IGNsYXNzIFRvdWNoIGV4dGVuZHMgbW92ZW1lbnQ8WFkuVG91Y2g+IHtcblxuXHRcdGRpc3Q6IG51bWJlclxuXHRcdGJlZ2FuOiBib29sZWFuXG5cblx0XHRjb25zdHJ1Y3Rvcih0b3VjaDogWFkuVG91Y2gsIGNhbWVyYTogQ2FtZXJhLCBzcGVlZDogbnVtYmVyKSB7XG5cdFx0XHRzdXBlcih0b3VjaCwgY2FtZXJhLCBzcGVlZClcblxuXHRcdFx0dGhpcy5kaXN0ID0gMFxuXHRcdFx0dGhpcy5iZWdhbiA9IGZhbHNlXG5cblx0XHRcdHRoaXMuc2V0dXAoKVxuXHRcdH1cblxuXHRcdHByaXZhdGUgc2V0dXAoKTogdm9pZCB7XG5cdFx0XHRjb25zdCB0b3VjaCA9IHRoaXMuaW5wdXRcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzXG5cblx0XHRcdGNvbnN0IGdldERpc3RhbmNlID0gKGV2dDogVG91Y2hFdmVudCkgPT4ge1xuXHRcdFx0XHRsZXQgY3VyclgxID0gZXZ0LnRvdWNoZXNbMF0uY2xpZW50WCxcblx0XHRcdFx0XHRjdXJyWDIgPSBldnQudG91Y2hlc1sxXS5jbGllbnRYLFxuXHRcdFx0XHRcdGN1cnJZMSA9IGV2dC50b3VjaGVzWzBdLmNsaWVudFksXG5cdFx0XHRcdFx0Y3VyclkyID0gZXZ0LnRvdWNoZXNbMV0uY2xpZW50WVxuXHRcdFx0XHRsZXQgcHQxID0gdmVjMi5mcm9tVmFsdWVzKGN1cnJYMSwgY3VyclkxKVxuXHRcdFx0XHRsZXQgcHQyID0gdmVjMi5mcm9tVmFsdWVzKGN1cnJYMiwgY3VyclkyKVxuXHRcdFx0XHRyZXR1cm4gbWF0aC5kaXN0YW5jZShwdDEsIHB0Milcblx0XHRcdH1cblxuXHRcdFx0dG91Y2guc3RhcnQoZXZ0ID0+IHtcblx0XHRcdFx0aWYgKHNlbGYuYmVnYW4gfHwgZXZ0LnRvdWNoZXMubGVuZ3RoICE9PSAyKVxuXHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHRzZWxmLmJlZ2FuID0gdHJ1ZVxuXHRcdFx0XHRzZWxmLmRpc3QgPSBnZXREaXN0YW5jZShldnQpXG5cdFx0XHRcdHNlbGYudGltZXIudXBkYXRlKClcblx0XHRcdH0pXG5cblx0XHRcdHRvdWNoLm1vdmUoZXZ0ID0+IHtcblx0XHRcdFx0ZXZ0LnByZXZlbnREZWZhdWx0KClcblx0XHRcdFx0c2VsZi50aW1lci51cGRhdGUoKVxuXHRcdFx0XHRpZiAoZXZ0LnRvdWNoZXMubGVuZ3RoICE9PSAyKVxuXHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHRsZXQgY3VyckRpc3QgPSBnZXREaXN0YW5jZShldnQpXG5cdFx0XHRcdGxldCBvZmZEaXN0ID0gY3VyckRpc3QgLSBzZWxmLmRpc3Rcblx0XHRcdFx0bGV0IGR0ID0gc2VsZi50aW1lci5kZWx0YSgpXG5cdFx0XHRcdGxldCBkaXI6IGRpcmVjdGlvbnMgPSBvZmZEaXN0ID4gMCA/ICdmb3J3YXJkcycgOiAnYmFja3dhcmRzJ1xuXHRcdFx0XHRzZWxmLmNhbWVyYS5tb3ZlKGRpciwgZHQsIHNlbGYuc3BlZWQpXG5cdFx0XHRcdHNlbGYuZGlzdCA9IGN1cnJEaXN0XG5cdFx0XHR9KVxuXG5cdFx0XHR0b3VjaC5lbmQoZXZ0ID0+IHtcblx0XHRcdFx0c2VsZi5iZWdhbiA9IGZhbHNlXG5cdFx0XHR9KVxuXHRcdH1cblxuXHRcdHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XG5cdFx0XHR0aGlzLnRpbWVyLnVwZGF0ZSgpXG5cdFx0fVxuXG5cdH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3RhdGlvbiB7XG5cblx0ZXhwb3J0IGNsYXNzIFRvdWNoIGV4dGVuZHMgTW92ZW1lbnQubW92ZW1lbnQ8WFkuVG91Y2g+IHtcblxuXHRcdGRpZFRhcDogYm9vbGVhblxuXHRcdHRhcERldGVjdG9yOiBYWS5Eb3VibGVUYXBEZXRlY3RvclxuXHRcdGxhc3Q6IHZlYzJcblx0XHRsYXN0VmVsOiB2ZWMyXG5cdFx0Y3VycmVudDogdmVjMlxuXHRcdHZlbG9jaXRpZXM6IEFycmF5PHZlYzI+ID0gW11cblx0XHRuVmVsb2NpdGllczogbnVtYmVyID0gMTAwXG5cblx0XHRjb25zdHJ1Y3Rvcih0b3VjaDogWFkuVG91Y2gsIGNhbWVyYTogQ2FtZXJhLCBzcGVlZDogbnVtYmVyKSB7XG5cdFx0XHRzdXBlcih0b3VjaCwgY2FtZXJhLCBzcGVlZClcblxuXHRcdFx0dGhpcy5kaWRUYXAgPSBmYWxzZVxuXHRcdFx0dGhpcy50YXBEZXRlY3RvciA9IG5ldyBYWS5Eb3VibGVUYXBEZXRlY3Rvcih0b3VjaClcblxuXHRcdFx0dGhpcy5sYXN0ID0gdmVjMi5jcmVhdGUoKVxuXHRcdFx0dGhpcy5jdXJyZW50ID0gdmVjMi5jcmVhdGUoKVxuXHRcdFx0dGhpcy5sYXN0VmVsID0gdmVjMi5jcmVhdGUoKVxuXG5cdFx0XHR0aGlzLnNldHVwKClcblx0XHR9XG5cblx0XHRwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xuXHRcdFx0dGhpcy50aW1lci51cGRhdGUoKVxuXHRcdH1cblxuXHRcdHByaXZhdGUgc2V0dXAoKTogdm9pZCB7XG5cdFx0XHRjb25zdCB0b3VjaCA9IHRoaXMuaW5wdXRcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzXG5cdFx0XHRjb25zdCBjYW1lcmEgPSB0aGlzLmNhbWVyYVxuXHRcdFx0Y29uc3QgZGV0ZWN0b3IgPSB0aGlzLnRhcERldGVjdG9yXG5cblx0XHRcdGNvbnN0IHJlc2V0ID0gKGV2dDogVG91Y2hFdmVudCkgPT4ge1xuXHRcdFx0XHRzZWxmLmRpZFRhcCA9IHRydWVcblx0XHRcdFx0c2VsZi5sYXN0WzBdID0gZXZ0LnRvdWNoZXNbMF0uY2xpZW50WFxuXHRcdFx0XHRzZWxmLmxhc3RbMV0gPSBldnQudG91Y2hlc1swXS5jbGllbnRZXG5cdFx0XHRcdHNlbGYudmVsb2NpdGllcyA9IFtdXG5cdFx0XHR9XG5cblx0XHRcdC8vIGRldGVjdG9yLmRvdWJsZXRhcChldnQgPT4ge1xuXHRcdFx0Ly8gXHRyZXNldChldnQpXG5cdFx0XHQvLyB9KVxuXG5cdFx0XHQvLyB0b3VjaC5zdGFydChldnQgPT4ge1xuXHRcdFx0Ly8gXHRzZWxmLnRpbWVyLnVwZGF0ZSgpXG5cdFx0XHQvLyB9KVxuXG5cdFx0XHR0b3VjaC5zdGFydChldnQgPT4ge1xuXHRcdFx0XHRpZiAoZXZ0LnRvdWNoZXMubGVuZ3RoICE9PSAzKSBcblx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0cmVzZXQoZXZ0KVxuXHRcdFx0XHRzZWxmLnRpbWVyLnVwZGF0ZSgpXG5cdFx0XHR9KVxuXG5cdFx0XHR0b3VjaC5tb3ZlKGV2dCA9PiB7XG5cdFx0XHRcdGlmICghc2VsZi5kaWRUYXAgfHwgZXZ0LnRvdWNoZXMubGVuZ3RoICE9PSAzKVxuXHRcdFx0XHRcdHJldHVyblxuXG5cdFx0XHRcdGV2dC5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRcdGV2dC5zdG9wUHJvcGFnYXRpb24oKVxuXHRcdFx0XHRzZWxmLnRpbWVyLnVwZGF0ZSgpXG5cdFx0XHRcdGNvbnN0IGNsb25lID0gY29tbW9uLmNsb25lXG5cdFx0XHRcdGxldCB0b3VjaDAgPSBldnQudG91Y2hlc1swXVxuXHRcdFx0XHRsZXQgZm9jdXNQb2ludCA9IFswLCAwLCAwXVxuXHRcdFx0XHRsZXQgcG9zID0gPHZlYzM+Y2xvbmUoY2FtZXJhLnBvc2l0aW9uKVxuXHRcdFx0XHRsZXQgY2FtRm9jdXMgPSB2ZWMzLnN1YnRyYWN0KHZlYzMuY3JlYXRlKCksIHBvcywgZm9jdXNQb2ludClcblx0XHRcdFx0bGV0IHJpZ2h0ID0gPHZlYzM+Y2xvbmUoY2FtZXJhLnJpZ2h0KVxuXHRcdFx0XHRsZXQgdXAgPSA8dmVjMz5jbG9uZShjYW1lcmEudXApXG5cdFx0XHRcdGxldCBuZXdQb3MgPSB2ZWMzLmNyZWF0ZSgpXG5cdFx0XHRcdHJpZ2h0ID0gdmVjMy5ub3JtYWxpemUocmlnaHQsIHJpZ2h0KVxuXHRcdFx0XHR1cCA9IHZlYzMubm9ybWFsaXplKHVwLCB1cClcblxuXHRcdFx0XHRsZXQgZGVsdGFQb3MgPSB2ZWMyLmZyb21WYWx1ZXModG91Y2gwLmNsaWVudFgsIHRvdWNoMC5jbGllbnRZKVxuXHRcdFx0XHRsZXQgZHQgPSBzZWxmLnRpbWVyLmRlbHRhKClcblx0XHRcdFx0bGV0IHZlbCA9IHZlYzIuZnJvbVZhbHVlcygwLCAwKVxuXHRcdFx0XHRkZWx0YVBvcyA9IHZlYzIuc3VidHJhY3QoZGVsdGFQb3MsIGRlbHRhUG9zLCBzZWxmLmxhc3QpXG5cblx0XHRcdFx0aWYgKGR0ID4gMCkge1xuXHRcdFx0XHRcdHZlbCA9IHZlYzIuZGl2aWRlKHZlbCwgZGVsdGFQb3MsIHZlYzIuZnJvbVZhbHVlcyhkdCwgZHQpKVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZlbC5zZXQodGhpcy5sYXN0VmVsKVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0bGV0IHNwZWVkID0gdmVjMi5jb3B5KHZlYzIuY3JlYXRlKCksIHZlbClcblx0XHRcdFx0bWF0aC5hYnMoc3BlZWQpXG5cblx0XHRcdFx0aWYgKHNlbGYudmVsb2NpdGllcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0c3BlZWQgPSBtYXRoLnZlY21lYW4oc2VsZi52ZWxvY2l0aWVzKVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHNwZWVkWzBdID0gdmVsWzBdXG5cdFx0XHRcdFx0c3BlZWRbMV0gPSB2ZWxbMV1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxldCB5YXcgPSB2ZWxbMF0gKiAwLjAwMlxuXHRcdFx0XHRsZXQgcGl0Y2ggPSB2ZWxbMV0gKiAwLjAwMlxuXG5cdFx0XHRcdC8vIGxldCB5YXcgPSBzcGVlZFswXSA9PT0gMCA/IDAgOiB2ZWxbMF0gLyBzcGVlZFswXVxuXHRcdFx0XHQvLyBsZXQgcGl0Y2ggPSBzcGVlZFsxXSA9PT0gMCA/IDAgOiB2ZWxbMV0gLyBzcGVlZFsxXVxuXG5cdFx0XHRcdGxldCBtYXQgPSBuZXcgbWF0cml4LnRyYW5zZm9ybSgpXG5cdFx0XHRcdFx0LnJvdGF0ZShtYXRoLnJhZGlhbnMoeWF3KSwgdXApXG5cdFx0XHRcdFx0LnJvdGF0ZShtYXRoLnJhZGlhbnMocGl0Y2gpLCByaWdodClcblx0XHRcdFx0XHQubWF0KClcblxuXHRcdFx0XHRsZXQgY2FtRm9jdXM0ID0gdmVjNC5mcm9tVmFsdWVzKGNhbUZvY3VzWzBdLCBjYW1Gb2N1c1sxXSwgY2FtRm9jdXNbMl0sIDEpXG5cdFx0XHRcdHZlYzQudHJhbnNmb3JtTWF0NChjYW1Gb2N1czQsIGNhbUZvY3VzNCwgbWF0KVxuXHRcdFx0XHR2ZWM0LmFkZChjYW1Gb2N1czQsIGNhbUZvY3VzNCwgW2ZvY3VzUG9pbnRbMF0sIGZvY3VzUG9pbnRbMV0sIGZvY3VzUG9pbnRbMl0sIDBdKVxuXG5cdFx0XHRcdG5ld1Bvc1swXSA9IGNhbUZvY3VzNFswXVxuXHRcdFx0XHRuZXdQb3NbMV0gPSBjYW1Gb2N1czRbMV1cblx0XHRcdFx0bmV3UG9zWzJdID0gY2FtRm9jdXM0WzJdXG5cblx0XHRcdFx0Y2FtZXJhLnNldFBvc2l0aW9uKG5ld1BvcylcblxuXHRcdFx0XHRzZWxmLmxhc3RbMF0gPSB0b3VjaDAuY2xpZW50WFxuXHRcdFx0XHRzZWxmLmxhc3RbMV0gPSB0b3VjaDAuY2xpZW50WVxuXHRcdFx0XHRzZWxmLmxhc3RWZWwuc2V0KHZlbClcblxuXHRcdFx0XHRpZiAoc2VsZi52ZWxvY2l0aWVzLmxlbmd0aCA9PT0gc2VsZi5uVmVsb2NpdGllcylcblx0XHRcdFx0XHRzZWxmLnZlbG9jaXRpZXMuc2hpZnQoKVxuXHRcdFx0XHRzZWxmLnZlbG9jaXRpZXMucHVzaCh2ZWMyLmZyb21WYWx1ZXMoc3BlZWRbMF0sIHNwZWVkWzFdKSlcblx0XHRcdH0pXG5cblx0XHRcdHRvdWNoLmVuZChldnQgPT4ge1xuXHRcdFx0XHRzZWxmLmRpZFRhcCA9IGZhbHNlXG5cdFx0XHR9KVxuXHRcdH1cblxuXHR9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC9pbnB1dC9jYW1lcmEtY29udHJvbHMudHMiLCJpbXBvcnQgeyBBdWRpb0FuYWx5c2VyIH0gZnJvbSAnLi93ZWItYXVkaW8tYW5hbHlzZXInXG4vLyBpbXBvcnQgeyBBdWRpb0NvbnRleHRNYW5hZ2VyIH0gZnJvbSAnLi93ZWItYXVkaW8tY29udGV4dCdcbmltcG9ydCB7IEF1ZGlvQ29udGV4dE1hbmFnZXIgfSBmcm9tICcuL3dlYi1hdWRpby1jb250ZXh0J1xuXG5leHBvcnQge1xuXHRBdWRpb0FuYWx5c2VyLFxuXHRBdWRpb0NvbnRleHRNYW5hZ2VyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXVkL3dlYi1hdWRpby50cyIsImltcG9ydCB7IFV0aWwgfSBmcm9tICcuL3V0aWwnXG5cbnR5cGUgQW5hbHlzZXJPcHRpb25zID0ge1xuXHRsZXZlbHNDb3VudDogbnVtYmVyXG59XG5cbmNsYXNzIEF1ZGlvQW5hbHlzZXIge1xuXG5cdHByaXZhdGUgY29udGV4dDogQXVkaW9Db250ZXh0XG5cdHByaXZhdGUgb3B0czogQW5hbHlzZXJPcHRpb25zXG5cdHByaXZhdGUgYW5hbHlzZXI6IEFuYWx5c2VyTm9kZVxuXHRwcml2YXRlIGZyZXFCeXRlRGF0YTogVWludDhBcnJheVxuXHRwcml2YXRlIHRpbWVCeXRlRGF0YTogVWludDhBcnJheVxuXHRwcml2YXRlIGJpbkNvdW50OiBudW1iZXJcblx0cHJpdmF0ZSBsZXZlbHNDb3VudDogbnVtYmVyXG5cdHByaXZhdGUgbGV2ZWxzQmluczogbnVtYmVyXG5cdHByaXZhdGUgbGV2ZWxzOiBBcnJheTxudW1iZXI+ID0gW11cblx0cHJpdmF0ZSB3YXZlOiBBcnJheTxudW1iZXI+ID0gW11cblxuXHRjb25zdHJ1Y3Rvcihjb250ZXh0OiBBdWRpb0NvbnRleHQsIG9wdHM6IEFuYWx5c2VyT3B0aW9ucyA9IEF1ZGlvQW5hbHlzZXIuRGVmYXVsdHMoKSkge1xuXHRcdGlmICghY29udGV4dClcblx0XHRcdHRocm93IG5ldyBFcnJvcignSW52YWxpZCBvciBtaXNzaW5nIGF1ZGlvIGNvbnRleHQuJylcblx0XHR0aGlzLmNvbnRleHQgPSBjb250ZXh0XG5cdFx0dGhpcy5vcHRzID0gb3B0c1xuXHRcdHRoaXMuc2V0T3B0aW9ucygpXG5cdH1cblxuXHRwcml2YXRlIHNldE9wdGlvbnMoKSB7XG5cdFx0aWYgKCFVdGlsLmlzUG93Mih0aGlzLm9wdHMubGV2ZWxzQ291bnQpKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdsZXZlbHNDb3VudCBtdXN0IGJlIGEgcG93ZXIgb2YgMi4nKVxuXHRcdHRoaXMubGV2ZWxzQ291bnQgPSB0aGlzLm9wdHMubGV2ZWxzQ291bnRcblx0fVxuXG5cdHB1YmxpYyBzZXR1cCgpOiB2b2lkIHtcblx0XHRjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0XG5cdFx0Y29uc3QgYW5hbHlzZXI6IEFuYWx5c2VyTm9kZSA9IGNvbnRleHQuY3JlYXRlQW5hbHlzZXIoKVxuXHRcdFxuXHRcdGFuYWx5c2VyLnNtb290aGluZ1RpbWVDb25zdGFudCA9IDAuOFxuXHRcdGFuYWx5c2VyLmZmdFNpemUgPSAxMDI0XG5cdFx0YW5hbHlzZXIuY29ubmVjdChjb250ZXh0LmRlc3RpbmF0aW9uKVxuXG5cdFx0Y29uc3QgYmluQ291bnQ6IG51bWJlciA9IGFuYWx5c2VyLmZyZXF1ZW5jeUJpbkNvdW50XG5cdFx0dGhpcy5sZXZlbHNCaW5zID0gTWF0aC5mbG9vcihiaW5Db3VudCAvIHRoaXMubGV2ZWxzQ291bnQpXG5cblx0XHRpZiAoYmluQ291bnQgIT09IDUxMilcblx0XHRcdHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYmluIGNvdW50IHRvIGJlIDUxMiwgd2FzICR7YmluQ291bnR9YClcblxuXHRcdHRoaXMuYW5hbHlzZXIgPSBhbmFseXNlclxuXHRcdHRoaXMuZnJlcUJ5dGVEYXRhID0gbmV3IFVpbnQ4QXJyYXkoYmluQ291bnQpXG5cdFx0dGhpcy50aW1lQnl0ZURhdGEgPSBuZXcgVWludDhBcnJheShiaW5Db3VudClcblx0XHR0aGlzLmJpbkNvdW50ID0gYmluQ291bnRcblx0fVxuXG5cdHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XG5cdFx0dGhpcy5hbmFseXNlci5nZXRCeXRlRnJlcXVlbmN5RGF0YSh0aGlzLmZyZXFCeXRlRGF0YSlcblx0XHR0aGlzLnVwZGF0ZUxldmVscygpXG5cdFx0dGhpcy51cGRhdGVXYXZlKClcblx0fVxuXG5cdHByaXZhdGUgdXBkYXRlTGV2ZWxzKCk6IHZvaWQge1xuXHRcdGNvbnN0IGxldmVsc0NvdW50ID0gdGhpcy5sZXZlbHNDb3VudFxuXHRcdGNvbnN0IGxldmVsc0JpbnMgPSB0aGlzLmxldmVsc0JpbnNcblx0XHRjb25zdCBmcmVxQnl0ZURhdGEgPSB0aGlzLmZyZXFCeXRlRGF0YVxuXHRcdGNvbnN0IGxldmVscyA9IHRoaXMubGV2ZWxzXG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxldmVsc0NvdW50OyBpKyspIHtcblx0XHRcdGxldCBzdW0gPSAwXG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IGxldmVsc0JpbnM7IGorKykge1xuXHRcdFx0XHRzdW0gKz0gZnJlcUJ5dGVEYXRhWyhpICogbGV2ZWxzQmlucykgKyBqXVxuXHRcdFx0fVxuXHRcdFx0bGV2ZWxzW2ldID0gc3VtIC8gbGV2ZWxzQmlucy8yNTZcblx0XHRcdGxldmVsc1tpXSAqPSAxICsgKGkvbGV2ZWxzQ291bnQpLzJcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHVwZGF0ZVdhdmUoKTogdm9pZCB7XG5cdFx0Y29uc3Qgd2F2ZSA9IHRoaXMud2F2ZVxuXHRcdGNvbnN0IGJpbkNvdW50ID0gdGhpcy5iaW5Db3VudFxuXHRcdGNvbnN0IGFuYWx5c2VyID0gdGhpcy5hbmFseXNlclxuXHRcdGNvbnN0IHRpbWVCeXRlRGF0YSA9IHRoaXMudGltZUJ5dGVEYXRhXG5cblx0XHRhbmFseXNlci5nZXRCeXRlVGltZURvbWFpbkRhdGEodGltZUJ5dGVEYXRhKVxuXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGJpbkNvdW50OyBpKyspIHtcblx0XHRcdHdhdmVbaV0gPSAoKHRpbWVCeXRlRGF0YVtpXSAtIDEyOCkgLyAxMjgpXG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGdldEFuYWx5c2VyTm9kZSgpOiBBbmFseXNlck5vZGUgeyBcblx0XHRyZXR1cm4gdGhpcy5hbmFseXNlciBcblx0fVxuXG5cdHB1YmxpYyBnZXRMZXZlbHMoKTogQXJyYXk8bnVtYmVyPiB7IFxuXHRcdHJldHVybiB0aGlzLmxldmVscyBcblx0fVxuXG5cdHB1YmxpYyBnZXRXYXZlKCk6IEFycmF5PG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLndhdmVcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgRGVmYXVsdHMoKTogQW5hbHlzZXJPcHRpb25zIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bGV2ZWxzQ291bnQ6IDEyOFxuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgeyBBdWRpb0FuYWx5c2VyIH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hdWQvd2ViLWF1ZGlvLWFuYWx5c2VyLnRzIiwiY2xhc3MgVXRpbCB7XG5cdFxuXHRwdWJsaWMgc3RhdGljIG1heChhcnI6IEFycmF5PG51bWJlcj4pOiBudW1iZXIge1xuXHRcdGxldCBtYXggPSAtSW5maW5pdHlcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGFycltpXSA+IG1heCkgbWF4ID0gYXJyW2ldXG5cdFx0fVxuXHRcdHJldHVybiBtYXhcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgbWluKGFycjogQXJyYXk8bnVtYmVyPik6IG51bWJlciB7XG5cdFx0bGV0IG1pbiA9IEluZmluaXR5XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChhcnJbaV0gPCBtaW4pIG1pbiA9IGFycltpXVxuXHRcdH1cblx0XHRyZXR1cm4gbWluXG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIGlzUG93MihuOiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRpZiAobiA9PT0gMClcblx0XHRcdHJldHVybiBmYWxzZVxuXHRcdHdoaWxlIChuICE9PSAxKSB7XG5cdFx0XHRpZiAobiAlIDIgIT09IDApXG5cdFx0XHRcdHJldHVybiBmYWxzZVxuXHRcdFx0biA9IG4gLyAyXG5cdFx0fVxuXHRcdHJldHVybiB0cnVlXG5cdH1cbn1cblxuZXhwb3J0IHsgVXRpbCB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXVkL3V0aWwudHMiLCJpbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi91dGlsJ1xuXG50eXBlIFNvdW5kID0ge1xuXHRmaWxlbmFtZTogc3RyaW5nLFxuXHRidWZmZXI6IEF1ZGlvQnVmZmVyLFxuXHRzb3VyY2U6IEF1ZGlvQnVmZmVyU291cmNlTm9kZSxcblx0aXNQbGF5aW5nOiBib29sZWFuLFxuXHRzdGFydFRpbWU6IG51bWJlcixcblx0c3RhcnRBdDogbnVtYmVyXG59XG5cbnR5cGUgU291bmRNYXAgPSB7XG5cdFtrZXk6IHN0cmluZ106IFNvdW5kXG59XG5cbmNsYXNzIEF1ZGlvQ29udGV4dE1hbmFnZXIge1xuXG5cdHByaXZhdGUgY29udGV4dDogQXVkaW9Db250ZXh0XG5cdHByaXZhdGUgc291bmRzOiBTb3VuZE1hcCA9IHt9XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0bGV0IGF1ZGlvQ29udGV4dCA9IHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgKDxhbnk+d2luZG93KS53ZWJraXRBdWRpb0NvbnRleHQgfHwgLTFcblx0XHRpZiAoYXVkaW9Db250ZXh0ID09PSAtMSlcblx0XHRcdHRocm93IG5ldyBFcnJvcignV2ViIGF1ZGlvIGlzIG5vdCBzdXBwb3J0ZWQgb24geW91ciBwbGF0Zm9ybS4nKVxuXHRcdHRoaXMuY29udGV4dCA9IG5ldyBhdWRpb0NvbnRleHQoKVxuXHRcdHRoaXMuc291bmRzXG5cdH1cblxuXHRwdWJsaWMgZ2V0Q29udGV4dCgpOiBBdWRpb0NvbnRleHQge1xuXHRcdHJldHVybiB0aGlzLmNvbnRleHRcblx0fVxuXG5cdHB1YmxpYyBsb2FkU291bmQoZmlsZW5hbWU6IHN0cmluZykge1xuXHRcdGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHRcblx0XHRjb25zdCBzb3VuZHMgPSB0aGlzLnNvdW5kc1xuXHRcdGxldCBsb2FkZXIgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRsZXQgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpLFxuXHRcdFx0XHRmdWxsZmlsZTogc3RyaW5nID0gJy9zb3VuZHMvJyArIGZpbGVuYW1lXG5cdFx0XHRyZXF1ZXN0Lm9wZW4oJ0dFVCcsIGZ1bGxmaWxlKTtcblx0XHRcdHJlcXVlc3QucmVzcG9uc2VUeXBlID0gJ2FycmF5YnVmZmVyJztcblx0XHRcdHJlcXVlc3Qub25sb2FkID0gKCkgPT4ge1xuXHRcdFx0XHRjb250ZXh0LmRlY29kZUF1ZGlvRGF0YShyZXF1ZXN0LnJlc3BvbnNlLCAoYnVmZmVyKSA9PiB7XG5cdFx0XHRcdFx0Y29uc3Qgc291bmQ6IFNvdW5kID0ge1xuXHRcdFx0XHRcdFx0ZmlsZW5hbWUsIFxuXHRcdFx0XHRcdFx0YnVmZmVyLCBcblx0XHRcdFx0XHRcdGlzUGxheWluZzogZmFsc2UsIFxuXHRcdFx0XHRcdFx0c291cmNlOiBudWxsLFxuXHRcdFx0XHRcdFx0c3RhcnRUaW1lOiBudWxsLFxuXHRcdFx0XHRcdFx0c3RhcnRBdDogMFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXNvbHZlKHNvdW5kKVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdFx0cmVxdWVzdC5vbmVycm9yID0gKGVycikgPT4gcmVqZWN0KGVycilcblx0XHRcdHJlcXVlc3Quc2VuZCgpXG5cdFx0fSlcblxuXHRcdHJldHVybiBsb2FkZXIudGhlbigoc291bmQ6IFNvdW5kKSA9PiB7XG5cdFx0XHRzb3VuZHNbc291bmQuZmlsZW5hbWVdID0gc291bmRcblx0XHR9KVxuXHR9XG5cblx0cHVibGljIGxvYWRTb3VuZHMobmFtZXM6IEFycmF5PHN0cmluZz4pIHtcblx0XHRjb25zdCBzZWxmID0gdGhpc1xuXHRcdHJldHVybiBuYW1lcy5tYXAoKG5hbWUpID0+IHsgcmV0dXJuIHNlbGYubG9hZFNvdW5kKG5hbWUpIH0pXG5cdH1cblxuXHRwdWJsaWMgZ2V0U291bmQoZmlsZW5hbWU6IHN0cmluZyk6IFNvdW5kIHtcblx0XHRsZXQgc291bmQgPSB0aGlzLnNvdW5kc1tmaWxlbmFtZV1cblx0XHRpZiAoc291bmQgPT09IHVuZGVmaW5lZClcblx0XHRcdHRocm93IG5ldyBFcnJvcihgVW5yZWNvZ25pemVkIHNvdW5kICR7ZmlsZW5hbWV9LmApXG5cdFx0cmV0dXJuIHNvdW5kXG5cdH1cblxuXHRwdWJsaWMgcGxheShmaWxlbmFtZTogc3RyaW5nLCB0bz86IEF1ZGlvTm9kZSkge1xuXHRcdGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHRcblx0XHRjb25zdCBzb3VuZHMgPSB0aGlzLnNvdW5kc1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdGlmICghdG8pXG5cdFx0XHRcdHRvID0gY29udGV4dC5kZXN0aW5hdGlvblxuXHRcdFx0bGV0IHNvdW5kID0gc2VsZi5nZXRTb3VuZChmaWxlbmFtZSlcblx0XHRcdGlmIChzb3VuZC5pc1BsYXlpbmcpIFxuXHRcdFx0XHRyZXR1cm5cblx0XHRcdGxldCBzb3VyY2UgPSBjb250ZXh0LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpXG5cdFx0XHRzb3VyY2UuYnVmZmVyID0gc291bmQuYnVmZmVyXG5cdFx0XHRzb3VyY2UuY29ubmVjdCh0bylcblx0XHRcdHNvdXJjZS5zdGFydCgwLCBzb3VuZC5zdGFydEF0KVxuXHRcdFx0c291bmRzW2ZpbGVuYW1lXS5zb3VyY2UgPSBzb3VyY2Vcblx0XHRcdHNvdW5kc1tmaWxlbmFtZV0uaXNQbGF5aW5nID0gdHJ1ZVxuXHRcdFx0c291bmRzW2ZpbGVuYW1lXS5zdGFydFRpbWUgPSBzZWxmLmNvbnRleHQuY3VycmVudFRpbWVcblx0XHRcdHJlc29sdmUoKVxuXHRcdH0pXG5cdH1cblxuXHRwdWJsaWMgdG9nZ2xlUGxheShmaWxlbmFtZTogc3RyaW5nLCB0bz86IEF1ZGlvTm9kZSkge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdGxldCBzb3VuZCA9IHNlbGYuZ2V0U291bmQoZmlsZW5hbWUpXG5cdFx0XHRpZiAoc291bmQuaXNQbGF5aW5nKVxuXHRcdFx0XHRyZXR1cm4gc2VsZi5wYXVzZShmaWxlbmFtZSlcblx0XHRcdHJldHVybiBzZWxmLnBsYXkoZmlsZW5hbWUsIHRvKVxuXHRcdH0pXG5cdH1cblxuXHRwcml2YXRlIF9wYXVzZShmaWxlbmFtZTogc3RyaW5nLCByZXNldDogYm9vbGVhbikge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdGxldCBzb3VuZCA9IHNlbGYuZ2V0U291bmQoZmlsZW5hbWUpXG5cdFx0XHRsZXQgc291cmNlID0gc291bmQuc291cmNlXG5cdFx0XHRpZiAoc291cmNlID09PSB1bmRlZmluZWQpe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYE5vIHNvdXJjZSBmb3Igc291bmQgJHtmaWxlbmFtZX0uYClcblx0XHRcdH1cblx0XHRcdGlmIChzb3VuZC5pc1BsYXlpbmcpIHtcblx0XHRcdFx0c291cmNlLnN0b3AoMClcblx0XHRcdH1cblx0XHRcdHNvdW5kLmlzUGxheWluZyA9IGZhbHNlXG5cdFx0XHRpZiAocmVzZXQpIHtcblx0XHRcdFx0c291bmQuc3RhcnRBdCA9IDBcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChzb3VuZC5zdGFydFRpbWUgIT09IG51bGwpIHtcblx0XHRcdFx0XHRzb3VuZC5zdGFydEF0ICs9IChzZWxmLmNvbnRleHQuY3VycmVudFRpbWUgLSBzb3VuZC5zdGFydFRpbWUpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJlc29sdmUoKVxuXHRcdH0pXG5cdH1cblxuXHRwdWJsaWMgcGF1c2UoZmlsZW5hbWU6IHN0cmluZykge1xuXHRcdHJldHVybiB0aGlzLl9wYXVzZShmaWxlbmFtZSwgZmFsc2UpXG5cdH1cblxuXHRwdWJsaWMgc3RvcChmaWxlbmFtZTogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3BhdXNlKGZpbGVuYW1lLCB0cnVlKVxuXHR9XG59XG5cbmV4cG9ydCB7IEF1ZGlvQ29udGV4dE1hbmFnZXIgfVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXVkL3dlYi1hdWRpby1jb250ZXh0LnRzIl0sInNvdXJjZVJvb3QiOiIifQ==
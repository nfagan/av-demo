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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__uniforms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__texture__ = __webpack_require__(8);




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
class Shader extends __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */] {
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
class ShaderProgram extends __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */] {
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
        else if (value instanceof __WEBPACK_IMPORTED_MODULE_3__texture__["b" /* Texture */]) {
            this.seti(name, value.index);
        }
        else if (__WEBPACK_IMPORTED_MODULE_1__util__["types"].isMat4(value)) {
            this.setMat4f(name, value);
        }
        else if (__WEBPACK_IMPORTED_MODULE_1__util__["types"].isVec3(value)) {
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
        value = __WEBPACK_IMPORTED_MODULE_1__util__["vector"].requireVec3(value);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resource__ = __webpack_require__(6);


class Mesh extends __WEBPACK_IMPORTED_MODULE_1__resource__["a" /* Resource */] {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wgl_math__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resource__ = __webpack_require__(6);


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
class Texture extends __WEBPACK_IMPORTED_MODULE_1__resource__["a" /* Resource */] {
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
        if (__WEBPACK_IMPORTED_MODULE_0__wgl_math__["c" /* isPow2 */](data.width) && __WEBPACK_IMPORTED_MODULE_0__wgl_math__["c" /* isPow2 */](data.height)) {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__texture__ = __webpack_require__(8);

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
    return data instanceof __WEBPACK_IMPORTED_MODULE_0__texture__["b" /* Texture */];
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mesh__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_gl_matrix__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wgl_math__ = __webpack_require__(3);





class Model extends __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */] {
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
        this.transform = new __WEBPACK_IMPORTED_MODULE_3__util__["matrix"].transform;
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
        this.position = __WEBPACK_IMPORTED_MODULE_3__util__["vector"].requireVec3(pos);
    }
    setRotation(rot) {
        this.rotation = __WEBPACK_IMPORTED_MODULE_3__util__["vector"].requireVec3(rot);
    }
    setScale(scale) {
        this.scale = __WEBPACK_IMPORTED_MODULE_3__util__["vector"].requireVec3(scale);
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
            .rotate(__WEBPACK_IMPORTED_MODULE_4__wgl_math__["e" /* radians */](rot[0]), [1, 0, 0])
            .rotate(__WEBPACK_IMPORTED_MODULE_4__wgl_math__["e" /* radians */](rot[1]), [0, 1, 0])
            .rotate(__WEBPACK_IMPORTED_MODULE_4__wgl_math__["e" /* radians */](rot[2]), [0, 0, 1])
            .scale(scl)
            .mat();
    }
    static compareMeshUUID(a, b) {
        return __WEBPACK_IMPORTED_MODULE_1__mesh__["a" /* Mesh */].compareUUID(a.mesh, b.mesh);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__texture__ = __webpack_require__(8);


class Attribute extends __WEBPACK_IMPORTED_MODULE_0__util__["attribute"]._Attribute {
    _setValue(value) {
        if (typeof (value) != 'number' && !(value instanceof __WEBPACK_IMPORTED_MODULE_1__texture__["b" /* Texture */])) {
            value = __WEBPACK_IMPORTED_MODULE_0__util__["vector"].requireVec3(value);
        }
        return value;
    }
}
class MaterialAttributeMap extends __WEBPACK_IMPORTED_MODULE_0__util__["attribute"]._AttributeMap {
    constructor() { super(); }
}
class Material extends __WEBPACK_IMPORTED_MODULE_0__util__["attribute"].Attributable {
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
        mat.addAttribute(new Attribute('albedo', _albedo, __WEBPACK_IMPORTED_MODULE_0__util__["attribute"].validators.Vec3OrTexture));
        return mat;
    }
    static Physical(gl, _albedo = [1, 1, 1], _roughness = 0.1, _metallic = 0.1) {
        let mat = new Material(gl);
        mat.addAttribute(new Attribute('albedo', _albedo, __WEBPACK_IMPORTED_MODULE_0__util__["attribute"].validators.Vec3OrTexture));
        mat.addAttribute(new Attribute('roughness', _roughness, __WEBPACK_IMPORTED_MODULE_0__util__["attribute"].validators.Number));
        mat.addAttribute(new Attribute('metallic', _metallic, __WEBPACK_IMPORTED_MODULE_0__util__["attribute"].validators.Number));
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);

class Attribute extends __WEBPACK_IMPORTED_MODULE_0__util__["attribute"]._Attribute {
    _setValue(value) {
        if (typeof (value) !== 'number' && typeof (value) !== 'boolean')
            value = __WEBPACK_IMPORTED_MODULE_0__util__["vector"].requireVec3(value);
        return value;
    }
}
class LightAttributeMap extends __WEBPACK_IMPORTED_MODULE_0__util__["attribute"]._AttributeMap {
    constructor() { super(); }
}
class Light extends __WEBPACK_IMPORTED_MODULE_0__util__["attribute"].Attributable {
    constructor(gl, _index = 0, _color = [1, 1, 1], _mask = [1, 1, 1]) {
        super();
        this.active = true;
        this.gl = gl;
        this.index = _index;
        this.attributes = new LightAttributeMap();
        this.addAttribute(new Attribute('color', _color, __WEBPACK_IMPORTED_MODULE_0__util__["attribute"].validators.Vec3));
        this.addAttribute(new Attribute('mask', _mask, __WEBPACK_IMPORTED_MODULE_0__util__["attribute"].validators.Vec3));
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_gl_matrix__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wgl_math__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__capabilities__ = __webpack_require__(24);




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
        if (!__WEBPACK_IMPORTED_MODULE_3__capabilities__["hasPointerLock"]()) {
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
        this.timer = new __WEBPACK_IMPORTED_MODULE_0__util__["time"].DeltaTimer();
        this.timer.setRatio(__WEBPACK_IMPORTED_MODULE_0__util__["time"].ratios.ms());
        this.began = false;
        this.doubletapFunc = (evt) => { };
        this.deltaDur = new __WEBPACK_IMPORTED_MODULE_0__util__["time"].Duration(__WEBPACK_IMPORTED_MODULE_0__util__["time"].ratios.ms(), 0);
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
                let inTime = __WEBPACK_IMPORTED_MODULE_0__util__["time"].Duration.le(delta, self.timeThreshold);
                let dist = __WEBPACK_IMPORTED_MODULE_2__wgl_math__["b" /* distance */](self.currentCoordinates, self.coordinates);
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
            timeThreshold: new __WEBPACK_IMPORTED_MODULE_0__util__["time"].Duration(__WEBPACK_IMPORTED_MODULE_0__util__["time"].ratios.ms(), 350),
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mesh_factory__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mesh_library__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__light__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mesh__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vertex__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shader__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shader_library__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shader_factory__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__camera__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__scene__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__frame_stats__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__renderers__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__wgl_math__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__canvas__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__loaders__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__input__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__camera_controls__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__capabilities__ = __webpack_require__(24);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_20__capabilities__; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_10__camera__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_16__canvas__["a"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_19__camera_controls__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_18__input__; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_12__frame_stats__["a"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__light__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_17__loaders__; });
/* unused harmony reexport math */
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_2__material__; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_0__mesh_factory__["a"]; });
/* unused harmony reexport MeshLibrary */
/* unused harmony reexport Mesh */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_5__model__["a"]; });
/* unused harmony reexport Vertex */
/* unused harmony reexport Topologies */
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_13__renderers__; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_11__scene__["a"]; });
/* unused harmony reexport ShaderTypes */
/* unused harmony reexport Shader */
/* unused harmony reexport ShaderProgram */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_8__shader_library__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_9__shader_factory__["a"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_15__util__; });
























/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeshFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vertex__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mesh__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mesh_library__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wgl_math__ = __webpack_require__(3);




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
        if (!__WEBPACK_IMPORTED_MODULE_3__wgl_math__["c" /* isPow2 */](vertexCount))
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(6);
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

class Attributable extends __WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */] {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shader__ = __webpack_require__(4);

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
            type: __WEBPACK_IMPORTED_MODULE_0__shader__["c" /* ShaderTypes */].VERTEX,
            uniforms: ['model', 'view', 'projection']
        },
        {
            source: _sources.fragment,
            type: __WEBPACK_IMPORTED_MODULE_0__shader__["c" /* ShaderTypes */].FRAGMENT,
            uniforms: ['albedo']
        }
    ]
};



/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PBR1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shader__ = __webpack_require__(4);

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
            type: __WEBPACK_IMPORTED_MODULE_0__shader__["c" /* ShaderTypes */].VERTEX,
            uniforms: ['model', 'view', 'projection']
        },
        {
            source: _sources.fragment,
            type: __WEBPACK_IMPORTED_MODULE_0__shader__["c" /* ShaderTypes */].FRAGMENT,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shader__ = __webpack_require__(4);

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
            type: __WEBPACK_IMPORTED_MODULE_0__shader__["c" /* ShaderTypes */].VERTEX,
            uniforms: ['view', 'projection']
        },
        {
            source: _sources.fragment,
            type: __WEBPACK_IMPORTED_MODULE_0__shader__["c" /* ShaderTypes */].FRAGMENT,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wgl_math__ = __webpack_require__(3);



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
        __WEBPACK_IMPORTED_MODULE_2__wgl_math__["d" /* lookAt */](view, position, target, up);
        return view;
    }
    lookAt(where) {
        if (where === null) {
            this.target = null;
            return;
        }
        this.target = __WEBPACK_IMPORTED_MODULE_1__util__["vector"].requireVec3(where);
    }
    setPosition(position) {
        this.position = __WEBPACK_IMPORTED_MODULE_1__util__["vector"].requireVec3(position);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__light__ = __webpack_require__(21);


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
        if (element instanceof __WEBPACK_IMPORTED_MODULE_0__model__["a" /* Model */]) {
            this.addModel(element);
        }
        else if (element instanceof __WEBPACK_IMPORTED_MODULE_1__light__["Light"]) {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);

class FrameStats {
    constructor() {
        this.min = Infinity;
        this.max = -Infinity;
        this.mean = 0;
        this.iterations = 0;
        this.current = NaN;
        this.places = 2;
        this.visible = true;
        this.timer = new __WEBPACK_IMPORTED_MODULE_0__util__["time"].DeltaTimer();
        this.timer.setRatio(__WEBPACK_IMPORTED_MODULE_0__util__["time"].ratios.s());
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__renderers_functional_renderer__ = __webpack_require__(52);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "functional", function() { return __WEBPACK_IMPORTED_MODULE_0__renderers_functional_renderer__["a"]; });




/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_renderer__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shader__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mesh__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__uniforms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util__ = __webpack_require__(0);







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
            scene.sortModels(__WEBPACK_IMPORTED_MODULE_4__model__["a" /* Model */].compareMeshUUID);
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
            if (__WEBPACK_IMPORTED_MODULE_6__util__["types"].isTexture(attr.peekValue())) {
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
                let un = __WEBPACK_IMPORTED_MODULE_3__uniforms__["a" /* Map */].getUniform(attr.name);
                let mappedName = __WEBPACK_IMPORTED_MODULE_3__uniforms__["a" /* Map */].getUniform(light.getName());
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
            !__WEBPACK_IMPORTED_MODULE_5__material__["Material"].equals(material, this.lastMaterial);
        this.lastMaterial = material;
        return isNewMaterial;
    }
    conditionalBindMesh(prog, mesh) {
        let isNullLastMesh = this.lastMesh === null;
        let isNewMesh = isNullLastMesh || !__WEBPACK_IMPORTED_MODULE_2__mesh__["a" /* Mesh */].equals(mesh, this.lastMesh);
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
        let isNewProgram = isNullLastProgram || !__WEBPACK_IMPORTED_MODULE_1__shader__["b" /* ShaderProgram */].equals(prog, this.lastProgram);
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
            prog.setUniform(__WEBPACK_IMPORTED_MODULE_3__uniforms__["a" /* Map */].getUniform(name), value);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loaders_obj_loader__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loaders_texture_loader__ = __webpack_require__(57);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "OBJ", function() { return __WEBPACK_IMPORTED_MODULE_0__loaders_obj_loader__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TEX", function() { return __WEBPACK_IMPORTED_MODULE_1__loaders_texture_loader__["a"]; });





/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OBJ; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mesh__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vertex__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assert_util__ = __webpack_require__(20);
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
        let mesh = new __WEBPACK_IMPORTED_MODULE_0__mesh__["a" /* Mesh */](gl);
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
        mesh.setTopology(__WEBPACK_IMPORTED_MODULE_1__vertex__["a" /* Topologies */].TRIANGLES);
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
            __WEBPACK_IMPORTED_MODULE_2__assert_util__["assertNValues"](values, N, alias);
            for (let i = 1; i < N; i++) {
                raw[name].push(parseAndValidate(values[i], parseFloat, alias));
            }
        }
        function vertexAppender(vi, ni, ui) {
            let vertex = new __WEBPACK_IMPORTED_MODULE_1__vertex__["b" /* Vertex */]();
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
            __WEBPACK_IMPORTED_MODULE_2__assert_util__["assertNValues"](fragInds, 3, 'triangles');
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
    // export function parseMesh(gl: WebGLRenderingContext, objectData: string): Mesh {
    //     var verts = [];
    //     var vertNormals = [];
    //     var textures = [];
    //     var packed: {
    //         verts: Array<string>,
    //         norms: Array<string>,
    //         textures: Array<string>,
    //         hashindices: any,
    //         indices: Array<any>,
    //         index: number
    //     } = {
    //         verts: [],
    //         norms: [],
    //         textures: [],
    //         hashindices: [],
    //         indices: [],
    //         index: 0
    //     }
    //     // array of lines separated by the newline
    //     var lines: Array<string> = objectData.split( '\n' )
    //     for( var i=0; i<lines.length; i++ ){
    //       // if this is a vertex
    //       if( lines[ i ].startsWith( 'v ' ) ){
    //         let line = lines[ i ].slice( 2 ).split( " " )
    //         verts.push( line[ 0 ] );
    //         verts.push( line[ 1 ] );
    //         verts.push( line[ 2 ] );
    //       }
    //       // if this is a vertex normal
    //       else if( lines[ i ].startsWith( 'vn' ) ){
    //         let line = lines[ i ].slice( 3 ).split( " " )
    //         vertNormals.push( line[ 0 ] );
    //         vertNormals.push( line[ 1 ] );
    //         vertNormals.push( line[ 2 ] );
    //       }
    //       // if this is a texture
    //       else if( lines[ i ].startsWith( 'vt' ) ){
    //         let line = lines[ i ].slice( 3 ).split( " " )
    //         textures.push( line[ 0 ] );
    //         textures.push( line[ 1 ] );
    //       }
    //       // if this is a face
    //       else if( lines[ i ].startsWith( 'f ' ) ){
    //         let line = lines[ i ].slice( 2 ).split( " " );
    //         var quad = false;
    //         for(var j=0; j<line.length; j++){
    //             // Triangulating quads
    //             // quad: 'f v0/t0/vn0 v1/t1/vn1 v2/t2/vn2 v3/t3/vn3/'
    //             // corresponding triangles:
    //             //      'f v0/t0/vn0 v1/t1/vn1 v2/t2/vn2'
    //             //      'f v2/t2/vn2 v3/t3/vn3 v0/t0/vn0'
    //             if(j == 3 && !quad) {
    //                 // add v2/t2/vn2 in again before continuing to 3
    //                 j = 2;
    //                 quad = true;
    //             }
    //             if( line[ j ] in packed.hashindices ){
    //                 packed.indices.push( packed.hashindices[ line[ j ] ] );
    //             }
    //             else{
    //                 let face = line[ j ].split( '/' )
    //                 let i0 = parseInt(face[0])
    //                 let i1 = parseInt(face[1])
    //                 let i2 = parseInt(face[2])
    //                 // vertex position
    //                 packed.verts.push( verts[ (i0 - 1) * 3 + 0 ] );
    //                 packed.verts.push( verts[ (i0 - 1) * 3 + 1 ] );
    //                 packed.verts.push( verts[ (i0 - 1) * 3 + 2 ] );
    //                 // vertex textures
    //                 packed.textures.push( textures[ (i1 - 1) * 2 + 0 ] );
    //                 packed.textures.push( textures[ (i1 - 1) * 2 + 1 ] );
    //                 // vertex normals
    //                 packed.norms.push( vertNormals[ (i2 - 1) * 3 + 0 ] );
    //                 packed.norms.push( vertNormals[ (i2 - 1) * 3 + 1 ] );
    //                 packed.norms.push( vertNormals[ (i2 - 1) * 3 + 2 ] );
    //                 // add the newly created vertex to the list of indices
    //                 packed.hashindices[ line[ j ] ] = packed.index;
    //                 packed.indices.push( packed.index );
    //                 // increment the counter
    //                 packed.index += 1;
    //             }
    //             if(j == 3 && quad) {
    //                 // add v0/t0/vn0 onto the second triangle
    //                 packed.indices.push( packed.hashindices[ line[ 0 ] ] );
    //             }
    //         }
    //       }
    //     }
    //     let nVerts: number = packed.verts.length
    //     let nNorms: number = packed.norms.length
    //     let nTex: number = packed.textures.length
    //     if (nVerts % 3 !== 0) {
    //         throw new Error('Error parsing object: vertex data did not have a multiple of 3 elements.')
    //     }
    //     if (nVerts !== nNorms) {
    //         throw new Error('Error parsing object: vertex data did not match number of normals data.')
    //     }
    //     if (nTex/2 !== nVerts/3) {
    //         throw new Error('Error parsing object: texture data did not match number of vertex elements.')
    //     }
    //     let nFragments = nVerts/3
    //     let vertices_ = packed.verts.map(vert => parseFloat(vert))
    //     let textures_ = packed.textures.map(tex => parseFloat(tex))
    //     let normals_ = packed.norms.map(norm => parseFloat(norm))
    //     let mesh = new Mesh(gl)
    //     // debugger
    //     for (let i: number = 0; i < nFragments; i++) {
    //         let x = vertices_[i*3+0]
    //         let y = vertices_[i*3+1]
    //         let z = vertices_[i*3+2]
    //         let nx = normals_[i*3+0]
    //         let ny = normals_[i*3+1]
    //         let nz = normals_[i*3+2]
    //         let u = textures_[i*2+0]
    //         let v = textures_[i*2+1]
    //         let vert = new Vertex()
    //         vert.setPosition(new Float32Array([x, y, z]))
    //         vert.setNormal(new Float32Array([nx, ny, nz]))
    //         vert.setUV(new Float32Array([u, v]))
    //         mesh.addVertex(vert)
    //     }
    //     mesh.setIndices(new Uint16Array(packed.indices))
    //     mesh.setTopology(Topologies.TRIANGLES)
    //     return mesh
    // }
})(OBJ || (OBJ = {}));


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TEX; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__texture__ = __webpack_require__(8);
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
        return __WEBPACK_IMPORTED_MODULE_0__texture__["a" /* Tex2D */](gl, data, opts);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__time_util__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_gl_matrix__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wgl_math__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util__ = __webpack_require__(0);






var Orbit;
(function (Orbit_1) {
    class Orbit2 {
        constructor(input, camera, opts) {
            this.input = input;
            this.camera = camera;
            this.timer = new __WEBPACK_IMPORTED_MODULE_2__time_util__["DeltaTimer"]();
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
            this.timer.setRatio(__WEBPACK_IMPORTED_MODULE_2__time_util__["ratios"].ms());
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
            velocity[0] = __WEBPACK_IMPORTED_MODULE_2__time_util__["Ratio"].scale(timer.getRatio(), velocity[0]);
            velocity[1] = __WEBPACK_IMPORTED_MODULE_2__time_util__["Ratio"].scale(timer.getRatio(), velocity[1]);
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
                this.meanVelocity = __WEBPACK_IMPORTED_MODULE_4__wgl_math__["g" /* vecmean */](this.velocities);
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
                    __WEBPACK_IMPORTED_MODULE_4__wgl_math__["f" /* signedClamp */](velocity, -Infinity, self.maxVelocity);
                    if (self.velocities.length === self.nVelocitySamples)
                        self.velocities.shift();
                    self.velocities.push(velocity);
                }
                if (self.velocities.length > 0) {
                    self.meanVelocity = __WEBPACK_IMPORTED_MODULE_4__wgl_math__["g" /* vecmean */](self.velocities);
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
            this.timer = new __WEBPACK_IMPORTED_MODULE_2__time_util__["DeltaTimer"]();
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
            this.timer = new __WEBPACK_IMPORTED_MODULE_2__time_util__["DeltaTimer"]();
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
                return __WEBPACK_IMPORTED_MODULE_4__wgl_math__["b" /* distance */](pt1, pt2);
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
                const clone = __WEBPACK_IMPORTED_MODULE_5__util__["common"].clone;
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
                __WEBPACK_IMPORTED_MODULE_4__wgl_math__["a" /* abs */](speed);
                if (self.velocities.length > 0) {
                    speed = __WEBPACK_IMPORTED_MODULE_4__wgl_math__["g" /* vecmean */](self.velocities);
                }
                else {
                    speed[0] = vel[0];
                    speed[1] = vel[1];
                }
                let yaw = vel[0] * 0.002;
                let pitch = vel[1] * 0.002;
                // let yaw = speed[0] === 0 ? 0 : vel[0] / speed[0]
                // let pitch = speed[1] === 0 ? 0 : vel[1] / speed[1]
                let mat = new __WEBPACK_IMPORTED_MODULE_5__util__["matrix"].transform()
                    .rotate(__WEBPACK_IMPORTED_MODULE_4__wgl_math__["e" /* radians */](yaw), up)
                    .rotate(__WEBPACK_IMPORTED_MODULE_4__wgl_math__["e" /* radians */](pitch), right)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmQwOGU3N2YwOTMxYmJlMDM1ZTkiLCJ3ZWJwYWNrOi8vLy4vZ2wvdXRpbC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2wtbWF0cml4L3NyYy9nbC1tYXRyaXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsLW1hdHJpeC9zcmMvZ2wtbWF0cml4L2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9nbC93Z2wtbWF0aC50cyIsIndlYnBhY2s6Ly8vLi9nbC9zaGFkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vZ2wvbWVzaC50cyIsIndlYnBhY2s6Ly8vLi9nbC9yZXNvdXJjZS50cyIsIndlYnBhY2s6Ly8vLi9nbC92ZXJ0ZXgudHMiLCJ3ZWJwYWNrOi8vLy4vZ2wvdGV4dHVyZS50cyIsIndlYnBhY2s6Ly8vLi9nbC90eXBlLXV0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vZ2wvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvbGliL3JuZy1icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ieXRlc1RvVXVpZC5qcyIsIndlYnBhY2s6Ly8vLi9nbC9tZXNoLWxpYnJhcnkudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsLW1hdHJpeC9zcmMvZ2wtbWF0cml4L21hdDMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsLW1hdHJpeC9zcmMvZ2wtbWF0cml4L3ZlYzMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsLW1hdHJpeC9zcmMvZ2wtbWF0cml4L3ZlYzQuanMiLCJ3ZWJwYWNrOi8vLy4vZ2wvbWF0ZXJpYWwudHMiLCJ3ZWJwYWNrOi8vLy4vZ2wvY29tbW9uLXV0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vZ2wvdGltZS11dGlsLnRzIiwid2VicGFjazovLy8uL2dsL2Fzc2VydC11dGlsLnRzIiwid2VicGFjazovLy8uL2dsL2xpZ2h0LnRzIiwid2VicGFjazovLy8uL2dsL3VuaWZvcm1zLnRzIiwid2VicGFjazovLy8uL2dsL2lucHV0LXh5LnRzIiwid2VicGFjazovLy8uL2dsL2NhcGFiaWxpdGllcy50cyIsIndlYnBhY2s6Ly8vLi9nbC9rZXlib2FyZC50cyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9tYWluLnRzIiwid2VicGFjazovLy8uL2V4YW1wbGVzL2NvbnRyb2xzLXRlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vZ2wvd2ViLWdsLnRzIiwid2VicGFjazovLy8uL2dsL21lc2gtZmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC92MS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL3Y0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nbC1tYXRyaXgvc3JjL2dsLW1hdHJpeC9tYXQyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nbC1tYXRyaXgvc3JjL2dsLW1hdHJpeC9tYXQyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2wtbWF0cml4L3NyYy9nbC1tYXRyaXgvbWF0NC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2wtbWF0cml4L3NyYy9nbC1tYXRyaXgvcXVhdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2wtbWF0cml4L3NyYy9nbC1tYXRyaXgvdmVjMi5qcyIsIndlYnBhY2s6Ly8vLi9nbC92ZWN0b3ItdXRpbC50cyIsIndlYnBhY2s6Ly8vLi9nbC9tYXRyaXgtdXRpbC50cyIsIndlYnBhY2s6Ly8vLi9nbC9hdHRyaWJ1dGUtdXRpbC50cyIsIndlYnBhY2s6Ly8vLi9nbC9kZWZhdWx0LXV0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vZ2wvc2hhZGVyLWxpYnJhcnkudHMiLCJ3ZWJwYWNrOi8vLy4vZ2wvc2hhZGVycy9zaGFkZXItYmFzaWMudHMiLCJ3ZWJwYWNrOi8vLy4vZ2wvc2hhZGVycy9zaGFkZXItcGJyMS50cyIsIndlYnBhY2s6Ly8vLi9nbC9zaGFkZXJzL3NoYWRlci1za3lib3gudHMiLCJ3ZWJwYWNrOi8vLy4vZ2wvc2hhZGVyLWZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vZ2wvY2FtZXJhLnRzIiwid2VicGFjazovLy8uL2dsL3NjZW5lLnRzIiwid2VicGFjazovLy8uL2dsL2ZyYW1lLXN0YXRzLnRzIiwid2VicGFjazovLy8uL2dsL3JlbmRlcmVycy50cyIsIndlYnBhY2s6Ly8vLi9nbC9yZW5kZXJlcnMvZnVuY3Rpb25hbC1yZW5kZXJlci50cyIsIndlYnBhY2s6Ly8vLi9nbC9yZW5kZXJlcnMvYmFzZS1yZW5kZXJlci50cyIsIndlYnBhY2s6Ly8vLi9nbC9jYW52YXMudHMiLCJ3ZWJwYWNrOi8vLy4vZ2wvbG9hZGVycy50cyIsIndlYnBhY2s6Ly8vLi9nbC9sb2FkZXJzL29iai1sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vZ2wvbG9hZGVycy90ZXh0dXJlLWxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi9nbC9pbnB1dC50cyIsIndlYnBhY2s6Ly8vLi9nbC9jYW1lcmEtY29udHJvbHMudHMiLCJ3ZWJwYWNrOi8vLy4vYXVkL3dlYi1hdWRpby50cyIsIndlYnBhY2s6Ly8vLi9hdWQvd2ViLWF1ZGlvLWFuYWx5c2VyLnRzIiwid2VicGFjazovLy8uL2F1ZC91dGlsLnRzIiwid2VicGFjazovLy8uL2F1ZC93ZWItYXVkaW8tY29udGV4dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtB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QUFDO0lBQ3pCLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDN0MsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ1gsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNQLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDUCxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1IsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDZCxFQUFFLElBQUksR0FBRyxDQUFDO1FBQ1YsRUFBRSxJQUFJLEdBQUcsQ0FBQztRQUNWLEVBQUUsSUFBSSxHQUFHLENBQUM7SUFDVixDQUFDO0lBRUQsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUN2QixFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFFdkIsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUM3QyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDVixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1AsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNQLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDUixDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDUCxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNkLEVBQUUsSUFBSSxHQUFHLENBQUM7UUFDVixFQUFFLElBQUksR0FBRyxDQUFDO1FBQ1YsRUFBRSxJQUFJLEdBQUcsQ0FBQztJQUNYLENBQUM7SUFFRCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ1osR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNaLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDWixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ1gsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNaLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDWixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ1osR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNYLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDWixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ1osR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNiLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDWixHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxJQUFJLEdBQUcsRUFBRSxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDL0MsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxJQUFJLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQy9DLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUMvQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRVosTUFBTSxDQUFDLEdBQUcsQ0FBQztBQUNaLENBQUM7Ozs7Ozs7Ozs7Ozs7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QUcsRUFBRSxDQUFDLEdBQUcsRUFBRyxJQUFJLEVBQUUsQ0FBQztRQUMzQixDQUFDLEdBQUcsRUFBSSxHQUFHLEVBQUcsR0FBRyxFQUFFLEdBQUcsRUFBRyxHQUFHO1FBQzNCLEdBQUcsRUFBSSxHQUFHLEVBQUcsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHO1FBQzNCLEdBQUcsRUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFFMUIsQ0FBQyxHQUFHLEVBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFLLEdBQUc7UUFDM0IsR0FBRyxFQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFHLElBQUksRUFBRSxHQUFHO1FBQzdCLENBQUMsR0FBRyxFQUFHLENBQUMsR0FBRyxFQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUssQ0FBQztRQUMxQixDQUFDLEdBQUcsRUFBRyxDQUFDLEdBQUcsRUFBRyxHQUFHLEVBQUUsQ0FBQyxFQUFLLENBQUM7UUFDekIsR0FBRyxFQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHO1FBQzNCLEdBQUcsRUFBRyxDQUFDLEdBQUcsRUFBRyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFFMUIsQ0FBQyxHQUFHLEVBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUcsSUFBSSxFQUFFLEdBQUc7UUFDN0IsQ0FBQyxHQUFHLEVBQUcsQ0FBQyxHQUFHLEVBQUcsR0FBRyxFQUFHLElBQUksRUFBRSxDQUFDO1FBQzNCLENBQUMsR0FBRyxFQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUcsR0FBRztRQUM1QixDQUFDLEdBQUcsRUFBRyxDQUFDLEdBQUcsRUFBRyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxHQUFHLEVBQUksR0FBRyxFQUFHLEdBQUcsRUFBRSxHQUFHLEVBQUcsQ0FBQztRQUMxQixDQUFDLEdBQUcsRUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFHLEdBQUc7UUFFM0IsR0FBRyxFQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRyxHQUFHO1FBQzNCLEdBQUcsRUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUcsSUFBSSxFQUFFLEdBQUc7UUFDNUIsR0FBRyxFQUFHLENBQUMsR0FBRyxFQUFHLEdBQUcsRUFBRyxHQUFHLEVBQUcsQ0FBQztRQUMxQixDQUFDLEVBQUcsQ0FBQyxDQUFDLEVBQUcsR0FBRyxFQUFFLEdBQUcsRUFBRyxDQUFDO1FBQ3JCLENBQUMsRUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUc7UUFDckIsQ0FBQyxFQUFJLENBQUMsRUFBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUM7S0FDdkI7SUFDRCxPQUFPLEVBQUUsRUFBRTtDQUNYO0FBRWEsaUJBQUssR0FBbUI7SUFDckMsSUFBSSxFQUFFO1FBQ0wsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztRQUMxQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztRQUN6QyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7UUFDeEMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO1FBQ3hDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO1FBQ3pDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7UUFDMUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO1FBQ3hDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7UUFDdkMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7UUFDdEMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7UUFDdEMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztRQUN2QyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7UUFDeEMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO1FBQ3hDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO1FBQ3pDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7UUFDMUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztRQUMxQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztRQUN6QyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO1FBQzdDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztRQUMzQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUc7UUFDOUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHO1FBQ3hDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO1FBQzVDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztRQUMzQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHO1FBQzFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHO1FBQ3pDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRztRQUN4QyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUc7UUFDeEMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUc7UUFDekMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRztRQUMxQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7UUFDeEMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7UUFDNUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztRQUNoRCxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUc7UUFDakQsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFF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S0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdB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QUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsT0FBTztBQUNsQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLG1CQUFtQixPQUFPO0FBQzFCLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3Z3QkQ7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFD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QVMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUM7UUFDdEQsTUFBTSxXQUFXLEdBQUcsSUFBSSx5REFBUyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQztRQUN4RCxNQUFNLFlBQVksR0FBRyxJQUFJLHlEQUFTLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25FLE1BQU0sR0FBRyxHQUFHLElBQUkseURBQVMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDeEQsTUFBTSxNQUFNLEdBQUcsSUFBSSx5REFBUyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMzRCxNQUFNLE1BQU0sR0FBRyxJQUFJLHlEQUFTLENBQUMsRUFBRSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXJFLE1BQU0sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFFekQsR0FBRyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMvRCxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsRUFBRTtRQUN0RCxHQUFHLENBQUMsV0FBVyxDQUFDLHVEQUFJLENBQUMsTUFBTSxDQUFDLHVEQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsR0FBVyxDQUFDLENBQUM7UUFDeEQsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7UUFFaEIsWUFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNoRSxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV0QyxVQUFVLENBQUMsV0FBVyxDQUFDLHVEQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqRCxVQUFVLENBQUMsV0FBVyxDQUFDLHVEQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakQsVUFBVSxDQUFDLFFBQVEsQ0FBQyx1REFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTdDLElBQUksV0FBVyxHQUFHLGNBQWMsQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQztRQUN6RCxJQUFJLGNBQWMsR0FBRyxpQkFBaUIsQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQztRQUMvRCxjQUFjLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwRCxJQUFJLGlCQUFpQixHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFeEUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUM7UUFDekIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMxQixLQUFLLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQztRQUV2QixLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUNkLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDO1FBRXRCLEtBQUssQ0FBQyxVQUFVLEdBQUcsTUFBTTtRQUV6QixjQUFjLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVuRCxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFcEMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDL0IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNwQixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDO1FBRW5CLE1BQU0sT0FBTyxHQUFHLEdBQUcsRUFBRTtZQUVwQixvQkFBb0IsQ0FBQyxNQUFNLEVBQUU7WUFDN0IsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO1lBQ3pCLGlCQUFpQixDQUFDLE1BQU0sRUFBRTtZQUUxQixVQUFVLENBQUMsTUFBTSxFQUFFO1lBQ25CLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFFakIsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUNqQyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsT0FBTyxFQUFFO1lBRTlCLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzVCLElBQUksS0FBSyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN2QyxLQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3RELENBQUMsQ0FBQztZQUVGLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxXQUFXLEVBQUU7WUFDOUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hGLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDO1lBRXZCLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzlDLHlFQUF5RTtZQUV6RSxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUMvQixJQUFJLElBQUksR0FBRyx3REFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUN6RCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUN2QixJQUFJLE9BQU8sR0FBRyxHQUFHLEdBQUcsT0FBTztnQkFDM0IsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLEtBQUssRUFBRSxPQUFPLEdBQUcsS0FBSyxDQUFDO2dCQUN6QyxLQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3RELENBQUMsQ0FBQztZQUVGLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQztZQUU5QixjQUFjO1lBRWQsTUFBTSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQztRQUN0QyxDQUFDO1FBRUQsT0FBTyxFQUFFO0lBQ1YsQ0FBQztDQUFBO0FBRUQsd0JBQXdCLEVBQXlCLEVBQUUsR0FBYyxFQUFFLE9BQWU7SUFDakYsSUFBSSxXQUFXLEdBQUcsRUFBRTtJQUNwQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQzFDLElBQUksVUFBVSxHQUFjLElBQUkseURBQVMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDMUYsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDN0IsQ0FBQztJQUNELE1BQU0sQ0FBQyxXQUFXO0FBQ25CLENBQUM7QUFFRCwyQkFBMkIsRUFBeUIsRUFBRSxHQUFjLEVBQUUsT0FBZTtJQUNwRixJQUFJLFdBQVcsR0FBcUIsRUFBRTtJQUN0QyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQzFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDMUMsSUFBSSxVQUFVLEdBQWMsSUFBSSx5REFBUyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMxRixVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDdkMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7WUFDeEIsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDN0IsQ0FBQztJQUNGLENBQUM7SUFDRCxNQUFNLENBQUMsV0FBVztBQUNuQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pNc0Q7QUFDWDtBQUNOO0FBQ047QUFDSDtBQUNFO0FBQ2M7QUFDOEI7QUFDM0I7QUFDQTtBQUNIO0FBQ2Q7QUFDVztBQUNGO0FBQ047QUFDSjtBQUNHO0FBQ0c7QUFDSjtBQUNhO0FBQ0M7QUE4QjdDOzs7Ozs7Ozs7Ozs7O0FDbEQ0QztBQUNoQjtBQUNlO0FBQ1Y7QUFXbEM7SUFFVyxNQUFNLENBQUMsUUFBUTtRQUNsQixNQUFNLENBQUM7WUFDSCxRQUFRLEVBQUUsSUFBSTtZQUNkLFdBQVcsRUFBRSxFQUFFO1NBQ2xCO0lBQ0wsQ0FBQztJQUVNLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBeUIsRUFDMUMsSUFBZSxFQUFFLFNBQWlCLFdBQVcsQ0FBQyxRQUFRLEVBQUU7UUFFeEQsTUFBTSxJQUFJLEdBQUcsV0FBVyxDQUFDLFFBQVEsRUFBRTtRQUNuQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUM7UUFFM0IsSUFBSSxJQUFJLEdBQVMsSUFBSSxtREFBSSxDQUFDLEVBQUUsQ0FBQztRQUM3QixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ1gsS0FBSyxNQUFNO2dCQUNQLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO2dCQUMxQixLQUFLO1lBQ1QsS0FBSyxVQUFVO2dCQUNYLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO2dCQUM5QixLQUFLO1lBQ1QsS0FBSyxRQUFRO2dCQUNULFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQzlDLEtBQUs7WUFDVCxLQUFLLE1BQU07Z0JBQ1AsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBQzFCLEtBQUs7WUFDVCxLQUFLLFFBQVE7Z0JBQ1QsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7Z0JBQzVCLEtBQUs7UUFDYixDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNkLElBQUksQ0FBQyxRQUFRLEVBQUU7UUFFbkIsTUFBTSxDQUFDLElBQUk7SUFDZixDQUFDO0lBRU0sTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFVO1FBQy9CLE1BQU0saUJBQWlCLEdBQWlCLElBQUksWUFBWSxDQUFDLGtFQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNqRixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzFCLElBQUksTUFBTSxHQUFXLElBQUksdURBQU0sRUFBRTtZQUNqQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFVO1lBRXJDLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQztZQUM1QixDQUFDLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7WUFDNUIsQ0FBQyxHQUFHLGlCQUFpQixDQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO1lBRTVCLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQztZQUM1QixDQUFDLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7WUFFNUIsRUFBRSxHQUFHLENBQUM7WUFDTixFQUFFLEdBQUcsQ0FBQztZQUNOLEVBQUUsR0FBRyxDQUFDO1lBRU4sTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLFlBQVksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUVoRCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUMxQixDQUFDO1FBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQywyREFBVSxDQUFDLFNBQVMsQ0FBQztJQUMxQyxDQUFDO0lBRUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFVO1FBRTFCLE1BQU0saUJBQWlCLEdBQWlCLElBQUksWUFBWSxDQUFDLGtFQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUUvRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3BDLElBQUksTUFBTSxHQUFXLElBQUksdURBQU0sRUFBRTtZQUNqQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFVO1lBRXJDLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQztZQUM1QixDQUFDLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7WUFDNUIsQ0FBQyxHQUFHLGlCQUFpQixDQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO1lBQzVCLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQztZQUM1QixDQUFDLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7WUFDNUIsRUFBRSxHQUFHLGlCQUFpQixDQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO1lBQzdCLEVBQUUsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQztZQUM3QixFQUFFLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7WUFFN0IsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLFlBQVksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUVoRCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQywyREFBVSxDQUFDLFNBQVMsQ0FBQztJQUM3QyxDQUFDO0lBRU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFVO1FBRWhDLE1BQU0saUJBQWlCLEdBQWlCLElBQUksWUFBWSxDQUFDLGtFQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztRQUVoRixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQy9CLElBQUksTUFBTSxHQUFXLElBQUksdURBQU0sRUFBRTtZQUNqQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBUztZQUNuQixJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFTO1lBRTVCLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQztZQUM1QixDQUFDLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7WUFDNUIsQ0FBQyxHQUFHLGlCQUFpQixDQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO1lBRXpCLHVEQUF1RDtZQUN2RCwrQkFBK0I7WUFFbEMsRUFBRSxHQUFHLGlCQUFpQixDQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO1lBQzdCLEVBQUUsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQztZQUM3QixFQUFFLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7WUFFN0IsQ0FBQyxHQUFHLGlCQUFpQixDQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO1lBQzVCLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQztZQUU1QixNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9DLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxZQUFZLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEQsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7UUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLDJEQUFVLENBQUMsU0FBUyxDQUFDO0lBQzdDLENBQUM7SUFFTSxNQUFNLENBQUMsWUFBWSxDQUFDLElBQVU7UUFFcEMsTUFBTSxpQkFBaUIsR0FBaUIsSUFBSSxZQUFZLENBQUMsa0VBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBRTdFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDcEMsSUFBSSxNQUFNLEdBQVcsSUFBSSx1REFBTSxFQUFFO1lBRWpDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQVU7WUFDckMsQ0FBQyxHQUFHLGlCQUFpQixDQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO1lBQzVCLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQztZQUM1QixDQUFDLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7WUFDNUIsQ0FBQyxHQUFHLGlCQUFpQixDQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO1lBQzVCLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQztZQUM1QixFQUFFLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7WUFDN0IsRUFBRSxHQUFHLGlCQUFpQixDQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO1lBQzdCLEVBQUUsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQztZQUU3QixNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9DLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksWUFBWSxDQUFDLENB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QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFD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QUFDQTtBQUNBOztBQUVBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsTUFBTTtBQUNqQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLE1BQU07QUFDakIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQjtBQUNBLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNocERBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxLQUFLO0FBQ2pCLFlBQVksS0FBSztBQUNqQixZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxNQUFNO0FBQ2pCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFD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QUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSztRQUN0QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUTtRQUU1Qix1REFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDO1FBQ3hCLHVEQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUM7UUFFeEIsRUFBRSxDQUFDLENBQUMsU0FBUyxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDOUIsdURBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSx1REFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3RFLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDdEMsdURBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSx1REFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3RFLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDakMsdURBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSx1REFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3RFLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDbEMsdURBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSx1REFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3RFLENBQUM7SUFDRixDQUFDO0lBRU0sTUFBTSxDQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsV0FBb0I7UUFD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QVMsQ0FBQztnQkFDOUQsQ0FBQztZQUNGLENBQUM7WUFDRCxPQUFPLEVBQUU7UUFDVixDQUFDLENBQUM7SUFDSCxDQUFDO0lBRU0sS0FBSyxDQUFDLFFBQWdCO1FBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7SUFDcEMsQ0FBQztJQUVNLElBQUksQ0FBQyxRQUFnQjtRQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDO0lBQ25DLENBQUM7Q0FDRDtBQUU2QiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyNik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZmQwOGU3N2YwOTMxYmJlMDM1ZTkiLCJpbXBvcnQgKiBhcyB2ZWN0b3IgZnJvbSAnLi92ZWN0b3ItdXRpbCdcbmltcG9ydCAqIGFzIG1hdHJpeCBmcm9tICcuL21hdHJpeC11dGlsJ1xuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi90eXBlLXV0aWwnXG5pbXBvcnQgKiBhcyBhdHRyaWJ1dGUgZnJvbSAnLi9hdHRyaWJ1dGUtdXRpbCdcbmltcG9ydCAqIGFzIGNvbW1vbiBmcm9tICcuL2NvbW1vbi11dGlsJ1xuaW1wb3J0ICogYXMgdGltZSBmcm9tICcuL3RpbWUtdXRpbCdcbmltcG9ydCAqIGFzIGFzc2VydCBmcm9tICcuL2Fzc2VydC11dGlsJ1xuaW1wb3J0ICogYXMgZGVmYXVsdHMgZnJvbSAnLi9kZWZhdWx0LXV0aWwnXG5cbmV4cG9ydCB7XG5cdGFzc2VydCxcblx0ZGVmYXVsdHMsXG5cdHZlY3Rvcixcblx0bWF0cml4LFxuXHR0eXBlcyxcblx0Y29tbW9uLFxuXHRhdHRyaWJ1dGUsXG5cdHRpbWVcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC91dGlsLnRzIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IGdsLW1hdHJpeCAtIEhpZ2ggcGVyZm9ybWFuY2UgbWF0cml4IGFuZCB2ZWN0b3Igb3BlcmF0aW9uc1xuICogQGF1dGhvciBCcmFuZG9uIEpvbmVzXG4gKiBAYXV0aG9yIENvbGluIE1hY0tlbnppZSBJVlxuICogQHZlcnNpb24gMi40LjBcbiAqL1xuXG4vKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEJyYW5kb24gSm9uZXMsIENvbGluIE1hY0tlbnppZSBJVi5cblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5mdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5BVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuVEhFIFNPRlRXQVJFLiAqL1xuLy8gRU5EIEhFQURFUlxuXG5pbXBvcnQgKiBhcyBnbE1hdHJpeCBmcm9tIFwiLi9nbC1tYXRyaXgvY29tbW9uXCI7XG5pbXBvcnQgKiBhcyBtYXQyIGZyb20gXCIuL2dsLW1hdHJpeC9tYXQyXCI7XG5pbXBvcnQgKiBhcyBtYXQyZCBmcm9tIFwiLi9nbC1tYXRyaXgvbWF0MmRcIjtcbmltcG9ydCAqIGFzIG1hdDMgZnJvbSBcIi4vZ2wtbWF0cml4L21hdDNcIjtcbmltcG9ydCAqIGFzIG1hdDQgZnJvbSBcIi4vZ2wtbWF0cml4L21hdDRcIjtcbmltcG9ydCAqIGFzIHF1YXQgZnJvbSBcIi4vZ2wtbWF0cml4L3F1YXRcIjtcbmltcG9ydCAqIGFzIHZlYzIgZnJvbSBcIi4vZ2wtbWF0cml4L3ZlYzJcIjtcbmltcG9ydCAqIGFzIHZlYzMgZnJvbSBcIi4vZ2wtbWF0cml4L3ZlYzNcIjtcbmltcG9ydCAqIGFzIHZlYzQgZnJvbSBcIi4vZ2wtbWF0cml4L3ZlYzRcIjtcblxuZXhwb3J0IHtcbiAgZ2xNYXRyaXgsXG4gIG1hdDIsIG1hdDJkLCBtYXQzLCBtYXQ0LFxuICBxdWF0LFxuICB2ZWMyLCB2ZWMzLCB2ZWM0LFxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nbC1tYXRyaXgvc3JjL2dsLW1hdHJpeC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEJyYW5kb24gSm9uZXMsIENvbGluIE1hY0tlbnppZSBJVi5cblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5mdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5BVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuVEhFIFNPRlRXQVJFLiAqL1xuXG4vKipcbiAqIENvbW1vbiB1dGlsaXRpZXNcbiAqIEBtb2R1bGUgZ2xNYXRyaXhcbiAqL1xuXG4vLyBDb25maWd1cmF0aW9uIENvbnN0YW50c1xuZXhwb3J0IGNvbnN0IEVQU0lMT04gPSAwLjAwMDAwMTtcbmV4cG9ydCBsZXQgQVJSQVlfVFlQRSA9ICh0eXBlb2YgRmxvYXQzMkFycmF5ICE9PSAndW5kZWZpbmVkJykgPyBGbG9hdDMyQXJyYXkgOiBBcnJheTtcbmV4cG9ydCBjb25zdCBSQU5ET00gPSBNYXRoLnJhbmRvbTtcblxuLyoqXG4gKiBTZXRzIHRoZSB0eXBlIG9mIGFycmF5IHVzZWQgd2hlbiBjcmVhdGluZyBuZXcgdmVjdG9ycyBhbmQgbWF0cmljZXNcbiAqXG4gKiBAcGFyYW0ge1R5cGV9IHR5cGUgQXJyYXkgdHlwZSwgc3VjaCBhcyBGbG9hdDMyQXJyYXkgb3IgQXJyYXlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldE1hdHJpeEFycmF5VHlwZSh0eXBlKSB7XG4gIEFSUkFZX1RZUEUgPSB0eXBlO1xufVxuXG5jb25zdCBkZWdyZWUgPSBNYXRoLlBJIC8gMTgwO1xuXG4vKipcbiAqIENvbnZlcnQgRGVncmVlIFRvIFJhZGlhblxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBhIEFuZ2xlIGluIERlZ3JlZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvUmFkaWFuKGEpIHtcbiAgcmV0dXJuIGEgKiBkZWdyZWU7XG59XG5cbi8qKlxuICogVGVzdHMgd2hldGhlciBvciBub3QgdGhlIGFyZ3VtZW50cyBoYXZlIGFwcHJveGltYXRlbHkgdGhlIHNhbWUgdmFsdWUsIHdpdGhpbiBhbiBhYnNvbHV0ZVxuICogb3IgcmVsYXRpdmUgdG9sZXJhbmNlIG9mIGdsTWF0cml4LkVQU0lMT04gKGFuIGFic29sdXRlIHRvbGVyYW5jZSBpcyB1c2VkIGZvciB2YWx1ZXMgbGVzc1xuICogdGhhbiBvciBlcXVhbCB0byAxLjAsIGFuZCBhIHJlbGF0aXZlIHRvbGVyYW5jZSBpcyB1c2VkIGZvciBsYXJnZXIgdmFsdWVzKVxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBhIFRoZSBmaXJzdCBudW1iZXIgdG8gdGVzdC5cbiAqIEBwYXJhbSB7TnVtYmVyfSBiIFRoZSBzZWNvbmQgbnVtYmVyIHRvIHRlc3QuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgbnVtYmVycyBhcmUgYXBwcm94aW1hdGVseSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxzKGEsIGIpIHtcbiAgcmV0dXJuIE1hdGguYWJzKGEgLSBiKSA8PSBFUFNJTE9OKk1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYSksIE1hdGguYWJzKGIpKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dsLW1hdHJpeC9zcmMvZ2wtbWF0cml4L2NvbW1vbi5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBnbG0gZnJvbSAnZ2wtbWF0cml4J1xuaW1wb3J0IHsgdmVjdG9yLCB0eXBlcyB9IGZyb20gJy4vdXRpbCdcblxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wPFQgZXh0ZW5kcyBGbG9hdDMyQXJyYXk+KHZhbDogVCwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogdm9pZCB7XG5cdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB2YWwubGVuZ3RoOyBpKyspIHtcblx0XHRpZiAodmFsW2ldIDwgbWluKSB2YWxbaV0gPSBtaW5cblx0XHRpZiAodmFsW2ldID4gbWF4KSB2YWxbaV0gPSBtYXhcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbmVkQ2xhbXA8VCBleHRlbmRzIEZsb2F0MzJBcnJheT4odmFsOiBULCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiB2b2lkIHtcblx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHZhbC5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBfdmFsID0gdmFsW2ldXG5cdFx0bGV0IHNpZ24gPSBfdmFsIDwgMCA/IC0xIDogMVxuXHRcdGlmIChNYXRoLmFicyhfdmFsKSA8IG1pbikge1xuXHRcdFx0dmFsW2ldID0gbWluICogc2lnblxuXHRcdH1cblx0XHRpZiAoTWF0aC5hYnMoX3ZhbCkgPiBtYXgpIHtcblx0XHRcdHZhbFtpXSA9IG1heCAqIHNpZ25cblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFiczxUIGV4dGVuZHMgRmxvYXQzMkFycmF5Pih2YWw6IFQpOiB2b2lkIHtcblx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHZhbC5sZW5ndGg7IGkrKykge1xuXHRcdHZhbFtpXSA9IE1hdGguYWJzKHZhbFtpXSlcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFkaWFucyh2YWw6IG51bWJlcik6IG51bWJlciB7XG5cdHJldHVybiBnbG0uZ2xNYXRyaXgudG9SYWRpYW4odmFsKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVjc3VtPFQgZXh0ZW5kcyB0eXBlcy52ZWN0b3I+KGFycjogQXJyYXk8VD4pOiBUIHtcblx0aWYgKGFyci5sZW5ndGggPT09IDApXG5cdFx0cmV0dXJuIG51bGxcblx0bGV0IHJlczogdHlwZXMudmVjdG9yXG5cdGlmIChhcnJbMF0ubGVuZ3RoID09PSAyKSB7XG5cdFx0cmVzID0gZ2xtLnZlYzIuZnJvbVZhbHVlcygwLCAwKVxuXHR9IGVsc2UgaWYgKGFyclswXS5sZW5ndGggPT09IDMpIHtcblx0XHRyZXMgPSBnbG0udmVjMy5mcm9tVmFsdWVzKDAsIDAsIDApXG5cdH1cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcblx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHJlcy5sZW5ndGg7IGorKykge1xuXHRcdFx0cmVzW2pdICs9IGFycltpXVtqXVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gPFQ+cmVzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZWNtZWFuPFQgZXh0ZW5kcyB0eXBlcy52ZWN0b3I+KGFycjogQXJyYXk8VD4pOiBUIHtcblx0bGV0IHN1bSA9IHZlY3N1bShhcnIpXG5cdGlmIChzdW0gPT09IG51bGwpXG5cdFx0cmV0dXJuIG51bGxcblx0bGV0IG1lYW4gPSBzdW1cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBtZWFuLmxlbmd0aDsgaSsrKSB7XG5cdFx0bWVhbltpXSAvPSBhcnIubGVuZ3RoXG5cdH1cblx0cmV0dXJuIDxUPm1lYW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3RhbmNlKGE6IGdsbS52ZWMyLCBiOiBnbG0udmVjMik6IG51bWJlciB7XG5cdHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3coYlswXS1hWzBdLCAyKSArIE1hdGgucG93KGJbMV0tYVsxXSwgMikpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXgoYXJyOiBBcnJheTxudW1iZXI+KSB7XG5cdGxldCBtYXggPSAtSW5maW5pdHlcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcblx0XHRpZiAoYXJyW2ldID4gbWF4KSBtYXggPSBhcnJbaV1cblx0fVxuXHRyZXR1cm4gbWF4XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaW4oYXJyOiBBcnJheTxudW1iZXI+KSB7XG5cdGxldCBtaW4gPSBJbmZpbml0eVxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuXHRcdGlmIChhcnJbaV0gPCBtaW4pIG1pbiA9IGFycltpXVxuXHR9XG5cdHJldHVybiBtaW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUG93MihuOiBudW1iZXIpIHtcblx0aWYgKG4gPT09IDApXG5cdFx0cmV0dXJuIGZhbHNlXG5cdHdoaWxlIChuICE9PSAxKSB7XG5cdFx0aWYgKG4gJSAyICE9PSAwKVxuXHRcdFx0cmV0dXJuIGZhbHNlXG5cdFx0biA9IG4gLyAyXG5cdH1cblx0cmV0dXJuIHRydWVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvb2tBdChvdXQ6IGdsbS5tYXQ0LCBleWU6IGdsbS52ZWMzLCBjZW50ZXI6IGdsbS52ZWMzLCB1cDogZ2xtLnZlYzMpOiBnbG0ubWF0NCB7XG5cdGxldCB4MCwgeDEsIHgyLCB5MCwgeTEsIHkyLCB6MCwgejEsIHoyLCBsZW47XG5cdGxldCBleWV4ID0gZXllWzBdO1xuXHRsZXQgZXlleSA9IGV5ZVsxXTtcblx0bGV0IGV5ZXogPSBleWVbMl07XG5cdGxldCB1cHggPSB1cFswXTtcblx0bGV0IHVweSA9IHVwWzFdO1xuXHRsZXQgdXB6ID0gdXBbMl07XG5cdGxldCBjZW50ZXJ4ID0gY2VudGVyWzBdO1xuXHRsZXQgY2VudGVyeSA9IGNlbnRlclsxXTtcblx0bGV0IGNlbnRlcnogPSBjZW50ZXJbMl07XG5cblx0aWYgKE1hdGguYWJzKGV5ZXggLSBjZW50ZXJ4KSA8IGdsbS5nbE1hdHJpeC5FUFNJTE9OICYmXG5cdCAgXHRNYXRoLmFicyhleWV5IC0gY2VudGVyeSkgPCBnbG0uZ2xNYXRyaXguRVBTSUxPTiAmJlxuXHQgIFx0TWF0aC5hYnMoZXlleiAtIGNlbnRlcnopIDwgZ2xtLmdsTWF0cml4LkVQU0lMT04pIHtcblx0XHRyZXR1cm4gZ2xtLm1hdDQuaWRlbnRpdHkob3V0KVxuXHR9XG5cblx0ejAgPSBleWV4IC0gY2VudGVyeDtcblx0ejEgPSBleWV5IC0gY2VudGVyeTtcblx0ejIgPSBleWV6IC0gY2VudGVyejtcblxuXHRsZW4gPSAxIC8gTWF0aC5zcXJ0KHowICogejAgKyB6MSAqIHoxICsgejIgKiB6Mik7XG5cdHowICo9IGxlbjtcblx0ejEgKj0gbGVuO1xuXHR6MiAqPSBsZW47XG5cblx0eDAgPSB1cHkgKiB6MiAtIHVweiAqIHoxO1xuXHR4MSA9IHVweiAqIHowIC0gdXB4ICogejI7XG5cdHgyID0gdXB4ICogejEgLSB1cHkgKiB6MDtcblx0bGVuID0gTWF0aC5zcXJ0KHgwICogeDAgKyB4MSAqIHgxICsgeDIgKiB4Mik7XG5cdGlmICghbGVuKSB7XG5cdHgwID0gMDtcblx0eDEgPSAwO1xuXHR4MiA9IDA7XG5cdH0gZWxzZSB7XG5cdGxlbiA9IDEgLyBsZW47XG5cdHgwICo9IGxlbjtcblx0eDEgKj0gbGVuO1xuXHR4MiAqPSBsZW47XG5cdH1cblxuXHR5MCA9IHoxICogeDIgLSB6MiAqIHgxO1xuXHR5MSA9IHoyICogeDAgLSB6MCAqIHgyO1xuXHR5MiA9IHowICogeDEgLSB6MSAqIHgwO1xuXG5cdGxlbiA9IE1hdGguc3FydCh5MCAqIHkwICsgeTEgKiB5MSArIHkyICogeTIpO1xuXHRpZiAoIWxlbikge1xuXHRcdHkwID0gMDtcblx0XHR5MSA9IDA7XG5cdFx0eTIgPSAwO1xuXHR9IGVsc2Uge1xuXHRcdGxlbiA9IDEgLyBsZW47XG5cdFx0eTAgKj0gbGVuO1xuXHRcdHkxICo9IGxlbjtcblx0XHR5MiAqPSBsZW47XG5cdH1cblxuXHRvdXRbMF0gPSB4MDtcblx0b3V0WzFdID0geTA7XG5cdG91dFsyXSA9IHowO1xuXHRvdXRbM10gPSAwO1xuXHRvdXRbNF0gPSB4MTtcblx0b3V0WzVdID0geTE7XG5cdG91dFs2XSA9IHoxO1xuXHRvdXRbN10gPSAwO1xuXHRvdXRbOF0gPSB4Mjtcblx0b3V0WzldID0geTI7XG5cdG91dFsxMF0gPSB6Mjtcblx0b3V0WzExXSA9IDA7XG5cdG91dFsxMl0gPSAtKHgwICogZXlleCArIHgxICogZXlleSArIHgyICogZXlleik7XG5cdG91dFsxM10gPSAtKHkwICogZXlleCArIHkxICogZXlleSArIHkyICogZXlleik7XG5cdG91dFsxNF0gPSAtKHowICogZXlleCArIHoxICogZXlleSArIHoyICogZXlleik7XG5cdG91dFsxNV0gPSAxO1xuXG5cdHJldHVybiBvdXQ7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2wvd2dsLW1hdGgudHMiLCJpbXBvcnQgeyBtYXQ0LCB2ZWMzIH0gZnJvbSAnZ2wtbWF0cml4J1xuaW1wb3J0IHsgUmVzb3VyY2UgfSBmcm9tICcuL3Jlc291cmNlJ1xuaW1wb3J0IHsgdmVjdG9yLCB0eXBlcyB9IGZyb20gJy4vdXRpbCdcbmltcG9ydCB7IFVuaWZvcm1OYW1lcywgVW5pZm9ybU1hcCB9IGZyb20gJy4vdW5pZm9ybXMnXG5pbXBvcnQgKiBhcyB0ZXh0dXJlIGZyb20gJy4vdGV4dHVyZSdcblxudHlwZSBMb2NhdGlvbk1hcHBhYmxlID0ge1xuXHRba2V5OiBzdHJpbmddOiBXZWJHTFVuaWZvcm1Mb2NhdGlvblxufVxuXG5leHBvcnQgdHlwZSBVbmlmb3JtU2V0dGFibGUgPSBudW1iZXIgfCBib29sZWFuIHwgbWF0NCB8IHZlYzMgfCBBcnJheTxudW1iZXI+IHwgdGV4dHVyZS5UZXh0dXJlXG5cbmVudW0gU2hhZGVyVHlwZXMge1xuXHRWRVJURVgsXG5cdEZSQUdNRU5UXG59XG5cbnR5cGUgU2hhZGVyU291cmNlID0ge1xuXHRzb3VyY2U6IHN0cmluZyxcblx0dHlwZTogU2hhZGVyVHlwZXMsXG5cdHVuaWZvcm1zOiBVbmlmb3JtTmFtZXNbXVxufVxuXG50eXBlIFNoYWRlclByb2dyYW1Tb3VyY2UgPSB7XG5cdHNvdXJjZXM6IEFycmF5PFNoYWRlclNvdXJjZT5cbn1cblxudHlwZSBTaGFkZXJBdHRyaWJ1dGUgPSB7XG5cdG5hbWU6IHN0cmluZyxcblx0bG9jYXRpb246IG51bWJlclxufVxuXG50eXBlIFNoYWRlckF0dHJpYnV0ZUtpbmRzID0gJ3Bvc2l0aW9uJyB8ICd1dicgfCAnbm9ybWFsJ1xudHlwZSBTaGFkZXJDb3JlVW5pZm9ybUtpbmRzID0gJ21vZGVsJyB8ICd2aWV3JyB8ICdwcm9qZWN0aW9uJyB8ICdjYW1lcmFfcG9zaXRpb24nXG5cbmNsYXNzIFNoYWRlckF0dHJpYnV0ZXMge1xuXG5cdFtrZXk6IHN0cmluZ106IFNoYWRlckF0dHJpYnV0ZVxuXG5cdHBvc2l0aW9uOiBTaGFkZXJBdHRyaWJ1dGVcblx0dXY6IFNoYWRlckF0dHJpYnV0ZVxuXHRub3JtYWw6IFNoYWRlckF0dHJpYnV0ZVxuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMucG9zaXRpb24gPSB7XG5cdFx0XHRuYW1lOiAnaW5fcG9zaXRpb24nLFxuXHRcdFx0bG9jYXRpb246IG51bGxcblx0XHR9XG5cdFx0dGhpcy51diA9IHtcblx0XHRcdG5hbWU6ICdpbl91dicsXG5cdFx0XHRsb2NhdGlvbjogbnVsbFxuXHRcdH1cblx0XHR0aGlzLm5vcm1hbCA9IHtcblx0XHRcdG5hbWU6ICdpbl9ub3JtYWwnLFxuXHRcdFx0bG9jYXRpb246IG51bGxcblx0XHR9XG5cdH1cbn1cblxuY2xhc3MgU2hhZGVyIGV4dGVuZHMgUmVzb3VyY2Uge1xuXG5cdHByaXZhdGUgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuXHRwcml2YXRlIHNvdXJjZTogc3RyaW5nXG5cdHByaXZhdGUgdHlwZTogbnVtYmVyXG5cdHByaXZhdGUgc2hhZGVyPzogV2ViR0xTaGFkZXJcblx0cHJpdmF0ZSB1bmlmb3JtczogVW5pZm9ybU1hcDxib29sZWFuPlxuXG5cdHB1YmxpYyBpc1ZhbGlkOiBib29sZWFuXG5cblx0Y29uc3RydWN0b3IoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCwgc3JjOiBTaGFkZXJTb3VyY2UpIHtcblx0XHRzdXBlcigpXG5cdFx0dGhpcy5nbCA9IGdsXG5cdFx0dGhpcy5zb3VyY2UgPSBzcmMuc291cmNlXG5cdFx0dGhpcy50eXBlID0gU2hhZGVyLmdldFNoYWRlclR5cGUoZ2wsIHNyYy50eXBlKVxuXHRcdHRoaXMuaXNWYWxpZCA9IHRydWVcblx0XHR0aGlzLnVuaWZvcm1zID0gbmV3IFVuaWZvcm1NYXAoc3JjLnVuaWZvcm1zLCB0cnVlKVxuXHRcdHRoaXMuc2V0dXAoKVxuXHR9XG5cblx0cHVibGljIGdldEdMU2hhZGVyKCk6IFdlYkdMU2hhZGVyIHtcblx0XHRyZXR1cm4gdGhpcy5zaGFkZXJcblx0fVxuXG5cdHB1YmxpYyBoYXNVbmlmb3JtKG5hbWU6IFVuaWZvcm1OYW1lcyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnVuaWZvcm1zLmhhc1VuaWZvcm0obmFtZSlcblx0fVxuXG5cdHByaXZhdGUgc2V0dXAoKTogdm9pZCB7XG5cdFx0Y29uc3QgZ2wgPSB0aGlzLmdsXG5cdFx0bGV0IHNoYWRlcjogV2ViR0xTaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIodGhpcy50eXBlKVxuXHRcdGdsLnNoYWRlclNvdXJjZShzaGFkZXIsIHRoaXMuc291cmNlKVxuXHRcdGdsLmNvbXBpbGVTaGFkZXIoc2hhZGVyKVxuXHRcdGlmICghZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgZ2wuQ09NUElMRV9TVEFUVVMpKSB7XG5cdFx0XHRsZXQgbWVzc2FnZTogc3RyaW5nID0gJ1NoYWRlciBjb21waWxhdGlvbiBlcnJvcjogJyArIFxuXHRcdFx0XHRnbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcilcblx0XHRcdGNvbnNvbGUuZXJyb3IobWVzc2FnZSlcblx0XHRcdGdsLmRlbGV0ZVNoYWRlcihzaGFkZXIpXG5cdFx0XHRzaGFkZXIgPSBudWxsXG5cdFx0XHR0aGlzLmlzVmFsaWQgPSBmYWxzZVxuXHQgIFx0fVxuXHQgIFx0dGhpcy5zaGFkZXIgPSBzaGFkZXJcblx0fVxuXG5cdHByaXZhdGUgc3RhdGljIGdldFNoYWRlclR5cGUoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCwgdHlwZTogU2hhZGVyVHlwZXMpOiBudW1iZXIge1xuXHRcdGlmICh0eXBlID09IFNoYWRlclR5cGVzLkZSQUdNRU5UKVxuXHRcdFx0cmV0dXJuIGdsLkZSQUdNRU5UX1NIQURFUlxuXHRcdGlmICh0eXBlID09IFNoYWRlclR5cGVzLlZFUlRFWClcblx0XHRcdHJldHVybiBnbC5WRVJURVhfU0hBREVSXG5cdFx0dGhyb3cgbmV3IEVycm9yKCdVbnJlY29nbml6ZWQgc2hhZGVyIHR5cGUuJylcblx0fVxufVxuXG4vL1xuLy9cdHByb2dyYW1cbi8vXG5cbmNsYXNzIFNoYWRlclByb2dyYW0gZXh0ZW5kcyBSZXNvdXJjZSB7XG5cblx0cHJpdmF0ZSBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0XG5cdHByaXZhdGUgc2hhZGVyczogQXJyYXk8U2hhZGVyPlxuXHRwcml2YXRlIHByb2dyYW0/OiBXZWJHTFByb2dyYW1cblx0cHJpdmF0ZSBhdHRyaWJ1dGVzOiBTaGFkZXJBdHRyaWJ1dGVzXG5cdHByaXZhdGUgX2lzQm91bmQ6IGJvb2xlYW4gPSBmYWxzZVxuXHRwcml2YXRlIHVuaWZvcm1Mb2NhdGlvbnM6IExvY2F0aW9uTWFwcGFibGUgPSB7fVxuXG5cdHB1YmxpYyBpc1ZhbGlkOiBib29sZWFuID0gdHJ1ZVxuXHRwdWJsaWMgaXNGaW5hbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZVxuXG5cdGNvbnN0cnVjdG9yKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQpIHtcblx0XHRzdXBlcigpXG5cdFx0dGhpcy5hdHRyaWJ1dGVzID0gbmV3IFNoYWRlckF0dHJpYnV0ZXMoKVxuXHRcdHRoaXMuZ2wgPSBnbFxuXHR9XG5cblx0cHVibGljIGF0dGFjaChzaGFkZXJzOiBBcnJheTxTaGFkZXI+KSB7XG5cdFx0dGhpcy5hc3NlcnROb3RGaW5hbGl6ZWQoJ2F0dGFjaCcpXG5cdFx0Zm9yIChsZXQgc2hhZGVyIG9mIHNoYWRlcnMpIHtcblx0XHRcdGlmICghc2hhZGVyLmlzVmFsaWQpXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignQXR0ZW1wdGVkIHRvIGF0dGFjaCBhbiBpbnZhbGlkIHNoYWRlci4nKVxuXHRcdH1cblx0XHR0aGlzLnNoYWRlcnMgPSBzaGFkZXJzXG5cdFx0dGhpcy5maW5hbGl6ZSgpXG5cdFx0dGhpcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbnMoKVxuXHR9XG5cblx0cHVibGljIGJpbmQoKTogdm9pZCB7XG5cdFx0dGhpcy5hc3NlcnRGaW5hbGl6ZWQoJ2JpbmQnKVxuXHRcdHRoaXMuZ2wudXNlUHJvZ3JhbSh0aGlzLnByb2dyYW0pXG5cdFx0dGhpcy5faXNCb3VuZCA9IHRydWVcblx0fVxuXG5cdHB1YmxpYyB1bmJpbmQoKTogdm9pZCB7XG5cdFx0dGhpcy5hc3NlcnRGaW5hbGl6ZWQoJ3VuYmluZCcpXG5cdFx0dGhpcy5nbC51c2VQcm9ncmFtKG51bGwpXG5cdFx0dGhpcy5faXNCb3VuZCA9IGZhbHNlXG5cdH1cblxuXHRwdWJsaWMgaGFzVW5pZm9ybShuYW1lOiBVbmlmb3JtTmFtZXMpIHtcblx0XHRmb3IgKGxldCBzaGFkZXIgb2YgdGhpcy5zaGFkZXJzKSB7XG5cdFx0XHRpZiAoc2hhZGVyLmhhc1VuaWZvcm0obmFtZSkpXG5cdFx0XHRcdHJldHVybiB0cnVlXG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZVxuXHR9XG5cblx0cHVibGljIGlzQm91bmQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuX2lzQm91bmRcblx0fVxuXG5cdHB1YmxpYyBzZXRVbmlmb3JtKG5hbWU6IHN0cmluZywgdmFsdWU6IFVuaWZvcm1TZXR0YWJsZSkge1xuXHRcdGlmICh0eXBlb2YodmFsdWUpID09ICdudW1iZXInKSB7XG5cdFx0XHR0aGlzLnNldGYobmFtZSwgdmFsdWUpXG5cblx0XHR9IGVsc2UgaWYgKHR5cGVvZih2YWx1ZSkgPT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHR0aGlzLnNldGIobmFtZSwgdmFsdWUpXG5cblx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG5cdFx0XHR0aGlzLnNldFZlYzNmKG5hbWUsIHZhbHVlKVxuXG5cdFx0fSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIHRleHR1cmUuVGV4dHVyZSkge1xuXHRcdFx0dGhpcy5zZXRpKG5hbWUsIHZhbHVlLmluZGV4KVxuXG5cdFx0fSBlbHNlIGlmICh0eXBlcy5pc01hdDQodmFsdWUpKSB7XG5cdFx0XHR0aGlzLnNldE1hdDRmKG5hbWUsIHZhbHVlKVxuXG5cdFx0fSBlbHNlIGlmICh0eXBlcy5pc1ZlYzModmFsdWUpKSB7XG5cdFx0XHR0aGlzLnNldFZlYzNmKG5hbWUsIHZhbHVlKVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgc2V0ZihuYW1lOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmdsLnVuaWZvcm0xZih0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbihuYW1lKSwgdmFsdWUpXG5cdH1cblxuXHRwcml2YXRlIHNldGIobmFtZTogc3RyaW5nLCB2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuZ2wudW5pZm9ybTFpKHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9uKG5hbWUpLCB2YWx1ZSA/IDEgOiAwKVxuXHR9XG5cblx0cHJpdmF0ZSBzZXRpKG5hbWU6IHN0cmluZywgdmFsdWU6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuZ2wudW5pZm9ybTFpKHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9uKG5hbWUpLCB2YWx1ZSlcblx0fVxuXG5cdHByaXZhdGUgc2V0TWF0NGYobmFtZTogc3RyaW5nLCB2YWx1ZTogbWF0NCkge1xuXHRcdHRoaXMuZ2wudW5pZm9ybU1hdHJpeDRmdih0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbihuYW1lKSwgZmFsc2UsIHZhbHVlKVxuXHR9XG5cblx0cHJpdmF0ZSBzZXRWZWMzZihuYW1lOiBzdHJpbmcsIHZhbHVlOiB2ZWMzIHwgQXJyYXk8bnVtYmVyPiB8IG51bWJlcikge1xuXHRcdHZhbHVlID0gdmVjdG9yLnJlcXVpcmVWZWMzKHZhbHVlKVxuXHRcdHRoaXMuZ2wudW5pZm9ybTNmdih0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbihuYW1lKSwgdmFsdWUpXG5cdH1cblxuXHRwcml2YXRlIGZpbmFsaXplKCk6IHZvaWQge1xuXHRcdHRoaXMuYXNzZXJ0Tm90RmluYWxpemVkKCdmaW5hbGl6ZScpXG5cdFx0Y29uc3QgZ2wgPSB0aGlzLmdsXG5cdFx0Y29uc3Qgc2hhZGVycyA9IHRoaXMuc2hhZGVyc1xuXHRcdGxldCBwcm9ncmFtOiBXZWJHTFByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKClcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgc2hhZGVycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Z2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIHNoYWRlcnNbaV0uZ2V0R0xTaGFkZXIoKSlcblx0XHR9XG5cdFx0Z2wubGlua1Byb2dyYW0ocHJvZ3JhbSlcblx0XHRpZiAoIWdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpKSB7XG5cdFx0XHRsZXQgbWVzc2FnZTogc3RyaW5nID0gJ1NoYWRlciBwcm9ncmFtIGluaXRpYWxpemF0aW9uIGVycm9yOiAnICsgXG5cdFx0XHRcdGdsLmdldFByb2dyYW1JbmZvTG9nKHByb2dyYW0pXG4gICAgXHRcdGNvbnNvbGUuZXJyb3IobWVzc2FnZSlcbiAgICBcdFx0cHJvZ3JhbSA9IG51bGxcbiAgICBcdFx0dGhpcy5pc1ZhbGlkID0gZmFsc2VcbiAgXHRcdH1cbiAgXHRcdHRoaXMucHJvZ3JhbSA9IHByb2dyYW1cbiAgXHRcdHRoaXMuaXNGaW5hbGl6ZWQgPSB0cnVlXG5cdH1cblxuXHRwdWJsaWMgZ2V0QXR0cmlidXRlTG9jYXRpb24oa2luZDogU2hhZGVyQXR0cmlidXRlS2luZHMpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmF0dHJpYnV0ZXNba2luZF0ubG9jYXRpb25cblx0fVxuXG5cdHByaXZhdGUgZ2V0QXR0cmlidXRlTG9jYXRpb25zKCk6IHZvaWQge1xuXHRcdGxldCBhdHRyaWJ1dGVzID0gdGhpcy5hdHRyaWJ1dGVzXG5cdFx0Y29uc3QgZ2wgPSB0aGlzLmdsXG5cdFx0Y29uc3QgcHJvZ3JhbSA9IHRoaXMucHJvZ3JhbVxuXHRcdC8vXG5cdFx0Ly9cdEBUT0RPOiBBdm9pZCBzdHJpbmcgaW5kZXhpbmcgaW50byBhdHRyaWJ1dGVzXG5cdFx0Ly9cblx0XHRsZXQgYXR0cmliTmFtZXM6IEFycmF5PHN0cmluZz4gPSBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKVxuXHRcdGZvciAobGV0IGF0dHJpYiBvZiBhdHRyaWJOYW1lcykge1xuXHRcdFx0YXR0cmlidXRlc1thdHRyaWJdLmxvY2F0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgYXR0cmlidXRlc1thdHRyaWJdLm5hbWUpXG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGdldFByb2dyYW0oKTogV2ViR0xQcm9ncmFtIHtcblx0XHRyZXR1cm4gdGhpcy5wcm9ncmFtXG5cdH1cblxuXHRwcml2YXRlIGdldFVuaWZvcm1Mb2NhdGlvbihuYW1lOiBzdHJpbmcpOiBXZWJHTFVuaWZvcm1Mb2NhdGlvbiB7XG5cdFx0dGhpcy5hc3NlcnRGaW5hbGl6ZWQoJ3VuaWZvcm0nKVxuXHRcdGxldCBsb2M6IFdlYkdMVW5pZm9ybUxvY2F0aW9uID0gdGhpcy51bmlmb3JtTG9jYXRpb25zW25hbWVdXG5cdFx0aWYgKGxvYyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRsb2MgPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dyYW0sIG5hbWUpXG5cdFx0XHRpZiAobG9jID09IG51bGwpIHtcblx0XHRcdFx0Y29uc29sZS53YXJuKGBVbnJlY29nbml6ZWQgdW5pZm9ybSBuYW1lIFwiJHtuYW1lfVwiLmApXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnVuaWZvcm1Mb2NhdGlvbnNbbmFtZV0gPSBsb2Ncblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGxvY1xuXHR9XG5cblx0cHJpdmF0ZSBhc3NlcnROb3RGaW5hbGl6ZWQob3A6IHN0cmluZyk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmlzRmluYWxpemVkKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgY2FsbCBtZXRob2QgLyBvcCBcIiR7b3B9XCIgYWZ0ZXIgZmluYWxpemluZyB0aGUgcHJvZ3JhbS5gKVxuXHR9XG5cblx0cHJpdmF0ZSBhc3NlcnRGaW5hbGl6ZWQob3A6IHN0cmluZyk6IHZvaWQge1xuXHRcdGlmICghdGhpcy5pc0ZpbmFsaXplZClcblx0XHRcdHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGNhbGwgbWV0aG9kIC8gb3AgXCIke29wfVwiIGJlZm9yZSBmaW5hbGl6aW5nIHRoZSBwcm9ncmFtLmApXG5cdH1cbn1cblxuZXhwb3J0IHsgXG5cdFNoYWRlciwgXG5cdFNoYWRlclByb2dyYW0sIFxuXHRTaGFkZXJTb3VyY2UsIFxuXHRTaGFkZXJQcm9ncmFtU291cmNlLCBcblx0U2hhZGVyVHlwZXMsXG5cdFNoYWRlckF0dHJpYnV0ZUtpbmRzLFxuXHRTaGFkZXJDb3JlVW5pZm9ybUtpbmRzXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2wvc2hhZGVyLnRzIiwiaW1wb3J0IHsgVmVydGV4LCBUb3BvbG9naWVzIH0gZnJvbSAnLi92ZXJ0ZXgnXG5pbXBvcnQgeyBSZXNvdXJjZSB9IGZyb20gJy4vcmVzb3VyY2UnXG5pbXBvcnQgeyBTaGFkZXJQcm9ncmFtLCBTaGFkZXJBdHRyaWJ1dGVLaW5kcyB9IGZyb20gJy4vc2hhZGVyJ1xuXG5jbGFzcyBNZXNoIGV4dGVuZHMgUmVzb3VyY2Uge1xuXG5cdHByaXZhdGUgdG9wb2xvZ3k6IG51bWJlclxuXHRwcml2YXRlIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHRcblx0cHJpdmF0ZSB2Ym86IFdlYkdMQnVmZmVyXG5cdHByaXZhdGUgZWJvOiBXZWJHTEJ1ZmZlclxuXHRwcml2YXRlIGlzRmluYWxpemVkOiBib29sZWFuID0gZmFsc2Vcblx0cHJpdmF0ZSBfaXNCb3VuZDogYm9vbGVhbiA9IGZhbHNlXG5cblx0cHJpdmF0ZSB2ZXJ0aWNlczogQXJyYXk8VmVydGV4PiA9IFtdXG5cdHByaXZhdGUgaW5kaWNlczogVWludDE2QXJyYXkgPSBuZXcgVWludDE2QXJyYXkoMClcblxuXHRjb25zdHJ1Y3RvcihnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0KSB7XG5cdFx0c3VwZXIoKVxuXHRcdHRoaXMuZ2wgPSBnbFxuXHRcdHRoaXMudmJvID0gdGhpcy5nbC5jcmVhdGVCdWZmZXIoKVxuXHRcdHRoaXMuZWJvID0gdGhpcy5nbC5jcmVhdGVCdWZmZXIoKVxuXHR9XG5cblx0cHVibGljIGFkZFZlcnRleCh2ZXJ0ZXg6IFZlcnRleCk6IHZvaWQge1xuXHRcdHRoaXMuYXNzZXJ0Tm90RmluYWxpemVkKCdhZGRWZXJ0ZXgnKVxuXHRcdGlmICh0aGlzLnZlcnRpY2VzLmxlbmd0aCAhPT0gMCkge1xuXHRcdFx0aWYgKHZlcnRleC5zaXplKCkgIT09IHRoaXMudmVydGljZXNbMF0uc2l6ZSgpKVxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0FsbCB2ZXJ0aWNlcyBtdXN0IGhhdmUgY29uc2lzdGVudCBudW1iZXJzIG9mIGVsZW1lbnRzLicpXG5cdFx0fVxuXHRcdHRoaXMudmVydGljZXMucHVzaCh2ZXJ0ZXgpXG5cdH1cblxuXHRwdWJsaWMgc2V0SW5kaWNlcyhpbmRpY2VzOiBVaW50MTZBcnJheSk6IHZvaWQge1xuXHRcdHRoaXMuYXNzZXJ0Tm90RmluYWxpemVkKCdzZXRJbmRpY2VzJylcblx0XHR0aGlzLmluZGljZXMgPSBpbmRpY2VzXG5cdH1cblxuXHRwdWJsaWMgc2V0VG9wb2xvZ3kodG9wb2xvZ3k6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuYXNzZXJ0Tm90RmluYWxpemVkKCdzZXRUb3BvbG9neScpXG5cdFx0dGhpcy50b3BvbG9neSA9IHRvcG9sb2d5XG5cdH1cblxuXHRwcml2YXRlIGdldERyYXdUeXBlKCk6IG51bWJlciB7XG5cdFx0Y29uc3QgZ2wgPSB0aGlzLmdsXG5cdFx0aWYgKHRoaXMudG9wb2xvZ3kgPT09IFRvcG9sb2dpZXMuVFJJQU5HTEVTKSB7XG5cdFx0XHRyZXR1cm4gZ2wuVFJJQU5HTEVTXG5cdFx0fSBlbHNlIGlmICh0aGlzLnRvcG9sb2d5ID09PSBUb3BvbG9naWVzLlRSSUFOR0xFX1NUUklQKSB7XG5cdFx0XHRyZXR1cm4gZ2wuVFJJQU5HTEVfU1RSSVBcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBVbnJlY29nbml6ZWQgdG9wb2xvZ3kgJHt0aGlzLnRvcG9sb2d5fWApXG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGRyYXcoKTogdm9pZCB7XG5cdFx0dGhpcy5hc3NlcnRGaW5hbGl6ZWQoJ2RyYXcnKVxuXHRcdGNvbnN0IGdsID0gdGhpcy5nbFxuXHRcdGxldCBuSW5kaWNlczogbnVtYmVyID0gdGhpcy5pbmRpY2VzLmxlbmd0aFxuXHRcdGxldCB1c2VJbmRpY2VzOiBib29sZWFuID0gbkluZGljZXMgPiAwXG5cdFx0bGV0IG5WZXJ0aWNlczogbnVtYmVyID0gdGhpcy52ZXJ0aWNlcy5sZW5ndGhcblx0XHRsZXQgZHJhd1R5cGU6IG51bWJlciA9IHRoaXMuZ2V0RHJhd1R5cGUoKVxuXHRcdGlmICh1c2VJbmRpY2VzKSB7XG5cdFx0XHRnbC5kcmF3RWxlbWVudHMoZHJhd1R5cGUsIG5JbmRpY2VzLCBnbC5VTlNJR05FRF9TSE9SVCwgMClcblx0XHR9IGVsc2Uge1xuXHRcdFx0Z2wuZHJhd0FycmF5cyhkcmF3VHlwZSwgMCwgblZlcnRpY2VzKVxuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBmaW5hbGl6ZSgpOiB2b2lkIHtcblx0XHR0aGlzLmFzc2VydE5vdEZpbmFsaXplZCgnZmluYWxpemUnKVxuXHRcdGlmICh0aGlzLnZlcnRpY2VzLmxlbmd0aCA9PT0gMClcblx0XHRcdHJldHVyblxuXHRcdHRoaXMuc3RvcmVCdWZmZXJEYXRhKClcblx0XHR0aGlzLmlzRmluYWxpemVkID0gdHJ1ZVxuXHR9XG5cblx0cHVibGljIGlzQm91bmQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuX2lzQm91bmRcblx0fVxuXG5cdHB1YmxpYyBiaW5kKHByb2dyYW06IFNoYWRlclByb2dyYW0pOiB2b2lkIHtcblx0XHR0aGlzLmFzc2VydEZpbmFsaXplZCgnYmluZCcpXG5cdFx0aWYgKHRoaXMudmVydGljZXMubGVuZ3RoID09PSAwKVxuXHRcdFx0cmV0dXJuXG5cblx0XHRjb25zdCBnbCA9IHRoaXMuZ2xcblx0XHRsZXQgdmVydDAgPSB0aGlzLnZlcnRpY2VzWzBdXG5cdFx0bGV0IHN0cmlkZTogbnVtYmVyID0gdmVydDAuc2l6ZSgpXG5cdFx0bGV0IGJ5dGVzOiBudW1iZXIgPSB2ZXJ0MC5ieXRlc1BlckVsZW1lbnQoKVxuXHRcdGxldCBvZmZzZXQ6IG51bWJlciA9IDBcblx0XHRsZXQgbkluZGljZXM6IG51bWJlciA9IHRoaXMuaW5kaWNlcy5sZW5ndGhcblx0XHRsZXQgYXR0cmliOiBudW1iZXIgPSAwXG5cblx0XHRnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy52Ym8pXG5cblx0XHQvL1x0cG9zaXRpb25cblx0XHRsZXQgcG9zTG9jOiBudW1iZXIgPSBwcm9ncmFtLmdldEF0dHJpYnV0ZUxvY2F0aW9uKCdwb3NpdGlvbicpXG5cdFx0Z2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkocG9zTG9jKVxuXHRcdGdsLnZlcnRleEF0dHJpYlBvaW50ZXIocG9zTG9jLCAzLCBnbC5GTE9BVCwgZmFsc2UsIHN0cmlkZSpieXRlcywgb2Zmc2V0KmJ5dGVzKVxuXHRcdG9mZnNldCArPSAzXG5cblx0XHQvL1x0dXZcblx0XHRpZiAodmVydDAuc2l6ZVVWKCkgPiAwKSB7XG5cdFx0XHRsZXQgdXZMb2M6IG51bWJlciA9IHByb2dyYW0uZ2V0QXR0cmlidXRlTG9jYXRpb24oJ3V2Jylcblx0XHRcdGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHV2TG9jKVxuXHRcdFx0Z2wudmVydGV4QXR0cmliUG9pbnRlcih1dkxvYywgMiwgZ2wuRkxPQVQsIGZhbHNlLCBzdHJpZGUqYnl0ZXMsIG9mZnNldCpieXRlcylcblx0XHRcdG9mZnNldCArPSAyXG5cdFx0fVxuXG5cdFx0Ly9cdG5vcm1hbHNcblx0XHRpZiAodmVydDAuc2l6ZU5vcm1hbCgpID4gMCkge1xuXHRcdFx0bGV0IG5vcm1Mb2M6IG51bWJlciA9IHByb2dyYW0uZ2V0QXR0cmlidXRlTG9jYXRpb24oJ25vcm1hbCcpXG5cdFx0XHRnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShub3JtTG9jKVxuXHRcdFx0Z2wudmVydGV4QXR0cmliUG9pbnRlcihub3JtTG9jLCAzLCBnbC5GTE9BVCwgZmFsc2UsIHN0cmlkZSpieXRlcywgb2Zmc2V0KmJ5dGVzKVxuXHRcdFx0b2Zmc2V0ICs9IDNcblx0XHR9XG5cblx0XHQvL1x0aW5kaWNlc1xuXHRcdGlmIChuSW5kaWNlcyA+IDApIHtcblx0XHRcdGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIHRoaXMuZWJvKVxuXHRcdH1cblxuXHRcdHRoaXMuX2lzQm91bmQgPSB0cnVlXG5cdH1cblxuXHRwdWJsaWMgdW5iaW5kKCk6IHZvaWQge1xuXHRcdGNvbnN0IGdsID0gdGhpcy5nbFxuXHRcdGNvbnN0IGluZGljZXMgPSB0aGlzLmluZGljZXNcblx0XHRnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgbnVsbClcblx0XHRpZiAoaW5kaWNlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBudWxsKVxuXHRcdH1cblx0XHR0aGlzLl9pc0JvdW5kID0gZmFsc2Vcblx0fVxuXG5cdHB1YmxpYyBkaXNwb3NlKCk6IHZvaWQge1xuXHRcdGlmICghdGhpcy5pc0ZpbmFsaXplZClcblx0XHRcdHJldHVyblxuXHRcdGNvbnN0IGdsID0gdGhpcy5nbFxuXHRcdGdsLmRlbGV0ZUJ1ZmZlcih0aGlzLnZibylcblx0XHRnbC5kZWxldGVCdWZmZXIodGhpcy5lYm8pXG5cdH1cblxuXHRwcml2YXRlIHN0b3JlQnVmZmVyRGF0YSgpOiB2b2lkIHtcblx0XHRjb25zdCBnbCA9IHRoaXMuZ2xcblx0XHRsZXQgZGF0YTogRmxvYXQzMkFycmF5ID0gdGhpcy5nZXRJbnRlcmxlYXZlZERhdGEoKVxuXHRcdGxldCBuSW5kaWNlczogbnVtYmVyID0gdGhpcy5pbmRpY2VzLmxlbmd0aFxuXG5cdFx0Ly9cdHZib1xuXHRcdGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLnZibylcblx0XHRnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgZGF0YSwgZ2wuU1RBVElDX0RSQVcpXG5cblx0XHQvL1x0ZWJvXG5cdFx0aWYgKG5JbmRpY2VzID4gMCkge1xuXHRcdFx0Z2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy5lYm8pXG5cdFx0XHRnbC5idWZmZXJEYXRhKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCB0aGlzLmluZGljZXMsIGdsLlNUQVRJQ19EUkFXKVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZ2V0SW50ZXJsZWF2ZWREYXRhKCk6IEZsb2F0MzJBcnJheSB7XG5cdFx0Y29uc3QgdmVydGljZXMgPSB0aGlzLnZlcnRpY2VzXG5cdFx0bGV0IG5WZXJ0aWNlcyA9IHZlcnRpY2VzLmxlbmd0aFxuXHRcdGlmIChuVmVydGljZXMgPT0gMClcblx0XHRcdHJldHVybiBuZXcgRmxvYXQzMkFycmF5KDApXG5cdFx0bGV0IHRvdGFsU2l6ZTogbnVtYmVyID0gblZlcnRpY2VzICogdmVydGljZXNbMF0uc2l6ZSgpXG5cdFx0bGV0IGFsbERhdGE6IEZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWxTaXplKVxuXHRcdGxldCBhbGxEYXRhSW5kZXg6IG51bWJlciA9IDBcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgblZlcnRpY2VzOyBpKyspIHtcblx0XHRcdGxldCBkYXRhOiBGbG9hdDMyQXJyYXkgPSB2ZXJ0aWNlc1tpXS5nZXRJbnRlcmxlYXZlZERhdGEoKVxuXHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IGRhdGEubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0YWxsRGF0YVthbGxEYXRhSW5kZXhdID0gZGF0YVtqXVxuXHRcdFx0XHRhbGxEYXRhSW5kZXgrK1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gYWxsRGF0YVxuXHR9XG5cblx0cHJpdmF0ZSBhc3NlcnROb3RGaW5hbGl6ZWQob3A/OiBzdHJpbmcpOiB2b2lkIHtcblx0XHRpZiAoIW9wKVxuXHRcdFx0b3AgPSAnKHVuc3BlY2lmaWVkKSdcblx0XHRpZiAodGhpcy5pc0ZpbmFsaXplZClcblx0XHRcdHRocm93IG5ldyBFcnJvcihgTWV0aG9kIC8gb3BlcmF0aW9uIFwiJHtvcH1cIiB3YXMgY2FsbGVkIGFmdGVyIGZpbmFsaXppbmcgbWVzaC5gKVxuXHR9XG5cblx0cHJpdmF0ZSBhc3NlcnRGaW5hbGl6ZWQob3A6IHN0cmluZyA9ICcodW5zcGVjaWZpZWQpJyk6IHZvaWQge1xuXHRcdGlmICghdGhpcy5pc0ZpbmFsaXplZClcblx0XHRcdHRocm93IG5ldyBFcnJvcihgTWV0aG9kIC8gb3BlcmF0aW9uIFwiJHtvcH1cIiB3YXMgY2FsbGVkIGJlZm9yZSBmaW5hbGl6aW5nIG1lc2guYClcdFxuXHR9XG59XG5cbmV4cG9ydCB7IE1lc2ggfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2dsL21lc2gudHMiLCJpbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnXG5cbmNsYXNzIFJlc291cmNlIHtcblxuXHRwdWJsaWMgdXVpZDogc3RyaW5nXG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy51dWlkID0gdjQoKVxuXHR9XG5cblx0cHVibGljIHN0YXRpYyBlcXVhbHMoYTogUmVzb3VyY2UsIGI6IFJlc291cmNlKTogYm9vbGVhbiB7XG5cdFx0aWYgKGEgPT09IG51bGwgfHwgYiA9PT0gbnVsbClcblx0XHRcdHJldHVybiBmYWxzZVxuXHRcdHJldHVybiBhLnV1aWQgPT09IGIudXVpZFxuXHR9XG5cblx0cHVibGljIHN0YXRpYyBjb21wYXJlVVVJRChhOiBSZXNvdXJjZSwgYjogUmVzb3VyY2UpOiBudW1iZXIge1xuXHRcdGlmIChhLnV1aWQgPT09IGIudXVpZClcblx0XHRcdHJldHVybiAwXG5cdFx0cmV0dXJuIDFcblx0fVxuXG59XG5cbmV4cG9ydCB7IFJlc291cmNlIH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC9yZXNvdXJjZS50cyIsImNsYXNzIFZlcnRleCB7XG5cblx0cHJpdmF0ZSBwb3NpdGlvbjogRmxvYXQzMkFycmF5XG5cdHByaXZhdGUgdXY6IEZsb2F0MzJBcnJheVxuXHRwcml2YXRlIG5vcm1hbDogRmxvYXQzMkFycmF5XG5cdHByaXZhdGUgcG9zaXRpb25Db3VudDogbnVtYmVyID0gMFxuXHRwcml2YXRlIHV2Q291bnQ6IG51bWJlciA9IDBcblx0cHJpdmF0ZSBub3JtYWxDb3VudDogbnVtYmVyID0gMFxuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMucG9zaXRpb24gPSBuZXcgRmxvYXQzMkFycmF5KDMpXG5cdFx0dGhpcy51diA9IG5ldyBGbG9hdDMyQXJyYXkoMilcblx0XHR0aGlzLm5vcm1hbCA9IG5ldyBGbG9hdDMyQXJyYXkoMylcblx0fVxuXG5cdHB1YmxpYyBzZXRQb3NpdGlvbihwb3M6IEZsb2F0MzJBcnJheSk6IHZvaWQge1xuXHRcdHRoaXMuYXNzZXJ0VmFsaWRBcnJheVNpemUocG9zLCAzLCAncG9zaXRpb24nKVxuXHRcdHRoaXMucG9zaXRpb24gPSBwb3Ncblx0XHR0aGlzLnBvc2l0aW9uQ291bnQgPSAzXG5cdH1cblxuXHRwdWJsaWMgc2V0VVYodXY6IEZsb2F0MzJBcnJheSk6IHZvaWQge1xuXHRcdHRoaXMuYXNzZXJ0VmFsaWRBcnJheVNpemUodXYsIDIsICd1dicpXG5cdFx0dGhpcy51diA9IHV2XG5cdFx0dGhpcy51dkNvdW50ID0gMlxuXHR9XG5cblx0cHVibGljIHNldE5vcm1hbChub3JtOiBGbG9hdDMyQXJyYXkpOiB2b2lkIHtcblx0XHR0aGlzLmFzc2VydFZhbGlkQXJyYXlTaXplKG5vcm0sIDMsICdub3JtYWxzJylcblx0XHR0aGlzLm5vcm1hbCA9IG5vcm1cblx0XHR0aGlzLm5vcm1hbENvdW50ID0gM1xuXHR9XG5cblx0cHVibGljIHNpemVQb3NpdGlvbigpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnBvc2l0aW9uQ291bnRcblx0fVxuXG5cdHB1YmxpYyBzaXplVVYoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy51dkNvdW50XG5cdH1cblxuXHRwdWJsaWMgc2l6ZU5vcm1hbCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5vcm1hbENvdW50XG5cdH1cblxuXHRwdWJsaWMgc2l6ZSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnNpemVQb3NpdGlvbigpICsgdGhpcy5zaXplTm9ybWFsKCkgKyB0aGlzLnNpemVVVigpXG5cdH1cblxuXHRwdWJsaWMgYnl0ZXNQZXJFbGVtZW50KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMucG9zaXRpb24uQllURVNfUEVSX0VMRU1FTlRcblx0fVxuXG5cdHB1YmxpYyBnZXRJbnRlcmxlYXZlZERhdGEoKTogRmxvYXQzMkFycmF5IHtcblx0XHRsZXQgZGF0YTogRmxvYXQzMkFycmF5ID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLnNpemUoKSlcblx0XHRsZXQgaTogbnVtYmVyID0gMFxuXHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCB0aGlzLnBvc2l0aW9uQ291bnQ7IGorKykge1xuXHRcdFx0ZGF0YVtpXSA9IHRoaXMucG9zaXRpb25bal1cblx0XHRcdGkrK1xuXHRcdH1cblx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgdGhpcy51dkNvdW50OyBqKyspIHtcblx0XHRcdGRhdGFbaV0gPSB0aGlzLnV2W2pdXG5cdFx0XHRpKytcblx0XHR9XG5cdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IHRoaXMubm9ybWFsQ291bnQ7IGorKykge1xuXHRcdFx0ZGF0YVtpXSA9IHRoaXMubm9ybWFsW2pdXG5cdFx0XHRpKytcblx0XHR9XG5cdFx0cmV0dXJuIGRhdGFcblx0fVxuXG5cdHByaXZhdGUgYXNzZXJ0VmFsaWRBcnJheVNpemUoYXJyOiBGbG9hdDMyQXJyYXksIHNpemU6IG51bWJlciwgdHlwZT86IHN0cmluZykge1xuXHRcdGlmICghdHlwZSlcblx0XHRcdHR5cGUgPSAnKHVuc3BlY2lmaWVkKSdcblx0XHRpZiAoYXJyLmxlbmd0aCAhPT0gc2l6ZSkge1xuXHRcdFx0bGV0IG1lc3NhZ2U6IHN0cmluZyA9IGBFeHBlY3RlZCBhdHRyaWJ1dGUgb2YgdHlwZSBcIiR7dHlwZX1cIiB0byBiZSBvZiBzaXplICR7c2l6ZX07XG5cdFx0XHRcdGluc3RlYWQgd2FzICR7YXJyLmxlbmd0aH1gXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcblx0XHR9XG5cblx0fVxufVxuXG5jbGFzcyBUb3BvbG9naWVzIHtcblx0cHVibGljIHN0YXRpYyBUUklBTkdMRVM6IG51bWJlciA9IDBcblx0cHVibGljIHN0YXRpYyBUUklBTkdMRV9TVFJJUDogbnVtYmVyID0gMVxufVxuXG5leHBvcnQgeyBWZXJ0ZXgsIFRvcG9sb2dpZXMgfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2dsL3ZlcnRleC50cyIsImltcG9ydCAqIGFzIGRlZmF1bHRzIGZyb20gJy4vZGVmYXVsdC11dGlsJ1xuaW1wb3J0ICogYXMgbWF0aCBmcm9tICcuL3dnbC1tYXRoJ1xuaW1wb3J0IHsgUmVzb3VyY2UgfSBmcm9tICcuL3Jlc291cmNlJ1xuXG5leHBvcnQgdHlwZSBEYXRhVHlwZXMgPSBIVE1MSW1hZ2VFbGVtZW50IHwgVWludDhBcnJheSB8IG51bGxcblxuZXhwb3J0IGNsYXNzIFRleHR1cmVPcHRzIHtcblx0bGV2ZWw6IG51bWJlclxuXHR3aWR0aDogbnVtYmVyXG5cdGhlaWdodDogbnVtYmVyXG5cdGJvcmRlcjogbnVtYmVyXG5cdGludGVybmFsRm9ybWF0OiBudW1iZXJcblx0c291cmNlRm9ybWF0OiBudW1iZXJcblx0dHlwZTogbnVtYmVyXG5cdGRhdGFUeXBlOiBudW1iZXJcblx0d3JhcFM6IG51bWJlclxuXHR3cmFwVDogbnVtYmVyXG5cblx0cHVibGljIHN0YXRpYyBEZWZhdWx0MkQoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCk6IFRleHR1cmVPcHRzIHtcblx0XHRsZXQgb3B0cyA9IG5ldyBUZXh0dXJlT3B0cygpXG5cdFx0b3B0cy5sZXZlbCA9IDBcblx0XHRvcHRzLmhlaWdodCA9IDBcblx0XHRvcHRzLmJvcmRlciA9IDBcblx0XHRvcHRzLmludGVybmFsRm9ybWF0ID0gZ2wuUkdCQVxuXHRcdG9wdHMuc291cmNlRm9ybWF0ID0gZ2wuUkdCQVxuXHRcdG9wdHMudHlwZSA9IGdsLlRFWFRVUkVfMkRcblx0XHRvcHRzLmRhdGFUeXBlID0gZ2wuVU5TSUdORURfQllURVxuXHRcdG9wdHMud3JhcFMgPSBnbC5DTEFNUF9UT19FREdFXG5cdFx0b3B0cy53cmFwVCA9IGdsLkNMQU1QX1RPX0VER0Vcblx0XHRyZXR1cm4gb3B0c1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUZXgyRChnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCBkYXRhOiBEYXRhVHlwZXMsIG9wdHM/OiBUZXh0dXJlT3B0cyk6IFRleHR1cmUge1xuXHRpZiAoIW9wdHMpIHtcblx0XHRvcHRzID0gVGV4dHVyZU9wdHMuRGVmYXVsdDJEKGdsKVxuXHRcdGlmIChkYXRhICYmIGRhdGEgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50KSB7XG5cdFx0XHRvcHRzLndpZHRoID0gZGF0YS53aWR0aFxuXHRcdFx0b3B0cy5oZWlnaHQgPSBkYXRhLmhlaWdodFxuXHRcdH1cblx0fVxuXHRyZXR1cm4gbmV3IFRleHR1cmUoZ2wsIGRhdGEsIG9wdHMpXG59XG5cbmV4cG9ydCBjbGFzcyBUZXh0dXJlIGV4dGVuZHMgUmVzb3VyY2Uge1xuXG5cdHByaXZhdGUgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuXHRwcml2YXRlIG9wdHM6IFRleHR1cmVPcHRzXG5cdHB1YmxpYyBoYW5kbGU6IFdlYkdMVGV4dHVyZVxuXHRwcml2YXRlIF9leGlzdHM6IGJvb2xlYW5cblx0cHJpdmF0ZSBfYm91bmQ6IGJvb2xlYW5cblx0cHVibGljIGRhdGE6IERhdGFUeXBlc1xuXG5cdHB1YmxpYyBpbmRleDogbnVtYmVyXG5cblx0Y29uc3RydWN0b3IoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCwgZGF0YTogRGF0YVR5cGVzLCBvcHRzOiBUZXh0dXJlT3B0cykge1xuXHRcdHN1cGVyKClcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLm9wdHMgPSBvcHRzXG5cdFx0dGhpcy5kYXRhID0gZGF0YVxuXHRcdHRoaXMuX2V4aXN0cyA9IGZhbHNlXG5cdFx0dGhpcy5fYm91bmQgPSBmYWxzZVxuXHRcdHRoaXMuY3JlYXRlKClcblx0fVxuXG5cdHByaXZhdGUgY29uZmlndXJlMkQodGV4OiBXZWJHTFRleHR1cmUpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5kYXRhID09PSBudWxsIHx8IHRoaXMuZGF0YSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpIHtcblx0XHRcdHRoaXMuY29uZmlndXJlMkREYXRhKDxhbnk+dGhpcy5kYXRhLCB0ZXgpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY29uZmlndXJlMkRJbWFnZSh0aGlzLmRhdGEsIHRleClcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNvbmZpZ3VyZTJESW1hZ2UoZGF0YTogSFRNTEltYWdlRWxlbWVudCwgdGV4OiBXZWJHTFRleHR1cmUpOiB2b2lkIHtcblx0XHRjb25zdCBvcHRzID0gdGhpcy5vcHRzXG5cdFx0Y29uc3QgZ2wgPSB0aGlzLmdsXG5cdFx0Z2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCBvcHRzLmxldmVsLCBvcHRzLmludGVybmFsRm9ybWF0LCBcblx0XHRcdG9wdHMuc291cmNlRm9ybWF0LCBvcHRzLmRhdGFUeXBlLCBkYXRhKVxuXG5cdFx0aWYgKG1hdGguaXNQb3cyKGRhdGEud2lkdGgpICYmIG1hdGguaXNQb3cyKGRhdGEuaGVpZ2h0KSkge1xuXHRcdFx0Z2wuZ2VuZXJhdGVNaXBtYXAoZ2wuVEVYVFVSRV8yRClcblx0XHR9IGVsc2Uge1xuXHRcdFx0Z2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgb3B0cy53cmFwUylcblx0ICAgIFx0Z2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgb3B0cy53cmFwVClcblx0ICAgIFx0Z2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLkxJTkVBUilcblx0ICAgIH1cblx0fVxuXG5cdHByaXZhdGUgY29uZmlndXJlMkREYXRhKGRhdGE6IFVpbnQ4QXJyYXkgfCBudWxsLCB0ZXg6IFdlYkdMVGV4dHVyZSk6IHZvaWQge1xuXHRcdGNvbnN0IG9wdHMgPSB0aGlzLm9wdHNcblx0XHRjb25zdCBnbCA9IHRoaXMuZ2xcblx0XHRnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIG9wdHMubGV2ZWwsIG9wdHMuaW50ZXJuYWxGb3JtYXQsXG4gICAgICAgICAgICAgICAgb3B0cy53aWR0aCwgb3B0cy5oZWlnaHQsIG9wdHMuYm9yZGVyLFxuICAgICAgICAgICAgICAgIG9wdHMuc291cmNlRm9ybWF0LCBvcHRzLmRhdGFUeXBlLCBkYXRhKVxuXHR9XG5cblx0cHVibGljIGNyZWF0ZSgpOiBXZWJHTFRleHR1cmUge1xuXHRcdHRoaXMuYXNzZXJ0RG9lc05vdEV4aXN0KCdjcmVhdGUnKVxuXG5cdFx0Y29uc3QgZ2wgPSB0aGlzLmdsXG5cdFx0Y29uc3Qgb3B0cyA9IHRoaXMub3B0c1xuXHRcdGNvbnN0IHRleCA9IGdsLmNyZWF0ZVRleHR1cmUoKVxuXG5cdFx0Z2wuYmluZFRleHR1cmUob3B0cy50eXBlLCB0ZXgpXG5cblx0XHRpZiAob3B0cy50eXBlID09PSBnbC5URVhUVVJFXzJEKSB7XG5cdFx0XHR0aGlzLmNvbmZpZ3VyZTJEKHRleClcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBVbnJlY29nbml6ZWQgdGV4dHVyZSB0eXBlLmApXG5cdFx0fVxuXG5cdFx0Z2wuYmluZFRleHR1cmUob3B0cy50eXBlLCBudWxsKVxuXG5cdFx0dGhpcy5fZXhpc3RzID0gdHJ1ZVxuXHRcdHRoaXMuaGFuZGxlID0gdGV4XG5cdFx0cmV0dXJuIHRoaXMuaGFuZGxlXG5cdH1cblxuXHRwdWJsaWMgZXhpc3RzKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLl9leGlzdHNcblx0fVxuXG5cdHB1YmxpYyBpc0JvdW5kKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLl9ib3VuZFxuXHR9XG5cblx0cHVibGljIGNsb25lKCk6IFRleHR1cmUge1xuXHRcdC8vXG5cdFx0Ly9cdEBUT0RPOiBGaXggY2xvbmluZ1xuXHRcdC8vXG5cdFx0dGhyb3cgbmV3IEVycm9yKCdDbG9uaW5nIG5vdCB5ZXQgaW1wbGVtZW50ZWQnKVxuXHR9XG5cblx0cHVibGljIGJpbmQoKTogdm9pZCB7XG5cdFx0dGhpcy5hc3NlcnRFeGlzdHMoJ2JpbmQnKVxuXHRcdHRoaXMuZ2wuYmluZFRleHR1cmUodGhpcy5vcHRzLnR5cGUsIHRoaXMuaGFuZGxlKVxuXHRcdHRoaXMuX2JvdW5kID0gdHJ1ZVxuXHR9XG5cblx0cHVibGljIHVuYmluZCgpOiB2b2lkIHtcblx0XHR0aGlzLmFzc2VydEV4aXN0cygndW5iaW5kJylcblx0XHR0aGlzLmdsLmJpbmRUZXh0dXJlKHRoaXMub3B0cy50eXBlLCBudWxsKVxuXHRcdHRoaXMuX2JvdW5kID0gZmFsc2Vcblx0fVxuXG5cdHB1YmxpYyBkaXNwb3NlKCk6IHZvaWQge1xuXHRcdGNvbnN0IGdsID0gdGhpcy5nbFxuXHRcdGlmICghdGhpcy5leGlzdHMoKSkge1xuXHRcdFx0Y29uc29sZS53YXJuKCdBdHRlbXB0ZWQgdG8gZGlzcG9zZSBvZiBhIHRleHR1cmUgYmVmb3JlIGNyZWF0aW5nIGl0LicpXG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cdFx0Z2wuZGVsZXRlVGV4dHVyZSh0aGlzLmhhbmRsZSlcblx0XHR0aGlzLl9leGlzdHMgPSBmYWxzZVxuXHR9XG5cblx0cHJpdmF0ZSBhc3NlcnRFeGlzdHMob3A6IHN0cmluZyk6IHZvaWQge1xuXHRcdGlmICghdGhpcy5leGlzdHMoKSlcblx0XHRcdHRocm93IG5ldyBFcnJvcihgT3BlcmF0aW9uIC8gbWV0aG9kIFwiJHtvcH1cIiByZXF1aXJlcyBhIGNhbGwgdG8gY3JlYXRlKCkuYClcblx0fVxuXHRwcml2YXRlIGFzc2VydERvZXNOb3RFeGlzdChvcDogc3RyaW5nKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuZXhpc3RzKCkpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYE9wZXJhdGlvbiAvIG1ldGhvZCBcIiR7b3B9XCIgY2Fubm90IGJlIGNhbGxlZCBvbmNlIHRoZSB0ZXh0dXJlIGV4aXN0cy5gKVxuXHR9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC90ZXh0dXJlLnRzIiwiaW1wb3J0IHsgbWF0NCwgdmVjMiwgdmVjMywgZ2xNYXRyaXggfSBmcm9tICdnbC1tYXRyaXgnXG5pbXBvcnQgKiBhcyB0ZXh0dXJlIGZyb20gJy4vdGV4dHVyZSdcblxuZXhwb3J0IHR5cGUgYXJyYXlQcmltaXRpdmUgPSBBcnJheTxudW1iZXI+XG5leHBvcnQgdHlwZSBhcnJheUxpa2UgPSBBcnJheTxudW1iZXI+IHwgRmxvYXQzMkFycmF5XG5leHBvcnQgdHlwZSBnbG1BcnJheVByaW1pdGl2ZSA9IEZsb2F0MzJBcnJheVxuZXhwb3J0IHR5cGUgZ2xtQXJyYXkgPSB2ZWMzIHwgbWF0NFxuZXhwb3J0IHR5cGUgcHJpbWl0aXZlID0gbnVtYmVyIHwgYm9vbGVhbiB8IHN0cmluZ1xuZXhwb3J0IHR5cGUgdmVjM0NvbnZlcnRpYmxlID0gbnVtYmVyIHwgdmVjMyB8IEFycmF5PG51bWJlcj5cbmV4cG9ydCB0eXBlIGNsb25lYWJsZSA9IHByaW1pdGl2ZSB8IG1hdDQgfCB2ZWMzIHwgYXJyYXlQcmltaXRpdmUgfCB0ZXh0dXJlLlRleHR1cmVcbmV4cG9ydCB0eXBlIHZlY3RvciA9IHZlYzIgfCB2ZWMzXG5cbmV4cG9ydCBlbnVtIGNvcmUge1xuXHRtYXQ0LFxuXHR2ZWMzLFxuXHRGbG9hdDMyQXJyYXksXG5cdG51bWJlcixcblx0Ym9vbGVhbixcblx0c3RyaW5nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc01hdDQoZGF0YTogdmVjMyB8IG1hdDQpOiBkYXRhIGlzIG1hdDQge1xuXHRyZXR1cm4gZGF0YS5sZW5ndGggPT09IDE2XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1ZlYzMoZGF0YTogdmVjMyB8IG1hdDQpOiBkYXRhIGlzIHZlYzMge1xuXHRyZXR1cm4gZGF0YS5sZW5ndGggPT09IDNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJpbWl0aXZlKGRhdGE6IGNsb25lYWJsZSk6IGRhdGEgaXMgcHJpbWl0aXZlIHtcblx0aWYgKHR5cGVvZiBkYXRhID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgZGF0YSA9PT0gJ2Jvb2xlYW4nIHx8IHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJylcblx0XHRyZXR1cm4gdHJ1ZVxuXHRyZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTkVsZW1lbnRBcnJheShkYXRhOiBjbG9uZWFibGUsIE46IG51bWJlcik6IGJvb2xlYW4ge1xuXHRpZiAoaXNQcmltaXRpdmUoZGF0YSkpIHtcblx0XHRyZXR1cm4gZmFsc2Vcblx0fSBlbHNlIGlmIChpc1RleHR1cmUoZGF0YSkpIHtcblx0XHRyZXR1cm4gZmFsc2Vcblx0fVxuXHRyZXR1cm4gKCdsZW5ndGgnIGluIGRhdGEpICYmIChkYXRhLmxlbmd0aCA9PT0gTilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVGV4dHVyZShkYXRhOiBjbG9uZWFibGUpOiBkYXRhIGlzIHRleHR1cmUuVGV4dHVyZSB7XG5cdHJldHVybiBkYXRhIGluc3RhbmNlb2YgdGV4dHVyZS5UZXh0dXJlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5KGRhdGE6IGNsb25lYWJsZSk6IGRhdGEgaXMgYXJyYXlQcmltaXRpdmUge1xuXHRpZiAoQXJyYXkuaXNBcnJheShkYXRhKSlcblx0XHRyZXR1cm4gdHJ1ZVxuXHRyZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzR0xNQXJyYXlUeXBlKGRhdGE6IGNsb25lYWJsZSk6IGRhdGEgaXMgZ2xtQXJyYXkge1xuXHRpZiAoaXNQcmltaXRpdmUoZGF0YSkpIHtcblx0XHRyZXR1cm4gZmFsc2Vcblx0fSBlbHNlIGlmICghKGRhdGEgaW5zdGFuY2VvZiBGbG9hdDMyQXJyYXkpKSB7XG5cdFx0cmV0dXJuIGZhbHNlXG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIGlzTWF0NChkYXRhKSB8fCBpc1ZlYzMoZGF0YSlcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2dsL3R5cGUtdXRpbC50cyIsImltcG9ydCB7IFJlc291cmNlIH0gZnJvbSAnLi9yZXNvdXJjZSdcbmltcG9ydCB7IE1lc2ggfSBmcm9tICcuL21lc2gnXG5pbXBvcnQgeyBtYXQ0LCB2ZWMzLCBnbE1hdHJpeCB9IGZyb20gJ2dsLW1hdHJpeCdcbmltcG9ydCB7IFNoYWRlclByb2dyYW0gfSBmcm9tICcuL3NoYWRlcidcbmltcG9ydCB7IG1hdHJpeCwgdHlwZXMsIHZlY3RvciB9IGZyb20gJy4vdXRpbCdcbmltcG9ydCAqIGFzIG1hdGggZnJvbSAnLi93Z2wtbWF0aCdcbmltcG9ydCAqIGFzIE1hdGVyaWFsIGZyb20gJy4vbWF0ZXJpYWwnXG5cbmV4cG9ydCB0eXBlIFJlbmRlckNhbGxiYWNrVCA9ICgpID0+IHZvaWRcblxuY2xhc3MgTW9kZWwgZXh0ZW5kcyBSZXNvdXJjZSB7XG5cblx0cHJpdmF0ZSBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0XG5cdHB1YmxpYyBtZXNoOiBNZXNoXG5cdHB1YmxpYyBwcm9ncmFtOiBTaGFkZXJQcm9ncmFtXG5cdHB1YmxpYyBtYXRlcmlhbDogTWF0ZXJpYWwuTWF0ZXJpYWxcblxuXHRwdWJsaWMgYWxpYXM6IHN0cmluZ1xuXG5cdHByaXZhdGUgcGFyZW50OiBNb2RlbFxuXHRwcml2YXRlIGNoaWxkcmVuOiB7IFtrZXk6IHN0cmluZ106IE1vZGVsIH1cblxuXHRwcml2YXRlIHBvc2l0aW9uOiB2ZWMzXG5cdHByaXZhdGUgcm90YXRpb246IHZlYzNcblx0cHJpdmF0ZSBzY2FsZTogdmVjM1xuXHRwcml2YXRlIHRyYW5zZm9ybTogbWF0cml4LnRyYW5zZm9ybVxuXG5cdC8vXHRFdmVudHNcblx0cHVibGljIG9uQmVmb3JlUmVuZGVyOiBSZW5kZXJDYWxsYmFja1Rcblx0cHVibGljIG9uQWZ0ZXJSZW5kZXI6IFJlbmRlckNhbGxiYWNrVFxuXG5cdGNvbnN0cnVjdG9yKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsIHByb2dyYW06IFNoYWRlclByb2dyYW0sIG1lc2g6IE1lc2gsIG1hdGVyaWFsOiBNYXRlcmlhbC5NYXRlcmlhbCkge1xuXHRcdHN1cGVyKClcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnByb2dyYW0gPSBwcm9ncmFtXG5cdFx0dGhpcy5tZXNoID0gbWVzaFxuXHRcdHRoaXMubWF0ZXJpYWwgPSBtYXRlcmlhbFxuXHRcdHRoaXMucG9zaXRpb24gPSB2ZWMzLmZyb21WYWx1ZXMoMCwgMCwgMClcblx0XHR0aGlzLnJvdGF0aW9uID0gdmVjMy5mcm9tVmFsdWVzKDAsIDAsIDApXG5cdFx0dGhpcy5zY2FsZSA9IHZlYzMuZnJvbVZhbHVlcygxLCAxLCAxKVxuXHRcdHRoaXMuYWxpYXMgPSAnJ1xuXHRcdHRoaXMudHJhbnNmb3JtID0gbmV3IG1hdHJpeC50cmFuc2Zvcm1cblxuXHRcdHRoaXMucGFyZW50ID0gbnVsbFxuXHRcdHRoaXMuY2hpbGRyZW4gPSB7fVxuXG5cdFx0dGhpcy5vbkJlZm9yZVJlbmRlciA9ICgpID0+IHt9XG5cdFx0dGhpcy5vbkFmdGVyUmVuZGVyID0gKCkgPT4ge31cblx0fVxuXG5cdHB1YmxpYyBzZXRNZXNoKG1lc2g6IE1lc2gpOiB2b2lkIHsgXG5cdFx0dGhpcy5tZXNoID0gbWVzaCBcblx0fVxuXG5cdHB1YmxpYyBzZXRNYXRlcmlhbChtYXRlcmlhbDogTWF0ZXJpYWwuTWF0ZXJpYWwpOiB2b2lkIHsgXG5cdFx0dGhpcy5tYXRlcmlhbCA9IG1hdGVyaWFsIFxuXHR9XG5cblx0cHVibGljIHNldFBvc2l0aW9uKHBvczogdHlwZXMudmVjM0NvbnZlcnRpYmxlKTogdm9pZCB7XG5cdFx0dGhpcy5wb3NpdGlvbiA9IHZlY3Rvci5yZXF1aXJlVmVjMyhwb3MpXG5cdH1cblxuXHRwdWJsaWMgc2V0Um90YXRpb24ocm90OiB0eXBlcy52ZWMzQ29udmVydGlibGUpOiB2b2lkIHtcblx0XHR0aGlzLnJvdGF0aW9uID0gdmVjdG9yLnJlcXVpcmVWZWMzKHJvdClcblx0fVxuXG5cdHB1YmxpYyBzZXRTY2FsZShzY2FsZTogdHlwZXMudmVjM0NvbnZlcnRpYmxlKTogdm9pZCB7XG5cdFx0dGhpcy5zY2FsZSA9IHZlY3Rvci5yZXF1aXJlVmVjMyhzY2FsZSlcblx0fVxuXG5cdHB1YmxpYyBnZXRQb3NpdGlvbigpOiB2ZWMzIHsgcmV0dXJuIHRoaXMucG9zaXRpb24gfVxuXHRwdWJsaWMgZ2V0Um90YXRpb24oKTogdmVjMyB7IHJldHVybiB0aGlzLnJvdGF0aW9uIH1cblx0cHVibGljIGdldFNjYWxlKCk6IHZlYzMgeyByZXR1cm4gdGhpcy5zY2FsZSB9XG5cblx0cHVibGljIGdldFdvcmxkTWF0cml4KCk6IG1hdDQge1xuXHRcdGxldCBsb2NhbDogbWF0NCA9IHRoaXMuZ2V0TG9jYWxNYXRyaXgoKVxuXHRcdGlmICh0aGlzLnBhcmVudCA9PT0gbnVsbClcblx0XHRcdHJldHVybiBsb2NhbFxuXHRcdGxldCBwYXJlbnRXb3JsZDogbWF0NCA9IHRoaXMucGFyZW50LmdldFdvcmxkTWF0cml4KClcblx0XHRyZXR1cm4gbWF0NC5tdWwocGFyZW50V29ybGQsIHBhcmVudFdvcmxkLCBsb2NhbClcblx0fVxuXG5cdHB1YmxpYyBnZXRMb2NhbE1hdHJpeCgpOiBtYXQ0IHtcblx0XHRsZXQgdHJhbnMgPSB0aGlzLnRyYW5zZm9ybVxuXHRcdGxldCBwb3MgPSB0aGlzLnBvc2l0aW9uXG5cdFx0bGV0IHJvdCA9IHRoaXMucm90YXRpb25cblx0XHRsZXQgc2NsID0gdGhpcy5zY2FsZVxuXHRcdFxuXHRcdHJldHVybiB0cmFucy5pZGVudGl0eSgpXG5cdFx0XHQudHJhbnNsYXRlKHBvcylcblx0XHRcdC5yb3RhdGUobWF0aC5yYWRpYW5zKHJvdFswXSksIFsxLCAwLCAwXSlcblx0XHRcdC5yb3RhdGUobWF0aC5yYWRpYW5zKHJvdFsxXSksIFswLCAxLCAwXSlcblx0XHRcdC5yb3RhdGUobWF0aC5yYWRpYW5zKHJvdFsyXSksIFswLCAwLCAxXSlcblx0XHRcdC5zY2FsZShzY2wpXG5cdFx0XHQubWF0KClcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgY29tcGFyZU1lc2hVVUlEKGE6IE1vZGVsLCBiOiBNb2RlbCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIE1lc2guY29tcGFyZVVVSUQoYS5tZXNoLCBiLm1lc2gpXG5cdH1cblxuXHRwdWJsaWMgYWRkQ2hpbGQobW9kZWw6IE1vZGVsKTogdm9pZCB7XG5cdFx0dGhpcy5jaGlsZHJlblttb2RlbC51dWlkXSA9IG1vZGVsXG5cdFx0bW9kZWwucGFyZW50ID0gdGhpc1xuXHR9XG5cblx0cHVibGljIGhhc0NoaWxkKG1vZGVsOiBNb2RlbCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNoaWxkcmVuW21vZGVsLnV1aWRdICE9PSB1bmRlZmluZWRcblx0fVxuXG5cdHB1YmxpYyByZW1vdmVDaGlsZChtb2RlbDogTW9kZWwpOiB2b2lkIHtcblx0XHRpZiAoIXRoaXMuaGFzQ2hpbGQobW9kZWwpKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYE1vZGVsIFwiJHttb2RlbC5hbGlhc31cIiBpcyBub3QgYSBjaGlsZCBvZiBcIiR7dGhpcy5hbGlhc31cIi5gKVxuXHRcdH1cblx0XHR0aGlzLmNoaWxkcmVuW21vZGVsLnV1aWRdID0gdW5kZWZpbmVkXG5cdFx0bW9kZWwucGFyZW50ID0gbnVsbFxuXHR9XG5cbn1cblxuZXhwb3J0IHsgTW9kZWwgfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2dsL21vZGVsLnRzIiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gIEluIHRoZVxuLy8gYnJvd3NlciB0aGlzIGlzIGEgbGl0dGxlIGNvbXBsaWNhdGVkIGR1ZSB0byB1bmtub3duIHF1YWxpdHkgb2YgTWF0aC5yYW5kb20oKVxuLy8gYW5kIGluY29uc2lzdGVudCBzdXBwb3J0IGZvciB0aGUgYGNyeXB0b2AgQVBJLiAgV2UgZG8gdGhlIGJlc3Qgd2UgY2FuIHZpYVxuLy8gZmVhdHVyZS1kZXRlY3Rpb25cbnZhciBybmc7XG5cbnZhciBjcnlwdG8gPSBnbG9iYWwuY3J5cHRvIHx8IGdsb2JhbC5tc0NyeXB0bzsgLy8gZm9yIElFIDExXG5pZiAoY3J5cHRvICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgLy8gV0hBVFdHIGNyeXB0byBSTkcgLSBodHRwOi8vd2lraS53aGF0d2cub3JnL3dpa2kvQ3J5cHRvXG4gIHZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICBybmcgPSBmdW5jdGlvbiB3aGF0d2dSTkcoKSB7XG4gICAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG4gICAgcmV0dXJuIHJuZHM4O1xuICB9O1xufVxuXG5pZiAoIXJuZykge1xuICAvLyBNYXRoLnJhbmRvbSgpLWJhc2VkIChSTkcpXG4gIC8vXG4gIC8vIElmIGFsbCBlbHNlIGZhaWxzLCB1c2UgTWF0aC5yYW5kb20oKS4gIEl0J3MgZmFzdCwgYnV0IGlzIG9mIHVuc3BlY2lmaWVkXG4gIC8vIHF1YWxpdHkuXG4gIHZhciBybmRzID0gbmV3IEFycmF5KDE2KTtcbiAgcm5nID0gZnVuY3Rpb24oKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIHI7IGkgPCAxNjsgaSsrKSB7XG4gICAgICBpZiAoKGkgJiAweDAzKSA9PT0gMCkgciA9IE1hdGgucmFuZG9tKCkgKiAweDEwMDAwMDAwMDtcbiAgICAgIHJuZHNbaV0gPSByID4+PiAoKGkgJiAweDAzKSA8PCAzKSAmIDB4ZmY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJuZHM7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcm5nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvcm5nLWJyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xudmFyIGJ5dGVUb0hleCA9IFtdO1xuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXhbaV0gPSAoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpO1xufVxuXG5mdW5jdGlvbiBieXRlc1RvVXVpZChidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IG9mZnNldCB8fCAwO1xuICB2YXIgYnRoID0gYnl0ZVRvSGV4O1xuICByZXR1cm4gYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ5dGVzVG9VdWlkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvYnl0ZXNUb1V1aWQuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInR5cGUgR2VvbWV0cnlTb3VyY2UgPSB7XG5cdGRhdGE6IEFycmF5PG51bWJlcj5cblx0aW5kaWNlczogQXJyYXk8bnVtYmVyPlxufVxuXG5jbGFzcyBNZXNoTGlicmFyeSB7XG5cblx0cHVibGljIHN0YXRpYyBxdWFkOiBHZW9tZXRyeVNvdXJjZSA9IHtcblx0XHRkYXRhOiBbXG5cdFx0XHQtMS4wLCAxLjAsIDAuMCwgMC4wLCAxLjAsIDAuMCwgMS4wLCAwLjAsXG4gICAgICAgICAgICAtMS4wLCAtMS4wLCAwLjAsIDAuMCwgMC4wLCAwLjAsIDEuMCwgMC4wLFxuICAgICAgICAgICAgMS4wLCAtMS4wLCAwLjAsIDEuMCwgMC4wLCAwLjAsIDEuMCwgMC4wLFxuICAgICAgICAgICAgMS4wLCAtMS4wLCAwLjAsIDEuMCwgMC4wLCAwLjAsIDEuMCwgMC4wLFxuICAgICAgICAgICAgMS4wLCAxLjAsIDAuMCwgMS4wLCAxLjAsIDAuMCwgMS4wLCAwLjAsXG4gICAgICAgICAgICAtMS4wLCAxLjAsIDAuMCwgMC4wLCAxLjAsIDAuMCwgMS4wLCAwLjBcbiAgICAgICAgXSxcbiAgICAgICAgaW5kaWNlczogW11cblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgdHJpYW5nbGU6IEdlb21ldHJ5U291cmNlID0ge1xuXHRcdGRhdGE6IFtcblx0XHRcdC0xLjAsIC0xLjAsIDAuMCwgMC4wLCAxLjAsIDAuMCwgMS4wLCAwLjAsXG4gICAgICAgICAgICAxLjAsIC0xLjAsIDAuMCwgMC4wLCAxLjAsIDAuMCwgMS4wLCAwLjAsXG4gICAgICAgICAgICAwLjAsIDEuMCwgMC4wLCAwLjAsIDEuMCwgMC4wLCAxLjAsIDAuMFxuXHRcdF0sXG5cdFx0aW5kaWNlczogW11cblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgc2t5Ym94OiBHZW9tZXRyeVNvdXJjZSA9IHtcblx0XHRkYXRhOiBbXG5cdFx0ICAgIC0xLjAsIC0xLjAsICAtMS4wLCAwLCAwLFxuXHRcdCAgICAtMS4wLCAgMS4wLCAgLTEuMCwgMCwgMC41LFxuXHRcdCAgICAgMS4wLCAtMS4wLCAgLTEuMCwgMC4yNSwgMCxcblx0XHQgICAgLTEuMCwgIDEuMCwgIC0xLjAsIDAsIDAuNSxcblx0XHQgICAgIDEuMCwgIDEuMCwgIC0xLjAsIDAuMjUsIDAuNSxcblx0XHQgICAgIDEuMCwgLTEuMCwgIC0xLjAsIDAuMjUsIDAsXG5cblx0XHQgICAgLTEuMCwgLTEuMCwgICAxLjAsIDAuMjUsIDAsXG5cdFx0ICAgICAxLjAsIC0xLjAsICAgMS4wLCAwLjUgLCAwLFxuXHRcdCAgICAtMS4wLCAgMS4wLCAgIDEuMCwgMC4yNSwgMC41LFxuXHRcdCAgICAtMS4wLCAgMS4wLCAgIDEuMCwgMC4yNSwgMC41LFxuXHRcdCAgICAgMS4wLCAtMS4wLCAgIDEuMCwgMC41LCAwLFxuXHRcdCAgICAgMS4wLCAgMS4wLCAgIDEuMCwgMC41LCAwLjUsXG5cblx0XHQgICAgLTEuMCwgICAxLjAsIC0xLjAsIDAuNSAsIDAgICxcblx0XHQgICAgLTEuMCwgICAxLjAsICAxLjAsIDAuNSAsIDAuNSxcblx0XHQgICAgIDEuMCwgICAxLjAsIC0xLjAsICAwLjc1LCAwICAsXG5cdFx0ICAgIC0xLjAsICAgMS4wLCAgMS4wLCAwLjUgLCAwLjUsXG5cdFx0ICAgICAxLjAsICAgMS4wLCAgMS4wLCAwLjc1LCAwLjUsXG5cdFx0ICAgICAxLjAsICAgMS4wLCAtMS4wLCAwLjc1LCAwICAsXG5cblx0XHQgICAgLTEuMCwgIC0xLjAsIC0xLjAsIDAgICAsIDAuNSxcblx0XHQgICAgIDEuMCwgIC0xLjAsIC0xLjAsICAwLjI1LCAwLjUsXG5cdFx0ICAgIC0xLjAsICAtMS4wLCAgMS4wLCAwICAgLCAxICAsXG5cdFx0ICAgIC0xLjAsICAtMS4wLCAgMS4wLCAwICAgLCAxICAsXG5cdFx0ICAgICAxLjAsICAtMS4wLCAtMS4wLCAwLjI1LCAwLjUsXG5cdFx0ICAgICAxLjAsICAtMS4wLCAgMS4wLCAwLjI1LCAxICAsXG4gXG5cdFx0ICAgIC0xLjAsICAtMS4wLCAtMS4wLCAgMC4yNSwgMC41LFxuXHRcdCAgICAtMS4wLCAgLTEuMCwgIDEuMCwgIDAuMjUsIDEgICxcblx0XHQgICAgLTEuMCwgICAxLjAsIC0xLjAsIDAuNSAsIDAuNSxcblx0XHQgICAgLTEuMCwgIC0xLjAsICAxLjAsIDAuMjUsIDEgICxcblx0XHQgICAgLTEuMCwgICAxLjAsICAxLjAsIDAuNSAsIDEgICxcblx0XHQgICAgLTEuMCwgICAxLjAsIC0xLjAsIDAuNSAsIDAuNSxcblxuXHRcdCAgICAgMS4wLCAgLTEuMCwgLTEuMCwgMC41ICwgMC41LFxuXHRcdCAgICAgMS4wLCAgIDEuMCwgLTEuMCwgIDAuNzUsIDAuNSxcblx0XHQgICAgIDEuMCwgIC0xLjAsICAxLjAsICAwLjUgLCAxICAsXG5cdFx0ICAgICAxLCAgLTEsICAxLjAsIDAuNSAsIDEgICxcblx0XHQgICAgIDEsICAgMSwgLTEsIDAuNzUsIDAuNSxcblx0XHQgICAgIDEsICAgMSwgIDEsIDAuNzUsIDEgICxcblx0XHRdLFxuXHRcdGluZGljZXM6IFtdXG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIGN1YmUyOiBHZW9tZXRyeVNvdXJjZSA9IHtcblx0XHRkYXRhOiBbIFxuXHRcdFx0LTAuNSwgLTAuNSwgLTAuNSwgMC4wLCAwLjAsIC0xLjAsIDAuMCwgMC4wLCBcblx0XHRcdDAuNSwgLTAuNSwgLTAuNSwgMC4wLCAwLjAsIC0xLjAsIDEuMCwgMC4wLCBcblx0XHRcdDAuNSwgMC41LCAtMC41LCAwLjAsIDAuMCwgLTEuMCwgMS4wLCAxLjAsXG5cdFx0XHQwLjUsIDAuNSwgLTAuNSwgMC4wLCAwLjAsIC0xLjAsIDEuMCwgMS4wLCBcblx0XHRcdC0wLjUsIDAuNSwgLTAuNSwgMC4wLCAwLjAsIC0xLjAsIDAuMCwgMS4wLCBcblx0XHRcdC0wLjUsIC0wLjUsIC0wLjUsIDAuMCwgMC4wLCAtMS4wLCAwLjAsIDAuMCwgXG5cdFx0XHQtMC41LCAtMC41LCAwLjUsIDAuMCwgMC4wLCAxLjAsIDAuMCwgMC4wLCBcblx0XHRcdDAuNSwgLTAuNSwgMC41LCAwLjAsIDAuMCwgMS4wLCAxLjAsIDAuMCwgXG5cdFx0XHQwLjUsIDAuNSwgMC41LCAwLjAsIDAuMCwgMS4wLCAxLjAsIDEuMCwgXG5cdFx0XHQwLjUsIDAuNSwgMC41LCAwLjAsIDAuMCwgMS4wLCAxLjAsIDEuMCwgXG5cdFx0XHQtMC41LCAwLjUsIDAuNSwgMC4wLCAwLjAsIDEuMCwgMC4wLCAxLjAsIFxuXHRcdFx0LTAuNSwgLTAuNSwgMC41LCAwLjAsIDAuMCwgMS4wLCAwLjAsIDAuMCwgXG5cdFx0XHQtMC41LCAwLjUsIDAuNSwgLTEuMCwgMC4wLCAwLjAsIDEuMCwgMC4wLCBcblx0XHRcdC0wLjUsIDAuNSwgLTAuNSwgLTEuMCwgMC4wLCAwLjAsIDEuMCwgMS4wLCBcblx0XHRcdC0wLjUsIC0wLjUsIC0wLjUsIC0xLjAsIDAuMCwgMC4wLCAwLjAsIDEuMCwgXG5cdFx0XHQtMC41LCAtMC41LCAtMC41LCAtMS4wLCAwLjAsIDAuMCwgMC4wLCAxLjAsIFxuXHRcdFx0LTAuNSwgLTAuNSwgMC41LCAtMS4wLCAwLjAsIDAuMCwgMC4wLCAwLjAsIFxuXHRcdFx0LTAuNSwgMC41LCAwLjUsIC0xLjAsIDAuMCwgMC4wLCAxLjAsIDAuMCwgMC41LCBcblx0XHRcdDAuNSwgMC41LCAxLjAsIDAuMCwgMC4wLCAxLjAsIDAuMCwgMC41LCAwLjUsIFxuXHRcdFx0LTAuNSwgMS4wLCAwLjAsIDAuMCwgMS4wLCAxLjAsIDAuNSwgLTAuNSwgLTAuNSwgXG5cdFx0XHQxLjAsIDAuMCwgMC4wLCAwLjAsIDEuMCwgMC41LCAtMC41LCAtMC41LCBcblx0XHRcdDEuMCwgMC4wLCAwLjAsIDAuMCwgMS4wLCAwLjUsIC0wLjUsIDAuNSwgMS4wLFxuXHRcdFx0MC4wLCAwLjAsIDAuMCwgMC4wLCAwLjUsIDAuNSwgMC41LCAxLjAsIDAuMCwgXG5cdFx0XHQwLjAsIDEuMCwgMC4wLCAtMC41LCAtMC41LCAtMC41LCAwLjAsIC0xLjAsIFxuXHRcdFx0MC4wLCAwLjAsIDEuMCwgMC41LCAtMC41LCAtMC41LCAwLjAsIC0xLjAsIFxuXHRcdFx0MC4wLCAxLjAsIDEuMCwgMC41LCAtMC41LCAwLjUsIDAuMCwgLTEuMCwgXG5cdFx0XHQwLjAsIDEuMCwgMC4wLCAwLjUsIC0wLjUsIDAuNSwgMC4wLCAtMS4wLCBcblx0XHRcdDAuMCwgMS4wLCAwLjAsIC0wLjUsIC0wLjUsIDAuNSwgMC4wLCAtMS4wLCBcblx0XHRcdDAuMCwgMC4wLCAwLjAsIC0wLjUsIC0wLjUsIC0wLjUsIDAuMCwgLTEuMCwgXG5cdFx0XHQwLjAsIDAuMCwgMS4wLCAtMC41LCAwLjUsIC0wLjUsIDAuMCwgMS4wLCBcblx0XHRcdDAuMCwgMC4wLCAxLjAsIDAuNSwgMC41LCAtMC41LCAwLjAsIDEuMCwgMC4wLCBcblx0XHRcdDEuMCwgMS4wLCAwLjUsIDAuNSwgMC41LCAwLjAsIDEuMCwgMC4wLCAxLjAsIDAuMCwgXG5cdFx0XHQwLjUsIDAuNSwgMC41LCAwLjAsIDEuMCwgMC4wLCAxLjAsIDAuMCwgLTAuNSwgMC41LCBcblx0XHRcdDAuNSwgMC4wLCAxLjAsIDAuMCwgMC4wLCAwLjAsIC0wLjUsIDAuNSwgLTAuNSwgXG5cdFx0XHQwLjAsIDEuMCwgMC4wLCAwLjAsIDEuMFxuICAgICAgICBdLFxuICAgICAgICBpbmRpY2VzOiBbXVxuXHR9XG5cblx0cHVibGljIHN0YXRpYyBjdWJlOiBHZW9tZXRyeVNvdXJjZSA9IHtcblx0XHRkYXRhOiBbXG5cdFx0ICAtMS4wLCAtMS4wLCAgMS4wLFxuXHRcdCAgIDEuMCwgLTEuMCwgIDEuMCwgXG5cdFx0ICAgMS4wLCAgMS4wLCAgMS4wLFxuXHRcdCAgLTEuMCwgIDEuMCwgIDEuMCxcblx0XHQgIFxuXHRcdCAgLTEuMCwgLTEuMCwgLTEuMCxcblx0XHQgIC0xLjAsICAxLjAsIC0xLjAsXG5cdFx0ICAgMS4wLCAgMS4wLCAtMS4wLFxuXHRcdCAgIDEuMCwgLTEuMCwgLTEuMCxcblx0XHQgIFxuXHRcdCAgLTEuMCwgIDEuMCwgLTEuMCxcblx0XHQgIC0xLjAsICAxLjAsICAxLjAsXG5cdFx0ICAgMS4wLCAgMS4wLCAgMS4wLFxuXHRcdCAgIDEuMCwgIDEuMCwgLTEuMCxcblx0XHQgIFxuXHRcdCAgLTEuMCwgLTEuMCwgLTEuMCxcblx0XHQgICAxLjAsIC0xLjAsIC0xLjAsXG5cdFx0ICAgMS4wLCAtMS4wLCAgMS4wLFxuXHRcdCAgLTEuMCwgLTEuMCwgIDEuMCxcblx0XHQgIFxuXHRcdCAgIDEuMCwgLTEuMCwgLTEuMCxcblx0XHQgICAxLjAsICAxLjAsIC0xLjAsXG5cdFx0ICAgMS4wLCAgMS4wLCAgMS4wLFxuXHRcdCAgIDEuMCwgLTEuMCwgIDEuMCxcblx0XHQgIFxuXHRcdCAgLTEuMCwgLTEuMCwgLTEuMCxcblx0XHQgIC0xLjAsIC0xLjAsICAxLjAsXG5cdFx0ICAtMS4wLCAgMS4wLCAgMS4wLFxuXHRcdCAgLTEuMCwgIDEuMCwgLTEuMCxcblx0XHRdLFxuXHRcdGluZGljZXM6IFtcblx0XHRcdDAsICAxLCAgMiwgICAgICAwLCAgMiwgIDMsICAgIC8vIGZyb250XG5cdFx0XHQ0LCAgNSwgIDYsICAgICAgNCwgIDYsICA3LCAgICAvLyBiYWNrXG5cdFx0XHQ4LCAgOSwgIDEwLCAgICAgOCwgIDEwLCAxMSwgICAvLyB0b3Bcblx0XHRcdDEyLCAxMywgMTQsICAgICAxMiwgMTQsIDE1LCAgIC8vIGJvdHRvbVxuXHRcdFx0MTYsIDE3LCAxOCwgICAgIDE2LCAxOCwgMTksICAgLy8gcmlnaHRcblx0XHRcdDIwLCAyMSwgMjIsICAgICAyMCwgMjIsIDIzLCAgIC8vIGxlZnRcblx0XHRdXG5cdH1cblxufVxuXG5leHBvcnQgeyBNZXNoTGlicmFyeSB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2wvbWVzaC1saWJyYXJ5LnRzIiwiLyogQ29weXJpZ2h0IChjKSAyMDE1LCBCcmFuZG9uIEpvbmVzLCBDb2xpbiBNYWNLZW56aWUgSVYuXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cblRIRSBTT0ZUV0FSRS4gKi9cblxuaW1wb3J0ICogYXMgZ2xNYXRyaXggZnJvbSBcIi4vY29tbW9uXCI7XG5cbi8qKlxuICogM3gzIE1hdHJpeFxuICogQG1vZHVsZSBtYXQzXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGlkZW50aXR5IG1hdDNcbiAqXG4gKiBAcmV0dXJucyB7bWF0M30gYSBuZXcgM3gzIG1hdHJpeFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlKCkge1xuICBsZXQgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoOSk7XG4gIG91dFswXSA9IDE7XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IDE7XG4gIG91dFs1XSA9IDA7XG4gIG91dFs2XSA9IDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ29waWVzIHRoZSB1cHBlci1sZWZ0IDN4MyB2YWx1ZXMgaW50byB0aGUgZ2l2ZW4gbWF0My5cbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIDN4MyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSAgIHRoZSBzb3VyY2UgNHg0IG1hdHJpeFxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbU1hdDQob3V0LCBhKSB7XG4gIG91dFswXSA9IGFbMF07XG4gIG91dFsxXSA9IGFbMV07XG4gIG91dFsyXSA9IGFbMl07XG4gIG91dFszXSA9IGFbNF07XG4gIG91dFs0XSA9IGFbNV07XG4gIG91dFs1XSA9IGFbNl07XG4gIG91dFs2XSA9IGFbOF07XG4gIG91dFs3XSA9IGFbOV07XG4gIG91dFs4XSA9IGFbMTBdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgbWF0MyBpbml0aWFsaXplZCB3aXRoIHZhbHVlcyBmcm9tIGFuIGV4aXN0aW5nIG1hdHJpeFxuICpcbiAqIEBwYXJhbSB7bWF0M30gYSBtYXRyaXggdG8gY2xvbmVcbiAqIEByZXR1cm5zIHttYXQzfSBhIG5ldyAzeDMgbWF0cml4XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShhKSB7XG4gIGxldCBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSg5KTtcbiAgb3V0WzBdID0gYVswXTtcbiAgb3V0WzFdID0gYVsxXTtcbiAgb3V0WzJdID0gYVsyXTtcbiAgb3V0WzNdID0gYVszXTtcbiAgb3V0WzRdID0gYVs0XTtcbiAgb3V0WzVdID0gYVs1XTtcbiAgb3V0WzZdID0gYVs2XTtcbiAgb3V0WzddID0gYVs3XTtcbiAgb3V0WzhdID0gYVs4XTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDb3B5IHRoZSB2YWx1ZXMgZnJvbSBvbmUgbWF0MyB0byBhbm90aGVyXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29weShvdXQsIGEpIHtcbiAgb3V0WzBdID0gYVswXTtcbiAgb3V0WzFdID0gYVsxXTtcbiAgb3V0WzJdID0gYVsyXTtcbiAgb3V0WzNdID0gYVszXTtcbiAgb3V0WzRdID0gYVs0XTtcbiAgb3V0WzVdID0gYVs1XTtcbiAgb3V0WzZdID0gYVs2XTtcbiAgb3V0WzddID0gYVs3XTtcbiAgb3V0WzhdID0gYVs4XTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgbWF0MyB3aXRoIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbTAwIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDAgcG9zaXRpb24gKGluZGV4IDApXG4gKiBAcGFyYW0ge051bWJlcn0gbTAxIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDEgcG9zaXRpb24gKGluZGV4IDEpXG4gKiBAcGFyYW0ge051bWJlcn0gbTAyIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDIgcG9zaXRpb24gKGluZGV4IDIpXG4gKiBAcGFyYW0ge051bWJlcn0gbTEwIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDAgcG9zaXRpb24gKGluZGV4IDMpXG4gKiBAcGFyYW0ge051bWJlcn0gbTExIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDEgcG9zaXRpb24gKGluZGV4IDQpXG4gKiBAcGFyYW0ge051bWJlcn0gbTEyIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDIgcG9zaXRpb24gKGluZGV4IDUpXG4gKiBAcGFyYW0ge051bWJlcn0gbTIwIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDAgcG9zaXRpb24gKGluZGV4IDYpXG4gKiBAcGFyYW0ge051bWJlcn0gbTIxIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDEgcG9zaXRpb24gKGluZGV4IDcpXG4gKiBAcGFyYW0ge051bWJlcn0gbTIyIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDIgcG9zaXRpb24gKGluZGV4IDgpXG4gKiBAcmV0dXJucyB7bWF0M30gQSBuZXcgbWF0M1xuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVZhbHVlcyhtMDAsIG0wMSwgbTAyLCBtMTAsIG0xMSwgbTEyLCBtMjAsIG0yMSwgbTIyKSB7XG4gIGxldCBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSg5KTtcbiAgb3V0WzBdID0gbTAwO1xuICBvdXRbMV0gPSBtMDE7XG4gIG91dFsyXSA9IG0wMjtcbiAgb3V0WzNdID0gbTEwO1xuICBvdXRbNF0gPSBtMTE7XG4gIG91dFs1XSA9IG0xMjtcbiAgb3V0WzZdID0gbTIwO1xuICBvdXRbN10gPSBtMjE7XG4gIG91dFs4XSA9IG0yMjtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIGNvbXBvbmVudHMgb2YgYSBtYXQzIHRvIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMCBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAwIHBvc2l0aW9uIChpbmRleCAwKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMSBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAxIHBvc2l0aW9uIChpbmRleCAxKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMiBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAyIHBvc2l0aW9uIChpbmRleCAyKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMCBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAwIHBvc2l0aW9uIChpbmRleCAzKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMSBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAxIHBvc2l0aW9uIChpbmRleCA0KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMiBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAyIHBvc2l0aW9uIChpbmRleCA1KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMCBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAwIHBvc2l0aW9uIChpbmRleCA2KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMSBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAxIHBvc2l0aW9uIChpbmRleCA3KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMiBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAyIHBvc2l0aW9uIChpbmRleCA4KVxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0KG91dCwgbTAwLCBtMDEsIG0wMiwgbTEwLCBtMTEsIG0xMiwgbTIwLCBtMjEsIG0yMikge1xuICBvdXRbMF0gPSBtMDA7XG4gIG91dFsxXSA9IG0wMTtcbiAgb3V0WzJdID0gbTAyO1xuICBvdXRbM10gPSBtMTA7XG4gIG91dFs0XSA9IG0xMTtcbiAgb3V0WzVdID0gbTEyO1xuICBvdXRbNl0gPSBtMjA7XG4gIG91dFs3XSA9IG0yMTtcbiAgb3V0WzhdID0gbTIyO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNldCBhIG1hdDMgdG8gdGhlIGlkZW50aXR5IG1hdHJpeFxuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eShvdXQpIHtcbiAgb3V0WzBdID0gMTtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gMTtcbiAgb3V0WzVdID0gMDtcbiAgb3V0WzZdID0gMDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBUcmFuc3Bvc2UgdGhlIHZhbHVlcyBvZiBhIG1hdDNcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQzfSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc3Bvc2Uob3V0LCBhKSB7XG4gIC8vIElmIHdlIGFyZSB0cmFuc3Bvc2luZyBvdXJzZWx2ZXMgd2UgY2FuIHNraXAgYSBmZXcgc3RlcHMgYnV0IGhhdmUgdG8gY2FjaGUgc29tZSB2YWx1ZXNcbiAgaWYgKG91dCA9PT0gYSkge1xuICAgIGxldCBhMDEgPSBhWzFdLCBhMDIgPSBhWzJdLCBhMTIgPSBhWzVdO1xuICAgIG91dFsxXSA9IGFbM107XG4gICAgb3V0WzJdID0gYVs2XTtcbiAgICBvdXRbM10gPSBhMDE7XG4gICAgb3V0WzVdID0gYVs3XTtcbiAgICBvdXRbNl0gPSBhMDI7XG4gICAgb3V0WzddID0gYTEyO1xuICB9IGVsc2Uge1xuICAgIG91dFswXSA9IGFbMF07XG4gICAgb3V0WzFdID0gYVszXTtcbiAgICBvdXRbMl0gPSBhWzZdO1xuICAgIG91dFszXSA9IGFbMV07XG4gICAgb3V0WzRdID0gYVs0XTtcbiAgICBvdXRbNV0gPSBhWzddO1xuICAgIG91dFs2XSA9IGFbMl07XG4gICAgb3V0WzddID0gYVs1XTtcbiAgICBvdXRbOF0gPSBhWzhdO1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBJbnZlcnRzIGEgbWF0M1xuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludmVydChvdXQsIGEpIHtcbiAgbGV0IGEwMCA9IGFbMF0sIGEwMSA9IGFbMV0sIGEwMiA9IGFbMl07XG4gIGxldCBhMTAgPSBhWzNdLCBhMTEgPSBhWzRdLCBhMTIgPSBhWzVdO1xuICBsZXQgYTIwID0gYVs2XSwgYTIxID0gYVs3XSwgYTIyID0gYVs4XTtcblxuICBsZXQgYjAxID0gYTIyICogYTExIC0gYTEyICogYTIxO1xuICBsZXQgYjExID0gLWEyMiAqIGExMCArIGExMiAqIGEyMDtcbiAgbGV0IGIyMSA9IGEyMSAqIGExMCAtIGExMSAqIGEyMDtcblxuICAvLyBDYWxjdWxhdGUgdGhlIGRldGVybWluYW50XG4gIGxldCBkZXQgPSBhMDAgKiBiMDEgKyBhMDEgKiBiMTEgKyBhMDIgKiBiMjE7XG5cbiAgaWYgKCFkZXQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBkZXQgPSAxLjAgLyBkZXQ7XG5cbiAgb3V0WzBdID0gYjAxICogZGV0O1xuICBvdXRbMV0gPSAoLWEyMiAqIGEwMSArIGEwMiAqIGEyMSkgKiBkZXQ7XG4gIG91dFsyXSA9IChhMTIgKiBhMDEgLSBhMDIgKiBhMTEpICogZGV0O1xuICBvdXRbM10gPSBiMTEgKiBkZXQ7XG4gIG91dFs0XSA9IChhMjIgKiBhMDAgLSBhMDIgKiBhMjApICogZGV0O1xuICBvdXRbNV0gPSAoLWExMiAqIGEwMCArIGEwMiAqIGExMCkgKiBkZXQ7XG4gIG91dFs2XSA9IGIyMSAqIGRldDtcbiAgb3V0WzddID0gKC1hMjEgKiBhMDAgKyBhMDEgKiBhMjApICogZGV0O1xuICBvdXRbOF0gPSAoYTExICogYTAwIC0gYTAxICogYTEwKSAqIGRldDtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBhZGp1Z2F0ZSBvZiBhIG1hdDNcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQzfSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGpvaW50KG91dCwgYSkge1xuICBsZXQgYTAwID0gYVswXSwgYTAxID0gYVsxXSwgYTAyID0gYVsyXTtcbiAgbGV0IGExMCA9IGFbM10sIGExMSA9IGFbNF0sIGExMiA9IGFbNV07XG4gIGxldCBhMjAgPSBhWzZdLCBhMjEgPSBhWzddLCBhMjIgPSBhWzhdO1xuXG4gIG91dFswXSA9IChhMTEgKiBhMjIgLSBhMTIgKiBhMjEpO1xuICBvdXRbMV0gPSAoYTAyICogYTIxIC0gYTAxICogYTIyKTtcbiAgb3V0WzJdID0gKGEwMSAqIGExMiAtIGEwMiAqIGExMSk7XG4gIG91dFszXSA9IChhMTIgKiBhMjAgLSBhMTAgKiBhMjIpO1xuICBvdXRbNF0gPSAoYTAwICogYTIyIC0gYTAyICogYTIwKTtcbiAgb3V0WzVdID0gKGEwMiAqIGExMCAtIGEwMCAqIGExMik7XG4gIG91dFs2XSA9IChhMTAgKiBhMjEgLSBhMTEgKiBhMjApO1xuICBvdXRbN10gPSAoYTAxICogYTIwIC0gYTAwICogYTIxKTtcbiAgb3V0WzhdID0gKGEwMCAqIGExMSAtIGEwMSAqIGExMCk7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZGV0ZXJtaW5hbnQgb2YgYSBtYXQzXG4gKlxuICogQHBhcmFtIHttYXQzfSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkZXRlcm1pbmFudCBvZiBhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXRlcm1pbmFudChhKSB7XG4gIGxldCBhMDAgPSBhWzBdLCBhMDEgPSBhWzFdLCBhMDIgPSBhWzJdO1xuICBsZXQgYTEwID0gYVszXSwgYTExID0gYVs0XSwgYTEyID0gYVs1XTtcbiAgbGV0IGEyMCA9IGFbNl0sIGEyMSA9IGFbN10sIGEyMiA9IGFbOF07XG5cbiAgcmV0dXJuIGEwMCAqIChhMjIgKiBhMTEgLSBhMTIgKiBhMjEpICsgYTAxICogKC1hMjIgKiBhMTAgKyBhMTIgKiBhMjApICsgYTAyICogKGEyMSAqIGExMCAtIGExMSAqIGEyMCk7XG59XG5cbi8qKlxuICogTXVsdGlwbGllcyB0d28gbWF0MydzXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHttYXQzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkob3V0LCBhLCBiKSB7XG4gIGxldCBhMDAgPSBhWzBdLCBhMDEgPSBhWzFdLCBhMDIgPSBhWzJdO1xuICBsZXQgYTEwID0gYVszXSwgYTExID0gYVs0XSwgYTEyID0gYVs1XTtcbiAgbGV0IGEyMCA9IGFbNl0sIGEyMSA9IGFbN10sIGEyMiA9IGFbOF07XG5cbiAgbGV0IGIwMCA9IGJbMF0sIGIwMSA9IGJbMV0sIGIwMiA9IGJbMl07XG4gIGxldCBiMTAgPSBiWzNdLCBiMTEgPSBiWzRdLCBiMTIgPSBiWzVdO1xuICBsZXQgYjIwID0gYls2XSwgYjIxID0gYls3XSwgYjIyID0gYls4XTtcblxuICBvdXRbMF0gPSBiMDAgKiBhMDAgKyBiMDEgKiBhMTAgKyBiMDIgKiBhMjA7XG4gIG91dFsxXSA9IGIwMCAqIGEwMSArIGIwMSAqIGExMSArIGIwMiAqIGEyMTtcbiAgb3V0WzJdID0gYjAwICogYTAyICsgYjAxICogYTEyICsgYjAyICogYTIyO1xuXG4gIG91dFszXSA9IGIxMCAqIGEwMCArIGIxMSAqIGExMCArIGIxMiAqIGEyMDtcbiAgb3V0WzRdID0gYjEwICogYTAxICsgYjExICogYTExICsgYjEyICogYTIxO1xuICBvdXRbNV0gPSBiMTAgKiBhMDIgKyBiMTEgKiBhMTIgKyBiMTIgKiBhMjI7XG5cbiAgb3V0WzZdID0gYjIwICogYTAwICsgYjIxICogYTEwICsgYjIyICogYTIwO1xuICBvdXRbN10gPSBiMjAgKiBhMDEgKyBiMjEgKiBhMTEgKyBiMjIgKiBhMjE7XG4gIG91dFs4XSA9IGIyMCAqIGEwMiArIGIyMSAqIGExMiArIGIyMiAqIGEyMjtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBUcmFuc2xhdGUgYSBtYXQzIGJ5IHRoZSBnaXZlbiB2ZWN0b3JcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQzfSBhIHRoZSBtYXRyaXggdG8gdHJhbnNsYXRlXG4gKiBAcGFyYW0ge3ZlYzJ9IHYgdmVjdG9yIHRvIHRyYW5zbGF0ZSBieVxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlKG91dCwgYSwgdikge1xuICBsZXQgYTAwID0gYVswXSwgYTAxID0gYVsxXSwgYTAyID0gYVsyXSxcbiAgICBhMTAgPSBhWzNdLCBhMTEgPSBhWzRdLCBhMTIgPSBhWzVdLFxuICAgIGEyMCA9IGFbNl0sIGEyMSA9IGFbN10sIGEyMiA9IGFbOF0sXG4gICAgeCA9IHZbMF0sIHkgPSB2WzFdO1xuXG4gIG91dFswXSA9IGEwMDtcbiAgb3V0WzFdID0gYTAxO1xuICBvdXRbMl0gPSBhMDI7XG5cbiAgb3V0WzNdID0gYTEwO1xuICBvdXRbNF0gPSBhMTE7XG4gIG91dFs1XSA9IGExMjtcblxuICBvdXRbNl0gPSB4ICogYTAwICsgeSAqIGExMCArIGEyMDtcbiAgb3V0WzddID0geCAqIGEwMSArIHkgKiBhMTEgKyBhMjE7XG4gIG91dFs4XSA9IHggKiBhMDIgKyB5ICogYTEyICsgYTIyO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJvdGF0ZXMgYSBtYXQzIGJ5IHRoZSBnaXZlbiBhbmdsZVxuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGUob3V0LCBhLCByYWQpIHtcbiAgbGV0IGEwMCA9IGFbMF0sIGEwMSA9IGFbMV0sIGEwMiA9IGFbMl0sXG4gICAgYTEwID0gYVszXSwgYTExID0gYVs0XSwgYTEyID0gYVs1XSxcbiAgICBhMjAgPSBhWzZdLCBhMjEgPSBhWzddLCBhMjIgPSBhWzhdLFxuXG4gICAgcyA9IE1hdGguc2luKHJhZCksXG4gICAgYyA9IE1hdGguY29zKHJhZCk7XG5cbiAgb3V0WzBdID0gYyAqIGEwMCArIHMgKiBhMTA7XG4gIG91dFsxXSA9IGMgKiBhMDEgKyBzICogYTExO1xuICBvdXRbMl0gPSBjICogYTAyICsgcyAqIGExMjtcblxuICBvdXRbM10gPSBjICogYTEwIC0gcyAqIGEwMDtcbiAgb3V0WzRdID0gYyAqIGExMSAtIHMgKiBhMDE7XG4gIG91dFs1XSA9IGMgKiBhMTIgLSBzICogYTAyO1xuXG4gIG91dFs2XSA9IGEyMDtcbiAgb3V0WzddID0gYTIxO1xuICBvdXRbOF0gPSBhMjI7XG4gIHJldHVybiBvdXQ7XG59O1xuXG4vKipcbiAqIFNjYWxlcyB0aGUgbWF0MyBieSB0aGUgZGltZW5zaW9ucyBpbiB0aGUgZ2l2ZW4gdmVjMlxuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcbiAqIEBwYXJhbSB7dmVjMn0gdiB0aGUgdmVjMiB0byBzY2FsZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKiovXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUob3V0LCBhLCB2KSB7XG4gIGxldCB4ID0gdlswXSwgeSA9IHZbMV07XG5cbiAgb3V0WzBdID0geCAqIGFbMF07XG4gIG91dFsxXSA9IHggKiBhWzFdO1xuICBvdXRbMl0gPSB4ICogYVsyXTtcblxuICBvdXRbM10gPSB5ICogYVszXTtcbiAgb3V0WzRdID0geSAqIGFbNF07XG4gIG91dFs1XSA9IHkgKiBhWzVdO1xuXG4gIG91dFs2XSA9IGFbNl07XG4gIG91dFs3XSA9IGFbN107XG4gIG91dFs4XSA9IGFbOF07XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgdmVjdG9yIHRyYW5zbGF0aW9uXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcbiAqXG4gKiAgICAgbWF0My5pZGVudGl0eShkZXN0KTtcbiAqICAgICBtYXQzLnRyYW5zbGF0ZShkZXN0LCBkZXN0LCB2ZWMpO1xuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IG1hdDMgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7dmVjMn0gdiBUcmFuc2xhdGlvbiB2ZWN0b3JcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21UcmFuc2xhdGlvbihvdXQsIHYpIHtcbiAgb3V0WzBdID0gMTtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gMTtcbiAgb3V0WzVdID0gMDtcbiAgb3V0WzZdID0gdlswXTtcbiAgb3V0WzddID0gdlsxXTtcbiAgb3V0WzhdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSBnaXZlbiBhbmdsZVxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDMuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0My5yb3RhdGUoZGVzdCwgZGVzdCwgcmFkKTtcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCBtYXQzIHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVJvdGF0aW9uKG91dCwgcmFkKSB7XG4gIGxldCBzID0gTWF0aC5zaW4ocmFkKSwgYyA9IE1hdGguY29zKHJhZCk7XG5cbiAgb3V0WzBdID0gYztcbiAgb3V0WzFdID0gcztcbiAgb3V0WzJdID0gMDtcblxuICBvdXRbM10gPSAtcztcbiAgb3V0WzRdID0gYztcbiAgb3V0WzVdID0gMDtcblxuICBvdXRbNl0gPSAwO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIHZlY3RvciBzY2FsaW5nXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcbiAqXG4gKiAgICAgbWF0My5pZGVudGl0eShkZXN0KTtcbiAqICAgICBtYXQzLnNjYWxlKGRlc3QsIGRlc3QsIHZlYyk7XG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgbWF0MyByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHt2ZWMyfSB2IFNjYWxpbmcgdmVjdG9yXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tU2NhbGluZyhvdXQsIHYpIHtcbiAgb3V0WzBdID0gdlswXTtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcblxuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSB2WzFdO1xuICBvdXRbNV0gPSAwO1xuXG4gIG91dFs2XSA9IDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ29waWVzIHRoZSB2YWx1ZXMgZnJvbSBhIG1hdDJkIGludG8gYSBtYXQzXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0MmR9IGEgdGhlIG1hdHJpeCB0byBjb3B5XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKiovXG5leHBvcnQgZnVuY3Rpb24gZnJvbU1hdDJkKG91dCwgYSkge1xuICBvdXRbMF0gPSBhWzBdO1xuICBvdXRbMV0gPSBhWzFdO1xuICBvdXRbMl0gPSAwO1xuXG4gIG91dFszXSA9IGFbMl07XG4gIG91dFs0XSA9IGFbM107XG4gIG91dFs1XSA9IDA7XG5cbiAgb3V0WzZdID0gYVs0XTtcbiAgb3V0WzddID0gYVs1XTtcbiAgb3V0WzhdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4qIENhbGN1bGF0ZXMgYSAzeDMgbWF0cml4IGZyb20gdGhlIGdpdmVuIHF1YXRlcm5pb25cbipcbiogQHBhcmFtIHttYXQzfSBvdXQgbWF0MyByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuKiBAcGFyYW0ge3F1YXR9IHEgUXVhdGVybmlvbiB0byBjcmVhdGUgbWF0cml4IGZyb21cbipcbiogQHJldHVybnMge21hdDN9IG91dFxuKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUXVhdChvdXQsIHEpIHtcbiAgbGV0IHggPSBxWzBdLCB5ID0gcVsxXSwgeiA9IHFbMl0sIHcgPSBxWzNdO1xuICBsZXQgeDIgPSB4ICsgeDtcbiAgbGV0IHkyID0geSArIHk7XG4gIGxldCB6MiA9IHogKyB6O1xuXG4gIGxldCB4eCA9IHggKiB4MjtcbiAgbGV0IHl4ID0geSAqIHgyO1xuICBsZXQgeXkgPSB5ICogeTI7XG4gIGxldCB6eCA9IHogKiB4MjtcbiAgbGV0IHp5ID0geiAqIHkyO1xuICBsZXQgenogPSB6ICogejI7XG4gIGxldCB3eCA9IHcgKiB4MjtcbiAgbGV0IHd5ID0gdyAqIHkyO1xuICBsZXQgd3ogPSB3ICogejI7XG5cbiAgb3V0WzBdID0gMSAtIHl5IC0geno7XG4gIG91dFszXSA9IHl4IC0gd3o7XG4gIG91dFs2XSA9IHp4ICsgd3k7XG5cbiAgb3V0WzFdID0geXggKyB3ejtcbiAgb3V0WzRdID0gMSAtIHh4IC0geno7XG4gIG91dFs3XSA9IHp5IC0gd3g7XG5cbiAgb3V0WzJdID0genggLSB3eTtcbiAgb3V0WzVdID0genkgKyB3eDtcbiAgb3V0WzhdID0gMSAtIHh4IC0geXk7XG5cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4qIENhbGN1bGF0ZXMgYSAzeDMgbm9ybWFsIG1hdHJpeCAodHJhbnNwb3NlIGludmVyc2UpIGZyb20gdGhlIDR4NCBtYXRyaXhcbipcbiogQHBhcmFtIHttYXQzfSBvdXQgbWF0MyByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuKiBAcGFyYW0ge21hdDR9IGEgTWF0NCB0byBkZXJpdmUgdGhlIG5vcm1hbCBtYXRyaXggZnJvbVxuKlxuKiBAcmV0dXJucyB7bWF0M30gb3V0XG4qL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbEZyb21NYXQ0KG91dCwgYSkge1xuICBsZXQgYTAwID0gYVswXSwgYTAxID0gYVsxXSwgYTAyID0gYVsyXSwgYTAzID0gYVszXTtcbiAgbGV0IGExMCA9IGFbNF0sIGExMSA9IGFbNV0sIGExMiA9IGFbNl0sIGExMyA9IGFbN107XG4gIGxldCBhMjAgPSBhWzhdLCBhMjEgPSBhWzldLCBhMjIgPSBhWzEwXSwgYTIzID0gYVsxMV07XG4gIGxldCBhMzAgPSBhWzEyXSwgYTMxID0gYVsxM10sIGEzMiA9IGFbMTRdLCBhMzMgPSBhWzE1XTtcblxuICBsZXQgYjAwID0gYTAwICogYTExIC0gYTAxICogYTEwO1xuICBsZXQgYjAxID0gYTAwICogYTEyIC0gYTAyICogYTEwO1xuICBsZXQgYjAyID0gYTAwICogYTEzIC0gYTAzICogYTEwO1xuICBsZXQgYjAzID0gYTAxICogYTEyIC0gYTAyICogYTExO1xuICBsZXQgYjA0ID0gYTAxICogYTEzIC0gYTAzICogYTExO1xuICBsZXQgYjA1ID0gYTAyICogYTEzIC0gYTAzICogYTEyO1xuICBsZXQgYjA2ID0gYTIwICogYTMxIC0gYTIxICogYTMwO1xuICBsZXQgYjA3ID0gYTIwICogYTMyIC0gYTIyICogYTMwO1xuICBsZXQgYjA4ID0gYTIwICogYTMzIC0gYTIzICogYTMwO1xuICBsZXQgYjA5ID0gYTIxICogYTMyIC0gYTIyICogYTMxO1xuICBsZXQgYjEwID0gYTIxICogYTMzIC0gYTIzICogYTMxO1xuICBsZXQgYjExID0gYTIyICogYTMzIC0gYTIzICogYTMyO1xuXG4gIC8vIENhbGN1bGF0ZSB0aGUgZGV0ZXJtaW5hbnRcbiAgbGV0IGRldCA9IGIwMCAqIGIxMSAtIGIwMSAqIGIxMCArIGIwMiAqIGIwOSArIGIwMyAqIGIwOCAtIGIwNCAqIGIwNyArIGIwNSAqIGIwNjtcblxuICBpZiAoIWRldCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGRldCA9IDEuMCAvIGRldDtcblxuICBvdXRbMF0gPSAoYTExICogYjExIC0gYTEyICogYjEwICsgYTEzICogYjA5KSAqIGRldDtcbiAgb3V0WzFdID0gKGExMiAqIGIwOCAtIGExMCAqIGIxMSAtIGExMyAqIGIwNykgKiBkZXQ7XG4gIG91dFsyXSA9IChhMTAgKiBiMTAgLSBhMTEgKiBiMDggKyBhMTMgKiBiMDYpICogZGV0O1xuXG4gIG91dFszXSA9IChhMDIgKiBiMTAgLSBhMDEgKiBiMTEgLSBhMDMgKiBiMDkpICogZGV0O1xuICBvdXRbNF0gPSAoYTAwICogYjExIC0gYTAyICogYjA4ICsgYTAzICogYjA3KSAqIGRldDtcbiAgb3V0WzVdID0gKGEwMSAqIGIwOCAtIGEwMCAqIGIxMCAtIGEwMyAqIGIwNikgKiBkZXQ7XG5cbiAgb3V0WzZdID0gKGEzMSAqIGIwNSAtIGEzMiAqIGIwNCArIGEzMyAqIGIwMykgKiBkZXQ7XG4gIG91dFs3XSA9IChhMzIgKiBiMDIgLSBhMzAgKiBiMDUgLSBhMzMgKiBiMDEpICogZGV0O1xuICBvdXRbOF0gPSAoYTMwICogYjA0IC0gYTMxICogYjAyICsgYTMzICogYjAwKSAqIGRldDtcblxuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIDJEIHByb2plY3Rpb24gbWF0cml4IHdpdGggdGhlIGdpdmVuIGJvdW5kc1xuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IG1hdDMgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cbiAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCBXaWR0aCBvZiB5b3VyIGdsIGNvbnRleHRcbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgSGVpZ2h0IG9mIGdsIGNvbnRleHRcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3Rpb24ob3V0LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgb3V0WzBdID0gMiAvIHdpZHRoO1xuICAgIG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gMDtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IC0yIC8gaGVpZ2h0O1xuICAgIG91dFs1XSA9IDA7XG4gICAgb3V0WzZdID0gLTE7XG4gICAgb3V0WzddID0gMTtcbiAgICBvdXRbOF0gPSAxO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIG1hdDNcbiAqXG4gKiBAcGFyYW0ge21hdDN9IGEgbWF0cml4IHRvIHJlcHJlc2VudCBhcyBhIHN0cmluZ1xuICogQHJldHVybnMge1N0cmluZ30gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBtYXRyaXhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cihhKSB7XG4gIHJldHVybiAnbWF0MygnICsgYVswXSArICcsICcgKyBhWzFdICsgJywgJyArIGFbMl0gKyAnLCAnICtcbiAgICAgICAgICBhWzNdICsgJywgJyArIGFbNF0gKyAnLCAnICsgYVs1XSArICcsICcgK1xuICAgICAgICAgIGFbNl0gKyAnLCAnICsgYVs3XSArICcsICcgKyBhWzhdICsgJyknO1xufVxuXG4vKipcbiAqIFJldHVybnMgRnJvYmVuaXVzIG5vcm0gb2YgYSBtYXQzXG4gKlxuICogQHBhcmFtIHttYXQzfSBhIHRoZSBtYXRyaXggdG8gY2FsY3VsYXRlIEZyb2Jlbml1cyBub3JtIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBGcm9iZW5pdXMgbm9ybVxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvYihhKSB7XG4gIHJldHVybihNYXRoLnNxcnQoTWF0aC5wb3coYVswXSwgMikgKyBNYXRoLnBvdyhhWzFdLCAyKSArIE1hdGgucG93KGFbMl0sIDIpICsgTWF0aC5wb3coYVszXSwgMikgKyBNYXRoLnBvdyhhWzRdLCAyKSArIE1hdGgucG93KGFbNV0sIDIpICsgTWF0aC5wb3coYVs2XSwgMikgKyBNYXRoLnBvdyhhWzddLCAyKSArIE1hdGgucG93KGFbOF0sIDIpKSlcbn1cblxuLyoqXG4gKiBBZGRzIHR3byBtYXQzJ3NcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge21hdDN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGQob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKyBiWzBdO1xuICBvdXRbMV0gPSBhWzFdICsgYlsxXTtcbiAgb3V0WzJdID0gYVsyXSArIGJbMl07XG4gIG91dFszXSA9IGFbM10gKyBiWzNdO1xuICBvdXRbNF0gPSBhWzRdICsgYls0XTtcbiAgb3V0WzVdID0gYVs1XSArIGJbNV07XG4gIG91dFs2XSA9IGFbNl0gKyBiWzZdO1xuICBvdXRbN10gPSBhWzddICsgYls3XTtcbiAgb3V0WzhdID0gYVs4XSArIGJbOF07XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU3VidHJhY3RzIG1hdHJpeCBiIGZyb20gbWF0cml4IGFcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge21hdDN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAtIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gLSBiWzFdO1xuICBvdXRbMl0gPSBhWzJdIC0gYlsyXTtcbiAgb3V0WzNdID0gYVszXSAtIGJbM107XG4gIG91dFs0XSA9IGFbNF0gLSBiWzRdO1xuICBvdXRbNV0gPSBhWzVdIC0gYls1XTtcbiAgb3V0WzZdID0gYVs2XSAtIGJbNl07XG4gIG91dFs3XSA9IGFbN10gLSBiWzddO1xuICBvdXRbOF0gPSBhWzhdIC0gYls4XTtcbiAgcmV0dXJuIG91dDtcbn1cblxuXG5cbi8qKlxuICogTXVsdGlwbHkgZWFjaCBlbGVtZW50IG9mIHRoZSBtYXRyaXggYnkgYSBzY2FsYXIuXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgbWF0cml4IHRvIHNjYWxlXG4gKiBAcGFyYW0ge051bWJlcn0gYiBhbW91bnQgdG8gc2NhbGUgdGhlIG1hdHJpeCdzIGVsZW1lbnRzIGJ5XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseVNjYWxhcihvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAqIGI7XG4gIG91dFsxXSA9IGFbMV0gKiBiO1xuICBvdXRbMl0gPSBhWzJdICogYjtcbiAgb3V0WzNdID0gYVszXSAqIGI7XG4gIG91dFs0XSA9IGFbNF0gKiBiO1xuICBvdXRbNV0gPSBhWzVdICogYjtcbiAgb3V0WzZdID0gYVs2XSAqIGI7XG4gIG91dFs3XSA9IGFbN10gKiBiO1xuICBvdXRbOF0gPSBhWzhdICogYjtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBBZGRzIHR3byBtYXQzJ3MgYWZ0ZXIgbXVsdGlwbHlpbmcgZWFjaCBlbGVtZW50IG9mIHRoZSBzZWNvbmQgb3BlcmFuZCBieSBhIHNjYWxhciB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHttYXQzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge21hdDN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gc2NhbGUgdGhlIGFtb3VudCB0byBzY2FsZSBiJ3MgZWxlbWVudHMgYnkgYmVmb3JlIGFkZGluZ1xuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHlTY2FsYXJBbmRBZGQob3V0LCBhLCBiLCBzY2FsZSkge1xuICBvdXRbMF0gPSBhWzBdICsgKGJbMF0gKiBzY2FsZSk7XG4gIG91dFsxXSA9IGFbMV0gKyAoYlsxXSAqIHNjYWxlKTtcbiAgb3V0WzJdID0gYVsyXSArIChiWzJdICogc2NhbGUpO1xuICBvdXRbM10gPSBhWzNdICsgKGJbM10gKiBzY2FsZSk7XG4gIG91dFs0XSA9IGFbNF0gKyAoYls0XSAqIHNjYWxlKTtcbiAgb3V0WzVdID0gYVs1XSArIChiWzVdICogc2NhbGUpO1xuICBvdXRbNl0gPSBhWzZdICsgKGJbNl0gKiBzY2FsZSk7XG4gIG91dFs3XSA9IGFbN10gKyAoYls3XSAqIHNjYWxlKTtcbiAgb3V0WzhdID0gYVs4XSArIChiWzhdICogc2NhbGUpO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIG1hdHJpY2VzIGhhdmUgZXhhY3RseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbiAod2hlbiBjb21wYXJlZCB3aXRoID09PSlcbiAqXG4gKiBAcGFyYW0ge21hdDN9IGEgVGhlIGZpcnN0IG1hdHJpeC5cbiAqIEBwYXJhbSB7bWF0M30gYiBUaGUgc2Vjb25kIG1hdHJpeC5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSBtYXRyaWNlcyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4YWN0RXF1YWxzKGEsIGIpIHtcbiAgcmV0dXJuIGFbMF0gPT09IGJbMF0gJiYgYVsxXSA9PT0gYlsxXSAmJiBhWzJdID09PSBiWzJdICYmXG4gICAgICAgICBhWzNdID09PSBiWzNdICYmIGFbNF0gPT09IGJbNF0gJiYgYVs1XSA9PT0gYls1XSAmJlxuICAgICAgICAgYVs2XSA9PT0gYls2XSAmJiBhWzddID09PSBiWzddICYmIGFbOF0gPT09IGJbOF07XG59XG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgbWF0cmljZXMgaGF2ZSBhcHByb3hpbWF0ZWx5IHRoZSBzYW1lIGVsZW1lbnRzIGluIHRoZSBzYW1lIHBvc2l0aW9uLlxuICpcbiAqIEBwYXJhbSB7bWF0M30gYSBUaGUgZmlyc3QgbWF0cml4LlxuICogQHBhcmFtIHttYXQzfSBiIFRoZSBzZWNvbmQgbWF0cml4LlxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIG1hdHJpY2VzIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxzKGEsIGIpIHtcbiAgbGV0IGEwID0gYVswXSwgYTEgPSBhWzFdLCBhMiA9IGFbMl0sIGEzID0gYVszXSwgYTQgPSBhWzRdLCBhNSA9IGFbNV0sIGE2ID0gYVs2XSwgYTcgPSBhWzddLCBhOCA9IGFbOF07XG4gIGxldCBiMCA9IGJbMF0sIGIxID0gYlsxXSwgYjIgPSBiWzJdLCBiMyA9IGJbM10sIGI0ID0gYls0XSwgYjUgPSBiWzVdLCBiNiA9IGJbNl0sIGI3ID0gYls3XSwgYjggPSBiWzhdO1xuICByZXR1cm4gKE1hdGguYWJzKGEwIC0gYjApIDw9IGdsTWF0cml4LkVQU0lMT04qTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMCksIE1hdGguYWJzKGIwKSkgJiZcbiAgICAgICAgICBNYXRoLmFicyhhMSAtIGIxKSA8PSBnbE1hdHJpeC5FUFNJTE9OKk1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTEpLCBNYXRoLmFicyhiMSkpICYmXG4gICAgICAgICAgTWF0aC5hYnMoYTIgLSBiMikgPD0gZ2xNYXRyaXguRVBTSUxPTipNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEyKSwgTWF0aC5hYnMoYjIpKSAmJlxuICAgICAgICAgIE1hdGguYWJzKGEzIC0gYjMpIDw9IGdsTWF0cml4LkVQU0lMT04qTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMyksIE1hdGguYWJzKGIzKSkgJiZcbiAgICAgICAgICBNYXRoLmFicyhhNCAtIGI0KSA8PSBnbE1hdHJpeC5FUFNJTE9OKk1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTQpLCBNYXRoLmFicyhiNCkpICYmXG4gICAgICAgICAgTWF0aC5hYnMoYTUgLSBiNSkgPD0gZ2xNYXRyaXguRVBTSUxPTipNYXRoLm1heCgxLjAsIE1hdGguYWJzKGE1KSwgTWF0aC5hYnMoYjUpKSAmJlxuICAgICAgICAgIE1hdGguYWJzKGE2IC0gYjYpIDw9IGdsTWF0cml4LkVQU0lMT04qTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhNiksIE1hdGguYWJzKGI2KSkgJiZcbiAgICAgICAgICBNYXRoLmFicyhhNyAtIGI3KSA8PSBnbE1hdHJpeC5FUFNJTE9OKk1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTcpLCBNYXRoLmFicyhiNykpICYmXG4gICAgICAgICAgTWF0aC5hYnMoYTggLSBiOCkgPD0gZ2xNYXRyaXguRVBTSUxPTipNYXRoLm1heCgxLjAsIE1hdGguYWJzKGE4KSwgTWF0aC5hYnMoYjgpKSk7XG59XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayBtYXQzLm11bHRpcGx5fVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBtdWwgPSBtdWx0aXBseTtcblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIG1hdDMuc3VidHJhY3R9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IHN1YiA9IHN1YnRyYWN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2wtbWF0cml4L3NyYy9nbC1tYXRyaXgvbWF0My5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQ29weXJpZ2h0IChjKSAyMDE1LCBCcmFuZG9uIEpvbmVzLCBDb2xpbiBNYWNLZW56aWUgSVYuXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cblRIRSBTT0ZUV0FSRS4gKi9cblxuaW1wb3J0ICogYXMgZ2xNYXRyaXggZnJvbSBcIi4vY29tbW9uXCI7XG5cbi8qKlxuICogMyBEaW1lbnNpb25hbCBWZWN0b3JcbiAqIEBtb2R1bGUgdmVjM1xuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldywgZW1wdHkgdmVjM1xuICpcbiAqIEByZXR1cm5zIHt2ZWMzfSBhIG5ldyAzRCB2ZWN0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgbGV0IG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDMpO1xuICBvdXRbMF0gPSAwO1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgdmVjMyBpbml0aWFsaXplZCB3aXRoIHZhbHVlcyBmcm9tIGFuIGV4aXN0aW5nIHZlY3RvclxuICpcbiAqIEBwYXJhbSB7dmVjM30gYSB2ZWN0b3IgdG8gY2xvbmVcbiAqIEByZXR1cm5zIHt2ZWMzfSBhIG5ldyAzRCB2ZWN0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb25lKGEpIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDMpO1xuICBvdXRbMF0gPSBhWzBdO1xuICBvdXRbMV0gPSBhWzFdO1xuICBvdXRbMl0gPSBhWzJdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGxlbmd0aCBvZiBhIHZlYzNcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdmVjdG9yIHRvIGNhbGN1bGF0ZSBsZW5ndGggb2ZcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGxlbmd0aCBvZiBhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsZW5ndGgoYSkge1xuICBsZXQgeCA9IGFbMF07XG4gIGxldCB5ID0gYVsxXTtcbiAgbGV0IHogPSBhWzJdO1xuICByZXR1cm4gTWF0aC5zcXJ0KHgqeCArIHkqeSArIHoqeik7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyB2ZWMzIGluaXRpYWxpemVkIHdpdGggdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFggY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geSBZIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHogWiBjb21wb25lbnRcbiAqIEByZXR1cm5zIHt2ZWMzfSBhIG5ldyAzRCB2ZWN0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21WYWx1ZXMoeCwgeSwgeikge1xuICBsZXQgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoMyk7XG4gIG91dFswXSA9IHg7XG4gIG91dFsxXSA9IHk7XG4gIG91dFsyXSA9IHo7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIHZlYzMgdG8gYW5vdGhlclxuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIHNvdXJjZSB2ZWN0b3JcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHkob3V0LCBhKSB7XG4gIG91dFswXSA9IGFbMF07XG4gIG91dFsxXSA9IGFbMV07XG4gIG91dFsyXSA9IGFbMl07XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU2V0IHRoZSBjb21wb25lbnRzIG9mIGEgdmVjMyB0byB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFggY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geSBZIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHogWiBjb21wb25lbnRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldChvdXQsIHgsIHksIHopIHtcbiAgb3V0WzBdID0geDtcbiAgb3V0WzFdID0geTtcbiAgb3V0WzJdID0gejtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBBZGRzIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGQob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKyBiWzBdO1xuICBvdXRbMV0gPSBhWzFdICsgYlsxXTtcbiAgb3V0WzJdID0gYVsyXSArIGJbMl07XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU3VidHJhY3RzIHZlY3RvciBiIGZyb20gdmVjdG9yIGFcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAtIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gLSBiWzFdO1xuICBvdXRbMl0gPSBhWzJdIC0gYlsyXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBNdWx0aXBsaWVzIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseShvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAqIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gKiBiWzFdO1xuICBvdXRbMl0gPSBhWzJdICogYlsyXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBEaXZpZGVzIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXZpZGUob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gLyBiWzBdO1xuICBvdXRbMV0gPSBhWzFdIC8gYlsxXTtcbiAgb3V0WzJdID0gYVsyXSAvIGJbMl07XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogTWF0aC5jZWlsIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjM1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdmVjdG9yIHRvIGNlaWxcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNlaWwob3V0LCBhKSB7XG4gIG91dFswXSA9IE1hdGguY2VpbChhWzBdKTtcbiAgb3V0WzFdID0gTWF0aC5jZWlsKGFbMV0pO1xuICBvdXRbMl0gPSBNYXRoLmNlaWwoYVsyXSk7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogTWF0aC5mbG9vciB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzNcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHZlY3RvciB0byBmbG9vclxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZmxvb3Iob3V0LCBhKSB7XG4gIG91dFswXSA9IE1hdGguZmxvb3IoYVswXSk7XG4gIG91dFsxXSA9IE1hdGguZmxvb3IoYVsxXSk7XG4gIG91dFsyXSA9IE1hdGguZmxvb3IoYVsyXSk7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbWluaW11bSBvZiB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbWluKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBNYXRoLm1pbihhWzBdLCBiWzBdKTtcbiAgb3V0WzFdID0gTWF0aC5taW4oYVsxXSwgYlsxXSk7XG4gIG91dFsyXSA9IE1hdGgubWluKGFbMl0sIGJbMl0pO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG1heGltdW0gb2YgdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1heChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gTWF0aC5tYXgoYVswXSwgYlswXSk7XG4gIG91dFsxXSA9IE1hdGgubWF4KGFbMV0sIGJbMV0pO1xuICBvdXRbMl0gPSBNYXRoLm1heChhWzJdLCBiWzJdKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBNYXRoLnJvdW5kIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjM1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdmVjdG9yIHRvIHJvdW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3VuZChvdXQsIGEpIHtcbiAgb3V0WzBdID0gTWF0aC5yb3VuZChhWzBdKTtcbiAgb3V0WzFdID0gTWF0aC5yb3VuZChhWzFdKTtcbiAgb3V0WzJdID0gTWF0aC5yb3VuZChhWzJdKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTY2FsZXMgYSB2ZWMzIGJ5IGEgc2NhbGFyIG51bWJlclxuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIHZlY3RvciB0byBzY2FsZVxuICogQHBhcmFtIHtOdW1iZXJ9IGIgYW1vdW50IHRvIHNjYWxlIHRoZSB2ZWN0b3IgYnlcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICogYjtcbiAgb3V0WzFdID0gYVsxXSAqIGI7XG4gIG91dFsyXSA9IGFbMl0gKiBiO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEFkZHMgdHdvIHZlYzMncyBhZnRlciBzY2FsaW5nIHRoZSBzZWNvbmQgb3BlcmFuZCBieSBhIHNjYWxhciB2YWx1ZVxuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsZSB0aGUgYW1vdW50IHRvIHNjYWxlIGIgYnkgYmVmb3JlIGFkZGluZ1xuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2NhbGVBbmRBZGQob3V0LCBhLCBiLCBzY2FsZSkge1xuICBvdXRbMF0gPSBhWzBdICsgKGJbMF0gKiBzY2FsZSk7XG4gIG91dFsxXSA9IGFbMV0gKyAoYlsxXSAqIHNjYWxlKTtcbiAgb3V0WzJdID0gYVsyXSArIChiWzJdICogc2NhbGUpO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGV1Y2xpZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlzdGFuY2UoYSwgYikge1xuICBsZXQgeCA9IGJbMF0gLSBhWzBdO1xuICBsZXQgeSA9IGJbMV0gLSBhWzFdO1xuICBsZXQgeiA9IGJbMl0gLSBhWzJdO1xuICByZXR1cm4gTWF0aC5zcXJ0KHgqeCArIHkqeSArIHoqeik7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgc3F1YXJlZCBldWNsaWRpYW4gZGlzdGFuY2UgYmV0d2VlbiB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3F1YXJlZERpc3RhbmNlKGEsIGIpIHtcbiAgbGV0IHggPSBiWzBdIC0gYVswXTtcbiAgbGV0IHkgPSBiWzFdIC0gYVsxXTtcbiAgbGV0IHogPSBiWzJdIC0gYVsyXTtcbiAgcmV0dXJuIHgqeCArIHkqeSArIHoqejtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBzcXVhcmVkIGxlbmd0aCBvZiBhIHZlYzNcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdmVjdG9yIHRvIGNhbGN1bGF0ZSBzcXVhcmVkIGxlbmd0aCBvZlxuICogQHJldHVybnMge051bWJlcn0gc3F1YXJlZCBsZW5ndGggb2YgYVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3F1YXJlZExlbmd0aChhKSB7XG4gIGxldCB4ID0gYVswXTtcbiAgbGV0IHkgPSBhWzFdO1xuICBsZXQgeiA9IGFbMl07XG4gIHJldHVybiB4KnggKyB5KnkgKyB6Kno7XG59XG5cbi8qKlxuICogTmVnYXRlcyB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzNcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHZlY3RvciB0byBuZWdhdGVcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5lZ2F0ZShvdXQsIGEpIHtcbiAgb3V0WzBdID0gLWFbMF07XG4gIG91dFsxXSA9IC1hWzFdO1xuICBvdXRbMl0gPSAtYVsyXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBpbnZlcnNlIG9mIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjM1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdmVjdG9yIHRvIGludmVydFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJzZShvdXQsIGEpIHtcbiAgb3V0WzBdID0gMS4wIC8gYVswXTtcbiAgb3V0WzFdID0gMS4wIC8gYVsxXTtcbiAgb3V0WzJdID0gMS4wIC8gYVsyXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBOb3JtYWxpemUgYSB2ZWMzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB2ZWN0b3IgdG8gbm9ybWFsaXplXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemUob3V0LCBhKSB7XG4gIGxldCB4ID0gYVswXTtcbiAgbGV0IHkgPSBhWzFdO1xuICBsZXQgeiA9IGFbMl07XG4gIGxldCBsZW4gPSB4KnggKyB5KnkgKyB6Kno7XG4gIGlmIChsZW4gPiAwKSB7XG4gICAgLy9UT0RPOiBldmFsdWF0ZSB1c2Ugb2YgZ2xtX2ludnNxcnQgaGVyZT9cbiAgICBsZW4gPSAxIC8gTWF0aC5zcXJ0KGxlbik7XG4gICAgb3V0WzBdID0gYVswXSAqIGxlbjtcbiAgICBvdXRbMV0gPSBhWzFdICogbGVuO1xuICAgIG91dFsyXSA9IGFbMl0gKiBsZW47XG4gIH1cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBkb3QgcHJvZHVjdCBvZiB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkb3QgcHJvZHVjdCBvZiBhIGFuZCBiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkb3QoYSwgYikge1xuICByZXR1cm4gYVswXSAqIGJbMF0gKyBhWzFdICogYlsxXSArIGFbMl0gKiBiWzJdO1xufVxuXG4vKipcbiAqIENvbXB1dGVzIHRoZSBjcm9zcyBwcm9kdWN0IG9mIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcm9zcyhvdXQsIGEsIGIpIHtcbiAgbGV0IGF4ID0gYVswXSwgYXkgPSBhWzFdLCBheiA9IGFbMl07XG4gIGxldCBieCA9IGJbMF0sIGJ5ID0gYlsxXSwgYnogPSBiWzJdO1xuXG4gIG91dFswXSA9IGF5ICogYnogLSBheiAqIGJ5O1xuICBvdXRbMV0gPSBheiAqIGJ4IC0gYXggKiBiejtcbiAgb3V0WzJdID0gYXggKiBieSAtIGF5ICogYng7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUGVyZm9ybXMgYSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gdCBpbnRlcnBvbGF0aW9uIGFtb3VudCBiZXR3ZWVuIHRoZSB0d28gaW5wdXRzXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsZXJwKG91dCwgYSwgYiwgdCkge1xuICBsZXQgYXggPSBhWzBdO1xuICBsZXQgYXkgPSBhWzFdO1xuICBsZXQgYXogPSBhWzJdO1xuICBvdXRbMF0gPSBheCArIHQgKiAoYlswXSAtIGF4KTtcbiAgb3V0WzFdID0gYXkgKyB0ICogKGJbMV0gLSBheSk7XG4gIG91dFsyXSA9IGF6ICsgdCAqIChiWzJdIC0gYXopO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFBlcmZvcm1zIGEgaGVybWl0ZSBpbnRlcnBvbGF0aW9uIHdpdGggdHdvIGNvbnRyb2wgcG9pbnRzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBjIHRoZSB0aGlyZCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGQgdGhlIGZvdXJ0aCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gdCBpbnRlcnBvbGF0aW9uIGFtb3VudCBiZXR3ZWVuIHRoZSB0d28gaW5wdXRzXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoZXJtaXRlKG91dCwgYSwgYiwgYywgZCwgdCkge1xuICBsZXQgZmFjdG9yVGltZXMyID0gdCAqIHQ7XG4gIGxldCBmYWN0b3IxID0gZmFjdG9yVGltZXMyICogKDIgKiB0IC0gMykgKyAxO1xuICBsZXQgZmFjdG9yMiA9IGZhY3RvclRpbWVzMiAqICh0IC0gMikgKyB0O1xuICBsZXQgZmFjdG9yMyA9IGZhY3RvclRpbWVzMiAqICh0IC0gMSk7XG4gIGxldCBmYWN0b3I0ID0gZmFjdG9yVGltZXMyICogKDMgLSAyICogdCk7XG5cbiAgb3V0WzBdID0gYVswXSAqIGZhY3RvcjEgKyBiWzBdICogZmFjdG9yMiArIGNbMF0gKiBmYWN0b3IzICsgZFswXSAqIGZhY3RvcjQ7XG4gIG91dFsxXSA9IGFbMV0gKiBmYWN0b3IxICsgYlsxXSAqIGZhY3RvcjIgKyBjWzFdICogZmFjdG9yMyArIGRbMV0gKiBmYWN0b3I0O1xuICBvdXRbMl0gPSBhWzJdICogZmFjdG9yMSArIGJbMl0gKiBmYWN0b3IyICsgY1syXSAqIGZhY3RvcjMgKyBkWzJdICogZmFjdG9yNDtcblxuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFBlcmZvcm1zIGEgYmV6aWVyIGludGVycG9sYXRpb24gd2l0aCB0d28gY29udHJvbCBwb2ludHNcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGMgdGhlIHRoaXJkIG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gZCB0aGUgZm91cnRoIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSB0IGludGVycG9sYXRpb24gYW1vdW50IGJldHdlZW4gdGhlIHR3byBpbnB1dHNcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJlemllcihvdXQsIGEsIGIsIGMsIGQsIHQpIHtcbiAgbGV0IGludmVyc2VGYWN0b3IgPSAxIC0gdDtcbiAgbGV0IGludmVyc2VGYWN0b3JUaW1lc1R3byA9IGludmVyc2VGYWN0b3IgKiBpbnZlcnNlRmFjdG9yO1xuICBsZXQgZmFjdG9yVGltZXMyID0gdCAqIHQ7XG4gIGxldCBmYWN0b3IxID0gaW52ZXJzZUZhY3RvclRpbWVzVHdvICogaW52ZXJzZUZhY3RvcjtcbiAgbGV0IGZhY3RvcjIgPSAzICogdCAqIGludmVyc2VGYWN0b3JUaW1lc1R3bztcbiAgbGV0IGZhY3RvcjMgPSAzICogZmFjdG9yVGltZXMyICogaW52ZXJzZUZhY3RvcjtcbiAgbGV0IGZhY3RvcjQgPSBmYWN0b3JUaW1lczIgKiB0O1xuXG4gIG91dFswXSA9IGFbMF0gKiBmYWN0b3IxICsgYlswXSAqIGZhY3RvcjIgKyBjWzBdICogZmFjdG9yMyArIGRbMF0gKiBmYWN0b3I0O1xuICBvdXRbMV0gPSBhWzFdICogZmFjdG9yMSArIGJbMV0gKiBmYWN0b3IyICsgY1sxXSAqIGZhY3RvcjMgKyBkWzFdICogZmFjdG9yNDtcbiAgb3V0WzJdID0gYVsyXSAqIGZhY3RvcjEgKyBiWzJdICogZmFjdG9yMiArIGNbMl0gKiBmYWN0b3IzICsgZFsyXSAqIGZhY3RvcjQ7XG5cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSByYW5kb20gdmVjdG9yIHdpdGggdGhlIGdpdmVuIHNjYWxlXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7TnVtYmVyfSBbc2NhbGVdIExlbmd0aCBvZiB0aGUgcmVzdWx0aW5nIHZlY3Rvci4gSWYgb21taXR0ZWQsIGEgdW5pdCB2ZWN0b3Igd2lsbCBiZSByZXR1cm5lZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tKG91dCwgc2NhbGUpIHtcbiAgc2NhbGUgPSBzY2FsZSB8fCAxLjA7XG5cbiAgbGV0IHIgPSBnbE1hdHJpeC5SQU5ET00oKSAqIDIuMCAqIE1hdGguUEk7XG4gIGxldCB6ID0gKGdsTWF0cml4LlJBTkRPTSgpICogMi4wKSAtIDEuMDtcbiAgbGV0IHpTY2FsZSA9IE1hdGguc3FydCgxLjAteip6KSAqIHNjYWxlO1xuXG4gIG91dFswXSA9IE1hdGguY29zKHIpICogelNjYWxlO1xuICBvdXRbMV0gPSBNYXRoLnNpbihyKSAqIHpTY2FsZTtcbiAgb3V0WzJdID0geiAqIHNjYWxlO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzMgd2l0aCBhIG1hdDQuXG4gKiA0dGggdmVjdG9yIGNvbXBvbmVudCBpcyBpbXBsaWNpdGx5ICcxJ1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7bWF0NH0gbSBtYXRyaXggdG8gdHJhbnNmb3JtIHdpdGhcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybU1hdDQob3V0LCBhLCBtKSB7XG4gIGxldCB4ID0gYVswXSwgeSA9IGFbMV0sIHogPSBhWzJdO1xuICBsZXQgdyA9IG1bM10gKiB4ICsgbVs3XSAqIHkgKyBtWzExXSAqIHogKyBtWzE1XTtcbiAgdyA9IHcgfHwgMS4wO1xuICBvdXRbMF0gPSAobVswXSAqIHggKyBtWzRdICogeSArIG1bOF0gKiB6ICsgbVsxMl0pIC8gdztcbiAgb3V0WzFdID0gKG1bMV0gKiB4ICsgbVs1XSAqIHkgKyBtWzldICogeiArIG1bMTNdKSAvIHc7XG4gIG91dFsyXSA9IChtWzJdICogeCArIG1bNl0gKiB5ICsgbVsxMF0gKiB6ICsgbVsxNF0pIC8gdztcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWMzIHdpdGggYSBtYXQzLlxuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7bWF0M30gbSB0aGUgM3gzIG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtTWF0MyhvdXQsIGEsIG0pIHtcbiAgbGV0IHggPSBhWzBdLCB5ID0gYVsxXSwgeiA9IGFbMl07XG4gIG91dFswXSA9IHggKiBtWzBdICsgeSAqIG1bM10gKyB6ICogbVs2XTtcbiAgb3V0WzFdID0geCAqIG1bMV0gKyB5ICogbVs0XSArIHogKiBtWzddO1xuICBvdXRbMl0gPSB4ICogbVsyXSArIHkgKiBtWzVdICsgeiAqIG1bOF07XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjMyB3aXRoIGEgcXVhdFxuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7cXVhdH0gcSBxdWF0ZXJuaW9uIHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1RdWF0KG91dCwgYSwgcSkge1xuICAvLyBiZW5jaG1hcmtzOiBodHRwOi8vanNwZXJmLmNvbS9xdWF0ZXJuaW9uLXRyYW5zZm9ybS12ZWMzLWltcGxlbWVudGF0aW9uc1xuXG4gIGxldCB4ID0gYVswXSwgeSA9IGFbMV0sIHogPSBhWzJdO1xuICBsZXQgcXggPSBxWzBdLCBxeSA9IHFbMV0sIHF6ID0gcVsyXSwgcXcgPSBxWzNdO1xuXG4gIC8vIGNhbGN1bGF0ZSBxdWF0ICogdmVjXG4gIGxldCBpeCA9IHF3ICogeCArIHF5ICogeiAtIHF6ICogeTtcbiAgbGV0IGl5ID0gcXcgKiB5ICsgcXogKiB4IC0gcXggKiB6O1xuICBsZXQgaXogPSBxdyAqIHogKyBxeCAqIHkgLSBxeSAqIHg7XG4gIGxldCBpdyA9IC1xeCAqIHggLSBxeSAqIHkgLSBxeiAqIHo7XG5cbiAgLy8gY2FsY3VsYXRlIHJlc3VsdCAqIGludmVyc2UgcXVhdFxuICBvdXRbMF0gPSBpeCAqIHF3ICsgaXcgKiAtcXggKyBpeSAqIC1xeiAtIGl6ICogLXF5O1xuICBvdXRbMV0gPSBpeSAqIHF3ICsgaXcgKiAtcXkgKyBpeiAqIC1xeCAtIGl4ICogLXF6O1xuICBvdXRbMl0gPSBpeiAqIHF3ICsgaXcgKiAtcXogKyBpeCAqIC1xeSAtIGl5ICogLXF4O1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJvdGF0ZSBhIDNEIHZlY3RvciBhcm91bmQgdGhlIHgtYXhpc1xuICogQHBhcmFtIHt2ZWMzfSBvdXQgVGhlIHJlY2VpdmluZyB2ZWMzXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVGhlIHZlYzMgcG9pbnQgdG8gcm90YXRlXG4gKiBAcGFyYW0ge3ZlYzN9IGIgVGhlIG9yaWdpbiBvZiB0aGUgcm90YXRpb25cbiAqIEBwYXJhbSB7TnVtYmVyfSBjIFRoZSBhbmdsZSBvZiByb3RhdGlvblxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWChvdXQsIGEsIGIsIGMpe1xuICBsZXQgcCA9IFtdLCByPVtdO1xuICAvL1RyYW5zbGF0ZSBwb2ludCB0byB0aGUgb3JpZ2luXG4gIHBbMF0gPSBhWzBdIC0gYlswXTtcbiAgcFsxXSA9IGFbMV0gLSBiWzFdO1xuICBwWzJdID0gYVsyXSAtIGJbMl07XG5cbiAgLy9wZXJmb3JtIHJvdGF0aW9uXG4gIHJbMF0gPSBwWzBdO1xuICByWzFdID0gcFsxXSpNYXRoLmNvcyhjKSAtIHBbMl0qTWF0aC5zaW4oYyk7XG4gIHJbMl0gPSBwWzFdKk1hdGguc2luKGMpICsgcFsyXSpNYXRoLmNvcyhjKTtcblxuICAvL3RyYW5zbGF0ZSB0byBjb3JyZWN0IHBvc2l0aW9uXG4gIG91dFswXSA9IHJbMF0gKyBiWzBdO1xuICBvdXRbMV0gPSByWzFdICsgYlsxXTtcbiAgb3V0WzJdID0gclsyXSArIGJbMl07XG5cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSb3RhdGUgYSAzRCB2ZWN0b3IgYXJvdW5kIHRoZSB5LWF4aXNcbiAqIEBwYXJhbSB7dmVjM30gb3V0IFRoZSByZWNlaXZpbmcgdmVjM1xuICogQHBhcmFtIHt2ZWMzfSBhIFRoZSB2ZWMzIHBvaW50IHRvIHJvdGF0ZVxuICogQHBhcmFtIHt2ZWMzfSBiIFRoZSBvcmlnaW4gb2YgdGhlIHJvdGF0aW9uXG4gKiBAcGFyYW0ge051bWJlcn0gYyBUaGUgYW5nbGUgb2Ygcm90YXRpb25cbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVkob3V0LCBhLCBiLCBjKXtcbiAgbGV0IHAgPSBbXSwgcj1bXTtcbiAgLy9UcmFuc2xhdGUgcG9pbnQgdG8gdGhlIG9yaWdpblxuICBwWzBdID0gYVswXSAtIGJbMF07XG4gIHBbMV0gPSBhWzFdIC0gYlsxXTtcbiAgcFsyXSA9IGFbMl0gLSBiWzJdO1xuXG4gIC8vcGVyZm9ybSByb3RhdGlvblxuICByWzBdID0gcFsyXSpNYXRoLnNpbihjKSArIHBbMF0qTWF0aC5jb3MoYyk7XG4gIHJbMV0gPSBwWzFdO1xuICByWzJdID0gcFsyXSpNYXRoLmNvcyhjKSAtIHBbMF0qTWF0aC5zaW4oYyk7XG5cbiAgLy90cmFuc2xhdGUgdG8gY29ycmVjdCBwb3NpdGlvblxuICBvdXRbMF0gPSByWzBdICsgYlswXTtcbiAgb3V0WzFdID0gclsxXSArIGJbMV07XG4gIG91dFsyXSA9IHJbMl0gKyBiWzJdO1xuXG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUm90YXRlIGEgM0QgdmVjdG9yIGFyb3VuZCB0aGUgei1heGlzXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCBUaGUgcmVjZWl2aW5nIHZlYzNcbiAqIEBwYXJhbSB7dmVjM30gYSBUaGUgdmVjMyBwb2ludCB0byByb3RhdGVcbiAqIEBwYXJhbSB7dmVjM30gYiBUaGUgb3JpZ2luIG9mIHRoZSByb3RhdGlvblxuICogQHBhcmFtIHtOdW1iZXJ9IGMgVGhlIGFuZ2xlIG9mIHJvdGF0aW9uXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVaKG91dCwgYSwgYiwgYyl7XG4gIGxldCBwID0gW10sIHI9W107XG4gIC8vVHJhbnNsYXRlIHBvaW50IHRvIHRoZSBvcmlnaW5cbiAgcFswXSA9IGFbMF0gLSBiWzBdO1xuICBwWzFdID0gYVsxXSAtIGJbMV07XG4gIHBbMl0gPSBhWzJdIC0gYlsyXTtcblxuICAvL3BlcmZvcm0gcm90YXRpb25cbiAgclswXSA9IHBbMF0qTWF0aC5jb3MoYykgLSBwWzFdKk1hdGguc2luKGMpO1xuICByWzFdID0gcFswXSpNYXRoLnNpbihjKSArIHBbMV0qTWF0aC5jb3MoYyk7XG4gIHJbMl0gPSBwWzJdO1xuXG4gIC8vdHJhbnNsYXRlIHRvIGNvcnJlY3QgcG9zaXRpb25cbiAgb3V0WzBdID0gclswXSArIGJbMF07XG4gIG91dFsxXSA9IHJbMV0gKyBiWzFdO1xuICBvdXRbMl0gPSByWzJdICsgYlsyXTtcblxuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEdldCB0aGUgYW5nbGUgYmV0d2VlbiB0d28gM0QgdmVjdG9yc1xuICogQHBhcmFtIHt2ZWMzfSBhIFRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgVGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgYW5nbGUgaW4gcmFkaWFuc1xuICovXG5leHBvcnQgZnVuY3Rpb24gYW5nbGUoYSwgYikge1xuICBsZXQgdGVtcEEgPSBmcm9tVmFsdWVzKGFbMF0sIGFbMV0sIGFbMl0pO1xuICBsZXQgdGVtcEIgPSBmcm9tVmFsdWVzKGJbMF0sIGJbMV0sIGJbMl0pO1xuXG4gIG5vcm1hbGl6ZSh0ZW1wQSwgdGVtcEEpO1xuICBub3JtYWxpemUodGVtcEIsIHRlbXBCKTtcblxuICBsZXQgY29zaW5lID0gZG90KHRlbXBBLCB0ZW1wQik7XG5cbiAgaWYoY29zaW5lID4gMS4wKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgZWxzZSBpZihjb3NpbmUgPCAtMS4wKSB7XG4gICAgcmV0dXJuIE1hdGguUEk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIE1hdGguYWNvcyhjb3NpbmUpO1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIHZlY3RvclxuICpcbiAqIEBwYXJhbSB7dmVjM30gYSB2ZWN0b3IgdG8gcmVwcmVzZW50IGFzIGEgc3RyaW5nXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyKGEpIHtcbiAgcmV0dXJuICd2ZWMzKCcgKyBhWzBdICsgJywgJyArIGFbMV0gKyAnLCAnICsgYVsyXSArICcpJztcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSB2ZWN0b3JzIGhhdmUgZXhhY3RseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbiAod2hlbiBjb21wYXJlZCB3aXRoID09PSlcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVGhlIGZpcnN0IHZlY3Rvci5cbiAqIEBwYXJhbSB7dmVjM30gYiBUaGUgc2Vjb25kIHZlY3Rvci5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSB2ZWN0b3JzIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXhhY3RFcXVhbHMoYSwgYikge1xuICByZXR1cm4gYVswXSA9PT0gYlswXSAmJiBhWzFdID09PSBiWzFdICYmIGFbMl0gPT09IGJbMl07XG59XG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgdmVjdG9ycyBoYXZlIGFwcHJveGltYXRlbHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24uXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBhIFRoZSBmaXJzdCB2ZWN0b3IuXG4gKiBAcGFyYW0ge3ZlYzN9IGIgVGhlIHNlY29uZCB2ZWN0b3IuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmVjdG9ycyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVxdWFscyhhLCBiKSB7XG4gIGxldCBhMCA9IGFbMF0sIGExID0gYVsxXSwgYTIgPSBhWzJdO1xuICBsZXQgYjAgPSBiWzBdLCBiMSA9IGJbMV0sIGIyID0gYlsyXTtcbiAgcmV0dXJuIChNYXRoLmFicyhhMCAtIGIwKSA8PSBnbE1hdHJpeC5FUFNJTE9OKk1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTApLCBNYXRoLmFicyhiMCkpICYmXG4gICAgICAgICAgTWF0aC5hYnMoYTEgLSBiMSkgPD0gZ2xNYXRyaXguRVBTSUxPTipNYXRoLm1heCgxLjAsIE1hdGguYWJzKGExKSwgTWF0aC5hYnMoYjEpKSAmJlxuICAgICAgICAgIE1hdGguYWJzKGEyIC0gYjIpIDw9IGdsTWF0cml4LkVQU0lMT04qTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMiksIE1hdGguYWJzKGIyKSkpO1xufVxuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMy5zdWJ0cmFjdH1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3Qgc3ViID0gc3VidHJhY3Q7XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayB2ZWMzLm11bHRpcGx5fVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBtdWwgPSBtdWx0aXBseTtcblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzMuZGl2aWRlfVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBkaXYgPSBkaXZpZGU7XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayB2ZWMzLmRpc3RhbmNlfVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBkaXN0ID0gZGlzdGFuY2U7XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayB2ZWMzLnNxdWFyZWREaXN0YW5jZX1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3Qgc3FyRGlzdCA9IHNxdWFyZWREaXN0YW5jZTtcblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzMubGVuZ3RofVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBsZW4gPSBsZW5ndGg7XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayB2ZWMzLnNxdWFyZWRMZW5ndGh9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IHNxckxlbiA9IHNxdWFyZWRMZW5ndGg7XG5cbi8qKlxuICogUGVyZm9ybSBzb21lIG9wZXJhdGlvbiBvdmVyIGFuIGFycmF5IG9mIHZlYzNzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGEgdGhlIGFycmF5IG9mIHZlY3RvcnMgdG8gaXRlcmF0ZSBvdmVyXG4gKiBAcGFyYW0ge051bWJlcn0gc3RyaWRlIE51bWJlciBvZiBlbGVtZW50cyBiZXR3ZWVuIHRoZSBzdGFydCBvZiBlYWNoIHZlYzMuIElmIDAgYXNzdW1lcyB0aWdodGx5IHBhY2tlZFxuICogQHBhcmFtIHtOdW1iZXJ9IG9mZnNldCBOdW1iZXIgb2YgZWxlbWVudHMgdG8gc2tpcCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBhcnJheVxuICogQHBhcmFtIHtOdW1iZXJ9IGNvdW50IE51bWJlciBvZiB2ZWMzcyB0byBpdGVyYXRlIG92ZXIuIElmIDAgaXRlcmF0ZXMgb3ZlciBlbnRpcmUgYXJyYXlcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIEZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggdmVjdG9yIGluIHRoZSBhcnJheVxuICogQHBhcmFtIHtPYmplY3R9IFthcmddIGFkZGl0aW9uYWwgYXJndW1lbnQgdG8gcGFzcyB0byBmblxuICogQHJldHVybnMge0FycmF5fSBhXG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IGZvckVhY2ggPSAoZnVuY3Rpb24oKSB7XG4gIGxldCB2ZWMgPSBjcmVhdGUoKTtcblxuICByZXR1cm4gZnVuY3Rpb24oYSwgc3RyaWRlLCBvZmZzZXQsIGNvdW50LCBmbiwgYXJnKSB7XG4gICAgbGV0IGksIGw7XG4gICAgaWYoIXN0cmlkZSkge1xuICAgICAgc3RyaWRlID0gMztcbiAgICB9XG5cbiAgICBpZighb2Zmc2V0KSB7XG4gICAgICBvZmZzZXQgPSAwO1xuICAgIH1cblxuICAgIGlmKGNvdW50KSB7XG4gICAgICBsID0gTWF0aC5taW4oKGNvdW50ICogc3RyaWRlKSArIG9mZnNldCwgYS5sZW5ndGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsID0gYS5sZW5ndGg7XG4gICAgfVxuXG4gICAgZm9yKGkgPSBvZmZzZXQ7IGkgPCBsOyBpICs9IHN0cmlkZSkge1xuICAgICAgdmVjWzBdID0gYVtpXTsgdmVjWzFdID0gYVtpKzFdOyB2ZWNbMl0gPSBhW2krMl07XG4gICAgICBmbih2ZWMsIHZlYywgYXJnKTtcbiAgICAgIGFbaV0gPSB2ZWNbMF07IGFbaSsxXSA9IHZlY1sxXTsgYVtpKzJdID0gdmVjWzJdO1xuICAgIH1cblxuICAgIHJldHVybiBhO1xuICB9O1xufSkoKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dsLW1hdHJpeC9zcmMvZ2wtbWF0cml4L3ZlYzMuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIENvcHlyaWdodCAoYykgMjAxNSwgQnJhbmRvbiBKb25lcywgQ29saW4gTWFjS2VuemllIElWLlxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbmZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG5hbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG5USEUgU09GVFdBUkUuICovXG5cbmltcG9ydCAqIGFzIGdsTWF0cml4IGZyb20gXCIuL2NvbW1vblwiO1xuXG4vKipcbiAqIDQgRGltZW5zaW9uYWwgVmVjdG9yXG4gKiBAbW9kdWxlIHZlYzRcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcsIGVtcHR5IHZlYzRcbiAqXG4gKiBAcmV0dXJucyB7dmVjNH0gYSBuZXcgNEQgdmVjdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gIGxldCBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSg0KTtcbiAgb3V0WzBdID0gMDtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMDtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHZlYzQgaW5pdGlhbGl6ZWQgd2l0aCB2YWx1ZXMgZnJvbSBhbiBleGlzdGluZyB2ZWN0b3JcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdmVjdG9yIHRvIGNsb25lXG4gKiBAcmV0dXJucyB7dmVjNH0gYSBuZXcgNEQgdmVjdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShhKSB7XG4gIGxldCBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSg0KTtcbiAgb3V0WzBdID0gYVswXTtcbiAgb3V0WzFdID0gYVsxXTtcbiAgb3V0WzJdID0gYVsyXTtcbiAgb3V0WzNdID0gYVszXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHZlYzQgaW5pdGlhbGl6ZWQgd2l0aCB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB5IFkgY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geiBaIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHcgVyBjb21wb25lbnRcbiAqIEByZXR1cm5zIHt2ZWM0fSBhIG5ldyA0RCB2ZWN0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21WYWx1ZXMoeCwgeSwgeiwgdykge1xuICBsZXQgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoNCk7XG4gIG91dFswXSA9IHg7XG4gIG91dFsxXSA9IHk7XG4gIG91dFsyXSA9IHo7XG4gIG91dFszXSA9IHc7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIHZlYzQgdG8gYW5vdGhlclxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIHNvdXJjZSB2ZWN0b3JcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHkob3V0LCBhKSB7XG4gIG91dFswXSA9IGFbMF07XG4gIG91dFsxXSA9IGFbMV07XG4gIG91dFsyXSA9IGFbMl07XG4gIG91dFszXSA9IGFbM107XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU2V0IHRoZSBjb21wb25lbnRzIG9mIGEgdmVjNCB0byB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFggY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geSBZIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHogWiBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB3IFcgY29tcG9uZW50XG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXQob3V0LCB4LCB5LCB6LCB3KSB7XG4gIG91dFswXSA9IHg7XG4gIG91dFsxXSA9IHk7XG4gIG91dFsyXSA9IHo7XG4gIG91dFszXSA9IHc7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQWRkcyB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICsgYlswXTtcbiAgb3V0WzFdID0gYVsxXSArIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gKyBiWzJdO1xuICBvdXRbM10gPSBhWzNdICsgYlszXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTdWJ0cmFjdHMgdmVjdG9yIGIgZnJvbSB2ZWN0b3IgYVxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0KG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdIC0gYlswXTtcbiAgb3V0WzFdID0gYVsxXSAtIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gLSBiWzJdO1xuICBvdXRbM10gPSBhWzNdIC0gYlszXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBNdWx0aXBsaWVzIHR3byB2ZWM0J3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseShvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAqIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gKiBiWzFdO1xuICBvdXRbMl0gPSBhWzJdICogYlsyXTtcbiAgb3V0WzNdID0gYVszXSAqIGJbM107XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogRGl2aWRlcyB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGl2aWRlKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdIC8gYlswXTtcbiAgb3V0WzFdID0gYVsxXSAvIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gLyBiWzJdO1xuICBvdXRbM10gPSBhWzNdIC8gYlszXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBNYXRoLmNlaWwgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWM0XG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB2ZWN0b3IgdG8gY2VpbFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gY2VpbChvdXQsIGEpIHtcbiAgb3V0WzBdID0gTWF0aC5jZWlsKGFbMF0pO1xuICBvdXRbMV0gPSBNYXRoLmNlaWwoYVsxXSk7XG4gIG91dFsyXSA9IE1hdGguY2VpbChhWzJdKTtcbiAgb3V0WzNdID0gTWF0aC5jZWlsKGFbM10pO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIE1hdGguZmxvb3IgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWM0XG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB2ZWN0b3IgdG8gZmxvb3JcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZsb29yKG91dCwgYSkge1xuICBvdXRbMF0gPSBNYXRoLmZsb29yKGFbMF0pO1xuICBvdXRbMV0gPSBNYXRoLmZsb29yKGFbMV0pO1xuICBvdXRbMl0gPSBNYXRoLmZsb29yKGFbMl0pO1xuICBvdXRbM10gPSBNYXRoLmZsb29yKGFbM10pO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG1pbmltdW0gb2YgdHdvIHZlYzQnc1xuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1pbihvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gTWF0aC5taW4oYVswXSwgYlswXSk7XG4gIG91dFsxXSA9IE1hdGgubWluKGFbMV0sIGJbMV0pO1xuICBvdXRbMl0gPSBNYXRoLm1pbihhWzJdLCBiWzJdKTtcbiAgb3V0WzNdID0gTWF0aC5taW4oYVszXSwgYlszXSk7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbWF4aW11bSBvZiB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbWF4KG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBNYXRoLm1heChhWzBdLCBiWzBdKTtcbiAgb3V0WzFdID0gTWF0aC5tYXgoYVsxXSwgYlsxXSk7XG4gIG91dFsyXSA9IE1hdGgubWF4KGFbMl0sIGJbMl0pO1xuICBvdXRbM10gPSBNYXRoLm1heChhWzNdLCBiWzNdKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBNYXRoLnJvdW5kIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjNFxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdmVjdG9yIHRvIHJvdW5kXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3VuZChvdXQsIGEpIHtcbiAgb3V0WzBdID0gTWF0aC5yb3VuZChhWzBdKTtcbiAgb3V0WzFdID0gTWF0aC5yb3VuZChhWzFdKTtcbiAgb3V0WzJdID0gTWF0aC5yb3VuZChhWzJdKTtcbiAgb3V0WzNdID0gTWF0aC5yb3VuZChhWzNdKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTY2FsZXMgYSB2ZWM0IGJ5IGEgc2NhbGFyIG51bWJlclxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIHZlY3RvciB0byBzY2FsZVxuICogQHBhcmFtIHtOdW1iZXJ9IGIgYW1vdW50IHRvIHNjYWxlIHRoZSB2ZWN0b3IgYnlcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICogYjtcbiAgb3V0WzFdID0gYVsxXSAqIGI7XG4gIG91dFsyXSA9IGFbMl0gKiBiO1xuICBvdXRbM10gPSBhWzNdICogYjtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBBZGRzIHR3byB2ZWM0J3MgYWZ0ZXIgc2NhbGluZyB0aGUgc2Vjb25kIG9wZXJhbmQgYnkgYSBzY2FsYXIgdmFsdWVcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gc2NhbGUgdGhlIGFtb3VudCB0byBzY2FsZSBiIGJ5IGJlZm9yZSBhZGRpbmdcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlQW5kQWRkKG91dCwgYSwgYiwgc2NhbGUpIHtcbiAgb3V0WzBdID0gYVswXSArIChiWzBdICogc2NhbGUpO1xuICBvdXRbMV0gPSBhWzFdICsgKGJbMV0gKiBzY2FsZSk7XG4gIG91dFsyXSA9IGFbMl0gKyAoYlsyXSAqIHNjYWxlKTtcbiAgb3V0WzNdID0gYVszXSArIChiWzNdICogc2NhbGUpO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGV1Y2xpZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byB2ZWM0J3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlzdGFuY2UoYSwgYikge1xuICBsZXQgeCA9IGJbMF0gLSBhWzBdO1xuICBsZXQgeSA9IGJbMV0gLSBhWzFdO1xuICBsZXQgeiA9IGJbMl0gLSBhWzJdO1xuICBsZXQgdyA9IGJbM10gLSBhWzNdO1xuICByZXR1cm4gTWF0aC5zcXJ0KHgqeCArIHkqeSArIHoqeiArIHcqdyk7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgc3F1YXJlZCBldWNsaWRpYW4gZGlzdGFuY2UgYmV0d2VlbiB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3F1YXJlZERpc3RhbmNlKGEsIGIpIHtcbiAgbGV0IHggPSBiWzBdIC0gYVswXTtcbiAgbGV0IHkgPSBiWzFdIC0gYVsxXTtcbiAgbGV0IHogPSBiWzJdIC0gYVsyXTtcbiAgbGV0IHcgPSBiWzNdIC0gYVszXTtcbiAgcmV0dXJuIHgqeCArIHkqeSArIHoqeiArIHcqdztcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBsZW5ndGggb2YgYSB2ZWM0XG4gKlxuICogQHBhcmFtIHt2ZWM0fSBhIHZlY3RvciB0byBjYWxjdWxhdGUgbGVuZ3RoIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBsZW5ndGggb2YgYVxuICovXG5leHBvcnQgZnVuY3Rpb24gbGVuZ3RoKGEpIHtcbiAgbGV0IHggPSBhWzBdO1xuICBsZXQgeSA9IGFbMV07XG4gIGxldCB6ID0gYVsyXTtcbiAgbGV0IHcgPSBhWzNdO1xuICByZXR1cm4gTWF0aC5zcXJ0KHgqeCArIHkqeSArIHoqeiArIHcqdyk7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgc3F1YXJlZCBsZW5ndGggb2YgYSB2ZWM0XG4gKlxuICogQHBhcmFtIHt2ZWM0fSBhIHZlY3RvciB0byBjYWxjdWxhdGUgc3F1YXJlZCBsZW5ndGggb2ZcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHNxdWFyZWQgbGVuZ3RoIG9mIGFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNxdWFyZWRMZW5ndGgoYSkge1xuICBsZXQgeCA9IGFbMF07XG4gIGxldCB5ID0gYVsxXTtcbiAgbGV0IHogPSBhWzJdO1xuICBsZXQgdyA9IGFbM107XG4gIHJldHVybiB4KnggKyB5KnkgKyB6KnogKyB3Knc7XG59XG5cbi8qKlxuICogTmVnYXRlcyB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzRcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHZlY3RvciB0byBuZWdhdGVcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5lZ2F0ZShvdXQsIGEpIHtcbiAgb3V0WzBdID0gLWFbMF07XG4gIG91dFsxXSA9IC1hWzFdO1xuICBvdXRbMl0gPSAtYVsyXTtcbiAgb3V0WzNdID0gLWFbM107XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgaW52ZXJzZSBvZiB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzRcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHZlY3RvciB0byBpbnZlcnRcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludmVyc2Uob3V0LCBhKSB7XG4gIG91dFswXSA9IDEuMCAvIGFbMF07XG4gIG91dFsxXSA9IDEuMCAvIGFbMV07XG4gIG91dFsyXSA9IDEuMCAvIGFbMl07XG4gIG91dFszXSA9IDEuMCAvIGFbM107XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogTm9ybWFsaXplIGEgdmVjNFxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdmVjdG9yIHRvIG5vcm1hbGl6ZVxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplKG91dCwgYSkge1xuICBsZXQgeCA9IGFbMF07XG4gIGxldCB5ID0gYVsxXTtcbiAgbGV0IHogPSBhWzJdO1xuICBsZXQgdyA9IGFbM107XG4gIGxldCBsZW4gPSB4KnggKyB5KnkgKyB6KnogKyB3Knc7XG4gIGlmIChsZW4gPiAwKSB7XG4gICAgbGVuID0gMSAvIE1hdGguc3FydChsZW4pO1xuICAgIG91dFswXSA9IHggKiBsZW47XG4gICAgb3V0WzFdID0geSAqIGxlbjtcbiAgICBvdXRbMl0gPSB6ICogbGVuO1xuICAgIG91dFszXSA9IHcgKiBsZW47XG4gIH1cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBkb3QgcHJvZHVjdCBvZiB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkb3QgcHJvZHVjdCBvZiBhIGFuZCBiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkb3QoYSwgYikge1xuICByZXR1cm4gYVswXSAqIGJbMF0gKyBhWzFdICogYlsxXSArIGFbMl0gKiBiWzJdICsgYVszXSAqIGJbM107XG59XG5cbi8qKlxuICogUGVyZm9ybXMgYSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHR3byB2ZWM0J3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gdCBpbnRlcnBvbGF0aW9uIGFtb3VudCBiZXR3ZWVuIHRoZSB0d28gaW5wdXRzXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsZXJwKG91dCwgYSwgYiwgdCkge1xuICBsZXQgYXggPSBhWzBdO1xuICBsZXQgYXkgPSBhWzFdO1xuICBsZXQgYXogPSBhWzJdO1xuICBsZXQgYXcgPSBhWzNdO1xuICBvdXRbMF0gPSBheCArIHQgKiAoYlswXSAtIGF4KTtcbiAgb3V0WzFdID0gYXkgKyB0ICogKGJbMV0gLSBheSk7XG4gIG91dFsyXSA9IGF6ICsgdCAqIChiWzJdIC0gYXopO1xuICBvdXRbM10gPSBhdyArIHQgKiAoYlszXSAtIGF3KTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSByYW5kb20gdmVjdG9yIHdpdGggdGhlIGdpdmVuIHNjYWxlXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7TnVtYmVyfSBbc2NhbGVdIExlbmd0aCBvZiB0aGUgcmVzdWx0aW5nIHZlY3Rvci4gSWYgb21taXR0ZWQsIGEgdW5pdCB2ZWN0b3Igd2lsbCBiZSByZXR1cm5lZFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tKG91dCwgdmVjdG9yU2NhbGUpIHtcbiAgdmVjdG9yU2NhbGUgPSB2ZWN0b3JTY2FsZSB8fCAxLjA7XG5cbiAgLy9UT0RPOiBUaGlzIGlzIGEgcHJldHR5IGF3ZnVsIHdheSBvZiBkb2luZyB0aGlzLiBGaW5kIHNvbWV0aGluZyBiZXR0ZXIuXG4gIG91dFswXSA9IGdsTWF0cml4LlJBTkRPTSgpO1xuICBvdXRbMV0gPSBnbE1hdHJpeC5SQU5ET00oKTtcbiAgb3V0WzJdID0gZ2xNYXRyaXguUkFORE9NKCk7XG4gIG91dFszXSA9IGdsTWF0cml4LlJBTkRPTSgpO1xuICBub3JtYWxpemUob3V0LCBvdXQpO1xuICBzY2FsZShvdXQsIG91dCwgdmVjdG9yU2NhbGUpO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzQgd2l0aCBhIG1hdDQuXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxuICogQHBhcmFtIHttYXQ0fSBtIG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtTWF0NChvdXQsIGEsIG0pIHtcbiAgbGV0IHggPSBhWzBdLCB5ID0gYVsxXSwgeiA9IGFbMl0sIHcgPSBhWzNdO1xuICBvdXRbMF0gPSBtWzBdICogeCArIG1bNF0gKiB5ICsgbVs4XSAqIHogKyBtWzEyXSAqIHc7XG4gIG91dFsxXSA9IG1bMV0gKiB4ICsgbVs1XSAqIHkgKyBtWzldICogeiArIG1bMTNdICogdztcbiAgb3V0WzJdID0gbVsyXSAqIHggKyBtWzZdICogeSArIG1bMTBdICogeiArIG1bMTRdICogdztcbiAgb3V0WzNdID0gbVszXSAqIHggKyBtWzddICogeSArIG1bMTFdICogeiArIG1bMTVdICogdztcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWM0IHdpdGggYSBxdWF0XG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxuICogQHBhcmFtIHtxdWF0fSBxIHF1YXRlcm5pb24gdG8gdHJhbnNmb3JtIHdpdGhcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybVF1YXQob3V0LCBhLCBxKSB7XG4gIGxldCB4ID0gYVswXSwgeSA9IGFbMV0sIHogPSBhWzJdO1xuICBsZXQgcXggPSBxWzBdLCBxeSA9IHFbMV0sIHF6ID0gcVsyXSwgcXcgPSBxWzNdO1xuXG4gIC8vIGNhbGN1bGF0ZSBxdWF0ICogdmVjXG4gIGxldCBpeCA9IHF3ICogeCArIHF5ICogeiAtIHF6ICogeTtcbiAgbGV0IGl5ID0gcXcgKiB5ICsgcXogKiB4IC0gcXggKiB6O1xuICBsZXQgaXogPSBxdyAqIHogKyBxeCAqIHkgLSBxeSAqIHg7XG4gIGxldCBpdyA9IC1xeCAqIHggLSBxeSAqIHkgLSBxeiAqIHo7XG5cbiAgLy8gY2FsY3VsYXRlIHJlc3VsdCAqIGludmVyc2UgcXVhdFxuICBvdXRbMF0gPSBpeCAqIHF3ICsgaXcgKiAtcXggKyBpeSAqIC1xeiAtIGl6ICogLXF5O1xuICBvdXRbMV0gPSBpeSAqIHF3ICsgaXcgKiAtcXkgKyBpeiAqIC1xeCAtIGl4ICogLXF6O1xuICBvdXRbMl0gPSBpeiAqIHF3ICsgaXcgKiAtcXogKyBpeCAqIC1xeSAtIGl5ICogLXF4O1xuICBvdXRbM10gPSBhWzNdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSB2ZWN0b3JcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdmVjdG9yIHRvIHJlcHJlc2VudCBhcyBhIHN0cmluZ1xuICogQHJldHVybnMge1N0cmluZ30gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cihhKSB7XG4gIHJldHVybiAndmVjNCgnICsgYVswXSArICcsICcgKyBhWzFdICsgJywgJyArIGFbMl0gKyAnLCAnICsgYVszXSArICcpJztcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSB2ZWN0b3JzIGhhdmUgZXhhY3RseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbiAod2hlbiBjb21wYXJlZCB3aXRoID09PSlcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IGEgVGhlIGZpcnN0IHZlY3Rvci5cbiAqIEBwYXJhbSB7dmVjNH0gYiBUaGUgc2Vjb25kIHZlY3Rvci5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSB2ZWN0b3JzIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXhhY3RFcXVhbHMoYSwgYikge1xuICByZXR1cm4gYVswXSA9PT0gYlswXSAmJiBhWzFdID09PSBiWzFdICYmIGFbMl0gPT09IGJbMl0gJiYgYVszXSA9PT0gYlszXTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSB2ZWN0b3JzIGhhdmUgYXBwcm94aW1hdGVseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbi5cbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IGEgVGhlIGZpcnN0IHZlY3Rvci5cbiAqIEBwYXJhbSB7dmVjNH0gYiBUaGUgc2Vjb25kIHZlY3Rvci5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSB2ZWN0b3JzIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxzKGEsIGIpIHtcbiAgbGV0IGEwID0gYVswXSwgYTEgPSBhWzFdLCBhMiA9IGFbMl0sIGEzID0gYVszXTtcbiAgbGV0IGIwID0gYlswXSwgYjEgPSBiWzFdLCBiMiA9IGJbMl0sIGIzID0gYlszXTtcbiAgcmV0dXJuIChNYXRoLmFicyhhMCAtIGIwKSA8PSBnbE1hdHJpeC5FUFNJTE9OKk1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTApLCBNYXRoLmFicyhiMCkpICYmXG4gICAgICAgICAgTWF0aC5hYnMoYTEgLSBiMSkgPD0gZ2xNYXRyaXguRVBTSUxPTipNYXRoLm1heCgxLjAsIE1hdGguYWJzKGExKSwgTWF0aC5hYnMoYjEpKSAmJlxuICAgICAgICAgIE1hdGguYWJzKGEyIC0gYjIpIDw9IGdsTWF0cml4LkVQU0lMT04qTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMiksIE1hdGguYWJzKGIyKSkgJiZcbiAgICAgICAgICBNYXRoLmFicyhhMyAtIGIzKSA8PSBnbE1hdHJpeC5FUFNJTE9OKk1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTMpLCBNYXRoLmFicyhiMykpKTtcbn1cblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzQuc3VidHJhY3R9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IHN1YiA9IHN1YnRyYWN0O1xuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjNC5tdWx0aXBseX1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3QgbXVsID0gbXVsdGlwbHk7XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayB2ZWM0LmRpdmlkZX1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3QgZGl2ID0gZGl2aWRlO1xuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjNC5kaXN0YW5jZX1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3QgZGlzdCA9IGRpc3RhbmNlO1xuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjNC5zcXVhcmVkRGlzdGFuY2V9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IHNxckRpc3QgPSBzcXVhcmVkRGlzdGFuY2U7XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayB2ZWM0Lmxlbmd0aH1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3QgbGVuID0gbGVuZ3RoO1xuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjNC5zcXVhcmVkTGVuZ3RofVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBzcXJMZW4gPSBzcXVhcmVkTGVuZ3RoO1xuXG4vKipcbiAqIFBlcmZvcm0gc29tZSBvcGVyYXRpb24gb3ZlciBhbiBhcnJheSBvZiB2ZWM0cy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhIHRoZSBhcnJheSBvZiB2ZWN0b3JzIHRvIGl0ZXJhdGUgb3ZlclxuICogQHBhcmFtIHtOdW1iZXJ9IHN0cmlkZSBOdW1iZXIgb2YgZWxlbWVudHMgYmV0d2VlbiB0aGUgc3RhcnQgb2YgZWFjaCB2ZWM0LiBJZiAwIGFzc3VtZXMgdGlnaHRseSBwYWNrZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBvZmZzZXQgTnVtYmVyIG9mIGVsZW1lbnRzIHRvIHNraXAgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgYXJyYXlcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb3VudCBOdW1iZXIgb2YgdmVjNHMgdG8gaXRlcmF0ZSBvdmVyLiBJZiAwIGl0ZXJhdGVzIG92ZXIgZW50aXJlIGFycmF5XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBGdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIHZlY3RvciBpbiB0aGUgYXJyYXlcbiAqIEBwYXJhbSB7T2JqZWN0fSBbYXJnXSBhZGRpdGlvbmFsIGFyZ3VtZW50IHRvIHBhc3MgdG8gZm5cbiAqIEByZXR1cm5zIHtBcnJheX0gYVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBmb3JFYWNoID0gKGZ1bmN0aW9uKCkge1xuICBsZXQgdmVjID0gY3JlYXRlKCk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGEsIHN0cmlkZSwgb2Zmc2V0LCBjb3VudCwgZm4sIGFyZykge1xuICAgIGxldCBpLCBsO1xuICAgIGlmKCFzdHJpZGUpIHtcbiAgICAgIHN0cmlkZSA9IDQ7XG4gICAgfVxuXG4gICAgaWYoIW9mZnNldCkge1xuICAgICAgb2Zmc2V0ID0gMDtcbiAgICB9XG5cbiAgICBpZihjb3VudCkge1xuICAgICAgbCA9IE1hdGgubWluKChjb3VudCAqIHN0cmlkZSkgKyBvZmZzZXQsIGEubGVuZ3RoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbCA9IGEubGVuZ3RoO1xuICAgIH1cblxuICAgIGZvcihpID0gb2Zmc2V0OyBpIDwgbDsgaSArPSBzdHJpZGUpIHtcbiAgICAgIHZlY1swXSA9IGFbaV07IHZlY1sxXSA9IGFbaSsxXTsgdmVjWzJdID0gYVtpKzJdOyB2ZWNbM10gPSBhW2krM107XG4gICAgICBmbih2ZWMsIHZlYywgYXJnKTtcbiAgICAgIGFbaV0gPSB2ZWNbMF07IGFbaSsxXSA9IHZlY1sxXTsgYVtpKzJdID0gdmVjWzJdOyBhW2krM10gPSB2ZWNbM107XG4gICAgfVxuXG4gICAgcmV0dXJuIGE7XG4gIH07XG59KSgpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2wtbWF0cml4L3NyYy9nbC1tYXRyaXgvdmVjNC5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgdmVjMyB9IGZyb20gJ2dsLW1hdHJpeCdcbmltcG9ydCB7IHR5cGVzLCB2ZWN0b3IsIGF0dHJpYnV0ZSwgY29tbW9uIH0gZnJvbSAnLi91dGlsJ1xuaW1wb3J0ICogYXMgdGV4dHVyZSBmcm9tICcuL3RleHR1cmUnXG5cbnR5cGUgQXR0cmlidXRlTmFtZXMgPSAncm91Z2huZXNzJyB8ICdhbGJlZG8nIHwgJ21ldGFsbGljJ1xudHlwZSBWYWxpZGF0b3JUID0gKGF0dHI6IEF0dHJpYnV0ZSwgZGF0YTogU2V0VCkgPT4gdm9pZFxudHlwZSBTZXRUID0gbnVtYmVyIHwgdHlwZXMudmVjM0NvbnZlcnRpYmxlIHwgdGV4dHVyZS5UZXh0dXJlXG50eXBlIEdldFQgPSBudW1iZXIgfCB2ZWMzIHwgdGV4dHVyZS5UZXh0dXJlXG5cbmNsYXNzIEF0dHJpYnV0ZSBleHRlbmRzIGF0dHJpYnV0ZS5fQXR0cmlidXRlPFNldFQsIEdldFQsIEF0dHJpYnV0ZU5hbWVzPiB7XG5cdF9zZXRWYWx1ZSh2YWx1ZTogU2V0VCk6IEdldFQge1xuXHRcdGlmICh0eXBlb2YodmFsdWUpICE9ICdudW1iZXInICYmICEodmFsdWUgaW5zdGFuY2VvZiB0ZXh0dXJlLlRleHR1cmUpKSB7XG5cdFx0XHR2YWx1ZSA9IHZlY3Rvci5yZXF1aXJlVmVjMyh2YWx1ZSlcblx0XHR9XG5cdFx0cmV0dXJuIHZhbHVlXG5cdH1cbn1cblxuY2xhc3MgTWF0ZXJpYWxBdHRyaWJ1dGVNYXAgZXh0ZW5kcyBhdHRyaWJ1dGUuX0F0dHJpYnV0ZU1hcDxBdHRyaWJ1dGU+IHsgY29uc3RydWN0b3IoKSB7IHN1cGVyKCkgfSB9XG5cbmNsYXNzIE1hdGVyaWFsIGV4dGVuZHMgYXR0cmlidXRlLkF0dHJpYnV0YWJsZTxBdHRyaWJ1dGUsIE1hdGVyaWFsQXR0cmlidXRlTWFwLCBBdHRyaWJ1dGVOYW1lcz4ge1xuXHRwcm90ZWN0ZWQgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuXG5cdGNvbnN0cnVjdG9yKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQpIHtcblx0XHRzdXBlcigpXG5cdFx0dGhpcy5hdHRyaWJ1dGVzID0gbmV3IE1hdGVyaWFsQXR0cmlidXRlTWFwKClcblx0XHR0aGlzLmdsID0gZ2xcblx0fVxuXG5cdGNsb25lKCk6IE1hdGVyaWFsIHtcblx0XHRyZXR1cm4gdGhpcy5fY2xvbmUoTWF0ZXJpYWwsIEF0dHJpYnV0ZSwgdGhpcy5nbClcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgQmFzaWMoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCxcblx0XHRcdF9hbGJlZG86IHR5cGVzLnZlYzNDb252ZXJ0aWJsZSA9IFsxLCAxLCAxXSk6IE1hdGVyaWFsIHtcblx0XHRcblx0XHRsZXQgbWF0ID0gbmV3IE1hdGVyaWFsKGdsKVxuXHRcdG1hdC5hZGRBdHRyaWJ1dGUobmV3IEF0dHJpYnV0ZSgnYWxiZWRvJywgX2FsYmVkbywgYXR0cmlidXRlLnZhbGlkYXRvcnMuVmVjM09yVGV4dHVyZSkpXG5cdFx0cmV0dXJuIG1hdFxuXHR9XG5cblx0cHVibGljIHN0YXRpYyBQaHlzaWNhbChnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LFxuXHRcdFx0XHRfYWxiZWRvOiB0eXBlcy52ZWMzQ29udmVydGlibGUgPSBbMSwgMSwgMV0sIFxuXHRcdFx0XHRfcm91Z2huZXNzOiBudW1iZXIgPSAwLjEsXG5cdFx0XHRcdF9tZXRhbGxpYzogbnVtYmVyID0gMC4xKTogTWF0ZXJpYWwge1xuXG5cdFx0bGV0IG1hdCA9IG5ldyBNYXRlcmlhbChnbClcblx0XHRtYXQuYWRkQXR0cmlidXRlKG5ldyBBdHRyaWJ1dGUoJ2FsYmVkbycsIF9hbGJlZG8sIGF0dHJpYnV0ZS52YWxpZGF0b3JzLlZlYzNPclRleHR1cmUpKVxuXHRcdG1hdC5hZGRBdHRyaWJ1dGUobmV3IEF0dHJpYnV0ZSgncm91Z2huZXNzJywgX3JvdWdobmVzcywgYXR0cmlidXRlLnZhbGlkYXRvcnMuTnVtYmVyKSlcblx0XHRtYXQuYWRkQXR0cmlidXRlKG5ldyBBdHRyaWJ1dGUoJ21ldGFsbGljJywgX21ldGFsbGljLCBhdHRyaWJ1dGUudmFsaWRhdG9ycy5OdW1iZXIpKVxuXHRcdHJldHVybiBtYXRcblx0fVxufVxuXG5leHBvcnQge1xuXHRNYXRlcmlhbCxcblx0QXR0cmlidXRlTmFtZXMsXG5cdEF0dHJpYnV0ZVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2dsL21hdGVyaWFsLnRzIiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi90eXBlLXV0aWwnXG5pbXBvcnQgKiBhcyBnbG0gZnJvbSAnZ2wtbWF0cml4J1xuaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gJy4vdGV4dHVyZSdcblxuZnVuY3Rpb24gY2xvbmVHTE1BcnJheShkYXRhOiB0eXBlcy5nbG1BcnJheSk6IHR5cGVzLmdsbUFycmF5IHtcblx0aWYgKHR5cGVzLmlzTWF0NChkYXRhKSkge1xuXHRcdHJldHVybiBnbG0ubWF0NC5jb3B5KGdsbS5tYXQ0LmNyZWF0ZSgpLCBkYXRhKVxuXHR9IGVsc2UgaWYgKHR5cGVzLmlzVmVjMyhkYXRhKSkge1xuXHRcdHJldHVybiBnbG0udmVjMy5jb3B5KGdsbS52ZWMzLmNyZWF0ZSgpLCBkYXRhKVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShkYXRhOiB0eXBlcy5jbG9uZWFibGUpIDogdHlwZXMuY2xvbmVhYmxlIHtcblx0aWYgKHR5cGVzLmlzUHJpbWl0aXZlKGRhdGEpKSB7XG5cdFx0cmV0dXJuIGRhdGFcblx0fSBlbHNlIGlmICh0eXBlcy5pc0dMTUFycmF5VHlwZShkYXRhKSkge1xuXHRcdHJldHVybiBjbG9uZUdMTUFycmF5KGRhdGEpXG5cdH0gZWxzZSBpZiAodHlwZXMuaXNBcnJheShkYXRhKSkge1xuXHRcdHJldHVybiBkYXRhLnNsaWNlKClcblx0fSBlbHNlIGlmICh0eXBlcy5pc1RleHR1cmUoZGF0YSkpIHtcblx0XHRyZXR1cm4gZGF0YS5jbG9uZSgpXG5cdH1cblx0dGhyb3cgbmV3IEVycm9yKGBVbnJlY29nbml6ZWQgdHlwZS5gKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5kMnN1YihpZHg6IG51bWJlciwgZGltczogQXJyYXk8bnVtYmVyPik6IEFycmF5PG51bWJlcj4ge1xuXG5cdC8vIGh0dHA6Ly9rcml0aXNlbi5jb20vMjAxMS8wOC8xNy9zdWJzY3JpcHRzLWZyb20tbGluZWFyLWluZGV4LWFuZC12aWNlLXZlcnNhLWMvXG5cblx0bGV0IG46IG51bWJlciA9IGRpbXMubGVuZ3RoXG5cdGxldCBwcm9kOiBBcnJheTxudW1iZXI+ID0gW11cblx0bGV0IHJlc3VsdCA9IG5ldyBBcnJheTxudW1iZXI+KG4pXG5cdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBuOyBpKyspIHtcblx0XHRwcm9kW2ldID0gMVxuXHRcdGZvciAobGV0IGo6IG51bWJlciA9IG4tMTsgaiA+IGk7IGotLSkgcHJvZFtpXSAqPSBkaW1zW2pdXG5cdH1cblx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG47IGkrKykge1xuXHRcdHJlc3VsdFtpXSA9IGlkeFxuXHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCBpOyBqKyspXG5cdFx0XHRyZXN1bHRbaV0gPSByZXN1bHRbaV0gJSBwcm9kW2pdXG5cdFx0cmVzdWx0W2ldID0gTWF0aC5mbG9vcihyZXN1bHRbaV0gLyBwcm9kW2ldKVxuXHR9XG5cdHJldHVybiByZXN1bHRcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC9jb21tb24tdXRpbC50cyIsImV4cG9ydCBjbGFzcyBSYXRpbyB7XG5cdHJlYWRvbmx5IGZpcnN0OiBudW1iZXJcblx0cmVhZG9ubHkgc2Vjb25kOiBudW1iZXJcblx0cmVhZG9ubHkgYWxpYXM6IHN0cmluZ1xuXG5cdGNvbnN0cnVjdG9yKGZpcnN0OiBudW1iZXIsIHNlY29uZDogbnVtYmVyLCBhbGlhczogc3RyaW5nKSB7XG5cdFx0dGhpcy5maXJzdCA9IGZpcnN0XG5cdFx0dGhpcy5zZWNvbmQgPSBzZWNvbmRcblx0XHR0aGlzLmFsaWFzID0gYWxpYXNcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgc2NhbGUoYTogUmF0aW8sIGI6IG51bWJlcikge1xuXHRcdHJldHVybiAoYiAvIGEuc2Vjb25kKSAqIGEuZmlyc3Rcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgRHVyYXRpb24ge1xuXHRyYXRpbzogUmF0aW9cblx0YW1vdW50OiBudW1iZXJcblxuXHRjb25zdHJ1Y3RvcihyYXRpbzogUmF0aW8sIGFtb3VudDogbnVtYmVyKSB7XG5cdFx0dGhpcy5yYXRpbyA9IHJhdGlvXG5cdFx0dGhpcy5hbW91bnQgPSBhbW91bnRcblx0fVxuXG5cdHB1YmxpYyB2YWx1ZSgpOiBudW1iZXIge1xuXHRcdHJldHVybiBSYXRpby5zY2FsZSh0aGlzLnJhdGlvLCB0aGlzLmFtb3VudClcblx0XHQvLyByZXR1cm4gKGFtdCAvIHNlYykgKiBmaXJzdFxuXHR9XG5cblx0cHVibGljIHN0YXRpYyBsdChhOiBEdXJhdGlvbiwgYjogRHVyYXRpb24pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gYS52YWx1ZSgpIDwgYi52YWx1ZSgpXG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIGxlKGE6IER1cmF0aW9uLCBiOiBEdXJhdGlvbik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBhLnZhbHVlKCkgPD0gYi52YWx1ZSgpXG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIGVxKGE6IER1cmF0aW9uLCBiOiBEdXJhdGlvbik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBhLnZhbHVlKCkgPT0gYi52YWx1ZSgpXG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIGd0KGE6IER1cmF0aW9uLCBiOiBEdXJhdGlvbik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBhLnZhbHVlKCkgPiBiLnZhbHVlKClcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgZ2UoYTogRHVyYXRpb24sIGI6IER1cmF0aW9uKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGEudmFsdWUoKSA+PSBiLnZhbHVlKClcblx0fVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIHJhdGlvcyB7XG5cdGV4cG9ydCBmdW5jdGlvbiBtcygpOiBSYXRpbyB7XG5cdFx0cmV0dXJuIG5ldyBSYXRpbygxLCAxLCAnbXMnKVxuXHR9XG5cdFxuXHRleHBvcnQgZnVuY3Rpb24gcygpOiBSYXRpbyB7XG5cdFx0cmV0dXJuIG5ldyBSYXRpbygxLCAxLzEwMDAsICdzJylcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgRGVsdGFUaW1lciB7XG5cdHByaXZhdGUgbGFzdDogbnVtYmVyID0gMFxuXHRwcml2YXRlIF9kZWx0YTogbnVtYmVyID0gMFxuXHRwcml2YXRlIGZpcnN0OiBib29sZWFuID0gdHJ1ZVxuXHRwcml2YXRlIHJhdGlvOiBSYXRpb1xuXG5cdGNvbnN0cnVjdG9yKCkgeyB0aGlzLnJhdGlvID0gcmF0aW9zLnMoKSB9XG5cblx0cHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcblx0XHRsZXQgbm93ID0gRGF0ZS5ub3coKVxuXHRcdGlmICh0aGlzLmZpcnN0KSB7XG5cdFx0XHR0aGlzLmxhc3QgPSBub3dcblx0XHRcdHRoaXMuZmlyc3QgPSBmYWxzZVxuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXHRcdHRoaXMuX2RlbHRhID0gbm93IC0gdGhpcy5sYXN0XG5cdFx0dGhpcy5sYXN0ID0gbm93XG5cdH1cblxuXHRwdWJsaWMgZmlyc3RVcGRhdGUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZmlyc3Rcblx0fVxuXG5cdHB1YmxpYyBzZXRSYXRpbyhyYXRpbzogUmF0aW8pOiB2b2lkIHtcblx0XHR0aGlzLnJhdGlvID0gcmF0aW9cblx0fVxuXG5cdHB1YmxpYyBnZXRSYXRpbygpOiBSYXRpbyB7XG5cdFx0cmV0dXJuIHRoaXMucmF0aW9cblx0fVxuXG5cdHB1YmxpYyBkZWx0YSgpOiBudW1iZXIgeyBcblx0XHRyZXR1cm4gKHRoaXMuX2RlbHRhIC8gdGhpcy5yYXRpby5maXJzdCkgKiB0aGlzLnJhdGlvLnNlY29uZFxuXHR9XG5cblx0cHVibGljIGRlbHRhRHVyYXRpb24oYTogRHVyYXRpb24gfCBudWxsKTogRHVyYXRpb24ge1xuXHRcdGlmIChhID09PSBudWxsKSB7XG5cdFx0XHRhID0gbmV3IER1cmF0aW9uKHRoaXMucmF0aW8sIHRoaXMuX2RlbHRhKVxuXHRcdFx0cmV0dXJuIGFcblx0XHR9XG5cdFx0YS5yYXRpbyA9IHRoaXMucmF0aW9cblx0XHRhLmFtb3VudCA9IHRoaXMuX2RlbHRhXG5cdFx0cmV0dXJuIGFcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2dsL3RpbWUtdXRpbC50cyIsImV4cG9ydCBmdW5jdGlvbiBhc3NlcnROVmFsdWVzPFQ+KGFycjogQXJyYXk8VD4sIE46IG51bWJlciwgY29udGVudHM6IHN0cmluZyA9ICcodW5zcGVjaWZpZWQpJyk6IHZvaWQge1xuXHRpZiAoYXJyLmxlbmd0aCAhPT0gTikge1xuXHRcdHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgdGhlIGFycmF5IG9mICR7Y29udGVudHN9IHRvIGNvbnRhaW4gJHtOfSB2YWx1ZXM7ICR7YXJyLmxlbmd0aH0gd2VyZSBwcmVzZW50LmApXG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC9hc3NlcnQtdXRpbC50cyIsImltcG9ydCB7IHZlYzMgfSBmcm9tICdnbC1tYXRyaXgnXG5pbXBvcnQgeyB2ZWN0b3IsIHR5cGVzLCBhdHRyaWJ1dGUgfSBmcm9tICcuL3V0aWwnXG5pbXBvcnQgeyBSZXNvdXJjZSB9IGZyb20gJy4vcmVzb3VyY2UnXG5cbnR5cGUgQXR0cmlidXRlTmFtZXMgPSAnY29sb3InIHwgJ3Bvc2l0aW9uJyB8ICdtYXNrJyB8ICdkaXJlY3Rpb24nXG50eXBlIExpZ2h0TmFtZXMgPSAncG9pbnQnIHwgJ2RpcmVjdGlvbmFsJ1xudHlwZSBMaWdodFVuaWZvcm1OYW1lcyA9IEF0dHJpYnV0ZU5hbWVzIHwgTGlnaHROYW1lc1xuXG50eXBlIFZhbGlkYXRvclQgPSAoYXR0cjogQXR0cmlidXRlLCBkYXRhOiBTZXRUKSA9PiB2b2lkXG50eXBlIFNldFQgPSB0eXBlcy52ZWMzQ29udmVydGlibGUgfCBudW1iZXIgfCBib29sZWFuXG50eXBlIEdldFQgPSB2ZWMzIHwgbnVtYmVyIHwgYm9vbGVhblxuXG5jbGFzcyBBdHRyaWJ1dGUgZXh0ZW5kcyBhdHRyaWJ1dGUuX0F0dHJpYnV0ZTxTZXRULCBHZXRULCBBdHRyaWJ1dGVOYW1lcz4ge1xuXHRfc2V0VmFsdWUodmFsdWU6IFNldFQpOiBHZXRUIHtcblx0XHRpZiAodHlwZW9mKHZhbHVlKSAhPT0gJ251bWJlcicgJiYgdHlwZW9mKHZhbHVlKSAhPT0gJ2Jvb2xlYW4nKVxuXHRcdFx0dmFsdWUgPSB2ZWN0b3IucmVxdWlyZVZlYzModmFsdWUpXG5cdFx0cmV0dXJuIHZhbHVlXG5cdH1cbn1cblxuY2xhc3MgTGlnaHRBdHRyaWJ1dGVNYXAgZXh0ZW5kcyBhdHRyaWJ1dGUuX0F0dHJpYnV0ZU1hcDxBdHRyaWJ1dGU+IHsgY29uc3RydWN0b3IoKSB7IHN1cGVyKCkgfSB9XG5cbmNsYXNzIExpZ2h0IGV4dGVuZHMgYXR0cmlidXRlLkF0dHJpYnV0YWJsZTxBdHRyaWJ1dGUsIExpZ2h0QXR0cmlidXRlTWFwLCBBdHRyaWJ1dGVOYW1lcz4ge1xuXHRnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0XG5cdHByaXZhdGUgbmFtZTogTGlnaHROYW1lc1xuXHRwdWJsaWMgYWN0aXZlOiBib29sZWFuID0gdHJ1ZVxuXHRwcml2YXRlIGluZGV4OiBudW1iZXJcblxuXHRjb25zdHJ1Y3RvcihnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCBcblx0XHRcdF9pbmRleDogbnVtYmVyID0gMCwgIFxuXHRcdFx0X2NvbG9yOiB0eXBlcy52ZWMzQ29udmVydGlibGUgPSBbMSwgMSwgMV0sXG5cdFx0XHRfbWFzazogdHlwZXMudmVjM0NvbnZlcnRpYmxlID0gWzEsIDEsIDFdKSB7XG5cdFx0c3VwZXIoKVxuXHRcdHRoaXMuZ2wgPSBnbFxuXHRcdHRoaXMuaW5kZXggPSBfaW5kZXhcblx0XHR0aGlzLmF0dHJpYnV0ZXMgPSBuZXcgTGlnaHRBdHRyaWJ1dGVNYXAoKVxuXHRcdHRoaXMuYWRkQXR0cmlidXRlKG5ldyBBdHRyaWJ1dGUoJ2NvbG9yJywgX2NvbG9yLCBhdHRyaWJ1dGUudmFsaWRhdG9ycy5WZWMzKSlcblx0XHR0aGlzLmFkZEF0dHJpYnV0ZShuZXcgQXR0cmlidXRlKCdtYXNrJywgX21hc2ssIGF0dHJpYnV0ZS52YWxpZGF0b3JzLlZlYzMpKVxuXHR9XG5cdHB1YmxpYyBzZXRNYXNrKHZhbDogdHlwZXMudmVjM0NvbnZlcnRpYmxlKTogdm9pZCB7XG5cdFx0dGhpcy5nZXRBdHRyaWJ1dGUoJ21hc2snKS5zZXRWYWx1ZSh2YWwpXG5cdH1cblx0cHVibGljIHNldENvbG9yKHZhbDogdHlwZXMudmVjM0NvbnZlcnRpYmxlKTogdm9pZCB7XG5cdFx0dGhpcy5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykuc2V0VmFsdWUodmFsKVxuXHR9XG5cdHB1YmxpYyBzZXRJbmRleCh2YWw6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuaW5kZXggPSB2YWxcblx0fVxuXHRwdWJsaWMgZ2V0SW5kZXgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5pbmRleFxuXHR9XG5cdHB1YmxpYyBnZXRDb2xvcigpOiB2ZWMzIHtcblx0XHRyZXR1cm4gPHZlYzM+dGhpcy5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykucGVla1ZhbHVlKClcblx0fVxuXHRwdWJsaWMgZ2V0TmFtZSgpOiBMaWdodE5hbWVzIHtcblx0XHRyZXR1cm4gdGhpcy5uYW1lXG5cdH1cblx0cHVibGljIGdldE1hc2soKTogdmVjMyB7XG5cdFx0cmV0dXJuIDx2ZWMzPnRoaXMuZ2V0QXR0cmlidXRlKCdtYXNrJykucGVla1ZhbHVlKClcblx0fVxuXG5cdGNsb25lKCk6IExpZ2h0IHtcblx0XHRyZXR1cm4gdGhpcy5fY2xvbmUoTGlnaHQsIEF0dHJpYnV0ZSwgdGhpcy5nbClcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgUG9pbnQoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCwgXG5cdFx0XHRcdF9wb3NpdGlvbjogdHlwZXMudmVjM0NvbnZlcnRpYmxlID0gWzEsIDEsIDFdLCBcblx0XHRcdFx0X2NvbG9yOiB0eXBlcy52ZWMzQ29udmVydGlibGUgPSBbMSwgMSwgMV0sXG5cdFx0XHRcdF9pbmRleDogbnVtYmVyID0gMCkge1xuXHRcdGxldCBsaWdodCA9IG5ldyBMaWdodChnbCwgX2luZGV4LCBfY29sb3IpXG5cdFx0bGlnaHQuYWRkQXR0cmlidXRlKG5ldyBBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgX3Bvc2l0aW9uKSlcblx0XHRsaWdodC5uYW1lID0gJ3BvaW50J1xuXHRcdHJldHVybiBsaWdodFxuXHR9XG5cblx0cHVibGljIHN0YXRpYyBEaXJlY3Rpb25hbChnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LFxuXHRcdFx0X2RpcmVjdGlvbjogdHlwZXMudmVjM0NvbnZlcnRpYmxlID0gWzEsIDEsIDFdLFxuXHRcdFx0X2NvbG9yOiB0eXBlcy52ZWMzQ29udmVydGlibGUgPSBbMSwgMSwgMV0sXG5cdFx0XHRfaW5kZXg6IG51bWJlciA9IDApIHtcblx0XHRsZXQgbGlnaHQgPSBuZXcgTGlnaHQoZ2wsIF9pbmRleCwgX2NvbG9yKVxuXHRcdGxpZ2h0LmFkZEF0dHJpYnV0ZShuZXcgQXR0cmlidXRlKCdkaXJlY3Rpb24nLCBfZGlyZWN0aW9uKSlcblx0XHRsaWdodC5uYW1lID0gJ2RpcmVjdGlvbmFsJ1xuXHRcdHJldHVybiBsaWdodFxuXHR9XG59XG5cbmV4cG9ydCB7IExpZ2h0LCBMaWdodE5hbWVzLCBBdHRyaWJ1dGUsIEF0dHJpYnV0ZU5hbWVzLCBMaWdodFVuaWZvcm1OYW1lcyB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2wvbGlnaHQudHMiLCJpbXBvcnQgeyB0eXBlcyB9IGZyb20gJy4vdXRpbCdcbmltcG9ydCAqIGFzIF9MaWdodCBmcm9tICcuL2xpZ2h0J1xuaW1wb3J0ICogYXMgX01hdGVyaWFsIGZyb20gJy4vbWF0ZXJpYWwnXG5pbXBvcnQgKiBhcyBfU2hhZGVyIGZyb20gJy4vc2hhZGVyJ1xuXG5leHBvcnQgdHlwZSBVbmlmb3JtTmFtZXMgPSBfTWF0ZXJpYWwuQXR0cmlidXRlTmFtZXMgfCBfTGlnaHQuTGlnaHRVbmlmb3JtTmFtZXMgfCBfU2hhZGVyLlNoYWRlckNvcmVVbmlmb3JtS2luZHNcblxuZXhwb3J0IGNsYXNzIFVuaWZvcm1NYXA8VD4ge1xuXHRwdWJsaWMgaXRlbXM6IHsgW2tleTogc3RyaW5nXTogVCB9XG5cdGNvbnN0cnVjdG9yKG5hbWVzOiBVbmlmb3JtTmFtZXNbXSwgdmFsdWU6IFQpIHtcblx0XHR0aGlzLml0ZW1zID0ge31cblx0XHRjb25zdCBpdGVtcyA9IHRoaXMuaXRlbXNcblx0XHRuYW1lcy5tYXAobmFtZSA9PiBpdGVtc1tuYW1lXSA9IHZhbHVlKVxuXHR9XG5cdHB1YmxpYyBoYXNVbmlmb3JtKG5hbWU6IFVuaWZvcm1OYW1lcykge1xuXHRcdHJldHVybiB0aGlzLml0ZW1zW25hbWVdICE9PSB1bmRlZmluZWRcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTWFwIHtcblx0c3RhdGljIGl0ZW1zOiB7IFtLIGluIFVuaWZvcm1OYW1lc106IHN0cmluZyB9ID0ge1xuXHRcdC8vIG1hdGVyaWFsXG5cdFx0J2FsYmVkbyc6ICdhbGJlZG8nLFxuXHRcdCdyb3VnaG5lc3MnOiAncm91Z2huZXNzJyxcblx0XHQnbWV0YWxsaWMnOiAnbWV0YWxsaWMnLFxuXG5cdFx0Ly9cdGxpZ2h0XG5cdFx0J3Bvc2l0aW9uJzogJ3Bvc2l0aW9uJyxcblx0XHQnZGlyZWN0aW9uJzogJ2RpcmVjdGlvbicsXG5cdFx0J2NvbG9yJzogJ2NvbG9yJyxcblx0XHQnbWFzayc6ICdtYXNrJyxcblx0XHQncG9pbnQnOiAncG9pbnRfbGlnaHRzJyxcblx0XHQnZGlyZWN0aW9uYWwnOiAnZGlyZWN0aW9uYWxfbGlnaHRzJyxcblxuXHRcdC8vXHRjb3JlXG5cdFx0J21vZGVsJzogJ21vZGVsJyxcblx0XHQndmlldyc6ICd2aWV3Jyxcblx0XHQncHJvamVjdGlvbic6ICdwcm9qZWN0aW9uJyxcblx0XHQnY2FtZXJhX3Bvc2l0aW9uJzogJ2NhbV9wb3NpdGlvbidcblx0fVxuXG5cdHN0YXRpYyBnZXRVbmlmb3JtKG5hbWU6IFVuaWZvcm1OYW1lcyk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIE1hcC5pdGVtc1tuYW1lXVxuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2wvdW5pZm9ybXMudHMiLCJpbXBvcnQgeyB0aW1lIH0gZnJvbSAnLi91dGlsJ1xuaW1wb3J0IHsgdmVjMiB9IGZyb20gJ2dsLW1hdHJpeCdcbmltcG9ydCAqIGFzIG1hdGggZnJvbSAnLi93Z2wtbWF0aCdcbmltcG9ydCAqIGFzIGNhcGFiaWxpdGllcyBmcm9tICcuL2NhcGFiaWxpdGllcydcblxuZXhwb3J0IHR5cGUgVG91Y2hDQlQgPSAoZXZ0OiBUb3VjaEV2ZW50KSA9PiB2b2lkXG5leHBvcnQgdHlwZSBNb3VzZUNCVCA9IChldnQ6IE1vdXNlRXZlbnQpID0+IHZvaWRcbmV4cG9ydCB0eXBlIExpc3RlbmVyVDxLPiA9IChldnQ6IEspID0+IHZvaWRcbmV4cG9ydCB0eXBlIFhZRXZlbnQgPSBUb3VjaEV2ZW50IHwgTW91c2VFdmVudFxuXG50eXBlIGxpc3RlbmVycyA9ICdzdGFydCcgfCAnbW92ZScgfCAnZW5kJ1xudHlwZSBsaXN0ZW5lck1hcCA9IHsgW0sgaW4gbGlzdGVuZXJzXTogc3RyaW5nIH1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIHh5PEsgZXh0ZW5kcyBYWUV2ZW50PiB7XG5cdGVsOiBIVE1MRWxlbWVudCB8IFdpbmRvd1xuXG5cdGNvbnN0cnVjdG9yKGVsPzogSFRNTEVsZW1lbnQgfCBXaW5kb3cpIHtcblx0XHR0aGlzLmVsID0gKGVsID09PSBudWxsIHx8IGVsID09PSB1bmRlZmluZWQpID8gZG9jdW1lbnQuYm9keSA6IGVsXG5cdH1cblxuXHRzdGFydChjYjogTGlzdGVuZXJUPEs+KTogdm9pZCB7XG5cdFx0dGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKHRoaXMuZ2V0TGlzdGVuZXJOYW1lcygpWydzdGFydCddLCBjYilcblx0fVxuXG5cdGVuZChjYjogTGlzdGVuZXJUPEs+KTogdm9pZCB7XG5cdFx0dGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKHRoaXMuZ2V0TGlzdGVuZXJOYW1lcygpWydlbmQnXSwgY2IpXG5cdH1cblxuXHRtb3ZlKGNiOiBMaXN0ZW5lclQ8Sz4pOiB2b2lkIHtcblx0XHR0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5nZXRMaXN0ZW5lck5hbWVzKClbJ21vdmUnXSwgY2IpXG5cdH1cblxuXHRwdWJsaWMgYWJzdHJhY3QgZ2V0TGlzdGVuZXJOYW1lcygpOiBsaXN0ZW5lck1hcFxuXHRwdWJsaWMgYWJzdHJhY3Qgc2hvdWxkSW52ZXJ0KCk6IGJvb2xlYW5cblx0cHVibGljIGFic3RyYWN0IGdldFByaW1hcnlDb29yZGluYXRlcyhldnQ6IEspOiB2ZWMyXG59XG5cbmV4cG9ydCBjbGFzcyBUb3VjaCBleHRlbmRzIHh5PFRvdWNoRXZlbnQ+IHtcblxuXHRlbDogSFRNTEVsZW1lbnQgfCBXaW5kb3dcblxuXHRnZXRMaXN0ZW5lck5hbWVzKCk6IGxpc3RlbmVyTWFwIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0J3N0YXJ0JzogJ3RvdWNoc3RhcnQnLFxuXHRcdFx0J2VuZCc6ICd0b3VjaGVuZCcsXG5cdFx0XHQnbW92ZSc6ICd0b3VjaG1vdmUnXG5cdFx0fVxuXHR9XG5cblx0c2hvdWxkSW52ZXJ0KCk6IGJvb2xlYW4geyByZXR1cm4gdHJ1ZSB9XG5cblx0Z2V0UHJpbWFyeUNvb3JkaW5hdGVzKGV2dDogVG91Y2hFdmVudCwgb3V0PzogdmVjMik6IHZlYzIge1xuXHRcdGlmICghb3V0KVxuXHRcdFx0b3V0ID0gdmVjMi5jcmVhdGUoKVxuXHRcdGlmIChldnQudG91Y2hlcy5sZW5ndGggPT09IDApIHtcblx0XHRcdG91dFswXSA9IDBcblx0XHRcdG91dFsxXSA9IDBcblx0XHR9IGVsc2Uge1xuXHRcdFx0b3V0WzBdID0gZXZ0LnRvdWNoZXNbMF0uY2xpZW50WFxuXHRcdFx0b3V0WzFdID0gZXZ0LnRvdWNoZXNbMF0uY2xpZW50WVxuXHRcdH1cblx0XHRyZXR1cm4gb3V0XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE1vdXNlIGV4dGVuZHMgeHk8TW91c2VFdmVudD4ge1xuXG5cdGVsOiBIVE1MRWxlbWVudCB8IFdpbmRvd1xuXG5cdGdldExpc3RlbmVyTmFtZXMoKTogbGlzdGVuZXJNYXAge1xuXHRcdHJldHVybiB7XG5cdFx0XHQnc3RhcnQnOiAnbW91c2VlbnRlcicsXG5cdFx0XHQnZW5kJzogJ21vdXNlbGVhdmUnLFxuXHRcdFx0J21vdmUnOiAnbW91c2Vtb3ZlJ1xuXHRcdH1cblx0fVxuXG5cdHNob3VsZEludmVydCgpOiBib29sZWFuIHsgcmV0dXJuIGZhbHNlIH1cblxuXHRnZXRQcmltYXJ5Q29vcmRpbmF0ZXMoZXZ0OiBNb3VzZUV2ZW50LCBvdXQ/OiB2ZWMyKTogdmVjMiB7XG5cdFx0aWYgKCFvdXQpXG5cdFx0XHRvdXQgPSB2ZWMyLmNyZWF0ZSgpXG5cdFx0b3V0WzBdID0gZXZ0LmNsaWVudFhcblx0XHRvdXRbMV0gPSBldnQuY2xpZW50WVxuXHRcdHJldHVybiBvdXRcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgUG9pbnRlckxvY2sgZXh0ZW5kcyBNb3VzZSB7XG5cblx0ZWw6IEhUTUxDYW52YXNFbGVtZW50XG5cdGNvb3JkaW5hdGVzOiB2ZWMyXG5cdGlzTG9ja2VkOiBib29sZWFuXG5cblx0Y29uc3RydWN0b3IoZWw6IEhUTUxDYW52YXNFbGVtZW50KSB7XG5cdFx0c3VwZXIoZWwpXG5cdFx0dGhpcy5jb29yZGluYXRlcyA9IHZlYzIuZnJvbVZhbHVlcygwLCAwKVxuXHRcdHRoaXMuaXNMb2NrZWQgPSBmYWxzZVxuXHRcdHRoaXMuc2V0dXAoKVxuXHR9XG5cblx0cHJpdmF0ZSBzZXR1cCgpOiB2b2lkIHtcblx0XHRpZiAoIWNhcGFiaWxpdGllcy5oYXNQb2ludGVyTG9jaygpKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oJ1BvaW50ZXIgbG9ja2luZyBpcyBub3Qgc3VwcG9ydGVkIGluIHlvdXIgYnJvd3NlcjsnICtcblx0XHRcdFx0JyByZWd1bGFyIG1vdXNlIGlucHV0IHdpbGwgYmUgdXNlZCBpbnN0ZWFkLicpXG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cdFx0bGV0IHNlbGYgPSB0aGlzXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmxvY2tjaGFuZ2UnLCAoZXZ0OiBNb3VzZUV2ZW50KSA9PiB7XG5cdFx0XHRzZWxmLmlzTG9ja2VkID0gIXNlbGYuaXNMb2NrZWRcblx0XHR9LCBmYWxzZSlcblx0XHRzZWxmLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dDogTW91c2VFdmVudCkgPT4ge1xuXHRcdFx0ZXZ0LnByZXZlbnREZWZhdWx0KClcblx0XHRcdGlmICghc2VsZi5pc0xvY2tlZCkge1xuXHRcdFx0XHRzZWxmLmVsLnJlcXVlc3RQb2ludGVyTG9jaygpXG5cdFx0XHR9XG5cdFx0fSlcblx0fVxuXG5cdGdldFByaW1hcnlDb29yZGluYXRlcyhldnQ6IE1vdXNlRXZlbnQsIG91dD86IHZlYzIpOiB2ZWMyIHtcblx0XHRpZiAoIW91dClcblx0XHRcdG91dCA9IHZlYzIuY3JlYXRlKClcblx0XHRpZiAodGhpcy5pc0xvY2tlZCkge1xuXHRcdFx0dGhpcy5jb29yZGluYXRlc1swXSArPSBldnQubW92ZW1lbnRYXG5cdFx0XHR0aGlzLmNvb3JkaW5hdGVzWzFdICs9IGV2dC5tb3ZlbWVudFlcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jb29yZGluYXRlc1swXSA9IGV2dC5jbGllbnRYXG5cdFx0XHR0aGlzLmNvb3JkaW5hdGVzWzFdID0gZXZ0LmNsaWVudFlcblx0XHR9XG5cdFx0b3V0LnNldCh0aGlzLmNvb3JkaW5hdGVzKVxuXHRcdHJldHVybiBvdXRcblx0fVxufVxuXG5leHBvcnQgdHlwZSBEb3VibGVUYXBEZXRlY3Rvck9wdHMgPSB7XG5cdHRpbWVUaHJlc2hvbGQ6IHRpbWUuRHVyYXRpb24sXG5cdHBvc2l0aW9uVGhyZXNob2xkOiBudW1iZXJcbn1cblxuZXhwb3J0IGNsYXNzIERvdWJsZVRhcERldGVjdG9yIHtcblx0cHJpdmF0ZSB0aW1lcjogdGltZS5EZWx0YVRpbWVyXG5cdHByaXZhdGUgdG91Y2g6IFRvdWNoXG5cdHByaXZhdGUgYmVnYW46IGJvb2xlYW5cblx0cHJpdmF0ZSBkb3VibGV0YXBGdW5jOiBUb3VjaENCVFxuXHRwcml2YXRlIGRlbHRhRHVyOiB0aW1lLkR1cmF0aW9uXG5cdHByaXZhdGUgdGltZVRocmVzaG9sZDogdGltZS5EdXJhdGlvblxuXHRwcml2YXRlIHBvc2l0aW9uVGhyZXNob2xkOiBudW1iZXJcblx0cHJpdmF0ZSBjb29yZGluYXRlczogdmVjMlxuXHRwcml2YXRlIGN1cnJlbnRDb29yZGluYXRlczogdmVjMlxuXG5cdGNvbnN0cnVjdG9yKHRvdWNoOiBUb3VjaCwgb3B0cz86IERvdWJsZVRhcERldGVjdG9yT3B0cykge1xuXHRcdHRoaXMudG91Y2ggPSB0b3VjaFxuXHRcdHRoaXMudGltZXIgPSBuZXcgdGltZS5EZWx0YVRpbWVyKClcblx0XHR0aGlzLnRpbWVyLnNldFJhdGlvKHRpbWUucmF0aW9zLm1zKCkpXG5cdFx0dGhpcy5iZWdhbiA9IGZhbHNlXG5cdFx0dGhpcy5kb3VibGV0YXBGdW5jID0gKGV2dCkgPT4ge31cblx0XHR0aGlzLmRlbHRhRHVyID0gbmV3IHRpbWUuRHVyYXRpb24odGltZS5yYXRpb3MubXMoKSwgMClcblx0XHRpZiAoIW9wdHMpXG5cdFx0XHRvcHRzID0gRG91YmxlVGFwRGV0ZWN0b3IuRGVmYXVsdHMoKVxuXHRcdHRoaXMudGltZVRocmVzaG9sZCA9IG9wdHMudGltZVRocmVzaG9sZFxuXHRcdHRoaXMucG9zaXRpb25UaHJlc2hvbGQgPSBvcHRzLnBvc2l0aW9uVGhyZXNob2xkXG5cdFx0dGhpcy5jb29yZGluYXRlcyA9IHZlYzIuY3JlYXRlKClcblx0XHR0aGlzLmN1cnJlbnRDb29yZGluYXRlcyA9IHZlYzIuY3JlYXRlKClcblx0XHR0aGlzLnNldHVwKClcblx0fVxuXG5cdHB1YmxpYyBkb3VibGV0YXAoZnVuYzogVG91Y2hDQlQpOiB2b2lkIHtcblx0XHR0aGlzLmRvdWJsZXRhcEZ1bmMgPSBmdW5jXG5cdH1cblxuXHRwcml2YXRlIHNldHVwKCk6IHZvaWQge1xuXHRcdGNvbnN0IHRvdWNoID0gdGhpcy50b3VjaFxuXHRcdGNvbnN0IHNlbGYgPSB0aGlzXG5cblx0XHR0b3VjaC5zdGFydChldnQgPT4ge1xuXHRcdFx0aWYgKGV2dC50b3VjaGVzLmxlbmd0aCAhPT0gMSlcblx0XHRcdFx0cmV0dXJuXG5cdFx0XHRzZWxmLnRpbWVyLnVwZGF0ZSgpXG5cdFx0XHRzZWxmLmN1cnJlbnRDb29yZGluYXRlc1swXSA9IGV2dC50b3VjaGVzWzBdLmNsaWVudFhcblx0XHRcdHNlbGYuY3VycmVudENvb3JkaW5hdGVzWzFdID0gZXZ0LnRvdWNoZXNbMF0uY2xpZW50WVxuXHRcdFx0aWYgKHNlbGYuYmVnYW4pIHtcblx0XHRcdFx0bGV0IGRlbHRhID0gc2VsZi50aW1lci5kZWx0YUR1cmF0aW9uKHNlbGYuZGVsdGFEdXIpXG5cdFx0XHRcdGxldCBpblRpbWUgPSB0aW1lLkR1cmF0aW9uLmxlKGRlbHRhLCBzZWxmLnRpbWVUaHJlc2hvbGQpXG5cdFx0XHRcdGxldCBkaXN0ID0gbWF0aC5kaXN0YW5jZShzZWxmLmN1cnJlbnRDb29yZGluYXRlcywgc2VsZi5jb29yZGluYXRlcylcblx0XHRcdFx0aWYgKGluVGltZSAmJiBkaXN0IDwgc2VsZi5wb3NpdGlvblRocmVzaG9sZCkge1xuXHRcdFx0XHRcdHNlbGYuZG91YmxldGFwRnVuYyhldnQpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHNlbGYuYmVnYW4gPSB0cnVlXG5cdFx0XHRzZWxmLmNvb3JkaW5hdGVzID0gdmVjMi5jb3B5KHNlbGYuY29vcmRpbmF0ZXMsIHNlbGYuY3VycmVudENvb3JkaW5hdGVzKVxuXHRcdH0pXG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIERlZmF1bHRzKCk6IERvdWJsZVRhcERldGVjdG9yT3B0cyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRpbWVUaHJlc2hvbGQ6IG5ldyB0aW1lLkR1cmF0aW9uKHRpbWUucmF0aW9zLm1zKCksIDM1MCksXG5cdFx0XHRwb3NpdGlvblRocmVzaG9sZDogNDBcblx0XHR9XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2dsL2lucHV0LXh5LnRzIiwiZXhwb3J0IGZ1bmN0aW9uIGhhc1BvaW50ZXJMb2NrKCk6IGJvb2xlYW4ge1xuXHRyZXR1cm4gJ29ucG9pbnRlcmxvY2tjaGFuZ2UnIGluIGRvY3VtZW50XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2wvY2FwYWJpbGl0aWVzLnRzIiwidHlwZSBLZXlib2FyZEV2ZW50Q0JUID0gKGV2dDogS2V5Ym9hcmRFdmVudCkgPT4gdm9pZFxuXG5leHBvcnQgZW51bSBLZXlzIHtcblx0VyA9IDg3LFxuXHRBID0gNjUsXG5cdFMgPSA4Myxcblx0RCA9IDY4LFxuXHRMZWZ0ID0gMzcsXG5cdFJpZ2h0ID0gMzksXG5cdFVwID0gMzgsXG5cdERvd24gPSA0MCxcblx0c3BhY2UgPSAzMlxufVxuXG5leHBvcnQgY2xhc3MgS2V5Ym9hcmQge1xuXHRcblx0cHJpdmF0ZSBzdGF0ZTogeyBba2V5Om51bWJlcl06IGJvb2xlYW4gfSA9IHt9XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0bGV0IHN0YXRlID0gdGhpcy5zdGF0ZVxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2dDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuXHRcdFx0c3RhdGVbZXZ0LmtleUNvZGVdID0gdHJ1ZVxuXHRcdH0pXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2dDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuXHRcdFx0c3RhdGVbZXZ0LmtleUNvZGVdID0gZmFsc2Vcblx0XHR9KVxuXHR9XG5cblx0cHVibGljIGlzRG93bihrZXk6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdGxldCByZXMgPSB0aGlzLnN0YXRlW2tleV1cblx0XHRyZXR1cm4gcmVzID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IHJlc1xuXHR9XG5cblx0cHVibGljIGRvd24oZnVuYzogS2V5Ym9hcmRFdmVudENCVCwga2V5PzogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5saXN0ZW5lckltcGwoZnVuYywgJ2tleWRvd24nLCBrZXkpXG5cdH1cblxuXHRwdWJsaWMgdXAoZnVuYzogS2V5Ym9hcmRFdmVudENCVCwga2V5PzogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5saXN0ZW5lckltcGwoZnVuYywgJ2tleXVwJywga2V5KVxuXHR9XG5cblx0cHJpdmF0ZSBsaXN0ZW5lckltcGwoZnVuYzogS2V5Ym9hcmRFdmVudENCVCwga2luZDogc3RyaW5nLCBrZXk/OiBudW1iZXIpOiB2b2lkIHtcblx0XHRsZXQgYW55S2V5ID0ga2V5ID09PSB1bmRlZmluZWQgfHwga2V5ID09PSBudWxsXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoa2luZCwgKGV2dDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuXHRcdFx0aWYgKGFueUtleSB8fCBldnQua2V5Q29kZSA9PT0ga2V5KSB7XG5cdFx0XHRcdGZ1bmMoZXZ0KVxuXHRcdFx0fVxuXHRcdH0pXG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC9rZXlib2FyZC50cyIsImltcG9ydCAqIGFzIGVnMSBmcm9tICcuL2RlYnVnLWdsMidcbmltcG9ydCAqIGFzIGVnMiBmcm9tICcuL2RlYnVnLWdsMydcbmltcG9ydCAqIGFzIGNvbnRyb2xzVGVzdCBmcm9tICcuL2NvbnRyb2xzLXRlc3QnXG5cbmNvbnRyb2xzVGVzdC5tYWluKClcbi8vIGVnMS5tYWluKClcbi8vIGVnMi5tYWluKClcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9leGFtcGxlcy9tYWluLnRzIiwiaW1wb3J0ICogYXMgd2dsIGZyb20gJy4uL2dsL3dlYi1nbCdcbmltcG9ydCAqIGFzIHdhdWQgZnJvbSAnLi4vYXVkL3dlYi1hdWRpbydcbmltcG9ydCB7IG1hdDQsIHZlYzMsIGdsTWF0cml4IH0gZnJvbSAnZ2wtbWF0cml4J1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFpbigpIHtcblxuXHQvL1x0YXVkaW8gaW5pdFxuXG5cdGNvbnN0IGF1ZGlvTWFuYWdlciA9IG5ldyB3YXVkLkF1ZGlvQ29udGV4dE1hbmFnZXIoKVxuXHRjb25zdCBuTGV2ZWxzID0gMzJcblx0Y29uc3QgYW5hbHlzZXIgPSBuZXcgd2F1ZC5BdWRpb0FuYWx5c2VyKGF1ZGlvTWFuYWdlci5nZXRDb250ZXh0KCksIHtsZXZlbHNDb3VudDogbkxldmVsc30pXG5cdGNvbnN0IGZpbGVzID0gWydzZXAzMC5hYWMnXVxuXG5cdGFuYWx5c2VyLnNldHVwKClcblxuXHRhd2FpdCBQcm9taXNlLmFsbChhdWRpb01hbmFnZXIubG9hZFNvdW5kcyhmaWxlcykpXG5cblx0Y29uc3QgZGVzdGluYXRpb24gPSBhbmFseXNlci5nZXRBbmFseXNlck5vZGUoKVxuXG5cdGNvbnN0IHRvZ2dsZVBsYXkgPSAoKSA9PiBhdWRpb01hbmFnZXIudG9nZ2xlUGxheShmaWxlc1swXSwgZGVzdGluYXRpb24pXG5cblx0Ly9cdGVuZCBhdXRpbyBpbml0XG5cblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nID0gJzAnXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luID0gJzAnXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnXG5cblx0Y29uc3Qga2V5Ym9hcmQgPSBuZXcgd2dsLklucHV0LktleWJvYXJkKClcblx0Y29uc3QgY2FudmFzID0gbmV3IHdnbC5DYW52YXMoKVxuXHRjb25zdCBjYW52YXNFbGVtZW50ID0gY2FudmFzLmVsZW1lbnRcblx0Y29uc3QgZnJhbWVTdGF0cyA9IG5ldyB3Z2wuRnJhbWVTdGF0cygpXG5cblx0a2V5Ym9hcmQuZG93bihldnQgPT4gdG9nZ2xlUGxheSgpLCB3Z2wuSW5wdXQuS2V5cy5zcGFjZSlcblxuXHRjb25zdCBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0ID0gY2FudmFzRWxlbWVudC5nZXRDb250ZXh0KCd3ZWJnbCcpXG5cblx0aWYgKCFnbCkgXG5cdFx0dGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gaW5pdGlhbGl6ZSBHTCBjb250ZXh0LicpXG5cblx0bGV0IGZpcnN0T2JqID0gYXdhaXQgd2dsLkxvYWRlcnMuT0JKLmxvYWRNZXNoKGdsLCAnL29iai90ZXN0OnRlc3Qub2JqJylcblx0bGV0IGZpcnN0VGV4ID0gYXdhaXQgd2dsLkxvYWRlcnMuVEVYLmxvYWQyRChnbCwgJy90ZXgvbmViLnBuZycpXG5cblx0Y29uc3Qgc2NlbmUgPSBuZXcgd2dsLlNjZW5lKGdsKVxuXHRjb25zdCByZW5kZXJlciA9IG5ldyB3Z2wucmVuZGVyZXJzLmZ1bmN0aW9uYWwoZ2wpXG5cdGNvbnN0IGNhbWVyYSA9IG5ldyB3Z2wuQ2FtZXJhKClcblx0Y29uc3Qga2V5Ym9hcmRNb3ZlQ29udHJvbHMgPSBuZXcgd2dsLkNvbnRyb2xzLk1vdmVtZW50LktleWJvYXJkKGtleWJvYXJkLCBjYW1lcmEsIDUuMClcblx0Y29uc3QgdG91Y2hJbnB1dCA9IG5ldyB3Z2wuSW5wdXQuVG91Y2goKVxuXHRjb25zdCBtb3VzZUlucHV0ID0gbmV3IHdnbC5JbnB1dC5Qb2ludGVyTG9jayhjYW52YXMuZWxlbWVudClcblx0Y29uc3QgdG91Y2hNb3ZlQ29udHJvbHMgPSBuZXcgd2dsLkNvbnRyb2xzLk1vdmVtZW50LlRvdWNoKHRvdWNoSW5wdXQsIGNhbWVyYSwgMjUuMClcblxuXHRsZXQgcm90YXRpb25Db250cm9sczogYW55XG5cblx0aWYgKHdnbC5jYXBhYmlsaXRpZXMuaGFzUG9pbnRlckxvY2soKSkge1xuXHRcdHJvdGF0aW9uQ29udHJvbHMgPSBuZXcgd2dsLkNvbnRyb2xzLk9yYml0Lk9yYml0Mihtb3VzZUlucHV0LCBjYW1lcmEpXG5cdH0gZWxzZSB7XG5cdFx0cm90YXRpb25Db250cm9scyA9IG5ldyB3Z2wuQ29udHJvbHMuT3JiaXQuT3JiaXQodG91Y2hJbnB1dCwgY2FtZXJhKVxuXHR9XG5cblx0Ly8gY29uc3QgdG91Y2hSb3RhdGVDb250cm9scyA9IG5ldyB3Z2wuQ29udHJvbHMuUm90YXRpb24uVG91Y2godG91Y2hJbnB1dCwgY2FtZXJhLCAyNS4wKVxuXG5cdGNhbnZhcy5lbGVtZW50Lm9uY2xpY2sgPSBldnQgPT4gdG9nZ2xlUGxheSgpXG5cblx0cmVuZGVyZXIuc2V0QXNwZWN0KGNhbnZhcy5hc3BlY3QpXG5cdHJlbmRlcmVyLnNldE5lYXJGYXIoMC4xLCAxMDAwKVxuXG5cdGNvbnN0IGxpZ2h0ID0gd2dsLkxpZ2h0LkxpZ2h0LlBvaW50KGdsKVxuXHRjb25zdCBsaWdodDIgPSB3Z2wuTGlnaHQuTGlnaHQuRGlyZWN0aW9uYWwoZ2wpXG5cblx0Y29uc3QgcHJvZzogd2dsLlNoYWRlclByb2dyYW0gPSB3Z2wuU2hhZGVyRmFjdG9yeS5DcmVhdGUoZ2wsIHdnbC5TaGFkZXJMaWJyYXJ5LlBCUjEpXG5cdGNvbnN0IHNreWJveFByb2cgPSB3Z2wuU2hhZGVyRmFjdG9yeS5DcmVhdGUoZ2wsIHdnbC5TaGFkZXJMaWJyYXJ5LlNreWJveClcblxuXHRsaWdodC5zZXRDb2xvcihbMSwgMC41LCAwLjI1XSlcblx0bGlnaHQuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLnNldFZhbHVlKFswLCAwLCAtMl0pXG5cblx0bGlnaHQyLnNldENvbG9yKFswLCAwLCAxXSlcblx0bGlnaHQyLmdldEF0dHJpYnV0ZSgnZGlyZWN0aW9uJykuc2V0VmFsdWUoWy0zMCwgLTMwLCAtMzBdKVxuXG5cdGNvbnN0IHNwaGVyZSA9IHdnbC5NZXNoRmFjdG9yeS5jcmVhdGUoZ2wsICdzcGhlcmUnKVxuXHRjb25zdCBwbGFuZSA9IHdnbC5NZXNoRmFjdG9yeS5jcmVhdGUoZ2wsICdxdWFkJylcblx0Y29uc3QgY3ViZU1lc2ggPSB3Z2wuTWVzaEZhY3RvcnkuY3JlYXRlKGdsLCAnY3ViZScpXG5cdGNvbnN0IHNreWJveE1lc2ggPSB3Z2wuTWVzaEZhY3RvcnkuY3JlYXRlKGdsLCAnc2t5Ym94JylcblxuXHRjb25zdCBtYXQgPSB3Z2wuTWF0ZXJpYWwuTWF0ZXJpYWwuUGh5c2ljYWwoZ2wpXG5cblx0Y29uc3QgcGxhbmVNb2RlbCA9IG5ldyB3Z2wuTW9kZWwoZ2wsIHByb2csIHBsYW5lLCBtYXQpXG5cdGNvbnN0IHNwaGVyZU1vZGVsID0gbmV3IHdnbC5Nb2RlbChnbCwgcHJvZywgc3BoZXJlLCBtYXQpXG5cdGNvbnN0IGNvdHRhZ2VNb2RlbCA9IG5ldyB3Z2wuTW9kZWwoZ2wsIHByb2csIGZpcnN0T2JqLCBtYXQuY2xvbmUoKSlcblx0Y29uc3Qgc3VuID0gbmV3IHdnbC5Nb2RlbChnbCwgcHJvZywgc3BoZXJlLCBtYXQuY2xvbmUoKSlcblx0Y29uc3QgYW5jaG9yID0gbmV3IHdnbC5Nb2RlbChnbCwgcHJvZywgc3BoZXJlLCBtYXQuY2xvbmUoKSlcblx0Y29uc3Qgc2t5Ym94ID0gbmV3IHdnbC5Nb2RlbChnbCwgc2t5Ym94UHJvZywgc2t5Ym94TWVzaCwgbWF0LmNsb25lKCkpXG5cblx0c2t5Ym94Lm1hdGVyaWFsLmdldEF0dHJpYnV0ZSgnYWxiZWRvJykuc2V0VmFsdWUoZmlyc3RUZXgpXG5cblx0c3VuLm1hdGVyaWFsLmdldEF0dHJpYnV0ZSgnYWxiZWRvJykuc2V0VmFsdWUobGlnaHQyLmdldENvbG9yKCkpXG5cdGxldCBkaXIgPSBsaWdodDIuZ2V0QXR0cmlidXRlKCdkaXJlY3Rpb24nKS5wZWVrVmFsdWUoKVxuXHRzdW4uc2V0UG9zaXRpb24odmVjMy5uZWdhdGUodmVjMy5jcmVhdGUoKSwgZGlyIGFzIHZlYzMpKVxuXHRzdW4uc2V0U2NhbGUoMTApXG5cblx0Y290dGFnZU1vZGVsLm1hdGVyaWFsLmdldEF0dHJpYnV0ZSgnYWxiZWRvJykuc2V0VmFsdWUoWzAsIDEsIDBdKVxuXHRjb3R0YWdlTW9kZWwuc2V0UG9zaXRpb24oWy01LCAtNSwgLTVdKVxuXG5cdHBsYW5lTW9kZWwuc2V0UG9zaXRpb24odmVjMy5mcm9tVmFsdWVzKDAsIC0xLCAwKSlcblx0cGxhbmVNb2RlbC5zZXRSb3RhdGlvbih2ZWMzLmZyb21WYWx1ZXMoOTAsIDAsIDApKVxuXHRwbGFuZU1vZGVsLnNldFNjYWxlKHZlYzMuZnJvbVZhbHVlcygyLCAyLCAyKSlcblxuXHRsZXQgcGxhbmVNb2RlbHMgPSBnZXRQbGFuZU1vZGVscyhnbCwgcGxhbmVNb2RlbCwgbkxldmVscylcblx0bGV0IGZhclBsYW5lTW9kZWxzID0gZ2V0RmFyUGxhbmVNb2RlbHMoZ2wsIHBsYW5lTW9kZWwsIG5MZXZlbHMpXG5cdGZhclBsYW5lTW9kZWxzLm1hcChtb2RlbCA9PiBtb2RlbC5zZXRNZXNoKGN1YmVNZXNoKSlcblx0bGV0IGZhclBsYW5lUG9zaXRpb25zID0gZmFyUGxhbmVNb2RlbHMubWFwKG1vZGVsID0+IG1vZGVsLmdldFBvc2l0aW9uKCkpXG5cblx0c2NlbmUuYWRkKGZhclBsYW5lTW9kZWxzKVxuXHRzY2VuZS5hZGQoW2xpZ2h0LCBsaWdodDJdKVxuXHRzY2VuZS5hZGQoY290dGFnZU1vZGVsKVxuXG5cdHNjZW5lLmFkZChzdW4pXG5cdHNjZW5lLmFkZChzcGhlcmVNb2RlbClcblxuXHRzY2VuZS5iYWNrZ3JvdW5kID0gc2t5Ym94XG5cblx0ZmFyUGxhbmVNb2RlbHMubWFwKG1vZGVsID0+IGFuY2hvci5hZGRDaGlsZChtb2RlbCkpXG5cblx0c3BoZXJlTW9kZWwuc2V0UG9zaXRpb24oWy01LCAtNSwgMF0pXG5cblx0Y2FtZXJhLnNldFBvc2l0aW9uKFszMCwgOCwgMzFdKVxuXHRjYW1lcmEuc2V0UGl0Y2goLTE3KVxuXHRjYW1lcmEuc2V0WWF3KC00ODcpXG5cblx0Y29uc3QgYW5pbWF0ZSA9ICgpID0+IHtcblxuXHRcdGtleWJvYXJkTW92ZUNvbnRyb2xzLnVwZGF0ZSgpXG5cdFx0cm90YXRpb25Db250cm9scy51cGRhdGUoKVxuXHRcdHRvdWNoTW92ZUNvbnRyb2xzLnVwZGF0ZSgpXG5cblx0XHRmcmFtZVN0YXRzLnVwZGF0ZSgpXG5cdFx0YW5hbHlzZXIudXBkYXRlKClcblxuXHRcdGxldCBsZXZlbHMgPSBhbmFseXNlci5nZXRMZXZlbHMoKVxuXHRcdGxldCB3YXZlcyA9IGFuYWx5c2VyLmdldFdhdmUoKVxuXG5cdFx0cGxhbmVNb2RlbHMubWFwKChtb2RlbCwgaSkgPT4ge1xuXHRcdFx0bGV0IGNvbG9yID0gW2xldmVsc1tpXSwgMS1sZXZlbHNbaV0sIDBdXG5cdFx0XHRtb2RlbC5tYXRlcmlhbC5nZXRBdHRyaWJ1dGUoJ2FsYmVkbycpLnNldFZhbHVlKGNvbG9yKVxuXHRcdH0pXG5cblx0XHRsZXQgcG9zID0gYW5jaG9yLmdldFJvdGF0aW9uKClcblx0XHRwb3NbMV0gKz0gTWF0aC5jb3MoMS82MCkgKiAoYXVkaW9NYW5hZ2VyLmdldFNvdW5kKGZpbGVzWzBdKS5pc1BsYXlpbmcgPyAwLjEgOiAwKVxuXHRcdGFuY2hvci5zZXRSb3RhdGlvbihwb3MpXG5cblx0XHRzcGhlcmVNb2RlbC5zZXRQb3NpdGlvbihbLTUsIHdhdmVzWzBdKjAuMiwgMF0pXG5cdFx0Ly8gbGlnaHQuZ2V0QXR0cmlidXRlKCdjb2xvcicpLnNldFZhbHVlKFswLCAxLU1hdGguYWJzKHdhdmVzWzBdKjAuMSksIDFdKVxuXG5cdFx0ZmFyUGxhbmVNb2RlbHMubWFwKChtb2RlbCwgaSkgPT4ge1xuXHRcdFx0bGV0IHN1YnMgPSB3Z2wudXRpbC5jb21tb24uaW5kMnN1YihpLCBbbkxldmVscywgbkxldmVsc10pXG5cdFx0XHRsZXQgcm93ID0gc3Vic1swXVxuXHRcdFx0bGV0IGNvbCA9IHN1YnNbMV1cblx0XHRcdGxldCB2YWx1ZSA9IGxldmVsc1tjb2xdXG5cdFx0XHRsZXQgZnJhY01heCA9IHJvdyAvIG5MZXZlbHNcblx0XHRcdGxldCBjb2xvciA9IFswLCAxLXZhbHVlLCBmcmFjTWF4ICogdmFsdWVdXG5cdFx0XHRtb2RlbC5tYXRlcmlhbC5nZXRBdHRyaWJ1dGUoJ2FsYmVkbycpLnNldFZhbHVlKGNvbG9yKVxuXHRcdH0pXG5cblx0XHRyZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSlcblxuXHRcdC8vIGdsLmZpbmlzaCgpXG5cblx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpXG5cdH1cblxuXHRhbmltYXRlKClcbn1cblxuZnVuY3Rpb24gZ2V0UGxhbmVNb2RlbHMoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCwgcmVmOiB3Z2wuTW9kZWwsIG5MZXZlbHM6IG51bWJlcik6IEFycmF5PHdnbC5Nb2RlbD4ge1xuXHRsZXQgcGxhbmVNb2RlbHMgPSBbXVxuXHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbkxldmVsczsgaSsrKSB7XG5cdFx0bGV0IHBsYW5lTW9kZWw6IHdnbC5Nb2RlbCA9IG5ldyB3Z2wuTW9kZWwoZ2wsIHJlZi5wcm9ncmFtLCByZWYubWVzaCwgcmVmLm1hdGVyaWFsLmNsb25lKCkpXG5cdFx0cGxhbmVNb2RlbC5zZXRQb3NpdGlvbihbMCwgLWktMSwgMF0pXG5cdFx0cGxhbmVNb2RlbC5zZXRSb3RhdGlvbihbOTAsIDAsIDBdKVxuXHRcdHBsYW5lTW9kZWxzLnB1c2gocGxhbmVNb2RlbClcblx0fVxuXHRyZXR1cm4gcGxhbmVNb2RlbHNcbn1cblxuZnVuY3Rpb24gZ2V0RmFyUGxhbmVNb2RlbHMoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCwgcmVmOiB3Z2wuTW9kZWwsIG5Nb2RlbHM6IG51bWJlcik6IEFycmF5PHdnbC5Nb2RlbD4ge1xuXHRsZXQgcGxhbmVNb2RlbHM6IEFycmF5PHdnbC5Nb2RlbD4gPSBbXVxuXHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbk1vZGVsczsgaSsrKSB7XG5cdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IG5Nb2RlbHM7IGorKykge1xuXHRcdFx0bGV0IHBsYW5lTW9kZWw6IHdnbC5Nb2RlbCA9IG5ldyB3Z2wuTW9kZWwoZ2wsIHJlZi5wcm9ncmFtLCByZWYubWVzaCwgcmVmLm1hdGVyaWFsLmNsb25lKCkpXG5cdFx0XHRwbGFuZU1vZGVsLnNldFBvc2l0aW9uKFtpLzIsIGovMiwgLTEwXSlcblx0XHRcdHBsYW5lTW9kZWwuc2V0U2NhbGUoMC41KVxuXHRcdFx0cGxhbmVNb2RlbHMucHVzaChwbGFuZU1vZGVsKVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gcGxhbmVNb2RlbHNcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9leGFtcGxlcy9jb250cm9scy10ZXN0LnRzIiwiaW1wb3J0IHsgTWVzaEZhY3RvcnksIE1lc2hUeXBlcyB9IGZyb20gJy4vbWVzaC1mYWN0b3J5J1xuaW1wb3J0IHsgTWVzaExpYnJhcnkgfSBmcm9tICcuL21lc2gtbGlicmFyeSdcbmltcG9ydCAqIGFzIE1hdGVyaWFsIGZyb20gJy4vbWF0ZXJpYWwnXG5pbXBvcnQgKiBhcyBMaWdodCBmcm9tICcuL2xpZ2h0J1xuaW1wb3J0IHsgTWVzaCB9IGZyb20gJy4vbWVzaCdcbmltcG9ydCB7IE1vZGVsIH0gZnJvbSAnLi9tb2RlbCdcbmltcG9ydCB7IFZlcnRleCwgVG9wb2xvZ2llcyB9IGZyb20gJy4vdmVydGV4J1xuaW1wb3J0IHsgU2hhZGVyLCBTaGFkZXJQcm9ncmFtLCBTaGFkZXJTb3VyY2UsIFNoYWRlclR5cGVzIH0gZnJvbSAnLi9zaGFkZXInXG5pbXBvcnQgeyBTaGFkZXJMaWJyYXJ5IH0gZnJvbSAnLi9zaGFkZXItbGlicmFyeSdcbmltcG9ydCB7IFNoYWRlckZhY3RvcnkgfSBmcm9tICcuL3NoYWRlci1mYWN0b3J5J1xuaW1wb3J0IHsgQ2FtZXJhLCBkaXJlY3Rpb25zIH0gZnJvbSAnLi9jYW1lcmEnXG5pbXBvcnQgeyBTY2VuZSB9IGZyb20gJy4vc2NlbmUnXG5pbXBvcnQgeyBGcmFtZVN0YXRzIH0gZnJvbSAnLi9mcmFtZS1zdGF0cydcbmltcG9ydCAqIGFzIHJlbmRlcmVycyBmcm9tICcuL3JlbmRlcmVycydcbmltcG9ydCAqIGFzIG1hdGggZnJvbSAnLi93Z2wtbWF0aCdcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsJ1xuaW1wb3J0IHsgQ2FudmFzIH0gZnJvbSAnLi9jYW52YXMnXG5pbXBvcnQgKiBhcyBMb2FkZXJzIGZyb20gJy4vbG9hZGVycydcbmltcG9ydCAqIGFzIElucHV0IGZyb20gJy4vaW5wdXQnXG5pbXBvcnQgKiBhcyBDb250cm9scyBmcm9tICcuL2NhbWVyYS1jb250cm9scydcbmltcG9ydCAqIGFzIGNhcGFiaWxpdGllcyBmcm9tICcuL2NhcGFiaWxpdGllcydcblxuZXhwb3J0IHtcblx0Y2FwYWJpbGl0aWVzLFxuXHRDYW1lcmEsXG5cdENhbnZhcyxcblx0Q29udHJvbHMsXG5cdGRpcmVjdGlvbnMsXG5cdElucHV0LFxuXHRGcmFtZVN0YXRzLFxuXHRMaWdodCxcblx0TG9hZGVycyxcblx0bWF0aCxcblx0TWF0ZXJpYWwsXG5cdE1lc2hGYWN0b3J5LFxuXHRNZXNoVHlwZXMsXG5cdE1lc2hMaWJyYXJ5LFxuXHRNZXNoLFxuXHRNb2RlbCxcblx0VmVydGV4LFxuXHRUb3BvbG9naWVzLFxuXHRyZW5kZXJlcnMsXG5cdFNjZW5lLFxuXHRTaGFkZXJTb3VyY2UsXG5cdFNoYWRlclR5cGVzLFxuXHRTaGFkZXIsXG5cdFNoYWRlclByb2dyYW0sXG5cdFNoYWRlckxpYnJhcnksXG5cdFNoYWRlckZhY3RvcnksXG5cdHV0aWxcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC93ZWItZ2wudHMiLCJpbXBvcnQgeyBWZXJ0ZXgsIFRvcG9sb2dpZXMgfSBmcm9tICcuL3ZlcnRleCdcbmltcG9ydCB7IE1lc2ggfSBmcm9tICcuL21lc2gnXG5pbXBvcnQgeyBNZXNoTGlicmFyeSB9IGZyb20gJy4vbWVzaC1saWJyYXJ5J1xuaW1wb3J0ICogYXMgbWF0aCBmcm9tICcuL3dnbC1tYXRoJ1xuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2ViR0xfQVBJL1R1dG9yaWFsL0NyZWF0aW5nXzNEX29iamVjdHNfdXNpbmdfV2ViR0xcblxudHlwZSBNZXNoVHlwZXMgPSAncXVhZCcgfCAndHJpYW5nbGUnIHwgJ3NwaGVyZScgfCAnY3ViZScgfCAnc2t5Ym94J1xuXG50eXBlIE1lc2hDcmVhdGVPcHRpb25zID0ge1xuICAgIGZpbmFsaXplOiBib29sZWFuXG4gICAgdmVydGV4Q291bnQ6IG51bWJlclxufVxuXG5jbGFzcyBNZXNoRmFjdG9yeSB7XG5cbiAgICBwdWJsaWMgc3RhdGljIERlZmF1bHRzKCk6IE1lc2hDcmVhdGVPcHRpb25zIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZpbmFsaXplOiB0cnVlLFxuICAgICAgICAgICAgdmVydGV4Q291bnQ6IDY0XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZShnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCBcbiAgICAgICAga2luZDogTWVzaFR5cGVzLCBpbk9wdHM6IE9iamVjdCA9IE1lc2hGYWN0b3J5LkRlZmF1bHRzKCkpOiBNZXNoIHtcblxuICAgICAgICBjb25zdCBvcHRzID0gTWVzaEZhY3RvcnkuRGVmYXVsdHMoKVxuICAgICAgICBPYmplY3QuYXNzaWduKG9wdHMsIGluT3B0cylcblxuICAgICAgICBsZXQgbWVzaDogTWVzaCA9IG5ldyBNZXNoKGdsKVxuICAgICAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgICAgICAgIGNhc2UgJ3F1YWQnOlxuICAgICAgICAgICAgICAgIE1lc2hGYWN0b3J5Lm1ha2VRdWFkKG1lc2gpXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ3RyaWFuZ2xlJzpcbiAgICAgICAgICAgICAgICBNZXNoRmFjdG9yeS5tYWtlVHJpYW5nbGUobWVzaClcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnc3BoZXJlJzpcbiAgICAgICAgICAgICAgICBNZXNoRmFjdG9yeS5tYWtlU3BoZXJlKG1lc2gsIG9wdHMudmVydGV4Q291bnQpXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ2N1YmUnOlxuICAgICAgICAgICAgICAgIE1lc2hGYWN0b3J5Lm1ha2VDdWJlKG1lc2gpXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ3NreWJveCc6XG4gICAgICAgICAgICAgICAgTWVzaEZhY3RvcnkubWFrZVNreWJveChtZXNoKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0cy5maW5hbGl6ZSlcbiAgICAgICAgICAgIG1lc2guZmluYWxpemUoKVxuXG4gICAgICAgIHJldHVybiBtZXNoXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBtYWtlU2t5Ym94KG1lc2g6IE1lc2gpIHtcbiAgICAgICAgY29uc3QgZmxvYXQzMlZlcnRleERhdGE6IEZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoTWVzaExpYnJhcnkuc2t5Ym94LmRhdGEpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzY7IGkrKykge1xuICAgICAgICAgICAgbGV0IHZlcnRleDogVmVydGV4ID0gbmV3IFZlcnRleCgpXG4gICAgICAgICAgICBsZXQgeCwgeSwgeiwgdSwgdiwgbngsIG55LCBuejogbnVtYmVyXG5cbiAgICAgICAgICAgIHggPSBmbG9hdDMyVmVydGV4RGF0YVtpKjUrMF1cbiAgICAgICAgICAgIHkgPSBmbG9hdDMyVmVydGV4RGF0YVtpKjUrMV1cbiAgICAgICAgICAgIHogPSBmbG9hdDMyVmVydGV4RGF0YVtpKjUrMl1cblxuICAgICAgICAgICAgdSA9IGZsb2F0MzJWZXJ0ZXhEYXRhW2kqNSszXVxuICAgICAgICAgICAgdiA9IGZsb2F0MzJWZXJ0ZXhEYXRhW2kqNSs0XVxuXG4gICAgICAgICAgICBueCA9IDBcbiAgICAgICAgICAgIG55ID0gMFxuICAgICAgICAgICAgbnogPSAwXG5cbiAgICAgICAgICAgIHZlcnRleC5zZXRQb3NpdGlvbihuZXcgRmxvYXQzMkFycmF5KFt4LCB5LCB6XSkpXG4gICAgICAgICAgICB2ZXJ0ZXguc2V0VVYobmV3IEZsb2F0MzJBcnJheShbdSwgdl0pKVxuICAgICAgICAgICAgdmVydGV4LnNldE5vcm1hbChuZXcgRmxvYXQzMkFycmF5KFtueCwgbnksIG56XSkpXG5cbiAgICAgICAgICAgIG1lc2guYWRkVmVydGV4KHZlcnRleClcbiAgICAgICAgfVxuXG4gICAgICAgIG1lc2guc2V0VG9wb2xvZ3koVG9wb2xvZ2llcy5UUklBTkdMRVMpXG4gICAgfVxuXHRcblx0cHVibGljIHN0YXRpYyBtYWtlUXVhZChtZXNoOiBNZXNoKSB7XG5cbiAgICAgICAgY29uc3QgZmxvYXQzMlZlcnRleERhdGE6IEZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoTWVzaExpYnJhcnkucXVhZC5kYXRhKVxuXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgXHRsZXQgdmVydGV4OiBWZXJ0ZXggPSBuZXcgVmVydGV4KClcbiAgICAgICAgXHRsZXQgeCwgeSwgeiwgdSwgdiwgbngsIG55LCBuejogbnVtYmVyXG5cbiAgICAgICAgXHR4ID0gZmxvYXQzMlZlcnRleERhdGFbaSo4KzBdXG4gICAgICAgIFx0eSA9IGZsb2F0MzJWZXJ0ZXhEYXRhW2kqOCsxXVxuICAgICAgICBcdHogPSBmbG9hdDMyVmVydGV4RGF0YVtpKjgrMl1cbiAgICAgICAgXHR1ID0gZmxvYXQzMlZlcnRleERhdGFbaSo4KzNdXG4gICAgICAgIFx0diA9IGZsb2F0MzJWZXJ0ZXhEYXRhW2kqOCs0XVxuICAgICAgICBcdG54ID0gZmxvYXQzMlZlcnRleERhdGFbaSo4KzVdXG4gICAgICAgIFx0bnkgPSBmbG9hdDMyVmVydGV4RGF0YVtpKjgrNl1cbiAgICAgICAgXHRueiA9IGZsb2F0MzJWZXJ0ZXhEYXRhW2kqOCs3XVxuXG4gICAgICAgIFx0dmVydGV4LnNldFBvc2l0aW9uKG5ldyBGbG9hdDMyQXJyYXkoW3gsIHksIHpdKSlcbiAgICAgICAgXHR2ZXJ0ZXguc2V0VVYobmV3IEZsb2F0MzJBcnJheShbdSwgdl0pKVxuICAgICAgICBcdHZlcnRleC5zZXROb3JtYWwobmV3IEZsb2F0MzJBcnJheShbbngsIG55LCBuel0pKVxuXG4gICAgICAgIFx0bWVzaC5hZGRWZXJ0ZXgodmVydGV4KVxuICAgICAgICB9XG4gICAgICAgIG1lc2guc2V0VG9wb2xvZ3koVG9wb2xvZ2llcy5UUklBTkdMRVMpXG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIG1ha2VDdWJlKG1lc2g6IE1lc2gpIHtcblxuXHRcdGNvbnN0IGZsb2F0MzJWZXJ0ZXhEYXRhOiBGbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KE1lc2hMaWJyYXJ5LmN1YmUyLmRhdGEpXG5cblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgMzY7IGkrKykge1xuICAgICAgICBcdGxldCB2ZXJ0ZXg6IFZlcnRleCA9IG5ldyBWZXJ0ZXgoKVxuICAgICAgICBcdGxldCB4LCB5LCB6OiBudW1iZXJcbiAgICAgICAgXHRsZXQgbngsIG55LCBueiwgdSwgdjogbnVtYmVyXG5cbiAgICAgICAgXHR4ID0gZmxvYXQzMlZlcnRleERhdGFbaSo4KzBdXG4gICAgICAgIFx0eSA9IGZsb2F0MzJWZXJ0ZXhEYXRhW2kqOCsxXVxuICAgICAgICBcdHogPSBmbG9hdDMyVmVydGV4RGF0YVtpKjgrMl1cblxuICAgICAgICAgICAgLy8gdGhlc2UgYXJlIGZsaXBwZWQgYmVjYXVzZSB0aGV5IHdlcmUgY29waWVkIHRoYXQgd2F5LFxuICAgICAgICAgICAgLy8gYW5kIGltIHRvbyBsYXp5IHRvIGNoYW5nZSBpdFxuXG4gICAgICAgIFx0bnggPSBmbG9hdDMyVmVydGV4RGF0YVtpKjgrM11cbiAgICAgICAgXHRueSA9IGZsb2F0MzJWZXJ0ZXhEYXRhW2kqOCs0XVxuICAgICAgICBcdG56ID0gZmxvYXQzMlZlcnRleERhdGFbaSo4KzVdXG5cbiAgICAgICAgXHR1ID0gZmxvYXQzMlZlcnRleERhdGFbaSo4KzZdXG4gICAgICAgIFx0diA9IGZsb2F0MzJWZXJ0ZXhEYXRhW2kqOCs3XVxuXG4gICAgICAgIFx0dmVydGV4LnNldFBvc2l0aW9uKG5ldyBGbG9hdDMyQXJyYXkoW3gsIHksIHpdKSlcbiAgICAgICAgXHR2ZXJ0ZXguc2V0Tm9ybWFsKG5ldyBGbG9hdDMyQXJyYXkoW254LCBueSwgbnpdKSlcbiAgICAgICAgXHR2ZXJ0ZXguc2V0VVYobmV3IEZsb2F0MzJBcnJheShbdSwgdl0pKVxuICAgICAgICBcdG1lc2guYWRkVmVydGV4KHZlcnRleClcbiAgICAgICAgfVxuXG4gICAgICAgIG1lc2guc2V0VG9wb2xvZ3koVG9wb2xvZ2llcy5UUklBTkdMRVMpXG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIG1ha2VUcmlhbmdsZShtZXNoOiBNZXNoKSB7XG5cblx0XHRjb25zdCBmbG9hdDMyVmVydGV4RGF0YTogRmxvYXQzMkFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShNZXNoTGlicmFyeS50cmlhbmdsZS5kYXRhKVxuXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgXHRsZXQgdmVydGV4OiBWZXJ0ZXggPSBuZXcgVmVydGV4KClcblxuICAgICAgICBcdGxldCB4LCB5LCB6LCB1LCB2LCBueCwgbnksIG56OiBudW1iZXJcbiAgICAgICAgXHR4ID0gZmxvYXQzMlZlcnRleERhdGFbaSo4KzBdXG4gICAgICAgIFx0eSA9IGZsb2F0MzJWZXJ0ZXhEYXRhW2kqOCsxXVxuICAgICAgICBcdHogPSBmbG9hdDMyVmVydGV4RGF0YVtpKjgrMl1cbiAgICAgICAgXHR1ID0gZmxvYXQzMlZlcnRleERhdGFbaSo4KzNdXG4gICAgICAgIFx0diA9IGZsb2F0MzJWZXJ0ZXhEYXRhW2kqOCs0XVxuICAgICAgICBcdG54ID0gZmxvYXQzMlZlcnRleERhdGFbaSo4KzVdXG4gICAgICAgIFx0bnkgPSBmbG9hdDMyVmVydGV4RGF0YVtpKjgrNl1cbiAgICAgICAgXHRueiA9IGZsb2F0MzJWZXJ0ZXhEYXRhW2kqOCs3XVxuXG4gICAgICAgIFx0dmVydGV4LnNldFBvc2l0aW9uKG5ldyBGbG9hdDMyQXJyYXkoW3gsIHksIHpdKSlcbiAgICAgICAgXHR2ZXJ0ZXguc2V0VVYobmV3IEZsb2F0MzJBcnJheShbdSwgdl0pKVxuICAgICAgICBcdHZlcnRleC5zZXROb3JtYWwobmV3IEZsb2F0MzJBcnJheShbbngsIG55LCBuel0pKVxuXG4gICAgICAgIFx0bWVzaC5hZGRWZXJ0ZXgodmVydGV4KVxuICAgICAgICB9XG4gICAgICAgIG1lc2guc2V0VG9wb2xvZ3koVG9wb2xvZ2llcy5UUklBTkdMRVMpXG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIG1ha2VTcGhlcmUobWVzaDogTWVzaCwgdmVydGV4Q291bnQ6IG51bWJlciA9IDY0KSB7XG5cdFx0aWYgKCFtYXRoLmlzUG93Mih2ZXJ0ZXhDb3VudCkpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1ZlcnRleCBjb3VudCBtdXN0IGJlIGEgcG93ZXIgb2YgMi4nKVxuXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHZlcnRleENvdW50OyBpKyspIHtcblx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCB2ZXJ0ZXhDb3VudDsgaisrKSB7XG5cdFx0XHRcdGxldCB4U2VnbWVudDogbnVtYmVyID0gaiAvICh2ZXJ0ZXhDb3VudC0xKVxuXHRcdFx0XHRsZXQgeVNlZ21lbnQ6IG51bWJlciA9IGkgLyAodmVydGV4Q291bnQtMSlcblxuXHRcdFx0XHRsZXQgeFBvczogbnVtYmVyID0gTWF0aC5jb3MoeFNlZ21lbnQgKiAyICogTWF0aC5QSSkgKiBNYXRoLnNpbih5U2VnbWVudCAqIE1hdGguUEkpXG5cdFx0XHRcdGxldCB5UG9zOiBudW1iZXIgPSBNYXRoLmNvcyh5U2VnbWVudCAqIE1hdGguUEkpXG5cdFx0XHRcdGxldCB6UG9zOiBudW1iZXIgPSBNYXRoLnNpbih4U2VnbWVudCAqIDIgKiBNYXRoLlBJKSAqIE1hdGguc2luKHlTZWdtZW50ICogTWF0aC5QSSlcblxuXHRcdFx0XHRsZXQgdmVydGV4OiBWZXJ0ZXggPSBuZXcgVmVydGV4KClcblx0XHRcdFx0dmVydGV4LnNldFBvc2l0aW9uKG5ldyBGbG9hdDMyQXJyYXkoW3hQb3MsIHlQb3MsIHpQb3NdKSlcblx0XHRcdFx0dmVydGV4LnNldFVWKG5ldyBGbG9hdDMyQXJyYXkoW3hTZWdtZW50LCB5U2VnbWVudF0pKVxuXHRcdFx0XHR2ZXJ0ZXguc2V0Tm9ybWFsKG5ldyBGbG9hdDMyQXJyYXkoW3hQb3MsIHlQb3MsIHpQb3NdKSlcblxuXHRcdFx0XHRtZXNoLmFkZFZlcnRleCh2ZXJ0ZXgpXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bGV0IGZpcnN0SW5kZXg6IG51bWJlciA9IDBcblx0XHRsZXQgbmV4dEluZGV4OiBudW1iZXIgPSB2ZXJ0ZXhDb3VudFxuXHRcdGxldCBpbmRleFN0cDogbnVtYmVyID0gMFxuXHRcdGxldCBzaG91bGRQcm9jZWVkOiBib29sZWFuID0gdHJ1ZVxuXHRcdGxldCBpbmRpY2VzOiBBcnJheTxudW1iZXI+ID0gW11cblxuXHRcdHdoaWxlIChzaG91bGRQcm9jZWVkKSB7XG5cdFx0XHRpbmRpY2VzLnB1c2goZmlyc3RJbmRleClcblx0XHRcdGluZGljZXMucHVzaChuZXh0SW5kZXgpXG5cdFx0XHRpbmRleFN0cCArPSAyXG5cblx0XHRcdHNob3VsZFByb2NlZWQgPSBuZXh0SW5kZXggIT0gKHZlcnRleENvdW50ICogdmVydGV4Q291bnQpIC0gMVxuXG5cdFx0XHRpZiAoaW5kZXhTdHAgPiAwICYmIChuZXh0SW5kZXgrMSkgJSB2ZXJ0ZXhDb3VudCA9PSAwICYmIHNob3VsZFByb2NlZWQpIHtcblx0XHRcdFx0aW5kaWNlcy5wdXNoKG5leHRJbmRleClcblx0XHRcdFx0aW5kaWNlcy5wdXNoKGZpcnN0SW5kZXgrMSlcblx0XHRcdFx0aW5kZXhTdHAgKz0gMlxuXHRcdFx0fVxuXG5cdFx0XHRmaXJzdEluZGV4Kytcblx0XHRcdG5leHRJbmRleCsrXG5cdFx0fVxuXG5cdFx0bWVzaC5zZXRUb3BvbG9neShUb3BvbG9naWVzLlRSSUFOR0xFX1NUUklQKVxuXHRcdG1lc2guc2V0SW5kaWNlcyhuZXcgVWludDE2QXJyYXkoaW5kaWNlcykpXG5cblx0fVxuXG59XG5cbmV4cG9ydCB7IE1lc2hGYWN0b3J5LCBNZXNoVHlwZXMgfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2dsL21lc2gtZmFjdG9yeS50cyIsInZhciB2MSA9IHJlcXVpcmUoJy4vdjEnKTtcbnZhciB2NCA9IHJlcXVpcmUoJy4vdjQnKTtcblxudmFyIHV1aWQgPSB2NDtcbnV1aWQudjEgPSB2MTtcbnV1aWQudjQgPSB2NDtcblxubW9kdWxlLmV4cG9ydHMgPSB1dWlkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdXVpZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJuZyA9IHJlcXVpcmUoJy4vbGliL3JuZycpO1xudmFyIGJ5dGVzVG9VdWlkID0gcmVxdWlyZSgnLi9saWIvYnl0ZXNUb1V1aWQnKTtcblxuLy8gKipgdjEoKWAgLSBHZW5lcmF0ZSB0aW1lLWJhc2VkIFVVSUQqKlxuLy9cbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9MaW9zSy9VVUlELmpzXG4vLyBhbmQgaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L3V1aWQuaHRtbFxuXG4vLyByYW5kb20gIydzIHdlIG5lZWQgdG8gaW5pdCBub2RlIGFuZCBjbG9ja3NlcVxudmFyIF9zZWVkQnl0ZXMgPSBybmcoKTtcblxuLy8gUGVyIDQuNSwgY3JlYXRlIGFuZCA0OC1iaXQgbm9kZSBpZCwgKDQ3IHJhbmRvbSBiaXRzICsgbXVsdGljYXN0IGJpdCA9IDEpXG52YXIgX25vZGVJZCA9IFtcbiAgX3NlZWRCeXRlc1swXSB8IDB4MDEsXG4gIF9zZWVkQnl0ZXNbMV0sIF9zZWVkQnl0ZXNbMl0sIF9zZWVkQnl0ZXNbM10sIF9zZWVkQnl0ZXNbNF0sIF9zZWVkQnl0ZXNbNV1cbl07XG5cbi8vIFBlciA0LjIuMiwgcmFuZG9taXplICgxNCBiaXQpIGNsb2Nrc2VxXG52YXIgX2Nsb2Nrc2VxID0gKF9zZWVkQnl0ZXNbNl0gPDwgOCB8IF9zZWVkQnl0ZXNbN10pICYgMHgzZmZmO1xuXG4vLyBQcmV2aW91cyB1dWlkIGNyZWF0aW9uIHRpbWVcbnZhciBfbGFzdE1TZWNzID0gMCwgX2xhc3ROU2VjcyA9IDA7XG5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYnJvb2ZhL25vZGUtdXVpZCBmb3IgQVBJIGRldGFpbHNcbmZ1bmN0aW9uIHYxKG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuICB2YXIgYiA9IGJ1ZiB8fCBbXTtcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB2YXIgY2xvY2tzZXEgPSBvcHRpb25zLmNsb2Nrc2VxICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmNsb2Nrc2VxIDogX2Nsb2Nrc2VxO1xuXG4gIC8vIFVVSUQgdGltZXN0YW1wcyBhcmUgMTAwIG5hbm8tc2Vjb25kIHVuaXRzIHNpbmNlIHRoZSBHcmVnb3JpYW4gZXBvY2gsXG4gIC8vICgxNTgyLTEwLTE1IDAwOjAwKS4gIEpTTnVtYmVycyBhcmVuJ3QgcHJlY2lzZSBlbm91Z2ggZm9yIHRoaXMsIHNvXG4gIC8vIHRpbWUgaXMgaGFuZGxlZCBpbnRlcm5hbGx5IGFzICdtc2VjcycgKGludGVnZXIgbWlsbGlzZWNvbmRzKSBhbmQgJ25zZWNzJ1xuICAvLyAoMTAwLW5hbm9zZWNvbmRzIG9mZnNldCBmcm9tIG1zZWNzKSBzaW5jZSB1bml4IGVwb2NoLCAxOTcwLTAxLTAxIDAwOjAwLlxuICB2YXIgbXNlY3MgPSBvcHRpb25zLm1zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm1zZWNzIDogbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgLy8gUGVyIDQuMi4xLjIsIHVzZSBjb3VudCBvZiB1dWlkJ3MgZ2VuZXJhdGVkIGR1cmluZyB0aGUgY3VycmVudCBjbG9ja1xuICAvLyBjeWNsZSB0byBzaW11bGF0ZSBoaWdoZXIgcmVzb2x1dGlvbiBjbG9ja1xuICB2YXIgbnNlY3MgPSBvcHRpb25zLm5zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5zZWNzIDogX2xhc3ROU2VjcyArIDE7XG5cbiAgLy8gVGltZSBzaW5jZSBsYXN0IHV1aWQgY3JlYXRpb24gKGluIG1zZWNzKVxuICB2YXIgZHQgPSAobXNlY3MgLSBfbGFzdE1TZWNzKSArIChuc2VjcyAtIF9sYXN0TlNlY3MpLzEwMDAwO1xuXG4gIC8vIFBlciA0LjIuMS4yLCBCdW1wIGNsb2Nrc2VxIG9uIGNsb2NrIHJlZ3Jlc3Npb25cbiAgaWYgKGR0IDwgMCAmJiBvcHRpb25zLmNsb2Nrc2VxID09PSB1bmRlZmluZWQpIHtcbiAgICBjbG9ja3NlcSA9IGNsb2Nrc2VxICsgMSAmIDB4M2ZmZjtcbiAgfVxuXG4gIC8vIFJlc2V0IG5zZWNzIGlmIGNsb2NrIHJlZ3Jlc3NlcyAobmV3IGNsb2Nrc2VxKSBvciB3ZSd2ZSBtb3ZlZCBvbnRvIGEgbmV3XG4gIC8vIHRpbWUgaW50ZXJ2YWxcbiAgaWYgKChkdCA8IDAgfHwgbXNlY3MgPiBfbGFzdE1TZWNzKSAmJiBvcHRpb25zLm5zZWNzID09PSB1bmRlZmluZWQpIHtcbiAgICBuc2VjcyA9IDA7XG4gIH1cblxuICAvLyBQZXIgNC4yLjEuMiBUaHJvdyBlcnJvciBpZiB0b28gbWFueSB1dWlkcyBhcmUgcmVxdWVzdGVkXG4gIGlmIChuc2VjcyA+PSAxMDAwMCkge1xuICAgIHRocm93IG5ldyBFcnJvcigndXVpZC52MSgpOiBDYW5cXCd0IGNyZWF0ZSBtb3JlIHRoYW4gMTBNIHV1aWRzL3NlYycpO1xuICB9XG5cbiAgX2xhc3RNU2VjcyA9IG1zZWNzO1xuICBfbGFzdE5TZWNzID0gbnNlY3M7XG4gIF9jbG9ja3NlcSA9IGNsb2Nrc2VxO1xuXG4gIC8vIFBlciA0LjEuNCAtIENvbnZlcnQgZnJvbSB1bml4IGVwb2NoIHRvIEdyZWdvcmlhbiBlcG9jaFxuICBtc2VjcyArPSAxMjIxOTI5MjgwMDAwMDtcblxuICAvLyBgdGltZV9sb3dgXG4gIHZhciB0bCA9ICgobXNlY3MgJiAweGZmZmZmZmYpICogMTAwMDAgKyBuc2VjcykgJSAweDEwMDAwMDAwMDtcbiAgYltpKytdID0gdGwgPj4+IDI0ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDE2ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bCAmIDB4ZmY7XG5cbiAgLy8gYHRpbWVfbWlkYFxuICB2YXIgdG1oID0gKG1zZWNzIC8gMHgxMDAwMDAwMDAgKiAxMDAwMCkgJiAweGZmZmZmZmY7XG4gIGJbaSsrXSA9IHRtaCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRtaCAmIDB4ZmY7XG5cbiAgLy8gYHRpbWVfaGlnaF9hbmRfdmVyc2lvbmBcbiAgYltpKytdID0gdG1oID4+PiAyNCAmIDB4ZiB8IDB4MTA7IC8vIGluY2x1ZGUgdmVyc2lvblxuICBiW2krK10gPSB0bWggPj4+IDE2ICYgMHhmZjtcblxuICAvLyBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGAgKFBlciA0LjIuMiAtIGluY2x1ZGUgdmFyaWFudClcbiAgYltpKytdID0gY2xvY2tzZXEgPj4+IDggfCAweDgwO1xuXG4gIC8vIGBjbG9ja19zZXFfbG93YFxuICBiW2krK10gPSBjbG9ja3NlcSAmIDB4ZmY7XG5cbiAgLy8gYG5vZGVgXG4gIHZhciBub2RlID0gb3B0aW9ucy5ub2RlIHx8IF9ub2RlSWQ7XG4gIGZvciAodmFyIG4gPSAwOyBuIDwgNjsgKytuKSB7XG4gICAgYltpICsgbl0gPSBub2RlW25dO1xuICB9XG5cbiAgcmV0dXJuIGJ1ZiA/IGJ1ZiA6IGJ5dGVzVG9VdWlkKGIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHYxO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdXVpZC92MS5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcm5nID0gcmVxdWlyZSgnLi9saWIvcm5nJyk7XG52YXIgYnl0ZXNUb1V1aWQgPSByZXF1aXJlKCcuL2xpYi9ieXRlc1RvVXVpZCcpO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcblxuICBpZiAodHlwZW9mKG9wdGlvbnMpID09ICdzdHJpbmcnKSB7XG4gICAgYnVmID0gb3B0aW9ucyA9PSAnYmluYXJ5JyA/IG5ldyBBcnJheSgxNikgOiBudWxsO1xuICAgIG9wdGlvbnMgPSBudWxsO1xuICB9XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTtcblxuICAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG4gIHJuZHNbNl0gPSAocm5kc1s2XSAmIDB4MGYpIHwgMHg0MDtcbiAgcm5kc1s4XSA9IChybmRzWzhdICYgMHgzZikgfCAweDgwO1xuXG4gIC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuICBpZiAoYnVmKSB7XG4gICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IDE2OyArK2lpKSB7XG4gICAgICBidWZbaSArIGlpXSA9IHJuZHNbaWldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBidWYgfHwgYnl0ZXNUb1V1aWQocm5kcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdjQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy91dWlkL3Y0LmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEJyYW5kb24gSm9uZXMsIENvbGluIE1hY0tlbnppZSBJVi5cblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5mdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5BVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuVEhFIFNPRlRXQVJFLiAqL1xuXG5pbXBvcnQgKiBhcyBnbE1hdHJpeCBmcm9tIFwiLi9jb21tb25cIlxuXG4vKipcbiAqIDJ4MiBNYXRyaXhcbiAqIEBtb2R1bGUgbWF0MlxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBpZGVudGl0eSBtYXQyXG4gKlxuICogQHJldHVybnMge21hdDJ9IGEgbmV3IDJ4MiBtYXRyaXhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgbGV0IG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDQpO1xuICBvdXRbMF0gPSAxO1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgbWF0MiBpbml0aWFsaXplZCB3aXRoIHZhbHVlcyBmcm9tIGFuIGV4aXN0aW5nIG1hdHJpeFxuICpcbiAqIEBwYXJhbSB7bWF0Mn0gYSBtYXRyaXggdG8gY2xvbmVcbiAqIEByZXR1cm5zIHttYXQyfSBhIG5ldyAyeDIgbWF0cml4XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShhKSB7XG4gIGxldCBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSg0KTtcbiAgb3V0WzBdID0gYVswXTtcbiAgb3V0WzFdID0gYVsxXTtcbiAgb3V0WzJdID0gYVsyXTtcbiAgb3V0WzNdID0gYVszXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDb3B5IHRoZSB2YWx1ZXMgZnJvbSBvbmUgbWF0MiB0byBhbm90aGVyXG4gKlxuICogQHBhcmFtIHttYXQyfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0Mn0gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29weShvdXQsIGEpIHtcbiAgb3V0WzBdID0gYVswXTtcbiAgb3V0WzFdID0gYVsxXTtcbiAgb3V0WzJdID0gYVsyXTtcbiAgb3V0WzNdID0gYVszXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTZXQgYSBtYXQyIHRvIHRoZSBpZGVudGl0eSBtYXRyaXhcbiAqXG4gKiBAcGFyYW0ge21hdDJ9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHJldHVybnMge21hdDJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHkob3V0KSB7XG4gIG91dFswXSA9IDE7XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IG1hdDIgd2l0aCB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMCBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAwIHBvc2l0aW9uIChpbmRleCAwKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMSBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAxIHBvc2l0aW9uIChpbmRleCAxKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMCBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAwIHBvc2l0aW9uIChpbmRleCAyKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMSBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAxIHBvc2l0aW9uIChpbmRleCAzKVxuICogQHJldHVybnMge21hdDJ9IG91dCBBIG5ldyAyeDIgbWF0cml4XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tVmFsdWVzKG0wMCwgbTAxLCBtMTAsIG0xMSkge1xuICBsZXQgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoNCk7XG4gIG91dFswXSA9IG0wMDtcbiAgb3V0WzFdID0gbTAxO1xuICBvdXRbMl0gPSBtMTA7XG4gIG91dFszXSA9IG0xMTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIGNvbXBvbmVudHMgb2YgYSBtYXQyIHRvIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge21hdDJ9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMCBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAwIHBvc2l0aW9uIChpbmRleCAwKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMSBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAxIHBvc2l0aW9uIChpbmRleCAxKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMCBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAwIHBvc2l0aW9uIChpbmRleCAyKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMSBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAxIHBvc2l0aW9uIChpbmRleCAzKVxuICogQHJldHVybnMge21hdDJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0KG91dCwgbTAwLCBtMDEsIG0xMCwgbTExKSB7XG4gIG91dFswXSA9IG0wMDtcbiAgb3V0WzFdID0gbTAxO1xuICBvdXRbMl0gPSBtMTA7XG4gIG91dFszXSA9IG0xMTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBUcmFuc3Bvc2UgdGhlIHZhbHVlcyBvZiBhIG1hdDJcbiAqXG4gKiBAcGFyYW0ge21hdDJ9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQyfSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0Mn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc3Bvc2Uob3V0LCBhKSB7XG4gIC8vIElmIHdlIGFyZSB0cmFuc3Bvc2luZyBvdXJzZWx2ZXMgd2UgY2FuIHNraXAgYSBmZXcgc3RlcHMgYnV0IGhhdmUgdG8gY2FjaGVcbiAgLy8gc29tZSB2YWx1ZXNcbiAgaWYgKG91dCA9PT0gYSkge1xuICAgIGxldCBhMSA9IGFbMV07XG4gICAgb3V0WzFdID0gYVsyXTtcbiAgICBvdXRbMl0gPSBhMTtcbiAgfSBlbHNlIHtcbiAgICBvdXRbMF0gPSBhWzBdO1xuICAgIG91dFsxXSA9IGFbMl07XG4gICAgb3V0WzJdID0gYVsxXTtcbiAgICBvdXRbM10gPSBhWzNdO1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBJbnZlcnRzIGEgbWF0MlxuICpcbiAqIEBwYXJhbSB7bWF0Mn0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDJ9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludmVydChvdXQsIGEpIHtcbiAgbGV0IGEwID0gYVswXSwgYTEgPSBhWzFdLCBhMiA9IGFbMl0sIGEzID0gYVszXTtcblxuICAvLyBDYWxjdWxhdGUgdGhlIGRldGVybWluYW50XG4gIGxldCBkZXQgPSBhMCAqIGEzIC0gYTIgKiBhMTtcblxuICBpZiAoIWRldCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGRldCA9IDEuMCAvIGRldDtcblxuICBvdXRbMF0gPSAgYTMgKiBkZXQ7XG4gIG91dFsxXSA9IC1hMSAqIGRldDtcbiAgb3V0WzJdID0gLWEyICogZGV0O1xuICBvdXRbM10gPSAgYTAgKiBkZXQ7XG5cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBhZGp1Z2F0ZSBvZiBhIG1hdDJcbiAqXG4gKiBAcGFyYW0ge21hdDJ9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQyfSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0Mn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGpvaW50KG91dCwgYSkge1xuICAvLyBDYWNoaW5nIHRoaXMgdmFsdWUgaXMgbmVzc2VjYXJ5IGlmIG91dCA9PSBhXG4gIGxldCBhMCA9IGFbMF07XG4gIG91dFswXSA9ICBhWzNdO1xuICBvdXRbMV0gPSAtYVsxXTtcbiAgb3V0WzJdID0gLWFbMl07XG4gIG91dFszXSA9ICBhMDtcblxuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRldGVybWluYW50IG9mIGEgbWF0MlxuICpcbiAqIEBwYXJhbSB7bWF0Mn0gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge051bWJlcn0gZGV0ZXJtaW5hbnQgb2YgYVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGV0ZXJtaW5hbnQoYSkge1xuICByZXR1cm4gYVswXSAqIGFbM10gLSBhWzJdICogYVsxXTtcbn1cblxuLyoqXG4gKiBNdWx0aXBsaWVzIHR3byBtYXQyJ3NcbiAqXG4gKiBAcGFyYW0ge21hdDJ9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge21hdDJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7bWF0Mn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseShvdXQsIGEsIGIpIHtcbiAgbGV0IGEwID0gYVswXSwgYTEgPSBhWzFdLCBhMiA9IGFbMl0sIGEzID0gYVszXTtcbiAgbGV0IGIwID0gYlswXSwgYjEgPSBiWzFdLCBiMiA9IGJbMl0sIGIzID0gYlszXTtcbiAgb3V0WzBdID0gYTAgKiBiMCArIGEyICogYjE7XG4gIG91dFsxXSA9IGExICogYjAgKyBhMyAqIGIxO1xuICBvdXRbMl0gPSBhMCAqIGIyICsgYTIgKiBiMztcbiAgb3V0WzNdID0gYTEgKiBiMiArIGEzICogYjM7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUm90YXRlcyBhIG1hdDIgYnkgdGhlIGdpdmVuIGFuZ2xlXG4gKlxuICogQHBhcmFtIHttYXQyfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0Mn0gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZShvdXQsIGEsIHJhZCkge1xuICBsZXQgYTAgPSBhWzBdLCBhMSA9IGFbMV0sIGEyID0gYVsyXSwgYTMgPSBhWzNdO1xuICBsZXQgcyA9IE1hdGguc2luKHJhZCk7XG4gIGxldCBjID0gTWF0aC5jb3MocmFkKTtcbiAgb3V0WzBdID0gYTAgKiAgYyArIGEyICogcztcbiAgb3V0WzFdID0gYTEgKiAgYyArIGEzICogcztcbiAgb3V0WzJdID0gYTAgKiAtcyArIGEyICogYztcbiAgb3V0WzNdID0gYTEgKiAtcyArIGEzICogYztcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTY2FsZXMgdGhlIG1hdDIgYnkgdGhlIGRpbWVuc2lvbnMgaW4gdGhlIGdpdmVuIHZlYzJcbiAqXG4gKiBAcGFyYW0ge21hdDJ9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQyfSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXG4gKiBAcGFyYW0ge3ZlYzJ9IHYgdGhlIHZlYzIgdG8gc2NhbGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDJ9IG91dFxuICoqL1xuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlKG91dCwgYSwgdikge1xuICBsZXQgYTAgPSBhWzBdLCBhMSA9IGFbMV0sIGEyID0gYVsyXSwgYTMgPSBhWzNdO1xuICBsZXQgdjAgPSB2WzBdLCB2MSA9IHZbMV07XG4gIG91dFswXSA9IGEwICogdjA7XG4gIG91dFsxXSA9IGExICogdjA7XG4gIG91dFsyXSA9IGEyICogdjE7XG4gIG91dFszXSA9IGEzICogdjE7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgZ2l2ZW4gYW5nbGVcbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxuICpcbiAqICAgICBtYXQyLmlkZW50aXR5KGRlc3QpO1xuICogICAgIG1hdDIucm90YXRlKGRlc3QsIGRlc3QsIHJhZCk7XG4gKlxuICogQHBhcmFtIHttYXQyfSBvdXQgbWF0MiByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21Sb3RhdGlvbihvdXQsIHJhZCkge1xuICBsZXQgcyA9IE1hdGguc2luKHJhZCk7XG4gIGxldCBjID0gTWF0aC5jb3MocmFkKTtcbiAgb3V0WzBdID0gYztcbiAgb3V0WzFdID0gcztcbiAgb3V0WzJdID0gLXM7XG4gIG91dFszXSA9IGM7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgdmVjdG9yIHNjYWxpbmdcbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxuICpcbiAqICAgICBtYXQyLmlkZW50aXR5KGRlc3QpO1xuICogICAgIG1hdDIuc2NhbGUoZGVzdCwgZGVzdCwgdmVjKTtcbiAqXG4gKiBAcGFyYW0ge21hdDJ9IG91dCBtYXQyIHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge3ZlYzJ9IHYgU2NhbGluZyB2ZWN0b3JcbiAqIEByZXR1cm5zIHttYXQyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21TY2FsaW5nKG91dCwgdikge1xuICBvdXRbMF0gPSB2WzBdO1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSB2WzFdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBtYXQyXG4gKlxuICogQHBhcmFtIHttYXQyfSBhIG1hdHJpeCB0byByZXByZXNlbnQgYXMgYSBzdHJpbmdcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgbWF0cml4XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHIoYSkge1xuICByZXR1cm4gJ21hdDIoJyArIGFbMF0gKyAnLCAnICsgYVsxXSArICcsICcgKyBhWzJdICsgJywgJyArIGFbM10gKyAnKSc7XG59XG5cbi8qKlxuICogUmV0dXJucyBGcm9iZW5pdXMgbm9ybSBvZiBhIG1hdDJcbiAqXG4gKiBAcGFyYW0ge21hdDJ9IGEgdGhlIG1hdHJpeCB0byBjYWxjdWxhdGUgRnJvYmVuaXVzIG5vcm0gb2ZcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IEZyb2Jlbml1cyBub3JtXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9iKGEpIHtcbiAgcmV0dXJuKE1hdGguc3FydChNYXRoLnBvdyhhWzBdLCAyKSArIE1hdGgucG93KGFbMV0sIDIpICsgTWF0aC5wb3coYVsyXSwgMikgKyBNYXRoLnBvdyhhWzNdLCAyKSkpXG59XG5cbi8qKlxuICogUmV0dXJucyBMLCBEIGFuZCBVIG1hdHJpY2VzIChMb3dlciB0cmlhbmd1bGFyLCBEaWFnb25hbCBhbmQgVXBwZXIgdHJpYW5ndWxhcikgYnkgZmFjdG9yaXppbmcgdGhlIGlucHV0IG1hdHJpeFxuICogQHBhcmFtIHttYXQyfSBMIHRoZSBsb3dlciB0cmlhbmd1bGFyIG1hdHJpeFxuICogQHBhcmFtIHttYXQyfSBEIHRoZSBkaWFnb25hbCBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0Mn0gVSB0aGUgdXBwZXIgdHJpYW5ndWxhciBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0Mn0gYSB0aGUgaW5wdXQgbWF0cml4IHRvIGZhY3Rvcml6ZVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBMRFUoTCwgRCwgVSwgYSkge1xuICBMWzJdID0gYVsyXS9hWzBdO1xuICBVWzBdID0gYVswXTtcbiAgVVsxXSA9IGFbMV07XG4gIFVbM10gPSBhWzNdIC0gTFsyXSAqIFVbMV07XG4gIHJldHVybiBbTCwgRCwgVV07XG59XG5cbi8qKlxuICogQWRkcyB0d28gbWF0MidzXG4gKlxuICogQHBhcmFtIHttYXQyfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0Mn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHttYXQyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge21hdDJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICsgYlswXTtcbiAgb3V0WzFdID0gYVsxXSArIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gKyBiWzJdO1xuICBvdXRbM10gPSBhWzNdICsgYlszXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTdWJ0cmFjdHMgbWF0cml4IGIgZnJvbSBtYXRyaXggYVxuICpcbiAqIEBwYXJhbSB7bWF0Mn0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7bWF0Mn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHttYXQyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0KG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdIC0gYlswXTtcbiAgb3V0WzFdID0gYVsxXSAtIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gLSBiWzJdO1xuICBvdXRbM10gPSBhWzNdIC0gYlszXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSBtYXRyaWNlcyBoYXZlIGV4YWN0bHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24gKHdoZW4gY29tcGFyZWQgd2l0aCA9PT0pXG4gKlxuICogQHBhcmFtIHttYXQyfSBhIFRoZSBmaXJzdCBtYXRyaXguXG4gKiBAcGFyYW0ge21hdDJ9IGIgVGhlIHNlY29uZCBtYXRyaXguXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgbWF0cmljZXMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGFjdEVxdWFscyhhLCBiKSB7XG4gIHJldHVybiBhWzBdID09PSBiWzBdICYmIGFbMV0gPT09IGJbMV0gJiYgYVsyXSA9PT0gYlsyXSAmJiBhWzNdID09PSBiWzNdO1xufVxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIG1hdHJpY2VzIGhhdmUgYXBwcm94aW1hdGVseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbi5cbiAqXG4gKiBAcGFyYW0ge21hdDJ9IGEgVGhlIGZpcnN0IG1hdHJpeC5cbiAqIEBwYXJhbSB7bWF0Mn0gYiBUaGUgc2Vjb25kIG1hdHJpeC5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSBtYXRyaWNlcyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVxdWFscyhhLCBiKSB7XG4gIGxldCBhMCA9IGFbMF0sIGExID0gYVsxXSwgYTIgPSBhWzJdLCBhMyA9IGFbM107XG4gIGxldCBiMCA9IGJbMF0sIGIxID0gYlsxXSwgYjIgPSBiWzJdLCBiMyA9IGJbM107XG4gIHJldHVybiAoTWF0aC5hYnMoYTAgLSBiMCkgPD0gZ2xNYXRyaXguRVBTSUxPTipNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEwKSwgTWF0aC5hYnMoYjApKSAmJlxuICAgICAgICAgIE1hdGguYWJzKGExIC0gYjEpIDw9IGdsTWF0cml4LkVQU0lMT04qTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMSksIE1hdGguYWJzKGIxKSkgJiZcbiAgICAgICAgICBNYXRoLmFicyhhMiAtIGIyKSA8PSBnbE1hdHJpeC5FUFNJTE9OKk1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTIpLCBNYXRoLmFicyhiMikpICYmXG4gICAgICAgICAgTWF0aC5hYnMoYTMgLSBiMykgPD0gZ2xNYXRyaXguRVBTSUxPTipNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEzKSwgTWF0aC5hYnMoYjMpKSk7XG59XG5cbi8qKlxuICogTXVsdGlwbHkgZWFjaCBlbGVtZW50IG9mIHRoZSBtYXRyaXggYnkgYSBzY2FsYXIuXG4gKlxuICogQHBhcmFtIHttYXQyfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0Mn0gYSB0aGUgbWF0cml4IHRvIHNjYWxlXG4gKiBAcGFyYW0ge051bWJlcn0gYiBhbW91bnQgdG8gc2NhbGUgdGhlIG1hdHJpeCdzIGVsZW1lbnRzIGJ5XG4gKiBAcmV0dXJucyB7bWF0Mn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseVNjYWxhcihvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAqIGI7XG4gIG91dFsxXSA9IGFbMV0gKiBiO1xuICBvdXRbMl0gPSBhWzJdICogYjtcbiAgb3V0WzNdID0gYVszXSAqIGI7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQWRkcyB0d28gbWF0MidzIGFmdGVyIG11bHRpcGx5aW5nIGVhY2ggZWxlbWVudCBvZiB0aGUgc2Vjb25kIG9wZXJhbmQgYnkgYSBzY2FsYXIgdmFsdWUuXG4gKlxuICogQHBhcmFtIHttYXQyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7bWF0Mn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHttYXQyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxlIHRoZSBhbW91bnQgdG8gc2NhbGUgYidzIGVsZW1lbnRzIGJ5IGJlZm9yZSBhZGRpbmdcbiAqIEByZXR1cm5zIHttYXQyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5U2NhbGFyQW5kQWRkKG91dCwgYSwgYiwgc2NhbGUpIHtcbiAgb3V0WzBdID0gYVswXSArIChiWzBdICogc2NhbGUpO1xuICBvdXRbMV0gPSBhWzFdICsgKGJbMV0gKiBzY2FsZSk7XG4gIG91dFsyXSA9IGFbMl0gKyAoYlsyXSAqIHNjYWxlKTtcbiAgb3V0WzNdID0gYVszXSArIChiWzNdICogc2NhbGUpO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgbWF0Mi5tdWx0aXBseX1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3QgbXVsID0gbXVsdGlwbHk7XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayBtYXQyLnN1YnRyYWN0fVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBzdWIgPSBzdWJ0cmFjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dsLW1hdHJpeC9zcmMvZ2wtbWF0cml4L21hdDIuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIENvcHlyaWdodCAoYykgMjAxNSwgQnJhbmRvbiBKb25lcywgQ29saW4gTWFjS2VuemllIElWLlxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbmZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG5hbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG5USEUgU09GVFdBUkUuICovXG5cbmltcG9ydCAqIGFzIGdsTWF0cml4IGZyb20gXCIuL2NvbW1vblwiO1xuXG4vKipcbiAqIDJ4MyBNYXRyaXhcbiAqIEBtb2R1bGUgbWF0MmRcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEEgbWF0MmQgY29udGFpbnMgc2l4IGVsZW1lbnRzIGRlZmluZWQgYXM6XG4gKiA8cHJlPlxuICogW2EsIGMsIHR4LFxuICogIGIsIGQsIHR5XVxuICogPC9wcmU+XG4gKiBUaGlzIGlzIGEgc2hvcnQgZm9ybSBmb3IgdGhlIDN4MyBtYXRyaXg6XG4gKiA8cHJlPlxuICogW2EsIGMsIHR4LFxuICogIGIsIGQsIHR5LFxuICogIDAsIDAsIDFdXG4gKiA8L3ByZT5cbiAqIFRoZSBsYXN0IHJvdyBpcyBpZ25vcmVkIHNvIHRoZSBhcnJheSBpcyBzaG9ydGVyIGFuZCBvcGVyYXRpb25zIGFyZSBmYXN0ZXIuXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGlkZW50aXR5IG1hdDJkXG4gKlxuICogQHJldHVybnMge21hdDJkfSBhIG5ldyAyeDMgbWF0cml4XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gIGxldCBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSg2KTtcbiAgb3V0WzBdID0gMTtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMTtcbiAgb3V0WzRdID0gMDtcbiAgb3V0WzVdID0gMDtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IG1hdDJkIGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgbWF0cml4XG4gKlxuICogQHBhcmFtIHttYXQyZH0gYSBtYXRyaXggdG8gY2xvbmVcbiAqIEByZXR1cm5zIHttYXQyZH0gYSBuZXcgMngzIG1hdHJpeFxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUoYSkge1xuICBsZXQgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoNik7XG4gIG91dFswXSA9IGFbMF07XG4gIG91dFsxXSA9IGFbMV07XG4gIG91dFsyXSA9IGFbMl07XG4gIG91dFszXSA9IGFbM107XG4gIG91dFs0XSA9IGFbNF07XG4gIG91dFs1XSA9IGFbNV07XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIG1hdDJkIHRvIGFub3RoZXJcbiAqXG4gKiBAcGFyYW0ge21hdDJkfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0MmR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQyZH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KG91dCwgYSkge1xuICBvdXRbMF0gPSBhWzBdO1xuICBvdXRbMV0gPSBhWzFdO1xuICBvdXRbMl0gPSBhWzJdO1xuICBvdXRbM10gPSBhWzNdO1xuICBvdXRbNF0gPSBhWzRdO1xuICBvdXRbNV0gPSBhWzVdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNldCBhIG1hdDJkIHRvIHRoZSBpZGVudGl0eSBtYXRyaXhcbiAqXG4gKiBAcGFyYW0ge21hdDJkfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQyZH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eShvdXQpIHtcbiAgb3V0WzBdID0gMTtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMTtcbiAgb3V0WzRdID0gMDtcbiAgb3V0WzVdID0gMDtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgbWF0MmQgd2l0aCB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGEgQ29tcG9uZW50IEEgKGluZGV4IDApXG4gKiBAcGFyYW0ge051bWJlcn0gYiBDb21wb25lbnQgQiAoaW5kZXggMSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBjIENvbXBvbmVudCBDIChpbmRleCAyKVxuICogQHBhcmFtIHtOdW1iZXJ9IGQgQ29tcG9uZW50IEQgKGluZGV4IDMpXG4gKiBAcGFyYW0ge051bWJlcn0gdHggQ29tcG9uZW50IFRYIChpbmRleCA0KVxuICogQHBhcmFtIHtOdW1iZXJ9IHR5IENvbXBvbmVudCBUWSAoaW5kZXggNSlcbiAqIEByZXR1cm5zIHttYXQyZH0gQSBuZXcgbWF0MmRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21WYWx1ZXMoYSwgYiwgYywgZCwgdHgsIHR5KSB7XG4gIGxldCBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSg2KTtcbiAgb3V0WzBdID0gYTtcbiAgb3V0WzFdID0gYjtcbiAgb3V0WzJdID0gYztcbiAgb3V0WzNdID0gZDtcbiAgb3V0WzRdID0gdHg7XG4gIG91dFs1XSA9IHR5O1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIG1hdDJkIHRvIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge21hdDJkfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7TnVtYmVyfSBhIENvbXBvbmVudCBBIChpbmRleCAwKVxuICogQHBhcmFtIHtOdW1iZXJ9IGIgQ29tcG9uZW50IEIgKGluZGV4IDEpXG4gKiBAcGFyYW0ge051bWJlcn0gYyBDb21wb25lbnQgQyAoaW5kZXggMilcbiAqIEBwYXJhbSB7TnVtYmVyfSBkIENvbXBvbmVudCBEIChpbmRleCAzKVxuICogQHBhcmFtIHtOdW1iZXJ9IHR4IENvbXBvbmVudCBUWCAoaW5kZXggNClcbiAqIEBwYXJhbSB7TnVtYmVyfSB0eSBDb21wb25lbnQgVFkgKGluZGV4IDUpXG4gKiBAcmV0dXJucyB7bWF0MmR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0KG91dCwgYSwgYiwgYywgZCwgdHgsIHR5KSB7XG4gIG91dFswXSA9IGE7XG4gIG91dFsxXSA9IGI7XG4gIG91dFsyXSA9IGM7XG4gIG91dFszXSA9IGQ7XG4gIG91dFs0XSA9IHR4O1xuICBvdXRbNV0gPSB0eTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBJbnZlcnRzIGEgbWF0MmRcbiAqXG4gKiBAcGFyYW0ge21hdDJkfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0MmR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQyZH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQob3V0LCBhKSB7XG4gIGxldCBhYSA9IGFbMF0sIGFiID0gYVsxXSwgYWMgPSBhWzJdLCBhZCA9IGFbM107XG4gIGxldCBhdHggPSBhWzRdLCBhdHkgPSBhWzVdO1xuXG4gIGxldCBkZXQgPSBhYSAqIGFkIC0gYWIgKiBhYztcbiAgaWYoIWRldCl7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgZGV0ID0gMS4wIC8gZGV0O1xuXG4gIG91dFswXSA9IGFkICogZGV0O1xuICBvdXRbMV0gPSAtYWIgKiBkZXQ7XG4gIG91dFsyXSA9IC1hYyAqIGRldDtcbiAgb3V0WzNdID0gYWEgKiBkZXQ7XG4gIG91dFs0XSA9IChhYyAqIGF0eSAtIGFkICogYXR4KSAqIGRldDtcbiAgb3V0WzVdID0gKGFiICogYXR4IC0gYWEgKiBhdHkpICogZGV0O1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRldGVybWluYW50IG9mIGEgbWF0MmRcbiAqXG4gKiBAcGFyYW0ge21hdDJkfSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkZXRlcm1pbmFudCBvZiBhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXRlcm1pbmFudChhKSB7XG4gIHJldHVybiBhWzBdICogYVszXSAtIGFbMV0gKiBhWzJdO1xufVxuXG4vKipcbiAqIE11bHRpcGxpZXMgdHdvIG1hdDJkJ3NcbiAqXG4gKiBAcGFyYW0ge21hdDJkfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0MmR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7bWF0MmR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7bWF0MmR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkob3V0LCBhLCBiKSB7XG4gIGxldCBhMCA9IGFbMF0sIGExID0gYVsxXSwgYTIgPSBhWzJdLCBhMyA9IGFbM10sIGE0ID0gYVs0XSwgYTUgPSBhWzVdO1xuICBsZXQgYjAgPSBiWzBdLCBiMSA9IGJbMV0sIGIyID0gYlsyXSwgYjMgPSBiWzNdLCBiNCA9IGJbNF0sIGI1ID0gYls1XTtcbiAgb3V0WzBdID0gYTAgKiBiMCArIGEyICogYjE7XG4gIG91dFsxXSA9IGExICogYjAgKyBhMyAqIGIxO1xuICBvdXRbMl0gPSBhMCAqIGIyICsgYTIgKiBiMztcbiAgb3V0WzNdID0gYTEgKiBiMiArIGEzICogYjM7XG4gIG91dFs0XSA9IGEwICogYjQgKyBhMiAqIGI1ICsgYTQ7XG4gIG91dFs1XSA9IGExICogYjQgKyBhMyAqIGI1ICsgYTU7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUm90YXRlcyBhIG1hdDJkIGJ5IHRoZSBnaXZlbiBhbmdsZVxuICpcbiAqIEBwYXJhbSB7bWF0MmR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQyZH0gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQyZH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGUob3V0LCBhLCByYWQpIHtcbiAgbGV0IGEwID0gYVswXSwgYTEgPSBhWzFdLCBhMiA9IGFbMl0sIGEzID0gYVszXSwgYTQgPSBhWzRdLCBhNSA9IGFbNV07XG4gIGxldCBzID0gTWF0aC5zaW4ocmFkKTtcbiAgbGV0IGMgPSBNYXRoLmNvcyhyYWQpO1xuICBvdXRbMF0gPSBhMCAqICBjICsgYTIgKiBzO1xuICBvdXRbMV0gPSBhMSAqICBjICsgYTMgKiBzO1xuICBvdXRbMl0gPSBhMCAqIC1zICsgYTIgKiBjO1xuICBvdXRbM10gPSBhMSAqIC1zICsgYTMgKiBjO1xuICBvdXRbNF0gPSBhNDtcbiAgb3V0WzVdID0gYTU7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU2NhbGVzIHRoZSBtYXQyZCBieSB0aGUgZGltZW5zaW9ucyBpbiB0aGUgZ2l2ZW4gdmVjMlxuICpcbiAqIEBwYXJhbSB7bWF0MmR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQyZH0gYSB0aGUgbWF0cml4IHRvIHRyYW5zbGF0ZVxuICogQHBhcmFtIHt2ZWMyfSB2IHRoZSB2ZWMyIHRvIHNjYWxlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQyZH0gb3V0XG4gKiovXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUob3V0LCBhLCB2KSB7XG4gIGxldCBhMCA9IGFbMF0sIGExID0gYVsxXSwgYTIgPSBhWzJdLCBhMyA9IGFbM10sIGE0ID0gYVs0XSwgYTUgPSBhWzVdO1xuICBsZXQgdjAgPSB2WzBdLCB2MSA9IHZbMV07XG4gIG91dFswXSA9IGEwICogdjA7XG4gIG91dFsxXSA9IGExICogdjA7XG4gIG91dFsyXSA9IGEyICogdjE7XG4gIG91dFszXSA9IGEzICogdjE7XG4gIG91dFs0XSA9IGE0O1xuICBvdXRbNV0gPSBhNTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBUcmFuc2xhdGVzIHRoZSBtYXQyZCBieSB0aGUgZGltZW5zaW9ucyBpbiB0aGUgZ2l2ZW4gdmVjMlxuICpcbiAqIEBwYXJhbSB7bWF0MmR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQyZH0gYSB0aGUgbWF0cml4IHRvIHRyYW5zbGF0ZVxuICogQHBhcmFtIHt2ZWMyfSB2IHRoZSB2ZWMyIHRvIHRyYW5zbGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0MmR9IG91dFxuICoqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZShvdXQsIGEsIHYpIHtcbiAgbGV0IGEwID0gYVswXSwgYTEgPSBhWzFdLCBhMiA9IGFbMl0sIGEzID0gYVszXSwgYTQgPSBhWzRdLCBhNSA9IGFbNV07XG4gIGxldCB2MCA9IHZbMF0sIHYxID0gdlsxXTtcbiAgb3V0WzBdID0gYTA7XG4gIG91dFsxXSA9IGExO1xuICBvdXRbMl0gPSBhMjtcbiAgb3V0WzNdID0gYTM7XG4gIG91dFs0XSA9IGEwICogdjAgKyBhMiAqIHYxICsgYTQ7XG4gIG91dFs1XSA9IGExICogdjAgKyBhMyAqIHYxICsgYTU7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgZ2l2ZW4gYW5nbGVcbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxuICpcbiAqICAgICBtYXQyZC5pZGVudGl0eShkZXN0KTtcbiAqICAgICBtYXQyZC5yb3RhdGUoZGVzdCwgZGVzdCwgcmFkKTtcbiAqXG4gKiBAcGFyYW0ge21hdDJkfSBvdXQgbWF0MmQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0MmR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVJvdGF0aW9uKG91dCwgcmFkKSB7XG4gIGxldCBzID0gTWF0aC5zaW4ocmFkKSwgYyA9IE1hdGguY29zKHJhZCk7XG4gIG91dFswXSA9IGM7XG4gIG91dFsxXSA9IHM7XG4gIG91dFsyXSA9IC1zO1xuICBvdXRbM10gPSBjO1xuICBvdXRbNF0gPSAwO1xuICBvdXRbNV0gPSAwO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIHZlY3RvciBzY2FsaW5nXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcbiAqXG4gKiAgICAgbWF0MmQuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0MmQuc2NhbGUoZGVzdCwgZGVzdCwgdmVjKTtcbiAqXG4gKiBAcGFyYW0ge21hdDJkfSBvdXQgbWF0MmQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7dmVjMn0gdiBTY2FsaW5nIHZlY3RvclxuICogQHJldHVybnMge21hdDJkfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21TY2FsaW5nKG91dCwgdikge1xuICBvdXRbMF0gPSB2WzBdO1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSB2WzFdO1xuICBvdXRbNF0gPSAwO1xuICBvdXRbNV0gPSAwO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIHZlY3RvciB0cmFuc2xhdGlvblxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDJkLmlkZW50aXR5KGRlc3QpO1xuICogICAgIG1hdDJkLnRyYW5zbGF0ZShkZXN0LCBkZXN0LCB2ZWMpO1xuICpcbiAqIEBwYXJhbSB7bWF0MmR9IG91dCBtYXQyZCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHt2ZWMyfSB2IFRyYW5zbGF0aW9uIHZlY3RvclxuICogQHJldHVybnMge21hdDJkfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21UcmFuc2xhdGlvbihvdXQsIHYpIHtcbiAgb3V0WzBdID0gMTtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMTtcbiAgb3V0WzRdID0gdlswXTtcbiAgb3V0WzVdID0gdlsxXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgbWF0MmRcbiAqXG4gKiBAcGFyYW0ge21hdDJkfSBhIG1hdHJpeCB0byByZXByZXNlbnQgYXMgYSBzdHJpbmdcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgbWF0cml4XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHIoYSkge1xuICByZXR1cm4gJ21hdDJkKCcgKyBhWzBdICsgJywgJyArIGFbMV0gKyAnLCAnICsgYVsyXSArICcsICcgK1xuICAgICAgICAgIGFbM10gKyAnLCAnICsgYVs0XSArICcsICcgKyBhWzVdICsgJyknO1xufVxuXG4vKipcbiAqIFJldHVybnMgRnJvYmVuaXVzIG5vcm0gb2YgYSBtYXQyZFxuICpcbiAqIEBwYXJhbSB7bWF0MmR9IGEgdGhlIG1hdHJpeCB0byBjYWxjdWxhdGUgRnJvYmVuaXVzIG5vcm0gb2ZcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IEZyb2Jlbml1cyBub3JtXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9iKGEpIHtcbiAgcmV0dXJuKE1hdGguc3FydChNYXRoLnBvdyhhWzBdLCAyKSArIE1hdGgucG93KGFbMV0sIDIpICsgTWF0aC5wb3coYVsyXSwgMikgKyBNYXRoLnBvdyhhWzNdLCAyKSArIE1hdGgucG93KGFbNF0sIDIpICsgTWF0aC5wb3coYVs1XSwgMikgKyAxKSlcbn1cblxuLyoqXG4gKiBBZGRzIHR3byBtYXQyZCdzXG4gKlxuICogQHBhcmFtIHttYXQyZH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDJkfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge21hdDJkfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge21hdDJkfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSArIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gKyBiWzFdO1xuICBvdXRbMl0gPSBhWzJdICsgYlsyXTtcbiAgb3V0WzNdID0gYVszXSArIGJbM107XG4gIG91dFs0XSA9IGFbNF0gKyBiWzRdO1xuICBvdXRbNV0gPSBhWzVdICsgYls1XTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTdWJ0cmFjdHMgbWF0cml4IGIgZnJvbSBtYXRyaXggYVxuICpcbiAqIEBwYXJhbSB7bWF0MmR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQyZH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHttYXQyZH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHttYXQyZH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAtIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gLSBiWzFdO1xuICBvdXRbMl0gPSBhWzJdIC0gYlsyXTtcbiAgb3V0WzNdID0gYVszXSAtIGJbM107XG4gIG91dFs0XSA9IGFbNF0gLSBiWzRdO1xuICBvdXRbNV0gPSBhWzVdIC0gYls1XTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBNdWx0aXBseSBlYWNoIGVsZW1lbnQgb2YgdGhlIG1hdHJpeCBieSBhIHNjYWxhci5cbiAqXG4gKiBAcGFyYW0ge21hdDJkfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0MmR9IGEgdGhlIG1hdHJpeCB0byBzY2FsZVxuICogQHBhcmFtIHtOdW1iZXJ9IGIgYW1vdW50IHRvIHNjYWxlIHRoZSBtYXRyaXgncyBlbGVtZW50cyBieVxuICogQHJldHVybnMge21hdDJkfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5U2NhbGFyKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICogYjtcbiAgb3V0WzFdID0gYVsxXSAqIGI7XG4gIG91dFsyXSA9IGFbMl0gKiBiO1xuICBvdXRbM10gPSBhWzNdICogYjtcbiAgb3V0WzRdID0gYVs0XSAqIGI7XG4gIG91dFs1XSA9IGFbNV0gKiBiO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEFkZHMgdHdvIG1hdDJkJ3MgYWZ0ZXIgbXVsdGlwbHlpbmcgZWFjaCBlbGVtZW50IG9mIHRoZSBzZWNvbmQgb3BlcmFuZCBieSBhIHNjYWxhciB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge21hdDJkfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7bWF0MmR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7bWF0MmR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gc2NhbGUgdGhlIGFtb3VudCB0byBzY2FsZSBiJ3MgZWxlbWVudHMgYnkgYmVmb3JlIGFkZGluZ1xuICogQHJldHVybnMge21hdDJkfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5U2NhbGFyQW5kQWRkKG91dCwgYSwgYiwgc2NhbGUpIHtcbiAgb3V0WzBdID0gYVswXSArIChiWzBdICogc2NhbGUpO1xuICBvdXRbMV0gPSBhWzFdICsgKGJbMV0gKiBzY2FsZSk7XG4gIG91dFsyXSA9IGFbMl0gKyAoYlsyXSAqIHNjYWxlKTtcbiAgb3V0WzNdID0gYVszXSArIChiWzNdICogc2NhbGUpO1xuICBvdXRbNF0gPSBhWzRdICsgKGJbNF0gKiBzY2FsZSk7XG4gIG91dFs1XSA9IGFbNV0gKyAoYls1XSAqIHNjYWxlKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSBtYXRyaWNlcyBoYXZlIGV4YWN0bHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24gKHdoZW4gY29tcGFyZWQgd2l0aCA9PT0pXG4gKlxuICogQHBhcmFtIHttYXQyZH0gYSBUaGUgZmlyc3QgbWF0cml4LlxuICogQHBhcmFtIHttYXQyZH0gYiBUaGUgc2Vjb25kIG1hdHJpeC5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSBtYXRyaWNlcyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4YWN0RXF1YWxzKGEsIGIpIHtcbiAgcmV0dXJuIGFbMF0gPT09IGJbMF0gJiYgYVsxXSA9PT0gYlsxXSAmJiBhWzJdID09PSBiWzJdICYmIGFbM10gPT09IGJbM10gJiYgYVs0XSA9PT0gYls0XSAmJiBhWzVdID09PSBiWzVdO1xufVxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIG1hdHJpY2VzIGhhdmUgYXBwcm94aW1hdGVseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbi5cbiAqXG4gKiBAcGFyYW0ge21hdDJkfSBhIFRoZSBmaXJzdCBtYXRyaXguXG4gKiBAcGFyYW0ge21hdDJkfSBiIFRoZSBzZWNvbmQgbWF0cml4LlxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIG1hdHJpY2VzIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxzKGEsIGIpIHtcbiAgbGV0IGEwID0gYVswXSwgYTEgPSBhWzFdLCBhMiA9IGFbMl0sIGEzID0gYVszXSwgYTQgPSBhWzRdLCBhNSA9IGFbNV07XG4gIGxldCBiMCA9IGJbMF0sIGIxID0gYlsxXSwgYjIgPSBiWzJdLCBiMyA9IGJbM10sIGI0ID0gYls0XSwgYjUgPSBiWzVdO1xuICByZXR1cm4gKE1hdGguYWJzKGEwIC0gYjApIDw9IGdsTWF0cml4LkVQU0lMT04qTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMCksIE1hdGguYWJzKGIwKSkgJiZcbiAgICAgICAgICBNYXRoLmFicyhhMSAtIGIxKSA8PSBnbE1hdHJpeC5FUFNJTE9OKk1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTEpLCBNYXRoLmFicyhiMSkpICYmXG4gICAgICAgICAgTWF0aC5hYnMoYTIgLSBiMikgPD0gZ2xNYXRyaXguRVBTSUxPTipNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEyKSwgTWF0aC5hYnMoYjIpKSAmJlxuICAgICAgICAgIE1hdGguYWJzKGEzIC0gYjMpIDw9IGdsTWF0cml4LkVQU0lMT04qTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMyksIE1hdGguYWJzKGIzKSkgJiZcbiAgICAgICAgICBNYXRoLmFicyhhNCAtIGI0KSA8PSBnbE1hdHJpeC5FUFNJTE9OKk1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTQpLCBNYXRoLmFicyhiNCkpICYmXG4gICAgICAgICAgTWF0aC5hYnMoYTUgLSBiNSkgPD0gZ2xNYXRyaXguRVBTSUxPTipNYXRoLm1heCgxLjAsIE1hdGguYWJzKGE1KSwgTWF0aC5hYnMoYjUpKSk7XG59XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayBtYXQyZC5tdWx0aXBseX1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3QgbXVsID0gbXVsdGlwbHk7XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayBtYXQyZC5zdWJ0cmFjdH1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3Qgc3ViID0gc3VidHJhY3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nbC1tYXRyaXgvc3JjL2dsLW1hdHJpeC9tYXQyZC5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQ29weXJpZ2h0IChjKSAyMDE1LCBCcmFuZG9uIEpvbmVzLCBDb2xpbiBNYWNLZW56aWUgSVYuXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cblRIRSBTT0ZUV0FSRS4gKi9cblxuaW1wb3J0ICogYXMgZ2xNYXRyaXggZnJvbSBcIi4vY29tbW9uXCI7XG5cbi8qKlxuICogNHg0IE1hdHJpeFxuICogQG1vZHVsZSBtYXQ0XG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGlkZW50aXR5IG1hdDRcbiAqXG4gKiBAcmV0dXJucyB7bWF0NH0gYSBuZXcgNHg0IG1hdHJpeFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlKCkge1xuICBsZXQgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoMTYpO1xuICBvdXRbMF0gPSAxO1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSAwO1xuICBvdXRbNV0gPSAxO1xuICBvdXRbNl0gPSAwO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSAwO1xuICBvdXRbOV0gPSAwO1xuICBvdXRbMTBdID0gMTtcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSAwO1xuICBvdXRbMTNdID0gMDtcbiAgb3V0WzE0XSA9IDA7XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgbWF0NCBpbml0aWFsaXplZCB3aXRoIHZhbHVlcyBmcm9tIGFuIGV4aXN0aW5nIG1hdHJpeFxuICpcbiAqIEBwYXJhbSB7bWF0NH0gYSBtYXRyaXggdG8gY2xvbmVcbiAqIEByZXR1cm5zIHttYXQ0fSBhIG5ldyA0eDQgbWF0cml4XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShhKSB7XG4gIGxldCBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSgxNik7XG4gIG91dFswXSA9IGFbMF07XG4gIG91dFsxXSA9IGFbMV07XG4gIG91dFsyXSA9IGFbMl07XG4gIG91dFszXSA9IGFbM107XG4gIG91dFs0XSA9IGFbNF07XG4gIG91dFs1XSA9IGFbNV07XG4gIG91dFs2XSA9IGFbNl07XG4gIG91dFs3XSA9IGFbN107XG4gIG91dFs4XSA9IGFbOF07XG4gIG91dFs5XSA9IGFbOV07XG4gIG91dFsxMF0gPSBhWzEwXTtcbiAgb3V0WzExXSA9IGFbMTFdO1xuICBvdXRbMTJdID0gYVsxMl07XG4gIG91dFsxM10gPSBhWzEzXTtcbiAgb3V0WzE0XSA9IGFbMTRdO1xuICBvdXRbMTVdID0gYVsxNV07XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIG1hdDQgdG8gYW5vdGhlclxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHkob3V0LCBhKSB7XG4gIG91dFswXSA9IGFbMF07XG4gIG91dFsxXSA9IGFbMV07XG4gIG91dFsyXSA9IGFbMl07XG4gIG91dFszXSA9IGFbM107XG4gIG91dFs0XSA9IGFbNF07XG4gIG91dFs1XSA9IGFbNV07XG4gIG91dFs2XSA9IGFbNl07XG4gIG91dFs3XSA9IGFbN107XG4gIG91dFs4XSA9IGFbOF07XG4gIG91dFs5XSA9IGFbOV07XG4gIG91dFsxMF0gPSBhWzEwXTtcbiAgb3V0WzExXSA9IGFbMTFdO1xuICBvdXRbMTJdID0gYVsxMl07XG4gIG91dFsxM10gPSBhWzEzXTtcbiAgb3V0WzE0XSA9IGFbMTRdO1xuICBvdXRbMTVdID0gYVsxNV07XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IG1hdDQgd2l0aCB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMCBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAwIHBvc2l0aW9uIChpbmRleCAwKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMSBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAxIHBvc2l0aW9uIChpbmRleCAxKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMiBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAyIHBvc2l0aW9uIChpbmRleCAyKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMyBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAzIHBvc2l0aW9uIChpbmRleCAzKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMCBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAwIHBvc2l0aW9uIChpbmRleCA0KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMSBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAxIHBvc2l0aW9uIChpbmRleCA1KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMiBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAyIHBvc2l0aW9uIChpbmRleCA2KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMyBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAzIHBvc2l0aW9uIChpbmRleCA3KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMCBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAwIHBvc2l0aW9uIChpbmRleCA4KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMSBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAxIHBvc2l0aW9uIChpbmRleCA5KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMiBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAyIHBvc2l0aW9uIChpbmRleCAxMClcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjMgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMyBwb3NpdGlvbiAoaW5kZXggMTEpXG4gKiBAcGFyYW0ge051bWJlcn0gbTMwIENvbXBvbmVudCBpbiBjb2x1bW4gMywgcm93IDAgcG9zaXRpb24gKGluZGV4IDEyKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0zMSBDb21wb25lbnQgaW4gY29sdW1uIDMsIHJvdyAxIHBvc2l0aW9uIChpbmRleCAxMylcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMzIgQ29tcG9uZW50IGluIGNvbHVtbiAzLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggMTQpXG4gKiBAcGFyYW0ge051bWJlcn0gbTMzIENvbXBvbmVudCBpbiBjb2x1bW4gMywgcm93IDMgcG9zaXRpb24gKGluZGV4IDE1KVxuICogQHJldHVybnMge21hdDR9IEEgbmV3IG1hdDRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21WYWx1ZXMobTAwLCBtMDEsIG0wMiwgbTAzLCBtMTAsIG0xMSwgbTEyLCBtMTMsIG0yMCwgbTIxLCBtMjIsIG0yMywgbTMwLCBtMzEsIG0zMiwgbTMzKSB7XG4gIGxldCBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSgxNik7XG4gIG91dFswXSA9IG0wMDtcbiAgb3V0WzFdID0gbTAxO1xuICBvdXRbMl0gPSBtMDI7XG4gIG91dFszXSA9IG0wMztcbiAgb3V0WzRdID0gbTEwO1xuICBvdXRbNV0gPSBtMTE7XG4gIG91dFs2XSA9IG0xMjtcbiAgb3V0WzddID0gbTEzO1xuICBvdXRbOF0gPSBtMjA7XG4gIG91dFs5XSA9IG0yMTtcbiAgb3V0WzEwXSA9IG0yMjtcbiAgb3V0WzExXSA9IG0yMztcbiAgb3V0WzEyXSA9IG0zMDtcbiAgb3V0WzEzXSA9IG0zMTtcbiAgb3V0WzE0XSA9IG0zMjtcbiAgb3V0WzE1XSA9IG0zMztcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIGNvbXBvbmVudHMgb2YgYSBtYXQ0IHRvIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMCBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAwIHBvc2l0aW9uIChpbmRleCAwKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMSBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAxIHBvc2l0aW9uIChpbmRleCAxKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMiBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAyIHBvc2l0aW9uIChpbmRleCAyKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMyBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAzIHBvc2l0aW9uIChpbmRleCAzKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMCBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAwIHBvc2l0aW9uIChpbmRleCA0KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMSBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAxIHBvc2l0aW9uIChpbmRleCA1KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMiBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAyIHBvc2l0aW9uIChpbmRleCA2KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMyBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAzIHBvc2l0aW9uIChpbmRleCA3KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMCBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAwIHBvc2l0aW9uIChpbmRleCA4KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMSBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAxIHBvc2l0aW9uIChpbmRleCA5KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMiBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAyIHBvc2l0aW9uIChpbmRleCAxMClcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjMgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMyBwb3NpdGlvbiAoaW5kZXggMTEpXG4gKiBAcGFyYW0ge051bWJlcn0gbTMwIENvbXBvbmVudCBpbiBjb2x1bW4gMywgcm93IDAgcG9zaXRpb24gKGluZGV4IDEyKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0zMSBDb21wb25lbnQgaW4gY29sdW1uIDMsIHJvdyAxIHBvc2l0aW9uIChpbmRleCAxMylcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMzIgQ29tcG9uZW50IGluIGNvbHVtbiAzLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggMTQpXG4gKiBAcGFyYW0ge051bWJlcn0gbTMzIENvbXBvbmVudCBpbiBjb2x1bW4gMywgcm93IDMgcG9zaXRpb24gKGluZGV4IDE1KVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0KG91dCwgbTAwLCBtMDEsIG0wMiwgbTAzLCBtMTAsIG0xMSwgbTEyLCBtMTMsIG0yMCwgbTIxLCBtMjIsIG0yMywgbTMwLCBtMzEsIG0zMiwgbTMzKSB7XG4gIG91dFswXSA9IG0wMDtcbiAgb3V0WzFdID0gbTAxO1xuICBvdXRbMl0gPSBtMDI7XG4gIG91dFszXSA9IG0wMztcbiAgb3V0WzRdID0gbTEwO1xuICBvdXRbNV0gPSBtMTE7XG4gIG91dFs2XSA9IG0xMjtcbiAgb3V0WzddID0gbTEzO1xuICBvdXRbOF0gPSBtMjA7XG4gIG91dFs5XSA9IG0yMTtcbiAgb3V0WzEwXSA9IG0yMjtcbiAgb3V0WzExXSA9IG0yMztcbiAgb3V0WzEyXSA9IG0zMDtcbiAgb3V0WzEzXSA9IG0zMTtcbiAgb3V0WzE0XSA9IG0zMjtcbiAgb3V0WzE1XSA9IG0zMztcbiAgcmV0dXJuIG91dDtcbn1cblxuXG4vKipcbiAqIFNldCBhIG1hdDQgdG8gdGhlIGlkZW50aXR5IG1hdHJpeFxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eShvdXQpIHtcbiAgb3V0WzBdID0gMTtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gMDtcbiAgb3V0WzVdID0gMTtcbiAgb3V0WzZdID0gMDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gMDtcbiAgb3V0WzldID0gMDtcbiAgb3V0WzEwXSA9IDE7XG4gIG91dFsxMV0gPSAwO1xuICBvdXRbMTJdID0gMDtcbiAgb3V0WzEzXSA9IDA7XG4gIG91dFsxNF0gPSAwO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBUcmFuc3Bvc2UgdGhlIHZhbHVlcyBvZiBhIG1hdDRcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc3Bvc2Uob3V0LCBhKSB7XG4gIC8vIElmIHdlIGFyZSB0cmFuc3Bvc2luZyBvdXJzZWx2ZXMgd2UgY2FuIHNraXAgYSBmZXcgc3RlcHMgYnV0IGhhdmUgdG8gY2FjaGUgc29tZSB2YWx1ZXNcbiAgaWYgKG91dCA9PT0gYSkge1xuICAgIGxldCBhMDEgPSBhWzFdLCBhMDIgPSBhWzJdLCBhMDMgPSBhWzNdO1xuICAgIGxldCBhMTIgPSBhWzZdLCBhMTMgPSBhWzddO1xuICAgIGxldCBhMjMgPSBhWzExXTtcblxuICAgIG91dFsxXSA9IGFbNF07XG4gICAgb3V0WzJdID0gYVs4XTtcbiAgICBvdXRbM10gPSBhWzEyXTtcbiAgICBvdXRbNF0gPSBhMDE7XG4gICAgb3V0WzZdID0gYVs5XTtcbiAgICBvdXRbN10gPSBhWzEzXTtcbiAgICBvdXRbOF0gPSBhMDI7XG4gICAgb3V0WzldID0gYTEyO1xuICAgIG91dFsxMV0gPSBhWzE0XTtcbiAgICBvdXRbMTJdID0gYTAzO1xuICAgIG91dFsxM10gPSBhMTM7XG4gICAgb3V0WzE0XSA9IGEyMztcbiAgfSBlbHNlIHtcbiAgICBvdXRbMF0gPSBhWzBdO1xuICAgIG91dFsxXSA9IGFbNF07XG4gICAgb3V0WzJdID0gYVs4XTtcbiAgICBvdXRbM10gPSBhWzEyXTtcbiAgICBvdXRbNF0gPSBhWzFdO1xuICAgIG91dFs1XSA9IGFbNV07XG4gICAgb3V0WzZdID0gYVs5XTtcbiAgICBvdXRbN10gPSBhWzEzXTtcbiAgICBvdXRbOF0gPSBhWzJdO1xuICAgIG91dFs5XSA9IGFbNl07XG4gICAgb3V0WzEwXSA9IGFbMTBdO1xuICAgIG91dFsxMV0gPSBhWzE0XTtcbiAgICBvdXRbMTJdID0gYVszXTtcbiAgICBvdXRbMTNdID0gYVs3XTtcbiAgICBvdXRbMTRdID0gYVsxMV07XG4gICAgb3V0WzE1XSA9IGFbMTVdO1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBJbnZlcnRzIGEgbWF0NFxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludmVydChvdXQsIGEpIHtcbiAgbGV0IGEwMCA9IGFbMF0sIGEwMSA9IGFbMV0sIGEwMiA9IGFbMl0sIGEwMyA9IGFbM107XG4gIGxldCBhMTAgPSBhWzRdLCBhMTEgPSBhWzVdLCBhMTIgPSBhWzZdLCBhMTMgPSBhWzddO1xuICBsZXQgYTIwID0gYVs4XSwgYTIxID0gYVs5XSwgYTIyID0gYVsxMF0sIGEyMyA9IGFbMTFdO1xuICBsZXQgYTMwID0gYVsxMl0sIGEzMSA9IGFbMTNdLCBhMzIgPSBhWzE0XSwgYTMzID0gYVsxNV07XG5cbiAgbGV0IGIwMCA9IGEwMCAqIGExMSAtIGEwMSAqIGExMDtcbiAgbGV0IGIwMSA9IGEwMCAqIGExMiAtIGEwMiAqIGExMDtcbiAgbGV0IGIwMiA9IGEwMCAqIGExMyAtIGEwMyAqIGExMDtcbiAgbGV0IGIwMyA9IGEwMSAqIGExMiAtIGEwMiAqIGExMTtcbiAgbGV0IGIwNCA9IGEwMSAqIGExMyAtIGEwMyAqIGExMTtcbiAgbGV0IGIwNSA9IGEwMiAqIGExMyAtIGEwMyAqIGExMjtcbiAgbGV0IGIwNiA9IGEyMCAqIGEzMSAtIGEyMSAqIGEzMDtcbiAgbGV0IGIwNyA9IGEyMCAqIGEzMiAtIGEyMiAqIGEzMDtcbiAgbGV0IGIwOCA9IGEyMCAqIGEzMyAtIGEyMyAqIGEzMDtcbiAgbGV0IGIwOSA9IGEyMSAqIGEzMiAtIGEyMiAqIGEzMTtcbiAgbGV0IGIxMCA9IGEyMSAqIGEzMyAtIGEyMyAqIGEzMTtcbiAgbGV0IGIxMSA9IGEyMiAqIGEzMyAtIGEyMyAqIGEzMjtcblxuICAvLyBDYWxjdWxhdGUgdGhlIGRldGVybWluYW50XG4gIGxldCBkZXQgPSBiMDAgKiBiMTEgLSBiMDEgKiBiMTAgKyBiMDIgKiBiMDkgKyBiMDMgKiBiMDggLSBiMDQgKiBiMDcgKyBiMDUgKiBiMDY7XG5cbiAgaWYgKCFkZXQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBkZXQgPSAxLjAgLyBkZXQ7XG5cbiAgb3V0WzBdID0gKGExMSAqIGIxMSAtIGExMiAqIGIxMCArIGExMyAqIGIwOSkgKiBkZXQ7XG4gIG91dFsxXSA9IChhMDIgKiBiMTAgLSBhMDEgKiBiMTEgLSBhMDMgKiBiMDkpICogZGV0O1xuICBvdXRbMl0gPSAoYTMxICogYjA1IC0gYTMyICogYjA0ICsgYTMzICogYjAzKSAqIGRldDtcbiAgb3V0WzNdID0gKGEyMiAqIGIwNCAtIGEyMSAqIGIwNSAtIGEyMyAqIGIwMykgKiBkZXQ7XG4gIG91dFs0XSA9IChhMTIgKiBiMDggLSBhMTAgKiBiMTEgLSBhMTMgKiBiMDcpICogZGV0O1xuICBvdXRbNV0gPSAoYTAwICogYjExIC0gYTAyICogYjA4ICsgYTAzICogYjA3KSAqIGRldDtcbiAgb3V0WzZdID0gKGEzMiAqIGIwMiAtIGEzMCAqIGIwNSAtIGEzMyAqIGIwMSkgKiBkZXQ7XG4gIG91dFs3XSA9IChhMjAgKiBiMDUgLSBhMjIgKiBiMDIgKyBhMjMgKiBiMDEpICogZGV0O1xuICBvdXRbOF0gPSAoYTEwICogYjEwIC0gYTExICogYjA4ICsgYTEzICogYjA2KSAqIGRldDtcbiAgb3V0WzldID0gKGEwMSAqIGIwOCAtIGEwMCAqIGIxMCAtIGEwMyAqIGIwNikgKiBkZXQ7XG4gIG91dFsxMF0gPSAoYTMwICogYjA0IC0gYTMxICogYjAyICsgYTMzICogYjAwKSAqIGRldDtcbiAgb3V0WzExXSA9IChhMjEgKiBiMDIgLSBhMjAgKiBiMDQgLSBhMjMgKiBiMDApICogZGV0O1xuICBvdXRbMTJdID0gKGExMSAqIGIwNyAtIGExMCAqIGIwOSAtIGExMiAqIGIwNikgKiBkZXQ7XG4gIG91dFsxM10gPSAoYTAwICogYjA5IC0gYTAxICogYjA3ICsgYTAyICogYjA2KSAqIGRldDtcbiAgb3V0WzE0XSA9IChhMzEgKiBiMDEgLSBhMzAgKiBiMDMgLSBhMzIgKiBiMDApICogZGV0O1xuICBvdXRbMTVdID0gKGEyMCAqIGIwMyAtIGEyMSAqIGIwMSArIGEyMiAqIGIwMCkgKiBkZXQ7XG5cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBhZGp1Z2F0ZSBvZiBhIG1hdDRcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGpvaW50KG91dCwgYSkge1xuICBsZXQgYTAwID0gYVswXSwgYTAxID0gYVsxXSwgYTAyID0gYVsyXSwgYTAzID0gYVszXTtcbiAgbGV0IGExMCA9IGFbNF0sIGExMSA9IGFbNV0sIGExMiA9IGFbNl0sIGExMyA9IGFbN107XG4gIGxldCBhMjAgPSBhWzhdLCBhMjEgPSBhWzldLCBhMjIgPSBhWzEwXSwgYTIzID0gYVsxMV07XG4gIGxldCBhMzAgPSBhWzEyXSwgYTMxID0gYVsxM10sIGEzMiA9IGFbMTRdLCBhMzMgPSBhWzE1XTtcblxuICBvdXRbMF0gID0gIChhMTEgKiAoYTIyICogYTMzIC0gYTIzICogYTMyKSAtIGEyMSAqIChhMTIgKiBhMzMgLSBhMTMgKiBhMzIpICsgYTMxICogKGExMiAqIGEyMyAtIGExMyAqIGEyMikpO1xuICBvdXRbMV0gID0gLShhMDEgKiAoYTIyICogYTMzIC0gYTIzICogYTMyKSAtIGEyMSAqIChhMDIgKiBhMzMgLSBhMDMgKiBhMzIpICsgYTMxICogKGEwMiAqIGEyMyAtIGEwMyAqIGEyMikpO1xuICBvdXRbMl0gID0gIChhMDEgKiAoYTEyICogYTMzIC0gYTEzICogYTMyKSAtIGExMSAqIChhMDIgKiBhMzMgLSBhMDMgKiBhMzIpICsgYTMxICogKGEwMiAqIGExMyAtIGEwMyAqIGExMikpO1xuICBvdXRbM10gID0gLShhMDEgKiAoYTEyICogYTIzIC0gYTEzICogYTIyKSAtIGExMSAqIChhMDIgKiBhMjMgLSBhMDMgKiBhMjIpICsgYTIxICogKGEwMiAqIGExMyAtIGEwMyAqIGExMikpO1xuICBvdXRbNF0gID0gLShhMTAgKiAoYTIyICogYTMzIC0gYTIzICogYTMyKSAtIGEyMCAqIChhMTIgKiBhMzMgLSBhMTMgKiBhMzIpICsgYTMwICogKGExMiAqIGEyMyAtIGExMyAqIGEyMikpO1xuICBvdXRbNV0gID0gIChhMDAgKiAoYTIyICogYTMzIC0gYTIzICogYTMyKSAtIGEyMCAqIChhMDIgKiBhMzMgLSBhMDMgKiBhMzIpICsgYTMwICogKGEwMiAqIGEyMyAtIGEwMyAqIGEyMikpO1xuICBvdXRbNl0gID0gLShhMDAgKiAoYTEyICogYTMzIC0gYTEzICogYTMyKSAtIGExMCAqIChhMDIgKiBhMzMgLSBhMDMgKiBhMzIpICsgYTMwICogKGEwMiAqIGExMyAtIGEwMyAqIGExMikpO1xuICBvdXRbN10gID0gIChhMDAgKiAoYTEyICogYTIzIC0gYTEzICogYTIyKSAtIGExMCAqIChhMDIgKiBhMjMgLSBhMDMgKiBhMjIpICsgYTIwICogKGEwMiAqIGExMyAtIGEwMyAqIGExMikpO1xuICBvdXRbOF0gID0gIChhMTAgKiAoYTIxICogYTMzIC0gYTIzICogYTMxKSAtIGEyMCAqIChhMTEgKiBhMzMgLSBhMTMgKiBhMzEpICsgYTMwICogKGExMSAqIGEyMyAtIGExMyAqIGEyMSkpO1xuICBvdXRbOV0gID0gLShhMDAgKiAoYTIxICogYTMzIC0gYTIzICogYTMxKSAtIGEyMCAqIChhMDEgKiBhMzMgLSBhMDMgKiBhMzEpICsgYTMwICogKGEwMSAqIGEyMyAtIGEwMyAqIGEyMSkpO1xuICBvdXRbMTBdID0gIChhMDAgKiAoYTExICogYTMzIC0gYTEzICogYTMxKSAtIGExMCAqIChhMDEgKiBhMzMgLSBhMDMgKiBhMzEpICsgYTMwICogKGEwMSAqIGExMyAtIGEwMyAqIGExMSkpO1xuICBvdXRbMTFdID0gLShhMDAgKiAoYTExICogYTIzIC0gYTEzICogYTIxKSAtIGExMCAqIChhMDEgKiBhMjMgLSBhMDMgKiBhMjEpICsgYTIwICogKGEwMSAqIGExMyAtIGEwMyAqIGExMSkpO1xuICBvdXRbMTJdID0gLShhMTAgKiAoYTIxICogYTMyIC0gYTIyICogYTMxKSAtIGEyMCAqIChhMTEgKiBhMzIgLSBhMTIgKiBhMzEpICsgYTMwICogKGExMSAqIGEyMiAtIGExMiAqIGEyMSkpO1xuICBvdXRbMTNdID0gIChhMDAgKiAoYTIxICogYTMyIC0gYTIyICogYTMxKSAtIGEyMCAqIChhMDEgKiBhMzIgLSBhMDIgKiBhMzEpICsgYTMwICogKGEwMSAqIGEyMiAtIGEwMiAqIGEyMSkpO1xuICBvdXRbMTRdID0gLShhMDAgKiAoYTExICogYTMyIC0gYTEyICogYTMxKSAtIGExMCAqIChhMDEgKiBhMzIgLSBhMDIgKiBhMzEpICsgYTMwICogKGEwMSAqIGExMiAtIGEwMiAqIGExMSkpO1xuICBvdXRbMTVdID0gIChhMDAgKiAoYTExICogYTIyIC0gYTEyICogYTIxKSAtIGExMCAqIChhMDEgKiBhMjIgLSBhMDIgKiBhMjEpICsgYTIwICogKGEwMSAqIGExMiAtIGEwMiAqIGExMSkpO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRldGVybWluYW50IG9mIGEgbWF0NFxuICpcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge051bWJlcn0gZGV0ZXJtaW5hbnQgb2YgYVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGV0ZXJtaW5hbnQoYSkge1xuICBsZXQgYTAwID0gYVswXSwgYTAxID0gYVsxXSwgYTAyID0gYVsyXSwgYTAzID0gYVszXTtcbiAgbGV0IGExMCA9IGFbNF0sIGExMSA9IGFbNV0sIGExMiA9IGFbNl0sIGExMyA9IGFbN107XG4gIGxldCBhMjAgPSBhWzhdLCBhMjEgPSBhWzldLCBhMjIgPSBhWzEwXSwgYTIzID0gYVsxMV07XG4gIGxldCBhMzAgPSBhWzEyXSwgYTMxID0gYVsxM10sIGEzMiA9IGFbMTRdLCBhMzMgPSBhWzE1XTtcblxuICBsZXQgYjAwID0gYTAwICogYTExIC0gYTAxICogYTEwO1xuICBsZXQgYjAxID0gYTAwICogYTEyIC0gYTAyICogYTEwO1xuICBsZXQgYjAyID0gYTAwICogYTEzIC0gYTAzICogYTEwO1xuICBsZXQgYjAzID0gYTAxICogYTEyIC0gYTAyICogYTExO1xuICBsZXQgYjA0ID0gYTAxICogYTEzIC0gYTAzICogYTExO1xuICBsZXQgYjA1ID0gYTAyICogYTEzIC0gYTAzICogYTEyO1xuICBsZXQgYjA2ID0gYTIwICogYTMxIC0gYTIxICogYTMwO1xuICBsZXQgYjA3ID0gYTIwICogYTMyIC0gYTIyICogYTMwO1xuICBsZXQgYjA4ID0gYTIwICogYTMzIC0gYTIzICogYTMwO1xuICBsZXQgYjA5ID0gYTIxICogYTMyIC0gYTIyICogYTMxO1xuICBsZXQgYjEwID0gYTIxICogYTMzIC0gYTIzICogYTMxO1xuICBsZXQgYjExID0gYTIyICogYTMzIC0gYTIzICogYTMyO1xuXG4gIC8vIENhbGN1bGF0ZSB0aGUgZGV0ZXJtaW5hbnRcbiAgcmV0dXJuIGIwMCAqIGIxMSAtIGIwMSAqIGIxMCArIGIwMiAqIGIwOSArIGIwMyAqIGIwOCAtIGIwNCAqIGIwNyArIGIwNSAqIGIwNjtcbn1cblxuLyoqXG4gKiBNdWx0aXBsaWVzIHR3byBtYXQ0c1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7bWF0NH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5KG91dCwgYSwgYikge1xuICBsZXQgYTAwID0gYVswXSwgYTAxID0gYVsxXSwgYTAyID0gYVsyXSwgYTAzID0gYVszXTtcbiAgbGV0IGExMCA9IGFbNF0sIGExMSA9IGFbNV0sIGExMiA9IGFbNl0sIGExMyA9IGFbN107XG4gIGxldCBhMjAgPSBhWzhdLCBhMjEgPSBhWzldLCBhMjIgPSBhWzEwXSwgYTIzID0gYVsxMV07XG4gIGxldCBhMzAgPSBhWzEyXSwgYTMxID0gYVsxM10sIGEzMiA9IGFbMTRdLCBhMzMgPSBhWzE1XTtcblxuICAvLyBDYWNoZSBvbmx5IHRoZSBjdXJyZW50IGxpbmUgb2YgdGhlIHNlY29uZCBtYXRyaXhcbiAgbGV0IGIwICA9IGJbMF0sIGIxID0gYlsxXSwgYjIgPSBiWzJdLCBiMyA9IGJbM107XG4gIG91dFswXSA9IGIwKmEwMCArIGIxKmExMCArIGIyKmEyMCArIGIzKmEzMDtcbiAgb3V0WzFdID0gYjAqYTAxICsgYjEqYTExICsgYjIqYTIxICsgYjMqYTMxO1xuICBvdXRbMl0gPSBiMCphMDIgKyBiMSphMTIgKyBiMiphMjIgKyBiMyphMzI7XG4gIG91dFszXSA9IGIwKmEwMyArIGIxKmExMyArIGIyKmEyMyArIGIzKmEzMztcblxuICBiMCA9IGJbNF07IGIxID0gYls1XTsgYjIgPSBiWzZdOyBiMyA9IGJbN107XG4gIG91dFs0XSA9IGIwKmEwMCArIGIxKmExMCArIGIyKmEyMCArIGIzKmEzMDtcbiAgb3V0WzVdID0gYjAqYTAxICsgYjEqYTExICsgYjIqYTIxICsgYjMqYTMxO1xuICBvdXRbNl0gPSBiMCphMDIgKyBiMSphMTIgKyBiMiphMjIgKyBiMyphMzI7XG4gIG91dFs3XSA9IGIwKmEwMyArIGIxKmExMyArIGIyKmEyMyArIGIzKmEzMztcblxuICBiMCA9IGJbOF07IGIxID0gYls5XTsgYjIgPSBiWzEwXTsgYjMgPSBiWzExXTtcbiAgb3V0WzhdID0gYjAqYTAwICsgYjEqYTEwICsgYjIqYTIwICsgYjMqYTMwO1xuICBvdXRbOV0gPSBiMCphMDEgKyBiMSphMTEgKyBiMiphMjEgKyBiMyphMzE7XG4gIG91dFsxMF0gPSBiMCphMDIgKyBiMSphMTIgKyBiMiphMjIgKyBiMyphMzI7XG4gIG91dFsxMV0gPSBiMCphMDMgKyBiMSphMTMgKyBiMiphMjMgKyBiMyphMzM7XG5cbiAgYjAgPSBiWzEyXTsgYjEgPSBiWzEzXTsgYjIgPSBiWzE0XTsgYjMgPSBiWzE1XTtcbiAgb3V0WzEyXSA9IGIwKmEwMCArIGIxKmExMCArIGIyKmEyMCArIGIzKmEzMDtcbiAgb3V0WzEzXSA9IGIwKmEwMSArIGIxKmExMSArIGIyKmEyMSArIGIzKmEzMTtcbiAgb3V0WzE0XSA9IGIwKmEwMiArIGIxKmExMiArIGIyKmEyMiArIGIzKmEzMjtcbiAgb3V0WzE1XSA9IGIwKmEwMyArIGIxKmExMyArIGIyKmEyMyArIGIzKmEzMztcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBUcmFuc2xhdGUgYSBtYXQ0IGJ5IHRoZSBnaXZlbiB2ZWN0b3JcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBtYXRyaXggdG8gdHJhbnNsYXRlXG4gKiBAcGFyYW0ge3ZlYzN9IHYgdmVjdG9yIHRvIHRyYW5zbGF0ZSBieVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlKG91dCwgYSwgdikge1xuICBsZXQgeCA9IHZbMF0sIHkgPSB2WzFdLCB6ID0gdlsyXTtcbiAgbGV0IGEwMCwgYTAxLCBhMDIsIGEwMztcbiAgbGV0IGExMCwgYTExLCBhMTIsIGExMztcbiAgbGV0IGEyMCwgYTIxLCBhMjIsIGEyMztcblxuICBpZiAoYSA9PT0gb3V0KSB7XG4gICAgb3V0WzEyXSA9IGFbMF0gKiB4ICsgYVs0XSAqIHkgKyBhWzhdICogeiArIGFbMTJdO1xuICAgIG91dFsxM10gPSBhWzFdICogeCArIGFbNV0gKiB5ICsgYVs5XSAqIHogKyBhWzEzXTtcbiAgICBvdXRbMTRdID0gYVsyXSAqIHggKyBhWzZdICogeSArIGFbMTBdICogeiArIGFbMTRdO1xuICAgIG91dFsxNV0gPSBhWzNdICogeCArIGFbN10gKiB5ICsgYVsxMV0gKiB6ICsgYVsxNV07XG4gIH0gZWxzZSB7XG4gICAgYTAwID0gYVswXTsgYTAxID0gYVsxXTsgYTAyID0gYVsyXTsgYTAzID0gYVszXTtcbiAgICBhMTAgPSBhWzRdOyBhMTEgPSBhWzVdOyBhMTIgPSBhWzZdOyBhMTMgPSBhWzddO1xuICAgIGEyMCA9IGFbOF07IGEyMSA9IGFbOV07IGEyMiA9IGFbMTBdOyBhMjMgPSBhWzExXTtcblxuICAgIG91dFswXSA9IGEwMDsgb3V0WzFdID0gYTAxOyBvdXRbMl0gPSBhMDI7IG91dFszXSA9IGEwMztcbiAgICBvdXRbNF0gPSBhMTA7IG91dFs1XSA9IGExMTsgb3V0WzZdID0gYTEyOyBvdXRbN10gPSBhMTM7XG4gICAgb3V0WzhdID0gYTIwOyBvdXRbOV0gPSBhMjE7IG91dFsxMF0gPSBhMjI7IG91dFsxMV0gPSBhMjM7XG5cbiAgICBvdXRbMTJdID0gYTAwICogeCArIGExMCAqIHkgKyBhMjAgKiB6ICsgYVsxMl07XG4gICAgb3V0WzEzXSA9IGEwMSAqIHggKyBhMTEgKiB5ICsgYTIxICogeiArIGFbMTNdO1xuICAgIG91dFsxNF0gPSBhMDIgKiB4ICsgYTEyICogeSArIGEyMiAqIHogKyBhWzE0XTtcbiAgICBvdXRbMTVdID0gYTAzICogeCArIGExMyAqIHkgKyBhMjMgKiB6ICsgYVsxNV07XG4gIH1cblxuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNjYWxlcyB0aGUgbWF0NCBieSB0aGUgZGltZW5zaW9ucyBpbiB0aGUgZ2l2ZW4gdmVjMyBub3QgdXNpbmcgdmVjdG9yaXphdGlvblxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byBzY2FsZVxuICogQHBhcmFtIHt2ZWMzfSB2IHRoZSB2ZWMzIHRvIHNjYWxlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqKi9cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZShvdXQsIGEsIHYpIHtcbiAgbGV0IHggPSB2WzBdLCB5ID0gdlsxXSwgeiA9IHZbMl07XG5cbiAgb3V0WzBdID0gYVswXSAqIHg7XG4gIG91dFsxXSA9IGFbMV0gKiB4O1xuICBvdXRbMl0gPSBhWzJdICogeDtcbiAgb3V0WzNdID0gYVszXSAqIHg7XG4gIG91dFs0XSA9IGFbNF0gKiB5O1xuICBvdXRbNV0gPSBhWzVdICogeTtcbiAgb3V0WzZdID0gYVs2XSAqIHk7XG4gIG91dFs3XSA9IGFbN10gKiB5O1xuICBvdXRbOF0gPSBhWzhdICogejtcbiAgb3V0WzldID0gYVs5XSAqIHo7XG4gIG91dFsxMF0gPSBhWzEwXSAqIHo7XG4gIG91dFsxMV0gPSBhWzExXSAqIHo7XG4gIG91dFsxMl0gPSBhWzEyXTtcbiAgb3V0WzEzXSA9IGFbMTNdO1xuICBvdXRbMTRdID0gYVsxNF07XG4gIG91dFsxNV0gPSBhWzE1XTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSb3RhdGVzIGEgbWF0NCBieSB0aGUgZ2l2ZW4gYW5nbGUgYXJvdW5kIHRoZSBnaXZlbiBheGlzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEBwYXJhbSB7dmVjM30gYXhpcyB0aGUgYXhpcyB0byByb3RhdGUgYXJvdW5kXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGUob3V0LCBhLCByYWQsIGF4aXMpIHtcbiAgbGV0IHggPSBheGlzWzBdLCB5ID0gYXhpc1sxXSwgeiA9IGF4aXNbMl07XG4gIGxldCBsZW4gPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6KTtcbiAgbGV0IHMsIGMsIHQ7XG4gIGxldCBhMDAsIGEwMSwgYTAyLCBhMDM7XG4gIGxldCBhMTAsIGExMSwgYTEyLCBhMTM7XG4gIGxldCBhMjAsIGEyMSwgYTIyLCBhMjM7XG4gIGxldCBiMDAsIGIwMSwgYjAyO1xuICBsZXQgYjEwLCBiMTEsIGIxMjtcbiAgbGV0IGIyMCwgYjIxLCBiMjI7XG5cbiAgaWYgKE1hdGguYWJzKGxlbikgPCBnbE1hdHJpeC5FUFNJTE9OKSB7IHJldHVybiBudWxsOyB9XG5cbiAgbGVuID0gMSAvIGxlbjtcbiAgeCAqPSBsZW47XG4gIHkgKj0gbGVuO1xuICB6ICo9IGxlbjtcblxuICBzID0gTWF0aC5zaW4ocmFkKTtcbiAgYyA9IE1hdGguY29zKHJhZCk7XG4gIHQgPSAxIC0gYztcblxuICBhMDAgPSBhWzBdOyBhMDEgPSBhWzFdOyBhMDIgPSBhWzJdOyBhMDMgPSBhWzNdO1xuICBhMTAgPSBhWzRdOyBhMTEgPSBhWzVdOyBhMTIgPSBhWzZdOyBhMTMgPSBhWzddO1xuICBhMjAgPSBhWzhdOyBhMjEgPSBhWzldOyBhMjIgPSBhWzEwXTsgYTIzID0gYVsxMV07XG5cbiAgLy8gQ29uc3RydWN0IHRoZSBlbGVtZW50cyBvZiB0aGUgcm90YXRpb24gbWF0cml4XG4gIGIwMCA9IHggKiB4ICogdCArIGM7IGIwMSA9IHkgKiB4ICogdCArIHogKiBzOyBiMDIgPSB6ICogeCAqIHQgLSB5ICogcztcbiAgYjEwID0geCAqIHkgKiB0IC0geiAqIHM7IGIxMSA9IHkgKiB5ICogdCArIGM7IGIxMiA9IHogKiB5ICogdCArIHggKiBzO1xuICBiMjAgPSB4ICogeiAqIHQgKyB5ICogczsgYjIxID0geSAqIHogKiB0IC0geCAqIHM7IGIyMiA9IHogKiB6ICogdCArIGM7XG5cbiAgLy8gUGVyZm9ybSByb3RhdGlvbi1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cbiAgb3V0WzBdID0gYTAwICogYjAwICsgYTEwICogYjAxICsgYTIwICogYjAyO1xuICBvdXRbMV0gPSBhMDEgKiBiMDAgKyBhMTEgKiBiMDEgKyBhMjEgKiBiMDI7XG4gIG91dFsyXSA9IGEwMiAqIGIwMCArIGExMiAqIGIwMSArIGEyMiAqIGIwMjtcbiAgb3V0WzNdID0gYTAzICogYjAwICsgYTEzICogYjAxICsgYTIzICogYjAyO1xuICBvdXRbNF0gPSBhMDAgKiBiMTAgKyBhMTAgKiBiMTEgKyBhMjAgKiBiMTI7XG4gIG91dFs1XSA9IGEwMSAqIGIxMCArIGExMSAqIGIxMSArIGEyMSAqIGIxMjtcbiAgb3V0WzZdID0gYTAyICogYjEwICsgYTEyICogYjExICsgYTIyICogYjEyO1xuICBvdXRbN10gPSBhMDMgKiBiMTAgKyBhMTMgKiBiMTEgKyBhMjMgKiBiMTI7XG4gIG91dFs4XSA9IGEwMCAqIGIyMCArIGExMCAqIGIyMSArIGEyMCAqIGIyMjtcbiAgb3V0WzldID0gYTAxICogYjIwICsgYTExICogYjIxICsgYTIxICogYjIyO1xuICBvdXRbMTBdID0gYTAyICogYjIwICsgYTEyICogYjIxICsgYTIyICogYjIyO1xuICBvdXRbMTFdID0gYTAzICogYjIwICsgYTEzICogYjIxICsgYTIzICogYjIyO1xuXG4gIGlmIChhICE9PSBvdXQpIHsgLy8gSWYgdGhlIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gZGlmZmVyLCBjb3B5IHRoZSB1bmNoYW5nZWQgbGFzdCByb3dcbiAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICBvdXRbMTVdID0gYVsxNV07XG4gIH1cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSb3RhdGVzIGEgbWF0cml4IGJ5IHRoZSBnaXZlbiBhbmdsZSBhcm91bmQgdGhlIFggYXhpc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVYKG91dCwgYSwgcmFkKSB7XG4gIGxldCBzID0gTWF0aC5zaW4ocmFkKTtcbiAgbGV0IGMgPSBNYXRoLmNvcyhyYWQpO1xuICBsZXQgYTEwID0gYVs0XTtcbiAgbGV0IGExMSA9IGFbNV07XG4gIGxldCBhMTIgPSBhWzZdO1xuICBsZXQgYTEzID0gYVs3XTtcbiAgbGV0IGEyMCA9IGFbOF07XG4gIGxldCBhMjEgPSBhWzldO1xuICBsZXQgYTIyID0gYVsxMF07XG4gIGxldCBhMjMgPSBhWzExXTtcblxuICBpZiAoYSAhPT0gb3V0KSB7IC8vIElmIHRoZSBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIGRpZmZlciwgY29weSB0aGUgdW5jaGFuZ2VkIHJvd3NcbiAgICBvdXRbMF0gID0gYVswXTtcbiAgICBvdXRbMV0gID0gYVsxXTtcbiAgICBvdXRbMl0gID0gYVsyXTtcbiAgICBvdXRbM10gID0gYVszXTtcbiAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICBvdXRbMTVdID0gYVsxNV07XG4gIH1cblxuICAvLyBQZXJmb3JtIGF4aXMtc3BlY2lmaWMgbWF0cml4IG11bHRpcGxpY2F0aW9uXG4gIG91dFs0XSA9IGExMCAqIGMgKyBhMjAgKiBzO1xuICBvdXRbNV0gPSBhMTEgKiBjICsgYTIxICogcztcbiAgb3V0WzZdID0gYTEyICogYyArIGEyMiAqIHM7XG4gIG91dFs3XSA9IGExMyAqIGMgKyBhMjMgKiBzO1xuICBvdXRbOF0gPSBhMjAgKiBjIC0gYTEwICogcztcbiAgb3V0WzldID0gYTIxICogYyAtIGExMSAqIHM7XG4gIG91dFsxMF0gPSBhMjIgKiBjIC0gYTEyICogcztcbiAgb3V0WzExXSA9IGEyMyAqIGMgLSBhMTMgKiBzO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJvdGF0ZXMgYSBtYXRyaXggYnkgdGhlIGdpdmVuIGFuZ2xlIGFyb3VuZCB0aGUgWSBheGlzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVkob3V0LCBhLCByYWQpIHtcbiAgbGV0IHMgPSBNYXRoLnNpbihyYWQpO1xuICBsZXQgYyA9IE1hdGguY29zKHJhZCk7XG4gIGxldCBhMDAgPSBhWzBdO1xuICBsZXQgYTAxID0gYVsxXTtcbiAgbGV0IGEwMiA9IGFbMl07XG4gIGxldCBhMDMgPSBhWzNdO1xuICBsZXQgYTIwID0gYVs4XTtcbiAgbGV0IGEyMSA9IGFbOV07XG4gIGxldCBhMjIgPSBhWzEwXTtcbiAgbGV0IGEyMyA9IGFbMTFdO1xuXG4gIGlmIChhICE9PSBvdXQpIHsgLy8gSWYgdGhlIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gZGlmZmVyLCBjb3B5IHRoZSB1bmNoYW5nZWQgcm93c1xuICAgIG91dFs0XSAgPSBhWzRdO1xuICAgIG91dFs1XSAgPSBhWzVdO1xuICAgIG91dFs2XSAgPSBhWzZdO1xuICAgIG91dFs3XSAgPSBhWzddO1xuICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICBvdXRbMTNdID0gYVsxM107XG4gICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgfVxuXG4gIC8vIFBlcmZvcm0gYXhpcy1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cbiAgb3V0WzBdID0gYTAwICogYyAtIGEyMCAqIHM7XG4gIG91dFsxXSA9IGEwMSAqIGMgLSBhMjEgKiBzO1xuICBvdXRbMl0gPSBhMDIgKiBjIC0gYTIyICogcztcbiAgb3V0WzNdID0gYTAzICogYyAtIGEyMyAqIHM7XG4gIG91dFs4XSA9IGEwMCAqIHMgKyBhMjAgKiBjO1xuICBvdXRbOV0gPSBhMDEgKiBzICsgYTIxICogYztcbiAgb3V0WzEwXSA9IGEwMiAqIHMgKyBhMjIgKiBjO1xuICBvdXRbMTFdID0gYTAzICogcyArIGEyMyAqIGM7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUm90YXRlcyBhIG1hdHJpeCBieSB0aGUgZ2l2ZW4gYW5nbGUgYXJvdW5kIHRoZSBaIGF4aXNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWihvdXQsIGEsIHJhZCkge1xuICBsZXQgcyA9IE1hdGguc2luKHJhZCk7XG4gIGxldCBjID0gTWF0aC5jb3MocmFkKTtcbiAgbGV0IGEwMCA9IGFbMF07XG4gIGxldCBhMDEgPSBhWzFdO1xuICBsZXQgYTAyID0gYVsyXTtcbiAgbGV0IGEwMyA9IGFbM107XG4gIGxldCBhMTAgPSBhWzRdO1xuICBsZXQgYTExID0gYVs1XTtcbiAgbGV0IGExMiA9IGFbNl07XG4gIGxldCBhMTMgPSBhWzddO1xuXG4gIGlmIChhICE9PSBvdXQpIHsgLy8gSWYgdGhlIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gZGlmZmVyLCBjb3B5IHRoZSB1bmNoYW5nZWQgbGFzdCByb3dcbiAgICBvdXRbOF0gID0gYVs4XTtcbiAgICBvdXRbOV0gID0gYVs5XTtcbiAgICBvdXRbMTBdID0gYVsxMF07XG4gICAgb3V0WzExXSA9IGFbMTFdO1xuICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICBvdXRbMTNdID0gYVsxM107XG4gICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgfVxuXG4gIC8vIFBlcmZvcm0gYXhpcy1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cbiAgb3V0WzBdID0gYTAwICogYyArIGExMCAqIHM7XG4gIG91dFsxXSA9IGEwMSAqIGMgKyBhMTEgKiBzO1xuICBvdXRbMl0gPSBhMDIgKiBjICsgYTEyICogcztcbiAgb3V0WzNdID0gYTAzICogYyArIGExMyAqIHM7XG4gIG91dFs0XSA9IGExMCAqIGMgLSBhMDAgKiBzO1xuICBvdXRbNV0gPSBhMTEgKiBjIC0gYTAxICogcztcbiAgb3V0WzZdID0gYTEyICogYyAtIGEwMiAqIHM7XG4gIG91dFs3XSA9IGExMyAqIGMgLSBhMDMgKiBzO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIHZlY3RvciB0cmFuc2xhdGlvblxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0NC50cmFuc2xhdGUoZGVzdCwgZGVzdCwgdmVjKTtcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge3ZlYzN9IHYgVHJhbnNsYXRpb24gdmVjdG9yXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tVHJhbnNsYXRpb24ob3V0LCB2KSB7XG4gIG91dFswXSA9IDE7XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IDA7XG4gIG91dFs1XSA9IDE7XG4gIG91dFs2XSA9IDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IDA7XG4gIG91dFs5XSA9IDA7XG4gIG91dFsxMF0gPSAxO1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IHZbMF07XG4gIG91dFsxM10gPSB2WzFdO1xuICBvdXRbMTRdID0gdlsyXTtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgdmVjdG9yIHNjYWxpbmdcbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxuICpcbiAqICAgICBtYXQ0LmlkZW50aXR5KGRlc3QpO1xuICogICAgIG1hdDQuc2NhbGUoZGVzdCwgZGVzdCwgdmVjKTtcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge3ZlYzN9IHYgU2NhbGluZyB2ZWN0b3JcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21TY2FsaW5nKG91dCwgdikge1xuICBvdXRbMF0gPSB2WzBdO1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSAwO1xuICBvdXRbNV0gPSB2WzFdO1xuICBvdXRbNl0gPSAwO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSAwO1xuICBvdXRbOV0gPSAwO1xuICBvdXRbMTBdID0gdlsyXTtcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSAwO1xuICBvdXRbMTNdID0gMDtcbiAgb3V0WzE0XSA9IDA7XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIGdpdmVuIGFuZ2xlIGFyb3VuZCBhIGdpdmVuIGF4aXNcbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxuICpcbiAqICAgICBtYXQ0LmlkZW50aXR5KGRlc3QpO1xuICogICAgIG1hdDQucm90YXRlKGRlc3QsIGRlc3QsIHJhZCwgYXhpcyk7XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEBwYXJhbSB7dmVjM30gYXhpcyB0aGUgYXhpcyB0byByb3RhdGUgYXJvdW5kXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUm90YXRpb24ob3V0LCByYWQsIGF4aXMpIHtcbiAgbGV0IHggPSBheGlzWzBdLCB5ID0gYXhpc1sxXSwgeiA9IGF4aXNbMl07XG4gIGxldCBsZW4gPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6KTtcbiAgbGV0IHMsIGMsIHQ7XG5cbiAgaWYgKE1hdGguYWJzKGxlbikgPCBnbE1hdHJpeC5FUFNJTE9OKSB7IHJldHVybiBudWxsOyB9XG5cbiAgbGVuID0gMSAvIGxlbjtcbiAgeCAqPSBsZW47XG4gIHkgKj0gbGVuO1xuICB6ICo9IGxlbjtcblxuICBzID0gTWF0aC5zaW4ocmFkKTtcbiAgYyA9IE1hdGguY29zKHJhZCk7XG4gIHQgPSAxIC0gYztcblxuICAvLyBQZXJmb3JtIHJvdGF0aW9uLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuICBvdXRbMF0gPSB4ICogeCAqIHQgKyBjO1xuICBvdXRbMV0gPSB5ICogeCAqIHQgKyB6ICogcztcbiAgb3V0WzJdID0geiAqIHggKiB0IC0geSAqIHM7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IHggKiB5ICogdCAtIHogKiBzO1xuICBvdXRbNV0gPSB5ICogeSAqIHQgKyBjO1xuICBvdXRbNl0gPSB6ICogeSAqIHQgKyB4ICogcztcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0geCAqIHogKiB0ICsgeSAqIHM7XG4gIG91dFs5XSA9IHkgKiB6ICogdCAtIHggKiBzO1xuICBvdXRbMTBdID0geiAqIHogKiB0ICsgYztcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSAwO1xuICBvdXRbMTNdID0gMDtcbiAgb3V0WzE0XSA9IDA7XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSB0aGUgZ2l2ZW4gYW5nbGUgYXJvdW5kIHRoZSBYIGF4aXNcbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxuICpcbiAqICAgICBtYXQ0LmlkZW50aXR5KGRlc3QpO1xuICogICAgIG1hdDQucm90YXRlWChkZXN0LCBkZXN0LCByYWQpO1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tWFJvdGF0aW9uKG91dCwgcmFkKSB7XG4gIGxldCBzID0gTWF0aC5zaW4ocmFkKTtcbiAgbGV0IGMgPSBNYXRoLmNvcyhyYWQpO1xuXG4gIC8vIFBlcmZvcm0gYXhpcy1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cbiAgb3V0WzBdICA9IDE7XG4gIG91dFsxXSAgPSAwO1xuICBvdXRbMl0gID0gMDtcbiAgb3V0WzNdICA9IDA7XG4gIG91dFs0XSA9IDA7XG4gIG91dFs1XSA9IGM7XG4gIG91dFs2XSA9IHM7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IDA7XG4gIG91dFs5XSA9IC1zO1xuICBvdXRbMTBdID0gYztcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSAwO1xuICBvdXRbMTNdID0gMDtcbiAgb3V0WzE0XSA9IDA7XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSB0aGUgZ2l2ZW4gYW5nbGUgYXJvdW5kIHRoZSBZIGF4aXNcbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxuICpcbiAqICAgICBtYXQ0LmlkZW50aXR5KGRlc3QpO1xuICogICAgIG1hdDQucm90YXRlWShkZXN0LCBkZXN0LCByYWQpO1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tWVJvdGF0aW9uKG91dCwgcmFkKSB7XG4gIGxldCBzID0gTWF0aC5zaW4ocmFkKTtcbiAgbGV0IGMgPSBNYXRoLmNvcyhyYWQpO1xuXG4gIC8vIFBlcmZvcm0gYXhpcy1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cbiAgb3V0WzBdICA9IGM7XG4gIG91dFsxXSAgPSAwO1xuICBvdXRbMl0gID0gLXM7XG4gIG91dFszXSAgPSAwO1xuICBvdXRbNF0gPSAwO1xuICBvdXRbNV0gPSAxO1xuICBvdXRbNl0gPSAwO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSBzO1xuICBvdXRbOV0gPSAwO1xuICBvdXRbMTBdID0gYztcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSAwO1xuICBvdXRbMTNdID0gMDtcbiAgb3V0WzE0XSA9IDA7XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSB0aGUgZ2l2ZW4gYW5nbGUgYXJvdW5kIHRoZSBaIGF4aXNcbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxuICpcbiAqICAgICBtYXQ0LmlkZW50aXR5KGRlc3QpO1xuICogICAgIG1hdDQucm90YXRlWihkZXN0LCBkZXN0LCByYWQpO1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tWlJvdGF0aW9uKG91dCwgcmFkKSB7XG4gIGxldCBzID0gTWF0aC5zaW4ocmFkKTtcbiAgbGV0IGMgPSBNYXRoLmNvcyhyYWQpO1xuXG4gIC8vIFBlcmZvcm0gYXhpcy1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cbiAgb3V0WzBdICA9IGM7XG4gIG91dFsxXSAgPSBzO1xuICBvdXRbMl0gID0gMDtcbiAgb3V0WzNdICA9IDA7XG4gIG91dFs0XSA9IC1zO1xuICBvdXRbNV0gPSBjO1xuICBvdXRbNl0gPSAwO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSAwO1xuICBvdXRbOV0gPSAwO1xuICBvdXRbMTBdID0gMTtcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSAwO1xuICBvdXRbMTNdID0gMDtcbiAgb3V0WzE0XSA9IDA7XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIHF1YXRlcm5pb24gcm90YXRpb24gYW5kIHZlY3RvciB0cmFuc2xhdGlvblxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0NC50cmFuc2xhdGUoZGVzdCwgdmVjKTtcbiAqICAgICBsZXQgcXVhdE1hdCA9IG1hdDQuY3JlYXRlKCk7XG4gKiAgICAgcXVhdDQudG9NYXQ0KHF1YXQsIHF1YXRNYXQpO1xuICogICAgIG1hdDQubXVsdGlwbHkoZGVzdCwgcXVhdE1hdCk7XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtxdWF0NH0gcSBSb3RhdGlvbiBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge3ZlYzN9IHYgVHJhbnNsYXRpb24gdmVjdG9yXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUm90YXRpb25UcmFuc2xhdGlvbihvdXQsIHEsIHYpIHtcbiAgLy8gUXVhdGVybmlvbiBtYXRoXG4gIGxldCB4ID0gcVswXSwgeSA9IHFbMV0sIHogPSBxWzJdLCB3ID0gcVszXTtcbiAgbGV0IHgyID0geCArIHg7XG4gIGxldCB5MiA9IHkgKyB5O1xuICBsZXQgejIgPSB6ICsgejtcblxuICBsZXQgeHggPSB4ICogeDI7XG4gIGxldCB4eSA9IHggKiB5MjtcbiAgbGV0IHh6ID0geCAqIHoyO1xuICBsZXQgeXkgPSB5ICogeTI7XG4gIGxldCB5eiA9IHkgKiB6MjtcbiAgbGV0IHp6ID0geiAqIHoyO1xuICBsZXQgd3ggPSB3ICogeDI7XG4gIGxldCB3eSA9IHcgKiB5MjtcbiAgbGV0IHd6ID0gdyAqIHoyO1xuXG4gIG91dFswXSA9IDEgLSAoeXkgKyB6eik7XG4gIG91dFsxXSA9IHh5ICsgd3o7XG4gIG91dFsyXSA9IHh6IC0gd3k7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IHh5IC0gd3o7XG4gIG91dFs1XSA9IDEgLSAoeHggKyB6eik7XG4gIG91dFs2XSA9IHl6ICsgd3g7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IHh6ICsgd3k7XG4gIG91dFs5XSA9IHl6IC0gd3g7XG4gIG91dFsxMF0gPSAxIC0gKHh4ICsgeXkpO1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IHZbMF07XG4gIG91dFsxM10gPSB2WzFdO1xuICBvdXRbMTRdID0gdlsyXTtcbiAgb3V0WzE1XSA9IDE7XG5cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSB0cmFuc2xhdGlvbiB2ZWN0b3IgY29tcG9uZW50IG9mIGEgdHJhbnNmb3JtYXRpb25cbiAqICBtYXRyaXguIElmIGEgbWF0cml4IGlzIGJ1aWx0IHdpdGggZnJvbVJvdGF0aW9uVHJhbnNsYXRpb24sXG4gKiAgdGhlIHJldHVybmVkIHZlY3RvciB3aWxsIGJlIHRoZSBzYW1lIGFzIHRoZSB0cmFuc2xhdGlvbiB2ZWN0b3JcbiAqICBvcmlnaW5hbGx5IHN1cHBsaWVkLlxuICogQHBhcmFtICB7dmVjM30gb3V0IFZlY3RvciB0byByZWNlaXZlIHRyYW5zbGF0aW9uIGNvbXBvbmVudFxuICogQHBhcmFtICB7bWF0NH0gbWF0IE1hdHJpeCB0byBiZSBkZWNvbXBvc2VkIChpbnB1dClcbiAqIEByZXR1cm4ge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJhbnNsYXRpb24ob3V0LCBtYXQpIHtcbiAgb3V0WzBdID0gbWF0WzEyXTtcbiAgb3V0WzFdID0gbWF0WzEzXTtcbiAgb3V0WzJdID0gbWF0WzE0XTtcblxuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHNjYWxpbmcgZmFjdG9yIGNvbXBvbmVudCBvZiBhIHRyYW5zZm9ybWF0aW9uXG4gKiAgbWF0cml4LiBJZiBhIG1hdHJpeCBpcyBidWlsdCB3aXRoIGZyb21Sb3RhdGlvblRyYW5zbGF0aW9uU2NhbGVcbiAqICB3aXRoIGEgbm9ybWFsaXplZCBRdWF0ZXJuaW9uIHBhcmFtdGVyLCB0aGUgcmV0dXJuZWQgdmVjdG9yIHdpbGwgYmVcbiAqICB0aGUgc2FtZSBhcyB0aGUgc2NhbGluZyB2ZWN0b3JcbiAqICBvcmlnaW5hbGx5IHN1cHBsaWVkLlxuICogQHBhcmFtICB7dmVjM30gb3V0IFZlY3RvciB0byByZWNlaXZlIHNjYWxpbmcgZmFjdG9yIGNvbXBvbmVudFxuICogQHBhcmFtICB7bWF0NH0gbWF0IE1hdHJpeCB0byBiZSBkZWNvbXBvc2VkIChpbnB1dClcbiAqIEByZXR1cm4ge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NhbGluZyhvdXQsIG1hdCkge1xuICBsZXQgbTExID0gbWF0WzBdO1xuICBsZXQgbTEyID0gbWF0WzFdO1xuICBsZXQgbTEzID0gbWF0WzJdO1xuICBsZXQgbTIxID0gbWF0WzRdO1xuICBsZXQgbTIyID0gbWF0WzVdO1xuICBsZXQgbTIzID0gbWF0WzZdO1xuICBsZXQgbTMxID0gbWF0WzhdO1xuICBsZXQgbTMyID0gbWF0WzldO1xuICBsZXQgbTMzID0gbWF0WzEwXTtcblxuICBvdXRbMF0gPSBNYXRoLnNxcnQobTExICogbTExICsgbTEyICogbTEyICsgbTEzICogbTEzKTtcbiAgb3V0WzFdID0gTWF0aC5zcXJ0KG0yMSAqIG0yMSArIG0yMiAqIG0yMiArIG0yMyAqIG0yMyk7XG4gIG91dFsyXSA9IE1hdGguc3FydChtMzEgKiBtMzEgKyBtMzIgKiBtMzIgKyBtMzMgKiBtMzMpO1xuXG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHF1YXRlcm5pb24gcmVwcmVzZW50aW5nIHRoZSByb3RhdGlvbmFsIGNvbXBvbmVudFxuICogIG9mIGEgdHJhbnNmb3JtYXRpb24gbWF0cml4LiBJZiBhIG1hdHJpeCBpcyBidWlsdCB3aXRoXG4gKiAgZnJvbVJvdGF0aW9uVHJhbnNsYXRpb24sIHRoZSByZXR1cm5lZCBxdWF0ZXJuaW9uIHdpbGwgYmUgdGhlXG4gKiAgc2FtZSBhcyB0aGUgcXVhdGVybmlvbiBvcmlnaW5hbGx5IHN1cHBsaWVkLlxuICogQHBhcmFtIHtxdWF0fSBvdXQgUXVhdGVybmlvbiB0byByZWNlaXZlIHRoZSByb3RhdGlvbiBjb21wb25lbnRcbiAqIEBwYXJhbSB7bWF0NH0gbWF0IE1hdHJpeCB0byBiZSBkZWNvbXBvc2VkIChpbnB1dClcbiAqIEByZXR1cm4ge3F1YXR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um90YXRpb24ob3V0LCBtYXQpIHtcbiAgLy8gQWxnb3JpdGhtIHRha2VuIGZyb20gaHR0cDovL3d3dy5ldWNsaWRlYW5zcGFjZS5jb20vbWF0aHMvZ2VvbWV0cnkvcm90YXRpb25zL2NvbnZlcnNpb25zL21hdHJpeFRvUXVhdGVybmlvbi9pbmRleC5odG1cbiAgbGV0IHRyYWNlID0gbWF0WzBdICsgbWF0WzVdICsgbWF0WzEwXTtcbiAgbGV0IFMgPSAwO1xuXG4gIGlmICh0cmFjZSA+IDApIHtcbiAgICBTID0gTWF0aC5zcXJ0KHRyYWNlICsgMS4wKSAqIDI7XG4gICAgb3V0WzNdID0gMC4yNSAqIFM7XG4gICAgb3V0WzBdID0gKG1hdFs2XSAtIG1hdFs5XSkgLyBTO1xuICAgIG91dFsxXSA9IChtYXRbOF0gLSBtYXRbMl0pIC8gUztcbiAgICBvdXRbMl0gPSAobWF0WzFdIC0gbWF0WzRdKSAvIFM7XG4gIH0gZWxzZSBpZiAoKG1hdFswXSA+IG1hdFs1XSkmKG1hdFswXSA+IG1hdFsxMF0pKSB7XG4gICAgUyA9IE1hdGguc3FydCgxLjAgKyBtYXRbMF0gLSBtYXRbNV0gLSBtYXRbMTBdKSAqIDI7XG4gICAgb3V0WzNdID0gKG1hdFs2XSAtIG1hdFs5XSkgLyBTO1xuICAgIG91dFswXSA9IDAuMjUgKiBTO1xuICAgIG91dFsxXSA9IChtYXRbMV0gKyBtYXRbNF0pIC8gUztcbiAgICBvdXRbMl0gPSAobWF0WzhdICsgbWF0WzJdKSAvIFM7XG4gIH0gZWxzZSBpZiAobWF0WzVdID4gbWF0WzEwXSkge1xuICAgIFMgPSBNYXRoLnNxcnQoMS4wICsgbWF0WzVdIC0gbWF0WzBdIC0gbWF0WzEwXSkgKiAyO1xuICAgIG91dFszXSA9IChtYXRbOF0gLSBtYXRbMl0pIC8gUztcbiAgICBvdXRbMF0gPSAobWF0WzFdICsgbWF0WzRdKSAvIFM7XG4gICAgb3V0WzFdID0gMC4yNSAqIFM7XG4gICAgb3V0WzJdID0gKG1hdFs2XSArIG1hdFs5XSkgLyBTO1xuICB9IGVsc2Uge1xuICAgIFMgPSBNYXRoLnNxcnQoMS4wICsgbWF0WzEwXSAtIG1hdFswXSAtIG1hdFs1XSkgKiAyO1xuICAgIG91dFszXSA9IChtYXRbMV0gLSBtYXRbNF0pIC8gUztcbiAgICBvdXRbMF0gPSAobWF0WzhdICsgbWF0WzJdKSAvIFM7XG4gICAgb3V0WzFdID0gKG1hdFs2XSArIG1hdFs5XSkgLyBTO1xuICAgIG91dFsyXSA9IDAuMjUgKiBTO1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSBxdWF0ZXJuaW9uIHJvdGF0aW9uLCB2ZWN0b3IgdHJhbnNsYXRpb24gYW5kIHZlY3RvciBzY2FsZVxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0NC50cmFuc2xhdGUoZGVzdCwgdmVjKTtcbiAqICAgICBsZXQgcXVhdE1hdCA9IG1hdDQuY3JlYXRlKCk7XG4gKiAgICAgcXVhdDQudG9NYXQ0KHF1YXQsIHF1YXRNYXQpO1xuICogICAgIG1hdDQubXVsdGlwbHkoZGVzdCwgcXVhdE1hdCk7XG4gKiAgICAgbWF0NC5zY2FsZShkZXN0LCBzY2FsZSlcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge3F1YXQ0fSBxIFJvdGF0aW9uIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7dmVjM30gdiBUcmFuc2xhdGlvbiB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gcyBTY2FsaW5nIHZlY3RvclxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVJvdGF0aW9uVHJhbnNsYXRpb25TY2FsZShvdXQsIHEsIHYsIHMpIHtcbiAgLy8gUXVhdGVybmlvbiBtYXRoXG4gIGxldCB4ID0gcVswXSwgeSA9IHFbMV0sIHogPSBxWzJdLCB3ID0gcVszXTtcbiAgbGV0IHgyID0geCArIHg7XG4gIGxldCB5MiA9IHkgKyB5O1xuICBsZXQgejIgPSB6ICsgejtcblxuICBsZXQgeHggPSB4ICogeDI7XG4gIGxldCB4eSA9IHggKiB5MjtcbiAgbGV0IHh6ID0geCAqIHoyO1xuICBsZXQgeXkgPSB5ICogeTI7XG4gIGxldCB5eiA9IHkgKiB6MjtcbiAgbGV0IHp6ID0geiAqIHoyO1xuICBsZXQgd3ggPSB3ICogeDI7XG4gIGxldCB3eSA9IHcgKiB5MjtcbiAgbGV0IHd6ID0gdyAqIHoyO1xuICBsZXQgc3ggPSBzWzBdO1xuICBsZXQgc3kgPSBzWzFdO1xuICBsZXQgc3ogPSBzWzJdO1xuXG4gIG91dFswXSA9ICgxIC0gKHl5ICsgenopKSAqIHN4O1xuICBvdXRbMV0gPSAoeHkgKyB3eikgKiBzeDtcbiAgb3V0WzJdID0gKHh6IC0gd3kpICogc3g7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9ICh4eSAtIHd6KSAqIHN5O1xuICBvdXRbNV0gPSAoMSAtICh4eCArIHp6KSkgKiBzeTtcbiAgb3V0WzZdID0gKHl6ICsgd3gpICogc3k7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9ICh4eiArIHd5KSAqIHN6O1xuICBvdXRbOV0gPSAoeXogLSB3eCkgKiBzejtcbiAgb3V0WzEwXSA9ICgxIC0gKHh4ICsgeXkpKSAqIHN6O1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IHZbMF07XG4gIG91dFsxM10gPSB2WzFdO1xuICBvdXRbMTRdID0gdlsyXTtcbiAgb3V0WzE1XSA9IDE7XG5cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSBxdWF0ZXJuaW9uIHJvdGF0aW9uLCB2ZWN0b3IgdHJhbnNsYXRpb24gYW5kIHZlY3RvciBzY2FsZSwgcm90YXRpbmcgYW5kIHNjYWxpbmcgYXJvdW5kIHRoZSBnaXZlbiBvcmlnaW5cbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxuICpcbiAqICAgICBtYXQ0LmlkZW50aXR5KGRlc3QpO1xuICogICAgIG1hdDQudHJhbnNsYXRlKGRlc3QsIHZlYyk7XG4gKiAgICAgbWF0NC50cmFuc2xhdGUoZGVzdCwgb3JpZ2luKTtcbiAqICAgICBsZXQgcXVhdE1hdCA9IG1hdDQuY3JlYXRlKCk7XG4gKiAgICAgcXVhdDQudG9NYXQ0KHF1YXQsIHF1YXRNYXQpO1xuICogICAgIG1hdDQubXVsdGlwbHkoZGVzdCwgcXVhdE1hdCk7XG4gKiAgICAgbWF0NC5zY2FsZShkZXN0LCBzY2FsZSlcbiAqICAgICBtYXQ0LnRyYW5zbGF0ZShkZXN0LCBuZWdhdGl2ZU9yaWdpbik7XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtxdWF0NH0gcSBSb3RhdGlvbiBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge3ZlYzN9IHYgVHJhbnNsYXRpb24gdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IHMgU2NhbGluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gbyBUaGUgb3JpZ2luIHZlY3RvciBhcm91bmQgd2hpY2ggdG8gc2NhbGUgYW5kIHJvdGF0ZVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVJvdGF0aW9uVHJhbnNsYXRpb25TY2FsZU9yaWdpbihvdXQsIHEsIHYsIHMsIG8pIHtcbiAgLy8gUXVhdGVybmlvbiBtYXRoXG4gIGxldCB4ID0gcVswXSwgeSA9IHFbMV0sIHogPSBxWzJdLCB3ID0gcVszXTtcbiAgbGV0IHgyID0geCArIHg7XG4gIGxldCB5MiA9IHkgKyB5O1xuICBsZXQgejIgPSB6ICsgejtcblxuICBsZXQgeHggPSB4ICogeDI7XG4gIGxldCB4eSA9IHggKiB5MjtcbiAgbGV0IHh6ID0geCAqIHoyO1xuICBsZXQgeXkgPSB5ICogeTI7XG4gIGxldCB5eiA9IHkgKiB6MjtcbiAgbGV0IHp6ID0geiAqIHoyO1xuICBsZXQgd3ggPSB3ICogeDI7XG4gIGxldCB3eSA9IHcgKiB5MjtcbiAgbGV0IHd6ID0gdyAqIHoyO1xuXG4gIGxldCBzeCA9IHNbMF07XG4gIGxldCBzeSA9IHNbMV07XG4gIGxldCBzeiA9IHNbMl07XG5cbiAgbGV0IG94ID0gb1swXTtcbiAgbGV0IG95ID0gb1sxXTtcbiAgbGV0IG96ID0gb1syXTtcblxuICBvdXRbMF0gPSAoMSAtICh5eSArIHp6KSkgKiBzeDtcbiAgb3V0WzFdID0gKHh5ICsgd3opICogc3g7XG4gIG91dFsyXSA9ICh4eiAtIHd5KSAqIHN4O1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSAoeHkgLSB3eikgKiBzeTtcbiAgb3V0WzVdID0gKDEgLSAoeHggKyB6eikpICogc3k7XG4gIG91dFs2XSA9ICh5eiArIHd4KSAqIHN5O1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSAoeHogKyB3eSkgKiBzejtcbiAgb3V0WzldID0gKHl6IC0gd3gpICogc3o7XG4gIG91dFsxMF0gPSAoMSAtICh4eCArIHl5KSkgKiBzejtcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSB2WzBdICsgb3ggLSAob3V0WzBdICogb3ggKyBvdXRbNF0gKiBveSArIG91dFs4XSAqIG96KTtcbiAgb3V0WzEzXSA9IHZbMV0gKyBveSAtIChvdXRbMV0gKiBveCArIG91dFs1XSAqIG95ICsgb3V0WzldICogb3opO1xuICBvdXRbMTRdID0gdlsyXSArIG96IC0gKG91dFsyXSAqIG94ICsgb3V0WzZdICogb3kgKyBvdXRbMTBdICogb3opO1xuICBvdXRbMTVdID0gMTtcblxuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgYSA0eDQgbWF0cml4IGZyb20gdGhlIGdpdmVuIHF1YXRlcm5pb25cbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge3F1YXR9IHEgUXVhdGVybmlvbiB0byBjcmVhdGUgbWF0cml4IGZyb21cbiAqXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUXVhdChvdXQsIHEpIHtcbiAgbGV0IHggPSBxWzBdLCB5ID0gcVsxXSwgeiA9IHFbMl0sIHcgPSBxWzNdO1xuICBsZXQgeDIgPSB4ICsgeDtcbiAgbGV0IHkyID0geSArIHk7XG4gIGxldCB6MiA9IHogKyB6O1xuXG4gIGxldCB4eCA9IHggKiB4MjtcbiAgbGV0IHl4ID0geSAqIHgyO1xuICBsZXQgeXkgPSB5ICogeTI7XG4gIGxldCB6eCA9IHogKiB4MjtcbiAgbGV0IHp5ID0geiAqIHkyO1xuICBsZXQgenogPSB6ICogejI7XG4gIGxldCB3eCA9IHcgKiB4MjtcbiAgbGV0IHd5ID0gdyAqIHkyO1xuICBsZXQgd3ogPSB3ICogejI7XG5cbiAgb3V0WzBdID0gMSAtIHl5IC0geno7XG4gIG91dFsxXSA9IHl4ICsgd3o7XG4gIG91dFsyXSA9IHp4IC0gd3k7XG4gIG91dFszXSA9IDA7XG5cbiAgb3V0WzRdID0geXggLSB3ejtcbiAgb3V0WzVdID0gMSAtIHh4IC0geno7XG4gIG91dFs2XSA9IHp5ICsgd3g7XG4gIG91dFs3XSA9IDA7XG5cbiAgb3V0WzhdID0genggKyB3eTtcbiAgb3V0WzldID0genkgLSB3eDtcbiAgb3V0WzEwXSA9IDEgLSB4eCAtIHl5O1xuICBvdXRbMTFdID0gMDtcblxuICBvdXRbMTJdID0gMDtcbiAgb3V0WzEzXSA9IDA7XG4gIG91dFsxNF0gPSAwO1xuICBvdXRbMTVdID0gMTtcblxuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIGZydXN0dW0gbWF0cml4IHdpdGggdGhlIGdpdmVuIGJvdW5kc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cbiAqIEBwYXJhbSB7TnVtYmVyfSBsZWZ0IExlZnQgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7TnVtYmVyfSByaWdodCBSaWdodCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtOdW1iZXJ9IGJvdHRvbSBCb3R0b20gYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7TnVtYmVyfSB0b3AgVG9wIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge051bWJlcn0gbmVhciBOZWFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge051bWJlcn0gZmFyIEZhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJ1c3R1bShvdXQsIGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhciwgZmFyKSB7XG4gIGxldCBybCA9IDEgLyAocmlnaHQgLSBsZWZ0KTtcbiAgbGV0IHRiID0gMSAvICh0b3AgLSBib3R0b20pO1xuICBsZXQgbmYgPSAxIC8gKG5lYXIgLSBmYXIpO1xuICBvdXRbMF0gPSAobmVhciAqIDIpICogcmw7XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IDA7XG4gIG91dFs1XSA9IChuZWFyICogMikgKiB0YjtcbiAgb3V0WzZdID0gMDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gKHJpZ2h0ICsgbGVmdCkgKiBybDtcbiAgb3V0WzldID0gKHRvcCArIGJvdHRvbSkgKiB0YjtcbiAgb3V0WzEwXSA9IChmYXIgKyBuZWFyKSAqIG5mO1xuICBvdXRbMTFdID0gLTE7XG4gIG91dFsxMl0gPSAwO1xuICBvdXRbMTNdID0gMDtcbiAgb3V0WzE0XSA9IChmYXIgKiBuZWFyICogMikgKiBuZjtcbiAgb3V0WzE1XSA9IDA7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgcGVyc3BlY3RpdmUgcHJvamVjdGlvbiBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gYm91bmRzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xuICogQHBhcmFtIHtudW1iZXJ9IGZvdnkgVmVydGljYWwgZmllbGQgb2YgdmlldyBpbiByYWRpYW5zXG4gKiBAcGFyYW0ge251bWJlcn0gYXNwZWN0IEFzcGVjdCByYXRpby4gdHlwaWNhbGx5IHZpZXdwb3J0IHdpZHRoL2hlaWdodFxuICogQHBhcmFtIHtudW1iZXJ9IG5lYXIgTmVhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IGZhciBGYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBlcnNwZWN0aXZlKG91dCwgZm92eSwgYXNwZWN0LCBuZWFyLCBmYXIpIHtcbiAgbGV0IGYgPSAxLjAgLyBNYXRoLnRhbihmb3Z5IC8gMik7XG4gIGxldCBuZiA9IDEgLyAobmVhciAtIGZhcik7XG4gIG91dFswXSA9IGYgLyBhc3BlY3Q7XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IDA7XG4gIG91dFs1XSA9IGY7XG4gIG91dFs2XSA9IDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IDA7XG4gIG91dFs5XSA9IDA7XG4gIG91dFsxMF0gPSAoZmFyICsgbmVhcikgKiBuZjtcbiAgb3V0WzExXSA9IC0xO1xuICBvdXRbMTJdID0gMDtcbiAgb3V0WzEzXSA9IDA7XG4gIG91dFsxNF0gPSAoMiAqIGZhciAqIG5lYXIpICogbmY7XG4gIG91dFsxNV0gPSAwO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHBlcnNwZWN0aXZlIHByb2plY3Rpb24gbWF0cml4IHdpdGggdGhlIGdpdmVuIGZpZWxkIG9mIHZpZXcuXG4gKiBUaGlzIGlzIHByaW1hcmlseSB1c2VmdWwgZm9yIGdlbmVyYXRpbmcgcHJvamVjdGlvbiBtYXRyaWNlcyB0byBiZSB1c2VkXG4gKiB3aXRoIHRoZSBzdGlsbCBleHBlcmllbWVudGFsIFdlYlZSIEFQSS5cbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXG4gKiBAcGFyYW0ge09iamVjdH0gZm92IE9iamVjdCBjb250YWluaW5nIHRoZSBmb2xsb3dpbmcgdmFsdWVzOiB1cERlZ3JlZXMsIGRvd25EZWdyZWVzLCBsZWZ0RGVncmVlcywgcmlnaHREZWdyZWVzXG4gKiBAcGFyYW0ge251bWJlcn0gbmVhciBOZWFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gZmFyIEZhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcGVyc3BlY3RpdmVGcm9tRmllbGRPZlZpZXcob3V0LCBmb3YsIG5lYXIsIGZhcikge1xuICBsZXQgdXBUYW4gPSBNYXRoLnRhbihmb3YudXBEZWdyZWVzICogTWF0aC5QSS8xODAuMCk7XG4gIGxldCBkb3duVGFuID0gTWF0aC50YW4oZm92LmRvd25EZWdyZWVzICogTWF0aC5QSS8xODAuMCk7XG4gIGxldCBsZWZ0VGFuID0gTWF0aC50YW4oZm92LmxlZnREZWdyZWVzICogTWF0aC5QSS8xODAuMCk7XG4gIGxldCByaWdodFRhbiA9IE1hdGgudGFuKGZvdi5yaWdodERlZ3JlZXMgKiBNYXRoLlBJLzE4MC4wKTtcbiAgbGV0IHhTY2FsZSA9IDIuMCAvIChsZWZ0VGFuICsgcmlnaHRUYW4pO1xuICBsZXQgeVNjYWxlID0gMi4wIC8gKHVwVGFuICsgZG93blRhbik7XG5cbiAgb3V0WzBdID0geFNjYWxlO1xuICBvdXRbMV0gPSAwLjA7XG4gIG91dFsyXSA9IDAuMDtcbiAgb3V0WzNdID0gMC4wO1xuICBvdXRbNF0gPSAwLjA7XG4gIG91dFs1XSA9IHlTY2FsZTtcbiAgb3V0WzZdID0gMC4wO1xuICBvdXRbN10gPSAwLjA7XG4gIG91dFs4XSA9IC0oKGxlZnRUYW4gLSByaWdodFRhbikgKiB4U2NhbGUgKiAwLjUpO1xuICBvdXRbOV0gPSAoKHVwVGFuIC0gZG93blRhbikgKiB5U2NhbGUgKiAwLjUpO1xuICBvdXRbMTBdID0gZmFyIC8gKG5lYXIgLSBmYXIpO1xuICBvdXRbMTFdID0gLTEuMDtcbiAgb3V0WzEyXSA9IDAuMDtcbiAgb3V0WzEzXSA9IDAuMDtcbiAgb3V0WzE0XSA9IChmYXIgKiBuZWFyKSAvIChuZWFyIC0gZmFyKTtcbiAgb3V0WzE1XSA9IDAuMDtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBvcnRob2dvbmFsIHByb2plY3Rpb24gbWF0cml4IHdpdGggdGhlIGdpdmVuIGJvdW5kc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cbiAqIEBwYXJhbSB7bnVtYmVyfSBsZWZ0IExlZnQgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSByaWdodCBSaWdodCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IGJvdHRvbSBCb3R0b20gYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSB0b3AgVG9wIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gbmVhciBOZWFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gZmFyIEZhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gb3J0aG8ob3V0LCBsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXIsIGZhcikge1xuICBsZXQgbHIgPSAxIC8gKGxlZnQgLSByaWdodCk7XG4gIGxldCBidCA9IDEgLyAoYm90dG9tIC0gdG9wKTtcbiAgbGV0IG5mID0gMSAvIChuZWFyIC0gZmFyKTtcbiAgb3V0WzBdID0gLTIgKiBscjtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gMDtcbiAgb3V0WzVdID0gLTIgKiBidDtcbiAgb3V0WzZdID0gMDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gMDtcbiAgb3V0WzldID0gMDtcbiAgb3V0WzEwXSA9IDIgKiBuZjtcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSAobGVmdCArIHJpZ2h0KSAqIGxyO1xuICBvdXRbMTNdID0gKHRvcCArIGJvdHRvbSkgKiBidDtcbiAgb3V0WzE0XSA9IChmYXIgKyBuZWFyKSAqIG5mO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBsb29rLWF0IG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBleWUgcG9zaXRpb24sIGZvY2FsIHBvaW50LCBhbmQgdXAgYXhpc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cbiAqIEBwYXJhbSB7dmVjM30gZXllIFBvc2l0aW9uIG9mIHRoZSB2aWV3ZXJcbiAqIEBwYXJhbSB7dmVjM30gY2VudGVyIFBvaW50IHRoZSB2aWV3ZXIgaXMgbG9va2luZyBhdFxuICogQHBhcmFtIHt2ZWMzfSB1cCB2ZWMzIHBvaW50aW5nIHVwXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb29rQXQob3V0LCBleWUsIGNlbnRlciwgdXApIHtcbiAgbGV0IHgwLCB4MSwgeDIsIHkwLCB5MSwgeTIsIHowLCB6MSwgejIsIGxlbjtcbiAgbGV0IGV5ZXggPSBleWVbMF07XG4gIGxldCBleWV5ID0gZXllWzFdO1xuICBsZXQgZXlleiA9IGV5ZVsyXTtcbiAgbGV0IHVweCA9IHVwWzBdO1xuICBsZXQgdXB5ID0gdXBbMV07XG4gIGxldCB1cHogPSB1cFsyXTtcbiAgbGV0IGNlbnRlcnggPSBjZW50ZXJbMF07XG4gIGxldCBjZW50ZXJ5ID0gY2VudGVyWzFdO1xuICBsZXQgY2VudGVyeiA9IGNlbnRlclsyXTtcblxuICBpZiAoTWF0aC5hYnMoZXlleCAtIGNlbnRlcngpIDwgZ2xNYXRyaXguRVBTSUxPTiAmJlxuICAgICAgTWF0aC5hYnMoZXlleSAtIGNlbnRlcnkpIDwgZ2xNYXRyaXguRVBTSUxPTiAmJlxuICAgICAgTWF0aC5hYnMoZXlleiAtIGNlbnRlcnopIDwgZ2xNYXRyaXguRVBTSUxPTikge1xuICAgIHJldHVybiBtYXQ0LmlkZW50aXR5KG91dCk7XG4gIH1cblxuICB6MCA9IGV5ZXggLSBjZW50ZXJ4O1xuICB6MSA9IGV5ZXkgLSBjZW50ZXJ5O1xuICB6MiA9IGV5ZXogLSBjZW50ZXJ6O1xuXG4gIGxlbiA9IDEgLyBNYXRoLnNxcnQoejAgKiB6MCArIHoxICogejEgKyB6MiAqIHoyKTtcbiAgejAgKj0gbGVuO1xuICB6MSAqPSBsZW47XG4gIHoyICo9IGxlbjtcblxuICB4MCA9IHVweSAqIHoyIC0gdXB6ICogejE7XG4gIHgxID0gdXB6ICogejAgLSB1cHggKiB6MjtcbiAgeDIgPSB1cHggKiB6MSAtIHVweSAqIHowO1xuICBsZW4gPSBNYXRoLnNxcnQoeDAgKiB4MCArIHgxICogeDEgKyB4MiAqIHgyKTtcbiAgaWYgKCFsZW4pIHtcbiAgICB4MCA9IDA7XG4gICAgeDEgPSAwO1xuICAgIHgyID0gMDtcbiAgfSBlbHNlIHtcbiAgICBsZW4gPSAxIC8gbGVuO1xuICAgIHgwICo9IGxlbjtcbiAgICB4MSAqPSBsZW47XG4gICAgeDIgKj0gbGVuO1xuICB9XG5cbiAgeTAgPSB6MSAqIHgyIC0gejIgKiB4MTtcbiAgeTEgPSB6MiAqIHgwIC0gejAgKiB4MjtcbiAgeTIgPSB6MCAqIHgxIC0gejEgKiB4MDtcblxuICBsZW4gPSBNYXRoLnNxcnQoeTAgKiB5MCArIHkxICogeTEgKyB5MiAqIHkyKTtcbiAgaWYgKCFsZW4pIHtcbiAgICB5MCA9IDA7XG4gICAgeTEgPSAwO1xuICAgIHkyID0gMDtcbiAgfSBlbHNlIHtcbiAgICBsZW4gPSAxIC8gbGVuO1xuICAgIHkwICo9IGxlbjtcbiAgICB5MSAqPSBsZW47XG4gICAgeTIgKj0gbGVuO1xuICB9XG5cbiAgb3V0WzBdID0geDA7XG4gIG91dFsxXSA9IHkwO1xuICBvdXRbMl0gPSB6MDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0geDE7XG4gIG91dFs1XSA9IHkxO1xuICBvdXRbNl0gPSB6MTtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0geDI7XG4gIG91dFs5XSA9IHkyO1xuICBvdXRbMTBdID0gejI7XG4gIG91dFsxMV0gPSAwO1xuICBvdXRbMTJdID0gLSh4MCAqIGV5ZXggKyB4MSAqIGV5ZXkgKyB4MiAqIGV5ZXopO1xuICBvdXRbMTNdID0gLSh5MCAqIGV5ZXggKyB5MSAqIGV5ZXkgKyB5MiAqIGV5ZXopO1xuICBvdXRbMTRdID0gLSh6MCAqIGV5ZXggKyB6MSAqIGV5ZXkgKyB6MiAqIGV5ZXopO1xuICBvdXRbMTVdID0gMTtcblxuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIG1hdHJpeCB0aGF0IG1ha2VzIHNvbWV0aGluZyBsb29rIGF0IHNvbWV0aGluZyBlbHNlLlxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cbiAqIEBwYXJhbSB7dmVjM30gZXllIFBvc2l0aW9uIG9mIHRoZSB2aWV3ZXJcbiAqIEBwYXJhbSB7dmVjM30gY2VudGVyIFBvaW50IHRoZSB2aWV3ZXIgaXMgbG9va2luZyBhdFxuICogQHBhcmFtIHt2ZWMzfSB1cCB2ZWMzIHBvaW50aW5nIHVwXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0YXJnZXRUbyhvdXQsIGV5ZSwgdGFyZ2V0LCB1cCkge1xuICBsZXQgZXlleCA9IGV5ZVswXSxcbiAgICAgIGV5ZXkgPSBleWVbMV0sXG4gICAgICBleWV6ID0gZXllWzJdLFxuICAgICAgdXB4ID0gdXBbMF0sXG4gICAgICB1cHkgPSB1cFsxXSxcbiAgICAgIHVweiA9IHVwWzJdO1xuXG4gIGxldCB6MCA9IGV5ZXggLSB0YXJnZXRbMF0sXG4gICAgICB6MSA9IGV5ZXkgLSB0YXJnZXRbMV0sXG4gICAgICB6MiA9IGV5ZXogLSB0YXJnZXRbMl07XG5cbiAgbGV0IGxlbiA9IHowKnowICsgejEqejEgKyB6Mip6MjtcbiAgaWYgKGxlbiA+IDApIHtcbiAgICBsZW4gPSAxIC8gTWF0aC5zcXJ0KGxlbik7XG4gICAgejAgKj0gbGVuO1xuICAgIHoxICo9IGxlbjtcbiAgICB6MiAqPSBsZW47XG4gIH1cblxuICBsZXQgeDAgPSB1cHkgKiB6MiAtIHVweiAqIHoxLFxuICAgICAgeDEgPSB1cHogKiB6MCAtIHVweCAqIHoyLFxuICAgICAgeDIgPSB1cHggKiB6MSAtIHVweSAqIHowO1xuXG4gIG91dFswXSA9IHgwO1xuICBvdXRbMV0gPSB4MTtcbiAgb3V0WzJdID0geDI7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IHoxICogeDIgLSB6MiAqIHgxO1xuICBvdXRbNV0gPSB6MiAqIHgwIC0gejAgKiB4MjtcbiAgb3V0WzZdID0gejAgKiB4MSAtIHoxICogeDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IHowO1xuICBvdXRbOV0gPSB6MTtcbiAgb3V0WzEwXSA9IHoyO1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IGV5ZXg7XG4gIG91dFsxM10gPSBleWV5O1xuICBvdXRbMTRdID0gZXllejtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59O1xuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBtYXQ0XG4gKlxuICogQHBhcmFtIHttYXQ0fSBhIG1hdHJpeCB0byByZXByZXNlbnQgYXMgYSBzdHJpbmdcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgbWF0cml4XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHIoYSkge1xuICByZXR1cm4gJ21hdDQoJyArIGFbMF0gKyAnLCAnICsgYVsxXSArICcsICcgKyBhWzJdICsgJywgJyArIGFbM10gKyAnLCAnICtcbiAgICAgICAgICBhWzRdICsgJywgJyArIGFbNV0gKyAnLCAnICsgYVs2XSArICcsICcgKyBhWzddICsgJywgJyArXG4gICAgICAgICAgYVs4XSArICcsICcgKyBhWzldICsgJywgJyArIGFbMTBdICsgJywgJyArIGFbMTFdICsgJywgJyArXG4gICAgICAgICAgYVsxMl0gKyAnLCAnICsgYVsxM10gKyAnLCAnICsgYVsxNF0gKyAnLCAnICsgYVsxNV0gKyAnKSc7XG59XG5cbi8qKlxuICogUmV0dXJucyBGcm9iZW5pdXMgbm9ybSBvZiBhIG1hdDRcbiAqXG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byBjYWxjdWxhdGUgRnJvYmVuaXVzIG5vcm0gb2ZcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IEZyb2Jlbml1cyBub3JtXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9iKGEpIHtcbiAgcmV0dXJuKE1hdGguc3FydChNYXRoLnBvdyhhWzBdLCAyKSArIE1hdGgucG93KGFbMV0sIDIpICsgTWF0aC5wb3coYVsyXSwgMikgKyBNYXRoLnBvdyhhWzNdLCAyKSArIE1hdGgucG93KGFbNF0sIDIpICsgTWF0aC5wb3coYVs1XSwgMikgKyBNYXRoLnBvdyhhWzZdLCAyKSArIE1hdGgucG93KGFbN10sIDIpICsgTWF0aC5wb3coYVs4XSwgMikgKyBNYXRoLnBvdyhhWzldLCAyKSArIE1hdGgucG93KGFbMTBdLCAyKSArIE1hdGgucG93KGFbMTFdLCAyKSArIE1hdGgucG93KGFbMTJdLCAyKSArIE1hdGgucG93KGFbMTNdLCAyKSArIE1hdGgucG93KGFbMTRdLCAyKSArIE1hdGgucG93KGFbMTVdLCAyKSApKVxufVxuXG4vKipcbiAqIEFkZHMgdHdvIG1hdDQnc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7bWF0NH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSArIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gKyBiWzFdO1xuICBvdXRbMl0gPSBhWzJdICsgYlsyXTtcbiAgb3V0WzNdID0gYVszXSArIGJbM107XG4gIG91dFs0XSA9IGFbNF0gKyBiWzRdO1xuICBvdXRbNV0gPSBhWzVdICsgYls1XTtcbiAgb3V0WzZdID0gYVs2XSArIGJbNl07XG4gIG91dFs3XSA9IGFbN10gKyBiWzddO1xuICBvdXRbOF0gPSBhWzhdICsgYls4XTtcbiAgb3V0WzldID0gYVs5XSArIGJbOV07XG4gIG91dFsxMF0gPSBhWzEwXSArIGJbMTBdO1xuICBvdXRbMTFdID0gYVsxMV0gKyBiWzExXTtcbiAgb3V0WzEyXSA9IGFbMTJdICsgYlsxMl07XG4gIG91dFsxM10gPSBhWzEzXSArIGJbMTNdO1xuICBvdXRbMTRdID0gYVsxNF0gKyBiWzE0XTtcbiAgb3V0WzE1XSA9IGFbMTVdICsgYlsxNV07XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU3VidHJhY3RzIG1hdHJpeCBiIGZyb20gbWF0cml4IGFcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge21hdDR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAtIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gLSBiWzFdO1xuICBvdXRbMl0gPSBhWzJdIC0gYlsyXTtcbiAgb3V0WzNdID0gYVszXSAtIGJbM107XG4gIG91dFs0XSA9IGFbNF0gLSBiWzRdO1xuICBvdXRbNV0gPSBhWzVdIC0gYls1XTtcbiAgb3V0WzZdID0gYVs2XSAtIGJbNl07XG4gIG91dFs3XSA9IGFbN10gLSBiWzddO1xuICBvdXRbOF0gPSBhWzhdIC0gYls4XTtcbiAgb3V0WzldID0gYVs5XSAtIGJbOV07XG4gIG91dFsxMF0gPSBhWzEwXSAtIGJbMTBdO1xuICBvdXRbMTFdID0gYVsxMV0gLSBiWzExXTtcbiAgb3V0WzEyXSA9IGFbMTJdIC0gYlsxMl07XG4gIG91dFsxM10gPSBhWzEzXSAtIGJbMTNdO1xuICBvdXRbMTRdID0gYVsxNF0gLSBiWzE0XTtcbiAgb3V0WzE1XSA9IGFbMTVdIC0gYlsxNV07XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogTXVsdGlwbHkgZWFjaCBlbGVtZW50IG9mIHRoZSBtYXRyaXggYnkgYSBzY2FsYXIuXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgbWF0cml4IHRvIHNjYWxlXG4gKiBAcGFyYW0ge051bWJlcn0gYiBhbW91bnQgdG8gc2NhbGUgdGhlIG1hdHJpeCdzIGVsZW1lbnRzIGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseVNjYWxhcihvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAqIGI7XG4gIG91dFsxXSA9IGFbMV0gKiBiO1xuICBvdXRbMl0gPSBhWzJdICogYjtcbiAgb3V0WzNdID0gYVszXSAqIGI7XG4gIG91dFs0XSA9IGFbNF0gKiBiO1xuICBvdXRbNV0gPSBhWzVdICogYjtcbiAgb3V0WzZdID0gYVs2XSAqIGI7XG4gIG91dFs3XSA9IGFbN10gKiBiO1xuICBvdXRbOF0gPSBhWzhdICogYjtcbiAgb3V0WzldID0gYVs5XSAqIGI7XG4gIG91dFsxMF0gPSBhWzEwXSAqIGI7XG4gIG91dFsxMV0gPSBhWzExXSAqIGI7XG4gIG91dFsxMl0gPSBhWzEyXSAqIGI7XG4gIG91dFsxM10gPSBhWzEzXSAqIGI7XG4gIG91dFsxNF0gPSBhWzE0XSAqIGI7XG4gIG91dFsxNV0gPSBhWzE1XSAqIGI7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQWRkcyB0d28gbWF0NCdzIGFmdGVyIG11bHRpcGx5aW5nIGVhY2ggZWxlbWVudCBvZiB0aGUgc2Vjb25kIG9wZXJhbmQgYnkgYSBzY2FsYXIgdmFsdWUuXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHttYXQ0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxlIHRoZSBhbW91bnQgdG8gc2NhbGUgYidzIGVsZW1lbnRzIGJ5IGJlZm9yZSBhZGRpbmdcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5U2NhbGFyQW5kQWRkKG91dCwgYSwgYiwgc2NhbGUpIHtcbiAgb3V0WzBdID0gYVswXSArIChiWzBdICogc2NhbGUpO1xuICBvdXRbMV0gPSBhWzFdICsgKGJbMV0gKiBzY2FsZSk7XG4gIG91dFsyXSA9IGFbMl0gKyAoYlsyXSAqIHNjYWxlKTtcbiAgb3V0WzNdID0gYVszXSArIChiWzNdICogc2NhbGUpO1xuICBvdXRbNF0gPSBhWzRdICsgKGJbNF0gKiBzY2FsZSk7XG4gIG91dFs1XSA9IGFbNV0gKyAoYls1XSAqIHNjYWxlKTtcbiAgb3V0WzZdID0gYVs2XSArIChiWzZdICogc2NhbGUpO1xuICBvdXRbN10gPSBhWzddICsgKGJbN10gKiBzY2FsZSk7XG4gIG91dFs4XSA9IGFbOF0gKyAoYls4XSAqIHNjYWxlKTtcbiAgb3V0WzldID0gYVs5XSArIChiWzldICogc2NhbGUpO1xuICBvdXRbMTBdID0gYVsxMF0gKyAoYlsxMF0gKiBzY2FsZSk7XG4gIG91dFsxMV0gPSBhWzExXSArIChiWzExXSAqIHNjYWxlKTtcbiAgb3V0WzEyXSA9IGFbMTJdICsgKGJbMTJdICogc2NhbGUpO1xuICBvdXRbMTNdID0gYVsxM10gKyAoYlsxM10gKiBzY2FsZSk7XG4gIG91dFsxNF0gPSBhWzE0XSArIChiWzE0XSAqIHNjYWxlKTtcbiAgb3V0WzE1XSA9IGFbMTVdICsgKGJbMTVdICogc2NhbGUpO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIG1hdHJpY2VzIGhhdmUgZXhhY3RseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbiAod2hlbiBjb21wYXJlZCB3aXRoID09PSlcbiAqXG4gKiBAcGFyYW0ge21hdDR9IGEgVGhlIGZpcnN0IG1hdHJpeC5cbiAqIEBwYXJhbSB7bWF0NH0gYiBUaGUgc2Vjb25kIG1hdHJpeC5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSBtYXRyaWNlcyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4YWN0RXF1YWxzKGEsIGIpIHtcbiAgcmV0dXJuIGFbMF0gPT09IGJbMF0gJiYgYVsxXSA9PT0gYlsxXSAmJiBhWzJdID09PSBiWzJdICYmIGFbM10gPT09IGJbM10gJiZcbiAgICAgICAgIGFbNF0gPT09IGJbNF0gJiYgYVs1XSA9PT0gYls1XSAmJiBhWzZdID09PSBiWzZdICYmIGFbN10gPT09IGJbN10gJiZcbiAgICAgICAgIGFbOF0gPT09IGJbOF0gJiYgYVs5XSA9PT0gYls5XSAmJiBhWzEwXSA9PT0gYlsxMF0gJiYgYVsxMV0gPT09IGJbMTFdICYmXG4gICAgICAgICBhWzEyXSA9PT0gYlsxMl0gJiYgYVsxM10gPT09IGJbMTNdICYmIGFbMTRdID09PSBiWzE0XSAmJiBhWzE1XSA9PT0gYlsxNV07XG59XG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgbWF0cmljZXMgaGF2ZSBhcHByb3hpbWF0ZWx5IHRoZSBzYW1lIGVsZW1lbnRzIGluIHRoZSBzYW1lIHBvc2l0aW9uLlxuICpcbiAqIEBwYXJhbSB7bWF0NH0gYSBUaGUgZmlyc3QgbWF0cml4LlxuICogQHBhcmFtIHttYXQ0fSBiIFRoZSBzZWNvbmQgbWF0cml4LlxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIG1hdHJpY2VzIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxzKGEsIGIpIHtcbiAgbGV0IGEwICA9IGFbMF0sICBhMSAgPSBhWzFdLCAgYTIgID0gYVsyXSwgIGEzICA9IGFbM107XG4gIGxldCBhNCAgPSBhWzRdLCAgYTUgID0gYVs1XSwgIGE2ICA9IGFbNl0sICBhNyAgPSBhWzddO1xuICBsZXQgYTggID0gYVs4XSwgIGE5ICA9IGFbOV0sICBhMTAgPSBhWzEwXSwgYTExID0gYVsxMV07XG4gIGxldCBhMTIgPSBhWzEyXSwgYTEzID0gYVsxM10sIGExNCA9IGFbMTRdLCBhMTUgPSBhWzE1XTtcblxuICBsZXQgYjAgID0gYlswXSwgIGIxICA9IGJbMV0sICBiMiAgPSBiWzJdLCAgYjMgID0gYlszXTtcbiAgbGV0IGI0ICA9IGJbNF0sICBiNSAgPSBiWzVdLCAgYjYgID0gYls2XSwgIGI3ICA9IGJbN107XG4gIGxldCBiOCAgPSBiWzhdLCAgYjkgID0gYls5XSwgIGIxMCA9IGJbMTBdLCBiMTEgPSBiWzExXTtcbiAgbGV0IGIxMiA9IGJbMTJdLCBiMTMgPSBiWzEzXSwgYjE0ID0gYlsxNF0sIGIxNSA9IGJbMTVdO1xuXG4gIHJldHVybiAoTWF0aC5hYnMoYTAgLSBiMCkgPD0gZ2xNYXRyaXguRVBTSUxPTipNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEwKSwgTWF0aC5hYnMoYjApKSAmJlxuICAgICAgICAgIE1hdGguYWJzKGExIC0gYjEpIDw9IGdsTWF0cml4LkVQU0lMT04qTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMSksIE1hdGguYWJzKGIxKSkgJiZcbiAgICAgICAgICBNYXRoLmFicyhhMiAtIGIyKSA8PSBnbE1hdHJpeC5FUFNJTE9OKk1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTIpLCBNYXRoLmFicyhiMikpICYmXG4gICAgICAgICAgTWF0aC5hYnMoYTMgLSBiMykgPD0gZ2xNYXRyaXguRVBTSUxPTipNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEzKSwgTWF0aC5hYnMoYjMpKSAmJlxuICAgICAgICAgIE1hdGguYWJzKGE0IC0gYjQpIDw9IGdsTWF0cml4LkVQU0lMT04qTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhNCksIE1hdGguYWJzKGI0KSkgJiZcbiAgICAgICAgICBNYXRoLmFicyhhNSAtIGI1KSA8PSBnbE1hdHJpeC5FUFNJTE9OKk1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTUpLCBNYXRoLmFicyhiNSkpICYmXG4gICAgICAgICAgTWF0aC5hYnMoYTYgLSBiNikgPD0gZ2xNYXRyaXguRVBTSUxPTipNYXRoLm1heCgxLjAsIE1hdGguYWJzKGE2KSwgTWF0aC5hYnMoYjYpKSAmJlxuICAgICAgICAgIE1hdGguYWJzKGE3IC0gYjcpIDw9IGdsTWF0cml4LkVQU0lMT04qTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhNyksIE1hdGguYWJzKGI3KSkgJiZcbiAgICAgICAgICBNYXRoLmFicyhhOCAtIGI4KSA8PSBnbE1hdHJpeC5FUFNJTE9OKk1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTgpLCBNYXRoLmFicyhiOCkpICYmXG4gICAgICAgICAgTWF0aC5hYnMoYTkgLSBiOSkgPD0gZ2xNYXRyaXguRVBTSUxPTipNYXRoLm1heCgxLjAsIE1hdGguYWJzKGE5KSwgTWF0aC5hYnMoYjkpKSAmJlxuICAgICAgICAgIE1hdGguYWJzKGExMCAtIGIxMCkgPD0gZ2xNYXRyaXguRVBTSUxPTipNYXRoLm1heCgxLjAsIE1hdGguYWJzKGExMCksIE1hdGguYWJzKGIxMCkpICYmXG4gICAgICAgICAgTWF0aC5hYnMoYTExIC0gYjExKSA8PSBnbE1hdHJpeC5FUFNJTE9OKk1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTExKSwgTWF0aC5hYnMoYjExKSkgJiZcbiAgICAgICAgICBNYXRoLmFicyhhMTIgLSBiMTIpIDw9IGdsTWF0cml4LkVQU0lMT04qTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMTIpLCBNYXRoLmFicyhiMTIpKSAmJlxuICAgICAgICAgIE1hdGguYWJzKGExMyAtIGIxMykgPD0gZ2xNYXRyaXguRVBTSUxPTipNYXRoLm1heCgxLjAsIE1hdGguYWJzKGExMyksIE1hdGguYWJzKGIxMykpICYmXG4gICAgICAgICAgTWF0aC5hYnMoYTE0IC0gYjE0KSA8PSBnbE1hdHJpeC5FUFNJTE9OKk1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTE0KSwgTWF0aC5hYnMoYjE0KSkgJiZcbiAgICAgICAgICBNYXRoLmFicyhhMTUgLSBiMTUpIDw9IGdsTWF0cml4LkVQU0lMT04qTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMTUpLCBNYXRoLmFicyhiMTUpKSk7XG59XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayBtYXQ0Lm11bHRpcGx5fVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBtdWwgPSBtdWx0aXBseTtcblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIG1hdDQuc3VidHJhY3R9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IHN1YiA9IHN1YnRyYWN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2wtbWF0cml4L3NyYy9nbC1tYXRyaXgvbWF0NC5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQ29weXJpZ2h0IChjKSAyMDE1LCBCcmFuZG9uIEpvbmVzLCBDb2xpbiBNYWNLZW56aWUgSVYuXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cblRIRSBTT0ZUV0FSRS4gKi9cblxuaW1wb3J0ICogYXMgZ2xNYXRyaXggZnJvbSBcIi4vY29tbW9uXCJcbmltcG9ydCAqIGFzIG1hdDMgZnJvbSBcIi4vbWF0M1wiXG5pbXBvcnQgKiBhcyB2ZWMzIGZyb20gXCIuL3ZlYzNcIlxuaW1wb3J0ICogYXMgdmVjNCBmcm9tIFwiLi92ZWM0XCJcblxuLyoqXG4gKiBRdWF0ZXJuaW9uXG4gKiBAbW9kdWxlIHF1YXRcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgaWRlbnRpdHkgcXVhdFxuICpcbiAqIEByZXR1cm5zIHtxdWF0fSBhIG5ldyBxdWF0ZXJuaW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gIGxldCBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSg0KTtcbiAgb3V0WzBdID0gMDtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTZXQgYSBxdWF0IHRvIHRoZSBpZGVudGl0eSBxdWF0ZXJuaW9uXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eShvdXQpIHtcbiAgb3V0WzBdID0gMDtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTZXRzIGEgcXVhdCBmcm9tIHRoZSBnaXZlbiBhbmdsZSBhbmQgcm90YXRpb24gYXhpcyxcbiAqIHRoZW4gcmV0dXJucyBpdC5cbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7dmVjM30gYXhpcyB0aGUgYXhpcyBhcm91bmQgd2hpY2ggdG8gcm90YXRlXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSBpbiByYWRpYW5zXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKiovXG5leHBvcnQgZnVuY3Rpb24gc2V0QXhpc0FuZ2xlKG91dCwgYXhpcywgcmFkKSB7XG4gIHJhZCA9IHJhZCAqIDAuNTtcbiAgbGV0IHMgPSBNYXRoLnNpbihyYWQpO1xuICBvdXRbMF0gPSBzICogYXhpc1swXTtcbiAgb3V0WzFdID0gcyAqIGF4aXNbMV07XG4gIG91dFsyXSA9IHMgKiBheGlzWzJdO1xuICBvdXRbM10gPSBNYXRoLmNvcyhyYWQpO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIHJvdGF0aW9uIGF4aXMgYW5kIGFuZ2xlIGZvciBhIGdpdmVuXG4gKiAgcXVhdGVybmlvbi4gSWYgYSBxdWF0ZXJuaW9uIGlzIGNyZWF0ZWQgd2l0aFxuICogIHNldEF4aXNBbmdsZSwgdGhpcyBtZXRob2Qgd2lsbCByZXR1cm4gdGhlIHNhbWVcbiAqICB2YWx1ZXMgYXMgcHJvdmlkaWVkIGluIHRoZSBvcmlnaW5hbCBwYXJhbWV0ZXIgbGlzdFxuICogIE9SIGZ1bmN0aW9uYWxseSBlcXVpdmFsZW50IHZhbHVlcy5cbiAqIEV4YW1wbGU6IFRoZSBxdWF0ZXJuaW9uIGZvcm1lZCBieSBheGlzIFswLCAwLCAxXSBhbmRcbiAqICBhbmdsZSAtOTAgaXMgdGhlIHNhbWUgYXMgdGhlIHF1YXRlcm5pb24gZm9ybWVkIGJ5XG4gKiAgWzAsIDAsIDFdIGFuZCAyNzAuIFRoaXMgbWV0aG9kIGZhdm9ycyB0aGUgbGF0dGVyLlxuICogQHBhcmFtICB7dmVjM30gb3V0X2F4aXMgIFZlY3RvciByZWNlaXZpbmcgdGhlIGF4aXMgb2Ygcm90YXRpb25cbiAqIEBwYXJhbSAge3F1YXR9IHEgICAgIFF1YXRlcm5pb24gdG8gYmUgZGVjb21wb3NlZFxuICogQHJldHVybiB7TnVtYmVyfSAgICAgQW5nbGUsIGluIHJhZGlhbnMsIG9mIHRoZSByb3RhdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXhpc0FuZ2xlKG91dF9heGlzLCBxKSB7XG4gIGxldCByYWQgPSBNYXRoLmFjb3MocVszXSkgKiAyLjA7XG4gIGxldCBzID0gTWF0aC5zaW4ocmFkIC8gMi4wKTtcbiAgaWYgKHMgIT0gMC4wKSB7XG4gICAgb3V0X2F4aXNbMF0gPSBxWzBdIC8gcztcbiAgICBvdXRfYXhpc1sxXSA9IHFbMV0gLyBzO1xuICAgIG91dF9heGlzWzJdID0gcVsyXSAvIHM7XG4gIH0gZWxzZSB7XG4gICAgLy8gSWYgcyBpcyB6ZXJvLCByZXR1cm4gYW55IGF4aXMgKG5vIHJvdGF0aW9uIC0gYXhpcyBkb2VzIG5vdCBtYXR0ZXIpXG4gICAgb3V0X2F4aXNbMF0gPSAxO1xuICAgIG91dF9heGlzWzFdID0gMDtcbiAgICBvdXRfYXhpc1syXSA9IDA7XG4gIH1cbiAgcmV0dXJuIHJhZDtcbn1cblxuLyoqXG4gKiBNdWx0aXBsaWVzIHR3byBxdWF0J3NcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7cXVhdH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtxdWF0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3F1YXR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkob3V0LCBhLCBiKSB7XG4gIGxldCBheCA9IGFbMF0sIGF5ID0gYVsxXSwgYXogPSBhWzJdLCBhdyA9IGFbM107XG4gIGxldCBieCA9IGJbMF0sIGJ5ID0gYlsxXSwgYnogPSBiWzJdLCBidyA9IGJbM107XG5cbiAgb3V0WzBdID0gYXggKiBidyArIGF3ICogYnggKyBheSAqIGJ6IC0gYXogKiBieTtcbiAgb3V0WzFdID0gYXkgKiBidyArIGF3ICogYnkgKyBheiAqIGJ4IC0gYXggKiBiejtcbiAgb3V0WzJdID0gYXogKiBidyArIGF3ICogYnogKyBheCAqIGJ5IC0gYXkgKiBieDtcbiAgb3V0WzNdID0gYXcgKiBidyAtIGF4ICogYnggLSBheSAqIGJ5IC0gYXogKiBiejtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSb3RhdGVzIGEgcXVhdGVybmlvbiBieSB0aGUgZ2l2ZW4gYW5nbGUgYWJvdXQgdGhlIFggYXhpc1xuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHF1YXQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7cXVhdH0gYSBxdWF0IHRvIHJvdGF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IHJhZCBhbmdsZSAoaW4gcmFkaWFucykgdG8gcm90YXRlXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVYKG91dCwgYSwgcmFkKSB7XG4gIHJhZCAqPSAwLjU7XG5cbiAgbGV0IGF4ID0gYVswXSwgYXkgPSBhWzFdLCBheiA9IGFbMl0sIGF3ID0gYVszXTtcbiAgbGV0IGJ4ID0gTWF0aC5zaW4ocmFkKSwgYncgPSBNYXRoLmNvcyhyYWQpO1xuXG4gIG91dFswXSA9IGF4ICogYncgKyBhdyAqIGJ4O1xuICBvdXRbMV0gPSBheSAqIGJ3ICsgYXogKiBieDtcbiAgb3V0WzJdID0gYXogKiBidyAtIGF5ICogYng7XG4gIG91dFszXSA9IGF3ICogYncgLSBheCAqIGJ4O1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJvdGF0ZXMgYSBxdWF0ZXJuaW9uIGJ5IHRoZSBnaXZlbiBhbmdsZSBhYm91dCB0aGUgWSBheGlzXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgcXVhdCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtxdWF0fSBhIHF1YXQgdG8gcm90YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkIGFuZ2xlIChpbiByYWRpYW5zKSB0byByb3RhdGVcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVkob3V0LCBhLCByYWQpIHtcbiAgcmFkICo9IDAuNTtcblxuICBsZXQgYXggPSBhWzBdLCBheSA9IGFbMV0sIGF6ID0gYVsyXSwgYXcgPSBhWzNdO1xuICBsZXQgYnkgPSBNYXRoLnNpbihyYWQpLCBidyA9IE1hdGguY29zKHJhZCk7XG5cbiAgb3V0WzBdID0gYXggKiBidyAtIGF6ICogYnk7XG4gIG91dFsxXSA9IGF5ICogYncgKyBhdyAqIGJ5O1xuICBvdXRbMl0gPSBheiAqIGJ3ICsgYXggKiBieTtcbiAgb3V0WzNdID0gYXcgKiBidyAtIGF5ICogYnk7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUm90YXRlcyBhIHF1YXRlcm5pb24gYnkgdGhlIGdpdmVuIGFuZ2xlIGFib3V0IHRoZSBaIGF4aXNcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCBxdWF0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge3F1YXR9IGEgcXVhdCB0byByb3RhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSByYWQgYW5nbGUgKGluIHJhZGlhbnMpIHRvIHJvdGF0ZVxuICogQHJldHVybnMge3F1YXR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWihvdXQsIGEsIHJhZCkge1xuICByYWQgKj0gMC41O1xuXG4gIGxldCBheCA9IGFbMF0sIGF5ID0gYVsxXSwgYXogPSBhWzJdLCBhdyA9IGFbM107XG4gIGxldCBieiA9IE1hdGguc2luKHJhZCksIGJ3ID0gTWF0aC5jb3MocmFkKTtcblxuICBvdXRbMF0gPSBheCAqIGJ3ICsgYXkgKiBiejtcbiAgb3V0WzFdID0gYXkgKiBidyAtIGF4ICogYno7XG4gIG91dFsyXSA9IGF6ICogYncgKyBhdyAqIGJ6O1xuICBvdXRbM10gPSBhdyAqIGJ3IC0gYXogKiBiejtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBXIGNvbXBvbmVudCBvZiBhIHF1YXQgZnJvbSB0aGUgWCwgWSwgYW5kIFogY29tcG9uZW50cy5cbiAqIEFzc3VtZXMgdGhhdCBxdWF0ZXJuaW9uIGlzIDEgdW5pdCBpbiBsZW5ndGguXG4gKiBBbnkgZXhpc3RpbmcgVyBjb21wb25lbnQgd2lsbCBiZSBpZ25vcmVkLlxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHtxdWF0fSBhIHF1YXQgdG8gY2FsY3VsYXRlIFcgY29tcG9uZW50IG9mXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVXKG91dCwgYSkge1xuICBsZXQgeCA9IGFbMF0sIHkgPSBhWzFdLCB6ID0gYVsyXTtcblxuICBvdXRbMF0gPSB4O1xuICBvdXRbMV0gPSB5O1xuICBvdXRbMl0gPSB6O1xuICBvdXRbM10gPSBNYXRoLnNxcnQoTWF0aC5hYnMoMS4wIC0geCAqIHggLSB5ICogeSAtIHogKiB6KSk7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUGVyZm9ybXMgYSBzcGhlcmljYWwgbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiB0d28gcXVhdFxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHtxdWF0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3F1YXR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gdCBpbnRlcnBvbGF0aW9uIGFtb3VudCBiZXR3ZWVuIHRoZSB0d28gaW5wdXRzXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzbGVycChvdXQsIGEsIGIsIHQpIHtcbiAgLy8gYmVuY2htYXJrczpcbiAgLy8gICAgaHR0cDovL2pzcGVyZi5jb20vcXVhdGVybmlvbi1zbGVycC1pbXBsZW1lbnRhdGlvbnNcbiAgbGV0IGF4ID0gYVswXSwgYXkgPSBhWzFdLCBheiA9IGFbMl0sIGF3ID0gYVszXTtcbiAgbGV0IGJ4ID0gYlswXSwgYnkgPSBiWzFdLCBieiA9IGJbMl0sIGJ3ID0gYlszXTtcblxuICBsZXQgb21lZ2EsIGNvc29tLCBzaW5vbSwgc2NhbGUwLCBzY2FsZTE7XG5cbiAgLy8gY2FsYyBjb3NpbmVcbiAgY29zb20gPSBheCAqIGJ4ICsgYXkgKiBieSArIGF6ICogYnogKyBhdyAqIGJ3O1xuICAvLyBhZGp1c3Qgc2lnbnMgKGlmIG5lY2Vzc2FyeSlcbiAgaWYgKCBjb3NvbSA8IDAuMCApIHtcbiAgICBjb3NvbSA9IC1jb3NvbTtcbiAgICBieCA9IC0gYng7XG4gICAgYnkgPSAtIGJ5O1xuICAgIGJ6ID0gLSBiejtcbiAgICBidyA9IC0gYnc7XG4gIH1cbiAgLy8gY2FsY3VsYXRlIGNvZWZmaWNpZW50c1xuICBpZiAoICgxLjAgLSBjb3NvbSkgPiAwLjAwMDAwMSApIHtcbiAgICAvLyBzdGFuZGFyZCBjYXNlIChzbGVycClcbiAgICBvbWVnYSAgPSBNYXRoLmFjb3MoY29zb20pO1xuICAgIHNpbm9tICA9IE1hdGguc2luKG9tZWdhKTtcbiAgICBzY2FsZTAgPSBNYXRoLnNpbigoMS4wIC0gdCkgKiBvbWVnYSkgLyBzaW5vbTtcbiAgICBzY2FsZTEgPSBNYXRoLnNpbih0ICogb21lZ2EpIC8gc2lub207XG4gIH0gZWxzZSB7XG4gICAgLy8gXCJmcm9tXCIgYW5kIFwidG9cIiBxdWF0ZXJuaW9ucyBhcmUgdmVyeSBjbG9zZVxuICAgIC8vICAuLi4gc28gd2UgY2FuIGRvIGEgbGluZWFyIGludGVycG9sYXRpb25cbiAgICBzY2FsZTAgPSAxLjAgLSB0O1xuICAgIHNjYWxlMSA9IHQ7XG4gIH1cbiAgLy8gY2FsY3VsYXRlIGZpbmFsIHZhbHVlc1xuICBvdXRbMF0gPSBzY2FsZTAgKiBheCArIHNjYWxlMSAqIGJ4O1xuICBvdXRbMV0gPSBzY2FsZTAgKiBheSArIHNjYWxlMSAqIGJ5O1xuICBvdXRbMl0gPSBzY2FsZTAgKiBheiArIHNjYWxlMSAqIGJ6O1xuICBvdXRbM10gPSBzY2FsZTAgKiBhdyArIHNjYWxlMSAqIGJ3O1xuXG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgaW52ZXJzZSBvZiBhIHF1YXRcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7cXVhdH0gYSBxdWF0IHRvIGNhbGN1bGF0ZSBpbnZlcnNlIG9mXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQob3V0LCBhKSB7XG4gIGxldCBhMCA9IGFbMF0sIGExID0gYVsxXSwgYTIgPSBhWzJdLCBhMyA9IGFbM107XG4gIGxldCBkb3QgPSBhMCphMCArIGExKmExICsgYTIqYTIgKyBhMyphMztcbiAgbGV0IGludkRvdCA9IGRvdCA/IDEuMC9kb3QgOiAwO1xuXG4gIC8vIFRPRE86IFdvdWxkIGJlIGZhc3RlciB0byByZXR1cm4gWzAsMCwwLDBdIGltbWVkaWF0ZWx5IGlmIGRvdCA9PSAwXG5cbiAgb3V0WzBdID0gLWEwKmludkRvdDtcbiAgb3V0WzFdID0gLWExKmludkRvdDtcbiAgb3V0WzJdID0gLWEyKmludkRvdDtcbiAgb3V0WzNdID0gYTMqaW52RG90O1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGNvbmp1Z2F0ZSBvZiBhIHF1YXRcbiAqIElmIHRoZSBxdWF0ZXJuaW9uIGlzIG5vcm1hbGl6ZWQsIHRoaXMgZnVuY3Rpb24gaXMgZmFzdGVyIHRoYW4gcXVhdC5pbnZlcnNlIGFuZCBwcm9kdWNlcyB0aGUgc2FtZSByZXN1bHQuXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge3F1YXR9IGEgcXVhdCB0byBjYWxjdWxhdGUgY29uanVnYXRlIG9mXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25qdWdhdGUob3V0LCBhKSB7XG4gIG91dFswXSA9IC1hWzBdO1xuICBvdXRbMV0gPSAtYVsxXTtcbiAgb3V0WzJdID0gLWFbMl07XG4gIG91dFszXSA9IGFbM107XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHF1YXRlcm5pb24gZnJvbSB0aGUgZ2l2ZW4gM3gzIHJvdGF0aW9uIG1hdHJpeC5cbiAqXG4gKiBOT1RFOiBUaGUgcmVzdWx0YW50IHF1YXRlcm5pb24gaXMgbm90IG5vcm1hbGl6ZWQsIHNvIHlvdSBzaG91bGQgYmUgc3VyZVxuICogdG8gcmVub3JtYWxpemUgdGhlIHF1YXRlcm5pb24geW91cnNlbGYgd2hlcmUgbmVjZXNzYXJ5LlxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHttYXQzfSBtIHJvdGF0aW9uIG1hdHJpeFxuICogQHJldHVybnMge3F1YXR9IG91dFxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tTWF0MyhvdXQsIG0pIHtcbiAgLy8gQWxnb3JpdGhtIGluIEtlbiBTaG9lbWFrZSdzIGFydGljbGUgaW4gMTk4NyBTSUdHUkFQSCBjb3Vyc2Ugbm90ZXNcbiAgLy8gYXJ0aWNsZSBcIlF1YXRlcm5pb24gQ2FsY3VsdXMgYW5kIEZhc3QgQW5pbWF0aW9uXCIuXG4gIGxldCBmVHJhY2UgPSBtWzBdICsgbVs0XSArIG1bOF07XG4gIGxldCBmUm9vdDtcblxuICBpZiAoIGZUcmFjZSA+IDAuMCApIHtcbiAgICAvLyB8d3wgPiAxLzIsIG1heSBhcyB3ZWxsIGNob29zZSB3ID4gMS8yXG4gICAgZlJvb3QgPSBNYXRoLnNxcnQoZlRyYWNlICsgMS4wKTsgIC8vIDJ3XG4gICAgb3V0WzNdID0gMC41ICogZlJvb3Q7XG4gICAgZlJvb3QgPSAwLjUvZlJvb3Q7ICAvLyAxLyg0dylcbiAgICBvdXRbMF0gPSAobVs1XS1tWzddKSpmUm9vdDtcbiAgICBvdXRbMV0gPSAobVs2XS1tWzJdKSpmUm9vdDtcbiAgICBvdXRbMl0gPSAobVsxXS1tWzNdKSpmUm9vdDtcbiAgfSBlbHNlIHtcbiAgICAvLyB8d3wgPD0gMS8yXG4gICAgbGV0IGkgPSAwO1xuICAgIGlmICggbVs0XSA+IG1bMF0gKVxuICAgICAgaSA9IDE7XG4gICAgaWYgKCBtWzhdID4gbVtpKjMraV0gKVxuICAgICAgaSA9IDI7XG4gICAgbGV0IGogPSAoaSsxKSUzO1xuICAgIGxldCBrID0gKGkrMiklMztcblxuICAgIGZSb290ID0gTWF0aC5zcXJ0KG1baSozK2ldLW1baiozK2pdLW1bayozK2tdICsgMS4wKTtcbiAgICBvdXRbaV0gPSAwLjUgKiBmUm9vdDtcbiAgICBmUm9vdCA9IDAuNSAvIGZSb290O1xuICAgIG91dFszXSA9IChtW2oqMytrXSAtIG1bayozK2pdKSAqIGZSb290O1xuICAgIG91dFtqXSA9IChtW2oqMytpXSArIG1baSozK2pdKSAqIGZSb290O1xuICAgIG91dFtrXSA9IChtW2sqMytpXSArIG1baSozK2tdKSAqIGZSb290O1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgcXVhdGVybmlvbiBmcm9tIHRoZSBnaXZlbiBldWxlciBhbmdsZSB4LCB5LCB6LlxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHt4fSBBbmdsZSB0byByb3RhdGUgYXJvdW5kIFggYXhpcyBpbiBkZWdyZWVzLlxuICogQHBhcmFtIHt5fSBBbmdsZSB0byByb3RhdGUgYXJvdW5kIFkgYXhpcyBpbiBkZWdyZWVzLlxuICogQHBhcmFtIHt6fSBBbmdsZSB0byByb3RhdGUgYXJvdW5kIFogYXhpcyBpbiBkZWdyZWVzLlxuICogQHJldHVybnMge3F1YXR9IG91dFxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tRXVsZXIob3V0LCB4LCB5LCB6KSB7XG4gICAgbGV0IGhhbGZUb1JhZCA9IDAuNSAqIE1hdGguUEkgLyAxODAuMDtcbiAgICB4ICo9IGhhbGZUb1JhZDtcbiAgICB5ICo9IGhhbGZUb1JhZDtcbiAgICB6ICo9IGhhbGZUb1JhZDtcblxuICAgIGxldCBzeCA9IE1hdGguc2luKHgpO1xuICAgIGxldCBjeCA9IE1hdGguY29zKHgpO1xuICAgIGxldCBzeSA9IE1hdGguc2luKHkpO1xuICAgIGxldCBjeSA9IE1hdGguY29zKHkpO1xuICAgIGxldCBzeiA9IE1hdGguc2luKHopO1xuICAgIGxldCBjeiA9IE1hdGguY29zKHopO1xuXG4gICAgb3V0WzBdID0gc3ggKiBjeSAqIGN6IC0gY3ggKiBzeSAqIHN6O1xuICAgIG91dFsxXSA9IGN4ICogc3kgKiBjeiArIHN4ICogY3kgKiBzejtcbiAgICBvdXRbMl0gPSBjeCAqIGN5ICogc3ogLSBzeCAqIHN5ICogY3o7XG4gICAgb3V0WzNdID0gY3ggKiBjeSAqIGN6ICsgc3ggKiBzeSAqIHN6O1xuXG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgcXVhdGVuaW9uXG4gKlxuICogQHBhcmFtIHtxdWF0fSBhIHZlY3RvciB0byByZXByZXNlbnQgYXMgYSBzdHJpbmdcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHIoYSkge1xuICByZXR1cm4gJ3F1YXQoJyArIGFbMF0gKyAnLCAnICsgYVsxXSArICcsICcgKyBhWzJdICsgJywgJyArIGFbM10gKyAnKSc7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBxdWF0IGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgcXVhdGVybmlvblxuICpcbiAqIEBwYXJhbSB7cXVhdH0gYSBxdWF0ZXJuaW9uIHRvIGNsb25lXG4gKiBAcmV0dXJucyB7cXVhdH0gYSBuZXcgcXVhdGVybmlvblxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBjbG9uZSA9IHZlYzQuY2xvbmU7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBxdWF0IGluaXRpYWxpemVkIHdpdGggdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFggY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geSBZIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHogWiBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB3IFcgY29tcG9uZW50XG4gKiBAcmV0dXJucyB7cXVhdH0gYSBuZXcgcXVhdGVybmlvblxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBmcm9tVmFsdWVzID0gdmVjNC5mcm9tVmFsdWVzO1xuXG4vKipcbiAqIENvcHkgdGhlIHZhbHVlcyBmcm9tIG9uZSBxdWF0IHRvIGFub3RoZXJcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7cXVhdH0gYSB0aGUgc291cmNlIHF1YXRlcm5pb25cbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3QgY29weSA9IHZlYzQuY29weTtcblxuLyoqXG4gKiBTZXQgdGhlIGNvbXBvbmVudHMgb2YgYSBxdWF0IHRvIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFggY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geSBZIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHogWiBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB3IFcgY29tcG9uZW50XG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IHNldCA9IHZlYzQuc2V0O1xuXG4vKipcbiAqIEFkZHMgdHdvIHF1YXQnc1xuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHtxdWF0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3F1YXR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IGFkZCA9IHZlYzQuYWRkO1xuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgcXVhdC5tdWx0aXBseX1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3QgbXVsID0gbXVsdGlwbHk7XG5cbi8qKlxuICogU2NhbGVzIGEgcXVhdCBieSBhIHNjYWxhciBudW1iZXJcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtxdWF0fSBhIHRoZSB2ZWN0b3IgdG8gc2NhbGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBiIGFtb3VudCB0byBzY2FsZSB0aGUgdmVjdG9yIGJ5XG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IHNjYWxlID0gdmVjNC5zY2FsZTtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBkb3QgcHJvZHVjdCBvZiB0d28gcXVhdCdzXG4gKlxuICogQHBhcmFtIHtxdWF0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3F1YXR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkb3QgcHJvZHVjdCBvZiBhIGFuZCBiXG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IGRvdCA9IHZlYzQuZG90O1xuXG4vKipcbiAqIFBlcmZvcm1zIGEgbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiB0d28gcXVhdCdzXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge3F1YXR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7cXVhdH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSB0IGludGVycG9sYXRpb24gYW1vdW50IGJldHdlZW4gdGhlIHR3byBpbnB1dHNcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3QgbGVycCA9IHZlYzQubGVycDtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBsZW5ndGggb2YgYSBxdWF0XG4gKlxuICogQHBhcmFtIHtxdWF0fSBhIHZlY3RvciB0byBjYWxjdWxhdGUgbGVuZ3RoIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBsZW5ndGggb2YgYVxuICovXG5leHBvcnQgY29uc3QgbGVuZ3RoID0gdmVjNC5sZW5ndGg7XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayBxdWF0Lmxlbmd0aH1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3QgbGVuID0gbGVuZ3RoO1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgbGVuZ3RoIG9mIGEgcXVhdFxuICpcbiAqIEBwYXJhbSB7cXVhdH0gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIHNxdWFyZWQgbGVuZ3RoIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGxlbmd0aCBvZiBhXG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IHNxdWFyZWRMZW5ndGggPSB2ZWM0LnNxdWFyZWRMZW5ndGg7XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayBxdWF0LnNxdWFyZWRMZW5ndGh9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IHNxckxlbiA9IHNxdWFyZWRMZW5ndGg7XG5cbi8qKlxuICogTm9ybWFsaXplIGEgcXVhdFxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHtxdWF0fSBhIHF1YXRlcm5pb24gdG8gbm9ybWFsaXplXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZSA9IHZlYzQubm9ybWFsaXplO1xuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHF1YXRlcm5pb25zIGhhdmUgZXhhY3RseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbiAod2hlbiBjb21wYXJlZCB3aXRoID09PSlcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IGEgVGhlIGZpcnN0IHF1YXRlcm5pb24uXG4gKiBAcGFyYW0ge3F1YXR9IGIgVGhlIHNlY29uZCBxdWF0ZXJuaW9uLlxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIHZlY3RvcnMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBjb25zdCBleGFjdEVxdWFscyA9IHZlYzQuZXhhY3RFcXVhbHM7XG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgcXVhdGVybmlvbnMgaGF2ZSBhcHByb3hpbWF0ZWx5IHRoZSBzYW1lIGVsZW1lbnRzIGluIHRoZSBzYW1lIHBvc2l0aW9uLlxuICpcbiAqIEBwYXJhbSB7cXVhdH0gYSBUaGUgZmlyc3QgdmVjdG9yLlxuICogQHBhcmFtIHtxdWF0fSBiIFRoZSBzZWNvbmQgdmVjdG9yLlxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIHZlY3RvcnMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBjb25zdCBlcXVhbHMgPSB2ZWM0LmVxdWFscztcblxuLyoqXG4gKiBTZXRzIGEgcXVhdGVybmlvbiB0byByZXByZXNlbnQgdGhlIHNob3J0ZXN0IHJvdGF0aW9uIGZyb20gb25lXG4gKiB2ZWN0b3IgdG8gYW5vdGhlci5cbiAqXG4gKiBCb3RoIHZlY3RvcnMgYXJlIGFzc3VtZWQgdG8gYmUgdW5pdCBsZW5ndGguXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uLlxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBpbml0aWFsIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBkZXN0aW5hdGlvbiB2ZWN0b3JcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqL1xuZXhwb3J0IGNvbnN0IHJvdGF0aW9uVG8gPSAoZnVuY3Rpb24oKSB7XG4gIGxldCB0bXB2ZWMzID0gdmVjMy5jcmVhdGUoKTtcbiAgbGV0IHhVbml0VmVjMyA9IHZlYzMuZnJvbVZhbHVlcygxLDAsMCk7XG4gIGxldCB5VW5pdFZlYzMgPSB2ZWMzLmZyb21WYWx1ZXMoMCwxLDApO1xuXG4gIHJldHVybiBmdW5jdGlvbihvdXQsIGEsIGIpIHtcbiAgICBsZXQgZG90ID0gdmVjMy5kb3QoYSwgYik7XG4gICAgaWYgKGRvdCA8IC0wLjk5OTk5OSkge1xuICAgICAgdmVjMy5jcm9zcyh0bXB2ZWMzLCB4VW5pdFZlYzMsIGEpO1xuICAgICAgaWYgKHZlYzMubGVuKHRtcHZlYzMpIDwgMC4wMDAwMDEpXG4gICAgICAgIHZlYzMuY3Jvc3ModG1wdmVjMywgeVVuaXRWZWMzLCBhKTtcbiAgICAgIHZlYzMubm9ybWFsaXplKHRtcHZlYzMsIHRtcHZlYzMpO1xuICAgICAgc2V0QXhpc0FuZ2xlKG91dCwgdG1wdmVjMywgTWF0aC5QSSk7XG4gICAgICByZXR1cm4gb3V0O1xuICAgIH0gZWxzZSBpZiAoZG90ID4gMC45OTk5OTkpIHtcbiAgICAgIG91dFswXSA9IDA7XG4gICAgICBvdXRbMV0gPSAwO1xuICAgICAgb3V0WzJdID0gMDtcbiAgICAgIG91dFszXSA9IDE7XG4gICAgICByZXR1cm4gb3V0O1xuICAgIH0gZWxzZSB7XG4gICAgICB2ZWMzLmNyb3NzKHRtcHZlYzMsIGEsIGIpO1xuICAgICAgb3V0WzBdID0gdG1wdmVjM1swXTtcbiAgICAgIG91dFsxXSA9IHRtcHZlYzNbMV07XG4gICAgICBvdXRbMl0gPSB0bXB2ZWMzWzJdO1xuICAgICAgb3V0WzNdID0gMSArIGRvdDtcbiAgICAgIHJldHVybiBub3JtYWxpemUob3V0LCBvdXQpO1xuICAgIH1cbiAgfTtcbn0pKCk7XG5cbi8qKlxuICogUGVyZm9ybXMgYSBzcGhlcmljYWwgbGluZWFyIGludGVycG9sYXRpb24gd2l0aCB0d28gY29udHJvbCBwb2ludHNcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7cXVhdH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtxdWF0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtxdWF0fSBjIHRoZSB0aGlyZCBvcGVyYW5kXG4gKiBAcGFyYW0ge3F1YXR9IGQgdGhlIGZvdXJ0aCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gdCBpbnRlcnBvbGF0aW9uIGFtb3VudFxuICogQHJldHVybnMge3F1YXR9IG91dFxuICovXG5leHBvcnQgY29uc3Qgc3FsZXJwID0gKGZ1bmN0aW9uICgpIHtcbiAgbGV0IHRlbXAxID0gY3JlYXRlKCk7XG4gIGxldCB0ZW1wMiA9IGNyZWF0ZSgpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAob3V0LCBhLCBiLCBjLCBkLCB0KSB7XG4gICAgc2xlcnAodGVtcDEsIGEsIGQsIHQpO1xuICAgIHNsZXJwKHRlbXAyLCBiLCBjLCB0KTtcbiAgICBzbGVycChvdXQsIHRlbXAxLCB0ZW1wMiwgMiAqIHQgKiAoMSAtIHQpKTtcblxuICAgIHJldHVybiBvdXQ7XG4gIH07XG59KCkpO1xuXG4vKipcbiAqIFNldHMgdGhlIHNwZWNpZmllZCBxdWF0ZXJuaW9uIHdpdGggdmFsdWVzIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGdpdmVuXG4gKiBheGVzLiBFYWNoIGF4aXMgaXMgYSB2ZWMzIGFuZCBpcyBleHBlY3RlZCB0byBiZSB1bml0IGxlbmd0aCBhbmRcbiAqIHBlcnBlbmRpY3VsYXIgdG8gYWxsIG90aGVyIHNwZWNpZmllZCBheGVzLlxuICpcbiAqIEBwYXJhbSB7dmVjM30gdmlldyAgdGhlIHZlY3RvciByZXByZXNlbnRpbmcgdGhlIHZpZXdpbmcgZGlyZWN0aW9uXG4gKiBAcGFyYW0ge3ZlYzN9IHJpZ2h0IHRoZSB2ZWN0b3IgcmVwcmVzZW50aW5nIHRoZSBsb2NhbCBcInJpZ2h0XCIgZGlyZWN0aW9uXG4gKiBAcGFyYW0ge3ZlYzN9IHVwICAgIHRoZSB2ZWN0b3IgcmVwcmVzZW50aW5nIHRoZSBsb2NhbCBcInVwXCIgZGlyZWN0aW9uXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKi9cbmV4cG9ydCBjb25zdCBzZXRBeGVzID0gKGZ1bmN0aW9uKCkge1xuICBsZXQgbWF0ciA9IG1hdDMuY3JlYXRlKCk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKG91dCwgdmlldywgcmlnaHQsIHVwKSB7XG4gICAgbWF0clswXSA9IHJpZ2h0WzBdO1xuICAgIG1hdHJbM10gPSByaWdodFsxXTtcbiAgICBtYXRyWzZdID0gcmlnaHRbMl07XG5cbiAgICBtYXRyWzFdID0gdXBbMF07XG4gICAgbWF0cls0XSA9IHVwWzFdO1xuICAgIG1hdHJbN10gPSB1cFsyXTtcblxuICAgIG1hdHJbMl0gPSAtdmlld1swXTtcbiAgICBtYXRyWzVdID0gLXZpZXdbMV07XG4gICAgbWF0cls4XSA9IC12aWV3WzJdO1xuXG4gICAgcmV0dXJuIG5vcm1hbGl6ZShvdXQsIGZyb21NYXQzKG91dCwgbWF0cikpO1xuICB9O1xufSkoKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dsLW1hdHJpeC9zcmMvZ2wtbWF0cml4L3F1YXQuanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIENvcHlyaWdodCAoYykgMjAxNSwgQnJhbmRvbiBKb25lcywgQ29saW4gTWFjS2VuemllIElWLlxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbmZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG5hbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG5USEUgU09GVFdBUkUuICovXG5cbmltcG9ydCAqIGFzIGdsTWF0cml4IGZyb20gXCIuL2NvbW1vblwiO1xuXG4vKipcbiAqIDIgRGltZW5zaW9uYWwgVmVjdG9yXG4gKiBAbW9kdWxlIHZlYzJcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcsIGVtcHR5IHZlYzJcbiAqXG4gKiBAcmV0dXJucyB7dmVjMn0gYSBuZXcgMkQgdmVjdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gIGxldCBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSgyKTtcbiAgb3V0WzBdID0gMDtcbiAgb3V0WzFdID0gMDtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHZlYzIgaW5pdGlhbGl6ZWQgd2l0aCB2YWx1ZXMgZnJvbSBhbiBleGlzdGluZyB2ZWN0b3JcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdmVjdG9yIHRvIGNsb25lXG4gKiBAcmV0dXJucyB7dmVjMn0gYSBuZXcgMkQgdmVjdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShhKSB7XG4gIGxldCBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSgyKTtcbiAgb3V0WzBdID0gYVswXTtcbiAgb3V0WzFdID0gYVsxXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHZlYzIgaW5pdGlhbGl6ZWQgd2l0aCB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB5IFkgY29tcG9uZW50XG4gKiBAcmV0dXJucyB7dmVjMn0gYSBuZXcgMkQgdmVjdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tVmFsdWVzKHgsIHkpIHtcbiAgbGV0IG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDIpO1xuICBvdXRbMF0gPSB4O1xuICBvdXRbMV0gPSB5O1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENvcHkgdGhlIHZhbHVlcyBmcm9tIG9uZSB2ZWMyIHRvIGFub3RoZXJcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBzb3VyY2UgdmVjdG9yXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KG91dCwgYSkge1xuICBvdXRbMF0gPSBhWzBdO1xuICBvdXRbMV0gPSBhWzFdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzIgdG8gdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge051bWJlcn0geCBYIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldChvdXQsIHgsIHkpIHtcbiAgb3V0WzBdID0geDtcbiAgb3V0WzFdID0geTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBBZGRzIHR3byB2ZWMyJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGQob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKyBiWzBdO1xuICBvdXRbMV0gPSBhWzFdICsgYlsxXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTdWJ0cmFjdHMgdmVjdG9yIGIgZnJvbSB2ZWN0b3IgYVxuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0KG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdIC0gYlswXTtcbiAgb3V0WzFdID0gYVsxXSAtIGJbMV07XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogTXVsdGlwbGllcyB0d28gdmVjMidzXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKiBiWzBdO1xuICBvdXRbMV0gPSBhWzFdICogYlsxXTtcbiAgcmV0dXJuIG91dDtcbn07XG5cbi8qKlxuICogRGl2aWRlcyB0d28gdmVjMidzXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGl2aWRlKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdIC8gYlswXTtcbiAgb3V0WzFdID0gYVsxXSAvIGJbMV07XG4gIHJldHVybiBvdXQ7XG59O1xuXG4vKipcbiAqIE1hdGguY2VpbCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzJcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHZlY3RvciB0byBjZWlsXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjZWlsKG91dCwgYSkge1xuICBvdXRbMF0gPSBNYXRoLmNlaWwoYVswXSk7XG4gIG91dFsxXSA9IE1hdGguY2VpbChhWzFdKTtcbiAgcmV0dXJuIG91dDtcbn07XG5cbi8qKlxuICogTWF0aC5mbG9vciB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzJcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHZlY3RvciB0byBmbG9vclxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZmxvb3Iob3V0LCBhKSB7XG4gIG91dFswXSA9IE1hdGguZmxvb3IoYVswXSk7XG4gIG91dFsxXSA9IE1hdGguZmxvb3IoYVsxXSk7XG4gIHJldHVybiBvdXQ7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIG1pbmltdW0gb2YgdHdvIHZlYzInc1xuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1pbihvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gTWF0aC5taW4oYVswXSwgYlswXSk7XG4gIG91dFsxXSA9IE1hdGgubWluKGFbMV0sIGJbMV0pO1xuICByZXR1cm4gb3V0O1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBtYXhpbXVtIG9mIHR3byB2ZWMyJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXgob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IE1hdGgubWF4KGFbMF0sIGJbMF0pO1xuICBvdXRbMV0gPSBNYXRoLm1heChhWzFdLCBiWzFdKTtcbiAgcmV0dXJuIG91dDtcbn07XG5cbi8qKlxuICogTWF0aC5yb3VuZCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzJcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHZlY3RvciB0byByb3VuZFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcm91bmQgKG91dCwgYSkge1xuICBvdXRbMF0gPSBNYXRoLnJvdW5kKGFbMF0pO1xuICBvdXRbMV0gPSBNYXRoLnJvdW5kKGFbMV0pO1xuICByZXR1cm4gb3V0O1xufTtcblxuLyoqXG4gKiBTY2FsZXMgYSB2ZWMyIGJ5IGEgc2NhbGFyIG51bWJlclxuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIHZlY3RvciB0byBzY2FsZVxuICogQHBhcmFtIHtOdW1iZXJ9IGIgYW1vdW50IHRvIHNjYWxlIHRoZSB2ZWN0b3IgYnlcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICogYjtcbiAgb3V0WzFdID0gYVsxXSAqIGI7XG4gIHJldHVybiBvdXQ7XG59O1xuXG4vKipcbiAqIEFkZHMgdHdvIHZlYzIncyBhZnRlciBzY2FsaW5nIHRoZSBzZWNvbmQgb3BlcmFuZCBieSBhIHNjYWxhciB2YWx1ZVxuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsZSB0aGUgYW1vdW50IHRvIHNjYWxlIGIgYnkgYmVmb3JlIGFkZGluZ1xuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2NhbGVBbmRBZGQob3V0LCBhLCBiLCBzY2FsZSkge1xuICBvdXRbMF0gPSBhWzBdICsgKGJbMF0gKiBzY2FsZSk7XG4gIG91dFsxXSA9IGFbMV0gKyAoYlsxXSAqIHNjYWxlKTtcbiAgcmV0dXJuIG91dDtcbn07XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZXVjbGlkaWFuIGRpc3RhbmNlIGJldHdlZW4gdHdvIHZlYzInc1xuICpcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXN0YW5jZShhLCBiKSB7XG4gIHZhciB4ID0gYlswXSAtIGFbMF0sXG4gICAgeSA9IGJbMV0gLSBhWzFdO1xuICByZXR1cm4gTWF0aC5zcXJ0KHgqeCArIHkqeSk7XG59O1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgZXVjbGlkaWFuIGRpc3RhbmNlIGJldHdlZW4gdHdvIHZlYzInc1xuICpcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gc3F1YXJlZCBkaXN0YW5jZSBiZXR3ZWVuIGEgYW5kIGJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNxdWFyZWREaXN0YW5jZShhLCBiKSB7XG4gIHZhciB4ID0gYlswXSAtIGFbMF0sXG4gICAgeSA9IGJbMV0gLSBhWzFdO1xuICByZXR1cm4geCp4ICsgeSp5O1xufTtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBsZW5ndGggb2YgYSB2ZWMyXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBhIHZlY3RvciB0byBjYWxjdWxhdGUgbGVuZ3RoIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBsZW5ndGggb2YgYVxuICovXG5leHBvcnQgZnVuY3Rpb24gbGVuZ3RoKGEpIHtcbiAgdmFyIHggPSBhWzBdLFxuICAgIHkgPSBhWzFdO1xuICByZXR1cm4gTWF0aC5zcXJ0KHgqeCArIHkqeSk7XG59O1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgbGVuZ3RoIG9mIGEgdmVjMlxuICpcbiAqIEBwYXJhbSB7dmVjMn0gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIHNxdWFyZWQgbGVuZ3RoIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGxlbmd0aCBvZiBhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcXVhcmVkTGVuZ3RoIChhKSB7XG4gIHZhciB4ID0gYVswXSxcbiAgICB5ID0gYVsxXTtcbiAgcmV0dXJuIHgqeCArIHkqeTtcbn07XG5cbi8qKlxuICogTmVnYXRlcyB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzJcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHZlY3RvciB0byBuZWdhdGVcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5lZ2F0ZShvdXQsIGEpIHtcbiAgb3V0WzBdID0gLWFbMF07XG4gIG91dFsxXSA9IC1hWzFdO1xuICByZXR1cm4gb3V0O1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBpbnZlcnNlIG9mIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjMlxuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdmVjdG9yIHRvIGludmVydFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJzZShvdXQsIGEpIHtcbiAgb3V0WzBdID0gMS4wIC8gYVswXTtcbiAgb3V0WzFdID0gMS4wIC8gYVsxXTtcbiAgcmV0dXJuIG91dDtcbn07XG5cbi8qKlxuICogTm9ybWFsaXplIGEgdmVjMlxuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdmVjdG9yIHRvIG5vcm1hbGl6ZVxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplKG91dCwgYSkge1xuICB2YXIgeCA9IGFbMF0sXG4gICAgeSA9IGFbMV07XG4gIHZhciBsZW4gPSB4KnggKyB5Knk7XG4gIGlmIChsZW4gPiAwKSB7XG4gICAgLy9UT0RPOiBldmFsdWF0ZSB1c2Ugb2YgZ2xtX2ludnNxcnQgaGVyZT9cbiAgICBsZW4gPSAxIC8gTWF0aC5zcXJ0KGxlbik7XG4gICAgb3V0WzBdID0gYVswXSAqIGxlbjtcbiAgICBvdXRbMV0gPSBhWzFdICogbGVuO1xuICB9XG4gIHJldHVybiBvdXQ7XG59O1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byB2ZWMyJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRvdCBwcm9kdWN0IG9mIGEgYW5kIGJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRvdChhLCBiKSB7XG4gIHJldHVybiBhWzBdICogYlswXSArIGFbMV0gKiBiWzFdO1xufTtcblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgY3Jvc3MgcHJvZHVjdCBvZiB0d28gdmVjMidzXG4gKiBOb3RlIHRoYXQgdGhlIGNyb3NzIHByb2R1Y3QgbXVzdCBieSBkZWZpbml0aW9uIHByb2R1Y2UgYSAzRCB2ZWN0b3JcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcm9zcyhvdXQsIGEsIGIpIHtcbiAgdmFyIHogPSBhWzBdICogYlsxXSAtIGFbMV0gKiBiWzBdO1xuICBvdXRbMF0gPSBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSB6O1xuICByZXR1cm4gb3V0O1xufTtcblxuLyoqXG4gKiBQZXJmb3JtcyBhIGxpbmVhciBpbnRlcnBvbGF0aW9uIGJldHdlZW4gdHdvIHZlYzInc1xuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSB0IGludGVycG9sYXRpb24gYW1vdW50IGJldHdlZW4gdGhlIHR3byBpbnB1dHNcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxlcnAob3V0LCBhLCBiLCB0KSB7XG4gIHZhciBheCA9IGFbMF0sXG4gICAgYXkgPSBhWzFdO1xuICBvdXRbMF0gPSBheCArIHQgKiAoYlswXSAtIGF4KTtcbiAgb3V0WzFdID0gYXkgKyB0ICogKGJbMV0gLSBheSk7XG4gIHJldHVybiBvdXQ7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHJhbmRvbSB2ZWN0b3Igd2l0aCB0aGUgZ2l2ZW4gc2NhbGVcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtOdW1iZXJ9IFtzY2FsZV0gTGVuZ3RoIG9mIHRoZSByZXN1bHRpbmcgdmVjdG9yLiBJZiBvbW1pdHRlZCwgYSB1bml0IHZlY3RvciB3aWxsIGJlIHJldHVybmVkXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByYW5kb20ob3V0LCBzY2FsZSkge1xuICBzY2FsZSA9IHNjYWxlIHx8IDEuMDtcbiAgdmFyIHIgPSBnbE1hdHJpeC5SQU5ET00oKSAqIDIuMCAqIE1hdGguUEk7XG4gIG91dFswXSA9IE1hdGguY29zKHIpICogc2NhbGU7XG4gIG91dFsxXSA9IE1hdGguc2luKHIpICogc2NhbGU7XG4gIHJldHVybiBvdXQ7XG59O1xuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzIgd2l0aCBhIG1hdDJcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXG4gKiBAcGFyYW0ge21hdDJ9IG0gbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1NYXQyKG91dCwgYSwgbSkge1xuICB2YXIgeCA9IGFbMF0sXG4gICAgeSA9IGFbMV07XG4gIG91dFswXSA9IG1bMF0gKiB4ICsgbVsyXSAqIHk7XG4gIG91dFsxXSA9IG1bMV0gKiB4ICsgbVszXSAqIHk7XG4gIHJldHVybiBvdXQ7XG59O1xuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzIgd2l0aCBhIG1hdDJkXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxuICogQHBhcmFtIHttYXQyZH0gbSBtYXRyaXggdG8gdHJhbnNmb3JtIHdpdGhcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybU1hdDJkKG91dCwgYSwgbSkge1xuICB2YXIgeCA9IGFbMF0sXG4gICAgeSA9IGFbMV07XG4gIG91dFswXSA9IG1bMF0gKiB4ICsgbVsyXSAqIHkgKyBtWzRdO1xuICBvdXRbMV0gPSBtWzFdICogeCArIG1bM10gKiB5ICsgbVs1XTtcbiAgcmV0dXJuIG91dDtcbn07XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjMiB3aXRoIGEgbWF0M1xuICogM3JkIHZlY3RvciBjb21wb25lbnQgaXMgaW1wbGljaXRseSAnMSdcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXG4gKiBAcGFyYW0ge21hdDN9IG0gbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1NYXQzKG91dCwgYSwgbSkge1xuICB2YXIgeCA9IGFbMF0sXG4gICAgeSA9IGFbMV07XG4gIG91dFswXSA9IG1bMF0gKiB4ICsgbVszXSAqIHkgKyBtWzZdO1xuICBvdXRbMV0gPSBtWzFdICogeCArIG1bNF0gKiB5ICsgbVs3XTtcbiAgcmV0dXJuIG91dDtcbn07XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjMiB3aXRoIGEgbWF0NFxuICogM3JkIHZlY3RvciBjb21wb25lbnQgaXMgaW1wbGljaXRseSAnMCdcbiAqIDR0aCB2ZWN0b3IgY29tcG9uZW50IGlzIGltcGxpY2l0bHkgJzEnXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxuICogQHBhcmFtIHttYXQ0fSBtIG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtTWF0NChvdXQsIGEsIG0pIHtcbiAgbGV0IHggPSBhWzBdO1xuICBsZXQgeSA9IGFbMV07XG4gIG91dFswXSA9IG1bMF0gKiB4ICsgbVs0XSAqIHkgKyBtWzEyXTtcbiAgb3V0WzFdID0gbVsxXSAqIHggKyBtWzVdICogeSArIG1bMTNdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSB2ZWN0b3JcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdmVjdG9yIHRvIHJlcHJlc2VudCBhcyBhIHN0cmluZ1xuICogQHJldHVybnMge1N0cmluZ30gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cihhKSB7XG4gIHJldHVybiAndmVjMignICsgYVswXSArICcsICcgKyBhWzFdICsgJyknO1xufVxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHZlY3RvcnMgZXhhY3RseSBoYXZlIHRoZSBzYW1lIGVsZW1lbnRzIGluIHRoZSBzYW1lIHBvc2l0aW9uICh3aGVuIGNvbXBhcmVkIHdpdGggPT09KVxuICpcbiAqIEBwYXJhbSB7dmVjMn0gYSBUaGUgZmlyc3QgdmVjdG9yLlxuICogQHBhcmFtIHt2ZWMyfSBiIFRoZSBzZWNvbmQgdmVjdG9yLlxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIHZlY3RvcnMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGFjdEVxdWFscyhhLCBiKSB7XG4gIHJldHVybiBhWzBdID09PSBiWzBdICYmIGFbMV0gPT09IGJbMV07XG59XG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgdmVjdG9ycyBoYXZlIGFwcHJveGltYXRlbHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24uXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBhIFRoZSBmaXJzdCB2ZWN0b3IuXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgVGhlIHNlY29uZCB2ZWN0b3IuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmVjdG9ycyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVxdWFscyhhLCBiKSB7XG4gIGxldCBhMCA9IGFbMF0sIGExID0gYVsxXTtcbiAgbGV0IGIwID0gYlswXSwgYjEgPSBiWzFdO1xuICByZXR1cm4gKE1hdGguYWJzKGEwIC0gYjApIDw9IGdsTWF0cml4LkVQU0lMT04qTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMCksIE1hdGguYWJzKGIwKSkgJiZcbiAgICAgICAgICBNYXRoLmFicyhhMSAtIGIxKSA8PSBnbE1hdHJpeC5FUFNJTE9OKk1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTEpLCBNYXRoLmFicyhiMSkpKTtcbn1cblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzIubGVuZ3RofVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBsZW4gPSBsZW5ndGg7XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayB2ZWMyLnN1YnRyYWN0fVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBzdWIgPSBzdWJ0cmFjdDtcblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzIubXVsdGlwbHl9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IG11bCA9IG11bHRpcGx5O1xuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMi5kaXZpZGV9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IGRpdiA9IGRpdmlkZTtcblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzIuZGlzdGFuY2V9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IGRpc3QgPSBkaXN0YW5jZTtcblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzIuc3F1YXJlZERpc3RhbmNlfVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBzcXJEaXN0ID0gc3F1YXJlZERpc3RhbmNlO1xuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMi5zcXVhcmVkTGVuZ3RofVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBzcXJMZW4gPSBzcXVhcmVkTGVuZ3RoO1xuXG4vKipcbiAqIFBlcmZvcm0gc29tZSBvcGVyYXRpb24gb3ZlciBhbiBhcnJheSBvZiB2ZWMycy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhIHRoZSBhcnJheSBvZiB2ZWN0b3JzIHRvIGl0ZXJhdGUgb3ZlclxuICogQHBhcmFtIHtOdW1iZXJ9IHN0cmlkZSBOdW1iZXIgb2YgZWxlbWVudHMgYmV0d2VlbiB0aGUgc3RhcnQgb2YgZWFjaCB2ZWMyLiBJZiAwIGFzc3VtZXMgdGlnaHRseSBwYWNrZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBvZmZzZXQgTnVtYmVyIG9mIGVsZW1lbnRzIHRvIHNraXAgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgYXJyYXlcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb3VudCBOdW1iZXIgb2YgdmVjMnMgdG8gaXRlcmF0ZSBvdmVyLiBJZiAwIGl0ZXJhdGVzIG92ZXIgZW50aXJlIGFycmF5XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBGdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIHZlY3RvciBpbiB0aGUgYXJyYXlcbiAqIEBwYXJhbSB7T2JqZWN0fSBbYXJnXSBhZGRpdGlvbmFsIGFyZ3VtZW50IHRvIHBhc3MgdG8gZm5cbiAqIEByZXR1cm5zIHtBcnJheX0gYVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBmb3JFYWNoID0gKGZ1bmN0aW9uKCkge1xuICBsZXQgdmVjID0gY3JlYXRlKCk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGEsIHN0cmlkZSwgb2Zmc2V0LCBjb3VudCwgZm4sIGFyZykge1xuICAgIGxldCBpLCBsO1xuICAgIGlmKCFzdHJpZGUpIHtcbiAgICAgIHN0cmlkZSA9IDI7XG4gICAgfVxuXG4gICAgaWYoIW9mZnNldCkge1xuICAgICAgb2Zmc2V0ID0gMDtcbiAgICB9XG5cbiAgICBpZihjb3VudCkge1xuICAgICAgbCA9IE1hdGgubWluKChjb3VudCAqIHN0cmlkZSkgKyBvZmZzZXQsIGEubGVuZ3RoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbCA9IGEubGVuZ3RoO1xuICAgIH1cblxuICAgIGZvcihpID0gb2Zmc2V0OyBpIDwgbDsgaSArPSBzdHJpZGUpIHtcbiAgICAgIHZlY1swXSA9IGFbaV07IHZlY1sxXSA9IGFbaSsxXTtcbiAgICAgIGZuKHZlYywgdmVjLCBhcmcpO1xuICAgICAgYVtpXSA9IHZlY1swXTsgYVtpKzFdID0gdmVjWzFdO1xuICAgIH1cblxuICAgIHJldHVybiBhO1xuICB9O1xufSkoKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dsLW1hdHJpeC9zcmMvZ2wtbWF0cml4L3ZlYzIuanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIGdsbSBmcm9tICdnbC1tYXRyaXgnXG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL3R5cGUtdXRpbCdcblxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVpcmVWZWMzKHZhbDogZ2xtLnZlYzMgfCBBcnJheTxudW1iZXI+IHwgbnVtYmVyKTogZ2xtLnZlYzMge1xuXHRpZiAodmFsIGluc3RhbmNlb2YgQXJyYXkpIHtcblx0XHRsZXQgbGVuID0gdmFsLmxlbmd0aFxuXHRcdGlmIChsZW4gIT09IDMpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYEFycmF5IG11c3QgaGF2ZSAzIGVsZW1lbnRzOyAke2xlbn0gd2VyZSBwcmVzZW50LmApXG5cdFx0dmFsID0gZ2xtLnZlYzMuZnJvbVZhbHVlcyh2YWxbMF0sIHZhbFsxXSwgdmFsWzJdKVxuXHR9IGVsc2UgaWYgKHR5cGVvZih2YWwpID09ICdudW1iZXInKSB7XG5cdFx0dmFsID0gZ2xtLnZlYzMuZnJvbVZhbHVlcyh2YWwsIHZhbCwgdmFsKVxuXHR9XG5cdHJldHVybiB2YWxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lVmVjM0NvbnZlcnRpYmxlKGRhdGE6IHR5cGVzLnZlYzNDb252ZXJ0aWJsZSk6IHR5cGVzLnZlYzNDb252ZXJ0aWJsZSB7XG5cdGlmICh0eXBlb2YoZGF0YSkgPT0gJ251bWJlcicpIHtcblx0XHRyZXR1cm4gZGF0YVxuXHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcblx0XHRyZXR1cm4gZGF0YS5zbGljZSgpXG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIGdsbS52ZWMzLmNsb25lKGRhdGEpXG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC92ZWN0b3ItdXRpbC50cyIsImltcG9ydCAqIGFzIGdsbSBmcm9tICdnbC1tYXRyaXgnXG5pbXBvcnQgeyB2ZWN0b3IsIHR5cGVzIH0gZnJvbSAnLi91dGlsJ1xuXG5leHBvcnQgY2xhc3MgdHJhbnNmb3JtIHtcblxuXHRkYXRhOiBnbG0ubWF0NFxuXG5cdGNvbnN0cnVjdG9yKGRhdGE6IGdsbS5tYXQ0ID0gZ2xtLm1hdDQuY3JlYXRlKCkpIHtcblx0XHR0aGlzLmRhdGEgPSBkYXRhXG5cdH1cblxuXHRwdWJsaWMgaWRlbnRpdHkoKTogdHJhbnNmb3JtIHtcblx0XHRnbG0ubWF0NC5pZGVudGl0eSh0aGlzLmRhdGEpXG5cdFx0cmV0dXJuIHRoaXNcblx0fVxuXG5cdHB1YmxpYyB0cmFuc2xhdGUodmFsOiB0eXBlcy52ZWMzQ29udmVydGlibGUpOiB0cmFuc2Zvcm0ge1xuXHRcdHZhbCA9IHZlY3Rvci5yZXF1aXJlVmVjMyh2YWwpXG5cdFx0Z2xtLm1hdDQudHJhbnNsYXRlKHRoaXMuZGF0YSwgdGhpcy5kYXRhLCB2YWwpXG5cdFx0cmV0dXJuIHRoaXNcblx0fVxuXG5cdHB1YmxpYyByb3RhdGUocmFkOiBudW1iZXIsIGF4aXM6IHR5cGVzLnZlYzNDb252ZXJ0aWJsZSk6IHRyYW5zZm9ybSB7XG5cdFx0YXhpcyA9IHZlY3Rvci5yZXF1aXJlVmVjMyhheGlzKVxuXHRcdGdsbS5tYXQ0LnJvdGF0ZSh0aGlzLmRhdGEsIHRoaXMuZGF0YSwgcmFkLCBheGlzKVxuXHRcdHJldHVybiB0aGlzXG5cdH1cblxuXHRwdWJsaWMgc2NhbGUodmFsOiB0eXBlcy52ZWMzQ29udmVydGlibGUpOiB0cmFuc2Zvcm0ge1xuXHRcdHZhbCA9IHZlY3Rvci5yZXF1aXJlVmVjMyh2YWwpXG5cdFx0Z2xtLm1hdDQuc2NhbGUodGhpcy5kYXRhLCB0aGlzLmRhdGEsIHZhbClcblx0XHRyZXR1cm4gdGhpc1xuXHR9XG5cblx0cHVibGljIG1hdCgpOiBnbG0ubWF0NCB7XG5cdFx0cmV0dXJuIHRoaXMuZGF0YVxuXHR9XG5cblx0cHVibGljIGNsb25lKCk6IHRyYW5zZm9ybSB7XG5cdFx0cmV0dXJuIG5ldyB0cmFuc2Zvcm0odGhpcy5tYXRDb3B5KCkpXG5cdH1cblxuXHRwdWJsaWMgbWF0Q29weSgpOiBnbG0ubWF0NCB7XG5cdFx0cmV0dXJuIGdsbS5tYXQ0LmNvcHkoZ2xtLm1hdDQuY3JlYXRlKCksIHRoaXMuZGF0YSlcblx0fVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2wvbWF0cml4LXV0aWwudHMiLCJpbXBvcnQgeyBSZXNvdXJjZSB9IGZyb20gJy4vcmVzb3VyY2UnXG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL3R5cGUtdXRpbCdcbmltcG9ydCAqIGFzIGNvbW1vbiBmcm9tICcuL2NvbW1vbi11dGlsJ1xuXG4vL1xuLy9cdEF0dHJpYnV0ZVxuLy9cblxuYWJzdHJhY3QgY2xhc3MgX0F0dHJpYnV0ZUJhc2Uge1xuXHRuYW1lOiBhbnlcblx0cHJvdGVjdGVkIHZhbHVlOiBhbnlcblx0dmFsaWRhdG9yOiBhbnlcblx0Y29uc3RydWN0b3IobmFtZTogYW55LCB2YWx1ZTogYW55LCB2YWxpZGF0b3I6IGFueSkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWVcblx0XHR0aGlzLnZhbHVlID0gdmFsdWVcblx0XHR0aGlzLnZhbGlkYXRvciA9IHZhbGlkYXRvclxuXHR9XG5cdGFic3RyYWN0IHBlZWtWYWx1ZSgpOiBhbnlcblx0YWJzdHJhY3Qgc2V0VmFsdWUoLi4uYXJnczogYW55W10pOiBhbnlcblx0cHVibGljIGFjdGl2YXRvcjxUIGV4dGVuZHMgX0F0dHJpYnV0ZUJhc2U+XG5cdFx0KHR5cGU6IHtuZXcoLi4uYXJncyA6IGFueVtdKTogVCA7fSwgLi4uYXJncyA6IGFueVtdKTogVCB7XG5cdFx0cmV0dXJuIG5ldyB0eXBlKC4uLmFyZ3MpXG5cdH1cbn1cblxudHlwZSBfVmFsaWRhdG9yVDxUIGV4dGVuZHMgX0F0dHJpYnV0ZUJhc2UsIEs+ID0gKGF0dHI6IFQsIHZhbHVlOiBLKSA9PiB2b2lkXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBfQXR0cmlidXRlPFNUIGV4dGVuZHMgdHlwZXMuY2xvbmVhYmxlLCBcblx0R1QgZXh0ZW5kcyB0eXBlcy5jbG9uZWFibGUsIEsgZXh0ZW5kcyBzdHJpbmc+IGV4dGVuZHMgX0F0dHJpYnV0ZUJhc2Uge1xuXHRuYW1lOiBLXG5cdHZhbHVlOiBHVCA9IG51bGxcblx0aXNEaXJ0eTogYm9vbGVhbiA9IHRydWVcblx0dmFsaWRhdG9yOiBfVmFsaWRhdG9yVDxfQXR0cmlidXRlPFNULCBHVCwgSz4sIFNUPlxuXHRjb25zdHJ1Y3RvcihuYW1lOiBLLCB2YWx1ZTogU1QsIHZhbGlkYXRvcjogX1ZhbGlkYXRvclQ8X0F0dHJpYnV0ZTxTVCwgR1QsIEs+LCBTVD4gPSB2YWxpZGF0b3JzLkFueSkge1xuXHRcdHN1cGVyKG5hbWUsIHZhbHVlLCB2YWxpZGF0b3IpXG5cdFx0dGhpcy5uYW1lID0gbmFtZVxuXHRcdHRoaXMuc2V0VmFsaWRhdG9yKHZhbGlkYXRvcilcblx0XHR0aGlzLnZhbGlkYXRlKHZhbHVlKVxuXHRcdHRoaXMuc2V0VmFsdWUodmFsdWUpXG5cdH1cblx0Z2V0VmFsdWUoKTogR1Qge1xuXHRcdHRoaXMuaXNEaXJ0eSA9IGZhbHNlXG5cdFx0cmV0dXJuIHRoaXMudmFsdWVcblx0fVxuXHRwdWJsaWMgcGVla1ZhbHVlKCk6IEdUIHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZVxuXHR9XG5cdHNldFZhbHVlKHZhbHVlOiBTVCk6IHZvaWQge1xuXHRcdHRoaXMudmFsaWRhdGUodmFsdWUpXG5cdFx0dGhpcy52YWx1ZSA9IHRoaXMuX3NldFZhbHVlKHZhbHVlKVxuXHRcdHRoaXMuaXNEaXJ0eSA9IHRydWVcblx0fVxuXHRwcm90ZWN0ZWQgYWJzdHJhY3QgX3NldFZhbHVlKHZhbHVlOiBTVCk6IEdUXG5cdHByb3RlY3RlZCBzZXRWYWxpZGF0b3IodmFsaWRhdG9yOiBfVmFsaWRhdG9yVDxfQXR0cmlidXRlPFNULCBHVCwgSz4sIFNUPik6IHZvaWQge1xuXHRcdHRoaXMudmFsaWRhdG9yID0gdmFsaWRhdG9yXG5cdH1cblx0cHJvdGVjdGVkIHZhbGlkYXRlKHZhbHVlOiBTVCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLnZhbGlkYXRvcikgdGhpcy52YWxpZGF0b3IodGhpcywgdmFsdWUpXG5cdH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSB2YWxpZGF0b3JzIHtcblx0ZXhwb3J0IGZ1bmN0aW9uIEFueTxTVCBleHRlbmRzIHR5cGVzLmNsb25lYWJsZSwgXG5cdFx0R1QgZXh0ZW5kcyB0eXBlcy5jbG9uZWFibGUsIEsgZXh0ZW5kcyBzdHJpbmc+KGF0dHI6IF9BdHRyaWJ1dGU8U1QsIEdULCBLPiwgZGF0YTogU1QpIHt9XG5cdGV4cG9ydCBmdW5jdGlvbiBOdW1iZXI8U1QgZXh0ZW5kcyB0eXBlcy5jbG9uZWFibGUsIFxuXHRcdEdUIGV4dGVuZHMgdHlwZXMuY2xvbmVhYmxlLCBLIGV4dGVuZHMgc3RyaW5nPihhdHRyOiBfQXR0cmlidXRlPFNULCBHVCwgSz4sIGRhdGE6IFNUKSB7XG5cdFx0aWYgKHR5cGVvZihkYXRhKSAhPT0gJ251bWJlcicpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYEF0dHJpYnV0ZSBcIiR7YXR0ci5uYW1lfVwiIG11c3QgYmUgYSBudW1iZXIuYClcblx0fVxuXHRleHBvcnQgZnVuY3Rpb24gVmVjMzxTVCBleHRlbmRzIHR5cGVzLmNsb25lYWJsZSwgXG5cdFx0R1QgZXh0ZW5kcyB0eXBlcy5jbG9uZWFibGUsIEsgZXh0ZW5kcyBzdHJpbmc+KGF0dHI6IF9BdHRyaWJ1dGU8U1QsIEdULCBLPiwgZGF0YTogU1QpIHtcblx0XHRpZiAoIXR5cGVzLmlzTkVsZW1lbnRBcnJheShkYXRhLCAzKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBBdHRyaWJ1dGUgXCIke2F0dHIubmFtZX1cIiBtdXN0IGJlIGEgdmVjMywgb3IgZXF1aXZhbGVudCBhcnJheS10eXBlLmApXG5cdFx0fVxuXHR9XG5cdGV4cG9ydCBmdW5jdGlvbiBWZWMzT3JUZXh0dXJlPFNUIGV4dGVuZHMgdHlwZXMuY2xvbmVhYmxlLCBcblx0XHRHVCBleHRlbmRzIHR5cGVzLmNsb25lYWJsZSwgSyBleHRlbmRzIHN0cmluZz4oYXR0cjogX0F0dHJpYnV0ZTxTVCwgR1QsIEs+LCBkYXRhOiBTVCkge1xuXHRcdGlmICghdHlwZXMuaXNORWxlbWVudEFycmF5KGRhdGEsIDMpICYmICF0eXBlcy5pc1RleHR1cmUoZGF0YSkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgQXR0cmlidXRlIFwiJHthdHRyLm5hbWV9XCIgbXVzdCBiZSBhIHZlYzMgKG9yIGVxdWl2YWxlbnQgYXJyYXktdHlwZSksIG9yIGEgdGV4dHVyZS5gKVxuXHRcdH1cblx0fVxuXHRleHBvcnQgZnVuY3Rpb24gQm9vbGVhbjxTVCBleHRlbmRzIHR5cGVzLmNsb25lYWJsZSwgXG5cdFx0R1QgZXh0ZW5kcyB0eXBlcy5jbG9uZWFibGUsIEsgZXh0ZW5kcyBzdHJpbmc+KGF0dHI6IF9BdHRyaWJ1dGU8U1QsIEdULCBLPiwgZGF0YTogU1QpIHtcblx0XHRpZiAodHlwZW9mKGRhdGEpICE9PSAnYm9vbGVhbicpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYEF0dHJpYnV0ZSBcIiR7YXR0ci5uYW1lfVwiIG11c3QgYmUgYSBib29sZWFuLmApXG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIF9BdHRyaWJ1dGVNYXA8VCBleHRlbmRzIF9BdHRyaWJ1dGVCYXNlPiB7XG5cdGl0ZW1zOiB7IFtrZXk6IHN0cmluZ106IFQgfSA9IHt9XG5cblx0Y29uc3RydWN0b3IoKSB7fVxuXG5cdHB1YmxpYyBhZGQodmFsOiBUKTogdm9pZCB7XG5cdFx0dGhpcy5pdGVtc1t2YWwubmFtZV0gPSB2YWxcblx0fVxuXG5cdHB1YmxpYyBnZXRBbGwoKTogQXJyYXk8VD4ge1xuXHRcdGxldCBpdGVtcyA9IHRoaXMuaXRlbXNcblx0XHRsZXQga2V5czogQXJyYXk8c3RyaW5nPiA9IE9iamVjdC5rZXlzKGl0ZW1zKVxuXHRcdGxldCB2YWx1ZXM6IEFycmF5PFQ+ID0ga2V5cy5tYXAoa2V5ID0+IGl0ZW1zW2tleV0pXG5cdFx0cmV0dXJuIHZhbHVlc1xuXHR9XG5cblx0cHVibGljIGhhczxYIGV4dGVuZHMgc3RyaW5nPihrZXk6IFgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5pdGVtc1trZXldICE9PSB1bmRlZmluZWRcblx0fVxuXG5cdHB1YmxpYyBnZXRPbmU8WCBleHRlbmRzIHN0cmluZz4oa2V5OiBYKTogVCB7XG5cdFx0bGV0IGl0ZW0gPSB0aGlzLml0ZW1zW2tleV1cblx0XHRpZiAoaXRlbSA9PT0gdW5kZWZpbmVkKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBSZXF1ZXN0ZWQgbm9uLXByZXNlbnQgYXR0cmlidXRlIFwiJHtrZXl9XCIuYClcblx0XHRyZXR1cm4gaXRlbVxuXHR9XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBdHRyaWJ1dGFibGU8QXRUIGV4dGVuZHMgX0F0dHJpYnV0ZUJhc2UsIE1hcFQgZXh0ZW5kcyBfQXR0cmlidXRlTWFwPEF0VD4sIFxuXHRLIGV4dGVuZHMgc3RyaW5nPiBleHRlbmRzIFJlc291cmNlIHtcblx0YXR0cmlidXRlczogTWFwVFxuXG5cdGNvbnN0cnVjdG9yKCkgeyBzdXBlcigpIH1cblxuXHRwcm90ZWN0ZWQgYWRkQXR0cmlidXRlKGF0dHI6IEF0VCk6IHZvaWQge1xuXHRcdHRoaXMuYXR0cmlidXRlcy5hZGQoYXR0cilcblx0fVxuXG5cdHByb3RlY3RlZCBhZGRBdHRyaWJ1dGVzKC4uLmF0dHJzOiBBcnJheTxBdFQ+KSB7XG5cdFx0Zm9yIChsZXQgYXR0ciBvZiBhdHRycykge1xuXHRcdFx0dGhpcy5hZGRBdHRyaWJ1dGUoYXR0cilcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgaGFzQXR0cmlidXRlKG5hbWU6IEspOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5hdHRyaWJ1dGVzLmhhcyhuYW1lKVxuXHR9XG5cblx0cHVibGljIGVudW1lcmF0ZUF0dHJpYnV0ZXMoKTogQXJyYXk8QXRUPiB7XG5cdFx0cmV0dXJuIHRoaXMuYXR0cmlidXRlcy5nZXRBbGwoKVxuXHR9XG5cblx0cHVibGljIGdldEF0dHJpYnV0ZShuYW1lOiBLKTogQXRUIHtcblx0XHRyZXR1cm4gdGhpcy5hdHRyaWJ1dGVzLmdldE9uZShuYW1lKVxuXHR9XG5cblx0cHJvdGVjdGVkIGFjdGl2YXRvcjxBdFQgZXh0ZW5kcyBfQXR0cmlidXRlQmFzZSwgTWFwVCBleHRlbmRzIF9BdHRyaWJ1dGVNYXA8QXRUPiwgXG5cdFx0SyBleHRlbmRzIHN0cmluZywgVCBleHRlbmRzIEF0dHJpYnV0YWJsZTxBdFQsIE1hcFQsIEs+PlxuXHRcdCh0eXBlOiB7bmV3KC4uLmFyZ3MgOiBhbnlbXSk6IFQgO30sIC4uLmFyZ3M6IGFueVtdKTogVCB7XG5cdFx0cmV0dXJuIG5ldyB0eXBlKC4uLmFyZ3MpXG5cdH1cblxuXHRwcm90ZWN0ZWQgX2Nsb25lPEF0VCBleHRlbmRzIF9BdHRyaWJ1dGVCYXNlLCBNYXBUIGV4dGVuZHMgX0F0dHJpYnV0ZU1hcDxBdFQ+LCBcblx0XHRLIGV4dGVuZHMgc3RyaW5nLCBUIGV4dGVuZHMgQXR0cmlidXRhYmxlPEF0VCwgTWFwVCwgSz4sIFxuXHRcdFggZXh0ZW5kcyBBdFQ+XG5cdFx0KGF0dHJpYnV0YWJsZUNvbnN0cnVjdG9yOiB7bmV3KC4uLmFyZ3MgOiBhbnlbXSk6IFQgO30sIFxuXHRcdFx0YXR0cmlidXRlQ29uc3RydWN0b3I6IHtuZXcoLi4uYXJncyA6IGFueVtdKTogWCA7fSwgLi4uYXJnczogYW55W10pOiBUIHtcblxuXHRcdGxldCBjb3B5OiBUID0gdGhpcy5hY3RpdmF0b3IoYXR0cmlidXRhYmxlQ29uc3RydWN0b3IsIC4uLmFyZ3MpXG5cdFx0Zm9yIChsZXQgYXR0ciBvZiB0aGlzLmVudW1lcmF0ZUF0dHJpYnV0ZXMoKSkge1xuXHRcdFx0aWYgKCFjb3B5Lmhhc0F0dHJpYnV0ZShhdHRyLm5hbWUpKSB7XG5cdFx0XHRcdGxldCBjb3B5QXR0ID0gY29tbW9uLmNsb25lKGF0dHIucGVla1ZhbHVlKCkpXG5cdFx0XHRcdGxldCBhdHRyXyA9IGF0dHIuYWN0aXZhdG9yKGF0dHJpYnV0ZUNvbnN0cnVjdG9yLCBhdHRyLm5hbWUsIGNvcHlBdHQsIGF0dHIudmFsaWRhdG9yKVxuXHRcdFx0XHRjb3B5LmFkZEF0dHJpYnV0ZShhdHRyXylcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvcHkuZ2V0QXR0cmlidXRlKGF0dHIubmFtZSkuc2V0VmFsdWUoY29tbW9uLmNsb25lKGF0dHIucGVla1ZhbHVlKCkpKVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gY29weVxuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2wvYXR0cmlidXRlLXV0aWwudHMiLCJleHBvcnQgYWJzdHJhY3QgY2xhc3MgRGVmYXVsdHM8VD4ge1xuXHRwdWJsaWMgb3B0aW9uczogVFxuXHRjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkgeyB0aGlzLm9wdGlvbnMgPSB0aGlzLmdldCguLi5hcmdzKSB9XG5cdHB1YmxpYyBhYnN0cmFjdCBnZXQoLi4uYXJnczogYW55W10pOiBUXG5cdHB1YmxpYyBzZXQ8SyBleHRlbmRzIGtleW9mIFQsIFY+KG5hbWU6IEssIHZhbHVlOiBUW0tdKTogRGVmYXVsdHM8VD4ge1xuXHRcdHRoaXMub3B0aW9uc1tuYW1lXSA9IHZhbHVlXG5cdFx0cmV0dXJuIHRoaXNcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2dsL2RlZmF1bHQtdXRpbC50cyIsImltcG9ydCB7IEJhc2ljIH0gZnJvbSAnLi9zaGFkZXJzL3NoYWRlci1iYXNpYydcbmltcG9ydCB7IFBCUjEgfSBmcm9tICcuL3NoYWRlcnMvc2hhZGVyLXBicjEnXG5pbXBvcnQgeyBTa3lib3ggfSBmcm9tICcuL3NoYWRlcnMvc2hhZGVyLXNreWJveCdcblxuY29uc3QgU2hhZGVyTGlicmFyeSA9IHtcblx0QmFzaWMsXG5cdFBCUjEsXG5cdFNreWJveFxufVxuXG5leHBvcnQgeyBTaGFkZXJMaWJyYXJ5IH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC9zaGFkZXItbGlicmFyeS50cyIsImltcG9ydCB7IFNoYWRlclNvdXJjZSwgU2hhZGVyUHJvZ3JhbVNvdXJjZSwgU2hhZGVyVHlwZXMgfSBmcm9tICcuLi9zaGFkZXInXG5cbm5hbWVzcGFjZSBfc291cmNlcyB7XG5cdGV4cG9ydCBjb25zdCB2ZXJ0ZXg6IHN0cmluZyA9IGBcblx0XHRhdHRyaWJ1dGUgdmVjMyBpbl9wb3NpdGlvbjtcblx0XHRhdHRyaWJ1dGUgdmVjMyBpbl9ub3JtYWw7XG5cdFx0YXR0cmlidXRlIHZlYzIgaW5fdXY7XG5cblx0XHR1bmlmb3JtIG1hdDQgbW9kZWw7XG5cdFx0dW5pZm9ybSBtYXQ0IHByb2plY3Rpb247XG5cdFx0dW5pZm9ybSBtYXQ0IHZpZXc7XG5cblx0XHR2b2lkIG1haW4oKSB7XG5cdFx0XHRnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb24gKiB2aWV3ICogbW9kZWwgKiB2ZWM0KGluX3Bvc2l0aW9uLCAxLjApO1xuXHRcdH1cblx0YFxuXHRleHBvcnQgY29uc3QgZnJhZ21lbnQ6IHN0cmluZyA9IGBcblx0XHRwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcblxuXHRcdHVuaWZvcm0gdmVjMyBhbGJlZG87XG5cblx0XHR2b2lkIG1haW4oKSB7XG4gICAgICBcdFx0Z2xfRnJhZ0NvbG9yID0gdmVjNChhbGJlZG8sIDEuMCk7XG4gICAgXHR9XG5cdGBcbn1cblxuY29uc3QgQmFzaWM6IFNoYWRlclByb2dyYW1Tb3VyY2UgPSB7XG5cdHNvdXJjZXM6IFtcblx0XHR7XG5cdFx0XHRzb3VyY2U6IF9zb3VyY2VzLnZlcnRleCxcblx0XHRcdHR5cGU6IFNoYWRlclR5cGVzLlZFUlRFWCxcblx0XHRcdHVuaWZvcm1zOiBbJ21vZGVsJywgJ3ZpZXcnLCAncHJvamVjdGlvbiddXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzb3VyY2U6IF9zb3VyY2VzLmZyYWdtZW50LFxuXHRcdFx0dHlwZTogU2hhZGVyVHlwZXMuRlJBR01FTlQsXG5cdFx0XHR1bmlmb3JtczogWydhbGJlZG8nXVxuXHRcdH1cblx0XVxufVxuXG5leHBvcnQgeyBCYXNpYyB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2wvc2hhZGVycy9zaGFkZXItYmFzaWMudHMiLCJpbXBvcnQgeyBTaGFkZXJTb3VyY2UsIFNoYWRlclByb2dyYW1Tb3VyY2UsIFNoYWRlclR5cGVzIH0gZnJvbSAnLi4vc2hhZGVyJ1xuXG5uYW1lc3BhY2UgX3NvdXJjZXMge1xuXHRleHBvcnQgY29uc3QgdmVydGV4OiBzdHJpbmcgPSBgXG5cdFx0YXR0cmlidXRlIHZlYzMgaW5fcG9zaXRpb247XG5cdFx0YXR0cmlidXRlIHZlYzMgaW5fbm9ybWFsO1xuXHRcdGF0dHJpYnV0ZSB2ZWMyIGluX3V2O1xuXG5cdFx0dW5pZm9ybSBtYXQ0IG1vZGVsO1xuXHRcdHVuaWZvcm0gbWF0NCB2aWV3O1xuXHRcdHVuaWZvcm0gbWF0NCBwcm9qZWN0aW9uO1xuXG5cdFx0dmFyeWluZyBtZWRpdW1wIHZlYzMgdl9wb3NpdGlvbjtcblx0XHR2YXJ5aW5nIG1lZGl1bXAgdmVjMiB2X3V2O1xuXHRcdHZhcnlpbmcgbWVkaXVtcCB2ZWMzIHZfbm9ybWFsO1xuXG5cdFx0dm9pZCBtYWluKCkge1xuXHRcdFx0Z2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uICogdmlldyAqIG1vZGVsICogdmVjNChpbl9wb3NpdGlvbiwgMS4wKTtcblx0XHRcdHZfcG9zaXRpb24gPSB2ZWMzKG1vZGVsICogdmVjNChpbl9wb3NpdGlvbiwgMS4wKSk7XG5cdFx0XHR2X3V2ID0gaW5fdXY7XG5cdFx0XHR2X25vcm1hbCA9IGluX25vcm1hbDtcblx0XHR9XG5cdGBcblx0ZXhwb3J0IGNvbnN0IGZyYWdtZW50OiBzdHJpbmcgPSBgXG5cblx0XHRwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcblxuXHRcdGNvbnN0IGZsb2F0IFBJID0gMy4xNDE1OTI2NTM1OTtcblxuXHRcdGZsb2F0IGRpc3RyaWJ1dGlvbl9nZ3godmVjMyBOLCB2ZWMzIEgsIGZsb2F0IHJvdWdobmVzcyk7XG5cdFx0ZmxvYXQgZ2VvbWV0cnlfc2NobGlja19nZ3goZmxvYXQgTmRvdFYsIGZsb2F0IHJvdWdobmVzcyk7XG5cdFx0ZmxvYXQgZ2VvbWV0cnlfc21pdGgodmVjMyBOLCB2ZWMzIFYsIHZlYzMgTCwgZmxvYXQgcm91Z2huZXNzKTtcblx0XHR2ZWMzIGZyZXNuZWxfc2NobGljayhmbG9hdCBjb3NfdGhldGEsIHZlYzMgRjApO1xuXG5cdFx0dmVjMyBQQlIoXG5cdFx0ICAgICB2ZWMzIG5vcm1hbHMsXG5cdFx0ICAgICB2ZWMzIGFsYmVkbyxcblx0XHQgICAgIGZsb2F0IHJvdWdobmVzcyxcblx0XHQgICAgIGZsb2F0IG1ldGFsbGljLFxuXHRcdCAgICAgdmVjMyBjYW1fcG9zaXRpb24sXG5cdFx0ICAgICB2ZWMzIHdvcmxkX3Bvc2l0aW9uLFxuXHRcdCAgICAgdmVjMyBsaWdodF9wb3NpdGlvbixcblx0XHQgICAgIHZlYzMgbGlnaHRfY29sb3IsXG5cdFx0ICAgICBib29sIGlzX2RpcmVjdGlvbmFsKSB7XG5cdFx0ICAgIFxuXHRcdCAgICB2ZWMzIEYwID0gdmVjMygwLjA0KTtcblx0XHQgICAgRjAgPSBtaXgoRjAsIGFsYmVkbywgbWV0YWxsaWMpO1xuXHRcdCAgICBcblx0XHQgICAgdmVjMyBOID0gbm9ybWFsaXplKG5vcm1hbHMpO1xuXHRcdCAgICB2ZWMzIFYgPSBub3JtYWxpemUoY2FtX3Bvc2l0aW9uIC0gd29ybGRfcG9zaXRpb24pO1xuXHRcdCAgICBcblx0XHQgICAgdmVjMyBMO1xuXG5cdFx0ICAgIGlmICghaXNfZGlyZWN0aW9uYWwpIHtcblx0XHQgICAgXHRMID0gbm9ybWFsaXplKGxpZ2h0X3Bvc2l0aW9uIC0gd29ybGRfcG9zaXRpb24pO1xuXHRcdCAgICB9IGVsc2Uge1xuXHRcdCAgICBcdEwgPSBub3JtYWxpemUoLWxpZ2h0X3Bvc2l0aW9uKTtcblx0XHQgICAgfVxuXG5cdFx0ICAgIHZlYzMgSCA9IG5vcm1hbGl6ZShWICsgTCk7XG5cblx0XHQgICAgZmxvYXQgYXR0ZW51YXRpb24gPSAxLjA7XG5cdFx0ICAgIFxuXHRcdCAgICBpZiAoIWlzX2RpcmVjdGlvbmFsKSB7XG5cdFx0ICAgIFx0ZmxvYXQgZGlzdGFuY2UgPSBsZW5ndGgobGlnaHRfcG9zaXRpb24gLSB3b3JsZF9wb3NpdGlvbik7XG5cdFx0ICAgIFx0YXR0ZW51YXRpb24gPSAxLjAgLyAoZGlzdGFuY2UgKiBkaXN0YW5jZSAqIDAuMDAwMik7XG5cdFx0ICAgIH1cblx0XHQgICAgXG5cdFx0ICAgIHZlYzMgcmFkaWFuY2UgPSBsaWdodF9jb2xvciAqIGF0dGVudWF0aW9uO1xuXHRcdCAgICBcblx0XHQgICAgdmVjMyBGID0gZnJlc25lbF9zY2hsaWNrKG1heChkb3QoSCwgViksIDAuMCksIEYwKTtcblx0XHQgICAgZmxvYXQgTkRGID0gZGlzdHJpYnV0aW9uX2dneChOLCBILCByb3VnaG5lc3MpO1xuXHRcdCAgICBmbG9hdCBHID0gZ2VvbWV0cnlfc21pdGgoTiwgViwgTCwgcm91Z2huZXNzKTtcblx0XHQgICAgdmVjMyBudW1lciA9IHZlYzMoTkRGKSAqIHZlYzMoRykgKiBGO1xuXHRcdCAgICBmbG9hdCBkZW5vbSA9IDQuMCAqIG1heChkb3QoTiwgViksIDAuMCkgKiBtYXgoZG90KE4sIEwpLCAwLjApICsgMC4wMDE7XG5cdFx0ICAgIHZlYzMgc3BlY3VsYXIgPSBudW1lciAvIGRlbm9tO1xuXHRcdCAgICBcblx0XHQgICAgdmVjMyBrUyA9IEY7XG5cdFx0ICAgIHZlYzMga0QgPSB2ZWMzKDEuMCkgLSBrUztcblx0XHQgICAga0QgKj0gMS4wIC0gbWV0YWxsaWM7XG5cdFx0ICAgIFxuXHRcdCAgICBmbG9hdCBOZG90TCA9IG1heChkb3QoTiwgTCksIDAuMCk7XG5cdFx0ICAgIHJldHVybiAoa0QgKiBhbGJlZG8gLyBQSSArIHNwZWN1bGFyKSAqIHJhZGlhbmNlICogTmRvdEw7XG5cdFx0fVxuXG5cdFx0Ly9cblx0XHQvLyAgRnJlc25lbCBjb21wb25lbnQgKEYpXG5cdFx0Ly9cblxuXHRcdHZlYzMgZnJlc25lbF9zY2hsaWNrKGZsb2F0IGNvc1RoZXRhLCB2ZWMzIEYwKSB7XG5cdFx0ICAgIHJldHVybiBGMCArICgxLjAgLSBGMCkgKiBwb3coMS4wIC0gY29zVGhldGEsIDUuMCk7XG5cdFx0fVxuXG5cdFx0Ly9cblx0XHQvLyAgTm9ybWFsIGRpc3RyaWJ1dGlvbiBjb21wb25lbnQgKEQpXG5cdFx0Ly9cblxuXHRcdGZsb2F0IGRpc3RyaWJ1dGlvbl9iZWNrbWFuKHZlYzMgaCwgdmVjMyBuLCBmbG9hdCByb3VnaG5lc3MpIHtcblx0XHQgICAgZmxvYXQgYSA9IHJvdWdobmVzcyAqIHJvdWdobmVzcztcblx0XHQgICAgZmxvYXQgYTIgPSBhICogYTtcblx0XHQgICAgZmxvYXQgbl9kb3RfaCA9IG1heChkb3QobiwgaCksIDAuMCk7XG5cdFx0ICAgIGZsb2F0IG5fZG90X2gyID0gbl9kb3RfaCAqIG5fZG90X2g7XG5cdFx0ICAgIGZsb2F0IHBhcnRfYSA9IDEuMCAvIChQSSAqIGEyICogcG93KG5fZG90X2gsIDQuMCkpO1xuXHRcdCAgICBmbG9hdCBleHBfY29tcG9uZW50ID0gKG5fZG90X2gyIC0gMS4wKSAvIChhMiAqIG5fZG90X2gyKTtcblx0XHQgICAgcmV0dXJuIHBhcnRfYSAqIGV4cChleHBfY29tcG9uZW50KTtcblx0XHR9XG5cblx0XHRmbG9hdCBkaXN0cmlidXRpb25fZ2d4KHZlYzMgTiwgdmVjMyBILCBmbG9hdCByb3VnaG5lc3MpIHtcblx0XHQgICAgZmxvYXQgYSA9IHJvdWdobmVzcyAqIHJvdWdobmVzcztcblx0XHQgICAgZmxvYXQgYTIgPSBhICogYTtcblx0XHQgICAgZmxvYXQgTmRvdEggPSBtYXgoZG90KE4sIEgpLCAwLjApO1xuXHRcdCAgICBmbG9hdCBOZG90SDIgPSBOZG90SCAqIE5kb3RIO1xuXHRcdCAgICBcblx0XHQgICAgZmxvYXQgZGVub20gPSAoTmRvdEgyICogKGEyLTEuMCkgKyAxLjApO1xuXHRcdCAgICBkZW5vbSA9IFBJICogZGVub20gKiBkZW5vbTtcblx0XHQgICAgXG5cdFx0ICAgIHJldHVybiBhMiAvIGRlbm9tO1xuXHRcdH1cblxuXHRcdC8vXG5cdFx0Ly8gIEdlb21ldHJ5IGRpc3RyaWJ1dGlvbiBjb21wb25lbnQgKEcpXG5cdFx0Ly9cblxuXHRcdGZsb2F0IGdlb21ldHJ5X3NjaGxpY2tfZ2d4KGZsb2F0IE5kb3RWLCBmbG9hdCByb3VnaG5lc3MpIHtcblx0XHQgICAgZmxvYXQgciA9IHJvdWdobmVzcyArIDEuMDtcblx0XHQgICAgLy8gIGRpcmVjdCBsaWdodFxuXHRcdCAgICBmbG9hdCBrID0gKHIqcikgLyA4LjA7XG5cdFx0ICAgIC8vICBJQkxcblx0XHQgICAgLy8gIGZsb2F0IGsgPSAocm91Z2huZXNzICogcm91Z2huZXNzKSAvIDI7XG5cdFx0ICAgIGZsb2F0IGRlbm9tID0gTmRvdFYgKiAoMS4wIC0gaykgKyBrO1xuXHRcdCAgICByZXR1cm4gTmRvdFYgLyBkZW5vbTtcblx0XHR9XG5cblx0XHRmbG9hdCBnZW9tZXRyeV9zbWl0aCh2ZWMzIE4sIHZlYzMgViwgdmVjMyBMLCBmbG9hdCByb3VnaG5lc3MpIHtcblx0XHQgICAgZmxvYXQgTmRvdFYgPSBtYXgoZG90KE4sIFYpLCAwLjApO1xuXHRcdCAgICBmbG9hdCBOZG90TCA9IG1heChkb3QoTiwgTCksIDAuMCk7XG5cdFx0ICAgIGZsb2F0IGdneDIgPSBnZW9tZXRyeV9zY2hsaWNrX2dneChOZG90Viwgcm91Z2huZXNzKTtcblx0XHQgICAgZmxvYXQgZ2d4MSA9IGdlb21ldHJ5X3NjaGxpY2tfZ2d4KE5kb3RMLCByb3VnaG5lc3MpO1xuXHRcdCAgICByZXR1cm4gZ2d4MSAqIGdneDI7XG5cdFx0fVxuXG5cdFx0c3RydWN0IFBvaW50TGlnaHQge1xuXHRcdFx0dmVjMyBwb3NpdGlvbjtcblx0XHRcdHZlYzMgY29sb3I7XG5cdFx0XHR2ZWMzIG1hc2s7XG5cdFx0fTtcblxuXHRcdHN0cnVjdCBEaXJlY3Rpb25hbExpZ2h0IHtcblx0XHRcdHZlYzMgZGlyZWN0aW9uO1xuXHRcdFx0dmVjMyBjb2xvcjtcblx0XHRcdHZlYzMgbWFzaztcblx0XHR9O1xuXG5cdFx0Y29uc3QgaW50IG5fcG9pbnRfbGlnaHRzID0gMjtcblx0XHRjb25zdCBpbnQgbl9kaXJlY3Rpb25hbF9saWdodHMgPSAxO1xuXG5cdFx0dW5pZm9ybSBQb2ludExpZ2h0IHBvaW50X2xpZ2h0c1tuX3BvaW50X2xpZ2h0c107XG5cdFx0dW5pZm9ybSBEaXJlY3Rpb25hbExpZ2h0IGRpcmVjdGlvbmFsX2xpZ2h0c1tuX2RpcmVjdGlvbmFsX2xpZ2h0c107XG5cblx0XHR1bmlmb3JtIHZlYzMgY2FtX3Bvc2l0aW9uO1xuXG5cdFx0dW5pZm9ybSB2ZWMzIGFsYmVkbztcblx0XHR1bmlmb3JtIGZsb2F0IHJvdWdobmVzcztcblx0XHR1bmlmb3JtIGZsb2F0IG1ldGFsbGljO1xuXG5cdFx0dmFyeWluZyBtZWRpdW1wIHZlYzMgdl9wb3NpdGlvbjtcblx0XHR2YXJ5aW5nIG1lZGl1bXAgdmVjMiB2X3V2O1xuXHRcdHZhcnlpbmcgbWVkaXVtcCB2ZWMzIHZfbm9ybWFsO1xuXG5cdFx0dm9pZCBtYWluKCkge1xuXG5cdFx0XHR2ZWMzIGZpbmFsX2NvbG9yID0gYWxiZWRvO1xuXG5cdFx0XHR2ZWMzIExvID0gdmVjMygwLjApO1xuXG5cdFx0XHQvL1x0cG9pbnQgbGlnaHRzXG5cblx0XHRcdGZvciAoaW50IGkgPSAwOyBpIDwgbl9wb2ludF9saWdodHM7IGkrKykge1xuXHRcdFx0XHRib29sIGlzX2RpcmVjdGlvbmFsID0gZmFsc2U7XG5cdFx0XHRcdHZlYzMgcmVzID0gUEJSKHZfbm9ybWFsLCBhbGJlZG8sIHJvdWdobmVzcywgbWV0YWxsaWMsIFxuXHRcdFx0XHRcdGNhbV9wb3NpdGlvbiwgdl9wb3NpdGlvbiwgcG9pbnRfbGlnaHRzW2ldLnBvc2l0aW9uLCBwb2ludF9saWdodHNbaV0uY29sb3IsIGlzX2RpcmVjdGlvbmFsKTtcblx0XHRcdFx0cmVzICo9IHBvaW50X2xpZ2h0c1tpXS5tYXNrO1xuXHRcdFx0XHRMbyArPSByZXM7XG5cdFx0XHR9XG5cblx0XHRcdC8vXHRkaXJlY3Rpb25hbCBsaWdodHNcblxuXHRcdFx0Zm9yIChpbnQgaSA9IDA7IGkgPCBuX2RpcmVjdGlvbmFsX2xpZ2h0czsgaSsrKSB7XG5cdFx0XHRcdGJvb2wgaXNfZGlyZWN0aW9uYWwgPSB0cnVlO1xuXHRcdFx0XHR2ZWMzIHJlcyA9IFBCUih2X25vcm1hbCwgYWxiZWRvLCByb3VnaG5lc3MsIG1ldGFsbGljLCBcblx0XHRcdFx0XHRjYW1fcG9zaXRpb24sIHZfcG9zaXRpb24sIGRpcmVjdGlvbmFsX2xpZ2h0c1tpXS5kaXJlY3Rpb24sIGRpcmVjdGlvbmFsX2xpZ2h0c1tpXS5jb2xvciwgaXNfZGlyZWN0aW9uYWwpO1xuXHRcdFx0XHRyZXMgKj0gZGlyZWN0aW9uYWxfbGlnaHRzW2ldLm1hc2s7XG5cdFx0XHRcdExvICs9IHJlcztcblx0XHRcdH1cblxuXHRcdFx0dmVjMyBhbWJpZW50ID0gdmVjMygwLjAzKSAqIGFsYmVkbztcblxuXHRcdCAgICBmaW5hbF9jb2xvciA9IGFtYmllbnQgKyBMbztcblx0XHQgICAgZmluYWxfY29sb3IgPSBmaW5hbF9jb2xvciAvIChmaW5hbF9jb2xvciArIHZlYzMoMS4wKSk7XG5cdFx0ICAgIGZpbmFsX2NvbG9yID0gcG93KGZpbmFsX2NvbG9yLCB2ZWMzKDEuMC8yLjIpKTtcblxuICAgICAgXHRcdGdsX0ZyYWdDb2xvciA9IHZlYzQoZmluYWxfY29sb3IsIDEuMCk7XG4gICAgXHR9XG5cdGBcbn1cblxuY29uc3QgUEJSMTogU2hhZGVyUHJvZ3JhbVNvdXJjZSA9IHtcblx0c291cmNlczogW1xuXHRcdHtcblx0XHRcdHNvdXJjZTogX3NvdXJjZXMudmVydGV4LFxuXHRcdFx0dHlwZTogU2hhZGVyVHlwZXMuVkVSVEVYLFxuXHRcdFx0dW5pZm9ybXM6IFsnbW9kZWwnLCAndmlldycsICdwcm9qZWN0aW9uJ11cblx0XHR9LFxuXHRcdHtcblx0XHRcdHNvdXJjZTogX3NvdXJjZXMuZnJhZ21lbnQsXG5cdFx0XHR0eXBlOiBTaGFkZXJUeXBlcy5GUkFHTUVOVCxcblx0XHRcdHVuaWZvcm1zOiBbJ3BvaW50JywgJ2RpcmVjdGlvbmFsJywgJ2RpcmVjdGlvbicsICdwb3NpdGlvbicsICdjb2xvcicsICdtYXNrJyxcblx0XHRcdFx0ICdhbGJlZG8nLCAncm91Z2huZXNzJywgJ21ldGFsbGljJywgJ2NhbWVyYV9wb3NpdGlvbiddXG5cdFx0fVxuXHRdXG59XG5cbmV4cG9ydCB7IFBCUjEgfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2dsL3NoYWRlcnMvc2hhZGVyLXBicjEudHMiLCJpbXBvcnQgeyBTaGFkZXJTb3VyY2UsIFNoYWRlclByb2dyYW1Tb3VyY2UsIFNoYWRlclR5cGVzIH0gZnJvbSAnLi4vc2hhZGVyJ1xuXG5uYW1lc3BhY2UgX3NvdXJjZXMge1xuXHRleHBvcnQgY29uc3QgdmVydGV4OiBzdHJpbmcgPSBgXG5cdFx0YXR0cmlidXRlIHZlYzMgaW5fcG9zaXRpb247XG5cdFx0YXR0cmlidXRlIHZlYzMgaW5fbm9ybWFsO1xuXHRcdGF0dHJpYnV0ZSB2ZWMyIGluX3V2O1xuXG5cdFx0dW5pZm9ybSBtYXQ0IHByb2plY3Rpb247XG5cdFx0dW5pZm9ybSBtYXQ0IHZpZXc7XG5cdFx0dW5pZm9ybSBtYXQ0IG1vZGVsO1xuXG5cdFx0dmFyeWluZyBtZWRpdW1wIHZlYzIgdl91djtcblx0XHR2YXJ5aW5nIG1lZGl1bXAgdmVjMyB2X25vcm1hbDtcblxuXHRcdHZvaWQgbWFpbigpIHtcblx0XHRcdG1hdDQgdmlld1QgPSBtYXQ0KG1hdDModmlldykpO1xuXHRcdFx0dmVjNCBwb3MgPSBwcm9qZWN0aW9uICogdmlld1QgKiB2ZWM0KGluX3Bvc2l0aW9uLCAxLjApO1xuXHRcdFx0dl91diA9IGluX3V2O1xuXHRcdFx0dl9ub3JtYWwgPSBpbl9ub3JtYWw7XG5cdFx0XHRnbF9Qb3NpdGlvbiA9IHBvcy54eXd3O1xuXHRcdH1cblx0YFxuXHRleHBvcnQgY29uc3QgZnJhZ21lbnQ6IHN0cmluZyA9IGBcblxuXHRcdHByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xuXG5cdFx0dmFyeWluZyBtZWRpdW1wIHZlYzIgdl91djtcblx0XHR2YXJ5aW5nIG1lZGl1bXAgdmVjMyB2X25vcm1hbDtcblxuXHRcdHVuaWZvcm0gc2FtcGxlcjJEIGFsYmVkbztcblxuXHRcdHZvaWQgbWFpbigpIHtcbiAgICAgIFx0XHRnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlMkQoYWxiZWRvLCB2X3V2KTtcbiAgICBcdH1cblx0YFxufVxuXG5jb25zdCBTa3lib3g6IFNoYWRlclByb2dyYW1Tb3VyY2UgPSB7XG5cdHNvdXJjZXM6IFtcblx0XHR7XG5cdFx0XHRzb3VyY2U6IF9zb3VyY2VzLnZlcnRleCxcblx0XHRcdHR5cGU6IFNoYWRlclR5cGVzLlZFUlRFWCxcblx0XHRcdHVuaWZvcm1zOiBbJ3ZpZXcnLCAncHJvamVjdGlvbiddXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzb3VyY2U6IF9zb3VyY2VzLmZyYWdtZW50LFxuXHRcdFx0dHlwZTogU2hhZGVyVHlwZXMuRlJBR01FTlQsXG5cdFx0XHR1bmlmb3JtczogWydhbGJlZG8nXVxuXHRcdH1cblx0XVxufVxuXG5leHBvcnQgeyBTa3lib3ggfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2dsL3NoYWRlcnMvc2hhZGVyLXNreWJveC50cyIsImltcG9ydCB7IFNoYWRlciwgU2hhZGVyUHJvZ3JhbSwgU2hhZGVyU291cmNlLCBTaGFkZXJQcm9ncmFtU291cmNlLCBTaGFkZXJUeXBlcyB9IGZyb20gJy4vc2hhZGVyJ1xuXG5jbGFzcyBTaGFkZXJGYWN0b3J5IHtcblx0cHVibGljIHN0YXRpYyBDcmVhdGUoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCwgcHJvZ3JhbVNvdXJjZTogU2hhZGVyUHJvZ3JhbVNvdXJjZSk6IFNoYWRlclByb2dyYW0ge1xuXHRcdGxldCBzaGFkZXJzOiBBcnJheTxTaGFkZXI+ID0gcHJvZ3JhbVNvdXJjZS5zb3VyY2VzLm1hcCgoc291cmNlOiBTaGFkZXJTb3VyY2UpID0+IHtcblx0XHRcdHJldHVybiBuZXcgU2hhZGVyKGdsLCBzb3VyY2UpXG5cdFx0fSlcblx0XHRsZXQgcHJvZ3JhbTogU2hhZGVyUHJvZ3JhbSA9IG5ldyBTaGFkZXJQcm9ncmFtKGdsKVxuXHRcdHRyeSB7XG5cdFx0XHRwcm9ncmFtLmF0dGFjaChzaGFkZXJzKVxuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0Y29uc29sZS5lcnJvcihlcnIubWVzc2FnZSlcblx0XHRcdHJldHVybiBudWxsXG5cdFx0fVxuXHRcdHJldHVybiBwcm9ncmFtXG5cdH1cbn1cblxuZXhwb3J0IHsgU2hhZGVyRmFjdG9yeSB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2wvc2hhZGVyLWZhY3RvcnkudHMiLCJpbXBvcnQgeyBxdWF0LCBtYXQ0LCB2ZWMzLCBnbE1hdHJpeCB9IGZyb20gJ2dsLW1hdHJpeCdcbmltcG9ydCB7IHZlY3RvciwgdHlwZXMgfSBmcm9tICcuL3V0aWwnXG5pbXBvcnQgKiBhcyBtYXRoIGZyb20gJy4vd2dsLW1hdGgnXG5cbnR5cGUgZGlyZWN0aW9ucyA9ICdmb3J3YXJkcycgfCAnYmFja3dhcmRzJyB8ICdsZWZ0JyB8ICdyaWdodCdcblxuY2xhc3MgQ2FtZXJhIHtcblxuXHR5YXc6IG51bWJlciA9IC05MC4wXG5cdHBpdGNoOiBudW1iZXIgPSAwLjBcblx0cG9zaXRpb246IHZlYzNcblx0dXA6IHZlYzNcblx0d29ybGRVcDogdmVjM1xuXHRyaWdodDogdmVjM1xuXHRmcm9udDogdmVjM1xuXHRtb3ZlbWVudFNwZWVkOiBudW1iZXIgPSAyLjVcblx0cm90YXRpb25TZW5zaXRpdml0eTogbnVtYmVyID0gMC4xXG5cdHRhcmdldDogdmVjMyB8IG51bGwgPSBudWxsXG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5wb3NpdGlvbiA9IHZlYzMuZnJvbVZhbHVlcygwLCAwLCAwKVxuXHRcdHRoaXMudXAgPSB2ZWMzLmZyb21WYWx1ZXMoMCwgMSwgMClcblx0XHR0aGlzLndvcmxkVXAgPSB2ZWMzLmZyb21WYWx1ZXMoMCwgMSwgMClcblx0XHR0aGlzLnJpZ2h0ID0gdmVjMy5jcmVhdGUoKVxuXHRcdHRoaXMuZnJvbnQgPSB2ZWMzLmZyb21WYWx1ZXMoMCwgMCwgLTEpXG5cdFx0dGhpcy51cGRhdGVDYW1lcmFWZWN0b3JzKClcblx0fVxuXG5cdHB1YmxpYyBnZXRWaWV3TWF0cml4KCk6IG1hdDQge1xuXHRcdGxldCBoYXNUYXJnZXQgPSB0aGlzLnRhcmdldCAhPT0gbnVsbFxuXHRcdGxldCB0YXJnZXQ6IHZlYzMgPSBoYXNUYXJnZXQgPyB0aGlzLnRhcmdldCA6IHZlYzMuY3JlYXRlKClcblx0XHRsZXQgdmlldzogbWF0NCA9IG1hdDQuY3JlYXRlKClcblx0XHRsZXQgcG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uXG5cdFx0bGV0IGZyb250ID0gdGhpcy5mcm9udFxuXHRcdGxldCB1cCA9IHRoaXMudXBcblx0XHRpZiAoIWhhc1RhcmdldClcblx0XHRcdHZlYzMuYWRkKHRhcmdldCwgcG9zaXRpb24sIGZyb250KVxuXHRcdG1hdGgubG9va0F0KHZpZXcsIHBvc2l0aW9uLCB0YXJnZXQsIHVwKVxuXHRcdHJldHVybiB2aWV3XG5cdH1cblxuXHRwdWJsaWMgbG9va0F0KHdoZXJlOiB0eXBlcy52ZWMzQ29udmVydGlibGUgfCBudWxsKSB7XG5cdFx0aWYgKHdoZXJlID09PSBudWxsKSB7XG5cdFx0XHR0aGlzLnRhcmdldCA9IG51bGxcblx0XHRcdHJldHVyblxuXHRcdH1cblx0XHR0aGlzLnRhcmdldCA9IHZlY3Rvci5yZXF1aXJlVmVjMyh3aGVyZSlcblx0fVxuXG5cdHB1YmxpYyBzZXRQb3NpdGlvbihwb3NpdGlvbjogdHlwZXMudmVjM0NvbnZlcnRpYmxlKSB7XG5cdFx0dGhpcy5wb3NpdGlvbiA9IHZlY3Rvci5yZXF1aXJlVmVjMyhwb3NpdGlvbilcblx0fVxuXG5cdHB1YmxpYyBzZXRQaXRjaChwaXRjaDogbnVtYmVyKSB7XG5cdFx0dGhpcy5waXRjaCA9IHRoaXMuY29uc3RyYWluUGl0Y2gocGl0Y2gpXG5cdFx0dGhpcy51cGRhdGVDYW1lcmFWZWN0b3JzKClcblx0fVxuXG5cdHB1YmxpYyBzZXRZYXcoeWF3OiBudW1iZXIpIHtcblx0XHR0aGlzLnlhdyA9IHlhd1xuXHRcdHRoaXMudXBkYXRlQ2FtZXJhVmVjdG9ycygpXG5cdH1cblxuXHRwdWJsaWMgbW92ZShkaXJlY3Rpb246IGRpcmVjdGlvbnMsIGR0OiBudW1iZXIsIHNwZWVkPzogbnVtYmVyKSB7XG5cdFx0aWYgKCFzcGVlZClcblx0XHRcdHNwZWVkID0gdGhpcy5tb3ZlbWVudFNwZWVkXG5cblx0XHRsZXQgdmVsOiBudW1iZXIgPSBzcGVlZCAqIGR0XG5cdFx0bGV0IHZlbG9jaXR5OiB2ZWMzID0gdmVjMy5mcm9tVmFsdWVzKHZlbCwgdmVsLCB2ZWwpXG5cdFx0bGV0IGZyb250XyA9IHZlYzMuY3JlYXRlKClcblx0XHRsZXQgcmlnaHRfID0gdmVjMy5jcmVhdGUoKVxuXHRcdGxldCBmcm9udCA9IHRoaXMuZnJvbnRcblx0XHRsZXQgcmlnaHQgPSB0aGlzLnJpZ2h0XG5cdFx0bGV0IHBvc2l0aW9uID0gdGhpcy5wb3NpdGlvblxuXG5cdFx0dmVjMy5jb3B5KGZyb250XywgZnJvbnQpXG5cdFx0dmVjMy5jb3B5KHJpZ2h0XywgcmlnaHQpXG5cblx0XHRpZiAoZGlyZWN0aW9uID09PSAnZm9yd2FyZHMnKSB7XG5cdFx0XHR2ZWMzLmFkZChwb3NpdGlvbiwgcG9zaXRpb24sIHZlYzMubXVsdGlwbHkoZnJvbnRfLCBmcm9udF8sIHZlbG9jaXR5KSlcblx0XHR9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2JhY2t3YXJkcycpIHtcblx0XHRcdHZlYzMuc3ViKHBvc2l0aW9uLCBwb3NpdGlvbiwgdmVjMy5tdWx0aXBseShmcm9udF8sIGZyb250XywgdmVsb2NpdHkpKVxuXHRcdH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnbGVmdCcpIHtcblx0XHRcdHZlYzMuc3ViKHBvc2l0aW9uLCBwb3NpdGlvbiwgdmVjMy5tdWx0aXBseShyaWdodF8sIHJpZ2h0XywgdmVsb2NpdHkpKVxuXHRcdH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG5cdFx0XHR2ZWMzLmFkZChwb3NpdGlvbiwgcG9zaXRpb24sIHZlYzMubXVsdGlwbHkocmlnaHRfLCByaWdodF8sIHZlbG9jaXR5KSlcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgcm90YXRlKHg6IG51bWJlciwgeTogbnVtYmVyLCBzZW5zaXRpdml0eT86IG51bWJlcikge1xuXHRcdGlmICghc2Vuc2l0aXZpdHkpXG5cdFx0XHRzZW5zaXRpdml0eSA9IHRoaXMucm90YXRpb25TZW5zaXRpdml0eVxuXG5cdFx0dGhpcy55YXcgKz0gKHggKiBzZW5zaXRpdml0eSlcblx0XHR0aGlzLnBpdGNoICs9ICh5ICogc2Vuc2l0aXZpdHkpXG5cdFx0dGhpcy5waXRjaCA9IHRoaXMuY29uc3RyYWluUGl0Y2godGhpcy5waXRjaClcblxuXHRcdHRoaXMudXBkYXRlQ2FtZXJhVmVjdG9ycygpXG5cdH1cblxuXHRwcml2YXRlIGNvbnN0cmFpblBpdGNoKHBpdGNoOiBudW1iZXIpOiBudW1iZXIge1xuXHRcdGlmIChwaXRjaCA+IDg5LjApXG5cdFx0XHRwaXRjaCA9IDg5LjBcblx0XHRpZiAocGl0Y2ggPCAtODkuMClcblx0XHRcdHBpdGNoID0gLTg5LjBcblx0XHRyZXR1cm4gcGl0Y2hcblx0fVxuXG5cdHByaXZhdGUgdXBkYXRlQ2FtZXJhVmVjdG9ycygpOiB2b2lkIHtcblx0XHRsZXQgZnJvbnRfOiB2ZWMzID0gdmVjMy5jcmVhdGUoKVxuXHRcdGxldCByaWdodCA9IHRoaXMucmlnaHRcblx0XHRsZXQgZnJvbnQgPSB0aGlzLmZyb250XG5cdFx0bGV0IHVwID0gdGhpcy51cFxuXHRcdGxldCB3b3JsZFVwID0gdGhpcy53b3JsZFVwXG5cdFx0bGV0IHBpdGNoID0gdGhpcy5waXRjaFxuXHRcdGxldCB5YXcgPSB0aGlzLnlhd1xuXG5cdFx0ZnJvbnRfWzBdID0gTWF0aC5jb3MoZ2xNYXRyaXgudG9SYWRpYW4oeWF3KSkgKiBNYXRoLmNvcyhnbE1hdHJpeC50b1JhZGlhbihwaXRjaCkpXG5cdFx0ZnJvbnRfWzFdID0gTWF0aC5zaW4oZ2xNYXRyaXgudG9SYWRpYW4ocGl0Y2gpKVxuXHRcdGZyb250X1syXSA9IE1hdGguc2luKGdsTWF0cml4LnRvUmFkaWFuKHlhdykpXG5cblx0XHR2ZWMzLmNvcHkoZnJvbnQsIGZyb250XylcblxuXHRcdHZlYzMuY3Jvc3MocmlnaHQsIGZyb250LCB3b3JsZFVwKVxuXHRcdHZlYzMubm9ybWFsaXplKHJpZ2h0LCByaWdodClcblx0XHR2ZWMzLmNyb3NzKHVwLCByaWdodCwgZnJvbnQpXG5cdFx0dmVjMy5ub3JtYWxpemUodXAsIHVwKVxuXHR9XG5cbn1cblxuZXhwb3J0IHsgQ2FtZXJhLCBkaXJlY3Rpb25zIH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC9jYW1lcmEudHMiLCJpbXBvcnQgeyBNb2RlbCB9IGZyb20gJy4vbW9kZWwnXG5pbXBvcnQgeyBNZXNoIH0gZnJvbSAnLi9tZXNoJ1xuaW1wb3J0ICogYXMgTGlnaHQgZnJvbSAnLi9saWdodCdcblxuZXhwb3J0IHR5cGUgU2NlbmVBZGRhYmxlID0gTW9kZWwgfCBMaWdodC5MaWdodFxuXG5jbGFzcyBTY2VuZSB7XG5cblx0cHJpdmF0ZSBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0XG5cblx0cHVibGljIG1vZGVsczogQXJyYXk8TW9kZWw+ID0gW11cblx0cHVibGljIGxpZ2h0czogQXJyYXk8TGlnaHQuTGlnaHQ+ID0gW11cblx0cHVibGljIG1vZGVsc1NvcnRlZDogYm9vbGVhbiA9IGZhbHNlXG5cdHB1YmxpYyBiYWNrZ3JvdW5kOiBNb2RlbFxuXG5cdGNvbnN0cnVjdG9yKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQpIHtcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLmJhY2tncm91bmQgPSBudWxsXG5cdH1cblxuXHRwdWJsaWMgc29ydE1vZGVscyhjb21wYXJhdG9yOiAoYTogTW9kZWwsIGI6IE1vZGVsKSA9PiBudW1iZXIpIHtcblx0XHR0aGlzLm1vZGVscy5zb3J0KGNvbXBhcmF0b3IpXG5cdFx0dGhpcy5tb2RlbHNTb3J0ZWQgPSB0cnVlXG5cdH1cblxuXHRwdWJsaWMgYWRkKGVsZW1lbnQ6IFNjZW5lQWRkYWJsZSB8IEFycmF5PFNjZW5lQWRkYWJsZT4pOiB2b2lkIHtcblx0XHRpZiAoQXJyYXkuaXNBcnJheShlbGVtZW50KSkge1xuXHRcdFx0aWYgKGVsZW1lbnQubGVuZ3RoID09PSAwKVxuXHRcdFx0XHRyZXR1cm5cblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzXG5cdFx0XHRlbGVtZW50Lm1hcChlbCA9PiBzZWxmLmFkZE9uZShlbCkpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuYWRkT25lKGVsZW1lbnQpXG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBhZGRPbmUoZWxlbWVudDogU2NlbmVBZGRhYmxlKTogdm9pZCB7XG5cdFx0aWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBNb2RlbCkge1xuXHRcdFx0dGhpcy5hZGRNb2RlbChlbGVtZW50KVxuXHRcdH0gZWxzZSBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIExpZ2h0LkxpZ2h0KSB7XG5cdFx0XHR0aGlzLmFkZExpZ2h0KGVsZW1lbnQpXG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBhZGRMaWdodChsaWdodDogTGlnaHQuTGlnaHQpOiB2b2lkIHtcblx0XHR0aGlzLmxpZ2h0cy5wdXNoKGxpZ2h0KVxuXHR9XG5cblx0cHJpdmF0ZSBhZGRNb2RlbChtb2RlbDogTW9kZWwpOiB2b2lkIHtcblx0XHR0aGlzLm1vZGVscy5wdXNoKG1vZGVsKVxuXHRcdHRoaXMubW9kZWxzU29ydGVkID0gZmFsc2Vcblx0fVxufVxuXG5leHBvcnQgeyBTY2VuZSB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2wvc2NlbmUudHMiLCJpbXBvcnQgeyB0aW1lIH0gZnJvbSAnLi91dGlsJ1xuXG5jbGFzcyBGcmFtZVN0YXRzIHtcblxuXHRwcml2YXRlIHRpbWVyOiB0aW1lLkRlbHRhVGltZXJcblx0bWluOiBudW1iZXIgPSBJbmZpbml0eVxuXHRtYXg6IG51bWJlciA9IC1JbmZpbml0eVxuXHRtZWFuOiBudW1iZXIgPSAwXG5cdGl0ZXJhdGlvbnM6IG51bWJlciA9IDBcblx0Y3VycmVudDogbnVtYmVyID0gTmFOXG5cdHBsYWNlczogbnVtYmVyID0gMlxuXG5cdGVsOiBIVE1MRWxlbWVudFxuXHR2aXNpYmxlOiBib29sZWFuID0gdHJ1ZVxuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMudGltZXIgPSBuZXcgdGltZS5EZWx0YVRpbWVyKClcblx0XHR0aGlzLnRpbWVyLnNldFJhdGlvKHRpbWUucmF0aW9zLnMoKSlcblx0XHR0aGlzLnNldHVwRWxlbWVudCgpXG5cdH1cblxuXHRwcml2YXRlIHNldHVwRWxlbWVudCgpIHtcblx0XHRjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXNcblx0XHRlbC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCdcblx0XHRlbC5zdHlsZS5sZWZ0ID0gJzBweCdcblx0XHRlbC5zdHlsZS50b3AgPSAnMHB4J1xuXHRcdGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdibGFjaydcblx0XHRlbC5zdHlsZS5vcGFjaXR5ID0gJzAuNSdcblx0XHRlbC5zdHlsZS5jb2xvciA9ICd3aGl0ZSdcblx0XHRlbC5vbmNsaWNrID0gKGV2dDogTW91c2VFdmVudCkgPT4ge1xuXHRcdFx0ZWwuc3R5bGUub3BhY2l0eSA9IHNlbGYudmlzaWJsZSA/ICcwJyA6ICcwLjUnXG5cdFx0XHRzZWxmLnZpc2libGUgPSAhc2VsZi52aXNpYmxlXG5cdFx0fVxuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpXG5cdFx0dGhpcy5lbCA9IGVsXG5cdH1cblxuXHRwdWJsaWMgdXBkYXRlKCkge1xuXHRcdGxldCB3YXNGaXJzdCA9IHRoaXMudGltZXIuZmlyc3RVcGRhdGUoKVxuXHRcdHRoaXMudGltZXIudXBkYXRlKClcblx0XHRpZiAod2FzRmlyc3QpXG5cdFx0XHRyZXR1cm5cblxuXHRcdGxldCBkdCA9IHRoaXMudGltZXIuZGVsdGEoKVxuXHRcdGlmIChkdCA8IHRoaXMubWluKSB0aGlzLm1pbiA9IGR0XG5cdFx0aWYgKGR0ID4gdGhpcy5tYXgpIHRoaXMubWF4ID0gZHRcblxuXHRcdHRoaXMuY3VycmVudCA9IGR0XG5cdFx0dGhpcy5tZWFuID0gKCh0aGlzLm1lYW4gKiB0aGlzLml0ZXJhdGlvbnMpICsgZHQpIC8gKHRoaXMuaXRlcmF0aW9ucyArIDEpXG5cdFx0dGhpcy5pdGVyYXRpb25zKytcblxuXHRcdHRoaXMuZWwuaW5uZXJIVE1MID0gdGhpcy5nZXRTdHJpbmcoKVxuXHR9XG5cblx0cHVibGljIGdldFN0cmluZygpOiBzdHJpbmcge1xuXHRcdGNvbnN0IHBsYWNlcyA9IHRoaXMucGxhY2VzXG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXNcblxuXHRcdGNvbnN0IGN1cnJlbnQgPSB0aGlzLmdldFRpbWVGUFNTdHJpbmcoJ2N1cnJlbnQnLCB0aGlzLmN1cnJlbnQpXG5cdFx0Y29uc3QgbWluID0gdGhpcy5nZXRUaW1lRlBTU3RyaW5nKCdtaW4nLCB0aGlzLm1pbilcblx0XHRjb25zdCBtYXggPSB0aGlzLmdldFRpbWVGUFNTdHJpbmcoJ21heCcsIHRoaXMubWF4KVxuXHRcdGNvbnN0IG1lYW4gPSB0aGlzLmdldFRpbWVGUFNTdHJpbmcoJ21lYW4nLCB0aGlzLm1lYW4pXG5cblx0XHRyZXR1cm4gY3VycmVudCArIG1pbiArIG1heCArIG1lYW5cblx0fVxuXG5cdHByaXZhdGUgZ2V0VGltZUZQU1N0cmluZyhraW5kOiBzdHJpbmcsIHZhbDogbnVtYmVyKTogc3RyaW5nIHtcblx0XHRsZXQgdGltZVVuaXRzID0gdGhpcy50aW1lci5nZXRSYXRpbygpLmFsaWFzXG5cdFx0Y29uc3QgbXMgPSBgJHtraW5kfTogJHsodmFsKS50b0ZpeGVkKHRoaXMucGxhY2VzKX0gJHt0aW1lVW5pdHN9LCBgXG5cdFx0Y29uc3QgZnBzID0gYCR7KDEvdmFsKS50b0ZpeGVkKHRoaXMucGxhY2VzKX0gRlBTPGJyPmBcblx0XHRyZXR1cm4gbXMgKyBmcHNcblx0fVxuXG59XG5cbmV4cG9ydCB7IEZyYW1lU3RhdHMgfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2dsL2ZyYW1lLXN0YXRzLnRzIiwiaW1wb3J0IGZ1bmN0aW9uYWwgZnJvbSAnLi9yZW5kZXJlcnMvZnVuY3Rpb25hbC1yZW5kZXJlcidcblxuZXhwb3J0IHtcblx0ZnVuY3Rpb25hbFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2dsL3JlbmRlcmVycy50cyIsImltcG9ydCBiYXNlIGZyb20gJy4vYmFzZS1yZW5kZXJlcidcbmltcG9ydCAqIGFzIFNoYWRlciBmcm9tICcuLi9zaGFkZXInXG5pbXBvcnQgKiBhcyBMaWdodCBmcm9tICcuLi9saWdodCdcbmltcG9ydCB7IE1lc2ggfSBmcm9tICcuLi9tZXNoJ1xuaW1wb3J0ICogYXMgdW5pZm9ybXMgZnJvbSAnLi4vdW5pZm9ybXMnXG5pbXBvcnQgeyBNb2RlbCB9IGZyb20gJy4uL21vZGVsJ1xuaW1wb3J0IHsgQ2FtZXJhIH0gZnJvbSAnLi4vY2FtZXJhJ1xuaW1wb3J0IHsgbWF0NCB9IGZyb20gJ2dsLW1hdHJpeCdcbmltcG9ydCAqIGFzIE1hdGVyaWFsIGZyb20gJy4uL21hdGVyaWFsJ1xuaW1wb3J0ICogYXMgdGV4dHVyZSBmcm9tICcuLi90ZXh0dXJlJ1xuaW1wb3J0IHsgdHlwZXMgfSBmcm9tICcuLi91dGlsJ1xuaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuLi9zY2VuZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBiYXNlIHtcblxuXHRsYXN0TWVzaDogTWVzaCA9IG51bGxcblx0bGFzdFByb2dyYW06IFNoYWRlci5TaGFkZXJQcm9ncmFtID0gbnVsbFxuXHRsYXN0TWF0ZXJpYWw6IE1hdGVyaWFsLk1hdGVyaWFsID0gbnVsbFxuXG5cdGNvbnN0cnVjdG9yKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQpIHtcblx0XHRzdXBlcihnbClcblx0fVxuXG5cdHB1YmxpYyByZW5kZXIoc2NlbmU6IFNjZW5lLCBjYW1lcmE6IENhbWVyYSkge1xuXHRcdHRoaXMuY2xlYXIoKVxuXG5cdFx0aWYgKHNjZW5lLm1vZGVscy5sZW5ndGggPT09IDApIHJldHVyblxuXHRcdGlmICghc2NlbmUubW9kZWxzU29ydGVkKSBzY2VuZS5zb3J0TW9kZWxzKE1vZGVsLmNvbXBhcmVNZXNoVVVJRClcblxuXHRcdHRoaXMuY29uZmlndXJlQ2FtZXJhKHNjZW5lLm1vZGVsc1swXS5wcm9ncmFtLCBjYW1lcmEpXG5cdFx0dGhpcy5jb25maWd1cmVMaWdodHMoc2NlbmUubW9kZWxzWzBdLnByb2dyYW0sIHNjZW5lLmxpZ2h0cylcblxuXHRcdGZvciAobGV0IG1vZGVsIG9mIHNjZW5lLm1vZGVscykge1xuXHRcdFx0dGhpcy5kcmF3TW9kZWwoc2NlbmUsIGNhbWVyYSwgbW9kZWwpXG5cdFx0fVxuXG5cdFx0dGhpcy5kcmF3QmFja2dyb3VuZChzY2VuZSwgY2FtZXJhKVxuXHR9XG5cblx0cHJpdmF0ZSBkcmF3QmFja2dyb3VuZChzY2VuZTogU2NlbmUsIGNhbWVyYTogQ2FtZXJhKTogdm9pZCB7XG5cdFx0aWYgKCFzY2VuZS5iYWNrZ3JvdW5kKVxuXHRcdFx0cmV0dXJuXG5cdFx0Y29uc3QgZ2wgPSB0aGlzLmdsXG5cdFx0Z2wuZGVwdGhGdW5jKGdsLkxFUVVBTClcblx0XHR0aGlzLmRyYXdNb2RlbChzY2VuZSwgY2FtZXJhLCBzY2VuZS5iYWNrZ3JvdW5kKVxuXHRcdGdsLmRlcHRoRnVuYyhnbC5MRVNTKVxuXHR9XG5cblx0cHJpdmF0ZSBkcmF3TW9kZWwoc2NlbmU6IFNjZW5lLCBjYW1lcmE6IENhbWVyYSwgbW9kZWw6IE1vZGVsKTogdm9pZCB7XG5cdFx0bW9kZWwub25CZWZvcmVSZW5kZXIoKVxuXHRcdGNvbnN0IHByb2cgPSBtb2RlbC5wcm9ncmFtXG5cdFx0Y29uc3QgbWF0ZXJpYWwgPSBtb2RlbC5tYXRlcmlhbFxuXHRcdGNvbnN0IG1lc2ggPSBtb2RlbC5tZXNoXG5cdFx0aWYgKHRoaXMuY29uZGl0aW9uYWxCaW5kUHJvZ3JhbShwcm9nKSkge1xuXHRcdFx0dGhpcy5jb25maWd1cmVDYW1lcmEocHJvZywgY2FtZXJhKVxuXHRcdFx0dGhpcy5jb25maWd1cmVMaWdodHMocHJvZywgc2NlbmUubGlnaHRzKVxuXHRcdH1cblx0XHR0aGlzLmNvbmZpZ3VyZVRyYW5zZm9ybShwcm9nLCBtb2RlbC5nZXRXb3JsZE1hdHJpeCgpKVxuXHRcdHRoaXMuY29uZmlndXJlTWF0ZXJpYWwocHJvZywgbWF0ZXJpYWwpXG5cdFx0dGhpcy5kcmF3KHByb2csIG1lc2gpXG5cdFx0bW9kZWwub25BZnRlclJlbmRlcigpXG5cdH1cblxuXHRwdWJsaWMgZHJhdyhwcm9nOiBTaGFkZXIuU2hhZGVyUHJvZ3JhbSwgbWVzaDogTWVzaCk6IHZvaWQge1xuXHRcdHRoaXMuY29uZGl0aW9uYWxCaW5kUHJvZ3JhbShwcm9nKVxuXHRcdHRoaXMuY29uZGl0aW9uYWxCaW5kTWVzaChwcm9nLCBtZXNoKVxuXHRcdG1lc2guZHJhdygpXG5cdH1cblxuXHRwdWJsaWMgY29uZmlndXJlVHJhbnNmb3JtKHByb2c6IFNoYWRlci5TaGFkZXJQcm9ncmFtLCB0cmFuc2Zvcm1NYXRyaXg6IG1hdDQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbmRpdGlvbmFsQmluZFByb2dyYW0ocHJvZylcblx0XHR0aGlzLmNvbmRpdGlvbmFsU2V0VW5pZm9ybShwcm9nLCAnbW9kZWwnLCB0cmFuc2Zvcm1NYXRyaXgpXG5cdH1cblxuXHRwdWJsaWMgY29uZmlndXJlQ2FtZXJhKHByb2c6IFNoYWRlci5TaGFkZXJQcm9ncmFtLCBjYW1lcmE6IENhbWVyYSk6IHZvaWQge1xuXHRcdHRoaXMuY29uZGl0aW9uYWxCaW5kUHJvZ3JhbShwcm9nKVxuXHRcdHRoaXMuY29uZGl0aW9uYWxTZXRVbmlmb3JtKHByb2csICdwcm9qZWN0aW9uJywgdGhpcy5wcm9qZWN0aW9uKVxuXHRcdHRoaXMuY29uZGl0aW9uYWxTZXRVbmlmb3JtKHByb2csICd2aWV3JywgY2FtZXJhLmdldFZpZXdNYXRyaXgoKSlcblx0XHR0aGlzLmNvbmRpdGlvbmFsU2V0VW5pZm9ybShwcm9nLCAnY2FtZXJhX3Bvc2l0aW9uJywgY2FtZXJhLnBvc2l0aW9uKVxuXHR9XG5cblx0cHVibGljIGNvbmZpZ3VyZU1hdGVyaWFsKHByb2c6IFNoYWRlci5TaGFkZXJQcm9ncmFtLCBtYXRlcmlhbDogTWF0ZXJpYWwuTWF0ZXJpYWwpOiB2b2lkIHtcblx0XHR0aGlzLmNvbmRpdGlvbmFsQmluZFByb2dyYW0ocHJvZylcblx0XHRsZXQgaXNOZXcgPSB0aGlzLmNoZWNrTmV3TWF0ZXJpYWwobWF0ZXJpYWwpXG5cdFx0bGV0IGF0dHJzOiBBcnJheTxNYXRlcmlhbC5BdHRyaWJ1dGU+ID0gbWF0ZXJpYWwuZW51bWVyYXRlQXR0cmlidXRlcygpXG5cdFx0Zm9yIChsZXQgYXR0ciBvZiBhdHRycykge1xuXHRcdFx0aWYgKGlzTmV3IHx8IGF0dHIuaXNEaXJ0eSkge1xuXHRcdFx0XHR0aGlzLmNvbmRpdGlvbmFsU2V0VW5pZm9ybShwcm9nLCBhdHRyLm5hbWUsIGF0dHIuZ2V0VmFsdWUoKSlcblx0XHRcdH1cblx0XHRcdGlmICh0eXBlcy5pc1RleHR1cmUoYXR0ci5wZWVrVmFsdWUoKSkpIHtcblx0XHRcdFx0dGhpcy5jb25maWd1cmVUZXh0dXJlKHByb2csIGF0dHIuZ2V0VmFsdWUoKSBhcyB0ZXh0dXJlLlRleHR1cmUpXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGNvbmZpZ3VyZVRleHR1cmUocHJvZzogU2hhZGVyLlNoYWRlclByb2dyYW0sIHRleDogdGV4dHVyZS5UZXh0dXJlKTogdm9pZCB7XG5cdFx0dGhpcy5jb25kaXRpb25hbEJpbmRQcm9ncmFtKHByb2cpXG5cdFx0dGV4LmJpbmQoKVxuXHR9XG5cblx0cHVibGljIGNvbmZpZ3VyZUxpZ2h0KHByb2c6IFNoYWRlci5TaGFkZXJQcm9ncmFtLCBsaWdodDogTGlnaHQuTGlnaHQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbmRpdGlvbmFsQmluZFByb2dyYW0ocHJvZylcblx0XHRsZXQgYWN0aXZlOiBib29sZWFuID0gbGlnaHQuYWN0aXZlXG5cdFx0aWYgKCFhY3RpdmUpIHJldHVyblxuXHRcdGxldCBpbmRleCA9IGxpZ2h0LmdldEluZGV4KClcblx0XHRsZXQgYXR0cnM6IEFycmF5PExpZ2h0LkF0dHJpYnV0ZT4gPSBsaWdodC5lbnVtZXJhdGVBdHRyaWJ1dGVzKClcblx0XHRmb3IgKGxldCBhdHRyIG9mIGF0dHJzKSB7XG5cdFx0XHRpZiAoYXR0ci5pc0RpcnR5KSB7XG5cdFx0XHRcdGxldCB1biA9IHVuaWZvcm1zLk1hcC5nZXRVbmlmb3JtKGF0dHIubmFtZSlcblx0XHRcdFx0bGV0IG1hcHBlZE5hbWUgPSB1bmlmb3Jtcy5NYXAuZ2V0VW5pZm9ybShsaWdodC5nZXROYW1lKCkpXG5cdFx0XHRcdGxldCB1bmYgPSBgJHttYXBwZWROYW1lfVske2luZGV4fV0uJHt1bn1gXG5cdFx0XHRcdGlmIChwcm9nLmhhc1VuaWZvcm0obGlnaHQuZ2V0TmFtZSgpKSkge1xuXHRcdFx0XHRcdHByb2cuc2V0VW5pZm9ybSh1bmYsIGF0dHIuZ2V0VmFsdWUoKSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY29uZmlndXJlTGlnaHRzKHByb2c6IFNoYWRlci5TaGFkZXJQcm9ncmFtLCBsaWdodHM6IEFycmF5PExpZ2h0LkxpZ2h0Pik6IHZvaWQge1xuXHRcdGZvciAobGV0IGxpZ2h0IG9mIGxpZ2h0cykge1xuXHRcdFx0dGhpcy5jb25maWd1cmVMaWdodChwcm9nLCBsaWdodClcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrTmV3TWF0ZXJpYWwobWF0ZXJpYWw6IE1hdGVyaWFsLk1hdGVyaWFsKTogYm9vbGVhbiB7XG5cdFx0bGV0IGlzTnVsbExhc3RNYXRlcmlhbDogYm9vbGVhbiA9IHRoaXMubGFzdE1hdGVyaWFsID09PSBudWxsXG5cdFx0bGV0IGlzTmV3TWF0ZXJpYWw6IGJvb2xlYW4gPSBpc051bGxMYXN0TWF0ZXJpYWwgfHwgXG5cdFx0XHQhTWF0ZXJpYWwuTWF0ZXJpYWwuZXF1YWxzKG1hdGVyaWFsLCB0aGlzLmxhc3RNYXRlcmlhbClcblx0XHR0aGlzLmxhc3RNYXRlcmlhbCA9IG1hdGVyaWFsXG5cdFx0cmV0dXJuIGlzTmV3TWF0ZXJpYWxcblx0fVxuXG5cdHByaXZhdGUgY29uZGl0aW9uYWxCaW5kTWVzaChwcm9nOiBTaGFkZXIuU2hhZGVyUHJvZ3JhbSwgbWVzaDogTWVzaCk6IGJvb2xlYW4ge1xuXHRcdGxldCBpc051bGxMYXN0TWVzaDogYm9vbGVhbiA9IHRoaXMubGFzdE1lc2ggPT09IG51bGxcblx0XHRsZXQgaXNOZXdNZXNoOiBib29sZWFuID0gaXNOdWxsTGFzdE1lc2ggfHwgIU1lc2guZXF1YWxzKG1lc2gsIHRoaXMubGFzdE1lc2gpXG5cdFx0aWYgKGlzTmV3TWVzaCkge1xuXHRcdFx0aWYgKCFpc051bGxMYXN0TWVzaCAmJiB0aGlzLmxhc3RNZXNoLmlzQm91bmQoKSkgdGhpcy5sYXN0TWVzaC51bmJpbmQoKVxuXHRcdFx0aWYgKCFtZXNoLmlzQm91bmQoKSkgbWVzaC5iaW5kKHByb2cpXG5cdFx0fVxuXHRcdHRoaXMubGFzdE1lc2ggPSBtZXNoXG5cdFx0cmV0dXJuIGlzTmV3TWVzaFxuXHR9XG5cblx0cHJpdmF0ZSBjb25kaXRpb25hbEJpbmRQcm9ncmFtKHByb2c6IFNoYWRlci5TaGFkZXJQcm9ncmFtKTogYm9vbGVhbiB7XG5cdFx0bGV0IGlzTnVsbExhc3RQcm9ncmFtOiBib29sZWFuID0gdGhpcy5sYXN0UHJvZ3JhbSA9PT0gbnVsbFxuXHRcdGxldCBpc05ld1Byb2dyYW06IGJvb2xlYW4gPSBpc051bGxMYXN0UHJvZ3JhbSB8fCAhU2hhZGVyLlNoYWRlclByb2dyYW0uZXF1YWxzKHByb2csIHRoaXMubGFzdFByb2dyYW0pXG5cdFx0aWYgKGlzTmV3UHJvZ3JhbSkge1xuXHRcdFx0aWYgKCFpc051bGxMYXN0UHJvZ3JhbSAmJiB0aGlzLmxhc3RQcm9ncmFtLmlzQm91bmQoKSkgdGhpcy5sYXN0UHJvZ3JhbS51bmJpbmQoKVxuXHRcdFx0aWYgKCFwcm9nLmlzQm91bmQoKSkgcHJvZy5iaW5kKClcblx0XHR9XG5cdFx0dGhpcy5sYXN0UHJvZ3JhbSA9IHByb2dcblx0XHRyZXR1cm4gaXNOZXdQcm9ncmFtXG5cdH1cblxuXHRwcml2YXRlIGNvbmRpdGlvbmFsU2V0VW5pZm9ybShwcm9nOiBTaGFkZXIuU2hhZGVyUHJvZ3JhbSwgbmFtZTogdW5pZm9ybXMuVW5pZm9ybU5hbWVzLCB2YWx1ZTogU2hhZGVyLlVuaWZvcm1TZXR0YWJsZSk6IHZvaWQge1xuXHRcdGlmIChwcm9nLmhhc1VuaWZvcm0obmFtZSkpIHtcblx0XHRcdHByb2cuc2V0VW5pZm9ybSh1bmlmb3Jtcy5NYXAuZ2V0VW5pZm9ybShuYW1lKSwgdmFsdWUpXG5cdFx0fVxuXHR9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC9yZW5kZXJlcnMvZnVuY3Rpb25hbC1yZW5kZXJlci50cyIsImltcG9ydCB7IG1hdDQsIHZlYzMgfSBmcm9tICdnbC1tYXRyaXgnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblxuXHRwcm90ZWN0ZWQgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuXHRwcm90ZWN0ZWQgcHJvamVjdGlvbjogbWF0NFxuXHRwcm90ZWN0ZWQgY2xlYXJDb2xvcjogdmVjM1xuXHRwcm90ZWN0ZWQgZm92OiBudW1iZXIgPSA0NS4wXG5cdHByb3RlY3RlZCBuZWFyOiBudW1iZXIgPSAwLjFcblx0cHJvdGVjdGVkIGZhcjogbnVtYmVyID0gMTAwMC4wXG5cdHByb3RlY3RlZCBhc3BlY3Q6IG51bWJlciA9IDEuMFxuXG5cdGNvbnN0cnVjdG9yKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQpIHtcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnByb2plY3Rpb24gPSB0aGlzLmdldFByb2plY3Rpb25NYXRyaXgoKVxuXHRcdHRoaXMuY2xlYXJDb2xvciA9IHZlYzMuZnJvbVZhbHVlcygwLjIsIDAuMiwgMC4yKVxuXHRcdHRoaXMuc2V0dXAoKVxuXHR9XG5cblx0cHJvdGVjdGVkIHNldHVwKCk6IHZvaWQge1xuXHRcdGNvbnN0IGdsID0gdGhpcy5nbFxuXHRcdGdsLmVuYWJsZShnbC5ERVBUSF9URVNUKVxuXHR9XG5cblx0cHVibGljIHNldE5lYXJGYXIobmVhcjogbnVtYmVyLCBmYXI6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMubmVhciA9IG5lYXJcblx0XHR0aGlzLmZhciA9IGZhclxuXHRcdHRoaXMucHJvamVjdGlvbiA9IHRoaXMuZ2V0UHJvamVjdGlvbk1hdHJpeCgpXG5cdH1cblxuXHRwdWJsaWMgY2xlYXIoKTogdm9pZCB7XG5cdFx0Y29uc3QgZ2wgPSB0aGlzLmdsXG5cdFx0Y29uc3QgY2MgPSB0aGlzLmNsZWFyQ29sb3Jcblx0XHRnbC5jbGVhckNvbG9yKGNjWzBdLCBjY1sxXSwgY2NbMl0sIDEuMClcblx0XHRnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUIHwgZ2wuREVQVEhfQlVGRkVSX0JJVClcblx0fVxuXG5cdHB1YmxpYyBzZXRBc3BlY3QoYXI6IG51bWJlcikge1xuXHRcdHRoaXMuYXNwZWN0ID0gYXJcblx0XHR0aGlzLnByb2plY3Rpb24gPSB0aGlzLmdldFByb2plY3Rpb25NYXRyaXgoKVxuXHR9XG5cblx0cHVibGljIGdldFByb2plY3Rpb25NYXRyaXgoKTogbWF0NCB7XG5cdFx0bGV0IHByb2plY3Rpb24gPSBtYXQ0LmNyZWF0ZSgpXG5cdFx0cmV0dXJuIG1hdDQucGVyc3BlY3RpdmUocHJvamVjdGlvbiwgdGhpcy5mb3YsIHRoaXMuYXNwZWN0LCB0aGlzLm5lYXIsIHRoaXMuZmFyKVxuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2wvcmVuZGVyZXJzL2Jhc2UtcmVuZGVyZXIudHMiLCJ0eXBlIENhbnZhc09wdGlvbnMgPSB7XG5cdHdpZHRoOiBudW1iZXIsXG5cdGhlaWdodDogbnVtYmVyXG59XG5cbmNsYXNzIENhbnZhcyB7XG5cblx0ZHByOiBudW1iZXJcblx0YXNwZWN0OiBudW1iZXJcblx0d2lkdGg6IG51bWJlclxuXHRoZWlnaHQ6IG51bWJlclxuXHRlbGVtZW50OiBIVE1MQ2FudmFzRWxlbWVudFxuXG5cdGNvbnN0cnVjdG9yKG9wdHM6IENhbnZhc09wdGlvbnMgPSBDYW52YXMuRGVmYXVsdHMoKSkge1xuXG5cdFx0aWYgKCFvcHRzLndpZHRoKVxuXHRcdFx0b3B0cy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG5cdFx0aWYgKCFvcHRzLmhlaWdodClcblx0XHRcdG9wdHMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0XG5cblx0XHR0aGlzLndpZHRoID0gb3B0cy53aWR0aFxuXHRcdHRoaXMuaGVpZ2h0ID0gb3B0cy5oZWlnaHRcblx0XHR0aGlzLmFzcGVjdCA9IHRoaXMud2lkdGggLyB0aGlzLmhlaWdodFxuXHRcdHRoaXMuZHByID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMVxuXG5cdFx0dGhpcy5jcmVhdGVDYW52YXMoKVxuXHRcdHRoaXMucmVzaXplKClcblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlQ2FudmFzKCk6IHZvaWQge1xuXHRcdHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpXG5cdH1cblxuXHRwdWJsaWMgcmVzaXplKCk6IHZvaWQge1xuXHRcdGNvbnN0IGVsID0gdGhpcy5lbGVtZW50XG5cdFx0ZWwuc3R5bGUud2lkdGggPSB0aGlzLndpZHRoICsgJ3B4J1xuXHRcdGVsLnN0eWxlLmhlaWdodCA9IHRoaXMuaGVpZ2h0ICsgJ3B4J1xuXHRcdGVsLndpZHRoID0gdGhpcy53aWR0aCAqIHRoaXMuZHByXG5cdFx0ZWwuaGVpZ2h0ID0gdGhpcy5oZWlnaHQgKiB0aGlzLmRwclxuXHR9XG5cblx0cHVibGljIHN0YXRpYyBEZWZhdWx0cygpOiBDYW52YXNPcHRpb25zIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0d2lkdGg6IG51bGwsXG5cdFx0XHRoZWlnaHQ6IG51bGxcblx0XHR9XG5cdH1cblxufVxuXG5leHBvcnQgeyBDYW52YXMgfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2dsL2NhbnZhcy50cyIsImltcG9ydCB7IE9CSiB9IGZyb20gJy4vbG9hZGVycy9vYmotbG9hZGVyJ1xuaW1wb3J0IHsgVEVYIH0gZnJvbSAnLi9sb2FkZXJzL3RleHR1cmUtbG9hZGVyJ1xuXG5leHBvcnQge1xuXHRPQkosXG5cdFRFWFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2dsL2xvYWRlcnMudHMiLCJpbXBvcnQgeyBNZXNoIH0gZnJvbSAnLi4vbWVzaCdcbmltcG9ydCB7IFZlcnRleCwgVG9wb2xvZ2llcyB9IGZyb20gJy4uL3ZlcnRleCdcbmltcG9ydCAqIGFzIGFzc2VydCBmcm9tICcuLi9hc3NlcnQtdXRpbCdcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL1l1cWluU2hhby9XZWJHTC1PYmotTG9hZGVyL2Jsb2IvbWFzdGVyL3dlYmdsLW9iai1sb2FkZXIuanNcblxudHlwZSBPYmpUID0ge1xuICAgIGluZGljZXM6IEFycmF5PG51bWJlcj4sXG4gICAgdmVydGljZXM6IEFycmF5PG51bWJlcj4sXG4gICAgbm9ybWFsczogQXJyYXk8bnVtYmVyPixcbiAgICB1dnM6IEFycmF5PG51bWJlcj5cbn1cblxuZXhwb3J0IHR5cGUgTWVzaExvYWRPcHRzID0ge1xuICAgIGZpbmFsaXplOiBib29sZWFuXG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgT0JKIHtcblxuICAgIGV4cG9ydCBmdW5jdGlvbiBEZWZhdWx0cygpOiBNZXNoTG9hZE9wdHMge1xuICAgICAgICByZXR1cm4geyBmaW5hbGl6ZTogdHJ1ZSB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRNZXNoKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsIHVybDogc3RyaW5nLCBvcHRzPzogTWVzaExvYWRPcHRzKTogUHJvbWlzZTxNZXNoPiB7XG4gICAgICAgIGlmICghb3B0cylcbiAgICAgICAgICAgIG9wdHMgPSBEZWZhdWx0cygpXG4gICAgICAgIGxldCBsb2FkZXIgPSBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQpIHtcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh4aHIucmVzcG9uc2VUZXh0KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCh4aHIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHhoci5vcGVuKCdHRVQnLCB1cmwpXG4gICAgICAgICAgICB4aHIuc2VuZCgpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBsb2FkZXIudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlTWVzaChnbCwgZGF0YSwgb3B0cylcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBleHBvcnQgZnVuY3Rpb24gcGFyc2VNZXNoKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsIG9iamVjdERhdGE6IHN0cmluZywgb3B0cz86IE1lc2hMb2FkT3B0cyk6IE1lc2gge1xuXG4gICAgICAgIGlmICghb3B0cylcbiAgICAgICAgICAgIG9wdHMgPSBEZWZhdWx0cygpXG5cbiAgICAgICAgbGV0IGxpbmVzOiBBcnJheTxzdHJpbmc+ID0gb2JqZWN0RGF0YS5zcGxpdCgnXFxuJylcblxuICAgICAgICBsZXQgcmF3OiBPYmpUID0ge1xuICAgICAgICAgICAgaW5kaWNlczogW10sXG4gICAgICAgICAgICB2ZXJ0aWNlczogW10sXG4gICAgICAgICAgICBub3JtYWxzOiBbXSxcbiAgICAgICAgICAgIHV2czogW11cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwYWNrZWQ6IE9ialQgPSB7XG4gICAgICAgICAgICBpbmRpY2VzOiBbXSxcbiAgICAgICAgICAgIHZlcnRpY2VzOiBbXSxcbiAgICAgICAgICAgIG5vcm1hbHM6IFtdLFxuICAgICAgICAgICAgdXZzOiBbXVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG1lc2ggPSBuZXcgTWVzaChnbClcblxuICAgICAgICBsZXQgaW5kZXggPSAwXG5cbiAgICAgICAgZm9yIChjb25zdCBsaW5lIG9mIGxpbmVzKSB7XG4gICAgICAgICAgICBsZXQgaXNWID0gbGluZS5zdGFydHNXaXRoKCd2JylcbiAgICAgICAgICAgIGxldCBpc1ZOID0gbGluZS5zdGFydHNXaXRoKCd2bicpXG4gICAgICAgICAgICBsZXQgaXNWVCA9IGxpbmUuc3RhcnRzV2l0aCgndnQnKVxuICAgICAgICAgICAgbGV0IGlzRiA9IGxpbmUuc3RhcnRzV2l0aCgnZicpXG5cbiAgICAgICAgICAgIGlmIChpc1YgJiYgIWlzVk4gJiYgIWlzVlQpIHtcbiAgICAgICAgICAgICAgICByYXdBcHBlbmRlcigndmVydGljZXMnLCBsaW5lLnNwbGl0KCcgJyksIDQsICd2ZXJ0ZXggZGF0YScpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzVk4pIHtcbiAgICAgICAgICAgICAgICByYXdBcHBlbmRlcignbm9ybWFscycsIGxpbmUuc3BsaXQoJyAnKSwgNCwgJ3ZlcnRleCBub3JtYWwgZGF0YScpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzVlQpIHtcbiAgICAgICAgICAgICAgICByYXdBcHBlbmRlcigndXZzJywgbGluZS5zcGxpdCgnICcpLCAzLCAndXYgZGF0YScpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzRikge1xuXG4gICAgICAgICAgICAgICAgbGV0IF9pbmRpY2VzID0gbGluZS5zcGxpdCgnICcpLm1hcChpbmRzID0+IGluZHMuc3BsaXQoJy8nKSlcblxuICAgICAgICAgICAgICAgIF9pbmRpY2VzLm1hcCgoaW5kLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtc2cgPSAnRmFjZSBkYXRhIHdlcmUgZm9ybWF0dGVkIGluY29ycmVjdGx5J1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSAwICYmIGluZC5sZW5ndGggIT09IDEpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKVxuICAgICAgICAgICAgICAgICAgICBpZiAoaSA+IDAgJiYgaW5kLmxlbmd0aCAhPT0gMylcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIF9pbmRpY2VzLnNoaWZ0KClcblxuICAgICAgICAgICAgICAgIGxldCBwYXJzZWRJbmRpY2VzID0gX2luZGljZXMubWFwKGluZCA9PiBwYXJzZUluZGljZXMoaW5kKSlcblxuICAgICAgICAgICAgICAgIHBhY2tlZEFwcGVuZGVyKHBhcnNlZEluZGljZXMsIFswLCAxLCAyXSlcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAzOyBpIDwgcGFyc2VkSW5kaWNlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBwYWNrZWRBcHBlbmRlcihwYXJzZWRJbmRpY2VzLCBbaS0zLCBpLTEsIGldKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1lc2guc2V0SW5kaWNlcyhuZXcgVWludDE2QXJyYXkocGFja2VkLmluZGljZXMpKVxuICAgICAgICBtZXNoLnNldFRvcG9sb2d5KFRvcG9sb2dpZXMuVFJJQU5HTEVTKVxuXG4gICAgICAgIGlmIChvcHRzLmZpbmFsaXplKSB7XG4gICAgICAgICAgICBtZXNoLmZpbmFsaXplKClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtZXNoXG5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgaGVscGVyc1xuICAgICAgICAvL1xuXG4gICAgICAgIGZ1bmN0aW9uIHBhcnNlQW5kVmFsaWRhdGUodmFsdWU6IHN0cmluZywgZnVuYzogKHZhbDogc3RyaW5nKSA9PiBudW1iZXIsIGFsaWFzOiBzdHJpbmcpOiBudW1iZXIge1xuICAgICAgICAgICAgbGV0IHJlcyA9IGZ1bmModmFsdWUpXG4gICAgICAgICAgICBpZiAoaXNOYU4ocmVzKSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yIHBhcnNpbmcgXCIke2FsaWFzfVwiOiB2YWx1ZSB3YXMgTmFOLmApXG4gICAgICAgICAgICByZXR1cm4gcmVzXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByYXdBcHBlbmRlcihuYW1lOiBrZXlvZiBPYmpULCB2YWx1ZXM6IEFycmF5PHN0cmluZz4sIE46IG51bWJlciwgYWxpYXM6IHN0cmluZykge1xuICAgICAgICAgICAgYXNzZXJ0LmFzc2VydE5WYWx1ZXModmFsdWVzLCBOLCBhbGlhcylcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgTjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcmF3W25hbWVdLnB1c2gocGFyc2VBbmRWYWxpZGF0ZSh2YWx1ZXNbaV0sIHBhcnNlRmxvYXQsIGFsaWFzKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHZlcnRleEFwcGVuZGVyKHZpOiBudW1iZXIsIG5pOiBudW1iZXIsIHVpOiBudW1iZXIpIHtcbiAgICAgICAgICAgIGxldCB2ZXJ0ZXggPSBuZXcgVmVydGV4KClcblxuICAgICAgICAgICAgbGV0IHggPSByYXcudmVydGljZXNbKHZpLTEpKjMrMF1cbiAgICAgICAgICAgIGxldCB5ID0gcmF3LnZlcnRpY2VzWyh2aS0xKSozKzFdXG4gICAgICAgICAgICBsZXQgeiA9IHJhdy52ZXJ0aWNlc1sodmktMSkqMysyXVxuXG4gICAgICAgICAgICBsZXQgbnggPSByYXcubm9ybWFsc1sobmktMSkqMyswXVxuICAgICAgICAgICAgbGV0IG55ID0gcmF3Lm5vcm1hbHNbKG5pLTEpKjMrMV1cbiAgICAgICAgICAgIGxldCBueiA9IHJhdy5ub3JtYWxzWyhuaS0xKSozKzJdXG5cbiAgICAgICAgICAgIHZlcnRleC5zZXRQb3NpdGlvbihuZXcgRmxvYXQzMkFycmF5KFt4LCB5LCB6XSkpXG4gICAgICAgICAgICB2ZXJ0ZXguc2V0Tm9ybWFsKG5ldyBGbG9hdDMyQXJyYXkoW254LCBueSwgbnpdKSlcblxuICAgICAgICAgICAgcGFja2VkLmluZGljZXMucHVzaChpbmRleCsrKVxuXG4gICAgICAgICAgICBpZiAodWkgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB2ZXJ0ZXguc2V0VVYobmV3IEZsb2F0MzJBcnJheShbMCwgMF0pKVxuICAgICAgICAgICAgICAgIG1lc2guYWRkVmVydGV4KHZlcnRleClcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHUgPSByYXcudXZzWyh1aS0xKSoyKzBdXG4gICAgICAgICAgICBsZXQgdiA9IHJhdy51dnNbKHVpLTEpKjIrMV1cblxuICAgICAgICAgICAgdmVydGV4LnNldFVWKG5ldyBGbG9hdDMyQXJyYXkoW3UsIHZdKSlcblxuICAgICAgICAgICAgbWVzaC5hZGRWZXJ0ZXgodmVydGV4KVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcGFja2VkQXBwZW5kZXIoaW5kczogQXJyYXk8QXJyYXk8bnVtYmVyPj4sIGZyYWdJbmRzOiBBcnJheTxudW1iZXI+KSB7XG4gICAgICAgICAgICBhc3NlcnQuYXNzZXJ0TlZhbHVlcyhmcmFnSW5kcywgMywgJ3RyaWFuZ2xlcycpXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBpbmQgPSBmcmFnSW5kc1tpXVxuICAgICAgICAgICAgICAgIHZlcnRleEFwcGVuZGVyKGluZHNbaW5kXVswXSwgaW5kc1tpbmRdWzJdLCBpbmRzW2luZF1bMV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBwYXJzZUluZGljZXMoaW5kczogQXJyYXk8c3RyaW5nPik6IEFycmF5PG51bWJlcj4ge1xuICAgICAgICAgICAgbGV0IHZlcnRJbmRleCA9IHBhcnNlQW5kVmFsaWRhdGUoaW5kc1swXSwgcGFyc2VJbnQsICd2ZXJ0ZXggaW5kZXgnKVxuICAgICAgICAgICAgbGV0IG5vcm1JbmRleCA9IHBhcnNlQW5kVmFsaWRhdGUoaW5kc1syXSwgcGFyc2VJbnQsICdub3JtYWwgaW5kZXgnKVxuICAgICAgICAgICAgbGV0IHV2SW5kZXggPSBudWxsXG4gICAgICAgICAgICBpZiAoaW5kc1sxXSAhPT0gJycpXG4gICAgICAgICAgICAgICAgdXZJbmRleCA9IHBhcnNlQW5kVmFsaWRhdGUoaW5kc1sxXSwgcGFyc2VJbnQsICd1diBpbmRleCcpXG4gICAgICAgICAgICByZXR1cm4gW3ZlcnRJbmRleCwgdXZJbmRleCwgbm9ybUluZGV4XVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvLyBleHBvcnQgZnVuY3Rpb24gcGFyc2VNZXNoKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsIG9iamVjdERhdGE6IHN0cmluZyk6IE1lc2gge1xuXG4gICAgLy8gICAgIHZhciB2ZXJ0cyA9IFtdO1xuICAgIC8vICAgICB2YXIgdmVydE5vcm1hbHMgPSBbXTtcbiAgICAvLyAgICAgdmFyIHRleHR1cmVzID0gW107XG4gICAgICAgIFxuICAgIC8vICAgICB2YXIgcGFja2VkOiB7XG4gICAgLy8gICAgICAgICB2ZXJ0czogQXJyYXk8c3RyaW5nPixcbiAgICAvLyAgICAgICAgIG5vcm1zOiBBcnJheTxzdHJpbmc+LFxuICAgIC8vICAgICAgICAgdGV4dHVyZXM6IEFycmF5PHN0cmluZz4sXG4gICAgLy8gICAgICAgICBoYXNoaW5kaWNlczogYW55LFxuICAgIC8vICAgICAgICAgaW5kaWNlczogQXJyYXk8YW55PixcbiAgICAvLyAgICAgICAgIGluZGV4OiBudW1iZXJcbiAgICAvLyAgICAgfSA9IHtcbiAgICAvLyAgICAgICAgIHZlcnRzOiBbXSxcbiAgICAvLyAgICAgICAgIG5vcm1zOiBbXSxcbiAgICAvLyAgICAgICAgIHRleHR1cmVzOiBbXSxcbiAgICAvLyAgICAgICAgIGhhc2hpbmRpY2VzOiBbXSxcbiAgICAvLyAgICAgICAgIGluZGljZXM6IFtdLFxuICAgIC8vICAgICAgICAgaW5kZXg6IDBcbiAgICAvLyAgICAgfVxuICAgICAgICBcbiAgICAvLyAgICAgLy8gYXJyYXkgb2YgbGluZXMgc2VwYXJhdGVkIGJ5IHRoZSBuZXdsaW5lXG4gICAgLy8gICAgIHZhciBsaW5lczogQXJyYXk8c3RyaW5nPiA9IG9iamVjdERhdGEuc3BsaXQoICdcXG4nIClcbiAgICAvLyAgICAgZm9yKCB2YXIgaT0wOyBpPGxpbmVzLmxlbmd0aDsgaSsrICl7XG4gICAgLy8gICAgICAgLy8gaWYgdGhpcyBpcyBhIHZlcnRleFxuICAgIC8vICAgICAgIGlmKCBsaW5lc1sgaSBdLnN0YXJ0c1dpdGgoICd2ICcgKSApe1xuICAgIC8vICAgICAgICAgbGV0IGxpbmUgPSBsaW5lc1sgaSBdLnNsaWNlKCAyICkuc3BsaXQoIFwiIFwiIClcbiAgICAvLyAgICAgICAgIHZlcnRzLnB1c2goIGxpbmVbIDAgXSApO1xuICAgIC8vICAgICAgICAgdmVydHMucHVzaCggbGluZVsgMSBdICk7XG4gICAgLy8gICAgICAgICB2ZXJ0cy5wdXNoKCBsaW5lWyAyIF0gKTtcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgICAgLy8gaWYgdGhpcyBpcyBhIHZlcnRleCBub3JtYWxcbiAgICAvLyAgICAgICBlbHNlIGlmKCBsaW5lc1sgaSBdLnN0YXJ0c1dpdGgoICd2bicgKSApe1xuICAgIC8vICAgICAgICAgbGV0IGxpbmUgPSBsaW5lc1sgaSBdLnNsaWNlKCAzICkuc3BsaXQoIFwiIFwiIClcbiAgICAvLyAgICAgICAgIHZlcnROb3JtYWxzLnB1c2goIGxpbmVbIDAgXSApO1xuICAgIC8vICAgICAgICAgdmVydE5vcm1hbHMucHVzaCggbGluZVsgMSBdICk7XG4gICAgLy8gICAgICAgICB2ZXJ0Tm9ybWFscy5wdXNoKCBsaW5lWyAyIF0gKTtcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgICAgLy8gaWYgdGhpcyBpcyBhIHRleHR1cmVcbiAgICAvLyAgICAgICBlbHNlIGlmKCBsaW5lc1sgaSBdLnN0YXJ0c1dpdGgoICd2dCcgKSApe1xuICAgIC8vICAgICAgICAgbGV0IGxpbmUgPSBsaW5lc1sgaSBdLnNsaWNlKCAzICkuc3BsaXQoIFwiIFwiIClcbiAgICAvLyAgICAgICAgIHRleHR1cmVzLnB1c2goIGxpbmVbIDAgXSApO1xuICAgIC8vICAgICAgICAgdGV4dHVyZXMucHVzaCggbGluZVsgMSBdICk7XG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICAgIC8vIGlmIHRoaXMgaXMgYSBmYWNlXG4gICAgLy8gICAgICAgZWxzZSBpZiggbGluZXNbIGkgXS5zdGFydHNXaXRoKCAnZiAnICkgKXtcbiAgICAvLyAgICAgICAgIGxldCBsaW5lID0gbGluZXNbIGkgXS5zbGljZSggMiApLnNwbGl0KCBcIiBcIiApO1xuICAgIC8vICAgICAgICAgdmFyIHF1YWQgPSBmYWxzZTtcbiAgICAvLyAgICAgICAgIGZvcih2YXIgaj0wOyBqPGxpbmUubGVuZ3RoOyBqKyspe1xuICAgIC8vICAgICAgICAgICAgIC8vIFRyaWFuZ3VsYXRpbmcgcXVhZHNcbiAgICAvLyAgICAgICAgICAgICAvLyBxdWFkOiAnZiB2MC90MC92bjAgdjEvdDEvdm4xIHYyL3QyL3ZuMiB2My90My92bjMvJ1xuICAgIC8vICAgICAgICAgICAgIC8vIGNvcnJlc3BvbmRpbmcgdHJpYW5nbGVzOlxuICAgIC8vICAgICAgICAgICAgIC8vICAgICAgJ2YgdjAvdDAvdm4wIHYxL3QxL3ZuMSB2Mi90Mi92bjInXG4gICAgLy8gICAgICAgICAgICAgLy8gICAgICAnZiB2Mi90Mi92bjIgdjMvdDMvdm4zIHYwL3QwL3ZuMCdcbiAgICAvLyAgICAgICAgICAgICBpZihqID09IDMgJiYgIXF1YWQpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgLy8gYWRkIHYyL3QyL3ZuMiBpbiBhZ2FpbiBiZWZvcmUgY29udGludWluZyB0byAzXG4gICAgLy8gICAgICAgICAgICAgICAgIGogPSAyO1xuICAgIC8vICAgICAgICAgICAgICAgICBxdWFkID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgICAgICB9XG5cbiAgICAvLyAgICAgICAgICAgICBpZiggbGluZVsgaiBdIGluIHBhY2tlZC5oYXNoaW5kaWNlcyApe1xuICAgIC8vICAgICAgICAgICAgICAgICBwYWNrZWQuaW5kaWNlcy5wdXNoKCBwYWNrZWQuaGFzaGluZGljZXNbIGxpbmVbIGogXSBdICk7XG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgIGVsc2V7XG4gICAgLy8gICAgICAgICAgICAgICAgIGxldCBmYWNlID0gbGluZVsgaiBdLnNwbGl0KCAnLycgKVxuICAgIC8vICAgICAgICAgICAgICAgICBsZXQgaTAgPSBwYXJzZUludChmYWNlWzBdKVxuICAgIC8vICAgICAgICAgICAgICAgICBsZXQgaTEgPSBwYXJzZUludChmYWNlWzFdKVxuICAgIC8vICAgICAgICAgICAgICAgICBsZXQgaTIgPSBwYXJzZUludChmYWNlWzJdKVxuICAgIC8vICAgICAgICAgICAgICAgICAvLyB2ZXJ0ZXggcG9zaXRpb25cbiAgICAvLyAgICAgICAgICAgICAgICAgcGFja2VkLnZlcnRzLnB1c2goIHZlcnRzWyAoaTAgLSAxKSAqIDMgKyAwIF0gKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgcGFja2VkLnZlcnRzLnB1c2goIHZlcnRzWyAoaTAgLSAxKSAqIDMgKyAxIF0gKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgcGFja2VkLnZlcnRzLnB1c2goIHZlcnRzWyAoaTAgLSAxKSAqIDMgKyAyIF0gKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgLy8gdmVydGV4IHRleHR1cmVzXG4gICAgLy8gICAgICAgICAgICAgICAgIHBhY2tlZC50ZXh0dXJlcy5wdXNoKCB0ZXh0dXJlc1sgKGkxIC0gMSkgKiAyICsgMCBdICk7XG4gICAgLy8gICAgICAgICAgICAgICAgIHBhY2tlZC50ZXh0dXJlcy5wdXNoKCB0ZXh0dXJlc1sgKGkxIC0gMSkgKiAyICsgMSBdICk7XG4gICAgLy8gICAgICAgICAgICAgICAgIC8vIHZlcnRleCBub3JtYWxzXG4gICAgLy8gICAgICAgICAgICAgICAgIHBhY2tlZC5ub3Jtcy5wdXNoKCB2ZXJ0Tm9ybWFsc1sgKGkyIC0gMSkgKiAzICsgMCBdICk7XG4gICAgLy8gICAgICAgICAgICAgICAgIHBhY2tlZC5ub3Jtcy5wdXNoKCB2ZXJ0Tm9ybWFsc1sgKGkyIC0gMSkgKiAzICsgMSBdICk7XG4gICAgLy8gICAgICAgICAgICAgICAgIHBhY2tlZC5ub3Jtcy5wdXNoKCB2ZXJ0Tm9ybWFsc1sgKGkyIC0gMSkgKiAzICsgMiBdICk7XG4gICAgLy8gICAgICAgICAgICAgICAgIC8vIGFkZCB0aGUgbmV3bHkgY3JlYXRlZCB2ZXJ0ZXggdG8gdGhlIGxpc3Qgb2YgaW5kaWNlc1xuICAgIC8vICAgICAgICAgICAgICAgICBwYWNrZWQuaGFzaGluZGljZXNbIGxpbmVbIGogXSBdID0gcGFja2VkLmluZGV4O1xuICAgIC8vICAgICAgICAgICAgICAgICBwYWNrZWQuaW5kaWNlcy5wdXNoKCBwYWNrZWQuaW5kZXggKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgLy8gaW5jcmVtZW50IHRoZSBjb3VudGVyXG4gICAgLy8gICAgICAgICAgICAgICAgIHBhY2tlZC5pbmRleCArPSAxO1xuICAgIC8vICAgICAgICAgICAgIH1cblxuICAgIC8vICAgICAgICAgICAgIGlmKGogPT0gMyAmJiBxdWFkKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIC8vIGFkZCB2MC90MC92bjAgb250byB0aGUgc2Vjb25kIHRyaWFuZ2xlXG4gICAgLy8gICAgICAgICAgICAgICAgIHBhY2tlZC5pbmRpY2VzLnB1c2goIHBhY2tlZC5oYXNoaW5kaWNlc1sgbGluZVsgMCBdIF0gKTtcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICB9XG5cbiAgICAvLyAgICAgbGV0IG5WZXJ0czogbnVtYmVyID0gcGFja2VkLnZlcnRzLmxlbmd0aFxuICAgIC8vICAgICBsZXQgbk5vcm1zOiBudW1iZXIgPSBwYWNrZWQubm9ybXMubGVuZ3RoXG4gICAgLy8gICAgIGxldCBuVGV4OiBudW1iZXIgPSBwYWNrZWQudGV4dHVyZXMubGVuZ3RoXG5cbiAgICAvLyAgICAgaWYgKG5WZXJ0cyAlIDMgIT09IDApIHtcbiAgICAvLyAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3IgcGFyc2luZyBvYmplY3Q6IHZlcnRleCBkYXRhIGRpZCBub3QgaGF2ZSBhIG11bHRpcGxlIG9mIDMgZWxlbWVudHMuJylcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIGlmIChuVmVydHMgIT09IG5Ob3Jtcykge1xuICAgIC8vICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvciBwYXJzaW5nIG9iamVjdDogdmVydGV4IGRhdGEgZGlkIG5vdCBtYXRjaCBudW1iZXIgb2Ygbm9ybWFscyBkYXRhLicpXG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICBpZiAoblRleC8yICE9PSBuVmVydHMvMykge1xuICAgIC8vICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvciBwYXJzaW5nIG9iamVjdDogdGV4dHVyZSBkYXRhIGRpZCBub3QgbWF0Y2ggbnVtYmVyIG9mIHZlcnRleCBlbGVtZW50cy4nKVxuICAgIC8vICAgICB9XG5cbiAgICAvLyAgICAgbGV0IG5GcmFnbWVudHMgPSBuVmVydHMvM1xuICAgIC8vICAgICBsZXQgdmVydGljZXNfID0gcGFja2VkLnZlcnRzLm1hcCh2ZXJ0ID0+IHBhcnNlRmxvYXQodmVydCkpXG4gICAgLy8gICAgIGxldCB0ZXh0dXJlc18gPSBwYWNrZWQudGV4dHVyZXMubWFwKHRleCA9PiBwYXJzZUZsb2F0KHRleCkpXG4gICAgLy8gICAgIGxldCBub3JtYWxzXyA9IHBhY2tlZC5ub3Jtcy5tYXAobm9ybSA9PiBwYXJzZUZsb2F0KG5vcm0pKVxuXG4gICAgLy8gICAgIGxldCBtZXNoID0gbmV3IE1lc2goZ2wpXG5cbiAgICAvLyAgICAgLy8gZGVidWdnZXJcblxuICAgIC8vICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbkZyYWdtZW50czsgaSsrKSB7XG4gICAgLy8gICAgICAgICBsZXQgeCA9IHZlcnRpY2VzX1tpKjMrMF1cbiAgICAvLyAgICAgICAgIGxldCB5ID0gdmVydGljZXNfW2kqMysxXVxuICAgIC8vICAgICAgICAgbGV0IHogPSB2ZXJ0aWNlc19baSozKzJdXG5cbiAgICAvLyAgICAgICAgIGxldCBueCA9IG5vcm1hbHNfW2kqMyswXVxuICAgIC8vICAgICAgICAgbGV0IG55ID0gbm9ybWFsc19baSozKzFdXG4gICAgLy8gICAgICAgICBsZXQgbnogPSBub3JtYWxzX1tpKjMrMl1cblxuICAgIC8vICAgICAgICAgbGV0IHUgPSB0ZXh0dXJlc19baSoyKzBdXG4gICAgLy8gICAgICAgICBsZXQgdiA9IHRleHR1cmVzX1tpKjIrMV1cblxuICAgIC8vICAgICAgICAgbGV0IHZlcnQgPSBuZXcgVmVydGV4KClcbiAgICAvLyAgICAgICAgIHZlcnQuc2V0UG9zaXRpb24obmV3IEZsb2F0MzJBcnJheShbeCwgeSwgel0pKVxuICAgIC8vICAgICAgICAgdmVydC5zZXROb3JtYWwobmV3IEZsb2F0MzJBcnJheShbbngsIG55LCBuel0pKVxuICAgIC8vICAgICAgICAgdmVydC5zZXRVVihuZXcgRmxvYXQzMkFycmF5KFt1LCB2XSkpXG5cbiAgICAvLyAgICAgICAgIG1lc2guYWRkVmVydGV4KHZlcnQpXG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICBtZXNoLnNldEluZGljZXMobmV3IFVpbnQxNkFycmF5KHBhY2tlZC5pbmRpY2VzKSlcbiAgICAvLyAgICAgbWVzaC5zZXRUb3BvbG9neShUb3BvbG9naWVzLlRSSUFOR0xFUylcblxuICAgIC8vICAgICByZXR1cm4gbWVzaFxuICAgIC8vIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC9sb2FkZXJzL29iai1sb2FkZXIudHMiLCJpbXBvcnQgKiBhcyBUZXh0dXJlIGZyb20gJy4uL3RleHR1cmUnXG5cbmV4cG9ydCBuYW1lc3BhY2UgVEVYIHtcblxuXHRleHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZDJEKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsIHVybDogc3RyaW5nLCBvcHRzPzogVGV4dHVyZS5UZXh0dXJlT3B0cyk6IFByb21pc2U8VGV4dHVyZS5UZXh0dXJlPiB7XG4gICAgICAgIGxldCBsb2FkZXIgPSBuZXcgUHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgXHRcdGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuXG4gICAgXHRcdGltZy5vbmxvYWQgPSAoZSkgPT4ge1xuICAgIFx0XHRcdHdpbmRvdy5VUkwucmV2b2tlT2JqZWN0VVJMKGltZy5zcmMpXG4gICAgXHRcdFx0cmVzb2x2ZShpbWcpXG4gICAgXHRcdH1cblxuICAgIFx0XHRpbWcub25lcnJvciA9IChlKSA9PiB7XG4gICAgXHRcdFx0cmVqZWN0KGUpXG4gICAgXHRcdH1cblxuICAgIFx0XHRpbWcuc3JjID0gdXJsXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBsb2FkZXIudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlMkQoZ2wsIGRhdGEsIG9wdHMpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyc2UyRChnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCBkYXRhOiBIVE1MSW1hZ2VFbGVtZW50LCBvcHRzPzogVGV4dHVyZS5UZXh0dXJlT3B0cyk6IFRleHR1cmUuVGV4dHVyZSB7XG4gICAgXHRyZXR1cm4gVGV4dHVyZS5UZXgyRChnbCwgZGF0YSwgb3B0cylcbiAgICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC9sb2FkZXJzL3RleHR1cmUtbG9hZGVyLnRzIiwiaW1wb3J0IHsgVG91Y2gsIE1vdXNlLCBQb2ludGVyTG9jaywgRG91YmxlVGFwRGV0ZWN0b3IgfSBmcm9tICcuL2lucHV0LXh5J1xuaW1wb3J0IHsgS2V5Ym9hcmQsIEtleXMgfSBmcm9tICcuL2tleWJvYXJkJ1xuXG5leHBvcnQge1xuXHRUb3VjaCxcblx0RG91YmxlVGFwRGV0ZWN0b3IsXG5cdE1vdXNlLFxuXHRQb2ludGVyTG9jayxcblx0S2V5Ym9hcmQsXG5cdEtleXNcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC9pbnB1dC50cyIsImltcG9ydCAqIGFzIF9LZXlib2FyZCBmcm9tICcuL2tleWJvYXJkJ1xuaW1wb3J0ICogYXMgWFkgZnJvbSAnLi9pbnB1dC14eSdcbmltcG9ydCB7IENhbWVyYSwgZGlyZWN0aW9ucyB9IGZyb20gJy4vY2FtZXJhJ1xuaW1wb3J0IHsgRGVsdGFUaW1lciwgcmF0aW9zLCBSYXRpbyB9IGZyb20gJy4vdGltZS11dGlsJ1xuaW1wb3J0IHsgdmVjMiwgdmVjMywgdmVjNCB9IGZyb20gJ2dsLW1hdHJpeCdcbmltcG9ydCAqIGFzIG1hdGggZnJvbSAnLi93Z2wtbWF0aCdcbmltcG9ydCB7IGNvbW1vbiwgbWF0cml4IH0gZnJvbSAnLi91dGlsJ1xuXG5leHBvcnQgbmFtZXNwYWNlIE9yYml0IHtcblxuXHR0eXBlIE9yYml0T3B0cyA9IHtcblx0XHRuVmVsb2NpdHlTYW1wbGVzOiBudW1iZXIsXG5cdFx0dmVsb2NpdHlEZWNheVNlbnNpdGl2aXR5OiBudW1iZXIsXG5cdFx0bWF4VmVsb2NpdHk6IG51bWJlcixcblx0XHRzcGVlZDogbnVtYmVyLFxuXHRcdHNtb290aDogYm9vbGVhblxuXHR9XG5cblx0ZXhwb3J0IGNsYXNzIE9yYml0MjxLIGV4dGVuZHMgWFkuWFlFdmVudCwgVCBleHRlbmRzIFhZLnh5PEs+PiB7XG5cblx0XHRwcml2YXRlIGlucHV0OiBUXG5cdFx0cHJpdmF0ZSBjYW1lcmE6IENhbWVyYVxuXHRcdHByaXZhdGUgdGltZXI6IERlbHRhVGltZXJcblxuXHRcdHByaXZhdGUgcmVsZWFzZWQ6IGJvb2xlYW5cblx0XHRwcml2YXRlIGN1cnJlbnRDb29yZGluYXRlczogdmVjMlxuXHRcdHByaXZhdGUgdG1wQ3VycmVudENvb3JkaW5hdGVzOiB2ZWMyXG5cdFx0cHJpdmF0ZSBsYXN0Q29vcmRpbmF0ZXM6IHZlYzJcblx0XHRwcml2YXRlIHZlbG9jaXR5OiB2ZWMyXG5cdFx0cHJpdmF0ZSB0b3RhbFZlbG9jaXR5OiB2ZWMyXG5cdFx0cHJpdmF0ZSBkZWx0YTogdmVjMlxuXHRcdHByaXZhdGUgZHRzOiB2ZWMyXG5cdFx0cHJpdmF0ZSBvcHRzOiBPcmJpdE9wdHNcblxuXHRcdGNvbnN0cnVjdG9yKGlucHV0OiBULCBjYW1lcmE6IENhbWVyYSwgb3B0cz86IE9yYml0T3B0cykge1xuXHRcdFx0dGhpcy5pbnB1dCA9IGlucHV0XG5cdFx0XHR0aGlzLmNhbWVyYSA9IGNhbWVyYVxuXHRcdFx0dGhpcy50aW1lciA9IG5ldyBEZWx0YVRpbWVyKClcblxuXHRcdFx0aWYgKCFvcHRzKVxuXHRcdFx0XHRvcHRzID0gT3JiaXQyLkRlZmF1bHRzKClcblxuXHRcdFx0dGhpcy5yZWxlYXNlZCA9IGZhbHNlXG5cdFx0XHR0aGlzLmxhc3RDb29yZGluYXRlcyA9IHZlYzIuZnJvbVZhbHVlcygwLCAwKVxuXHRcdFx0dGhpcy5jdXJyZW50Q29vcmRpbmF0ZXMgPSB2ZWMyLmZyb21WYWx1ZXMoMCwgMClcblx0XHRcdHRoaXMudG1wQ3VycmVudENvb3JkaW5hdGVzID0gdmVjMi5mcm9tVmFsdWVzKDAsIDApXG5cdFx0XHR0aGlzLnZlbG9jaXR5ID0gdmVjMi5mcm9tVmFsdWVzKDAsIDApXG5cdFx0XHR0aGlzLnRvdGFsVmVsb2NpdHkgPSB2ZWMyLmZyb21WYWx1ZXMoMCwgMClcblx0XHRcdHRoaXMuZGVsdGEgPSB2ZWMyLmZyb21WYWx1ZXMoMCwgMClcblx0XHRcdHRoaXMuZHRzID0gdmVjMi5mcm9tVmFsdWVzKDAsIDApXG5cblx0XHRcdHRoaXMub3B0cyA9IG9wdHNcblxuXHRcdFx0dGhpcy50aW1lci5zZXRSYXRpbyhyYXRpb3MubXMoKSlcblxuXHRcdFx0dGhpcy5zZXR1cCgpXG5cdFx0fVxuXG5cdFx0cHVibGljIHVwZGF0ZSgpIHtcblx0XHRcdGNvbnN0IGlucHV0ID0gdGhpcy5pbnB1dFxuXHRcdFx0Y29uc3QgdGltZXIgPSB0aGlzLnRpbWVyXG5cdFx0XHRjb25zdCBjYW1lcmEgPSB0aGlzLmNhbWVyYVxuXHRcdFx0Y29uc3QgdG1wQ29vcmRzID0gdGhpcy50bXBDdXJyZW50Q29vcmRpbmF0ZXNcblx0XHRcdGNvbnN0IGNvb3JkcyA9IHRoaXMuY3VycmVudENvb3JkaW5hdGVzXG5cdFx0XHRjb25zdCBsYXN0Q29vcmRzID0gdGhpcy5sYXN0Q29vcmRpbmF0ZXNcblx0XHRcdGNvbnN0IHZlbG9jaXR5ID0gdGhpcy52ZWxvY2l0eVxuXHRcdFx0Y29uc3QgdG90YWxWZWxvY2l0eSA9IHRoaXMudG90YWxWZWxvY2l0eVxuXHRcdFx0Y29uc3QgZGVsdGEgPSB0aGlzLmRlbHRhXG5cdFx0XHRjb25zdCBkdHMgPSB0aGlzLmR0c1xuXHRcdFx0Y29uc3Qgc3BlZWRNdWx0aXBsZXIgPSB0aGlzLm9wdHMuc3BlZWRcblx0XHRcdGNvbnN0IGRlY2F5U2VucyA9IHRoaXMub3B0cy52ZWxvY2l0eURlY2F5U2Vuc2l0aXZpdHlcblxuXHRcdFx0dGltZXIudXBkYXRlKClcblxuXHRcdFx0dG1wQ29vcmRzLnNldChjb29yZHMpXG5cblx0XHRcdHZlYzIuc3VidHJhY3QoZGVsdGEsIHRtcENvb3JkcywgbGFzdENvb3JkcylcblxuXHRcdFx0Y29uc3QgZHQgPSB0aW1lci5kZWx0YSgpXG5cblx0XHRcdGR0c1swXSA9IGR0XG5cdFx0XHRkdHNbMV0gPSBkdFxuXG5cdFx0XHRpZiAoZHQgPiAwKVxuXHRcdFx0XHR2ZWMyLmRpdmlkZSh2ZWxvY2l0eSwgZGVsdGEsIGR0cylcblxuXHRcdFx0dmVsb2NpdHlbMF0gPSBSYXRpby5zY2FsZSh0aW1lci5nZXRSYXRpbygpLCB2ZWxvY2l0eVswXSlcblx0XHRcdHZlbG9jaXR5WzFdID0gUmF0aW8uc2NhbGUodGltZXIuZ2V0UmF0aW8oKSwgdmVsb2NpdHlbMV0pXG5cblx0XHRcdHZlYzIubXVsKHZlbG9jaXR5LCB2ZWxvY2l0eSwgW3NwZWVkTXVsdGlwbGVyLCBzcGVlZE11bHRpcGxlcl0pXG5cblx0XHRcdHZlYzIuYWRkKHRvdGFsVmVsb2NpdHksIHRvdGFsVmVsb2NpdHksIHZlbG9jaXR5KVxuXG5cdFx0XHRsZXQgdGFyZ2V0VmVsb2NpdHkgPSB0aGlzLm9wdHMuc21vb3RoID8gdG90YWxWZWxvY2l0eSA6IHZlbG9jaXR5XG5cblx0XHRcdGlmIChpbnB1dC5zaG91bGRJbnZlcnQoKSkge1xuXHRcdFx0XHRjYW1lcmEucm90YXRlKC10YXJnZXRWZWxvY2l0eVswXSwgdGFyZ2V0VmVsb2NpdHlbMV0pXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjYW1lcmEucm90YXRlKHRhcmdldFZlbG9jaXR5WzBdLCAtdGFyZ2V0VmVsb2NpdHlbMV0pXG5cdFx0XHR9XG5cblx0XHRcdGxhc3RDb29yZHMuc2V0KHRtcENvb3JkcylcblxuXHRcdFx0dG90YWxWZWxvY2l0eVswXSAvPSBkZWNheVNlbnNcblx0XHRcdHRvdGFsVmVsb2NpdHlbMV0gLz0gZGVjYXlTZW5zXG5cblx0XHRcdGlmIChNYXRoLmFicyh0b3RhbFZlbG9jaXR5WzBdKSA8IDAuMDAwMDEpIHRvdGFsVmVsb2NpdHlbMF0gPSAwXG5cdFx0XHRpZiAoTWF0aC5hYnModG90YWxWZWxvY2l0eVsxXSkgPCAwLjAwMDAxKSB0b3RhbFZlbG9jaXR5WzFdID0gMFxuXHRcdH1cblxuXHRcdHByaXZhdGUgc2V0dXAoKTogdm9pZCB7XG5cdFx0XHRjb25zdCBpbnB1dCA9IHRoaXMuaW5wdXRcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzXG5cblx0XHRcdGlucHV0LnN0YXJ0KChldnQ6IEspID0+IHtcblx0XHRcdFx0c2VsZi5yZWxlYXNlZCA9IGZhbHNlXG5cdFx0XHRcdHNlbGYuY3VycmVudENvb3JkaW5hdGVzID0gc2VsZi5pbnB1dC5nZXRQcmltYXJ5Q29vcmRpbmF0ZXMoZXZ0KVxuXHRcdFx0XHRzZWxmLmxhc3RDb29yZGluYXRlcy5zZXQoc2VsZi5jdXJyZW50Q29vcmRpbmF0ZXMpXG5cdFx0XHR9KVxuXG5cdFx0XHRpbnB1dC5tb3ZlKChldnQ6IEspID0+IHtcblx0XHRcdFx0ZXZ0LnByZXZlbnREZWZhdWx0KClcblx0XHRcdFx0c2VsZi5jdXJyZW50Q29vcmRpbmF0ZXMgPSBzZWxmLmlucHV0LmdldFByaW1hcnlDb29yZGluYXRlcyhldnQpXG5cdFx0XHR9KVxuXG5cdFx0XHRpbnB1dC5lbmQoKGV2dDogSykgPT4ge1xuXHRcdFx0XHRzZWxmLnJlbGVhc2VkID0gdHJ1ZVxuXHRcdFx0fSlcblx0XHR9XG5cblx0XHRwdWJsaWMgc3RhdGljIERlZmF1bHRzKCk6IE9yYml0T3B0cyB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRuVmVsb2NpdHlTYW1wbGVzOiAxMDAsXG5cdFx0XHRcdHZlbG9jaXR5RGVjYXlTZW5zaXRpdml0eTogMS4yLFxuXHRcdFx0XHRtYXhWZWxvY2l0eTogNDAwMCxcblx0XHRcdFx0c3BlZWQ6IDIsXG5cdFx0XHRcdHNtb290aDogdHJ1ZVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vXG5cdC8vXHRyZWd1bGFyXG5cdC8vXG5cblx0YWJzdHJhY3QgY2xhc3MgX09yYml0PFQgZXh0ZW5kcyBYWS5YWUV2ZW50LCBYIGV4dGVuZHMgWFkueHk8VD4+IHtcblxuXHRcdHByaXZhdGUgaW5wdXQ6IFhcblx0XHRwcml2YXRlIHRpbWVyOiBEZWx0YVRpbWVyXG5cblx0XHRiZWdhbjogYm9vbGVhblxuXHRcdHJlbGVhc2VkOiBib29sZWFuXG5cdFx0dmVsb2NpdGllczogQXJyYXk8dmVjMj5cblx0XHR2ZWxvY2l0eTogdmVjMlxuXHRcdG5WZWxvY2l0eVNhbXBsZXM6IG51bWJlclxuXHRcdHNwZWVkOiBudW1iZXJcblx0XHRtYXhWZWxvY2l0eTogbnVtYmVyXG5cdFx0bWVhblZlbG9jaXR5OiB2ZWMyXG5cdFx0Y29vcmRpbmF0ZXM6IHZlYzJcblx0XHRkZWx0YXM6IHZlYzJcblx0XHR2ZWxvY2l0eURlY2F5U2Vuc2l0aXZpdHk6IG51bWJlclxuXG5cdFx0Y29uc3RydWN0b3IoaW5wdXQ6IFgsIHRpbWVyOiBEZWx0YVRpbWVyLCBvcHRzOiBPcmJpdE9wdHMpIHtcblx0XHRcdHRoaXMuaW5wdXQgPSBpbnB1dFxuXHRcdFx0dGhpcy50aW1lciA9IHRpbWVyXG5cblx0XHRcdHRoaXMuYmVnYW4gPSBmYWxzZVxuXHRcdFx0dGhpcy5yZWxlYXNlZCA9IGZhbHNlXG5cdFx0XHR0aGlzLnZlbG9jaXRpZXMgPSBbXVxuXHRcdFx0dGhpcy52ZWxvY2l0eSA9IHZlYzIuZnJvbVZhbHVlcygwLCAwKVxuXHRcdFx0dGhpcy5uVmVsb2NpdHlTYW1wbGVzID0gb3B0cy5uVmVsb2NpdHlTYW1wbGVzXG5cdFx0XHR0aGlzLnZlbG9jaXR5RGVjYXlTZW5zaXRpdml0eSA9IG9wdHMudmVsb2NpdHlEZWNheVNlbnNpdGl2aXR5XG5cdFx0XHR0aGlzLnNwZWVkID0gb3B0cy5zcGVlZFxuXHRcdFx0dGhpcy5tYXhWZWxvY2l0eSA9IG9wdHMubWF4VmVsb2NpdHlcblx0XHRcdHRoaXMubWVhblZlbG9jaXR5ID0gdmVjMi5mcm9tVmFsdWVzKDAsIDApXG5cdFx0XHR0aGlzLmNvb3JkaW5hdGVzID0gdmVjMi5mcm9tVmFsdWVzKDAsIDApXG5cdFx0XHR0aGlzLmRlbHRhcyA9IHZlYzIuZnJvbVZhbHVlcygwLCAwKVxuXG5cdFx0XHR0aGlzLnNldHVwKClcblx0XHR9XG5cblx0XHRwcm90ZWN0ZWQgYWJzdHJhY3Qgc2hvdWxkQmVnaW4oZXZ0OiBUKTogYm9vbGVhblxuXHRcdHByb3RlY3RlZCBhYnN0cmFjdCBnZXRDb29yZGluYXRlcyhldnQ6IFQpOiB2ZWMyXG5cdFx0cHVibGljIGFic3RyYWN0IHNob3VsZEludmVydCgpOiBib29sZWFuXG5cdFx0cHVibGljIGdldE1lYW5WZWxvY2l0eSgpOiB2ZWMyIHtcblx0XHRcdGlmICh0aGlzLnZlbG9jaXRpZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHR0aGlzLm1lYW5WZWxvY2l0eSA9IDx2ZWMyPm1hdGgudmVjbWVhbih0aGlzLnZlbG9jaXRpZXMpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLm1lYW5WZWxvY2l0eSA9IHZlYzIuZnJvbVZhbHVlcygwLCAwKVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMubWVhblZlbG9jaXR5XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBzZXR1cCgpOiB2b2lkIHtcblx0XHRcdGNvbnN0IGlucHV0ID0gdGhpcy5pbnB1dFxuXHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXNcblxuXHRcdFx0aW5wdXQuc3RhcnQoKGV2dDogVCkgPT4ge1xuXHRcdFx0XHRpZiAoc2VsZi5iZWdhbiB8fCAhc2VsZi5zaG91bGRCZWdpbihldnQpKVxuXHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHRsZXQgY29vcmRzID0gc2VsZi5nZXRDb29yZGluYXRlcyhldnQpXG5cdFx0XHRcdHNlbGYuY29vcmRpbmF0ZXNbMF0gPSBjb29yZHNbMF1cblx0XHRcdFx0c2VsZi5jb29yZGluYXRlc1sxXSA9IGNvb3Jkc1sxXVxuXHRcdFx0XHRzZWxmLnRpbWVyLnVwZGF0ZSgpXG5cdFx0XHRcdHNlbGYuYmVnYW4gPSB0cnVlXG5cdFx0XHRcdHNlbGYucmVsZWFzZWQgPSBmYWxzZVxuXHRcdFx0XHRzZWxmLmRlbHRhc1swXSA9IDBcblx0XHRcdFx0c2VsZi5kZWx0YXNbMV0gPSAwXG5cdFx0XHRcdHNlbGYudmVsb2NpdGllcyA9IFtdXG5cdFx0XHR9KVxuXG5cdFx0XHRpbnB1dC5tb3ZlKChldnQ6IFQpID0+IHtcblx0XHRcdFx0ZXZ0LnByZXZlbnREZWZhdWx0KClcblx0XHRcdFx0c2VsZi50aW1lci51cGRhdGUoKVxuXHRcdFx0XHRsZXQgY3VycmVudENvb3JkaW5hdGVzID0gc2VsZi5nZXRDb29yZGluYXRlcyhldnQpXG5cdFx0XHRcdHNlbGYuZGVsdGFzID0gdmVjMi5zdWJ0cmFjdChzZWxmLmRlbHRhcywgY3VycmVudENvb3JkaW5hdGVzLCBzZWxmLmNvb3JkaW5hdGVzKVxuXHRcdFx0XHRsZXQgZGVsdGFUID0gc2VsZi50aW1lci5kZWx0YSgpXG5cdFx0XHRcdGlmIChkZWx0YVQgPiAwKSB7XG5cdFx0XHRcdFx0bGV0IHZlbG9jaXR5ID0gdmVjMi5jb3B5KHNlbGYudmVsb2NpdHksIHNlbGYuZGVsdGFzKVxuXHRcdFx0XHRcdHZlYzIuZGl2aWRlKHZlbG9jaXR5LCB2ZWxvY2l0eSwgdmVjMi5mcm9tVmFsdWVzKGRlbHRhVCwgZGVsdGFUKSlcblx0XHRcdFx0XHQvL1x0a2VlcCB2YWx1ZXMgaW4gcmFuZ2UgWy1JbmZpbml0eSwgbWF4VmVsb2NpdHldLCBwcmVzZXJ2aW5nIHNpZ25cblx0XHRcdFx0XHRtYXRoLnNpZ25lZENsYW1wKHZlbG9jaXR5LCAtSW5maW5pdHksIHNlbGYubWF4VmVsb2NpdHkpXG5cdFx0XHRcdFx0aWYgKHNlbGYudmVsb2NpdGllcy5sZW5ndGggPT09IHNlbGYublZlbG9jaXR5U2FtcGxlcylcblx0XHRcdFx0XHRcdHNlbGYudmVsb2NpdGllcy5zaGlmdCgpXG5cdFx0XHRcdFx0c2VsZi52ZWxvY2l0aWVzLnB1c2godmVsb2NpdHkpXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHNlbGYudmVsb2NpdGllcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0c2VsZi5tZWFuVmVsb2NpdHkgPSA8dmVjMj5tYXRoLnZlY21lYW4oc2VsZi52ZWxvY2l0aWVzKVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHNlbGYubWVhblZlbG9jaXR5ID0gdmVjMi5mcm9tVmFsdWVzKDAsIDApXG5cdFx0XHRcdH1cblx0XHRcdFx0c2VsZi5jb29yZGluYXRlcyA9IGN1cnJlbnRDb29yZGluYXRlc1xuXHRcdFx0fSlcblxuXHRcdFx0aW5wdXQuZW5kKChldnQ6IFQpID0+IHtcblx0XHRcdFx0c2VsZi5yZWxlYXNlZCA9IHRydWVcblx0XHRcdFx0c2VsZi5iZWdhbiA9IGZhbHNlXG5cdFx0XHR9KVxuXHRcdH1cblxuXHRcdHB1YmxpYyBzdGF0aWMgRGVmYXVsdHMoKTogT3JiaXRPcHRzIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdG5WZWxvY2l0eVNhbXBsZXM6IDEwMCxcblx0XHRcdFx0dmVsb2NpdHlEZWNheVNlbnNpdGl2aXR5OiAxLjEsXG5cdFx0XHRcdG1heFZlbG9jaXR5OiA0MDAwLFxuXHRcdFx0XHRzcGVlZDogNCxcblx0XHRcdFx0c21vb3RoOiB0cnVlXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y2xhc3MgT3JiaXRNb3VzZSBleHRlbmRzIF9PcmJpdDxNb3VzZUV2ZW50LCBYWS5Nb3VzZT4ge1xuXHRcdHByb3RlY3RlZCBnZXRDb29yZGluYXRlcyhldnQ6IE1vdXNlRXZlbnQpOiB2ZWMyIHtcblx0XHRcdHJldHVybiB2ZWMyLmZyb21WYWx1ZXMoZXZ0LmNsaWVudFgsIGV2dC5jbGllbnRZKVxuXHRcdH1cblx0XHRwcm90ZWN0ZWQgc2hvdWxkQmVnaW4oZXZ0OiBNb3VzZUV2ZW50KTogYm9vbGVhbiB7XG5cdFx0XHRyZXR1cm4gdHJ1ZVxuXHRcdH1cblx0XHRwdWJsaWMgc2hvdWxkSW52ZXJ0KCk6IGJvb2xlYW4ge1xuXHRcdFx0cmV0dXJuIGZhbHNlXG5cdFx0fVxuXHR9XG5cblx0Y2xhc3MgT3JiaXRUb3VjaCBleHRlbmRzIF9PcmJpdDxUb3VjaEV2ZW50LCBYWS5Ub3VjaD4ge1xuXHRcdHByb3RlY3RlZCBnZXRDb29yZGluYXRlcyhldnQ6IFRvdWNoRXZlbnQpOiB2ZWMyIHtcblx0XHRcdGlmIChldnQudG91Y2hlcy5sZW5ndGggPT09IDApXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignQXR0ZW1wdGVkIHRvIGdldCBjb29yZGluYXRlcyB3aGVuIHRoZXJlIHdlcmUgMCB0b3VjaC1wb2ludHMuJylcblx0XHRcdGxldCB0b3VjaDAgPSBldnQudG91Y2hlc1swXVxuXHRcdFx0cmV0dXJuIHZlYzIuZnJvbVZhbHVlcyh0b3VjaDAuY2xpZW50WCwgdG91Y2gwLmNsaWVudFkpXG5cdFx0fVxuXHRcdHByb3RlY3RlZCBzaG91bGRCZWdpbihldnQ6IFRvdWNoRXZlbnQpOiBib29sZWFuIHtcblx0XHRcdHJldHVybiBldnQudG91Y2hlcy5sZW5ndGggPT09IDFcblx0XHR9XG5cdFx0cHVibGljIHNob3VsZEludmVydCgpOiBib29sZWFuIHtcblx0XHRcdHJldHVybiB0cnVlXG5cdFx0fVxuXHR9XG5cblx0ZXhwb3J0IGNsYXNzIE9yYml0IHtcblxuXHRcdHByaXZhdGUgaW5wdXQ6IFhZLk1vdXNlIHwgWFkuVG91Y2hcblx0XHRwcml2YXRlIGNhbWVyYTogQ2FtZXJhXG5cdFx0cHJpdmF0ZSBvcmJpdDogT3JiaXRNb3VzZSB8IE9yYml0VG91Y2hcblx0XHRwcml2YXRlIHRpbWVyOiBEZWx0YVRpbWVyXG5cblx0XHRjb25zdHJ1Y3RvcihpbnB1dDogWFkuTW91c2UgfCBYWS5Ub3VjaCwgY2FtZXJhOiBDYW1lcmEsIG9wdHM6IE9yYml0T3B0cyA9IF9PcmJpdC5EZWZhdWx0cygpKSB7XG5cdFx0XHR0aGlzLmlucHV0ID0gaW5wdXRcblx0XHRcdHRoaXMuY2FtZXJhID0gY2FtZXJhXG5cdFx0XHR0aGlzLnRpbWVyID0gbmV3IERlbHRhVGltZXIoKVxuXHRcdFx0aWYgKGlucHV0IGluc3RhbmNlb2YgWFkuTW91c2UpIHtcblx0XHRcdFx0dGhpcy5vcmJpdCA9IG5ldyBPcmJpdE1vdXNlKGlucHV0LCB0aGlzLnRpbWVyLCBvcHRzKVxuXHRcdFx0fSBlbHNlIGlmIChpbnB1dCBpbnN0YW5jZW9mIFhZLlRvdWNoKSB7XG5cdFx0XHRcdHRoaXMub3JiaXQgPSBuZXcgT3JiaXRUb3VjaChpbnB1dCwgdGhpcy50aW1lciwgb3B0cylcblx0XHRcdH1cblx0XHR9XG5cblx0XHRwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xuXHRcdFx0Y29uc3Qgb3JiaXQgPSB0aGlzLm9yYml0XG5cdFx0XHRjb25zdCBkZWx0YXMgPSBvcmJpdC5kZWx0YXNcblx0XHRcdGNvbnN0IGNhbWVyYSA9IHRoaXMuY2FtZXJhXG5cdFx0XHRjb25zdCByYXRpbyA9IHRoaXMudGltZXIuZ2V0UmF0aW8oKVxuXHRcdFx0Y29uc3QgZGVjYXlTZW5zID0gdGhpcy5vcmJpdC52ZWxvY2l0eURlY2F5U2Vuc2l0aXZpdHlcblxuXHRcdFx0aWYgKCFvcmJpdC5yZWxlYXNlZCkge1xuXHRcdFx0XHRpZiAob3JiaXQuc2hvdWxkSW52ZXJ0KCkpIHtcblx0XHRcdFx0XHRjYW1lcmEucm90YXRlKC1kZWx0YXNbMF0sIGRlbHRhc1sxXSlcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjYW1lcmEucm90YXRlKGRlbHRhc1swXSwgLWRlbHRhc1sxXSlcblx0XHRcdFx0fVxuXHRcdFx0XHRkZWx0YXNbMF0gPSAwXG5cdFx0XHRcdGRlbHRhc1sxXSA9IDBcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxldCB2ZWwgPSBvcmJpdC5tZWFuVmVsb2NpdHlcblx0XHRcdFx0bGV0IHh2ZWwgPSAodmVsWzBdICogcmF0aW8uc2Vjb25kKSAvIHJhdGlvLmZpcnN0ICogb3JiaXQuc3BlZWRcblx0XHRcdFx0bGV0IHl2ZWwgPSAodmVsWzFdICogcmF0aW8uc2Vjb25kKSAvIHJhdGlvLmZpcnN0ICogb3JiaXQuc3BlZWRcblx0XHRcdFx0aWYgKG9yYml0LnNob3VsZEludmVydCgpKSB7XG5cdFx0XHRcdFx0Y2FtZXJhLnJvdGF0ZSgteHZlbCwgeXZlbClcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjYW1lcmEucm90YXRlKHh2ZWwsIC15dmVsKVxuXHRcdFx0XHR9XG5cdFx0XHRcdHZlbFswXSAvPSBkZWNheVNlbnNcblx0XHRcdFx0dmVsWzFdIC89IGRlY2F5U2Vuc1xuXHRcdFx0XHRpZiAoTWF0aC5hYnModmVsWzBdKSA8IDAuMDAwMDEpIHZlbFswXSA9IDBcblx0XHRcdFx0aWYgKE1hdGguYWJzKHZlbFsxXSkgPCAwLjAwMDAxKSB2ZWxbMV0gPSAwXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgTW92ZW1lbnQge1xuXG5cdHR5cGUgS2V5VCA9IHsgW0sgaW4gZGlyZWN0aW9uc106IG51bWJlciB9XG5cblx0ZXhwb3J0IGFic3RyYWN0IGNsYXNzIG1vdmVtZW50PFQ+IHtcblx0XHRwcm90ZWN0ZWQgdGltZXI6IERlbHRhVGltZXJcblx0XHRwcm90ZWN0ZWQgaW5wdXQ6IFRcblx0XHRwcm90ZWN0ZWQgY2FtZXJhOiBDYW1lcmFcblx0XHRwcm90ZWN0ZWQgc3BlZWQ6IG51bWJlclxuXG5cdFx0YWJzdHJhY3QgdXBkYXRlKCk6IHZvaWRcblxuXHRcdGNvbnN0cnVjdG9yKGlucHV0OiBULCBjYW1lcmE6IENhbWVyYSwgc3BlZWQ6IG51bWJlcikge1xuXHRcdFx0dGhpcy50aW1lciA9IG5ldyBEZWx0YVRpbWVyKClcblx0XHRcdHRoaXMuaW5wdXQgPSBpbnB1dFxuXHRcdFx0dGhpcy5jYW1lcmEgPSBjYW1lcmFcblx0XHRcdHRoaXMuc3BlZWQgPSBzcGVlZFxuXHRcdH1cblx0fVxuXG5cdGV4cG9ydCBjbGFzcyBLZXlib2FyZCBleHRlbmRzIG1vdmVtZW50PF9LZXlib2FyZC5LZXlib2FyZD4ge1xuXG5cdFx0cHVibGljIEtleXM6IEtleVQgPSB7XG5cdFx0XHRmb3J3YXJkczogX0tleWJvYXJkLktleXMuVyxcblx0XHRcdGJhY2t3YXJkczogX0tleWJvYXJkLktleXMuUyxcblx0XHRcdGxlZnQ6IF9LZXlib2FyZC5LZXlzLkEsXG5cdFx0XHRyaWdodDogX0tleWJvYXJkLktleXMuRFxuXHRcdH1cblxuXHRcdGNvbnN0cnVjdG9yKGtiOiBfS2V5Ym9hcmQuS2V5Ym9hcmQsIGNhbWVyYTogQ2FtZXJhLCBzcGVlZDogbnVtYmVyKSB7XG5cdFx0XHRzdXBlcihrYiwgY2FtZXJhLCBzcGVlZClcblx0XHR9XG5cblx0XHRwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xuXHRcdFx0Y29uc3QgdGltZXIgPSB0aGlzLnRpbWVyXG5cdFx0XHR0aW1lci51cGRhdGUoKVxuXHRcdFx0Y29uc3QgaW5wdXQgPSB0aGlzLmlucHV0XG5cdFx0XHRjb25zdCBjYW1lcmEgPSB0aGlzLmNhbWVyYVxuXHRcdFx0Y29uc3Qga2V5cyA9IHRoaXMuS2V5c1xuXHRcdFx0Y29uc3Qgc3BlZWQgPSB0aGlzLnNwZWVkXG5cdFx0XHRjb25zdCBkdCA9IHRpbWVyLmRlbHRhKClcblx0XHRcdE9iamVjdC5rZXlzKGtleXMpLm1hcChkaXIgPT4ge1xuXHRcdFx0XHRsZXQga2V5TiA9IEtleWJvYXJkLmdldChrZXlzLCBkaXIgYXMgZGlyZWN0aW9ucylcblx0XHRcdFx0aWYgKGlucHV0LmlzRG93bihrZXlOKSkge1xuXHRcdFx0XHRcdGNhbWVyYS5tb3ZlKGRpciBhcyBkaXJlY3Rpb25zLCBkdCwgc3BlZWQpXG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0fVxuXG5cdFx0cHVibGljIHN0YXRpYyBnZXQ8VCwgSyBleHRlbmRzIGtleW9mIFQ+KG9iajogVCwgbmFtZTogSyk6IFRbS10ge1xuICAgIFx0XHRyZXR1cm4gb2JqW25hbWVdO1xuXHRcdH1cblx0fVxuXG5cdGV4cG9ydCBjbGFzcyBUb3VjaCBleHRlbmRzIG1vdmVtZW50PFhZLlRvdWNoPiB7XG5cblx0XHRkaXN0OiBudW1iZXJcblx0XHRiZWdhbjogYm9vbGVhblxuXG5cdFx0Y29uc3RydWN0b3IodG91Y2g6IFhZLlRvdWNoLCBjYW1lcmE6IENhbWVyYSwgc3BlZWQ6IG51bWJlcikge1xuXHRcdFx0c3VwZXIodG91Y2gsIGNhbWVyYSwgc3BlZWQpXG5cblx0XHRcdHRoaXMuZGlzdCA9IDBcblx0XHRcdHRoaXMuYmVnYW4gPSBmYWxzZVxuXG5cdFx0XHR0aGlzLnNldHVwKClcblx0XHR9XG5cblx0XHRwcml2YXRlIHNldHVwKCk6IHZvaWQge1xuXHRcdFx0Y29uc3QgdG91Y2ggPSB0aGlzLmlucHV0XG5cdFx0XHRjb25zdCBzZWxmID0gdGhpc1xuXG5cdFx0XHRjb25zdCBnZXREaXN0YW5jZSA9IChldnQ6IFRvdWNoRXZlbnQpID0+IHtcblx0XHRcdFx0bGV0IGN1cnJYMSA9IGV2dC50b3VjaGVzWzBdLmNsaWVudFgsXG5cdFx0XHRcdFx0Y3VyclgyID0gZXZ0LnRvdWNoZXNbMV0uY2xpZW50WCxcblx0XHRcdFx0XHRjdXJyWTEgPSBldnQudG91Y2hlc1swXS5jbGllbnRZLFxuXHRcdFx0XHRcdGN1cnJZMiA9IGV2dC50b3VjaGVzWzFdLmNsaWVudFlcblx0XHRcdFx0bGV0IHB0MSA9IHZlYzIuZnJvbVZhbHVlcyhjdXJyWDEsIGN1cnJZMSlcblx0XHRcdFx0bGV0IHB0MiA9IHZlYzIuZnJvbVZhbHVlcyhjdXJyWDIsIGN1cnJZMilcblx0XHRcdFx0cmV0dXJuIG1hdGguZGlzdGFuY2UocHQxLCBwdDIpXG5cdFx0XHR9XG5cblx0XHRcdHRvdWNoLnN0YXJ0KGV2dCA9PiB7XG5cdFx0XHRcdGlmIChzZWxmLmJlZ2FuIHx8IGV2dC50b3VjaGVzLmxlbmd0aCAhPT0gMilcblx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0c2VsZi5iZWdhbiA9IHRydWVcblx0XHRcdFx0c2VsZi5kaXN0ID0gZ2V0RGlzdGFuY2UoZXZ0KVxuXHRcdFx0XHRzZWxmLnRpbWVyLnVwZGF0ZSgpXG5cdFx0XHR9KVxuXG5cdFx0XHR0b3VjaC5tb3ZlKGV2dCA9PiB7XG5cdFx0XHRcdGV2dC5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRcdHNlbGYudGltZXIudXBkYXRlKClcblx0XHRcdFx0aWYgKGV2dC50b3VjaGVzLmxlbmd0aCAhPT0gMilcblx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0bGV0IGN1cnJEaXN0ID0gZ2V0RGlzdGFuY2UoZXZ0KVxuXHRcdFx0XHRsZXQgb2ZmRGlzdCA9IGN1cnJEaXN0IC0gc2VsZi5kaXN0XG5cdFx0XHRcdGxldCBkdCA9IHNlbGYudGltZXIuZGVsdGEoKVxuXHRcdFx0XHRsZXQgZGlyOiBkaXJlY3Rpb25zID0gb2ZmRGlzdCA+IDAgPyAnZm9yd2FyZHMnIDogJ2JhY2t3YXJkcydcblx0XHRcdFx0c2VsZi5jYW1lcmEubW92ZShkaXIsIGR0LCBzZWxmLnNwZWVkKVxuXHRcdFx0XHRzZWxmLmRpc3QgPSBjdXJyRGlzdFxuXHRcdFx0fSlcblxuXHRcdFx0dG91Y2guZW5kKGV2dCA9PiB7XG5cdFx0XHRcdHNlbGYuYmVnYW4gPSBmYWxzZVxuXHRcdFx0fSlcblx0XHR9XG5cblx0XHRwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xuXHRcdFx0dGhpcy50aW1lci51cGRhdGUoKVxuXHRcdH1cblxuXHR9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm90YXRpb24ge1xuXG5cdGV4cG9ydCBjbGFzcyBUb3VjaCBleHRlbmRzIE1vdmVtZW50Lm1vdmVtZW50PFhZLlRvdWNoPiB7XG5cblx0XHRkaWRUYXA6IGJvb2xlYW5cblx0XHR0YXBEZXRlY3RvcjogWFkuRG91YmxlVGFwRGV0ZWN0b3Jcblx0XHRsYXN0OiB2ZWMyXG5cdFx0bGFzdFZlbDogdmVjMlxuXHRcdGN1cnJlbnQ6IHZlYzJcblx0XHR2ZWxvY2l0aWVzOiBBcnJheTx2ZWMyPiA9IFtdXG5cdFx0blZlbG9jaXRpZXM6IG51bWJlciA9IDEwMFxuXG5cdFx0Y29uc3RydWN0b3IodG91Y2g6IFhZLlRvdWNoLCBjYW1lcmE6IENhbWVyYSwgc3BlZWQ6IG51bWJlcikge1xuXHRcdFx0c3VwZXIodG91Y2gsIGNhbWVyYSwgc3BlZWQpXG5cblx0XHRcdHRoaXMuZGlkVGFwID0gZmFsc2Vcblx0XHRcdHRoaXMudGFwRGV0ZWN0b3IgPSBuZXcgWFkuRG91YmxlVGFwRGV0ZWN0b3IodG91Y2gpXG5cblx0XHRcdHRoaXMubGFzdCA9IHZlYzIuY3JlYXRlKClcblx0XHRcdHRoaXMuY3VycmVudCA9IHZlYzIuY3JlYXRlKClcblx0XHRcdHRoaXMubGFzdFZlbCA9IHZlYzIuY3JlYXRlKClcblxuXHRcdFx0dGhpcy5zZXR1cCgpXG5cdFx0fVxuXG5cdFx0cHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcblx0XHRcdHRoaXMudGltZXIudXBkYXRlKClcblx0XHR9XG5cblx0XHRwcml2YXRlIHNldHVwKCk6IHZvaWQge1xuXHRcdFx0Y29uc3QgdG91Y2ggPSB0aGlzLmlucHV0XG5cdFx0XHRjb25zdCBzZWxmID0gdGhpc1xuXHRcdFx0Y29uc3QgY2FtZXJhID0gdGhpcy5jYW1lcmFcblx0XHRcdGNvbnN0IGRldGVjdG9yID0gdGhpcy50YXBEZXRlY3RvclxuXG5cdFx0XHRjb25zdCByZXNldCA9IChldnQ6IFRvdWNoRXZlbnQpID0+IHtcblx0XHRcdFx0c2VsZi5kaWRUYXAgPSB0cnVlXG5cdFx0XHRcdHNlbGYubGFzdFswXSA9IGV2dC50b3VjaGVzWzBdLmNsaWVudFhcblx0XHRcdFx0c2VsZi5sYXN0WzFdID0gZXZ0LnRvdWNoZXNbMF0uY2xpZW50WVxuXHRcdFx0XHRzZWxmLnZlbG9jaXRpZXMgPSBbXVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBkZXRlY3Rvci5kb3VibGV0YXAoZXZ0ID0+IHtcblx0XHRcdC8vIFx0cmVzZXQoZXZ0KVxuXHRcdFx0Ly8gfSlcblxuXHRcdFx0Ly8gdG91Y2guc3RhcnQoZXZ0ID0+IHtcblx0XHRcdC8vIFx0c2VsZi50aW1lci51cGRhdGUoKVxuXHRcdFx0Ly8gfSlcblxuXHRcdFx0dG91Y2guc3RhcnQoZXZ0ID0+IHtcblx0XHRcdFx0aWYgKGV2dC50b3VjaGVzLmxlbmd0aCAhPT0gMykgXG5cdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdHJlc2V0KGV2dClcblx0XHRcdFx0c2VsZi50aW1lci51cGRhdGUoKVxuXHRcdFx0fSlcblxuXHRcdFx0dG91Y2gubW92ZShldnQgPT4ge1xuXHRcdFx0XHRpZiAoIXNlbGYuZGlkVGFwIHx8IGV2dC50b3VjaGVzLmxlbmd0aCAhPT0gMylcblx0XHRcdFx0XHRyZXR1cm5cblxuXHRcdFx0XHRldnQucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHRldnQuc3RvcFByb3BhZ2F0aW9uKClcblx0XHRcdFx0c2VsZi50aW1lci51cGRhdGUoKVxuXHRcdFx0XHRjb25zdCBjbG9uZSA9IGNvbW1vbi5jbG9uZVxuXHRcdFx0XHRsZXQgdG91Y2gwID0gZXZ0LnRvdWNoZXNbMF1cblx0XHRcdFx0bGV0IGZvY3VzUG9pbnQgPSBbMCwgMCwgMF1cblx0XHRcdFx0bGV0IHBvcyA9IDx2ZWMzPmNsb25lKGNhbWVyYS5wb3NpdGlvbilcblx0XHRcdFx0bGV0IGNhbUZvY3VzID0gdmVjMy5zdWJ0cmFjdCh2ZWMzLmNyZWF0ZSgpLCBwb3MsIGZvY3VzUG9pbnQpXG5cdFx0XHRcdGxldCByaWdodCA9IDx2ZWMzPmNsb25lKGNhbWVyYS5yaWdodClcblx0XHRcdFx0bGV0IHVwID0gPHZlYzM+Y2xvbmUoY2FtZXJhLnVwKVxuXHRcdFx0XHRsZXQgbmV3UG9zID0gdmVjMy5jcmVhdGUoKVxuXHRcdFx0XHRyaWdodCA9IHZlYzMubm9ybWFsaXplKHJpZ2h0LCByaWdodClcblx0XHRcdFx0dXAgPSB2ZWMzLm5vcm1hbGl6ZSh1cCwgdXApXG5cblx0XHRcdFx0bGV0IGRlbHRhUG9zID0gdmVjMi5mcm9tVmFsdWVzKHRvdWNoMC5jbGllbnRYLCB0b3VjaDAuY2xpZW50WSlcblx0XHRcdFx0bGV0IGR0ID0gc2VsZi50aW1lci5kZWx0YSgpXG5cdFx0XHRcdGxldCB2ZWwgPSB2ZWMyLmZyb21WYWx1ZXMoMCwgMClcblx0XHRcdFx0ZGVsdGFQb3MgPSB2ZWMyLnN1YnRyYWN0KGRlbHRhUG9zLCBkZWx0YVBvcywgc2VsZi5sYXN0KVxuXG5cdFx0XHRcdGlmIChkdCA+IDApIHtcblx0XHRcdFx0XHR2ZWwgPSB2ZWMyLmRpdmlkZSh2ZWwsIGRlbHRhUG9zLCB2ZWMyLmZyb21WYWx1ZXMoZHQsIGR0KSlcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2ZWwuc2V0KHRoaXMubGFzdFZlbClcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxldCBzcGVlZCA9IHZlYzIuY29weSh2ZWMyLmNyZWF0ZSgpLCB2ZWwpXG5cdFx0XHRcdG1hdGguYWJzKHNwZWVkKVxuXG5cdFx0XHRcdGlmIChzZWxmLnZlbG9jaXRpZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHNwZWVkID0gbWF0aC52ZWNtZWFuKHNlbGYudmVsb2NpdGllcylcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzcGVlZFswXSA9IHZlbFswXVxuXHRcdFx0XHRcdHNwZWVkWzFdID0gdmVsWzFdXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRsZXQgeWF3ID0gdmVsWzBdICogMC4wMDJcblx0XHRcdFx0bGV0IHBpdGNoID0gdmVsWzFdICogMC4wMDJcblxuXHRcdFx0XHQvLyBsZXQgeWF3ID0gc3BlZWRbMF0gPT09IDAgPyAwIDogdmVsWzBdIC8gc3BlZWRbMF1cblx0XHRcdFx0Ly8gbGV0IHBpdGNoID0gc3BlZWRbMV0gPT09IDAgPyAwIDogdmVsWzFdIC8gc3BlZWRbMV1cblxuXHRcdFx0XHRsZXQgbWF0ID0gbmV3IG1hdHJpeC50cmFuc2Zvcm0oKVxuXHRcdFx0XHRcdC5yb3RhdGUobWF0aC5yYWRpYW5zKHlhdyksIHVwKVxuXHRcdFx0XHRcdC5yb3RhdGUobWF0aC5yYWRpYW5zKHBpdGNoKSwgcmlnaHQpXG5cdFx0XHRcdFx0Lm1hdCgpXG5cblx0XHRcdFx0bGV0IGNhbUZvY3VzNCA9IHZlYzQuZnJvbVZhbHVlcyhjYW1Gb2N1c1swXSwgY2FtRm9jdXNbMV0sIGNhbUZvY3VzWzJdLCAxKVxuXHRcdFx0XHR2ZWM0LnRyYW5zZm9ybU1hdDQoY2FtRm9jdXM0LCBjYW1Gb2N1czQsIG1hdClcblx0XHRcdFx0dmVjNC5hZGQoY2FtRm9jdXM0LCBjYW1Gb2N1czQsIFtmb2N1c1BvaW50WzBdLCBmb2N1c1BvaW50WzFdLCBmb2N1c1BvaW50WzJdLCAwXSlcblxuXHRcdFx0XHRuZXdQb3NbMF0gPSBjYW1Gb2N1czRbMF1cblx0XHRcdFx0bmV3UG9zWzFdID0gY2FtRm9jdXM0WzFdXG5cdFx0XHRcdG5ld1Bvc1syXSA9IGNhbUZvY3VzNFsyXVxuXG5cdFx0XHRcdGNhbWVyYS5zZXRQb3NpdGlvbihuZXdQb3MpXG5cblx0XHRcdFx0c2VsZi5sYXN0WzBdID0gdG91Y2gwLmNsaWVudFhcblx0XHRcdFx0c2VsZi5sYXN0WzFdID0gdG91Y2gwLmNsaWVudFlcblx0XHRcdFx0c2VsZi5sYXN0VmVsLnNldCh2ZWwpXG5cblx0XHRcdFx0aWYgKHNlbGYudmVsb2NpdGllcy5sZW5ndGggPT09IHNlbGYublZlbG9jaXRpZXMpXG5cdFx0XHRcdFx0c2VsZi52ZWxvY2l0aWVzLnNoaWZ0KClcblx0XHRcdFx0c2VsZi52ZWxvY2l0aWVzLnB1c2godmVjMi5mcm9tVmFsdWVzKHNwZWVkWzBdLCBzcGVlZFsxXSkpXG5cdFx0XHR9KVxuXG5cdFx0XHR0b3VjaC5lbmQoZXZ0ID0+IHtcblx0XHRcdFx0c2VsZi5kaWRUYXAgPSBmYWxzZVxuXHRcdFx0fSlcblx0XHR9XG5cblx0fVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2wvY2FtZXJhLWNvbnRyb2xzLnRzIiwiaW1wb3J0IHsgQXVkaW9BbmFseXNlciB9IGZyb20gJy4vd2ViLWF1ZGlvLWFuYWx5c2VyJ1xuLy8gaW1wb3J0IHsgQXVkaW9Db250ZXh0TWFuYWdlciB9IGZyb20gJy4vd2ViLWF1ZGlvLWNvbnRleHQnXG5pbXBvcnQgeyBBdWRpb0NvbnRleHRNYW5hZ2VyIH0gZnJvbSAnLi93ZWItYXVkaW8tY29udGV4dCdcblxuZXhwb3J0IHtcblx0QXVkaW9BbmFseXNlcixcblx0QXVkaW9Db250ZXh0TWFuYWdlclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2F1ZC93ZWItYXVkaW8udHMiLCJpbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi91dGlsJ1xuXG50eXBlIEFuYWx5c2VyT3B0aW9ucyA9IHtcblx0bGV2ZWxzQ291bnQ6IG51bWJlclxufVxuXG5jbGFzcyBBdWRpb0FuYWx5c2VyIHtcblxuXHRwcml2YXRlIGNvbnRleHQ6IEF1ZGlvQ29udGV4dFxuXHRwcml2YXRlIG9wdHM6IEFuYWx5c2VyT3B0aW9uc1xuXHRwcml2YXRlIGFuYWx5c2VyOiBBbmFseXNlck5vZGVcblx0cHJpdmF0ZSBmcmVxQnl0ZURhdGE6IFVpbnQ4QXJyYXlcblx0cHJpdmF0ZSB0aW1lQnl0ZURhdGE6IFVpbnQ4QXJyYXlcblx0cHJpdmF0ZSBiaW5Db3VudDogbnVtYmVyXG5cdHByaXZhdGUgbGV2ZWxzQ291bnQ6IG51bWJlclxuXHRwcml2YXRlIGxldmVsc0JpbnM6IG51bWJlclxuXHRwcml2YXRlIGxldmVsczogQXJyYXk8bnVtYmVyPiA9IFtdXG5cdHByaXZhdGUgd2F2ZTogQXJyYXk8bnVtYmVyPiA9IFtdXG5cblx0Y29uc3RydWN0b3IoY29udGV4dDogQXVkaW9Db250ZXh0LCBvcHRzOiBBbmFseXNlck9wdGlvbnMgPSBBdWRpb0FuYWx5c2VyLkRlZmF1bHRzKCkpIHtcblx0XHRpZiAoIWNvbnRleHQpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgb3IgbWlzc2luZyBhdWRpbyBjb250ZXh0LicpXG5cdFx0dGhpcy5jb250ZXh0ID0gY29udGV4dFxuXHRcdHRoaXMub3B0cyA9IG9wdHNcblx0XHR0aGlzLnNldE9wdGlvbnMoKVxuXHR9XG5cblx0cHJpdmF0ZSBzZXRPcHRpb25zKCkge1xuXHRcdGlmICghVXRpbC5pc1BvdzIodGhpcy5vcHRzLmxldmVsc0NvdW50KSlcblx0XHRcdHRocm93IG5ldyBFcnJvcignbGV2ZWxzQ291bnQgbXVzdCBiZSBhIHBvd2VyIG9mIDIuJylcblx0XHR0aGlzLmxldmVsc0NvdW50ID0gdGhpcy5vcHRzLmxldmVsc0NvdW50XG5cdH1cblxuXHRwdWJsaWMgc2V0dXAoKTogdm9pZCB7XG5cdFx0Y29uc3QgY29udGV4dCA9IHRoaXMuY29udGV4dFxuXHRcdGNvbnN0IGFuYWx5c2VyOiBBbmFseXNlck5vZGUgPSBjb250ZXh0LmNyZWF0ZUFuYWx5c2VyKClcblx0XHRcblx0XHRhbmFseXNlci5zbW9vdGhpbmdUaW1lQ29uc3RhbnQgPSAwLjhcblx0XHRhbmFseXNlci5mZnRTaXplID0gMTAyNFxuXHRcdGFuYWx5c2VyLmNvbm5lY3QoY29udGV4dC5kZXN0aW5hdGlvbilcblxuXHRcdGNvbnN0IGJpbkNvdW50OiBudW1iZXIgPSBhbmFseXNlci5mcmVxdWVuY3lCaW5Db3VudFxuXHRcdHRoaXMubGV2ZWxzQmlucyA9IE1hdGguZmxvb3IoYmluQ291bnQgLyB0aGlzLmxldmVsc0NvdW50KVxuXG5cdFx0aWYgKGJpbkNvdW50ICE9PSA1MTIpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGJpbiBjb3VudCB0byBiZSA1MTIsIHdhcyAke2JpbkNvdW50fWApXG5cblx0XHR0aGlzLmFuYWx5c2VyID0gYW5hbHlzZXJcblx0XHR0aGlzLmZyZXFCeXRlRGF0YSA9IG5ldyBVaW50OEFycmF5KGJpbkNvdW50KVxuXHRcdHRoaXMudGltZUJ5dGVEYXRhID0gbmV3IFVpbnQ4QXJyYXkoYmluQ291bnQpXG5cdFx0dGhpcy5iaW5Db3VudCA9IGJpbkNvdW50XG5cdH1cblxuXHRwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xuXHRcdHRoaXMuYW5hbHlzZXIuZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEodGhpcy5mcmVxQnl0ZURhdGEpXG5cdFx0dGhpcy51cGRhdGVMZXZlbHMoKVxuXHRcdHRoaXMudXBkYXRlV2F2ZSgpXG5cdH1cblxuXHRwcml2YXRlIHVwZGF0ZUxldmVscygpOiB2b2lkIHtcblx0XHRjb25zdCBsZXZlbHNDb3VudCA9IHRoaXMubGV2ZWxzQ291bnRcblx0XHRjb25zdCBsZXZlbHNCaW5zID0gdGhpcy5sZXZlbHNCaW5zXG5cdFx0Y29uc3QgZnJlcUJ5dGVEYXRhID0gdGhpcy5mcmVxQnl0ZURhdGFcblx0XHRjb25zdCBsZXZlbHMgPSB0aGlzLmxldmVsc1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZXZlbHNDb3VudDsgaSsrKSB7XG5cdFx0XHRsZXQgc3VtID0gMFxuXHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBsZXZlbHNCaW5zOyBqKyspIHtcblx0XHRcdFx0c3VtICs9IGZyZXFCeXRlRGF0YVsoaSAqIGxldmVsc0JpbnMpICsgal1cblx0XHRcdH1cblx0XHRcdGxldmVsc1tpXSA9IHN1bSAvIGxldmVsc0JpbnMvMjU2XG5cdFx0XHRsZXZlbHNbaV0gKj0gMSArIChpL2xldmVsc0NvdW50KS8yXG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSB1cGRhdGVXYXZlKCk6IHZvaWQge1xuXHRcdGNvbnN0IHdhdmUgPSB0aGlzLndhdmVcblx0XHRjb25zdCBiaW5Db3VudCA9IHRoaXMuYmluQ291bnRcblx0XHRjb25zdCBhbmFseXNlciA9IHRoaXMuYW5hbHlzZXJcblx0XHRjb25zdCB0aW1lQnl0ZURhdGEgPSB0aGlzLnRpbWVCeXRlRGF0YVxuXG5cdFx0YW5hbHlzZXIuZ2V0Qnl0ZVRpbWVEb21haW5EYXRhKHRpbWVCeXRlRGF0YSlcblxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBiaW5Db3VudDsgaSsrKSB7XG5cdFx0XHR3YXZlW2ldID0gKCh0aW1lQnl0ZURhdGFbaV0gLSAxMjgpIC8gMTI4KVxuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBnZXRBbmFseXNlck5vZGUoKTogQW5hbHlzZXJOb2RlIHsgXG5cdFx0cmV0dXJuIHRoaXMuYW5hbHlzZXIgXG5cdH1cblxuXHRwdWJsaWMgZ2V0TGV2ZWxzKCk6IEFycmF5PG51bWJlcj4geyBcblx0XHRyZXR1cm4gdGhpcy5sZXZlbHMgXG5cdH1cblxuXHRwdWJsaWMgZ2V0V2F2ZSgpOiBBcnJheTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy53YXZlXG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIERlZmF1bHRzKCk6IEFuYWx5c2VyT3B0aW9ucyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGxldmVsc0NvdW50OiAxMjhcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IHsgQXVkaW9BbmFseXNlciB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXVkL3dlYi1hdWRpby1hbmFseXNlci50cyIsImNsYXNzIFV0aWwge1xuXHRcblx0cHVibGljIHN0YXRpYyBtYXgoYXJyOiBBcnJheTxudW1iZXI+KTogbnVtYmVyIHtcblx0XHRsZXQgbWF4ID0gLUluZmluaXR5XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChhcnJbaV0gPiBtYXgpIG1heCA9IGFycltpXVxuXHRcdH1cblx0XHRyZXR1cm4gbWF4XG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIG1pbihhcnI6IEFycmF5PG51bWJlcj4pOiBudW1iZXIge1xuXHRcdGxldCBtaW4gPSBJbmZpbml0eVxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoYXJyW2ldIDwgbWluKSBtaW4gPSBhcnJbaV1cblx0XHR9XG5cdFx0cmV0dXJuIG1pblxuXHR9XG5cblx0cHVibGljIHN0YXRpYyBpc1BvdzIobjogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0aWYgKG4gPT09IDApXG5cdFx0XHRyZXR1cm4gZmFsc2Vcblx0XHR3aGlsZSAobiAhPT0gMSkge1xuXHRcdFx0aWYgKG4gJSAyICE9PSAwKVxuXHRcdFx0XHRyZXR1cm4gZmFsc2Vcblx0XHRcdG4gPSBuIC8gMlxuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZVxuXHR9XG59XG5cbmV4cG9ydCB7IFV0aWwgfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2F1ZC91dGlsLnRzIiwiaW1wb3J0IHsgVXRpbCB9IGZyb20gJy4vdXRpbCdcblxudHlwZSBTb3VuZCA9IHtcblx0ZmlsZW5hbWU6IHN0cmluZyxcblx0YnVmZmVyOiBBdWRpb0J1ZmZlcixcblx0c291cmNlOiBBdWRpb0J1ZmZlclNvdXJjZU5vZGUsXG5cdGlzUGxheWluZzogYm9vbGVhbixcblx0c3RhcnRUaW1lOiBudW1iZXIsXG5cdHN0YXJ0QXQ6IG51bWJlclxufVxuXG50eXBlIFNvdW5kTWFwID0ge1xuXHRba2V5OiBzdHJpbmddOiBTb3VuZFxufVxuXG5jbGFzcyBBdWRpb0NvbnRleHRNYW5hZ2VyIHtcblxuXHRwcml2YXRlIGNvbnRleHQ6IEF1ZGlvQ29udGV4dFxuXHRwcml2YXRlIHNvdW5kczogU291bmRNYXAgPSB7fVxuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdGxldCBhdWRpb0NvbnRleHQgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8ICg8YW55PndpbmRvdykud2Via2l0QXVkaW9Db250ZXh0IHx8IC0xXG5cdFx0aWYgKGF1ZGlvQ29udGV4dCA9PT0gLTEpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1dlYiBhdWRpbyBpcyBub3Qgc3VwcG9ydGVkIG9uIHlvdXIgcGxhdGZvcm0uJylcblx0XHR0aGlzLmNvbnRleHQgPSBuZXcgYXVkaW9Db250ZXh0KClcblx0XHR0aGlzLnNvdW5kc1xuXHR9XG5cblx0cHVibGljIGdldENvbnRleHQoKTogQXVkaW9Db250ZXh0IHtcblx0XHRyZXR1cm4gdGhpcy5jb250ZXh0XG5cdH1cblxuXHRwdWJsaWMgbG9hZFNvdW5kKGZpbGVuYW1lOiBzdHJpbmcpIHtcblx0XHRjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0XG5cdFx0Y29uc3Qgc291bmRzID0gdGhpcy5zb3VuZHNcblx0XHRsZXQgbG9hZGVyID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0bGV0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKSxcblx0XHRcdFx0ZnVsbGZpbGU6IHN0cmluZyA9ICcvc291bmRzLycgKyBmaWxlbmFtZVxuXHRcdFx0cmVxdWVzdC5vcGVuKCdHRVQnLCBmdWxsZmlsZSk7XG5cdFx0XHRyZXF1ZXN0LnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcic7XG5cdFx0XHRyZXF1ZXN0Lm9ubG9hZCA9ICgpID0+IHtcblx0XHRcdFx0Y29udGV4dC5kZWNvZGVBdWRpb0RhdGEocmVxdWVzdC5yZXNwb25zZSwgKGJ1ZmZlcikgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHNvdW5kOiBTb3VuZCA9IHtcblx0XHRcdFx0XHRcdGZpbGVuYW1lLCBcblx0XHRcdFx0XHRcdGJ1ZmZlciwgXG5cdFx0XHRcdFx0XHRpc1BsYXlpbmc6IGZhbHNlLCBcblx0XHRcdFx0XHRcdHNvdXJjZTogbnVsbCxcblx0XHRcdFx0XHRcdHN0YXJ0VGltZTogbnVsbCxcblx0XHRcdFx0XHRcdHN0YXJ0QXQ6IDBcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmVzb2x2ZShzb3VuZClcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHRcdHJlcXVlc3Qub25lcnJvciA9IChlcnIpID0+IHJlamVjdChlcnIpXG5cdFx0XHRyZXF1ZXN0LnNlbmQoKVxuXHRcdH0pXG5cblx0XHRyZXR1cm4gbG9hZGVyLnRoZW4oKHNvdW5kOiBTb3VuZCkgPT4ge1xuXHRcdFx0c291bmRzW3NvdW5kLmZpbGVuYW1lXSA9IHNvdW5kXG5cdFx0fSlcblx0fVxuXG5cdHB1YmxpYyBsb2FkU291bmRzKG5hbWVzOiBBcnJheTxzdHJpbmc+KSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXNcblx0XHRyZXR1cm4gbmFtZXMubWFwKChuYW1lKSA9PiB7IHJldHVybiBzZWxmLmxvYWRTb3VuZChuYW1lKSB9KVxuXHR9XG5cblx0cHVibGljIGdldFNvdW5kKGZpbGVuYW1lOiBzdHJpbmcpOiBTb3VuZCB7XG5cdFx0bGV0IHNvdW5kID0gdGhpcy5zb3VuZHNbZmlsZW5hbWVdXG5cdFx0aWYgKHNvdW5kID09PSB1bmRlZmluZWQpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFVucmVjb2duaXplZCBzb3VuZCAke2ZpbGVuYW1lfS5gKVxuXHRcdHJldHVybiBzb3VuZFxuXHR9XG5cblx0cHVibGljIHBsYXkoZmlsZW5hbWU6IHN0cmluZywgdG8/OiBBdWRpb05vZGUpIHtcblx0XHRjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0XG5cdFx0Y29uc3Qgc291bmRzID0gdGhpcy5zb3VuZHNcblx0XHRjb25zdCBzZWxmID0gdGhpc1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRpZiAoIXRvKVxuXHRcdFx0XHR0byA9IGNvbnRleHQuZGVzdGluYXRpb25cblx0XHRcdGxldCBzb3VuZCA9IHNlbGYuZ2V0U291bmQoZmlsZW5hbWUpXG5cdFx0XHRpZiAoc291bmQuaXNQbGF5aW5nKSBcblx0XHRcdFx0cmV0dXJuXG5cdFx0XHRsZXQgc291cmNlID0gY29udGV4dC5jcmVhdGVCdWZmZXJTb3VyY2UoKVxuXHRcdFx0c291cmNlLmJ1ZmZlciA9IHNvdW5kLmJ1ZmZlclxuXHRcdFx0c291cmNlLmNvbm5lY3QodG8pXG5cdFx0XHRzb3VyY2Uuc3RhcnQoMCwgc291bmQuc3RhcnRBdClcblx0XHRcdHNvdW5kc1tmaWxlbmFtZV0uc291cmNlID0gc291cmNlXG5cdFx0XHRzb3VuZHNbZmlsZW5hbWVdLmlzUGxheWluZyA9IHRydWVcblx0XHRcdHNvdW5kc1tmaWxlbmFtZV0uc3RhcnRUaW1lID0gc2VsZi5jb250ZXh0LmN1cnJlbnRUaW1lXG5cdFx0XHRyZXNvbHZlKClcblx0XHR9KVxuXHR9XG5cblx0cHVibGljIHRvZ2dsZVBsYXkoZmlsZW5hbWU6IHN0cmluZywgdG8/OiBBdWRpb05vZGUpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpc1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRsZXQgc291bmQgPSBzZWxmLmdldFNvdW5kKGZpbGVuYW1lKVxuXHRcdFx0aWYgKHNvdW5kLmlzUGxheWluZylcblx0XHRcdFx0cmV0dXJuIHNlbGYucGF1c2UoZmlsZW5hbWUpXG5cdFx0XHRyZXR1cm4gc2VsZi5wbGF5KGZpbGVuYW1lLCB0bylcblx0XHR9KVxuXHR9XG5cblx0cHJpdmF0ZSBfcGF1c2UoZmlsZW5hbWU6IHN0cmluZywgcmVzZXQ6IGJvb2xlYW4pIHtcblx0XHRjb25zdCBzZWxmID0gdGhpc1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRsZXQgc291bmQgPSBzZWxmLmdldFNvdW5kKGZpbGVuYW1lKVxuXHRcdFx0bGV0IHNvdXJjZSA9IHNvdW5kLnNvdXJjZVxuXHRcdFx0aWYgKHNvdXJjZSA9PT0gdW5kZWZpbmVkKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBObyBzb3VyY2UgZm9yIHNvdW5kICR7ZmlsZW5hbWV9LmApXG5cdFx0XHR9XG5cdFx0XHRpZiAoc291bmQuaXNQbGF5aW5nKSB7XG5cdFx0XHRcdHNvdXJjZS5zdG9wKDApXG5cdFx0XHR9XG5cdFx0XHRzb3VuZC5pc1BsYXlpbmcgPSBmYWxzZVxuXHRcdFx0aWYgKHJlc2V0KSB7XG5cdFx0XHRcdHNvdW5kLnN0YXJ0QXQgPSAwXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoc291bmQuc3RhcnRUaW1lICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0c291bmQuc3RhcnRBdCArPSAoc2VsZi5jb250ZXh0LmN1cnJlbnRUaW1lIC0gc291bmQuc3RhcnRUaW1lKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXNvbHZlKClcblx0XHR9KVxuXHR9XG5cblx0cHVibGljIHBhdXNlKGZpbGVuYW1lOiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gdGhpcy5fcGF1c2UoZmlsZW5hbWUsIGZhbHNlKVxuXHR9XG5cblx0cHVibGljIHN0b3AoZmlsZW5hbWU6IHN0cmluZykge1xuXHRcdHJldHVybiB0aGlzLl9wYXVzZShmaWxlbmFtZSwgdHJ1ZSlcblx0fVxufVxuXG5leHBvcnQgeyBBdWRpb0NvbnRleHRNYW5hZ2VyIH1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2F1ZC93ZWItYXVkaW8tY29udGV4dC50cyJdLCJzb3VyY2VSb290IjoiIn0=
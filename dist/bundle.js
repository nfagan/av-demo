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
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["clamp"] = clamp;
/* harmony export (immutable) */ __webpack_exports__["signedClamp"] = signedClamp;
/* harmony export (immutable) */ __webpack_exports__["abs"] = abs;
/* harmony export (immutable) */ __webpack_exports__["radians"] = radians;
/* harmony export (immutable) */ __webpack_exports__["vecsum"] = vecsum;
/* harmony export (immutable) */ __webpack_exports__["vecmean"] = vecmean;
/* harmony export (immutable) */ __webpack_exports__["distance"] = distance;
/* harmony export (immutable) */ __webpack_exports__["max"] = max;
/* harmony export (immutable) */ __webpack_exports__["min"] = min;
/* harmony export (immutable) */ __webpack_exports__["isPow2"] = isPow2;
/* harmony export (immutable) */ __webpack_exports__["lookAt"] = lookAt;
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
        else if (value instanceof __WEBPACK_IMPORTED_MODULE_3__texture_texture__["Texture"]) {
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
        this.boundTo = '';
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
    isBoundTo(prog) {
        return this.boundTo === prog.uuid;
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
            if (uvLoc !== -1) {
                gl.enableVertexAttribArray(uvLoc);
                gl.vertexAttribPointer(uvLoc, 2, gl.FLOAT, false, stride * bytes, offset * bytes);
                offset += 2;
            }
        }
        //	normals
        if (vert0.sizeNormal() > 0) {
            let normLoc = program.getAttributeLocation('normal');
            if (normLoc !== -1) {
                gl.enableVertexAttribArray(normLoc);
                gl.vertexAttribPointer(normLoc, 3, gl.FLOAT, false, stride * bytes, offset * bytes);
                offset += 3;
            }
        }
        //	indices
        if (nIndices > 0) {
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.ebo);
        }
        this._isBound = true;
        this.boundTo = program.uuid;
    }
    unbind() {
        const gl = this.gl;
        const indices = this.indices;
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        if (indices.length > 0) {
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
        }
        this._isBound = false;
        this.boundTo = '';
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
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["Tex2D"] = Tex2D;
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
        opts.minFilter = gl.LINEAR;
        opts.magFilter = gl.LINEAR;
        opts.generateMips = true;
        return opts;
    }
}
/* harmony export (immutable) */ __webpack_exports__["TextureOpts"] = TextureOpts;

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
        const data = this.data;
        const opts = this.opts;
        const gl = this.gl;
        if (data === null || data instanceof Uint8Array) {
            this.configure2DData(data, tex);
        }
        else {
            this.configure2DImage(data, tex);
        }
        if (opts.generateMips && __WEBPACK_IMPORTED_MODULE_0__math_wgl_math__["isPow2"](opts.width) && __WEBPACK_IMPORTED_MODULE_0__math_wgl_math__["isPow2"](opts.height)) {
            gl.generateMipmap(gl.TEXTURE_2D);
        }
        else {
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, opts.wrapS);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, opts.wrapT);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, opts.minFilter);
        }
    }
    configure2DImage(data, tex) {
        const opts = this.opts;
        const gl = this.gl;
        gl.texImage2D(gl.TEXTURE_2D, opts.level, opts.internalFormat, opts.sourceFormat, opts.dataType, data);
        opts.width = data.width;
        opts.height = data.height;
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
/* harmony export (immutable) */ __webpack_exports__["Texture"] = Texture;



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
    return data instanceof __WEBPACK_IMPORTED_MODULE_0__texture_texture__["Texture"];
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
        this.order = 0;
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
            .rotate(__WEBPACK_IMPORTED_MODULE_4__math_wgl_math__["radians"](rot[0]), [1, 0, 0])
            .rotate(__WEBPACK_IMPORTED_MODULE_4__math_wgl_math__["radians"](rot[1]), [0, 1, 0])
            .rotate(__WEBPACK_IMPORTED_MODULE_4__math_wgl_math__["radians"](rot[2]), [0, 0, 1])
            .scale(scl)
            .mat();
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
    static compareMeshUUID(a, b) {
        return __WEBPACK_IMPORTED_MODULE_1__mesh_mesh__["a" /* Mesh */].compareUUID(a.mesh, b.mesh);
    }
    static compareOrder(a, b) {
        if (a.uuid === b.uuid)
            return 0;
        return a.order > b.order ? 1 : -1;
    }
    static compareOrderThenMeshUUID(a, b) {
        let res = Model.compareOrder(a, b);
        if (res !== 0)
            return res;
        return Model.compareMeshUUID(a, b);
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
        if (typeof (value) != 'number' && !(value instanceof __WEBPACK_IMPORTED_MODULE_1__texture_texture__["Texture"])) {
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
                let dist = __WEBPACK_IMPORTED_MODULE_2__math_wgl_math__["distance"](self.currentCoordinates, self.coordinates);
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
    Keys[Keys["shift"] = 16] = "shift";
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__volumetric_test__ = __webpack_require__(27);

// controlsTest.main()
// eg1.main()
// eg2.main()
// barebones.main()
__WEBPACK_IMPORTED_MODULE_0__volumetric_test__["a" /* main */]();


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = main;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_gl_matrix__ = __webpack_require__(1);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function checkFBO(gl) {
    let status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
    switch (status) {
        case gl.FRAMEBUFFER_COMPLETE:
            break;
        case gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
            console.log('FRAMEBUFFER_INCOMPLETE_ATTACHMENT');
            break;
        case gl.FRAMEBUFFER_UNSUPPORTED:
            console.log('FRAMEBUFFER_UNSUPPORTED');
            break;
        case gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
            console.log('FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT');
            break;
        case gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
            console.log('FRAMEBUFFER_INCOMPLETE_DIMENSIONS');
        default:
            console.log('unspecified');
            console.log(status);
            break;
    }
    if (status !== gl.FRAMEBUFFER_COMPLETE) {
        throw new Error('incomplete frame buffer');
    }
}
function configureFBO(gl, w, h) {
    const opts = __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["o" /* texture */].TextureOpts.Default2D(gl);
    opts.width = w;
    opts.height = h;
    opts.dataType = gl.UNSIGNED_BYTE;
    opts.generateMips = false;
    opts.wrapS = gl.CLAMP_TO_EDGE;
    opts.wrapT = gl.CLAMP_TO_EDGE;
    opts.magFilter = gl.LINEAR;
    const tex = __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["o" /* texture */].Tex2D(gl, null, opts);
    const fbo = gl.createFramebuffer();
    const attach = gl.COLOR_ATTACHMENT0;
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, attach, gl.TEXTURE_2D, tex.handle, 0);
    checkFBO(gl);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    return { fbo, texture: tex };
}
function configureShadowFBO(gl, sz) {
    const depthOpts = __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["o" /* texture */].TextureOpts.Default2D(gl);
    const colorOpts = __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["o" /* texture */].TextureOpts.Default2D(gl);
    var ext = gl.getExtension('WEBGL_depth_texture');
    if (!ext)
        throw new Error('Depth textures are no supported.');
    depthOpts.width = sz;
    depthOpts.height = sz;
    depthOpts.internalFormat = gl.DEPTH_COMPONENT;
    depthOpts.sourceFormat = gl.DEPTH_COMPONENT;
    depthOpts.dataType = gl.UNSIGNED_SHORT;
    depthOpts.generateMips = false;
    depthOpts.wrapS = gl.CLAMP_TO_EDGE;
    depthOpts.wrapT = gl.CLAMP_TO_EDGE;
    depthOpts.magFilter = gl.NEAREST;
    depthOpts.minFilter = gl.NEAREST;
    colorOpts.width = sz;
    colorOpts.height = sz;
    const depthTex = __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["o" /* texture */].Tex2D(gl, null, depthOpts);
    const colorTex = __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["o" /* texture */].Tex2D(gl, null, colorOpts);
    const fbo = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, depthTex.handle, 0);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, colorTex.handle, 0);
    checkFBO(gl);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    return { fbo, texture: depthTex };
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        document.body.style.padding = '0';
        document.body.style.margin = '0';
        document.body.style.position = 'fixed';
        const keyboard = new __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["d" /* Input */].Keyboard();
        const canvas = new __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["b" /* Canvas */]();
        const canvasElement = canvas.element;
        const gl = canvasElement.getContext('webgl');
        if (!gl)
            throw new Error('Unable to initialize GL context.');
        const scene = new __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["i" /* Scene */](gl);
        const renderer = new __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["n" /* renderers */].functional(gl);
        const camera = new __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["a" /* Camera */]();
        const mouseInput = new __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["d" /* Input */].PointerLock(canvas.element);
        const touchInput = new __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["d" /* Input */].Touch();
        const keyboardMoveControls = new __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["c" /* Controls */].Movement.Keyboard(keyboard, camera, 5.0);
        const touchMoveControls = new __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["c" /* Controls */].Movement.Touch(touchInput, camera, 10.0);
        let rotationControls;
        if (__WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["l" /* capabilities */].hasPointerLock()) {
            rotationControls = new __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["c" /* Controls */].Orbit.Orbit2(mouseInput, camera);
        }
        else {
            rotationControls = new __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["c" /* Controls */].Orbit.Orbit(touchInput, camera);
        }
        const genShadowProg = __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["j" /* ShaderFactory */].Create(gl, __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["k" /* ShaderLibrary */].GenShadows1);
        const prog = __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["j" /* ShaderFactory */].Create(gl, __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["k" /* ShaderLibrary */].UseShadows1);
        const basicProg = __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["j" /* ShaderFactory */].Create(gl, __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["k" /* ShaderLibrary */].Basic);
        const postProg = __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["j" /* ShaderFactory */].Create(gl, __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["k" /* ShaderLibrary */].Volume);
        const sphere = __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["g" /* MeshFactory */].create(gl, 'sphere');
        const quad = __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["g" /* MeshFactory */].create(gl, 'quad');
        const mat = __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["f" /* Material */].Material.Physical(gl);
        const sphereModel = new __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["h" /* Model */](gl, prog, sphere, mat);
        const model2 = new __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["h" /* Model */](gl, prog, __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["g" /* MeshFactory */].create(gl, 'cube'), mat.clone());
        const light = __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["e" /* Light */].Light.Point(gl);
        const lightSphereModel = new __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["h" /* Model */](gl, basicProg, sphere, mat.clone());
        const planeModel = new __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["h" /* Model */](gl, prog, __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["g" /* MeshFactory */].create(gl, 'quad'), mat.clone());
        const fboW = canvas.width * canvas.dpr / 4;
        const fboH = canvas.height * canvas.dpr / 4;
        const fbo = configureFBO(gl, fboW, fboH);
        const shadowSz = 1024;
        const shadowFbo = configureShadowFBO(gl, shadowSz);
        renderer.setAspect(canvas.aspect);
        renderer.setNearFar(0.1, 1000);
        renderer.setClearColor([0, 0, 0]);
        scene.add([sphereModel, model2, lightSphereModel, planeModel, light]);
        const lightColor = [1, 1, 1];
        const lightPosition = [5, 5, 10];
        const sphereColor = [1, 0, 0];
        const spherePosition = [0, 0, 0];
        const lightSpherePosition = lightPosition;
        light.getAttribute('position').setValue(lightPosition);
        light.getAttribute('color').setValue(lightColor);
        sphereModel.setPosition(spherePosition);
        sphereModel.material.getAttribute('albedo').setValue(sphereColor);
        lightSphereModel.setPosition(lightSpherePosition);
        lightSphereModel.material.getAttribute('albedo').setValue(lightColor);
        model2.material.getAttribute('albedo').setValue(sphereColor);
        model2.setPosition([2, -2, -2]);
        planeModel.setPosition([0, -5, 0]);
        planeModel.setRotation([90, 0, 0]);
        planeModel.setScale(10);
        planeModel.material.getAttribute('albedo').setValue(sphereColor);
        camera.setPosition([0, 0, -10]);
        camera.setPitch(5);
        camera.setYaw(80);
        let addRays = true;
        canvas.element.onclick = () => addRays = !addRays;
        const animate = () => {
            keyboardMoveControls.update();
            rotationControls.update();
            moveCube();
            //	shadows
            depthLightPass();
            //	volumetrics
            blackPass();
            regularPass();
            if (addRays)
                blendPass();
            window.requestAnimationFrame(animate);
        };
        animate();
        function moveCube() {
            let pos = model2.getPosition();
            let amt = 0.1;
            if (keyboard.isDown(__WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["d" /* Input */].Keys.Left))
                pos[0] += amt;
            if (keyboard.isDown(__WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["d" /* Input */].Keys.Right))
                pos[0] -= amt;
            if (keyboard.isDown(__WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["d" /* Input */].Keys.Down))
                if (keyboard.isDown(__WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["d" /* Input */].Keys.shift))
                    pos[2] -= amt;
                else
                    pos[1] -= amt;
            if (keyboard.isDown(__WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["d" /* Input */].Keys.Up))
                if (keyboard.isDown(__WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["d" /* Input */].Keys.shift))
                    pos[2] += amt;
                else
                    pos[1] += amt;
        }
        //	shadows
        function depthLightPass() {
            let transforms = getLightSpaceProjView();
            const models = scene.models;
            gl.bindFramebuffer(gl.FRAMEBUFFER, shadowFbo.fbo);
            gl.clear(gl.DEPTH_BUFFER_BIT);
            gl.viewport(0, 0, shadowSz, shadowSz);
            renderer.conditionalBindProgram(genShadowProg);
            genShadowProg.setUniform('view', transforms.view);
            genShadowProg.setUniform('projection', transforms.proj);
            for (let model of models) {
                renderer.conditionalBindMesh(genShadowProg, model.mesh);
                genShadowProg.setUniform('model', model.getWorldMatrix());
                model.mesh.draw();
            }
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
            gl.viewport(0, 0, canvas.width * canvas.dpr, canvas.height * canvas.dpr);
        }
        function getLightSpaceProjView() {
            const rvec = __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["p" /* util */].vector.requireVec3;
            const origin = __WEBPACK_IMPORTED_MODULE_1_gl_matrix__["d" /* vec3 */].fromValues(0, 0, 0);
            const up = __WEBPACK_IMPORTED_MODULE_1_gl_matrix__["d" /* vec3 */].fromValues(0, 1, 0);
            // const lightSpaceProj = mat4.ortho(mat4.create(), -10, 10, -10, 10, 1, 7.5)
            const lightSpaceProj = __WEBPACK_IMPORTED_MODULE_1_gl_matrix__["b" /* mat4 */].ortho(__WEBPACK_IMPORTED_MODULE_1_gl_matrix__["b" /* mat4 */].create(), -10, 10, -10, 10, 1, 200);
            const lightSpaceView = __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["m" /* math */].lookAt(__WEBPACK_IMPORTED_MODULE_1_gl_matrix__["b" /* mat4 */].create(), rvec(lightPosition), origin, up);
            return { view: lightSpaceView, proj: lightSpaceProj };
        }
        //	volumes
        function regularPass() {
            const transforms = getLightSpaceProjView();
            const trans = __WEBPACK_IMPORTED_MODULE_1_gl_matrix__["b" /* mat4 */].multiply(__WEBPACK_IMPORTED_MODULE_1_gl_matrix__["b" /* mat4 */].create(), transforms.proj, transforms.view);
            renderer.conditionalBindProgram(prog);
            shadowFbo.texture.bind();
            prog.setUniform('shadow_depth_map', shadowFbo.texture);
            prog.setUniform('shadow_size', shadowSz);
            prog.setUniform('light_space_transform', trans);
            renderer.render(scene, camera);
            shadowFbo.texture.unbind();
        }
        function blackPass() {
            gl.bindFramebuffer(gl.FRAMEBUFFER, fbo.fbo);
            gl.viewport(0, 0, fboW, fboH);
            sphereModel.program = basicProg;
            planeModel.program = basicProg;
            model2.program = basicProg;
            sphereModel.material.getAttribute('albedo').setValue([0, 0, 0]);
            //	make sure the light is drawn first
            lightSphereModel.order = -1;
            scene.sortModels(__WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["h" /* Model */].compareOrder);
            renderer.render(scene, camera);
            sphereModel.program = prog;
            planeModel.program = prog;
            model2.program = prog;
            sphereModel.material.getAttribute('albedo').setValue(sphereColor);
            lightSphereModel.material.getAttribute('albedo').setValue(lightColor);
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
            gl.viewport(0, 0, canvas.width * canvas.dpr, canvas.height * canvas.dpr);
        }
        function blendPass() {
            gl.enable(gl.BLEND);
            gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
            renderer.conditionalBindProgram(postProg);
            renderer.conditionalBindMesh(postProg, quad);
            fbo.texture.index = 0;
            let pos = getScreenSpacePosition(lightPosition, camera.getViewMatrix(), renderer.getProjectionMatrix());
            postProg.setUniform('uScreenSpaceSunPos', pos);
            postProg.setUniform('uDensity', 1.0);
            postProg.setUniform('uWeight', 0.008);
            postProg.setUniform('uDecay', 1.0);
            postProg.setUniform('uExposure', 1.0);
            postProg.seti('uNumSamples', 25);
            postProg.setUniform('uOcclusionTexture', fbo.texture);
            fbo.texture.bind();
            quad.bind(postProg);
            quad.draw();
            quad.unbind();
            fbo.texture.unbind();
            gl.disable(gl.BLEND);
        }
    });
}
function getScreenSpacePosition(pos, view, proj) {
    pos = __WEBPACK_IMPORTED_MODULE_0__gl_web_gl__["p" /* util */].vector.requireVec3(pos);
    var v = __WEBPACK_IMPORTED_MODULE_1_gl_matrix__["e" /* vec4 */].fromValues(pos[0], pos[1], pos[2], 1.0);
    __WEBPACK_IMPORTED_MODULE_1_gl_matrix__["e" /* vec4 */].transformMat4(v, v, view);
    __WEBPACK_IMPORTED_MODULE_1_gl_matrix__["e" /* vec4 */].transformMat4(v, v, proj);
    // perspective division
    __WEBPACK_IMPORTED_MODULE_1_gl_matrix__["e" /* vec4 */].scale(v, v, 1.0 / v[3]);
    // scale (x,y) from range [-1,+1] to range [0,+1]
    __WEBPACK_IMPORTED_MODULE_1_gl_matrix__["e" /* vec4 */].add(v, v, [1.0, 1.0, 0.0, 0.0]);
    __WEBPACK_IMPORTED_MODULE_1_gl_matrix__["e" /* vec4 */].scale(v, v, 0.5);
    return __WEBPACK_IMPORTED_MODULE_1_gl_matrix__["d" /* vec3 */].fromValues(v[0], v[1], 0);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__texture_texture__ = __webpack_require__(8);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_20__common_capabilities__; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_10__camera_camera__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_16__common_canvas__["a"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_19__input_camera_controls__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_18__input_input__; });
/* unused harmony reexport FrameStats */
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__light_light__; });
/* unused harmony reexport Loaders */
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_14__math_wgl_math__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__material_material__; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_0__mesh_mesh_factory__["a"]; });
/* unused harmony reexport MeshLibrary */
/* unused harmony reexport Mesh */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_5__model_model__["a"]; });
/* unused harmony reexport Vertex */
/* unused harmony reexport Topologies */
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_13__renderers_renderers__; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_11__scene_scene__["a"]; });
/* unused harmony reexport ShaderTypes */
/* unused harmony reexport Shader */
/* unused harmony reexport ShaderProgram */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_8__shader_shader_library__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_9__shader_shader_factory__["a"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_21__texture_texture__; });
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
        if (!__WEBPACK_IMPORTED_MODULE_3__math_wgl_math__["isPow2"](vertexCount))
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shaders_shader_volume__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shaders_shader_gen_shadows1__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shaders_shader_use_shadows1__ = __webpack_require__(67);






const ShaderLibrary = {
    Basic: __WEBPACK_IMPORTED_MODULE_0__shaders_shader_basic__["a" /* Basic */],
    GenShadows1: __WEBPACK_IMPORTED_MODULE_4__shaders_shader_gen_shadows1__["a" /* GenShadows1 */],
    UseShadows1: __WEBPACK_IMPORTED_MODULE_5__shaders_shader_use_shadows1__["a" /* UseShadows1 */],
    PBR1: __WEBPACK_IMPORTED_MODULE_1__shaders_shader_pbr1__["a" /* PBR1 */],
    Skybox: __WEBPACK_IMPORTED_MODULE_2__shaders_shader_skybox__["a" /* Skybox */],
    Volume: __WEBPACK_IMPORTED_MODULE_3__shaders_shader_volume__["a" /* Volume */],
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
			v_position = vec3(model * vec4(in_position, 1.0));
			v_uv = in_uv;
			v_normal = in_normal;
			gl_Position = projection * view * model * vec4(in_position, 1.0);
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
        __WEBPACK_IMPORTED_MODULE_2__math_wgl_math__["lookAt"](view, position, target, up);
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
/* unused harmony export FrameStats */
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
    reset() {
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
        let forceUpdate = false;
        if (this.conditionalBindProgram(prog)) {
            forceUpdate = true;
            this.configureCamera(prog, camera);
            this.configureLights(prog, scene.lights, forceUpdate);
        }
        this.configureTransform(prog, model.getWorldMatrix());
        this.configureMaterial(prog, material, forceUpdate);
        this.draw(prog, mesh, forceUpdate);
        model.onAfterRender();
    }
    draw(prog, mesh, force = false) {
        this.conditionalBindProgram(prog);
        this.conditionalBindMesh(prog, mesh, force);
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
    configureMaterial(prog, material, force = false) {
        let isNewProg = this.conditionalBindProgram(prog);
        let isNewMat = this.checkNewMaterial(material);
        let attrs = material.enumerateAttributes();
        for (let attr of attrs) {
            if (isNewMat || isNewProg || force || attr.isDirty) {
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
    configureLight(prog, light, force = false) {
        let isNewProg = this.conditionalBindProgram(prog);
        if (!light.active)
            return;
        let index = light.getIndex();
        let attrs = light.enumerateAttributes();
        for (let attr of attrs) {
            if (isNewProg || force || attr.isDirty) {
                let un = __WEBPACK_IMPORTED_MODULE_3__shader_uniforms__["a" /* Map */].getUniform(attr.name);
                let mappedName = __WEBPACK_IMPORTED_MODULE_3__shader_uniforms__["a" /* Map */].getUniform(light.getName());
                let unf = `${mappedName}[${index}].${un}`;
                if (prog.hasUniform(light.getName())) {
                    prog.setUniform(unf, attr.getValue());
                }
            }
        }
    }
    configureLights(prog, lights, force = false) {
        for (let light of lights) {
            this.configureLight(prog, light, force);
        }
    }
    checkNewMaterial(material) {
        let isNullLastMaterial = this.lastMaterial === null;
        let isNewMaterial = isNullLastMaterial ||
            !__WEBPACK_IMPORTED_MODULE_5__material_material__["Material"].equals(material, this.lastMaterial);
        this.lastMaterial = material;
        return isNewMaterial;
    }
    conditionalBindMesh(prog, mesh, force = false) {
        let isNullLastMesh = this.lastMesh === null;
        let isNewBoundProg = !mesh.isBoundTo(prog);
        let isNewMesh = force || isNullLastMesh || !__WEBPACK_IMPORTED_MODULE_2__mesh_mesh__["a" /* Mesh */].equals(mesh, this.lastMesh) || isNewBoundProg;
        if (isNewMesh) {
            if (!isNullLastMesh && this.lastMesh.isBound())
                this.lastMesh.unbind();
            if (!mesh.isBound() || isNewBoundProg)
                mesh.bind(prog);
        }
        this.lastMesh = mesh;
        return isNewMesh;
    }
    conditionalBindProgram(prog, force = false) {
        let isNullLastProgram = this.lastProgram === null;
        let isNewProgram = force || isNullLastProgram || !__WEBPACK_IMPORTED_MODULE_1__shader_shader__["b" /* ShaderProgram */].equals(prog, this.lastProgram);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_vector_util__ = __webpack_require__(39);


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
        this.clearBits = gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT;
    }
    setClearBits(bits) {
        this.clearBits = bits;
    }
    setNearFar(near, far) {
        this.near = near;
        this.far = far;
        this.projection = this.getProjectionMatrix();
    }
    setClearColor(color) {
        this.clearColor = __WEBPACK_IMPORTED_MODULE_1__util_vector_util__["requireVec3"](color);
    }
    clear() {
        const gl = this.gl;
        const cc = this.clearColor;
        const cb = this.clearBits;
        gl.clearColor(cc[0], cc[1], cc[2], 1.0);
        if (cb !== null)
            gl.clear(cb);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__obj_loader__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__texture_loader__ = __webpack_require__(57);
/* unused harmony reexport OBJ */
/* unused harmony reexport TEX */





/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export OBJ */
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
/* unused harmony export TEX */
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
        return __WEBPACK_IMPORTED_MODULE_0__texture_texture__["Tex2D"](gl, data, opts);
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
                this.meanVelocity = __WEBPACK_IMPORTED_MODULE_4__math_wgl_math__["vecmean"](this.velocities);
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
                    __WEBPACK_IMPORTED_MODULE_4__math_wgl_math__["signedClamp"](velocity, -Infinity, self.maxVelocity);
                    if (self.velocities.length === self.nVelocitySamples)
                        self.velocities.shift();
                    self.velocities.push(velocity);
                }
                if (self.velocities.length > 0) {
                    self.meanVelocity = __WEBPACK_IMPORTED_MODULE_4__math_wgl_math__["vecmean"](self.velocities);
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
                return __WEBPACK_IMPORTED_MODULE_4__math_wgl_math__["distance"](pt1, pt2);
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
                __WEBPACK_IMPORTED_MODULE_4__math_wgl_math__["abs"](speed);
                if (self.velocities.length > 0) {
                    speed = __WEBPACK_IMPORTED_MODULE_4__math_wgl_math__["vecmean"](self.velocities);
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
                    .rotate(__WEBPACK_IMPORTED_MODULE_4__math_wgl_math__["radians"](yaw), up)
                    .rotate(__WEBPACK_IMPORTED_MODULE_4__math_wgl_math__["radians"](pitch), right)
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
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Volume; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shader_shader__ = __webpack_require__(4);

// https://github.com/Erkaman/glsl-godrays 
// https://developer.nvidia.com/gpugems/GPUGems3/gpugems3_ch13.html
var _sources;
(function (_sources) {
    _sources.vertex = `
		attribute vec3 in_position;
		attribute vec3 in_normal;
		attribute vec2 in_uv;

		varying mediump vec2 v_uv;

		void main() {
			v_uv = in_uv;
			gl_Position = vec4(in_position, 1.0);
		}
	`;
    _sources.fragment = `

		precision highp float;

		vec3 godrays(
		    float density,
		    float weight,
		    float decay,
		    float exposure,
		    int numSamples,
		    sampler2D occlusionTexture,
		    vec2 screenSpaceLightPos,
		    vec2 uv
	    ) {

		    vec3 fragColor = vec3(0.0,0.0,0.0);

			vec2 deltaTexCoord = vec2( uv - screenSpaceLightPos.xy );

			vec2 texCoord = uv.xy;
			deltaTexCoord *= (1.0 / float(numSamples)) * density;
			float illuminationDecay = 1.0;

			for(int i=0; i < 100 ; i++){
			    if(numSamples < i) {
		            break;
			    }

				texCoord -= deltaTexCoord;
				vec3 samp = texture2D(occlusionTexture, texCoord).xyz;
				samp *= illuminationDecay * weight;
				fragColor += samp;
				illuminationDecay *= decay;
			}

			fragColor *= exposure;

		    return fragColor;
		}

		varying vec2 v_uv;
		varying vec3 v_normal;

		uniform vec3 uScreenSpaceSunPos;
		uniform sampler2D uOcclusionTexture;

		uniform float uDensity;
		uniform float uWeight;
		uniform float uDecay;
		uniform float uExposure;
		uniform int uNumSamples;

		void main() {

			vec2 screenSpaceSunPos = uScreenSpaceSunPos.xy;

			vec3 fragColor = godrays(
			    uDensity,
			    uWeight,
			    uDecay,
			    uExposure,
			    uNumSamples,
			    uOcclusionTexture,
			    screenSpaceSunPos,
			    v_uv
		    );

		    gl_FragColor = vec4(fragColor, 1.0);
		}
	`;
})(_sources || (_sources = {}));
const Volume = {
    sources: [
        {
            source: _sources.vertex,
            type: __WEBPACK_IMPORTED_MODULE_0__shader_shader__["c" /* ShaderTypes */].VERTEX,
            uniforms: []
        },
        {
            source: _sources.fragment,
            type: __WEBPACK_IMPORTED_MODULE_0__shader_shader__["c" /* ShaderTypes */].FRAGMENT,
            uniforms: []
        }
    ]
};



/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenShadows1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shader_shader__ = __webpack_require__(4);

var _sources;
(function (_sources) {
    _sources.vertex = `
		attribute vec3 in_position;

		uniform mat4 model;
		uniform mat4 view;
		uniform mat4 projection;

		void main() {
			gl_Position = projection * view * model * vec4(in_position, 1.0);
		}
	`;
    _sources.fragment = `
		void main() {
		    gl_FragColor = vec4(1.0);
		}
	`;
})(_sources || (_sources = {}));
const GenShadows1 = {
    sources: [
        {
            source: _sources.vertex,
            type: __WEBPACK_IMPORTED_MODULE_0__shader_shader__["c" /* ShaderTypes */].VERTEX,
            uniforms: ['model', 'view', 'projection']
        },
        {
            source: _sources.fragment,
            type: __WEBPACK_IMPORTED_MODULE_0__shader_shader__["c" /* ShaderTypes */].FRAGMENT,
            uniforms: []
        }
    ]
};



/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UseShadows1; });
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

		uniform mat4 light_space_transform;

		varying mediump vec3 v_position;
		varying mediump vec2 v_uv;
		varying mediump vec3 v_normal;

		varying mediump vec4 v_light_space_position;

		void main() {
			vec4 v4_position = vec4(in_position, 1.0);
			v_position = vec3(model * v4_position);
			v_uv = in_uv;
			v_normal = in_normal;
			v_light_space_position = light_space_transform * model * v4_position;
			gl_Position = projection * view * model * vec4(in_position, 1.0);
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

		//
		//	shadow stuff
		//

		float calculate_shadows(vec4 light_space_position, sampler2D depth_tex, float texture_size, float bias) {
			vec3 proj_coords = light_space_position.xyz / light_space_position.w;
			vec2 texel_size = vec2(1.0 / texture_size);
			proj_coords = proj_coords * 0.5 + 0.5;

			float shadow = 0.0;

			for (int x = -1; x <= 1; ++x) {
				for (int y = -1; y <= 1; ++y) {
					float nearest = texture2D(depth_tex, proj_coords.xy + (vec2(x, y) * texel_size)).r;
					float test = proj_coords.z;
					shadow += (test - bias > nearest ? 0.0 : 1.0);
				}
			}

			return shadow / 9.0;
		}

		vec2 gauss_filter[7];

		float calculate_shadows_gauss(vec4 light_space_position, sampler2D depth_tex, float texture_size, float bias) {
			vec3 proj_coords = light_space_position.xyz / light_space_position.w;
			proj_coords = proj_coords * 0.5 + 0.5;
			float shadow = 0.0;
			float scale = 0.005;
			for(int i = 0; i < 7; i++) {
				float test = proj_coords.z;
				float nearest = texture2D(depth_tex, (proj_coords.xy + gauss_filter[i].y * scale)).r;
				shadow += (test - bias > nearest ? 0.0 : 1.0);
			}
			return shadow / 7.0;
		}

		void setup_gauss_filter() {
			gauss_filter[0] = vec2(-3.0, 0.015625);
			gauss_filter[1] = vec2(-2.0, 0.09375);
			gauss_filter[2] = vec2(-1.0, 0.234375);
			gauss_filter[3] = vec2(0.0,	0.3125);
			gauss_filter[4] = vec2(1.0,	0.234375);
			gauss_filter[5] = vec2(2.0,	0.09375);
			gauss_filter[6] = vec2(3.0,	0.015625);
		}

		struct PointLight {
			vec3 position;
			vec3 color;
			vec3 mask;
			bool casts_shadow;
		};

		struct DirectionalLight {
			vec3 direction;
			vec3 color;
			vec3 mask;
		};

		const int n_point_lights = 1;
		const int n_directional_lights = 1;

		uniform PointLight point_lights[n_point_lights];
		uniform DirectionalLight directional_lights[n_directional_lights];

		uniform vec3 cam_position;

		//	shadow stuff
		uniform sampler2D shadow_depth_map;
		uniform float shadow_size;

		uniform vec3 albedo;
		uniform float roughness;
		uniform float metallic;

		varying mediump vec4 v_light_space_position;

		varying mediump vec3 v_position;
		varying mediump vec2 v_uv;
		varying mediump vec3 v_normal;

		void main() {

			//	shadow stuff

			setup_gauss_filter();

			float shadow1 = calculate_shadows(v_light_space_position, shadow_depth_map, shadow_size, 0.005);

			//	regular stuff

			vec3 final_color = albedo;

			vec3 Lo = vec3(0.0);

			//	point lights

			for (int i = 0; i < n_point_lights; i++) {
				bool is_directional = false;
				vec3 res = PBR(v_normal, albedo, roughness, metallic, 
					cam_position, v_position, point_lights[i].position, point_lights[i].color, is_directional);
				res *= point_lights[i].mask;
				res *= shadow1;
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
const UseShadows1 = {
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



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmI3ZWUwNzc0ZWYzMGIzM2QwY2QiLCJ3ZWJwYWNrOi8vLy4vZ2wvdXRpbC91dGlsLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nbC1tYXRyaXgvc3JjL2dsLW1hdHJpeC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2wtbWF0cml4L3NyYy9nbC1tYXRyaXgvY29tbW9uLmpzIiwid2VicGFjazovLy8uL2dsL21hdGgvd2dsLW1hdGgudHMiLCJ3ZWJwYWNrOi8vLy4vZ2wvc2hhZGVyL3NoYWRlci50cyIsIndlYnBhY2s6Ly8vLi9nbC9tZXNoL21lc2gudHMiLCJ3ZWJwYWNrOi8vLy4vZ2wvY29tbW9uL3Jlc291cmNlLnRzIiwid2VicGFjazovLy8uL2dsL21lc2gvdmVydGV4LnRzIiwid2VicGFjazovLy8uL2dsL3RleHR1cmUvdGV4dHVyZS50cyIsIndlYnBhY2s6Ly8vLi9nbC91dGlsL3R5cGUtdXRpbC50cyIsIndlYnBhY2s6Ly8vLi9nbC9tb2RlbC9tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvcm5nLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvbGliL2J5dGVzVG9VdWlkLmpzIiwid2VicGFjazovLy8uL2dsL21lc2gvbWVzaC1saWJyYXJ5LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nbC1tYXRyaXgvc3JjL2dsLW1hdHJpeC9tYXQzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nbC1tYXRyaXgvc3JjL2dsLW1hdHJpeC92ZWMzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nbC1tYXRyaXgvc3JjL2dsLW1hdHJpeC92ZWM0LmpzIiwid2VicGFjazovLy8uL2dsL21hdGVyaWFsL21hdGVyaWFsLnRzIiwid2VicGFjazovLy8uL2dsL3V0aWwvY29tbW9uLXV0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vZ2wvdXRpbC90aW1lLXV0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vZ2wvdXRpbC9hc3NlcnQtdXRpbC50cyIsIndlYnBhY2s6Ly8vLi9nbC9saWdodC9saWdodC50cyIsIndlYnBhY2s6Ly8vLi9nbC9zaGFkZXIvdW5pZm9ybXMudHMiLCJ3ZWJwYWNrOi8vLy4vZ2wvaW5wdXQvaW5wdXQteHkudHMiLCJ3ZWJwYWNrOi8vLy4vZ2wvY29tbW9uL2NhcGFiaWxpdGllcy50cyIsIndlYnBhY2s6Ly8vLi9nbC9pbnB1dC9rZXlib2FyZC50cyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9tYWluLnRzIiwid2VicGFjazovLy8uL2V4YW1wbGVzL3ZvbHVtZXRyaWMtdGVzdC50cyIsIndlYnBhY2s6Ly8vLi9nbC93ZWItZ2wudHMiLCJ3ZWJwYWNrOi8vLy4vZ2wvbWVzaC9tZXNoLWZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvdjEuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC92NC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2wtbWF0cml4L3NyYy9nbC1tYXRyaXgvbWF0Mi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2wtbWF0cml4L3NyYy9nbC1tYXRyaXgvbWF0MmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsLW1hdHJpeC9zcmMvZ2wtbWF0cml4L21hdDQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsLW1hdHJpeC9zcmMvZ2wtbWF0cml4L3F1YXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsLW1hdHJpeC9zcmMvZ2wtbWF0cml4L3ZlYzIuanMiLCJ3ZWJwYWNrOi8vLy4vZ2wvdXRpbC92ZWN0b3ItdXRpbC50cyIsIndlYnBhY2s6Ly8vLi9nbC91dGlsL21hdHJpeC11dGlsLnRzIiwid2VicGFjazovLy8uL2dsL3V0aWwvYXR0cmlidXRlLXV0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vZ2wvdXRpbC9kZWZhdWx0LXV0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vZ2wvc2hhZGVyL3NoYWRlci1saWJyYXJ5LnRzIiwid2VicGFjazovLy8uL2dsL3NoYWRlcnMvc2hhZGVyLWJhc2ljLnRzIiwid2VicGFjazovLy8uL2dsL3NoYWRlcnMvc2hhZGVyLXBicjEudHMiLCJ3ZWJwYWNrOi8vLy4vZ2wvc2hhZGVycy9zaGFkZXItc2t5Ym94LnRzIiwid2VicGFjazovLy8uL2dsL3NoYWRlci9zaGFkZXItZmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9nbC9jYW1lcmEvY2FtZXJhLnRzIiwid2VicGFjazovLy8uL2dsL3NjZW5lL3NjZW5lLnRzIiwid2VicGFjazovLy8uL2dsL2NvbW1vbi9mcmFtZS1zdGF0cy50cyIsIndlYnBhY2s6Ly8vLi9nbC9yZW5kZXJlcnMvcmVuZGVyZXJzLnRzIiwid2VicGFjazovLy8uL2dsL3JlbmRlcmVycy9mdW5jdGlvbmFsLXJlbmRlcmVyLnRzIiwid2VicGFjazovLy8uL2dsL3JlbmRlcmVycy9iYXNlLXJlbmRlcmVyLnRzIiwid2VicGFjazovLy8uL2dsL2NvbW1vbi9jYW52YXMudHMiLCJ3ZWJwYWNrOi8vLy4vZ2wvbG9hZGVycy9sb2FkZXJzLnRzIiwid2VicGFjazovLy8uL2dsL2xvYWRlcnMvb2JqLWxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi9nbC9sb2FkZXJzL3RleHR1cmUtbG9hZGVyLnRzIiwid2VicGFjazovLy8uL2dsL2lucHV0L2lucHV0LnRzIiwid2VicGFjazovLy8uL2dsL2lucHV0L2NhbWVyYS1jb250cm9scy50cyIsIndlYnBhY2s6Ly8vLi9nbC9zaGFkZXJzL3NoYWRlci12b2x1bWUudHMiLCJ3ZWJwYWNrOi8vLy4vZ2wvc2hhZGVycy9zaGFkZXItZ2VuLXNoYWRvd3MxLnRzIiwid2VicGFjazovLy8uL2dsL3NoYWRlcnMvc2hhZGVyLXVzZS1zaGFkb3dzMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RHVDO0FBQ0E7QUFDSDtBQUNTO0FBQ047QUFDSjtBQUNJO0FBQ0c7QUFXekM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkQ7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9B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QUFDO1FBQ1YsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNQLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDUCxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1IsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1AsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDZCxFQUFFLElBQUksR0FBRyxDQUFDO1FBQ1YsRUFBRSxJQUFJLEdBQUcsQ0FBQztRQUNWLEVBQUUsSUFBSSxHQUFHLENBQUM7SUFDWCxDQUFDO0lBRUQsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNaLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDWixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ1osR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNYLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDWixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ1osR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNaLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDWCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ1osR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNaLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDYixHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ1osR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxJQUFJLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQy9DLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUMvQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxJQUFJLEdBQUcsRUFBRSxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDL0MsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUVaLE1BQU0sQ0FBQyxHQUFHLENBQUM7QUFDWixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN2SzRDO0FBQ0Q7QUFDUztBQUNSO0FBUTdDLElBQUssV0FHSjtBQUhELFdBQUssV0FBVztJQUNmLGlEQUFNO0lBQ04scURBQVE7QUFDVCxDQUFDLEVBSEksV0FBVyxLQUFYLFdBQVcsUUFHZjtBQW9CRDtJQVFDO1FBQ0MsSUFBSSxDQUFDLFFBQVEsR0FBRztZQUNmLElBQUksRUFBRSxhQUFhO1lBQ25CLFFBQVEsRUFBRSxJQUFJO1NBQ2Q7UUFDRCxJQUFJLENBQUMsRUFBRSxHQUFHO1lBQ1QsSUFBSSxFQUFFLE9BQU87WUFDYixRQUFRLEVBQUUsSUFBSTtTQUNkO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRztZQUNiLElBQUksRUFBRSxXQUFXO1lBQ2pCLFFBQVEsRUFBRSxJQUFJO1NBQ2Q7SUFDRixDQUFDO0NBQ0Q7QUFFRCxZQUFhLFNBQVEsa0VBQVE7SUFVNUIsWUFBWSxFQUF5QixFQUFFLEdBQWlCO1FBQ3ZELEtBQUssRUFBRTtRQUNQLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRTtRQUNaLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU07UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQzlDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSTtRQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksNkRBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQztRQUNsRCxJQUFJLENBQUMsS0FBSyxFQUFFO0lBQ2IsQ0FBQztJQUVNLFdBQVc7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNO0lBQ25CLENBQUM7SUFFTSxVQUFVLENBQUMsSUFBa0I7UUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztJQUN0QyxDQUFDO0lBRU8sS0FBSztRQUNaLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFO1FBQ2xCLElBQUksTUFBTSxHQUFnQixFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDcEQsRUFBRSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNwQyxFQUFFLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUN4QixFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2RCxJQUFJLE9BQU8sR0FBVyw0QkFBNEI7Z0JBQ2pELEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7WUFDNUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDdEIsRUFBRSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7WUFDdkIsTUFBTSxHQUFHLElBQUk7WUFDYixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUs7UUFDbkIsQ0FBQztRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTTtJQUN2QixDQUFDO0lBRU8sTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUF5QixFQUFFLElBQWlCO1FBQ3hFLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDO1lBQ2hDLE1BQU0sQ0FBQyxFQUFFLENBQUMsZUFBZTtRQUMxQixFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQztZQUM5QixNQUFNLENBQUMsRUFBRSxDQUFDLGFBQWE7UUFDeEIsTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBMkIsQ0FBQztJQUM3QyxDQUFDO0NBQ0Q7QUFFRCxFQUFFO0FBQ0YsVUFBVTtBQUNWLEVBQUU7QUFFRixtQkFBb0IsU0FBUSxrRUFBUTtJQVluQyxZQUFZLEVBQXlCO1FBQ3BDLEtBQUssRUFBRTtRQVBBLGFBQVEsR0FBWSxLQUFLO1FBQ3pCLHFCQUFnQixHQUFxQixFQUFFO1FBRXhDLFlBQU8sR0FBWSxJQUFJO1FBQ3ZCLGdCQUFXLEdBQVksS0FBSztRQUlsQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksZ0JBQWdCLEVBQUU7UUFDeEMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFO0lBQ2IsQ0FBQztJQUVNLE1BQU0sQ0FBQyxPQUFzQjtRQUNuQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDO1FBQ2pDLEdBQUcsQ0FBQyxDQUFDLElBQUksTUFBTSxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDNUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUNuQixNQUFNLElBQUksS0FBSyxDQUFDLHdDQUF3QyxDQUFDO1FBQzNELENBQUM7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU87UUFDdEIsSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUNmLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtJQUM3QixDQUFDO0lBRU0sSUFBSTtRQUNWLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDO1FBQzVCLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJO0lBQ3JCLENBQUM7SUFFTSxNQUFNO1FBQ1osSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUM7UUFDOUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSztJQUN0QixDQUFDO0lBRU0sVUFBVSxDQUFDLElBQWtCO1FBQ25DLEdBQUcsQ0FBQyxDQUFDLElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzNCLE1BQU0sQ0FBQyxJQUFJO1FBQ2IsQ0FBQztRQUNELE1BQU0sQ0FBQyxLQUFLO0lBQ2IsQ0FBQztJQUVNLE9BQU87UUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVE7SUFDckIsQ0FBQztJQUVNLFVBQVUsQ0FBQyxJQUFZLEVBQUUsS0FBc0I7UUFDckQsRUFBRSxDQUFDLENBQUMsT0FBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO1FBRXZCLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO1FBRXZCLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO1FBRTNCLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxZQUFZLHlEQUFlLENBQUMsQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFFN0IsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxpREFBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO1FBRTNCLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsaURBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztRQUMzQixDQUFDO0lBQ0YsQ0FBQztJQUVPLElBQUksQ0FBQyxJQUFZLEVBQUUsS0FBYTtRQUN2QyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDO0lBQ3hELENBQUM7SUFFTyxJQUFJLENBQUMsSUFBWSxFQUFFLEtBQWM7UUFDeEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVNLElBQUksQ0FBQyxJQUFZLEVBQUUsS0FBYTtRQUN0QyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDO0lBQ3hELENBQUM7SUFFTyxRQUFRLENBQUMsSUFBWSxFQUFFLEtBQVc7UUFDekMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztJQUN0RSxDQUFDO0lBRU8sUUFBUSxDQUFDLElBQVksRUFBRSxLQUFvQztRQUNsRSxLQUFLLEdBQUcsa0RBQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUM7SUFDekQsQ0FBQztJQUVPLFFBQVE7UUFDZixJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDO1FBQ25DLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFO1FBQ2xCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPO1FBQzVCLElBQUksT0FBTyxHQUFpQixFQUFFLENBQUMsYUFBYSxFQUFFO1FBQzlDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ2pELEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuRCxDQUFDO1FBQ0QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7UUFDdkIsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEQsSUFBSSxPQUFPLEdBQVcsdUNBQXVDO2dCQUM1RCxFQUFFLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ3RCLE9BQU8sR0FBRyxJQUFJO1lBQ2QsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLO1FBQ3RCLENBQUM7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU87UUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJO0lBQzFCLENBQUM7SUFFTSxvQkFBb0IsQ0FBQyxJQUEwQjtRQUNyRCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRO0lBQ3RDLENBQUM7SUFFTyxxQkFBcUI7UUFDNUIsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVU7UUFDaEMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUU7UUFDbEIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU87UUFDNUIsRUFBRTtRQUNGLCtDQUErQztRQUMvQyxFQUFFO1FBQ0YsSUFBSSxXQUFXLEdBQWtCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3hELEdBQUcsQ0FBQyxDQUFDLElBQUksTUFBTSxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDaEMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDckYsQ0FBQztJQUNGLENBQUM7SUFFTSxVQUFVO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTztJQUNwQixDQUFDO0lBRU8sa0JBQWtCLENBQUMsSUFBWTtRQUN0QyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQztRQUMvQixJQUFJLEdBQUcsR0FBeUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQztRQUMzRCxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN2QixHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztZQUNwRCxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDakIsT0FBTyxDQUFDLElBQUksQ0FBQyw4QkFBOEIsSUFBSSxJQUFJLENBQUM7WUFDckQsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNQLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHO1lBQ2xDLENBQUM7UUFDRixDQUFDO1FBQ0QsTUFBTSxDQUFDLEdBQUc7SUFDWCxDQUFDO0lBRU8sa0JBQWtCLENBQUMsRUFBVTtRQUNwQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3BCLE1BQU0sSUFBSSxLQUFLLENBQUMsNEJBQTRCLEVBQUUsaUNBQWlDLENBQUM7SUFDbEYsQ0FBQztJQUVPLGVBQWUsQ0FBQyxFQUFVO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUNyQixNQUFNLElBQUksS0FBSyxDQUFDLDRCQUE0QixFQUFFLGtDQUFrQyxDQUFDO0lBQ25GLENBQUM7Q0FDRDtBQVVBOzs7Ozs7Ozs7OztBQzdSNEM7QUFDQTtBQUc3QyxVQUFXLFNBQVEsa0VBQVE7SUFhMUIsWUFBWSxFQUF5QjtRQUNwQyxLQUFLLEVBQUU7UUFSQSxnQkFBVyxHQUFZLEtBQUs7UUFDNUIsYUFBUSxHQUFZLEtBQUs7UUFDekIsWUFBTyxHQUFXLEVBQUU7UUFFcEIsYUFBUSxHQUFrQixFQUFFO1FBQzVCLFlBQU8sR0FBZ0IsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBSWhELElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRTtRQUNaLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUU7UUFDakMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRTtJQUNsQyxDQUFDO0lBRU0sU0FBUyxDQUFDLE1BQWM7UUFDOUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQztRQUNwQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUM3QyxNQUFNLElBQUksS0FBSyxDQUFDLHdEQUF3RCxDQUFDO1FBQzNFLENBQUM7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDM0IsQ0FBQztJQUVNLFVBQVUsQ0FBQyxPQUFvQjtRQUNyQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTztJQUN2QixDQUFDO0lBRU0sV0FBVyxDQUFDLFFBQWdCO1FBQ2xDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUM7UUFDdEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRO0lBQ3pCLENBQUM7SUFFTyxXQUFXO1FBQ2xCLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFO1FBQ2xCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssMkRBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzVDLE1BQU0sQ0FBQyxFQUFFLENBQUMsU0FBUztRQUNwQixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssMkRBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQ3hELE1BQU0sQ0FBQyxFQUFFLENBQUMsY0FBYztRQUN6QixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDMUQsQ0FBQztJQUNGLENBQUM7SUFFTSxJQUFJO1FBQ1YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7UUFDNUIsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUU7UUFDbEIsSUFBSSxRQUFRLEdBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNO1FBQzFDLElBQUksVUFBVSxHQUFZLFFBQVEsR0FBRyxDQUFDO1FBQ3RDLElBQUksU0FBUyxHQUFXLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTtRQUM1QyxJQUFJLFFBQVEsR0FBVyxJQUFJLENBQUMsV0FBVyxFQUFFO1FBQ3pDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDaEIsRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1FBQzFELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUM7UUFDdEMsQ0FBQztJQUNGLENBQUM7SUFFTSxRQUFRO1FBQ2QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQztRQUNuQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDOUIsTUFBTTtRQUNQLElBQUksQ0FBQyxlQUFlLEVBQUU7UUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJO0lBQ3hCLENBQUM7SUFFTSxPQUFPO1FBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRO0lBQ3JCLENBQUM7SUFFTSxTQUFTLENBQUMsSUFBbUI7UUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLElBQUk7SUFDbEMsQ0FBQztJQUVNLElBQUksQ0FBQyxPQUFzQjtRQUNqQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQztRQUM1QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDOUIsTUFBTTtRQUVQLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFO1FBQ2xCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQUksTUFBTSxHQUFXLEtBQUssQ0FBQyxJQUFJLEVBQUU7UUFDakMsSUFBSSxLQUFLLEdBQVcsS0FBSyxDQUFDLGVBQWUsRUFBRTtRQUMzQyxJQUFJLE1BQU0sR0FBVyxDQUFDO1FBQ3RCLElBQUksUUFBUSxHQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTtRQUMxQyxJQUFJLE1BQU0sR0FBVyxDQUFDO1FBRXRCLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDO1FBRXhDLFdBQVc7UUFDWCxJQUFJLE1BQU0sR0FBVyxPQUFPLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDO1FBQzdELEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUM7UUFDbEMsRUFBRSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxHQUFDLEtBQUssRUFBRSxNQUFNLEdBQUMsS0FBSyxDQUFDO1FBQzlFLE1BQU0sSUFBSSxDQUFDO1FBRVgsS0FBSztRQUNMLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksS0FBSyxHQUFXLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUM7WUFDdEQsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEIsRUFBRSxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQztnQkFDakMsRUFBRSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxHQUFDLEtBQUssRUFBRSxNQUFNLEdBQUMsS0FBSyxDQUFDO2dCQUM3RSxNQUFNLElBQUksQ0FBQztZQUNaLENBQUM7UUFDRixDQUFDO1FBRUQsVUFBVTtRQUNWLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksT0FBTyxHQUFXLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUM7WUFDNUQsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEIsRUFBRSxDQUFDLHVCQUF1QixDQUFDLE9BQU8sQ0FBQztnQkFDbkMsRUFBRSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxHQUFDLEtBQUssRUFBRSxNQUFNLEdBQUMsS0FBSyxDQUFDO2dCQUMvRSxNQUFNLElBQUksQ0FBQztZQUNaLENBQUM7UUFDRixDQUFDO1FBRUQsVUFBVTtRQUNWLEVBQUUsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDakQsQ0FBQztRQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSTtRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJO0lBQzVCLENBQUM7SUFFTSxNQUFNO1FBQ1osTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUU7UUFDbEIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU87UUFDNUIsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQztRQUNwQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDO1FBQzdDLENBQUM7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUs7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFO0lBQ2xCLENBQUM7SUFFTSxPQUFPO1FBQ2IsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3JCLE1BQU07UUFDUCxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRTtRQUNsQixFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDekIsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQzFCLENBQUM7SUFFTyxlQUFlO1FBQ3RCLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFO1FBQ2xCLElBQUksSUFBSSxHQUFpQixJQUFJLENBQUMsa0JBQWtCLEVBQUU7UUFDbEQsSUFBSSxRQUFRLEdBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNO1FBRTFDLE1BQU07UUFDTixFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUN4QyxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUM7UUFFcEQsTUFBTTtRQUNOLEVBQUUsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDaEQsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDO1FBQ3JFLENBQUM7SUFDRixDQUFDO0lBRU8sa0JBQWtCO1FBQ3pCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRO1FBQzlCLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxNQUFNO1FBQy9CLEVBQUUsQ0FBQyxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUM7WUFDbEIsTUFBTSxDQUFDLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQztRQUMzQixJQUFJLFNBQVMsR0FBVyxTQUFTLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRTtRQUN0RCxJQUFJLE9BQU8sR0FBaUIsSUFBSSxZQUFZLENBQUMsU0FBUyxDQUFDO1FBQ3ZELElBQUksWUFBWSxHQUFXLENBQUM7UUFDNUIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM1QyxJQUFJLElBQUksR0FBaUIsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixFQUFFO1lBQ3pELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUM5QyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDL0IsWUFBWSxFQUFFO1lBQ2YsQ0FBQztRQUNGLENBQUM7UUFDRCxNQUFNLENBQUMsT0FBTztJQUNmLENBQUM7SUFFTyxrQkFBa0IsQ0FBQyxFQUFXO1FBQ3JDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ1AsRUFBRSxHQUFHLGVBQWU7UUFDckIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUNwQixNQUFNLElBQUksS0FBSyxDQUFDLHVCQUF1QixFQUFFLHFDQUFxQyxDQUFDO0lBQ2pGLENBQUM7SUFFTyxlQUFlLENBQUMsS0FBYSxlQUFlO1FBQ25ELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUNyQixNQUFNLElBQUksS0FBSyxDQUFDLHVCQUF1QixFQUFFLHNDQUFzQyxDQUFDO0lBQ2xGLENBQUM7Q0FDRDtBQUVjOzs7Ozs7Ozs7OztBQ3hNVTtBQUV6QjtJQUlDO1FBQ0MsSUFBSSxDQUFDLElBQUksR0FBRyxnREFBRSxFQUFFO0lBQ2pCLENBQUM7SUFFTSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQVcsRUFBRSxDQUFXO1FBQzVDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQztZQUM1QixNQUFNLENBQUMsS0FBSztRQUNiLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJO0lBQ3pCLENBQUM7SUFFTSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQVcsRUFBRSxDQUFXO1FBQ2pELEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNyQixNQUFNLENBQUMsQ0FBQztRQUNULE1BQU0sQ0FBQyxDQUFDO0lBQ1QsQ0FBQztDQUVEO0FBRWtCOzs7Ozs7Ozs7QUN4Qm5CO0FBQUE7SUFTQztRQUpRLGtCQUFhLEdBQVcsQ0FBQztRQUN6QixZQUFPLEdBQVcsQ0FBQztRQUNuQixnQkFBVyxHQUFXLENBQUM7UUFHOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVNLFdBQVcsQ0FBQyxHQUFpQjtRQUNuQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUM7UUFDN0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHO1FBQ25CLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQztJQUN2QixDQUFDO0lBRU0sS0FBSyxDQUFDLEVBQWdCO1FBQzVCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQztRQUN0QyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUU7UUFDWixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUM7SUFDakIsQ0FBQztJQUVNLFNBQVMsQ0FBQyxJQUFrQjtRQUNsQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJO1FBQ2xCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQztJQUNyQixDQUFDO0lBRU0sWUFBWTtRQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWE7SUFDMUIsQ0FBQztJQUVNLE1BQU07UUFDWixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU87SUFDcEIsQ0FBQztJQUVNLFVBQVU7UUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXO0lBQ3hCLENBQUM7SUFFTSxJQUFJO1FBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRTtJQUMvRCxDQUFDO0lBRU0sZUFBZTtRQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUI7SUFDdkMsQ0FBQztJQUVNLGtCQUFrQjtRQUN4QixJQUFJLElBQUksR0FBaUIsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RELElBQUksQ0FBQyxHQUFXLENBQUM7UUFDakIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDckQsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzFCLENBQUMsRUFBRTtRQUNKLENBQUM7UUFDRCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMvQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDcEIsQ0FBQyxFQUFFO1FBQ0osQ0FBQztRQUNELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ25ELElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN4QixDQUFDLEVBQUU7UUFDSixDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUk7SUFDWixDQUFDO0lBRU8sb0JBQW9CLENBQUMsR0FBaUIsRUFBRSxJQUFZLEVBQUUsSUFBYTtRQUMxRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNULElBQUksR0FBRyxlQUFlO1FBQ3ZCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFJLE9BQU8sR0FBVywrQkFBK0IsSUFBSSxtQkFBbUIsSUFBSTtrQkFDakUsR0FBRyxDQUFDLE1BQU0sRUFBRTtZQUMzQixNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUN6QixDQUFDO0lBRUYsQ0FBQztDQUNEO0FBRUQ7O0FBQ2Usb0JBQVMsR0FBVyxDQUFDO0FBQ3JCLHlCQUFjLEdBQVcsQ0FBQztBQUdaOzs7Ozs7Ozs7Ozs7QUN2Rlc7QUFDSztBQUl2QztJQWVFLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBeUI7UUFDaEQsSUFBSSxJQUFJLEdBQUcsSUFBSSxXQUFXLEVBQUU7UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDO1FBQ2QsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsSUFBSTtRQUM3QixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxJQUFJO1FBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLFVBQVU7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsYUFBYTtRQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxhQUFhO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLGFBQWE7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsTUFBTTtRQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxNQUFNO1FBQzFCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSTtRQUN4QixNQUFNLENBQUMsSUFBSTtJQUNaLENBQUM7Q0FDRDtBQUFBO0FBQUE7QUFFSyxlQUFnQixFQUF5QixFQUFFLElBQWUsRUFBRSxJQUFrQjtJQUNuRixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDWCxJQUFJLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7UUFDaEMsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksWUFBWSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSztZQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNO1FBQzFCLENBQUM7SUFDRixDQUFDO0lBQ0QsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO0FBQ25DLENBQUM7QUFFSyxhQUFlLFNBQVEsa0VBQVE7SUFXcEMsWUFBWSxFQUF5QixFQUFFLElBQWUsRUFBRSxJQUFpQjtRQUN4RSxLQUFLLEVBQUU7UUFDUCxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUU7UUFDWixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUk7UUFDaEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJO1FBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSztRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUs7UUFDbkIsSUFBSSxDQUFDLE1BQU0sRUFBRTtJQUNkLENBQUM7SUFFTyxXQUFXLENBQUMsR0FBaUI7UUFFcEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUk7UUFDdEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUk7UUFDdEIsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUU7UUFFbEIsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLFlBQVksVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsZUFBZSxDQUFNLElBQUksRUFBRSxHQUFHLENBQUM7UUFDckMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1AsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7UUFDakMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksc0RBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksc0RBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlFLEVBQUUsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQztRQUNqQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQzNELEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDOUQsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3ZFLENBQUM7SUFDTCxDQUFDO0lBRU8sZ0JBQWdCLENBQUMsSUFBc0IsRUFBRSxHQUFpQjtRQUNqRSxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSTtRQUN0QixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRTtRQUNsQixFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxFQUMzRCxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUs7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTTtJQUMxQixDQUFDO0lBRU8sZUFBZSxDQUFDLElBQXVCLEVBQUUsR0FBaUI7UUFDakUsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUk7UUFDdEIsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUU7UUFDbEIsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFDOUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQ3BDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7SUFDdEQsQ0FBQztJQUVNLE1BQU07UUFDWixJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDO1FBRWpDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFO1FBQ2xCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJO1FBQ3RCLE1BQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQyxhQUFhLEVBQUU7UUFFOUIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQztRQUU5QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDO1FBQ3RCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLE1BQU0sSUFBSSxLQUFLLENBQUMsNEJBQTRCLENBQUM7UUFDOUMsQ0FBQztRQUVELEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7UUFFL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRztRQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU07SUFDbkIsQ0FBQztJQUVNLE1BQU07UUFDWixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU87SUFDcEIsQ0FBQztJQUVNLE9BQU87UUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU07SUFDbkIsQ0FBQztJQUVNLEtBQUs7UUFDWCxFQUFFO1FBQ0YscUJBQXFCO1FBQ3JCLEVBQUU7UUFDRixNQUFNLElBQUksS0FBSyxDQUFDLDZCQUE2QixDQUFDO0lBQy9DLENBQUM7SUFFTSxJQUFJO1FBQ1YsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7UUFDekIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNoRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUk7SUFDbkIsQ0FBQztJQUVNLE1BQU07UUFDWixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQztRQUMzQixJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLO0lBQ3BCLENBQUM7SUFFTSxPQUFPO1FBQ2IsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUU7UUFDbEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE9BQU8sQ0FBQyxJQUFJLENBQUMsdURBQXVELENBQUM7WUFDckUsTUFBTTtRQUNQLENBQUM7UUFDRCxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLO0lBQ3JCLENBQUM7SUFFTyxZQUFZLENBQUMsRUFBVTtRQUM5QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNsQixNQUFNLElBQUksS0FBSyxDQUFDLHVCQUF1QixFQUFFLGdDQUFnQyxDQUFDO0lBQzVFLENBQUM7SUFDTyxrQkFBa0IsQ0FBQyxFQUFVO1FBQ3BDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLHVCQUF1QixFQUFFLDZDQUE2QyxDQUFDO0lBQ3pGLENBQUM7Q0FFRDtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hMNEM7QUFXN0MsSUFBWSxJQU9YO0FBUEQsV0FBWSxJQUFJO0lBQ2YsK0JBQUk7SUFDSiwrQkFBSTtJQUNKLCtDQUFZO0lBQ1osbUNBQU07SUFDTixxQ0FBTztJQUNQLG1DQUFNO0FBQ1AsQ0FBQyxFQVBXLElBQUksS0FBSixJQUFJLFFBT2Y7QUFFSyxnQkFBaUIsSUFBaUI7SUFDdkMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssRUFBRTtBQUMxQixDQUFDO0FBRUssZ0JBQWlCLElBQWlCO0lBQ3ZDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUM7QUFDekIsQ0FBQztBQUVLLHFCQUFzQixJQUFlO0lBQzFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxPQUFPLElBQUksS0FBSyxTQUFTLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDO1FBQ3JGLE1BQU0sQ0FBQyxJQUFJO0lBQ1osTUFBTSxDQUFDLEtBQUs7QUFDYixDQUFDO0FBRUsseUJBQTBCLElBQWUsRUFBRSxDQUFTO0lBQ3pELEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkIsTUFBTSxDQUFDLEtBQUs7SUFDYixDQUFDO0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUIsTUFBTSxDQUFDLEtBQUs7SUFDYixDQUFDO0lBQ0QsTUFBTSxDQUFDLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7QUFDakQsQ0FBQztBQUVLLG1CQUFvQixJQUFlO0lBQ3hDLE1BQU0sQ0FBQyxJQUFJLFlBQVkseURBQWU7QUFDdkMsQ0FBQztBQUVLLGlCQUFrQixJQUFlO0lBQ3RDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsTUFBTSxDQUFDLElBQUk7SUFDWixNQUFNLENBQUMsS0FBSztBQUNiLENBQUM7QUFFSyx3QkFBeUIsSUFBZTtJQUM3QyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxLQUFLO0lBQ2IsQ0FBQztJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxZQUFZLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QyxNQUFNLENBQUMsS0FBSztJQUNiLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNQLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQztJQUNwQyxDQUFDO0FBQ0YsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUM5RDRDO0FBQ1Y7QUFDYTtBQUVJO0FBQ1o7QUFLeEMsV0FBWSxTQUFRLGtFQUFRO0lBdUIzQixZQUFZLEVBQXlCLEVBQUUsT0FBc0IsRUFBRSxJQUFVLEVBQUUsUUFBMkI7UUFDckcsS0FBSyxFQUFFO1FBQ1AsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFO1FBQ1osSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSTtRQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVE7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyx1REFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsUUFBUSxHQUFHLHVEQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxLQUFLLEdBQUcsdURBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFO1FBQ2YsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGtEQUFNLENBQUMsU0FBUztRQUNyQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUM7UUFFZCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUk7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFO1FBRWxCLElBQUksQ0FBQyxjQUFjLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVNLE9BQU8sQ0FBQyxJQUFVO1FBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSTtJQUNqQixDQUFDO0lBRU0sV0FBVyxDQUFDLFFBQTJCO1FBQzdDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUTtJQUN6QixDQUFDO0lBRU0sV0FBVyxDQUFDLEdBQTBCO1FBQzVDLElBQUksQ0FBQyxRQUFRLEdBQUcsa0RBQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDO0lBQ3hDLENBQUM7SUFFTSxXQUFXLENBQUMsR0FBMEI7UUFDNUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxrREFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7SUFDeEMsQ0FBQztJQUVNLFFBQVEsQ0FBQyxLQUE0QjtRQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLGtEQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztJQUN2QyxDQUFDO0lBRU0sV0FBVyxLQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDLENBQUM7SUFDNUMsV0FBVyxLQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDLENBQUM7SUFDNUMsUUFBUSxLQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUM7SUFFdEMsY0FBYztRQUNwQixJQUFJLEtBQUssR0FBUyxJQUFJLENBQUMsY0FBYyxFQUFFO1FBQ3ZDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxLQUFLO1FBQ2IsSUFBSSxXQUFXLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUU7UUFDcEQsTUFBTSxDQUFDLHVEQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsS0FBSyxDQUFDO0lBQ2pELENBQUM7SUFFTSxjQUFjO1FBQ3BCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTO1FBQzFCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRO1FBQ3ZCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRO1FBQ3ZCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLO1FBRXBCLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO2FBQ3JCLFNBQVMsQ0FBQyxHQUFHLENBQUM7YUFDZCxNQUFNLENBQUMsdURBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDdkMsTUFBTSxDQUFDLHVEQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3ZDLE1BQU0sQ0FBQyx1REFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUN2QyxLQUFLLENBQUMsR0FBRyxDQUFDO2FBQ1YsR0FBRyxFQUFFO0lBQ1IsQ0FBQztJQUVNLFFBQVEsQ0FBQyxLQUFZO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUs7UUFDakMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJO0lBQ3BCLENBQUM7SUFFTSxRQUFRLENBQUMsS0FBWTtRQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssU0FBUztJQUMvQyxDQUFDO0lBRU0sV0FBVyxDQUFDLEtBQVk7UUFDOUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQixNQUFNLElBQUksS0FBSyxDQUFDLFVBQVUsS0FBSyxDQUFDLEtBQUssd0JBQXdCLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQztRQUM3RSxDQUFDO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUztRQUNyQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUk7SUFDcEIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBUSxFQUFFLENBQVE7UUFDL0MsTUFBTSxDQUFDLHdEQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN4QyxDQUFDO0lBRU0sTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFRLEVBQUUsQ0FBUTtRQUM1QyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDckIsTUFBTSxDQUFDLENBQUM7UUFDVCxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU0sTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQVEsRUFBRSxDQUFRO1FBQ3hELElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFD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QUFFLENBQUMsR0FBRyxFQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUcsQ0FBQztRQUMxQixDQUFDLEdBQUcsRUFBRyxHQUFHLEVBQUksR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHO1FBQzVCLENBQUMsR0FBRyxFQUFHLEdBQUcsRUFBSSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUc7UUFDM0IsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUN4QixHQUFHLEVBQUcsR0FBRyxFQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztRQUUzQixDQUFDLEdBQUcsRUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFHLENBQUM7UUFDMUIsQ0FBQyxHQUFHLEVBQUksR0FBRyxFQUFHLEdBQUcsRUFBRSxHQUFHLEVBQUcsR0FBRztRQUMzQixHQUFHLEVBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFHLElBQUksRUFBRSxDQUFDO1FBQzNCLENBQUMsR0FBRyxFQUFJLEdBQUcsRUFBRyxHQUFHLEVBQUUsR0FBRyxFQUFHLEdBQUc7UUFDM0IsR0FBRyxFQUFJLEdBQUcsRUFBRyxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUc7UUFDM0IsR0FBRyxFQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUUxQixDQUFDLEdBQUcsRUFBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUssR0FBRztRQUMzQixHQUFHLEVBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUcsSUFBSSxFQUFFLEdBQUc7UUFDN0IsQ0FBQyxHQUFHLEVBQUcsQ0FBQyxHQUFHLEVBQUcsR0FBRyxFQUFFLENBQUMsRUFBSyxDQUFDO1FBQzFCLENBQUMsR0FBRyxFQUFHLENBQUMsR0FBRyxFQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUssQ0FBQztRQUN6QixHQUFHLEVBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUc7UUFDM0IsR0FBRyxFQUFHLENBQUMsR0FBRyxFQUFHLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUUxQixDQUFDLEdBQUcsRUFBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRyxJQUFJLEVBQUUsR0FBRztRQUM3QixDQUFDLEdBQUcsRUFBRyxDQUFDLEdBQUcsRUFBRyxHQUFHLEVBQUcsSUFBSSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxHQUFHLEVBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRyxHQUFHO1FBQzVCLENBQUMsR0FBRyxFQUFHLENBQUMsR0FBRyxFQUFHLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUMxQixDQUFDLEdBQUcsRUFBSSxHQUFHLEVBQUcsR0FBRyxFQUFFLEdBQUcsRUFBRyxDQUFDO1FBQzFCLENBQUMsR0FBRyxFQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUcsR0FBRztRQUUzQixHQUFHLEVBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFHLEdBQUc7UUFDM0IsR0FBRyxFQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRyxJQUFJLEVBQUUsR0FBRztRQUM1QixHQUFHLEVBQUcsQ0FBQyxHQUFHLEVBQUcsR0FBRyxFQUFHLEdBQUcsRUFBRyxDQUFDO1FBQzFCLENBQUMsRUFBRyxDQUFDLENBQUMsRUFBRyxHQUFHLEVBQUUsR0FBRyxFQUFHLENBQUM7UUFDckIsQ0FBQyxFQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRztRQUNyQixDQUFDLEVBQUksQ0FBQyxFQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQztLQUN2QjtJQUNELE9BQU8sRUFBRSxFQUFFO0NBQ1g7QUFFYSxpQkFBSyxHQUFtQjtJQUNyQyxJQUFJLEVBQUU7UUFDTCxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO1FBQzFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO1FBQ3pDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztRQUN4QyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7UUFDeEMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7UUFDekMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztRQUMxQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7UUFDeEMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztRQUN2QyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztRQUN0QyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztRQUN0QyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO1FBQ3ZDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztRQUN4QyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7UUFDeEMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7UUFDekMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztRQUMxQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO1FBQzFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO1FBQ3pDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7UUFDN0MsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO1FBQzNDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRztRQUM5QyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUc7UUFDeEMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7UUFDNUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO1FBQzNDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUc7UUFDMUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUc7UUFDekMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHO1FBQ3hDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRztRQUN4QyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRztRQUN6QyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHO1FBQzFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMs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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsTUFBTTtBQUNqQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLEtBQUs7QUFDZixVQUFVLEtBQUs7QUFDZjtBQUNBLFlBQVksS0FBSztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVSxLQUFLO0FBQ2YsVUFBVSxLQUFLO0FBQ2Y7QUFDQSxZQUFZLEtBQUs7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNXZCQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FB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LFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtB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LENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNwQyxJQUFJLE1BQU0sR0FBVyxJQUFJLHVEQUFNLEVBQUU7WUFDakMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBVTtZQUVyQyxDQUFDLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7WUFDNUIsQ0FBQyxHQUFHLGlCQUFpQixDQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO1lBQzVCLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQztZQUM1QixDQUFDLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7WUFDNUIsQ0FBQyxHQUFHLGlCQUFpQixDQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO1lBQzVCLEVBQUUsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQztZQUM3QixFQUFFLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7WUFDN0IsRUFBRSxHQUFHLGlCQUFpQixDQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO1lBRTdCLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0MsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxZQUFZLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFaEQsSUFBSSxDQUFDLFNBQVMsQ0FB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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hiQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsTUFBTTtBQUNqQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLE1BQU07QUFDakIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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TztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLFdBQVcsV0FBVztBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLFdBQVcsWUFBWTtBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLFlBQVksWUFBWTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILGVBQWUsWUFBWSxZQUFZO0FBQ3ZDLGVBQWUsWUFBWSxZQUFZO0FBQ3ZDLGVBQWUsWUFBWSxhQUFhOztBQUV4QyxpQkFBaUIsY0FBYyxjQUFjO0FBQzdDLGlCQUFpQixjQUFjLGNBQWM7QUFDN0MsaUJBQWlCLGNBQWMsZUFBZTs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5RUFBeUMsYUFBYTs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGFBQWEsWUFBWSxZQUFZO0FBQ3JDLGFBQWEsWUFBWSxZQUFZO0FBQ3JDLGFBQWEsWUFBWSxhQUFhOztBQUV0QztBQUNBLHNCQUFzQix5QkFBeUI7QUFDL0MsMEJBQTBCLHFCQUFxQjtBQUMvQywwQkFBMEIseUJBQXlCOztBQUVuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlFQUF5QyxhQUFhOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksS0FBSztBQUNqQixZQUFZLEtBQUs7QUFDakIsWUFBWSxLQUFLO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLEtBQUs7QUFDakIsWUFBWSxLQUFLO0FBQ2pCLFlBQVksS0FBSztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFlBQVksS0FBSztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLE1BQU07QUFDakIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEI7QUFDQSxhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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Q0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUFBO0FBQUE7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQUE7QUFBQTs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2puQkQ7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsTUFBTTtBQUNqQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxtQkFBbUIsT0FBTztBQUMxQixvQkFBb0I7QUFDcEI7QUFDQSxvQkFBb0I7QUFDcEI7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUN2a0IrQjtBQUcxQixxQkFBc0IsR0FBc0M7SUFDakUsRUFBRSxDQUFDLENBQUMsR0FBRyxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDMUIsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU07UUFDcEIsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUNiLE1BQU0sSUFBSSxLQUFLLENBQUMsK0JBQStCLEdBQUcsZ0JBQWdCLENBQUM7UUFDcEUsR0FBRyxHQUFHLHVEQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDcEMsR0FBRyxHQUFHLHVEQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQ3pDLENBQUM7SUFDRCxNQUFNLENBQUMsR0FBRztBQUNYLENBQUM7QUFFSyw4QkFBK0IsSUFBMkI7SUFDL0QsRUFBRSxDQUFDLENBQUMsT0FBTSxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDOUIsTUFBTSxDQUFDLElBQUk7SUFDWixDQUFDO0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO0lBQ3BCLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNQLE1BQU0sQ0FBQyx1REFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFDNUIsQ0FBQztBQUNGLENBQUM7Ozs7Ozs7Ozs7O0FDdkIrQjtBQUNNO0FBRWhDO0lBSUwsWUFBWSxPQUFpQix1REFBUSxDQUFDLE1BQU0sRUFBRTtRQUM3QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUk7SUFDakIsQ0FBQztJQUVNLFFBQVE7UUFDZCx1REFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzVCLE1BQU0sQ0FBQyxJQUFJO0lBQ1osQ0FBQztJQUVNLFNBQVMsQ0FBQyxHQUEwQjtRQUMxQyxHQUFHLEdBQUcsNkNBQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDO1FBQzdCLHVEQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7UUFDN0MsTUFBTSxDQUFDLElBQUk7SUFDWixDQUFDO0lBRU0sTUFBTSxDQUFDLEdBQVcsRUFBRSxJQUEyQjtRQUNyRCxJQUFJLEdBQUcsNkNBQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBQy9CLHVEQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxJQUFJO0lBQ1osQ0FBQztJQUVNLEtBQUssQ0FBQyxHQUEwQjtRQUN0QyxHQUFHLEdBQUcsNkNBQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDO1FBQzdCLHVEQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7UUFDekMsTUFBTSxDQUFDLElBQUk7SUFDWixDQUFDO0lBRU0sR0FBRztRQUNULE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTtJQUNqQixDQUFDO0lBRU0sS0FBSztRQUNYLE1BQU0sQ0FBQyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVNLE9BQU87UUFDYixNQUFNLENBQUMsdURBQVEsQ0FBQyxJQUFJLENBQUMsdURBQVEsQ0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25ELENBQUM7Q0FFRDtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUM5QzRDO0FBQ1Q7QUFDRztBQUV2QyxFQUFFO0FBQ0YsWUFBWTtBQUNaLEVBQUU7QUFFRjtJQUlDLFlBQVksSUFBUyxFQUFFLEtBQVUsRUFBRSxTQUFjO1FBQ2hELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSTtRQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUs7UUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTO0lBQzNCLENBQUM7SUFHTSxTQUFTLENBQ2QsSUFBaUMsRUFBRSxHQUFHLElBQVk7UUFDbkQsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7Q0FDRDtBQUlLLGdCQUN5QyxTQUFRLGNBQWM7SUFLcEUsWUFBWSxJQUFPLEVBQUUsS0FBUyxFQUFFLFlBQW9ELFVBQVUsQ0FBQyxHQUFHO1FBQ2pHLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQztRQUo5QixVQUFLLEdBQU8sSUFBSTtRQUNoQixZQUFPLEdBQVksSUFBSTtRQUl0QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUk7UUFDaEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNELFFBQVE7UUFDUCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUs7UUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLO0lBQ2xCLENBQUM7SUFDTSxTQUFTO1FBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLO0lBQ2xCLENBQUM7SUFDRCxRQUFRLENBQUMsS0FBUztRQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSTtJQUNwQixDQUFDO0lBRVMsWUFBWSxDQUFDLFNBQWlEO1FBQ3ZFLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUztJQUMzQixDQUFDO0lBQ1MsUUFBUSxDQUFDLEtBQVM7UUFDM0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztJQUNoRCxDQUFDO0NBQ0Q7QUFBQTtBQUFBO0FBRUssSUFBVyxVQUFVLENBeUIxQjtBQXpCRCxXQUFpQixVQUFVO0lBQzFCLGFBQytDLElBQTJCLEVBQUUsSUFBUSxJQUFHLENBQUM7SUFEeEUsY0FBRyxNQUNxRTtJQUN4RixnQkFDK0MsSUFBMkIsRUFBRSxJQUFRO1FBQ25GLEVBQUUsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxRQUFRLENBQUM7WUFDN0IsTUFBTSxJQUFJLEtBQUssQ0FBQyxjQUFjLElBQUksQ0FBQyxJQUFJLHFCQUFxQixDQUFDO0lBQy9ELENBQUM7SUFKZSxpQkFBTSxTQUlyQjtJQUNELGNBQytDLElBQTJCLEVBQUUsSUFBUTtRQUNuRixFQUFFLENBQUMsQ0FBQyxDQUFDLDJEQUFxQixDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckMsTUFBTSxJQUFJLEtBQUssQ0FBQyxjQUFjLElBQUksQ0FBQyxJQUFJLDZDQUE2QyxDQUFDO1FBQ3RGLENBQUM7SUFDRixDQUFDO0lBTGUsZUFBSSxPQUtuQjtJQUNELHVCQUMrQyxJQUEyQixFQUFFLElBQVE7UUFDbkYsRUFBRSxDQUFDLENBQUMsQ0FBQywyREFBcUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxxREFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvRCxNQUFNLElBQUksS0FBSyxDQUFDLGNBQWMsSUFBSSxDQUFDLElBQUksNERBQTRELENBQUM7UUFDckcsQ0FBQztJQUNGLENBQUM7SUFMZSx3QkFBYSxnQkFLNUI7SUFDRCxpQkFDK0MsSUFBMkIsRUFBRSxJQUFRO1FBQ25GLEVBQUUsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxTQUFTLENBQUM7WUFDOUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxjQUFjLElBQUksQ0FBQyxJQUFJLHNCQUFzQixDQUFDO0lBQ2hFLENBQUM7SUFKZSxrQkFBTyxVQUl0QjtBQUNGLENBQUMsRUF6QmdCLFVBQVUsS0FBVixVQUFVLFFBeUIxQjtBQUVLO0lBR0w7UUFGQSxVQUFLLEdBQXlCLEVBQUU7SUFFakIsQ0FBQztJQUVULEdBQUcsQ0FBQyxHQUFNO1FBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUc7SUFDM0IsQ0FBQztJQUVNLE1BQU07UUFDWixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSztRQUN0QixJQUFJLElBQUksR0FBa0IsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDNUMsSUFBSSxNQUFNLEdBQWEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsRCxNQUFNLENBQUMsTUFBTTtJQUNkLENBQUM7SUFFTSxHQUFHLENBQW1CLEdBQU07UUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssU0FBUztJQUNyQyxDQUFDO0lBRU0sTUFBTSxDQUFtQixHQUFNO1FBQ3JDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQzFCLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxTQUFTLENBQUM7WUFDdEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxvQ0FBb0MsR0FBRyxJQUFJLENBQUM7UUFDN0QsTUFBTSxDQUFDLElBQUk7SUFDWixDQUFDO0NBQ0Q7QUFBQTtBQUFBO0FBRUssa0JBQ2EsU0FBUSxrRUFBUTtJQUdsQyxnQkFBZ0IsS0FBSyxFQUFFLEVBQUMsQ0FBQztJQUVmLFlBQVksQ0FBQyxJQUFTO1FBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztJQUMxQixDQUFDO0lBRVMsYUFBYSxDQUFDLEdBQUcsS0FBaUI7UUFDM0MsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztRQUN4QixDQUFDO0lBQ0YsQ0FBQztJQUVNLFlBQVksQ0FBQyxJQUFPO1FBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFDakMsQ0FBQztJQUVNLG1CQUFtQjtRQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7SUFDaEMsQ0FBQztJQUVNLFlBQVksQ0FBQyxJQUFPO1FBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDcEMsQ0FBQztJQUVTLFNBQVMsQ0FFakIsSUFBaUMsRUFBRSxHQUFHLElBQVc7UUFDbEQsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFFUyxNQUFNLENBR2QsdUJBQW9ELEVBQ3BELG9CQUFpRCxFQUFFLEdBQUcsSUFBVztRQUVsRSxJQUFJLElBQUksR0FBTSxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQzlELEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM3QyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkMsSUFBSSxPQUFPLEdBQUcsbURBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQzVDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDcEYsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDekIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNQLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxtREFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1lBQ3RFLENBQUM7UUFDRixDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUk7SUFDWixDQUFDO0NBQ0Q7QUFBQTtBQUFBOzs7Ozs7Ozs7QUN4S0s7SUFFTCxZQUFZLEdBQUcsSUFBVyxJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFDLENBQUM7SUFFekQsR0FBRyxDQUF1QixJQUFPLEVBQUUsS0FBVztRQUNwRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUs7UUFDMUIsTUFBTSxDQUFDLElBQUk7SUFDWixDQUFDO0NBQ0Q7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNSOEM7QUFDRjtBQUNJO0FBQ0E7QUFDVztBQUNBO0FBRTVELE1BQU0sYUFBYSxHQUFHO0lBQ3JCLDJFQUFLO0lBQ0wsOEZBQVc7SUFDWCw4RkFBVztJQUNYLHdFQUFJO0lBQ0osOEVBQU07SUFDTiw4RUFBTTtDQUNOO0FBRXVCOzs7Ozs7Ozs7O0FDaEJ5RDtBQUVqRixJQUFVLFFBQVEsQ0F1QmpCO0FBdkJELFdBQVUsUUFBUTtJQUNKLGVBQU0sR0FBVzs7Ozs7Ozs7Ozs7O0VBWTdCO0lBQ1ksaUJBQVEsR0FBVzs7Ozs7Ozs7RUFRL0I7QUFDRixDQUFDLEVBdkJTLFFBQVEsS0FBUixRQUFRLFFBdUJqQjtBQUVELE1BQU0sS0FBSyxHQUF3QjtJQUNsQyxPQUFPLEVBQUU7UUFDUjtZQUNDLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTTtZQUN2QixJQUFJLEVBQUUsbUVBQVcsQ0FBQyxNQUFNO1lBQ3hCLFFBQVEsRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxDQUFDO1NBQ3pDO1FBQ0Q7WUFDQyxNQUFNLEVBQUUsUUFBUSxDQUFDLFFBQVE7WUFDekIsSUFBSSxFQUFFLG1FQUFXLENBQUMsUUFBUTtZQUMxQixRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUM7U0FDcEI7S0FDRDtDQUNEO0FBRWU7Ozs7Ozs7Ozs7QUMxQ2lFO0FBRWpGLElBQVUsUUFBUSxDQTBNakI7QUExTUQsV0FBVSxRQUFRO0lBQ0osZUFBTSxHQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbUI3QjtJQUNZLGlCQUFRLEdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW9ML0I7QUFDRixDQUFDLEVBMU1TLFFBQVEsS0FBUixRQUFRLFFBME1qQjtBQUVELE1BQU0sSUFBSSxHQUF3QjtJQUNqQyxPQUFPLEVBQUU7UUFDUjtZQUNDLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTTtZQUN2QixJQUFJLEVBQUUsbUVBQVcsQ0FBQyxNQUFNO1lBQ3hCLFFBQVEsRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxDQUFDO1NBQ3pDO1FBQ0Q7WUFDQyxNQUFNLEVBQUUsUUFBUSxDQUFDLFFBQVE7WUFDekIsSUFBSSxFQUFFLG1FQUFXLENBQUMsUUFBUTtZQUMxQixRQUFRLEVBQUUsQ0FBQyxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU07Z0JBQ3pFLFFBQVEsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixDQUFDO1NBQ3ZEO0tBQ0Q7Q0FDRDtBQUVjOzs7Ozs7Ozs7O0FDOU5rRTtBQUVqRixJQUFVLFFBQVEsQ0FrQ2pCO0FBbENELFdBQVUsUUFBUTtJQUNKLGVBQU0sR0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW1CN0I7SUFDWSxpQkFBUSxHQUFXOzs7Ozs7Ozs7Ozs7RUFZL0I7QUFDRixDQUFDLEVBbENTLFFBQVEsS0FBUixRQUFRLFFBa0NqQjtBQUVELE1BQU0sTUFBTSxHQUF3QjtJQUNuQyxPQUFPLEVBQUU7UUFDUjtZQUNDLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTTtZQUN2QixJQUFJLEVBQUUsbUVBQVcsQ0FBQyxNQUFNO1lBQ3hCLFFBQVEsRUFBRSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUM7U0FDaEM7UUFDRDtZQUNDLE1BQU0sRUFBRSxRQUFRLENBQUMsUUFBUTtZQUN6QixJQUFJLEVBQUUsbUVBQVcsQ0FBQyxRQUFRO1lBQzFCLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQztTQUNwQjtLQUNEO0NBQ0Q7QUFFZ0I7Ozs7Ozs7Ozs7QUNyRCtFO0FBRWhHO0lBQ1EsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUF5QixFQUFFLGFBQWtDO1FBQ2pGLElBQUksT0FBTyxHQUFrQixhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQW9CLEVBQUUsRUFBRTtZQUMvRSxNQUFNLENBQUMsSUFBSSx1REFBTSxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUM7UUFDOUIsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxPQUFPLEdBQWtCLElBQUksOERBQWEsQ0FBQyxFQUFFLENBQUM7UUFDbEQsSUFBSSxDQUFDO1lBQ0osT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQztRQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFDMUIsTUFBTSxDQUFDLElBQUk7UUFDWixDQUFDO1FBQ0QsTUFBTSxDQUFDLE9BQU87SUFDZixDQUFDO0NBQ0Q7QUFFdUI7Ozs7Ozs7Ozs7OztBQ2xCOEI7QUFDVjtBQUNKO0FBSXhDO0lBYUM7UUFYQSxRQUFHLEdBQVcsQ0FBQyxJQUFJO1FBQ25CLFVBQUssR0FBVyxHQUFHO1FBTW5CLGtCQUFhLEdBQVcsR0FBRztRQUMzQix3QkFBbUIsR0FBVyxHQUFHO1FBQ2pDLFdBQU0sR0FBZ0IsSUFBSTtRQUd6QixJQUFJLENBQUMsUUFBUSxHQUFHLHVEQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxFQUFFLEdBQUcsdURBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyx1REFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsS0FBSyxHQUFHLHVEQUFJLENBQUMsTUFBTSxFQUFFO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsdURBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsbUJBQW1CLEVBQUU7SUFDM0IsQ0FBQztJQUVNLGFBQWE7UUFDbkIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJO1FBQ3BDLElBQUksTUFBTSxHQUFTLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsdURBQUksQ0FBQyxNQUFNLEVBQUU7UUFDMUQsSUFBSSxJQUFJLEdBQVMsdURBQUksQ0FBQyxNQUFNLEVBQUU7UUFDOUIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVE7UUFDNUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUs7UUFDdEIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUU7UUFDaEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDZCx1REFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQztRQUNsQyxzREFBVyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQztRQUN2QyxNQUFNLENBQUMsSUFBSTtJQUNaLENBQUM7SUFFTSxNQUFNLENBQUMsS0FBbUM7UUFDaEQsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJO1lBQ2xCLE1BQU07UUFDUCxDQUFDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxrREFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7SUFDeEMsQ0FBQztJQUVNLFdBQVcsQ0FBQyxRQUErQjtRQUNqRCxJQUFJLENBQUMsUUFBUSxHQUFHLGtEQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztJQUM3QyxDQUFDO0lBRU0sUUFBUSxDQUFDLEtBQWE7UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztRQUN2QyxJQUFJLENBQUMsbUJBQW1CLEVBQUU7SUFDM0IsQ0FBQztJQUVNLE1BQU0sQ0FBQyxHQUFXO1FBQ3hCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRztRQUNkLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtJQUMzQixDQUFDO0lBRU0sSUFBSSxDQUFDLFNBQXFCLEVBQUUsRUFBVSxFQUFFLEtBQWM7UUFDNUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDVixLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWE7UUFFM0IsSUFBSSxHQUFHLEdBQVcsS0FBSyxHQUFHLEVBQUU7UUFDNUIsSUFBSSxRQUFRLEdBQVMsdURBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7UUFDbkQsSUFBSSxNQUFNLEdBQUcsdURBQUksQ0FBQyxNQUFNLEVBQUU7UUFDMUIsSUFBSSxNQUFNLEdBQUcsdURBQUksQ0FBQyxNQUFNLEVBQUU7UUFDMUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUs7UUFDdEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUs7UUFDdEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVE7UUFFNUIsdURBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQztRQUN4Qix1REFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLFNBQVMsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQzlCLHVEQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsdURBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN0RSxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLHVEQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsdURB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LFFBQVEsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixDQUFDO1NBQ3ZEO0tBQ0Q7Q0FDRDtBQUVxQiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyNik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYmI3ZWUwNzc0ZWYzMGIzM2QwY2QiLCJpbXBvcnQgKiBhcyB2ZWN0b3IgZnJvbSAnLi92ZWN0b3ItdXRpbCdcbmltcG9ydCAqIGFzIG1hdHJpeCBmcm9tICcuL21hdHJpeC11dGlsJ1xuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi90eXBlLXV0aWwnXG5pbXBvcnQgKiBhcyBhdHRyaWJ1dGUgZnJvbSAnLi9hdHRyaWJ1dGUtdXRpbCdcbmltcG9ydCAqIGFzIGNvbW1vbiBmcm9tICcuL2NvbW1vbi11dGlsJ1xuaW1wb3J0ICogYXMgdGltZSBmcm9tICcuL3RpbWUtdXRpbCdcbmltcG9ydCAqIGFzIGFzc2VydCBmcm9tICcuL2Fzc2VydC11dGlsJ1xuaW1wb3J0ICogYXMgZGVmYXVsdHMgZnJvbSAnLi9kZWZhdWx0LXV0aWwnXG5cbmV4cG9ydCB7XG5cdGFzc2VydCxcblx0ZGVmYXVsdHMsXG5cdHZlY3Rvcixcblx0bWF0cml4LFxuXHR0eXBlcyxcblx0Y29tbW9uLFxuXHRhdHRyaWJ1dGUsXG5cdHRpbWVcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC91dGlsL3V0aWwudHMiLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgZ2wtbWF0cml4IC0gSGlnaCBwZXJmb3JtYW5jZSBtYXRyaXggYW5kIHZlY3RvciBvcGVyYXRpb25zXG4gKiBAYXV0aG9yIEJyYW5kb24gSm9uZXNcbiAqIEBhdXRob3IgQ29saW4gTWFjS2VuemllIElWXG4gKiBAdmVyc2lvbiAyLjQuMFxuICovXG5cbi8qIENvcHlyaWdodCAoYykgMjAxNSwgQnJhbmRvbiBKb25lcywgQ29saW4gTWFjS2VuemllIElWLlxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbmZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG5hbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG5USEUgU09GVFdBUkUuICovXG4vLyBFTkQgSEVBREVSXG5cbmltcG9ydCAqIGFzIGdsTWF0cml4IGZyb20gXCIuL2dsLW1hdHJpeC9jb21tb25cIjtcbmltcG9ydCAqIGFzIG1hdDIgZnJvbSBcIi4vZ2wtbWF0cml4L21hdDJcIjtcbmltcG9ydCAqIGFzIG1hdDJkIGZyb20gXCIuL2dsLW1hdHJpeC9tYXQyZFwiO1xuaW1wb3J0ICogYXMgbWF0MyBmcm9tIFwiLi9nbC1tYXRyaXgvbWF0M1wiO1xuaW1wb3J0ICogYXMgbWF0NCBmcm9tIFwiLi9nbC1tYXRyaXgvbWF0NFwiO1xuaW1wb3J0ICogYXMgcXVhdCBmcm9tIFwiLi9nbC1tYXRyaXgvcXVhdFwiO1xuaW1wb3J0ICogYXMgdmVjMiBmcm9tIFwiLi9nbC1tYXRyaXgvdmVjMlwiO1xuaW1wb3J0ICogYXMgdmVjMyBmcm9tIFwiLi9nbC1tYXRyaXgvdmVjM1wiO1xuaW1wb3J0ICogYXMgdmVjNCBmcm9tIFwiLi9nbC1tYXRyaXgvdmVjNFwiO1xuXG5leHBvcnQge1xuICBnbE1hdHJpeCxcbiAgbWF0MiwgbWF0MmQsIG1hdDMsIG1hdDQsXG4gIHF1YXQsXG4gIHZlYzIsIHZlYzMsIHZlYzQsXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dsLW1hdHJpeC9zcmMvZ2wtbWF0cml4LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIENvcHlyaWdodCAoYykgMjAxNSwgQnJhbmRvbiBKb25lcywgQ29saW4gTWFjS2VuemllIElWLlxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbmZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG5hbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG5USEUgU09GVFdBUkUuICovXG5cbi8qKlxuICogQ29tbW9uIHV0aWxpdGllc1xuICogQG1vZHVsZSBnbE1hdHJpeFxuICovXG5cbi8vIENvbmZpZ3VyYXRpb24gQ29uc3RhbnRzXG5leHBvcnQgY29uc3QgRVBTSUxPTiA9IDAuMDAwMDAxO1xuZXhwb3J0IGxldCBBUlJBWV9UWVBFID0gKHR5cGVvZiBGbG9hdDMyQXJyYXkgIT09ICd1bmRlZmluZWQnKSA/IEZsb2F0MzJBcnJheSA6IEFycmF5O1xuZXhwb3J0IGNvbnN0IFJBTkRPTSA9IE1hdGgucmFuZG9tO1xuXG4vKipcbiAqIFNldHMgdGhlIHR5cGUgb2YgYXJyYXkgdXNlZCB3aGVuIGNyZWF0aW5nIG5ldyB2ZWN0b3JzIGFuZCBtYXRyaWNlc1xuICpcbiAqIEBwYXJhbSB7VHlwZX0gdHlwZSBBcnJheSB0eXBlLCBzdWNoIGFzIEZsb2F0MzJBcnJheSBvciBBcnJheVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0TWF0cml4QXJyYXlUeXBlKHR5cGUpIHtcbiAgQVJSQVlfVFlQRSA9IHR5cGU7XG59XG5cbmNvbnN0IGRlZ3JlZSA9IE1hdGguUEkgLyAxODA7XG5cbi8qKlxuICogQ29udmVydCBEZWdyZWUgVG8gUmFkaWFuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGEgQW5nbGUgaW4gRGVncmVlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gdG9SYWRpYW4oYSkge1xuICByZXR1cm4gYSAqIGRlZ3JlZTtcbn1cblxuLyoqXG4gKiBUZXN0cyB3aGV0aGVyIG9yIG5vdCB0aGUgYXJndW1lbnRzIGhhdmUgYXBwcm94aW1hdGVseSB0aGUgc2FtZSB2YWx1ZSwgd2l0aGluIGFuIGFic29sdXRlXG4gKiBvciByZWxhdGl2ZSB0b2xlcmFuY2Ugb2YgZ2xNYXRyaXguRVBTSUxPTiAoYW4gYWJzb2x1dGUgdG9sZXJhbmNlIGlzIHVzZWQgZm9yIHZhbHVlcyBsZXNzXG4gKiB0aGFuIG9yIGVxdWFsIHRvIDEuMCwgYW5kIGEgcmVsYXRpdmUgdG9sZXJhbmNlIGlzIHVzZWQgZm9yIGxhcmdlciB2YWx1ZXMpXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGEgVGhlIGZpcnN0IG51bWJlciB0byB0ZXN0LlxuICogQHBhcmFtIHtOdW1iZXJ9IGIgVGhlIHNlY29uZCBudW1iZXIgdG8gdGVzdC5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSBudW1iZXJzIGFyZSBhcHByb3hpbWF0ZWx5IGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHMoYSwgYikge1xuICByZXR1cm4gTWF0aC5hYnMoYSAtIGIpIDw9IEVQU0lMT04qTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhKSwgTWF0aC5hYnMoYikpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2wtbWF0cml4L3NyYy9nbC1tYXRyaXgvY29tbW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIGdsbSBmcm9tICdnbC1tYXRyaXgnXG5pbXBvcnQgeyB2ZWN0b3IsIHR5cGVzIH0gZnJvbSAnLi4vdXRpbC91dGlsJ1xuXG5leHBvcnQgZnVuY3Rpb24gY2xhbXA8VCBleHRlbmRzIEZsb2F0MzJBcnJheT4odmFsOiBULCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiB2b2lkIHtcblx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHZhbC5sZW5ndGg7IGkrKykge1xuXHRcdGlmICh2YWxbaV0gPCBtaW4pIHZhbFtpXSA9IG1pblxuXHRcdGlmICh2YWxbaV0gPiBtYXgpIHZhbFtpXSA9IG1heFxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduZWRDbGFtcDxUIGV4dGVuZHMgRmxvYXQzMkFycmF5Pih2YWw6IFQsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IHZvaWQge1xuXHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdmFsLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IF92YWwgPSB2YWxbaV1cblx0XHRsZXQgc2lnbiA9IF92YWwgPCAwID8gLTEgOiAxXG5cdFx0aWYgKE1hdGguYWJzKF92YWwpIDwgbWluKSB7XG5cdFx0XHR2YWxbaV0gPSBtaW4gKiBzaWduXG5cdFx0fVxuXHRcdGlmIChNYXRoLmFicyhfdmFsKSA+IG1heCkge1xuXHRcdFx0dmFsW2ldID0gbWF4ICogc2lnblxuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWJzPFQgZXh0ZW5kcyBGbG9hdDMyQXJyYXk+KHZhbDogVCk6IHZvaWQge1xuXHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdmFsLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFsW2ldID0gTWF0aC5hYnModmFsW2ldKVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYWRpYW5zKHZhbDogbnVtYmVyKTogbnVtYmVyIHtcblx0cmV0dXJuIGdsbS5nbE1hdHJpeC50b1JhZGlhbih2YWwpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZWNzdW08VCBleHRlbmRzIHR5cGVzLnZlY3Rvcj4oYXJyOiBBcnJheTxUPik6IFQge1xuXHRpZiAoYXJyLmxlbmd0aCA9PT0gMClcblx0XHRyZXR1cm4gbnVsbFxuXHRsZXQgcmVzOiB0eXBlcy52ZWN0b3Jcblx0aWYgKGFyclswXS5sZW5ndGggPT09IDIpIHtcblx0XHRyZXMgPSBnbG0udmVjMi5mcm9tVmFsdWVzKDAsIDApXG5cdH0gZWxzZSBpZiAoYXJyWzBdLmxlbmd0aCA9PT0gMykge1xuXHRcdHJlcyA9IGdsbS52ZWMzLmZyb21WYWx1ZXMoMCwgMCwgMClcblx0fVxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuXHRcdGZvciAobGV0IGogPSAwOyBqIDwgcmVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRyZXNbal0gKz0gYXJyW2ldW2pdXG5cdFx0fVxuXHR9XG5cdHJldHVybiA8VD5yZXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlY21lYW48VCBleHRlbmRzIHR5cGVzLnZlY3Rvcj4oYXJyOiBBcnJheTxUPik6IFQge1xuXHRsZXQgc3VtID0gdmVjc3VtKGFycilcblx0aWYgKHN1bSA9PT0gbnVsbClcblx0XHRyZXR1cm4gbnVsbFxuXHRsZXQgbWVhbiA9IHN1bVxuXHRmb3IgKGxldCBpID0gMDsgaSA8IG1lYW4ubGVuZ3RoOyBpKyspIHtcblx0XHRtZWFuW2ldIC89IGFyci5sZW5ndGhcblx0fVxuXHRyZXR1cm4gPFQ+bWVhblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzdGFuY2UoYTogZ2xtLnZlYzIsIGI6IGdsbS52ZWMyKTogbnVtYmVyIHtcblx0cmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhiWzBdLWFbMF0sIDIpICsgTWF0aC5wb3coYlsxXS1hWzFdLCAyKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1heChhcnI6IEFycmF5PG51bWJlcj4pIHtcblx0bGV0IG1heCA9IC1JbmZpbml0eVxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuXHRcdGlmIChhcnJbaV0gPiBtYXgpIG1heCA9IGFycltpXVxuXHR9XG5cdHJldHVybiBtYXhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1pbihhcnI6IEFycmF5PG51bWJlcj4pIHtcblx0bGV0IG1pbiA9IEluZmluaXR5XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYgKGFycltpXSA8IG1pbikgbWluID0gYXJyW2ldXG5cdH1cblx0cmV0dXJuIG1pblxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQb3cyKG46IG51bWJlcikge1xuXHRpZiAobiA9PT0gMClcblx0XHRyZXR1cm4gZmFsc2Vcblx0d2hpbGUgKG4gIT09IDEpIHtcblx0XHRpZiAobiAlIDIgIT09IDApXG5cdFx0XHRyZXR1cm4gZmFsc2Vcblx0XHRuID0gbiAvIDJcblx0fVxuXHRyZXR1cm4gdHJ1ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9va0F0KG91dDogZ2xtLm1hdDQsIGV5ZTogZ2xtLnZlYzMsIGNlbnRlcjogZ2xtLnZlYzMsIHVwOiBnbG0udmVjMyk6IGdsbS5tYXQ0IHtcblx0bGV0IHgwLCB4MSwgeDIsIHkwLCB5MSwgeTIsIHowLCB6MSwgejIsIGxlbjtcblx0bGV0IGV5ZXggPSBleWVbMF07XG5cdGxldCBleWV5ID0gZXllWzFdO1xuXHRsZXQgZXlleiA9IGV5ZVsyXTtcblx0bGV0IHVweCA9IHVwWzBdO1xuXHRsZXQgdXB5ID0gdXBbMV07XG5cdGxldCB1cHogPSB1cFsyXTtcblx0bGV0IGNlbnRlcnggPSBjZW50ZXJbMF07XG5cdGxldCBjZW50ZXJ5ID0gY2VudGVyWzFdO1xuXHRsZXQgY2VudGVyeiA9IGNlbnRlclsyXTtcblxuXHRpZiAoTWF0aC5hYnMoZXlleCAtIGNlbnRlcngpIDwgZ2xtLmdsTWF0cml4LkVQU0lMT04gJiZcblx0ICBcdE1hdGguYWJzKGV5ZXkgLSBjZW50ZXJ5KSA8IGdsbS5nbE1hdHJpeC5FUFNJTE9OICYmXG5cdCAgXHRNYXRoLmFicyhleWV6IC0gY2VudGVyeikgPCBnbG0uZ2xNYXRyaXguRVBTSUxPTikge1xuXHRcdHJldHVybiBnbG0ubWF0NC5pZGVudGl0eShvdXQpXG5cdH1cblxuXHR6MCA9IGV5ZXggLSBjZW50ZXJ4O1xuXHR6MSA9IGV5ZXkgLSBjZW50ZXJ5O1xuXHR6MiA9IGV5ZXogLSBjZW50ZXJ6O1xuXG5cdGxlbiA9IDEgLyBNYXRoLnNxcnQoejAgKiB6MCArIHoxICogejEgKyB6MiAqIHoyKTtcblx0ejAgKj0gbGVuO1xuXHR6MSAqPSBsZW47XG5cdHoyICo9IGxlbjtcblxuXHR4MCA9IHVweSAqIHoyIC0gdXB6ICogejE7XG5cdHgxID0gdXB6ICogejAgLSB1cHggKiB6Mjtcblx0eDIgPSB1cHggKiB6MSAtIHVweSAqIHowO1xuXHRsZW4gPSBNYXRoLnNxcnQoeDAgKiB4MCArIHgxICogeDEgKyB4MiAqIHgyKTtcblx0aWYgKCFsZW4pIHtcblx0eDAgPSAwO1xuXHR4MSA9IDA7XG5cdHgyID0gMDtcblx0fSBlbHNlIHtcblx0bGVuID0gMSAvIGxlbjtcblx0eDAgKj0gbGVuO1xuXHR4MSAqPSBsZW47XG5cdHgyICo9IGxlbjtcblx0fVxuXG5cdHkwID0gejEgKiB4MiAtIHoyICogeDE7XG5cdHkxID0gejIgKiB4MCAtIHowICogeDI7XG5cdHkyID0gejAgKiB4MSAtIHoxICogeDA7XG5cblx0bGVuID0gTWF0aC5zcXJ0KHkwICogeTAgKyB5MSAqIHkxICsgeTIgKiB5Mik7XG5cdGlmICghbGVuKSB7XG5cdFx0eTAgPSAwO1xuXHRcdHkxID0gMDtcblx0XHR5MiA9IDA7XG5cdH0gZWxzZSB7XG5cdFx0bGVuID0gMSAvIGxlbjtcblx0XHR5MCAqPSBsZW47XG5cdFx0eTEgKj0gbGVuO1xuXHRcdHkyICo9IGxlbjtcblx0fVxuXG5cdG91dFswXSA9IHgwO1xuXHRvdXRbMV0gPSB5MDtcblx0b3V0WzJdID0gejA7XG5cdG91dFszXSA9IDA7XG5cdG91dFs0XSA9IHgxO1xuXHRvdXRbNV0gPSB5MTtcblx0b3V0WzZdID0gejE7XG5cdG91dFs3XSA9IDA7XG5cdG91dFs4XSA9IHgyO1xuXHRvdXRbOV0gPSB5Mjtcblx0b3V0WzEwXSA9IHoyO1xuXHRvdXRbMTFdID0gMDtcblx0b3V0WzEyXSA9IC0oeDAgKiBleWV4ICsgeDEgKiBleWV5ICsgeDIgKiBleWV6KTtcblx0b3V0WzEzXSA9IC0oeTAgKiBleWV4ICsgeTEgKiBleWV5ICsgeTIgKiBleWV6KTtcblx0b3V0WzE0XSA9IC0oejAgKiBleWV4ICsgejEgKiBleWV5ICsgejIgKiBleWV6KTtcblx0b3V0WzE1XSA9IDE7XG5cblx0cmV0dXJuIG91dDtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC9tYXRoL3dnbC1tYXRoLnRzIiwiaW1wb3J0IHsgbWF0NCwgdmVjMyB9IGZyb20gJ2dsLW1hdHJpeCdcbmltcG9ydCB7IFJlc291cmNlIH0gZnJvbSAnLi4vY29tbW9uL3Jlc291cmNlJ1xuaW1wb3J0IHsgdmVjdG9yLCB0eXBlcyB9IGZyb20gJy4uL3V0aWwvdXRpbCdcbmltcG9ydCB7IFVuaWZvcm1OYW1lcywgVW5pZm9ybU1hcCB9IGZyb20gJy4vdW5pZm9ybXMnXG5pbXBvcnQgKiBhcyB0ZXh0dXJlIGZyb20gJy4uL3RleHR1cmUvdGV4dHVyZSdcblxudHlwZSBMb2NhdGlvbk1hcHBhYmxlID0ge1xuXHRba2V5OiBzdHJpbmddOiBXZWJHTFVuaWZvcm1Mb2NhdGlvblxufVxuXG5leHBvcnQgdHlwZSBVbmlmb3JtU2V0dGFibGUgPSBudW1iZXIgfCBib29sZWFuIHwgbWF0NCB8IHZlYzMgfCBBcnJheTxudW1iZXI+IHwgdGV4dHVyZS5UZXh0dXJlXG5cbmVudW0gU2hhZGVyVHlwZXMge1xuXHRWRVJURVgsXG5cdEZSQUdNRU5UXG59XG5cbnR5cGUgU2hhZGVyU291cmNlID0ge1xuXHRzb3VyY2U6IHN0cmluZyxcblx0dHlwZTogU2hhZGVyVHlwZXMsXG5cdHVuaWZvcm1zOiBVbmlmb3JtTmFtZXNbXVxufVxuXG50eXBlIFNoYWRlclByb2dyYW1Tb3VyY2UgPSB7XG5cdHNvdXJjZXM6IEFycmF5PFNoYWRlclNvdXJjZT5cbn1cblxudHlwZSBTaGFkZXJBdHRyaWJ1dGUgPSB7XG5cdG5hbWU6IHN0cmluZyxcblx0bG9jYXRpb246IG51bWJlclxufVxuXG50eXBlIFNoYWRlckF0dHJpYnV0ZUtpbmRzID0gJ3Bvc2l0aW9uJyB8ICd1dicgfCAnbm9ybWFsJ1xudHlwZSBTaGFkZXJDb3JlVW5pZm9ybUtpbmRzID0gJ21vZGVsJyB8ICd2aWV3JyB8ICdwcm9qZWN0aW9uJyB8ICdjYW1lcmFfcG9zaXRpb24nXG5cbmNsYXNzIFNoYWRlckF0dHJpYnV0ZXMge1xuXG5cdFtrZXk6IHN0cmluZ106IFNoYWRlckF0dHJpYnV0ZVxuXG5cdHBvc2l0aW9uOiBTaGFkZXJBdHRyaWJ1dGVcblx0dXY6IFNoYWRlckF0dHJpYnV0ZVxuXHRub3JtYWw6IFNoYWRlckF0dHJpYnV0ZVxuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMucG9zaXRpb24gPSB7XG5cdFx0XHRuYW1lOiAnaW5fcG9zaXRpb24nLFxuXHRcdFx0bG9jYXRpb246IG51bGxcblx0XHR9XG5cdFx0dGhpcy51diA9IHtcblx0XHRcdG5hbWU6ICdpbl91dicsXG5cdFx0XHRsb2NhdGlvbjogbnVsbFxuXHRcdH1cblx0XHR0aGlzLm5vcm1hbCA9IHtcblx0XHRcdG5hbWU6ICdpbl9ub3JtYWwnLFxuXHRcdFx0bG9jYXRpb246IG51bGxcblx0XHR9XG5cdH1cbn1cblxuY2xhc3MgU2hhZGVyIGV4dGVuZHMgUmVzb3VyY2Uge1xuXG5cdHByaXZhdGUgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuXHRwcml2YXRlIHNvdXJjZTogc3RyaW5nXG5cdHByaXZhdGUgdHlwZTogbnVtYmVyXG5cdHByaXZhdGUgc2hhZGVyPzogV2ViR0xTaGFkZXJcblx0cHJpdmF0ZSB1bmlmb3JtczogVW5pZm9ybU1hcDxib29sZWFuPlxuXG5cdHB1YmxpYyBpc1ZhbGlkOiBib29sZWFuXG5cblx0Y29uc3RydWN0b3IoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCwgc3JjOiBTaGFkZXJTb3VyY2UpIHtcblx0XHRzdXBlcigpXG5cdFx0dGhpcy5nbCA9IGdsXG5cdFx0dGhpcy5zb3VyY2UgPSBzcmMuc291cmNlXG5cdFx0dGhpcy50eXBlID0gU2hhZGVyLmdldFNoYWRlclR5cGUoZ2wsIHNyYy50eXBlKVxuXHRcdHRoaXMuaXNWYWxpZCA9IHRydWVcblx0XHR0aGlzLnVuaWZvcm1zID0gbmV3IFVuaWZvcm1NYXAoc3JjLnVuaWZvcm1zLCB0cnVlKVxuXHRcdHRoaXMuc2V0dXAoKVxuXHR9XG5cblx0cHVibGljIGdldEdMU2hhZGVyKCk6IFdlYkdMU2hhZGVyIHtcblx0XHRyZXR1cm4gdGhpcy5zaGFkZXJcblx0fVxuXG5cdHB1YmxpYyBoYXNVbmlmb3JtKG5hbWU6IFVuaWZvcm1OYW1lcyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnVuaWZvcm1zLmhhc1VuaWZvcm0obmFtZSlcblx0fVxuXG5cdHByaXZhdGUgc2V0dXAoKTogdm9pZCB7XG5cdFx0Y29uc3QgZ2wgPSB0aGlzLmdsXG5cdFx0bGV0IHNoYWRlcjogV2ViR0xTaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIodGhpcy50eXBlKVxuXHRcdGdsLnNoYWRlclNvdXJjZShzaGFkZXIsIHRoaXMuc291cmNlKVxuXHRcdGdsLmNvbXBpbGVTaGFkZXIoc2hhZGVyKVxuXHRcdGlmICghZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgZ2wuQ09NUElMRV9TVEFUVVMpKSB7XG5cdFx0XHRsZXQgbWVzc2FnZTogc3RyaW5nID0gJ1NoYWRlciBjb21waWxhdGlvbiBlcnJvcjogJyArIFxuXHRcdFx0XHRnbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcilcblx0XHRcdGNvbnNvbGUuZXJyb3IobWVzc2FnZSlcblx0XHRcdGdsLmRlbGV0ZVNoYWRlcihzaGFkZXIpXG5cdFx0XHRzaGFkZXIgPSBudWxsXG5cdFx0XHR0aGlzLmlzVmFsaWQgPSBmYWxzZVxuXHQgIFx0fVxuXHQgIFx0dGhpcy5zaGFkZXIgPSBzaGFkZXJcblx0fVxuXG5cdHByaXZhdGUgc3RhdGljIGdldFNoYWRlclR5cGUoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCwgdHlwZTogU2hhZGVyVHlwZXMpOiBudW1iZXIge1xuXHRcdGlmICh0eXBlID09IFNoYWRlclR5cGVzLkZSQUdNRU5UKVxuXHRcdFx0cmV0dXJuIGdsLkZSQUdNRU5UX1NIQURFUlxuXHRcdGlmICh0eXBlID09IFNoYWRlclR5cGVzLlZFUlRFWClcblx0XHRcdHJldHVybiBnbC5WRVJURVhfU0hBREVSXG5cdFx0dGhyb3cgbmV3IEVycm9yKCdVbnJlY29nbml6ZWQgc2hhZGVyIHR5cGUuJylcblx0fVxufVxuXG4vL1xuLy9cdHByb2dyYW1cbi8vXG5cbmNsYXNzIFNoYWRlclByb2dyYW0gZXh0ZW5kcyBSZXNvdXJjZSB7XG5cblx0cHJpdmF0ZSBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0XG5cdHByaXZhdGUgc2hhZGVyczogQXJyYXk8U2hhZGVyPlxuXHRwcml2YXRlIHByb2dyYW0/OiBXZWJHTFByb2dyYW1cblx0cHJpdmF0ZSBhdHRyaWJ1dGVzOiBTaGFkZXJBdHRyaWJ1dGVzXG5cdHByaXZhdGUgX2lzQm91bmQ6IGJvb2xlYW4gPSBmYWxzZVxuXHRwcml2YXRlIHVuaWZvcm1Mb2NhdGlvbnM6IExvY2F0aW9uTWFwcGFibGUgPSB7fVxuXG5cdHB1YmxpYyBpc1ZhbGlkOiBib29sZWFuID0gdHJ1ZVxuXHRwdWJsaWMgaXNGaW5hbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZVxuXG5cdGNvbnN0cnVjdG9yKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQpIHtcblx0XHRzdXBlcigpXG5cdFx0dGhpcy5hdHRyaWJ1dGVzID0gbmV3IFNoYWRlckF0dHJpYnV0ZXMoKVxuXHRcdHRoaXMuZ2wgPSBnbFxuXHR9XG5cblx0cHVibGljIGF0dGFjaChzaGFkZXJzOiBBcnJheTxTaGFkZXI+KSB7XG5cdFx0dGhpcy5hc3NlcnROb3RGaW5hbGl6ZWQoJ2F0dGFjaCcpXG5cdFx0Zm9yIChsZXQgc2hhZGVyIG9mIHNoYWRlcnMpIHtcblx0XHRcdGlmICghc2hhZGVyLmlzVmFsaWQpXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignQXR0ZW1wdGVkIHRvIGF0dGFjaCBhbiBpbnZhbGlkIHNoYWRlci4nKVxuXHRcdH1cblx0XHR0aGlzLnNoYWRlcnMgPSBzaGFkZXJzXG5cdFx0dGhpcy5maW5hbGl6ZSgpXG5cdFx0dGhpcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbnMoKVxuXHR9XG5cblx0cHVibGljIGJpbmQoKTogdm9pZCB7XG5cdFx0dGhpcy5hc3NlcnRGaW5hbGl6ZWQoJ2JpbmQnKVxuXHRcdHRoaXMuZ2wudXNlUHJvZ3JhbSh0aGlzLnByb2dyYW0pXG5cdFx0dGhpcy5faXNCb3VuZCA9IHRydWVcblx0fVxuXG5cdHB1YmxpYyB1bmJpbmQoKTogdm9pZCB7XG5cdFx0dGhpcy5hc3NlcnRGaW5hbGl6ZWQoJ3VuYmluZCcpXG5cdFx0dGhpcy5nbC51c2VQcm9ncmFtKG51bGwpXG5cdFx0dGhpcy5faXNCb3VuZCA9IGZhbHNlXG5cdH1cblxuXHRwdWJsaWMgaGFzVW5pZm9ybShuYW1lOiBVbmlmb3JtTmFtZXMpIHtcblx0XHRmb3IgKGxldCBzaGFkZXIgb2YgdGhpcy5zaGFkZXJzKSB7XG5cdFx0XHRpZiAoc2hhZGVyLmhhc1VuaWZvcm0obmFtZSkpXG5cdFx0XHRcdHJldHVybiB0cnVlXG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZVxuXHR9XG5cblx0cHVibGljIGlzQm91bmQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuX2lzQm91bmRcblx0fVxuXG5cdHB1YmxpYyBzZXRVbmlmb3JtKG5hbWU6IHN0cmluZywgdmFsdWU6IFVuaWZvcm1TZXR0YWJsZSkge1xuXHRcdGlmICh0eXBlb2YodmFsdWUpID09ICdudW1iZXInKSB7XG5cdFx0XHR0aGlzLnNldGYobmFtZSwgdmFsdWUpXG5cblx0XHR9IGVsc2UgaWYgKHR5cGVvZih2YWx1ZSkgPT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHR0aGlzLnNldGIobmFtZSwgdmFsdWUpXG5cblx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG5cdFx0XHR0aGlzLnNldFZlYzNmKG5hbWUsIHZhbHVlKVxuXG5cdFx0fSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIHRleHR1cmUuVGV4dHVyZSkge1xuXHRcdFx0dGhpcy5zZXRpKG5hbWUsIHZhbHVlLmluZGV4KVxuXG5cdFx0fSBlbHNlIGlmICh0eXBlcy5pc01hdDQodmFsdWUpKSB7XG5cdFx0XHR0aGlzLnNldE1hdDRmKG5hbWUsIHZhbHVlKVxuXG5cdFx0fSBlbHNlIGlmICh0eXBlcy5pc1ZlYzModmFsdWUpKSB7XG5cdFx0XHR0aGlzLnNldFZlYzNmKG5hbWUsIHZhbHVlKVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgc2V0ZihuYW1lOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmdsLnVuaWZvcm0xZih0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbihuYW1lKSwgdmFsdWUpXG5cdH1cblxuXHRwcml2YXRlIHNldGIobmFtZTogc3RyaW5nLCB2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuZ2wudW5pZm9ybTFpKHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9uKG5hbWUpLCB2YWx1ZSA/IDEgOiAwKVxuXHR9XG5cblx0cHVibGljIHNldGkobmFtZTogc3RyaW5nLCB2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5nbC51bmlmb3JtMWkodGhpcy5nZXRVbmlmb3JtTG9jYXRpb24obmFtZSksIHZhbHVlKVxuXHR9XG5cblx0cHJpdmF0ZSBzZXRNYXQ0ZihuYW1lOiBzdHJpbmcsIHZhbHVlOiBtYXQ0KSB7XG5cdFx0dGhpcy5nbC51bmlmb3JtTWF0cml4NGZ2KHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9uKG5hbWUpLCBmYWxzZSwgdmFsdWUpXG5cdH1cblxuXHRwcml2YXRlIHNldFZlYzNmKG5hbWU6IHN0cmluZywgdmFsdWU6IHZlYzMgfCBBcnJheTxudW1iZXI+IHwgbnVtYmVyKSB7XG5cdFx0dmFsdWUgPSB2ZWN0b3IucmVxdWlyZVZlYzModmFsdWUpXG5cdFx0dGhpcy5nbC51bmlmb3JtM2Z2KHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9uKG5hbWUpLCB2YWx1ZSlcblx0fVxuXG5cdHByaXZhdGUgZmluYWxpemUoKTogdm9pZCB7XG5cdFx0dGhpcy5hc3NlcnROb3RGaW5hbGl6ZWQoJ2ZpbmFsaXplJylcblx0XHRjb25zdCBnbCA9IHRoaXMuZ2xcblx0XHRjb25zdCBzaGFkZXJzID0gdGhpcy5zaGFkZXJzXG5cdFx0bGV0IHByb2dyYW06IFdlYkdMUHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKVxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBzaGFkZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgc2hhZGVyc1tpXS5nZXRHTFNoYWRlcigpKVxuXHRcdH1cblx0XHRnbC5saW5rUHJvZ3JhbShwcm9ncmFtKVxuXHRcdGlmICghZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBnbC5MSU5LX1NUQVRVUykpIHtcblx0XHRcdGxldCBtZXNzYWdlOiBzdHJpbmcgPSAnU2hhZGVyIHByb2dyYW0gaW5pdGlhbGl6YXRpb24gZXJyb3I6ICcgKyBcblx0XHRcdFx0Z2wuZ2V0UHJvZ3JhbUluZm9Mb2cocHJvZ3JhbSlcbiAgICBcdFx0Y29uc29sZS5lcnJvcihtZXNzYWdlKVxuICAgIFx0XHRwcm9ncmFtID0gbnVsbFxuICAgIFx0XHR0aGlzLmlzVmFsaWQgPSBmYWxzZVxuICBcdFx0fVxuICBcdFx0dGhpcy5wcm9ncmFtID0gcHJvZ3JhbVxuICBcdFx0dGhpcy5pc0ZpbmFsaXplZCA9IHRydWVcblx0fVxuXG5cdHB1YmxpYyBnZXRBdHRyaWJ1dGVMb2NhdGlvbihraW5kOiBTaGFkZXJBdHRyaWJ1dGVLaW5kcyk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuYXR0cmlidXRlc1traW5kXS5sb2NhdGlvblxuXHR9XG5cblx0cHJpdmF0ZSBnZXRBdHRyaWJ1dGVMb2NhdGlvbnMoKTogdm9pZCB7XG5cdFx0bGV0IGF0dHJpYnV0ZXMgPSB0aGlzLmF0dHJpYnV0ZXNcblx0XHRjb25zdCBnbCA9IHRoaXMuZ2xcblx0XHRjb25zdCBwcm9ncmFtID0gdGhpcy5wcm9ncmFtXG5cdFx0Ly9cblx0XHQvL1x0QFRPRE86IEF2b2lkIHN0cmluZyBpbmRleGluZyBpbnRvIGF0dHJpYnV0ZXNcblx0XHQvL1xuXHRcdGxldCBhdHRyaWJOYW1lczogQXJyYXk8c3RyaW5nPiA9IE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpXG5cdFx0Zm9yIChsZXQgYXR0cmliIG9mIGF0dHJpYk5hbWVzKSB7XG5cdFx0XHRhdHRyaWJ1dGVzW2F0dHJpYl0ubG9jYXRpb24gPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCBhdHRyaWJ1dGVzW2F0dHJpYl0ubmFtZSlcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgZ2V0UHJvZ3JhbSgpOiBXZWJHTFByb2dyYW0ge1xuXHRcdHJldHVybiB0aGlzLnByb2dyYW1cblx0fVxuXG5cdHByaXZhdGUgZ2V0VW5pZm9ybUxvY2F0aW9uKG5hbWU6IHN0cmluZyk6IFdlYkdMVW5pZm9ybUxvY2F0aW9uIHtcblx0XHR0aGlzLmFzc2VydEZpbmFsaXplZCgndW5pZm9ybScpXG5cdFx0bGV0IGxvYzogV2ViR0xVbmlmb3JtTG9jYXRpb24gPSB0aGlzLnVuaWZvcm1Mb2NhdGlvbnNbbmFtZV1cblx0XHRpZiAobG9jID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGxvYyA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgbmFtZSlcblx0XHRcdGlmIChsb2MgPT0gbnVsbCkge1xuXHRcdFx0XHRjb25zb2xlLndhcm4oYFVucmVjb2duaXplZCB1bmlmb3JtIG5hbWUgXCIke25hbWV9XCIuYClcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMudW5pZm9ybUxvY2F0aW9uc1tuYW1lXSA9IGxvY1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gbG9jXG5cdH1cblxuXHRwcml2YXRlIGFzc2VydE5vdEZpbmFsaXplZChvcDogc3RyaW5nKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaXNGaW5hbGl6ZWQpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBjYWxsIG1ldGhvZCAvIG9wIFwiJHtvcH1cIiBhZnRlciBmaW5hbGl6aW5nIHRoZSBwcm9ncmFtLmApXG5cdH1cblxuXHRwcml2YXRlIGFzc2VydEZpbmFsaXplZChvcDogc3RyaW5nKTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLmlzRmluYWxpemVkKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgY2FsbCBtZXRob2QgLyBvcCBcIiR7b3B9XCIgYmVmb3JlIGZpbmFsaXppbmcgdGhlIHByb2dyYW0uYClcblx0fVxufVxuXG5leHBvcnQgeyBcblx0U2hhZGVyLCBcblx0U2hhZGVyUHJvZ3JhbSwgXG5cdFNoYWRlclNvdXJjZSwgXG5cdFNoYWRlclByb2dyYW1Tb3VyY2UsIFxuXHRTaGFkZXJUeXBlcyxcblx0U2hhZGVyQXR0cmlidXRlS2luZHMsXG5cdFNoYWRlckNvcmVVbmlmb3JtS2luZHNcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC9zaGFkZXIvc2hhZGVyLnRzIiwiaW1wb3J0IHsgVmVydGV4LCBUb3BvbG9naWVzIH0gZnJvbSAnLi92ZXJ0ZXgnXG5pbXBvcnQgeyBSZXNvdXJjZSB9IGZyb20gJy4uL2NvbW1vbi9yZXNvdXJjZSdcbmltcG9ydCB7IFNoYWRlclByb2dyYW0sIFNoYWRlckF0dHJpYnV0ZUtpbmRzIH0gZnJvbSAnLi4vc2hhZGVyL3NoYWRlcidcblxuY2xhc3MgTWVzaCBleHRlbmRzIFJlc291cmNlIHtcblxuXHRwcml2YXRlIHRvcG9sb2d5OiBudW1iZXJcblx0cHJpdmF0ZSBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0XG5cdHByaXZhdGUgdmJvOiBXZWJHTEJ1ZmZlclxuXHRwcml2YXRlIGVibzogV2ViR0xCdWZmZXJcblx0cHJpdmF0ZSBpc0ZpbmFsaXplZDogYm9vbGVhbiA9IGZhbHNlXG5cdHByaXZhdGUgX2lzQm91bmQ6IGJvb2xlYW4gPSBmYWxzZVxuXHRwcml2YXRlIGJvdW5kVG86IHN0cmluZyA9ICcnXG5cblx0cHJpdmF0ZSB2ZXJ0aWNlczogQXJyYXk8VmVydGV4PiA9IFtdXG5cdHByaXZhdGUgaW5kaWNlczogVWludDE2QXJyYXkgPSBuZXcgVWludDE2QXJyYXkoMClcblxuXHRjb25zdHJ1Y3RvcihnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0KSB7XG5cdFx0c3VwZXIoKVxuXHRcdHRoaXMuZ2wgPSBnbFxuXHRcdHRoaXMudmJvID0gdGhpcy5nbC5jcmVhdGVCdWZmZXIoKVxuXHRcdHRoaXMuZWJvID0gdGhpcy5nbC5jcmVhdGVCdWZmZXIoKVxuXHR9XG5cblx0cHVibGljIGFkZFZlcnRleCh2ZXJ0ZXg6IFZlcnRleCk6IHZvaWQge1xuXHRcdHRoaXMuYXNzZXJ0Tm90RmluYWxpemVkKCdhZGRWZXJ0ZXgnKVxuXHRcdGlmICh0aGlzLnZlcnRpY2VzLmxlbmd0aCAhPT0gMCkge1xuXHRcdFx0aWYgKHZlcnRleC5zaXplKCkgIT09IHRoaXMudmVydGljZXNbMF0uc2l6ZSgpKVxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0FsbCB2ZXJ0aWNlcyBtdXN0IGhhdmUgY29uc2lzdGVudCBudW1iZXJzIG9mIGVsZW1lbnRzLicpXG5cdFx0fVxuXHRcdHRoaXMudmVydGljZXMucHVzaCh2ZXJ0ZXgpXG5cdH1cblxuXHRwdWJsaWMgc2V0SW5kaWNlcyhpbmRpY2VzOiBVaW50MTZBcnJheSk6IHZvaWQge1xuXHRcdHRoaXMuYXNzZXJ0Tm90RmluYWxpemVkKCdzZXRJbmRpY2VzJylcblx0XHR0aGlzLmluZGljZXMgPSBpbmRpY2VzXG5cdH1cblxuXHRwdWJsaWMgc2V0VG9wb2xvZ3kodG9wb2xvZ3k6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuYXNzZXJ0Tm90RmluYWxpemVkKCdzZXRUb3BvbG9neScpXG5cdFx0dGhpcy50b3BvbG9neSA9IHRvcG9sb2d5XG5cdH1cblxuXHRwcml2YXRlIGdldERyYXdUeXBlKCk6IG51bWJlciB7XG5cdFx0Y29uc3QgZ2wgPSB0aGlzLmdsXG5cdFx0aWYgKHRoaXMudG9wb2xvZ3kgPT09IFRvcG9sb2dpZXMuVFJJQU5HTEVTKSB7XG5cdFx0XHRyZXR1cm4gZ2wuVFJJQU5HTEVTXG5cdFx0fSBlbHNlIGlmICh0aGlzLnRvcG9sb2d5ID09PSBUb3BvbG9naWVzLlRSSUFOR0xFX1NUUklQKSB7XG5cdFx0XHRyZXR1cm4gZ2wuVFJJQU5HTEVfU1RSSVBcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBVbnJlY29nbml6ZWQgdG9wb2xvZ3kgJHt0aGlzLnRvcG9sb2d5fWApXG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGRyYXcoKTogdm9pZCB7XG5cdFx0dGhpcy5hc3NlcnRGaW5hbGl6ZWQoJ2RyYXcnKVxuXHRcdGNvbnN0IGdsID0gdGhpcy5nbFxuXHRcdGxldCBuSW5kaWNlczogbnVtYmVyID0gdGhpcy5pbmRpY2VzLmxlbmd0aFxuXHRcdGxldCB1c2VJbmRpY2VzOiBib29sZWFuID0gbkluZGljZXMgPiAwXG5cdFx0bGV0IG5WZXJ0aWNlczogbnVtYmVyID0gdGhpcy52ZXJ0aWNlcy5sZW5ndGhcblx0XHRsZXQgZHJhd1R5cGU6IG51bWJlciA9IHRoaXMuZ2V0RHJhd1R5cGUoKVxuXHRcdGlmICh1c2VJbmRpY2VzKSB7XG5cdFx0XHRnbC5kcmF3RWxlbWVudHMoZHJhd1R5cGUsIG5JbmRpY2VzLCBnbC5VTlNJR05FRF9TSE9SVCwgMClcblx0XHR9IGVsc2Uge1xuXHRcdFx0Z2wuZHJhd0FycmF5cyhkcmF3VHlwZSwgMCwgblZlcnRpY2VzKVxuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBmaW5hbGl6ZSgpOiB2b2lkIHtcblx0XHR0aGlzLmFzc2VydE5vdEZpbmFsaXplZCgnZmluYWxpemUnKVxuXHRcdGlmICh0aGlzLnZlcnRpY2VzLmxlbmd0aCA9PT0gMClcblx0XHRcdHJldHVyblxuXHRcdHRoaXMuc3RvcmVCdWZmZXJEYXRhKClcblx0XHR0aGlzLmlzRmluYWxpemVkID0gdHJ1ZVxuXHR9XG5cblx0cHVibGljIGlzQm91bmQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuX2lzQm91bmRcblx0fVxuXG5cdHB1YmxpYyBpc0JvdW5kVG8ocHJvZzogU2hhZGVyUHJvZ3JhbSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmJvdW5kVG8gPT09IHByb2cudXVpZFxuXHR9XG5cblx0cHVibGljIGJpbmQocHJvZ3JhbTogU2hhZGVyUHJvZ3JhbSk6IHZvaWQge1xuXHRcdHRoaXMuYXNzZXJ0RmluYWxpemVkKCdiaW5kJylcblx0XHRpZiAodGhpcy52ZXJ0aWNlcy5sZW5ndGggPT09IDApXG5cdFx0XHRyZXR1cm5cblxuXHRcdGNvbnN0IGdsID0gdGhpcy5nbFxuXHRcdGxldCB2ZXJ0MCA9IHRoaXMudmVydGljZXNbMF1cblx0XHRsZXQgc3RyaWRlOiBudW1iZXIgPSB2ZXJ0MC5zaXplKClcblx0XHRsZXQgYnl0ZXM6IG51bWJlciA9IHZlcnQwLmJ5dGVzUGVyRWxlbWVudCgpXG5cdFx0bGV0IG9mZnNldDogbnVtYmVyID0gMFxuXHRcdGxldCBuSW5kaWNlczogbnVtYmVyID0gdGhpcy5pbmRpY2VzLmxlbmd0aFxuXHRcdGxldCBhdHRyaWI6IG51bWJlciA9IDBcblxuXHRcdGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLnZibylcblxuXHRcdC8vXHRwb3NpdGlvblxuXHRcdGxldCBwb3NMb2M6IG51bWJlciA9IHByb2dyYW0uZ2V0QXR0cmlidXRlTG9jYXRpb24oJ3Bvc2l0aW9uJylcblx0XHRnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShwb3NMb2MpXG5cdFx0Z2wudmVydGV4QXR0cmliUG9pbnRlcihwb3NMb2MsIDMsIGdsLkZMT0FULCBmYWxzZSwgc3RyaWRlKmJ5dGVzLCBvZmZzZXQqYnl0ZXMpXG5cdFx0b2Zmc2V0ICs9IDNcblxuXHRcdC8vXHR1dlxuXHRcdGlmICh2ZXJ0MC5zaXplVVYoKSA+IDApIHtcblx0XHRcdGxldCB1dkxvYzogbnVtYmVyID0gcHJvZ3JhbS5nZXRBdHRyaWJ1dGVMb2NhdGlvbigndXYnKVxuXHRcdFx0aWYgKHV2TG9jICE9PSAtMSkge1xuXHRcdFx0XHRnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh1dkxvYylcblx0XHRcdFx0Z2wudmVydGV4QXR0cmliUG9pbnRlcih1dkxvYywgMiwgZ2wuRkxPQVQsIGZhbHNlLCBzdHJpZGUqYnl0ZXMsIG9mZnNldCpieXRlcylcblx0XHRcdFx0b2Zmc2V0ICs9IDJcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvL1x0bm9ybWFsc1xuXHRcdGlmICh2ZXJ0MC5zaXplTm9ybWFsKCkgPiAwKSB7XG5cdFx0XHRsZXQgbm9ybUxvYzogbnVtYmVyID0gcHJvZ3JhbS5nZXRBdHRyaWJ1dGVMb2NhdGlvbignbm9ybWFsJylcblx0XHRcdGlmIChub3JtTG9jICE9PSAtMSkge1xuXHRcdFx0XHRnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShub3JtTG9jKVxuXHRcdFx0XHRnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKG5vcm1Mb2MsIDMsIGdsLkZMT0FULCBmYWxzZSwgc3RyaWRlKmJ5dGVzLCBvZmZzZXQqYnl0ZXMpXG5cdFx0XHRcdG9mZnNldCArPSAzXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly9cdGluZGljZXNcblx0XHRpZiAobkluZGljZXMgPiAwKSB7XG5cdFx0XHRnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCB0aGlzLmVibylcblx0XHR9XG5cblx0XHR0aGlzLl9pc0JvdW5kID0gdHJ1ZVxuXHRcdHRoaXMuYm91bmRUbyA9IHByb2dyYW0udXVpZFxuXHR9XG5cblx0cHVibGljIHVuYmluZCgpOiB2b2lkIHtcblx0XHRjb25zdCBnbCA9IHRoaXMuZ2xcblx0XHRjb25zdCBpbmRpY2VzID0gdGhpcy5pbmRpY2VzXG5cdFx0Z2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIG51bGwpXG5cdFx0aWYgKGluZGljZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0Z2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgbnVsbClcblx0XHR9XG5cdFx0dGhpcy5faXNCb3VuZCA9IGZhbHNlXG5cdFx0dGhpcy5ib3VuZFRvID0gJydcblx0fVxuXG5cdHB1YmxpYyBkaXNwb3NlKCk6IHZvaWQge1xuXHRcdGlmICghdGhpcy5pc0ZpbmFsaXplZClcblx0XHRcdHJldHVyblxuXHRcdGNvbnN0IGdsID0gdGhpcy5nbFxuXHRcdGdsLmRlbGV0ZUJ1ZmZlcih0aGlzLnZibylcblx0XHRnbC5kZWxldGVCdWZmZXIodGhpcy5lYm8pXG5cdH1cblxuXHRwcml2YXRlIHN0b3JlQnVmZmVyRGF0YSgpOiB2b2lkIHtcblx0XHRjb25zdCBnbCA9IHRoaXMuZ2xcblx0XHRsZXQgZGF0YTogRmxvYXQzMkFycmF5ID0gdGhpcy5nZXRJbnRlcmxlYXZlZERhdGEoKVxuXHRcdGxldCBuSW5kaWNlczogbnVtYmVyID0gdGhpcy5pbmRpY2VzLmxlbmd0aFxuXG5cdFx0Ly9cdHZib1xuXHRcdGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLnZibylcblx0XHRnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgZGF0YSwgZ2wuU1RBVElDX0RSQVcpXG5cblx0XHQvL1x0ZWJvXG5cdFx0aWYgKG5JbmRpY2VzID4gMCkge1xuXHRcdFx0Z2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy5lYm8pXG5cdFx0XHRnbC5idWZmZXJEYXRhKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCB0aGlzLmluZGljZXMsIGdsLlNUQVRJQ19EUkFXKVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZ2V0SW50ZXJsZWF2ZWREYXRhKCk6IEZsb2F0MzJBcnJheSB7XG5cdFx0Y29uc3QgdmVydGljZXMgPSB0aGlzLnZlcnRpY2VzXG5cdFx0bGV0IG5WZXJ0aWNlcyA9IHZlcnRpY2VzLmxlbmd0aFxuXHRcdGlmIChuVmVydGljZXMgPT0gMClcblx0XHRcdHJldHVybiBuZXcgRmxvYXQzMkFycmF5KDApXG5cdFx0bGV0IHRvdGFsU2l6ZTogbnVtYmVyID0gblZlcnRpY2VzICogdmVydGljZXNbMF0uc2l6ZSgpXG5cdFx0bGV0IGFsbERhdGE6IEZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWxTaXplKVxuXHRcdGxldCBhbGxEYXRhSW5kZXg6IG51bWJlciA9IDBcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgblZlcnRpY2VzOyBpKyspIHtcblx0XHRcdGxldCBkYXRhOiBGbG9hdDMyQXJyYXkgPSB2ZXJ0aWNlc1tpXS5nZXRJbnRlcmxlYXZlZERhdGEoKVxuXHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IGRhdGEubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0YWxsRGF0YVthbGxEYXRhSW5kZXhdID0gZGF0YVtqXVxuXHRcdFx0XHRhbGxEYXRhSW5kZXgrK1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gYWxsRGF0YVxuXHR9XG5cblx0cHJpdmF0ZSBhc3NlcnROb3RGaW5hbGl6ZWQob3A/OiBzdHJpbmcpOiB2b2lkIHtcblx0XHRpZiAoIW9wKVxuXHRcdFx0b3AgPSAnKHVuc3BlY2lmaWVkKSdcblx0XHRpZiAodGhpcy5pc0ZpbmFsaXplZClcblx0XHRcdHRocm93IG5ldyBFcnJvcihgTWV0aG9kIC8gb3BlcmF0aW9uIFwiJHtvcH1cIiB3YXMgY2FsbGVkIGFmdGVyIGZpbmFsaXppbmcgbWVzaC5gKVxuXHR9XG5cblx0cHJpdmF0ZSBhc3NlcnRGaW5hbGl6ZWQob3A6IHN0cmluZyA9ICcodW5zcGVjaWZpZWQpJyk6IHZvaWQge1xuXHRcdGlmICghdGhpcy5pc0ZpbmFsaXplZClcblx0XHRcdHRocm93IG5ldyBFcnJvcihgTWV0aG9kIC8gb3BlcmF0aW9uIFwiJHtvcH1cIiB3YXMgY2FsbGVkIGJlZm9yZSBmaW5hbGl6aW5nIG1lc2guYClcdFxuXHR9XG59XG5cbmV4cG9ydCB7IE1lc2ggfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2dsL21lc2gvbWVzaC50cyIsImltcG9ydCB7IHY0IH0gZnJvbSAndXVpZCdcblxuY2xhc3MgUmVzb3VyY2Uge1xuXG5cdHB1YmxpYyB1dWlkOiBzdHJpbmdcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLnV1aWQgPSB2NCgpXG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIGVxdWFscyhhOiBSZXNvdXJjZSwgYjogUmVzb3VyY2UpOiBib29sZWFuIHtcblx0XHRpZiAoYSA9PT0gbnVsbCB8fCBiID09PSBudWxsKVxuXHRcdFx0cmV0dXJuIGZhbHNlXG5cdFx0cmV0dXJuIGEudXVpZCA9PT0gYi51dWlkXG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIGNvbXBhcmVVVUlEKGE6IFJlc291cmNlLCBiOiBSZXNvdXJjZSk6IG51bWJlciB7XG5cdFx0aWYgKGEudXVpZCA9PT0gYi51dWlkKVxuXHRcdFx0cmV0dXJuIDBcblx0XHRyZXR1cm4gMVxuXHR9XG5cbn1cblxuZXhwb3J0IHsgUmVzb3VyY2UgfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2dsL2NvbW1vbi9yZXNvdXJjZS50cyIsImNsYXNzIFZlcnRleCB7XG5cblx0cHJpdmF0ZSBwb3NpdGlvbjogRmxvYXQzMkFycmF5XG5cdHByaXZhdGUgdXY6IEZsb2F0MzJBcnJheVxuXHRwcml2YXRlIG5vcm1hbDogRmxvYXQzMkFycmF5XG5cdHByaXZhdGUgcG9zaXRpb25Db3VudDogbnVtYmVyID0gMFxuXHRwcml2YXRlIHV2Q291bnQ6IG51bWJlciA9IDBcblx0cHJpdmF0ZSBub3JtYWxDb3VudDogbnVtYmVyID0gMFxuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMucG9zaXRpb24gPSBuZXcgRmxvYXQzMkFycmF5KDMpXG5cdFx0dGhpcy51diA9IG5ldyBGbG9hdDMyQXJyYXkoMilcblx0XHR0aGlzLm5vcm1hbCA9IG5ldyBGbG9hdDMyQXJyYXkoMylcblx0fVxuXG5cdHB1YmxpYyBzZXRQb3NpdGlvbihwb3M6IEZsb2F0MzJBcnJheSk6IHZvaWQge1xuXHRcdHRoaXMuYXNzZXJ0VmFsaWRBcnJheVNpemUocG9zLCAzLCAncG9zaXRpb24nKVxuXHRcdHRoaXMucG9zaXRpb24gPSBwb3Ncblx0XHR0aGlzLnBvc2l0aW9uQ291bnQgPSAzXG5cdH1cblxuXHRwdWJsaWMgc2V0VVYodXY6IEZsb2F0MzJBcnJheSk6IHZvaWQge1xuXHRcdHRoaXMuYXNzZXJ0VmFsaWRBcnJheVNpemUodXYsIDIsICd1dicpXG5cdFx0dGhpcy51diA9IHV2XG5cdFx0dGhpcy51dkNvdW50ID0gMlxuXHR9XG5cblx0cHVibGljIHNldE5vcm1hbChub3JtOiBGbG9hdDMyQXJyYXkpOiB2b2lkIHtcblx0XHR0aGlzLmFzc2VydFZhbGlkQXJyYXlTaXplKG5vcm0sIDMsICdub3JtYWxzJylcblx0XHR0aGlzLm5vcm1hbCA9IG5vcm1cblx0XHR0aGlzLm5vcm1hbENvdW50ID0gM1xuXHR9XG5cblx0cHVibGljIHNpemVQb3NpdGlvbigpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnBvc2l0aW9uQ291bnRcblx0fVxuXG5cdHB1YmxpYyBzaXplVVYoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy51dkNvdW50XG5cdH1cblxuXHRwdWJsaWMgc2l6ZU5vcm1hbCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLm5vcm1hbENvdW50XG5cdH1cblxuXHRwdWJsaWMgc2l6ZSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnNpemVQb3NpdGlvbigpICsgdGhpcy5zaXplTm9ybWFsKCkgKyB0aGlzLnNpemVVVigpXG5cdH1cblxuXHRwdWJsaWMgYnl0ZXNQZXJFbGVtZW50KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMucG9zaXRpb24uQllURVNfUEVSX0VMRU1FTlRcblx0fVxuXG5cdHB1YmxpYyBnZXRJbnRlcmxlYXZlZERhdGEoKTogRmxvYXQzMkFycmF5IHtcblx0XHRsZXQgZGF0YTogRmxvYXQzMkFycmF5ID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLnNpemUoKSlcblx0XHRsZXQgaTogbnVtYmVyID0gMFxuXHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCB0aGlzLnBvc2l0aW9uQ291bnQ7IGorKykge1xuXHRcdFx0ZGF0YVtpXSA9IHRoaXMucG9zaXRpb25bal1cblx0XHRcdGkrK1xuXHRcdH1cblx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgdGhpcy51dkNvdW50OyBqKyspIHtcblx0XHRcdGRhdGFbaV0gPSB0aGlzLnV2W2pdXG5cdFx0XHRpKytcblx0XHR9XG5cdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IHRoaXMubm9ybWFsQ291bnQ7IGorKykge1xuXHRcdFx0ZGF0YVtpXSA9IHRoaXMubm9ybWFsW2pdXG5cdFx0XHRpKytcblx0XHR9XG5cdFx0cmV0dXJuIGRhdGFcblx0fVxuXG5cdHByaXZhdGUgYXNzZXJ0VmFsaWRBcnJheVNpemUoYXJyOiBGbG9hdDMyQXJyYXksIHNpemU6IG51bWJlciwgdHlwZT86IHN0cmluZykge1xuXHRcdGlmICghdHlwZSlcblx0XHRcdHR5cGUgPSAnKHVuc3BlY2lmaWVkKSdcblx0XHRpZiAoYXJyLmxlbmd0aCAhPT0gc2l6ZSkge1xuXHRcdFx0bGV0IG1lc3NhZ2U6IHN0cmluZyA9IGBFeHBlY3RlZCBhdHRyaWJ1dGUgb2YgdHlwZSBcIiR7dHlwZX1cIiB0byBiZSBvZiBzaXplICR7c2l6ZX07XG5cdFx0XHRcdGluc3RlYWQgd2FzICR7YXJyLmxlbmd0aH1gXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcblx0XHR9XG5cblx0fVxufVxuXG5jbGFzcyBUb3BvbG9naWVzIHtcblx0cHVibGljIHN0YXRpYyBUUklBTkdMRVM6IG51bWJlciA9IDBcblx0cHVibGljIHN0YXRpYyBUUklBTkdMRV9TVFJJUDogbnVtYmVyID0gMVxufVxuXG5leHBvcnQgeyBWZXJ0ZXgsIFRvcG9sb2dpZXMgfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2dsL21lc2gvdmVydGV4LnRzIiwiaW1wb3J0ICogYXMgZGVmYXVsdHMgZnJvbSAnLi4vdXRpbC9kZWZhdWx0LXV0aWwnXG5pbXBvcnQgKiBhcyBtYXRoIGZyb20gJy4uL21hdGgvd2dsLW1hdGgnXG5pbXBvcnQgeyBSZXNvdXJjZSB9IGZyb20gJy4uL2NvbW1vbi9yZXNvdXJjZSdcblxuZXhwb3J0IHR5cGUgRGF0YVR5cGVzID0gSFRNTEltYWdlRWxlbWVudCB8IFVpbnQ4QXJyYXkgfCBudWxsXG5cbmV4cG9ydCBjbGFzcyBUZXh0dXJlT3B0cyB7XG5cdGxldmVsOiBudW1iZXJcblx0d2lkdGg6IG51bWJlclxuXHRoZWlnaHQ6IG51bWJlclxuXHRib3JkZXI6IG51bWJlclxuXHRpbnRlcm5hbEZvcm1hdDogbnVtYmVyXG5cdHNvdXJjZUZvcm1hdDogbnVtYmVyXG5cdHR5cGU6IG51bWJlclxuXHRkYXRhVHlwZTogbnVtYmVyXG5cdHdyYXBTOiBudW1iZXJcblx0d3JhcFQ6IG51bWJlclxuXHRnZW5lcmF0ZU1pcHM6IGJvb2xlYW5cblx0bWluRmlsdGVyOiBudW1iZXJcblx0bWFnRmlsdGVyOiBudW1iZXJcblxuXHRwdWJsaWMgc3RhdGljIERlZmF1bHQyRChnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0KTogVGV4dHVyZU9wdHMge1xuXHRcdGxldCBvcHRzID0gbmV3IFRleHR1cmVPcHRzKClcblx0XHRvcHRzLmxldmVsID0gMFxuXHRcdG9wdHMuaGVpZ2h0ID0gMFxuXHRcdG9wdHMuYm9yZGVyID0gMFxuXHRcdG9wdHMuaW50ZXJuYWxGb3JtYXQgPSBnbC5SR0JBXG5cdFx0b3B0cy5zb3VyY2VGb3JtYXQgPSBnbC5SR0JBXG5cdFx0b3B0cy50eXBlID0gZ2wuVEVYVFVSRV8yRFxuXHRcdG9wdHMuZGF0YVR5cGUgPSBnbC5VTlNJR05FRF9CWVRFXG5cdFx0b3B0cy53cmFwUyA9IGdsLkNMQU1QX1RPX0VER0Vcblx0XHRvcHRzLndyYXBUID0gZ2wuQ0xBTVBfVE9fRURHRVxuXHRcdG9wdHMubWluRmlsdGVyID0gZ2wuTElORUFSXG5cdFx0b3B0cy5tYWdGaWx0ZXIgPSBnbC5MSU5FQVJcblx0XHRvcHRzLmdlbmVyYXRlTWlwcyA9IHRydWVcblx0XHRyZXR1cm4gb3B0c1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUZXgyRChnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCBkYXRhOiBEYXRhVHlwZXMsIG9wdHM/OiBUZXh0dXJlT3B0cyk6IFRleHR1cmUge1xuXHRpZiAoIW9wdHMpIHtcblx0XHRvcHRzID0gVGV4dHVyZU9wdHMuRGVmYXVsdDJEKGdsKVxuXHRcdGlmIChkYXRhICYmIGRhdGEgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50KSB7XG5cdFx0XHRvcHRzLndpZHRoID0gZGF0YS53aWR0aFxuXHRcdFx0b3B0cy5oZWlnaHQgPSBkYXRhLmhlaWdodFxuXHRcdH1cblx0fVxuXHRyZXR1cm4gbmV3IFRleHR1cmUoZ2wsIGRhdGEsIG9wdHMpXG59XG5cbmV4cG9ydCBjbGFzcyBUZXh0dXJlIGV4dGVuZHMgUmVzb3VyY2Uge1xuXG5cdHByaXZhdGUgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuXHRwcml2YXRlIG9wdHM6IFRleHR1cmVPcHRzXG5cdHB1YmxpYyBoYW5kbGU6IFdlYkdMVGV4dHVyZVxuXHRwcml2YXRlIF9leGlzdHM6IGJvb2xlYW5cblx0cHJpdmF0ZSBfYm91bmQ6IGJvb2xlYW5cblx0cHVibGljIGRhdGE6IERhdGFUeXBlc1xuXG5cdHB1YmxpYyBpbmRleDogbnVtYmVyXG5cblx0Y29uc3RydWN0b3IoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCwgZGF0YTogRGF0YVR5cGVzLCBvcHRzOiBUZXh0dXJlT3B0cykge1xuXHRcdHN1cGVyKClcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLm9wdHMgPSBvcHRzXG5cdFx0dGhpcy5kYXRhID0gZGF0YVxuXHRcdHRoaXMuX2V4aXN0cyA9IGZhbHNlXG5cdFx0dGhpcy5fYm91bmQgPSBmYWxzZVxuXHRcdHRoaXMuY3JlYXRlKClcblx0fVxuXG5cdHByaXZhdGUgY29uZmlndXJlMkQodGV4OiBXZWJHTFRleHR1cmUpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGRhdGEgPSB0aGlzLmRhdGFcblx0XHRjb25zdCBvcHRzID0gdGhpcy5vcHRzXG5cdFx0Y29uc3QgZ2wgPSB0aGlzLmdsXG5cblx0XHRpZiAoZGF0YSA9PT0gbnVsbCB8fCBkYXRhIGluc3RhbmNlb2YgVWludDhBcnJheSkge1xuXHRcdFx0dGhpcy5jb25maWd1cmUyRERhdGEoPGFueT5kYXRhLCB0ZXgpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY29uZmlndXJlMkRJbWFnZShkYXRhLCB0ZXgpXG5cdFx0fVxuXG5cdFx0aWYgKG9wdHMuZ2VuZXJhdGVNaXBzICYmIG1hdGguaXNQb3cyKG9wdHMud2lkdGgpICYmIG1hdGguaXNQb3cyKG9wdHMuaGVpZ2h0KSkge1xuXHRcdFx0Z2wuZ2VuZXJhdGVNaXBtYXAoZ2wuVEVYVFVSRV8yRClcblx0XHR9IGVsc2Uge1xuXHRcdFx0Z2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgb3B0cy53cmFwUylcblx0ICAgIFx0Z2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgb3B0cy53cmFwVClcblx0ICAgIFx0Z2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIG9wdHMubWluRmlsdGVyKVxuXHQgICAgfVxuXHR9XG5cblx0cHJpdmF0ZSBjb25maWd1cmUyREltYWdlKGRhdGE6IEhUTUxJbWFnZUVsZW1lbnQsIHRleDogV2ViR0xUZXh0dXJlKTogdm9pZCB7XG5cdFx0Y29uc3Qgb3B0cyA9IHRoaXMub3B0c1xuXHRcdGNvbnN0IGdsID0gdGhpcy5nbFxuXHRcdGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgb3B0cy5sZXZlbCwgb3B0cy5pbnRlcm5hbEZvcm1hdCwgXG5cdFx0XHRvcHRzLnNvdXJjZUZvcm1hdCwgb3B0cy5kYXRhVHlwZSwgZGF0YSlcblx0XHRvcHRzLndpZHRoID0gZGF0YS53aWR0aFxuXHRcdG9wdHMuaGVpZ2h0ID0gZGF0YS5oZWlnaHRcblx0fVxuXG5cdHByaXZhdGUgY29uZmlndXJlMkREYXRhKGRhdGE6IFVpbnQ4QXJyYXkgfCBudWxsLCB0ZXg6IFdlYkdMVGV4dHVyZSk6IHZvaWQge1xuXHRcdGNvbnN0IG9wdHMgPSB0aGlzLm9wdHNcblx0XHRjb25zdCBnbCA9IHRoaXMuZ2xcblx0XHRnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIG9wdHMubGV2ZWwsIG9wdHMuaW50ZXJuYWxGb3JtYXQsXG4gICAgICAgICAgICAgICAgb3B0cy53aWR0aCwgb3B0cy5oZWlnaHQsIG9wdHMuYm9yZGVyLFxuICAgICAgICAgICAgICAgIG9wdHMuc291cmNlRm9ybWF0LCBvcHRzLmRhdGFUeXBlLCBkYXRhKVxuXHR9XG5cblx0cHVibGljIGNyZWF0ZSgpOiBXZWJHTFRleHR1cmUge1xuXHRcdHRoaXMuYXNzZXJ0RG9lc05vdEV4aXN0KCdjcmVhdGUnKVxuXG5cdFx0Y29uc3QgZ2wgPSB0aGlzLmdsXG5cdFx0Y29uc3Qgb3B0cyA9IHRoaXMub3B0c1xuXHRcdGNvbnN0IHRleCA9IGdsLmNyZWF0ZVRleHR1cmUoKVxuXG5cdFx0Z2wuYmluZFRleHR1cmUob3B0cy50eXBlLCB0ZXgpXG5cblx0XHRpZiAob3B0cy50eXBlID09PSBnbC5URVhUVVJFXzJEKSB7XG5cdFx0XHR0aGlzLmNvbmZpZ3VyZTJEKHRleClcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBVbnJlY29nbml6ZWQgdGV4dHVyZSB0eXBlLmApXG5cdFx0fVxuXG5cdFx0Z2wuYmluZFRleHR1cmUob3B0cy50eXBlLCBudWxsKVxuXG5cdFx0dGhpcy5fZXhpc3RzID0gdHJ1ZVxuXHRcdHRoaXMuaGFuZGxlID0gdGV4XG5cdFx0cmV0dXJuIHRoaXMuaGFuZGxlXG5cdH1cblxuXHRwdWJsaWMgZXhpc3RzKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLl9leGlzdHNcblx0fVxuXG5cdHB1YmxpYyBpc0JvdW5kKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLl9ib3VuZFxuXHR9XG5cblx0cHVibGljIGNsb25lKCk6IFRleHR1cmUge1xuXHRcdC8vXG5cdFx0Ly9cdEBUT0RPOiBGaXggY2xvbmluZ1xuXHRcdC8vXG5cdFx0dGhyb3cgbmV3IEVycm9yKCdDbG9uaW5nIG5vdCB5ZXQgaW1wbGVtZW50ZWQnKVxuXHR9XG5cblx0cHVibGljIGJpbmQoKTogdm9pZCB7XG5cdFx0dGhpcy5hc3NlcnRFeGlzdHMoJ2JpbmQnKVxuXHRcdHRoaXMuZ2wuYmluZFRleHR1cmUodGhpcy5vcHRzLnR5cGUsIHRoaXMuaGFuZGxlKVxuXHRcdHRoaXMuX2JvdW5kID0gdHJ1ZVxuXHR9XG5cblx0cHVibGljIHVuYmluZCgpOiB2b2lkIHtcblx0XHR0aGlzLmFzc2VydEV4aXN0cygndW5iaW5kJylcblx0XHR0aGlzLmdsLmJpbmRUZXh0dXJlKHRoaXMub3B0cy50eXBlLCBudWxsKVxuXHRcdHRoaXMuX2JvdW5kID0gZmFsc2Vcblx0fVxuXG5cdHB1YmxpYyBkaXNwb3NlKCk6IHZvaWQge1xuXHRcdGNvbnN0IGdsID0gdGhpcy5nbFxuXHRcdGlmICghdGhpcy5leGlzdHMoKSkge1xuXHRcdFx0Y29uc29sZS53YXJuKCdBdHRlbXB0ZWQgdG8gZGlzcG9zZSBvZiBhIHRleHR1cmUgYmVmb3JlIGNyZWF0aW5nIGl0LicpXG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cdFx0Z2wuZGVsZXRlVGV4dHVyZSh0aGlzLmhhbmRsZSlcblx0XHR0aGlzLl9leGlzdHMgPSBmYWxzZVxuXHR9XG5cblx0cHJpdmF0ZSBhc3NlcnRFeGlzdHMob3A6IHN0cmluZyk6IHZvaWQge1xuXHRcdGlmICghdGhpcy5leGlzdHMoKSlcblx0XHRcdHRocm93IG5ldyBFcnJvcihgT3BlcmF0aW9uIC8gbWV0aG9kIFwiJHtvcH1cIiByZXF1aXJlcyBhIGNhbGwgdG8gY3JlYXRlKCkuYClcblx0fVxuXHRwcml2YXRlIGFzc2VydERvZXNOb3RFeGlzdChvcDogc3RyaW5nKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuZXhpc3RzKCkpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYE9wZXJhdGlvbiAvIG1ldGhvZCBcIiR7b3B9XCIgY2Fubm90IGJlIGNhbGxlZCBvbmNlIHRoZSB0ZXh0dXJlIGV4aXN0cy5gKVxuXHR9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC90ZXh0dXJlL3RleHR1cmUudHMiLCJpbXBvcnQgeyBtYXQ0LCB2ZWMyLCB2ZWMzLCBnbE1hdHJpeCB9IGZyb20gJ2dsLW1hdHJpeCdcbmltcG9ydCAqIGFzIHRleHR1cmUgZnJvbSAnLi4vdGV4dHVyZS90ZXh0dXJlJ1xuXG5leHBvcnQgdHlwZSBhcnJheVByaW1pdGl2ZSA9IEFycmF5PG51bWJlcj5cbmV4cG9ydCB0eXBlIGFycmF5TGlrZSA9IEFycmF5PG51bWJlcj4gfCBGbG9hdDMyQXJyYXlcbmV4cG9ydCB0eXBlIGdsbUFycmF5UHJpbWl0aXZlID0gRmxvYXQzMkFycmF5XG5leHBvcnQgdHlwZSBnbG1BcnJheSA9IHZlYzMgfCBtYXQ0XG5leHBvcnQgdHlwZSBwcmltaXRpdmUgPSBudW1iZXIgfCBib29sZWFuIHwgc3RyaW5nXG5leHBvcnQgdHlwZSB2ZWMzQ29udmVydGlibGUgPSBudW1iZXIgfCB2ZWMzIHwgQXJyYXk8bnVtYmVyPlxuZXhwb3J0IHR5cGUgY2xvbmVhYmxlID0gcHJpbWl0aXZlIHwgbWF0NCB8IHZlYzMgfCBhcnJheVByaW1pdGl2ZSB8IHRleHR1cmUuVGV4dHVyZVxuZXhwb3J0IHR5cGUgdmVjdG9yID0gdmVjMiB8IHZlYzNcblxuZXhwb3J0IGVudW0gY29yZSB7XG5cdG1hdDQsXG5cdHZlYzMsXG5cdEZsb2F0MzJBcnJheSxcblx0bnVtYmVyLFxuXHRib29sZWFuLFxuXHRzdHJpbmdcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTWF0NChkYXRhOiB2ZWMzIHwgbWF0NCk6IGRhdGEgaXMgbWF0NCB7XG5cdHJldHVybiBkYXRhLmxlbmd0aCA9PT0gMTZcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVmVjMyhkYXRhOiB2ZWMzIHwgbWF0NCk6IGRhdGEgaXMgdmVjMyB7XG5cdHJldHVybiBkYXRhLmxlbmd0aCA9PT0gM1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQcmltaXRpdmUoZGF0YTogY2xvbmVhYmxlKTogZGF0YSBpcyBwcmltaXRpdmUge1xuXHRpZiAodHlwZW9mIGRhdGEgPT09ICdudW1iZXInIHx8IHR5cGVvZiBkYXRhID09PSAnYm9vbGVhbicgfHwgdHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKVxuXHRcdHJldHVybiB0cnVlXG5cdHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNORWxlbWVudEFycmF5KGRhdGE6IGNsb25lYWJsZSwgTjogbnVtYmVyKTogYm9vbGVhbiB7XG5cdGlmIChpc1ByaW1pdGl2ZShkYXRhKSkge1xuXHRcdHJldHVybiBmYWxzZVxuXHR9IGVsc2UgaWYgKGlzVGV4dHVyZShkYXRhKSkge1xuXHRcdHJldHVybiBmYWxzZVxuXHR9XG5cdHJldHVybiAoJ2xlbmd0aCcgaW4gZGF0YSkgJiYgKGRhdGEubGVuZ3RoID09PSBOKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUZXh0dXJlKGRhdGE6IGNsb25lYWJsZSk6IGRhdGEgaXMgdGV4dHVyZS5UZXh0dXJlIHtcblx0cmV0dXJuIGRhdGEgaW5zdGFuY2VvZiB0ZXh0dXJlLlRleHR1cmVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXkoZGF0YTogY2xvbmVhYmxlKTogZGF0YSBpcyBhcnJheVByaW1pdGl2ZSB7XG5cdGlmIChBcnJheS5pc0FycmF5KGRhdGEpKVxuXHRcdHJldHVybiB0cnVlXG5cdHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNHTE1BcnJheVR5cGUoZGF0YTogY2xvbmVhYmxlKTogZGF0YSBpcyBnbG1BcnJheSB7XG5cdGlmIChpc1ByaW1pdGl2ZShkYXRhKSkge1xuXHRcdHJldHVybiBmYWxzZVxuXHR9IGVsc2UgaWYgKCEoZGF0YSBpbnN0YW5jZW9mIEZsb2F0MzJBcnJheSkpIHtcblx0XHRyZXR1cm4gZmFsc2Vcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gaXNNYXQ0KGRhdGEpIHx8IGlzVmVjMyhkYXRhKVxuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2wvdXRpbC90eXBlLXV0aWwudHMiLCJpbXBvcnQgeyBSZXNvdXJjZSB9IGZyb20gJy4uL2NvbW1vbi9yZXNvdXJjZSdcbmltcG9ydCB7IE1lc2ggfSBmcm9tICcuLi9tZXNoL21lc2gnXG5pbXBvcnQgeyBtYXQ0LCB2ZWMzLCBnbE1hdHJpeCB9IGZyb20gJ2dsLW1hdHJpeCdcbmltcG9ydCB7IFNoYWRlclByb2dyYW0gfSBmcm9tICcuLi9zaGFkZXIvc2hhZGVyJ1xuaW1wb3J0IHsgbWF0cml4LCB0eXBlcywgdmVjdG9yIH0gZnJvbSAnLi4vdXRpbC91dGlsJ1xuaW1wb3J0ICogYXMgbWF0aCBmcm9tICcuLi9tYXRoL3dnbC1tYXRoJ1xuaW1wb3J0ICogYXMgTWF0ZXJpYWwgZnJvbSAnLi4vbWF0ZXJpYWwvbWF0ZXJpYWwnXG5cbmV4cG9ydCB0eXBlIFJlbmRlckNhbGxiYWNrVCA9ICgpID0+IHZvaWRcblxuY2xhc3MgTW9kZWwgZXh0ZW5kcyBSZXNvdXJjZSB7XG5cblx0cHJpdmF0ZSBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0XG5cdHB1YmxpYyBtZXNoOiBNZXNoXG5cdHB1YmxpYyBwcm9ncmFtOiBTaGFkZXJQcm9ncmFtXG5cdHB1YmxpYyBtYXRlcmlhbDogTWF0ZXJpYWwuTWF0ZXJpYWxcblxuXHRwdWJsaWMgYWxpYXM6IHN0cmluZ1xuXG5cdHByaXZhdGUgcGFyZW50OiBNb2RlbFxuXHRwcml2YXRlIGNoaWxkcmVuOiB7IFtrZXk6IHN0cmluZ106IE1vZGVsIH1cblxuXHRwcml2YXRlIHBvc2l0aW9uOiB2ZWMzXG5cdHByaXZhdGUgcm90YXRpb246IHZlYzNcblx0cHJpdmF0ZSBzY2FsZTogdmVjM1xuXHRwcml2YXRlIHRyYW5zZm9ybTogbWF0cml4LnRyYW5zZm9ybVxuXG5cdHB1YmxpYyBvcmRlcjogbnVtYmVyXG5cblx0Ly9cdEV2ZW50c1xuXHRwdWJsaWMgb25CZWZvcmVSZW5kZXI6IFJlbmRlckNhbGxiYWNrVFxuXHRwdWJsaWMgb25BZnRlclJlbmRlcjogUmVuZGVyQ2FsbGJhY2tUXG5cblx0Y29uc3RydWN0b3IoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCwgcHJvZ3JhbTogU2hhZGVyUHJvZ3JhbSwgbWVzaDogTWVzaCwgbWF0ZXJpYWw6IE1hdGVyaWFsLk1hdGVyaWFsKSB7XG5cdFx0c3VwZXIoKVxuXHRcdHRoaXMuZ2wgPSBnbFxuXHRcdHRoaXMucHJvZ3JhbSA9IHByb2dyYW1cblx0XHR0aGlzLm1lc2ggPSBtZXNoXG5cdFx0dGhpcy5tYXRlcmlhbCA9IG1hdGVyaWFsXG5cdFx0dGhpcy5wb3NpdGlvbiA9IHZlYzMuZnJvbVZhbHVlcygwLCAwLCAwKVxuXHRcdHRoaXMucm90YXRpb24gPSB2ZWMzLmZyb21WYWx1ZXMoMCwgMCwgMClcblx0XHR0aGlzLnNjYWxlID0gdmVjMy5mcm9tVmFsdWVzKDEsIDEsIDEpXG5cdFx0dGhpcy5hbGlhcyA9ICcnXG5cdFx0dGhpcy50cmFuc2Zvcm0gPSBuZXcgbWF0cml4LnRyYW5zZm9ybVxuXHRcdHRoaXMub3JkZXIgPSAwXG5cblx0XHR0aGlzLnBhcmVudCA9IG51bGxcblx0XHR0aGlzLmNoaWxkcmVuID0ge31cblxuXHRcdHRoaXMub25CZWZvcmVSZW5kZXIgPSAoKSA9PiB7fVxuXHRcdHRoaXMub25BZnRlclJlbmRlciA9ICgpID0+IHt9XG5cdH1cblxuXHRwdWJsaWMgc2V0TWVzaChtZXNoOiBNZXNoKTogdm9pZCB7IFxuXHRcdHRoaXMubWVzaCA9IG1lc2ggXG5cdH1cblxuXHRwdWJsaWMgc2V0TWF0ZXJpYWwobWF0ZXJpYWw6IE1hdGVyaWFsLk1hdGVyaWFsKTogdm9pZCB7IFxuXHRcdHRoaXMubWF0ZXJpYWwgPSBtYXRlcmlhbCBcblx0fVxuXG5cdHB1YmxpYyBzZXRQb3NpdGlvbihwb3M6IHR5cGVzLnZlYzNDb252ZXJ0aWJsZSk6IHZvaWQge1xuXHRcdHRoaXMucG9zaXRpb24gPSB2ZWN0b3IucmVxdWlyZVZlYzMocG9zKVxuXHR9XG5cblx0cHVibGljIHNldFJvdGF0aW9uKHJvdDogdHlwZXMudmVjM0NvbnZlcnRpYmxlKTogdm9pZCB7XG5cdFx0dGhpcy5yb3RhdGlvbiA9IHZlY3Rvci5yZXF1aXJlVmVjMyhyb3QpXG5cdH1cblxuXHRwdWJsaWMgc2V0U2NhbGUoc2NhbGU6IHR5cGVzLnZlYzNDb252ZXJ0aWJsZSk6IHZvaWQge1xuXHRcdHRoaXMuc2NhbGUgPSB2ZWN0b3IucmVxdWlyZVZlYzMoc2NhbGUpXG5cdH1cblxuXHRwdWJsaWMgZ2V0UG9zaXRpb24oKTogdmVjMyB7IHJldHVybiB0aGlzLnBvc2l0aW9uIH1cblx0cHVibGljIGdldFJvdGF0aW9uKCk6IHZlYzMgeyByZXR1cm4gdGhpcy5yb3RhdGlvbiB9XG5cdHB1YmxpYyBnZXRTY2FsZSgpOiB2ZWMzIHsgcmV0dXJuIHRoaXMuc2NhbGUgfVxuXG5cdHB1YmxpYyBnZXRXb3JsZE1hdHJpeCgpOiBtYXQ0IHtcblx0XHRsZXQgbG9jYWw6IG1hdDQgPSB0aGlzLmdldExvY2FsTWF0cml4KClcblx0XHRpZiAodGhpcy5wYXJlbnQgPT09IG51bGwpXG5cdFx0XHRyZXR1cm4gbG9jYWxcblx0XHRsZXQgcGFyZW50V29ybGQ6IG1hdDQgPSB0aGlzLnBhcmVudC5nZXRXb3JsZE1hdHJpeCgpXG5cdFx0cmV0dXJuIG1hdDQubXVsKHBhcmVudFdvcmxkLCBwYXJlbnRXb3JsZCwgbG9jYWwpXG5cdH1cblxuXHRwdWJsaWMgZ2V0TG9jYWxNYXRyaXgoKTogbWF0NCB7XG5cdFx0bGV0IHRyYW5zID0gdGhpcy50cmFuc2Zvcm1cblx0XHRsZXQgcG9zID0gdGhpcy5wb3NpdGlvblxuXHRcdGxldCByb3QgPSB0aGlzLnJvdGF0aW9uXG5cdFx0bGV0IHNjbCA9IHRoaXMuc2NhbGVcblx0XHRcblx0XHRyZXR1cm4gdHJhbnMuaWRlbnRpdHkoKVxuXHRcdFx0LnRyYW5zbGF0ZShwb3MpXG5cdFx0XHQucm90YXRlKG1hdGgucmFkaWFucyhyb3RbMF0pLCBbMSwgMCwgMF0pXG5cdFx0XHQucm90YXRlKG1hdGgucmFkaWFucyhyb3RbMV0pLCBbMCwgMSwgMF0pXG5cdFx0XHQucm90YXRlKG1hdGgucmFkaWFucyhyb3RbMl0pLCBbMCwgMCwgMV0pXG5cdFx0XHQuc2NhbGUoc2NsKVxuXHRcdFx0Lm1hdCgpXG5cdH1cblxuXHRwdWJsaWMgYWRkQ2hpbGQobW9kZWw6IE1vZGVsKTogdm9pZCB7XG5cdFx0dGhpcy5jaGlsZHJlblttb2RlbC51dWlkXSA9IG1vZGVsXG5cdFx0bW9kZWwucGFyZW50ID0gdGhpc1xuXHR9XG5cblx0cHVibGljIGhhc0NoaWxkKG1vZGVsOiBNb2RlbCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNoaWxkcmVuW21vZGVsLnV1aWRdICE9PSB1bmRlZmluZWRcblx0fVxuXG5cdHB1YmxpYyByZW1vdmVDaGlsZChtb2RlbDogTW9kZWwpOiB2b2lkIHtcblx0XHRpZiAoIXRoaXMuaGFzQ2hpbGQobW9kZWwpKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYE1vZGVsIFwiJHttb2RlbC5hbGlhc31cIiBpcyBub3QgYSBjaGlsZCBvZiBcIiR7dGhpcy5hbGlhc31cIi5gKVxuXHRcdH1cblx0XHR0aGlzLmNoaWxkcmVuW21vZGVsLnV1aWRdID0gdW5kZWZpbmVkXG5cdFx0bW9kZWwucGFyZW50ID0gbnVsbFxuXHR9XG5cblx0cHVibGljIHN0YXRpYyBjb21wYXJlTWVzaFVVSUQoYTogTW9kZWwsIGI6IE1vZGVsKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gTWVzaC5jb21wYXJlVVVJRChhLm1lc2gsIGIubWVzaClcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgY29tcGFyZU9yZGVyKGE6IE1vZGVsLCBiOiBNb2RlbCk6IG51bWJlciB7XG5cdFx0aWYgKGEudXVpZCA9PT0gYi51dWlkKVxuXHRcdFx0cmV0dXJuIDBcblx0XHRyZXR1cm4gYS5vcmRlciA+IGIub3JkZXIgPyAxIDogLTFcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgY29tcGFyZU9yZGVyVGhlbk1lc2hVVUlEKGE6IE1vZGVsLCBiOiBNb2RlbCk6IG51bWJlciB7XG5cdFx0bGV0IHJlcyA9IE1vZGVsLmNvbXBhcmVPcmRlcihhLCBiKVxuXHRcdGlmIChyZXMgIT09IDApXG5cdFx0XHRyZXR1cm4gcmVzXG5cdFx0cmV0dXJuIE1vZGVsLmNvbXBhcmVNZXNoVVVJRChhLCBiKVxuXHR9XG5cbn1cblxuZXhwb3J0IHsgTW9kZWwgfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2dsL21vZGVsL21vZGVsLnRzIiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gIEluIHRoZVxuLy8gYnJvd3NlciB0aGlzIGlzIGEgbGl0dGxlIGNvbXBsaWNhdGVkIGR1ZSB0byB1bmtub3duIHF1YWxpdHkgb2YgTWF0aC5yYW5kb20oKVxuLy8gYW5kIGluY29uc2lzdGVudCBzdXBwb3J0IGZvciB0aGUgYGNyeXB0b2AgQVBJLiAgV2UgZG8gdGhlIGJlc3Qgd2UgY2FuIHZpYVxuLy8gZmVhdHVyZS1kZXRlY3Rpb25cbnZhciBybmc7XG5cbnZhciBjcnlwdG8gPSBnbG9iYWwuY3J5cHRvIHx8IGdsb2JhbC5tc0NyeXB0bzsgLy8gZm9yIElFIDExXG5pZiAoY3J5cHRvICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgLy8gV0hBVFdHIGNyeXB0byBSTkcgLSBodHRwOi8vd2lraS53aGF0d2cub3JnL3dpa2kvQ3J5cHRvXG4gIHZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICBybmcgPSBmdW5jdGlvbiB3aGF0d2dSTkcoKSB7XG4gICAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG4gICAgcmV0dXJuIHJuZHM4O1xuICB9O1xufVxuXG5pZiAoIXJuZykge1xuICAvLyBNYXRoLnJhbmRvbSgpLWJhc2VkIChSTkcpXG4gIC8vXG4gIC8vIElmIGFsbCBlbHNlIGZhaWxzLCB1c2UgTWF0aC5yYW5kb20oKS4gIEl0J3MgZmFzdCwgYnV0IGlzIG9mIHVuc3BlY2lmaWVkXG4gIC8vIHF1YWxpdHkuXG4gIHZhciBybmRzID0gbmV3IEFycmF5KDE2KTtcbiAgcm5nID0gZnVuY3Rpb24oKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIHI7IGkgPCAxNjsgaSsrKSB7XG4gICAgICBpZiAoKGkgJiAweDAzKSA9PT0gMCkgciA9IE1hdGgucmFuZG9tKCkgKiAweDEwMDAwMDAwMDtcbiAgICAgIHJuZHNbaV0gPSByID4+PiAoKGkgJiAweDAzKSA8PCAzKSAmIDB4ZmY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJuZHM7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcm5nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvcm5nLWJyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xudmFyIGJ5dGVUb0hleCA9IFtdO1xuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXhbaV0gPSAoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpO1xufVxuXG5mdW5jdGlvbiBieXRlc1RvVXVpZChidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IG9mZnNldCB8fCAwO1xuICB2YXIgYnRoID0gYnl0ZVRvSGV4O1xuICByZXR1cm4gYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ5dGVzVG9VdWlkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvYnl0ZXNUb1V1aWQuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInR5cGUgR2VvbWV0cnlTb3VyY2UgPSB7XG5cdGRhdGE6IEFycmF5PG51bWJlcj5cblx0aW5kaWNlczogQXJyYXk8bnVtYmVyPlxufVxuXG5jbGFzcyBNZXNoTGlicmFyeSB7XG5cblx0cHVibGljIHN0YXRpYyBxdWFkOiBHZW9tZXRyeVNvdXJjZSA9IHtcblx0XHRkYXRhOiBbXG5cdFx0XHQtMS4wLCAxLjAsIDAuMCwgMC4wLCAxLjAsIDAuMCwgMS4wLCAwLjAsXG4gICAgICAgICAgICAtMS4wLCAtMS4wLCAwLjAsIDAuMCwgMC4wLCAwLjAsIDEuMCwgMC4wLFxuICAgICAgICAgICAgMS4wLCAtMS4wLCAwLjAsIDEuMCwgMC4wLCAwLjAsIDEuMCwgMC4wLFxuICAgICAgICAgICAgMS4wLCAtMS4wLCAwLjAsIDEuMCwgMC4wLCAwLjAsIDEuMCwgMC4wLFxuICAgICAgICAgICAgMS4wLCAxLjAsIDAuMCwgMS4wLCAxLjAsIDAuMCwgMS4wLCAwLjAsXG4gICAgICAgICAgICAtMS4wLCAxLjAsIDAuMCwgMC4wLCAxLjAsIDAuMCwgMS4wLCAwLjBcbiAgICAgICAgXSxcbiAgICAgICAgaW5kaWNlczogW11cblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgdHJpYW5nbGU6IEdlb21ldHJ5U291cmNlID0ge1xuXHRcdGRhdGE6IFtcblx0XHRcdC0xLjAsIC0xLjAsIDAuMCwgMC4wLCAxLjAsIDAuMCwgMS4wLCAwLjAsXG4gICAgICAgICAgICAxLjAsIC0xLjAsIDAuMCwgMC4wLCAxLjAsIDAuMCwgMS4wLCAwLjAsXG4gICAgICAgICAgICAwLjAsIDEuMCwgMC4wLCAwLjAsIDEuMCwgMC4wLCAxLjAsIDAuMFxuXHRcdF0sXG5cdFx0aW5kaWNlczogW11cblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgc2t5Ym94OiBHZW9tZXRyeVNvdXJjZSA9IHtcblx0XHRkYXRhOiBbXG5cdFx0ICAgIC0xLjAsIC0xLjAsICAtMS4wLCAwLCAwLFxuXHRcdCAgICAtMS4wLCAgMS4wLCAgLTEuMCwgMCwgMC41LFxuXHRcdCAgICAgMS4wLCAtMS4wLCAgLTEuMCwgMC4yNSwgMCxcblx0XHQgICAgLTEuMCwgIDEuMCwgIC0xLjAsIDAsIDAuNSxcblx0XHQgICAgIDEuMCwgIDEuMCwgIC0xLjAsIDAuMjUsIDAuNSxcblx0XHQgICAgIDEuMCwgLTEuMCwgIC0xLjAsIDAuMjUsIDAsXG5cblx0XHQgICAgLTEuMCwgLTEuMCwgICAxLjAsIDAuMjUsIDAsXG5cdFx0ICAgICAxLjAsIC0xLjAsICAgMS4wLCAwLjUgLCAwLFxuXHRcdCAgICAtMS4wLCAgMS4wLCAgIDEuMCwgMC4yNSwgMC41LFxuXHRcdCAgICAtMS4wLCAgMS4wLCAgIDEuMCwgMC4yNSwgMC41LFxuXHRcdCAgICAgMS4wLCAtMS4wLCAgIDEuMCwgMC41LCAwLFxuXHRcdCAgICAgMS4wLCAgMS4wLCAgIDEuMCwgMC41LCAwLjUsXG5cblx0XHQgICAgLTEuMCwgICAxLjAsIC0xLjAsIDAuNSAsIDAgICxcblx0XHQgICAgLTEuMCwgICAxLjAsICAxLjAsIDAuNSAsIDAuNSxcblx0XHQgICAgIDEuMCwgICAxLjAsIC0xLjAsICAwLjc1LCAwICAsXG5cdFx0ICAgIC0xLjAsICAgMS4wLCAgMS4wLCAwLjUgLCAwLjUsXG5cdFx0ICAgICAxLjAsICAgMS4wLCAgMS4wLCAwLjc1LCAwLjUsXG5cdFx0ICAgICAxLjAsICAgMS4wLCAtMS4wLCAwLjc1LCAwICAsXG5cblx0XHQgICAgLTEuMCwgIC0xLjAsIC0xLjAsIDAgICAsIDAuNSxcblx0XHQgICAgIDEuMCwgIC0xLjAsIC0xLjAsICAwLjI1LCAwLjUsXG5cdFx0ICAgIC0xLjAsICAtMS4wLCAgMS4wLCAwICAgLCAxICAsXG5cdFx0ICAgIC0xLjAsICAtMS4wLCAgMS4wLCAwICAgLCAxICAsXG5cdFx0ICAgICAxLjAsICAtMS4wLCAtMS4wLCAwLjI1LCAwLjUsXG5cdFx0ICAgICAxLjAsICAtMS4wLCAgMS4wLCAwLjI1LCAxICAsXG4gXG5cdFx0ICAgIC0xLjAsICAtMS4wLCAtMS4wLCAgMC4yNSwgMC41LFxuXHRcdCAgICAtMS4wLCAgLTEuMCwgIDEuMCwgIDAuMjUsIDEgICxcblx0XHQgICAgLTEuMCwgICAxLjAsIC0xLjAsIDAuNSAsIDAuNSxcblx0XHQgICAgLTEuMCwgIC0xLjAsICAxLjAsIDAuMjUsIDEgICxcblx0XHQgICAgLTEuMCwgICAxLjAsICAxLjAsIDAuNSAsIDEgICxcblx0XHQgICAgLTEuMCwgICAxLjAsIC0xLjAsIDAuNSAsIDAuNSxcblxuXHRcdCAgICAgMS4wLCAgLTEuMCwgLTEuMCwgMC41ICwgMC41LFxuXHRcdCAgICAgMS4wLCAgIDEuMCwgLTEuMCwgIDAuNzUsIDAuNSxcblx0XHQgICAgIDEuMCwgIC0xLjAsICAxLjAsICAwLjUgLCAxICAsXG5cdFx0ICAgICAxLCAgLTEsICAxLjAsIDAuNSAsIDEgICxcblx0XHQgICAgIDEsICAgMSwgLTEsIDAuNzUsIDAuNSxcblx0XHQgICAgIDEsICAgMSwgIDEsIDAuNzUsIDEgICxcblx0XHRdLFxuXHRcdGluZGljZXM6IFtdXG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIGN1YmUyOiBHZW9tZXRyeVNvdXJjZSA9IHtcblx0XHRkYXRhOiBbIFxuXHRcdFx0LTAuNSwgLTAuNSwgLTAuNSwgMC4wLCAwLjAsIC0xLjAsIDAuMCwgMC4wLCBcblx0XHRcdDAuNSwgLTAuNSwgLTAuNSwgMC4wLCAwLjAsIC0xLjAsIDEuMCwgMC4wLCBcblx0XHRcdDAuNSwgMC41LCAtMC41LCAwLjAsIDAuMCwgLTEuMCwgMS4wLCAxLjAsXG5cdFx0XHQwLjUsIDAuNSwgLTAuNSwgMC4wLCAwLjAsIC0xLjAsIDEuMCwgMS4wLCBcblx0XHRcdC0wLjUsIDAuNSwgLTAuNSwgMC4wLCAwLjAsIC0xLjAsIDAuMCwgMS4wLCBcblx0XHRcdC0wLjUsIC0wLjUsIC0wLjUsIDAuMCwgMC4wLCAtMS4wLCAwLjAsIDAuMCwgXG5cdFx0XHQtMC41LCAtMC41LCAwLjUsIDAuMCwgMC4wLCAxLjAsIDAuMCwgMC4wLCBcblx0XHRcdDAuNSwgLTAuNSwgMC41LCAwLjAsIDAuMCwgMS4wLCAxLjAsIDAuMCwgXG5cdFx0XHQwLjUsIDAuNSwgMC41LCAwLjAsIDAuMCwgMS4wLCAxLjAsIDEuMCwgXG5cdFx0XHQwLjUsIDAuNSwgMC41LCAwLjAsIDAuMCwgMS4wLCAxLjAsIDEuMCwgXG5cdFx0XHQtMC41LCAwLjUsIDAuNSwgMC4wLCAwLjAsIDEuMCwgMC4wLCAxLjAsIFxuXHRcdFx0LTAuNSwgLTAuNSwgMC41LCAwLjAsIDAuMCwgMS4wLCAwLjAsIDAuMCwgXG5cdFx0XHQtMC41LCAwLjUsIDAuNSwgLTEuMCwgMC4wLCAwLjAsIDEuMCwgMC4wLCBcblx0XHRcdC0wLjUsIDAuNSwgLTAuNSwgLTEuMCwgMC4wLCAwLjAsIDEuMCwgMS4wLCBcblx0XHRcdC0wLjUsIC0wLjUsIC0wLjUsIC0xLjAsIDAuMCwgMC4wLCAwLjAsIDEuMCwgXG5cdFx0XHQtMC41LCAtMC41LCAtMC41LCAtMS4wLCAwLjAsIDAuMCwgMC4wLCAxLjAsIFxuXHRcdFx0LTAuNSwgLTAuNSwgMC41LCAtMS4wLCAwLjAsIDAuMCwgMC4wLCAwLjAsIFxuXHRcdFx0LTAuNSwgMC41LCAwLjUsIC0xLjAsIDAuMCwgMC4wLCAxLjAsIDAuMCwgMC41LCBcblx0XHRcdDAuNSwgMC41LCAxLjAsIDAuMCwgMC4wLCAxLjAsIDAuMCwgMC41LCAwLjUsIFxuXHRcdFx0LTAuNSwgMS4wLCAwLjAsIDAuMCwgMS4wLCAxLjAsIDAuNSwgLTAuNSwgLTAuNSwgXG5cdFx0XHQxLjAsIDAuMCwgMC4wLCAwLjAsIDEuMCwgMC41LCAtMC41LCAtMC41LCBcblx0XHRcdDEuMCwgMC4wLCAwLjAsIDAuMCwgMS4wLCAwLjUsIC0wLjUsIDAuNSwgMS4wLFxuXHRcdFx0MC4wLCAwLjAsIDAuMCwgMC4wLCAwLjUsIDAuNSwgMC41LCAxLjAsIDAuMCwgXG5cdFx0XHQwLjAsIDEuMCwgMC4wLCAtMC41LCAtMC41LCAtMC41LCAwLjAsIC0xLjAsIFxuXHRcdFx0MC4wLCAwLjAsIDEuMCwgMC41LCAtMC41LCAtMC41LCAwLjAsIC0xLjAsIFxuXHRcdFx0MC4wLCAxLjAsIDEuMCwgMC41LCAtMC41LCAwLjUsIDAuMCwgLTEuMCwgXG5cdFx0XHQwLjAsIDEuMCwgMC4wLCAwLjUsIC0wLjUsIDAuNSwgMC4wLCAtMS4wLCBcblx0XHRcdDAuMCwgMS4wLCAwLjAsIC0wLjUsIC0wLjUsIDAuNSwgMC4wLCAtMS4wLCBcblx0XHRcdDAuMCwgMC4wLCAwLjAsIC0wLjUsIC0wLjUsIC0wLjUsIDAuMCwgLTEuMCwgXG5cdFx0XHQwLjAsIDAuMCwgMS4wLCAtMC41LCAwLjUsIC0wLjUsIDAuMCwgMS4wLCBcblx0XHRcdDAuMCwgMC4wLCAxLjAsIDAuNSwgMC41LCAtMC41LCAwLjAsIDEuMCwgMC4wLCBcblx0XHRcdDEuMCwgMS4wLCAwLjUsIDAuNSwgMC41LCAwLjAsIDEuMCwgMC4wLCAxLjAsIDAuMCwgXG5cdFx0XHQwLjUsIDAuNSwgMC41LCAwLjAsIDEuMCwgMC4wLCAxLjAsIDAuMCwgLTAuNSwgMC41LCBcblx0XHRcdDAuNSwgMC4wLCAxLjAsIDAuMCwgMC4wLCAwLjAsIC0wLjUsIDAuNSwgLTAuNSwgXG5cdFx0XHQwLjAsIDEuMCwgMC4wLCAwLjAsIDEuMFxuICAgICAgICBdLFxuICAgICAgICBpbmRpY2VzOiBbXVxuXHR9XG5cblx0cHVibGljIHN0YXRpYyBjdWJlOiBHZW9tZXRyeVNvdXJjZSA9IHtcblx0XHRkYXRhOiBbXG5cdFx0ICAtMS4wLCAtMS4wLCAgMS4wLFxuXHRcdCAgIDEuMCwgLTEuMCwgIDEuMCwgXG5cdFx0ICAgMS4wLCAgMS4wLCAgMS4wLFxuXHRcdCAgLTEuMCwgIDEuMCwgIDEuMCxcblx0XHQgIFxuXHRcdCAgLTEuMCwgLTEuMCwgLTEuMCxcblx0XHQgIC0xLjAsICAxLjAsIC0xLjAsXG5cdFx0ICAgMS4wLCAgMS4wLCAtMS4wLFxuXHRcdCAgIDEuMCwgLTEuMCwgLTEuMCxcblx0XHQgIFxuXHRcdCAgLTEuMCwgIDEuMCwgLTEuMCxcblx0XHQgIC0xLjAsICAxLjAsICAxLjAsXG5cdFx0ICAgMS4wLCAgMS4wLCAgMS4wLFxuXHRcdCAgIDEuMCwgIDEuMCwgLTEuMCxcblx0XHQgIFxuXHRcdCAgLTEuMCwgLTEuMCwgLTEuMCxcblx0XHQgICAxLjAsIC0xLjAsIC0xLjAsXG5cdFx0ICAgMS4wLCAtMS4wLCAgMS4wLFxuXHRcdCAgLTEuMCwgLTEuMCwgIDEuMCxcblx0XHQgIFxuXHRcdCAgIDEuMCwgLTEuMCwgLTEuMCxcblx0XHQgICAxLjAsICAxLjAsIC0xLjAsXG5cdFx0ICAgMS4wLCAgMS4wLCAgMS4wLFxuXHRcdCAgIDEuMCwgLTEuMCwgIDEuMCxcblx0XHQgIFxuXHRcdCAgLTEuMCwgLTEuMCwgLTEuMCxcblx0XHQgIC0xLjAsIC0xLjAsICAxLjAsXG5cdFx0ICAtMS4wLCAgMS4wLCAgMS4wLFxuXHRcdCAgLTEuMCwgIDEuMCwgLTEuMCxcblx0XHRdLFxuXHRcdGluZGljZXM6IFtcblx0XHRcdDAsICAxLCAgMiwgICAgICAwLCAgMiwgIDMsICAgIC8vIGZyb250XG5cdFx0XHQ0LCAgNSwgIDYsICAgICAgNCwgIDYsICA3LCAgICAvLyBiYWNrXG5cdFx0XHQ4LCAgOSwgIDEwLCAgICAgOCwgIDEwLCAxMSwgICAvLyB0b3Bcblx0XHRcdDEyLCAxMywgMTQsICAgICAxMiwgMTQsIDE1LCAgIC8vIGJvdHRvbVxuXHRcdFx0MTYsIDE3LCAxOCwgICAgIDE2LCAxOCwgMTksICAgLy8gcmlnaHRcblx0XHRcdDIwLCAyMSwgMjIsICAgICAyMCwgMjIsIDIzLCAgIC8vIGxlZnRcblx0XHRdXG5cdH1cblxufVxuXG5leHBvcnQgeyBNZXNoTGlicmFyeSB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2wvbWVzaC9tZXNoLWxpYnJhcnkudHMiLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEJyYW5kb24gSm9uZXMsIENvbGluIE1hY0tlbnppZSBJVi5cblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5mdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5BVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuVEhFIFNPRlRXQVJFLiAqL1xuXG5pbXBvcnQgKiBhcyBnbE1hdHJpeCBmcm9tIFwiLi9jb21tb25cIjtcblxuLyoqXG4gKiAzeDMgTWF0cml4XG4gKiBAbW9kdWxlIG1hdDNcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgaWRlbnRpdHkgbWF0M1xuICpcbiAqIEByZXR1cm5zIHttYXQzfSBhIG5ldyAzeDMgbWF0cml4XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gIGxldCBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSg5KTtcbiAgb3V0WzBdID0gMTtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gMTtcbiAgb3V0WzVdID0gMDtcbiAgb3V0WzZdID0gMDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDb3BpZXMgdGhlIHVwcGVyLWxlZnQgM3gzIHZhbHVlcyBpbnRvIHRoZSBnaXZlbiBtYXQzLlxuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgM3gzIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhICAgdGhlIHNvdXJjZSA0eDQgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tTWF0NChvdXQsIGEpIHtcbiAgb3V0WzBdID0gYVswXTtcbiAgb3V0WzFdID0gYVsxXTtcbiAgb3V0WzJdID0gYVsyXTtcbiAgb3V0WzNdID0gYVs0XTtcbiAgb3V0WzRdID0gYVs1XTtcbiAgb3V0WzVdID0gYVs2XTtcbiAgb3V0WzZdID0gYVs4XTtcbiAgb3V0WzddID0gYVs5XTtcbiAgb3V0WzhdID0gYVsxMF07XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBtYXQzIGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgbWF0cml4XG4gKlxuICogQHBhcmFtIHttYXQzfSBhIG1hdHJpeCB0byBjbG9uZVxuICogQHJldHVybnMge21hdDN9IGEgbmV3IDN4MyBtYXRyaXhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb25lKGEpIHtcbiAgbGV0IG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDkpO1xuICBvdXRbMF0gPSBhWzBdO1xuICBvdXRbMV0gPSBhWzFdO1xuICBvdXRbMl0gPSBhWzJdO1xuICBvdXRbM10gPSBhWzNdO1xuICBvdXRbNF0gPSBhWzRdO1xuICBvdXRbNV0gPSBhWzVdO1xuICBvdXRbNl0gPSBhWzZdO1xuICBvdXRbN10gPSBhWzddO1xuICBvdXRbOF0gPSBhWzhdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENvcHkgdGhlIHZhbHVlcyBmcm9tIG9uZSBtYXQzIHRvIGFub3RoZXJcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQzfSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KG91dCwgYSkge1xuICBvdXRbMF0gPSBhWzBdO1xuICBvdXRbMV0gPSBhWzFdO1xuICBvdXRbMl0gPSBhWzJdO1xuICBvdXRbM10gPSBhWzNdO1xuICBvdXRbNF0gPSBhWzRdO1xuICBvdXRbNV0gPSBhWzVdO1xuICBvdXRbNl0gPSBhWzZdO1xuICBvdXRbN10gPSBhWzddO1xuICBvdXRbOF0gPSBhWzhdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBtYXQzIHdpdGggdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMDAgQ29tcG9uZW50IGluIGNvbHVtbiAwLCByb3cgMCBwb3NpdGlvbiAoaW5kZXggMClcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMDEgQ29tcG9uZW50IGluIGNvbHVtbiAwLCByb3cgMSBwb3NpdGlvbiAoaW5kZXggMSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMDIgQ29tcG9uZW50IGluIGNvbHVtbiAwLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggMilcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMTAgQ29tcG9uZW50IGluIGNvbHVtbiAxLCByb3cgMCBwb3NpdGlvbiAoaW5kZXggMylcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMTEgQ29tcG9uZW50IGluIGNvbHVtbiAxLCByb3cgMSBwb3NpdGlvbiAoaW5kZXggNClcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMTIgQ29tcG9uZW50IGluIGNvbHVtbiAxLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggNSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjAgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMCBwb3NpdGlvbiAoaW5kZXggNilcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjEgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMSBwb3NpdGlvbiAoaW5kZXggNylcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjIgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggOClcbiAqIEByZXR1cm5zIHttYXQzfSBBIG5ldyBtYXQzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tVmFsdWVzKG0wMCwgbTAxLCBtMDIsIG0xMCwgbTExLCBtMTIsIG0yMCwgbTIxLCBtMjIpIHtcbiAgbGV0IG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDkpO1xuICBvdXRbMF0gPSBtMDA7XG4gIG91dFsxXSA9IG0wMTtcbiAgb3V0WzJdID0gbTAyO1xuICBvdXRbM10gPSBtMTA7XG4gIG91dFs0XSA9IG0xMTtcbiAgb3V0WzVdID0gbTEyO1xuICBvdXRbNl0gPSBtMjA7XG4gIG91dFs3XSA9IG0yMTtcbiAgb3V0WzhdID0gbTIyO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIG1hdDMgdG8gdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge051bWJlcn0gbTAwIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDAgcG9zaXRpb24gKGluZGV4IDApXG4gKiBAcGFyYW0ge051bWJlcn0gbTAxIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDEgcG9zaXRpb24gKGluZGV4IDEpXG4gKiBAcGFyYW0ge051bWJlcn0gbTAyIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDIgcG9zaXRpb24gKGluZGV4IDIpXG4gKiBAcGFyYW0ge051bWJlcn0gbTEwIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDAgcG9zaXRpb24gKGluZGV4IDMpXG4gKiBAcGFyYW0ge051bWJlcn0gbTExIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDEgcG9zaXRpb24gKGluZGV4IDQpXG4gKiBAcGFyYW0ge051bWJlcn0gbTEyIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDIgcG9zaXRpb24gKGluZGV4IDUpXG4gKiBAcGFyYW0ge051bWJlcn0gbTIwIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDAgcG9zaXRpb24gKGluZGV4IDYpXG4gKiBAcGFyYW0ge051bWJlcn0gbTIxIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDEgcG9zaXRpb24gKGluZGV4IDcpXG4gKiBAcGFyYW0ge051bWJlcn0gbTIyIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDIgcG9zaXRpb24gKGluZGV4IDgpXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXQob3V0LCBtMDAsIG0wMSwgbTAyLCBtMTAsIG0xMSwgbTEyLCBtMjAsIG0yMSwgbTIyKSB7XG4gIG91dFswXSA9IG0wMDtcbiAgb3V0WzFdID0gbTAxO1xuICBvdXRbMl0gPSBtMDI7XG4gIG91dFszXSA9IG0xMDtcbiAgb3V0WzRdID0gbTExO1xuICBvdXRbNV0gPSBtMTI7XG4gIG91dFs2XSA9IG0yMDtcbiAgb3V0WzddID0gbTIxO1xuICBvdXRbOF0gPSBtMjI7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU2V0IGEgbWF0MyB0byB0aGUgaWRlbnRpdHkgbWF0cml4XG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5KG91dCkge1xuICBvdXRbMF0gPSAxO1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSAxO1xuICBvdXRbNV0gPSAwO1xuICBvdXRbNl0gPSAwO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFRyYW5zcG9zZSB0aGUgdmFsdWVzIG9mIGEgbWF0M1xuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zcG9zZShvdXQsIGEpIHtcbiAgLy8gSWYgd2UgYXJlIHRyYW5zcG9zaW5nIG91cnNlbHZlcyB3ZSBjYW4gc2tpcCBhIGZldyBzdGVwcyBidXQgaGF2ZSB0byBjYWNoZSBzb21lIHZhbHVlc1xuICBpZiAob3V0ID09PSBhKSB7XG4gICAgbGV0IGEwMSA9IGFbMV0sIGEwMiA9IGFbMl0sIGExMiA9IGFbNV07XG4gICAgb3V0WzFdID0gYVszXTtcbiAgICBvdXRbMl0gPSBhWzZdO1xuICAgIG91dFszXSA9IGEwMTtcbiAgICBvdXRbNV0gPSBhWzddO1xuICAgIG91dFs2XSA9IGEwMjtcbiAgICBvdXRbN10gPSBhMTI7XG4gIH0gZWxzZSB7XG4gICAgb3V0WzBdID0gYVswXTtcbiAgICBvdXRbMV0gPSBhWzNdO1xuICAgIG91dFsyXSA9IGFbNl07XG4gICAgb3V0WzNdID0gYVsxXTtcbiAgICBvdXRbNF0gPSBhWzRdO1xuICAgIG91dFs1XSA9IGFbN107XG4gICAgb3V0WzZdID0gYVsyXTtcbiAgICBvdXRbN10gPSBhWzVdO1xuICAgIG91dFs4XSA9IGFbOF07XG4gIH1cblxuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEludmVydHMgYSBtYXQzXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJ0KG91dCwgYSkge1xuICBsZXQgYTAwID0gYVswXSwgYTAxID0gYVsxXSwgYTAyID0gYVsyXTtcbiAgbGV0IGExMCA9IGFbM10sIGExMSA9IGFbNF0sIGExMiA9IGFbNV07XG4gIGxldCBhMjAgPSBhWzZdLCBhMjEgPSBhWzddLCBhMjIgPSBhWzhdO1xuXG4gIGxldCBiMDEgPSBhMjIgKiBhMTEgLSBhMTIgKiBhMjE7XG4gIGxldCBiMTEgPSAtYTIyICogYTEwICsgYTEyICogYTIwO1xuICBsZXQgYjIxID0gYTIxICogYTEwIC0gYTExICogYTIwO1xuXG4gIC8vIENhbGN1bGF0ZSB0aGUgZGV0ZXJtaW5hbnRcbiAgbGV0IGRldCA9IGEwMCAqIGIwMSArIGEwMSAqIGIxMSArIGEwMiAqIGIyMTtcblxuICBpZiAoIWRldCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGRldCA9IDEuMCAvIGRldDtcblxuICBvdXRbMF0gPSBiMDEgKiBkZXQ7XG4gIG91dFsxXSA9ICgtYTIyICogYTAxICsgYTAyICogYTIxKSAqIGRldDtcbiAgb3V0WzJdID0gKGExMiAqIGEwMSAtIGEwMiAqIGExMSkgKiBkZXQ7XG4gIG91dFszXSA9IGIxMSAqIGRldDtcbiAgb3V0WzRdID0gKGEyMiAqIGEwMCAtIGEwMiAqIGEyMCkgKiBkZXQ7XG4gIG91dFs1XSA9ICgtYTEyICogYTAwICsgYTAyICogYTEwKSAqIGRldDtcbiAgb3V0WzZdID0gYjIxICogZGV0O1xuICBvdXRbN10gPSAoLWEyMSAqIGEwMCArIGEwMSAqIGEyMCkgKiBkZXQ7XG4gIG91dFs4XSA9IChhMTEgKiBhMDAgLSBhMDEgKiBhMTApICogZGV0O1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGFkanVnYXRlIG9mIGEgbWF0M1xuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkam9pbnQob3V0LCBhKSB7XG4gIGxldCBhMDAgPSBhWzBdLCBhMDEgPSBhWzFdLCBhMDIgPSBhWzJdO1xuICBsZXQgYTEwID0gYVszXSwgYTExID0gYVs0XSwgYTEyID0gYVs1XTtcbiAgbGV0IGEyMCA9IGFbNl0sIGEyMSA9IGFbN10sIGEyMiA9IGFbOF07XG5cbiAgb3V0WzBdID0gKGExMSAqIGEyMiAtIGExMiAqIGEyMSk7XG4gIG91dFsxXSA9IChhMDIgKiBhMjEgLSBhMDEgKiBhMjIpO1xuICBvdXRbMl0gPSAoYTAxICogYTEyIC0gYTAyICogYTExKTtcbiAgb3V0WzNdID0gKGExMiAqIGEyMCAtIGExMCAqIGEyMik7XG4gIG91dFs0XSA9IChhMDAgKiBhMjIgLSBhMDIgKiBhMjApO1xuICBvdXRbNV0gPSAoYTAyICogYTEwIC0gYTAwICogYTEyKTtcbiAgb3V0WzZdID0gKGExMCAqIGEyMSAtIGExMSAqIGEyMCk7XG4gIG91dFs3XSA9IChhMDEgKiBhMjAgLSBhMDAgKiBhMjEpO1xuICBvdXRbOF0gPSAoYTAwICogYTExIC0gYTAxICogYTEwKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBkZXRlcm1pbmFudCBvZiBhIG1hdDNcbiAqXG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRldGVybWluYW50IG9mIGFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRldGVybWluYW50KGEpIHtcbiAgbGV0IGEwMCA9IGFbMF0sIGEwMSA9IGFbMV0sIGEwMiA9IGFbMl07XG4gIGxldCBhMTAgPSBhWzNdLCBhMTEgPSBhWzRdLCBhMTIgPSBhWzVdO1xuICBsZXQgYTIwID0gYVs2XSwgYTIxID0gYVs3XSwgYTIyID0gYVs4XTtcblxuICByZXR1cm4gYTAwICogKGEyMiAqIGExMSAtIGExMiAqIGEyMSkgKyBhMDEgKiAoLWEyMiAqIGExMCArIGExMiAqIGEyMCkgKyBhMDIgKiAoYTIxICogYTEwIC0gYTExICogYTIwKTtcbn1cblxuLyoqXG4gKiBNdWx0aXBsaWVzIHR3byBtYXQzJ3NcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge21hdDN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseShvdXQsIGEsIGIpIHtcbiAgbGV0IGEwMCA9IGFbMF0sIGEwMSA9IGFbMV0sIGEwMiA9IGFbMl07XG4gIGxldCBhMTAgPSBhWzNdLCBhMTEgPSBhWzRdLCBhMTIgPSBhWzVdO1xuICBsZXQgYTIwID0gYVs2XSwgYTIxID0gYVs3XSwgYTIyID0gYVs4XTtcblxuICBsZXQgYjAwID0gYlswXSwgYjAxID0gYlsxXSwgYjAyID0gYlsyXTtcbiAgbGV0IGIxMCA9IGJbM10sIGIxMSA9IGJbNF0sIGIxMiA9IGJbNV07XG4gIGxldCBiMjAgPSBiWzZdLCBiMjEgPSBiWzddLCBiMjIgPSBiWzhdO1xuXG4gIG91dFswXSA9IGIwMCAqIGEwMCArIGIwMSAqIGExMCArIGIwMiAqIGEyMDtcbiAgb3V0WzFdID0gYjAwICogYTAxICsgYjAxICogYTExICsgYjAyICogYTIxO1xuICBvdXRbMl0gPSBiMDAgKiBhMDIgKyBiMDEgKiBhMTIgKyBiMDIgKiBhMjI7XG5cbiAgb3V0WzNdID0gYjEwICogYTAwICsgYjExICogYTEwICsgYjEyICogYTIwO1xuICBvdXRbNF0gPSBiMTAgKiBhMDEgKyBiMTEgKiBhMTEgKyBiMTIgKiBhMjE7XG4gIG91dFs1XSA9IGIxMCAqIGEwMiArIGIxMSAqIGExMiArIGIxMiAqIGEyMjtcblxuICBvdXRbNl0gPSBiMjAgKiBhMDAgKyBiMjEgKiBhMTAgKyBiMjIgKiBhMjA7XG4gIG91dFs3XSA9IGIyMCAqIGEwMSArIGIyMSAqIGExMSArIGIyMiAqIGEyMTtcbiAgb3V0WzhdID0gYjIwICogYTAyICsgYjIxICogYTEyICsgYjIyICogYTIyO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFRyYW5zbGF0ZSBhIG1hdDMgYnkgdGhlIGdpdmVuIHZlY3RvclxuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIG1hdHJpeCB0byB0cmFuc2xhdGVcbiAqIEBwYXJhbSB7dmVjMn0gdiB2ZWN0b3IgdG8gdHJhbnNsYXRlIGJ5XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGUob3V0LCBhLCB2KSB7XG4gIGxldCBhMDAgPSBhWzBdLCBhMDEgPSBhWzFdLCBhMDIgPSBhWzJdLFxuICAgIGExMCA9IGFbM10sIGExMSA9IGFbNF0sIGExMiA9IGFbNV0sXG4gICAgYTIwID0gYVs2XSwgYTIxID0gYVs3XSwgYTIyID0gYVs4XSxcbiAgICB4ID0gdlswXSwgeSA9IHZbMV07XG5cbiAgb3V0WzBdID0gYTAwO1xuICBvdXRbMV0gPSBhMDE7XG4gIG91dFsyXSA9IGEwMjtcblxuICBvdXRbM10gPSBhMTA7XG4gIG91dFs0XSA9IGExMTtcbiAgb3V0WzVdID0gYTEyO1xuXG4gIG91dFs2XSA9IHggKiBhMDAgKyB5ICogYTEwICsgYTIwO1xuICBvdXRbN10gPSB4ICogYTAxICsgeSAqIGExMSArIGEyMTtcbiAgb3V0WzhdID0geCAqIGEwMiArIHkgKiBhMTIgKyBhMjI7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUm90YXRlcyBhIG1hdDMgYnkgdGhlIGdpdmVuIGFuZ2xlXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZShvdXQsIGEsIHJhZCkge1xuICBsZXQgYTAwID0gYVswXSwgYTAxID0gYVsxXSwgYTAyID0gYVsyXSxcbiAgICBhMTAgPSBhWzNdLCBhMTEgPSBhWzRdLCBhMTIgPSBhWzVdLFxuICAgIGEyMCA9IGFbNl0sIGEyMSA9IGFbN10sIGEyMiA9IGFbOF0sXG5cbiAgICBzID0gTWF0aC5zaW4ocmFkKSxcbiAgICBjID0gTWF0aC5jb3MocmFkKTtcblxuICBvdXRbMF0gPSBjICogYTAwICsgcyAqIGExMDtcbiAgb3V0WzFdID0gYyAqIGEwMSArIHMgKiBhMTE7XG4gIG91dFsyXSA9IGMgKiBhMDIgKyBzICogYTEyO1xuXG4gIG91dFszXSA9IGMgKiBhMTAgLSBzICogYTAwO1xuICBvdXRbNF0gPSBjICogYTExIC0gcyAqIGEwMTtcbiAgb3V0WzVdID0gYyAqIGExMiAtIHMgKiBhMDI7XG5cbiAgb3V0WzZdID0gYTIwO1xuICBvdXRbN10gPSBhMjE7XG4gIG91dFs4XSA9IGEyMjtcbiAgcmV0dXJuIG91dDtcbn07XG5cbi8qKlxuICogU2NhbGVzIHRoZSBtYXQzIGJ5IHRoZSBkaW1lbnNpb25zIGluIHRoZSBnaXZlbiB2ZWMyXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxuICogQHBhcmFtIHt2ZWMyfSB2IHRoZSB2ZWMyIHRvIHNjYWxlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqKi9cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZShvdXQsIGEsIHYpIHtcbiAgbGV0IHggPSB2WzBdLCB5ID0gdlsxXTtcblxuICBvdXRbMF0gPSB4ICogYVswXTtcbiAgb3V0WzFdID0geCAqIGFbMV07XG4gIG91dFsyXSA9IHggKiBhWzJdO1xuXG4gIG91dFszXSA9IHkgKiBhWzNdO1xuICBvdXRbNF0gPSB5ICogYVs0XTtcbiAgb3V0WzVdID0geSAqIGFbNV07XG5cbiAgb3V0WzZdID0gYVs2XTtcbiAgb3V0WzddID0gYVs3XTtcbiAgb3V0WzhdID0gYVs4XTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSB2ZWN0b3IgdHJhbnNsYXRpb25cbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxuICpcbiAqICAgICBtYXQzLmlkZW50aXR5KGRlc3QpO1xuICogICAgIG1hdDMudHJhbnNsYXRlKGRlc3QsIGRlc3QsIHZlYyk7XG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgbWF0MyByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHt2ZWMyfSB2IFRyYW5zbGF0aW9uIHZlY3RvclxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVRyYW5zbGF0aW9uKG91dCwgdikge1xuICBvdXRbMF0gPSAxO1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSAxO1xuICBvdXRbNV0gPSAwO1xuICBvdXRbNl0gPSB2WzBdO1xuICBvdXRbN10gPSB2WzFdO1xuICBvdXRbOF0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIGdpdmVuIGFuZ2xlXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcbiAqXG4gKiAgICAgbWF0My5pZGVudGl0eShkZXN0KTtcbiAqICAgICBtYXQzLnJvdGF0ZShkZXN0LCBkZXN0LCByYWQpO1xuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IG1hdDMgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUm90YXRpb24ob3V0LCByYWQpIHtcbiAgbGV0IHMgPSBNYXRoLnNpbihyYWQpLCBjID0gTWF0aC5jb3MocmFkKTtcblxuICBvdXRbMF0gPSBjO1xuICBvdXRbMV0gPSBzO1xuICBvdXRbMl0gPSAwO1xuXG4gIG91dFszXSA9IC1zO1xuICBvdXRbNF0gPSBjO1xuICBvdXRbNV0gPSAwO1xuXG4gIG91dFs2XSA9IDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgdmVjdG9yIHNjYWxpbmdcbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxuICpcbiAqICAgICBtYXQzLmlkZW50aXR5KGRlc3QpO1xuICogICAgIG1hdDMuc2NhbGUoZGVzdCwgZGVzdCwgdmVjKTtcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCBtYXQzIHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge3ZlYzJ9IHYgU2NhbGluZyB2ZWN0b3JcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21TY2FsaW5nKG91dCwgdikge1xuICBvdXRbMF0gPSB2WzBdO1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuXG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IHZbMV07XG4gIG91dFs1XSA9IDA7XG5cbiAgb3V0WzZdID0gMDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDb3BpZXMgdGhlIHZhbHVlcyBmcm9tIGEgbWF0MmQgaW50byBhIG1hdDNcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQyZH0gYSB0aGUgbWF0cml4IHRvIGNvcHlcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tTWF0MmQob3V0LCBhKSB7XG4gIG91dFswXSA9IGFbMF07XG4gIG91dFsxXSA9IGFbMV07XG4gIG91dFsyXSA9IDA7XG5cbiAgb3V0WzNdID0gYVsyXTtcbiAgb3V0WzRdID0gYVszXTtcbiAgb3V0WzVdID0gMDtcblxuICBvdXRbNl0gPSBhWzRdO1xuICBvdXRbN10gPSBhWzVdO1xuICBvdXRbOF0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiogQ2FsY3VsYXRlcyBhIDN4MyBtYXRyaXggZnJvbSB0aGUgZ2l2ZW4gcXVhdGVybmlvblxuKlxuKiBAcGFyYW0ge21hdDN9IG91dCBtYXQzIHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4qIEBwYXJhbSB7cXVhdH0gcSBRdWF0ZXJuaW9uIHRvIGNyZWF0ZSBtYXRyaXggZnJvbVxuKlxuKiBAcmV0dXJucyB7bWF0M30gb3V0XG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21RdWF0KG91dCwgcSkge1xuICBsZXQgeCA9IHFbMF0sIHkgPSBxWzFdLCB6ID0gcVsyXSwgdyA9IHFbM107XG4gIGxldCB4MiA9IHggKyB4O1xuICBsZXQgeTIgPSB5ICsgeTtcbiAgbGV0IHoyID0geiArIHo7XG5cbiAgbGV0IHh4ID0geCAqIHgyO1xuICBsZXQgeXggPSB5ICogeDI7XG4gIGxldCB5eSA9IHkgKiB5MjtcbiAgbGV0IHp4ID0geiAqIHgyO1xuICBsZXQgenkgPSB6ICogeTI7XG4gIGxldCB6eiA9IHogKiB6MjtcbiAgbGV0IHd4ID0gdyAqIHgyO1xuICBsZXQgd3kgPSB3ICogeTI7XG4gIGxldCB3eiA9IHcgKiB6MjtcblxuICBvdXRbMF0gPSAxIC0geXkgLSB6ejtcbiAgb3V0WzNdID0geXggLSB3ejtcbiAgb3V0WzZdID0genggKyB3eTtcblxuICBvdXRbMV0gPSB5eCArIHd6O1xuICBvdXRbNF0gPSAxIC0geHggLSB6ejtcbiAgb3V0WzddID0genkgLSB3eDtcblxuICBvdXRbMl0gPSB6eCAtIHd5O1xuICBvdXRbNV0gPSB6eSArIHd4O1xuICBvdXRbOF0gPSAxIC0geHggLSB5eTtcblxuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiogQ2FsY3VsYXRlcyBhIDN4MyBub3JtYWwgbWF0cml4ICh0cmFuc3Bvc2UgaW52ZXJzZSkgZnJvbSB0aGUgNHg0IG1hdHJpeFxuKlxuKiBAcGFyYW0ge21hdDN9IG91dCBtYXQzIHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4qIEBwYXJhbSB7bWF0NH0gYSBNYXQ0IHRvIGRlcml2ZSB0aGUgbm9ybWFsIG1hdHJpeCBmcm9tXG4qXG4qIEByZXR1cm5zIHttYXQzfSBvdXRcbiovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsRnJvbU1hdDQob3V0LCBhKSB7XG4gIGxldCBhMDAgPSBhWzBdLCBhMDEgPSBhWzFdLCBhMDIgPSBhWzJdLCBhMDMgPSBhWzNdO1xuICBsZXQgYTEwID0gYVs0XSwgYTExID0gYVs1XSwgYTEyID0gYVs2XSwgYTEzID0gYVs3XTtcbiAgbGV0IGEyMCA9IGFbOF0sIGEyMSA9IGFbOV0sIGEyMiA9IGFbMTBdLCBhMjMgPSBhWzExXTtcbiAgbGV0IGEzMCA9IGFbMTJdLCBhMzEgPSBhWzEzXSwgYTMyID0gYVsxNF0sIGEzMyA9IGFbMTVdO1xuXG4gIGxldCBiMDAgPSBhMDAgKiBhMTEgLSBhMDEgKiBhMTA7XG4gIGxldCBiMDEgPSBhMDAgKiBhMTIgLSBhMDIgKiBhMTA7XG4gIGxldCBiMDIgPSBhMDAgKiBhMTMgLSBhMDMgKiBhMTA7XG4gIGxldCBiMDMgPSBhMDEgKiBhMTIgLSBhMDIgKiBhMTE7XG4gIGxldCBiMDQgPSBhMDEgKiBhMTMgLSBhMDMgKiBhMTE7XG4gIGxldCBiMDUgPSBhMDIgKiBhMTMgLSBhMDMgKiBhMTI7XG4gIGxldCBiMDYgPSBhMjAgKiBhMzEgLSBhMjEgKiBhMzA7XG4gIGxldCBiMDcgPSBhMjAgKiBhMzIgLSBhMjIgKiBhMzA7XG4gIGxldCBiMDggPSBhMjAgKiBhMzMgLSBhMjMgKiBhMzA7XG4gIGxldCBiMDkgPSBhMjEgKiBhMzIgLSBhMjIgKiBhMzE7XG4gIGxldCBiMTAgPSBhMjEgKiBhMzMgLSBhMjMgKiBhMzE7XG4gIGxldCBiMTEgPSBhMjIgKiBhMzMgLSBhMjMgKiBhMzI7XG5cbiAgLy8gQ2FsY3VsYXRlIHRoZSBkZXRlcm1pbmFudFxuICBsZXQgZGV0ID0gYjAwICogYjExIC0gYjAxICogYjEwICsgYjAyICogYjA5ICsgYjAzICogYjA4IC0gYjA0ICogYjA3ICsgYjA1ICogYjA2O1xuXG4gIGlmICghZGV0KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgZGV0ID0gMS4wIC8gZGV0O1xuXG4gIG91dFswXSA9IChhMTEgKiBiMTEgLSBhMTIgKiBiMTAgKyBhMTMgKiBiMDkpICogZGV0O1xuICBvdXRbMV0gPSAoYTEyICogYjA4IC0gYTEwICogYjExIC0gYTEzICogYjA3KSAqIGRldDtcbiAgb3V0WzJdID0gKGExMCAqIGIxMCAtIGExMSAqIGIwOCArIGExMyAqIGIwNikgKiBkZXQ7XG5cbiAgb3V0WzNdID0gKGEwMiAqIGIxMCAtIGEwMSAqIGIxMSAtIGEwMyAqIGIwOSkgKiBkZXQ7XG4gIG91dFs0XSA9IChhMDAgKiBiMTEgLSBhMDIgKiBiMDggKyBhMDMgKiBiMDcpICogZGV0O1xuICBvdXRbNV0gPSAoYTAxICogYjA4IC0gYTAwICogYjEwIC0gYTAzICogYjA2KSAqIGRldDtcblxuICBvdXRbNl0gPSAoYTMxICogYjA1IC0gYTMyICogYjA0ICsgYTMzICogYjAzKSAqIGRldDtcbiAgb3V0WzddID0gKGEzMiAqIGIwMiAtIGEzMCAqIGIwNSAtIGEzMyAqIGIwMSkgKiBkZXQ7XG4gIG91dFs4XSA9IChhMzAgKiBiMDQgLSBhMzEgKiBiMDIgKyBhMzMgKiBiMDApICogZGV0O1xuXG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgMkQgcHJvamVjdGlvbiBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gYm91bmRzXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgbWF0MyBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xuICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIFdpZHRoIG9mIHlvdXIgZ2wgY29udGV4dFxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBIZWlnaHQgb2YgZ2wgY29udGV4dFxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdGlvbihvdXQsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICBvdXRbMF0gPSAyIC8gd2lkdGg7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0gLTIgLyBoZWlnaHQ7XG4gICAgb3V0WzVdID0gMDtcbiAgICBvdXRbNl0gPSAtMTtcbiAgICBvdXRbN10gPSAxO1xuICAgIG91dFs4XSA9IDE7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgbWF0M1xuICpcbiAqIEBwYXJhbSB7bWF0M30gYSBtYXRyaXggdG8gcmVwcmVzZW50IGFzIGEgc3RyaW5nXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG1hdHJpeFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyKGEpIHtcbiAgcmV0dXJuICdtYXQzKCcgKyBhWzBdICsgJywgJyArIGFbMV0gKyAnLCAnICsgYVsyXSArICcsICcgK1xuICAgICAgICAgIGFbM10gKyAnLCAnICsgYVs0XSArICcsICcgKyBhWzVdICsgJywgJyArXG4gICAgICAgICAgYVs2XSArICcsICcgKyBhWzddICsgJywgJyArIGFbOF0gKyAnKSc7XG59XG5cbi8qKlxuICogUmV0dXJucyBGcm9iZW5pdXMgbm9ybSBvZiBhIG1hdDNcbiAqXG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIG1hdHJpeCB0byBjYWxjdWxhdGUgRnJvYmVuaXVzIG5vcm0gb2ZcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IEZyb2Jlbml1cyBub3JtXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9iKGEpIHtcbiAgcmV0dXJuKE1hdGguc3FydChNYXRoLnBvdyhhWzBdLCAyKSArIE1hdGgucG93KGFbMV0sIDIpICsgTWF0aC5wb3coYVsyXSwgMikgKyBNYXRoLnBvdyhhWzNdLCAyKSArIE1hdGgucG93KGFbNF0sIDIpICsgTWF0aC5wb3coYVs1XSwgMikgKyBNYXRoLnBvdyhhWzZdLCAyKSArIE1hdGgucG93KGFbN10sIDIpICsgTWF0aC5wb3coYVs4XSwgMikpKVxufVxuXG4vKipcbiAqIEFkZHMgdHdvIG1hdDMnc1xuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7bWF0M30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSArIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gKyBiWzFdO1xuICBvdXRbMl0gPSBhWzJdICsgYlsyXTtcbiAgb3V0WzNdID0gYVszXSArIGJbM107XG4gIG91dFs0XSA9IGFbNF0gKyBiWzRdO1xuICBvdXRbNV0gPSBhWzVdICsgYls1XTtcbiAgb3V0WzZdID0gYVs2XSArIGJbNl07XG4gIG91dFs3XSA9IGFbN10gKyBiWzddO1xuICBvdXRbOF0gPSBhWzhdICsgYls4XTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTdWJ0cmFjdHMgbWF0cml4IGIgZnJvbSBtYXRyaXggYVxuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7bWF0M30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0KG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdIC0gYlswXTtcbiAgb3V0WzFdID0gYVsxXSAtIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gLSBiWzJdO1xuICBvdXRbM10gPSBhWzNdIC0gYlszXTtcbiAgb3V0WzRdID0gYVs0XSAtIGJbNF07XG4gIG91dFs1XSA9IGFbNV0gLSBiWzVdO1xuICBvdXRbNl0gPSBhWzZdIC0gYls2XTtcbiAgb3V0WzddID0gYVs3XSAtIGJbN107XG4gIG91dFs4XSA9IGFbOF0gLSBiWzhdO1xuICByZXR1cm4gb3V0O1xufVxuXG5cblxuLyoqXG4gKiBNdWx0aXBseSBlYWNoIGVsZW1lbnQgb2YgdGhlIG1hdHJpeCBieSBhIHNjYWxhci5cbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQzfSBhIHRoZSBtYXRyaXggdG8gc2NhbGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBiIGFtb3VudCB0byBzY2FsZSB0aGUgbWF0cml4J3MgZWxlbWVudHMgYnlcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5U2NhbGFyKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICogYjtcbiAgb3V0WzFdID0gYVsxXSAqIGI7XG4gIG91dFsyXSA9IGFbMl0gKiBiO1xuICBvdXRbM10gPSBhWzNdICogYjtcbiAgb3V0WzRdID0gYVs0XSAqIGI7XG4gIG91dFs1XSA9IGFbNV0gKiBiO1xuICBvdXRbNl0gPSBhWzZdICogYjtcbiAgb3V0WzddID0gYVs3XSAqIGI7XG4gIG91dFs4XSA9IGFbOF0gKiBiO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEFkZHMgdHdvIG1hdDMncyBhZnRlciBtdWx0aXBseWluZyBlYWNoIGVsZW1lbnQgb2YgdGhlIHNlY29uZCBvcGVyYW5kIGJ5IGEgc2NhbGFyIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7bWF0M30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsZSB0aGUgYW1vdW50IHRvIHNjYWxlIGIncyBlbGVtZW50cyBieSBiZWZvcmUgYWRkaW5nXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseVNjYWxhckFuZEFkZChvdXQsIGEsIGIsIHNjYWxlKSB7XG4gIG91dFswXSA9IGFbMF0gKyAoYlswXSAqIHNjYWxlKTtcbiAgb3V0WzFdID0gYVsxXSArIChiWzFdICogc2NhbGUpO1xuICBvdXRbMl0gPSBhWzJdICsgKGJbMl0gKiBzY2FsZSk7XG4gIG91dFszXSA9IGFbM10gKyAoYlszXSAqIHNjYWxlKTtcbiAgb3V0WzRdID0gYVs0XSArIChiWzRdICogc2NhbGUpO1xuICBvdXRbNV0gPSBhWzVdICsgKGJbNV0gKiBzY2FsZSk7XG4gIG91dFs2XSA9IGFbNl0gKyAoYls2XSAqIHNjYWxlKTtcbiAgb3V0WzddID0gYVs3XSArIChiWzddICogc2NhbGUpO1xuICBvdXRbOF0gPSBhWzhdICsgKGJbOF0gKiBzY2FsZSk7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgbWF0cmljZXMgaGF2ZSBleGFjdGx5IHRoZSBzYW1lIGVsZW1lbnRzIGluIHRoZSBzYW1lIHBvc2l0aW9uICh3aGVuIGNvbXBhcmVkIHdpdGggPT09KVxuICpcbiAqIEBwYXJhbSB7bWF0M30gYSBUaGUgZmlyc3QgbWF0cml4LlxuICogQHBhcmFtIHttYXQzfSBiIFRoZSBzZWNvbmQgbWF0cml4LlxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIG1hdHJpY2VzIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXhhY3RFcXVhbHMoYSwgYikge1xuICByZXR1cm4gYVswXSA9PT0gYlswXSAmJiBhWzFdID09PSBiWzFdICYmIGFbMl0gPT09IGJbMl0gJiZcbiAgICAgICAgIGFbM10gPT09IGJbM10gJiYgYVs0XSA9PT0gYls0XSAmJiBhWzVdID09PSBiWzVdICYmXG4gICAgICAgICBhWzZdID09PSBiWzZdICYmIGFbN10gPT09IGJbN10gJiYgYVs4XSA9PT0gYls4XTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSBtYXRyaWNlcyBoYXZlIGFwcHJveGltYXRlbHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24uXG4gKlxuICogQHBhcmFtIHttYXQzfSBhIFRoZSBmaXJzdCBtYXRyaXguXG4gKiBAcGFyYW0ge21hdDN9IGIgVGhlIHNlY29uZCBtYXRyaXguXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgbWF0cmljZXMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHMoYSwgYikge1xuICBsZXQgYTAgPSBhWzBdLCBhMSA9IGFbMV0sIGEyID0gYVsyXSwgYTMgPSBhWzNdLCBhNCA9IGFbNF0sIGE1ID0gYVs1XSwgYTYgPSBhWzZdLCBhNyA9IGFbN10sIGE4ID0gYVs4XTtcbiAgbGV0IGIwID0gYlswXSwgYjEgPSBiWzFdLCBiMiA9IGJbMl0sIGIzID0gYlszXSwgYjQgPSBiWzRdLCBiNSA9IGJbNV0sIGI2ID0gYls2XSwgYjcgPSBiWzddLCBiOCA9IGJbOF07XG4gIHJldHVybiAoTWF0aC5hYnMoYTAgLSBiMCkgPD0gZ2xNYXRyaXguRVBTSUxPTipNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEwKSwgTWF0aC5hYnMoYjApKSAmJlxuICAgICAgICAgIE1hdGguYWJzKGExIC0gYjEpIDw9IGdsTWF0cml4LkVQU0lMT04qTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMSksIE1hdGguYWJzKGIxKSkgJiZcbiAgICAgICAgICBNYXRoLmFicyhhMiAtIGIyKSA8PSBnbE1hdHJpeC5FUFNJTE9OKk1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTIpLCBNYXRoLmFicyhiMikpICYmXG4gICAgICAgICAgTWF0aC5hYnMoYTMgLSBiMykgPD0gZ2xNYXRyaXguRVBTSUxPTipNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEzKSwgTWF0aC5hYnMoYjMpKSAmJlxuICAgICAgICAgIE1hdGguYWJzKGE0IC0gYjQpIDw9IGdsTWF0cml4LkVQU0lMT04qTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhNCksIE1hdGguYWJzKGI0KSkgJiZcbiAgICAgICAgICBNYXRoLmFicyhhNSAtIGI1KSA8PSBnbE1hdHJpeC5FUFNJTE9OKk1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTUpLCBNYXRoLmFicyhiNSkpICYmXG4gICAgICAgICAgTWF0aC5hYnMoYTYgLSBiNikgPD0gZ2xNYXRyaXguRVBTSUxPTipNYXRoLm1heCgxLjAsIE1hdGguYWJzKGE2KSwgTWF0aC5hYnMoYjYpKSAmJlxuICAgICAgICAgIE1hdGguYWJzKGE3IC0gYjcpIDw9IGdsTWF0cml4LkVQU0lMT04qTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhNyksIE1hdGguYWJzKGI3KSkgJiZcbiAgICAgICAgICBNYXRoLmFicyhhOCAtIGI4KSA8PSBnbE1hdHJpeC5FUFNJTE9OKk1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTgpLCBNYXRoLmFicyhiOCkpKTtcbn1cblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIG1hdDMubXVsdGlwbHl9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IG11bCA9IG11bHRpcGx5O1xuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgbWF0My5zdWJ0cmFjdH1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3Qgc3ViID0gc3VidHJhY3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nbC1tYXRyaXgvc3JjL2dsLW1hdHJpeC9tYXQzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEJyYW5kb24gSm9uZXMsIENvbGluIE1hY0tlbnppZSBJVi5cblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5mdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5BVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuVEhFIFNPRlRXQVJFLiAqL1xuXG5pbXBvcnQgKiBhcyBnbE1hdHJpeCBmcm9tIFwiLi9jb21tb25cIjtcblxuLyoqXG4gKiAzIERpbWVuc2lvbmFsIFZlY3RvclxuICogQG1vZHVsZSB2ZWMzXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3LCBlbXB0eSB2ZWMzXG4gKlxuICogQHJldHVybnMge3ZlYzN9IGEgbmV3IDNEIHZlY3RvclxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlKCkge1xuICBsZXQgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoMyk7XG4gIG91dFswXSA9IDA7XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyB2ZWMzIGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgdmVjdG9yXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBhIHZlY3RvciB0byBjbG9uZVxuICogQHJldHVybnMge3ZlYzN9IGEgbmV3IDNEIHZlY3RvclxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUoYSkge1xuICB2YXIgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoMyk7XG4gIG91dFswXSA9IGFbMF07XG4gIG91dFsxXSA9IGFbMV07XG4gIG91dFsyXSA9IGFbMl07XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgbGVuZ3RoIG9mIGEgdmVjM1xuICpcbiAqIEBwYXJhbSB7dmVjM30gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIGxlbmd0aCBvZlxuICogQHJldHVybnMge051bWJlcn0gbGVuZ3RoIG9mIGFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxlbmd0aChhKSB7XG4gIGxldCB4ID0gYVswXTtcbiAgbGV0IHkgPSBhWzFdO1xuICBsZXQgeiA9IGFbMl07XG4gIHJldHVybiBNYXRoLnNxcnQoeCp4ICsgeSp5ICsgeip6KTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHZlYzMgaW5pdGlhbGl6ZWQgd2l0aCB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB5IFkgY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geiBaIGNvbXBvbmVudFxuICogQHJldHVybnMge3ZlYzN9IGEgbmV3IDNEIHZlY3RvclxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVZhbHVlcyh4LCB5LCB6KSB7XG4gIGxldCBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSgzKTtcbiAgb3V0WzBdID0geDtcbiAgb3V0WzFdID0geTtcbiAgb3V0WzJdID0gejtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDb3B5IHRoZSB2YWx1ZXMgZnJvbSBvbmUgdmVjMyB0byBhbm90aGVyXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgc291cmNlIHZlY3RvclxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29weShvdXQsIGEpIHtcbiAgb3V0WzBdID0gYVswXTtcbiAgb3V0WzFdID0gYVsxXTtcbiAgb3V0WzJdID0gYVsyXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMzIHRvIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB5IFkgY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geiBaIGNvbXBvbmVudFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0KG91dCwgeCwgeSwgeikge1xuICBvdXRbMF0gPSB4O1xuICBvdXRbMV0gPSB5O1xuICBvdXRbMl0gPSB6O1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEFkZHMgdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSArIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gKyBiWzFdO1xuICBvdXRbMl0gPSBhWzJdICsgYlsyXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTdWJ0cmFjdHMgdmVjdG9yIGIgZnJvbSB2ZWN0b3IgYVxuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0KG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdIC0gYlswXTtcbiAgb3V0WzFdID0gYVsxXSAtIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gLSBiWzJdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIE11bHRpcGxpZXMgdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5KG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICogYlswXTtcbiAgb3V0WzFdID0gYVsxXSAqIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gKiBiWzJdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIERpdmlkZXMgdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpdmlkZShvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAvIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gLyBiWzFdO1xuICBvdXRbMl0gPSBhWzJdIC8gYlsyXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBNYXRoLmNlaWwgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB2ZWN0b3IgdG8gY2VpbFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gY2VpbChvdXQsIGEpIHtcbiAgb3V0WzBdID0gTWF0aC5jZWlsKGFbMF0pO1xuICBvdXRbMV0gPSBNYXRoLmNlaWwoYVsxXSk7XG4gIG91dFsyXSA9IE1hdGguY2VpbChhWzJdKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBNYXRoLmZsb29yIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjM1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdmVjdG9yIHRvIGZsb29yXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmbG9vcihvdXQsIGEpIHtcbiAgb3V0WzBdID0gTWF0aC5mbG9vcihhWzBdKTtcbiAgb3V0WzFdID0gTWF0aC5mbG9vcihhWzFdKTtcbiAgb3V0WzJdID0gTWF0aC5mbG9vcihhWzJdKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBtaW5pbXVtIG9mIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtaW4ob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IE1hdGgubWluKGFbMF0sIGJbMF0pO1xuICBvdXRbMV0gPSBNYXRoLm1pbihhWzFdLCBiWzFdKTtcbiAgb3V0WzJdID0gTWF0aC5taW4oYVsyXSwgYlsyXSk7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbWF4aW11bSBvZiB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbWF4KG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBNYXRoLm1heChhWzBdLCBiWzBdKTtcbiAgb3V0WzFdID0gTWF0aC5tYXgoYVsxXSwgYlsxXSk7XG4gIG91dFsyXSA9IE1hdGgubWF4KGFbMl0sIGJbMl0pO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIE1hdGgucm91bmQgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB2ZWN0b3IgdG8gcm91bmRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvdW5kKG91dCwgYSkge1xuICBvdXRbMF0gPSBNYXRoLnJvdW5kKGFbMF0pO1xuICBvdXRbMV0gPSBNYXRoLnJvdW5kKGFbMV0pO1xuICBvdXRbMl0gPSBNYXRoLnJvdW5kKGFbMl0pO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNjYWxlcyBhIHZlYzMgYnkgYSBzY2FsYXIgbnVtYmVyXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgdmVjdG9yIHRvIHNjYWxlXG4gKiBAcGFyYW0ge051bWJlcn0gYiBhbW91bnQgdG8gc2NhbGUgdGhlIHZlY3RvciBieVxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKiBiO1xuICBvdXRbMV0gPSBhWzFdICogYjtcbiAgb3V0WzJdID0gYVsyXSAqIGI7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQWRkcyB0d28gdmVjMydzIGFmdGVyIHNjYWxpbmcgdGhlIHNlY29uZCBvcGVyYW5kIGJ5IGEgc2NhbGFyIHZhbHVlXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxlIHRoZSBhbW91bnQgdG8gc2NhbGUgYiBieSBiZWZvcmUgYWRkaW5nXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZUFuZEFkZChvdXQsIGEsIGIsIHNjYWxlKSB7XG4gIG91dFswXSA9IGFbMF0gKyAoYlswXSAqIHNjYWxlKTtcbiAgb3V0WzFdID0gYVsxXSArIChiWzFdICogc2NhbGUpO1xuICBvdXRbMl0gPSBhWzJdICsgKGJbMl0gKiBzY2FsZSk7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZXVjbGlkaWFuIGRpc3RhbmNlIGJldHdlZW4gdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXN0YW5jZShhLCBiKSB7XG4gIGxldCB4ID0gYlswXSAtIGFbMF07XG4gIGxldCB5ID0gYlsxXSAtIGFbMV07XG4gIGxldCB6ID0gYlsyXSAtIGFbMl07XG4gIHJldHVybiBNYXRoLnNxcnQoeCp4ICsgeSp5ICsgeip6KTtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBzcXVhcmVkIGV1Y2xpZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHNxdWFyZWQgZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcXVhcmVkRGlzdGFuY2UoYSwgYikge1xuICBsZXQgeCA9IGJbMF0gLSBhWzBdO1xuICBsZXQgeSA9IGJbMV0gLSBhWzFdO1xuICBsZXQgeiA9IGJbMl0gLSBhWzJdO1xuICByZXR1cm4geCp4ICsgeSp5ICsgeip6O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgbGVuZ3RoIG9mIGEgdmVjM1xuICpcbiAqIEBwYXJhbSB7dmVjM30gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIHNxdWFyZWQgbGVuZ3RoIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGxlbmd0aCBvZiBhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcXVhcmVkTGVuZ3RoKGEpIHtcbiAgbGV0IHggPSBhWzBdO1xuICBsZXQgeSA9IGFbMV07XG4gIGxldCB6ID0gYVsyXTtcbiAgcmV0dXJuIHgqeCArIHkqeSArIHoqejtcbn1cblxuLyoqXG4gKiBOZWdhdGVzIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjM1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdmVjdG9yIHRvIG5lZ2F0ZVxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlKG91dCwgYSkge1xuICBvdXRbMF0gPSAtYVswXTtcbiAgb3V0WzFdID0gLWFbMV07XG4gIG91dFsyXSA9IC1hWzJdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGludmVyc2Ugb2YgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB2ZWN0b3IgdG8gaW52ZXJ0XG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnNlKG91dCwgYSkge1xuICBvdXRbMF0gPSAxLjAgLyBhWzBdO1xuICBvdXRbMV0gPSAxLjAgLyBhWzFdO1xuICBvdXRbMl0gPSAxLjAgLyBhWzJdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIE5vcm1hbGl6ZSBhIHZlYzNcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHZlY3RvciB0byBub3JtYWxpemVcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZShvdXQsIGEpIHtcbiAgbGV0IHggPSBhWzBdO1xuICBsZXQgeSA9IGFbMV07XG4gIGxldCB6ID0gYVsyXTtcbiAgbGV0IGxlbiA9IHgqeCArIHkqeSArIHoqejtcbiAgaWYgKGxlbiA+IDApIHtcbiAgICAvL1RPRE86IGV2YWx1YXRlIHVzZSBvZiBnbG1faW52c3FydCBoZXJlP1xuICAgIGxlbiA9IDEgLyBNYXRoLnNxcnQobGVuKTtcbiAgICBvdXRbMF0gPSBhWzBdICogbGVuO1xuICAgIG91dFsxXSA9IGFbMV0gKiBsZW47XG4gICAgb3V0WzJdID0gYVsyXSAqIGxlbjtcbiAgfVxuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRvdCBwcm9kdWN0IG9mIGEgYW5kIGJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRvdChhLCBiKSB7XG4gIHJldHVybiBhWzBdICogYlswXSArIGFbMV0gKiBiWzFdICsgYVsyXSAqIGJbMl07XG59XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIGNyb3NzIHByb2R1Y3Qgb2YgdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyb3NzKG91dCwgYSwgYikge1xuICBsZXQgYXggPSBhWzBdLCBheSA9IGFbMV0sIGF6ID0gYVsyXTtcbiAgbGV0IGJ4ID0gYlswXSwgYnkgPSBiWzFdLCBieiA9IGJbMl07XG5cbiAgb3V0WzBdID0gYXkgKiBieiAtIGF6ICogYnk7XG4gIG91dFsxXSA9IGF6ICogYnggLSBheCAqIGJ6O1xuICBvdXRbMl0gPSBheCAqIGJ5IC0gYXkgKiBieDtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBQZXJmb3JtcyBhIGxpbmVhciBpbnRlcnBvbGF0aW9uIGJldHdlZW4gdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSB0IGludGVycG9sYXRpb24gYW1vdW50IGJldHdlZW4gdGhlIHR3byBpbnB1dHNcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxlcnAob3V0LCBhLCBiLCB0KSB7XG4gIGxldCBheCA9IGFbMF07XG4gIGxldCBheSA9IGFbMV07XG4gIGxldCBheiA9IGFbMl07XG4gIG91dFswXSA9IGF4ICsgdCAqIChiWzBdIC0gYXgpO1xuICBvdXRbMV0gPSBheSArIHQgKiAoYlsxXSAtIGF5KTtcbiAgb3V0WzJdID0gYXogKyB0ICogKGJbMl0gLSBheik7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUGVyZm9ybXMgYSBoZXJtaXRlIGludGVycG9sYXRpb24gd2l0aCB0d28gY29udHJvbCBwb2ludHNcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGMgdGhlIHRoaXJkIG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gZCB0aGUgZm91cnRoIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSB0IGludGVycG9sYXRpb24gYW1vdW50IGJldHdlZW4gdGhlIHR3byBpbnB1dHNcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhlcm1pdGUob3V0LCBhLCBiLCBjLCBkLCB0KSB7XG4gIGxldCBmYWN0b3JUaW1lczIgPSB0ICogdDtcbiAgbGV0IGZhY3RvcjEgPSBmYWN0b3JUaW1lczIgKiAoMiAqIHQgLSAzKSArIDE7XG4gIGxldCBmYWN0b3IyID0gZmFjdG9yVGltZXMyICogKHQgLSAyKSArIHQ7XG4gIGxldCBmYWN0b3IzID0gZmFjdG9yVGltZXMyICogKHQgLSAxKTtcbiAgbGV0IGZhY3RvcjQgPSBmYWN0b3JUaW1lczIgKiAoMyAtIDIgKiB0KTtcblxuICBvdXRbMF0gPSBhWzBdICogZmFjdG9yMSArIGJbMF0gKiBmYWN0b3IyICsgY1swXSAqIGZhY3RvcjMgKyBkWzBdICogZmFjdG9yNDtcbiAgb3V0WzFdID0gYVsxXSAqIGZhY3RvcjEgKyBiWzFdICogZmFjdG9yMiArIGNbMV0gKiBmYWN0b3IzICsgZFsxXSAqIGZhY3RvcjQ7XG4gIG91dFsyXSA9IGFbMl0gKiBmYWN0b3IxICsgYlsyXSAqIGZhY3RvcjIgKyBjWzJdICogZmFjdG9yMyArIGRbMl0gKiBmYWN0b3I0O1xuXG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUGVyZm9ybXMgYSBiZXppZXIgaW50ZXJwb2xhdGlvbiB3aXRoIHR3byBjb250cm9sIHBvaW50c1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYyB0aGUgdGhpcmQgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBkIHRoZSBmb3VydGggb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gYmV6aWVyKG91dCwgYSwgYiwgYywgZCwgdCkge1xuICBsZXQgaW52ZXJzZUZhY3RvciA9IDEgLSB0O1xuICBsZXQgaW52ZXJzZUZhY3RvclRpbWVzVHdvID0gaW52ZXJzZUZhY3RvciAqIGludmVyc2VGYWN0b3I7XG4gIGxldCBmYWN0b3JUaW1lczIgPSB0ICogdDtcbiAgbGV0IGZhY3RvcjEgPSBpbnZlcnNlRmFjdG9yVGltZXNUd28gKiBpbnZlcnNlRmFjdG9yO1xuICBsZXQgZmFjdG9yMiA9IDMgKiB0ICogaW52ZXJzZUZhY3RvclRpbWVzVHdvO1xuICBsZXQgZmFjdG9yMyA9IDMgKiBmYWN0b3JUaW1lczIgKiBpbnZlcnNlRmFjdG9yO1xuICBsZXQgZmFjdG9yNCA9IGZhY3RvclRpbWVzMiAqIHQ7XG5cbiAgb3V0WzBdID0gYVswXSAqIGZhY3RvcjEgKyBiWzBdICogZmFjdG9yMiArIGNbMF0gKiBmYWN0b3IzICsgZFswXSAqIGZhY3RvcjQ7XG4gIG91dFsxXSA9IGFbMV0gKiBmYWN0b3IxICsgYlsxXSAqIGZhY3RvcjIgKyBjWzFdICogZmFjdG9yMyArIGRbMV0gKiBmYWN0b3I0O1xuICBvdXRbMl0gPSBhWzJdICogZmFjdG9yMSArIGJbMl0gKiBmYWN0b3IyICsgY1syXSAqIGZhY3RvcjMgKyBkWzJdICogZmFjdG9yNDtcblxuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHJhbmRvbSB2ZWN0b3Igd2l0aCB0aGUgZ2l2ZW4gc2NhbGVcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtOdW1iZXJ9IFtzY2FsZV0gTGVuZ3RoIG9mIHRoZSByZXN1bHRpbmcgdmVjdG9yLiBJZiBvbW1pdHRlZCwgYSB1bml0IHZlY3RvciB3aWxsIGJlIHJldHVybmVkXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByYW5kb20ob3V0LCBzY2FsZSkge1xuICBzY2FsZSA9IHNjYWxlIHx8IDEuMDtcblxuICBsZXQgciA9IGdsTWF0cml4LlJBTkRPTSgpICogMi4wICogTWF0aC5QSTtcbiAgbGV0IHogPSAoZ2xNYXRyaXguUkFORE9NKCkgKiAyLjApIC0gMS4wO1xuICBsZXQgelNjYWxlID0gTWF0aC5zcXJ0KDEuMC16KnopICogc2NhbGU7XG5cbiAgb3V0WzBdID0gTWF0aC5jb3MocikgKiB6U2NhbGU7XG4gIG91dFsxXSA9IE1hdGguc2luKHIpICogelNjYWxlO1xuICBvdXRbMl0gPSB6ICogc2NhbGU7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjMyB3aXRoIGEgbWF0NC5cbiAqIDR0aCB2ZWN0b3IgY29tcG9uZW50IGlzIGltcGxpY2l0bHkgJzEnXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxuICogQHBhcmFtIHttYXQ0fSBtIG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtTWF0NChvdXQsIGEsIG0pIHtcbiAgbGV0IHggPSBhWzBdLCB5ID0gYVsxXSwgeiA9IGFbMl07XG4gIGxldCB3ID0gbVszXSAqIHggKyBtWzddICogeSArIG1bMTFdICogeiArIG1bMTVdO1xuICB3ID0gdyB8fCAxLjA7XG4gIG91dFswXSA9IChtWzBdICogeCArIG1bNF0gKiB5ICsgbVs4XSAqIHogKyBtWzEyXSkgLyB3O1xuICBvdXRbMV0gPSAobVsxXSAqIHggKyBtWzVdICogeSArIG1bOV0gKiB6ICsgbVsxM10pIC8gdztcbiAgb3V0WzJdID0gKG1bMl0gKiB4ICsgbVs2XSAqIHkgKyBtWzEwXSAqIHogKyBtWzE0XSkgLyB3O1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzMgd2l0aCBhIG1hdDMuXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxuICogQHBhcmFtIHttYXQzfSBtIHRoZSAzeDMgbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1NYXQzKG91dCwgYSwgbSkge1xuICBsZXQgeCA9IGFbMF0sIHkgPSBhWzFdLCB6ID0gYVsyXTtcbiAgb3V0WzBdID0geCAqIG1bMF0gKyB5ICogbVszXSArIHogKiBtWzZdO1xuICBvdXRbMV0gPSB4ICogbVsxXSArIHkgKiBtWzRdICsgeiAqIG1bN107XG4gIG91dFsyXSA9IHggKiBtWzJdICsgeSAqIG1bNV0gKyB6ICogbVs4XTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWMzIHdpdGggYSBxdWF0XG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxuICogQHBhcmFtIHtxdWF0fSBxIHF1YXRlcm5pb24gdG8gdHJhbnNmb3JtIHdpdGhcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybVF1YXQob3V0LCBhLCBxKSB7XG4gIC8vIGJlbmNobWFya3M6IGh0dHA6Ly9qc3BlcmYuY29tL3F1YXRlcm5pb24tdHJhbnNmb3JtLXZlYzMtaW1wbGVtZW50YXRpb25zXG5cbiAgbGV0IHggPSBhWzBdLCB5ID0gYVsxXSwgeiA9IGFbMl07XG4gIGxldCBxeCA9IHFbMF0sIHF5ID0gcVsxXSwgcXogPSBxWzJdLCBxdyA9IHFbM107XG5cbiAgLy8gY2FsY3VsYXRlIHF1YXQgKiB2ZWNcbiAgbGV0IGl4ID0gcXcgKiB4ICsgcXkgKiB6IC0gcXogKiB5O1xuICBsZXQgaXkgPSBxdyAqIHkgKyBxeiAqIHggLSBxeCAqIHo7XG4gIGxldCBpeiA9IHF3ICogeiArIHF4ICogeSAtIHF5ICogeDtcbiAgbGV0IGl3ID0gLXF4ICogeCAtIHF5ICogeSAtIHF6ICogejtcblxuICAvLyBjYWxjdWxhdGUgcmVzdWx0ICogaW52ZXJzZSBxdWF0XG4gIG91dFswXSA9IGl4ICogcXcgKyBpdyAqIC1xeCArIGl5ICogLXF6IC0gaXogKiAtcXk7XG4gIG91dFsxXSA9IGl5ICogcXcgKyBpdyAqIC1xeSArIGl6ICogLXF4IC0gaXggKiAtcXo7XG4gIG91dFsyXSA9IGl6ICogcXcgKyBpdyAqIC1xeiArIGl4ICogLXF5IC0gaXkgKiAtcXg7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUm90YXRlIGEgM0QgdmVjdG9yIGFyb3VuZCB0aGUgeC1heGlzXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCBUaGUgcmVjZWl2aW5nIHZlYzNcbiAqIEBwYXJhbSB7dmVjM30gYSBUaGUgdmVjMyBwb2ludCB0byByb3RhdGVcbiAqIEBwYXJhbSB7dmVjM30gYiBUaGUgb3JpZ2luIG9mIHRoZSByb3RhdGlvblxuICogQHBhcmFtIHtOdW1iZXJ9IGMgVGhlIGFuZ2xlIG9mIHJvdGF0aW9uXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVYKG91dCwgYSwgYiwgYyl7XG4gIGxldCBwID0gW10sIHI9W107XG4gIC8vVHJhbnNsYXRlIHBvaW50IHRvIHRoZSBvcmlnaW5cbiAgcFswXSA9IGFbMF0gLSBiWzBdO1xuICBwWzFdID0gYVsxXSAtIGJbMV07XG4gIHBbMl0gPSBhWzJdIC0gYlsyXTtcblxuICAvL3BlcmZvcm0gcm90YXRpb25cbiAgclswXSA9IHBbMF07XG4gIHJbMV0gPSBwWzFdKk1hdGguY29zKGMpIC0gcFsyXSpNYXRoLnNpbihjKTtcbiAgclsyXSA9IHBbMV0qTWF0aC5zaW4oYykgKyBwWzJdKk1hdGguY29zKGMpO1xuXG4gIC8vdHJhbnNsYXRlIHRvIGNvcnJlY3QgcG9zaXRpb25cbiAgb3V0WzBdID0gclswXSArIGJbMF07XG4gIG91dFsxXSA9IHJbMV0gKyBiWzFdO1xuICBvdXRbMl0gPSByWzJdICsgYlsyXTtcblxuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJvdGF0ZSBhIDNEIHZlY3RvciBhcm91bmQgdGhlIHktYXhpc1xuICogQHBhcmFtIHt2ZWMzfSBvdXQgVGhlIHJlY2VpdmluZyB2ZWMzXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVGhlIHZlYzMgcG9pbnQgdG8gcm90YXRlXG4gKiBAcGFyYW0ge3ZlYzN9IGIgVGhlIG9yaWdpbiBvZiB0aGUgcm90YXRpb25cbiAqIEBwYXJhbSB7TnVtYmVyfSBjIFRoZSBhbmdsZSBvZiByb3RhdGlvblxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWShvdXQsIGEsIGIsIGMpe1xuICBsZXQgcCA9IFtdLCByPVtdO1xuICAvL1RyYW5zbGF0ZSBwb2ludCB0byB0aGUgb3JpZ2luXG4gIHBbMF0gPSBhWzBdIC0gYlswXTtcbiAgcFsxXSA9IGFbMV0gLSBiWzFdO1xuICBwWzJdID0gYVsyXSAtIGJbMl07XG5cbiAgLy9wZXJmb3JtIHJvdGF0aW9uXG4gIHJbMF0gPSBwWzJdKk1hdGguc2luKGMpICsgcFswXSpNYXRoLmNvcyhjKTtcbiAgclsxXSA9IHBbMV07XG4gIHJbMl0gPSBwWzJdKk1hdGguY29zKGMpIC0gcFswXSpNYXRoLnNpbihjKTtcblxuICAvL3RyYW5zbGF0ZSB0byBjb3JyZWN0IHBvc2l0aW9uXG4gIG91dFswXSA9IHJbMF0gKyBiWzBdO1xuICBvdXRbMV0gPSByWzFdICsgYlsxXTtcbiAgb3V0WzJdID0gclsyXSArIGJbMl07XG5cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSb3RhdGUgYSAzRCB2ZWN0b3IgYXJvdW5kIHRoZSB6LWF4aXNcbiAqIEBwYXJhbSB7dmVjM30gb3V0IFRoZSByZWNlaXZpbmcgdmVjM1xuICogQHBhcmFtIHt2ZWMzfSBhIFRoZSB2ZWMzIHBvaW50IHRvIHJvdGF0ZVxuICogQHBhcmFtIHt2ZWMzfSBiIFRoZSBvcmlnaW4gb2YgdGhlIHJvdGF0aW9uXG4gKiBAcGFyYW0ge051bWJlcn0gYyBUaGUgYW5nbGUgb2Ygcm90YXRpb25cbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVoob3V0LCBhLCBiLCBjKXtcbiAgbGV0IHAgPSBbXSwgcj1bXTtcbiAgLy9UcmFuc2xhdGUgcG9pbnQgdG8gdGhlIG9yaWdpblxuICBwWzBdID0gYVswXSAtIGJbMF07XG4gIHBbMV0gPSBhWzFdIC0gYlsxXTtcbiAgcFsyXSA9IGFbMl0gLSBiWzJdO1xuXG4gIC8vcGVyZm9ybSByb3RhdGlvblxuICByWzBdID0gcFswXSpNYXRoLmNvcyhjKSAtIHBbMV0qTWF0aC5zaW4oYyk7XG4gIHJbMV0gPSBwWzBdKk1hdGguc2luKGMpICsgcFsxXSpNYXRoLmNvcyhjKTtcbiAgclsyXSA9IHBbMl07XG5cbiAgLy90cmFuc2xhdGUgdG8gY29ycmVjdCBwb3NpdGlvblxuICBvdXRbMF0gPSByWzBdICsgYlswXTtcbiAgb3V0WzFdID0gclsxXSArIGJbMV07XG4gIG91dFsyXSA9IHJbMl0gKyBiWzJdO1xuXG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogR2V0IHRoZSBhbmdsZSBiZXR3ZWVuIHR3byAzRCB2ZWN0b3JzXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiBUaGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IFRoZSBhbmdsZSBpbiByYWRpYW5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhbmdsZShhLCBiKSB7XG4gIGxldCB0ZW1wQSA9IGZyb21WYWx1ZXMoYVswXSwgYVsxXSwgYVsyXSk7XG4gIGxldCB0ZW1wQiA9IGZyb21WYWx1ZXMoYlswXSwgYlsxXSwgYlsyXSk7XG5cbiAgbm9ybWFsaXplKHRlbXBBLCB0ZW1wQSk7XG4gIG5vcm1hbGl6ZSh0ZW1wQiwgdGVtcEIpO1xuXG4gIGxldCBjb3NpbmUgPSBkb3QodGVtcEEsIHRlbXBCKTtcblxuICBpZihjb3NpbmUgPiAxLjApIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICBlbHNlIGlmKGNvc2luZSA8IC0xLjApIHtcbiAgICByZXR1cm4gTWF0aC5QSTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gTWF0aC5hY29zKGNvc2luZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgdmVjdG9yXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBhIHZlY3RvciB0byByZXByZXNlbnQgYXMgYSBzdHJpbmdcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHIoYSkge1xuICByZXR1cm4gJ3ZlYzMoJyArIGFbMF0gKyAnLCAnICsgYVsxXSArICcsICcgKyBhWzJdICsgJyknO1xufVxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHZlY3RvcnMgaGF2ZSBleGFjdGx5IHRoZSBzYW1lIGVsZW1lbnRzIGluIHRoZSBzYW1lIHBvc2l0aW9uICh3aGVuIGNvbXBhcmVkIHdpdGggPT09KVxuICpcbiAqIEBwYXJhbSB7dmVjM30gYSBUaGUgZmlyc3QgdmVjdG9yLlxuICogQHBhcmFtIHt2ZWMzfSBiIFRoZSBzZWNvbmQgdmVjdG9yLlxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIHZlY3RvcnMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGFjdEVxdWFscyhhLCBiKSB7XG4gIHJldHVybiBhWzBdID09PSBiWzBdICYmIGFbMV0gPT09IGJbMV0gJiYgYVsyXSA9PT0gYlsyXTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSB2ZWN0b3JzIGhhdmUgYXBwcm94aW1hdGVseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbi5cbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVGhlIGZpcnN0IHZlY3Rvci5cbiAqIEBwYXJhbSB7dmVjM30gYiBUaGUgc2Vjb25kIHZlY3Rvci5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSB2ZWN0b3JzIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxzKGEsIGIpIHtcbiAgbGV0IGEwID0gYVswXSwgYTEgPSBhWzFdLCBhMiA9IGFbMl07XG4gIGxldCBiMCA9IGJbMF0sIGIxID0gYlsxXSwgYjIgPSBiWzJdO1xuICByZXR1cm4gKE1hdGguYWJzKGEwIC0gYjApIDw9IGdsTWF0cml4LkVQU0lMT04qTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMCksIE1hdGguYWJzKGIwKSkgJiZcbiAgICAgICAgICBNYXRoLmFicyhhMSAtIGIxKSA8PSBnbE1hdHJpeC5FUFNJTE9OKk1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTEpLCBNYXRoLmFicyhiMSkpICYmXG4gICAgICAgICAgTWF0aC5hYnMoYTIgLSBiMikgPD0gZ2xNYXRyaXguRVBTSUxPTipNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEyKSwgTWF0aC5hYnMoYjIpKSk7XG59XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayB2ZWMzLnN1YnRyYWN0fVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBzdWIgPSBzdWJ0cmFjdDtcblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzMubXVsdGlwbHl9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IG11bCA9IG11bHRpcGx5O1xuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMy5kaXZpZGV9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IGRpdiA9IGRpdmlkZTtcblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzMuZGlzdGFuY2V9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IGRpc3QgPSBkaXN0YW5jZTtcblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzMuc3F1YXJlZERpc3RhbmNlfVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBzcXJEaXN0ID0gc3F1YXJlZERpc3RhbmNlO1xuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMy5sZW5ndGh9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IGxlbiA9IGxlbmd0aDtcblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzMuc3F1YXJlZExlbmd0aH1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3Qgc3FyTGVuID0gc3F1YXJlZExlbmd0aDtcblxuLyoqXG4gKiBQZXJmb3JtIHNvbWUgb3BlcmF0aW9uIG92ZXIgYW4gYXJyYXkgb2YgdmVjM3MuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYSB0aGUgYXJyYXkgb2YgdmVjdG9ycyB0byBpdGVyYXRlIG92ZXJcbiAqIEBwYXJhbSB7TnVtYmVyfSBzdHJpZGUgTnVtYmVyIG9mIGVsZW1lbnRzIGJldHdlZW4gdGhlIHN0YXJ0IG9mIGVhY2ggdmVjMy4gSWYgMCBhc3N1bWVzIHRpZ2h0bHkgcGFja2VkXG4gKiBAcGFyYW0ge051bWJlcn0gb2Zmc2V0IE51bWJlciBvZiBlbGVtZW50cyB0byBza2lwIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGFycmF5XG4gKiBAcGFyYW0ge051bWJlcn0gY291bnQgTnVtYmVyIG9mIHZlYzNzIHRvIGl0ZXJhdGUgb3Zlci4gSWYgMCBpdGVyYXRlcyBvdmVyIGVudGlyZSBhcnJheVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gRnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCB2ZWN0b3IgaW4gdGhlIGFycmF5XG4gKiBAcGFyYW0ge09iamVjdH0gW2FyZ10gYWRkaXRpb25hbCBhcmd1bWVudCB0byBwYXNzIHRvIGZuXG4gKiBAcmV0dXJucyB7QXJyYXl9IGFcbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3QgZm9yRWFjaCA9IChmdW5jdGlvbigpIHtcbiAgbGV0IHZlYyA9IGNyZWF0ZSgpO1xuXG4gIHJldHVybiBmdW5jdGlvbihhLCBzdHJpZGUsIG9mZnNldCwgY291bnQsIGZuLCBhcmcpIHtcbiAgICBsZXQgaSwgbDtcbiAgICBpZighc3RyaWRlKSB7XG4gICAgICBzdHJpZGUgPSAzO1xuICAgIH1cblxuICAgIGlmKCFvZmZzZXQpIHtcbiAgICAgIG9mZnNldCA9IDA7XG4gICAgfVxuXG4gICAgaWYoY291bnQpIHtcbiAgICAgIGwgPSBNYXRoLm1pbigoY291bnQgKiBzdHJpZGUpICsgb2Zmc2V0LCBhLmxlbmd0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGwgPSBhLmxlbmd0aDtcbiAgICB9XG5cbiAgICBmb3IoaSA9IG9mZnNldDsgaSA8IGw7IGkgKz0gc3RyaWRlKSB7XG4gICAgICB2ZWNbMF0gPSBhW2ldOyB2ZWNbMV0gPSBhW2krMV07IHZlY1syXSA9IGFbaSsyXTtcbiAgICAgIGZuKHZlYywgdmVjLCBhcmcpO1xuICAgICAgYVtpXSA9IHZlY1swXTsgYVtpKzFdID0gdmVjWzFdOyBhW2krMl0gPSB2ZWNbMl07XG4gICAgfVxuXG4gICAgcmV0dXJuIGE7XG4gIH07XG59KSgpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2wtbWF0cml4L3NyYy9nbC1tYXRyaXgvdmVjMy5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQ29weXJpZ2h0IChjKSAyMDE1LCBCcmFuZG9uIEpvbmVzLCBDb2xpbiBNYWNLZW56aWUgSVYuXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cblRIRSBTT0ZUV0FSRS4gKi9cblxuaW1wb3J0ICogYXMgZ2xNYXRyaXggZnJvbSBcIi4vY29tbW9uXCI7XG5cbi8qKlxuICogNCBEaW1lbnNpb25hbCBWZWN0b3JcbiAqIEBtb2R1bGUgdmVjNFxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldywgZW1wdHkgdmVjNFxuICpcbiAqIEByZXR1cm5zIHt2ZWM0fSBhIG5ldyA0RCB2ZWN0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgbGV0IG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDQpO1xuICBvdXRbMF0gPSAwO1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAwO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgdmVjNCBpbml0aWFsaXplZCB3aXRoIHZhbHVlcyBmcm9tIGFuIGV4aXN0aW5nIHZlY3RvclxuICpcbiAqIEBwYXJhbSB7dmVjNH0gYSB2ZWN0b3IgdG8gY2xvbmVcbiAqIEByZXR1cm5zIHt2ZWM0fSBhIG5ldyA0RCB2ZWN0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb25lKGEpIHtcbiAgbGV0IG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDQpO1xuICBvdXRbMF0gPSBhWzBdO1xuICBvdXRbMV0gPSBhWzFdO1xuICBvdXRbMl0gPSBhWzJdO1xuICBvdXRbM10gPSBhWzNdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgdmVjNCBpbml0aWFsaXplZCB3aXRoIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0geCBYIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB6IFogY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0gdyBXIGNvbXBvbmVudFxuICogQHJldHVybnMge3ZlYzR9IGEgbmV3IDREIHZlY3RvclxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVZhbHVlcyh4LCB5LCB6LCB3KSB7XG4gIGxldCBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSg0KTtcbiAgb3V0WzBdID0geDtcbiAgb3V0WzFdID0geTtcbiAgb3V0WzJdID0gejtcbiAgb3V0WzNdID0gdztcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDb3B5IHRoZSB2YWx1ZXMgZnJvbSBvbmUgdmVjNCB0byBhbm90aGVyXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgc291cmNlIHZlY3RvclxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29weShvdXQsIGEpIHtcbiAgb3V0WzBdID0gYVswXTtcbiAgb3V0WzFdID0gYVsxXTtcbiAgb3V0WzJdID0gYVsyXTtcbiAgb3V0WzNdID0gYVszXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWM0IHRvIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB5IFkgY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geiBaIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHcgVyBjb21wb25lbnRcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldChvdXQsIHgsIHksIHosIHcpIHtcbiAgb3V0WzBdID0geDtcbiAgb3V0WzFdID0geTtcbiAgb3V0WzJdID0gejtcbiAgb3V0WzNdID0gdztcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBBZGRzIHR3byB2ZWM0J3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGQob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKyBiWzBdO1xuICBvdXRbMV0gPSBhWzFdICsgYlsxXTtcbiAgb3V0WzJdID0gYVsyXSArIGJbMl07XG4gIG91dFszXSA9IGFbM10gKyBiWzNdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFN1YnRyYWN0cyB2ZWN0b3IgYiBmcm9tIHZlY3RvciBhXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3Qob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gLSBiWzBdO1xuICBvdXRbMV0gPSBhWzFdIC0gYlsxXTtcbiAgb3V0WzJdID0gYVsyXSAtIGJbMl07XG4gIG91dFszXSA9IGFbM10gLSBiWzNdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIE11bHRpcGxpZXMgdHdvIHZlYzQnc1xuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5KG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICogYlswXTtcbiAgb3V0WzFdID0gYVsxXSAqIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gKiBiWzJdO1xuICBvdXRbM10gPSBhWzNdICogYlszXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBEaXZpZGVzIHR3byB2ZWM0J3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXZpZGUob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gLyBiWzBdO1xuICBvdXRbMV0gPSBhWzFdIC8gYlsxXTtcbiAgb3V0WzJdID0gYVsyXSAvIGJbMl07XG4gIG91dFszXSA9IGFbM10gLyBiWzNdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIE1hdGguY2VpbCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzRcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHZlY3RvciB0byBjZWlsXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjZWlsKG91dCwgYSkge1xuICBvdXRbMF0gPSBNYXRoLmNlaWwoYVswXSk7XG4gIG91dFsxXSA9IE1hdGguY2VpbChhWzFdKTtcbiAgb3V0WzJdID0gTWF0aC5jZWlsKGFbMl0pO1xuICBvdXRbM10gPSBNYXRoLmNlaWwoYVszXSk7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogTWF0aC5mbG9vciB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzRcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHZlY3RvciB0byBmbG9vclxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZmxvb3Iob3V0LCBhKSB7XG4gIG91dFswXSA9IE1hdGguZmxvb3IoYVswXSk7XG4gIG91dFsxXSA9IE1hdGguZmxvb3IoYVsxXSk7XG4gIG91dFsyXSA9IE1hdGguZmxvb3IoYVsyXSk7XG4gIG91dFszXSA9IE1hdGguZmxvb3IoYVszXSk7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbWluaW11bSBvZiB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbWluKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBNYXRoLm1pbihhWzBdLCBiWzBdKTtcbiAgb3V0WzFdID0gTWF0aC5taW4oYVsxXSwgYlsxXSk7XG4gIG91dFsyXSA9IE1hdGgubWluKGFbMl0sIGJbMl0pO1xuICBvdXRbM10gPSBNYXRoLm1pbihhWzNdLCBiWzNdKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBtYXhpbXVtIG9mIHR3byB2ZWM0J3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXgob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IE1hdGgubWF4KGFbMF0sIGJbMF0pO1xuICBvdXRbMV0gPSBNYXRoLm1heChhWzFdLCBiWzFdKTtcbiAgb3V0WzJdID0gTWF0aC5tYXgoYVsyXSwgYlsyXSk7XG4gIG91dFszXSA9IE1hdGgubWF4KGFbM10sIGJbM10pO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIE1hdGgucm91bmQgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWM0XG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB2ZWN0b3IgdG8gcm91bmRcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvdW5kKG91dCwgYSkge1xuICBvdXRbMF0gPSBNYXRoLnJvdW5kKGFbMF0pO1xuICBvdXRbMV0gPSBNYXRoLnJvdW5kKGFbMV0pO1xuICBvdXRbMl0gPSBNYXRoLnJvdW5kKGFbMl0pO1xuICBvdXRbM10gPSBNYXRoLnJvdW5kKGFbM10pO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNjYWxlcyBhIHZlYzQgYnkgYSBzY2FsYXIgbnVtYmVyXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgdmVjdG9yIHRvIHNjYWxlXG4gKiBAcGFyYW0ge051bWJlcn0gYiBhbW91bnQgdG8gc2NhbGUgdGhlIHZlY3RvciBieVxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKiBiO1xuICBvdXRbMV0gPSBhWzFdICogYjtcbiAgb3V0WzJdID0gYVsyXSAqIGI7XG4gIG91dFszXSA9IGFbM10gKiBiO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEFkZHMgdHdvIHZlYzQncyBhZnRlciBzY2FsaW5nIHRoZSBzZWNvbmQgb3BlcmFuZCBieSBhIHNjYWxhciB2YWx1ZVxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsZSB0aGUgYW1vdW50IHRvIHNjYWxlIGIgYnkgYmVmb3JlIGFkZGluZ1xuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2NhbGVBbmRBZGQob3V0LCBhLCBiLCBzY2FsZSkge1xuICBvdXRbMF0gPSBhWzBdICsgKGJbMF0gKiBzY2FsZSk7XG4gIG91dFsxXSA9IGFbMV0gKyAoYlsxXSAqIHNjYWxlKTtcbiAgb3V0WzJdID0gYVsyXSArIChiWzJdICogc2NhbGUpO1xuICBvdXRbM10gPSBhWzNdICsgKGJbM10gKiBzY2FsZSk7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZXVjbGlkaWFuIGRpc3RhbmNlIGJldHdlZW4gdHdvIHZlYzQnc1xuICpcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXN0YW5jZShhLCBiKSB7XG4gIGxldCB4ID0gYlswXSAtIGFbMF07XG4gIGxldCB5ID0gYlsxXSAtIGFbMV07XG4gIGxldCB6ID0gYlsyXSAtIGFbMl07XG4gIGxldCB3ID0gYlszXSAtIGFbM107XG4gIHJldHVybiBNYXRoLnNxcnQoeCp4ICsgeSp5ICsgeip6ICsgdyp3KTtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBzcXVhcmVkIGV1Y2xpZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byB2ZWM0J3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHNxdWFyZWQgZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcXVhcmVkRGlzdGFuY2UoYSwgYikge1xuICBsZXQgeCA9IGJbMF0gLSBhWzBdO1xuICBsZXQgeSA9IGJbMV0gLSBhWzFdO1xuICBsZXQgeiA9IGJbMl0gLSBhWzJdO1xuICBsZXQgdyA9IGJbM10gLSBhWzNdO1xuICByZXR1cm4geCp4ICsgeSp5ICsgeip6ICsgdyp3O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGxlbmd0aCBvZiBhIHZlYzRcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdmVjdG9yIHRvIGNhbGN1bGF0ZSBsZW5ndGggb2ZcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGxlbmd0aCBvZiBhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsZW5ndGgoYSkge1xuICBsZXQgeCA9IGFbMF07XG4gIGxldCB5ID0gYVsxXTtcbiAgbGV0IHogPSBhWzJdO1xuICBsZXQgdyA9IGFbM107XG4gIHJldHVybiBNYXRoLnNxcnQoeCp4ICsgeSp5ICsgeip6ICsgdyp3KTtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBzcXVhcmVkIGxlbmd0aCBvZiBhIHZlYzRcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdmVjdG9yIHRvIGNhbGN1bGF0ZSBzcXVhcmVkIGxlbmd0aCBvZlxuICogQHJldHVybnMge051bWJlcn0gc3F1YXJlZCBsZW5ndGggb2YgYVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3F1YXJlZExlbmd0aChhKSB7XG4gIGxldCB4ID0gYVswXTtcbiAgbGV0IHkgPSBhWzFdO1xuICBsZXQgeiA9IGFbMl07XG4gIGxldCB3ID0gYVszXTtcbiAgcmV0dXJuIHgqeCArIHkqeSArIHoqeiArIHcqdztcbn1cblxuLyoqXG4gKiBOZWdhdGVzIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjNFxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdmVjdG9yIHRvIG5lZ2F0ZVxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlKG91dCwgYSkge1xuICBvdXRbMF0gPSAtYVswXTtcbiAgb3V0WzFdID0gLWFbMV07XG4gIG91dFsyXSA9IC1hWzJdO1xuICBvdXRbM10gPSAtYVszXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBpbnZlcnNlIG9mIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjNFxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdmVjdG9yIHRvIGludmVydFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJzZShvdXQsIGEpIHtcbiAgb3V0WzBdID0gMS4wIC8gYVswXTtcbiAgb3V0WzFdID0gMS4wIC8gYVsxXTtcbiAgb3V0WzJdID0gMS4wIC8gYVsyXTtcbiAgb3V0WzNdID0gMS4wIC8gYVszXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBOb3JtYWxpemUgYSB2ZWM0XG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB2ZWN0b3IgdG8gbm9ybWFsaXplXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemUob3V0LCBhKSB7XG4gIGxldCB4ID0gYVswXTtcbiAgbGV0IHkgPSBhWzFdO1xuICBsZXQgeiA9IGFbMl07XG4gIGxldCB3ID0gYVszXTtcbiAgbGV0IGxlbiA9IHgqeCArIHkqeSArIHoqeiArIHcqdztcbiAgaWYgKGxlbiA+IDApIHtcbiAgICBsZW4gPSAxIC8gTWF0aC5zcXJ0KGxlbik7XG4gICAgb3V0WzBdID0geCAqIGxlbjtcbiAgICBvdXRbMV0gPSB5ICogbGVuO1xuICAgIG91dFsyXSA9IHogKiBsZW47XG4gICAgb3V0WzNdID0gdyAqIGxlbjtcbiAgfVxuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byB2ZWM0J3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRvdCBwcm9kdWN0IG9mIGEgYW5kIGJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRvdChhLCBiKSB7XG4gIHJldHVybiBhWzBdICogYlswXSArIGFbMV0gKiBiWzFdICsgYVsyXSAqIGJbMl0gKyBhWzNdICogYlszXTtcbn1cblxuLyoqXG4gKiBQZXJmb3JtcyBhIGxpbmVhciBpbnRlcnBvbGF0aW9uIGJldHdlZW4gdHdvIHZlYzQnc1xuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSB0IGludGVycG9sYXRpb24gYW1vdW50IGJldHdlZW4gdGhlIHR3byBpbnB1dHNcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxlcnAob3V0LCBhLCBiLCB0KSB7XG4gIGxldCBheCA9IGFbMF07XG4gIGxldCBheSA9IGFbMV07XG4gIGxldCBheiA9IGFbMl07XG4gIGxldCBhdyA9IGFbM107XG4gIG91dFswXSA9IGF4ICsgdCAqIChiWzBdIC0gYXgpO1xuICBvdXRbMV0gPSBheSArIHQgKiAoYlsxXSAtIGF5KTtcbiAgb3V0WzJdID0gYXogKyB0ICogKGJbMl0gLSBheik7XG4gIG91dFszXSA9IGF3ICsgdCAqIChiWzNdIC0gYXcpO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHJhbmRvbSB2ZWN0b3Igd2l0aCB0aGUgZ2l2ZW4gc2NhbGVcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtOdW1iZXJ9IFtzY2FsZV0gTGVuZ3RoIG9mIHRoZSByZXN1bHRpbmcgdmVjdG9yLiBJZiBvbW1pdHRlZCwgYSB1bml0IHZlY3RvciB3aWxsIGJlIHJldHVybmVkXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByYW5kb20ob3V0LCB2ZWN0b3JTY2FsZSkge1xuICB2ZWN0b3JTY2FsZSA9IHZlY3RvclNjYWxlIHx8IDEuMDtcblxuICAvL1RPRE86IFRoaXMgaXMgYSBwcmV0dHkgYXdmdWwgd2F5IG9mIGRvaW5nIHRoaXMuIEZpbmQgc29tZXRoaW5nIGJldHRlci5cbiAgb3V0WzBdID0gZ2xNYXRyaXguUkFORE9NKCk7XG4gIG91dFsxXSA9IGdsTWF0cml4LlJBTkRPTSgpO1xuICBvdXRbMl0gPSBnbE1hdHJpeC5SQU5ET00oKTtcbiAgb3V0WzNdID0gZ2xNYXRyaXguUkFORE9NKCk7XG4gIG5vcm1hbGl6ZShvdXQsIG91dCk7XG4gIHNjYWxlKG91dCwgb3V0LCB2ZWN0b3JTY2FsZSk7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjNCB3aXRoIGEgbWF0NC5cbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXG4gKiBAcGFyYW0ge21hdDR9IG0gbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1NYXQ0KG91dCwgYSwgbSkge1xuICBsZXQgeCA9IGFbMF0sIHkgPSBhWzFdLCB6ID0gYVsyXSwgdyA9IGFbM107XG4gIG91dFswXSA9IG1bMF0gKiB4ICsgbVs0XSAqIHkgKyBtWzhdICogeiArIG1bMTJdICogdztcbiAgb3V0WzFdID0gbVsxXSAqIHggKyBtWzVdICogeSArIG1bOV0gKiB6ICsgbVsxM10gKiB3O1xuICBvdXRbMl0gPSBtWzJdICogeCArIG1bNl0gKiB5ICsgbVsxMF0gKiB6ICsgbVsxNF0gKiB3O1xuICBvdXRbM10gPSBtWzNdICogeCArIG1bN10gKiB5ICsgbVsxMV0gKiB6ICsgbVsxNV0gKiB3O1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzQgd2l0aCBhIHF1YXRcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXG4gKiBAcGFyYW0ge3F1YXR9IHEgcXVhdGVybmlvbiB0byB0cmFuc2Zvcm0gd2l0aFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtUXVhdChvdXQsIGEsIHEpIHtcbiAgbGV0IHggPSBhWzBdLCB5ID0gYVsxXSwgeiA9IGFbMl07XG4gIGxldCBxeCA9IHFbMF0sIHF5ID0gcVsxXSwgcXogPSBxWzJdLCBxdyA9IHFbM107XG5cbiAgLy8gY2FsY3VsYXRlIHF1YXQgKiB2ZWNcbiAgbGV0IGl4ID0gcXcgKiB4ICsgcXkgKiB6IC0gcXogKiB5O1xuICBsZXQgaXkgPSBxdyAqIHkgKyBxeiAqIHggLSBxeCAqIHo7XG4gIGxldCBpeiA9IHF3ICogeiArIHF4ICogeSAtIHF5ICogeDtcbiAgbGV0IGl3ID0gLXF4ICogeCAtIHF5ICogeSAtIHF6ICogejtcblxuICAvLyBjYWxjdWxhdGUgcmVzdWx0ICogaW52ZXJzZSBxdWF0XG4gIG91dFswXSA9IGl4ICogcXcgKyBpdyAqIC1xeCArIGl5ICogLXF6IC0gaXogKiAtcXk7XG4gIG91dFsxXSA9IGl5ICogcXcgKyBpdyAqIC1xeSArIGl6ICogLXF4IC0gaXggKiAtcXo7XG4gIG91dFsyXSA9IGl6ICogcXcgKyBpdyAqIC1xeiArIGl4ICogLXF5IC0gaXkgKiAtcXg7XG4gIG91dFszXSA9IGFbM107XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIHZlY3RvclxuICpcbiAqIEBwYXJhbSB7dmVjNH0gYSB2ZWN0b3IgdG8gcmVwcmVzZW50IGFzIGEgc3RyaW5nXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyKGEpIHtcbiAgcmV0dXJuICd2ZWM0KCcgKyBhWzBdICsgJywgJyArIGFbMV0gKyAnLCAnICsgYVsyXSArICcsICcgKyBhWzNdICsgJyknO1xufVxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHZlY3RvcnMgaGF2ZSBleGFjdGx5IHRoZSBzYW1lIGVsZW1lbnRzIGluIHRoZSBzYW1lIHBvc2l0aW9uICh3aGVuIGNvbXBhcmVkIHdpdGggPT09KVxuICpcbiAqIEBwYXJhbSB7dmVjNH0gYSBUaGUgZmlyc3QgdmVjdG9yLlxuICogQHBhcmFtIHt2ZWM0fSBiIFRoZSBzZWNvbmQgdmVjdG9yLlxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIHZlY3RvcnMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGFjdEVxdWFscyhhLCBiKSB7XG4gIHJldHVybiBhWzBdID09PSBiWzBdICYmIGFbMV0gPT09IGJbMV0gJiYgYVsyXSA9PT0gYlsyXSAmJiBhWzNdID09PSBiWzNdO1xufVxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHZlY3RvcnMgaGF2ZSBhcHByb3hpbWF0ZWx5IHRoZSBzYW1lIGVsZW1lbnRzIGluIHRoZSBzYW1lIHBvc2l0aW9uLlxuICpcbiAqIEBwYXJhbSB7dmVjNH0gYSBUaGUgZmlyc3QgdmVjdG9yLlxuICogQHBhcmFtIHt2ZWM0fSBiIFRoZSBzZWNvbmQgdmVjdG9yLlxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIHZlY3RvcnMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHMoYSwgYikge1xuICBsZXQgYTAgPSBhWzBdLCBhMSA9IGFbMV0sIGEyID0gYVsyXSwgYTMgPSBhWzNdO1xuICBsZXQgYjAgPSBiWzBdLCBiMSA9IGJbMV0sIGIyID0gYlsyXSwgYjMgPSBiWzNdO1xuICByZXR1cm4gKE1hdGguYWJzKGEwIC0gYjApIDw9IGdsTWF0cml4LkVQU0lMT04qTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMCksIE1hdGguYWJzKGIwKSkgJiZcbiAgICAgICAgICBNYXRoLmFicyhhMSAtIGIxKSA8PSBnbE1hdHJpeC5FUFNJTE9OKk1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTEpLCBNYXRoLmFicyhiMSkpICYmXG4gICAgICAgICAgTWF0aC5hYnMoYTIgLSBiMikgPD0gZ2xNYXRyaXguRVBTSUxPTipNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEyKSwgTWF0aC5hYnMoYjIpKSAmJlxuICAgICAgICAgIE1hdGguYWJzKGEzIC0gYjMpIDw9IGdsTWF0cml4LkVQU0lMT04qTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMyksIE1hdGguYWJzKGIzKSkpO1xufVxuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjNC5zdWJ0cmFjdH1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3Qgc3ViID0gc3VidHJhY3Q7XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayB2ZWM0Lm11bHRpcGx5fVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBtdWwgPSBtdWx0aXBseTtcblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzQuZGl2aWRlfVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBkaXYgPSBkaXZpZGU7XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayB2ZWM0LmRpc3RhbmNlfVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBkaXN0ID0gZGlzdGFuY2U7XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayB2ZWM0LnNxdWFyZWREaXN0YW5jZX1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3Qgc3FyRGlzdCA9IHNxdWFyZWREaXN0YW5jZTtcblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzQubGVuZ3RofVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBsZW4gPSBsZW5ndGg7XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayB2ZWM0LnNxdWFyZWRMZW5ndGh9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IHNxckxlbiA9IHNxdWFyZWRMZW5ndGg7XG5cbi8qKlxuICogUGVyZm9ybSBzb21lIG9wZXJhdGlvbiBvdmVyIGFuIGFycmF5IG9mIHZlYzRzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGEgdGhlIGFycmF5IG9mIHZlY3RvcnMgdG8gaXRlcmF0ZSBvdmVyXG4gKiBAcGFyYW0ge051bWJlcn0gc3RyaWRlIE51bWJlciBvZiBlbGVtZW50cyBiZXR3ZWVuIHRoZSBzdGFydCBvZiBlYWNoIHZlYzQuIElmIDAgYXNzdW1lcyB0aWdodGx5IHBhY2tlZFxuICogQHBhcmFtIHtOdW1iZXJ9IG9mZnNldCBOdW1iZXIgb2YgZWxlbWVudHMgdG8gc2tpcCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBhcnJheVxuICogQHBhcmFtIHtOdW1iZXJ9IGNvdW50IE51bWJlciBvZiB2ZWM0cyB0byBpdGVyYXRlIG92ZXIuIElmIDAgaXRlcmF0ZXMgb3ZlciBlbnRpcmUgYXJyYXlcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIEZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggdmVjdG9yIGluIHRoZSBhcnJheVxuICogQHBhcmFtIHtPYmplY3R9IFthcmddIGFkZGl0aW9uYWwgYXJndW1lbnQgdG8gcGFzcyB0byBmblxuICogQHJldHVybnMge0FycmF5fSBhXG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IGZvckVhY2ggPSAoZnVuY3Rpb24oKSB7XG4gIGxldCB2ZWMgPSBjcmVhdGUoKTtcblxuICByZXR1cm4gZnVuY3Rpb24oYSwgc3RyaWRlLCBvZmZzZXQsIGNvdW50LCBmbiwgYXJnKSB7XG4gICAgbGV0IGksIGw7XG4gICAgaWYoIXN0cmlkZSkge1xuICAgICAgc3RyaWRlID0gNDtcbiAgICB9XG5cbiAgICBpZighb2Zmc2V0KSB7XG4gICAgICBvZmZzZXQgPSAwO1xuICAgIH1cblxuICAgIGlmKGNvdW50KSB7XG4gICAgICBsID0gTWF0aC5taW4oKGNvdW50ICogc3RyaWRlKSArIG9mZnNldCwgYS5sZW5ndGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsID0gYS5sZW5ndGg7XG4gICAgfVxuXG4gICAgZm9yKGkgPSBvZmZzZXQ7IGkgPCBsOyBpICs9IHN0cmlkZSkge1xuICAgICAgdmVjWzBdID0gYVtpXTsgdmVjWzFdID0gYVtpKzFdOyB2ZWNbMl0gPSBhW2krMl07IHZlY1szXSA9IGFbaSszXTtcbiAgICAgIGZuKHZlYywgdmVjLCBhcmcpO1xuICAgICAgYVtpXSA9IHZlY1swXTsgYVtpKzFdID0gdmVjWzFdOyBhW2krMl0gPSB2ZWNbMl07IGFbaSszXSA9IHZlY1szXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYTtcbiAgfTtcbn0pKCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nbC1tYXRyaXgvc3JjL2dsLW1hdHJpeC92ZWM0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyB2ZWMzIH0gZnJvbSAnZ2wtbWF0cml4J1xuaW1wb3J0IHsgdHlwZXMsIHZlY3RvciwgYXR0cmlidXRlLCBjb21tb24gfSBmcm9tICcuLi91dGlsL3V0aWwnXG5pbXBvcnQgKiBhcyB0ZXh0dXJlIGZyb20gJy4uL3RleHR1cmUvdGV4dHVyZSdcblxudHlwZSBBdHRyaWJ1dGVOYW1lcyA9ICdyb3VnaG5lc3MnIHwgJ2FsYmVkbycgfCAnbWV0YWxsaWMnXG50eXBlIFZhbGlkYXRvclQgPSAoYXR0cjogQXR0cmlidXRlLCBkYXRhOiBTZXRUKSA9PiB2b2lkXG50eXBlIFNldFQgPSBudW1iZXIgfCB0eXBlcy52ZWMzQ29udmVydGlibGUgfCB0ZXh0dXJlLlRleHR1cmVcbnR5cGUgR2V0VCA9IG51bWJlciB8IHZlYzMgfCB0ZXh0dXJlLlRleHR1cmVcblxuY2xhc3MgQXR0cmlidXRlIGV4dGVuZHMgYXR0cmlidXRlLl9BdHRyaWJ1dGU8U2V0VCwgR2V0VCwgQXR0cmlidXRlTmFtZXM+IHtcblx0X3NldFZhbHVlKHZhbHVlOiBTZXRUKTogR2V0VCB7XG5cdFx0aWYgKHR5cGVvZih2YWx1ZSkgIT0gJ251bWJlcicgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIHRleHR1cmUuVGV4dHVyZSkpIHtcblx0XHRcdHZhbHVlID0gdmVjdG9yLnJlcXVpcmVWZWMzKHZhbHVlKVxuXHRcdH1cblx0XHRyZXR1cm4gdmFsdWVcblx0fVxufVxuXG5jbGFzcyBNYXRlcmlhbEF0dHJpYnV0ZU1hcCBleHRlbmRzIGF0dHJpYnV0ZS5fQXR0cmlidXRlTWFwPEF0dHJpYnV0ZT4geyBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoKSB9IH1cblxuY2xhc3MgTWF0ZXJpYWwgZXh0ZW5kcyBhdHRyaWJ1dGUuQXR0cmlidXRhYmxlPEF0dHJpYnV0ZSwgTWF0ZXJpYWxBdHRyaWJ1dGVNYXAsIEF0dHJpYnV0ZU5hbWVzPiB7XG5cdHByb3RlY3RlZCBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0XG5cblx0Y29uc3RydWN0b3IoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCkge1xuXHRcdHN1cGVyKClcblx0XHR0aGlzLmF0dHJpYnV0ZXMgPSBuZXcgTWF0ZXJpYWxBdHRyaWJ1dGVNYXAoKVxuXHRcdHRoaXMuZ2wgPSBnbFxuXHR9XG5cblx0Y2xvbmUoKTogTWF0ZXJpYWwge1xuXHRcdHJldHVybiB0aGlzLl9jbG9uZShNYXRlcmlhbCwgQXR0cmlidXRlLCB0aGlzLmdsKVxuXHR9XG5cblx0cHVibGljIHN0YXRpYyBCYXNpYyhnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LFxuXHRcdFx0X2FsYmVkbzogdHlwZXMudmVjM0NvbnZlcnRpYmxlID0gWzEsIDEsIDFdKTogTWF0ZXJpYWwge1xuXHRcdFxuXHRcdGxldCBtYXQgPSBuZXcgTWF0ZXJpYWwoZ2wpXG5cdFx0bWF0LmFkZEF0dHJpYnV0ZShuZXcgQXR0cmlidXRlKCdhbGJlZG8nLCBfYWxiZWRvLCBhdHRyaWJ1dGUudmFsaWRhdG9ycy5WZWMzT3JUZXh0dXJlKSlcblx0XHRyZXR1cm4gbWF0XG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIFBoeXNpY2FsKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsXG5cdFx0XHRcdF9hbGJlZG86IHR5cGVzLnZlYzNDb252ZXJ0aWJsZSA9IFsxLCAxLCAxXSwgXG5cdFx0XHRcdF9yb3VnaG5lc3M6IG51bWJlciA9IDAuMSxcblx0XHRcdFx0X21ldGFsbGljOiBudW1iZXIgPSAwLjEpOiBNYXRlcmlhbCB7XG5cblx0XHRsZXQgbWF0ID0gbmV3IE1hdGVyaWFsKGdsKVxuXHRcdG1hdC5hZGRBdHRyaWJ1dGUobmV3IEF0dHJpYnV0ZSgnYWxiZWRvJywgX2FsYmVkbywgYXR0cmlidXRlLnZhbGlkYXRvcnMuVmVjM09yVGV4dHVyZSkpXG5cdFx0bWF0LmFkZEF0dHJpYnV0ZShuZXcgQXR0cmlidXRlKCdyb3VnaG5lc3MnLCBfcm91Z2huZXNzLCBhdHRyaWJ1dGUudmFsaWRhdG9ycy5OdW1iZXIpKVxuXHRcdG1hdC5hZGRBdHRyaWJ1dGUobmV3IEF0dHJpYnV0ZSgnbWV0YWxsaWMnLCBfbWV0YWxsaWMsIGF0dHJpYnV0ZS52YWxpZGF0b3JzLk51bWJlcikpXG5cdFx0cmV0dXJuIG1hdFxuXHR9XG59XG5cbmV4cG9ydCB7XG5cdE1hdGVyaWFsLFxuXHRBdHRyaWJ1dGVOYW1lcyxcblx0QXR0cmlidXRlXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2wvbWF0ZXJpYWwvbWF0ZXJpYWwudHMiLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL3R5cGUtdXRpbCdcbmltcG9ydCAqIGFzIGdsbSBmcm9tICdnbC1tYXRyaXgnXG5pbXBvcnQgeyBUZXh0dXJlIH0gZnJvbSAnLi4vdGV4dHVyZS90ZXh0dXJlJ1xuXG5mdW5jdGlvbiBjbG9uZUdMTUFycmF5KGRhdGE6IHR5cGVzLmdsbUFycmF5KTogdHlwZXMuZ2xtQXJyYXkge1xuXHRpZiAodHlwZXMuaXNNYXQ0KGRhdGEpKSB7XG5cdFx0cmV0dXJuIGdsbS5tYXQ0LmNvcHkoZ2xtLm1hdDQuY3JlYXRlKCksIGRhdGEpXG5cdH0gZWxzZSBpZiAodHlwZXMuaXNWZWMzKGRhdGEpKSB7XG5cdFx0cmV0dXJuIGdsbS52ZWMzLmNvcHkoZ2xtLnZlYzMuY3JlYXRlKCksIGRhdGEpXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lKGRhdGE6IHR5cGVzLmNsb25lYWJsZSkgOiB0eXBlcy5jbG9uZWFibGUge1xuXHRpZiAodHlwZXMuaXNQcmltaXRpdmUoZGF0YSkpIHtcblx0XHRyZXR1cm4gZGF0YVxuXHR9IGVsc2UgaWYgKHR5cGVzLmlzR0xNQXJyYXlUeXBlKGRhdGEpKSB7XG5cdFx0cmV0dXJuIGNsb25lR0xNQXJyYXkoZGF0YSlcblx0fSBlbHNlIGlmICh0eXBlcy5pc0FycmF5KGRhdGEpKSB7XG5cdFx0cmV0dXJuIGRhdGEuc2xpY2UoKVxuXHR9IGVsc2UgaWYgKHR5cGVzLmlzVGV4dHVyZShkYXRhKSkge1xuXHRcdHJldHVybiBkYXRhLmNsb25lKClcblx0fVxuXHR0aHJvdyBuZXcgRXJyb3IoYFVucmVjb2duaXplZCB0eXBlLmApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmQyc3ViKGlkeDogbnVtYmVyLCBkaW1zOiBBcnJheTxudW1iZXI+KTogQXJyYXk8bnVtYmVyPiB7XG5cblx0Ly8gaHR0cDovL2tyaXRpc2VuLmNvbS8yMDExLzA4LzE3L3N1YnNjcmlwdHMtZnJvbS1saW5lYXItaW5kZXgtYW5kLXZpY2UtdmVyc2EtYy9cblxuXHRsZXQgbjogbnVtYmVyID0gZGltcy5sZW5ndGhcblx0bGV0IHByb2Q6IEFycmF5PG51bWJlcj4gPSBbXVxuXHRsZXQgcmVzdWx0ID0gbmV3IEFycmF5PG51bWJlcj4obilcblx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG47IGkrKykge1xuXHRcdHByb2RbaV0gPSAxXG5cdFx0Zm9yIChsZXQgajogbnVtYmVyID0gbi0xOyBqID4gaTsgai0tKSBwcm9kW2ldICo9IGRpbXNbal1cblx0fVxuXHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbjsgaSsrKSB7XG5cdFx0cmVzdWx0W2ldID0gaWR4XG5cdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IGk7IGorKylcblx0XHRcdHJlc3VsdFtpXSA9IHJlc3VsdFtpXSAlIHByb2Rbal1cblx0XHRyZXN1bHRbaV0gPSBNYXRoLmZsb29yKHJlc3VsdFtpXSAvIHByb2RbaV0pXG5cdH1cblx0cmV0dXJuIHJlc3VsdFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2dsL3V0aWwvY29tbW9uLXV0aWwudHMiLCJleHBvcnQgY2xhc3MgUmF0aW8ge1xuXHRyZWFkb25seSBmaXJzdDogbnVtYmVyXG5cdHJlYWRvbmx5IHNlY29uZDogbnVtYmVyXG5cdHJlYWRvbmx5IGFsaWFzOiBzdHJpbmdcblxuXHRjb25zdHJ1Y3RvcihmaXJzdDogbnVtYmVyLCBzZWNvbmQ6IG51bWJlciwgYWxpYXM6IHN0cmluZykge1xuXHRcdHRoaXMuZmlyc3QgPSBmaXJzdFxuXHRcdHRoaXMuc2Vjb25kID0gc2Vjb25kXG5cdFx0dGhpcy5hbGlhcyA9IGFsaWFzXG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIHNjYWxlKGE6IFJhdGlvLCBiOiBudW1iZXIpIHtcblx0XHRyZXR1cm4gKGIgLyBhLnNlY29uZCkgKiBhLmZpcnN0XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIER1cmF0aW9uIHtcblx0cmF0aW86IFJhdGlvXG5cdGFtb3VudDogbnVtYmVyXG5cblx0Y29uc3RydWN0b3IocmF0aW86IFJhdGlvLCBhbW91bnQ6IG51bWJlcikge1xuXHRcdHRoaXMucmF0aW8gPSByYXRpb1xuXHRcdHRoaXMuYW1vdW50ID0gYW1vdW50XG5cdH1cblxuXHRwdWJsaWMgdmFsdWUoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gUmF0aW8uc2NhbGUodGhpcy5yYXRpbywgdGhpcy5hbW91bnQpXG5cdFx0Ly8gcmV0dXJuIChhbXQgLyBzZWMpICogZmlyc3Rcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgbHQoYTogRHVyYXRpb24sIGI6IER1cmF0aW9uKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGEudmFsdWUoKSA8IGIudmFsdWUoKVxuXHR9XG5cblx0cHVibGljIHN0YXRpYyBsZShhOiBEdXJhdGlvbiwgYjogRHVyYXRpb24pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gYS52YWx1ZSgpIDw9IGIudmFsdWUoKVxuXHR9XG5cblx0cHVibGljIHN0YXRpYyBlcShhOiBEdXJhdGlvbiwgYjogRHVyYXRpb24pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gYS52YWx1ZSgpID09IGIudmFsdWUoKVxuXHR9XG5cblx0cHVibGljIHN0YXRpYyBndChhOiBEdXJhdGlvbiwgYjogRHVyYXRpb24pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gYS52YWx1ZSgpID4gYi52YWx1ZSgpXG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIGdlKGE6IER1cmF0aW9uLCBiOiBEdXJhdGlvbik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBhLnZhbHVlKCkgPj0gYi52YWx1ZSgpXG5cdH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSByYXRpb3Mge1xuXHRleHBvcnQgZnVuY3Rpb24gbXMoKTogUmF0aW8ge1xuXHRcdHJldHVybiBuZXcgUmF0aW8oMSwgMSwgJ21zJylcblx0fVxuXHRcblx0ZXhwb3J0IGZ1bmN0aW9uIHMoKTogUmF0aW8ge1xuXHRcdHJldHVybiBuZXcgUmF0aW8oMSwgMS8xMDAwLCAncycpXG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIERlbHRhVGltZXIge1xuXHRwcml2YXRlIGxhc3Q6IG51bWJlciA9IDBcblx0cHJpdmF0ZSBfZGVsdGE6IG51bWJlciA9IDBcblx0cHJpdmF0ZSBmaXJzdDogYm9vbGVhbiA9IHRydWVcblx0cHJpdmF0ZSByYXRpbzogUmF0aW9cblxuXHRjb25zdHJ1Y3RvcigpIHsgdGhpcy5yYXRpbyA9IHJhdGlvcy5zKCkgfVxuXG5cdHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XG5cdFx0bGV0IG5vdyA9IERhdGUubm93KClcblx0XHRpZiAodGhpcy5maXJzdCkge1xuXHRcdFx0dGhpcy5sYXN0ID0gbm93XG5cdFx0XHR0aGlzLmZpcnN0ID0gZmFsc2Vcblx0XHRcdHJldHVyblxuXHRcdH1cblx0XHR0aGlzLl9kZWx0YSA9IG5vdyAtIHRoaXMubGFzdFxuXHRcdHRoaXMubGFzdCA9IG5vd1xuXHR9XG5cblx0cHVibGljIGZpcnN0VXBkYXRlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmZpcnN0XG5cdH1cblxuXHRwdWJsaWMgc2V0UmF0aW8ocmF0aW86IFJhdGlvKTogdm9pZCB7XG5cdFx0dGhpcy5yYXRpbyA9IHJhdGlvXG5cdH1cblxuXHRwdWJsaWMgZ2V0UmF0aW8oKTogUmF0aW8ge1xuXHRcdHJldHVybiB0aGlzLnJhdGlvXG5cdH1cblxuXHRwdWJsaWMgZGVsdGEoKTogbnVtYmVyIHsgXG5cdFx0cmV0dXJuICh0aGlzLl9kZWx0YSAvIHRoaXMucmF0aW8uZmlyc3QpICogdGhpcy5yYXRpby5zZWNvbmRcblx0fVxuXG5cdHB1YmxpYyBkZWx0YUR1cmF0aW9uKGE6IER1cmF0aW9uIHwgbnVsbCk6IER1cmF0aW9uIHtcblx0XHRpZiAoYSA9PT0gbnVsbCkge1xuXHRcdFx0YSA9IG5ldyBEdXJhdGlvbih0aGlzLnJhdGlvLCB0aGlzLl9kZWx0YSlcblx0XHRcdHJldHVybiBhXG5cdFx0fVxuXHRcdGEucmF0aW8gPSB0aGlzLnJhdGlvXG5cdFx0YS5hbW91bnQgPSB0aGlzLl9kZWx0YVxuXHRcdHJldHVybiBhXG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC91dGlsL3RpbWUtdXRpbC50cyIsImV4cG9ydCBmdW5jdGlvbiBhc3NlcnROVmFsdWVzPFQ+KGFycjogQXJyYXk8VD4sIE46IG51bWJlciwgY29udGVudHM6IHN0cmluZyA9ICcodW5zcGVjaWZpZWQpJyk6IHZvaWQge1xuXHRpZiAoYXJyLmxlbmd0aCAhPT0gTikge1xuXHRcdHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgdGhlIGFycmF5IG9mICR7Y29udGVudHN9IHRvIGNvbnRhaW4gJHtOfSB2YWx1ZXM7ICR7YXJyLmxlbmd0aH0gd2VyZSBwcmVzZW50LmApXG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC91dGlsL2Fzc2VydC11dGlsLnRzIiwiaW1wb3J0IHsgdmVjMyB9IGZyb20gJ2dsLW1hdHJpeCdcbmltcG9ydCB7IHZlY3RvciwgdHlwZXMsIGF0dHJpYnV0ZSB9IGZyb20gJy4uL3V0aWwvdXRpbCdcbmltcG9ydCB7IFJlc291cmNlIH0gZnJvbSAnLi4vY29tbW9uL3Jlc291cmNlJ1xuXG50eXBlIEF0dHJpYnV0ZU5hbWVzID0gJ2NvbG9yJyB8ICdwb3NpdGlvbicgfCAnbWFzaycgfCAnZGlyZWN0aW9uJ1xudHlwZSBMaWdodE5hbWVzID0gJ3BvaW50JyB8ICdkaXJlY3Rpb25hbCdcbnR5cGUgTGlnaHRVbmlmb3JtTmFtZXMgPSBBdHRyaWJ1dGVOYW1lcyB8IExpZ2h0TmFtZXNcblxudHlwZSBWYWxpZGF0b3JUID0gKGF0dHI6IEF0dHJpYnV0ZSwgZGF0YTogU2V0VCkgPT4gdm9pZFxudHlwZSBTZXRUID0gdHlwZXMudmVjM0NvbnZlcnRpYmxlIHwgbnVtYmVyIHwgYm9vbGVhblxudHlwZSBHZXRUID0gdmVjMyB8IG51bWJlciB8IGJvb2xlYW5cblxuY2xhc3MgQXR0cmlidXRlIGV4dGVuZHMgYXR0cmlidXRlLl9BdHRyaWJ1dGU8U2V0VCwgR2V0VCwgQXR0cmlidXRlTmFtZXM+IHtcblx0X3NldFZhbHVlKHZhbHVlOiBTZXRUKTogR2V0VCB7XG5cdFx0aWYgKHR5cGVvZih2YWx1ZSkgIT09ICdudW1iZXInICYmIHR5cGVvZih2YWx1ZSkgIT09ICdib29sZWFuJylcblx0XHRcdHZhbHVlID0gdmVjdG9yLnJlcXVpcmVWZWMzKHZhbHVlKVxuXHRcdHJldHVybiB2YWx1ZVxuXHR9XG59XG5cbmNsYXNzIExpZ2h0QXR0cmlidXRlTWFwIGV4dGVuZHMgYXR0cmlidXRlLl9BdHRyaWJ1dGVNYXA8QXR0cmlidXRlPiB7IGNvbnN0cnVjdG9yKCkgeyBzdXBlcigpIH0gfVxuXG5jbGFzcyBMaWdodCBleHRlbmRzIGF0dHJpYnV0ZS5BdHRyaWJ1dGFibGU8QXR0cmlidXRlLCBMaWdodEF0dHJpYnV0ZU1hcCwgQXR0cmlidXRlTmFtZXM+IHtcblx0Z2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuXHRwcml2YXRlIG5hbWU6IExpZ2h0TmFtZXNcblx0cHVibGljIGFjdGl2ZTogYm9vbGVhbiA9IHRydWVcblx0cHJpdmF0ZSBpbmRleDogbnVtYmVyXG5cblx0Y29uc3RydWN0b3IoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCwgXG5cdFx0XHRfaW5kZXg6IG51bWJlciA9IDAsICBcblx0XHRcdF9jb2xvcjogdHlwZXMudmVjM0NvbnZlcnRpYmxlID0gWzEsIDEsIDFdLFxuXHRcdFx0X21hc2s6IHR5cGVzLnZlYzNDb252ZXJ0aWJsZSA9IFsxLCAxLCAxXSkge1xuXHRcdHN1cGVyKClcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLmluZGV4ID0gX2luZGV4XG5cdFx0dGhpcy5hdHRyaWJ1dGVzID0gbmV3IExpZ2h0QXR0cmlidXRlTWFwKClcblx0XHR0aGlzLmFkZEF0dHJpYnV0ZShuZXcgQXR0cmlidXRlKCdjb2xvcicsIF9jb2xvciwgYXR0cmlidXRlLnZhbGlkYXRvcnMuVmVjMykpXG5cdFx0dGhpcy5hZGRBdHRyaWJ1dGUobmV3IEF0dHJpYnV0ZSgnbWFzaycsIF9tYXNrLCBhdHRyaWJ1dGUudmFsaWRhdG9ycy5WZWMzKSlcblx0fVxuXHRwdWJsaWMgc2V0TWFzayh2YWw6IHR5cGVzLnZlYzNDb252ZXJ0aWJsZSk6IHZvaWQge1xuXHRcdHRoaXMuZ2V0QXR0cmlidXRlKCdtYXNrJykuc2V0VmFsdWUodmFsKVxuXHR9XG5cdHB1YmxpYyBzZXRDb2xvcih2YWw6IHR5cGVzLnZlYzNDb252ZXJ0aWJsZSk6IHZvaWQge1xuXHRcdHRoaXMuZ2V0QXR0cmlidXRlKCdjb2xvcicpLnNldFZhbHVlKHZhbClcblx0fVxuXHRwdWJsaWMgc2V0SW5kZXgodmFsOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmluZGV4ID0gdmFsXG5cdH1cblx0cHVibGljIGdldEluZGV4KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuaW5kZXhcblx0fVxuXHRwdWJsaWMgZ2V0Q29sb3IoKTogdmVjMyB7XG5cdFx0cmV0dXJuIDx2ZWMzPnRoaXMuZ2V0QXR0cmlidXRlKCdjb2xvcicpLnBlZWtWYWx1ZSgpXG5cdH1cblx0cHVibGljIGdldE5hbWUoKTogTGlnaHROYW1lcyB7XG5cdFx0cmV0dXJuIHRoaXMubmFtZVxuXHR9XG5cdHB1YmxpYyBnZXRNYXNrKCk6IHZlYzMge1xuXHRcdHJldHVybiA8dmVjMz50aGlzLmdldEF0dHJpYnV0ZSgnbWFzaycpLnBlZWtWYWx1ZSgpXG5cdH1cblxuXHRjbG9uZSgpOiBMaWdodCB7XG5cdFx0cmV0dXJuIHRoaXMuX2Nsb25lKExpZ2h0LCBBdHRyaWJ1dGUsIHRoaXMuZ2wpXG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIFBvaW50KGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsIFxuXHRcdFx0XHRfcG9zaXRpb246IHR5cGVzLnZlYzNDb252ZXJ0aWJsZSA9IFsxLCAxLCAxXSwgXG5cdFx0XHRcdF9jb2xvcjogdHlwZXMudmVjM0NvbnZlcnRpYmxlID0gWzEsIDEsIDFdLFxuXHRcdFx0XHRfaW5kZXg6IG51bWJlciA9IDApIHtcblx0XHRsZXQgbGlnaHQgPSBuZXcgTGlnaHQoZ2wsIF9pbmRleCwgX2NvbG9yKVxuXHRcdGxpZ2h0LmFkZEF0dHJpYnV0ZShuZXcgQXR0cmlidXRlKCdwb3NpdGlvbicsIF9wb3NpdGlvbikpXG5cdFx0bGlnaHQubmFtZSA9ICdwb2ludCdcblx0XHRyZXR1cm4gbGlnaHRcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgRGlyZWN0aW9uYWwoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCxcblx0XHRcdF9kaXJlY3Rpb246IHR5cGVzLnZlYzNDb252ZXJ0aWJsZSA9IFsxLCAxLCAxXSxcblx0XHRcdF9jb2xvcjogdHlwZXMudmVjM0NvbnZlcnRpYmxlID0gWzEsIDEsIDFdLFxuXHRcdFx0X2luZGV4OiBudW1iZXIgPSAwKSB7XG5cdFx0bGV0IGxpZ2h0ID0gbmV3IExpZ2h0KGdsLCBfaW5kZXgsIF9jb2xvcilcblx0XHRsaWdodC5hZGRBdHRyaWJ1dGUobmV3IEF0dHJpYnV0ZSgnZGlyZWN0aW9uJywgX2RpcmVjdGlvbikpXG5cdFx0bGlnaHQubmFtZSA9ICdkaXJlY3Rpb25hbCdcblx0XHRyZXR1cm4gbGlnaHRcblx0fVxufVxuXG5leHBvcnQgeyBMaWdodCwgTGlnaHROYW1lcywgQXR0cmlidXRlLCBBdHRyaWJ1dGVOYW1lcywgTGlnaHRVbmlmb3JtTmFtZXMgfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2dsL2xpZ2h0L2xpZ2h0LnRzIiwiaW1wb3J0IHsgdHlwZXMgfSBmcm9tICcuLi91dGlsL3V0aWwnXG5pbXBvcnQgKiBhcyBfTGlnaHQgZnJvbSAnLi4vbGlnaHQvbGlnaHQnXG5pbXBvcnQgKiBhcyBfTWF0ZXJpYWwgZnJvbSAnLi4vbWF0ZXJpYWwvbWF0ZXJpYWwnXG5pbXBvcnQgKiBhcyBfU2hhZGVyIGZyb20gJy4vc2hhZGVyJ1xuXG5leHBvcnQgdHlwZSBVbmlmb3JtTmFtZXMgPSBfTWF0ZXJpYWwuQXR0cmlidXRlTmFtZXMgfCBfTGlnaHQuTGlnaHRVbmlmb3JtTmFtZXMgfCBfU2hhZGVyLlNoYWRlckNvcmVVbmlmb3JtS2luZHNcblxuZXhwb3J0IGNsYXNzIFVuaWZvcm1NYXA8VD4ge1xuXHRwdWJsaWMgaXRlbXM6IHsgW2tleTogc3RyaW5nXTogVCB9XG5cdGNvbnN0cnVjdG9yKG5hbWVzOiBVbmlmb3JtTmFtZXNbXSwgdmFsdWU6IFQpIHtcblx0XHR0aGlzLml0ZW1zID0ge31cblx0XHRjb25zdCBpdGVtcyA9IHRoaXMuaXRlbXNcblx0XHRuYW1lcy5tYXAobmFtZSA9PiBpdGVtc1tuYW1lXSA9IHZhbHVlKVxuXHR9XG5cdHB1YmxpYyBoYXNVbmlmb3JtKG5hbWU6IFVuaWZvcm1OYW1lcykge1xuXHRcdHJldHVybiB0aGlzLml0ZW1zW25hbWVdICE9PSB1bmRlZmluZWRcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgTWFwIHtcblx0c3RhdGljIGl0ZW1zOiB7IFtLIGluIFVuaWZvcm1OYW1lc106IHN0cmluZyB9ID0ge1xuXHRcdC8vIG1hdGVyaWFsXG5cdFx0J2FsYmVkbyc6ICdhbGJlZG8nLFxuXHRcdCdyb3VnaG5lc3MnOiAncm91Z2huZXNzJyxcblx0XHQnbWV0YWxsaWMnOiAnbWV0YWxsaWMnLFxuXG5cdFx0Ly9cdGxpZ2h0XG5cdFx0J3Bvc2l0aW9uJzogJ3Bvc2l0aW9uJyxcblx0XHQnZGlyZWN0aW9uJzogJ2RpcmVjdGlvbicsXG5cdFx0J2NvbG9yJzogJ2NvbG9yJyxcblx0XHQnbWFzayc6ICdtYXNrJyxcblx0XHQncG9pbnQnOiAncG9pbnRfbGlnaHRzJyxcblx0XHQnZGlyZWN0aW9uYWwnOiAnZGlyZWN0aW9uYWxfbGlnaHRzJyxcblxuXHRcdC8vXHRjb3JlXG5cdFx0J21vZGVsJzogJ21vZGVsJyxcblx0XHQndmlldyc6ICd2aWV3Jyxcblx0XHQncHJvamVjdGlvbic6ICdwcm9qZWN0aW9uJyxcblx0XHQnY2FtZXJhX3Bvc2l0aW9uJzogJ2NhbV9wb3NpdGlvbidcblx0fVxuXG5cdHN0YXRpYyBnZXRVbmlmb3JtKG5hbWU6IFVuaWZvcm1OYW1lcyk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIE1hcC5pdGVtc1tuYW1lXVxuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2wvc2hhZGVyL3VuaWZvcm1zLnRzIiwiaW1wb3J0IHsgdGltZSB9IGZyb20gJy4uL3V0aWwvdXRpbCdcbmltcG9ydCB7IHZlYzIgfSBmcm9tICdnbC1tYXRyaXgnXG5pbXBvcnQgKiBhcyBtYXRoIGZyb20gJy4uL21hdGgvd2dsLW1hdGgnXG5pbXBvcnQgKiBhcyBjYXBhYmlsaXRpZXMgZnJvbSAnLi4vY29tbW9uL2NhcGFiaWxpdGllcydcblxuZXhwb3J0IHR5cGUgVG91Y2hDQlQgPSAoZXZ0OiBUb3VjaEV2ZW50KSA9PiB2b2lkXG5leHBvcnQgdHlwZSBNb3VzZUNCVCA9IChldnQ6IE1vdXNlRXZlbnQpID0+IHZvaWRcbmV4cG9ydCB0eXBlIExpc3RlbmVyVDxLPiA9IChldnQ6IEspID0+IHZvaWRcbmV4cG9ydCB0eXBlIFhZRXZlbnQgPSBUb3VjaEV2ZW50IHwgTW91c2VFdmVudFxuXG50eXBlIGxpc3RlbmVycyA9ICdzdGFydCcgfCAnbW92ZScgfCAnZW5kJ1xudHlwZSBsaXN0ZW5lck1hcCA9IHsgW0sgaW4gbGlzdGVuZXJzXTogc3RyaW5nIH1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIHh5PEsgZXh0ZW5kcyBYWUV2ZW50PiB7XG5cdGVsOiBIVE1MRWxlbWVudCB8IFdpbmRvd1xuXG5cdGNvbnN0cnVjdG9yKGVsPzogSFRNTEVsZW1lbnQgfCBXaW5kb3cpIHtcblx0XHR0aGlzLmVsID0gKGVsID09PSBudWxsIHx8IGVsID09PSB1bmRlZmluZWQpID8gZG9jdW1lbnQuYm9keSA6IGVsXG5cdH1cblxuXHRzdGFydChjYjogTGlzdGVuZXJUPEs+KTogdm9pZCB7XG5cdFx0dGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKHRoaXMuZ2V0TGlzdGVuZXJOYW1lcygpWydzdGFydCddLCBjYilcblx0fVxuXG5cdGVuZChjYjogTGlzdGVuZXJUPEs+KTogdm9pZCB7XG5cdFx0dGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKHRoaXMuZ2V0TGlzdGVuZXJOYW1lcygpWydlbmQnXSwgY2IpXG5cdH1cblxuXHRtb3ZlKGNiOiBMaXN0ZW5lclQ8Sz4pOiB2b2lkIHtcblx0XHR0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5nZXRMaXN0ZW5lck5hbWVzKClbJ21vdmUnXSwgY2IpXG5cdH1cblxuXHRwdWJsaWMgYWJzdHJhY3QgZ2V0TGlzdGVuZXJOYW1lcygpOiBsaXN0ZW5lck1hcFxuXHRwdWJsaWMgYWJzdHJhY3Qgc2hvdWxkSW52ZXJ0KCk6IGJvb2xlYW5cblx0cHVibGljIGFic3RyYWN0IGdldFByaW1hcnlDb29yZGluYXRlcyhldnQ6IEspOiB2ZWMyXG59XG5cbmV4cG9ydCBjbGFzcyBUb3VjaCBleHRlbmRzIHh5PFRvdWNoRXZlbnQ+IHtcblxuXHRlbDogSFRNTEVsZW1lbnQgfCBXaW5kb3dcblxuXHRnZXRMaXN0ZW5lck5hbWVzKCk6IGxpc3RlbmVyTWFwIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0J3N0YXJ0JzogJ3RvdWNoc3RhcnQnLFxuXHRcdFx0J2VuZCc6ICd0b3VjaGVuZCcsXG5cdFx0XHQnbW92ZSc6ICd0b3VjaG1vdmUnXG5cdFx0fVxuXHR9XG5cblx0c2hvdWxkSW52ZXJ0KCk6IGJvb2xlYW4geyByZXR1cm4gdHJ1ZSB9XG5cblx0Z2V0UHJpbWFyeUNvb3JkaW5hdGVzKGV2dDogVG91Y2hFdmVudCwgb3V0PzogdmVjMik6IHZlYzIge1xuXHRcdGlmICghb3V0KVxuXHRcdFx0b3V0ID0gdmVjMi5jcmVhdGUoKVxuXHRcdGlmIChldnQudG91Y2hlcy5sZW5ndGggPT09IDApIHtcblx0XHRcdG91dFswXSA9IDBcblx0XHRcdG91dFsxXSA9IDBcblx0XHR9IGVsc2Uge1xuXHRcdFx0b3V0WzBdID0gZXZ0LnRvdWNoZXNbMF0uY2xpZW50WFxuXHRcdFx0b3V0WzFdID0gZXZ0LnRvdWNoZXNbMF0uY2xpZW50WVxuXHRcdH1cblx0XHRyZXR1cm4gb3V0XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIE1vdXNlIGV4dGVuZHMgeHk8TW91c2VFdmVudD4ge1xuXG5cdGVsOiBIVE1MRWxlbWVudCB8IFdpbmRvd1xuXG5cdGdldExpc3RlbmVyTmFtZXMoKTogbGlzdGVuZXJNYXAge1xuXHRcdHJldHVybiB7XG5cdFx0XHQnc3RhcnQnOiAnbW91c2VlbnRlcicsXG5cdFx0XHQnZW5kJzogJ21vdXNlbGVhdmUnLFxuXHRcdFx0J21vdmUnOiAnbW91c2Vtb3ZlJ1xuXHRcdH1cblx0fVxuXG5cdHNob3VsZEludmVydCgpOiBib29sZWFuIHsgcmV0dXJuIGZhbHNlIH1cblxuXHRnZXRQcmltYXJ5Q29vcmRpbmF0ZXMoZXZ0OiBNb3VzZUV2ZW50LCBvdXQ/OiB2ZWMyKTogdmVjMiB7XG5cdFx0aWYgKCFvdXQpXG5cdFx0XHRvdXQgPSB2ZWMyLmNyZWF0ZSgpXG5cdFx0b3V0WzBdID0gZXZ0LmNsaWVudFhcblx0XHRvdXRbMV0gPSBldnQuY2xpZW50WVxuXHRcdHJldHVybiBvdXRcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgUG9pbnRlckxvY2sgZXh0ZW5kcyBNb3VzZSB7XG5cblx0ZWw6IEhUTUxDYW52YXNFbGVtZW50XG5cdGNvb3JkaW5hdGVzOiB2ZWMyXG5cdGlzTG9ja2VkOiBib29sZWFuXG5cblx0Y29uc3RydWN0b3IoZWw6IEhUTUxDYW52YXNFbGVtZW50KSB7XG5cdFx0c3VwZXIoZWwpXG5cdFx0dGhpcy5jb29yZGluYXRlcyA9IHZlYzIuZnJvbVZhbHVlcygwLCAwKVxuXHRcdHRoaXMuaXNMb2NrZWQgPSBmYWxzZVxuXHRcdHRoaXMuc2V0dXAoKVxuXHR9XG5cblx0cHJpdmF0ZSBzZXR1cCgpOiB2b2lkIHtcblx0XHRpZiAoIWNhcGFiaWxpdGllcy5oYXNQb2ludGVyTG9jaygpKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oJ1BvaW50ZXIgbG9ja2luZyBpcyBub3Qgc3VwcG9ydGVkIGluIHlvdXIgYnJvd3NlcjsnICtcblx0XHRcdFx0JyByZWd1bGFyIG1vdXNlIGlucHV0IHdpbGwgYmUgdXNlZCBpbnN0ZWFkLicpXG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cdFx0bGV0IHNlbGYgPSB0aGlzXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmxvY2tjaGFuZ2UnLCAoZXZ0OiBNb3VzZUV2ZW50KSA9PiB7XG5cdFx0XHRzZWxmLmlzTG9ja2VkID0gIXNlbGYuaXNMb2NrZWRcblx0XHR9LCBmYWxzZSlcblx0XHRzZWxmLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dDogTW91c2VFdmVudCkgPT4ge1xuXHRcdFx0ZXZ0LnByZXZlbnREZWZhdWx0KClcblx0XHRcdGlmICghc2VsZi5pc0xvY2tlZCkge1xuXHRcdFx0XHRzZWxmLmVsLnJlcXVlc3RQb2ludGVyTG9jaygpXG5cdFx0XHR9XG5cdFx0fSlcblx0fVxuXG5cdGdldFByaW1hcnlDb29yZGluYXRlcyhldnQ6IE1vdXNlRXZlbnQsIG91dD86IHZlYzIpOiB2ZWMyIHtcblx0XHRpZiAoIW91dClcblx0XHRcdG91dCA9IHZlYzIuY3JlYXRlKClcblx0XHRpZiAodGhpcy5pc0xvY2tlZCkge1xuXHRcdFx0dGhpcy5jb29yZGluYXRlc1swXSArPSBldnQubW92ZW1lbnRYXG5cdFx0XHR0aGlzLmNvb3JkaW5hdGVzWzFdICs9IGV2dC5tb3ZlbWVudFlcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jb29yZGluYXRlc1swXSA9IGV2dC5jbGllbnRYXG5cdFx0XHR0aGlzLmNvb3JkaW5hdGVzWzFdID0gZXZ0LmNsaWVudFlcblx0XHR9XG5cdFx0b3V0LnNldCh0aGlzLmNvb3JkaW5hdGVzKVxuXHRcdHJldHVybiBvdXRcblx0fVxufVxuXG5leHBvcnQgdHlwZSBEb3VibGVUYXBEZXRlY3Rvck9wdHMgPSB7XG5cdHRpbWVUaHJlc2hvbGQ6IHRpbWUuRHVyYXRpb24sXG5cdHBvc2l0aW9uVGhyZXNob2xkOiBudW1iZXJcbn1cblxuZXhwb3J0IGNsYXNzIERvdWJsZVRhcERldGVjdG9yIHtcblx0cHJpdmF0ZSB0aW1lcjogdGltZS5EZWx0YVRpbWVyXG5cdHByaXZhdGUgdG91Y2g6IFRvdWNoXG5cdHByaXZhdGUgYmVnYW46IGJvb2xlYW5cblx0cHJpdmF0ZSBkb3VibGV0YXBGdW5jOiBUb3VjaENCVFxuXHRwcml2YXRlIGRlbHRhRHVyOiB0aW1lLkR1cmF0aW9uXG5cdHByaXZhdGUgdGltZVRocmVzaG9sZDogdGltZS5EdXJhdGlvblxuXHRwcml2YXRlIHBvc2l0aW9uVGhyZXNob2xkOiBudW1iZXJcblx0cHJpdmF0ZSBjb29yZGluYXRlczogdmVjMlxuXHRwcml2YXRlIGN1cnJlbnRDb29yZGluYXRlczogdmVjMlxuXG5cdGNvbnN0cnVjdG9yKHRvdWNoOiBUb3VjaCwgb3B0cz86IERvdWJsZVRhcERldGVjdG9yT3B0cykge1xuXHRcdHRoaXMudG91Y2ggPSB0b3VjaFxuXHRcdHRoaXMudGltZXIgPSBuZXcgdGltZS5EZWx0YVRpbWVyKClcblx0XHR0aGlzLnRpbWVyLnNldFJhdGlvKHRpbWUucmF0aW9zLm1zKCkpXG5cdFx0dGhpcy5iZWdhbiA9IGZhbHNlXG5cdFx0dGhpcy5kb3VibGV0YXBGdW5jID0gKGV2dCkgPT4ge31cblx0XHR0aGlzLmRlbHRhRHVyID0gbmV3IHRpbWUuRHVyYXRpb24odGltZS5yYXRpb3MubXMoKSwgMClcblx0XHRpZiAoIW9wdHMpXG5cdFx0XHRvcHRzID0gRG91YmxlVGFwRGV0ZWN0b3IuRGVmYXVsdHMoKVxuXHRcdHRoaXMudGltZVRocmVzaG9sZCA9IG9wdHMudGltZVRocmVzaG9sZFxuXHRcdHRoaXMucG9zaXRpb25UaHJlc2hvbGQgPSBvcHRzLnBvc2l0aW9uVGhyZXNob2xkXG5cdFx0dGhpcy5jb29yZGluYXRlcyA9IHZlYzIuY3JlYXRlKClcblx0XHR0aGlzLmN1cnJlbnRDb29yZGluYXRlcyA9IHZlYzIuY3JlYXRlKClcblx0XHR0aGlzLnNldHVwKClcblx0fVxuXG5cdHB1YmxpYyBkb3VibGV0YXAoZnVuYzogVG91Y2hDQlQpOiB2b2lkIHtcblx0XHR0aGlzLmRvdWJsZXRhcEZ1bmMgPSBmdW5jXG5cdH1cblxuXHRwcml2YXRlIHNldHVwKCk6IHZvaWQge1xuXHRcdGNvbnN0IHRvdWNoID0gdGhpcy50b3VjaFxuXHRcdGNvbnN0IHNlbGYgPSB0aGlzXG5cblx0XHR0b3VjaC5zdGFydChldnQgPT4ge1xuXHRcdFx0aWYgKGV2dC50b3VjaGVzLmxlbmd0aCAhPT0gMSlcblx0XHRcdFx0cmV0dXJuXG5cdFx0XHRzZWxmLnRpbWVyLnVwZGF0ZSgpXG5cdFx0XHRzZWxmLmN1cnJlbnRDb29yZGluYXRlc1swXSA9IGV2dC50b3VjaGVzWzBdLmNsaWVudFhcblx0XHRcdHNlbGYuY3VycmVudENvb3JkaW5hdGVzWzFdID0gZXZ0LnRvdWNoZXNbMF0uY2xpZW50WVxuXHRcdFx0aWYgKHNlbGYuYmVnYW4pIHtcblx0XHRcdFx0bGV0IGRlbHRhID0gc2VsZi50aW1lci5kZWx0YUR1cmF0aW9uKHNlbGYuZGVsdGFEdXIpXG5cdFx0XHRcdGxldCBpblRpbWUgPSB0aW1lLkR1cmF0aW9uLmxlKGRlbHRhLCBzZWxmLnRpbWVUaHJlc2hvbGQpXG5cdFx0XHRcdGxldCBkaXN0ID0gbWF0aC5kaXN0YW5jZShzZWxmLmN1cnJlbnRDb29yZGluYXRlcywgc2VsZi5jb29yZGluYXRlcylcblx0XHRcdFx0aWYgKGluVGltZSAmJiBkaXN0IDwgc2VsZi5wb3NpdGlvblRocmVzaG9sZCkge1xuXHRcdFx0XHRcdHNlbGYuZG91YmxldGFwRnVuYyhldnQpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHNlbGYuYmVnYW4gPSB0cnVlXG5cdFx0XHRzZWxmLmNvb3JkaW5hdGVzID0gdmVjMi5jb3B5KHNlbGYuY29vcmRpbmF0ZXMsIHNlbGYuY3VycmVudENvb3JkaW5hdGVzKVxuXHRcdH0pXG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIERlZmF1bHRzKCk6IERvdWJsZVRhcERldGVjdG9yT3B0cyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRpbWVUaHJlc2hvbGQ6IG5ldyB0aW1lLkR1cmF0aW9uKHRpbWUucmF0aW9zLm1zKCksIDM1MCksXG5cdFx0XHRwb3NpdGlvblRocmVzaG9sZDogNDBcblx0XHR9XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2dsL2lucHV0L2lucHV0LXh5LnRzIiwiZXhwb3J0IGZ1bmN0aW9uIGhhc1BvaW50ZXJMb2NrKCk6IGJvb2xlYW4ge1xuXHRyZXR1cm4gJ29ucG9pbnRlcmxvY2tjaGFuZ2UnIGluIGRvY3VtZW50XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2wvY29tbW9uL2NhcGFiaWxpdGllcy50cyIsInR5cGUgS2V5Ym9hcmRFdmVudENCVCA9IChldnQ6IEtleWJvYXJkRXZlbnQpID0+IHZvaWRcblxuZXhwb3J0IGVudW0gS2V5cyB7XG5cdFcgPSA4Nyxcblx0QSA9IDY1LFxuXHRTID0gODMsXG5cdEQgPSA2OCxcblx0TGVmdCA9IDM3LFxuXHRSaWdodCA9IDM5LFxuXHRVcCA9IDM4LFxuXHREb3duID0gNDAsXG5cdHNwYWNlID0gMzIsXG5cdHNoaWZ0ID0gMTYsXG59XG5cbmV4cG9ydCBjbGFzcyBLZXlib2FyZCB7XG5cdFxuXHRwcml2YXRlIHN0YXRlOiB7IFtrZXk6bnVtYmVyXTogYm9vbGVhbiB9ID0ge31cblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRsZXQgc3RhdGUgPSB0aGlzLnN0YXRlXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZ0OiBLZXlib2FyZEV2ZW50KSA9PiB7XG5cdFx0XHRzdGF0ZVtldnQua2V5Q29kZV0gPSB0cnVlXG5cdFx0fSlcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZ0OiBLZXlib2FyZEV2ZW50KSA9PiB7XG5cdFx0XHRzdGF0ZVtldnQua2V5Q29kZV0gPSBmYWxzZVxuXHRcdH0pXG5cdH1cblxuXHRwdWJsaWMgaXNEb3duKGtleTogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0bGV0IHJlcyA9IHRoaXMuc3RhdGVba2V5XVxuXHRcdHJldHVybiByZXMgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogcmVzXG5cdH1cblxuXHRwdWJsaWMgZG93bihmdW5jOiBLZXlib2FyZEV2ZW50Q0JULCBrZXk/OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmxpc3RlbmVySW1wbChmdW5jLCAna2V5ZG93bicsIGtleSlcblx0fVxuXG5cdHB1YmxpYyB1cChmdW5jOiBLZXlib2FyZEV2ZW50Q0JULCBrZXk/OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmxpc3RlbmVySW1wbChmdW5jLCAna2V5dXAnLCBrZXkpXG5cdH1cblxuXHRwcml2YXRlIGxpc3RlbmVySW1wbChmdW5jOiBLZXlib2FyZEV2ZW50Q0JULCBraW5kOiBzdHJpbmcsIGtleT86IG51bWJlcik6IHZvaWQge1xuXHRcdGxldCBhbnlLZXkgPSBrZXkgPT09IHVuZGVmaW5lZCB8fCBrZXkgPT09IG51bGxcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihraW5kLCAoZXZ0OiBLZXlib2FyZEV2ZW50KSA9PiB7XG5cdFx0XHRpZiAoYW55S2V5IHx8IGV2dC5rZXlDb2RlID09PSBrZXkpIHtcblx0XHRcdFx0ZnVuYyhldnQpXG5cdFx0XHR9XG5cdFx0fSlcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2dsL2lucHV0L2tleWJvYXJkLnRzIiwiaW1wb3J0ICogYXMgZWcxIGZyb20gJy4vZGVidWctZ2wyJ1xuaW1wb3J0ICogYXMgZWcyIGZyb20gJy4vZGVidWctZ2wzJ1xuaW1wb3J0ICogYXMgY29udHJvbHNUZXN0IGZyb20gJy4vY29udHJvbHMtdGVzdCdcbmltcG9ydCAqIGFzIGJhcmVib25lcyBmcm9tICcuL2JhcmVib25lcydcbmltcG9ydCAqIGFzIHZvbHVtZSBmcm9tICcuL3ZvbHVtZXRyaWMtdGVzdCdcblxuLy8gY29udHJvbHNUZXN0Lm1haW4oKVxuLy8gZWcxLm1haW4oKVxuLy8gZWcyLm1haW4oKVxuXG4vLyBiYXJlYm9uZXMubWFpbigpXG5cbnZvbHVtZS5tYWluKClcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9leGFtcGxlcy9tYWluLnRzIiwiaW1wb3J0ICogYXMgd2dsIGZyb20gJy4uL2dsL3dlYi1nbCdcbmltcG9ydCAqIGFzIHdhdWQgZnJvbSAnLi4vYXVkL3dlYi1hdWRpbydcbmltcG9ydCB7IG1hdDQsIHF1YXQsIHZlYzMsIHZlYzQsIGdsTWF0cml4IH0gZnJvbSAnZ2wtbWF0cml4J1xuXG50eXBlIEZCTyA9IHsgZmJvOiBXZWJHTEZyYW1lYnVmZmVyLCB0ZXh0dXJlOiB3Z2wudGV4dHVyZS5UZXh0dXJlIH1cblxuZnVuY3Rpb24gY2hlY2tGQk8oZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCk6IHZvaWQge1xuXG5cdGxldCBzdGF0dXMgPSBnbC5jaGVja0ZyYW1lYnVmZmVyU3RhdHVzKGdsLkZSQU1FQlVGRkVSKVxuXG5cdHN3aXRjaCAoc3RhdHVzKSB7XG5cdFx0Y2FzZSBnbC5GUkFNRUJVRkZFUl9DT01QTEVURTpcblx0XHRcdGJyZWFrXG5cdFx0Y2FzZSBnbC5GUkFNRUJVRkZFUl9JTkNPTVBMRVRFX0FUVEFDSE1FTlQ6XG5cdFx0XHRjb25zb2xlLmxvZygnRlJBTUVCVUZGRVJfSU5DT01QTEVURV9BVFRBQ0hNRU5UJylcblx0XHRcdGJyZWFrXG5cdFx0Y2FzZSBnbC5GUkFNRUJVRkZFUl9VTlNVUFBPUlRFRDpcblx0XHRcdGNvbnNvbGUubG9nKCdGUkFNRUJVRkZFUl9VTlNVUFBPUlRFRCcpXG5cdFx0XHRicmVha1xuXHRcdGNhc2UgZ2wuRlJBTUVCVUZGRVJfSU5DT01QTEVURV9NSVNTSU5HX0FUVEFDSE1FTlQ6XG5cdFx0XHRjb25zb2xlLmxvZygnRlJBTUVCVUZGRVJfSU5DT01QTEVURV9NSVNTSU5HX0FUVEFDSE1FTlQnKVxuXHRcdFx0YnJlYWtcblx0XHRjYXNlIGdsLkZSQU1FQlVGRkVSX0lOQ09NUExFVEVfRElNRU5TSU9OUzpcblx0XHRcdGNvbnNvbGUubG9nKCdGUkFNRUJVRkZFUl9JTkNPTVBMRVRFX0RJTUVOU0lPTlMnKVxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRjb25zb2xlLmxvZygndW5zcGVjaWZpZWQnKVxuXHRcdFx0Y29uc29sZS5sb2coc3RhdHVzKVxuXHRcdFx0YnJlYWtcblx0fVxuXG5cdGlmIChzdGF0dXMgIT09IGdsLkZSQU1FQlVGRkVSX0NPTVBMRVRFKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdpbmNvbXBsZXRlIGZyYW1lIGJ1ZmZlcicpXG5cdH1cblxufVxuXG5mdW5jdGlvbiBjb25maWd1cmVGQk8oZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCwgdzogbnVtYmVyLCBoOiBudW1iZXIpOiBGQk8ge1xuXG5cdGNvbnN0IG9wdHMgPSB3Z2wudGV4dHVyZS5UZXh0dXJlT3B0cy5EZWZhdWx0MkQoZ2wpXG5cblx0b3B0cy53aWR0aCA9IHdcblx0b3B0cy5oZWlnaHQgPSBoXG5cdG9wdHMuZGF0YVR5cGUgPSBnbC5VTlNJR05FRF9CWVRFXG5cdG9wdHMuZ2VuZXJhdGVNaXBzID0gZmFsc2Vcblx0b3B0cy53cmFwUyA9IGdsLkNMQU1QX1RPX0VER0Vcblx0b3B0cy53cmFwVCA9IGdsLkNMQU1QX1RPX0VER0Vcblx0b3B0cy5tYWdGaWx0ZXIgPSBnbC5MSU5FQVJcblxuXHRjb25zdCB0ZXggPSB3Z2wudGV4dHVyZS5UZXgyRChnbCwgbnVsbCwgb3B0cylcblxuXHRjb25zdCBmYm8gPSBnbC5jcmVhdGVGcmFtZWJ1ZmZlcigpXG5cdGNvbnN0IGF0dGFjaCA9IGdsLkNPTE9SX0FUVEFDSE1FTlQwXG5cblx0Z2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBmYm8pXG5cdGdsLmZyYW1lYnVmZmVyVGV4dHVyZTJEKGdsLkZSQU1FQlVGRkVSLCBhdHRhY2gsIGdsLlRFWFRVUkVfMkQsIHRleC5oYW5kbGUsIDApXG5cblx0Y2hlY2tGQk8oZ2wpXG5cblx0Z2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBudWxsKVxuXG5cdHJldHVybiB7ZmJvLCB0ZXh0dXJlOiB0ZXh9XG59XG5cbmZ1bmN0aW9uIGNvbmZpZ3VyZVNoYWRvd0ZCTyhnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCBzejogbnVtYmVyKTogRkJPIHtcblx0Y29uc3QgZGVwdGhPcHRzID0gd2dsLnRleHR1cmUuVGV4dHVyZU9wdHMuRGVmYXVsdDJEKGdsKVxuXHRjb25zdCBjb2xvck9wdHMgPSB3Z2wudGV4dHVyZS5UZXh0dXJlT3B0cy5EZWZhdWx0MkQoZ2wpXG5cblx0dmFyIGV4dCA9IGdsLmdldEV4dGVuc2lvbignV0VCR0xfZGVwdGhfdGV4dHVyZScpXG5cblx0aWYgKCFleHQpIHRocm93IG5ldyBFcnJvcignRGVwdGggdGV4dHVyZXMgYXJlIG5vIHN1cHBvcnRlZC4nKVxuXG5cdGRlcHRoT3B0cy53aWR0aCA9IHN6XG5cdGRlcHRoT3B0cy5oZWlnaHQgPSBzelxuXHRkZXB0aE9wdHMuaW50ZXJuYWxGb3JtYXQgPSBnbC5ERVBUSF9DT01QT05FTlRcblx0ZGVwdGhPcHRzLnNvdXJjZUZvcm1hdCA9IGdsLkRFUFRIX0NPTVBPTkVOVFxuXHRkZXB0aE9wdHMuZGF0YVR5cGUgPSBnbC5VTlNJR05FRF9TSE9SVFxuXHRkZXB0aE9wdHMuZ2VuZXJhdGVNaXBzID0gZmFsc2Vcblx0ZGVwdGhPcHRzLndyYXBTID0gZ2wuQ0xBTVBfVE9fRURHRVxuXHRkZXB0aE9wdHMud3JhcFQgPSBnbC5DTEFNUF9UT19FREdFXG5cdGRlcHRoT3B0cy5tYWdGaWx0ZXIgPSBnbC5ORUFSRVNUXG5cdGRlcHRoT3B0cy5taW5GaWx0ZXIgPSBnbC5ORUFSRVNUXG5cblx0Y29sb3JPcHRzLndpZHRoID0gc3pcblx0Y29sb3JPcHRzLmhlaWdodCA9IHN6XG5cblx0Y29uc3QgZGVwdGhUZXggPSB3Z2wudGV4dHVyZS5UZXgyRChnbCwgbnVsbCwgZGVwdGhPcHRzKVxuXHRjb25zdCBjb2xvclRleCA9IHdnbC50ZXh0dXJlLlRleDJEKGdsLCBudWxsLCBjb2xvck9wdHMpXG5cblx0Y29uc3QgZmJvID0gZ2wuY3JlYXRlRnJhbWVidWZmZXIoKVxuXG5cdGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgZmJvKVxuXHRnbC5mcmFtZWJ1ZmZlclRleHR1cmUyRChnbC5GUkFNRUJVRkZFUiwgZ2wuREVQVEhfQVRUQUNITUVOVCwgZ2wuVEVYVFVSRV8yRCwgZGVwdGhUZXguaGFuZGxlLCAwKVxuXHRnbC5mcmFtZWJ1ZmZlclRleHR1cmUyRChnbC5GUkFNRUJVRkZFUiwgZ2wuQ09MT1JfQVRUQUNITUVOVDAsIGdsLlRFWFRVUkVfMkQsIGNvbG9yVGV4LmhhbmRsZSwgMClcblxuXHRjaGVja0ZCTyhnbClcblxuXHRnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIG51bGwpXG5cblx0cmV0dXJuIHtmYm8sIHRleHR1cmU6IGRlcHRoVGV4fVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFpbigpIHtcblxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmcgPSAnMCdcblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5tYXJnaW4gPSAnMCdcblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCdcblxuXHRjb25zdCBrZXlib2FyZCA9IG5ldyB3Z2wuSW5wdXQuS2V5Ym9hcmQoKVxuXHRjb25zdCBjYW52YXMgPSBuZXcgd2dsLkNhbnZhcygpXG5cdGNvbnN0IGNhbnZhc0VsZW1lbnQgPSBjYW52YXMuZWxlbWVudFxuXG5cdGNvbnN0IGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgPSBjYW52YXNFbGVtZW50LmdldENvbnRleHQoJ3dlYmdsJylcblxuXHRpZiAoIWdsKSBcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBpbml0aWFsaXplIEdMIGNvbnRleHQuJylcblxuXHRjb25zdCBzY2VuZSA9IG5ldyB3Z2wuU2NlbmUoZ2wpXG5cdGNvbnN0IHJlbmRlcmVyID0gbmV3IHdnbC5yZW5kZXJlcnMuZnVuY3Rpb25hbChnbClcblx0Y29uc3QgY2FtZXJhID0gbmV3IHdnbC5DYW1lcmEoKVxuXG5cdGNvbnN0IG1vdXNlSW5wdXQgPSBuZXcgd2dsLklucHV0LlBvaW50ZXJMb2NrKGNhbnZhcy5lbGVtZW50KVxuXHRjb25zdCB0b3VjaElucHV0ID0gbmV3IHdnbC5JbnB1dC5Ub3VjaCgpXG5cdGNvbnN0IGtleWJvYXJkTW92ZUNvbnRyb2xzID0gbmV3IHdnbC5Db250cm9scy5Nb3ZlbWVudC5LZXlib2FyZChrZXlib2FyZCwgY2FtZXJhLCA1LjApXG5cdGNvbnN0IHRvdWNoTW92ZUNvbnRyb2xzID0gbmV3IHdnbC5Db250cm9scy5Nb3ZlbWVudC5Ub3VjaCh0b3VjaElucHV0LCBjYW1lcmEsIDEwLjApXG5cblx0bGV0IHJvdGF0aW9uQ29udHJvbHM6IGFueVxuXHRpZiAod2dsLmNhcGFiaWxpdGllcy5oYXNQb2ludGVyTG9jaygpKSB7XG5cdFx0cm90YXRpb25Db250cm9scyA9IG5ldyB3Z2wuQ29udHJvbHMuT3JiaXQuT3JiaXQyKG1vdXNlSW5wdXQsIGNhbWVyYSlcblx0fSBlbHNlIHtcblx0XHRyb3RhdGlvbkNvbnRyb2xzID0gbmV3IHdnbC5Db250cm9scy5PcmJpdC5PcmJpdCh0b3VjaElucHV0LCBjYW1lcmEpXG5cdH1cblxuXHRjb25zdCBnZW5TaGFkb3dQcm9nID0gd2dsLlNoYWRlckZhY3RvcnkuQ3JlYXRlKGdsLCB3Z2wuU2hhZGVyTGlicmFyeS5HZW5TaGFkb3dzMSlcblx0Y29uc3QgcHJvZyA9IHdnbC5TaGFkZXJGYWN0b3J5LkNyZWF0ZShnbCwgd2dsLlNoYWRlckxpYnJhcnkuVXNlU2hhZG93czEpXG5cdGNvbnN0IGJhc2ljUHJvZyA9IHdnbC5TaGFkZXJGYWN0b3J5LkNyZWF0ZShnbCwgd2dsLlNoYWRlckxpYnJhcnkuQmFzaWMpXG5cdGNvbnN0IHBvc3RQcm9nID0gd2dsLlNoYWRlckZhY3RvcnkuQ3JlYXRlKGdsLCB3Z2wuU2hhZGVyTGlicmFyeS5Wb2x1bWUpXG5cblx0Y29uc3Qgc3BoZXJlID0gd2dsLk1lc2hGYWN0b3J5LmNyZWF0ZShnbCwgJ3NwaGVyZScpXG5cdGNvbnN0IHF1YWQgPSB3Z2wuTWVzaEZhY3RvcnkuY3JlYXRlKGdsLCAncXVhZCcpXG5cdGNvbnN0IG1hdCA9IHdnbC5NYXRlcmlhbC5NYXRlcmlhbC5QaHlzaWNhbChnbClcblx0Y29uc3Qgc3BoZXJlTW9kZWwgPSBuZXcgd2dsLk1vZGVsKGdsLCBwcm9nLCBzcGhlcmUsIG1hdClcblx0Y29uc3QgbW9kZWwyID0gbmV3IHdnbC5Nb2RlbChnbCwgcHJvZywgd2dsLk1lc2hGYWN0b3J5LmNyZWF0ZShnbCwgJ2N1YmUnKSwgbWF0LmNsb25lKCkpXG5cdGNvbnN0IGxpZ2h0ID0gd2dsLkxpZ2h0LkxpZ2h0LlBvaW50KGdsKVxuXHRjb25zdCBsaWdodFNwaGVyZU1vZGVsID0gbmV3IHdnbC5Nb2RlbChnbCwgYmFzaWNQcm9nLCBzcGhlcmUsIG1hdC5jbG9uZSgpKVxuXHRjb25zdCBwbGFuZU1vZGVsID0gbmV3IHdnbC5Nb2RlbChnbCwgcHJvZywgd2dsLk1lc2hGYWN0b3J5LmNyZWF0ZShnbCwgJ3F1YWQnKSwgbWF0LmNsb25lKCkpXG5cblx0Y29uc3QgZmJvVyA9IGNhbnZhcy53aWR0aCpjYW52YXMuZHByLzRcblx0Y29uc3QgZmJvSCA9IGNhbnZhcy5oZWlnaHQqY2FudmFzLmRwci80XG5cdGNvbnN0IGZibyA9IGNvbmZpZ3VyZUZCTyhnbCwgZmJvVywgZmJvSClcblxuXHRjb25zdCBzaGFkb3dTeiA9IDEwMjRcblx0Y29uc3Qgc2hhZG93RmJvID0gY29uZmlndXJlU2hhZG93RkJPKGdsLCBzaGFkb3dTeilcblxuXHRyZW5kZXJlci5zZXRBc3BlY3QoY2FudmFzLmFzcGVjdClcblx0cmVuZGVyZXIuc2V0TmVhckZhcigwLjEsIDEwMDApXG5cdHJlbmRlcmVyLnNldENsZWFyQ29sb3IoWzAsIDAsIDBdKVxuXHRcblx0c2NlbmUuYWRkKFtzcGhlcmVNb2RlbCwgbW9kZWwyLCBsaWdodFNwaGVyZU1vZGVsLCBwbGFuZU1vZGVsLCBsaWdodF0pXG5cblx0Y29uc3QgbGlnaHRDb2xvciA9IFsxLCAxLCAxXVxuXHRjb25zdCBsaWdodFBvc2l0aW9uID0gWzUsIDUsIDEwXVxuXHRjb25zdCBzcGhlcmVDb2xvciA9IFsxLCAwLCAwXVxuXHRjb25zdCBzcGhlcmVQb3NpdGlvbiA9IFswLCAwLCAwXVxuXHRjb25zdCBsaWdodFNwaGVyZVBvc2l0aW9uID0gbGlnaHRQb3NpdGlvblxuXG5cdGxpZ2h0LmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5zZXRWYWx1ZShsaWdodFBvc2l0aW9uKVxuXHRsaWdodC5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykuc2V0VmFsdWUobGlnaHRDb2xvcilcblx0c3BoZXJlTW9kZWwuc2V0UG9zaXRpb24oc3BoZXJlUG9zaXRpb24pXG5cdHNwaGVyZU1vZGVsLm1hdGVyaWFsLmdldEF0dHJpYnV0ZSgnYWxiZWRvJykuc2V0VmFsdWUoc3BoZXJlQ29sb3IpXG5cdGxpZ2h0U3BoZXJlTW9kZWwuc2V0UG9zaXRpb24obGlnaHRTcGhlcmVQb3NpdGlvbilcblx0bGlnaHRTcGhlcmVNb2RlbC5tYXRlcmlhbC5nZXRBdHRyaWJ1dGUoJ2FsYmVkbycpLnNldFZhbHVlKGxpZ2h0Q29sb3IpXG5cdG1vZGVsMi5tYXRlcmlhbC5nZXRBdHRyaWJ1dGUoJ2FsYmVkbycpLnNldFZhbHVlKHNwaGVyZUNvbG9yKVxuXHRtb2RlbDIuc2V0UG9zaXRpb24oWzIsIC0yLCAtMl0pXG5cdHBsYW5lTW9kZWwuc2V0UG9zaXRpb24oWzAsIC01LCAwXSlcblx0cGxhbmVNb2RlbC5zZXRSb3RhdGlvbihbOTAsIDAsIDBdKVxuXHRwbGFuZU1vZGVsLnNldFNjYWxlKDEwKVxuXHRwbGFuZU1vZGVsLm1hdGVyaWFsLmdldEF0dHJpYnV0ZSgnYWxiZWRvJykuc2V0VmFsdWUoc3BoZXJlQ29sb3IpXG5cblx0Y2FtZXJhLnNldFBvc2l0aW9uKFswLCAwLCAtMTBdKVxuXHRjYW1lcmEuc2V0UGl0Y2goNSlcblx0Y2FtZXJhLnNldFlhdyg4MClcblxuXHRsZXQgYWRkUmF5cyA9IHRydWVcblxuXHRjYW52YXMuZWxlbWVudC5vbmNsaWNrID0gKCkgPT4gYWRkUmF5cyA9ICFhZGRSYXlzXG5cblx0Y29uc3QgYW5pbWF0ZSA9ICgpID0+IHtcblxuXHRcdGtleWJvYXJkTW92ZUNvbnRyb2xzLnVwZGF0ZSgpXG5cdFx0cm90YXRpb25Db250cm9scy51cGRhdGUoKVxuXG5cdFx0bW92ZUN1YmUoKVxuXG5cdFx0Ly9cdHNoYWRvd3NcblxuXHRcdGRlcHRoTGlnaHRQYXNzKClcblxuXHRcdC8vXHR2b2x1bWV0cmljc1xuXG5cdFx0YmxhY2tQYXNzKClcblx0XHRyZWd1bGFyUGFzcygpXG5cblx0XHRpZiAoYWRkUmF5cylcblx0XHRcdGJsZW5kUGFzcygpXG5cblx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpXG5cdH1cblxuXHRhbmltYXRlKClcblxuXHRmdW5jdGlvbiBtb3ZlQ3ViZSgpOiB2b2lkIHtcblx0XHRsZXQgcG9zID0gbW9kZWwyLmdldFBvc2l0aW9uKClcblx0XHRsZXQgYW10ID0gMC4xXG5cdFx0aWYgKGtleWJvYXJkLmlzRG93bih3Z2wuSW5wdXQuS2V5cy5MZWZ0KSkgcG9zWzBdICs9IGFtdFxuXHRcdGlmIChrZXlib2FyZC5pc0Rvd24od2dsLklucHV0LktleXMuUmlnaHQpKSBwb3NbMF0gLT0gYW10XG5cdFx0aWYgKGtleWJvYXJkLmlzRG93bih3Z2wuSW5wdXQuS2V5cy5Eb3duKSkgXG5cdFx0XHRpZiAoa2V5Ym9hcmQuaXNEb3duKHdnbC5JbnB1dC5LZXlzLnNoaWZ0KSlcblx0XHRcdFx0cG9zWzJdIC09IGFtdFxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRwb3NbMV0gLT0gYW10XG5cdFx0aWYgKGtleWJvYXJkLmlzRG93bih3Z2wuSW5wdXQuS2V5cy5VcCkpIFxuXHRcdFx0aWYgKGtleWJvYXJkLmlzRG93bih3Z2wuSW5wdXQuS2V5cy5zaGlmdCkpXG5cdFx0XHRcdHBvc1syXSArPSBhbXRcblx0XHRcdGVsc2Vcblx0XHRcdFx0cG9zWzFdICs9IGFtdFxuXHR9XG5cblxuXHQvL1x0c2hhZG93c1xuXG5cdGZ1bmN0aW9uIGRlcHRoTGlnaHRQYXNzKCkge1xuXG5cdFx0bGV0IHRyYW5zZm9ybXMgPSBnZXRMaWdodFNwYWNlUHJvalZpZXcoKVxuXG5cdFx0Y29uc3QgbW9kZWxzID0gc2NlbmUubW9kZWxzXG5cblx0XHRnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIHNoYWRvd0Ziby5mYm8pXG5cblx0XHRnbC5jbGVhcihnbC5ERVBUSF9CVUZGRVJfQklUKVxuXG5cdFx0Z2wudmlld3BvcnQoMCwgMCwgc2hhZG93U3osIHNoYWRvd1N6KVxuXG5cdFx0cmVuZGVyZXIuY29uZGl0aW9uYWxCaW5kUHJvZ3JhbShnZW5TaGFkb3dQcm9nKVxuXHRcdGdlblNoYWRvd1Byb2cuc2V0VW5pZm9ybSgndmlldycsIHRyYW5zZm9ybXMudmlldylcblx0XHRnZW5TaGFkb3dQcm9nLnNldFVuaWZvcm0oJ3Byb2plY3Rpb24nLCB0cmFuc2Zvcm1zLnByb2opXG5cblx0XHRmb3IgKGxldCBtb2RlbCBvZiBtb2RlbHMpIHtcblx0XHRcdHJlbmRlcmVyLmNvbmRpdGlvbmFsQmluZE1lc2goZ2VuU2hhZG93UHJvZywgbW9kZWwubWVzaClcblx0XHRcdGdlblNoYWRvd1Byb2cuc2V0VW5pZm9ybSgnbW9kZWwnLCBtb2RlbC5nZXRXb3JsZE1hdHJpeCgpKVxuXHRcdFx0bW9kZWwubWVzaC5kcmF3KClcblx0XHR9XG5cblx0XHRnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIG51bGwpXG5cblx0XHRnbC52aWV3cG9ydCgwLCAwLCBjYW52YXMud2lkdGgqY2FudmFzLmRwciwgY2FudmFzLmhlaWdodCpjYW52YXMuZHByKVxuXG5cdH1cblxuXHRmdW5jdGlvbiBnZXRMaWdodFNwYWNlUHJvalZpZXcoKToge3Byb2o6IG1hdDQsIHZpZXc6IG1hdDR9IHtcblx0XHRjb25zdCBydmVjID0gd2dsLnV0aWwudmVjdG9yLnJlcXVpcmVWZWMzXG5cdFx0Y29uc3Qgb3JpZ2luID0gdmVjMy5mcm9tVmFsdWVzKDAsIDAsIDApXG5cdFx0Y29uc3QgdXAgPSB2ZWMzLmZyb21WYWx1ZXMoMCwgMSwgMClcblx0XHQvLyBjb25zdCBsaWdodFNwYWNlUHJvaiA9IG1hdDQub3J0aG8obWF0NC5jcmVhdGUoKSwgLTEwLCAxMCwgLTEwLCAxMCwgMSwgNy41KVxuXHRcdGNvbnN0IGxpZ2h0U3BhY2VQcm9qID0gbWF0NC5vcnRobyhtYXQ0LmNyZWF0ZSgpLCAtMTAsIDEwLCAtMTAsIDEwLCAxLCAyMDApXG5cdFx0Y29uc3QgbGlnaHRTcGFjZVZpZXcgPSB3Z2wubWF0aC5sb29rQXQobWF0NC5jcmVhdGUoKSwgcnZlYyhsaWdodFBvc2l0aW9uKSwgb3JpZ2luLCB1cClcblx0XHRyZXR1cm4ge3ZpZXc6IGxpZ2h0U3BhY2VWaWV3LCBwcm9qOiBsaWdodFNwYWNlUHJvan1cblx0fVxuXG5cblx0Ly9cdHZvbHVtZXNcblxuXHRmdW5jdGlvbiByZWd1bGFyUGFzcygpIHtcblxuXHRcdGNvbnN0IHRyYW5zZm9ybXMgPSBnZXRMaWdodFNwYWNlUHJvalZpZXcoKVxuXHRcdGNvbnN0IHRyYW5zID0gbWF0NC5tdWx0aXBseShtYXQ0LmNyZWF0ZSgpLCB0cmFuc2Zvcm1zLnByb2osIHRyYW5zZm9ybXMudmlldylcblxuXHRcdHJlbmRlcmVyLmNvbmRpdGlvbmFsQmluZFByb2dyYW0ocHJvZylcblxuXHRcdHNoYWRvd0Ziby50ZXh0dXJlLmJpbmQoKVxuXG5cdFx0cHJvZy5zZXRVbmlmb3JtKCdzaGFkb3dfZGVwdGhfbWFwJywgc2hhZG93RmJvLnRleHR1cmUpXG5cdFx0cHJvZy5zZXRVbmlmb3JtKCdzaGFkb3dfc2l6ZScsIHNoYWRvd1N6KVxuXHRcdHByb2cuc2V0VW5pZm9ybSgnbGlnaHRfc3BhY2VfdHJhbnNmb3JtJywgdHJhbnMpXG5cblx0XHRyZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSlcblxuXHRcdHNoYWRvd0Ziby50ZXh0dXJlLnVuYmluZCgpXG5cdH1cblxuXHRmdW5jdGlvbiBibGFja1Bhc3MoKSB7XG5cdFx0Z2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBmYm8uZmJvKVxuXHRcdGdsLnZpZXdwb3J0KDAsIDAsIGZib1csIGZib0gpXG5cblx0XHRzcGhlcmVNb2RlbC5wcm9ncmFtID0gYmFzaWNQcm9nXG5cdFx0cGxhbmVNb2RlbC5wcm9ncmFtID0gYmFzaWNQcm9nXG5cdFx0bW9kZWwyLnByb2dyYW0gPSBiYXNpY1Byb2dcblx0XHRzcGhlcmVNb2RlbC5tYXRlcmlhbC5nZXRBdHRyaWJ1dGUoJ2FsYmVkbycpLnNldFZhbHVlKFswLCAwLCAwXSlcblxuXHRcdC8vXHRtYWtlIHN1cmUgdGhlIGxpZ2h0IGlzIGRyYXduIGZpcnN0XG5cdFx0bGlnaHRTcGhlcmVNb2RlbC5vcmRlciA9IC0xXG5cdFx0c2NlbmUuc29ydE1vZGVscyh3Z2wuTW9kZWwuY29tcGFyZU9yZGVyKVxuXG5cdFx0cmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpXG5cblx0XHRzcGhlcmVNb2RlbC5wcm9ncmFtID0gcHJvZ1xuXHRcdHBsYW5lTW9kZWwucHJvZ3JhbSA9IHByb2dcblx0XHRtb2RlbDIucHJvZ3JhbSA9IHByb2dcblx0XHRzcGhlcmVNb2RlbC5tYXRlcmlhbC5nZXRBdHRyaWJ1dGUoJ2FsYmVkbycpLnNldFZhbHVlKHNwaGVyZUNvbG9yKVxuXHRcdGxpZ2h0U3BoZXJlTW9kZWwubWF0ZXJpYWwuZ2V0QXR0cmlidXRlKCdhbGJlZG8nKS5zZXRWYWx1ZShsaWdodENvbG9yKVxuXG5cdFx0Z2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBudWxsKVxuXG5cdFx0Z2wudmlld3BvcnQoMCwgMCwgY2FudmFzLndpZHRoICogY2FudmFzLmRwciwgY2FudmFzLmhlaWdodCAqIGNhbnZhcy5kcHIpXG5cdH1cblxuXHRmdW5jdGlvbiBibGVuZFBhc3MoKSB7XG5cdFx0Z2wuZW5hYmxlKGdsLkJMRU5EKVxuXHRcdGdsLmJsZW5kRnVuYyhnbC5TUkNfQUxQSEEsIGdsLk9ORSlcblxuXHRcdHJlbmRlcmVyLmNvbmRpdGlvbmFsQmluZFByb2dyYW0ocG9zdFByb2cpXG5cdFx0cmVuZGVyZXIuY29uZGl0aW9uYWxCaW5kTWVzaChwb3N0UHJvZywgcXVhZClcblxuXHRcdGZiby50ZXh0dXJlLmluZGV4ID0gMFxuXG5cdFx0bGV0IHBvcyA9IGdldFNjcmVlblNwYWNlUG9zaXRpb24obGlnaHRQb3NpdGlvbiwgY2FtZXJhLmdldFZpZXdNYXRyaXgoKSwgcmVuZGVyZXIuZ2V0UHJvamVjdGlvbk1hdHJpeCgpKVxuXG5cdFx0cG9zdFByb2cuc2V0VW5pZm9ybSgndVNjcmVlblNwYWNlU3VuUG9zJywgcG9zKVxuXHRcdHBvc3RQcm9nLnNldFVuaWZvcm0oJ3VEZW5zaXR5JywgMS4wKVxuXHRcdHBvc3RQcm9nLnNldFVuaWZvcm0oJ3VXZWlnaHQnLCAwLjAwOClcblx0XHRwb3N0UHJvZy5zZXRVbmlmb3JtKCd1RGVjYXknLCAxLjApXG5cdFx0cG9zdFByb2cuc2V0VW5pZm9ybSgndUV4cG9zdXJlJywgMS4wKVxuXHRcdHBvc3RQcm9nLnNldGkoJ3VOdW1TYW1wbGVzJywgMjUpXG5cdFx0cG9zdFByb2cuc2V0VW5pZm9ybSgndU9jY2x1c2lvblRleHR1cmUnLCBmYm8udGV4dHVyZSlcblxuXHRcdGZiby50ZXh0dXJlLmJpbmQoKVxuXG5cdFx0cXVhZC5iaW5kKHBvc3RQcm9nKVxuXHRcdHF1YWQuZHJhdygpXG5cdFx0cXVhZC51bmJpbmQoKVxuXG5cdFx0ZmJvLnRleHR1cmUudW5iaW5kKClcblxuXHRcdGdsLmRpc2FibGUoZ2wuQkxFTkQpXG5cdH1cblxufVxuXG5mdW5jdGlvbiBnZXRTY3JlZW5TcGFjZVBvc2l0aW9uKHBvczogd2dsLnV0aWwudHlwZXMudmVjM0NvbnZlcnRpYmxlLCB2aWV3OiBtYXQ0LCBwcm9qOiBtYXQ0KTogdmVjMyB7XG5cblx0cG9zID0gd2dsLnV0aWwudmVjdG9yLnJlcXVpcmVWZWMzKHBvcylcblxuICAgIHZhciB2ID0gdmVjNC5mcm9tVmFsdWVzKHBvc1swXSwgcG9zWzFdLCBwb3NbMl0sIDEuMClcbiAgICB2ZWM0LnRyYW5zZm9ybU1hdDQodiwgdiwgdmlldylcbiAgICB2ZWM0LnRyYW5zZm9ybU1hdDQodiwgdiwgcHJvailcblxuICAgIC8vIHBlcnNwZWN0aXZlIGRpdmlzaW9uXG4gICAgdmVjNC5zY2FsZSh2LCB2LCAxLjAgLyB2WzNdIClcblxuICAgIC8vIHNjYWxlICh4LHkpIGZyb20gcmFuZ2UgWy0xLCsxXSB0byByYW5nZSBbMCwrMV1cbiAgICB2ZWM0LmFkZCh2LCB2LCBbMS4wLCAxLjAsIDAuMCwgMC4wXSApXG4gICAgdmVjNC5zY2FsZSh2LCB2LCAwLjUpXG5cbiAgICByZXR1cm4gdmVjMy5mcm9tVmFsdWVzKHZbMF0sIHZbMV0sIDApXG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGVzL3ZvbHVtZXRyaWMtdGVzdC50cyIsImltcG9ydCB7IE1lc2hGYWN0b3J5LCBNZXNoVHlwZXMgfSBmcm9tICcuL21lc2gvbWVzaC1mYWN0b3J5J1xuaW1wb3J0IHsgTWVzaExpYnJhcnkgfSBmcm9tICcuL21lc2gvbWVzaC1saWJyYXJ5J1xuaW1wb3J0ICogYXMgTWF0ZXJpYWwgZnJvbSAnLi9tYXRlcmlhbC9tYXRlcmlhbCdcbmltcG9ydCAqIGFzIExpZ2h0IGZyb20gJy4vbGlnaHQvbGlnaHQnXG5pbXBvcnQgeyBNZXNoIH0gZnJvbSAnLi9tZXNoL21lc2gnXG5pbXBvcnQgeyBNb2RlbCB9IGZyb20gJy4vbW9kZWwvbW9kZWwnXG5pbXBvcnQgeyBWZXJ0ZXgsIFRvcG9sb2dpZXMgfSBmcm9tICcuL21lc2gvdmVydGV4J1xuaW1wb3J0IHsgU2hhZGVyLCBTaGFkZXJQcm9ncmFtLCBTaGFkZXJTb3VyY2UsIFNoYWRlclR5cGVzIH0gZnJvbSAnLi9zaGFkZXIvc2hhZGVyJ1xuaW1wb3J0IHsgU2hhZGVyTGlicmFyeSB9IGZyb20gJy4vc2hhZGVyL3NoYWRlci1saWJyYXJ5J1xuaW1wb3J0IHsgU2hhZGVyRmFjdG9yeSB9IGZyb20gJy4vc2hhZGVyL3NoYWRlci1mYWN0b3J5J1xuaW1wb3J0IHsgQ2FtZXJhLCBkaXJlY3Rpb25zIH0gZnJvbSAnLi9jYW1lcmEvY2FtZXJhJ1xuaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuL3NjZW5lL3NjZW5lJ1xuaW1wb3J0IHsgRnJhbWVTdGF0cyB9IGZyb20gJy4vY29tbW9uL2ZyYW1lLXN0YXRzJ1xuaW1wb3J0ICogYXMgcmVuZGVyZXJzIGZyb20gJy4vcmVuZGVyZXJzL3JlbmRlcmVycydcbmltcG9ydCAqIGFzIG1hdGggZnJvbSAnLi9tYXRoL3dnbC1tYXRoJ1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwvdXRpbCdcbmltcG9ydCB7IENhbnZhcyB9IGZyb20gJy4vY29tbW9uL2NhbnZhcydcbmltcG9ydCAqIGFzIExvYWRlcnMgZnJvbSAnLi9sb2FkZXJzL2xvYWRlcnMnXG5pbXBvcnQgKiBhcyBJbnB1dCBmcm9tICcuL2lucHV0L2lucHV0J1xuaW1wb3J0ICogYXMgQ29udHJvbHMgZnJvbSAnLi9pbnB1dC9jYW1lcmEtY29udHJvbHMnXG5pbXBvcnQgKiBhcyBjYXBhYmlsaXRpZXMgZnJvbSAnLi9jb21tb24vY2FwYWJpbGl0aWVzJ1xuaW1wb3J0ICogYXMgdGV4dHVyZSBmcm9tICcuL3RleHR1cmUvdGV4dHVyZSdcblxuZXhwb3J0IHtcblx0Y2FwYWJpbGl0aWVzLFxuXHRDYW1lcmEsXG5cdENhbnZhcyxcblx0Q29udHJvbHMsXG5cdGRpcmVjdGlvbnMsXG5cdElucHV0LFxuXHRGcmFtZVN0YXRzLFxuXHRMaWdodCxcblx0TG9hZGVycyxcblx0bWF0aCxcblx0TWF0ZXJpYWwsXG5cdE1lc2hGYWN0b3J5LFxuXHRNZXNoVHlwZXMsXG5cdE1lc2hMaWJyYXJ5LFxuXHRNZXNoLFxuXHRNb2RlbCxcblx0VmVydGV4LFxuXHRUb3BvbG9naWVzLFxuXHRyZW5kZXJlcnMsXG5cdFNjZW5lLFxuXHRTaGFkZXJTb3VyY2UsXG5cdFNoYWRlclR5cGVzLFxuXHRTaGFkZXIsXG5cdFNoYWRlclByb2dyYW0sXG5cdFNoYWRlckxpYnJhcnksXG5cdFNoYWRlckZhY3RvcnksXG5cdHRleHR1cmUsXG5cdHV0aWxcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC93ZWItZ2wudHMiLCJpbXBvcnQgeyBWZXJ0ZXgsIFRvcG9sb2dpZXMgfSBmcm9tICcuL3ZlcnRleCdcbmltcG9ydCB7IE1lc2ggfSBmcm9tICcuL21lc2gnXG5pbXBvcnQgeyBNZXNoTGlicmFyeSB9IGZyb20gJy4vbWVzaC1saWJyYXJ5J1xuaW1wb3J0ICogYXMgbWF0aCBmcm9tICcuLi9tYXRoL3dnbC1tYXRoJ1xuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2ViR0xfQVBJL1R1dG9yaWFsL0NyZWF0aW5nXzNEX29iamVjdHNfdXNpbmdfV2ViR0xcblxudHlwZSBNZXNoVHlwZXMgPSAncXVhZCcgfCAndHJpYW5nbGUnIHwgJ3NwaGVyZScgfCAnY3ViZScgfCAnc2t5Ym94J1xuXG50eXBlIE1lc2hDcmVhdGVPcHRpb25zID0ge1xuICAgIGZpbmFsaXplOiBib29sZWFuXG4gICAgdmVydGV4Q291bnQ6IG51bWJlclxufVxuXG5jbGFzcyBNZXNoRmFjdG9yeSB7XG5cbiAgICBwdWJsaWMgc3RhdGljIERlZmF1bHRzKCk6IE1lc2hDcmVhdGVPcHRpb25zIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZpbmFsaXplOiB0cnVlLFxuICAgICAgICAgICAgdmVydGV4Q291bnQ6IDY0XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZShnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCBcbiAgICAgICAga2luZDogTWVzaFR5cGVzLCBpbk9wdHM6IE9iamVjdCA9IE1lc2hGYWN0b3J5LkRlZmF1bHRzKCkpOiBNZXNoIHtcblxuICAgICAgICBjb25zdCBvcHRzID0gTWVzaEZhY3RvcnkuRGVmYXVsdHMoKVxuICAgICAgICBPYmplY3QuYXNzaWduKG9wdHMsIGluT3B0cylcblxuICAgICAgICBsZXQgbWVzaDogTWVzaCA9IG5ldyBNZXNoKGdsKVxuICAgICAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgICAgICAgIGNhc2UgJ3F1YWQnOlxuICAgICAgICAgICAgICAgIE1lc2hGYWN0b3J5Lm1ha2VRdWFkKG1lc2gpXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ3RyaWFuZ2xlJzpcbiAgICAgICAgICAgICAgICBNZXNoRmFjdG9yeS5tYWtlVHJpYW5nbGUobWVzaClcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnc3BoZXJlJzpcbiAgICAgICAgICAgICAgICBNZXNoRmFjdG9yeS5tYWtlU3BoZXJlKG1lc2gsIG9wdHMudmVydGV4Q291bnQpXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ2N1YmUnOlxuICAgICAgICAgICAgICAgIE1lc2hGYWN0b3J5Lm1ha2VDdWJlKG1lc2gpXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ3NreWJveCc6XG4gICAgICAgICAgICAgICAgTWVzaEZhY3RvcnkubWFrZVNreWJveChtZXNoKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0cy5maW5hbGl6ZSlcbiAgICAgICAgICAgIG1lc2guZmluYWxpemUoKVxuXG4gICAgICAgIHJldHVybiBtZXNoXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBtYWtlU2t5Ym94KG1lc2g6IE1lc2gpIHtcbiAgICAgICAgY29uc3QgZmxvYXQzMlZlcnRleERhdGE6IEZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoTWVzaExpYnJhcnkuc2t5Ym94LmRhdGEpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzY7IGkrKykge1xuICAgICAgICAgICAgbGV0IHZlcnRleDogVmVydGV4ID0gbmV3IFZlcnRleCgpXG4gICAgICAgICAgICBsZXQgeCwgeSwgeiwgdSwgdiwgbngsIG55LCBuejogbnVtYmVyXG5cbiAgICAgICAgICAgIHggPSBmbG9hdDMyVmVydGV4RGF0YVtpKjUrMF1cbiAgICAgICAgICAgIHkgPSBmbG9hdDMyVmVydGV4RGF0YVtpKjUrMV1cbiAgICAgICAgICAgIHogPSBmbG9hdDMyVmVydGV4RGF0YVtpKjUrMl1cblxuICAgICAgICAgICAgdSA9IGZsb2F0MzJWZXJ0ZXhEYXRhW2kqNSszXVxuICAgICAgICAgICAgdiA9IGZsb2F0MzJWZXJ0ZXhEYXRhW2kqNSs0XVxuXG4gICAgICAgICAgICBueCA9IDBcbiAgICAgICAgICAgIG55ID0gMFxuICAgICAgICAgICAgbnogPSAwXG5cbiAgICAgICAgICAgIHZlcnRleC5zZXRQb3NpdGlvbihuZXcgRmxvYXQzMkFycmF5KFt4LCB5LCB6XSkpXG4gICAgICAgICAgICB2ZXJ0ZXguc2V0VVYobmV3IEZsb2F0MzJBcnJheShbdSwgdl0pKVxuICAgICAgICAgICAgdmVydGV4LnNldE5vcm1hbChuZXcgRmxvYXQzMkFycmF5KFtueCwgbnksIG56XSkpXG5cbiAgICAgICAgICAgIG1lc2guYWRkVmVydGV4KHZlcnRleClcbiAgICAgICAgfVxuXG4gICAgICAgIG1lc2guc2V0VG9wb2xvZ3koVG9wb2xvZ2llcy5UUklBTkdMRVMpXG4gICAgfVxuXHRcblx0cHVibGljIHN0YXRpYyBtYWtlUXVhZChtZXNoOiBNZXNoKSB7XG5cbiAgICAgICAgY29uc3QgZmxvYXQzMlZlcnRleERhdGE6IEZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoTWVzaExpYnJhcnkucXVhZC5kYXRhKVxuXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgXHRsZXQgdmVydGV4OiBWZXJ0ZXggPSBuZXcgVmVydGV4KClcbiAgICAgICAgXHRsZXQgeCwgeSwgeiwgdSwgdiwgbngsIG55LCBuejogbnVtYmVyXG5cbiAgICAgICAgXHR4ID0gZmxvYXQzMlZlcnRleERhdGFbaSo4KzBdXG4gICAgICAgIFx0eSA9IGZsb2F0MzJWZXJ0ZXhEYXRhW2kqOCsxXVxuICAgICAgICBcdHogPSBmbG9hdDMyVmVydGV4RGF0YVtpKjgrMl1cbiAgICAgICAgXHR1ID0gZmxvYXQzMlZlcnRleERhdGFbaSo4KzNdXG4gICAgICAgIFx0diA9IGZsb2F0MzJWZXJ0ZXhEYXRhW2kqOCs0XVxuICAgICAgICBcdG54ID0gZmxvYXQzMlZlcnRleERhdGFbaSo4KzVdXG4gICAgICAgIFx0bnkgPSBmbG9hdDMyVmVydGV4RGF0YVtpKjgrNl1cbiAgICAgICAgXHRueiA9IGZsb2F0MzJWZXJ0ZXhEYXRhW2kqOCs3XVxuXG4gICAgICAgIFx0dmVydGV4LnNldFBvc2l0aW9uKG5ldyBGbG9hdDMyQXJyYXkoW3gsIHksIHpdKSlcbiAgICAgICAgXHR2ZXJ0ZXguc2V0VVYobmV3IEZsb2F0MzJBcnJheShbdSwgdl0pKVxuICAgICAgICBcdHZlcnRleC5zZXROb3JtYWwobmV3IEZsb2F0MzJBcnJheShbbngsIG55LCBuel0pKVxuXG4gICAgICAgIFx0bWVzaC5hZGRWZXJ0ZXgodmVydGV4KVxuICAgICAgICB9XG4gICAgICAgIG1lc2guc2V0VG9wb2xvZ3koVG9wb2xvZ2llcy5UUklBTkdMRVMpXG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIG1ha2VDdWJlKG1lc2g6IE1lc2gpIHtcblxuXHRcdGNvbnN0IGZsb2F0MzJWZXJ0ZXhEYXRhOiBGbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KE1lc2hMaWJyYXJ5LmN1YmUyLmRhdGEpXG5cblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgMzY7IGkrKykge1xuICAgICAgICBcdGxldCB2ZXJ0ZXg6IFZlcnRleCA9IG5ldyBWZXJ0ZXgoKVxuICAgICAgICBcdGxldCB4LCB5LCB6OiBudW1iZXJcbiAgICAgICAgXHRsZXQgbngsIG55LCBueiwgdSwgdjogbnVtYmVyXG5cbiAgICAgICAgXHR4ID0gZmxvYXQzMlZlcnRleERhdGFbaSo4KzBdXG4gICAgICAgIFx0eSA9IGZsb2F0MzJWZXJ0ZXhEYXRhW2kqOCsxXVxuICAgICAgICBcdHogPSBmbG9hdDMyVmVydGV4RGF0YVtpKjgrMl1cblxuICAgICAgICAgICAgLy8gdGhlc2UgYXJlIGZsaXBwZWQgYmVjYXVzZSB0aGV5IHdlcmUgY29waWVkIHRoYXQgd2F5LFxuICAgICAgICAgICAgLy8gYW5kIGltIHRvbyBsYXp5IHRvIGNoYW5nZSBpdFxuXG4gICAgICAgIFx0bnggPSBmbG9hdDMyVmVydGV4RGF0YVtpKjgrM11cbiAgICAgICAgXHRueSA9IGZsb2F0MzJWZXJ0ZXhEYXRhW2kqOCs0XVxuICAgICAgICBcdG56ID0gZmxvYXQzMlZlcnRleERhdGFbaSo4KzVdXG5cbiAgICAgICAgXHR1ID0gZmxvYXQzMlZlcnRleERhdGFbaSo4KzZdXG4gICAgICAgIFx0diA9IGZsb2F0MzJWZXJ0ZXhEYXRhW2kqOCs3XVxuXG4gICAgICAgIFx0dmVydGV4LnNldFBvc2l0aW9uKG5ldyBGbG9hdDMyQXJyYXkoW3gsIHksIHpdKSlcbiAgICAgICAgXHR2ZXJ0ZXguc2V0Tm9ybWFsKG5ldyBGbG9hdDMyQXJyYXkoW254LCBueSwgbnpdKSlcbiAgICAgICAgXHR2ZXJ0ZXguc2V0VVYobmV3IEZsb2F0MzJBcnJheShbdSwgdl0pKVxuICAgICAgICBcdG1lc2guYWRkVmVydGV4KHZlcnRleClcbiAgICAgICAgfVxuXG4gICAgICAgIG1lc2guc2V0VG9wb2xvZ3koVG9wb2xvZ2llcy5UUklBTkdMRVMpXG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIG1ha2VUcmlhbmdsZShtZXNoOiBNZXNoKSB7XG5cblx0XHRjb25zdCBmbG9hdDMyVmVydGV4RGF0YTogRmxvYXQzMkFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShNZXNoTGlicmFyeS50cmlhbmdsZS5kYXRhKVxuXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgXHRsZXQgdmVydGV4OiBWZXJ0ZXggPSBuZXcgVmVydGV4KClcblxuICAgICAgICBcdGxldCB4LCB5LCB6LCB1LCB2LCBueCwgbnksIG56OiBudW1iZXJcbiAgICAgICAgXHR4ID0gZmxvYXQzMlZlcnRleERhdGFbaSo4KzBdXG4gICAgICAgIFx0eSA9IGZsb2F0MzJWZXJ0ZXhEYXRhW2kqOCsxXVxuICAgICAgICBcdHogPSBmbG9hdDMyVmVydGV4RGF0YVtpKjgrMl1cbiAgICAgICAgXHR1ID0gZmxvYXQzMlZlcnRleERhdGFbaSo4KzNdXG4gICAgICAgIFx0diA9IGZsb2F0MzJWZXJ0ZXhEYXRhW2kqOCs0XVxuICAgICAgICBcdG54ID0gZmxvYXQzMlZlcnRleERhdGFbaSo4KzVdXG4gICAgICAgIFx0bnkgPSBmbG9hdDMyVmVydGV4RGF0YVtpKjgrNl1cbiAgICAgICAgXHRueiA9IGZsb2F0MzJWZXJ0ZXhEYXRhW2kqOCs3XVxuXG4gICAgICAgIFx0dmVydGV4LnNldFBvc2l0aW9uKG5ldyBGbG9hdDMyQXJyYXkoW3gsIHksIHpdKSlcbiAgICAgICAgXHR2ZXJ0ZXguc2V0VVYobmV3IEZsb2F0MzJBcnJheShbdSwgdl0pKVxuICAgICAgICBcdHZlcnRleC5zZXROb3JtYWwobmV3IEZsb2F0MzJBcnJheShbbngsIG55LCBuel0pKVxuXG4gICAgICAgIFx0bWVzaC5hZGRWZXJ0ZXgodmVydGV4KVxuICAgICAgICB9XG4gICAgICAgIG1lc2guc2V0VG9wb2xvZ3koVG9wb2xvZ2llcy5UUklBTkdMRVMpXG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIG1ha2VTcGhlcmUobWVzaDogTWVzaCwgdmVydGV4Q291bnQ6IG51bWJlciA9IDY0KSB7XG5cdFx0aWYgKCFtYXRoLmlzUG93Mih2ZXJ0ZXhDb3VudCkpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1ZlcnRleCBjb3VudCBtdXN0IGJlIGEgcG93ZXIgb2YgMi4nKVxuXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHZlcnRleENvdW50OyBpKyspIHtcblx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCB2ZXJ0ZXhDb3VudDsgaisrKSB7XG5cdFx0XHRcdGxldCB4U2VnbWVudDogbnVtYmVyID0gaiAvICh2ZXJ0ZXhDb3VudC0xKVxuXHRcdFx0XHRsZXQgeVNlZ21lbnQ6IG51bWJlciA9IGkgLyAodmVydGV4Q291bnQtMSlcblxuXHRcdFx0XHRsZXQgeFBvczogbnVtYmVyID0gTWF0aC5jb3MoeFNlZ21lbnQgKiAyICogTWF0aC5QSSkgKiBNYXRoLnNpbih5U2VnbWVudCAqIE1hdGguUEkpXG5cdFx0XHRcdGxldCB5UG9zOiBudW1iZXIgPSBNYXRoLmNvcyh5U2VnbWVudCAqIE1hdGguUEkpXG5cdFx0XHRcdGxldCB6UG9zOiBudW1iZXIgPSBNYXRoLnNpbih4U2VnbWVudCAqIDIgKiBNYXRoLlBJKSAqIE1hdGguc2luKHlTZWdtZW50ICogTWF0aC5QSSlcblxuXHRcdFx0XHRsZXQgdmVydGV4OiBWZXJ0ZXggPSBuZXcgVmVydGV4KClcblx0XHRcdFx0dmVydGV4LnNldFBvc2l0aW9uKG5ldyBGbG9hdDMyQXJyYXkoW3hQb3MsIHlQb3MsIHpQb3NdKSlcblx0XHRcdFx0dmVydGV4LnNldFVWKG5ldyBGbG9hdDMyQXJyYXkoW3hTZWdtZW50LCB5U2VnbWVudF0pKVxuXHRcdFx0XHR2ZXJ0ZXguc2V0Tm9ybWFsKG5ldyBGbG9hdDMyQXJyYXkoW3hQb3MsIHlQb3MsIHpQb3NdKSlcblxuXHRcdFx0XHRtZXNoLmFkZFZlcnRleCh2ZXJ0ZXgpXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bGV0IGZpcnN0SW5kZXg6IG51bWJlciA9IDBcblx0XHRsZXQgbmV4dEluZGV4OiBudW1iZXIgPSB2ZXJ0ZXhDb3VudFxuXHRcdGxldCBpbmRleFN0cDogbnVtYmVyID0gMFxuXHRcdGxldCBzaG91bGRQcm9jZWVkOiBib29sZWFuID0gdHJ1ZVxuXHRcdGxldCBpbmRpY2VzOiBBcnJheTxudW1iZXI+ID0gW11cblxuXHRcdHdoaWxlIChzaG91bGRQcm9jZWVkKSB7XG5cdFx0XHRpbmRpY2VzLnB1c2goZmlyc3RJbmRleClcblx0XHRcdGluZGljZXMucHVzaChuZXh0SW5kZXgpXG5cdFx0XHRpbmRleFN0cCArPSAyXG5cblx0XHRcdHNob3VsZFByb2NlZWQgPSBuZXh0SW5kZXggIT0gKHZlcnRleENvdW50ICogdmVydGV4Q291bnQpIC0gMVxuXG5cdFx0XHRpZiAoaW5kZXhTdHAgPiAwICYmIChuZXh0SW5kZXgrMSkgJSB2ZXJ0ZXhDb3VudCA9PSAwICYmIHNob3VsZFByb2NlZWQpIHtcblx0XHRcdFx0aW5kaWNlcy5wdXNoKG5leHRJbmRleClcblx0XHRcdFx0aW5kaWNlcy5wdXNoKGZpcnN0SW5kZXgrMSlcblx0XHRcdFx0aW5kZXhTdHAgKz0gMlxuXHRcdFx0fVxuXG5cdFx0XHRmaXJzdEluZGV4Kytcblx0XHRcdG5leHRJbmRleCsrXG5cdFx0fVxuXG5cdFx0bWVzaC5zZXRUb3BvbG9neShUb3BvbG9naWVzLlRSSUFOR0xFX1NUUklQKVxuXHRcdG1lc2guc2V0SW5kaWNlcyhuZXcgVWludDE2QXJyYXkoaW5kaWNlcykpXG5cblx0fVxuXG59XG5cbmV4cG9ydCB7IE1lc2hGYWN0b3J5LCBNZXNoVHlwZXMgfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2dsL21lc2gvbWVzaC1mYWN0b3J5LnRzIiwidmFyIHYxID0gcmVxdWlyZSgnLi92MScpO1xudmFyIHY0ID0gcmVxdWlyZSgnLi92NCcpO1xuXG52YXIgdXVpZCA9IHY0O1xudXVpZC52MSA9IHYxO1xudXVpZC52NCA9IHY0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHV1aWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy91dWlkL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcm5nID0gcmVxdWlyZSgnLi9saWIvcm5nJyk7XG52YXIgYnl0ZXNUb1V1aWQgPSByZXF1aXJlKCcuL2xpYi9ieXRlc1RvVXVpZCcpO1xuXG4vLyAqKmB2MSgpYCAtIEdlbmVyYXRlIHRpbWUtYmFzZWQgVVVJRCoqXG4vL1xuLy8gSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL0xpb3NLL1VVSUQuanNcbi8vIGFuZCBodHRwOi8vZG9jcy5weXRob24ub3JnL2xpYnJhcnkvdXVpZC5odG1sXG5cbi8vIHJhbmRvbSAjJ3Mgd2UgbmVlZCB0byBpbml0IG5vZGUgYW5kIGNsb2Nrc2VxXG52YXIgX3NlZWRCeXRlcyA9IHJuZygpO1xuXG4vLyBQZXIgNC41LCBjcmVhdGUgYW5kIDQ4LWJpdCBub2RlIGlkLCAoNDcgcmFuZG9tIGJpdHMgKyBtdWx0aWNhc3QgYml0ID0gMSlcbnZhciBfbm9kZUlkID0gW1xuICBfc2VlZEJ5dGVzWzBdIHwgMHgwMSxcbiAgX3NlZWRCeXRlc1sxXSwgX3NlZWRCeXRlc1syXSwgX3NlZWRCeXRlc1szXSwgX3NlZWRCeXRlc1s0XSwgX3NlZWRCeXRlc1s1XVxuXTtcblxuLy8gUGVyIDQuMi4yLCByYW5kb21pemUgKDE0IGJpdCkgY2xvY2tzZXFcbnZhciBfY2xvY2tzZXEgPSAoX3NlZWRCeXRlc1s2XSA8PCA4IHwgX3NlZWRCeXRlc1s3XSkgJiAweDNmZmY7XG5cbi8vIFByZXZpb3VzIHV1aWQgY3JlYXRpb24gdGltZVxudmFyIF9sYXN0TVNlY3MgPSAwLCBfbGFzdE5TZWNzID0gMDtcblxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9icm9vZmEvbm9kZS11dWlkIGZvciBBUEkgZGV0YWlsc1xuZnVuY3Rpb24gdjEob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG4gIHZhciBiID0gYnVmIHx8IFtdO1xuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIHZhciBjbG9ja3NlcSA9IG9wdGlvbnMuY2xvY2tzZXEgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuY2xvY2tzZXEgOiBfY2xvY2tzZXE7XG5cbiAgLy8gVVVJRCB0aW1lc3RhbXBzIGFyZSAxMDAgbmFuby1zZWNvbmQgdW5pdHMgc2luY2UgdGhlIEdyZWdvcmlhbiBlcG9jaCxcbiAgLy8gKDE1ODItMTAtMTUgMDA6MDApLiAgSlNOdW1iZXJzIGFyZW4ndCBwcmVjaXNlIGVub3VnaCBmb3IgdGhpcywgc29cbiAgLy8gdGltZSBpcyBoYW5kbGVkIGludGVybmFsbHkgYXMgJ21zZWNzJyAoaW50ZWdlciBtaWxsaXNlY29uZHMpIGFuZCAnbnNlY3MnXG4gIC8vICgxMDAtbmFub3NlY29uZHMgb2Zmc2V0IGZyb20gbXNlY3MpIHNpbmNlIHVuaXggZXBvY2gsIDE5NzAtMDEtMDEgMDA6MDAuXG4gIHZhciBtc2VjcyA9IG9wdGlvbnMubXNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubXNlY3MgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAvLyBQZXIgNC4yLjEuMiwgdXNlIGNvdW50IG9mIHV1aWQncyBnZW5lcmF0ZWQgZHVyaW5nIHRoZSBjdXJyZW50IGNsb2NrXG4gIC8vIGN5Y2xlIHRvIHNpbXVsYXRlIGhpZ2hlciByZXNvbHV0aW9uIGNsb2NrXG4gIHZhciBuc2VjcyA9IG9wdGlvbnMubnNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubnNlY3MgOiBfbGFzdE5TZWNzICsgMTtcblxuICAvLyBUaW1lIHNpbmNlIGxhc3QgdXVpZCBjcmVhdGlvbiAoaW4gbXNlY3MpXG4gIHZhciBkdCA9IChtc2VjcyAtIF9sYXN0TVNlY3MpICsgKG5zZWNzIC0gX2xhc3ROU2VjcykvMTAwMDA7XG5cbiAgLy8gUGVyIDQuMi4xLjIsIEJ1bXAgY2xvY2tzZXEgb24gY2xvY2sgcmVncmVzc2lvblxuICBpZiAoZHQgPCAwICYmIG9wdGlvbnMuY2xvY2tzZXEgPT09IHVuZGVmaW5lZCkge1xuICAgIGNsb2Nrc2VxID0gY2xvY2tzZXEgKyAxICYgMHgzZmZmO1xuICB9XG5cbiAgLy8gUmVzZXQgbnNlY3MgaWYgY2xvY2sgcmVncmVzc2VzIChuZXcgY2xvY2tzZXEpIG9yIHdlJ3ZlIG1vdmVkIG9udG8gYSBuZXdcbiAgLy8gdGltZSBpbnRlcnZhbFxuICBpZiAoKGR0IDwgMCB8fCBtc2VjcyA+IF9sYXN0TVNlY3MpICYmIG9wdGlvbnMubnNlY3MgPT09IHVuZGVmaW5lZCkge1xuICAgIG5zZWNzID0gMDtcbiAgfVxuXG4gIC8vIFBlciA0LjIuMS4yIFRocm93IGVycm9yIGlmIHRvbyBtYW55IHV1aWRzIGFyZSByZXF1ZXN0ZWRcbiAgaWYgKG5zZWNzID49IDEwMDAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1dWlkLnYxKCk6IENhblxcJ3QgY3JlYXRlIG1vcmUgdGhhbiAxME0gdXVpZHMvc2VjJyk7XG4gIH1cblxuICBfbGFzdE1TZWNzID0gbXNlY3M7XG4gIF9sYXN0TlNlY3MgPSBuc2VjcztcbiAgX2Nsb2Nrc2VxID0gY2xvY2tzZXE7XG5cbiAgLy8gUGVyIDQuMS40IC0gQ29udmVydCBmcm9tIHVuaXggZXBvY2ggdG8gR3JlZ29yaWFuIGVwb2NoXG4gIG1zZWNzICs9IDEyMjE5MjkyODAwMDAwO1xuXG4gIC8vIGB0aW1lX2xvd2BcbiAgdmFyIHRsID0gKChtc2VjcyAmIDB4ZmZmZmZmZikgKiAxMDAwMCArIG5zZWNzKSAlIDB4MTAwMDAwMDAwO1xuICBiW2krK10gPSB0bCA+Pj4gMjQgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gMTYgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsICYgMHhmZjtcblxuICAvLyBgdGltZV9taWRgXG4gIHZhciB0bWggPSAobXNlY3MgLyAweDEwMDAwMDAwMCAqIDEwMDAwKSAmIDB4ZmZmZmZmZjtcbiAgYltpKytdID0gdG1oID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdG1oICYgMHhmZjtcblxuICAvLyBgdGltZV9oaWdoX2FuZF92ZXJzaW9uYFxuICBiW2krK10gPSB0bWggPj4+IDI0ICYgMHhmIHwgMHgxMDsgLy8gaW5jbHVkZSB2ZXJzaW9uXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMTYgJiAweGZmO1xuXG4gIC8vIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYCAoUGVyIDQuMi4yIC0gaW5jbHVkZSB2YXJpYW50KVxuICBiW2krK10gPSBjbG9ja3NlcSA+Pj4gOCB8IDB4ODA7XG5cbiAgLy8gYGNsb2NrX3NlcV9sb3dgXG4gIGJbaSsrXSA9IGNsb2Nrc2VxICYgMHhmZjtcblxuICAvLyBgbm9kZWBcbiAgdmFyIG5vZGUgPSBvcHRpb25zLm5vZGUgfHwgX25vZGVJZDtcbiAgZm9yICh2YXIgbiA9IDA7IG4gPCA2OyArK24pIHtcbiAgICBiW2kgKyBuXSA9IG5vZGVbbl07XG4gIH1cblxuICByZXR1cm4gYnVmID8gYnVmIDogYnl0ZXNUb1V1aWQoYik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdjE7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy91dWlkL3YxLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBybmcgPSByZXF1aXJlKCcuL2xpYi9ybmcnKTtcbnZhciBieXRlc1RvVXVpZCA9IHJlcXVpcmUoJy4vbGliL2J5dGVzVG9VdWlkJyk7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuXG4gIGlmICh0eXBlb2Yob3B0aW9ucykgPT0gJ3N0cmluZycpIHtcbiAgICBidWYgPSBvcHRpb25zID09ICdiaW5hcnknID8gbmV3IEFycmF5KDE2KSA6IG51bGw7XG4gICAgb3B0aW9ucyA9IG51bGw7XG4gIH1cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgdmFyIHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpO1xuXG4gIC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcbiAgcm5kc1s2XSA9IChybmRzWzZdICYgMHgwZikgfCAweDQwO1xuICBybmRzWzhdID0gKHJuZHNbOF0gJiAweDNmKSB8IDB4ODA7XG5cbiAgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG4gIGlmIChidWYpIHtcbiAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgMTY7ICsraWkpIHtcbiAgICAgIGJ1ZltpICsgaWldID0gcm5kc1tpaV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ1ZiB8fCBieXRlc1RvVXVpZChybmRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2NDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3V1aWQvdjQuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIENvcHlyaWdodCAoYykgMjAxNSwgQnJhbmRvbiBKb25lcywgQ29saW4gTWFjS2VuemllIElWLlxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbmZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG5hbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG5USEUgU09GVFdBUkUuICovXG5cbmltcG9ydCAqIGFzIGdsTWF0cml4IGZyb20gXCIuL2NvbW1vblwiXG5cbi8qKlxuICogMngyIE1hdHJpeFxuICogQG1vZHVsZSBtYXQyXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGlkZW50aXR5IG1hdDJcbiAqXG4gKiBAcmV0dXJucyB7bWF0Mn0gYSBuZXcgMngyIG1hdHJpeFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlKCkge1xuICBsZXQgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoNCk7XG4gIG91dFswXSA9IDE7XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBtYXQyIGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgbWF0cml4XG4gKlxuICogQHBhcmFtIHttYXQyfSBhIG1hdHJpeCB0byBjbG9uZVxuICogQHJldHVybnMge21hdDJ9IGEgbmV3IDJ4MiBtYXRyaXhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb25lKGEpIHtcbiAgbGV0IG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDQpO1xuICBvdXRbMF0gPSBhWzBdO1xuICBvdXRbMV0gPSBhWzFdO1xuICBvdXRbMl0gPSBhWzJdO1xuICBvdXRbM10gPSBhWzNdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENvcHkgdGhlIHZhbHVlcyBmcm9tIG9uZSBtYXQyIHRvIGFub3RoZXJcbiAqXG4gKiBAcGFyYW0ge21hdDJ9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQyfSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0Mn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KG91dCwgYSkge1xuICBvdXRbMF0gPSBhWzBdO1xuICBvdXRbMV0gPSBhWzFdO1xuICBvdXRbMl0gPSBhWzJdO1xuICBvdXRbM10gPSBhWzNdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNldCBhIG1hdDIgdG8gdGhlIGlkZW50aXR5IG1hdHJpeFxuICpcbiAqIEBwYXJhbSB7bWF0Mn0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0Mn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eShvdXQpIHtcbiAgb3V0WzBdID0gMTtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgbWF0MiB3aXRoIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbTAwIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDAgcG9zaXRpb24gKGluZGV4IDApXG4gKiBAcGFyYW0ge051bWJlcn0gbTAxIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDEgcG9zaXRpb24gKGluZGV4IDEpXG4gKiBAcGFyYW0ge051bWJlcn0gbTEwIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDAgcG9zaXRpb24gKGluZGV4IDIpXG4gKiBAcGFyYW0ge051bWJlcn0gbTExIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDEgcG9zaXRpb24gKGluZGV4IDMpXG4gKiBAcmV0dXJucyB7bWF0Mn0gb3V0IEEgbmV3IDJ4MiBtYXRyaXhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21WYWx1ZXMobTAwLCBtMDEsIG0xMCwgbTExKSB7XG4gIGxldCBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSg0KTtcbiAgb3V0WzBdID0gbTAwO1xuICBvdXRbMV0gPSBtMDE7XG4gIG91dFsyXSA9IG0xMDtcbiAgb3V0WzNdID0gbTExO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIG1hdDIgdG8gdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7bWF0Mn0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge051bWJlcn0gbTAwIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDAgcG9zaXRpb24gKGluZGV4IDApXG4gKiBAcGFyYW0ge051bWJlcn0gbTAxIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDEgcG9zaXRpb24gKGluZGV4IDEpXG4gKiBAcGFyYW0ge051bWJlcn0gbTEwIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDAgcG9zaXRpb24gKGluZGV4IDIpXG4gKiBAcGFyYW0ge051bWJlcn0gbTExIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDEgcG9zaXRpb24gKGluZGV4IDMpXG4gKiBAcmV0dXJucyB7bWF0Mn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXQob3V0LCBtMDAsIG0wMSwgbTEwLCBtMTEpIHtcbiAgb3V0WzBdID0gbTAwO1xuICBvdXRbMV0gPSBtMDE7XG4gIG91dFsyXSA9IG0xMDtcbiAgb3V0WzNdID0gbTExO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFRyYW5zcG9zZSB0aGUgdmFsdWVzIG9mIGEgbWF0MlxuICpcbiAqIEBwYXJhbSB7bWF0Mn0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDJ9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zcG9zZShvdXQsIGEpIHtcbiAgLy8gSWYgd2UgYXJlIHRyYW5zcG9zaW5nIG91cnNlbHZlcyB3ZSBjYW4gc2tpcCBhIGZldyBzdGVwcyBidXQgaGF2ZSB0byBjYWNoZVxuICAvLyBzb21lIHZhbHVlc1xuICBpZiAob3V0ID09PSBhKSB7XG4gICAgbGV0IGExID0gYVsxXTtcbiAgICBvdXRbMV0gPSBhWzJdO1xuICAgIG91dFsyXSA9IGExO1xuICB9IGVsc2Uge1xuICAgIG91dFswXSA9IGFbMF07XG4gICAgb3V0WzFdID0gYVsyXTtcbiAgICBvdXRbMl0gPSBhWzFdO1xuICAgIG91dFszXSA9IGFbM107XG4gIH1cblxuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEludmVydHMgYSBtYXQyXG4gKlxuICogQHBhcmFtIHttYXQyfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0Mn0gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJ0KG91dCwgYSkge1xuICBsZXQgYTAgPSBhWzBdLCBhMSA9IGFbMV0sIGEyID0gYVsyXSwgYTMgPSBhWzNdO1xuXG4gIC8vIENhbGN1bGF0ZSB0aGUgZGV0ZXJtaW5hbnRcbiAgbGV0IGRldCA9IGEwICogYTMgLSBhMiAqIGExO1xuXG4gIGlmICghZGV0KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgZGV0ID0gMS4wIC8gZGV0O1xuXG4gIG91dFswXSA9ICBhMyAqIGRldDtcbiAgb3V0WzFdID0gLWExICogZGV0O1xuICBvdXRbMl0gPSAtYTIgKiBkZXQ7XG4gIG91dFszXSA9ICBhMCAqIGRldDtcblxuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGFkanVnYXRlIG9mIGEgbWF0MlxuICpcbiAqIEBwYXJhbSB7bWF0Mn0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDJ9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkam9pbnQob3V0LCBhKSB7XG4gIC8vIENhY2hpbmcgdGhpcyB2YWx1ZSBpcyBuZXNzZWNhcnkgaWYgb3V0ID09IGFcbiAgbGV0IGEwID0gYVswXTtcbiAgb3V0WzBdID0gIGFbM107XG4gIG91dFsxXSA9IC1hWzFdO1xuICBvdXRbMl0gPSAtYVsyXTtcbiAgb3V0WzNdID0gIGEwO1xuXG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZGV0ZXJtaW5hbnQgb2YgYSBtYXQyXG4gKlxuICogQHBhcmFtIHttYXQyfSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkZXRlcm1pbmFudCBvZiBhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXRlcm1pbmFudChhKSB7XG4gIHJldHVybiBhWzBdICogYVszXSAtIGFbMl0gKiBhWzFdO1xufVxuXG4vKipcbiAqIE11bHRpcGxpZXMgdHdvIG1hdDInc1xuICpcbiAqIEBwYXJhbSB7bWF0Mn0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7bWF0Mn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHttYXQyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5KG91dCwgYSwgYikge1xuICBsZXQgYTAgPSBhWzBdLCBhMSA9IGFbMV0sIGEyID0gYVsyXSwgYTMgPSBhWzNdO1xuICBsZXQgYjAgPSBiWzBdLCBiMSA9IGJbMV0sIGIyID0gYlsyXSwgYjMgPSBiWzNdO1xuICBvdXRbMF0gPSBhMCAqIGIwICsgYTIgKiBiMTtcbiAgb3V0WzFdID0gYTEgKiBiMCArIGEzICogYjE7XG4gIG91dFsyXSA9IGEwICogYjIgKyBhMiAqIGIzO1xuICBvdXRbM10gPSBhMSAqIGIyICsgYTMgKiBiMztcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSb3RhdGVzIGEgbWF0MiBieSB0aGUgZ2l2ZW4gYW5nbGVcbiAqXG4gKiBAcGFyYW0ge21hdDJ9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQyfSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlKG91dCwgYSwgcmFkKSB7XG4gIGxldCBhMCA9IGFbMF0sIGExID0gYVsxXSwgYTIgPSBhWzJdLCBhMyA9IGFbM107XG4gIGxldCBzID0gTWF0aC5zaW4ocmFkKTtcbiAgbGV0IGMgPSBNYXRoLmNvcyhyYWQpO1xuICBvdXRbMF0gPSBhMCAqICBjICsgYTIgKiBzO1xuICBvdXRbMV0gPSBhMSAqICBjICsgYTMgKiBzO1xuICBvdXRbMl0gPSBhMCAqIC1zICsgYTIgKiBjO1xuICBvdXRbM10gPSBhMSAqIC1zICsgYTMgKiBjO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNjYWxlcyB0aGUgbWF0MiBieSB0aGUgZGltZW5zaW9ucyBpbiB0aGUgZ2l2ZW4gdmVjMlxuICpcbiAqIEBwYXJhbSB7bWF0Mn0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDJ9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcbiAqIEBwYXJhbSB7dmVjMn0gdiB0aGUgdmVjMiB0byBzY2FsZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0Mn0gb3V0XG4gKiovXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUob3V0LCBhLCB2KSB7XG4gIGxldCBhMCA9IGFbMF0sIGExID0gYVsxXSwgYTIgPSBhWzJdLCBhMyA9IGFbM107XG4gIGxldCB2MCA9IHZbMF0sIHYxID0gdlsxXTtcbiAgb3V0WzBdID0gYTAgKiB2MDtcbiAgb3V0WzFdID0gYTEgKiB2MDtcbiAgb3V0WzJdID0gYTIgKiB2MTtcbiAgb3V0WzNdID0gYTMgKiB2MTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSBnaXZlbiBhbmdsZVxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDIuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0Mi5yb3RhdGUoZGVzdCwgZGVzdCwgcmFkKTtcbiAqXG4gKiBAcGFyYW0ge21hdDJ9IG91dCBtYXQyIHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVJvdGF0aW9uKG91dCwgcmFkKSB7XG4gIGxldCBzID0gTWF0aC5zaW4ocmFkKTtcbiAgbGV0IGMgPSBNYXRoLmNvcyhyYWQpO1xuICBvdXRbMF0gPSBjO1xuICBvdXRbMV0gPSBzO1xuICBvdXRbMl0gPSAtcztcbiAgb3V0WzNdID0gYztcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSB2ZWN0b3Igc2NhbGluZ1xuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDIuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0Mi5zY2FsZShkZXN0LCBkZXN0LCB2ZWMpO1xuICpcbiAqIEBwYXJhbSB7bWF0Mn0gb3V0IG1hdDIgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7dmVjMn0gdiBTY2FsaW5nIHZlY3RvclxuICogQHJldHVybnMge21hdDJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVNjYWxpbmcob3V0LCB2KSB7XG4gIG91dFswXSA9IHZbMF07XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IHZbMV07XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIG1hdDJcbiAqXG4gKiBAcGFyYW0ge21hdDJ9IGEgbWF0cml4IHRvIHJlcHJlc2VudCBhcyBhIHN0cmluZ1xuICogQHJldHVybnMge1N0cmluZ30gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBtYXRyaXhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cihhKSB7XG4gIHJldHVybiAnbWF0MignICsgYVswXSArICcsICcgKyBhWzFdICsgJywgJyArIGFbMl0gKyAnLCAnICsgYVszXSArICcpJztcbn1cblxuLyoqXG4gKiBSZXR1cm5zIEZyb2Jlbml1cyBub3JtIG9mIGEgbWF0MlxuICpcbiAqIEBwYXJhbSB7bWF0Mn0gYSB0aGUgbWF0cml4IHRvIGNhbGN1bGF0ZSBGcm9iZW5pdXMgbm9ybSBvZlxuICogQHJldHVybnMge051bWJlcn0gRnJvYmVuaXVzIG5vcm1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb2IoYSkge1xuICByZXR1cm4oTWF0aC5zcXJ0KE1hdGgucG93KGFbMF0sIDIpICsgTWF0aC5wb3coYVsxXSwgMikgKyBNYXRoLnBvdyhhWzJdLCAyKSArIE1hdGgucG93KGFbM10sIDIpKSlcbn1cblxuLyoqXG4gKiBSZXR1cm5zIEwsIEQgYW5kIFUgbWF0cmljZXMgKExvd2VyIHRyaWFuZ3VsYXIsIERpYWdvbmFsIGFuZCBVcHBlciB0cmlhbmd1bGFyKSBieSBmYWN0b3JpemluZyB0aGUgaW5wdXQgbWF0cml4XG4gKiBAcGFyYW0ge21hdDJ9IEwgdGhlIGxvd2VyIHRyaWFuZ3VsYXIgbWF0cml4XG4gKiBAcGFyYW0ge21hdDJ9IEQgdGhlIGRpYWdvbmFsIG1hdHJpeFxuICogQHBhcmFtIHttYXQyfSBVIHRoZSB1cHBlciB0cmlhbmd1bGFyIG1hdHJpeFxuICogQHBhcmFtIHttYXQyfSBhIHRoZSBpbnB1dCBtYXRyaXggdG8gZmFjdG9yaXplXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIExEVShMLCBELCBVLCBhKSB7XG4gIExbMl0gPSBhWzJdL2FbMF07XG4gIFVbMF0gPSBhWzBdO1xuICBVWzFdID0gYVsxXTtcbiAgVVszXSA9IGFbM10gLSBMWzJdICogVVsxXTtcbiAgcmV0dXJuIFtMLCBELCBVXTtcbn1cblxuLyoqXG4gKiBBZGRzIHR3byBtYXQyJ3NcbiAqXG4gKiBAcGFyYW0ge21hdDJ9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge21hdDJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7bWF0Mn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGQob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKyBiWzBdO1xuICBvdXRbMV0gPSBhWzFdICsgYlsxXTtcbiAgb3V0WzJdID0gYVsyXSArIGJbMl07XG4gIG91dFszXSA9IGFbM10gKyBiWzNdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFN1YnRyYWN0cyBtYXRyaXggYiBmcm9tIG1hdHJpeCBhXG4gKlxuICogQHBhcmFtIHttYXQyfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0Mn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHttYXQyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge21hdDJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3Qob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gLSBiWzBdO1xuICBvdXRbMV0gPSBhWzFdIC0gYlsxXTtcbiAgb3V0WzJdID0gYVsyXSAtIGJbMl07XG4gIG91dFszXSA9IGFbM10gLSBiWzNdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIG1hdHJpY2VzIGhhdmUgZXhhY3RseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbiAod2hlbiBjb21wYXJlZCB3aXRoID09PSlcbiAqXG4gKiBAcGFyYW0ge21hdDJ9IGEgVGhlIGZpcnN0IG1hdHJpeC5cbiAqIEBwYXJhbSB7bWF0Mn0gYiBUaGUgc2Vjb25kIG1hdHJpeC5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSBtYXRyaWNlcyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4YWN0RXF1YWxzKGEsIGIpIHtcbiAgcmV0dXJuIGFbMF0gPT09IGJbMF0gJiYgYVsxXSA9PT0gYlsxXSAmJiBhWzJdID09PSBiWzJdICYmIGFbM10gPT09IGJbM107XG59XG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgbWF0cmljZXMgaGF2ZSBhcHByb3hpbWF0ZWx5IHRoZSBzYW1lIGVsZW1lbnRzIGluIHRoZSBzYW1lIHBvc2l0aW9uLlxuICpcbiAqIEBwYXJhbSB7bWF0Mn0gYSBUaGUgZmlyc3QgbWF0cml4LlxuICogQHBhcmFtIHttYXQyfSBiIFRoZSBzZWNvbmQgbWF0cml4LlxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIG1hdHJpY2VzIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxzKGEsIGIpIHtcbiAgbGV0IGEwID0gYVswXSwgYTEgPSBhWzFdLCBhMiA9IGFbMl0sIGEzID0gYVszXTtcbiAgbGV0IGIwID0gYlswXSwgYjEgPSBiWzFdLCBiMiA9IGJbMl0sIGIzID0gYlszXTtcbiAgcmV0dXJuIChNYXRoLmFicyhhMCAtIGIwKSA8PSBnbE1hdHJpeC5FUFNJTE9OKk1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTApLCBNYXRoLmFicyhiMCkpICYmXG4gICAgICAgICAgTWF0aC5hYnMoYTEgLSBiMSkgPD0gZ2xNYXRyaXguRVBTSUxPTipNYXRoLm1heCgxLjAsIE1hdGguYWJzKGExKSwgTWF0aC5hYnMoYjEpKSAmJlxuICAgICAgICAgIE1hdGguYWJzKGEyIC0gYjIpIDw9IGdsTWF0cml4LkVQU0lMT04qTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMiksIE1hdGguYWJzKGIyKSkgJiZcbiAgICAgICAgICBNYXRoLmFicyhhMyAtIGIzKSA8PSBnbE1hdHJpeC5FUFNJTE9OKk1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTMpLCBNYXRoLmFicyhiMykpKTtcbn1cblxuLyoqXG4gKiBNdWx0aXBseSBlYWNoIGVsZW1lbnQgb2YgdGhlIG1hdHJpeCBieSBhIHNjYWxhci5cbiAqXG4gKiBAcGFyYW0ge21hdDJ9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQyfSBhIHRoZSBtYXRyaXggdG8gc2NhbGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBiIGFtb3VudCB0byBzY2FsZSB0aGUgbWF0cml4J3MgZWxlbWVudHMgYnlcbiAqIEByZXR1cm5zIHttYXQyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5U2NhbGFyKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICogYjtcbiAgb3V0WzFdID0gYVsxXSAqIGI7XG4gIG91dFsyXSA9IGFbMl0gKiBiO1xuICBvdXRbM10gPSBhWzNdICogYjtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBBZGRzIHR3byBtYXQyJ3MgYWZ0ZXIgbXVsdGlwbHlpbmcgZWFjaCBlbGVtZW50IG9mIHRoZSBzZWNvbmQgb3BlcmFuZCBieSBhIHNjYWxhciB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge21hdDJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHttYXQyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge21hdDJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gc2NhbGUgdGhlIGFtb3VudCB0byBzY2FsZSBiJ3MgZWxlbWVudHMgYnkgYmVmb3JlIGFkZGluZ1xuICogQHJldHVybnMge21hdDJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHlTY2FsYXJBbmRBZGQob3V0LCBhLCBiLCBzY2FsZSkge1xuICBvdXRbMF0gPSBhWzBdICsgKGJbMF0gKiBzY2FsZSk7XG4gIG91dFsxXSA9IGFbMV0gKyAoYlsxXSAqIHNjYWxlKTtcbiAgb3V0WzJdID0gYVsyXSArIChiWzJdICogc2NhbGUpO1xuICBvdXRbM10gPSBhWzNdICsgKGJbM10gKiBzY2FsZSk7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayBtYXQyLm11bHRpcGx5fVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBtdWwgPSBtdWx0aXBseTtcblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIG1hdDIuc3VidHJhY3R9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IHN1YiA9IHN1YnRyYWN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2wtbWF0cml4L3NyYy9nbC1tYXRyaXgvbWF0Mi5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQ29weXJpZ2h0IChjKSAyMDE1LCBCcmFuZG9uIEpvbmVzLCBDb2xpbiBNYWNLZW56aWUgSVYuXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cblRIRSBTT0ZUV0FSRS4gKi9cblxuaW1wb3J0ICogYXMgZ2xNYXRyaXggZnJvbSBcIi4vY29tbW9uXCI7XG5cbi8qKlxuICogMngzIE1hdHJpeFxuICogQG1vZHVsZSBtYXQyZFxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQSBtYXQyZCBjb250YWlucyBzaXggZWxlbWVudHMgZGVmaW5lZCBhczpcbiAqIDxwcmU+XG4gKiBbYSwgYywgdHgsXG4gKiAgYiwgZCwgdHldXG4gKiA8L3ByZT5cbiAqIFRoaXMgaXMgYSBzaG9ydCBmb3JtIGZvciB0aGUgM3gzIG1hdHJpeDpcbiAqIDxwcmU+XG4gKiBbYSwgYywgdHgsXG4gKiAgYiwgZCwgdHksXG4gKiAgMCwgMCwgMV1cbiAqIDwvcHJlPlxuICogVGhlIGxhc3Qgcm93IGlzIGlnbm9yZWQgc28gdGhlIGFycmF5IGlzIHNob3J0ZXIgYW5kIG9wZXJhdGlvbnMgYXJlIGZhc3Rlci5cbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgaWRlbnRpdHkgbWF0MmRcbiAqXG4gKiBAcmV0dXJucyB7bWF0MmR9IGEgbmV3IDJ4MyBtYXRyaXhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgbGV0IG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDYpO1xuICBvdXRbMF0gPSAxO1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAxO1xuICBvdXRbNF0gPSAwO1xuICBvdXRbNV0gPSAwO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgbWF0MmQgaW5pdGlhbGl6ZWQgd2l0aCB2YWx1ZXMgZnJvbSBhbiBleGlzdGluZyBtYXRyaXhcbiAqXG4gKiBAcGFyYW0ge21hdDJkfSBhIG1hdHJpeCB0byBjbG9uZVxuICogQHJldHVybnMge21hdDJkfSBhIG5ldyAyeDMgbWF0cml4XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShhKSB7XG4gIGxldCBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSg2KTtcbiAgb3V0WzBdID0gYVswXTtcbiAgb3V0WzFdID0gYVsxXTtcbiAgb3V0WzJdID0gYVsyXTtcbiAgb3V0WzNdID0gYVszXTtcbiAgb3V0WzRdID0gYVs0XTtcbiAgb3V0WzVdID0gYVs1XTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDb3B5IHRoZSB2YWx1ZXMgZnJvbSBvbmUgbWF0MmQgdG8gYW5vdGhlclxuICpcbiAqIEBwYXJhbSB7bWF0MmR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQyZH0gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDJkfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHkob3V0LCBhKSB7XG4gIG91dFswXSA9IGFbMF07XG4gIG91dFsxXSA9IGFbMV07XG4gIG91dFsyXSA9IGFbMl07XG4gIG91dFszXSA9IGFbM107XG4gIG91dFs0XSA9IGFbNF07XG4gIG91dFs1XSA9IGFbNV07XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU2V0IGEgbWF0MmQgdG8gdGhlIGlkZW50aXR5IG1hdHJpeFxuICpcbiAqIEBwYXJhbSB7bWF0MmR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHJldHVybnMge21hdDJkfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5KG91dCkge1xuICBvdXRbMF0gPSAxO1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAxO1xuICBvdXRbNF0gPSAwO1xuICBvdXRbNV0gPSAwO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBtYXQyZCB3aXRoIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gYSBDb21wb25lbnQgQSAoaW5kZXggMClcbiAqIEBwYXJhbSB7TnVtYmVyfSBiIENvbXBvbmVudCBCIChpbmRleCAxKVxuICogQHBhcmFtIHtOdW1iZXJ9IGMgQ29tcG9uZW50IEMgKGluZGV4IDIpXG4gKiBAcGFyYW0ge051bWJlcn0gZCBDb21wb25lbnQgRCAoaW5kZXggMylcbiAqIEBwYXJhbSB7TnVtYmVyfSB0eCBDb21wb25lbnQgVFggKGluZGV4IDQpXG4gKiBAcGFyYW0ge051bWJlcn0gdHkgQ29tcG9uZW50IFRZIChpbmRleCA1KVxuICogQHJldHVybnMge21hdDJkfSBBIG5ldyBtYXQyZFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVZhbHVlcyhhLCBiLCBjLCBkLCB0eCwgdHkpIHtcbiAgbGV0IG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDYpO1xuICBvdXRbMF0gPSBhO1xuICBvdXRbMV0gPSBiO1xuICBvdXRbMl0gPSBjO1xuICBvdXRbM10gPSBkO1xuICBvdXRbNF0gPSB0eDtcbiAgb3V0WzVdID0gdHk7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU2V0IHRoZSBjb21wb25lbnRzIG9mIGEgbWF0MmQgdG8gdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7bWF0MmR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHtOdW1iZXJ9IGEgQ29tcG9uZW50IEEgKGluZGV4IDApXG4gKiBAcGFyYW0ge051bWJlcn0gYiBDb21wb25lbnQgQiAoaW5kZXggMSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBjIENvbXBvbmVudCBDIChpbmRleCAyKVxuICogQHBhcmFtIHtOdW1iZXJ9IGQgQ29tcG9uZW50IEQgKGluZGV4IDMpXG4gKiBAcGFyYW0ge051bWJlcn0gdHggQ29tcG9uZW50IFRYIChpbmRleCA0KVxuICogQHBhcmFtIHtOdW1iZXJ9IHR5IENvbXBvbmVudCBUWSAoaW5kZXggNSlcbiAqIEByZXR1cm5zIHttYXQyZH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXQob3V0LCBhLCBiLCBjLCBkLCB0eCwgdHkpIHtcbiAgb3V0WzBdID0gYTtcbiAgb3V0WzFdID0gYjtcbiAgb3V0WzJdID0gYztcbiAgb3V0WzNdID0gZDtcbiAgb3V0WzRdID0gdHg7XG4gIG91dFs1XSA9IHR5O1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEludmVydHMgYSBtYXQyZFxuICpcbiAqIEBwYXJhbSB7bWF0MmR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQyZH0gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDJkfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludmVydChvdXQsIGEpIHtcbiAgbGV0IGFhID0gYVswXSwgYWIgPSBhWzFdLCBhYyA9IGFbMl0sIGFkID0gYVszXTtcbiAgbGV0IGF0eCA9IGFbNF0sIGF0eSA9IGFbNV07XG5cbiAgbGV0IGRldCA9IGFhICogYWQgLSBhYiAqIGFjO1xuICBpZighZGV0KXtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBkZXQgPSAxLjAgLyBkZXQ7XG5cbiAgb3V0WzBdID0gYWQgKiBkZXQ7XG4gIG91dFsxXSA9IC1hYiAqIGRldDtcbiAgb3V0WzJdID0gLWFjICogZGV0O1xuICBvdXRbM10gPSBhYSAqIGRldDtcbiAgb3V0WzRdID0gKGFjICogYXR5IC0gYWQgKiBhdHgpICogZGV0O1xuICBvdXRbNV0gPSAoYWIgKiBhdHggLSBhYSAqIGF0eSkgKiBkZXQ7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZGV0ZXJtaW5hbnQgb2YgYSBtYXQyZFxuICpcbiAqIEBwYXJhbSB7bWF0MmR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRldGVybWluYW50IG9mIGFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRldGVybWluYW50KGEpIHtcbiAgcmV0dXJuIGFbMF0gKiBhWzNdIC0gYVsxXSAqIGFbMl07XG59XG5cbi8qKlxuICogTXVsdGlwbGllcyB0d28gbWF0MmQnc1xuICpcbiAqIEBwYXJhbSB7bWF0MmR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQyZH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHttYXQyZH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHttYXQyZH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseShvdXQsIGEsIGIpIHtcbiAgbGV0IGEwID0gYVswXSwgYTEgPSBhWzFdLCBhMiA9IGFbMl0sIGEzID0gYVszXSwgYTQgPSBhWzRdLCBhNSA9IGFbNV07XG4gIGxldCBiMCA9IGJbMF0sIGIxID0gYlsxXSwgYjIgPSBiWzJdLCBiMyA9IGJbM10sIGI0ID0gYls0XSwgYjUgPSBiWzVdO1xuICBvdXRbMF0gPSBhMCAqIGIwICsgYTIgKiBiMTtcbiAgb3V0WzFdID0gYTEgKiBiMCArIGEzICogYjE7XG4gIG91dFsyXSA9IGEwICogYjIgKyBhMiAqIGIzO1xuICBvdXRbM10gPSBhMSAqIGIyICsgYTMgKiBiMztcbiAgb3V0WzRdID0gYTAgKiBiNCArIGEyICogYjUgKyBhNDtcbiAgb3V0WzVdID0gYTEgKiBiNCArIGEzICogYjUgKyBhNTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSb3RhdGVzIGEgbWF0MmQgYnkgdGhlIGdpdmVuIGFuZ2xlXG4gKlxuICogQHBhcmFtIHttYXQyZH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDJkfSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDJkfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZShvdXQsIGEsIHJhZCkge1xuICBsZXQgYTAgPSBhWzBdLCBhMSA9IGFbMV0sIGEyID0gYVsyXSwgYTMgPSBhWzNdLCBhNCA9IGFbNF0sIGE1ID0gYVs1XTtcbiAgbGV0IHMgPSBNYXRoLnNpbihyYWQpO1xuICBsZXQgYyA9IE1hdGguY29zKHJhZCk7XG4gIG91dFswXSA9IGEwICogIGMgKyBhMiAqIHM7XG4gIG91dFsxXSA9IGExICogIGMgKyBhMyAqIHM7XG4gIG91dFsyXSA9IGEwICogLXMgKyBhMiAqIGM7XG4gIG91dFszXSA9IGExICogLXMgKyBhMyAqIGM7XG4gIG91dFs0XSA9IGE0O1xuICBvdXRbNV0gPSBhNTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTY2FsZXMgdGhlIG1hdDJkIGJ5IHRoZSBkaW1lbnNpb25zIGluIHRoZSBnaXZlbiB2ZWMyXG4gKlxuICogQHBhcmFtIHttYXQyZH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDJkfSBhIHRoZSBtYXRyaXggdG8gdHJhbnNsYXRlXG4gKiBAcGFyYW0ge3ZlYzJ9IHYgdGhlIHZlYzIgdG8gc2NhbGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDJkfSBvdXRcbiAqKi9cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZShvdXQsIGEsIHYpIHtcbiAgbGV0IGEwID0gYVswXSwgYTEgPSBhWzFdLCBhMiA9IGFbMl0sIGEzID0gYVszXSwgYTQgPSBhWzRdLCBhNSA9IGFbNV07XG4gIGxldCB2MCA9IHZbMF0sIHYxID0gdlsxXTtcbiAgb3V0WzBdID0gYTAgKiB2MDtcbiAgb3V0WzFdID0gYTEgKiB2MDtcbiAgb3V0WzJdID0gYTIgKiB2MTtcbiAgb3V0WzNdID0gYTMgKiB2MTtcbiAgb3V0WzRdID0gYTQ7XG4gIG91dFs1XSA9IGE1O1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFRyYW5zbGF0ZXMgdGhlIG1hdDJkIGJ5IHRoZSBkaW1lbnNpb25zIGluIHRoZSBnaXZlbiB2ZWMyXG4gKlxuICogQHBhcmFtIHttYXQyZH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDJkfSBhIHRoZSBtYXRyaXggdG8gdHJhbnNsYXRlXG4gKiBAcGFyYW0ge3ZlYzJ9IHYgdGhlIHZlYzIgdG8gdHJhbnNsYXRlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQyZH0gb3V0XG4gKiovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlKG91dCwgYSwgdikge1xuICBsZXQgYTAgPSBhWzBdLCBhMSA9IGFbMV0sIGEyID0gYVsyXSwgYTMgPSBhWzNdLCBhNCA9IGFbNF0sIGE1ID0gYVs1XTtcbiAgbGV0IHYwID0gdlswXSwgdjEgPSB2WzFdO1xuICBvdXRbMF0gPSBhMDtcbiAgb3V0WzFdID0gYTE7XG4gIG91dFsyXSA9IGEyO1xuICBvdXRbM10gPSBhMztcbiAgb3V0WzRdID0gYTAgKiB2MCArIGEyICogdjEgKyBhNDtcbiAgb3V0WzVdID0gYTEgKiB2MCArIGEzICogdjEgKyBhNTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSBnaXZlbiBhbmdsZVxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDJkLmlkZW50aXR5KGRlc3QpO1xuICogICAgIG1hdDJkLnJvdGF0ZShkZXN0LCBkZXN0LCByYWQpO1xuICpcbiAqIEBwYXJhbSB7bWF0MmR9IG91dCBtYXQyZCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQyZH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUm90YXRpb24ob3V0LCByYWQpIHtcbiAgbGV0IHMgPSBNYXRoLnNpbihyYWQpLCBjID0gTWF0aC5jb3MocmFkKTtcbiAgb3V0WzBdID0gYztcbiAgb3V0WzFdID0gcztcbiAgb3V0WzJdID0gLXM7XG4gIG91dFszXSA9IGM7XG4gIG91dFs0XSA9IDA7XG4gIG91dFs1XSA9IDA7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgdmVjdG9yIHNjYWxpbmdcbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxuICpcbiAqICAgICBtYXQyZC5pZGVudGl0eShkZXN0KTtcbiAqICAgICBtYXQyZC5zY2FsZShkZXN0LCBkZXN0LCB2ZWMpO1xuICpcbiAqIEBwYXJhbSB7bWF0MmR9IG91dCBtYXQyZCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHt2ZWMyfSB2IFNjYWxpbmcgdmVjdG9yXG4gKiBAcmV0dXJucyB7bWF0MmR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVNjYWxpbmcob3V0LCB2KSB7XG4gIG91dFswXSA9IHZbMF07XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IHZbMV07XG4gIG91dFs0XSA9IDA7XG4gIG91dFs1XSA9IDA7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgdmVjdG9yIHRyYW5zbGF0aW9uXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcbiAqXG4gKiAgICAgbWF0MmQuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0MmQudHJhbnNsYXRlKGRlc3QsIGRlc3QsIHZlYyk7XG4gKlxuICogQHBhcmFtIHttYXQyZH0gb3V0IG1hdDJkIHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge3ZlYzJ9IHYgVHJhbnNsYXRpb24gdmVjdG9yXG4gKiBAcmV0dXJucyB7bWF0MmR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVRyYW5zbGF0aW9uKG91dCwgdikge1xuICBvdXRbMF0gPSAxO1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAxO1xuICBvdXRbNF0gPSB2WzBdO1xuICBvdXRbNV0gPSB2WzFdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBtYXQyZFxuICpcbiAqIEBwYXJhbSB7bWF0MmR9IGEgbWF0cml4IHRvIHJlcHJlc2VudCBhcyBhIHN0cmluZ1xuICogQHJldHVybnMge1N0cmluZ30gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBtYXRyaXhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cihhKSB7XG4gIHJldHVybiAnbWF0MmQoJyArIGFbMF0gKyAnLCAnICsgYVsxXSArICcsICcgKyBhWzJdICsgJywgJyArXG4gICAgICAgICAgYVszXSArICcsICcgKyBhWzRdICsgJywgJyArIGFbNV0gKyAnKSc7XG59XG5cbi8qKlxuICogUmV0dXJucyBGcm9iZW5pdXMgbm9ybSBvZiBhIG1hdDJkXG4gKlxuICogQHBhcmFtIHttYXQyZH0gYSB0aGUgbWF0cml4IHRvIGNhbGN1bGF0ZSBGcm9iZW5pdXMgbm9ybSBvZlxuICogQHJldHVybnMge051bWJlcn0gRnJvYmVuaXVzIG5vcm1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb2IoYSkge1xuICByZXR1cm4oTWF0aC5zcXJ0KE1hdGgucG93KGFbMF0sIDIpICsgTWF0aC5wb3coYVsxXSwgMikgKyBNYXRoLnBvdyhhWzJdLCAyKSArIE1hdGgucG93KGFbM10sIDIpICsgTWF0aC5wb3coYVs0XSwgMikgKyBNYXRoLnBvdyhhWzVdLCAyKSArIDEpKVxufVxuXG4vKipcbiAqIEFkZHMgdHdvIG1hdDJkJ3NcbiAqXG4gKiBAcGFyYW0ge21hdDJkfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0MmR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7bWF0MmR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7bWF0MmR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICsgYlswXTtcbiAgb3V0WzFdID0gYVsxXSArIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gKyBiWzJdO1xuICBvdXRbM10gPSBhWzNdICsgYlszXTtcbiAgb3V0WzRdID0gYVs0XSArIGJbNF07XG4gIG91dFs1XSA9IGFbNV0gKyBiWzVdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFN1YnRyYWN0cyBtYXRyaXggYiBmcm9tIG1hdHJpeCBhXG4gKlxuICogQHBhcmFtIHttYXQyZH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDJkfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge21hdDJkfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge21hdDJkfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0KG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdIC0gYlswXTtcbiAgb3V0WzFdID0gYVsxXSAtIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gLSBiWzJdO1xuICBvdXRbM10gPSBhWzNdIC0gYlszXTtcbiAgb3V0WzRdID0gYVs0XSAtIGJbNF07XG4gIG91dFs1XSA9IGFbNV0gLSBiWzVdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIE11bHRpcGx5IGVhY2ggZWxlbWVudCBvZiB0aGUgbWF0cml4IGJ5IGEgc2NhbGFyLlxuICpcbiAqIEBwYXJhbSB7bWF0MmR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQyZH0gYSB0aGUgbWF0cml4IHRvIHNjYWxlXG4gKiBAcGFyYW0ge051bWJlcn0gYiBhbW91bnQgdG8gc2NhbGUgdGhlIG1hdHJpeCdzIGVsZW1lbnRzIGJ5XG4gKiBAcmV0dXJucyB7bWF0MmR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHlTY2FsYXIob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKiBiO1xuICBvdXRbMV0gPSBhWzFdICogYjtcbiAgb3V0WzJdID0gYVsyXSAqIGI7XG4gIG91dFszXSA9IGFbM10gKiBiO1xuICBvdXRbNF0gPSBhWzRdICogYjtcbiAgb3V0WzVdID0gYVs1XSAqIGI7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQWRkcyB0d28gbWF0MmQncyBhZnRlciBtdWx0aXBseWluZyBlYWNoIGVsZW1lbnQgb2YgdGhlIHNlY29uZCBvcGVyYW5kIGJ5IGEgc2NhbGFyIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7bWF0MmR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHttYXQyZH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHttYXQyZH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsZSB0aGUgYW1vdW50IHRvIHNjYWxlIGIncyBlbGVtZW50cyBieSBiZWZvcmUgYWRkaW5nXG4gKiBAcmV0dXJucyB7bWF0MmR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHlTY2FsYXJBbmRBZGQob3V0LCBhLCBiLCBzY2FsZSkge1xuICBvdXRbMF0gPSBhWzBdICsgKGJbMF0gKiBzY2FsZSk7XG4gIG91dFsxXSA9IGFbMV0gKyAoYlsxXSAqIHNjYWxlKTtcbiAgb3V0WzJdID0gYVsyXSArIChiWzJdICogc2NhbGUpO1xuICBvdXRbM10gPSBhWzNdICsgKGJbM10gKiBzY2FsZSk7XG4gIG91dFs0XSA9IGFbNF0gKyAoYls0XSAqIHNjYWxlKTtcbiAgb3V0WzVdID0gYVs1XSArIChiWzVdICogc2NhbGUpO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIG1hdHJpY2VzIGhhdmUgZXhhY3RseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbiAod2hlbiBjb21wYXJlZCB3aXRoID09PSlcbiAqXG4gKiBAcGFyYW0ge21hdDJkfSBhIFRoZSBmaXJzdCBtYXRyaXguXG4gKiBAcGFyYW0ge21hdDJkfSBiIFRoZSBzZWNvbmQgbWF0cml4LlxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIG1hdHJpY2VzIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXhhY3RFcXVhbHMoYSwgYikge1xuICByZXR1cm4gYVswXSA9PT0gYlswXSAmJiBhWzFdID09PSBiWzFdICYmIGFbMl0gPT09IGJbMl0gJiYgYVszXSA9PT0gYlszXSAmJiBhWzRdID09PSBiWzRdICYmIGFbNV0gPT09IGJbNV07XG59XG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgbWF0cmljZXMgaGF2ZSBhcHByb3hpbWF0ZWx5IHRoZSBzYW1lIGVsZW1lbnRzIGluIHRoZSBzYW1lIHBvc2l0aW9uLlxuICpcbiAqIEBwYXJhbSB7bWF0MmR9IGEgVGhlIGZpcnN0IG1hdHJpeC5cbiAqIEBwYXJhbSB7bWF0MmR9IGIgVGhlIHNlY29uZCBtYXRyaXguXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgbWF0cmljZXMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHMoYSwgYikge1xuICBsZXQgYTAgPSBhWzBdLCBhMSA9IGFbMV0sIGEyID0gYVsyXSwgYTMgPSBhWzNdLCBhNCA9IGFbNF0sIGE1ID0gYVs1XTtcbiAgbGV0IGIwID0gYlswXSwgYjEgPSBiWzFdLCBiMiA9IGJbMl0sIGIzID0gYlszXSwgYjQgPSBiWzRdLCBiNSA9IGJbNV07XG4gIHJldHVybiAoTWF0aC5hYnMoYTAgLSBiMCkgPD0gZ2xNYXRyaXguRVBTSUxPTipNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEwKSwgTWF0aC5hYnMoYjApKSAmJlxuICAgICAgICAgIE1hdGguYWJzKGExIC0gYjEpIDw9IGdsTWF0cml4LkVQU0lMT04qTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMSksIE1hdGguYWJzKGIxKSkgJiZcbiAgICAgICAgICBNYXRoLmFicyhhMiAtIGIyKSA8PSBnbE1hdHJpeC5FUFNJTE9OKk1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTIpLCBNYXRoLmFicyhiMikpICYmXG4gICAgICAgICAgTWF0aC5hYnMoYTMgLSBiMykgPD0gZ2xNYXRyaXguRVBTSUxPTipNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEzKSwgTWF0aC5hYnMoYjMpKSAmJlxuICAgICAgICAgIE1hdGguYWJzKGE0IC0gYjQpIDw9IGdsTWF0cml4LkVQU0lMT04qTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhNCksIE1hdGguYWJzKGI0KSkgJiZcbiAgICAgICAgICBNYXRoLmFicyhhNSAtIGI1KSA8PSBnbE1hdHJpeC5FUFNJTE9OKk1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTUpLCBNYXRoLmFicyhiNSkpKTtcbn1cblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIG1hdDJkLm11bHRpcGx5fVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBtdWwgPSBtdWx0aXBseTtcblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIG1hdDJkLnN1YnRyYWN0fVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBzdWIgPSBzdWJ0cmFjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dsLW1hdHJpeC9zcmMvZ2wtbWF0cml4L21hdDJkLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEJyYW5kb24gSm9uZXMsIENvbGluIE1hY0tlbnppZSBJVi5cblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5mdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5BVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuVEhFIFNPRlRXQVJFLiAqL1xuXG5pbXBvcnQgKiBhcyBnbE1hdHJpeCBmcm9tIFwiLi9jb21tb25cIjtcblxuLyoqXG4gKiA0eDQgTWF0cml4XG4gKiBAbW9kdWxlIG1hdDRcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgaWRlbnRpdHkgbWF0NFxuICpcbiAqIEByZXR1cm5zIHttYXQ0fSBhIG5ldyA0eDQgbWF0cml4XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gIGxldCBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSgxNik7XG4gIG91dFswXSA9IDE7XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IDA7XG4gIG91dFs1XSA9IDE7XG4gIG91dFs2XSA9IDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IDA7XG4gIG91dFs5XSA9IDA7XG4gIG91dFsxMF0gPSAxO1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IDA7XG4gIG91dFsxM10gPSAwO1xuICBvdXRbMTRdID0gMDtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBtYXQ0IGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgbWF0cml4XG4gKlxuICogQHBhcmFtIHttYXQ0fSBhIG1hdHJpeCB0byBjbG9uZVxuICogQHJldHVybnMge21hdDR9IGEgbmV3IDR4NCBtYXRyaXhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb25lKGEpIHtcbiAgbGV0IG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDE2KTtcbiAgb3V0WzBdID0gYVswXTtcbiAgb3V0WzFdID0gYVsxXTtcbiAgb3V0WzJdID0gYVsyXTtcbiAgb3V0WzNdID0gYVszXTtcbiAgb3V0WzRdID0gYVs0XTtcbiAgb3V0WzVdID0gYVs1XTtcbiAgb3V0WzZdID0gYVs2XTtcbiAgb3V0WzddID0gYVs3XTtcbiAgb3V0WzhdID0gYVs4XTtcbiAgb3V0WzldID0gYVs5XTtcbiAgb3V0WzEwXSA9IGFbMTBdO1xuICBvdXRbMTFdID0gYVsxMV07XG4gIG91dFsxMl0gPSBhWzEyXTtcbiAgb3V0WzEzXSA9IGFbMTNdO1xuICBvdXRbMTRdID0gYVsxNF07XG4gIG91dFsxNV0gPSBhWzE1XTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDb3B5IHRoZSB2YWx1ZXMgZnJvbSBvbmUgbWF0NCB0byBhbm90aGVyXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29weShvdXQsIGEpIHtcbiAgb3V0WzBdID0gYVswXTtcbiAgb3V0WzFdID0gYVsxXTtcbiAgb3V0WzJdID0gYVsyXTtcbiAgb3V0WzNdID0gYVszXTtcbiAgb3V0WzRdID0gYVs0XTtcbiAgb3V0WzVdID0gYVs1XTtcbiAgb3V0WzZdID0gYVs2XTtcbiAgb3V0WzddID0gYVs3XTtcbiAgb3V0WzhdID0gYVs4XTtcbiAgb3V0WzldID0gYVs5XTtcbiAgb3V0WzEwXSA9IGFbMTBdO1xuICBvdXRbMTFdID0gYVsxMV07XG4gIG91dFsxMl0gPSBhWzEyXTtcbiAgb3V0WzEzXSA9IGFbMTNdO1xuICBvdXRbMTRdID0gYVsxNF07XG4gIG91dFsxNV0gPSBhWzE1XTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgbWF0NCB3aXRoIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbTAwIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDAgcG9zaXRpb24gKGluZGV4IDApXG4gKiBAcGFyYW0ge051bWJlcn0gbTAxIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDEgcG9zaXRpb24gKGluZGV4IDEpXG4gKiBAcGFyYW0ge051bWJlcn0gbTAyIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDIgcG9zaXRpb24gKGluZGV4IDIpXG4gKiBAcGFyYW0ge051bWJlcn0gbTAzIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDMgcG9zaXRpb24gKGluZGV4IDMpXG4gKiBAcGFyYW0ge051bWJlcn0gbTEwIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDAgcG9zaXRpb24gKGluZGV4IDQpXG4gKiBAcGFyYW0ge051bWJlcn0gbTExIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDEgcG9zaXRpb24gKGluZGV4IDUpXG4gKiBAcGFyYW0ge051bWJlcn0gbTEyIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDIgcG9zaXRpb24gKGluZGV4IDYpXG4gKiBAcGFyYW0ge051bWJlcn0gbTEzIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDMgcG9zaXRpb24gKGluZGV4IDcpXG4gKiBAcGFyYW0ge051bWJlcn0gbTIwIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDAgcG9zaXRpb24gKGluZGV4IDgpXG4gKiBAcGFyYW0ge051bWJlcn0gbTIxIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDEgcG9zaXRpb24gKGluZGV4IDkpXG4gKiBAcGFyYW0ge051bWJlcn0gbTIyIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDIgcG9zaXRpb24gKGluZGV4IDEwKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMyBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAzIHBvc2l0aW9uIChpbmRleCAxMSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMzAgQ29tcG9uZW50IGluIGNvbHVtbiAzLCByb3cgMCBwb3NpdGlvbiAoaW5kZXggMTIpXG4gKiBAcGFyYW0ge051bWJlcn0gbTMxIENvbXBvbmVudCBpbiBjb2x1bW4gMywgcm93IDEgcG9zaXRpb24gKGluZGV4IDEzKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0zMiBDb21wb25lbnQgaW4gY29sdW1uIDMsIHJvdyAyIHBvc2l0aW9uIChpbmRleCAxNClcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMzMgQ29tcG9uZW50IGluIGNvbHVtbiAzLCByb3cgMyBwb3NpdGlvbiAoaW5kZXggMTUpXG4gKiBAcmV0dXJucyB7bWF0NH0gQSBuZXcgbWF0NFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVZhbHVlcyhtMDAsIG0wMSwgbTAyLCBtMDMsIG0xMCwgbTExLCBtMTIsIG0xMywgbTIwLCBtMjEsIG0yMiwgbTIzLCBtMzAsIG0zMSwgbTMyLCBtMzMpIHtcbiAgbGV0IG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDE2KTtcbiAgb3V0WzBdID0gbTAwO1xuICBvdXRbMV0gPSBtMDE7XG4gIG91dFsyXSA9IG0wMjtcbiAgb3V0WzNdID0gbTAzO1xuICBvdXRbNF0gPSBtMTA7XG4gIG91dFs1XSA9IG0xMTtcbiAgb3V0WzZdID0gbTEyO1xuICBvdXRbN10gPSBtMTM7XG4gIG91dFs4XSA9IG0yMDtcbiAgb3V0WzldID0gbTIxO1xuICBvdXRbMTBdID0gbTIyO1xuICBvdXRbMTFdID0gbTIzO1xuICBvdXRbMTJdID0gbTMwO1xuICBvdXRbMTNdID0gbTMxO1xuICBvdXRbMTRdID0gbTMyO1xuICBvdXRbMTVdID0gbTMzO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIG1hdDQgdG8gdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge051bWJlcn0gbTAwIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDAgcG9zaXRpb24gKGluZGV4IDApXG4gKiBAcGFyYW0ge051bWJlcn0gbTAxIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDEgcG9zaXRpb24gKGluZGV4IDEpXG4gKiBAcGFyYW0ge051bWJlcn0gbTAyIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDIgcG9zaXRpb24gKGluZGV4IDIpXG4gKiBAcGFyYW0ge051bWJlcn0gbTAzIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDMgcG9zaXRpb24gKGluZGV4IDMpXG4gKiBAcGFyYW0ge051bWJlcn0gbTEwIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDAgcG9zaXRpb24gKGluZGV4IDQpXG4gKiBAcGFyYW0ge051bWJlcn0gbTExIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDEgcG9zaXRpb24gKGluZGV4IDUpXG4gKiBAcGFyYW0ge051bWJlcn0gbTEyIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDIgcG9zaXRpb24gKGluZGV4IDYpXG4gKiBAcGFyYW0ge051bWJlcn0gbTEzIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDMgcG9zaXRpb24gKGluZGV4IDcpXG4gKiBAcGFyYW0ge051bWJlcn0gbTIwIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDAgcG9zaXRpb24gKGluZGV4IDgpXG4gKiBAcGFyYW0ge051bWJlcn0gbTIxIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDEgcG9zaXRpb24gKGluZGV4IDkpXG4gKiBAcGFyYW0ge051bWJlcn0gbTIyIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDIgcG9zaXRpb24gKGluZGV4IDEwKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMyBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAzIHBvc2l0aW9uIChpbmRleCAxMSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMzAgQ29tcG9uZW50IGluIGNvbHVtbiAzLCByb3cgMCBwb3NpdGlvbiAoaW5kZXggMTIpXG4gKiBAcGFyYW0ge051bWJlcn0gbTMxIENvbXBvbmVudCBpbiBjb2x1bW4gMywgcm93IDEgcG9zaXRpb24gKGluZGV4IDEzKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0zMiBDb21wb25lbnQgaW4gY29sdW1uIDMsIHJvdyAyIHBvc2l0aW9uIChpbmRleCAxNClcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMzMgQ29tcG9uZW50IGluIGNvbHVtbiAzLCByb3cgMyBwb3NpdGlvbiAoaW5kZXggMTUpXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXQob3V0LCBtMDAsIG0wMSwgbTAyLCBtMDMsIG0xMCwgbTExLCBtMTIsIG0xMywgbTIwLCBtMjEsIG0yMiwgbTIzLCBtMzAsIG0zMSwgbTMyLCBtMzMpIHtcbiAgb3V0WzBdID0gbTAwO1xuICBvdXRbMV0gPSBtMDE7XG4gIG91dFsyXSA9IG0wMjtcbiAgb3V0WzNdID0gbTAzO1xuICBvdXRbNF0gPSBtMTA7XG4gIG91dFs1XSA9IG0xMTtcbiAgb3V0WzZdID0gbTEyO1xuICBvdXRbN10gPSBtMTM7XG4gIG91dFs4XSA9IG0yMDtcbiAgb3V0WzldID0gbTIxO1xuICBvdXRbMTBdID0gbTIyO1xuICBvdXRbMTFdID0gbTIzO1xuICBvdXRbMTJdID0gbTMwO1xuICBvdXRbMTNdID0gbTMxO1xuICBvdXRbMTRdID0gbTMyO1xuICBvdXRbMTVdID0gbTMzO1xuICByZXR1cm4gb3V0O1xufVxuXG5cbi8qKlxuICogU2V0IGEgbWF0NCB0byB0aGUgaWRlbnRpdHkgbWF0cml4XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5KG91dCkge1xuICBvdXRbMF0gPSAxO1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSAwO1xuICBvdXRbNV0gPSAxO1xuICBvdXRbNl0gPSAwO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSAwO1xuICBvdXRbOV0gPSAwO1xuICBvdXRbMTBdID0gMTtcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSAwO1xuICBvdXRbMTNdID0gMDtcbiAgb3V0WzE0XSA9IDA7XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFRyYW5zcG9zZSB0aGUgdmFsdWVzIG9mIGEgbWF0NFxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zcG9zZShvdXQsIGEpIHtcbiAgLy8gSWYgd2UgYXJlIHRyYW5zcG9zaW5nIG91cnNlbHZlcyB3ZSBjYW4gc2tpcCBhIGZldyBzdGVwcyBidXQgaGF2ZSB0byBjYWNoZSBzb21lIHZhbHVlc1xuICBpZiAob3V0ID09PSBhKSB7XG4gICAgbGV0IGEwMSA9IGFbMV0sIGEwMiA9IGFbMl0sIGEwMyA9IGFbM107XG4gICAgbGV0IGExMiA9IGFbNl0sIGExMyA9IGFbN107XG4gICAgbGV0IGEyMyA9IGFbMTFdO1xuXG4gICAgb3V0WzFdID0gYVs0XTtcbiAgICBvdXRbMl0gPSBhWzhdO1xuICAgIG91dFszXSA9IGFbMTJdO1xuICAgIG91dFs0XSA9IGEwMTtcbiAgICBvdXRbNl0gPSBhWzldO1xuICAgIG91dFs3XSA9IGFbMTNdO1xuICAgIG91dFs4XSA9IGEwMjtcbiAgICBvdXRbOV0gPSBhMTI7XG4gICAgb3V0WzExXSA9IGFbMTRdO1xuICAgIG91dFsxMl0gPSBhMDM7XG4gICAgb3V0WzEzXSA9IGExMztcbiAgICBvdXRbMTRdID0gYTIzO1xuICB9IGVsc2Uge1xuICAgIG91dFswXSA9IGFbMF07XG4gICAgb3V0WzFdID0gYVs0XTtcbiAgICBvdXRbMl0gPSBhWzhdO1xuICAgIG91dFszXSA9IGFbMTJdO1xuICAgIG91dFs0XSA9IGFbMV07XG4gICAgb3V0WzVdID0gYVs1XTtcbiAgICBvdXRbNl0gPSBhWzldO1xuICAgIG91dFs3XSA9IGFbMTNdO1xuICAgIG91dFs4XSA9IGFbMl07XG4gICAgb3V0WzldID0gYVs2XTtcbiAgICBvdXRbMTBdID0gYVsxMF07XG4gICAgb3V0WzExXSA9IGFbMTRdO1xuICAgIG91dFsxMl0gPSBhWzNdO1xuICAgIG91dFsxM10gPSBhWzddO1xuICAgIG91dFsxNF0gPSBhWzExXTtcbiAgICBvdXRbMTVdID0gYVsxNV07XG4gIH1cblxuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEludmVydHMgYSBtYXQ0XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJ0KG91dCwgYSkge1xuICBsZXQgYTAwID0gYVswXSwgYTAxID0gYVsxXSwgYTAyID0gYVsyXSwgYTAzID0gYVszXTtcbiAgbGV0IGExMCA9IGFbNF0sIGExMSA9IGFbNV0sIGExMiA9IGFbNl0sIGExMyA9IGFbN107XG4gIGxldCBhMjAgPSBhWzhdLCBhMjEgPSBhWzldLCBhMjIgPSBhWzEwXSwgYTIzID0gYVsxMV07XG4gIGxldCBhMzAgPSBhWzEyXSwgYTMxID0gYVsxM10sIGEzMiA9IGFbMTRdLCBhMzMgPSBhWzE1XTtcblxuICBsZXQgYjAwID0gYTAwICogYTExIC0gYTAxICogYTEwO1xuICBsZXQgYjAxID0gYTAwICogYTEyIC0gYTAyICogYTEwO1xuICBsZXQgYjAyID0gYTAwICogYTEzIC0gYTAzICogYTEwO1xuICBsZXQgYjAzID0gYTAxICogYTEyIC0gYTAyICogYTExO1xuICBsZXQgYjA0ID0gYTAxICogYTEzIC0gYTAzICogYTExO1xuICBsZXQgYjA1ID0gYTAyICogYTEzIC0gYTAzICogYTEyO1xuICBsZXQgYjA2ID0gYTIwICogYTMxIC0gYTIxICogYTMwO1xuICBsZXQgYjA3ID0gYTIwICogYTMyIC0gYTIyICogYTMwO1xuICBsZXQgYjA4ID0gYTIwICogYTMzIC0gYTIzICogYTMwO1xuICBsZXQgYjA5ID0gYTIxICogYTMyIC0gYTIyICogYTMxO1xuICBsZXQgYjEwID0gYTIxICogYTMzIC0gYTIzICogYTMxO1xuICBsZXQgYjExID0gYTIyICogYTMzIC0gYTIzICogYTMyO1xuXG4gIC8vIENhbGN1bGF0ZSB0aGUgZGV0ZXJtaW5hbnRcbiAgbGV0IGRldCA9IGIwMCAqIGIxMSAtIGIwMSAqIGIxMCArIGIwMiAqIGIwOSArIGIwMyAqIGIwOCAtIGIwNCAqIGIwNyArIGIwNSAqIGIwNjtcblxuICBpZiAoIWRldCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGRldCA9IDEuMCAvIGRldDtcblxuICBvdXRbMF0gPSAoYTExICogYjExIC0gYTEyICogYjEwICsgYTEzICogYjA5KSAqIGRldDtcbiAgb3V0WzFdID0gKGEwMiAqIGIxMCAtIGEwMSAqIGIxMSAtIGEwMyAqIGIwOSkgKiBkZXQ7XG4gIG91dFsyXSA9IChhMzEgKiBiMDUgLSBhMzIgKiBiMDQgKyBhMzMgKiBiMDMpICogZGV0O1xuICBvdXRbM10gPSAoYTIyICogYjA0IC0gYTIxICogYjA1IC0gYTIzICogYjAzKSAqIGRldDtcbiAgb3V0WzRdID0gKGExMiAqIGIwOCAtIGExMCAqIGIxMSAtIGExMyAqIGIwNykgKiBkZXQ7XG4gIG91dFs1XSA9IChhMDAgKiBiMTEgLSBhMDIgKiBiMDggKyBhMDMgKiBiMDcpICogZGV0O1xuICBvdXRbNl0gPSAoYTMyICogYjAyIC0gYTMwICogYjA1IC0gYTMzICogYjAxKSAqIGRldDtcbiAgb3V0WzddID0gKGEyMCAqIGIwNSAtIGEyMiAqIGIwMiArIGEyMyAqIGIwMSkgKiBkZXQ7XG4gIG91dFs4XSA9IChhMTAgKiBiMTAgLSBhMTEgKiBiMDggKyBhMTMgKiBiMDYpICogZGV0O1xuICBvdXRbOV0gPSAoYTAxICogYjA4IC0gYTAwICogYjEwIC0gYTAzICogYjA2KSAqIGRldDtcbiAgb3V0WzEwXSA9IChhMzAgKiBiMDQgLSBhMzEgKiBiMDIgKyBhMzMgKiBiMDApICogZGV0O1xuICBvdXRbMTFdID0gKGEyMSAqIGIwMiAtIGEyMCAqIGIwNCAtIGEyMyAqIGIwMCkgKiBkZXQ7XG4gIG91dFsxMl0gPSAoYTExICogYjA3IC0gYTEwICogYjA5IC0gYTEyICogYjA2KSAqIGRldDtcbiAgb3V0WzEzXSA9IChhMDAgKiBiMDkgLSBhMDEgKiBiMDcgKyBhMDIgKiBiMDYpICogZGV0O1xuICBvdXRbMTRdID0gKGEzMSAqIGIwMSAtIGEzMCAqIGIwMyAtIGEzMiAqIGIwMCkgKiBkZXQ7XG4gIG91dFsxNV0gPSAoYTIwICogYjAzIC0gYTIxICogYjAxICsgYTIyICogYjAwKSAqIGRldDtcblxuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGFkanVnYXRlIG9mIGEgbWF0NFxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkam9pbnQob3V0LCBhKSB7XG4gIGxldCBhMDAgPSBhWzBdLCBhMDEgPSBhWzFdLCBhMDIgPSBhWzJdLCBhMDMgPSBhWzNdO1xuICBsZXQgYTEwID0gYVs0XSwgYTExID0gYVs1XSwgYTEyID0gYVs2XSwgYTEzID0gYVs3XTtcbiAgbGV0IGEyMCA9IGFbOF0sIGEyMSA9IGFbOV0sIGEyMiA9IGFbMTBdLCBhMjMgPSBhWzExXTtcbiAgbGV0IGEzMCA9IGFbMTJdLCBhMzEgPSBhWzEzXSwgYTMyID0gYVsxNF0sIGEzMyA9IGFbMTVdO1xuXG4gIG91dFswXSAgPSAgKGExMSAqIChhMjIgKiBhMzMgLSBhMjMgKiBhMzIpIC0gYTIxICogKGExMiAqIGEzMyAtIGExMyAqIGEzMikgKyBhMzEgKiAoYTEyICogYTIzIC0gYTEzICogYTIyKSk7XG4gIG91dFsxXSAgPSAtKGEwMSAqIChhMjIgKiBhMzMgLSBhMjMgKiBhMzIpIC0gYTIxICogKGEwMiAqIGEzMyAtIGEwMyAqIGEzMikgKyBhMzEgKiAoYTAyICogYTIzIC0gYTAzICogYTIyKSk7XG4gIG91dFsyXSAgPSAgKGEwMSAqIChhMTIgKiBhMzMgLSBhMTMgKiBhMzIpIC0gYTExICogKGEwMiAqIGEzMyAtIGEwMyAqIGEzMikgKyBhMzEgKiAoYTAyICogYTEzIC0gYTAzICogYTEyKSk7XG4gIG91dFszXSAgPSAtKGEwMSAqIChhMTIgKiBhMjMgLSBhMTMgKiBhMjIpIC0gYTExICogKGEwMiAqIGEyMyAtIGEwMyAqIGEyMikgKyBhMjEgKiAoYTAyICogYTEzIC0gYTAzICogYTEyKSk7XG4gIG91dFs0XSAgPSAtKGExMCAqIChhMjIgKiBhMzMgLSBhMjMgKiBhMzIpIC0gYTIwICogKGExMiAqIGEzMyAtIGExMyAqIGEzMikgKyBhMzAgKiAoYTEyICogYTIzIC0gYTEzICogYTIyKSk7XG4gIG91dFs1XSAgPSAgKGEwMCAqIChhMjIgKiBhMzMgLSBhMjMgKiBhMzIpIC0gYTIwICogKGEwMiAqIGEzMyAtIGEwMyAqIGEzMikgKyBhMzAgKiAoYTAyICogYTIzIC0gYTAzICogYTIyKSk7XG4gIG91dFs2XSAgPSAtKGEwMCAqIChhMTIgKiBhMzMgLSBhMTMgKiBhMzIpIC0gYTEwICogKGEwMiAqIGEzMyAtIGEwMyAqIGEzMikgKyBhMzAgKiAoYTAyICogYTEzIC0gYTAzICogYTEyKSk7XG4gIG91dFs3XSAgPSAgKGEwMCAqIChhMTIgKiBhMjMgLSBhMTMgKiBhMjIpIC0gYTEwICogKGEwMiAqIGEyMyAtIGEwMyAqIGEyMikgKyBhMjAgKiAoYTAyICogYTEzIC0gYTAzICogYTEyKSk7XG4gIG91dFs4XSAgPSAgKGExMCAqIChhMjEgKiBhMzMgLSBhMjMgKiBhMzEpIC0gYTIwICogKGExMSAqIGEzMyAtIGExMyAqIGEzMSkgKyBhMzAgKiAoYTExICogYTIzIC0gYTEzICogYTIxKSk7XG4gIG91dFs5XSAgPSAtKGEwMCAqIChhMjEgKiBhMzMgLSBhMjMgKiBhMzEpIC0gYTIwICogKGEwMSAqIGEzMyAtIGEwMyAqIGEzMSkgKyBhMzAgKiAoYTAxICogYTIzIC0gYTAzICogYTIxKSk7XG4gIG91dFsxMF0gPSAgKGEwMCAqIChhMTEgKiBhMzMgLSBhMTMgKiBhMzEpIC0gYTEwICogKGEwMSAqIGEzMyAtIGEwMyAqIGEzMSkgKyBhMzAgKiAoYTAxICogYTEzIC0gYTAzICogYTExKSk7XG4gIG91dFsxMV0gPSAtKGEwMCAqIChhMTEgKiBhMjMgLSBhMTMgKiBhMjEpIC0gYTEwICogKGEwMSAqIGEyMyAtIGEwMyAqIGEyMSkgKyBhMjAgKiAoYTAxICogYTEzIC0gYTAzICogYTExKSk7XG4gIG91dFsxMl0gPSAtKGExMCAqIChhMjEgKiBhMzIgLSBhMjIgKiBhMzEpIC0gYTIwICogKGExMSAqIGEzMiAtIGExMiAqIGEzMSkgKyBhMzAgKiAoYTExICogYTIyIC0gYTEyICogYTIxKSk7XG4gIG91dFsxM10gPSAgKGEwMCAqIChhMjEgKiBhMzIgLSBhMjIgKiBhMzEpIC0gYTIwICogKGEwMSAqIGEzMiAtIGEwMiAqIGEzMSkgKyBhMzAgKiAoYTAxICogYTIyIC0gYTAyICogYTIxKSk7XG4gIG91dFsxNF0gPSAtKGEwMCAqIChhMTEgKiBhMzIgLSBhMTIgKiBhMzEpIC0gYTEwICogKGEwMSAqIGEzMiAtIGEwMiAqIGEzMSkgKyBhMzAgKiAoYTAxICogYTEyIC0gYTAyICogYTExKSk7XG4gIG91dFsxNV0gPSAgKGEwMCAqIChhMTEgKiBhMjIgLSBhMTIgKiBhMjEpIC0gYTEwICogKGEwMSAqIGEyMiAtIGEwMiAqIGEyMSkgKyBhMjAgKiAoYTAxICogYTEyIC0gYTAyICogYTExKSk7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZGV0ZXJtaW5hbnQgb2YgYSBtYXQ0XG4gKlxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkZXRlcm1pbmFudCBvZiBhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXRlcm1pbmFudChhKSB7XG4gIGxldCBhMDAgPSBhWzBdLCBhMDEgPSBhWzFdLCBhMDIgPSBhWzJdLCBhMDMgPSBhWzNdO1xuICBsZXQgYTEwID0gYVs0XSwgYTExID0gYVs1XSwgYTEyID0gYVs2XSwgYTEzID0gYVs3XTtcbiAgbGV0IGEyMCA9IGFbOF0sIGEyMSA9IGFbOV0sIGEyMiA9IGFbMTBdLCBhMjMgPSBhWzExXTtcbiAgbGV0IGEzMCA9IGFbMTJdLCBhMzEgPSBhWzEzXSwgYTMyID0gYVsxNF0sIGEzMyA9IGFbMTVdO1xuXG4gIGxldCBiMDAgPSBhMDAgKiBhMTEgLSBhMDEgKiBhMTA7XG4gIGxldCBiMDEgPSBhMDAgKiBhMTIgLSBhMDIgKiBhMTA7XG4gIGxldCBiMDIgPSBhMDAgKiBhMTMgLSBhMDMgKiBhMTA7XG4gIGxldCBiMDMgPSBhMDEgKiBhMTIgLSBhMDIgKiBhMTE7XG4gIGxldCBiMDQgPSBhMDEgKiBhMTMgLSBhMDMgKiBhMTE7XG4gIGxldCBiMDUgPSBhMDIgKiBhMTMgLSBhMDMgKiBhMTI7XG4gIGxldCBiMDYgPSBhMjAgKiBhMzEgLSBhMjEgKiBhMzA7XG4gIGxldCBiMDcgPSBhMjAgKiBhMzIgLSBhMjIgKiBhMzA7XG4gIGxldCBiMDggPSBhMjAgKiBhMzMgLSBhMjMgKiBhMzA7XG4gIGxldCBiMDkgPSBhMjEgKiBhMzIgLSBhMjIgKiBhMzE7XG4gIGxldCBiMTAgPSBhMjEgKiBhMzMgLSBhMjMgKiBhMzE7XG4gIGxldCBiMTEgPSBhMjIgKiBhMzMgLSBhMjMgKiBhMzI7XG5cbiAgLy8gQ2FsY3VsYXRlIHRoZSBkZXRlcm1pbmFudFxuICByZXR1cm4gYjAwICogYjExIC0gYjAxICogYjEwICsgYjAyICogYjA5ICsgYjAzICogYjA4IC0gYjA0ICogYjA3ICsgYjA1ICogYjA2O1xufVxuXG4vKipcbiAqIE11bHRpcGxpZXMgdHdvIG1hdDRzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHttYXQ0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkob3V0LCBhLCBiKSB7XG4gIGxldCBhMDAgPSBhWzBdLCBhMDEgPSBhWzFdLCBhMDIgPSBhWzJdLCBhMDMgPSBhWzNdO1xuICBsZXQgYTEwID0gYVs0XSwgYTExID0gYVs1XSwgYTEyID0gYVs2XSwgYTEzID0gYVs3XTtcbiAgbGV0IGEyMCA9IGFbOF0sIGEyMSA9IGFbOV0sIGEyMiA9IGFbMTBdLCBhMjMgPSBhWzExXTtcbiAgbGV0IGEzMCA9IGFbMTJdLCBhMzEgPSBhWzEzXSwgYTMyID0gYVsxNF0sIGEzMyA9IGFbMTVdO1xuXG4gIC8vIENhY2hlIG9ubHkgdGhlIGN1cnJlbnQgbGluZSBvZiB0aGUgc2Vjb25kIG1hdHJpeFxuICBsZXQgYjAgID0gYlswXSwgYjEgPSBiWzFdLCBiMiA9IGJbMl0sIGIzID0gYlszXTtcbiAgb3V0WzBdID0gYjAqYTAwICsgYjEqYTEwICsgYjIqYTIwICsgYjMqYTMwO1xuICBvdXRbMV0gPSBiMCphMDEgKyBiMSphMTEgKyBiMiphMjEgKyBiMyphMzE7XG4gIG91dFsyXSA9IGIwKmEwMiArIGIxKmExMiArIGIyKmEyMiArIGIzKmEzMjtcbiAgb3V0WzNdID0gYjAqYTAzICsgYjEqYTEzICsgYjIqYTIzICsgYjMqYTMzO1xuXG4gIGIwID0gYls0XTsgYjEgPSBiWzVdOyBiMiA9IGJbNl07IGIzID0gYls3XTtcbiAgb3V0WzRdID0gYjAqYTAwICsgYjEqYTEwICsgYjIqYTIwICsgYjMqYTMwO1xuICBvdXRbNV0gPSBiMCphMDEgKyBiMSphMTEgKyBiMiphMjEgKyBiMyphMzE7XG4gIG91dFs2XSA9IGIwKmEwMiArIGIxKmExMiArIGIyKmEyMiArIGIzKmEzMjtcbiAgb3V0WzddID0gYjAqYTAzICsgYjEqYTEzICsgYjIqYTIzICsgYjMqYTMzO1xuXG4gIGIwID0gYls4XTsgYjEgPSBiWzldOyBiMiA9IGJbMTBdOyBiMyA9IGJbMTFdO1xuICBvdXRbOF0gPSBiMCphMDAgKyBiMSphMTAgKyBiMiphMjAgKyBiMyphMzA7XG4gIG91dFs5XSA9IGIwKmEwMSArIGIxKmExMSArIGIyKmEyMSArIGIzKmEzMTtcbiAgb3V0WzEwXSA9IGIwKmEwMiArIGIxKmExMiArIGIyKmEyMiArIGIzKmEzMjtcbiAgb3V0WzExXSA9IGIwKmEwMyArIGIxKmExMyArIGIyKmEyMyArIGIzKmEzMztcblxuICBiMCA9IGJbMTJdOyBiMSA9IGJbMTNdOyBiMiA9IGJbMTRdOyBiMyA9IGJbMTVdO1xuICBvdXRbMTJdID0gYjAqYTAwICsgYjEqYTEwICsgYjIqYTIwICsgYjMqYTMwO1xuICBvdXRbMTNdID0gYjAqYTAxICsgYjEqYTExICsgYjIqYTIxICsgYjMqYTMxO1xuICBvdXRbMTRdID0gYjAqYTAyICsgYjEqYTEyICsgYjIqYTIyICsgYjMqYTMyO1xuICBvdXRbMTVdID0gYjAqYTAzICsgYjEqYTEzICsgYjIqYTIzICsgYjMqYTMzO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFRyYW5zbGF0ZSBhIG1hdDQgYnkgdGhlIGdpdmVuIHZlY3RvclxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byB0cmFuc2xhdGVcbiAqIEBwYXJhbSB7dmVjM30gdiB2ZWN0b3IgdG8gdHJhbnNsYXRlIGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGUob3V0LCBhLCB2KSB7XG4gIGxldCB4ID0gdlswXSwgeSA9IHZbMV0sIHogPSB2WzJdO1xuICBsZXQgYTAwLCBhMDEsIGEwMiwgYTAzO1xuICBsZXQgYTEwLCBhMTEsIGExMiwgYTEzO1xuICBsZXQgYTIwLCBhMjEsIGEyMiwgYTIzO1xuXG4gIGlmIChhID09PSBvdXQpIHtcbiAgICBvdXRbMTJdID0gYVswXSAqIHggKyBhWzRdICogeSArIGFbOF0gKiB6ICsgYVsxMl07XG4gICAgb3V0WzEzXSA9IGFbMV0gKiB4ICsgYVs1XSAqIHkgKyBhWzldICogeiArIGFbMTNdO1xuICAgIG91dFsxNF0gPSBhWzJdICogeCArIGFbNl0gKiB5ICsgYVsxMF0gKiB6ICsgYVsxNF07XG4gICAgb3V0WzE1XSA9IGFbM10gKiB4ICsgYVs3XSAqIHkgKyBhWzExXSAqIHogKyBhWzE1XTtcbiAgfSBlbHNlIHtcbiAgICBhMDAgPSBhWzBdOyBhMDEgPSBhWzFdOyBhMDIgPSBhWzJdOyBhMDMgPSBhWzNdO1xuICAgIGExMCA9IGFbNF07IGExMSA9IGFbNV07IGExMiA9IGFbNl07IGExMyA9IGFbN107XG4gICAgYTIwID0gYVs4XTsgYTIxID0gYVs5XTsgYTIyID0gYVsxMF07IGEyMyA9IGFbMTFdO1xuXG4gICAgb3V0WzBdID0gYTAwOyBvdXRbMV0gPSBhMDE7IG91dFsyXSA9IGEwMjsgb3V0WzNdID0gYTAzO1xuICAgIG91dFs0XSA9IGExMDsgb3V0WzVdID0gYTExOyBvdXRbNl0gPSBhMTI7IG91dFs3XSA9IGExMztcbiAgICBvdXRbOF0gPSBhMjA7IG91dFs5XSA9IGEyMTsgb3V0WzEwXSA9IGEyMjsgb3V0WzExXSA9IGEyMztcblxuICAgIG91dFsxMl0gPSBhMDAgKiB4ICsgYTEwICogeSArIGEyMCAqIHogKyBhWzEyXTtcbiAgICBvdXRbMTNdID0gYTAxICogeCArIGExMSAqIHkgKyBhMjEgKiB6ICsgYVsxM107XG4gICAgb3V0WzE0XSA9IGEwMiAqIHggKyBhMTIgKiB5ICsgYTIyICogeiArIGFbMTRdO1xuICAgIG91dFsxNV0gPSBhMDMgKiB4ICsgYTEzICogeSArIGEyMyAqIHogKyBhWzE1XTtcbiAgfVxuXG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU2NhbGVzIHRoZSBtYXQ0IGJ5IHRoZSBkaW1lbnNpb25zIGluIHRoZSBnaXZlbiB2ZWMzIG5vdCB1c2luZyB2ZWN0b3JpemF0aW9uXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgbWF0cml4IHRvIHNjYWxlXG4gKiBAcGFyYW0ge3ZlYzN9IHYgdGhlIHZlYzMgdG8gc2NhbGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDR9IG91dFxuICoqL1xuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlKG91dCwgYSwgdikge1xuICBsZXQgeCA9IHZbMF0sIHkgPSB2WzFdLCB6ID0gdlsyXTtcblxuICBvdXRbMF0gPSBhWzBdICogeDtcbiAgb3V0WzFdID0gYVsxXSAqIHg7XG4gIG91dFsyXSA9IGFbMl0gKiB4O1xuICBvdXRbM10gPSBhWzNdICogeDtcbiAgb3V0WzRdID0gYVs0XSAqIHk7XG4gIG91dFs1XSA9IGFbNV0gKiB5O1xuICBvdXRbNl0gPSBhWzZdICogeTtcbiAgb3V0WzddID0gYVs3XSAqIHk7XG4gIG91dFs4XSA9IGFbOF0gKiB6O1xuICBvdXRbOV0gPSBhWzldICogejtcbiAgb3V0WzEwXSA9IGFbMTBdICogejtcbiAgb3V0WzExXSA9IGFbMTFdICogejtcbiAgb3V0WzEyXSA9IGFbMTJdO1xuICBvdXRbMTNdID0gYVsxM107XG4gIG91dFsxNF0gPSBhWzE0XTtcbiAgb3V0WzE1XSA9IGFbMTVdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJvdGF0ZXMgYSBtYXQ0IGJ5IHRoZSBnaXZlbiBhbmdsZSBhcm91bmQgdGhlIGdpdmVuIGF4aXNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHBhcmFtIHt2ZWMzfSBheGlzIHRoZSBheGlzIHRvIHJvdGF0ZSBhcm91bmRcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZShvdXQsIGEsIHJhZCwgYXhpcykge1xuICBsZXQgeCA9IGF4aXNbMF0sIHkgPSBheGlzWzFdLCB6ID0gYXhpc1syXTtcbiAgbGV0IGxlbiA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHopO1xuICBsZXQgcywgYywgdDtcbiAgbGV0IGEwMCwgYTAxLCBhMDIsIGEwMztcbiAgbGV0IGExMCwgYTExLCBhMTIsIGExMztcbiAgbGV0IGEyMCwgYTIxLCBhMjIsIGEyMztcbiAgbGV0IGIwMCwgYjAxLCBiMDI7XG4gIGxldCBiMTAsIGIxMSwgYjEyO1xuICBsZXQgYjIwLCBiMjEsIGIyMjtcblxuICBpZiAoTWF0aC5hYnMobGVuKSA8IGdsTWF0cml4LkVQU0lMT04pIHsgcmV0dXJuIG51bGw7IH1cblxuICBsZW4gPSAxIC8gbGVuO1xuICB4ICo9IGxlbjtcbiAgeSAqPSBsZW47XG4gIHogKj0gbGVuO1xuXG4gIHMgPSBNYXRoLnNpbihyYWQpO1xuICBjID0gTWF0aC5jb3MocmFkKTtcbiAgdCA9IDEgLSBjO1xuXG4gIGEwMCA9IGFbMF07IGEwMSA9IGFbMV07IGEwMiA9IGFbMl07IGEwMyA9IGFbM107XG4gIGExMCA9IGFbNF07IGExMSA9IGFbNV07IGExMiA9IGFbNl07IGExMyA9IGFbN107XG4gIGEyMCA9IGFbOF07IGEyMSA9IGFbOV07IGEyMiA9IGFbMTBdOyBhMjMgPSBhWzExXTtcblxuICAvLyBDb25zdHJ1Y3QgdGhlIGVsZW1lbnRzIG9mIHRoZSByb3RhdGlvbiBtYXRyaXhcbiAgYjAwID0geCAqIHggKiB0ICsgYzsgYjAxID0geSAqIHggKiB0ICsgeiAqIHM7IGIwMiA9IHogKiB4ICogdCAtIHkgKiBzO1xuICBiMTAgPSB4ICogeSAqIHQgLSB6ICogczsgYjExID0geSAqIHkgKiB0ICsgYzsgYjEyID0geiAqIHkgKiB0ICsgeCAqIHM7XG4gIGIyMCA9IHggKiB6ICogdCArIHkgKiBzOyBiMjEgPSB5ICogeiAqIHQgLSB4ICogczsgYjIyID0geiAqIHogKiB0ICsgYztcblxuICAvLyBQZXJmb3JtIHJvdGF0aW9uLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuICBvdXRbMF0gPSBhMDAgKiBiMDAgKyBhMTAgKiBiMDEgKyBhMjAgKiBiMDI7XG4gIG91dFsxXSA9IGEwMSAqIGIwMCArIGExMSAqIGIwMSArIGEyMSAqIGIwMjtcbiAgb3V0WzJdID0gYTAyICogYjAwICsgYTEyICogYjAxICsgYTIyICogYjAyO1xuICBvdXRbM10gPSBhMDMgKiBiMDAgKyBhMTMgKiBiMDEgKyBhMjMgKiBiMDI7XG4gIG91dFs0XSA9IGEwMCAqIGIxMCArIGExMCAqIGIxMSArIGEyMCAqIGIxMjtcbiAgb3V0WzVdID0gYTAxICogYjEwICsgYTExICogYjExICsgYTIxICogYjEyO1xuICBvdXRbNl0gPSBhMDIgKiBiMTAgKyBhMTIgKiBiMTEgKyBhMjIgKiBiMTI7XG4gIG91dFs3XSA9IGEwMyAqIGIxMCArIGExMyAqIGIxMSArIGEyMyAqIGIxMjtcbiAgb3V0WzhdID0gYTAwICogYjIwICsgYTEwICogYjIxICsgYTIwICogYjIyO1xuICBvdXRbOV0gPSBhMDEgKiBiMjAgKyBhMTEgKiBiMjEgKyBhMjEgKiBiMjI7XG4gIG91dFsxMF0gPSBhMDIgKiBiMjAgKyBhMTIgKiBiMjEgKyBhMjIgKiBiMjI7XG4gIG91dFsxMV0gPSBhMDMgKiBiMjAgKyBhMTMgKiBiMjEgKyBhMjMgKiBiMjI7XG5cbiAgaWYgKGEgIT09IG91dCkgeyAvLyBJZiB0aGUgc291cmNlIGFuZCBkZXN0aW5hdGlvbiBkaWZmZXIsIGNvcHkgdGhlIHVuY2hhbmdlZCBsYXN0IHJvd1xuICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICBvdXRbMTNdID0gYVsxM107XG4gICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgfVxuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJvdGF0ZXMgYSBtYXRyaXggYnkgdGhlIGdpdmVuIGFuZ2xlIGFyb3VuZCB0aGUgWCBheGlzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVgob3V0LCBhLCByYWQpIHtcbiAgbGV0IHMgPSBNYXRoLnNpbihyYWQpO1xuICBsZXQgYyA9IE1hdGguY29zKHJhZCk7XG4gIGxldCBhMTAgPSBhWzRdO1xuICBsZXQgYTExID0gYVs1XTtcbiAgbGV0IGExMiA9IGFbNl07XG4gIGxldCBhMTMgPSBhWzddO1xuICBsZXQgYTIwID0gYVs4XTtcbiAgbGV0IGEyMSA9IGFbOV07XG4gIGxldCBhMjIgPSBhWzEwXTtcbiAgbGV0IGEyMyA9IGFbMTFdO1xuXG4gIGlmIChhICE9PSBvdXQpIHsgLy8gSWYgdGhlIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gZGlmZmVyLCBjb3B5IHRoZSB1bmNoYW5nZWQgcm93c1xuICAgIG91dFswXSAgPSBhWzBdO1xuICAgIG91dFsxXSAgPSBhWzFdO1xuICAgIG91dFsyXSAgPSBhWzJdO1xuICAgIG91dFszXSAgPSBhWzNdO1xuICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICBvdXRbMTNdID0gYVsxM107XG4gICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgfVxuXG4gIC8vIFBlcmZvcm0gYXhpcy1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cbiAgb3V0WzRdID0gYTEwICogYyArIGEyMCAqIHM7XG4gIG91dFs1XSA9IGExMSAqIGMgKyBhMjEgKiBzO1xuICBvdXRbNl0gPSBhMTIgKiBjICsgYTIyICogcztcbiAgb3V0WzddID0gYTEzICogYyArIGEyMyAqIHM7XG4gIG91dFs4XSA9IGEyMCAqIGMgLSBhMTAgKiBzO1xuICBvdXRbOV0gPSBhMjEgKiBjIC0gYTExICogcztcbiAgb3V0WzEwXSA9IGEyMiAqIGMgLSBhMTIgKiBzO1xuICBvdXRbMTFdID0gYTIzICogYyAtIGExMyAqIHM7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUm90YXRlcyBhIG1hdHJpeCBieSB0aGUgZ2l2ZW4gYW5nbGUgYXJvdW5kIHRoZSBZIGF4aXNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWShvdXQsIGEsIHJhZCkge1xuICBsZXQgcyA9IE1hdGguc2luKHJhZCk7XG4gIGxldCBjID0gTWF0aC5jb3MocmFkKTtcbiAgbGV0IGEwMCA9IGFbMF07XG4gIGxldCBhMDEgPSBhWzFdO1xuICBsZXQgYTAyID0gYVsyXTtcbiAgbGV0IGEwMyA9IGFbM107XG4gIGxldCBhMjAgPSBhWzhdO1xuICBsZXQgYTIxID0gYVs5XTtcbiAgbGV0IGEyMiA9IGFbMTBdO1xuICBsZXQgYTIzID0gYVsxMV07XG5cbiAgaWYgKGEgIT09IG91dCkgeyAvLyBJZiB0aGUgc291cmNlIGFuZCBkZXN0aW5hdGlvbiBkaWZmZXIsIGNvcHkgdGhlIHVuY2hhbmdlZCByb3dzXG4gICAgb3V0WzRdICA9IGFbNF07XG4gICAgb3V0WzVdICA9IGFbNV07XG4gICAgb3V0WzZdICA9IGFbNl07XG4gICAgb3V0WzddICA9IGFbN107XG4gICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgb3V0WzE1XSA9IGFbMTVdO1xuICB9XG5cbiAgLy8gUGVyZm9ybSBheGlzLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuICBvdXRbMF0gPSBhMDAgKiBjIC0gYTIwICogcztcbiAgb3V0WzFdID0gYTAxICogYyAtIGEyMSAqIHM7XG4gIG91dFsyXSA9IGEwMiAqIGMgLSBhMjIgKiBzO1xuICBvdXRbM10gPSBhMDMgKiBjIC0gYTIzICogcztcbiAgb3V0WzhdID0gYTAwICogcyArIGEyMCAqIGM7XG4gIG91dFs5XSA9IGEwMSAqIHMgKyBhMjEgKiBjO1xuICBvdXRbMTBdID0gYTAyICogcyArIGEyMiAqIGM7XG4gIG91dFsxMV0gPSBhMDMgKiBzICsgYTIzICogYztcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSb3RhdGVzIGEgbWF0cml4IGJ5IHRoZSBnaXZlbiBhbmdsZSBhcm91bmQgdGhlIFogYXhpc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVaKG91dCwgYSwgcmFkKSB7XG4gIGxldCBzID0gTWF0aC5zaW4ocmFkKTtcbiAgbGV0IGMgPSBNYXRoLmNvcyhyYWQpO1xuICBsZXQgYTAwID0gYVswXTtcbiAgbGV0IGEwMSA9IGFbMV07XG4gIGxldCBhMDIgPSBhWzJdO1xuICBsZXQgYTAzID0gYVszXTtcbiAgbGV0IGExMCA9IGFbNF07XG4gIGxldCBhMTEgPSBhWzVdO1xuICBsZXQgYTEyID0gYVs2XTtcbiAgbGV0IGExMyA9IGFbN107XG5cbiAgaWYgKGEgIT09IG91dCkgeyAvLyBJZiB0aGUgc291cmNlIGFuZCBkZXN0aW5hdGlvbiBkaWZmZXIsIGNvcHkgdGhlIHVuY2hhbmdlZCBsYXN0IHJvd1xuICAgIG91dFs4XSAgPSBhWzhdO1xuICAgIG91dFs5XSAgPSBhWzldO1xuICAgIG91dFsxMF0gPSBhWzEwXTtcbiAgICBvdXRbMTFdID0gYVsxMV07XG4gICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgb3V0WzE1XSA9IGFbMTVdO1xuICB9XG5cbiAgLy8gUGVyZm9ybSBheGlzLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuICBvdXRbMF0gPSBhMDAgKiBjICsgYTEwICogcztcbiAgb3V0WzFdID0gYTAxICogYyArIGExMSAqIHM7XG4gIG91dFsyXSA9IGEwMiAqIGMgKyBhMTIgKiBzO1xuICBvdXRbM10gPSBhMDMgKiBjICsgYTEzICogcztcbiAgb3V0WzRdID0gYTEwICogYyAtIGEwMCAqIHM7XG4gIG91dFs1XSA9IGExMSAqIGMgLSBhMDEgKiBzO1xuICBvdXRbNl0gPSBhMTIgKiBjIC0gYTAyICogcztcbiAgb3V0WzddID0gYTEzICogYyAtIGEwMyAqIHM7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgdmVjdG9yIHRyYW5zbGF0aW9uXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcbiAqXG4gKiAgICAgbWF0NC5pZGVudGl0eShkZXN0KTtcbiAqICAgICBtYXQ0LnRyYW5zbGF0ZShkZXN0LCBkZXN0LCB2ZWMpO1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7dmVjM30gdiBUcmFuc2xhdGlvbiB2ZWN0b3JcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21UcmFuc2xhdGlvbihvdXQsIHYpIHtcbiAgb3V0WzBdID0gMTtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gMDtcbiAgb3V0WzVdID0gMTtcbiAgb3V0WzZdID0gMDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gMDtcbiAgb3V0WzldID0gMDtcbiAgb3V0WzEwXSA9IDE7XG4gIG91dFsxMV0gPSAwO1xuICBvdXRbMTJdID0gdlswXTtcbiAgb3V0WzEzXSA9IHZbMV07XG4gIG91dFsxNF0gPSB2WzJdO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSB2ZWN0b3Igc2NhbGluZ1xuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0NC5zY2FsZShkZXN0LCBkZXN0LCB2ZWMpO1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7dmVjM30gdiBTY2FsaW5nIHZlY3RvclxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVNjYWxpbmcob3V0LCB2KSB7XG4gIG91dFswXSA9IHZbMF07XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IDA7XG4gIG91dFs1XSA9IHZbMV07XG4gIG91dFs2XSA9IDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IDA7XG4gIG91dFs5XSA9IDA7XG4gIG91dFsxMF0gPSB2WzJdO1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IDA7XG4gIG91dFsxM10gPSAwO1xuICBvdXRbMTRdID0gMDtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgZ2l2ZW4gYW5nbGUgYXJvdW5kIGEgZ2l2ZW4gYXhpc1xuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0NC5yb3RhdGUoZGVzdCwgZGVzdCwgcmFkLCBheGlzKTtcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHBhcmFtIHt2ZWMzfSBheGlzIHRoZSBheGlzIHRvIHJvdGF0ZSBhcm91bmRcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21Sb3RhdGlvbihvdXQsIHJhZCwgYXhpcykge1xuICBsZXQgeCA9IGF4aXNbMF0sIHkgPSBheGlzWzFdLCB6ID0gYXhpc1syXTtcbiAgbGV0IGxlbiA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHopO1xuICBsZXQgcywgYywgdDtcblxuICBpZiAoTWF0aC5hYnMobGVuKSA8IGdsTWF0cml4LkVQU0lMT04pIHsgcmV0dXJuIG51bGw7IH1cblxuICBsZW4gPSAxIC8gbGVuO1xuICB4ICo9IGxlbjtcbiAgeSAqPSBsZW47XG4gIHogKj0gbGVuO1xuXG4gIHMgPSBNYXRoLnNpbihyYWQpO1xuICBjID0gTWF0aC5jb3MocmFkKTtcbiAgdCA9IDEgLSBjO1xuXG4gIC8vIFBlcmZvcm0gcm90YXRpb24tc3BlY2lmaWMgbWF0cml4IG11bHRpcGxpY2F0aW9uXG4gIG91dFswXSA9IHggKiB4ICogdCArIGM7XG4gIG91dFsxXSA9IHkgKiB4ICogdCArIHogKiBzO1xuICBvdXRbMl0gPSB6ICogeCAqIHQgLSB5ICogcztcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0geCAqIHkgKiB0IC0geiAqIHM7XG4gIG91dFs1XSA9IHkgKiB5ICogdCArIGM7XG4gIG91dFs2XSA9IHogKiB5ICogdCArIHggKiBzO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSB4ICogeiAqIHQgKyB5ICogcztcbiAgb3V0WzldID0geSAqIHogKiB0IC0geCAqIHM7XG4gIG91dFsxMF0gPSB6ICogeiAqIHQgKyBjO1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IDA7XG4gIG91dFsxM10gPSAwO1xuICBvdXRbMTRdID0gMDtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIHRoZSBnaXZlbiBhbmdsZSBhcm91bmQgdGhlIFggYXhpc1xuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0NC5yb3RhdGVYKGRlc3QsIGRlc3QsIHJhZCk7XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21YUm90YXRpb24ob3V0LCByYWQpIHtcbiAgbGV0IHMgPSBNYXRoLnNpbihyYWQpO1xuICBsZXQgYyA9IE1hdGguY29zKHJhZCk7XG5cbiAgLy8gUGVyZm9ybSBheGlzLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuICBvdXRbMF0gID0gMTtcbiAgb3V0WzFdICA9IDA7XG4gIG91dFsyXSAgPSAwO1xuICBvdXRbM10gID0gMDtcbiAgb3V0WzRdID0gMDtcbiAgb3V0WzVdID0gYztcbiAgb3V0WzZdID0gcztcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gMDtcbiAgb3V0WzldID0gLXM7XG4gIG91dFsxMF0gPSBjO1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IDA7XG4gIG91dFsxM10gPSAwO1xuICBvdXRbMTRdID0gMDtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIHRoZSBnaXZlbiBhbmdsZSBhcm91bmQgdGhlIFkgYXhpc1xuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0NC5yb3RhdGVZKGRlc3QsIGRlc3QsIHJhZCk7XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21ZUm90YXRpb24ob3V0LCByYWQpIHtcbiAgbGV0IHMgPSBNYXRoLnNpbihyYWQpO1xuICBsZXQgYyA9IE1hdGguY29zKHJhZCk7XG5cbiAgLy8gUGVyZm9ybSBheGlzLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuICBvdXRbMF0gID0gYztcbiAgb3V0WzFdICA9IDA7XG4gIG91dFsyXSAgPSAtcztcbiAgb3V0WzNdICA9IDA7XG4gIG91dFs0XSA9IDA7XG4gIG91dFs1XSA9IDE7XG4gIG91dFs2XSA9IDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IHM7XG4gIG91dFs5XSA9IDA7XG4gIG91dFsxMF0gPSBjO1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IDA7XG4gIG91dFsxM10gPSAwO1xuICBvdXRbMTRdID0gMDtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIHRoZSBnaXZlbiBhbmdsZSBhcm91bmQgdGhlIFogYXhpc1xuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0NC5yb3RhdGVaKGRlc3QsIGRlc3QsIHJhZCk7XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21aUm90YXRpb24ob3V0LCByYWQpIHtcbiAgbGV0IHMgPSBNYXRoLnNpbihyYWQpO1xuICBsZXQgYyA9IE1hdGguY29zKHJhZCk7XG5cbiAgLy8gUGVyZm9ybSBheGlzLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuICBvdXRbMF0gID0gYztcbiAgb3V0WzFdICA9IHM7XG4gIG91dFsyXSAgPSAwO1xuICBvdXRbM10gID0gMDtcbiAgb3V0WzRdID0gLXM7XG4gIG91dFs1XSA9IGM7XG4gIG91dFs2XSA9IDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IDA7XG4gIG91dFs5XSA9IDA7XG4gIG91dFsxMF0gPSAxO1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IDA7XG4gIG91dFsxM10gPSAwO1xuICBvdXRbMTRdID0gMDtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgcXVhdGVybmlvbiByb3RhdGlvbiBhbmQgdmVjdG9yIHRyYW5zbGF0aW9uXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcbiAqXG4gKiAgICAgbWF0NC5pZGVudGl0eShkZXN0KTtcbiAqICAgICBtYXQ0LnRyYW5zbGF0ZShkZXN0LCB2ZWMpO1xuICogICAgIGxldCBxdWF0TWF0ID0gbWF0NC5jcmVhdGUoKTtcbiAqICAgICBxdWF0NC50b01hdDQocXVhdCwgcXVhdE1hdCk7XG4gKiAgICAgbWF0NC5tdWx0aXBseShkZXN0LCBxdWF0TWF0KTtcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge3F1YXQ0fSBxIFJvdGF0aW9uIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7dmVjM30gdiBUcmFuc2xhdGlvbiB2ZWN0b3JcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21Sb3RhdGlvblRyYW5zbGF0aW9uKG91dCwgcSwgdikge1xuICAvLyBRdWF0ZXJuaW9uIG1hdGhcbiAgbGV0IHggPSBxWzBdLCB5ID0gcVsxXSwgeiA9IHFbMl0sIHcgPSBxWzNdO1xuICBsZXQgeDIgPSB4ICsgeDtcbiAgbGV0IHkyID0geSArIHk7XG4gIGxldCB6MiA9IHogKyB6O1xuXG4gIGxldCB4eCA9IHggKiB4MjtcbiAgbGV0IHh5ID0geCAqIHkyO1xuICBsZXQgeHogPSB4ICogejI7XG4gIGxldCB5eSA9IHkgKiB5MjtcbiAgbGV0IHl6ID0geSAqIHoyO1xuICBsZXQgenogPSB6ICogejI7XG4gIGxldCB3eCA9IHcgKiB4MjtcbiAgbGV0IHd5ID0gdyAqIHkyO1xuICBsZXQgd3ogPSB3ICogejI7XG5cbiAgb3V0WzBdID0gMSAtICh5eSArIHp6KTtcbiAgb3V0WzFdID0geHkgKyB3ejtcbiAgb3V0WzJdID0geHogLSB3eTtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0geHkgLSB3ejtcbiAgb3V0WzVdID0gMSAtICh4eCArIHp6KTtcbiAgb3V0WzZdID0geXogKyB3eDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0geHogKyB3eTtcbiAgb3V0WzldID0geXogLSB3eDtcbiAgb3V0WzEwXSA9IDEgLSAoeHggKyB5eSk7XG4gIG91dFsxMV0gPSAwO1xuICBvdXRbMTJdID0gdlswXTtcbiAgb3V0WzEzXSA9IHZbMV07XG4gIG91dFsxNF0gPSB2WzJdO1xuICBvdXRbMTVdID0gMTtcblxuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHRyYW5zbGF0aW9uIHZlY3RvciBjb21wb25lbnQgb2YgYSB0cmFuc2Zvcm1hdGlvblxuICogIG1hdHJpeC4gSWYgYSBtYXRyaXggaXMgYnVpbHQgd2l0aCBmcm9tUm90YXRpb25UcmFuc2xhdGlvbixcbiAqICB0aGUgcmV0dXJuZWQgdmVjdG9yIHdpbGwgYmUgdGhlIHNhbWUgYXMgdGhlIHRyYW5zbGF0aW9uIHZlY3RvclxuICogIG9yaWdpbmFsbHkgc3VwcGxpZWQuXG4gKiBAcGFyYW0gIHt2ZWMzfSBvdXQgVmVjdG9yIHRvIHJlY2VpdmUgdHJhbnNsYXRpb24gY29tcG9uZW50XG4gKiBAcGFyYW0gIHttYXQ0fSBtYXQgTWF0cml4IHRvIGJlIGRlY29tcG9zZWQgKGlucHV0KVxuICogQHJldHVybiB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUcmFuc2xhdGlvbihvdXQsIG1hdCkge1xuICBvdXRbMF0gPSBtYXRbMTJdO1xuICBvdXRbMV0gPSBtYXRbMTNdO1xuICBvdXRbMl0gPSBtYXRbMTRdO1xuXG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgc2NhbGluZyBmYWN0b3IgY29tcG9uZW50IG9mIGEgdHJhbnNmb3JtYXRpb25cbiAqICBtYXRyaXguIElmIGEgbWF0cml4IGlzIGJ1aWx0IHdpdGggZnJvbVJvdGF0aW9uVHJhbnNsYXRpb25TY2FsZVxuICogIHdpdGggYSBub3JtYWxpemVkIFF1YXRlcm5pb24gcGFyYW10ZXIsIHRoZSByZXR1cm5lZCB2ZWN0b3Igd2lsbCBiZVxuICogIHRoZSBzYW1lIGFzIHRoZSBzY2FsaW5nIHZlY3RvclxuICogIG9yaWdpbmFsbHkgc3VwcGxpZWQuXG4gKiBAcGFyYW0gIHt2ZWMzfSBvdXQgVmVjdG9yIHRvIHJlY2VpdmUgc2NhbGluZyBmYWN0b3IgY29tcG9uZW50XG4gKiBAcGFyYW0gIHttYXQ0fSBtYXQgTWF0cml4IHRvIGJlIGRlY29tcG9zZWQgKGlucHV0KVxuICogQHJldHVybiB7dmVjM30gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2FsaW5nKG91dCwgbWF0KSB7XG4gIGxldCBtMTEgPSBtYXRbMF07XG4gIGxldCBtMTIgPSBtYXRbMV07XG4gIGxldCBtMTMgPSBtYXRbMl07XG4gIGxldCBtMjEgPSBtYXRbNF07XG4gIGxldCBtMjIgPSBtYXRbNV07XG4gIGxldCBtMjMgPSBtYXRbNl07XG4gIGxldCBtMzEgPSBtYXRbOF07XG4gIGxldCBtMzIgPSBtYXRbOV07XG4gIGxldCBtMzMgPSBtYXRbMTBdO1xuXG4gIG91dFswXSA9IE1hdGguc3FydChtMTEgKiBtMTEgKyBtMTIgKiBtMTIgKyBtMTMgKiBtMTMpO1xuICBvdXRbMV0gPSBNYXRoLnNxcnQobTIxICogbTIxICsgbTIyICogbTIyICsgbTIzICogbTIzKTtcbiAgb3V0WzJdID0gTWF0aC5zcXJ0KG0zMSAqIG0zMSArIG0zMiAqIG0zMiArIG0zMyAqIG0zMyk7XG5cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgcXVhdGVybmlvbiByZXByZXNlbnRpbmcgdGhlIHJvdGF0aW9uYWwgY29tcG9uZW50XG4gKiAgb2YgYSB0cmFuc2Zvcm1hdGlvbiBtYXRyaXguIElmIGEgbWF0cml4IGlzIGJ1aWx0IHdpdGhcbiAqICBmcm9tUm90YXRpb25UcmFuc2xhdGlvbiwgdGhlIHJldHVybmVkIHF1YXRlcm5pb24gd2lsbCBiZSB0aGVcbiAqICBzYW1lIGFzIHRoZSBxdWF0ZXJuaW9uIG9yaWdpbmFsbHkgc3VwcGxpZWQuXG4gKiBAcGFyYW0ge3F1YXR9IG91dCBRdWF0ZXJuaW9uIHRvIHJlY2VpdmUgdGhlIHJvdGF0aW9uIGNvbXBvbmVudFxuICogQHBhcmFtIHttYXQ0fSBtYXQgTWF0cml4IHRvIGJlIGRlY29tcG9zZWQgKGlucHV0KVxuICogQHJldHVybiB7cXVhdH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3RhdGlvbihvdXQsIG1hdCkge1xuICAvLyBBbGdvcml0aG0gdGFrZW4gZnJvbSBodHRwOi8vd3d3LmV1Y2xpZGVhbnNwYWNlLmNvbS9tYXRocy9nZW9tZXRyeS9yb3RhdGlvbnMvY29udmVyc2lvbnMvbWF0cml4VG9RdWF0ZXJuaW9uL2luZGV4Lmh0bVxuICBsZXQgdHJhY2UgPSBtYXRbMF0gKyBtYXRbNV0gKyBtYXRbMTBdO1xuICBsZXQgUyA9IDA7XG5cbiAgaWYgKHRyYWNlID4gMCkge1xuICAgIFMgPSBNYXRoLnNxcnQodHJhY2UgKyAxLjApICogMjtcbiAgICBvdXRbM10gPSAwLjI1ICogUztcbiAgICBvdXRbMF0gPSAobWF0WzZdIC0gbWF0WzldKSAvIFM7XG4gICAgb3V0WzFdID0gKG1hdFs4XSAtIG1hdFsyXSkgLyBTO1xuICAgIG91dFsyXSA9IChtYXRbMV0gLSBtYXRbNF0pIC8gUztcbiAgfSBlbHNlIGlmICgobWF0WzBdID4gbWF0WzVdKSYobWF0WzBdID4gbWF0WzEwXSkpIHtcbiAgICBTID0gTWF0aC5zcXJ0KDEuMCArIG1hdFswXSAtIG1hdFs1XSAtIG1hdFsxMF0pICogMjtcbiAgICBvdXRbM10gPSAobWF0WzZdIC0gbWF0WzldKSAvIFM7XG4gICAgb3V0WzBdID0gMC4yNSAqIFM7XG4gICAgb3V0WzFdID0gKG1hdFsxXSArIG1hdFs0XSkgLyBTO1xuICAgIG91dFsyXSA9IChtYXRbOF0gKyBtYXRbMl0pIC8gUztcbiAgfSBlbHNlIGlmIChtYXRbNV0gPiBtYXRbMTBdKSB7XG4gICAgUyA9IE1hdGguc3FydCgxLjAgKyBtYXRbNV0gLSBtYXRbMF0gLSBtYXRbMTBdKSAqIDI7XG4gICAgb3V0WzNdID0gKG1hdFs4XSAtIG1hdFsyXSkgLyBTO1xuICAgIG91dFswXSA9IChtYXRbMV0gKyBtYXRbNF0pIC8gUztcbiAgICBvdXRbMV0gPSAwLjI1ICogUztcbiAgICBvdXRbMl0gPSAobWF0WzZdICsgbWF0WzldKSAvIFM7XG4gIH0gZWxzZSB7XG4gICAgUyA9IE1hdGguc3FydCgxLjAgKyBtYXRbMTBdIC0gbWF0WzBdIC0gbWF0WzVdKSAqIDI7XG4gICAgb3V0WzNdID0gKG1hdFsxXSAtIG1hdFs0XSkgLyBTO1xuICAgIG91dFswXSA9IChtYXRbOF0gKyBtYXRbMl0pIC8gUztcbiAgICBvdXRbMV0gPSAobWF0WzZdICsgbWF0WzldKSAvIFM7XG4gICAgb3V0WzJdID0gMC4yNSAqIFM7XG4gIH1cblxuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIHF1YXRlcm5pb24gcm90YXRpb24sIHZlY3RvciB0cmFuc2xhdGlvbiBhbmQgdmVjdG9yIHNjYWxlXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcbiAqXG4gKiAgICAgbWF0NC5pZGVudGl0eShkZXN0KTtcbiAqICAgICBtYXQ0LnRyYW5zbGF0ZShkZXN0LCB2ZWMpO1xuICogICAgIGxldCBxdWF0TWF0ID0gbWF0NC5jcmVhdGUoKTtcbiAqICAgICBxdWF0NC50b01hdDQocXVhdCwgcXVhdE1hdCk7XG4gKiAgICAgbWF0NC5tdWx0aXBseShkZXN0LCBxdWF0TWF0KTtcbiAqICAgICBtYXQ0LnNjYWxlKGRlc3QsIHNjYWxlKVxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7cXVhdDR9IHEgUm90YXRpb24gcXVhdGVybmlvblxuICogQHBhcmFtIHt2ZWMzfSB2IFRyYW5zbGF0aW9uIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBzIFNjYWxpbmcgdmVjdG9yXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUm90YXRpb25UcmFuc2xhdGlvblNjYWxlKG91dCwgcSwgdiwgcykge1xuICAvLyBRdWF0ZXJuaW9uIG1hdGhcbiAgbGV0IHggPSBxWzBdLCB5ID0gcVsxXSwgeiA9IHFbMl0sIHcgPSBxWzNdO1xuICBsZXQgeDIgPSB4ICsgeDtcbiAgbGV0IHkyID0geSArIHk7XG4gIGxldCB6MiA9IHogKyB6O1xuXG4gIGxldCB4eCA9IHggKiB4MjtcbiAgbGV0IHh5ID0geCAqIHkyO1xuICBsZXQgeHogPSB4ICogejI7XG4gIGxldCB5eSA9IHkgKiB5MjtcbiAgbGV0IHl6ID0geSAqIHoyO1xuICBsZXQgenogPSB6ICogejI7XG4gIGxldCB3eCA9IHcgKiB4MjtcbiAgbGV0IHd5ID0gdyAqIHkyO1xuICBsZXQgd3ogPSB3ICogejI7XG4gIGxldCBzeCA9IHNbMF07XG4gIGxldCBzeSA9IHNbMV07XG4gIGxldCBzeiA9IHNbMl07XG5cbiAgb3V0WzBdID0gKDEgLSAoeXkgKyB6eikpICogc3g7XG4gIG91dFsxXSA9ICh4eSArIHd6KSAqIHN4O1xuICBvdXRbMl0gPSAoeHogLSB3eSkgKiBzeDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gKHh5IC0gd3opICogc3k7XG4gIG91dFs1XSA9ICgxIC0gKHh4ICsgenopKSAqIHN5O1xuICBvdXRbNl0gPSAoeXogKyB3eCkgKiBzeTtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gKHh6ICsgd3kpICogc3o7XG4gIG91dFs5XSA9ICh5eiAtIHd4KSAqIHN6O1xuICBvdXRbMTBdID0gKDEgLSAoeHggKyB5eSkpICogc3o7XG4gIG91dFsxMV0gPSAwO1xuICBvdXRbMTJdID0gdlswXTtcbiAgb3V0WzEzXSA9IHZbMV07XG4gIG91dFsxNF0gPSB2WzJdO1xuICBvdXRbMTVdID0gMTtcblxuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIHF1YXRlcm5pb24gcm90YXRpb24sIHZlY3RvciB0cmFuc2xhdGlvbiBhbmQgdmVjdG9yIHNjYWxlLCByb3RhdGluZyBhbmQgc2NhbGluZyBhcm91bmQgdGhlIGdpdmVuIG9yaWdpblxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0NC50cmFuc2xhdGUoZGVzdCwgdmVjKTtcbiAqICAgICBtYXQ0LnRyYW5zbGF0ZShkZXN0LCBvcmlnaW4pO1xuICogICAgIGxldCBxdWF0TWF0ID0gbWF0NC5jcmVhdGUoKTtcbiAqICAgICBxdWF0NC50b01hdDQocXVhdCwgcXVhdE1hdCk7XG4gKiAgICAgbWF0NC5tdWx0aXBseShkZXN0LCBxdWF0TWF0KTtcbiAqICAgICBtYXQ0LnNjYWxlKGRlc3QsIHNjYWxlKVxuICogICAgIG1hdDQudHJhbnNsYXRlKGRlc3QsIG5lZ2F0aXZlT3JpZ2luKTtcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge3F1YXQ0fSBxIFJvdGF0aW9uIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7dmVjM30gdiBUcmFuc2xhdGlvbiB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gcyBTY2FsaW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBvIFRoZSBvcmlnaW4gdmVjdG9yIGFyb3VuZCB3aGljaCB0byBzY2FsZSBhbmQgcm90YXRlXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUm90YXRpb25UcmFuc2xhdGlvblNjYWxlT3JpZ2luKG91dCwgcSwgdiwgcywgbykge1xuICAvLyBRdWF0ZXJuaW9uIG1hdGhcbiAgbGV0IHggPSBxWzBdLCB5ID0gcVsxXSwgeiA9IHFbMl0sIHcgPSBxWzNdO1xuICBsZXQgeDIgPSB4ICsgeDtcbiAgbGV0IHkyID0geSArIHk7XG4gIGxldCB6MiA9IHogKyB6O1xuXG4gIGxldCB4eCA9IHggKiB4MjtcbiAgbGV0IHh5ID0geCAqIHkyO1xuICBsZXQgeHogPSB4ICogejI7XG4gIGxldCB5eSA9IHkgKiB5MjtcbiAgbGV0IHl6ID0geSAqIHoyO1xuICBsZXQgenogPSB6ICogejI7XG4gIGxldCB3eCA9IHcgKiB4MjtcbiAgbGV0IHd5ID0gdyAqIHkyO1xuICBsZXQgd3ogPSB3ICogejI7XG5cbiAgbGV0IHN4ID0gc1swXTtcbiAgbGV0IHN5ID0gc1sxXTtcbiAgbGV0IHN6ID0gc1syXTtcblxuICBsZXQgb3ggPSBvWzBdO1xuICBsZXQgb3kgPSBvWzFdO1xuICBsZXQgb3ogPSBvWzJdO1xuXG4gIG91dFswXSA9ICgxIC0gKHl5ICsgenopKSAqIHN4O1xuICBvdXRbMV0gPSAoeHkgKyB3eikgKiBzeDtcbiAgb3V0WzJdID0gKHh6IC0gd3kpICogc3g7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9ICh4eSAtIHd6KSAqIHN5O1xuICBvdXRbNV0gPSAoMSAtICh4eCArIHp6KSkgKiBzeTtcbiAgb3V0WzZdID0gKHl6ICsgd3gpICogc3k7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9ICh4eiArIHd5KSAqIHN6O1xuICBvdXRbOV0gPSAoeXogLSB3eCkgKiBzejtcbiAgb3V0WzEwXSA9ICgxIC0gKHh4ICsgeXkpKSAqIHN6O1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IHZbMF0gKyBveCAtIChvdXRbMF0gKiBveCArIG91dFs0XSAqIG95ICsgb3V0WzhdICogb3opO1xuICBvdXRbMTNdID0gdlsxXSArIG95IC0gKG91dFsxXSAqIG94ICsgb3V0WzVdICogb3kgKyBvdXRbOV0gKiBveik7XG4gIG91dFsxNF0gPSB2WzJdICsgb3ogLSAob3V0WzJdICogb3ggKyBvdXRbNl0gKiBveSArIG91dFsxMF0gKiBveik7XG4gIG91dFsxNV0gPSAxO1xuXG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyBhIDR4NCBtYXRyaXggZnJvbSB0aGUgZ2l2ZW4gcXVhdGVybmlvblxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7cXVhdH0gcSBRdWF0ZXJuaW9uIHRvIGNyZWF0ZSBtYXRyaXggZnJvbVxuICpcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21RdWF0KG91dCwgcSkge1xuICBsZXQgeCA9IHFbMF0sIHkgPSBxWzFdLCB6ID0gcVsyXSwgdyA9IHFbM107XG4gIGxldCB4MiA9IHggKyB4O1xuICBsZXQgeTIgPSB5ICsgeTtcbiAgbGV0IHoyID0geiArIHo7XG5cbiAgbGV0IHh4ID0geCAqIHgyO1xuICBsZXQgeXggPSB5ICogeDI7XG4gIGxldCB5eSA9IHkgKiB5MjtcbiAgbGV0IHp4ID0geiAqIHgyO1xuICBsZXQgenkgPSB6ICogeTI7XG4gIGxldCB6eiA9IHogKiB6MjtcbiAgbGV0IHd4ID0gdyAqIHgyO1xuICBsZXQgd3kgPSB3ICogeTI7XG4gIGxldCB3eiA9IHcgKiB6MjtcblxuICBvdXRbMF0gPSAxIC0geXkgLSB6ejtcbiAgb3V0WzFdID0geXggKyB3ejtcbiAgb3V0WzJdID0genggLSB3eTtcbiAgb3V0WzNdID0gMDtcblxuICBvdXRbNF0gPSB5eCAtIHd6O1xuICBvdXRbNV0gPSAxIC0geHggLSB6ejtcbiAgb3V0WzZdID0genkgKyB3eDtcbiAgb3V0WzddID0gMDtcblxuICBvdXRbOF0gPSB6eCArIHd5O1xuICBvdXRbOV0gPSB6eSAtIHd4O1xuICBvdXRbMTBdID0gMSAtIHh4IC0geXk7XG4gIG91dFsxMV0gPSAwO1xuXG4gIG91dFsxMl0gPSAwO1xuICBvdXRbMTNdID0gMDtcbiAgb3V0WzE0XSA9IDA7XG4gIG91dFsxNV0gPSAxO1xuXG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgZnJ1c3R1bSBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gYm91bmRzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xuICogQHBhcmFtIHtOdW1iZXJ9IGxlZnQgTGVmdCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtOdW1iZXJ9IHJpZ2h0IFJpZ2h0IGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge051bWJlcn0gYm90dG9tIEJvdHRvbSBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtOdW1iZXJ9IHRvcCBUb3AgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7TnVtYmVyfSBuZWFyIE5lYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7TnVtYmVyfSBmYXIgRmFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcnVzdHVtKG91dCwgbGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyLCBmYXIpIHtcbiAgbGV0IHJsID0gMSAvIChyaWdodCAtIGxlZnQpO1xuICBsZXQgdGIgPSAxIC8gKHRvcCAtIGJvdHRvbSk7XG4gIGxldCBuZiA9IDEgLyAobmVhciAtIGZhcik7XG4gIG91dFswXSA9IChuZWFyICogMikgKiBybDtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gMDtcbiAgb3V0WzVdID0gKG5lYXIgKiAyKSAqIHRiO1xuICBvdXRbNl0gPSAwO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSAocmlnaHQgKyBsZWZ0KSAqIHJsO1xuICBvdXRbOV0gPSAodG9wICsgYm90dG9tKSAqIHRiO1xuICBvdXRbMTBdID0gKGZhciArIG5lYXIpICogbmY7XG4gIG91dFsxMV0gPSAtMTtcbiAgb3V0WzEyXSA9IDA7XG4gIG91dFsxM10gPSAwO1xuICBvdXRbMTRdID0gKGZhciAqIG5lYXIgKiAyKSAqIG5mO1xuICBvdXRbMTVdID0gMDtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBwZXJzcGVjdGl2ZSBwcm9qZWN0aW9uIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBib3VuZHNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXG4gKiBAcGFyYW0ge251bWJlcn0gZm92eSBWZXJ0aWNhbCBmaWVsZCBvZiB2aWV3IGluIHJhZGlhbnNcbiAqIEBwYXJhbSB7bnVtYmVyfSBhc3BlY3QgQXNwZWN0IHJhdGlvLiB0eXBpY2FsbHkgdmlld3BvcnQgd2lkdGgvaGVpZ2h0XG4gKiBAcGFyYW0ge251bWJlcn0gbmVhciBOZWFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gZmFyIEZhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcGVyc3BlY3RpdmUob3V0LCBmb3Z5LCBhc3BlY3QsIG5lYXIsIGZhcikge1xuICBsZXQgZiA9IDEuMCAvIE1hdGgudGFuKGZvdnkgLyAyKTtcbiAgbGV0IG5mID0gMSAvIChuZWFyIC0gZmFyKTtcbiAgb3V0WzBdID0gZiAvIGFzcGVjdDtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gMDtcbiAgb3V0WzVdID0gZjtcbiAgb3V0WzZdID0gMDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gMDtcbiAgb3V0WzldID0gMDtcbiAgb3V0WzEwXSA9IChmYXIgKyBuZWFyKSAqIG5mO1xuICBvdXRbMTFdID0gLTE7XG4gIG91dFsxMl0gPSAwO1xuICBvdXRbMTNdID0gMDtcbiAgb3V0WzE0XSA9ICgyICogZmFyICogbmVhcikgKiBuZjtcbiAgb3V0WzE1XSA9IDA7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgcGVyc3BlY3RpdmUgcHJvamVjdGlvbiBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gZmllbGQgb2Ygdmlldy5cbiAqIFRoaXMgaXMgcHJpbWFyaWx5IHVzZWZ1bCBmb3IgZ2VuZXJhdGluZyBwcm9qZWN0aW9uIG1hdHJpY2VzIHRvIGJlIHVzZWRcbiAqIHdpdGggdGhlIHN0aWxsIGV4cGVyaWVtZW50YWwgV2ViVlIgQVBJLlxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cbiAqIEBwYXJhbSB7T2JqZWN0fSBmb3YgT2JqZWN0IGNvbnRhaW5pbmcgdGhlIGZvbGxvd2luZyB2YWx1ZXM6IHVwRGVncmVlcywgZG93bkRlZ3JlZXMsIGxlZnREZWdyZWVzLCByaWdodERlZ3JlZXNcbiAqIEBwYXJhbSB7bnVtYmVyfSBuZWFyIE5lYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSBmYXIgRmFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwZXJzcGVjdGl2ZUZyb21GaWVsZE9mVmlldyhvdXQsIGZvdiwgbmVhciwgZmFyKSB7XG4gIGxldCB1cFRhbiA9IE1hdGgudGFuKGZvdi51cERlZ3JlZXMgKiBNYXRoLlBJLzE4MC4wKTtcbiAgbGV0IGRvd25UYW4gPSBNYXRoLnRhbihmb3YuZG93bkRlZ3JlZXMgKiBNYXRoLlBJLzE4MC4wKTtcbiAgbGV0IGxlZnRUYW4gPSBNYXRoLnRhbihmb3YubGVmdERlZ3JlZXMgKiBNYXRoLlBJLzE4MC4wKTtcbiAgbGV0IHJpZ2h0VGFuID0gTWF0aC50YW4oZm92LnJpZ2h0RGVncmVlcyAqIE1hdGguUEkvMTgwLjApO1xuICBsZXQgeFNjYWxlID0gMi4wIC8gKGxlZnRUYW4gKyByaWdodFRhbik7XG4gIGxldCB5U2NhbGUgPSAyLjAgLyAodXBUYW4gKyBkb3duVGFuKTtcblxuICBvdXRbMF0gPSB4U2NhbGU7XG4gIG91dFsxXSA9IDAuMDtcbiAgb3V0WzJdID0gMC4wO1xuICBvdXRbM10gPSAwLjA7XG4gIG91dFs0XSA9IDAuMDtcbiAgb3V0WzVdID0geVNjYWxlO1xuICBvdXRbNl0gPSAwLjA7XG4gIG91dFs3XSA9IDAuMDtcbiAgb3V0WzhdID0gLSgobGVmdFRhbiAtIHJpZ2h0VGFuKSAqIHhTY2FsZSAqIDAuNSk7XG4gIG91dFs5XSA9ICgodXBUYW4gLSBkb3duVGFuKSAqIHlTY2FsZSAqIDAuNSk7XG4gIG91dFsxMF0gPSBmYXIgLyAobmVhciAtIGZhcik7XG4gIG91dFsxMV0gPSAtMS4wO1xuICBvdXRbMTJdID0gMC4wO1xuICBvdXRbMTNdID0gMC4wO1xuICBvdXRbMTRdID0gKGZhciAqIG5lYXIpIC8gKG5lYXIgLSBmYXIpO1xuICBvdXRbMTVdID0gMC4wO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIG9ydGhvZ29uYWwgcHJvamVjdGlvbiBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gYm91bmRzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xuICogQHBhcmFtIHtudW1iZXJ9IGxlZnQgTGVmdCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IHJpZ2h0IFJpZ2h0IGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gYm90dG9tIEJvdHRvbSBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IHRvcCBUb3AgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSBuZWFyIE5lYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSBmYXIgRmFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvcnRobyhvdXQsIGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhciwgZmFyKSB7XG4gIGxldCBsciA9IDEgLyAobGVmdCAtIHJpZ2h0KTtcbiAgbGV0IGJ0ID0gMSAvIChib3R0b20gLSB0b3ApO1xuICBsZXQgbmYgPSAxIC8gKG5lYXIgLSBmYXIpO1xuICBvdXRbMF0gPSAtMiAqIGxyO1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSAwO1xuICBvdXRbNV0gPSAtMiAqIGJ0O1xuICBvdXRbNl0gPSAwO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSAwO1xuICBvdXRbOV0gPSAwO1xuICBvdXRbMTBdID0gMiAqIG5mO1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IChsZWZ0ICsgcmlnaHQpICogbHI7XG4gIG91dFsxM10gPSAodG9wICsgYm90dG9tKSAqIGJ0O1xuICBvdXRbMTRdID0gKGZhciArIG5lYXIpICogbmY7XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIGxvb2stYXQgbWF0cml4IHdpdGggdGhlIGdpdmVuIGV5ZSBwb3NpdGlvbiwgZm9jYWwgcG9pbnQsIGFuZCB1cCBheGlzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xuICogQHBhcmFtIHt2ZWMzfSBleWUgUG9zaXRpb24gb2YgdGhlIHZpZXdlclxuICogQHBhcmFtIHt2ZWMzfSBjZW50ZXIgUG9pbnQgdGhlIHZpZXdlciBpcyBsb29raW5nIGF0XG4gKiBAcGFyYW0ge3ZlYzN9IHVwIHZlYzMgcG9pbnRpbmcgdXBcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvb2tBdChvdXQsIGV5ZSwgY2VudGVyLCB1cCkge1xuICBsZXQgeDAsIHgxLCB4MiwgeTAsIHkxLCB5MiwgejAsIHoxLCB6MiwgbGVuO1xuICBsZXQgZXlleCA9IGV5ZVswXTtcbiAgbGV0IGV5ZXkgPSBleWVbMV07XG4gIGxldCBleWV6ID0gZXllWzJdO1xuICBsZXQgdXB4ID0gdXBbMF07XG4gIGxldCB1cHkgPSB1cFsxXTtcbiAgbGV0IHVweiA9IHVwWzJdO1xuICBsZXQgY2VudGVyeCA9IGNlbnRlclswXTtcbiAgbGV0IGNlbnRlcnkgPSBjZW50ZXJbMV07XG4gIGxldCBjZW50ZXJ6ID0gY2VudGVyWzJdO1xuXG4gIGlmIChNYXRoLmFicyhleWV4IC0gY2VudGVyeCkgPCBnbE1hdHJpeC5FUFNJTE9OICYmXG4gICAgICBNYXRoLmFicyhleWV5IC0gY2VudGVyeSkgPCBnbE1hdHJpeC5FUFNJTE9OICYmXG4gICAgICBNYXRoLmFicyhleWV6IC0gY2VudGVyeikgPCBnbE1hdHJpeC5FUFNJTE9OKSB7XG4gICAgcmV0dXJuIG1hdDQuaWRlbnRpdHkob3V0KTtcbiAgfVxuXG4gIHowID0gZXlleCAtIGNlbnRlcng7XG4gIHoxID0gZXlleSAtIGNlbnRlcnk7XG4gIHoyID0gZXlleiAtIGNlbnRlcno7XG5cbiAgbGVuID0gMSAvIE1hdGguc3FydCh6MCAqIHowICsgejEgKiB6MSArIHoyICogejIpO1xuICB6MCAqPSBsZW47XG4gIHoxICo9IGxlbjtcbiAgejIgKj0gbGVuO1xuXG4gIHgwID0gdXB5ICogejIgLSB1cHogKiB6MTtcbiAgeDEgPSB1cHogKiB6MCAtIHVweCAqIHoyO1xuICB4MiA9IHVweCAqIHoxIC0gdXB5ICogejA7XG4gIGxlbiA9IE1hdGguc3FydCh4MCAqIHgwICsgeDEgKiB4MSArIHgyICogeDIpO1xuICBpZiAoIWxlbikge1xuICAgIHgwID0gMDtcbiAgICB4MSA9IDA7XG4gICAgeDIgPSAwO1xuICB9IGVsc2Uge1xuICAgIGxlbiA9IDEgLyBsZW47XG4gICAgeDAgKj0gbGVuO1xuICAgIHgxICo9IGxlbjtcbiAgICB4MiAqPSBsZW47XG4gIH1cblxuICB5MCA9IHoxICogeDIgLSB6MiAqIHgxO1xuICB5MSA9IHoyICogeDAgLSB6MCAqIHgyO1xuICB5MiA9IHowICogeDEgLSB6MSAqIHgwO1xuXG4gIGxlbiA9IE1hdGguc3FydCh5MCAqIHkwICsgeTEgKiB5MSArIHkyICogeTIpO1xuICBpZiAoIWxlbikge1xuICAgIHkwID0gMDtcbiAgICB5MSA9IDA7XG4gICAgeTIgPSAwO1xuICB9IGVsc2Uge1xuICAgIGxlbiA9IDEgLyBsZW47XG4gICAgeTAgKj0gbGVuO1xuICAgIHkxICo9IGxlbjtcbiAgICB5MiAqPSBsZW47XG4gIH1cblxuICBvdXRbMF0gPSB4MDtcbiAgb3V0WzFdID0geTA7XG4gIG91dFsyXSA9IHowO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSB4MTtcbiAgb3V0WzVdID0geTE7XG4gIG91dFs2XSA9IHoxO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSB4MjtcbiAgb3V0WzldID0geTI7XG4gIG91dFsxMF0gPSB6MjtcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSAtKHgwICogZXlleCArIHgxICogZXlleSArIHgyICogZXlleik7XG4gIG91dFsxM10gPSAtKHkwICogZXlleCArIHkxICogZXlleSArIHkyICogZXlleik7XG4gIG91dFsxNF0gPSAtKHowICogZXlleCArIHoxICogZXlleSArIHoyICogZXlleik7XG4gIG91dFsxNV0gPSAxO1xuXG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgbWF0cml4IHRoYXQgbWFrZXMgc29tZXRoaW5nIGxvb2sgYXQgc29tZXRoaW5nIGVsc2UuXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xuICogQHBhcmFtIHt2ZWMzfSBleWUgUG9zaXRpb24gb2YgdGhlIHZpZXdlclxuICogQHBhcmFtIHt2ZWMzfSBjZW50ZXIgUG9pbnQgdGhlIHZpZXdlciBpcyBsb29raW5nIGF0XG4gKiBAcGFyYW0ge3ZlYzN9IHVwIHZlYzMgcG9pbnRpbmcgdXBcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRhcmdldFRvKG91dCwgZXllLCB0YXJnZXQsIHVwKSB7XG4gIGxldCBleWV4ID0gZXllWzBdLFxuICAgICAgZXlleSA9IGV5ZVsxXSxcbiAgICAgIGV5ZXogPSBleWVbMl0sXG4gICAgICB1cHggPSB1cFswXSxcbiAgICAgIHVweSA9IHVwWzFdLFxuICAgICAgdXB6ID0gdXBbMl07XG5cbiAgbGV0IHowID0gZXlleCAtIHRhcmdldFswXSxcbiAgICAgIHoxID0gZXlleSAtIHRhcmdldFsxXSxcbiAgICAgIHoyID0gZXlleiAtIHRhcmdldFsyXTtcblxuICBsZXQgbGVuID0gejAqejAgKyB6MSp6MSArIHoyKnoyO1xuICBpZiAobGVuID4gMCkge1xuICAgIGxlbiA9IDEgLyBNYXRoLnNxcnQobGVuKTtcbiAgICB6MCAqPSBsZW47XG4gICAgejEgKj0gbGVuO1xuICAgIHoyICo9IGxlbjtcbiAgfVxuXG4gIGxldCB4MCA9IHVweSAqIHoyIC0gdXB6ICogejEsXG4gICAgICB4MSA9IHVweiAqIHowIC0gdXB4ICogejIsXG4gICAgICB4MiA9IHVweCAqIHoxIC0gdXB5ICogejA7XG5cbiAgb3V0WzBdID0geDA7XG4gIG91dFsxXSA9IHgxO1xuICBvdXRbMl0gPSB4MjtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gejEgKiB4MiAtIHoyICogeDE7XG4gIG91dFs1XSA9IHoyICogeDAgLSB6MCAqIHgyO1xuICBvdXRbNl0gPSB6MCAqIHgxIC0gejEgKiB4MDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gejA7XG4gIG91dFs5XSA9IHoxO1xuICBvdXRbMTBdID0gejI7XG4gIG91dFsxMV0gPSAwO1xuICBvdXRbMTJdID0gZXlleDtcbiAgb3V0WzEzXSA9IGV5ZXk7XG4gIG91dFsxNF0gPSBleWV6O1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn07XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIG1hdDRcbiAqXG4gKiBAcGFyYW0ge21hdDR9IGEgbWF0cml4IHRvIHJlcHJlc2VudCBhcyBhIHN0cmluZ1xuICogQHJldHVybnMge1N0cmluZ30gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBtYXRyaXhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cihhKSB7XG4gIHJldHVybiAnbWF0NCgnICsgYVswXSArICcsICcgKyBhWzFdICsgJywgJyArIGFbMl0gKyAnLCAnICsgYVszXSArICcsICcgK1xuICAgICAgICAgIGFbNF0gKyAnLCAnICsgYVs1XSArICcsICcgKyBhWzZdICsgJywgJyArIGFbN10gKyAnLCAnICtcbiAgICAgICAgICBhWzhdICsgJywgJyArIGFbOV0gKyAnLCAnICsgYVsxMF0gKyAnLCAnICsgYVsxMV0gKyAnLCAnICtcbiAgICAgICAgICBhWzEyXSArICcsICcgKyBhWzEzXSArICcsICcgKyBhWzE0XSArICcsICcgKyBhWzE1XSArICcpJztcbn1cblxuLyoqXG4gKiBSZXR1cm5zIEZyb2Jlbml1cyBub3JtIG9mIGEgbWF0NFxuICpcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgbWF0cml4IHRvIGNhbGN1bGF0ZSBGcm9iZW5pdXMgbm9ybSBvZlxuICogQHJldHVybnMge051bWJlcn0gRnJvYmVuaXVzIG5vcm1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb2IoYSkge1xuICByZXR1cm4oTWF0aC5zcXJ0KE1hdGgucG93KGFbMF0sIDIpICsgTWF0aC5wb3coYVsxXSwgMikgKyBNYXRoLnBvdyhhWzJdLCAyKSArIE1hdGgucG93KGFbM10sIDIpICsgTWF0aC5wb3coYVs0XSwgMikgKyBNYXRoLnBvdyhhWzVdLCAyKSArIE1hdGgucG93KGFbNl0sIDIpICsgTWF0aC5wb3coYVs3XSwgMikgKyBNYXRoLnBvdyhhWzhdLCAyKSArIE1hdGgucG93KGFbOV0sIDIpICsgTWF0aC5wb3coYVsxMF0sIDIpICsgTWF0aC5wb3coYVsxMV0sIDIpICsgTWF0aC5wb3coYVsxMl0sIDIpICsgTWF0aC5wb3coYVsxM10sIDIpICsgTWF0aC5wb3coYVsxNF0sIDIpICsgTWF0aC5wb3coYVsxNV0sIDIpICkpXG59XG5cbi8qKlxuICogQWRkcyB0d28gbWF0NCdzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHttYXQ0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICsgYlswXTtcbiAgb3V0WzFdID0gYVsxXSArIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gKyBiWzJdO1xuICBvdXRbM10gPSBhWzNdICsgYlszXTtcbiAgb3V0WzRdID0gYVs0XSArIGJbNF07XG4gIG91dFs1XSA9IGFbNV0gKyBiWzVdO1xuICBvdXRbNl0gPSBhWzZdICsgYls2XTtcbiAgb3V0WzddID0gYVs3XSArIGJbN107XG4gIG91dFs4XSA9IGFbOF0gKyBiWzhdO1xuICBvdXRbOV0gPSBhWzldICsgYls5XTtcbiAgb3V0WzEwXSA9IGFbMTBdICsgYlsxMF07XG4gIG91dFsxMV0gPSBhWzExXSArIGJbMTFdO1xuICBvdXRbMTJdID0gYVsxMl0gKyBiWzEyXTtcbiAgb3V0WzEzXSA9IGFbMTNdICsgYlsxM107XG4gIG91dFsxNF0gPSBhWzE0XSArIGJbMTRdO1xuICBvdXRbMTVdID0gYVsxNV0gKyBiWzE1XTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBTdWJ0cmFjdHMgbWF0cml4IGIgZnJvbSBtYXRyaXggYVxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7bWF0NH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0KG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdIC0gYlswXTtcbiAgb3V0WzFdID0gYVsxXSAtIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gLSBiWzJdO1xuICBvdXRbM10gPSBhWzNdIC0gYlszXTtcbiAgb3V0WzRdID0gYVs0XSAtIGJbNF07XG4gIG91dFs1XSA9IGFbNV0gLSBiWzVdO1xuICBvdXRbNl0gPSBhWzZdIC0gYls2XTtcbiAgb3V0WzddID0gYVs3XSAtIGJbN107XG4gIG91dFs4XSA9IGFbOF0gLSBiWzhdO1xuICBvdXRbOV0gPSBhWzldIC0gYls5XTtcbiAgb3V0WzEwXSA9IGFbMTBdIC0gYlsxMF07XG4gIG91dFsxMV0gPSBhWzExXSAtIGJbMTFdO1xuICBvdXRbMTJdID0gYVsxMl0gLSBiWzEyXTtcbiAgb3V0WzEzXSA9IGFbMTNdIC0gYlsxM107XG4gIG91dFsxNF0gPSBhWzE0XSAtIGJbMTRdO1xuICBvdXRbMTVdID0gYVsxNV0gLSBiWzE1XTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBNdWx0aXBseSBlYWNoIGVsZW1lbnQgb2YgdGhlIG1hdHJpeCBieSBhIHNjYWxhci5cbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBtYXRyaXggdG8gc2NhbGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBiIGFtb3VudCB0byBzY2FsZSB0aGUgbWF0cml4J3MgZWxlbWVudHMgYnlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5U2NhbGFyKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICogYjtcbiAgb3V0WzFdID0gYVsxXSAqIGI7XG4gIG91dFsyXSA9IGFbMl0gKiBiO1xuICBvdXRbM10gPSBhWzNdICogYjtcbiAgb3V0WzRdID0gYVs0XSAqIGI7XG4gIG91dFs1XSA9IGFbNV0gKiBiO1xuICBvdXRbNl0gPSBhWzZdICogYjtcbiAgb3V0WzddID0gYVs3XSAqIGI7XG4gIG91dFs4XSA9IGFbOF0gKiBiO1xuICBvdXRbOV0gPSBhWzldICogYjtcbiAgb3V0WzEwXSA9IGFbMTBdICogYjtcbiAgb3V0WzExXSA9IGFbMTFdICogYjtcbiAgb3V0WzEyXSA9IGFbMTJdICogYjtcbiAgb3V0WzEzXSA9IGFbMTNdICogYjtcbiAgb3V0WzE0XSA9IGFbMTRdICogYjtcbiAgb3V0WzE1XSA9IGFbMTVdICogYjtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBBZGRzIHR3byBtYXQ0J3MgYWZ0ZXIgbXVsdGlwbHlpbmcgZWFjaCBlbGVtZW50IG9mIHRoZSBzZWNvbmQgb3BlcmFuZCBieSBhIHNjYWxhciB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge21hdDR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gc2NhbGUgdGhlIGFtb3VudCB0byBzY2FsZSBiJ3MgZWxlbWVudHMgYnkgYmVmb3JlIGFkZGluZ1xuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHlTY2FsYXJBbmRBZGQob3V0LCBhLCBiLCBzY2FsZSkge1xuICBvdXRbMF0gPSBhWzBdICsgKGJbMF0gKiBzY2FsZSk7XG4gIG91dFsxXSA9IGFbMV0gKyAoYlsxXSAqIHNjYWxlKTtcbiAgb3V0WzJdID0gYVsyXSArIChiWzJdICogc2NhbGUpO1xuICBvdXRbM10gPSBhWzNdICsgKGJbM10gKiBzY2FsZSk7XG4gIG91dFs0XSA9IGFbNF0gKyAoYls0XSAqIHNjYWxlKTtcbiAgb3V0WzVdID0gYVs1XSArIChiWzVdICogc2NhbGUpO1xuICBvdXRbNl0gPSBhWzZdICsgKGJbNl0gKiBzY2FsZSk7XG4gIG91dFs3XSA9IGFbN10gKyAoYls3XSAqIHNjYWxlKTtcbiAgb3V0WzhdID0gYVs4XSArIChiWzhdICogc2NhbGUpO1xuICBvdXRbOV0gPSBhWzldICsgKGJbOV0gKiBzY2FsZSk7XG4gIG91dFsxMF0gPSBhWzEwXSArIChiWzEwXSAqIHNjYWxlKTtcbiAgb3V0WzExXSA9IGFbMTFdICsgKGJbMTFdICogc2NhbGUpO1xuICBvdXRbMTJdID0gYVsxMl0gKyAoYlsxMl0gKiBzY2FsZSk7XG4gIG91dFsxM10gPSBhWzEzXSArIChiWzEzXSAqIHNjYWxlKTtcbiAgb3V0WzE0XSA9IGFbMTRdICsgKGJbMTRdICogc2NhbGUpO1xuICBvdXRbMTVdID0gYVsxNV0gKyAoYlsxNV0gKiBzY2FsZSk7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgbWF0cmljZXMgaGF2ZSBleGFjdGx5IHRoZSBzYW1lIGVsZW1lbnRzIGluIHRoZSBzYW1lIHBvc2l0aW9uICh3aGVuIGNvbXBhcmVkIHdpdGggPT09KVxuICpcbiAqIEBwYXJhbSB7bWF0NH0gYSBUaGUgZmlyc3QgbWF0cml4LlxuICogQHBhcmFtIHttYXQ0fSBiIFRoZSBzZWNvbmQgbWF0cml4LlxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIG1hdHJpY2VzIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXhhY3RFcXVhbHMoYSwgYikge1xuICByZXR1cm4gYVswXSA9PT0gYlswXSAmJiBhWzFdID09PSBiWzFdICYmIGFbMl0gPT09IGJbMl0gJiYgYVszXSA9PT0gYlszXSAmJlxuICAgICAgICAgYVs0XSA9PT0gYls0XSAmJiBhWzVdID09PSBiWzVdICYmIGFbNl0gPT09IGJbNl0gJiYgYVs3XSA9PT0gYls3XSAmJlxuICAgICAgICAgYVs4XSA9PT0gYls4XSAmJiBhWzldID09PSBiWzldICYmIGFbMTBdID09PSBiWzEwXSAmJiBhWzExXSA9PT0gYlsxMV0gJiZcbiAgICAgICAgIGFbMTJdID09PSBiWzEyXSAmJiBhWzEzXSA9PT0gYlsxM10gJiYgYVsxNF0gPT09IGJbMTRdICYmIGFbMTVdID09PSBiWzE1XTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSBtYXRyaWNlcyBoYXZlIGFwcHJveGltYXRlbHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24uXG4gKlxuICogQHBhcmFtIHttYXQ0fSBhIFRoZSBmaXJzdCBtYXRyaXguXG4gKiBAcGFyYW0ge21hdDR9IGIgVGhlIHNlY29uZCBtYXRyaXguXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgbWF0cmljZXMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHMoYSwgYikge1xuICBsZXQgYTAgID0gYVswXSwgIGExICA9IGFbMV0sICBhMiAgPSBhWzJdLCAgYTMgID0gYVszXTtcbiAgbGV0IGE0ICA9IGFbNF0sICBhNSAgPSBhWzVdLCAgYTYgID0gYVs2XSwgIGE3ICA9IGFbN107XG4gIGxldCBhOCAgPSBhWzhdLCAgYTkgID0gYVs5XSwgIGExMCA9IGFbMTBdLCBhMTEgPSBhWzExXTtcbiAgbGV0IGExMiA9IGFbMTJdLCBhMTMgPSBhWzEzXSwgYTE0ID0gYVsxNF0sIGExNSA9IGFbMTVdO1xuXG4gIGxldCBiMCAgPSBiWzBdLCAgYjEgID0gYlsxXSwgIGIyICA9IGJbMl0sICBiMyAgPSBiWzNdO1xuICBsZXQgYjQgID0gYls0XSwgIGI1ICA9IGJbNV0sICBiNiAgPSBiWzZdLCAgYjcgID0gYls3XTtcbiAgbGV0IGI4ICA9IGJbOF0sICBiOSAgPSBiWzldLCAgYjEwID0gYlsxMF0sIGIxMSA9IGJbMTFdO1xuICBsZXQgYjEyID0gYlsxMl0sIGIxMyA9IGJbMTNdLCBiMTQgPSBiWzE0XSwgYjE1ID0gYlsxNV07XG5cbiAgcmV0dXJuIChNYXRoLmFicyhhMCAtIGIwKSA8PSBnbE1hdHJpeC5FUFNJTE9OKk1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTApLCBNYXRoLmFicyhiMCkpICYmXG4gICAgICAgICAgTWF0aC5hYnMoYTEgLSBiMSkgPD0gZ2xNYXRyaXguRVBTSUxPTipNYXRoLm1heCgxLjAsIE1hdGguYWJzKGExKSwgTWF0aC5hYnMoYjEpKSAmJlxuICAgICAgICAgIE1hdGguYWJzKGEyIC0gYjIpIDw9IGdsTWF0cml4LkVQU0lMT04qTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMiksIE1hdGguYWJzKGIyKSkgJiZcbiAgICAgICAgICBNYXRoLmFicyhhMyAtIGIzKSA8PSBnbE1hdHJpeC5FUFNJTE9OKk1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTMpLCBNYXRoLmFicyhiMykpICYmXG4gICAgICAgICAgTWF0aC5hYnMoYTQgLSBiNCkgPD0gZ2xNYXRyaXguRVBTSUxPTipNYXRoLm1heCgxLjAsIE1hdGguYWJzKGE0KSwgTWF0aC5hYnMoYjQpKSAmJlxuICAgICAgICAgIE1hdGguYWJzKGE1IC0gYjUpIDw9IGdsTWF0cml4LkVQU0lMT04qTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhNSksIE1hdGguYWJzKGI1KSkgJiZcbiAgICAgICAgICBNYXRoLmFicyhhNiAtIGI2KSA8PSBnbE1hdHJpeC5FUFNJTE9OKk1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTYpLCBNYXRoLmFicyhiNikpICYmXG4gICAgICAgICAgTWF0aC5hYnMoYTcgLSBiNykgPD0gZ2xNYXRyaXguRVBTSUxPTipNYXRoLm1heCgxLjAsIE1hdGguYWJzKGE3KSwgTWF0aC5hYnMoYjcpKSAmJlxuICAgICAgICAgIE1hdGguYWJzKGE4IC0gYjgpIDw9IGdsTWF0cml4LkVQU0lMT04qTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhOCksIE1hdGguYWJzKGI4KSkgJiZcbiAgICAgICAgICBNYXRoLmFicyhhOSAtIGI5KSA8PSBnbE1hdHJpeC5FUFNJTE9OKk1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTkpLCBNYXRoLmFicyhiOSkpICYmXG4gICAgICAgICAgTWF0aC5hYnMoYTEwIC0gYjEwKSA8PSBnbE1hdHJpeC5FUFNJTE9OKk1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTEwKSwgTWF0aC5hYnMoYjEwKSkgJiZcbiAgICAgICAgICBNYXRoLmFicyhhMTEgLSBiMTEpIDw9IGdsTWF0cml4LkVQU0lMT04qTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMTEpLCBNYXRoLmFicyhiMTEpKSAmJlxuICAgICAgICAgIE1hdGguYWJzKGExMiAtIGIxMikgPD0gZ2xNYXRyaXguRVBTSUxPTipNYXRoLm1heCgxLjAsIE1hdGguYWJzKGExMiksIE1hdGguYWJzKGIxMikpICYmXG4gICAgICAgICAgTWF0aC5hYnMoYTEzIC0gYjEzKSA8PSBnbE1hdHJpeC5FUFNJTE9OKk1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTEzKSwgTWF0aC5hYnMoYjEzKSkgJiZcbiAgICAgICAgICBNYXRoLmFicyhhMTQgLSBiMTQpIDw9IGdsTWF0cml4LkVQU0lMT04qTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMTQpLCBNYXRoLmFicyhiMTQpKSAmJlxuICAgICAgICAgIE1hdGguYWJzKGExNSAtIGIxNSkgPD0gZ2xNYXRyaXguRVBTSUxPTipNYXRoLm1heCgxLjAsIE1hdGguYWJzKGExNSksIE1hdGguYWJzKGIxNSkpKTtcbn1cblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIG1hdDQubXVsdGlwbHl9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IG11bCA9IG11bHRpcGx5O1xuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgbWF0NC5zdWJ0cmFjdH1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3Qgc3ViID0gc3VidHJhY3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nbC1tYXRyaXgvc3JjL2dsLW1hdHJpeC9tYXQ0LmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEJyYW5kb24gSm9uZXMsIENvbGluIE1hY0tlbnppZSBJVi5cblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5mdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5BVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuVEhFIFNPRlRXQVJFLiAqL1xuXG5pbXBvcnQgKiBhcyBnbE1hdHJpeCBmcm9tIFwiLi9jb21tb25cIlxuaW1wb3J0ICogYXMgbWF0MyBmcm9tIFwiLi9tYXQzXCJcbmltcG9ydCAqIGFzIHZlYzMgZnJvbSBcIi4vdmVjM1wiXG5pbXBvcnQgKiBhcyB2ZWM0IGZyb20gXCIuL3ZlYzRcIlxuXG4vKipcbiAqIFF1YXRlcm5pb25cbiAqIEBtb2R1bGUgcXVhdFxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBpZGVudGl0eSBxdWF0XG4gKlxuICogQHJldHVybnMge3F1YXR9IGEgbmV3IHF1YXRlcm5pb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgbGV0IG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDQpO1xuICBvdXRbMF0gPSAwO1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNldCBhIHF1YXQgdG8gdGhlIGlkZW50aXR5IHF1YXRlcm5pb25cbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5KG91dCkge1xuICBvdXRbMF0gPSAwO1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFNldHMgYSBxdWF0IGZyb20gdGhlIGdpdmVuIGFuZ2xlIGFuZCByb3RhdGlvbiBheGlzLFxuICogdGhlbiByZXR1cm5zIGl0LlxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHt2ZWMzfSBheGlzIHRoZSBheGlzIGFyb3VuZCB3aGljaCB0byByb3RhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIGluIHJhZGlhbnNcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRBeGlzQW5nbGUob3V0LCBheGlzLCByYWQpIHtcbiAgcmFkID0gcmFkICogMC41O1xuICBsZXQgcyA9IE1hdGguc2luKHJhZCk7XG4gIG91dFswXSA9IHMgKiBheGlzWzBdO1xuICBvdXRbMV0gPSBzICogYXhpc1sxXTtcbiAgb3V0WzJdID0gcyAqIGF4aXNbMl07XG4gIG91dFszXSA9IE1hdGguY29zKHJhZCk7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgcm90YXRpb24gYXhpcyBhbmQgYW5nbGUgZm9yIGEgZ2l2ZW5cbiAqICBxdWF0ZXJuaW9uLiBJZiBhIHF1YXRlcm5pb24gaXMgY3JlYXRlZCB3aXRoXG4gKiAgc2V0QXhpc0FuZ2xlLCB0aGlzIG1ldGhvZCB3aWxsIHJldHVybiB0aGUgc2FtZVxuICogIHZhbHVlcyBhcyBwcm92aWRpZWQgaW4gdGhlIG9yaWdpbmFsIHBhcmFtZXRlciBsaXN0XG4gKiAgT1IgZnVuY3Rpb25hbGx5IGVxdWl2YWxlbnQgdmFsdWVzLlxuICogRXhhbXBsZTogVGhlIHF1YXRlcm5pb24gZm9ybWVkIGJ5IGF4aXMgWzAsIDAsIDFdIGFuZFxuICogIGFuZ2xlIC05MCBpcyB0aGUgc2FtZSBhcyB0aGUgcXVhdGVybmlvbiBmb3JtZWQgYnlcbiAqICBbMCwgMCwgMV0gYW5kIDI3MC4gVGhpcyBtZXRob2QgZmF2b3JzIHRoZSBsYXR0ZXIuXG4gKiBAcGFyYW0gIHt2ZWMzfSBvdXRfYXhpcyAgVmVjdG9yIHJlY2VpdmluZyB0aGUgYXhpcyBvZiByb3RhdGlvblxuICogQHBhcmFtICB7cXVhdH0gcSAgICAgUXVhdGVybmlvbiB0byBiZSBkZWNvbXBvc2VkXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICBBbmdsZSwgaW4gcmFkaWFucywgb2YgdGhlIHJvdGF0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBeGlzQW5nbGUob3V0X2F4aXMsIHEpIHtcbiAgbGV0IHJhZCA9IE1hdGguYWNvcyhxWzNdKSAqIDIuMDtcbiAgbGV0IHMgPSBNYXRoLnNpbihyYWQgLyAyLjApO1xuICBpZiAocyAhPSAwLjApIHtcbiAgICBvdXRfYXhpc1swXSA9IHFbMF0gLyBzO1xuICAgIG91dF9heGlzWzFdID0gcVsxXSAvIHM7XG4gICAgb3V0X2F4aXNbMl0gPSBxWzJdIC8gcztcbiAgfSBlbHNlIHtcbiAgICAvLyBJZiBzIGlzIHplcm8sIHJldHVybiBhbnkgYXhpcyAobm8gcm90YXRpb24gLSBheGlzIGRvZXMgbm90IG1hdHRlcilcbiAgICBvdXRfYXhpc1swXSA9IDE7XG4gICAgb3V0X2F4aXNbMV0gPSAwO1xuICAgIG91dF9heGlzWzJdID0gMDtcbiAgfVxuICByZXR1cm4gcmFkO1xufVxuXG4vKipcbiAqIE11bHRpcGxpZXMgdHdvIHF1YXQnc1xuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHtxdWF0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3F1YXR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseShvdXQsIGEsIGIpIHtcbiAgbGV0IGF4ID0gYVswXSwgYXkgPSBhWzFdLCBheiA9IGFbMl0sIGF3ID0gYVszXTtcbiAgbGV0IGJ4ID0gYlswXSwgYnkgPSBiWzFdLCBieiA9IGJbMl0sIGJ3ID0gYlszXTtcblxuICBvdXRbMF0gPSBheCAqIGJ3ICsgYXcgKiBieCArIGF5ICogYnogLSBheiAqIGJ5O1xuICBvdXRbMV0gPSBheSAqIGJ3ICsgYXcgKiBieSArIGF6ICogYnggLSBheCAqIGJ6O1xuICBvdXRbMl0gPSBheiAqIGJ3ICsgYXcgKiBieiArIGF4ICogYnkgLSBheSAqIGJ4O1xuICBvdXRbM10gPSBhdyAqIGJ3IC0gYXggKiBieCAtIGF5ICogYnkgLSBheiAqIGJ6O1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJvdGF0ZXMgYSBxdWF0ZXJuaW9uIGJ5IHRoZSBnaXZlbiBhbmdsZSBhYm91dCB0aGUgWCBheGlzXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgcXVhdCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtxdWF0fSBhIHF1YXQgdG8gcm90YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkIGFuZ2xlIChpbiByYWRpYW5zKSB0byByb3RhdGVcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVgob3V0LCBhLCByYWQpIHtcbiAgcmFkICo9IDAuNTtcblxuICBsZXQgYXggPSBhWzBdLCBheSA9IGFbMV0sIGF6ID0gYVsyXSwgYXcgPSBhWzNdO1xuICBsZXQgYnggPSBNYXRoLnNpbihyYWQpLCBidyA9IE1hdGguY29zKHJhZCk7XG5cbiAgb3V0WzBdID0gYXggKiBidyArIGF3ICogYng7XG4gIG91dFsxXSA9IGF5ICogYncgKyBheiAqIGJ4O1xuICBvdXRbMl0gPSBheiAqIGJ3IC0gYXkgKiBieDtcbiAgb3V0WzNdID0gYXcgKiBidyAtIGF4ICogYng7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUm90YXRlcyBhIHF1YXRlcm5pb24gYnkgdGhlIGdpdmVuIGFuZ2xlIGFib3V0IHRoZSBZIGF4aXNcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCBxdWF0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge3F1YXR9IGEgcXVhdCB0byByb3RhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSByYWQgYW5nbGUgKGluIHJhZGlhbnMpIHRvIHJvdGF0ZVxuICogQHJldHVybnMge3F1YXR9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWShvdXQsIGEsIHJhZCkge1xuICByYWQgKj0gMC41O1xuXG4gIGxldCBheCA9IGFbMF0sIGF5ID0gYVsxXSwgYXogPSBhWzJdLCBhdyA9IGFbM107XG4gIGxldCBieSA9IE1hdGguc2luKHJhZCksIGJ3ID0gTWF0aC5jb3MocmFkKTtcblxuICBvdXRbMF0gPSBheCAqIGJ3IC0gYXogKiBieTtcbiAgb3V0WzFdID0gYXkgKiBidyArIGF3ICogYnk7XG4gIG91dFsyXSA9IGF6ICogYncgKyBheCAqIGJ5O1xuICBvdXRbM10gPSBhdyAqIGJ3IC0gYXkgKiBieTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBSb3RhdGVzIGEgcXVhdGVybmlvbiBieSB0aGUgZ2l2ZW4gYW5nbGUgYWJvdXQgdGhlIFogYXhpc1xuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHF1YXQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7cXVhdH0gYSBxdWF0IHRvIHJvdGF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IHJhZCBhbmdsZSAoaW4gcmFkaWFucykgdG8gcm90YXRlXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVaKG91dCwgYSwgcmFkKSB7XG4gIHJhZCAqPSAwLjU7XG5cbiAgbGV0IGF4ID0gYVswXSwgYXkgPSBhWzFdLCBheiA9IGFbMl0sIGF3ID0gYVszXTtcbiAgbGV0IGJ6ID0gTWF0aC5zaW4ocmFkKSwgYncgPSBNYXRoLmNvcyhyYWQpO1xuXG4gIG91dFswXSA9IGF4ICogYncgKyBheSAqIGJ6O1xuICBvdXRbMV0gPSBheSAqIGJ3IC0gYXggKiBiejtcbiAgb3V0WzJdID0gYXogKiBidyArIGF3ICogYno7XG4gIG91dFszXSA9IGF3ICogYncgLSBheiAqIGJ6O1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIFcgY29tcG9uZW50IG9mIGEgcXVhdCBmcm9tIHRoZSBYLCBZLCBhbmQgWiBjb21wb25lbnRzLlxuICogQXNzdW1lcyB0aGF0IHF1YXRlcm5pb24gaXMgMSB1bml0IGluIGxlbmd0aC5cbiAqIEFueSBleGlzdGluZyBXIGNvbXBvbmVudCB3aWxsIGJlIGlnbm9yZWQuXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge3F1YXR9IGEgcXVhdCB0byBjYWxjdWxhdGUgVyBjb21wb25lbnQgb2ZcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZVcob3V0LCBhKSB7XG4gIGxldCB4ID0gYVswXSwgeSA9IGFbMV0sIHogPSBhWzJdO1xuXG4gIG91dFswXSA9IHg7XG4gIG91dFsxXSA9IHk7XG4gIG91dFsyXSA9IHo7XG4gIG91dFszXSA9IE1hdGguc3FydChNYXRoLmFicygxLjAgLSB4ICogeCAtIHkgKiB5IC0geiAqIHopKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBQZXJmb3JtcyBhIHNwaGVyaWNhbCBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHR3byBxdWF0XG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge3F1YXR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7cXVhdH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSB0IGludGVycG9sYXRpb24gYW1vdW50IGJldHdlZW4gdGhlIHR3byBpbnB1dHNcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNsZXJwKG91dCwgYSwgYiwgdCkge1xuICAvLyBiZW5jaG1hcmtzOlxuICAvLyAgICBodHRwOi8vanNwZXJmLmNvbS9xdWF0ZXJuaW9uLXNsZXJwLWltcGxlbWVudGF0aW9uc1xuICBsZXQgYXggPSBhWzBdLCBheSA9IGFbMV0sIGF6ID0gYVsyXSwgYXcgPSBhWzNdO1xuICBsZXQgYnggPSBiWzBdLCBieSA9IGJbMV0sIGJ6ID0gYlsyXSwgYncgPSBiWzNdO1xuXG4gIGxldCBvbWVnYSwgY29zb20sIHNpbm9tLCBzY2FsZTAsIHNjYWxlMTtcblxuICAvLyBjYWxjIGNvc2luZVxuICBjb3NvbSA9IGF4ICogYnggKyBheSAqIGJ5ICsgYXogKiBieiArIGF3ICogYnc7XG4gIC8vIGFkanVzdCBzaWducyAoaWYgbmVjZXNzYXJ5KVxuICBpZiAoIGNvc29tIDwgMC4wICkge1xuICAgIGNvc29tID0gLWNvc29tO1xuICAgIGJ4ID0gLSBieDtcbiAgICBieSA9IC0gYnk7XG4gICAgYnogPSAtIGJ6O1xuICAgIGJ3ID0gLSBidztcbiAgfVxuICAvLyBjYWxjdWxhdGUgY29lZmZpY2llbnRzXG4gIGlmICggKDEuMCAtIGNvc29tKSA+IDAuMDAwMDAxICkge1xuICAgIC8vIHN0YW5kYXJkIGNhc2UgKHNsZXJwKVxuICAgIG9tZWdhICA9IE1hdGguYWNvcyhjb3NvbSk7XG4gICAgc2lub20gID0gTWF0aC5zaW4ob21lZ2EpO1xuICAgIHNjYWxlMCA9IE1hdGguc2luKCgxLjAgLSB0KSAqIG9tZWdhKSAvIHNpbm9tO1xuICAgIHNjYWxlMSA9IE1hdGguc2luKHQgKiBvbWVnYSkgLyBzaW5vbTtcbiAgfSBlbHNlIHtcbiAgICAvLyBcImZyb21cIiBhbmQgXCJ0b1wiIHF1YXRlcm5pb25zIGFyZSB2ZXJ5IGNsb3NlXG4gICAgLy8gIC4uLiBzbyB3ZSBjYW4gZG8gYSBsaW5lYXIgaW50ZXJwb2xhdGlvblxuICAgIHNjYWxlMCA9IDEuMCAtIHQ7XG4gICAgc2NhbGUxID0gdDtcbiAgfVxuICAvLyBjYWxjdWxhdGUgZmluYWwgdmFsdWVzXG4gIG91dFswXSA9IHNjYWxlMCAqIGF4ICsgc2NhbGUxICogYng7XG4gIG91dFsxXSA9IHNjYWxlMCAqIGF5ICsgc2NhbGUxICogYnk7XG4gIG91dFsyXSA9IHNjYWxlMCAqIGF6ICsgc2NhbGUxICogYno7XG4gIG91dFszXSA9IHNjYWxlMCAqIGF3ICsgc2NhbGUxICogYnc7XG5cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBpbnZlcnNlIG9mIGEgcXVhdFxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHtxdWF0fSBhIHF1YXQgdG8gY2FsY3VsYXRlIGludmVyc2Ugb2ZcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludmVydChvdXQsIGEpIHtcbiAgbGV0IGEwID0gYVswXSwgYTEgPSBhWzFdLCBhMiA9IGFbMl0sIGEzID0gYVszXTtcbiAgbGV0IGRvdCA9IGEwKmEwICsgYTEqYTEgKyBhMiphMiArIGEzKmEzO1xuICBsZXQgaW52RG90ID0gZG90ID8gMS4wL2RvdCA6IDA7XG5cbiAgLy8gVE9ETzogV291bGQgYmUgZmFzdGVyIHRvIHJldHVybiBbMCwwLDAsMF0gaW1tZWRpYXRlbHkgaWYgZG90ID09IDBcblxuICBvdXRbMF0gPSAtYTAqaW52RG90O1xuICBvdXRbMV0gPSAtYTEqaW52RG90O1xuICBvdXRbMl0gPSAtYTIqaW52RG90O1xuICBvdXRbM10gPSBhMyppbnZEb3Q7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgY29uanVnYXRlIG9mIGEgcXVhdFxuICogSWYgdGhlIHF1YXRlcm5pb24gaXMgbm9ybWFsaXplZCwgdGhpcyBmdW5jdGlvbiBpcyBmYXN0ZXIgdGhhbiBxdWF0LmludmVyc2UgYW5kIHByb2R1Y2VzIHRoZSBzYW1lIHJlc3VsdC5cbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7cXVhdH0gYSBxdWF0IHRvIGNhbGN1bGF0ZSBjb25qdWdhdGUgb2ZcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbmp1Z2F0ZShvdXQsIGEpIHtcbiAgb3V0WzBdID0gLWFbMF07XG4gIG91dFsxXSA9IC1hWzFdO1xuICBvdXRbMl0gPSAtYVsyXTtcbiAgb3V0WzNdID0gYVszXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgcXVhdGVybmlvbiBmcm9tIHRoZSBnaXZlbiAzeDMgcm90YXRpb24gbWF0cml4LlxuICpcbiAqIE5PVEU6IFRoZSByZXN1bHRhbnQgcXVhdGVybmlvbiBpcyBub3Qgbm9ybWFsaXplZCwgc28geW91IHNob3VsZCBiZSBzdXJlXG4gKiB0byByZW5vcm1hbGl6ZSB0aGUgcXVhdGVybmlvbiB5b3Vyc2VsZiB3aGVyZSBuZWNlc3NhcnkuXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge21hdDN9IG0gcm90YXRpb24gbWF0cml4XG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21NYXQzKG91dCwgbSkge1xuICAvLyBBbGdvcml0aG0gaW4gS2VuIFNob2VtYWtlJ3MgYXJ0aWNsZSBpbiAxOTg3IFNJR0dSQVBIIGNvdXJzZSBub3Rlc1xuICAvLyBhcnRpY2xlIFwiUXVhdGVybmlvbiBDYWxjdWx1cyBhbmQgRmFzdCBBbmltYXRpb25cIi5cbiAgbGV0IGZUcmFjZSA9IG1bMF0gKyBtWzRdICsgbVs4XTtcbiAgbGV0IGZSb290O1xuXG4gIGlmICggZlRyYWNlID4gMC4wICkge1xuICAgIC8vIHx3fCA+IDEvMiwgbWF5IGFzIHdlbGwgY2hvb3NlIHcgPiAxLzJcbiAgICBmUm9vdCA9IE1hdGguc3FydChmVHJhY2UgKyAxLjApOyAgLy8gMndcbiAgICBvdXRbM10gPSAwLjUgKiBmUm9vdDtcbiAgICBmUm9vdCA9IDAuNS9mUm9vdDsgIC8vIDEvKDR3KVxuICAgIG91dFswXSA9IChtWzVdLW1bN10pKmZSb290O1xuICAgIG91dFsxXSA9IChtWzZdLW1bMl0pKmZSb290O1xuICAgIG91dFsyXSA9IChtWzFdLW1bM10pKmZSb290O1xuICB9IGVsc2Uge1xuICAgIC8vIHx3fCA8PSAxLzJcbiAgICBsZXQgaSA9IDA7XG4gICAgaWYgKCBtWzRdID4gbVswXSApXG4gICAgICBpID0gMTtcbiAgICBpZiAoIG1bOF0gPiBtW2kqMytpXSApXG4gICAgICBpID0gMjtcbiAgICBsZXQgaiA9IChpKzEpJTM7XG4gICAgbGV0IGsgPSAoaSsyKSUzO1xuXG4gICAgZlJvb3QgPSBNYXRoLnNxcnQobVtpKjMraV0tbVtqKjMral0tbVtrKjMra10gKyAxLjApO1xuICAgIG91dFtpXSA9IDAuNSAqIGZSb290O1xuICAgIGZSb290ID0gMC41IC8gZlJvb3Q7XG4gICAgb3V0WzNdID0gKG1baiozK2tdIC0gbVtrKjMral0pICogZlJvb3Q7XG4gICAgb3V0W2pdID0gKG1baiozK2ldICsgbVtpKjMral0pICogZlJvb3Q7XG4gICAgb3V0W2tdID0gKG1bayozK2ldICsgbVtpKjMra10pICogZlJvb3Q7XG4gIH1cblxuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBxdWF0ZXJuaW9uIGZyb20gdGhlIGdpdmVuIGV1bGVyIGFuZ2xlIHgsIHksIHouXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge3h9IEFuZ2xlIHRvIHJvdGF0ZSBhcm91bmQgWCBheGlzIGluIGRlZ3JlZXMuXG4gKiBAcGFyYW0ge3l9IEFuZ2xlIHRvIHJvdGF0ZSBhcm91bmQgWSBheGlzIGluIGRlZ3JlZXMuXG4gKiBAcGFyYW0ge3p9IEFuZ2xlIHRvIHJvdGF0ZSBhcm91bmQgWiBheGlzIGluIGRlZ3JlZXMuXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21FdWxlcihvdXQsIHgsIHksIHopIHtcbiAgICBsZXQgaGFsZlRvUmFkID0gMC41ICogTWF0aC5QSSAvIDE4MC4wO1xuICAgIHggKj0gaGFsZlRvUmFkO1xuICAgIHkgKj0gaGFsZlRvUmFkO1xuICAgIHogKj0gaGFsZlRvUmFkO1xuXG4gICAgbGV0IHN4ID0gTWF0aC5zaW4oeCk7XG4gICAgbGV0IGN4ID0gTWF0aC5jb3MoeCk7XG4gICAgbGV0IHN5ID0gTWF0aC5zaW4oeSk7XG4gICAgbGV0IGN5ID0gTWF0aC5jb3MoeSk7XG4gICAgbGV0IHN6ID0gTWF0aC5zaW4oeik7XG4gICAgbGV0IGN6ID0gTWF0aC5jb3Moeik7XG5cbiAgICBvdXRbMF0gPSBzeCAqIGN5ICogY3ogLSBjeCAqIHN5ICogc3o7XG4gICAgb3V0WzFdID0gY3ggKiBzeSAqIGN6ICsgc3ggKiBjeSAqIHN6O1xuICAgIG91dFsyXSA9IGN4ICogY3kgKiBzeiAtIHN4ICogc3kgKiBjejtcbiAgICBvdXRbM10gPSBjeCAqIGN5ICogY3ogKyBzeCAqIHN5ICogc3o7XG5cbiAgICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBxdWF0ZW5pb25cbiAqXG4gKiBAcGFyYW0ge3F1YXR9IGEgdmVjdG9yIHRvIHJlcHJlc2VudCBhcyBhIHN0cmluZ1xuICogQHJldHVybnMge1N0cmluZ30gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cihhKSB7XG4gIHJldHVybiAncXVhdCgnICsgYVswXSArICcsICcgKyBhWzFdICsgJywgJyArIGFbMl0gKyAnLCAnICsgYVszXSArICcpJztcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHF1YXQgaW5pdGlhbGl6ZWQgd2l0aCB2YWx1ZXMgZnJvbSBhbiBleGlzdGluZyBxdWF0ZXJuaW9uXG4gKlxuICogQHBhcmFtIHtxdWF0fSBhIHF1YXRlcm5pb24gdG8gY2xvbmVcbiAqIEByZXR1cm5zIHtxdWF0fSBhIG5ldyBxdWF0ZXJuaW9uXG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IGNsb25lID0gdmVjNC5jbG9uZTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHF1YXQgaW5pdGlhbGl6ZWQgd2l0aCB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB5IFkgY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geiBaIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHcgVyBjb21wb25lbnRcbiAqIEByZXR1cm5zIHtxdWF0fSBhIG5ldyBxdWF0ZXJuaW9uXG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21WYWx1ZXMgPSB2ZWM0LmZyb21WYWx1ZXM7XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIHF1YXQgdG8gYW5vdGhlclxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHtxdWF0fSBhIHRoZSBzb3VyY2UgcXVhdGVybmlvblxuICogQHJldHVybnMge3F1YXR9IG91dFxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBjb3B5ID0gdmVjNC5jb3B5O1xuXG4vKipcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIHF1YXQgdG8gdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB5IFkgY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geiBaIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHcgVyBjb21wb25lbnRcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3Qgc2V0ID0gdmVjNC5zZXQ7XG5cbi8qKlxuICogQWRkcyB0d28gcXVhdCdzXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge3F1YXR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7cXVhdH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3QgYWRkID0gdmVjNC5hZGQ7XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayBxdWF0Lm11bHRpcGx5fVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBtdWwgPSBtdWx0aXBseTtcblxuLyoqXG4gKiBTY2FsZXMgYSBxdWF0IGJ5IGEgc2NhbGFyIG51bWJlclxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3F1YXR9IGEgdGhlIHZlY3RvciB0byBzY2FsZVxuICogQHBhcmFtIHtOdW1iZXJ9IGIgYW1vdW50IHRvIHNjYWxlIHRoZSB2ZWN0b3IgYnlcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3Qgc2NhbGUgPSB2ZWM0LnNjYWxlO1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byBxdWF0J3NcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7cXVhdH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRvdCBwcm9kdWN0IG9mIGEgYW5kIGJcbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3QgZG90ID0gdmVjNC5kb3Q7XG5cbi8qKlxuICogUGVyZm9ybXMgYSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHR3byBxdWF0J3NcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7cXVhdH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtxdWF0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xuICogQHJldHVybnMge3F1YXR9IG91dFxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBsZXJwID0gdmVjNC5sZXJwO1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGxlbmd0aCBvZiBhIHF1YXRcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IGEgdmVjdG9yIHRvIGNhbGN1bGF0ZSBsZW5ndGggb2ZcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGxlbmd0aCBvZiBhXG4gKi9cbmV4cG9ydCBjb25zdCBsZW5ndGggPSB2ZWM0Lmxlbmd0aDtcblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHF1YXQubGVuZ3RofVxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBsZW4gPSBsZW5ndGg7XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgc3F1YXJlZCBsZW5ndGggb2YgYSBxdWF0XG4gKlxuICogQHBhcmFtIHtxdWF0fSBhIHZlY3RvciB0byBjYWxjdWxhdGUgc3F1YXJlZCBsZW5ndGggb2ZcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHNxdWFyZWQgbGVuZ3RoIG9mIGFcbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3Qgc3F1YXJlZExlbmd0aCA9IHZlYzQuc3F1YXJlZExlbmd0aDtcblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHF1YXQuc3F1YXJlZExlbmd0aH1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3Qgc3FyTGVuID0gc3F1YXJlZExlbmd0aDtcblxuLyoqXG4gKiBOb3JtYWxpemUgYSBxdWF0XG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge3F1YXR9IGEgcXVhdGVybmlvbiB0byBub3JtYWxpemVcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplID0gdmVjNC5ub3JtYWxpemU7XG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgcXVhdGVybmlvbnMgaGF2ZSBleGFjdGx5IHRoZSBzYW1lIGVsZW1lbnRzIGluIHRoZSBzYW1lIHBvc2l0aW9uICh3aGVuIGNvbXBhcmVkIHdpdGggPT09KVxuICpcbiAqIEBwYXJhbSB7cXVhdH0gYSBUaGUgZmlyc3QgcXVhdGVybmlvbi5cbiAqIEBwYXJhbSB7cXVhdH0gYiBUaGUgc2Vjb25kIHF1YXRlcm5pb24uXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmVjdG9ycyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGV4YWN0RXF1YWxzID0gdmVjNC5leGFjdEVxdWFscztcblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSBxdWF0ZXJuaW9ucyBoYXZlIGFwcHJveGltYXRlbHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24uXG4gKlxuICogQHBhcmFtIHtxdWF0fSBhIFRoZSBmaXJzdCB2ZWN0b3IuXG4gKiBAcGFyYW0ge3F1YXR9IGIgVGhlIHNlY29uZCB2ZWN0b3IuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmVjdG9ycyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGVxdWFscyA9IHZlYzQuZXF1YWxzO1xuXG4vKipcbiAqIFNldHMgYSBxdWF0ZXJuaW9uIHRvIHJlcHJlc2VudCB0aGUgc2hvcnRlc3Qgcm90YXRpb24gZnJvbSBvbmVcbiAqIHZlY3RvciB0byBhbm90aGVyLlxuICpcbiAqIEJvdGggdmVjdG9ycyBhcmUgYXNzdW1lZCB0byBiZSB1bml0IGxlbmd0aC5cbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb24uXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGluaXRpYWwgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIGRlc3RpbmF0aW9uIHZlY3RvclxuICogQHJldHVybnMge3F1YXR9IG91dFxuICovXG5leHBvcnQgY29uc3Qgcm90YXRpb25UbyA9IChmdW5jdGlvbigpIHtcbiAgbGV0IHRtcHZlYzMgPSB2ZWMzLmNyZWF0ZSgpO1xuICBsZXQgeFVuaXRWZWMzID0gdmVjMy5mcm9tVmFsdWVzKDEsMCwwKTtcbiAgbGV0IHlVbml0VmVjMyA9IHZlYzMuZnJvbVZhbHVlcygwLDEsMCk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKG91dCwgYSwgYikge1xuICAgIGxldCBkb3QgPSB2ZWMzLmRvdChhLCBiKTtcbiAgICBpZiAoZG90IDwgLTAuOTk5OTk5KSB7XG4gICAgICB2ZWMzLmNyb3NzKHRtcHZlYzMsIHhVbml0VmVjMywgYSk7XG4gICAgICBpZiAodmVjMy5sZW4odG1wdmVjMykgPCAwLjAwMDAwMSlcbiAgICAgICAgdmVjMy5jcm9zcyh0bXB2ZWMzLCB5VW5pdFZlYzMsIGEpO1xuICAgICAgdmVjMy5ub3JtYWxpemUodG1wdmVjMywgdG1wdmVjMyk7XG4gICAgICBzZXRBeGlzQW5nbGUob3V0LCB0bXB2ZWMzLCBNYXRoLlBJKTtcbiAgICAgIHJldHVybiBvdXQ7XG4gICAgfSBlbHNlIGlmIChkb3QgPiAwLjk5OTk5OSkge1xuICAgICAgb3V0WzBdID0gMDtcbiAgICAgIG91dFsxXSA9IDA7XG4gICAgICBvdXRbMl0gPSAwO1xuICAgICAgb3V0WzNdID0gMTtcbiAgICAgIHJldHVybiBvdXQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZlYzMuY3Jvc3ModG1wdmVjMywgYSwgYik7XG4gICAgICBvdXRbMF0gPSB0bXB2ZWMzWzBdO1xuICAgICAgb3V0WzFdID0gdG1wdmVjM1sxXTtcbiAgICAgIG91dFsyXSA9IHRtcHZlYzNbMl07XG4gICAgICBvdXRbM10gPSAxICsgZG90O1xuICAgICAgcmV0dXJuIG5vcm1hbGl6ZShvdXQsIG91dCk7XG4gICAgfVxuICB9O1xufSkoKTtcblxuLyoqXG4gKiBQZXJmb3JtcyBhIHNwaGVyaWNhbCBsaW5lYXIgaW50ZXJwb2xhdGlvbiB3aXRoIHR3byBjb250cm9sIHBvaW50c1xuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHtxdWF0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3F1YXR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge3F1YXR9IGMgdGhlIHRoaXJkIG9wZXJhbmRcbiAqIEBwYXJhbSB7cXVhdH0gZCB0aGUgZm91cnRoIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSB0IGludGVycG9sYXRpb24gYW1vdW50XG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKi9cbmV4cG9ydCBjb25zdCBzcWxlcnAgPSAoZnVuY3Rpb24gKCkge1xuICBsZXQgdGVtcDEgPSBjcmVhdGUoKTtcbiAgbGV0IHRlbXAyID0gY3JlYXRlKCk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChvdXQsIGEsIGIsIGMsIGQsIHQpIHtcbiAgICBzbGVycCh0ZW1wMSwgYSwgZCwgdCk7XG4gICAgc2xlcnAodGVtcDIsIGIsIGMsIHQpO1xuICAgIHNsZXJwKG91dCwgdGVtcDEsIHRlbXAyLCAyICogdCAqICgxIC0gdCkpO1xuXG4gICAgcmV0dXJuIG91dDtcbiAgfTtcbn0oKSk7XG5cbi8qKlxuICogU2V0cyB0aGUgc3BlY2lmaWVkIHF1YXRlcm5pb24gd2l0aCB2YWx1ZXMgY29ycmVzcG9uZGluZyB0byB0aGUgZ2l2ZW5cbiAqIGF4ZXMuIEVhY2ggYXhpcyBpcyBhIHZlYzMgYW5kIGlzIGV4cGVjdGVkIHRvIGJlIHVuaXQgbGVuZ3RoIGFuZFxuICogcGVycGVuZGljdWxhciB0byBhbGwgb3RoZXIgc3BlY2lmaWVkIGF4ZXMuXG4gKlxuICogQHBhcmFtIHt2ZWMzfSB2aWV3ICB0aGUgdmVjdG9yIHJlcHJlc2VudGluZyB0aGUgdmlld2luZyBkaXJlY3Rpb25cbiAqIEBwYXJhbSB7dmVjM30gcmlnaHQgdGhlIHZlY3RvciByZXByZXNlbnRpbmcgdGhlIGxvY2FsIFwicmlnaHRcIiBkaXJlY3Rpb25cbiAqIEBwYXJhbSB7dmVjM30gdXAgICAgdGhlIHZlY3RvciByZXByZXNlbnRpbmcgdGhlIGxvY2FsIFwidXBcIiBkaXJlY3Rpb25cbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqL1xuZXhwb3J0IGNvbnN0IHNldEF4ZXMgPSAoZnVuY3Rpb24oKSB7XG4gIGxldCBtYXRyID0gbWF0My5jcmVhdGUoKTtcblxuICByZXR1cm4gZnVuY3Rpb24ob3V0LCB2aWV3LCByaWdodCwgdXApIHtcbiAgICBtYXRyWzBdID0gcmlnaHRbMF07XG4gICAgbWF0clszXSA9IHJpZ2h0WzFdO1xuICAgIG1hdHJbNl0gPSByaWdodFsyXTtcblxuICAgIG1hdHJbMV0gPSB1cFswXTtcbiAgICBtYXRyWzRdID0gdXBbMV07XG4gICAgbWF0cls3XSA9IHVwWzJdO1xuXG4gICAgbWF0clsyXSA9IC12aWV3WzBdO1xuICAgIG1hdHJbNV0gPSAtdmlld1sxXTtcbiAgICBtYXRyWzhdID0gLXZpZXdbMl07XG5cbiAgICByZXR1cm4gbm9ybWFsaXplKG91dCwgZnJvbU1hdDMob3V0LCBtYXRyKSk7XG4gIH07XG59KSgpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2wtbWF0cml4L3NyYy9nbC1tYXRyaXgvcXVhdC5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogQ29weXJpZ2h0IChjKSAyMDE1LCBCcmFuZG9uIEpvbmVzLCBDb2xpbiBNYWNLZW56aWUgSVYuXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cblRIRSBTT0ZUV0FSRS4gKi9cblxuaW1wb3J0ICogYXMgZ2xNYXRyaXggZnJvbSBcIi4vY29tbW9uXCI7XG5cbi8qKlxuICogMiBEaW1lbnNpb25hbCBWZWN0b3JcbiAqIEBtb2R1bGUgdmVjMlxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldywgZW1wdHkgdmVjMlxuICpcbiAqIEByZXR1cm5zIHt2ZWMyfSBhIG5ldyAyRCB2ZWN0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgbGV0IG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDIpO1xuICBvdXRbMF0gPSAwO1xuICBvdXRbMV0gPSAwO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgdmVjMiBpbml0aWFsaXplZCB3aXRoIHZhbHVlcyBmcm9tIGFuIGV4aXN0aW5nIHZlY3RvclxuICpcbiAqIEBwYXJhbSB7dmVjMn0gYSB2ZWN0b3IgdG8gY2xvbmVcbiAqIEByZXR1cm5zIHt2ZWMyfSBhIG5ldyAyRCB2ZWN0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb25lKGEpIHtcbiAgbGV0IG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDIpO1xuICBvdXRbMF0gPSBhWzBdO1xuICBvdXRbMV0gPSBhWzFdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgdmVjMiBpbml0aWFsaXplZCB3aXRoIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0geCBYIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcbiAqIEByZXR1cm5zIHt2ZWMyfSBhIG5ldyAyRCB2ZWN0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21WYWx1ZXMoeCwgeSkge1xuICBsZXQgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoMik7XG4gIG91dFswXSA9IHg7XG4gIG91dFsxXSA9IHk7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIHZlYzIgdG8gYW5vdGhlclxuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIHNvdXJjZSB2ZWN0b3JcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHkob3V0LCBhKSB7XG4gIG91dFswXSA9IGFbMF07XG4gIG91dFsxXSA9IGFbMV07XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogU2V0IHRoZSBjb21wb25lbnRzIG9mIGEgdmVjMiB0byB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFggY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geSBZIGNvbXBvbmVudFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0KG91dCwgeCwgeSkge1xuICBvdXRbMF0gPSB4O1xuICBvdXRbMV0gPSB5O1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEFkZHMgdHdvIHZlYzInc1xuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSArIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gKyBiWzFdO1xuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIFN1YnRyYWN0cyB2ZWN0b3IgYiBmcm9tIHZlY3RvciBhXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3Qob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gLSBiWzBdO1xuICBvdXRbMV0gPSBhWzFdIC0gYlsxXTtcbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBNdWx0aXBsaWVzIHR3byB2ZWMyJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseShvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAqIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gKiBiWzFdO1xuICByZXR1cm4gb3V0O1xufTtcblxuLyoqXG4gKiBEaXZpZGVzIHR3byB2ZWMyJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXZpZGUob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gLyBiWzBdO1xuICBvdXRbMV0gPSBhWzFdIC8gYlsxXTtcbiAgcmV0dXJuIG91dDtcbn07XG5cbi8qKlxuICogTWF0aC5jZWlsIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjMlxuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdmVjdG9yIHRvIGNlaWxcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNlaWwob3V0LCBhKSB7XG4gIG91dFswXSA9IE1hdGguY2VpbChhWzBdKTtcbiAgb3V0WzFdID0gTWF0aC5jZWlsKGFbMV0pO1xuICByZXR1cm4gb3V0O1xufTtcblxuLyoqXG4gKiBNYXRoLmZsb29yIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjMlxuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdmVjdG9yIHRvIGZsb29yXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmbG9vcihvdXQsIGEpIHtcbiAgb3V0WzBdID0gTWF0aC5mbG9vcihhWzBdKTtcbiAgb3V0WzFdID0gTWF0aC5mbG9vcihhWzFdKTtcbiAgcmV0dXJuIG91dDtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbWluaW11bSBvZiB0d28gdmVjMidzXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbWluKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBNYXRoLm1pbihhWzBdLCBiWzBdKTtcbiAgb3V0WzFdID0gTWF0aC5taW4oYVsxXSwgYlsxXSk7XG4gIHJldHVybiBvdXQ7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIG1heGltdW0gb2YgdHdvIHZlYzInc1xuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1heChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gTWF0aC5tYXgoYVswXSwgYlswXSk7XG4gIG91dFsxXSA9IE1hdGgubWF4KGFbMV0sIGJbMV0pO1xuICByZXR1cm4gb3V0O1xufTtcblxuLyoqXG4gKiBNYXRoLnJvdW5kIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjMlxuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdmVjdG9yIHRvIHJvdW5kXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3VuZCAob3V0LCBhKSB7XG4gIG91dFswXSA9IE1hdGgucm91bmQoYVswXSk7XG4gIG91dFsxXSA9IE1hdGgucm91bmQoYVsxXSk7XG4gIHJldHVybiBvdXQ7XG59O1xuXG4vKipcbiAqIFNjYWxlcyBhIHZlYzIgYnkgYSBzY2FsYXIgbnVtYmVyXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgdmVjdG9yIHRvIHNjYWxlXG4gKiBAcGFyYW0ge051bWJlcn0gYiBhbW91bnQgdG8gc2NhbGUgdGhlIHZlY3RvciBieVxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKiBiO1xuICBvdXRbMV0gPSBhWzFdICogYjtcbiAgcmV0dXJuIG91dDtcbn07XG5cbi8qKlxuICogQWRkcyB0d28gdmVjMidzIGFmdGVyIHNjYWxpbmcgdGhlIHNlY29uZCBvcGVyYW5kIGJ5IGEgc2NhbGFyIHZhbHVlXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxlIHRoZSBhbW91bnQgdG8gc2NhbGUgYiBieSBiZWZvcmUgYWRkaW5nXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZUFuZEFkZChvdXQsIGEsIGIsIHNjYWxlKSB7XG4gIG91dFswXSA9IGFbMF0gKyAoYlswXSAqIHNjYWxlKTtcbiAgb3V0WzFdID0gYVsxXSArIChiWzFdICogc2NhbGUpO1xuICByZXR1cm4gb3V0O1xufTtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBldWNsaWRpYW4gZGlzdGFuY2UgYmV0d2VlbiB0d28gdmVjMidzXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkaXN0YW5jZSBiZXR3ZWVuIGEgYW5kIGJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpc3RhbmNlKGEsIGIpIHtcbiAgdmFyIHggPSBiWzBdIC0gYVswXSxcbiAgICB5ID0gYlsxXSAtIGFbMV07XG4gIHJldHVybiBNYXRoLnNxcnQoeCp4ICsgeSp5KTtcbn07XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgc3F1YXJlZCBldWNsaWRpYW4gZGlzdGFuY2UgYmV0d2VlbiB0d28gdmVjMidzXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3F1YXJlZERpc3RhbmNlKGEsIGIpIHtcbiAgdmFyIHggPSBiWzBdIC0gYVswXSxcbiAgICB5ID0gYlsxXSAtIGFbMV07XG4gIHJldHVybiB4KnggKyB5Knk7XG59O1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGxlbmd0aCBvZiBhIHZlYzJcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdmVjdG9yIHRvIGNhbGN1bGF0ZSBsZW5ndGggb2ZcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGxlbmd0aCBvZiBhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsZW5ndGgoYSkge1xuICB2YXIgeCA9IGFbMF0sXG4gICAgeSA9IGFbMV07XG4gIHJldHVybiBNYXRoLnNxcnQoeCp4ICsgeSp5KTtcbn07XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgc3F1YXJlZCBsZW5ndGggb2YgYSB2ZWMyXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBhIHZlY3RvciB0byBjYWxjdWxhdGUgc3F1YXJlZCBsZW5ndGggb2ZcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHNxdWFyZWQgbGVuZ3RoIG9mIGFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNxdWFyZWRMZW5ndGggKGEpIHtcbiAgdmFyIHggPSBhWzBdLFxuICAgIHkgPSBhWzFdO1xuICByZXR1cm4geCp4ICsgeSp5O1xufTtcblxuLyoqXG4gKiBOZWdhdGVzIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjMlxuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdmVjdG9yIHRvIG5lZ2F0ZVxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlKG91dCwgYSkge1xuICBvdXRbMF0gPSAtYVswXTtcbiAgb3V0WzFdID0gLWFbMV07XG4gIHJldHVybiBvdXQ7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGludmVyc2Ugb2YgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMyXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB2ZWN0b3IgdG8gaW52ZXJ0XG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnNlKG91dCwgYSkge1xuICBvdXRbMF0gPSAxLjAgLyBhWzBdO1xuICBvdXRbMV0gPSAxLjAgLyBhWzFdO1xuICByZXR1cm4gb3V0O1xufTtcblxuLyoqXG4gKiBOb3JtYWxpemUgYSB2ZWMyXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB2ZWN0b3IgdG8gbm9ybWFsaXplXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemUob3V0LCBhKSB7XG4gIHZhciB4ID0gYVswXSxcbiAgICB5ID0gYVsxXTtcbiAgdmFyIGxlbiA9IHgqeCArIHkqeTtcbiAgaWYgKGxlbiA+IDApIHtcbiAgICAvL1RPRE86IGV2YWx1YXRlIHVzZSBvZiBnbG1faW52c3FydCBoZXJlP1xuICAgIGxlbiA9IDEgLyBNYXRoLnNxcnQobGVuKTtcbiAgICBvdXRbMF0gPSBhWzBdICogbGVuO1xuICAgIG91dFsxXSA9IGFbMV0gKiBsZW47XG4gIH1cbiAgcmV0dXJuIG91dDtcbn07XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZG90IHByb2R1Y3Qgb2YgdHdvIHZlYzInc1xuICpcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gZG90IHByb2R1Y3Qgb2YgYSBhbmQgYlxuICovXG5leHBvcnQgZnVuY3Rpb24gZG90KGEsIGIpIHtcbiAgcmV0dXJuIGFbMF0gKiBiWzBdICsgYVsxXSAqIGJbMV07XG59O1xuXG4vKipcbiAqIENvbXB1dGVzIHRoZSBjcm9zcyBwcm9kdWN0IG9mIHR3byB2ZWMyJ3NcbiAqIE5vdGUgdGhhdCB0aGUgY3Jvc3MgcHJvZHVjdCBtdXN0IGJ5IGRlZmluaXRpb24gcHJvZHVjZSBhIDNEIHZlY3RvclxuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyb3NzKG91dCwgYSwgYikge1xuICB2YXIgeiA9IGFbMF0gKiBiWzFdIC0gYVsxXSAqIGJbMF07XG4gIG91dFswXSA9IG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IHo7XG4gIHJldHVybiBvdXQ7XG59O1xuXG4vKipcbiAqIFBlcmZvcm1zIGEgbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiB0d28gdmVjMidzXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gbGVycChvdXQsIGEsIGIsIHQpIHtcbiAgdmFyIGF4ID0gYVswXSxcbiAgICBheSA9IGFbMV07XG4gIG91dFswXSA9IGF4ICsgdCAqIChiWzBdIC0gYXgpO1xuICBvdXRbMV0gPSBheSArIHQgKiAoYlsxXSAtIGF5KTtcbiAgcmV0dXJuIG91dDtcbn07XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgcmFuZG9tIHZlY3RvciB3aXRoIHRoZSBnaXZlbiBzY2FsZVxuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge051bWJlcn0gW3NjYWxlXSBMZW5ndGggb2YgdGhlIHJlc3VsdGluZyB2ZWN0b3IuIElmIG9tbWl0dGVkLCBhIHVuaXQgdmVjdG9yIHdpbGwgYmUgcmV0dXJuZWRcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbShvdXQsIHNjYWxlKSB7XG4gIHNjYWxlID0gc2NhbGUgfHwgMS4wO1xuICB2YXIgciA9IGdsTWF0cml4LlJBTkRPTSgpICogMi4wICogTWF0aC5QSTtcbiAgb3V0WzBdID0gTWF0aC5jb3MocikgKiBzY2FsZTtcbiAgb3V0WzFdID0gTWF0aC5zaW4ocikgKiBzY2FsZTtcbiAgcmV0dXJuIG91dDtcbn07XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjMiB3aXRoIGEgbWF0MlxuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7bWF0Mn0gbSBtYXRyaXggdG8gdHJhbnNmb3JtIHdpdGhcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybU1hdDIob3V0LCBhLCBtKSB7XG4gIHZhciB4ID0gYVswXSxcbiAgICB5ID0gYVsxXTtcbiAgb3V0WzBdID0gbVswXSAqIHggKyBtWzJdICogeTtcbiAgb3V0WzFdID0gbVsxXSAqIHggKyBtWzNdICogeTtcbiAgcmV0dXJuIG91dDtcbn07XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjMiB3aXRoIGEgbWF0MmRcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXG4gKiBAcGFyYW0ge21hdDJkfSBtIG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtTWF0MmQob3V0LCBhLCBtKSB7XG4gIHZhciB4ID0gYVswXSxcbiAgICB5ID0gYVsxXTtcbiAgb3V0WzBdID0gbVswXSAqIHggKyBtWzJdICogeSArIG1bNF07XG4gIG91dFsxXSA9IG1bMV0gKiB4ICsgbVszXSAqIHkgKyBtWzVdO1xuICByZXR1cm4gb3V0O1xufTtcblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWMyIHdpdGggYSBtYXQzXG4gKiAzcmQgdmVjdG9yIGNvbXBvbmVudCBpcyBpbXBsaWNpdGx5ICcxJ1xuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7bWF0M30gbSBtYXRyaXggdG8gdHJhbnNmb3JtIHdpdGhcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybU1hdDMob3V0LCBhLCBtKSB7XG4gIHZhciB4ID0gYVswXSxcbiAgICB5ID0gYVsxXTtcbiAgb3V0WzBdID0gbVswXSAqIHggKyBtWzNdICogeSArIG1bNl07XG4gIG91dFsxXSA9IG1bMV0gKiB4ICsgbVs0XSAqIHkgKyBtWzddO1xuICByZXR1cm4gb3V0O1xufTtcblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWMyIHdpdGggYSBtYXQ0XG4gKiAzcmQgdmVjdG9yIGNvbXBvbmVudCBpcyBpbXBsaWNpdGx5ICcwJ1xuICogNHRoIHZlY3RvciBjb21wb25lbnQgaXMgaW1wbGljaXRseSAnMSdcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXG4gKiBAcGFyYW0ge21hdDR9IG0gbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1NYXQ0KG91dCwgYSwgbSkge1xuICBsZXQgeCA9IGFbMF07XG4gIGxldCB5ID0gYVsxXTtcbiAgb3V0WzBdID0gbVswXSAqIHggKyBtWzRdICogeSArIG1bMTJdO1xuICBvdXRbMV0gPSBtWzFdICogeCArIG1bNV0gKiB5ICsgbVsxM107XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIHZlY3RvclxuICpcbiAqIEBwYXJhbSB7dmVjMn0gYSB2ZWN0b3IgdG8gcmVwcmVzZW50IGFzIGEgc3RyaW5nXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyKGEpIHtcbiAgcmV0dXJuICd2ZWMyKCcgKyBhWzBdICsgJywgJyArIGFbMV0gKyAnKSc7XG59XG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgdmVjdG9ycyBleGFjdGx5IGhhdmUgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24gKHdoZW4gY29tcGFyZWQgd2l0aCA9PT0pXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBhIFRoZSBmaXJzdCB2ZWN0b3IuXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgVGhlIHNlY29uZCB2ZWN0b3IuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmVjdG9ycyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4YWN0RXF1YWxzKGEsIGIpIHtcbiAgcmV0dXJuIGFbMF0gPT09IGJbMF0gJiYgYVsxXSA9PT0gYlsxXTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSB2ZWN0b3JzIGhhdmUgYXBwcm94aW1hdGVseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbi5cbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgVGhlIGZpcnN0IHZlY3Rvci5cbiAqIEBwYXJhbSB7dmVjMn0gYiBUaGUgc2Vjb25kIHZlY3Rvci5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSB2ZWN0b3JzIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxzKGEsIGIpIHtcbiAgbGV0IGEwID0gYVswXSwgYTEgPSBhWzFdO1xuICBsZXQgYjAgPSBiWzBdLCBiMSA9IGJbMV07XG4gIHJldHVybiAoTWF0aC5hYnMoYTAgLSBiMCkgPD0gZ2xNYXRyaXguRVBTSUxPTipNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEwKSwgTWF0aC5hYnMoYjApKSAmJlxuICAgICAgICAgIE1hdGguYWJzKGExIC0gYjEpIDw9IGdsTWF0cml4LkVQU0lMT04qTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMSksIE1hdGguYWJzKGIxKSkpO1xufVxuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMi5sZW5ndGh9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IGxlbiA9IGxlbmd0aDtcblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzIuc3VidHJhY3R9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IHN1YiA9IHN1YnRyYWN0O1xuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMi5tdWx0aXBseX1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3QgbXVsID0gbXVsdGlwbHk7XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayB2ZWMyLmRpdmlkZX1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3QgZGl2ID0gZGl2aWRlO1xuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMi5kaXN0YW5jZX1cbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3QgZGlzdCA9IGRpc3RhbmNlO1xuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMi5zcXVhcmVkRGlzdGFuY2V9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IHNxckRpc3QgPSBzcXVhcmVkRGlzdGFuY2U7XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayB2ZWMyLnNxdWFyZWRMZW5ndGh9XG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IHNxckxlbiA9IHNxdWFyZWRMZW5ndGg7XG5cbi8qKlxuICogUGVyZm9ybSBzb21lIG9wZXJhdGlvbiBvdmVyIGFuIGFycmF5IG9mIHZlYzJzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGEgdGhlIGFycmF5IG9mIHZlY3RvcnMgdG8gaXRlcmF0ZSBvdmVyXG4gKiBAcGFyYW0ge051bWJlcn0gc3RyaWRlIE51bWJlciBvZiBlbGVtZW50cyBiZXR3ZWVuIHRoZSBzdGFydCBvZiBlYWNoIHZlYzIuIElmIDAgYXNzdW1lcyB0aWdodGx5IHBhY2tlZFxuICogQHBhcmFtIHtOdW1iZXJ9IG9mZnNldCBOdW1iZXIgb2YgZWxlbWVudHMgdG8gc2tpcCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBhcnJheVxuICogQHBhcmFtIHtOdW1iZXJ9IGNvdW50IE51bWJlciBvZiB2ZWMycyB0byBpdGVyYXRlIG92ZXIuIElmIDAgaXRlcmF0ZXMgb3ZlciBlbnRpcmUgYXJyYXlcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIEZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggdmVjdG9yIGluIHRoZSBhcnJheVxuICogQHBhcmFtIHtPYmplY3R9IFthcmddIGFkZGl0aW9uYWwgYXJndW1lbnQgdG8gcGFzcyB0byBmblxuICogQHJldHVybnMge0FycmF5fSBhXG4gKiBAZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IGZvckVhY2ggPSAoZnVuY3Rpb24oKSB7XG4gIGxldCB2ZWMgPSBjcmVhdGUoKTtcblxuICByZXR1cm4gZnVuY3Rpb24oYSwgc3RyaWRlLCBvZmZzZXQsIGNvdW50LCBmbiwgYXJnKSB7XG4gICAgbGV0IGksIGw7XG4gICAgaWYoIXN0cmlkZSkge1xuICAgICAgc3RyaWRlID0gMjtcbiAgICB9XG5cbiAgICBpZighb2Zmc2V0KSB7XG4gICAgICBvZmZzZXQgPSAwO1xuICAgIH1cblxuICAgIGlmKGNvdW50KSB7XG4gICAgICBsID0gTWF0aC5taW4oKGNvdW50ICogc3RyaWRlKSArIG9mZnNldCwgYS5sZW5ndGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsID0gYS5sZW5ndGg7XG4gICAgfVxuXG4gICAgZm9yKGkgPSBvZmZzZXQ7IGkgPCBsOyBpICs9IHN0cmlkZSkge1xuICAgICAgdmVjWzBdID0gYVtpXTsgdmVjWzFdID0gYVtpKzFdO1xuICAgICAgZm4odmVjLCB2ZWMsIGFyZyk7XG4gICAgICBhW2ldID0gdmVjWzBdOyBhW2krMV0gPSB2ZWNbMV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGE7XG4gIH07XG59KSgpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2wtbWF0cml4L3NyYy9nbC1tYXRyaXgvdmVjMi5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgZ2xtIGZyb20gJ2dsLW1hdHJpeCdcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vdHlwZS11dGlsJ1xuXG5leHBvcnQgZnVuY3Rpb24gcmVxdWlyZVZlYzModmFsOiBnbG0udmVjMyB8IEFycmF5PG51bWJlcj4gfCBudW1iZXIpOiBnbG0udmVjMyB7XG5cdGlmICh2YWwgaW5zdGFuY2VvZiBBcnJheSkge1xuXHRcdGxldCBsZW4gPSB2YWwubGVuZ3RoXG5cdFx0aWYgKGxlbiAhPT0gMylcblx0XHRcdHRocm93IG5ldyBFcnJvcihgQXJyYXkgbXVzdCBoYXZlIDMgZWxlbWVudHM7ICR7bGVufSB3ZXJlIHByZXNlbnQuYClcblx0XHR2YWwgPSBnbG0udmVjMy5mcm9tVmFsdWVzKHZhbFswXSwgdmFsWzFdLCB2YWxbMl0pXG5cdH0gZWxzZSBpZiAodHlwZW9mKHZhbCkgPT0gJ251bWJlcicpIHtcblx0XHR2YWwgPSBnbG0udmVjMy5mcm9tVmFsdWVzKHZhbCwgdmFsLCB2YWwpXG5cdH1cblx0cmV0dXJuIHZhbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVWZWMzQ29udmVydGlibGUoZGF0YTogdHlwZXMudmVjM0NvbnZlcnRpYmxlKTogdHlwZXMudmVjM0NvbnZlcnRpYmxlIHtcblx0aWYgKHR5cGVvZihkYXRhKSA9PSAnbnVtYmVyJykge1xuXHRcdHJldHVybiBkYXRhXG5cdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuXHRcdHJldHVybiBkYXRhLnNsaWNlKClcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gZ2xtLnZlYzMuY2xvbmUoZGF0YSlcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2dsL3V0aWwvdmVjdG9yLXV0aWwudHMiLCJpbXBvcnQgKiBhcyBnbG0gZnJvbSAnZ2wtbWF0cml4J1xuaW1wb3J0IHsgdmVjdG9yLCB0eXBlcyB9IGZyb20gJy4vdXRpbCdcblxuZXhwb3J0IGNsYXNzIHRyYW5zZm9ybSB7XG5cblx0ZGF0YTogZ2xtLm1hdDRcblxuXHRjb25zdHJ1Y3RvcihkYXRhOiBnbG0ubWF0NCA9IGdsbS5tYXQ0LmNyZWF0ZSgpKSB7XG5cdFx0dGhpcy5kYXRhID0gZGF0YVxuXHR9XG5cblx0cHVibGljIGlkZW50aXR5KCk6IHRyYW5zZm9ybSB7XG5cdFx0Z2xtLm1hdDQuaWRlbnRpdHkodGhpcy5kYXRhKVxuXHRcdHJldHVybiB0aGlzXG5cdH1cblxuXHRwdWJsaWMgdHJhbnNsYXRlKHZhbDogdHlwZXMudmVjM0NvbnZlcnRpYmxlKTogdHJhbnNmb3JtIHtcblx0XHR2YWwgPSB2ZWN0b3IucmVxdWlyZVZlYzModmFsKVxuXHRcdGdsbS5tYXQ0LnRyYW5zbGF0ZSh0aGlzLmRhdGEsIHRoaXMuZGF0YSwgdmFsKVxuXHRcdHJldHVybiB0aGlzXG5cdH1cblxuXHRwdWJsaWMgcm90YXRlKHJhZDogbnVtYmVyLCBheGlzOiB0eXBlcy52ZWMzQ29udmVydGlibGUpOiB0cmFuc2Zvcm0ge1xuXHRcdGF4aXMgPSB2ZWN0b3IucmVxdWlyZVZlYzMoYXhpcylcblx0XHRnbG0ubWF0NC5yb3RhdGUodGhpcy5kYXRhLCB0aGlzLmRhdGEsIHJhZCwgYXhpcylcblx0XHRyZXR1cm4gdGhpc1xuXHR9XG5cblx0cHVibGljIHNjYWxlKHZhbDogdHlwZXMudmVjM0NvbnZlcnRpYmxlKTogdHJhbnNmb3JtIHtcblx0XHR2YWwgPSB2ZWN0b3IucmVxdWlyZVZlYzModmFsKVxuXHRcdGdsbS5tYXQ0LnNjYWxlKHRoaXMuZGF0YSwgdGhpcy5kYXRhLCB2YWwpXG5cdFx0cmV0dXJuIHRoaXNcblx0fVxuXG5cdHB1YmxpYyBtYXQoKTogZ2xtLm1hdDQge1xuXHRcdHJldHVybiB0aGlzLmRhdGFcblx0fVxuXG5cdHB1YmxpYyBjbG9uZSgpOiB0cmFuc2Zvcm0ge1xuXHRcdHJldHVybiBuZXcgdHJhbnNmb3JtKHRoaXMubWF0Q29weSgpKVxuXHR9XG5cblx0cHVibGljIG1hdENvcHkoKTogZ2xtLm1hdDQge1xuXHRcdHJldHVybiBnbG0ubWF0NC5jb3B5KGdsbS5tYXQ0LmNyZWF0ZSgpLCB0aGlzLmRhdGEpXG5cdH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2dsL3V0aWwvbWF0cml4LXV0aWwudHMiLCJpbXBvcnQgeyBSZXNvdXJjZSB9IGZyb20gJy4uL2NvbW1vbi9yZXNvdXJjZSdcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vdHlwZS11dGlsJ1xuaW1wb3J0ICogYXMgY29tbW9uIGZyb20gJy4vY29tbW9uLXV0aWwnXG5cbi8vXG4vL1x0QXR0cmlidXRlXG4vL1xuXG5hYnN0cmFjdCBjbGFzcyBfQXR0cmlidXRlQmFzZSB7XG5cdG5hbWU6IGFueVxuXHRwcm90ZWN0ZWQgdmFsdWU6IGFueVxuXHR2YWxpZGF0b3I6IGFueVxuXHRjb25zdHJ1Y3RvcihuYW1lOiBhbnksIHZhbHVlOiBhbnksIHZhbGlkYXRvcjogYW55KSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZVxuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZVxuXHRcdHRoaXMudmFsaWRhdG9yID0gdmFsaWRhdG9yXG5cdH1cblx0YWJzdHJhY3QgcGVla1ZhbHVlKCk6IGFueVxuXHRhYnN0cmFjdCBzZXRWYWx1ZSguLi5hcmdzOiBhbnlbXSk6IGFueVxuXHRwdWJsaWMgYWN0aXZhdG9yPFQgZXh0ZW5kcyBfQXR0cmlidXRlQmFzZT5cblx0XHQodHlwZToge25ldyguLi5hcmdzIDogYW55W10pOiBUIDt9LCAuLi5hcmdzIDogYW55W10pOiBUIHtcblx0XHRyZXR1cm4gbmV3IHR5cGUoLi4uYXJncylcblx0fVxufVxuXG50eXBlIF9WYWxpZGF0b3JUPFQgZXh0ZW5kcyBfQXR0cmlidXRlQmFzZSwgSz4gPSAoYXR0cjogVCwgdmFsdWU6IEspID0+IHZvaWRcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIF9BdHRyaWJ1dGU8U1QgZXh0ZW5kcyB0eXBlcy5jbG9uZWFibGUsIFxuXHRHVCBleHRlbmRzIHR5cGVzLmNsb25lYWJsZSwgSyBleHRlbmRzIHN0cmluZz4gZXh0ZW5kcyBfQXR0cmlidXRlQmFzZSB7XG5cdG5hbWU6IEtcblx0dmFsdWU6IEdUID0gbnVsbFxuXHRpc0RpcnR5OiBib29sZWFuID0gdHJ1ZVxuXHR2YWxpZGF0b3I6IF9WYWxpZGF0b3JUPF9BdHRyaWJ1dGU8U1QsIEdULCBLPiwgU1Q+XG5cdGNvbnN0cnVjdG9yKG5hbWU6IEssIHZhbHVlOiBTVCwgdmFsaWRhdG9yOiBfVmFsaWRhdG9yVDxfQXR0cmlidXRlPFNULCBHVCwgSz4sIFNUPiA9IHZhbGlkYXRvcnMuQW55KSB7XG5cdFx0c3VwZXIobmFtZSwgdmFsdWUsIHZhbGlkYXRvcilcblx0XHR0aGlzLm5hbWUgPSBuYW1lXG5cdFx0dGhpcy5zZXRWYWxpZGF0b3IodmFsaWRhdG9yKVxuXHRcdHRoaXMudmFsaWRhdGUodmFsdWUpXG5cdFx0dGhpcy5zZXRWYWx1ZSh2YWx1ZSlcblx0fVxuXHRnZXRWYWx1ZSgpOiBHVCB7XG5cdFx0dGhpcy5pc0RpcnR5ID0gZmFsc2Vcblx0XHRyZXR1cm4gdGhpcy52YWx1ZVxuXHR9XG5cdHB1YmxpYyBwZWVrVmFsdWUoKTogR1Qge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlXG5cdH1cblx0c2V0VmFsdWUodmFsdWU6IFNUKTogdm9pZCB7XG5cdFx0dGhpcy52YWxpZGF0ZSh2YWx1ZSlcblx0XHR0aGlzLnZhbHVlID0gdGhpcy5fc2V0VmFsdWUodmFsdWUpXG5cdFx0dGhpcy5pc0RpcnR5ID0gdHJ1ZVxuXHR9XG5cdHByb3RlY3RlZCBhYnN0cmFjdCBfc2V0VmFsdWUodmFsdWU6IFNUKTogR1Rcblx0cHJvdGVjdGVkIHNldFZhbGlkYXRvcih2YWxpZGF0b3I6IF9WYWxpZGF0b3JUPF9BdHRyaWJ1dGU8U1QsIEdULCBLPiwgU1Q+KTogdm9pZCB7XG5cdFx0dGhpcy52YWxpZGF0b3IgPSB2YWxpZGF0b3Jcblx0fVxuXHRwcm90ZWN0ZWQgdmFsaWRhdGUodmFsdWU6IFNUKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMudmFsaWRhdG9yKSB0aGlzLnZhbGlkYXRvcih0aGlzLCB2YWx1ZSlcblx0fVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIHZhbGlkYXRvcnMge1xuXHRleHBvcnQgZnVuY3Rpb24gQW55PFNUIGV4dGVuZHMgdHlwZXMuY2xvbmVhYmxlLCBcblx0XHRHVCBleHRlbmRzIHR5cGVzLmNsb25lYWJsZSwgSyBleHRlbmRzIHN0cmluZz4oYXR0cjogX0F0dHJpYnV0ZTxTVCwgR1QsIEs+LCBkYXRhOiBTVCkge31cblx0ZXhwb3J0IGZ1bmN0aW9uIE51bWJlcjxTVCBleHRlbmRzIHR5cGVzLmNsb25lYWJsZSwgXG5cdFx0R1QgZXh0ZW5kcyB0eXBlcy5jbG9uZWFibGUsIEsgZXh0ZW5kcyBzdHJpbmc+KGF0dHI6IF9BdHRyaWJ1dGU8U1QsIEdULCBLPiwgZGF0YTogU1QpIHtcblx0XHRpZiAodHlwZW9mKGRhdGEpICE9PSAnbnVtYmVyJylcblx0XHRcdHRocm93IG5ldyBFcnJvcihgQXR0cmlidXRlIFwiJHthdHRyLm5hbWV9XCIgbXVzdCBiZSBhIG51bWJlci5gKVxuXHR9XG5cdGV4cG9ydCBmdW5jdGlvbiBWZWMzPFNUIGV4dGVuZHMgdHlwZXMuY2xvbmVhYmxlLCBcblx0XHRHVCBleHRlbmRzIHR5cGVzLmNsb25lYWJsZSwgSyBleHRlbmRzIHN0cmluZz4oYXR0cjogX0F0dHJpYnV0ZTxTVCwgR1QsIEs+LCBkYXRhOiBTVCkge1xuXHRcdGlmICghdHlwZXMuaXNORWxlbWVudEFycmF5KGRhdGEsIDMpKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYEF0dHJpYnV0ZSBcIiR7YXR0ci5uYW1lfVwiIG11c3QgYmUgYSB2ZWMzLCBvciBlcXVpdmFsZW50IGFycmF5LXR5cGUuYClcblx0XHR9XG5cdH1cblx0ZXhwb3J0IGZ1bmN0aW9uIFZlYzNPclRleHR1cmU8U1QgZXh0ZW5kcyB0eXBlcy5jbG9uZWFibGUsIFxuXHRcdEdUIGV4dGVuZHMgdHlwZXMuY2xvbmVhYmxlLCBLIGV4dGVuZHMgc3RyaW5nPihhdHRyOiBfQXR0cmlidXRlPFNULCBHVCwgSz4sIGRhdGE6IFNUKSB7XG5cdFx0aWYgKCF0eXBlcy5pc05FbGVtZW50QXJyYXkoZGF0YSwgMykgJiYgIXR5cGVzLmlzVGV4dHVyZShkYXRhKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBBdHRyaWJ1dGUgXCIke2F0dHIubmFtZX1cIiBtdXN0IGJlIGEgdmVjMyAob3IgZXF1aXZhbGVudCBhcnJheS10eXBlKSwgb3IgYSB0ZXh0dXJlLmApXG5cdFx0fVxuXHR9XG5cdGV4cG9ydCBmdW5jdGlvbiBCb29sZWFuPFNUIGV4dGVuZHMgdHlwZXMuY2xvbmVhYmxlLCBcblx0XHRHVCBleHRlbmRzIHR5cGVzLmNsb25lYWJsZSwgSyBleHRlbmRzIHN0cmluZz4oYXR0cjogX0F0dHJpYnV0ZTxTVCwgR1QsIEs+LCBkYXRhOiBTVCkge1xuXHRcdGlmICh0eXBlb2YoZGF0YSkgIT09ICdib29sZWFuJylcblx0XHRcdHRocm93IG5ldyBFcnJvcihgQXR0cmlidXRlIFwiJHthdHRyLm5hbWV9XCIgbXVzdCBiZSBhIGJvb2xlYW4uYClcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgX0F0dHJpYnV0ZU1hcDxUIGV4dGVuZHMgX0F0dHJpYnV0ZUJhc2U+IHtcblx0aXRlbXM6IHsgW2tleTogc3RyaW5nXTogVCB9ID0ge31cblxuXHRjb25zdHJ1Y3RvcigpIHt9XG5cblx0cHVibGljIGFkZCh2YWw6IFQpOiB2b2lkIHtcblx0XHR0aGlzLml0ZW1zW3ZhbC5uYW1lXSA9IHZhbFxuXHR9XG5cblx0cHVibGljIGdldEFsbCgpOiBBcnJheTxUPiB7XG5cdFx0bGV0IGl0ZW1zID0gdGhpcy5pdGVtc1xuXHRcdGxldCBrZXlzOiBBcnJheTxzdHJpbmc+ID0gT2JqZWN0LmtleXMoaXRlbXMpXG5cdFx0bGV0IHZhbHVlczogQXJyYXk8VD4gPSBrZXlzLm1hcChrZXkgPT4gaXRlbXNba2V5XSlcblx0XHRyZXR1cm4gdmFsdWVzXG5cdH1cblxuXHRwdWJsaWMgaGFzPFggZXh0ZW5kcyBzdHJpbmc+KGtleTogWCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLml0ZW1zW2tleV0gIT09IHVuZGVmaW5lZFxuXHR9XG5cblx0cHVibGljIGdldE9uZTxYIGV4dGVuZHMgc3RyaW5nPihrZXk6IFgpOiBUIHtcblx0XHRsZXQgaXRlbSA9IHRoaXMuaXRlbXNba2V5XVxuXHRcdGlmIChpdGVtID09PSB1bmRlZmluZWQpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFJlcXVlc3RlZCBub24tcHJlc2VudCBhdHRyaWJ1dGUgXCIke2tleX1cIi5gKVxuXHRcdHJldHVybiBpdGVtXG5cdH1cbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEF0dHJpYnV0YWJsZTxBdFQgZXh0ZW5kcyBfQXR0cmlidXRlQmFzZSwgTWFwVCBleHRlbmRzIF9BdHRyaWJ1dGVNYXA8QXRUPiwgXG5cdEsgZXh0ZW5kcyBzdHJpbmc+IGV4dGVuZHMgUmVzb3VyY2Uge1xuXHRhdHRyaWJ1dGVzOiBNYXBUXG5cblx0Y29uc3RydWN0b3IoKSB7IHN1cGVyKCkgfVxuXG5cdHByb3RlY3RlZCBhZGRBdHRyaWJ1dGUoYXR0cjogQXRUKTogdm9pZCB7XG5cdFx0dGhpcy5hdHRyaWJ1dGVzLmFkZChhdHRyKVxuXHR9XG5cblx0cHJvdGVjdGVkIGFkZEF0dHJpYnV0ZXMoLi4uYXR0cnM6IEFycmF5PEF0VD4pIHtcblx0XHRmb3IgKGxldCBhdHRyIG9mIGF0dHJzKSB7XG5cdFx0XHR0aGlzLmFkZEF0dHJpYnV0ZShhdHRyKVxuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBoYXNBdHRyaWJ1dGUobmFtZTogSyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmF0dHJpYnV0ZXMuaGFzKG5hbWUpXG5cdH1cblxuXHRwdWJsaWMgZW51bWVyYXRlQXR0cmlidXRlcygpOiBBcnJheTxBdFQ+IHtcblx0XHRyZXR1cm4gdGhpcy5hdHRyaWJ1dGVzLmdldEFsbCgpXG5cdH1cblxuXHRwdWJsaWMgZ2V0QXR0cmlidXRlKG5hbWU6IEspOiBBdFQge1xuXHRcdHJldHVybiB0aGlzLmF0dHJpYnV0ZXMuZ2V0T25lKG5hbWUpXG5cdH1cblxuXHRwcm90ZWN0ZWQgYWN0aXZhdG9yPEF0VCBleHRlbmRzIF9BdHRyaWJ1dGVCYXNlLCBNYXBUIGV4dGVuZHMgX0F0dHJpYnV0ZU1hcDxBdFQ+LCBcblx0XHRLIGV4dGVuZHMgc3RyaW5nLCBUIGV4dGVuZHMgQXR0cmlidXRhYmxlPEF0VCwgTWFwVCwgSz4+XG5cdFx0KHR5cGU6IHtuZXcoLi4uYXJncyA6IGFueVtdKTogVCA7fSwgLi4uYXJnczogYW55W10pOiBUIHtcblx0XHRyZXR1cm4gbmV3IHR5cGUoLi4uYXJncylcblx0fVxuXG5cdHByb3RlY3RlZCBfY2xvbmU8QXRUIGV4dGVuZHMgX0F0dHJpYnV0ZUJhc2UsIE1hcFQgZXh0ZW5kcyBfQXR0cmlidXRlTWFwPEF0VD4sIFxuXHRcdEsgZXh0ZW5kcyBzdHJpbmcsIFQgZXh0ZW5kcyBBdHRyaWJ1dGFibGU8QXRULCBNYXBULCBLPiwgXG5cdFx0WCBleHRlbmRzIEF0VD5cblx0XHQoYXR0cmlidXRhYmxlQ29uc3RydWN0b3I6IHtuZXcoLi4uYXJncyA6IGFueVtdKTogVCA7fSwgXG5cdFx0XHRhdHRyaWJ1dGVDb25zdHJ1Y3Rvcjoge25ldyguLi5hcmdzIDogYW55W10pOiBYIDt9LCAuLi5hcmdzOiBhbnlbXSk6IFQge1xuXG5cdFx0bGV0IGNvcHk6IFQgPSB0aGlzLmFjdGl2YXRvcihhdHRyaWJ1dGFibGVDb25zdHJ1Y3RvciwgLi4uYXJncylcblx0XHRmb3IgKGxldCBhdHRyIG9mIHRoaXMuZW51bWVyYXRlQXR0cmlidXRlcygpKSB7XG5cdFx0XHRpZiAoIWNvcHkuaGFzQXR0cmlidXRlKGF0dHIubmFtZSkpIHtcblx0XHRcdFx0bGV0IGNvcHlBdHQgPSBjb21tb24uY2xvbmUoYXR0ci5wZWVrVmFsdWUoKSlcblx0XHRcdFx0bGV0IGF0dHJfID0gYXR0ci5hY3RpdmF0b3IoYXR0cmlidXRlQ29uc3RydWN0b3IsIGF0dHIubmFtZSwgY29weUF0dCwgYXR0ci52YWxpZGF0b3IpXG5cdFx0XHRcdGNvcHkuYWRkQXR0cmlidXRlKGF0dHJfKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29weS5nZXRBdHRyaWJ1dGUoYXR0ci5uYW1lKS5zZXRWYWx1ZShjb21tb24uY2xvbmUoYXR0ci5wZWVrVmFsdWUoKSkpXG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBjb3B5XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC91dGlsL2F0dHJpYnV0ZS11dGlsLnRzIiwiZXhwb3J0IGFic3RyYWN0IGNsYXNzIERlZmF1bHRzPFQ+IHtcblx0cHVibGljIG9wdGlvbnM6IFRcblx0Y29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHsgdGhpcy5vcHRpb25zID0gdGhpcy5nZXQoLi4uYXJncykgfVxuXHRwdWJsaWMgYWJzdHJhY3QgZ2V0KC4uLmFyZ3M6IGFueVtdKTogVFxuXHRwdWJsaWMgc2V0PEsgZXh0ZW5kcyBrZXlvZiBULCBWPihuYW1lOiBLLCB2YWx1ZTogVFtLXSk6IERlZmF1bHRzPFQ+IHtcblx0XHR0aGlzLm9wdGlvbnNbbmFtZV0gPSB2YWx1ZVxuXHRcdHJldHVybiB0aGlzXG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC91dGlsL2RlZmF1bHQtdXRpbC50cyIsImltcG9ydCB7IEJhc2ljIH0gZnJvbSAnLi4vc2hhZGVycy9zaGFkZXItYmFzaWMnXG5pbXBvcnQgeyBQQlIxIH0gZnJvbSAnLi4vc2hhZGVycy9zaGFkZXItcGJyMSdcbmltcG9ydCB7IFNreWJveCB9IGZyb20gJy4uL3NoYWRlcnMvc2hhZGVyLXNreWJveCdcbmltcG9ydCB7IFZvbHVtZSB9IGZyb20gJy4uL3NoYWRlcnMvc2hhZGVyLXZvbHVtZSdcbmltcG9ydCB7IEdlblNoYWRvd3MxIH0gZnJvbSAnLi4vc2hhZGVycy9zaGFkZXItZ2VuLXNoYWRvd3MxJ1xuaW1wb3J0IHsgVXNlU2hhZG93czEgfSBmcm9tICcuLi9zaGFkZXJzL3NoYWRlci11c2Utc2hhZG93czEnXG5cbmNvbnN0IFNoYWRlckxpYnJhcnkgPSB7XG5cdEJhc2ljLFxuXHRHZW5TaGFkb3dzMSxcblx0VXNlU2hhZG93czEsXG5cdFBCUjEsXG5cdFNreWJveCxcblx0Vm9sdW1lLFxufVxuXG5leHBvcnQgeyBTaGFkZXJMaWJyYXJ5IH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC9zaGFkZXIvc2hhZGVyLWxpYnJhcnkudHMiLCJpbXBvcnQgeyBTaGFkZXJTb3VyY2UsIFNoYWRlclByb2dyYW1Tb3VyY2UsIFNoYWRlclR5cGVzIH0gZnJvbSAnLi4vc2hhZGVyL3NoYWRlcidcblxubmFtZXNwYWNlIF9zb3VyY2VzIHtcblx0ZXhwb3J0IGNvbnN0IHZlcnRleDogc3RyaW5nID0gYFxuXHRcdGF0dHJpYnV0ZSB2ZWMzIGluX3Bvc2l0aW9uO1xuXHRcdGF0dHJpYnV0ZSB2ZWMzIGluX25vcm1hbDtcblx0XHRhdHRyaWJ1dGUgdmVjMiBpbl91djtcblxuXHRcdHVuaWZvcm0gbWF0NCBtb2RlbDtcblx0XHR1bmlmb3JtIG1hdDQgcHJvamVjdGlvbjtcblx0XHR1bmlmb3JtIG1hdDQgdmlldztcblxuXHRcdHZvaWQgbWFpbigpIHtcblx0XHRcdGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbiAqIHZpZXcgKiBtb2RlbCAqIHZlYzQoaW5fcG9zaXRpb24sIDEuMCk7XG5cdFx0fVxuXHRgXG5cdGV4cG9ydCBjb25zdCBmcmFnbWVudDogc3RyaW5nID0gYFxuXHRcdHByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xuXG5cdFx0dW5pZm9ybSB2ZWMzIGFsYmVkbztcblxuXHRcdHZvaWQgbWFpbigpIHtcbiAgICAgIFx0XHRnbF9GcmFnQ29sb3IgPSB2ZWM0KGFsYmVkbywgMS4wKTtcbiAgICBcdH1cblx0YFxufVxuXG5jb25zdCBCYXNpYzogU2hhZGVyUHJvZ3JhbVNvdXJjZSA9IHtcblx0c291cmNlczogW1xuXHRcdHtcblx0XHRcdHNvdXJjZTogX3NvdXJjZXMudmVydGV4LFxuXHRcdFx0dHlwZTogU2hhZGVyVHlwZXMuVkVSVEVYLFxuXHRcdFx0dW5pZm9ybXM6IFsnbW9kZWwnLCAndmlldycsICdwcm9qZWN0aW9uJ11cblx0XHR9LFxuXHRcdHtcblx0XHRcdHNvdXJjZTogX3NvdXJjZXMuZnJhZ21lbnQsXG5cdFx0XHR0eXBlOiBTaGFkZXJUeXBlcy5GUkFHTUVOVCxcblx0XHRcdHVuaWZvcm1zOiBbJ2FsYmVkbyddXG5cdFx0fVxuXHRdXG59XG5cbmV4cG9ydCB7IEJhc2ljIH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC9zaGFkZXJzL3NoYWRlci1iYXNpYy50cyIsImltcG9ydCB7IFNoYWRlclNvdXJjZSwgU2hhZGVyUHJvZ3JhbVNvdXJjZSwgU2hhZGVyVHlwZXMgfSBmcm9tICcuLi9zaGFkZXIvc2hhZGVyJ1xuXG5uYW1lc3BhY2UgX3NvdXJjZXMge1xuXHRleHBvcnQgY29uc3QgdmVydGV4OiBzdHJpbmcgPSBgXG5cdFx0YXR0cmlidXRlIHZlYzMgaW5fcG9zaXRpb247XG5cdFx0YXR0cmlidXRlIHZlYzMgaW5fbm9ybWFsO1xuXHRcdGF0dHJpYnV0ZSB2ZWMyIGluX3V2O1xuXG5cdFx0dW5pZm9ybSBtYXQ0IG1vZGVsO1xuXHRcdHVuaWZvcm0gbWF0NCB2aWV3O1xuXHRcdHVuaWZvcm0gbWF0NCBwcm9qZWN0aW9uO1xuXG5cdFx0dmFyeWluZyBtZWRpdW1wIHZlYzMgdl9wb3NpdGlvbjtcblx0XHR2YXJ5aW5nIG1lZGl1bXAgdmVjMiB2X3V2O1xuXHRcdHZhcnlpbmcgbWVkaXVtcCB2ZWMzIHZfbm9ybWFsO1xuXG5cdFx0dm9pZCBtYWluKCkge1xuXHRcdFx0dl9wb3NpdGlvbiA9IHZlYzMobW9kZWwgKiB2ZWM0KGluX3Bvc2l0aW9uLCAxLjApKTtcblx0XHRcdHZfdXYgPSBpbl91djtcblx0XHRcdHZfbm9ybWFsID0gaW5fbm9ybWFsO1xuXHRcdFx0Z2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uICogdmlldyAqIG1vZGVsICogdmVjNChpbl9wb3NpdGlvbiwgMS4wKTtcblx0XHR9XG5cdGBcblx0ZXhwb3J0IGNvbnN0IGZyYWdtZW50OiBzdHJpbmcgPSBgXG5cblx0XHRwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcblxuXHRcdGNvbnN0IGZsb2F0IFBJID0gMy4xNDE1OTI2NTM1OTtcblxuXHRcdGZsb2F0IGRpc3RyaWJ1dGlvbl9nZ3godmVjMyBOLCB2ZWMzIEgsIGZsb2F0IHJvdWdobmVzcyk7XG5cdFx0ZmxvYXQgZ2VvbWV0cnlfc2NobGlja19nZ3goZmxvYXQgTmRvdFYsIGZsb2F0IHJvdWdobmVzcyk7XG5cdFx0ZmxvYXQgZ2VvbWV0cnlfc21pdGgodmVjMyBOLCB2ZWMzIFYsIHZlYzMgTCwgZmxvYXQgcm91Z2huZXNzKTtcblx0XHR2ZWMzIGZyZXNuZWxfc2NobGljayhmbG9hdCBjb3NfdGhldGEsIHZlYzMgRjApO1xuXG5cdFx0dmVjMyBQQlIoXG5cdFx0ICAgICB2ZWMzIG5vcm1hbHMsXG5cdFx0ICAgICB2ZWMzIGFsYmVkbyxcblx0XHQgICAgIGZsb2F0IHJvdWdobmVzcyxcblx0XHQgICAgIGZsb2F0IG1ldGFsbGljLFxuXHRcdCAgICAgdmVjMyBjYW1fcG9zaXRpb24sXG5cdFx0ICAgICB2ZWMzIHdvcmxkX3Bvc2l0aW9uLFxuXHRcdCAgICAgdmVjMyBsaWdodF9wb3NpdGlvbixcblx0XHQgICAgIHZlYzMgbGlnaHRfY29sb3IsXG5cdFx0ICAgICBib29sIGlzX2RpcmVjdGlvbmFsKSB7XG5cdFx0ICAgIFxuXHRcdCAgICB2ZWMzIEYwID0gdmVjMygwLjA0KTtcblx0XHQgICAgRjAgPSBtaXgoRjAsIGFsYmVkbywgbWV0YWxsaWMpO1xuXHRcdCAgICBcblx0XHQgICAgdmVjMyBOID0gbm9ybWFsaXplKG5vcm1hbHMpO1xuXHRcdCAgICB2ZWMzIFYgPSBub3JtYWxpemUoY2FtX3Bvc2l0aW9uIC0gd29ybGRfcG9zaXRpb24pO1xuXHRcdCAgICBcblx0XHQgICAgdmVjMyBMO1xuXG5cdFx0ICAgIGlmICghaXNfZGlyZWN0aW9uYWwpIHtcblx0XHQgICAgXHRMID0gbm9ybWFsaXplKGxpZ2h0X3Bvc2l0aW9uIC0gd29ybGRfcG9zaXRpb24pO1xuXHRcdCAgICB9IGVsc2Uge1xuXHRcdCAgICBcdEwgPSBub3JtYWxpemUoLWxpZ2h0X3Bvc2l0aW9uKTtcblx0XHQgICAgfVxuXG5cdFx0ICAgIHZlYzMgSCA9IG5vcm1hbGl6ZShWICsgTCk7XG5cblx0XHQgICAgZmxvYXQgYXR0ZW51YXRpb24gPSAxLjA7XG5cdFx0ICAgIFxuXHRcdCAgICBpZiAoIWlzX2RpcmVjdGlvbmFsKSB7XG5cdFx0ICAgIFx0ZmxvYXQgZGlzdGFuY2UgPSBsZW5ndGgobGlnaHRfcG9zaXRpb24gLSB3b3JsZF9wb3NpdGlvbik7XG5cdFx0ICAgIFx0YXR0ZW51YXRpb24gPSAxLjAgLyAoZGlzdGFuY2UgKiBkaXN0YW5jZSAqIDAuMDAwMik7XG5cdFx0ICAgIH1cblx0XHQgICAgXG5cdFx0ICAgIHZlYzMgcmFkaWFuY2UgPSBsaWdodF9jb2xvciAqIGF0dGVudWF0aW9uO1xuXHRcdCAgICBcblx0XHQgICAgdmVjMyBGID0gZnJlc25lbF9zY2hsaWNrKG1heChkb3QoSCwgViksIDAuMCksIEYwKTtcblx0XHQgICAgZmxvYXQgTkRGID0gZGlzdHJpYnV0aW9uX2dneChOLCBILCByb3VnaG5lc3MpO1xuXHRcdCAgICBmbG9hdCBHID0gZ2VvbWV0cnlfc21pdGgoTiwgViwgTCwgcm91Z2huZXNzKTtcblx0XHQgICAgdmVjMyBudW1lciA9IHZlYzMoTkRGKSAqIHZlYzMoRykgKiBGO1xuXHRcdCAgICBmbG9hdCBkZW5vbSA9IDQuMCAqIG1heChkb3QoTiwgViksIDAuMCkgKiBtYXgoZG90KE4sIEwpLCAwLjApICsgMC4wMDE7XG5cdFx0ICAgIHZlYzMgc3BlY3VsYXIgPSBudW1lciAvIGRlbm9tO1xuXHRcdCAgICBcblx0XHQgICAgdmVjMyBrUyA9IEY7XG5cdFx0ICAgIHZlYzMga0QgPSB2ZWMzKDEuMCkgLSBrUztcblx0XHQgICAga0QgKj0gMS4wIC0gbWV0YWxsaWM7XG5cdFx0ICAgIFxuXHRcdCAgICBmbG9hdCBOZG90TCA9IG1heChkb3QoTiwgTCksIDAuMCk7XG5cdFx0ICAgIHJldHVybiAoa0QgKiBhbGJlZG8gLyBQSSArIHNwZWN1bGFyKSAqIHJhZGlhbmNlICogTmRvdEw7XG5cdFx0fVxuXG5cdFx0Ly9cblx0XHQvLyAgRnJlc25lbCBjb21wb25lbnQgKEYpXG5cdFx0Ly9cblxuXHRcdHZlYzMgZnJlc25lbF9zY2hsaWNrKGZsb2F0IGNvc1RoZXRhLCB2ZWMzIEYwKSB7XG5cdFx0ICAgIHJldHVybiBGMCArICgxLjAgLSBGMCkgKiBwb3coMS4wIC0gY29zVGhldGEsIDUuMCk7XG5cdFx0fVxuXG5cdFx0Ly9cblx0XHQvLyAgTm9ybWFsIGRpc3RyaWJ1dGlvbiBjb21wb25lbnQgKEQpXG5cdFx0Ly9cblxuXHRcdGZsb2F0IGRpc3RyaWJ1dGlvbl9iZWNrbWFuKHZlYzMgaCwgdmVjMyBuLCBmbG9hdCByb3VnaG5lc3MpIHtcblx0XHQgICAgZmxvYXQgYSA9IHJvdWdobmVzcyAqIHJvdWdobmVzcztcblx0XHQgICAgZmxvYXQgYTIgPSBhICogYTtcblx0XHQgICAgZmxvYXQgbl9kb3RfaCA9IG1heChkb3QobiwgaCksIDAuMCk7XG5cdFx0ICAgIGZsb2F0IG5fZG90X2gyID0gbl9kb3RfaCAqIG5fZG90X2g7XG5cdFx0ICAgIGZsb2F0IHBhcnRfYSA9IDEuMCAvIChQSSAqIGEyICogcG93KG5fZG90X2gsIDQuMCkpO1xuXHRcdCAgICBmbG9hdCBleHBfY29tcG9uZW50ID0gKG5fZG90X2gyIC0gMS4wKSAvIChhMiAqIG5fZG90X2gyKTtcblx0XHQgICAgcmV0dXJuIHBhcnRfYSAqIGV4cChleHBfY29tcG9uZW50KTtcblx0XHR9XG5cblx0XHRmbG9hdCBkaXN0cmlidXRpb25fZ2d4KHZlYzMgTiwgdmVjMyBILCBmbG9hdCByb3VnaG5lc3MpIHtcblx0XHQgICAgZmxvYXQgYSA9IHJvdWdobmVzcyAqIHJvdWdobmVzcztcblx0XHQgICAgZmxvYXQgYTIgPSBhICogYTtcblx0XHQgICAgZmxvYXQgTmRvdEggPSBtYXgoZG90KE4sIEgpLCAwLjApO1xuXHRcdCAgICBmbG9hdCBOZG90SDIgPSBOZG90SCAqIE5kb3RIO1xuXHRcdCAgICBcblx0XHQgICAgZmxvYXQgZGVub20gPSAoTmRvdEgyICogKGEyLTEuMCkgKyAxLjApO1xuXHRcdCAgICBkZW5vbSA9IFBJICogZGVub20gKiBkZW5vbTtcblx0XHQgICAgXG5cdFx0ICAgIHJldHVybiBhMiAvIGRlbm9tO1xuXHRcdH1cblxuXHRcdC8vXG5cdFx0Ly8gIEdlb21ldHJ5IGRpc3RyaWJ1dGlvbiBjb21wb25lbnQgKEcpXG5cdFx0Ly9cblxuXHRcdGZsb2F0IGdlb21ldHJ5X3NjaGxpY2tfZ2d4KGZsb2F0IE5kb3RWLCBmbG9hdCByb3VnaG5lc3MpIHtcblx0XHQgICAgZmxvYXQgciA9IHJvdWdobmVzcyArIDEuMDtcblx0XHQgICAgLy8gIGRpcmVjdCBsaWdodFxuXHRcdCAgICBmbG9hdCBrID0gKHIqcikgLyA4LjA7XG5cdFx0ICAgIC8vICBJQkxcblx0XHQgICAgLy8gIGZsb2F0IGsgPSAocm91Z2huZXNzICogcm91Z2huZXNzKSAvIDI7XG5cdFx0ICAgIGZsb2F0IGRlbm9tID0gTmRvdFYgKiAoMS4wIC0gaykgKyBrO1xuXHRcdCAgICByZXR1cm4gTmRvdFYgLyBkZW5vbTtcblx0XHR9XG5cblx0XHRmbG9hdCBnZW9tZXRyeV9zbWl0aCh2ZWMzIE4sIHZlYzMgViwgdmVjMyBMLCBmbG9hdCByb3VnaG5lc3MpIHtcblx0XHQgICAgZmxvYXQgTmRvdFYgPSBtYXgoZG90KE4sIFYpLCAwLjApO1xuXHRcdCAgICBmbG9hdCBOZG90TCA9IG1heChkb3QoTiwgTCksIDAuMCk7XG5cdFx0ICAgIGZsb2F0IGdneDIgPSBnZW9tZXRyeV9zY2hsaWNrX2dneChOZG90Viwgcm91Z2huZXNzKTtcblx0XHQgICAgZmxvYXQgZ2d4MSA9IGdlb21ldHJ5X3NjaGxpY2tfZ2d4KE5kb3RMLCByb3VnaG5lc3MpO1xuXHRcdCAgICByZXR1cm4gZ2d4MSAqIGdneDI7XG5cdFx0fVxuXG5cdFx0c3RydWN0IFBvaW50TGlnaHQge1xuXHRcdFx0dmVjMyBwb3NpdGlvbjtcblx0XHRcdHZlYzMgY29sb3I7XG5cdFx0XHR2ZWMzIG1hc2s7XG5cdFx0fTtcblxuXHRcdHN0cnVjdCBEaXJlY3Rpb25hbExpZ2h0IHtcblx0XHRcdHZlYzMgZGlyZWN0aW9uO1xuXHRcdFx0dmVjMyBjb2xvcjtcblx0XHRcdHZlYzMgbWFzaztcblx0XHR9O1xuXG5cdFx0Y29uc3QgaW50IG5fcG9pbnRfbGlnaHRzID0gMjtcblx0XHRjb25zdCBpbnQgbl9kaXJlY3Rpb25hbF9saWdodHMgPSAxO1xuXG5cdFx0dW5pZm9ybSBQb2ludExpZ2h0IHBvaW50X2xpZ2h0c1tuX3BvaW50X2xpZ2h0c107XG5cdFx0dW5pZm9ybSBEaXJlY3Rpb25hbExpZ2h0IGRpcmVjdGlvbmFsX2xpZ2h0c1tuX2RpcmVjdGlvbmFsX2xpZ2h0c107XG5cblx0XHR1bmlmb3JtIHZlYzMgY2FtX3Bvc2l0aW9uO1xuXG5cdFx0dW5pZm9ybSB2ZWMzIGFsYmVkbztcblx0XHR1bmlmb3JtIGZsb2F0IHJvdWdobmVzcztcblx0XHR1bmlmb3JtIGZsb2F0IG1ldGFsbGljO1xuXG5cdFx0dmFyeWluZyBtZWRpdW1wIHZlYzMgdl9wb3NpdGlvbjtcblx0XHR2YXJ5aW5nIG1lZGl1bXAgdmVjMiB2X3V2O1xuXHRcdHZhcnlpbmcgbWVkaXVtcCB2ZWMzIHZfbm9ybWFsO1xuXG5cdFx0dm9pZCBtYWluKCkge1xuXG5cdFx0XHR2ZWMzIGZpbmFsX2NvbG9yID0gYWxiZWRvO1xuXG5cdFx0XHR2ZWMzIExvID0gdmVjMygwLjApO1xuXG5cdFx0XHQvL1x0cG9pbnQgbGlnaHRzXG5cblx0XHRcdGZvciAoaW50IGkgPSAwOyBpIDwgbl9wb2ludF9saWdodHM7IGkrKykge1xuXHRcdFx0XHRib29sIGlzX2RpcmVjdGlvbmFsID0gZmFsc2U7XG5cdFx0XHRcdHZlYzMgcmVzID0gUEJSKHZfbm9ybWFsLCBhbGJlZG8sIHJvdWdobmVzcywgbWV0YWxsaWMsIFxuXHRcdFx0XHRcdGNhbV9wb3NpdGlvbiwgdl9wb3NpdGlvbiwgcG9pbnRfbGlnaHRzW2ldLnBvc2l0aW9uLCBwb2ludF9saWdodHNbaV0uY29sb3IsIGlzX2RpcmVjdGlvbmFsKTtcblx0XHRcdFx0cmVzICo9IHBvaW50X2xpZ2h0c1tpXS5tYXNrO1xuXHRcdFx0XHRMbyArPSByZXM7XG5cdFx0XHR9XG5cblx0XHRcdC8vXHRkaXJlY3Rpb25hbCBsaWdodHNcblxuXHRcdFx0Zm9yIChpbnQgaSA9IDA7IGkgPCBuX2RpcmVjdGlvbmFsX2xpZ2h0czsgaSsrKSB7XG5cdFx0XHRcdGJvb2wgaXNfZGlyZWN0aW9uYWwgPSB0cnVlO1xuXHRcdFx0XHR2ZWMzIHJlcyA9IFBCUih2X25vcm1hbCwgYWxiZWRvLCByb3VnaG5lc3MsIG1ldGFsbGljLCBcblx0XHRcdFx0XHRjYW1fcG9zaXRpb24sIHZfcG9zaXRpb24sIGRpcmVjdGlvbmFsX2xpZ2h0c1tpXS5kaXJlY3Rpb24sIGRpcmVjdGlvbmFsX2xpZ2h0c1tpXS5jb2xvciwgaXNfZGlyZWN0aW9uYWwpO1xuXHRcdFx0XHRyZXMgKj0gZGlyZWN0aW9uYWxfbGlnaHRzW2ldLm1hc2s7XG5cdFx0XHRcdExvICs9IHJlcztcblx0XHRcdH1cblxuXHRcdFx0dmVjMyBhbWJpZW50ID0gdmVjMygwLjAzKSAqIGFsYmVkbztcblxuXHRcdCAgICBmaW5hbF9jb2xvciA9IGFtYmllbnQgKyBMbztcblx0XHQgICAgZmluYWxfY29sb3IgPSBmaW5hbF9jb2xvciAvIChmaW5hbF9jb2xvciArIHZlYzMoMS4wKSk7XG5cdFx0ICAgIGZpbmFsX2NvbG9yID0gcG93KGZpbmFsX2NvbG9yLCB2ZWMzKDEuMC8yLjIpKTtcblxuICAgICAgXHRcdGdsX0ZyYWdDb2xvciA9IHZlYzQoZmluYWxfY29sb3IsIDEuMCk7XG4gICAgXHR9XG5cdGBcbn1cblxuY29uc3QgUEJSMTogU2hhZGVyUHJvZ3JhbVNvdXJjZSA9IHtcblx0c291cmNlczogW1xuXHRcdHtcblx0XHRcdHNvdXJjZTogX3NvdXJjZXMudmVydGV4LFxuXHRcdFx0dHlwZTogU2hhZGVyVHlwZXMuVkVSVEVYLFxuXHRcdFx0dW5pZm9ybXM6IFsnbW9kZWwnLCAndmlldycsICdwcm9qZWN0aW9uJ11cblx0XHR9LFxuXHRcdHtcblx0XHRcdHNvdXJjZTogX3NvdXJjZXMuZnJhZ21lbnQsXG5cdFx0XHR0eXBlOiBTaGFkZXJUeXBlcy5GUkFHTUVOVCxcblx0XHRcdHVuaWZvcm1zOiBbJ3BvaW50JywgJ2RpcmVjdGlvbmFsJywgJ2RpcmVjdGlvbicsICdwb3NpdGlvbicsICdjb2xvcicsICdtYXNrJyxcblx0XHRcdFx0ICdhbGJlZG8nLCAncm91Z2huZXNzJywgJ21ldGFsbGljJywgJ2NhbWVyYV9wb3NpdGlvbiddXG5cdFx0fVxuXHRdXG59XG5cbmV4cG9ydCB7IFBCUjEgfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2dsL3NoYWRlcnMvc2hhZGVyLXBicjEudHMiLCJpbXBvcnQgeyBTaGFkZXJTb3VyY2UsIFNoYWRlclByb2dyYW1Tb3VyY2UsIFNoYWRlclR5cGVzIH0gZnJvbSAnLi4vc2hhZGVyL3NoYWRlcidcblxubmFtZXNwYWNlIF9zb3VyY2VzIHtcblx0ZXhwb3J0IGNvbnN0IHZlcnRleDogc3RyaW5nID0gYFxuXHRcdGF0dHJpYnV0ZSB2ZWMzIGluX3Bvc2l0aW9uO1xuXHRcdGF0dHJpYnV0ZSB2ZWMzIGluX25vcm1hbDtcblx0XHRhdHRyaWJ1dGUgdmVjMiBpbl91djtcblxuXHRcdHVuaWZvcm0gbWF0NCBwcm9qZWN0aW9uO1xuXHRcdHVuaWZvcm0gbWF0NCB2aWV3O1xuXHRcdHVuaWZvcm0gbWF0NCBtb2RlbDtcblxuXHRcdHZhcnlpbmcgbWVkaXVtcCB2ZWMyIHZfdXY7XG5cdFx0dmFyeWluZyBtZWRpdW1wIHZlYzMgdl9ub3JtYWw7XG5cblx0XHR2b2lkIG1haW4oKSB7XG5cdFx0XHRtYXQ0IHZpZXdUID0gbWF0NChtYXQzKHZpZXcpKTtcblx0XHRcdHZlYzQgcG9zID0gcHJvamVjdGlvbiAqIHZpZXdUICogdmVjNChpbl9wb3NpdGlvbiwgMS4wKTtcblx0XHRcdHZfdXYgPSBpbl91djtcblx0XHRcdHZfbm9ybWFsID0gaW5fbm9ybWFsO1xuXHRcdFx0Z2xfUG9zaXRpb24gPSBwb3MueHl3dztcblx0XHR9XG5cdGBcblx0ZXhwb3J0IGNvbnN0IGZyYWdtZW50OiBzdHJpbmcgPSBgXG5cblx0XHRwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcblxuXHRcdHZhcnlpbmcgbWVkaXVtcCB2ZWMyIHZfdXY7XG5cdFx0dmFyeWluZyBtZWRpdW1wIHZlYzMgdl9ub3JtYWw7XG5cblx0XHR1bmlmb3JtIHNhbXBsZXIyRCBhbGJlZG87XG5cblx0XHR2b2lkIG1haW4oKSB7XG4gICAgICBcdFx0Z2xfRnJhZ0NvbG9yID0gdGV4dHVyZTJEKGFsYmVkbywgdl91dik7XG4gICAgXHR9XG5cdGBcbn1cblxuY29uc3QgU2t5Ym94OiBTaGFkZXJQcm9ncmFtU291cmNlID0ge1xuXHRzb3VyY2VzOiBbXG5cdFx0e1xuXHRcdFx0c291cmNlOiBfc291cmNlcy52ZXJ0ZXgsXG5cdFx0XHR0eXBlOiBTaGFkZXJUeXBlcy5WRVJURVgsXG5cdFx0XHR1bmlmb3JtczogWyd2aWV3JywgJ3Byb2plY3Rpb24nXVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0c291cmNlOiBfc291cmNlcy5mcmFnbWVudCxcblx0XHRcdHR5cGU6IFNoYWRlclR5cGVzLkZSQUdNRU5ULFxuXHRcdFx0dW5pZm9ybXM6IFsnYWxiZWRvJ11cblx0XHR9XG5cdF1cbn1cblxuZXhwb3J0IHsgU2t5Ym94IH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC9zaGFkZXJzL3NoYWRlci1za3lib3gudHMiLCJpbXBvcnQgeyBTaGFkZXIsIFNoYWRlclByb2dyYW0sIFNoYWRlclNvdXJjZSwgU2hhZGVyUHJvZ3JhbVNvdXJjZSwgU2hhZGVyVHlwZXMgfSBmcm9tICcuL3NoYWRlcidcblxuY2xhc3MgU2hhZGVyRmFjdG9yeSB7XG5cdHB1YmxpYyBzdGF0aWMgQ3JlYXRlKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsIHByb2dyYW1Tb3VyY2U6IFNoYWRlclByb2dyYW1Tb3VyY2UpOiBTaGFkZXJQcm9ncmFtIHtcblx0XHRsZXQgc2hhZGVyczogQXJyYXk8U2hhZGVyPiA9IHByb2dyYW1Tb3VyY2Uuc291cmNlcy5tYXAoKHNvdXJjZTogU2hhZGVyU291cmNlKSA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IFNoYWRlcihnbCwgc291cmNlKVxuXHRcdH0pXG5cdFx0bGV0IHByb2dyYW06IFNoYWRlclByb2dyYW0gPSBuZXcgU2hhZGVyUHJvZ3JhbShnbClcblx0XHR0cnkge1xuXHRcdFx0cHJvZ3JhbS5hdHRhY2goc2hhZGVycylcblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpXG5cdFx0XHRyZXR1cm4gbnVsbFxuXHRcdH1cblx0XHRyZXR1cm4gcHJvZ3JhbVxuXHR9XG59XG5cbmV4cG9ydCB7IFNoYWRlckZhY3RvcnkgfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2dsL3NoYWRlci9zaGFkZXItZmFjdG9yeS50cyIsImltcG9ydCB7IHF1YXQsIG1hdDQsIHZlYzMsIGdsTWF0cml4IH0gZnJvbSAnZ2wtbWF0cml4J1xuaW1wb3J0IHsgdmVjdG9yLCB0eXBlcyB9IGZyb20gJy4uL3V0aWwvdXRpbCdcbmltcG9ydCAqIGFzIG1hdGggZnJvbSAnLi4vbWF0aC93Z2wtbWF0aCdcblxudHlwZSBkaXJlY3Rpb25zID0gJ2ZvcndhcmRzJyB8ICdiYWNrd2FyZHMnIHwgJ2xlZnQnIHwgJ3JpZ2h0J1xuXG5jbGFzcyBDYW1lcmEge1xuXG5cdHlhdzogbnVtYmVyID0gLTkwLjBcblx0cGl0Y2g6IG51bWJlciA9IDAuMFxuXHRwb3NpdGlvbjogdmVjM1xuXHR1cDogdmVjM1xuXHR3b3JsZFVwOiB2ZWMzXG5cdHJpZ2h0OiB2ZWMzXG5cdGZyb250OiB2ZWMzXG5cdG1vdmVtZW50U3BlZWQ6IG51bWJlciA9IDIuNVxuXHRyb3RhdGlvblNlbnNpdGl2aXR5OiBudW1iZXIgPSAwLjFcblx0dGFyZ2V0OiB2ZWMzIHwgbnVsbCA9IG51bGxcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLnBvc2l0aW9uID0gdmVjMy5mcm9tVmFsdWVzKDAsIDAsIDApXG5cdFx0dGhpcy51cCA9IHZlYzMuZnJvbVZhbHVlcygwLCAxLCAwKVxuXHRcdHRoaXMud29ybGRVcCA9IHZlYzMuZnJvbVZhbHVlcygwLCAxLCAwKVxuXHRcdHRoaXMucmlnaHQgPSB2ZWMzLmNyZWF0ZSgpXG5cdFx0dGhpcy5mcm9udCA9IHZlYzMuZnJvbVZhbHVlcygwLCAwLCAtMSlcblx0XHR0aGlzLnVwZGF0ZUNhbWVyYVZlY3RvcnMoKVxuXHR9XG5cblx0cHVibGljIGdldFZpZXdNYXRyaXgoKTogbWF0NCB7XG5cdFx0bGV0IGhhc1RhcmdldCA9IHRoaXMudGFyZ2V0ICE9PSBudWxsXG5cdFx0bGV0IHRhcmdldDogdmVjMyA9IGhhc1RhcmdldCA/IHRoaXMudGFyZ2V0IDogdmVjMy5jcmVhdGUoKVxuXHRcdGxldCB2aWV3OiBtYXQ0ID0gbWF0NC5jcmVhdGUoKVxuXHRcdGxldCBwb3NpdGlvbiA9IHRoaXMucG9zaXRpb25cblx0XHRsZXQgZnJvbnQgPSB0aGlzLmZyb250XG5cdFx0bGV0IHVwID0gdGhpcy51cFxuXHRcdGlmICghaGFzVGFyZ2V0KVxuXHRcdFx0dmVjMy5hZGQodGFyZ2V0LCBwb3NpdGlvbiwgZnJvbnQpXG5cdFx0bWF0aC5sb29rQXQodmlldywgcG9zaXRpb24sIHRhcmdldCwgdXApXG5cdFx0cmV0dXJuIHZpZXdcblx0fVxuXG5cdHB1YmxpYyBsb29rQXQod2hlcmU6IHR5cGVzLnZlYzNDb252ZXJ0aWJsZSB8IG51bGwpIHtcblx0XHRpZiAod2hlcmUgPT09IG51bGwpIHtcblx0XHRcdHRoaXMudGFyZ2V0ID0gbnVsbFxuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXHRcdHRoaXMudGFyZ2V0ID0gdmVjdG9yLnJlcXVpcmVWZWMzKHdoZXJlKVxuXHR9XG5cblx0cHVibGljIHNldFBvc2l0aW9uKHBvc2l0aW9uOiB0eXBlcy52ZWMzQ29udmVydGlibGUpIHtcblx0XHR0aGlzLnBvc2l0aW9uID0gdmVjdG9yLnJlcXVpcmVWZWMzKHBvc2l0aW9uKVxuXHR9XG5cblx0cHVibGljIHNldFBpdGNoKHBpdGNoOiBudW1iZXIpIHtcblx0XHR0aGlzLnBpdGNoID0gdGhpcy5jb25zdHJhaW5QaXRjaChwaXRjaClcblx0XHR0aGlzLnVwZGF0ZUNhbWVyYVZlY3RvcnMoKVxuXHR9XG5cblx0cHVibGljIHNldFlhdyh5YXc6IG51bWJlcikge1xuXHRcdHRoaXMueWF3ID0geWF3XG5cdFx0dGhpcy51cGRhdGVDYW1lcmFWZWN0b3JzKClcblx0fVxuXG5cdHB1YmxpYyBtb3ZlKGRpcmVjdGlvbjogZGlyZWN0aW9ucywgZHQ6IG51bWJlciwgc3BlZWQ/OiBudW1iZXIpIHtcblx0XHRpZiAoIXNwZWVkKVxuXHRcdFx0c3BlZWQgPSB0aGlzLm1vdmVtZW50U3BlZWRcblxuXHRcdGxldCB2ZWw6IG51bWJlciA9IHNwZWVkICogZHRcblx0XHRsZXQgdmVsb2NpdHk6IHZlYzMgPSB2ZWMzLmZyb21WYWx1ZXModmVsLCB2ZWwsIHZlbClcblx0XHRsZXQgZnJvbnRfID0gdmVjMy5jcmVhdGUoKVxuXHRcdGxldCByaWdodF8gPSB2ZWMzLmNyZWF0ZSgpXG5cdFx0bGV0IGZyb250ID0gdGhpcy5mcm9udFxuXHRcdGxldCByaWdodCA9IHRoaXMucmlnaHRcblx0XHRsZXQgcG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uXG5cblx0XHR2ZWMzLmNvcHkoZnJvbnRfLCBmcm9udClcblx0XHR2ZWMzLmNvcHkocmlnaHRfLCByaWdodClcblxuXHRcdGlmIChkaXJlY3Rpb24gPT09ICdmb3J3YXJkcycpIHtcblx0XHRcdHZlYzMuYWRkKHBvc2l0aW9uLCBwb3NpdGlvbiwgdmVjMy5tdWx0aXBseShmcm9udF8sIGZyb250XywgdmVsb2NpdHkpKVxuXHRcdH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnYmFja3dhcmRzJykge1xuXHRcdFx0dmVjMy5zdWIocG9zaXRpb24sIHBvc2l0aW9uLCB2ZWMzLm11bHRpcGx5KGZyb250XywgZnJvbnRfLCB2ZWxvY2l0eSkpXG5cdFx0fSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuXHRcdFx0dmVjMy5zdWIocG9zaXRpb24sIHBvc2l0aW9uLCB2ZWMzLm11bHRpcGx5KHJpZ2h0XywgcmlnaHRfLCB2ZWxvY2l0eSkpXG5cdFx0fSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcblx0XHRcdHZlYzMuYWRkKHBvc2l0aW9uLCBwb3NpdGlvbiwgdmVjMy5tdWx0aXBseShyaWdodF8sIHJpZ2h0XywgdmVsb2NpdHkpKVxuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyByb3RhdGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIHNlbnNpdGl2aXR5PzogbnVtYmVyKSB7XG5cdFx0aWYgKCFzZW5zaXRpdml0eSlcblx0XHRcdHNlbnNpdGl2aXR5ID0gdGhpcy5yb3RhdGlvblNlbnNpdGl2aXR5XG5cblx0XHR0aGlzLnlhdyArPSAoeCAqIHNlbnNpdGl2aXR5KVxuXHRcdHRoaXMucGl0Y2ggKz0gKHkgKiBzZW5zaXRpdml0eSlcblx0XHR0aGlzLnBpdGNoID0gdGhpcy5jb25zdHJhaW5QaXRjaCh0aGlzLnBpdGNoKVxuXG5cdFx0dGhpcy51cGRhdGVDYW1lcmFWZWN0b3JzKClcblx0fVxuXG5cdHByaXZhdGUgY29uc3RyYWluUGl0Y2gocGl0Y2g6IG51bWJlcik6IG51bWJlciB7XG5cdFx0aWYgKHBpdGNoID4gODkuMClcblx0XHRcdHBpdGNoID0gODkuMFxuXHRcdGlmIChwaXRjaCA8IC04OS4wKVxuXHRcdFx0cGl0Y2ggPSAtODkuMFxuXHRcdHJldHVybiBwaXRjaFxuXHR9XG5cblx0cHJpdmF0ZSB1cGRhdGVDYW1lcmFWZWN0b3JzKCk6IHZvaWQge1xuXHRcdGxldCBmcm9udF86IHZlYzMgPSB2ZWMzLmNyZWF0ZSgpXG5cdFx0bGV0IHJpZ2h0ID0gdGhpcy5yaWdodFxuXHRcdGxldCBmcm9udCA9IHRoaXMuZnJvbnRcblx0XHRsZXQgdXAgPSB0aGlzLnVwXG5cdFx0bGV0IHdvcmxkVXAgPSB0aGlzLndvcmxkVXBcblx0XHRsZXQgcGl0Y2ggPSB0aGlzLnBpdGNoXG5cdFx0bGV0IHlhdyA9IHRoaXMueWF3XG5cblx0XHRmcm9udF9bMF0gPSBNYXRoLmNvcyhnbE1hdHJpeC50b1JhZGlhbih5YXcpKSAqIE1hdGguY29zKGdsTWF0cml4LnRvUmFkaWFuKHBpdGNoKSlcblx0XHRmcm9udF9bMV0gPSBNYXRoLnNpbihnbE1hdHJpeC50b1JhZGlhbihwaXRjaCkpXG5cdFx0ZnJvbnRfWzJdID0gTWF0aC5zaW4oZ2xNYXRyaXgudG9SYWRpYW4oeWF3KSlcblxuXHRcdHZlYzMuY29weShmcm9udCwgZnJvbnRfKVxuXG5cdFx0dmVjMy5jcm9zcyhyaWdodCwgZnJvbnQsIHdvcmxkVXApXG5cdFx0dmVjMy5ub3JtYWxpemUocmlnaHQsIHJpZ2h0KVxuXHRcdHZlYzMuY3Jvc3ModXAsIHJpZ2h0LCBmcm9udClcblx0XHR2ZWMzLm5vcm1hbGl6ZSh1cCwgdXApXG5cdH1cblxufVxuXG5leHBvcnQgeyBDYW1lcmEsIGRpcmVjdGlvbnMgfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2dsL2NhbWVyYS9jYW1lcmEudHMiLCJpbXBvcnQgeyBNb2RlbCB9IGZyb20gJy4uL21vZGVsL21vZGVsJ1xuaW1wb3J0IHsgTWVzaCB9IGZyb20gJy4uL21lc2gvbWVzaCdcbmltcG9ydCAqIGFzIExpZ2h0IGZyb20gJy4uL2xpZ2h0L2xpZ2h0J1xuXG5leHBvcnQgdHlwZSBTY2VuZUFkZGFibGUgPSBNb2RlbCB8IExpZ2h0LkxpZ2h0XG5cbmNsYXNzIFNjZW5lIHtcblxuXHRwcml2YXRlIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHRcblxuXHRwdWJsaWMgbW9kZWxzOiBBcnJheTxNb2RlbD4gPSBbXVxuXHRwdWJsaWMgbGlnaHRzOiBBcnJheTxMaWdodC5MaWdodD4gPSBbXVxuXHRwdWJsaWMgbW9kZWxzU29ydGVkOiBib29sZWFuID0gZmFsc2Vcblx0cHVibGljIGJhY2tncm91bmQ6IE1vZGVsXG5cblx0Y29uc3RydWN0b3IoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCkge1xuXHRcdHRoaXMuZ2wgPSBnbFxuXHRcdHRoaXMuYmFja2dyb3VuZCA9IG51bGxcblx0fVxuXG5cdHB1YmxpYyBzb3J0TW9kZWxzKGNvbXBhcmF0b3I6IChhOiBNb2RlbCwgYjogTW9kZWwpID0+IG51bWJlcikge1xuXHRcdHRoaXMubW9kZWxzLnNvcnQoY29tcGFyYXRvcilcblx0XHR0aGlzLm1vZGVsc1NvcnRlZCA9IHRydWVcblx0fVxuXG5cdHB1YmxpYyBhZGQoZWxlbWVudDogU2NlbmVBZGRhYmxlIHwgQXJyYXk8U2NlbmVBZGRhYmxlPik6IHZvaWQge1xuXHRcdGlmIChBcnJheS5pc0FycmF5KGVsZW1lbnQpKSB7XG5cdFx0XHRpZiAoZWxlbWVudC5sZW5ndGggPT09IDApXG5cdFx0XHRcdHJldHVyblxuXHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXNcblx0XHRcdGVsZW1lbnQubWFwKGVsID0+IHNlbGYuYWRkT25lKGVsKSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5hZGRPbmUoZWxlbWVudClcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGFkZE9uZShlbGVtZW50OiBTY2VuZUFkZGFibGUpOiB2b2lkIHtcblx0XHRpZiAoZWxlbWVudCBpbnN0YW5jZW9mIE1vZGVsKSB7XG5cdFx0XHR0aGlzLmFkZE1vZGVsKGVsZW1lbnQpXG5cdFx0fSBlbHNlIGlmIChlbGVtZW50IGluc3RhbmNlb2YgTGlnaHQuTGlnaHQpIHtcblx0XHRcdHRoaXMuYWRkTGlnaHQoZWxlbWVudClcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGFkZExpZ2h0KGxpZ2h0OiBMaWdodC5MaWdodCk6IHZvaWQge1xuXHRcdHRoaXMubGlnaHRzLnB1c2gobGlnaHQpXG5cdH1cblxuXHRwcml2YXRlIGFkZE1vZGVsKG1vZGVsOiBNb2RlbCk6IHZvaWQge1xuXHRcdHRoaXMubW9kZWxzLnB1c2gobW9kZWwpXG5cdFx0dGhpcy5tb2RlbHNTb3J0ZWQgPSBmYWxzZVxuXHR9XG59XG5cbmV4cG9ydCB7IFNjZW5lIH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC9zY2VuZS9zY2VuZS50cyIsImltcG9ydCB7IHRpbWUgfSBmcm9tICcuLi91dGlsL3V0aWwnXG5cbmNsYXNzIEZyYW1lU3RhdHMge1xuXG5cdHByaXZhdGUgdGltZXI6IHRpbWUuRGVsdGFUaW1lclxuXHRtaW46IG51bWJlciA9IEluZmluaXR5XG5cdG1heDogbnVtYmVyID0gLUluZmluaXR5XG5cdG1lYW46IG51bWJlciA9IDBcblx0aXRlcmF0aW9uczogbnVtYmVyID0gMFxuXHRjdXJyZW50OiBudW1iZXIgPSBOYU5cblx0cGxhY2VzOiBudW1iZXIgPSAyXG5cblx0ZWw6IEhUTUxFbGVtZW50XG5cdHZpc2libGU6IGJvb2xlYW4gPSB0cnVlXG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy50aW1lciA9IG5ldyB0aW1lLkRlbHRhVGltZXIoKVxuXHRcdHRoaXMudGltZXIuc2V0UmF0aW8odGltZS5yYXRpb3MucygpKVxuXHRcdHRoaXMuc2V0dXBFbGVtZW50KClcblx0fVxuXG5cdHByaXZhdGUgc2V0dXBFbGVtZW50KCkge1xuXHRcdGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcblx0XHRjb25zdCBzZWxmID0gdGhpc1xuXHRcdGVsLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJ1xuXHRcdGVsLnN0eWxlLmxlZnQgPSAnMHB4J1xuXHRcdGVsLnN0eWxlLnRvcCA9ICcwcHgnXG5cdFx0ZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2JsYWNrJ1xuXHRcdGVsLnN0eWxlLm9wYWNpdHkgPSAnMC41J1xuXHRcdGVsLnN0eWxlLmNvbG9yID0gJ3doaXRlJ1xuXHRcdGVsLm9uY2xpY2sgPSAoZXZ0OiBNb3VzZUV2ZW50KSA9PiB7XG5cdFx0XHRlbC5zdHlsZS5vcGFjaXR5ID0gc2VsZi52aXNpYmxlID8gJzAnIDogJzAuNSdcblx0XHRcdHNlbGYudmlzaWJsZSA9ICFzZWxmLnZpc2libGVcblx0XHR9XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbClcblx0XHR0aGlzLmVsID0gZWxcblx0fVxuXG5cdHB1YmxpYyB1cGRhdGUoKSB7XG5cdFx0bGV0IHdhc0ZpcnN0ID0gdGhpcy50aW1lci5maXJzdFVwZGF0ZSgpXG5cdFx0dGhpcy50aW1lci51cGRhdGUoKVxuXHRcdGlmICh3YXNGaXJzdClcblx0XHRcdHJldHVyblxuXG5cdFx0bGV0IGR0ID0gdGhpcy50aW1lci5kZWx0YSgpXG5cdFx0aWYgKGR0IDwgdGhpcy5taW4pIHRoaXMubWluID0gZHRcblx0XHRpZiAoZHQgPiB0aGlzLm1heCkgdGhpcy5tYXggPSBkdFxuXG5cdFx0dGhpcy5jdXJyZW50ID0gZHRcblx0XHR0aGlzLm1lYW4gPSAoKHRoaXMubWVhbiAqIHRoaXMuaXRlcmF0aW9ucykgKyBkdCkgLyAodGhpcy5pdGVyYXRpb25zICsgMSlcblx0XHR0aGlzLml0ZXJhdGlvbnMrK1xuXG5cdFx0dGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLmdldFN0cmluZygpXG5cdH1cblxuXHRwdWJsaWMgZ2V0U3RyaW5nKCk6IHN0cmluZyB7XG5cdFx0Y29uc3QgcGxhY2VzID0gdGhpcy5wbGFjZXNcblx0XHRjb25zdCBzZWxmID0gdGhpc1xuXG5cdFx0Y29uc3QgY3VycmVudCA9IHRoaXMuZ2V0VGltZUZQU1N0cmluZygnY3VycmVudCcsIHRoaXMuY3VycmVudClcblx0XHRjb25zdCBtaW4gPSB0aGlzLmdldFRpbWVGUFNTdHJpbmcoJ21pbicsIHRoaXMubWluKVxuXHRcdGNvbnN0IG1heCA9IHRoaXMuZ2V0VGltZUZQU1N0cmluZygnbWF4JywgdGhpcy5tYXgpXG5cdFx0Y29uc3QgbWVhbiA9IHRoaXMuZ2V0VGltZUZQU1N0cmluZygnbWVhbicsIHRoaXMubWVhbilcblxuXHRcdHJldHVybiBjdXJyZW50ICsgbWluICsgbWF4ICsgbWVhblxuXHR9XG5cblx0cHJpdmF0ZSBnZXRUaW1lRlBTU3RyaW5nKGtpbmQ6IHN0cmluZywgdmFsOiBudW1iZXIpOiBzdHJpbmcge1xuXHRcdGxldCB0aW1lVW5pdHMgPSB0aGlzLnRpbWVyLmdldFJhdGlvKCkuYWxpYXNcblx0XHRjb25zdCBtcyA9IGAke2tpbmR9OiAkeyh2YWwpLnRvRml4ZWQodGhpcy5wbGFjZXMpfSAke3RpbWVVbml0c30sIGBcblx0XHRjb25zdCBmcHMgPSBgJHsoMS92YWwpLnRvRml4ZWQodGhpcy5wbGFjZXMpfSBGUFM8YnI+YFxuXHRcdHJldHVybiBtcyArIGZwc1xuXHR9XG5cbn1cblxuZXhwb3J0IHsgRnJhbWVTdGF0cyB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2wvY29tbW9uL2ZyYW1lLXN0YXRzLnRzIiwiaW1wb3J0IGZ1bmN0aW9uYWwgZnJvbSAnLi9mdW5jdGlvbmFsLXJlbmRlcmVyJ1xuXG5leHBvcnQge1xuXHRmdW5jdGlvbmFsXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2wvcmVuZGVyZXJzL3JlbmRlcmVycy50cyIsImltcG9ydCBiYXNlIGZyb20gJy4vYmFzZS1yZW5kZXJlcidcbmltcG9ydCAqIGFzIFNoYWRlciBmcm9tICcuLi9zaGFkZXIvc2hhZGVyJ1xuaW1wb3J0ICogYXMgTGlnaHQgZnJvbSAnLi4vbGlnaHQvbGlnaHQnXG5pbXBvcnQgeyBNZXNoIH0gZnJvbSAnLi4vbWVzaC9tZXNoJ1xuaW1wb3J0ICogYXMgdW5pZm9ybXMgZnJvbSAnLi4vc2hhZGVyL3VuaWZvcm1zJ1xuaW1wb3J0IHsgTW9kZWwgfSBmcm9tICcuLi9tb2RlbC9tb2RlbCdcbmltcG9ydCB7IENhbWVyYSB9IGZyb20gJy4uL2NhbWVyYS9jYW1lcmEnXG5pbXBvcnQgeyBtYXQ0IH0gZnJvbSAnZ2wtbWF0cml4J1xuaW1wb3J0ICogYXMgTWF0ZXJpYWwgZnJvbSAnLi4vbWF0ZXJpYWwvbWF0ZXJpYWwnXG5pbXBvcnQgKiBhcyB0ZXh0dXJlIGZyb20gJy4uL3RleHR1cmUvdGV4dHVyZSdcbmltcG9ydCB7IHR5cGVzIH0gZnJvbSAnLi4vdXRpbC91dGlsJ1xuaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuLi9zY2VuZS9zY2VuZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBiYXNlIHtcblxuXHRsYXN0TWVzaDogTWVzaCA9IG51bGxcblx0bGFzdFByb2dyYW06IFNoYWRlci5TaGFkZXJQcm9ncmFtID0gbnVsbFxuXHRsYXN0TWF0ZXJpYWw6IE1hdGVyaWFsLk1hdGVyaWFsID0gbnVsbFxuXG5cdGNvbnN0cnVjdG9yKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQpIHtcblx0XHRzdXBlcihnbClcblx0fVxuXG5cdHB1YmxpYyByZXNldCgpOiB2b2lkIHtcblx0XHR0aGlzLmxhc3RNZXNoID0gbnVsbFxuXHRcdHRoaXMubGFzdFByb2dyYW0gPSBudWxsXG5cdFx0dGhpcy5sYXN0TWF0ZXJpYWwgPSBudWxsXG5cdH1cblxuXHRwdWJsaWMgcmVuZGVyKHNjZW5lOiBTY2VuZSwgY2FtZXJhOiBDYW1lcmEpIHtcblx0XHR0aGlzLmNsZWFyKClcblxuXHRcdGlmIChzY2VuZS5tb2RlbHMubGVuZ3RoID09PSAwKSByZXR1cm5cblx0XHRpZiAoIXNjZW5lLm1vZGVsc1NvcnRlZCkgc2NlbmUuc29ydE1vZGVscyhNb2RlbC5jb21wYXJlTWVzaFVVSUQpXG5cblx0XHR0aGlzLmNvbmZpZ3VyZUNhbWVyYShzY2VuZS5tb2RlbHNbMF0ucHJvZ3JhbSwgY2FtZXJhKVxuXHRcdHRoaXMuY29uZmlndXJlTGlnaHRzKHNjZW5lLm1vZGVsc1swXS5wcm9ncmFtLCBzY2VuZS5saWdodHMpXG5cblx0XHRmb3IgKGxldCBtb2RlbCBvZiBzY2VuZS5tb2RlbHMpIHtcblx0XHRcdHRoaXMuZHJhd01vZGVsKHNjZW5lLCBjYW1lcmEsIG1vZGVsKVxuXHRcdH1cblxuXHRcdHRoaXMuZHJhd0JhY2tncm91bmQoc2NlbmUsIGNhbWVyYSlcblx0fVxuXG5cdHByaXZhdGUgZHJhd0JhY2tncm91bmQoc2NlbmU6IFNjZW5lLCBjYW1lcmE6IENhbWVyYSk6IHZvaWQge1xuXHRcdGlmICghc2NlbmUuYmFja2dyb3VuZClcblx0XHRcdHJldHVyblxuXHRcdGNvbnN0IGdsID0gdGhpcy5nbFxuXHRcdGdsLmRlcHRoRnVuYyhnbC5MRVFVQUwpXG5cdFx0dGhpcy5kcmF3TW9kZWwoc2NlbmUsIGNhbWVyYSwgc2NlbmUuYmFja2dyb3VuZClcblx0XHRnbC5kZXB0aEZ1bmMoZ2wuTEVTUylcblx0fVxuXG5cdHB1YmxpYyBkcmF3TW9kZWwoc2NlbmU6IFNjZW5lLCBjYW1lcmE6IENhbWVyYSwgbW9kZWw6IE1vZGVsKTogdm9pZCB7XG5cdFx0bW9kZWwub25CZWZvcmVSZW5kZXIoKVxuXHRcdGNvbnN0IHByb2cgPSBtb2RlbC5wcm9ncmFtXG5cdFx0Y29uc3QgbWF0ZXJpYWwgPSBtb2RlbC5tYXRlcmlhbFxuXHRcdGNvbnN0IG1lc2ggPSBtb2RlbC5tZXNoXG5cdFx0bGV0IGZvcmNlVXBkYXRlID0gZmFsc2Vcblx0XHRpZiAodGhpcy5jb25kaXRpb25hbEJpbmRQcm9ncmFtKHByb2cpKSB7XG5cdFx0XHRmb3JjZVVwZGF0ZSA9IHRydWVcblx0XHRcdHRoaXMuY29uZmlndXJlQ2FtZXJhKHByb2csIGNhbWVyYSlcblx0XHRcdHRoaXMuY29uZmlndXJlTGlnaHRzKHByb2csIHNjZW5lLmxpZ2h0cywgZm9yY2VVcGRhdGUpXG5cdFx0fVxuXHRcdHRoaXMuY29uZmlndXJlVHJhbnNmb3JtKHByb2csIG1vZGVsLmdldFdvcmxkTWF0cml4KCkpXG5cdFx0dGhpcy5jb25maWd1cmVNYXRlcmlhbChwcm9nLCBtYXRlcmlhbCwgZm9yY2VVcGRhdGUpXG5cdFx0dGhpcy5kcmF3KHByb2csIG1lc2gsIGZvcmNlVXBkYXRlKVxuXHRcdG1vZGVsLm9uQWZ0ZXJSZW5kZXIoKVxuXHR9XG5cblx0cHVibGljIGRyYXcocHJvZzogU2hhZGVyLlNoYWRlclByb2dyYW0sIG1lc2g6IE1lc2gsIGZvcmNlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcblx0XHR0aGlzLmNvbmRpdGlvbmFsQmluZFByb2dyYW0ocHJvZylcblx0XHR0aGlzLmNvbmRpdGlvbmFsQmluZE1lc2gocHJvZywgbWVzaCwgZm9yY2UpXG5cdFx0bWVzaC5kcmF3KClcblx0fVxuXG5cdHB1YmxpYyBjb25maWd1cmVUcmFuc2Zvcm0ocHJvZzogU2hhZGVyLlNoYWRlclByb2dyYW0sIHRyYW5zZm9ybU1hdHJpeDogbWF0NCk6IHZvaWQge1xuXHRcdHRoaXMuY29uZGl0aW9uYWxCaW5kUHJvZ3JhbShwcm9nKVxuXHRcdHRoaXMuY29uZGl0aW9uYWxTZXRVbmlmb3JtKHByb2csICdtb2RlbCcsIHRyYW5zZm9ybU1hdHJpeClcblx0fVxuXG5cdHB1YmxpYyBjb25maWd1cmVDYW1lcmEocHJvZzogU2hhZGVyLlNoYWRlclByb2dyYW0sIGNhbWVyYTogQ2FtZXJhKTogdm9pZCB7XG5cdFx0dGhpcy5jb25kaXRpb25hbEJpbmRQcm9ncmFtKHByb2cpXG5cdFx0dGhpcy5jb25kaXRpb25hbFNldFVuaWZvcm0ocHJvZywgJ3Byb2plY3Rpb24nLCB0aGlzLnByb2plY3Rpb24pXG5cdFx0dGhpcy5jb25kaXRpb25hbFNldFVuaWZvcm0ocHJvZywgJ3ZpZXcnLCBjYW1lcmEuZ2V0Vmlld01hdHJpeCgpKVxuXHRcdHRoaXMuY29uZGl0aW9uYWxTZXRVbmlmb3JtKHByb2csICdjYW1lcmFfcG9zaXRpb24nLCBjYW1lcmEucG9zaXRpb24pXG5cdH1cblxuXHRwdWJsaWMgY29uZmlndXJlTWF0ZXJpYWwocHJvZzogU2hhZGVyLlNoYWRlclByb2dyYW0sIG1hdGVyaWFsOiBNYXRlcmlhbC5NYXRlcmlhbCwgZm9yY2U6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuXHRcdGxldCBpc05ld1Byb2cgPSB0aGlzLmNvbmRpdGlvbmFsQmluZFByb2dyYW0ocHJvZylcblx0XHRsZXQgaXNOZXdNYXQgPSB0aGlzLmNoZWNrTmV3TWF0ZXJpYWwobWF0ZXJpYWwpXG5cdFx0bGV0IGF0dHJzOiBBcnJheTxNYXRlcmlhbC5BdHRyaWJ1dGU+ID0gbWF0ZXJpYWwuZW51bWVyYXRlQXR0cmlidXRlcygpXG5cdFx0Zm9yIChsZXQgYXR0ciBvZiBhdHRycykge1xuXHRcdFx0aWYgKGlzTmV3TWF0IHx8IGlzTmV3UHJvZyB8fCBmb3JjZSB8fCBhdHRyLmlzRGlydHkpIHtcblx0XHRcdFx0dGhpcy5jb25kaXRpb25hbFNldFVuaWZvcm0ocHJvZywgYXR0ci5uYW1lLCBhdHRyLmdldFZhbHVlKCkpXG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZXMuaXNUZXh0dXJlKGF0dHIucGVla1ZhbHVlKCkpKSB7XG5cdFx0XHRcdHRoaXMuY29uZmlndXJlVGV4dHVyZShwcm9nLCBhdHRyLmdldFZhbHVlKCkgYXMgdGV4dHVyZS5UZXh0dXJlKVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBjb25maWd1cmVUZXh0dXJlKHByb2c6IFNoYWRlci5TaGFkZXJQcm9ncmFtLCB0ZXg6IHRleHR1cmUuVGV4dHVyZSk6IHZvaWQge1xuXHRcdHRoaXMuY29uZGl0aW9uYWxCaW5kUHJvZ3JhbShwcm9nKVxuXHRcdHRleC5iaW5kKClcblx0fVxuXG5cdHB1YmxpYyBjb25maWd1cmVMaWdodChwcm9nOiBTaGFkZXIuU2hhZGVyUHJvZ3JhbSwgbGlnaHQ6IExpZ2h0LkxpZ2h0LCBmb3JjZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG5cdFx0bGV0IGlzTmV3UHJvZyA9IHRoaXMuY29uZGl0aW9uYWxCaW5kUHJvZ3JhbShwcm9nKVxuXHRcdGlmICghbGlnaHQuYWN0aXZlKSByZXR1cm5cblx0XHRsZXQgaW5kZXggPSBsaWdodC5nZXRJbmRleCgpXG5cdFx0bGV0IGF0dHJzOiBBcnJheTxMaWdodC5BdHRyaWJ1dGU+ID0gbGlnaHQuZW51bWVyYXRlQXR0cmlidXRlcygpXG5cdFx0Zm9yIChsZXQgYXR0ciBvZiBhdHRycykge1xuXHRcdFx0aWYgKGlzTmV3UHJvZyB8fCBmb3JjZSB8fCBhdHRyLmlzRGlydHkpIHtcblx0XHRcdFx0bGV0IHVuID0gdW5pZm9ybXMuTWFwLmdldFVuaWZvcm0oYXR0ci5uYW1lKVxuXHRcdFx0XHRsZXQgbWFwcGVkTmFtZSA9IHVuaWZvcm1zLk1hcC5nZXRVbmlmb3JtKGxpZ2h0LmdldE5hbWUoKSlcblx0XHRcdFx0bGV0IHVuZiA9IGAke21hcHBlZE5hbWV9WyR7aW5kZXh9XS4ke3VufWBcblx0XHRcdFx0aWYgKHByb2cuaGFzVW5pZm9ybShsaWdodC5nZXROYW1lKCkpKSB7XG5cdFx0XHRcdFx0cHJvZy5zZXRVbmlmb3JtKHVuZiwgYXR0ci5nZXRWYWx1ZSgpKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjb25maWd1cmVMaWdodHMocHJvZzogU2hhZGVyLlNoYWRlclByb2dyYW0sIGxpZ2h0czogQXJyYXk8TGlnaHQuTGlnaHQ+LCBmb3JjZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG5cdFx0Zm9yIChsZXQgbGlnaHQgb2YgbGlnaHRzKSB7XG5cdFx0XHR0aGlzLmNvbmZpZ3VyZUxpZ2h0KHByb2csIGxpZ2h0LCBmb3JjZSlcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNoZWNrTmV3TWF0ZXJpYWwobWF0ZXJpYWw6IE1hdGVyaWFsLk1hdGVyaWFsKTogYm9vbGVhbiB7XG5cdFx0bGV0IGlzTnVsbExhc3RNYXRlcmlhbDogYm9vbGVhbiA9IHRoaXMubGFzdE1hdGVyaWFsID09PSBudWxsXG5cdFx0bGV0IGlzTmV3TWF0ZXJpYWw6IGJvb2xlYW4gPSBpc051bGxMYXN0TWF0ZXJpYWwgfHwgXG5cdFx0XHQhTWF0ZXJpYWwuTWF0ZXJpYWwuZXF1YWxzKG1hdGVyaWFsLCB0aGlzLmxhc3RNYXRlcmlhbClcblx0XHR0aGlzLmxhc3RNYXRlcmlhbCA9IG1hdGVyaWFsXG5cdFx0cmV0dXJuIGlzTmV3TWF0ZXJpYWxcblx0fVxuXG5cdHB1YmxpYyBjb25kaXRpb25hbEJpbmRNZXNoKHByb2c6IFNoYWRlci5TaGFkZXJQcm9ncmFtLCBtZXNoOiBNZXNoLCBmb3JjZTogYm9vbGVhbiA9IGZhbHNlKTogYm9vbGVhbiB7XG5cdFx0bGV0IGlzTnVsbExhc3RNZXNoID0gdGhpcy5sYXN0TWVzaCA9PT0gbnVsbFxuXHRcdGxldCBpc05ld0JvdW5kUHJvZyA9ICFtZXNoLmlzQm91bmRUbyhwcm9nKVxuXHRcdGxldCBpc05ld01lc2ggPSBmb3JjZSB8fCBpc051bGxMYXN0TWVzaCB8fCAhTWVzaC5lcXVhbHMobWVzaCwgdGhpcy5sYXN0TWVzaCkgfHwgaXNOZXdCb3VuZFByb2dcblx0XHRpZiAoaXNOZXdNZXNoKSB7XG5cdFx0XHRpZiAoIWlzTnVsbExhc3RNZXNoICYmIHRoaXMubGFzdE1lc2guaXNCb3VuZCgpKSB0aGlzLmxhc3RNZXNoLnVuYmluZCgpXG5cdFx0XHRpZiAoIW1lc2guaXNCb3VuZCgpIHx8IGlzTmV3Qm91bmRQcm9nKSBtZXNoLmJpbmQocHJvZylcblx0XHR9XG5cdFx0dGhpcy5sYXN0TWVzaCA9IG1lc2hcblx0XHRyZXR1cm4gaXNOZXdNZXNoXG5cdH1cblxuXHRwdWJsaWMgY29uZGl0aW9uYWxCaW5kUHJvZ3JhbShwcm9nOiBTaGFkZXIuU2hhZGVyUHJvZ3JhbSwgZm9yY2U6IGJvb2xlYW4gPSBmYWxzZSk6IGJvb2xlYW4ge1xuXHRcdGxldCBpc051bGxMYXN0UHJvZ3JhbSA9IHRoaXMubGFzdFByb2dyYW0gPT09IG51bGxcblx0XHRsZXQgaXNOZXdQcm9ncmFtID0gZm9yY2UgfHwgaXNOdWxsTGFzdFByb2dyYW0gfHwgIVNoYWRlci5TaGFkZXJQcm9ncmFtLmVxdWFscyhwcm9nLCB0aGlzLmxhc3RQcm9ncmFtKVxuXHRcdGlmIChpc05ld1Byb2dyYW0pIHtcblx0XHRcdGlmICghaXNOdWxsTGFzdFByb2dyYW0gJiYgdGhpcy5sYXN0UHJvZ3JhbS5pc0JvdW5kKCkpIHRoaXMubGFzdFByb2dyYW0udW5iaW5kKClcblx0XHRcdGlmICghcHJvZy5pc0JvdW5kKCkpIHByb2cuYmluZCgpXG5cdFx0fVxuXHRcdHRoaXMubGFzdFByb2dyYW0gPSBwcm9nXG5cdFx0cmV0dXJuIGlzTmV3UHJvZ3JhbVxuXHR9XG5cblx0cHJpdmF0ZSBjb25kaXRpb25hbFNldFVuaWZvcm0ocHJvZzogU2hhZGVyLlNoYWRlclByb2dyYW0sIG5hbWU6IHVuaWZvcm1zLlVuaWZvcm1OYW1lcywgdmFsdWU6IFNoYWRlci5Vbmlmb3JtU2V0dGFibGUpOiB2b2lkIHtcblx0XHRpZiAocHJvZy5oYXNVbmlmb3JtKG5hbWUpKSB7XG5cdFx0XHRwcm9nLnNldFVuaWZvcm0odW5pZm9ybXMuTWFwLmdldFVuaWZvcm0obmFtZSksIHZhbHVlKVxuXHRcdH1cblx0fVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2wvcmVuZGVyZXJzL2Z1bmN0aW9uYWwtcmVuZGVyZXIudHMiLCJpbXBvcnQgeyBtYXQ0LCB2ZWMzIH0gZnJvbSAnZ2wtbWF0cml4J1xuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vdXRpbC90eXBlLXV0aWwnXG5pbXBvcnQgKiBhcyB2ZWN0b3IgZnJvbSAnLi4vdXRpbC92ZWN0b3ItdXRpbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXG5cdHByb3RlY3RlZCBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0XG5cdHByb3RlY3RlZCBwcm9qZWN0aW9uOiBtYXQ0XG5cdHByb3RlY3RlZCBjbGVhckNvbG9yOiB2ZWMzXG5cdHByb3RlY3RlZCBmb3Y6IG51bWJlciA9IDQ1LjBcblx0cHJvdGVjdGVkIG5lYXI6IG51bWJlciA9IDAuMVxuXHRwcm90ZWN0ZWQgZmFyOiBudW1iZXIgPSAxMDAwLjBcblx0cHJvdGVjdGVkIGFzcGVjdDogbnVtYmVyID0gMS4wXG5cdHByb3RlY3RlZCBjbGVhckJpdHM6IG51bWJlclxuXG5cdGNvbnN0cnVjdG9yKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQpIHtcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnByb2plY3Rpb24gPSB0aGlzLmdldFByb2plY3Rpb25NYXRyaXgoKVxuXHRcdHRoaXMuY2xlYXJDb2xvciA9IHZlYzMuZnJvbVZhbHVlcygwLjIsIDAuMiwgMC4yKVxuXHRcdHRoaXMuc2V0dXAoKVxuXHR9XG5cblx0cHJvdGVjdGVkIHNldHVwKCk6IHZvaWQge1xuXHRcdGNvbnN0IGdsID0gdGhpcy5nbFxuXHRcdGdsLmVuYWJsZShnbC5ERVBUSF9URVNUKVxuXHRcdHRoaXMuY2xlYXJCaXRzID0gZ2wuQ09MT1JfQlVGRkVSX0JJVCB8IGdsLkRFUFRIX0JVRkZFUl9CSVRcblx0fVxuXG5cdHB1YmxpYyBzZXRDbGVhckJpdHMoYml0czogbnVtYmVyIHwgbnVsbCkge1xuXHRcdHRoaXMuY2xlYXJCaXRzID0gYml0c1xuXHR9XG5cblx0cHVibGljIHNldE5lYXJGYXIobmVhcjogbnVtYmVyLCBmYXI6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMubmVhciA9IG5lYXJcblx0XHR0aGlzLmZhciA9IGZhclxuXHRcdHRoaXMucHJvamVjdGlvbiA9IHRoaXMuZ2V0UHJvamVjdGlvbk1hdHJpeCgpXG5cdH1cblxuXHRwdWJsaWMgc2V0Q2xlYXJDb2xvcihjb2xvcjogdHlwZXMudmVjM0NvbnZlcnRpYmxlKTogdm9pZCB7XG5cdFx0dGhpcy5jbGVhckNvbG9yID0gdmVjdG9yLnJlcXVpcmVWZWMzKGNvbG9yKVxuXHR9XG5cblx0cHVibGljIGNsZWFyKCk6IHZvaWQge1xuXHRcdGNvbnN0IGdsID0gdGhpcy5nbFxuXHRcdGNvbnN0IGNjID0gdGhpcy5jbGVhckNvbG9yXG5cdFx0Y29uc3QgY2IgPSB0aGlzLmNsZWFyQml0c1xuXHRcdGdsLmNsZWFyQ29sb3IoY2NbMF0sIGNjWzFdLCBjY1syXSwgMS4wKVxuXHRcdGlmIChjYiAhPT0gbnVsbClcblx0XHRcdGdsLmNsZWFyKGNiKVxuXHR9XG5cblx0cHVibGljIHNldEFzcGVjdChhcjogbnVtYmVyKSB7XG5cdFx0dGhpcy5hc3BlY3QgPSBhclxuXHRcdHRoaXMucHJvamVjdGlvbiA9IHRoaXMuZ2V0UHJvamVjdGlvbk1hdHJpeCgpXG5cdH1cblxuXHRwdWJsaWMgZ2V0UHJvamVjdGlvbk1hdHJpeCgpOiBtYXQ0IHtcblx0XHRsZXQgcHJvamVjdGlvbiA9IG1hdDQuY3JlYXRlKClcblx0XHRyZXR1cm4gbWF0NC5wZXJzcGVjdGl2ZShwcm9qZWN0aW9uLCB0aGlzLmZvdiwgdGhpcy5hc3BlY3QsIHRoaXMubmVhciwgdGhpcy5mYXIpXG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC9yZW5kZXJlcnMvYmFzZS1yZW5kZXJlci50cyIsInR5cGUgQ2FudmFzT3B0aW9ucyA9IHtcblx0d2lkdGg6IG51bWJlcixcblx0aGVpZ2h0OiBudW1iZXJcbn1cblxuY2xhc3MgQ2FudmFzIHtcblxuXHRkcHI6IG51bWJlclxuXHRhc3BlY3Q6IG51bWJlclxuXHR3aWR0aDogbnVtYmVyXG5cdGhlaWdodDogbnVtYmVyXG5cdGVsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50XG5cblx0Y29uc3RydWN0b3Iob3B0czogQ2FudmFzT3B0aW9ucyA9IENhbnZhcy5EZWZhdWx0cygpKSB7XG5cblx0XHRpZiAoIW9wdHMud2lkdGgpXG5cdFx0XHRvcHRzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGhcblx0XHRpZiAoIW9wdHMuaGVpZ2h0KVxuXHRcdFx0b3B0cy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcblxuXHRcdHRoaXMud2lkdGggPSBvcHRzLndpZHRoXG5cdFx0dGhpcy5oZWlnaHQgPSBvcHRzLmhlaWdodFxuXHRcdHRoaXMuYXNwZWN0ID0gdGhpcy53aWR0aCAvIHRoaXMuaGVpZ2h0XG5cdFx0dGhpcy5kcHIgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxXG5cblx0XHR0aGlzLmNyZWF0ZUNhbnZhcygpXG5cdFx0dGhpcy5yZXNpemUoKVxuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVDYW52YXMoKTogdm9pZCB7XG5cdFx0dGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudClcblx0fVxuXG5cdHB1YmxpYyByZXNpemUoKTogdm9pZCB7XG5cdFx0Y29uc3QgZWwgPSB0aGlzLmVsZW1lbnRcblx0XHRlbC5zdHlsZS53aWR0aCA9IHRoaXMud2lkdGggKyAncHgnXG5cdFx0ZWwuc3R5bGUuaGVpZ2h0ID0gdGhpcy5oZWlnaHQgKyAncHgnXG5cdFx0ZWwud2lkdGggPSB0aGlzLndpZHRoICogdGhpcy5kcHJcblx0XHRlbC5oZWlnaHQgPSB0aGlzLmhlaWdodCAqIHRoaXMuZHByXG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIERlZmF1bHRzKCk6IENhbnZhc09wdGlvbnMge1xuXHRcdHJldHVybiB7XG5cdFx0XHR3aWR0aDogbnVsbCxcblx0XHRcdGhlaWdodDogbnVsbFxuXHRcdH1cblx0fVxuXG59XG5cbmV4cG9ydCB7IENhbnZhcyB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2wvY29tbW9uL2NhbnZhcy50cyIsImltcG9ydCB7IE9CSiB9IGZyb20gJy4vb2JqLWxvYWRlcidcbmltcG9ydCB7IFRFWCB9IGZyb20gJy4vdGV4dHVyZS1sb2FkZXInXG5cbmV4cG9ydCB7XG5cdE9CSixcblx0VEVYXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2wvbG9hZGVycy9sb2FkZXJzLnRzIiwiaW1wb3J0IHsgTWVzaCB9IGZyb20gJy4uL21lc2gvbWVzaCdcbmltcG9ydCB7IFZlcnRleCwgVG9wb2xvZ2llcyB9IGZyb20gJy4uL21lc2gvdmVydGV4J1xuaW1wb3J0ICogYXMgYXNzZXJ0IGZyb20gJy4uL3V0aWwvYXNzZXJ0LXV0aWwnXG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ZdXFpblNoYW8vV2ViR0wtT2JqLUxvYWRlci9ibG9iL21hc3Rlci93ZWJnbC1vYmotbG9hZGVyLmpzXG5cbnR5cGUgT2JqVCA9IHtcbiAgICBpbmRpY2VzOiBBcnJheTxudW1iZXI+LFxuICAgIHZlcnRpY2VzOiBBcnJheTxudW1iZXI+LFxuICAgIG5vcm1hbHM6IEFycmF5PG51bWJlcj4sXG4gICAgdXZzOiBBcnJheTxudW1iZXI+XG59XG5cbmV4cG9ydCB0eXBlIE1lc2hMb2FkT3B0cyA9IHtcbiAgICBmaW5hbGl6ZTogYm9vbGVhblxufVxuXG5leHBvcnQgbmFtZXNwYWNlIE9CSiB7XG5cbiAgICBleHBvcnQgZnVuY3Rpb24gRGVmYXVsdHMoKTogTWVzaExvYWRPcHRzIHtcbiAgICAgICAgcmV0dXJuIHsgZmluYWxpemU6IHRydWUgfVxuICAgIH1cblxuICAgIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkTWVzaChnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCB1cmw6IHN0cmluZywgb3B0cz86IE1lc2hMb2FkT3B0cyk6IFByb21pc2U8TWVzaD4ge1xuICAgICAgICBpZiAoIW9wdHMpXG4gICAgICAgICAgICBvcHRzID0gRGVmYXVsdHMoKVxuICAgICAgICBsZXQgbG9hZGVyID0gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcbiAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeGhyLnJlc3BvbnNlVGV4dClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoeGhyKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB4aHIub3BlbignR0VUJywgdXJsKVxuICAgICAgICAgICAgeGhyLnNlbmQoKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gbG9hZGVyLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZU1lc2goZ2wsIGRhdGEsIG9wdHMpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTWVzaChnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCBvYmplY3REYXRhOiBzdHJpbmcsIG9wdHM/OiBNZXNoTG9hZE9wdHMpOiBNZXNoIHtcblxuICAgICAgICBpZiAoIW9wdHMpXG4gICAgICAgICAgICBvcHRzID0gRGVmYXVsdHMoKVxuXG4gICAgICAgIGxldCBsaW5lczogQXJyYXk8c3RyaW5nPiA9IG9iamVjdERhdGEuc3BsaXQoJ1xcbicpXG5cbiAgICAgICAgbGV0IHJhdzogT2JqVCA9IHtcbiAgICAgICAgICAgIGluZGljZXM6IFtdLFxuICAgICAgICAgICAgdmVydGljZXM6IFtdLFxuICAgICAgICAgICAgbm9ybWFsczogW10sXG4gICAgICAgICAgICB1dnM6IFtdXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcGFja2VkOiBPYmpUID0ge1xuICAgICAgICAgICAgaW5kaWNlczogW10sXG4gICAgICAgICAgICB2ZXJ0aWNlczogW10sXG4gICAgICAgICAgICBub3JtYWxzOiBbXSxcbiAgICAgICAgICAgIHV2czogW11cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBtZXNoID0gbmV3IE1lc2goZ2wpXG5cbiAgICAgICAgbGV0IGluZGV4ID0gMFxuXG4gICAgICAgIGZvciAoY29uc3QgbGluZSBvZiBsaW5lcykge1xuICAgICAgICAgICAgbGV0IGlzViA9IGxpbmUuc3RhcnRzV2l0aCgndicpXG4gICAgICAgICAgICBsZXQgaXNWTiA9IGxpbmUuc3RhcnRzV2l0aCgndm4nKVxuICAgICAgICAgICAgbGV0IGlzVlQgPSBsaW5lLnN0YXJ0c1dpdGgoJ3Z0JylcbiAgICAgICAgICAgIGxldCBpc0YgPSBsaW5lLnN0YXJ0c1dpdGgoJ2YnKVxuXG4gICAgICAgICAgICBpZiAoaXNWICYmICFpc1ZOICYmICFpc1ZUKSB7XG4gICAgICAgICAgICAgICAgcmF3QXBwZW5kZXIoJ3ZlcnRpY2VzJywgbGluZS5zcGxpdCgnICcpLCA0LCAndmVydGV4IGRhdGEnKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChpc1ZOKSB7XG4gICAgICAgICAgICAgICAgcmF3QXBwZW5kZXIoJ25vcm1hbHMnLCBsaW5lLnNwbGl0KCcgJyksIDQsICd2ZXJ0ZXggbm9ybWFsIGRhdGEnKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChpc1ZUKSB7XG4gICAgICAgICAgICAgICAgcmF3QXBwZW5kZXIoJ3V2cycsIGxpbmUuc3BsaXQoJyAnKSwgMywgJ3V2IGRhdGEnKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0YpIHtcblxuICAgICAgICAgICAgICAgIGxldCBfaW5kaWNlcyA9IGxpbmUuc3BsaXQoJyAnKS5tYXAoaW5kcyA9PiBpbmRzLnNwbGl0KCcvJykpXG5cbiAgICAgICAgICAgICAgICBfaW5kaWNlcy5tYXAoKGluZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbXNnID0gJ0ZhY2UgZGF0YSB3ZXJlIGZvcm1hdHRlZCBpbmNvcnJlY3RseSdcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gMCAmJiBpbmQubGVuZ3RoICE9PSAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZylcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPiAwICYmIGluZC5sZW5ndGggIT09IDMpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBfaW5kaWNlcy5zaGlmdCgpXG5cbiAgICAgICAgICAgICAgICBsZXQgcGFyc2VkSW5kaWNlcyA9IF9pbmRpY2VzLm1hcChpbmQgPT4gcGFyc2VJbmRpY2VzKGluZCkpXG5cbiAgICAgICAgICAgICAgICBwYWNrZWRBcHBlbmRlcihwYXJzZWRJbmRpY2VzLCBbMCwgMSwgMl0pXG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMzsgaSA8IHBhcnNlZEluZGljZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFja2VkQXBwZW5kZXIocGFyc2VkSW5kaWNlcywgW2ktMywgaS0xLCBpXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtZXNoLnNldEluZGljZXMobmV3IFVpbnQxNkFycmF5KHBhY2tlZC5pbmRpY2VzKSlcbiAgICAgICAgbWVzaC5zZXRUb3BvbG9neShUb3BvbG9naWVzLlRSSUFOR0xFUylcblxuICAgICAgICBpZiAob3B0cy5maW5hbGl6ZSkge1xuICAgICAgICAgICAgbWVzaC5maW5hbGl6ZSgpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWVzaFxuXG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgIGhlbHBlcnNcbiAgICAgICAgLy9cblxuICAgICAgICBmdW5jdGlvbiBwYXJzZUFuZFZhbGlkYXRlKHZhbHVlOiBzdHJpbmcsIGZ1bmM6ICh2YWw6IHN0cmluZykgPT4gbnVtYmVyLCBhbGlhczogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAgICAgICAgIGxldCByZXMgPSBmdW5jKHZhbHVlKVxuICAgICAgICAgICAgaWYgKGlzTmFOKHJlcykpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciBwYXJzaW5nIFwiJHthbGlhc31cIjogdmFsdWUgd2FzIE5hTi5gKVxuICAgICAgICAgICAgcmV0dXJuIHJlc1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcmF3QXBwZW5kZXIobmFtZToga2V5b2YgT2JqVCwgdmFsdWVzOiBBcnJheTxzdHJpbmc+LCBOOiBudW1iZXIsIGFsaWFzOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIGFzc2VydC5hc3NlcnROVmFsdWVzKHZhbHVlcywgTiwgYWxpYXMpXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IE47IGkrKykge1xuICAgICAgICAgICAgICAgIHJhd1tuYW1lXS5wdXNoKHBhcnNlQW5kVmFsaWRhdGUodmFsdWVzW2ldLCBwYXJzZUZsb2F0LCBhbGlhcykpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB2ZXJ0ZXhBcHBlbmRlcih2aTogbnVtYmVyLCBuaTogbnVtYmVyLCB1aTogbnVtYmVyKSB7XG4gICAgICAgICAgICBsZXQgdmVydGV4ID0gbmV3IFZlcnRleCgpXG5cbiAgICAgICAgICAgIGxldCB4ID0gcmF3LnZlcnRpY2VzWyh2aS0xKSozKzBdXG4gICAgICAgICAgICBsZXQgeSA9IHJhdy52ZXJ0aWNlc1sodmktMSkqMysxXVxuICAgICAgICAgICAgbGV0IHogPSByYXcudmVydGljZXNbKHZpLTEpKjMrMl1cblxuICAgICAgICAgICAgbGV0IG54ID0gcmF3Lm5vcm1hbHNbKG5pLTEpKjMrMF1cbiAgICAgICAgICAgIGxldCBueSA9IHJhdy5ub3JtYWxzWyhuaS0xKSozKzFdXG4gICAgICAgICAgICBsZXQgbnogPSByYXcubm9ybWFsc1sobmktMSkqMysyXVxuXG4gICAgICAgICAgICB2ZXJ0ZXguc2V0UG9zaXRpb24obmV3IEZsb2F0MzJBcnJheShbeCwgeSwgel0pKVxuICAgICAgICAgICAgdmVydGV4LnNldE5vcm1hbChuZXcgRmxvYXQzMkFycmF5KFtueCwgbnksIG56XSkpXG5cbiAgICAgICAgICAgIHBhY2tlZC5pbmRpY2VzLnB1c2goaW5kZXgrKylcblxuICAgICAgICAgICAgaWYgKHVpID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdmVydGV4LnNldFVWKG5ldyBGbG9hdDMyQXJyYXkoWzAsIDBdKSlcbiAgICAgICAgICAgICAgICBtZXNoLmFkZFZlcnRleCh2ZXJ0ZXgpXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCB1ID0gcmF3LnV2c1sodWktMSkqMiswXVxuICAgICAgICAgICAgbGV0IHYgPSByYXcudXZzWyh1aS0xKSoyKzFdXG5cbiAgICAgICAgICAgIHZlcnRleC5zZXRVVihuZXcgRmxvYXQzMkFycmF5KFt1LCB2XSkpXG5cbiAgICAgICAgICAgIG1lc2guYWRkVmVydGV4KHZlcnRleClcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHBhY2tlZEFwcGVuZGVyKGluZHM6IEFycmF5PEFycmF5PG51bWJlcj4+LCBmcmFnSW5kczogQXJyYXk8bnVtYmVyPikge1xuICAgICAgICAgICAgYXNzZXJ0LmFzc2VydE5WYWx1ZXMoZnJhZ0luZHMsIDMsICd0cmlhbmdsZXMnKVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kID0gZnJhZ0luZHNbaV1cbiAgICAgICAgICAgICAgICB2ZXJ0ZXhBcHBlbmRlcihpbmRzW2luZF1bMF0sIGluZHNbaW5kXVsyXSwgaW5kc1tpbmRdWzFdKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcGFyc2VJbmRpY2VzKGluZHM6IEFycmF5PHN0cmluZz4pOiBBcnJheTxudW1iZXI+IHtcbiAgICAgICAgICAgIGxldCB2ZXJ0SW5kZXggPSBwYXJzZUFuZFZhbGlkYXRlKGluZHNbMF0sIHBhcnNlSW50LCAndmVydGV4IGluZGV4JylcbiAgICAgICAgICAgIGxldCBub3JtSW5kZXggPSBwYXJzZUFuZFZhbGlkYXRlKGluZHNbMl0sIHBhcnNlSW50LCAnbm9ybWFsIGluZGV4JylcbiAgICAgICAgICAgIGxldCB1dkluZGV4ID0gbnVsbFxuICAgICAgICAgICAgaWYgKGluZHNbMV0gIT09ICcnKVxuICAgICAgICAgICAgICAgIHV2SW5kZXggPSBwYXJzZUFuZFZhbGlkYXRlKGluZHNbMV0sIHBhcnNlSW50LCAndXYgaW5kZXgnKVxuICAgICAgICAgICAgcmV0dXJuIFt2ZXJ0SW5kZXgsIHV2SW5kZXgsIG5vcm1JbmRleF1cbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2dsL2xvYWRlcnMvb2JqLWxvYWRlci50cyIsImltcG9ydCAqIGFzIFRleHR1cmUgZnJvbSAnLi4vdGV4dHVyZS90ZXh0dXJlJ1xuXG5leHBvcnQgbmFtZXNwYWNlIFRFWCB7XG5cblx0ZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWQyRChnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCB1cmw6IHN0cmluZywgb3B0cz86IFRleHR1cmUuVGV4dHVyZU9wdHMpOiBQcm9taXNlPFRleHR1cmUuVGV4dHVyZT4ge1xuICAgICAgICBsZXQgbG9hZGVyID0gbmV3IFByb21pc2U8SFRNTEltYWdlRWxlbWVudD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIFx0XHRsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcblxuICAgIFx0XHRpbWcub25sb2FkID0gKGUpID0+IHtcbiAgICBcdFx0XHR3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTChpbWcuc3JjKVxuICAgIFx0XHRcdHJlc29sdmUoaW1nKVxuICAgIFx0XHR9XG5cbiAgICBcdFx0aW1nLm9uZXJyb3IgPSAoZSkgPT4ge1xuICAgIFx0XHRcdHJlamVjdChlKVxuICAgIFx0XHR9XG5cbiAgICBcdFx0aW1nLnNyYyA9IHVybFxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gbG9hZGVyLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZTJEKGdsLCBkYXRhLCBvcHRzKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnNlMkQoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCwgZGF0YTogSFRNTEltYWdlRWxlbWVudCwgb3B0cz86IFRleHR1cmUuVGV4dHVyZU9wdHMpOiBUZXh0dXJlLlRleHR1cmUge1xuICAgIFx0cmV0dXJuIFRleHR1cmUuVGV4MkQoZ2wsIGRhdGEsIG9wdHMpXG4gICAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2wvbG9hZGVycy90ZXh0dXJlLWxvYWRlci50cyIsImltcG9ydCB7IFRvdWNoLCBNb3VzZSwgUG9pbnRlckxvY2ssIERvdWJsZVRhcERldGVjdG9yIH0gZnJvbSAnLi9pbnB1dC14eSdcbmltcG9ydCB7IEtleWJvYXJkLCBLZXlzIH0gZnJvbSAnLi9rZXlib2FyZCdcblxuZXhwb3J0IHtcblx0VG91Y2gsXG5cdERvdWJsZVRhcERldGVjdG9yLFxuXHRNb3VzZSxcblx0UG9pbnRlckxvY2ssXG5cdEtleWJvYXJkLFxuXHRLZXlzXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2wvaW5wdXQvaW5wdXQudHMiLCJpbXBvcnQgKiBhcyBfS2V5Ym9hcmQgZnJvbSAnLi9rZXlib2FyZCdcbmltcG9ydCAqIGFzIFhZIGZyb20gJy4vaW5wdXQteHknXG5pbXBvcnQgeyBDYW1lcmEsIGRpcmVjdGlvbnMgfSBmcm9tICcuLi9jYW1lcmEvY2FtZXJhJ1xuaW1wb3J0IHsgRGVsdGFUaW1lciwgcmF0aW9zLCBSYXRpbyB9IGZyb20gJy4uL3V0aWwvdGltZS11dGlsJ1xuaW1wb3J0IHsgdmVjMiwgdmVjMywgdmVjNCB9IGZyb20gJ2dsLW1hdHJpeCdcbmltcG9ydCAqIGFzIG1hdGggZnJvbSAnLi4vbWF0aC93Z2wtbWF0aCdcbmltcG9ydCB7IGNvbW1vbiwgbWF0cml4IH0gZnJvbSAnLi4vdXRpbC91dGlsJ1xuXG5leHBvcnQgbmFtZXNwYWNlIE9yYml0IHtcblxuXHR0eXBlIE9yYml0T3B0cyA9IHtcblx0XHRuVmVsb2NpdHlTYW1wbGVzOiBudW1iZXIsXG5cdFx0dmVsb2NpdHlEZWNheVNlbnNpdGl2aXR5OiBudW1iZXIsXG5cdFx0bWF4VmVsb2NpdHk6IG51bWJlcixcblx0XHRzcGVlZDogbnVtYmVyLFxuXHRcdHNtb290aDogYm9vbGVhblxuXHR9XG5cblx0ZXhwb3J0IGNsYXNzIE9yYml0MjxLIGV4dGVuZHMgWFkuWFlFdmVudCwgVCBleHRlbmRzIFhZLnh5PEs+PiB7XG5cblx0XHRwcml2YXRlIGlucHV0OiBUXG5cdFx0cHJpdmF0ZSBjYW1lcmE6IENhbWVyYVxuXHRcdHByaXZhdGUgdGltZXI6IERlbHRhVGltZXJcblxuXHRcdHByaXZhdGUgcmVsZWFzZWQ6IGJvb2xlYW5cblx0XHRwcml2YXRlIGN1cnJlbnRDb29yZGluYXRlczogdmVjMlxuXHRcdHByaXZhdGUgdG1wQ3VycmVudENvb3JkaW5hdGVzOiB2ZWMyXG5cdFx0cHJpdmF0ZSBsYXN0Q29vcmRpbmF0ZXM6IHZlYzJcblx0XHRwcml2YXRlIHZlbG9jaXR5OiB2ZWMyXG5cdFx0cHJpdmF0ZSB0b3RhbFZlbG9jaXR5OiB2ZWMyXG5cdFx0cHJpdmF0ZSBkZWx0YTogdmVjMlxuXHRcdHByaXZhdGUgZHRzOiB2ZWMyXG5cdFx0cHJpdmF0ZSBvcHRzOiBPcmJpdE9wdHNcblxuXHRcdGNvbnN0cnVjdG9yKGlucHV0OiBULCBjYW1lcmE6IENhbWVyYSwgb3B0cz86IE9yYml0T3B0cykge1xuXHRcdFx0dGhpcy5pbnB1dCA9IGlucHV0XG5cdFx0XHR0aGlzLmNhbWVyYSA9IGNhbWVyYVxuXHRcdFx0dGhpcy50aW1lciA9IG5ldyBEZWx0YVRpbWVyKClcblxuXHRcdFx0aWYgKCFvcHRzKVxuXHRcdFx0XHRvcHRzID0gT3JiaXQyLkRlZmF1bHRzKClcblxuXHRcdFx0dGhpcy5yZWxlYXNlZCA9IGZhbHNlXG5cdFx0XHR0aGlzLmxhc3RDb29yZGluYXRlcyA9IHZlYzIuZnJvbVZhbHVlcygwLCAwKVxuXHRcdFx0dGhpcy5jdXJyZW50Q29vcmRpbmF0ZXMgPSB2ZWMyLmZyb21WYWx1ZXMoMCwgMClcblx0XHRcdHRoaXMudG1wQ3VycmVudENvb3JkaW5hdGVzID0gdmVjMi5mcm9tVmFsdWVzKDAsIDApXG5cdFx0XHR0aGlzLnZlbG9jaXR5ID0gdmVjMi5mcm9tVmFsdWVzKDAsIDApXG5cdFx0XHR0aGlzLnRvdGFsVmVsb2NpdHkgPSB2ZWMyLmZyb21WYWx1ZXMoMCwgMClcblx0XHRcdHRoaXMuZGVsdGEgPSB2ZWMyLmZyb21WYWx1ZXMoMCwgMClcblx0XHRcdHRoaXMuZHRzID0gdmVjMi5mcm9tVmFsdWVzKDAsIDApXG5cblx0XHRcdHRoaXMub3B0cyA9IG9wdHNcblxuXHRcdFx0dGhpcy50aW1lci5zZXRSYXRpbyhyYXRpb3MubXMoKSlcblxuXHRcdFx0dGhpcy5zZXR1cCgpXG5cdFx0fVxuXG5cdFx0cHVibGljIHVwZGF0ZSgpIHtcblx0XHRcdGNvbnN0IGlucHV0ID0gdGhpcy5pbnB1dFxuXHRcdFx0Y29uc3QgdGltZXIgPSB0aGlzLnRpbWVyXG5cdFx0XHRjb25zdCBjYW1lcmEgPSB0aGlzLmNhbWVyYVxuXHRcdFx0Y29uc3QgdG1wQ29vcmRzID0gdGhpcy50bXBDdXJyZW50Q29vcmRpbmF0ZXNcblx0XHRcdGNvbnN0IGNvb3JkcyA9IHRoaXMuY3VycmVudENvb3JkaW5hdGVzXG5cdFx0XHRjb25zdCBsYXN0Q29vcmRzID0gdGhpcy5sYXN0Q29vcmRpbmF0ZXNcblx0XHRcdGNvbnN0IHZlbG9jaXR5ID0gdGhpcy52ZWxvY2l0eVxuXHRcdFx0Y29uc3QgdG90YWxWZWxvY2l0eSA9IHRoaXMudG90YWxWZWxvY2l0eVxuXHRcdFx0Y29uc3QgZGVsdGEgPSB0aGlzLmRlbHRhXG5cdFx0XHRjb25zdCBkdHMgPSB0aGlzLmR0c1xuXHRcdFx0Y29uc3Qgc3BlZWRNdWx0aXBsZXIgPSB0aGlzLm9wdHMuc3BlZWRcblx0XHRcdGNvbnN0IGRlY2F5U2VucyA9IHRoaXMub3B0cy52ZWxvY2l0eURlY2F5U2Vuc2l0aXZpdHlcblxuXHRcdFx0dGltZXIudXBkYXRlKClcblxuXHRcdFx0dG1wQ29vcmRzLnNldChjb29yZHMpXG5cblx0XHRcdHZlYzIuc3VidHJhY3QoZGVsdGEsIHRtcENvb3JkcywgbGFzdENvb3JkcylcblxuXHRcdFx0Y29uc3QgZHQgPSB0aW1lci5kZWx0YSgpXG5cblx0XHRcdGR0c1swXSA9IGR0XG5cdFx0XHRkdHNbMV0gPSBkdFxuXG5cdFx0XHRpZiAoZHQgPiAwKVxuXHRcdFx0XHR2ZWMyLmRpdmlkZSh2ZWxvY2l0eSwgZGVsdGEsIGR0cylcblxuXHRcdFx0dmVsb2NpdHlbMF0gPSBSYXRpby5zY2FsZSh0aW1lci5nZXRSYXRpbygpLCB2ZWxvY2l0eVswXSlcblx0XHRcdHZlbG9jaXR5WzFdID0gUmF0aW8uc2NhbGUodGltZXIuZ2V0UmF0aW8oKSwgdmVsb2NpdHlbMV0pXG5cblx0XHRcdHZlYzIubXVsKHZlbG9jaXR5LCB2ZWxvY2l0eSwgW3NwZWVkTXVsdGlwbGVyLCBzcGVlZE11bHRpcGxlcl0pXG5cblx0XHRcdHZlYzIuYWRkKHRvdGFsVmVsb2NpdHksIHRvdGFsVmVsb2NpdHksIHZlbG9jaXR5KVxuXG5cdFx0XHRsZXQgdGFyZ2V0VmVsb2NpdHkgPSB0aGlzLm9wdHMuc21vb3RoID8gdG90YWxWZWxvY2l0eSA6IHZlbG9jaXR5XG5cblx0XHRcdGlmIChpbnB1dC5zaG91bGRJbnZlcnQoKSkge1xuXHRcdFx0XHRjYW1lcmEucm90YXRlKC10YXJnZXRWZWxvY2l0eVswXSwgdGFyZ2V0VmVsb2NpdHlbMV0pXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjYW1lcmEucm90YXRlKHRhcmdldFZlbG9jaXR5WzBdLCAtdGFyZ2V0VmVsb2NpdHlbMV0pXG5cdFx0XHR9XG5cblx0XHRcdGxhc3RDb29yZHMuc2V0KHRtcENvb3JkcylcblxuXHRcdFx0dG90YWxWZWxvY2l0eVswXSAvPSBkZWNheVNlbnNcblx0XHRcdHRvdGFsVmVsb2NpdHlbMV0gLz0gZGVjYXlTZW5zXG5cblx0XHRcdGlmIChNYXRoLmFicyh0b3RhbFZlbG9jaXR5WzBdKSA8IDAuMDAwMDEpIHRvdGFsVmVsb2NpdHlbMF0gPSAwXG5cdFx0XHRpZiAoTWF0aC5hYnModG90YWxWZWxvY2l0eVsxXSkgPCAwLjAwMDAxKSB0b3RhbFZlbG9jaXR5WzFdID0gMFxuXHRcdH1cblxuXHRcdHByaXZhdGUgc2V0dXAoKTogdm9pZCB7XG5cdFx0XHRjb25zdCBpbnB1dCA9IHRoaXMuaW5wdXRcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzXG5cblx0XHRcdGlucHV0LnN0YXJ0KChldnQ6IEspID0+IHtcblx0XHRcdFx0c2VsZi5yZWxlYXNlZCA9IGZhbHNlXG5cdFx0XHRcdHNlbGYuY3VycmVudENvb3JkaW5hdGVzID0gc2VsZi5pbnB1dC5nZXRQcmltYXJ5Q29vcmRpbmF0ZXMoZXZ0KVxuXHRcdFx0XHRzZWxmLmxhc3RDb29yZGluYXRlcy5zZXQoc2VsZi5jdXJyZW50Q29vcmRpbmF0ZXMpXG5cdFx0XHR9KVxuXG5cdFx0XHRpbnB1dC5tb3ZlKChldnQ6IEspID0+IHtcblx0XHRcdFx0ZXZ0LnByZXZlbnREZWZhdWx0KClcblx0XHRcdFx0c2VsZi5jdXJyZW50Q29vcmRpbmF0ZXMgPSBzZWxmLmlucHV0LmdldFByaW1hcnlDb29yZGluYXRlcyhldnQpXG5cdFx0XHR9KVxuXG5cdFx0XHRpbnB1dC5lbmQoKGV2dDogSykgPT4ge1xuXHRcdFx0XHRzZWxmLnJlbGVhc2VkID0gdHJ1ZVxuXHRcdFx0fSlcblx0XHR9XG5cblx0XHRwdWJsaWMgc3RhdGljIERlZmF1bHRzKCk6IE9yYml0T3B0cyB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRuVmVsb2NpdHlTYW1wbGVzOiAxMDAsXG5cdFx0XHRcdHZlbG9jaXR5RGVjYXlTZW5zaXRpdml0eTogMS4yLFxuXHRcdFx0XHRtYXhWZWxvY2l0eTogNDAwMCxcblx0XHRcdFx0c3BlZWQ6IDIsXG5cdFx0XHRcdHNtb290aDogdHJ1ZVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vXG5cdC8vXHRyZWd1bGFyXG5cdC8vXG5cblx0YWJzdHJhY3QgY2xhc3MgX09yYml0PFQgZXh0ZW5kcyBYWS5YWUV2ZW50LCBYIGV4dGVuZHMgWFkueHk8VD4+IHtcblxuXHRcdHByaXZhdGUgaW5wdXQ6IFhcblx0XHRwcml2YXRlIHRpbWVyOiBEZWx0YVRpbWVyXG5cblx0XHRiZWdhbjogYm9vbGVhblxuXHRcdHJlbGVhc2VkOiBib29sZWFuXG5cdFx0dmVsb2NpdGllczogQXJyYXk8dmVjMj5cblx0XHR2ZWxvY2l0eTogdmVjMlxuXHRcdG5WZWxvY2l0eVNhbXBsZXM6IG51bWJlclxuXHRcdHNwZWVkOiBudW1iZXJcblx0XHRtYXhWZWxvY2l0eTogbnVtYmVyXG5cdFx0bWVhblZlbG9jaXR5OiB2ZWMyXG5cdFx0Y29vcmRpbmF0ZXM6IHZlYzJcblx0XHRkZWx0YXM6IHZlYzJcblx0XHR2ZWxvY2l0eURlY2F5U2Vuc2l0aXZpdHk6IG51bWJlclxuXG5cdFx0Y29uc3RydWN0b3IoaW5wdXQ6IFgsIHRpbWVyOiBEZWx0YVRpbWVyLCBvcHRzOiBPcmJpdE9wdHMpIHtcblx0XHRcdHRoaXMuaW5wdXQgPSBpbnB1dFxuXHRcdFx0dGhpcy50aW1lciA9IHRpbWVyXG5cblx0XHRcdHRoaXMuYmVnYW4gPSBmYWxzZVxuXHRcdFx0dGhpcy5yZWxlYXNlZCA9IGZhbHNlXG5cdFx0XHR0aGlzLnZlbG9jaXRpZXMgPSBbXVxuXHRcdFx0dGhpcy52ZWxvY2l0eSA9IHZlYzIuZnJvbVZhbHVlcygwLCAwKVxuXHRcdFx0dGhpcy5uVmVsb2NpdHlTYW1wbGVzID0gb3B0cy5uVmVsb2NpdHlTYW1wbGVzXG5cdFx0XHR0aGlzLnZlbG9jaXR5RGVjYXlTZW5zaXRpdml0eSA9IG9wdHMudmVsb2NpdHlEZWNheVNlbnNpdGl2aXR5XG5cdFx0XHR0aGlzLnNwZWVkID0gb3B0cy5zcGVlZFxuXHRcdFx0dGhpcy5tYXhWZWxvY2l0eSA9IG9wdHMubWF4VmVsb2NpdHlcblx0XHRcdHRoaXMubWVhblZlbG9jaXR5ID0gdmVjMi5mcm9tVmFsdWVzKDAsIDApXG5cdFx0XHR0aGlzLmNvb3JkaW5hdGVzID0gdmVjMi5mcm9tVmFsdWVzKDAsIDApXG5cdFx0XHR0aGlzLmRlbHRhcyA9IHZlYzIuZnJvbVZhbHVlcygwLCAwKVxuXG5cdFx0XHR0aGlzLnNldHVwKClcblx0XHR9XG5cblx0XHRwcm90ZWN0ZWQgYWJzdHJhY3Qgc2hvdWxkQmVnaW4oZXZ0OiBUKTogYm9vbGVhblxuXHRcdHByb3RlY3RlZCBhYnN0cmFjdCBnZXRDb29yZGluYXRlcyhldnQ6IFQpOiB2ZWMyXG5cdFx0cHVibGljIGFic3RyYWN0IHNob3VsZEludmVydCgpOiBib29sZWFuXG5cdFx0cHVibGljIGdldE1lYW5WZWxvY2l0eSgpOiB2ZWMyIHtcblx0XHRcdGlmICh0aGlzLnZlbG9jaXRpZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHR0aGlzLm1lYW5WZWxvY2l0eSA9IDx2ZWMyPm1hdGgudmVjbWVhbih0aGlzLnZlbG9jaXRpZXMpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLm1lYW5WZWxvY2l0eSA9IHZlYzIuZnJvbVZhbHVlcygwLCAwKVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMubWVhblZlbG9jaXR5XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBzZXR1cCgpOiB2b2lkIHtcblx0XHRcdGNvbnN0IGlucHV0ID0gdGhpcy5pbnB1dFxuXHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXNcblxuXHRcdFx0aW5wdXQuc3RhcnQoKGV2dDogVCkgPT4ge1xuXHRcdFx0XHRpZiAoc2VsZi5iZWdhbiB8fCAhc2VsZi5zaG91bGRCZWdpbihldnQpKVxuXHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHRsZXQgY29vcmRzID0gc2VsZi5nZXRDb29yZGluYXRlcyhldnQpXG5cdFx0XHRcdHNlbGYuY29vcmRpbmF0ZXNbMF0gPSBjb29yZHNbMF1cblx0XHRcdFx0c2VsZi5jb29yZGluYXRlc1sxXSA9IGNvb3Jkc1sxXVxuXHRcdFx0XHRzZWxmLnRpbWVyLnVwZGF0ZSgpXG5cdFx0XHRcdHNlbGYuYmVnYW4gPSB0cnVlXG5cdFx0XHRcdHNlbGYucmVsZWFzZWQgPSBmYWxzZVxuXHRcdFx0XHRzZWxmLmRlbHRhc1swXSA9IDBcblx0XHRcdFx0c2VsZi5kZWx0YXNbMV0gPSAwXG5cdFx0XHRcdHNlbGYudmVsb2NpdGllcyA9IFtdXG5cdFx0XHR9KVxuXG5cdFx0XHRpbnB1dC5tb3ZlKChldnQ6IFQpID0+IHtcblx0XHRcdFx0ZXZ0LnByZXZlbnREZWZhdWx0KClcblx0XHRcdFx0c2VsZi50aW1lci51cGRhdGUoKVxuXHRcdFx0XHRsZXQgY3VycmVudENvb3JkaW5hdGVzID0gc2VsZi5nZXRDb29yZGluYXRlcyhldnQpXG5cdFx0XHRcdHNlbGYuZGVsdGFzID0gdmVjMi5zdWJ0cmFjdChzZWxmLmRlbHRhcywgY3VycmVudENvb3JkaW5hdGVzLCBzZWxmLmNvb3JkaW5hdGVzKVxuXHRcdFx0XHRsZXQgZGVsdGFUID0gc2VsZi50aW1lci5kZWx0YSgpXG5cdFx0XHRcdGlmIChkZWx0YVQgPiAwKSB7XG5cdFx0XHRcdFx0bGV0IHZlbG9jaXR5ID0gdmVjMi5jb3B5KHNlbGYudmVsb2NpdHksIHNlbGYuZGVsdGFzKVxuXHRcdFx0XHRcdHZlYzIuZGl2aWRlKHZlbG9jaXR5LCB2ZWxvY2l0eSwgdmVjMi5mcm9tVmFsdWVzKGRlbHRhVCwgZGVsdGFUKSlcblx0XHRcdFx0XHQvL1x0a2VlcCB2YWx1ZXMgaW4gcmFuZ2UgWy1JbmZpbml0eSwgbWF4VmVsb2NpdHldLCBwcmVzZXJ2aW5nIHNpZ25cblx0XHRcdFx0XHRtYXRoLnNpZ25lZENsYW1wKHZlbG9jaXR5LCAtSW5maW5pdHksIHNlbGYubWF4VmVsb2NpdHkpXG5cdFx0XHRcdFx0aWYgKHNlbGYudmVsb2NpdGllcy5sZW5ndGggPT09IHNlbGYublZlbG9jaXR5U2FtcGxlcylcblx0XHRcdFx0XHRcdHNlbGYudmVsb2NpdGllcy5zaGlmdCgpXG5cdFx0XHRcdFx0c2VsZi52ZWxvY2l0aWVzLnB1c2godmVsb2NpdHkpXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHNlbGYudmVsb2NpdGllcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0c2VsZi5tZWFuVmVsb2NpdHkgPSA8dmVjMj5tYXRoLnZlY21lYW4oc2VsZi52ZWxvY2l0aWVzKVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHNlbGYubWVhblZlbG9jaXR5ID0gdmVjMi5mcm9tVmFsdWVzKDAsIDApXG5cdFx0XHRcdH1cblx0XHRcdFx0c2VsZi5jb29yZGluYXRlcyA9IGN1cnJlbnRDb29yZGluYXRlc1xuXHRcdFx0fSlcblxuXHRcdFx0aW5wdXQuZW5kKChldnQ6IFQpID0+IHtcblx0XHRcdFx0c2VsZi5yZWxlYXNlZCA9IHRydWVcblx0XHRcdFx0c2VsZi5iZWdhbiA9IGZhbHNlXG5cdFx0XHR9KVxuXHRcdH1cblxuXHRcdHB1YmxpYyBzdGF0aWMgRGVmYXVsdHMoKTogT3JiaXRPcHRzIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdG5WZWxvY2l0eVNhbXBsZXM6IDEwMCxcblx0XHRcdFx0dmVsb2NpdHlEZWNheVNlbnNpdGl2aXR5OiAxLjEsXG5cdFx0XHRcdG1heFZlbG9jaXR5OiA0MDAwLFxuXHRcdFx0XHRzcGVlZDogNCxcblx0XHRcdFx0c21vb3RoOiB0cnVlXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y2xhc3MgT3JiaXRNb3VzZSBleHRlbmRzIF9PcmJpdDxNb3VzZUV2ZW50LCBYWS5Nb3VzZT4ge1xuXHRcdHByb3RlY3RlZCBnZXRDb29yZGluYXRlcyhldnQ6IE1vdXNlRXZlbnQpOiB2ZWMyIHtcblx0XHRcdHJldHVybiB2ZWMyLmZyb21WYWx1ZXMoZXZ0LmNsaWVudFgsIGV2dC5jbGllbnRZKVxuXHRcdH1cblx0XHRwcm90ZWN0ZWQgc2hvdWxkQmVnaW4oZXZ0OiBNb3VzZUV2ZW50KTogYm9vbGVhbiB7XG5cdFx0XHRyZXR1cm4gdHJ1ZVxuXHRcdH1cblx0XHRwdWJsaWMgc2hvdWxkSW52ZXJ0KCk6IGJvb2xlYW4ge1xuXHRcdFx0cmV0dXJuIGZhbHNlXG5cdFx0fVxuXHR9XG5cblx0Y2xhc3MgT3JiaXRUb3VjaCBleHRlbmRzIF9PcmJpdDxUb3VjaEV2ZW50LCBYWS5Ub3VjaD4ge1xuXHRcdHByb3RlY3RlZCBnZXRDb29yZGluYXRlcyhldnQ6IFRvdWNoRXZlbnQpOiB2ZWMyIHtcblx0XHRcdGlmIChldnQudG91Y2hlcy5sZW5ndGggPT09IDApXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignQXR0ZW1wdGVkIHRvIGdldCBjb29yZGluYXRlcyB3aGVuIHRoZXJlIHdlcmUgMCB0b3VjaC1wb2ludHMuJylcblx0XHRcdGxldCB0b3VjaDAgPSBldnQudG91Y2hlc1swXVxuXHRcdFx0cmV0dXJuIHZlYzIuZnJvbVZhbHVlcyh0b3VjaDAuY2xpZW50WCwgdG91Y2gwLmNsaWVudFkpXG5cdFx0fVxuXHRcdHByb3RlY3RlZCBzaG91bGRCZWdpbihldnQ6IFRvdWNoRXZlbnQpOiBib29sZWFuIHtcblx0XHRcdHJldHVybiBldnQudG91Y2hlcy5sZW5ndGggPT09IDFcblx0XHR9XG5cdFx0cHVibGljIHNob3VsZEludmVydCgpOiBib29sZWFuIHtcblx0XHRcdHJldHVybiB0cnVlXG5cdFx0fVxuXHR9XG5cblx0ZXhwb3J0IGNsYXNzIE9yYml0IHtcblxuXHRcdHByaXZhdGUgaW5wdXQ6IFhZLk1vdXNlIHwgWFkuVG91Y2hcblx0XHRwcml2YXRlIGNhbWVyYTogQ2FtZXJhXG5cdFx0cHJpdmF0ZSBvcmJpdDogT3JiaXRNb3VzZSB8IE9yYml0VG91Y2hcblx0XHRwcml2YXRlIHRpbWVyOiBEZWx0YVRpbWVyXG5cblx0XHRjb25zdHJ1Y3RvcihpbnB1dDogWFkuTW91c2UgfCBYWS5Ub3VjaCwgY2FtZXJhOiBDYW1lcmEsIG9wdHM6IE9yYml0T3B0cyA9IF9PcmJpdC5EZWZhdWx0cygpKSB7XG5cdFx0XHR0aGlzLmlucHV0ID0gaW5wdXRcblx0XHRcdHRoaXMuY2FtZXJhID0gY2FtZXJhXG5cdFx0XHR0aGlzLnRpbWVyID0gbmV3IERlbHRhVGltZXIoKVxuXHRcdFx0aWYgKGlucHV0IGluc3RhbmNlb2YgWFkuTW91c2UpIHtcblx0XHRcdFx0dGhpcy5vcmJpdCA9IG5ldyBPcmJpdE1vdXNlKGlucHV0LCB0aGlzLnRpbWVyLCBvcHRzKVxuXHRcdFx0fSBlbHNlIGlmIChpbnB1dCBpbnN0YW5jZW9mIFhZLlRvdWNoKSB7XG5cdFx0XHRcdHRoaXMub3JiaXQgPSBuZXcgT3JiaXRUb3VjaChpbnB1dCwgdGhpcy50aW1lciwgb3B0cylcblx0XHRcdH1cblx0XHR9XG5cblx0XHRwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xuXHRcdFx0Y29uc3Qgb3JiaXQgPSB0aGlzLm9yYml0XG5cdFx0XHRjb25zdCBkZWx0YXMgPSBvcmJpdC5kZWx0YXNcblx0XHRcdGNvbnN0IGNhbWVyYSA9IHRoaXMuY2FtZXJhXG5cdFx0XHRjb25zdCByYXRpbyA9IHRoaXMudGltZXIuZ2V0UmF0aW8oKVxuXHRcdFx0Y29uc3QgZGVjYXlTZW5zID0gdGhpcy5vcmJpdC52ZWxvY2l0eURlY2F5U2Vuc2l0aXZpdHlcblxuXHRcdFx0aWYgKCFvcmJpdC5yZWxlYXNlZCkge1xuXHRcdFx0XHRpZiAob3JiaXQuc2hvdWxkSW52ZXJ0KCkpIHtcblx0XHRcdFx0XHRjYW1lcmEucm90YXRlKC1kZWx0YXNbMF0sIGRlbHRhc1sxXSlcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjYW1lcmEucm90YXRlKGRlbHRhc1swXSwgLWRlbHRhc1sxXSlcblx0XHRcdFx0fVxuXHRcdFx0XHRkZWx0YXNbMF0gPSAwXG5cdFx0XHRcdGRlbHRhc1sxXSA9IDBcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxldCB2ZWwgPSBvcmJpdC5tZWFuVmVsb2NpdHlcblx0XHRcdFx0bGV0IHh2ZWwgPSAodmVsWzBdICogcmF0aW8uc2Vjb25kKSAvIHJhdGlvLmZpcnN0ICogb3JiaXQuc3BlZWRcblx0XHRcdFx0bGV0IHl2ZWwgPSAodmVsWzFdICogcmF0aW8uc2Vjb25kKSAvIHJhdGlvLmZpcnN0ICogb3JiaXQuc3BlZWRcblx0XHRcdFx0aWYgKG9yYml0LnNob3VsZEludmVydCgpKSB7XG5cdFx0XHRcdFx0Y2FtZXJhLnJvdGF0ZSgteHZlbCwgeXZlbClcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjYW1lcmEucm90YXRlKHh2ZWwsIC15dmVsKVxuXHRcdFx0XHR9XG5cdFx0XHRcdHZlbFswXSAvPSBkZWNheVNlbnNcblx0XHRcdFx0dmVsWzFdIC89IGRlY2F5U2Vuc1xuXHRcdFx0XHRpZiAoTWF0aC5hYnModmVsWzBdKSA8IDAuMDAwMDEpIHZlbFswXSA9IDBcblx0XHRcdFx0aWYgKE1hdGguYWJzKHZlbFsxXSkgPCAwLjAwMDAxKSB2ZWxbMV0gPSAwXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgTW92ZW1lbnQge1xuXG5cdHR5cGUgS2V5VCA9IHsgW0sgaW4gZGlyZWN0aW9uc106IG51bWJlciB9XG5cblx0ZXhwb3J0IGFic3RyYWN0IGNsYXNzIG1vdmVtZW50PFQ+IHtcblx0XHRwcm90ZWN0ZWQgdGltZXI6IERlbHRhVGltZXJcblx0XHRwcm90ZWN0ZWQgaW5wdXQ6IFRcblx0XHRwcm90ZWN0ZWQgY2FtZXJhOiBDYW1lcmFcblx0XHRwcm90ZWN0ZWQgc3BlZWQ6IG51bWJlclxuXG5cdFx0YWJzdHJhY3QgdXBkYXRlKCk6IHZvaWRcblxuXHRcdGNvbnN0cnVjdG9yKGlucHV0OiBULCBjYW1lcmE6IENhbWVyYSwgc3BlZWQ6IG51bWJlcikge1xuXHRcdFx0dGhpcy50aW1lciA9IG5ldyBEZWx0YVRpbWVyKClcblx0XHRcdHRoaXMuaW5wdXQgPSBpbnB1dFxuXHRcdFx0dGhpcy5jYW1lcmEgPSBjYW1lcmFcblx0XHRcdHRoaXMuc3BlZWQgPSBzcGVlZFxuXHRcdH1cblx0fVxuXG5cdGV4cG9ydCBjbGFzcyBLZXlib2FyZCBleHRlbmRzIG1vdmVtZW50PF9LZXlib2FyZC5LZXlib2FyZD4ge1xuXG5cdFx0cHVibGljIEtleXM6IEtleVQgPSB7XG5cdFx0XHRmb3J3YXJkczogX0tleWJvYXJkLktleXMuVyxcblx0XHRcdGJhY2t3YXJkczogX0tleWJvYXJkLktleXMuUyxcblx0XHRcdGxlZnQ6IF9LZXlib2FyZC5LZXlzLkEsXG5cdFx0XHRyaWdodDogX0tleWJvYXJkLktleXMuRFxuXHRcdH1cblxuXHRcdGNvbnN0cnVjdG9yKGtiOiBfS2V5Ym9hcmQuS2V5Ym9hcmQsIGNhbWVyYTogQ2FtZXJhLCBzcGVlZDogbnVtYmVyKSB7XG5cdFx0XHRzdXBlcihrYiwgY2FtZXJhLCBzcGVlZClcblx0XHR9XG5cblx0XHRwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xuXHRcdFx0Y29uc3QgdGltZXIgPSB0aGlzLnRpbWVyXG5cdFx0XHR0aW1lci51cGRhdGUoKVxuXHRcdFx0Y29uc3QgaW5wdXQgPSB0aGlzLmlucHV0XG5cdFx0XHRjb25zdCBjYW1lcmEgPSB0aGlzLmNhbWVyYVxuXHRcdFx0Y29uc3Qga2V5cyA9IHRoaXMuS2V5c1xuXHRcdFx0Y29uc3Qgc3BlZWQgPSB0aGlzLnNwZWVkXG5cdFx0XHRjb25zdCBkdCA9IHRpbWVyLmRlbHRhKClcblx0XHRcdE9iamVjdC5rZXlzKGtleXMpLm1hcChkaXIgPT4ge1xuXHRcdFx0XHRsZXQga2V5TiA9IEtleWJvYXJkLmdldChrZXlzLCBkaXIgYXMgZGlyZWN0aW9ucylcblx0XHRcdFx0aWYgKGlucHV0LmlzRG93bihrZXlOKSkge1xuXHRcdFx0XHRcdGNhbWVyYS5tb3ZlKGRpciBhcyBkaXJlY3Rpb25zLCBkdCwgc3BlZWQpXG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0fVxuXG5cdFx0cHVibGljIHN0YXRpYyBnZXQ8VCwgSyBleHRlbmRzIGtleW9mIFQ+KG9iajogVCwgbmFtZTogSyk6IFRbS10ge1xuICAgIFx0XHRyZXR1cm4gb2JqW25hbWVdO1xuXHRcdH1cblx0fVxuXG5cdGV4cG9ydCBjbGFzcyBUb3VjaCBleHRlbmRzIG1vdmVtZW50PFhZLlRvdWNoPiB7XG5cblx0XHRkaXN0OiBudW1iZXJcblx0XHRiZWdhbjogYm9vbGVhblxuXG5cdFx0Y29uc3RydWN0b3IodG91Y2g6IFhZLlRvdWNoLCBjYW1lcmE6IENhbWVyYSwgc3BlZWQ6IG51bWJlcikge1xuXHRcdFx0c3VwZXIodG91Y2gsIGNhbWVyYSwgc3BlZWQpXG5cblx0XHRcdHRoaXMuZGlzdCA9IDBcblx0XHRcdHRoaXMuYmVnYW4gPSBmYWxzZVxuXG5cdFx0XHR0aGlzLnNldHVwKClcblx0XHR9XG5cblx0XHRwcml2YXRlIHNldHVwKCk6IHZvaWQge1xuXHRcdFx0Y29uc3QgdG91Y2ggPSB0aGlzLmlucHV0XG5cdFx0XHRjb25zdCBzZWxmID0gdGhpc1xuXG5cdFx0XHRjb25zdCBnZXREaXN0YW5jZSA9IChldnQ6IFRvdWNoRXZlbnQpID0+IHtcblx0XHRcdFx0bGV0IGN1cnJYMSA9IGV2dC50b3VjaGVzWzBdLmNsaWVudFgsXG5cdFx0XHRcdFx0Y3VyclgyID0gZXZ0LnRvdWNoZXNbMV0uY2xpZW50WCxcblx0XHRcdFx0XHRjdXJyWTEgPSBldnQudG91Y2hlc1swXS5jbGllbnRZLFxuXHRcdFx0XHRcdGN1cnJZMiA9IGV2dC50b3VjaGVzWzFdLmNsaWVudFlcblx0XHRcdFx0bGV0IHB0MSA9IHZlYzIuZnJvbVZhbHVlcyhjdXJyWDEsIGN1cnJZMSlcblx0XHRcdFx0bGV0IHB0MiA9IHZlYzIuZnJvbVZhbHVlcyhjdXJyWDIsIGN1cnJZMilcblx0XHRcdFx0cmV0dXJuIG1hdGguZGlzdGFuY2UocHQxLCBwdDIpXG5cdFx0XHR9XG5cblx0XHRcdHRvdWNoLnN0YXJ0KGV2dCA9PiB7XG5cdFx0XHRcdGlmIChzZWxmLmJlZ2FuIHx8IGV2dC50b3VjaGVzLmxlbmd0aCAhPT0gMilcblx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0c2VsZi5iZWdhbiA9IHRydWVcblx0XHRcdFx0c2VsZi5kaXN0ID0gZ2V0RGlzdGFuY2UoZXZ0KVxuXHRcdFx0XHRzZWxmLnRpbWVyLnVwZGF0ZSgpXG5cdFx0XHR9KVxuXG5cdFx0XHR0b3VjaC5tb3ZlKGV2dCA9PiB7XG5cdFx0XHRcdGV2dC5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRcdHNlbGYudGltZXIudXBkYXRlKClcblx0XHRcdFx0aWYgKGV2dC50b3VjaGVzLmxlbmd0aCAhPT0gMilcblx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0bGV0IGN1cnJEaXN0ID0gZ2V0RGlzdGFuY2UoZXZ0KVxuXHRcdFx0XHRsZXQgb2ZmRGlzdCA9IGN1cnJEaXN0IC0gc2VsZi5kaXN0XG5cdFx0XHRcdGxldCBkdCA9IHNlbGYudGltZXIuZGVsdGEoKVxuXHRcdFx0XHRsZXQgZGlyOiBkaXJlY3Rpb25zID0gb2ZmRGlzdCA+IDAgPyAnZm9yd2FyZHMnIDogJ2JhY2t3YXJkcydcblx0XHRcdFx0c2VsZi5jYW1lcmEubW92ZShkaXIsIGR0LCBzZWxmLnNwZWVkKVxuXHRcdFx0XHRzZWxmLmRpc3QgPSBjdXJyRGlzdFxuXHRcdFx0fSlcblxuXHRcdFx0dG91Y2guZW5kKGV2dCA9PiB7XG5cdFx0XHRcdHNlbGYuYmVnYW4gPSBmYWxzZVxuXHRcdFx0fSlcblx0XHR9XG5cblx0XHRwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xuXHRcdFx0dGhpcy50aW1lci51cGRhdGUoKVxuXHRcdH1cblxuXHR9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm90YXRpb24ge1xuXG5cdGV4cG9ydCBjbGFzcyBUb3VjaCBleHRlbmRzIE1vdmVtZW50Lm1vdmVtZW50PFhZLlRvdWNoPiB7XG5cblx0XHRkaWRUYXA6IGJvb2xlYW5cblx0XHR0YXBEZXRlY3RvcjogWFkuRG91YmxlVGFwRGV0ZWN0b3Jcblx0XHRsYXN0OiB2ZWMyXG5cdFx0bGFzdFZlbDogdmVjMlxuXHRcdGN1cnJlbnQ6IHZlYzJcblx0XHR2ZWxvY2l0aWVzOiBBcnJheTx2ZWMyPiA9IFtdXG5cdFx0blZlbG9jaXRpZXM6IG51bWJlciA9IDEwMFxuXG5cdFx0Y29uc3RydWN0b3IodG91Y2g6IFhZLlRvdWNoLCBjYW1lcmE6IENhbWVyYSwgc3BlZWQ6IG51bWJlcikge1xuXHRcdFx0c3VwZXIodG91Y2gsIGNhbWVyYSwgc3BlZWQpXG5cblx0XHRcdHRoaXMuZGlkVGFwID0gZmFsc2Vcblx0XHRcdHRoaXMudGFwRGV0ZWN0b3IgPSBuZXcgWFkuRG91YmxlVGFwRGV0ZWN0b3IodG91Y2gpXG5cblx0XHRcdHRoaXMubGFzdCA9IHZlYzIuY3JlYXRlKClcblx0XHRcdHRoaXMuY3VycmVudCA9IHZlYzIuY3JlYXRlKClcblx0XHRcdHRoaXMubGFzdFZlbCA9IHZlYzIuY3JlYXRlKClcblxuXHRcdFx0dGhpcy5zZXR1cCgpXG5cdFx0fVxuXG5cdFx0cHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcblx0XHRcdHRoaXMudGltZXIudXBkYXRlKClcblx0XHR9XG5cblx0XHRwcml2YXRlIHNldHVwKCk6IHZvaWQge1xuXHRcdFx0Y29uc3QgdG91Y2ggPSB0aGlzLmlucHV0XG5cdFx0XHRjb25zdCBzZWxmID0gdGhpc1xuXHRcdFx0Y29uc3QgY2FtZXJhID0gdGhpcy5jYW1lcmFcblx0XHRcdGNvbnN0IGRldGVjdG9yID0gdGhpcy50YXBEZXRlY3RvclxuXG5cdFx0XHRjb25zdCByZXNldCA9IChldnQ6IFRvdWNoRXZlbnQpID0+IHtcblx0XHRcdFx0c2VsZi5kaWRUYXAgPSB0cnVlXG5cdFx0XHRcdHNlbGYubGFzdFswXSA9IGV2dC50b3VjaGVzWzBdLmNsaWVudFhcblx0XHRcdFx0c2VsZi5sYXN0WzFdID0gZXZ0LnRvdWNoZXNbMF0uY2xpZW50WVxuXHRcdFx0XHRzZWxmLnZlbG9jaXRpZXMgPSBbXVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBkZXRlY3Rvci5kb3VibGV0YXAoZXZ0ID0+IHtcblx0XHRcdC8vIFx0cmVzZXQoZXZ0KVxuXHRcdFx0Ly8gfSlcblxuXHRcdFx0Ly8gdG91Y2guc3RhcnQoZXZ0ID0+IHtcblx0XHRcdC8vIFx0c2VsZi50aW1lci51cGRhdGUoKVxuXHRcdFx0Ly8gfSlcblxuXHRcdFx0dG91Y2guc3RhcnQoZXZ0ID0+IHtcblx0XHRcdFx0aWYgKGV2dC50b3VjaGVzLmxlbmd0aCAhPT0gMykgXG5cdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdHJlc2V0KGV2dClcblx0XHRcdFx0c2VsZi50aW1lci51cGRhdGUoKVxuXHRcdFx0fSlcblxuXHRcdFx0dG91Y2gubW92ZShldnQgPT4ge1xuXHRcdFx0XHRpZiAoIXNlbGYuZGlkVGFwIHx8IGV2dC50b3VjaGVzLmxlbmd0aCAhPT0gMylcblx0XHRcdFx0XHRyZXR1cm5cblxuXHRcdFx0XHRldnQucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHRldnQuc3RvcFByb3BhZ2F0aW9uKClcblx0XHRcdFx0c2VsZi50aW1lci51cGRhdGUoKVxuXHRcdFx0XHRjb25zdCBjbG9uZSA9IGNvbW1vbi5jbG9uZVxuXHRcdFx0XHRsZXQgdG91Y2gwID0gZXZ0LnRvdWNoZXNbMF1cblx0XHRcdFx0bGV0IGZvY3VzUG9pbnQgPSBbMCwgMCwgMF1cblx0XHRcdFx0bGV0IHBvcyA9IDx2ZWMzPmNsb25lKGNhbWVyYS5wb3NpdGlvbilcblx0XHRcdFx0bGV0IGNhbUZvY3VzID0gdmVjMy5zdWJ0cmFjdCh2ZWMzLmNyZWF0ZSgpLCBwb3MsIGZvY3VzUG9pbnQpXG5cdFx0XHRcdGxldCByaWdodCA9IDx2ZWMzPmNsb25lKGNhbWVyYS5yaWdodClcblx0XHRcdFx0bGV0IHVwID0gPHZlYzM+Y2xvbmUoY2FtZXJhLnVwKVxuXHRcdFx0XHRsZXQgbmV3UG9zID0gdmVjMy5jcmVhdGUoKVxuXHRcdFx0XHRyaWdodCA9IHZlYzMubm9ybWFsaXplKHJpZ2h0LCByaWdodClcblx0XHRcdFx0dXAgPSB2ZWMzLm5vcm1hbGl6ZSh1cCwgdXApXG5cblx0XHRcdFx0bGV0IGRlbHRhUG9zID0gdmVjMi5mcm9tVmFsdWVzKHRvdWNoMC5jbGllbnRYLCB0b3VjaDAuY2xpZW50WSlcblx0XHRcdFx0bGV0IGR0ID0gc2VsZi50aW1lci5kZWx0YSgpXG5cdFx0XHRcdGxldCB2ZWwgPSB2ZWMyLmZyb21WYWx1ZXMoMCwgMClcblx0XHRcdFx0ZGVsdGFQb3MgPSB2ZWMyLnN1YnRyYWN0KGRlbHRhUG9zLCBkZWx0YVBvcywgc2VsZi5sYXN0KVxuXG5cdFx0XHRcdGlmIChkdCA+IDApIHtcblx0XHRcdFx0XHR2ZWwgPSB2ZWMyLmRpdmlkZSh2ZWwsIGRlbHRhUG9zLCB2ZWMyLmZyb21WYWx1ZXMoZHQsIGR0KSlcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2ZWwuc2V0KHRoaXMubGFzdFZlbClcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxldCBzcGVlZCA9IHZlYzIuY29weSh2ZWMyLmNyZWF0ZSgpLCB2ZWwpXG5cdFx0XHRcdG1hdGguYWJzKHNwZWVkKVxuXG5cdFx0XHRcdGlmIChzZWxmLnZlbG9jaXRpZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHNwZWVkID0gbWF0aC52ZWNtZWFuKHNlbGYudmVsb2NpdGllcylcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzcGVlZFswXSA9IHZlbFswXVxuXHRcdFx0XHRcdHNwZWVkWzFdID0gdmVsWzFdXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRsZXQgeWF3ID0gdmVsWzBdICogMC4wMDJcblx0XHRcdFx0bGV0IHBpdGNoID0gdmVsWzFdICogMC4wMDJcblxuXHRcdFx0XHQvLyBsZXQgeWF3ID0gc3BlZWRbMF0gPT09IDAgPyAwIDogdmVsWzBdIC8gc3BlZWRbMF1cblx0XHRcdFx0Ly8gbGV0IHBpdGNoID0gc3BlZWRbMV0gPT09IDAgPyAwIDogdmVsWzFdIC8gc3BlZWRbMV1cblxuXHRcdFx0XHRsZXQgbWF0ID0gbmV3IG1hdHJpeC50cmFuc2Zvcm0oKVxuXHRcdFx0XHRcdC5yb3RhdGUobWF0aC5yYWRpYW5zKHlhdyksIHVwKVxuXHRcdFx0XHRcdC5yb3RhdGUobWF0aC5yYWRpYW5zKHBpdGNoKSwgcmlnaHQpXG5cdFx0XHRcdFx0Lm1hdCgpXG5cblx0XHRcdFx0bGV0IGNhbUZvY3VzNCA9IHZlYzQuZnJvbVZhbHVlcyhjYW1Gb2N1c1swXSwgY2FtRm9jdXNbMV0sIGNhbUZvY3VzWzJdLCAxKVxuXHRcdFx0XHR2ZWM0LnRyYW5zZm9ybU1hdDQoY2FtRm9jdXM0LCBjYW1Gb2N1czQsIG1hdClcblx0XHRcdFx0dmVjNC5hZGQoY2FtRm9jdXM0LCBjYW1Gb2N1czQsIFtmb2N1c1BvaW50WzBdLCBmb2N1c1BvaW50WzFdLCBmb2N1c1BvaW50WzJdLCAwXSlcblxuXHRcdFx0XHRuZXdQb3NbMF0gPSBjYW1Gb2N1czRbMF1cblx0XHRcdFx0bmV3UG9zWzFdID0gY2FtRm9jdXM0WzFdXG5cdFx0XHRcdG5ld1Bvc1syXSA9IGNhbUZvY3VzNFsyXVxuXG5cdFx0XHRcdGNhbWVyYS5zZXRQb3NpdGlvbihuZXdQb3MpXG5cblx0XHRcdFx0c2VsZi5sYXN0WzBdID0gdG91Y2gwLmNsaWVudFhcblx0XHRcdFx0c2VsZi5sYXN0WzFdID0gdG91Y2gwLmNsaWVudFlcblx0XHRcdFx0c2VsZi5sYXN0VmVsLnNldCh2ZWwpXG5cblx0XHRcdFx0aWYgKHNlbGYudmVsb2NpdGllcy5sZW5ndGggPT09IHNlbGYublZlbG9jaXRpZXMpXG5cdFx0XHRcdFx0c2VsZi52ZWxvY2l0aWVzLnNoaWZ0KClcblx0XHRcdFx0c2VsZi52ZWxvY2l0aWVzLnB1c2godmVjMi5mcm9tVmFsdWVzKHNwZWVkWzBdLCBzcGVlZFsxXSkpXG5cdFx0XHR9KVxuXG5cdFx0XHR0b3VjaC5lbmQoZXZ0ID0+IHtcblx0XHRcdFx0c2VsZi5kaWRUYXAgPSBmYWxzZVxuXHRcdFx0fSlcblx0XHR9XG5cblx0fVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZ2wvaW5wdXQvY2FtZXJhLWNvbnRyb2xzLnRzIiwiaW1wb3J0IHsgU2hhZGVyU291cmNlLCBTaGFkZXJQcm9ncmFtU291cmNlLCBTaGFkZXJUeXBlcyB9IGZyb20gJy4uL3NoYWRlci9zaGFkZXInXG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9FcmthbWFuL2dsc2wtZ29kcmF5cyBcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm52aWRpYS5jb20vZ3B1Z2Vtcy9HUFVHZW1zMy9ncHVnZW1zM19jaDEzLmh0bWxcblxubmFtZXNwYWNlIF9zb3VyY2VzIHtcblx0ZXhwb3J0IGNvbnN0IHZlcnRleDogc3RyaW5nID0gYFxuXHRcdGF0dHJpYnV0ZSB2ZWMzIGluX3Bvc2l0aW9uO1xuXHRcdGF0dHJpYnV0ZSB2ZWMzIGluX25vcm1hbDtcblx0XHRhdHRyaWJ1dGUgdmVjMiBpbl91djtcblxuXHRcdHZhcnlpbmcgbWVkaXVtcCB2ZWMyIHZfdXY7XG5cblx0XHR2b2lkIG1haW4oKSB7XG5cdFx0XHR2X3V2ID0gaW5fdXY7XG5cdFx0XHRnbF9Qb3NpdGlvbiA9IHZlYzQoaW5fcG9zaXRpb24sIDEuMCk7XG5cdFx0fVxuXHRgXG5cblx0ZXhwb3J0IGNvbnN0IGZyYWdtZW50OiBzdHJpbmcgPSBgXG5cblx0XHRwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XG5cblx0XHR2ZWMzIGdvZHJheXMoXG5cdFx0ICAgIGZsb2F0IGRlbnNpdHksXG5cdFx0ICAgIGZsb2F0IHdlaWdodCxcblx0XHQgICAgZmxvYXQgZGVjYXksXG5cdFx0ICAgIGZsb2F0IGV4cG9zdXJlLFxuXHRcdCAgICBpbnQgbnVtU2FtcGxlcyxcblx0XHQgICAgc2FtcGxlcjJEIG9jY2x1c2lvblRleHR1cmUsXG5cdFx0ICAgIHZlYzIgc2NyZWVuU3BhY2VMaWdodFBvcyxcblx0XHQgICAgdmVjMiB1dlxuXHQgICAgKSB7XG5cblx0XHQgICAgdmVjMyBmcmFnQ29sb3IgPSB2ZWMzKDAuMCwwLjAsMC4wKTtcblxuXHRcdFx0dmVjMiBkZWx0YVRleENvb3JkID0gdmVjMiggdXYgLSBzY3JlZW5TcGFjZUxpZ2h0UG9zLnh5ICk7XG5cblx0XHRcdHZlYzIgdGV4Q29vcmQgPSB1di54eTtcblx0XHRcdGRlbHRhVGV4Q29vcmQgKj0gKDEuMCAvIGZsb2F0KG51bVNhbXBsZXMpKSAqIGRlbnNpdHk7XG5cdFx0XHRmbG9hdCBpbGx1bWluYXRpb25EZWNheSA9IDEuMDtcblxuXHRcdFx0Zm9yKGludCBpPTA7IGkgPCAxMDAgOyBpKyspe1xuXHRcdFx0ICAgIGlmKG51bVNhbXBsZXMgPCBpKSB7XG5cdFx0ICAgICAgICAgICAgYnJlYWs7XG5cdFx0XHQgICAgfVxuXG5cdFx0XHRcdHRleENvb3JkIC09IGRlbHRhVGV4Q29vcmQ7XG5cdFx0XHRcdHZlYzMgc2FtcCA9IHRleHR1cmUyRChvY2NsdXNpb25UZXh0dXJlLCB0ZXhDb29yZCkueHl6O1xuXHRcdFx0XHRzYW1wICo9IGlsbHVtaW5hdGlvbkRlY2F5ICogd2VpZ2h0O1xuXHRcdFx0XHRmcmFnQ29sb3IgKz0gc2FtcDtcblx0XHRcdFx0aWxsdW1pbmF0aW9uRGVjYXkgKj0gZGVjYXk7XG5cdFx0XHR9XG5cblx0XHRcdGZyYWdDb2xvciAqPSBleHBvc3VyZTtcblxuXHRcdCAgICByZXR1cm4gZnJhZ0NvbG9yO1xuXHRcdH1cblxuXHRcdHZhcnlpbmcgdmVjMiB2X3V2O1xuXHRcdHZhcnlpbmcgdmVjMyB2X25vcm1hbDtcblxuXHRcdHVuaWZvcm0gdmVjMyB1U2NyZWVuU3BhY2VTdW5Qb3M7XG5cdFx0dW5pZm9ybSBzYW1wbGVyMkQgdU9jY2x1c2lvblRleHR1cmU7XG5cblx0XHR1bmlmb3JtIGZsb2F0IHVEZW5zaXR5O1xuXHRcdHVuaWZvcm0gZmxvYXQgdVdlaWdodDtcblx0XHR1bmlmb3JtIGZsb2F0IHVEZWNheTtcblx0XHR1bmlmb3JtIGZsb2F0IHVFeHBvc3VyZTtcblx0XHR1bmlmb3JtIGludCB1TnVtU2FtcGxlcztcblxuXHRcdHZvaWQgbWFpbigpIHtcblxuXHRcdFx0dmVjMiBzY3JlZW5TcGFjZVN1blBvcyA9IHVTY3JlZW5TcGFjZVN1blBvcy54eTtcblxuXHRcdFx0dmVjMyBmcmFnQ29sb3IgPSBnb2RyYXlzKFxuXHRcdFx0ICAgIHVEZW5zaXR5LFxuXHRcdFx0ICAgIHVXZWlnaHQsXG5cdFx0XHQgICAgdURlY2F5LFxuXHRcdFx0ICAgIHVFeHBvc3VyZSxcblx0XHRcdCAgICB1TnVtU2FtcGxlcyxcblx0XHRcdCAgICB1T2NjbHVzaW9uVGV4dHVyZSxcblx0XHRcdCAgICBzY3JlZW5TcGFjZVN1blBvcyxcblx0XHRcdCAgICB2X3V2XG5cdFx0ICAgICk7XG5cblx0XHQgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNChmcmFnQ29sb3IsIDEuMCk7XG5cdFx0fVxuXHRgXG59XG5cbmNvbnN0IFZvbHVtZTogU2hhZGVyUHJvZ3JhbVNvdXJjZSA9IHtcblx0c291cmNlczogW1xuXHRcdHtcblx0XHRcdHNvdXJjZTogX3NvdXJjZXMudmVydGV4LFxuXHRcdFx0dHlwZTogU2hhZGVyVHlwZXMuVkVSVEVYLFxuXHRcdFx0dW5pZm9ybXM6IFtdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzb3VyY2U6IF9zb3VyY2VzLmZyYWdtZW50LFxuXHRcdFx0dHlwZTogU2hhZGVyVHlwZXMuRlJBR01FTlQsXG5cdFx0XHR1bmlmb3JtczogW11cblx0XHR9XG5cdF1cbn1cblxuZXhwb3J0IHsgVm9sdW1lIH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC9zaGFkZXJzL3NoYWRlci12b2x1bWUudHMiLCJpbXBvcnQgeyBTaGFkZXJTb3VyY2UsIFNoYWRlclByb2dyYW1Tb3VyY2UsIFNoYWRlclR5cGVzIH0gZnJvbSAnLi4vc2hhZGVyL3NoYWRlcidcblxubmFtZXNwYWNlIF9zb3VyY2VzIHtcblx0ZXhwb3J0IGNvbnN0IHZlcnRleDogc3RyaW5nID0gYFxuXHRcdGF0dHJpYnV0ZSB2ZWMzIGluX3Bvc2l0aW9uO1xuXG5cdFx0dW5pZm9ybSBtYXQ0IG1vZGVsO1xuXHRcdHVuaWZvcm0gbWF0NCB2aWV3O1xuXHRcdHVuaWZvcm0gbWF0NCBwcm9qZWN0aW9uO1xuXG5cdFx0dm9pZCBtYWluKCkge1xuXHRcdFx0Z2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uICogdmlldyAqIG1vZGVsICogdmVjNChpbl9wb3NpdGlvbiwgMS4wKTtcblx0XHR9XG5cdGBcblxuXHRleHBvcnQgY29uc3QgZnJhZ21lbnQ6IHN0cmluZyA9IGBcblx0XHR2b2lkIG1haW4oKSB7XG5cdFx0ICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoMS4wKTtcblx0XHR9XG5cdGBcbn1cblxuY29uc3QgR2VuU2hhZG93czE6IFNoYWRlclByb2dyYW1Tb3VyY2UgPSB7XG5cdHNvdXJjZXM6IFtcblx0XHR7XG5cdFx0XHRzb3VyY2U6IF9zb3VyY2VzLnZlcnRleCxcblx0XHRcdHR5cGU6IFNoYWRlclR5cGVzLlZFUlRFWCxcblx0XHRcdHVuaWZvcm1zOiBbJ21vZGVsJywgJ3ZpZXcnLCAncHJvamVjdGlvbiddXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzb3VyY2U6IF9zb3VyY2VzLmZyYWdtZW50LFxuXHRcdFx0dHlwZTogU2hhZGVyVHlwZXMuRlJBR01FTlQsXG5cdFx0XHR1bmlmb3JtczogW11cblx0XHR9XG5cdF1cbn1cblxuZXhwb3J0IHsgR2VuU2hhZG93czEgfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2dsL3NoYWRlcnMvc2hhZGVyLWdlbi1zaGFkb3dzMS50cyIsImltcG9ydCB7IFNoYWRlclNvdXJjZSwgU2hhZGVyUHJvZ3JhbVNvdXJjZSwgU2hhZGVyVHlwZXMgfSBmcm9tICcuLi9zaGFkZXIvc2hhZGVyJ1xuXG5uYW1lc3BhY2UgX3NvdXJjZXMge1xuXHRleHBvcnQgY29uc3QgdmVydGV4OiBzdHJpbmcgPSBgXG5cdFx0YXR0cmlidXRlIHZlYzMgaW5fcG9zaXRpb247XG5cdFx0YXR0cmlidXRlIHZlYzMgaW5fbm9ybWFsO1xuXHRcdGF0dHJpYnV0ZSB2ZWMyIGluX3V2O1xuXG5cdFx0dW5pZm9ybSBtYXQ0IG1vZGVsO1xuXHRcdHVuaWZvcm0gbWF0NCB2aWV3O1xuXHRcdHVuaWZvcm0gbWF0NCBwcm9qZWN0aW9uO1xuXG5cdFx0dW5pZm9ybSBtYXQ0IGxpZ2h0X3NwYWNlX3RyYW5zZm9ybTtcblxuXHRcdHZhcnlpbmcgbWVkaXVtcCB2ZWMzIHZfcG9zaXRpb247XG5cdFx0dmFyeWluZyBtZWRpdW1wIHZlYzIgdl91djtcblx0XHR2YXJ5aW5nIG1lZGl1bXAgdmVjMyB2X25vcm1hbDtcblxuXHRcdHZhcnlpbmcgbWVkaXVtcCB2ZWM0IHZfbGlnaHRfc3BhY2VfcG9zaXRpb247XG5cblx0XHR2b2lkIG1haW4oKSB7XG5cdFx0XHR2ZWM0IHY0X3Bvc2l0aW9uID0gdmVjNChpbl9wb3NpdGlvbiwgMS4wKTtcblx0XHRcdHZfcG9zaXRpb24gPSB2ZWMzKG1vZGVsICogdjRfcG9zaXRpb24pO1xuXHRcdFx0dl91diA9IGluX3V2O1xuXHRcdFx0dl9ub3JtYWwgPSBpbl9ub3JtYWw7XG5cdFx0XHR2X2xpZ2h0X3NwYWNlX3Bvc2l0aW9uID0gbGlnaHRfc3BhY2VfdHJhbnNmb3JtICogbW9kZWwgKiB2NF9wb3NpdGlvbjtcblx0XHRcdGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbiAqIHZpZXcgKiBtb2RlbCAqIHZlYzQoaW5fcG9zaXRpb24sIDEuMCk7XG5cdFx0fVxuXHRgXG5cdGV4cG9ydCBjb25zdCBmcmFnbWVudDogc3RyaW5nID0gYFxuXG5cdFx0cHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XG5cblx0XHRjb25zdCBmbG9hdCBQSSA9IDMuMTQxNTkyNjUzNTk7XG5cblx0XHRmbG9hdCBkaXN0cmlidXRpb25fZ2d4KHZlYzMgTiwgdmVjMyBILCBmbG9hdCByb3VnaG5lc3MpO1xuXHRcdGZsb2F0IGdlb21ldHJ5X3NjaGxpY2tfZ2d4KGZsb2F0IE5kb3RWLCBmbG9hdCByb3VnaG5lc3MpO1xuXHRcdGZsb2F0IGdlb21ldHJ5X3NtaXRoKHZlYzMgTiwgdmVjMyBWLCB2ZWMzIEwsIGZsb2F0IHJvdWdobmVzcyk7XG5cdFx0dmVjMyBmcmVzbmVsX3NjaGxpY2soZmxvYXQgY29zX3RoZXRhLCB2ZWMzIEYwKTtcblxuXHRcdHZlYzMgUEJSKFxuXHRcdCAgICAgdmVjMyBub3JtYWxzLFxuXHRcdCAgICAgdmVjMyBhbGJlZG8sXG5cdFx0ICAgICBmbG9hdCByb3VnaG5lc3MsXG5cdFx0ICAgICBmbG9hdCBtZXRhbGxpYyxcblx0XHQgICAgIHZlYzMgY2FtX3Bvc2l0aW9uLFxuXHRcdCAgICAgdmVjMyB3b3JsZF9wb3NpdGlvbixcblx0XHQgICAgIHZlYzMgbGlnaHRfcG9zaXRpb24sXG5cdFx0ICAgICB2ZWMzIGxpZ2h0X2NvbG9yLFxuXHRcdCAgICAgYm9vbCBpc19kaXJlY3Rpb25hbCkge1xuXHRcdCAgICBcblx0XHQgICAgdmVjMyBGMCA9IHZlYzMoMC4wNCk7XG5cdFx0ICAgIEYwID0gbWl4KEYwLCBhbGJlZG8sIG1ldGFsbGljKTtcblx0XHQgICAgXG5cdFx0ICAgIHZlYzMgTiA9IG5vcm1hbGl6ZShub3JtYWxzKTtcblx0XHQgICAgdmVjMyBWID0gbm9ybWFsaXplKGNhbV9wb3NpdGlvbiAtIHdvcmxkX3Bvc2l0aW9uKTtcblx0XHQgICAgXG5cdFx0ICAgIHZlYzMgTDtcblxuXHRcdCAgICBpZiAoIWlzX2RpcmVjdGlvbmFsKSB7XG5cdFx0ICAgIFx0TCA9IG5vcm1hbGl6ZShsaWdodF9wb3NpdGlvbiAtIHdvcmxkX3Bvc2l0aW9uKTtcblx0XHQgICAgfSBlbHNlIHtcblx0XHQgICAgXHRMID0gbm9ybWFsaXplKC1saWdodF9wb3NpdGlvbik7XG5cdFx0ICAgIH1cblxuXHRcdCAgICB2ZWMzIEggPSBub3JtYWxpemUoViArIEwpO1xuXG5cdFx0ICAgIGZsb2F0IGF0dGVudWF0aW9uID0gMS4wO1xuXHRcdCAgICBcblx0XHQgICAgaWYgKCFpc19kaXJlY3Rpb25hbCkge1xuXHRcdCAgICBcdGZsb2F0IGRpc3RhbmNlID0gbGVuZ3RoKGxpZ2h0X3Bvc2l0aW9uIC0gd29ybGRfcG9zaXRpb24pO1xuXHRcdCAgICBcdGF0dGVudWF0aW9uID0gMS4wIC8gKGRpc3RhbmNlICogZGlzdGFuY2UgKiAwLjAwMDIpO1xuXHRcdCAgICB9XG5cdFx0ICAgIFxuXHRcdCAgICB2ZWMzIHJhZGlhbmNlID0gbGlnaHRfY29sb3IgKiBhdHRlbnVhdGlvbjtcblx0XHQgICAgXG5cdFx0ICAgIHZlYzMgRiA9IGZyZXNuZWxfc2NobGljayhtYXgoZG90KEgsIFYpLCAwLjApLCBGMCk7XG5cdFx0ICAgIGZsb2F0IE5ERiA9IGRpc3RyaWJ1dGlvbl9nZ3goTiwgSCwgcm91Z2huZXNzKTtcblx0XHQgICAgZmxvYXQgRyA9IGdlb21ldHJ5X3NtaXRoKE4sIFYsIEwsIHJvdWdobmVzcyk7XG5cdFx0ICAgIHZlYzMgbnVtZXIgPSB2ZWMzKE5ERikgKiB2ZWMzKEcpICogRjtcblx0XHQgICAgZmxvYXQgZGVub20gPSA0LjAgKiBtYXgoZG90KE4sIFYpLCAwLjApICogbWF4KGRvdChOLCBMKSwgMC4wKSArIDAuMDAxO1xuXHRcdCAgICB2ZWMzIHNwZWN1bGFyID0gbnVtZXIgLyBkZW5vbTtcblx0XHQgICAgXG5cdFx0ICAgIHZlYzMga1MgPSBGO1xuXHRcdCAgICB2ZWMzIGtEID0gdmVjMygxLjApIC0ga1M7XG5cdFx0ICAgIGtEICo9IDEuMCAtIG1ldGFsbGljO1xuXHRcdCAgICBcblx0XHQgICAgZmxvYXQgTmRvdEwgPSBtYXgoZG90KE4sIEwpLCAwLjApO1xuXHRcdCAgICByZXR1cm4gKGtEICogYWxiZWRvIC8gUEkgKyBzcGVjdWxhcikgKiByYWRpYW5jZSAqIE5kb3RMO1xuXHRcdH1cblxuXHRcdC8vXG5cdFx0Ly8gIEZyZXNuZWwgY29tcG9uZW50IChGKVxuXHRcdC8vXG5cblx0XHR2ZWMzIGZyZXNuZWxfc2NobGljayhmbG9hdCBjb3NUaGV0YSwgdmVjMyBGMCkge1xuXHRcdCAgICByZXR1cm4gRjAgKyAoMS4wIC0gRjApICogcG93KDEuMCAtIGNvc1RoZXRhLCA1LjApO1xuXHRcdH1cblxuXHRcdC8vXG5cdFx0Ly8gIE5vcm1hbCBkaXN0cmlidXRpb24gY29tcG9uZW50IChEKVxuXHRcdC8vXG5cblx0XHRmbG9hdCBkaXN0cmlidXRpb25fYmVja21hbih2ZWMzIGgsIHZlYzMgbiwgZmxvYXQgcm91Z2huZXNzKSB7XG5cdFx0ICAgIGZsb2F0IGEgPSByb3VnaG5lc3MgKiByb3VnaG5lc3M7XG5cdFx0ICAgIGZsb2F0IGEyID0gYSAqIGE7XG5cdFx0ICAgIGZsb2F0IG5fZG90X2ggPSBtYXgoZG90KG4sIGgpLCAwLjApO1xuXHRcdCAgICBmbG9hdCBuX2RvdF9oMiA9IG5fZG90X2ggKiBuX2RvdF9oO1xuXHRcdCAgICBmbG9hdCBwYXJ0X2EgPSAxLjAgLyAoUEkgKiBhMiAqIHBvdyhuX2RvdF9oLCA0LjApKTtcblx0XHQgICAgZmxvYXQgZXhwX2NvbXBvbmVudCA9IChuX2RvdF9oMiAtIDEuMCkgLyAoYTIgKiBuX2RvdF9oMik7XG5cdFx0ICAgIHJldHVybiBwYXJ0X2EgKiBleHAoZXhwX2NvbXBvbmVudCk7XG5cdFx0fVxuXG5cdFx0ZmxvYXQgZGlzdHJpYnV0aW9uX2dneCh2ZWMzIE4sIHZlYzMgSCwgZmxvYXQgcm91Z2huZXNzKSB7XG5cdFx0ICAgIGZsb2F0IGEgPSByb3VnaG5lc3MgKiByb3VnaG5lc3M7XG5cdFx0ICAgIGZsb2F0IGEyID0gYSAqIGE7XG5cdFx0ICAgIGZsb2F0IE5kb3RIID0gbWF4KGRvdChOLCBIKSwgMC4wKTtcblx0XHQgICAgZmxvYXQgTmRvdEgyID0gTmRvdEggKiBOZG90SDtcblx0XHQgICAgXG5cdFx0ICAgIGZsb2F0IGRlbm9tID0gKE5kb3RIMiAqIChhMi0xLjApICsgMS4wKTtcblx0XHQgICAgZGVub20gPSBQSSAqIGRlbm9tICogZGVub207XG5cdFx0ICAgIFxuXHRcdCAgICByZXR1cm4gYTIgLyBkZW5vbTtcblx0XHR9XG5cblx0XHQvL1xuXHRcdC8vICBHZW9tZXRyeSBkaXN0cmlidXRpb24gY29tcG9uZW50IChHKVxuXHRcdC8vXG5cblx0XHRmbG9hdCBnZW9tZXRyeV9zY2hsaWNrX2dneChmbG9hdCBOZG90ViwgZmxvYXQgcm91Z2huZXNzKSB7XG5cdFx0ICAgIGZsb2F0IHIgPSByb3VnaG5lc3MgKyAxLjA7XG5cdFx0ICAgIC8vICBkaXJlY3QgbGlnaHRcblx0XHQgICAgZmxvYXQgayA9IChyKnIpIC8gOC4wO1xuXHRcdCAgICAvLyAgSUJMXG5cdFx0ICAgIC8vICBmbG9hdCBrID0gKHJvdWdobmVzcyAqIHJvdWdobmVzcykgLyAyO1xuXHRcdCAgICBmbG9hdCBkZW5vbSA9IE5kb3RWICogKDEuMCAtIGspICsgaztcblx0XHQgICAgcmV0dXJuIE5kb3RWIC8gZGVub207XG5cdFx0fVxuXG5cdFx0ZmxvYXQgZ2VvbWV0cnlfc21pdGgodmVjMyBOLCB2ZWMzIFYsIHZlYzMgTCwgZmxvYXQgcm91Z2huZXNzKSB7XG5cdFx0ICAgIGZsb2F0IE5kb3RWID0gbWF4KGRvdChOLCBWKSwgMC4wKTtcblx0XHQgICAgZmxvYXQgTmRvdEwgPSBtYXgoZG90KE4sIEwpLCAwLjApO1xuXHRcdCAgICBmbG9hdCBnZ3gyID0gZ2VvbWV0cnlfc2NobGlja19nZ3goTmRvdFYsIHJvdWdobmVzcyk7XG5cdFx0ICAgIGZsb2F0IGdneDEgPSBnZW9tZXRyeV9zY2hsaWNrX2dneChOZG90TCwgcm91Z2huZXNzKTtcblx0XHQgICAgcmV0dXJuIGdneDEgKiBnZ3gyO1xuXHRcdH1cblxuXHRcdC8vXG5cdFx0Ly9cdHNoYWRvdyBzdHVmZlxuXHRcdC8vXG5cblx0XHRmbG9hdCBjYWxjdWxhdGVfc2hhZG93cyh2ZWM0IGxpZ2h0X3NwYWNlX3Bvc2l0aW9uLCBzYW1wbGVyMkQgZGVwdGhfdGV4LCBmbG9hdCB0ZXh0dXJlX3NpemUsIGZsb2F0IGJpYXMpIHtcblx0XHRcdHZlYzMgcHJval9jb29yZHMgPSBsaWdodF9zcGFjZV9wb3NpdGlvbi54eXogLyBsaWdodF9zcGFjZV9wb3NpdGlvbi53O1xuXHRcdFx0dmVjMiB0ZXhlbF9zaXplID0gdmVjMigxLjAgLyB0ZXh0dXJlX3NpemUpO1xuXHRcdFx0cHJval9jb29yZHMgPSBwcm9qX2Nvb3JkcyAqIDAuNSArIDAuNTtcblxuXHRcdFx0ZmxvYXQgc2hhZG93ID0gMC4wO1xuXG5cdFx0XHRmb3IgKGludCB4ID0gLTE7IHggPD0gMTsgKyt4KSB7XG5cdFx0XHRcdGZvciAoaW50IHkgPSAtMTsgeSA8PSAxOyArK3kpIHtcblx0XHRcdFx0XHRmbG9hdCBuZWFyZXN0ID0gdGV4dHVyZTJEKGRlcHRoX3RleCwgcHJval9jb29yZHMueHkgKyAodmVjMih4LCB5KSAqIHRleGVsX3NpemUpKS5yO1xuXHRcdFx0XHRcdGZsb2F0IHRlc3QgPSBwcm9qX2Nvb3Jkcy56O1xuXHRcdFx0XHRcdHNoYWRvdyArPSAodGVzdCAtIGJpYXMgPiBuZWFyZXN0ID8gMC4wIDogMS4wKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gc2hhZG93IC8gOS4wO1xuXHRcdH1cblxuXHRcdHZlYzIgZ2F1c3NfZmlsdGVyWzddO1xuXG5cdFx0ZmxvYXQgY2FsY3VsYXRlX3NoYWRvd3NfZ2F1c3ModmVjNCBsaWdodF9zcGFjZV9wb3NpdGlvbiwgc2FtcGxlcjJEIGRlcHRoX3RleCwgZmxvYXQgdGV4dHVyZV9zaXplLCBmbG9hdCBiaWFzKSB7XG5cdFx0XHR2ZWMzIHByb2pfY29vcmRzID0gbGlnaHRfc3BhY2VfcG9zaXRpb24ueHl6IC8gbGlnaHRfc3BhY2VfcG9zaXRpb24udztcblx0XHRcdHByb2pfY29vcmRzID0gcHJval9jb29yZHMgKiAwLjUgKyAwLjU7XG5cdFx0XHRmbG9hdCBzaGFkb3cgPSAwLjA7XG5cdFx0XHRmbG9hdCBzY2FsZSA9IDAuMDA1O1xuXHRcdFx0Zm9yKGludCBpID0gMDsgaSA8IDc7IGkrKykge1xuXHRcdFx0XHRmbG9hdCB0ZXN0ID0gcHJval9jb29yZHMuejtcblx0XHRcdFx0ZmxvYXQgbmVhcmVzdCA9IHRleHR1cmUyRChkZXB0aF90ZXgsIChwcm9qX2Nvb3Jkcy54eSArIGdhdXNzX2ZpbHRlcltpXS55ICogc2NhbGUpKS5yO1xuXHRcdFx0XHRzaGFkb3cgKz0gKHRlc3QgLSBiaWFzID4gbmVhcmVzdCA/IDAuMCA6IDEuMCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gc2hhZG93IC8gNy4wO1xuXHRcdH1cblxuXHRcdHZvaWQgc2V0dXBfZ2F1c3NfZmlsdGVyKCkge1xuXHRcdFx0Z2F1c3NfZmlsdGVyWzBdID0gdmVjMigtMy4wLCAwLjAxNTYyNSk7XG5cdFx0XHRnYXVzc19maWx0ZXJbMV0gPSB2ZWMyKC0yLjAsIDAuMDkzNzUpO1xuXHRcdFx0Z2F1c3NfZmlsdGVyWzJdID0gdmVjMigtMS4wLCAwLjIzNDM3NSk7XG5cdFx0XHRnYXVzc19maWx0ZXJbM10gPSB2ZWMyKDAuMCxcdDAuMzEyNSk7XG5cdFx0XHRnYXVzc19maWx0ZXJbNF0gPSB2ZWMyKDEuMCxcdDAuMjM0Mzc1KTtcblx0XHRcdGdhdXNzX2ZpbHRlcls1XSA9IHZlYzIoMi4wLFx0MC4wOTM3NSk7XG5cdFx0XHRnYXVzc19maWx0ZXJbNl0gPSB2ZWMyKDMuMCxcdDAuMDE1NjI1KTtcblx0XHR9XG5cblx0XHRzdHJ1Y3QgUG9pbnRMaWdodCB7XG5cdFx0XHR2ZWMzIHBvc2l0aW9uO1xuXHRcdFx0dmVjMyBjb2xvcjtcblx0XHRcdHZlYzMgbWFzaztcblx0XHRcdGJvb2wgY2FzdHNfc2hhZG93O1xuXHRcdH07XG5cblx0XHRzdHJ1Y3QgRGlyZWN0aW9uYWxMaWdodCB7XG5cdFx0XHR2ZWMzIGRpcmVjdGlvbjtcblx0XHRcdHZlYzMgY29sb3I7XG5cdFx0XHR2ZWMzIG1hc2s7XG5cdFx0fTtcblxuXHRcdGNvbnN0IGludCBuX3BvaW50X2xpZ2h0cyA9IDE7XG5cdFx0Y29uc3QgaW50IG5fZGlyZWN0aW9uYWxfbGlnaHRzID0gMTtcblxuXHRcdHVuaWZvcm0gUG9pbnRMaWdodCBwb2ludF9saWdodHNbbl9wb2ludF9saWdodHNdO1xuXHRcdHVuaWZvcm0gRGlyZWN0aW9uYWxMaWdodCBkaXJlY3Rpb25hbF9saWdodHNbbl9kaXJlY3Rpb25hbF9saWdodHNdO1xuXG5cdFx0dW5pZm9ybSB2ZWMzIGNhbV9wb3NpdGlvbjtcblxuXHRcdC8vXHRzaGFkb3cgc3R1ZmZcblx0XHR1bmlmb3JtIHNhbXBsZXIyRCBzaGFkb3dfZGVwdGhfbWFwO1xuXHRcdHVuaWZvcm0gZmxvYXQgc2hhZG93X3NpemU7XG5cblx0XHR1bmlmb3JtIHZlYzMgYWxiZWRvO1xuXHRcdHVuaWZvcm0gZmxvYXQgcm91Z2huZXNzO1xuXHRcdHVuaWZvcm0gZmxvYXQgbWV0YWxsaWM7XG5cblx0XHR2YXJ5aW5nIG1lZGl1bXAgdmVjNCB2X2xpZ2h0X3NwYWNlX3Bvc2l0aW9uO1xuXG5cdFx0dmFyeWluZyBtZWRpdW1wIHZlYzMgdl9wb3NpdGlvbjtcblx0XHR2YXJ5aW5nIG1lZGl1bXAgdmVjMiB2X3V2O1xuXHRcdHZhcnlpbmcgbWVkaXVtcCB2ZWMzIHZfbm9ybWFsO1xuXG5cdFx0dm9pZCBtYWluKCkge1xuXG5cdFx0XHQvL1x0c2hhZG93IHN0dWZmXG5cblx0XHRcdHNldHVwX2dhdXNzX2ZpbHRlcigpO1xuXG5cdFx0XHRmbG9hdCBzaGFkb3cxID0gY2FsY3VsYXRlX3NoYWRvd3Modl9saWdodF9zcGFjZV9wb3NpdGlvbiwgc2hhZG93X2RlcHRoX21hcCwgc2hhZG93X3NpemUsIDAuMDA1KTtcblxuXHRcdFx0Ly9cdHJlZ3VsYXIgc3R1ZmZcblxuXHRcdFx0dmVjMyBmaW5hbF9jb2xvciA9IGFsYmVkbztcblxuXHRcdFx0dmVjMyBMbyA9IHZlYzMoMC4wKTtcblxuXHRcdFx0Ly9cdHBvaW50IGxpZ2h0c1xuXG5cdFx0XHRmb3IgKGludCBpID0gMDsgaSA8IG5fcG9pbnRfbGlnaHRzOyBpKyspIHtcblx0XHRcdFx0Ym9vbCBpc19kaXJlY3Rpb25hbCA9IGZhbHNlO1xuXHRcdFx0XHR2ZWMzIHJlcyA9IFBCUih2X25vcm1hbCwgYWxiZWRvLCByb3VnaG5lc3MsIG1ldGFsbGljLCBcblx0XHRcdFx0XHRjYW1fcG9zaXRpb24sIHZfcG9zaXRpb24sIHBvaW50X2xpZ2h0c1tpXS5wb3NpdGlvbiwgcG9pbnRfbGlnaHRzW2ldLmNvbG9yLCBpc19kaXJlY3Rpb25hbCk7XG5cdFx0XHRcdHJlcyAqPSBwb2ludF9saWdodHNbaV0ubWFzaztcblx0XHRcdFx0cmVzICo9IHNoYWRvdzE7XG5cdFx0XHRcdExvICs9IHJlcztcblx0XHRcdH1cblxuXHRcdFx0Ly9cdGRpcmVjdGlvbmFsIGxpZ2h0c1xuXG5cdFx0XHRmb3IgKGludCBpID0gMDsgaSA8IG5fZGlyZWN0aW9uYWxfbGlnaHRzOyBpKyspIHtcblx0XHRcdFx0Ym9vbCBpc19kaXJlY3Rpb25hbCA9IHRydWU7XG5cdFx0XHRcdHZlYzMgcmVzID0gUEJSKHZfbm9ybWFsLCBhbGJlZG8sIHJvdWdobmVzcywgbWV0YWxsaWMsIFxuXHRcdFx0XHRcdGNhbV9wb3NpdGlvbiwgdl9wb3NpdGlvbiwgZGlyZWN0aW9uYWxfbGlnaHRzW2ldLmRpcmVjdGlvbiwgZGlyZWN0aW9uYWxfbGlnaHRzW2ldLmNvbG9yLCBpc19kaXJlY3Rpb25hbCk7XG5cdFx0XHRcdHJlcyAqPSBkaXJlY3Rpb25hbF9saWdodHNbaV0ubWFzaztcblx0XHRcdFx0TG8gKz0gcmVzO1xuXHRcdFx0fVxuXG5cdFx0XHR2ZWMzIGFtYmllbnQgPSB2ZWMzKDAuMDMpICogYWxiZWRvO1xuXG5cdFx0ICAgIGZpbmFsX2NvbG9yID0gYW1iaWVudCArIExvO1xuXHRcdCAgICBmaW5hbF9jb2xvciA9IGZpbmFsX2NvbG9yIC8gKGZpbmFsX2NvbG9yICsgdmVjMygxLjApKTtcblx0XHQgICAgZmluYWxfY29sb3IgPSBwb3coZmluYWxfY29sb3IsIHZlYzMoMS4wLzIuMikpO1xuXG4gICAgICBcdFx0Z2xfRnJhZ0NvbG9yID0gdmVjNChmaW5hbF9jb2xvciwgMS4wKTtcbiAgICBcdH1cblx0YFxufVxuXG5jb25zdCBVc2VTaGFkb3dzMTogU2hhZGVyUHJvZ3JhbVNvdXJjZSA9IHtcblx0c291cmNlczogW1xuXHRcdHtcblx0XHRcdHNvdXJjZTogX3NvdXJjZXMudmVydGV4LFxuXHRcdFx0dHlwZTogU2hhZGVyVHlwZXMuVkVSVEVYLFxuXHRcdFx0dW5pZm9ybXM6IFsnbW9kZWwnLCAndmlldycsICdwcm9qZWN0aW9uJ11cblx0XHR9LFxuXHRcdHtcblx0XHRcdHNvdXJjZTogX3NvdXJjZXMuZnJhZ21lbnQsXG5cdFx0XHR0eXBlOiBTaGFkZXJUeXBlcy5GUkFHTUVOVCxcblx0XHRcdHVuaWZvcm1zOiBbJ3BvaW50JywgJ2RpcmVjdGlvbmFsJywgJ2RpcmVjdGlvbicsICdwb3NpdGlvbicsICdjb2xvcicsICdtYXNrJyxcblx0XHRcdFx0ICdhbGJlZG8nLCAncm91Z2huZXNzJywgJ21ldGFsbGljJywgJ2NhbWVyYV9wb3NpdGlvbiddXG5cdFx0fVxuXHRdXG59XG5cbmV4cG9ydCB7IFVzZVNoYWRvd3MxIH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9nbC9zaGFkZXJzL3NoYWRlci11c2Utc2hhZG93czEudHMiXSwic291cmNlUm9vdCI6IiJ9
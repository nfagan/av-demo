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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Vertex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Topologies; });
class Vertex {
    constructor() {
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
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mesh_library__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mesh__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vertex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shader__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MeshLibrary", function() { return __WEBPACK_IMPORTED_MODULE_0__mesh_library__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Mesh", function() { return __WEBPACK_IMPORTED_MODULE_1__mesh__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Vertex", function() { return __WEBPACK_IMPORTED_MODULE_2__vertex__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Topologies", function() { return __WEBPACK_IMPORTED_MODULE_2__vertex__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Shader", function() { return __WEBPACK_IMPORTED_MODULE_3__shader__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ShaderProgram", function() { return __WEBPACK_IMPORTED_MODULE_3__shader__["b"]; });







/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeshLibrary; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vertex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(3);


class MeshLibrary {
    static makeQuad(mesh) {
        const vertexData = [
            -1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0,
            -1.0, -1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0,
            1.0, -1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0,
            1.0, -1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0,
            1.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0,
            -1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0
        ];
        const float32VertexData = new Float32Array(vertexData);
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
    static makeTriangle(mesh) {
        const vertexData = [
            -1.0, -1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0,
            1.0, -1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0,
            0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0
        ];
        const float32VertexData = new Float32Array(vertexData);
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
    static makeCircle(mesh, vertexCount = 64) {
        if (!__WEBPACK_IMPORTED_MODULE_1__util__["a" /* Util */].isPow2(vertexCount))
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
/* 3 */
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mesh; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vertex__ = __webpack_require__(0);

class Mesh {
    constructor(gl) {
        this.isFinalized = false;
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
        this.bind();
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
        this.unbind();
    }
    finalize() {
        this.assertNotFinalized('finalize');
        if (this.vertices.length === 0)
            return;
        this.storeBufferData();
        this.isFinalized = true;
    }
    bind() {
        if (this.vertices.length === 0)
            return;
        const gl = this.gl;
        let vert0 = this.vertices[0];
        let stride = vert0.size();
        let bytes = vert0.bytesPerElement();
        let offset = 0;
        let nIndices = this.indices.length;
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vbo);
        //	position
        gl.enableVertexAttribArray(0);
        gl.vertexAttribPointer(0, 3, gl.FLOAT, false, stride * bytes, offset * bytes);
        offset += 3;
        //	uv
        if (vert0.sizeUV() > 0) {
            gl.enableVertexAttribArray(1);
            gl.vertexAttribPointer(1, 2, gl.FLOAT, false, stride * bytes, offset * bytes);
            offset += 2;
        }
        //	normals
        if (vert0.sizeNormal() > 0) {
            gl.enableVertexAttribArray(2);
            gl.vertexAttribPointer(2, 3, gl.FLOAT, false, stride * bytes, offset * bytes);
            offset += 3;
        }
        //	indices
        if (nIndices > 0) {
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.ebo);
        }
    }
    unbind() {
        const gl = this.gl;
        const indices = this.indices;
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        if (indices.length > 0) {
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
        }
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
}



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Shader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ShaderProgram; });
class Shader {
    constructor(gl, src, type) {
        this.gl = gl;
        this.source = src;
        this.type = type;
        this.isValid = true;
        this.setup();
    }
    getGLShader() {
        return this.shader;
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
}
class ShaderProgram {
    constructor(gl, shaders) {
        for (let i = 0; i < shaders.length; i++) {
            if (!shaders[i].isValid)
                throw new Error('Attempted to attach an invalid shader.');
        }
        this.gl = gl;
        this.shaders = shaders;
        this.isValid = true;
        this.setup();
    }
    bind() {
        this.gl.useProgram(this.program);
    }
    unbind() {
        this.gl.useProgram(null);
    }
    uniform(name, value) {
        let loc;
        loc = this.gl.getUniformLocation(this.program, name);
        this.gl.uniform1f(loc, value);
    }
    setup() {
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
    }
}



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjkzMzU1NzE4NzM5ZTg4YTA2NjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZlcnRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd2ViLWdsLnRzIiwid2VicGFjazovLy8uL3NyYy9tZXNoLWxpYnJhcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21lc2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQzdEQTtBQUFBO0lBU0M7UUFDQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU0sV0FBVyxDQUFDLEdBQWlCO1FBQ25DLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLFVBQVUsQ0FBQztRQUM3QyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUc7UUFDbkIsSUFBSSxDQUFD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RUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7WUFDdkMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7U0FDL0M7UUFFRCxNQUFNLGlCQUFpQixHQUFpQixJQUFJLFlBQVksQ0FBQyxVQUFVLENBQUM7UUFFOUQsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNwQyxJQUFJLE1BQU0sR0FBVyxJQUFJLHVEQUFNLEVBQUU7WUFFakMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBVTtZQUNyQyxDQUFDLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7WUFDNUIsQ0FBQyxHQUFHLGlCQUFpQixDQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO1lBQzVCLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQztZQUM1QixDQUFDLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7WUFDNUIsQ0FBQyxHQUFHLGlCQUFpQixDQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO1lBQzVCLEVBQUUsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQztZQUM3QixFQUFFLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7WUFDN0IsRUFBRSxHQUFHLGlCQUFpQixDQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO1lBRTdCLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxF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QUFDO0NBQ0Q7QUFFK0IiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMjkzMzU1NzE4NzM5ZTg4YTA2NjEiLCJjbGFzcyBWZXJ0ZXgge1xuXG5cdHByaXZhdGUgcG9zaXRpb246IEZsb2F0MzJBcnJheVxuXHRwcml2YXRlIHV2OiBGbG9hdDMyQXJyYXlcblx0cHJpdmF0ZSBub3JtYWw6IEZsb2F0MzJBcnJheVxuXHRwcml2YXRlIHBvc2l0aW9uQ291bnQ6IG51bWJlclxuXHRwcml2YXRlIHV2Q291bnQ6IG51bWJlclxuXHRwcml2YXRlIG5vcm1hbENvdW50OiBudW1iZXJcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLnBvc2l0aW9uID0gbmV3IEZsb2F0MzJBcnJheSgzKVxuXHRcdHRoaXMudXYgPSBuZXcgRmxvYXQzMkFycmF5KDIpXG5cdFx0dGhpcy5ub3JtYWwgPSBuZXcgRmxvYXQzMkFycmF5KDMpXG5cdH1cblxuXHRwdWJsaWMgc2V0UG9zaXRpb24ocG9zOiBGbG9hdDMyQXJyYXkpOiB2b2lkIHtcblx0XHR0aGlzLmFzc2VydFZhbGlkQXJyYXlTaXplKHBvcywgMywgJ3Bvc2l0aW9uJylcblx0XHR0aGlzLnBvc2l0aW9uID0gcG9zXG5cdFx0dGhpcy5wb3NpdGlvbkNvdW50ID0gM1xuXHR9XG5cblx0cHVibGljIHNldFVWKHV2OiBGbG9hdDMyQXJyYXkpOiB2b2lkIHtcblx0XHR0aGlzLmFzc2VydFZhbGlkQXJyYXlTaXplKHV2LCAyLCAndXYnKVxuXHRcdHRoaXMudXYgPSB1dlxuXHRcdHRoaXMudXZDb3VudCA9IDJcblx0fVxuXG5cdHB1YmxpYyBzZXROb3JtYWwobm9ybTogRmxvYXQzMkFycmF5KTogdm9pZCB7XG5cdFx0dGhpcy5hc3NlcnRWYWxpZEFycmF5U2l6ZShub3JtLCAzLCAnbm9ybWFscycpXG5cdFx0dGhpcy5ub3JtYWwgPSBub3JtXG5cdFx0dGhpcy5ub3JtYWxDb3VudCA9IDNcblx0fVxuXG5cdHB1YmxpYyBzaXplUG9zaXRpb24oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5wb3NpdGlvbkNvdW50XG5cdH1cblxuXHRwdWJsaWMgc2l6ZVVWKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMudXZDb3VudFxuXHR9XG5cblx0cHVibGljIHNpemVOb3JtYWwoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5ub3JtYWxDb3VudFxuXHR9XG5cblx0cHVibGljIHNpemUoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5zaXplUG9zaXRpb24oKSArIHRoaXMuc2l6ZU5vcm1hbCgpICsgdGhpcy5zaXplVVYoKVxuXHR9XG5cblx0cHVibGljIGJ5dGVzUGVyRWxlbWVudCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnBvc2l0aW9uLkJZVEVTX1BFUl9FTEVNRU5UXG5cdH1cblxuXHRwdWJsaWMgZ2V0SW50ZXJsZWF2ZWREYXRhKCk6IEZsb2F0MzJBcnJheSB7XG5cdFx0bGV0IGRhdGE6IEZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5zaXplKCkpXG5cdFx0bGV0IGk6IG51bWJlciA9IDBcblx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgdGhpcy5wb3NpdGlvbkNvdW50OyBqKyspIHtcblx0XHRcdGRhdGFbaV0gPSB0aGlzLnBvc2l0aW9uW2pdXG5cdFx0XHRpKytcblx0XHR9XG5cdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IHRoaXMudXZDb3VudDsgaisrKSB7XG5cdFx0XHRkYXRhW2ldID0gdGhpcy51dltqXVxuXHRcdFx0aSsrXG5cdFx0fVxuXHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCB0aGlzLm5vcm1hbENvdW50OyBqKyspIHtcblx0XHRcdGRhdGFbaV0gPSB0aGlzLm5vcm1hbFtqXVxuXHRcdFx0aSsrXG5cdFx0fVxuXHRcdHJldHVybiBkYXRhXG5cdH1cblxuXHRwcml2YXRlIGFzc2VydFZhbGlkQXJyYXlTaXplKGFycjogRmxvYXQzMkFycmF5LCBzaXplOiBudW1iZXIsIHR5cGU/OiBzdHJpbmcpIHtcblx0XHRpZiAoIXR5cGUpXG5cdFx0XHR0eXBlID0gJyh1bnNwZWNpZmllZCknXG5cdFx0aWYgKGFyci5sZW5ndGggIT09IHNpemUpIHtcblx0XHRcdGxldCBtZXNzYWdlOiBzdHJpbmcgPSBgRXhwZWN0ZWQgYXR0cmlidXRlIG9mIHR5cGUgXCIke3R5cGV9XCIgdG8gYmUgb2Ygc2l6ZSAke3NpemV9O1xuXHRcdFx0XHRpbnN0ZWFkIHdhcyAke2Fyci5sZW5ndGh9YFxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG5cdFx0fVxuXG5cdH1cbn1cblxuY2xhc3MgVG9wb2xvZ2llcyB7XG5cdHB1YmxpYyBzdGF0aWMgVFJJQU5HTEVTOiBudW1iZXIgPSAwXG5cdHB1YmxpYyBzdGF0aWMgVFJJQU5HTEVfU1RSSVA6IG51bWJlciA9IDFcbn1cblxuZXhwb3J0IHsgVmVydGV4LCBUb3BvbG9naWVzIH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmVydGV4LnRzIiwiaW1wb3J0IHsgTWVzaExpYnJhcnkgfSBmcm9tICcuL21lc2gtbGlicmFyeSdcbmltcG9ydCB7IE1lc2ggfSBmcm9tICcuL21lc2gnXG5pbXBvcnQgeyBWZXJ0ZXgsIFRvcG9sb2dpZXMgfSBmcm9tICcuL3ZlcnRleCdcbmltcG9ydCB7IFNoYWRlciwgU2hhZGVyUHJvZ3JhbSB9IGZyb20gJy4vc2hhZGVyJ1xuXG5leHBvcnQge1xuXHRNZXNoTGlicmFyeSxcblx0TWVzaCxcblx0VmVydGV4LFxuXHRUb3BvbG9naWVzLFxuXHRTaGFkZXIsXG5cdFNoYWRlclByb2dyYW1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvd2ViLWdsLnRzIiwiaW1wb3J0IHsgVmVydGV4LCBUb3BvbG9naWVzIH0gZnJvbSAnLi92ZXJ0ZXgnXG5pbXBvcnQgeyBNZXNoIH0gZnJvbSAnLi9tZXNoJ1xuaW1wb3J0IHsgVXRpbCB9IGZyb20gJy4vdXRpbCdcblxuY2xhc3MgTWVzaExpYnJhcnkge1xuXHRcblx0cHVibGljIHN0YXRpYyBtYWtlUXVhZChtZXNoOiBNZXNoKSB7XG5cdFx0Y29uc3QgdmVydGV4RGF0YTogQXJyYXk8bnVtYmVyPiA9IFtcblx0XHRcdC0xLjAsIDEuMCwgMC4wLCAwLjAsIDEuMCwgMC4wLCAxLjAsIDAuMCxcbiAgICAgICAgICAgIC0xLjAsIC0xLjAsIDAuMCwgMC4wLCAwLjAsIDAuMCwgMS4wLCAwLjAsXG4gICAgICAgICAgICAxLjAsIC0xLjAsIDAuMCwgMS4wLCAwLjAsIDAuMCwgMS4wLCAwLjAsXG4gICAgICAgICAgICAxLjAsIC0xLjAsIDAuMCwgMS4wLCAwLjAsIDAuMCwgMS4wLCAwLjAsXG4gICAgICAgICAgICAxLjAsIDEuMCwgMC4wLCAxLjAsIDEuMCwgMC4wLCAxLjAsIDAuMCxcbiAgICAgICAgICAgIC0xLjAsIDEuMCwgMC4wLCAwLjAsIDEuMCwgMC4wLCAxLjAsIDAuMFxuICAgICAgICBdXG4gICAgICAgIGNvbnN0IGZsb2F0MzJWZXJ0ZXhEYXRhOiBGbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KHZlcnRleERhdGEpXG5cbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICBcdGxldCB2ZXJ0ZXg6IFZlcnRleCA9IG5ldyBWZXJ0ZXgoKVxuICAgICAgICBcdGxldCB4LCB5LCB6LCB1LCB2LCBueCwgbnksIG56OiBudW1iZXJcblxuICAgICAgICBcdHggPSBmbG9hdDMyVmVydGV4RGF0YVtpKjgrMF1cbiAgICAgICAgXHR5ID0gZmxvYXQzMlZlcnRleERhdGFbaSo4KzFdXG4gICAgICAgIFx0eiA9IGZsb2F0MzJWZXJ0ZXhEYXRhW2kqOCsyXVxuICAgICAgICBcdHUgPSBmbG9hdDMyVmVydGV4RGF0YVtpKjgrM11cbiAgICAgICAgXHR2ID0gZmxvYXQzMlZlcnRleERhdGFbaSo4KzRdXG4gICAgICAgIFx0bnggPSBmbG9hdDMyVmVydGV4RGF0YVtpKjgrNV1cbiAgICAgICAgXHRueSA9IGZsb2F0MzJWZXJ0ZXhEYXRhW2kqOCs2XVxuICAgICAgICBcdG56ID0gZmxvYXQzMlZlcnRleERhdGFbaSo4KzddXG5cbiAgICAgICAgXHR2ZXJ0ZXguc2V0UG9zaXRpb24obmV3IEZsb2F0MzJBcnJheShbeCwgeSwgel0pKVxuICAgICAgICBcdHZlcnRleC5zZXRVVihuZXcgRmxvYXQzMkFycmF5KFt1LCB2XSkpXG4gICAgICAgIFx0dmVydGV4LnNldE5vcm1hbChuZXcgRmxvYXQzMkFycmF5KFtueCwgbnksIG56XSkpXG5cbiAgICAgICAgXHRtZXNoLmFkZFZlcnRleCh2ZXJ0ZXgpXG4gICAgICAgIH1cbiAgICAgICAgbWVzaC5zZXRUb3BvbG9neShUb3BvbG9naWVzLlRSSUFOR0xFUylcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgbWFrZVRyaWFuZ2xlKG1lc2g6IE1lc2gpIHtcblx0XHRjb25zdCB2ZXJ0ZXhEYXRhOiBBcnJheTxudW1iZXI+ID0gW1xuXHRcdFx0LTEuMCwgLTEuMCwgMC4wLCAwLjAsIDEuMCwgMC4wLCAxLjAsIDAuMCxcbiAgICAgICAgICAgIDEuMCwgLTEuMCwgMC4wLCAwLjAsIDEuMCwgMC4wLCAxLjAsIDAuMCxcbiAgICAgICAgICAgIDAuMCwgMS4wLCAwLjAsIDAuMCwgMS4wLCAwLjAsIDEuMCwgMC4wXG5cdFx0XVxuXG5cdFx0Y29uc3QgZmxvYXQzMlZlcnRleERhdGE6IEZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkodmVydGV4RGF0YSlcblxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgIFx0bGV0IHZlcnRleDogVmVydGV4ID0gbmV3IFZlcnRleCgpXG5cbiAgICAgICAgXHRsZXQgeCwgeSwgeiwgdSwgdiwgbngsIG55LCBuejogbnVtYmVyXG4gICAgICAgIFx0eCA9IGZsb2F0MzJWZXJ0ZXhEYXRhW2kqOCswXVxuICAgICAgICBcdHkgPSBmbG9hdDMyVmVydGV4RGF0YVtpKjgrMV1cbiAgICAgICAgXHR6ID0gZmxvYXQzMlZlcnRleERhdGFbaSo4KzJdXG4gICAgICAgIFx0dSA9IGZsb2F0MzJWZXJ0ZXhEYXRhW2kqOCszXVxuICAgICAgICBcdHYgPSBmbG9hdDMyVmVydGV4RGF0YVtpKjgrNF1cbiAgICAgICAgXHRueCA9IGZsb2F0MzJWZXJ0ZXhEYXRhW2kqOCs1XVxuICAgICAgICBcdG55ID0gZmxvYXQzMlZlcnRleERhdGFbaSo4KzZdXG4gICAgICAgIFx0bnogPSBmbG9hdDMyVmVydGV4RGF0YVtpKjgrN11cblxuICAgICAgICBcdHZlcnRleC5zZXRQb3NpdGlvbihuZXcgRmxvYXQzMkFycmF5KFt4LCB5LCB6XSkpXG4gICAgICAgIFx0dmVydGV4LnNldFVWKG5ldyBGbG9hdDMyQXJyYXkoW3UsIHZdKSlcbiAgICAgICAgXHR2ZXJ0ZXguc2V0Tm9ybWFsKG5ldyBGbG9hdDMyQXJyYXkoW254LCBueSwgbnpdKSlcblxuICAgICAgICBcdG1lc2guYWRkVmVydGV4KHZlcnRleClcbiAgICAgICAgfVxuICAgICAgICBtZXNoLnNldFRvcG9sb2d5KFRvcG9sb2dpZXMuVFJJQU5HTEVTKVxuXHR9XG5cblx0cHVibGljIHN0YXRpYyBtYWtlQ2lyY2xlKG1lc2g6IE1lc2gsIHZlcnRleENvdW50OiBudW1iZXIgPSA2NCkge1xuXHRcdGlmICghVXRpbC5pc1BvdzIodmVydGV4Q291bnQpKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdWZXJ0ZXggY291bnQgbXVzdCBiZSBhIHBvd2VyIG9mIDIuJylcblxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB2ZXJ0ZXhDb3VudDsgaSsrKSB7XG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgdmVydGV4Q291bnQ7IGorKykge1xuXHRcdFx0XHRsZXQgeFNlZ21lbnQ6IG51bWJlciA9IGogLyAodmVydGV4Q291bnQtMSlcblx0XHRcdFx0bGV0IHlTZWdtZW50OiBudW1iZXIgPSBpIC8gKHZlcnRleENvdW50LTEpXG5cblx0XHRcdFx0bGV0IHhQb3M6IG51bWJlciA9IE1hdGguY29zKHhTZWdtZW50ICogMiAqIE1hdGguUEkpICogTWF0aC5zaW4oeVNlZ21lbnQgKiBNYXRoLlBJKVxuXHRcdFx0XHRsZXQgeVBvczogbnVtYmVyID0gTWF0aC5jb3MoeVNlZ21lbnQgKiBNYXRoLlBJKVxuXHRcdFx0XHRsZXQgelBvczogbnVtYmVyID0gTWF0aC5zaW4oeFNlZ21lbnQgKiAyICogTWF0aC5QSSkgKiBNYXRoLnNpbih5U2VnbWVudCAqIE1hdGguUEkpXG5cblx0XHRcdFx0bGV0IHZlcnRleDogVmVydGV4ID0gbmV3IFZlcnRleCgpXG5cdFx0XHRcdHZlcnRleC5zZXRQb3NpdGlvbihuZXcgRmxvYXQzMkFycmF5KFt4UG9zLCB5UG9zLCB6UG9zXSkpXG5cdFx0XHRcdHZlcnRleC5zZXRVVihuZXcgRmxvYXQzMkFycmF5KFt4U2VnbWVudCwgeVNlZ21lbnRdKSlcblx0XHRcdFx0dmVydGV4LnNldE5vcm1hbChuZXcgRmxvYXQzMkFycmF5KFt4UG9zLCB5UG9zLCB6UG9zXSkpXG5cblx0XHRcdFx0bWVzaC5hZGRWZXJ0ZXgodmVydGV4KVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGxldCBmaXJzdEluZGV4OiBudW1iZXIgPSAwXG5cdFx0bGV0IG5leHRJbmRleDogbnVtYmVyID0gdmVydGV4Q291bnRcblx0XHRsZXQgaW5kZXhTdHA6IG51bWJlciA9IDBcblx0XHRsZXQgc2hvdWxkUHJvY2VlZDogYm9vbGVhbiA9IHRydWVcblx0XHRsZXQgaW5kaWNlczogQXJyYXk8bnVtYmVyPiA9IFtdXG5cblx0XHR3aGlsZSAoc2hvdWxkUHJvY2VlZCkge1xuXHRcdFx0aW5kaWNlcy5wdXNoKGZpcnN0SW5kZXgpXG5cdFx0XHRpbmRpY2VzLnB1c2gobmV4dEluZGV4KVxuXHRcdFx0aW5kZXhTdHAgKz0gMlxuXG5cdFx0XHRzaG91bGRQcm9jZWVkID0gbmV4dEluZGV4ICE9ICh2ZXJ0ZXhDb3VudCAqIHZlcnRleENvdW50KSAtIDFcblxuXHRcdFx0aWYgKGluZGV4U3RwID4gMCAmJiAobmV4dEluZGV4KzEpICUgdmVydGV4Q291bnQgPT0gMCAmJiBzaG91bGRQcm9jZWVkKSB7XG5cdFx0XHRcdGluZGljZXMucHVzaChuZXh0SW5kZXgpXG5cdFx0XHRcdGluZGljZXMucHVzaChmaXJzdEluZGV4KzEpXG5cdFx0XHRcdGluZGV4U3RwICs9IDJcblx0XHRcdH1cblxuXHRcdFx0Zmlyc3RJbmRleCsrXG5cdFx0XHRuZXh0SW5kZXgrK1xuXHRcdH1cblxuXHRcdG1lc2guc2V0VG9wb2xvZ3koVG9wb2xvZ2llcy5UUklBTkdMRV9TVFJJUClcblx0XHRtZXNoLnNldEluZGljZXMobmV3IFVpbnQxNkFycmF5KGluZGljZXMpKVxuXG5cdH1cblxufVxuXG5leHBvcnQgeyBNZXNoTGlicmFyeSB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21lc2gtbGlicmFyeS50cyIsImNsYXNzIFV0aWwge1xuXHRcblx0cHVibGljIHN0YXRpYyBtYXgoYXJyOiBBcnJheTxudW1iZXI+KSB7XG5cdFx0bGV0IG1heCA9IC1JbmZpbml0eVxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoYXJyW2ldID4gbWF4KSBtYXggPSBhcnJbaV1cblx0XHR9XG5cdFx0cmV0dXJuIG1heFxuXHR9XG5cblx0cHVibGljIHN0YXRpYyBtaW4oYXJyOiBBcnJheTxudW1iZXI+KSB7XG5cdFx0bGV0IG1pbiA9IEluZmluaXR5XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChhcnJbaV0gPCBtaW4pIG1pbiA9IGFycltpXVxuXHRcdH1cblx0XHRyZXR1cm4gbWluXG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIGlzUG93MihuOiBudW1iZXIpIHtcblx0XHRpZiAobiA9PT0gMClcblx0XHRcdHJldHVybiBmYWxzZVxuXHRcdHdoaWxlIChuICE9PSAxKSB7XG5cdFx0XHRpZiAobiAlIDIgIT09IDApXG5cdFx0XHRcdHJldHVybiBmYWxzZVxuXHRcdFx0biA9IG4gLyAyXG5cdFx0fVxuXHRcdHJldHVybiB0cnVlXG5cdH1cbn1cblxuZXhwb3J0IHsgVXRpbCB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwudHMiLCJpbXBvcnQgeyBWZXJ0ZXgsIFRvcG9sb2dpZXMgfSBmcm9tICcuL3ZlcnRleCdcblxuY2xhc3MgTWVzaCB7XG5cblx0cHJpdmF0ZSB0b3BvbG9neTogbnVtYmVyXG5cdHByaXZhdGUgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuXHRwcml2YXRlIHZibzogV2ViR0xCdWZmZXJcblx0cHJpdmF0ZSBlYm86IFdlYkdMQnVmZmVyXG5cdHByaXZhdGUgaXNGaW5hbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZVxuXG5cdHByaXZhdGUgdmVydGljZXM6IEFycmF5PFZlcnRleD4gPSBbXVxuXHRwcml2YXRlIGluZGljZXM6IFVpbnQxNkFycmF5ID0gbmV3IFVpbnQxNkFycmF5KDApXG5cblx0Y29uc3RydWN0b3IoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCkge1xuXHRcdHRoaXMuZ2wgPSBnbFxuXHRcdHRoaXMudmJvID0gdGhpcy5nbC5jcmVhdGVCdWZmZXIoKVxuXHRcdHRoaXMuZWJvID0gdGhpcy5nbC5jcmVhdGVCdWZmZXIoKVxuXHR9XG5cblx0cHVibGljIGFkZFZlcnRleCh2ZXJ0ZXg6IFZlcnRleCk6IHZvaWQge1xuXHRcdHRoaXMuYXNzZXJ0Tm90RmluYWxpemVkKCdhZGRWZXJ0ZXgnKVxuXHRcdGlmICh0aGlzLnZlcnRpY2VzLmxlbmd0aCAhPT0gMCkge1xuXHRcdFx0aWYgKHZlcnRleC5zaXplKCkgIT09IHRoaXMudmVydGljZXNbMF0uc2l6ZSgpKVxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0FsbCB2ZXJ0aWNlcyBtdXN0IGhhdmUgY29uc2lzdGVudCBudW1iZXJzIG9mIGVsZW1lbnRzLicpXG5cdFx0fVxuXHRcdHRoaXMudmVydGljZXMucHVzaCh2ZXJ0ZXgpXG5cdH1cblxuXHRwdWJsaWMgc2V0SW5kaWNlcyhpbmRpY2VzOiBVaW50MTZBcnJheSk6IHZvaWQge1xuXHRcdHRoaXMuYXNzZXJ0Tm90RmluYWxpemVkKCdzZXRJbmRpY2VzJylcblx0XHR0aGlzLmluZGljZXMgPSBpbmRpY2VzXG5cdH1cblxuXHRwdWJsaWMgc2V0VG9wb2xvZ3kodG9wb2xvZ3k6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuYXNzZXJ0Tm90RmluYWxpemVkKCdzZXRUb3BvbG9neScpXG5cdFx0dGhpcy50b3BvbG9neSA9IHRvcG9sb2d5XG5cdH1cblxuXHRwcml2YXRlIGdldERyYXdUeXBlKCk6IG51bWJlciB7XG5cdFx0Y29uc3QgZ2wgPSB0aGlzLmdsXG5cdFx0aWYgKHRoaXMudG9wb2xvZ3kgPT09IFRvcG9sb2dpZXMuVFJJQU5HTEVTKSB7XG5cdFx0XHRyZXR1cm4gZ2wuVFJJQU5HTEVTXG5cdFx0fSBlbHNlIGlmICh0aGlzLnRvcG9sb2d5ID09PSBUb3BvbG9naWVzLlRSSUFOR0xFX1NUUklQKSB7XG5cdFx0XHRyZXR1cm4gZ2wuVFJJQU5HTEVfU1RSSVBcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBVbnJlY29nbml6ZWQgdG9wb2xvZ3kgJHt0aGlzLnRvcG9sb2d5fWApXG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGRyYXcoKTogdm9pZCB7XG5cdFx0dGhpcy5iaW5kKClcblx0XHRjb25zdCBnbCA9IHRoaXMuZ2xcblx0XHRsZXQgbkluZGljZXM6IG51bWJlciA9IHRoaXMuaW5kaWNlcy5sZW5ndGhcblx0XHRsZXQgdXNlSW5kaWNlczogYm9vbGVhbiA9IG5JbmRpY2VzID4gMFxuXHRcdGxldCBuVmVydGljZXM6IG51bWJlciA9IHRoaXMudmVydGljZXMubGVuZ3RoXG5cdFx0bGV0IGRyYXdUeXBlOiBudW1iZXIgPSB0aGlzLmdldERyYXdUeXBlKClcblx0XHRpZiAodXNlSW5kaWNlcykge1xuXHRcdFx0Z2wuZHJhd0VsZW1lbnRzKGRyYXdUeXBlLCBuSW5kaWNlcywgZ2wuVU5TSUdORURfU0hPUlQsIDApXG5cdFx0fSBlbHNlIHtcblx0XHRcdGdsLmRyYXdBcnJheXMoZHJhd1R5cGUsIDAsIG5WZXJ0aWNlcylcblx0XHR9XG5cdFx0dGhpcy51bmJpbmQoKVxuXHR9XG5cblx0cHVibGljIGZpbmFsaXplKCk6IHZvaWQge1xuXHRcdHRoaXMuYXNzZXJ0Tm90RmluYWxpemVkKCdmaW5hbGl6ZScpXG5cdFx0aWYgKHRoaXMudmVydGljZXMubGVuZ3RoID09PSAwKVxuXHRcdFx0cmV0dXJuXG5cdFx0dGhpcy5zdG9yZUJ1ZmZlckRhdGEoKVxuXHRcdHRoaXMuaXNGaW5hbGl6ZWQgPSB0cnVlXG5cdH1cblxuXHRwcml2YXRlIGJpbmQoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMudmVydGljZXMubGVuZ3RoID09PSAwKVxuXHRcdFx0cmV0dXJuXG5cblx0XHRjb25zdCBnbCA9IHRoaXMuZ2xcblx0XHRsZXQgdmVydDAgPSB0aGlzLnZlcnRpY2VzWzBdXG5cdFx0bGV0IHN0cmlkZTogbnVtYmVyID0gdmVydDAuc2l6ZSgpXG5cdFx0bGV0IGJ5dGVzOiBudW1iZXIgPSB2ZXJ0MC5ieXRlc1BlckVsZW1lbnQoKVxuXHRcdGxldCBvZmZzZXQ6IG51bWJlciA9IDBcblx0XHRsZXQgbkluZGljZXM6IG51bWJlciA9IHRoaXMuaW5kaWNlcy5sZW5ndGhcblxuXHRcdGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLnZibylcblxuXHRcdC8vXHRwb3NpdGlvblxuXHRcdGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KDApXG5cdFx0Z2wudmVydGV4QXR0cmliUG9pbnRlcigwLCAzLCBnbC5GTE9BVCwgZmFsc2UsIHN0cmlkZSpieXRlcywgb2Zmc2V0KmJ5dGVzKVxuXHRcdG9mZnNldCArPSAzXG5cblx0XHQvL1x0dXZcblx0XHRpZiAodmVydDAuc2l6ZVVWKCkgPiAwKSB7XG5cdFx0XHRnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSgxKVxuXHRcdFx0Z2wudmVydGV4QXR0cmliUG9pbnRlcigxLCAyLCBnbC5GTE9BVCwgZmFsc2UsIHN0cmlkZSpieXRlcywgb2Zmc2V0KmJ5dGVzKVxuXHRcdFx0b2Zmc2V0ICs9IDJcblx0XHR9XG5cblx0XHQvL1x0bm9ybWFsc1xuXHRcdGlmICh2ZXJ0MC5zaXplTm9ybWFsKCkgPiAwKSB7XG5cdFx0XHRnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSgyKVxuXHRcdFx0Z2wudmVydGV4QXR0cmliUG9pbnRlcigyLCAzLCBnbC5GTE9BVCwgZmFsc2UsIHN0cmlkZSpieXRlcywgb2Zmc2V0KmJ5dGVzKVxuXHRcdFx0b2Zmc2V0ICs9IDNcblx0XHR9XG5cblx0XHQvL1x0aW5kaWNlc1xuXHRcdGlmIChuSW5kaWNlcyA+IDApIHtcblx0XHRcdGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIHRoaXMuZWJvKVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgdW5iaW5kKCk6IHZvaWQge1xuXHRcdGNvbnN0IGdsID0gdGhpcy5nbFxuXHRcdGNvbnN0IGluZGljZXMgPSB0aGlzLmluZGljZXNcblx0XHRnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgbnVsbClcblx0XHRpZiAoaW5kaWNlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBudWxsKVxuXHRcdH1cblx0fVxuXG5cblx0cHJpdmF0ZSBzdG9yZUJ1ZmZlckRhdGEoKTogdm9pZCB7XG5cdFx0Y29uc3QgZ2wgPSB0aGlzLmdsXG5cdFx0bGV0IGRhdGE6IEZsb2F0MzJBcnJheSA9IHRoaXMuZ2V0SW50ZXJsZWF2ZWREYXRhKClcblx0XHRsZXQgbkluZGljZXM6IG51bWJlciA9IHRoaXMuaW5kaWNlcy5sZW5ndGhcblxuXHRcdC8vXHR2Ym9cblx0XHRnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy52Ym8pXG5cdFx0Z2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIGRhdGEsIGdsLlNUQVRJQ19EUkFXKVxuXG5cdFx0Ly9cdGVib1xuXHRcdGlmIChuSW5kaWNlcyA+IDApIHtcblx0XHRcdGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIHRoaXMuZWJvKVxuXHRcdFx0Z2wuYnVmZmVyRGF0YShnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgdGhpcy5pbmRpY2VzLCBnbC5TVEFUSUNfRFJBVylcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGdldEludGVybGVhdmVkRGF0YSgpOiBGbG9hdDMyQXJyYXkge1xuXHRcdGNvbnN0IHZlcnRpY2VzID0gdGhpcy52ZXJ0aWNlc1xuXHRcdGxldCBuVmVydGljZXMgPSB2ZXJ0aWNlcy5sZW5ndGhcblx0XHRpZiAoblZlcnRpY2VzID09IDApXG5cdFx0XHRyZXR1cm4gbmV3IEZsb2F0MzJBcnJheSgwKVxuXHRcdGxldCB0b3RhbFNpemU6IG51bWJlciA9IG5WZXJ0aWNlcyAqIHZlcnRpY2VzWzBdLnNpemUoKVxuXHRcdGxldCBhbGxEYXRhOiBGbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsU2l6ZSlcblx0XHRsZXQgYWxsRGF0YUluZGV4OiBudW1iZXIgPSAwXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG5WZXJ0aWNlczsgaSsrKSB7XG5cdFx0XHRsZXQgZGF0YTogRmxvYXQzMkFycmF5ID0gdmVydGljZXNbaV0uZ2V0SW50ZXJsZWF2ZWREYXRhKClcblx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCBkYXRhLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGFsbERhdGFbYWxsRGF0YUluZGV4XSA9IGRhdGFbal1cblx0XHRcdFx0YWxsRGF0YUluZGV4Kytcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGFsbERhdGFcblx0fVxuXG5cdHByaXZhdGUgYXNzZXJ0Tm90RmluYWxpemVkKG9wPzogc3RyaW5nKTogdm9pZCB7XG5cdFx0aWYgKCFvcClcblx0XHRcdG9wID0gJyh1bnNwZWNpZmllZCknXG5cdFx0aWYgKHRoaXMuaXNGaW5hbGl6ZWQpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYE1ldGhvZCAvIG9wZXJhdGlvbiBcIiR7b3B9XCIgd2FzIGNhbGxlZCBhZnRlciBmaW5hbGl6aW5nIG1lc2guYClcblx0fVxufVxuXG5leHBvcnQgeyBNZXNoIH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWVzaC50cyIsImNsYXNzIFNoYWRlciB7XG5cblx0cHJpdmF0ZSBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0XG5cdHByaXZhdGUgc291cmNlOiBzdHJpbmdcblx0cHJpdmF0ZSB0eXBlOiBudW1iZXJcblx0cHJpdmF0ZSBzaGFkZXI/OiBXZWJHTFNoYWRlclxuXG5cdHB1YmxpYyBpc1ZhbGlkOiBib29sZWFuXG5cblx0Y29uc3RydWN0b3IoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCwgc3JjOiBzdHJpbmcsIHR5cGU6IG51bWJlcikge1xuXHRcdHRoaXMuZ2wgPSBnbFxuXHRcdHRoaXMuc291cmNlID0gc3JjXG5cdFx0dGhpcy50eXBlID0gdHlwZVxuXHRcdHRoaXMuaXNWYWxpZCA9IHRydWVcblx0XHR0aGlzLnNldHVwKClcblx0fVxuXG5cdHB1YmxpYyBnZXRHTFNoYWRlcigpOiBXZWJHTFNoYWRlciB7XG5cdFx0cmV0dXJuIHRoaXMuc2hhZGVyXG5cdH1cblxuXHRwcml2YXRlIHNldHVwKCk6IHZvaWQge1xuXHRcdGNvbnN0IGdsID0gdGhpcy5nbFxuXHRcdGxldCBzaGFkZXI6IFdlYkdMU2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKHRoaXMudHlwZSlcblx0XHRnbC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCB0aGlzLnNvdXJjZSlcblx0XHRnbC5jb21waWxlU2hhZGVyKHNoYWRlcilcblx0XHRpZiAoIWdsLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKSkge1xuXHRcdFx0bGV0IG1lc3NhZ2U6IHN0cmluZyA9ICdTaGFkZXIgY29tcGlsYXRpb24gZXJyb3I6ICcgKyBcblx0XHRcdFx0Z2wuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpXG5cdFx0XHRjb25zb2xlLmVycm9yKG1lc3NhZ2UpXG5cdFx0XHRnbC5kZWxldGVTaGFkZXIoc2hhZGVyKVxuXHRcdFx0c2hhZGVyID0gbnVsbFxuXHRcdFx0dGhpcy5pc1ZhbGlkID0gZmFsc2Vcblx0ICBcdH1cblx0ICBcdHRoaXMuc2hhZGVyID0gc2hhZGVyXG5cdH1cbn1cblxuY2xhc3MgU2hhZGVyUHJvZ3JhbSB7XG5cblx0cHJpdmF0ZSBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0XG5cdHByaXZhdGUgc2hhZGVyczogQXJyYXk8U2hhZGVyPlxuXHRwcml2YXRlIHByb2dyYW0/OiBXZWJHTFByb2dyYW1cblx0cHVibGljIGlzVmFsaWQ6IGJvb2xlYW5cblxuXHRjb25zdHJ1Y3RvcihnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCBzaGFkZXJzOiBBcnJheTxTaGFkZXI+KSB7XG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHNoYWRlcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmICghc2hhZGVyc1tpXS5pc1ZhbGlkKVxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0F0dGVtcHRlZCB0byBhdHRhY2ggYW4gaW52YWxpZCBzaGFkZXIuJylcblx0XHR9XG5cdFx0dGhpcy5nbCA9IGdsXG5cdFx0dGhpcy5zaGFkZXJzID0gc2hhZGVyc1xuXHRcdHRoaXMuaXNWYWxpZCA9IHRydWVcblx0XHR0aGlzLnNldHVwKClcblx0fVxuXG5cdHB1YmxpYyBiaW5kKCk6IHZvaWQge1xuXHRcdHRoaXMuZ2wudXNlUHJvZ3JhbSh0aGlzLnByb2dyYW0pXG5cdH1cblxuXHRwdWJsaWMgdW5iaW5kKCk6IHZvaWQge1xuXHRcdHRoaXMuZ2wudXNlUHJvZ3JhbShudWxsKVxuXHR9XG5cblx0cHVibGljIHVuaWZvcm0obmFtZTogc3RyaW5nLCB2YWx1ZTogbnVtYmVyKSB7XG5cdFx0bGV0IGxvYzogV2ViR0xVbmlmb3JtTG9jYXRpb25cblx0XHRsb2MgPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dyYW0sIG5hbWUpXG5cdFx0dGhpcy5nbC51bmlmb3JtMWYobG9jLCB2YWx1ZSlcblx0fVxuXG5cdHByaXZhdGUgc2V0dXAoKTogdm9pZCB7XG5cdFx0Y29uc3QgZ2wgPSB0aGlzLmdsXG5cdFx0Y29uc3Qgc2hhZGVycyA9IHRoaXMuc2hhZGVyc1xuXHRcdGxldCBwcm9ncmFtOiBXZWJHTFByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKClcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgc2hhZGVycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Z2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIHNoYWRlcnNbaV0uZ2V0R0xTaGFkZXIoKSlcblx0XHR9XG5cdFx0Z2wubGlua1Byb2dyYW0ocHJvZ3JhbSlcblx0XHRpZiAoIWdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpKSB7XG5cdFx0XHRsZXQgbWVzc2FnZTogc3RyaW5nID0gJ1NoYWRlciBwcm9ncmFtIGluaXRpYWxpemF0aW9uIGVycm9yOiAnICsgXG5cdFx0XHRcdGdsLmdldFByb2dyYW1JbmZvTG9nKHByb2dyYW0pXG4gICAgXHRcdGNvbnNvbGUuZXJyb3IobWVzc2FnZSlcbiAgICBcdFx0cHJvZ3JhbSA9IG51bGxcbiAgICBcdFx0dGhpcy5pc1ZhbGlkID0gZmFsc2VcbiAgXHRcdH1cbiAgXHRcdHRoaXMucHJvZ3JhbSA9IHByb2dyYW1cblx0fVxufVxuXG5leHBvcnQgeyBTaGFkZXIsIFNoYWRlclByb2dyYW0gfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zaGFkZXIudHMiXSwic291cmNlUm9vdCI6IiJ9
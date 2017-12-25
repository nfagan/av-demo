define("vertex", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    exports.Vertex = Vertex;
    class Topologies {
    }
    Topologies.TRIANGLES = 0;
    Topologies.TRIANGLE_STRIP = 1;
    exports.Topologies = Topologies;
});
define("mesh", ["require", "exports", "vertex"], function (require, exports, vertex_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
            if (this.topology === vertex_1.Topologies.TRIANGLES) {
                return gl.TRIANGLES;
            }
            else if (this.topology === vertex_1.Topologies.TRIANGLE_STRIP) {
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
    exports.Mesh = Mesh;
});
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
define("mesh-library", ["require", "exports", "vertex", "util"], function (require, exports, vertex_2, util_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
                let vertex = new vertex_2.Vertex();
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
            mesh.setTopology(vertex_2.Topologies.TRIANGLES);
        }
        static makeTriangle(mesh) {
            const vertexData = [
                -1.0, -1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0,
                1.0, -1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0,
                0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0
            ];
            const float32VertexData = new Float32Array(vertexData);
            for (let i = 0; i < 3; i++) {
                let vertex = new vertex_2.Vertex();
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
            mesh.setTopology(vertex_2.Topologies.TRIANGLES);
        }
        static makeCircle(mesh, vertexCount = 64) {
            if (!util_1.Util.isPow2(vertexCount))
                throw new Error('Vertex count must be a power of 2.');
            for (let i = 0; i < vertexCount; i++) {
                for (let j = 0; j < vertexCount; j++) {
                    let xSegment = j / (vertexCount - 1);
                    let ySegment = i / (vertexCount - 1);
                    let xPos = Math.cos(xSegment * 2 * Math.PI) * Math.sin(ySegment * Math.PI);
                    let yPos = Math.cos(ySegment * Math.PI);
                    let zPos = Math.sin(xSegment * 2 * Math.PI) * Math.sin(ySegment * Math.PI);
                    let vertex = new vertex_2.Vertex();
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
            mesh.setTopology(vertex_2.Topologies.TRIANGLE_STRIP);
            mesh.setIndices(new Uint16Array(indices));
        }
    }
    exports.MeshLibrary = MeshLibrary;
});
define("shader", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    exports.Shader = Shader;
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
    exports.ShaderProgram = ShaderProgram;
});
define("shader-basic", ["require", "exports", "shader"], function (require, exports, shader_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ShaderBasic {
        static get(gl) {
            const frag = new shader_1.Shader(gl, this.fragSrc, gl.FRAGMENT_SHADER);
            const vert = new shader_1.Shader(gl, this.vertSrc, gl.VERTEX_SHADER);
            const prog = new shader_1.ShaderProgram(gl, [frag, vert]);
        }
    }
    ShaderBasic.vertSrc = `
		attribute vec3 in_position;
		attribute vec2 in_uv;

		void main() {
			gl_Position = vec4(in_position, 1.0) * vec4(1.0);
		}`;
    ShaderBasic.fragSrc = `
		void main() {
	  		gl_FragColor = vec4(0.75, 0.25, 1.0, 1.0);
		}`;
});
define("shader-library", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ShaderLibrary {
        static makeShaderBasic(program) {
        }
    }
});
define("web-gl", ["require", "exports", "shader"], function (require, exports, shader_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Shader = shader_2.Shader;
    exports.ShaderProgram = shader_2.ShaderProgram;
});
//# sourceMappingURL=web-gl.js.map
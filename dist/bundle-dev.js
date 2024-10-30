(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/esbuild-plugin-polyfill-node/polyfills/__dirname.js
  var init_dirname = __esm({
    "node_modules/esbuild-plugin-polyfill-node/polyfills/__dirname.js"() {
    }
  });

  // node_modules/@jspm/core/nodelibs/browser/process.js
  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }
  function hrtime(previousTimestamp) {
    var baseNow = Math.floor((Date.now() - _performance.now()) * 1e-3);
    var clocktime = _performance.now() * 1e-3;
    var seconds = Math.floor(clocktime) + baseNow;
    var nanoseconds = Math.floor(clocktime % 1 * 1e9);
    if (previousTimestamp) {
      seconds = seconds - previousTimestamp[0];
      nanoseconds = nanoseconds - previousTimestamp[1];
      if (nanoseconds < 0) {
        seconds--;
        nanoseconds += nanoPerSec;
      }
    }
    return [seconds, nanoseconds];
  }
  var env, _performance, nowOffset, nanoPerSec;
  var init_process = __esm({
    "node_modules/@jspm/core/nodelibs/browser/process.js"() {
      init_dirname();
      init_buffer2();
      init_process2();
      Item.prototype.run = function() {
        this.fun.apply(null, this.array);
      };
      env = {
        PATH: "/usr/bin",
        LANG: typeof navigator !== "undefined" ? navigator.language + ".UTF-8" : void 0,
        PWD: "/",
        HOME: "/home",
        TMP: "/tmp"
      };
      _performance = {
        now: typeof performance !== "undefined" ? performance.now.bind(performance) : void 0,
        timing: typeof performance !== "undefined" ? performance.timing : void 0
      };
      if (_performance.now === void 0) {
        nowOffset = Date.now();
        if (_performance.timing && _performance.timing.navigationStart) {
          nowOffset = _performance.timing.navigationStart;
        }
        _performance.now = () => Date.now() - nowOffset;
      }
      nanoPerSec = 1e9;
      hrtime.bigint = function(time) {
        var diff = hrtime(time);
        if (typeof BigInt === "undefined") {
          return diff[0] * nanoPerSec + diff[1];
        }
        return BigInt(diff[0] * nanoPerSec) + BigInt(diff[1]);
      };
    }
  });

  // node_modules/esbuild-plugin-polyfill-node/polyfills/process.js
  var init_process2 = __esm({
    "node_modules/esbuild-plugin-polyfill-node/polyfills/process.js"() {
      init_process();
    }
  });

  // node_modules/@jspm/core/nodelibs/browser/chunk-DtuTasat.js
  function dew$2() {
    if (_dewExec$2) return exports$2;
    _dewExec$2 = true;
    exports$2.byteLength = byteLength;
    exports$2.toByteArray = toByteArray;
    exports$2.fromByteArray = fromByteArray;
    var lookup = [];
    var revLookup = [];
    var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (var i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i];
      revLookup[code.charCodeAt(i)] = i;
    }
    revLookup["-".charCodeAt(0)] = 62;
    revLookup["_".charCodeAt(0)] = 63;
    function getLens(b64) {
      var len2 = b64.length;
      if (len2 % 4 > 0) {
        throw new Error("Invalid string. Length must be a multiple of 4");
      }
      var validLen = b64.indexOf("=");
      if (validLen === -1) validLen = len2;
      var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
      return [validLen, placeHoldersLen];
    }
    function byteLength(b64) {
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function _byteLength(b64, validLen, placeHoldersLen) {
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function toByteArray(b64) {
      var tmp;
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
      var curByte = 0;
      var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
      var i2;
      for (i2 = 0; i2 < len2; i2 += 4) {
        tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      return arr;
    }
    function tripletToBase64(num) {
      return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
    }
    function encodeChunk(uint8, start, end) {
      var tmp;
      var output = [];
      for (var i2 = start; i2 < end; i2 += 3) {
        tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
        output.push(tripletToBase64(tmp));
      }
      return output.join("");
    }
    function fromByteArray(uint8) {
      var tmp;
      var len2 = uint8.length;
      var extraBytes = len2 % 3;
      var parts = [];
      var maxChunkLength = 16383;
      for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
        parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
      }
      if (extraBytes === 1) {
        tmp = uint8[len2 - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==");
      } else if (extraBytes === 2) {
        tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "=");
      }
      return parts.join("");
    }
    return exports$2;
  }
  function dew$1() {
    if (_dewExec$1) return exports$1;
    _dewExec$1 = true;
    exports$1.read = function(buffer, offset, isLE, mLen, nBytes) {
      var e, m;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i = isLE ? nBytes - 1 : 0;
      var d = isLE ? -1 : 1;
      var s = buffer[offset + i];
      i += d;
      e = s & (1 << -nBits) - 1;
      s >>= -nBits;
      nBits += eLen;
      for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {
      }
      m = e & (1 << -nBits) - 1;
      e >>= -nBits;
      nBits += mLen;
      for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {
      }
      if (e === 0) {
        e = 1 - eBias;
      } else if (e === eMax) {
        return m ? NaN : (s ? -1 : 1) * Infinity;
      } else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
      }
      return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
    };
    exports$1.write = function(buffer, value, offset, isLE, mLen, nBytes) {
      var e, m, c;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
      var i = isLE ? 0 : nBytes - 1;
      var d = isLE ? 1 : -1;
      var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
      value = Math.abs(value);
      if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
      } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }
        if (e + eBias >= 1) {
          value += rt / c;
        } else {
          value += rt * Math.pow(2, 1 - eBias);
        }
        if (value * c >= 2) {
          e++;
          c /= 2;
        }
        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value * c - 1) * Math.pow(2, mLen);
          e = e + eBias;
        } else {
          m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e = 0;
        }
      }
      for (; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
      }
      e = e << mLen | m;
      eLen += mLen;
      for (; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
      }
      buffer[offset + i - d] |= s * 128;
    };
    return exports$1;
  }
  function dew() {
    if (_dewExec) return exports;
    _dewExec = true;
    const base64 = dew$2();
    const ieee754 = dew$1();
    const customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
    exports.Buffer = Buffer3;
    exports.SlowBuffer = SlowBuffer;
    exports.INSPECT_MAX_BYTES = 50;
    const K_MAX_LENGTH = 2147483647;
    exports.kMaxLength = K_MAX_LENGTH;
    Buffer3.TYPED_ARRAY_SUPPORT = typedArraySupport();
    if (!Buffer3.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
      console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    }
    function typedArraySupport() {
      try {
        const arr = new Uint8Array(1);
        const proto = {
          foo: function() {
            return 42;
          }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
      } catch (e) {
        return false;
      }
    }
    Object.defineProperty(Buffer3.prototype, "parent", {
      enumerable: true,
      get: function() {
        if (!Buffer3.isBuffer(this)) return void 0;
        return this.buffer;
      }
    });
    Object.defineProperty(Buffer3.prototype, "offset", {
      enumerable: true,
      get: function() {
        if (!Buffer3.isBuffer(this)) return void 0;
        return this.byteOffset;
      }
    });
    function createBuffer(length) {
      if (length > K_MAX_LENGTH) {
        throw new RangeError('The value "' + length + '" is invalid for option "size"');
      }
      const buf = new Uint8Array(length);
      Object.setPrototypeOf(buf, Buffer3.prototype);
      return buf;
    }
    function Buffer3(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") {
          throw new TypeError('The "string" argument must be of type string. Received type number');
        }
        return allocUnsafe(arg);
      }
      return from(arg, encodingOrOffset, length);
    }
    Buffer3.poolSize = 8192;
    function from(value, encodingOrOffset, length) {
      if (typeof value === "string") {
        return fromString(value, encodingOrOffset);
      }
      if (ArrayBuffer.isView(value)) {
        return fromArrayView(value);
      }
      if (value == null) {
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
      }
      if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof value === "number") {
        throw new TypeError('The "value" argument must not be of type number. Received type number');
      }
      const valueOf = value.valueOf && value.valueOf();
      if (valueOf != null && valueOf !== value) {
        return Buffer3.from(valueOf, encodingOrOffset, length);
      }
      const b = fromObject(value);
      if (b) return b;
      if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
        return Buffer3.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
      }
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    }
    Buffer3.from = function(value, encodingOrOffset, length) {
      return from(value, encodingOrOffset, length);
    };
    Object.setPrototypeOf(Buffer3.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(Buffer3, Uint8Array);
    function assertSize(size) {
      if (typeof size !== "number") {
        throw new TypeError('"size" argument must be of type number');
      } else if (size < 0) {
        throw new RangeError('The value "' + size + '" is invalid for option "size"');
      }
    }
    function alloc(size, fill, encoding) {
      assertSize(size);
      if (size <= 0) {
        return createBuffer(size);
      }
      if (fill !== void 0) {
        return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
      }
      return createBuffer(size);
    }
    Buffer3.alloc = function(size, fill, encoding) {
      return alloc(size, fill, encoding);
    };
    function allocUnsafe(size) {
      assertSize(size);
      return createBuffer(size < 0 ? 0 : checked(size) | 0);
    }
    Buffer3.allocUnsafe = function(size) {
      return allocUnsafe(size);
    };
    Buffer3.allocUnsafeSlow = function(size) {
      return allocUnsafe(size);
    };
    function fromString(string, encoding) {
      if (typeof encoding !== "string" || encoding === "") {
        encoding = "utf8";
      }
      if (!Buffer3.isEncoding(encoding)) {
        throw new TypeError("Unknown encoding: " + encoding);
      }
      const length = byteLength(string, encoding) | 0;
      let buf = createBuffer(length);
      const actual = buf.write(string, encoding);
      if (actual !== length) {
        buf = buf.slice(0, actual);
      }
      return buf;
    }
    function fromArrayLike(array) {
      const length = array.length < 0 ? 0 : checked(array.length) | 0;
      const buf = createBuffer(length);
      for (let i = 0; i < length; i += 1) {
        buf[i] = array[i] & 255;
      }
      return buf;
    }
    function fromArrayView(arrayView) {
      if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
      }
      return fromArrayLike(arrayView);
    }
    function fromArrayBuffer(array, byteOffset, length) {
      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('"offset" is outside of buffer bounds');
      }
      if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('"length" is outside of buffer bounds');
      }
      let buf;
      if (byteOffset === void 0 && length === void 0) {
        buf = new Uint8Array(array);
      } else if (length === void 0) {
        buf = new Uint8Array(array, byteOffset);
      } else {
        buf = new Uint8Array(array, byteOffset, length);
      }
      Object.setPrototypeOf(buf, Buffer3.prototype);
      return buf;
    }
    function fromObject(obj) {
      if (Buffer3.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) {
          return buf;
        }
        obj.copy(buf, 0, 0, len);
        return buf;
      }
      if (obj.length !== void 0) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
          return createBuffer(0);
        }
        return fromArrayLike(obj);
      }
      if (obj.type === "Buffer" && Array.isArray(obj.data)) {
        return fromArrayLike(obj.data);
      }
    }
    function checked(length) {
      if (length >= K_MAX_LENGTH) {
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
      }
      return length | 0;
    }
    function SlowBuffer(length) {
      if (+length != length) {
        length = 0;
      }
      return Buffer3.alloc(+length);
    }
    Buffer3.isBuffer = function isBuffer(b) {
      return b != null && b._isBuffer === true && b !== Buffer3.prototype;
    };
    Buffer3.compare = function compare(a, b) {
      if (isInstance(a, Uint8Array)) a = Buffer3.from(a, a.offset, a.byteLength);
      if (isInstance(b, Uint8Array)) b = Buffer3.from(b, b.offset, b.byteLength);
      if (!Buffer3.isBuffer(a) || !Buffer3.isBuffer(b)) {
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      }
      if (a === b) return 0;
      let x = a.length;
      let y = b.length;
      for (let i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
          x = a[i];
          y = b[i];
          break;
        }
      }
      if (x < y) return -1;
      if (y < x) return 1;
      return 0;
    };
    Buffer3.isEncoding = function isEncoding(encoding) {
      switch (String(encoding).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    };
    Buffer3.concat = function concat2(list, length) {
      if (!Array.isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }
      if (list.length === 0) {
        return Buffer3.alloc(0);
      }
      let i;
      if (length === void 0) {
        length = 0;
        for (i = 0; i < list.length; ++i) {
          length += list[i].length;
        }
      }
      const buffer = Buffer3.allocUnsafe(length);
      let pos = 0;
      for (i = 0; i < list.length; ++i) {
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
          if (pos + buf.length > buffer.length) {
            if (!Buffer3.isBuffer(buf)) buf = Buffer3.from(buf);
            buf.copy(buffer, pos);
          } else {
            Uint8Array.prototype.set.call(buffer, buf, pos);
          }
        } else if (!Buffer3.isBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        } else {
          buf.copy(buffer, pos);
        }
        pos += buf.length;
      }
      return buffer;
    };
    function byteLength(string, encoding) {
      if (Buffer3.isBuffer(string)) {
        return string.length;
      }
      if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
        return string.byteLength;
      }
      if (typeof string !== "string") {
        throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
      }
      const len = string.length;
      const mustMatch = arguments.length > 2 && arguments[2] === true;
      if (!mustMatch && len === 0) return 0;
      let loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "ascii":
          case "latin1":
          case "binary":
            return len;
          case "utf8":
          case "utf-8":
            return utf8ToBytes(string).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return len * 2;
          case "hex":
            return len >>> 1;
          case "base64":
            return base64ToBytes(string).length;
          default:
            if (loweredCase) {
              return mustMatch ? -1 : utf8ToBytes(string).length;
            }
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer3.byteLength = byteLength;
    function slowToString(encoding, start, end) {
      let loweredCase = false;
      if (start === void 0 || start < 0) {
        start = 0;
      }
      if (start > this.length) {
        return "";
      }
      if (end === void 0 || end > this.length) {
        end = this.length;
      }
      if (end <= 0) {
        return "";
      }
      end >>>= 0;
      start >>>= 0;
      if (end <= start) {
        return "";
      }
      if (!encoding) encoding = "utf8";
      while (true) {
        switch (encoding) {
          case "hex":
            return hexSlice(this, start, end);
          case "utf8":
          case "utf-8":
            return utf8Slice(this, start, end);
          case "ascii":
            return asciiSlice(this, start, end);
          case "latin1":
          case "binary":
            return latin1Slice(this, start, end);
          case "base64":
            return base64Slice(this, start, end);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return utf16leSlice(this, start, end);
          default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer3.prototype._isBuffer = true;
    function swap(b, n, m) {
      const i = b[n];
      b[n] = b[m];
      b[m] = i;
    }
    Buffer3.prototype.swap16 = function swap16() {
      const len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      }
      for (let i = 0; i < len; i += 2) {
        swap(this, i, i + 1);
      }
      return this;
    };
    Buffer3.prototype.swap32 = function swap32() {
      const len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      }
      for (let i = 0; i < len; i += 4) {
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
      }
      return this;
    };
    Buffer3.prototype.swap64 = function swap64() {
      const len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      }
      for (let i = 0; i < len; i += 8) {
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
      }
      return this;
    };
    Buffer3.prototype.toString = function toString() {
      const length = this.length;
      if (length === 0) return "";
      if (arguments.length === 0) return utf8Slice(this, 0, length);
      return slowToString.apply(this, arguments);
    };
    Buffer3.prototype.toLocaleString = Buffer3.prototype.toString;
    Buffer3.prototype.equals = function equals(b) {
      if (!Buffer3.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
      if (this === b) return true;
      return Buffer3.compare(this, b) === 0;
    };
    Buffer3.prototype.inspect = function inspect() {
      let str = "";
      const max = exports.INSPECT_MAX_BYTES;
      str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
      if (this.length > max) str += " ... ";
      return "<Buffer " + str + ">";
    };
    if (customInspectSymbol) {
      Buffer3.prototype[customInspectSymbol] = Buffer3.prototype.inspect;
    }
    Buffer3.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
      if (isInstance(target, Uint8Array)) {
        target = Buffer3.from(target, target.offset, target.byteLength);
      }
      if (!Buffer3.isBuffer(target)) {
        throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
      }
      if (start === void 0) {
        start = 0;
      }
      if (end === void 0) {
        end = target ? target.length : 0;
      }
      if (thisStart === void 0) {
        thisStart = 0;
      }
      if (thisEnd === void 0) {
        thisEnd = this.length;
      }
      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError("out of range index");
      }
      if (thisStart >= thisEnd && start >= end) {
        return 0;
      }
      if (thisStart >= thisEnd) {
        return -1;
      }
      if (start >= end) {
        return 1;
      }
      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;
      if (this === target) return 0;
      let x = thisEnd - thisStart;
      let y = end - start;
      const len = Math.min(x, y);
      const thisCopy = this.slice(thisStart, thisEnd);
      const targetCopy = target.slice(start, end);
      for (let i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i];
          y = targetCopy[i];
          break;
        }
      }
      if (x < y) return -1;
      if (y < x) return 1;
      return 0;
    };
    function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
      if (buffer.length === 0) return -1;
      if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
      } else if (byteOffset > 2147483647) {
        byteOffset = 2147483647;
      } else if (byteOffset < -2147483648) {
        byteOffset = -2147483648;
      }
      byteOffset = +byteOffset;
      if (numberIsNaN(byteOffset)) {
        byteOffset = dir ? 0 : buffer.length - 1;
      }
      if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
      if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
      } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
      }
      if (typeof val === "string") {
        val = Buffer3.from(val, encoding);
      }
      if (Buffer3.isBuffer(val)) {
        if (val.length === 0) {
          return -1;
        }
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
      } else if (typeof val === "number") {
        val = val & 255;
        if (typeof Uint8Array.prototype.indexOf === "function") {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
          }
        }
        return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
      }
      throw new TypeError("val must be string, number or Buffer");
    }
    function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
      let indexSize = 1;
      let arrLength = arr.length;
      let valLength = val.length;
      if (encoding !== void 0) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
          if (arr.length < 2 || val.length < 2) {
            return -1;
          }
          indexSize = 2;
          arrLength /= 2;
          valLength /= 2;
          byteOffset /= 2;
        }
      }
      function read(buf, i2) {
        if (indexSize === 1) {
          return buf[i2];
        } else {
          return buf.readUInt16BE(i2 * indexSize);
        }
      }
      let i;
      if (dir) {
        let foundIndex = -1;
        for (i = byteOffset; i < arrLength; i++) {
          if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
          } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
          }
        }
      } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for (i = byteOffset; i >= 0; i--) {
          let found = true;
          for (let j = 0; j < valLength; j++) {
            if (read(arr, i + j) !== read(val, j)) {
              found = false;
              break;
            }
          }
          if (found) return i;
        }
      }
      return -1;
    }
    Buffer3.prototype.includes = function includes(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1;
    };
    Buffer3.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
    };
    Buffer3.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
    };
    function hexWrite(buf, string, offset, length) {
      offset = Number(offset) || 0;
      const remaining = buf.length - offset;
      if (!length) {
        length = remaining;
      } else {
        length = Number(length);
        if (length > remaining) {
          length = remaining;
        }
      }
      const strLen = string.length;
      if (length > strLen / 2) {
        length = strLen / 2;
      }
      let i;
      for (i = 0; i < length; ++i) {
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
      }
      return i;
    }
    function utf8Write(buf, string, offset, length) {
      return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
    }
    function asciiWrite(buf, string, offset, length) {
      return blitBuffer(asciiToBytes(string), buf, offset, length);
    }
    function base64Write(buf, string, offset, length) {
      return blitBuffer(base64ToBytes(string), buf, offset, length);
    }
    function ucs2Write(buf, string, offset, length) {
      return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
    }
    Buffer3.prototype.write = function write(string, offset, length, encoding) {
      if (offset === void 0) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
      } else if (length === void 0 && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
      } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
          length = length >>> 0;
          if (encoding === void 0) encoding = "utf8";
        } else {
          encoding = length;
          length = void 0;
        }
      } else {
        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      }
      const remaining = this.length - offset;
      if (length === void 0 || length > remaining) length = remaining;
      if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
        throw new RangeError("Attempt to write outside buffer bounds");
      }
      if (!encoding) encoding = "utf8";
      let loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "hex":
            return hexWrite(this, string, offset, length);
          case "utf8":
          case "utf-8":
            return utf8Write(this, string, offset, length);
          case "ascii":
          case "latin1":
          case "binary":
            return asciiWrite(this, string, offset, length);
          case "base64":
            return base64Write(this, string, offset, length);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write(this, string, offset, length);
          default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    };
    Buffer3.prototype.toJSON = function toJSON() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function base64Slice(buf, start, end) {
      if (start === 0 && end === buf.length) {
        return base64.fromByteArray(buf);
      } else {
        return base64.fromByteArray(buf.slice(start, end));
      }
    }
    function utf8Slice(buf, start, end) {
      end = Math.min(buf.length, end);
      const res = [];
      let i = start;
      while (i < end) {
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i + bytesPerSequence <= end) {
          let secondByte, thirdByte, fourthByte, tempCodePoint;
          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 128) {
                codePoint = firstByte;
              }
              break;
            case 2:
              secondByte = buf[i + 1];
              if ((secondByte & 192) === 128) {
                tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                if (tempCodePoint > 127) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 3:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 4:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              fourthByte = buf[i + 3];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                  codePoint = tempCodePoint;
                }
              }
          }
        }
        if (codePoint === null) {
          codePoint = 65533;
          bytesPerSequence = 1;
        } else if (codePoint > 65535) {
          codePoint -= 65536;
          res.push(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i += bytesPerSequence;
      }
      return decodeCodePointsArray(res);
    }
    const MAX_ARGUMENTS_LENGTH = 4096;
    function decodeCodePointsArray(codePoints) {
      const len = codePoints.length;
      if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints);
      }
      let res = "";
      let i = 0;
      while (i < len) {
        res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
      }
      return res;
    }
    function asciiSlice(buf, start, end) {
      let ret = "";
      end = Math.min(buf.length, end);
      for (let i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i] & 127);
      }
      return ret;
    }
    function latin1Slice(buf, start, end) {
      let ret = "";
      end = Math.min(buf.length, end);
      for (let i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i]);
      }
      return ret;
    }
    function hexSlice(buf, start, end) {
      const len = buf.length;
      if (!start || start < 0) start = 0;
      if (!end || end < 0 || end > len) end = len;
      let out = "";
      for (let i = start; i < end; ++i) {
        out += hexSliceLookupTable[buf[i]];
      }
      return out;
    }
    function utf16leSlice(buf, start, end) {
      const bytes = buf.slice(start, end);
      let res = "";
      for (let i = 0; i < bytes.length - 1; i += 2) {
        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
      }
      return res;
    }
    Buffer3.prototype.slice = function slice(start, end) {
      const len = this.length;
      start = ~~start;
      end = end === void 0 ? len : ~~end;
      if (start < 0) {
        start += len;
        if (start < 0) start = 0;
      } else if (start > len) {
        start = len;
      }
      if (end < 0) {
        end += len;
        if (end < 0) end = 0;
      } else if (end > len) {
        end = len;
      }
      if (end < start) end = start;
      const newBuf = this.subarray(start, end);
      Object.setPrototypeOf(newBuf, Buffer3.prototype);
      return newBuf;
    };
    function checkOffset(offset, ext, length) {
      if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
      if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
    }
    Buffer3.prototype.readUintLE = Buffer3.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength2, this.length);
      let val = this[offset];
      let mul = 1;
      let i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      return val;
    };
    Buffer3.prototype.readUintBE = Buffer3.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        checkOffset(offset, byteLength2, this.length);
      }
      let val = this[offset + --byteLength2];
      let mul = 1;
      while (byteLength2 > 0 && (mul *= 256)) {
        val += this[offset + --byteLength2] * mul;
      }
      return val;
    };
    Buffer3.prototype.readUint8 = Buffer3.prototype.readUInt8 = function readUInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 1, this.length);
      return this[offset];
    };
    Buffer3.prototype.readUint16LE = Buffer3.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      return this[offset] | this[offset + 1] << 8;
    };
    Buffer3.prototype.readUint16BE = Buffer3.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      return this[offset] << 8 | this[offset + 1];
    };
    Buffer3.prototype.readUint32LE = Buffer3.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
    };
    Buffer3.prototype.readUint32BE = Buffer3.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    };
    Buffer3.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
      const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
      return BigInt(lo) + (BigInt(hi) << BigInt(32));
    });
    Buffer3.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
      const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
      return (BigInt(hi) << BigInt(32)) + BigInt(lo);
    });
    Buffer3.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength2, this.length);
      let val = this[offset];
      let mul = 1;
      let i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      mul *= 128;
      if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer3.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength2, this.length);
      let i = byteLength2;
      let mul = 1;
      let val = this[offset + --i];
      while (i > 0 && (mul *= 256)) {
        val += this[offset + --i] * mul;
      }
      mul *= 128;
      if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer3.prototype.readInt8 = function readInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 1, this.length);
      if (!(this[offset] & 128)) return this[offset];
      return (255 - this[offset] + 1) * -1;
    };
    Buffer3.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      const val = this[offset] | this[offset + 1] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer3.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      const val = this[offset + 1] | this[offset] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer3.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    };
    Buffer3.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    };
    Buffer3.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24);
      return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
    });
    Buffer3.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const val = (first << 24) + // Overflow
      this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
      return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
    });
    Buffer3.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, true, 23, 4);
    };
    Buffer3.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, false, 23, 4);
    };
    Buffer3.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, true, 52, 8);
    };
    Buffer3.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, false, 52, 8);
    };
    function checkInt(buf, value, offset, ext, max, min) {
      if (!Buffer3.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
      if (offset + ext > buf.length) throw new RangeError("Index out of range");
    }
    Buffer3.prototype.writeUintLE = Buffer3.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      let mul = 1;
      let i = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer3.prototype.writeUintBE = Buffer3.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      let i = byteLength2 - 1;
      let mul = 1;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer3.prototype.writeUint8 = Buffer3.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer3.prototype.writeUint16LE = Buffer3.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer3.prototype.writeUint16BE = Buffer3.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer3.prototype.writeUint32LE = Buffer3.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset + 3] = value >>> 24;
      this[offset + 2] = value >>> 16;
      this[offset + 1] = value >>> 8;
      this[offset] = value & 255;
      return offset + 4;
    };
    Buffer3.prototype.writeUint32BE = Buffer3.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    function wrtBigUInt64LE(buf, value, offset, min, max) {
      checkIntBI(value, min, max, buf, offset, 7);
      let lo = Number(value & BigInt(4294967295));
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      let hi = Number(value >> BigInt(32) & BigInt(4294967295));
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      return offset;
    }
    function wrtBigUInt64BE(buf, value, offset, min, max) {
      checkIntBI(value, min, max, buf, offset, 7);
      let lo = Number(value & BigInt(4294967295));
      buf[offset + 7] = lo;
      lo = lo >> 8;
      buf[offset + 6] = lo;
      lo = lo >> 8;
      buf[offset + 5] = lo;
      lo = lo >> 8;
      buf[offset + 4] = lo;
      let hi = Number(value >> BigInt(32) & BigInt(4294967295));
      buf[offset + 3] = hi;
      hi = hi >> 8;
      buf[offset + 2] = hi;
      hi = hi >> 8;
      buf[offset + 1] = hi;
      hi = hi >> 8;
      buf[offset] = hi;
      return offset + 8;
    }
    Buffer3.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
      return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Buffer3.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
      return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Buffer3.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      let i = 0;
      let mul = 1;
      let sub = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer3.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      let i = byteLength2 - 1;
      let mul = 1;
      let sub = 0;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer3.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
      if (value < 0) value = 255 + value + 1;
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer3.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer3.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer3.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      this[offset + 2] = value >>> 16;
      this[offset + 3] = value >>> 24;
      return offset + 4;
    };
    Buffer3.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
      if (value < 0) value = 4294967295 + value + 1;
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    Buffer3.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
      return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    Buffer3.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
      return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function checkIEEE754(buf, value, offset, ext, max, min) {
      if (offset + ext > buf.length) throw new RangeError("Index out of range");
      if (offset < 0) throw new RangeError("Index out of range");
    }
    function writeFloat(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 4);
      }
      ieee754.write(buf, value, offset, littleEndian, 23, 4);
      return offset + 4;
    }
    Buffer3.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert);
    };
    Buffer3.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert);
    };
    function writeDouble(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 8);
      }
      ieee754.write(buf, value, offset, littleEndian, 52, 8);
      return offset + 8;
    }
    Buffer3.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert);
    };
    Buffer3.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert);
    };
    Buffer3.prototype.copy = function copy(target, targetStart, start, end) {
      if (!Buffer3.isBuffer(target)) throw new TypeError("argument should be a Buffer");
      if (!start) start = 0;
      if (!end && end !== 0) end = this.length;
      if (targetStart >= target.length) targetStart = target.length;
      if (!targetStart) targetStart = 0;
      if (end > 0 && end < start) end = start;
      if (end === start) return 0;
      if (target.length === 0 || this.length === 0) return 0;
      if (targetStart < 0) {
        throw new RangeError("targetStart out of bounds");
      }
      if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
      if (end < 0) throw new RangeError("sourceEnd out of bounds");
      if (end > this.length) end = this.length;
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }
      const len = end - start;
      if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
        this.copyWithin(targetStart, start, end);
      } else {
        Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
      }
      return len;
    };
    Buffer3.prototype.fill = function fill(val, start, end, encoding) {
      if (typeof val === "string") {
        if (typeof start === "string") {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === "string") {
          encoding = end;
          end = this.length;
        }
        if (encoding !== void 0 && typeof encoding !== "string") {
          throw new TypeError("encoding must be a string");
        }
        if (typeof encoding === "string" && !Buffer3.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
        if (val.length === 1) {
          const code = val.charCodeAt(0);
          if (encoding === "utf8" && code < 128 || encoding === "latin1") {
            val = code;
          }
        }
      } else if (typeof val === "number") {
        val = val & 255;
      } else if (typeof val === "boolean") {
        val = Number(val);
      }
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError("Out of range index");
      }
      if (end <= start) {
        return this;
      }
      start = start >>> 0;
      end = end === void 0 ? this.length : end >>> 0;
      if (!val) val = 0;
      let i;
      if (typeof val === "number") {
        for (i = start; i < end; ++i) {
          this[i] = val;
        }
      } else {
        const bytes = Buffer3.isBuffer(val) ? val : Buffer3.from(val, encoding);
        const len = bytes.length;
        if (len === 0) {
          throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        }
        for (i = 0; i < end - start; ++i) {
          this[i + start] = bytes[i % len];
        }
      }
      return this;
    };
    const errors = {};
    function E(sym, getMessage, Base) {
      errors[sym] = class NodeError extends Base {
        constructor() {
          super();
          Object.defineProperty(this, "message", {
            value: getMessage.apply(this, arguments),
            writable: true,
            configurable: true
          });
          this.name = `${this.name} [${sym}]`;
          this.stack;
          delete this.name;
        }
        get code() {
          return sym;
        }
        set code(value) {
          Object.defineProperty(this, "code", {
            configurable: true,
            enumerable: true,
            value,
            writable: true
          });
        }
        toString() {
          return `${this.name} [${sym}]: ${this.message}`;
        }
      };
    }
    E("ERR_BUFFER_OUT_OF_BOUNDS", function(name2) {
      if (name2) {
        return `${name2} is outside of buffer bounds`;
      }
      return "Attempt to access memory outside buffer bounds";
    }, RangeError);
    E("ERR_INVALID_ARG_TYPE", function(name2, actual) {
      return `The "${name2}" argument must be of type number. Received type ${typeof actual}`;
    }, TypeError);
    E("ERR_OUT_OF_RANGE", function(str, range, input) {
      let msg = `The value of "${str}" is out of range.`;
      let received = input;
      if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
        received = addNumericalSeparator(String(input));
      } else if (typeof input === "bigint") {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
          received = addNumericalSeparator(received);
        }
        received += "n";
      }
      msg += ` It must be ${range}. Received ${received}`;
      return msg;
    }, RangeError);
    function addNumericalSeparator(val) {
      let res = "";
      let i = val.length;
      const start = val[0] === "-" ? 1 : 0;
      for (; i >= start + 4; i -= 3) {
        res = `_${val.slice(i - 3, i)}${res}`;
      }
      return `${val.slice(0, i)}${res}`;
    }
    function checkBounds(buf, offset, byteLength2) {
      validateNumber(offset, "offset");
      if (buf[offset] === void 0 || buf[offset + byteLength2] === void 0) {
        boundsError(offset, buf.length - (byteLength2 + 1));
      }
    }
    function checkIntBI(value, min, max, buf, offset, byteLength2) {
      if (value > max || value < min) {
        const n = typeof min === "bigint" ? "n" : "";
        let range;
        {
          if (min === 0 || min === BigInt(0)) {
            range = `>= 0${n} and < 2${n} ** ${(byteLength2 + 1) * 8}${n}`;
          } else {
            range = `>= -(2${n} ** ${(byteLength2 + 1) * 8 - 1}${n}) and < 2 ** ${(byteLength2 + 1) * 8 - 1}${n}`;
          }
        }
        throw new errors.ERR_OUT_OF_RANGE("value", range, value);
      }
      checkBounds(buf, offset, byteLength2);
    }
    function validateNumber(value, name2) {
      if (typeof value !== "number") {
        throw new errors.ERR_INVALID_ARG_TYPE(name2, "number", value);
      }
    }
    function boundsError(value, length, type) {
      if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE("offset", "an integer", value);
      }
      if (length < 0) {
        throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
      }
      throw new errors.ERR_OUT_OF_RANGE("offset", `>= ${0} and <= ${length}`, value);
    }
    const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
    function base64clean(str) {
      str = str.split("=")[0];
      str = str.trim().replace(INVALID_BASE64_RE, "");
      if (str.length < 2) return "";
      while (str.length % 4 !== 0) {
        str = str + "=";
      }
      return str;
    }
    function utf8ToBytes(string, units) {
      units = units || Infinity;
      let codePoint;
      const length = string.length;
      let leadSurrogate = null;
      const bytes = [];
      for (let i = 0; i < length; ++i) {
        codePoint = string.charCodeAt(i);
        if (codePoint > 55295 && codePoint < 57344) {
          if (!leadSurrogate) {
            if (codePoint > 56319) {
              if ((units -= 3) > -1) bytes.push(239, 191, 189);
              continue;
            } else if (i + 1 === length) {
              if ((units -= 3) > -1) bytes.push(239, 191, 189);
              continue;
            }
            leadSurrogate = codePoint;
            continue;
          }
          if (codePoint < 56320) {
            if ((units -= 3) > -1) bytes.push(239, 191, 189);
            leadSurrogate = codePoint;
            continue;
          }
          codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) {
          if ((units -= 3) > -1) bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        if (codePoint < 128) {
          if ((units -= 1) < 0) break;
          bytes.push(codePoint);
        } else if (codePoint < 2048) {
          if ((units -= 2) < 0) break;
          bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
        } else if (codePoint < 65536) {
          if ((units -= 3) < 0) break;
          bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else if (codePoint < 1114112) {
          if ((units -= 4) < 0) break;
          bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else {
          throw new Error("Invalid code point");
        }
      }
      return bytes;
    }
    function asciiToBytes(str) {
      const byteArray = [];
      for (let i = 0; i < str.length; ++i) {
        byteArray.push(str.charCodeAt(i) & 255);
      }
      return byteArray;
    }
    function utf16leToBytes(str, units) {
      let c, hi, lo;
      const byteArray = [];
      for (let i = 0; i < str.length; ++i) {
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
      }
      return byteArray;
    }
    function base64ToBytes(str) {
      return base64.toByteArray(base64clean(str));
    }
    function blitBuffer(src, dst, offset, length) {
      let i;
      for (i = 0; i < length; ++i) {
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
      }
      return i;
    }
    function isInstance(obj, type) {
      return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
    }
    function numberIsNaN(obj) {
      return obj !== obj;
    }
    const hexSliceLookupTable = function() {
      const alphabet = "0123456789abcdef";
      const table = new Array(256);
      for (let i = 0; i < 16; ++i) {
        const i16 = i * 16;
        for (let j = 0; j < 16; ++j) {
          table[i16 + j] = alphabet[i] + alphabet[j];
        }
      }
      return table;
    }();
    function defineBigIntMethod(fn) {
      return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
    }
    function BufferBigIntNotDefined() {
      throw new Error("BigInt not supported");
    }
    return exports;
  }
  var exports$2, _dewExec$2, exports$1, _dewExec$1, exports, _dewExec;
  var init_chunk_DtuTasat = __esm({
    "node_modules/@jspm/core/nodelibs/browser/chunk-DtuTasat.js"() {
      init_dirname();
      init_buffer2();
      init_process2();
      exports$2 = {};
      _dewExec$2 = false;
      exports$1 = {};
      _dewExec$1 = false;
      exports = {};
      _dewExec = false;
    }
  });

  // node_modules/@jspm/core/nodelibs/browser/buffer.js
  var exports2, Buffer2, INSPECT_MAX_BYTES, kMaxLength;
  var init_buffer = __esm({
    "node_modules/@jspm/core/nodelibs/browser/buffer.js"() {
      init_dirname();
      init_buffer2();
      init_process2();
      init_chunk_DtuTasat();
      exports2 = dew();
      exports2["Buffer"];
      exports2["SlowBuffer"];
      exports2["INSPECT_MAX_BYTES"];
      exports2["kMaxLength"];
      Buffer2 = exports2.Buffer;
      INSPECT_MAX_BYTES = exports2.INSPECT_MAX_BYTES;
      kMaxLength = exports2.kMaxLength;
    }
  });

  // node_modules/esbuild-plugin-polyfill-node/polyfills/buffer.js
  var init_buffer2 = __esm({
    "node_modules/esbuild-plugin-polyfill-node/polyfills/buffer.js"() {
      init_buffer();
    }
  });

  // node_modules/@jspm/core/nodelibs/browser/events.js
  function dew2() {
    if (_dewExec2) return exports$12;
    _dewExec2 = true;
    var R = typeof Reflect === "object" ? Reflect : null;
    var ReflectApply = R && typeof R.apply === "function" ? R.apply : function ReflectApply2(target, receiver, args) {
      return Function.prototype.apply.call(target, receiver, args);
    };
    var ReflectOwnKeys;
    if (R && typeof R.ownKeys === "function") {
      ReflectOwnKeys = R.ownKeys;
    } else if (Object.getOwnPropertySymbols) {
      ReflectOwnKeys = function ReflectOwnKeys2(target) {
        return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
      };
    } else {
      ReflectOwnKeys = function ReflectOwnKeys2(target) {
        return Object.getOwnPropertyNames(target);
      };
    }
    function ProcessEmitWarning(warning) {
      if (console && console.warn) console.warn(warning);
    }
    var NumberIsNaN = Number.isNaN || function NumberIsNaN2(value) {
      return value !== value;
    };
    function EventEmitter2() {
      EventEmitter2.init.call(this);
    }
    exports$12 = EventEmitter2;
    exports$12.once = once2;
    EventEmitter2.EventEmitter = EventEmitter2;
    EventEmitter2.prototype._events = void 0;
    EventEmitter2.prototype._eventsCount = 0;
    EventEmitter2.prototype._maxListeners = void 0;
    var defaultMaxListeners2 = 10;
    function checkListener(listener) {
      if (typeof listener !== "function") {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }
    }
    Object.defineProperty(EventEmitter2, "defaultMaxListeners", {
      enumerable: true,
      get: function() {
        return defaultMaxListeners2;
      },
      set: function(arg) {
        if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) {
          throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
        }
        defaultMaxListeners2 = arg;
      }
    });
    EventEmitter2.init = function() {
      if (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) {
        this._events = /* @__PURE__ */ Object.create(null);
        this._eventsCount = 0;
      }
      this._maxListeners = this._maxListeners || void 0;
    };
    EventEmitter2.prototype.setMaxListeners = function setMaxListeners(n) {
      if (typeof n !== "number" || n < 0 || NumberIsNaN(n)) {
        throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
      }
      this._maxListeners = n;
      return this;
    };
    function _getMaxListeners(that) {
      if (that._maxListeners === void 0) return EventEmitter2.defaultMaxListeners;
      return that._maxListeners;
    }
    EventEmitter2.prototype.getMaxListeners = function getMaxListeners() {
      return _getMaxListeners(this);
    };
    EventEmitter2.prototype.emit = function emit(type) {
      var args = [];
      for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
      var doError = type === "error";
      var events = this._events;
      if (events !== void 0) doError = doError && events.error === void 0;
      else if (!doError) return false;
      if (doError) {
        var er;
        if (args.length > 0) er = args[0];
        if (er instanceof Error) {
          throw er;
        }
        var err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
        err.context = er;
        throw err;
      }
      var handler = events[type];
      if (handler === void 0) return false;
      if (typeof handler === "function") {
        ReflectApply(handler, this, args);
      } else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for (var i = 0; i < len; ++i) ReflectApply(listeners[i], this, args);
      }
      return true;
    };
    function _addListener(target, type, listener, prepend) {
      var m;
      var events;
      var existing;
      checkListener(listener);
      events = target._events;
      if (events === void 0) {
        events = target._events = /* @__PURE__ */ Object.create(null);
        target._eventsCount = 0;
      } else {
        if (events.newListener !== void 0) {
          target.emit("newListener", type, listener.listener ? listener.listener : listener);
          events = target._events;
        }
        existing = events[type];
      }
      if (existing === void 0) {
        existing = events[type] = listener;
        ++target._eventsCount;
      } else {
        if (typeof existing === "function") {
          existing = events[type] = prepend ? [listener, existing] : [existing, listener];
        } else if (prepend) {
          existing.unshift(listener);
        } else {
          existing.push(listener);
        }
        m = _getMaxListeners(target);
        if (m > 0 && existing.length > m && !existing.warned) {
          existing.warned = true;
          var w = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners added. Use emitter.setMaxListeners() to increase limit");
          w.name = "MaxListenersExceededWarning";
          w.emitter = target;
          w.type = type;
          w.count = existing.length;
          ProcessEmitWarning(w);
        }
      }
      return target;
    }
    EventEmitter2.prototype.addListener = function addListener(type, listener) {
      return _addListener(this, type, listener, false);
    };
    EventEmitter2.prototype.on = EventEmitter2.prototype.addListener;
    EventEmitter2.prototype.prependListener = function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };
    function onceWrapper() {
      if (!this.fired) {
        this.target.removeListener(this.type, this.wrapFn);
        this.fired = true;
        if (arguments.length === 0) return this.listener.call(this.target);
        return this.listener.apply(this.target, arguments);
      }
    }
    function _onceWrap(target, type, listener) {
      var state = {
        fired: false,
        wrapFn: void 0,
        target,
        type,
        listener
      };
      var wrapped = onceWrapper.bind(state);
      wrapped.listener = listener;
      state.wrapFn = wrapped;
      return wrapped;
    }
    EventEmitter2.prototype.once = function once3(type, listener) {
      checkListener(listener);
      this.on(type, _onceWrap(this, type, listener));
      return this;
    };
    EventEmitter2.prototype.prependOnceListener = function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };
    EventEmitter2.prototype.removeListener = function removeListener(type, listener) {
      var list, events, position, i, originalListener;
      checkListener(listener);
      events = this._events;
      if (events === void 0) return this;
      list = events[type];
      if (list === void 0) return this;
      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0) this._events = /* @__PURE__ */ Object.create(null);
        else {
          delete events[type];
          if (events.removeListener) this.emit("removeListener", type, list.listener || listener);
        }
      } else if (typeof list !== "function") {
        position = -1;
        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }
        if (position < 0) return this;
        if (position === 0) list.shift();
        else {
          spliceOne(list, position);
        }
        if (list.length === 1) events[type] = list[0];
        if (events.removeListener !== void 0) this.emit("removeListener", type, originalListener || listener);
      }
      return this;
    };
    EventEmitter2.prototype.off = EventEmitter2.prototype.removeListener;
    EventEmitter2.prototype.removeAllListeners = function removeAllListeners(type) {
      var listeners, events, i;
      events = this._events;
      if (events === void 0) return this;
      if (events.removeListener === void 0) {
        if (arguments.length === 0) {
          this._events = /* @__PURE__ */ Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== void 0) {
          if (--this._eventsCount === 0) this._events = /* @__PURE__ */ Object.create(null);
          else delete events[type];
        }
        return this;
      }
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === "removeListener") continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners("removeListener");
        this._events = /* @__PURE__ */ Object.create(null);
        this._eventsCount = 0;
        return this;
      }
      listeners = events[type];
      if (typeof listeners === "function") {
        this.removeListener(type, listeners);
      } else if (listeners !== void 0) {
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }
      return this;
    };
    function _listeners(target, type, unwrap) {
      var events = target._events;
      if (events === void 0) return [];
      var evlistener = events[type];
      if (evlistener === void 0) return [];
      if (typeof evlistener === "function") return unwrap ? [evlistener.listener || evlistener] : [evlistener];
      return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
    }
    EventEmitter2.prototype.listeners = function listeners(type) {
      return _listeners(this, type, true);
    };
    EventEmitter2.prototype.rawListeners = function rawListeners(type) {
      return _listeners(this, type, false);
    };
    EventEmitter2.listenerCount = function(emitter, type) {
      if (typeof emitter.listenerCount === "function") {
        return emitter.listenerCount(type);
      } else {
        return listenerCount2.call(emitter, type);
      }
    };
    EventEmitter2.prototype.listenerCount = listenerCount2;
    function listenerCount2(type) {
      var events = this._events;
      if (events !== void 0) {
        var evlistener = events[type];
        if (typeof evlistener === "function") {
          return 1;
        } else if (evlistener !== void 0) {
          return evlistener.length;
        }
      }
      return 0;
    }
    EventEmitter2.prototype.eventNames = function eventNames() {
      return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
    };
    function arrayClone(arr, n) {
      var copy = new Array(n);
      for (var i = 0; i < n; ++i) copy[i] = arr[i];
      return copy;
    }
    function spliceOne(list, index) {
      for (; index + 1 < list.length; index++) list[index] = list[index + 1];
      list.pop();
    }
    function unwrapListeners(arr) {
      var ret = new Array(arr.length);
      for (var i = 0; i < ret.length; ++i) {
        ret[i] = arr[i].listener || arr[i];
      }
      return ret;
    }
    function once2(emitter, name2) {
      return new Promise(function(resolve, reject2) {
        function errorListener(err) {
          emitter.removeListener(name2, resolver);
          reject2(err);
        }
        function resolver() {
          if (typeof emitter.removeListener === "function") {
            emitter.removeListener("error", errorListener);
          }
          resolve([].slice.call(arguments));
        }
        eventTargetAgnosticAddListener(emitter, name2, resolver, {
          once: true
        });
        if (name2 !== "error") {
          addErrorHandlerIfEventEmitter(emitter, errorListener, {
            once: true
          });
        }
      });
    }
    function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
      if (typeof emitter.on === "function") {
        eventTargetAgnosticAddListener(emitter, "error", handler, flags);
      }
    }
    function eventTargetAgnosticAddListener(emitter, name2, listener, flags) {
      if (typeof emitter.on === "function") {
        if (flags.once) {
          emitter.once(name2, listener);
        } else {
          emitter.on(name2, listener);
        }
      } else if (typeof emitter.addEventListener === "function") {
        emitter.addEventListener(name2, function wrapListener(arg) {
          if (flags.once) {
            emitter.removeEventListener(name2, wrapListener);
          }
          listener(arg);
        });
      } else {
        throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
      }
    }
    return exports$12;
  }
  var exports$12, _dewExec2, exports3, EventEmitter, defaultMaxListeners, init, listenerCount, on, once;
  var init_events = __esm({
    "node_modules/@jspm/core/nodelibs/browser/events.js"() {
      init_dirname();
      init_buffer2();
      init_process2();
      exports$12 = {};
      _dewExec2 = false;
      exports3 = dew2();
      exports3["once"];
      exports3.once = function(emitter, event) {
        return new Promise((resolve, reject2) => {
          function eventListener(...args) {
            if (errorListener !== void 0) {
              emitter.removeListener("error", errorListener);
            }
            resolve(args);
          }
          let errorListener;
          if (event !== "error") {
            errorListener = (err) => {
              emitter.removeListener(name, eventListener);
              reject2(err);
            };
            emitter.once("error", errorListener);
          }
          emitter.once(event, eventListener);
        });
      };
      exports3.on = function(emitter, event) {
        const unconsumedEventValues = [];
        const unconsumedPromises = [];
        let error2 = null;
        let finished = false;
        const iterator = {
          async next() {
            const value = unconsumedEventValues.shift();
            if (value) {
              return createIterResult(value, false);
            }
            if (error2) {
              const p = Promise.reject(error2);
              error2 = null;
              return p;
            }
            if (finished) {
              return createIterResult(void 0, true);
            }
            return new Promise((resolve, reject2) => unconsumedPromises.push({ resolve, reject: reject2 }));
          },
          async return() {
            emitter.removeListener(event, eventHandler);
            emitter.removeListener("error", errorHandler);
            finished = true;
            for (const promise of unconsumedPromises) {
              promise.resolve(createIterResult(void 0, true));
            }
            return createIterResult(void 0, true);
          },
          throw(err) {
            error2 = err;
            emitter.removeListener(event, eventHandler);
            emitter.removeListener("error", errorHandler);
          },
          [Symbol.asyncIterator]() {
            return this;
          }
        };
        emitter.on(event, eventHandler);
        emitter.on("error", errorHandler);
        return iterator;
        function eventHandler(...args) {
          const promise = unconsumedPromises.shift();
          if (promise) {
            promise.resolve(createIterResult(args, false));
          } else {
            unconsumedEventValues.push(args);
          }
        }
        function errorHandler(err) {
          finished = true;
          const toError = unconsumedPromises.shift();
          if (toError) {
            toError.reject(err);
          } else {
            error2 = err;
          }
          iterator.return();
        }
      };
      ({
        EventEmitter,
        defaultMaxListeners,
        init,
        listenerCount,
        on,
        once
      } = exports3);
    }
  });

  // node_modules/@inrupt/oidc-client/lib/oidc-client.min.js
  var require_oidc_client_min = __commonJS({
    "node_modules/@inrupt/oidc-client/lib/oidc-client.min.js"(exports4, module) {
      init_dirname();
      init_buffer2();
      init_process2();
      !function t(e, r) {
        if ("object" == typeof exports4 && "object" == typeof module) module.exports = r();
        else if ("function" == typeof define && define.amd) define([], r);
        else {
          var n = r();
          for (var i in n) ("object" == typeof exports4 ? exports4 : e)[i] = n[i];
        }
      }(exports4, function() {
        return function(t) {
          var e = {};
          function r(n) {
            if (e[n]) return e[n].exports;
            var i = e[n] = { i: n, l: false, exports: {} };
            return t[n].call(i.exports, i, i.exports, r), i.l = true, i.exports;
          }
          return r.m = t, r.c = e, r.d = function(t2, e2, n) {
            r.o(t2, e2) || Object.defineProperty(t2, e2, { enumerable: true, get: n });
          }, r.r = function(t2) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
          }, r.t = function(t2, e2) {
            if (1 & e2 && (t2 = r(t2)), 8 & e2) return t2;
            if (4 & e2 && "object" == typeof t2 && t2 && t2.__esModule) return t2;
            var n = /* @__PURE__ */ Object.create(null);
            if (r.r(n), Object.defineProperty(n, "default", { enumerable: true, value: t2 }), 2 & e2 && "string" != typeof t2) for (var i in t2) r.d(n, i, function(e3) {
              return t2[e3];
            }.bind(null, i));
            return n;
          }, r.n = function(t2) {
            var e2 = t2 && t2.__esModule ? function e3() {
              return t2.default;
            } : function e3() {
              return t2;
            };
            return r.d(e2, "a", e2), e2;
          }, r.o = function(t2, e2) {
            return Object.prototype.hasOwnProperty.call(t2, e2);
          }, r.p = "", r(r.s = 22);
        }([function(t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true });
          var n = /* @__PURE__ */ function() {
            function t2(t3, e2) {
              for (var r2 = 0; r2 < e2.length; r2++) {
                var n2 = e2[r2];
                n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, n2.key, n2);
              }
            }
            return function(e2, r2, n2) {
              return r2 && t2(e2.prototype, r2), n2 && t2(e2, n2), e2;
            };
          }();
          var i = { debug: function t2() {
          }, info: function t2() {
          }, warn: function t2() {
          }, error: function t2() {
          } }, o = void 0, s = void 0;
          (e.Log = function() {
            function t2() {
              !function e2(t3, r2) {
                if (!(t3 instanceof r2)) throw new TypeError("Cannot call a class as a function");
              }(this, t2);
            }
            return t2.reset = function t3() {
              s = 3, o = i;
            }, t2.debug = function t3() {
              if (s >= 4) {
                for (var e2 = arguments.length, r2 = Array(e2), n2 = 0; n2 < e2; n2++) r2[n2] = arguments[n2];
                o.debug.apply(o, Array.from(r2));
              }
            }, t2.info = function t3() {
              if (s >= 3) {
                for (var e2 = arguments.length, r2 = Array(e2), n2 = 0; n2 < e2; n2++) r2[n2] = arguments[n2];
                o.info.apply(o, Array.from(r2));
              }
            }, t2.warn = function t3() {
              if (s >= 2) {
                for (var e2 = arguments.length, r2 = Array(e2), n2 = 0; n2 < e2; n2++) r2[n2] = arguments[n2];
                o.warn.apply(o, Array.from(r2));
              }
            }, t2.error = function t3() {
              if (s >= 1) {
                for (var e2 = arguments.length, r2 = Array(e2), n2 = 0; n2 < e2; n2++) r2[n2] = arguments[n2];
                o.error.apply(o, Array.from(r2));
              }
            }, n(t2, null, [{ key: "NONE", get: function t3() {
              return 0;
            } }, { key: "ERROR", get: function t3() {
              return 1;
            } }, { key: "WARN", get: function t3() {
              return 2;
            } }, { key: "INFO", get: function t3() {
              return 3;
            } }, { key: "DEBUG", get: function t3() {
              return 4;
            } }, { key: "level", get: function t3() {
              return s;
            }, set: function t3(e2) {
              if (!(0 <= e2 && e2 <= 4)) throw new Error("Invalid log level");
              s = e2;
            } }, { key: "logger", get: function t3() {
              return o;
            }, set: function t3(e2) {
              if (!e2.debug && e2.info && (e2.debug = e2.info), !(e2.debug && e2.info && e2.warn && e2.error)) throw new Error("Invalid logger");
              o = e2;
            } }]), t2;
          }()).reset();
        }, function(t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true });
          var n = /* @__PURE__ */ function() {
            function t2(t3, e2) {
              for (var r2 = 0; r2 < e2.length; r2++) {
                var n2 = e2[r2];
                n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, n2.key, n2);
              }
            }
            return function(e2, r2, n2) {
              return r2 && t2(e2.prototype, r2), n2 && t2(e2, n2), e2;
            };
          }();
          var i = { setInterval: function(t2) {
            function e2(e3, r2) {
              return t2.apply(this, arguments);
            }
            return e2.toString = function() {
              return t2.toString();
            }, e2;
          }(function(t2, e2) {
            return setInterval(t2, e2);
          }), clearInterval: function(t2) {
            function e2(e3) {
              return t2.apply(this, arguments);
            }
            return e2.toString = function() {
              return t2.toString();
            }, e2;
          }(function(t2) {
            return clearInterval(t2);
          }) }, o = false, s = null;
          e.Global = function() {
            function t2() {
              !function e2(t3, r2) {
                if (!(t3 instanceof r2)) throw new TypeError("Cannot call a class as a function");
              }(this, t2);
            }
            return t2._testing = function t3() {
              o = true;
            }, t2.setXMLHttpRequest = function t3(e2) {
              s = e2;
            }, n(t2, null, [{ key: "location", get: function t3() {
              if (!o) return location;
            } }, { key: "localStorage", get: function t3() {
              if (!o && "undefined" != typeof window) return localStorage;
            } }, { key: "sessionStorage", get: function t3() {
              if (!o && "undefined" != typeof window) return sessionStorage;
            } }, { key: "XMLHttpRequest", get: function t3() {
              if (!o && "undefined" != typeof window) return s || XMLHttpRequest;
            } }, { key: "timer", get: function t3() {
              if (!o) return i;
            } }]), t2;
          }();
        }, function(t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.MetadataService = void 0;
          var n = /* @__PURE__ */ function() {
            function t2(t3, e2) {
              for (var r2 = 0; r2 < e2.length; r2++) {
                var n2 = e2[r2];
                n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, n2.key, n2);
              }
            }
            return function(e2, r2, n2) {
              return r2 && t2(e2.prototype, r2), n2 && t2(e2, n2), e2;
            };
          }(), i = r(0), o = r(7);
          function s(t2, e2) {
            if (!(t2 instanceof e2)) throw new TypeError("Cannot call a class as a function");
          }
          var a = ".well-known/openid-configuration";
          e.MetadataService = function() {
            function t2(e2) {
              var r2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.JsonService;
              if (s(this, t2), !e2) throw i.Log.error("MetadataService: No settings passed to MetadataService"), new Error("settings");
              this._settings = e2, this._jsonService = new r2(["application/jwk-set+json"]);
            }
            return t2.prototype.resetSigningKeys = function t3() {
              this._settings = this._settings || {}, this._settings.signingKeys = void 0;
            }, t2.prototype.getMetadata = function t3() {
              var e2 = this;
              return this._settings.metadata ? (i.Log.debug("MetadataService.getMetadata: Returning metadata from settings"), Promise.resolve(this._settings.metadata)) : this.metadataUrl ? (i.Log.debug("MetadataService.getMetadata: getting metadata from", this.metadataUrl), this._jsonService.getJson(this.metadataUrl).then(function(t4) {
                i.Log.debug("MetadataService.getMetadata: json received");
                var r2 = e2._settings.metadataSeed || {};
                return e2._settings.metadata = Object.assign({}, r2, t4), e2._settings.metadata;
              })) : (i.Log.error("MetadataService.getMetadata: No authority or metadataUrl configured on settings"), Promise.reject(new Error("No authority or metadataUrl configured on settings")));
            }, t2.prototype.getIssuer = function t3() {
              return this._getMetadataProperty("issuer");
            }, t2.prototype.getAuthorizationEndpoint = function t3() {
              return this._getMetadataProperty("authorization_endpoint");
            }, t2.prototype.getUserInfoEndpoint = function t3() {
              return this._getMetadataProperty("userinfo_endpoint");
            }, t2.prototype.getTokenEndpoint = function t3() {
              var e2 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              return this._getMetadataProperty("token_endpoint", e2);
            }, t2.prototype.getCheckSessionIframe = function t3() {
              return this._getMetadataProperty("check_session_iframe", true);
            }, t2.prototype.getEndSessionEndpoint = function t3() {
              return this._getMetadataProperty("end_session_endpoint", true);
            }, t2.prototype.getRevocationEndpoint = function t3() {
              return this._getMetadataProperty("revocation_endpoint", true);
            }, t2.prototype.getKeysEndpoint = function t3() {
              return this._getMetadataProperty("jwks_uri", true);
            }, t2.prototype._getMetadataProperty = function t3(e2) {
              var r2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              return i.Log.debug("MetadataService.getMetadataProperty for: " + e2), this.getMetadata().then(function(t4) {
                if (i.Log.debug("MetadataService.getMetadataProperty: metadata recieved"), void 0 === t4[e2]) {
                  if (true === r2) return void i.Log.warn("MetadataService.getMetadataProperty: Metadata does not contain optional property " + e2);
                  throw i.Log.error("MetadataService.getMetadataProperty: Metadata does not contain property " + e2), new Error("Metadata does not contain property " + e2);
                }
                return t4[e2];
              });
            }, t2.prototype.getSigningKeys = function t3() {
              var e2 = this;
              return this._settings.signingKeys ? (i.Log.debug("MetadataService.getSigningKeys: Returning signingKeys from settings"), Promise.resolve(this._settings.signingKeys)) : this._getMetadataProperty("jwks_uri").then(function(t4) {
                return i.Log.debug("MetadataService.getSigningKeys: jwks_uri received", t4), e2._jsonService.getJson(t4).then(function(t5) {
                  if (i.Log.debug("MetadataService.getSigningKeys: key set received", t5), !t5.keys) throw i.Log.error("MetadataService.getSigningKeys: Missing keys on keyset"), new Error("Missing keys on keyset");
                  return e2._settings.signingKeys = t5.keys, e2._settings.signingKeys;
                });
              });
            }, n(t2, [{ key: "metadataUrl", get: function t3() {
              return this._metadataUrl || (this._settings.metadataUrl ? this._metadataUrl = this._settings.metadataUrl : (this._metadataUrl = this._settings.authority, this._metadataUrl && this._metadataUrl.indexOf(a) < 0 && ("/" !== this._metadataUrl[this._metadataUrl.length - 1] && (this._metadataUrl += "/"), this._metadataUrl += a))), this._metadataUrl;
            } }]), t2;
          }();
        }, function(t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.UrlUtility = void 0;
          var n = r(0), i = r(1);
          e.UrlUtility = function() {
            function t2() {
              !function e2(t3, r2) {
                if (!(t3 instanceof r2)) throw new TypeError("Cannot call a class as a function");
              }(this, t2);
            }
            return t2.addQueryParam = function t3(e2, r2, n2) {
              return e2.indexOf("?") < 0 && (e2 += "?"), "?" !== e2[e2.length - 1] && (e2 += "&"), e2 += encodeURIComponent(r2), e2 += "=", e2 += encodeURIComponent(n2);
            }, t2.parseUrlFragment = function t3(e2) {
              var r2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "#", o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.Global;
              "string" != typeof e2 && (e2 = o.location.href);
              var s = e2.lastIndexOf(r2);
              s >= 0 && (e2 = e2.substr(s + 1)), "?" === r2 && (s = e2.indexOf("#")) >= 0 && (e2 = e2.substr(0, s));
              for (var a, u = {}, c = /([^&=]+)=([^&]*)/g, h = 0; a = c.exec(e2); ) if (u[decodeURIComponent(a[1])] = decodeURIComponent(a[2].replace(/\+/g, " ")), h++ > 50) return n.Log.error("UrlUtility.parseUrlFragment: response exceeded expected number of parameters", e2), { error: "Response exceeded expected number of parameters" };
              for (var l in u) return u;
              return {};
            }, t2;
          }();
        }, function(t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.JoseUtil = void 0;
          var n = r(26), i = function o(t2) {
            return t2 && t2.__esModule ? t2 : { default: t2 };
          }(r(33));
          e.JoseUtil = (0, i.default)({ jws: n.jws, KeyUtil: n.KeyUtil, X509: n.X509, crypto: n.crypto, hextob64u: n.hextob64u, b64tohex: n.b64tohex, AllowedSigningAlgs: n.AllowedSigningAlgs });
        }, function(t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.OidcClientSettings = void 0;
          var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t2) {
            return typeof t2;
          } : function(t2) {
            return t2 && "function" == typeof Symbol && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2;
          }, i = /* @__PURE__ */ function() {
            function t2(t3, e2) {
              for (var r2 = 0; r2 < e2.length; r2++) {
                var n2 = e2[r2];
                n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, n2.key, n2);
              }
            }
            return function(e2, r2, n2) {
              return r2 && t2(e2.prototype, r2), n2 && t2(e2, n2), e2;
            };
          }(), o = r(0), s = r(23), a = r(6), u = r(24), c = r(2);
          function h(t2, e2) {
            if (!(t2 instanceof e2)) throw new TypeError("Cannot call a class as a function");
          }
          var l = ".well-known/openid-configuration", f = "id_token", g = "openid", d = "client_secret_post";
          e.OidcClientSettings = function() {
            function t2() {
              var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r2 = e2.authority, i2 = e2.metadataUrl, o2 = e2.metadata, l2 = e2.signingKeys, p = e2.metadataSeed, v = e2.client_id, y = e2.client_secret, m = e2.response_type, _ = void 0 === m ? f : m, S = e2.scope, b = void 0 === S ? g : S, w = e2.redirect_uri, F = e2.post_logout_redirect_uri, E = e2.client_authentication, x = void 0 === E ? d : E, A = e2.prompt, k = e2.display, P = e2.max_age, C = e2.ui_locales, T = e2.acr_values, R = e2.resource, I = e2.response_mode, D = e2.filterProtocolClaims, L = void 0 === D || D, N = e2.loadUserInfo, U = void 0 === N || N, B = e2.staleStateAge, O = void 0 === B ? 900 : B, j = e2.clockSkew, M = void 0 === j ? 300 : j, H = e2.clockService, V = void 0 === H ? new s.ClockService() : H, K = e2.userInfoJwtIssuer, q = void 0 === K ? "OP" : K, J = e2.mergeClaims, W = void 0 !== J && J, z = e2.stateStore, Y = void 0 === z ? new a.WebStorageStateStore() : z, G = e2.ResponseValidatorCtor, X = void 0 === G ? u.ResponseValidator : G, $ = e2.MetadataServiceCtor, Q = void 0 === $ ? c.MetadataService : $, Z = e2.extraQueryParams, tt = void 0 === Z ? {} : Z, et = e2.extraTokenParams, rt = void 0 === et ? {} : et;
              h(this, t2), this._authority = r2, this._metadataUrl = i2, this._metadata = o2, this._metadataSeed = p, this._signingKeys = l2, this._client_id = v, this._client_secret = y, this._response_type = _, this._scope = b, this._redirect_uri = w, this._post_logout_redirect_uri = F, this._client_authentication = x, this._prompt = A, this._display = k, this._max_age = P, this._ui_locales = C, this._acr_values = T, this._resource = R, this._response_mode = I, this._filterProtocolClaims = !!L, this._loadUserInfo = !!U, this._staleStateAge = O, this._clockSkew = M, this._clockService = V, this._userInfoJwtIssuer = q, this._mergeClaims = !!W, this._stateStore = Y, this._validator = new X(this), this._metadataService = new Q(this), this._extraQueryParams = "object" === (void 0 === tt ? "undefined" : n(tt)) ? tt : {}, this._extraTokenParams = "object" === (void 0 === rt ? "undefined" : n(rt)) ? rt : {};
            }
            return t2.prototype.getEpochTime = function t3() {
              return this._clockService.getEpochTime();
            }, i(t2, [{ key: "client_id", get: function t3() {
              return this._client_id;
            }, set: function t3(e2) {
              if (this._client_id) throw o.Log.error("OidcClientSettings.set_client_id: client_id has already been assigned."), new Error("client_id has already been assigned.");
              this._client_id = e2;
            } }, { key: "client_secret", get: function t3() {
              return this._client_secret;
            } }, { key: "response_type", get: function t3() {
              return this._response_type;
            } }, { key: "scope", get: function t3() {
              return this._scope;
            } }, { key: "redirect_uri", get: function t3() {
              return this._redirect_uri;
            } }, { key: "post_logout_redirect_uri", get: function t3() {
              return this._post_logout_redirect_uri;
            } }, { key: "client_authentication", get: function t3() {
              return this._client_authentication;
            } }, { key: "prompt", get: function t3() {
              return this._prompt;
            } }, { key: "display", get: function t3() {
              return this._display;
            } }, { key: "max_age", get: function t3() {
              return this._max_age;
            } }, { key: "ui_locales", get: function t3() {
              return this._ui_locales;
            } }, { key: "acr_values", get: function t3() {
              return this._acr_values;
            } }, { key: "resource", get: function t3() {
              return this._resource;
            } }, { key: "response_mode", get: function t3() {
              return this._response_mode;
            } }, { key: "authority", get: function t3() {
              return this._authority;
            }, set: function t3(e2) {
              if (this._authority) throw o.Log.error("OidcClientSettings.set_authority: authority has already been assigned."), new Error("authority has already been assigned.");
              this._authority = e2;
            } }, { key: "metadataUrl", get: function t3() {
              return this._metadataUrl || (this._metadataUrl = this.authority, this._metadataUrl && this._metadataUrl.indexOf(l) < 0 && ("/" !== this._metadataUrl[this._metadataUrl.length - 1] && (this._metadataUrl += "/"), this._metadataUrl += l)), this._metadataUrl;
            } }, { key: "metadata", get: function t3() {
              return this._metadata;
            }, set: function t3(e2) {
              this._metadata = e2;
            } }, { key: "metadataSeed", get: function t3() {
              return this._metadataSeed;
            }, set: function t3(e2) {
              this._metadataSeed = e2;
            } }, { key: "signingKeys", get: function t3() {
              return this._signingKeys;
            }, set: function t3(e2) {
              this._signingKeys = e2;
            } }, { key: "filterProtocolClaims", get: function t3() {
              return this._filterProtocolClaims;
            } }, { key: "loadUserInfo", get: function t3() {
              return this._loadUserInfo;
            } }, { key: "staleStateAge", get: function t3() {
              return this._staleStateAge;
            } }, { key: "clockSkew", get: function t3() {
              return this._clockSkew;
            } }, { key: "userInfoJwtIssuer", get: function t3() {
              return this._userInfoJwtIssuer;
            } }, { key: "mergeClaims", get: function t3() {
              return this._mergeClaims;
            } }, { key: "stateStore", get: function t3() {
              return this._stateStore;
            } }, { key: "validator", get: function t3() {
              return this._validator;
            } }, { key: "metadataService", get: function t3() {
              return this._metadataService;
            } }, { key: "extraQueryParams", get: function t3() {
              return this._extraQueryParams;
            }, set: function t3(e2) {
              "object" === (void 0 === e2 ? "undefined" : n(e2)) ? this._extraQueryParams = e2 : this._extraQueryParams = {};
            } }, { key: "extraTokenParams", get: function t3() {
              return this._extraTokenParams;
            }, set: function t3(e2) {
              "object" === (void 0 === e2 ? "undefined" : n(e2)) ? this._extraTokenParams = e2 : this._extraTokenParams = {};
            } }]), t2;
          }();
        }, function(t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.WebStorageStateStore = void 0;
          var n = r(0), i = r(1);
          function o(t2, e2) {
            if (!(t2 instanceof e2)) throw new TypeError("Cannot call a class as a function");
          }
          e.WebStorageStateStore = function() {
            function t2() {
              var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r2 = e2.prefix, n2 = void 0 === r2 ? "oidc." : r2, s = e2.store, a = void 0 === s ? i.Global.localStorage : s;
              o(this, t2), this._store = a, this._prefix = n2;
            }
            return t2.prototype.set = function t3(e2, r2) {
              return n.Log.debug("WebStorageStateStore.set", e2), e2 = this._prefix + e2, this._store.setItem(e2, r2), Promise.resolve();
            }, t2.prototype.get = function t3(e2) {
              n.Log.debug("WebStorageStateStore.get", e2), e2 = this._prefix + e2;
              var r2 = this._store.getItem(e2);
              return Promise.resolve(r2);
            }, t2.prototype.remove = function t3(e2) {
              n.Log.debug("WebStorageStateStore.remove", e2), e2 = this._prefix + e2;
              var r2 = this._store.getItem(e2);
              return this._store.removeItem(e2), Promise.resolve(r2);
            }, t2.prototype.getAllKeys = function t3() {
              n.Log.debug("WebStorageStateStore.getAllKeys");
              for (var e2 = [], r2 = 0; r2 < this._store.length; r2++) {
                var i2 = this._store.key(r2);
                0 === i2.indexOf(this._prefix) && e2.push(i2.substr(this._prefix.length));
              }
              return Promise.resolve(e2);
            }, t2;
          }();
        }, function(t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.JsonService = void 0;
          var n = r(0), i = r(1);
          function o(t2, e2) {
            if (!(t2 instanceof e2)) throw new TypeError("Cannot call a class as a function");
          }
          e.JsonService = function() {
            function t2() {
              var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, r2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Global.XMLHttpRequest, n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              o(this, t2), e2 && Array.isArray(e2) ? this._contentTypes = e2.slice() : this._contentTypes = [], this._contentTypes.push("application/json"), n2 && this._contentTypes.push("application/jwt"), this._XMLHttpRequest = r2, this._jwtHandler = n2;
            }
            return t2.prototype.getJson = function t3(e2, r2) {
              var i2 = this;
              if (!e2) throw n.Log.error("JsonService.getJson: No url passed"), new Error("url");
              return n.Log.debug("JsonService.getJson, url: ", e2), new Promise(function(t4, o2) {
                var s = new i2._XMLHttpRequest();
                s.open("GET", e2);
                var a = i2._contentTypes, u = i2._jwtHandler;
                s.onload = function() {
                  if (n.Log.debug("JsonService.getJson: HTTP response received, status", s.status), 200 === s.status) {
                    var r3 = s.getResponseHeader("Content-Type");
                    if (r3) {
                      var i3 = a.find(function(t5) {
                        if (r3.startsWith(t5)) return true;
                      });
                      if ("application/jwt" == i3) return void u(s).then(t4, o2);
                      if (i3) try {
                        return void t4(JSON.parse(s.responseText));
                      } catch (t5) {
                        return n.Log.error("JsonService.getJson: Error parsing JSON response", t5.message), void o2(t5);
                      }
                    }
                    o2(Error("Invalid response Content-Type: " + r3 + ", from URL: " + e2));
                  } else o2(Error(s.statusText + " (" + s.status + ")"));
                }, s.onerror = function() {
                  n.Log.error("JsonService.getJson: network error"), o2(Error("Network Error"));
                }, r2 && (n.Log.debug("JsonService.getJson: token passed, setting Authorization header"), s.setRequestHeader("Authorization", "Bearer " + r2)), s.send();
              });
            }, t2.prototype.postForm = function t3(e2, r2, i2) {
              var o2 = this;
              if (!e2) throw n.Log.error("JsonService.postForm: No url passed"), new Error("url");
              return n.Log.debug("JsonService.postForm, url: ", e2), new Promise(function(t4, s) {
                var a = new o2._XMLHttpRequest();
                a.open("POST", e2);
                var u = o2._contentTypes;
                a.onload = function() {
                  if (n.Log.debug("JsonService.postForm: HTTP response received, status", a.status), 200 !== a.status) {
                    if (400 === a.status) {
                      if (i3 = a.getResponseHeader("Content-Type")) {
                        if (u.find(function(t5) {
                          if (i3.startsWith(t5)) return true;
                        })) try {
                          var r3 = JSON.parse(a.responseText);
                          if (r3 && r3.error) return n.Log.error("JsonService.postForm: Error from server: ", r3.error), void s(new Error(r3.error));
                        } catch (t5) {
                          return n.Log.error("JsonService.postForm: Error parsing JSON response", t5.message), void s(t5);
                        }
                      }
                    }
                    s(Error(a.statusText + " (" + a.status + ")"));
                  } else {
                    var i3;
                    if ((i3 = a.getResponseHeader("Content-Type")) && u.find(function(t5) {
                      if (i3.startsWith(t5)) return true;
                    })) try {
                      return void t4(JSON.parse(a.responseText));
                    } catch (t5) {
                      return n.Log.error("JsonService.postForm: Error parsing JSON response", t5.message), void s(t5);
                    }
                    s(Error("Invalid response Content-Type: " + i3 + ", from URL: " + e2));
                  }
                }, a.onerror = function() {
                  n.Log.error("JsonService.postForm: network error"), s(Error("Network Error"));
                };
                var c = "";
                for (var h in r2) {
                  var l = r2[h];
                  l && (c.length > 0 && (c += "&"), c += encodeURIComponent(h), c += "=", c += encodeURIComponent(l));
                }
                a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), void 0 !== i2 && a.setRequestHeader("Authorization", "Basic " + btoa(i2)), a.send(c);
              });
            }, t2;
          }();
        }, function(t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.SigninRequest = void 0;
          var n = r(0), i = r(3), o = r(13);
          e.SigninRequest = function() {
            function t2(e2) {
              var r2 = e2.url, s = e2.client_id, a = e2.redirect_uri, u = e2.response_type, c = e2.scope, h = e2.authority, l = e2.data, f = e2.prompt, g = e2.display, d = e2.max_age, p = e2.ui_locales, v = e2.id_token_hint, y = e2.login_hint, m = e2.acr_values, _ = e2.resource, S = e2.response_mode, b = e2.request, w = e2.request_uri, F = e2.extraQueryParams, E = e2.request_type, x = e2.client_secret, A = e2.extraTokenParams, k = e2.skipUserInfo;
              if (function P(t3, e3) {
                if (!(t3 instanceof e3)) throw new TypeError("Cannot call a class as a function");
              }(this, t2), !r2) throw n.Log.error("SigninRequest.ctor: No url passed"), new Error("url");
              if (!s) throw n.Log.error("SigninRequest.ctor: No client_id passed"), new Error("client_id");
              if (!a) throw n.Log.error("SigninRequest.ctor: No redirect_uri passed"), new Error("redirect_uri");
              if (!u) throw n.Log.error("SigninRequest.ctor: No response_type passed"), new Error("response_type");
              if (!c) throw n.Log.error("SigninRequest.ctor: No scope passed"), new Error("scope");
              if (!h) throw n.Log.error("SigninRequest.ctor: No authority passed"), new Error("authority");
              var C = t2.isOidc(u), T = t2.isCode(u);
              S || (S = t2.isCode(u) ? "query" : null), this.state = new o.SigninState({ nonce: C, data: l, client_id: s, authority: h, redirect_uri: a, code_verifier: T, request_type: E, response_mode: S, client_secret: x, scope: c, extraTokenParams: A, skipUserInfo: k }), r2 = i.UrlUtility.addQueryParam(r2, "client_id", s), r2 = i.UrlUtility.addQueryParam(r2, "redirect_uri", a), r2 = i.UrlUtility.addQueryParam(r2, "response_type", u), r2 = i.UrlUtility.addQueryParam(r2, "scope", c), r2 = i.UrlUtility.addQueryParam(r2, "state", this.state.id), C && (r2 = i.UrlUtility.addQueryParam(r2, "nonce", this.state.nonce)), T && (r2 = i.UrlUtility.addQueryParam(r2, "code_challenge", this.state.code_challenge), r2 = i.UrlUtility.addQueryParam(r2, "code_challenge_method", "S256"));
              var R = { prompt: f, display: g, max_age: d, ui_locales: p, id_token_hint: v, login_hint: y, acr_values: m, resource: _, request: b, request_uri: w, response_mode: S };
              for (var I in R) R[I] && (r2 = i.UrlUtility.addQueryParam(r2, I, R[I]));
              for (var D in F) r2 = i.UrlUtility.addQueryParam(r2, D, F[D]);
              this.url = r2;
            }
            return t2.isOidc = function t3(e2) {
              return !!e2.split(/\s+/g).filter(function(t4) {
                return "id_token" === t4;
              })[0];
            }, t2.isOAuth = function t3(e2) {
              return !!e2.split(/\s+/g).filter(function(t4) {
                return "token" === t4;
              })[0];
            }, t2.isCode = function t3(e2) {
              return !!e2.split(/\s+/g).filter(function(t4) {
                return "code" === t4;
              })[0];
            }, t2;
          }();
        }, function(t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.State = void 0;
          var n = /* @__PURE__ */ function() {
            function t2(t3, e2) {
              for (var r2 = 0; r2 < e2.length; r2++) {
                var n2 = e2[r2];
                n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, n2.key, n2);
              }
            }
            return function(e2, r2, n2) {
              return r2 && t2(e2.prototype, r2), n2 && t2(e2, n2), e2;
            };
          }(), i = r(0), o = function s(t2) {
            return t2 && t2.__esModule ? t2 : { default: t2 };
          }(r(14));
          function a(t2, e2) {
            if (!(t2 instanceof e2)) throw new TypeError("Cannot call a class as a function");
          }
          e.State = function() {
            function t2() {
              var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r2 = e2.id, n2 = e2.data, i2 = e2.created, s = e2.request_type;
              a(this, t2), this._id = r2 || (0, o.default)(), this._data = n2, this._created = "number" == typeof i2 && i2 > 0 ? i2 : parseInt(Date.now() / 1e3), this._request_type = s;
            }
            return t2.prototype.toStorageString = function t3() {
              return i.Log.debug("State.toStorageString"), JSON.stringify({ id: this.id, data: this.data, created: this.created, request_type: this.request_type });
            }, t2.fromStorageString = function e2(r2) {
              return i.Log.debug("State.fromStorageString"), new t2(JSON.parse(r2));
            }, t2.clearStaleState = function e2(r2, n2) {
              var o2 = Date.now() / 1e3 - n2;
              return r2.getAllKeys().then(function(e3) {
                i.Log.debug("State.clearStaleState: got keys", e3);
                for (var n3 = [], s = function s2(a3) {
                  var c = e3[a3];
                  u = r2.get(c).then(function(e4) {
                    var n4 = false;
                    if (e4) try {
                      var s3 = t2.fromStorageString(e4);
                      i.Log.debug("State.clearStaleState: got item from key: ", c, s3.created), s3.created <= o2 && (n4 = true);
                    } catch (t3) {
                      i.Log.error("State.clearStaleState: Error parsing state for key", c, t3.message), n4 = true;
                    }
                    else i.Log.debug("State.clearStaleState: no item in storage for key: ", c), n4 = true;
                    if (n4) return i.Log.debug("State.clearStaleState: removed item for key: ", c), r2.remove(c);
                  }), n3.push(u);
                }, a2 = 0; a2 < e3.length; a2++) {
                  var u;
                  s(a2);
                }
                return i.Log.debug("State.clearStaleState: waiting on promise count:", n3.length), Promise.all(n3);
              });
            }, n(t2, [{ key: "id", get: function t3() {
              return this._id;
            } }, { key: "data", get: function t3() {
              return this._data;
            } }, { key: "created", get: function t3() {
              return this._created;
            } }, { key: "request_type", get: function t3() {
              return this._request_type;
            } }]), t2;
          }();
        }, function(t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.OidcClient = void 0;
          var n = /* @__PURE__ */ function() {
            function t2(t3, e2) {
              for (var r2 = 0; r2 < e2.length; r2++) {
                var n2 = e2[r2];
                n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, n2.key, n2);
              }
            }
            return function(e2, r2, n2) {
              return r2 && t2(e2.prototype, r2), n2 && t2(e2, n2), e2;
            };
          }(), i = r(0), o = r(5), s = r(12), a = r(8), u = r(34), c = r(35), h = r(36), l = r(13), f = r(9);
          function g(t2, e2) {
            if (!(t2 instanceof e2)) throw new TypeError("Cannot call a class as a function");
          }
          e.OidcClient = function() {
            function t2() {
              var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              g(this, t2), e2 instanceof o.OidcClientSettings ? this._settings = e2 : this._settings = new o.OidcClientSettings(e2);
            }
            return t2.prototype.createSigninRequest = function t3() {
              var e2 = this, r2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n2 = r2.response_type, o2 = r2.scope, s2 = r2.redirect_uri, u2 = r2.data, c2 = r2.state, h2 = r2.prompt, l2 = r2.display, f2 = r2.max_age, g2 = r2.ui_locales, d = r2.id_token_hint, p = r2.login_hint, v = r2.acr_values, y = r2.resource, m = r2.request, _ = r2.request_uri, S = r2.response_mode, b = r2.extraQueryParams, w = r2.extraTokenParams, F = r2.request_type, E = r2.skipUserInfo, x = arguments[1];
              i.Log.debug("OidcClient.createSigninRequest");
              var A = this._settings.client_id;
              n2 = n2 || this._settings.response_type, o2 = o2 || this._settings.scope, s2 = s2 || this._settings.redirect_uri, h2 = h2 || this._settings.prompt, l2 = l2 || this._settings.display, f2 = f2 || this._settings.max_age, g2 = g2 || this._settings.ui_locales, v = v || this._settings.acr_values, y = y || this._settings.resource, S = S || this._settings.response_mode, b = b || this._settings.extraQueryParams, w = w || this._settings.extraTokenParams;
              var k = this._settings.authority;
              return a.SigninRequest.isCode(n2) && "code" !== n2 ? Promise.reject(new Error("OpenID Connect hybrid flow is not supported")) : this._metadataService.getAuthorizationEndpoint().then(function(t4) {
                i.Log.debug("OidcClient.createSigninRequest: Received authorization endpoint", t4);
                var r3 = new a.SigninRequest({ url: t4, client_id: A, redirect_uri: s2, response_type: n2, scope: o2, data: u2 || c2, authority: k, prompt: h2, display: l2, max_age: f2, ui_locales: g2, id_token_hint: d, login_hint: p, acr_values: v, resource: y, request: m, request_uri: _, extraQueryParams: b, extraTokenParams: w, request_type: F, response_mode: S, client_secret: e2._settings.client_secret, skipUserInfo: E }), P = r3.state;
                return (x = x || e2._stateStore).set(P.id, P.toStorageString()).then(function() {
                  return r3;
                });
              });
            }, t2.prototype.readSigninResponseState = function t3(e2, r2) {
              var n2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              i.Log.debug("OidcClient.readSigninResponseState");
              var o2 = "query" === this._settings.response_mode || !this._settings.response_mode && a.SigninRequest.isCode(this._settings.response_type), s2 = o2 ? "?" : "#", c2 = new u.SigninResponse(e2, s2);
              if (!c2.state) return i.Log.error("OidcClient.readSigninResponseState: No state in response"), Promise.reject(new Error("No state in response"));
              r2 = r2 || this._stateStore;
              var h2 = n2 ? r2.remove.bind(r2) : r2.get.bind(r2);
              return h2(c2.state).then(function(t4) {
                if (!t4) throw i.Log.error("OidcClient.readSigninResponseState: No matching state found in storage"), new Error("No matching state found in storage");
                return { state: l.SigninState.fromStorageString(t4), response: c2 };
              });
            }, t2.prototype.processSigninResponse = function t3(e2, r2) {
              var n2 = this;
              return i.Log.debug("OidcClient.processSigninResponse"), this.readSigninResponseState(e2, r2, true).then(function(t4) {
                var e3 = t4.state, r3 = t4.response;
                return i.Log.debug("OidcClient.processSigninResponse: Received state from storage; validating response"), n2._validator.validateSigninResponse(e3, r3);
              });
            }, t2.prototype.createSignoutRequest = function t3() {
              var e2 = this, r2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n2 = r2.id_token_hint, o2 = r2.data, s2 = r2.state, a2 = r2.post_logout_redirect_uri, u2 = r2.extraQueryParams, h2 = r2.request_type, l2 = arguments[1];
              return i.Log.debug("OidcClient.createSignoutRequest"), a2 = a2 || this._settings.post_logout_redirect_uri, u2 = u2 || this._settings.extraQueryParams, this._metadataService.getEndSessionEndpoint().then(function(t4) {
                if (!t4) throw i.Log.error("OidcClient.createSignoutRequest: No end session endpoint url returned"), new Error("no end session endpoint");
                i.Log.debug("OidcClient.createSignoutRequest: Received end session endpoint", t4);
                var r3 = new c.SignoutRequest({ url: t4, id_token_hint: n2, post_logout_redirect_uri: a2, data: o2 || s2, extraQueryParams: u2, request_type: h2 }), f2 = r3.state;
                return f2 && (i.Log.debug("OidcClient.createSignoutRequest: Signout request has state to persist"), (l2 = l2 || e2._stateStore).set(f2.id, f2.toStorageString())), r3;
              });
            }, t2.prototype.readSignoutResponseState = function t3(e2, r2) {
              var n2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              i.Log.debug("OidcClient.readSignoutResponseState");
              var o2 = new h.SignoutResponse(e2);
              if (!o2.state) return i.Log.debug("OidcClient.readSignoutResponseState: No state in response"), o2.error ? (i.Log.warn("OidcClient.readSignoutResponseState: Response was error: ", o2.error), Promise.reject(new s.ErrorResponse(o2))) : Promise.resolve({ state: void 0, response: o2 });
              var a2 = o2.state;
              r2 = r2 || this._stateStore;
              var u2 = n2 ? r2.remove.bind(r2) : r2.get.bind(r2);
              return u2(a2).then(function(t4) {
                if (!t4) throw i.Log.error("OidcClient.readSignoutResponseState: No matching state found in storage"), new Error("No matching state found in storage");
                return { state: f.State.fromStorageString(t4), response: o2 };
              });
            }, t2.prototype.processSignoutResponse = function t3(e2, r2) {
              var n2 = this;
              return i.Log.debug("OidcClient.processSignoutResponse"), this.readSignoutResponseState(e2, r2, true).then(function(t4) {
                var e3 = t4.state, r3 = t4.response;
                return e3 ? (i.Log.debug("OidcClient.processSignoutResponse: Received state from storage; validating response"), n2._validator.validateSignoutResponse(e3, r3)) : (i.Log.debug("OidcClient.processSignoutResponse: No state from storage; skipping validating response"), r3);
              });
            }, t2.prototype.clearStaleState = function t3(e2) {
              return i.Log.debug("OidcClient.clearStaleState"), e2 = e2 || this._stateStore, f.State.clearStaleState(e2, this.settings.staleStateAge);
            }, n(t2, [{ key: "_stateStore", get: function t3() {
              return this.settings.stateStore;
            } }, { key: "_validator", get: function t3() {
              return this.settings.validator;
            } }, { key: "_metadataService", get: function t3() {
              return this.settings.metadataService;
            } }, { key: "settings", get: function t3() {
              return this._settings;
            } }, { key: "metadataService", get: function t3() {
              return this._metadataService;
            } }]), t2;
          }();
        }, function(t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.TokenClient = void 0;
          var n = r(7), i = r(2), o = r(0);
          function s(t2, e2) {
            if (!(t2 instanceof e2)) throw new TypeError("Cannot call a class as a function");
          }
          e.TokenClient = function() {
            function t2(e2) {
              var r2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.JsonService, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.MetadataService;
              if (s(this, t2), !e2) throw o.Log.error("TokenClient.ctor: No settings passed"), new Error("settings");
              this._settings = e2, this._jsonService = new r2(), this._metadataService = new a(this._settings);
            }
            return t2.prototype.exchangeCode = function t3() {
              var e2 = this, r2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              (r2 = Object.assign({}, r2)).grant_type = r2.grant_type || "authorization_code", r2.client_id = r2.client_id || this._settings.client_id, r2.client_secret = r2.client_secret || this._settings.client_secret, r2.redirect_uri = r2.redirect_uri || this._settings.redirect_uri;
              var n2 = void 0, i2 = r2._client_authentication || this._settings._client_authentication;
              return delete r2._client_authentication, r2.code ? r2.redirect_uri ? r2.code_verifier ? r2.client_id ? r2.client_secret || "client_secret_basic" != i2 ? ("client_secret_basic" == i2 && (n2 = r2.client_id + ":" + r2.client_secret, delete r2.client_id, delete r2.client_secret), this._metadataService.getTokenEndpoint(false).then(function(t4) {
                return o.Log.debug("TokenClient.exchangeCode: Received token endpoint"), e2._jsonService.postForm(t4, r2, n2).then(function(t5) {
                  return o.Log.debug("TokenClient.exchangeCode: response received"), t5;
                });
              })) : (o.Log.error("TokenClient.exchangeCode: No client_secret passed"), Promise.reject(new Error("A client_secret is required"))) : (o.Log.error("TokenClient.exchangeCode: No client_id passed"), Promise.reject(new Error("A client_id is required"))) : (o.Log.error("TokenClient.exchangeCode: No code_verifier passed"), Promise.reject(new Error("A code_verifier is required"))) : (o.Log.error("TokenClient.exchangeCode: No redirect_uri passed"), Promise.reject(new Error("A redirect_uri is required"))) : (o.Log.error("TokenClient.exchangeCode: No code passed"), Promise.reject(new Error("A code is required")));
            }, t2.prototype.exchangeRefreshToken = function t3() {
              var e2 = this, r2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              (r2 = Object.assign({}, r2)).grant_type = r2.grant_type || "refresh_token", r2.client_id = r2.client_id || this._settings.client_id, r2.client_secret = r2.client_secret || this._settings.client_secret;
              var n2 = void 0, i2 = r2._client_authentication || this._settings._client_authentication;
              return delete r2._client_authentication, r2.refresh_token ? r2.client_id ? ("client_secret_basic" == i2 && (n2 = r2.client_id + ":" + r2.client_secret, delete r2.client_id, delete r2.client_secret), this._metadataService.getTokenEndpoint(false).then(function(t4) {
                return o.Log.debug("TokenClient.exchangeRefreshToken: Received token endpoint"), e2._jsonService.postForm(t4, r2, n2).then(function(t5) {
                  return o.Log.debug("TokenClient.exchangeRefreshToken: response received"), t5;
                });
              })) : (o.Log.error("TokenClient.exchangeRefreshToken: No client_id passed"), Promise.reject(new Error("A client_id is required"))) : (o.Log.error("TokenClient.exchangeRefreshToken: No refresh_token passed"), Promise.reject(new Error("A refresh_token is required")));
            }, t2;
          }();
        }, function(t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.ErrorResponse = void 0;
          var n = r(0);
          function i(t2, e2) {
            if (!(t2 instanceof e2)) throw new TypeError("Cannot call a class as a function");
          }
          function o(t2, e2) {
            if (!t2) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e2 || "object" != typeof e2 && "function" != typeof e2 ? t2 : e2;
          }
          e.ErrorResponse = function(t2) {
            function e2() {
              var r2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, s = r2.error, a = r2.error_description, u = r2.error_uri, c = r2.state, h = r2.session_state;
              if (i(this, e2), !s) throw n.Log.error("No error passed to ErrorResponse"), new Error("error");
              var l = o(this, t2.call(this, a || s));
              return l.name = "ErrorResponse", l.error = s, l.error_description = a, l.error_uri = u, l.state = c, l.session_state = h, l;
            }
            return function r2(t3, e3) {
              if ("function" != typeof e3 && null !== e3) throw new TypeError("Super expression must either be null or a function, not " + typeof e3);
              t3.prototype = Object.create(e3 && e3.prototype, { constructor: { value: t3, enumerable: false, writable: true, configurable: true } }), e3 && (Object.setPrototypeOf ? Object.setPrototypeOf(t3, e3) : t3.__proto__ = e3);
            }(e2, t2), e2;
          }(Error);
        }, function(t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.SigninState = void 0;
          var n = /* @__PURE__ */ function() {
            function t2(t3, e2) {
              for (var r2 = 0; r2 < e2.length; r2++) {
                var n2 = e2[r2];
                n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, n2.key, n2);
              }
            }
            return function(e2, r2, n2) {
              return r2 && t2(e2.prototype, r2), n2 && t2(e2, n2), e2;
            };
          }(), i = r(0), o = r(9), s = r(4), a = function u(t2) {
            return t2 && t2.__esModule ? t2 : { default: t2 };
          }(r(14));
          function c(t2, e2) {
            if (!(t2 instanceof e2)) throw new TypeError("Cannot call a class as a function");
          }
          function h(t2, e2) {
            if (!t2) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e2 || "object" != typeof e2 && "function" != typeof e2 ? t2 : e2;
          }
          e.SigninState = function(t2) {
            function e2() {
              var r2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n2 = r2.nonce, i2 = r2.authority, o2 = r2.client_id, u = r2.redirect_uri, l = r2.code_verifier, f = r2.response_mode, g = r2.client_secret, d = r2.scope, p = r2.extraTokenParams, v = r2.skipUserInfo;
              c(this, e2);
              var y = h(this, t2.call(this, arguments[0]));
              if (true === n2 ? y._nonce = (0, a.default)() : n2 && (y._nonce = n2), true === l ? y._code_verifier = (0, a.default)() + (0, a.default)() + (0, a.default)() : l && (y._code_verifier = l), y.code_verifier) {
                var m = s.JoseUtil.hashString(y.code_verifier, "SHA256");
                y._code_challenge = s.JoseUtil.hexToBase64Url(m);
              }
              return y._redirect_uri = u, y._authority = i2, y._client_id = o2, y._response_mode = f, y._client_secret = g, y._scope = d, y._extraTokenParams = p, y._skipUserInfo = v, y;
            }
            return function r2(t3, e3) {
              if ("function" != typeof e3 && null !== e3) throw new TypeError("Super expression must either be null or a function, not " + typeof e3);
              t3.prototype = Object.create(e3 && e3.prototype, { constructor: { value: t3, enumerable: false, writable: true, configurable: true } }), e3 && (Object.setPrototypeOf ? Object.setPrototypeOf(t3, e3) : t3.__proto__ = e3);
            }(e2, t2), e2.prototype.toStorageString = function t3() {
              return i.Log.debug("SigninState.toStorageString"), JSON.stringify({ id: this.id, data: this.data, created: this.created, request_type: this.request_type, nonce: this.nonce, code_verifier: this.code_verifier, redirect_uri: this.redirect_uri, authority: this.authority, client_id: this.client_id, response_mode: this.response_mode, client_secret: this.client_secret, scope: this.scope, extraTokenParams: this.extraTokenParams, skipUserInfo: this.skipUserInfo });
            }, e2.fromStorageString = function t3(r2) {
              return i.Log.debug("SigninState.fromStorageString"), new e2(JSON.parse(r2));
            }, n(e2, [{ key: "nonce", get: function t3() {
              return this._nonce;
            } }, { key: "authority", get: function t3() {
              return this._authority;
            } }, { key: "client_id", get: function t3() {
              return this._client_id;
            } }, { key: "redirect_uri", get: function t3() {
              return this._redirect_uri;
            } }, { key: "code_verifier", get: function t3() {
              return this._code_verifier;
            } }, { key: "code_challenge", get: function t3() {
              return this._code_challenge;
            } }, { key: "response_mode", get: function t3() {
              return this._response_mode;
            } }, { key: "client_secret", get: function t3() {
              return this._client_secret;
            } }, { key: "scope", get: function t3() {
              return this._scope;
            } }, { key: "extraTokenParams", get: function t3() {
              return this._extraTokenParams;
            } }, { key: "skipUserInfo", get: function t3() {
              return this._skipUserInfo;
            } }]), e2;
          }(o.State);
        }, function(t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.default = function n() {
            return ("undefined" != i && null !== i && void 0 !== i.getRandomValues ? o : s)().replace(/-/g, "");
          };
          var i = "undefined" != typeof window ? window.crypto || window.msCrypto : null;
          function o() {
            return ("10000000-1000-4000-8000" + -1e11).replace(/[018]/g, function(t2) {
              return (t2 ^ i.getRandomValues(new Uint8Array(1))[0] & 15 >> t2 / 4).toString(16);
            });
          }
          function s() {
            return ("10000000-1000-4000-8000" + -1e11).replace(/[018]/g, function(t2) {
              return (t2 ^ 16 * Math.random() >> t2 / 4).toString(16);
            });
          }
          t.exports = e.default;
        }, function(t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.User = void 0;
          var n = /* @__PURE__ */ function() {
            function t2(t3, e2) {
              for (var r2 = 0; r2 < e2.length; r2++) {
                var n2 = e2[r2];
                n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, n2.key, n2);
              }
            }
            return function(e2, r2, n2) {
              return r2 && t2(e2.prototype, r2), n2 && t2(e2, n2), e2;
            };
          }(), i = r(0);
          e.User = function() {
            function t2(e2) {
              var r2 = e2.id_token, n2 = e2.session_state, i2 = e2.access_token, o = e2.refresh_token, s = e2.token_type, a = e2.scope, u = e2.profile, c = e2.expires_at, h = e2.state;
              !function l(t3, e3) {
                if (!(t3 instanceof e3)) throw new TypeError("Cannot call a class as a function");
              }(this, t2), this.id_token = r2, this.session_state = n2, this.access_token = i2, this.refresh_token = o, this.token_type = s, this.scope = a, this.profile = u, this.expires_at = c, this.state = h;
            }
            return t2.prototype.toStorageString = function t3() {
              return i.Log.debug("User.toStorageString"), JSON.stringify({ id_token: this.id_token, session_state: this.session_state, access_token: this.access_token, refresh_token: this.refresh_token, token_type: this.token_type, scope: this.scope, profile: this.profile, expires_at: this.expires_at });
            }, t2.fromStorageString = function e2(r2) {
              return i.Log.debug("User.fromStorageString"), new t2(JSON.parse(r2));
            }, n(t2, [{ key: "expires_in", get: function t3() {
              if (this.expires_at) {
                var e2 = parseInt(Date.now() / 1e3);
                return this.expires_at - e2;
              }
            }, set: function t3(e2) {
              var r2 = parseInt(e2);
              if ("number" == typeof r2 && r2 > 0) {
                var n2 = parseInt(Date.now() / 1e3);
                this.expires_at = n2 + r2;
              }
            } }, { key: "expired", get: function t3() {
              var e2 = this.expires_in;
              if (void 0 !== e2) return e2 <= 0;
            } }, { key: "scopes", get: function t3() {
              return (this.scope || "").split(" ");
            } }]), t2;
          }();
        }, function(t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.AccessTokenEvents = void 0;
          var n = r(0), i = r(46);
          function o(t2, e2) {
            if (!(t2 instanceof e2)) throw new TypeError("Cannot call a class as a function");
          }
          e.AccessTokenEvents = function() {
            function t2() {
              var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r2 = e2.accessTokenExpiringNotificationTime, n2 = void 0 === r2 ? 60 : r2, s = e2.accessTokenExpiringTimer, a = void 0 === s ? new i.Timer("Access token expiring") : s, u = e2.accessTokenExpiredTimer, c = void 0 === u ? new i.Timer("Access token expired") : u;
              o(this, t2), this._accessTokenExpiringNotificationTime = n2, this._accessTokenExpiring = a, this._accessTokenExpired = c;
            }
            return t2.prototype.load = function t3(e2) {
              if (e2.access_token && void 0 !== e2.expires_in) {
                var r2 = e2.expires_in;
                if (n.Log.debug("AccessTokenEvents.load: access token present, remaining duration:", r2), r2 > 0) {
                  var i2 = r2 - this._accessTokenExpiringNotificationTime;
                  i2 <= 0 && (i2 = 1), n.Log.debug("AccessTokenEvents.load: registering expiring timer in:", i2), this._accessTokenExpiring.init(i2);
                } else n.Log.debug("AccessTokenEvents.load: canceling existing expiring timer becase we're past expiration."), this._accessTokenExpiring.cancel();
                var o2 = r2 + 1;
                n.Log.debug("AccessTokenEvents.load: registering expired timer in:", o2), this._accessTokenExpired.init(o2);
              } else this._accessTokenExpiring.cancel(), this._accessTokenExpired.cancel();
            }, t2.prototype.unload = function t3() {
              n.Log.debug("AccessTokenEvents.unload: canceling existing access token timers"), this._accessTokenExpiring.cancel(), this._accessTokenExpired.cancel();
            }, t2.prototype.addAccessTokenExpiring = function t3(e2) {
              this._accessTokenExpiring.addHandler(e2);
            }, t2.prototype.removeAccessTokenExpiring = function t3(e2) {
              this._accessTokenExpiring.removeHandler(e2);
            }, t2.prototype.addAccessTokenExpired = function t3(e2) {
              this._accessTokenExpired.addHandler(e2);
            }, t2.prototype.removeAccessTokenExpired = function t3(e2) {
              this._accessTokenExpired.removeHandler(e2);
            }, t2;
          }();
        }, function(t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.Event = void 0;
          var n = r(0);
          e.Event = function() {
            function t2(e2) {
              !function r2(t3, e3) {
                if (!(t3 instanceof e3)) throw new TypeError("Cannot call a class as a function");
              }(this, t2), this._name = e2, this._callbacks = [];
            }
            return t2.prototype.addHandler = function t3(e2) {
              this._callbacks.push(e2);
            }, t2.prototype.removeHandler = function t3(e2) {
              var r2 = this._callbacks.findIndex(function(t4) {
                return t4 === e2;
              });
              r2 >= 0 && this._callbacks.splice(r2, 1);
            }, t2.prototype.raise = function t3() {
              n.Log.debug("Event: Raising event: " + this._name);
              for (var e2 = 0; e2 < this._callbacks.length; e2++) {
                var r2;
                (r2 = this._callbacks)[e2].apply(r2, arguments);
              }
            }, t2;
          }();
        }, function(t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.SessionMonitor = void 0;
          var n = /* @__PURE__ */ function() {
            function t2(t3, e2) {
              for (var r2 = 0; r2 < e2.length; r2++) {
                var n2 = e2[r2];
                n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, n2.key, n2);
              }
            }
            return function(e2, r2, n2) {
              return r2 && t2(e2.prototype, r2), n2 && t2(e2, n2), e2;
            };
          }(), i = r(0), o = r(19), s = r(1);
          function a(t2, e2) {
            if (!(t2 instanceof e2)) throw new TypeError("Cannot call a class as a function");
          }
          e.SessionMonitor = function() {
            function t2(e2) {
              var r2 = this, n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.CheckSessionIFrame, u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.Global.timer;
              if (a(this, t2), !e2) throw i.Log.error("SessionMonitor.ctor: No user manager passed to SessionMonitor"), new Error("userManager");
              this._userManager = e2, this._CheckSessionIFrameCtor = n2, this._timer = u, this._userManager.events.addUserLoaded(this._start.bind(this)), this._userManager.events.addUserUnloaded(this._stop.bind(this)), Promise.resolve(this._userManager.getUser().then(function(t3) {
                t3 ? r2._start(t3) : r2._settings.monitorAnonymousSession && r2._userManager.querySessionStatus().then(function(t4) {
                  var e3 = { session_state: t4.session_state };
                  t4.sub && t4.sid && (e3.profile = { sub: t4.sub, sid: t4.sid }), r2._start(e3);
                }).catch(function(t4) {
                  i.Log.error("SessionMonitor ctor: error from querySessionStatus:", t4.message);
                });
              }).catch(function(t3) {
                i.Log.error("SessionMonitor ctor: error from getUser:", t3.message);
              }));
            }
            return t2.prototype._start = function t3(e2) {
              var r2 = this, n2 = e2.session_state;
              n2 && (e2.profile ? (this._sub = e2.profile.sub, this._sid = e2.profile.sid, i.Log.debug("SessionMonitor._start: session_state:", n2, ", sub:", this._sub)) : (this._sub = void 0, this._sid = void 0, i.Log.debug("SessionMonitor._start: session_state:", n2, ", anonymous user")), this._checkSessionIFrame ? this._checkSessionIFrame.start(n2) : this._metadataService.getCheckSessionIframe().then(function(t4) {
                if (t4) {
                  i.Log.debug("SessionMonitor._start: Initializing check session iframe");
                  var e3 = r2._client_id, o2 = r2._checkSessionInterval, s2 = r2._stopCheckSessionOnError;
                  r2._checkSessionIFrame = new r2._CheckSessionIFrameCtor(r2._callback.bind(r2), e3, t4, o2, s2), r2._checkSessionIFrame.load().then(function() {
                    r2._checkSessionIFrame.start(n2);
                  });
                } else i.Log.warn("SessionMonitor._start: No check session iframe found in the metadata");
              }).catch(function(t4) {
                i.Log.error("SessionMonitor._start: Error from getCheckSessionIframe:", t4.message);
              }));
            }, t2.prototype._stop = function t3() {
              var e2 = this;
              if (this._sub = void 0, this._sid = void 0, this._checkSessionIFrame && (i.Log.debug("SessionMonitor._stop"), this._checkSessionIFrame.stop()), this._settings.monitorAnonymousSession) var r2 = this._timer.setInterval(function() {
                e2._timer.clearInterval(r2), e2._userManager.querySessionStatus().then(function(t4) {
                  var r3 = { session_state: t4.session_state };
                  t4.sub && t4.sid && (r3.profile = { sub: t4.sub, sid: t4.sid }), e2._start(r3);
                }).catch(function(t4) {
                  i.Log.error("SessionMonitor: error from querySessionStatus:", t4.message);
                });
              }, 1e3);
            }, t2.prototype._callback = function t3() {
              var e2 = this;
              this._userManager.querySessionStatus().then(function(t4) {
                var r2 = true;
                t4 ? t4.sub === e2._sub ? (r2 = false, e2._checkSessionIFrame.start(t4.session_state), t4.sid === e2._sid ? i.Log.debug("SessionMonitor._callback: Same sub still logged in at OP, restarting check session iframe; session_state:", t4.session_state) : (i.Log.debug("SessionMonitor._callback: Same sub still logged in at OP, session state has changed, restarting check session iframe; session_state:", t4.session_state), e2._userManager.events._raiseUserSessionChanged())) : i.Log.debug("SessionMonitor._callback: Different subject signed into OP:", t4.sub) : i.Log.debug("SessionMonitor._callback: Subject no longer signed into OP"), r2 && (e2._sub ? (i.Log.debug("SessionMonitor._callback: SessionMonitor._callback; raising signed out event"), e2._userManager.events._raiseUserSignedOut()) : (i.Log.debug("SessionMonitor._callback: SessionMonitor._callback; raising signed in event"), e2._userManager.events._raiseUserSignedIn()));
              }).catch(function(t4) {
                e2._sub && (i.Log.debug("SessionMonitor._callback: Error calling queryCurrentSigninSession; raising signed out event", t4.message), e2._userManager.events._raiseUserSignedOut());
              });
            }, n(t2, [{ key: "_settings", get: function t3() {
              return this._userManager.settings;
            } }, { key: "_metadataService", get: function t3() {
              return this._userManager.metadataService;
            } }, { key: "_client_id", get: function t3() {
              return this._settings.client_id;
            } }, { key: "_checkSessionInterval", get: function t3() {
              return this._settings.checkSessionInterval;
            } }, { key: "_stopCheckSessionOnError", get: function t3() {
              return this._settings.stopCheckSessionOnError;
            } }]), t2;
          }();
        }, function(t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.CheckSessionIFrame = void 0;
          var n = r(0);
          function i(t2, e2) {
            if (!(t2 instanceof e2)) throw new TypeError("Cannot call a class as a function");
          }
          e.CheckSessionIFrame = function() {
            function t2(e2, r2, n2, o) {
              var s = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
              i(this, t2), this._callback = e2, this._client_id = r2, this._url = n2, this._interval = o || 2e3, this._stopOnError = s;
              var a = n2.indexOf("/", n2.indexOf("//") + 2);
              this._frame_origin = n2.substr(0, a), this._frame = window.document.createElement("iframe"), this._frame.style.visibility = "hidden", this._frame.style.position = "absolute", this._frame.style.display = "none", this._frame.width = 0, this._frame.height = 0, this._frame.src = n2;
            }
            return t2.prototype.load = function t3() {
              var e2 = this;
              return new Promise(function(t4) {
                e2._frame.onload = function() {
                  t4();
                }, window.document.body.appendChild(e2._frame), e2._boundMessageEvent = e2._message.bind(e2), window.addEventListener("message", e2._boundMessageEvent, false);
              });
            }, t2.prototype._message = function t3(e2) {
              e2.origin === this._frame_origin && e2.source === this._frame.contentWindow && ("error" === e2.data ? (n.Log.error("CheckSessionIFrame: error message from check session op iframe"), this._stopOnError && this.stop()) : "changed" === e2.data ? (n.Log.debug("CheckSessionIFrame: changed message from check session op iframe"), this.stop(), this._callback()) : n.Log.debug("CheckSessionIFrame: " + e2.data + " message from check session op iframe"));
            }, t2.prototype.start = function t3(e2) {
              var r2 = this;
              if (this._session_state !== e2) {
                n.Log.debug("CheckSessionIFrame.start"), this.stop(), this._session_state = e2;
                var i2 = function t4() {
                  r2._frame.contentWindow.postMessage(r2._client_id + " " + r2._session_state, r2._frame_origin);
                };
                i2(), this._timer = window.setInterval(i2, this._interval);
              }
            }, t2.prototype.stop = function t3() {
              this._session_state = null, this._timer && (n.Log.debug("CheckSessionIFrame.stop"), window.clearInterval(this._timer), this._timer = null);
            }, t2;
          }();
        }, function(t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.TokenRevocationClient = void 0;
          var n = r(0), i = r(2), o = r(1);
          function s(t2, e2) {
            if (!(t2 instanceof e2)) throw new TypeError("Cannot call a class as a function");
          }
          var a = "access_token", u = "refresh_token";
          e.TokenRevocationClient = function() {
            function t2(e2) {
              var r2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.Global.XMLHttpRequest, a2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.MetadataService;
              if (s(this, t2), !e2) throw n.Log.error("TokenRevocationClient.ctor: No settings provided"), new Error("No settings provided.");
              this._settings = e2, this._XMLHttpRequestCtor = r2, this._metadataService = new a2(this._settings);
            }
            return t2.prototype.revoke = function t3(e2, r2) {
              var i2 = this, o2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "access_token";
              if (!e2) throw n.Log.error("TokenRevocationClient.revoke: No token provided"), new Error("No token provided.");
              if (o2 !== a && o2 != u) throw n.Log.error("TokenRevocationClient.revoke: Invalid token type"), new Error("Invalid token type.");
              return this._metadataService.getRevocationEndpoint().then(function(t4) {
                if (t4) {
                  n.Log.debug("TokenRevocationClient.revoke: Revoking " + o2);
                  var s2 = i2._settings.client_id, a2 = i2._settings.client_secret;
                  return i2._revoke(t4, s2, a2, e2, o2);
                }
                if (r2) throw n.Log.error("TokenRevocationClient.revoke: Revocation not supported"), new Error("Revocation not supported");
              });
            }, t2.prototype._revoke = function t3(e2, r2, i2, o2, s2) {
              var a2 = this;
              return new Promise(function(t4, u2) {
                var c = new a2._XMLHttpRequestCtor();
                c.open("POST", e2), c.onload = function() {
                  n.Log.debug("TokenRevocationClient.revoke: HTTP response received, status", c.status), 200 === c.status ? t4() : u2(Error(c.statusText + " (" + c.status + ")"));
                }, c.onerror = function() {
                  n.Log.debug("TokenRevocationClient.revoke: Network Error."), u2("Network Error");
                };
                var h = "client_id=" + encodeURIComponent(r2);
                i2 && (h += "&client_secret=" + encodeURIComponent(i2)), h += "&token_type_hint=" + encodeURIComponent(s2), h += "&token=" + encodeURIComponent(o2), c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), c.send(h);
              });
            }, t2;
          }();
        }, function(t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.CordovaPopupWindow = void 0;
          var n = /* @__PURE__ */ function() {
            function t2(t3, e2) {
              for (var r2 = 0; r2 < e2.length; r2++) {
                var n2 = e2[r2];
                n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, n2.key, n2);
              }
            }
            return function(e2, r2, n2) {
              return r2 && t2(e2.prototype, r2), n2 && t2(e2, n2), e2;
            };
          }(), i = r(0);
          e.CordovaPopupWindow = function() {
            function t2(e2) {
              var r2 = this;
              !function n2(t3, e3) {
                if (!(t3 instanceof e3)) throw new TypeError("Cannot call a class as a function");
              }(this, t2), this._promise = new Promise(function(t3, e3) {
                r2._resolve = t3, r2._reject = e3;
              }), this.features = e2.popupWindowFeatures || "location=no,toolbar=no,zoom=no", this.target = e2.popupWindowTarget || "_blank", this.redirect_uri = e2.startUrl, i.Log.debug("CordovaPopupWindow.ctor: redirect_uri: " + this.redirect_uri);
            }
            return t2.prototype._isInAppBrowserInstalled = function t3(e2) {
              return ["cordova-plugin-inappbrowser", "cordova-plugin-inappbrowser.inappbrowser", "org.apache.cordova.inappbrowser"].some(function(t4) {
                return e2.hasOwnProperty(t4);
              });
            }, t2.prototype.navigate = function t3(e2) {
              if (e2 && e2.url) {
                if (!window.cordova) return this._error("cordova is undefined");
                var r2 = window.cordova.require("cordova/plugin_list").metadata;
                if (false === this._isInAppBrowserInstalled(r2)) return this._error("InAppBrowser plugin not found");
                this._popup = cordova.InAppBrowser.open(e2.url, this.target, this.features), this._popup ? (i.Log.debug("CordovaPopupWindow.navigate: popup successfully created"), this._exitCallbackEvent = this._exitCallback.bind(this), this._loadStartCallbackEvent = this._loadStartCallback.bind(this), this._popup.addEventListener("exit", this._exitCallbackEvent, false), this._popup.addEventListener("loadstart", this._loadStartCallbackEvent, false)) : this._error("Error opening popup window");
              } else this._error("No url provided");
              return this.promise;
            }, t2.prototype._loadStartCallback = function t3(e2) {
              0 === e2.url.indexOf(this.redirect_uri) && this._success({ url: e2.url });
            }, t2.prototype._exitCallback = function t3(e2) {
              this._error(e2);
            }, t2.prototype._success = function t3(e2) {
              this._cleanup(), i.Log.debug("CordovaPopupWindow: Successful response from cordova popup window"), this._resolve(e2);
            }, t2.prototype._error = function t3(e2) {
              this._cleanup(), i.Log.error(e2), this._reject(new Error(e2));
            }, t2.prototype.close = function t3() {
              this._cleanup();
            }, t2.prototype._cleanup = function t3() {
              this._popup && (i.Log.debug("CordovaPopupWindow: cleaning up popup"), this._popup.removeEventListener("exit", this._exitCallbackEvent, false), this._popup.removeEventListener("loadstart", this._loadStartCallbackEvent, false), this._popup.close()), this._popup = null;
            }, n(t2, [{ key: "promise", get: function t3() {
              return this._promise;
            } }]), t2;
          }();
        }, function(t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true });
          var n = r(0), i = r(10), o = r(5), s = r(6), a = r(37), u = r(38), c = r(16), h = r(2), l = r(48), f = r(49), g = r(19), d = r(20), p = r(18), v = r(1), y = r(15), m = r(50);
          e.default = { Version: m.Version, Log: n.Log, OidcClient: i.OidcClient, OidcClientSettings: o.OidcClientSettings, WebStorageStateStore: s.WebStorageStateStore, InMemoryWebStorage: a.InMemoryWebStorage, UserManager: u.UserManager, AccessTokenEvents: c.AccessTokenEvents, MetadataService: h.MetadataService, CordovaPopupNavigator: l.CordovaPopupNavigator, CordovaIFrameNavigator: f.CordovaIFrameNavigator, CheckSessionIFrame: g.CheckSessionIFrame, TokenRevocationClient: d.TokenRevocationClient, SessionMonitor: p.SessionMonitor, Global: v.Global, User: y.User }, t.exports = e.default;
        }, function(t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true });
          e.ClockService = function() {
            function t2() {
              !function e2(t3, r2) {
                if (!(t3 instanceof r2)) throw new TypeError("Cannot call a class as a function");
              }(this, t2);
            }
            return t2.prototype.getEpochTime = function t3() {
              return Promise.resolve(Date.now() / 1e3 | 0);
            }, t2;
          }();
        }, function(t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.ResponseValidator = void 0;
          var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t2) {
            return typeof t2;
          } : function(t2) {
            return t2 && "function" == typeof Symbol && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2;
          }, i = r(0), o = r(2), s = r(25), a = r(11), u = r(12), c = r(4);
          function h(t2, e2) {
            if (!(t2 instanceof e2)) throw new TypeError("Cannot call a class as a function");
          }
          var l = ["nonce", "at_hash", "iat", "nbf", "exp", "aud", "iss", "c_hash"];
          e.ResponseValidator = function() {
            function t2(e2) {
              var r2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.MetadataService, n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.UserInfoService, u2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : c.JoseUtil, l2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : a.TokenClient;
              if (h(this, t2), !e2) throw i.Log.error("ResponseValidator.ctor: No settings passed to ResponseValidator"), new Error("settings");
              this._settings = e2, this._metadataService = new r2(this._settings), this._userInfoService = new n2(this._settings), this._joseUtil = u2, this._tokenClient = new l2(this._settings);
            }
            return t2.prototype.validateSigninResponse = function t3(e2, r2) {
              var n2 = this;
              return i.Log.debug("ResponseValidator.validateSigninResponse"), this._processSigninParams(e2, r2).then(function(t4) {
                return i.Log.debug("ResponseValidator.validateSigninResponse: state processed"), n2._validateTokens(e2, t4).then(function(t5) {
                  return i.Log.debug("ResponseValidator.validateSigninResponse: tokens validated"), n2._processClaims(e2, t5).then(function(t6) {
                    return i.Log.debug("ResponseValidator.validateSigninResponse: claims processed"), t6;
                  });
                });
              });
            }, t2.prototype.validateSignoutResponse = function t3(e2, r2) {
              return e2.id !== r2.state ? (i.Log.error("ResponseValidator.validateSignoutResponse: State does not match"), Promise.reject(new Error("State does not match"))) : (i.Log.debug("ResponseValidator.validateSignoutResponse: state validated"), r2.state = e2.data, r2.error ? (i.Log.warn("ResponseValidator.validateSignoutResponse: Response was error", r2.error), Promise.reject(new u.ErrorResponse(r2))) : Promise.resolve(r2));
            }, t2.prototype._processSigninParams = function t3(e2, r2) {
              if (e2.id !== r2.state) return i.Log.error("ResponseValidator._processSigninParams: State does not match"), Promise.reject(new Error("State does not match"));
              if (!e2.client_id) return i.Log.error("ResponseValidator._processSigninParams: No client_id on state"), Promise.reject(new Error("No client_id on state"));
              if (!e2.authority) return i.Log.error("ResponseValidator._processSigninParams: No authority on state"), Promise.reject(new Error("No authority on state"));
              if (this._settings.authority) {
                if (this._settings.authority && this._settings.authority !== e2.authority) return i.Log.error("ResponseValidator._processSigninParams: authority mismatch on settings vs. signin state"), Promise.reject(new Error("authority mismatch on settings vs. signin state"));
              } else this._settings.authority = e2.authority;
              if (this._settings.client_id) {
                if (this._settings.client_id && this._settings.client_id !== e2.client_id) return i.Log.error("ResponseValidator._processSigninParams: client_id mismatch on settings vs. signin state"), Promise.reject(new Error("client_id mismatch on settings vs. signin state"));
              } else this._settings.client_id = e2.client_id;
              return i.Log.debug("ResponseValidator._processSigninParams: state validated"), r2.state = e2.data, r2.error ? (i.Log.warn("ResponseValidator._processSigninParams: Response was error", r2.error), Promise.reject(new u.ErrorResponse(r2))) : e2.nonce && !r2.id_token ? (i.Log.error("ResponseValidator._processSigninParams: Expecting id_token in response"), Promise.reject(new Error("No id_token in response"))) : !e2.nonce && r2.id_token ? (i.Log.error("ResponseValidator._processSigninParams: Not expecting id_token in response"), Promise.reject(new Error("Unexpected id_token in response"))) : e2.code_verifier && !r2.code ? (i.Log.error("ResponseValidator._processSigninParams: Expecting code in response"), Promise.reject(new Error("No code in response"))) : !e2.code_verifier && r2.code ? (i.Log.error("ResponseValidator._processSigninParams: Not expecting code in response"), Promise.reject(new Error("Unexpected code in response"))) : (r2.scope || (r2.scope = e2.scope), Promise.resolve(r2));
            }, t2.prototype._processClaims = function t3(e2, r2) {
              var n2 = this;
              if (r2.isOpenIdConnect) {
                if (i.Log.debug("ResponseValidator._processClaims: response is OIDC, processing claims"), r2.profile = this._filterProtocolClaims(r2.profile), true !== e2.skipUserInfo && this._settings.loadUserInfo && r2.access_token) return i.Log.debug("ResponseValidator._processClaims: loading user info"), this._userInfoService.getClaims(r2.access_token).then(function(t4) {
                  return i.Log.debug("ResponseValidator._processClaims: user info claims received from user info endpoint"), t4.sub !== r2.profile.sub ? (i.Log.error("ResponseValidator._processClaims: sub from user info endpoint does not match sub in id_token"), Promise.reject(new Error("sub from user info endpoint does not match sub in id_token"))) : (r2.profile = n2._mergeClaims(r2.profile, t4), i.Log.debug("ResponseValidator._processClaims: user info claims received, updated profile:", r2.profile), r2);
                });
                i.Log.debug("ResponseValidator._processClaims: not loading user info");
              } else i.Log.debug("ResponseValidator._processClaims: response is not OIDC, not processing claims");
              return Promise.resolve(r2);
            }, t2.prototype._mergeClaims = function t3(e2, r2) {
              var i2 = Object.assign({}, e2);
              for (var o2 in r2) {
                var s2 = r2[o2];
                Array.isArray(s2) || (s2 = [s2]);
                for (var a2 = 0; a2 < s2.length; a2++) {
                  var u2 = s2[a2];
                  i2[o2] ? Array.isArray(i2[o2]) ? i2[o2].indexOf(u2) < 0 && i2[o2].push(u2) : i2[o2] !== u2 && ("object" === (void 0 === u2 ? "undefined" : n(u2)) && this._settings.mergeClaims ? i2[o2] = this._mergeClaims(i2[o2], u2) : i2[o2] = [i2[o2], u2]) : i2[o2] = u2;
                }
              }
              return i2;
            }, t2.prototype._filterProtocolClaims = function t3(e2) {
              i.Log.debug("ResponseValidator._filterProtocolClaims, incoming claims:", e2);
              var r2 = Object.assign({}, e2);
              return this._settings._filterProtocolClaims ? (l.forEach(function(t4) {
                delete r2[t4];
              }), i.Log.debug("ResponseValidator._filterProtocolClaims: protocol claims filtered", r2)) : i.Log.debug("ResponseValidator._filterProtocolClaims: protocol claims not filtered"), r2;
            }, t2.prototype._validateTokens = function t3(e2, r2) {
              return r2.code ? (i.Log.debug("ResponseValidator._validateTokens: Validating code"), this._processCode(e2, r2)) : r2.id_token ? r2.access_token ? (i.Log.debug("ResponseValidator._validateTokens: Validating id_token and access_token"), this._validateIdTokenAndAccessToken(e2, r2)) : (i.Log.debug("ResponseValidator._validateTokens: Validating id_token"), this._validateIdToken(e2, r2)) : (i.Log.debug("ResponseValidator._validateTokens: No code to process or id_token to validate"), Promise.resolve(r2));
            }, t2.prototype._processCode = function t3(e2, r2) {
              var o2 = this, s2 = { client_id: e2.client_id, client_secret: e2.client_secret, code: r2.code, redirect_uri: e2.redirect_uri, code_verifier: e2.code_verifier };
              return e2.extraTokenParams && "object" === n(e2.extraTokenParams) && Object.assign(s2, e2.extraTokenParams), this._tokenClient.exchangeCode(s2).then(function(t4) {
                for (var n2 in t4) r2[n2] = t4[n2];
                return r2.id_token ? (i.Log.debug("ResponseValidator._processCode: token response successful, processing id_token"), o2._validateIdTokenAttributes(e2, r2)) : (i.Log.debug("ResponseValidator._processCode: token response successful, returning response"), r2);
              });
            }, t2.prototype._validateIdTokenAttributes = function t3(e2, r2) {
              var n2 = this;
              return this._metadataService.getIssuer().then(function(t4) {
                var o2 = e2.client_id, s2 = n2._settings.clockSkew;
                return i.Log.debug("ResponseValidator._validateIdTokenAttributes: Validaing JWT attributes; using clock skew (in seconds) of: ", s2), n2._settings.getEpochTime().then(function(a2) {
                  return n2._joseUtil.validateJwtAttributes(r2.id_token, t4, o2, s2, a2).then(function(t5) {
                    return e2.nonce && e2.nonce !== t5.nonce ? (i.Log.error("ResponseValidator._validateIdTokenAttributes: Invalid nonce in id_token"), Promise.reject(new Error("Invalid nonce in id_token"))) : t5.sub ? (r2.profile = t5, r2) : (i.Log.error("ResponseValidator._validateIdTokenAttributes: No sub present in id_token"), Promise.reject(new Error("No sub present in id_token")));
                  });
                });
              });
            }, t2.prototype._validateIdTokenAndAccessToken = function t3(e2, r2) {
              var n2 = this;
              return this._validateIdToken(e2, r2).then(function(t4) {
                return n2._validateAccessToken(t4);
              });
            }, t2.prototype._getSigningKeyForJwt = function t3(e2) {
              var r2 = this;
              return this._metadataService.getSigningKeys().then(function(t4) {
                var n2 = e2.header.kid;
                if (!t4) return i.Log.error("ResponseValidator._validateIdToken: No signing keys from metadata"), Promise.reject(new Error("No signing keys from metadata"));
                i.Log.debug("ResponseValidator._validateIdToken: Received signing keys");
                var o2 = void 0;
                if (n2) o2 = t4.filter(function(t5) {
                  return t5.kid === n2;
                })[0];
                else {
                  if ((t4 = r2._filterByAlg(t4, e2.header.alg)).length > 1) return i.Log.error("ResponseValidator._validateIdToken: No kid found in id_token and more than one key found in metadata"), Promise.reject(new Error("No kid found in id_token and more than one key found in metadata"));
                  o2 = t4[0];
                }
                return Promise.resolve(o2);
              });
            }, t2.prototype._getSigningKeyForJwtWithSingleRetry = function t3(e2) {
              var r2 = this;
              return this._getSigningKeyForJwt(e2).then(function(t4) {
                return t4 ? Promise.resolve(t4) : (r2._metadataService.resetSigningKeys(), r2._getSigningKeyForJwt(e2));
              });
            }, t2.prototype._validateIdToken = function t3(e2, r2) {
              var n2 = this;
              if (!e2.nonce) return i.Log.error("ResponseValidator._validateIdToken: No nonce on state"), Promise.reject(new Error("No nonce on state"));
              var o2 = this._joseUtil.parseJwt(r2.id_token);
              return o2 && o2.header && o2.payload ? e2.nonce !== o2.payload.nonce ? (i.Log.error("ResponseValidator._validateIdToken: Invalid nonce in id_token"), Promise.reject(new Error("Invalid nonce in id_token"))) : this._metadataService.getIssuer().then(function(t4) {
                return i.Log.debug("ResponseValidator._validateIdToken: Received issuer"), n2._getSigningKeyForJwtWithSingleRetry(o2).then(function(s2) {
                  if (!s2) return i.Log.error("ResponseValidator._validateIdToken: No key matching kid or alg found in signing keys"), Promise.reject(new Error("No key matching kid or alg found in signing keys"));
                  var a2 = e2.client_id, u2 = n2._settings.clockSkew;
                  return i.Log.debug("ResponseValidator._validateIdToken: Validaing JWT; using clock skew (in seconds) of: ", u2), n2._joseUtil.validateJwt(r2.id_token, s2, t4, a2, u2).then(function() {
                    return i.Log.debug("ResponseValidator._validateIdToken: JWT validation successful"), o2.payload.sub ? (r2.profile = o2.payload, r2) : (i.Log.error("ResponseValidator._validateIdToken: No sub present in id_token"), Promise.reject(new Error("No sub present in id_token")));
                  });
                });
              }) : (i.Log.error("ResponseValidator._validateIdToken: Failed to parse id_token", o2), Promise.reject(new Error("Failed to parse id_token")));
            }, t2.prototype._filterByAlg = function t3(e2, r2) {
              var n2 = null;
              if (r2.startsWith("RS")) n2 = "RSA";
              else if (r2.startsWith("PS")) n2 = "PS";
              else {
                if (!r2.startsWith("ES")) return i.Log.debug("ResponseValidator._filterByAlg: alg not supported: ", r2), [];
                n2 = "EC";
              }
              return i.Log.debug("ResponseValidator._filterByAlg: Looking for keys that match kty: ", n2), e2 = e2.filter(function(t4) {
                return t4.kty === n2;
              }), i.Log.debug("ResponseValidator._filterByAlg: Number of keys that match kty: ", n2, e2.length), e2;
            }, t2.prototype._validateAccessToken = function t3(e2) {
              if (!e2.profile) return i.Log.error("ResponseValidator._validateAccessToken: No profile loaded from id_token"), Promise.reject(new Error("No profile loaded from id_token"));
              if (!e2.profile.at_hash) return i.Log.error("ResponseValidator._validateAccessToken: No at_hash in id_token"), Promise.reject(new Error("No at_hash in id_token"));
              if (!e2.id_token) return i.Log.error("ResponseValidator._validateAccessToken: No id_token"), Promise.reject(new Error("No id_token"));
              var r2 = this._joseUtil.parseJwt(e2.id_token);
              if (!r2 || !r2.header) return i.Log.error("ResponseValidator._validateAccessToken: Failed to parse id_token", r2), Promise.reject(new Error("Failed to parse id_token"));
              var n2 = r2.header.alg;
              if (!n2 || 5 !== n2.length) return i.Log.error("ResponseValidator._validateAccessToken: Unsupported alg:", n2), Promise.reject(new Error("Unsupported alg: " + n2));
              var o2 = n2.substr(2, 3);
              if (!o2) return i.Log.error("ResponseValidator._validateAccessToken: Unsupported alg:", n2, o2), Promise.reject(new Error("Unsupported alg: " + n2));
              if (256 !== (o2 = parseInt(o2)) && 384 !== o2 && 512 !== o2) return i.Log.error("ResponseValidator._validateAccessToken: Unsupported alg:", n2, o2), Promise.reject(new Error("Unsupported alg: " + n2));
              var s2 = "sha" + o2, a2 = this._joseUtil.hashString(e2.access_token, s2);
              if (!a2) return i.Log.error("ResponseValidator._validateAccessToken: access_token hash failed:", s2), Promise.reject(new Error("Failed to validate at_hash"));
              var u2 = a2.substr(0, a2.length / 2), c2 = this._joseUtil.hexToBase64Url(u2);
              return c2 !== e2.profile.at_hash ? (i.Log.error("ResponseValidator._validateAccessToken: Failed to validate at_hash", c2, e2.profile.at_hash), Promise.reject(new Error("Failed to validate at_hash"))) : (i.Log.debug("ResponseValidator._validateAccessToken: success"), Promise.resolve(e2));
            }, t2;
          }();
        }, function(t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.UserInfoService = void 0;
          var n = r(7), i = r(2), o = r(0), s = r(4);
          function a(t2, e2) {
            if (!(t2 instanceof e2)) throw new TypeError("Cannot call a class as a function");
          }
          e.UserInfoService = function() {
            function t2(e2) {
              var r2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.JsonService, u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.MetadataService, c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s.JoseUtil;
              if (a(this, t2), !e2) throw o.Log.error("UserInfoService.ctor: No settings passed"), new Error("settings");
              this._settings = e2, this._jsonService = new r2(void 0, void 0, this._getClaimsFromJwt.bind(this)), this._metadataService = new u(this._settings), this._joseUtil = c;
            }
            return t2.prototype.getClaims = function t3(e2) {
              var r2 = this;
              return e2 ? this._metadataService.getUserInfoEndpoint().then(function(t4) {
                return o.Log.debug("UserInfoService.getClaims: received userinfo url", t4), r2._jsonService.getJson(t4, e2).then(function(t5) {
                  return o.Log.debug("UserInfoService.getClaims: claims received", t5), t5;
                });
              }) : (o.Log.error("UserInfoService.getClaims: No token passed"), Promise.reject(new Error("A token is required")));
            }, t2.prototype._getClaimsFromJwt = function t3(e2) {
              var r2 = this;
              try {
                var n2 = this._joseUtil.parseJwt(e2.responseText);
                if (!n2 || !n2.header || !n2.payload) return o.Log.error("UserInfoService._getClaimsFromJwt: Failed to parse JWT", n2), Promise.reject(new Error("Failed to parse id_token"));
                var i2 = n2.header.kid, s2 = void 0;
                switch (this._settings.userInfoJwtIssuer) {
                  case "OP":
                    s2 = this._metadataService.getIssuer();
                    break;
                  case "ANY":
                    s2 = Promise.resolve(n2.payload.iss);
                    break;
                  default:
                    s2 = Promise.resolve(this._settings.userInfoJwtIssuer);
                }
                return s2.then(function(t4) {
                  return o.Log.debug("UserInfoService._getClaimsFromJwt: Received issuer:" + t4), r2._metadataService.getSigningKeys().then(function(s3) {
                    if (!s3) return o.Log.error("UserInfoService._getClaimsFromJwt: No signing keys from metadata"), Promise.reject(new Error("No signing keys from metadata"));
                    o.Log.debug("UserInfoService._getClaimsFromJwt: Received signing keys");
                    var a2 = void 0;
                    if (i2) a2 = s3.filter(function(t5) {
                      return t5.kid === i2;
                    })[0];
                    else {
                      if ((s3 = r2._filterByAlg(s3, n2.header.alg)).length > 1) return o.Log.error("UserInfoService._getClaimsFromJwt: No kid found in id_token and more than one key found in metadata"), Promise.reject(new Error("No kid found in id_token and more than one key found in metadata"));
                      a2 = s3[0];
                    }
                    if (!a2) return o.Log.error("UserInfoService._getClaimsFromJwt: No key matching kid or alg found in signing keys"), Promise.reject(new Error("No key matching kid or alg found in signing keys"));
                    var u = r2._settings.client_id, c = r2._settings.clockSkew;
                    return o.Log.debug("UserInfoService._getClaimsFromJwt: Validaing JWT; using clock skew (in seconds) of: ", c), r2._joseUtil.validateJwt(e2.responseText, a2, t4, u, c, void 0, true).then(function() {
                      return o.Log.debug("UserInfoService._getClaimsFromJwt: JWT validation successful"), n2.payload;
                    });
                  });
                });
              } catch (t4) {
                return o.Log.error("UserInfoService._getClaimsFromJwt: Error parsing JWT response", t4.message), void reject(t4);
              }
            }, t2.prototype._filterByAlg = function t3(e2, r2) {
              var n2 = null;
              if (r2.startsWith("RS")) n2 = "RSA";
              else if (r2.startsWith("PS")) n2 = "PS";
              else {
                if (!r2.startsWith("ES")) return o.Log.debug("UserInfoService._filterByAlg: alg not supported: ", r2), [];
                n2 = "EC";
              }
              return o.Log.debug("UserInfoService._filterByAlg: Looking for keys that match kty: ", n2), e2 = e2.filter(function(t4) {
                return t4.kty === n2;
              }), o.Log.debug("UserInfoService._filterByAlg: Number of keys that match kty: ", n2, e2.length), e2;
            }, t2;
          }();
        }, function(t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.AllowedSigningAlgs = e.b64tohex = e.hextob64u = e.crypto = e.X509 = e.KeyUtil = e.jws = void 0;
          var n = r(27);
          e.jws = n.jws, e.KeyUtil = n.KEYUTIL, e.X509 = n.X509, e.crypto = n.crypto, e.hextob64u = n.hextob64u, e.b64tohex = n.b64tohex, e.AllowedSigningAlgs = ["RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512"];
        }, function(t, e, r) {
          "use strict";
          (function(t2) {
            Object.defineProperty(e, "__esModule", { value: true });
            var r2, n, i, o, s, a, u, c, h, l, f, g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
              return typeof t3;
            } : function(t3) {
              return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
            }, d = { userAgent: false }, p = {}, v = v || (r2 = Math, i = (n = {}).lib = {}, o = i.Base = /* @__PURE__ */ function() {
              function t3() {
              }
              return { extend: function e2(r3) {
                t3.prototype = this;
                var n2 = new t3();
                return r3 && n2.mixIn(r3), n2.hasOwnProperty("init") || (n2.init = function() {
                  n2.$super.init.apply(this, arguments);
                }), n2.init.prototype = n2, n2.$super = this, n2;
              }, create: function t4() {
                var e2 = this.extend();
                return e2.init.apply(e2, arguments), e2;
              }, init: function t4() {
              }, mixIn: function t4(e2) {
                for (var r3 in e2) e2.hasOwnProperty(r3) && (this[r3] = e2[r3]);
                e2.hasOwnProperty("toString") && (this.toString = e2.toString);
              }, clone: function t4() {
                return this.init.prototype.extend(this);
              } };
            }(), s = i.WordArray = o.extend({ init: function t3(e2, r3) {
              e2 = this.words = e2 || [], this.sigBytes = null != r3 ? r3 : 4 * e2.length;
            }, toString: function t3(e2) {
              return (e2 || u).stringify(this);
            }, concat: function t3(e2) {
              var r3 = this.words, n2 = e2.words, i2 = this.sigBytes, o2 = e2.sigBytes;
              if (this.clamp(), i2 % 4) for (var s2 = 0; s2 < o2; s2++) {
                var a2 = n2[s2 >>> 2] >>> 24 - s2 % 4 * 8 & 255;
                r3[i2 + s2 >>> 2] |= a2 << 24 - (i2 + s2) % 4 * 8;
              }
              else for (s2 = 0; s2 < o2; s2 += 4) r3[i2 + s2 >>> 2] = n2[s2 >>> 2];
              return this.sigBytes += o2, this;
            }, clamp: function t3() {
              var e2 = this.words, n2 = this.sigBytes;
              e2[n2 >>> 2] &= 4294967295 << 32 - n2 % 4 * 8, e2.length = r2.ceil(n2 / 4);
            }, clone: function t3() {
              var e2 = o.clone.call(this);
              return e2.words = this.words.slice(0), e2;
            }, random: function t3(e2) {
              for (var n2 = [], i2 = 0; i2 < e2; i2 += 4) n2.push(4294967296 * r2.random() | 0);
              return new s.init(n2, e2);
            } }), a = n.enc = {}, u = a.Hex = { stringify: function t3(e2) {
              for (var r3 = e2.words, n2 = e2.sigBytes, i2 = [], o2 = 0; o2 < n2; o2++) {
                var s2 = r3[o2 >>> 2] >>> 24 - o2 % 4 * 8 & 255;
                i2.push((s2 >>> 4).toString(16)), i2.push((15 & s2).toString(16));
              }
              return i2.join("");
            }, parse: function t3(e2) {
              for (var r3 = e2.length, n2 = [], i2 = 0; i2 < r3; i2 += 2) n2[i2 >>> 3] |= parseInt(e2.substr(i2, 2), 16) << 24 - i2 % 8 * 4;
              return new s.init(n2, r3 / 2);
            } }, c = a.Latin1 = { stringify: function t3(e2) {
              for (var r3 = e2.words, n2 = e2.sigBytes, i2 = [], o2 = 0; o2 < n2; o2++) {
                var s2 = r3[o2 >>> 2] >>> 24 - o2 % 4 * 8 & 255;
                i2.push(String.fromCharCode(s2));
              }
              return i2.join("");
            }, parse: function t3(e2) {
              for (var r3 = e2.length, n2 = [], i2 = 0; i2 < r3; i2++) n2[i2 >>> 2] |= (255 & e2.charCodeAt(i2)) << 24 - i2 % 4 * 8;
              return new s.init(n2, r3);
            } }, h = a.Utf8 = { stringify: function t3(e2) {
              try {
                return decodeURIComponent(escape(c.stringify(e2)));
              } catch (t4) {
                throw new Error("Malformed UTF-8 data");
              }
            }, parse: function t3(e2) {
              return c.parse(unescape(encodeURIComponent(e2)));
            } }, l = i.BufferedBlockAlgorithm = o.extend({ reset: function t3() {
              this._data = new s.init(), this._nDataBytes = 0;
            }, _append: function t3(e2) {
              "string" == typeof e2 && (e2 = h.parse(e2)), this._data.concat(e2), this._nDataBytes += e2.sigBytes;
            }, _process: function t3(e2) {
              var n2 = this._data, i2 = n2.words, o2 = n2.sigBytes, a2 = this.blockSize, u2 = o2 / (4 * a2), c2 = (u2 = e2 ? r2.ceil(u2) : r2.max((0 | u2) - this._minBufferSize, 0)) * a2, h2 = r2.min(4 * c2, o2);
              if (c2) {
                for (var l2 = 0; l2 < c2; l2 += a2) this._doProcessBlock(i2, l2);
                var f2 = i2.splice(0, c2);
                n2.sigBytes -= h2;
              }
              return new s.init(f2, h2);
            }, clone: function t3() {
              var e2 = o.clone.call(this);
              return e2._data = this._data.clone(), e2;
            }, _minBufferSize: 0 }), i.Hasher = l.extend({ cfg: o.extend(), init: function t3(e2) {
              this.cfg = this.cfg.extend(e2), this.reset();
            }, reset: function t3() {
              l.reset.call(this), this._doReset();
            }, update: function t3(e2) {
              return this._append(e2), this._process(), this;
            }, finalize: function t3(e2) {
              return e2 && this._append(e2), this._doFinalize();
            }, blockSize: 16, _createHelper: function t3(e2) {
              return function(t4, r3) {
                return new e2.init(r3).finalize(t4);
              };
            }, _createHmacHelper: function t3(e2) {
              return function(t4, r3) {
                return new f.HMAC.init(e2, r3).finalize(t4);
              };
            } }), f = n.algo = {}, n);
            !function(t3) {
              var e2, r3 = (e2 = v).lib, n2 = r3.Base, i2 = r3.WordArray;
              (e2 = e2.x64 = {}).Word = n2.extend({ init: function t4(e3, r4) {
                this.high = e3, this.low = r4;
              } }), e2.WordArray = n2.extend({ init: function t4(e3, r4) {
                e3 = this.words = e3 || [], this.sigBytes = null != r4 ? r4 : 8 * e3.length;
              }, toX32: function t4() {
                for (var e3 = this.words, r4 = e3.length, n3 = [], o2 = 0; o2 < r4; o2++) {
                  var s2 = e3[o2];
                  n3.push(s2.high), n3.push(s2.low);
                }
                return i2.create(n3, this.sigBytes);
              }, clone: function t4() {
                for (var e3 = n2.clone.call(this), r4 = e3.words = this.words.slice(0), i3 = r4.length, o2 = 0; o2 < i3; o2++) r4[o2] = r4[o2].clone();
                return e3;
              } });
            }(), function() {
              var t3 = v, e2 = t3.lib.WordArray;
              t3.enc.Base64 = { stringify: function t4(e3) {
                var r3 = e3.words, n2 = e3.sigBytes, i2 = this._map;
                e3.clamp(), e3 = [];
                for (var o2 = 0; o2 < n2; o2 += 3) for (var s2 = (r3[o2 >>> 2] >>> 24 - o2 % 4 * 8 & 255) << 16 | (r3[o2 + 1 >>> 2] >>> 24 - (o2 + 1) % 4 * 8 & 255) << 8 | r3[o2 + 2 >>> 2] >>> 24 - (o2 + 2) % 4 * 8 & 255, a2 = 0; 4 > a2 && o2 + 0.75 * a2 < n2; a2++) e3.push(i2.charAt(s2 >>> 6 * (3 - a2) & 63));
                if (r3 = i2.charAt(64)) for (; e3.length % 4; ) e3.push(r3);
                return e3.join("");
              }, parse: function t4(r3) {
                var n2 = r3.length, i2 = this._map;
                (o2 = i2.charAt(64)) && (-1 != (o2 = r3.indexOf(o2)) && (n2 = o2));
                for (var o2 = [], s2 = 0, a2 = 0; a2 < n2; a2++) if (a2 % 4) {
                  var u2 = i2.indexOf(r3.charAt(a2 - 1)) << a2 % 4 * 2, c2 = i2.indexOf(r3.charAt(a2)) >>> 6 - a2 % 4 * 2;
                  o2[s2 >>> 2] |= (u2 | c2) << 24 - s2 % 4 * 8, s2++;
                }
                return e2.create(o2, s2);
              }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" };
            }(), function(t3) {
              for (var e2 = v, r3 = (i2 = e2.lib).WordArray, n2 = i2.Hasher, i2 = e2.algo, o2 = [], s2 = [], a2 = function t4(e3) {
                return 4294967296 * (e3 - (0 | e3)) | 0;
              }, u2 = 2, c2 = 0; 64 > c2; ) {
                var h2;
                t: {
                  h2 = u2;
                  for (var l2 = t3.sqrt(h2), f2 = 2; f2 <= l2; f2++) if (!(h2 % f2)) {
                    h2 = false;
                    break t;
                  }
                  h2 = true;
                }
                h2 && (8 > c2 && (o2[c2] = a2(t3.pow(u2, 0.5))), s2[c2] = a2(t3.pow(u2, 1 / 3)), c2++), u2++;
              }
              var g2 = [];
              i2 = i2.SHA256 = n2.extend({ _doReset: function t4() {
                this._hash = new r3.init(o2.slice(0));
              }, _doProcessBlock: function t4(e3, r4) {
                for (var n3 = this._hash.words, i3 = n3[0], o3 = n3[1], a3 = n3[2], u3 = n3[3], c3 = n3[4], h3 = n3[5], l3 = n3[6], f3 = n3[7], d2 = 0; 64 > d2; d2++) {
                  if (16 > d2) g2[d2] = 0 | e3[r4 + d2];
                  else {
                    var p2 = g2[d2 - 15], v2 = g2[d2 - 2];
                    g2[d2] = ((p2 << 25 | p2 >>> 7) ^ (p2 << 14 | p2 >>> 18) ^ p2 >>> 3) + g2[d2 - 7] + ((v2 << 15 | v2 >>> 17) ^ (v2 << 13 | v2 >>> 19) ^ v2 >>> 10) + g2[d2 - 16];
                  }
                  p2 = f3 + ((c3 << 26 | c3 >>> 6) ^ (c3 << 21 | c3 >>> 11) ^ (c3 << 7 | c3 >>> 25)) + (c3 & h3 ^ ~c3 & l3) + s2[d2] + g2[d2], v2 = ((i3 << 30 | i3 >>> 2) ^ (i3 << 19 | i3 >>> 13) ^ (i3 << 10 | i3 >>> 22)) + (i3 & o3 ^ i3 & a3 ^ o3 & a3), f3 = l3, l3 = h3, h3 = c3, c3 = u3 + p2 | 0, u3 = a3, a3 = o3, o3 = i3, i3 = p2 + v2 | 0;
                }
                n3[0] = n3[0] + i3 | 0, n3[1] = n3[1] + o3 | 0, n3[2] = n3[2] + a3 | 0, n3[3] = n3[3] + u3 | 0, n3[4] = n3[4] + c3 | 0, n3[5] = n3[5] + h3 | 0, n3[6] = n3[6] + l3 | 0, n3[7] = n3[7] + f3 | 0;
              }, _doFinalize: function e3() {
                var r4 = this._data, n3 = r4.words, i3 = 8 * this._nDataBytes, o3 = 8 * r4.sigBytes;
                return n3[o3 >>> 5] |= 128 << 24 - o3 % 32, n3[14 + (o3 + 64 >>> 9 << 4)] = t3.floor(i3 / 4294967296), n3[15 + (o3 + 64 >>> 9 << 4)] = i3, r4.sigBytes = 4 * n3.length, this._process(), this._hash;
              }, clone: function t4() {
                var e3 = n2.clone.call(this);
                return e3._hash = this._hash.clone(), e3;
              } });
              e2.SHA256 = n2._createHelper(i2), e2.HmacSHA256 = n2._createHmacHelper(i2);
            }(Math), function() {
              function t3() {
                return n2.create.apply(n2, arguments);
              }
              for (var e2 = v, r3 = e2.lib.Hasher, n2 = (o2 = e2.x64).Word, i2 = o2.WordArray, o2 = e2.algo, s2 = [t3(1116352408, 3609767458), t3(1899447441, 602891725), t3(3049323471, 3964484399), t3(3921009573, 2173295548), t3(961987163, 4081628472), t3(1508970993, 3053834265), t3(2453635748, 2937671579), t3(2870763221, 3664609560), t3(3624381080, 2734883394), t3(310598401, 1164996542), t3(607225278, 1323610764), t3(1426881987, 3590304994), t3(1925078388, 4068182383), t3(2162078206, 991336113), t3(2614888103, 633803317), t3(3248222580, 3479774868), t3(3835390401, 2666613458), t3(4022224774, 944711139), t3(264347078, 2341262773), t3(604807628, 2007800933), t3(770255983, 1495990901), t3(1249150122, 1856431235), t3(1555081692, 3175218132), t3(1996064986, 2198950837), t3(2554220882, 3999719339), t3(2821834349, 766784016), t3(2952996808, 2566594879), t3(3210313671, 3203337956), t3(3336571891, 1034457026), t3(3584528711, 2466948901), t3(113926993, 3758326383), t3(338241895, 168717936), t3(666307205, 1188179964), t3(773529912, 1546045734), t3(1294757372, 1522805485), t3(1396182291, 2643833823), t3(1695183700, 2343527390), t3(1986661051, 1014477480), t3(2177026350, 1206759142), t3(2456956037, 344077627), t3(2730485921, 1290863460), t3(2820302411, 3158454273), t3(3259730800, 3505952657), t3(3345764771, 106217008), t3(3516065817, 3606008344), t3(3600352804, 1432725776), t3(4094571909, 1467031594), t3(275423344, 851169720), t3(430227734, 3100823752), t3(506948616, 1363258195), t3(659060556, 3750685593), t3(883997877, 3785050280), t3(958139571, 3318307427), t3(1322822218, 3812723403), t3(1537002063, 2003034995), t3(1747873779, 3602036899), t3(1955562222, 1575990012), t3(2024104815, 1125592928), t3(2227730452, 2716904306), t3(2361852424, 442776044), t3(2428436474, 593698344), t3(2756734187, 3733110249), t3(3204031479, 2999351573), t3(3329325298, 3815920427), t3(3391569614, 3928383900), t3(3515267271, 566280711), t3(3940187606, 3454069534), t3(4118630271, 4000239992), t3(116418474, 1914138554), t3(174292421, 2731055270), t3(289380356, 3203993006), t3(460393269, 320620315), t3(685471733, 587496836), t3(852142971, 1086792851), t3(1017036298, 365543100), t3(1126000580, 2618297676), t3(1288033470, 3409855158), t3(1501505948, 4234509866), t3(1607167915, 987167468), t3(1816402316, 1246189591)], a2 = [], u2 = 0; 80 > u2; u2++) a2[u2] = t3();
              o2 = o2.SHA512 = r3.extend({ _doReset: function t4() {
                this._hash = new i2.init([new n2.init(1779033703, 4089235720), new n2.init(3144134277, 2227873595), new n2.init(1013904242, 4271175723), new n2.init(2773480762, 1595750129), new n2.init(1359893119, 2917565137), new n2.init(2600822924, 725511199), new n2.init(528734635, 4215389547), new n2.init(1541459225, 327033209)]);
              }, _doProcessBlock: function t4(e3, r4) {
                for (var n3 = (f2 = this._hash.words)[0], i3 = f2[1], o3 = f2[2], u3 = f2[3], c2 = f2[4], h2 = f2[5], l2 = f2[6], f2 = f2[7], g2 = n3.high, d2 = n3.low, p2 = i3.high, v2 = i3.low, y2 = o3.high, m2 = o3.low, _2 = u3.high, S2 = u3.low, b2 = c2.high, w2 = c2.low, F2 = h2.high, E = h2.low, x = l2.high, A = l2.low, k2 = f2.high, P2 = f2.low, C2 = g2, T2 = d2, R2 = p2, I2 = v2, D2 = y2, L2 = m2, N2 = _2, U2 = S2, B2 = b2, O2 = w2, j2 = F2, M2 = E, H2 = x, V2 = A, K2 = k2, q2 = P2, J = 0; 80 > J; J++) {
                  var W = a2[J];
                  if (16 > J) var z = W.high = 0 | e3[r4 + 2 * J], Y = W.low = 0 | e3[r4 + 2 * J + 1];
                  else {
                    z = ((Y = (z = a2[J - 15]).high) >>> 1 | (G = z.low) << 31) ^ (Y >>> 8 | G << 24) ^ Y >>> 7;
                    var G = (G >>> 1 | Y << 31) ^ (G >>> 8 | Y << 24) ^ (G >>> 7 | Y << 25), X = ((Y = (X = a2[J - 2]).high) >>> 19 | ($ = X.low) << 13) ^ (Y << 3 | $ >>> 29) ^ Y >>> 6, $ = ($ >>> 19 | Y << 13) ^ ($ << 3 | Y >>> 29) ^ ($ >>> 6 | Y << 26), Q = (Y = a2[J - 7]).high, Z = (tt = a2[J - 16]).high, tt = tt.low;
                    z = (z = (z = z + Q + ((Y = G + Y.low) >>> 0 < G >>> 0 ? 1 : 0)) + X + ((Y = Y + $) >>> 0 < $ >>> 0 ? 1 : 0)) + Z + ((Y = Y + tt) >>> 0 < tt >>> 0 ? 1 : 0);
                    W.high = z, W.low = Y;
                  }
                  Q = B2 & j2 ^ ~B2 & H2, tt = O2 & M2 ^ ~O2 & V2, W = C2 & R2 ^ C2 & D2 ^ R2 & D2;
                  var et = T2 & I2 ^ T2 & L2 ^ I2 & L2, rt = (G = (C2 >>> 28 | T2 << 4) ^ (C2 << 30 | T2 >>> 2) ^ (C2 << 25 | T2 >>> 7), X = (T2 >>> 28 | C2 << 4) ^ (T2 << 30 | C2 >>> 2) ^ (T2 << 25 | C2 >>> 7), ($ = s2[J]).high), nt = $.low;
                  Z = K2 + ((B2 >>> 14 | O2 << 18) ^ (B2 >>> 18 | O2 << 14) ^ (B2 << 23 | O2 >>> 9)) + (($ = q2 + ((O2 >>> 14 | B2 << 18) ^ (O2 >>> 18 | B2 << 14) ^ (O2 << 23 | B2 >>> 9))) >>> 0 < q2 >>> 0 ? 1 : 0), K2 = H2, q2 = V2, H2 = j2, V2 = M2, j2 = B2, M2 = O2, B2 = N2 + (Z = (Z = (Z = Z + Q + (($ = $ + tt) >>> 0 < tt >>> 0 ? 1 : 0)) + rt + (($ = $ + nt) >>> 0 < nt >>> 0 ? 1 : 0)) + z + (($ = $ + Y) >>> 0 < Y >>> 0 ? 1 : 0)) + ((O2 = U2 + $ | 0) >>> 0 < U2 >>> 0 ? 1 : 0) | 0, N2 = D2, U2 = L2, D2 = R2, L2 = I2, R2 = C2, I2 = T2, C2 = Z + (W = G + W + ((Y = X + et) >>> 0 < X >>> 0 ? 1 : 0)) + ((T2 = $ + Y | 0) >>> 0 < $ >>> 0 ? 1 : 0) | 0;
                }
                d2 = n3.low = d2 + T2, n3.high = g2 + C2 + (d2 >>> 0 < T2 >>> 0 ? 1 : 0), v2 = i3.low = v2 + I2, i3.high = p2 + R2 + (v2 >>> 0 < I2 >>> 0 ? 1 : 0), m2 = o3.low = m2 + L2, o3.high = y2 + D2 + (m2 >>> 0 < L2 >>> 0 ? 1 : 0), S2 = u3.low = S2 + U2, u3.high = _2 + N2 + (S2 >>> 0 < U2 >>> 0 ? 1 : 0), w2 = c2.low = w2 + O2, c2.high = b2 + B2 + (w2 >>> 0 < O2 >>> 0 ? 1 : 0), E = h2.low = E + M2, h2.high = F2 + j2 + (E >>> 0 < M2 >>> 0 ? 1 : 0), A = l2.low = A + V2, l2.high = x + H2 + (A >>> 0 < V2 >>> 0 ? 1 : 0), P2 = f2.low = P2 + q2, f2.high = k2 + K2 + (P2 >>> 0 < q2 >>> 0 ? 1 : 0);
              }, _doFinalize: function t4() {
                var e3 = this._data, r4 = e3.words, n3 = 8 * this._nDataBytes, i3 = 8 * e3.sigBytes;
                return r4[i3 >>> 5] |= 128 << 24 - i3 % 32, r4[30 + (i3 + 128 >>> 10 << 5)] = Math.floor(n3 / 4294967296), r4[31 + (i3 + 128 >>> 10 << 5)] = n3, e3.sigBytes = 4 * r4.length, this._process(), this._hash.toX32();
              }, clone: function t4() {
                var e3 = r3.clone.call(this);
                return e3._hash = this._hash.clone(), e3;
              }, blockSize: 32 }), e2.SHA512 = r3._createHelper(o2), e2.HmacSHA512 = r3._createHmacHelper(o2);
            }(), function() {
              var t3 = v, e2 = (i2 = t3.x64).Word, r3 = i2.WordArray, n2 = (i2 = t3.algo).SHA512, i2 = i2.SHA384 = n2.extend({ _doReset: function t4() {
                this._hash = new r3.init([new e2.init(3418070365, 3238371032), new e2.init(1654270250, 914150663), new e2.init(2438529370, 812702999), new e2.init(355462360, 4144912697), new e2.init(1731405415, 4290775857), new e2.init(2394180231, 1750603025), new e2.init(3675008525, 1694076839), new e2.init(1203062813, 3204075428)]);
              }, _doFinalize: function t4() {
                var e3 = n2._doFinalize.call(this);
                return e3.sigBytes -= 16, e3;
              } });
              t3.SHA384 = n2._createHelper(i2), t3.HmacSHA384 = n2._createHmacHelper(i2);
            }();
            var y, m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            function _(t3) {
              var e2, r3, n2 = "";
              for (e2 = 0; e2 + 3 <= t3.length; e2 += 3) r3 = parseInt(t3.substring(e2, e2 + 3), 16), n2 += m.charAt(r3 >> 6) + m.charAt(63 & r3);
              for (e2 + 1 == t3.length ? (r3 = parseInt(t3.substring(e2, e2 + 1), 16), n2 += m.charAt(r3 << 2)) : e2 + 2 == t3.length && (r3 = parseInt(t3.substring(e2, e2 + 2), 16), n2 += m.charAt(r3 >> 2) + m.charAt((3 & r3) << 4)), "="; (3 & n2.length) > 0; ) n2 += "=";
              return n2;
            }
            function S(t3) {
              var e2, r3, n2, i2 = "", o2 = 0;
              for (e2 = 0; e2 < t3.length && "=" != t3.charAt(e2); ++e2) (n2 = m.indexOf(t3.charAt(e2))) < 0 || (0 == o2 ? (i2 += T(n2 >> 2), r3 = 3 & n2, o2 = 1) : 1 == o2 ? (i2 += T(r3 << 2 | n2 >> 4), r3 = 15 & n2, o2 = 2) : 2 == o2 ? (i2 += T(r3), i2 += T(n2 >> 2), r3 = 3 & n2, o2 = 3) : (i2 += T(r3 << 2 | n2 >> 4), i2 += T(15 & n2), o2 = 0));
              return 1 == o2 && (i2 += T(r3 << 2)), i2;
            }
            function b(t3) {
              var e2, r3 = S(t3), n2 = new Array();
              for (e2 = 0; 2 * e2 < r3.length; ++e2) n2[e2] = parseInt(r3.substring(2 * e2, 2 * e2 + 2), 16);
              return n2;
            }
            function w(t3, e2, r3) {
              null != t3 && ("number" == typeof t3 ? this.fromNumber(t3, e2, r3) : null == e2 && "string" != typeof t3 ? this.fromString(t3, 256) : this.fromString(t3, e2));
            }
            function F() {
              return new w(null);
            }
            "Microsoft Internet Explorer" == d.appName ? (w.prototype.am = function E(t3, e2, r3, n2, i2, o2) {
              for (var s2 = 32767 & e2, a2 = e2 >> 15; --o2 >= 0; ) {
                var u2 = 32767 & this[t3], c2 = this[t3++] >> 15, h2 = a2 * u2 + c2 * s2;
                i2 = ((u2 = s2 * u2 + ((32767 & h2) << 15) + r3[n2] + (1073741823 & i2)) >>> 30) + (h2 >>> 15) + a2 * c2 + (i2 >>> 30), r3[n2++] = 1073741823 & u2;
              }
              return i2;
            }, y = 30) : "Netscape" != d.appName ? (w.prototype.am = function x(t3, e2, r3, n2, i2, o2) {
              for (; --o2 >= 0; ) {
                var s2 = e2 * this[t3++] + r3[n2] + i2;
                i2 = Math.floor(s2 / 67108864), r3[n2++] = 67108863 & s2;
              }
              return i2;
            }, y = 26) : (w.prototype.am = function A(t3, e2, r3, n2, i2, o2) {
              for (var s2 = 16383 & e2, a2 = e2 >> 14; --o2 >= 0; ) {
                var u2 = 16383 & this[t3], c2 = this[t3++] >> 14, h2 = a2 * u2 + c2 * s2;
                i2 = ((u2 = s2 * u2 + ((16383 & h2) << 14) + r3[n2] + i2) >> 28) + (h2 >> 14) + a2 * c2, r3[n2++] = 268435455 & u2;
              }
              return i2;
            }, y = 28), w.prototype.DB = y, w.prototype.DM = (1 << y) - 1, w.prototype.DV = 1 << y;
            w.prototype.FV = Math.pow(2, 52), w.prototype.F1 = 52 - y, w.prototype.F2 = 2 * y - 52;
            var k, P, C = new Array();
            for (k = "0".charCodeAt(0), P = 0; P <= 9; ++P) C[k++] = P;
            for (k = "a".charCodeAt(0), P = 10; P < 36; ++P) C[k++] = P;
            for (k = "A".charCodeAt(0), P = 10; P < 36; ++P) C[k++] = P;
            function T(t3) {
              return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(t3);
            }
            function R(t3, e2) {
              var r3 = C[t3.charCodeAt(e2)];
              return null == r3 ? -1 : r3;
            }
            function I(t3) {
              var e2 = F();
              return e2.fromInt(t3), e2;
            }
            function D(t3) {
              var e2, r3 = 1;
              return 0 != (e2 = t3 >>> 16) && (t3 = e2, r3 += 16), 0 != (e2 = t3 >> 8) && (t3 = e2, r3 += 8), 0 != (e2 = t3 >> 4) && (t3 = e2, r3 += 4), 0 != (e2 = t3 >> 2) && (t3 = e2, r3 += 2), 0 != (e2 = t3 >> 1) && (t3 = e2, r3 += 1), r3;
            }
            function L(t3) {
              this.m = t3;
            }
            function N(t3) {
              this.m = t3, this.mp = t3.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << t3.DB - 15) - 1, this.mt2 = 2 * t3.t;
            }
            function U(t3, e2) {
              return t3 & e2;
            }
            function B(t3, e2) {
              return t3 | e2;
            }
            function O(t3, e2) {
              return t3 ^ e2;
            }
            function j(t3, e2) {
              return t3 & ~e2;
            }
            function M(t3) {
              if (0 == t3) return -1;
              var e2 = 0;
              return 0 == (65535 & t3) && (t3 >>= 16, e2 += 16), 0 == (255 & t3) && (t3 >>= 8, e2 += 8), 0 == (15 & t3) && (t3 >>= 4, e2 += 4), 0 == (3 & t3) && (t3 >>= 2, e2 += 2), 0 == (1 & t3) && ++e2, e2;
            }
            function H(t3) {
              for (var e2 = 0; 0 != t3; ) t3 &= t3 - 1, ++e2;
              return e2;
            }
            function V() {
            }
            function K(t3) {
              return t3;
            }
            function q(t3) {
              this.r2 = F(), this.q3 = F(), w.ONE.dlShiftTo(2 * t3.t, this.r2), this.mu = this.r2.divide(t3), this.m = t3;
            }
            L.prototype.convert = function J(t3) {
              return t3.s < 0 || t3.compareTo(this.m) >= 0 ? t3.mod(this.m) : t3;
            }, L.prototype.revert = function W(t3) {
              return t3;
            }, L.prototype.reduce = function z(t3) {
              t3.divRemTo(this.m, null, t3);
            }, L.prototype.mulTo = function Y(t3, e2, r3) {
              t3.multiplyTo(e2, r3), this.reduce(r3);
            }, L.prototype.sqrTo = function G(t3, e2) {
              t3.squareTo(e2), this.reduce(e2);
            }, N.prototype.convert = function X(t3) {
              var e2 = F();
              return t3.abs().dlShiftTo(this.m.t, e2), e2.divRemTo(this.m, null, e2), t3.s < 0 && e2.compareTo(w.ZERO) > 0 && this.m.subTo(e2, e2), e2;
            }, N.prototype.revert = function $(t3) {
              var e2 = F();
              return t3.copyTo(e2), this.reduce(e2), e2;
            }, N.prototype.reduce = function Q(t3) {
              for (; t3.t <= this.mt2; ) t3[t3.t++] = 0;
              for (var e2 = 0; e2 < this.m.t; ++e2) {
                var r3 = 32767 & t3[e2], n2 = r3 * this.mpl + ((r3 * this.mph + (t3[e2] >> 15) * this.mpl & this.um) << 15) & t3.DM;
                for (t3[r3 = e2 + this.m.t] += this.m.am(0, n2, t3, e2, 0, this.m.t); t3[r3] >= t3.DV; ) t3[r3] -= t3.DV, t3[++r3]++;
              }
              t3.clamp(), t3.drShiftTo(this.m.t, t3), t3.compareTo(this.m) >= 0 && t3.subTo(this.m, t3);
            }, N.prototype.mulTo = function Z(t3, e2, r3) {
              t3.multiplyTo(e2, r3), this.reduce(r3);
            }, N.prototype.sqrTo = function tt(t3, e2) {
              t3.squareTo(e2), this.reduce(e2);
            }, w.prototype.copyTo = function et(t3) {
              for (var e2 = this.t - 1; e2 >= 0; --e2) t3[e2] = this[e2];
              t3.t = this.t, t3.s = this.s;
            }, w.prototype.fromInt = function rt(t3) {
              this.t = 1, this.s = t3 < 0 ? -1 : 0, t3 > 0 ? this[0] = t3 : t3 < -1 ? this[0] = t3 + this.DV : this.t = 0;
            }, w.prototype.fromString = function nt(t3, e2) {
              var r3;
              if (16 == e2) r3 = 4;
              else if (8 == e2) r3 = 3;
              else if (256 == e2) r3 = 8;
              else if (2 == e2) r3 = 1;
              else if (32 == e2) r3 = 5;
              else {
                if (4 != e2) return void this.fromRadix(t3, e2);
                r3 = 2;
              }
              this.t = 0, this.s = 0;
              for (var n2 = t3.length, i2 = false, o2 = 0; --n2 >= 0; ) {
                var s2 = 8 == r3 ? 255 & t3[n2] : R(t3, n2);
                s2 < 0 ? "-" == t3.charAt(n2) && (i2 = true) : (i2 = false, 0 == o2 ? this[this.t++] = s2 : o2 + r3 > this.DB ? (this[this.t - 1] |= (s2 & (1 << this.DB - o2) - 1) << o2, this[this.t++] = s2 >> this.DB - o2) : this[this.t - 1] |= s2 << o2, (o2 += r3) >= this.DB && (o2 -= this.DB));
              }
              8 == r3 && 0 != (128 & t3[0]) && (this.s = -1, o2 > 0 && (this[this.t - 1] |= (1 << this.DB - o2) - 1 << o2)), this.clamp(), i2 && w.ZERO.subTo(this, this);
            }, w.prototype.clamp = function it() {
              for (var t3 = this.s & this.DM; this.t > 0 && this[this.t - 1] == t3; ) --this.t;
            }, w.prototype.dlShiftTo = function ot(t3, e2) {
              var r3;
              for (r3 = this.t - 1; r3 >= 0; --r3) e2[r3 + t3] = this[r3];
              for (r3 = t3 - 1; r3 >= 0; --r3) e2[r3] = 0;
              e2.t = this.t + t3, e2.s = this.s;
            }, w.prototype.drShiftTo = function st(t3, e2) {
              for (var r3 = t3; r3 < this.t; ++r3) e2[r3 - t3] = this[r3];
              e2.t = Math.max(this.t - t3, 0), e2.s = this.s;
            }, w.prototype.lShiftTo = function at(t3, e2) {
              var r3, n2 = t3 % this.DB, i2 = this.DB - n2, o2 = (1 << i2) - 1, s2 = Math.floor(t3 / this.DB), a2 = this.s << n2 & this.DM;
              for (r3 = this.t - 1; r3 >= 0; --r3) e2[r3 + s2 + 1] = this[r3] >> i2 | a2, a2 = (this[r3] & o2) << n2;
              for (r3 = s2 - 1; r3 >= 0; --r3) e2[r3] = 0;
              e2[s2] = a2, e2.t = this.t + s2 + 1, e2.s = this.s, e2.clamp();
            }, w.prototype.rShiftTo = function ut(t3, e2) {
              e2.s = this.s;
              var r3 = Math.floor(t3 / this.DB);
              if (r3 >= this.t) e2.t = 0;
              else {
                var n2 = t3 % this.DB, i2 = this.DB - n2, o2 = (1 << n2) - 1;
                e2[0] = this[r3] >> n2;
                for (var s2 = r3 + 1; s2 < this.t; ++s2) e2[s2 - r3 - 1] |= (this[s2] & o2) << i2, e2[s2 - r3] = this[s2] >> n2;
                n2 > 0 && (e2[this.t - r3 - 1] |= (this.s & o2) << i2), e2.t = this.t - r3, e2.clamp();
              }
            }, w.prototype.subTo = function ct(t3, e2) {
              for (var r3 = 0, n2 = 0, i2 = Math.min(t3.t, this.t); r3 < i2; ) n2 += this[r3] - t3[r3], e2[r3++] = n2 & this.DM, n2 >>= this.DB;
              if (t3.t < this.t) {
                for (n2 -= t3.s; r3 < this.t; ) n2 += this[r3], e2[r3++] = n2 & this.DM, n2 >>= this.DB;
                n2 += this.s;
              } else {
                for (n2 += this.s; r3 < t3.t; ) n2 -= t3[r3], e2[r3++] = n2 & this.DM, n2 >>= this.DB;
                n2 -= t3.s;
              }
              e2.s = n2 < 0 ? -1 : 0, n2 < -1 ? e2[r3++] = this.DV + n2 : n2 > 0 && (e2[r3++] = n2), e2.t = r3, e2.clamp();
            }, w.prototype.multiplyTo = function ht(t3, e2) {
              var r3 = this.abs(), n2 = t3.abs(), i2 = r3.t;
              for (e2.t = i2 + n2.t; --i2 >= 0; ) e2[i2] = 0;
              for (i2 = 0; i2 < n2.t; ++i2) e2[i2 + r3.t] = r3.am(0, n2[i2], e2, i2, 0, r3.t);
              e2.s = 0, e2.clamp(), this.s != t3.s && w.ZERO.subTo(e2, e2);
            }, w.prototype.squareTo = function lt(t3) {
              for (var e2 = this.abs(), r3 = t3.t = 2 * e2.t; --r3 >= 0; ) t3[r3] = 0;
              for (r3 = 0; r3 < e2.t - 1; ++r3) {
                var n2 = e2.am(r3, e2[r3], t3, 2 * r3, 0, 1);
                (t3[r3 + e2.t] += e2.am(r3 + 1, 2 * e2[r3], t3, 2 * r3 + 1, n2, e2.t - r3 - 1)) >= e2.DV && (t3[r3 + e2.t] -= e2.DV, t3[r3 + e2.t + 1] = 1);
              }
              t3.t > 0 && (t3[t3.t - 1] += e2.am(r3, e2[r3], t3, 2 * r3, 0, 1)), t3.s = 0, t3.clamp();
            }, w.prototype.divRemTo = function ft(t3, e2, r3) {
              var n2 = t3.abs();
              if (!(n2.t <= 0)) {
                var i2 = this.abs();
                if (i2.t < n2.t) return null != e2 && e2.fromInt(0), void (null != r3 && this.copyTo(r3));
                null == r3 && (r3 = F());
                var o2 = F(), s2 = this.s, a2 = t3.s, u2 = this.DB - D(n2[n2.t - 1]);
                u2 > 0 ? (n2.lShiftTo(u2, o2), i2.lShiftTo(u2, r3)) : (n2.copyTo(o2), i2.copyTo(r3));
                var c2 = o2.t, h2 = o2[c2 - 1];
                if (0 != h2) {
                  var l2 = h2 * (1 << this.F1) + (c2 > 1 ? o2[c2 - 2] >> this.F2 : 0), f2 = this.FV / l2, g2 = (1 << this.F1) / l2, d2 = 1 << this.F2, p2 = r3.t, v2 = p2 - c2, y2 = null == e2 ? F() : e2;
                  for (o2.dlShiftTo(v2, y2), r3.compareTo(y2) >= 0 && (r3[r3.t++] = 1, r3.subTo(y2, r3)), w.ONE.dlShiftTo(c2, y2), y2.subTo(o2, o2); o2.t < c2; ) o2[o2.t++] = 0;
                  for (; --v2 >= 0; ) {
                    var m2 = r3[--p2] == h2 ? this.DM : Math.floor(r3[p2] * f2 + (r3[p2 - 1] + d2) * g2);
                    if ((r3[p2] += o2.am(0, m2, r3, v2, 0, c2)) < m2) for (o2.dlShiftTo(v2, y2), r3.subTo(y2, r3); r3[p2] < --m2; ) r3.subTo(y2, r3);
                  }
                  null != e2 && (r3.drShiftTo(c2, e2), s2 != a2 && w.ZERO.subTo(e2, e2)), r3.t = c2, r3.clamp(), u2 > 0 && r3.rShiftTo(u2, r3), s2 < 0 && w.ZERO.subTo(r3, r3);
                }
              }
            }, w.prototype.invDigit = function gt() {
              if (this.t < 1) return 0;
              var t3 = this[0];
              if (0 == (1 & t3)) return 0;
              var e2 = 3 & t3;
              return (e2 = (e2 = (e2 = (e2 = e2 * (2 - (15 & t3) * e2) & 15) * (2 - (255 & t3) * e2) & 255) * (2 - ((65535 & t3) * e2 & 65535)) & 65535) * (2 - t3 * e2 % this.DV) % this.DV) > 0 ? this.DV - e2 : -e2;
            }, w.prototype.isEven = function dt() {
              return 0 == (this.t > 0 ? 1 & this[0] : this.s);
            }, w.prototype.exp = function pt(t3, e2) {
              if (t3 > 4294967295 || t3 < 1) return w.ONE;
              var r3 = F(), n2 = F(), i2 = e2.convert(this), o2 = D(t3) - 1;
              for (i2.copyTo(r3); --o2 >= 0; ) if (e2.sqrTo(r3, n2), (t3 & 1 << o2) > 0) e2.mulTo(n2, i2, r3);
              else {
                var s2 = r3;
                r3 = n2, n2 = s2;
              }
              return e2.revert(r3);
            }, w.prototype.toString = function vt(t3) {
              if (this.s < 0) return "-" + this.negate().toString(t3);
              var e2;
              if (16 == t3) e2 = 4;
              else if (8 == t3) e2 = 3;
              else if (2 == t3) e2 = 1;
              else if (32 == t3) e2 = 5;
              else {
                if (4 != t3) return this.toRadix(t3);
                e2 = 2;
              }
              var r3, n2 = (1 << e2) - 1, i2 = false, o2 = "", s2 = this.t, a2 = this.DB - s2 * this.DB % e2;
              if (s2-- > 0) for (a2 < this.DB && (r3 = this[s2] >> a2) > 0 && (i2 = true, o2 = T(r3)); s2 >= 0; ) a2 < e2 ? (r3 = (this[s2] & (1 << a2) - 1) << e2 - a2, r3 |= this[--s2] >> (a2 += this.DB - e2)) : (r3 = this[s2] >> (a2 -= e2) & n2, a2 <= 0 && (a2 += this.DB, --s2)), r3 > 0 && (i2 = true), i2 && (o2 += T(r3));
              return i2 ? o2 : "0";
            }, w.prototype.negate = function yt() {
              var t3 = F();
              return w.ZERO.subTo(this, t3), t3;
            }, w.prototype.abs = function mt() {
              return this.s < 0 ? this.negate() : this;
            }, w.prototype.compareTo = function _t(t3) {
              var e2 = this.s - t3.s;
              if (0 != e2) return e2;
              var r3 = this.t;
              if (0 != (e2 = r3 - t3.t)) return this.s < 0 ? -e2 : e2;
              for (; --r3 >= 0; ) if (0 != (e2 = this[r3] - t3[r3])) return e2;
              return 0;
            }, w.prototype.bitLength = function St() {
              return this.t <= 0 ? 0 : this.DB * (this.t - 1) + D(this[this.t - 1] ^ this.s & this.DM);
            }, w.prototype.mod = function bt(t3) {
              var e2 = F();
              return this.abs().divRemTo(t3, null, e2), this.s < 0 && e2.compareTo(w.ZERO) > 0 && t3.subTo(e2, e2), e2;
            }, w.prototype.modPowInt = function wt(t3, e2) {
              var r3;
              return r3 = t3 < 256 || e2.isEven() ? new L(e2) : new N(e2), this.exp(t3, r3);
            }, w.ZERO = I(0), w.ONE = I(1), V.prototype.convert = K, V.prototype.revert = K, V.prototype.mulTo = function Ft(t3, e2, r3) {
              t3.multiplyTo(e2, r3);
            }, V.prototype.sqrTo = function Et(t3, e2) {
              t3.squareTo(e2);
            }, q.prototype.convert = function xt(t3) {
              if (t3.s < 0 || t3.t > 2 * this.m.t) return t3.mod(this.m);
              if (t3.compareTo(this.m) < 0) return t3;
              var e2 = F();
              return t3.copyTo(e2), this.reduce(e2), e2;
            }, q.prototype.revert = function At(t3) {
              return t3;
            }, q.prototype.reduce = function kt(t3) {
              for (t3.drShiftTo(this.m.t - 1, this.r2), t3.t > this.m.t + 1 && (t3.t = this.m.t + 1, t3.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t3.compareTo(this.r2) < 0; ) t3.dAddOffset(1, this.m.t + 1);
              for (t3.subTo(this.r2, t3); t3.compareTo(this.m) >= 0; ) t3.subTo(this.m, t3);
            }, q.prototype.mulTo = function Pt(t3, e2, r3) {
              t3.multiplyTo(e2, r3), this.reduce(r3);
            }, q.prototype.sqrTo = function Ct(t3, e2) {
              t3.squareTo(e2), this.reduce(e2);
            };
            var Tt = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997], Rt = (1 << 26) / Tt[Tt.length - 1];
            function It() {
              this.i = 0, this.j = 0, this.S = new Array();
            }
            w.prototype.chunkSize = function Dt(t3) {
              return Math.floor(Math.LN2 * this.DB / Math.log(t3));
            }, w.prototype.toRadix = function Lt(t3) {
              if (null == t3 && (t3 = 10), 0 == this.signum() || t3 < 2 || t3 > 36) return "0";
              var e2 = this.chunkSize(t3), r3 = Math.pow(t3, e2), n2 = I(r3), i2 = F(), o2 = F(), s2 = "";
              for (this.divRemTo(n2, i2, o2); i2.signum() > 0; ) s2 = (r3 + o2.intValue()).toString(t3).substr(1) + s2, i2.divRemTo(n2, i2, o2);
              return o2.intValue().toString(t3) + s2;
            }, w.prototype.fromRadix = function Nt(t3, e2) {
              this.fromInt(0), null == e2 && (e2 = 10);
              for (var r3 = this.chunkSize(e2), n2 = Math.pow(e2, r3), i2 = false, o2 = 0, s2 = 0, a2 = 0; a2 < t3.length; ++a2) {
                var u2 = R(t3, a2);
                u2 < 0 ? "-" == t3.charAt(a2) && 0 == this.signum() && (i2 = true) : (s2 = e2 * s2 + u2, ++o2 >= r3 && (this.dMultiply(n2), this.dAddOffset(s2, 0), o2 = 0, s2 = 0));
              }
              o2 > 0 && (this.dMultiply(Math.pow(e2, o2)), this.dAddOffset(s2, 0)), i2 && w.ZERO.subTo(this, this);
            }, w.prototype.fromNumber = function Ut(t3, e2, r3) {
              if ("number" == typeof e2) if (t3 < 2) this.fromInt(1);
              else for (this.fromNumber(t3, r3), this.testBit(t3 - 1) || this.bitwiseTo(w.ONE.shiftLeft(t3 - 1), B, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(e2); ) this.dAddOffset(2, 0), this.bitLength() > t3 && this.subTo(w.ONE.shiftLeft(t3 - 1), this);
              else {
                var n2 = new Array(), i2 = 7 & t3;
                n2.length = 1 + (t3 >> 3), e2.nextBytes(n2), i2 > 0 ? n2[0] &= (1 << i2) - 1 : n2[0] = 0, this.fromString(n2, 256);
              }
            }, w.prototype.bitwiseTo = function Bt(t3, e2, r3) {
              var n2, i2, o2 = Math.min(t3.t, this.t);
              for (n2 = 0; n2 < o2; ++n2) r3[n2] = e2(this[n2], t3[n2]);
              if (t3.t < this.t) {
                for (i2 = t3.s & this.DM, n2 = o2; n2 < this.t; ++n2) r3[n2] = e2(this[n2], i2);
                r3.t = this.t;
              } else {
                for (i2 = this.s & this.DM, n2 = o2; n2 < t3.t; ++n2) r3[n2] = e2(i2, t3[n2]);
                r3.t = t3.t;
              }
              r3.s = e2(this.s, t3.s), r3.clamp();
            }, w.prototype.changeBit = function Ot(t3, e2) {
              var r3 = w.ONE.shiftLeft(t3);
              return this.bitwiseTo(r3, e2, r3), r3;
            }, w.prototype.addTo = function jt(t3, e2) {
              for (var r3 = 0, n2 = 0, i2 = Math.min(t3.t, this.t); r3 < i2; ) n2 += this[r3] + t3[r3], e2[r3++] = n2 & this.DM, n2 >>= this.DB;
              if (t3.t < this.t) {
                for (n2 += t3.s; r3 < this.t; ) n2 += this[r3], e2[r3++] = n2 & this.DM, n2 >>= this.DB;
                n2 += this.s;
              } else {
                for (n2 += this.s; r3 < t3.t; ) n2 += t3[r3], e2[r3++] = n2 & this.DM, n2 >>= this.DB;
                n2 += t3.s;
              }
              e2.s = n2 < 0 ? -1 : 0, n2 > 0 ? e2[r3++] = n2 : n2 < -1 && (e2[r3++] = this.DV + n2), e2.t = r3, e2.clamp();
            }, w.prototype.dMultiply = function Mt(t3) {
              this[this.t] = this.am(0, t3 - 1, this, 0, 0, this.t), ++this.t, this.clamp();
            }, w.prototype.dAddOffset = function Ht(t3, e2) {
              if (0 != t3) {
                for (; this.t <= e2; ) this[this.t++] = 0;
                for (this[e2] += t3; this[e2] >= this.DV; ) this[e2] -= this.DV, ++e2 >= this.t && (this[this.t++] = 0), ++this[e2];
              }
            }, w.prototype.multiplyLowerTo = function Vt(t3, e2, r3) {
              var n2, i2 = Math.min(this.t + t3.t, e2);
              for (r3.s = 0, r3.t = i2; i2 > 0; ) r3[--i2] = 0;
              for (n2 = r3.t - this.t; i2 < n2; ++i2) r3[i2 + this.t] = this.am(0, t3[i2], r3, i2, 0, this.t);
              for (n2 = Math.min(t3.t, e2); i2 < n2; ++i2) this.am(0, t3[i2], r3, i2, 0, e2 - i2);
              r3.clamp();
            }, w.prototype.multiplyUpperTo = function Kt(t3, e2, r3) {
              --e2;
              var n2 = r3.t = this.t + t3.t - e2;
              for (r3.s = 0; --n2 >= 0; ) r3[n2] = 0;
              for (n2 = Math.max(e2 - this.t, 0); n2 < t3.t; ++n2) r3[this.t + n2 - e2] = this.am(e2 - n2, t3[n2], r3, 0, 0, this.t + n2 - e2);
              r3.clamp(), r3.drShiftTo(1, r3);
            }, w.prototype.modInt = function qt(t3) {
              if (t3 <= 0) return 0;
              var e2 = this.DV % t3, r3 = this.s < 0 ? t3 - 1 : 0;
              if (this.t > 0) if (0 == e2) r3 = this[0] % t3;
              else for (var n2 = this.t - 1; n2 >= 0; --n2) r3 = (e2 * r3 + this[n2]) % t3;
              return r3;
            }, w.prototype.millerRabin = function Jt(t3) {
              var e2 = this.subtract(w.ONE), r3 = e2.getLowestSetBit();
              if (r3 <= 0) return false;
              var n2 = e2.shiftRight(r3);
              (t3 = t3 + 1 >> 1) > Tt.length && (t3 = Tt.length);
              for (var i2 = F(), o2 = 0; o2 < t3; ++o2) {
                i2.fromInt(Tt[Math.floor(Math.random() * Tt.length)]);
                var s2 = i2.modPow(n2, this);
                if (0 != s2.compareTo(w.ONE) && 0 != s2.compareTo(e2)) {
                  for (var a2 = 1; a2++ < r3 && 0 != s2.compareTo(e2); ) if (0 == (s2 = s2.modPowInt(2, this)).compareTo(w.ONE)) return false;
                  if (0 != s2.compareTo(e2)) return false;
                }
              }
              return true;
            }, w.prototype.clone = /*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
             */
            function Wt() {
              var t3 = F();
              return this.copyTo(t3), t3;
            }, w.prototype.intValue = function zt() {
              if (this.s < 0) {
                if (1 == this.t) return this[0] - this.DV;
                if (0 == this.t) return -1;
              } else {
                if (1 == this.t) return this[0];
                if (0 == this.t) return 0;
              }
              return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0];
            }, w.prototype.byteValue = function Yt() {
              return 0 == this.t ? this.s : this[0] << 24 >> 24;
            }, w.prototype.shortValue = function Gt() {
              return 0 == this.t ? this.s : this[0] << 16 >> 16;
            }, w.prototype.signum = function Xt() {
              return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1;
            }, w.prototype.toByteArray = function $t() {
              var t3 = this.t, e2 = new Array();
              e2[0] = this.s;
              var r3, n2 = this.DB - t3 * this.DB % 8, i2 = 0;
              if (t3-- > 0) for (n2 < this.DB && (r3 = this[t3] >> n2) != (this.s & this.DM) >> n2 && (e2[i2++] = r3 | this.s << this.DB - n2); t3 >= 0; ) n2 < 8 ? (r3 = (this[t3] & (1 << n2) - 1) << 8 - n2, r3 |= this[--t3] >> (n2 += this.DB - 8)) : (r3 = this[t3] >> (n2 -= 8) & 255, n2 <= 0 && (n2 += this.DB, --t3)), 0 != (128 & r3) && (r3 |= -256), 0 == i2 && (128 & this.s) != (128 & r3) && ++i2, (i2 > 0 || r3 != this.s) && (e2[i2++] = r3);
              return e2;
            }, w.prototype.equals = function Qt(t3) {
              return 0 == this.compareTo(t3);
            }, w.prototype.min = function Zt(t3) {
              return this.compareTo(t3) < 0 ? this : t3;
            }, w.prototype.max = function te(t3) {
              return this.compareTo(t3) > 0 ? this : t3;
            }, w.prototype.and = function ee(t3) {
              var e2 = F();
              return this.bitwiseTo(t3, U, e2), e2;
            }, w.prototype.or = function re(t3) {
              var e2 = F();
              return this.bitwiseTo(t3, B, e2), e2;
            }, w.prototype.xor = function ne(t3) {
              var e2 = F();
              return this.bitwiseTo(t3, O, e2), e2;
            }, w.prototype.andNot = function ie(t3) {
              var e2 = F();
              return this.bitwiseTo(t3, j, e2), e2;
            }, w.prototype.not = function oe() {
              for (var t3 = F(), e2 = 0; e2 < this.t; ++e2) t3[e2] = this.DM & ~this[e2];
              return t3.t = this.t, t3.s = ~this.s, t3;
            }, w.prototype.shiftLeft = function se(t3) {
              var e2 = F();
              return t3 < 0 ? this.rShiftTo(-t3, e2) : this.lShiftTo(t3, e2), e2;
            }, w.prototype.shiftRight = function ae(t3) {
              var e2 = F();
              return t3 < 0 ? this.lShiftTo(-t3, e2) : this.rShiftTo(t3, e2), e2;
            }, w.prototype.getLowestSetBit = function ue() {
              for (var t3 = 0; t3 < this.t; ++t3) if (0 != this[t3]) return t3 * this.DB + M(this[t3]);
              return this.s < 0 ? this.t * this.DB : -1;
            }, w.prototype.bitCount = function ce() {
              for (var t3 = 0, e2 = this.s & this.DM, r3 = 0; r3 < this.t; ++r3) t3 += H(this[r3] ^ e2);
              return t3;
            }, w.prototype.testBit = function he(t3) {
              var e2 = Math.floor(t3 / this.DB);
              return e2 >= this.t ? 0 != this.s : 0 != (this[e2] & 1 << t3 % this.DB);
            }, w.prototype.setBit = function le(t3) {
              return this.changeBit(t3, B);
            }, w.prototype.clearBit = function fe(t3) {
              return this.changeBit(t3, j);
            }, w.prototype.flipBit = function ge(t3) {
              return this.changeBit(t3, O);
            }, w.prototype.add = function de(t3) {
              var e2 = F();
              return this.addTo(t3, e2), e2;
            }, w.prototype.subtract = function pe(t3) {
              var e2 = F();
              return this.subTo(t3, e2), e2;
            }, w.prototype.multiply = function ve(t3) {
              var e2 = F();
              return this.multiplyTo(t3, e2), e2;
            }, w.prototype.divide = function ye(t3) {
              var e2 = F();
              return this.divRemTo(t3, e2, null), e2;
            }, w.prototype.remainder = function me(t3) {
              var e2 = F();
              return this.divRemTo(t3, null, e2), e2;
            }, w.prototype.divideAndRemainder = function _e(t3) {
              var e2 = F(), r3 = F();
              return this.divRemTo(t3, e2, r3), new Array(e2, r3);
            }, w.prototype.modPow = function Se(t3, e2) {
              var r3, n2, i2 = t3.bitLength(), o2 = I(1);
              if (i2 <= 0) return o2;
              r3 = i2 < 18 ? 1 : i2 < 48 ? 3 : i2 < 144 ? 4 : i2 < 768 ? 5 : 6, n2 = i2 < 8 ? new L(e2) : e2.isEven() ? new q(e2) : new N(e2);
              var s2 = new Array(), a2 = 3, u2 = r3 - 1, c2 = (1 << r3) - 1;
              if (s2[1] = n2.convert(this), r3 > 1) {
                var h2 = F();
                for (n2.sqrTo(s2[1], h2); a2 <= c2; ) s2[a2] = F(), n2.mulTo(h2, s2[a2 - 2], s2[a2]), a2 += 2;
              }
              var l2, f2, g2 = t3.t - 1, d2 = true, p2 = F();
              for (i2 = D(t3[g2]) - 1; g2 >= 0; ) {
                for (i2 >= u2 ? l2 = t3[g2] >> i2 - u2 & c2 : (l2 = (t3[g2] & (1 << i2 + 1) - 1) << u2 - i2, g2 > 0 && (l2 |= t3[g2 - 1] >> this.DB + i2 - u2)), a2 = r3; 0 == (1 & l2); ) l2 >>= 1, --a2;
                if ((i2 -= a2) < 0 && (i2 += this.DB, --g2), d2) s2[l2].copyTo(o2), d2 = false;
                else {
                  for (; a2 > 1; ) n2.sqrTo(o2, p2), n2.sqrTo(p2, o2), a2 -= 2;
                  a2 > 0 ? n2.sqrTo(o2, p2) : (f2 = o2, o2 = p2, p2 = f2), n2.mulTo(p2, s2[l2], o2);
                }
                for (; g2 >= 0 && 0 == (t3[g2] & 1 << i2); ) n2.sqrTo(o2, p2), f2 = o2, o2 = p2, p2 = f2, --i2 < 0 && (i2 = this.DB - 1, --g2);
              }
              return n2.revert(o2);
            }, w.prototype.modInverse = function be(t3) {
              var e2 = t3.isEven();
              if (this.isEven() && e2 || 0 == t3.signum()) return w.ZERO;
              for (var r3 = t3.clone(), n2 = this.clone(), i2 = I(1), o2 = I(0), s2 = I(0), a2 = I(1); 0 != r3.signum(); ) {
                for (; r3.isEven(); ) r3.rShiftTo(1, r3), e2 ? (i2.isEven() && o2.isEven() || (i2.addTo(this, i2), o2.subTo(t3, o2)), i2.rShiftTo(1, i2)) : o2.isEven() || o2.subTo(t3, o2), o2.rShiftTo(1, o2);
                for (; n2.isEven(); ) n2.rShiftTo(1, n2), e2 ? (s2.isEven() && a2.isEven() || (s2.addTo(this, s2), a2.subTo(t3, a2)), s2.rShiftTo(1, s2)) : a2.isEven() || a2.subTo(t3, a2), a2.rShiftTo(1, a2);
                r3.compareTo(n2) >= 0 ? (r3.subTo(n2, r3), e2 && i2.subTo(s2, i2), o2.subTo(a2, o2)) : (n2.subTo(r3, n2), e2 && s2.subTo(i2, s2), a2.subTo(o2, a2));
              }
              return 0 != n2.compareTo(w.ONE) ? w.ZERO : a2.compareTo(t3) >= 0 ? a2.subtract(t3) : a2.signum() < 0 ? (a2.addTo(t3, a2), a2.signum() < 0 ? a2.add(t3) : a2) : a2;
            }, w.prototype.pow = function we(t3) {
              return this.exp(t3, new V());
            }, w.prototype.gcd = function Fe(t3) {
              var e2 = this.s < 0 ? this.negate() : this.clone(), r3 = t3.s < 0 ? t3.negate() : t3.clone();
              if (e2.compareTo(r3) < 0) {
                var n2 = e2;
                e2 = r3, r3 = n2;
              }
              var i2 = e2.getLowestSetBit(), o2 = r3.getLowestSetBit();
              if (o2 < 0) return e2;
              for (i2 < o2 && (o2 = i2), o2 > 0 && (e2.rShiftTo(o2, e2), r3.rShiftTo(o2, r3)); e2.signum() > 0; ) (i2 = e2.getLowestSetBit()) > 0 && e2.rShiftTo(i2, e2), (i2 = r3.getLowestSetBit()) > 0 && r3.rShiftTo(i2, r3), e2.compareTo(r3) >= 0 ? (e2.subTo(r3, e2), e2.rShiftTo(1, e2)) : (r3.subTo(e2, r3), r3.rShiftTo(1, r3));
              return o2 > 0 && r3.lShiftTo(o2, r3), r3;
            }, w.prototype.isProbablePrime = function Ee(t3) {
              var e2, r3 = this.abs();
              if (1 == r3.t && r3[0] <= Tt[Tt.length - 1]) {
                for (e2 = 0; e2 < Tt.length; ++e2) if (r3[0] == Tt[e2]) return true;
                return false;
              }
              if (r3.isEven()) return false;
              for (e2 = 1; e2 < Tt.length; ) {
                for (var n2 = Tt[e2], i2 = e2 + 1; i2 < Tt.length && n2 < Rt; ) n2 *= Tt[i2++];
                for (n2 = r3.modInt(n2); e2 < i2; ) if (n2 % Tt[e2++] == 0) return false;
              }
              return r3.millerRabin(t3);
            }, w.prototype.square = function xe() {
              var t3 = F();
              return this.squareTo(t3), t3;
            }, It.prototype.init = function Ae(t3) {
              var e2, r3, n2;
              for (e2 = 0; e2 < 256; ++e2) this.S[e2] = e2;
              for (r3 = 0, e2 = 0; e2 < 256; ++e2) r3 = r3 + this.S[e2] + t3[e2 % t3.length] & 255, n2 = this.S[e2], this.S[e2] = this.S[r3], this.S[r3] = n2;
              this.i = 0, this.j = 0;
            }, It.prototype.next = function ke() {
              var t3;
              return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, t3 = this.S[this.i], this.S[this.i] = this.S[this.j], this.S[this.j] = t3, this.S[t3 + this.S[this.i] & 255];
            };
            var Pe, Ce, Te;
            function Re() {
              !function t3(e2) {
                Ce[Te++] ^= 255 & e2, Ce[Te++] ^= e2 >> 8 & 255, Ce[Te++] ^= e2 >> 16 & 255, Ce[Te++] ^= e2 >> 24 & 255, Te >= 256 && (Te -= 256);
              }((/* @__PURE__ */ new Date()).getTime());
            }
            if (null == Ce) {
              var Ie;
              if (Ce = new Array(), Te = 0, void 0 !== p && (void 0 !== p.crypto || void 0 !== p.msCrypto)) {
                var De = p.crypto || p.msCrypto;
                if (De.getRandomValues) {
                  var Le = new Uint8Array(32);
                  for (De.getRandomValues(Le), Ie = 0; Ie < 32; ++Ie) Ce[Te++] = Le[Ie];
                } else if ("Netscape" == d.appName && d.appVersion < "5") {
                  var Ne = p.crypto.random(32);
                  for (Ie = 0; Ie < Ne.length; ++Ie) Ce[Te++] = 255 & Ne.charCodeAt(Ie);
                }
              }
              for (; Te < 256; ) Ie = Math.floor(65536 * Math.random()), Ce[Te++] = Ie >>> 8, Ce[Te++] = 255 & Ie;
              Te = 0, Re();
            }
            function Ue() {
              if (null == Pe) {
                for (Re(), (Pe = function t3() {
                  return new It();
                }()).init(Ce), Te = 0; Te < Ce.length; ++Te) Ce[Te] = 0;
                Te = 0;
              }
              return Pe.next();
            }
            function Be() {
            }
            function Oe(t3, e2) {
              return new w(t3, e2);
            }
            function je(t3, e2, r3) {
              for (var n2 = "", i2 = 0; n2.length < e2; ) n2 += r3(String.fromCharCode.apply(String, t3.concat([(4278190080 & i2) >> 24, (16711680 & i2) >> 16, (65280 & i2) >> 8, 255 & i2]))), i2 += 1;
              return n2;
            }
            function Me() {
              this.n = null, this.e = 0, this.d = null, this.p = null, this.q = null, this.dmp1 = null, this.dmq1 = null, this.coeff = null;
            }
            function He(t3, e2) {
              this.x = e2, this.q = t3;
            }
            function Ve(t3, e2, r3, n2) {
              this.curve = t3, this.x = e2, this.y = r3, this.z = null == n2 ? w.ONE : n2, this.zinv = null;
            }
            function Ke(t3, e2, r3) {
              this.q = t3, this.a = this.fromBigInteger(e2), this.b = this.fromBigInteger(r3), this.infinity = new Ve(this, null, null);
            }
            Be.prototype.nextBytes = function qe(t3) {
              var e2;
              for (e2 = 0; e2 < t3.length; ++e2) t3[e2] = Ue();
            }, Me.prototype.doPublic = function Je(t3) {
              return t3.modPowInt(this.e, this.n);
            }, Me.prototype.setPublic = function We(t3, e2) {
              if (this.isPublic = true, this.isPrivate = false, "string" != typeof t3) this.n = t3, this.e = e2;
              else {
                if (!(null != t3 && null != e2 && t3.length > 0 && e2.length > 0)) throw "Invalid RSA public key";
                this.n = Oe(t3, 16), this.e = parseInt(e2, 16);
              }
            }, Me.prototype.encrypt = function ze(t3) {
              var e2 = function r3(t4, e3) {
                if (e3 < t4.length + 11) throw "Message too long for RSA";
                for (var r4 = new Array(), n3 = t4.length - 1; n3 >= 0 && e3 > 0; ) {
                  var i3 = t4.charCodeAt(n3--);
                  i3 < 128 ? r4[--e3] = i3 : i3 > 127 && i3 < 2048 ? (r4[--e3] = 63 & i3 | 128, r4[--e3] = i3 >> 6 | 192) : (r4[--e3] = 63 & i3 | 128, r4[--e3] = i3 >> 6 & 63 | 128, r4[--e3] = i3 >> 12 | 224);
                }
                r4[--e3] = 0;
                for (var o2 = new Be(), s2 = new Array(); e3 > 2; ) {
                  for (s2[0] = 0; 0 == s2[0]; ) o2.nextBytes(s2);
                  r4[--e3] = s2[0];
                }
                return r4[--e3] = 2, r4[--e3] = 0, new w(r4);
              }(t3, this.n.bitLength() + 7 >> 3);
              if (null == e2) return null;
              var n2 = this.doPublic(e2);
              if (null == n2) return null;
              var i2 = n2.toString(16);
              return 0 == (1 & i2.length) ? i2 : "0" + i2;
            }, Me.prototype.encryptOAEP = function Ye(t3, e2, r3) {
              var n2 = function i2(t4, e3, r4, n3) {
                var i3 = Sr.crypto.MessageDigest, o3 = Sr.crypto.Util, s3 = null;
                if (r4 || (r4 = "sha1"), "string" == typeof r4 && (s3 = i3.getCanonicalAlgName(r4), n3 = i3.getHashLength(s3), r4 = function t5(e4) {
                  return Lr(o3.hashHex(Nr(e4), s3));
                }), t4.length + 2 * n3 + 2 > e3) throw "Message too long for RSA";
                var a2, u2 = "";
                for (a2 = 0; a2 < e3 - t4.length - 2 * n3 - 2; a2 += 1) u2 += "\0";
                var c2 = r4("") + u2 + "" + t4, h2 = new Array(n3);
                new Be().nextBytes(h2);
                var l2 = je(h2, c2.length, r4), f2 = [];
                for (a2 = 0; a2 < c2.length; a2 += 1) f2[a2] = c2.charCodeAt(a2) ^ l2.charCodeAt(a2);
                var g2 = je(f2, h2.length, r4), d2 = [0];
                for (a2 = 0; a2 < h2.length; a2 += 1) d2[a2 + 1] = h2[a2] ^ g2.charCodeAt(a2);
                return new w(d2.concat(f2));
              }(t3, this.n.bitLength() + 7 >> 3, e2, r3);
              if (null == n2) return null;
              var o2 = this.doPublic(n2);
              if (null == o2) return null;
              var s2 = o2.toString(16);
              return 0 == (1 & s2.length) ? s2 : "0" + s2;
            }, Me.prototype.type = "RSA", He.prototype.equals = function Ge(t3) {
              return t3 == this || this.q.equals(t3.q) && this.x.equals(t3.x);
            }, He.prototype.toBigInteger = function Xe() {
              return this.x;
            }, He.prototype.negate = function $e() {
              return new He(this.q, this.x.negate().mod(this.q));
            }, He.prototype.add = function Qe(t3) {
              return new He(this.q, this.x.add(t3.toBigInteger()).mod(this.q));
            }, He.prototype.subtract = function Ze(t3) {
              return new He(this.q, this.x.subtract(t3.toBigInteger()).mod(this.q));
            }, He.prototype.multiply = function tr(t3) {
              return new He(this.q, this.x.multiply(t3.toBigInteger()).mod(this.q));
            }, He.prototype.square = function er() {
              return new He(this.q, this.x.square().mod(this.q));
            }, He.prototype.divide = function rr(t3) {
              return new He(this.q, this.x.multiply(t3.toBigInteger().modInverse(this.q)).mod(this.q));
            }, Ve.prototype.getX = function nr() {
              return null == this.zinv && (this.zinv = this.z.modInverse(this.curve.q)), this.curve.fromBigInteger(this.x.toBigInteger().multiply(this.zinv).mod(this.curve.q));
            }, Ve.prototype.getY = function ir() {
              return null == this.zinv && (this.zinv = this.z.modInverse(this.curve.q)), this.curve.fromBigInteger(this.y.toBigInteger().multiply(this.zinv).mod(this.curve.q));
            }, Ve.prototype.equals = function or(t3) {
              return t3 == this || (this.isInfinity() ? t3.isInfinity() : t3.isInfinity() ? this.isInfinity() : !!t3.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(t3.z)).mod(this.curve.q).equals(w.ZERO) && t3.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(t3.z)).mod(this.curve.q).equals(w.ZERO));
            }, Ve.prototype.isInfinity = function sr() {
              return null == this.x && null == this.y || this.z.equals(w.ZERO) && !this.y.toBigInteger().equals(w.ZERO);
            }, Ve.prototype.negate = function ar() {
              return new Ve(this.curve, this.x, this.y.negate(), this.z);
            }, Ve.prototype.add = function ur(t3) {
              if (this.isInfinity()) return t3;
              if (t3.isInfinity()) return this;
              var e2 = t3.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(t3.z)).mod(this.curve.q), r3 = t3.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(t3.z)).mod(this.curve.q);
              if (w.ZERO.equals(r3)) return w.ZERO.equals(e2) ? this.twice() : this.curve.getInfinity();
              var n2 = new w("3"), i2 = this.x.toBigInteger(), o2 = this.y.toBigInteger(), s2 = (t3.x.toBigInteger(), t3.y.toBigInteger(), r3.square()), a2 = s2.multiply(r3), u2 = i2.multiply(s2), c2 = e2.square().multiply(this.z), h2 = c2.subtract(u2.shiftLeft(1)).multiply(t3.z).subtract(a2).multiply(r3).mod(this.curve.q), l2 = u2.multiply(n2).multiply(e2).subtract(o2.multiply(a2)).subtract(c2.multiply(e2)).multiply(t3.z).add(e2.multiply(a2)).mod(this.curve.q), f2 = a2.multiply(this.z).multiply(t3.z).mod(this.curve.q);
              return new Ve(this.curve, this.curve.fromBigInteger(h2), this.curve.fromBigInteger(l2), f2);
            }, Ve.prototype.twice = function cr() {
              if (this.isInfinity()) return this;
              if (0 == this.y.toBigInteger().signum()) return this.curve.getInfinity();
              var t3 = new w("3"), e2 = this.x.toBigInteger(), r3 = this.y.toBigInteger(), n2 = r3.multiply(this.z), i2 = n2.multiply(r3).mod(this.curve.q), o2 = this.curve.a.toBigInteger(), s2 = e2.square().multiply(t3);
              w.ZERO.equals(o2) || (s2 = s2.add(this.z.square().multiply(o2)));
              var a2 = (s2 = s2.mod(this.curve.q)).square().subtract(e2.shiftLeft(3).multiply(i2)).shiftLeft(1).multiply(n2).mod(this.curve.q), u2 = s2.multiply(t3).multiply(e2).subtract(i2.shiftLeft(1)).shiftLeft(2).multiply(i2).subtract(s2.square().multiply(s2)).mod(this.curve.q), c2 = n2.square().multiply(n2).shiftLeft(3).mod(this.curve.q);
              return new Ve(this.curve, this.curve.fromBigInteger(a2), this.curve.fromBigInteger(u2), c2);
            }, Ve.prototype.multiply = function hr(t3) {
              if (this.isInfinity()) return this;
              if (0 == t3.signum()) return this.curve.getInfinity();
              var e2, r3 = t3, n2 = r3.multiply(new w("3")), i2 = this.negate(), o2 = this, s2 = this.curve.q.subtract(t3), a2 = s2.multiply(new w("3")), u2 = new Ve(this.curve, this.x, this.y), c2 = u2.negate();
              for (e2 = n2.bitLength() - 2; e2 > 0; --e2) {
                o2 = o2.twice();
                var h2 = n2.testBit(e2);
                h2 != r3.testBit(e2) && (o2 = o2.add(h2 ? this : i2));
              }
              for (e2 = a2.bitLength() - 2; e2 > 0; --e2) {
                u2 = u2.twice();
                var l2 = a2.testBit(e2);
                l2 != s2.testBit(e2) && (u2 = u2.add(l2 ? u2 : c2));
              }
              return o2;
            }, Ve.prototype.multiplyTwo = function lr(t3, e2, r3) {
              var n2;
              n2 = t3.bitLength() > r3.bitLength() ? t3.bitLength() - 1 : r3.bitLength() - 1;
              for (var i2 = this.curve.getInfinity(), o2 = this.add(e2); n2 >= 0; ) i2 = i2.twice(), t3.testBit(n2) ? i2 = r3.testBit(n2) ? i2.add(o2) : i2.add(this) : r3.testBit(n2) && (i2 = i2.add(e2)), --n2;
              return i2;
            }, Ke.prototype.getQ = function fr() {
              return this.q;
            }, Ke.prototype.getA = function gr() {
              return this.a;
            }, Ke.prototype.getB = function dr() {
              return this.b;
            }, Ke.prototype.equals = function pr(t3) {
              return t3 == this || this.q.equals(t3.q) && this.a.equals(t3.a) && this.b.equals(t3.b);
            }, Ke.prototype.getInfinity = function vr() {
              return this.infinity;
            }, Ke.prototype.fromBigInteger = function yr(t3) {
              return new He(this.q, t3);
            }, Ke.prototype.decodePointHex = function mr(t3) {
              switch (parseInt(t3.substr(0, 2), 16)) {
                case 0:
                  return this.infinity;
                case 2:
                case 3:
                  return null;
                case 4:
                case 6:
                case 7:
                  var e2 = (t3.length - 2) / 2, r3 = t3.substr(2, e2), n2 = t3.substr(e2 + 2, e2);
                  return new Ve(this, this.fromBigInteger(new w(r3, 16)), this.fromBigInteger(new w(n2, 16)));
                default:
                  return null;
              }
            }, /*! (c) Stefan Thomas | https://github.com/bitcoinjs/bitcoinjs-lib
             */
            He.prototype.getByteLength = function() {
              return Math.floor((this.toBigInteger().bitLength() + 7) / 8);
            }, Ve.prototype.getEncoded = function(t3) {
              var e2 = function t4(e3, r4) {
                var n3 = e3.toByteArrayUnsigned();
                if (r4 < n3.length) n3 = n3.slice(n3.length - r4);
                else for (; r4 > n3.length; ) n3.unshift(0);
                return n3;
              }, r3 = this.getX().toBigInteger(), n2 = this.getY().toBigInteger(), i2 = e2(r3, 32);
              return t3 ? n2.isEven() ? i2.unshift(2) : i2.unshift(3) : (i2.unshift(4), i2 = i2.concat(e2(n2, 32))), i2;
            }, Ve.decodeFrom = function(t3, e2) {
              e2[0];
              var r3 = e2.length - 1, n2 = e2.slice(1, 1 + r3 / 2), i2 = e2.slice(1 + r3 / 2, 1 + r3);
              n2.unshift(0), i2.unshift(0);
              var o2 = new w(n2), s2 = new w(i2);
              return new Ve(t3, t3.fromBigInteger(o2), t3.fromBigInteger(s2));
            }, Ve.decodeFromHex = function(t3, e2) {
              e2.substr(0, 2);
              var r3 = e2.length - 2, n2 = e2.substr(2, r3 / 2), i2 = e2.substr(2 + r3 / 2, r3 / 2), o2 = new w(n2, 16), s2 = new w(i2, 16);
              return new Ve(t3, t3.fromBigInteger(o2), t3.fromBigInteger(s2));
            }, Ve.prototype.add2D = function(t3) {
              if (this.isInfinity()) return t3;
              if (t3.isInfinity()) return this;
              if (this.x.equals(t3.x)) return this.y.equals(t3.y) ? this.twice() : this.curve.getInfinity();
              var e2 = t3.x.subtract(this.x), r3 = t3.y.subtract(this.y).divide(e2), n2 = r3.square().subtract(this.x).subtract(t3.x), i2 = r3.multiply(this.x.subtract(n2)).subtract(this.y);
              return new Ve(this.curve, n2, i2);
            }, Ve.prototype.twice2D = function() {
              if (this.isInfinity()) return this;
              if (0 == this.y.toBigInteger().signum()) return this.curve.getInfinity();
              var t3 = this.curve.fromBigInteger(w.valueOf(2)), e2 = this.curve.fromBigInteger(w.valueOf(3)), r3 = this.x.square().multiply(e2).add(this.curve.a).divide(this.y.multiply(t3)), n2 = r3.square().subtract(this.x.multiply(t3)), i2 = r3.multiply(this.x.subtract(n2)).subtract(this.y);
              return new Ve(this.curve, n2, i2);
            }, Ve.prototype.multiply2D = function(t3) {
              if (this.isInfinity()) return this;
              if (0 == t3.signum()) return this.curve.getInfinity();
              var e2, r3 = t3, n2 = r3.multiply(new w("3")), i2 = this.negate(), o2 = this;
              for (e2 = n2.bitLength() - 2; e2 > 0; --e2) {
                o2 = o2.twice();
                var s2 = n2.testBit(e2);
                s2 != r3.testBit(e2) && (o2 = o2.add2D(s2 ? this : i2));
              }
              return o2;
            }, Ve.prototype.isOnCurve = function() {
              var t3 = this.getX().toBigInteger(), e2 = this.getY().toBigInteger(), r3 = this.curve.getA().toBigInteger(), n2 = this.curve.getB().toBigInteger(), i2 = this.curve.getQ(), o2 = e2.multiply(e2).mod(i2), s2 = t3.multiply(t3).multiply(t3).add(r3.multiply(t3)).add(n2).mod(i2);
              return o2.equals(s2);
            }, Ve.prototype.toString = function() {
              return "(" + this.getX().toBigInteger().toString() + "," + this.getY().toBigInteger().toString() + ")";
            }, Ve.prototype.validate = function() {
              var t3 = this.curve.getQ();
              if (this.isInfinity()) throw new Error("Point is at infinity.");
              var e2 = this.getX().toBigInteger(), r3 = this.getY().toBigInteger();
              if (e2.compareTo(w.ONE) < 0 || e2.compareTo(t3.subtract(w.ONE)) > 0) throw new Error("x coordinate out of bounds");
              if (r3.compareTo(w.ONE) < 0 || r3.compareTo(t3.subtract(w.ONE)) > 0) throw new Error("y coordinate out of bounds");
              if (!this.isOnCurve()) throw new Error("Point is not on the curve.");
              if (this.multiply(t3).isInfinity()) throw new Error("Point is not a scalar multiple of G.");
              return true;
            };
            var _r = function() {
              var t3 = new RegExp('(?:false|true|null|[\\{\\}\\[\\]]|(?:-?\\b(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?(?:[eE][+-]?[0-9]+)?\\b)|(?:"(?:[^\\0-\\x08\\x0a-\\x1f"\\\\]|\\\\(?:["/\\\\bfnrt]|u[0-9A-Fa-f]{4}))*"))', "g"), e2 = new RegExp("\\\\(?:([^u])|u(.{4}))", "g"), r3 = { '"': '"', "/": "/", "\\": "\\", b: "\b", f: "\f", n: "\n", r: "\r", t: "	" };
              function n2(t4, e3, n3) {
                return e3 ? r3[e3] : String.fromCharCode(parseInt(n3, 16));
              }
              var i2 = new String(""), o2 = Object.hasOwnProperty;
              return function(r4, s2) {
                var a2, u2, c2 = r4.match(t3), h2 = c2[0], l2 = false;
                "{" === h2 ? a2 = {} : "[" === h2 ? a2 = [] : (a2 = [], l2 = true);
                for (var f2 = [a2], d2 = 1 - l2, p2 = c2.length; d2 < p2; ++d2) {
                  var v2;
                  switch ((h2 = c2[d2]).charCodeAt(0)) {
                    default:
                      (v2 = f2[0])[u2 || v2.length] = +h2, u2 = void 0;
                      break;
                    case 34:
                      if (-1 !== (h2 = h2.substring(1, h2.length - 1)).indexOf("\\") && (h2 = h2.replace(e2, n2)), v2 = f2[0], !u2) {
                        if (!(v2 instanceof Array)) {
                          u2 = h2 || i2;
                          break;
                        }
                        u2 = v2.length;
                      }
                      v2[u2] = h2, u2 = void 0;
                      break;
                    case 91:
                      v2 = f2[0], f2.unshift(v2[u2 || v2.length] = []), u2 = void 0;
                      break;
                    case 93:
                      f2.shift();
                      break;
                    case 102:
                      (v2 = f2[0])[u2 || v2.length] = false, u2 = void 0;
                      break;
                    case 110:
                      (v2 = f2[0])[u2 || v2.length] = null, u2 = void 0;
                      break;
                    case 116:
                      (v2 = f2[0])[u2 || v2.length] = true, u2 = void 0;
                      break;
                    case 123:
                      v2 = f2[0], f2.unshift(v2[u2 || v2.length] = {}), u2 = void 0;
                      break;
                    case 125:
                      f2.shift();
                  }
                }
                if (l2) {
                  if (1 !== f2.length) throw new Error();
                  a2 = a2[0];
                } else if (f2.length) throw new Error();
                if (s2) {
                  a2 = function t4(e3, r5) {
                    var n3 = e3[r5];
                    if (n3 && "object" === (void 0 === n3 ? "undefined" : g(n3))) {
                      var i3 = null;
                      for (var a3 in n3) if (o2.call(n3, a3) && n3 !== e3) {
                        var u3 = t4(n3, a3);
                        void 0 !== u3 ? n3[a3] = u3 : (i3 || (i3 = []), i3.push(a3));
                      }
                      if (i3) for (var c3 = i3.length; --c3 >= 0; ) delete n3[i3[c3]];
                    }
                    return s2.call(e3, r5, n3);
                  }({ "": a2 }, "");
                }
                return a2;
              };
            }();
            void 0 !== Sr && Sr || (e.KJUR = Sr = {}), void 0 !== Sr.asn1 && Sr.asn1 || (Sr.asn1 = {}), Sr.asn1.ASN1Util = new function() {
              this.integerToByteHex = function(t3) {
                var e2 = t3.toString(16);
                return e2.length % 2 == 1 && (e2 = "0" + e2), e2;
              }, this.bigIntToMinTwosComplementsHex = function(t3) {
                var e2 = t3.toString(16);
                if ("-" != e2.substr(0, 1)) e2.length % 2 == 1 ? e2 = "0" + e2 : e2.match(/^[0-7]/) || (e2 = "00" + e2);
                else {
                  var r3 = e2.substr(1).length;
                  r3 % 2 == 1 ? r3 += 1 : e2.match(/^[0-7]/) || (r3 += 2);
                  for (var n2 = "", i2 = 0; i2 < r3; i2++) n2 += "f";
                  e2 = new w(n2, 16).xor(t3).add(w.ONE).toString(16).replace(/^-/, "");
                }
                return e2;
              }, this.getPEMStringFromHex = function(t3, e2) {
                return jr(t3, e2);
              }, this.newObject = function(t3) {
                var e2 = Sr.asn1, r3 = e2.ASN1Object, n2 = e2.DERBoolean, i2 = e2.DERInteger, o2 = e2.DERBitString, s2 = e2.DEROctetString, a2 = e2.DERNull, u2 = e2.DERObjectIdentifier, c2 = e2.DEREnumerated, h2 = e2.DERUTF8String, l2 = e2.DERNumericString, f2 = e2.DERPrintableString, g2 = e2.DERTeletexString, d2 = e2.DERIA5String, p2 = e2.DERUTCTime, v2 = e2.DERGeneralizedTime, y2 = e2.DERVisibleString, m2 = e2.DERBMPString, _2 = e2.DERSequence, S2 = e2.DERSet, b2 = e2.DERTaggedObject, w2 = e2.ASN1Util.newObject;
                if (t3 instanceof e2.ASN1Object) return t3;
                var F2 = Object.keys(t3);
                if (1 != F2.length) throw new Error("key of param shall be only one.");
                var E = F2[0];
                if (-1 == ":asn1:bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:visstr:bmpstr:seq:set:tag:".indexOf(":" + E + ":")) throw new Error("undefined key: " + E);
                if ("bool" == E) return new n2(t3[E]);
                if ("int" == E) return new i2(t3[E]);
                if ("bitstr" == E) return new o2(t3[E]);
                if ("octstr" == E) return new s2(t3[E]);
                if ("null" == E) return new a2(t3[E]);
                if ("oid" == E) return new u2(t3[E]);
                if ("enum" == E) return new c2(t3[E]);
                if ("utf8str" == E) return new h2(t3[E]);
                if ("numstr" == E) return new l2(t3[E]);
                if ("prnstr" == E) return new f2(t3[E]);
                if ("telstr" == E) return new g2(t3[E]);
                if ("ia5str" == E) return new d2(t3[E]);
                if ("utctime" == E) return new p2(t3[E]);
                if ("gentime" == E) return new v2(t3[E]);
                if ("visstr" == E) return new y2(t3[E]);
                if ("bmpstr" == E) return new m2(t3[E]);
                if ("asn1" == E) return new r3(t3[E]);
                if ("seq" == E) {
                  for (var x = t3[E], A = [], k2 = 0; k2 < x.length; k2++) {
                    var P2 = w2(x[k2]);
                    A.push(P2);
                  }
                  return new _2({ array: A });
                }
                if ("set" == E) {
                  for (x = t3[E], A = [], k2 = 0; k2 < x.length; k2++) {
                    P2 = w2(x[k2]);
                    A.push(P2);
                  }
                  return new S2({ array: A });
                }
                if ("tag" == E) {
                  var C2 = t3[E];
                  if ("[object Array]" === Object.prototype.toString.call(C2) && 3 == C2.length) {
                    var T2 = w2(C2[2]);
                    return new b2({ tag: C2[0], explicit: C2[1], obj: T2 });
                  }
                  return new b2(C2);
                }
              }, this.jsonToASN1HEX = function(t3) {
                return this.newObject(t3).getEncodedHex();
              };
            }(), Sr.asn1.ASN1Util.oidHexToInt = function(t3) {
              for (var e2 = "", r3 = parseInt(t3.substr(0, 2), 16), n2 = (e2 = Math.floor(r3 / 40) + "." + r3 % 40, ""), i2 = 2; i2 < t3.length; i2 += 2) {
                var o2 = ("00000000" + parseInt(t3.substr(i2, 2), 16).toString(2)).slice(-8);
                if (n2 += o2.substr(1, 7), "0" == o2.substr(0, 1)) e2 = e2 + "." + new w(n2, 2).toString(10), n2 = "";
              }
              return e2;
            }, Sr.asn1.ASN1Util.oidIntToHex = function(t3) {
              var e2 = function t4(e3) {
                var r4 = e3.toString(16);
                return 1 == r4.length && (r4 = "0" + r4), r4;
              }, r3 = function t4(r4) {
                var n3 = "", i3 = new w(r4, 10).toString(2), o3 = 7 - i3.length % 7;
                7 == o3 && (o3 = 0);
                for (var s3 = "", a2 = 0; a2 < o3; a2++) s3 += "0";
                i3 = s3 + i3;
                for (a2 = 0; a2 < i3.length - 1; a2 += 7) {
                  var u2 = i3.substr(a2, 7);
                  a2 != i3.length - 7 && (u2 = "1" + u2), n3 += e2(parseInt(u2, 2));
                }
                return n3;
              };
              if (!t3.match(/^[0-9.]+$/)) throw "malformed oid string: " + t3;
              var n2 = "", i2 = t3.split("."), o2 = 40 * parseInt(i2[0]) + parseInt(i2[1]);
              n2 += e2(o2), i2.splice(0, 2);
              for (var s2 = 0; s2 < i2.length; s2++) n2 += r3(i2[s2]);
              return n2;
            }, Sr.asn1.ASN1Object = function(t3) {
              this.params = null, this.getLengthHexFromValue = function() {
                if (void 0 === this.hV || null == this.hV) throw new Error("this.hV is null or undefined");
                if (this.hV.length % 2 == 1) throw new Error("value hex must be even length: n=" + "".length + ",v=" + this.hV);
                var t4 = this.hV.length / 2, e2 = t4.toString(16);
                if (e2.length % 2 == 1 && (e2 = "0" + e2), t4 < 128) return e2;
                var r3 = e2.length / 2;
                if (r3 > 15) throw "ASN.1 length too long to represent by 8x: n = " + t4.toString(16);
                return (128 + r3).toString(16) + e2;
              }, this.getEncodedHex = function() {
                return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(), this.hL = this.getLengthHexFromValue(), this.hTLV = this.hT + this.hL + this.hV, this.isModified = false), this.hTLV;
              }, this.getValueHex = function() {
                return this.getEncodedHex(), this.hV;
              }, this.getFreshValueHex = function() {
                return "";
              }, this.setByParam = function(t4) {
                this.params = t4;
              }, null != t3 && null != t3.tlv && (this.hTLV = t3.tlv, this.isModified = false);
            }, Sr.asn1.DERAbstractString = function(t3) {
              Sr.asn1.DERAbstractString.superclass.constructor.call(this);
              this.getString = function() {
                return this.s;
              }, this.setString = function(t4) {
                this.hTLV = null, this.isModified = true, this.s = t4, this.hV = Ir(this.s).toLowerCase();
              }, this.setStringHex = function(t4) {
                this.hTLV = null, this.isModified = true, this.s = null, this.hV = t4;
              }, this.getFreshValueHex = function() {
                return this.hV;
              }, void 0 !== t3 && ("string" == typeof t3 ? this.setString(t3) : void 0 !== t3.str ? this.setString(t3.str) : void 0 !== t3.hex && this.setStringHex(t3.hex));
            }, Zr(Sr.asn1.DERAbstractString, Sr.asn1.ASN1Object), Sr.asn1.DERAbstractTime = function(t3) {
              Sr.asn1.DERAbstractTime.superclass.constructor.call(this);
              this.localDateToUTC = function(t4) {
                var e2 = t4.getTime() + 6e4 * t4.getTimezoneOffset();
                return new Date(e2);
              }, this.formatDate = function(t4, e2, r3) {
                var n2 = this.zeroPadding, i2 = this.localDateToUTC(t4), o2 = String(i2.getFullYear());
                "utc" == e2 && (o2 = o2.substr(2, 2));
                var s2 = o2 + n2(String(i2.getMonth() + 1), 2) + n2(String(i2.getDate()), 2) + n2(String(i2.getHours()), 2) + n2(String(i2.getMinutes()), 2) + n2(String(i2.getSeconds()), 2);
                if (true === r3) {
                  var a2 = i2.getMilliseconds();
                  if (0 != a2) {
                    var u2 = n2(String(a2), 3);
                    s2 = s2 + "." + (u2 = u2.replace(/[0]+$/, ""));
                  }
                }
                return s2 + "Z";
              }, this.zeroPadding = function(t4, e2) {
                return t4.length >= e2 ? t4 : new Array(e2 - t4.length + 1).join("0") + t4;
              }, this.getString = function() {
                return this.s;
              }, this.setString = function(t4) {
                this.hTLV = null, this.isModified = true, this.s = t4, this.hV = kr(t4);
              }, this.setByDateValue = function(t4, e2, r3, n2, i2, o2) {
                var s2 = new Date(Date.UTC(t4, e2 - 1, r3, n2, i2, o2, 0));
                this.setByDate(s2);
              }, this.getFreshValueHex = function() {
                return this.hV;
              };
            }, Zr(Sr.asn1.DERAbstractTime, Sr.asn1.ASN1Object), Sr.asn1.DERAbstractStructured = function(t3) {
              Sr.asn1.DERAbstractString.superclass.constructor.call(this);
              this.setByASN1ObjectArray = function(t4) {
                this.hTLV = null, this.isModified = true, this.asn1Array = t4;
              }, this.appendASN1Object = function(t4) {
                this.hTLV = null, this.isModified = true, this.asn1Array.push(t4);
              }, this.asn1Array = new Array(), void 0 !== t3 && void 0 !== t3.array && (this.asn1Array = t3.array);
            }, Zr(Sr.asn1.DERAbstractStructured, Sr.asn1.ASN1Object), Sr.asn1.DERBoolean = function(t3) {
              Sr.asn1.DERBoolean.superclass.constructor.call(this), this.hT = "01", this.hTLV = 0 == t3 ? "010100" : "0101ff";
            }, Zr(Sr.asn1.DERBoolean, Sr.asn1.ASN1Object), Sr.asn1.DERInteger = function(t3) {
              Sr.asn1.DERInteger.superclass.constructor.call(this), this.hT = "02", this.setByBigInteger = function(t4) {
                this.hTLV = null, this.isModified = true, this.hV = Sr.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t4);
              }, this.setByInteger = function(t4) {
                var e2 = new w(String(t4), 10);
                this.setByBigInteger(e2);
              }, this.setValueHex = function(t4) {
                this.hV = t4;
              }, this.getFreshValueHex = function() {
                return this.hV;
              }, void 0 !== t3 && (void 0 !== t3.bigint ? this.setByBigInteger(t3.bigint) : void 0 !== t3.int ? this.setByInteger(t3.int) : "number" == typeof t3 ? this.setByInteger(t3) : void 0 !== t3.hex && this.setValueHex(t3.hex));
            }, Zr(Sr.asn1.DERInteger, Sr.asn1.ASN1Object), Sr.asn1.DERBitString = function(t3) {
              if (void 0 !== t3 && void 0 !== t3.obj) {
                var e2 = Sr.asn1.ASN1Util.newObject(t3.obj);
                t3.hex = "00" + e2.getEncodedHex();
              }
              Sr.asn1.DERBitString.superclass.constructor.call(this), this.hT = "03", this.setHexValueIncludingUnusedBits = function(t4) {
                this.hTLV = null, this.isModified = true, this.hV = t4;
              }, this.setUnusedBitsAndHexValue = function(t4, e3) {
                if (t4 < 0 || 7 < t4) throw "unused bits shall be from 0 to 7: u = " + t4;
                var r3 = "0" + t4;
                this.hTLV = null, this.isModified = true, this.hV = r3 + e3;
              }, this.setByBinaryString = function(t4) {
                var e3 = 8 - (t4 = t4.replace(/0+$/, "")).length % 8;
                8 == e3 && (e3 = 0);
                for (var r3 = 0; r3 <= e3; r3++) t4 += "0";
                var n2 = "";
                for (r3 = 0; r3 < t4.length - 1; r3 += 8) {
                  var i2 = t4.substr(r3, 8), o2 = parseInt(i2, 2).toString(16);
                  1 == o2.length && (o2 = "0" + o2), n2 += o2;
                }
                this.hTLV = null, this.isModified = true, this.hV = "0" + e3 + n2;
              }, this.setByBooleanArray = function(t4) {
                for (var e3 = "", r3 = 0; r3 < t4.length; r3++) 1 == t4[r3] ? e3 += "1" : e3 += "0";
                this.setByBinaryString(e3);
              }, this.newFalseArray = function(t4) {
                for (var e3 = new Array(t4), r3 = 0; r3 < t4; r3++) e3[r3] = false;
                return e3;
              }, this.getFreshValueHex = function() {
                return this.hV;
              }, void 0 !== t3 && ("string" == typeof t3 && t3.toLowerCase().match(/^[0-9a-f]+$/) ? this.setHexValueIncludingUnusedBits(t3) : void 0 !== t3.hex ? this.setHexValueIncludingUnusedBits(t3.hex) : void 0 !== t3.bin ? this.setByBinaryString(t3.bin) : void 0 !== t3.array && this.setByBooleanArray(t3.array));
            }, Zr(Sr.asn1.DERBitString, Sr.asn1.ASN1Object), Sr.asn1.DEROctetString = function(t3) {
              if (void 0 !== t3 && void 0 !== t3.obj) {
                var e2 = Sr.asn1.ASN1Util.newObject(t3.obj);
                t3.hex = e2.getEncodedHex();
              }
              Sr.asn1.DEROctetString.superclass.constructor.call(this, t3), this.hT = "04";
            }, Zr(Sr.asn1.DEROctetString, Sr.asn1.DERAbstractString), Sr.asn1.DERNull = function() {
              Sr.asn1.DERNull.superclass.constructor.call(this), this.hT = "05", this.hTLV = "0500";
            }, Zr(Sr.asn1.DERNull, Sr.asn1.ASN1Object), Sr.asn1.DERObjectIdentifier = function(t3) {
              Sr.asn1.DERObjectIdentifier.superclass.constructor.call(this), this.hT = "06", this.setValueHex = function(t4) {
                this.hTLV = null, this.isModified = true, this.s = null, this.hV = t4;
              }, this.setValueOidString = function(t4) {
                var e2 = function r3(t5) {
                  var e3 = function t6(e4) {
                    var r5 = e4.toString(16);
                    return 1 == r5.length && (r5 = "0" + r5), r5;
                  }, r4 = function t6(r5) {
                    var n3 = "", i3 = parseInt(r5, 10).toString(2), o3 = 7 - i3.length % 7;
                    7 == o3 && (o3 = 0);
                    for (var s3 = "", a2 = 0; a2 < o3; a2++) s3 += "0";
                    i3 = s3 + i3;
                    for (a2 = 0; a2 < i3.length - 1; a2 += 7) {
                      var u2 = i3.substr(a2, 7);
                      a2 != i3.length - 7 && (u2 = "1" + u2), n3 += e3(parseInt(u2, 2));
                    }
                    return n3;
                  };
                  try {
                    if (!t5.match(/^[0-9.]+$/)) return null;
                    var n2 = "", i2 = t5.split("."), o2 = 40 * parseInt(i2[0], 10) + parseInt(i2[1], 10);
                    n2 += e3(o2), i2.splice(0, 2);
                    for (var s2 = 0; s2 < i2.length; s2++) n2 += r4(i2[s2]);
                    return n2;
                  } catch (t6) {
                    return null;
                  }
                }(t4);
                if (null == e2) throw new Error("malformed oid string: " + t4);
                this.hTLV = null, this.isModified = true, this.s = null, this.hV = e2;
              }, this.setValueName = function(t4) {
                var e2 = Sr.asn1.x509.OID.name2oid(t4);
                if ("" === e2) throw new Error("DERObjectIdentifier oidName undefined: " + t4);
                this.setValueOidString(e2);
              }, this.setValueNameOrOid = function(t4) {
                t4.match(/^[0-2].[0-9.]+$/) ? this.setValueOidString(t4) : this.setValueName(t4);
              }, this.getFreshValueHex = function() {
                return this.hV;
              }, this.setByParam = function(t4) {
                "string" == typeof t4 ? this.setValueNameOrOid(t4) : void 0 !== t4.oid ? this.setValueNameOrOid(t4.oid) : void 0 !== t4.name ? this.setValueNameOrOid(t4.name) : void 0 !== t4.hex && this.setValueHex(t4.hex);
              }, void 0 !== t3 && this.setByParam(t3);
            }, Zr(Sr.asn1.DERObjectIdentifier, Sr.asn1.ASN1Object), Sr.asn1.DEREnumerated = function(t3) {
              Sr.asn1.DEREnumerated.superclass.constructor.call(this), this.hT = "0a", this.setByBigInteger = function(t4) {
                this.hTLV = null, this.isModified = true, this.hV = Sr.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t4);
              }, this.setByInteger = function(t4) {
                var e2 = new w(String(t4), 10);
                this.setByBigInteger(e2);
              }, this.setValueHex = function(t4) {
                this.hV = t4;
              }, this.getFreshValueHex = function() {
                return this.hV;
              }, void 0 !== t3 && (void 0 !== t3.int ? this.setByInteger(t3.int) : "number" == typeof t3 ? this.setByInteger(t3) : void 0 !== t3.hex && this.setValueHex(t3.hex));
            }, Zr(Sr.asn1.DEREnumerated, Sr.asn1.ASN1Object), Sr.asn1.DERUTF8String = function(t3) {
              Sr.asn1.DERUTF8String.superclass.constructor.call(this, t3), this.hT = "0c";
            }, Zr(Sr.asn1.DERUTF8String, Sr.asn1.DERAbstractString), Sr.asn1.DERNumericString = function(t3) {
              Sr.asn1.DERNumericString.superclass.constructor.call(this, t3), this.hT = "12";
            }, Zr(Sr.asn1.DERNumericString, Sr.asn1.DERAbstractString), Sr.asn1.DERPrintableString = function(t3) {
              Sr.asn1.DERPrintableString.superclass.constructor.call(this, t3), this.hT = "13";
            }, Zr(Sr.asn1.DERPrintableString, Sr.asn1.DERAbstractString), Sr.asn1.DERTeletexString = function(t3) {
              Sr.asn1.DERTeletexString.superclass.constructor.call(this, t3), this.hT = "14";
            }, Zr(Sr.asn1.DERTeletexString, Sr.asn1.DERAbstractString), Sr.asn1.DERIA5String = function(t3) {
              Sr.asn1.DERIA5String.superclass.constructor.call(this, t3), this.hT = "16";
            }, Zr(Sr.asn1.DERIA5String, Sr.asn1.DERAbstractString), Sr.asn1.DERVisibleString = function(t3) {
              Sr.asn1.DERIA5String.superclass.constructor.call(this, t3), this.hT = "1a";
            }, Zr(Sr.asn1.DERVisibleString, Sr.asn1.DERAbstractString), Sr.asn1.DERBMPString = function(t3) {
              Sr.asn1.DERBMPString.superclass.constructor.call(this, t3), this.hT = "1e";
            }, Zr(Sr.asn1.DERBMPString, Sr.asn1.DERAbstractString), Sr.asn1.DERUTCTime = function(t3) {
              Sr.asn1.DERUTCTime.superclass.constructor.call(this, t3), this.hT = "17", this.setByDate = function(t4) {
                this.hTLV = null, this.isModified = true, this.date = t4, this.s = this.formatDate(this.date, "utc"), this.hV = kr(this.s);
              }, this.getFreshValueHex = function() {
                return void 0 === this.date && void 0 === this.s && (this.date = /* @__PURE__ */ new Date(), this.s = this.formatDate(this.date, "utc"), this.hV = kr(this.s)), this.hV;
              }, void 0 !== t3 && (void 0 !== t3.str ? this.setString(t3.str) : "string" == typeof t3 && t3.match(/^[0-9]{12}Z$/) ? this.setString(t3) : void 0 !== t3.hex ? this.setStringHex(t3.hex) : void 0 !== t3.date && this.setByDate(t3.date));
            }, Zr(Sr.asn1.DERUTCTime, Sr.asn1.DERAbstractTime), Sr.asn1.DERGeneralizedTime = function(t3) {
              Sr.asn1.DERGeneralizedTime.superclass.constructor.call(this, t3), this.hT = "18", this.withMillis = false, this.setByDate = function(t4) {
                this.hTLV = null, this.isModified = true, this.date = t4, this.s = this.formatDate(this.date, "gen", this.withMillis), this.hV = kr(this.s);
              }, this.getFreshValueHex = function() {
                return void 0 === this.date && void 0 === this.s && (this.date = /* @__PURE__ */ new Date(), this.s = this.formatDate(this.date, "gen", this.withMillis), this.hV = kr(this.s)), this.hV;
              }, void 0 !== t3 && (void 0 !== t3.str ? this.setString(t3.str) : "string" == typeof t3 && t3.match(/^[0-9]{14}Z$/) ? this.setString(t3) : void 0 !== t3.hex ? this.setStringHex(t3.hex) : void 0 !== t3.date && this.setByDate(t3.date), true === t3.millis && (this.withMillis = true));
            }, Zr(Sr.asn1.DERGeneralizedTime, Sr.asn1.DERAbstractTime), Sr.asn1.DERSequence = function(t3) {
              Sr.asn1.DERSequence.superclass.constructor.call(this, t3), this.hT = "30", this.getFreshValueHex = function() {
                for (var t4 = "", e2 = 0; e2 < this.asn1Array.length; e2++) {
                  t4 += this.asn1Array[e2].getEncodedHex();
                }
                return this.hV = t4, this.hV;
              };
            }, Zr(Sr.asn1.DERSequence, Sr.asn1.DERAbstractStructured), Sr.asn1.DERSet = function(t3) {
              Sr.asn1.DERSet.superclass.constructor.call(this, t3), this.hT = "31", this.sortFlag = true, this.getFreshValueHex = function() {
                for (var t4 = new Array(), e2 = 0; e2 < this.asn1Array.length; e2++) {
                  var r3 = this.asn1Array[e2];
                  t4.push(r3.getEncodedHex());
                }
                return 1 == this.sortFlag && t4.sort(), this.hV = t4.join(""), this.hV;
              }, void 0 !== t3 && void 0 !== t3.sortflag && 0 == t3.sortflag && (this.sortFlag = false);
            }, Zr(Sr.asn1.DERSet, Sr.asn1.DERAbstractStructured), Sr.asn1.DERTaggedObject = function(t3) {
              Sr.asn1.DERTaggedObject.superclass.constructor.call(this);
              var e2 = Sr.asn1;
              this.hT = "a0", this.hV = "", this.isExplicit = true, this.asn1Object = null, this.setASN1Object = function(t4, e3, r3) {
                this.hT = e3, this.isExplicit = t4, this.asn1Object = r3, this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(), this.hTLV = null, this.isModified = true) : (this.hV = null, this.hTLV = r3.getEncodedHex(), this.hTLV = this.hTLV.replace(/^../, e3), this.isModified = false);
              }, this.getFreshValueHex = function() {
                return this.hV;
              }, this.setByParam = function(t4) {
                null != t4.tag && (this.hT = t4.tag), null != t4.explicit && (this.isExplicit = t4.explicit), null != t4.tage && (this.hT = t4.tage, this.isExplicit = true), null != t4.tagi && (this.hT = t4.tagi, this.isExplicit = false), null != t4.obj && (t4.obj instanceof e2.ASN1Object ? (this.asn1Object = t4.obj, this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)) : "object" == g(t4.obj) && (this.asn1Object = e2.ASN1Util.newObject(t4.obj), this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)));
              }, null != t3 && this.setByParam(t3);
            }, Zr(Sr.asn1.DERTaggedObject, Sr.asn1.ASN1Object);
            var Sr, br, wr, Fr = new function() {
            }();
            function Er(t3) {
              for (var e2 = new Array(), r3 = 0; r3 < t3.length; r3++) e2[r3] = t3.charCodeAt(r3);
              return e2;
            }
            function xr(t3) {
              for (var e2 = "", r3 = 0; r3 < t3.length; r3++) e2 += String.fromCharCode(t3[r3]);
              return e2;
            }
            function Ar(t3) {
              for (var e2 = "", r3 = 0; r3 < t3.length; r3++) {
                var n2 = t3[r3].toString(16);
                1 == n2.length && (n2 = "0" + n2), e2 += n2;
              }
              return e2;
            }
            function kr(t3) {
              return Ar(Er(t3));
            }
            function Pr(t3) {
              return t3 = (t3 = (t3 = t3.replace(/\=/g, "")).replace(/\+/g, "-")).replace(/\//g, "_");
            }
            function Cr(t3) {
              return t3.length % 4 == 2 ? t3 += "==" : t3.length % 4 == 3 && (t3 += "="), t3 = (t3 = t3.replace(/-/g, "+")).replace(/_/g, "/");
            }
            function Tr(t3) {
              return t3.length % 2 == 1 && (t3 = "0" + t3), Pr(_(t3));
            }
            function Rr(t3) {
              return S(Cr(t3));
            }
            function Ir(t3) {
              return Kr(Gr(t3));
            }
            function Dr(t3) {
              return decodeURIComponent(qr(t3));
            }
            function Lr(t3) {
              for (var e2 = "", r3 = 0; r3 < t3.length - 1; r3 += 2) e2 += String.fromCharCode(parseInt(t3.substr(r3, 2), 16));
              return e2;
            }
            function Nr(t3) {
              for (var e2 = "", r3 = 0; r3 < t3.length; r3++) e2 += ("0" + t3.charCodeAt(r3).toString(16)).slice(-2);
              return e2;
            }
            function Ur(t3) {
              return _(t3);
            }
            function Br(t3) {
              var e2 = Ur(t3).replace(/(.{64})/g, "$1\r\n");
              return e2 = e2.replace(/\r\n$/, "");
            }
            function Or(t3) {
              return S(t3.replace(/[^0-9A-Za-z\/+=]*/g, ""));
            }
            function jr(t3, e2) {
              return "-----BEGIN " + e2 + "-----\r\n" + Br(t3) + "\r\n-----END " + e2 + "-----\r\n";
            }
            function Mr(t3, e2) {
              if (-1 == t3.indexOf("-----BEGIN ")) throw "can't find PEM header: " + e2;
              return Or(t3 = void 0 !== e2 ? (t3 = t3.replace(new RegExp("^[^]*-----BEGIN " + e2 + "-----"), "")).replace(new RegExp("-----END " + e2 + "-----[^]*$"), "") : (t3 = t3.replace(/^[^]*-----BEGIN [^-]+-----/, "")).replace(/-----END [^-]+-----[^]*$/, ""));
            }
            function Hr(t3) {
              var e2, r3, n2, i2, o2, s2, a2, u2, c2, h2, l2;
              if (l2 = t3.match(/^(\d{2}|\d{4})(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)(|\.\d+)Z$/)) return u2 = l2[1], e2 = parseInt(u2), 2 === u2.length && (50 <= e2 && e2 < 100 ? e2 = 1900 + e2 : 0 <= e2 && e2 < 50 && (e2 = 2e3 + e2)), r3 = parseInt(l2[2]) - 1, n2 = parseInt(l2[3]), i2 = parseInt(l2[4]), o2 = parseInt(l2[5]), s2 = parseInt(l2[6]), a2 = 0, "" !== (c2 = l2[7]) && (h2 = (c2.substr(1) + "00").substr(0, 3), a2 = parseInt(h2)), Date.UTC(e2, r3, n2, i2, o2, s2, a2);
              throw "unsupported zulu format: " + t3;
            }
            function Vr(t3) {
              return ~~(Hr(t3) / 1e3);
            }
            function Kr(t3) {
              return t3.replace(/%/g, "");
            }
            function qr(t3) {
              return t3.replace(/(..)/g, "%$1");
            }
            function Jr(t3) {
              var e2 = "malformed IPv6 address";
              if (!t3.match(/^[0-9A-Fa-f:]+$/)) throw e2;
              var r3 = (t3 = t3.toLowerCase()).split(":").length - 1;
              if (r3 < 2) throw e2;
              var n2 = ":".repeat(7 - r3 + 2), i2 = (t3 = t3.replace("::", n2)).split(":");
              if (8 != i2.length) throw e2;
              for (var o2 = 0; o2 < 8; o2++) i2[o2] = ("0000" + i2[o2]).slice(-4);
              return i2.join("");
            }
            function Wr(t3) {
              if (!t3.match(/^[0-9A-Fa-f]{32}$/)) throw "malformed IPv6 address octet";
              for (var e2 = (t3 = t3.toLowerCase()).match(/.{1,4}/g), r3 = 0; r3 < 8; r3++) e2[r3] = e2[r3].replace(/^0+/, ""), "" == e2[r3] && (e2[r3] = "0");
              var n2 = (t3 = ":" + e2.join(":") + ":").match(/:(0:){2,}/g);
              if (null === n2) return t3.slice(1, -1);
              var i2 = "";
              for (r3 = 0; r3 < n2.length; r3++) n2[r3].length > i2.length && (i2 = n2[r3]);
              return (t3 = t3.replace(i2, "::")).slice(1, -1);
            }
            function zr(t3) {
              var e2 = "malformed hex value";
              if (!t3.match(/^([0-9A-Fa-f][0-9A-Fa-f]){1,}$/)) throw e2;
              if (8 != t3.length) return 32 == t3.length ? Wr(t3) : t3;
              try {
                return parseInt(t3.substr(0, 2), 16) + "." + parseInt(t3.substr(2, 2), 16) + "." + parseInt(t3.substr(4, 2), 16) + "." + parseInt(t3.substr(6, 2), 16);
              } catch (t4) {
                throw e2;
              }
            }
            function Yr(t3) {
              return t3.match(/.{4}/g).map(function e2(t4) {
                var e3 = parseInt(t4.substr(0, 2), 16), r3 = parseInt(t4.substr(2), 16);
                if (0 == e3 & r3 < 128) return String.fromCharCode(r3);
                if (e3 < 8) {
                  var n2 = 128 | 63 & r3;
                  return Dr((192 | (7 & e3) << 3 | (192 & r3) >> 6).toString(16) + n2.toString(16));
                }
                n2 = 128 | (15 & e3) << 2 | (192 & r3) >> 6;
                var i2 = 128 | 63 & r3;
                return Dr((224 | (240 & e3) >> 4).toString(16) + n2.toString(16) + i2.toString(16));
              }).join("");
            }
            function Gr(t3) {
              for (var e2 = encodeURIComponent(t3), r3 = "", n2 = 0; n2 < e2.length; n2++) "%" == e2[n2] ? (r3 += e2.substr(n2, 3), n2 += 2) : r3 = r3 + "%" + kr(e2[n2]);
              return r3;
            }
            function Xr(t3) {
              return !(t3.length % 2 != 0 || !t3.match(/^[0-9a-f]+$/) && !t3.match(/^[0-9A-F]+$/));
            }
            function $r(t3) {
              return t3.length % 2 == 1 ? "0" + t3 : t3.substr(0, 1) > "7" ? "00" + t3 : t3;
            }
            Fr.getLblen = function(t3, e2) {
              if ("8" != t3.substr(e2 + 2, 1)) return 1;
              var r3 = parseInt(t3.substr(e2 + 3, 1));
              return 0 == r3 ? -1 : 0 < r3 && r3 < 10 ? r3 + 1 : -2;
            }, Fr.getL = function(t3, e2) {
              var r3 = Fr.getLblen(t3, e2);
              return r3 < 1 ? "" : t3.substr(e2 + 2, 2 * r3);
            }, Fr.getVblen = function(t3, e2) {
              var r3;
              return "" == (r3 = Fr.getL(t3, e2)) ? -1 : ("8" === r3.substr(0, 1) ? new w(r3.substr(2), 16) : new w(r3, 16)).intValue();
            }, Fr.getVidx = function(t3, e2) {
              var r3 = Fr.getLblen(t3, e2);
              return r3 < 0 ? r3 : e2 + 2 * (r3 + 1);
            }, Fr.getV = function(t3, e2) {
              var r3 = Fr.getVidx(t3, e2), n2 = Fr.getVblen(t3, e2);
              return t3.substr(r3, 2 * n2);
            }, Fr.getTLV = function(t3, e2) {
              return t3.substr(e2, 2) + Fr.getL(t3, e2) + Fr.getV(t3, e2);
            }, Fr.getTLVblen = function(t3, e2) {
              return 2 + 2 * Fr.getLblen(t3, e2) + 2 * Fr.getVblen(t3, e2);
            }, Fr.getNextSiblingIdx = function(t3, e2) {
              return Fr.getVidx(t3, e2) + 2 * Fr.getVblen(t3, e2);
            }, Fr.getChildIdx = function(t3, e2) {
              var r3, n2, i2, o2 = Fr, s2 = [];
              r3 = o2.getVidx(t3, e2), n2 = 2 * o2.getVblen(t3, e2), "03" == t3.substr(e2, 2) && (r3 += 2, n2 -= 2), i2 = 0;
              for (var a2 = r3; i2 <= n2; ) {
                var u2 = o2.getTLVblen(t3, a2);
                if ((i2 += u2) <= n2 && s2.push(a2), a2 += u2, i2 >= n2) break;
              }
              return s2;
            }, Fr.getNthChildIdx = function(t3, e2, r3) {
              return Fr.getChildIdx(t3, e2)[r3];
            }, Fr.getIdxbyList = function(t3, e2, r3, n2) {
              var i2, o2, s2 = Fr;
              return 0 == r3.length ? void 0 !== n2 && t3.substr(e2, 2) !== n2 ? -1 : e2 : (i2 = r3.shift()) >= (o2 = s2.getChildIdx(t3, e2)).length ? -1 : s2.getIdxbyList(t3, o2[i2], r3, n2);
            }, Fr.getIdxbyListEx = function(t3, e2, r3, n2) {
              var i2, o2, s2 = Fr;
              if (0 == r3.length) return void 0 !== n2 && t3.substr(e2, 2) !== n2 ? -1 : e2;
              i2 = r3.shift(), o2 = s2.getChildIdx(t3, e2);
              for (var a2 = 0, u2 = 0; u2 < o2.length; u2++) {
                var c2 = t3.substr(o2[u2], 2);
                if ("number" == typeof i2 && !s2.isContextTag(c2) && a2 == i2 || "string" == typeof i2 && s2.isContextTag(c2, i2)) return s2.getIdxbyListEx(t3, o2[u2], r3, n2);
                s2.isContextTag(c2) || a2++;
              }
              return -1;
            }, Fr.getTLVbyList = function(t3, e2, r3, n2) {
              var i2 = Fr, o2 = i2.getIdxbyList(t3, e2, r3, n2);
              return -1 == o2 || o2 >= t3.length ? null : i2.getTLV(t3, o2);
            }, Fr.getTLVbyListEx = function(t3, e2, r3, n2) {
              var i2 = Fr, o2 = i2.getIdxbyListEx(t3, e2, r3, n2);
              return -1 == o2 ? null : i2.getTLV(t3, o2);
            }, Fr.getVbyList = function(t3, e2, r3, n2, i2) {
              var o2, s2, a2 = Fr;
              return -1 == (o2 = a2.getIdxbyList(t3, e2, r3, n2)) || o2 >= t3.length ? null : (s2 = a2.getV(t3, o2), true === i2 && (s2 = s2.substr(2)), s2);
            }, Fr.getVbyListEx = function(t3, e2, r3, n2, i2) {
              var o2, s2, a2 = Fr;
              return -1 == (o2 = a2.getIdxbyListEx(t3, e2, r3, n2)) ? null : (s2 = a2.getV(t3, o2), "03" == t3.substr(o2, 2) && false !== i2 && (s2 = s2.substr(2)), s2);
            }, Fr.getInt = function(t3, e2, r3) {
              null == r3 && (r3 = -1);
              try {
                var n2 = t3.substr(e2, 2);
                if ("02" != n2 && "03" != n2) return r3;
                var i2 = Fr.getV(t3, e2);
                return "02" == n2 ? parseInt(i2, 16) : function o2(t4) {
                  try {
                    var e3 = t4.substr(0, 2);
                    if ("00" == e3) return parseInt(t4.substr(2), 16);
                    var r4 = parseInt(e3, 16), n3 = t4.substr(2), i3 = parseInt(n3, 16).toString(2);
                    return "0" == i3 && (i3 = "00000000"), i3 = i3.slice(0, 0 - r4), parseInt(i3, 2);
                  } catch (t5) {
                    return -1;
                  }
                }(i2);
              } catch (t4) {
                return r3;
              }
            }, Fr.getOID = function(t3, e2, r3) {
              null == r3 && (r3 = null);
              try {
                return "06" != t3.substr(e2, 2) ? r3 : function n2(t4) {
                  if (!Xr(t4)) return null;
                  try {
                    var e3 = [], r4 = t4.substr(0, 2), n3 = parseInt(r4, 16);
                    e3[0] = new String(Math.floor(n3 / 40)), e3[1] = new String(n3 % 40);
                    for (var i2 = t4.substr(2), o2 = [], s2 = 0; s2 < i2.length / 2; s2++) o2.push(parseInt(i2.substr(2 * s2, 2), 16));
                    var a2 = [], u2 = "";
                    for (s2 = 0; s2 < o2.length; s2++) 128 & o2[s2] ? u2 += Qr((127 & o2[s2]).toString(2), 7) : (u2 += Qr((127 & o2[s2]).toString(2), 7), a2.push(new String(parseInt(u2, 2))), u2 = "");
                    var c2 = e3.join(".");
                    return a2.length > 0 && (c2 = c2 + "." + a2.join(".")), c2;
                  } catch (t5) {
                    return null;
                  }
                }(Fr.getV(t3, e2));
              } catch (t4) {
                return r3;
              }
            }, Fr.getOIDName = function(t3, e2, r3) {
              null == r3 && (r3 = null);
              try {
                var n2 = Fr.getOID(t3, e2, r3);
                if (n2 == r3) return r3;
                var i2 = Sr.asn1.x509.OID.oid2name(n2);
                return "" == i2 ? n2 : i2;
              } catch (t4) {
                return r3;
              }
            }, Fr.getString = function(t3, e2, r3) {
              null == r3 && (r3 = null);
              try {
                return Lr(Fr.getV(t3, e2));
              } catch (t4) {
                return r3;
              }
            }, Fr.hextooidstr = function(t3) {
              var e2 = function t4(e3, r4) {
                return e3.length >= r4 ? e3 : new Array(r4 - e3.length + 1).join("0") + e3;
              }, r3 = [], n2 = t3.substr(0, 2), i2 = parseInt(n2, 16);
              r3[0] = new String(Math.floor(i2 / 40)), r3[1] = new String(i2 % 40);
              for (var o2 = t3.substr(2), s2 = [], a2 = 0; a2 < o2.length / 2; a2++) s2.push(parseInt(o2.substr(2 * a2, 2), 16));
              var u2 = [], c2 = "";
              for (a2 = 0; a2 < s2.length; a2++) 128 & s2[a2] ? c2 += e2((127 & s2[a2]).toString(2), 7) : (c2 += e2((127 & s2[a2]).toString(2), 7), u2.push(new String(parseInt(c2, 2))), c2 = "");
              var h2 = r3.join(".");
              return u2.length > 0 && (h2 = h2 + "." + u2.join(".")), h2;
            }, Fr.dump = function(t3, e2, r3, n2) {
              var i2 = Fr, o2 = i2.getV, s2 = i2.dump, a2 = i2.getChildIdx, u2 = t3;
              t3 instanceof Sr.asn1.ASN1Object && (u2 = t3.getEncodedHex());
              var c2 = function t4(e3, r4) {
                return e3.length <= 2 * r4 ? e3 : e3.substr(0, r4) + "..(total " + e3.length / 2 + "bytes).." + e3.substr(e3.length - r4, r4);
              };
              void 0 === e2 && (e2 = { ommit_long_octet: 32 }), void 0 === r3 && (r3 = 0), void 0 === n2 && (n2 = "");
              var h2, l2 = e2.ommit_long_octet;
              if ("01" == (h2 = u2.substr(r3, 2))) return "00" == (f2 = o2(u2, r3)) ? n2 + "BOOLEAN FALSE\n" : n2 + "BOOLEAN TRUE\n";
              if ("02" == h2) return n2 + "INTEGER " + c2(f2 = o2(u2, r3), l2) + "\n";
              if ("03" == h2) {
                var f2 = o2(u2, r3);
                if (i2.isASN1HEX(f2.substr(2))) {
                  var g2 = n2 + "BITSTRING, encapsulates\n";
                  return g2 += s2(f2.substr(2), e2, 0, n2 + "  ");
                }
                return n2 + "BITSTRING " + c2(f2, l2) + "\n";
              }
              if ("04" == h2) {
                f2 = o2(u2, r3);
                if (i2.isASN1HEX(f2)) {
                  g2 = n2 + "OCTETSTRING, encapsulates\n";
                  return g2 += s2(f2, e2, 0, n2 + "  ");
                }
                return n2 + "OCTETSTRING " + c2(f2, l2) + "\n";
              }
              if ("05" == h2) return n2 + "NULL\n";
              if ("06" == h2) {
                var d2 = o2(u2, r3), p2 = Sr.asn1.ASN1Util.oidHexToInt(d2), v2 = Sr.asn1.x509.OID.oid2name(p2), y2 = p2.replace(/\./g, " ");
                return "" != v2 ? n2 + "ObjectIdentifier " + v2 + " (" + y2 + ")\n" : n2 + "ObjectIdentifier (" + y2 + ")\n";
              }
              if ("0a" == h2) return n2 + "ENUMERATED " + parseInt(o2(u2, r3)) + "\n";
              if ("0c" == h2) return n2 + "UTF8String '" + Dr(o2(u2, r3)) + "'\n";
              if ("13" == h2) return n2 + "PrintableString '" + Dr(o2(u2, r3)) + "'\n";
              if ("14" == h2) return n2 + "TeletexString '" + Dr(o2(u2, r3)) + "'\n";
              if ("16" == h2) return n2 + "IA5String '" + Dr(o2(u2, r3)) + "'\n";
              if ("17" == h2) return n2 + "UTCTime " + Dr(o2(u2, r3)) + "\n";
              if ("18" == h2) return n2 + "GeneralizedTime " + Dr(o2(u2, r3)) + "\n";
              if ("1a" == h2) return n2 + "VisualString '" + Dr(o2(u2, r3)) + "'\n";
              if ("1e" == h2) return n2 + "BMPString '" + Yr(o2(u2, r3)) + "'\n";
              if ("30" == h2) {
                if ("3000" == u2.substr(r3, 4)) return n2 + "SEQUENCE {}\n";
                g2 = n2 + "SEQUENCE\n";
                var m2 = e2;
                if ((2 == (b2 = a2(u2, r3)).length || 3 == b2.length) && "06" == u2.substr(b2[0], 2) && "04" == u2.substr(b2[b2.length - 1], 2)) {
                  v2 = i2.oidname(o2(u2, b2[0]));
                  var _2 = JSON.parse(JSON.stringify(e2));
                  _2.x509ExtName = v2, m2 = _2;
                }
                for (var S2 = 0; S2 < b2.length; S2++) g2 += s2(u2, m2, b2[S2], n2 + "  ");
                return g2;
              }
              if ("31" == h2) {
                g2 = n2 + "SET\n";
                var b2 = a2(u2, r3);
                for (S2 = 0; S2 < b2.length; S2++) g2 += s2(u2, e2, b2[S2], n2 + "  ");
                return g2;
              }
              if (0 != (128 & (h2 = parseInt(h2, 16)))) {
                var w2 = 31 & h2;
                if (0 != (32 & h2)) {
                  for (g2 = n2 + "[" + w2 + "]\n", b2 = a2(u2, r3), S2 = 0; S2 < b2.length; S2++) g2 += s2(u2, e2, b2[S2], n2 + "  ");
                  return g2;
                }
                f2 = o2(u2, r3);
                if (Fr.isASN1HEX(f2)) {
                  var g2 = n2 + "[" + w2 + "]\n";
                  return g2 += s2(f2, e2, 0, n2 + "  ");
                }
                return ("68747470" == f2.substr(0, 8) || "subjectAltName" === e2.x509ExtName && 2 == w2) && (f2 = Dr(f2)), g2 = n2 + "[" + w2 + "] " + f2 + "\n";
              }
              return n2 + "UNKNOWN(" + h2 + ") " + o2(u2, r3) + "\n";
            }, Fr.isContextTag = function(t3, e2) {
              var r3, n2;
              t3 = t3.toLowerCase();
              try {
                r3 = parseInt(t3, 16);
              } catch (t4) {
                return -1;
              }
              if (void 0 === e2) return 128 == (192 & r3);
              try {
                return null != e2.match(/^\[[0-9]+\]$/) && (!((n2 = parseInt(e2.substr(1, e2.length - 1), 10)) > 31) && (128 == (192 & r3) && (31 & r3) == n2));
              } catch (t4) {
                return false;
              }
            }, Fr.isASN1HEX = function(t3) {
              var e2 = Fr;
              if (t3.length % 2 == 1) return false;
              var r3 = e2.getVblen(t3, 0), n2 = t3.substr(0, 2), i2 = e2.getL(t3, 0);
              return t3.length - n2.length - i2.length == 2 * r3;
            }, Fr.checkStrictDER = function(t3, e2, r3, n2, i2) {
              var o2 = Fr;
              if (void 0 === r3) {
                if ("string" != typeof t3) throw new Error("not hex string");
                if (t3 = t3.toLowerCase(), !Sr.lang.String.isHex(t3)) throw new Error("not hex string");
                r3 = t3.length, i2 = (n2 = t3.length / 2) < 128 ? 1 : Math.ceil(n2.toString(16)) + 1;
              }
              if (o2.getL(t3, e2).length > 2 * i2) throw new Error("L of TLV too long: idx=" + e2);
              var s2 = o2.getVblen(t3, e2);
              if (s2 > n2) throw new Error("value of L too long than hex: idx=" + e2);
              var a2 = o2.getTLV(t3, e2), u2 = a2.length - 2 - o2.getL(t3, e2).length;
              if (u2 !== 2 * s2) throw new Error("V string length and L's value not the same:" + u2 + "/" + 2 * s2);
              if (0 === e2 && t3.length != a2.length) throw new Error("total length and TLV length unmatch:" + t3.length + "!=" + a2.length);
              var c2 = t3.substr(e2, 2);
              if ("02" === c2) {
                var h2 = o2.getVidx(t3, e2);
                if ("00" == t3.substr(h2, 2) && t3.charCodeAt(h2 + 2) < 56) throw new Error("not least zeros for DER INTEGER");
              }
              if (32 & parseInt(c2, 16)) {
                for (var l2 = o2.getVblen(t3, e2), f2 = 0, g2 = o2.getChildIdx(t3, e2), d2 = 0; d2 < g2.length; d2++) {
                  f2 += o2.getTLV(t3, g2[d2]).length, o2.checkStrictDER(t3, g2[d2], r3, n2, i2);
                }
                if (2 * l2 != f2) throw new Error("sum of children's TLV length and L unmatch: " + 2 * l2 + "!=" + f2);
              }
            }, Fr.oidname = function(t3) {
              var e2 = Sr.asn1;
              Sr.lang.String.isHex(t3) && (t3 = e2.ASN1Util.oidHexToInt(t3));
              var r3 = e2.x509.OID.oid2name(t3);
              return "" === r3 && (r3 = t3), r3;
            }, void 0 !== Sr && Sr || (e.KJUR = Sr = {}), void 0 !== Sr.lang && Sr.lang || (Sr.lang = {}), Sr.lang.String = function() {
            }, "function" == typeof t2 ? (e.utf8tob64u = br = function e2(r3) {
              return Pr(t2.from(r3, "utf8").toString("base64"));
            }, e.b64utoutf8 = wr = function e2(r3) {
              return t2.from(Cr(r3), "base64").toString("utf8");
            }) : (e.utf8tob64u = br = function t3(e2) {
              return Tr(Kr(Gr(e2)));
            }, e.b64utoutf8 = wr = function t3(e2) {
              return decodeURIComponent(qr(Rr(e2)));
            }), Sr.lang.String.isInteger = function(t3) {
              return !!t3.match(/^[0-9]+$/) || !!t3.match(/^-[0-9]+$/);
            }, Sr.lang.String.isHex = function(t3) {
              return Xr(t3);
            }, Sr.lang.String.isBase64 = function(t3) {
              return !(!(t3 = t3.replace(/\s+/g, "")).match(/^[0-9A-Za-z+\/]+={0,3}$/) || t3.length % 4 != 0);
            }, Sr.lang.String.isBase64URL = function(t3) {
              return !t3.match(/[+/=]/) && (t3 = Cr(t3), Sr.lang.String.isBase64(t3));
            }, Sr.lang.String.isIntegerArray = function(t3) {
              return !!(t3 = t3.replace(/\s+/g, "")).match(/^\[[0-9,]+\]$/);
            }, Sr.lang.String.isPrintable = function(t3) {
              return null !== t3.match(/^[0-9A-Za-z '()+,-./:=?]*$/);
            }, Sr.lang.String.isIA5 = function(t3) {
              return null !== t3.match(/^[\x20-\x21\x23-\x7f]*$/);
            }, Sr.lang.String.isMail = function(t3) {
              return null !== t3.match(/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/);
            };
            var Qr = function t3(e2, r3, n2) {
              return null == n2 && (n2 = "0"), e2.length >= r3 ? e2 : new Array(r3 - e2.length + 1).join(n2) + e2;
            };
            function Zr(t3, e2) {
              var r3 = function t4() {
              };
              r3.prototype = e2.prototype, t3.prototype = new r3(), t3.prototype.constructor = t3, t3.superclass = e2.prototype, e2.prototype.constructor == Object.prototype.constructor && (e2.prototype.constructor = e2);
            }
            void 0 !== Sr && Sr || (e.KJUR = Sr = {}), void 0 !== Sr.crypto && Sr.crypto || (Sr.crypto = {}), Sr.crypto.Util = new function() {
              this.DIGESTINFOHEAD = { sha1: "3021300906052b0e03021a05000414", sha224: "302d300d06096086480165030402040500041c", sha256: "3031300d060960864801650304020105000420", sha384: "3041300d060960864801650304020205000430", sha512: "3051300d060960864801650304020305000440", md2: "3020300c06082a864886f70d020205000410", md5: "3020300c06082a864886f70d020505000410", ripemd160: "3021300906052b2403020105000414" }, this.DEFAULTPROVIDER = { md5: "cryptojs", sha1: "cryptojs", sha224: "cryptojs", sha256: "cryptojs", sha384: "cryptojs", sha512: "cryptojs", ripemd160: "cryptojs", hmacmd5: "cryptojs", hmacsha1: "cryptojs", hmacsha224: "cryptojs", hmacsha256: "cryptojs", hmacsha384: "cryptojs", hmacsha512: "cryptojs", hmacripemd160: "cryptojs", MD5withRSA: "cryptojs/jsrsa", SHA1withRSA: "cryptojs/jsrsa", SHA224withRSA: "cryptojs/jsrsa", SHA256withRSA: "cryptojs/jsrsa", SHA384withRSA: "cryptojs/jsrsa", SHA512withRSA: "cryptojs/jsrsa", RIPEMD160withRSA: "cryptojs/jsrsa", MD5withECDSA: "cryptojs/jsrsa", SHA1withECDSA: "cryptojs/jsrsa", SHA224withECDSA: "cryptojs/jsrsa", SHA256withECDSA: "cryptojs/jsrsa", SHA384withECDSA: "cryptojs/jsrsa", SHA512withECDSA: "cryptojs/jsrsa", RIPEMD160withECDSA: "cryptojs/jsrsa", SHA1withDSA: "cryptojs/jsrsa", SHA224withDSA: "cryptojs/jsrsa", SHA256withDSA: "cryptojs/jsrsa", MD5withRSAandMGF1: "cryptojs/jsrsa", SHAwithRSAandMGF1: "cryptojs/jsrsa", SHA1withRSAandMGF1: "cryptojs/jsrsa", SHA224withRSAandMGF1: "cryptojs/jsrsa", SHA256withRSAandMGF1: "cryptojs/jsrsa", SHA384withRSAandMGF1: "cryptojs/jsrsa", SHA512withRSAandMGF1: "cryptojs/jsrsa", RIPEMD160withRSAandMGF1: "cryptojs/jsrsa" }, this.CRYPTOJSMESSAGEDIGESTNAME = { md5: v.algo.MD5, sha1: v.algo.SHA1, sha224: v.algo.SHA224, sha256: v.algo.SHA256, sha384: v.algo.SHA384, sha512: v.algo.SHA512, ripemd160: v.algo.RIPEMD160 }, this.getDigestInfoHex = function(t3, e2) {
                if (void 0 === this.DIGESTINFOHEAD[e2]) throw "alg not supported in Util.DIGESTINFOHEAD: " + e2;
                return this.DIGESTINFOHEAD[e2] + t3;
              }, this.getPaddedDigestInfoHex = function(t3, e2, r3) {
                var n2 = this.getDigestInfoHex(t3, e2), i2 = r3 / 4;
                if (n2.length + 22 > i2) throw "key is too short for SigAlg: keylen=" + r3 + "," + e2;
                for (var o2 = "0001", s2 = "00" + n2, a2 = "", u2 = i2 - o2.length - s2.length, c2 = 0; c2 < u2; c2 += 2) a2 += "ff";
                return o2 + a2 + s2;
              }, this.hashString = function(t3, e2) {
                return new Sr.crypto.MessageDigest({ alg: e2 }).digestString(t3);
              }, this.hashHex = function(t3, e2) {
                return new Sr.crypto.MessageDigest({ alg: e2 }).digestHex(t3);
              }, this.sha1 = function(t3) {
                return this.hashString(t3, "sha1");
              }, this.sha256 = function(t3) {
                return this.hashString(t3, "sha256");
              }, this.sha256Hex = function(t3) {
                return this.hashHex(t3, "sha256");
              }, this.sha512 = function(t3) {
                return this.hashString(t3, "sha512");
              }, this.sha512Hex = function(t3) {
                return this.hashHex(t3, "sha512");
              }, this.isKey = function(t3) {
                return t3 instanceof Me || t3 instanceof Sr.crypto.DSA || t3 instanceof Sr.crypto.ECDSA;
              };
            }(), Sr.crypto.Util.md5 = function(t3) {
              return new Sr.crypto.MessageDigest({ alg: "md5", prov: "cryptojs" }).digestString(t3);
            }, Sr.crypto.Util.ripemd160 = function(t3) {
              return new Sr.crypto.MessageDigest({ alg: "ripemd160", prov: "cryptojs" }).digestString(t3);
            }, Sr.crypto.Util.SECURERANDOMGEN = new Be(), Sr.crypto.Util.getRandomHexOfNbytes = function(t3) {
              var e2 = new Array(t3);
              return Sr.crypto.Util.SECURERANDOMGEN.nextBytes(e2), Ar(e2);
            }, Sr.crypto.Util.getRandomBigIntegerOfNbytes = function(t3) {
              return new w(Sr.crypto.Util.getRandomHexOfNbytes(t3), 16);
            }, Sr.crypto.Util.getRandomHexOfNbits = function(t3) {
              var e2 = t3 % 8, r3 = new Array((t3 - e2) / 8 + 1);
              return Sr.crypto.Util.SECURERANDOMGEN.nextBytes(r3), r3[0] = (255 << e2 & 255 ^ 255) & r3[0], Ar(r3);
            }, Sr.crypto.Util.getRandomBigIntegerOfNbits = function(t3) {
              return new w(Sr.crypto.Util.getRandomHexOfNbits(t3), 16);
            }, Sr.crypto.Util.getRandomBigIntegerZeroToMax = function(t3) {
              for (var e2 = t3.bitLength(); ; ) {
                var r3 = Sr.crypto.Util.getRandomBigIntegerOfNbits(e2);
                if (-1 != t3.compareTo(r3)) return r3;
              }
            }, Sr.crypto.Util.getRandomBigIntegerMinToMax = function(t3, e2) {
              var r3 = t3.compareTo(e2);
              if (1 == r3) throw "biMin is greater than biMax";
              if (0 == r3) return t3;
              var n2 = e2.subtract(t3);
              return Sr.crypto.Util.getRandomBigIntegerZeroToMax(n2).add(t3);
            }, Sr.crypto.MessageDigest = function(t3) {
              this.setAlgAndProvider = function(t4, e2) {
                if (null !== (t4 = Sr.crypto.MessageDigest.getCanonicalAlgName(t4)) && void 0 === e2 && (e2 = Sr.crypto.Util.DEFAULTPROVIDER[t4]), -1 != ":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(t4) && "cryptojs" == e2) {
                  try {
                    this.md = Sr.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[t4].create();
                  } catch (e3) {
                    throw "setAlgAndProvider hash alg set fail alg=" + t4 + "/" + e3;
                  }
                  this.updateString = function(t5) {
                    this.md.update(t5);
                  }, this.updateHex = function(t5) {
                    var e3 = v.enc.Hex.parse(t5);
                    this.md.update(e3);
                  }, this.digest = function() {
                    return this.md.finalize().toString(v.enc.Hex);
                  }, this.digestString = function(t5) {
                    return this.updateString(t5), this.digest();
                  }, this.digestHex = function(t5) {
                    return this.updateHex(t5), this.digest();
                  };
                }
                if (-1 != ":sha256:".indexOf(t4) && "sjcl" == e2) {
                  try {
                    this.md = new sjcl.hash.sha256();
                  } catch (e3) {
                    throw "setAlgAndProvider hash alg set fail alg=" + t4 + "/" + e3;
                  }
                  this.updateString = function(t5) {
                    this.md.update(t5);
                  }, this.updateHex = function(t5) {
                    var e3 = sjcl.codec.hex.toBits(t5);
                    this.md.update(e3);
                  }, this.digest = function() {
                    var t5 = this.md.finalize();
                    return sjcl.codec.hex.fromBits(t5);
                  }, this.digestString = function(t5) {
                    return this.updateString(t5), this.digest();
                  }, this.digestHex = function(t5) {
                    return this.updateHex(t5), this.digest();
                  };
                }
              }, this.updateString = function(t4) {
                throw "updateString(str) not supported for this alg/prov: " + this.algName + "/" + this.provName;
              }, this.updateHex = function(t4) {
                throw "updateHex(hex) not supported for this alg/prov: " + this.algName + "/" + this.provName;
              }, this.digest = function() {
                throw "digest() not supported for this alg/prov: " + this.algName + "/" + this.provName;
              }, this.digestString = function(t4) {
                throw "digestString(str) not supported for this alg/prov: " + this.algName + "/" + this.provName;
              }, this.digestHex = function(t4) {
                throw "digestHex(hex) not supported for this alg/prov: " + this.algName + "/" + this.provName;
              }, void 0 !== t3 && void 0 !== t3.alg && (this.algName = t3.alg, void 0 === t3.prov && (this.provName = Sr.crypto.Util.DEFAULTPROVIDER[this.algName]), this.setAlgAndProvider(this.algName, this.provName));
            }, Sr.crypto.MessageDigest.getCanonicalAlgName = function(t3) {
              return "string" == typeof t3 && (t3 = (t3 = t3.toLowerCase()).replace(/-/, "")), t3;
            }, Sr.crypto.MessageDigest.getHashLength = function(t3) {
              var e2 = Sr.crypto.MessageDigest, r3 = e2.getCanonicalAlgName(t3);
              if (void 0 === e2.HASHLENGTH[r3]) throw "not supported algorithm: " + t3;
              return e2.HASHLENGTH[r3];
            }, Sr.crypto.MessageDigest.HASHLENGTH = { md5: 16, sha1: 20, sha224: 28, sha256: 32, sha384: 48, sha512: 64, ripemd160: 20 }, Sr.crypto.Mac = function(t3) {
              this.setAlgAndProvider = function(t4, e2) {
                if (null == (t4 = t4.toLowerCase()) && (t4 = "hmacsha1"), "hmac" != (t4 = t4.toLowerCase()).substr(0, 4)) throw "setAlgAndProvider unsupported HMAC alg: " + t4;
                void 0 === e2 && (e2 = Sr.crypto.Util.DEFAULTPROVIDER[t4]), this.algProv = t4 + "/" + e2;
                var r3 = t4.substr(4);
                if (-1 != ":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(r3) && "cryptojs" == e2) {
                  try {
                    var n2 = Sr.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[r3];
                    this.mac = v.algo.HMAC.create(n2, this.pass);
                  } catch (t5) {
                    throw "setAlgAndProvider hash alg set fail hashAlg=" + r3 + "/" + t5;
                  }
                  this.updateString = function(t5) {
                    this.mac.update(t5);
                  }, this.updateHex = function(t5) {
                    var e3 = v.enc.Hex.parse(t5);
                    this.mac.update(e3);
                  }, this.doFinal = function() {
                    return this.mac.finalize().toString(v.enc.Hex);
                  }, this.doFinalString = function(t5) {
                    return this.updateString(t5), this.doFinal();
                  }, this.doFinalHex = function(t5) {
                    return this.updateHex(t5), this.doFinal();
                  };
                }
              }, this.updateString = function(t4) {
                throw "updateString(str) not supported for this alg/prov: " + this.algProv;
              }, this.updateHex = function(t4) {
                throw "updateHex(hex) not supported for this alg/prov: " + this.algProv;
              }, this.doFinal = function() {
                throw "digest() not supported for this alg/prov: " + this.algProv;
              }, this.doFinalString = function(t4) {
                throw "digestString(str) not supported for this alg/prov: " + this.algProv;
              }, this.doFinalHex = function(t4) {
                throw "digestHex(hex) not supported for this alg/prov: " + this.algProv;
              }, this.setPassword = function(t4) {
                if ("string" == typeof t4) {
                  var e2 = t4;
                  return t4.length % 2 != 1 && t4.match(/^[0-9A-Fa-f]+$/) || (e2 = Nr(t4)), void (this.pass = v.enc.Hex.parse(e2));
                }
                if ("object" != (void 0 === t4 ? "undefined" : g(t4))) throw "KJUR.crypto.Mac unsupported password type: " + t4;
                e2 = null;
                if (void 0 !== t4.hex) {
                  if (t4.hex.length % 2 != 0 || !t4.hex.match(/^[0-9A-Fa-f]+$/)) throw "Mac: wrong hex password: " + t4.hex;
                  e2 = t4.hex;
                }
                if (void 0 !== t4.utf8 && (e2 = Ir(t4.utf8)), void 0 !== t4.rstr && (e2 = Nr(t4.rstr)), void 0 !== t4.b64 && (e2 = S(t4.b64)), void 0 !== t4.b64u && (e2 = Rr(t4.b64u)), null == e2) throw "KJUR.crypto.Mac unsupported password type: " + t4;
                this.pass = v.enc.Hex.parse(e2);
              }, void 0 !== t3 && (void 0 !== t3.pass && this.setPassword(t3.pass), void 0 !== t3.alg && (this.algName = t3.alg, void 0 === t3.prov && (this.provName = Sr.crypto.Util.DEFAULTPROVIDER[this.algName]), this.setAlgAndProvider(this.algName, this.provName)));
            }, Sr.crypto.Signature = function(t3) {
              var e2 = null;
              if (this._setAlgNames = function() {
                var t4 = this.algName.match(/^(.+)with(.+)$/);
                t4 && (this.mdAlgName = t4[1].toLowerCase(), this.pubkeyAlgName = t4[2].toLowerCase(), "rsaandmgf1" == this.pubkeyAlgName && "sha" == this.mdAlgName && (this.mdAlgName = "sha1"));
              }, this._zeroPaddingOfSignature = function(t4, e3) {
                for (var r3 = "", n2 = e3 / 4 - t4.length, i2 = 0; i2 < n2; i2++) r3 += "0";
                return r3 + t4;
              }, this.setAlgAndProvider = function(t4, e3) {
                if (this._setAlgNames(), "cryptojs/jsrsa" != e3) throw new Error("provider not supported: " + e3);
                if (-1 != ":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(this.mdAlgName)) {
                  try {
                    this.md = new Sr.crypto.MessageDigest({ alg: this.mdAlgName });
                  } catch (t5) {
                    throw new Error("setAlgAndProvider hash alg set fail alg=" + this.mdAlgName + "/" + t5);
                  }
                  this.init = function(t5, e4) {
                    var r3 = null;
                    try {
                      r3 = void 0 === e4 ? tn.getKey(t5) : tn.getKey(t5, e4);
                    } catch (t6) {
                      throw "init failed:" + t6;
                    }
                    if (true === r3.isPrivate) this.prvKey = r3, this.state = "SIGN";
                    else {
                      if (true !== r3.isPublic) throw "init failed.:" + r3;
                      this.pubKey = r3, this.state = "VERIFY";
                    }
                  }, this.updateString = function(t5) {
                    this.md.updateString(t5);
                  }, this.updateHex = function(t5) {
                    this.md.updateHex(t5);
                  }, this.sign = function() {
                    if (this.sHashHex = this.md.digest(), void 0 === this.prvKey && void 0 !== this.ecprvhex && void 0 !== this.eccurvename && void 0 !== Sr.crypto.ECDSA && (this.prvKey = new Sr.crypto.ECDSA({ curve: this.eccurvename, prv: this.ecprvhex })), this.prvKey instanceof Me && "rsaandmgf1" === this.pubkeyAlgName) this.hSign = this.prvKey.signWithMessageHashPSS(this.sHashHex, this.mdAlgName, this.pssSaltLen);
                    else if (this.prvKey instanceof Me && "rsa" === this.pubkeyAlgName) this.hSign = this.prvKey.signWithMessageHash(this.sHashHex, this.mdAlgName);
                    else if (this.prvKey instanceof Sr.crypto.ECDSA) this.hSign = this.prvKey.signWithMessageHash(this.sHashHex);
                    else {
                      if (!(this.prvKey instanceof Sr.crypto.DSA)) throw "Signature: unsupported private key alg: " + this.pubkeyAlgName;
                      this.hSign = this.prvKey.signWithMessageHash(this.sHashHex);
                    }
                    return this.hSign;
                  }, this.signString = function(t5) {
                    return this.updateString(t5), this.sign();
                  }, this.signHex = function(t5) {
                    return this.updateHex(t5), this.sign();
                  }, this.verify = function(t5) {
                    if (this.sHashHex = this.md.digest(), void 0 === this.pubKey && void 0 !== this.ecpubhex && void 0 !== this.eccurvename && void 0 !== Sr.crypto.ECDSA && (this.pubKey = new Sr.crypto.ECDSA({ curve: this.eccurvename, pub: this.ecpubhex })), this.pubKey instanceof Me && "rsaandmgf1" === this.pubkeyAlgName) return this.pubKey.verifyWithMessageHashPSS(this.sHashHex, t5, this.mdAlgName, this.pssSaltLen);
                    if (this.pubKey instanceof Me && "rsa" === this.pubkeyAlgName) return this.pubKey.verifyWithMessageHash(this.sHashHex, t5);
                    if (void 0 !== Sr.crypto.ECDSA && this.pubKey instanceof Sr.crypto.ECDSA) return this.pubKey.verifyWithMessageHash(this.sHashHex, t5);
                    if (void 0 !== Sr.crypto.DSA && this.pubKey instanceof Sr.crypto.DSA) return this.pubKey.verifyWithMessageHash(this.sHashHex, t5);
                    throw "Signature: unsupported public key alg: " + this.pubkeyAlgName;
                  };
                }
              }, this.init = function(t4, e3) {
                throw "init(key, pass) not supported for this alg:prov=" + this.algProvName;
              }, this.updateString = function(t4) {
                throw "updateString(str) not supported for this alg:prov=" + this.algProvName;
              }, this.updateHex = function(t4) {
                throw "updateHex(hex) not supported for this alg:prov=" + this.algProvName;
              }, this.sign = function() {
                throw "sign() not supported for this alg:prov=" + this.algProvName;
              }, this.signString = function(t4) {
                throw "digestString(str) not supported for this alg:prov=" + this.algProvName;
              }, this.signHex = function(t4) {
                throw "digestHex(hex) not supported for this alg:prov=" + this.algProvName;
              }, this.verify = function(t4) {
                throw "verify(hSigVal) not supported for this alg:prov=" + this.algProvName;
              }, this.initParams = t3, void 0 !== t3 && (void 0 !== t3.alg && (this.algName = t3.alg, void 0 === t3.prov ? this.provName = Sr.crypto.Util.DEFAULTPROVIDER[this.algName] : this.provName = t3.prov, this.algProvName = this.algName + ":" + this.provName, this.setAlgAndProvider(this.algName, this.provName), this._setAlgNames()), void 0 !== t3.psssaltlen && (this.pssSaltLen = t3.psssaltlen), void 0 !== t3.prvkeypem)) {
                if (void 0 !== t3.prvkeypas) throw "both prvkeypem and prvkeypas parameters not supported";
                try {
                  e2 = tn.getKey(t3.prvkeypem);
                  this.init(e2);
                } catch (t4) {
                  throw "fatal error to load pem private key: " + t4;
                }
              }
            }, Sr.crypto.Cipher = function(t3) {
            }, Sr.crypto.Cipher.encrypt = function(t3, e2, r3) {
              if (e2 instanceof Me && e2.isPublic) {
                var n2 = Sr.crypto.Cipher.getAlgByKeyAndName(e2, r3);
                if ("RSA" === n2) return e2.encrypt(t3);
                if ("RSAOAEP" === n2) return e2.encryptOAEP(t3, "sha1");
                var i2 = n2.match(/^RSAOAEP(\d+)$/);
                if (null !== i2) return e2.encryptOAEP(t3, "sha" + i2[1]);
                throw "Cipher.encrypt: unsupported algorithm for RSAKey: " + r3;
              }
              throw "Cipher.encrypt: unsupported key or algorithm";
            }, Sr.crypto.Cipher.decrypt = function(t3, e2, r3) {
              if (e2 instanceof Me && e2.isPrivate) {
                var n2 = Sr.crypto.Cipher.getAlgByKeyAndName(e2, r3);
                if ("RSA" === n2) return e2.decrypt(t3);
                if ("RSAOAEP" === n2) return e2.decryptOAEP(t3, "sha1");
                var i2 = n2.match(/^RSAOAEP(\d+)$/);
                if (null !== i2) return e2.decryptOAEP(t3, "sha" + i2[1]);
                throw "Cipher.decrypt: unsupported algorithm for RSAKey: " + r3;
              }
              throw "Cipher.decrypt: unsupported key or algorithm";
            }, Sr.crypto.Cipher.getAlgByKeyAndName = function(t3, e2) {
              if (t3 instanceof Me) {
                if (-1 != ":RSA:RSAOAEP:RSAOAEP224:RSAOAEP256:RSAOAEP384:RSAOAEP512:".indexOf(e2)) return e2;
                if (null == e2) return "RSA";
                throw "getAlgByKeyAndName: not supported algorithm name for RSAKey: " + e2;
              }
              throw "getAlgByKeyAndName: not supported algorithm name: " + e2;
            }, Sr.crypto.OID = new function() {
              this.oidhex2name = { "2a864886f70d010101": "rsaEncryption", "2a8648ce3d0201": "ecPublicKey", "2a8648ce380401": "dsa", "2a8648ce3d030107": "secp256r1", "2b8104001f": "secp192k1", "2b81040021": "secp224r1", "2b8104000a": "secp256k1", "2b81040023": "secp521r1", "2b81040022": "secp384r1", "2a8648ce380403": "SHA1withDSA", "608648016503040301": "SHA224withDSA", "608648016503040302": "SHA256withDSA" };
            }(), void 0 !== Sr && Sr || (e.KJUR = Sr = {}), void 0 !== Sr.crypto && Sr.crypto || (Sr.crypto = {}), Sr.crypto.ECDSA = function(t3) {
              var e2 = Error, r3 = w, n2 = Ve, i2 = Sr.crypto.ECDSA, o2 = Sr.crypto.ECParameterDB, s2 = i2.getName, a2 = Fr, u2 = a2.getVbyListEx, c2 = a2.isASN1HEX, h2 = new Be();
              this.type = "EC", this.isPrivate = false, this.isPublic = false, this.getBigRandom = function(t4) {
                return new r3(t4.bitLength(), h2).mod(t4.subtract(r3.ONE)).add(r3.ONE);
              }, this.setNamedCurve = function(t4) {
                this.ecparams = o2.getByName(t4), this.prvKeyHex = null, this.pubKeyHex = null, this.curveName = t4;
              }, this.setPrivateKeyHex = function(t4) {
                this.isPrivate = true, this.prvKeyHex = t4;
              }, this.setPublicKeyHex = function(t4) {
                this.isPublic = true, this.pubKeyHex = t4;
              }, this.getPublicKeyXYHex = function() {
                var t4 = this.pubKeyHex;
                if ("04" !== t4.substr(0, 2)) throw "this method supports uncompressed format(04) only";
                var e3 = this.ecparams.keylen / 4;
                if (t4.length !== 2 + 2 * e3) throw "malformed public key hex length";
                var r4 = {};
                return r4.x = t4.substr(2, e3), r4.y = t4.substr(2 + e3), r4;
              }, this.getShortNISTPCurveName = function() {
                var t4 = this.curveName;
                return "secp256r1" === t4 || "NIST P-256" === t4 || "P-256" === t4 || "prime256v1" === t4 ? "P-256" : "secp384r1" === t4 || "NIST P-384" === t4 || "P-384" === t4 ? "P-384" : null;
              }, this.generateKeyPairHex = function() {
                var t4 = this.ecparams.n, e3 = this.getBigRandom(t4), r4 = this.ecparams.G.multiply(e3), n3 = r4.getX().toBigInteger(), i3 = r4.getY().toBigInteger(), o3 = this.ecparams.keylen / 4, s3 = ("0000000000" + e3.toString(16)).slice(-o3), a3 = "04" + ("0000000000" + n3.toString(16)).slice(-o3) + ("0000000000" + i3.toString(16)).slice(-o3);
                return this.setPrivateKeyHex(s3), this.setPublicKeyHex(a3), { ecprvhex: s3, ecpubhex: a3 };
              }, this.signWithMessageHash = function(t4) {
                return this.signHex(t4, this.prvKeyHex);
              }, this.signHex = function(t4, e3) {
                var n3 = new r3(e3, 16), o3 = this.ecparams.n, s3 = new r3(t4.substring(0, this.ecparams.keylen / 4), 16);
                do {
                  var a3 = this.getBigRandom(o3), u3 = this.ecparams.G.multiply(a3).getX().toBigInteger().mod(o3);
                } while (u3.compareTo(r3.ZERO) <= 0);
                var c3 = a3.modInverse(o3).multiply(s3.add(n3.multiply(u3))).mod(o3);
                return i2.biRSSigToASN1Sig(u3, c3);
              }, this.sign = function(t4, e3) {
                var n3 = e3, i3 = this.ecparams.n, o3 = r3.fromByteArrayUnsigned(t4);
                do {
                  var s3 = this.getBigRandom(i3), a3 = this.ecparams.G.multiply(s3).getX().toBigInteger().mod(i3);
                } while (a3.compareTo(w.ZERO) <= 0);
                var u3 = s3.modInverse(i3).multiply(o3.add(n3.multiply(a3))).mod(i3);
                return this.serializeSig(a3, u3);
              }, this.verifyWithMessageHash = function(t4, e3) {
                return this.verifyHex(t4, e3, this.pubKeyHex);
              }, this.verifyHex = function(t4, e3, o3) {
                try {
                  var s3, a3, u3 = i2.parseSigHex(e3);
                  s3 = u3.r, a3 = u3.s;
                  var c3 = n2.decodeFromHex(this.ecparams.curve, o3), h3 = new r3(t4.substring(0, this.ecparams.keylen / 4), 16);
                  return this.verifyRaw(h3, s3, a3, c3);
                } catch (t5) {
                  return false;
                }
              }, this.verify = function(t4, e3, i3) {
                var o3, s3, a3;
                if (Bitcoin.Util.isArray(e3)) {
                  var u3 = this.parseSig(e3);
                  o3 = u3.r, s3 = u3.s;
                } else {
                  if ("object" !== (void 0 === e3 ? "undefined" : g(e3)) || !e3.r || !e3.s) throw "Invalid value for signature";
                  o3 = e3.r, s3 = e3.s;
                }
                if (i3 instanceof Ve) a3 = i3;
                else {
                  if (!Bitcoin.Util.isArray(i3)) throw "Invalid format for pubkey value, must be byte array or ECPointFp";
                  a3 = n2.decodeFrom(this.ecparams.curve, i3);
                }
                var c3 = r3.fromByteArrayUnsigned(t4);
                return this.verifyRaw(c3, o3, s3, a3);
              }, this.verifyRaw = function(t4, e3, n3, i3) {
                var o3 = this.ecparams.n, s3 = this.ecparams.G;
                if (e3.compareTo(r3.ONE) < 0 || e3.compareTo(o3) >= 0) return false;
                if (n3.compareTo(r3.ONE) < 0 || n3.compareTo(o3) >= 0) return false;
                var a3 = n3.modInverse(o3), u3 = t4.multiply(a3).mod(o3), c3 = e3.multiply(a3).mod(o3);
                return s3.multiply(u3).add(i3.multiply(c3)).getX().toBigInteger().mod(o3).equals(e3);
              }, this.serializeSig = function(t4, e3) {
                var r4 = t4.toByteArraySigned(), n3 = e3.toByteArraySigned(), i3 = [];
                return i3.push(2), i3.push(r4.length), (i3 = i3.concat(r4)).push(2), i3.push(n3.length), (i3 = i3.concat(n3)).unshift(i3.length), i3.unshift(48), i3;
              }, this.parseSig = function(t4) {
                var e3;
                if (48 != t4[0]) throw new Error("Signature not a valid DERSequence");
                if (2 != t4[e3 = 2]) throw new Error("First element in signature must be a DERInteger");
                var n3 = t4.slice(e3 + 2, e3 + 2 + t4[e3 + 1]);
                if (2 != t4[e3 += 2 + t4[e3 + 1]]) throw new Error("Second element in signature must be a DERInteger");
                var i3 = t4.slice(e3 + 2, e3 + 2 + t4[e3 + 1]);
                return e3 += 2 + t4[e3 + 1], { r: r3.fromByteArrayUnsigned(n3), s: r3.fromByteArrayUnsigned(i3) };
              }, this.parseSigCompact = function(t4) {
                if (65 !== t4.length) throw "Signature has the wrong length";
                var e3 = t4[0] - 27;
                if (e3 < 0 || e3 > 7) throw "Invalid signature type";
                var n3 = this.ecparams.n;
                return { r: r3.fromByteArrayUnsigned(t4.slice(1, 33)).mod(n3), s: r3.fromByteArrayUnsigned(t4.slice(33, 65)).mod(n3), i: e3 };
              }, this.readPKCS5PrvKeyHex = function(t4) {
                if (false === c2(t4)) throw new Error("not ASN.1 hex string");
                var e3, r4, n3;
                try {
                  e3 = u2(t4, 0, ["[0]", 0], "06"), r4 = u2(t4, 0, [1], "04");
                  try {
                    n3 = u2(t4, 0, ["[1]", 0], "03");
                  } catch (t5) {
                  }
                } catch (t5) {
                  throw new Error("malformed PKCS#1/5 plain ECC private key");
                }
                if (this.curveName = s2(e3), void 0 === this.curveName) throw "unsupported curve name";
                this.setNamedCurve(this.curveName), this.setPublicKeyHex(n3), this.setPrivateKeyHex(r4), this.isPublic = false;
              }, this.readPKCS8PrvKeyHex = function(t4) {
                if (false === c2(t4)) throw new e2("not ASN.1 hex string");
                var r4, n3, i3;
                try {
                  u2(t4, 0, [1, 0], "06"), r4 = u2(t4, 0, [1, 1], "06"), n3 = u2(t4, 0, [2, 0, 1], "04");
                  try {
                    i3 = u2(t4, 0, [2, 0, "[1]", 0], "03");
                  } catch (t5) {
                  }
                } catch (t5) {
                  throw new e2("malformed PKCS#8 plain ECC private key");
                }
                if (this.curveName = s2(r4), void 0 === this.curveName) throw new e2("unsupported curve name");
                this.setNamedCurve(this.curveName), this.setPublicKeyHex(i3), this.setPrivateKeyHex(n3), this.isPublic = false;
              }, this.readPKCS8PubKeyHex = function(t4) {
                if (false === c2(t4)) throw new e2("not ASN.1 hex string");
                var r4, n3;
                try {
                  u2(t4, 0, [0, 0], "06"), r4 = u2(t4, 0, [0, 1], "06"), n3 = u2(t4, 0, [1], "03");
                } catch (t5) {
                  throw new e2("malformed PKCS#8 ECC public key");
                }
                if (this.curveName = s2(r4), null === this.curveName) throw new e2("unsupported curve name");
                this.setNamedCurve(this.curveName), this.setPublicKeyHex(n3);
              }, this.readCertPubKeyHex = function(t4, r4) {
                if (false === c2(t4)) throw new e2("not ASN.1 hex string");
                var n3, i3;
                try {
                  n3 = u2(t4, 0, [0, 5, 0, 1], "06"), i3 = u2(t4, 0, [0, 5, 1], "03");
                } catch (t5) {
                  throw new e2("malformed X.509 certificate ECC public key");
                }
                if (this.curveName = s2(n3), null === this.curveName) throw new e2("unsupported curve name");
                this.setNamedCurve(this.curveName), this.setPublicKeyHex(i3);
              }, void 0 !== t3 && void 0 !== t3.curve && (this.curveName = t3.curve), void 0 === this.curveName && (this.curveName = "secp256r1"), this.setNamedCurve(this.curveName), void 0 !== t3 && (void 0 !== t3.prv && this.setPrivateKeyHex(t3.prv), void 0 !== t3.pub && this.setPublicKeyHex(t3.pub));
            }, Sr.crypto.ECDSA.parseSigHex = function(t3) {
              var e2 = Sr.crypto.ECDSA.parseSigHexInHexRS(t3);
              return { r: new w(e2.r, 16), s: new w(e2.s, 16) };
            }, Sr.crypto.ECDSA.parseSigHexInHexRS = function(t3) {
              var e2 = Fr, r3 = e2.getChildIdx, n2 = e2.getV;
              if (e2.checkStrictDER(t3, 0), "30" != t3.substr(0, 2)) throw new Error("signature is not a ASN.1 sequence");
              var i2 = r3(t3, 0);
              if (2 != i2.length) throw new Error("signature shall have two elements");
              var o2 = i2[0], s2 = i2[1];
              if ("02" != t3.substr(o2, 2)) throw new Error("1st item not ASN.1 integer");
              if ("02" != t3.substr(s2, 2)) throw new Error("2nd item not ASN.1 integer");
              return { r: n2(t3, o2), s: n2(t3, s2) };
            }, Sr.crypto.ECDSA.asn1SigToConcatSig = function(t3) {
              var e2 = Sr.crypto.ECDSA.parseSigHexInHexRS(t3), r3 = e2.r, n2 = e2.s;
              if ("00" == r3.substr(0, 2) && r3.length % 32 == 2 && (r3 = r3.substr(2)), "00" == n2.substr(0, 2) && n2.length % 32 == 2 && (n2 = n2.substr(2)), r3.length % 32 == 30 && (r3 = "00" + r3), n2.length % 32 == 30 && (n2 = "00" + n2), r3.length % 32 != 0) throw "unknown ECDSA sig r length error";
              if (n2.length % 32 != 0) throw "unknown ECDSA sig s length error";
              return r3 + n2;
            }, Sr.crypto.ECDSA.concatSigToASN1Sig = function(t3) {
              if (t3.length / 2 * 8 % 128 != 0) throw "unknown ECDSA concatinated r-s sig  length error";
              var e2 = t3.substr(0, t3.length / 2), r3 = t3.substr(t3.length / 2);
              return Sr.crypto.ECDSA.hexRSSigToASN1Sig(e2, r3);
            }, Sr.crypto.ECDSA.hexRSSigToASN1Sig = function(t3, e2) {
              var r3 = new w(t3, 16), n2 = new w(e2, 16);
              return Sr.crypto.ECDSA.biRSSigToASN1Sig(r3, n2);
            }, Sr.crypto.ECDSA.biRSSigToASN1Sig = function(t3, e2) {
              var r3 = Sr.asn1, n2 = new r3.DERInteger({ bigint: t3 }), i2 = new r3.DERInteger({ bigint: e2 });
              return new r3.DERSequence({ array: [n2, i2] }).getEncodedHex();
            }, Sr.crypto.ECDSA.getName = function(t3) {
              return "2b8104001f" === t3 ? "secp192k1" : "2a8648ce3d030107" === t3 ? "secp256r1" : "2b8104000a" === t3 ? "secp256k1" : "2b81040021" === t3 ? "secp224r1" : "2b81040022" === t3 ? "secp384r1" : -1 !== "|secp256r1|NIST P-256|P-256|prime256v1|".indexOf(t3) ? "secp256r1" : -1 !== "|secp256k1|".indexOf(t3) ? "secp256k1" : -1 !== "|secp224r1|NIST P-224|P-224|".indexOf(t3) ? "secp224r1" : -1 !== "|secp384r1|NIST P-384|P-384|".indexOf(t3) ? "secp384r1" : null;
            }, void 0 !== Sr && Sr || (e.KJUR = Sr = {}), void 0 !== Sr.crypto && Sr.crypto || (Sr.crypto = {}), Sr.crypto.ECParameterDB = new function() {
              var t3 = {}, e2 = {};
              function r3(t4) {
                return new w(t4, 16);
              }
              this.getByName = function(r4) {
                var n2 = r4;
                if (void 0 !== e2[n2] && (n2 = e2[r4]), void 0 !== t3[n2]) return t3[n2];
                throw "unregistered EC curve name: " + n2;
              }, this.regist = function(n2, i2, o2, s2, a2, u2, c2, h2, l2, f2, g2, d2) {
                t3[n2] = {};
                var p2 = r3(o2), v2 = r3(s2), y2 = r3(a2), m2 = r3(u2), _2 = r3(c2), S2 = new Ke(p2, v2, y2), b2 = S2.decodePointHex("04" + h2 + l2);
                t3[n2].name = n2, t3[n2].keylen = i2, t3[n2].curve = S2, t3[n2].G = b2, t3[n2].n = m2, t3[n2].h = _2, t3[n2].oid = g2, t3[n2].info = d2;
                for (var w2 = 0; w2 < f2.length; w2++) e2[f2[w2]] = n2;
              };
            }(), Sr.crypto.ECParameterDB.regist("secp128r1", 128, "FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFF", "FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFC", "E87579C11079F43DD824993C2CEE5ED3", "FFFFFFFE0000000075A30D1B9038A115", "1", "161FF7528B899B2D0C28607CA52C5B86", "CF5AC8395BAFEB13C02DA292DDED7A83", [], "", "secp128r1 : SECG curve over a 128 bit prime field"), Sr.crypto.ECParameterDB.regist("secp160k1", 160, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFAC73", "0", "7", "0100000000000000000001B8FA16DFAB9ACA16B6B3", "1", "3B4C382CE37AA192A4019E763036F4F5DD4D7EBB", "938CF935318FDCED6BC28286531733C3F03C4FEE", [], "", "secp160k1 : SECG curve over a 160 bit prime field"), Sr.crypto.ECParameterDB.regist("secp160r1", 160, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFC", "1C97BEFC54BD7A8B65ACF89F81D4D4ADC565FA45", "0100000000000000000001F4C8F927AED3CA752257", "1", "4A96B5688EF573284664698968C38BB913CBFC82", "23A628553168947D59DCC912042351377AC5FB32", [], "", "secp160r1 : SECG curve over a 160 bit prime field"), Sr.crypto.ECParameterDB.regist("secp192k1", 192, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFEE37", "0", "3", "FFFFFFFFFFFFFFFFFFFFFFFE26F2FC170F69466A74DEFD8D", "1", "DB4FF10EC057E9AE26B07D0280B7F4341DA5D1B1EAE06C7D", "9B2F2F6D9C5628A7844163D015BE86344082AA88D95E2F9D", []), Sr.crypto.ECParameterDB.regist("secp192r1", 192, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFC", "64210519E59C80E70FA7E9AB72243049FEB8DEECC146B9B1", "FFFFFFFFFFFFFFFFFFFFFFFF99DEF836146BC9B1B4D22831", "1", "188DA80EB03090F67CBF20EB43A18800F4FF0AFD82FF1012", "07192B95FFC8DA78631011ED6B24CDD573F977A11E794811", []), Sr.crypto.ECParameterDB.regist("secp224r1", 224, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000000000000000000000001", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFE", "B4050A850C04B3ABF54132565044B0B7D7BFD8BA270B39432355FFB4", "FFFFFFFFFFFFFFFFFFFFFFFFFFFF16A2E0B8F03E13DD29455C5C2A3D", "1", "B70E0CBD6BB4BF7F321390B94A03C1D356C21122343280D6115C1D21", "BD376388B5F723FB4C22DFE6CD4375A05A07476444D5819985007E34", []), Sr.crypto.ECParameterDB.regist("secp256k1", 256, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F", "0", "7", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141", "1", "79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798", "483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8", []), Sr.crypto.ECParameterDB.regist("secp256r1", 256, "FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFF", "FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFC", "5AC635D8AA3A93E7B3EBBD55769886BC651D06B0CC53B0F63BCE3C3E27D2604B", "FFFFFFFF00000000FFFFFFFFFFFFFFFFBCE6FAADA7179E84F3B9CAC2FC632551", "1", "6B17D1F2E12C4247F8BCE6E563A440F277037D812DEB33A0F4A13945D898C296", "4FE342E2FE1A7F9B8EE7EB4A7C0F9E162BCE33576B315ECECBB6406837BF51F5", ["NIST P-256", "P-256", "prime256v1"]), Sr.crypto.ECParameterDB.regist("secp384r1", 384, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFC", "B3312FA7E23EE7E4988E056BE3F82D19181D9C6EFE8141120314088F5013875AC656398D8A2ED19D2A85C8EDD3EC2AEF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC7634D81F4372DDF581A0DB248B0A77AECEC196ACCC52973", "1", "AA87CA22BE8B05378EB1C71EF320AD746E1D3B628BA79B9859F741E082542A385502F25DBF55296C3A545E3872760AB7", "3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f", ["NIST P-384", "P-384"]), Sr.crypto.ECParameterDB.regist("secp521r1", 521, "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF", "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC", "051953EB9618E1C9A1F929A21A0B68540EEA2DA725B99B315F3B8B489918EF109E156193951EC7E937B1652C0BD3BB1BF073573DF883D2C34F1EF451FD46B503F00", "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFA51868783BF2F966B7FCC0148F709A5D03BB5C9B8899C47AEBB6FB71E91386409", "1", "C6858E06B70404E9CD9E3ECB662395B4429C648139053FB521F828AF606B4D3DBAA14B5E77EFE75928FE1DC127A2FFA8DE3348B3C1856A429BF97E7E31C2E5BD66", "011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650", ["NIST P-521", "P-521"]);
            var tn = /* @__PURE__ */ function() {
              var t3 = function t4(r4, n3, i3) {
                return e2(v.AES, r4, n3, i3);
              }, e2 = function t4(e3, r4, n3, i3) {
                var o3 = v.enc.Hex.parse(r4), s3 = v.enc.Hex.parse(n3), a3 = v.enc.Hex.parse(i3), u2 = {};
                u2.key = s3, u2.iv = a3, u2.ciphertext = o3;
                var c2 = e3.decrypt(u2, s3, { iv: a3 });
                return v.enc.Hex.stringify(c2);
              }, r3 = function t4(e3, r4, i3) {
                return n2(v.AES, e3, r4, i3);
              }, n2 = function t4(e3, r4, n3, i3) {
                var o3 = v.enc.Hex.parse(r4), s3 = v.enc.Hex.parse(n3), a3 = v.enc.Hex.parse(i3), u2 = e3.encrypt(o3, s3, { iv: a3 }), c2 = v.enc.Hex.parse(u2.toString());
                return v.enc.Base64.stringify(c2);
              }, i2 = { "AES-256-CBC": { proc: t3, eproc: r3, keylen: 32, ivlen: 16 }, "AES-192-CBC": { proc: t3, eproc: r3, keylen: 24, ivlen: 16 }, "AES-128-CBC": { proc: t3, eproc: r3, keylen: 16, ivlen: 16 }, "DES-EDE3-CBC": { proc: function t4(r4, n3, i3) {
                return e2(v.TripleDES, r4, n3, i3);
              }, eproc: function t4(e3, r4, i3) {
                return n2(v.TripleDES, e3, r4, i3);
              }, keylen: 24, ivlen: 8 }, "DES-CBC": { proc: function t4(r4, n3, i3) {
                return e2(v.DES, r4, n3, i3);
              }, eproc: function t4(e3, r4, i3) {
                return n2(v.DES, e3, r4, i3);
              }, keylen: 8, ivlen: 8 } }, o2 = function t4(e3) {
                var r4 = {}, n3 = e3.match(new RegExp("DEK-Info: ([^,]+),([0-9A-Fa-f]+)", "m"));
                n3 && (r4.cipher = n3[1], r4.ivsalt = n3[2]);
                var i3 = e3.match(new RegExp("-----BEGIN ([A-Z]+) PRIVATE KEY-----"));
                i3 && (r4.type = i3[1]);
                var o3 = -1, s3 = 0;
                -1 != e3.indexOf("\r\n\r\n") && (o3 = e3.indexOf("\r\n\r\n"), s3 = 2), -1 != e3.indexOf("\n\n") && (o3 = e3.indexOf("\n\n"), s3 = 1);
                var a3 = e3.indexOf("-----END");
                if (-1 != o3 && -1 != a3) {
                  var u2 = e3.substring(o3 + 2 * s3, a3 - s3);
                  u2 = u2.replace(/\s+/g, ""), r4.data = u2;
                }
                return r4;
              }, s2 = function t4(e3, r4, n3) {
                for (var o3 = n3.substring(0, 16), s3 = v.enc.Hex.parse(o3), a3 = v.enc.Utf8.parse(r4), u2 = i2[e3].keylen + i2[e3].ivlen, c2 = "", h2 = null; ; ) {
                  var l2 = v.algo.MD5.create();
                  if (null != h2 && l2.update(h2), l2.update(a3), l2.update(s3), h2 = l2.finalize(), (c2 += v.enc.Hex.stringify(h2)).length >= 2 * u2) break;
                }
                var f2 = {};
                return f2.keyhex = c2.substr(0, 2 * i2[e3].keylen), f2.ivhex = c2.substr(2 * i2[e3].keylen, 2 * i2[e3].ivlen), f2;
              }, a2 = function t4(e3, r4, n3, o3) {
                var s3 = v.enc.Base64.parse(e3), a3 = v.enc.Hex.stringify(s3);
                return (0, i2[r4].proc)(a3, n3, o3);
              };
              return { version: "1.0.0", parsePKCS5PEM: function t4(e3) {
                return o2(e3);
              }, getKeyAndUnusedIvByPasscodeAndIvsalt: function t4(e3, r4, n3) {
                return s2(e3, r4, n3);
              }, decryptKeyB64: function t4(e3, r4, n3, i3) {
                return a2(e3, r4, n3, i3);
              }, getDecryptedKeyHex: function t4(e3, r4) {
                var n3 = o2(e3), i3 = (n3.type, n3.cipher), u2 = n3.ivsalt, c2 = n3.data, h2 = s2(i3, r4, u2).keyhex;
                return a2(c2, i3, h2, u2);
              }, getEncryptedPKCS5PEMFromPrvKeyHex: function t4(e3, r4, n3, o3, a3) {
                var u2 = "";
                if (void 0 !== o3 && null != o3 || (o3 = "AES-256-CBC"), void 0 === i2[o3]) throw new Error("KEYUTIL unsupported algorithm: " + o3);
                void 0 !== a3 && null != a3 || (a3 = function t5(e4) {
                  var r5 = v.lib.WordArray.random(e4);
                  return v.enc.Hex.stringify(r5);
                }(i2[o3].ivlen).toUpperCase());
                var c2 = function t5(e4, r5, n4, o4) {
                  return (0, i2[r5].eproc)(e4, n4, o4);
                }(r4, o3, s2(o3, n3, a3).keyhex, a3);
                u2 = "-----BEGIN " + e3 + " PRIVATE KEY-----\r\n";
                return u2 += "Proc-Type: 4,ENCRYPTED\r\n", u2 += "DEK-Info: " + o3 + "," + a3 + "\r\n", u2 += "\r\n", u2 += c2.replace(/(.{64})/g, "$1\r\n"), u2 += "\r\n-----END " + e3 + " PRIVATE KEY-----\r\n";
              }, parseHexOfEncryptedPKCS8: function t4(e3) {
                var r4 = Fr, n3 = r4.getChildIdx, i3 = r4.getV, o3 = {}, s3 = n3(e3, 0);
                if (2 != s3.length) throw new Error("malformed format: SEQUENCE(0).items != 2: " + s3.length);
                o3.ciphertext = i3(e3, s3[1]);
                var a3 = n3(e3, s3[0]);
                if (2 != a3.length) throw new Error("malformed format: SEQUENCE(0.0).items != 2: " + a3.length);
                if ("2a864886f70d01050d" != i3(e3, a3[0])) throw new Error("this only supports pkcs5PBES2");
                var u2 = n3(e3, a3[1]);
                if (2 != a3.length) throw new Error("malformed format: SEQUENCE(0.0.1).items != 2: " + u2.length);
                var c2 = n3(e3, u2[1]);
                if (2 != c2.length) throw new Error("malformed format: SEQUENCE(0.0.1.1).items != 2: " + c2.length);
                if ("2a864886f70d0307" != i3(e3, c2[0])) throw "this only supports TripleDES";
                o3.encryptionSchemeAlg = "TripleDES", o3.encryptionSchemeIV = i3(e3, c2[1]);
                var h2 = n3(e3, u2[0]);
                if (2 != h2.length) throw new Error("malformed format: SEQUENCE(0.0.1.0).items != 2: " + h2.length);
                if ("2a864886f70d01050c" != i3(e3, h2[0])) throw new Error("this only supports pkcs5PBKDF2");
                var l2 = n3(e3, h2[1]);
                if (l2.length < 2) throw new Error("malformed format: SEQUENCE(0.0.1.0.1).items < 2: " + l2.length);
                o3.pbkdf2Salt = i3(e3, l2[0]);
                var f2 = i3(e3, l2[1]);
                try {
                  o3.pbkdf2Iter = parseInt(f2, 16);
                } catch (t5) {
                  throw new Error("malformed format pbkdf2Iter: " + f2);
                }
                return o3;
              }, getPBKDF2KeyHexFromParam: function t4(e3, r4) {
                var n3 = v.enc.Hex.parse(e3.pbkdf2Salt), i3 = e3.pbkdf2Iter, o3 = v.PBKDF2(r4, n3, { keySize: 6, iterations: i3 });
                return v.enc.Hex.stringify(o3);
              }, _getPlainPKCS8HexFromEncryptedPKCS8PEM: function t4(e3, r4) {
                var n3 = Mr(e3, "ENCRYPTED PRIVATE KEY"), i3 = this.parseHexOfEncryptedPKCS8(n3), o3 = tn.getPBKDF2KeyHexFromParam(i3, r4), s3 = {};
                s3.ciphertext = v.enc.Hex.parse(i3.ciphertext);
                var a3 = v.enc.Hex.parse(o3), u2 = v.enc.Hex.parse(i3.encryptionSchemeIV), c2 = v.TripleDES.decrypt(s3, a3, { iv: u2 });
                return v.enc.Hex.stringify(c2);
              }, getKeyFromEncryptedPKCS8PEM: function t4(e3, r4) {
                var n3 = this._getPlainPKCS8HexFromEncryptedPKCS8PEM(e3, r4);
                return this.getKeyFromPlainPrivatePKCS8Hex(n3);
              }, parsePlainPrivatePKCS8Hex: function t4(e3) {
                var r4 = Fr, n3 = r4.getChildIdx, i3 = r4.getV, o3 = { algparam: null };
                if ("30" != e3.substr(0, 2)) throw new Error("malformed plain PKCS8 private key(code:001)");
                var s3 = n3(e3, 0);
                if (s3.length < 3) throw new Error("malformed plain PKCS8 private key(code:002)");
                if ("30" != e3.substr(s3[1], 2)) throw new Error("malformed PKCS8 private key(code:003)");
                var a3 = n3(e3, s3[1]);
                if (2 != a3.length) throw new Error("malformed PKCS8 private key(code:004)");
                if ("06" != e3.substr(a3[0], 2)) throw new Error("malformed PKCS8 private key(code:005)");
                if (o3.algoid = i3(e3, a3[0]), "06" == e3.substr(a3[1], 2) && (o3.algparam = i3(e3, a3[1])), "04" != e3.substr(s3[2], 2)) throw new Error("malformed PKCS8 private key(code:006)");
                return o3.keyidx = r4.getVidx(e3, s3[2]), o3;
              }, getKeyFromPlainPrivatePKCS8PEM: function t4(e3) {
                var r4 = Mr(e3, "PRIVATE KEY");
                return this.getKeyFromPlainPrivatePKCS8Hex(r4);
              }, getKeyFromPlainPrivatePKCS8Hex: function t4(e3) {
                var r4, n3 = this.parsePlainPrivatePKCS8Hex(e3);
                if ("2a864886f70d010101" == n3.algoid) r4 = new Me();
                else if ("2a8648ce380401" == n3.algoid) r4 = new Sr.crypto.DSA();
                else {
                  if ("2a8648ce3d0201" != n3.algoid) throw new Error("unsupported private key algorithm");
                  r4 = new Sr.crypto.ECDSA();
                }
                return r4.readPKCS8PrvKeyHex(e3), r4;
              }, _getKeyFromPublicPKCS8Hex: function t4(e3) {
                var r4, n3 = Fr.getVbyList(e3, 0, [0, 0], "06");
                if ("2a864886f70d010101" === n3) r4 = new Me();
                else if ("2a8648ce380401" === n3) r4 = new Sr.crypto.DSA();
                else {
                  if ("2a8648ce3d0201" !== n3) throw new Error("unsupported PKCS#8 public key hex");
                  r4 = new Sr.crypto.ECDSA();
                }
                return r4.readPKCS8PubKeyHex(e3), r4;
              }, parsePublicRawRSAKeyHex: function t4(e3) {
                var r4 = Fr, n3 = r4.getChildIdx, i3 = r4.getV, o3 = {};
                if ("30" != e3.substr(0, 2)) throw new Error("malformed RSA key(code:001)");
                var s3 = n3(e3, 0);
                if (2 != s3.length) throw new Error("malformed RSA key(code:002)");
                if ("02" != e3.substr(s3[0], 2)) throw new Error("malformed RSA key(code:003)");
                if (o3.n = i3(e3, s3[0]), "02" != e3.substr(s3[1], 2)) throw new Error("malformed RSA key(code:004)");
                return o3.e = i3(e3, s3[1]), o3;
              }, parsePublicPKCS8Hex: function t4(e3) {
                var r4 = Fr, n3 = r4.getChildIdx, i3 = r4.getV, o3 = { algparam: null }, s3 = n3(e3, 0);
                if (2 != s3.length) throw new Error("outer DERSequence shall have 2 elements: " + s3.length);
                var a3 = s3[0];
                if ("30" != e3.substr(a3, 2)) throw new Error("malformed PKCS8 public key(code:001)");
                var u2 = n3(e3, a3);
                if (2 != u2.length) throw new Error("malformed PKCS8 public key(code:002)");
                if ("06" != e3.substr(u2[0], 2)) throw new Error("malformed PKCS8 public key(code:003)");
                if (o3.algoid = i3(e3, u2[0]), "06" == e3.substr(u2[1], 2) ? o3.algparam = i3(e3, u2[1]) : "30" == e3.substr(u2[1], 2) && (o3.algparam = {}, o3.algparam.p = r4.getVbyList(e3, u2[1], [0], "02"), o3.algparam.q = r4.getVbyList(e3, u2[1], [1], "02"), o3.algparam.g = r4.getVbyList(e3, u2[1], [2], "02")), "03" != e3.substr(s3[1], 2)) throw new Error("malformed PKCS8 public key(code:004)");
                return o3.key = i3(e3, s3[1]).substr(2), o3;
              } };
            }();
            tn.getKey = function(t3, e2, r3) {
              var n2 = (v2 = Fr).getChildIdx, i2 = (v2.getV, v2.getVbyList), o2 = Sr.crypto, s2 = o2.ECDSA, a2 = o2.DSA, u2 = Me, c2 = Mr, h2 = tn;
              if (void 0 !== u2 && t3 instanceof u2) return t3;
              if (void 0 !== s2 && t3 instanceof s2) return t3;
              if (void 0 !== a2 && t3 instanceof a2) return t3;
              if (void 0 !== t3.curve && void 0 !== t3.xy && void 0 === t3.d) return new s2({ pub: t3.xy, curve: t3.curve });
              if (void 0 !== t3.curve && void 0 !== t3.d) return new s2({ prv: t3.d, curve: t3.curve });
              if (void 0 === t3.kty && void 0 !== t3.n && void 0 !== t3.e && void 0 === t3.d) return (P2 = new u2()).setPublic(t3.n, t3.e), P2;
              if (void 0 === t3.kty && void 0 !== t3.n && void 0 !== t3.e && void 0 !== t3.d && void 0 !== t3.p && void 0 !== t3.q && void 0 !== t3.dp && void 0 !== t3.dq && void 0 !== t3.co && void 0 === t3.qi) return (P2 = new u2()).setPrivateEx(t3.n, t3.e, t3.d, t3.p, t3.q, t3.dp, t3.dq, t3.co), P2;
              if (void 0 === t3.kty && void 0 !== t3.n && void 0 !== t3.e && void 0 !== t3.d && void 0 === t3.p) return (P2 = new u2()).setPrivate(t3.n, t3.e, t3.d), P2;
              if (void 0 !== t3.p && void 0 !== t3.q && void 0 !== t3.g && void 0 !== t3.y && void 0 === t3.x) return (P2 = new a2()).setPublic(t3.p, t3.q, t3.g, t3.y), P2;
              if (void 0 !== t3.p && void 0 !== t3.q && void 0 !== t3.g && void 0 !== t3.y && void 0 !== t3.x) return (P2 = new a2()).setPrivate(t3.p, t3.q, t3.g, t3.y, t3.x), P2;
              if ("RSA" === t3.kty && void 0 !== t3.n && void 0 !== t3.e && void 0 === t3.d) return (P2 = new u2()).setPublic(Rr(t3.n), Rr(t3.e)), P2;
              if ("RSA" === t3.kty && void 0 !== t3.n && void 0 !== t3.e && void 0 !== t3.d && void 0 !== t3.p && void 0 !== t3.q && void 0 !== t3.dp && void 0 !== t3.dq && void 0 !== t3.qi) return (P2 = new u2()).setPrivateEx(Rr(t3.n), Rr(t3.e), Rr(t3.d), Rr(t3.p), Rr(t3.q), Rr(t3.dp), Rr(t3.dq), Rr(t3.qi)), P2;
              if ("RSA" === t3.kty && void 0 !== t3.n && void 0 !== t3.e && void 0 !== t3.d) return (P2 = new u2()).setPrivate(Rr(t3.n), Rr(t3.e), Rr(t3.d)), P2;
              if ("EC" === t3.kty && void 0 !== t3.crv && void 0 !== t3.x && void 0 !== t3.y && void 0 === t3.d) {
                var l2 = (k2 = new s2({ curve: t3.crv })).ecparams.keylen / 4, f2 = "04" + ("0000000000" + Rr(t3.x)).slice(-l2) + ("0000000000" + Rr(t3.y)).slice(-l2);
                return k2.setPublicKeyHex(f2), k2;
              }
              if ("EC" === t3.kty && void 0 !== t3.crv && void 0 !== t3.x && void 0 !== t3.y && void 0 !== t3.d) {
                l2 = (k2 = new s2({ curve: t3.crv })).ecparams.keylen / 4, f2 = "04" + ("0000000000" + Rr(t3.x)).slice(-l2) + ("0000000000" + Rr(t3.y)).slice(-l2);
                var g2 = ("0000000000" + Rr(t3.d)).slice(-l2);
                return k2.setPublicKeyHex(f2), k2.setPrivateKeyHex(g2), k2;
              }
              if ("pkcs5prv" === r3) {
                var d2, p2 = t3, v2 = Fr;
                if (9 === (d2 = n2(p2, 0)).length) (P2 = new u2()).readPKCS5PrvKeyHex(p2);
                else if (6 === d2.length) (P2 = new a2()).readPKCS5PrvKeyHex(p2);
                else {
                  if (!(d2.length > 2 && "04" === p2.substr(d2[1], 2))) throw new Error("unsupported PKCS#1/5 hexadecimal key");
                  (P2 = new s2()).readPKCS5PrvKeyHex(p2);
                }
                return P2;
              }
              if ("pkcs8prv" === r3) return P2 = h2.getKeyFromPlainPrivatePKCS8Hex(t3);
              if ("pkcs8pub" === r3) return h2._getKeyFromPublicPKCS8Hex(t3);
              if ("x509pub" === r3) return on2.getPublicKeyFromCertHex(t3);
              if (-1 != t3.indexOf("-END CERTIFICATE-", 0) || -1 != t3.indexOf("-END X509 CERTIFICATE-", 0) || -1 != t3.indexOf("-END TRUSTED CERTIFICATE-", 0)) return on2.getPublicKeyFromCertPEM(t3);
              if (-1 != t3.indexOf("-END PUBLIC KEY-")) {
                var y2 = Mr(t3, "PUBLIC KEY");
                return h2._getKeyFromPublicPKCS8Hex(y2);
              }
              if (-1 != t3.indexOf("-END RSA PRIVATE KEY-") && -1 == t3.indexOf("4,ENCRYPTED")) {
                var m2 = c2(t3, "RSA PRIVATE KEY");
                return h2.getKey(m2, null, "pkcs5prv");
              }
              if (-1 != t3.indexOf("-END DSA PRIVATE KEY-") && -1 == t3.indexOf("4,ENCRYPTED")) {
                var _2 = i2(R2 = c2(t3, "DSA PRIVATE KEY"), 0, [1], "02"), S2 = i2(R2, 0, [2], "02"), b2 = i2(R2, 0, [3], "02"), F2 = i2(R2, 0, [4], "02"), E = i2(R2, 0, [5], "02");
                return (P2 = new a2()).setPrivate(new w(_2, 16), new w(S2, 16), new w(b2, 16), new w(F2, 16), new w(E, 16)), P2;
              }
              if (-1 != t3.indexOf("-END EC PRIVATE KEY-") && -1 == t3.indexOf("4,ENCRYPTED")) {
                m2 = c2(t3, "EC PRIVATE KEY");
                return h2.getKey(m2, null, "pkcs5prv");
              }
              if (-1 != t3.indexOf("-END PRIVATE KEY-")) return h2.getKeyFromPlainPrivatePKCS8PEM(t3);
              if (-1 != t3.indexOf("-END RSA PRIVATE KEY-") && -1 != t3.indexOf("4,ENCRYPTED")) {
                var x = h2.getDecryptedKeyHex(t3, e2), A = new Me();
                return A.readPKCS5PrvKeyHex(x), A;
              }
              if (-1 != t3.indexOf("-END EC PRIVATE KEY-") && -1 != t3.indexOf("4,ENCRYPTED")) {
                var k2, P2 = i2(R2 = h2.getDecryptedKeyHex(t3, e2), 0, [1], "04"), C2 = i2(R2, 0, [2, 0], "06"), T2 = i2(R2, 0, [3, 0], "03").substr(2);
                if (void 0 === Sr.crypto.OID.oidhex2name[C2]) throw new Error("undefined OID(hex) in KJUR.crypto.OID: " + C2);
                return (k2 = new s2({ curve: Sr.crypto.OID.oidhex2name[C2] })).setPublicKeyHex(T2), k2.setPrivateKeyHex(P2), k2.isPublic = false, k2;
              }
              if (-1 != t3.indexOf("-END DSA PRIVATE KEY-") && -1 != t3.indexOf("4,ENCRYPTED")) {
                var R2;
                _2 = i2(R2 = h2.getDecryptedKeyHex(t3, e2), 0, [1], "02"), S2 = i2(R2, 0, [2], "02"), b2 = i2(R2, 0, [3], "02"), F2 = i2(R2, 0, [4], "02"), E = i2(R2, 0, [5], "02");
                return (P2 = new a2()).setPrivate(new w(_2, 16), new w(S2, 16), new w(b2, 16), new w(F2, 16), new w(E, 16)), P2;
              }
              if (-1 != t3.indexOf("-END ENCRYPTED PRIVATE KEY-")) return h2.getKeyFromEncryptedPKCS8PEM(t3, e2);
              throw new Error("not supported argument");
            }, tn.generateKeypair = function(t3, e2) {
              if ("RSA" == t3) {
                var r3 = e2;
                (s2 = new Me()).generate(r3, "10001"), s2.isPrivate = true, s2.isPublic = true;
                var n2 = new Me(), i2 = s2.n.toString(16), o2 = s2.e.toString(16);
                return n2.setPublic(i2, o2), n2.isPrivate = false, n2.isPublic = true, (a2 = {}).prvKeyObj = s2, a2.pubKeyObj = n2, a2;
              }
              if ("EC" == t3) {
                var s2, a2, u2 = e2, c2 = new Sr.crypto.ECDSA({ curve: u2 }).generateKeyPairHex();
                return (s2 = new Sr.crypto.ECDSA({ curve: u2 })).setPublicKeyHex(c2.ecpubhex), s2.setPrivateKeyHex(c2.ecprvhex), s2.isPrivate = true, s2.isPublic = false, (n2 = new Sr.crypto.ECDSA({ curve: u2 })).setPublicKeyHex(c2.ecpubhex), n2.isPrivate = false, n2.isPublic = true, (a2 = {}).prvKeyObj = s2, a2.pubKeyObj = n2, a2;
              }
              throw new Error("unknown algorithm: " + t3);
            }, tn.getPEM = function(t3, e2, r3, n2, i2, o2) {
              var s2 = Sr, a2 = s2.asn1, u2 = a2.DERObjectIdentifier, c2 = a2.DERInteger, h2 = a2.ASN1Util.newObject, l2 = a2.x509.SubjectPublicKeyInfo, f2 = s2.crypto, g2 = f2.DSA, d2 = f2.ECDSA, p2 = Me;
              function y2(t4) {
                return h2({ seq: [{ int: 0 }, { int: { bigint: t4.n } }, { int: t4.e }, { int: { bigint: t4.d } }, { int: { bigint: t4.p } }, { int: { bigint: t4.q } }, { int: { bigint: t4.dmp1 } }, { int: { bigint: t4.dmq1 } }, { int: { bigint: t4.coeff } }] });
              }
              function m2(t4) {
                return h2({ seq: [{ int: 1 }, { octstr: { hex: t4.prvKeyHex } }, { tag: ["a0", true, { oid: { name: t4.curveName } }] }, { tag: ["a1", true, { bitstr: { hex: "00" + t4.pubKeyHex } }] }] });
              }
              function _2(t4) {
                return h2({ seq: [{ int: 0 }, { int: { bigint: t4.p } }, { int: { bigint: t4.q } }, { int: { bigint: t4.g } }, { int: { bigint: t4.y } }, { int: { bigint: t4.x } }] });
              }
              if ((void 0 !== p2 && t3 instanceof p2 || void 0 !== g2 && t3 instanceof g2 || void 0 !== d2 && t3 instanceof d2) && 1 == t3.isPublic && (void 0 === e2 || "PKCS8PUB" == e2)) return jr(F2 = new l2(t3).getEncodedHex(), "PUBLIC KEY");
              if ("PKCS1PRV" == e2 && void 0 !== p2 && t3 instanceof p2 && (void 0 === r3 || null == r3) && 1 == t3.isPrivate) return jr(F2 = y2(t3).getEncodedHex(), "RSA PRIVATE KEY");
              if ("PKCS1PRV" == e2 && void 0 !== d2 && t3 instanceof d2 && (void 0 === r3 || null == r3) && 1 == t3.isPrivate) {
                var S2 = new u2({ name: t3.curveName }).getEncodedHex(), b2 = m2(t3).getEncodedHex(), w2 = "";
                return w2 += jr(S2, "EC PARAMETERS"), w2 += jr(b2, "EC PRIVATE KEY");
              }
              if ("PKCS1PRV" == e2 && void 0 !== g2 && t3 instanceof g2 && (void 0 === r3 || null == r3) && 1 == t3.isPrivate) return jr(F2 = _2(t3).getEncodedHex(), "DSA PRIVATE KEY");
              if ("PKCS5PRV" == e2 && void 0 !== p2 && t3 instanceof p2 && void 0 !== r3 && null != r3 && 1 == t3.isPrivate) {
                var F2 = y2(t3).getEncodedHex();
                return void 0 === n2 && (n2 = "DES-EDE3-CBC"), this.getEncryptedPKCS5PEMFromPrvKeyHex("RSA", F2, r3, n2, o2);
              }
              if ("PKCS5PRV" == e2 && void 0 !== d2 && t3 instanceof d2 && void 0 !== r3 && null != r3 && 1 == t3.isPrivate) {
                F2 = m2(t3).getEncodedHex();
                return void 0 === n2 && (n2 = "DES-EDE3-CBC"), this.getEncryptedPKCS5PEMFromPrvKeyHex("EC", F2, r3, n2, o2);
              }
              if ("PKCS5PRV" == e2 && void 0 !== g2 && t3 instanceof g2 && void 0 !== r3 && null != r3 && 1 == t3.isPrivate) {
                F2 = _2(t3).getEncodedHex();
                return void 0 === n2 && (n2 = "DES-EDE3-CBC"), this.getEncryptedPKCS5PEMFromPrvKeyHex("DSA", F2, r3, n2, o2);
              }
              var E = function t4(e3, r4) {
                var n3 = x(e3, r4);
                return new h2({ seq: [{ seq: [{ oid: { name: "pkcs5PBES2" } }, { seq: [{ seq: [{ oid: { name: "pkcs5PBKDF2" } }, { seq: [{ octstr: { hex: n3.pbkdf2Salt } }, { int: n3.pbkdf2Iter }] }] }, { seq: [{ oid: { name: "des-EDE3-CBC" } }, { octstr: { hex: n3.encryptionSchemeIV } }] }] }] }, { octstr: { hex: n3.ciphertext } }] }).getEncodedHex();
              }, x = function t4(e3, r4) {
                var n3 = v.lib.WordArray.random(8), i3 = v.lib.WordArray.random(8), o3 = v.PBKDF2(r4, n3, { keySize: 6, iterations: 100 }), s3 = v.enc.Hex.parse(e3), a3 = v.TripleDES.encrypt(s3, o3, { iv: i3 }) + "", u3 = {};
                return u3.ciphertext = a3, u3.pbkdf2Salt = v.enc.Hex.stringify(n3), u3.pbkdf2Iter = 100, u3.encryptionSchemeAlg = "DES-EDE3-CBC", u3.encryptionSchemeIV = v.enc.Hex.stringify(i3), u3;
              };
              if ("PKCS8PRV" == e2 && null != p2 && t3 instanceof p2 && 1 == t3.isPrivate) {
                var A = y2(t3).getEncodedHex();
                F2 = h2({ seq: [{ int: 0 }, { seq: [{ oid: { name: "rsaEncryption" } }, { null: true }] }, { octstr: { hex: A } }] }).getEncodedHex();
                return void 0 === r3 || null == r3 ? jr(F2, "PRIVATE KEY") : jr(b2 = E(F2, r3), "ENCRYPTED PRIVATE KEY");
              }
              if ("PKCS8PRV" == e2 && void 0 !== d2 && t3 instanceof d2 && 1 == t3.isPrivate) {
                A = new h2({ seq: [{ int: 1 }, { octstr: { hex: t3.prvKeyHex } }, { tag: ["a1", true, { bitstr: { hex: "00" + t3.pubKeyHex } }] }] }).getEncodedHex(), F2 = h2({ seq: [{ int: 0 }, { seq: [{ oid: { name: "ecPublicKey" } }, { oid: { name: t3.curveName } }] }, { octstr: { hex: A } }] }).getEncodedHex();
                return void 0 === r3 || null == r3 ? jr(F2, "PRIVATE KEY") : jr(b2 = E(F2, r3), "ENCRYPTED PRIVATE KEY");
              }
              if ("PKCS8PRV" == e2 && void 0 !== g2 && t3 instanceof g2 && 1 == t3.isPrivate) {
                A = new c2({ bigint: t3.x }).getEncodedHex(), F2 = h2({ seq: [{ int: 0 }, { seq: [{ oid: { name: "dsa" } }, { seq: [{ int: { bigint: t3.p } }, { int: { bigint: t3.q } }, { int: { bigint: t3.g } }] }] }, { octstr: { hex: A } }] }).getEncodedHex();
                return void 0 === r3 || null == r3 ? jr(F2, "PRIVATE KEY") : jr(b2 = E(F2, r3), "ENCRYPTED PRIVATE KEY");
              }
              throw new Error("unsupported object nor format");
            }, tn.getKeyFromCSRPEM = function(t3) {
              var e2 = Mr(t3, "CERTIFICATE REQUEST");
              return tn.getKeyFromCSRHex(e2);
            }, tn.getKeyFromCSRHex = function(t3) {
              var e2 = tn.parseCSRHex(t3);
              return tn.getKey(e2.p8pubkeyhex, null, "pkcs8pub");
            }, tn.parseCSRHex = function(t3) {
              var e2 = Fr, r3 = e2.getChildIdx, n2 = e2.getTLV, i2 = {}, o2 = t3;
              if ("30" != o2.substr(0, 2)) throw new Error("malformed CSR(code:001)");
              var s2 = r3(o2, 0);
              if (s2.length < 1) throw new Error("malformed CSR(code:002)");
              if ("30" != o2.substr(s2[0], 2)) throw new Error("malformed CSR(code:003)");
              var a2 = r3(o2, s2[0]);
              if (a2.length < 3) throw new Error("malformed CSR(code:004)");
              return i2.p8pubkeyhex = n2(o2, a2[2]), i2;
            }, tn.getKeyID = function(t3) {
              var e2 = tn, r3 = Fr;
              "string" == typeof t3 && -1 != t3.indexOf("BEGIN ") && (t3 = e2.getKey(t3));
              var n2 = Mr(e2.getPEM(t3)), i2 = r3.getIdxbyList(n2, 0, [1]), o2 = r3.getV(n2, i2).substring(2);
              return Sr.crypto.Util.hashHex(o2, "sha1");
            }, tn.getJWKFromKey = function(t3) {
              var e2 = {};
              if (t3 instanceof Me && t3.isPrivate) return e2.kty = "RSA", e2.n = Tr(t3.n.toString(16)), e2.e = Tr(t3.e.toString(16)), e2.d = Tr(t3.d.toString(16)), e2.p = Tr(t3.p.toString(16)), e2.q = Tr(t3.q.toString(16)), e2.dp = Tr(t3.dmp1.toString(16)), e2.dq = Tr(t3.dmq1.toString(16)), e2.qi = Tr(t3.coeff.toString(16)), e2;
              if (t3 instanceof Me && t3.isPublic) return e2.kty = "RSA", e2.n = Tr(t3.n.toString(16)), e2.e = Tr(t3.e.toString(16)), e2;
              if (t3 instanceof Sr.crypto.ECDSA && t3.isPrivate) {
                if ("P-256" !== (n2 = t3.getShortNISTPCurveName()) && "P-384" !== n2) throw new Error("unsupported curve name for JWT: " + n2);
                var r3 = t3.getPublicKeyXYHex();
                return e2.kty = "EC", e2.crv = n2, e2.x = Tr(r3.x), e2.y = Tr(r3.y), e2.d = Tr(t3.prvKeyHex), e2;
              }
              if (t3 instanceof Sr.crypto.ECDSA && t3.isPublic) {
                var n2;
                if ("P-256" !== (n2 = t3.getShortNISTPCurveName()) && "P-384" !== n2) throw new Error("unsupported curve name for JWT: " + n2);
                r3 = t3.getPublicKeyXYHex();
                return e2.kty = "EC", e2.crv = n2, e2.x = Tr(r3.x), e2.y = Tr(r3.y), e2;
              }
              throw new Error("not supported key object");
            }, Me.getPosArrayOfChildrenFromHex = function(t3) {
              return Fr.getChildIdx(t3, 0);
            }, Me.getHexValueArrayOfChildrenFromHex = function(t3) {
              var e2, r3 = Fr.getV, n2 = r3(t3, (e2 = Me.getPosArrayOfChildrenFromHex(t3))[0]), i2 = r3(t3, e2[1]), o2 = r3(t3, e2[2]), s2 = r3(t3, e2[3]), a2 = r3(t3, e2[4]), u2 = r3(t3, e2[5]), c2 = r3(t3, e2[6]), h2 = r3(t3, e2[7]), l2 = r3(t3, e2[8]);
              return (e2 = new Array()).push(n2, i2, o2, s2, a2, u2, c2, h2, l2), e2;
            }, Me.prototype.readPrivateKeyFromPEMString = function(t3) {
              var e2 = Mr(t3), r3 = Me.getHexValueArrayOfChildrenFromHex(e2);
              this.setPrivateEx(r3[1], r3[2], r3[3], r3[4], r3[5], r3[6], r3[7], r3[8]);
            }, Me.prototype.readPKCS5PrvKeyHex = function(t3) {
              var e2 = Me.getHexValueArrayOfChildrenFromHex(t3);
              this.setPrivateEx(e2[1], e2[2], e2[3], e2[4], e2[5], e2[6], e2[7], e2[8]);
            }, Me.prototype.readPKCS8PrvKeyHex = function(t3) {
              var e2, r3, n2, i2, o2, s2, a2, u2, c2 = Fr, h2 = c2.getVbyListEx;
              if (false === c2.isASN1HEX(t3)) throw new Error("not ASN.1 hex string");
              try {
                e2 = h2(t3, 0, [2, 0, 1], "02"), r3 = h2(t3, 0, [2, 0, 2], "02"), n2 = h2(t3, 0, [2, 0, 3], "02"), i2 = h2(t3, 0, [2, 0, 4], "02"), o2 = h2(t3, 0, [2, 0, 5], "02"), s2 = h2(t3, 0, [2, 0, 6], "02"), a2 = h2(t3, 0, [2, 0, 7], "02"), u2 = h2(t3, 0, [2, 0, 8], "02");
              } catch (t4) {
                throw new Error("malformed PKCS#8 plain RSA private key");
              }
              this.setPrivateEx(e2, r3, n2, i2, o2, s2, a2, u2);
            }, Me.prototype.readPKCS5PubKeyHex = function(t3) {
              var e2 = Fr, r3 = e2.getV;
              if (false === e2.isASN1HEX(t3)) throw new Error("keyHex is not ASN.1 hex string");
              var n2 = e2.getChildIdx(t3, 0);
              if (2 !== n2.length || "02" !== t3.substr(n2[0], 2) || "02" !== t3.substr(n2[1], 2)) throw new Error("wrong hex for PKCS#5 public key");
              var i2 = r3(t3, n2[0]), o2 = r3(t3, n2[1]);
              this.setPublic(i2, o2);
            }, Me.prototype.readPKCS8PubKeyHex = function(t3) {
              var e2 = Fr;
              if (false === e2.isASN1HEX(t3)) throw new Error("not ASN.1 hex string");
              if ("06092a864886f70d010101" !== e2.getTLVbyListEx(t3, 0, [0, 0])) throw new Error("not PKCS8 RSA public key");
              var r3 = e2.getTLVbyListEx(t3, 0, [1, 0]);
              this.readPKCS5PubKeyHex(r3);
            }, Me.prototype.readCertPubKeyHex = function(t3, e2) {
              var r3, n2;
              (r3 = new on2()).readCertHex(t3), n2 = r3.getPublicKeyHex(), this.readPKCS8PubKeyHex(n2);
            };
            new RegExp("[^0-9a-f]", "gi");
            function en(t3, e2) {
              for (var r3 = "", n2 = e2 / 4 - t3.length, i2 = 0; i2 < n2; i2++) r3 += "0";
              return r3 + t3;
            }
            function rn(t3, e2, r3) {
              for (var n2 = "", i2 = 0; n2.length < e2; ) n2 += Lr(r3(Nr(t3 + String.fromCharCode.apply(String, [(4278190080 & i2) >> 24, (16711680 & i2) >> 16, (65280 & i2) >> 8, 255 & i2])))), i2 += 1;
              return n2;
            }
            function nn(t3) {
              for (var e2 in Sr.crypto.Util.DIGESTINFOHEAD) {
                var r3 = Sr.crypto.Util.DIGESTINFOHEAD[e2], n2 = r3.length;
                if (t3.substring(0, n2) == r3) return [e2, t3.substring(n2)];
              }
              return [];
            }
            function on2(t3) {
              var e2, r3 = Fr, n2 = r3.getChildIdx, i2 = r3.getV, o2 = r3.getTLV, s2 = r3.getVbyList, a2 = r3.getVbyListEx, u2 = r3.getTLVbyList, c2 = r3.getTLVbyListEx, h2 = r3.getIdxbyList, l2 = r3.getIdxbyListEx, f2 = r3.getVidx, g2 = r3.getInt, d2 = r3.oidname, p2 = r3.hextooidstr, v2 = Mr;
              try {
                e2 = Sr.asn1.x509.AlgorithmIdentifier.PSSNAME2ASN1TLV;
              } catch (t4) {
              }
              this.HEX2STAG = { "0c": "utf8", 13: "prn", 16: "ia5", "1a": "vis", "1e": "bmp" }, this.hex = null, this.version = 0, this.foffset = 0, this.aExtInfo = null, this.getVersion = function() {
                if (null === this.hex || 0 !== this.version) return this.version;
                var t4 = u2(this.hex, 0, [0, 0]);
                if ("a0" == t4.substr(0, 2)) {
                  var e3 = u2(t4, 0, [0]), r4 = g2(e3, 0);
                  if (r4 < 0 || 2 < r4) throw new Error("malformed version field");
                  return this.version = r4 + 1, this.version;
                }
                return this.version = 1, this.foffset = -1, 1;
              }, this.getSerialNumberHex = function() {
                return a2(this.hex, 0, [0, 0], "02");
              }, this.getSignatureAlgorithmField = function() {
                var t4 = c2(this.hex, 0, [0, 1]);
                return this.getAlgorithmIdentifierName(t4);
              }, this.getAlgorithmIdentifierName = function(t4) {
                for (var r4 in e2) if (t4 === e2[r4]) return r4;
                return d2(a2(t4, 0, [0], "06"));
              }, this.getIssuer = function() {
                return this.getX500Name(this.getIssuerHex());
              }, this.getIssuerHex = function() {
                return u2(this.hex, 0, [0, 3 + this.foffset], "30");
              }, this.getIssuerString = function() {
                return this.getIssuer().str;
              }, this.getSubject = function() {
                return this.getX500Name(this.getSubjectHex());
              }, this.getSubjectHex = function() {
                return u2(this.hex, 0, [0, 5 + this.foffset], "30");
              }, this.getSubjectString = function() {
                return this.getSubject().str;
              }, this.getNotBefore = function() {
                var t4 = s2(this.hex, 0, [0, 4 + this.foffset, 0]);
                return t4 = t4.replace(/(..)/g, "%$1"), t4 = decodeURIComponent(t4);
              }, this.getNotAfter = function() {
                var t4 = s2(this.hex, 0, [0, 4 + this.foffset, 1]);
                return t4 = t4.replace(/(..)/g, "%$1"), t4 = decodeURIComponent(t4);
              }, this.getPublicKeyHex = function() {
                return r3.getTLVbyList(this.hex, 0, [0, 6 + this.foffset], "30");
              }, this.getPublicKeyIdx = function() {
                return h2(this.hex, 0, [0, 6 + this.foffset], "30");
              }, this.getPublicKeyContentIdx = function() {
                var t4 = this.getPublicKeyIdx();
                return h2(this.hex, t4, [1, 0], "30");
              }, this.getPublicKey = function() {
                return tn.getKey(this.getPublicKeyHex(), null, "pkcs8pub");
              }, this.getSignatureAlgorithmName = function() {
                var t4 = u2(this.hex, 0, [1], "30");
                return this.getAlgorithmIdentifierName(t4);
              }, this.getSignatureValueHex = function() {
                return s2(this.hex, 0, [2], "03", true);
              }, this.verifySignature = function(t4) {
                var e3 = this.getSignatureAlgorithmField(), r4 = this.getSignatureValueHex(), n3 = u2(this.hex, 0, [0], "30"), i3 = new Sr.crypto.Signature({ alg: e3 });
                return i3.init(t4), i3.updateHex(n3), i3.verify(r4);
              }, this.parseExt = function(t4) {
                var e3, o3, a3;
                if (void 0 === t4) {
                  if (a3 = this.hex, 3 !== this.version) return -1;
                  e3 = h2(a3, 0, [0, 7, 0], "30"), o3 = n2(a3, e3);
                } else {
                  a3 = Mr(t4);
                  var u3 = h2(a3, 0, [0, 3, 0, 0], "06");
                  if ("2a864886f70d01090e" != i2(a3, u3)) return void (this.aExtInfo = new Array());
                  e3 = h2(a3, 0, [0, 3, 0, 1, 0], "30"), o3 = n2(a3, e3), this.hex = a3;
                }
                this.aExtInfo = new Array();
                for (var c3 = 0; c3 < o3.length; c3++) {
                  var l3 = { critical: false }, g3 = 0;
                  3 === n2(a3, o3[c3]).length && (l3.critical = true, g3 = 1), l3.oid = r3.hextooidstr(s2(a3, o3[c3], [0], "06"));
                  var d3 = h2(a3, o3[c3], [1 + g3]);
                  l3.vidx = f2(a3, d3), this.aExtInfo.push(l3);
                }
              }, this.getExtInfo = function(t4) {
                var e3 = this.aExtInfo, r4 = t4;
                if (t4.match(/^[0-9.]+$/) || (r4 = Sr.asn1.x509.OID.name2oid(t4)), "" !== r4) {
                  for (var n3 = 0; n3 < e3.length; n3++) if (e3[n3].oid === r4) return e3[n3];
                }
              }, this.getExtBasicConstraints = function(t4, e3) {
                if (void 0 === t4 && void 0 === e3) {
                  var r4 = this.getExtInfo("basicConstraints");
                  if (void 0 === r4) return;
                  t4 = o2(this.hex, r4.vidx), e3 = r4.critical;
                }
                var n3 = { extname: "basicConstraints" };
                if (e3 && (n3.critical = true), "3000" === t4) return n3;
                if ("30030101ff" === t4) return n3.cA = true, n3;
                if ("30060101ff02" === t4.substr(0, 12)) {
                  var s3 = i2(t4, 10), a3 = parseInt(s3, 16);
                  return n3.cA = true, n3.pathLen = a3, n3;
                }
                throw new Error("hExtV parse error: " + t4);
              }, this.getExtKeyUsage = function(t4, e3) {
                if (void 0 === t4 && void 0 === e3) {
                  var r4 = this.getExtInfo("keyUsage");
                  if (void 0 === r4) return;
                  t4 = o2(this.hex, r4.vidx), e3 = r4.critical;
                }
                var n3 = { extname: "keyUsage" };
                return e3 && (n3.critical = true), n3.names = this.getExtKeyUsageString(t4).split(","), n3;
              }, this.getExtKeyUsageBin = function(t4) {
                if (void 0 === t4) {
                  var e3 = this.getExtInfo("keyUsage");
                  if (void 0 === e3) return "";
                  t4 = o2(this.hex, e3.vidx);
                }
                if (8 != t4.length && 10 != t4.length) throw new Error("malformed key usage value: " + t4);
                var r4 = "000000000000000" + parseInt(t4.substr(6), 16).toString(2);
                return 8 == t4.length && (r4 = r4.slice(-8)), 10 == t4.length && (r4 = r4.slice(-16)), "" == (r4 = r4.replace(/0+$/, "")) && (r4 = "0"), r4;
              }, this.getExtKeyUsageString = function(t4) {
                for (var e3 = this.getExtKeyUsageBin(t4), r4 = new Array(), n3 = 0; n3 < e3.length; n3++) "1" == e3.substr(n3, 1) && r4.push(on2.KEYUSAGE_NAME[n3]);
                return r4.join(",");
              }, this.getExtSubjectKeyIdentifier = function(t4, e3) {
                if (void 0 === t4 && void 0 === e3) {
                  var r4 = this.getExtInfo("subjectKeyIdentifier");
                  if (void 0 === r4) return;
                  t4 = o2(this.hex, r4.vidx), e3 = r4.critical;
                }
                var n3 = { extname: "subjectKeyIdentifier" };
                e3 && (n3.critical = true);
                var s3 = i2(t4, 0);
                return n3.kid = { hex: s3 }, n3;
              }, this.getExtAuthorityKeyIdentifier = function(t4, e3) {
                if (void 0 === t4 && void 0 === e3) {
                  var r4 = this.getExtInfo("authorityKeyIdentifier");
                  if (void 0 === r4) return;
                  t4 = o2(this.hex, r4.vidx), e3 = r4.critical;
                }
                var s3 = { extname: "authorityKeyIdentifier" };
                e3 && (s3.critical = true);
                for (var a3 = n2(t4, 0), u3 = 0; u3 < a3.length; u3++) {
                  var c3 = t4.substr(a3[u3], 2);
                  if ("80" === c3 && (s3.kid = { hex: i2(t4, a3[u3]) }), "a1" === c3) {
                    var h3 = o2(t4, a3[u3]), l3 = this.getGeneralNames(h3);
                    s3.issuer = l3[0].dn;
                  }
                  "82" === c3 && (s3.sn = { hex: i2(t4, a3[u3]) });
                }
                return s3;
              }, this.getExtExtKeyUsage = function(t4, e3) {
                if (void 0 === t4 && void 0 === e3) {
                  var r4 = this.getExtInfo("extKeyUsage");
                  if (void 0 === r4) return;
                  t4 = o2(this.hex, r4.vidx), e3 = r4.critical;
                }
                var s3 = { extname: "extKeyUsage", array: [] };
                e3 && (s3.critical = true);
                for (var a3 = n2(t4, 0), u3 = 0; u3 < a3.length; u3++) s3.array.push(d2(i2(t4, a3[u3])));
                return s3;
              }, this.getExtExtKeyUsageName = function() {
                var t4 = this.getExtInfo("extKeyUsage");
                if (void 0 === t4) return t4;
                var e3 = new Array(), r4 = o2(this.hex, t4.vidx);
                if ("" === r4) return e3;
                for (var s3 = n2(r4, 0), a3 = 0; a3 < s3.length; a3++) e3.push(d2(i2(r4, s3[a3])));
                return e3;
              }, this.getExtSubjectAltName = function(t4, e3) {
                if (void 0 === t4 && void 0 === e3) {
                  var r4 = this.getExtInfo("subjectAltName");
                  if (void 0 === r4) return;
                  t4 = o2(this.hex, r4.vidx), e3 = r4.critical;
                }
                var n3 = { extname: "subjectAltName", array: [] };
                return e3 && (n3.critical = true), n3.array = this.getGeneralNames(t4), n3;
              }, this.getExtIssuerAltName = function(t4, e3) {
                if (void 0 === t4 && void 0 === e3) {
                  var r4 = this.getExtInfo("issuerAltName");
                  if (void 0 === r4) return;
                  t4 = o2(this.hex, r4.vidx), e3 = r4.critical;
                }
                var n3 = { extname: "issuerAltName", array: [] };
                return e3 && (n3.critical = true), n3.array = this.getGeneralNames(t4), n3;
              }, this.getGeneralNames = function(t4) {
                for (var e3 = n2(t4, 0), r4 = [], i3 = 0; i3 < e3.length; i3++) {
                  var s3 = this.getGeneralName(o2(t4, e3[i3]));
                  void 0 !== s3 && r4.push(s3);
                }
                return r4;
              }, this.getGeneralName = function(t4) {
                var e3 = t4.substr(0, 2), r4 = i2(t4, 0), n3 = Lr(r4);
                return "81" == e3 ? { rfc822: n3 } : "82" == e3 ? { dns: n3 } : "86" == e3 ? { uri: n3 } : "87" == e3 ? { ip: zr(r4) } : "a4" == e3 ? { dn: this.getX500Name(r4) } : void 0;
              }, this.getExtSubjectAltName2 = function() {
                var t4, e3, r4, s3 = this.getExtInfo("subjectAltName");
                if (void 0 === s3) return s3;
                for (var a3 = new Array(), u3 = o2(this.hex, s3.vidx), c3 = n2(u3, 0), h3 = 0; h3 < c3.length; h3++) r4 = u3.substr(c3[h3], 2), t4 = i2(u3, c3[h3]), "81" === r4 && (e3 = Dr(t4), a3.push(["MAIL", e3])), "82" === r4 && (e3 = Dr(t4), a3.push(["DNS", e3])), "84" === r4 && (e3 = on2.hex2dn(t4, 0), a3.push(["DN", e3])), "86" === r4 && (e3 = Dr(t4), a3.push(["URI", e3])), "87" === r4 && (e3 = zr(t4), a3.push(["IP", e3]));
                return a3;
              }, this.getExtCRLDistributionPoints = function(t4, e3) {
                if (void 0 === t4 && void 0 === e3) {
                  var r4 = this.getExtInfo("cRLDistributionPoints");
                  if (void 0 === r4) return;
                  t4 = o2(this.hex, r4.vidx), e3 = r4.critical;
                }
                var i3 = { extname: "cRLDistributionPoints", array: [] };
                e3 && (i3.critical = true);
                for (var s3 = n2(t4, 0), a3 = 0; a3 < s3.length; a3++) {
                  var u3 = o2(t4, s3[a3]);
                  i3.array.push(this.getDistributionPoint(u3));
                }
                return i3;
              }, this.getDistributionPoint = function(t4) {
                for (var e3 = {}, r4 = n2(t4, 0), i3 = 0; i3 < r4.length; i3++) {
                  var s3 = t4.substr(r4[i3], 2), a3 = o2(t4, r4[i3]);
                  "a0" == s3 && (e3.dpname = this.getDistributionPointName(a3));
                }
                return e3;
              }, this.getDistributionPointName = function(t4) {
                for (var e3 = {}, r4 = n2(t4, 0), i3 = 0; i3 < r4.length; i3++) {
                  var s3 = t4.substr(r4[i3], 2), a3 = o2(t4, r4[i3]);
                  "a0" == s3 && (e3.full = this.getGeneralNames(a3));
                }
                return e3;
              }, this.getExtCRLDistributionPointsURI = function() {
                var t4 = this.getExtInfo("cRLDistributionPoints");
                if (void 0 === t4) return t4;
                for (var e3 = new Array(), r4 = n2(this.hex, t4.vidx), i3 = 0; i3 < r4.length; i3++) try {
                  var o3 = Dr(s2(this.hex, r4[i3], [0, 0, 0], "86"));
                  e3.push(o3);
                } catch (t5) {
                }
                return e3;
              }, this.getExtAIAInfo = function() {
                var t4 = this.getExtInfo("authorityInfoAccess");
                if (void 0 === t4) return t4;
                for (var e3 = { ocsp: [], caissuer: [] }, r4 = n2(this.hex, t4.vidx), i3 = 0; i3 < r4.length; i3++) {
                  var o3 = s2(this.hex, r4[i3], [0], "06"), a3 = s2(this.hex, r4[i3], [1], "86");
                  "2b06010505073001" === o3 && e3.ocsp.push(Dr(a3)), "2b06010505073002" === o3 && e3.caissuer.push(Dr(a3));
                }
                return e3;
              }, this.getExtAuthorityInfoAccess = function(t4, e3) {
                if (void 0 === t4 && void 0 === e3) {
                  var r4 = this.getExtInfo("authorityInfoAccess");
                  if (void 0 === r4) return;
                  t4 = o2(this.hex, r4.vidx), e3 = r4.critical;
                }
                var i3 = { extname: "authorityInfoAccess", array: [] };
                e3 && (i3.critical = true);
                for (var u3 = n2(t4, 0), c3 = 0; c3 < u3.length; c3++) {
                  var h3 = a2(t4, u3[c3], [0], "06"), l3 = Dr(s2(t4, u3[c3], [1], "86"));
                  if ("2b06010505073001" == h3) i3.array.push({ ocsp: l3 });
                  else {
                    if ("2b06010505073002" != h3) throw new Error("unknown method: " + h3);
                    i3.array.push({ caissuer: l3 });
                  }
                }
                return i3;
              }, this.getExtCertificatePolicies = function(t4, e3) {
                if (void 0 === t4 && void 0 === e3) {
                  var r4 = this.getExtInfo("certificatePolicies");
                  if (void 0 === r4) return;
                  t4 = o2(this.hex, r4.vidx), e3 = r4.critical;
                }
                var i3 = { extname: "certificatePolicies", array: [] };
                e3 && (i3.critical = true);
                for (var s3 = n2(t4, 0), a3 = 0; a3 < s3.length; a3++) {
                  var u3 = o2(t4, s3[a3]), c3 = this.getPolicyInformation(u3);
                  i3.array.push(c3);
                }
                return i3;
              }, this.getPolicyInformation = function(t4) {
                var e3 = {}, r4 = s2(t4, 0, [0], "06");
                e3.policyoid = d2(r4);
                var i3 = l2(t4, 0, [1], "30");
                if (-1 != i3) {
                  e3.array = [];
                  for (var a3 = n2(t4, i3), u3 = 0; u3 < a3.length; u3++) {
                    var c3 = o2(t4, a3[u3]), h3 = this.getPolicyQualifierInfo(c3);
                    e3.array.push(h3);
                  }
                }
                return e3;
              }, this.getPolicyQualifierInfo = function(t4) {
                var e3 = {}, r4 = s2(t4, 0, [0], "06");
                if ("2b06010505070201" === r4) {
                  var n3 = a2(t4, 0, [1], "16");
                  e3.cps = Lr(n3);
                } else if ("2b06010505070202" === r4) {
                  var i3 = u2(t4, 0, [1], "30");
                  e3.unotice = this.getUserNotice(i3);
                }
                return e3;
              }, this.getUserNotice = function(t4) {
                for (var e3 = {}, r4 = n2(t4, 0), i3 = 0; i3 < r4.length; i3++) {
                  var s3 = o2(t4, r4[i3]);
                  "30" != s3.substr(0, 2) && (e3.exptext = this.getDisplayText(s3));
                }
                return e3;
              }, this.getDisplayText = function(t4) {
                var e3 = {};
                return e3.type = { "0c": "utf8", 16: "ia5", "1a": "vis", "1e": "bmp" }[t4.substr(0, 2)], e3.str = Lr(i2(t4, 0)), e3;
              }, this.getExtCRLNumber = function(t4, e3) {
                var r4 = { extname: "cRLNumber" };
                if (e3 && (r4.critical = true), "02" == t4.substr(0, 2)) return r4.num = { hex: i2(t4, 0) }, r4;
                throw new Error("hExtV parse error: " + t4);
              }, this.getExtCRLReason = function(t4, e3) {
                var r4 = { extname: "cRLReason" };
                if (e3 && (r4.critical = true), "0a" == t4.substr(0, 2)) return r4.code = parseInt(i2(t4, 0), 16), r4;
                throw new Error("hExtV parse error: " + t4);
              }, this.getExtOcspNonce = function(t4, e3) {
                var r4 = { extname: "ocspNonce" };
                e3 && (r4.critical = true);
                var n3 = i2(t4, 0);
                return r4.hex = n3, r4;
              }, this.getExtOcspNoCheck = function(t4, e3) {
                var r4 = { extname: "ocspNoCheck" };
                return e3 && (r4.critical = true), r4;
              }, this.getExtAdobeTimeStamp = function(t4, e3) {
                if (void 0 === t4 && void 0 === e3) {
                  var r4 = this.getExtInfo("adobeTimeStamp");
                  if (void 0 === r4) return;
                  t4 = o2(this.hex, r4.vidx), e3 = r4.critical;
                }
                var i3 = { extname: "adobeTimeStamp" };
                e3 && (i3.critical = true);
                var s3 = n2(t4, 0);
                if (s3.length > 1) {
                  var a3 = o2(t4, s3[1]), u3 = this.getGeneralName(a3);
                  null != u3.uri && (i3.uri = u3.uri);
                }
                if (s3.length > 2) {
                  var c3 = o2(t4, s3[2]);
                  "0101ff" == c3 && (i3.reqauth = true), "010100" == c3 && (i3.reqauth = false);
                }
                return i3;
              }, this.getX500NameRule = function(t4) {
                for (var e3 = null, r4 = [], n3 = 0; n3 < t4.length; n3++) for (var i3 = t4[n3], o3 = 0; o3 < i3.length; o3++) r4.push(i3[o3]);
                for (n3 = 0; n3 < r4.length; n3++) {
                  var s3 = r4[n3], a3 = s3.ds, u3 = s3.value, c3 = s3.type;
                  if (":" + a3, "prn" != a3 && "utf8" != a3 && "ia5" != a3) return "mixed";
                  if ("ia5" == a3) {
                    if ("CN" != c3) return "mixed";
                    if (Sr.lang.String.isMail(u3)) continue;
                    return "mixed";
                  }
                  if ("C" == c3) {
                    if ("prn" == a3) continue;
                    return "mixed";
                  }
                  if (":" + a3, null == e3) e3 = a3;
                  else if (e3 !== a3) return "mixed";
                }
                return null == e3 ? "prn" : e3;
              }, this.getX500Name = function(t4) {
                var e3 = this.getX500NameArray(t4);
                return { array: e3, str: this.dnarraytostr(e3) };
              }, this.getX500NameArray = function(t4) {
                for (var e3 = [], r4 = n2(t4, 0), i3 = 0; i3 < r4.length; i3++) e3.push(this.getRDN(o2(t4, r4[i3])));
                return e3;
              }, this.getRDN = function(t4) {
                for (var e3 = [], r4 = n2(t4, 0), i3 = 0; i3 < r4.length; i3++) e3.push(this.getAttrTypeAndValue(o2(t4, r4[i3])));
                return e3;
              }, this.getAttrTypeAndValue = function(t4) {
                var e3 = { type: null, value: null, ds: null }, r4 = n2(t4, 0), i3 = s2(t4, r4[0], [], "06"), o3 = s2(t4, r4[1], []), a3 = Sr.asn1.ASN1Util.oidHexToInt(i3);
                return e3.type = Sr.asn1.x509.OID.oid2atype(a3), e3.ds = this.HEX2STAG[t4.substr(r4[1], 2)], "bmp" != e3.ds ? e3.value = Dr(o3) : e3.value = Yr(o3), e3;
              }, this.readCertPEM = function(t4) {
                this.readCertHex(v2(t4));
              }, this.readCertHex = function(t4) {
                this.hex = t4, this.getVersion();
                try {
                  h2(this.hex, 0, [0, 7], "a3"), this.parseExt();
                } catch (t5) {
                }
              }, this.getParam = function() {
                var t4 = {};
                return t4.version = this.getVersion(), t4.serial = { hex: this.getSerialNumberHex() }, t4.sigalg = this.getSignatureAlgorithmField(), t4.issuer = this.getIssuer(), t4.notbefore = this.getNotBefore(), t4.notafter = this.getNotAfter(), t4.subject = this.getSubject(), t4.sbjpubkey = jr(this.getPublicKeyHex(), "PUBLIC KEY"), this.aExtInfo.length > 0 && (t4.ext = this.getExtParamArray()), t4.sighex = this.getSignatureValueHex(), t4;
              }, this.getExtParamArray = function(t4) {
                null == t4 && (-1 != l2(this.hex, 0, [0, "[3]"]) && (t4 = c2(this.hex, 0, [0, "[3]", 0], "30")));
                for (var e3 = [], r4 = n2(t4, 0), i3 = 0; i3 < r4.length; i3++) {
                  var s3 = o2(t4, r4[i3]), a3 = this.getExtParam(s3);
                  null != a3 && e3.push(a3);
                }
                return e3;
              }, this.getExtParam = function(t4) {
                var e3 = n2(t4, 0).length;
                if (2 != e3 && 3 != e3) throw new Error("wrong number elements in Extension: " + e3 + " " + t4);
                var r4 = p2(s2(t4, 0, [0], "06")), i3 = false;
                3 == e3 && "0101ff" == u2(t4, 0, [1]) && (i3 = true);
                var o3 = u2(t4, 0, [e3 - 1, 0]), a3 = void 0;
                if ("2.5.29.14" == r4 ? a3 = this.getExtSubjectKeyIdentifier(o3, i3) : "2.5.29.15" == r4 ? a3 = this.getExtKeyUsage(o3, i3) : "2.5.29.17" == r4 ? a3 = this.getExtSubjectAltName(o3, i3) : "2.5.29.18" == r4 ? a3 = this.getExtIssuerAltName(o3, i3) : "2.5.29.19" == r4 ? a3 = this.getExtBasicConstraints(o3, i3) : "2.5.29.31" == r4 ? a3 = this.getExtCRLDistributionPoints(o3, i3) : "2.5.29.32" == r4 ? a3 = this.getExtCertificatePolicies(o3, i3) : "2.5.29.35" == r4 ? a3 = this.getExtAuthorityKeyIdentifier(o3, i3) : "2.5.29.37" == r4 ? a3 = this.getExtExtKeyUsage(o3, i3) : "1.3.6.1.5.5.7.1.1" == r4 ? a3 = this.getExtAuthorityInfoAccess(o3, i3) : "2.5.29.20" == r4 ? a3 = this.getExtCRLNumber(o3, i3) : "2.5.29.21" == r4 ? a3 = this.getExtCRLReason(o3, i3) : "1.3.6.1.5.5.7.48.1.2" == r4 ? a3 = this.getExtOcspNonce(o3, i3) : "1.3.6.1.5.5.7.48.1.5" == r4 ? a3 = this.getExtOcspNoCheck(o3, i3) : "1.2.840.113583.1.1.9.1" == r4 && (a3 = this.getExtAdobeTimeStamp(o3, i3)), null != a3) return a3;
                var c3 = { extname: r4, extn: o3 };
                return i3 && (c3.critical = true), c3;
              }, this.findExt = function(t4, e3) {
                for (var r4 = 0; r4 < t4.length; r4++) if (t4[r4].extname == e3) return t4[r4];
                return null;
              }, this.updateExtCDPFullURI = function(t4, e3) {
                var r4 = this.findExt(t4, "cRLDistributionPoints");
                if (null != r4 && null != r4.array) {
                  for (var n3 = r4.array, i3 = 0; i3 < n3.length; i3++) if (null != n3[i3].dpname && null != n3[i3].dpname.full) for (var o3 = n3[i3].dpname.full, s3 = 0; s3 < o3.length; s3++) {
                    var a3 = o3[i3];
                    null != a3.uri && (a3.uri = e3);
                  }
                }
              }, this.updateExtAIAOCSP = function(t4, e3) {
                var r4 = this.findExt(t4, "authorityInfoAccess");
                if (null != r4 && null != r4.array) for (var n3 = r4.array, i3 = 0; i3 < n3.length; i3++) null != n3[i3].ocsp && (n3[i3].ocsp = e3);
              }, this.updateExtAIACAIssuer = function(t4, e3) {
                var r4 = this.findExt(t4, "authorityInfoAccess");
                if (null != r4 && null != r4.array) for (var n3 = r4.array, i3 = 0; i3 < n3.length; i3++) null != n3[i3].caissuer && (n3[i3].caissuer = e3);
              }, this.dnarraytostr = function(t4) {
                return "/" + t4.map(function(t5) {
                  return function e3(t6) {
                    return t6.map(function(t7) {
                      return function e4(t8) {
                        return t8.type + "=" + t8.value;
                      }(t7).replace(/\+/, "\\+");
                    }).join("+");
                  }(t5).replace(/\//, "\\/");
                }).join("/");
              }, this.getInfo = function() {
                var t4, e3, r4, n3 = function t5(e4) {
                  return JSON.stringify(e4.array).replace(/[\[\]\{\}\"]/g, "");
                }, i3 = function t5(e4) {
                  for (var r5 = "", n4 = e4.array, i4 = 0; i4 < n4.length; i4++) {
                    var o4 = n4[i4];
                    if (r5 += "    policy oid: " + o4.policyoid + "\n", void 0 !== o4.array) for (var s4 = 0; s4 < o4.array.length; s4++) {
                      var a4 = o4.array[s4];
                      void 0 !== a4.cps && (r5 += "    cps: " + a4.cps + "\n");
                    }
                  }
                  return r5;
                }, o3 = function t5(e4) {
                  for (var r5 = "", n4 = e4.array, i4 = 0; i4 < n4.length; i4++) {
                    var o4 = n4[i4];
                    try {
                      void 0 !== o4.dpname.full[0].uri && (r5 += "    " + o4.dpname.full[0].uri + "\n");
                    } catch (t6) {
                    }
                    try {
                      void 0 !== o4.dname.full[0].dn.hex && (r5 += "    " + on2.hex2dn(o4.dpname.full[0].dn.hex) + "\n");
                    } catch (t6) {
                    }
                  }
                  return r5;
                }, s3 = function t5(e4) {
                  for (var r5 = "", n4 = e4.array, i4 = 0; i4 < n4.length; i4++) {
                    var o4 = n4[i4];
                    void 0 !== o4.caissuer && (r5 += "    caissuer: " + o4.caissuer + "\n"), void 0 !== o4.ocsp && (r5 += "    ocsp: " + o4.ocsp + "\n");
                  }
                  return r5;
                };
                if (t4 = "Basic Fields\n", t4 += "  serial number: " + this.getSerialNumberHex() + "\n", t4 += "  signature algorithm: " + this.getSignatureAlgorithmField() + "\n", t4 += "  issuer: " + this.getIssuerString() + "\n", t4 += "  notBefore: " + this.getNotBefore() + "\n", t4 += "  notAfter: " + this.getNotAfter() + "\n", t4 += "  subject: " + this.getSubjectString() + "\n", t4 += "  subject public key info: \n", t4 += "    key algorithm: " + (e3 = this.getPublicKey()).type + "\n", "RSA" === e3.type && (t4 += "    n=" + $r(e3.n.toString(16)).substr(0, 16) + "...\n", t4 += "    e=" + $r(e3.e.toString(16)) + "\n"), null != (r4 = this.aExtInfo)) {
                  t4 += "X509v3 Extensions:\n";
                  for (var a3 = 0; a3 < r4.length; a3++) {
                    var u3 = r4[a3], c3 = Sr.asn1.x509.OID.oid2name(u3.oid);
                    "" === c3 && (c3 = u3.oid);
                    var h3 = "";
                    if (true === u3.critical && (h3 = "CRITICAL"), t4 += "  " + c3 + " " + h3 + ":\n", "basicConstraints" === c3) {
                      var l3 = this.getExtBasicConstraints();
                      void 0 === l3.cA ? t4 += "    {}\n" : (t4 += "    cA=true", void 0 !== l3.pathLen && (t4 += ", pathLen=" + l3.pathLen), t4 += "\n");
                    } else if ("keyUsage" === c3) t4 += "    " + this.getExtKeyUsageString() + "\n";
                    else if ("subjectKeyIdentifier" === c3) t4 += "    " + this.getExtSubjectKeyIdentifier().kid.hex + "\n";
                    else if ("authorityKeyIdentifier" === c3) {
                      var f3 = this.getExtAuthorityKeyIdentifier();
                      void 0 !== f3.kid && (t4 += "    kid=" + f3.kid.hex + "\n");
                    } else {
                      if ("extKeyUsage" === c3) t4 += "    " + this.getExtExtKeyUsage().array.join(", ") + "\n";
                      else if ("subjectAltName" === c3) t4 += "    " + n3(this.getExtSubjectAltName()) + "\n";
                      else if ("cRLDistributionPoints" === c3) t4 += o3(this.getExtCRLDistributionPoints());
                      else if ("authorityInfoAccess" === c3) t4 += s3(this.getExtAuthorityInfoAccess());
                      else "certificatePolicies" === c3 && (t4 += i3(this.getExtCertificatePolicies()));
                    }
                  }
                }
                return t4 += "signature algorithm: " + this.getSignatureAlgorithmName() + "\n", t4 += "signature: " + this.getSignatureValueHex().substr(0, 16) + "...\n";
              }, "string" == typeof t3 && (-1 != t3.indexOf("-----BEGIN") ? this.readCertPEM(t3) : Sr.lang.String.isHex(t3) && this.readCertHex(t3));
            }
            Me.prototype.sign = function(t3, e2) {
              var r3 = function t4(r4) {
                return Sr.crypto.Util.hashString(r4, e2);
              }(t3);
              return this.signWithMessageHash(r3, e2);
            }, Me.prototype.signWithMessageHash = function(t3, e2) {
              var r3 = Oe(Sr.crypto.Util.getPaddedDigestInfoHex(t3, e2, this.n.bitLength()), 16);
              return en(this.doPrivate(r3).toString(16), this.n.bitLength());
            }, Me.prototype.signPSS = function(t3, e2, r3) {
              var n2 = function t4(r4) {
                return Sr.crypto.Util.hashHex(r4, e2);
              }(Nr(t3));
              return void 0 === r3 && (r3 = -1), this.signWithMessageHashPSS(n2, e2, r3);
            }, Me.prototype.signWithMessageHashPSS = function(t3, e2, r3) {
              var n2, i2 = Lr(t3), o2 = i2.length, s2 = this.n.bitLength() - 1, a2 = Math.ceil(s2 / 8), u2 = function t4(r4) {
                return Sr.crypto.Util.hashHex(r4, e2);
              };
              if (-1 === r3 || void 0 === r3) r3 = o2;
              else if (-2 === r3) r3 = a2 - o2 - 2;
              else if (r3 < -2) throw new Error("invalid salt length");
              if (a2 < o2 + r3 + 2) throw new Error("data too long");
              var c2 = "";
              r3 > 0 && (c2 = new Array(r3), new Be().nextBytes(c2), c2 = String.fromCharCode.apply(String, c2));
              var h2 = Lr(u2(Nr("\0\0\0\0\0\0\0\0" + i2 + c2))), l2 = [];
              for (n2 = 0; n2 < a2 - r3 - o2 - 2; n2 += 1) l2[n2] = 0;
              var f2 = String.fromCharCode.apply(String, l2) + "" + c2, g2 = rn(h2, f2.length, u2), d2 = [];
              for (n2 = 0; n2 < f2.length; n2 += 1) d2[n2] = f2.charCodeAt(n2) ^ g2.charCodeAt(n2);
              var p2 = 65280 >> 8 * a2 - s2 & 255;
              for (d2[0] &= ~p2, n2 = 0; n2 < o2; n2++) d2.push(h2.charCodeAt(n2));
              return d2.push(188), en(this.doPrivate(new w(d2)).toString(16), this.n.bitLength());
            }, Me.prototype.verify = function(t3, e2) {
              if (null == (e2 = e2.toLowerCase()).match(/^[0-9a-f]+$/)) return false;
              var r3 = Oe(e2, 16), n2 = this.n.bitLength();
              if (r3.bitLength() > n2) return false;
              var i2 = this.doPublic(r3).toString(16);
              if (i2.length + 3 != n2 / 4) return false;
              var o2 = nn(i2.replace(/^1f+00/, ""));
              if (0 == o2.length) return false;
              var s2 = o2[0];
              return o2[1] == function t4(e3) {
                return Sr.crypto.Util.hashString(e3, s2);
              }(t3);
            }, Me.prototype.verifyWithMessageHash = function(t3, e2) {
              if (e2.length != Math.ceil(this.n.bitLength() / 4)) return false;
              var r3 = Oe(e2, 16);
              if (r3.bitLength() > this.n.bitLength()) return 0;
              var n2 = nn(this.doPublic(r3).toString(16).replace(/^1f+00/, ""));
              if (0 == n2.length) return false;
              n2[0];
              return n2[1] == t3;
            }, Me.prototype.verifyPSS = function(t3, e2, r3, n2) {
              var i2 = function t4(e3) {
                return Sr.crypto.Util.hashHex(e3, r3);
              }(Nr(t3));
              return void 0 === n2 && (n2 = -1), this.verifyWithMessageHashPSS(i2, e2, r3, n2);
            }, Me.prototype.verifyWithMessageHashPSS = function(t3, e2, r3, n2) {
              if (e2.length != Math.ceil(this.n.bitLength() / 4)) return false;
              var i2, o2 = new w(e2, 16), s2 = function t4(e3) {
                return Sr.crypto.Util.hashHex(e3, r3);
              }, a2 = Lr(t3), u2 = a2.length, c2 = this.n.bitLength() - 1, h2 = Math.ceil(c2 / 8);
              if (-1 === n2 || void 0 === n2) n2 = u2;
              else if (-2 === n2) n2 = h2 - u2 - 2;
              else if (n2 < -2) throw new Error("invalid salt length");
              if (h2 < u2 + n2 + 2) throw new Error("data too long");
              var l2 = this.doPublic(o2).toByteArray();
              for (i2 = 0; i2 < l2.length; i2 += 1) l2[i2] &= 255;
              for (; l2.length < h2; ) l2.unshift(0);
              if (188 !== l2[h2 - 1]) throw new Error("encoded message does not end in 0xbc");
              var f2 = (l2 = String.fromCharCode.apply(String, l2)).substr(0, h2 - u2 - 1), g2 = l2.substr(f2.length, u2), d2 = 65280 >> 8 * h2 - c2 & 255;
              if (0 != (f2.charCodeAt(0) & d2)) throw new Error("bits beyond keysize not zero");
              var p2 = rn(g2, f2.length, s2), v2 = [];
              for (i2 = 0; i2 < f2.length; i2 += 1) v2[i2] = f2.charCodeAt(i2) ^ p2.charCodeAt(i2);
              v2[0] &= ~d2;
              var y2 = h2 - u2 - n2 - 2;
              for (i2 = 0; i2 < y2; i2 += 1) if (0 !== v2[i2]) throw new Error("leftmost octets not zero");
              if (1 !== v2[y2]) throw new Error("0x01 marker not found");
              return g2 === Lr(s2(Nr("\0\0\0\0\0\0\0\0" + a2 + String.fromCharCode.apply(String, v2.slice(-n2)))));
            }, Me.SALT_LEN_HLEN = -1, Me.SALT_LEN_MAX = -2, Me.SALT_LEN_RECOVER = -2, on2.hex2dn = function(t3, e2) {
              void 0 === e2 && (e2 = 0);
              var r3 = new on2();
              Fr.getTLV(t3, e2);
              return r3.getX500Name(t3).str;
            }, on2.hex2rdn = function(t3, e2) {
              if (void 0 === e2 && (e2 = 0), "31" !== t3.substr(e2, 2)) throw new Error("malformed RDN");
              for (var r3 = new Array(), n2 = Fr.getChildIdx(t3, e2), i2 = 0; i2 < n2.length; i2++) r3.push(on2.hex2attrTypeValue(t3, n2[i2]));
              return (r3 = r3.map(function(t4) {
                return t4.replace("+", "\\+");
              })).join("+");
            }, on2.hex2attrTypeValue = function(t3, e2) {
              var r3 = Fr, n2 = r3.getV;
              if (void 0 === e2 && (e2 = 0), "30" !== t3.substr(e2, 2)) throw new Error("malformed attribute type and value");
              var i2 = r3.getChildIdx(t3, e2);
              2 !== i2.length || t3.substr(i2[0], 2);
              var o2 = n2(t3, i2[0]), s2 = Sr.asn1.ASN1Util.oidHexToInt(o2);
              return Sr.asn1.x509.OID.oid2atype(s2) + "=" + Lr(n2(t3, i2[1]));
            }, on2.getPublicKeyFromCertHex = function(t3) {
              var e2 = new on2();
              return e2.readCertHex(t3), e2.getPublicKey();
            }, on2.getPublicKeyFromCertPEM = function(t3) {
              var e2 = new on2();
              return e2.readCertPEM(t3), e2.getPublicKey();
            }, on2.getPublicKeyInfoPropOfCertPEM = function(t3) {
              var e2, r3, n2 = Fr.getVbyList, i2 = {};
              return i2.algparam = null, (e2 = new on2()).readCertPEM(t3), r3 = e2.getPublicKeyHex(), i2.keyhex = n2(r3, 0, [1], "03").substr(2), i2.algoid = n2(r3, 0, [0, 0], "06"), "2a8648ce3d0201" === i2.algoid && (i2.algparam = n2(r3, 0, [0, 1], "06")), i2;
            }, on2.KEYUSAGE_NAME = ["digitalSignature", "nonRepudiation", "keyEncipherment", "dataEncipherment", "keyAgreement", "keyCertSign", "cRLSign", "encipherOnly", "decipherOnly"], void 0 !== Sr && Sr || (e.KJUR = Sr = {}), void 0 !== Sr.jws && Sr.jws || (Sr.jws = {}), Sr.jws.JWS = function() {
              var t3 = Sr.jws.JWS.isSafeJSONString;
              this.parseJWS = function(e2, r3) {
                if (void 0 === this.parsedJWS || !r3 && void 0 === this.parsedJWS.sigvalH) {
                  var n2 = e2.match(/^([^.]+)\.([^.]+)\.([^.]+)$/);
                  if (null == n2) throw "JWS signature is not a form of 'Head.Payload.SigValue'.";
                  var i2 = n2[1], o2 = n2[2], s2 = n2[3], a2 = i2 + "." + o2;
                  if (this.parsedJWS = {}, this.parsedJWS.headB64U = i2, this.parsedJWS.payloadB64U = o2, this.parsedJWS.sigvalB64U = s2, this.parsedJWS.si = a2, !r3) {
                    var u2 = Rr(s2), c2 = Oe(u2, 16);
                    this.parsedJWS.sigvalH = u2, this.parsedJWS.sigvalBI = c2;
                  }
                  var h2 = wr(i2), l2 = wr(o2);
                  if (this.parsedJWS.headS = h2, this.parsedJWS.payloadS = l2, !t3(h2, this.parsedJWS, "headP")) throw "malformed JSON string for JWS Head: " + h2;
                }
              };
            }, Sr.jws.JWS.sign = function(t3, e2, r3, n2, i2) {
              var o2, s2, a2, u2 = Sr, c2 = u2.jws.JWS, h2 = c2.readSafeJSONString, l2 = c2.isSafeJSONString, f2 = u2.crypto, d2 = (f2.ECDSA, f2.Mac), p2 = f2.Signature, v2 = JSON;
              if ("string" != typeof e2 && "object" != (void 0 === e2 ? "undefined" : g(e2))) throw "spHeader must be JSON string or object: " + e2;
              if ("object" == (void 0 === e2 ? "undefined" : g(e2)) && (s2 = e2, o2 = v2.stringify(s2)), "string" == typeof e2) {
                if (!l2(o2 = e2)) throw "JWS Head is not safe JSON string: " + o2;
                s2 = h2(o2);
              }
              if (a2 = r3, "object" == (void 0 === r3 ? "undefined" : g(r3)) && (a2 = v2.stringify(r3)), "" != t3 && null != t3 || void 0 === s2.alg || (t3 = s2.alg), "" != t3 && null != t3 && void 0 === s2.alg && (s2.alg = t3, o2 = v2.stringify(s2)), t3 !== s2.alg) throw "alg and sHeader.alg doesn't match: " + t3 + "!=" + s2.alg;
              var y2 = null;
              if (void 0 === c2.jwsalg2sigalg[t3]) throw "unsupported alg name: " + t3;
              y2 = c2.jwsalg2sigalg[t3];
              var m2 = br(o2) + "." + br(a2), _2 = "";
              if ("Hmac" == y2.substr(0, 4)) {
                if (void 0 === n2) throw "mac key shall be specified for HS* alg";
                var S2 = new d2({ alg: y2, prov: "cryptojs", pass: n2 });
                S2.updateString(m2), _2 = S2.doFinal();
              } else if (-1 != y2.indexOf("withECDSA")) {
                (w2 = new p2({ alg: y2 })).init(n2, i2), w2.updateString(m2);
                var b2 = w2.sign();
                _2 = Sr.crypto.ECDSA.asn1SigToConcatSig(b2);
              } else {
                var w2;
                if ("none" != y2) (w2 = new p2({ alg: y2 })).init(n2, i2), w2.updateString(m2), _2 = w2.sign();
              }
              return m2 + "." + Tr(_2);
            }, Sr.jws.JWS.verify = function(t3, e2, r3) {
              var n2, i2 = Sr, o2 = i2.jws.JWS, s2 = o2.readSafeJSONString, a2 = i2.crypto, u2 = a2.ECDSA, c2 = a2.Mac, h2 = a2.Signature;
              void 0 !== g(Me) && (n2 = Me);
              var l2 = t3.split(".");
              if (3 !== l2.length) return false;
              var f2 = l2[0] + "." + l2[1], d2 = Rr(l2[2]), p2 = s2(wr(l2[0])), v2 = null, y2 = null;
              if (void 0 === p2.alg) throw "algorithm not specified in header";
              if ((y2 = (v2 = p2.alg).substr(0, 2), null != r3 && "[object Array]" === Object.prototype.toString.call(r3) && r3.length > 0) && -1 == (":" + r3.join(":") + ":").indexOf(":" + v2 + ":")) throw "algorithm '" + v2 + "' not accepted in the list";
              if ("none" != v2 && null === e2) throw "key shall be specified to verify.";
              if ("string" == typeof e2 && -1 != e2.indexOf("-----BEGIN ") && (e2 = tn.getKey(e2)), !("RS" != y2 && "PS" != y2 || e2 instanceof n2)) throw "key shall be a RSAKey obj for RS* and PS* algs";
              if ("ES" == y2 && !(e2 instanceof u2)) throw "key shall be a ECDSA obj for ES* algs";
              var m2 = null;
              if (void 0 === o2.jwsalg2sigalg[p2.alg]) throw "unsupported alg name: " + v2;
              if ("none" == (m2 = o2.jwsalg2sigalg[v2])) throw "not supported";
              if ("Hmac" == m2.substr(0, 4)) {
                if (void 0 === e2) throw "hexadecimal key shall be specified for HMAC";
                var _2 = new c2({ alg: m2, pass: e2 });
                return _2.updateString(f2), d2 == _2.doFinal();
              }
              if (-1 != m2.indexOf("withECDSA")) {
                var S2, b2 = null;
                try {
                  b2 = u2.concatSigToASN1Sig(d2);
                } catch (t4) {
                  return false;
                }
                return (S2 = new h2({ alg: m2 })).init(e2), S2.updateString(f2), S2.verify(b2);
              }
              return (S2 = new h2({ alg: m2 })).init(e2), S2.updateString(f2), S2.verify(d2);
            }, Sr.jws.JWS.parse = function(t3) {
              var e2, r3, n2, i2 = t3.split("."), o2 = {};
              if (2 != i2.length && 3 != i2.length) throw "malformed sJWS: wrong number of '.' splitted elements";
              return e2 = i2[0], r3 = i2[1], 3 == i2.length && (n2 = i2[2]), o2.headerObj = Sr.jws.JWS.readSafeJSONString(wr(e2)), o2.payloadObj = Sr.jws.JWS.readSafeJSONString(wr(r3)), o2.headerPP = JSON.stringify(o2.headerObj, null, "  "), null == o2.payloadObj ? o2.payloadPP = wr(r3) : o2.payloadPP = JSON.stringify(o2.payloadObj, null, "  "), void 0 !== n2 && (o2.sigHex = Rr(n2)), o2;
            }, Sr.jws.JWS.verifyJWT = function(t3, e2, r3) {
              var n2 = Sr.jws, i2 = n2.JWS, o2 = i2.readSafeJSONString, s2 = i2.inArray, a2 = i2.includedArray, u2 = t3.split("."), c2 = u2[0], h2 = u2[1], l2 = (Rr(u2[2]), o2(wr(c2))), f2 = o2(wr(h2));
              if (void 0 === l2.alg) return false;
              if (void 0 === r3.alg) throw "acceptField.alg shall be specified";
              if (!s2(l2.alg, r3.alg)) return false;
              if (void 0 !== f2.iss && "object" === g(r3.iss) && !s2(f2.iss, r3.iss)) return false;
              if (void 0 !== f2.sub && "object" === g(r3.sub) && !s2(f2.sub, r3.sub)) return false;
              if (void 0 !== f2.aud && "object" === g(r3.aud)) {
                if ("string" == typeof f2.aud) {
                  if (!s2(f2.aud, r3.aud)) return false;
                } else if ("object" == g(f2.aud) && !a2(f2.aud, r3.aud)) return false;
              }
              var d2 = n2.IntDate.getNow();
              return void 0 !== r3.verifyAt && "number" == typeof r3.verifyAt && (d2 = r3.verifyAt), void 0 !== r3.gracePeriod && "number" == typeof r3.gracePeriod || (r3.gracePeriod = 0), !(void 0 !== f2.exp && "number" == typeof f2.exp && f2.exp + r3.gracePeriod < d2) && (!(void 0 !== f2.nbf && "number" == typeof f2.nbf && d2 < f2.nbf - r3.gracePeriod) && (!(void 0 !== f2.iat && "number" == typeof f2.iat && d2 < f2.iat - r3.gracePeriod) && ((void 0 === f2.jti || void 0 === r3.jti || f2.jti === r3.jti) && !!i2.verify(t3, e2, r3.alg))));
            }, Sr.jws.JWS.includedArray = function(t3, e2) {
              var r3 = Sr.jws.JWS.inArray;
              if (null === t3) return false;
              if ("object" !== (void 0 === t3 ? "undefined" : g(t3))) return false;
              if ("number" != typeof t3.length) return false;
              for (var n2 = 0; n2 < t3.length; n2++) if (!r3(t3[n2], e2)) return false;
              return true;
            }, Sr.jws.JWS.inArray = function(t3, e2) {
              if (null === e2) return false;
              if ("object" !== (void 0 === e2 ? "undefined" : g(e2))) return false;
              if ("number" != typeof e2.length) return false;
              for (var r3 = 0; r3 < e2.length; r3++) if (e2[r3] == t3) return true;
              return false;
            }, Sr.jws.JWS.jwsalg2sigalg = { HS256: "HmacSHA256", HS384: "HmacSHA384", HS512: "HmacSHA512", RS256: "SHA256withRSA", RS384: "SHA384withRSA", RS512: "SHA512withRSA", ES256: "SHA256withECDSA", ES384: "SHA384withECDSA", PS256: "SHA256withRSAandMGF1", PS384: "SHA384withRSAandMGF1", PS512: "SHA512withRSAandMGF1", none: "none" }, Sr.jws.JWS.isSafeJSONString = function(t3, e2, r3) {
              var n2 = null;
              try {
                return "object" != (void 0 === (n2 = _r(t3)) ? "undefined" : g(n2)) || n2.constructor === Array ? 0 : (e2 && (e2[r3] = n2), 1);
              } catch (t4) {
                return 0;
              }
            }, Sr.jws.JWS.readSafeJSONString = function(t3) {
              var e2 = null;
              try {
                return "object" != (void 0 === (e2 = _r(t3)) ? "undefined" : g(e2)) || e2.constructor === Array ? null : e2;
              } catch (t4) {
                return null;
              }
            }, Sr.jws.JWS.getEncodedSignatureValueFromJWS = function(t3) {
              var e2 = t3.match(/^[^.]+\.[^.]+\.([^.]+)$/);
              if (null == e2) throw "JWS signature is not a form of 'Head.Payload.SigValue'.";
              return e2[1];
            }, Sr.jws.JWS.getJWKthumbprint = function(t3) {
              if ("RSA" !== t3.kty && "EC" !== t3.kty && "oct" !== t3.kty) throw "unsupported algorithm for JWK Thumprint";
              var e2 = "{";
              if ("RSA" === t3.kty) {
                if ("string" != typeof t3.n || "string" != typeof t3.e) throw "wrong n and e value for RSA key";
                e2 += '"e":"' + t3.e + '",', e2 += '"kty":"' + t3.kty + '",', e2 += '"n":"' + t3.n + '"}';
              } else if ("EC" === t3.kty) {
                if ("string" != typeof t3.crv || "string" != typeof t3.x || "string" != typeof t3.y) throw "wrong crv, x and y value for EC key";
                e2 += '"crv":"' + t3.crv + '",', e2 += '"kty":"' + t3.kty + '",', e2 += '"x":"' + t3.x + '",', e2 += '"y":"' + t3.y + '"}';
              } else if ("oct" === t3.kty) {
                if ("string" != typeof t3.k) throw "wrong k value for oct(symmetric) key";
                e2 += '"kty":"' + t3.kty + '",', e2 += '"k":"' + t3.k + '"}';
              }
              var r3 = Nr(e2);
              return Tr(Sr.crypto.Util.hashHex(r3, "sha256"));
            }, Sr.jws.IntDate = {}, Sr.jws.IntDate.get = function(t3) {
              var e2 = Sr.jws.IntDate, r3 = e2.getNow, n2 = e2.getZulu;
              if ("now" == t3) return r3();
              if ("now + 1hour" == t3) return r3() + 3600;
              if ("now + 1day" == t3) return r3() + 86400;
              if ("now + 1month" == t3) return r3() + 2592e3;
              if ("now + 1year" == t3) return r3() + 31536e3;
              if (t3.match(/Z$/)) return n2(t3);
              if (t3.match(/^[0-9]+$/)) return parseInt(t3);
              throw "unsupported format: " + t3;
            }, Sr.jws.IntDate.getZulu = function(t3) {
              return Vr(t3);
            }, Sr.jws.IntDate.getNow = function() {
              return ~~(/* @__PURE__ */ new Date() / 1e3);
            }, Sr.jws.IntDate.intDate2UTCString = function(t3) {
              return new Date(1e3 * t3).toUTCString();
            }, Sr.jws.IntDate.intDate2Zulu = function(t3) {
              var e2 = new Date(1e3 * t3);
              return ("0000" + e2.getUTCFullYear()).slice(-4) + ("00" + (e2.getUTCMonth() + 1)).slice(-2) + ("00" + e2.getUTCDate()).slice(-2) + ("00" + e2.getUTCHours()).slice(-2) + ("00" + e2.getUTCMinutes()).slice(-2) + ("00" + e2.getUTCSeconds()).slice(-2) + "Z";
            }, e.SecureRandom = Be, e.rng_seed_time = Re, e.BigInteger = w, e.RSAKey = Me;
            var sn = Sr.crypto.EDSA;
            e.EDSA = sn;
            var an = Sr.crypto.DSA;
            e.DSA = an;
            var un = Sr.crypto.Signature;
            e.Signature = un;
            var cn = Sr.crypto.MessageDigest;
            e.MessageDigest = cn;
            var hn = Sr.crypto.Mac;
            e.Mac = hn;
            var ln = Sr.crypto.Cipher;
            e.Cipher = ln, e.KEYUTIL = tn, e.ASN1HEX = Fr, e.X509 = on2, e.CryptoJS = v, e.b64tohex = S, e.b64toBA = b, e.stoBA = Er, e.BAtos = xr, e.BAtohex = Ar, e.stohex = kr, e.stob64 = function fn(t3) {
              return _(kr(t3));
            }, e.stob64u = function gn(t3) {
              return Pr(_(kr(t3)));
            }, e.b64utos = function dn(t3) {
              return xr(b(Cr(t3)));
            }, e.b64tob64u = Pr, e.b64utob64 = Cr, e.hex2b64 = _, e.hextob64u = Tr, e.b64utohex = Rr, e.utf8tob64u = br, e.b64utoutf8 = wr, e.utf8tob64 = function pn(t3) {
              return _(Kr(Gr(t3)));
            }, e.b64toutf8 = function vn(t3) {
              return decodeURIComponent(qr(S(t3)));
            }, e.utf8tohex = Ir, e.hextoutf8 = Dr, e.hextorstr = Lr, e.rstrtohex = Nr, e.hextob64 = Ur, e.hextob64nl = Br, e.b64nltohex = Or, e.hextopem = jr, e.pemtohex = Mr, e.hextoArrayBuffer = function yn(t3) {
              if (t3.length % 2 != 0) throw "input is not even length";
              if (null == t3.match(/^[0-9A-Fa-f]+$/)) throw "input is not hexadecimal";
              for (var e2 = new ArrayBuffer(t3.length / 2), r3 = new DataView(e2), n2 = 0; n2 < t3.length / 2; n2++) r3.setUint8(n2, parseInt(t3.substr(2 * n2, 2), 16));
              return e2;
            }, e.ArrayBuffertohex = function mn(t3) {
              for (var e2 = "", r3 = new DataView(t3), n2 = 0; n2 < t3.byteLength; n2++) e2 += ("00" + r3.getUint8(n2).toString(16)).slice(-2);
              return e2;
            }, e.zulutomsec = Hr, e.zulutosec = Vr, e.zulutodate = function _n(t3) {
              return new Date(Hr(t3));
            }, e.datetozulu = function Sn(t3, e2, r3) {
              var n2, i2 = t3.getUTCFullYear();
              if (e2) {
                if (i2 < 1950 || 2049 < i2) throw "not proper year for UTCTime: " + i2;
                n2 = ("" + i2).slice(-2);
              } else n2 = ("000" + i2).slice(-4);
              if (n2 += ("0" + (t3.getUTCMonth() + 1)).slice(-2), n2 += ("0" + t3.getUTCDate()).slice(-2), n2 += ("0" + t3.getUTCHours()).slice(-2), n2 += ("0" + t3.getUTCMinutes()).slice(-2), n2 += ("0" + t3.getUTCSeconds()).slice(-2), r3) {
                var o2 = t3.getUTCMilliseconds();
                0 !== o2 && (n2 += "." + (o2 = (o2 = ("00" + o2).slice(-3)).replace(/0+$/g, "")));
              }
              return n2 += "Z";
            }, e.uricmptohex = Kr, e.hextouricmp = qr, e.ipv6tohex = Jr, e.hextoipv6 = Wr, e.hextoip = zr, e.iptohex = function bn(t3) {
              var e2 = "malformed IP address";
              if (!(t3 = t3.toLowerCase(t3)).match(/^[0-9.]+$/)) {
                if (t3.match(/^[0-9a-f:]+$/) && -1 !== t3.indexOf(":")) return Jr(t3);
                throw e2;
              }
              var r3 = t3.split(".");
              if (4 !== r3.length) throw e2;
              var n2 = "";
              try {
                for (var i2 = 0; i2 < 4; i2++) {
                  n2 += ("0" + parseInt(r3[i2]).toString(16)).slice(-2);
                }
                return n2;
              } catch (t4) {
                throw e2;
              }
            }, e.encodeURIComponentAll = Gr, e.newline_toUnix = function wn(t3) {
              return t3 = t3.replace(/\r\n/gm, "\n");
            }, e.newline_toDos = function Fn(t3) {
              return t3 = (t3 = t3.replace(/\r\n/gm, "\n")).replace(/\n/gm, "\r\n");
            }, e.hextoposhex = $r, e.intarystrtohex = function En(t3) {
              t3 = (t3 = (t3 = t3.replace(/^\s*\[\s*/, "")).replace(/\s*\]\s*$/, "")).replace(/\s*/g, "");
              try {
                return t3.split(/,/).map(function(t4, e2, r3) {
                  var n2 = parseInt(t4);
                  if (n2 < 0 || 255 < n2) throw "integer not in range 0-255";
                  return ("00" + n2.toString(16)).slice(-2);
                }).join("");
              } catch (t4) {
                throw "malformed integer array string: " + t4;
              }
            }, e.strdiffidx = function t3(e2, r3) {
              var n2 = e2.length;
              e2.length > r3.length && (n2 = r3.length);
              for (var i2 = 0; i2 < n2; i2++) if (e2.charCodeAt(i2) != r3.charCodeAt(i2)) return i2;
              return e2.length != r3.length ? n2 : -1;
            }, e.KJUR = Sr;
            var xn = Sr.crypto;
            e.crypto = xn;
            var An = Sr.asn1;
            e.asn1 = An;
            var kn = Sr.jws;
            e.jws = kn;
            var Pn = Sr.lang;
            e.lang = Pn;
          }).call(this, r(28).Buffer);
        }, function(t, e, r) {
          "use strict";
          (function(t2) {
            var n = r(30), i = r(31), o = r(32);
            function s() {
              return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
            }
            function a(t3, e2) {
              if (s() < e2) throw new RangeError("Invalid typed array length");
              return u.TYPED_ARRAY_SUPPORT ? (t3 = new Uint8Array(e2)).__proto__ = u.prototype : (null === t3 && (t3 = new u(e2)), t3.length = e2), t3;
            }
            function u(t3, e2, r2) {
              if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u)) return new u(t3, e2, r2);
              if ("number" == typeof t3) {
                if ("string" == typeof e2) throw new Error("If encoding is specified then the first argument must be a string");
                return l(this, t3);
              }
              return c(this, t3, e2, r2);
            }
            function c(t3, e2, r2, n2) {
              if ("number" == typeof e2) throw new TypeError('"value" argument must not be a number');
              return "undefined" != typeof ArrayBuffer && e2 instanceof ArrayBuffer ? function i2(t4, e3, r3, n3) {
                if (e3.byteLength, r3 < 0 || e3.byteLength < r3) throw new RangeError("'offset' is out of bounds");
                if (e3.byteLength < r3 + (n3 || 0)) throw new RangeError("'length' is out of bounds");
                e3 = void 0 === r3 && void 0 === n3 ? new Uint8Array(e3) : void 0 === n3 ? new Uint8Array(e3, r3) : new Uint8Array(e3, r3, n3);
                u.TYPED_ARRAY_SUPPORT ? (t4 = e3).__proto__ = u.prototype : t4 = f(t4, e3);
                return t4;
              }(t3, e2, r2, n2) : "string" == typeof e2 ? function s2(t4, e3, r3) {
                "string" == typeof r3 && "" !== r3 || (r3 = "utf8");
                if (!u.isEncoding(r3)) throw new TypeError('"encoding" must be a valid string encoding');
                var n3 = 0 | d(e3, r3), i2 = (t4 = a(t4, n3)).write(e3, r3);
                i2 !== n3 && (t4 = t4.slice(0, i2));
                return t4;
              }(t3, e2, r2) : function c2(t4, e3) {
                if (u.isBuffer(e3)) {
                  var r3 = 0 | g(e3.length);
                  return 0 === (t4 = a(t4, r3)).length || e3.copy(t4, 0, 0, r3), t4;
                }
                if (e3) {
                  if ("undefined" != typeof ArrayBuffer && e3.buffer instanceof ArrayBuffer || "length" in e3) return "number" != typeof e3.length || function n3(t5) {
                    return t5 != t5;
                  }(e3.length) ? a(t4, 0) : f(t4, e3);
                  if ("Buffer" === e3.type && o(e3.data)) return f(t4, e3.data);
                }
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
              }(t3, e2);
            }
            function h(t3) {
              if ("number" != typeof t3) throw new TypeError('"size" argument must be a number');
              if (t3 < 0) throw new RangeError('"size" argument must not be negative');
            }
            function l(t3, e2) {
              if (h(e2), t3 = a(t3, e2 < 0 ? 0 : 0 | g(e2)), !u.TYPED_ARRAY_SUPPORT) for (var r2 = 0; r2 < e2; ++r2) t3[r2] = 0;
              return t3;
            }
            function f(t3, e2) {
              var r2 = e2.length < 0 ? 0 : 0 | g(e2.length);
              t3 = a(t3, r2);
              for (var n2 = 0; n2 < r2; n2 += 1) t3[n2] = 255 & e2[n2];
              return t3;
            }
            function g(t3) {
              if (t3 >= s()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
              return 0 | t3;
            }
            function d(t3, e2) {
              if (u.isBuffer(t3)) return t3.length;
              if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t3) || t3 instanceof ArrayBuffer)) return t3.byteLength;
              "string" != typeof t3 && (t3 = "" + t3);
              var r2 = t3.length;
              if (0 === r2) return 0;
              for (var n2 = false; ; ) switch (e2) {
                case "ascii":
                case "latin1":
                case "binary":
                  return r2;
                case "utf8":
                case "utf-8":
                case void 0:
                  return K(t3).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return 2 * r2;
                case "hex":
                  return r2 >>> 1;
                case "base64":
                  return q(t3).length;
                default:
                  if (n2) return K(t3).length;
                  e2 = ("" + e2).toLowerCase(), n2 = true;
              }
            }
            function p(t3, e2, r2) {
              var n2 = false;
              if ((void 0 === e2 || e2 < 0) && (e2 = 0), e2 > this.length) return "";
              if ((void 0 === r2 || r2 > this.length) && (r2 = this.length), r2 <= 0) return "";
              if ((r2 >>>= 0) <= (e2 >>>= 0)) return "";
              for (t3 || (t3 = "utf8"); ; ) switch (t3) {
                case "hex":
                  return I(this, e2, r2);
                case "utf8":
                case "utf-8":
                  return A(this, e2, r2);
                case "ascii":
                  return T(this, e2, r2);
                case "latin1":
                case "binary":
                  return R(this, e2, r2);
                case "base64":
                  return x(this, e2, r2);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return D(this, e2, r2);
                default:
                  if (n2) throw new TypeError("Unknown encoding: " + t3);
                  t3 = (t3 + "").toLowerCase(), n2 = true;
              }
            }
            function v(t3, e2, r2) {
              var n2 = t3[e2];
              t3[e2] = t3[r2], t3[r2] = n2;
            }
            function y(t3, e2, r2, n2, i2) {
              if (0 === t3.length) return -1;
              if ("string" == typeof r2 ? (n2 = r2, r2 = 0) : r2 > 2147483647 ? r2 = 2147483647 : r2 < -2147483648 && (r2 = -2147483648), r2 = +r2, isNaN(r2) && (r2 = i2 ? 0 : t3.length - 1), r2 < 0 && (r2 = t3.length + r2), r2 >= t3.length) {
                if (i2) return -1;
                r2 = t3.length - 1;
              } else if (r2 < 0) {
                if (!i2) return -1;
                r2 = 0;
              }
              if ("string" == typeof e2 && (e2 = u.from(e2, n2)), u.isBuffer(e2)) return 0 === e2.length ? -1 : m(t3, e2, r2, n2, i2);
              if ("number" == typeof e2) return e2 &= 255, u.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i2 ? Uint8Array.prototype.indexOf.call(t3, e2, r2) : Uint8Array.prototype.lastIndexOf.call(t3, e2, r2) : m(t3, [e2], r2, n2, i2);
              throw new TypeError("val must be string, number or Buffer");
            }
            function m(t3, e2, r2, n2, i2) {
              var o2, s2 = 1, a2 = t3.length, u2 = e2.length;
              if (void 0 !== n2 && ("ucs2" === (n2 = String(n2).toLowerCase()) || "ucs-2" === n2 || "utf16le" === n2 || "utf-16le" === n2)) {
                if (t3.length < 2 || e2.length < 2) return -1;
                s2 = 2, a2 /= 2, u2 /= 2, r2 /= 2;
              }
              function c2(t4, e3) {
                return 1 === s2 ? t4[e3] : t4.readUInt16BE(e3 * s2);
              }
              if (i2) {
                var h2 = -1;
                for (o2 = r2; o2 < a2; o2++) if (c2(t3, o2) === c2(e2, -1 === h2 ? 0 : o2 - h2)) {
                  if (-1 === h2 && (h2 = o2), o2 - h2 + 1 === u2) return h2 * s2;
                } else -1 !== h2 && (o2 -= o2 - h2), h2 = -1;
              } else for (r2 + u2 > a2 && (r2 = a2 - u2), o2 = r2; o2 >= 0; o2--) {
                for (var l2 = true, f2 = 0; f2 < u2; f2++) if (c2(t3, o2 + f2) !== c2(e2, f2)) {
                  l2 = false;
                  break;
                }
                if (l2) return o2;
              }
              return -1;
            }
            function _(t3, e2, r2, n2) {
              r2 = Number(r2) || 0;
              var i2 = t3.length - r2;
              n2 ? (n2 = Number(n2)) > i2 && (n2 = i2) : n2 = i2;
              var o2 = e2.length;
              if (o2 % 2 != 0) throw new TypeError("Invalid hex string");
              n2 > o2 / 2 && (n2 = o2 / 2);
              for (var s2 = 0; s2 < n2; ++s2) {
                var a2 = parseInt(e2.substr(2 * s2, 2), 16);
                if (isNaN(a2)) return s2;
                t3[r2 + s2] = a2;
              }
              return s2;
            }
            function S(t3, e2, r2, n2) {
              return J(K(e2, t3.length - r2), t3, r2, n2);
            }
            function b(t3, e2, r2, n2) {
              return J(function i2(t4) {
                for (var e3 = [], r3 = 0; r3 < t4.length; ++r3) e3.push(255 & t4.charCodeAt(r3));
                return e3;
              }(e2), t3, r2, n2);
            }
            function w(t3, e2, r2, n2) {
              return b(t3, e2, r2, n2);
            }
            function F(t3, e2, r2, n2) {
              return J(q(e2), t3, r2, n2);
            }
            function E(t3, e2, r2, n2) {
              return J(function i2(t4, e3) {
                for (var r3, n3, i3, o2 = [], s2 = 0; s2 < t4.length && !((e3 -= 2) < 0); ++s2) n3 = (r3 = t4.charCodeAt(s2)) >> 8, i3 = r3 % 256, o2.push(i3), o2.push(n3);
                return o2;
              }(e2, t3.length - r2), t3, r2, n2);
            }
            function x(t3, e2, r2) {
              return 0 === e2 && r2 === t3.length ? n.fromByteArray(t3) : n.fromByteArray(t3.slice(e2, r2));
            }
            function A(t3, e2, r2) {
              r2 = Math.min(t3.length, r2);
              for (var n2 = [], i2 = e2; i2 < r2; ) {
                var o2, s2, a2, u2, c2 = t3[i2], h2 = null, l2 = c2 > 239 ? 4 : c2 > 223 ? 3 : c2 > 191 ? 2 : 1;
                if (i2 + l2 <= r2) switch (l2) {
                  case 1:
                    c2 < 128 && (h2 = c2);
                    break;
                  case 2:
                    128 == (192 & (o2 = t3[i2 + 1])) && (u2 = (31 & c2) << 6 | 63 & o2) > 127 && (h2 = u2);
                    break;
                  case 3:
                    o2 = t3[i2 + 1], s2 = t3[i2 + 2], 128 == (192 & o2) && 128 == (192 & s2) && (u2 = (15 & c2) << 12 | (63 & o2) << 6 | 63 & s2) > 2047 && (u2 < 55296 || u2 > 57343) && (h2 = u2);
                    break;
                  case 4:
                    o2 = t3[i2 + 1], s2 = t3[i2 + 2], a2 = t3[i2 + 3], 128 == (192 & o2) && 128 == (192 & s2) && 128 == (192 & a2) && (u2 = (15 & c2) << 18 | (63 & o2) << 12 | (63 & s2) << 6 | 63 & a2) > 65535 && u2 < 1114112 && (h2 = u2);
                }
                null === h2 ? (h2 = 65533, l2 = 1) : h2 > 65535 && (h2 -= 65536, n2.push(h2 >>> 10 & 1023 | 55296), h2 = 56320 | 1023 & h2), n2.push(h2), i2 += l2;
              }
              return function f2(t4) {
                var e3 = t4.length;
                if (e3 <= C) return String.fromCharCode.apply(String, t4);
                var r3 = "", n3 = 0;
                for (; n3 < e3; ) r3 += String.fromCharCode.apply(String, t4.slice(n3, n3 += C));
                return r3;
              }(n2);
            }
            e.Buffer = u, e.SlowBuffer = function k(t3) {
              +t3 != t3 && (t3 = 0);
              return u.alloc(+t3);
            }, e.INSPECT_MAX_BYTES = 50, u.TYPED_ARRAY_SUPPORT = void 0 !== t2.TYPED_ARRAY_SUPPORT ? t2.TYPED_ARRAY_SUPPORT : function P() {
              try {
                var t3 = new Uint8Array(1);
                return t3.__proto__ = { __proto__: Uint8Array.prototype, foo: function() {
                  return 42;
                } }, 42 === t3.foo() && "function" == typeof t3.subarray && 0 === t3.subarray(1, 1).byteLength;
              } catch (t4) {
                return false;
              }
            }(), e.kMaxLength = s(), u.poolSize = 8192, u._augment = function(t3) {
              return t3.__proto__ = u.prototype, t3;
            }, u.from = function(t3, e2, r2) {
              return c(null, t3, e2, r2);
            }, u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype, u.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, { value: null, configurable: true })), u.alloc = function(t3, e2, r2) {
              return function n2(t4, e3, r3, i2) {
                return h(e3), e3 <= 0 ? a(t4, e3) : void 0 !== r3 ? "string" == typeof i2 ? a(t4, e3).fill(r3, i2) : a(t4, e3).fill(r3) : a(t4, e3);
              }(null, t3, e2, r2);
            }, u.allocUnsafe = function(t3) {
              return l(null, t3);
            }, u.allocUnsafeSlow = function(t3) {
              return l(null, t3);
            }, u.isBuffer = function t3(e2) {
              return !(null == e2 || !e2._isBuffer);
            }, u.compare = function t3(e2, r2) {
              if (!u.isBuffer(e2) || !u.isBuffer(r2)) throw new TypeError("Arguments must be Buffers");
              if (e2 === r2) return 0;
              for (var n2 = e2.length, i2 = r2.length, o2 = 0, s2 = Math.min(n2, i2); o2 < s2; ++o2) if (e2[o2] !== r2[o2]) {
                n2 = e2[o2], i2 = r2[o2];
                break;
              }
              return n2 < i2 ? -1 : i2 < n2 ? 1 : 0;
            }, u.isEncoding = function t3(e2) {
              switch (String(e2).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return true;
                default:
                  return false;
              }
            }, u.concat = function t3(e2, r2) {
              if (!o(e2)) throw new TypeError('"list" argument must be an Array of Buffers');
              if (0 === e2.length) return u.alloc(0);
              var n2;
              if (void 0 === r2) for (r2 = 0, n2 = 0; n2 < e2.length; ++n2) r2 += e2[n2].length;
              var i2 = u.allocUnsafe(r2), s2 = 0;
              for (n2 = 0; n2 < e2.length; ++n2) {
                var a2 = e2[n2];
                if (!u.isBuffer(a2)) throw new TypeError('"list" argument must be an Array of Buffers');
                a2.copy(i2, s2), s2 += a2.length;
              }
              return i2;
            }, u.byteLength = d, u.prototype._isBuffer = true, u.prototype.swap16 = function t3() {
              var e2 = this.length;
              if (e2 % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
              for (var r2 = 0; r2 < e2; r2 += 2) v(this, r2, r2 + 1);
              return this;
            }, u.prototype.swap32 = function t3() {
              var e2 = this.length;
              if (e2 % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
              for (var r2 = 0; r2 < e2; r2 += 4) v(this, r2, r2 + 3), v(this, r2 + 1, r2 + 2);
              return this;
            }, u.prototype.swap64 = function t3() {
              var e2 = this.length;
              if (e2 % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
              for (var r2 = 0; r2 < e2; r2 += 8) v(this, r2, r2 + 7), v(this, r2 + 1, r2 + 6), v(this, r2 + 2, r2 + 5), v(this, r2 + 3, r2 + 4);
              return this;
            }, u.prototype.toString = function t3() {
              var e2 = 0 | this.length;
              return 0 === e2 ? "" : 0 === arguments.length ? A(this, 0, e2) : p.apply(this, arguments);
            }, u.prototype.equals = function t3(e2) {
              if (!u.isBuffer(e2)) throw new TypeError("Argument must be a Buffer");
              return this === e2 || 0 === u.compare(this, e2);
            }, u.prototype.inspect = function t3() {
              var r2 = "", n2 = e.INSPECT_MAX_BYTES;
              return this.length > 0 && (r2 = this.toString("hex", 0, n2).match(/.{2}/g).join(" "), this.length > n2 && (r2 += " ... ")), "<Buffer " + r2 + ">";
            }, u.prototype.compare = function t3(e2, r2, n2, i2, o2) {
              if (!u.isBuffer(e2)) throw new TypeError("Argument must be a Buffer");
              if (void 0 === r2 && (r2 = 0), void 0 === n2 && (n2 = e2 ? e2.length : 0), void 0 === i2 && (i2 = 0), void 0 === o2 && (o2 = this.length), r2 < 0 || n2 > e2.length || i2 < 0 || o2 > this.length) throw new RangeError("out of range index");
              if (i2 >= o2 && r2 >= n2) return 0;
              if (i2 >= o2) return -1;
              if (r2 >= n2) return 1;
              if (this === e2) return 0;
              for (var s2 = (o2 >>>= 0) - (i2 >>>= 0), a2 = (n2 >>>= 0) - (r2 >>>= 0), c2 = Math.min(s2, a2), h2 = this.slice(i2, o2), l2 = e2.slice(r2, n2), f2 = 0; f2 < c2; ++f2) if (h2[f2] !== l2[f2]) {
                s2 = h2[f2], a2 = l2[f2];
                break;
              }
              return s2 < a2 ? -1 : a2 < s2 ? 1 : 0;
            }, u.prototype.includes = function t3(e2, r2, n2) {
              return -1 !== this.indexOf(e2, r2, n2);
            }, u.prototype.indexOf = function t3(e2, r2, n2) {
              return y(this, e2, r2, n2, true);
            }, u.prototype.lastIndexOf = function t3(e2, r2, n2) {
              return y(this, e2, r2, n2, false);
            }, u.prototype.write = function t3(e2, r2, n2, i2) {
              if (void 0 === r2) i2 = "utf8", n2 = this.length, r2 = 0;
              else if (void 0 === n2 && "string" == typeof r2) i2 = r2, n2 = this.length, r2 = 0;
              else {
                if (!isFinite(r2)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                r2 |= 0, isFinite(n2) ? (n2 |= 0, void 0 === i2 && (i2 = "utf8")) : (i2 = n2, n2 = void 0);
              }
              var o2 = this.length - r2;
              if ((void 0 === n2 || n2 > o2) && (n2 = o2), e2.length > 0 && (n2 < 0 || r2 < 0) || r2 > this.length) throw new RangeError("Attempt to write outside buffer bounds");
              i2 || (i2 = "utf8");
              for (var s2 = false; ; ) switch (i2) {
                case "hex":
                  return _(this, e2, r2, n2);
                case "utf8":
                case "utf-8":
                  return S(this, e2, r2, n2);
                case "ascii":
                  return b(this, e2, r2, n2);
                case "latin1":
                case "binary":
                  return w(this, e2, r2, n2);
                case "base64":
                  return F(this, e2, r2, n2);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return E(this, e2, r2, n2);
                default:
                  if (s2) throw new TypeError("Unknown encoding: " + i2);
                  i2 = ("" + i2).toLowerCase(), s2 = true;
              }
            }, u.prototype.toJSON = function t3() {
              return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
            };
            var C = 4096;
            function T(t3, e2, r2) {
              var n2 = "";
              r2 = Math.min(t3.length, r2);
              for (var i2 = e2; i2 < r2; ++i2) n2 += String.fromCharCode(127 & t3[i2]);
              return n2;
            }
            function R(t3, e2, r2) {
              var n2 = "";
              r2 = Math.min(t3.length, r2);
              for (var i2 = e2; i2 < r2; ++i2) n2 += String.fromCharCode(t3[i2]);
              return n2;
            }
            function I(t3, e2, r2) {
              var n2 = t3.length;
              (!e2 || e2 < 0) && (e2 = 0), (!r2 || r2 < 0 || r2 > n2) && (r2 = n2);
              for (var i2 = "", o2 = e2; o2 < r2; ++o2) i2 += V(t3[o2]);
              return i2;
            }
            function D(t3, e2, r2) {
              for (var n2 = t3.slice(e2, r2), i2 = "", o2 = 0; o2 < n2.length; o2 += 2) i2 += String.fromCharCode(n2[o2] + 256 * n2[o2 + 1]);
              return i2;
            }
            function L(t3, e2, r2) {
              if (t3 % 1 != 0 || t3 < 0) throw new RangeError("offset is not uint");
              if (t3 + e2 > r2) throw new RangeError("Trying to access beyond buffer length");
            }
            function N(t3, e2, r2, n2, i2, o2) {
              if (!u.isBuffer(t3)) throw new TypeError('"buffer" argument must be a Buffer instance');
              if (e2 > i2 || e2 < o2) throw new RangeError('"value" argument is out of bounds');
              if (r2 + n2 > t3.length) throw new RangeError("Index out of range");
            }
            function U(t3, e2, r2, n2) {
              e2 < 0 && (e2 = 65535 + e2 + 1);
              for (var i2 = 0, o2 = Math.min(t3.length - r2, 2); i2 < o2; ++i2) t3[r2 + i2] = (e2 & 255 << 8 * (n2 ? i2 : 1 - i2)) >>> 8 * (n2 ? i2 : 1 - i2);
            }
            function B(t3, e2, r2, n2) {
              e2 < 0 && (e2 = 4294967295 + e2 + 1);
              for (var i2 = 0, o2 = Math.min(t3.length - r2, 4); i2 < o2; ++i2) t3[r2 + i2] = e2 >>> 8 * (n2 ? i2 : 3 - i2) & 255;
            }
            function O(t3, e2, r2, n2, i2, o2) {
              if (r2 + n2 > t3.length) throw new RangeError("Index out of range");
              if (r2 < 0) throw new RangeError("Index out of range");
            }
            function j(t3, e2, r2, n2, o2) {
              return o2 || O(t3, 0, r2, 4), i.write(t3, e2, r2, n2, 23, 4), r2 + 4;
            }
            function M(t3, e2, r2, n2, o2) {
              return o2 || O(t3, 0, r2, 8), i.write(t3, e2, r2, n2, 52, 8), r2 + 8;
            }
            u.prototype.slice = function t3(e2, r2) {
              var n2, i2 = this.length;
              if ((e2 = ~~e2) < 0 ? (e2 += i2) < 0 && (e2 = 0) : e2 > i2 && (e2 = i2), (r2 = void 0 === r2 ? i2 : ~~r2) < 0 ? (r2 += i2) < 0 && (r2 = 0) : r2 > i2 && (r2 = i2), r2 < e2 && (r2 = e2), u.TYPED_ARRAY_SUPPORT) (n2 = this.subarray(e2, r2)).__proto__ = u.prototype;
              else {
                var o2 = r2 - e2;
                n2 = new u(o2, void 0);
                for (var s2 = 0; s2 < o2; ++s2) n2[s2] = this[s2 + e2];
              }
              return n2;
            }, u.prototype.readUIntLE = function t3(e2, r2, n2) {
              e2 |= 0, r2 |= 0, n2 || L(e2, r2, this.length);
              for (var i2 = this[e2], o2 = 1, s2 = 0; ++s2 < r2 && (o2 *= 256); ) i2 += this[e2 + s2] * o2;
              return i2;
            }, u.prototype.readUIntBE = function t3(e2, r2, n2) {
              e2 |= 0, r2 |= 0, n2 || L(e2, r2, this.length);
              for (var i2 = this[e2 + --r2], o2 = 1; r2 > 0 && (o2 *= 256); ) i2 += this[e2 + --r2] * o2;
              return i2;
            }, u.prototype.readUInt8 = function t3(e2, r2) {
              return r2 || L(e2, 1, this.length), this[e2];
            }, u.prototype.readUInt16LE = function t3(e2, r2) {
              return r2 || L(e2, 2, this.length), this[e2] | this[e2 + 1] << 8;
            }, u.prototype.readUInt16BE = function t3(e2, r2) {
              return r2 || L(e2, 2, this.length), this[e2] << 8 | this[e2 + 1];
            }, u.prototype.readUInt32LE = function t3(e2, r2) {
              return r2 || L(e2, 4, this.length), (this[e2] | this[e2 + 1] << 8 | this[e2 + 2] << 16) + 16777216 * this[e2 + 3];
            }, u.prototype.readUInt32BE = function t3(e2, r2) {
              return r2 || L(e2, 4, this.length), 16777216 * this[e2] + (this[e2 + 1] << 16 | this[e2 + 2] << 8 | this[e2 + 3]);
            }, u.prototype.readIntLE = function t3(e2, r2, n2) {
              e2 |= 0, r2 |= 0, n2 || L(e2, r2, this.length);
              for (var i2 = this[e2], o2 = 1, s2 = 0; ++s2 < r2 && (o2 *= 256); ) i2 += this[e2 + s2] * o2;
              return i2 >= (o2 *= 128) && (i2 -= Math.pow(2, 8 * r2)), i2;
            }, u.prototype.readIntBE = function t3(e2, r2, n2) {
              e2 |= 0, r2 |= 0, n2 || L(e2, r2, this.length);
              for (var i2 = r2, o2 = 1, s2 = this[e2 + --i2]; i2 > 0 && (o2 *= 256); ) s2 += this[e2 + --i2] * o2;
              return s2 >= (o2 *= 128) && (s2 -= Math.pow(2, 8 * r2)), s2;
            }, u.prototype.readInt8 = function t3(e2, r2) {
              return r2 || L(e2, 1, this.length), 128 & this[e2] ? -1 * (255 - this[e2] + 1) : this[e2];
            }, u.prototype.readInt16LE = function t3(e2, r2) {
              r2 || L(e2, 2, this.length);
              var n2 = this[e2] | this[e2 + 1] << 8;
              return 32768 & n2 ? 4294901760 | n2 : n2;
            }, u.prototype.readInt16BE = function t3(e2, r2) {
              r2 || L(e2, 2, this.length);
              var n2 = this[e2 + 1] | this[e2] << 8;
              return 32768 & n2 ? 4294901760 | n2 : n2;
            }, u.prototype.readInt32LE = function t3(e2, r2) {
              return r2 || L(e2, 4, this.length), this[e2] | this[e2 + 1] << 8 | this[e2 + 2] << 16 | this[e2 + 3] << 24;
            }, u.prototype.readInt32BE = function t3(e2, r2) {
              return r2 || L(e2, 4, this.length), this[e2] << 24 | this[e2 + 1] << 16 | this[e2 + 2] << 8 | this[e2 + 3];
            }, u.prototype.readFloatLE = function t3(e2, r2) {
              return r2 || L(e2, 4, this.length), i.read(this, e2, true, 23, 4);
            }, u.prototype.readFloatBE = function t3(e2, r2) {
              return r2 || L(e2, 4, this.length), i.read(this, e2, false, 23, 4);
            }, u.prototype.readDoubleLE = function t3(e2, r2) {
              return r2 || L(e2, 8, this.length), i.read(this, e2, true, 52, 8);
            }, u.prototype.readDoubleBE = function t3(e2, r2) {
              return r2 || L(e2, 8, this.length), i.read(this, e2, false, 52, 8);
            }, u.prototype.writeUIntLE = function t3(e2, r2, n2, i2) {
              (e2 = +e2, r2 |= 0, n2 |= 0, i2) || N(this, e2, r2, n2, Math.pow(2, 8 * n2) - 1, 0);
              var o2 = 1, s2 = 0;
              for (this[r2] = 255 & e2; ++s2 < n2 && (o2 *= 256); ) this[r2 + s2] = e2 / o2 & 255;
              return r2 + n2;
            }, u.prototype.writeUIntBE = function t3(e2, r2, n2, i2) {
              (e2 = +e2, r2 |= 0, n2 |= 0, i2) || N(this, e2, r2, n2, Math.pow(2, 8 * n2) - 1, 0);
              var o2 = n2 - 1, s2 = 1;
              for (this[r2 + o2] = 255 & e2; --o2 >= 0 && (s2 *= 256); ) this[r2 + o2] = e2 / s2 & 255;
              return r2 + n2;
            }, u.prototype.writeUInt8 = function t3(e2, r2, n2) {
              return e2 = +e2, r2 |= 0, n2 || N(this, e2, r2, 1, 255, 0), u.TYPED_ARRAY_SUPPORT || (e2 = Math.floor(e2)), this[r2] = 255 & e2, r2 + 1;
            }, u.prototype.writeUInt16LE = function t3(e2, r2, n2) {
              return e2 = +e2, r2 |= 0, n2 || N(this, e2, r2, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[r2] = 255 & e2, this[r2 + 1] = e2 >>> 8) : U(this, e2, r2, true), r2 + 2;
            }, u.prototype.writeUInt16BE = function t3(e2, r2, n2) {
              return e2 = +e2, r2 |= 0, n2 || N(this, e2, r2, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[r2] = e2 >>> 8, this[r2 + 1] = 255 & e2) : U(this, e2, r2, false), r2 + 2;
            }, u.prototype.writeUInt32LE = function t3(e2, r2, n2) {
              return e2 = +e2, r2 |= 0, n2 || N(this, e2, r2, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[r2 + 3] = e2 >>> 24, this[r2 + 2] = e2 >>> 16, this[r2 + 1] = e2 >>> 8, this[r2] = 255 & e2) : B(this, e2, r2, true), r2 + 4;
            }, u.prototype.writeUInt32BE = function t3(e2, r2, n2) {
              return e2 = +e2, r2 |= 0, n2 || N(this, e2, r2, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[r2] = e2 >>> 24, this[r2 + 1] = e2 >>> 16, this[r2 + 2] = e2 >>> 8, this[r2 + 3] = 255 & e2) : B(this, e2, r2, false), r2 + 4;
            }, u.prototype.writeIntLE = function t3(e2, r2, n2, i2) {
              if (e2 = +e2, r2 |= 0, !i2) {
                var o2 = Math.pow(2, 8 * n2 - 1);
                N(this, e2, r2, n2, o2 - 1, -o2);
              }
              var s2 = 0, a2 = 1, u2 = 0;
              for (this[r2] = 255 & e2; ++s2 < n2 && (a2 *= 256); ) e2 < 0 && 0 === u2 && 0 !== this[r2 + s2 - 1] && (u2 = 1), this[r2 + s2] = (e2 / a2 >> 0) - u2 & 255;
              return r2 + n2;
            }, u.prototype.writeIntBE = function t3(e2, r2, n2, i2) {
              if (e2 = +e2, r2 |= 0, !i2) {
                var o2 = Math.pow(2, 8 * n2 - 1);
                N(this, e2, r2, n2, o2 - 1, -o2);
              }
              var s2 = n2 - 1, a2 = 1, u2 = 0;
              for (this[r2 + s2] = 255 & e2; --s2 >= 0 && (a2 *= 256); ) e2 < 0 && 0 === u2 && 0 !== this[r2 + s2 + 1] && (u2 = 1), this[r2 + s2] = (e2 / a2 >> 0) - u2 & 255;
              return r2 + n2;
            }, u.prototype.writeInt8 = function t3(e2, r2, n2) {
              return e2 = +e2, r2 |= 0, n2 || N(this, e2, r2, 1, 127, -128), u.TYPED_ARRAY_SUPPORT || (e2 = Math.floor(e2)), e2 < 0 && (e2 = 255 + e2 + 1), this[r2] = 255 & e2, r2 + 1;
            }, u.prototype.writeInt16LE = function t3(e2, r2, n2) {
              return e2 = +e2, r2 |= 0, n2 || N(this, e2, r2, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[r2] = 255 & e2, this[r2 + 1] = e2 >>> 8) : U(this, e2, r2, true), r2 + 2;
            }, u.prototype.writeInt16BE = function t3(e2, r2, n2) {
              return e2 = +e2, r2 |= 0, n2 || N(this, e2, r2, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[r2] = e2 >>> 8, this[r2 + 1] = 255 & e2) : U(this, e2, r2, false), r2 + 2;
            }, u.prototype.writeInt32LE = function t3(e2, r2, n2) {
              return e2 = +e2, r2 |= 0, n2 || N(this, e2, r2, 4, 2147483647, -2147483648), u.TYPED_ARRAY_SUPPORT ? (this[r2] = 255 & e2, this[r2 + 1] = e2 >>> 8, this[r2 + 2] = e2 >>> 16, this[r2 + 3] = e2 >>> 24) : B(this, e2, r2, true), r2 + 4;
            }, u.prototype.writeInt32BE = function t3(e2, r2, n2) {
              return e2 = +e2, r2 |= 0, n2 || N(this, e2, r2, 4, 2147483647, -2147483648), e2 < 0 && (e2 = 4294967295 + e2 + 1), u.TYPED_ARRAY_SUPPORT ? (this[r2] = e2 >>> 24, this[r2 + 1] = e2 >>> 16, this[r2 + 2] = e2 >>> 8, this[r2 + 3] = 255 & e2) : B(this, e2, r2, false), r2 + 4;
            }, u.prototype.writeFloatLE = function t3(e2, r2, n2) {
              return j(this, e2, r2, true, n2);
            }, u.prototype.writeFloatBE = function t3(e2, r2, n2) {
              return j(this, e2, r2, false, n2);
            }, u.prototype.writeDoubleLE = function t3(e2, r2, n2) {
              return M(this, e2, r2, true, n2);
            }, u.prototype.writeDoubleBE = function t3(e2, r2, n2) {
              return M(this, e2, r2, false, n2);
            }, u.prototype.copy = function t3(e2, r2, n2, i2) {
              if (n2 || (n2 = 0), i2 || 0 === i2 || (i2 = this.length), r2 >= e2.length && (r2 = e2.length), r2 || (r2 = 0), i2 > 0 && i2 < n2 && (i2 = n2), i2 === n2) return 0;
              if (0 === e2.length || 0 === this.length) return 0;
              if (r2 < 0) throw new RangeError("targetStart out of bounds");
              if (n2 < 0 || n2 >= this.length) throw new RangeError("sourceStart out of bounds");
              if (i2 < 0) throw new RangeError("sourceEnd out of bounds");
              i2 > this.length && (i2 = this.length), e2.length - r2 < i2 - n2 && (i2 = e2.length - r2 + n2);
              var o2, s2 = i2 - n2;
              if (this === e2 && n2 < r2 && r2 < i2) for (o2 = s2 - 1; o2 >= 0; --o2) e2[o2 + r2] = this[o2 + n2];
              else if (s2 < 1e3 || !u.TYPED_ARRAY_SUPPORT) for (o2 = 0; o2 < s2; ++o2) e2[o2 + r2] = this[o2 + n2];
              else Uint8Array.prototype.set.call(e2, this.subarray(n2, n2 + s2), r2);
              return s2;
            }, u.prototype.fill = function t3(e2, r2, n2, i2) {
              if ("string" == typeof e2) {
                if ("string" == typeof r2 ? (i2 = r2, r2 = 0, n2 = this.length) : "string" == typeof n2 && (i2 = n2, n2 = this.length), 1 === e2.length) {
                  var o2 = e2.charCodeAt(0);
                  o2 < 256 && (e2 = o2);
                }
                if (void 0 !== i2 && "string" != typeof i2) throw new TypeError("encoding must be a string");
                if ("string" == typeof i2 && !u.isEncoding(i2)) throw new TypeError("Unknown encoding: " + i2);
              } else "number" == typeof e2 && (e2 &= 255);
              if (r2 < 0 || this.length < r2 || this.length < n2) throw new RangeError("Out of range index");
              if (n2 <= r2) return this;
              var s2;
              if (r2 >>>= 0, n2 = void 0 === n2 ? this.length : n2 >>> 0, e2 || (e2 = 0), "number" == typeof e2) for (s2 = r2; s2 < n2; ++s2) this[s2] = e2;
              else {
                var a2 = u.isBuffer(e2) ? e2 : K(new u(e2, i2).toString()), c2 = a2.length;
                for (s2 = 0; s2 < n2 - r2; ++s2) this[s2 + r2] = a2[s2 % c2];
              }
              return this;
            };
            var H = /[^+\/0-9A-Za-z-_]/g;
            function V(t3) {
              return t3 < 16 ? "0" + t3.toString(16) : t3.toString(16);
            }
            function K(t3, e2) {
              var r2;
              e2 = e2 || 1 / 0;
              for (var n2 = t3.length, i2 = null, o2 = [], s2 = 0; s2 < n2; ++s2) {
                if ((r2 = t3.charCodeAt(s2)) > 55295 && r2 < 57344) {
                  if (!i2) {
                    if (r2 > 56319) {
                      (e2 -= 3) > -1 && o2.push(239, 191, 189);
                      continue;
                    }
                    if (s2 + 1 === n2) {
                      (e2 -= 3) > -1 && o2.push(239, 191, 189);
                      continue;
                    }
                    i2 = r2;
                    continue;
                  }
                  if (r2 < 56320) {
                    (e2 -= 3) > -1 && o2.push(239, 191, 189), i2 = r2;
                    continue;
                  }
                  r2 = 65536 + (i2 - 55296 << 10 | r2 - 56320);
                } else i2 && (e2 -= 3) > -1 && o2.push(239, 191, 189);
                if (i2 = null, r2 < 128) {
                  if ((e2 -= 1) < 0) break;
                  o2.push(r2);
                } else if (r2 < 2048) {
                  if ((e2 -= 2) < 0) break;
                  o2.push(r2 >> 6 | 192, 63 & r2 | 128);
                } else if (r2 < 65536) {
                  if ((e2 -= 3) < 0) break;
                  o2.push(r2 >> 12 | 224, r2 >> 6 & 63 | 128, 63 & r2 | 128);
                } else {
                  if (!(r2 < 1114112)) throw new Error("Invalid code point");
                  if ((e2 -= 4) < 0) break;
                  o2.push(r2 >> 18 | 240, r2 >> 12 & 63 | 128, r2 >> 6 & 63 | 128, 63 & r2 | 128);
                }
              }
              return o2;
            }
            function q(t3) {
              return n.toByteArray(function e2(t4) {
                if ((t4 = function e3(t5) {
                  return t5.trim ? t5.trim() : t5.replace(/^\s+|\s+$/g, "");
                }(t4).replace(H, "")).length < 2) return "";
                for (; t4.length % 4 != 0; ) t4 += "=";
                return t4;
              }(t3));
            }
            function J(t3, e2, r2, n2) {
              for (var i2 = 0; i2 < n2 && !(i2 + r2 >= e2.length || i2 >= t3.length); ++i2) e2[i2 + r2] = t3[i2];
              return i2;
            }
          }).call(this, r(29));
        }, function(t, e) {
          var r;
          r = /* @__PURE__ */ function() {
            return this;
          }();
          try {
            r = r || new Function("return this")();
          } catch (t2) {
            "object" == typeof window && (r = window);
          }
          t.exports = r;
        }, function(t, e, r) {
          "use strict";
          e.byteLength = function n(t2) {
            var e2 = f(t2), r2 = e2[0], n2 = e2[1];
            return 3 * (r2 + n2) / 4 - n2;
          }, e.toByteArray = function i(t2) {
            var e2, r2, n = f(t2), i2 = n[0], o = n[1], s2 = new u(function c2(t3, e3, r3) {
              return 3 * (e3 + r3) / 4 - r3;
            }(0, i2, o)), h2 = 0, l2 = o > 0 ? i2 - 4 : i2;
            for (r2 = 0; r2 < l2; r2 += 4) e2 = a[t2.charCodeAt(r2)] << 18 | a[t2.charCodeAt(r2 + 1)] << 12 | a[t2.charCodeAt(r2 + 2)] << 6 | a[t2.charCodeAt(r2 + 3)], s2[h2++] = e2 >> 16 & 255, s2[h2++] = e2 >> 8 & 255, s2[h2++] = 255 & e2;
            2 === o && (e2 = a[t2.charCodeAt(r2)] << 2 | a[t2.charCodeAt(r2 + 1)] >> 4, s2[h2++] = 255 & e2);
            1 === o && (e2 = a[t2.charCodeAt(r2)] << 10 | a[t2.charCodeAt(r2 + 1)] << 4 | a[t2.charCodeAt(r2 + 2)] >> 2, s2[h2++] = e2 >> 8 & 255, s2[h2++] = 255 & e2);
            return s2;
          }, e.fromByteArray = function o(t2) {
            for (var e2, r2 = t2.length, n = r2 % 3, i = [], o2 = 16383, a2 = 0, u2 = r2 - n; a2 < u2; a2 += o2) i.push(g(t2, a2, a2 + o2 > u2 ? u2 : a2 + o2));
            1 === n ? (e2 = t2[r2 - 1], i.push(s[e2 >> 2] + s[e2 << 4 & 63] + "==")) : 2 === n && (e2 = (t2[r2 - 2] << 8) + t2[r2 - 1], i.push(s[e2 >> 10] + s[e2 >> 4 & 63] + s[e2 << 2 & 63] + "="));
            return i.join("");
          };
          for (var s = [], a = [], u = "undefined" != typeof Uint8Array ? Uint8Array : Array, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", h = 0, l = c.length; h < l; ++h) s[h] = c[h], a[c.charCodeAt(h)] = h;
          function f(t2) {
            var e2 = t2.length;
            if (e2 % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            var r2 = t2.indexOf("=");
            return -1 === r2 && (r2 = e2), [r2, r2 === e2 ? 0 : 4 - r2 % 4];
          }
          function g(t2, e2, r2) {
            for (var n, i, o = [], a2 = e2; a2 < r2; a2 += 3) n = (t2[a2] << 16 & 16711680) + (t2[a2 + 1] << 8 & 65280) + (255 & t2[a2 + 2]), o.push(s[(i = n) >> 18 & 63] + s[i >> 12 & 63] + s[i >> 6 & 63] + s[63 & i]);
            return o.join("");
          }
          a["-".charCodeAt(0)] = 62, a["_".charCodeAt(0)] = 63;
        }, function(t, e) {
          e.read = function(t2, e2, r, n, i) {
            var o, s, a = 8 * i - n - 1, u = (1 << a) - 1, c = u >> 1, h = -7, l = r ? i - 1 : 0, f = r ? -1 : 1, g = t2[e2 + l];
            for (l += f, o = g & (1 << -h) - 1, g >>= -h, h += a; h > 0; o = 256 * o + t2[e2 + l], l += f, h -= 8) ;
            for (s = o & (1 << -h) - 1, o >>= -h, h += n; h > 0; s = 256 * s + t2[e2 + l], l += f, h -= 8) ;
            if (0 === o) o = 1 - c;
            else {
              if (o === u) return s ? NaN : 1 / 0 * (g ? -1 : 1);
              s += Math.pow(2, n), o -= c;
            }
            return (g ? -1 : 1) * s * Math.pow(2, o - n);
          }, e.write = function(t2, e2, r, n, i, o) {
            var s, a, u, c = 8 * o - i - 1, h = (1 << c) - 1, l = h >> 1, f = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, g = n ? 0 : o - 1, d = n ? 1 : -1, p = e2 < 0 || 0 === e2 && 1 / e2 < 0 ? 1 : 0;
            for (e2 = Math.abs(e2), isNaN(e2) || e2 === 1 / 0 ? (a = isNaN(e2) ? 1 : 0, s = h) : (s = Math.floor(Math.log(e2) / Math.LN2), e2 * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (e2 += s + l >= 1 ? f / u : f * Math.pow(2, 1 - l)) * u >= 2 && (s++, u /= 2), s + l >= h ? (a = 0, s = h) : s + l >= 1 ? (a = (e2 * u - 1) * Math.pow(2, i), s += l) : (a = e2 * Math.pow(2, l - 1) * Math.pow(2, i), s = 0)); i >= 8; t2[r + g] = 255 & a, g += d, a /= 256, i -= 8) ;
            for (s = s << i | a, c += i; c > 0; t2[r + g] = 255 & s, g += d, s /= 256, c -= 8) ;
            t2[r + g - d] |= 128 * p;
          };
        }, function(t, e) {
          var r = {}.toString;
          t.exports = Array.isArray || function(t2) {
            return "[object Array]" == r.call(t2);
          };
        }, function(t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.default = function n(t2) {
            var e2 = t2.jws, r2 = t2.KeyUtil, n2 = t2.X509, o = t2.crypto, s = t2.hextob64u, a = t2.b64tohex, u = t2.AllowedSigningAlgs;
            return function() {
              function t3() {
                !function e3(t4, r3) {
                  if (!(t4 instanceof r3)) throw new TypeError("Cannot call a class as a function");
                }(this, t3);
              }
              return t3.parseJwt = function t4(r3) {
                i.Log.debug("JoseUtil.parseJwt");
                try {
                  var n3 = e2.JWS.parse(r3);
                  return { header: n3.headerObj, payload: n3.payloadObj };
                } catch (t5) {
                  i.Log.error(t5);
                }
              }, t3.validateJwt = function e3(o2, s2, u2, c, h, l, f) {
                i.Log.debug("JoseUtil.validateJwt");
                try {
                  if ("RSA" === s2.kty) if (s2.e && s2.n) s2 = r2.getKey(s2);
                  else {
                    if (!s2.x5c || !s2.x5c.length) return i.Log.error("JoseUtil.validateJwt: RSA key missing key material", s2), Promise.reject(new Error("RSA key missing key material"));
                    var g = a(s2.x5c[0]);
                    s2 = n2.getPublicKeyFromCertHex(g);
                  }
                  else {
                    if ("EC" !== s2.kty) return i.Log.error("JoseUtil.validateJwt: Unsupported key type", s2 && s2.kty), Promise.reject(new Error(s2.kty));
                    if (!(s2.crv && s2.x && s2.y)) return i.Log.error("JoseUtil.validateJwt: EC key missing key material", s2), Promise.reject(new Error("EC key missing key material"));
                    s2 = r2.getKey(s2);
                  }
                  return t3._validateJwt(o2, s2, u2, c, h, l, f);
                } catch (t4) {
                  return i.Log.error(t4 && t4.message || t4), Promise.reject("JWT validation failed");
                }
              }, t3.validateJwtAttributes = function e3(r3, n3, o2, s2, a2, u2) {
                s2 || (s2 = 0), a2 || (a2 = parseInt(Date.now() / 1e3));
                var c = t3.parseJwt(r3).payload;
                if (!c.iss) return i.Log.error("JoseUtil._validateJwt: issuer was not provided"), Promise.reject(new Error("issuer was not provided"));
                if (c.iss !== n3) return i.Log.error("JoseUtil._validateJwt: Invalid issuer in token", c.iss), Promise.reject(new Error("Invalid issuer in token: " + c.iss));
                if (!c.aud) return i.Log.error("JoseUtil._validateJwt: aud was not provided"), Promise.reject(new Error("aud was not provided"));
                if (!(c.aud === o2 || Array.isArray(c.aud) && c.aud.indexOf(o2) >= 0)) return i.Log.error("JoseUtil._validateJwt: Invalid audience in token", c.aud), Promise.reject(new Error("Invalid audience in token: " + c.aud));
                if (c.azp && c.azp !== o2) return i.Log.error("JoseUtil._validateJwt: Invalid azp in token", c.azp), Promise.reject(new Error("Invalid azp in token: " + c.azp));
                if (!u2) {
                  var h = a2 + s2, l = a2 - s2;
                  if (!c.iat) return i.Log.error("JoseUtil._validateJwt: iat was not provided"), Promise.reject(new Error("iat was not provided"));
                  if (h < c.iat) return i.Log.error("JoseUtil._validateJwt: iat is in the future", c.iat), Promise.reject(new Error("iat is in the future: " + c.iat));
                  if (c.nbf && h < c.nbf) return i.Log.error("JoseUtil._validateJwt: nbf is in the future", c.nbf), Promise.reject(new Error("nbf is in the future: " + c.nbf));
                  if (!c.exp) return i.Log.error("JoseUtil._validateJwt: exp was not provided"), Promise.reject(new Error("exp was not provided"));
                  if (c.exp < l) return i.Log.error("JoseUtil._validateJwt: exp is in the past", c.exp), Promise.reject(new Error("exp is in the past:" + c.exp));
                }
                return Promise.resolve(c);
              }, t3._validateJwt = function r3(n3, o2, s2, a2, c, h, l) {
                return t3.validateJwtAttributes(n3, s2, a2, c, h, l).then(function(t4) {
                  try {
                    return e2.JWS.verify(n3, o2, u) ? t4 : (i.Log.error("JoseUtil._validateJwt: signature validation failed"), Promise.reject(new Error("signature validation failed")));
                  } catch (t5) {
                    return i.Log.error(t5 && t5.message || t5), Promise.reject(new Error("signature validation failed"));
                  }
                });
              }, t3.hashString = function t4(e3, r3) {
                try {
                  return o.Util.hashString(e3, r3);
                } catch (t5) {
                  i.Log.error(t5);
                }
              }, t3.hexToBase64Url = function t4(e3) {
                try {
                  return s(e3);
                } catch (t5) {
                  i.Log.error(t5);
                }
              }, t3;
            }();
          };
          var i = r(0);
          t.exports = e.default;
        }, function(t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.SigninResponse = void 0;
          var n = /* @__PURE__ */ function() {
            function t2(t3, e2) {
              for (var r2 = 0; r2 < e2.length; r2++) {
                var n2 = e2[r2];
                n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, n2.key, n2);
              }
            }
            return function(e2, r2, n2) {
              return r2 && t2(e2.prototype, r2), n2 && t2(e2, n2), e2;
            };
          }(), i = r(3);
          function o(t2, e2) {
            if (!(t2 instanceof e2)) throw new TypeError("Cannot call a class as a function");
          }
          e.SigninResponse = function() {
            function t2(e2) {
              var r2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "#";
              o(this, t2);
              var n2 = i.UrlUtility.parseUrlFragment(e2, r2);
              this.error = n2.error, this.error_description = n2.error_description, this.error_uri = n2.error_uri, this.code = n2.code, this.state = n2.state, this.id_token = n2.id_token, this.session_state = n2.session_state, this.access_token = n2.access_token, this.token_type = n2.token_type, this.scope = n2.scope, this.profile = void 0, this.expires_in = n2.expires_in;
            }
            return n(t2, [{ key: "expires_in", get: function t3() {
              if (this.expires_at) {
                var e2 = parseInt(Date.now() / 1e3);
                return this.expires_at - e2;
              }
            }, set: function t3(e2) {
              var r2 = parseInt(e2);
              if ("number" == typeof r2 && r2 > 0) {
                var n2 = parseInt(Date.now() / 1e3);
                this.expires_at = n2 + r2;
              }
            } }, { key: "expired", get: function t3() {
              var e2 = this.expires_in;
              if (void 0 !== e2) return e2 <= 0;
            } }, { key: "scopes", get: function t3() {
              return (this.scope || "").split(" ");
            } }, { key: "isOpenIdConnect", get: function t3() {
              return this.scopes.indexOf("openid") >= 0 || !!this.id_token;
            } }]), t2;
          }();
        }, function(t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.SignoutRequest = void 0;
          var n = r(0), i = r(3), o = r(9);
          e.SignoutRequest = function t2(e2) {
            var r2 = e2.url, s = e2.id_token_hint, a = e2.post_logout_redirect_uri, u = e2.data, c = e2.extraQueryParams, h = e2.request_type;
            if (function l(t3, e3) {
              if (!(t3 instanceof e3)) throw new TypeError("Cannot call a class as a function");
            }(this, t2), !r2) throw n.Log.error("SignoutRequest.ctor: No url passed"), new Error("url");
            for (var f in s && (r2 = i.UrlUtility.addQueryParam(r2, "id_token_hint", s)), a && (r2 = i.UrlUtility.addQueryParam(r2, "post_logout_redirect_uri", a), u && (this.state = new o.State({ data: u, request_type: h }), r2 = i.UrlUtility.addQueryParam(r2, "state", this.state.id))), c) r2 = i.UrlUtility.addQueryParam(r2, f, c[f]);
            this.url = r2;
          };
        }, function(t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.SignoutResponse = void 0;
          var n = r(3);
          e.SignoutResponse = function t2(e2) {
            !function r2(t3, e3) {
              if (!(t3 instanceof e3)) throw new TypeError("Cannot call a class as a function");
            }(this, t2);
            var i = n.UrlUtility.parseUrlFragment(e2, "?");
            this.error = i.error, this.error_description = i.error_description, this.error_uri = i.error_uri, this.state = i.state;
          };
        }, function(t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.InMemoryWebStorage = void 0;
          var n = /* @__PURE__ */ function() {
            function t2(t3, e2) {
              for (var r2 = 0; r2 < e2.length; r2++) {
                var n2 = e2[r2];
                n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, n2.key, n2);
              }
            }
            return function(e2, r2, n2) {
              return r2 && t2(e2.prototype, r2), n2 && t2(e2, n2), e2;
            };
          }(), i = r(0);
          e.InMemoryWebStorage = function() {
            function t2() {
              !function e2(t3, r2) {
                if (!(t3 instanceof r2)) throw new TypeError("Cannot call a class as a function");
              }(this, t2), this._data = {};
            }
            return t2.prototype.getItem = function t3(e2) {
              return i.Log.debug("InMemoryWebStorage.getItem", e2), this._data[e2];
            }, t2.prototype.setItem = function t3(e2, r2) {
              i.Log.debug("InMemoryWebStorage.setItem", e2), this._data[e2] = r2;
            }, t2.prototype.removeItem = function t3(e2) {
              i.Log.debug("InMemoryWebStorage.removeItem", e2), delete this._data[e2];
            }, t2.prototype.key = function t3(e2) {
              return Object.getOwnPropertyNames(this._data)[e2];
            }, n(t2, [{ key: "length", get: function t3() {
              return Object.getOwnPropertyNames(this._data).length;
            } }]), t2;
          }();
        }, function(t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.UserManager = void 0;
          var n = /* @__PURE__ */ function() {
            function t2(t3, e2) {
              for (var r2 = 0; r2 < e2.length; r2++) {
                var n2 = e2[r2];
                n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, n2.key, n2);
              }
            }
            return function(e2, r2, n2) {
              return r2 && t2(e2.prototype, r2), n2 && t2(e2, n2), e2;
            };
          }(), i = r(0), o = r(10), s = r(39), a = r(15), u = r(45), c = r(47), h = r(18), l = r(8), f = r(20), g = r(11), d = r(4);
          function p(t2, e2) {
            if (!(t2 instanceof e2)) throw new TypeError("Cannot call a class as a function");
          }
          function v(t2, e2) {
            if (!t2) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e2 || "object" != typeof e2 && "function" != typeof e2 ? t2 : e2;
          }
          e.UserManager = function(t2) {
            function e2() {
              var r2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.SilentRenewService, o2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : h.SessionMonitor, a2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : f.TokenRevocationClient, l2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : g.TokenClient, y = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : d.JoseUtil;
              p(this, e2), r2 instanceof s.UserManagerSettings || (r2 = new s.UserManagerSettings(r2));
              var m = v(this, t2.call(this, r2));
              return m._events = new u.UserManagerEvents(r2), m._silentRenewService = new n2(m), m.settings.automaticSilentRenew && (i.Log.debug("UserManager.ctor: automaticSilentRenew is configured, setting up silent renew"), m.startSilentRenew()), m.settings.monitorSession && (i.Log.debug("UserManager.ctor: monitorSession is configured, setting up session monitor"), m._sessionMonitor = new o2(m)), m._tokenRevocationClient = new a2(m._settings), m._tokenClient = new l2(m._settings), m._joseUtil = y, m;
            }
            return function r2(t3, e3) {
              if ("function" != typeof e3 && null !== e3) throw new TypeError("Super expression must either be null or a function, not " + typeof e3);
              t3.prototype = Object.create(e3 && e3.prototype, { constructor: { value: t3, enumerable: false, writable: true, configurable: true } }), e3 && (Object.setPrototypeOf ? Object.setPrototypeOf(t3, e3) : t3.__proto__ = e3);
            }(e2, t2), e2.prototype.getUser = function t3() {
              var e3 = this;
              return this._loadUser().then(function(t4) {
                return t4 ? (i.Log.info("UserManager.getUser: user loaded"), e3._events.load(t4, false), t4) : (i.Log.info("UserManager.getUser: user not found in storage"), null);
              });
            }, e2.prototype.removeUser = function t3() {
              var e3 = this;
              return this.storeUser(null).then(function() {
                i.Log.info("UserManager.removeUser: user removed from storage"), e3._events.unload();
              });
            }, e2.prototype.signinRedirect = function t3() {
              var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              (e3 = Object.assign({}, e3)).request_type = "si:r";
              var r2 = { useReplaceToNavigate: e3.useReplaceToNavigate };
              return this._signinStart(e3, this._redirectNavigator, r2).then(function() {
                i.Log.info("UserManager.signinRedirect: successful");
              });
            }, e2.prototype.signinRedirectCallback = function t3(e3) {
              return this._signinEnd(e3 || this._redirectNavigator.url).then(function(t4) {
                return t4.profile && t4.profile.sub ? i.Log.info("UserManager.signinRedirectCallback: successful, signed in sub: ", t4.profile.sub) : i.Log.info("UserManager.signinRedirectCallback: no sub"), t4;
              });
            }, e2.prototype.signinPopup = function t3() {
              var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              (e3 = Object.assign({}, e3)).request_type = "si:p";
              var r2 = e3.redirect_uri || this.settings.popup_redirect_uri || this.settings.redirect_uri;
              return r2 ? (e3.redirect_uri = r2, e3.display = "popup", this._signin(e3, this._popupNavigator, { startUrl: r2, popupWindowFeatures: e3.popupWindowFeatures || this.settings.popupWindowFeatures, popupWindowTarget: e3.popupWindowTarget || this.settings.popupWindowTarget }).then(function(t4) {
                return t4 && (t4.profile && t4.profile.sub ? i.Log.info("UserManager.signinPopup: signinPopup successful, signed in sub: ", t4.profile.sub) : i.Log.info("UserManager.signinPopup: no sub")), t4;
              })) : (i.Log.error("UserManager.signinPopup: No popup_redirect_uri or redirect_uri configured"), Promise.reject(new Error("No popup_redirect_uri or redirect_uri configured")));
            }, e2.prototype.signinPopupCallback = function t3(e3) {
              return this._signinCallback(e3, this._popupNavigator).then(function(t4) {
                return t4 && (t4.profile && t4.profile.sub ? i.Log.info("UserManager.signinPopupCallback: successful, signed in sub: ", t4.profile.sub) : i.Log.info("UserManager.signinPopupCallback: no sub")), t4;
              }).catch(function(t4) {
                i.Log.error(t4.message);
              });
            }, e2.prototype.signinSilent = function t3() {
              var e3 = this, r2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              return r2 = Object.assign({}, r2), this._loadUser().then(function(t4) {
                return t4 && t4.refresh_token ? (r2.refresh_token = t4.refresh_token, e3._useRefreshToken(r2)) : (r2.request_type = "si:s", r2.id_token_hint = r2.id_token_hint || e3.settings.includeIdTokenInSilentRenew && t4 && t4.id_token, t4 && e3._settings.validateSubOnSilentRenew && (i.Log.debug("UserManager.signinSilent, subject prior to silent renew: ", t4.profile.sub), r2.current_sub = t4.profile.sub), e3._signinSilentIframe(r2));
              });
            }, e2.prototype._useRefreshToken = function t3() {
              var e3 = this, r2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              return this._tokenClient.exchangeRefreshToken(r2).then(function(t4) {
                return t4 ? t4.access_token ? e3._loadUser().then(function(r3) {
                  if (r3) {
                    var n2 = Promise.resolve();
                    return t4.id_token && (n2 = e3._validateIdTokenFromTokenRefreshToken(r3.profile, t4.id_token)), n2.then(function() {
                      return i.Log.debug("UserManager._useRefreshToken: refresh token response success"), r3.id_token = t4.id_token || r3.id_token, r3.access_token = t4.access_token, r3.refresh_token = t4.refresh_token || r3.refresh_token, r3.expires_in = t4.expires_in, e3.storeUser(r3).then(function() {
                        return e3._events.load(r3), r3;
                      });
                    });
                  }
                  return null;
                }) : (i.Log.error("UserManager._useRefreshToken: No access token returned from token endpoint"), Promise.reject("No access token returned from token endpoint")) : (i.Log.error("UserManager._useRefreshToken: No response returned from token endpoint"), Promise.reject("No response returned from token endpoint"));
              });
            }, e2.prototype._validateIdTokenFromTokenRefreshToken = function t3(e3, r2) {
              var n2 = this;
              return this._metadataService.getIssuer().then(function(t4) {
                return n2.settings.getEpochTime().then(function(o2) {
                  return n2._joseUtil.validateJwtAttributes(r2, t4, n2._settings.client_id, n2._settings.clockSkew, o2).then(function(t5) {
                    return t5 ? t5.sub !== e3.sub ? (i.Log.error("UserManager._validateIdTokenFromTokenRefreshToken: sub in id_token does not match current sub"), Promise.reject(new Error("sub in id_token does not match current sub"))) : t5.auth_time && t5.auth_time !== e3.auth_time ? (i.Log.error("UserManager._validateIdTokenFromTokenRefreshToken: auth_time in id_token does not match original auth_time"), Promise.reject(new Error("auth_time in id_token does not match original auth_time"))) : t5.azp && t5.azp !== e3.azp ? (i.Log.error("UserManager._validateIdTokenFromTokenRefreshToken: azp in id_token does not match original azp"), Promise.reject(new Error("azp in id_token does not match original azp"))) : !t5.azp && e3.azp ? (i.Log.error("UserManager._validateIdTokenFromTokenRefreshToken: azp not in id_token, but present in original id_token"), Promise.reject(new Error("azp not in id_token, but present in original id_token"))) : void 0 : (i.Log.error("UserManager._validateIdTokenFromTokenRefreshToken: Failed to validate id_token"), Promise.reject(new Error("Failed to validate id_token")));
                  });
                });
              });
            }, e2.prototype._signinSilentIframe = function t3() {
              var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r2 = e3.redirect_uri || this.settings.silent_redirect_uri || this.settings.redirect_uri;
              return r2 ? (e3.redirect_uri = r2, e3.prompt = e3.prompt || "none", this._signin(e3, this._iframeNavigator, { startUrl: r2, silentRequestTimeout: e3.silentRequestTimeout || this.settings.silentRequestTimeout }).then(function(t4) {
                return t4 && (t4.profile && t4.profile.sub ? i.Log.info("UserManager.signinSilent: successful, signed in sub: ", t4.profile.sub) : i.Log.info("UserManager.signinSilent: no sub")), t4;
              })) : (i.Log.error("UserManager.signinSilent: No silent_redirect_uri configured"), Promise.reject(new Error("No silent_redirect_uri configured")));
            }, e2.prototype.signinSilentCallback = function t3(e3) {
              return this._signinCallback(e3, this._iframeNavigator).then(function(t4) {
                return t4 && (t4.profile && t4.profile.sub ? i.Log.info("UserManager.signinSilentCallback: successful, signed in sub: ", t4.profile.sub) : i.Log.info("UserManager.signinSilentCallback: no sub")), t4;
              });
            }, e2.prototype.signinCallback = function t3(e3) {
              var r2 = this;
              return this.readSigninResponseState(e3).then(function(t4) {
                var n2 = t4.state;
                t4.response;
                return "si:r" === n2.request_type ? r2.signinRedirectCallback(e3) : "si:p" === n2.request_type ? r2.signinPopupCallback(e3) : "si:s" === n2.request_type ? r2.signinSilentCallback(e3) : Promise.reject(new Error("invalid response_type in state"));
              });
            }, e2.prototype.signoutCallback = function t3(e3, r2) {
              var n2 = this;
              return this.readSignoutResponseState(e3).then(function(t4) {
                var i2 = t4.state, o2 = t4.response;
                return i2 ? "so:r" === i2.request_type ? n2.signoutRedirectCallback(e3) : "so:p" === i2.request_type ? n2.signoutPopupCallback(e3, r2) : Promise.reject(new Error("invalid response_type in state")) : o2;
              });
            }, e2.prototype.querySessionStatus = function t3() {
              var e3 = this, r2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              (r2 = Object.assign({}, r2)).request_type = "si:s";
              var n2 = r2.redirect_uri || this.settings.silent_redirect_uri || this.settings.redirect_uri;
              return n2 ? (r2.redirect_uri = n2, r2.prompt = "none", r2.response_type = r2.response_type || this.settings.query_status_response_type, r2.scope = r2.scope || "openid", r2.skipUserInfo = true, this._signinStart(r2, this._iframeNavigator, { startUrl: n2, silentRequestTimeout: r2.silentRequestTimeout || this.settings.silentRequestTimeout }).then(function(t4) {
                return e3.processSigninResponse(t4.url).then(function(t5) {
                  if (i.Log.debug("UserManager.querySessionStatus: got signin response"), t5.session_state && t5.profile.sub) return i.Log.info("UserManager.querySessionStatus: querySessionStatus success for sub: ", t5.profile.sub), { session_state: t5.session_state, sub: t5.profile.sub, sid: t5.profile.sid };
                  i.Log.info("querySessionStatus successful, user not authenticated");
                }).catch(function(t5) {
                  if (t5.session_state && e3.settings.monitorAnonymousSession && ("login_required" == t5.message || "consent_required" == t5.message || "interaction_required" == t5.message || "account_selection_required" == t5.message)) return i.Log.info("UserManager.querySessionStatus: querySessionStatus success for anonymous user"), { session_state: t5.session_state };
                  throw t5;
                });
              })) : (i.Log.error("UserManager.querySessionStatus: No silent_redirect_uri configured"), Promise.reject(new Error("No silent_redirect_uri configured")));
            }, e2.prototype._signin = function t3(e3, r2) {
              var n2 = this, i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
              return this._signinStart(e3, r2, i2).then(function(t4) {
                return n2._signinEnd(t4.url, e3);
              });
            }, e2.prototype._signinStart = function t3(e3, r2) {
              var n2 = this, o2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
              return r2.prepare(o2).then(function(t4) {
                return i.Log.debug("UserManager._signinStart: got navigator window handle"), n2.createSigninRequest(e3).then(function(e4) {
                  return i.Log.debug("UserManager._signinStart: got signin request"), o2.url = e4.url, o2.id = e4.state.id, t4.navigate(o2);
                }).catch(function(e4) {
                  throw t4.close && (i.Log.debug("UserManager._signinStart: Error after preparing navigator, closing navigator window"), t4.close()), e4;
                });
              });
            }, e2.prototype._signinEnd = function t3(e3) {
              var r2 = this, n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              return this.processSigninResponse(e3).then(function(t4) {
                i.Log.debug("UserManager._signinEnd: got signin response");
                var e4 = new a.User(t4);
                if (n2.current_sub) {
                  if (n2.current_sub !== e4.profile.sub) return i.Log.debug("UserManager._signinEnd: current user does not match user returned from signin. sub from signin: ", e4.profile.sub), Promise.reject(new Error("login_required"));
                  i.Log.debug("UserManager._signinEnd: current user matches user returned from signin");
                }
                return r2.storeUser(e4).then(function() {
                  return i.Log.debug("UserManager._signinEnd: user stored"), r2._events.load(e4), e4;
                });
              });
            }, e2.prototype._signinCallback = function t3(e3, r2) {
              i.Log.debug("UserManager._signinCallback");
              var n2 = "query" === this._settings.response_mode || !this._settings.response_mode && l.SigninRequest.isCode(this._settings.response_type) ? "?" : "#";
              return r2.callback(e3, void 0, n2);
            }, e2.prototype.signoutRedirect = function t3() {
              var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              (e3 = Object.assign({}, e3)).request_type = "so:r";
              var r2 = e3.post_logout_redirect_uri || this.settings.post_logout_redirect_uri;
              r2 && (e3.post_logout_redirect_uri = r2);
              var n2 = { useReplaceToNavigate: e3.useReplaceToNavigate };
              return this._signoutStart(e3, this._redirectNavigator, n2).then(function() {
                i.Log.info("UserManager.signoutRedirect: successful");
              });
            }, e2.prototype.signoutRedirectCallback = function t3(e3) {
              return this._signoutEnd(e3 || this._redirectNavigator.url).then(function(t4) {
                return i.Log.info("UserManager.signoutRedirectCallback: successful"), t4;
              });
            }, e2.prototype.signoutPopup = function t3() {
              var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              (e3 = Object.assign({}, e3)).request_type = "so:p";
              var r2 = e3.post_logout_redirect_uri || this.settings.popup_post_logout_redirect_uri || this.settings.post_logout_redirect_uri;
              return e3.post_logout_redirect_uri = r2, e3.display = "popup", e3.post_logout_redirect_uri && (e3.state = e3.state || {}), this._signout(e3, this._popupNavigator, { startUrl: r2, popupWindowFeatures: e3.popupWindowFeatures || this.settings.popupWindowFeatures, popupWindowTarget: e3.popupWindowTarget || this.settings.popupWindowTarget }).then(function() {
                i.Log.info("UserManager.signoutPopup: successful");
              });
            }, e2.prototype.signoutPopupCallback = function t3(e3, r2) {
              void 0 === r2 && "boolean" == typeof e3 && (r2 = e3, e3 = null);
              return this._popupNavigator.callback(e3, r2, "?").then(function() {
                i.Log.info("UserManager.signoutPopupCallback: successful");
              });
            }, e2.prototype._signout = function t3(e3, r2) {
              var n2 = this, i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
              return this._signoutStart(e3, r2, i2).then(function(t4) {
                return n2._signoutEnd(t4.url);
              });
            }, e2.prototype._signoutStart = function t3() {
              var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r2 = this, n2 = arguments[1], o2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
              return n2.prepare(o2).then(function(t4) {
                return i.Log.debug("UserManager._signoutStart: got navigator window handle"), r2._loadUser().then(function(n3) {
                  return i.Log.debug("UserManager._signoutStart: loaded current user from storage"), (r2._settings.revokeAccessTokenOnSignout ? r2._revokeInternal(n3) : Promise.resolve()).then(function() {
                    var s2 = e3.id_token_hint || n3 && n3.id_token;
                    return s2 && (i.Log.debug("UserManager._signoutStart: Setting id_token into signout request"), e3.id_token_hint = s2), r2.removeUser().then(function() {
                      return i.Log.debug("UserManager._signoutStart: user removed, creating signout request"), r2.createSignoutRequest(e3).then(function(e4) {
                        return i.Log.debug("UserManager._signoutStart: got signout request"), o2.url = e4.url, e4.state && (o2.id = e4.state.id), t4.navigate(o2);
                      });
                    });
                  });
                }).catch(function(e4) {
                  throw t4.close && (i.Log.debug("UserManager._signoutStart: Error after preparing navigator, closing navigator window"), t4.close()), e4;
                });
              });
            }, e2.prototype._signoutEnd = function t3(e3) {
              return this.processSignoutResponse(e3).then(function(t4) {
                return i.Log.debug("UserManager._signoutEnd: got signout response"), t4;
              });
            }, e2.prototype.revokeAccessToken = function t3() {
              var e3 = this;
              return this._loadUser().then(function(t4) {
                return e3._revokeInternal(t4, true).then(function(r2) {
                  if (r2) return i.Log.debug("UserManager.revokeAccessToken: removing token properties from user and re-storing"), t4.access_token = null, t4.refresh_token = null, t4.expires_at = null, t4.token_type = null, e3.storeUser(t4).then(function() {
                    i.Log.debug("UserManager.revokeAccessToken: user stored"), e3._events.load(t4);
                  });
                });
              }).then(function() {
                i.Log.info("UserManager.revokeAccessToken: access token revoked successfully");
              });
            }, e2.prototype._revokeInternal = function t3(e3, r2) {
              var n2 = this;
              if (e3) {
                var o2 = e3.access_token, s2 = e3.refresh_token;
                return this._revokeAccessTokenInternal(o2, r2).then(function(t4) {
                  return n2._revokeRefreshTokenInternal(s2, r2).then(function(e4) {
                    return t4 || e4 || i.Log.debug("UserManager.revokeAccessToken: no need to revoke due to no token(s), or JWT format"), t4 || e4;
                  });
                });
              }
              return Promise.resolve(false);
            }, e2.prototype._revokeAccessTokenInternal = function t3(e3, r2) {
              return !e3 || e3.indexOf(".") >= 0 ? Promise.resolve(false) : this._tokenRevocationClient.revoke(e3, r2).then(function() {
                return true;
              });
            }, e2.prototype._revokeRefreshTokenInternal = function t3(e3, r2) {
              return e3 ? this._tokenRevocationClient.revoke(e3, r2, "refresh_token").then(function() {
                return true;
              }) : Promise.resolve(false);
            }, e2.prototype.startSilentRenew = function t3() {
              this._silentRenewService.start();
            }, e2.prototype.stopSilentRenew = function t3() {
              this._silentRenewService.stop();
            }, e2.prototype._loadUser = function t3() {
              return this._userStore.get(this._userStoreKey).then(function(t4) {
                return t4 ? (i.Log.debug("UserManager._loadUser: user storageString loaded"), a.User.fromStorageString(t4)) : (i.Log.debug("UserManager._loadUser: no user storageString"), null);
              });
            }, e2.prototype.storeUser = function t3(e3) {
              if (e3) {
                i.Log.debug("UserManager.storeUser: storing user");
                var r2 = e3.toStorageString();
                return this._userStore.set(this._userStoreKey, r2);
              }
              return i.Log.debug("storeUser.storeUser: removing user"), this._userStore.remove(this._userStoreKey);
            }, n(e2, [{ key: "_redirectNavigator", get: function t3() {
              return this.settings.redirectNavigator;
            } }, { key: "_popupNavigator", get: function t3() {
              return this.settings.popupNavigator;
            } }, { key: "_iframeNavigator", get: function t3() {
              return this.settings.iframeNavigator;
            } }, { key: "_userStore", get: function t3() {
              return this.settings.userStore;
            } }, { key: "events", get: function t3() {
              return this._events;
            } }, { key: "_userStoreKey", get: function t3() {
              return "user:" + this.settings.authority + ":" + this.settings.client_id;
            } }]), e2;
          }(o.OidcClient);
        }, function(t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.UserManagerSettings = void 0;
          var n = /* @__PURE__ */ function() {
            function t2(t3, e2) {
              for (var r2 = 0; r2 < e2.length; r2++) {
                var n2 = e2[r2];
                n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, n2.key, n2);
              }
            }
            return function(e2, r2, n2) {
              return r2 && t2(e2.prototype, r2), n2 && t2(e2, n2), e2;
            };
          }(), i = (r(0), r(5)), o = r(40), s = r(41), a = r(43), u = r(6), c = r(1), h = r(8);
          function l(t2, e2) {
            if (!(t2 instanceof e2)) throw new TypeError("Cannot call a class as a function");
          }
          function f(t2, e2) {
            if (!t2) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e2 || "object" != typeof e2 && "function" != typeof e2 ? t2 : e2;
          }
          e.UserManagerSettings = function(t2) {
            function e2() {
              var r2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n2 = r2.popup_redirect_uri, i2 = r2.popup_post_logout_redirect_uri, g = r2.popupWindowFeatures, d = r2.popupWindowTarget, p = r2.silent_redirect_uri, v = r2.silentRequestTimeout, y = r2.automaticSilentRenew, m = void 0 !== y && y, _ = r2.validateSubOnSilentRenew, S = void 0 !== _ && _, b = r2.includeIdTokenInSilentRenew, w = void 0 === b || b, F = r2.monitorSession, E = void 0 === F || F, x = r2.monitorAnonymousSession, A = void 0 !== x && x, k = r2.checkSessionInterval, P = void 0 === k ? 2e3 : k, C = r2.stopCheckSessionOnError, T = void 0 === C || C, R = r2.query_status_response_type, I = r2.revokeAccessTokenOnSignout, D = void 0 !== I && I, L = r2.accessTokenExpiringNotificationTime, N = void 0 === L ? 60 : L, U = r2.redirectNavigator, B = void 0 === U ? new o.RedirectNavigator() : U, O = r2.popupNavigator, j = void 0 === O ? new s.PopupNavigator() : O, M = r2.iframeNavigator, H = void 0 === M ? new a.IFrameNavigator() : M, V = r2.userStore, K = void 0 === V ? new u.WebStorageStateStore({ store: c.Global.sessionStorage }) : V;
              l(this, e2);
              var q = f(this, t2.call(this, arguments[0]));
              return q._popup_redirect_uri = n2, q._popup_post_logout_redirect_uri = i2, q._popupWindowFeatures = g, q._popupWindowTarget = d, q._silent_redirect_uri = p, q._silentRequestTimeout = v, q._automaticSilentRenew = m, q._validateSubOnSilentRenew = S, q._includeIdTokenInSilentRenew = w, q._accessTokenExpiringNotificationTime = N, q._monitorSession = E, q._monitorAnonymousSession = A, q._checkSessionInterval = P, q._stopCheckSessionOnError = T, R ? q._query_status_response_type = R : arguments[0] && arguments[0].response_type ? q._query_status_response_type = h.SigninRequest.isOidc(arguments[0].response_type) ? "id_token" : "code" : q._query_status_response_type = "id_token", q._revokeAccessTokenOnSignout = D, q._redirectNavigator = B, q._popupNavigator = j, q._iframeNavigator = H, q._userStore = K, q;
            }
            return function r2(t3, e3) {
              if ("function" != typeof e3 && null !== e3) throw new TypeError("Super expression must either be null or a function, not " + typeof e3);
              t3.prototype = Object.create(e3 && e3.prototype, { constructor: { value: t3, enumerable: false, writable: true, configurable: true } }), e3 && (Object.setPrototypeOf ? Object.setPrototypeOf(t3, e3) : t3.__proto__ = e3);
            }(e2, t2), n(e2, [{ key: "popup_redirect_uri", get: function t3() {
              return this._popup_redirect_uri;
            } }, { key: "popup_post_logout_redirect_uri", get: function t3() {
              return this._popup_post_logout_redirect_uri;
            } }, { key: "popupWindowFeatures", get: function t3() {
              return this._popupWindowFeatures;
            } }, { key: "popupWindowTarget", get: function t3() {
              return this._popupWindowTarget;
            } }, { key: "silent_redirect_uri", get: function t3() {
              return this._silent_redirect_uri;
            } }, { key: "silentRequestTimeout", get: function t3() {
              return this._silentRequestTimeout;
            } }, { key: "automaticSilentRenew", get: function t3() {
              return this._automaticSilentRenew;
            } }, { key: "validateSubOnSilentRenew", get: function t3() {
              return this._validateSubOnSilentRenew;
            } }, { key: "includeIdTokenInSilentRenew", get: function t3() {
              return this._includeIdTokenInSilentRenew;
            } }, { key: "accessTokenExpiringNotificationTime", get: function t3() {
              return this._accessTokenExpiringNotificationTime;
            } }, { key: "monitorSession", get: function t3() {
              return this._monitorSession;
            } }, { key: "monitorAnonymousSession", get: function t3() {
              return this._monitorAnonymousSession;
            } }, { key: "checkSessionInterval", get: function t3() {
              return this._checkSessionInterval;
            } }, { key: "stopCheckSessionOnError", get: function t3() {
              return this._stopCheckSessionOnError;
            } }, { key: "query_status_response_type", get: function t3() {
              return this._query_status_response_type;
            } }, { key: "revokeAccessTokenOnSignout", get: function t3() {
              return this._revokeAccessTokenOnSignout;
            } }, { key: "redirectNavigator", get: function t3() {
              return this._redirectNavigator;
            } }, { key: "popupNavigator", get: function t3() {
              return this._popupNavigator;
            } }, { key: "iframeNavigator", get: function t3() {
              return this._iframeNavigator;
            } }, { key: "userStore", get: function t3() {
              return this._userStore;
            } }]), e2;
          }(i.OidcClientSettings);
        }, function(t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.RedirectNavigator = void 0;
          var n = /* @__PURE__ */ function() {
            function t2(t3, e2) {
              for (var r2 = 0; r2 < e2.length; r2++) {
                var n2 = e2[r2];
                n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, n2.key, n2);
              }
            }
            return function(e2, r2, n2) {
              return r2 && t2(e2.prototype, r2), n2 && t2(e2, n2), e2;
            };
          }(), i = r(0);
          e.RedirectNavigator = function() {
            function t2() {
              !function e2(t3, r2) {
                if (!(t3 instanceof r2)) throw new TypeError("Cannot call a class as a function");
              }(this, t2);
            }
            return t2.prototype.prepare = function t3() {
              return Promise.resolve(this);
            }, t2.prototype.navigate = function t3(e2) {
              return e2 && e2.url ? (e2.useReplaceToNavigate ? window.location.replace(e2.url) : window.location = e2.url, Promise.resolve()) : (i.Log.error("RedirectNavigator.navigate: No url provided"), Promise.reject(new Error("No url provided")));
            }, n(t2, [{ key: "url", get: function t3() {
              return window.location.href;
            } }]), t2;
          }();
        }, function(t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.PopupNavigator = void 0;
          var n = r(0), i = r(42);
          e.PopupNavigator = function() {
            function t2() {
              !function e2(t3, r2) {
                if (!(t3 instanceof r2)) throw new TypeError("Cannot call a class as a function");
              }(this, t2);
            }
            return t2.prototype.prepare = function t3(e2) {
              var r2 = new i.PopupWindow(e2);
              return Promise.resolve(r2);
            }, t2.prototype.callback = function t3(e2, r2, o) {
              n.Log.debug("PopupNavigator.callback");
              try {
                return i.PopupWindow.notifyOpener(e2, r2, o), Promise.resolve();
              } catch (t4) {
                return Promise.reject(t4);
              }
            }, t2;
          }();
        }, function(t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.PopupWindow = void 0;
          var n = /* @__PURE__ */ function() {
            function t2(t3, e2) {
              for (var r2 = 0; r2 < e2.length; r2++) {
                var n2 = e2[r2];
                n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, n2.key, n2);
              }
            }
            return function(e2, r2, n2) {
              return r2 && t2(e2.prototype, r2), n2 && t2(e2, n2), e2;
            };
          }(), i = r(0), o = r(3);
          e.PopupWindow = function() {
            function t2(e2) {
              var r2 = this;
              !function n2(t3, e3) {
                if (!(t3 instanceof e3)) throw new TypeError("Cannot call a class as a function");
              }(this, t2), this._promise = new Promise(function(t3, e3) {
                r2._resolve = t3, r2._reject = e3;
              });
              var o2 = e2.popupWindowTarget || "_blank", s = e2.popupWindowFeatures || "location=no,toolbar=no,width=500,height=500,left=100,top=100;";
              this._popup = window.open("", o2, s), this._popup && (i.Log.debug("PopupWindow.ctor: popup successfully created"), this._checkForPopupClosedTimer = window.setInterval(this._checkForPopupClosed.bind(this), 500));
            }
            return t2.prototype.navigate = function t3(e2) {
              return this._popup ? e2 && e2.url ? (i.Log.debug("PopupWindow.navigate: Setting URL in popup"), this._id = e2.id, this._id && (window["popupCallback_" + e2.id] = this._callback.bind(this)), this._popup.focus(), this._popup.window.location = e2.url) : (this._error("PopupWindow.navigate: no url provided"), this._error("No url provided")) : this._error("PopupWindow.navigate: Error opening popup window"), this.promise;
            }, t2.prototype._success = function t3(e2) {
              i.Log.debug("PopupWindow.callback: Successful response from popup window"), this._cleanup(), this._resolve(e2);
            }, t2.prototype._error = function t3(e2) {
              i.Log.error("PopupWindow.error: ", e2), this._cleanup(), this._reject(new Error(e2));
            }, t2.prototype.close = function t3() {
              this._cleanup(false);
            }, t2.prototype._cleanup = function t3(e2) {
              i.Log.debug("PopupWindow.cleanup"), window.clearInterval(this._checkForPopupClosedTimer), this._checkForPopupClosedTimer = null, delete window["popupCallback_" + this._id], this._popup && !e2 && this._popup.close(), this._popup = null;
            }, t2.prototype._checkForPopupClosed = function t3() {
              this._popup && !this._popup.closed || this._error("Popup window closed");
            }, t2.prototype._callback = function t3(e2, r2) {
              this._cleanup(r2), e2 ? (i.Log.debug("PopupWindow.callback success"), this._success({ url: e2 })) : (i.Log.debug("PopupWindow.callback: Invalid response from popup"), this._error("Invalid response from popup"));
            }, t2.notifyOpener = function t3(e2, r2, n2) {
              if (window.opener) {
                if (e2 = e2 || window.location.href) {
                  var s = o.UrlUtility.parseUrlFragment(e2, n2);
                  if (s.state) {
                    var a = "popupCallback_" + s.state, u = window.opener[a];
                    u ? (i.Log.debug("PopupWindow.notifyOpener: passing url message to opener"), u(e2, r2)) : i.Log.warn("PopupWindow.notifyOpener: no matching callback found on opener");
                  } else i.Log.warn("PopupWindow.notifyOpener: no state found in response url");
                }
              } else i.Log.warn("PopupWindow.notifyOpener: no window.opener. Can't complete notification.");
            }, n(t2, [{ key: "promise", get: function t3() {
              return this._promise;
            } }]), t2;
          }();
        }, function(t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.IFrameNavigator = void 0;
          var n = r(0), i = r(44);
          e.IFrameNavigator = function() {
            function t2() {
              !function e2(t3, r2) {
                if (!(t3 instanceof r2)) throw new TypeError("Cannot call a class as a function");
              }(this, t2);
            }
            return t2.prototype.prepare = function t3(e2) {
              var r2 = new i.IFrameWindow(e2);
              return Promise.resolve(r2);
            }, t2.prototype.callback = function t3(e2) {
              n.Log.debug("IFrameNavigator.callback");
              try {
                return i.IFrameWindow.notifyParent(e2), Promise.resolve();
              } catch (t4) {
                return Promise.reject(t4);
              }
            }, t2;
          }();
        }, function(t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.IFrameWindow = void 0;
          var n = /* @__PURE__ */ function() {
            function t2(t3, e2) {
              for (var r2 = 0; r2 < e2.length; r2++) {
                var n2 = e2[r2];
                n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, n2.key, n2);
              }
            }
            return function(e2, r2, n2) {
              return r2 && t2(e2.prototype, r2), n2 && t2(e2, n2), e2;
            };
          }(), i = r(0);
          e.IFrameWindow = function() {
            function t2(e2) {
              var r2 = this;
              !function n2(t3, e3) {
                if (!(t3 instanceof e3)) throw new TypeError("Cannot call a class as a function");
              }(this, t2), this._promise = new Promise(function(t3, e3) {
                r2._resolve = t3, r2._reject = e3;
              }), this._boundMessageEvent = this._message.bind(this), window.addEventListener("message", this._boundMessageEvent, false), this._frame = window.document.createElement("iframe"), this._frame.style.visibility = "hidden", this._frame.style.position = "absolute", this._frame.width = 0, this._frame.height = 0, window.document.body.appendChild(this._frame);
            }
            return t2.prototype.navigate = function t3(e2) {
              if (e2 && e2.url) {
                var r2 = e2.silentRequestTimeout || 1e4;
                i.Log.debug("IFrameWindow.navigate: Using timeout of:", r2), this._timer = window.setTimeout(this._timeout.bind(this), r2), this._frame.src = e2.url;
              } else this._error("No url provided");
              return this.promise;
            }, t2.prototype._success = function t3(e2) {
              this._cleanup(), i.Log.debug("IFrameWindow: Successful response from frame window"), this._resolve(e2);
            }, t2.prototype._error = function t3(e2) {
              this._cleanup(), i.Log.error(e2), this._reject(new Error(e2));
            }, t2.prototype.close = function t3() {
              this._cleanup();
            }, t2.prototype._cleanup = function t3() {
              this._frame && (i.Log.debug("IFrameWindow: cleanup"), window.removeEventListener("message", this._boundMessageEvent, false), window.clearTimeout(this._timer), window.document.body.removeChild(this._frame), this._timer = null, this._frame = null, this._boundMessageEvent = null);
            }, t2.prototype._timeout = function t3() {
              i.Log.debug("IFrameWindow.timeout"), this._error("Frame window timed out");
            }, t2.prototype._message = function t3(e2) {
              if (i.Log.debug("IFrameWindow.message"), this._timer && e2.origin === this._origin && e2.source === this._frame.contentWindow && "string" == typeof e2.data && (e2.data.startsWith("http://") || e2.data.startsWith("https://"))) {
                var r2 = e2.data;
                r2 ? this._success({ url: r2 }) : this._error("Invalid response from frame");
              }
            }, t2.notifyParent = function t3(e2) {
              i.Log.debug("IFrameWindow.notifyParent"), (e2 = e2 || window.location.href) && (i.Log.debug("IFrameWindow.notifyParent: posting url message to parent"), window.parent.postMessage(e2, location.protocol + "//" + location.host));
            }, n(t2, [{ key: "promise", get: function t3() {
              return this._promise;
            } }, { key: "_origin", get: function t3() {
              return location.protocol + "//" + location.host;
            } }]), t2;
          }();
        }, function(t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.UserManagerEvents = void 0;
          var n = r(0), i = r(16), o = r(17);
          e.UserManagerEvents = function(t2) {
            function e2(r2) {
              !function n2(t3, e3) {
                if (!(t3 instanceof e3)) throw new TypeError("Cannot call a class as a function");
              }(this, e2);
              var i2 = function s(t3, e3) {
                if (!t3) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e3 || "object" != typeof e3 && "function" != typeof e3 ? t3 : e3;
              }(this, t2.call(this, r2));
              return i2._userLoaded = new o.Event("User loaded"), i2._userUnloaded = new o.Event("User unloaded"), i2._silentRenewError = new o.Event("Silent renew error"), i2._userSignedIn = new o.Event("User signed in"), i2._userSignedOut = new o.Event("User signed out"), i2._userSessionChanged = new o.Event("User session changed"), i2;
            }
            return function r2(t3, e3) {
              if ("function" != typeof e3 && null !== e3) throw new TypeError("Super expression must either be null or a function, not " + typeof e3);
              t3.prototype = Object.create(e3 && e3.prototype, { constructor: { value: t3, enumerable: false, writable: true, configurable: true } }), e3 && (Object.setPrototypeOf ? Object.setPrototypeOf(t3, e3) : t3.__proto__ = e3);
            }(e2, t2), e2.prototype.load = function e3(r2) {
              var i2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              n.Log.debug("UserManagerEvents.load"), t2.prototype.load.call(this, r2), i2 && this._userLoaded.raise(r2);
            }, e2.prototype.unload = function e3() {
              n.Log.debug("UserManagerEvents.unload"), t2.prototype.unload.call(this), this._userUnloaded.raise();
            }, e2.prototype.addUserLoaded = function t3(e3) {
              this._userLoaded.addHandler(e3);
            }, e2.prototype.removeUserLoaded = function t3(e3) {
              this._userLoaded.removeHandler(e3);
            }, e2.prototype.addUserUnloaded = function t3(e3) {
              this._userUnloaded.addHandler(e3);
            }, e2.prototype.removeUserUnloaded = function t3(e3) {
              this._userUnloaded.removeHandler(e3);
            }, e2.prototype.addSilentRenewError = function t3(e3) {
              this._silentRenewError.addHandler(e3);
            }, e2.prototype.removeSilentRenewError = function t3(e3) {
              this._silentRenewError.removeHandler(e3);
            }, e2.prototype._raiseSilentRenewError = function t3(e3) {
              n.Log.debug("UserManagerEvents._raiseSilentRenewError", e3.message), this._silentRenewError.raise(e3);
            }, e2.prototype.addUserSignedIn = function t3(e3) {
              this._userSignedIn.addHandler(e3);
            }, e2.prototype.removeUserSignedIn = function t3(e3) {
              this._userSignedIn.removeHandler(e3);
            }, e2.prototype._raiseUserSignedIn = function t3() {
              n.Log.debug("UserManagerEvents._raiseUserSignedIn"), this._userSignedIn.raise();
            }, e2.prototype.addUserSignedOut = function t3(e3) {
              this._userSignedOut.addHandler(e3);
            }, e2.prototype.removeUserSignedOut = function t3(e3) {
              this._userSignedOut.removeHandler(e3);
            }, e2.prototype._raiseUserSignedOut = function t3() {
              n.Log.debug("UserManagerEvents._raiseUserSignedOut"), this._userSignedOut.raise();
            }, e2.prototype.addUserSessionChanged = function t3(e3) {
              this._userSessionChanged.addHandler(e3);
            }, e2.prototype.removeUserSessionChanged = function t3(e3) {
              this._userSessionChanged.removeHandler(e3);
            }, e2.prototype._raiseUserSessionChanged = function t3() {
              n.Log.debug("UserManagerEvents._raiseUserSessionChanged"), this._userSessionChanged.raise();
            }, e2;
          }(i.AccessTokenEvents);
        }, function(t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.Timer = void 0;
          var n = /* @__PURE__ */ function() {
            function t2(t3, e2) {
              for (var r2 = 0; r2 < e2.length; r2++) {
                var n2 = e2[r2];
                n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, n2.key, n2);
              }
            }
            return function(e2, r2, n2) {
              return r2 && t2(e2.prototype, r2), n2 && t2(e2, n2), e2;
            };
          }(), i = r(0), o = r(1), s = r(17);
          function a(t2, e2) {
            if (!(t2 instanceof e2)) throw new TypeError("Cannot call a class as a function");
          }
          function u(t2, e2) {
            if (!t2) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e2 || "object" != typeof e2 && "function" != typeof e2 ? t2 : e2;
          }
          e.Timer = function(t2) {
            function e2(r2) {
              var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.Global.timer, i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
              a(this, e2);
              var s2 = u(this, t2.call(this, r2));
              return s2._timer = n2, s2._nowFunc = i2 || function() {
                return Date.now() / 1e3;
              }, s2;
            }
            return function r2(t3, e3) {
              if ("function" != typeof e3 && null !== e3) throw new TypeError("Super expression must either be null or a function, not " + typeof e3);
              t3.prototype = Object.create(e3 && e3.prototype, { constructor: { value: t3, enumerable: false, writable: true, configurable: true } }), e3 && (Object.setPrototypeOf ? Object.setPrototypeOf(t3, e3) : t3.__proto__ = e3);
            }(e2, t2), e2.prototype.init = function t3(e3) {
              e3 <= 0 && (e3 = 1), e3 = parseInt(e3);
              var r2 = this.now + e3;
              if (this.expiration === r2 && this._timerHandle) i.Log.debug("Timer.init timer " + this._name + " skipping initialization since already initialized for expiration:", this.expiration);
              else {
                this.cancel(), i.Log.debug("Timer.init timer " + this._name + " for duration:", e3), this._expiration = r2;
                var n2 = 5;
                e3 < n2 && (n2 = e3), this._timerHandle = this._timer.setInterval(this._callback.bind(this), 1e3 * n2);
              }
            }, e2.prototype.cancel = function t3() {
              this._timerHandle && (i.Log.debug("Timer.cancel: ", this._name), this._timer.clearInterval(this._timerHandle), this._timerHandle = null);
            }, e2.prototype._callback = function e3() {
              var r2 = this._expiration - this.now;
              i.Log.debug("Timer.callback; " + this._name + " timer expires in:", r2), this._expiration <= this.now && (this.cancel(), t2.prototype.raise.call(this));
            }, n(e2, [{ key: "now", get: function t3() {
              return parseInt(this._nowFunc());
            } }, { key: "expiration", get: function t3() {
              return this._expiration;
            } }]), e2;
          }(s.Event);
        }, function(t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.SilentRenewService = void 0;
          var n = r(0);
          e.SilentRenewService = function() {
            function t2(e2) {
              !function r2(t3, e3) {
                if (!(t3 instanceof e3)) throw new TypeError("Cannot call a class as a function");
              }(this, t2), this._userManager = e2;
            }
            return t2.prototype.start = function t3() {
              this._callback || (this._callback = this._tokenExpiring.bind(this), this._userManager.events.addAccessTokenExpiring(this._callback), this._userManager.getUser().then(function(t4) {
              }).catch(function(t4) {
                n.Log.error("SilentRenewService.start: Error from getUser:", t4.message);
              }));
            }, t2.prototype.stop = function t3() {
              this._callback && (this._userManager.events.removeAccessTokenExpiring(this._callback), delete this._callback);
            }, t2.prototype._tokenExpiring = function t3() {
              var e2 = this;
              this._userManager.signinSilent().then(function(t4) {
                n.Log.debug("SilentRenewService._tokenExpiring: Silent token renewal successful");
              }, function(t4) {
                n.Log.error("SilentRenewService._tokenExpiring: Error from signinSilent:", t4.message), e2._userManager.events._raiseSilentRenewError(t4);
              });
            }, t2;
          }();
        }, function(t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.CordovaPopupNavigator = void 0;
          var n = r(21);
          e.CordovaPopupNavigator = function() {
            function t2() {
              !function e2(t3, r2) {
                if (!(t3 instanceof r2)) throw new TypeError("Cannot call a class as a function");
              }(this, t2);
            }
            return t2.prototype.prepare = function t3(e2) {
              var r2 = new n.CordovaPopupWindow(e2);
              return Promise.resolve(r2);
            }, t2;
          }();
        }, function(t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.CordovaIFrameNavigator = void 0;
          var n = r(21);
          e.CordovaIFrameNavigator = function() {
            function t2() {
              !function e2(t3, r2) {
                if (!(t3 instanceof r2)) throw new TypeError("Cannot call a class as a function");
              }(this, t2);
            }
            return t2.prototype.prepare = function t3(e2) {
              e2.popupWindowFeatures = "hidden=yes";
              var r2 = new n.CordovaPopupWindow(e2);
              return Promise.resolve(r2);
            }, t2;
          }();
        }, function(t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true });
          e.Version = "1.11.6";
        }]);
      });
    }
  });

  // node_modules/queue-microtask/index.js
  var require_queue_microtask = __commonJS({
    "node_modules/queue-microtask/index.js"(exports4, module) {
      init_dirname();
      init_buffer2();
      init_process2();
      var promise;
      module.exports = typeof queueMicrotask === "function" ? queueMicrotask.bind(typeof window !== "undefined" ? window : global) : (cb) => (promise || (promise = Promise.resolve())).then(cb).catch((err) => setTimeout(() => {
        throw err;
      }, 0));
    }
  });

  // src/browser.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // src/jouwid.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@muze-nl/assert/src/assert.mjs
  init_dirname();
  init_buffer2();
  init_process2();
  globalThis.assertEnabled = false;
  function assert(source, test) {
    if (globalThis.assertEnabled) {
      let problems = fails(source, test);
      if (problems) {
        console.error("\u{1F170}\uFE0F  Assertions failed because of:", problems, "in this source:", source);
        throw new Error("Assertions failed", {
          cause: { problems, source }
        });
      }
    }
  }
  function Optional(pattern) {
    return function _Optional(data, root, path) {
      if (typeof data != "undefined" && data != null && typeof pattern != "undefined") {
        return fails(data, pattern, root, path);
      }
    };
  }
  function Required(pattern) {
    return function _Required(data, root, path) {
      if (data == null || typeof data == "undefined") {
        return error("data is required", data, pattern || "any value", path);
      } else if (typeof pattern != "undefined") {
        return fails(data, pattern, root, path);
      } else {
        return false;
      }
    };
  }
  function oneOf(...patterns) {
    return function _oneOf(data, root, path) {
      for (let pattern of patterns) {
        if (!fails(data, pattern, root, path)) {
          return false;
        }
      }
      return error("data does not match oneOf patterns", data, patterns, path);
    };
  }
  function validURL(data, root, path) {
    try {
      if (data instanceof URL) {
        data = data.href;
      }
      let url = new URL(data);
      if (url.href != data) {
        if (!(url.href + "/" == data || url.href == data + "/")) {
          return error("data is not a valid url", data, "validURL", path);
        }
      }
    } catch (e) {
      return error("data is not a valid url", data, "validURL", path);
    }
  }
  function instanceOf(constructor) {
    return function _instanceOf(data, root, path) {
      if (!(data instanceof constructor)) {
        return error("data is not an instanceof pattern", data, constructor, path);
      }
    };
  }
  function fails(data, pattern, root, path = "") {
    if (!root) {
      root = data;
    }
    let problems = [];
    if (pattern === Boolean) {
      if (typeof data != "boolean" && !(data instanceof Boolean)) {
        problems.push(error("data is not a boolean", data, pattern, path));
      }
    } else if (pattern === Number) {
      if (typeof data != "number" && !(data instanceof Number)) {
        problems.push(error("data is not a number", data, pattern, path));
      }
    } else if (pattern === String) {
      if (typeof data != "string" && !(data instanceof String)) {
        problems.push(error("data is not a string", data, pattern, path));
      }
      if (data == "") {
        problems.push(error("data is an empty string, which is not allowed", data, pattern, path));
      }
    } else if (pattern instanceof RegExp) {
      if (Array.isArray(data)) {
        let index = data.findIndex((element, index2) => fails(element, pattern, root, path + "[" + index2 + "]"));
        if (index > -1) {
          problems.push(error("data[" + index + "] does not match pattern", data[index], pattern, path + "[" + index + "]"));
        }
      } else if (typeof data == "undefined") {
        problems.push(error("data is undefined, should match pattern", data, pattern, path));
      } else if (!pattern.test(data)) {
        problems.push(error("data does not match pattern", data, pattern, path));
      }
    } else if (pattern instanceof Function) {
      let problem = pattern(data, root, path);
      if (problem) {
        if (Array.isArray(problem)) {
          problems = problems.concat(problem);
        } else {
          problems.push(problem);
        }
      }
    } else if (Array.isArray(pattern)) {
      if (!Array.isArray(data)) {
        problems.push(error("data is not an array", data, [], path));
      }
      for (let p of pattern) {
        for (let index of data.keys()) {
          let problem = fails(data[index], p, root, path + "[" + index + "]");
          if (Array.isArray(problem)) {
            problems = problems.concat(problem);
          } else if (problem) {
            problems.push(problem);
          }
        }
      }
    } else if (pattern && typeof pattern == "object") {
      if (Array.isArray(data)) {
        let index = data.findIndex((element, index2) => fails(element, pattern, root, path + "[" + index2 + "]"));
        if (index > -1) {
          problems.push(error("data[" + index + "] does not match pattern", data[index], pattern, path + "[" + index + "]"));
        }
      } else if (!data || typeof data != "object") {
        problems.push(error("data is not an object, pattern is", data, pattern, path));
      } else {
        if (data instanceof URLSearchParams) {
          data = Object.fromEntries(data);
        }
        if (pattern instanceof Function) {
          let result = fails(data, pattern, root, path);
          if (result) {
            problems = problems.concat(result);
          }
        } else {
          for (const [wKey, wVal] of Object.entries(pattern)) {
            let result = fails(data[wKey], wVal, root, path + "." + wKey);
            if (result) {
              problems = problems.concat(result);
            }
          }
        }
      }
    } else {
      if (pattern != data) {
        problems.push(error("data and pattern are not equal", data, pattern, path));
      }
    }
    if (problems.length) {
      return problems;
    }
    return false;
  }
  function error(message2, found, expected, path, problems) {
    let result = {
      message: message2,
      found,
      expected,
      path
    };
    if (problems) {
      result.problems = problems;
    }
    return result;
  }

  // node_modules/@inrupt/solid-client-authn-browser/dist/index.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@inrupt/solid-client-authn-core/dist/index.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/jose/dist/browser/index.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/jose/dist/browser/runtime/base64url.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/jose/dist/browser/lib/buffer_utils.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/jose/dist/browser/runtime/webcrypto.js
  init_dirname();
  init_buffer2();
  init_process2();
  var webcrypto_default = crypto;
  var isCryptoKey = (key) => key instanceof CryptoKey;

  // node_modules/jose/dist/browser/lib/buffer_utils.js
  var encoder = new TextEncoder();
  var decoder = new TextDecoder();
  var MAX_INT32 = 2 ** 32;
  function concat(...buffers) {
    const size = buffers.reduce((acc, { length }) => acc + length, 0);
    const buf = new Uint8Array(size);
    let i = 0;
    for (const buffer of buffers) {
      buf.set(buffer, i);
      i += buffer.length;
    }
    return buf;
  }

  // node_modules/jose/dist/browser/runtime/base64url.js
  var encodeBase64 = (input) => {
    let unencoded = input;
    if (typeof unencoded === "string") {
      unencoded = encoder.encode(unencoded);
    }
    const CHUNK_SIZE = 32768;
    const arr = [];
    for (let i = 0; i < unencoded.length; i += CHUNK_SIZE) {
      arr.push(String.fromCharCode.apply(null, unencoded.subarray(i, i + CHUNK_SIZE)));
    }
    return btoa(arr.join(""));
  };
  var encode = (input) => {
    return encodeBase64(input).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  };
  var decodeBase64 = (encoded) => {
    const binary = atob(encoded);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
  };
  var decode = (input) => {
    let encoded = input;
    if (encoded instanceof Uint8Array) {
      encoded = decoder.decode(encoded);
    }
    encoded = encoded.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, "");
    try {
      return decodeBase64(encoded);
    } catch {
      throw new TypeError("The input to be decoded is not correctly encoded.");
    }
  };

  // node_modules/jose/dist/browser/util/errors.js
  init_dirname();
  init_buffer2();
  init_process2();
  var JOSEError = class extends Error {
    constructor(message2, options) {
      super(message2, options);
      this.code = "ERR_JOSE_GENERIC";
      this.name = this.constructor.name;
      Error.captureStackTrace?.(this, this.constructor);
    }
  };
  JOSEError.code = "ERR_JOSE_GENERIC";
  var JWTClaimValidationFailed = class extends JOSEError {
    constructor(message2, payload, claim = "unspecified", reason = "unspecified") {
      super(message2, { cause: { claim, reason, payload } });
      this.code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
      this.claim = claim;
      this.reason = reason;
      this.payload = payload;
    }
  };
  JWTClaimValidationFailed.code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
  var JWTExpired = class extends JOSEError {
    constructor(message2, payload, claim = "unspecified", reason = "unspecified") {
      super(message2, { cause: { claim, reason, payload } });
      this.code = "ERR_JWT_EXPIRED";
      this.claim = claim;
      this.reason = reason;
      this.payload = payload;
    }
  };
  JWTExpired.code = "ERR_JWT_EXPIRED";
  var JOSEAlgNotAllowed = class extends JOSEError {
    constructor() {
      super(...arguments);
      this.code = "ERR_JOSE_ALG_NOT_ALLOWED";
    }
  };
  JOSEAlgNotAllowed.code = "ERR_JOSE_ALG_NOT_ALLOWED";
  var JOSENotSupported = class extends JOSEError {
    constructor() {
      super(...arguments);
      this.code = "ERR_JOSE_NOT_SUPPORTED";
    }
  };
  JOSENotSupported.code = "ERR_JOSE_NOT_SUPPORTED";
  var JWEDecryptionFailed = class extends JOSEError {
    constructor(message2 = "decryption operation failed", options) {
      super(message2, options);
      this.code = "ERR_JWE_DECRYPTION_FAILED";
    }
  };
  JWEDecryptionFailed.code = "ERR_JWE_DECRYPTION_FAILED";
  var JWEInvalid = class extends JOSEError {
    constructor() {
      super(...arguments);
      this.code = "ERR_JWE_INVALID";
    }
  };
  JWEInvalid.code = "ERR_JWE_INVALID";
  var JWSInvalid = class extends JOSEError {
    constructor() {
      super(...arguments);
      this.code = "ERR_JWS_INVALID";
    }
  };
  JWSInvalid.code = "ERR_JWS_INVALID";
  var JWTInvalid = class extends JOSEError {
    constructor() {
      super(...arguments);
      this.code = "ERR_JWT_INVALID";
    }
  };
  JWTInvalid.code = "ERR_JWT_INVALID";
  var JWKInvalid = class extends JOSEError {
    constructor() {
      super(...arguments);
      this.code = "ERR_JWK_INVALID";
    }
  };
  JWKInvalid.code = "ERR_JWK_INVALID";
  var JWKSInvalid = class extends JOSEError {
    constructor() {
      super(...arguments);
      this.code = "ERR_JWKS_INVALID";
    }
  };
  JWKSInvalid.code = "ERR_JWKS_INVALID";
  var JWKSNoMatchingKey = class extends JOSEError {
    constructor(message2 = "no applicable key found in the JSON Web Key Set", options) {
      super(message2, options);
      this.code = "ERR_JWKS_NO_MATCHING_KEY";
    }
  };
  JWKSNoMatchingKey.code = "ERR_JWKS_NO_MATCHING_KEY";
  var JWKSMultipleMatchingKeys = class extends JOSEError {
    constructor(message2 = "multiple matching keys found in the JSON Web Key Set", options) {
      super(message2, options);
      this.code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS";
    }
  };
  JWKSMultipleMatchingKeys.code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS";
  var JWKSTimeout = class extends JOSEError {
    constructor(message2 = "request timed out", options) {
      super(message2, options);
      this.code = "ERR_JWKS_TIMEOUT";
    }
  };
  JWKSTimeout.code = "ERR_JWKS_TIMEOUT";
  var JWSSignatureVerificationFailed = class extends JOSEError {
    constructor(message2 = "signature verification failed", options) {
      super(message2, options);
      this.code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
    }
  };
  JWSSignatureVerificationFailed.code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";

  // node_modules/jose/dist/browser/lib/crypto_key.js
  init_dirname();
  init_buffer2();
  init_process2();
  function unusable(name2, prop = "algorithm.name") {
    return new TypeError(`CryptoKey does not support this operation, its ${prop} must be ${name2}`);
  }
  function isAlgorithm(algorithm, name2) {
    return algorithm.name === name2;
  }
  function getHashLength(hash) {
    return parseInt(hash.name.slice(4), 10);
  }
  function getNamedCurve(alg) {
    switch (alg) {
      case "ES256":
        return "P-256";
      case "ES384":
        return "P-384";
      case "ES512":
        return "P-521";
      default:
        throw new Error("unreachable");
    }
  }
  function checkUsage(key, usages) {
    if (usages.length && !usages.some((expected) => key.usages.includes(expected))) {
      let msg = "CryptoKey does not support this operation, its usages must include ";
      if (usages.length > 2) {
        const last = usages.pop();
        msg += `one of ${usages.join(", ")}, or ${last}.`;
      } else if (usages.length === 2) {
        msg += `one of ${usages[0]} or ${usages[1]}.`;
      } else {
        msg += `${usages[0]}.`;
      }
      throw new TypeError(msg);
    }
  }
  function checkSigCryptoKey(key, alg, ...usages) {
    switch (alg) {
      case "HS256":
      case "HS384":
      case "HS512": {
        if (!isAlgorithm(key.algorithm, "HMAC"))
          throw unusable("HMAC");
        const expected = parseInt(alg.slice(2), 10);
        const actual = getHashLength(key.algorithm.hash);
        if (actual !== expected)
          throw unusable(`SHA-${expected}`, "algorithm.hash");
        break;
      }
      case "RS256":
      case "RS384":
      case "RS512": {
        if (!isAlgorithm(key.algorithm, "RSASSA-PKCS1-v1_5"))
          throw unusable("RSASSA-PKCS1-v1_5");
        const expected = parseInt(alg.slice(2), 10);
        const actual = getHashLength(key.algorithm.hash);
        if (actual !== expected)
          throw unusable(`SHA-${expected}`, "algorithm.hash");
        break;
      }
      case "PS256":
      case "PS384":
      case "PS512": {
        if (!isAlgorithm(key.algorithm, "RSA-PSS"))
          throw unusable("RSA-PSS");
        const expected = parseInt(alg.slice(2), 10);
        const actual = getHashLength(key.algorithm.hash);
        if (actual !== expected)
          throw unusable(`SHA-${expected}`, "algorithm.hash");
        break;
      }
      case "EdDSA": {
        if (key.algorithm.name !== "Ed25519" && key.algorithm.name !== "Ed448") {
          throw unusable("Ed25519 or Ed448");
        }
        break;
      }
      case "ES256":
      case "ES384":
      case "ES512": {
        if (!isAlgorithm(key.algorithm, "ECDSA"))
          throw unusable("ECDSA");
        const expected = getNamedCurve(alg);
        const actual = key.algorithm.namedCurve;
        if (actual !== expected)
          throw unusable(expected, "algorithm.namedCurve");
        break;
      }
      default:
        throw new TypeError("CryptoKey does not support this operation");
    }
    checkUsage(key, usages);
  }

  // node_modules/jose/dist/browser/lib/invalid_key_input.js
  init_dirname();
  init_buffer2();
  init_process2();
  function message(msg, actual, ...types2) {
    types2 = types2.filter(Boolean);
    if (types2.length > 2) {
      const last = types2.pop();
      msg += `one of type ${types2.join(", ")}, or ${last}.`;
    } else if (types2.length === 2) {
      msg += `one of type ${types2[0]} or ${types2[1]}.`;
    } else {
      msg += `of type ${types2[0]}.`;
    }
    if (actual == null) {
      msg += ` Received ${actual}`;
    } else if (typeof actual === "function" && actual.name) {
      msg += ` Received function ${actual.name}`;
    } else if (typeof actual === "object" && actual != null) {
      if (actual.constructor?.name) {
        msg += ` Received an instance of ${actual.constructor.name}`;
      }
    }
    return msg;
  }
  var invalid_key_input_default = (actual, ...types2) => {
    return message("Key must be ", actual, ...types2);
  };
  function withAlg(alg, actual, ...types2) {
    return message(`Key for the ${alg} algorithm must be `, actual, ...types2);
  }

  // node_modules/jose/dist/browser/runtime/is_key_like.js
  init_dirname();
  init_buffer2();
  init_process2();
  var is_key_like_default = (key) => {
    if (isCryptoKey(key)) {
      return true;
    }
    return key?.[Symbol.toStringTag] === "KeyObject";
  };
  var types = ["CryptoKey"];

  // node_modules/jose/dist/browser/lib/is_disjoint.js
  init_dirname();
  init_buffer2();
  init_process2();
  var isDisjoint = (...headers) => {
    const sources = headers.filter(Boolean);
    if (sources.length === 0 || sources.length === 1) {
      return true;
    }
    let acc;
    for (const header of sources) {
      const parameters = Object.keys(header);
      if (!acc || acc.size === 0) {
        acc = new Set(parameters);
        continue;
      }
      for (const parameter of parameters) {
        if (acc.has(parameter)) {
          return false;
        }
        acc.add(parameter);
      }
    }
    return true;
  };
  var is_disjoint_default = isDisjoint;

  // node_modules/jose/dist/browser/lib/is_object.js
  init_dirname();
  init_buffer2();
  init_process2();
  function isObjectLike(value) {
    return typeof value === "object" && value !== null;
  }
  function isObject(input) {
    if (!isObjectLike(input) || Object.prototype.toString.call(input) !== "[object Object]") {
      return false;
    }
    if (Object.getPrototypeOf(input) === null) {
      return true;
    }
    let proto = input;
    while (Object.getPrototypeOf(proto) !== null) {
      proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(input) === proto;
  }

  // node_modules/jose/dist/browser/runtime/check_key_length.js
  init_dirname();
  init_buffer2();
  init_process2();
  var check_key_length_default = (alg, key) => {
    if (alg.startsWith("RS") || alg.startsWith("PS")) {
      const { modulusLength } = key.algorithm;
      if (typeof modulusLength !== "number" || modulusLength < 2048) {
        throw new TypeError(`${alg} requires key modulusLength to be 2048 bits or larger`);
      }
    }
  };

  // node_modules/jose/dist/browser/runtime/normalize_key.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/jose/dist/browser/lib/is_jwk.js
  init_dirname();
  init_buffer2();
  init_process2();
  function isJWK(key) {
    return isObject(key) && typeof key.kty === "string";
  }
  function isPrivateJWK(key) {
    return key.kty !== "oct" && typeof key.d === "string";
  }
  function isPublicJWK(key) {
    return key.kty !== "oct" && typeof key.d === "undefined";
  }
  function isSecretJWK(key) {
    return isJWK(key) && key.kty === "oct" && typeof key.k === "string";
  }

  // node_modules/jose/dist/browser/runtime/jwk_to_key.js
  init_dirname();
  init_buffer2();
  init_process2();
  function subtleMapping(jwk) {
    let algorithm;
    let keyUsages;
    switch (jwk.kty) {
      case "RSA": {
        switch (jwk.alg) {
          case "PS256":
          case "PS384":
          case "PS512":
            algorithm = { name: "RSA-PSS", hash: `SHA-${jwk.alg.slice(-3)}` };
            keyUsages = jwk.d ? ["sign"] : ["verify"];
            break;
          case "RS256":
          case "RS384":
          case "RS512":
            algorithm = { name: "RSASSA-PKCS1-v1_5", hash: `SHA-${jwk.alg.slice(-3)}` };
            keyUsages = jwk.d ? ["sign"] : ["verify"];
            break;
          case "RSA-OAEP":
          case "RSA-OAEP-256":
          case "RSA-OAEP-384":
          case "RSA-OAEP-512":
            algorithm = {
              name: "RSA-OAEP",
              hash: `SHA-${parseInt(jwk.alg.slice(-3), 10) || 1}`
            };
            keyUsages = jwk.d ? ["decrypt", "unwrapKey"] : ["encrypt", "wrapKey"];
            break;
          default:
            throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
        }
        break;
      }
      case "EC": {
        switch (jwk.alg) {
          case "ES256":
            algorithm = { name: "ECDSA", namedCurve: "P-256" };
            keyUsages = jwk.d ? ["sign"] : ["verify"];
            break;
          case "ES384":
            algorithm = { name: "ECDSA", namedCurve: "P-384" };
            keyUsages = jwk.d ? ["sign"] : ["verify"];
            break;
          case "ES512":
            algorithm = { name: "ECDSA", namedCurve: "P-521" };
            keyUsages = jwk.d ? ["sign"] : ["verify"];
            break;
          case "ECDH-ES":
          case "ECDH-ES+A128KW":
          case "ECDH-ES+A192KW":
          case "ECDH-ES+A256KW":
            algorithm = { name: "ECDH", namedCurve: jwk.crv };
            keyUsages = jwk.d ? ["deriveBits"] : [];
            break;
          default:
            throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
        }
        break;
      }
      case "OKP": {
        switch (jwk.alg) {
          case "EdDSA":
            algorithm = { name: jwk.crv };
            keyUsages = jwk.d ? ["sign"] : ["verify"];
            break;
          case "ECDH-ES":
          case "ECDH-ES+A128KW":
          case "ECDH-ES+A192KW":
          case "ECDH-ES+A256KW":
            algorithm = { name: jwk.crv };
            keyUsages = jwk.d ? ["deriveBits"] : [];
            break;
          default:
            throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
        }
        break;
      }
      default:
        throw new JOSENotSupported('Invalid or unsupported JWK "kty" (Key Type) Parameter value');
    }
    return { algorithm, keyUsages };
  }
  var parse = async (jwk) => {
    if (!jwk.alg) {
      throw new TypeError('"alg" argument is required when "jwk.alg" is not present');
    }
    const { algorithm, keyUsages } = subtleMapping(jwk);
    const rest = [
      algorithm,
      jwk.ext ?? false,
      jwk.key_ops ?? keyUsages
    ];
    const keyData = { ...jwk };
    delete keyData.alg;
    delete keyData.use;
    return webcrypto_default.subtle.importKey("jwk", keyData, ...rest);
  };
  var jwk_to_key_default = parse;

  // node_modules/jose/dist/browser/runtime/normalize_key.js
  var exportKeyValue = (k) => decode(k);
  var privCache;
  var pubCache;
  var isKeyObject = (key) => {
    return key?.[Symbol.toStringTag] === "KeyObject";
  };
  var importAndCache = async (cache, key, jwk, alg, freeze = false) => {
    let cached = cache.get(key);
    if (cached?.[alg]) {
      return cached[alg];
    }
    const cryptoKey = await jwk_to_key_default({ ...jwk, alg });
    if (freeze)
      Object.freeze(key);
    if (!cached) {
      cache.set(key, { [alg]: cryptoKey });
    } else {
      cached[alg] = cryptoKey;
    }
    return cryptoKey;
  };
  var normalizePublicKey = (key, alg) => {
    if (isKeyObject(key)) {
      let jwk = key.export({ format: "jwk" });
      delete jwk.d;
      delete jwk.dp;
      delete jwk.dq;
      delete jwk.p;
      delete jwk.q;
      delete jwk.qi;
      if (jwk.k) {
        return exportKeyValue(jwk.k);
      }
      pubCache || (pubCache = /* @__PURE__ */ new WeakMap());
      return importAndCache(pubCache, key, jwk, alg);
    }
    if (isJWK(key)) {
      if (key.k)
        return decode(key.k);
      pubCache || (pubCache = /* @__PURE__ */ new WeakMap());
      const cryptoKey = importAndCache(pubCache, key, key, alg, true);
      return cryptoKey;
    }
    return key;
  };
  var normalizePrivateKey = (key, alg) => {
    if (isKeyObject(key)) {
      let jwk = key.export({ format: "jwk" });
      if (jwk.k) {
        return exportKeyValue(jwk.k);
      }
      privCache || (privCache = /* @__PURE__ */ new WeakMap());
      return importAndCache(privCache, key, jwk, alg);
    }
    if (isJWK(key)) {
      if (key.k)
        return decode(key.k);
      privCache || (privCache = /* @__PURE__ */ new WeakMap());
      const cryptoKey = importAndCache(privCache, key, key, alg, true);
      return cryptoKey;
    }
    return key;
  };
  var normalize_key_default = { normalizePublicKey, normalizePrivateKey };

  // node_modules/jose/dist/browser/key/import.js
  init_dirname();
  init_buffer2();
  init_process2();
  async function importJWK(jwk, alg) {
    if (!isObject(jwk)) {
      throw new TypeError("JWK must be an object");
    }
    alg || (alg = jwk.alg);
    switch (jwk.kty) {
      case "oct":
        if (typeof jwk.k !== "string" || !jwk.k) {
          throw new TypeError('missing "k" (Key Value) Parameter value');
        }
        return decode(jwk.k);
      case "RSA":
        if (jwk.oth !== void 0) {
          throw new JOSENotSupported('RSA JWK "oth" (Other Primes Info) Parameter value is not supported');
        }
      case "EC":
      case "OKP":
        return jwk_to_key_default({ ...jwk, alg });
      default:
        throw new JOSENotSupported('Unsupported "kty" (Key Type) Parameter value');
    }
  }

  // node_modules/jose/dist/browser/lib/check_key_type.js
  init_dirname();
  init_buffer2();
  init_process2();
  var tag = (key) => key?.[Symbol.toStringTag];
  var jwkMatchesOp = (alg, key, usage) => {
    if (key.use !== void 0 && key.use !== "sig") {
      throw new TypeError("Invalid key for this operation, when present its use must be sig");
    }
    if (key.key_ops !== void 0 && key.key_ops.includes?.(usage) !== true) {
      throw new TypeError(`Invalid key for this operation, when present its key_ops must include ${usage}`);
    }
    if (key.alg !== void 0 && key.alg !== alg) {
      throw new TypeError(`Invalid key for this operation, when present its alg must be ${alg}`);
    }
    return true;
  };
  var symmetricTypeCheck = (alg, key, usage, allowJwk) => {
    if (key instanceof Uint8Array)
      return;
    if (allowJwk && isJWK(key)) {
      if (isSecretJWK(key) && jwkMatchesOp(alg, key, usage))
        return;
      throw new TypeError(`JSON Web Key for symmetric algorithms must have JWK "kty" (Key Type) equal to "oct" and the JWK "k" (Key Value) present`);
    }
    if (!is_key_like_default(key)) {
      throw new TypeError(withAlg(alg, key, ...types, "Uint8Array", allowJwk ? "JSON Web Key" : null));
    }
    if (key.type !== "secret") {
      throw new TypeError(`${tag(key)} instances for symmetric algorithms must be of type "secret"`);
    }
  };
  var asymmetricTypeCheck = (alg, key, usage, allowJwk) => {
    if (allowJwk && isJWK(key)) {
      switch (usage) {
        case "sign":
          if (isPrivateJWK(key) && jwkMatchesOp(alg, key, usage))
            return;
          throw new TypeError(`JSON Web Key for this operation be a private JWK`);
        case "verify":
          if (isPublicJWK(key) && jwkMatchesOp(alg, key, usage))
            return;
          throw new TypeError(`JSON Web Key for this operation be a public JWK`);
      }
    }
    if (!is_key_like_default(key)) {
      throw new TypeError(withAlg(alg, key, ...types, allowJwk ? "JSON Web Key" : null));
    }
    if (key.type === "secret") {
      throw new TypeError(`${tag(key)} instances for asymmetric algorithms must not be of type "secret"`);
    }
    if (usage === "sign" && key.type === "public") {
      throw new TypeError(`${tag(key)} instances for asymmetric algorithm signing must be of type "private"`);
    }
    if (usage === "decrypt" && key.type === "public") {
      throw new TypeError(`${tag(key)} instances for asymmetric algorithm decryption must be of type "private"`);
    }
    if (key.algorithm && usage === "verify" && key.type === "private") {
      throw new TypeError(`${tag(key)} instances for asymmetric algorithm verifying must be of type "public"`);
    }
    if (key.algorithm && usage === "encrypt" && key.type === "private") {
      throw new TypeError(`${tag(key)} instances for asymmetric algorithm encryption must be of type "public"`);
    }
  };
  function checkKeyType(allowJwk, alg, key, usage) {
    const symmetric = alg.startsWith("HS") || alg === "dir" || alg.startsWith("PBES2") || /^A\d{3}(?:GCM)?KW$/.test(alg);
    if (symmetric) {
      symmetricTypeCheck(alg, key, usage, allowJwk);
    } else {
      asymmetricTypeCheck(alg, key, usage, allowJwk);
    }
  }
  var check_key_type_default = checkKeyType.bind(void 0, false);
  var checkKeyTypeWithJwk = checkKeyType.bind(void 0, true);

  // node_modules/jose/dist/browser/lib/validate_crit.js
  init_dirname();
  init_buffer2();
  init_process2();
  function validateCrit(Err, recognizedDefault, recognizedOption, protectedHeader, joseHeader) {
    if (joseHeader.crit !== void 0 && protectedHeader?.crit === void 0) {
      throw new Err('"crit" (Critical) Header Parameter MUST be integrity protected');
    }
    if (!protectedHeader || protectedHeader.crit === void 0) {
      return /* @__PURE__ */ new Set();
    }
    if (!Array.isArray(protectedHeader.crit) || protectedHeader.crit.length === 0 || protectedHeader.crit.some((input) => typeof input !== "string" || input.length === 0)) {
      throw new Err('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
    }
    let recognized;
    if (recognizedOption !== void 0) {
      recognized = new Map([...Object.entries(recognizedOption), ...recognizedDefault.entries()]);
    } else {
      recognized = recognizedDefault;
    }
    for (const parameter of protectedHeader.crit) {
      if (!recognized.has(parameter)) {
        throw new JOSENotSupported(`Extension Header Parameter "${parameter}" is not recognized`);
      }
      if (joseHeader[parameter] === void 0) {
        throw new Err(`Extension Header Parameter "${parameter}" is missing`);
      }
      if (recognized.get(parameter) && protectedHeader[parameter] === void 0) {
        throw new Err(`Extension Header Parameter "${parameter}" MUST be integrity protected`);
      }
    }
    return new Set(protectedHeader.crit);
  }
  var validate_crit_default = validateCrit;

  // node_modules/jose/dist/browser/lib/validate_algorithms.js
  init_dirname();
  init_buffer2();
  init_process2();
  var validateAlgorithms = (option, algorithms) => {
    if (algorithms !== void 0 && (!Array.isArray(algorithms) || algorithms.some((s) => typeof s !== "string"))) {
      throw new TypeError(`"${option}" option must be an array of strings`);
    }
    if (!algorithms) {
      return void 0;
    }
    return new Set(algorithms);
  };
  var validate_algorithms_default = validateAlgorithms;

  // node_modules/jose/dist/browser/key/export.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/jose/dist/browser/runtime/key_to_jwk.js
  init_dirname();
  init_buffer2();
  init_process2();
  var keyToJWK = async (key) => {
    if (key instanceof Uint8Array) {
      return {
        kty: "oct",
        k: encode(key)
      };
    }
    if (!isCryptoKey(key)) {
      throw new TypeError(invalid_key_input_default(key, ...types, "Uint8Array"));
    }
    if (!key.extractable) {
      throw new TypeError("non-extractable CryptoKey cannot be exported as a JWK");
    }
    const { ext, key_ops, alg, use, ...jwk } = await webcrypto_default.subtle.exportKey("jwk", key);
    return jwk;
  };
  var key_to_jwk_default = keyToJWK;

  // node_modules/jose/dist/browser/key/export.js
  async function exportJWK(key) {
    return key_to_jwk_default(key);
  }

  // node_modules/jose/dist/browser/jws/compact/verify.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/jose/dist/browser/jws/flattened/verify.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/jose/dist/browser/runtime/verify.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/jose/dist/browser/runtime/subtle_dsa.js
  init_dirname();
  init_buffer2();
  init_process2();
  function subtleDsa(alg, algorithm) {
    const hash = `SHA-${alg.slice(-3)}`;
    switch (alg) {
      case "HS256":
      case "HS384":
      case "HS512":
        return { hash, name: "HMAC" };
      case "PS256":
      case "PS384":
      case "PS512":
        return { hash, name: "RSA-PSS", saltLength: alg.slice(-3) >> 3 };
      case "RS256":
      case "RS384":
      case "RS512":
        return { hash, name: "RSASSA-PKCS1-v1_5" };
      case "ES256":
      case "ES384":
      case "ES512":
        return { hash, name: "ECDSA", namedCurve: algorithm.namedCurve };
      case "EdDSA":
        return { name: algorithm.name };
      default:
        throw new JOSENotSupported(`alg ${alg} is not supported either by JOSE or your javascript runtime`);
    }
  }

  // node_modules/jose/dist/browser/runtime/get_sign_verify_key.js
  init_dirname();
  init_buffer2();
  init_process2();
  async function getCryptoKey(alg, key, usage) {
    if (usage === "sign") {
      key = await normalize_key_default.normalizePrivateKey(key, alg);
    }
    if (usage === "verify") {
      key = await normalize_key_default.normalizePublicKey(key, alg);
    }
    if (isCryptoKey(key)) {
      checkSigCryptoKey(key, alg, usage);
      return key;
    }
    if (key instanceof Uint8Array) {
      if (!alg.startsWith("HS")) {
        throw new TypeError(invalid_key_input_default(key, ...types));
      }
      return webcrypto_default.subtle.importKey("raw", key, { hash: `SHA-${alg.slice(-3)}`, name: "HMAC" }, false, [usage]);
    }
    throw new TypeError(invalid_key_input_default(key, ...types, "Uint8Array", "JSON Web Key"));
  }

  // node_modules/jose/dist/browser/runtime/verify.js
  var verify = async (alg, key, signature, data) => {
    const cryptoKey = await getCryptoKey(alg, key, "verify");
    check_key_length_default(alg, cryptoKey);
    const algorithm = subtleDsa(alg, cryptoKey.algorithm);
    try {
      return await webcrypto_default.subtle.verify(algorithm, cryptoKey, signature, data);
    } catch {
      return false;
    }
  };
  var verify_default = verify;

  // node_modules/jose/dist/browser/jws/flattened/verify.js
  async function flattenedVerify(jws, key, options) {
    if (!isObject(jws)) {
      throw new JWSInvalid("Flattened JWS must be an object");
    }
    if (jws.protected === void 0 && jws.header === void 0) {
      throw new JWSInvalid('Flattened JWS must have either of the "protected" or "header" members');
    }
    if (jws.protected !== void 0 && typeof jws.protected !== "string") {
      throw new JWSInvalid("JWS Protected Header incorrect type");
    }
    if (jws.payload === void 0) {
      throw new JWSInvalid("JWS Payload missing");
    }
    if (typeof jws.signature !== "string") {
      throw new JWSInvalid("JWS Signature missing or incorrect type");
    }
    if (jws.header !== void 0 && !isObject(jws.header)) {
      throw new JWSInvalid("JWS Unprotected Header incorrect type");
    }
    let parsedProt = {};
    if (jws.protected) {
      try {
        const protectedHeader = decode(jws.protected);
        parsedProt = JSON.parse(decoder.decode(protectedHeader));
      } catch {
        throw new JWSInvalid("JWS Protected Header is invalid");
      }
    }
    if (!is_disjoint_default(parsedProt, jws.header)) {
      throw new JWSInvalid("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
    }
    const joseHeader = {
      ...parsedProt,
      ...jws.header
    };
    const extensions = validate_crit_default(JWSInvalid, /* @__PURE__ */ new Map([["b64", true]]), options?.crit, parsedProt, joseHeader);
    let b64 = true;
    if (extensions.has("b64")) {
      b64 = parsedProt.b64;
      if (typeof b64 !== "boolean") {
        throw new JWSInvalid('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
      }
    }
    const { alg } = joseHeader;
    if (typeof alg !== "string" || !alg) {
      throw new JWSInvalid('JWS "alg" (Algorithm) Header Parameter missing or invalid');
    }
    const algorithms = options && validate_algorithms_default("algorithms", options.algorithms);
    if (algorithms && !algorithms.has(alg)) {
      throw new JOSEAlgNotAllowed('"alg" (Algorithm) Header Parameter value not allowed');
    }
    if (b64) {
      if (typeof jws.payload !== "string") {
        throw new JWSInvalid("JWS Payload must be a string");
      }
    } else if (typeof jws.payload !== "string" && !(jws.payload instanceof Uint8Array)) {
      throw new JWSInvalid("JWS Payload must be a string or an Uint8Array instance");
    }
    let resolvedKey = false;
    if (typeof key === "function") {
      key = await key(parsedProt, jws);
      resolvedKey = true;
      checkKeyTypeWithJwk(alg, key, "verify");
      if (isJWK(key)) {
        key = await importJWK(key, alg);
      }
    } else {
      checkKeyTypeWithJwk(alg, key, "verify");
    }
    const data = concat(encoder.encode(jws.protected ?? ""), encoder.encode("."), typeof jws.payload === "string" ? encoder.encode(jws.payload) : jws.payload);
    let signature;
    try {
      signature = decode(jws.signature);
    } catch {
      throw new JWSInvalid("Failed to base64url decode the signature");
    }
    const verified = await verify_default(alg, key, signature, data);
    if (!verified) {
      throw new JWSSignatureVerificationFailed();
    }
    let payload;
    if (b64) {
      try {
        payload = decode(jws.payload);
      } catch {
        throw new JWSInvalid("Failed to base64url decode the payload");
      }
    } else if (typeof jws.payload === "string") {
      payload = encoder.encode(jws.payload);
    } else {
      payload = jws.payload;
    }
    const result = { payload };
    if (jws.protected !== void 0) {
      result.protectedHeader = parsedProt;
    }
    if (jws.header !== void 0) {
      result.unprotectedHeader = jws.header;
    }
    if (resolvedKey) {
      return { ...result, key };
    }
    return result;
  }

  // node_modules/jose/dist/browser/jws/compact/verify.js
  async function compactVerify(jws, key, options) {
    if (jws instanceof Uint8Array) {
      jws = decoder.decode(jws);
    }
    if (typeof jws !== "string") {
      throw new JWSInvalid("Compact JWS must be a string or Uint8Array");
    }
    const { 0: protectedHeader, 1: payload, 2: signature, length } = jws.split(".");
    if (length !== 3) {
      throw new JWSInvalid("Invalid Compact JWS");
    }
    const verified = await flattenedVerify({ payload, protected: protectedHeader, signature }, key, options);
    const result = { payload: verified.payload, protectedHeader: verified.protectedHeader };
    if (typeof key === "function") {
      return { ...result, key: verified.key };
    }
    return result;
  }

  // node_modules/jose/dist/browser/jwt/verify.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/jose/dist/browser/lib/jwt_claims_set.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/jose/dist/browser/lib/epoch.js
  init_dirname();
  init_buffer2();
  init_process2();
  var epoch_default = (date) => Math.floor(date.getTime() / 1e3);

  // node_modules/jose/dist/browser/lib/secs.js
  init_dirname();
  init_buffer2();
  init_process2();
  var minute = 60;
  var hour = minute * 60;
  var day = hour * 24;
  var week = day * 7;
  var year = day * 365.25;
  var REGEX = /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)(?: (ago|from now))?$/i;
  var secs_default = (str) => {
    const matched = REGEX.exec(str);
    if (!matched || matched[4] && matched[1]) {
      throw new TypeError("Invalid time period format");
    }
    const value = parseFloat(matched[2]);
    const unit = matched[3].toLowerCase();
    let numericDate;
    switch (unit) {
      case "sec":
      case "secs":
      case "second":
      case "seconds":
      case "s":
        numericDate = Math.round(value);
        break;
      case "minute":
      case "minutes":
      case "min":
      case "mins":
      case "m":
        numericDate = Math.round(value * minute);
        break;
      case "hour":
      case "hours":
      case "hr":
      case "hrs":
      case "h":
        numericDate = Math.round(value * hour);
        break;
      case "day":
      case "days":
      case "d":
        numericDate = Math.round(value * day);
        break;
      case "week":
      case "weeks":
      case "w":
        numericDate = Math.round(value * week);
        break;
      default:
        numericDate = Math.round(value * year);
        break;
    }
    if (matched[1] === "-" || matched[4] === "ago") {
      return -numericDate;
    }
    return numericDate;
  };

  // node_modules/jose/dist/browser/lib/jwt_claims_set.js
  var normalizeTyp = (value) => value.toLowerCase().replace(/^application\//, "");
  var checkAudiencePresence = (audPayload, audOption) => {
    if (typeof audPayload === "string") {
      return audOption.includes(audPayload);
    }
    if (Array.isArray(audPayload)) {
      return audOption.some(Set.prototype.has.bind(new Set(audPayload)));
    }
    return false;
  };
  var jwt_claims_set_default = (protectedHeader, encodedPayload, options = {}) => {
    let payload;
    try {
      payload = JSON.parse(decoder.decode(encodedPayload));
    } catch {
    }
    if (!isObject(payload)) {
      throw new JWTInvalid("JWT Claims Set must be a top-level JSON object");
    }
    const { typ } = options;
    if (typ && (typeof protectedHeader.typ !== "string" || normalizeTyp(protectedHeader.typ) !== normalizeTyp(typ))) {
      throw new JWTClaimValidationFailed('unexpected "typ" JWT header value', payload, "typ", "check_failed");
    }
    const { requiredClaims = [], issuer, subject, audience, maxTokenAge } = options;
    const presenceCheck = [...requiredClaims];
    if (maxTokenAge !== void 0)
      presenceCheck.push("iat");
    if (audience !== void 0)
      presenceCheck.push("aud");
    if (subject !== void 0)
      presenceCheck.push("sub");
    if (issuer !== void 0)
      presenceCheck.push("iss");
    for (const claim of new Set(presenceCheck.reverse())) {
      if (!(claim in payload)) {
        throw new JWTClaimValidationFailed(`missing required "${claim}" claim`, payload, claim, "missing");
      }
    }
    if (issuer && !(Array.isArray(issuer) ? issuer : [issuer]).includes(payload.iss)) {
      throw new JWTClaimValidationFailed('unexpected "iss" claim value', payload, "iss", "check_failed");
    }
    if (subject && payload.sub !== subject) {
      throw new JWTClaimValidationFailed('unexpected "sub" claim value', payload, "sub", "check_failed");
    }
    if (audience && !checkAudiencePresence(payload.aud, typeof audience === "string" ? [audience] : audience)) {
      throw new JWTClaimValidationFailed('unexpected "aud" claim value', payload, "aud", "check_failed");
    }
    let tolerance;
    switch (typeof options.clockTolerance) {
      case "string":
        tolerance = secs_default(options.clockTolerance);
        break;
      case "number":
        tolerance = options.clockTolerance;
        break;
      case "undefined":
        tolerance = 0;
        break;
      default:
        throw new TypeError("Invalid clockTolerance option type");
    }
    const { currentDate } = options;
    const now = epoch_default(currentDate || /* @__PURE__ */ new Date());
    if ((payload.iat !== void 0 || maxTokenAge) && typeof payload.iat !== "number") {
      throw new JWTClaimValidationFailed('"iat" claim must be a number', payload, "iat", "invalid");
    }
    if (payload.nbf !== void 0) {
      if (typeof payload.nbf !== "number") {
        throw new JWTClaimValidationFailed('"nbf" claim must be a number', payload, "nbf", "invalid");
      }
      if (payload.nbf > now + tolerance) {
        throw new JWTClaimValidationFailed('"nbf" claim timestamp check failed', payload, "nbf", "check_failed");
      }
    }
    if (payload.exp !== void 0) {
      if (typeof payload.exp !== "number") {
        throw new JWTClaimValidationFailed('"exp" claim must be a number', payload, "exp", "invalid");
      }
      if (payload.exp <= now - tolerance) {
        throw new JWTExpired('"exp" claim timestamp check failed', payload, "exp", "check_failed");
      }
    }
    if (maxTokenAge) {
      const age = now - payload.iat;
      const max = typeof maxTokenAge === "number" ? maxTokenAge : secs_default(maxTokenAge);
      if (age - tolerance > max) {
        throw new JWTExpired('"iat" claim timestamp check failed (too far in the past)', payload, "iat", "check_failed");
      }
      if (age < 0 - tolerance) {
        throw new JWTClaimValidationFailed('"iat" claim timestamp check failed (it should be in the past)', payload, "iat", "check_failed");
      }
    }
    return payload;
  };

  // node_modules/jose/dist/browser/jwt/verify.js
  async function jwtVerify(jwt, key, options) {
    const verified = await compactVerify(jwt, key, options);
    if (verified.protectedHeader.crit?.includes("b64") && verified.protectedHeader.b64 === false) {
      throw new JWTInvalid("JWTs MUST NOT use unencoded payload");
    }
    const payload = jwt_claims_set_default(verified.protectedHeader, verified.payload, options);
    const result = { payload, protectedHeader: verified.protectedHeader };
    if (typeof key === "function") {
      return { ...result, key: verified.key };
    }
    return result;
  }

  // node_modules/jose/dist/browser/jws/compact/sign.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/jose/dist/browser/jws/flattened/sign.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/jose/dist/browser/runtime/sign.js
  init_dirname();
  init_buffer2();
  init_process2();
  var sign = async (alg, key, data) => {
    const cryptoKey = await getCryptoKey(alg, key, "sign");
    check_key_length_default(alg, cryptoKey);
    const signature = await webcrypto_default.subtle.sign(subtleDsa(alg, cryptoKey.algorithm), cryptoKey, data);
    return new Uint8Array(signature);
  };
  var sign_default = sign;

  // node_modules/jose/dist/browser/jws/flattened/sign.js
  var FlattenedSign = class {
    constructor(payload) {
      if (!(payload instanceof Uint8Array)) {
        throw new TypeError("payload must be an instance of Uint8Array");
      }
      this._payload = payload;
    }
    setProtectedHeader(protectedHeader) {
      if (this._protectedHeader) {
        throw new TypeError("setProtectedHeader can only be called once");
      }
      this._protectedHeader = protectedHeader;
      return this;
    }
    setUnprotectedHeader(unprotectedHeader) {
      if (this._unprotectedHeader) {
        throw new TypeError("setUnprotectedHeader can only be called once");
      }
      this._unprotectedHeader = unprotectedHeader;
      return this;
    }
    async sign(key, options) {
      if (!this._protectedHeader && !this._unprotectedHeader) {
        throw new JWSInvalid("either setProtectedHeader or setUnprotectedHeader must be called before #sign()");
      }
      if (!is_disjoint_default(this._protectedHeader, this._unprotectedHeader)) {
        throw new JWSInvalid("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
      }
      const joseHeader = {
        ...this._protectedHeader,
        ...this._unprotectedHeader
      };
      const extensions = validate_crit_default(JWSInvalid, /* @__PURE__ */ new Map([["b64", true]]), options?.crit, this._protectedHeader, joseHeader);
      let b64 = true;
      if (extensions.has("b64")) {
        b64 = this._protectedHeader.b64;
        if (typeof b64 !== "boolean") {
          throw new JWSInvalid('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
        }
      }
      const { alg } = joseHeader;
      if (typeof alg !== "string" || !alg) {
        throw new JWSInvalid('JWS "alg" (Algorithm) Header Parameter missing or invalid');
      }
      checkKeyTypeWithJwk(alg, key, "sign");
      let payload = this._payload;
      if (b64) {
        payload = encoder.encode(encode(payload));
      }
      let protectedHeader;
      if (this._protectedHeader) {
        protectedHeader = encoder.encode(encode(JSON.stringify(this._protectedHeader)));
      } else {
        protectedHeader = encoder.encode("");
      }
      const data = concat(protectedHeader, encoder.encode("."), payload);
      const signature = await sign_default(alg, key, data);
      const jws = {
        signature: encode(signature),
        payload: ""
      };
      if (b64) {
        jws.payload = decoder.decode(payload);
      }
      if (this._unprotectedHeader) {
        jws.header = this._unprotectedHeader;
      }
      if (this._protectedHeader) {
        jws.protected = decoder.decode(protectedHeader);
      }
      return jws;
    }
  };

  // node_modules/jose/dist/browser/jws/compact/sign.js
  var CompactSign = class {
    constructor(payload) {
      this._flattened = new FlattenedSign(payload);
    }
    setProtectedHeader(protectedHeader) {
      this._flattened.setProtectedHeader(protectedHeader);
      return this;
    }
    async sign(key, options) {
      const jws = await this._flattened.sign(key, options);
      if (jws.payload === void 0) {
        throw new TypeError("use the flattened module for creating JWS with b64: false");
      }
      return `${jws.protected}.${jws.payload}.${jws.signature}`;
    }
  };

  // node_modules/jose/dist/browser/jwt/sign.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/jose/dist/browser/jwt/produce.js
  init_dirname();
  init_buffer2();
  init_process2();
  function validateInput(label, input) {
    if (!Number.isFinite(input)) {
      throw new TypeError(`Invalid ${label} input`);
    }
    return input;
  }
  var ProduceJWT = class {
    constructor(payload = {}) {
      if (!isObject(payload)) {
        throw new TypeError("JWT Claims Set MUST be an object");
      }
      this._payload = payload;
    }
    setIssuer(issuer) {
      this._payload = { ...this._payload, iss: issuer };
      return this;
    }
    setSubject(subject) {
      this._payload = { ...this._payload, sub: subject };
      return this;
    }
    setAudience(audience) {
      this._payload = { ...this._payload, aud: audience };
      return this;
    }
    setJti(jwtId) {
      this._payload = { ...this._payload, jti: jwtId };
      return this;
    }
    setNotBefore(input) {
      if (typeof input === "number") {
        this._payload = { ...this._payload, nbf: validateInput("setNotBefore", input) };
      } else if (input instanceof Date) {
        this._payload = { ...this._payload, nbf: validateInput("setNotBefore", epoch_default(input)) };
      } else {
        this._payload = { ...this._payload, nbf: epoch_default(/* @__PURE__ */ new Date()) + secs_default(input) };
      }
      return this;
    }
    setExpirationTime(input) {
      if (typeof input === "number") {
        this._payload = { ...this._payload, exp: validateInput("setExpirationTime", input) };
      } else if (input instanceof Date) {
        this._payload = { ...this._payload, exp: validateInput("setExpirationTime", epoch_default(input)) };
      } else {
        this._payload = { ...this._payload, exp: epoch_default(/* @__PURE__ */ new Date()) + secs_default(input) };
      }
      return this;
    }
    setIssuedAt(input) {
      if (typeof input === "undefined") {
        this._payload = { ...this._payload, iat: epoch_default(/* @__PURE__ */ new Date()) };
      } else if (input instanceof Date) {
        this._payload = { ...this._payload, iat: validateInput("setIssuedAt", epoch_default(input)) };
      } else if (typeof input === "string") {
        this._payload = {
          ...this._payload,
          iat: validateInput("setIssuedAt", epoch_default(/* @__PURE__ */ new Date()) + secs_default(input))
        };
      } else {
        this._payload = { ...this._payload, iat: validateInput("setIssuedAt", input) };
      }
      return this;
    }
  };

  // node_modules/jose/dist/browser/jwt/sign.js
  var SignJWT = class extends ProduceJWT {
    setProtectedHeader(protectedHeader) {
      this._protectedHeader = protectedHeader;
      return this;
    }
    async sign(key, options) {
      const sig = new CompactSign(encoder.encode(JSON.stringify(this._payload)));
      sig.setProtectedHeader(this._protectedHeader);
      if (Array.isArray(this._protectedHeader?.crit) && this._protectedHeader.crit.includes("b64") && this._protectedHeader.b64 === false) {
        throw new JWTInvalid("JWTs MUST NOT use unencoded payload");
      }
      return sig.sign(key, options);
    }
  };

  // node_modules/jose/dist/browser/jwks/local.js
  init_dirname();
  init_buffer2();
  init_process2();
  function getKtyFromAlg(alg) {
    switch (typeof alg === "string" && alg.slice(0, 2)) {
      case "RS":
      case "PS":
        return "RSA";
      case "ES":
        return "EC";
      case "Ed":
        return "OKP";
      default:
        throw new JOSENotSupported('Unsupported "alg" value for a JSON Web Key Set');
    }
  }
  function isJWKSLike(jwks) {
    return jwks && typeof jwks === "object" && Array.isArray(jwks.keys) && jwks.keys.every(isJWKLike);
  }
  function isJWKLike(key) {
    return isObject(key);
  }
  function clone(obj) {
    if (typeof structuredClone === "function") {
      return structuredClone(obj);
    }
    return JSON.parse(JSON.stringify(obj));
  }
  var LocalJWKSet = class {
    constructor(jwks) {
      this._cached = /* @__PURE__ */ new WeakMap();
      if (!isJWKSLike(jwks)) {
        throw new JWKSInvalid("JSON Web Key Set malformed");
      }
      this._jwks = clone(jwks);
    }
    async getKey(protectedHeader, token) {
      const { alg, kid } = { ...protectedHeader, ...token?.header };
      const kty = getKtyFromAlg(alg);
      const candidates = this._jwks.keys.filter((jwk2) => {
        let candidate = kty === jwk2.kty;
        if (candidate && typeof kid === "string") {
          candidate = kid === jwk2.kid;
        }
        if (candidate && typeof jwk2.alg === "string") {
          candidate = alg === jwk2.alg;
        }
        if (candidate && typeof jwk2.use === "string") {
          candidate = jwk2.use === "sig";
        }
        if (candidate && Array.isArray(jwk2.key_ops)) {
          candidate = jwk2.key_ops.includes("verify");
        }
        if (candidate && alg === "EdDSA") {
          candidate = jwk2.crv === "Ed25519" || jwk2.crv === "Ed448";
        }
        if (candidate) {
          switch (alg) {
            case "ES256":
              candidate = jwk2.crv === "P-256";
              break;
            case "ES256K":
              candidate = jwk2.crv === "secp256k1";
              break;
            case "ES384":
              candidate = jwk2.crv === "P-384";
              break;
            case "ES512":
              candidate = jwk2.crv === "P-521";
              break;
          }
        }
        return candidate;
      });
      const { 0: jwk, length } = candidates;
      if (length === 0) {
        throw new JWKSNoMatchingKey();
      }
      if (length !== 1) {
        const error2 = new JWKSMultipleMatchingKeys();
        const { _cached } = this;
        error2[Symbol.asyncIterator] = async function* () {
          for (const jwk2 of candidates) {
            try {
              yield await importWithAlgCache(_cached, jwk2, alg);
            } catch {
            }
          }
        };
        throw error2;
      }
      return importWithAlgCache(this._cached, jwk, alg);
    }
  };
  async function importWithAlgCache(cache, jwk, alg) {
    const cached = cache.get(jwk) || cache.set(jwk, {}).get(jwk);
    if (cached[alg] === void 0) {
      const key = await importJWK({ ...jwk, ext: true }, alg);
      if (key instanceof Uint8Array || key.type !== "public") {
        throw new JWKSInvalid("JSON Web Key Set members must be public keys");
      }
      cached[alg] = key;
    }
    return cached[alg];
  }
  function createLocalJWKSet(jwks) {
    const set = new LocalJWKSet(jwks);
    const localJWKSet = async (protectedHeader, token) => set.getKey(protectedHeader, token);
    Object.defineProperties(localJWKSet, {
      jwks: {
        value: () => clone(set._jwks),
        enumerable: true,
        configurable: false,
        writable: false
      }
    });
    return localJWKSet;
  }

  // node_modules/jose/dist/browser/jwks/remote.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/jose/dist/browser/runtime/fetch_jwks.js
  init_dirname();
  init_buffer2();
  init_process2();
  var fetchJwks = async (url, timeout, options) => {
    let controller;
    let id;
    let timedOut = false;
    if (typeof AbortController === "function") {
      controller = new AbortController();
      id = setTimeout(() => {
        timedOut = true;
        controller.abort();
      }, timeout);
    }
    const response = await fetch(url.href, {
      signal: controller ? controller.signal : void 0,
      redirect: "manual",
      headers: options.headers
    }).catch((err) => {
      if (timedOut)
        throw new JWKSTimeout();
      throw err;
    });
    if (id !== void 0)
      clearTimeout(id);
    if (response.status !== 200) {
      throw new JOSEError("Expected 200 OK from the JSON Web Key Set HTTP response");
    }
    try {
      return await response.json();
    } catch {
      throw new JOSEError("Failed to parse the JSON Web Key Set HTTP response as JSON");
    }
  };
  var fetch_jwks_default = fetchJwks;

  // node_modules/jose/dist/browser/jwks/remote.js
  function isCloudflareWorkers() {
    return typeof WebSocketPair !== "undefined" || typeof navigator !== "undefined" && navigator.userAgent === "Cloudflare-Workers" || typeof EdgeRuntime !== "undefined" && EdgeRuntime === "vercel";
  }
  var USER_AGENT;
  if (typeof navigator === "undefined" || !navigator.userAgent?.startsWith?.("Mozilla/5.0 ")) {
    const NAME = "jose";
    const VERSION = "v5.9.6";
    USER_AGENT = `${NAME}/${VERSION}`;
  }
  var jwksCache = Symbol();
  function isFreshJwksCache(input, cacheMaxAge) {
    if (typeof input !== "object" || input === null) {
      return false;
    }
    if (!("uat" in input) || typeof input.uat !== "number" || Date.now() - input.uat >= cacheMaxAge) {
      return false;
    }
    if (!("jwks" in input) || !isObject(input.jwks) || !Array.isArray(input.jwks.keys) || !Array.prototype.every.call(input.jwks.keys, isObject)) {
      return false;
    }
    return true;
  }
  var RemoteJWKSet = class {
    constructor(url, options) {
      if (!(url instanceof URL)) {
        throw new TypeError("url must be an instance of URL");
      }
      this._url = new URL(url.href);
      this._options = { agent: options?.agent, headers: options?.headers };
      this._timeoutDuration = typeof options?.timeoutDuration === "number" ? options?.timeoutDuration : 5e3;
      this._cooldownDuration = typeof options?.cooldownDuration === "number" ? options?.cooldownDuration : 3e4;
      this._cacheMaxAge = typeof options?.cacheMaxAge === "number" ? options?.cacheMaxAge : 6e5;
      if (options?.[jwksCache] !== void 0) {
        this._cache = options?.[jwksCache];
        if (isFreshJwksCache(options?.[jwksCache], this._cacheMaxAge)) {
          this._jwksTimestamp = this._cache.uat;
          this._local = createLocalJWKSet(this._cache.jwks);
        }
      }
    }
    coolingDown() {
      return typeof this._jwksTimestamp === "number" ? Date.now() < this._jwksTimestamp + this._cooldownDuration : false;
    }
    fresh() {
      return typeof this._jwksTimestamp === "number" ? Date.now() < this._jwksTimestamp + this._cacheMaxAge : false;
    }
    async getKey(protectedHeader, token) {
      if (!this._local || !this.fresh()) {
        await this.reload();
      }
      try {
        return await this._local(protectedHeader, token);
      } catch (err) {
        if (err instanceof JWKSNoMatchingKey) {
          if (this.coolingDown() === false) {
            await this.reload();
            return this._local(protectedHeader, token);
          }
        }
        throw err;
      }
    }
    async reload() {
      if (this._pendingFetch && isCloudflareWorkers()) {
        this._pendingFetch = void 0;
      }
      const headers = new Headers(this._options.headers);
      if (USER_AGENT && !headers.has("User-Agent")) {
        headers.set("User-Agent", USER_AGENT);
        this._options.headers = Object.fromEntries(headers.entries());
      }
      this._pendingFetch || (this._pendingFetch = fetch_jwks_default(this._url, this._timeoutDuration, this._options).then((json) => {
        this._local = createLocalJWKSet(json);
        if (this._cache) {
          this._cache.uat = Date.now();
          this._cache.jwks = json;
        }
        this._jwksTimestamp = Date.now();
        this._pendingFetch = void 0;
      }).catch((err) => {
        this._pendingFetch = void 0;
        throw err;
      }));
      await this._pendingFetch;
    }
  };
  function createRemoteJWKSet(url, options) {
    const set = new RemoteJWKSet(url, options);
    const remoteJWKSet = async (protectedHeader, token) => set.getKey(protectedHeader, token);
    Object.defineProperties(remoteJWKSet, {
      coolingDown: {
        get: () => set.coolingDown(),
        enumerable: true,
        configurable: false
      },
      fresh: {
        get: () => set.fresh(),
        enumerable: true,
        configurable: false
      },
      reload: {
        value: () => set.reload(),
        enumerable: true,
        configurable: false,
        writable: false
      },
      reloading: {
        get: () => !!set._pendingFetch,
        enumerable: true,
        configurable: false
      },
      jwks: {
        value: () => set._local?.jwks(),
        enumerable: true,
        configurable: false,
        writable: false
      }
    });
    return remoteJWKSet;
  }

  // node_modules/jose/dist/browser/key/generate_key_pair.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/jose/dist/browser/runtime/generate.js
  init_dirname();
  init_buffer2();
  init_process2();
  function getModulusLengthOption(options) {
    const modulusLength = options?.modulusLength ?? 2048;
    if (typeof modulusLength !== "number" || modulusLength < 2048) {
      throw new JOSENotSupported("Invalid or unsupported modulusLength option provided, 2048 bits or larger keys must be used");
    }
    return modulusLength;
  }
  async function generateKeyPair(alg, options) {
    let algorithm;
    let keyUsages;
    switch (alg) {
      case "PS256":
      case "PS384":
      case "PS512":
        algorithm = {
          name: "RSA-PSS",
          hash: `SHA-${alg.slice(-3)}`,
          publicExponent: new Uint8Array([1, 0, 1]),
          modulusLength: getModulusLengthOption(options)
        };
        keyUsages = ["sign", "verify"];
        break;
      case "RS256":
      case "RS384":
      case "RS512":
        algorithm = {
          name: "RSASSA-PKCS1-v1_5",
          hash: `SHA-${alg.slice(-3)}`,
          publicExponent: new Uint8Array([1, 0, 1]),
          modulusLength: getModulusLengthOption(options)
        };
        keyUsages = ["sign", "verify"];
        break;
      case "RSA-OAEP":
      case "RSA-OAEP-256":
      case "RSA-OAEP-384":
      case "RSA-OAEP-512":
        algorithm = {
          name: "RSA-OAEP",
          hash: `SHA-${parseInt(alg.slice(-3), 10) || 1}`,
          publicExponent: new Uint8Array([1, 0, 1]),
          modulusLength: getModulusLengthOption(options)
        };
        keyUsages = ["decrypt", "unwrapKey", "encrypt", "wrapKey"];
        break;
      case "ES256":
        algorithm = { name: "ECDSA", namedCurve: "P-256" };
        keyUsages = ["sign", "verify"];
        break;
      case "ES384":
        algorithm = { name: "ECDSA", namedCurve: "P-384" };
        keyUsages = ["sign", "verify"];
        break;
      case "ES512":
        algorithm = { name: "ECDSA", namedCurve: "P-521" };
        keyUsages = ["sign", "verify"];
        break;
      case "EdDSA": {
        keyUsages = ["sign", "verify"];
        const crv = options?.crv ?? "Ed25519";
        switch (crv) {
          case "Ed25519":
          case "Ed448":
            algorithm = { name: crv };
            break;
          default:
            throw new JOSENotSupported("Invalid or unsupported crv option provided");
        }
        break;
      }
      case "ECDH-ES":
      case "ECDH-ES+A128KW":
      case "ECDH-ES+A192KW":
      case "ECDH-ES+A256KW": {
        keyUsages = ["deriveKey", "deriveBits"];
        const crv = options?.crv ?? "P-256";
        switch (crv) {
          case "P-256":
          case "P-384":
          case "P-521": {
            algorithm = { name: "ECDH", namedCurve: crv };
            break;
          }
          case "X25519":
          case "X448":
            algorithm = { name: crv };
            break;
          default:
            throw new JOSENotSupported("Invalid or unsupported crv option provided, supported values are P-256, P-384, P-521, X25519, and X448");
        }
        break;
      }
      default:
        throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
    }
    return webcrypto_default.subtle.generateKey(algorithm, options?.extractable ?? false, keyUsages);
  }

  // node_modules/jose/dist/browser/key/generate_key_pair.js
  async function generateKeyPair2(alg, options) {
    return generateKeyPair(alg, options);
  }

  // node_modules/uuid/dist/esm-browser/index.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/uuid/dist/esm-browser/stringify.js
  init_dirname();
  init_buffer2();
  init_process2();
  var byteToHex = [];
  for (i = 0; i < 256; ++i) {
    byteToHex.push((i + 256).toString(16).slice(1));
  }
  var i;
  function unsafeStringify(arr, offset = 0) {
    return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
  }

  // node_modules/uuid/dist/esm-browser/rng.js
  init_dirname();
  init_buffer2();
  init_process2();
  var getRandomValues;
  var rnds8 = new Uint8Array(16);
  function rng() {
    if (!getRandomValues) {
      getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
      if (!getRandomValues) {
        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      }
    }
    return getRandomValues(rnds8);
  }

  // node_modules/uuid/dist/esm-browser/v4.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/uuid/dist/esm-browser/native.js
  init_dirname();
  init_buffer2();
  init_process2();
  var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
  var native_default = {
    randomUUID
  };

  // node_modules/uuid/dist/esm-browser/v4.js
  function v4(options, buf, offset) {
    if (native_default.randomUUID && !buf && !options) {
      return native_default.randomUUID();
    }
    options = options || {};
    var rnds = options.random || (options.rng || rng)();
    rnds[6] = rnds[6] & 15 | 64;
    rnds[8] = rnds[8] & 63 | 128;
    if (buf) {
      offset = offset || 0;
      for (var i = 0; i < 16; ++i) {
        buf[offset + i] = rnds[i];
      }
      return buf;
    }
    return unsafeStringify(rnds);
  }
  var v4_default = v4;

  // node_modules/@inrupt/solid-client-authn-core/dist/index.mjs
  var SOLID_CLIENT_AUTHN_KEY_PREFIX = "solidClientAuthn:";
  var PREFERRED_SIGNING_ALG = ["ES256", "RS256"];
  var EVENTS = {
    // Note that an `error` events MUST be listened to: https://nodejs.org/dist/latest-v16.x/docs/api/events.html#error-events.
    ERROR: "error",
    LOGIN: "login",
    LOGOUT: "logout",
    NEW_REFRESH_TOKEN: "newRefreshToken",
    SESSION_EXPIRED: "sessionExpired",
    SESSION_EXTENDED: "sessionExtended",
    SESSION_RESTORED: "sessionRestore",
    TIMEOUT_SET: "timeoutSet"
  };
  var REFRESH_BEFORE_EXPIRATION_SECONDS = 5;
  var SCOPE_OPENID = "openid";
  var SCOPE_OFFLINE = "offline_access";
  var SCOPE_WEBID = "webid";
  var DEFAULT_SCOPES = [SCOPE_OPENID, SCOPE_OFFLINE, SCOPE_WEBID].join(" ");
  var AggregateHandler = class {
    constructor(handleables) {
      this.handleables = handleables;
      this.handleables = handleables;
    }
    /**
     * Helper function that will asynchronously determine the proper handler to use. If multiple
     * handlers can handle, it will choose the first one in the list
     * @param params Paramerters to feed to the handler
     */
    async getProperHandler(params) {
      const canHandleList = await Promise.all(this.handleables.map((handleable) => handleable.canHandle(...params)));
      for (let i = 0; i < canHandleList.length; i += 1) {
        if (canHandleList[i]) {
          return this.handleables[i];
        }
      }
      return null;
    }
    async canHandle(...params) {
      return await this.getProperHandler(params) !== null;
    }
    async handle(...params) {
      const handler = await this.getProperHandler(params);
      if (handler) {
        return handler.handle(...params);
      }
      throw new Error(`[${this.constructor.name}] cannot find a suitable handler for: ${params.map((param) => {
        try {
          return JSON.stringify(param);
        } catch (err) {
          return param.toString();
        }
      }).join(", ")}`);
    }
  };
  async function getWebidFromTokenPayload(idToken, jwksIri, issuerIri, clientId) {
    let payload;
    let clientIdInPayload;
    try {
      const { payload: verifiedPayload } = await jwtVerify(idToken, createRemoteJWKSet(new URL(jwksIri)), {
        issuer: issuerIri,
        audience: clientId
      });
      payload = verifiedPayload;
    } catch (e) {
      throw new Error(`Token verification failed: ${e.stack}`);
    }
    if (typeof payload.azp === "string") {
      clientIdInPayload = payload.azp;
    }
    if (typeof payload.webid === "string") {
      return {
        webId: payload.webid,
        clientId: clientIdInPayload
      };
    }
    if (typeof payload.sub !== "string") {
      throw new Error(`The token ${JSON.stringify(payload)} is invalid: it has no 'webid' claim and no 'sub' claim.`);
    }
    try {
      new URL(payload.sub);
      return {
        webId: payload.sub,
        clientId: clientIdInPayload
      };
    } catch (e) {
      throw new Error(`The token has no 'webid' claim, and its 'sub' claim of [${payload.sub}] is invalid as a URL - error [${e}].`);
    }
  }
  function isValidRedirectUrl(redirectUrl) {
    try {
      const urlObject = new URL(redirectUrl);
      const noReservedQuery = !urlObject.searchParams.has("code") && !urlObject.searchParams.has("state");
      const noHash = urlObject.hash === "";
      return noReservedQuery && noHash;
    } catch (e) {
      return false;
    }
  }
  function removeOpenIdParams(redirectUrl) {
    const cleanedUpUrl = new URL(redirectUrl);
    cleanedUpUrl.searchParams.delete("state");
    cleanedUpUrl.searchParams.delete("code");
    cleanedUpUrl.searchParams.delete("error");
    cleanedUpUrl.searchParams.delete("error_description");
    cleanedUpUrl.searchParams.delete("iss");
    return cleanedUpUrl;
  }
  function booleanWithFallback(value, fallback) {
    if (typeof value === "boolean") {
      return Boolean(value);
    }
    return Boolean(fallback);
  }
  var AuthorizationCodeWithPkceOidcHandlerBase = class {
    constructor(storageUtility, redirector) {
      this.storageUtility = storageUtility;
      this.redirector = redirector;
      this.parametersGuard = (oidcLoginOptions) => {
        return oidcLoginOptions.issuerConfiguration.grantTypesSupported !== void 0 && oidcLoginOptions.issuerConfiguration.grantTypesSupported.indexOf("authorization_code") > -1 && oidcLoginOptions.redirectUrl !== void 0;
      };
      this.storageUtility = storageUtility;
      this.redirector = redirector;
    }
    async canHandle(oidcLoginOptions) {
      return this.parametersGuard(oidcLoginOptions);
    }
    async handleRedirect({ oidcLoginOptions, state, codeVerifier, targetUrl }) {
      if (!this.parametersGuard(oidcLoginOptions)) {
        throw new Error("The authorization code grant requires a redirectUrl.");
      }
      await Promise.all([
        // We use the OAuth 'state' value (which should be crypto-random) as
        // the key in our storage to store our actual SessionID. We do this
        // 'cos we'll need to lookup our session information again when the
        // browser is redirected back to us (i.e. the OAuth client
        // application) from the Authorization Server.
        // We don't want to use our session ID as the OAuth 'state' value, as
        // that session ID can be any developer-specified value, and therefore
        // may not be appropriate (since the OAuth 'state' value should really
        // be an unguessable crypto-random value).
        this.storageUtility.setForUser(state, {
          sessionId: oidcLoginOptions.sessionId
        }),
        // Store our login-process state using the session ID as the key.
        // Strictly speaking, this indirection from our OAuth state value to
        // our session ID is unnecessary, but it provides a slightly cleaner
        // separation of concerns.
        this.storageUtility.setForUser(oidcLoginOptions.sessionId, {
          codeVerifier,
          issuer: oidcLoginOptions.issuer.toString(),
          // The redirect URL is read after redirect, so it must be stored now.
          redirectUrl: oidcLoginOptions.redirectUrl,
          dpop: Boolean(oidcLoginOptions.dpop).toString(),
          keepAlive: booleanWithFallback(oidcLoginOptions.keepAlive, true).toString()
        })
      ]);
      this.redirector.redirect(targetUrl, {
        handleRedirect: oidcLoginOptions.handleRedirect
      });
      return void 0;
    }
  };
  var GeneralLogoutHandler = class {
    constructor(sessionInfoManager) {
      this.sessionInfoManager = sessionInfoManager;
      this.sessionInfoManager = sessionInfoManager;
    }
    async canHandle() {
      return true;
    }
    async handle(userId) {
      await this.sessionInfoManager.clear(userId);
    }
  };
  var IRpLogoutHandler = class {
    constructor(redirector) {
      this.redirector = redirector;
      this.redirector = redirector;
    }
    async canHandle(userId, options) {
      return (options === null || options === void 0 ? void 0 : options.logoutType) === "idp";
    }
    async handle(userId, options) {
      if ((options === null || options === void 0 ? void 0 : options.logoutType) !== "idp") {
        throw new Error("Attempting to call idp logout handler to perform app logout");
      }
      if (options.toLogoutUrl === void 0) {
        throw new Error("Cannot perform IDP logout. Did you log in using the OIDC authentication flow?");
      }
      this.redirector.redirect(options.toLogoutUrl(options), {
        handleRedirect: options.handleRedirect
      });
    }
  };
  var IWaterfallLogoutHandler = class {
    constructor(sessionInfoManager, redirector) {
      this.handlers = [
        new GeneralLogoutHandler(sessionInfoManager),
        new IRpLogoutHandler(redirector)
      ];
    }
    async canHandle() {
      return true;
    }
    async handle(userId, options) {
      for (const handler of this.handlers) {
        if (await handler.canHandle(userId, options))
          await handler.handle(userId, options);
      }
    }
  };
  function getUnauthenticatedSession() {
    return {
      isLoggedIn: false,
      sessionId: v4_default(),
      fetch: (...args) => fetch(...args)
    };
  }
  async function clear(sessionId, storage) {
    await Promise.all([
      storage.deleteAllUserData(sessionId, { secure: false }),
      storage.deleteAllUserData(sessionId, { secure: true })
    ]);
  }
  var SessionInfoManagerBase = class {
    constructor(storageUtility) {
      this.storageUtility = storageUtility;
      this.storageUtility = storageUtility;
    }
    update(_sessionId, _options) {
      throw new Error("Not Implemented");
    }
    get(_) {
      throw new Error("Not implemented");
    }
    // eslint-disable-next-line class-methods-use-this
    async getAll() {
      throw new Error("Not implemented");
    }
    /**
     * This function removes all session-related information from storage.
     * @param sessionId the session identifier
     * @param storage the storage where session info is stored
     * @hidden
     */
    async clear(sessionId) {
      return clear(sessionId, this.storageUtility);
    }
    /**
     * Registers a new session, so that its ID can be retrieved.
     * @param sessionId
     */
    async register(_sessionId) {
      throw new Error("Not implemented");
    }
    /**
     * Returns all the registered session IDs. Differs from getAll, which also
     * returns additional session information.
     */
    async getRegisteredSessionIdAll() {
      throw new Error("Not implemented");
    }
    /**
     * Deletes all information about all sessions, including their registrations.
     */
    async clearAll() {
      throw new Error("Not implemented");
    }
  };
  function getEndSessionUrl({ endSessionEndpoint, idTokenHint, postLogoutRedirectUri, state }) {
    const url = new URL(endSessionEndpoint);
    if (idTokenHint !== void 0)
      url.searchParams.append("id_token_hint", idTokenHint);
    if (postLogoutRedirectUri !== void 0) {
      url.searchParams.append("post_logout_redirect_uri", postLogoutRedirectUri);
      if (state !== void 0)
        url.searchParams.append("state", state);
    }
    return url.toString();
  }
  function maybeBuildRpInitiatedLogout({ endSessionEndpoint, idTokenHint }) {
    if (endSessionEndpoint === void 0)
      return void 0;
    return function logout3({ state, postLogoutUrl }) {
      return getEndSessionUrl({
        endSessionEndpoint,
        idTokenHint,
        state,
        postLogoutRedirectUri: postLogoutUrl
      });
    };
  }
  function isSupportedTokenType(token) {
    return typeof token === "string" && ["DPoP", "Bearer"].includes(token);
  }
  function isValidUrl(url) {
    try {
      new URL(url);
      return true;
    } catch (_a) {
      return false;
    }
  }
  function determineSigningAlg(supported, preferred) {
    var _a;
    return (_a = preferred.find((signingAlg) => {
      return supported.includes(signingAlg);
    })) !== null && _a !== void 0 ? _a : null;
  }
  function isStaticClient(options) {
    return options.clientId !== void 0 && !isValidUrl(options.clientId);
  }
  function isSolidOidcClient(options, issuerConfig) {
    return issuerConfig.scopesSupported.includes("webid") && options.clientId !== void 0 && isValidUrl(options.clientId);
  }
  function isKnownClientType(clientType) {
    return typeof clientType === "string" && ["dynamic", "static", "solid-oidc"].includes(clientType);
  }
  async function handleRegistration(options, issuerConfig, storageUtility, clientRegistrar) {
    let clientInfo;
    if (isSolidOidcClient(options, issuerConfig)) {
      clientInfo = {
        clientId: options.clientId,
        clientName: options.clientName,
        clientType: "solid-oidc"
      };
    } else if (isStaticClient(options)) {
      clientInfo = {
        clientId: options.clientId,
        clientSecret: options.clientSecret,
        clientName: options.clientName,
        clientType: "static"
      };
    } else {
      return clientRegistrar.getClient({
        sessionId: options.sessionId,
        clientName: options.clientName,
        redirectUrl: options.redirectUrl
      }, issuerConfig);
    }
    const infoToSave = {
      clientId: clientInfo.clientId,
      clientType: clientInfo.clientType
    };
    if (clientInfo.clientType === "static") {
      infoToSave.clientSecret = clientInfo.clientSecret;
    }
    if (clientInfo.clientName) {
      infoToSave.clientName = clientInfo.clientName;
    }
    await storageUtility.setForUser(options.sessionId, infoToSave);
    return clientInfo;
  }
  var boundFetch = (request, init2) => fetch(request, init2);
  var ClientAuthentication = class {
    constructor(loginHandler, redirectHandler, logoutHandler, sessionInfoManager, issuerConfigFetcher) {
      this.loginHandler = loginHandler;
      this.redirectHandler = redirectHandler;
      this.logoutHandler = logoutHandler;
      this.sessionInfoManager = sessionInfoManager;
      this.issuerConfigFetcher = issuerConfigFetcher;
      this.fetch = boundFetch;
      this.logout = async (sessionId, options) => {
        await this.logoutHandler.handle(sessionId, (options === null || options === void 0 ? void 0 : options.logoutType) === "idp" ? {
          ...options,
          toLogoutUrl: this.boundLogout
        } : options);
        this.fetch = boundFetch;
        delete this.boundLogout;
      };
      this.getSessionInfo = async (sessionId) => {
        return this.sessionInfoManager.get(sessionId);
      };
      this.getAllSessionInfo = async () => {
        return this.sessionInfoManager.getAll();
      };
      this.loginHandler = loginHandler;
      this.redirectHandler = redirectHandler;
      this.logoutHandler = logoutHandler;
      this.sessionInfoManager = sessionInfoManager;
      this.issuerConfigFetcher = issuerConfigFetcher;
    }
  };
  async function loadOidcContextFromStorage(sessionId, storageUtility, configFetcher) {
    try {
      const [issuerIri, codeVerifier, storedRedirectIri, dpop, keepAlive] = await Promise.all([
        storageUtility.getForUser(sessionId, "issuer", {
          errorIfNull: true
        }),
        storageUtility.getForUser(sessionId, "codeVerifier"),
        storageUtility.getForUser(sessionId, "redirectUrl"),
        storageUtility.getForUser(sessionId, "dpop", { errorIfNull: true }),
        storageUtility.getForUser(sessionId, "keepAlive")
      ]);
      await storageUtility.deleteForUser(sessionId, "codeVerifier");
      const issuerConfig = await configFetcher.fetchConfig(issuerIri);
      return {
        codeVerifier,
        redirectUrl: storedRedirectIri,
        issuerConfig,
        dpop: dpop === "true",
        // Default keepAlive to true if not found in storage.
        keepAlive: typeof keepAlive === "string" ? keepAlive === "true" : true
      };
    } catch (e) {
      throw new Error(`Failed to retrieve OIDC context from storage associated with session [${sessionId}]: ${e}`);
    }
  }
  async function saveSessionInfoToStorage(storageUtility, sessionId, webId, clientId, isLoggedIn3, refreshToken, secure, dpopKey) {
    if (refreshToken !== void 0) {
      await storageUtility.setForUser(sessionId, { refreshToken }, { secure });
    }
    if (webId !== void 0) {
      await storageUtility.setForUser(sessionId, { webId }, { secure });
    }
    if (clientId !== void 0) {
      await storageUtility.setForUser(sessionId, { clientId }, { secure });
    }
    if (isLoggedIn3 !== void 0) {
      await storageUtility.setForUser(sessionId, { isLoggedIn: isLoggedIn3 }, { secure });
    }
    if (dpopKey !== void 0) {
      await storageUtility.setForUser(sessionId, {
        publicKey: JSON.stringify(dpopKey.publicKey),
        privateKey: JSON.stringify(await exportJWK(dpopKey.privateKey))
      }, { secure });
    }
  }
  var StorageUtility = class {
    constructor(secureStorage, insecureStorage) {
      this.secureStorage = secureStorage;
      this.insecureStorage = insecureStorage;
      this.secureStorage = secureStorage;
      this.insecureStorage = insecureStorage;
    }
    getKey(userId) {
      return `solidClientAuthenticationUser:${userId}`;
    }
    async getUserData(userId, secure) {
      const stored = await (secure ? this.secureStorage : this.insecureStorage).get(this.getKey(userId));
      if (stored === void 0) {
        return {};
      }
      try {
        return JSON.parse(stored);
      } catch (err) {
        throw new Error(`Data for user [${userId}] in [${secure ? "secure" : "unsecure"}] storage is corrupted - expected valid JSON, but got: ${stored}`);
      }
    }
    async setUserData(userId, data, secure) {
      await (secure ? this.secureStorage : this.insecureStorage).set(this.getKey(userId), JSON.stringify(data));
    }
    async get(key, options) {
      const value = await ((options === null || options === void 0 ? void 0 : options.secure) ? this.secureStorage : this.insecureStorage).get(key);
      if (value === void 0 && (options === null || options === void 0 ? void 0 : options.errorIfNull)) {
        throw new Error(`[${key}] is not stored`);
      }
      return value;
    }
    async set(key, value, options) {
      return ((options === null || options === void 0 ? void 0 : options.secure) ? this.secureStorage : this.insecureStorage).set(key, value);
    }
    async delete(key, options) {
      return ((options === null || options === void 0 ? void 0 : options.secure) ? this.secureStorage : this.insecureStorage).delete(key);
    }
    async getForUser(userId, key, options) {
      const userData = await this.getUserData(userId, options === null || options === void 0 ? void 0 : options.secure);
      let value;
      if (!userData || !userData[key]) {
        value = void 0;
      }
      value = userData[key];
      if (value === void 0 && (options === null || options === void 0 ? void 0 : options.errorIfNull)) {
        throw new Error(`Field [${key}] for user [${userId}] is not stored`);
      }
      return value || void 0;
    }
    async setForUser(userId, values, options) {
      let userData;
      try {
        userData = await this.getUserData(userId, options === null || options === void 0 ? void 0 : options.secure);
      } catch (_a) {
        userData = {};
      }
      await this.setUserData(userId, { ...userData, ...values }, options === null || options === void 0 ? void 0 : options.secure);
    }
    async deleteForUser(userId, key, options) {
      const userData = await this.getUserData(userId, options === null || options === void 0 ? void 0 : options.secure);
      delete userData[key];
      await this.setUserData(userId, userData, options === null || options === void 0 ? void 0 : options.secure);
    }
    async deleteAllUserData(userId, options) {
      await ((options === null || options === void 0 ? void 0 : options.secure) ? this.secureStorage : this.insecureStorage).delete(this.getKey(userId));
    }
  };
  var InMemoryStorage = class {
    constructor() {
      this.map = {};
    }
    async get(key) {
      return this.map[key] || void 0;
    }
    async set(key, value) {
      this.map[key] = value;
    }
    async delete(key) {
      delete this.map[key];
    }
  };
  var ConfigurationError = class extends Error {
    /* istanbul ignore next */
    constructor(message2) {
      super(message2);
    }
  };
  var InvalidResponseError = class extends Error {
    /* istanbul ignore next */
    constructor(missingFields) {
      super(`Invalid response from OIDC provider: missing fields ${missingFields}`);
      this.missingFields = missingFields;
    }
  };
  var OidcProviderError = class extends Error {
    /* istanbul ignore next */
    constructor(message2, error2, errorDescription) {
      super(message2);
      this.error = error2;
      this.errorDescription = errorDescription;
    }
  };
  function normalizeHTU(audience) {
    const audienceUrl = new URL(audience);
    return new URL(audienceUrl.pathname, audienceUrl.origin).toString();
  }
  async function createDpopHeader(audience, method, dpopKey) {
    return new SignJWT({
      htu: normalizeHTU(audience),
      htm: method.toUpperCase(),
      jti: v4_default()
    }).setProtectedHeader({
      alg: PREFERRED_SIGNING_ALG[0],
      jwk: dpopKey.publicKey,
      typ: "dpop+jwt"
    }).setIssuedAt().sign(dpopKey.privateKey, {});
  }
  async function generateDpopKeyPair() {
    const { privateKey, publicKey } = await generateKeyPair2(PREFERRED_SIGNING_ALG[0]);
    const dpopKeyPair = {
      privateKey,
      publicKey: await exportJWK(publicKey)
    };
    [dpopKeyPair.publicKey.alg] = PREFERRED_SIGNING_ALG;
    return dpopKeyPair;
  }
  var DEFAULT_EXPIRATION_TIME_SECONDS = 600;
  function isExpectedAuthError(statusCode) {
    return [401, 403].includes(statusCode);
  }
  async function buildDpopFetchOptions(targetUrl, authToken, dpopKey, defaultOptions) {
    var _a;
    const headers = new Headers(defaultOptions === null || defaultOptions === void 0 ? void 0 : defaultOptions.headers);
    headers.set("Authorization", `DPoP ${authToken}`);
    headers.set("DPoP", await createDpopHeader(targetUrl, (_a = defaultOptions === null || defaultOptions === void 0 ? void 0 : defaultOptions.method) !== null && _a !== void 0 ? _a : "get", dpopKey));
    return {
      ...defaultOptions,
      headers
    };
  }
  async function buildAuthenticatedHeaders(targetUrl, authToken, dpopKey, defaultOptions) {
    if (dpopKey !== void 0) {
      return buildDpopFetchOptions(targetUrl, authToken, dpopKey, defaultOptions);
    }
    const headers = new Headers(defaultOptions === null || defaultOptions === void 0 ? void 0 : defaultOptions.headers);
    headers.set("Authorization", `Bearer ${authToken}`);
    return {
      ...defaultOptions,
      headers
    };
  }
  async function makeAuthenticatedRequest(accessToken, url, defaultRequestInit, dpopKey) {
    return fetch(url, await buildAuthenticatedHeaders(url.toString(), accessToken, dpopKey, defaultRequestInit));
  }
  async function refreshAccessToken(refreshOptions, dpopKey, eventEmitter) {
    var _a;
    const tokenSet = await refreshOptions.tokenRefresher.refresh(refreshOptions.sessionId, refreshOptions.refreshToken, dpopKey);
    eventEmitter === null || eventEmitter === void 0 ? void 0 : eventEmitter.emit(EVENTS.SESSION_EXTENDED, (_a = tokenSet.expiresIn) !== null && _a !== void 0 ? _a : DEFAULT_EXPIRATION_TIME_SECONDS);
    if (typeof tokenSet.refreshToken === "string") {
      eventEmitter === null || eventEmitter === void 0 ? void 0 : eventEmitter.emit(EVENTS.NEW_REFRESH_TOKEN, tokenSet.refreshToken);
    }
    return {
      accessToken: tokenSet.accessToken,
      refreshToken: tokenSet.refreshToken,
      expiresIn: tokenSet.expiresIn
    };
  }
  var computeRefreshDelay = (expiresIn) => {
    if (expiresIn !== void 0) {
      return expiresIn - REFRESH_BEFORE_EXPIRATION_SECONDS > 0 ? (
        // We want to refresh the token 5 seconds before they actually expire.
        expiresIn - REFRESH_BEFORE_EXPIRATION_SECONDS
      ) : expiresIn;
    }
    return DEFAULT_EXPIRATION_TIME_SECONDS;
  };
  async function buildAuthenticatedFetch(accessToken, options) {
    var _a;
    let currentAccessToken = accessToken;
    let latestTimeout;
    const currentRefreshOptions = options === null || options === void 0 ? void 0 : options.refreshOptions;
    if (currentRefreshOptions !== void 0) {
      const proactivelyRefreshToken = async () => {
        var _a2, _b, _c, _d;
        try {
          const { accessToken: refreshedAccessToken, refreshToken, expiresIn } = await refreshAccessToken(
            currentRefreshOptions,
            // If currentRefreshOptions is defined, options is necessarily defined too.
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            options.dpopKey,
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            options.eventEmitter
          );
          currentAccessToken = refreshedAccessToken;
          if (refreshToken !== void 0) {
            currentRefreshOptions.refreshToken = refreshToken;
          }
          clearTimeout(latestTimeout);
          latestTimeout = setTimeout(proactivelyRefreshToken, computeRefreshDelay(expiresIn) * 1e3);
          (_a2 = options.eventEmitter) === null || _a2 === void 0 ? void 0 : _a2.emit(EVENTS.TIMEOUT_SET, latestTimeout);
        } catch (e) {
          if (e instanceof OidcProviderError) {
            (_b = options === null || options === void 0 ? void 0 : options.eventEmitter) === null || _b === void 0 ? void 0 : _b.emit(EVENTS.ERROR, e.error, e.errorDescription);
            (_c = options === null || options === void 0 ? void 0 : options.eventEmitter) === null || _c === void 0 ? void 0 : _c.emit(EVENTS.SESSION_EXPIRED);
          }
          if (e instanceof InvalidResponseError && e.missingFields.includes("access_token")) {
            (_d = options === null || options === void 0 ? void 0 : options.eventEmitter) === null || _d === void 0 ? void 0 : _d.emit(EVENTS.SESSION_EXPIRED);
          }
        }
      };
      latestTimeout = setTimeout(
        proactivelyRefreshToken,
        // If currentRefreshOptions is defined, options is necessarily defined too.
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        computeRefreshDelay(options.expiresIn) * 1e3
      );
      (_a = options.eventEmitter) === null || _a === void 0 ? void 0 : _a.emit(EVENTS.TIMEOUT_SET, latestTimeout);
    } else if (options !== void 0 && options.eventEmitter !== void 0) {
      const expirationTimeout = setTimeout(() => {
        options.eventEmitter.emit(EVENTS.SESSION_EXPIRED);
      }, computeRefreshDelay(options.expiresIn) * 1e3);
      options.eventEmitter.emit(EVENTS.TIMEOUT_SET, expirationTimeout);
    }
    return async (url, requestInit) => {
      let response = await makeAuthenticatedRequest(currentAccessToken, url, requestInit, options === null || options === void 0 ? void 0 : options.dpopKey);
      const failedButNotExpectedAuthError = !response.ok && !isExpectedAuthError(response.status);
      if (response.ok || failedButNotExpectedAuthError) {
        return response;
      }
      const hasBeenRedirected = response.url !== url;
      if (hasBeenRedirected && (options === null || options === void 0 ? void 0 : options.dpopKey) !== void 0) {
        response = await makeAuthenticatedRequest(
          currentAccessToken,
          // Replace the original target IRI (`url`) by the redirection target
          response.url,
          requestInit,
          options.dpopKey
        );
      }
      return response;
    };
  }

  // node_modules/@inrupt/solid-client-authn-browser/dist/index.mjs
  init_events();

  // node_modules/@inrupt/oidc-client-ext/dist/index.es.js
  init_dirname();
  init_buffer2();
  init_process2();
  var import_oidc_client = __toESM(require_oidc_client_min());
  var import_oidc_client2 = __toESM(require_oidc_client_min());
  function processErrorResponse(responseBody, options) {
    var _a, _b, _c, _d;
    if (responseBody.error === "invalid_redirect_uri") {
      throw new Error(`Dynamic client registration failed: the provided redirect uri [${(_a = options.redirectUrl) === null || _a === void 0 ? void 0 : _a.toString()}] is invalid - ${(_b = responseBody.error_description) !== null && _b !== void 0 ? _b : ""}`);
    }
    if (responseBody.error === "invalid_client_metadata") {
      throw new Error(`Dynamic client registration failed: the provided client metadata ${JSON.stringify(options)} is invalid - ${(_c = responseBody.error_description) !== null && _c !== void 0 ? _c : ""}`);
    }
    throw new Error(`Dynamic client registration failed: ${responseBody.error} - ${(_d = responseBody.error_description) !== null && _d !== void 0 ? _d : ""}`);
  }
  function validateRegistrationResponse(responseBody, options) {
    if (responseBody.client_id === void 0) {
      throw new Error(`Dynamic client registration failed: no client_id has been found on ${JSON.stringify(responseBody)}`);
    }
    if (options.redirectUrl && (responseBody.redirect_uris === void 0 || responseBody.redirect_uris[0] !== options.redirectUrl.toString())) {
      throw new Error(`Dynamic client registration failed: the returned redirect URIs ${JSON.stringify(responseBody.redirect_uris)} don't match the provided ${JSON.stringify([
        options.redirectUrl.toString()
      ])}`);
    }
  }
  async function registerClient(options, issuerConfig) {
    var _a;
    if (!issuerConfig.registrationEndpoint) {
      throw new Error("Dynamic Registration could not be completed because the issuer has no registration endpoint.");
    }
    if (!Array.isArray(issuerConfig.idTokenSigningAlgValuesSupported)) {
      throw new Error("The OIDC issuer discovery profile is missing the 'id_token_signing_alg_values_supported' value, which is mandatory.");
    }
    const signingAlg = determineSigningAlg(issuerConfig.idTokenSigningAlgValuesSupported, PREFERRED_SIGNING_ALG);
    const config = {
      /* eslint-disable camelcase */
      client_name: options.clientName,
      application_type: "web",
      redirect_uris: [(_a = options.redirectUrl) === null || _a === void 0 ? void 0 : _a.toString()],
      subject_type: "public",
      token_endpoint_auth_method: "client_secret_basic",
      id_token_signed_response_alg: signingAlg,
      grant_types: ["authorization_code", "refresh_token"]
      /* eslint-enable camelcase */
    };
    const headers = {
      "Content-Type": "application/json"
    };
    const registerResponse = await fetch(issuerConfig.registrationEndpoint.toString(), {
      method: "POST",
      headers,
      body: JSON.stringify(config)
    });
    if (registerResponse.ok) {
      const responseBody = await registerResponse.json();
      validateRegistrationResponse(responseBody, options);
      return {
        clientId: responseBody.client_id,
        clientSecret: responseBody.client_secret,
        idTokenSignedResponseAlg: responseBody.id_token_signed_response_alg,
        clientType: "dynamic"
      };
    }
    if (registerResponse.status === 400) {
      processErrorResponse(await registerResponse.json(), options);
    }
    throw new Error(`Dynamic client registration failed: the server returned ${registerResponse.status} ${registerResponse.statusText} - ${await registerResponse.text()}`);
  }
  function hasError(value) {
    return value.error !== void 0 && typeof value.error === "string";
  }
  function hasErrorDescription(value) {
    return value.error_description !== void 0 && typeof value.error_description === "string";
  }
  function hasErrorUri(value) {
    return value.error_uri !== void 0 && typeof value.error_uri === "string";
  }
  function hasAccessToken(value) {
    return value.access_token !== void 0 && typeof value.access_token === "string";
  }
  function hasIdToken(value) {
    return value.id_token !== void 0 && typeof value.id_token === "string";
  }
  function hasRefreshToken(value) {
    return value.refresh_token !== void 0 && typeof value.refresh_token === "string";
  }
  function hasTokenType(value) {
    return value.token_type !== void 0 && typeof value.token_type === "string";
  }
  function hasExpiresIn(value) {
    return value.expires_in === void 0 || typeof value.expires_in === "number";
  }
  function validatePreconditions(issuer, data) {
    if (data.grantType && (!issuer.grantTypesSupported || !issuer.grantTypesSupported.includes(data.grantType))) {
      throw new Error(`The issuer [${issuer.issuer}] does not support the [${data.grantType}] grant`);
    }
    if (!issuer.tokenEndpoint) {
      throw new Error(`This issuer [${issuer.issuer}] does not have a token endpoint`);
    }
  }
  function validateTokenEndpointResponse(tokenResponse, dpop) {
    if (hasError(tokenResponse)) {
      throw new OidcProviderError(`Token endpoint returned error [${tokenResponse.error}]${hasErrorDescription(tokenResponse) ? `: ${tokenResponse.error_description}` : ""}${hasErrorUri(tokenResponse) ? ` (see ${tokenResponse.error_uri})` : ""}`, tokenResponse.error, hasErrorDescription(tokenResponse) ? tokenResponse.error_description : void 0);
    }
    if (!hasAccessToken(tokenResponse)) {
      throw new InvalidResponseError(["access_token"]);
    }
    if (!hasIdToken(tokenResponse)) {
      throw new InvalidResponseError(["id_token"]);
    }
    if (!hasTokenType(tokenResponse)) {
      throw new InvalidResponseError(["token_type"]);
    }
    if (!hasExpiresIn(tokenResponse)) {
      throw new InvalidResponseError(["expires_in"]);
    }
    if (!dpop && tokenResponse.token_type.toLowerCase() !== "bearer") {
      throw new Error(`Invalid token endpoint response: requested a [Bearer] token, but got a 'token_type' value of [${tokenResponse.token_type}].`);
    }
    return tokenResponse;
  }
  async function getTokens(issuer, client, data, dpop) {
    validatePreconditions(issuer, data);
    const headers = {
      "content-type": "application/x-www-form-urlencoded"
    };
    let dpopKey;
    if (dpop) {
      dpopKey = await generateDpopKeyPair();
      headers.DPoP = await createDpopHeader(issuer.tokenEndpoint, "POST", dpopKey);
    }
    if (client.clientSecret) {
      headers.Authorization = `Basic ${btoa(`${client.clientId}:${client.clientSecret}`)}`;
    }
    const requestBody = {
      /* eslint-disable camelcase */
      grant_type: data.grantType,
      redirect_uri: data.redirectUrl,
      code: data.code,
      code_verifier: data.codeVerifier,
      client_id: client.clientId
      /* eslint-enable camelcase */
    };
    const tokenRequestInit = {
      method: "POST",
      headers,
      body: new URLSearchParams(requestBody).toString()
    };
    const rawTokenResponse = await fetch(issuer.tokenEndpoint, tokenRequestInit);
    const jsonTokenResponse = await rawTokenResponse.json();
    const tokenResponse = validateTokenEndpointResponse(jsonTokenResponse, dpop);
    const { webId, clientId } = await getWebidFromTokenPayload(tokenResponse.id_token, issuer.jwksUri, issuer.issuer, client.clientId);
    return {
      accessToken: tokenResponse.access_token,
      idToken: tokenResponse.id_token,
      refreshToken: hasRefreshToken(tokenResponse) ? tokenResponse.refresh_token : void 0,
      webId,
      clientId,
      dpopKey,
      expiresIn: tokenResponse.expires_in
    };
  }
  var isValidUrl2 = (url) => {
    try {
      new URL(url);
      return true;
    } catch (_a) {
      return false;
    }
  };
  async function refresh(refreshToken, issuer, client, dpopKey) {
    if (client.clientId === void 0) {
      throw new Error("No client ID available when trying to refresh the access token.");
    }
    const requestBody = {
      grant_type: "refresh_token",
      refresh_token: refreshToken,
      scope: DEFAULT_SCOPES
    };
    let dpopHeader = {};
    if (dpopKey !== void 0) {
      dpopHeader = {
        DPoP: await createDpopHeader(issuer.tokenEndpoint, "POST", dpopKey)
      };
    }
    let authHeader = {};
    if (client.clientSecret !== void 0) {
      authHeader = {
        // We assume that client_secret_basic is the client authentication method.
        // TODO: Get the authentication method from the IClient configuration object.
        Authorization: `Basic ${btoa(`${client.clientId}:${client.clientSecret}`)}`
      };
    } else if (isValidUrl2(client.clientId)) {
      requestBody.client_id = client.clientId;
    }
    const rawResponse = await fetch(issuer.tokenEndpoint, {
      method: "POST",
      body: new URLSearchParams(requestBody).toString(),
      headers: {
        ...dpopHeader,
        ...authHeader,
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
    let response;
    try {
      response = await rawResponse.json();
    } catch (e) {
      throw new Error(`The token endpoint of issuer ${issuer.issuer} returned a malformed response.`);
    }
    const validatedResponse = validateTokenEndpointResponse(response, dpopKey !== void 0);
    const { webId } = await getWebidFromTokenPayload(validatedResponse.id_token, issuer.jwksUri, issuer.issuer, client.clientId);
    return {
      accessToken: validatedResponse.access_token,
      idToken: validatedResponse.id_token,
      refreshToken: typeof validatedResponse.refresh_token === "string" ? validatedResponse.refresh_token : void 0,
      webId,
      dpopKey,
      expiresIn: validatedResponse.expires_in
    };
  }
  function normalizeCallbackUrl(redirectUrl) {
    const cleanedUrl = removeOpenIdParams(redirectUrl);
    cleanedUrl.hash = "";
    if (
      // The trailing slash is present in the original redirect URL
      redirectUrl.includes(`${cleanedUrl.origin}/`)
    ) {
      return cleanedUrl.href;
    }
    return `${cleanedUrl.origin}${cleanedUrl.href.substring(
      // Adds 1 to the origin length to remove the trailing slash
      cleanedUrl.origin.length + 1
    )}`;
  }
  async function clearOidcPersistentStorage() {
    const client = new import_oidc_client.OidcClient({
      // TODO: We should look at the various interfaces being used for storage,
      //  i.e. between oidc-client-js (WebStorageStoreState), localStorage
      //  (which has an interface Storage), and our own proprietary interface
      //  IStorage - i.e. we should really just be using the browser Web Storage
      //  API, e.g. "stateStore: window.localStorage,".
      // We are instantiating a new instance here, so the only value we need to
      // explicitly provide is the response mode (default otherwise will look
      // for a hash '#' fragment!).
      // eslint-disable-next-line camelcase
      response_mode: "query"
    });
    await client.clearStaleState(new import_oidc_client.WebStorageStateStore({}));
    const myStorage = window.localStorage;
    const itemsToRemove = [];
    for (let i = 0; i <= myStorage.length; i += 1) {
      const key = myStorage.key(i);
      if (key && (key.match(/^oidc\..+$/) || key.match(/^solidClientAuthenticationUser:.+$/))) {
        itemsToRemove.push(key);
      }
    }
    itemsToRemove.forEach((key) => myStorage.removeItem(key));
  }

  // node_modules/@inrupt/solid-client-authn-browser/dist/index.mjs
  var StorageUtilityBrowser = class extends StorageUtility {
    constructor(secureStorage, insecureStorage) {
      super(secureStorage, insecureStorage);
    }
  };
  var ClientAuthentication2 = class extends ClientAuthentication {
    constructor() {
      super(...arguments);
      this.login = async (options, eventEmitter) => {
        var _a, _b;
        await this.sessionInfoManager.clear(options.sessionId);
        const redirectUrl = (_a = options.redirectUrl) !== null && _a !== void 0 ? _a : normalizeCallbackUrl(window.location.href);
        if (!isValidRedirectUrl(redirectUrl)) {
          throw new Error(`${redirectUrl} is not a valid redirect URL, it is either a malformed IRI, includes a hash fragment, or reserved query parameters ('code' or 'state').`);
        }
        await this.loginHandler.handle({
          ...options,
          redirectUrl,
          // If no clientName is provided, the clientId may be used instead.
          clientName: (_b = options.clientName) !== null && _b !== void 0 ? _b : options.clientId,
          eventEmitter
        });
      };
      this.validateCurrentSession = async (currentSessionId) => {
        const sessionInfo = await this.sessionInfoManager.get(currentSessionId);
        if (sessionInfo === void 0 || sessionInfo.clientAppId === void 0 || sessionInfo.issuer === void 0) {
          return null;
        }
        return sessionInfo;
      };
      this.handleIncomingRedirect = async (url, eventEmitter) => {
        try {
          const redirectInfo = await this.redirectHandler.handle(url, eventEmitter, void 0);
          this.fetch = redirectInfo.fetch.bind(window);
          this.boundLogout = redirectInfo.getLogoutUrl;
          await this.cleanUrlAfterRedirect(url);
          return {
            isLoggedIn: redirectInfo.isLoggedIn,
            webId: redirectInfo.webId,
            sessionId: redirectInfo.sessionId,
            expirationDate: redirectInfo.expirationDate,
            clientAppId: redirectInfo.clientAppId
          };
        } catch (err) {
          await this.cleanUrlAfterRedirect(url);
          eventEmitter.emit(EVENTS.ERROR, "redirect", err);
          return void 0;
        }
      };
    }
    async cleanUrlAfterRedirect(url) {
      const cleanedUpUrl = removeOpenIdParams(url).href;
      window.history.replaceState(null, "", cleanedUpUrl);
      while (window.location.href !== cleanedUpUrl) {
        await new Promise((resolve) => {
          setTimeout(() => resolve(), 1);
        });
      }
    }
  };
  function hasIssuer(options) {
    return typeof options.oidcIssuer === "string";
  }
  function hasRedirectUrl(options) {
    return typeof options.redirectUrl === "string";
  }
  var OidcLoginHandler = class {
    constructor(storageUtility, oidcHandler, issuerConfigFetcher, clientRegistrar) {
      this.storageUtility = storageUtility;
      this.oidcHandler = oidcHandler;
      this.issuerConfigFetcher = issuerConfigFetcher;
      this.clientRegistrar = clientRegistrar;
      this.storageUtility = storageUtility;
      this.oidcHandler = oidcHandler;
      this.issuerConfigFetcher = issuerConfigFetcher;
      this.clientRegistrar = clientRegistrar;
    }
    async canHandle(options) {
      return hasIssuer(options) && hasRedirectUrl(options);
    }
    async handle(options) {
      if (!hasIssuer(options)) {
        throw new ConfigurationError(`OidcLoginHandler requires an OIDC issuer: missing property 'oidcIssuer' in ${JSON.stringify(options)}`);
      }
      if (!hasRedirectUrl(options)) {
        throw new ConfigurationError(`OidcLoginHandler requires a redirect URL: missing property 'redirectUrl' in ${JSON.stringify(options)}`);
      }
      const issuerConfig = await this.issuerConfigFetcher.fetchConfig(options.oidcIssuer);
      const clientRegistration = await handleRegistration(options, issuerConfig, this.storageUtility, this.clientRegistrar);
      const OidcOptions = {
        // Note that here, the issuer is not the one from the received options, but
        // from the issuer's config. This enforces the canonical URL is used and stored,
        // which is also the one present in the ID token, so storing a technically
        // valid, but different issuer URL (e.g. using a trailing slash or not) now
        // could prevent from validating the ID token later.
        issuer: issuerConfig.issuer,
        // TODO: differentiate if DPoP should be true
        dpop: options.tokenType.toLowerCase() === "dpop",
        ...options,
        issuerConfiguration: issuerConfig,
        client: clientRegistration
      };
      return this.oidcHandler.handle(OidcOptions);
    }
  };
  var AuthorizationCodeWithPkceOidcHandler = class extends AuthorizationCodeWithPkceOidcHandlerBase {
    async handle(oidcLoginOptions) {
      var _a;
      const oidcOptions = {
        authority: oidcLoginOptions.issuer.toString(),
        client_id: oidcLoginOptions.client.clientId,
        client_secret: oidcLoginOptions.client.clientSecret,
        redirect_uri: oidcLoginOptions.redirectUrl,
        response_type: "code",
        scope: DEFAULT_SCOPES,
        filterProtocolClaims: true,
        // The userinfo endpoint on NSS fails, so disable this for now
        // Note that in Solid, information should be retrieved from the
        // profile referenced by the WebId.
        loadUserInfo: false,
        code_verifier: true,
        prompt: (_a = oidcLoginOptions.prompt) !== null && _a !== void 0 ? _a : "consent"
      };
      const oidcClientLibrary = new import_oidc_client2.OidcClient(oidcOptions);
      try {
        const signingRequest = await oidcClientLibrary.createSigninRequest();
        return await this.handleRedirect({
          oidcLoginOptions,
          // eslint-disable-next-line no-underscore-dangle
          state: signingRequest.state._id,
          // eslint-disable-next-line no-underscore-dangle
          codeVerifier: signingRequest.state._code_verifier,
          targetUrl: signingRequest.url.toString()
        });
      } catch (err) {
        console.error(err);
      }
      return void 0;
    }
  };
  var WELL_KNOWN_OPENID_CONFIG = ".well-known/openid-configuration";
  var issuerConfigKeyMap = {
    issuer: {
      toKey: "issuer",
      convertToUrl: true
    },
    authorization_endpoint: {
      toKey: "authorizationEndpoint",
      convertToUrl: true
    },
    token_endpoint: {
      toKey: "tokenEndpoint",
      convertToUrl: true
    },
    userinfo_endpoint: {
      toKey: "userinfoEndpoint",
      convertToUrl: true
    },
    jwks_uri: {
      toKey: "jwksUri",
      convertToUrl: true
    },
    registration_endpoint: {
      toKey: "registrationEndpoint",
      convertToUrl: true
    },
    end_session_endpoint: {
      toKey: "endSessionEndpoint",
      convertToUrl: true
    },
    scopes_supported: { toKey: "scopesSupported" },
    response_types_supported: { toKey: "responseTypesSupported" },
    response_modes_supported: { toKey: "responseModesSupported" },
    grant_types_supported: { toKey: "grantTypesSupported" },
    acr_values_supported: { toKey: "acrValuesSupported" },
    subject_types_supported: { toKey: "subjectTypesSupported" },
    id_token_signing_alg_values_supported: {
      toKey: "idTokenSigningAlgValuesSupported"
    },
    id_token_encryption_alg_values_supported: {
      toKey: "idTokenEncryptionAlgValuesSupported"
    },
    id_token_encryption_enc_values_supported: {
      toKey: "idTokenEncryptionEncValuesSupported"
    },
    userinfo_signing_alg_values_supported: {
      toKey: "userinfoSigningAlgValuesSupported"
    },
    userinfo_encryption_alg_values_supported: {
      toKey: "userinfoEncryptionAlgValuesSupported"
    },
    userinfo_encryption_enc_values_supported: {
      toKey: "userinfoEncryptionEncValuesSupported"
    },
    request_object_signing_alg_values_supported: {
      toKey: "requestObjectSigningAlgValuesSupported"
    },
    request_object_encryption_alg_values_supported: {
      toKey: "requestObjectEncryptionAlgValuesSupported"
    },
    request_object_encryption_enc_values_supported: {
      toKey: "requestObjectEncryptionEncValuesSupported"
    },
    token_endpoint_auth_methods_supported: {
      toKey: "tokenEndpointAuthMethodsSupported"
    },
    token_endpoint_auth_signing_alg_values_supported: {
      toKey: "tokenEndpointAuthSigningAlgValuesSupported"
    },
    display_values_supported: { toKey: "displayValuesSupported" },
    claim_types_supported: { toKey: "claimTypesSupported" },
    claims_supported: { toKey: "claimsSupported" },
    service_documentation: { toKey: "serviceDocumentation" },
    claims_locales_supported: { toKey: "claimsLocalesSupported" },
    ui_locales_supported: { toKey: "uiLocalesSupported" },
    claims_parameter_supported: { toKey: "claimsParameterSupported" },
    request_parameter_supported: { toKey: "requestParameterSupported" },
    request_uri_parameter_supported: { toKey: "requestUriParameterSupported" },
    require_request_uri_registration: { toKey: "requireRequestUriRegistration" },
    op_policy_uri: {
      toKey: "opPolicyUri",
      convertToUrl: true
    },
    op_tos_uri: {
      toKey: "opTosUri",
      convertToUrl: true
    }
  };
  function processConfig(config) {
    const parsedConfig = {};
    Object.keys(config).forEach((key) => {
      if (issuerConfigKeyMap[key]) {
        parsedConfig[issuerConfigKeyMap[key].toKey] = config[key];
      }
    });
    if (!Array.isArray(parsedConfig.scopesSupported)) {
      parsedConfig.scopesSupported = ["openid"];
    }
    return parsedConfig;
  }
  var IssuerConfigFetcher = class _IssuerConfigFetcher {
    constructor(storageUtility) {
      this.storageUtility = storageUtility;
      this.storageUtility = storageUtility;
    }
    // This method needs no state (so can be static), and can be exposed to allow
    // callers to know where this implementation puts state it needs.
    static getLocalStorageKey(issuer) {
      return `issuerConfig:${issuer}`;
    }
    async fetchConfig(issuer) {
      let issuerConfig;
      const openIdConfigUrl = new URL(
        WELL_KNOWN_OPENID_CONFIG,
        // Make sure to append a slash at issuer URL, so that the .well-known URL
        // includes the full issuer path. See https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfig.
        issuer.endsWith("/") ? issuer : `${issuer}/`
      ).href;
      const issuerConfigRequestBody = await fetch(openIdConfigUrl);
      try {
        issuerConfig = processConfig(await issuerConfigRequestBody.json());
      } catch (err) {
        throw new ConfigurationError(`[${issuer.toString()}] has an invalid configuration: ${err.message}`);
      }
      await this.storageUtility.set(_IssuerConfigFetcher.getLocalStorageKey(issuer), JSON.stringify(issuerConfig));
      return issuerConfig;
    }
  };
  async function clear2(sessionId, storage) {
    await clear(sessionId, storage);
    await clearOidcPersistentStorage();
  }
  var SessionInfoManager = class extends SessionInfoManagerBase {
    async get(sessionId) {
      const [isLoggedIn3, webId, clientId, clientSecret, redirectUrl, refreshToken, issuer, tokenType] = await Promise.all([
        this.storageUtility.getForUser(sessionId, "isLoggedIn", {
          secure: true
        }),
        this.storageUtility.getForUser(sessionId, "webId", {
          secure: true
        }),
        this.storageUtility.getForUser(sessionId, "clientId", {
          secure: false
        }),
        this.storageUtility.getForUser(sessionId, "clientSecret", {
          secure: false
        }),
        this.storageUtility.getForUser(sessionId, "redirectUrl", {
          secure: false
        }),
        this.storageUtility.getForUser(sessionId, "refreshToken", {
          secure: true
        }),
        this.storageUtility.getForUser(sessionId, "issuer", {
          secure: false
        }),
        this.storageUtility.getForUser(sessionId, "tokenType", {
          secure: false
        })
      ]);
      if (typeof redirectUrl === "string" && !isValidRedirectUrl(redirectUrl)) {
        await Promise.all([
          this.storageUtility.deleteAllUserData(sessionId, { secure: false }),
          this.storageUtility.deleteAllUserData(sessionId, { secure: true })
        ]);
        return void 0;
      }
      if (tokenType !== void 0 && !isSupportedTokenType(tokenType)) {
        throw new Error(`Tokens of type [${tokenType}] are not supported.`);
      }
      if (clientId === void 0 && isLoggedIn3 === void 0 && webId === void 0 && refreshToken === void 0) {
        return void 0;
      }
      return {
        sessionId,
        webId,
        isLoggedIn: isLoggedIn3 === "true",
        redirectUrl,
        refreshToken,
        issuer,
        clientAppId: clientId,
        clientAppSecret: clientSecret,
        // Default the token type to DPoP if unspecified.
        tokenType: tokenType !== null && tokenType !== void 0 ? tokenType : "DPoP"
      };
    }
    /**
     * This function removes all session-related information from storage.
     * @param sessionId the session identifier
     * @param storage the storage where session info is stored
     * @hidden
     */
    async clear(sessionId) {
      return clear2(sessionId, this.storageUtility);
    }
  };
  var FallbackRedirectHandler = class {
    async canHandle(redirectUrl) {
      try {
        new URL(redirectUrl);
        return true;
      } catch (e) {
        throw new Error(`[${redirectUrl}] is not a valid URL, and cannot be used as a redirect URL: ${e}`);
      }
    }
    async handle(_redirectUrl) {
      return getUnauthenticatedSession();
    }
  };
  var AuthCodeRedirectHandler = class {
    constructor(storageUtility, sessionInfoManager, issuerConfigFetcher, clientRegistrar, tokerRefresher) {
      this.storageUtility = storageUtility;
      this.sessionInfoManager = sessionInfoManager;
      this.issuerConfigFetcher = issuerConfigFetcher;
      this.clientRegistrar = clientRegistrar;
      this.tokerRefresher = tokerRefresher;
      this.storageUtility = storageUtility;
      this.sessionInfoManager = sessionInfoManager;
      this.issuerConfigFetcher = issuerConfigFetcher;
      this.clientRegistrar = clientRegistrar;
      this.tokerRefresher = tokerRefresher;
    }
    async canHandle(redirectUrl) {
      try {
        const myUrl = new URL(redirectUrl);
        return myUrl.searchParams.get("code") !== null && myUrl.searchParams.get("state") !== null;
      } catch (e) {
        throw new Error(`[${redirectUrl}] is not a valid URL, and cannot be used as a redirect URL: ${e}`);
      }
    }
    async handle(redirectUrl, eventEmitter) {
      if (!await this.canHandle(redirectUrl)) {
        throw new Error(`AuthCodeRedirectHandler cannot handle [${redirectUrl}]: it is missing one of [code, state].`);
      }
      const url = new URL(redirectUrl);
      const oauthState = url.searchParams.get("state");
      const storedSessionId = await this.storageUtility.getForUser(oauthState, "sessionId", {
        errorIfNull: true
      });
      const { issuerConfig, codeVerifier, redirectUrl: storedRedirectIri, dpop: isDpop } = await loadOidcContextFromStorage(storedSessionId, this.storageUtility, this.issuerConfigFetcher);
      const iss = url.searchParams.get("iss");
      if (typeof iss === "string" && iss !== issuerConfig.issuer) {
        throw new Error(`The value of the iss parameter (${iss}) does not match the issuer identifier of the authorization server (${issuerConfig.issuer}). See [rfc9207](https://www.rfc-editor.org/rfc/rfc9207.html#section-2.3-3.1.1)`);
      }
      if (codeVerifier === void 0) {
        throw new Error(`The code verifier for session ${storedSessionId} is missing from storage.`);
      }
      if (storedRedirectIri === void 0) {
        throw new Error(`The redirect URL for session ${storedSessionId} is missing from storage.`);
      }
      const client = await this.clientRegistrar.getClient({ sessionId: storedSessionId }, issuerConfig);
      const tokenCreatedAt = Date.now();
      const tokens = await getTokens(issuerConfig, client, {
        grantType: "authorization_code",
        // We rely on our 'canHandle' function checking that the OAuth 'code'
        // parameter is present in our query string.
        code: url.searchParams.get("code"),
        codeVerifier,
        redirectUrl: storedRedirectIri
      }, isDpop);
      window.localStorage.removeItem(`oidc.${oauthState}`);
      let refreshOptions;
      if (tokens.refreshToken !== void 0) {
        refreshOptions = {
          sessionId: storedSessionId,
          refreshToken: tokens.refreshToken,
          tokenRefresher: this.tokerRefresher
        };
      }
      const authFetch = await buildAuthenticatedFetch(tokens.accessToken, {
        dpopKey: tokens.dpopKey,
        refreshOptions,
        eventEmitter,
        expiresIn: tokens.expiresIn
      });
      await saveSessionInfoToStorage(this.storageUtility, storedSessionId, tokens.webId, tokens.clientId, "true", void 0, true);
      const sessionInfo = await this.sessionInfoManager.get(storedSessionId);
      if (!sessionInfo) {
        throw new Error(`Could not retrieve session: [${storedSessionId}].`);
      }
      return Object.assign(sessionInfo, {
        fetch: authFetch,
        getLogoutUrl: maybeBuildRpInitiatedLogout({
          idTokenHint: tokens.idToken,
          endSessionEndpoint: issuerConfig.endSessionEndpoint
        }),
        expirationDate: typeof tokens.expiresIn === "number" ? tokenCreatedAt + tokens.expiresIn * 1e3 : void 0
      });
    }
  };
  var AggregateRedirectHandler = class extends AggregateHandler {
    constructor(redirectHandlers) {
      super(redirectHandlers);
    }
  };
  var BrowserStorage = class {
    get storage() {
      return window.localStorage;
    }
    async get(key) {
      return this.storage.getItem(key) || void 0;
    }
    async set(key, value) {
      this.storage.setItem(key, value);
    }
    async delete(key) {
      this.storage.removeItem(key);
    }
  };
  var Redirector = class {
    redirect(redirectUrl, options) {
      if (options && options.handleRedirect) {
        options.handleRedirect(redirectUrl);
      } else if (options && options.redirectByReplacingState) {
        window.history.replaceState({}, "", redirectUrl);
      } else {
        window.location.href = redirectUrl;
      }
    }
  };
  var ClientRegistrar = class {
    constructor(storageUtility) {
      this.storageUtility = storageUtility;
      this.storageUtility = storageUtility;
    }
    async getClient(options, issuerConfig) {
      const [storedClientId, storedClientSecret, storedClientName, storedClientType] = await Promise.all([
        this.storageUtility.getForUser(options.sessionId, "clientId", {
          secure: false
        }),
        this.storageUtility.getForUser(options.sessionId, "clientSecret", {
          secure: false
        }),
        this.storageUtility.getForUser(options.sessionId, "clientName", {
          secure: false
        }),
        this.storageUtility.getForUser(options.sessionId, "clientType", {
          secure: false
        })
      ]);
      if (storedClientId && isKnownClientType(storedClientType)) {
        return {
          clientId: storedClientId,
          clientSecret: storedClientSecret,
          clientName: storedClientName,
          // Note: static clients are not applicable in a browser context.
          clientType: storedClientType
        };
      }
      try {
        const registeredClient = await registerClient(options, issuerConfig);
        const infoToSave = {
          clientId: registeredClient.clientId,
          clientType: "dynamic"
        };
        if (registeredClient.clientSecret) {
          infoToSave.clientSecret = registeredClient.clientSecret;
        }
        if (registeredClient.idTokenSignedResponseAlg) {
          infoToSave.idTokenSignedResponseAlg = registeredClient.idTokenSignedResponseAlg;
        }
        await this.storageUtility.setForUser(options.sessionId, infoToSave, {
          // FIXME: figure out how to persist secure storage at reload
          // Otherwise, the client info cannot be retrieved from storage, and
          // the lib tries to re-register the client on each fetch
          secure: false
        });
        return registeredClient;
      } catch (error2) {
        throw new Error(`Client registration failed: [${error2}]`);
      }
    }
  };
  var ErrorOidcHandler = class {
    async canHandle(redirectUrl) {
      try {
        return new URL(redirectUrl).searchParams.has("error");
      } catch (e) {
        throw new Error(`[${redirectUrl}] is not a valid URL, and cannot be used as a redirect URL: ${e}`);
      }
    }
    async handle(redirectUrl, eventEmitter) {
      if (eventEmitter !== void 0) {
        const url = new URL(redirectUrl);
        const errorUrl = url.searchParams.get("error");
        const errorDescriptionUrl = url.searchParams.get("error_description");
        eventEmitter.emit(EVENTS.ERROR, errorUrl, errorDescriptionUrl);
      }
      return getUnauthenticatedSession();
    }
  };
  var TokenRefresher = class {
    constructor(storageUtility, issuerConfigFetcher, clientRegistrar) {
      this.storageUtility = storageUtility;
      this.issuerConfigFetcher = issuerConfigFetcher;
      this.clientRegistrar = clientRegistrar;
      this.storageUtility = storageUtility;
      this.issuerConfigFetcher = issuerConfigFetcher;
      this.clientRegistrar = clientRegistrar;
    }
    async refresh(sessionId, refreshToken, dpopKey, eventEmitter) {
      const oidcContext = await loadOidcContextFromStorage(sessionId, this.storageUtility, this.issuerConfigFetcher);
      const clientInfo = await this.clientRegistrar.getClient({ sessionId }, oidcContext.issuerConfig);
      if (refreshToken === void 0) {
        throw new Error(`Session [${sessionId}] has no refresh token to allow it to refresh its access token.`);
      }
      if (oidcContext.dpop && dpopKey === void 0) {
        throw new Error(`For session [${sessionId}], the key bound to the DPoP access token must be provided to refresh said access token.`);
      }
      const tokenSet = await refresh(refreshToken, oidcContext.issuerConfig, clientInfo, dpopKey);
      if (tokenSet.refreshToken !== void 0) {
        eventEmitter === null || eventEmitter === void 0 ? void 0 : eventEmitter.emit(EVENTS.NEW_REFRESH_TOKEN, tokenSet.refreshToken);
      }
      return tokenSet;
    }
  };
  function getClientAuthenticationWithDependencies(dependencies) {
    const inMemoryStorage = new InMemoryStorage();
    const secureStorage = dependencies.secureStorage || inMemoryStorage;
    const insecureStorage = dependencies.insecureStorage || new BrowserStorage();
    const storageUtility = new StorageUtilityBrowser(secureStorage, insecureStorage);
    const issuerConfigFetcher = new IssuerConfigFetcher(storageUtility);
    const clientRegistrar = new ClientRegistrar(storageUtility);
    const sessionInfoManager = new SessionInfoManager(storageUtility);
    const tokenRefresher = new TokenRefresher(storageUtility, issuerConfigFetcher, clientRegistrar);
    const redirector = new Redirector();
    const loginHandler = new OidcLoginHandler(storageUtility, new AuthorizationCodeWithPkceOidcHandler(storageUtility, redirector), issuerConfigFetcher, clientRegistrar);
    const redirectHandler = new AggregateRedirectHandler([
      new ErrorOidcHandler(),
      new AuthCodeRedirectHandler(storageUtility, sessionInfoManager, issuerConfigFetcher, clientRegistrar, tokenRefresher),
      // This catch-all class will always be able to handle the
      // redirect IRI, so it must be registered last.
      new FallbackRedirectHandler()
    ]);
    return new ClientAuthentication2(loginHandler, redirectHandler, new IWaterfallLogoutHandler(sessionInfoManager, redirector), sessionInfoManager, issuerConfigFetcher);
  }
  var KEY_CURRENT_SESSION = `${SOLID_CLIENT_AUTHN_KEY_PREFIX}currentSession`;
  var KEY_CURRENT_URL = `${SOLID_CLIENT_AUTHN_KEY_PREFIX}currentUrl`;
  async function silentlyAuthenticate(sessionId, clientAuthn, session) {
    var _a;
    const storedSessionInfo = await clientAuthn.validateCurrentSession(sessionId);
    if (storedSessionInfo !== null) {
      window.localStorage.setItem(KEY_CURRENT_URL, window.location.href);
      await clientAuthn.login({
        sessionId,
        prompt: "none",
        oidcIssuer: storedSessionInfo.issuer,
        redirectUrl: storedSessionInfo.redirectUrl,
        clientId: storedSessionInfo.clientAppId,
        clientSecret: storedSessionInfo.clientAppSecret,
        tokenType: (_a = storedSessionInfo.tokenType) !== null && _a !== void 0 ? _a : "DPoP"
      }, session.events);
      return true;
    }
    return false;
  }
  function isLoggedIn(sessionInfo) {
    return !!(sessionInfo === null || sessionInfo === void 0 ? void 0 : sessionInfo.isLoggedIn);
  }
  var Session = class {
    /**
     * Session object constructor. Typically called as follows:
     *
     * ```typescript
     * const session = new Session();
     * ```
     *
     * See also [getDefaultSession](https://docs.inrupt.com/developer-tools/api/javascript/solid-client-authn-browser/functions.html#getdefaultsession).
     *
     * @param sessionOptions The options enabling the correct instantiation of
     * the session. Either both storages or clientAuthentication are required. For
     * more information, see {@link ISessionOptions}.
     * @param sessionId A string uniquely identifying the session.
     *
     */
    constructor(sessionOptions = {}, sessionId = void 0) {
      this.tokenRequestInProgress = false;
      this.login = async (options) => {
        var _a;
        await this.clientAuthentication.login({
          sessionId: this.info.sessionId,
          ...options,
          // Defaults the token type to DPoP
          tokenType: (_a = options.tokenType) !== null && _a !== void 0 ? _a : "DPoP"
        }, this.events);
        return new Promise(() => {
        });
      };
      this.fetch = (url, init2) => this.clientAuthentication.fetch(url, init2);
      this.internalLogout = async (emitSignal, options) => {
        window.localStorage.removeItem(KEY_CURRENT_SESSION);
        await this.clientAuthentication.logout(this.info.sessionId, options);
        this.info.isLoggedIn = false;
        if (emitSignal) {
          this.events.emit(EVENTS.LOGOUT);
        }
      };
      this.logout = async (options) => this.internalLogout(true, options);
      this.handleIncomingRedirect = async (inputOptions = {}) => {
        var _a;
        if (this.info.isLoggedIn) {
          return this.info;
        }
        if (this.tokenRequestInProgress) {
          return void 0;
        }
        const options = typeof inputOptions === "string" ? { url: inputOptions } : inputOptions;
        const url = (_a = options.url) !== null && _a !== void 0 ? _a : window.location.href;
        this.tokenRequestInProgress = true;
        const sessionInfo = await this.clientAuthentication.handleIncomingRedirect(url, this.events);
        if (isLoggedIn(sessionInfo)) {
          this.setSessionInfo(sessionInfo);
          const currentUrl = window.localStorage.getItem(KEY_CURRENT_URL);
          if (currentUrl === null) {
            this.events.emit(EVENTS.LOGIN);
          } else {
            window.localStorage.removeItem(KEY_CURRENT_URL);
            this.events.emit(EVENTS.SESSION_RESTORED, currentUrl);
          }
        } else if (options.restorePreviousSession === true) {
          const storedSessionId = window.localStorage.getItem(KEY_CURRENT_SESSION);
          if (storedSessionId !== null) {
            const attemptedSilentAuthentication = await silentlyAuthenticate(storedSessionId, this.clientAuthentication, this);
            if (attemptedSilentAuthentication) {
              return new Promise(() => {
              });
            }
          }
        }
        this.tokenRequestInProgress = false;
        return sessionInfo;
      };
      this.events = new exports3();
      if (sessionOptions.clientAuthentication) {
        this.clientAuthentication = sessionOptions.clientAuthentication;
      } else if (sessionOptions.secureStorage && sessionOptions.insecureStorage) {
        this.clientAuthentication = getClientAuthenticationWithDependencies({
          secureStorage: sessionOptions.secureStorage,
          insecureStorage: sessionOptions.insecureStorage
        });
      } else {
        this.clientAuthentication = getClientAuthenticationWithDependencies({});
      }
      if (sessionOptions.sessionInfo) {
        this.info = {
          sessionId: sessionOptions.sessionInfo.sessionId,
          isLoggedIn: false,
          webId: sessionOptions.sessionInfo.webId,
          clientAppId: sessionOptions.sessionInfo.clientAppId
        };
      } else {
        this.info = {
          sessionId: sessionId !== null && sessionId !== void 0 ? sessionId : v4_default(),
          isLoggedIn: false
        };
      }
      this.events.on(EVENTS.LOGIN, () => window.localStorage.setItem(KEY_CURRENT_SESSION, this.info.sessionId));
      this.events.on(EVENTS.SESSION_EXPIRED, () => this.internalLogout(false));
      this.events.on(EVENTS.ERROR, () => this.internalLogout(false));
    }
    setSessionInfo(sessionInfo) {
      this.info.isLoggedIn = sessionInfo.isLoggedIn;
      this.info.webId = sessionInfo.webId;
      this.info.sessionId = sessionInfo.sessionId;
      this.info.clientAppId = sessionInfo.clientAppId;
      this.info.expirationDate = sessionInfo.expirationDate;
      this.events.on(EVENTS.SESSION_EXTENDED, (expiresIn) => {
        this.info.expirationDate = Date.now() + expiresIn * 1e3;
      });
    }
  };
  var defaultSession;
  function getDefaultSession() {
    if (typeof defaultSession === "undefined") {
      defaultSession = new Session();
    }
    return defaultSession;
  }
  var fetch$1 = (...args) => {
    const session = getDefaultSession();
    return session.fetch(...args);
  };
  var login = (...args) => {
    const session = getDefaultSession();
    return session.login(...args);
  };
  var logout = (...args) => {
    const session = getDefaultSession();
    return session.logout(...args);
  };
  var handleIncomingRedirect = (...args) => {
    const session = getDefaultSession();
    return session.handleIncomingRedirect(...args);
  };

  // node_modules/n3/src/index.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/n3/src/N3Lexer.js
  init_dirname();
  init_buffer2();
  init_process2();
  init_buffer();
  var import_queue_microtask = __toESM(require_queue_microtask());

  // node_modules/n3/src/IRIs.js
  init_dirname();
  init_buffer2();
  init_process2();
  var RDF = "http://www.w3.org/1999/02/22-rdf-syntax-ns#";
  var XSD = "http://www.w3.org/2001/XMLSchema#";
  var SWAP = "http://www.w3.org/2000/10/swap/";
  var IRIs_default = {
    xsd: {
      decimal: `${XSD}decimal`,
      boolean: `${XSD}boolean`,
      double: `${XSD}double`,
      integer: `${XSD}integer`,
      string: `${XSD}string`
    },
    rdf: {
      type: `${RDF}type`,
      nil: `${RDF}nil`,
      first: `${RDF}first`,
      rest: `${RDF}rest`,
      langString: `${RDF}langString`
    },
    owl: {
      sameAs: "http://www.w3.org/2002/07/owl#sameAs"
    },
    r: {
      forSome: `${SWAP}reify#forSome`,
      forAll: `${SWAP}reify#forAll`
    },
    log: {
      implies: `${SWAP}log#implies`
    }
  };

  // node_modules/n3/src/N3Lexer.js
  var { xsd } = IRIs_default;
  var escapeSequence = /\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{8})|\\([^])/g;
  var escapeReplacements = {
    "\\": "\\",
    "'": "'",
    '"': '"',
    "n": "\n",
    "r": "\r",
    "t": "	",
    "f": "\f",
    "b": "\b",
    "_": "_",
    "~": "~",
    ".": ".",
    "-": "-",
    "!": "!",
    "$": "$",
    "&": "&",
    "(": "(",
    ")": ")",
    "*": "*",
    "+": "+",
    ",": ",",
    ";": ";",
    "=": "=",
    "/": "/",
    "?": "?",
    "#": "#",
    "@": "@",
    "%": "%"
  };
  var illegalIriChars = /[\x00-\x20<>\\"\{\}\|\^\`]/;
  var lineModeRegExps = {
    _iri: true,
    _unescapedIri: true,
    _simpleQuotedString: true,
    _langcode: true,
    _blank: true,
    _newline: true,
    _comment: true,
    _whitespace: true,
    _endOfFile: true
  };
  var invalidRegExp = /$0^/;
  var N3Lexer = class {
    constructor(options) {
      this._iri = /^<((?:[^ <>{}\\]|\\[uU])+)>[ \t]*/;
      this._unescapedIri = /^<([^\x00-\x20<>\\"\{\}\|\^\`]*)>[ \t]*/;
      this._simpleQuotedString = /^"([^"\\\r\n]*)"(?=[^"])/;
      this._simpleApostropheString = /^'([^'\\\r\n]*)'(?=[^'])/;
      this._langcode = /^@([a-z]+(?:-[a-z0-9]+)*)(?=[^a-z0-9\-])/i;
      this._prefix = /^((?:[A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])(?:\.?[\-0-9A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])*)?:(?=[#\s<])/;
      this._prefixed = /^((?:[A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])(?:\.?[\-0-9A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])*)?:((?:(?:[0-:A-Z_a-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff]|%[0-9a-fA-F]{2}|\\[!#-\/;=?\-@_~])(?:(?:[\.\-0-:A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff]|%[0-9a-fA-F]{2}|\\[!#-\/;=?\-@_~])*(?:[\-0-:A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff]|%[0-9a-fA-F]{2}|\\[!#-\/;=?\-@_~]))?)?)(?:[ \t]+|(?=\.?[,;!\^\s#()\[\]\{\}"'<>]))/;
      this._variable = /^\?(?:(?:[A-Z_a-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])(?:[\-0-:A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])*)(?=[.,;!\^\s#()\[\]\{\}"'<>])/;
      this._blank = /^_:((?:[0-9A-Z_a-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])(?:\.?[\-0-9A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])*)(?:[ \t]+|(?=\.?[,;:\s#()\[\]\{\}"'<>]))/;
      this._number = /^[\-+]?(?:(\d+\.\d*|\.?\d+)[eE][\-+]?|\d*(\.)?)\d+(?=\.?[,;:\s#()\[\]\{\}"'<>])/;
      this._boolean = /^(?:true|false)(?=[.,;\s#()\[\]\{\}"'<>])/;
      this._keyword = /^@[a-z]+(?=[\s#<:])/i;
      this._sparqlKeyword = /^(?:PREFIX|BASE|GRAPH)(?=[\s#<])/i;
      this._shortPredicates = /^a(?=[\s#()\[\]\{\}"'<>])/;
      this._newline = /^[ \t]*(?:#[^\n\r]*)?(?:\r\n|\n|\r)[ \t]*/;
      this._comment = /#([^\n\r]*)/;
      this._whitespace = /^[ \t]+/;
      this._endOfFile = /^(?:#[^\n\r]*)?$/;
      options = options || {};
      if (this._lineMode = !!options.lineMode) {
        this._n3Mode = false;
        for (const key in this) {
          if (!(key in lineModeRegExps) && this[key] instanceof RegExp)
            this[key] = invalidRegExp;
        }
      } else {
        this._n3Mode = options.n3 !== false;
      }
      this.comments = !!options.comments;
      this._literalClosingPos = 0;
    }
    // ## Private methods
    // ### `_tokenizeToEnd` tokenizes as for as possible, emitting tokens through the callback
    _tokenizeToEnd(callback, inputFinished) {
      let input = this._input;
      let currentLineLength = input.length;
      while (true) {
        let whiteSpaceMatch, comment;
        while (whiteSpaceMatch = this._newline.exec(input)) {
          if (this.comments && (comment = this._comment.exec(whiteSpaceMatch[0])))
            emitToken("comment", comment[1], "", this._line, whiteSpaceMatch[0].length);
          input = input.substr(whiteSpaceMatch[0].length, input.length);
          currentLineLength = input.length;
          this._line++;
        }
        if (!whiteSpaceMatch && (whiteSpaceMatch = this._whitespace.exec(input)))
          input = input.substr(whiteSpaceMatch[0].length, input.length);
        if (this._endOfFile.test(input)) {
          if (inputFinished) {
            if (this.comments && (comment = this._comment.exec(input)))
              emitToken("comment", comment[1], "", this._line, input.length);
            input = null;
            emitToken("eof", "", "", this._line, 0);
          }
          return this._input = input;
        }
        const line = this._line, firstChar = input[0];
        let type = "", value = "", prefix = "", match = null, matchLength = 0, inconclusive = false;
        switch (firstChar) {
          case "^":
            if (input.length < 3)
              break;
            else if (input[1] === "^") {
              this._previousMarker = "^^";
              input = input.substr(2);
              if (input[0] !== "<") {
                inconclusive = true;
                break;
              }
            } else {
              if (this._n3Mode) {
                matchLength = 1;
                type = "^";
              }
              break;
            }
          // Fall through in case the type is an IRI
          case "<":
            if (match = this._unescapedIri.exec(input))
              type = "IRI", value = match[1];
            else if (match = this._iri.exec(input)) {
              value = this._unescape(match[1]);
              if (value === null || illegalIriChars.test(value))
                return reportSyntaxError(this);
              type = "IRI";
            } else if (input.length > 1 && input[1] === "<")
              type = "<<", matchLength = 2;
            else if (this._n3Mode && input.length > 1 && input[1] === "=")
              type = "inverse", matchLength = 2, value = ">";
            break;
          case ">":
            if (input.length > 1 && input[1] === ">")
              type = ">>", matchLength = 2;
            break;
          case "_":
            if ((match = this._blank.exec(input)) || inputFinished && (match = this._blank.exec(`${input} `)))
              type = "blank", prefix = "_", value = match[1];
            break;
          case '"':
            if (match = this._simpleQuotedString.exec(input))
              value = match[1];
            else {
              ({ value, matchLength } = this._parseLiteral(input));
              if (value === null)
                return reportSyntaxError(this);
            }
            if (match !== null || matchLength !== 0) {
              type = "literal";
              this._literalClosingPos = 0;
            }
            break;
          case "'":
            if (!this._lineMode) {
              if (match = this._simpleApostropheString.exec(input))
                value = match[1];
              else {
                ({ value, matchLength } = this._parseLiteral(input));
                if (value === null)
                  return reportSyntaxError(this);
              }
              if (match !== null || matchLength !== 0) {
                type = "literal";
                this._literalClosingPos = 0;
              }
            }
            break;
          case "?":
            if (this._n3Mode && (match = this._variable.exec(input)))
              type = "var", value = match[0];
            break;
          case "@":
            if (this._previousMarker === "literal" && (match = this._langcode.exec(input)))
              type = "langcode", value = match[1];
            else if (match = this._keyword.exec(input))
              type = match[0];
            break;
          case ".":
            if (input.length === 1 ? inputFinished : input[1] < "0" || input[1] > "9") {
              type = ".";
              matchLength = 1;
              break;
            }
          // Fall through to numerical case (could be a decimal dot)
          case "0":
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9":
          case "+":
          case "-":
            if (match = this._number.exec(input) || inputFinished && (match = this._number.exec(`${input} `))) {
              type = "literal", value = match[0];
              prefix = typeof match[1] === "string" ? xsd.double : typeof match[2] === "string" ? xsd.decimal : xsd.integer;
            }
            break;
          case "B":
          case "b":
          case "p":
          case "P":
          case "G":
          case "g":
            if (match = this._sparqlKeyword.exec(input))
              type = match[0].toUpperCase();
            else
              inconclusive = true;
            break;
          case "f":
          case "t":
            if (match = this._boolean.exec(input))
              type = "literal", value = match[0], prefix = xsd.boolean;
            else
              inconclusive = true;
            break;
          case "a":
            if (match = this._shortPredicates.exec(input))
              type = "abbreviation", value = "a";
            else
              inconclusive = true;
            break;
          case "=":
            if (this._n3Mode && input.length > 1) {
              type = "abbreviation";
              if (input[1] !== ">")
                matchLength = 1, value = "=";
              else
                matchLength = 2, value = ">";
            }
            break;
          case "!":
            if (!this._n3Mode)
              break;
          case ",":
          case ";":
          case "[":
          case "]":
          case "(":
          case ")":
          case "}":
            if (!this._lineMode) {
              matchLength = 1;
              type = firstChar;
            }
            break;
          case "{":
            if (!this._lineMode && input.length >= 2) {
              if (input[1] === "|")
                type = "{|", matchLength = 2;
              else
                type = firstChar, matchLength = 1;
            }
            break;
          case "|":
            if (input.length >= 2 && input[1] === "}")
              type = "|}", matchLength = 2;
            break;
          default:
            inconclusive = true;
        }
        if (inconclusive) {
          if ((this._previousMarker === "@prefix" || this._previousMarker === "PREFIX") && (match = this._prefix.exec(input)))
            type = "prefix", value = match[1] || "";
          else if ((match = this._prefixed.exec(input)) || inputFinished && (match = this._prefixed.exec(`${input} `)))
            type = "prefixed", prefix = match[1] || "", value = this._unescape(match[2]);
        }
        if (this._previousMarker === "^^") {
          switch (type) {
            case "prefixed":
              type = "type";
              break;
            case "IRI":
              type = "typeIRI";
              break;
            default:
              type = "";
          }
        }
        if (!type) {
          if (inputFinished || !/^'''|^"""/.test(input) && /\n|\r/.test(input))
            return reportSyntaxError(this);
          else
            return this._input = input;
        }
        const length = matchLength || match[0].length;
        const token = emitToken(type, value, prefix, line, length);
        this.previousToken = token;
        this._previousMarker = type;
        input = input.substr(length, input.length);
      }
      function emitToken(type, value, prefix, line, length) {
        const start = input ? currentLineLength - input.length : currentLineLength;
        const end = start + length;
        const token = { type, value, prefix, line, start, end };
        callback(null, token);
        return token;
      }
      function reportSyntaxError(self) {
        callback(self._syntaxError(/^\S*/.exec(input)[0]));
      }
    }
    // ### `_unescape` replaces N3 escape codes by their corresponding characters
    _unescape(item) {
      let invalid = false;
      const replaced = item.replace(escapeSequence, (sequence, unicode4, unicode8, escapedChar) => {
        if (typeof unicode4 === "string")
          return String.fromCharCode(Number.parseInt(unicode4, 16));
        if (typeof unicode8 === "string") {
          let charCode = Number.parseInt(unicode8, 16);
          return charCode <= 65535 ? String.fromCharCode(Number.parseInt(unicode8, 16)) : String.fromCharCode(55296 + ((charCode -= 65536) >> 10), 56320 + (charCode & 1023));
        }
        if (escapedChar in escapeReplacements)
          return escapeReplacements[escapedChar];
        invalid = true;
        return "";
      });
      return invalid ? null : replaced;
    }
    // ### `_parseLiteral` parses a literal into an unescaped value
    _parseLiteral(input) {
      if (input.length >= 3) {
        const opening = input.match(/^(?:"""|"|'''|'|)/)[0];
        const openingLength = opening.length;
        let closingPos = Math.max(this._literalClosingPos, openingLength);
        while ((closingPos = input.indexOf(opening, closingPos)) > 0) {
          let backslashCount = 0;
          while (input[closingPos - backslashCount - 1] === "\\")
            backslashCount++;
          if (backslashCount % 2 === 0) {
            const raw = input.substring(openingLength, closingPos);
            const lines = raw.split(/\r\n|\r|\n/).length - 1;
            const matchLength = closingPos + openingLength;
            if (openingLength === 1 && lines !== 0 || openingLength === 3 && this._lineMode)
              break;
            this._line += lines;
            return { value: this._unescape(raw), matchLength };
          }
          closingPos++;
        }
        this._literalClosingPos = input.length - openingLength + 1;
      }
      return { value: "", matchLength: 0 };
    }
    // ### `_syntaxError` creates a syntax error for the given issue
    _syntaxError(issue) {
      this._input = null;
      const err = new Error(`Unexpected "${issue}" on line ${this._line}.`);
      err.context = {
        token: void 0,
        line: this._line,
        previousToken: this.previousToken
      };
      return err;
    }
    // ### Strips off any starting UTF BOM mark.
    _readStartingBom(input) {
      return input.startsWith("\uFEFF") ? input.substr(1) : input;
    }
    // ## Public methods
    // ### `tokenize` starts the transformation of an N3 document into an array of tokens.
    // The input can be a string or a stream.
    tokenize(input, callback) {
      this._line = 1;
      if (typeof input === "string") {
        this._input = this._readStartingBom(input);
        if (typeof callback === "function")
          (0, import_queue_microtask.default)(() => this._tokenizeToEnd(callback, true));
        else {
          const tokens = [];
          let error2;
          this._tokenizeToEnd((e, t) => e ? error2 = e : tokens.push(t), true);
          if (error2) throw error2;
          return tokens;
        }
      } else {
        this._pendingBuffer = null;
        if (typeof input.setEncoding === "function")
          input.setEncoding("utf8");
        input.on("data", (data) => {
          if (this._input !== null && data.length !== 0) {
            if (this._pendingBuffer) {
              data = Buffer2.concat([this._pendingBuffer, data]);
              this._pendingBuffer = null;
            }
            if (data[data.length - 1] & 128) {
              this._pendingBuffer = data;
            } else {
              if (typeof this._input === "undefined")
                this._input = this._readStartingBom(typeof data === "string" ? data : data.toString());
              else
                this._input += data;
              this._tokenizeToEnd(callback, false);
            }
          }
        });
        input.on("end", () => {
          if (typeof this._input === "string")
            this._tokenizeToEnd(callback, true);
        });
        input.on("error", callback);
      }
    }
  };

  // node_modules/n3/src/N3Parser.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/n3/src/N3DataFactory.js
  init_dirname();
  init_buffer2();
  init_process2();
  var { rdf, xsd: xsd2 } = IRIs_default;
  var DEFAULTGRAPH;
  var _blankNodeCounter = 0;
  var DataFactory = {
    namedNode,
    blankNode,
    variable,
    literal,
    defaultGraph,
    quad,
    triple: quad,
    fromTerm,
    fromQuad
  };
  var N3DataFactory_default = DataFactory;
  var Term = class _Term {
    constructor(id) {
      this.id = id;
    }
    // ### The value of this term
    get value() {
      return this.id;
    }
    // ### Returns whether this object represents the same term as the other
    equals(other) {
      if (other instanceof _Term)
        return this.id === other.id;
      return !!other && this.termType === other.termType && this.value === other.value;
    }
    // ### Implement hashCode for Immutable.js, since we implement `equals`
    // https://immutable-js.com/docs/v4.0.0/ValueObject/#hashCode()
    hashCode() {
      return 0;
    }
    // ### Returns a plain object representation of this term
    toJSON() {
      return {
        termType: this.termType,
        value: this.value
      };
    }
  };
  var NamedNode = class extends Term {
    // ### The term type of this term
    get termType() {
      return "NamedNode";
    }
  };
  var Literal = class _Literal extends Term {
    // ### The term type of this term
    get termType() {
      return "Literal";
    }
    // ### The text value of this literal
    get value() {
      return this.id.substring(1, this.id.lastIndexOf('"'));
    }
    // ### The language of this literal
    get language() {
      const id = this.id;
      let atPos = id.lastIndexOf('"') + 1;
      return atPos < id.length && id[atPos++] === "@" ? id.substr(atPos).toLowerCase() : "";
    }
    // ### The datatype IRI of this literal
    get datatype() {
      return new NamedNode(this.datatypeString);
    }
    // ### The datatype string of this literal
    get datatypeString() {
      const id = this.id, dtPos = id.lastIndexOf('"') + 1;
      const char = dtPos < id.length ? id[dtPos] : "";
      return char === "^" ? id.substr(dtPos + 2) : (
        // If "@" follows, return rdf:langString; xsd:string otherwise
        char !== "@" ? xsd2.string : rdf.langString
      );
    }
    // ### Returns whether this object represents the same term as the other
    equals(other) {
      if (other instanceof _Literal)
        return this.id === other.id;
      return !!other && !!other.datatype && this.termType === other.termType && this.value === other.value && this.language === other.language && this.datatype.value === other.datatype.value;
    }
    toJSON() {
      return {
        termType: this.termType,
        value: this.value,
        language: this.language,
        datatype: { termType: "NamedNode", value: this.datatypeString }
      };
    }
  };
  var BlankNode = class extends Term {
    constructor(name2) {
      super(`_:${name2}`);
    }
    // ### The term type of this term
    get termType() {
      return "BlankNode";
    }
    // ### The name of this blank node
    get value() {
      return this.id.substr(2);
    }
  };
  var Variable = class extends Term {
    constructor(name2) {
      super(`?${name2}`);
    }
    // ### The term type of this term
    get termType() {
      return "Variable";
    }
    // ### The name of this variable
    get value() {
      return this.id.substr(1);
    }
  };
  var DefaultGraph = class extends Term {
    constructor() {
      super("");
      return DEFAULTGRAPH || this;
    }
    // ### The term type of this term
    get termType() {
      return "DefaultGraph";
    }
    // ### Returns whether this object represents the same term as the other
    equals(other) {
      return this === other || !!other && this.termType === other.termType;
    }
  };
  DEFAULTGRAPH = new DefaultGraph();
  var Quad = class extends Term {
    constructor(subject, predicate, object, graph) {
      super("");
      this._subject = subject;
      this._predicate = predicate;
      this._object = object;
      this._graph = graph || DEFAULTGRAPH;
    }
    // ### The term type of this term
    get termType() {
      return "Quad";
    }
    get subject() {
      return this._subject;
    }
    get predicate() {
      return this._predicate;
    }
    get object() {
      return this._object;
    }
    get graph() {
      return this._graph;
    }
    // ### Returns a plain object representation of this quad
    toJSON() {
      return {
        termType: this.termType,
        subject: this._subject.toJSON(),
        predicate: this._predicate.toJSON(),
        object: this._object.toJSON(),
        graph: this._graph.toJSON()
      };
    }
    // ### Returns whether this object represents the same quad as the other
    equals(other) {
      return !!other && this._subject.equals(other.subject) && this._predicate.equals(other.predicate) && this._object.equals(other.object) && this._graph.equals(other.graph);
    }
  };
  function namedNode(iri) {
    return new NamedNode(iri);
  }
  function blankNode(name2) {
    return new BlankNode(name2 || `n3-${_blankNodeCounter++}`);
  }
  function literal(value, languageOrDataType) {
    if (typeof languageOrDataType === "string")
      return new Literal(`"${value}"@${languageOrDataType.toLowerCase()}`);
    let datatype = languageOrDataType ? languageOrDataType.value : "";
    if (datatype === "") {
      if (typeof value === "boolean")
        datatype = xsd2.boolean;
      else if (typeof value === "number") {
        if (Number.isFinite(value))
          datatype = Number.isInteger(value) ? xsd2.integer : xsd2.double;
        else {
          datatype = xsd2.double;
          if (!Number.isNaN(value))
            value = value > 0 ? "INF" : "-INF";
        }
      }
    }
    return datatype === "" || datatype === xsd2.string ? new Literal(`"${value}"`) : new Literal(`"${value}"^^${datatype}`);
  }
  function variable(name2) {
    return new Variable(name2);
  }
  function defaultGraph() {
    return DEFAULTGRAPH;
  }
  function quad(subject, predicate, object, graph) {
    return new Quad(subject, predicate, object, graph);
  }
  function fromTerm(term) {
    if (term instanceof Term)
      return term;
    switch (term.termType) {
      case "NamedNode":
        return namedNode(term.value);
      case "BlankNode":
        return blankNode(term.value);
      case "Variable":
        return variable(term.value);
      case "DefaultGraph":
        return DEFAULTGRAPH;
      case "Literal":
        return literal(term.value, term.language || term.datatype);
      case "Quad":
        return fromQuad(term);
      default:
        throw new Error(`Unexpected termType: ${term.termType}`);
    }
  }
  function fromQuad(inQuad) {
    if (inQuad instanceof Quad)
      return inQuad;
    if (inQuad.termType !== "Quad")
      throw new Error(`Unexpected termType: ${inQuad.termType}`);
    return quad(fromTerm(inQuad.subject), fromTerm(inQuad.predicate), fromTerm(inQuad.object), fromTerm(inQuad.graph));
  }

  // node_modules/n3/src/N3Parser.js
  var blankNodePrefix = 0;
  var N3Parser = class {
    constructor(options) {
      this._contextStack = [];
      this._graph = null;
      options = options || {};
      this._setBase(options.baseIRI);
      options.factory && initDataFactory(this, options.factory);
      const format = typeof options.format === "string" ? options.format.match(/\w*$/)[0].toLowerCase() : "", isTurtle = /turtle/.test(format), isTriG = /trig/.test(format), isNTriples = /triple/.test(format), isNQuads = /quad/.test(format), isN3 = this._n3Mode = /n3/.test(format), isLineMode = isNTriples || isNQuads;
      if (!(this._supportsNamedGraphs = !(isTurtle || isN3)))
        this._readPredicateOrNamedGraph = this._readPredicate;
      this._supportsQuads = !(isTurtle || isTriG || isNTriples || isN3);
      this._supportsRDFStar = format === "" || /star|\*$/.test(format);
      if (isLineMode)
        this._resolveRelativeIRI = (iri) => {
          return null;
        };
      this._blankNodePrefix = typeof options.blankNodePrefix !== "string" ? "" : options.blankNodePrefix.replace(/^(?!_:)/, "_:");
      this._lexer = options.lexer || new N3Lexer({ lineMode: isLineMode, n3: isN3 });
      this._explicitQuantifiers = !!options.explicitQuantifiers;
    }
    // ## Static class methods
    // ### `_resetBlankNodePrefix` restarts blank node prefix identification
    static _resetBlankNodePrefix() {
      blankNodePrefix = 0;
    }
    // ## Private methods
    // ### `_setBase` sets the base IRI to resolve relative IRIs
    _setBase(baseIRI) {
      if (!baseIRI) {
        this._base = "";
        this._basePath = "";
      } else {
        const fragmentPos = baseIRI.indexOf("#");
        if (fragmentPos >= 0)
          baseIRI = baseIRI.substr(0, fragmentPos);
        this._base = baseIRI;
        this._basePath = baseIRI.indexOf("/") < 0 ? baseIRI : baseIRI.replace(/[^\/?]*(?:\?.*)?$/, "");
        baseIRI = baseIRI.match(/^(?:([a-z][a-z0-9+.-]*:))?(?:\/\/[^\/]*)?/i);
        this._baseRoot = baseIRI[0];
        this._baseScheme = baseIRI[1];
      }
    }
    // ### `_saveContext` stores the current parsing context
    // when entering a new scope (list, blank node, formula)
    _saveContext(type, graph, subject, predicate, object) {
      const n3Mode = this._n3Mode;
      this._contextStack.push({
        type,
        subject,
        predicate,
        object,
        graph,
        inverse: n3Mode ? this._inversePredicate : false,
        blankPrefix: n3Mode ? this._prefixes._ : "",
        quantified: n3Mode ? this._quantified : null
      });
      if (n3Mode) {
        this._inversePredicate = false;
        this._prefixes._ = this._graph ? `${this._graph.value}.` : ".";
        this._quantified = Object.create(this._quantified);
      }
    }
    // ### `_restoreContext` restores the parent context
    // when leaving a scope (list, blank node, formula)
    _restoreContext(type, token) {
      const context = this._contextStack.pop();
      if (!context || context.type !== type)
        return this._error(`Unexpected ${token.type}`, token);
      this._subject = context.subject;
      this._predicate = context.predicate;
      this._object = context.object;
      this._graph = context.graph;
      if (this._n3Mode) {
        this._inversePredicate = context.inverse;
        this._prefixes._ = context.blankPrefix;
        this._quantified = context.quantified;
      }
    }
    // ### `_readInTopContext` reads a token when in the top context
    _readInTopContext(token) {
      switch (token.type) {
        // If an EOF token arrives in the top context, signal that we're done
        case "eof":
          if (this._graph !== null)
            return this._error("Unclosed graph", token);
          delete this._prefixes._;
          return this._callback(null, null, this._prefixes);
        // It could be a prefix declaration
        case "PREFIX":
          this._sparqlStyle = true;
        case "@prefix":
          return this._readPrefix;
        // It could be a base declaration
        case "BASE":
          this._sparqlStyle = true;
        case "@base":
          return this._readBaseIRI;
        // It could be a graph
        case "{":
          if (this._supportsNamedGraphs) {
            this._graph = "";
            this._subject = null;
            return this._readSubject;
          }
        case "GRAPH":
          if (this._supportsNamedGraphs)
            return this._readNamedGraphLabel;
        // Otherwise, the next token must be a subject
        default:
          return this._readSubject(token);
      }
    }
    // ### `_readEntity` reads an IRI, prefixed name, blank node, or variable
    _readEntity(token, quantifier) {
      let value;
      switch (token.type) {
        // Read a relative or absolute IRI
        case "IRI":
        case "typeIRI":
          const iri = this._resolveIRI(token.value);
          if (iri === null)
            return this._error("Invalid IRI", token);
          value = this._namedNode(iri);
          break;
        // Read a prefixed name
        case "type":
        case "prefixed":
          const prefix = this._prefixes[token.prefix];
          if (prefix === void 0)
            return this._error(`Undefined prefix "${token.prefix}:"`, token);
          value = this._namedNode(prefix + token.value);
          break;
        // Read a blank node
        case "blank":
          value = this._blankNode(this._prefixes[token.prefix] + token.value);
          break;
        // Read a variable
        case "var":
          value = this._variable(token.value.substr(1));
          break;
        // Everything else is not an entity
        default:
          return this._error(`Expected entity but got ${token.type}`, token);
      }
      if (!quantifier && this._n3Mode && value.id in this._quantified)
        value = this._quantified[value.id];
      return value;
    }
    // ### `_readSubject` reads a quad's subject
    _readSubject(token) {
      this._predicate = null;
      switch (token.type) {
        case "[":
          this._saveContext(
            "blank",
            this._graph,
            this._subject = this._blankNode(),
            null,
            null
          );
          return this._readBlankNodeHead;
        case "(":
          this._saveContext("list", this._graph, this.RDF_NIL, null, null);
          this._subject = null;
          return this._readListItem;
        case "{":
          if (!this._n3Mode)
            return this._error("Unexpected graph", token);
          this._saveContext(
            "formula",
            this._graph,
            this._graph = this._blankNode(),
            null,
            null
          );
          return this._readSubject;
        case "}":
          return this._readPunctuation(token);
        case "@forSome":
          if (!this._n3Mode)
            return this._error('Unexpected "@forSome"', token);
          this._subject = null;
          this._predicate = this.N3_FORSOME;
          this._quantifier = this._blankNode;
          return this._readQuantifierList;
        case "@forAll":
          if (!this._n3Mode)
            return this._error('Unexpected "@forAll"', token);
          this._subject = null;
          this._predicate = this.N3_FORALL;
          this._quantifier = this._variable;
          return this._readQuantifierList;
        case "literal":
          if (!this._n3Mode)
            return this._error("Unexpected literal", token);
          if (token.prefix.length === 0) {
            this._literalValue = token.value;
            return this._completeSubjectLiteral;
          } else
            this._subject = this._literal(token.value, this._namedNode(token.prefix));
          break;
        case "<<":
          if (!this._supportsRDFStar)
            return this._error("Unexpected RDF-star syntax", token);
          this._saveContext("<<", this._graph, null, null, null);
          this._graph = null;
          return this._readSubject;
        default:
          if ((this._subject = this._readEntity(token)) === void 0)
            return;
          if (this._n3Mode)
            return this._getPathReader(this._readPredicateOrNamedGraph);
      }
      return this._readPredicateOrNamedGraph;
    }
    // ### `_readPredicate` reads a quad's predicate
    _readPredicate(token) {
      const type = token.type;
      switch (type) {
        case "inverse":
          this._inversePredicate = true;
        case "abbreviation":
          this._predicate = this.ABBREVIATIONS[token.value];
          break;
        case ".":
        case "]":
        case "}":
          if (this._predicate === null)
            return this._error(`Unexpected ${type}`, token);
          this._subject = null;
          return type === "]" ? this._readBlankNodeTail(token) : this._readPunctuation(token);
        case ";":
          return this._predicate !== null ? this._readPredicate : this._error("Expected predicate but got ;", token);
        case "[":
          if (this._n3Mode) {
            this._saveContext(
              "blank",
              this._graph,
              this._subject,
              this._subject = this._blankNode(),
              null
            );
            return this._readBlankNodeHead;
          }
        case "blank":
          if (!this._n3Mode)
            return this._error("Disallowed blank node as predicate", token);
        default:
          if ((this._predicate = this._readEntity(token)) === void 0)
            return;
      }
      return this._readObject;
    }
    // ### `_readObject` reads a quad's object
    _readObject(token) {
      switch (token.type) {
        case "literal":
          if (token.prefix.length === 0) {
            this._literalValue = token.value;
            return this._readDataTypeOrLang;
          } else
            this._object = this._literal(token.value, this._namedNode(token.prefix));
          break;
        case "[":
          this._saveContext(
            "blank",
            this._graph,
            this._subject,
            this._predicate,
            this._subject = this._blankNode()
          );
          return this._readBlankNodeHead;
        case "(":
          this._saveContext("list", this._graph, this._subject, this._predicate, this.RDF_NIL);
          this._subject = null;
          return this._readListItem;
        case "{":
          if (!this._n3Mode)
            return this._error("Unexpected graph", token);
          this._saveContext(
            "formula",
            this._graph,
            this._subject,
            this._predicate,
            this._graph = this._blankNode()
          );
          return this._readSubject;
        case "<<":
          if (!this._supportsRDFStar)
            return this._error("Unexpected RDF-star syntax", token);
          this._saveContext("<<", this._graph, this._subject, this._predicate, null);
          this._graph = null;
          return this._readSubject;
        default:
          if ((this._object = this._readEntity(token)) === void 0)
            return;
          if (this._n3Mode)
            return this._getPathReader(this._getContextEndReader());
      }
      return this._getContextEndReader();
    }
    // ### `_readPredicateOrNamedGraph` reads a quad's predicate, or a named graph
    _readPredicateOrNamedGraph(token) {
      return token.type === "{" ? this._readGraph(token) : this._readPredicate(token);
    }
    // ### `_readGraph` reads a graph
    _readGraph(token) {
      if (token.type !== "{")
        return this._error(`Expected graph but got ${token.type}`, token);
      this._graph = this._subject, this._subject = null;
      return this._readSubject;
    }
    // ### `_readBlankNodeHead` reads the head of a blank node
    _readBlankNodeHead(token) {
      if (token.type === "]") {
        this._subject = null;
        return this._readBlankNodeTail(token);
      } else {
        this._predicate = null;
        return this._readPredicate(token);
      }
    }
    // ### `_readBlankNodeTail` reads the end of a blank node
    _readBlankNodeTail(token) {
      if (token.type !== "]")
        return this._readBlankNodePunctuation(token);
      if (this._subject !== null)
        this._emit(this._subject, this._predicate, this._object, this._graph);
      const empty = this._predicate === null;
      this._restoreContext("blank", token);
      if (this._object !== null)
        return this._getContextEndReader();
      else if (this._predicate !== null)
        return this._readObject;
      else
        return empty ? this._readPredicateOrNamedGraph : this._readPredicateAfterBlank;
    }
    // ### `_readPredicateAfterBlank` reads a predicate after an anonymous blank node
    _readPredicateAfterBlank(token) {
      switch (token.type) {
        case ".":
        case "}":
          this._subject = null;
          return this._readPunctuation(token);
        default:
          return this._readPredicate(token);
      }
    }
    // ### `_readListItem` reads items from a list
    _readListItem(token) {
      let item = null, list = null, next = this._readListItem;
      const previousList = this._subject, stack = this._contextStack, parent = stack[stack.length - 1];
      switch (token.type) {
        case "[":
          this._saveContext(
            "blank",
            this._graph,
            list = this._blankNode(),
            this.RDF_FIRST,
            this._subject = item = this._blankNode()
          );
          next = this._readBlankNodeHead;
          break;
        case "(":
          this._saveContext(
            "list",
            this._graph,
            list = this._blankNode(),
            this.RDF_FIRST,
            this.RDF_NIL
          );
          this._subject = null;
          break;
        case ")":
          this._restoreContext("list", token);
          if (stack.length !== 0 && stack[stack.length - 1].type === "list")
            this._emit(this._subject, this._predicate, this._object, this._graph);
          if (this._predicate === null) {
            next = this._readPredicate;
            if (this._subject === this.RDF_NIL)
              return next;
          } else {
            next = this._getContextEndReader();
            if (this._object === this.RDF_NIL)
              return next;
          }
          list = this.RDF_NIL;
          break;
        case "literal":
          if (token.prefix.length === 0) {
            this._literalValue = token.value;
            next = this._readListItemDataTypeOrLang;
          } else {
            item = this._literal(token.value, this._namedNode(token.prefix));
            next = this._getContextEndReader();
          }
          break;
        case "{":
          if (!this._n3Mode)
            return this._error("Unexpected graph", token);
          this._saveContext(
            "formula",
            this._graph,
            this._subject,
            this._predicate,
            this._graph = this._blankNode()
          );
          return this._readSubject;
        default:
          if ((item = this._readEntity(token)) === void 0)
            return;
      }
      if (list === null)
        this._subject = list = this._blankNode();
      if (previousList === null) {
        if (parent.predicate === null)
          parent.subject = list;
        else
          parent.object = list;
      } else {
        this._emit(previousList, this.RDF_REST, list, this._graph);
      }
      if (item !== null) {
        if (this._n3Mode && (token.type === "IRI" || token.type === "prefixed")) {
          this._saveContext("item", this._graph, list, this.RDF_FIRST, item);
          this._subject = item, this._predicate = null;
          return this._getPathReader(this._readListItem);
        }
        this._emit(list, this.RDF_FIRST, item, this._graph);
      }
      return next;
    }
    // ### `_readDataTypeOrLang` reads an _optional_ datatype or language
    _readDataTypeOrLang(token) {
      return this._completeObjectLiteral(token, false);
    }
    // ### `_readListItemDataTypeOrLang` reads an _optional_ datatype or language in a list
    _readListItemDataTypeOrLang(token) {
      return this._completeObjectLiteral(token, true);
    }
    // ### `_completeLiteral` completes a literal with an optional datatype or language
    _completeLiteral(token) {
      let literal2 = this._literal(this._literalValue);
      switch (token.type) {
        // Create a datatyped literal
        case "type":
        case "typeIRI":
          const datatype = this._readEntity(token);
          if (datatype === void 0) return;
          literal2 = this._literal(this._literalValue, datatype);
          token = null;
          break;
        // Create a language-tagged string
        case "langcode":
          literal2 = this._literal(this._literalValue, token.value);
          token = null;
          break;
      }
      return { token, literal: literal2 };
    }
    // Completes a literal in subject position
    _completeSubjectLiteral(token) {
      this._subject = this._completeLiteral(token).literal;
      return this._readPredicateOrNamedGraph;
    }
    // Completes a literal in object position
    _completeObjectLiteral(token, listItem) {
      const completed = this._completeLiteral(token);
      if (!completed)
        return;
      this._object = completed.literal;
      if (listItem)
        this._emit(this._subject, this.RDF_FIRST, this._object, this._graph);
      if (completed.token === null)
        return this._getContextEndReader();
      else {
        this._readCallback = this._getContextEndReader();
        return this._readCallback(completed.token);
      }
    }
    // ### `_readFormulaTail` reads the end of a formula
    _readFormulaTail(token) {
      if (token.type !== "}")
        return this._readPunctuation(token);
      if (this._subject !== null)
        this._emit(this._subject, this._predicate, this._object, this._graph);
      this._restoreContext("formula", token);
      return this._object === null ? this._readPredicate : this._getContextEndReader();
    }
    // ### `_readPunctuation` reads punctuation between quads or quad parts
    _readPunctuation(token) {
      let next, graph = this._graph;
      const subject = this._subject, inversePredicate = this._inversePredicate;
      switch (token.type) {
        // A closing brace ends a graph
        case "}":
          if (this._graph === null)
            return this._error("Unexpected graph closing", token);
          if (this._n3Mode)
            return this._readFormulaTail(token);
          this._graph = null;
        // A dot just ends the statement, without sharing anything with the next
        case ".":
          this._subject = null;
          next = this._contextStack.length ? this._readSubject : this._readInTopContext;
          if (inversePredicate) this._inversePredicate = false;
          break;
        // Semicolon means the subject is shared; predicate and object are different
        case ";":
          next = this._readPredicate;
          break;
        // Comma means both the subject and predicate are shared; the object is different
        case ",":
          next = this._readObject;
          break;
        // {| means that the current triple is annotated with predicate-object pairs.
        case "{|":
          if (!this._supportsRDFStar)
            return this._error("Unexpected RDF-star syntax", token);
          const predicate = this._predicate, object = this._object;
          this._subject = this._quad(subject, predicate, object, this.DEFAULTGRAPH);
          next = this._readPredicate;
          break;
        // |} means that the current quoted triple in annotation syntax is finalized.
        case "|}":
          if (this._subject.termType !== "Quad")
            return this._error("Unexpected asserted triple closing", token);
          this._subject = null;
          next = this._readPunctuation;
          break;
        default:
          if (this._supportsQuads && this._graph === null && (graph = this._readEntity(token)) !== void 0) {
            next = this._readQuadPunctuation;
            break;
          }
          return this._error(`Expected punctuation to follow "${this._object.id}"`, token);
      }
      if (subject !== null) {
        const predicate = this._predicate, object = this._object;
        if (!inversePredicate)
          this._emit(subject, predicate, object, graph);
        else
          this._emit(object, predicate, subject, graph);
      }
      return next;
    }
    // ### `_readBlankNodePunctuation` reads punctuation in a blank node
    _readBlankNodePunctuation(token) {
      let next;
      switch (token.type) {
        // Semicolon means the subject is shared; predicate and object are different
        case ";":
          next = this._readPredicate;
          break;
        // Comma means both the subject and predicate are shared; the object is different
        case ",":
          next = this._readObject;
          break;
        default:
          return this._error(`Expected punctuation to follow "${this._object.id}"`, token);
      }
      this._emit(this._subject, this._predicate, this._object, this._graph);
      return next;
    }
    // ### `_readQuadPunctuation` reads punctuation after a quad
    _readQuadPunctuation(token) {
      if (token.type !== ".")
        return this._error("Expected dot to follow quad", token);
      return this._readInTopContext;
    }
    // ### `_readPrefix` reads the prefix of a prefix declaration
    _readPrefix(token) {
      if (token.type !== "prefix")
        return this._error("Expected prefix to follow @prefix", token);
      this._prefix = token.value;
      return this._readPrefixIRI;
    }
    // ### `_readPrefixIRI` reads the IRI of a prefix declaration
    _readPrefixIRI(token) {
      if (token.type !== "IRI")
        return this._error(`Expected IRI to follow prefix "${this._prefix}:"`, token);
      const prefixNode = this._readEntity(token);
      this._prefixes[this._prefix] = prefixNode.value;
      this._prefixCallback(this._prefix, prefixNode);
      return this._readDeclarationPunctuation;
    }
    // ### `_readBaseIRI` reads the IRI of a base declaration
    _readBaseIRI(token) {
      const iri = token.type === "IRI" && this._resolveIRI(token.value);
      if (!iri)
        return this._error("Expected valid IRI to follow base declaration", token);
      this._setBase(iri);
      return this._readDeclarationPunctuation;
    }
    // ### `_readNamedGraphLabel` reads the label of a named graph
    _readNamedGraphLabel(token) {
      switch (token.type) {
        case "IRI":
        case "blank":
        case "prefixed":
          return this._readSubject(token), this._readGraph;
        case "[":
          return this._readNamedGraphBlankLabel;
        default:
          return this._error("Invalid graph label", token);
      }
    }
    // ### `_readNamedGraphLabel` reads a blank node label of a named graph
    _readNamedGraphBlankLabel(token) {
      if (token.type !== "]")
        return this._error("Invalid graph label", token);
      this._subject = this._blankNode();
      return this._readGraph;
    }
    // ### `_readDeclarationPunctuation` reads the punctuation of a declaration
    _readDeclarationPunctuation(token) {
      if (this._sparqlStyle) {
        this._sparqlStyle = false;
        return this._readInTopContext(token);
      }
      if (token.type !== ".")
        return this._error("Expected declaration to end with a dot", token);
      return this._readInTopContext;
    }
    // Reads a list of quantified symbols from a @forSome or @forAll statement
    _readQuantifierList(token) {
      let entity;
      switch (token.type) {
        case "IRI":
        case "prefixed":
          if ((entity = this._readEntity(token, true)) !== void 0)
            break;
        default:
          return this._error(`Unexpected ${token.type}`, token);
      }
      if (!this._explicitQuantifiers)
        this._quantified[entity.id] = this._quantifier(this._blankNode().value);
      else {
        if (this._subject === null)
          this._emit(
            this._graph || this.DEFAULTGRAPH,
            this._predicate,
            this._subject = this._blankNode(),
            this.QUANTIFIERS_GRAPH
          );
        else
          this._emit(
            this._subject,
            this.RDF_REST,
            this._subject = this._blankNode(),
            this.QUANTIFIERS_GRAPH
          );
        this._emit(this._subject, this.RDF_FIRST, entity, this.QUANTIFIERS_GRAPH);
      }
      return this._readQuantifierPunctuation;
    }
    // Reads punctuation from a @forSome or @forAll statement
    _readQuantifierPunctuation(token) {
      if (token.type === ",")
        return this._readQuantifierList;
      else {
        if (this._explicitQuantifiers) {
          this._emit(this._subject, this.RDF_REST, this.RDF_NIL, this.QUANTIFIERS_GRAPH);
          this._subject = null;
        }
        this._readCallback = this._getContextEndReader();
        return this._readCallback(token);
      }
    }
    // ### `_getPathReader` reads a potential path and then resumes with the given function
    _getPathReader(afterPath) {
      this._afterPath = afterPath;
      return this._readPath;
    }
    // ### `_readPath` reads a potential path
    _readPath(token) {
      switch (token.type) {
        // Forward path
        case "!":
          return this._readForwardPath;
        // Backward path
        case "^":
          return this._readBackwardPath;
        // Not a path; resume reading where we left off
        default:
          const stack = this._contextStack, parent = stack.length && stack[stack.length - 1];
          if (parent && parent.type === "item") {
            const item = this._subject;
            this._restoreContext("item", token);
            this._emit(this._subject, this.RDF_FIRST, item, this._graph);
          }
          return this._afterPath(token);
      }
    }
    // ### `_readForwardPath` reads a '!' path
    _readForwardPath(token) {
      let subject, predicate;
      const object = this._blankNode();
      if ((predicate = this._readEntity(token)) === void 0)
        return;
      if (this._predicate === null)
        subject = this._subject, this._subject = object;
      else
        subject = this._object, this._object = object;
      this._emit(subject, predicate, object, this._graph);
      return this._readPath;
    }
    // ### `_readBackwardPath` reads a '^' path
    _readBackwardPath(token) {
      const subject = this._blankNode();
      let predicate, object;
      if ((predicate = this._readEntity(token)) === void 0)
        return;
      if (this._predicate === null)
        object = this._subject, this._subject = subject;
      else
        object = this._object, this._object = subject;
      this._emit(subject, predicate, object, this._graph);
      return this._readPath;
    }
    // ### `_readRDFStarTailOrGraph` reads the graph of a nested RDF-star quad or the end of a nested RDF-star triple
    _readRDFStarTailOrGraph(token) {
      if (token.type !== ">>") {
        if (this._supportsQuads && this._graph === null && (this._graph = this._readEntity(token)) !== void 0)
          return this._readRDFStarTail;
        return this._error(`Expected >> to follow "${this._object.id}"`, token);
      }
      return this._readRDFStarTail(token);
    }
    // ### `_readRDFStarTail` reads the end of a nested RDF-star triple
    _readRDFStarTail(token) {
      if (token.type !== ">>")
        return this._error(`Expected >> but got ${token.type}`, token);
      const quad2 = this._quad(
        this._subject,
        this._predicate,
        this._object,
        this._graph || this.DEFAULTGRAPH
      );
      this._restoreContext("<<", token);
      if (this._subject === null) {
        this._subject = quad2;
        return this._readPredicate;
      } else {
        this._object = quad2;
        return this._getContextEndReader();
      }
    }
    // ### `_getContextEndReader` gets the next reader function at the end of a context
    _getContextEndReader() {
      const contextStack = this._contextStack;
      if (!contextStack.length)
        return this._readPunctuation;
      switch (contextStack[contextStack.length - 1].type) {
        case "blank":
          return this._readBlankNodeTail;
        case "list":
          return this._readListItem;
        case "formula":
          return this._readFormulaTail;
        case "<<":
          return this._readRDFStarTailOrGraph;
      }
    }
    // ### `_emit` sends a quad through the callback
    _emit(subject, predicate, object, graph) {
      this._callback(null, this._quad(subject, predicate, object, graph || this.DEFAULTGRAPH));
    }
    // ### `_error` emits an error message through the callback
    _error(message2, token) {
      const err = new Error(`${message2} on line ${token.line}.`);
      err.context = {
        token,
        line: token.line,
        previousToken: this._lexer.previousToken
      };
      this._callback(err);
      this._callback = noop;
    }
    // ### `_resolveIRI` resolves an IRI against the base path
    _resolveIRI(iri) {
      return /^[a-z][a-z0-9+.-]*:/i.test(iri) ? iri : this._resolveRelativeIRI(iri);
    }
    // ### `_resolveRelativeIRI` resolves an IRI against the base path,
    // assuming that a base path has been set and that the IRI is indeed relative
    _resolveRelativeIRI(iri) {
      if (!iri.length)
        return this._base;
      switch (iri[0]) {
        // Resolve relative fragment IRIs against the base IRI
        case "#":
          return this._base + iri;
        // Resolve relative query string IRIs by replacing the query string
        case "?":
          return this._base.replace(/(?:\?.*)?$/, iri);
        // Resolve root-relative IRIs at the root of the base IRI
        case "/":
          return (iri[1] === "/" ? this._baseScheme : this._baseRoot) + this._removeDotSegments(iri);
        // Resolve all other IRIs at the base IRI's path
        default:
          return /^[^/:]*:/.test(iri) ? null : this._removeDotSegments(this._basePath + iri);
      }
    }
    // ### `_removeDotSegments` resolves './' and '../' path segments in an IRI as per RFC3986
    _removeDotSegments(iri) {
      if (!/(^|\/)\.\.?($|[/#?])/.test(iri))
        return iri;
      const length = iri.length;
      let result = "", i = -1, pathStart = -1, segmentStart = 0, next = "/";
      while (i < length) {
        switch (next) {
          // The path starts with the first slash after the authority
          case ":":
            if (pathStart < 0) {
              if (iri[++i] === "/" && iri[++i] === "/")
                while ((pathStart = i + 1) < length && iri[pathStart] !== "/")
                  i = pathStart;
            }
            break;
          // Don't modify a query string or fragment
          case "?":
          case "#":
            i = length;
            break;
          // Handle '/.' or '/..' path segments
          case "/":
            if (iri[i + 1] === ".") {
              next = iri[++i + 1];
              switch (next) {
                // Remove a '/.' segment
                case "/":
                  result += iri.substring(segmentStart, i - 1);
                  segmentStart = i + 1;
                  break;
                // Remove a trailing '/.' segment
                case void 0:
                case "?":
                case "#":
                  return result + iri.substring(segmentStart, i) + iri.substr(i + 1);
                // Remove a '/..' segment
                case ".":
                  next = iri[++i + 1];
                  if (next === void 0 || next === "/" || next === "?" || next === "#") {
                    result += iri.substring(segmentStart, i - 2);
                    if ((segmentStart = result.lastIndexOf("/")) >= pathStart)
                      result = result.substr(0, segmentStart);
                    if (next !== "/")
                      return `${result}/${iri.substr(i + 1)}`;
                    segmentStart = i + 1;
                  }
              }
            }
        }
        next = iri[++i];
      }
      return result + iri.substring(segmentStart);
    }
    // ## Public methods
    // ### `parse` parses the N3 input and emits each parsed quad through the onQuad callback.
    parse(input, quadCallback, prefixCallback) {
      let onQuad, onPrefix, onComment;
      if (quadCallback && (quadCallback.onQuad || quadCallback.onPrefix || quadCallback.onComment)) {
        onQuad = quadCallback.onQuad;
        onPrefix = quadCallback.onPrefix;
        onComment = quadCallback.onComment;
      } else {
        onQuad = quadCallback;
        onPrefix = prefixCallback;
      }
      this._readCallback = this._readInTopContext;
      this._sparqlStyle = false;
      this._prefixes = /* @__PURE__ */ Object.create(null);
      this._prefixes._ = this._blankNodePrefix ? this._blankNodePrefix.substr(2) : `b${blankNodePrefix++}_`;
      this._prefixCallback = onPrefix || noop;
      this._inversePredicate = false;
      this._quantified = /* @__PURE__ */ Object.create(null);
      if (!onQuad) {
        const quads = [];
        let error2;
        this._callback = (e, t) => {
          e ? error2 = e : t && quads.push(t);
        };
        this._lexer.tokenize(input).every((token) => {
          return this._readCallback = this._readCallback(token);
        });
        if (error2) throw error2;
        return quads;
      }
      let processNextToken = (error2, token) => {
        if (error2 !== null)
          this._callback(error2), this._callback = noop;
        else if (this._readCallback)
          this._readCallback = this._readCallback(token);
      };
      if (onComment) {
        this._lexer.comments = true;
        processNextToken = (error2, token) => {
          if (error2 !== null)
            this._callback(error2), this._callback = noop;
          else if (this._readCallback) {
            if (token.type === "comment")
              onComment(token.value);
            else
              this._readCallback = this._readCallback(token);
          }
        };
      }
      this._callback = onQuad;
      this._lexer.tokenize(input, processNextToken);
    }
  };
  function noop() {
  }
  function initDataFactory(parser, factory) {
    const namedNode2 = factory.namedNode;
    parser._namedNode = namedNode2;
    parser._blankNode = factory.blankNode;
    parser._literal = factory.literal;
    parser._variable = factory.variable;
    parser._quad = factory.quad;
    parser.DEFAULTGRAPH = factory.defaultGraph();
    parser.RDF_FIRST = namedNode2(IRIs_default.rdf.first);
    parser.RDF_REST = namedNode2(IRIs_default.rdf.rest);
    parser.RDF_NIL = namedNode2(IRIs_default.rdf.nil);
    parser.N3_FORALL = namedNode2(IRIs_default.r.forAll);
    parser.N3_FORSOME = namedNode2(IRIs_default.r.forSome);
    parser.ABBREVIATIONS = {
      "a": namedNode2(IRIs_default.rdf.type),
      "=": namedNode2(IRIs_default.owl.sameAs),
      ">": namedNode2(IRIs_default.log.implies)
    };
    parser.QUANTIFIERS_GRAPH = namedNode2("urn:n3:quantifiers");
  }
  initDataFactory(N3Parser.prototype, N3DataFactory_default);

  // src/jouwid.mjs
  var idpURL = "https://idp.dev.jouw.id";
  var remoteClient;
  var user;
  async function login2(options = {}) {
    const validOptions = {
      client_id: Required(String),
      client_secret: Required(String),
      redirect_url: Required(validURL),
      idpRedirect: Optional(instanceOf(Function)),
      silent: Optional(Boolean),
      keepLoggedIn: Optional(Boolean)
    };
    assert(options, validOptions);
    const defaultOptions = {
      silent: false,
      keepLoggedIn: true
    };
    options = Object.assign({}, defaultOptions, options);
    const info = await handleIncomingRedirect({
      restorePreviousSession: options.keepLoggedIn,
      onError: errorHandle
    });
    if (info?.webId) {
      user.webId = info.webId;
    }
    if (!remoteClient) {
      remoteClient = getDefaultSession();
      if (remoteClient?.info?.webId) {
        user.webId = remoteClient.info.webId;
      }
    }
    if (!user.webId && !options.silent) {
      if (options.idpRedirect) {
        options.idpRedirect();
      } else {
        login({
          redirectUrl: options.redirect_url,
          oidcIssuer: idpURL,
          clientId: options.client_id,
          clientSecret: options.client_secret
        });
      }
    }
    return user;
  }
  function isLoggedIn2(options = {}) {
    const validOptions = {
      keepLoggedIn: Optional(Boolean)
    };
    assert(options, validOptions);
    if (!remoteClient) {
      remoteClient = getDefaultSession();
    }
    return remoteClient.isLoggedIn;
  }
  async function logout2(options) {
    const defaultOptions = {
      redirect_url: "/"
    };
    const validOptions = {
      redirect_url: Optional(oneOf(validURL, validRelativeURL))
    };
    assert(options, validOptions);
    options = Object.assign({}, defaultOptions, options);
    if (isLoggedIn2()) {
      logout();
      if (options.redirect_url) {
        window.location = options.redirect_url;
      }
    }
  }
  async function getProtectedResource(options) {
    const defaultOptions = {};
    const validOptions = {
      resourcePath: Required(String)
    };
    assert(options, validOptions);
    options = Object.assign({}, defaultOptions, options);
    if (remoteClient && user?.webId) {
      const profile = await fetch$1(user.webId);
      const pod = getPod(profile, MASTER_POD_ALIAS);
      const response = await fetch$1(new URL(options.resourcePath, pod).href);
      const contentType = response.heading.get("content-type");
      if (contentType.match(/^application\/(.*\+)?json/)) {
        return response.json();
      } else if (contentType.match(/^text\//)) {
        return response.text();
      } else {
        return response.blob();
      }
    }
    return false;
  }
  var validRelativeURL = (url) => {
    let base = new URL("/", window.location.href);
    return validURL(base.href + url);
  };
  function getPod(profile, podAlias) {
    const parser = new N3Parser();
    let pod = null;
    parser.parse(profile, (error2, quad2) => {
      if (quad2.predicate.value == "http://www.w3.org/ns/pim/space#storage") {
        pod = quad2.object.value;
      }
    });
    return pod;
  }

  // src/browser.mjs
  globalThis.jouwid = {
    login: login2,
    isLoggedIn: isLoggedIn2,
    logout: logout2,
    getProtectedResource
  };
})();
/*! Bundled license information:

@jspm/core/nodelibs/browser/chunk-DtuTasat.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

@inrupt/oidc-client/lib/oidc-client.min.js:
  (*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
   *)
  (*! Mike Samuel (c) 2009 | code.google.com/p/json-sans-eval
   *)
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <http://feross.org>
   * @license  MIT
   *)
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

queue-microtask/index.js:
  (*! queue-microtask. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)
*/
//# sourceMappingURL=bundle-dev.js.map

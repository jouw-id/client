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
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
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
  var process_exports = {};
  __export(process_exports, {
    _debugEnd: () => _debugEnd,
    _debugProcess: () => _debugProcess,
    _events: () => _events,
    _eventsCount: () => _eventsCount,
    _exiting: () => _exiting,
    _fatalExceptions: () => _fatalExceptions,
    _getActiveHandles: () => _getActiveHandles,
    _getActiveRequests: () => _getActiveRequests,
    _kill: () => _kill,
    _linkedBinding: () => _linkedBinding,
    _maxListeners: () => _maxListeners,
    _preload_modules: () => _preload_modules,
    _rawDebug: () => _rawDebug,
    _startProfilerIdleNotifier: () => _startProfilerIdleNotifier,
    _stopProfilerIdleNotifier: () => _stopProfilerIdleNotifier,
    _tickCallback: () => _tickCallback,
    abort: () => abort,
    addListener: () => addListener,
    allowedNodeEnvironmentFlags: () => allowedNodeEnvironmentFlags,
    arch: () => arch,
    argv: () => argv,
    argv0: () => argv0,
    assert: () => assert,
    binding: () => binding,
    browser: () => browser,
    chdir: () => chdir,
    config: () => config,
    cpuUsage: () => cpuUsage,
    cwd: () => cwd,
    debugPort: () => debugPort,
    default: () => process,
    dlopen: () => dlopen,
    domain: () => domain,
    emit: () => emit,
    emitWarning: () => emitWarning,
    env: () => env,
    execArgv: () => execArgv,
    execPath: () => execPath,
    exit: () => exit,
    features: () => features,
    hasUncaughtExceptionCaptureCallback: () => hasUncaughtExceptionCaptureCallback,
    hrtime: () => hrtime,
    kill: () => kill,
    listeners: () => listeners,
    memoryUsage: () => memoryUsage,
    moduleLoadList: () => moduleLoadList,
    nextTick: () => nextTick,
    off: () => off,
    on: () => on,
    once: () => once,
    openStdin: () => openStdin,
    pid: () => pid,
    platform: () => platform,
    ppid: () => ppid,
    prependListener: () => prependListener,
    prependOnceListener: () => prependOnceListener,
    reallyExit: () => reallyExit,
    release: () => release,
    removeAllListeners: () => removeAllListeners,
    removeListener: () => removeListener,
    resourceUsage: () => resourceUsage,
    setSourceMapsEnabled: () => setSourceMapsEnabled,
    setUncaughtExceptionCaptureCallback: () => setUncaughtExceptionCaptureCallback,
    stderr: () => stderr,
    stdin: () => stdin,
    stdout: () => stdout,
    title: () => title,
    umask: () => umask,
    uptime: () => uptime,
    version: () => version,
    versions: () => versions
  });
  function unimplemented(name) {
    throw new Error("Node.js process " + name + " is not supported by JSPM core outside of Node.js");
  }
  function cleanUpNextTick() {
    if (!draining || !currentQueue)
      return;
    draining = false;
    if (currentQueue.length) {
      queue = currentQueue.concat(queue);
    } else {
      queueIndex = -1;
    }
    if (queue.length)
      drainQueue();
  }
  function drainQueue() {
    if (draining)
      return;
    var timeout = setTimeout(cleanUpNextTick, 0);
    draining = true;
    var len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len) {
        if (currentQueue)
          currentQueue[queueIndex].run();
      }
      queueIndex = -1;
      len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
  }
  function nextTick(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; i++)
        args[i - 1] = arguments[i];
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining)
      setTimeout(drainQueue, 0);
  }
  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }
  function noop() {
  }
  function _linkedBinding(name) {
    unimplemented("_linkedBinding");
  }
  function dlopen(name) {
    unimplemented("dlopen");
  }
  function _getActiveRequests() {
    return [];
  }
  function _getActiveHandles() {
    return [];
  }
  function assert(condition, message) {
    if (!condition) throw new Error(message || "assertion error");
  }
  function hasUncaughtExceptionCaptureCallback() {
    return false;
  }
  function uptime() {
    return _performance.now() / 1e3;
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
  function on() {
    return process;
  }
  function listeners(name) {
    return [];
  }
  var queue, draining, currentQueue, queueIndex, title, arch, platform, env, argv, execArgv, version, versions, emitWarning, binding, umask, cwd, chdir, release, browser, _rawDebug, moduleLoadList, domain, _exiting, config, reallyExit, _kill, cpuUsage, resourceUsage, memoryUsage, kill, exit, openStdin, allowedNodeEnvironmentFlags, features, _fatalExceptions, setUncaughtExceptionCaptureCallback, _tickCallback, _debugProcess, _debugEnd, _startProfilerIdleNotifier, _stopProfilerIdleNotifier, stdout, stderr, stdin, abort, pid, ppid, execPath, debugPort, argv0, _preload_modules, setSourceMapsEnabled, _performance, nowOffset, nanoPerSec, _maxListeners, _events, _eventsCount, addListener, once, off, removeListener, removeAllListeners, emit, prependListener, prependOnceListener, process;
  var init_process = __esm({
    "node_modules/@jspm/core/nodelibs/browser/process.js"() {
      init_dirname();
      init_buffer2();
      init_process2();
      queue = [];
      draining = false;
      queueIndex = -1;
      Item.prototype.run = function() {
        this.fun.apply(null, this.array);
      };
      title = "browser";
      arch = "x64";
      platform = "browser";
      env = {
        PATH: "/usr/bin",
        LANG: typeof navigator !== "undefined" ? navigator.language + ".UTF-8" : void 0,
        PWD: "/",
        HOME: "/home",
        TMP: "/tmp"
      };
      argv = ["/usr/bin/node"];
      execArgv = [];
      version = "v16.8.0";
      versions = {};
      emitWarning = function(message, type) {
        console.warn((type ? type + ": " : "") + message);
      };
      binding = function(name) {
        unimplemented("binding");
      };
      umask = function(mask) {
        return 0;
      };
      cwd = function() {
        return "/";
      };
      chdir = function(dir) {
      };
      release = {
        name: "node",
        sourceUrl: "",
        headersUrl: "",
        libUrl: ""
      };
      browser = true;
      _rawDebug = noop;
      moduleLoadList = [];
      domain = {};
      _exiting = false;
      config = {};
      reallyExit = noop;
      _kill = noop;
      cpuUsage = function() {
        return {};
      };
      resourceUsage = cpuUsage;
      memoryUsage = cpuUsage;
      kill = noop;
      exit = noop;
      openStdin = noop;
      allowedNodeEnvironmentFlags = {};
      features = {
        inspector: false,
        debug: false,
        uv: false,
        ipv6: false,
        tls_alpn: false,
        tls_sni: false,
        tls_ocsp: false,
        tls: false,
        cached_builtins: true
      };
      _fatalExceptions = noop;
      setUncaughtExceptionCaptureCallback = noop;
      _tickCallback = noop;
      _debugProcess = noop;
      _debugEnd = noop;
      _startProfilerIdleNotifier = noop;
      _stopProfilerIdleNotifier = noop;
      stdout = void 0;
      stderr = void 0;
      stdin = void 0;
      abort = noop;
      pid = 2;
      ppid = 1;
      execPath = "/bin/usr/node";
      debugPort = 9229;
      argv0 = "node";
      _preload_modules = [];
      setSourceMapsEnabled = noop;
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
      _maxListeners = 10;
      _events = {};
      _eventsCount = 0;
      addListener = on;
      once = on;
      off = on;
      removeListener = on;
      removeAllListeners = on;
      emit = noop;
      prependListener = on;
      prependOnceListener = on;
      process = {
        version,
        versions,
        arch,
        platform,
        browser,
        release,
        _rawDebug,
        moduleLoadList,
        binding,
        _linkedBinding,
        _events,
        _eventsCount,
        _maxListeners,
        on,
        addListener,
        once,
        off,
        removeListener,
        removeAllListeners,
        emit,
        prependListener,
        prependOnceListener,
        listeners,
        domain,
        _exiting,
        config,
        dlopen,
        uptime,
        _getActiveRequests,
        _getActiveHandles,
        reallyExit,
        _kill,
        cpuUsage,
        resourceUsage,
        memoryUsage,
        kill,
        exit,
        openStdin,
        allowedNodeEnvironmentFlags,
        assert,
        features,
        _fatalExceptions,
        setUncaughtExceptionCaptureCallback,
        hasUncaughtExceptionCaptureCallback,
        emitWarning,
        nextTick,
        _tickCallback,
        _debugProcess,
        _debugEnd,
        _startProfilerIdleNotifier,
        _stopProfilerIdleNotifier,
        stdout,
        stdin,
        stderr,
        abort,
        umask,
        chdir,
        cwd,
        env,
        title,
        argv,
        execArgv,
        pid,
        ppid,
        execPath,
        debugPort,
        hrtime,
        argv0,
        _preload_modules,
        setSourceMapsEnabled
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
      var e2, m;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i = isLE ? nBytes - 1 : 0;
      var d = isLE ? -1 : 1;
      var s = buffer[offset + i];
      i += d;
      e2 = s & (1 << -nBits) - 1;
      s >>= -nBits;
      nBits += eLen;
      for (; nBits > 0; e2 = e2 * 256 + buffer[offset + i], i += d, nBits -= 8) {
      }
      m = e2 & (1 << -nBits) - 1;
      e2 >>= -nBits;
      nBits += mLen;
      for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {
      }
      if (e2 === 0) {
        e2 = 1 - eBias;
      } else if (e2 === eMax) {
        return m ? NaN : (s ? -1 : 1) * Infinity;
      } else {
        m = m + Math.pow(2, mLen);
        e2 = e2 - eBias;
      }
      return (s ? -1 : 1) * m * Math.pow(2, e2 - mLen);
    };
    exports$1.write = function(buffer, value, offset, isLE, mLen, nBytes) {
      var e2, m, c;
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
        e2 = eMax;
      } else {
        e2 = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e2)) < 1) {
          e2--;
          c *= 2;
        }
        if (e2 + eBias >= 1) {
          value += rt / c;
        } else {
          value += rt * Math.pow(2, 1 - eBias);
        }
        if (value * c >= 2) {
          e2++;
          c /= 2;
        }
        if (e2 + eBias >= eMax) {
          m = 0;
          e2 = eMax;
        } else if (e2 + eBias >= 1) {
          m = (value * c - 1) * Math.pow(2, mLen);
          e2 = e2 + eBias;
        } else {
          m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e2 = 0;
        }
      }
      for (; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
      }
      e2 = e2 << mLen | m;
      eLen += mLen;
      for (; eLen > 0; buffer[offset + i] = e2 & 255, i += d, e2 /= 256, eLen -= 8) {
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
      } catch (e2) {
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
    Buffer3.concat = function concat(list, length) {
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
    function swap(b, n2, m) {
      const i = b[n2];
      b[n2] = b[m];
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
    E("ERR_BUFFER_OUT_OF_BOUNDS", function(name) {
      if (name) {
        return `${name} is outside of buffer bounds`;
      }
      return "Attempt to access memory outside buffer bounds";
    }, RangeError);
    E("ERR_INVALID_ARG_TYPE", function(name, actual) {
      return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
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
        const n2 = typeof min === "bigint" ? "n" : "";
        let range;
        {
          if (min === 0 || min === BigInt(0)) {
            range = `>= 0${n2} and < 2${n2} ** ${(byteLength2 + 1) * 8}${n2}`;
          } else {
            range = `>= -(2${n2} ** ${(byteLength2 + 1) * 8 - 1}${n2}) and < 2 ** ${(byteLength2 + 1) * 8 - 1}${n2}`;
          }
        }
        throw new errors.ERR_OUT_OF_RANGE("value", range, value);
      }
      checkBounds(buf, offset, byteLength2);
    }
    function validateNumber(value, name) {
      if (typeof value !== "number") {
        throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
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

  // node_modules/cross-fetch/dist/browser-ponyfill.js
  var require_browser_ponyfill = __commonJS({
    "node_modules/cross-fetch/dist/browser-ponyfill.js"(exports3, module) {
      init_dirname();
      init_buffer2();
      init_process2();
      var global2 = typeof self !== "undefined" ? self : exports3;
      var __self__ = function() {
        function F() {
          this.fetch = false;
          this.DOMException = global2.DOMException;
        }
        F.prototype = global2;
        return new F();
      }();
      (function(self2) {
        var irrelevant = function(exports4) {
          var support = {
            searchParams: "URLSearchParams" in self2,
            iterable: "Symbol" in self2 && "iterator" in Symbol,
            blob: "FileReader" in self2 && "Blob" in self2 && function() {
              try {
                new Blob();
                return true;
              } catch (e2) {
                return false;
              }
            }(),
            formData: "FormData" in self2,
            arrayBuffer: "ArrayBuffer" in self2
          };
          function isDataView(obj) {
            return obj && DataView.prototype.isPrototypeOf(obj);
          }
          if (support.arrayBuffer) {
            var viewClasses = [
              "[object Int8Array]",
              "[object Uint8Array]",
              "[object Uint8ClampedArray]",
              "[object Int16Array]",
              "[object Uint16Array]",
              "[object Int32Array]",
              "[object Uint32Array]",
              "[object Float32Array]",
              "[object Float64Array]"
            ];
            var isArrayBufferView = ArrayBuffer.isView || function(obj) {
              return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
            };
          }
          function normalizeName(name) {
            if (typeof name !== "string") {
              name = String(name);
            }
            if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
              throw new TypeError("Invalid character in header field name");
            }
            return name.toLowerCase();
          }
          function normalizeValue(value) {
            if (typeof value !== "string") {
              value = String(value);
            }
            return value;
          }
          function iteratorFor(items) {
            var iterator = {
              next: function() {
                var value = items.shift();
                return { done: value === void 0, value };
              }
            };
            if (support.iterable) {
              iterator[Symbol.iterator] = function() {
                return iterator;
              };
            }
            return iterator;
          }
          function Headers(headers) {
            this.map = {};
            if (headers instanceof Headers) {
              headers.forEach(function(value, name) {
                this.append(name, value);
              }, this);
            } else if (Array.isArray(headers)) {
              headers.forEach(function(header) {
                this.append(header[0], header[1]);
              }, this);
            } else if (headers) {
              Object.getOwnPropertyNames(headers).forEach(function(name) {
                this.append(name, headers[name]);
              }, this);
            }
          }
          Headers.prototype.append = function(name, value) {
            name = normalizeName(name);
            value = normalizeValue(value);
            var oldValue = this.map[name];
            this.map[name] = oldValue ? oldValue + ", " + value : value;
          };
          Headers.prototype["delete"] = function(name) {
            delete this.map[normalizeName(name)];
          };
          Headers.prototype.get = function(name) {
            name = normalizeName(name);
            return this.has(name) ? this.map[name] : null;
          };
          Headers.prototype.has = function(name) {
            return this.map.hasOwnProperty(normalizeName(name));
          };
          Headers.prototype.set = function(name, value) {
            this.map[normalizeName(name)] = normalizeValue(value);
          };
          Headers.prototype.forEach = function(callback, thisArg) {
            for (var name in this.map) {
              if (this.map.hasOwnProperty(name)) {
                callback.call(thisArg, this.map[name], name, this);
              }
            }
          };
          Headers.prototype.keys = function() {
            var items = [];
            this.forEach(function(value, name) {
              items.push(name);
            });
            return iteratorFor(items);
          };
          Headers.prototype.values = function() {
            var items = [];
            this.forEach(function(value) {
              items.push(value);
            });
            return iteratorFor(items);
          };
          Headers.prototype.entries = function() {
            var items = [];
            this.forEach(function(value, name) {
              items.push([name, value]);
            });
            return iteratorFor(items);
          };
          if (support.iterable) {
            Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
          }
          function consumed(body) {
            if (body.bodyUsed) {
              return Promise.reject(new TypeError("Already read"));
            }
            body.bodyUsed = true;
          }
          function fileReaderReady(reader) {
            return new Promise(function(resolve, reject) {
              reader.onload = function() {
                resolve(reader.result);
              };
              reader.onerror = function() {
                reject(reader.error);
              };
            });
          }
          function readBlobAsArrayBuffer(blob) {
            var reader = new FileReader();
            var promise = fileReaderReady(reader);
            reader.readAsArrayBuffer(blob);
            return promise;
          }
          function readBlobAsText(blob) {
            var reader = new FileReader();
            var promise = fileReaderReady(reader);
            reader.readAsText(blob);
            return promise;
          }
          function readArrayBufferAsText(buf) {
            var view = new Uint8Array(buf);
            var chars = new Array(view.length);
            for (var i = 0; i < view.length; i++) {
              chars[i] = String.fromCharCode(view[i]);
            }
            return chars.join("");
          }
          function bufferClone(buf) {
            if (buf.slice) {
              return buf.slice(0);
            } else {
              var view = new Uint8Array(buf.byteLength);
              view.set(new Uint8Array(buf));
              return view.buffer;
            }
          }
          function Body() {
            this.bodyUsed = false;
            this._initBody = function(body) {
              this._bodyInit = body;
              if (!body) {
                this._bodyText = "";
              } else if (typeof body === "string") {
                this._bodyText = body;
              } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
                this._bodyBlob = body;
              } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
                this._bodyFormData = body;
              } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                this._bodyText = body.toString();
              } else if (support.arrayBuffer && support.blob && isDataView(body)) {
                this._bodyArrayBuffer = bufferClone(body.buffer);
                this._bodyInit = new Blob([this._bodyArrayBuffer]);
              } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
                this._bodyArrayBuffer = bufferClone(body);
              } else {
                this._bodyText = body = Object.prototype.toString.call(body);
              }
              if (!this.headers.get("content-type")) {
                if (typeof body === "string") {
                  this.headers.set("content-type", "text/plain;charset=UTF-8");
                } else if (this._bodyBlob && this._bodyBlob.type) {
                  this.headers.set("content-type", this._bodyBlob.type);
                } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                  this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
                }
              }
            };
            if (support.blob) {
              this.blob = function() {
                var rejected = consumed(this);
                if (rejected) {
                  return rejected;
                }
                if (this._bodyBlob) {
                  return Promise.resolve(this._bodyBlob);
                } else if (this._bodyArrayBuffer) {
                  return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                } else if (this._bodyFormData) {
                  throw new Error("could not read FormData body as blob");
                } else {
                  return Promise.resolve(new Blob([this._bodyText]));
                }
              };
              this.arrayBuffer = function() {
                if (this._bodyArrayBuffer) {
                  return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
                } else {
                  return this.blob().then(readBlobAsArrayBuffer);
                }
              };
            }
            this.text = function() {
              var rejected = consumed(this);
              if (rejected) {
                return rejected;
              }
              if (this._bodyBlob) {
                return readBlobAsText(this._bodyBlob);
              } else if (this._bodyArrayBuffer) {
                return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
              } else if (this._bodyFormData) {
                throw new Error("could not read FormData body as text");
              } else {
                return Promise.resolve(this._bodyText);
              }
            };
            if (support.formData) {
              this.formData = function() {
                return this.text().then(decode);
              };
            }
            this.json = function() {
              return this.text().then(JSON.parse);
            };
            return this;
          }
          var methods = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
          function normalizeMethod(method) {
            var upcased = method.toUpperCase();
            return methods.indexOf(upcased) > -1 ? upcased : method;
          }
          function Request(input, options) {
            options = options || {};
            var body = options.body;
            if (input instanceof Request) {
              if (input.bodyUsed) {
                throw new TypeError("Already read");
              }
              this.url = input.url;
              this.credentials = input.credentials;
              if (!options.headers) {
                this.headers = new Headers(input.headers);
              }
              this.method = input.method;
              this.mode = input.mode;
              this.signal = input.signal;
              if (!body && input._bodyInit != null) {
                body = input._bodyInit;
                input.bodyUsed = true;
              }
            } else {
              this.url = String(input);
            }
            this.credentials = options.credentials || this.credentials || "same-origin";
            if (options.headers || !this.headers) {
              this.headers = new Headers(options.headers);
            }
            this.method = normalizeMethod(options.method || this.method || "GET");
            this.mode = options.mode || this.mode || null;
            this.signal = options.signal || this.signal;
            this.referrer = null;
            if ((this.method === "GET" || this.method === "HEAD") && body) {
              throw new TypeError("Body not allowed for GET or HEAD requests");
            }
            this._initBody(body);
          }
          Request.prototype.clone = function() {
            return new Request(this, { body: this._bodyInit });
          };
          function decode(body) {
            var form = new FormData();
            body.trim().split("&").forEach(function(bytes) {
              if (bytes) {
                var split = bytes.split("=");
                var name = split.shift().replace(/\+/g, " ");
                var value = split.join("=").replace(/\+/g, " ");
                form.append(decodeURIComponent(name), decodeURIComponent(value));
              }
            });
            return form;
          }
          function parseHeaders(rawHeaders) {
            var headers = new Headers();
            var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
            preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
              var parts = line.split(":");
              var key = parts.shift().trim();
              if (key) {
                var value = parts.join(":").trim();
                headers.append(key, value);
              }
            });
            return headers;
          }
          Body.call(Request.prototype);
          function Response(bodyInit, options) {
            if (!options) {
              options = {};
            }
            this.type = "default";
            this.status = options.status === void 0 ? 200 : options.status;
            this.ok = this.status >= 200 && this.status < 300;
            this.statusText = "statusText" in options ? options.statusText : "OK";
            this.headers = new Headers(options.headers);
            this.url = options.url || "";
            this._initBody(bodyInit);
          }
          Body.call(Response.prototype);
          Response.prototype.clone = function() {
            return new Response(this._bodyInit, {
              status: this.status,
              statusText: this.statusText,
              headers: new Headers(this.headers),
              url: this.url
            });
          };
          Response.error = function() {
            var response = new Response(null, { status: 0, statusText: "" });
            response.type = "error";
            return response;
          };
          var redirectStatuses = [301, 302, 303, 307, 308];
          Response.redirect = function(url, status) {
            if (redirectStatuses.indexOf(status) === -1) {
              throw new RangeError("Invalid status code");
            }
            return new Response(null, { status, headers: { location: url } });
          };
          exports4.DOMException = self2.DOMException;
          try {
            new exports4.DOMException();
          } catch (err) {
            exports4.DOMException = function(message, name) {
              this.message = message;
              this.name = name;
              var error2 = Error(message);
              this.stack = error2.stack;
            };
            exports4.DOMException.prototype = Object.create(Error.prototype);
            exports4.DOMException.prototype.constructor = exports4.DOMException;
          }
          function fetch3(input, init) {
            return new Promise(function(resolve, reject) {
              var request = new Request(input, init);
              if (request.signal && request.signal.aborted) {
                return reject(new exports4.DOMException("Aborted", "AbortError"));
              }
              var xhr = new XMLHttpRequest();
              function abortXhr() {
                xhr.abort();
              }
              xhr.onload = function() {
                var options = {
                  status: xhr.status,
                  statusText: xhr.statusText,
                  headers: parseHeaders(xhr.getAllResponseHeaders() || "")
                };
                options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
                var body = "response" in xhr ? xhr.response : xhr.responseText;
                resolve(new Response(body, options));
              };
              xhr.onerror = function() {
                reject(new TypeError("Network request failed"));
              };
              xhr.ontimeout = function() {
                reject(new TypeError("Network request failed"));
              };
              xhr.onabort = function() {
                reject(new exports4.DOMException("Aborted", "AbortError"));
              };
              xhr.open(request.method, request.url, true);
              if (request.credentials === "include") {
                xhr.withCredentials = true;
              } else if (request.credentials === "omit") {
                xhr.withCredentials = false;
              }
              if ("responseType" in xhr && support.blob) {
                xhr.responseType = "blob";
              }
              request.headers.forEach(function(value, name) {
                xhr.setRequestHeader(name, value);
              });
              if (request.signal) {
                request.signal.addEventListener("abort", abortXhr);
                xhr.onreadystatechange = function() {
                  if (xhr.readyState === 4) {
                    request.signal.removeEventListener("abort", abortXhr);
                  }
                };
              }
              xhr.send(typeof request._bodyInit === "undefined" ? null : request._bodyInit);
            });
          }
          fetch3.polyfill = true;
          if (!self2.fetch) {
            self2.fetch = fetch3;
            self2.Headers = Headers;
            self2.Request = Request;
            self2.Response = Response;
          }
          exports4.Headers = Headers;
          exports4.Request = Request;
          exports4.Response = Response;
          exports4.fetch = fetch3;
          Object.defineProperty(exports4, "__esModule", { value: true });
          return exports4;
        }({});
      })(__self__);
      __self__.fetch.ponyfill = true;
      delete __self__.fetch.polyfill;
      var ctx = __self__;
      exports3 = ctx.fetch;
      exports3.default = ctx.fetch;
      exports3.fetch = ctx.fetch;
      exports3.Headers = ctx.Headers;
      exports3.Request = ctx.Request;
      exports3.Response = ctx.Response;
      module.exports = exports3;
    }
  });

  // node_modules/rdf-canonize/lib/IdentifierIssuer.js
  var require_IdentifierIssuer = __commonJS({
    "node_modules/rdf-canonize/lib/IdentifierIssuer.js"(exports3, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      module.exports = class IdentifierIssuer {
        /**
         * Creates a new IdentifierIssuer. A IdentifierIssuer issues unique
         * identifiers, keeping track of any previously issued identifiers.
         *
         * @param prefix the prefix to use ('<prefix><counter>').
         * @param existing an existing Map to use.
         * @param counter the counter to use.
         */
        constructor(prefix, existing = /* @__PURE__ */ new Map(), counter = 0) {
          this.prefix = prefix;
          this._existing = existing;
          this.counter = counter;
        }
        /**
         * Copies this IdentifierIssuer.
         *
         * @return a copy of this IdentifierIssuer.
         */
        clone() {
          const { prefix, _existing, counter } = this;
          return new IdentifierIssuer(prefix, new Map(_existing), counter);
        }
        /**
         * Gets the new identifier for the given old identifier, where if no old
         * identifier is given a new identifier will be generated.
         *
         * @param [old] the old identifier to get the new identifier for.
         *
         * @return the new identifier.
         */
        getId(old) {
          const existing = old && this._existing.get(old);
          if (existing) {
            return existing;
          }
          const identifier = this.prefix + this.counter;
          this.counter++;
          if (old) {
            this._existing.set(old, identifier);
          }
          return identifier;
        }
        /**
         * Returns true if the given old identifer has already been assigned a new
         * identifier.
         *
         * @param old the old identifier to check.
         *
         * @return true if the old identifier has been assigned a new identifier,
         *   false if not.
         */
        hasId(old) {
          return this._existing.has(old);
        }
        /**
         * Returns all of the IDs that have been issued new IDs in the order in
         * which they were issued new IDs.
         *
         * @return the list of old IDs that has been issued new IDs in order.
         */
        getOldIds() {
          return [...this._existing.keys()];
        }
      };
    }
  });

  // node_modules/setimmediate/setImmediate.js
  var require_setImmediate = __commonJS({
    "node_modules/setimmediate/setImmediate.js"(exports3) {
      init_dirname();
      init_buffer2();
      init_process2();
      (function(global2, undefined2) {
        "use strict";
        if (global2.setImmediate) {
          return;
        }
        var nextHandle = 1;
        var tasksByHandle = {};
        var currentlyRunningATask = false;
        var doc = global2.document;
        var registerImmediate;
        function setImmediate2(callback) {
          if (typeof callback !== "function") {
            callback = new Function("" + callback);
          }
          var args = new Array(arguments.length - 1);
          for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i + 1];
          }
          var task = { callback, args };
          tasksByHandle[nextHandle] = task;
          registerImmediate(nextHandle);
          return nextHandle++;
        }
        function clearImmediate(handle) {
          delete tasksByHandle[handle];
        }
        function run(task) {
          var callback = task.callback;
          var args = task.args;
          switch (args.length) {
            case 0:
              callback();
              break;
            case 1:
              callback(args[0]);
              break;
            case 2:
              callback(args[0], args[1]);
              break;
            case 3:
              callback(args[0], args[1], args[2]);
              break;
            default:
              callback.apply(undefined2, args);
              break;
          }
        }
        function runIfPresent(handle) {
          if (currentlyRunningATask) {
            setTimeout(runIfPresent, 0, handle);
          } else {
            var task = tasksByHandle[handle];
            if (task) {
              currentlyRunningATask = true;
              try {
                run(task);
              } finally {
                clearImmediate(handle);
                currentlyRunningATask = false;
              }
            }
          }
        }
        function installNextTickImplementation() {
          registerImmediate = function(handle) {
            process_exports.nextTick(function() {
              runIfPresent(handle);
            });
          };
        }
        function canUsePostMessage() {
          if (global2.postMessage && !global2.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global2.onmessage;
            global2.onmessage = function() {
              postMessageIsAsynchronous = false;
            };
            global2.postMessage("", "*");
            global2.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
          }
        }
        function installPostMessageImplementation() {
          var messagePrefix = "setImmediate$" + Math.random() + "$";
          var onGlobalMessage = function(event) {
            if (event.source === global2 && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
              runIfPresent(+event.data.slice(messagePrefix.length));
            }
          };
          if (global2.addEventListener) {
            global2.addEventListener("message", onGlobalMessage, false);
          } else {
            global2.attachEvent("onmessage", onGlobalMessage);
          }
          registerImmediate = function(handle) {
            global2.postMessage(messagePrefix + handle, "*");
          };
        }
        function installMessageChannelImplementation() {
          var channel = new MessageChannel();
          channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
          };
          registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
          };
        }
        function installReadyStateChangeImplementation() {
          var html = doc.documentElement;
          registerImmediate = function(handle) {
            var script = doc.createElement("script");
            script.onreadystatechange = function() {
              runIfPresent(handle);
              script.onreadystatechange = null;
              html.removeChild(script);
              script = null;
            };
            html.appendChild(script);
          };
        }
        function installSetTimeoutImplementation() {
          registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
          };
        }
        var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global2);
        attachTo = attachTo && attachTo.setTimeout ? attachTo : global2;
        if ({}.toString.call(global2.process) === "[object process]") {
          installNextTickImplementation();
        } else if (canUsePostMessage()) {
          installPostMessageImplementation();
        } else if (global2.MessageChannel) {
          installMessageChannelImplementation();
        } else if (doc && "onreadystatechange" in doc.createElement("script")) {
          installReadyStateChangeImplementation();
        } else {
          installSetTimeoutImplementation();
        }
        attachTo.setImmediate = setImmediate2;
        attachTo.clearImmediate = clearImmediate;
      })(typeof self === "undefined" ? typeof global === "undefined" ? exports3 : global : self);
    }
  });

  // node_modules/rdf-canonize/lib/MessageDigest-browser.js
  var require_MessageDigest_browser = __commonJS({
    "node_modules/rdf-canonize/lib/MessageDigest-browser.js"(exports3, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      require_setImmediate();
      var crypto = self.crypto || self.msCrypto;
      module.exports = class MessageDigest {
        /**
         * Creates a new MessageDigest.
         *
         * @param algorithm the algorithm to use.
         */
        constructor(algorithm) {
          if (!(crypto && crypto.subtle)) {
            throw new Error("crypto.subtle not found.");
          }
          if (algorithm === "sha256") {
            this.algorithm = { name: "SHA-256" };
          } else if (algorithm === "sha1") {
            this.algorithm = { name: "SHA-1" };
          } else {
            throw new Error(`Unsupported algorithm "${algorithm}".`);
          }
          this._content = "";
        }
        update(msg) {
          this._content += msg;
        }
        async digest() {
          const data = new TextEncoder().encode(this._content);
          const buffer = new Uint8Array(
            await crypto.subtle.digest(this.algorithm, data)
          );
          let hex = "";
          for (let i = 0; i < buffer.length; ++i) {
            hex += buffer[i].toString(16).padStart(2, "0");
          }
          return hex;
        }
      };
    }
  });

  // node_modules/rdf-canonize/lib/Permuter.js
  var require_Permuter = __commonJS({
    "node_modules/rdf-canonize/lib/Permuter.js"(exports3, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      module.exports = class Permuter {
        /**
         * A Permuter iterates over all possible permutations of the given array
         * of elements.
         *
         * @param list the array of elements to iterate over.
         */
        constructor(list) {
          this.current = list.sort();
          this.done = false;
          this.dir = /* @__PURE__ */ new Map();
          for (let i = 0; i < list.length; ++i) {
            this.dir.set(list[i], true);
          }
        }
        /**
         * Returns true if there is another permutation.
         *
         * @return true if there is another permutation, false if not.
         */
        hasNext() {
          return !this.done;
        }
        /**
         * Gets the next permutation. Call hasNext() to ensure there is another one
         * first.
         *
         * @return the next permutation.
         */
        next() {
          const { current, dir } = this;
          const rval = current.slice();
          let k = null;
          let pos = 0;
          const length = current.length;
          for (let i = 0; i < length; ++i) {
            const element = current[i];
            const left = dir.get(element);
            if ((k === null || element > k) && (left && i > 0 && element > current[i - 1] || !left && i < length - 1 && element > current[i + 1])) {
              k = element;
              pos = i;
            }
          }
          if (k === null) {
            this.done = true;
          } else {
            const swap = dir.get(k) ? pos - 1 : pos + 1;
            current[pos] = current[swap];
            current[swap] = k;
            for (const element of current) {
              if (element > k) {
                dir.set(element, !dir.get(element));
              }
            }
          }
          return rval;
        }
      };
    }
  });

  // node_modules/rdf-canonize/lib/NQuads.js
  var require_NQuads = __commonJS({
    "node_modules/rdf-canonize/lib/NQuads.js"(exports3, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var RDF = "http://www.w3.org/1999/02/22-rdf-syntax-ns#";
      var RDF_LANGSTRING = RDF + "langString";
      var XSD_STRING = "http://www.w3.org/2001/XMLSchema#string";
      var TYPE_NAMED_NODE = "NamedNode";
      var TYPE_BLANK_NODE = "BlankNode";
      var TYPE_LITERAL = "Literal";
      var TYPE_DEFAULT_GRAPH = "DefaultGraph";
      var REGEX = {};
      (() => {
        const iri = "(?:<([^:]+:[^>]*)>)";
        const PN_CHARS_BASE = "A-Za-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD";
        const PN_CHARS_U = PN_CHARS_BASE + "_";
        const PN_CHARS = PN_CHARS_U + "0-9-\xB7\u0300-\u036F\u203F-\u2040";
        const BLANK_NODE_LABEL = "(_:(?:[" + PN_CHARS_U + "0-9])(?:(?:[" + PN_CHARS + ".])*(?:[" + PN_CHARS + "]))?)";
        const bnode = BLANK_NODE_LABEL;
        const plain = '"([^"\\\\]*(?:\\\\.[^"\\\\]*)*)"';
        const datatype = "(?:\\^\\^" + iri + ")";
        const language = "(?:@([a-zA-Z]+(?:-[a-zA-Z0-9]+)*))";
        const literal = "(?:" + plain + "(?:" + datatype + "|" + language + ")?)";
        const ws = "[ \\t]+";
        const wso = "[ \\t]*";
        const subject = "(?:" + iri + "|" + bnode + ")" + ws;
        const property = iri + ws;
        const object = "(?:" + iri + "|" + bnode + "|" + literal + ")" + wso;
        const graphName = "(?:\\.|(?:(?:" + iri + "|" + bnode + ")" + wso + "\\.))";
        REGEX.eoln = /(?:\r\n)|(?:\n)|(?:\r)/g;
        REGEX.empty = new RegExp("^" + wso + "$");
        REGEX.quad = new RegExp(
          "^" + wso + subject + property + object + graphName + wso + "$"
        );
      })();
      module.exports = class NQuads {
        /**
         * Parses RDF in the form of N-Quads.
         *
         * @param input the N-Quads input to parse.
         *
         * @return an RDF dataset (an array of quads per http://rdf.js.org/).
         */
        static parse(input) {
          const dataset = [];
          const graphs = {};
          const lines = input.split(REGEX.eoln);
          let lineNumber = 0;
          for (const line of lines) {
            lineNumber++;
            if (REGEX.empty.test(line)) {
              continue;
            }
            const match = line.match(REGEX.quad);
            if (match === null) {
              throw new Error("N-Quads parse error on line " + lineNumber + ".");
            }
            const quad = { subject: null, predicate: null, object: null, graph: null };
            if (match[1] !== void 0) {
              quad.subject = { termType: TYPE_NAMED_NODE, value: match[1] };
            } else {
              quad.subject = { termType: TYPE_BLANK_NODE, value: match[2] };
            }
            quad.predicate = { termType: TYPE_NAMED_NODE, value: match[3] };
            if (match[4] !== void 0) {
              quad.object = { termType: TYPE_NAMED_NODE, value: match[4] };
            } else if (match[5] !== void 0) {
              quad.object = { termType: TYPE_BLANK_NODE, value: match[5] };
            } else {
              quad.object = {
                termType: TYPE_LITERAL,
                value: void 0,
                datatype: {
                  termType: TYPE_NAMED_NODE
                }
              };
              if (match[7] !== void 0) {
                quad.object.datatype.value = match[7];
              } else if (match[8] !== void 0) {
                quad.object.datatype.value = RDF_LANGSTRING;
                quad.object.language = match[8];
              } else {
                quad.object.datatype.value = XSD_STRING;
              }
              quad.object.value = _unescape(match[6]);
            }
            if (match[9] !== void 0) {
              quad.graph = {
                termType: TYPE_NAMED_NODE,
                value: match[9]
              };
            } else if (match[10] !== void 0) {
              quad.graph = {
                termType: TYPE_BLANK_NODE,
                value: match[10]
              };
            } else {
              quad.graph = {
                termType: TYPE_DEFAULT_GRAPH,
                value: ""
              };
            }
            if (!(quad.graph.value in graphs)) {
              graphs[quad.graph.value] = [quad];
              dataset.push(quad);
            } else {
              let unique = true;
              const quads = graphs[quad.graph.value];
              for (const q of quads) {
                if (_compareTriples(q, quad)) {
                  unique = false;
                  break;
                }
              }
              if (unique) {
                quads.push(quad);
                dataset.push(quad);
              }
            }
          }
          return dataset;
        }
        /**
         * Converts an RDF dataset to N-Quads.
         *
         * @param dataset (array of quads) the RDF dataset to convert.
         *
         * @return the N-Quads string.
         */
        static serialize(dataset) {
          if (!Array.isArray(dataset)) {
            dataset = NQuads.legacyDatasetToQuads(dataset);
          }
          const quads = [];
          for (const quad of dataset) {
            quads.push(NQuads.serializeQuad(quad));
          }
          return quads.sort().join("");
        }
        /**
         * Converts RDF quad components to an N-Quad string (a single quad).
         *
         * @param {Object} s - N-Quad subject component.
         * @param {Object} p - N-Quad predicate component.
         * @param {Object} o - N-Quad object component.
         * @param {Object} g - N-Quad graph component.
         *
         * @return {string} the N-Quad.
         */
        static serializeQuadComponents(s, p, o, g) {
          let nquad = "";
          if (s.termType === TYPE_NAMED_NODE) {
            nquad += `<${s.value}>`;
          } else {
            nquad += `${s.value}`;
          }
          nquad += ` <${p.value}> `;
          if (o.termType === TYPE_NAMED_NODE) {
            nquad += `<${o.value}>`;
          } else if (o.termType === TYPE_BLANK_NODE) {
            nquad += o.value;
          } else {
            nquad += `"${_escape(o.value)}"`;
            if (o.datatype.value === RDF_LANGSTRING) {
              if (o.language) {
                nquad += `@${o.language}`;
              }
            } else if (o.datatype.value !== XSD_STRING) {
              nquad += `^^<${o.datatype.value}>`;
            }
          }
          if (g.termType === TYPE_NAMED_NODE) {
            nquad += ` <${g.value}>`;
          } else if (g.termType === TYPE_BLANK_NODE) {
            nquad += ` ${g.value}`;
          }
          nquad += " .\n";
          return nquad;
        }
        /**
         * Converts an RDF quad to an N-Quad string (a single quad).
         *
         * @param quad the RDF quad convert.
         *
         * @return the N-Quad string.
         */
        static serializeQuad(quad) {
          return NQuads.serializeQuadComponents(
            quad.subject,
            quad.predicate,
            quad.object,
            quad.graph
          );
        }
        /**
         * Converts a legacy-formatted dataset to an array of quads dataset per
         * http://rdf.js.org/.
         *
         * @param dataset the legacy dataset to convert.
         *
         * @return the array of quads dataset.
         */
        static legacyDatasetToQuads(dataset) {
          const quads = [];
          const termTypeMap = {
            "blank node": TYPE_BLANK_NODE,
            IRI: TYPE_NAMED_NODE,
            literal: TYPE_LITERAL
          };
          for (const graphName in dataset) {
            const triples = dataset[graphName];
            triples.forEach((triple) => {
              const quad = {};
              for (const componentName in triple) {
                const oldComponent = triple[componentName];
                const newComponent = {
                  termType: termTypeMap[oldComponent.type],
                  value: oldComponent.value
                };
                if (newComponent.termType === TYPE_LITERAL) {
                  newComponent.datatype = {
                    termType: TYPE_NAMED_NODE
                  };
                  if ("datatype" in oldComponent) {
                    newComponent.datatype.value = oldComponent.datatype;
                  }
                  if ("language" in oldComponent) {
                    if (!("datatype" in oldComponent)) {
                      newComponent.datatype.value = RDF_LANGSTRING;
                    }
                    newComponent.language = oldComponent.language;
                  } else if (!("datatype" in oldComponent)) {
                    newComponent.datatype.value = XSD_STRING;
                  }
                }
                quad[componentName] = newComponent;
              }
              if (graphName === "@default") {
                quad.graph = {
                  termType: TYPE_DEFAULT_GRAPH,
                  value: ""
                };
              } else {
                quad.graph = {
                  termType: graphName.startsWith("_:") ? TYPE_BLANK_NODE : TYPE_NAMED_NODE,
                  value: graphName
                };
              }
              quads.push(quad);
            });
          }
          return quads;
        }
      };
      function _compareTriples(t1, t2) {
        if (!(t1.subject.termType === t2.subject.termType && t1.object.termType === t2.object.termType)) {
          return false;
        }
        if (!(t1.subject.value === t2.subject.value && t1.predicate.value === t2.predicate.value && t1.object.value === t2.object.value)) {
          return false;
        }
        if (t1.object.termType !== TYPE_LITERAL) {
          return true;
        }
        return t1.object.datatype.termType === t2.object.datatype.termType && t1.object.language === t2.object.language && t1.object.datatype.value === t2.object.datatype.value;
      }
      var _escapeRegex = /["\\\n\r]/g;
      function _escape(s) {
        return s.replace(_escapeRegex, function(match) {
          switch (match) {
            case '"':
              return '\\"';
            case "\\":
              return "\\\\";
            case "\n":
              return "\\n";
            case "\r":
              return "\\r";
          }
        });
      }
      var _unescapeRegex = /(?:\\([tbnrf"'\\]))|(?:\\u([0-9A-Fa-f]{4}))|(?:\\U([0-9A-Fa-f]{8}))/g;
      function _unescape(s) {
        return s.replace(_unescapeRegex, function(match, code, u, U) {
          if (code) {
            switch (code) {
              case "t":
                return "	";
              case "b":
                return "\b";
              case "n":
                return "\n";
              case "r":
                return "\r";
              case "f":
                return "\f";
              case '"':
                return '"';
              case "'":
                return "'";
              case "\\":
                return "\\";
            }
          }
          if (u) {
            return String.fromCharCode(parseInt(u, 16));
          }
          if (U) {
            throw new Error("Unsupported U escape");
          }
        });
      }
    }
  });

  // node_modules/rdf-canonize/lib/URDNA2015.js
  var require_URDNA2015 = __commonJS({
    "node_modules/rdf-canonize/lib/URDNA2015.js"(exports3, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var IdentifierIssuer = require_IdentifierIssuer();
      var MessageDigest = require_MessageDigest_browser();
      var Permuter = require_Permuter();
      var NQuads = require_NQuads();
      module.exports = class URDNA2015 {
        constructor({
          createMessageDigest = () => new MessageDigest("sha256"),
          canonicalIdMap = /* @__PURE__ */ new Map(),
          maxDeepIterations = Infinity
        } = {}) {
          this.name = "URDNA2015";
          this.blankNodeInfo = /* @__PURE__ */ new Map();
          this.canonicalIssuer = new IdentifierIssuer("_:c14n", canonicalIdMap);
          this.createMessageDigest = createMessageDigest;
          this.maxDeepIterations = maxDeepIterations;
          this.quads = null;
          this.deepIterations = null;
        }
        // 4.4) Normalization Algorithm
        async main(dataset) {
          this.deepIterations = /* @__PURE__ */ new Map();
          this.quads = dataset;
          for (const quad of dataset) {
            this._addBlankNodeQuadInfo({ quad, component: quad.subject });
            this._addBlankNodeQuadInfo({ quad, component: quad.object });
            this._addBlankNodeQuadInfo({ quad, component: quad.graph });
          }
          const hashToBlankNodes = /* @__PURE__ */ new Map();
          const nonNormalized = [...this.blankNodeInfo.keys()];
          let i = 0;
          for (const id of nonNormalized) {
            if (++i % 100 === 0) {
              await this._yield();
            }
            await this._hashAndTrackBlankNode({ id, hashToBlankNodes });
          }
          const hashes = [...hashToBlankNodes.keys()].sort();
          const nonUnique = [];
          for (const hash of hashes) {
            const idList = hashToBlankNodes.get(hash);
            if (idList.length > 1) {
              nonUnique.push(idList);
              continue;
            }
            const id = idList[0];
            this.canonicalIssuer.getId(id);
          }
          for (const idList of nonUnique) {
            const hashPathList = [];
            for (const id of idList) {
              if (this.canonicalIssuer.hasId(id)) {
                continue;
              }
              const issuer = new IdentifierIssuer("_:b");
              issuer.getId(id);
              const result = await this.hashNDegreeQuads(id, issuer);
              hashPathList.push(result);
            }
            hashPathList.sort(_stringHashCompare);
            for (const result of hashPathList) {
              const oldIds = result.issuer.getOldIds();
              for (const id of oldIds) {
                this.canonicalIssuer.getId(id);
              }
            }
          }
          const normalized = [];
          for (const quad of this.quads) {
            const nQuad = NQuads.serializeQuadComponents(
              this._componentWithCanonicalId(quad.subject),
              quad.predicate,
              this._componentWithCanonicalId(quad.object),
              this._componentWithCanonicalId(quad.graph)
            );
            normalized.push(nQuad);
          }
          normalized.sort();
          return normalized.join("");
        }
        // 4.6) Hash First Degree Quads
        async hashFirstDegreeQuads(id) {
          const nquads = [];
          const info = this.blankNodeInfo.get(id);
          const quads = info.quads;
          for (const quad of quads) {
            const copy = {
              subject: null,
              predicate: quad.predicate,
              object: null,
              graph: null
            };
            copy.subject = this.modifyFirstDegreeComponent(
              id,
              quad.subject,
              "subject"
            );
            copy.object = this.modifyFirstDegreeComponent(
              id,
              quad.object,
              "object"
            );
            copy.graph = this.modifyFirstDegreeComponent(
              id,
              quad.graph,
              "graph"
            );
            nquads.push(NQuads.serializeQuad(copy));
          }
          nquads.sort();
          const md = this.createMessageDigest();
          for (const nquad of nquads) {
            md.update(nquad);
          }
          info.hash = await md.digest();
          return info.hash;
        }
        // 4.7) Hash Related Blank Node
        async hashRelatedBlankNode(related, quad, issuer, position) {
          let id;
          if (this.canonicalIssuer.hasId(related)) {
            id = this.canonicalIssuer.getId(related);
          } else if (issuer.hasId(related)) {
            id = issuer.getId(related);
          } else {
            id = this.blankNodeInfo.get(related).hash;
          }
          const md = this.createMessageDigest();
          md.update(position);
          if (position !== "g") {
            md.update(this.getRelatedPredicate(quad));
          }
          md.update(id);
          return md.digest();
        }
        // 4.8) Hash N-Degree Quads
        async hashNDegreeQuads(id, issuer) {
          const deepIterations = this.deepIterations.get(id) || 0;
          if (deepIterations > this.maxDeepIterations) {
            throw new Error(
              `Maximum deep iterations (${this.maxDeepIterations}) exceeded.`
            );
          }
          this.deepIterations.set(id, deepIterations + 1);
          const md = this.createMessageDigest();
          const hashToRelated = await this.createHashToRelated(id, issuer);
          const hashes = [...hashToRelated.keys()].sort();
          for (const hash of hashes) {
            md.update(hash);
            let chosenPath = "";
            let chosenIssuer;
            const permuter = new Permuter(hashToRelated.get(hash));
            let i = 0;
            while (permuter.hasNext()) {
              const permutation = permuter.next();
              if (++i % 3 === 0) {
                await this._yield();
              }
              let issuerCopy = issuer.clone();
              let path = "";
              const recursionList = [];
              let nextPermutation = false;
              for (const related of permutation) {
                if (this.canonicalIssuer.hasId(related)) {
                  path += this.canonicalIssuer.getId(related);
                } else {
                  if (!issuerCopy.hasId(related)) {
                    recursionList.push(related);
                  }
                  path += issuerCopy.getId(related);
                }
                if (chosenPath.length !== 0 && path > chosenPath) {
                  nextPermutation = true;
                  break;
                }
              }
              if (nextPermutation) {
                continue;
              }
              for (const related of recursionList) {
                const result = await this.hashNDegreeQuads(related, issuerCopy);
                path += issuerCopy.getId(related);
                path += `<${result.hash}>`;
                issuerCopy = result.issuer;
                if (chosenPath.length !== 0 && path > chosenPath) {
                  nextPermutation = true;
                  break;
                }
              }
              if (nextPermutation) {
                continue;
              }
              if (chosenPath.length === 0 || path < chosenPath) {
                chosenPath = path;
                chosenIssuer = issuerCopy;
              }
            }
            md.update(chosenPath);
            issuer = chosenIssuer;
          }
          return { hash: await md.digest(), issuer };
        }
        // helper for modifying component during Hash First Degree Quads
        modifyFirstDegreeComponent(id, component) {
          if (component.termType !== "BlankNode") {
            return component;
          }
          return {
            termType: "BlankNode",
            value: component.value === id ? "_:a" : "_:z"
          };
        }
        // helper for getting a related predicate
        getRelatedPredicate(quad) {
          return `<${quad.predicate.value}>`;
        }
        // helper for creating hash to related blank nodes map
        async createHashToRelated(id, issuer) {
          const hashToRelated = /* @__PURE__ */ new Map();
          const quads = this.blankNodeInfo.get(id).quads;
          let i = 0;
          for (const quad of quads) {
            if (++i % 100 === 0) {
              await this._yield();
            }
            await Promise.all([
              this._addRelatedBlankNodeHash({
                quad,
                component: quad.subject,
                position: "s",
                id,
                issuer,
                hashToRelated
              }),
              this._addRelatedBlankNodeHash({
                quad,
                component: quad.object,
                position: "o",
                id,
                issuer,
                hashToRelated
              }),
              this._addRelatedBlankNodeHash({
                quad,
                component: quad.graph,
                position: "g",
                id,
                issuer,
                hashToRelated
              })
            ]);
          }
          return hashToRelated;
        }
        async _hashAndTrackBlankNode({ id, hashToBlankNodes }) {
          const hash = await this.hashFirstDegreeQuads(id);
          const idList = hashToBlankNodes.get(hash);
          if (!idList) {
            hashToBlankNodes.set(hash, [id]);
          } else {
            idList.push(id);
          }
        }
        _addBlankNodeQuadInfo({ quad, component }) {
          if (component.termType !== "BlankNode") {
            return;
          }
          const id = component.value;
          const info = this.blankNodeInfo.get(id);
          if (info) {
            info.quads.add(quad);
          } else {
            this.blankNodeInfo.set(id, { quads: /* @__PURE__ */ new Set([quad]), hash: null });
          }
        }
        async _addRelatedBlankNodeHash({ quad, component, position, id, issuer, hashToRelated }) {
          if (!(component.termType === "BlankNode" && component.value !== id)) {
            return;
          }
          const related = component.value;
          const hash = await this.hashRelatedBlankNode(
            related,
            quad,
            issuer,
            position
          );
          const entries = hashToRelated.get(hash);
          if (entries) {
            entries.push(related);
          } else {
            hashToRelated.set(hash, [related]);
          }
        }
        // canonical ids for 7.1
        _componentWithCanonicalId(component) {
          if (component.termType === "BlankNode" && !component.value.startsWith(this.canonicalIssuer.prefix)) {
            return {
              termType: "BlankNode",
              value: this.canonicalIssuer.getId(component.value)
            };
          }
          return component;
        }
        async _yield() {
          return new Promise((resolve) => setImmediate(resolve));
        }
      };
      function _stringHashCompare(a, b) {
        return a.hash < b.hash ? -1 : a.hash > b.hash ? 1 : 0;
      }
    }
  });

  // node_modules/rdf-canonize/lib/URGNA2012.js
  var require_URGNA2012 = __commonJS({
    "node_modules/rdf-canonize/lib/URGNA2012.js"(exports3, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var MessageDigest = require_MessageDigest_browser();
      var URDNA2015 = require_URDNA2015();
      module.exports = class URDNA2012 extends URDNA2015 {
        constructor() {
          super();
          this.name = "URGNA2012";
          this.createMessageDigest = () => new MessageDigest("sha1");
        }
        // helper for modifying component during Hash First Degree Quads
        modifyFirstDegreeComponent(id, component, key) {
          if (component.termType !== "BlankNode") {
            return component;
          }
          if (key === "graph") {
            return {
              termType: "BlankNode",
              value: "_:g"
            };
          }
          return {
            termType: "BlankNode",
            value: component.value === id ? "_:a" : "_:z"
          };
        }
        // helper for getting a related predicate
        getRelatedPredicate(quad) {
          return quad.predicate.value;
        }
        // helper for creating hash to related blank nodes map
        async createHashToRelated(id, issuer) {
          const hashToRelated = /* @__PURE__ */ new Map();
          const quads = this.blankNodeInfo.get(id).quads;
          let i = 0;
          for (const quad of quads) {
            let position;
            let related;
            if (quad.subject.termType === "BlankNode" && quad.subject.value !== id) {
              related = quad.subject.value;
              position = "p";
            } else if (quad.object.termType === "BlankNode" && quad.object.value !== id) {
              related = quad.object.value;
              position = "r";
            } else {
              continue;
            }
            if (++i % 100 === 0) {
              await this._yield();
            }
            const hash = await this.hashRelatedBlankNode(
              related,
              quad,
              issuer,
              position
            );
            const entries = hashToRelated.get(hash);
            if (entries) {
              entries.push(related);
            } else {
              hashToRelated.set(hash, [related]);
            }
          }
          return hashToRelated;
        }
      };
    }
  });

  // node_modules/rdf-canonize/lib/URDNA2015Sync.js
  var require_URDNA2015Sync = __commonJS({
    "node_modules/rdf-canonize/lib/URDNA2015Sync.js"(exports3, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var IdentifierIssuer = require_IdentifierIssuer();
      var MessageDigest = require_MessageDigest_browser();
      var Permuter = require_Permuter();
      var NQuads = require_NQuads();
      module.exports = class URDNA2015Sync {
        constructor({
          createMessageDigest = () => new MessageDigest("sha256"),
          canonicalIdMap = /* @__PURE__ */ new Map(),
          maxDeepIterations = Infinity
        } = {}) {
          this.name = "URDNA2015";
          this.blankNodeInfo = /* @__PURE__ */ new Map();
          this.canonicalIssuer = new IdentifierIssuer("_:c14n", canonicalIdMap);
          this.createMessageDigest = createMessageDigest;
          this.maxDeepIterations = maxDeepIterations;
          this.quads = null;
          this.deepIterations = null;
        }
        // 4.4) Normalization Algorithm
        main(dataset) {
          this.deepIterations = /* @__PURE__ */ new Map();
          this.quads = dataset;
          for (const quad of dataset) {
            this._addBlankNodeQuadInfo({ quad, component: quad.subject });
            this._addBlankNodeQuadInfo({ quad, component: quad.object });
            this._addBlankNodeQuadInfo({ quad, component: quad.graph });
          }
          const hashToBlankNodes = /* @__PURE__ */ new Map();
          const nonNormalized = [...this.blankNodeInfo.keys()];
          for (const id of nonNormalized) {
            this._hashAndTrackBlankNode({ id, hashToBlankNodes });
          }
          const hashes = [...hashToBlankNodes.keys()].sort();
          const nonUnique = [];
          for (const hash of hashes) {
            const idList = hashToBlankNodes.get(hash);
            if (idList.length > 1) {
              nonUnique.push(idList);
              continue;
            }
            const id = idList[0];
            this.canonicalIssuer.getId(id);
          }
          for (const idList of nonUnique) {
            const hashPathList = [];
            for (const id of idList) {
              if (this.canonicalIssuer.hasId(id)) {
                continue;
              }
              const issuer = new IdentifierIssuer("_:b");
              issuer.getId(id);
              const result = this.hashNDegreeQuads(id, issuer);
              hashPathList.push(result);
            }
            hashPathList.sort(_stringHashCompare);
            for (const result of hashPathList) {
              const oldIds = result.issuer.getOldIds();
              for (const id of oldIds) {
                this.canonicalIssuer.getId(id);
              }
            }
          }
          const normalized = [];
          for (const quad of this.quads) {
            const nQuad = NQuads.serializeQuadComponents(
              this._componentWithCanonicalId({ component: quad.subject }),
              quad.predicate,
              this._componentWithCanonicalId({ component: quad.object }),
              this._componentWithCanonicalId({ component: quad.graph })
            );
            normalized.push(nQuad);
          }
          normalized.sort();
          return normalized.join("");
        }
        // 4.6) Hash First Degree Quads
        hashFirstDegreeQuads(id) {
          const nquads = [];
          const info = this.blankNodeInfo.get(id);
          const quads = info.quads;
          for (const quad of quads) {
            const copy = {
              subject: null,
              predicate: quad.predicate,
              object: null,
              graph: null
            };
            copy.subject = this.modifyFirstDegreeComponent(
              id,
              quad.subject,
              "subject"
            );
            copy.object = this.modifyFirstDegreeComponent(
              id,
              quad.object,
              "object"
            );
            copy.graph = this.modifyFirstDegreeComponent(
              id,
              quad.graph,
              "graph"
            );
            nquads.push(NQuads.serializeQuad(copy));
          }
          nquads.sort();
          const md = this.createMessageDigest();
          for (const nquad of nquads) {
            md.update(nquad);
          }
          info.hash = md.digest();
          return info.hash;
        }
        // 4.7) Hash Related Blank Node
        hashRelatedBlankNode(related, quad, issuer, position) {
          let id;
          if (this.canonicalIssuer.hasId(related)) {
            id = this.canonicalIssuer.getId(related);
          } else if (issuer.hasId(related)) {
            id = issuer.getId(related);
          } else {
            id = this.blankNodeInfo.get(related).hash;
          }
          const md = this.createMessageDigest();
          md.update(position);
          if (position !== "g") {
            md.update(this.getRelatedPredicate(quad));
          }
          md.update(id);
          return md.digest();
        }
        // 4.8) Hash N-Degree Quads
        hashNDegreeQuads(id, issuer) {
          const deepIterations = this.deepIterations.get(id) || 0;
          if (deepIterations > this.maxDeepIterations) {
            throw new Error(
              `Maximum deep iterations (${this.maxDeepIterations}) exceeded.`
            );
          }
          this.deepIterations.set(id, deepIterations + 1);
          const md = this.createMessageDigest();
          const hashToRelated = this.createHashToRelated(id, issuer);
          const hashes = [...hashToRelated.keys()].sort();
          for (const hash of hashes) {
            md.update(hash);
            let chosenPath = "";
            let chosenIssuer;
            const permuter = new Permuter(hashToRelated.get(hash));
            while (permuter.hasNext()) {
              const permutation = permuter.next();
              let issuerCopy = issuer.clone();
              let path = "";
              const recursionList = [];
              let nextPermutation = false;
              for (const related of permutation) {
                if (this.canonicalIssuer.hasId(related)) {
                  path += this.canonicalIssuer.getId(related);
                } else {
                  if (!issuerCopy.hasId(related)) {
                    recursionList.push(related);
                  }
                  path += issuerCopy.getId(related);
                }
                if (chosenPath.length !== 0 && path > chosenPath) {
                  nextPermutation = true;
                  break;
                }
              }
              if (nextPermutation) {
                continue;
              }
              for (const related of recursionList) {
                const result = this.hashNDegreeQuads(related, issuerCopy);
                path += issuerCopy.getId(related);
                path += `<${result.hash}>`;
                issuerCopy = result.issuer;
                if (chosenPath.length !== 0 && path > chosenPath) {
                  nextPermutation = true;
                  break;
                }
              }
              if (nextPermutation) {
                continue;
              }
              if (chosenPath.length === 0 || path < chosenPath) {
                chosenPath = path;
                chosenIssuer = issuerCopy;
              }
            }
            md.update(chosenPath);
            issuer = chosenIssuer;
          }
          return { hash: md.digest(), issuer };
        }
        // helper for modifying component during Hash First Degree Quads
        modifyFirstDegreeComponent(id, component) {
          if (component.termType !== "BlankNode") {
            return component;
          }
          return {
            termType: "BlankNode",
            value: component.value === id ? "_:a" : "_:z"
          };
        }
        // helper for getting a related predicate
        getRelatedPredicate(quad) {
          return `<${quad.predicate.value}>`;
        }
        // helper for creating hash to related blank nodes map
        createHashToRelated(id, issuer) {
          const hashToRelated = /* @__PURE__ */ new Map();
          const quads = this.blankNodeInfo.get(id).quads;
          for (const quad of quads) {
            this._addRelatedBlankNodeHash({
              quad,
              component: quad.subject,
              position: "s",
              id,
              issuer,
              hashToRelated
            });
            this._addRelatedBlankNodeHash({
              quad,
              component: quad.object,
              position: "o",
              id,
              issuer,
              hashToRelated
            });
            this._addRelatedBlankNodeHash({
              quad,
              component: quad.graph,
              position: "g",
              id,
              issuer,
              hashToRelated
            });
          }
          return hashToRelated;
        }
        _hashAndTrackBlankNode({ id, hashToBlankNodes }) {
          const hash = this.hashFirstDegreeQuads(id);
          const idList = hashToBlankNodes.get(hash);
          if (!idList) {
            hashToBlankNodes.set(hash, [id]);
          } else {
            idList.push(id);
          }
        }
        _addBlankNodeQuadInfo({ quad, component }) {
          if (component.termType !== "BlankNode") {
            return;
          }
          const id = component.value;
          const info = this.blankNodeInfo.get(id);
          if (info) {
            info.quads.add(quad);
          } else {
            this.blankNodeInfo.set(id, { quads: /* @__PURE__ */ new Set([quad]), hash: null });
          }
        }
        _addRelatedBlankNodeHash({ quad, component, position, id, issuer, hashToRelated }) {
          if (!(component.termType === "BlankNode" && component.value !== id)) {
            return;
          }
          const related = component.value;
          const hash = this.hashRelatedBlankNode(related, quad, issuer, position);
          const entries = hashToRelated.get(hash);
          if (entries) {
            entries.push(related);
          } else {
            hashToRelated.set(hash, [related]);
          }
        }
        // canonical ids for 7.1
        _componentWithCanonicalId({ component }) {
          if (component.termType === "BlankNode" && !component.value.startsWith(this.canonicalIssuer.prefix)) {
            return {
              termType: "BlankNode",
              value: this.canonicalIssuer.getId(component.value)
            };
          }
          return component;
        }
      };
      function _stringHashCompare(a, b) {
        return a.hash < b.hash ? -1 : a.hash > b.hash ? 1 : 0;
      }
    }
  });

  // node_modules/rdf-canonize/lib/URGNA2012Sync.js
  var require_URGNA2012Sync = __commonJS({
    "node_modules/rdf-canonize/lib/URGNA2012Sync.js"(exports3, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var MessageDigest = require_MessageDigest_browser();
      var URDNA2015Sync = require_URDNA2015Sync();
      module.exports = class URDNA2012Sync extends URDNA2015Sync {
        constructor() {
          super();
          this.name = "URGNA2012";
          this.createMessageDigest = () => new MessageDigest("sha1");
        }
        // helper for modifying component during Hash First Degree Quads
        modifyFirstDegreeComponent(id, component, key) {
          if (component.termType !== "BlankNode") {
            return component;
          }
          if (key === "graph") {
            return {
              termType: "BlankNode",
              value: "_:g"
            };
          }
          return {
            termType: "BlankNode",
            value: component.value === id ? "_:a" : "_:z"
          };
        }
        // helper for getting a related predicate
        getRelatedPredicate(quad) {
          return quad.predicate.value;
        }
        // helper for creating hash to related blank nodes map
        createHashToRelated(id, issuer) {
          const hashToRelated = /* @__PURE__ */ new Map();
          const quads = this.blankNodeInfo.get(id).quads;
          for (const quad of quads) {
            let position;
            let related;
            if (quad.subject.termType === "BlankNode" && quad.subject.value !== id) {
              related = quad.subject.value;
              position = "p";
            } else if (quad.object.termType === "BlankNode" && quad.object.value !== id) {
              related = quad.object.value;
              position = "r";
            } else {
              continue;
            }
            const hash = this.hashRelatedBlankNode(related, quad, issuer, position);
            const entries = hashToRelated.get(hash);
            if (entries) {
              entries.push(related);
            } else {
              hashToRelated.set(hash, [related]);
            }
          }
          return hashToRelated;
        }
      };
    }
  });

  // (disabled):rdf-canonize-native
  var require_rdf_canonize_native = __commonJS({
    "(disabled):rdf-canonize-native"() {
      init_dirname();
      init_buffer2();
      init_process2();
    }
  });

  // node_modules/rdf-canonize/lib/index.js
  var require_lib = __commonJS({
    "node_modules/rdf-canonize/lib/index.js"(exports3) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var URDNA2015 = require_URDNA2015();
      var URGNA2012 = require_URGNA2012();
      var URDNA2015Sync = require_URDNA2015Sync();
      var URGNA2012Sync = require_URGNA2012Sync();
      var rdfCanonizeNative;
      try {
        rdfCanonizeNative = require_rdf_canonize_native();
      } catch (e2) {
      }
      function _inputToDataset(input) {
        if (!Array.isArray(input)) {
          return exports3.NQuads.legacyDatasetToQuads(input);
        }
        return input;
      }
      exports3.NQuads = require_NQuads();
      exports3.IdentifierIssuer = require_IdentifierIssuer();
      exports3._rdfCanonizeNative = function(api) {
        if (api) {
          rdfCanonizeNative = api;
        }
        return rdfCanonizeNative;
      };
      exports3.canonize = async function(input, options) {
        const dataset = _inputToDataset(input, options);
        if (options.useNative) {
          if (!rdfCanonizeNative) {
            throw new Error("rdf-canonize-native not available");
          }
          if (options.createMessageDigest) {
            throw new Error(
              '"createMessageDigest" cannot be used with "useNative".'
            );
          }
          return new Promise((resolve, reject) => rdfCanonizeNative.canonize(dataset, options, (err, canonical) => err ? reject(err) : resolve(canonical)));
        }
        if (options.algorithm === "URDNA2015") {
          return new URDNA2015(options).main(dataset);
        }
        if (options.algorithm === "URGNA2012") {
          if (options.createMessageDigest) {
            throw new Error(
              '"createMessageDigest" cannot be used with "URGNA2012".'
            );
          }
          return new URGNA2012(options).main(dataset);
        }
        if (!("algorithm" in options)) {
          throw new Error("No RDF Dataset Canonicalization algorithm specified.");
        }
        throw new Error(
          "Invalid RDF Dataset Canonicalization algorithm: " + options.algorithm
        );
      };
      exports3._canonizeSync = function(input, options) {
        const dataset = _inputToDataset(input, options);
        if (options.useNative) {
          if (!rdfCanonizeNative) {
            throw new Error("rdf-canonize-native not available");
          }
          if (options.createMessageDigest) {
            throw new Error(
              '"createMessageDigest" cannot be used with "useNative".'
            );
          }
          return rdfCanonizeNative.canonizeSync(dataset, options);
        }
        if (options.algorithm === "URDNA2015") {
          return new URDNA2015Sync(options).main(dataset);
        }
        if (options.algorithm === "URGNA2012") {
          if (options.createMessageDigest) {
            throw new Error(
              '"createMessageDigest" cannot be used with "URGNA2012".'
            );
          }
          return new URGNA2012Sync(options).main(dataset);
        }
        if (!("algorithm" in options)) {
          throw new Error("No RDF Dataset Canonicalization algorithm specified.");
        }
        throw new Error(
          "Invalid RDF Dataset Canonicalization algorithm: " + options.algorithm
        );
      };
    }
  });

  // node_modules/rdf-canonize/index.js
  var require_rdf_canonize = __commonJS({
    "node_modules/rdf-canonize/index.js"(exports3, module) {
      init_dirname();
      init_buffer2();
      init_process2();
      module.exports = require_lib();
    }
  });

  // node_modules/jsonld/lib/types.js
  var require_types = __commonJS({
    "node_modules/jsonld/lib/types.js"(exports3, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var api = {};
      module.exports = api;
      api.isArray = Array.isArray;
      api.isBoolean = (v) => typeof v === "boolean" || Object.prototype.toString.call(v) === "[object Boolean]";
      api.isDouble = (v) => api.isNumber(v) && (String(v).indexOf(".") !== -1 || Math.abs(v) >= 1e21);
      api.isEmptyObject = (v) => api.isObject(v) && Object.keys(v).length === 0;
      api.isNumber = (v) => typeof v === "number" || Object.prototype.toString.call(v) === "[object Number]";
      api.isNumeric = (v) => !isNaN(parseFloat(v)) && isFinite(v);
      api.isObject = (v) => Object.prototype.toString.call(v) === "[object Object]";
      api.isString = (v) => typeof v === "string" || Object.prototype.toString.call(v) === "[object String]";
      api.isUndefined = (v) => typeof v === "undefined";
    }
  });

  // node_modules/jsonld/lib/graphTypes.js
  var require_graphTypes = __commonJS({
    "node_modules/jsonld/lib/graphTypes.js"(exports3, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var types = require_types();
      var api = {};
      module.exports = api;
      api.isSubject = (v) => {
        if (types.isObject(v) && !("@value" in v || "@set" in v || "@list" in v)) {
          const keyCount = Object.keys(v).length;
          return keyCount > 1 || !("@id" in v);
        }
        return false;
      };
      api.isSubjectReference = (v) => (
        // Note: A value is a subject reference if all of these hold true:
        // 1. It is an Object.
        // 2. It has a single key: @id.
        types.isObject(v) && Object.keys(v).length === 1 && "@id" in v
      );
      api.isValue = (v) => (
        // Note: A value is a @value if all of these hold true:
        // 1. It is an Object.
        // 2. It has the @value property.
        types.isObject(v) && "@value" in v
      );
      api.isList = (v) => (
        // Note: A value is a @list if all of these hold true:
        // 1. It is an Object.
        // 2. It has the @list property.
        types.isObject(v) && "@list" in v
      );
      api.isGraph = (v) => {
        return types.isObject(v) && "@graph" in v && Object.keys(v).filter((key) => key !== "@id" && key !== "@index").length === 1;
      };
      api.isSimpleGraph = (v) => {
        return api.isGraph(v) && !("@id" in v);
      };
      api.isBlankNode = (v) => {
        if (types.isObject(v)) {
          if ("@id" in v) {
            const id = v["@id"];
            return !types.isString(id) || id.indexOf("_:") === 0;
          }
          return Object.keys(v).length === 0 || !("@value" in v || "@set" in v || "@list" in v);
        }
        return false;
      };
    }
  });

  // node_modules/jsonld/lib/JsonLdError.js
  var require_JsonLdError = __commonJS({
    "node_modules/jsonld/lib/JsonLdError.js"(exports3, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      module.exports = class JsonLdError extends Error {
        /**
         * Creates a JSON-LD Error.
         *
         * @param msg the error message.
         * @param type the error type.
         * @param details the error details.
         */
        constructor(message = "An unspecified JSON-LD error occurred.", name = "jsonld.Error", details = {}) {
          super(message);
          this.name = name;
          this.message = message;
          this.details = details;
        }
      };
    }
  });

  // node_modules/jsonld/lib/util.js
  var require_util = __commonJS({
    "node_modules/jsonld/lib/util.js"(exports3, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var graphTypes = require_graphTypes();
      var types = require_types();
      var IdentifierIssuer = require_rdf_canonize().IdentifierIssuer;
      var JsonLdError = require_JsonLdError();
      var REGEX_BCP47 = /^[a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*$/;
      var REGEX_LINK_HEADERS = /(?:<[^>]*?>|"[^"]*?"|[^,])+/g;
      var REGEX_LINK_HEADER = /\s*<([^>]*?)>\s*(?:;\s*(.*))?/;
      var REGEX_LINK_HEADER_PARAMS = /(.*?)=(?:(?:"([^"]*?)")|([^"]*?))\s*(?:(?:;\s*)|$)/g;
      var REGEX_KEYWORD = /^@[a-zA-Z]+$/;
      var DEFAULTS = {
        headers: {
          accept: "application/ld+json, application/json"
        }
      };
      var api = {};
      module.exports = api;
      api.IdentifierIssuer = IdentifierIssuer;
      api.REGEX_BCP47 = REGEX_BCP47;
      api.REGEX_KEYWORD = REGEX_KEYWORD;
      api.clone = function(value) {
        if (value && typeof value === "object") {
          let rval;
          if (types.isArray(value)) {
            rval = [];
            for (let i = 0; i < value.length; ++i) {
              rval[i] = api.clone(value[i]);
            }
          } else if (value instanceof Map) {
            rval = /* @__PURE__ */ new Map();
            for (const [k, v] of value) {
              rval.set(k, api.clone(v));
            }
          } else if (value instanceof Set) {
            rval = /* @__PURE__ */ new Set();
            for (const v of value) {
              rval.add(api.clone(v));
            }
          } else if (types.isObject(value)) {
            rval = {};
            for (const key in value) {
              rval[key] = api.clone(value[key]);
            }
          } else {
            rval = value.toString();
          }
          return rval;
        }
        return value;
      };
      api.asArray = function(value) {
        return Array.isArray(value) ? value : [value];
      };
      api.buildHeaders = (headers = {}) => {
        const hasAccept = Object.keys(headers).some(
          (h) => h.toLowerCase() === "accept"
        );
        if (hasAccept) {
          throw new RangeError(
            'Accept header may not be specified; only "' + DEFAULTS.headers.accept + '" is supported.'
          );
        }
        return Object.assign({ Accept: DEFAULTS.headers.accept }, headers);
      };
      api.parseLinkHeader = (header) => {
        const rval = {};
        const entries = header.match(REGEX_LINK_HEADERS);
        for (let i = 0; i < entries.length; ++i) {
          let match = entries[i].match(REGEX_LINK_HEADER);
          if (!match) {
            continue;
          }
          const result = { target: match[1] };
          const params = match[2];
          while (match = REGEX_LINK_HEADER_PARAMS.exec(params)) {
            result[match[1]] = match[2] === void 0 ? match[3] : match[2];
          }
          const rel = result.rel || "";
          if (Array.isArray(rval[rel])) {
            rval[rel].push(result);
          } else if (rval.hasOwnProperty(rel)) {
            rval[rel] = [rval[rel], result];
          } else {
            rval[rel] = result;
          }
        }
        return rval;
      };
      api.validateTypeValue = (v, isFrame) => {
        if (types.isString(v)) {
          return;
        }
        if (types.isArray(v) && v.every((vv) => types.isString(vv))) {
          return;
        }
        if (isFrame && types.isObject(v)) {
          switch (Object.keys(v).length) {
            case 0:
              return;
            case 1:
              if ("@default" in v && api.asArray(v["@default"]).every((vv) => types.isString(vv))) {
                return;
              }
          }
        }
        throw new JsonLdError(
          'Invalid JSON-LD syntax; "@type" value must a string, an array of strings, an empty object, or a default object.',
          "jsonld.SyntaxError",
          { code: "invalid type value", value: v }
        );
      };
      api.hasProperty = (subject, property) => {
        if (subject.hasOwnProperty(property)) {
          const value = subject[property];
          return !types.isArray(value) || value.length > 0;
        }
        return false;
      };
      api.hasValue = (subject, property, value) => {
        if (api.hasProperty(subject, property)) {
          let val = subject[property];
          const isList = graphTypes.isList(val);
          if (types.isArray(val) || isList) {
            if (isList) {
              val = val["@list"];
            }
            for (let i = 0; i < val.length; ++i) {
              if (api.compareValues(value, val[i])) {
                return true;
              }
            }
          } else if (!types.isArray(value)) {
            return api.compareValues(value, val);
          }
        }
        return false;
      };
      api.addValue = (subject, property, value, options) => {
        options = options || {};
        if (!("propertyIsArray" in options)) {
          options.propertyIsArray = false;
        }
        if (!("valueIsArray" in options)) {
          options.valueIsArray = false;
        }
        if (!("allowDuplicate" in options)) {
          options.allowDuplicate = true;
        }
        if (!("prependValue" in options)) {
          options.prependValue = false;
        }
        if (options.valueIsArray) {
          subject[property] = value;
        } else if (types.isArray(value)) {
          if (value.length === 0 && options.propertyIsArray && !subject.hasOwnProperty(property)) {
            subject[property] = [];
          }
          if (options.prependValue) {
            value = value.concat(subject[property]);
            subject[property] = [];
          }
          for (let i = 0; i < value.length; ++i) {
            api.addValue(subject, property, value[i], options);
          }
        } else if (subject.hasOwnProperty(property)) {
          const hasValue = !options.allowDuplicate && api.hasValue(subject, property, value);
          if (!types.isArray(subject[property]) && (!hasValue || options.propertyIsArray)) {
            subject[property] = [subject[property]];
          }
          if (!hasValue) {
            if (options.prependValue) {
              subject[property].unshift(value);
            } else {
              subject[property].push(value);
            }
          }
        } else {
          subject[property] = options.propertyIsArray ? [value] : value;
        }
      };
      api.getValues = (subject, property) => [].concat(subject[property] || []);
      api.removeProperty = (subject, property) => {
        delete subject[property];
      };
      api.removeValue = (subject, property, value, options) => {
        options = options || {};
        if (!("propertyIsArray" in options)) {
          options.propertyIsArray = false;
        }
        const values = api.getValues(subject, property).filter(
          (e2) => !api.compareValues(e2, value)
        );
        if (values.length === 0) {
          api.removeProperty(subject, property);
        } else if (values.length === 1 && !options.propertyIsArray) {
          subject[property] = values[0];
        } else {
          subject[property] = values;
        }
      };
      api.relabelBlankNodes = (input, options) => {
        options = options || {};
        const issuer = options.issuer || new IdentifierIssuer("_:b");
        return _labelBlankNodes(issuer, input);
      };
      api.compareValues = (v1, v2) => {
        if (v1 === v2) {
          return true;
        }
        if (graphTypes.isValue(v1) && graphTypes.isValue(v2) && v1["@value"] === v2["@value"] && v1["@type"] === v2["@type"] && v1["@language"] === v2["@language"] && v1["@index"] === v2["@index"]) {
          return true;
        }
        if (types.isObject(v1) && "@id" in v1 && types.isObject(v2) && "@id" in v2) {
          return v1["@id"] === v2["@id"];
        }
        return false;
      };
      api.compareShortestLeast = (a, b) => {
        if (a.length < b.length) {
          return -1;
        }
        if (b.length < a.length) {
          return 1;
        }
        if (a === b) {
          return 0;
        }
        return a < b ? -1 : 1;
      };
      function _labelBlankNodes(issuer, element) {
        if (types.isArray(element)) {
          for (let i = 0; i < element.length; ++i) {
            element[i] = _labelBlankNodes(issuer, element[i]);
          }
        } else if (graphTypes.isList(element)) {
          element["@list"] = _labelBlankNodes(issuer, element["@list"]);
        } else if (types.isObject(element)) {
          if (graphTypes.isBlankNode(element)) {
            element["@id"] = issuer.getId(element["@id"]);
          }
          const keys = Object.keys(element).sort();
          for (let ki = 0; ki < keys.length; ++ki) {
            const key = keys[ki];
            if (key !== "@id") {
              element[key] = _labelBlankNodes(issuer, element[key]);
            }
          }
        }
        return element;
      }
    }
  });

  // node_modules/jsonld/lib/constants.js
  var require_constants = __commonJS({
    "node_modules/jsonld/lib/constants.js"(exports3, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var RDF = "http://www.w3.org/1999/02/22-rdf-syntax-ns#";
      var XSD = "http://www.w3.org/2001/XMLSchema#";
      module.exports = {
        // TODO: Deprecated and will be removed later. Use LINK_HEADER_CONTEXT.
        LINK_HEADER_REL: "http://www.w3.org/ns/json-ld#context",
        LINK_HEADER_CONTEXT: "http://www.w3.org/ns/json-ld#context",
        RDF,
        RDF_LIST: RDF + "List",
        RDF_FIRST: RDF + "first",
        RDF_REST: RDF + "rest",
        RDF_NIL: RDF + "nil",
        RDF_TYPE: RDF + "type",
        RDF_PLAIN_LITERAL: RDF + "PlainLiteral",
        RDF_XML_LITERAL: RDF + "XMLLiteral",
        RDF_JSON_LITERAL: RDF + "JSON",
        RDF_OBJECT: RDF + "object",
        RDF_LANGSTRING: RDF + "langString",
        XSD,
        XSD_BOOLEAN: XSD + "boolean",
        XSD_DOUBLE: XSD + "double",
        XSD_INTEGER: XSD + "integer",
        XSD_STRING: XSD + "string"
      };
    }
  });

  // node_modules/jsonld/lib/RequestQueue.js
  var require_RequestQueue = __commonJS({
    "node_modules/jsonld/lib/RequestQueue.js"(exports3, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      module.exports = class RequestQueue {
        /**
         * Creates a simple queue for requesting documents.
         */
        constructor() {
          this._requests = {};
        }
        wrapLoader(loader) {
          const self2 = this;
          self2._loader = loader;
          return function() {
            return self2.add.apply(self2, arguments);
          };
        }
        async add(url) {
          let promise = this._requests[url];
          if (promise) {
            return Promise.resolve(promise);
          }
          promise = this._requests[url] = this._loader(url);
          try {
            return await promise;
          } finally {
            delete this._requests[url];
          }
        }
      };
    }
  });

  // node_modules/jsonld/lib/url.js
  var require_url = __commonJS({
    "node_modules/jsonld/lib/url.js"(exports3, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var types = require_types();
      var api = {};
      module.exports = api;
      api.parsers = {
        simple: {
          // RFC 3986 basic parts
          keys: [
            "href",
            "scheme",
            "authority",
            "path",
            "query",
            "fragment"
          ],
          /* eslint-disable-next-line max-len */
          regex: /^(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/
        },
        full: {
          keys: [
            "href",
            "protocol",
            "scheme",
            "authority",
            "auth",
            "user",
            "password",
            "hostname",
            "port",
            "path",
            "directory",
            "file",
            "query",
            "fragment"
          ],
          /* eslint-disable-next-line max-len */
          regex: /^(([a-zA-Z][a-zA-Z0-9+-.]*):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?(?:(((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/
        }
      };
      api.parse = (str, parser) => {
        const parsed = {};
        const o = api.parsers[parser || "full"];
        const m = o.regex.exec(str);
        let i = o.keys.length;
        while (i--) {
          parsed[o.keys[i]] = m[i] === void 0 ? null : m[i];
        }
        if (parsed.scheme === "https" && parsed.port === "443" || parsed.scheme === "http" && parsed.port === "80") {
          parsed.href = parsed.href.replace(":" + parsed.port, "");
          parsed.authority = parsed.authority.replace(":" + parsed.port, "");
          parsed.port = null;
        }
        parsed.normalizedPath = api.removeDotSegments(parsed.path);
        return parsed;
      };
      api.prependBase = (base, iri) => {
        if (base === null) {
          return iri;
        }
        if (api.isAbsolute(iri)) {
          return iri;
        }
        if (!base || types.isString(base)) {
          base = api.parse(base || "");
        }
        const rel = api.parse(iri);
        const transform = {
          protocol: base.protocol || ""
        };
        if (rel.authority !== null) {
          transform.authority = rel.authority;
          transform.path = rel.path;
          transform.query = rel.query;
        } else {
          transform.authority = base.authority;
          if (rel.path === "") {
            transform.path = base.path;
            if (rel.query !== null) {
              transform.query = rel.query;
            } else {
              transform.query = base.query;
            }
          } else {
            if (rel.path.indexOf("/") === 0) {
              transform.path = rel.path;
            } else {
              let path = base.path;
              path = path.substr(0, path.lastIndexOf("/") + 1);
              if ((path.length > 0 || base.authority) && path.substr(-1) !== "/") {
                path += "/";
              }
              path += rel.path;
              transform.path = path;
            }
            transform.query = rel.query;
          }
        }
        if (rel.path !== "") {
          transform.path = api.removeDotSegments(transform.path);
        }
        let rval = transform.protocol;
        if (transform.authority !== null) {
          rval += "//" + transform.authority;
        }
        rval += transform.path;
        if (transform.query !== null) {
          rval += "?" + transform.query;
        }
        if (rel.fragment !== null) {
          rval += "#" + rel.fragment;
        }
        if (rval === "") {
          rval = "./";
        }
        return rval;
      };
      api.removeBase = (base, iri) => {
        if (base === null) {
          return iri;
        }
        if (!base || types.isString(base)) {
          base = api.parse(base || "");
        }
        let root = "";
        if (base.href !== "") {
          root += (base.protocol || "") + "//" + (base.authority || "");
        } else if (iri.indexOf("//")) {
          root += "//";
        }
        if (iri.indexOf(root) !== 0) {
          return iri;
        }
        const rel = api.parse(iri.substr(root.length));
        const baseSegments = base.normalizedPath.split("/");
        const iriSegments = rel.normalizedPath.split("/");
        const last = rel.fragment || rel.query ? 0 : 1;
        while (baseSegments.length > 0 && iriSegments.length > last) {
          if (baseSegments[0] !== iriSegments[0]) {
            break;
          }
          baseSegments.shift();
          iriSegments.shift();
        }
        let rval = "";
        if (baseSegments.length > 0) {
          baseSegments.pop();
          for (let i = 0; i < baseSegments.length; ++i) {
            rval += "../";
          }
        }
        rval += iriSegments.join("/");
        if (rel.query !== null) {
          rval += "?" + rel.query;
        }
        if (rel.fragment !== null) {
          rval += "#" + rel.fragment;
        }
        if (rval === "") {
          rval = "./";
        }
        return rval;
      };
      api.removeDotSegments = (path) => {
        if (path.length === 0) {
          return "";
        }
        const input = path.split("/");
        const output = [];
        while (input.length > 0) {
          const next = input.shift();
          const done = input.length === 0;
          if (next === ".") {
            if (done) {
              output.push("");
            }
            continue;
          }
          if (next === "..") {
            output.pop();
            if (done) {
              output.push("");
            }
            continue;
          }
          output.push(next);
        }
        if (path[0] === "/" && output.length > 0 && output[0] !== "") {
          output.unshift("");
        }
        if (output.length === 1 && output[0] === "") {
          return "/";
        }
        return output.join("/");
      };
      var isAbsoluteRegex = /^([A-Za-z][A-Za-z0-9+-.]*|_):[^\s]*$/;
      api.isAbsolute = (v) => types.isString(v) && isAbsoluteRegex.test(v);
      api.isRelative = (v) => types.isString(v);
    }
  });

  // node_modules/jsonld/lib/documentLoaders/xhr.js
  var require_xhr = __commonJS({
    "node_modules/jsonld/lib/documentLoaders/xhr.js"(exports3, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var { parseLinkHeader, buildHeaders } = require_util();
      var { LINK_HEADER_CONTEXT } = require_constants();
      var JsonLdError = require_JsonLdError();
      var RequestQueue = require_RequestQueue();
      var { prependBase } = require_url();
      var REGEX_LINK_HEADER = /(^|(\r\n))link:/i;
      module.exports = ({
        secure,
        headers = {},
        xhr
      } = { headers: {} }) => {
        headers = buildHeaders(headers);
        const queue2 = new RequestQueue();
        return queue2.wrapLoader(loader);
        async function loader(url) {
          if (url.indexOf("http:") !== 0 && url.indexOf("https:") !== 0) {
            throw new JsonLdError(
              'URL could not be dereferenced; only "http" and "https" URLs are supported.',
              "jsonld.InvalidUrl",
              { code: "loading document failed", url }
            );
          }
          if (secure && url.indexOf("https") !== 0) {
            throw new JsonLdError(
              `URL could not be dereferenced; secure mode is enabled and the URL's scheme is not "https".`,
              "jsonld.InvalidUrl",
              { code: "loading document failed", url }
            );
          }
          let req;
          try {
            req = await _get(xhr, url, headers);
          } catch (e2) {
            throw new JsonLdError(
              "URL could not be dereferenced, an error occurred.",
              "jsonld.LoadDocumentError",
              { code: "loading document failed", url, cause: e2 }
            );
          }
          if (req.status >= 400) {
            throw new JsonLdError(
              "URL could not be dereferenced: " + req.statusText,
              "jsonld.LoadDocumentError",
              {
                code: "loading document failed",
                url,
                httpStatusCode: req.status
              }
            );
          }
          let doc = { contextUrl: null, documentUrl: url, document: req.response };
          let alternate = null;
          const contentType = req.getResponseHeader("Content-Type");
          let linkHeader;
          if (REGEX_LINK_HEADER.test(req.getAllResponseHeaders())) {
            linkHeader = req.getResponseHeader("Link");
          }
          if (linkHeader && contentType !== "application/ld+json") {
            const linkHeaders = parseLinkHeader(linkHeader);
            const linkedContext = linkHeaders[LINK_HEADER_CONTEXT];
            if (Array.isArray(linkedContext)) {
              throw new JsonLdError(
                "URL could not be dereferenced, it has more than one associated HTTP Link Header.",
                "jsonld.InvalidUrl",
                { code: "multiple context link headers", url }
              );
            }
            if (linkedContext) {
              doc.contextUrl = linkedContext.target;
            }
            alternate = linkHeaders.alternate;
            if (alternate && alternate.type == "application/ld+json" && !(contentType || "").match(/^application\/(\w*\+)?json$/)) {
              doc = await loader(prependBase(url, alternate.target));
            }
          }
          return doc;
        }
      };
      function _get(xhr, url, headers) {
        xhr = xhr || XMLHttpRequest;
        const req = new xhr();
        return new Promise((resolve, reject) => {
          req.onload = () => resolve(req);
          req.onerror = (err) => reject(err);
          req.open("GET", url, true);
          for (const k in headers) {
            req.setRequestHeader(k, headers[k]);
          }
          req.send();
        });
      }
    }
  });

  // node_modules/jsonld/lib/platform-browser.js
  var require_platform_browser = __commonJS({
    "node_modules/jsonld/lib/platform-browser.js"(exports3, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var xhrLoader = require_xhr();
      var api = {};
      module.exports = api;
      api.setupDocumentLoaders = function(jsonld2) {
        if (typeof XMLHttpRequest !== "undefined") {
          jsonld2.documentLoaders.xhr = xhrLoader;
          jsonld2.useDocumentLoader("xhr");
        }
      };
      api.setupGlobals = function(jsonld2) {
        if (typeof globalThis.JsonLdProcessor === "undefined") {
          Object.defineProperty(globalThis, "JsonLdProcessor", {
            writable: true,
            enumerable: false,
            configurable: true,
            value: jsonld2.JsonLdProcessor
          });
        }
      };
    }
  });

  // node_modules/yallist/iterator.js
  var require_iterator = __commonJS({
    "node_modules/yallist/iterator.js"(exports3, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      module.exports = function(Yallist) {
        Yallist.prototype[Symbol.iterator] = function* () {
          for (let walker = this.head; walker; walker = walker.next) {
            yield walker.value;
          }
        };
      };
    }
  });

  // node_modules/yallist/yallist.js
  var require_yallist = __commonJS({
    "node_modules/yallist/yallist.js"(exports3, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      module.exports = Yallist;
      Yallist.Node = Node;
      Yallist.create = Yallist;
      function Yallist(list) {
        var self2 = this;
        if (!(self2 instanceof Yallist)) {
          self2 = new Yallist();
        }
        self2.tail = null;
        self2.head = null;
        self2.length = 0;
        if (list && typeof list.forEach === "function") {
          list.forEach(function(item) {
            self2.push(item);
          });
        } else if (arguments.length > 0) {
          for (var i = 0, l = arguments.length; i < l; i++) {
            self2.push(arguments[i]);
          }
        }
        return self2;
      }
      Yallist.prototype.removeNode = function(node) {
        if (node.list !== this) {
          throw new Error("removing node which does not belong to this list");
        }
        var next = node.next;
        var prev = node.prev;
        if (next) {
          next.prev = prev;
        }
        if (prev) {
          prev.next = next;
        }
        if (node === this.head) {
          this.head = next;
        }
        if (node === this.tail) {
          this.tail = prev;
        }
        node.list.length--;
        node.next = null;
        node.prev = null;
        node.list = null;
        return next;
      };
      Yallist.prototype.unshiftNode = function(node) {
        if (node === this.head) {
          return;
        }
        if (node.list) {
          node.list.removeNode(node);
        }
        var head = this.head;
        node.list = this;
        node.next = head;
        if (head) {
          head.prev = node;
        }
        this.head = node;
        if (!this.tail) {
          this.tail = node;
        }
        this.length++;
      };
      Yallist.prototype.pushNode = function(node) {
        if (node === this.tail) {
          return;
        }
        if (node.list) {
          node.list.removeNode(node);
        }
        var tail = this.tail;
        node.list = this;
        node.prev = tail;
        if (tail) {
          tail.next = node;
        }
        this.tail = node;
        if (!this.head) {
          this.head = node;
        }
        this.length++;
      };
      Yallist.prototype.push = function() {
        for (var i = 0, l = arguments.length; i < l; i++) {
          push(this, arguments[i]);
        }
        return this.length;
      };
      Yallist.prototype.unshift = function() {
        for (var i = 0, l = arguments.length; i < l; i++) {
          unshift(this, arguments[i]);
        }
        return this.length;
      };
      Yallist.prototype.pop = function() {
        if (!this.tail) {
          return void 0;
        }
        var res = this.tail.value;
        this.tail = this.tail.prev;
        if (this.tail) {
          this.tail.next = null;
        } else {
          this.head = null;
        }
        this.length--;
        return res;
      };
      Yallist.prototype.shift = function() {
        if (!this.head) {
          return void 0;
        }
        var res = this.head.value;
        this.head = this.head.next;
        if (this.head) {
          this.head.prev = null;
        } else {
          this.tail = null;
        }
        this.length--;
        return res;
      };
      Yallist.prototype.forEach = function(fn, thisp) {
        thisp = thisp || this;
        for (var walker = this.head, i = 0; walker !== null; i++) {
          fn.call(thisp, walker.value, i, this);
          walker = walker.next;
        }
      };
      Yallist.prototype.forEachReverse = function(fn, thisp) {
        thisp = thisp || this;
        for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
          fn.call(thisp, walker.value, i, this);
          walker = walker.prev;
        }
      };
      Yallist.prototype.get = function(n2) {
        for (var i = 0, walker = this.head; walker !== null && i < n2; i++) {
          walker = walker.next;
        }
        if (i === n2 && walker !== null) {
          return walker.value;
        }
      };
      Yallist.prototype.getReverse = function(n2) {
        for (var i = 0, walker = this.tail; walker !== null && i < n2; i++) {
          walker = walker.prev;
        }
        if (i === n2 && walker !== null) {
          return walker.value;
        }
      };
      Yallist.prototype.map = function(fn, thisp) {
        thisp = thisp || this;
        var res = new Yallist();
        for (var walker = this.head; walker !== null; ) {
          res.push(fn.call(thisp, walker.value, this));
          walker = walker.next;
        }
        return res;
      };
      Yallist.prototype.mapReverse = function(fn, thisp) {
        thisp = thisp || this;
        var res = new Yallist();
        for (var walker = this.tail; walker !== null; ) {
          res.push(fn.call(thisp, walker.value, this));
          walker = walker.prev;
        }
        return res;
      };
      Yallist.prototype.reduce = function(fn, initial) {
        var acc;
        var walker = this.head;
        if (arguments.length > 1) {
          acc = initial;
        } else if (this.head) {
          walker = this.head.next;
          acc = this.head.value;
        } else {
          throw new TypeError("Reduce of empty list with no initial value");
        }
        for (var i = 0; walker !== null; i++) {
          acc = fn(acc, walker.value, i);
          walker = walker.next;
        }
        return acc;
      };
      Yallist.prototype.reduceReverse = function(fn, initial) {
        var acc;
        var walker = this.tail;
        if (arguments.length > 1) {
          acc = initial;
        } else if (this.tail) {
          walker = this.tail.prev;
          acc = this.tail.value;
        } else {
          throw new TypeError("Reduce of empty list with no initial value");
        }
        for (var i = this.length - 1; walker !== null; i--) {
          acc = fn(acc, walker.value, i);
          walker = walker.prev;
        }
        return acc;
      };
      Yallist.prototype.toArray = function() {
        var arr = new Array(this.length);
        for (var i = 0, walker = this.head; walker !== null; i++) {
          arr[i] = walker.value;
          walker = walker.next;
        }
        return arr;
      };
      Yallist.prototype.toArrayReverse = function() {
        var arr = new Array(this.length);
        for (var i = 0, walker = this.tail; walker !== null; i++) {
          arr[i] = walker.value;
          walker = walker.prev;
        }
        return arr;
      };
      Yallist.prototype.slice = function(from, to) {
        to = to || this.length;
        if (to < 0) {
          to += this.length;
        }
        from = from || 0;
        if (from < 0) {
          from += this.length;
        }
        var ret = new Yallist();
        if (to < from || to < 0) {
          return ret;
        }
        if (from < 0) {
          from = 0;
        }
        if (to > this.length) {
          to = this.length;
        }
        for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
          walker = walker.next;
        }
        for (; walker !== null && i < to; i++, walker = walker.next) {
          ret.push(walker.value);
        }
        return ret;
      };
      Yallist.prototype.sliceReverse = function(from, to) {
        to = to || this.length;
        if (to < 0) {
          to += this.length;
        }
        from = from || 0;
        if (from < 0) {
          from += this.length;
        }
        var ret = new Yallist();
        if (to < from || to < 0) {
          return ret;
        }
        if (from < 0) {
          from = 0;
        }
        if (to > this.length) {
          to = this.length;
        }
        for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
          walker = walker.prev;
        }
        for (; walker !== null && i > from; i--, walker = walker.prev) {
          ret.push(walker.value);
        }
        return ret;
      };
      Yallist.prototype.splice = function(start, deleteCount, ...nodes) {
        if (start > this.length) {
          start = this.length - 1;
        }
        if (start < 0) {
          start = this.length + start;
        }
        for (var i = 0, walker = this.head; walker !== null && i < start; i++) {
          walker = walker.next;
        }
        var ret = [];
        for (var i = 0; walker && i < deleteCount; i++) {
          ret.push(walker.value);
          walker = this.removeNode(walker);
        }
        if (walker === null) {
          walker = this.tail;
        }
        if (walker !== this.head && walker !== this.tail) {
          walker = walker.prev;
        }
        for (var i = 0; i < nodes.length; i++) {
          walker = insert(this, walker, nodes[i]);
        }
        return ret;
      };
      Yallist.prototype.reverse = function() {
        var head = this.head;
        var tail = this.tail;
        for (var walker = head; walker !== null; walker = walker.prev) {
          var p = walker.prev;
          walker.prev = walker.next;
          walker.next = p;
        }
        this.head = tail;
        this.tail = head;
        return this;
      };
      function insert(self2, node, value) {
        var inserted = node === self2.head ? new Node(value, null, node, self2) : new Node(value, node, node.next, self2);
        if (inserted.next === null) {
          self2.tail = inserted;
        }
        if (inserted.prev === null) {
          self2.head = inserted;
        }
        self2.length++;
        return inserted;
      }
      function push(self2, item) {
        self2.tail = new Node(item, self2.tail, null, self2);
        if (!self2.head) {
          self2.head = self2.tail;
        }
        self2.length++;
      }
      function unshift(self2, item) {
        self2.head = new Node(item, null, self2.head, self2);
        if (!self2.tail) {
          self2.tail = self2.head;
        }
        self2.length++;
      }
      function Node(value, prev, next, list) {
        if (!(this instanceof Node)) {
          return new Node(value, prev, next, list);
        }
        this.list = list;
        this.value = value;
        if (prev) {
          prev.next = this;
          this.prev = prev;
        } else {
          this.prev = null;
        }
        if (next) {
          next.prev = this;
          this.next = next;
        } else {
          this.next = null;
        }
      }
      try {
        require_iterator()(Yallist);
      } catch (er) {
      }
    }
  });

  // node_modules/lru-cache/index.js
  var require_lru_cache = __commonJS({
    "node_modules/lru-cache/index.js"(exports3, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var Yallist = require_yallist();
      var MAX = Symbol("max");
      var LENGTH = Symbol("length");
      var LENGTH_CALCULATOR = Symbol("lengthCalculator");
      var ALLOW_STALE = Symbol("allowStale");
      var MAX_AGE = Symbol("maxAge");
      var DISPOSE = Symbol("dispose");
      var NO_DISPOSE_ON_SET = Symbol("noDisposeOnSet");
      var LRU_LIST = Symbol("lruList");
      var CACHE = Symbol("cache");
      var UPDATE_AGE_ON_GET = Symbol("updateAgeOnGet");
      var naiveLength = () => 1;
      var LRUCache = class {
        constructor(options) {
          if (typeof options === "number")
            options = { max: options };
          if (!options)
            options = {};
          if (options.max && (typeof options.max !== "number" || options.max < 0))
            throw new TypeError("max must be a non-negative number");
          const max = this[MAX] = options.max || Infinity;
          const lc = options.length || naiveLength;
          this[LENGTH_CALCULATOR] = typeof lc !== "function" ? naiveLength : lc;
          this[ALLOW_STALE] = options.stale || false;
          if (options.maxAge && typeof options.maxAge !== "number")
            throw new TypeError("maxAge must be a number");
          this[MAX_AGE] = options.maxAge || 0;
          this[DISPOSE] = options.dispose;
          this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false;
          this[UPDATE_AGE_ON_GET] = options.updateAgeOnGet || false;
          this.reset();
        }
        // resize the cache when the max changes.
        set max(mL) {
          if (typeof mL !== "number" || mL < 0)
            throw new TypeError("max must be a non-negative number");
          this[MAX] = mL || Infinity;
          trim(this);
        }
        get max() {
          return this[MAX];
        }
        set allowStale(allowStale) {
          this[ALLOW_STALE] = !!allowStale;
        }
        get allowStale() {
          return this[ALLOW_STALE];
        }
        set maxAge(mA) {
          if (typeof mA !== "number")
            throw new TypeError("maxAge must be a non-negative number");
          this[MAX_AGE] = mA;
          trim(this);
        }
        get maxAge() {
          return this[MAX_AGE];
        }
        // resize the cache when the lengthCalculator changes.
        set lengthCalculator(lC) {
          if (typeof lC !== "function")
            lC = naiveLength;
          if (lC !== this[LENGTH_CALCULATOR]) {
            this[LENGTH_CALCULATOR] = lC;
            this[LENGTH] = 0;
            this[LRU_LIST].forEach((hit) => {
              hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key);
              this[LENGTH] += hit.length;
            });
          }
          trim(this);
        }
        get lengthCalculator() {
          return this[LENGTH_CALCULATOR];
        }
        get length() {
          return this[LENGTH];
        }
        get itemCount() {
          return this[LRU_LIST].length;
        }
        rforEach(fn, thisp) {
          thisp = thisp || this;
          for (let walker = this[LRU_LIST].tail; walker !== null; ) {
            const prev = walker.prev;
            forEachStep(this, fn, walker, thisp);
            walker = prev;
          }
        }
        forEach(fn, thisp) {
          thisp = thisp || this;
          for (let walker = this[LRU_LIST].head; walker !== null; ) {
            const next = walker.next;
            forEachStep(this, fn, walker, thisp);
            walker = next;
          }
        }
        keys() {
          return this[LRU_LIST].toArray().map((k) => k.key);
        }
        values() {
          return this[LRU_LIST].toArray().map((k) => k.value);
        }
        reset() {
          if (this[DISPOSE] && this[LRU_LIST] && this[LRU_LIST].length) {
            this[LRU_LIST].forEach((hit) => this[DISPOSE](hit.key, hit.value));
          }
          this[CACHE] = /* @__PURE__ */ new Map();
          this[LRU_LIST] = new Yallist();
          this[LENGTH] = 0;
        }
        dump() {
          return this[LRU_LIST].map((hit) => isStale(this, hit) ? false : {
            k: hit.key,
            v: hit.value,
            e: hit.now + (hit.maxAge || 0)
          }).toArray().filter((h) => h);
        }
        dumpLru() {
          return this[LRU_LIST];
        }
        set(key, value, maxAge) {
          maxAge = maxAge || this[MAX_AGE];
          if (maxAge && typeof maxAge !== "number")
            throw new TypeError("maxAge must be a number");
          const now = maxAge ? Date.now() : 0;
          const len = this[LENGTH_CALCULATOR](value, key);
          if (this[CACHE].has(key)) {
            if (len > this[MAX]) {
              del(this, this[CACHE].get(key));
              return false;
            }
            const node = this[CACHE].get(key);
            const item = node.value;
            if (this[DISPOSE]) {
              if (!this[NO_DISPOSE_ON_SET])
                this[DISPOSE](key, item.value);
            }
            item.now = now;
            item.maxAge = maxAge;
            item.value = value;
            this[LENGTH] += len - item.length;
            item.length = len;
            this.get(key);
            trim(this);
            return true;
          }
          const hit = new Entry(key, value, len, now, maxAge);
          if (hit.length > this[MAX]) {
            if (this[DISPOSE])
              this[DISPOSE](key, value);
            return false;
          }
          this[LENGTH] += hit.length;
          this[LRU_LIST].unshift(hit);
          this[CACHE].set(key, this[LRU_LIST].head);
          trim(this);
          return true;
        }
        has(key) {
          if (!this[CACHE].has(key)) return false;
          const hit = this[CACHE].get(key).value;
          return !isStale(this, hit);
        }
        get(key) {
          return get(this, key, true);
        }
        peek(key) {
          return get(this, key, false);
        }
        pop() {
          const node = this[LRU_LIST].tail;
          if (!node)
            return null;
          del(this, node);
          return node.value;
        }
        del(key) {
          del(this, this[CACHE].get(key));
        }
        load(arr) {
          this.reset();
          const now = Date.now();
          for (let l = arr.length - 1; l >= 0; l--) {
            const hit = arr[l];
            const expiresAt = hit.e || 0;
            if (expiresAt === 0)
              this.set(hit.k, hit.v);
            else {
              const maxAge = expiresAt - now;
              if (maxAge > 0) {
                this.set(hit.k, hit.v, maxAge);
              }
            }
          }
        }
        prune() {
          this[CACHE].forEach((value, key) => get(this, key, false));
        }
      };
      var get = (self2, key, doUse) => {
        const node = self2[CACHE].get(key);
        if (node) {
          const hit = node.value;
          if (isStale(self2, hit)) {
            del(self2, node);
            if (!self2[ALLOW_STALE])
              return void 0;
          } else {
            if (doUse) {
              if (self2[UPDATE_AGE_ON_GET])
                node.value.now = Date.now();
              self2[LRU_LIST].unshiftNode(node);
            }
          }
          return hit.value;
        }
      };
      var isStale = (self2, hit) => {
        if (!hit || !hit.maxAge && !self2[MAX_AGE])
          return false;
        const diff = Date.now() - hit.now;
        return hit.maxAge ? diff > hit.maxAge : self2[MAX_AGE] && diff > self2[MAX_AGE];
      };
      var trim = (self2) => {
        if (self2[LENGTH] > self2[MAX]) {
          for (let walker = self2[LRU_LIST].tail; self2[LENGTH] > self2[MAX] && walker !== null; ) {
            const prev = walker.prev;
            del(self2, walker);
            walker = prev;
          }
        }
      };
      var del = (self2, node) => {
        if (node) {
          const hit = node.value;
          if (self2[DISPOSE])
            self2[DISPOSE](hit.key, hit.value);
          self2[LENGTH] -= hit.length;
          self2[CACHE].delete(hit.key);
          self2[LRU_LIST].removeNode(node);
        }
      };
      var Entry = class {
        constructor(key, value, length, now, maxAge) {
          this.key = key;
          this.value = value;
          this.length = length;
          this.now = now;
          this.maxAge = maxAge || 0;
        }
      };
      var forEachStep = (self2, fn, node, thisp) => {
        let hit = node.value;
        if (isStale(self2, hit)) {
          del(self2, node);
          if (!self2[ALLOW_STALE])
            hit = void 0;
        }
        if (hit)
          fn.call(thisp, hit.value, hit.key, self2);
      };
      module.exports = LRUCache;
    }
  });

  // node_modules/jsonld/lib/ResolvedContext.js
  var require_ResolvedContext = __commonJS({
    "node_modules/jsonld/lib/ResolvedContext.js"(exports3, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var LRU = require_lru_cache();
      var MAX_ACTIVE_CONTEXTS = 10;
      module.exports = class ResolvedContext {
        /**
         * Creates a ResolvedContext.
         *
         * @param document the context document.
         */
        constructor({ document }) {
          this.document = document;
          this.cache = new LRU({ max: MAX_ACTIVE_CONTEXTS });
        }
        getProcessed(activeCtx) {
          return this.cache.get(activeCtx);
        }
        setProcessed(activeCtx, processedCtx) {
          this.cache.set(activeCtx, processedCtx);
        }
      };
    }
  });

  // node_modules/jsonld/lib/ContextResolver.js
  var require_ContextResolver = __commonJS({
    "node_modules/jsonld/lib/ContextResolver.js"(exports3, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var {
        isArray: _isArray,
        isObject: _isObject,
        isString: _isString
      } = require_types();
      var {
        asArray: _asArray
      } = require_util();
      var { prependBase } = require_url();
      var JsonLdError = require_JsonLdError();
      var ResolvedContext = require_ResolvedContext();
      var MAX_CONTEXT_URLS = 10;
      module.exports = class ContextResolver {
        /**
         * Creates a ContextResolver.
         *
         * @param sharedCache a shared LRU cache with `get` and `set` APIs.
         */
        constructor({ sharedCache }) {
          this.perOpCache = /* @__PURE__ */ new Map();
          this.sharedCache = sharedCache;
        }
        async resolve({
          activeCtx,
          context,
          documentLoader,
          base,
          cycles = /* @__PURE__ */ new Set()
        }) {
          if (context && _isObject(context) && context["@context"]) {
            context = context["@context"];
          }
          context = _asArray(context);
          const allResolved = [];
          for (const ctx of context) {
            if (_isString(ctx)) {
              let resolved2 = this._get(ctx);
              if (!resolved2) {
                resolved2 = await this._resolveRemoteContext(
                  { activeCtx, url: ctx, documentLoader, base, cycles }
                );
              }
              if (_isArray(resolved2)) {
                allResolved.push(...resolved2);
              } else {
                allResolved.push(resolved2);
              }
              continue;
            }
            if (ctx === null) {
              allResolved.push(new ResolvedContext({ document: null }));
              continue;
            }
            if (!_isObject(ctx)) {
              _throwInvalidLocalContext(context);
            }
            const key = JSON.stringify(ctx);
            let resolved = this._get(key);
            if (!resolved) {
              resolved = new ResolvedContext({ document: ctx });
              this._cacheResolvedContext({ key, resolved, tag: "static" });
            }
            allResolved.push(resolved);
          }
          return allResolved;
        }
        _get(key) {
          let resolved = this.perOpCache.get(key);
          if (!resolved) {
            const tagMap = this.sharedCache.get(key);
            if (tagMap) {
              resolved = tagMap.get("static");
              if (resolved) {
                this.perOpCache.set(key, resolved);
              }
            }
          }
          return resolved;
        }
        _cacheResolvedContext({ key, resolved, tag }) {
          this.perOpCache.set(key, resolved);
          if (tag !== void 0) {
            let tagMap = this.sharedCache.get(key);
            if (!tagMap) {
              tagMap = /* @__PURE__ */ new Map();
              this.sharedCache.set(key, tagMap);
            }
            tagMap.set(tag, resolved);
          }
          return resolved;
        }
        async _resolveRemoteContext({ activeCtx, url, documentLoader, base, cycles }) {
          url = prependBase(base, url);
          const { context, remoteDoc } = await this._fetchContext(
            { activeCtx, url, documentLoader, cycles }
          );
          base = remoteDoc.documentUrl || url;
          _resolveContextUrls({ context, base });
          const resolved = await this.resolve(
            { activeCtx, context, documentLoader, base, cycles }
          );
          this._cacheResolvedContext({ key: url, resolved, tag: remoteDoc.tag });
          return resolved;
        }
        async _fetchContext({ activeCtx, url, documentLoader, cycles }) {
          if (cycles.size > MAX_CONTEXT_URLS) {
            throw new JsonLdError(
              "Maximum number of @context URLs exceeded.",
              "jsonld.ContextUrlError",
              {
                code: activeCtx.processingMode === "json-ld-1.0" ? "loading remote context failed" : "context overflow",
                max: MAX_CONTEXT_URLS
              }
            );
          }
          if (cycles.has(url)) {
            throw new JsonLdError(
              "Cyclical @context URLs detected.",
              "jsonld.ContextUrlError",
              {
                code: activeCtx.processingMode === "json-ld-1.0" ? "recursive context inclusion" : "context overflow",
                url
              }
            );
          }
          cycles.add(url);
          let context;
          let remoteDoc;
          try {
            remoteDoc = await documentLoader(url);
            context = remoteDoc.document || null;
            if (_isString(context)) {
              context = JSON.parse(context);
            }
          } catch (e2) {
            throw new JsonLdError(
              "Dereferencing a URL did not result in a valid JSON-LD object. Possible causes are an inaccessible URL perhaps due to a same-origin policy (ensure the server uses CORS if you are using client-side JavaScript), too many redirects, a non-JSON response, or more than one HTTP Link Header was provided for a remote context.",
              "jsonld.InvalidUrl",
              { code: "loading remote context failed", url, cause: e2 }
            );
          }
          if (!_isObject(context)) {
            throw new JsonLdError(
              "Dereferencing a URL did not result in a JSON object. The response was valid JSON, but it was not a JSON object.",
              "jsonld.InvalidUrl",
              { code: "invalid remote context", url }
            );
          }
          if (!("@context" in context)) {
            context = { "@context": {} };
          } else {
            context = { "@context": context["@context"] };
          }
          if (remoteDoc.contextUrl) {
            if (!_isArray(context["@context"])) {
              context["@context"] = [context["@context"]];
            }
            context["@context"].push(remoteDoc.contextUrl);
          }
          return { context, remoteDoc };
        }
      };
      function _throwInvalidLocalContext(ctx) {
        throw new JsonLdError(
          "Invalid JSON-LD syntax; @context must be an object.",
          "jsonld.SyntaxError",
          {
            code: "invalid local context",
            context: ctx
          }
        );
      }
      function _resolveContextUrls({ context, base }) {
        if (!context) {
          return;
        }
        const ctx = context["@context"];
        if (_isString(ctx)) {
          context["@context"] = prependBase(base, ctx);
          return;
        }
        if (_isArray(ctx)) {
          for (let i = 0; i < ctx.length; ++i) {
            const element = ctx[i];
            if (_isString(element)) {
              ctx[i] = prependBase(base, element);
              continue;
            }
            if (_isObject(element)) {
              _resolveContextUrls({ context: { "@context": element }, base });
            }
          }
          return;
        }
        if (!_isObject(ctx)) {
          return;
        }
        for (const term in ctx) {
          _resolveContextUrls({ context: ctx[term], base });
        }
      }
    }
  });

  // node_modules/jsonld/lib/NQuads.js
  var require_NQuads2 = __commonJS({
    "node_modules/jsonld/lib/NQuads.js"(exports3, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      module.exports = require_rdf_canonize().NQuads;
    }
  });

  // node_modules/jsonld/lib/events.js
  var require_events = __commonJS({
    "node_modules/jsonld/lib/events.js"(exports3, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var JsonLdError = require_JsonLdError();
      var {
        isArray: _isArray
      } = require_types();
      var {
        asArray: _asArray
      } = require_util();
      var api = {};
      module.exports = api;
      api.defaultEventHandler = null;
      api.setupEventHandler = ({ options = {} }) => {
        const eventHandler = [].concat(
          options.safe ? api.safeEventHandler : [],
          options.eventHandler ? _asArray(options.eventHandler) : [],
          api.defaultEventHandler ? api.defaultEventHandler : []
        );
        return eventHandler.length === 0 ? null : eventHandler;
      };
      api.handleEvent = ({
        event,
        options
      }) => {
        _handle({ event, handlers: options.eventHandler });
      };
      function _handle({ event, handlers }) {
        let doNext = true;
        for (let i = 0; doNext && i < handlers.length; ++i) {
          doNext = false;
          const handler = handlers[i];
          if (_isArray(handler)) {
            doNext = _handle({ event, handlers: handler });
          } else if (typeof handler === "function") {
            handler({ event, next: () => {
              doNext = true;
            } });
          } else if (typeof handler === "object") {
            if (event.code in handler) {
              handler[event.code]({ event, next: () => {
                doNext = true;
              } });
            } else {
              doNext = true;
            }
          } else {
            throw new JsonLdError(
              "Invalid event handler.",
              "jsonld.InvalidEventHandler",
              { event }
            );
          }
        }
        return doNext;
      }
      var _notSafeEventCodes = /* @__PURE__ */ new Set([
        "empty object",
        "free-floating scalar",
        "invalid @language value",
        "invalid property",
        // NOTE: spec edge case
        "null @id value",
        "null @value value",
        "object with only @id",
        "object with only @language",
        "object with only @list",
        "object with only @value",
        "relative @id reference",
        "relative @type reference",
        "relative @vocab reference",
        "reserved @id value",
        "reserved @reverse value",
        "reserved term",
        // toRDF
        "blank node predicate",
        "relative graph reference",
        "relative object reference",
        "relative predicate reference",
        "relative subject reference",
        // toRDF / fromRDF
        "rdfDirection not set"
      ]);
      api.safeEventHandler = function safeEventHandler({ event, next }) {
        if (event.level === "warning" && _notSafeEventCodes.has(event.code)) {
          throw new JsonLdError(
            "Safe mode validation error.",
            "jsonld.ValidationError",
            { event }
          );
        }
        next();
      };
      api.logEventHandler = function logEventHandler({ event, next }) {
        console.log(`EVENT: ${event.message}`, { event });
        next();
      };
      api.logWarningEventHandler = function logWarningEventHandler({ event, next }) {
        if (event.level === "warning") {
          console.warn(`WARNING: ${event.message}`, { event });
        }
        next();
      };
      api.unhandledEventHandler = function unhandledEventHandler({ event }) {
        throw new JsonLdError(
          "No handler for event.",
          "jsonld.UnhandledEvent",
          { event }
        );
      };
      api.setDefaultEventHandler = function({ eventHandler } = {}) {
        api.defaultEventHandler = eventHandler ? _asArray(eventHandler) : null;
      };
    }
  });

  // node_modules/jsonld/lib/context.js
  var require_context = __commonJS({
    "node_modules/jsonld/lib/context.js"(exports3, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var util = require_util();
      var JsonLdError = require_JsonLdError();
      var {
        isArray: _isArray,
        isObject: _isObject,
        isString: _isString,
        isUndefined: _isUndefined
      } = require_types();
      var {
        isAbsolute: _isAbsoluteIri,
        isRelative: _isRelativeIri,
        prependBase
      } = require_url();
      var {
        handleEvent: _handleEvent
      } = require_events();
      var {
        REGEX_BCP47,
        REGEX_KEYWORD,
        asArray: _asArray,
        compareShortestLeast: _compareShortestLeast
      } = require_util();
      var INITIAL_CONTEXT_CACHE = /* @__PURE__ */ new Map();
      var INITIAL_CONTEXT_CACHE_MAX_SIZE = 1e4;
      var api = {};
      module.exports = api;
      api.process = async ({
        activeCtx,
        localCtx,
        options,
        propagate = true,
        overrideProtected = false,
        cycles = /* @__PURE__ */ new Set()
      }) => {
        if (_isObject(localCtx) && "@context" in localCtx && _isArray(localCtx["@context"])) {
          localCtx = localCtx["@context"];
        }
        const ctxs = _asArray(localCtx);
        if (ctxs.length === 0) {
          return activeCtx;
        }
        const events = [];
        const eventCaptureHandler = [
          ({ event, next }) => {
            events.push(event);
            next();
          }
        ];
        if (options.eventHandler) {
          eventCaptureHandler.push(options.eventHandler);
        }
        const originalOptions = options;
        options = { ...options, eventHandler: eventCaptureHandler };
        const resolved = await options.contextResolver.resolve({
          activeCtx,
          context: localCtx,
          documentLoader: options.documentLoader,
          base: options.base
        });
        if (_isObject(resolved[0].document) && typeof resolved[0].document["@propagate"] === "boolean") {
          propagate = resolved[0].document["@propagate"];
        }
        let rval = activeCtx;
        if (!propagate && !rval.previousContext) {
          rval = rval.clone();
          rval.previousContext = activeCtx;
        }
        for (const resolvedContext of resolved) {
          let { document: ctx } = resolvedContext;
          activeCtx = rval;
          if (ctx === null) {
            if (!overrideProtected && Object.keys(activeCtx.protected).length !== 0) {
              throw new JsonLdError(
                "Tried to nullify a context with protected terms outside of a term definition.",
                "jsonld.SyntaxError",
                { code: "invalid context nullification" }
              );
            }
            rval = activeCtx = api.getInitialContext(options).clone();
            continue;
          }
          const processed = resolvedContext.getProcessed(activeCtx);
          if (processed) {
            if (originalOptions.eventHandler) {
              for (const event of processed.events) {
                _handleEvent({ event, options: originalOptions });
              }
            }
            rval = activeCtx = processed.context;
            continue;
          }
          if (_isObject(ctx) && "@context" in ctx) {
            ctx = ctx["@context"];
          }
          if (!_isObject(ctx)) {
            throw new JsonLdError(
              "Invalid JSON-LD syntax; @context must be an object.",
              "jsonld.SyntaxError",
              { code: "invalid local context", context: ctx }
            );
          }
          rval = rval.clone();
          const defined = /* @__PURE__ */ new Map();
          if ("@version" in ctx) {
            if (ctx["@version"] !== 1.1) {
              throw new JsonLdError(
                "Unsupported JSON-LD version: " + ctx["@version"],
                "jsonld.UnsupportedVersion",
                { code: "invalid @version value", context: ctx }
              );
            }
            if (activeCtx.processingMode && activeCtx.processingMode === "json-ld-1.0") {
              throw new JsonLdError(
                "@version: " + ctx["@version"] + " not compatible with " + activeCtx.processingMode,
                "jsonld.ProcessingModeConflict",
                { code: "processing mode conflict", context: ctx }
              );
            }
            rval.processingMode = "json-ld-1.1";
            rval["@version"] = ctx["@version"];
            defined.set("@version", true);
          }
          rval.processingMode = rval.processingMode || activeCtx.processingMode;
          if ("@base" in ctx) {
            let base = ctx["@base"];
            if (base === null || _isAbsoluteIri(base)) {
            } else if (_isRelativeIri(base)) {
              base = prependBase(rval["@base"], base);
            } else {
              throw new JsonLdError(
                'Invalid JSON-LD syntax; the value of "@base" in a @context must be an absolute IRI, a relative IRI, or null.',
                "jsonld.SyntaxError",
                { code: "invalid base IRI", context: ctx }
              );
            }
            rval["@base"] = base;
            defined.set("@base", true);
          }
          if ("@vocab" in ctx) {
            const value = ctx["@vocab"];
            if (value === null) {
              delete rval["@vocab"];
            } else if (!_isString(value)) {
              throw new JsonLdError(
                'Invalid JSON-LD syntax; the value of "@vocab" in a @context must be a string or null.',
                "jsonld.SyntaxError",
                { code: "invalid vocab mapping", context: ctx }
              );
            } else if (!_isAbsoluteIri(value) && api.processingMode(rval, 1)) {
              throw new JsonLdError(
                'Invalid JSON-LD syntax; the value of "@vocab" in a @context must be an absolute IRI.',
                "jsonld.SyntaxError",
                { code: "invalid vocab mapping", context: ctx }
              );
            } else {
              const vocab = _expandIri(
                rval,
                value,
                { vocab: true, base: true },
                void 0,
                void 0,
                options
              );
              if (!_isAbsoluteIri(vocab)) {
                if (options.eventHandler) {
                  _handleEvent({
                    event: {
                      type: ["JsonLdEvent"],
                      code: "relative @vocab reference",
                      level: "warning",
                      message: "Relative @vocab reference found.",
                      details: {
                        vocab
                      }
                    },
                    options
                  });
                }
              }
              rval["@vocab"] = vocab;
            }
            defined.set("@vocab", true);
          }
          if ("@language" in ctx) {
            const value = ctx["@language"];
            if (value === null) {
              delete rval["@language"];
            } else if (!_isString(value)) {
              throw new JsonLdError(
                'Invalid JSON-LD syntax; the value of "@language" in a @context must be a string or null.',
                "jsonld.SyntaxError",
                { code: "invalid default language", context: ctx }
              );
            } else {
              if (!value.match(REGEX_BCP47)) {
                if (options.eventHandler) {
                  _handleEvent({
                    event: {
                      type: ["JsonLdEvent"],
                      code: "invalid @language value",
                      level: "warning",
                      message: "@language value must be valid BCP47.",
                      details: {
                        language: value
                      }
                    },
                    options
                  });
                }
              }
              rval["@language"] = value.toLowerCase();
            }
            defined.set("@language", true);
          }
          if ("@direction" in ctx) {
            const value = ctx["@direction"];
            if (activeCtx.processingMode === "json-ld-1.0") {
              throw new JsonLdError(
                "Invalid JSON-LD syntax; @direction not compatible with " + activeCtx.processingMode,
                "jsonld.SyntaxError",
                { code: "invalid context member", context: ctx }
              );
            }
            if (value === null) {
              delete rval["@direction"];
            } else if (value !== "ltr" && value !== "rtl") {
              throw new JsonLdError(
                'Invalid JSON-LD syntax; the value of "@direction" in a @context must be null, "ltr", or "rtl".',
                "jsonld.SyntaxError",
                { code: "invalid base direction", context: ctx }
              );
            } else {
              rval["@direction"] = value;
            }
            defined.set("@direction", true);
          }
          if ("@propagate" in ctx) {
            const value = ctx["@propagate"];
            if (activeCtx.processingMode === "json-ld-1.0") {
              throw new JsonLdError(
                "Invalid JSON-LD syntax; @propagate not compatible with " + activeCtx.processingMode,
                "jsonld.SyntaxError",
                { code: "invalid context entry", context: ctx }
              );
            }
            if (typeof value !== "boolean") {
              throw new JsonLdError(
                "Invalid JSON-LD syntax; @propagate value must be a boolean.",
                "jsonld.SyntaxError",
                { code: "invalid @propagate value", context: localCtx }
              );
            }
            defined.set("@propagate", true);
          }
          if ("@import" in ctx) {
            const value = ctx["@import"];
            if (activeCtx.processingMode === "json-ld-1.0") {
              throw new JsonLdError(
                "Invalid JSON-LD syntax; @import not compatible with " + activeCtx.processingMode,
                "jsonld.SyntaxError",
                { code: "invalid context entry", context: ctx }
              );
            }
            if (!_isString(value)) {
              throw new JsonLdError(
                "Invalid JSON-LD syntax; @import must be a string.",
                "jsonld.SyntaxError",
                { code: "invalid @import value", context: localCtx }
              );
            }
            const resolvedImport = await options.contextResolver.resolve({
              activeCtx,
              context: value,
              documentLoader: options.documentLoader,
              base: options.base
            });
            if (resolvedImport.length !== 1) {
              throw new JsonLdError(
                "Invalid JSON-LD syntax; @import must reference a single context.",
                "jsonld.SyntaxError",
                { code: "invalid remote context", context: localCtx }
              );
            }
            const processedImport = resolvedImport[0].getProcessed(activeCtx);
            if (processedImport) {
              ctx = processedImport;
            } else {
              const importCtx = resolvedImport[0].document;
              if ("@import" in importCtx) {
                throw new JsonLdError(
                  "Invalid JSON-LD syntax: imported context must not include @import.",
                  "jsonld.SyntaxError",
                  { code: "invalid context entry", context: localCtx }
                );
              }
              for (const key in importCtx) {
                if (!ctx.hasOwnProperty(key)) {
                  ctx[key] = importCtx[key];
                }
              }
              resolvedImport[0].setProcessed(activeCtx, ctx);
            }
            defined.set("@import", true);
          }
          defined.set("@protected", ctx["@protected"] || false);
          for (const key in ctx) {
            api.createTermDefinition({
              activeCtx: rval,
              localCtx: ctx,
              term: key,
              defined,
              options,
              overrideProtected
            });
            if (_isObject(ctx[key]) && "@context" in ctx[key]) {
              const keyCtx = ctx[key]["@context"];
              let process2 = true;
              if (_isString(keyCtx)) {
                const url = prependBase(options.base, keyCtx);
                if (cycles.has(url)) {
                  process2 = false;
                } else {
                  cycles.add(url);
                }
              }
              if (process2) {
                try {
                  await api.process({
                    activeCtx: rval.clone(),
                    localCtx: ctx[key]["@context"],
                    overrideProtected: true,
                    options,
                    cycles
                  });
                } catch (e2) {
                  throw new JsonLdError(
                    "Invalid JSON-LD syntax; invalid scoped context.",
                    "jsonld.SyntaxError",
                    {
                      code: "invalid scoped context",
                      context: ctx[key]["@context"],
                      term: key
                    }
                  );
                }
              }
            }
          }
          resolvedContext.setProcessed(activeCtx, {
            context: rval,
            events
          });
        }
        return rval;
      };
      api.createTermDefinition = ({
        activeCtx,
        localCtx,
        term,
        defined,
        options,
        overrideProtected = false
      }) => {
        if (defined.has(term)) {
          if (defined.get(term)) {
            return;
          }
          throw new JsonLdError(
            "Cyclical context definition detected.",
            "jsonld.CyclicalContext",
            { code: "cyclic IRI mapping", context: localCtx, term }
          );
        }
        defined.set(term, false);
        let value;
        if (localCtx.hasOwnProperty(term)) {
          value = localCtx[term];
        }
        if (term === "@type" && _isObject(value) && (value["@container"] || "@set") === "@set" && api.processingMode(activeCtx, 1.1)) {
          const validKeys2 = ["@container", "@id", "@protected"];
          const keys = Object.keys(value);
          if (keys.length === 0 || keys.some((k) => !validKeys2.includes(k))) {
            throw new JsonLdError(
              "Invalid JSON-LD syntax; keywords cannot be overridden.",
              "jsonld.SyntaxError",
              { code: "keyword redefinition", context: localCtx, term }
            );
          }
        } else if (api.isKeyword(term)) {
          throw new JsonLdError(
            "Invalid JSON-LD syntax; keywords cannot be overridden.",
            "jsonld.SyntaxError",
            { code: "keyword redefinition", context: localCtx, term }
          );
        } else if (term.match(REGEX_KEYWORD)) {
          if (options.eventHandler) {
            _handleEvent({
              event: {
                type: ["JsonLdEvent"],
                code: "reserved term",
                level: "warning",
                message: 'Terms beginning with "@" are reserved for future use and dropped.',
                details: {
                  term
                }
              },
              options
            });
          }
          return;
        } else if (term === "") {
          throw new JsonLdError(
            "Invalid JSON-LD syntax; a term cannot be an empty string.",
            "jsonld.SyntaxError",
            { code: "invalid term definition", context: localCtx }
          );
        }
        const previousMapping = activeCtx.mappings.get(term);
        if (activeCtx.mappings.has(term)) {
          activeCtx.mappings.delete(term);
        }
        let simpleTerm = false;
        if (_isString(value) || value === null) {
          simpleTerm = true;
          value = { "@id": value };
        }
        if (!_isObject(value)) {
          throw new JsonLdError(
            "Invalid JSON-LD syntax; @context term values must be strings or objects.",
            "jsonld.SyntaxError",
            { code: "invalid term definition", context: localCtx }
          );
        }
        const mapping = {};
        activeCtx.mappings.set(term, mapping);
        mapping.reverse = false;
        const validKeys = ["@container", "@id", "@language", "@reverse", "@type"];
        if (api.processingMode(activeCtx, 1.1)) {
          validKeys.push(
            "@context",
            "@direction",
            "@index",
            "@nest",
            "@prefix",
            "@protected"
          );
        }
        for (const kw in value) {
          if (!validKeys.includes(kw)) {
            throw new JsonLdError(
              "Invalid JSON-LD syntax; a term definition must not contain " + kw,
              "jsonld.SyntaxError",
              { code: "invalid term definition", context: localCtx }
            );
          }
        }
        const colon = term.indexOf(":");
        mapping._termHasColon = colon > 0;
        if ("@reverse" in value) {
          if ("@id" in value) {
            throw new JsonLdError(
              "Invalid JSON-LD syntax; a @reverse term definition must not contain @id.",
              "jsonld.SyntaxError",
              { code: "invalid reverse property", context: localCtx }
            );
          }
          if ("@nest" in value) {
            throw new JsonLdError(
              "Invalid JSON-LD syntax; a @reverse term definition must not contain @nest.",
              "jsonld.SyntaxError",
              { code: "invalid reverse property", context: localCtx }
            );
          }
          const reverse = value["@reverse"];
          if (!_isString(reverse)) {
            throw new JsonLdError(
              "Invalid JSON-LD syntax; a @context @reverse value must be a string.",
              "jsonld.SyntaxError",
              { code: "invalid IRI mapping", context: localCtx }
            );
          }
          if (reverse.match(REGEX_KEYWORD)) {
            if (options.eventHandler) {
              _handleEvent({
                event: {
                  type: ["JsonLdEvent"],
                  code: "reserved @reverse value",
                  level: "warning",
                  message: '@reverse values beginning with "@" are reserved for future use and dropped.',
                  details: {
                    reverse
                  }
                },
                options
              });
            }
            if (previousMapping) {
              activeCtx.mappings.set(term, previousMapping);
            } else {
              activeCtx.mappings.delete(term);
            }
            return;
          }
          const id2 = _expandIri(
            activeCtx,
            reverse,
            { vocab: true, base: false },
            localCtx,
            defined,
            options
          );
          if (!_isAbsoluteIri(id2)) {
            throw new JsonLdError(
              "Invalid JSON-LD syntax; a @context @reverse value must be an absolute IRI or a blank node identifier.",
              "jsonld.SyntaxError",
              { code: "invalid IRI mapping", context: localCtx }
            );
          }
          mapping["@id"] = id2;
          mapping.reverse = true;
        } else if ("@id" in value) {
          let id2 = value["@id"];
          if (id2 && !_isString(id2)) {
            throw new JsonLdError(
              "Invalid JSON-LD syntax; a @context @id value must be an array of strings or a string.",
              "jsonld.SyntaxError",
              { code: "invalid IRI mapping", context: localCtx }
            );
          }
          if (id2 === null) {
            mapping["@id"] = null;
          } else if (!api.isKeyword(id2) && id2.match(REGEX_KEYWORD)) {
            if (options.eventHandler) {
              _handleEvent({
                event: {
                  type: ["JsonLdEvent"],
                  code: "reserved @id value",
                  level: "warning",
                  message: '@id values beginning with "@" are reserved for future use and dropped.',
                  details: {
                    id: id2
                  }
                },
                options
              });
            }
            if (previousMapping) {
              activeCtx.mappings.set(term, previousMapping);
            } else {
              activeCtx.mappings.delete(term);
            }
            return;
          } else if (id2 !== term) {
            id2 = _expandIri(
              activeCtx,
              id2,
              { vocab: true, base: false },
              localCtx,
              defined,
              options
            );
            if (!_isAbsoluteIri(id2) && !api.isKeyword(id2)) {
              throw new JsonLdError(
                "Invalid JSON-LD syntax; a @context @id value must be an absolute IRI, a blank node identifier, or a keyword.",
                "jsonld.SyntaxError",
                { code: "invalid IRI mapping", context: localCtx }
              );
            }
            if (term.match(/(?::[^:])|\//)) {
              const termDefined = new Map(defined).set(term, true);
              const termIri = _expandIri(
                activeCtx,
                term,
                { vocab: true, base: false },
                localCtx,
                termDefined,
                options
              );
              if (termIri !== id2) {
                throw new JsonLdError(
                  "Invalid JSON-LD syntax; term in form of IRI must expand to definition.",
                  "jsonld.SyntaxError",
                  { code: "invalid IRI mapping", context: localCtx }
                );
              }
            }
            mapping["@id"] = id2;
            mapping._prefix = simpleTerm && !mapping._termHasColon && id2.match(/[:\/\?#\[\]@]$/) !== null;
          }
        }
        if (!("@id" in mapping)) {
          if (mapping._termHasColon) {
            const prefix = term.substr(0, colon);
            if (localCtx.hasOwnProperty(prefix)) {
              api.createTermDefinition({
                activeCtx,
                localCtx,
                term: prefix,
                defined,
                options
              });
            }
            if (activeCtx.mappings.has(prefix)) {
              const suffix = term.substr(colon + 1);
              mapping["@id"] = activeCtx.mappings.get(prefix)["@id"] + suffix;
            } else {
              mapping["@id"] = term;
            }
          } else if (term === "@type") {
            mapping["@id"] = term;
          } else {
            if (!("@vocab" in activeCtx)) {
              throw new JsonLdError(
                "Invalid JSON-LD syntax; @context terms must define an @id.",
                "jsonld.SyntaxError",
                { code: "invalid IRI mapping", context: localCtx, term }
              );
            }
            mapping["@id"] = activeCtx["@vocab"] + term;
          }
        }
        if (value["@protected"] === true || defined.get("@protected") === true && value["@protected"] !== false) {
          activeCtx.protected[term] = true;
          mapping.protected = true;
        }
        defined.set(term, true);
        if ("@type" in value) {
          let type = value["@type"];
          if (!_isString(type)) {
            throw new JsonLdError(
              "Invalid JSON-LD syntax; an @context @type value must be a string.",
              "jsonld.SyntaxError",
              { code: "invalid type mapping", context: localCtx }
            );
          }
          if (type === "@json" || type === "@none") {
            if (api.processingMode(activeCtx, 1)) {
              throw new JsonLdError(
                `Invalid JSON-LD syntax; an @context @type value must not be "${type}" in JSON-LD 1.0 mode.`,
                "jsonld.SyntaxError",
                { code: "invalid type mapping", context: localCtx }
              );
            }
          } else if (type !== "@id" && type !== "@vocab") {
            type = _expandIri(
              activeCtx,
              type,
              { vocab: true, base: false },
              localCtx,
              defined,
              options
            );
            if (!_isAbsoluteIri(type)) {
              throw new JsonLdError(
                "Invalid JSON-LD syntax; an @context @type value must be an absolute IRI.",
                "jsonld.SyntaxError",
                { code: "invalid type mapping", context: localCtx }
              );
            }
            if (type.indexOf("_:") === 0) {
              throw new JsonLdError(
                "Invalid JSON-LD syntax; an @context @type value must be an IRI, not a blank node identifier.",
                "jsonld.SyntaxError",
                { code: "invalid type mapping", context: localCtx }
              );
            }
          }
          mapping["@type"] = type;
        }
        if ("@container" in value) {
          const container = _isString(value["@container"]) ? [value["@container"]] : value["@container"] || [];
          const validContainers = ["@list", "@set", "@index", "@language"];
          let isValid = true;
          const hasSet = container.includes("@set");
          if (api.processingMode(activeCtx, 1.1)) {
            validContainers.push("@graph", "@id", "@type");
            if (container.includes("@list")) {
              if (container.length !== 1) {
                throw new JsonLdError(
                  "Invalid JSON-LD syntax; @context @container with @list must have no other values",
                  "jsonld.SyntaxError",
                  { code: "invalid container mapping", context: localCtx }
                );
              }
            } else if (container.includes("@graph")) {
              if (container.some((key) => key !== "@graph" && key !== "@id" && key !== "@index" && key !== "@set")) {
                throw new JsonLdError(
                  "Invalid JSON-LD syntax; @context @container with @graph must have no other values other than @id, @index, and @set",
                  "jsonld.SyntaxError",
                  { code: "invalid container mapping", context: localCtx }
                );
              }
            } else {
              isValid &= container.length <= (hasSet ? 2 : 1);
            }
            if (container.includes("@type")) {
              mapping["@type"] = mapping["@type"] || "@id";
              if (!["@id", "@vocab"].includes(mapping["@type"])) {
                throw new JsonLdError(
                  "Invalid JSON-LD syntax; container: @type requires @type to be @id or @vocab.",
                  "jsonld.SyntaxError",
                  { code: "invalid type mapping", context: localCtx }
                );
              }
            }
          } else {
            isValid &= !_isArray(value["@container"]);
            isValid &= container.length <= 1;
          }
          isValid &= container.every((c) => validContainers.includes(c));
          isValid &= !(hasSet && container.includes("@list"));
          if (!isValid) {
            throw new JsonLdError(
              "Invalid JSON-LD syntax; @context @container value must be one of the following: " + validContainers.join(", "),
              "jsonld.SyntaxError",
              { code: "invalid container mapping", context: localCtx }
            );
          }
          if (mapping.reverse && !container.every((c) => ["@index", "@set"].includes(c))) {
            throw new JsonLdError(
              "Invalid JSON-LD syntax; @context @container value for a @reverse type definition must be @index or @set.",
              "jsonld.SyntaxError",
              { code: "invalid reverse property", context: localCtx }
            );
          }
          mapping["@container"] = container;
        }
        if ("@index" in value) {
          if (!("@container" in value) || !mapping["@container"].includes("@index")) {
            throw new JsonLdError(
              `Invalid JSON-LD syntax; @index without @index in @container: "${value["@index"]}" on term "${term}".`,
              "jsonld.SyntaxError",
              { code: "invalid term definition", context: localCtx }
            );
          }
          if (!_isString(value["@index"]) || value["@index"].indexOf("@") === 0) {
            throw new JsonLdError(
              `Invalid JSON-LD syntax; @index must expand to an IRI: "${value["@index"]}" on term "${term}".`,
              "jsonld.SyntaxError",
              { code: "invalid term definition", context: localCtx }
            );
          }
          mapping["@index"] = value["@index"];
        }
        if ("@context" in value) {
          mapping["@context"] = value["@context"];
        }
        if ("@language" in value && !("@type" in value)) {
          let language = value["@language"];
          if (language !== null && !_isString(language)) {
            throw new JsonLdError(
              "Invalid JSON-LD syntax; @context @language value must be a string or null.",
              "jsonld.SyntaxError",
              { code: "invalid language mapping", context: localCtx }
            );
          }
          if (language !== null) {
            language = language.toLowerCase();
          }
          mapping["@language"] = language;
        }
        if ("@prefix" in value) {
          if (term.match(/:|\//)) {
            throw new JsonLdError(
              "Invalid JSON-LD syntax; @context @prefix used on a compact IRI term",
              "jsonld.SyntaxError",
              { code: "invalid term definition", context: localCtx }
            );
          }
          if (api.isKeyword(mapping["@id"])) {
            throw new JsonLdError(
              "Invalid JSON-LD syntax; keywords may not be used as prefixes",
              "jsonld.SyntaxError",
              { code: "invalid term definition", context: localCtx }
            );
          }
          if (typeof value["@prefix"] === "boolean") {
            mapping._prefix = value["@prefix"] === true;
          } else {
            throw new JsonLdError(
              "Invalid JSON-LD syntax; @context value for @prefix must be boolean",
              "jsonld.SyntaxError",
              { code: "invalid @prefix value", context: localCtx }
            );
          }
        }
        if ("@direction" in value) {
          const direction = value["@direction"];
          if (direction !== null && direction !== "ltr" && direction !== "rtl") {
            throw new JsonLdError(
              'Invalid JSON-LD syntax; @direction value must be null, "ltr", or "rtl".',
              "jsonld.SyntaxError",
              { code: "invalid base direction", context: localCtx }
            );
          }
          mapping["@direction"] = direction;
        }
        if ("@nest" in value) {
          const nest = value["@nest"];
          if (!_isString(nest) || nest !== "@nest" && nest.indexOf("@") === 0) {
            throw new JsonLdError(
              "Invalid JSON-LD syntax; @context @nest value must be a string which is not a keyword other than @nest.",
              "jsonld.SyntaxError",
              { code: "invalid @nest value", context: localCtx }
            );
          }
          mapping["@nest"] = nest;
        }
        const id = mapping["@id"];
        if (id === "@context" || id === "@preserve") {
          throw new JsonLdError(
            "Invalid JSON-LD syntax; @context and @preserve cannot be aliased.",
            "jsonld.SyntaxError",
            { code: "invalid keyword alias", context: localCtx }
          );
        }
        if (previousMapping && previousMapping.protected && !overrideProtected) {
          activeCtx.protected[term] = true;
          mapping.protected = true;
          if (!_deepCompare(previousMapping, mapping)) {
            throw new JsonLdError(
              "Invalid JSON-LD syntax; tried to redefine a protected term.",
              "jsonld.SyntaxError",
              { code: "protected term redefinition", context: localCtx, term }
            );
          }
        }
      };
      api.expandIri = (activeCtx, value, relativeTo, options) => {
        return _expandIri(
          activeCtx,
          value,
          relativeTo,
          void 0,
          void 0,
          options
        );
      };
      function _expandIri(activeCtx, value, relativeTo, localCtx, defined, options) {
        if (value === null || !_isString(value) || api.isKeyword(value)) {
          return value;
        }
        if (value.match(REGEX_KEYWORD)) {
          return null;
        }
        if (localCtx && localCtx.hasOwnProperty(value) && defined.get(value) !== true) {
          api.createTermDefinition({
            activeCtx,
            localCtx,
            term: value,
            defined,
            options
          });
        }
        relativeTo = relativeTo || {};
        if (relativeTo.vocab) {
          const mapping = activeCtx.mappings.get(value);
          if (mapping === null) {
            return null;
          }
          if (_isObject(mapping) && "@id" in mapping) {
            return mapping["@id"];
          }
        }
        const colon = value.indexOf(":");
        if (colon > 0) {
          const prefix = value.substr(0, colon);
          const suffix = value.substr(colon + 1);
          if (prefix === "_" || suffix.indexOf("//") === 0) {
            return value;
          }
          if (localCtx && localCtx.hasOwnProperty(prefix)) {
            api.createTermDefinition({
              activeCtx,
              localCtx,
              term: prefix,
              defined,
              options
            });
          }
          const mapping = activeCtx.mappings.get(prefix);
          if (mapping && mapping._prefix) {
            return mapping["@id"] + suffix;
          }
          if (_isAbsoluteIri(value)) {
            return value;
          }
        }
        if (relativeTo.vocab && "@vocab" in activeCtx) {
          const prependedResult = activeCtx["@vocab"] + value;
          value = prependedResult;
        } else if (relativeTo.base) {
          let prependedResult;
          let base;
          if ("@base" in activeCtx) {
            if (activeCtx["@base"]) {
              base = prependBase(options.base, activeCtx["@base"]);
              prependedResult = prependBase(base, value);
            } else {
              base = activeCtx["@base"];
              prependedResult = value;
            }
          } else {
            base = options.base;
            prependedResult = prependBase(options.base, value);
          }
          value = prependedResult;
        }
        return value;
      }
      api.getInitialContext = (options) => {
        const key = JSON.stringify({ processingMode: options.processingMode });
        const cached = INITIAL_CONTEXT_CACHE.get(key);
        if (cached) {
          return cached;
        }
        const initialContext = {
          processingMode: options.processingMode,
          mappings: /* @__PURE__ */ new Map(),
          inverse: null,
          getInverse: _createInverseContext,
          clone: _cloneActiveContext,
          revertToPreviousContext: _revertToPreviousContext,
          protected: {}
        };
        if (INITIAL_CONTEXT_CACHE.size === INITIAL_CONTEXT_CACHE_MAX_SIZE) {
          INITIAL_CONTEXT_CACHE.clear();
        }
        INITIAL_CONTEXT_CACHE.set(key, initialContext);
        return initialContext;
        function _createInverseContext() {
          const activeCtx = this;
          if (activeCtx.inverse) {
            return activeCtx.inverse;
          }
          const inverse = activeCtx.inverse = {};
          const fastCurieMap = activeCtx.fastCurieMap = {};
          const irisToTerms = {};
          const defaultLanguage = (activeCtx["@language"] || "@none").toLowerCase();
          const defaultDirection = activeCtx["@direction"];
          const mappings = activeCtx.mappings;
          const terms = [...mappings.keys()].sort(_compareShortestLeast);
          for (const term of terms) {
            const mapping = mappings.get(term);
            if (mapping === null) {
              continue;
            }
            let container = mapping["@container"] || "@none";
            container = [].concat(container).sort().join("");
            if (mapping["@id"] === null) {
              continue;
            }
            const ids = _asArray(mapping["@id"]);
            for (const iri of ids) {
              let entry = inverse[iri];
              const isKeyword = api.isKeyword(iri);
              if (!entry) {
                inverse[iri] = entry = {};
                if (!isKeyword && !mapping._termHasColon) {
                  irisToTerms[iri] = [term];
                  const fastCurieEntry = { iri, terms: irisToTerms[iri] };
                  if (iri[0] in fastCurieMap) {
                    fastCurieMap[iri[0]].push(fastCurieEntry);
                  } else {
                    fastCurieMap[iri[0]] = [fastCurieEntry];
                  }
                }
              } else if (!isKeyword && !mapping._termHasColon) {
                irisToTerms[iri].push(term);
              }
              if (!entry[container]) {
                entry[container] = {
                  "@language": {},
                  "@type": {},
                  "@any": {}
                };
              }
              entry = entry[container];
              _addPreferredTerm(term, entry["@any"], "@none");
              if (mapping.reverse) {
                _addPreferredTerm(term, entry["@type"], "@reverse");
              } else if (mapping["@type"] === "@none") {
                _addPreferredTerm(term, entry["@any"], "@none");
                _addPreferredTerm(term, entry["@language"], "@none");
                _addPreferredTerm(term, entry["@type"], "@none");
              } else if ("@type" in mapping) {
                _addPreferredTerm(term, entry["@type"], mapping["@type"]);
              } else if ("@language" in mapping && "@direction" in mapping) {
                const language = mapping["@language"];
                const direction = mapping["@direction"];
                if (language && direction) {
                  _addPreferredTerm(
                    term,
                    entry["@language"],
                    `${language}_${direction}`.toLowerCase()
                  );
                } else if (language) {
                  _addPreferredTerm(term, entry["@language"], language.toLowerCase());
                } else if (direction) {
                  _addPreferredTerm(term, entry["@language"], `_${direction}`);
                } else {
                  _addPreferredTerm(term, entry["@language"], "@null");
                }
              } else if ("@language" in mapping) {
                _addPreferredTerm(
                  term,
                  entry["@language"],
                  (mapping["@language"] || "@null").toLowerCase()
                );
              } else if ("@direction" in mapping) {
                if (mapping["@direction"]) {
                  _addPreferredTerm(
                    term,
                    entry["@language"],
                    `_${mapping["@direction"]}`
                  );
                } else {
                  _addPreferredTerm(term, entry["@language"], "@none");
                }
              } else if (defaultDirection) {
                _addPreferredTerm(term, entry["@language"], `_${defaultDirection}`);
                _addPreferredTerm(term, entry["@language"], "@none");
                _addPreferredTerm(term, entry["@type"], "@none");
              } else {
                _addPreferredTerm(term, entry["@language"], defaultLanguage);
                _addPreferredTerm(term, entry["@language"], "@none");
                _addPreferredTerm(term, entry["@type"], "@none");
              }
            }
          }
          for (const key2 in fastCurieMap) {
            _buildIriMap(fastCurieMap, key2, 1);
          }
          return inverse;
        }
        function _buildIriMap(iriMap, key2, idx) {
          const entries = iriMap[key2];
          const next = iriMap[key2] = {};
          let iri;
          let letter;
          for (const entry of entries) {
            iri = entry.iri;
            if (idx >= iri.length) {
              letter = "";
            } else {
              letter = iri[idx];
            }
            if (letter in next) {
              next[letter].push(entry);
            } else {
              next[letter] = [entry];
            }
          }
          for (const key3 in next) {
            if (key3 === "") {
              continue;
            }
            _buildIriMap(next, key3, idx + 1);
          }
        }
        function _addPreferredTerm(term, entry, typeOrLanguageValue) {
          if (!entry.hasOwnProperty(typeOrLanguageValue)) {
            entry[typeOrLanguageValue] = term;
          }
        }
        function _cloneActiveContext() {
          const child = {};
          child.mappings = util.clone(this.mappings);
          child.clone = this.clone;
          child.inverse = null;
          child.getInverse = this.getInverse;
          child.protected = util.clone(this.protected);
          if (this.previousContext) {
            child.previousContext = this.previousContext.clone();
          }
          child.revertToPreviousContext = this.revertToPreviousContext;
          if ("@base" in this) {
            child["@base"] = this["@base"];
          }
          if ("@language" in this) {
            child["@language"] = this["@language"];
          }
          if ("@vocab" in this) {
            child["@vocab"] = this["@vocab"];
          }
          return child;
        }
        function _revertToPreviousContext() {
          if (!this.previousContext) {
            return this;
          }
          return this.previousContext.clone();
        }
      };
      api.getContextValue = (ctx, key, type) => {
        if (key === null) {
          if (type === "@context") {
            return void 0;
          }
          return null;
        }
        if (ctx.mappings.has(key)) {
          const entry = ctx.mappings.get(key);
          if (_isUndefined(type)) {
            return entry;
          }
          if (entry.hasOwnProperty(type)) {
            return entry[type];
          }
        }
        if (type === "@language" && type in ctx) {
          return ctx[type];
        }
        if (type === "@direction" && type in ctx) {
          return ctx[type];
        }
        if (type === "@context") {
          return void 0;
        }
        return null;
      };
      api.processingMode = (activeCtx, version2) => {
        if (version2.toString() >= "1.1") {
          return !activeCtx.processingMode || activeCtx.processingMode >= "json-ld-" + version2.toString();
        } else {
          return activeCtx.processingMode === "json-ld-1.0";
        }
      };
      api.isKeyword = (v) => {
        if (!_isString(v) || v[0] !== "@") {
          return false;
        }
        switch (v) {
          case "@base":
          case "@container":
          case "@context":
          case "@default":
          case "@direction":
          case "@embed":
          case "@explicit":
          case "@graph":
          case "@id":
          case "@included":
          case "@index":
          case "@json":
          case "@language":
          case "@list":
          case "@nest":
          case "@none":
          case "@omitDefault":
          case "@prefix":
          case "@preserve":
          case "@protected":
          case "@requireAll":
          case "@reverse":
          case "@set":
          case "@type":
          case "@value":
          case "@version":
          case "@vocab":
            return true;
        }
        return false;
      };
      function _deepCompare(x1, x2) {
        if (!(x1 && typeof x1 === "object") || !(x2 && typeof x2 === "object")) {
          return x1 === x2;
        }
        const x1Array = Array.isArray(x1);
        if (x1Array !== Array.isArray(x2)) {
          return false;
        }
        if (x1Array) {
          if (x1.length !== x2.length) {
            return false;
          }
          for (let i = 0; i < x1.length; ++i) {
            if (!_deepCompare(x1[i], x2[i])) {
              return false;
            }
          }
          return true;
        }
        const k1s = Object.keys(x1);
        const k2s = Object.keys(x2);
        if (k1s.length !== k2s.length) {
          return false;
        }
        for (const k1 in x1) {
          let v1 = x1[k1];
          let v2 = x2[k1];
          if (k1 === "@container") {
            if (Array.isArray(v1) && Array.isArray(v2)) {
              v1 = v1.slice().sort();
              v2 = v2.slice().sort();
            }
          }
          if (!_deepCompare(v1, v2)) {
            return false;
          }
        }
        return true;
      }
    }
  });

  // node_modules/jsonld/lib/expand.js
  var require_expand = __commonJS({
    "node_modules/jsonld/lib/expand.js"(exports3, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var JsonLdError = require_JsonLdError();
      var {
        isArray: _isArray,
        isObject: _isObject,
        isEmptyObject: _isEmptyObject,
        isString: _isString,
        isUndefined: _isUndefined
      } = require_types();
      var {
        isList: _isList,
        isValue: _isValue,
        isGraph: _isGraph,
        isSubject: _isSubject
      } = require_graphTypes();
      var {
        expandIri: _expandIri,
        getContextValue: _getContextValue,
        isKeyword: _isKeyword,
        process: _processContext,
        processingMode: _processingMode
      } = require_context();
      var {
        isAbsolute: _isAbsoluteIri
      } = require_url();
      var {
        REGEX_BCP47,
        REGEX_KEYWORD,
        addValue: _addValue,
        asArray: _asArray,
        getValues: _getValues,
        validateTypeValue: _validateTypeValue
      } = require_util();
      var {
        handleEvent: _handleEvent
      } = require_events();
      var api = {};
      module.exports = api;
      api.expand = async ({
        activeCtx,
        activeProperty = null,
        element,
        options = {},
        insideList = false,
        insideIndex = false,
        typeScopedContext = null
      }) => {
        if (element === null || element === void 0) {
          return null;
        }
        if (activeProperty === "@default") {
          options = Object.assign({}, options, { isFrame: false });
        }
        if (!_isArray(element) && !_isObject(element)) {
          if (!insideList && (activeProperty === null || _expandIri(
            activeCtx,
            activeProperty,
            { vocab: true },
            options
          ) === "@graph")) {
            if (options.eventHandler) {
              _handleEvent({
                event: {
                  type: ["JsonLdEvent"],
                  code: "free-floating scalar",
                  level: "warning",
                  message: "Dropping free-floating scalar not in a list.",
                  details: {
                    value: element
                    //activeProperty
                    //insideList
                  }
                },
                options
              });
            }
            return null;
          }
          return _expandValue({ activeCtx, activeProperty, value: element, options });
        }
        if (_isArray(element)) {
          let rval2 = [];
          const container = _getContextValue(
            activeCtx,
            activeProperty,
            "@container"
          ) || [];
          insideList = insideList || container.includes("@list");
          for (let i = 0; i < element.length; ++i) {
            let e2 = await api.expand({
              activeCtx,
              activeProperty,
              element: element[i],
              options,
              insideIndex,
              typeScopedContext
            });
            if (insideList && _isArray(e2)) {
              e2 = { "@list": e2 };
            }
            if (e2 === null) {
              continue;
            }
            if (_isArray(e2)) {
              rval2 = rval2.concat(e2);
            } else {
              rval2.push(e2);
            }
          }
          return rval2;
        }
        const expandedActiveProperty = _expandIri(
          activeCtx,
          activeProperty,
          { vocab: true },
          options
        );
        const propertyScopedCtx = _getContextValue(activeCtx, activeProperty, "@context");
        typeScopedContext = typeScopedContext || (activeCtx.previousContext ? activeCtx : null);
        let keys = Object.keys(element).sort();
        let mustRevert = !insideIndex;
        if (mustRevert && typeScopedContext && keys.length <= 2 && !keys.includes("@context")) {
          for (const key of keys) {
            const expandedProperty = _expandIri(
              typeScopedContext,
              key,
              { vocab: true },
              options
            );
            if (expandedProperty === "@value") {
              mustRevert = false;
              activeCtx = typeScopedContext;
              break;
            }
            if (expandedProperty === "@id" && keys.length === 1) {
              mustRevert = false;
              break;
            }
          }
        }
        if (mustRevert) {
          activeCtx = activeCtx.revertToPreviousContext();
        }
        if (!_isUndefined(propertyScopedCtx)) {
          activeCtx = await _processContext({
            activeCtx,
            localCtx: propertyScopedCtx,
            propagate: true,
            overrideProtected: true,
            options
          });
        }
        if ("@context" in element) {
          activeCtx = await _processContext(
            { activeCtx, localCtx: element["@context"], options }
          );
        }
        typeScopedContext = activeCtx;
        let typeKey = null;
        for (const key of keys) {
          const expandedProperty = _expandIri(activeCtx, key, { vocab: true }, options);
          if (expandedProperty === "@type") {
            typeKey = typeKey || key;
            const value = element[key];
            const types = Array.isArray(value) ? value.length > 1 ? value.slice().sort() : value : [value];
            for (const type of types) {
              const ctx = _getContextValue(typeScopedContext, type, "@context");
              if (!_isUndefined(ctx)) {
                activeCtx = await _processContext({
                  activeCtx,
                  localCtx: ctx,
                  options,
                  propagate: false
                });
              }
            }
          }
        }
        let rval = {};
        await _expandObject({
          activeCtx,
          activeProperty,
          expandedActiveProperty,
          element,
          expandedParent: rval,
          options,
          insideList,
          typeKey,
          typeScopedContext
        });
        keys = Object.keys(rval);
        let count = keys.length;
        if ("@value" in rval) {
          if ("@type" in rval && ("@language" in rval || "@direction" in rval)) {
            throw new JsonLdError(
              'Invalid JSON-LD syntax; an element containing "@value" may not contain both "@type" and either "@language" or "@direction".',
              "jsonld.SyntaxError",
              { code: "invalid value object", element: rval }
            );
          }
          let validCount = count - 1;
          if ("@type" in rval) {
            validCount -= 1;
          }
          if ("@index" in rval) {
            validCount -= 1;
          }
          if ("@language" in rval) {
            validCount -= 1;
          }
          if ("@direction" in rval) {
            validCount -= 1;
          }
          if (validCount !== 0) {
            throw new JsonLdError(
              'Invalid JSON-LD syntax; an element containing "@value" may only have an "@index" property and either "@type" or either or both "@language" or "@direction".',
              "jsonld.SyntaxError",
              { code: "invalid value object", element: rval }
            );
          }
          const values = rval["@value"] === null ? [] : _asArray(rval["@value"]);
          const types = _getValues(rval, "@type");
          if (_processingMode(activeCtx, 1.1) && types.includes("@json") && types.length === 1) {
          } else if (values.length === 0) {
            if (options.eventHandler) {
              _handleEvent({
                event: {
                  type: ["JsonLdEvent"],
                  code: "null @value value",
                  level: "warning",
                  message: "Dropping null @value value.",
                  details: {
                    value: rval
                  }
                },
                options
              });
            }
            rval = null;
          } else if (!values.every((v) => _isString(v) || _isEmptyObject(v)) && "@language" in rval) {
            throw new JsonLdError(
              "Invalid JSON-LD syntax; only strings may be language-tagged.",
              "jsonld.SyntaxError",
              { code: "invalid language-tagged value", element: rval }
            );
          } else if (!types.every((t) => _isAbsoluteIri(t) && !(_isString(t) && t.indexOf("_:") === 0) || _isEmptyObject(t))) {
            throw new JsonLdError(
              'Invalid JSON-LD syntax; an element containing "@value" and "@type" must have an absolute IRI for the value of "@type".',
              "jsonld.SyntaxError",
              { code: "invalid typed value", element: rval }
            );
          }
        } else if ("@type" in rval && !_isArray(rval["@type"])) {
          rval["@type"] = [rval["@type"]];
        } else if ("@set" in rval || "@list" in rval) {
          if (count > 1 && !(count === 2 && "@index" in rval)) {
            throw new JsonLdError(
              'Invalid JSON-LD syntax; if an element has the property "@set" or "@list", then it can have at most one other property that is "@index".',
              "jsonld.SyntaxError",
              { code: "invalid set or list object", element: rval }
            );
          }
          if ("@set" in rval) {
            rval = rval["@set"];
            keys = Object.keys(rval);
            count = keys.length;
          }
        } else if (count === 1 && "@language" in rval) {
          if (options.eventHandler) {
            _handleEvent({
              event: {
                type: ["JsonLdEvent"],
                code: "object with only @language",
                level: "warning",
                message: "Dropping object with only @language.",
                details: {
                  value: rval
                }
              },
              options
            });
          }
          rval = null;
        }
        if (_isObject(rval) && !options.keepFreeFloatingNodes && !insideList && (activeProperty === null || expandedActiveProperty === "@graph" || (_getContextValue(activeCtx, activeProperty, "@container") || []).includes("@graph"))) {
          rval = _dropUnsafeObject({ value: rval, count, options });
        }
        return rval;
      };
      function _dropUnsafeObject({
        value,
        count,
        options
      }) {
        if (count === 0 || "@value" in value || "@list" in value || count === 1 && "@id" in value) {
          if (options.eventHandler) {
            let code;
            let message;
            if (count === 0) {
              code = "empty object";
              message = "Dropping empty object.";
            } else if ("@value" in value) {
              code = "object with only @value";
              message = "Dropping object with only @value.";
            } else if ("@list" in value) {
              code = "object with only @list";
              message = "Dropping object with only @list.";
            } else if (count === 1 && "@id" in value) {
              code = "object with only @id";
              message = "Dropping object with only @id.";
            }
            _handleEvent({
              event: {
                type: ["JsonLdEvent"],
                code,
                level: "warning",
                message,
                details: {
                  value
                }
              },
              options
            });
          }
          return null;
        }
        return value;
      }
      async function _expandObject({
        activeCtx,
        activeProperty,
        expandedActiveProperty,
        element,
        expandedParent,
        options = {},
        insideList,
        typeKey,
        typeScopedContext
      }) {
        const keys = Object.keys(element).sort();
        const nests = [];
        let unexpandedValue;
        const isJsonType = element[typeKey] && _expandIri(
          activeCtx,
          _isArray(element[typeKey]) ? element[typeKey][0] : element[typeKey],
          { vocab: true },
          {
            ...options,
            typeExpansion: true
          }
        ) === "@json";
        for (const key of keys) {
          let value = element[key];
          let expandedValue;
          if (key === "@context") {
            continue;
          }
          const expandedProperty = _expandIri(activeCtx, key, { vocab: true }, options);
          if (expandedProperty === null || !(_isAbsoluteIri(expandedProperty) || _isKeyword(expandedProperty))) {
            if (options.eventHandler) {
              _handleEvent({
                event: {
                  type: ["JsonLdEvent"],
                  code: "invalid property",
                  level: "warning",
                  message: "Dropping property that did not expand into an absolute IRI or keyword.",
                  details: {
                    property: key,
                    expandedProperty
                  }
                },
                options
              });
            }
            continue;
          }
          if (_isKeyword(expandedProperty)) {
            if (expandedActiveProperty === "@reverse") {
              throw new JsonLdError(
                "Invalid JSON-LD syntax; a keyword cannot be used as a @reverse property.",
                "jsonld.SyntaxError",
                { code: "invalid reverse property map", value }
              );
            }
            if (expandedProperty in expandedParent && expandedProperty !== "@included" && expandedProperty !== "@type") {
              throw new JsonLdError(
                "Invalid JSON-LD syntax; colliding keywords detected.",
                "jsonld.SyntaxError",
                { code: "colliding keywords", keyword: expandedProperty }
              );
            }
          }
          if (expandedProperty === "@id") {
            if (!_isString(value)) {
              if (!options.isFrame) {
                throw new JsonLdError(
                  'Invalid JSON-LD syntax; "@id" value must a string.',
                  "jsonld.SyntaxError",
                  { code: "invalid @id value", value }
                );
              }
              if (_isObject(value)) {
                if (!_isEmptyObject(value)) {
                  throw new JsonLdError(
                    'Invalid JSON-LD syntax; "@id" value an empty object or array of strings, if framing',
                    "jsonld.SyntaxError",
                    { code: "invalid @id value", value }
                  );
                }
              } else if (_isArray(value)) {
                if (!value.every((v) => _isString(v))) {
                  throw new JsonLdError(
                    'Invalid JSON-LD syntax; "@id" value an empty object or array of strings, if framing',
                    "jsonld.SyntaxError",
                    { code: "invalid @id value", value }
                  );
                }
              } else {
                throw new JsonLdError(
                  'Invalid JSON-LD syntax; "@id" value an empty object or array of strings, if framing',
                  "jsonld.SyntaxError",
                  { code: "invalid @id value", value }
                );
              }
            }
            _addValue(
              expandedParent,
              "@id",
              _asArray(value).map((v) => {
                if (_isString(v)) {
                  const ve = _expandIri(activeCtx, v, { base: true }, options);
                  if (options.eventHandler) {
                    if (ve === null) {
                      if (v === null) {
                        _handleEvent({
                          event: {
                            type: ["JsonLdEvent"],
                            code: "null @id value",
                            level: "warning",
                            message: "Null @id found.",
                            details: {
                              id: v
                            }
                          },
                          options
                        });
                      } else {
                        _handleEvent({
                          event: {
                            type: ["JsonLdEvent"],
                            code: "reserved @id value",
                            level: "warning",
                            message: "Reserved @id found.",
                            details: {
                              id: v
                            }
                          },
                          options
                        });
                      }
                    } else if (!_isAbsoluteIri(ve)) {
                      _handleEvent({
                        event: {
                          type: ["JsonLdEvent"],
                          code: "relative @id reference",
                          level: "warning",
                          message: "Relative @id reference found.",
                          details: {
                            id: v,
                            expandedId: ve
                          }
                        },
                        options
                      });
                    }
                  }
                  return ve;
                }
                return v;
              }),
              { propertyIsArray: options.isFrame }
            );
            continue;
          }
          if (expandedProperty === "@type") {
            if (_isObject(value)) {
              value = Object.fromEntries(Object.entries(value).map(([k, v]) => [
                _expandIri(typeScopedContext, k, { vocab: true }),
                _asArray(v).map(
                  (vv) => _expandIri(
                    typeScopedContext,
                    vv,
                    { base: true, vocab: true },
                    { ...options, typeExpansion: true }
                  )
                )
              ]));
            }
            _validateTypeValue(value, options.isFrame);
            _addValue(
              expandedParent,
              "@type",
              _asArray(value).map((v) => {
                if (_isString(v)) {
                  const ve = _expandIri(
                    typeScopedContext,
                    v,
                    { base: true, vocab: true },
                    { ...options, typeExpansion: true }
                  );
                  if (ve !== "@json" && !_isAbsoluteIri(ve)) {
                    if (options.eventHandler) {
                      _handleEvent({
                        event: {
                          type: ["JsonLdEvent"],
                          code: "relative @type reference",
                          level: "warning",
                          message: "Relative @type reference found.",
                          details: {
                            type: v
                          }
                        },
                        options
                      });
                    }
                  }
                  return ve;
                }
                return v;
              }),
              { propertyIsArray: !!options.isFrame }
            );
            continue;
          }
          if (expandedProperty === "@included" && _processingMode(activeCtx, 1.1)) {
            const includedResult = _asArray(await api.expand({
              activeCtx,
              activeProperty,
              element: value,
              options
            }));
            if (!includedResult.every((v) => _isSubject(v))) {
              throw new JsonLdError(
                "Invalid JSON-LD syntax; values of @included must expand to node objects.",
                "jsonld.SyntaxError",
                { code: "invalid @included value", value }
              );
            }
            _addValue(
              expandedParent,
              "@included",
              includedResult,
              { propertyIsArray: true }
            );
            continue;
          }
          if (expandedProperty === "@graph" && !(_isObject(value) || _isArray(value))) {
            throw new JsonLdError(
              'Invalid JSON-LD syntax; "@graph" value must not be an object or an array.',
              "jsonld.SyntaxError",
              { code: "invalid @graph value", value }
            );
          }
          if (expandedProperty === "@value") {
            unexpandedValue = value;
            if (isJsonType && _processingMode(activeCtx, 1.1)) {
              expandedParent["@value"] = value;
            } else {
              _addValue(
                expandedParent,
                "@value",
                value,
                { propertyIsArray: options.isFrame }
              );
            }
            continue;
          }
          if (expandedProperty === "@language") {
            if (value === null) {
              continue;
            }
            if (!_isString(value) && !options.isFrame) {
              throw new JsonLdError(
                'Invalid JSON-LD syntax; "@language" value must be a string.',
                "jsonld.SyntaxError",
                { code: "invalid language-tagged string", value }
              );
            }
            value = _asArray(value).map((v) => _isString(v) ? v.toLowerCase() : v);
            for (const language of value) {
              if (_isString(language) && !language.match(REGEX_BCP47)) {
                if (options.eventHandler) {
                  _handleEvent({
                    event: {
                      type: ["JsonLdEvent"],
                      code: "invalid @language value",
                      level: "warning",
                      message: "@language value must be valid BCP47.",
                      details: {
                        language
                      }
                    },
                    options
                  });
                }
              }
            }
            _addValue(
              expandedParent,
              "@language",
              value,
              { propertyIsArray: options.isFrame }
            );
            continue;
          }
          if (expandedProperty === "@direction") {
            if (!_isString(value) && !options.isFrame) {
              throw new JsonLdError(
                'Invalid JSON-LD syntax; "@direction" value must be a string.',
                "jsonld.SyntaxError",
                { code: "invalid base direction", value }
              );
            }
            value = _asArray(value);
            for (const dir of value) {
              if (_isString(dir) && dir !== "ltr" && dir !== "rtl") {
                throw new JsonLdError(
                  'Invalid JSON-LD syntax; "@direction" must be "ltr" or "rtl".',
                  "jsonld.SyntaxError",
                  { code: "invalid base direction", value }
                );
              }
            }
            _addValue(
              expandedParent,
              "@direction",
              value,
              { propertyIsArray: options.isFrame }
            );
            continue;
          }
          if (expandedProperty === "@index") {
            if (!_isString(value)) {
              throw new JsonLdError(
                'Invalid JSON-LD syntax; "@index" value must be a string.',
                "jsonld.SyntaxError",
                { code: "invalid @index value", value }
              );
            }
            _addValue(expandedParent, "@index", value);
            continue;
          }
          if (expandedProperty === "@reverse") {
            if (!_isObject(value)) {
              throw new JsonLdError(
                'Invalid JSON-LD syntax; "@reverse" value must be an object.',
                "jsonld.SyntaxError",
                { code: "invalid @reverse value", value }
              );
            }
            expandedValue = await api.expand({
              activeCtx,
              activeProperty: "@reverse",
              element: value,
              options
            });
            if ("@reverse" in expandedValue) {
              for (const property in expandedValue["@reverse"]) {
                _addValue(
                  expandedParent,
                  property,
                  expandedValue["@reverse"][property],
                  { propertyIsArray: true }
                );
              }
            }
            let reverseMap = expandedParent["@reverse"] || null;
            for (const property in expandedValue) {
              if (property === "@reverse") {
                continue;
              }
              if (reverseMap === null) {
                reverseMap = expandedParent["@reverse"] = {};
              }
              _addValue(reverseMap, property, [], { propertyIsArray: true });
              const items = expandedValue[property];
              for (let ii = 0; ii < items.length; ++ii) {
                const item = items[ii];
                if (_isValue(item) || _isList(item)) {
                  throw new JsonLdError(
                    'Invalid JSON-LD syntax; "@reverse" value must not be a @value or an @list.',
                    "jsonld.SyntaxError",
                    { code: "invalid reverse property value", value: expandedValue }
                  );
                }
                _addValue(reverseMap, property, item, { propertyIsArray: true });
              }
            }
            continue;
          }
          if (expandedProperty === "@nest") {
            nests.push(key);
            continue;
          }
          let termCtx = activeCtx;
          const ctx = _getContextValue(activeCtx, key, "@context");
          if (!_isUndefined(ctx)) {
            termCtx = await _processContext({
              activeCtx,
              localCtx: ctx,
              propagate: true,
              overrideProtected: true,
              options
            });
          }
          const container = _getContextValue(activeCtx, key, "@container") || [];
          if (container.includes("@language") && _isObject(value)) {
            const direction = _getContextValue(termCtx, key, "@direction");
            expandedValue = _expandLanguageMap(termCtx, value, direction, options);
          } else if (container.includes("@index") && _isObject(value)) {
            const asGraph = container.includes("@graph");
            const indexKey = _getContextValue(termCtx, key, "@index") || "@index";
            const propertyIndex = indexKey !== "@index" && _expandIri(activeCtx, indexKey, { vocab: true }, options);
            expandedValue = await _expandIndexMap({
              activeCtx: termCtx,
              options,
              activeProperty: key,
              value,
              asGraph,
              indexKey,
              propertyIndex
            });
          } else if (container.includes("@id") && _isObject(value)) {
            const asGraph = container.includes("@graph");
            expandedValue = await _expandIndexMap({
              activeCtx: termCtx,
              options,
              activeProperty: key,
              value,
              asGraph,
              indexKey: "@id"
            });
          } else if (container.includes("@type") && _isObject(value)) {
            expandedValue = await _expandIndexMap({
              // since container is `@type`, revert type scoped context when expanding
              activeCtx: termCtx.revertToPreviousContext(),
              options,
              activeProperty: key,
              value,
              asGraph: false,
              indexKey: "@type"
            });
          } else {
            const isList = expandedProperty === "@list";
            if (isList || expandedProperty === "@set") {
              let nextActiveProperty = activeProperty;
              if (isList && expandedActiveProperty === "@graph") {
                nextActiveProperty = null;
              }
              expandedValue = await api.expand({
                activeCtx: termCtx,
                activeProperty: nextActiveProperty,
                element: value,
                options,
                insideList: isList
              });
            } else if (_getContextValue(activeCtx, key, "@type") === "@json") {
              expandedValue = {
                "@type": "@json",
                "@value": value
              };
            } else {
              expandedValue = await api.expand({
                activeCtx: termCtx,
                activeProperty: key,
                element: value,
                options,
                insideList: false
              });
            }
          }
          if (expandedValue === null && expandedProperty !== "@value") {
            continue;
          }
          if (expandedProperty !== "@list" && !_isList(expandedValue) && container.includes("@list")) {
            expandedValue = { "@list": _asArray(expandedValue) };
          }
          if (container.includes("@graph") && !container.some((key2) => key2 === "@id" || key2 === "@index")) {
            expandedValue = _asArray(expandedValue);
            if (!options.isFrame) {
              expandedValue = expandedValue.filter((v) => {
                const count = Object.keys(v).length;
                return _dropUnsafeObject({ value: v, count, options }) !== null;
              });
            }
            if (expandedValue.length === 0) {
              continue;
            }
            expandedValue = expandedValue.map((v) => ({ "@graph": _asArray(v) }));
          }
          if (termCtx.mappings.has(key) && termCtx.mappings.get(key).reverse) {
            const reverseMap = expandedParent["@reverse"] = expandedParent["@reverse"] || {};
            expandedValue = _asArray(expandedValue);
            for (let ii = 0; ii < expandedValue.length; ++ii) {
              const item = expandedValue[ii];
              if (_isValue(item) || _isList(item)) {
                throw new JsonLdError(
                  'Invalid JSON-LD syntax; "@reverse" value must not be a @value or an @list.',
                  "jsonld.SyntaxError",
                  { code: "invalid reverse property value", value: expandedValue }
                );
              }
              _addValue(reverseMap, expandedProperty, item, { propertyIsArray: true });
            }
            continue;
          }
          _addValue(expandedParent, expandedProperty, expandedValue, {
            propertyIsArray: true
          });
        }
        if ("@value" in expandedParent) {
          if (expandedParent["@type"] === "@json" && _processingMode(activeCtx, 1.1)) {
          } else if ((_isObject(unexpandedValue) || _isArray(unexpandedValue)) && !options.isFrame) {
            throw new JsonLdError(
              'Invalid JSON-LD syntax; "@value" value must not be an object or an array.',
              "jsonld.SyntaxError",
              { code: "invalid value object value", value: unexpandedValue }
            );
          }
        }
        for (const key of nests) {
          const nestedValues = _isArray(element[key]) ? element[key] : [element[key]];
          for (const nv of nestedValues) {
            if (!_isObject(nv) || Object.keys(nv).some((k) => _expandIri(activeCtx, k, { vocab: true }, options) === "@value")) {
              throw new JsonLdError(
                "Invalid JSON-LD syntax; nested value must be a node object.",
                "jsonld.SyntaxError",
                { code: "invalid @nest value", value: nv }
              );
            }
            await _expandObject({
              activeCtx,
              activeProperty,
              expandedActiveProperty,
              element: nv,
              expandedParent,
              options,
              insideList,
              typeScopedContext,
              typeKey
            });
          }
        }
      }
      function _expandValue({ activeCtx, activeProperty, value, options }) {
        if (value === null || value === void 0) {
          return null;
        }
        const expandedProperty = _expandIri(
          activeCtx,
          activeProperty,
          { vocab: true },
          options
        );
        if (expandedProperty === "@id") {
          return _expandIri(activeCtx, value, { base: true }, options);
        } else if (expandedProperty === "@type") {
          return _expandIri(
            activeCtx,
            value,
            { vocab: true, base: true },
            { ...options, typeExpansion: true }
          );
        }
        const type = _getContextValue(activeCtx, activeProperty, "@type");
        if ((type === "@id" || expandedProperty === "@graph") && _isString(value)) {
          const expandedValue = _expandIri(activeCtx, value, { base: true }, options);
          if (expandedValue === null && value.match(REGEX_KEYWORD)) {
            if (options.eventHandler) {
              _handleEvent({
                event: {
                  type: ["JsonLdEvent"],
                  code: "reserved @id value",
                  level: "warning",
                  message: "Reserved @id found.",
                  details: {
                    id: activeProperty
                  }
                },
                options
              });
            }
          }
          return { "@id": expandedValue };
        }
        if (type === "@vocab" && _isString(value)) {
          return {
            "@id": _expandIri(activeCtx, value, { vocab: true, base: true }, options)
          };
        }
        if (_isKeyword(expandedProperty)) {
          return value;
        }
        const rval = {};
        if (type && !["@id", "@vocab", "@none"].includes(type)) {
          rval["@type"] = type;
        } else if (_isString(value)) {
          const language = _getContextValue(activeCtx, activeProperty, "@language");
          if (language !== null) {
            rval["@language"] = language;
          }
          const direction = _getContextValue(activeCtx, activeProperty, "@direction");
          if (direction !== null) {
            rval["@direction"] = direction;
          }
        }
        if (!["boolean", "number", "string"].includes(typeof value)) {
          value = value.toString();
        }
        rval["@value"] = value;
        return rval;
      }
      function _expandLanguageMap(activeCtx, languageMap, direction, options) {
        const rval = [];
        const keys = Object.keys(languageMap).sort();
        for (const key of keys) {
          const expandedKey = _expandIri(activeCtx, key, { vocab: true }, options);
          let val = languageMap[key];
          if (!_isArray(val)) {
            val = [val];
          }
          for (const item of val) {
            if (item === null) {
              continue;
            }
            if (!_isString(item)) {
              throw new JsonLdError(
                "Invalid JSON-LD syntax; language map values must be strings.",
                "jsonld.SyntaxError",
                { code: "invalid language map value", languageMap }
              );
            }
            const val2 = { "@value": item };
            if (expandedKey !== "@none") {
              if (!key.match(REGEX_BCP47)) {
                if (options.eventHandler) {
                  _handleEvent({
                    event: {
                      type: ["JsonLdEvent"],
                      code: "invalid @language value",
                      level: "warning",
                      message: "@language value must be valid BCP47.",
                      details: {
                        language: key
                      }
                    },
                    options
                  });
                }
              }
              val2["@language"] = key.toLowerCase();
            }
            if (direction) {
              val2["@direction"] = direction;
            }
            rval.push(val2);
          }
        }
        return rval;
      }
      async function _expandIndexMap({
        activeCtx,
        options,
        activeProperty,
        value,
        asGraph,
        indexKey,
        propertyIndex
      }) {
        const rval = [];
        const keys = Object.keys(value).sort();
        const isTypeIndex = indexKey === "@type";
        for (let key of keys) {
          if (isTypeIndex) {
            const ctx = _getContextValue(activeCtx, key, "@context");
            if (!_isUndefined(ctx)) {
              activeCtx = await _processContext({
                activeCtx,
                localCtx: ctx,
                propagate: false,
                options
              });
            }
          }
          let val = value[key];
          if (!_isArray(val)) {
            val = [val];
          }
          val = await api.expand({
            activeCtx,
            activeProperty,
            element: val,
            options,
            insideList: false,
            insideIndex: true
          });
          let expandedKey;
          if (propertyIndex) {
            if (key === "@none") {
              expandedKey = "@none";
            } else {
              expandedKey = _expandValue(
                { activeCtx, activeProperty: indexKey, value: key, options }
              );
            }
          } else {
            expandedKey = _expandIri(activeCtx, key, { vocab: true }, options);
          }
          if (indexKey === "@id") {
            key = _expandIri(activeCtx, key, { base: true }, options);
          } else if (isTypeIndex) {
            key = expandedKey;
          }
          for (let item of val) {
            if (asGraph && !_isGraph(item)) {
              item = { "@graph": [item] };
            }
            if (indexKey === "@type") {
              if (expandedKey === "@none") {
              } else if (item["@type"]) {
                item["@type"] = [key].concat(item["@type"]);
              } else {
                item["@type"] = [key];
              }
            } else if (_isValue(item) && !["@language", "@type", "@index"].includes(indexKey)) {
              throw new JsonLdError(
                `Invalid JSON-LD syntax; Attempt to add illegal key to value object: "${indexKey}".`,
                "jsonld.SyntaxError",
                { code: "invalid value object", value: item }
              );
            } else if (propertyIndex) {
              if (expandedKey !== "@none") {
                _addValue(item, propertyIndex, expandedKey, {
                  propertyIsArray: true,
                  prependValue: true
                });
              }
            } else if (expandedKey !== "@none" && !(indexKey in item)) {
              item[indexKey] = key;
            }
            rval.push(item);
          }
        }
        return rval;
      }
    }
  });

  // node_modules/jsonld/lib/nodeMap.js
  var require_nodeMap = __commonJS({
    "node_modules/jsonld/lib/nodeMap.js"(exports3, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var { isKeyword } = require_context();
      var graphTypes = require_graphTypes();
      var types = require_types();
      var util = require_util();
      var JsonLdError = require_JsonLdError();
      var api = {};
      module.exports = api;
      api.createMergedNodeMap = (input, options) => {
        options = options || {};
        const issuer = options.issuer || new util.IdentifierIssuer("_:b");
        const graphs = { "@default": {} };
        api.createNodeMap(input, graphs, "@default", issuer);
        return api.mergeNodeMaps(graphs);
      };
      api.createNodeMap = (input, graphs, graph, issuer, name, list) => {
        if (types.isArray(input)) {
          for (const node of input) {
            api.createNodeMap(node, graphs, graph, issuer, void 0, list);
          }
          return;
        }
        if (!types.isObject(input)) {
          if (list) {
            list.push(input);
          }
          return;
        }
        if (graphTypes.isValue(input)) {
          if ("@type" in input) {
            let type = input["@type"];
            if (type.indexOf("_:") === 0) {
              input["@type"] = type = issuer.getId(type);
            }
          }
          if (list) {
            list.push(input);
          }
          return;
        } else if (list && graphTypes.isList(input)) {
          const _list = [];
          api.createNodeMap(input["@list"], graphs, graph, issuer, name, _list);
          list.push({ "@list": _list });
          return;
        }
        if ("@type" in input) {
          const types2 = input["@type"];
          for (const type of types2) {
            if (type.indexOf("_:") === 0) {
              issuer.getId(type);
            }
          }
        }
        if (types.isUndefined(name)) {
          name = graphTypes.isBlankNode(input) ? issuer.getId(input["@id"]) : input["@id"];
        }
        if (list) {
          list.push({ "@id": name });
        }
        const subjects = graphs[graph];
        const subject = subjects[name] = subjects[name] || {};
        subject["@id"] = name;
        const properties = Object.keys(input).sort();
        for (let property of properties) {
          if (property === "@id") {
            continue;
          }
          if (property === "@reverse") {
            const referencedNode = { "@id": name };
            const reverseMap = input["@reverse"];
            for (const reverseProperty in reverseMap) {
              const items = reverseMap[reverseProperty];
              for (const item of items) {
                let itemName = item["@id"];
                if (graphTypes.isBlankNode(item)) {
                  itemName = issuer.getId(itemName);
                }
                api.createNodeMap(item, graphs, graph, issuer, itemName);
                util.addValue(
                  subjects[itemName],
                  reverseProperty,
                  referencedNode,
                  { propertyIsArray: true, allowDuplicate: false }
                );
              }
            }
            continue;
          }
          if (property === "@graph") {
            if (!(name in graphs)) {
              graphs[name] = {};
            }
            api.createNodeMap(input[property], graphs, name, issuer);
            continue;
          }
          if (property === "@included") {
            api.createNodeMap(input[property], graphs, graph, issuer);
            continue;
          }
          if (property !== "@type" && isKeyword(property)) {
            if (property === "@index" && property in subject && (input[property] !== subject[property] || input[property]["@id"] !== subject[property]["@id"])) {
              throw new JsonLdError(
                "Invalid JSON-LD syntax; conflicting @index property detected.",
                "jsonld.SyntaxError",
                { code: "conflicting indexes", subject }
              );
            }
            subject[property] = input[property];
            continue;
          }
          const objects = input[property];
          if (property.indexOf("_:") === 0) {
            property = issuer.getId(property);
          }
          if (objects.length === 0) {
            util.addValue(subject, property, [], { propertyIsArray: true });
            continue;
          }
          for (let o of objects) {
            if (property === "@type") {
              o = o.indexOf("_:") === 0 ? issuer.getId(o) : o;
            }
            if (graphTypes.isSubject(o) || graphTypes.isSubjectReference(o)) {
              if ("@id" in o && !o["@id"]) {
                continue;
              }
              const id = graphTypes.isBlankNode(o) ? issuer.getId(o["@id"]) : o["@id"];
              util.addValue(
                subject,
                property,
                { "@id": id },
                { propertyIsArray: true, allowDuplicate: false }
              );
              api.createNodeMap(o, graphs, graph, issuer, id);
            } else if (graphTypes.isValue(o)) {
              util.addValue(
                subject,
                property,
                o,
                { propertyIsArray: true, allowDuplicate: false }
              );
            } else if (graphTypes.isList(o)) {
              const _list = [];
              api.createNodeMap(o["@list"], graphs, graph, issuer, name, _list);
              o = { "@list": _list };
              util.addValue(
                subject,
                property,
                o,
                { propertyIsArray: true, allowDuplicate: false }
              );
            } else {
              api.createNodeMap(o, graphs, graph, issuer, name);
              util.addValue(
                subject,
                property,
                o,
                { propertyIsArray: true, allowDuplicate: false }
              );
            }
          }
        }
      };
      api.mergeNodeMapGraphs = (graphs) => {
        const merged = {};
        for (const name of Object.keys(graphs).sort()) {
          for (const id of Object.keys(graphs[name]).sort()) {
            const node = graphs[name][id];
            if (!(id in merged)) {
              merged[id] = { "@id": id };
            }
            const mergedNode = merged[id];
            for (const property of Object.keys(node).sort()) {
              if (isKeyword(property) && property !== "@type") {
                mergedNode[property] = util.clone(node[property]);
              } else {
                for (const value of node[property]) {
                  util.addValue(
                    mergedNode,
                    property,
                    util.clone(value),
                    { propertyIsArray: true, allowDuplicate: false }
                  );
                }
              }
            }
          }
        }
        return merged;
      };
      api.mergeNodeMaps = (graphs) => {
        const defaultGraph = graphs["@default"];
        const graphNames = Object.keys(graphs).sort();
        for (const graphName of graphNames) {
          if (graphName === "@default") {
            continue;
          }
          const nodeMap = graphs[graphName];
          let subject = defaultGraph[graphName];
          if (!subject) {
            defaultGraph[graphName] = subject = {
              "@id": graphName,
              "@graph": []
            };
          } else if (!("@graph" in subject)) {
            subject["@graph"] = [];
          }
          const graph = subject["@graph"];
          for (const id of Object.keys(nodeMap).sort()) {
            const node = nodeMap[id];
            if (!graphTypes.isSubjectReference(node)) {
              graph.push(node);
            }
          }
        }
        return defaultGraph;
      };
    }
  });

  // node_modules/jsonld/lib/flatten.js
  var require_flatten = __commonJS({
    "node_modules/jsonld/lib/flatten.js"(exports3, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var {
        isSubjectReference: _isSubjectReference
      } = require_graphTypes();
      var {
        createMergedNodeMap: _createMergedNodeMap
      } = require_nodeMap();
      var api = {};
      module.exports = api;
      api.flatten = (input) => {
        const defaultGraph = _createMergedNodeMap(input);
        const flattened = [];
        const keys = Object.keys(defaultGraph).sort();
        for (let ki = 0; ki < keys.length; ++ki) {
          const node = defaultGraph[keys[ki]];
          if (!_isSubjectReference(node)) {
            flattened.push(node);
          }
        }
        return flattened;
      };
    }
  });

  // node_modules/jsonld/lib/fromRdf.js
  var require_fromRdf = __commonJS({
    "node_modules/jsonld/lib/fromRdf.js"(exports3, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var JsonLdError = require_JsonLdError();
      var graphTypes = require_graphTypes();
      var types = require_types();
      var {
        REGEX_BCP47,
        addValue: _addValue
      } = require_util();
      var {
        handleEvent: _handleEvent
      } = require_events();
      var {
        // RDF,
        RDF_LIST,
        RDF_FIRST,
        RDF_REST,
        RDF_NIL,
        RDF_TYPE,
        // RDF_PLAIN_LITERAL,
        // RDF_XML_LITERAL,
        RDF_JSON_LITERAL,
        // RDF_OBJECT,
        // RDF_LANGSTRING,
        // XSD,
        XSD_BOOLEAN,
        XSD_DOUBLE,
        XSD_INTEGER,
        XSD_STRING
      } = require_constants();
      var api = {};
      module.exports = api;
      api.fromRDF = async (dataset, options) => {
        const {
          useRdfType = false,
          useNativeTypes = false,
          rdfDirection = null
        } = options;
        const defaultGraph = {};
        const graphMap = { "@default": defaultGraph };
        const referencedOnce = {};
        if (rdfDirection) {
          if (rdfDirection === "compound-literal") {
            throw new JsonLdError(
              "Unsupported rdfDirection value.",
              "jsonld.InvalidRdfDirection",
              { value: rdfDirection }
            );
          } else if (rdfDirection !== "i18n-datatype") {
            throw new JsonLdError(
              "Unknown rdfDirection value.",
              "jsonld.InvalidRdfDirection",
              { value: rdfDirection }
            );
          }
        }
        for (const quad of dataset) {
          const name = quad.graph.termType === "DefaultGraph" ? "@default" : quad.graph.value;
          if (!(name in graphMap)) {
            graphMap[name] = {};
          }
          if (name !== "@default" && !(name in defaultGraph)) {
            defaultGraph[name] = { "@id": name };
          }
          const nodeMap = graphMap[name];
          const s = quad.subject.value;
          const p = quad.predicate.value;
          const o = quad.object;
          if (!(s in nodeMap)) {
            nodeMap[s] = { "@id": s };
          }
          const node = nodeMap[s];
          const objectIsNode = o.termType.endsWith("Node");
          if (objectIsNode && !(o.value in nodeMap)) {
            nodeMap[o.value] = { "@id": o.value };
          }
          if (p === RDF_TYPE && !useRdfType && objectIsNode) {
            _addValue(node, "@type", o.value, { propertyIsArray: true });
            continue;
          }
          const value = _RDFToObject(o, useNativeTypes, rdfDirection, options);
          _addValue(node, p, value, { propertyIsArray: true });
          if (objectIsNode) {
            if (o.value === RDF_NIL) {
              const object = nodeMap[o.value];
              if (!("usages" in object)) {
                object.usages = [];
              }
              object.usages.push({
                node,
                property: p,
                value
              });
            } else if (o.value in referencedOnce) {
              referencedOnce[o.value] = false;
            } else {
              referencedOnce[o.value] = {
                node,
                property: p,
                value
              };
            }
          }
        }
        for (const name in graphMap) {
          const graphObject = graphMap[name];
          if (!(RDF_NIL in graphObject)) {
            continue;
          }
          const nil = graphObject[RDF_NIL];
          if (!nil.usages) {
            continue;
          }
          for (let usage of nil.usages) {
            let node = usage.node;
            let property = usage.property;
            let head = usage.value;
            const list = [];
            const listNodes = [];
            let nodeKeyCount = Object.keys(node).length;
            while (property === RDF_REST && types.isObject(referencedOnce[node["@id"]]) && types.isArray(node[RDF_FIRST]) && node[RDF_FIRST].length === 1 && types.isArray(node[RDF_REST]) && node[RDF_REST].length === 1 && (nodeKeyCount === 3 || nodeKeyCount === 4 && types.isArray(node["@type"]) && node["@type"].length === 1 && node["@type"][0] === RDF_LIST)) {
              list.push(node[RDF_FIRST][0]);
              listNodes.push(node["@id"]);
              usage = referencedOnce[node["@id"]];
              node = usage.node;
              property = usage.property;
              head = usage.value;
              nodeKeyCount = Object.keys(node).length;
              if (!graphTypes.isBlankNode(node)) {
                break;
              }
            }
            delete head["@id"];
            head["@list"] = list.reverse();
            for (const listNode of listNodes) {
              delete graphObject[listNode];
            }
          }
          delete nil.usages;
        }
        const result = [];
        const subjects = Object.keys(defaultGraph).sort();
        for (const subject of subjects) {
          const node = defaultGraph[subject];
          if (subject in graphMap) {
            const graph = node["@graph"] = [];
            const graphObject = graphMap[subject];
            const graphSubjects = Object.keys(graphObject).sort();
            for (const graphSubject of graphSubjects) {
              const node2 = graphObject[graphSubject];
              if (!graphTypes.isSubjectReference(node2)) {
                graph.push(node2);
              }
            }
          }
          if (!graphTypes.isSubjectReference(node)) {
            result.push(node);
          }
        }
        return result;
      };
      function _RDFToObject(o, useNativeTypes, rdfDirection, options) {
        if (o.termType.endsWith("Node")) {
          return { "@id": o.value };
        }
        const rval = { "@value": o.value };
        if (o.language) {
          if (!o.language.match(REGEX_BCP47)) {
            if (options.eventHandler) {
              _handleEvent({
                event: {
                  type: ["JsonLdEvent"],
                  code: "invalid @language value",
                  level: "warning",
                  message: "@language value must be valid BCP47.",
                  details: {
                    language: o.language
                  }
                },
                options
              });
            }
          }
          rval["@language"] = o.language;
        } else {
          let type = o.datatype.value;
          if (!type) {
            type = XSD_STRING;
          }
          if (type === RDF_JSON_LITERAL) {
            type = "@json";
            try {
              rval["@value"] = JSON.parse(rval["@value"]);
            } catch (e2) {
              throw new JsonLdError(
                "JSON literal could not be parsed.",
                "jsonld.InvalidJsonLiteral",
                { code: "invalid JSON literal", value: rval["@value"], cause: e2 }
              );
            }
          }
          if (useNativeTypes) {
            if (type === XSD_BOOLEAN) {
              if (rval["@value"] === "true") {
                rval["@value"] = true;
              } else if (rval["@value"] === "false") {
                rval["@value"] = false;
              }
            } else if (types.isNumeric(rval["@value"])) {
              if (type === XSD_INTEGER) {
                const i = parseInt(rval["@value"], 10);
                if (i.toFixed(0) === rval["@value"]) {
                  rval["@value"] = i;
                }
              } else if (type === XSD_DOUBLE) {
                rval["@value"] = parseFloat(rval["@value"]);
              }
            }
            if (![XSD_BOOLEAN, XSD_INTEGER, XSD_DOUBLE, XSD_STRING].includes(type)) {
              rval["@type"] = type;
            }
          } else if (rdfDirection === "i18n-datatype" && type.startsWith("https://www.w3.org/ns/i18n#")) {
            const [, language, direction] = type.split(/[#_]/);
            if (language.length > 0) {
              rval["@language"] = language;
              if (!language.match(REGEX_BCP47)) {
                if (options.eventHandler) {
                  _handleEvent({
                    event: {
                      type: ["JsonLdEvent"],
                      code: "invalid @language value",
                      level: "warning",
                      message: "@language value must be valid BCP47.",
                      details: {
                        language
                      }
                    },
                    options
                  });
                }
              }
            }
            rval["@direction"] = direction;
          } else if (type !== XSD_STRING) {
            rval["@type"] = type;
          }
        }
        return rval;
      }
    }
  });

  // node_modules/canonicalize/lib/canonicalize.js
  var require_canonicalize = __commonJS({
    "node_modules/canonicalize/lib/canonicalize.js"(exports3, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      module.exports = function serialize(object) {
        if (object === null || typeof object !== "object" || object.toJSON != null) {
          return JSON.stringify(object);
        }
        if (Array.isArray(object)) {
          return "[" + object.reduce((t, cv, ci) => {
            const comma = ci === 0 ? "" : ",";
            const value = cv === void 0 || typeof cv === "symbol" ? null : cv;
            return t + comma + serialize(value);
          }, "") + "]";
        }
        return "{" + Object.keys(object).sort().reduce((t, cv, ci) => {
          if (object[cv] === void 0 || typeof object[cv] === "symbol") {
            return t;
          }
          const comma = t.length === 0 ? "" : ",";
          return t + comma + serialize(cv) + ":" + serialize(object[cv]);
        }, "") + "}";
      };
    }
  });

  // node_modules/jsonld/lib/toRdf.js
  var require_toRdf = __commonJS({
    "node_modules/jsonld/lib/toRdf.js"(exports3, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var { createNodeMap } = require_nodeMap();
      var { isKeyword } = require_context();
      var graphTypes = require_graphTypes();
      var jsonCanonicalize = require_canonicalize();
      var JsonLdError = require_JsonLdError();
      var types = require_types();
      var util = require_util();
      var {
        handleEvent: _handleEvent
      } = require_events();
      var {
        // RDF,
        // RDF_LIST,
        RDF_FIRST,
        RDF_REST,
        RDF_NIL,
        RDF_TYPE,
        // RDF_PLAIN_LITERAL,
        // RDF_XML_LITERAL,
        RDF_JSON_LITERAL,
        // RDF_OBJECT,
        RDF_LANGSTRING,
        // XSD,
        XSD_BOOLEAN,
        XSD_DOUBLE,
        XSD_INTEGER,
        XSD_STRING
      } = require_constants();
      var {
        isAbsolute: _isAbsoluteIri
      } = require_url();
      var api = {};
      module.exports = api;
      api.toRDF = (input, options) => {
        const issuer = new util.IdentifierIssuer("_:b");
        const nodeMap = { "@default": {} };
        createNodeMap(input, nodeMap, "@default", issuer);
        const dataset = [];
        const graphNames = Object.keys(nodeMap).sort();
        for (const graphName of graphNames) {
          let graphTerm;
          if (graphName === "@default") {
            graphTerm = { termType: "DefaultGraph", value: "" };
          } else if (_isAbsoluteIri(graphName)) {
            if (graphName.startsWith("_:")) {
              graphTerm = { termType: "BlankNode" };
            } else {
              graphTerm = { termType: "NamedNode" };
            }
            graphTerm.value = graphName;
          } else {
            if (options.eventHandler) {
              _handleEvent({
                event: {
                  type: ["JsonLdEvent"],
                  code: "relative graph reference",
                  level: "warning",
                  message: "Relative graph reference found.",
                  details: {
                    graph: graphName
                  }
                },
                options
              });
            }
            continue;
          }
          _graphToRDF(dataset, nodeMap[graphName], graphTerm, issuer, options);
        }
        return dataset;
      };
      function _graphToRDF(dataset, graph, graphTerm, issuer, options) {
        const ids = Object.keys(graph).sort();
        for (const id of ids) {
          const node = graph[id];
          const properties = Object.keys(node).sort();
          for (let property of properties) {
            const items = node[property];
            if (property === "@type") {
              property = RDF_TYPE;
            } else if (isKeyword(property)) {
              continue;
            }
            for (const item of items) {
              const subject = {
                termType: id.startsWith("_:") ? "BlankNode" : "NamedNode",
                value: id
              };
              if (!_isAbsoluteIri(id)) {
                if (options.eventHandler) {
                  _handleEvent({
                    event: {
                      type: ["JsonLdEvent"],
                      code: "relative subject reference",
                      level: "warning",
                      message: "Relative subject reference found.",
                      details: {
                        subject: id
                      }
                    },
                    options
                  });
                }
                continue;
              }
              const predicate = {
                termType: property.startsWith("_:") ? "BlankNode" : "NamedNode",
                value: property
              };
              if (!_isAbsoluteIri(property)) {
                if (options.eventHandler) {
                  _handleEvent({
                    event: {
                      type: ["JsonLdEvent"],
                      code: "relative predicate reference",
                      level: "warning",
                      message: "Relative predicate reference found.",
                      details: {
                        predicate: property
                      }
                    },
                    options
                  });
                }
                continue;
              }
              if (predicate.termType === "BlankNode" && !options.produceGeneralizedRdf) {
                if (options.eventHandler) {
                  _handleEvent({
                    event: {
                      type: ["JsonLdEvent"],
                      code: "blank node predicate",
                      level: "warning",
                      message: "Dropping blank node predicate.",
                      details: {
                        // FIXME: add better issuer API to get reverse mapping
                        property: issuer.getOldIds().find((key) => issuer.getId(key) === property)
                      }
                    },
                    options
                  });
                }
                continue;
              }
              const object = _objectToRDF(
                item,
                issuer,
                dataset,
                graphTerm,
                options.rdfDirection,
                options
              );
              if (object) {
                dataset.push({
                  subject,
                  predicate,
                  object,
                  graph: graphTerm
                });
              }
            }
          }
        }
      }
      function _listToRDF(list, issuer, dataset, graphTerm, rdfDirection, options) {
        const first = { termType: "NamedNode", value: RDF_FIRST };
        const rest = { termType: "NamedNode", value: RDF_REST };
        const nil = { termType: "NamedNode", value: RDF_NIL };
        const last = list.pop();
        const result = last ? { termType: "BlankNode", value: issuer.getId() } : nil;
        let subject = result;
        for (const item of list) {
          const object = _objectToRDF(
            item,
            issuer,
            dataset,
            graphTerm,
            rdfDirection,
            options
          );
          const next = { termType: "BlankNode", value: issuer.getId() };
          dataset.push({
            subject,
            predicate: first,
            object,
            graph: graphTerm
          });
          dataset.push({
            subject,
            predicate: rest,
            object: next,
            graph: graphTerm
          });
          subject = next;
        }
        if (last) {
          const object = _objectToRDF(
            last,
            issuer,
            dataset,
            graphTerm,
            rdfDirection,
            options
          );
          dataset.push({
            subject,
            predicate: first,
            object,
            graph: graphTerm
          });
          dataset.push({
            subject,
            predicate: rest,
            object: nil,
            graph: graphTerm
          });
        }
        return result;
      }
      function _objectToRDF(item, issuer, dataset, graphTerm, rdfDirection, options) {
        const object = {};
        if (graphTypes.isValue(item)) {
          object.termType = "Literal";
          object.value = void 0;
          object.datatype = {
            termType: "NamedNode"
          };
          let value = item["@value"];
          const datatype = item["@type"] || null;
          if (datatype === "@json") {
            object.value = jsonCanonicalize(value);
            object.datatype.value = RDF_JSON_LITERAL;
          } else if (types.isBoolean(value)) {
            object.value = value.toString();
            object.datatype.value = datatype || XSD_BOOLEAN;
          } else if (types.isDouble(value) || datatype === XSD_DOUBLE) {
            if (!types.isDouble(value)) {
              value = parseFloat(value);
            }
            object.value = value.toExponential(15).replace(/(\d)0*e\+?/, "$1E");
            object.datatype.value = datatype || XSD_DOUBLE;
          } else if (types.isNumber(value)) {
            object.value = value.toFixed(0);
            object.datatype.value = datatype || XSD_INTEGER;
          } else if ("@direction" in item && rdfDirection === "i18n-datatype") {
            const language = (item["@language"] || "").toLowerCase();
            const direction = item["@direction"];
            const datatype2 = `https://www.w3.org/ns/i18n#${language}_${direction}`;
            object.datatype.value = datatype2;
            object.value = value;
          } else if ("@direction" in item && rdfDirection === "compound-literal") {
            throw new JsonLdError(
              "Unsupported rdfDirection value.",
              "jsonld.InvalidRdfDirection",
              { value: rdfDirection }
            );
          } else if ("@direction" in item && rdfDirection) {
            throw new JsonLdError(
              "Unknown rdfDirection value.",
              "jsonld.InvalidRdfDirection",
              { value: rdfDirection }
            );
          } else if ("@language" in item) {
            if ("@direction" in item && !rdfDirection) {
              if (options.eventHandler) {
                _handleEvent({
                  event: {
                    type: ["JsonLdEvent"],
                    code: "rdfDirection not set",
                    level: "warning",
                    message: "rdfDirection not set for @direction.",
                    details: {
                      object: object.value
                    }
                  },
                  options
                });
              }
            }
            object.value = value;
            object.datatype.value = datatype || RDF_LANGSTRING;
            object.language = item["@language"];
          } else {
            if ("@direction" in item && !rdfDirection) {
              if (options.eventHandler) {
                _handleEvent({
                  event: {
                    type: ["JsonLdEvent"],
                    code: "rdfDirection not set",
                    level: "warning",
                    message: "rdfDirection not set for @direction.",
                    details: {
                      object: object.value
                    }
                  },
                  options
                });
              }
            }
            object.value = value;
            object.datatype.value = datatype || XSD_STRING;
          }
        } else if (graphTypes.isList(item)) {
          const _list = _listToRDF(
            item["@list"],
            issuer,
            dataset,
            graphTerm,
            rdfDirection,
            options
          );
          object.termType = _list.termType;
          object.value = _list.value;
        } else {
          const id = types.isObject(item) ? item["@id"] : item;
          object.termType = id.startsWith("_:") ? "BlankNode" : "NamedNode";
          object.value = id;
        }
        if (object.termType === "NamedNode" && !_isAbsoluteIri(object.value)) {
          if (options.eventHandler) {
            _handleEvent({
              event: {
                type: ["JsonLdEvent"],
                code: "relative object reference",
                level: "warning",
                message: "Relative object reference found.",
                details: {
                  object: object.value
                }
              },
              options
            });
          }
          return null;
        }
        return object;
      }
    }
  });

  // node_modules/jsonld/lib/frame.js
  var require_frame = __commonJS({
    "node_modules/jsonld/lib/frame.js"(exports3, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var { isKeyword } = require_context();
      var graphTypes = require_graphTypes();
      var types = require_types();
      var util = require_util();
      var url = require_url();
      var JsonLdError = require_JsonLdError();
      var {
        createNodeMap: _createNodeMap,
        mergeNodeMapGraphs: _mergeNodeMapGraphs
      } = require_nodeMap();
      var api = {};
      module.exports = api;
      api.frameMergedOrDefault = (input, frame2, options) => {
        const state = {
          options,
          embedded: false,
          graph: "@default",
          graphMap: { "@default": {} },
          subjectStack: [],
          link: {},
          bnodeMap: {}
        };
        const issuer = new util.IdentifierIssuer("_:b");
        _createNodeMap(input, state.graphMap, "@default", issuer);
        if (options.merged) {
          state.graphMap["@merged"] = _mergeNodeMapGraphs(state.graphMap);
          state.graph = "@merged";
        }
        state.subjects = state.graphMap[state.graph];
        const framed = [];
        api.frame(state, Object.keys(state.subjects).sort(), frame2, framed);
        if (options.pruneBlankNodeIdentifiers) {
          options.bnodesToClear = Object.keys(state.bnodeMap).filter((id) => state.bnodeMap[id].length === 1);
        }
        options.link = {};
        return _cleanupPreserve(framed, options);
      };
      api.frame = (state, subjects, frame2, parent, property = null) => {
        _validateFrame(frame2);
        frame2 = frame2[0];
        const options = state.options;
        const flags = {
          embed: _getFrameFlag(frame2, options, "embed"),
          explicit: _getFrameFlag(frame2, options, "explicit"),
          requireAll: _getFrameFlag(frame2, options, "requireAll")
        };
        if (!state.link.hasOwnProperty(state.graph)) {
          state.link[state.graph] = {};
        }
        const link = state.link[state.graph];
        const matches = _filterSubjects(state, subjects, frame2, flags);
        const ids = Object.keys(matches).sort();
        for (const id of ids) {
          const subject = matches[id];
          if (property === null) {
            state.uniqueEmbeds = { [state.graph]: {} };
          } else {
            state.uniqueEmbeds[state.graph] = state.uniqueEmbeds[state.graph] || {};
          }
          if (flags.embed === "@link" && id in link) {
            _addFrameOutput(parent, property, link[id]);
            continue;
          }
          const output = { "@id": id };
          if (id.indexOf("_:") === 0) {
            util.addValue(state.bnodeMap, id, output, { propertyIsArray: true });
          }
          link[id] = output;
          if ((flags.embed === "@first" || flags.embed === "@last") && state.is11) {
            throw new JsonLdError(
              "Invalid JSON-LD syntax; invalid value of @embed.",
              "jsonld.SyntaxError",
              { code: "invalid @embed value", frame: frame2 }
            );
          }
          if (!state.embedded && state.uniqueEmbeds[state.graph].hasOwnProperty(id)) {
            continue;
          }
          if (state.embedded && (flags.embed === "@never" || _createsCircularReference(subject, state.graph, state.subjectStack))) {
            _addFrameOutput(parent, property, output);
            continue;
          }
          if (state.embedded && (flags.embed == "@first" || flags.embed == "@once") && state.uniqueEmbeds[state.graph].hasOwnProperty(id)) {
            _addFrameOutput(parent, property, output);
            continue;
          }
          if (flags.embed === "@last") {
            if (id in state.uniqueEmbeds[state.graph]) {
              _removeEmbed(state, id);
            }
          }
          state.uniqueEmbeds[state.graph][id] = { parent, property };
          state.subjectStack.push({ subject, graph: state.graph });
          if (id in state.graphMap) {
            let recurse = false;
            let subframe = null;
            if (!("@graph" in frame2)) {
              recurse = state.graph !== "@merged";
              subframe = {};
            } else {
              subframe = frame2["@graph"][0];
              recurse = !(id === "@merged" || id === "@default");
              if (!types.isObject(subframe)) {
                subframe = {};
              }
            }
            if (recurse) {
              api.frame(
                { ...state, graph: id, embedded: false },
                Object.keys(state.graphMap[id]).sort(),
                [subframe],
                output,
                "@graph"
              );
            }
          }
          if ("@included" in frame2) {
            api.frame(
              { ...state, embedded: false },
              subjects,
              frame2["@included"],
              output,
              "@included"
            );
          }
          for (const prop of Object.keys(subject).sort()) {
            if (isKeyword(prop)) {
              output[prop] = util.clone(subject[prop]);
              if (prop === "@type") {
                for (const type of subject["@type"]) {
                  if (type.indexOf("_:") === 0) {
                    util.addValue(
                      state.bnodeMap,
                      type,
                      output,
                      { propertyIsArray: true }
                    );
                  }
                }
              }
              continue;
            }
            if (flags.explicit && !(prop in frame2)) {
              continue;
            }
            for (const o of subject[prop]) {
              const subframe = prop in frame2 ? frame2[prop] : _createImplicitFrame(flags);
              if (graphTypes.isList(o)) {
                const subframe2 = frame2[prop] && frame2[prop][0] && frame2[prop][0]["@list"] ? frame2[prop][0]["@list"] : _createImplicitFrame(flags);
                const list = { "@list": [] };
                _addFrameOutput(output, prop, list);
                const src = o["@list"];
                for (const oo of src) {
                  if (graphTypes.isSubjectReference(oo)) {
                    api.frame(
                      { ...state, embedded: true },
                      [oo["@id"]],
                      subframe2,
                      list,
                      "@list"
                    );
                  } else {
                    _addFrameOutput(list, "@list", util.clone(oo));
                  }
                }
              } else if (graphTypes.isSubjectReference(o)) {
                api.frame(
                  { ...state, embedded: true },
                  [o["@id"]],
                  subframe,
                  output,
                  prop
                );
              } else if (_valueMatch(subframe[0], o)) {
                _addFrameOutput(output, prop, util.clone(o));
              }
            }
          }
          for (const prop of Object.keys(frame2).sort()) {
            if (prop === "@type") {
              if (!types.isObject(frame2[prop][0]) || !("@default" in frame2[prop][0])) {
                continue;
              }
            } else if (isKeyword(prop)) {
              continue;
            }
            const next = frame2[prop][0] || {};
            const omitDefaultOn = _getFrameFlag(next, options, "omitDefault");
            if (!omitDefaultOn && !(prop in output)) {
              let preserve = "@null";
              if ("@default" in next) {
                preserve = util.clone(next["@default"]);
              }
              if (!types.isArray(preserve)) {
                preserve = [preserve];
              }
              output[prop] = [{ "@preserve": preserve }];
            }
          }
          for (const reverseProp of Object.keys(frame2["@reverse"] || {}).sort()) {
            const subframe = frame2["@reverse"][reverseProp];
            for (const subject2 of Object.keys(state.subjects)) {
              const nodeValues = util.getValues(state.subjects[subject2], reverseProp);
              if (nodeValues.some((v) => v["@id"] === id)) {
                output["@reverse"] = output["@reverse"] || {};
                util.addValue(
                  output["@reverse"],
                  reverseProp,
                  [],
                  { propertyIsArray: true }
                );
                api.frame(
                  { ...state, embedded: true },
                  [subject2],
                  subframe,
                  output["@reverse"][reverseProp],
                  property
                );
              }
            }
          }
          _addFrameOutput(parent, property, output);
          state.subjectStack.pop();
        }
      };
      api.cleanupNull = (input, options) => {
        if (types.isArray(input)) {
          const noNulls = input.map((v) => api.cleanupNull(v, options));
          return noNulls.filter((v) => v);
        }
        if (input === "@null") {
          return null;
        }
        if (types.isObject(input)) {
          if ("@id" in input) {
            const id = input["@id"];
            if (options.link.hasOwnProperty(id)) {
              const idx = options.link[id].indexOf(input);
              if (idx !== -1) {
                return options.link[id][idx];
              }
              options.link[id].push(input);
            } else {
              options.link[id] = [input];
            }
          }
          for (const key in input) {
            input[key] = api.cleanupNull(input[key], options);
          }
        }
        return input;
      };
      function _createImplicitFrame(flags) {
        const frame2 = {};
        for (const key in flags) {
          if (flags[key] !== void 0) {
            frame2["@" + key] = [flags[key]];
          }
        }
        return [frame2];
      }
      function _createsCircularReference(subjectToEmbed, graph, subjectStack) {
        for (let i = subjectStack.length - 1; i >= 0; --i) {
          const subject = subjectStack[i];
          if (subject.graph === graph && subject.subject["@id"] === subjectToEmbed["@id"]) {
            return true;
          }
        }
        return false;
      }
      function _getFrameFlag(frame2, options, name) {
        const flag = "@" + name;
        let rval = flag in frame2 ? frame2[flag][0] : options[name];
        if (name === "embed") {
          if (rval === true) {
            rval = "@once";
          } else if (rval === false) {
            rval = "@never";
          } else if (rval !== "@always" && rval !== "@never" && rval !== "@link" && rval !== "@first" && rval !== "@last" && rval !== "@once") {
            throw new JsonLdError(
              "Invalid JSON-LD syntax; invalid value of @embed.",
              "jsonld.SyntaxError",
              { code: "invalid @embed value", frame: frame2 }
            );
          }
        }
        return rval;
      }
      function _validateFrame(frame2) {
        if (!types.isArray(frame2) || frame2.length !== 1 || !types.isObject(frame2[0])) {
          throw new JsonLdError(
            "Invalid JSON-LD syntax; a JSON-LD frame must be a single object.",
            "jsonld.SyntaxError",
            { frame: frame2 }
          );
        }
        if ("@id" in frame2[0]) {
          for (const id of util.asArray(frame2[0]["@id"])) {
            if (!(types.isObject(id) || url.isAbsolute(id)) || types.isString(id) && id.indexOf("_:") === 0) {
              throw new JsonLdError(
                "Invalid JSON-LD syntax; invalid @id in frame.",
                "jsonld.SyntaxError",
                { code: "invalid frame", frame: frame2 }
              );
            }
          }
        }
        if ("@type" in frame2[0]) {
          for (const type of util.asArray(frame2[0]["@type"])) {
            if (!(types.isObject(type) || url.isAbsolute(type) || type === "@json") || types.isString(type) && type.indexOf("_:") === 0) {
              throw new JsonLdError(
                "Invalid JSON-LD syntax; invalid @type in frame.",
                "jsonld.SyntaxError",
                { code: "invalid frame", frame: frame2 }
              );
            }
          }
        }
      }
      function _filterSubjects(state, subjects, frame2, flags) {
        const rval = {};
        for (const id of subjects) {
          const subject = state.graphMap[state.graph][id];
          if (_filterSubject(state, subject, frame2, flags)) {
            rval[id] = subject;
          }
        }
        return rval;
      }
      function _filterSubject(state, subject, frame2, flags) {
        let wildcard = true;
        let matchesSome = false;
        for (const key in frame2) {
          let matchThis = false;
          const nodeValues = util.getValues(subject, key);
          const isEmpty = util.getValues(frame2, key).length === 0;
          if (key === "@id") {
            if (types.isEmptyObject(frame2["@id"][0] || {})) {
              matchThis = true;
            } else if (frame2["@id"].length >= 0) {
              matchThis = frame2["@id"].includes(nodeValues[0]);
            }
            if (!flags.requireAll) {
              return matchThis;
            }
          } else if (key === "@type") {
            wildcard = false;
            if (isEmpty) {
              if (nodeValues.length > 0) {
                return false;
              }
              matchThis = true;
            } else if (frame2["@type"].length === 1 && types.isEmptyObject(frame2["@type"][0])) {
              matchThis = nodeValues.length > 0;
            } else {
              for (const type of frame2["@type"]) {
                if (types.isObject(type) && "@default" in type) {
                  matchThis = true;
                } else {
                  matchThis = matchThis || nodeValues.some((tt) => tt === type);
                }
              }
            }
            if (!flags.requireAll) {
              return matchThis;
            }
          } else if (isKeyword(key)) {
            continue;
          } else {
            const thisFrame = util.getValues(frame2, key)[0];
            let hasDefault = false;
            if (thisFrame) {
              _validateFrame([thisFrame]);
              hasDefault = "@default" in thisFrame;
            }
            wildcard = false;
            if (nodeValues.length === 0 && hasDefault) {
              continue;
            }
            if (nodeValues.length > 0 && isEmpty) {
              return false;
            }
            if (thisFrame === void 0) {
              if (nodeValues.length > 0) {
                return false;
              }
              matchThis = true;
            } else {
              if (graphTypes.isList(thisFrame)) {
                const listValue = thisFrame["@list"][0];
                if (graphTypes.isList(nodeValues[0])) {
                  const nodeListValues = nodeValues[0]["@list"];
                  if (graphTypes.isValue(listValue)) {
                    matchThis = nodeListValues.some((lv) => _valueMatch(listValue, lv));
                  } else if (graphTypes.isSubject(listValue) || graphTypes.isSubjectReference(listValue)) {
                    matchThis = nodeListValues.some((lv) => _nodeMatch(
                      state,
                      listValue,
                      lv,
                      flags
                    ));
                  }
                }
              } else if (graphTypes.isValue(thisFrame)) {
                matchThis = nodeValues.some((nv) => _valueMatch(thisFrame, nv));
              } else if (graphTypes.isSubjectReference(thisFrame)) {
                matchThis = nodeValues.some((nv) => _nodeMatch(state, thisFrame, nv, flags));
              } else if (types.isObject(thisFrame)) {
                matchThis = nodeValues.length > 0;
              } else {
                matchThis = false;
              }
            }
          }
          if (!matchThis && flags.requireAll) {
            return false;
          }
          matchesSome = matchesSome || matchThis;
        }
        return wildcard || matchesSome;
      }
      function _removeEmbed(state, id) {
        const embeds = state.uniqueEmbeds[state.graph];
        const embed = embeds[id];
        const parent = embed.parent;
        const property = embed.property;
        const subject = { "@id": id };
        if (types.isArray(parent)) {
          for (let i = 0; i < parent.length; ++i) {
            if (util.compareValues(parent[i], subject)) {
              parent[i] = subject;
              break;
            }
          }
        } else {
          const useArray = types.isArray(parent[property]);
          util.removeValue(parent, property, subject, { propertyIsArray: useArray });
          util.addValue(parent, property, subject, { propertyIsArray: useArray });
        }
        const removeDependents = (id2) => {
          const ids = Object.keys(embeds);
          for (const next of ids) {
            if (next in embeds && types.isObject(embeds[next].parent) && embeds[next].parent["@id"] === id2) {
              delete embeds[next];
              removeDependents(next);
            }
          }
        };
        removeDependents(id);
      }
      function _cleanupPreserve(input, options) {
        if (types.isArray(input)) {
          return input.map((value) => _cleanupPreserve(value, options));
        }
        if (types.isObject(input)) {
          if ("@preserve" in input) {
            return input["@preserve"][0];
          }
          if (graphTypes.isValue(input)) {
            return input;
          }
          if (graphTypes.isList(input)) {
            input["@list"] = _cleanupPreserve(input["@list"], options);
            return input;
          }
          if ("@id" in input) {
            const id = input["@id"];
            if (options.link.hasOwnProperty(id)) {
              const idx = options.link[id].indexOf(input);
              if (idx !== -1) {
                return options.link[id][idx];
              }
              options.link[id].push(input);
            } else {
              options.link[id] = [input];
            }
          }
          for (const prop in input) {
            if (prop === "@id" && options.bnodesToClear.includes(input[prop])) {
              delete input["@id"];
              continue;
            }
            input[prop] = _cleanupPreserve(input[prop], options);
          }
        }
        return input;
      }
      function _addFrameOutput(parent, property, output) {
        if (types.isObject(parent)) {
          util.addValue(parent, property, output, { propertyIsArray: true });
        } else {
          parent.push(output);
        }
      }
      function _nodeMatch(state, pattern, value, flags) {
        if (!("@id" in value)) {
          return false;
        }
        const nodeObject = state.subjects[value["@id"]];
        return nodeObject && _filterSubject(state, nodeObject, pattern, flags);
      }
      function _valueMatch(pattern, value) {
        const v1 = value["@value"];
        const t1 = value["@type"];
        const l1 = value["@language"];
        const v2 = pattern["@value"] ? types.isArray(pattern["@value"]) ? pattern["@value"] : [pattern["@value"]] : [];
        const t2 = pattern["@type"] ? types.isArray(pattern["@type"]) ? pattern["@type"] : [pattern["@type"]] : [];
        const l2 = pattern["@language"] ? types.isArray(pattern["@language"]) ? pattern["@language"] : [pattern["@language"]] : [];
        if (v2.length === 0 && t2.length === 0 && l2.length === 0) {
          return true;
        }
        if (!(v2.includes(v1) || types.isEmptyObject(v2[0]))) {
          return false;
        }
        if (!(!t1 && t2.length === 0 || t2.includes(t1) || t1 && types.isEmptyObject(t2[0]))) {
          return false;
        }
        if (!(!l1 && l2.length === 0 || l2.includes(l1) || l1 && types.isEmptyObject(l2[0]))) {
          return false;
        }
        return true;
      }
    }
  });

  // node_modules/jsonld/lib/compact.js
  var require_compact = __commonJS({
    "node_modules/jsonld/lib/compact.js"(exports3, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var JsonLdError = require_JsonLdError();
      var {
        isArray: _isArray,
        isObject: _isObject,
        isString: _isString,
        isUndefined: _isUndefined
      } = require_types();
      var {
        isList: _isList,
        isValue: _isValue,
        isGraph: _isGraph,
        isSimpleGraph: _isSimpleGraph,
        isSubjectReference: _isSubjectReference
      } = require_graphTypes();
      var {
        expandIri: _expandIri,
        getContextValue: _getContextValue,
        isKeyword: _isKeyword,
        process: _processContext,
        processingMode: _processingMode
      } = require_context();
      var {
        removeBase: _removeBase,
        prependBase: _prependBase
      } = require_url();
      var {
        REGEX_KEYWORD,
        addValue: _addValue,
        asArray: _asArray,
        compareShortestLeast: _compareShortestLeast
      } = require_util();
      var api = {};
      module.exports = api;
      api.compact = async ({
        activeCtx,
        activeProperty = null,
        element,
        options = {}
      }) => {
        if (_isArray(element)) {
          let rval = [];
          for (let i = 0; i < element.length; ++i) {
            const compacted = await api.compact({
              activeCtx,
              activeProperty,
              element: element[i],
              options
            });
            if (compacted === null) {
              continue;
            }
            rval.push(compacted);
          }
          if (options.compactArrays && rval.length === 1) {
            const container = _getContextValue(
              activeCtx,
              activeProperty,
              "@container"
            ) || [];
            if (container.length === 0) {
              rval = rval[0];
            }
          }
          return rval;
        }
        const ctx = _getContextValue(activeCtx, activeProperty, "@context");
        if (!_isUndefined(ctx)) {
          activeCtx = await _processContext({
            activeCtx,
            localCtx: ctx,
            propagate: true,
            overrideProtected: true,
            options
          });
        }
        if (_isObject(element)) {
          if (options.link && "@id" in element && options.link.hasOwnProperty(element["@id"])) {
            const linked = options.link[element["@id"]];
            for (let i = 0; i < linked.length; ++i) {
              if (linked[i].expanded === element) {
                return linked[i].compacted;
              }
            }
          }
          if (_isValue(element) || _isSubjectReference(element)) {
            const rval2 = api.compactValue({ activeCtx, activeProperty, value: element, options });
            if (options.link && _isSubjectReference(element)) {
              if (!options.link.hasOwnProperty(element["@id"])) {
                options.link[element["@id"]] = [];
              }
              options.link[element["@id"]].push({ expanded: element, compacted: rval2 });
            }
            return rval2;
          }
          if (_isList(element)) {
            const container = _getContextValue(
              activeCtx,
              activeProperty,
              "@container"
            ) || [];
            if (container.includes("@list")) {
              return api.compact({
                activeCtx,
                activeProperty,
                element: element["@list"],
                options
              });
            }
          }
          const insideReverse = activeProperty === "@reverse";
          const rval = {};
          const inputCtx = activeCtx;
          if (!_isValue(element) && !_isSubjectReference(element)) {
            activeCtx = activeCtx.revertToPreviousContext();
          }
          const propertyScopedCtx = _getContextValue(inputCtx, activeProperty, "@context");
          if (!_isUndefined(propertyScopedCtx)) {
            activeCtx = await _processContext({
              activeCtx,
              localCtx: propertyScopedCtx,
              propagate: true,
              overrideProtected: true,
              options
            });
          }
          if (options.link && "@id" in element) {
            if (!options.link.hasOwnProperty(element["@id"])) {
              options.link[element["@id"]] = [];
            }
            options.link[element["@id"]].push({ expanded: element, compacted: rval });
          }
          let types = element["@type"] || [];
          if (types.length > 1) {
            types = Array.from(types).sort();
          }
          const typeContext = activeCtx;
          for (const type of types) {
            const compactedType = api.compactIri(
              { activeCtx: typeContext, iri: type, relativeTo: { vocab: true } }
            );
            const ctx2 = _getContextValue(inputCtx, compactedType, "@context");
            if (!_isUndefined(ctx2)) {
              activeCtx = await _processContext({
                activeCtx,
                localCtx: ctx2,
                options,
                propagate: false
              });
            }
          }
          const keys = Object.keys(element).sort();
          for (const expandedProperty of keys) {
            const expandedValue = element[expandedProperty];
            if (expandedProperty === "@id") {
              let compactedValue = _asArray(expandedValue).map(
                (expandedIri) => api.compactIri({
                  activeCtx,
                  iri: expandedIri,
                  relativeTo: { vocab: false },
                  base: options.base
                })
              );
              if (compactedValue.length === 1) {
                compactedValue = compactedValue[0];
              }
              const alias = api.compactIri(
                { activeCtx, iri: "@id", relativeTo: { vocab: true } }
              );
              rval[alias] = compactedValue;
              continue;
            }
            if (expandedProperty === "@type") {
              let compactedValue = _asArray(expandedValue).map(
                (expandedIri) => api.compactIri({
                  activeCtx: inputCtx,
                  iri: expandedIri,
                  relativeTo: { vocab: true }
                })
              );
              if (compactedValue.length === 1) {
                compactedValue = compactedValue[0];
              }
              const alias = api.compactIri(
                { activeCtx, iri: "@type", relativeTo: { vocab: true } }
              );
              const container = _getContextValue(
                activeCtx,
                alias,
                "@container"
              ) || [];
              const typeAsSet = container.includes("@set") && _processingMode(activeCtx, 1.1);
              const isArray = typeAsSet || _isArray(compactedValue) && expandedValue.length === 0;
              _addValue(rval, alias, compactedValue, { propertyIsArray: isArray });
              continue;
            }
            if (expandedProperty === "@reverse") {
              const compactedValue = await api.compact({
                activeCtx,
                activeProperty: "@reverse",
                element: expandedValue,
                options
              });
              for (const compactedProperty in compactedValue) {
                if (activeCtx.mappings.has(compactedProperty) && activeCtx.mappings.get(compactedProperty).reverse) {
                  const value = compactedValue[compactedProperty];
                  const container = _getContextValue(
                    activeCtx,
                    compactedProperty,
                    "@container"
                  ) || [];
                  const useArray = container.includes("@set") || !options.compactArrays;
                  _addValue(
                    rval,
                    compactedProperty,
                    value,
                    { propertyIsArray: useArray }
                  );
                  delete compactedValue[compactedProperty];
                }
              }
              if (Object.keys(compactedValue).length > 0) {
                const alias = api.compactIri({
                  activeCtx,
                  iri: expandedProperty,
                  relativeTo: { vocab: true }
                });
                _addValue(rval, alias, compactedValue);
              }
              continue;
            }
            if (expandedProperty === "@preserve") {
              const compactedValue = await api.compact({
                activeCtx,
                activeProperty,
                element: expandedValue,
                options
              });
              if (!(_isArray(compactedValue) && compactedValue.length === 0)) {
                _addValue(rval, expandedProperty, compactedValue);
              }
              continue;
            }
            if (expandedProperty === "@index") {
              const container = _getContextValue(
                activeCtx,
                activeProperty,
                "@container"
              ) || [];
              if (container.includes("@index")) {
                continue;
              }
              const alias = api.compactIri({
                activeCtx,
                iri: expandedProperty,
                relativeTo: { vocab: true }
              });
              _addValue(rval, alias, expandedValue);
              continue;
            }
            if (expandedProperty !== "@graph" && expandedProperty !== "@list" && expandedProperty !== "@included" && _isKeyword(expandedProperty)) {
              const alias = api.compactIri({
                activeCtx,
                iri: expandedProperty,
                relativeTo: { vocab: true }
              });
              _addValue(rval, alias, expandedValue);
              continue;
            }
            if (!_isArray(expandedValue)) {
              throw new JsonLdError(
                "JSON-LD expansion error; expanded value must be an array.",
                "jsonld.SyntaxError"
              );
            }
            if (expandedValue.length === 0) {
              const itemActiveProperty = api.compactIri({
                activeCtx,
                iri: expandedProperty,
                value: expandedValue,
                relativeTo: { vocab: true },
                reverse: insideReverse
              });
              const nestProperty = activeCtx.mappings.has(itemActiveProperty) ? activeCtx.mappings.get(itemActiveProperty)["@nest"] : null;
              let nestResult = rval;
              if (nestProperty) {
                _checkNestProperty(activeCtx, nestProperty, options);
                if (!_isObject(rval[nestProperty])) {
                  rval[nestProperty] = {};
                }
                nestResult = rval[nestProperty];
              }
              _addValue(
                nestResult,
                itemActiveProperty,
                expandedValue,
                {
                  propertyIsArray: true
                }
              );
            }
            for (const expandedItem of expandedValue) {
              const itemActiveProperty = api.compactIri({
                activeCtx,
                iri: expandedProperty,
                value: expandedItem,
                relativeTo: { vocab: true },
                reverse: insideReverse
              });
              const nestProperty = activeCtx.mappings.has(itemActiveProperty) ? activeCtx.mappings.get(itemActiveProperty)["@nest"] : null;
              let nestResult = rval;
              if (nestProperty) {
                _checkNestProperty(activeCtx, nestProperty, options);
                if (!_isObject(rval[nestProperty])) {
                  rval[nestProperty] = {};
                }
                nestResult = rval[nestProperty];
              }
              const container = _getContextValue(
                activeCtx,
                itemActiveProperty,
                "@container"
              ) || [];
              const isGraph = _isGraph(expandedItem);
              const isList = _isList(expandedItem);
              let inner;
              if (isList) {
                inner = expandedItem["@list"];
              } else if (isGraph) {
                inner = expandedItem["@graph"];
              }
              let compactedItem = await api.compact({
                activeCtx,
                activeProperty: itemActiveProperty,
                element: isList || isGraph ? inner : expandedItem,
                options
              });
              if (isList) {
                if (!_isArray(compactedItem)) {
                  compactedItem = [compactedItem];
                }
                if (!container.includes("@list")) {
                  compactedItem = {
                    [api.compactIri({
                      activeCtx,
                      iri: "@list",
                      relativeTo: { vocab: true }
                    })]: compactedItem
                  };
                  if ("@index" in expandedItem) {
                    compactedItem[api.compactIri({
                      activeCtx,
                      iri: "@index",
                      relativeTo: { vocab: true }
                    })] = expandedItem["@index"];
                  }
                } else {
                  _addValue(nestResult, itemActiveProperty, compactedItem, {
                    valueIsArray: true,
                    allowDuplicate: true
                  });
                  continue;
                }
              }
              if (isGraph) {
                if (container.includes("@graph") && (container.includes("@id") || container.includes("@index") && _isSimpleGraph(expandedItem))) {
                  let mapObject;
                  if (nestResult.hasOwnProperty(itemActiveProperty)) {
                    mapObject = nestResult[itemActiveProperty];
                  } else {
                    nestResult[itemActiveProperty] = mapObject = {};
                  }
                  const key = (container.includes("@id") ? expandedItem["@id"] : expandedItem["@index"]) || api.compactIri({
                    activeCtx,
                    iri: "@none",
                    relativeTo: { vocab: true }
                  });
                  _addValue(
                    mapObject,
                    key,
                    compactedItem,
                    {
                      propertyIsArray: !options.compactArrays || container.includes("@set")
                    }
                  );
                } else if (container.includes("@graph") && _isSimpleGraph(expandedItem)) {
                  if (_isArray(compactedItem) && compactedItem.length > 1) {
                    compactedItem = { "@included": compactedItem };
                  }
                  _addValue(
                    nestResult,
                    itemActiveProperty,
                    compactedItem,
                    {
                      propertyIsArray: !options.compactArrays || container.includes("@set")
                    }
                  );
                } else {
                  if (_isArray(compactedItem) && compactedItem.length === 1 && options.compactArrays) {
                    compactedItem = compactedItem[0];
                  }
                  compactedItem = {
                    [api.compactIri({
                      activeCtx,
                      iri: "@graph",
                      relativeTo: { vocab: true }
                    })]: compactedItem
                  };
                  if ("@id" in expandedItem) {
                    compactedItem[api.compactIri({
                      activeCtx,
                      iri: "@id",
                      relativeTo: { vocab: true }
                    })] = expandedItem["@id"];
                  }
                  if ("@index" in expandedItem) {
                    compactedItem[api.compactIri({
                      activeCtx,
                      iri: "@index",
                      relativeTo: { vocab: true }
                    })] = expandedItem["@index"];
                  }
                  _addValue(
                    nestResult,
                    itemActiveProperty,
                    compactedItem,
                    {
                      propertyIsArray: !options.compactArrays || container.includes("@set")
                    }
                  );
                }
              } else if (container.includes("@language") || container.includes("@index") || container.includes("@id") || container.includes("@type")) {
                let mapObject;
                if (nestResult.hasOwnProperty(itemActiveProperty)) {
                  mapObject = nestResult[itemActiveProperty];
                } else {
                  nestResult[itemActiveProperty] = mapObject = {};
                }
                let key;
                if (container.includes("@language")) {
                  if (_isValue(compactedItem)) {
                    compactedItem = compactedItem["@value"];
                  }
                  key = expandedItem["@language"];
                } else if (container.includes("@index")) {
                  const indexKey = _getContextValue(
                    activeCtx,
                    itemActiveProperty,
                    "@index"
                  ) || "@index";
                  const containerKey = api.compactIri(
                    { activeCtx, iri: indexKey, relativeTo: { vocab: true } }
                  );
                  if (indexKey === "@index") {
                    key = expandedItem["@index"];
                    delete compactedItem[containerKey];
                  } else {
                    let others;
                    [key, ...others] = _asArray(compactedItem[indexKey] || []);
                    if (!_isString(key)) {
                      key = null;
                    } else {
                      switch (others.length) {
                        case 0:
                          delete compactedItem[indexKey];
                          break;
                        case 1:
                          compactedItem[indexKey] = others[0];
                          break;
                        default:
                          compactedItem[indexKey] = others;
                          break;
                      }
                    }
                  }
                } else if (container.includes("@id")) {
                  const idKey = api.compactIri({
                    activeCtx,
                    iri: "@id",
                    relativeTo: { vocab: true }
                  });
                  key = compactedItem[idKey];
                  delete compactedItem[idKey];
                } else if (container.includes("@type")) {
                  const typeKey = api.compactIri({
                    activeCtx,
                    iri: "@type",
                    relativeTo: { vocab: true }
                  });
                  let types2;
                  [key, ...types2] = _asArray(compactedItem[typeKey] || []);
                  switch (types2.length) {
                    case 0:
                      delete compactedItem[typeKey];
                      break;
                    case 1:
                      compactedItem[typeKey] = types2[0];
                      break;
                    default:
                      compactedItem[typeKey] = types2;
                      break;
                  }
                  if (Object.keys(compactedItem).length === 1 && "@id" in expandedItem) {
                    compactedItem = await api.compact({
                      activeCtx,
                      activeProperty: itemActiveProperty,
                      element: { "@id": expandedItem["@id"] },
                      options
                    });
                  }
                }
                if (!key) {
                  key = api.compactIri({
                    activeCtx,
                    iri: "@none",
                    relativeTo: { vocab: true }
                  });
                }
                _addValue(
                  mapObject,
                  key,
                  compactedItem,
                  {
                    propertyIsArray: container.includes("@set")
                  }
                );
              } else {
                const isArray = !options.compactArrays || container.includes("@set") || container.includes("@list") || _isArray(compactedItem) && compactedItem.length === 0 || expandedProperty === "@list" || expandedProperty === "@graph";
                _addValue(
                  nestResult,
                  itemActiveProperty,
                  compactedItem,
                  { propertyIsArray: isArray }
                );
              }
            }
          }
          return rval;
        }
        return element;
      };
      api.compactIri = ({
        activeCtx,
        iri,
        value = null,
        relativeTo = { vocab: false },
        reverse = false,
        base = null
      }) => {
        if (iri === null) {
          return iri;
        }
        if (activeCtx.isPropertyTermScoped && activeCtx.previousContext) {
          activeCtx = activeCtx.previousContext;
        }
        const inverseCtx = activeCtx.getInverse();
        if (_isKeyword(iri) && iri in inverseCtx && "@none" in inverseCtx[iri] && "@type" in inverseCtx[iri]["@none"] && "@none" in inverseCtx[iri]["@none"]["@type"]) {
          return inverseCtx[iri]["@none"]["@type"]["@none"];
        }
        if (relativeTo.vocab && iri in inverseCtx) {
          const defaultLanguage = activeCtx["@language"] || "@none";
          const containers = [];
          if (_isObject(value) && "@index" in value && !("@graph" in value)) {
            containers.push("@index", "@index@set");
          }
          if (_isObject(value) && "@preserve" in value) {
            value = value["@preserve"][0];
          }
          if (_isGraph(value)) {
            if ("@index" in value) {
              containers.push(
                "@graph@index",
                "@graph@index@set",
                "@index",
                "@index@set"
              );
            }
            if ("@id" in value) {
              containers.push(
                "@graph@id",
                "@graph@id@set"
              );
            }
            containers.push("@graph", "@graph@set", "@set");
            if (!("@index" in value)) {
              containers.push(
                "@graph@index",
                "@graph@index@set",
                "@index",
                "@index@set"
              );
            }
            if (!("@id" in value)) {
              containers.push("@graph@id", "@graph@id@set");
            }
          } else if (_isObject(value) && !_isValue(value)) {
            containers.push("@id", "@id@set", "@type", "@set@type");
          }
          let typeOrLanguage = "@language";
          let typeOrLanguageValue = "@null";
          if (reverse) {
            typeOrLanguage = "@type";
            typeOrLanguageValue = "@reverse";
            containers.push("@set");
          } else if (_isList(value)) {
            if (!("@index" in value)) {
              containers.push("@list");
            }
            const list = value["@list"];
            if (list.length === 0) {
              typeOrLanguage = "@any";
              typeOrLanguageValue = "@none";
            } else {
              let commonLanguage = list.length === 0 ? defaultLanguage : null;
              let commonType = null;
              for (let i = 0; i < list.length; ++i) {
                const item = list[i];
                let itemLanguage = "@none";
                let itemType = "@none";
                if (_isValue(item)) {
                  if ("@direction" in item) {
                    const lang = (item["@language"] || "").toLowerCase();
                    const dir = item["@direction"];
                    itemLanguage = `${lang}_${dir}`;
                  } else if ("@language" in item) {
                    itemLanguage = item["@language"].toLowerCase();
                  } else if ("@type" in item) {
                    itemType = item["@type"];
                  } else {
                    itemLanguage = "@null";
                  }
                } else {
                  itemType = "@id";
                }
                if (commonLanguage === null) {
                  commonLanguage = itemLanguage;
                } else if (itemLanguage !== commonLanguage && _isValue(item)) {
                  commonLanguage = "@none";
                }
                if (commonType === null) {
                  commonType = itemType;
                } else if (itemType !== commonType) {
                  commonType = "@none";
                }
                if (commonLanguage === "@none" && commonType === "@none") {
                  break;
                }
              }
              commonLanguage = commonLanguage || "@none";
              commonType = commonType || "@none";
              if (commonType !== "@none") {
                typeOrLanguage = "@type";
                typeOrLanguageValue = commonType;
              } else {
                typeOrLanguageValue = commonLanguage;
              }
            }
          } else {
            if (_isValue(value)) {
              if ("@language" in value && !("@index" in value)) {
                containers.push("@language", "@language@set");
                typeOrLanguageValue = value["@language"];
                const dir = value["@direction"];
                if (dir) {
                  typeOrLanguageValue = `${typeOrLanguageValue}_${dir}`;
                }
              } else if ("@direction" in value && !("@index" in value)) {
                typeOrLanguageValue = `_${value["@direction"]}`;
              } else if ("@type" in value) {
                typeOrLanguage = "@type";
                typeOrLanguageValue = value["@type"];
              }
            } else {
              typeOrLanguage = "@type";
              typeOrLanguageValue = "@id";
            }
            containers.push("@set");
          }
          containers.push("@none");
          if (_isObject(value) && !("@index" in value)) {
            containers.push("@index", "@index@set");
          }
          if (_isValue(value) && Object.keys(value).length === 1) {
            containers.push("@language", "@language@set");
          }
          const term = _selectTerm(
            activeCtx,
            iri,
            value,
            containers,
            typeOrLanguage,
            typeOrLanguageValue
          );
          if (term !== null) {
            return term;
          }
        }
        if (relativeTo.vocab) {
          if ("@vocab" in activeCtx) {
            const vocab = activeCtx["@vocab"];
            if (iri.indexOf(vocab) === 0 && iri !== vocab) {
              const suffix = iri.substr(vocab.length);
              if (!activeCtx.mappings.has(suffix)) {
                return suffix;
              }
            }
          }
        }
        let choice = null;
        const partialMatches = [];
        let iriMap = activeCtx.fastCurieMap;
        const maxPartialLength = iri.length - 1;
        for (let i = 0; i < maxPartialLength && iri[i] in iriMap; ++i) {
          iriMap = iriMap[iri[i]];
          if ("" in iriMap) {
            partialMatches.push(iriMap[""][0]);
          }
        }
        for (let i = partialMatches.length - 1; i >= 0; --i) {
          const entry = partialMatches[i];
          const terms = entry.terms;
          for (const term of terms) {
            const curie = term + ":" + iri.substr(entry.iri.length);
            const isUsableCurie = activeCtx.mappings.get(term)._prefix && (!activeCtx.mappings.has(curie) || value === null && activeCtx.mappings.get(curie)["@id"] === iri);
            if (isUsableCurie && (choice === null || _compareShortestLeast(curie, choice) < 0)) {
              choice = curie;
            }
          }
        }
        if (choice !== null) {
          return choice;
        }
        for (const [term, td] of activeCtx.mappings) {
          if (td && td._prefix && iri.startsWith(term + ":")) {
            throw new JsonLdError(
              `Absolute IRI "${iri}" confused with prefix "${term}".`,
              "jsonld.SyntaxError",
              { code: "IRI confused with prefix", context: activeCtx }
            );
          }
        }
        if (!relativeTo.vocab) {
          if ("@base" in activeCtx) {
            if (!activeCtx["@base"]) {
              return iri;
            } else {
              const _iri = _removeBase(_prependBase(base, activeCtx["@base"]), iri);
              return REGEX_KEYWORD.test(_iri) ? `./${_iri}` : _iri;
            }
          } else {
            return _removeBase(base, iri);
          }
        }
        return iri;
      };
      api.compactValue = ({ activeCtx, activeProperty, value, options }) => {
        if (_isValue(value)) {
          const type2 = _getContextValue(activeCtx, activeProperty, "@type");
          const language = _getContextValue(activeCtx, activeProperty, "@language");
          const direction = _getContextValue(activeCtx, activeProperty, "@direction");
          const container = _getContextValue(activeCtx, activeProperty, "@container") || [];
          const preserveIndex = "@index" in value && !container.includes("@index");
          if (!preserveIndex && type2 !== "@none") {
            if (value["@type"] === type2) {
              return value["@value"];
            }
            if ("@language" in value && value["@language"] === language && "@direction" in value && value["@direction"] === direction) {
              return value["@value"];
            }
            if ("@language" in value && value["@language"] === language) {
              return value["@value"];
            }
            if ("@direction" in value && value["@direction"] === direction) {
              return value["@value"];
            }
          }
          const keyCount = Object.keys(value).length;
          const isValueOnlyKey = keyCount === 1 || keyCount === 2 && "@index" in value && !preserveIndex;
          const hasDefaultLanguage = "@language" in activeCtx;
          const isValueString = _isString(value["@value"]);
          const hasNullMapping = activeCtx.mappings.has(activeProperty) && activeCtx.mappings.get(activeProperty)["@language"] === null;
          if (isValueOnlyKey && type2 !== "@none" && (!hasDefaultLanguage || !isValueString || hasNullMapping)) {
            return value["@value"];
          }
          const rval = {};
          if (preserveIndex) {
            rval[api.compactIri({
              activeCtx,
              iri: "@index",
              relativeTo: { vocab: true }
            })] = value["@index"];
          }
          if ("@type" in value) {
            rval[api.compactIri({
              activeCtx,
              iri: "@type",
              relativeTo: { vocab: true }
            })] = api.compactIri(
              { activeCtx, iri: value["@type"], relativeTo: { vocab: true } }
            );
          } else if ("@language" in value) {
            rval[api.compactIri({
              activeCtx,
              iri: "@language",
              relativeTo: { vocab: true }
            })] = value["@language"];
          }
          if ("@direction" in value) {
            rval[api.compactIri({
              activeCtx,
              iri: "@direction",
              relativeTo: { vocab: true }
            })] = value["@direction"];
          }
          rval[api.compactIri({
            activeCtx,
            iri: "@value",
            relativeTo: { vocab: true }
          })] = value["@value"];
          return rval;
        }
        const expandedProperty = _expandIri(
          activeCtx,
          activeProperty,
          { vocab: true },
          options
        );
        const type = _getContextValue(activeCtx, activeProperty, "@type");
        const compacted = api.compactIri({
          activeCtx,
          iri: value["@id"],
          relativeTo: { vocab: type === "@vocab" },
          base: options.base
        });
        if (type === "@id" || type === "@vocab" || expandedProperty === "@graph") {
          return compacted;
        }
        return {
          [api.compactIri({
            activeCtx,
            iri: "@id",
            relativeTo: { vocab: true }
          })]: compacted
        };
      };
      function _selectTerm(activeCtx, iri, value, containers, typeOrLanguage, typeOrLanguageValue) {
        if (typeOrLanguageValue === null) {
          typeOrLanguageValue = "@null";
        }
        const prefs = [];
        if ((typeOrLanguageValue === "@id" || typeOrLanguageValue === "@reverse") && _isObject(value) && "@id" in value) {
          if (typeOrLanguageValue === "@reverse") {
            prefs.push("@reverse");
          }
          const term = api.compactIri(
            { activeCtx, iri: value["@id"], relativeTo: { vocab: true } }
          );
          if (activeCtx.mappings.has(term) && activeCtx.mappings.get(term) && activeCtx.mappings.get(term)["@id"] === value["@id"]) {
            prefs.push.apply(prefs, ["@vocab", "@id"]);
          } else {
            prefs.push.apply(prefs, ["@id", "@vocab"]);
          }
        } else {
          prefs.push(typeOrLanguageValue);
          const langDir = prefs.find((el) => el.includes("_"));
          if (langDir) {
            prefs.push(langDir.replace(/^[^_]+_/, "_"));
          }
        }
        prefs.push("@none");
        const containerMap = activeCtx.inverse[iri];
        for (const container of containers) {
          if (!(container in containerMap)) {
            continue;
          }
          const typeOrLanguageValueMap = containerMap[container][typeOrLanguage];
          for (const pref of prefs) {
            if (!(pref in typeOrLanguageValueMap)) {
              continue;
            }
            return typeOrLanguageValueMap[pref];
          }
        }
        return null;
      }
      function _checkNestProperty(activeCtx, nestProperty, options) {
        if (_expandIri(activeCtx, nestProperty, { vocab: true }, options) !== "@nest") {
          throw new JsonLdError(
            "JSON-LD compact error; nested property must have an @nest value resolving to @nest.",
            "jsonld.SyntaxError",
            { code: "invalid @nest value" }
          );
        }
      }
    }
  });

  // node_modules/jsonld/lib/JsonLdProcessor.js
  var require_JsonLdProcessor = __commonJS({
    "node_modules/jsonld/lib/JsonLdProcessor.js"(exports3, module) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      module.exports = (jsonld2) => {
        class JsonLdProcessor {
          toString() {
            return "[object JsonLdProcessor]";
          }
        }
        Object.defineProperty(JsonLdProcessor, "prototype", {
          writable: false,
          enumerable: false
        });
        Object.defineProperty(JsonLdProcessor.prototype, "constructor", {
          writable: true,
          enumerable: false,
          configurable: true,
          value: JsonLdProcessor
        });
        JsonLdProcessor.compact = function(input, ctx) {
          if (arguments.length < 2) {
            return Promise.reject(
              new TypeError("Could not compact, too few arguments.")
            );
          }
          return jsonld2.compact(input, ctx);
        };
        JsonLdProcessor.expand = function(input) {
          if (arguments.length < 1) {
            return Promise.reject(
              new TypeError("Could not expand, too few arguments.")
            );
          }
          return jsonld2.expand(input);
        };
        JsonLdProcessor.flatten = function(input) {
          if (arguments.length < 1) {
            return Promise.reject(
              new TypeError("Could not flatten, too few arguments.")
            );
          }
          return jsonld2.flatten(input);
        };
        return JsonLdProcessor;
      };
    }
  });

  // node_modules/jsonld/lib/jsonld.js
  var require_jsonld = __commonJS({
    "node_modules/jsonld/lib/jsonld.js"(exports3, module) {
      init_dirname();
      init_buffer2();
      init_process2();
      var canonize = require_rdf_canonize();
      var platform2 = require_platform_browser();
      var util = require_util();
      var ContextResolver = require_ContextResolver();
      var IdentifierIssuer = util.IdentifierIssuer;
      var JsonLdError = require_JsonLdError();
      var LRU = require_lru_cache();
      var NQuads = require_NQuads2();
      var { expand: _expand } = require_expand();
      var { flatten: _flatten } = require_flatten();
      var { fromRDF: _fromRDF } = require_fromRdf();
      var { toRDF: _toRDF } = require_toRdf();
      var {
        frameMergedOrDefault: _frameMergedOrDefault,
        cleanupNull: _cleanupNull
      } = require_frame();
      var {
        isArray: _isArray,
        isObject: _isObject,
        isString: _isString
      } = require_types();
      var {
        isSubjectReference: _isSubjectReference
      } = require_graphTypes();
      var {
        expandIri: _expandIri,
        getInitialContext: _getInitialContext,
        process: _processContext,
        processingMode: _processingMode
      } = require_context();
      var {
        compact: _compact,
        compactIri: _compactIri
      } = require_compact();
      var {
        createNodeMap: _createNodeMap,
        createMergedNodeMap: _createMergedNodeMap,
        mergeNodeMaps: _mergeNodeMaps
      } = require_nodeMap();
      var {
        logEventHandler: _logEventHandler,
        logWarningEventHandler: _logWarningEventHandler,
        safeEventHandler: _safeEventHandler,
        setDefaultEventHandler: _setDefaultEventHandler,
        setupEventHandler: _setupEventHandler,
        strictEventHandler: _strictEventHandler,
        unhandledEventHandler: _unhandledEventHandler
      } = require_events();
      var wrapper = function(jsonld2) {
        const _rdfParsers = {};
        const RESOLVED_CONTEXT_CACHE_MAX_SIZE = 100;
        const _resolvedContextCache = new LRU({ max: RESOLVED_CONTEXT_CACHE_MAX_SIZE });
        jsonld2.compact = async function(input, ctx, options) {
          if (arguments.length < 2) {
            throw new TypeError("Could not compact, too few arguments.");
          }
          if (ctx === null) {
            throw new JsonLdError(
              "The compaction context must not be null.",
              "jsonld.CompactError",
              { code: "invalid local context" }
            );
          }
          if (input === null) {
            return null;
          }
          options = _setDefaults(options, {
            base: _isString(input) ? input : "",
            compactArrays: true,
            compactToRelative: true,
            graph: false,
            skipExpansion: false,
            link: false,
            issuer: new IdentifierIssuer("_:b"),
            contextResolver: new ContextResolver(
              { sharedCache: _resolvedContextCache }
            )
          });
          if (options.link) {
            options.skipExpansion = true;
          }
          if (!options.compactToRelative) {
            delete options.base;
          }
          let expanded;
          if (options.skipExpansion) {
            expanded = input;
          } else {
            expanded = await jsonld2.expand(input, options);
          }
          const activeCtx = await jsonld2.processContext(
            _getInitialContext(options),
            ctx,
            options
          );
          let compacted = await _compact({
            activeCtx,
            element: expanded,
            options
          });
          if (options.compactArrays && !options.graph && _isArray(compacted)) {
            if (compacted.length === 1) {
              compacted = compacted[0];
            } else if (compacted.length === 0) {
              compacted = {};
            }
          } else if (options.graph && _isObject(compacted)) {
            compacted = [compacted];
          }
          if (_isObject(ctx) && "@context" in ctx) {
            ctx = ctx["@context"];
          }
          ctx = util.clone(ctx);
          if (!_isArray(ctx)) {
            ctx = [ctx];
          }
          const tmp = ctx;
          ctx = [];
          for (let i = 0; i < tmp.length; ++i) {
            if (!_isObject(tmp[i]) || Object.keys(tmp[i]).length > 0) {
              ctx.push(tmp[i]);
            }
          }
          const hasContext = ctx.length > 0;
          if (ctx.length === 1) {
            ctx = ctx[0];
          }
          if (_isArray(compacted)) {
            const graphAlias = _compactIri({
              activeCtx,
              iri: "@graph",
              relativeTo: { vocab: true }
            });
            const graph = compacted;
            compacted = {};
            if (hasContext) {
              compacted["@context"] = ctx;
            }
            compacted[graphAlias] = graph;
          } else if (_isObject(compacted) && hasContext) {
            const graph = compacted;
            compacted = { "@context": ctx };
            for (const key in graph) {
              compacted[key] = graph[key];
            }
          }
          return compacted;
        };
        jsonld2.expand = async function(input, options) {
          if (arguments.length < 1) {
            throw new TypeError("Could not expand, too few arguments.");
          }
          options = _setDefaults(options, {
            keepFreeFloatingNodes: false,
            contextResolver: new ContextResolver(
              { sharedCache: _resolvedContextCache }
            )
          });
          const toResolve = {};
          const contextsToProcess = [];
          if ("expandContext" in options) {
            const expandContext = util.clone(options.expandContext);
            if (_isObject(expandContext) && "@context" in expandContext) {
              toResolve.expandContext = expandContext;
            } else {
              toResolve.expandContext = { "@context": expandContext };
            }
            contextsToProcess.push(toResolve.expandContext);
          }
          let defaultBase;
          if (!_isString(input)) {
            toResolve.input = util.clone(input);
          } else {
            const remoteDoc = await jsonld2.get(input, options);
            defaultBase = remoteDoc.documentUrl;
            toResolve.input = remoteDoc.document;
            if (remoteDoc.contextUrl) {
              toResolve.remoteContext = { "@context": remoteDoc.contextUrl };
              contextsToProcess.push(toResolve.remoteContext);
            }
          }
          if (!("base" in options)) {
            options.base = defaultBase || "";
          }
          let activeCtx = _getInitialContext(options);
          for (const localCtx of contextsToProcess) {
            activeCtx = await _processContext({ activeCtx, localCtx, options });
          }
          let expanded = await _expand({
            activeCtx,
            element: toResolve.input,
            options
          });
          if (_isObject(expanded) && "@graph" in expanded && Object.keys(expanded).length === 1) {
            expanded = expanded["@graph"];
          } else if (expanded === null) {
            expanded = [];
          }
          if (!_isArray(expanded)) {
            expanded = [expanded];
          }
          return expanded;
        };
        jsonld2.flatten = async function(input, ctx, options) {
          if (arguments.length < 1) {
            return new TypeError("Could not flatten, too few arguments.");
          }
          if (typeof ctx === "function") {
            ctx = null;
          } else {
            ctx = ctx || null;
          }
          options = _setDefaults(options, {
            base: _isString(input) ? input : "",
            contextResolver: new ContextResolver(
              { sharedCache: _resolvedContextCache }
            )
          });
          const expanded = await jsonld2.expand(input, options);
          const flattened = _flatten(expanded);
          if (ctx === null) {
            return flattened;
          }
          options.graph = true;
          options.skipExpansion = true;
          const compacted = await jsonld2.compact(flattened, ctx, options);
          return compacted;
        };
        jsonld2.frame = async function(input, frame2, options) {
          if (arguments.length < 2) {
            throw new TypeError("Could not frame, too few arguments.");
          }
          options = _setDefaults(options, {
            base: _isString(input) ? input : "",
            embed: "@once",
            explicit: false,
            requireAll: false,
            omitDefault: false,
            bnodesToClear: [],
            contextResolver: new ContextResolver(
              { sharedCache: _resolvedContextCache }
            )
          });
          if (_isString(frame2)) {
            const remoteDoc = await jsonld2.get(frame2, options);
            frame2 = remoteDoc.document;
            if (remoteDoc.contextUrl) {
              let ctx = frame2["@context"];
              if (!ctx) {
                ctx = remoteDoc.contextUrl;
              } else if (_isArray(ctx)) {
                ctx.push(remoteDoc.contextUrl);
              } else {
                ctx = [ctx, remoteDoc.contextUrl];
              }
              frame2["@context"] = ctx;
            }
          }
          const frameContext = frame2 ? frame2["@context"] || {} : {};
          const activeCtx = await jsonld2.processContext(
            _getInitialContext(options),
            frameContext,
            options
          );
          if (!options.hasOwnProperty("omitGraph")) {
            options.omitGraph = _processingMode(activeCtx, 1.1);
          }
          if (!options.hasOwnProperty("pruneBlankNodeIdentifiers")) {
            options.pruneBlankNodeIdentifiers = _processingMode(activeCtx, 1.1);
          }
          const expanded = await jsonld2.expand(input, options);
          const opts = { ...options };
          opts.isFrame = true;
          opts.keepFreeFloatingNodes = true;
          const expandedFrame = await jsonld2.expand(frame2, opts);
          const frameKeys = Object.keys(frame2).map((key) => _expandIri(activeCtx, key, { vocab: true }));
          opts.merged = !frameKeys.includes("@graph");
          opts.is11 = _processingMode(activeCtx, 1.1);
          const framed = _frameMergedOrDefault(expanded, expandedFrame, opts);
          opts.graph = !options.omitGraph;
          opts.skipExpansion = true;
          opts.link = {};
          opts.framing = true;
          let compacted = await jsonld2.compact(framed, frameContext, opts);
          opts.link = {};
          compacted = _cleanupNull(compacted, opts);
          return compacted;
        };
        jsonld2.link = async function(input, ctx, options) {
          const frame2 = {};
          if (ctx) {
            frame2["@context"] = ctx;
          }
          frame2["@embed"] = "@link";
          return jsonld2.frame(input, frame2, options);
        };
        jsonld2.normalize = jsonld2.canonize = async function(input, options) {
          if (arguments.length < 1) {
            throw new TypeError("Could not canonize, too few arguments.");
          }
          options = _setDefaults(options, {
            base: _isString(input) ? input : null,
            algorithm: "URDNA2015",
            skipExpansion: false,
            safe: true,
            contextResolver: new ContextResolver(
              { sharedCache: _resolvedContextCache }
            )
          });
          if ("inputFormat" in options) {
            if (options.inputFormat !== "application/n-quads" && options.inputFormat !== "application/nquads") {
              throw new JsonLdError(
                "Unknown canonicalization input format.",
                "jsonld.CanonizeError"
              );
            }
            const parsedInput = NQuads.parse(input);
            return canonize.canonize(parsedInput, options);
          }
          const opts = { ...options };
          delete opts.format;
          opts.produceGeneralizedRdf = false;
          const dataset = await jsonld2.toRDF(input, opts);
          return canonize.canonize(dataset, options);
        };
        jsonld2.fromRDF = async function(dataset, options) {
          if (arguments.length < 1) {
            throw new TypeError("Could not convert from RDF, too few arguments.");
          }
          options = _setDefaults(options, {
            format: _isString(dataset) ? "application/n-quads" : void 0
          });
          const { format } = options;
          let { rdfParser } = options;
          if (format) {
            rdfParser = rdfParser || _rdfParsers[format];
            if (!rdfParser) {
              throw new JsonLdError(
                "Unknown input format.",
                "jsonld.UnknownFormat",
                { format }
              );
            }
          } else {
            rdfParser = () => dataset;
          }
          const parsedDataset = await rdfParser(dataset);
          return _fromRDF(parsedDataset, options);
        };
        jsonld2.toRDF = async function(input, options) {
          if (arguments.length < 1) {
            throw new TypeError("Could not convert to RDF, too few arguments.");
          }
          options = _setDefaults(options, {
            base: _isString(input) ? input : "",
            skipExpansion: false,
            contextResolver: new ContextResolver(
              { sharedCache: _resolvedContextCache }
            )
          });
          let expanded;
          if (options.skipExpansion) {
            expanded = input;
          } else {
            expanded = await jsonld2.expand(input, options);
          }
          const dataset = _toRDF(expanded, options);
          if (options.format) {
            if (options.format === "application/n-quads" || options.format === "application/nquads") {
              return NQuads.serialize(dataset);
            }
            throw new JsonLdError(
              "Unknown output format.",
              "jsonld.UnknownFormat",
              { format: options.format }
            );
          }
          return dataset;
        };
        jsonld2.createNodeMap = async function(input, options) {
          if (arguments.length < 1) {
            throw new TypeError("Could not create node map, too few arguments.");
          }
          options = _setDefaults(options, {
            base: _isString(input) ? input : "",
            contextResolver: new ContextResolver(
              { sharedCache: _resolvedContextCache }
            )
          });
          const expanded = await jsonld2.expand(input, options);
          return _createMergedNodeMap(expanded, options);
        };
        jsonld2.merge = async function(docs, ctx, options) {
          if (arguments.length < 1) {
            throw new TypeError("Could not merge, too few arguments.");
          }
          if (!_isArray(docs)) {
            throw new TypeError('Could not merge, "docs" must be an array.');
          }
          if (typeof ctx === "function") {
            ctx = null;
          } else {
            ctx = ctx || null;
          }
          options = _setDefaults(options, {
            contextResolver: new ContextResolver(
              { sharedCache: _resolvedContextCache }
            )
          });
          const expanded = await Promise.all(docs.map((doc) => {
            const opts = { ...options };
            return jsonld2.expand(doc, opts);
          }));
          let mergeNodes = true;
          if ("mergeNodes" in options) {
            mergeNodes = options.mergeNodes;
          }
          const issuer = options.issuer || new IdentifierIssuer("_:b");
          const graphs = { "@default": {} };
          for (let i = 0; i < expanded.length; ++i) {
            const doc = util.relabelBlankNodes(expanded[i], {
              issuer: new IdentifierIssuer("_:b" + i + "-")
            });
            const _graphs = mergeNodes || i === 0 ? graphs : { "@default": {} };
            _createNodeMap(doc, _graphs, "@default", issuer);
            if (_graphs !== graphs) {
              for (const graphName in _graphs) {
                const _nodeMap = _graphs[graphName];
                if (!(graphName in graphs)) {
                  graphs[graphName] = _nodeMap;
                  continue;
                }
                const nodeMap = graphs[graphName];
                for (const key in _nodeMap) {
                  if (!(key in nodeMap)) {
                    nodeMap[key] = _nodeMap[key];
                  }
                }
              }
            }
          }
          const defaultGraph = _mergeNodeMaps(graphs);
          const flattened = [];
          const keys = Object.keys(defaultGraph).sort();
          for (let ki = 0; ki < keys.length; ++ki) {
            const node = defaultGraph[keys[ki]];
            if (!_isSubjectReference(node)) {
              flattened.push(node);
            }
          }
          if (ctx === null) {
            return flattened;
          }
          options.graph = true;
          options.skipExpansion = true;
          const compacted = await jsonld2.compact(flattened, ctx, options);
          return compacted;
        };
        Object.defineProperty(jsonld2, "documentLoader", {
          get: () => jsonld2._documentLoader,
          set: (v) => jsonld2._documentLoader = v
        });
        jsonld2.documentLoader = async (url) => {
          throw new JsonLdError(
            "Could not retrieve a JSON-LD document from the URL. URL dereferencing not implemented.",
            "jsonld.LoadDocumentError",
            { code: "loading document failed", url }
          );
        };
        jsonld2.get = async function(url, options) {
          let load;
          if (typeof options.documentLoader === "function") {
            load = options.documentLoader;
          } else {
            load = jsonld2.documentLoader;
          }
          const remoteDoc = await load(url);
          try {
            if (!remoteDoc.document) {
              throw new JsonLdError(
                "No remote document found at the given URL.",
                "jsonld.NullRemoteDocument"
              );
            }
            if (_isString(remoteDoc.document)) {
              remoteDoc.document = JSON.parse(remoteDoc.document);
            }
          } catch (e2) {
            throw new JsonLdError(
              "Could not retrieve a JSON-LD document from the URL.",
              "jsonld.LoadDocumentError",
              {
                code: "loading document failed",
                cause: e2,
                remoteDoc
              }
            );
          }
          return remoteDoc;
        };
        jsonld2.processContext = async function(activeCtx, localCtx, options) {
          options = _setDefaults(options, {
            base: "",
            contextResolver: new ContextResolver(
              { sharedCache: _resolvedContextCache }
            )
          });
          if (localCtx === null) {
            return _getInitialContext(options);
          }
          localCtx = util.clone(localCtx);
          if (!(_isObject(localCtx) && "@context" in localCtx)) {
            localCtx = { "@context": localCtx };
          }
          return _processContext({ activeCtx, localCtx, options });
        };
        jsonld2.getContextValue = require_context().getContextValue;
        jsonld2.documentLoaders = {};
        jsonld2.useDocumentLoader = function(type) {
          if (!(type in jsonld2.documentLoaders)) {
            throw new JsonLdError(
              'Unknown document loader type: "' + type + '"',
              "jsonld.UnknownDocumentLoader",
              { type }
            );
          }
          jsonld2.documentLoader = jsonld2.documentLoaders[type].apply(
            jsonld2,
            Array.prototype.slice.call(arguments, 1)
          );
        };
        jsonld2.registerRDFParser = function(contentType, parser) {
          _rdfParsers[contentType] = parser;
        };
        jsonld2.unregisterRDFParser = function(contentType) {
          delete _rdfParsers[contentType];
        };
        jsonld2.registerRDFParser("application/n-quads", NQuads.parse);
        jsonld2.registerRDFParser("application/nquads", NQuads.parse);
        jsonld2.url = require_url();
        jsonld2.logEventHandler = _logEventHandler;
        jsonld2.logWarningEventHandler = _logWarningEventHandler;
        jsonld2.safeEventHandler = _safeEventHandler;
        jsonld2.setDefaultEventHandler = _setDefaultEventHandler;
        jsonld2.strictEventHandler = _strictEventHandler;
        jsonld2.unhandledEventHandler = _unhandledEventHandler;
        jsonld2.util = util;
        Object.assign(jsonld2, util);
        jsonld2.promises = jsonld2;
        jsonld2.RequestQueue = require_RequestQueue();
        jsonld2.JsonLdProcessor = require_JsonLdProcessor()(jsonld2);
        platform2.setupGlobals(jsonld2);
        platform2.setupDocumentLoaders(jsonld2);
        function _setDefaults(options, {
          documentLoader = jsonld2.documentLoader,
          ...defaults
        }) {
          if (options && "compactionMap" in options) {
            throw new JsonLdError(
              '"compactionMap" not supported.',
              "jsonld.OptionsError"
            );
          }
          if (options && "expansionMap" in options) {
            throw new JsonLdError(
              '"expansionMap" not supported.',
              "jsonld.OptionsError"
            );
          }
          return Object.assign(
            {},
            { documentLoader },
            defaults,
            options,
            { eventHandler: _setupEventHandler({ options }) }
          );
        }
        return jsonld2;
      };
      var factory = function() {
        return wrapper(function() {
          return factory();
        });
      };
      wrapper(factory);
      module.exports = factory;
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

  // node_modules/@datavillage-me/api/dist/esm/index.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@datavillage-me/http-util/dist/index.mjs
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/jwt-decode/build/jwt-decode.esm.js
  init_dirname();
  init_buffer2();
  init_process2();
  function e(e2) {
    this.message = e2;
  }
  e.prototype = new Error(), e.prototype.name = "InvalidCharacterError";
  var r = "undefined" != typeof window && window.atob && window.atob.bind(window) || function(r2) {
    var t = String(r2).replace(/=+$/, "");
    if (t.length % 4 == 1) throw new e("'atob' failed: The string to be decoded is not correctly encoded.");
    for (var n2, o, a = 0, i = 0, c = ""; o = t.charAt(i++); ~o && (n2 = a % 4 ? 64 * n2 + o : o, a++ % 4) ? c += String.fromCharCode(255 & n2 >> (-2 * a & 6)) : 0) o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);
    return c;
  };
  function n(e2) {
    this.message = e2;
  }
  n.prototype = new Error(), n.prototype.name = "InvalidTokenError";

  // node_modules/@datavillage-me/http-util/dist/index.mjs
  var import_cross_fetch = __toESM(require_browser_ponyfill(), 1);

  // node_modules/@datavillage-me/util/dist/index.mjs
  var dist_exports = {};
  __export(dist_exports, {
    Decorator: () => Decorator,
    UndefinedError: () => UndefinedError,
    ValidationError: () => ValidationError,
    WrappedError: () => WrappedError,
    _decryptStringWithRsaPrivateKey: () => _decryptStringWithRsaPrivateKey,
    _decryptWithSymetricKey: () => _decryptWithSymetricKey,
    _encryptStringWithRsaPublicKey: () => _encryptStringWithRsaPublicKey,
    _encryptWithSymetricKey: () => _encryptWithSymetricKey,
    assert: () => assert2,
    assertInEnum: () => assertInEnum,
    assertObject: () => assertObject,
    catchUndefined: () => catchUndefined,
    formatMillis: () => formatMillis,
    generateKeyPair: () => generateKeyPair,
    sanitizePath: () => sanitizePath,
    simplifyPath: () => simplifyPath,
    throwOnUndefined: () => throwOnUndefined,
    tryConst: () => tryConst
  });
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/esbuild-plugin-polyfill-node/polyfills/empty.js
  init_dirname();
  init_buffer2();
  init_process2();
  var empty_default = {};

  // node_modules/@datavillage-me/util/dist/index.mjs
  var WrappedError = class extends Error {
    constructor(message, cause) {
      super(message || "Undefined");
      this.cause = cause;
    }
    getCause() {
      return this.cause;
    }
  };
  var UndefinedError = class extends Error {
    constructor(message) {
      super(message || "Undefined");
    }
  };
  var ValidationError = class extends WrappedError {
    constructor(message, cause) {
      super(message, cause);
    }
  };
  function throwOnUndefined(msg) {
    return (value) => {
      if (value == void 0 || value == null)
        throw new UndefinedError(msg);
      return value;
    };
  }
  function catchUndefined(error2) {
    if (error2 instanceof UndefinedError) {
      return void 0;
    } else {
      throw error2;
    }
  }
  function assert2(val, msg) {
    if (!val)
      throw new ValidationError(msg || "Assertion failed : " + val);
  }
  function assertObject(obj, messagePrefix = "") {
    for (const key in obj) {
      if (obj.hasOwnProperty(key))
        assert2(!(obj[key] == void 0 || obj[key] == null || obj[key] == ""), `${messagePrefix}Missing property [${key}]`);
    }
  }
  function tryConst(valueFn, catchFn) {
    try {
      return valueFn();
    } catch (e2) {
      if (catchFn)
        return catchFn(e2);
      else
        throw e2;
    }
  }
  function formatMillis(millis) {
    return (millis / 1e3).toFixed(1).padStart(5, " ");
  }
  function simplifyPath(path) {
    const isAbsolute = path.startsWith("/");
    const hasTrailingSlash = path.length > 1 && path.endsWith("/");
    var arr = path.split("/");
    var stack = [];
    var len = arr.length;
    var item = "";
    for (var i = 0; i < len; i++) {
      item = arr[i];
      if (item === "" || item === ".")
        continue;
      if (item === "..") {
        stack.pop();
      } else {
        stack.push(item);
      }
    }
    return (isAbsolute ? "/" : "") + stack.join("/") + (hasTrailingSlash ? "/" : "");
  }
  function sanitizePath(folderPath, TRAIL, LEAD = "KEEP") {
    const isAbsolute = folderPath.startsWith("/");
    const hasTrailingSlash = folderPath.length > 1 && folderPath.endsWith("/");
    while (folderPath.startsWith("/"))
      folderPath = folderPath.substring(1);
    while (folderPath.endsWith("/"))
      folderPath = folderPath.substring(0, folderPath.length - 1);
    const addLeadingSlash = LEAD == "ABSOLUTE" || LEAD == "KEEP" && isAbsolute;
    const addTrailingSlash = (TRAIL == "SLASH" || TRAIL == "KEEP" && hasTrailingSlash) && folderPath.length > 0;
    return (addLeadingSlash ? "/" : "") + folderPath + (addTrailingSlash ? "/" : "");
  }
  function assertInEnum(val, en, msg) {
    assert2(Object.values(en).includes(val), msg || `Invalid type : ${val}`);
  }
  function Decorator(...props) {
    const ret = class {
      constructor(base) {
        this.base = base;
      }
    };
    props.forEach((p) => {
      ret.prototype[p] = function(...args) {
        return this.base[p](...args);
      };
    });
    return ret;
  }
  function _encryptWithSymetricKey(toEncrypt, symetricKey) {
    const cipher = empty_default.createCipher("aes-256-ctr", symetricKey);
    const crypted = cipher.update(toEncrypt, "utf8", "hex") + cipher.final("hex");
    return crypted;
  }
  function _decryptWithSymetricKey(toDecrypt, symetricKey) {
    const decipher = empty_default.createDecipher("aes-256-ctr", symetricKey);
    const dec = decipher.update(toDecrypt, "hex", "utf8") + decipher.final("utf8");
    return dec;
  }
  function _encryptStringWithRsaPublicKey(toEncrypt, publicKey) {
    const buffer = Buffer2.from(toEncrypt);
    const encrypted = empty_default.publicEncrypt({
      key: publicKey,
      padding: empty_default.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: "sha256"
    }, buffer);
    return encrypted.toString("base64");
  }
  function _decryptStringWithRsaPrivateKey(toDecrypt, privateKey) {
    const buffer = Buffer2.from(toDecrypt, "base64");
    const decrypted = empty_default.privateDecrypt({
      key: privateKey,
      passphrase: "top secret",
      padding: empty_default.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: "sha256"
    }, buffer);
    return decrypted.toString("utf8");
  }
  function generateKeyPair() {
    return empty_default.generateKeyPairSync("rsa", {
      modulusLength: 4096,
      publicKeyEncoding: {
        type: "spki",
        format: "pem"
      },
      privateKeyEncoding: {
        type: "pkcs8",
        format: "pem",
        cipher: "aes-256-cbc",
        passphrase: "top secret"
        // *optional*
      }
    });
  }

  // node_modules/@datavillage-me/http-util/dist/index.mjs
  var HttpConfig = { DEBUG: true };
  async function _404_undefined(err) {
    if (err?.status == 404 || err instanceof UndefinedError)
      return void 0;
    else
      throw err;
  }
  function initSearchParams(parameters, urlParams) {
    const updatedParams = urlParams || new URLSearchParams();
    Object.entries(parameters).forEach(([key, value]) => {
      if (value !== void 0) {
        updatedParams.append(key, value.toString());
      }
    });
    return updatedParams;
  }
  function appendQueryParameters(url, parameters) {
    url = typeof url == "string" ? new URL(url) : url;
    const urlParams = initSearchParams(parameters, url.searchParams);
    url.search = urlParams.toString();
    return url;
  }
  function isBlob(obj) {
    return typeof obj === "object" && typeof obj.arrayBuffer === "function" && typeof obj.type === "string" && typeof obj.stream === "function" && typeof obj.constructor === "function" && typeof obj.constructor.name === "string" && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
  }
  function fetchAndCatch(url, init) {
    const start = Date.now();
    if (HttpConfig.DEBUG)
      console.log(`[${(/* @__PURE__ */ new Date()).toUTCString()}] [HTTP ==>] : ${init?.method || "GET"} ${url}`);
    if (
      // Does it look like a Blob ?
      init?.body && typeof init.body === "object" && typeof init.body.constructor === "function" && typeof init.body.constructor.name === "string" && /^(Blob|File)$/.test(init.body.constructor.name) && /^(Blob|File)$/.test(init.body[Symbol.toStringTag]) && // OK, we made it this far, so it's certainly meant as a Blob, now do the node-fetch check
      !isBlob(init.body)
    )
      throw new Error("Wrong Blob implementation");
    if (init?.query) {
      url = appendQueryParameters(url, init.query).toString();
    }
    return (0, import_cross_fetch.default)(url, init).catch((reason) => {
      if (HttpConfig.DEBUG)
        console.log(`[${(/* @__PURE__ */ new Date()).toUTCString()}] [HTTP ERR] [${formatMillis(Date.now() - start)}s]: ${init?.method || "GET"} ${url} ${reason}`);
      throw new HttpError(999, reason);
    }).then((res) => {
      if (HttpConfig.DEBUG)
        console.log(`[${(/* @__PURE__ */ new Date()).toUTCString()}] [HTTP ${res.status}] [${formatMillis(Date.now() - start)}s]: ${init?.method || "GET"} ${url}`);
      return res;
    }).then(handleHttpPromiseStatus);
  }
  var HttpError = class extends Error {
    constructor(status, msg) {
      super(msg);
      this.status = status;
    }
    toString() {
      return `HTTP [${this.status}] ${this.message}`;
    }
  };
  async function getErrorObject(res) {
    const errTxt = await res.text();
    try {
      const errJson = JSON.parse(errTxt);
      return new HttpError(res.status, errJson.message || res.statusText);
    } catch (e2) {
      return new HttpError(res.status, errTxt || res.statusText);
    }
  }
  async function handleHttpPromiseStatus(res) {
    if (res.ok) {
      const originalJsonFn = res.json;
      res.json = async function() {
        if (this.status == 204)
          return void 0;
        else
          return originalJsonFn.call(this);
      };
      return res;
    } else {
      const err = await getErrorObject(res);
      throw err;
    }
  }
  var HttpClient = class _HttpClient {
    constructor(base_url, auth_token, authMode = "AuthBearer") {
      base_url = sanitizePath(base_url, "NOSLASH", "KEEP");
      this.base_url = base_url;
      this.auth_token = auth_token;
      this.authMode = authMode;
    }
    getClientForSubpath(subpath) {
      return new _HttpClient(this.getUrl(subpath), this.auth_token, this.authMode);
    }
    getAuthorizationHeaders(headers = {}) {
      if (this.auth_token) {
        if (this.authMode == "AuthBearer")
          headers.Authorization = `Bearer ${this.auth_token}`;
        else if (this.authMode == "idToken")
          headers.Cookie = `idToken=${this.auth_token}`;
      }
      return headers;
    }
    getUrl(path = "") {
      return this.base_url + path;
    }
    authorizedFetch(path, initOpt, basePathIncluded) {
      const headers = this.getAuthorizationHeaders();
      const init = {
        // let the browser handle the auth cookie if configured with BrowserCredentials
        credentials: this.authMode == "BrowserCredentials" ? "include" : void 0,
        ...initOpt,
        // ... but let it be overridden if already provided in init
        // WARN if any cookies are provided in init, they will override the auth cookie (not a supported usecase though)
        headers: { ...headers, ...initOpt?.headers }
      };
      return fetchAndCatch(basePathIncluded ? path : this.getUrl(path), init);
    }
    head(path, initOpt) {
      const init = {
        ...initOpt,
        method: "HEAD"
      };
      return this.authorizedFetch(this.getUrl(path), init);
    }
    get(path, initOpt) {
      return this.authorizedFetch(path, initOpt);
    }
    getText(path, initOpt) {
      return this.authorizedFetch(path, initOpt).then((value) => value.text());
    }
    getJson(path, initOpt) {
      return this.authorizedFetch(path, { headers: { Accept: "application/json" }, ...initOpt || {} }).then((value) => value.json());
    }
    post(path, body, initOpt) {
      const init = {
        ...initOpt,
        method: "POST",
        body
      };
      return this.authorizedFetch(path, init);
    }
    put(path, body, initOpt) {
      const init = {
        ...initOpt,
        method: "PUT",
        body
      };
      return this.authorizedFetch(path, init);
    }
    postPutPatchJson(path, payload, initOpt, method) {
      if (!initOpt)
        initOpt = {};
      if (!initOpt.headers)
        initOpt.headers = {};
      if (!initOpt.headers["Accept"]) {
        initOpt.headers["Accept"] = "application/json";
      }
      if (typeof payload == "object" && initOpt?.headers && initOpt?.headers["Content-Type"] == "application/x-www-form-urlencoded") {
        payload = new URLSearchParams(payload);
      } else if (typeof payload == "object" && (!initOpt?.headers["Content-Type"] || initOpt?.headers["Content-Type"] == "application/json")) {
        payload = JSON.stringify(payload, void 0, 2);
        if (!initOpt.headers["Content-Type"]) {
          initOpt.headers["Content-Type"] = "application/json";
        }
      }
      const init = {
        ...initOpt,
        method: method || "POST",
        body: payload
      };
      return this.authorizedFetch(path, init).then((res) => res.json());
    }
    postJson(path, payload, initOpt) {
      return this.postPutPatchJson(path, payload, initOpt);
    }
    putJson(path, payload, initOpt) {
      return this.postPutPatchJson(path, payload, initOpt, "PUT");
    }
    patchJson(path, payload, initOpt) {
      return this.postPutPatchJson(path, payload, initOpt, "PATCH");
    }
    delete(path, initOpt) {
      const init = {
        ...initOpt,
        method: "DELETE"
      };
      return this.authorizedFetch(path, init).then((response) => void 0);
    }
    deleteJson(path, initOpt) {
      const init = {
        ...initOpt,
        method: "DELETE"
      };
      return this.authorizedFetch(path, init).then((value) => value.json());
    }
  };

  // node_modules/@datavillage-me/api/dist/esm/http/consents-services/index.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@datavillage-me/api/dist/esm/http/http-client.js
  init_dirname();
  init_buffer2();
  init_process2();
  var HttpServiceClient = class {
    constructor(httpClient) {
      this._httpClient = httpClient;
    }
    static forUrl(cons, api_url, auth_token, authMode) {
      return new cons(new HttpClient(api_url, auth_token, authMode));
    }
    get httpClient() {
      return this._httpClient;
    }
  };

  // node_modules/@datavillage-me/api/dist/esm/http/consents-services/index.js
  var HttpConsentsServices = class extends HttpServiceClient {
    getConsent(consentId) {
      return this.httpClient.getJson(`/consents/${consentId}`);
    }
    getConsents(userId, clientId, applicationId, consentReceiptId, isActive) {
      return this.httpClient.getJson("/consents", {
        query: {
          userId,
          clientId,
          applicationId,
          consentReceiptId,
          isActive
        }
      });
    }
    createConsent(userId, consentReceiptUrl, duration, forPersonalData, startProcessingJob) {
      return this.httpClient.postJson(`/consents`, {
        userId,
        consentReceiptUrl,
        forPersonalData,
        duration,
        startProcessingJob
      });
    }
    withdrawConsent(consentId) {
      return this.httpClient.postJson(`/consents/withdraw`, {
        consentId
      });
    }
  };

  // node_modules/@datavillage-me/api/dist/esm/http/passport/index.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@datavillage-me/api/dist/esm/core/index.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@datavillage-me/api/dist/esm/core/CredentialManager.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@datavillage-me/api/dist/esm/core/Passport.js
  init_dirname();
  init_buffer2();
  init_process2();
  var CONNECT_ACTION;
  (function(CONNECT_ACTION2) {
    CONNECT_ACTION2["ADD_POD"] = "AddPod";
    CONNECT_ACTION2["CONNECT_SOURCE"] = "ConnectSource";
  })(CONNECT_ACTION || (CONNECT_ACTION = {}));
  var DEV_CONNECT_ACTION;
  (function(DEV_CONNECT_ACTION2) {
    DEV_CONNECT_ACTION2["DEVELOPER_AUTHENTICATION"] = "DeveloperAuthentication";
    DEV_CONNECT_ACTION2["REQUEST_DEVELOPER_TOKEN"] = "REQUEST_DEVELOPER_TOKEN";
  })(DEV_CONNECT_ACTION || (DEV_CONNECT_ACTION = {}));

  // node_modules/@datavillage-me/api/dist/esm/core/DataBridge.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@datavillage-me/api/dist/esm/core/UsersServices.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@datavillage-me/api/dist/esm/types/pod.js
  init_dirname();
  init_buffer2();
  init_process2();
  var RESOURCE_TYPE;
  (function(RESOURCE_TYPE2) {
    RESOURCE_TYPE2["Folder"] = "folder";
    RESOURCE_TYPE2["File"] = "file";
  })(RESOURCE_TYPE || (RESOURCE_TYPE = {}));
  function assertResourceType(resource, type) {
    assert2(resource.metadata.type == type, `Resource is not a ${type} : ${resource.metadata.name}`);
  }

  // node_modules/@datavillage-me/api/dist/esm/core/UsersServices.js
  var MASTER_POD_ALIAS = "$MASTER$";
  var HTTP_FOLDER_CONTENTTYPE = "application/vnd.datavillage.folder+json";
  var BasicServiceDecorator = class extends Decorator("deleteResource", "saveResource", "getResource", "getResourceMetadata", "getPods", "getUser", "append") {
    getPodInstance(userId, podId) {
      const result = podId == MASTER_POD_ALIAS ? new MasterPodWrapper(this, userId, podId) : new PodWrapper(this, userId, podId);
      return result;
    }
  };
  var PodWrapper = class {
    constructor(userServices, userId, podId) {
      this.userServices = userServices;
      this.userId = userId;
      this.podId = podId;
    }
    getResource(resourcePath) {
      return this.userServices.getResource(this.userId, this.podId, resourcePath);
    }
    getResourceMetadata(resourcePath) {
      return this.userServices.getResourceMetadata(this.userId, this.podId, resourcePath);
    }
    getFile(resourcePath) {
      return this.userServices.getResource(this.userId, this.podId, sanitizePath(resourcePath, "NOSLASH")).then((res) => {
        assertResourceType(res, RESOURCE_TYPE.File);
        return res;
      });
    }
    async getFolder(resourcePath, create) {
      const path = sanitizePath(resourcePath, "SLASH");
      const folder = await this.userServices.getResource(this.userId, this.podId, path).catch(_404_undefined);
      if (folder) {
        assertResourceType(folder, RESOURCE_TYPE.Folder);
        return folder;
      } else if (create) {
        return this.userServices.saveResource(this.userId, this.podId, path, void 0, HTTP_FOLDER_CONTENTTYPE);
      } else {
        throw new HttpError(404, "Folder not found: " + resourcePath);
      }
    }
    saveFile(filePath, content, contentType) {
      if (filePath.endsWith("/"))
        throw new Error("File name cannot end with a slash");
      return this.userServices.saveResource(this.userId, this.podId, filePath, content, contentType);
    }
    saveResource(resourcePath, content, contentType) {
      return this.userServices.saveResource(this.userId, this.podId, resourcePath, content, contentType);
    }
    append(filePath, content) {
      return this.userServices.append(this.userId, this.podId, filePath, content);
    }
    // TODO declare content as string | Blob
    deleteResource(path) {
      return this.userServices.deleteResource(this.userId, this.podId, path);
    }
  };
  var MasterPodWrapper = class extends PodWrapper {
    constructor(userServices, userId, podId) {
      super(userServices, userId, podId);
    }
    getSecret(resourceId) {
      return this.getFile(`.datavillage/TOKENS/${encodeURIComponent(resourceId)}.key`).then((file) => file.content.text());
    }
    storeSecret(resourceId, token) {
      return this.saveFile(`.datavillage/TOKENS/${encodeURIComponent(resourceId)}.key`, token).then((file) => void 0);
    }
    getPublicKey() {
      return this.getFile(".datavillage/personal-public.key").then((file) => file.content.text());
    }
    async activateDatasource(sourceId, token, tokenScope, userInfo, overwriteToken, alreadyEncrypted) {
      const datasources = await this.getActivatedDatasources();
      const existingDs = datasources.find((ds) => ds.resourceUri == sourceId);
      if (existingDs && !overwriteToken) {
        throw new Error("Datasource already activated");
      } else {
        const newDs = {
          activationDate: (/* @__PURE__ */ new Date()).toISOString(),
          resourceUri: sourceId,
          userInfo,
          grantedScopes: tokenScope
        };
        if (existingDs)
          Object.assign(existingDs, newDs);
        else
          datasources.push(newDs);
        await this.saveFile(".datavillage/datasources.json", JSON.stringify(datasources, void 0, 4));
        const encryptedToken = alreadyEncrypted ? token : _encryptStringWithRsaPublicKey(token, await this.getPublicKey());
        await this.storeSecret(sourceId, encryptedToken);
      }
    }
    async updateDatasourceStatistics(sourceUri, statistics) {
      const datasources = await this.getActivatedDatasources();
      const datasource = datasources.find((ds) => ds.resourceUri == sourceUri);
      if (datasource) {
        if (!datasource.statistics)
          datasource.statistics = [];
        datasource.statistics.unshift(statistics);
        datasource.statistics.length = Math.min(datasource.statistics.length, 5);
        await this.saveFile(".datavillage/datasources.json", JSON.stringify(datasources, void 0, 4));
      }
    }
    async getActivatedDatasources() {
      const datasources = await this.getFile(".datavillage/datasources.json").then((file) => file.content.text()).then((str) => JSON.parse(str)).catch(_404_undefined);
      return datasources || [];
    }
    async revokeDatasource(sourceId) {
      const datasources = await this.getActivatedDatasources();
      const idx = datasources.findIndex((ds) => ds.resourceUri == sourceId);
      if (idx >= 0) {
        datasources.splice(idx, 1);
        await this.saveFile(".datavillage/datasources.json", JSON.stringify(datasources, void 0, 4));
        await this._deleteSecret(sourceId).catch(_404_undefined);
      } else {
      }
    }
    async updateApplicationLog(appId, summary) {
      const applications = await this.getActiveApplications();
      let application = applications.find((app) => app.id == appId);
      if (!application) {
        applications.push(application = { id: appId });
      }
      if (!application.recentActivity)
        application.recentActivity = [];
      application.recentActivity.unshift(summary);
      application.recentActivity.length = Math.min(application.recentActivity.length, 5);
      await this.saveFile(".datavillage/applications.json", JSON.stringify(applications, void 0, 4));
    }
    async getActiveApplications() {
      const applications = await this.getFile(".datavillage/applications.json").then((file) => file.content.text()).then((str) => JSON.parse(str)).catch(_404_undefined);
      return applications || [];
    }
    /**
     * For internal purposes
     * @param resourceId
     */
    _deleteSecret(resourceId) {
      return this.deleteResource(`.datavillage/TOKENS/${encodeURIComponent(resourceId)}.key`).then((file) => void 0);
    }
  };
  function getMasterPod(user2) {
    const masterPod = user2.pods && user2.pods.find((pod) => pod.uri === user2.masterPodUri);
    assert2(masterPod, "no master pod found for " + user2.id);
    return masterPod;
  }

  // node_modules/@datavillage-me/api/dist/esm/core/IClientsServices.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@datavillage-me/api/dist/esm/core/ActivityLogService.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@datavillage-me/api/dist/esm/core/JobService.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@datavillage-me/api/dist/esm/core/IDevelopersServices.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@datavillage-me/api/dist/esm/core/IConsentReceiptsServices.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@datavillage-me/api/dist/esm/core/IConsentsServices.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@datavillage-me/api/dist/esm/core/IOperatorServices.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@datavillage-me/api/dist/esm/core/ICageServices.js
  init_dirname();
  init_buffer2();
  init_process2();
  var STREAMS;
  (function(STREAMS2) {
    STREAMS2["events"] = "events";
    STREAMS2["system"] = "system";
  })(STREAMS || (STREAMS = {}));

  // node_modules/@datavillage-me/api/dist/esm/core/ICollaborationSpacesServices.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@datavillage-me/api/dist/esm/http/passport/index.js
  var HttpPassport = class extends HttpServiceClient {
    constructor(httpClient) {
      super(httpClient);
    }
    async getAuthenticationUrl(activationCallbackUrl, type, issuer) {
      if (type) {
        const url = new URL(this.httpClient.getUrl("/auth/connect/" + type));
        url.search = new URLSearchParams({
          activationCallbackUrl,
          action: CONNECT_ACTION.ADD_POD
        }).toString();
        issuer && url.searchParams.append("issuer", issuer);
        return url.toString();
      } else {
        const url = new URL(this.httpClient.getUrl("/auth/login"));
        url.search = new URLSearchParams({
          redirectUrl: activationCallbackUrl
        }).toString();
        return url.toString();
      }
    }
    async getDeveloperToken(activationCallbackUrl, type, developerId) {
      const url = new URL(this.httpClient.getUrl("/auth/dev/connect/" + type));
      url.search = new URLSearchParams({
        activationCallbackUrl,
        action: DEV_CONNECT_ACTION.REQUEST_DEVELOPER_TOKEN,
        developerId
      }).toString();
      return url.toString();
    }
    async getDatasourceActivationUrl(activationCallbackUrl, type, force) {
      const url = appendQueryParameters(this.httpClient.getUrl("/auth/connect/" + type), {
        activationCallbackUrl,
        action: CONNECT_ACTION.CONNECT_SOURCE,
        force
      });
      return url.toString();
    }
    authenticate(user2, password) {
      throw new Error("Not implemented");
    }
    logout() {
      return this.httpClient.post("/auth/logout", void 0).then((value) => void 0);
    }
    getCurrentUser() {
      const response = this.httpClient.getJson("/auth/me", {
        //mode: 'cors',
      });
      return response.catch((err) => {
        if (err.status == 401)
          return void 0;
        else
          throw err;
      });
    }
    getCurrentDeveloper() {
      const response = this.httpClient.getJson("/auth/dev/me", {
        //mode: 'cors',
      });
      return response.catch((err) => {
        if (err.status == 401)
          return void 0;
        else
          throw err;
      });
    }
    getCurrentCredentials() {
      const response = this.httpClient.getJson("/auth/currentCredentials", {
        //mode: 'cors',
      });
      return response.catch((err) => {
        if (err.status == 401)
          return void 0;
        else
          throw err;
      });
    }
    developerLogout() {
      return this.httpClient.post("/auth/dev/logout", void 0).then((value) => {
      });
    }
    createUserToken(userId, scope) {
      return this.httpClient.postJson("/auth/createToken", {
        userId,
        scope
      }, { headers: { "Content-Type": "application/x-www-form-urlencoded" } });
    }
    createDevToken(devId, scope) {
      return this.httpClient.postJson("/auth/dev/createToken", {
        devId,
        scope
      }, { headers: { "Content-Type": "application/x-www-form-urlencoded" } });
    }
    activateSources(consentReceiptId) {
      return this.httpClient.postJson("/sources/activate", {
        consentReceiptId
      }, { headers: { "Content-Type": "application/x-www-form-urlencoded" } });
    }
  };

  // node_modules/@datavillage-me/api/dist/esm/http/credential-manager/index.js
  init_dirname();
  init_buffer2();
  init_process2();
  var HttpCredentialManager = class extends HttpServiceClient {
    getApplicationToken(clientId, clientSecret) {
      return this.httpClient.postJson("/auth/getApplicationToken", {
        client_id: clientId,
        client_secret: clientSecret
      }, { headers: { "Content-Type": "application/json" } });
    }
  };

  // node_modules/@datavillage-me/api/dist/esm/http/data-bridge/index.js
  init_dirname();
  init_buffer2();
  init_process2();
  var HttpDataBridge = class extends HttpServiceClient {
    getDataSources() {
      return this.httpClient.getJson("/sources/providers");
    }
    importData(userIds, dataSourceId, clientId, importParams) {
      return this.httpClient.postJson("/sources/importData", {
        userIds,
        dataSourceId,
        importParams,
        clientId
      });
    }
    async startImportJob(userIds, dataSourceId, clientId, importParams) {
      return this.httpClient.postJson("/sources/startImportJob", {
        userIds,
        dataSourceId,
        clientId,
        importParams
      });
    }
  };

  // node_modules/@datavillage-me/api/dist/esm/http/users-services/index.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@datavillage-me/api/dist/esm/http/users-services/usersServices.js
  init_dirname();
  init_buffer2();
  init_process2();
  function responseToResourceMetadata(response) {
    const lastModified = response.headers.get("last-modified") || "";
    const contentType = response.headers.get("content-type") || void 0;
    const strictContentType = contentType && contentType.split(";")[0].trim();
    let type = strictContentType == HTTP_FOLDER_CONTENTTYPE ? RESOURCE_TYPE.Folder : RESOURCE_TYPE.File;
    if (response.url.endsWith("/") && type != RESOURCE_TYPE.Folder) {
      throw new Error("Content-type mismatch : resource with trailing slash is not advertised as folder: " + response.url);
    }
    const tokens = new URL(response.url).pathname.split("/").filter((elem) => elem);
    let name = tokens.length > 0 ? tokens[tokens.length - 1] : "";
    if (type == RESOURCE_TYPE.Folder)
      name += "/";
    assert2(name, "Unable to get resource name: " + response.url);
    return {
      lastModified,
      name,
      type,
      contentType
    };
  }
  async function responseToResource(response) {
    const metadata = responseToResourceMetadata(response);
    if (metadata.type == RESOURCE_TYPE.Folder) {
      return {
        metadata,
        content: await response.json()
      };
    } else {
      return {
        metadata,
        content: await response.blob()
      };
    }
  }
  var BasicHttpUsersServices = class extends HttpServiceClient {
    constructor(httpClient) {
      super(httpClient);
    }
    getUser(userId) {
      return this.httpClient.getJson(`/users/${userId}`);
    }
    getPods(userId) {
      return this.httpClient.getJson(`/users/${userId}/pods`);
    }
    getPod(userId, podId) {
      return this.httpClient.getJson(`/users/${userId}/pods/${podId}`);
    }
    async getResource(userId, podId, resourcePath) {
      const response = await this.httpClient.authorizedFetch(`/users/${userId}/pods/${encodeURIComponent(podId)}/resources/${resourcePath}`);
      return responseToResource(response);
    }
    async getResourceMetadata(userId, podId, resourcePath) {
      const response = await this.httpClient.head(`/users/${userId}/pods/${podId}/resources/${resourcePath}`);
      return responseToResourceMetadata(response);
    }
    saveResource(userId, podId, resourcePath, resourceContent, contentType) {
      if (!contentType && resourcePath.endsWith("/"))
        contentType = HTTP_FOLDER_CONTENTTYPE;
      const headers = contentType ? { "Content-Type": contentType } : void 0;
      return this.httpClient.authorizedFetch(`/users/${userId}/pods/${podId}/resources/${resourcePath}`, {
        headers,
        method: "PUT",
        body: resourceContent
      }).then(responseToResource);
    }
    append(userId, podId, resourcePath, appendedContent) {
      if (resourcePath.endsWith("/"))
        throw new Error("File name cannot end with a slash");
      return this.httpClient.authorizedFetch(`/users/${userId}/pods/${podId}/resources/${resourcePath}`, {
        method: "POST",
        body: appendedContent
      }).then(responseToResource);
    }
    deleteResource(userId, podId, resourcePath) {
      return this.httpClient.delete(`/users/${userId}/pods/${podId}/resources/${resourcePath}`);
    }
  };

  // node_modules/@datavillage-me/api/dist/esm/http/users-services/usersMgmtServices.js
  init_dirname();
  init_buffer2();
  init_process2();
  var HttpUsersMgmtServices = class extends HttpServiceClient {
    constructor(httpClient) {
      super(httpClient);
    }
    createUser(authenticationInfo) {
      return this.httpClient.postJson(`/users`, authenticationInfo);
    }
    getUsers(query) {
      return this.httpClient.getJson(`/users?${initSearchParams(query).toString()}`);
    }
    addPod(userId, pod, tokens) {
      throw new Error("Not implemented");
    }
    deleteUser(userId) {
      return this.httpClient.delete(`/users/${userId}`);
    }
    checkIntegrity(userId, fix) {
      return this.httpClient.postJson(`/users/${userId}/checkIntegrity`, void 0, { query: { fix } });
    }
    getUserByIdentity(identity) {
      return this.httpClient.getJson(`/users`, { query: identity }).then((users) => users[0]);
    }
  };

  // node_modules/@datavillage-me/api/dist/esm/http/users-services/index.js
  var HttpUsersServices = function(httpClient) {
    return new BasicServiceDecorator(new BasicHttpUsersServices(httpClient));
  };

  // node_modules/@datavillage-me/api/dist/esm/http/clients-services/index.js
  init_dirname();
  init_buffer2();
  init_process2();
  var HttpClientsServices = class extends HttpServiceClient {
    constructor(httpClient) {
      super(httpClient);
    }
    getClients() {
      return this.httpClient.getJson(`/clients`);
    }
    getClient(clientId) {
      return this.httpClient.getJson(`/clients/${clientId}`);
    }
    deleteClient(clientId) {
      return this.httpClient.delete(`/clients/${clientId}`);
    }
    createClient(name, url, logoUrl, label) {
      return this.httpClient.postJson(`/clients`, { name, url, logoUrl, label });
    }
    updateClient(clientId, update) {
      return this.httpClient.patchJson(`/clients/${clientId}`, update);
    }
    getCollaborationSpaces(clientId) {
      return this.httpClient.getJson(`/clients/${clientId}/spaces`);
    }
    getApplicationActiveUsers(clientId, applicationId) {
      return this.httpClient.getJson(`/clients/${clientId}/spaces/${applicationId}/activeUsers`);
    }
    async getApplicationUserData(clientId, applicationId, userId, contentType) {
      const headers = contentType ? { Accept: contentType } : void 0;
      return (await this.httpClient.get(`/clients/${clientId}/spaces/${applicationId}/activeUsers/${userId}/data`, { headers })).blob();
    }
    getInferences(clientId, applicationId, userId) {
      return this.httpClient.authorizedFetch(`/clients/${clientId}/spaces/${applicationId}/activeUsers/${userId}/inferences`, {
        method: "GET"
      }).then((resp) => resp.json());
    }
    saveInferences(clientId, applicationId, userId, inferences) {
      return this.httpClient.authorizedFetch(`/clients/${clientId}/spaces/${applicationId}/activeUsers/${userId}/inferences`, {
        method: "PUT",
        body: inferences
      }).then((resp) => resp.json());
    }
    getExplains(clientId, applicationId, userId) {
      return this.httpClient.authorizedFetch(`/clients/${clientId}/spaces/${applicationId}/activeUsers/${userId}/explains`, {
        method: "GET"
      }).then((resp) => resp.json());
    }
    saveExplains(clientId, applicationId, userId, inferences) {
      return this.httpClient.putJson(`/clients/${clientId}/spaces/${applicationId}/activeUsers/${userId}/explains`, inferences);
    }
  };

  // node_modules/@datavillage-me/api/dist/esm/mock/mock-client.js
  init_dirname();
  init_buffer2();
  init_process2();
  function getMockClient(userId) {
    return {
      // WARN massive hack to avoid porting this MockClient that should disappear anyway
      httpClient: void 0,
      getConsentsServices: () => MockConsentsServices,
      getCredentialManager: () => MockCredentialManager,
      getDataBridge: () => MockDataBridge,
      getPassport: () => new MockPassport(userId),
      getUsersServices: () => MockUsersServices,
      getUsersMgmtService: () => MockUsersMgmtServices,
      getClientsServices: () => MockClientsServices,
      getActivityLog: () => MockActivityLogServices,
      getJobsService: () => MockJobsServices,
      getDevelopersServices: () => MockDevelopersServices,
      getConsentReceiptsServices: () => MockConsentReceiptsServices,
      getCollaborationSpacesServices: () => MockCollaborationSpacesServices,
      getOperatorServices: () => MockOperatorServices,
      getDatasetServices: () => MockDatasetServices,
      getConnectorServices: () => MockDatasetServices
    };
  }
  var MockConsentReceipt = {
    // TODO
  };
  var mockFileResource = (name, content) => ({
    metadata: {
      lastModified: (/* @__PURE__ */ new Date()).toISOString(),
      name,
      type: RESOURCE_TYPE.File
    },
    // content: new isomorphicBlob([content]) as any as Blob
    content: new Blob()
  });
  var mockFolderResource = (name, childrenResources) => ({
    metadata: {
      lastModified: (/* @__PURE__ */ new Date()).toISOString(),
      name,
      type: RESOURCE_TYPE.Folder
    },
    content: childrenResources
  });
  var MockConsentsServices = {
    getConsent(consentId) {
      throw new Error("Not implemented");
    },
    getConsents(userId, clientId, applicationId, consentReceiptId, isExpired, consentStatus) {
      throw new Error("Not implemented");
    },
    createConsent(userId, consentReceiptUrl, duration, forPersonalData, startProcessingJob) {
      throw new Error("Not implemented");
    },
    withdrawConsent(consentId) {
      throw new Error("Not implemented");
    }
  };
  var MockConsentReceiptsServices = {
    getConsentReceiptUrl(consentReceiptId) {
      throw new Error("Not implemented");
    },
    getConsentReceipt(id, consentReceiptChain) {
      if (consentReceiptChain)
        throw new Error("Not implemented");
      return Promise.resolve(MockConsentReceipt);
    },
    getCurrentConsentReceiptForApplication(clientId, applicationId) {
      throw new Error("Not implemented");
    },
    createConsentReceipt(clientId, applicationId, purpose, forProcessing, forPersonalData) {
      throw new Error("Not implemented");
    }
  };
  var MockCredentialManager = {
    getApplicationToken(clientId, clientSecret) {
      return Promise.resolve({
        access_token: "",
        expires_in: 99999999,
        scope: "",
        token_type: "Bearer"
      });
    }
  };
  var MockDataBridge = {
    getDataSources() {
      throw new Error("Not implemented");
    },
    importData(userIds, dataSourceId, clientId, importParams) {
      throw new Error("Not implemented");
    },
    startImportJob(userIds, dataSourceId, clientId, params) {
      throw new Error("Not implemented");
    }
  };
  var PODS = {
    "mock:user001/pod001": mockFolderResource("", [
      mockFolderResource("folder1", [mockFolderResource("folder1.1", [mockFileResource("file3.txt", "File within a folder")])]),
      mockFileResource("file1.txt", "Some content"),
      mockFileResource("file2.txt", "Some other content")
    ]),
    "https://tijs.inrupt.com/pod": mockFolderResource("", [
      mockFolderResource("folder1", [mockFolderResource("folder1.1", [])]),
      mockFileResource("file1.txt", "Some content"),
      mockFileResource("file2.txt", "Some other content")
    ]),
    "https://tim.worldwideweb.com/pod": mockFolderResource("", [
      mockFolderResource("folder1", [mockFolderResource("folder1.1", [])]),
      mockFileResource("file1.txt", "Some content")
    ]),
    "https://subdomainlongerthanyouhaveeverseen.inrupt.com/pod": mockFolderResource("", [
      mockFolderResource("folder1", [mockFolderResource("folder1.1", [])]),
      mockFileResource("file1.txt", "Some content")
    ])
  };
  var USERS = {
    user001: {
      clientId: "",
      masterPodUri: "mock:user001/pod001",
      creationDate: (/* @__PURE__ */ new Date()).toISOString(),
      updateDate: (/* @__PURE__ */ new Date()).toISOString(),
      pods: [
        {
          identity: { type: "token", id: "webid:user001", issuerUri: "mock:id_issuer" },
          type: "solid",
          uri: "mock:user001/pod001",
          registrationDate: "2021-05-01T14:00:00.000Z",
          description: "A mock pod"
        }
      ],
      id: "user001",
      identities: []
    },
    user002: {
      clientId: "",
      masterPodUri: "https://tijs.inrupt.com/pod",
      creationDate: (/* @__PURE__ */ new Date()).toISOString(),
      updateDate: (/* @__PURE__ */ new Date()).toISOString(),
      pods: [
        {
          type: "solid",
          description: "Tijs' Pod",
          uri: "https://tijs.inrupt.com/pod",
          identity: { type: "token", id: "https://tijs.inrupt.com/profile/me", issuerUri: "https://inrupt.net" },
          registrationDate: "2021-04-23T18:25:43.511Z"
        },
        {
          type: "solid",
          description: "Tim's data",
          uri: "https://tim.worldwideweb.com/pod",
          identity: {
            type: "token",
            id: "https://tim.worldwideweb.com/profile/me",
            issuerUri: "https://worldwideweb.com"
          },
          registrationDate: "2021-05-23T18:25:43.511Z"
        },
        {
          type: "google",
          description: "Super long pod data and it keeps on coming",
          uri: "https://subdomainlongerthanyouhaveeverseen.inrupt.com/pod",
          identity: {
            type: "token",
            id: "https://thiswillneverfitbutitdoesnotevenhaveto.inrupt.com/profile/me",
            issuerUri: "https://thelongesturlintheworldididntevenknowthisexisted"
          },
          registrationDate: "2021-04-23T18:25:43.511Z"
        }
      ],
      id: "user002",
      identities: []
    }
  };
  var MockPassport = class {
    constructor(currentUserId) {
      this.currentUser = currentUserId ? USERS[currentUserId] : void 0;
    }
    async getAuthenticationUrl(activationCallbackUrl, type, issuer) {
      const callbackURL = new URL(activationCallbackUrl);
      const mockLoginURL = new URL("https://dv-dev-mocked-content.s3.amazonaws.com/externalLoginMock.html");
      mockLoginURL.search = new URLSearchParams({
        activationCallbackUrl: callbackURL.toString(),
        users: Object.keys(USERS).join(",")
      }).toString();
      return mockLoginURL.toString();
    }
    async getDeveloperToken(activationCallbackUrl, type, developerId) {
      throw new Error("Not implemented");
    }
    async getDatasourceActivationUrl(activationCallbackUrl, type, force) {
      throw new Error("Not implemented");
    }
    async authenticate(user2, password) {
      if (USERS[user2]) {
        this.currentUser = USERS[user2];
        return this.currentUser;
      } else {
        throw new Error("Authentication failed");
      }
    }
    async logout() {
      this.currentUser = void 0;
      return Promise.resolve(void 0);
    }
    async activateSources(consentId) {
      throw new Error("Not implemented");
    }
    getCurrentUser() {
      return Promise.resolve(this.currentUser);
    }
    getCurrentDeveloper() {
      throw "Not implemented";
    }
    getCurrentCredentials() {
      throw "Not implemented";
    }
    async developerLogout() {
      throw "Not implemented";
    }
    createDevToken(devId, scope) {
      throw new Error("Not implemented");
    }
    createUserToken(userId, scope) {
      throw new Error("Not implemented");
    }
  };
  var MockUsersServices = new BasicServiceDecorator({
    getUser(userId) {
      return Promise.resolve(USERS[userId]);
    },
    getPods(userId) {
      return Promise.resolve(USERS[userId].pods);
    },
    getPod(userId, podId) {
      return Promise.resolve(USERS[userId].pods[0]);
    },
    async getResource(userId, podId, resourcePath) {
      const user2 = await this.getUser(userId);
      const pod = podId == MASTER_POD_ALIAS ? getMasterPod(user2) : user2.pods.find((value) => value.uri == podId);
      assert2(pod, "Pod not found: " + podId);
      const podRoot = PODS[pod.uri];
      const pathElements = sanitizePath(resourcePath, "NOSLASH", "RELATIVE").split("/");
      let result = pathElements.reduce((previousValue, currentValue, idx) => {
        if (currentValue == "") {
          if (idx > 0)
            throw new Error("Wrong path : " + resourcePath);
          else
            return previousValue;
        }
        if (previousValue.metadata.type != RESOURCE_TYPE.Folder)
          throw new Error("Not a folder : " + previousValue.metadata.name);
        const result2 = previousValue.content.find((value) => value.metadata.name == currentValue);
        if (!result2)
          throw new Error("Missing resource : " + currentValue);
        return result2;
      }, podRoot);
      if (result.metadata.type == RESOURCE_TYPE.Folder) {
        return { ...result, content: result.content.map((value) => value.metadata) };
      } else {
        return result;
      }
    },
    getResourceMetadata(userId, podId, resourcePath) {
      return this.getResource(userId, podId, resourcePath).then((value) => value.metadata);
    },
    saveResource(userId, podId, resourcePath, resourceContent, contentType) {
      throw new Error("Not implemented");
    },
    append(userId, podId, resourcePath, content) {
      throw new Error("Not implemented");
    },
    deleteResource(userId, podId, resourcePath) {
      throw new Error("Not implemented");
    }
  });
  var MockUsersMgmtServices = {
    addPod(userId, pod, tokens) {
      throw new Error("Not implemented");
    },
    createUser(authenticationInfo) {
      throw "Not implemented";
    },
    deleteUser(userId) {
      throw "Not implemented";
    },
    checkIntegrity(userId, fix) {
      throw "Not implemented";
    },
    getUsers(query) {
      return Promise.resolve(Object.values(USERS));
    },
    getUserByIdentity(identity) {
      throw "Not implemented";
    }
  };
  var MockClientsServices = {
    getCollaborationSpaces(clientId) {
      throw new Error("Not implemented");
    },
    createClient(name, url) {
      throw new Error("Not implemented");
    },
    updateClient(clientId, update) {
      throw new Error("Not implemented");
    },
    getClient(clientId) {
      throw new Error("Not implemented");
    },
    deleteClient(clientId) {
      throw new Error("Not implemented");
    },
    getClients() {
      throw new Error("Not implemented");
    },
    getApplicationActiveUsers(clientId, applicationId) {
      throw new Error("Not implemented");
    },
    getApplicationUserData(clientId, applicationId, userId, contentType) {
      throw "Not implemented";
    },
    getInferences(clientId, applicationId, userId) {
      throw new Error("Not implemented");
    },
    saveInferences(clientId, applicationId, userId, inferences) {
      throw new Error("Not implemented");
    },
    getExplains(clientId, applicationId, userId) {
      throw new Error("Not implemented");
    },
    saveExplains(clientId, applicationId, userId, inferences) {
      throw new Error("Not implemented");
    }
  };
  var MockActivityLogServices = {
    getActivityLog(query) {
      throw new Error("Not implemented");
    }
  };
  var MockJobsServices = {
    getJobs(query) {
      throw new Error("Not implemented");
    },
    getJob(id) {
      throw new Error("Not implemented");
    },
    startJob(request) {
      throw new Error("Not implemented");
    },
    logJobActivity(jobId, update) {
      throw new Error("Not implemented");
    },
    createJob(jobContent) {
      throw new Error("Not implemented");
    }
  };
  var MockDevelopersServices = {
    create(auth) {
      throw "Not implemented";
    },
    updateRoles(update) {
      throw "Not implemented";
    },
    getById(id) {
      throw "Not implemented";
    },
    getAll() {
      throw "Not implemented";
    },
    delete(id) {
      throw "Not implemented";
    },
    getAuthenticationUrl(identityProvider, callbackUrl) {
      throw "Not implemented";
    },
    getIssuer(clientLabel) {
      throw "Not implemented";
    }
  };
  var MockCollaborationSpacesServices = {
    answerInvite(collaborationSpaceId, clientId, answer) {
      throw "Not implemented";
    },
    createCollaborationSpace(collaborationSpace) {
      throw "Not implemented";
    },
    updateCollaborationSpace(collaborationSpaceId, collaborationSpace) {
      throw "Not implemented";
    },
    addAllowedDatasetVersion(collaborationSpaceId, datasetVersionRef) {
      throw "Not implemented";
    },
    deleteAllowedDatasetVersion(collaborationSpaceId, datasetVersionRef) {
      throw "Not implemented";
    },
    createCollaboratorDataDescriptor(collaborationSpaceId, clientId, role, dataDescriptor) {
      throw "Not implemented";
    },
    createIndividualDescriptor(collaborationSpaceId, clientId, individualDescriptor) {
      throw "Not implemented";
    },
    deleteCollaborationSpace(collaborationSpaceId) {
      throw "Not implemented";
    },
    deleteCollaboratorDataDescriptor(collaborationSpaceId, clientId, role, dataDescriptorId) {
      throw "Not implemented";
    },
    deleteIndividualDescriptor(collaborationSpaceId, clientId, individualDescriptorId) {
      throw "Not implemented";
    },
    getCollaborationSpace(collaborationSpaceId) {
      throw "Not implemented";
    },
    getAll(filter) {
      throw "Not implemented";
    },
    getAllApplications(filter) {
      throw "Not implemented";
    },
    getCollaborator(collaborationSpaceId, clientId, role) {
      throw "Not implemented";
    },
    getCollaborators(collaborationSpaceId) {
      return Promise.resolve([]);
    },
    inviteCollaborator(collaborationSpaceId, invite) {
      throw "Not implemented";
    },
    updateCollaborator(collaborationSpaceId, clientId, role, update) {
      throw "Not implemented";
    },
    updateCollaboratorDataDescriptor(collaborationSpaceId, clientId, role, dataDescriptorId, dataDescriptor) {
      throw "Not implemented";
    },
    updateIndividualDescriptor(collaborationSpaceId, clientId, individualDescriptorId, update) {
      throw "Not implemented";
    },
    updateIndividuals(collaborationSpaceId, clientId, update) {
      throw "Not implemented";
    },
    getAllForDeveloper(developerId) {
      throw "Not implemented";
    },
    getAllForUser(userId) {
      throw "Not implemented";
    },
    getCollaborationSpaces() {
      throw "Not implemented";
    },
    getCageServices(id) {
      throw "Not implemented";
    },
    getOperatorServices(id) {
      throw "Not implemented";
    },
    addSpaceMetric(collaborationSpaceId, data) {
      throw "Not implemented";
    },
    getSpaceMetrics(collaborationSpaceId) {
      throw "Not implemented";
    },
    setupIndividuals(collaborationSpaceId, clientId, config2) {
      throw "Not implemented";
    },
    deleteUserAppDataResource(collaborationSpaceId, userId, resourcePath) {
      throw "Not implemented";
    },
    getUserAppDataMetadata(collaborationSpaceId, userId, resourcePath) {
      throw "Not implemented";
    },
    getUserAppDataResource(collaborationSpaceId, userId, resourcePath) {
      throw "Not implemented";
    },
    saveUserAppDataResource(collaborationSpaceId, userId, resourcePath, content, contentType) {
      throw "Not implemented";
    },
    pushConfiguration(collaborationSpaceId, clientId, dataDescriptorId, content) {
      throw "Not implemented";
    }
  };
  var MockOperatorServices = {
    getCages() {
      throw "Not implemented";
    }
  };
  var MockDatasetServices = {};

  // node_modules/@datavillage-me/api/dist/esm/http/activity-log/index.js
  init_dirname();
  init_buffer2();
  init_process2();
  var HttpActivityLogServices = class extends HttpServiceClient {
    constructor(httpClient) {
      super(httpClient);
    }
    getActivityLog(query) {
      const urlQuery = initSearchParams(query);
      return this.httpClient.getJson(`/activities?` + urlQuery.toString());
    }
  };

  // node_modules/@datavillage-me/api/dist/esm/http/jobs-services/index.js
  init_dirname();
  init_buffer2();
  init_process2();
  var HttpJobsServices = class extends HttpServiceClient {
    constructor(httpClient) {
      super(httpClient);
    }
    getJobs(query) {
      const urlQuery = initSearchParams(query);
      return this.httpClient.getJson(`/jobs?` + urlQuery.toString());
    }
    getJob(id) {
      return this.httpClient.getJson(`/jobs/` + id);
    }
    startJob(request) {
      return this.httpClient.postJson(`/jobs`, request);
    }
    createJob(jobContent) {
      return this.httpClient.postJson(`/jobs`, jobContent);
    }
    logJobActivity(jobId, update) {
      return this.httpClient.postJson(`/jobs/` + jobId, update);
    }
  };

  // node_modules/@datavillage-me/api/dist/esm/http/developers-services/index.js
  init_dirname();
  init_buffer2();
  init_process2();
  var HttpDevelopersServices = class extends HttpServiceClient {
    constructor(httpClient) {
      super(httpClient);
    }
    create(auth) {
      return this.httpClient.postJson(`/developers/`, auth);
    }
    delete(id) {
      return this.httpClient.delete(`/developers/${id}`);
    }
    getAll() {
      return this.httpClient.getJson(`/developers`);
    }
    getById(id) {
      return this.httpClient.getJson(`/developers/${id}`);
    }
    getAuthenticationUrl(identityProvider, activationCallbackUrl) {
      const url = new URL(this.httpClient.getUrl("/auth/dev/connect/" + identityProvider));
      url.search = new URLSearchParams({
        activationCallbackUrl,
        action: DEV_CONNECT_ACTION.DEVELOPER_AUTHENTICATION
      }).toString();
      return url.toString();
    }
    updateRoles(update) {
      return this.httpClient.postJson(`/developers/roles`, update);
    }
    getIssuer(clientLabel) {
      return this.httpClient.get(`/auth/dev/issuer/${clientLabel}`).then((resp) => resp.text());
    }
  };

  // node_modules/@datavillage-me/api/dist/esm/http/consentReceipts-services/index.js
  init_dirname();
  init_buffer2();
  init_process2();
  var HttpConsentReceiptsServices = class extends HttpServiceClient {
    getConsentReceiptUrl(consentReceiptId) {
      return this.httpClient.getUrl(`/consentReceipts/${consentReceiptId}`);
    }
    getConsentReceipt(consentReceiptId) {
      return this.httpClient.getJson(`/consentReceipts/${consentReceiptId}`);
    }
    getCurrentConsentReceiptForApplication(clientId, applicationId) {
      return this.httpClient.getJson(`/clients/${clientId}/spaces/${applicationId}/currentConsentReceipt`);
    }
    createConsentReceipt(clientId, applicationId, purpose, forProcessing, forPersonalData) {
      return this.httpClient.postJson(`/clients/${clientId}/spaces/${applicationId}/consentReceipts`, {
        purpose,
        forProcessing,
        forPersonalData
      });
    }
  };

  // node_modules/@datavillage-me/api/dist/esm/http/collaborationSpaces-services/index.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@datavillage-me/api/dist/esm/http/cage-services/index.js
  init_dirname();
  init_buffer2();
  init_process2();
  var HttpCageServices = class _HttpCageServices extends HttpServiceClient {
    static forApp(operatorUrl, appId) {
      return new _HttpCageServices(new HttpClient(new URL(sanitizePath(appId, "NOSLASH", "ABSOLUTE"), operatorUrl).toString()));
    }
    constructor(httpClient) {
      super(httpClient);
    }
    getEvents(stream_name = STREAMS.events) {
      return this.httpClient.getJson(`/event`, { query: { stream_name } });
    }
    postEvent(event, stream_name = STREAMS.events) {
      return this.httpClient.postJson(`/event`, event, { query: { stream_name } });
    }
    getAttestation() {
      return this.httpClient.getJson(`/attestation_SEV`);
    }
    uploadData(filename, data) {
      return this.httpClient.put(`/resources/data/` + filename, data).then((resp) => resp.text());
    }
    getOutput(filename) {
      return this.httpClient.get(`/resources/output/` + filename).then((resp) => resp.blob());
    }
    listData() {
      return this.httpClient.getJson(`/resources/data/`);
    }
    listOutputs() {
      return this.httpClient.getJson(`/resources/outputs/`);
    }
  };

  // node_modules/@datavillage-me/api/dist/esm/http/operator-services/index.js
  init_dirname();
  init_buffer2();
  init_process2();
  var HttpOperatorServices = class _HttpOperatorServices extends HttpServiceClient {
    static forApp(operatorUrl) {
      return new _HttpOperatorServices(new HttpClient(new URL(`${operatorUrl}`).toString()));
    }
    constructor(httpClient) {
      super(httpClient);
    }
    getCages() {
      return this.httpClient.getJson(`/operator/cages`);
    }
  };
  var HttpCageOperatorServices = class _HttpCageOperatorServices extends HttpServiceClient {
    static forApp(operatorUrl, appId) {
      return new _HttpCageOperatorServices(new HttpClient(new URL(`${operatorUrl}/${appId}`).toString()));
    }
    deploy(body) {
      return this.httpClient.postJson(`/deploy`, body);
    }
    rollout() {
      return this.httpClient.postJson(`/rollout`);
    }
    delete(keep_vm, keep_data) {
      return this.httpClient.deleteJson(`/delete`, { query: { keep_vm, keep_data } });
    }
    getPodStatus() {
      return this.httpClient.getJson(`/logs/pod_status`);
    }
    getAlgoLogs(tailLines) {
      return this.httpClient.getJson(`/logs/algo?tail_lines=${tailLines || 100}`);
    }
    getDeploymentLogs(tailLines) {
      return this.httpClient.getJson(`/logs/deployment?tail_lines=${tailLines || 100}`);
    }
    getCageStatus(tailLines) {
      return this.httpClient.getJson(`/logs/states?tail_lines=${tailLines || 100}`);
    }
    getLoki(query, start) {
      return this.httpClient.getJson(`/loki/api/v1/query_range`, { query: { query, start: start?.toISOString() } });
    }
    sendLokiEvents(streams) {
      return this.httpClient.postJson(`/loki`, streams);
    }
  };

  // node_modules/@datavillage-me/api/dist/esm/http/collaborationSpaces-services/index.js
  var HttpCollaborationSpacesServices = class extends HttpServiceClient {
    constructor(httpClient) {
      super(httpClient);
    }
    getCollaborationSpaces() {
      return this.httpClient.getJson(`/collaborationSpaces`);
    }
    createCollaborationSpace(collaborationSpace) {
      return this.httpClient.postJson(`/collaborationSpaces`, collaborationSpace);
    }
    updateCollaborationSpace(collaborationSpaceId, update) {
      return this.httpClient.patchJson(`/collaborationSpaces/${collaborationSpaceId}`, update);
    }
    getCollaborationSpace(collaborationSpaceId) {
      return this.httpClient.getJson(`/collaborationSpaces/${collaborationSpaceId}`);
    }
    deleteCollaborationSpace(collaborationSpaceId) {
      return this.httpClient.delete(`/collaborationSpaces/${collaborationSpaceId}`);
    }
    addAllowedDatasetVersion(collaborationSpaceId, datasetVersionRef) {
      return this.httpClient.patchJson(`/collaborationSpaces/${collaborationSpaceId}/allowedData`, datasetVersionRef);
    }
    deleteAllowedDatasetVersion(collaborationSpaceId, datasetVersionRef) {
      return this.httpClient.delete(`/collaborationSpaces/${collaborationSpaceId}/allowedData?datasetId=${datasetVersionRef.datasetId}&version=${datasetVersionRef.version}`);
    }
    inviteCollaborator(collaborationSpaceId, invite) {
      return this.httpClient.postJson(`/collaborationSpaces/${collaborationSpaceId}/collaborators`, invite);
    }
    getCollaborators(collaborationSpaceId) {
      return this.httpClient.getJson(`/collaborationSpaces/${collaborationSpaceId}/collaborators`);
    }
    getCollaborator(collaborationSpaceId, clientId, role) {
      return this.httpClient.getJson(`/collaborationSpaces/${collaborationSpaceId}/collaborators/${clientId}?role=${role}`);
    }
    updateCollaborator(collaborationSpaceId, clientId, role, update) {
      return this.httpClient.patchJson(`/collaborationSpaces/${collaborationSpaceId}/collaborators/${clientId}?role=${role}`, update);
    }
    answerInvite(collaborationSpaceId, clientId, answer) {
      return this.httpClient.patchJson(`/collaborationSpaces/${collaborationSpaceId}/collaborators/${clientId}/invite`, answer);
    }
    createCollaboratorDataDescriptor(collaborationSpaceId, clientId, role, dataDescriptor) {
      return this.httpClient.postJson(`/collaborationSpaces/${collaborationSpaceId}/collaborators/${clientId}/dataDescriptors?role=${role}`, dataDescriptor);
    }
    deleteCollaboratorDataDescriptor(collaborationSpaceId, clientId, role, dataDescriptorId) {
      return this.httpClient.delete(`/collaborationSpaces/${collaborationSpaceId}/collaborators/${clientId}/dataDescriptors/${dataDescriptorId}?role=${role}`);
    }
    updateCollaboratorDataDescriptor(collaborationSpaceId, clientId, role, dataDescriptorId, dataDescriptor) {
      return this.httpClient.patchJson(`/collaborationSpaces/${collaborationSpaceId}/collaborators/${clientId}/dataDescriptors/${dataDescriptorId}?role=${role}`, dataDescriptor);
    }
    createIndividualDescriptor(collaborationSpaceId, clientId, individualDescriptor) {
      return this.httpClient.postJson(`/collaborationSpaces/${collaborationSpaceId}/collaborators/${clientId}/individuals`, individualDescriptor);
    }
    deleteIndividualDescriptor(collaborationSpaceId, clientId, individualDescriptorId) {
      return this.httpClient.delete(`/collaborationSpaces/${collaborationSpaceId}/collaborators/${clientId}/individuals/${individualDescriptorId}`);
    }
    updateIndividualDescriptor(collaborationSpaceId, clientId, individualDescriptorId, update) {
      return this.httpClient.patchJson(`/collaborationSpaces/${collaborationSpaceId}/collaborators/${clientId}/individuals/${individualDescriptorId}`, update);
    }
    updateIndividuals(collaborationSpaceId, clientId, update) {
      return this.httpClient.patchJson(`/collaborationSpaces/${collaborationSpaceId}/collaborators/${clientId}/individuals`, update);
    }
    setupIndividuals(collaborationSpaceId, clientId, config2) {
      return this.httpClient.postJson(`/collaborationSpaces/${collaborationSpaceId}/collaborators/${clientId}/individuals/setup`, config2);
    }
    getAll() {
      return this.httpClient.getJson(`/collaborationSpaces`);
    }
    getAllApplications() {
      return this.httpClient.getJson(`/users/applications`);
    }
    getAllForUser(userId) {
      return this.httpClient.getJson(`/users/${userId}/applications`);
    }
    getAllForDeveloper(developerId) {
      return this.httpClient.getJson(`/developers/${developerId}/spaces`);
    }
    getCageServices(applicationId) {
      return new HttpCageServices(this.httpClient.getClientForSubpath(`/collaborationSpaces/${applicationId}/cage`));
    }
    getOperatorServices(applicationId) {
      return new HttpCageOperatorServices(this.httpClient.getClientForSubpath(`/collaborationSpaces/${applicationId}/operator`));
    }
    addSpaceMetric(collaborationSpaceId, data) {
      return this.httpClient.postJson(`/collaborationSpaces/${collaborationSpaceId}/metrics`, data);
    }
    getSpaceMetrics(collaborationSpaceId) {
      return this.httpClient.getJson(`/collaborationSpaces/${collaborationSpaceId}/metrics`);
    }
    deleteUserAppDataResource(collaborationSpaceId, userId, resourcePath) {
      return this.httpClient.delete(`/collaborationSpaces/${collaborationSpaceId}/users/${userId}/appdata/${resourcePath}`);
    }
    async getUserAppDataMetadata(collaborationSpaceId, userId, resourcePath) {
      const response = await this.httpClient.head(`/collaborationSpaces/${collaborationSpaceId}/users/${userId}/appdata/${resourcePath}`);
      return responseToResourceMetadata(response);
    }
    async getUserAppDataResource(collaborationSpaceId, userId, resourcePath) {
      const response = await this.httpClient.authorizedFetch(`/collaborationSpaces/${collaborationSpaceId}/users/${userId}/appdata/${resourcePath}`);
      return responseToResource(response);
    }
    saveUserAppDataResource(collaborationSpaceId, userId, resourcePath, content, contentType) {
      if (!contentType && resourcePath.endsWith("/"))
        contentType = HTTP_FOLDER_CONTENTTYPE;
      const headers = contentType ? { "Content-Type": contentType } : void 0;
      return this.httpClient.authorizedFetch(`/collaborationSpaces/${collaborationSpaceId}/users/${userId}/appdata/${resourcePath}`, {
        headers,
        method: "PUT",
        body: content
      }).then(responseToResource);
    }
    pushConfiguration(collaborationSpaceId, clientId, dataDescriptorId, content) {
      return this.httpClient.put(`/collaborationSpaces/${collaborationSpaceId}/collaborators/${clientId}/dataDescriptors/${dataDescriptorId}/configuration`, content);
    }
  };

  // node_modules/@datavillage-me/api/dist/esm/http/dataset-services/index.js
  init_dirname();
  init_buffer2();
  init_process2();
  var HttpDatasetServices = class extends HttpServiceClient {
    constructor(httpClient) {
      super(httpClient);
    }
    getDatasets() {
      return this.httpClient.getJson(`/datasets`);
    }
    getDataset(id) {
      return this.httpClient.getJson(`/datasets/${id}`);
    }
    createDataset(dataset) {
      return this.httpClient.postJson(`/datasets`, dataset);
    }
    addDatasetVersion(datasetId) {
      return this.httpClient.postJson(`/datasets/${datasetId}/version`);
    }
    getDatasetVersion(datasetId, version2) {
      return this.httpClient.getJson(`/datasets/${datasetId}/versions/${version2}`);
    }
    deprecateDatasetVersion(datasetId, version2) {
      return this.httpClient.postJson(`/datasets/${datasetId}/versions/${version2}/deprecate`);
    }
    finalizeDatasetVersion(datasetId, version2) {
      return this.httpClient.postJson(`/datasets/${datasetId}/versions/${version2}/finalize`);
    }
    updateDatasetVersion(datasetId, version2, versionUpdate) {
      return this.httpClient.postJson(`/datasets/${datasetId}/versions/${version2}`, versionUpdate);
    }
    getDatasetConfiguration(datasetId, version2) {
      return this.httpClient.getJson(`/datasets/${datasetId}/versions/${version2}/configuration`);
    }
  };

  // node_modules/@datavillage-me/api/dist/esm/http/connector-services/index.js
  init_dirname();
  init_buffer2();
  init_process2();
  var HttpConnectorServices = class extends HttpServiceClient {
    constructor(httpClient) {
      super(httpClient);
    }
    getConnectors() {
      return this.httpClient.getJson(`/connectors`);
    }
  };

  // node_modules/@datavillage-me/api/dist/esm/types/index.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@datavillage-me/api/dist/esm/types/consents.js
  init_dirname();
  init_buffer2();
  init_process2();
  var ConsentStatus;
  (function(ConsentStatus2) {
    ConsentStatus2["Given"] = "gConsent:Given";
    ConsentStatus2["Withdrawn"] = "gConsent:Withdrawn";
  })(ConsentStatus || (ConsentStatus = {}));
  var DataProcessing;
  (function(DataProcessing2) {
    DataProcessing2["Adaptation"] = "gConsent:DataAdaptation";
    DataProcessing2["Alignment"] = "gConsent:DataAlignment";
    DataProcessing2["Alteration"] = "gConsent:DataAlteration";
    DataProcessing2["Collection"] = "gConsent:DataCollection";
    DataProcessing2["Combination"] = "gConsent:DataCombination";
    DataProcessing2["Consultation"] = "gConsent:DataConsultation";
    DataProcessing2["Destruction"] = "gConsent:DataDestruction";
    DataProcessing2["Disclosure"] = "gConsent:DataDisclosure";
    DataProcessing2["Dissemination"] = "gConsent:DataDissemination";
    DataProcessing2["Erasure"] = "gConsent:DataErasure";
    DataProcessing2["Organisation"] = "gConsent:DataOrganisation";
    DataProcessing2["Recording"] = "gConsent:DataRecording";
    DataProcessing2["Restriction"] = "gConsent:DataRestriction";
    DataProcessing2["Retrieval"] = "gConsent:DataRetrieval";
    DataProcessing2["Sharing"] = "gConsent:DataSharing";
    DataProcessing2["Storage"] = "gConsent:DataStorage";
    DataProcessing2["Structuring"] = "gConsent:DataStructuring";
    DataProcessing2["Use"] = "gConsent:DataUse";
  })(DataProcessing || (DataProcessing = {}));
  var Context;
  (function(Context2) {
    Context2["dev"] = "https://api.datavillage.me/consent/context.jsonld";
    Context2["staging"] = "https://api.datavillage.me/consent/context.jsonld";
  })(Context || (Context = {}));

  // node_modules/@datavillage-me/api/dist/esm/types/activityLog.js
  init_dirname();
  init_buffer2();
  init_process2();
  var ActivityLogLevel;
  (function(ActivityLogLevel2) {
    ActivityLogLevel2[ActivityLogLevel2["ERROR"] = 0] = "ERROR";
    ActivityLogLevel2[ActivityLogLevel2["WARNING"] = 1] = "WARNING";
    ActivityLogLevel2[ActivityLogLevel2["INFO"] = 2] = "INFO";
  })(ActivityLogLevel || (ActivityLogLevel = {}));

  // node_modules/@datavillage-me/api/dist/esm/types/jobs.js
  init_dirname();
  init_buffer2();
  init_process2();
  var JobStatus;
  (function(JobStatus2) {
    JobStatus2["ERROR"] = "ERROR";
    JobStatus2["PENDING"] = "PENDING";
    JobStatus2["RUNNING"] = "RUNNING";
    JobStatus2["SUCCESS"] = "SUCCESS";
  })(JobStatus || (JobStatus = {}));

  // node_modules/@datavillage-me/api/dist/esm/types/dataSources.js
  init_dirname();
  init_buffer2();
  init_process2();
  var DATA_SOURCE_TYPE;
  (function(DATA_SOURCE_TYPE2) {
    DATA_SOURCE_TYPE2["PULL"] = "PULL";
    DATA_SOURCE_TYPE2["PUSH"] = "PUSH";
  })(DATA_SOURCE_TYPE || (DATA_SOURCE_TYPE = {}));

  // node_modules/@datavillage-me/api/dist/esm/types/users.js
  init_dirname();
  init_buffer2();
  init_process2();
  var UserRole;
  (function(UserRole2) {
    UserRole2["ADMIN"] = "ADMIN";
    UserRole2["INFRA"] = "INFRA";
    UserRole2["USER"] = "USER";
  })(UserRole || (UserRole = {}));

  // node_modules/@datavillage-me/api/dist/esm/types/developers.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@datavillage-me/api/dist/esm/types/clients.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@datavillage-me/api/dist/esm/types/operator.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@datavillage-me/api/dist/esm/types/collaborationSpace.js
  init_dirname();
  init_buffer2();
  init_process2();
  var InviteStatus;
  (function(InviteStatus2) {
    InviteStatus2["Created"] = "Created";
    InviteStatus2["Accepted"] = "Accepted";
    InviteStatus2["Declined"] = "Declined";
  })(InviteStatus || (InviteStatus = {}));
  var CollaboratorRole;
  (function(CollaboratorRole2) {
    CollaboratorRole2["CodeProvider"] = "CodeProvider";
    CollaboratorRole2["DataProvider"] = "DataProvider";
    CollaboratorRole2["DataConsumer"] = "DataConsumer";
  })(CollaboratorRole || (CollaboratorRole = {}));
  var DataDescriptorKind;
  (function(DataDescriptorKind2) {
    DataDescriptorKind2["Dataset"] = "Dataset";
    DataDescriptorKind2["Custom"] = "Custom";
  })(DataDescriptorKind || (DataDescriptorKind = {}));
  var DataType;
  (function(DataType2) {
    DataType2["Pull"] = "Pull";
    DataType2["Push"] = "Push";
  })(DataType || (DataType = {}));
  var IndividualDataDescriptorType;
  (function(IndividualDataDescriptorType2) {
    IndividualDataDescriptorType2["In"] = "In";
    IndividualDataDescriptorType2["Out"] = "Out";
  })(IndividualDataDescriptorType || (IndividualDataDescriptorType = {}));

  // node_modules/@datavillage-me/api/dist/esm/types/authentication.js
  init_dirname();
  init_buffer2();
  init_process2();
  var SCOPE_DOMAIN;
  (function(SCOPE_DOMAIN2) {
    SCOPE_DOMAIN2["USER"] = "USER";
    SCOPE_DOMAIN2["CLIENT"] = "CLIENT";
    SCOPE_DOMAIN2["DEVELOPER"] = "DEVELOPER";
    SCOPE_DOMAIN2["CONSENT"] = "CONSENT";
  })(SCOPE_DOMAIN || (SCOPE_DOMAIN = {}));
  var SCOPE_USER_ALL = SCOPE_DOMAIN.USER + ":*";
  var SCOPE_DEVELOPER_ALL = SCOPE_DOMAIN.DEVELOPER + ":*";
  var DEVELOPER_IDENTITY_PROVIDER;
  (function(DEVELOPER_IDENTITY_PROVIDER2) {
    DEVELOPER_IDENTITY_PROVIDER2["Github"] = "github";
    DEVELOPER_IDENTITY_PROVIDER2["OAuth"] = "oauth";
  })(DEVELOPER_IDENTITY_PROVIDER || (DEVELOPER_IDENTITY_PROVIDER = {}));

  // node_modules/@datavillage-me/api/dist/esm/types/data.js
  init_dirname();
  init_buffer2();
  init_process2();
  var WK_NAMESPACE_URIS;
  (function(WK_NAMESPACE_URIS2) {
    WK_NAMESPACE_URIS2["dv"] = "https://api.datavillage.me/";
    WK_NAMESPACE_URIS2["schema"] = "https://schema.org/";
    WK_NAMESPACE_URIS2["gConsent"] = "https://w3id.org/GConsent#";
    WK_NAMESPACE_URIS2["dvConsent"] = "https://datavillage.me/consent#";
    WK_NAMESPACE_URIS2["consents"] = "https://api.datavillage.me/consents/";
  })(WK_NAMESPACE_URIS || (WK_NAMESPACE_URIS = {}));
  var CONTENT_TYPES;
  (function(CONTENT_TYPES2) {
    CONTENT_TYPES2["text"] = "text/plain";
    CONTENT_TYPES2["turtle"] = "text/turtle";
    CONTENT_TYPES2["rdf_xml"] = "application/rdf+xml";
    CONTENT_TYPES2["json"] = "application/json";
    CONTENT_TYPES2["nq"] = "application/n-quads";
    CONTENT_TYPES2["n3"] = "text/n3";
    CONTENT_TYPES2["nt"] = "application/n-triples";
  })(CONTENT_TYPES || (CONTENT_TYPES = {}));

  // node_modules/@datavillage-me/api/dist/esm/types/roles.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@datavillage-me/api/dist/esm/types/dataset.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@datavillage-me/api/dist/esm/types/connector.js
  init_dirname();
  init_buffer2();
  init_process2();

  // node_modules/@datavillage-me/api/dist/esm/types/recommendations.js
  init_dirname();
  init_buffer2();
  init_process2();
  var jsonld = __toESM(require_jsonld(), 1);

  // node_modules/@datavillage-me/api/dist/esm/lib.js
  init_dirname();
  init_buffer2();
  init_process2();
  var fixed_util = { ...dist_exports };

  // node_modules/@datavillage-me/api/dist/esm/index.js
  function getRemoteClient(apiUrlStr, idToken2, authMode) {
    const apiURL = new URL(apiUrlStr);
    if (apiURL.protocol == "mock:") {
      const userId = apiURL.pathname;
      return getMockClient(userId);
    } else {
      const httpClient = new HttpClient(apiUrlStr, idToken2, authMode);
      return {
        httpClient,
        getConsentsServices: () => new HttpConsentsServices(httpClient),
        getConsentReceiptsServices: () => new HttpConsentReceiptsServices(httpClient),
        getCredentialManager: () => new HttpCredentialManager(httpClient),
        getDataBridge: () => new HttpDataBridge(httpClient),
        getPassport: () => new HttpPassport(httpClient),
        getUsersServices: () => new HttpUsersServices(httpClient),
        getUsersMgmtService: () => new HttpUsersMgmtServices(httpClient),
        getClientsServices: () => new HttpClientsServices(httpClient),
        getActivityLog: () => new HttpActivityLogServices(httpClient),
        getJobsService: () => new HttpJobsServices(httpClient),
        getDevelopersServices: () => new HttpDevelopersServices(httpClient),
        getCollaborationSpacesServices: () => new HttpCollaborationSpacesServices(httpClient),
        getOperatorServices: () => new HttpOperatorServices(httpClient),
        getDatasetServices: () => new HttpDatasetServices(httpClient),
        getConnectorServices: () => new HttpConnectorServices(httpClient)
      };
    }
  }

  // node_modules/@muze-nl/assert/src/assert.mjs
  init_dirname();
  init_buffer2();
  init_process2();
  globalThis.assertEnabled = false;
  function assert3(source, test) {
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
    } catch (e2) {
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
  function error(message, found, expected, path, problems) {
    let result = {
      message,
      found,
      expected,
      path
    };
    if (problems) {
      result.problems = problems;
    }
    return result;
  }

  // src/jouwid.mjs
  var namespace = "sndk:";
  var datavillageApiUrl = "https://api.sndk-dev.datavillage.me";
  var idpURL = "https://idp.dev.jouw.id";
  var storage;
  var remoteClient;
  var idToken;
  var user;
  async function login(options = {}) {
    const validOptions = {
      client_id: Required(String),
      client_secret: Required(String),
      idpRedirect: Optional(instanceOf(Function)),
      silent: Optional(Boolean),
      keepLoggedIn: Optional(Boolean)
    };
    assert3(options, validOptions);
    const defaultOptions = {
      idpRedirect: (url2) => window.location.replace(url2),
      silent: false,
      keepLoggedIn: true
    };
    options = Object.assign({}, defaultOptions, options);
    const url = new URL(location.href);
    const searchParams = new URLSearchParams(url.search);
    if (!storage) {
      storage = tokenStorage(options.keepLoggedIn ? "local" : "session");
    }
    const forwardedToken = searchParams.get("token");
    if (forwardedToken) {
      storage.set("id_token", forwardedToken, "local");
    }
    const storedToken = storage.get("id_token", "", "local");
    if (storedToken && storedToken !== idToken) {
      idToken = storedToken;
    }
    if (!remoteClient) {
      const newClient = getRemoteClient(
        datavillageApiUrl,
        idToken ?? void 0,
        "AuthBearer"
      );
      remoteClient = newClient;
    }
    if (!remoteClient) {
      return false;
    }
    user = await remoteClient.getPassport().getCurrentUser();
    if (!user && !options.silent) {
      user = await redirectToLogin(options.idpRedirect);
    }
    return user;
  }
  function isLoggedIn(options = {}) {
    const validOptions = {
      keepLoggedIn: Optional(Boolean)
    };
    assert3(options, validOptions);
    if (!storage) {
      storage = tokenStorage(options.keepLoggedIn ? "local" : "session");
    }
    return storage.get("id_token") ?? false;
  }
  async function logout(options) {
    const defaultOptions = {
      redirectURL: "/"
    };
    const validOptions = {
      redirectURL: Optional(oneOf(validURL, validRelativeURL))
    };
    assert3(options, validOptions);
    options = Object.assign({}, defaultOptions, options);
    if (remoteClient) {
      storage.remove("id_token", "local");
      await remoteClient.getPassport().logout();
      await fetch(new URL("/logout", idpURL), {
        method: "GET"
      });
      setUser(null);
      if (options.redirectURL) {
        window.location = options.redirectURL;
      }
    }
  }
  async function getProtectedResource(options) {
    const defaultOptions = {};
    const validOptions = {
      resourcePath: Required(String)
    };
    assert3(options, validOptions);
    options = Object.assign({}, defaultOptions, options);
    if (remoteClient && user?.id) {
      const pod = await remoteClient.getUsersServices().getPodInstance(user.id, MASTER_POD_ALIAS);
      const resource = await pod.getFile(options.resourcePath);
      if (resource.metadata.contentType.match(/^application\/(.*\+)?json/)) {
        return resource.content.json();
      } else if (resource.metadata.contentType.match(/^text\//)) {
        return resource.content.text();
      } else {
        return resource.content;
      }
    }
    return false;
  }
  var tokenStorage = function(type) {
    const typeStorage = type === "local" ? localStorage : sessionStorage;
    return {
      get(key, defaultValue) {
        try {
          const value = typeStorage.getItem(namespace + key);
          if (value === null) {
            return defaultValue;
          }
          return JSON.parse(value);
        } catch (e2) {
          console.warn(`Reading from ${type}Storage failed`, e2);
          return defaultValue;
        }
      },
      set(key, value) {
        try {
          typeStorage.setItem(namespace + key, JSON.stringify(value));
        } catch (e2) {
          console.warn(`Saving to ${type}Storage failed`, e2);
        }
      },
      remove(key) {
        try {
          typeStorage.removeItem(namespace + key);
        } catch (e2) {
          console.warn(`Removing from ${type}Storage failed`, e2);
        }
      }
    };
  };
  async function redirectToLogin(redirectFn) {
    const redirectURL = `CODEREDIRECT:${window.location.href}`;
    const loginURL = await remoteClient?.getPassport()?.getAuthenticationUrl(
      redirectURL,
      "inrupt",
      new URL("/", idpURL)
    );
    return redirectFn(loginURL + `${loginURL.includes("?") ? "&" : "?"}referrer=${window.location.href}`);
  }
  var validRelativeURL = (url) => {
    let base = new URL("/", window.location.href);
    return validURL(base.href + url);
  };

  // src/browser.mjs
  globalThis.jouwid = {
    login,
    isLoggedIn,
    logout,
    getProtectedResource
  };
})();
/*! Bundled license information:

@jspm/core/nodelibs/browser/chunk-DtuTasat.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

rdf-canonize/lib/MessageDigest-browser.js:
  (*!
   * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
   *)

rdf-canonize/lib/Permuter.js:
  (*!
   * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
   *)

rdf-canonize/lib/NQuads.js:
  (*!
   * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
   *)

rdf-canonize/lib/URDNA2015.js:
  (*!
   * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
   *)

rdf-canonize/lib/URGNA2012.js:
  (*!
   * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
   *)

rdf-canonize/lib/URDNA2015Sync.js:
  (*!
   * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
   *)

rdf-canonize/lib/URGNA2012Sync.js:
  (*!
   * Copyright (c) 2016-2021 Digital Bazaar, Inc. All rights reserved.
   *)

jsonld/lib/context.js:
  (* disallow aliasing @context and @preserve *)

jsonld/lib/frame.js:
  (* remove @preserve from results *)
  (**
   * Removes the @preserve keywords from expanded result of framing.
   *
   * @param input the framed, framed output.
   * @param options the framing options used.
   *
   * @return the resulting output.
   *)
  (* remove @preserve *)

jsonld/lib/jsonld.js:
  (**
   * A JavaScript implementation of the JSON-LD API.
   *
   * @author Dave Longley
   *
   * @license BSD 3-Clause License
   * Copyright (c) 2011-2022 Digital Bazaar, Inc.
   * All rights reserved.
   *
   * Redistribution and use in source and binary forms, with or without
   * modification, are permitted provided that the following conditions are met:
   *
   * Redistributions of source code must retain the above copyright notice,
   * this list of conditions and the following disclaimer.
   *
   * Redistributions in binary form must reproduce the above copyright
   * notice, this list of conditions and the following disclaimer in the
   * documentation and/or other materials provided with the distribution.
   *
   * Neither the name of the Digital Bazaar, Inc. nor the names of its
   * contributors may be used to endorse or promote products derived from
   * this software without specific prior written permission.
   *
   * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
   * IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED
   * TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
   * PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
   * HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
   * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
   * TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
   * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
   * LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
   * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
   * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
   *)
*/
//# sourceMappingURL=bundle-dev.js.map

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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(3);
var isBuffer = __webpack_require__(21);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(26);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  // Only Node.JS has a process variable that is of [[Class]] process
  if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(7);
  } else if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(7);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var settle = __webpack_require__(27);
var buildURL = __webpack_require__(4);
var parseHeaders = __webpack_require__(29);
var isURLSameOrigin = __webpack_require__(30);
var createError = __webpack_require__(8);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(31);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(28);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  utils.forEach(['url', 'method', 'params', 'data'], function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(['headers', 'auth', 'proxy'], function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach([
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'maxContentLength',
    'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken',
    'socketPath'
  ], function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 Highcharts JS v7.2.0 (2019-09-03)

 (c) 2009-2018 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(P,N){"object"===typeof module&&module.exports?(N["default"]=N,module.exports=P.document?N(P):N): true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return N(P)}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):(P.Highcharts&&P.Highcharts.error(16,!0),P.Highcharts=N(P))})("undefined"!==typeof window?window:this,function(P){function N(c,n,A,D){c.hasOwnProperty(n)||(c[n]=D.apply(null,A))}var H={};N(H,"parts/Globals.js",[],function(){var c="undefined"!==typeof P?P:"undefined"!==typeof window?window:{},n=c.document,
A=c.navigator&&c.navigator.userAgent||"",D=n&&n.createElementNS&&!!n.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,F=/(edge|msie|trident)/i.test(A)&&!c.opera,z=-1!==A.indexOf("Firefox"),u=-1!==A.indexOf("Chrome"),L=z&&4>parseInt(A.split("Firefox/")[1],10);return{product:"Highcharts",version:"7.2.0",deg2rad:2*Math.PI/360,doc:n,hasBidiBug:L,hasTouch:!!c.TouchEvent,isMS:F,isWebKit:-1!==A.indexOf("AppleWebKit"),isFirefox:z,isChrome:u,isSafari:!u&&-1!==A.indexOf("Safari"),isTouchDevice:/(Mobile|Android|Windows Phone)/.test(A),
SVG_NS:"http://www.w3.org/2000/svg",chartCount:0,seriesTypes:{},symbolSizes:{},svg:D,win:c,marginNames:["plotTop","marginRight","marginBottom","plotLeft"],noop:function(){},charts:[],dateFormats:{}}});N(H,"parts/Utilities.js",[H["parts/Globals.js"]],function(c){function n(b,a){return parseInt(b,a||10)}function A(b){return"string"===typeof b}function D(b){b=Object.prototype.toString.call(b);return"[object Array]"===b||"[object Array Iterator]"===b}function F(b,a){return!!b&&"object"===typeof b&&(!a||
!D(b))}function z(b){return F(b)&&"number"===typeof b.nodeType}function u(b){var a=b&&b.constructor;return!(!F(b,!0)||z(b)||!a||!a.name||"Object"===a.name)}function L(b){return"number"===typeof b&&!isNaN(b)&&Infinity>b&&-Infinity<b}function y(b){return"undefined"!==typeof b&&null!==b}function C(b,a,d){var f;A(a)?y(d)?b.setAttribute(a,d):b&&b.getAttribute&&((f=b.getAttribute(a))||"class"!==a||(f=b.getAttribute(a+"Name"))):x(a,function(a,d){b.setAttribute(d,a)});return f}function x(b,a,d){for(var f in b)Object.hasOwnProperty.call(b,
f)&&a.call(d||b[f],b[f],f,b)}c.timers=[];var m=c.charts,p=c.doc,g=c.win;c.error=function(b,a,d){var f=L(b)?"Highcharts error #"+b+": www.highcharts.com/errors/"+b:b,e=function(){if(a)throw Error(f);g.console&&console.log(f)};d?c.fireEvent(d,"displayError",{code:b,message:f},e):e()};c.Fx=function(b,a,d){this.options=a;this.elem=b;this.prop=d};c.Fx.prototype={dSetter:function(){var b=this.paths[0],a=this.paths[1],d=[],f=this.now,e=b.length;if(1===f)d=this.toD;else if(e===a.length&&1>f)for(;e--;){var c=
parseFloat(b[e]);d[e]=isNaN(c)?a[e]:f*parseFloat(""+(a[e]-c))+c}else d=a;this.elem.attr("d",d,null,!0)},update:function(){var b=this.elem,a=this.prop,d=this.now,f=this.options.step;if(this[a+"Setter"])this[a+"Setter"]();else b.attr?b.element&&b.attr(a,d,null,!0):b.style[a]=d+this.unit;f&&f.call(b,d,this)},run:function(b,a,d){var f=this,e=f.options,h=function(a){return h.stopped?!1:f.step(a)},r=g.requestAnimationFrame||function(a){setTimeout(a,13)},E=function(){for(var a=0;a<c.timers.length;a++)c.timers[a]()||
c.timers.splice(a--,1);c.timers.length&&r(E)};b!==a||this.elem["forceAnimate:"+this.prop]?(this.startTime=+new Date,this.start=b,this.end=a,this.unit=d,this.now=this.start,this.pos=0,h.elem=this.elem,h.prop=this.prop,h()&&1===c.timers.push(h)&&r(E)):(delete e.curAnim[this.prop],e.complete&&0===Object.keys(e.curAnim).length&&e.complete.call(this.elem))},step:function(b){var a=+new Date,d=this.options,f=this.elem,e=d.complete,c=d.duration,r=d.curAnim;if(f.attr&&!f.element)b=!1;else if(b||a>=c+this.startTime){this.now=
this.end;this.pos=1;this.update();var E=r[this.prop]=!0;x(r,function(a){!0!==a&&(E=!1)});E&&e&&e.call(f);b=!1}else this.pos=d.easing((a-this.startTime)/c),this.now=this.start+(this.end-this.start)*this.pos,this.update(),b=!0;return b},initPath:function(b,a,d){function f(a){for(t=a.length;t--;){var b="M"===a[t]||"L"===a[t];var d=/[a-zA-Z]/.test(a[t+3]);b&&d&&a.splice(t+1,0,a[t+1],a[t+2],a[t+1],a[t+2])}}function e(a,b){for(;a.length<J;){a[0]=b[J-a.length];var d=a.slice(0,v);[].splice.apply(a,[0,0].concat(d));
B&&(d=a.slice(a.length-v),[].splice.apply(a,[a.length,0].concat(d)),t--)}a[0]="M"}function c(a,b){for(var d=(J-a.length)/v;0<d&&d--;)k=a.slice().splice(a.length/I-v,v*I),k[0]=b[J-v-d*v],q&&(k[v-6]=k[v-2],k[v-5]=k[v-1]),[].splice.apply(a,[a.length/I,0].concat(k)),B&&d--}a=a||"";var r=b.startX,E=b.endX,q=-1<a.indexOf("C"),v=q?7:3,k,t;a=a.split(" ");d=d.slice();var B=b.isArea,I=B?2:1;q&&(f(a),f(d));if(r&&E){for(t=0;t<r.length;t++)if(r[t]===E[0]){var w=t;break}else if(r[0]===E[E.length-r.length+t]){w=
t;var l=!0;break}else if(r[r.length-1]===E[E.length-r.length+t]){w=r.length-t;break}"undefined"===typeof w&&(a=[])}if(a.length&&L(w)){var J=d.length+w*I*v;l?(e(a,d),c(d,a)):(e(d,a),c(a,d))}return[a,d]},fillSetter:function(){c.Fx.prototype.strokeSetter.apply(this,arguments)},strokeSetter:function(){this.elem.attr(this.prop,c.color(this.start).tweenTo(c.color(this.end),this.pos),null,!0)}};c.merge=function(){var b,a=arguments,d={},f=function(a,b){"object"!==typeof a&&(a={});x(b,function(d,e){!F(d,!0)||
u(d)||z(d)?a[e]=b[e]:a[e]=f(a[e]||{},d)});return a};!0===a[0]&&(d=a[1],a=Array.prototype.slice.call(a,2));var e=a.length;for(b=0;b<e;b++)d=f(d,a[b]);return d};c.syncTimeout=function(b,a,d){if(a)return setTimeout(b,a,d);b.call(0,d)};c.clearTimeout=function(b){y(b)&&clearTimeout(b)};c.extend=function(b,a){var d;b||(b={});for(d in a)b[d]=a[d];return b};c.pick=function(){var b=arguments,a,d=b.length;for(a=0;a<d;a++){var f=b[a];if("undefined"!==typeof f&&null!==f)return f}};c.css=function(b,a){c.isMS&&
!c.svg&&a&&"undefined"!==typeof a.opacity&&(a.filter="alpha(opacity="+100*a.opacity+")");c.extend(b.style,a)};c.createElement=function(b,a,d,f,e){b=p.createElement(b);var h=c.css;a&&c.extend(b,a);e&&h(b,{padding:"0",border:"none",margin:"0"});d&&h(b,d);f&&f.appendChild(b);return b};c.extendClass=function(b,a){var d=function(){};d.prototype=new b;c.extend(d.prototype,a);return d};c.pad=function(b,a,d){return Array((a||2)+1-String(b).replace("-","").length).join(d||"0")+b};c.relativeLength=function(b,
a,d){return/%$/.test(b)?a*parseFloat(b)/100+(d||0):parseFloat(b)};c.wrap=function(b,a,d){var f=b[a];b[a]=function(){var a=Array.prototype.slice.call(arguments),b=arguments,c=this;c.proceed=function(){f.apply(c,arguments.length?arguments:b)};a.unshift(f);a=d.apply(this,a);c.proceed=null;return a}};c.datePropsToTimestamps=function(b){x(b,function(a,d){F(a)&&"function"===typeof a.getTime?b[d]=a.getTime():(F(a)||D(a))&&c.datePropsToTimestamps(a)})};c.formatSingle=function(b,a,d){var f=/\.([0-9])/,e=c.defaultOptions.lang;
/f$/.test(b)?(d=(d=b.match(f))?d[1]:-1,null!==a&&(a=c.numberFormat(a,d,e.decimalPoint,-1<b.indexOf(",")?e.thousandsSep:""))):a=(d||c.time).dateFormat(b,a);return a};c.format=function(b,a,d){for(var f="{",e=!1,h,r,E,q,v=[],k;b;){f=b.indexOf(f);if(-1===f)break;h=b.slice(0,f);if(e){h=h.split(":");r=h.shift().split(".");q=r.length;k=a;for(E=0;E<q;E++)k&&(k=k[r[E]]);h.length&&(k=c.formatSingle(h.join(":"),k,d));v.push(k)}else v.push(h);b=b.slice(f+1);f=(e=!e)?"}":"{"}v.push(b);return v.join("")};c.getMagnitude=
function(b){return Math.pow(10,Math.floor(Math.log(b)/Math.LN10))};c.normalizeTickInterval=function(b,a,d,f,e){var h=b;d=c.pick(d,1);var r=b/d;a||(a=e?[1,1.2,1.5,2,2.5,3,4,5,6,8,10]:[1,2,2.5,5,10],!1===f&&(1===d?a=a.filter(function(a){return 0===a%1}):.1>=d&&(a=[1/d])));for(f=0;f<a.length&&!(h=a[f],e&&h*d>=b||!e&&r<=(a[f]+(a[f+1]||a[f]))/2);f++);return h=c.correctFloat(h*d,-Math.round(Math.log(.001)/Math.LN10))};c.stableSort=function(b,a){var d=b.length,f,e;for(e=0;e<d;e++)b[e].safeI=e;b.sort(function(b,
d){f=a(b,d);return 0===f?b.safeI-d.safeI:f});for(e=0;e<d;e++)delete b[e].safeI};c.arrayMin=function(b){for(var a=b.length,d=b[0];a--;)b[a]<d&&(d=b[a]);return d};c.arrayMax=function(b){for(var a=b.length,d=b[0];a--;)b[a]>d&&(d=b[a]);return d};c.destroyObjectProperties=function(b,a){x(b,function(d,f){d&&d!==a&&d.destroy&&d.destroy();delete b[f]})};c.discardElement=function(b){var a=c.garbageBin;a||(a=c.createElement("div"));b&&a.appendChild(b);a.innerHTML=""};c.correctFloat=function(b,a){return parseFloat(b.toPrecision(a||
14))};c.setAnimation=function(b,a){a.renderer.globalAnimation=c.pick(b,a.options.chart.animation,!0)};c.animObject=function(b){return F(b)?c.merge(b):{duration:b?500:0}};c.timeUnits={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5,month:24192E5,year:314496E5};c.numberFormat=function(b,a,d,f){b=+b||0;a=+a;var e=c.defaultOptions.lang,h=(b.toString().split(".")[1]||"").split("e")[0].length,r=b.toString().split("e");if(-1===a)a=Math.min(h,20);else if(!L(a))a=2;else if(a&&r[1]&&0>r[1]){var m=
a+ +r[1];0<=m?(r[0]=(+r[0]).toExponential(m).split("e")[0],a=m):(r[0]=r[0].split(".")[0]||0,b=20>a?(r[0]*Math.pow(10,r[1])).toFixed(a):0,r[1]=0)}var q=(Math.abs(r[1]?r[0]:b)+Math.pow(10,-Math.max(a,h)-1)).toFixed(a);h=String(n(q));m=3<h.length?h.length%3:0;d=c.pick(d,e.decimalPoint);f=c.pick(f,e.thousandsSep);b=(0>b?"-":"")+(m?h.substr(0,m)+f:"");b+=h.substr(m).replace(/(\d{3})(?=\d)/g,"$1"+f);a&&(b+=d+q.slice(-a));r[1]&&0!==+b&&(b+="e"+r[1]);return b};Math.easeInOutSine=function(b){return-.5*(Math.cos(Math.PI*
b)-1)};c.getStyle=function(b,a,d){if("width"===a)return a=Math.min(b.offsetWidth,b.scrollWidth),d=b.getBoundingClientRect&&b.getBoundingClientRect().width,d<a&&d>=a-1&&(a=Math.floor(d)),Math.max(0,a-c.getStyle(b,"padding-left")-c.getStyle(b,"padding-right"));if("height"===a)return Math.max(0,Math.min(b.offsetHeight,b.scrollHeight)-c.getStyle(b,"padding-top")-c.getStyle(b,"padding-bottom"));g.getComputedStyle||c.error(27,!0);if(b=g.getComputedStyle(b,void 0))b=b.getPropertyValue(a),c.pick(d,"opacity"!==
a)&&(b=n(b));return b};c.inArray=function(b,a,d){return a.indexOf(b,d)};c.find=Array.prototype.find?function(b,a){return b.find(a)}:function(b,a){var d,f=b.length;for(d=0;d<f;d++)if(a(b[d],d))return b[d]};c.keys=Object.keys;c.offset=function(b){var a=p.documentElement;b=b.parentElement||b.parentNode?b.getBoundingClientRect():{top:0,left:0};return{top:b.top+(g.pageYOffset||a.scrollTop)-(a.clientTop||0),left:b.left+(g.pageXOffset||a.scrollLeft)-(a.clientLeft||0)}};c.stop=function(b,a){for(var d=c.timers.length;d--;)c.timers[d].elem!==
b||a&&a!==c.timers[d].prop||(c.timers[d].stopped=!0)};x({map:"map",each:"forEach",grep:"filter",reduce:"reduce",some:"some"},function(b,a){c[a]=function(a){return Array.prototype[b].apply(a,[].slice.call(arguments,1))}});c.addEvent=function(b,a,d,f){void 0===f&&(f={});var e=b.addEventListener||c.addEventListenerPolyfill;var h="function"===typeof b&&b.prototype?b.prototype.protoEvents=b.prototype.protoEvents||{}:b.hcEvents=b.hcEvents||{};c.Point&&b instanceof c.Point&&b.series&&b.series.chart&&(b.series.chart.runTrackerClick=
!0);e&&e.call(b,a,d,!1);h[a]||(h[a]=[]);h[a].push({fn:d,order:"number"===typeof f.order?f.order:Infinity});h[a].sort(function(a,b){return a.order-b.order});return function(){c.removeEvent(b,a,d)}};c.removeEvent=function(b,a,d){function f(a,d){var e=b.removeEventListener||c.removeEventListenerPolyfill;e&&e.call(b,a,d,!1)}function e(d){var e;if(b.nodeName){if(a){var c={};c[a]=!0}else c=d;x(c,function(a,b){if(d[b])for(e=d[b].length;e--;)f(b,d[b][e].fn)})}}var h;["protoEvents","hcEvents"].forEach(function(c){var r=
b[c];r&&(a?(h=r[a]||[],d?(r[a]=h.filter(function(a){return d!==a.fn}),f(a,d)):(e(r),r[a]=[])):(e(r),b[c]={}))})};c.fireEvent=function(b,a,d,f){var e;d=d||{};if(p.createEvent&&(b.dispatchEvent||b.fireEvent)){var h=p.createEvent("Events");h.initEvent(a,!0,!0);c.extend(h,d);b.dispatchEvent?b.dispatchEvent(h):b.fireEvent(a,h)}else d.target||c.extend(d,{preventDefault:function(){d.defaultPrevented=!0},target:b,type:a}),function(a,f){void 0===a&&(a=[]);void 0===f&&(f=[]);var c=0,h=0,k=a.length+f.length;
for(e=0;e<k;e++)!1===(a[c]?f[h]?a[c].order<=f[h].order?a[c++]:f[h++]:a[c++]:f[h++]).fn.call(b,d)&&d.preventDefault()}(b.protoEvents&&b.protoEvents[a],b.hcEvents&&b.hcEvents[a]);f&&!d.defaultPrevented&&f.call(b,d)};c.animate=function(b,a,d){var f,e="",h,r;if(!F(d)){var m=arguments;d={duration:m[2],easing:m[3],complete:m[4]}}L(d.duration)||(d.duration=400);d.easing="function"===typeof d.easing?d.easing:Math[d.easing]||Math.easeInOutSine;d.curAnim=c.merge(a);x(a,function(q,v){c.stop(b,v);r=new c.Fx(b,
d,v);h=null;"d"===v?(r.paths=r.initPath(b,b.d,a.d),r.toD=a.d,f=0,h=1):b.attr?f=b.attr(v):(f=parseFloat(c.getStyle(b,v))||0,"opacity"!==v&&(e="px"));h||(h=q);h&&h.match&&h.match("px")&&(h=h.replace(/px/g,""));r.run(f,h,e)})};c.seriesType=function(b,a,d,f,e){var h=c.getOptions(),r=c.seriesTypes;h.plotOptions[b]=c.merge(h.plotOptions[a],d);r[b]=c.extendClass(r[a]||function(){},f);r[b].prototype.type=b;e&&(r[b].prototype.pointClass=c.extendClass(c.Point,e));return r[b]};c.uniqueKey=function(){var b=Math.random().toString(36).substring(2,
9),a=0;return function(){return"highcharts-"+b+"-"+a++}}();c.isFunction=function(b){return"function"===typeof b};g.jQuery&&(g.jQuery.fn.highcharts=function(){var b=[].slice.call(arguments);if(this[0])return b[0]?(new (c[A(b[0])?b.shift():"Chart"])(this[0],b[0],b[1]),this):m[C(this[0],"data-highcharts-chart")]});return{attr:C,defined:y,erase:function(b,a){for(var d=b.length;d--;)if(b[d]===a){b.splice(d,1);break}},isArray:D,isClass:u,isDOMElement:z,isNumber:L,isObject:F,isString:A,objectEach:x,pInt:n,
splat:function(b){return D(b)?b:[b]}}});N(H,"parts/Color.js",[H["parts/Globals.js"],H["parts/Utilities.js"]],function(c,n){var A=n.isNumber,D=n.pInt,F=c.merge;c.Color=function(z){if(!(this instanceof c.Color))return new c.Color(z);this.init(z)};c.Color.prototype={parsers:[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(c){return[D(c[1]),D(c[2]),D(c[3]),parseFloat(c[4],10)]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
parse:function(c){return[D(c[1]),D(c[2]),D(c[3]),1]}}],names:{white:"#ffffff",black:"#000000"},init:function(z){var u,n;if((this.input=z=this.names[z&&z.toLowerCase?z.toLowerCase():""]||z)&&z.stops)this.stops=z.stops.map(function(x){return new c.Color(x[1])});else{if(z&&z.charAt&&"#"===z.charAt()){var y=z.length;z=parseInt(z.substr(1),16);7===y?u=[(z&16711680)>>16,(z&65280)>>8,z&255,1]:4===y&&(u=[(z&3840)>>4|(z&3840)>>8,(z&240)>>4|z&240,(z&15)<<4|z&15,1])}if(!u)for(n=this.parsers.length;n--&&!u;){var C=
this.parsers[n];(y=C.regex.exec(z))&&(u=C.parse(y))}}this.rgba=u||[]},get:function(c){var u=this.input,z=this.rgba;if(this.stops){var y=F(u);y.stops=[].concat(y.stops);this.stops.forEach(function(u,x){y.stops[x]=[y.stops[x][0],u.get(c)]})}else y=z&&A(z[0])?"rgb"===c||!c&&1===z[3]?"rgb("+z[0]+","+z[1]+","+z[2]+")":"a"===c?z[3]:"rgba("+z.join(",")+")":u;return y},brighten:function(c){var u,z=this.rgba;if(this.stops)this.stops.forEach(function(u){u.brighten(c)});else if(A(c)&&0!==c)for(u=0;3>u;u++)z[u]+=
D(255*c),0>z[u]&&(z[u]=0),255<z[u]&&(z[u]=255);return this},setOpacity:function(c){this.rgba[3]=c;return this},tweenTo:function(c,u){var z=this.rgba,y=c.rgba;y.length&&z&&z.length?(c=1!==y[3]||1!==z[3],u=(c?"rgba(":"rgb(")+Math.round(y[0]+(z[0]-y[0])*(1-u))+","+Math.round(y[1]+(z[1]-y[1])*(1-u))+","+Math.round(y[2]+(z[2]-y[2])*(1-u))+(c?","+(y[3]+(z[3]-y[3])*(1-u)):"")+")"):u=c.input||"none";return u}};c.color=function(z){return new c.Color(z)}});N(H,"parts/SvgRenderer.js",[H["parts/Globals.js"],
H["parts/Utilities.js"]],function(c,n){var A=n.attr,D=n.defined,F=n.erase,z=n.isArray,u=n.isNumber,L=n.isObject,y=n.isString,C=n.objectEach,x=n.pInt,m=n.splat,p=c.addEvent,g=c.animate,b=c.charts,a=c.color,d=c.css,f=c.createElement,e=c.deg2rad,h=c.destroyObjectProperties,r=c.doc,E=c.extend,q=c.hasTouch,v=c.isFirefox,k=c.isMS,t=c.isWebKit,B=c.merge,I=c.noop,w=c.pick,l=c.removeEvent,J=c.stop,K=c.svg,T=c.SVG_NS,R=c.symbolSizes,S=c.win;var M=c.SVGElement=function(){return this};E(M.prototype,{opacity:1,
SVG_NS:T,textProps:"direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline cursor".split(" "),init:function(a,b){this.element="span"===b?f(b):r.createElementNS(this.SVG_NS,b);this.renderer=a;c.fireEvent(this,"afterInit")},animate:function(a,b,d){var G=c.animObject(w(b,this.renderer.globalAnimation,!0));w(r.hidden,r.msHidden,r.webkitHidden,!1)&&(G.duration=0);0!==G.duration?(d&&(G.complete=d),g(this,a,G)):(this.attr(a,void 0,d),C(a,
function(a,b){G.step&&G.step.call(this,a,{prop:b,pos:1})},this));return this},complexColor:function(a,b,d){var G=this.renderer,l,w,e,f,k,O,t,h,J,K,r,Q=[],M;c.fireEvent(this.renderer,"complexColor",{args:arguments},function(){a.radialGradient?w="radialGradient":a.linearGradient&&(w="linearGradient");w&&(e=a[w],k=G.gradients,t=a.stops,K=d.radialReference,z(e)&&(a[w]=e={x1:e[0],y1:e[1],x2:e[2],y2:e[3],gradientUnits:"userSpaceOnUse"}),"radialGradient"===w&&K&&!D(e.gradientUnits)&&(f=e,e=B(e,G.getRadialAttr(K,
f),{gradientUnits:"userSpaceOnUse"})),C(e,function(a,G){"id"!==G&&Q.push(G,a)}),C(t,function(a){Q.push(a)}),Q=Q.join(","),k[Q]?r=k[Q].attr("id"):(e.id=r=c.uniqueKey(),k[Q]=O=G.createElement(w).attr(e).add(G.defs),O.radAttr=f,O.stops=[],t.forEach(function(a){0===a[1].indexOf("rgba")?(l=c.color(a[1]),h=l.get("rgb"),J=l.get("a")):(h=a[1],J=1);a=G.createElement("stop").attr({offset:a[0],"stop-color":h,"stop-opacity":J}).add(O);O.stops.push(a)})),M="url("+G.url+"#"+r+")",d.setAttribute(b,M),d.gradient=
Q,a.toString=function(){return M})})},applyTextOutline:function(a){var b=this.element,G;-1!==a.indexOf("contrast")&&(a=a.replace(/contrast/g,this.renderer.getContrast(b.style.fill)));a=a.split(" ");var d=a[a.length-1];if((G=a[0])&&"none"!==G&&c.svg){this.fakeTS=!0;a=[].slice.call(b.getElementsByTagName("tspan"));this.ySetter=this.xSetter;G=G.replace(/(^[\d\.]+)(.*?)$/g,function(a,b,G){return 2*b+G});this.removeTextOutline(a);var w=b.firstChild;a.forEach(function(a,l){0===l&&(a.setAttribute("x",b.getAttribute("x")),
l=b.getAttribute("y"),a.setAttribute("y",l||0),null===l&&b.setAttribute("y",0));a=a.cloneNode(1);A(a,{"class":"highcharts-text-outline",fill:d,stroke:d,"stroke-width":G,"stroke-linejoin":"round"});b.insertBefore(a,w)})}},removeTextOutline:function(a){for(var b=a.length,G;b--;)G=a[b],"highcharts-text-outline"===G.getAttribute("class")&&F(a,this.element.removeChild(G))},symbolCustomAttribs:"x y width height r start end innerR anchorX anchorY rounded".split(" "),attr:function(a,b,d,l){var G=this.element,
w,e=this,f,k,O=this.symbolCustomAttribs;if("string"===typeof a&&void 0!==b){var t=a;a={};a[t]=b}"string"===typeof a?e=(this[a+"Getter"]||this._defaultGetter).call(this,a,G):(C(a,function(b,d){f=!1;l||J(this,d);this.symbolName&&-1!==c.inArray(d,O)&&(w||(this.symbolAttr(a),w=!0),f=!0);!this.rotation||"x"!==d&&"y"!==d||(this.doTransform=!0);f||(k=this[d+"Setter"]||this._defaultSetter,k.call(this,b,d,G),!this.styledMode&&this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(d)&&this.updateShadows(d,
b,k))},this),this.afterSetters());d&&d.call(this);return e},afterSetters:function(){this.doTransform&&(this.updateTransform(),this.doTransform=!1)},updateShadows:function(a,b,d){for(var G=this.shadows,l=G.length;l--;)d.call(G[l],"height"===a?Math.max(b-(G[l].cutHeight||0),0):"d"===a?this.d:b,a,G[l])},addClass:function(a,b){var d=this.attr("class")||"";b||(a=(a||"").split(/ /g).reduce(function(a,b){-1===d.indexOf(b)&&a.push(b);return a},d?[d]:[]).join(" "));a!==d&&this.attr("class",a);return this},
hasClass:function(a){return-1!==(this.attr("class")||"").split(" ").indexOf(a)},removeClass:function(a){return this.attr("class",(this.attr("class")||"").replace(a,""))},symbolAttr:function(a){var b=this;"x y r start end width height innerR anchorX anchorY clockwise".split(" ").forEach(function(d){b[d]=w(a[d],b[d])});b.attr({d:b.renderer.symbols[b.symbolName](b.x,b.y,b.width,b.height,b)})},clip:function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":"none")},crisp:function(a,
b){b=b||a.strokeWidth||0;var d=Math.round(b)%2/2;a.x=Math.floor(a.x||this.x||0)+d;a.y=Math.floor(a.y||this.y||0)+d;a.width=Math.floor((a.width||this.width||0)-2*d);a.height=Math.floor((a.height||this.height||0)-2*d);D(a.strokeWidth)&&(a.strokeWidth=b);return a},css:function(a){var b=this.styles,G={},l=this.element,w="",e=!b,f=["textOutline","textOverflow","width"];a&&a.color&&(a.fill=a.color);b&&C(a,function(a,d){a!==b[d]&&(G[d]=a,e=!0)});if(e){b&&(a=E(b,G));if(a)if(null===a.width||"auto"===a.width)delete this.textWidth;
else if("text"===l.nodeName.toLowerCase()&&a.width)var k=this.textWidth=x(a.width);this.styles=a;k&&!K&&this.renderer.forExport&&delete a.width;if(l.namespaceURI===this.SVG_NS){var c=function(a,b){return"-"+b.toLowerCase()};C(a,function(a,b){-1===f.indexOf(b)&&(w+=b.replace(/([A-Z])/g,c)+":"+a+";")});w&&A(l,"style",w)}else d(l,a);this.added&&("text"===this.element.nodeName&&this.renderer.buildText(this),a&&a.textOutline&&this.applyTextOutline(a.textOutline))}return this},getStyle:function(a){return S.getComputedStyle(this.element||
this,"").getPropertyValue(a)},strokeWidth:function(){if(!this.renderer.styledMode)return this["stroke-width"]||0;var a=this.getStyle("stroke-width");if(a.indexOf("px")===a.length-2)a=x(a);else{var b=r.createElementNS(T,"rect");A(b,{width:a,"stroke-width":0});this.element.parentNode.appendChild(b);a=b.getBBox().width;b.parentNode.removeChild(b)}return a},on:function(a,b){var d=this,l=d.element;q&&"click"===a?(l.ontouchstart=function(a){d.touchEventFired=Date.now();a.preventDefault();b.call(l,a)},l.onclick=
function(a){(-1===S.navigator.userAgent.indexOf("Android")||1100<Date.now()-(d.touchEventFired||0))&&b.call(l,a)}):l["on"+a]=b;return this},setRadialReference:function(a){var b=this.renderer.gradients[this.element.gradient];this.element.radialReference=a;b&&b.radAttr&&b.animate(this.renderer.getRadialAttr(a,b.radAttr));return this},translate:function(a,b){return this.attr({translateX:a,translateY:b})},invert:function(a){this.inverted=a;this.updateTransform();return this},updateTransform:function(){var a=
this.translateX||0,b=this.translateY||0,d=this.scaleX,l=this.scaleY,e=this.inverted,f=this.rotation,k=this.matrix,c=this.element;e&&(a+=this.width,b+=this.height);a=["translate("+a+","+b+")"];D(k)&&a.push("matrix("+k.join(",")+")");e?a.push("rotate(90) scale(-1,1)"):f&&a.push("rotate("+f+" "+w(this.rotationOriginX,c.getAttribute("x"),0)+" "+w(this.rotationOriginY,c.getAttribute("y")||0)+")");(D(d)||D(l))&&a.push("scale("+w(d,1)+" "+w(l,1)+")");a.length&&c.setAttribute("transform",a.join(" "))},toFront:function(){var a=
this.element;a.parentNode.appendChild(a);return this},align:function(a,b,d){var l,G={};var e=this.renderer;var f=e.alignedObjects;var k,c;if(a){if(this.alignOptions=a,this.alignByTranslate=b,!d||y(d))this.alignTo=l=d||"renderer",F(f,this),f.push(this),d=null}else a=this.alignOptions,b=this.alignByTranslate,l=this.alignTo;d=w(d,e[l],e);l=a.align;e=a.verticalAlign;f=(d.x||0)+(a.x||0);var t=(d.y||0)+(a.y||0);"right"===l?k=1:"center"===l&&(k=2);k&&(f+=(d.width-(a.width||0))/k);G[b?"translateX":"x"]=Math.round(f);
"bottom"===e?c=1:"middle"===e&&(c=2);c&&(t+=(d.height-(a.height||0))/c);G[b?"translateY":"y"]=Math.round(t);this[this.placed?"animate":"attr"](G);this.placed=!0;this.alignAttr=G;return this},getBBox:function(a,b){var d,l=this.renderer,G=this.element,f=this.styles,k=this.textStr,c,t=l.cache,h=l.cacheKeys,O=G.namespaceURI===this.SVG_NS;b=w(b,this.rotation);var B=b*e;var J=l.styledMode?G&&M.prototype.getStyle.call(G,"font-size"):f&&f.fontSize;if(D(k)){var K=k.toString();-1===K.indexOf("<")&&(K=K.replace(/[0-9]/g,
"0"));K+=["",b||0,J,this.textWidth,f&&f.textOverflow].join()}K&&!a&&(d=t[K]);if(!d){if(O||l.forExport){try{(c=this.fakeTS&&function(a){[].forEach.call(G.querySelectorAll(".highcharts-text-outline"),function(b){b.style.display=a})})&&c("none"),d=G.getBBox?E({},G.getBBox()):{width:G.offsetWidth,height:G.offsetHeight},c&&c("")}catch(Z){""}if(!d||0>d.width)d={width:0,height:0}}else d=this.htmlGetBBox();l.isSVG&&(a=d.width,l=d.height,O&&(d.height=l={"11px,17":14,"13px,20":16}[f&&f.fontSize+","+Math.round(l)]||
l),b&&(d.width=Math.abs(l*Math.sin(B))+Math.abs(a*Math.cos(B)),d.height=Math.abs(l*Math.cos(B))+Math.abs(a*Math.sin(B))));if(K&&0<d.height){for(;250<h.length;)delete t[h.shift()];t[K]||h.push(K);t[K]=d}}return d},show:function(a){return this.attr({visibility:a?"inherit":"visible"})},hide:function(a){a?this.attr({y:-9999}):this.attr({visibility:"hidden"});return this},fadeOut:function(a){var b=this;b.animate({opacity:0},{duration:a||150,complete:function(){b.attr({y:-9999})}})},add:function(a){var b=
this.renderer,d=this.element;a&&(this.parentGroup=a);this.parentInverted=a&&a.inverted;void 0!==this.textStr&&b.buildText(this);this.added=!0;if(!a||a.handleZ||this.zIndex)var l=this.zIndexSetter();l||(a?a.element:b.box).appendChild(d);if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var b=a.parentNode;b&&b.removeChild(a)},destroy:function(){var a=this,b=a.element||{},d=a.renderer,l=d.isSVG&&"SPAN"===b.nodeName&&a.parentGroup,w=b.ownerSVGElement,e=a.clipPath;b.onclick=b.onmouseout=
b.onmouseover=b.onmousemove=b.point=null;J(a);e&&w&&([].forEach.call(w.querySelectorAll("[clip-path],[CLIP-PATH]"),function(a){-1<a.getAttribute("clip-path").indexOf(e.element.id)&&a.removeAttribute("clip-path")}),a.clipPath=e.destroy());if(a.stops){for(w=0;w<a.stops.length;w++)a.stops[w]=a.stops[w].destroy();a.stops=null}a.safeRemoveChild(b);for(d.styledMode||a.destroyShadows();l&&l.div&&0===l.div.childNodes.length;)b=l.parentGroup,a.safeRemoveChild(l.div),delete l.div,l=b;a.alignTo&&F(d.alignedObjects,
a);C(a,function(b,d){a[d]&&a[d].parentGroup===a&&a[d].destroy&&a[d].destroy();delete a[d]})},shadow:function(a,b,d){var l=[],e,f=this.element;if(!a)this.destroyShadows();else if(!this.shadows){var G=w(a.width,3);var k=(a.opacity||.15)/G;var c=this.parentInverted?"(-1,-1)":"("+w(a.offsetX,1)+", "+w(a.offsetY,1)+")";for(e=1;e<=G;e++){var t=f.cloneNode(0);var h=2*G+1-2*e;A(t,{stroke:a.color||"#000000","stroke-opacity":k*e,"stroke-width":h,transform:"translate"+c,fill:"none"});t.setAttribute("class",
(t.getAttribute("class")||"")+" highcharts-shadow");d&&(A(t,"height",Math.max(A(t,"height")-h,0)),t.cutHeight=h);b?b.element.appendChild(t):f.parentNode&&f.parentNode.insertBefore(t,f);l.push(t)}this.shadows=l}return this},destroyShadows:function(){(this.shadows||[]).forEach(function(a){this.safeRemoveChild(a)},this);this.shadows=void 0},xGetter:function(a){"circle"===this.element.nodeName&&("x"===a?a="cx":"y"===a&&(a="cy"));return this._defaultGetter(a)},_defaultGetter:function(a){a=w(this[a+"Value"],
this[a],this.element?this.element.getAttribute(a):null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a},dSetter:function(a,b,d){a&&a.join&&(a=a.join(" "));/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");this[b]!==a&&(d.setAttribute(b,a),this[b]=a)},dashstyleSetter:function(a){var b,d=this["stroke-width"];"inherit"===d&&(d=1);if(a=a&&a.toLowerCase()){a=a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash",
"8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(b=a.length;b--;)a[b]=x(a[b])*d;a=a.join(",").replace(/NaN/g,"none");this.element.setAttribute("stroke-dasharray",a)}},alignSetter:function(a){var b={left:"start",center:"middle",right:"end"};b[a]&&(this.alignValue=a,this.element.setAttribute("text-anchor",b[a]))},opacitySetter:function(a,b,d){this[b]=a;d.setAttribute(b,a)},titleSetter:function(a){var b=this.element.getElementsByTagName("title")[0];b||(b=r.createElementNS(this.SVG_NS,
"title"),this.element.appendChild(b));b.firstChild&&b.removeChild(b.firstChild);b.appendChild(r.createTextNode(String(w(a,"")).replace(/<[^>]*>/g,"").replace(/&lt;/g,"<").replace(/&gt;/g,">")))},textSetter:function(a){a!==this.textStr&&(delete this.bBox,delete this.textPxLength,this.textStr=a,this.added&&this.renderer.buildText(this))},setTextPath:function(a,b){var d=this.element,l={textAnchor:"text-anchor"},w=!1,e=this.textPathWrapper,f=!e;b=B(!0,{enabled:!0,attributes:{dy:-5,startOffset:"50%",textAnchor:"middle"}},
b);var k=b.attributes;if(a&&b&&b.enabled){this.options&&this.options.padding&&(k.dx=-this.options.padding);e||(this.textPathWrapper=e=this.renderer.createElement("textPath"),w=!0);var G=e.element;(b=a.element.getAttribute("id"))||a.element.setAttribute("id",b=c.uniqueKey());if(f)for(a=d.getElementsByTagName("tspan");a.length;)a[0].setAttribute("y",0),G.appendChild(a[0]);w&&e.add({element:this.text?this.text.element:d});G.setAttributeNS("http://www.w3.org/1999/xlink","href",this.renderer.url+"#"+b);
D(k.dy)&&(G.parentNode.setAttribute("dy",k.dy),delete k.dy);D(k.dx)&&(G.parentNode.setAttribute("dx",k.dx),delete k.dx);C(k,function(a,b){G.setAttribute(l[b]||b,a)});d.removeAttribute("transform");this.removeTextOutline.call(e,[].slice.call(d.getElementsByTagName("tspan")));this.text&&!this.renderer.styledMode&&this.attr({fill:"none","stroke-width":0});this.applyTextOutline=this.updateTransform=I}else e&&(delete this.updateTransform,delete this.applyTextOutline,this.destroyTextPath(d,a));return this},
destroyTextPath:function(a,b){var d;b.element.setAttribute("id","");for(d=this.textPathWrapper.element.childNodes;d.length;)a.firstChild.appendChild(d[0]);a.firstChild.removeChild(this.textPathWrapper.element);delete b.textPathWrapper},fillSetter:function(a,b,d){"string"===typeof a?d.setAttribute(b,a):a&&this.complexColor(a,b,d)},visibilitySetter:function(a,b,d){"inherit"===a?d.removeAttribute(b):this[b]!==a&&d.setAttribute(b,a);this[b]=a},zIndexSetter:function(a,b){var d=this.renderer,l=this.parentGroup,
w=(l||d).element||d.box,e=this.element,f=!1;d=w===d.box;var k=this.added;var c;D(a)?(e.setAttribute("data-z-index",a),a=+a,this[b]===a&&(k=!1)):D(this[b])&&e.removeAttribute("data-z-index");this[b]=a;if(k){(a=this.zIndex)&&l&&(l.handleZ=!0);b=w.childNodes;for(c=b.length-1;0<=c&&!f;c--){l=b[c];k=l.getAttribute("data-z-index");var G=!D(k);if(l!==e)if(0>a&&G&&!d&&!c)w.insertBefore(e,b[c]),f=!0;else if(x(k)<=a||G&&(!D(a)||0<=a))w.insertBefore(e,b[c+1]||null),f=!0}f||(w.insertBefore(e,b[d?3:0]||null),
f=!0)}return f},_defaultSetter:function(a,b,d){d.setAttribute(b,a)}});M.prototype.yGetter=M.prototype.xGetter;M.prototype.translateXSetter=M.prototype.translateYSetter=M.prototype.rotationSetter=M.prototype.verticalAlignSetter=M.prototype.rotationOriginXSetter=M.prototype.rotationOriginYSetter=M.prototype.scaleXSetter=M.prototype.scaleYSetter=M.prototype.matrixSetter=function(a,b){this[b]=a;this.doTransform=!0};M.prototype["stroke-widthSetter"]=M.prototype.strokeSetter=function(a,b,d){this[b]=a;this.stroke&&
this["stroke-width"]?(M.prototype.fillSetter.call(this,this.stroke,"stroke",d),d.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0):"stroke-width"===b&&0===a&&this.hasStroke?(d.removeAttribute("stroke"),this.hasStroke=!1):this.renderer.styledMode&&this["stroke-width"]&&(d.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0)};n=c.SVGRenderer=function(){this.init.apply(this,arguments)};E(n.prototype,{Element:M,SVG_NS:T,init:function(a,b,l,w,e,f,k){var c=this.createElement("svg").attr({version:"1.1",
"class":"highcharts-root"});k||c.css(this.getStyle(w));w=c.element;a.appendChild(w);A(a,"dir","ltr");-1===a.innerHTML.indexOf("xmlns")&&A(w,"xmlns",this.SVG_NS);this.isSVG=!0;this.box=w;this.boxWrapper=c;this.alignedObjects=[];this.url=(v||t)&&r.getElementsByTagName("base").length?S.location.href.split("#")[0].replace(/<[^>]*>/g,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(r.createTextNode("Created with Highcharts 7.2.0"));this.defs=
this.createElement("defs").add();this.allowHTML=f;this.forExport=e;this.styledMode=k;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(b,l,!1);var G;v&&a.getBoundingClientRect&&(b=function(){d(a,{left:0,top:0});G=a.getBoundingClientRect();d(a,{left:Math.ceil(G.left)-G.left+"px",top:Math.ceil(G.top)-G.top+"px"})},b(),this.unSubPixelFix=p(S,"resize",b))},definition:function(a){function b(a,l){var w;m(a).forEach(function(a){var e=d.createElement(a.tagName),f={};C(a,function(a,
b){"tagName"!==b&&"children"!==b&&"textContent"!==b&&(f[b]=a)});e.attr(f);e.add(l||d.defs);a.textContent&&e.element.appendChild(r.createTextNode(a.textContent));b(a.children||[],e);w=e});return w}var d=this;return b(a)},getStyle:function(a){return this.style=E({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},a)},setStyle:function(a){this.boxWrapper.css(this.getStyle(a))},isHidden:function(){return!this.boxWrapper.getBBox().width},destroy:function(){var a=
this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();h(this.gradients||{});this.gradients=null;a&&(this.defs=a.destroy());this.unSubPixelFix&&this.unSubPixelFix();return this.alignedObjects=null},createElement:function(a){var b=new this.Element;b.init(this,a);return b},draw:I,getRadialAttr:function(a,b){return{cx:a[0]-a[2]/2+b.cx*a[2],cy:a[1]-a[2]/2+b.cy*a[2],r:b.r*a[2]}},truncate:function(a,b,d,l,w,e,f){var k=this,c=a.rotation,t,G=l?1:0,h=(d||l).length,B=h,J=[],K=function(a){b.firstChild&&
b.removeChild(b.firstChild);a&&b.appendChild(r.createTextNode(a))},M=function(e,c){c=c||e;if(void 0===J[c])if(b.getSubStringLength)try{J[c]=w+b.getSubStringLength(0,l?c+1:c)}catch(aa){""}else k.getSpanWidth&&(K(f(d||l,e)),J[c]=w+k.getSpanWidth(a,b));return J[c]},O;a.rotation=0;var q=M(b.textContent.length);if(O=w+q>e){for(;G<=h;)B=Math.ceil((G+h)/2),l&&(t=f(l,B)),q=M(B,t&&t.length-1),G===h?G=h+1:q>e?h=B-1:G=B;0===h?K(""):d&&h===d.length-1||K(t||f(d||l,B))}l&&l.splice(0,B);a.actualWidth=q;a.rotation=
c;return O},escapes:{"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},buildText:function(a){var b=a.element,l=this,e=l.forExport,f=w(a.textStr,"").toString(),k=-1!==f.indexOf("<"),c=b.childNodes,t,h=A(b,"x"),G=a.styles,B=a.textWidth,J=G&&G.lineHeight,M=G&&G.textOutline,q=G&&"ellipsis"===G.textOverflow,v=G&&"nowrap"===G.whiteSpace,I=G&&G.fontSize,m,g=c.length;G=B&&!a.added&&this.box;var E=function(a){var d;l.styledMode||(d=/(px|em)$/.test(a&&a.style.fontSize)?a.style.fontSize:I||l.style.fontSize||
12);return J?x(J):l.fontMetrics(d,a.getAttribute("style")?a:b).h},p=function(a,b){C(l.escapes,function(d,l){b&&-1!==b.indexOf(d)||(a=a.toString().replace(new RegExp(d,"g"),l))});return a},R=function(a,b){var d=a.indexOf("<");a=a.substring(d,a.indexOf(">")-d);d=a.indexOf(b+"=");if(-1!==d&&(d=d+b.length+1,b=a.charAt(d),'"'===b||"'"===b))return a=a.substring(d+1),a.substring(0,a.indexOf(b))},S=/<br.*?>/g;var u=[f,q,v,J,M,I,B].join();if(u!==a.textCache){for(a.textCache=u;g--;)b.removeChild(c[g]);k||M||
q||B||-1!==f.indexOf(" ")&&(!v||S.test(f))?(G&&G.appendChild(b),k?(f=l.styledMode?f.replace(/<(b|strong)>/g,'<span class="highcharts-strong">').replace(/<(i|em)>/g,'<span class="highcharts-emphasized">'):f.replace(/<(b|strong)>/g,'<span style="font-weight:bold">').replace(/<(i|em)>/g,'<span style="font-style:italic">'),f=f.replace(/<a/g,"<span").replace(/<\/(b|strong|i|em|a)>/g,"</span>").split(S)):f=[f],f=f.filter(function(a){return""!==a}),f.forEach(function(w,f){var k=0,c=0;w=w.replace(/^\s+|\s+$/g,
"").replace(/<span/g,"|||<span").replace(/<\/span>/g,"</span>|||");var G=w.split("|||");G.forEach(function(w){if(""!==w||1===G.length){var J={},M=r.createElementNS(l.SVG_NS,"tspan"),O,g;(O=R(w,"class"))&&A(M,"class",O);if(O=R(w,"style"))O=O.replace(/(;| |^)color([ :])/,"$1fill$2"),A(M,"style",O);(g=R(w,"href"))&&!e&&(A(M,"onclick",'location.href="'+g+'"'),A(M,"class","highcharts-anchor"),l.styledMode||d(M,{cursor:"pointer"}));w=p(w.replace(/<[a-zA-Z\/](.|\n)*?>/g,"")||" ");if(" "!==w){M.appendChild(r.createTextNode(w));
k?J.dx=0:f&&null!==h&&(J.x=h);A(M,J);b.appendChild(M);!k&&m&&(!K&&e&&d(M,{display:"block"}),A(M,"dy",E(M)));if(B){var Q=w.replace(/([^\^])-/g,"$1- ").split(" ");J=!v&&(1<G.length||f||1<Q.length);g=0;var x=E(M);if(q)t=l.truncate(a,M,w,void 0,0,Math.max(0,B-parseInt(I||12,10)),function(a,b){return a.substring(0,b)+"\u2026"});else if(J)for(;Q.length;)Q.length&&!v&&0<g&&(M=r.createElementNS(T,"tspan"),A(M,{dy:x,x:h}),O&&A(M,"style",O),M.appendChild(r.createTextNode(Q.join(" ").replace(/- /g,"-"))),b.appendChild(M)),
l.truncate(a,M,null,Q,0===g?c:0,B,function(a,b){return Q.slice(0,b).join(" ").replace(/- /g,"-")}),c=a.actualWidth,g++}k++}}});m=m||b.childNodes.length}),q&&t&&a.attr("title",p(a.textStr,["&lt;","&gt;"])),G&&G.removeChild(b),M&&a.applyTextOutline&&a.applyTextOutline(M)):b.appendChild(r.createTextNode(p(f)))}},getContrast:function(b){b=a(b).rgba;b[0]*=1;b[1]*=1.2;b[2]*=.5;return 459<b[0]+b[1]+b[2]?"#000000":"#FFFFFF"},button:function(a,b,d,l,w,e,f,c,t,h){var G=this.label(a,b,d,t,null,null,h,null,"button"),
J=0,K=this.styledMode;G.attr(B({padding:8,r:2},w));if(!K){w=B({fill:"#f7f7f7",stroke:"#cccccc","stroke-width":1,style:{color:"#333333",cursor:"pointer",fontWeight:"normal"}},w);var M=w.style;delete w.style;e=B(w,{fill:"#e6e6e6"},e);var r=e.style;delete e.style;f=B(w,{fill:"#e6ebf5",style:{color:"#000000",fontWeight:"bold"}},f);var q=f.style;delete f.style;c=B(w,{style:{color:"#cccccc"}},c);var O=c.style;delete c.style}p(G.element,k?"mouseover":"mouseenter",function(){3!==J&&G.setState(1)});p(G.element,
k?"mouseout":"mouseleave",function(){3!==J&&G.setState(J)});G.setState=function(a){1!==a&&(G.state=J=a);G.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-"+["normal","hover","pressed","disabled"][a||0]);K||G.attr([w,e,f,c][a||0]).css([M,r,q,O][a||0])};K||G.attr(w).css(E({cursor:"default"},M));return G.on("click",function(a){3!==J&&l.call(G,a)})},crispLine:function(a,b){a[1]===a[4]&&(a[1]=a[4]=Math.round(a[1])-b%2/2);a[2]===a[5]&&(a[2]=a[5]=Math.round(a[2])+
b%2/2);return a},path:function(a){var b=this.styledMode?{}:{fill:"none"};z(a)?b.d=a:L(a)&&E(b,a);return this.createElement("path").attr(b)},circle:function(a,b,d){a=L(a)?a:void 0===a?{}:{x:a,y:b,r:d};b=this.createElement("circle");b.xSetter=b.ySetter=function(a,b,d){d.setAttribute("c"+b,a)};return b.attr(a)},arc:function(a,b,d,l,w,e){L(a)?(l=a,b=l.y,d=l.r,a=l.x):l={innerR:l,start:w,end:e};a=this.symbol("arc",a,b,d,d,l);a.r=d;return a},rect:function(a,b,d,l,w,e){w=L(a)?a.r:w;var f=this.createElement("rect");
a=L(a)?a:void 0===a?{}:{x:a,y:b,width:Math.max(d,0),height:Math.max(l,0)};this.styledMode||(void 0!==e&&(a.strokeWidth=e,a=f.crisp(a)),a.fill="none");w&&(a.r=w);f.rSetter=function(a,b,d){f.r=a;A(d,{rx:a,ry:a})};f.rGetter=function(){return f.r};return f.attr(a)},setSize:function(a,b,d){var l=this.alignedObjects,e=l.length;this.width=a;this.height=b;for(this.boxWrapper.animate({width:a,height:b},{step:function(){this.attr({viewBox:"0 0 "+this.attr("width")+" "+this.attr("height")})},duration:w(d,!0)?
void 0:0});e--;)l[e].align()},g:function(a){var b=this.createElement("g");return a?b.attr({"class":"highcharts-"+a}):b},image:function(a,b,d,l,w,e){var f={preserveAspectRatio:"none"},k=function(a,b){a.setAttributeNS?a.setAttributeNS("http://www.w3.org/1999/xlink","href",b):a.setAttribute("hc-svg-href",b)},c=function(b){k(t.element,a);e.call(t,b)};1<arguments.length&&E(f,{x:b,y:d,width:l,height:w});var t=this.createElement("image").attr(f);e?(k(t.element,"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),
f=new S.Image,p(f,"load",c),f.src=a,f.complete&&c({})):k(t.element,a);return t},symbol:function(a,l,e,k,c,t){var h=this,B=/^url\((.*?)\)$/,G=B.test(a),J=!G&&(this.symbols[a]?a:"circle"),K=J&&this.symbols[J],M=D(l)&&K&&K.call(this.symbols,Math.round(l),Math.round(e),k,c,t);if(K){var q=this.path(M);h.styledMode||q.attr("fill","none");E(q,{symbolName:J,x:l,y:e,width:k,height:c});t&&E(q,t)}else if(G){var v=a.match(B)[1];q=this.image(v);q.imgwidth=w(R[v]&&R[v].width,t&&t.width);q.imgheight=w(R[v]&&R[v].height,
t&&t.height);var I=function(){q.attr({width:q.width,height:q.height})};["width","height"].forEach(function(a){q[a+"Setter"]=function(a,b){var d={},l=this["img"+b],w="width"===b?"translateX":"translateY";this[b]=a;D(l)&&(t&&"within"===t.backgroundSize&&this.width&&this.height&&(l=Math.round(l*Math.min(this.width/this.imgwidth,this.height/this.imgheight))),this.element&&this.element.setAttribute(b,l),this.alignByTranslate||(d[w]=((this[b]||0)-l)/2,this.attr(d)))}});D(l)&&q.attr({x:l,y:e});q.isImg=!0;
D(q.imgwidth)&&D(q.imgheight)?I():(q.attr({width:0,height:0}),f("img",{onload:function(){var a=b[h.chartIndex];0===this.width&&(d(this,{position:"absolute",top:"-999em"}),r.body.appendChild(this));R[v]={width:this.width,height:this.height};q.imgwidth=this.width;q.imgheight=this.height;q.element&&I();this.parentNode&&this.parentNode.removeChild(this);h.imgCount--;if(!h.imgCount&&a&&a.onload)a.onload()},src:v}),this.imgCount++)}return q},symbols:{circle:function(a,b,d,l){return this.arc(a+d/2,b+l/2,
d/2,l/2,{start:.5*Math.PI,end:2.5*Math.PI,open:!1})},square:function(a,b,d,l){return["M",a,b,"L",a+d,b,a+d,b+l,a,b+l,"Z"]},triangle:function(a,b,d,l){return["M",a+d/2,b,"L",a+d,b+l,a,b+l,"Z"]},"triangle-down":function(a,b,d,l){return["M",a,b,"L",a+d,b,a+d/2,b+l,"Z"]},diamond:function(a,b,d,l){return["M",a+d/2,b,"L",a+d,b+l/2,a+d/2,b+l,a,b+l/2,"Z"]},arc:function(a,b,d,l,e){var f=e.start,k=e.r||d,c=e.r||l||d,t=e.end-.001;d=e.innerR;l=w(e.open,.001>Math.abs(e.end-e.start-2*Math.PI));var h=Math.cos(f),
B=Math.sin(f),J=Math.cos(t);t=Math.sin(t);f=.001>e.end-f-Math.PI?0:1;e=["M",a+k*h,b+c*B,"A",k,c,0,f,w(e.clockwise,1),a+k*J,b+c*t];D(d)&&e.push(l?"M":"L",a+d*J,b+d*t,"A",d,d,0,f,0,a+d*h,b+d*B);e.push(l?"":"Z");return e},callout:function(a,b,d,l,w){var e=Math.min(w&&w.r||0,d,l),f=e+6,k=w&&w.anchorX;w=w&&w.anchorY;var c=["M",a+e,b,"L",a+d-e,b,"C",a+d,b,a+d,b,a+d,b+e,"L",a+d,b+l-e,"C",a+d,b+l,a+d,b+l,a+d-e,b+l,"L",a+e,b+l,"C",a,b+l,a,b+l,a,b+l-e,"L",a,b+e,"C",a,b,a,b,a+e,b];k&&k>d?w>b+f&&w<b+l-f?c.splice(13,
3,"L",a+d,w-6,a+d+6,w,a+d,w+6,a+d,b+l-e):c.splice(13,3,"L",a+d,l/2,k,w,a+d,l/2,a+d,b+l-e):k&&0>k?w>b+f&&w<b+l-f?c.splice(33,3,"L",a,w+6,a-6,w,a,w-6,a,b+e):c.splice(33,3,"L",a,l/2,k,w,a,l/2,a,b+e):w&&w>l&&k>a+f&&k<a+d-f?c.splice(23,3,"L",k+6,b+l,k,b+l+6,k-6,b+l,a+e,b+l):w&&0>w&&k>a+f&&k<a+d-f&&c.splice(3,3,"L",k-6,b,k,b-6,k+6,b,d-e,b);return c}},clipRect:function(a,b,d,l){var w=c.uniqueKey()+"-",e=this.createElement("clipPath").attr({id:w}).add(this.defs);a=this.rect(a,b,d,l,0).add(e);a.id=w;a.clipPath=
e;a.count=0;return a},text:function(a,b,d,l){var w={};if(l&&(this.allowHTML||!this.forExport))return this.html(a,b,d);w.x=Math.round(b||0);d&&(w.y=Math.round(d));D(a)&&(w.text=a);a=this.createElement("text").attr(w);l||(a.xSetter=function(a,b,d){var l=d.getElementsByTagName("tspan"),w=d.getAttribute(b),e;for(e=0;e<l.length;e++){var f=l[e];f.getAttribute(b)===w&&f.setAttribute(b,a)}d.setAttribute(b,a)});return a},fontMetrics:function(a,b){a=!this.styledMode&&/px/.test(a)||!S.getComputedStyle?a||b&&
b.style&&b.style.fontSize||this.style&&this.style.fontSize:b&&M.prototype.getStyle.call(b,"font-size");a=/px/.test(a)?x(a):12;b=24>a?a+3:Math.round(1.2*a);return{h:b,b:Math.round(.8*b),f:a}},rotCorr:function(a,b,d){var l=a;b&&d&&(l=Math.max(l*Math.cos(b*e),4));return{x:-a/3*Math.sin(b*e),y:l}},label:function(a,b,d,w,e,f,k,c,t){var h=this,J=h.styledMode,K=h.g("button"!==t&&"label"),q=K.text=h.text("",0,0,k).attr({zIndex:1}),r,v,G=0,I=3,m=0,g,p,O,T,x,Q={},R,S,z=/^url\((.*?)\)$/.test(w),y=J||z,n=function(){return J?
r.strokeWidth()%2/2:(R?parseInt(R,10):0)%2/2};t&&K.addClass("highcharts-"+t);var L=function(){var a=q.element.style,b={};v=(void 0===g||void 0===p||x)&&D(q.textStr)&&q.getBBox();K.width=(g||v.width||0)+2*I+m;K.height=(p||v.height||0)+2*I;S=I+Math.min(h.fontMetrics(a&&a.fontSize,q).b,v?v.height:Infinity);y&&(r||(K.box=r=h.symbols[w]||z?h.symbol(w):h.rect(),r.addClass(("button"===t?"":"highcharts-label-box")+(t?" highcharts-"+t+"-box":"")),r.add(K),a=n(),b.x=a,b.y=(c?-S:0)+a),b.width=Math.round(K.width),
b.height=Math.round(K.height),r.attr(E(b,Q)),Q={})};var C=function(){var a=m+I;var b=c?0:S;D(g)&&v&&("center"===x||"right"===x)&&(a+={center:.5,right:1}[x]*(g-v.width));if(a!==q.x||b!==q.y)q.attr("x",a),q.hasBoxWidthChanged&&(v=q.getBBox(!0),L()),void 0!==b&&q.attr("y",b);q.x=a;q.y=b};var A=function(a,b){r?r.attr(a,b):Q[a]=b};K.onAdd=function(){q.add(K);K.attr({text:a||0===a?a:"",x:b,y:d});r&&D(e)&&K.attr({anchorX:e,anchorY:f})};K.widthSetter=function(a){g=u(a)?a:null};K.heightSetter=function(a){p=
a};K["text-alignSetter"]=function(a){x=a};K.paddingSetter=function(a){D(a)&&a!==I&&(I=K.padding=a,C())};K.paddingLeftSetter=function(a){D(a)&&a!==m&&(m=a,C())};K.alignSetter=function(a){a={left:0,center:.5,right:1}[a];a!==G&&(G=a,v&&K.attr({x:O}))};K.textSetter=function(a){void 0!==a&&q.attr({text:a});L();C()};K["stroke-widthSetter"]=function(a,b){a&&(y=!0);R=this["stroke-width"]=a;A(b,a)};J?K.rSetter=function(a,b){A(b,a)}:K.strokeSetter=K.fillSetter=K.rSetter=function(a,b){"r"!==b&&("fill"===b&&
a&&(y=!0),K[b]=a);A(b,a)};K.anchorXSetter=function(a,b){e=K.anchorX=a;A(b,Math.round(a)-n()-O)};K.anchorYSetter=function(a,b){f=K.anchorY=a;A(b,a-T)};K.xSetter=function(a){K.x=a;G&&(a-=G*((g||v.width)+2*I),K["forceAnimate:x"]=!0);O=Math.round(a);K.attr("translateX",O)};K.ySetter=function(a){T=K.y=Math.round(a);K.attr("translateY",T)};var U=K.css;k={css:function(a){if(a){var b={};a=B(a);K.textProps.forEach(function(d){void 0!==a[d]&&(b[d]=a[d],delete a[d])});q.css(b);"width"in b&&L();"fontSize"in b&&
(L(),C())}return U.call(K,a)},getBBox:function(){return{width:v.width+2*I,height:v.height+2*I,x:v.x-I,y:v.y-I}},destroy:function(){l(K.element,"mouseenter");l(K.element,"mouseleave");q&&(q=q.destroy());r&&(r=r.destroy());M.prototype.destroy.call(K);K=h=L=C=A=null}};J||(k.shadow=function(a){a&&(L(),r&&r.shadow(a));return K});return E(K,k)}});c.Renderer=n});N(H,"parts/Html.js",[H["parts/Globals.js"],H["parts/Utilities.js"]],function(c,n){var A=n.attr,D=n.defined,F=n.pInt,z=c.createElement,u=c.css,L=
c.extend,y=c.isFirefox,C=c.isMS,x=c.isWebKit,m=c.pick,p=c.SVGElement;n=c.SVGRenderer;var g=c.win;L(p.prototype,{htmlCss:function(b){var a="SPAN"===this.element.tagName&&b&&"width"in b,d=m(a&&b.width,void 0);if(a){delete b.width;this.textWidth=d;var f=!0}b&&"ellipsis"===b.textOverflow&&(b.whiteSpace="nowrap",b.overflow="hidden");this.styles=L(this.styles,b);u(this.element,b);f&&this.htmlUpdateTransform();return this},htmlGetBBox:function(){var b=this.element;return{x:b.offsetLeft,y:b.offsetTop,width:b.offsetWidth,
height:b.offsetHeight}},htmlUpdateTransform:function(){if(this.added){var b=this.renderer,a=this.element,d=this.translateX||0,f=this.translateY||0,e=this.x||0,c=this.y||0,r=this.textAlign||"left",m={left:0,center:.5,right:1}[r],q=this.styles,v=q&&q.whiteSpace;u(a,{marginLeft:d,marginTop:f});!b.styledMode&&this.shadows&&this.shadows.forEach(function(a){u(a,{marginLeft:d+1,marginTop:f+1})});this.inverted&&[].forEach.call(a.childNodes,function(d){b.invertChild(d,a)});if("SPAN"===a.tagName){q=this.rotation;
var k=this.textWidth&&F(this.textWidth),t=[q,r,a.innerHTML,this.textWidth,this.textAlign].join(),B;(B=k!==this.oldTextWidth)&&!(B=k>this.oldTextWidth)&&((B=this.textPxLength)||(u(a,{width:"",whiteSpace:v||"nowrap"}),B=a.offsetWidth),B=B>k);B&&(/[ \-]/.test(a.textContent||a.innerText)||"ellipsis"===a.style.textOverflow)?(u(a,{width:k+"px",display:"block",whiteSpace:v||"normal"}),this.oldTextWidth=k,this.hasBoxWidthChanged=!0):this.hasBoxWidthChanged=!1;t!==this.cTT&&(v=b.fontMetrics(a.style.fontSize,
a).b,!D(q)||q===(this.oldRotation||0)&&r===this.oldAlign||this.setSpanRotation(q,m,v),this.getSpanCorrection(!D(q)&&this.textPxLength||a.offsetWidth,v,m,q,r));u(a,{left:e+(this.xCorr||0)+"px",top:c+(this.yCorr||0)+"px"});this.cTT=t;this.oldRotation=q;this.oldAlign=r}}else this.alignOnAdd=!0},setSpanRotation:function(b,a,d){var f={},e=this.renderer.getTransformKey();f[e]=f.transform="rotate("+b+"deg)";f[e+(y?"Origin":"-origin")]=f.transformOrigin=100*a+"% "+d+"px";u(this.element,f)},getSpanCorrection:function(b,
a,d){this.xCorr=-b*d;this.yCorr=-a}});L(n.prototype,{getTransformKey:function(){return C&&!/Edge/.test(g.navigator.userAgent)?"-ms-transform":x?"-webkit-transform":y?"MozTransform":g.opera?"-o-transform":""},html:function(b,a,d){var f=this.createElement("span"),e=f.element,c=f.renderer,r=c.isSVG,g=function(a,b){["opacity","visibility"].forEach(function(d){a[d+"Setter"]=function(e,f,k){var w=a.div?a.div.style:b;p.prototype[d+"Setter"].call(this,e,f,k);w&&(w[f]=e)}});a.addedSetters=!0};f.textSetter=
function(a){a!==e.innerHTML&&(delete this.bBox,delete this.oldTextWidth);this.textStr=a;e.innerHTML=m(a,"");f.doTransform=!0};r&&g(f,f.element.style);f.xSetter=f.ySetter=f.alignSetter=f.rotationSetter=function(a,b){"align"===b&&(b="textAlign");f[b]=a;f.doTransform=!0};f.afterSetters=function(){this.doTransform&&(this.htmlUpdateTransform(),this.doTransform=!1)};f.attr({text:b,x:Math.round(a),y:Math.round(d)}).css({position:"absolute"});c.styledMode||f.css({fontFamily:this.style.fontFamily,fontSize:this.style.fontSize});
e.style.whiteSpace="nowrap";f.css=f.htmlCss;r&&(f.add=function(a){var b=c.box.parentNode,d=[];if(this.parentGroup=a){var t=a.div;if(!t){for(;a;)d.push(a),a=a.parentGroup;d.reverse().forEach(function(a){function e(b,d){a[d]=b;"translateX"===d?l.left=b+"px":l.top=b+"px";a.doTransform=!0}var w=A(a.element,"class");t=a.div=a.div||z("div",w?{className:w}:void 0,{position:"absolute",left:(a.translateX||0)+"px",top:(a.translateY||0)+"px",display:a.display,opacity:a.opacity,pointerEvents:a.styles&&a.styles.pointerEvents},
t||b);var l=t.style;L(a,{classSetter:function(a){return function(b){this.element.setAttribute("class",b);a.className=b}}(t),on:function(){d[0].div&&f.on.apply({element:d[0].div},arguments);return a},translateXSetter:e,translateYSetter:e});a.addedSetters||g(a)})}}else t=b;t.appendChild(e);f.added=!0;f.alignOnAdd&&f.htmlUpdateTransform();return f});return f}})});N(H,"parts/Time.js",[H["parts/Globals.js"],H["parts/Utilities.js"]],function(c,n){var A=n.defined,D=n.isObject,F=n.objectEach,z=n.splat,u=
c.extend,L=c.merge,y=c.pick,C=c.timeUnits,x=c.win;c.Time=function(c){this.update(c,!1)};c.Time.prototype={defaultOptions:{},update:function(c){var m=y(c&&c.useUTC,!0),g=this;this.options=c=L(!0,this.options||{},c);this.Date=c.Date||x.Date||Date;this.timezoneOffset=(this.useUTC=m)&&c.timezoneOffset;this.getTimezoneOffset=this.timezoneOffsetFunction();(this.variableTimezone=!(m&&!c.getTimezoneOffset&&!c.timezone))||this.timezoneOffset?(this.get=function(b,a){var d=a.getTime(),f=d-g.getTimezoneOffset(a);
a.setTime(f);b=a["getUTC"+b]();a.setTime(d);return b},this.set=function(b,a,d){if("Milliseconds"===b||"Seconds"===b||"Minutes"===b&&0===a.getTimezoneOffset()%60)a["set"+b](d);else{var f=g.getTimezoneOffset(a);f=a.getTime()-f;a.setTime(f);a["setUTC"+b](d);b=g.getTimezoneOffset(a);f=a.getTime()+b;a.setTime(f)}}):m?(this.get=function(b,a){return a["getUTC"+b]()},this.set=function(b,a,d){return a["setUTC"+b](d)}):(this.get=function(b,a){return a["get"+b]()},this.set=function(b,a,d){return a["set"+b](d)})},
makeTime:function(m,p,g,b,a,d){if(this.useUTC){var f=this.Date.UTC.apply(0,arguments);var e=this.getTimezoneOffset(f);f+=e;var h=this.getTimezoneOffset(f);e!==h?f+=h-e:e-36E5!==this.getTimezoneOffset(f-36E5)||c.isSafari||(f-=36E5)}else f=(new this.Date(m,p,y(g,1),y(b,0),y(a,0),y(d,0))).getTime();return f},timezoneOffsetFunction:function(){var m=this,p=this.options,g=x.moment;if(!this.useUTC)return function(b){return 6E4*(new Date(b)).getTimezoneOffset()};if(p.timezone){if(g)return function(b){return 6E4*
-g.tz(b,p.timezone).utcOffset()};c.error(25)}return this.useUTC&&p.getTimezoneOffset?function(b){return 6E4*p.getTimezoneOffset(b)}:function(){return 6E4*(m.timezoneOffset||0)}},dateFormat:function(m,p,g){if(!A(p)||isNaN(p))return c.defaultOptions.lang.invalidDate||"";m=c.pick(m,"%Y-%m-%d %H:%M:%S");var b=this,a=new this.Date(p),d=this.get("Hours",a),f=this.get("Day",a),e=this.get("Date",a),h=this.get("Month",a),r=this.get("FullYear",a),E=c.defaultOptions.lang,q=E.weekdays,v=E.shortWeekdays,k=c.pad;
a=c.extend({a:v?v[f]:q[f].substr(0,3),A:q[f],d:k(e),e:k(e,2," "),w:f,b:E.shortMonths[h],B:E.months[h],m:k(h+1),o:h+1,y:r.toString().substr(2,2),Y:r,H:k(d),k:d,I:k(d%12||12),l:d%12||12,M:k(b.get("Minutes",a)),p:12>d?"AM":"PM",P:12>d?"am":"pm",S:k(a.getSeconds()),L:k(Math.floor(p%1E3),3)},c.dateFormats);F(a,function(a,d){for(;-1!==m.indexOf("%"+d);)m=m.replace("%"+d,"function"===typeof a?a.call(b,p):a)});return g?m.substr(0,1).toUpperCase()+m.substr(1):m},resolveDTLFormat:function(c){return D(c,!0)?
c:(c=z(c),{main:c[0],from:c[1],to:c[2]})},getTimeTicks:function(c,p,g,b){var a=this,d=[],f={};var e=new a.Date(p);var h=c.unitRange,r=c.count||1,m;b=y(b,1);if(A(p)){a.set("Milliseconds",e,h>=C.second?0:r*Math.floor(a.get("Milliseconds",e)/r));h>=C.second&&a.set("Seconds",e,h>=C.minute?0:r*Math.floor(a.get("Seconds",e)/r));h>=C.minute&&a.set("Minutes",e,h>=C.hour?0:r*Math.floor(a.get("Minutes",e)/r));h>=C.hour&&a.set("Hours",e,h>=C.day?0:r*Math.floor(a.get("Hours",e)/r));h>=C.day&&a.set("Date",e,h>=
C.month?1:Math.max(1,r*Math.floor(a.get("Date",e)/r)));if(h>=C.month){a.set("Month",e,h>=C.year?0:r*Math.floor(a.get("Month",e)/r));var q=a.get("FullYear",e)}h>=C.year&&a.set("FullYear",e,q-q%r);h===C.week&&(q=a.get("Day",e),a.set("Date",e,a.get("Date",e)-q+b+(q<b?-7:0)));q=a.get("FullYear",e);b=a.get("Month",e);var v=a.get("Date",e),k=a.get("Hours",e);p=e.getTime();a.variableTimezone&&(m=g-p>4*C.month||a.getTimezoneOffset(p)!==a.getTimezoneOffset(g));p=e.getTime();for(e=1;p<g;)d.push(p),p=h===C.year?
a.makeTime(q+e*r,0):h===C.month?a.makeTime(q,b+e*r):!m||h!==C.day&&h!==C.week?m&&h===C.hour&&1<r?a.makeTime(q,b,v,k+e*r):p+h*r:a.makeTime(q,b,v+e*r*(h===C.day?1:7)),e++;d.push(p);h<=C.hour&&1E4>d.length&&d.forEach(function(b){0===b%18E5&&"000000000"===a.dateFormat("%H%M%S%L",b)&&(f[b]="day")})}d.info=u(c,{higherRanks:f,totalRange:h*r});return d}}});N(H,"parts/Options.js",[H["parts/Globals.js"]],function(c){var n=c.color,A=c.merge;c.defaultOptions={colors:"#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),
symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),decimalPoint:".",numericSymbols:"kMGTPE".split(""),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{},time:c.Time.prototype.defaultOptions,
chart:{styledMode:!1,borderRadius:0,colorCount:10,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],resetZoomButton:{theme:{zIndex:6},position:{align:"right",x:-10,y:10}},width:null,height:null,borderColor:"#335cad",backgroundColor:"#ffffff",plotBorderColor:"#cccccc"},title:{text:"Chart title",align:"center",margin:15,widthAdjust:-44},subtitle:{text:"",align:"center",widthAdjust:-44},caption:{margin:15,text:"",align:"left",verticalAlign:"bottom"},plotOptions:{},labels:{style:{position:"absolute",
color:"#333333"}},legend:{enabled:!0,align:"center",alignColumns:!0,layout:"horizontal",labelFormatter:function(){return this.name},borderColor:"#999999",borderRadius:0,navigation:{activeColor:"#003399",inactiveColor:"#cccccc"},itemStyle:{color:"#333333",cursor:"pointer",fontSize:"12px",fontWeight:"bold",textOverflow:"ellipsis"},itemHoverStyle:{color:"#000000"},itemHiddenStyle:{color:"#cccccc"},shadow:!1,itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},squareSymbol:!0,symbolPadding:5,
verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",backgroundColor:"#ffffff",opacity:.5,textAlign:"center"}},tooltip:{enabled:!0,animation:c.svg,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",
padding:8,snap:c.isTouchDevice?25:10,headerFormat:'<span style="font-size: 10px">{point.key}</span><br/>',pointFormat:'<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>',backgroundColor:n("#f7f7f7").setOpacity(.85).get(),borderWidth:1,shadow:!0,style:{color:"#333333",cursor:"default",fontSize:"12px",pointerEvents:"none",whiteSpace:"nowrap"}},credits:{enabled:!0,href:"https://www.highcharts.com?credits",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",
color:"#999999",fontSize:"9px"},text:"Highcharts.com"}};c.setOptions=function(n){c.defaultOptions=A(!0,c.defaultOptions,n);c.time.update(A(c.defaultOptions.global,c.defaultOptions.time),!1);return c.defaultOptions};c.getOptions=function(){return c.defaultOptions};c.defaultPlotOptions=c.defaultOptions.plotOptions;c.time=new c.Time(A(c.defaultOptions.global,c.defaultOptions.time));c.dateFormat=function(n,A,z){return c.time.dateFormat(n,A,z)};""});N(H,"parts/Tick.js",[H["parts/Globals.js"],H["parts/Utilities.js"]],
function(c,n){var A=n.defined,D=n.isNumber,F=c.correctFloat,z=c.destroyObjectProperties,u=c.fireEvent,L=c.merge,y=c.pick,C=c.deg2rad;c.Tick=function(c,m,p,g,b){this.axis=c;this.pos=m;this.type=p||"";this.isNewLabel=this.isNew=!0;this.parameters=b||{};this.tickmarkOffset=this.parameters.tickmarkOffset;this.options=this.parameters.options;p||g||this.addLabel()};c.Tick.prototype={addLabel:function(){var x=this,m=x.axis,p=m.options,g=m.chart,b=m.categories,a=m.names,d=x.pos,f=y(x.options&&x.options.labels,
p.labels),e=m.tickPositions,h=d===e[0],r=d===e[e.length-1];b=this.parameters.category||(b?y(b[d],a[d],d):d);var E=x.label;e=e.info;var q,v;if(m.isDatetimeAxis&&e){var k=g.time.resolveDTLFormat(p.dateTimeLabelFormats[!p.grid&&e.higherRanks[d]||e.unitName]);var t=k.main}x.isFirst=h;x.isLast=r;x.formatCtx={axis:m,chart:g,isFirst:h,isLast:r,dateTimeLabelFormat:t,tickPositionInfo:e,value:m.isLog?F(m.lin2log(b)):b,pos:d};p=m.labelFormatter.call(x.formatCtx,this.formatCtx);if(v=k&&k.list)x.shortenLabel=
function(){for(q=0;q<v.length;q++)if(E.attr({text:m.labelFormatter.call(c.extend(x.formatCtx,{dateTimeLabelFormat:v[q]}))}),E.getBBox().width<m.getSlotWidth(x)-2*y(f.padding,5))return;E.attr({text:""})};if(A(E))E&&E.textStr!==p&&(!E.textWidth||f.style&&f.style.width||E.styles.width||E.css({width:null}),E.attr({text:p}),E.textPxLength=E.getBBox().width);else{if(x.label=E=A(p)&&f.enabled?g.renderer.text(p,0,0,f.useHTML).add(m.labelGroup):null)g.styledMode||E.css(L(f.style)),E.textPxLength=E.getBBox().width;
x.rotation=0}},getLabelSize:function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0},handleOverflow:function(c){var m=this.axis,p=m.options.labels,g=c.x,b=m.chart.chartWidth,a=m.chart.spacing,d=y(m.labelLeft,Math.min(m.pos,a[3]));a=y(m.labelRight,Math.max(m.isRadial?0:m.pos+m.len,b-a[1]));var f=this.label,e=this.rotation,h={left:0,center:.5,right:1}[m.labelAlign||f.attr("align")],r=f.getBBox().width,E=m.getSlotWidth(this),q=E,v=1,k,t={};if(e||"justify"!==y(p.overflow,
"justify"))0>e&&g-h*r<d?k=Math.round(g/Math.cos(e*C)-d):0<e&&g+h*r>a&&(k=Math.round((b-g)/Math.cos(e*C)));else if(b=g+(1-h)*r,g-h*r<d?q=c.x+q*(1-h)-d:b>a&&(q=a-c.x+q*h,v=-1),q=Math.min(E,q),q<E&&"center"===m.labelAlign&&(c.x+=v*(E-q-h*(E-Math.min(r,q)))),r>q||m.autoRotation&&(f.styles||{}).width)k=q;k&&(this.shortenLabel?this.shortenLabel():(t.width=Math.floor(k),(p.style||{}).textOverflow||(t.textOverflow="ellipsis"),f.css(t)))},getPosition:function(x,m,p,g){var b=this.axis,a=b.chart,d=g&&a.oldChartHeight||
a.chartHeight;x={x:x?c.correctFloat(b.translate(m+p,null,null,g)+b.transB):b.left+b.offset+(b.opposite?(g&&a.oldChartWidth||a.chartWidth)-b.right-b.left:0),y:x?d-b.bottom+b.offset-(b.opposite?b.height:0):c.correctFloat(d-b.translate(m+p,null,null,g)-b.transB)};x.y=Math.max(Math.min(x.y,1E5),-1E5);u(this,"afterGetPosition",{pos:x});return x},getLabelPosition:function(c,m,p,g,b,a,d,f){var e=this.axis,h=e.transA,r=e.isLinked&&e.linkedParent?e.linkedParent.reversed:e.reversed,E=e.staggerLines,q=e.tickRotCorr||
{x:0,y:0},v=b.y,k=g||e.reserveSpaceDefault?0:-e.labelOffset*("center"===e.labelAlign?.5:1),t={};A(v)||(v=0===e.side?p.rotation?-8:-p.getBBox().height:2===e.side?q.y+8:Math.cos(p.rotation*C)*(q.y-p.getBBox(!1,0).height/2));c=c+b.x+k+q.x-(a&&g?a*h*(r?-1:1):0);m=m+v-(a&&!g?a*h*(r?1:-1):0);E&&(p=d/(f||1)%E,e.opposite&&(p=E-p-1),m+=e.labelOffset/E*p);t.x=c;t.y=Math.round(m);u(this,"afterGetLabelPosition",{pos:t,tickmarkOffset:a,index:d});return t},getMarkPath:function(c,m,p,g,b,a){return a.crispLine(["M",
c,m,"L",c+(b?0:-p),m+(b?p:0)],g)},renderGridLine:function(c,m,p){var g=this.axis,b=g.options,a=this.gridLine,d={},f=this.pos,e=this.type,h=y(this.tickmarkOffset,g.tickmarkOffset),r=g.chart.renderer,E=e?e+"Grid":"grid",q=b[E+"LineWidth"],v=b[E+"LineColor"];b=b[E+"LineDashStyle"];a||(g.chart.styledMode||(d.stroke=v,d["stroke-width"]=q,b&&(d.dashstyle=b)),e||(d.zIndex=1),c&&(m=0),this.gridLine=a=r.path().attr(d).addClass("highcharts-"+(e?e+"-":"")+"grid-line").add(g.gridGroup));if(a&&(p=g.getPlotLinePath({value:f+
h,lineWidth:a.strokeWidth()*p,force:"pass",old:c})))a[c||this.isNew?"attr":"animate"]({d:p,opacity:m})},renderMark:function(c,m,p){var g=this.axis,b=g.options,a=g.chart.renderer,d=this.type,f=d?d+"Tick":"tick",e=g.tickSize(f),h=this.mark,r=!h,E=c.x;c=c.y;var q=y(b[f+"Width"],!d&&g.isXAxis?1:0);b=b[f+"Color"];e&&(g.opposite&&(e[0]=-e[0]),r&&(this.mark=h=a.path().addClass("highcharts-"+(d?d+"-":"")+"tick").add(g.axisGroup),g.chart.styledMode||h.attr({stroke:b,"stroke-width":q})),h[r?"attr":"animate"]({d:this.getMarkPath(E,
c,e[0],h.strokeWidth()*p,g.horiz,a),opacity:m}))},renderLabel:function(c,m,p,g){var b=this.axis,a=b.horiz,d=b.options,f=this.label,e=d.labels,h=e.step;b=y(this.tickmarkOffset,b.tickmarkOffset);var r=!0,E=c.x;c=c.y;f&&D(E)&&(f.xy=c=this.getLabelPosition(E,c,f,a,e,b,g,h),this.isFirst&&!this.isLast&&!y(d.showFirstLabel,1)||this.isLast&&!this.isFirst&&!y(d.showLastLabel,1)?r=!1:!a||e.step||e.rotation||m||0===p||this.handleOverflow(c),h&&g%h&&(r=!1),r&&D(c.y)?(c.opacity=p,f[this.isNewLabel?"attr":"animate"](c),
this.isNewLabel=!1):(f.attr("y",-9999),this.isNewLabel=!0))},render:function(x,m,p){var g=this.axis,b=g.horiz,a=this.pos,d=y(this.tickmarkOffset,g.tickmarkOffset);a=this.getPosition(b,a,d,m);d=a.x;var f=a.y;g=b&&d===g.pos+g.len||!b&&f===g.pos?-1:1;p=y(p,1);this.isActive=!0;this.renderGridLine(m,p,g);this.renderMark(a,p,g);this.renderLabel(a,m,p,x);this.isNew=!1;c.fireEvent(this,"afterRender")},destroy:function(){z(this,this.axis)}}});N(H,"parts/Axis.js",[H["parts/Globals.js"],H["parts/Utilities.js"]],
function(c,n){var A=n.defined,D=n.isArray,F=n.isNumber,z=n.isString,u=n.objectEach,L=n.splat,y=c.addEvent,C=c.animObject,x=c.arrayMax,m=c.arrayMin,p=c.color,g=c.correctFloat,b=c.defaultOptions,a=c.deg2rad,d=c.destroyObjectProperties,f=c.extend,e=c.fireEvent,h=c.format,r=c.getMagnitude,E=c.merge,q=c.normalizeTickInterval,v=c.pick,k=c.removeEvent,t=c.seriesTypes,B=c.syncTimeout,I=c.Tick;n=function(){this.init.apply(this,arguments)};c.extend(n.prototype,{defaultOptions:{dateTimeLabelFormats:{millisecond:{main:"%H:%M:%S.%L",
range:!1},second:{main:"%H:%M:%S",range:!1},minute:{main:"%H:%M",range:!1},hour:{main:"%H:%M",range:!1},day:{main:"%e. %b"},week:{main:"%e. %b"},month:{main:"%b '%y"},year:{main:"%Y"}},endOnTick:!1,labels:{enabled:!0,indentation:10,x:0,style:{color:"#666666",cursor:"default",fontSize:"11px"}},maxPadding:.01,minorTickLength:2,minorTickPosition:"outside",minPadding:.01,showEmpty:!0,startOfWeek:1,startOnTick:!1,tickLength:10,tickPixelInterval:100,tickmarkPlacement:"between",tickPosition:"outside",title:{align:"middle",
style:{color:"#666666"}},type:"linear",minorGridLineColor:"#f2f2f2",minorGridLineWidth:1,minorTickColor:"#999999",lineColor:"#ccd6eb",lineWidth:1,gridLineColor:"#e6e6e6",tickColor:"#ccd6eb"},defaultYAxisOptions:{endOnTick:!0,maxPadding:.05,minPadding:.05,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{allowOverlap:!1,enabled:!1,crop:!0,overflow:"justify",formatter:function(){return c.numberFormat(this.total,-1)},style:{color:"#000000",
fontSize:"11px",fontWeight:"bold",textOutline:"1px contrast"}},gridLineWidth:1,lineWidth:0},defaultLeftAxisOptions:{labels:{x:-15},title:{rotation:270}},defaultRightAxisOptions:{labels:{x:15},title:{rotation:90}},defaultBottomAxisOptions:{labels:{autoRotation:[-45],x:0},margin:15,title:{rotation:0}},defaultTopAxisOptions:{labels:{autoRotation:[-45],x:0},margin:15,title:{rotation:0}},init:function(a,b){var d=b.isX,l=this;l.chart=a;l.horiz=a.inverted&&!l.isZAxis?!d:d;l.isXAxis=d;l.coll=l.coll||(d?"xAxis":
"yAxis");e(this,"init",{userOptions:b});l.opposite=b.opposite;l.side=b.side||(l.horiz?l.opposite?0:2:l.opposite?1:3);l.setOptions(b);var w=this.options,f=w.type;l.labelFormatter=w.labels.formatter||l.defaultLabelFormatter;l.userOptions=b;l.minPixelPadding=0;l.reversed=w.reversed;l.visible=!1!==w.visible;l.zoomEnabled=!1!==w.zoomEnabled;l.hasNames="category"===f||!0===w.categories;l.categories=w.categories||l.hasNames;l.names||(l.names=[],l.names.keys={});l.plotLinesAndBandsGroups={};l.isLog="logarithmic"===
f;l.isDatetimeAxis="datetime"===f;l.positiveValuesOnly=l.isLog&&!l.allowNegativeLog;l.isLinked=A(w.linkedTo);l.ticks={};l.labelEdge=[];l.minorTicks={};l.plotLinesAndBands=[];l.alternateBands={};l.len=0;l.minRange=l.userMinRange=w.minRange||w.maxZoom;l.range=w.range;l.offset=w.offset||0;l.stacks={};l.oldStacks={};l.stacksTouched=0;l.max=null;l.min=null;l.crosshair=v(w.crosshair,L(a.options.tooltip.crosshairs)[d?0:1],!1);b=l.options.events;-1===a.axes.indexOf(l)&&(d?a.axes.splice(a.xAxis.length,0,l):
a.axes.push(l),a[l.coll].push(l));l.series=l.series||[];a.inverted&&!l.isZAxis&&d&&void 0===l.reversed&&(l.reversed=!0);u(b,function(a,b){c.isFunction(a)&&y(l,b,a)});l.lin2log=w.linearToLogConverter||l.lin2log;l.isLog&&(l.val2lin=l.log2lin,l.lin2val=l.lin2log);e(this,"afterInit")},setOptions:function(a){this.options=E(this.defaultOptions,"yAxis"===this.coll&&this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],
E(b[this.coll],a));e(this,"afterSetOptions",{userOptions:a})},defaultLabelFormatter:function(){var a=this.axis,d=this.value,e=a.chart.time,f=a.categories,k=this.dateTimeLabelFormat,t=b.lang,B=t.numericSymbols;t=t.numericSymbolMagnitude||1E3;var r=B&&B.length,q=a.options.labels.format;a=a.isLog?Math.abs(d):a.tickInterval;if(q)var v=h(q,this,e);else if(f)v=d;else if(k)v=e.dateFormat(k,d);else if(r&&1E3<=a)for(;r--&&void 0===v;)e=Math.pow(t,r+1),a>=e&&0===10*d%e&&null!==B[r]&&0!==d&&(v=c.numberFormat(d/
e,-1)+B[r]);void 0===v&&(v=1E4<=Math.abs(d)?c.numberFormat(d,-1):c.numberFormat(d,-1,void 0,""));return v},getSeriesExtremes:function(){var a=this,b=a.chart,d;e(this,"getSeriesExtremes",null,function(){a.hasVisibleSeries=!1;a.dataMin=a.dataMax=a.threshold=null;a.softThreshold=!a.isXAxis;a.buildStacks&&a.buildStacks();a.series.forEach(function(l){if(l.visible||!b.options.chart.ignoreHiddenSeries){var e=l.options,w=e.threshold;a.hasVisibleSeries=!0;a.positiveValuesOnly&&0>=w&&(w=null);if(a.isXAxis){if(e=
l.xData,e.length){d=l.getXExtremes(e);var f=d.min;var c=d.max;F(f)||f instanceof Date||(e=e.filter(F),d=l.getXExtremes(e),f=d.min,c=d.max);e.length&&(a.dataMin=Math.min(v(a.dataMin,f),f),a.dataMax=Math.max(v(a.dataMax,c),c))}}else if(l.getExtremes(),c=l.dataMax,f=l.dataMin,A(f)&&A(c)&&(a.dataMin=Math.min(v(a.dataMin,f),f),a.dataMax=Math.max(v(a.dataMax,c),c)),A(w)&&(a.threshold=w),!e.softThreshold||a.positiveValuesOnly)a.softThreshold=!1}})});e(this,"afterGetSeriesExtremes")},translate:function(a,
b,d,e,f,c){var l=this.linkedParent||this,w=1,k=0,t=e?l.oldTransA:l.transA;e=e?l.oldMin:l.min;var h=l.minPixelPadding;f=(l.isOrdinal||l.isBroken||l.isLog&&f)&&l.lin2val;t||(t=l.transA);d&&(w*=-1,k=l.len);l.reversed&&(w*=-1,k-=w*(l.sector||l.len));b?(a=(a*w+k-h)/t+e,f&&(a=l.lin2val(a))):(f&&(a=l.val2lin(a)),a=F(e)?w*(a-e)*t+k+w*h+(F(c)?t*c:0):void 0);return a},toPixels:function(a,b){return this.translate(a,!1,!this.horiz,null,!0)+(b?0:this.pos)},toValue:function(a,b){return this.translate(a-(b?0:this.pos),
!0,!this.horiz,null,!0)},getPlotLinePath:function(a){var b=this,d=b.chart,f=b.left,w=b.top,c=a.old,k=a.value,t=a.translatedValue,h=a.lineWidth,B=a.force,r,q,I,m,g=c&&d.oldChartHeight||d.chartHeight,p=c&&d.oldChartWidth||d.chartWidth,E,x=b.transB,u=function(a,b,d){if("pass"!==B&&a<b||a>d)B?a=Math.min(Math.max(b,a),d):E=!0;return a};a={value:k,lineWidth:h,old:c,force:B,acrossPanes:a.acrossPanes,translatedValue:t};e(this,"getPlotLinePath",a,function(a){t=v(t,b.translate(k,null,null,c));t=Math.min(Math.max(-1E5,
t),1E5);r=I=Math.round(t+x);q=m=Math.round(g-t-x);F(t)?b.horiz?(q=w,m=g-b.bottom,r=I=u(r,f,f+b.width)):(r=f,I=p-b.right,q=m=u(q,w,w+b.height)):(E=!0,B=!1);a.path=E&&!B?null:d.renderer.crispLine(["M",r,q,"L",I,m],h||1)});return a.path},getLinearTickPositions:function(a,b,d){var l=g(Math.floor(b/a)*a);d=g(Math.ceil(d/a)*a);var e=[],f;g(l+a)===l&&(f=20);if(this.single)return[b];for(b=l;b<=d;){e.push(b);b=g(b+a,f);if(b===w)break;var w=b}return e},getMinorTickInterval:function(){var a=this.options;return!0===
a.minorTicks?v(a.minorTickInterval,"auto"):!1===a.minorTicks?null:a.minorTickInterval},getMinorTickPositions:function(){var a=this,b=a.options,d=a.tickPositions,e=a.minorTickInterval,f=[],c=a.pointRangePadding||0,k=a.min-c;c=a.max+c;var t=c-k;if(t&&t/e<a.len/3)if(a.isLog)this.paddedTicks.forEach(function(b,d,l){d&&f.push.apply(f,a.getLogTickPositions(e,l[d-1],l[d],!0))});else if(a.isDatetimeAxis&&"auto"===this.getMinorTickInterval())f=f.concat(a.getTimeTicks(a.normalizeTimeTickInterval(e),k,c,b.startOfWeek));
else for(b=k+(d[0]-k)%e;b<=c&&b!==f[0];b+=e)f.push(b);0!==f.length&&a.trimTicks(f);return f},adjustForMinRange:function(){var a=this.options,b=this.min,d=this.max,e,f,c,k,t;this.isXAxis&&void 0===this.minRange&&!this.isLog&&(A(a.min)||A(a.max)?this.minRange=null:(this.series.forEach(function(a){k=a.xData;for(f=t=a.xIncrement?1:k.length-1;0<f;f--)if(c=k[f]-k[f-1],void 0===e||c<e)e=c}),this.minRange=Math.min(5*e,this.dataMax-this.dataMin)));if(d-b<this.minRange){var h=this.dataMax-this.dataMin>=this.minRange;
var B=this.minRange;var r=(B-d+b)/2;r=[b-r,v(a.min,b-r)];h&&(r[2]=this.isLog?this.log2lin(this.dataMin):this.dataMin);b=x(r);d=[b+B,v(a.max,b+B)];h&&(d[2]=this.isLog?this.log2lin(this.dataMax):this.dataMax);d=m(d);d-b<B&&(r[0]=d-B,r[1]=v(a.min,d-B),b=x(r))}this.min=b;this.max=d},getClosest:function(){var a;this.categories?a=1:this.series.forEach(function(b){var d=b.closestPointRange,l=b.visible||!b.chart.options.chart.ignoreHiddenSeries;!b.noSharedTooltip&&A(d)&&l&&(a=A(a)?Math.min(a,d):d)});return a},
nameToX:function(a){var b=D(this.categories),d=b?this.categories:this.names,e=a.options.x;a.series.requireSorting=!1;A(e)||(e=!1===this.options.uniqueNames?a.series.autoIncrement():b?d.indexOf(a.name):v(d.keys[a.name],-1));if(-1===e){if(!b)var f=d.length}else f=e;void 0!==f&&(this.names[f]=a.name,this.names.keys[a.name]=f);return f},updateNames:function(){var a=this,b=this.names;0<b.length&&(Object.keys(b.keys).forEach(function(a){delete b.keys[a]}),b.length=0,this.minRange=this.userMinRange,(this.series||
[]).forEach(function(b){b.xIncrement=null;if(!b.points||b.isDirtyData)a.max=Math.max(a.max,b.xData.length-1),b.processData(),b.generatePoints();b.data.forEach(function(d,l){if(d&&d.options&&void 0!==d.name){var e=a.nameToX(d);void 0!==e&&e!==d.x&&(d.x=e,b.xData[l]=e)}})}))},setAxisTranslation:function(a){var b=this,d=b.max-b.min,f=b.axisPointRange||0,c=0,w=0,k=b.linkedParent,h=!!b.categories,B=b.transA,r=b.isXAxis;if(r||h||f){var q=b.getClosest();k?(c=k.minPointOffset,w=k.pointRangePadding):b.series.forEach(function(a){var d=
h?1:r?v(a.options.pointRange,q,0):b.axisPointRange||0,l=a.options.pointPlacement;f=Math.max(f,d);if(!b.single||h)a=t.xrange&&a instanceof t.xrange?!r:r,c=Math.max(c,a&&z(l)?0:d/2),w=Math.max(w,a&&"on"===l?0:d)});k=b.ordinalSlope&&q?b.ordinalSlope/q:1;b.minPointOffset=c*=k;b.pointRangePadding=w*=k;b.pointRange=Math.min(f,d);r&&(b.closestPointRange=q)}a&&(b.oldTransA=B);b.translationSlope=b.transA=B=b.staticScale||b.len/(d+w||1);b.transB=b.horiz?b.left:b.bottom;b.minPixelPadding=B*c;e(this,"afterSetAxisTranslation")},
minFromRange:function(){return this.max-this.range},setTickInterval:function(a){var b=this,d=b.chart,f=b.options,w=b.isLog,k=b.isDatetimeAxis,t=b.isXAxis,h=b.isLinked,B=f.maxPadding,I=f.minPadding,m=f.tickInterval,p=f.tickPixelInterval,E=b.categories,x=F(b.threshold)?b.threshold:null,u=b.softThreshold;k||E||h||this.getTickAmount();var z=v(b.userMin,f.min);var y=v(b.userMax,f.max);if(h){b.linkedParent=d[b.coll][f.linkedTo];var n=b.linkedParent.getExtremes();b.min=v(n.min,n.dataMin);b.max=v(n.max,n.dataMax);
f.type!==b.linkedParent.options.type&&c.error(11,1,d)}else{if(!u&&A(x))if(b.dataMin>=x)n=x,I=0;else if(b.dataMax<=x){var L=x;B=0}b.min=v(z,n,b.dataMin);b.max=v(y,L,b.dataMax)}w&&(b.positiveValuesOnly&&!a&&0>=Math.min(b.min,v(b.dataMin,b.min))&&c.error(10,1,d),b.min=g(b.log2lin(b.min),15),b.max=g(b.log2lin(b.max),15));b.range&&A(b.max)&&(b.userMin=b.min=z=Math.max(b.dataMin,b.minFromRange()),b.userMax=y=b.max,b.range=null);e(b,"foundExtremes");b.beforePadding&&b.beforePadding();b.adjustForMinRange();
!(E||b.axisPointRange||b.usePercentage||h)&&A(b.min)&&A(b.max)&&(d=b.max-b.min)&&(!A(z)&&I&&(b.min-=d*I),!A(y)&&B&&(b.max+=d*B));F(f.softMin)&&!F(b.userMin)&&f.softMin<b.min&&(b.min=z=f.softMin);F(f.softMax)&&!F(b.userMax)&&f.softMax>b.max&&(b.max=y=f.softMax);F(f.floor)&&(b.min=Math.min(Math.max(b.min,f.floor),Number.MAX_VALUE));F(f.ceiling)&&(b.max=Math.max(Math.min(b.max,f.ceiling),v(b.userMax,-Number.MAX_VALUE)));u&&A(b.dataMin)&&(x=x||0,!A(z)&&b.min<x&&b.dataMin>=x?b.min=b.options.minRange?Math.min(x,
b.max-b.minRange):x:!A(y)&&b.max>x&&b.dataMax<=x&&(b.max=b.options.minRange?Math.max(x,b.min+b.minRange):x));b.tickInterval=b.min===b.max||void 0===b.min||void 0===b.max?1:h&&!m&&p===b.linkedParent.options.tickPixelInterval?m=b.linkedParent.tickInterval:v(m,this.tickAmount?(b.max-b.min)/Math.max(this.tickAmount-1,1):void 0,E?1:(b.max-b.min)*p/Math.max(b.len,p));t&&!a&&b.series.forEach(function(a){a.processData(b.min!==b.oldMin||b.max!==b.oldMax)});b.setAxisTranslation(!0);b.beforeSetTickPositions&&
b.beforeSetTickPositions();b.postProcessTickInterval&&(b.tickInterval=b.postProcessTickInterval(b.tickInterval));b.pointRange&&!m&&(b.tickInterval=Math.max(b.pointRange,b.tickInterval));a=v(f.minTickInterval,b.isDatetimeAxis&&b.closestPointRange);!m&&b.tickInterval<a&&(b.tickInterval=a);k||w||m||(b.tickInterval=q(b.tickInterval,null,r(b.tickInterval),v(f.allowDecimals,!(.5<b.tickInterval&&5>b.tickInterval&&1E3<b.max&&9999>b.max)),!!this.tickAmount));this.tickAmount||(b.tickInterval=b.unsquish());
this.setTickPositions()},setTickPositions:function(){var a=this.options,b=a.tickPositions;var d=this.getMinorTickInterval();var f=a.tickPositioner,k=a.startOnTick,t=a.endOnTick;this.tickmarkOffset=this.categories&&"between"===a.tickmarkPlacement&&1===this.tickInterval?.5:0;this.minorTickInterval="auto"===d&&this.tickInterval?this.tickInterval/5:d;this.single=this.min===this.max&&A(this.min)&&!this.tickAmount&&(parseInt(this.min,10)===this.min||!1!==a.allowDecimals);this.tickPositions=d=b&&b.slice();
!d&&(!this.ordinalPositions&&(this.max-this.min)/this.tickInterval>Math.max(2*this.len,200)?(d=[this.min,this.max],c.error(19,!1,this.chart)):d=this.isDatetimeAxis?this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval,a.units),this.min,this.max,a.startOfWeek,this.ordinalPositions,this.closestPointRange,!0):this.isLog?this.getLogTickPositions(this.tickInterval,this.min,this.max):this.getLinearTickPositions(this.tickInterval,this.min,this.max),d.length>this.len&&(d=[d[0],d.pop()],d[0]===
d[1]&&(d.length=1)),this.tickPositions=d,f&&(f=f.apply(this,[this.min,this.max])))&&(this.tickPositions=d=f);this.paddedTicks=d.slice(0);this.trimTicks(d,k,t);this.isLinked||(this.single&&2>d.length&&!this.categories&&(this.min-=.5,this.max+=.5),b||f||this.adjustTickAmount());e(this,"afterSetTickPositions")},trimTicks:function(a,b,d){var f=a[0],c=a[a.length-1],l=this.minPointOffset||0;e(this,"trimTicks");if(!this.isLinked){if(b&&-Infinity!==f)this.min=f;else for(;this.min-l>a[0];)a.shift();if(d)this.max=
c;else for(;this.max+l<a[a.length-1];)a.pop();0===a.length&&A(f)&&!this.options.tickPositions&&a.push((c+f)/2)}},alignToOthers:function(){var a={},b,d=this.options;!1===this.chart.options.chart.alignTicks||!1===d.alignTicks||!1===d.startOnTick||!1===d.endOnTick||this.isLog||this.chart[this.coll].forEach(function(d){var f=d.options;f=[d.horiz?f.left:f.top,f.width,f.height,f.pane].join();d.series.length&&(a[f]?b=!0:a[f]=1)});return b},getTickAmount:function(){var a=this.options,b=a.tickAmount,d=a.tickPixelInterval;
!A(a.tickInterval)&&this.len<d&&!this.isRadial&&!this.isLog&&a.startOnTick&&a.endOnTick&&(b=2);!b&&this.alignToOthers()&&(b=Math.ceil(this.len/d)+1);4>b&&(this.finalTickAmt=b,b=5);this.tickAmount=b},adjustTickAmount:function(){var a=this.options,b=this.tickInterval,d=this.tickPositions,f=this.tickAmount,e=this.finalTickAmt,c=d&&d.length,k=v(this.threshold,this.softThreshold?0:null),t;if(this.hasData()){if(c<f){for(t=this.min;d.length<f;)d.length%2||t===k?d.push(g(d[d.length-1]+b)):d.unshift(g(d[0]-
b));this.transA*=(c-1)/(f-1);this.min=a.startOnTick?d[0]:Math.min(this.min,d[0]);this.max=a.endOnTick?d[d.length-1]:Math.max(this.max,d[d.length-1])}else c>f&&(this.tickInterval*=2,this.setTickPositions());if(A(e)){for(b=a=d.length;b--;)(3===e&&1===b%2||2>=e&&0<b&&b<a-1)&&d.splice(b,1);this.finalTickAmt=void 0}}},setScale:function(){var a=this.series.some(function(a){return a.isDirtyData||a.isDirty||a.xAxis&&a.xAxis.isDirty}),b;this.oldMin=this.min;this.oldMax=this.max;this.oldAxisLength=this.len;
this.setAxisSize();(b=this.len!==this.oldAxisLength)||a||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax||this.alignToOthers()?(this.resetStacks&&this.resetStacks(),this.forceRedraw=!1,this.getSeriesExtremes(),this.setTickInterval(),this.oldUserMin=this.userMin,this.oldUserMax=this.userMax,this.isDirty||(this.isDirty=b||this.min!==this.oldMin||this.max!==this.oldMax)):this.cleanStacks&&this.cleanStacks();e(this,"afterSetScale")},setExtremes:function(a,
b,d,c,k){var l=this,w=l.chart;d=v(d,!0);l.series.forEach(function(a){delete a.kdTree});k=f(k,{min:a,max:b});e(l,"setExtremes",k,function(){l.userMin=a;l.userMax=b;l.eventArgs=k;d&&w.redraw(c)})},zoom:function(a,b){var d=this.dataMin,f=this.dataMax,c=this.options,k=Math.min(d,v(c.min,d)),l=Math.max(f,v(c.max,f));a={newMin:a,newMax:b};e(this,"zoom",a,function(a){var b=a.newMin,e=a.newMax;if(b!==this.min||e!==this.max)this.allowZoomOutside||(A(d)&&(b<k&&(b=k),b>l&&(b=l)),A(f)&&(e<k&&(e=k),e>l&&(e=l))),
this.displayBtn=void 0!==b||void 0!==e,this.setExtremes(b,e,!1,void 0,{trigger:"zoom"});a.zoomed=!0});return a.zoomed},setAxisSize:function(){var a=this.chart,b=this.options,d=b.offsets||[0,0,0,0],f=this.horiz,e=this.width=Math.round(c.relativeLength(v(b.width,a.plotWidth-d[3]+d[1]),a.plotWidth)),k=this.height=Math.round(c.relativeLength(v(b.height,a.plotHeight-d[0]+d[2]),a.plotHeight)),t=this.top=Math.round(c.relativeLength(v(b.top,a.plotTop+d[0]),a.plotHeight,a.plotTop));b=this.left=Math.round(c.relativeLength(v(b.left,
a.plotLeft+d[3]),a.plotWidth,a.plotLeft));this.bottom=a.chartHeight-k-t;this.right=a.chartWidth-e-b;this.len=Math.max(f?e:k,0);this.pos=f?b:t},getExtremes:function(){var a=this.isLog;return{min:a?g(this.lin2log(this.min)):this.min,max:a?g(this.lin2log(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}},getThreshold:function(a){var b=this.isLog,d=b?this.lin2log(this.min):this.min;b=b?this.lin2log(this.max):this.max;null===a||-Infinity===a?a=d:Infinity===
a?a=b:d>a?a=d:b<a&&(a=b);return this.translate(a,0,1,0,1)},autoLabelAlign:function(a){var b=(v(a,0)-90*this.side+720)%360;a={align:"center"};e(this,"autoLabelAlign",a,function(a){15<b&&165>b?a.align="right":195<b&&345>b&&(a.align="left")});return a.align},tickSize:function(a){var b=this.options,d=b[a+"Length"],f=v(b[a+"Width"],"tick"===a&&this.isXAxis&&!this.categories?1:0);if(f&&d){"inside"===b[a+"Position"]&&(d=-d);var c=[d,f]}a={tickSize:c};e(this,"afterTickSize",a);return a.tickSize},labelMetrics:function(){var a=
this.tickPositions&&this.tickPositions[0]||0;return this.chart.renderer.fontMetrics(this.options.labels.style&&this.options.labels.style.fontSize,this.ticks[a]&&this.ticks[a].label)},unsquish:function(){var b=this.options.labels,d=this.horiz,f=this.tickInterval,e=f,c=this.len/(((this.categories?1:0)+this.max-this.min)/f),k,t=b.rotation,h=this.labelMetrics(),B,r=Number.MAX_VALUE,q,I=this.max-this.min,m=function(a){var b=a/(c||1);b=1<b?Math.ceil(b):1;b*f>I&&Infinity!==a&&Infinity!==c&&I&&(b=Math.ceil(I/
f));return g(b*f)};d?(q=!b.staggerLines&&!b.step&&(A(t)?[t]:c<v(b.autoRotationLimit,80)&&b.autoRotation))&&q.forEach(function(b){if(b===t||b&&-90<=b&&90>=b){B=m(Math.abs(h.h/Math.sin(a*b)));var d=B+Math.abs(b/360);d<r&&(r=d,k=b,e=B)}}):b.step||(e=m(h.h));this.autoRotation=q;this.labelRotation=v(k,t);return e},getSlotWidth:function(a){var b=this.chart,d=this.horiz,f=this.options.labels,e=Math.max(this.tickPositions.length-(this.categories?0:1),1),c=b.margin[3];return a&&a.slotWidth||d&&2>(f.step||
0)&&!f.rotation&&(this.staggerLines||1)*this.len/e||!d&&(f.style&&parseInt(f.style.width,10)||c&&c-b.spacing[3]||.33*b.chartWidth)},renderUnsquish:function(){var a=this.chart,b=a.renderer,d=this.tickPositions,f=this.ticks,e=this.options.labels,c=e&&e.style||{},k=this.horiz,t=this.getSlotWidth(),h=Math.max(1,Math.round(t-2*(e.padding||5))),B={},r=this.labelMetrics(),q=e.style&&e.style.textOverflow,v=0;z(e.rotation)||(B.rotation=e.rotation||0);d.forEach(function(a){(a=f[a])&&a.label&&a.label.textPxLength>
v&&(v=a.label.textPxLength)});this.maxLabelLength=v;if(this.autoRotation)v>h&&v>r.h?B.rotation=this.labelRotation:this.labelRotation=0;else if(t){var I=h;if(!q){var m="clip";for(h=d.length;!k&&h--;){var g=d[h];if(g=f[g].label)g.styles&&"ellipsis"===g.styles.textOverflow?g.css({textOverflow:"clip"}):g.textPxLength>t&&g.css({width:t+"px"}),g.getBBox().height>this.len/d.length-(r.h-r.f)&&(g.specificTextOverflow="ellipsis")}}}B.rotation&&(I=v>.5*a.chartHeight?.33*a.chartHeight:v,q||(m="ellipsis"));if(this.labelAlign=
e.align||this.autoLabelAlign(this.labelRotation))B.align=this.labelAlign;d.forEach(function(a){var b=(a=f[a])&&a.label,d=c.width,e={};b&&(b.attr(B),a.shortenLabel?a.shortenLabel():I&&!d&&"nowrap"!==c.whiteSpace&&(I<b.textPxLength||"SPAN"===b.element.tagName)?(e.width=I,q||(e.textOverflow=b.specificTextOverflow||m),b.css(e)):b.styles&&b.styles.width&&!e.width&&!d&&b.css({width:null}),delete b.specificTextOverflow,a.rotation=B.rotation)},this);this.tickRotCorr=b.rotCorr(r.b,this.labelRotation||0,0!==
this.side)},hasData:function(){return this.series.some(function(a){return a.hasData()})||this.options.showEmpty&&A(this.min)&&A(this.max)},addTitle:function(a){var b=this.chart.renderer,d=this.horiz,f=this.opposite,e=this.options.title,c,k=this.chart.styledMode;this.axisTitle||((c=e.textAlign)||(c=(d?{low:"left",middle:"center",high:"right"}:{low:f?"right":"left",middle:"center",high:f?"left":"right"})[e.align]),this.axisTitle=b.text(e.text,0,0,e.useHTML).attr({zIndex:7,rotation:e.rotation||0,align:c}).addClass("highcharts-axis-title"),
k||this.axisTitle.css(E(e.style)),this.axisTitle.add(this.axisGroup),this.axisTitle.isNew=!0);k||e.style.width||this.isRadial||this.axisTitle.css({width:this.len});this.axisTitle[a?"show":"hide"](a)},generateTick:function(a){var b=this.ticks;b[a]?b[a].addLabel():b[a]=new I(this,a)},getOffset:function(){var a=this,b=a.chart,d=b.renderer,f=a.options,c=a.tickPositions,k=a.ticks,t=a.horiz,h=a.side,B=b.inverted&&!a.isZAxis?[1,0,3,2][h]:h,r,q=0,I=0,m=f.title,g=f.labels,p=0,E=b.axisOffset;b=b.clipOffset;
var x=[-1,1,1,-1][h],z=f.className,y=a.axisParent;var n=a.hasData();a.showAxis=r=n||v(f.showEmpty,!0);a.staggerLines=a.horiz&&g.staggerLines;a.axisGroup||(a.gridGroup=d.g("grid").attr({zIndex:f.gridZIndex||1}).addClass("highcharts-"+this.coll.toLowerCase()+"-grid "+(z||"")).add(y),a.axisGroup=d.g("axis").attr({zIndex:f.zIndex||2}).addClass("highcharts-"+this.coll.toLowerCase()+" "+(z||"")).add(y),a.labelGroup=d.g("axis-labels").attr({zIndex:g.zIndex||7}).addClass("highcharts-"+a.coll.toLowerCase()+
"-labels "+(z||"")).add(y));n||a.isLinked?(c.forEach(function(b,d){a.generateTick(b,d)}),a.renderUnsquish(),a.reserveSpaceDefault=0===h||2===h||{1:"left",3:"right"}[h]===a.labelAlign,v(g.reserveSpace,"center"===a.labelAlign?!0:null,a.reserveSpaceDefault)&&c.forEach(function(a){p=Math.max(k[a].getLabelSize(),p)}),a.staggerLines&&(p*=a.staggerLines),a.labelOffset=p*(a.opposite?-1:1)):u(k,function(a,b){a.destroy();delete k[b]});if(m&&m.text&&!1!==m.enabled&&(a.addTitle(r),r&&!1!==m.reserveSpace)){a.titleOffset=
q=a.axisTitle.getBBox()[t?"height":"width"];var L=m.offset;I=A(L)?0:v(m.margin,t?5:10)}a.renderLine();a.offset=x*v(f.offset,E[h]?E[h]+(f.margin||0):0);a.tickRotCorr=a.tickRotCorr||{x:0,y:0};d=0===h?-a.labelMetrics().h:2===h?a.tickRotCorr.y:0;I=Math.abs(p)+I;p&&(I=I-d+x*(t?v(g.y,a.tickRotCorr.y+8*x):g.x));a.axisTitleMargin=v(L,I);a.getMaxLabelDimensions&&(a.maxLabelDimensions=a.getMaxLabelDimensions(k,c));t=this.tickSize("tick");E[h]=Math.max(E[h],a.axisTitleMargin+q+x*a.offset,I,c&&c.length&&t?t[0]+
x*a.offset:0);f=f.offset?0:2*Math.floor(a.axisLine.strokeWidth()/2);b[B]=Math.max(b[B],f);e(this,"afterGetOffset")},getLinePath:function(a){var b=this.chart,d=this.opposite,f=this.offset,e=this.horiz,c=this.left+(d?this.width:0)+f;f=b.chartHeight-this.bottom-(d?this.height:0)+f;d&&(a*=-1);return b.renderer.crispLine(["M",e?this.left:c,e?f:this.top,"L",e?b.chartWidth-this.right:c,e?f:b.chartHeight-this.bottom],a)},renderLine:function(){this.axisLine||(this.axisLine=this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),
this.chart.styledMode||this.axisLine.attr({stroke:this.options.lineColor,"stroke-width":this.options.lineWidth,zIndex:7}))},getTitlePosition:function(){var a=this.horiz,b=this.left,d=this.top,f=this.len,c=this.options.title,k=a?b:d,t=this.opposite,h=this.offset,B=c.x||0,r=c.y||0,q=this.axisTitle,v=this.chart.renderer.fontMetrics(c.style&&c.style.fontSize,q);q=Math.max(q.getBBox(null,0).height-v.h-1,0);f={low:k+(a?0:f),middle:k+f/2,high:k+(a?f:0)}[c.align];b=(a?d+this.height:b)+(a?1:-1)*(t?-1:1)*this.axisTitleMargin+
[-q,q,v.f,-q][this.side];a={x:a?f+B:b+(t?this.width:0)+h+B,y:a?b+r-(t?this.height:0)+h:f+r};e(this,"afterGetTitlePosition",{titlePosition:a});return a},renderMinorTick:function(a){var b=this.chart.hasRendered&&F(this.oldMin),d=this.minorTicks;d[a]||(d[a]=new I(this,a,"minor"));b&&d[a].isNew&&d[a].render(null,!0);d[a].render(null,!1,1)},renderTick:function(a,b){var d=this.isLinked,f=this.ticks,e=this.chart.hasRendered&&F(this.oldMin);if(!d||a>=this.min&&a<=this.max)f[a]||(f[a]=new I(this,a)),e&&f[a].isNew&&
f[a].render(b,!0,-1),f[a].render(b)},render:function(){var a=this,b=a.chart,d=a.options,f=a.isLog,k=a.isLinked,t=a.tickPositions,h=a.axisTitle,r=a.ticks,q=a.minorTicks,v=a.alternateBands,m=d.stackLabels,g=d.alternateGridColor,p=a.tickmarkOffset,E=a.axisLine,x=a.showAxis,z=C(b.renderer.globalAnimation),y,n;a.labelEdge.length=0;a.overlap=!1;[r,q,v].forEach(function(a){u(a,function(a){a.isActive=!1})});if(a.hasData()||k)a.minorTickInterval&&!a.categories&&a.getMinorTickPositions().forEach(function(b){a.renderMinorTick(b)}),
t.length&&(t.forEach(function(b,d){a.renderTick(b,d)}),p&&(0===a.min||a.single)&&(r[-1]||(r[-1]=new I(a,-1,null,!0)),r[-1].render(-1))),g&&t.forEach(function(d,e){n=void 0!==t[e+1]?t[e+1]+p:a.max-p;0===e%2&&d<a.max&&n<=a.max+(b.polar?-p:p)&&(v[d]||(v[d]=new c.PlotLineOrBand(a)),y=d+p,v[d].options={from:f?a.lin2log(y):y,to:f?a.lin2log(n):n,color:g},v[d].render(),v[d].isActive=!0)}),a._addedPlotLB||((d.plotLines||[]).concat(d.plotBands||[]).forEach(function(b){a.addPlotBandOrLine(b)}),a._addedPlotLB=
!0);[r,q,v].forEach(function(a){var d,f=[],e=z.duration;u(a,function(a,b){a.isActive||(a.render(b,!1,0),a.isActive=!1,f.push(b))});B(function(){for(d=f.length;d--;)a[f[d]]&&!a[f[d]].isActive&&(a[f[d]].destroy(),delete a[f[d]])},a!==v&&b.hasRendered&&e?e:0)});E&&(E[E.isPlaced?"animate":"attr"]({d:this.getLinePath(E.strokeWidth())}),E.isPlaced=!0,E[x?"show":"hide"](x));h&&x&&(d=a.getTitlePosition(),F(d.y)?(h[h.isNew?"attr":"animate"](d),h.isNew=!1):(h.attr("y",-9999),h.isNew=!0));m&&m.enabled&&a.renderStackTotals();
a.isDirty=!1;e(this,"afterRender")},redraw:function(){this.visible&&(this.render(),this.plotLinesAndBands.forEach(function(a){a.render()}));this.series.forEach(function(a){a.isDirty=!0})},keepProps:"extKey hcEvents names series userMax userMin".split(" "),destroy:function(a){var b=this,f=b.stacks,c=b.plotLinesAndBands,t;e(this,"destroy",{keepEvents:a});a||k(b);u(f,function(a,b){d(a);f[b]=null});[b.ticks,b.minorTicks,b.alternateBands].forEach(function(a){d(a)});if(c)for(a=c.length;a--;)c[a].destroy();
"stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" ").forEach(function(a){b[a]&&(b[a]=b[a].destroy())});for(t in b.plotLinesAndBandsGroups)b.plotLinesAndBandsGroups[t]=b.plotLinesAndBandsGroups[t].destroy();u(b,function(a,d){-1===b.keepProps.indexOf(d)&&delete b[d]})},drawCrosshair:function(a,b){var d,f=this.crosshair,c=v(f.snap,!0),k,l=this.cross;e(this,"drawCrosshair",{e:a,point:b});a||(a=this.cross&&this.cross.e);if(this.crosshair&&!1!==(A(b)||!c)){c?A(b)&&
(k=v("colorAxis"!==this.coll?b.crosshairPos:null,this.isXAxis?b.plotX:this.len-b.plotY)):k=a&&(this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos);A(k)&&(d=this.getPlotLinePath({value:b&&(this.isXAxis?b.x:v(b.stackY,b.y)),translatedValue:k})||null);if(!A(d)){this.hideCrosshair();return}c=this.categories&&!this.isRadial;l||(this.cross=l=this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-"+(c?"category ":"thin ")+f.className).attr({zIndex:v(f.zIndex,2)}).add(),this.chart.styledMode||
(l.attr({stroke:f.color||(c?p("#ccd6eb").setOpacity(.25).get():"#cccccc"),"stroke-width":v(f.width,1)}).css({"pointer-events":"none"}),f.dashStyle&&l.attr({dashstyle:f.dashStyle})));l.show().attr({d:d});c&&!f.width&&l.attr({"stroke-width":this.transA});this.cross.e=a}else this.hideCrosshair();e(this,"afterDrawCrosshair",{e:a,point:b})},hideCrosshair:function(){this.cross&&this.cross.hide();e(this,"afterHideCrosshair")}});return c.Axis=n});N(H,"parts/DateTimeAxis.js",[H["parts/Globals.js"]],function(c){var n=
c.Axis,A=c.getMagnitude,D=c.normalizeTickInterval,F=c.timeUnits;n.prototype.getTimeTicks=function(){return this.chart.time.getTimeTicks.apply(this.chart.time,arguments)};n.prototype.normalizeTimeTickInterval=function(c,u){var z=u||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]];u=z[z.length-1];var y=F[u[0]],n=u[1],x;for(x=0;x<z.length&&!(u=z[x],y=F[u[0]],
n=u[1],z[x+1]&&c<=(y*n[n.length-1]+F[z[x+1][0]])/2);x++);y===F.year&&c<5*y&&(n=[1,2,5]);c=D(c/y,n,"year"===u[0]?Math.max(A(c/y),1):1);return{unitRange:y,count:c,unitName:u[0]}}});N(H,"parts/LogarithmicAxis.js",[H["parts/Globals.js"]],function(c){var n=c.Axis,A=c.getMagnitude,D=c.normalizeTickInterval,F=c.pick;n.prototype.getLogTickPositions=function(c,u,n,y){var z=this.options,x=this.len,m=[];y||(this._minorAutoInterval=null);if(.5<=c)c=Math.round(c),m=this.getLinearTickPositions(c,u,n);else if(.08<=
c){x=Math.floor(u);var p,g;for(z=.3<c?[1,2,4]:.15<c?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];x<n+1&&!g;x++){var b=z.length;for(p=0;p<b&&!g;p++){var a=this.log2lin(this.lin2log(x)*z[p]);a>u&&(!y||d<=n)&&void 0!==d&&m.push(d);d>n&&(g=!0);var d=a}}}else u=this.lin2log(u),n=this.lin2log(n),c=y?this.getMinorTickInterval():z.tickInterval,c=F("auto"===c?null:c,this._minorAutoInterval,z.tickPixelInterval/(y?5:1)*(n-u)/((y?x/this.tickPositions.length:x)||1)),c=D(c,null,A(c)),m=this.getLinearTickPositions(c,u,n).map(this.log2lin),
y||(this._minorAutoInterval=c/5);y||(this.tickInterval=c);return m};n.prototype.log2lin=function(c){return Math.log(c)/Math.LN10};n.prototype.lin2log=function(c){return Math.pow(10,c)}});N(H,"parts/PlotLineOrBand.js",[H["parts/Globals.js"],H["parts/Axis.js"],H["parts/Utilities.js"]],function(c,n,A){var D=A.defined,F=A.erase,z=A.objectEach,u=c.arrayMax,L=c.arrayMin,y=c.destroyObjectProperties,C=c.merge,x=c.pick;c.PlotLineOrBand=function(c,p){this.axis=c;p&&(this.options=p,this.id=p.id)};c.PlotLineOrBand.prototype=
{render:function(){c.fireEvent(this,"render");var m=this,p=m.axis,g=p.horiz,b=m.options,a=b.label,d=m.label,f=b.to,e=b.from,h=b.value,r=D(e)&&D(f),E=D(h),q=m.svgElem,v=!q,k=[],t=b.color,B=x(b.zIndex,0),I=b.events;k={"class":"highcharts-plot-"+(r?"band ":"line ")+(b.className||"")};var w={},l=p.chart.renderer,J=r?"bands":"lines";p.isLog&&(e=p.log2lin(e),f=p.log2lin(f),h=p.log2lin(h));p.chart.styledMode||(E?(k.stroke=t||"#999999",k["stroke-width"]=x(b.width,1),b.dashStyle&&(k.dashstyle=b.dashStyle)):
r&&(k.fill=t||"#e6ebf5",b.borderWidth&&(k.stroke=b.borderColor,k["stroke-width"]=b.borderWidth)));w.zIndex=B;J+="-"+B;(t=p.plotLinesAndBandsGroups[J])||(p.plotLinesAndBandsGroups[J]=t=l.g("plot-"+J).attr(w).add());v&&(m.svgElem=q=l.path().attr(k).add(t));if(E)k=p.getPlotLinePath({value:h,lineWidth:q.strokeWidth(),acrossPanes:b.acrossPanes});else if(r)k=p.getPlotBandPath(e,f,b);else return;(v||!q.d)&&k&&k.length?(q.attr({d:k}),I&&z(I,function(a,b){q.on(b,function(a){I[b].apply(m,[a])})})):q&&(k?(q.show(!0),
q.animate({d:k})):q.d&&(q.hide(),d&&(m.label=d=d.destroy())));a&&(D(a.text)||D(a.formatter))&&k&&k.length&&0<p.width&&0<p.height&&!k.isFlat?(a=C({align:g&&r&&"center",x:g?!r&&4:10,verticalAlign:!g&&r&&"middle",y:g?r?16:10:r?6:-4,rotation:g&&!r&&90},a),this.renderLabel(a,k,r,B)):d&&d.hide();return m},renderLabel:function(c,p,g,b){var a=this.label,d=this.axis.chart.renderer;a||(a={align:c.textAlign||c.align,rotation:c.rotation,"class":"highcharts-plot-"+(g?"band":"line")+"-label "+(c.className||"")},
a.zIndex=b,b=this.getLabelText(c),this.label=a=d.text(b,0,0,c.useHTML).attr(a).add(),this.axis.chart.styledMode||a.css(c.style));d=p.xBounds||[p[1],p[4],g?p[6]:p[1]];p=p.yBounds||[p[2],p[5],g?p[7]:p[2]];g=L(d);b=L(p);a.align(c,!1,{x:g,y:b,width:u(d)-g,height:u(p)-b});a.show(!0)},getLabelText:function(c){return D(c.formatter)?c.formatter.call(this):c.text},destroy:function(){F(this.axis.plotLinesAndBands,this);delete this.axis;y(this)}};c.extend(n.prototype,{getPlotBandPath:function(c,p){var g=this.getPlotLinePath({value:p,
force:!0,acrossPanes:this.options.acrossPanes}),b=this.getPlotLinePath({value:c,force:!0,acrossPanes:this.options.acrossPanes}),a=[],d=this.horiz,f=1;c=c<this.min&&p<this.min||c>this.max&&p>this.max;if(b&&g){if(c){var e=b.toString()===g.toString();f=0}for(c=0;c<b.length;c+=6)d&&g[c+1]===b[c+1]?(g[c+1]+=f,g[c+4]+=f):d||g[c+2]!==b[c+2]||(g[c+2]+=f,g[c+5]+=f),a.push("M",b[c+1],b[c+2],"L",b[c+4],b[c+5],g[c+4],g[c+5],g[c+1],g[c+2],"z"),a.isFlat=e}return a},addPlotBand:function(c){return this.addPlotBandOrLine(c,
"plotBands")},addPlotLine:function(c){return this.addPlotBandOrLine(c,"plotLines")},addPlotBandOrLine:function(m,p){var g=(new c.PlotLineOrBand(this,m)).render(),b=this.userOptions;if(g){if(p){var a=b[p]||[];a.push(m);b[p]=a}this.plotLinesAndBands.push(g)}return g},removePlotBandOrLine:function(c){for(var m=this.plotLinesAndBands,g=this.options,b=this.userOptions,a=m.length;a--;)m[a].id===c&&m[a].destroy();[g.plotLines||[],b.plotLines||[],g.plotBands||[],b.plotBands||[]].forEach(function(b){for(a=
b.length;a--;)b[a].id===c&&F(b,b[a])})},removePlotBand:function(c){this.removePlotBandOrLine(c)},removePlotLine:function(c){this.removePlotBandOrLine(c)}})});N(H,"parts/Tooltip.js",[H["parts/Globals.js"],H["parts/Utilities.js"]],function(c,n){var A=n.defined,D=n.isNumber,F=n.isString,z=n.splat;"";var u=c.doc,L=c.extend,y=c.format,C=c.merge,x=c.pick,m=c.syncTimeout,p=c.timeUnits;c.Tooltip=function(){this.init.apply(this,arguments)};c.Tooltip.prototype={init:function(c,b){this.chart=c;this.options=
b;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=!0;this.split=b.split&&!c.inverted;this.shared=b.shared||this.split;this.outside=x(b.outside,!(!c.scrollablePixelsX&&!c.scrollablePixelsY))&&!this.split},cleanSplit:function(c){this.chart.series.forEach(function(b){var a=b&&b.tt;a&&(!a.isActive||c?b.tt=a.destroy():a.isActive=!1)})},applyFilter:function(){var c=this.chart;c.renderer.definition({tagName:"filter",id:"drop-shadow-"+c.index,opacity:.5,children:[{tagName:"feGaussianBlur","in":"SourceAlpha",
stdDeviation:1},{tagName:"feOffset",dx:1,dy:1},{tagName:"feComponentTransfer",children:[{tagName:"feFuncA",type:"linear",slope:.3}]},{tagName:"feMerge",children:[{tagName:"feMergeNode"},{tagName:"feMergeNode","in":"SourceGraphic"}]}]});c.renderer.definition({tagName:"style",textContent:".highcharts-tooltip-"+c.index+"{filter:url(#drop-shadow-"+c.index+")}"})},getLabel:function(){var g=this,b=this.chart.renderer,a=this.chart.styledMode,d=this.options,f="tooltip"+(A(d.className)?" "+d.className:""),
e;if(!this.label){this.outside&&(this.container=e=c.doc.createElement("div"),e.className="highcharts-tooltip-container",c.css(e,{position:"absolute",top:"1px",pointerEvents:d.style&&d.style.pointerEvents,zIndex:3}),c.doc.body.appendChild(e),this.renderer=b=new c.Renderer(e,0,0,{},void 0,void 0,b.styledMode));this.split?this.label=b.g(f):(this.label=b.label("",0,0,d.shape||"callout",null,null,d.useHTML,null,f).attr({padding:d.padding,r:d.borderRadius}),a||this.label.attr({fill:d.backgroundColor,"stroke-width":d.borderWidth}).css(d.style).shadow(d.shadow));
a&&(this.applyFilter(),this.label.addClass("highcharts-tooltip-"+this.chart.index));if(this.outside){var h={x:this.label.xSetter,y:this.label.ySetter};this.label.xSetter=function(a,b){h[b].call(this.label,g.distance);e.style.left=a+"px"};this.label.ySetter=function(a,b){h[b].call(this.label,g.distance);e.style.top=a+"px"}}this.label.attr({zIndex:8}).add()}return this.label},update:function(c){this.destroy();C(!0,this.chart.options.tooltip.userOptions,c);this.init(this.chart,C(!0,this.options,c))},
destroy:function(){this.label&&(this.label=this.label.destroy());this.split&&this.tt&&(this.cleanSplit(this.chart,!0),this.tt=this.tt.destroy());this.renderer&&(this.renderer=this.renderer.destroy(),c.discardElement(this.container));c.clearTimeout(this.hideTimer);c.clearTimeout(this.tooltipTimeout)},move:function(g,b,a,d){var f=this,e=f.now,h=!1!==f.options.animation&&!f.isHidden&&(1<Math.abs(g-e.x)||1<Math.abs(b-e.y)),r=f.followPointer||1<f.len;L(e,{x:h?(2*e.x+g)/3:g,y:h?(e.y+b)/2:b,anchorX:r?void 0:
h?(2*e.anchorX+a)/3:a,anchorY:r?void 0:h?(e.anchorY+d)/2:d});f.getLabel().attr(e);h&&(c.clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){f&&f.move(g,b,a,d)},32))},hide:function(g){var b=this;c.clearTimeout(this.hideTimer);g=x(g,this.options.hideDelay,500);this.isHidden||(this.hideTimer=m(function(){b.getLabel()[g?"fadeOut":"hide"]();b.isHidden=!0},g))},getAnchor:function(c,b){var a=this.chart,d=a.pointer,f=a.inverted,e=a.plotTop,h=a.plotLeft,r=0,g=0,q,v;c=z(c);this.followPointer&&
b?(void 0===b.chartX&&(b=d.normalize(b)),c=[b.chartX-a.plotLeft,b.chartY-e]):c[0].tooltipPos?c=c[0].tooltipPos:(c.forEach(function(a){q=a.series.yAxis;v=a.series.xAxis;r+=a.plotX+(!f&&v?v.left-h:0);g+=(a.plotLow?(a.plotLow+a.plotHigh)/2:a.plotY)+(!f&&q?q.top-e:0)}),r/=c.length,g/=c.length,c=[f?a.plotWidth-g:r,this.shared&&!f&&1<c.length&&b?b.chartY-e:f?a.plotHeight-r:g]);return c.map(Math.round)},getPosition:function(c,b,a){var d=this.chart,f=this.distance,e={},h=d.inverted&&a.h||0,r,g=this.outside,
q=g?u.documentElement.clientWidth-2*f:d.chartWidth,v=g?Math.max(u.body.scrollHeight,u.documentElement.scrollHeight,u.body.offsetHeight,u.documentElement.offsetHeight,u.documentElement.clientHeight):d.chartHeight,k=d.pointer.chartPosition,t=d.containerScaling,B=function(a){return t?a*t.scaleX:a},I=function(a){return t?a*t.scaleY:a},w=function(e){var l="x"===e;return[e,l?q:v,l?c:b].concat(g?[l?B(c):I(b),l?k.left-f+B(a.plotX+d.plotLeft):k.top-f+I(a.plotY+d.plotTop),0,l?q:v]:[l?c:b,l?a.plotX+d.plotLeft:
a.plotY+d.plotTop,l?d.plotLeft:d.plotTop,l?d.plotLeft+d.plotWidth:d.plotTop+d.plotHeight])},l=w("y"),m=w("x"),p=!this.followPointer&&x(a.ttBelow,!d.inverted===!!a.negative),n=function(a,b,d,c,k,l,t){var w="y"===a?I(f):B(f),r=(d-c)/2,q=c<k-f,v=k+f+c<b,g=k-w-d+r;k=k+w-r;if(p&&v)e[a]=k;else if(!p&&q)e[a]=g;else if(q)e[a]=Math.min(t-c,0>g-h?g:g-h);else if(v)e[a]=Math.max(l,k+h+d>b?k:k+h);else return!1},y=function(a,b,d,c,k){var l;k<f||k>b-f?l=!1:e[a]=k<d/2?1:k>b-c/2?b-c-2:k-d/2;return l},z=function(a){var b=
l;l=m;m=b;r=a},M=function(){!1!==n.apply(0,l)?!1!==y.apply(0,m)||r||(z(!0),M()):r?e.x=e.y=0:(z(!0),M())};(d.inverted||1<this.len)&&z();M();return e},defaultFormatter:function(c){var b=this.points||z(this);var a=[c.tooltipFooterHeaderFormatter(b[0])];a=a.concat(c.bodyFormatter(b));a.push(c.tooltipFooterHeaderFormatter(b[0],!0));return a},refresh:function(g,b){var a=this.chart,d=this.options,f=g,e={},h=[];var r=d.formatter||this.defaultFormatter;e=this.shared;var m=a.styledMode;if(d.enabled){c.clearTimeout(this.hideTimer);
this.followPointer=z(f)[0].series.tooltipOptions.followPointer;var q=this.getAnchor(f,b);b=q[0];var v=q[1];!e||f.series&&f.series.noSharedTooltip?e=f.getLabelConfig():(a.pointer.applyInactiveState(f),f.forEach(function(a){a.setState("hover");h.push(a.getLabelConfig())}),e={x:f[0].category,y:f[0].y},e.points=h,f=f[0]);this.len=h.length;r=r.call(e,this);e=f.series;this.distance=x(e.tooltipOptions.distance,16);!1===r?this.hide():(a=this.getLabel(),this.isHidden&&a.attr({opacity:1}).show(),this.split?
this.renderSplit(r,z(g)):(d.style.width&&!m||a.css({width:this.chart.spacingBox.width}),a.attr({text:r&&r.join?r.join(""):r}),a.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-"+x(f.colorIndex,e.colorIndex)),m||a.attr({stroke:d.borderColor||f.color||e.color||"#666666"}),this.updatePosition({plotX:b,plotY:v,negative:f.negative,ttBelow:f.ttBelow,h:q[2]||0})),this.isHidden=!1);c.fireEvent(this,"refresh")}},renderSplit:function(g,b){var a=this,d=[],f=this.chart,e=f.renderer,h=!0,r=this.options,
m=0,q,v=this.getLabel(),k=f.plotTop;F(g)&&(g=[!1,g]);g.slice(0,b.length+1).forEach(function(c,B){if(!1!==c&&""!==c){B=b[B-1]||{isHeader:!0,plotX:b[0].plotX,plotY:f.plotHeight};var t=B.series||a,w=t.tt,l=B.series||{},g="highcharts-color-"+x(B.colorIndex,l.colorIndex,"none");w||(w={padding:r.padding,r:r.borderRadius},f.styledMode||(w.fill=r.backgroundColor,w["stroke-width"]=r.borderWidth),t.tt=w=e.label(null,null,null,(B.isHeader?r.headerShape:r.shape)||"callout",null,null,r.useHTML).addClass("highcharts-tooltip-box "+
g).attr(w).add(v));w.isActive=!0;w.attr({text:c});f.styledMode||w.css(r.style).shadow(r.shadow).attr({stroke:r.borderColor||B.color||l.color||"#333333"});c=w.getBBox();g=c.width+w.strokeWidth();B.isHeader?(m=c.height,f.xAxis[0].opposite&&(q=!0,k-=m),c=Math.max(0,Math.min(B.plotX+f.plotLeft-g/2,f.chartWidth+(f.scrollablePixelsX?f.scrollablePixelsX-f.marginRight:0)-g))):c=B.plotX+f.plotLeft-x(r.distance,16)-g;0>c&&(h=!1);B.isHeader?l=q?-m:f.plotHeight+m:(l=l.yAxis,l=l.pos-k+Math.max(0,Math.min(B.plotY||
0,l.len)));d.push({target:l,rank:B.isHeader?1:0,size:t.tt.getBBox().height+1,point:B,x:c,tt:w})}});this.cleanSplit();r.positioner&&d.forEach(function(b){var d=r.positioner.call(a,b.tt.getBBox().width,b.size,b.point);b.x=d.x;b.align=0;b.target=d.y;b.rank=x(d.rank,b.rank)});c.distribute(d,f.plotHeight+m);d.forEach(function(b){var d=b.point,c=d.series,e=c&&c.yAxis;b.tt.attr({visibility:void 0===b.pos?"hidden":"inherit",x:h||d.isHeader||r.positioner?b.x:d.plotX+f.plotLeft+a.distance,y:b.pos+k,anchorX:d.isHeader?
d.plotX+f.plotLeft:d.plotX+c.xAxis.pos,anchorY:d.isHeader?f.plotTop+f.plotHeight/2:e.pos+Math.max(0,Math.min(d.plotY,e.len))})})},updatePosition:function(g){var b=this.chart,a=b.pointer,d=this.getLabel(),f=g.plotX+b.plotLeft,e=g.plotY+b.plotTop;a.chartPosition||(a.chartPosition=c.offset(b.container));g=(this.options.positioner||this.getPosition).call(this,d.width,d.height,g);if(this.outside){var h=(this.options.borderWidth||0)+2*this.distance;this.renderer.setSize(d.width+h,d.height+h,!1);if(b=b.containerScaling)c.css(this.container,
{transform:"scale("+b.scaleX+", "+b.scaleY+")"}),f*=b.scaleX,e*=b.scaleY;f+=a.chartPosition.left-g.x;e+=a.chartPosition.top-g.y}this.move(Math.round(g.x),Math.round(g.y||0),f,e)},getDateFormat:function(c,b,a,d){var f=this.chart.time,e=f.dateFormat("%m-%d %H:%M:%S.%L",b),h={millisecond:15,second:12,minute:9,hour:6,day:3},r="millisecond";for(g in p){if(c===p.week&&+f.dateFormat("%w",b)===a&&"00:00:00.000"===e.substr(6)){var g="week";break}if(p[g]>c){g=r;break}if(h[g]&&e.substr(h[g])!=="01-01 00:00:00.000".substr(h[g]))break;
"week"!==g&&(r=g)}if(g)var q=f.resolveDTLFormat(d[g]).main;return q},getXDateFormat:function(c,b,a){b=b.dateTimeLabelFormats;var d=a&&a.closestPointRange;return(d?this.getDateFormat(d,c.x,a.options.startOfWeek,b):b.day)||b.year},tooltipFooterHeaderFormatter:function(g,b){var a=b?"footer":"header",d=g.series,f=d.tooltipOptions,e=f.xDateFormat,h=d.xAxis,r=h&&"datetime"===h.options.type&&D(g.key),m=f[a+"Format"];b={isFooter:b,labelConfig:g};c.fireEvent(this,"headerFormatter",b,function(a){r&&!e&&(e=
this.getXDateFormat(g,f,h));r&&e&&(g.point&&g.point.tooltipDateKeys||["key"]).forEach(function(a){m=m.replace("{point."+a+"}","{point."+a+":"+e+"}")});d.chart.styledMode&&(m=this.styledModeFormat(m));a.text=y(m,{point:g,series:d},this.chart.time)});return b.text},bodyFormatter:function(c){return c.map(function(b){var a=b.series.tooltipOptions;return(a[(b.point.formatPrefix||"point")+"Formatter"]||b.point.tooltipFormatter).call(b.point,a[(b.point.formatPrefix||"point")+"Format"]||"")})},styledModeFormat:function(c){return c.replace('style="font-size: 10px"',
'class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g,'class="highcharts-color-{$1.colorIndex}"')}}});N(H,"parts/Pointer.js",[H["parts/Globals.js"],H["parts/Utilities.js"]],function(c,n){var A=n.attr,D=n.defined,F=n.isNumber,z=n.isObject,u=n.objectEach,L=n.splat,y=c.addEvent,C=c.charts,x=c.color,m=c.css,p=c.extend,g=c.find,b=c.fireEvent,a=c.offset,d=c.pick,f=c.Tooltip;c.Pointer=function(a,b){this.init(a,b)};c.Pointer.prototype={init:function(a,b){this.options=b;this.chart=
a;this.runChartClick=b.chart.events&&!!b.chart.events.click;this.pinchDown=[];this.lastValidTouch={};f&&(a.tooltip=new f(a,b.tooltip),this.followTouchMove=d(b.tooltip.followTouchMove,!0));this.setDOMEvents()},zoomOption:function(a){var b=this.chart,c=b.options.chart,f=c.zoomType||"";b=b.inverted;/touch/.test(a.type)&&(f=d(c.pinchType,f));this.zoomX=a=/x/.test(f);this.zoomY=f=/y/.test(f);this.zoomHor=a&&!b||f&&b;this.zoomVert=f&&!b||a&&b;this.hasZoom=a||f},normalize:function(b,d){var c=b.touches?b.touches.length?
b.touches.item(0):b.changedTouches[0]:b;d||(this.chartPosition=d=a(this.chart.container));var f=c.pageX-d.left;d=c.pageY-d.top;if(c=this.chart.containerScaling)f/=c.scaleX,d/=c.scaleY;return p(b,{chartX:Math.round(f),chartY:Math.round(d)})},getCoordinates:function(a){var b={xAxis:[],yAxis:[]};this.chart.axes.forEach(function(d){b[d.isXAxis?"xAxis":"yAxis"].push({axis:d,value:d.toValue(a[d.horiz?"chartX":"chartY"])})});return b},findNearestKDPoint:function(a,b,d){var c;a.forEach(function(a){var f=
!(a.noSharedTooltip&&b)&&0>a.options.findNearestPointBy.indexOf("y");a=a.searchPoint(d,f);if((f=z(a,!0))&&!(f=!z(c,!0))){f=c.distX-a.distX;var e=c.dist-a.dist,t=(a.series.group&&a.series.group.zIndex)-(c.series.group&&c.series.group.zIndex);f=0<(0!==f&&b?f:0!==e?e:0!==t?t:c.series.index>a.series.index?-1:1)}f&&(c=a)});return c},getPointFromEvent:function(a){a=a.target;for(var b;a&&!b;)b=a.point,a=a.parentNode;return b},getChartCoordinatesFromPoint:function(a,b){var c=a.series,f=c.xAxis;c=c.yAxis;
var e=d(a.clientX,a.plotX),h=a.shapeArgs;if(f&&c)return b?{chartX:f.len+f.pos-e,chartY:c.len+c.pos-a.plotY}:{chartX:e+f.pos,chartY:a.plotY+c.pos};if(h&&h.x&&h.y)return{chartX:h.x,chartY:h.y}},getHoverData:function(a,b,c,f,q,v){var e,t=[];f=!(!f||!a);var h=b&&!b.stickyTracking?[b]:c.filter(function(a){return a.visible&&!(!q&&a.directTouch)&&d(a.options.enableMouseTracking,!0)&&a.stickyTracking});b=(e=f||!v?a:this.findNearestKDPoint(h,q,v))&&e.series;e&&(q&&!b.noSharedTooltip?(h=c.filter(function(a){return a.visible&&
!(!q&&a.directTouch)&&d(a.options.enableMouseTracking,!0)&&!a.noSharedTooltip}),h.forEach(function(a){var b=g(a.points,function(a){return a.x===e.x&&!a.isNull});z(b)&&(a.chart.isBoosting&&(b=a.getPoint(b)),t.push(b))})):t.push(e));return{hoverPoint:e,hoverSeries:b,hoverPoints:t}},runPointActions:function(a,b){var f=this.chart,e=f.tooltip&&f.tooltip.options.enabled?f.tooltip:void 0,h=e?e.shared:!1,v=b||f.hoverPoint,k=v&&v.series||f.hoverSeries;k=this.getHoverData(v,k,f.series,(!a||"touchmove"!==a.type)&&
(!!b||k&&k.directTouch&&this.isDirectTouch),h,a);v=k.hoverPoint;var t=k.hoverPoints;b=(k=k.hoverSeries)&&k.tooltipOptions.followPointer;h=h&&k&&!k.noSharedTooltip;if(v&&(v!==f.hoverPoint||e&&e.isHidden)){(f.hoverPoints||[]).forEach(function(a){-1===t.indexOf(a)&&a.setState()});if(f.hoverSeries!==k)k.onMouseOver();this.applyInactiveState(t);(t||[]).forEach(function(a){a.setState("hover")});f.hoverPoint&&f.hoverPoint.firePointEvent("mouseOut");if(!v.series)return;v.firePointEvent("mouseOver");f.hoverPoints=
t;f.hoverPoint=v;e&&e.refresh(h?t:v,a)}else b&&e&&!e.isHidden&&(v=e.getAnchor([{}],a),e.updatePosition({plotX:v[0],plotY:v[1]}));this.unDocMouseMove||(this.unDocMouseMove=y(f.container.ownerDocument,"mousemove",function(a){var b=C[c.hoverChartIndex];if(b)b.pointer.onDocumentMouseMove(a)}));f.axes.forEach(function(b){var f=d(b.crosshair.snap,!0),e=f?c.find(t,function(a){return a.series[b.coll]===b}):void 0;e||!f?b.drawCrosshair(a,e):b.hideCrosshair()})},applyInactiveState:function(a){var b=[],d;(a||
[]).forEach(function(a){d=a.series;b.push(d);d.linkedParent&&b.push(d.linkedParent);d.linkedSeries&&(b=b.concat(d.linkedSeries));d.navigatorSeries&&b.push(d.navigatorSeries)});this.chart.series.forEach(function(a){-1===b.indexOf(a)?a.setState("inactive",!0):a.options.inactiveOtherPoints&&a.setAllPointsToState("inactive")})},reset:function(a,b){var d=this.chart,c=d.hoverSeries,f=d.hoverPoint,e=d.hoverPoints,k=d.tooltip,t=k&&k.shared?e:f;a&&t&&L(t).forEach(function(b){b.series.isCartesian&&void 0===
b.plotX&&(a=!1)});if(a)k&&t&&L(t).length&&(k.refresh(t),k.shared&&e?e.forEach(function(a){a.setState(a.state,!0);a.series.isCartesian&&(a.series.xAxis.crosshair&&a.series.xAxis.drawCrosshair(null,a),a.series.yAxis.crosshair&&a.series.yAxis.drawCrosshair(null,a))}):f&&(f.setState(f.state,!0),d.axes.forEach(function(a){a.crosshair&&a.drawCrosshair(null,f)})));else{if(f)f.onMouseOut();e&&e.forEach(function(a){a.setState()});if(c)c.onMouseOut();k&&k.hide(b);this.unDocMouseMove&&(this.unDocMouseMove=this.unDocMouseMove());
d.axes.forEach(function(a){a.hideCrosshair()});this.hoverX=d.hoverPoints=d.hoverPoint=null}},scaleGroups:function(a,b){var d=this.chart,c;d.series.forEach(function(f){c=a||f.getPlotBox();f.xAxis&&f.xAxis.zoomEnabled&&f.group&&(f.group.attr(c),f.markerGroup&&(f.markerGroup.attr(c),f.markerGroup.clip(b?d.clipRect:null)),f.dataLabelsGroup&&f.dataLabelsGroup.attr(c))});d.clipRect.attr(b||d.clipBox)},dragStart:function(a){var b=this.chart;b.mouseIsDown=a.type;b.cancelClick=!1;b.mouseDownX=this.mouseDownX=
a.chartX;b.mouseDownY=this.mouseDownY=a.chartY},drag:function(a){var b=this.chart,d=b.options.chart,c=a.chartX,f=a.chartY,e=this.zoomHor,k=this.zoomVert,t=b.plotLeft,B=b.plotTop,I=b.plotWidth,w=b.plotHeight,l=this.selectionMarker,g=this.mouseDownX,m=this.mouseDownY,p=d.panKey&&a[d.panKey+"Key"];if(!l||!l.touch)if(c<t?c=t:c>t+I&&(c=t+I),f<B?f=B:f>B+w&&(f=B+w),this.hasDragged=Math.sqrt(Math.pow(g-c,2)+Math.pow(m-f,2)),10<this.hasDragged){var u=b.isInsidePlot(g-t,m-B);b.hasCartesianSeries&&(this.zoomX||
this.zoomY)&&u&&!p&&!l&&(this.selectionMarker=l=b.renderer.rect(t,B,e?1:I,k?1:w,0).attr({"class":"highcharts-selection-marker",zIndex:7}).add(),b.styledMode||l.attr({fill:d.selectionMarkerFill||x("#335cad").setOpacity(.25).get()}));l&&e&&(c-=g,l.attr({width:Math.abs(c),x:(0<c?0:c)+g}));l&&k&&(c=f-m,l.attr({height:Math.abs(c),y:(0<c?0:c)+m}));u&&!l&&d.panning&&b.pan(a,d.panning)}},drop:function(a){var d=this,c=this.chart,f=this.hasPinched;if(this.selectionMarker){var e={originalEvent:a,xAxis:[],yAxis:[]},
v=this.selectionMarker,k=v.attr?v.attr("x"):v.x,t=v.attr?v.attr("y"):v.y,B=v.attr?v.attr("width"):v.width,I=v.attr?v.attr("height"):v.height,w;if(this.hasDragged||f)c.axes.forEach(function(b){if(b.zoomEnabled&&D(b.min)&&(f||d[{xAxis:"zoomX",yAxis:"zoomY"}[b.coll]])){var c=b.horiz,l="touchend"===a.type?b.minPixelPadding:0,h=b.toValue((c?k:t)+l);c=b.toValue((c?k+B:t+I)-l);e[b.coll].push({axis:b,min:Math.min(h,c),max:Math.max(h,c)});w=!0}}),w&&b(c,"selection",e,function(a){c.zoom(p(a,f?{animation:!1}:
null))});F(c.index)&&(this.selectionMarker=this.selectionMarker.destroy());f&&this.scaleGroups()}c&&F(c.index)&&(m(c.container,{cursor:c._cursor}),c.cancelClick=10<this.hasDragged,c.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[])},onContainerMouseDown:function(a){a=this.normalize(a);2!==a.button&&(this.zoomOption(a),a.preventDefault&&a.preventDefault(),this.dragStart(a))},onDocumentMouseUp:function(a){C[c.hoverChartIndex]&&C[c.hoverChartIndex].pointer.drop(a)},onDocumentMouseMove:function(a){var b=
this.chart,d=this.chartPosition;a=this.normalize(a,d);!d||this.inClass(a.target,"highcharts-tracker")||b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)||this.reset()},onContainerMouseLeave:function(a){var b=C[c.hoverChartIndex];b&&(a.relatedTarget||a.toElement)&&(b.pointer.reset(),b.pointer.chartPosition=null)},onContainerMouseMove:function(a){var b=this.chart;D(c.hoverChartIndex)&&C[c.hoverChartIndex]&&C[c.hoverChartIndex].mouseIsDown||(c.hoverChartIndex=b.index);a=this.normalize(a);a.preventDefault||
(a.returnValue=!1);"mousedown"===b.mouseIsDown&&this.drag(a);!this.inClass(a.target,"highcharts-tracker")&&!b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)||b.openMenu||this.runPointActions(a)},inClass:function(a,b){for(var d;a;){if(d=A(a,"class")){if(-1!==d.indexOf(b))return!0;if(-1!==d.indexOf("highcharts-container"))return!1}a=a.parentNode}},onTrackerMouseOut:function(a){var b=this.chart.hoverSeries;a=a.relatedTarget||a.toElement;this.isDirectTouch=!1;if(!(!b||!a||b.stickyTracking||this.inClass(a,
"highcharts-tooltip")||this.inClass(a,"highcharts-series-"+b.index)&&this.inClass(a,"highcharts-tracker")))b.onMouseOut()},onContainerClick:function(a){var d=this.chart,c=d.hoverPoint,f=d.plotLeft,e=d.plotTop;a=this.normalize(a);d.cancelClick||(c&&this.inClass(a.target,"highcharts-tracker")?(b(c.series,"click",p(a,{point:c})),d.hoverPoint&&c.firePointEvent("click",a)):(p(a,this.getCoordinates(a)),d.isInsidePlot(a.chartX-f,a.chartY-e)&&b(d,"click",a)))},setDOMEvents:function(){var a=this,b=a.chart.container,
d=b.ownerDocument;b.onmousedown=function(b){a.onContainerMouseDown(b)};b.onmousemove=function(b){a.onContainerMouseMove(b)};b.onclick=function(b){a.onContainerClick(b)};this.unbindContainerMouseLeave=y(b,"mouseleave",a.onContainerMouseLeave);c.unbindDocumentMouseUp||(c.unbindDocumentMouseUp=y(d,"mouseup",a.onDocumentMouseUp));c.hasTouch&&(y(b,"touchstart",function(b){a.onContainerTouchStart(b)}),y(b,"touchmove",function(b){a.onContainerTouchMove(b)}),c.unbindDocumentTouchEnd||(c.unbindDocumentTouchEnd=
y(d,"touchend",a.onDocumentTouchEnd)))},destroy:function(){var a=this;a.unDocMouseMove&&a.unDocMouseMove();this.unbindContainerMouseLeave();c.chartCount||(c.unbindDocumentMouseUp&&(c.unbindDocumentMouseUp=c.unbindDocumentMouseUp()),c.unbindDocumentTouchEnd&&(c.unbindDocumentTouchEnd=c.unbindDocumentTouchEnd()));clearInterval(a.tooltipTimeout);u(a,function(b,d){a[d]=null})}}});N(H,"parts/TouchPointer.js",[H["parts/Globals.js"]],function(c){var n=c.charts,A=c.extend,D=c.noop,F=c.pick;A(c.Pointer.prototype,
{pinchTranslate:function(c,u,n,y,A,x){this.zoomHor&&this.pinchTranslateDirection(!0,c,u,n,y,A,x);this.zoomVert&&this.pinchTranslateDirection(!1,c,u,n,y,A,x)},pinchTranslateDirection:function(c,u,n,y,A,x,m,p){var g=this.chart,b=c?"x":"y",a=c?"X":"Y",d="chart"+a,f=c?"width":"height",e=g["plot"+(c?"Left":"Top")],h,r,E=p||1,q=g.inverted,v=g.bounds[c?"h":"v"],k=1===u.length,t=u[0][d],B=n[0][d],I=!k&&u[1][d],w=!k&&n[1][d];n=function(){!k&&20<Math.abs(t-I)&&(E=p||Math.abs(B-w)/Math.abs(t-I));r=(e-B)/E+t;
h=g["plot"+(c?"Width":"Height")]/E};n();u=r;if(u<v.min){u=v.min;var l=!0}else u+h>v.max&&(u=v.max-h,l=!0);l?(B-=.8*(B-m[b][0]),k||(w-=.8*(w-m[b][1])),n()):m[b]=[B,w];q||(x[b]=r-e,x[f]=h);x=q?1/E:E;A[f]=h;A[b]=u;y[q?c?"scaleY":"scaleX":"scale"+a]=E;y["translate"+a]=x*e+(B-x*t)},pinch:function(c){var u=this,n=u.chart,y=u.pinchDown,z=c.touches,x=z.length,m=u.lastValidTouch,p=u.hasZoom,g=u.selectionMarker,b={},a=1===x&&(u.inClass(c.target,"highcharts-tracker")&&n.runTrackerClick||u.runChartClick),d={};
1<x&&(u.initiated=!0);p&&u.initiated&&!a&&c.preventDefault();[].map.call(z,function(a){return u.normalize(a)});"touchstart"===c.type?([].forEach.call(z,function(a,b){y[b]={chartX:a.chartX,chartY:a.chartY}}),m.x=[y[0].chartX,y[1]&&y[1].chartX],m.y=[y[0].chartY,y[1]&&y[1].chartY],n.axes.forEach(function(a){if(a.zoomEnabled){var b=n.bounds[a.horiz?"h":"v"],d=a.minPixelPadding,c=a.toPixels(Math.min(F(a.options.min,a.dataMin),a.dataMin)),f=a.toPixels(Math.max(F(a.options.max,a.dataMax),a.dataMax)),q=Math.max(c,
f);b.min=Math.min(a.pos,Math.min(c,f)-d);b.max=Math.max(a.pos+a.len,q+d)}}),u.res=!0):u.followTouchMove&&1===x?this.runPointActions(u.normalize(c)):y.length&&(g||(u.selectionMarker=g=A({destroy:D,touch:!0},n.plotBox)),u.pinchTranslate(y,z,b,g,d,m),u.hasPinched=p,u.scaleGroups(b,d),u.res&&(u.res=!1,this.reset(!1,0)))},touch:function(n,u){var z=this.chart,y;if(z.index!==c.hoverChartIndex)this.onContainerMouseLeave({relatedTarget:!0});c.hoverChartIndex=z.index;if(1===n.touches.length)if(n=this.normalize(n),
(y=z.isInsidePlot(n.chartX-z.plotLeft,n.chartY-z.plotTop))&&!z.openMenu){u&&this.runPointActions(n);if("touchmove"===n.type){u=this.pinchDown;var A=u[0]?4<=Math.sqrt(Math.pow(u[0].chartX-n.chartX,2)+Math.pow(u[0].chartY-n.chartY,2)):!1}F(A,!0)&&this.pinch(n)}else u&&this.reset();else 2===n.touches.length&&this.pinch(n)},onContainerTouchStart:function(c){this.zoomOption(c);this.touch(c,!0)},onContainerTouchMove:function(c){this.touch(c)},onDocumentTouchEnd:function(z){n[c.hoverChartIndex]&&n[c.hoverChartIndex].pointer.drop(z)}})});
N(H,"parts/MSPointer.js",[H["parts/Globals.js"],H["parts/Utilities.js"]],function(c,n){var A=n.objectEach,D=c.addEvent,F=c.charts,z=c.css,u=c.doc;n=c.extend;var L=c.noop,y=c.Pointer,C=c.removeEvent,x=c.win,m=c.wrap;if(!c.hasTouch&&(x.PointerEvent||x.MSPointerEvent)){var p={},g=!!x.PointerEvent,b=function(){var a=[];a.item=function(a){return this[a]};A(p,function(b){a.push({pageX:b.pageX,pageY:b.pageY,target:b.target})});return a},a=function(a,f,e,h){"touch"!==a.pointerType&&a.pointerType!==a.MSPOINTER_TYPE_TOUCH||
!F[c.hoverChartIndex]||(h(a),h=F[c.hoverChartIndex].pointer,h[f]({type:e,target:a.currentTarget,preventDefault:L,touches:b()}))};n(y.prototype,{onContainerPointerDown:function(b){a(b,"onContainerTouchStart","touchstart",function(a){p[a.pointerId]={pageX:a.pageX,pageY:a.pageY,target:a.currentTarget}})},onContainerPointerMove:function(b){a(b,"onContainerTouchMove","touchmove",function(a){p[a.pointerId]={pageX:a.pageX,pageY:a.pageY};p[a.pointerId].target||(p[a.pointerId].target=a.currentTarget)})},onDocumentPointerUp:function(b){a(b,
"onDocumentTouchEnd","touchend",function(a){delete p[a.pointerId]})},batchMSEvents:function(a){a(this.chart.container,g?"pointerdown":"MSPointerDown",this.onContainerPointerDown);a(this.chart.container,g?"pointermove":"MSPointerMove",this.onContainerPointerMove);a(u,g?"pointerup":"MSPointerUp",this.onDocumentPointerUp)}});m(y.prototype,"init",function(a,b,c){a.call(this,b,c);this.hasZoom&&z(b.container,{"-ms-touch-action":"none","touch-action":"none"})});m(y.prototype,"setDOMEvents",function(a){a.apply(this);
(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(D)});m(y.prototype,"destroy",function(a){this.batchMSEvents(C);a.call(this)})}});N(H,"parts/Legend.js",[H["parts/Globals.js"],H["parts/Utilities.js"]],function(c,n){var A=n.defined,D=n.isNumber,F=c.addEvent,z=c.css,u=c.discardElement,L=c.fireEvent;n=c.isFirefox;var y=c.marginNames,C=c.merge,x=c.pick,m=c.setAnimation,p=c.stableSort,g=c.win,b=c.wrap;c.Legend=function(a,b){this.init(a,b)};c.Legend.prototype={init:function(a,b){this.chart=a;this.setOptions(b);
b.enabled&&(this.render(),F(this.chart,"endResize",function(){this.legend.positionCheckboxes()}),this.proximate?this.unchartrender=F(this.chart,"render",function(){this.legend.proximatePositions();this.legend.positionItems()}):this.unchartrender&&this.unchartrender())},setOptions:function(a){var b=x(a.padding,8);this.options=a;this.chart.styledMode||(this.itemStyle=a.itemStyle,this.itemHiddenStyle=C(this.itemStyle,a.itemHiddenStyle));this.itemMarginTop=a.itemMarginTop||0;this.padding=b;this.initialItemY=
b-5;this.symbolWidth=x(a.symbolWidth,16);this.pages=[];this.proximate="proximate"===a.layout&&!this.chart.inverted},update:function(a,b){var d=this.chart;this.setOptions(C(!0,this.options,a));this.destroy();d.isDirtyLegend=d.isDirtyBox=!0;x(b,!0)&&d.redraw();L(this,"afterUpdate")},colorizeItem:function(a,b){a.legendGroup[b?"removeClass":"addClass"]("highcharts-legend-item-hidden");if(!this.chart.styledMode){var d=this.options,c=a.legendItem,h=a.legendLine,r=a.legendSymbol,g=this.itemHiddenStyle.color;
d=b?d.itemStyle.color:g;var q=b?a.color||g:g,v=a.options&&a.options.marker,k={fill:q};c&&c.css({fill:d,color:d});h&&h.attr({stroke:q});r&&(v&&r.isMarker&&(k=a.pointAttribs(),b||(k.stroke=k.fill=g)),r.attr(k))}L(this,"afterColorizeItem",{item:a,visible:b})},positionItems:function(){this.allItems.forEach(this.positionItem,this);this.chart.isResizing||this.positionCheckboxes()},positionItem:function(a){var b=this.options,c=b.symbolPadding;b=!b.rtl;var e=a._legendItemPos,h=e[0];e=e[1];var r=a.checkbox;
if((a=a.legendGroup)&&a.element)a[A(a.translateY)?"animate":"attr"]({translateX:b?h:this.legendWidth-h-2*c-4,translateY:e});r&&(r.x=h,r.y=e)},destroyItem:function(a){var b=a.checkbox;["legendItem","legendLine","legendSymbol","legendGroup"].forEach(function(b){a[b]&&(a[b]=a[b].destroy())});b&&u(a.checkbox)},destroy:function(){function a(a){this[a]&&(this[a]=this[a].destroy())}this.getAllItems().forEach(function(b){["legendItem","legendGroup"].forEach(a,b)});"clipRect up down pager nav box title group".split(" ").forEach(a,
this);this.display=null},positionCheckboxes:function(){var a=this.group&&this.group.alignAttr,b=this.clipHeight||this.legendHeight,c=this.titleHeight;if(a){var e=a.translateY;this.allItems.forEach(function(d){var f=d.checkbox;if(f){var h=e+c+f.y+(this.scrollOffset||0)+3;z(f,{left:a.translateX+d.checkboxOffset+f.x-20+"px",top:h+"px",display:this.proximate||h>e-6&&h<e+b-6?"":"none"})}},this)}},renderTitle:function(){var a=this.options,b=this.padding,c=a.title,e=0;c.text&&(this.title||(this.title=this.chart.renderer.label(c.text,
b-3,b-4,null,null,null,a.useHTML,null,"legend-title").attr({zIndex:1}),this.chart.styledMode||this.title.css(c.style),this.title.add(this.group)),c.width||this.title.css({width:this.maxLegendWidth+"px"}),a=this.title.getBBox(),e=a.height,this.offsetWidth=a.width,this.contentGroup.attr({translateY:e}));this.titleHeight=e},setText:function(a){var b=this.options;a.legendItem.attr({text:b.labelFormat?c.format(b.labelFormat,a,this.chart.time):b.labelFormatter.call(a)})},renderItem:function(a){var b=this.chart,
c=b.renderer,e=this.options,h=this.symbolWidth,r=e.symbolPadding,g=this.itemStyle,q=this.itemHiddenStyle,v="horizontal"===e.layout?x(e.itemDistance,20):0,k=!e.rtl,t=a.legendItem,B=!a.series,I=!B&&a.series.drawLegendSymbol?a.series:a,w=I.options;w=this.createCheckboxForItem&&w&&w.showCheckbox;v=h+r+v+(w?20:0);var l=e.useHTML,m=a.options.className;t||(a.legendGroup=c.g("legend-item").addClass("highcharts-"+I.type+"-series highcharts-color-"+a.colorIndex+(m?" "+m:"")+(B?" highcharts-series-"+a.index:
"")).attr({zIndex:1}).add(this.scrollGroup),a.legendItem=t=c.text("",k?h+r:-r,this.baseline||0,l),b.styledMode||t.css(C(a.visible?g:q)),t.attr({align:k?"left":"right",zIndex:2}).add(a.legendGroup),this.baseline||(this.fontMetrics=c.fontMetrics(b.styledMode?12:g.fontSize,t),this.baseline=this.fontMetrics.f+3+this.itemMarginTop,t.attr("y",this.baseline)),this.symbolHeight=e.symbolHeight||this.fontMetrics.f,I.drawLegendSymbol(this,a),this.setItemEvents&&this.setItemEvents(a,t,l));w&&!a.checkbox&&this.createCheckboxForItem(a);
this.colorizeItem(a,a.visible);!b.styledMode&&g.width||t.css({width:(e.itemWidth||this.widthOption||b.spacingBox.width)-v});this.setText(a);b=t.getBBox();a.itemWidth=a.checkboxOffset=e.itemWidth||a.legendItemWidth||b.width+v;this.maxItemWidth=Math.max(this.maxItemWidth,a.itemWidth);this.totalItemWidth+=a.itemWidth;this.itemHeight=a.itemHeight=Math.round(a.legendItemHeight||b.height||this.symbolHeight)},layoutItem:function(a){var b=this.options,c=this.padding,e="horizontal"===b.layout,h=a.itemHeight,
g=b.itemMarginBottom||0,m=this.itemMarginTop,q=e?x(b.itemDistance,20):0,v=this.maxLegendWidth;b=b.alignColumns&&this.totalItemWidth>v?this.maxItemWidth:a.itemWidth;e&&this.itemX-c+b>v&&(this.itemX=c,this.lastLineHeight&&(this.itemY+=m+this.lastLineHeight+g),this.lastLineHeight=0);this.lastItemY=m+this.itemY+g;this.lastLineHeight=Math.max(h,this.lastLineHeight);a._legendItemPos=[this.itemX,this.itemY];e?this.itemX+=b:(this.itemY+=m+h+g,this.lastLineHeight=h);this.offsetWidth=this.widthOption||Math.max((e?
this.itemX-c-(a.checkbox?0:q):b)+c,this.offsetWidth)},getAllItems:function(){var a=[];this.chart.series.forEach(function(b){var d=b&&b.options;b&&x(d.showInLegend,A(d.linkedTo)?!1:void 0,!0)&&(a=a.concat(b.legendItems||("point"===d.legendType?b.data:b)))});L(this,"afterGetAllItems",{allItems:a});return a},getAlignment:function(){var a=this.options;return this.proximate?a.align.charAt(0)+"tv":a.floating?"":a.align.charAt(0)+a.verticalAlign.charAt(0)+a.layout.charAt(0)},adjustMargins:function(a,b){var d=
this.chart,c=this.options,h=this.getAlignment();h&&[/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/].forEach(function(f,e){f.test(h)&&!A(a[e])&&(d[y[e]]=Math.max(d[y[e]],d.legend[(e+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][e]*c[e%2?"x":"y"]+x(c.margin,12)+b[e]+(d.titleOffset[e]||0)))})},proximatePositions:function(){var a=this.chart,b=[],f="left"===this.options.align;this.allItems.forEach(function(d){var e=f;if(d.yAxis&&d.points){d.xAxis.options.reversed&&(e=!e);var g=c.find(e?d.points:
d.points.slice(0).reverse(),function(a){return D(a.plotY)});e=d.legendGroup.getBBox().height;var m=d.yAxis.top-a.plotTop;d.visible?(g=g?g.plotY:d.yAxis.height,g+=m-.3*e):g=m+d.yAxis.height;b.push({target:g,size:e,item:d})}},this);c.distribute(b,a.plotHeight);b.forEach(function(b){b.item._legendItemPos[1]=a.plotTop-a.spacing[0]+b.pos})},render:function(){var a=this.chart,b=a.renderer,f=this.group,e,h=this.box,g=this.options,m=this.padding;this.itemX=m;this.itemY=this.initialItemY;this.lastItemY=this.offsetWidth=
0;this.widthOption=c.relativeLength(g.width,a.spacingBox.width-m);var q=a.spacingBox.width-2*m-g.x;-1<["rm","lm"].indexOf(this.getAlignment().substring(0,2))&&(q/=2);this.maxLegendWidth=this.widthOption||q;f||(this.group=f=b.g("legend").attr({zIndex:7}).add(),this.contentGroup=b.g().attr({zIndex:1}).add(f),this.scrollGroup=b.g().add(this.contentGroup));this.renderTitle();q=this.getAllItems();p(q,function(a,b){return(a.options&&a.options.legendIndex||0)-(b.options&&b.options.legendIndex||0)});g.reversed&&
q.reverse();this.allItems=q;this.display=e=!!q.length;this.itemHeight=this.totalItemWidth=this.maxItemWidth=this.lastLineHeight=0;q.forEach(this.renderItem,this);q.forEach(this.layoutItem,this);q=(this.widthOption||this.offsetWidth)+m;var v=this.lastItemY+this.lastLineHeight+this.titleHeight;v=this.handleOverflow(v);v+=m;h||(this.box=h=b.rect().addClass("highcharts-legend-box").attr({r:g.borderRadius}).add(f),h.isNew=!0);a.styledMode||h.attr({stroke:g.borderColor,"stroke-width":g.borderWidth||0,fill:g.backgroundColor||
"none"}).shadow(g.shadow);0<q&&0<v&&(h[h.isNew?"attr":"animate"](h.crisp.call({},{x:0,y:0,width:q,height:v},h.strokeWidth())),h.isNew=!1);h[e?"show":"hide"]();a.styledMode&&"none"===f.getStyle("display")&&(q=v=0);this.legendWidth=q;this.legendHeight=v;e&&(b=a.spacingBox,h=b.y,/(lth|ct|rth)/.test(this.getAlignment())&&0<a.titleOffset[0]?h+=a.titleOffset[0]:/(lbh|cb|rbh)/.test(this.getAlignment())&&0<a.titleOffset[2]&&(h-=a.titleOffset[2]),h!==b.y&&(b=C(b,{y:h})),f.align(C(g,{width:q,height:v,verticalAlign:this.proximate?
"top":g.verticalAlign}),!0,b));this.proximate||this.positionItems();L(this,"afterRender")},handleOverflow:function(a){var b=this,c=this.chart,e=c.renderer,h=this.options,g=h.y,m=this.padding;g=c.spacingBox.height+("top"===h.verticalAlign?-g:g)-m;var q=h.maxHeight,v,k=this.clipRect,t=h.navigation,B=x(t.animation,!0),I=t.arrowSize||12,w=this.nav,l=this.pages,p,K=this.allItems,n=function(a){"number"===typeof a?k.attr({height:a}):k&&(b.clipRect=k.destroy(),b.contentGroup.clip());b.contentGroup.div&&(b.contentGroup.div.style.clip=
a?"rect("+m+"px,9999px,"+(m+a)+"px,0)":"auto")},u=function(a){b[a]=e.circle(0,0,1.3*I).translate(I/2,I/2).add(w);c.styledMode||b[a].attr("fill","rgba(0,0,0,0.0001)");return b[a]};"horizontal"!==h.layout||"middle"===h.verticalAlign||h.floating||(g/=2);q&&(g=Math.min(g,q));l.length=0;a>g&&!1!==t.enabled?(this.clipHeight=v=Math.max(g-20-this.titleHeight-m,0),this.currentPage=x(this.currentPage,1),this.fullHeight=a,K.forEach(function(a,b){var d=a._legendItemPos[1],c=Math.round(a.legendItem.getBBox().height),
f=l.length;if(!f||d-l[f-1]>v&&(p||d)!==l[f-1])l.push(p||d),f++;a.pageIx=f-1;p&&(K[b-1].pageIx=f-1);b===K.length-1&&d+c-l[f-1]>v&&d!==p&&(l.push(d),a.pageIx=f);d!==p&&(p=d)}),k||(k=b.clipRect=e.clipRect(0,m,9999,0),b.contentGroup.clip(k)),n(v),w||(this.nav=w=e.g().attr({zIndex:1}).add(this.group),this.up=e.symbol("triangle",0,0,I,I).add(w),u("upTracker").on("click",function(){b.scroll(-1,B)}),this.pager=e.text("",15,10).addClass("highcharts-legend-navigation"),c.styledMode||this.pager.css(t.style),
this.pager.add(w),this.down=e.symbol("triangle-down",0,0,I,I).add(w),u("downTracker").on("click",function(){b.scroll(1,B)})),b.scroll(0),a=g):w&&(n(),this.nav=w.destroy(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0);return a},scroll:function(a,b){var d=this.pages,c=d.length,h=this.currentPage+a;a=this.clipHeight;var g=this.options.navigation,p=this.pager,q=this.padding;h>c&&(h=c);0<h&&(void 0!==b&&m(b,this.chart),this.nav.attr({translateX:q,translateY:a+this.padding+7+this.titleHeight,
visibility:"visible"}),[this.up,this.upTracker].forEach(function(a){a.attr({"class":1===h?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"})}),p.attr({text:h+"/"+c}),[this.down,this.downTracker].forEach(function(a){a.attr({x:18+this.pager.getBBox().width,"class":h===c?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"})},this),this.chart.styledMode||(this.up.attr({fill:1===h?g.inactiveColor:g.activeColor}),this.upTracker.css({cursor:1===h?"default":"pointer"}),this.down.attr({fill:h===
c?g.inactiveColor:g.activeColor}),this.downTracker.css({cursor:h===c?"default":"pointer"})),this.scrollOffset=-d[h-1]+this.initialItemY,this.scrollGroup.animate({translateY:this.scrollOffset}),this.currentPage=h,this.positionCheckboxes())}};c.LegendSymbolMixin={drawRectangle:function(a,b){var d=a.symbolHeight,c=a.options.squareSymbol;b.legendSymbol=this.chart.renderer.rect(c?(a.symbolWidth-d)/2:0,a.baseline-d+1,c?d:a.symbolWidth,d,x(a.options.symbolRadius,d/2)).addClass("highcharts-point").attr({zIndex:3}).add(b.legendGroup)},
drawLineMarker:function(a){var b=this.options,c=b.marker,e=a.symbolWidth,h=a.symbolHeight,g=h/2,m=this.chart.renderer,q=this.legendGroup;a=a.baseline-Math.round(.3*a.fontMetrics.b);var v={};this.chart.styledMode||(v={"stroke-width":b.lineWidth||0},b.dashStyle&&(v.dashstyle=b.dashStyle));this.legendLine=m.path(["M",0,a,"L",e,a]).addClass("highcharts-graph").attr(v).add(q);c&&!1!==c.enabled&&e&&(b=Math.min(x(c.radius,g),g),0===this.symbol.indexOf("url")&&(c=C(c,{width:h,height:h}),b=0),this.legendSymbol=
c=m.symbol(this.symbol,e/2-b,a-b,2*b,2*b,c).addClass("highcharts-point").add(q),c.isMarker=!0)}};(/Trident\/7\.0/.test(g.navigator&&g.navigator.userAgent)||n)&&b(c.Legend.prototype,"positionItem",function(a,b){var d=this,c=function(){b._legendItemPos&&a.call(d,b)};c();d.bubbleLegend||setTimeout(c)})});N(H,"parts/Chart.js",[H["parts/Globals.js"],H["parts/Utilities.js"]],function(c,n){var A=n.attr,D=n.defined,F=n.erase,z=n.isArray,u=n.isNumber,L=n.isObject,y=n.isString,C=n.objectEach,x=n.pInt,m=n.splat,
p=c.addEvent,g=c.animate,b=c.animObject,a=c.doc,d=c.Axis,f=c.createElement,e=c.defaultOptions,h=c.discardElement,r=c.charts,E=c.css,q=c.extend,v=c.find,k=c.fireEvent,t=c.Legend,B=c.marginNames,I=c.merge,w=c.Pointer,l=c.pick,J=c.removeEvent,K=c.seriesTypes,T=c.syncTimeout,R=c.win,S=c.Chart=function(){this.getArgs.apply(this,arguments)};c.chart=function(a,b,d){return new S(a,b,d)};q(S.prototype,{callbacks:[],getArgs:function(){var a=[].slice.call(arguments);if(y(a[0])||a[0].nodeName)this.renderTo=a.shift();
this.init(a[0],a[1])},init:function(a,b){var d,f=a.series,l=a.plotOptions||{};k(this,"init",{args:arguments},function(){a.series=null;d=I(e,a);C(d.plotOptions,function(a,b){L(a)&&(a.tooltip=l[b]&&I(l[b].tooltip)||void 0)});d.tooltip.userOptions=a.chart&&a.chart.forExport&&a.tooltip.userOptions||a.tooltip;d.series=a.series=f;this.userOptions=a;var t=d.chart,B=t.events;this.margin=[];this.spacing=[];this.bounds={h:{},v:{}};this.labelCollectors=[];this.callback=b;this.isResizing=0;this.options=d;this.axes=
[];this.series=[];this.time=a.time&&Object.keys(a.time).length?new c.Time(a.time):c.time;this.styledMode=t.styledMode;this.hasCartesianSeries=t.showAxes;var h=this;h.index=r.length;r.push(h);c.chartCount++;B&&C(B,function(a,b){c.isFunction(a)&&p(h,b,a)});h.xAxis=[];h.yAxis=[];h.pointCount=h.colorCounter=h.symbolCounter=0;k(h,"afterInit");h.firstRender()})},initSeries:function(a){var b=this.options.chart;(b=K[a.type||b.type||b.defaultSeriesType])||c.error(17,!0,this);b=new b;b.init(this,a);return b},
orderSeries:function(a){var b=this.series;for(a=a||0;a<b.length;a++)b[a]&&(b[a].index=a,b[a].name=b[a].getName())},isInsidePlot:function(a,b,d){var c=d?b:a;a=d?a:b;return 0<=c&&c<=this.plotWidth&&0<=a&&a<=this.plotHeight},redraw:function(a){k(this,"beforeRedraw");var b=this.axes,d=this.series,f=this.pointer,e=this.legend,l=this.userOptions.legend,t=this.isDirtyLegend,h=this.hasCartesianSeries,B=this.isDirtyBox,w=this.renderer,g=w.isHidden(),v=[];this.setResponsive&&this.setResponsive(!1);c.setAnimation(a,
this);g&&this.temporaryDisplay();this.layOutTitles();for(a=d.length;a--;){var m=d[a];if(m.options.stacking){var I=!0;if(m.isDirty){var p=!0;break}}}if(p)for(a=d.length;a--;)m=d[a],m.options.stacking&&(m.isDirty=!0);d.forEach(function(a){a.isDirty&&("point"===a.options.legendType?(a.updateTotals&&a.updateTotals(),t=!0):l&&(l.labelFormatter||l.labelFormat)&&(t=!0));a.isDirtyData&&k(a,"updatedData")});t&&e&&e.options.enabled&&(e.render(),this.isDirtyLegend=!1);I&&this.getStacks();h&&b.forEach(function(a){a.updateNames();
a.setScale()});this.getMargins();h&&(b.forEach(function(a){a.isDirty&&(B=!0)}),b.forEach(function(a){var b=a.min+","+a.max;a.extKey!==b&&(a.extKey=b,v.push(function(){k(a,"afterSetExtremes",q(a.eventArgs,a.getExtremes()));delete a.eventArgs}));(B||I)&&a.redraw()}));B&&this.drawChartBox();k(this,"predraw");d.forEach(function(a){(B||a.isDirty)&&a.visible&&a.redraw();a.isDirtyData=!1});f&&f.reset(!0);w.draw();k(this,"redraw");k(this,"render");g&&this.temporaryDisplay(!0);v.forEach(function(a){a.call()})},
get:function(a){function b(b){return b.id===a||b.options&&b.options.id===a}var d=this.series,c;var f=v(this.axes,b)||v(this.series,b);for(c=0;!f&&c<d.length;c++)f=v(d[c].points||[],b);return f},getAxes:function(){var a=this,b=this.options,c=b.xAxis=m(b.xAxis||{});b=b.yAxis=m(b.yAxis||{});k(this,"getAxes");c.forEach(function(a,b){a.index=b;a.isX=!0});b.forEach(function(a,b){a.index=b});c.concat(b).forEach(function(b){new d(a,b)});k(this,"afterGetAxes")},getSelectedPoints:function(){var a=[];this.series.forEach(function(b){a=
a.concat((b[b.hasGroupedData?"points":"data"]||[]).filter(function(a){return l(a.selectedStaging,a.selected)}))});return a},getSelectedSeries:function(){return this.series.filter(function(a){return a.selected})},setTitle:function(a,b,d){this.applyDescription("title",a);this.applyDescription("subtitle",b);this.applyDescription("caption",void 0);this.layOutTitles(d)},applyDescription:function(a,b){var d=this,c="title"===a?{color:"#333333",fontSize:this.options.isStock?"16px":"18px"}:{color:"#666666"};
c=this.options[a]=I(!this.styledMode&&{style:c},this.options[a],b);var f=this[a];f&&b&&(this[a]=f=f.destroy());c&&!f&&(f=this.renderer.text(c.text,0,0,c.useHTML).attr({align:c.align,"class":"highcharts-"+a,zIndex:c.zIndex||4}).add(),f.update=function(b){d[{title:"setTitle",subtitle:"setSubtitle",caption:"setCaption"}[a]](b)},this.styledMode||f.css(c.style),this[a]=f)},layOutTitles:function(a){var b=[0,0,0],d=this.renderer,c=this.spacingBox;["title","subtitle","caption"].forEach(function(a){var f=
this[a],e=this.options[a],k=e.verticalAlign||"top";a="title"===a?-3:"top"===k?b[0]+2:0;if(f){if(!this.styledMode)var l=e.style.fontSize;l=d.fontMetrics(l,f).b;f.css({width:(e.width||c.width+(e.widthAdjust||0))+"px"});var t=f.getBBox(e.useHTML).height;f.align(q({y:"bottom"===k?l:a+l,height:t},e),!1,"spacingBox");e.floating||("top"===k?b[0]=Math.ceil(b[0]+t):"bottom"===k&&(b[2]=Math.ceil(b[2]+t)))}},this);b[0]&&"top"===(this.options.title.verticalAlign||"top")&&(b[0]+=this.options.title.margin);b[2]&&
"bottom"===this.options.caption.verticalAlign&&(b[2]+=this.options.caption.margin);var f=!this.titleOffset||this.titleOffset.join(",")!==b.join(",");this.titleOffset=b;!this.isDirtyBox&&f&&(this.isDirtyBox=this.isDirtyLegend=f,this.hasRendered&&l(a,!0)&&this.isDirtyBox&&this.redraw())},getChartSize:function(){var a=this.options.chart,b=a.width;a=a.height;var d=this.renderTo;D(b)||(this.containerWidth=c.getStyle(d,"width"));D(a)||(this.containerHeight=c.getStyle(d,"height"));this.chartWidth=Math.max(0,
b||this.containerWidth||600);this.chartHeight=Math.max(0,c.relativeLength(a,this.chartWidth)||(1<this.containerHeight?this.containerHeight:400))},temporaryDisplay:function(b){var d=this.renderTo;if(b)for(;d&&d.style;)d.hcOrigStyle&&(c.css(d,d.hcOrigStyle),delete d.hcOrigStyle),d.hcOrigDetached&&(a.body.removeChild(d),d.hcOrigDetached=!1),d=d.parentNode;else for(;d&&d.style;){a.body.contains(d)||d.parentNode||(d.hcOrigDetached=!0,a.body.appendChild(d));if("none"===c.getStyle(d,"display",!1)||d.hcOricDetached)d.hcOrigStyle=
{display:d.style.display,height:d.style.height,overflow:d.style.overflow},b={display:"block",overflow:"hidden"},d!==this.renderTo&&(b.height=0),c.css(d,b),d.offsetWidth||d.style.setProperty("display","block","important");d=d.parentNode;if(d===a.body)break}},setClassName:function(a){this.container.className="highcharts-container "+(a||"")},getContainer:function(){var b=this.options,d=b.chart;var e=this.renderTo;var l=c.uniqueKey(),t,h;e||(this.renderTo=e=d.renderTo);y(e)&&(this.renderTo=e=a.getElementById(e));
e||c.error(13,!0,this);var B=x(A(e,"data-highcharts-chart"));u(B)&&r[B]&&r[B].hasRendered&&r[B].destroy();A(e,"data-highcharts-chart",this.index);e.innerHTML="";d.skipClone||e.offsetWidth||this.temporaryDisplay();this.getChartSize();B=this.chartWidth;var w=this.chartHeight;E(e,{overflow:"hidden"});this.styledMode||(t=q({position:"relative",overflow:"hidden",width:B+"px",height:w+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},d.style));this.container=
e=f("div",{id:l},t,e);this._cursor=e.style.cursor;this.renderer=new (c[d.renderer]||c.Renderer)(e,B,w,null,d.forExport,b.exporting&&b.exporting.allowHTML,this.styledMode);this.setClassName(d.className);if(this.styledMode)for(h in b.defs)this.renderer.definition(b.defs[h]);else this.renderer.setStyle(d.style);this.renderer.chartIndex=this.index;k(this,"afterGetContainer")},getMargins:function(a){var b=this.spacing,d=this.margin,c=this.titleOffset;this.resetMargins();c[0]&&!D(d[0])&&(this.plotTop=Math.max(this.plotTop,
c[0]+b[0]));c[2]&&!D(d[2])&&(this.marginBottom=Math.max(this.marginBottom,c[2]+b[2]));this.legend&&this.legend.display&&this.legend.adjustMargins(d,b);k(this,"getMargins");a||this.getAxisMargins()},getAxisMargins:function(){var a=this,b=a.axisOffset=[0,0,0,0],d=a.colorAxis,c=a.margin,f=function(a){a.forEach(function(a){a.visible&&a.getOffset()})};a.hasCartesianSeries?f(a.axes):d&&d.length&&f(d);B.forEach(function(d,f){D(c[f])||(a[d]+=b[f])});a.setChartSize()},reflow:function(b){var d=this,f=d.options.chart,
e=d.renderTo,k=D(f.width)&&D(f.height),l=f.width||c.getStyle(e,"width");f=f.height||c.getStyle(e,"height");e=b?b.target:R;if(!k&&!d.isPrinting&&l&&f&&(e===R||e===a)){if(l!==d.containerWidth||f!==d.containerHeight)c.clearTimeout(d.reflowTimeout),d.reflowTimeout=T(function(){d.container&&d.setSize(void 0,void 0,!1)},b?100:0);d.containerWidth=l;d.containerHeight=f}},setReflow:function(a){var b=this;!1===a||this.unbindReflow?!1===a&&this.unbindReflow&&(this.unbindReflow=this.unbindReflow()):(this.unbindReflow=
p(R,"resize",function(a){b.options&&b.reflow(a)}),p(this,"destroy",this.unbindReflow))},setSize:function(a,d,f){var e=this,l=e.renderer;e.isResizing+=1;c.setAnimation(f,e);e.oldChartHeight=e.chartHeight;e.oldChartWidth=e.chartWidth;void 0!==a&&(e.options.chart.width=a);void 0!==d&&(e.options.chart.height=d);e.getChartSize();if(!e.styledMode){var t=l.globalAnimation;(t?g:E)(e.container,{width:e.chartWidth+"px",height:e.chartHeight+"px"},t)}e.setChartSize(!0);l.setSize(e.chartWidth,e.chartHeight,f);
e.axes.forEach(function(a){a.isDirty=!0;a.setScale()});e.isDirtyLegend=!0;e.isDirtyBox=!0;e.layOutTitles();e.getMargins();e.redraw(f);e.oldChartHeight=null;k(e,"resize");T(function(){e&&k(e,"endResize",null,function(){--e.isResizing})},b(t).duration)},setChartSize:function(a){var b=this.inverted,d=this.renderer,c=this.chartWidth,f=this.chartHeight,e=this.options.chart,l=this.spacing,t=this.clipOffset,B,h,w,g;this.plotLeft=B=Math.round(this.plotLeft);this.plotTop=h=Math.round(this.plotTop);this.plotWidth=
w=Math.max(0,Math.round(c-B-this.marginRight));this.plotHeight=g=Math.max(0,Math.round(f-h-this.marginBottom));this.plotSizeX=b?g:w;this.plotSizeY=b?w:g;this.plotBorderWidth=e.plotBorderWidth||0;this.spacingBox=d.spacingBox={x:l[3],y:l[0],width:c-l[3]-l[1],height:f-l[0]-l[2]};this.plotBox=d.plotBox={x:B,y:h,width:w,height:g};c=2*Math.floor(this.plotBorderWidth/2);b=Math.ceil(Math.max(c,t[3])/2);d=Math.ceil(Math.max(c,t[0])/2);this.clipBox={x:b,y:d,width:Math.floor(this.plotSizeX-Math.max(c,t[1])/
2-b),height:Math.max(0,Math.floor(this.plotSizeY-Math.max(c,t[2])/2-d))};a||this.axes.forEach(function(a){a.setAxisSize();a.setAxisTranslation()});k(this,"afterSetChartSize",{skipAxes:a})},resetMargins:function(){k(this,"resetMargins");var a=this,b=a.options.chart;["margin","spacing"].forEach(function(d){var c=b[d],f=L(c)?c:[c,c,c,c];["Top","Right","Bottom","Left"].forEach(function(c,e){a[d][e]=l(b[d+c],f[e])})});B.forEach(function(b,d){a[b]=l(a.margin[d],a.spacing[d])});a.axisOffset=[0,0,0,0];a.clipOffset=
[0,0,0,0]},drawChartBox:function(){var a=this.options.chart,b=this.renderer,d=this.chartWidth,c=this.chartHeight,f=this.chartBackground,e=this.plotBackground,l=this.plotBorder,t=this.styledMode,B=this.plotBGImage,h=a.backgroundColor,w=a.plotBackgroundColor,g=a.plotBackgroundImage,q,v=this.plotLeft,m=this.plotTop,I=this.plotWidth,p=this.plotHeight,r=this.plotBox,K=this.clipRect,x=this.clipBox,J="animate";f||(this.chartBackground=f=b.rect().addClass("highcharts-background").add(),J="attr");if(t)var n=
q=f.strokeWidth();else{n=a.borderWidth||0;q=n+(a.shadow?8:0);h={fill:h||"none"};if(n||f["stroke-width"])h.stroke=a.borderColor,h["stroke-width"]=n;f.attr(h).shadow(a.shadow)}f[J]({x:q/2,y:q/2,width:d-q-n%2,height:c-q-n%2,r:a.borderRadius});J="animate";e||(J="attr",this.plotBackground=e=b.rect().addClass("highcharts-plot-background").add());e[J](r);t||(e.attr({fill:w||"none"}).shadow(a.plotShadow),g&&(B?B.animate(r):this.plotBGImage=b.image(g,v,m,I,p).add()));K?K.animate({width:x.width,height:x.height}):
this.clipRect=b.clipRect(x);J="animate";l||(J="attr",this.plotBorder=l=b.rect().addClass("highcharts-plot-border").attr({zIndex:1}).add());t||l.attr({stroke:a.plotBorderColor,"stroke-width":a.plotBorderWidth||0,fill:"none"});l[J](l.crisp({x:v,y:m,width:I,height:p},-l.strokeWidth()));this.isDirtyBox=!1;k(this,"afterDrawChartBox")},propFromSeries:function(){var a=this,b=a.options.chart,d,c=a.options.series,f,e;["inverted","angular","polar"].forEach(function(k){d=K[b.type||b.defaultSeriesType];e=b[k]||
d&&d.prototype[k];for(f=c&&c.length;!e&&f--;)(d=K[c[f].type])&&d.prototype[k]&&(e=!0);a[k]=e})},linkSeries:function(){var a=this,b=a.series;b.forEach(function(a){a.linkedSeries.length=0});b.forEach(function(b){var d=b.options.linkedTo;y(d)&&(d=":previous"===d?a.series[b.index-1]:a.get(d))&&d.linkedParent!==b&&(d.linkedSeries.push(b),b.linkedParent=d,b.visible=l(b.options.visible,d.options.visible,b.visible))});k(this,"afterLinkSeries")},renderSeries:function(){this.series.forEach(function(a){a.translate();
a.render()})},renderLabels:function(){var a=this,b=a.options.labels;b.items&&b.items.forEach(function(d){var c=q(b.style,d.style),f=x(c.left)+a.plotLeft,e=x(c.top)+a.plotTop+12;delete c.left;delete c.top;a.renderer.text(d.html,f,e).attr({zIndex:2}).css(c).add()})},render:function(){var a=this.axes,b=this.colorAxis,d=this.renderer,c=this.options,f=0,e=function(a){a.forEach(function(a){a.visible&&a.render()})};this.setTitle();this.legend=new t(this,c.legend);this.getStacks&&this.getStacks();this.getMargins(!0);
this.setChartSize();c=this.plotWidth;a.some(function(a){if(a.horiz&&a.visible&&a.options.labels.enabled&&a.series.length)return f=21,!0});var k=this.plotHeight=Math.max(this.plotHeight-f,0);a.forEach(function(a){a.setScale()});this.getAxisMargins();var l=1.1<c/this.plotWidth;var h=1.05<k/this.plotHeight;if(l||h)a.forEach(function(a){(a.horiz&&l||!a.horiz&&h)&&a.setTickInterval(!0)}),this.getMargins();this.drawChartBox();this.hasCartesianSeries?e(a):b&&b.length&&e(b);this.seriesGroup||(this.seriesGroup=
d.g("series-group").attr({zIndex:3}).add());this.renderSeries();this.renderLabels();this.addCredits();this.setResponsive&&this.setResponsive();this.updateContainerScaling();this.hasRendered=!0},addCredits:function(a){var b=this;a=I(!0,this.options.credits,a);a.enabled&&!this.credits&&(this.credits=this.renderer.text(a.text+(this.mapCredits||""),0,0).addClass("highcharts-credits").on("click",function(){a.href&&(R.location.href=a.href)}).attr({align:a.position.align,zIndex:8}),b.styledMode||this.credits.css(a.style),
this.credits.add().align(a.position),this.credits.update=function(a){b.credits=b.credits.destroy();b.addCredits(a)})},updateContainerScaling:function(){var a=this.container;if(a.offsetWidth&&a.offsetHeight&&a.getBoundingClientRect){var b=a.getBoundingClientRect(),d=b.width/a.offsetWidth;a=b.height/a.offsetHeight;1!==d||1!==a?this.containerScaling={scaleX:d,scaleY:a}:delete this.containerScaling}},destroy:function(){var a=this,b=a.axes,d=a.series,f=a.container,e,l=f&&f.parentNode;k(a,"destroy");a.renderer.forExport?
F(r,a):r[a.index]=void 0;c.chartCount--;a.renderTo.removeAttribute("data-highcharts-chart");J(a);for(e=b.length;e--;)b[e]=b[e].destroy();this.scroller&&this.scroller.destroy&&this.scroller.destroy();for(e=d.length;e--;)d[e]=d[e].destroy();"title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" ").forEach(function(b){var d=a[b];d&&d.destroy&&(a[b]=d.destroy())});f&&(f.innerHTML="",J(f),
l&&h(f));C(a,function(b,d){delete a[d]})},firstRender:function(){var a=this,b=a.options;if(!a.isReadyToRender||a.isReadyToRender()){a.getContainer();a.resetMargins();a.setChartSize();a.propFromSeries();a.getAxes();(z(b.series)?b.series:[]).forEach(function(b){a.initSeries(b)});a.linkSeries();k(a,"beforeRender");w&&(a.pointer=new w(a,b));a.render();if(!a.renderer.imgCount&&a.onload)a.onload();a.temporaryDisplay(!0)}},onload:function(){this.callbacks.concat([this.callback]).forEach(function(a){a&&void 0!==
this.index&&a.apply(this,[this])},this);k(this,"load");k(this,"render");D(this.index)&&this.setReflow(this.options.chart.reflow);this.onload=null}})});N(H,"parts/ScrollablePlotArea.js",[H["parts/Globals.js"]],function(c){var n=c.addEvent,A=c.Chart;"";n(A,"afterSetChartSize",function(n){var A=this.options.chart.scrollablePlotArea,z=A&&A.minWidth;A=A&&A.minHeight;if(!this.renderer.forExport){if(z){if(this.scrollablePixelsX=z=Math.max(0,z-this.chartWidth)){this.plotWidth+=z;this.inverted?(this.clipBox.height+=
z,this.plotBox.height+=z):(this.clipBox.width+=z,this.plotBox.width+=z);var u={1:{name:"right",value:z}}}}else A&&(this.scrollablePixelsY=z=Math.max(0,A-this.chartHeight))&&(this.plotHeight+=z,this.inverted?(this.clipBox.width+=z,this.plotBox.width+=z):(this.clipBox.height+=z,this.plotBox.height+=z),u={2:{name:"bottom",value:z}});u&&!n.skipAxes&&this.axes.forEach(function(n){u[n.side]?n.getPlotLinePath=function(){var y=u[n.side].name,z=this[y];this[y]=z-u[n.side].value;var x=c.Axis.prototype.getPlotLinePath.apply(this,
arguments);this[y]=z;return x}:(n.setAxisSize(),n.setAxisTranslation())})}});n(A,"render",function(){this.scrollablePixelsX||this.scrollablePixelsY?(this.setUpScrolling&&this.setUpScrolling(),this.applyFixed()):this.fixedDiv&&this.applyFixed()});A.prototype.setUpScrolling=function(){var n={WebkitOverflowScrolling:"touch",overflowX:"hidden",overflowY:"hidden"};this.scrollablePixelsX&&(n.overflowX="auto");this.scrollablePixelsY&&(n.overflowY="auto");this.scrollingContainer=c.createElement("div",{className:"highcharts-scrolling"},
n,this.renderTo);this.innerContainer=c.createElement("div",{className:"highcharts-inner-container"},null,this.scrollingContainer);this.innerContainer.appendChild(this.container);this.setUpScrolling=null};A.prototype.moveFixedElements=function(){var c=this.container,n=this.fixedRenderer,z=".highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-reset-zoom .highcharts-subtitle .highcharts-title .highcharts-legend-checkbox".split(" "),u;this.scrollablePixelsX&&!this.inverted?u=".highcharts-yaxis":
this.scrollablePixelsX&&this.inverted?u=".highcharts-xaxis":this.scrollablePixelsY&&!this.inverted?u=".highcharts-xaxis":this.scrollablePixelsY&&this.inverted&&(u=".highcharts-yaxis");z.push(u,u+"-labels");z.forEach(function(u){[].forEach.call(c.querySelectorAll(u),function(c){(c.namespaceURI===n.SVG_NS?n.box:n.box.parentNode).appendChild(c);c.style.pointerEvents="auto"})})};A.prototype.applyFixed=function(){var A,F=!this.fixedDiv,z=this.options.chart.scrollablePlotArea;F?(this.fixedDiv=c.createElement("div",
{className:"highcharts-fixed"},{position:"absolute",overflow:"hidden",pointerEvents:"none",zIndex:2},null,!0),this.renderTo.insertBefore(this.fixedDiv,this.renderTo.firstChild),this.renderTo.style.overflow="visible",this.fixedRenderer=A=new c.Renderer(this.fixedDiv,this.chartWidth,this.chartHeight),this.scrollableMask=A.path().attr({fill:c.color(this.options.chart.backgroundColor||"#fff").setOpacity(c.pick(z.opacity,.85)).get(),zIndex:-1}).addClass("highcharts-scrollable-mask").add(),this.moveFixedElements(),
n(this,"afterShowResetZoom",this.moveFixedElements)):this.fixedRenderer.setSize(this.chartWidth,this.chartHeight);A=this.chartWidth+(this.scrollablePixelsX||0);var u=this.chartHeight+(this.scrollablePixelsY||0);c.stop(this.container);this.container.style.width=A+"px";this.container.style.height=u+"px";this.renderer.boxWrapper.attr({width:A,height:u,viewBox:[0,0,A,u].join(" ")});this.chartBackground.attr({width:A,height:u});this.scrollablePixelsY&&(this.scrollingContainer.style.height=this.chartHeight+
"px");F&&(z.scrollPositionX&&(this.scrollingContainer.scrollLeft=this.scrollablePixelsX*z.scrollPositionX),z.scrollPositionY&&(this.scrollingContainer.scrollTop=this.scrollablePixelsY*z.scrollPositionY));u=this.axisOffset;F=this.plotTop-u[0]-1;z=this.plotLeft-u[3]-1;A=this.plotTop+this.plotHeight+u[2]+1;u=this.plotLeft+this.plotWidth+u[1]+1;var L=this.plotLeft+this.plotWidth-(this.scrollablePixelsX||0),y=this.plotTop+this.plotHeight-(this.scrollablePixelsY||0);F=this.scrollablePixelsX?["M",0,F,"L",
this.plotLeft-1,F,"L",this.plotLeft-1,A,"L",0,A,"Z","M",L,F,"L",this.chartWidth,F,"L",this.chartWidth,A,"L",L,A,"Z"]:this.scrollablePixelsY?["M",z,0,"L",z,this.plotTop-1,"L",u,this.plotTop-1,"L",u,0,"Z","M",z,y,"L",z,this.chartHeight,"L",u,this.chartHeight,"L",u,y,"Z"]:["M",0,0];"adjustHeight"!==this.redrawTrigger&&this.scrollableMask.attr({d:F})}});N(H,"parts/Point.js",[H["parts/Globals.js"],H["parts/Utilities.js"]],function(c,n){var A=n.defined,D=n.erase,F=n.isArray,z=n.isNumber,u=n.isObject,L,
y=c.extend,C=c.fireEvent,x=c.format,m=c.pick,p=c.uniqueKey,g=c.removeEvent;c.Point=L=function(){};c.Point.prototype={init:function(b,a,d){this.series=b;this.applyOptions(a,d);this.id=A(this.id)?this.id:p();this.resolveColor();b.chart.pointCount++;C(this,"afterInit");return this},resolveColor:function(){var b=this.series;var a=b.chart.options.chart.colorCount;var d=b.chart.styledMode;d||this.options.color||(this.color=b.color);b.options.colorByPoint?(d||(a=b.options.colors||b.chart.options.colors,
this.color=this.color||a[b.colorCounter],a=a.length),d=b.colorCounter,b.colorCounter++,b.colorCounter===a&&(b.colorCounter=0)):d=b.colorIndex;this.colorIndex=m(this.colorIndex,d)},applyOptions:function(b,a){var d=this.series,c=d.options.pointValKey||d.pointValKey;b=L.prototype.optionsToObject.call(this,b);y(this,b);this.options=this.options?y(this.options,b):b;b.group&&delete this.group;b.dataLabels&&delete this.dataLabels;c&&(this.y=this[c]);this.formatPrefix=(this.isNull=m(this.isValid&&!this.isValid(),
null===this.x||!z(this.y)))?"null":"point";this.selected&&(this.state="select");"name"in this&&void 0===a&&d.xAxis&&d.xAxis.hasNames&&(this.x=d.xAxis.nameToX(this));void 0===this.x&&d&&(this.x=void 0===a?d.autoIncrement(this):a);return this},setNestedProperty:function(b,a,d){d.split(".").reduce(function(b,d,c,g){b[d]=g.length-1===c?a:u(b[d],!0)?b[d]:{};return b[d]},b);return b},optionsToObject:function(b){var a={},d=this.series,f=d.options.keys,e=f||d.pointArrayMap||["y"],h=e.length,g=0,m=0;if(z(b)||
null===b)a[e[0]]=b;else if(F(b))for(!f&&b.length>h&&(d=typeof b[0],"string"===d?a.name=b[0]:"number"===d&&(a.x=b[0]),g++);m<h;)f&&void 0===b[g]||(0<e[m].indexOf(".")?c.Point.prototype.setNestedProperty(a,b[g],e[m]):a[e[m]]=b[g]),g++,m++;else"object"===typeof b&&(a=b,b.dataLabels&&(d._hasPointLabels=!0),b.marker&&(d._hasPointMarkers=!0));return a},getClassName:function(){return"highcharts-point"+(this.selected?" highcharts-point-select":"")+(this.negative?" highcharts-negative":"")+(this.isNull?" highcharts-null-point":
"")+(void 0!==this.colorIndex?" highcharts-color-"+this.colorIndex:"")+(this.options.className?" "+this.options.className:"")+(this.zone&&this.zone.className?" "+this.zone.className.replace("highcharts-negative",""):"")},getZone:function(){var b=this.series,a=b.zones;b=b.zoneAxis||"y";var d=0,c;for(c=a[d];this[b]>=c.value;)c=a[++d];this.nonZonedColor||(this.nonZonedColor=this.color);this.color=c&&c.color&&!this.options.color?c.color:this.nonZonedColor;return c},destroy:function(){var b=this.series.chart,
a=b.hoverPoints,d;b.pointCount--;a&&(this.setState(),D(a,this),a.length||(b.hoverPoints=null));if(this===b.hoverPoint)this.onMouseOut();if(this.graphic||this.dataLabel||this.dataLabels)g(this),this.destroyElements();this.legendItem&&b.legend.destroyItem(this);for(d in this)this[d]=null},destroyElements:function(b){var a=this,d=[],c;b=b||{graphic:1,dataLabel:1};b.graphic&&d.push("graphic","shadowGroup");b.dataLabel&&d.push("dataLabel","dataLabelUpper","connector");for(c=d.length;c--;){var e=d[c];a[e]&&
(a[e]=a[e].destroy())}["dataLabel","connector"].forEach(function(d){var c=d+"s";b[d]&&a[c]&&(a[c].forEach(function(a){a.element&&a.destroy()}),delete a[c])})},getLabelConfig:function(){return{x:this.category,y:this.y,color:this.color,colorIndex:this.colorIndex,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}},tooltipFormatter:function(b){var a=this.series,d=a.tooltipOptions,c=m(d.valueDecimals,""),e=d.valuePrefix||"",h=d.valueSuffix||
"";a.chart.styledMode&&(b=a.chart.tooltip.styledModeFormat(b));(a.pointArrayMap||["y"]).forEach(function(a){a="{point."+a;if(e||h)b=b.replace(RegExp(a+"}","g"),e+a+"}"+h);b=b.replace(RegExp(a+"}","g"),a+":,."+c+"f}")});return x(b,{point:this,series:this.series},a.chart.time)},firePointEvent:function(b,a,d){var c=this,e=this.series.options;(e.point.events[b]||c.options&&c.options.events&&c.options.events[b])&&this.importEvents();"click"===b&&e.allowPointSelect&&(d=function(a){c.select&&c.select(null,
a.ctrlKey||a.metaKey||a.shiftKey)});C(this,b,a,d)},visible:!0}});N(H,"parts/Series.js",[H["parts/Globals.js"],H["parts/Utilities.js"]],function(c,n){var A=n.defined,D=n.erase,F=n.isArray,z=n.isNumber,u=n.isString,L=n.objectEach,y=n.splat,C=c.addEvent,x=c.animObject,m=c.arrayMax,p=c.arrayMin,g=c.correctFloat,b=c.defaultOptions,a=c.defaultPlotOptions,d=c.extend,f=c.fireEvent,e=c.merge,h=c.pick,r=c.removeEvent,E=c.SVGElement,q=c.syncTimeout,v=c.win;c.Series=c.seriesType("line",null,{lineWidth:2,allowPointSelect:!1,
showCheckbox:!1,animation:{duration:1E3},events:{},marker:{lineWidth:0,lineColor:"#ffffff",enabledThreshold:2,radius:4,states:{normal:{animation:!0},hover:{animation:{duration:50},enabled:!0,radiusPlus:2,lineWidthPlus:1},select:{fillColor:"#cccccc",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{align:"center",formatter:function(){return null===this.y?"":c.numberFormat(this.y,-1)},padding:5,style:{fontSize:"11px",fontWeight:"bold",color:"contrast",textOutline:"1px contrast"},verticalAlign:"bottom",
x:0,y:0},cropThreshold:300,opacity:1,pointRange:0,softThreshold:!0,states:{normal:{animation:!0},hover:{animation:{duration:50},lineWidthPlus:1,marker:{},halo:{size:10,opacity:.25}},select:{animation:{duration:0}},inactive:{animation:{duration:50},opacity:.2}},stickyTracking:!0,turboThreshold:1E3,findNearestPointBy:"x"},{axisTypes:["xAxis","yAxis"],coll:"series",colorCounter:0,cropShoulder:1,directTouch:!1,isCartesian:!0,parallelArrays:["x","y"],pointClass:c.Point,requireSorting:!0,sorted:!0,init:function(a,
b){f(this,"init",{options:b});var e=this,k=a.series,t;this.eventOptions=this.eventOptions||{};e.chart=a;e.options=b=e.setOptions(b);e.linkedSeries=[];e.bindAxes();d(e,{name:b.name,state:"",visible:!1!==b.visible,selected:!0===b.selected});var l=b.events;L(l,function(a,b){c.isFunction(a)&&e.eventOptions[b]!==a&&(c.isFunction(e.eventOptions[b])&&r(e,b,e.eventOptions[b]),e.eventOptions[b]=a,C(e,b,a))});if(l&&l.click||b.point&&b.point.events&&b.point.events.click||b.allowPointSelect)a.runTrackerClick=
!0;e.getColor();e.getSymbol();e.parallelArrays.forEach(function(a){e[a+"Data"]||(e[a+"Data"]=[])});e.points||e.data||e.setData(b.data,!1);e.isCartesian&&(a.hasCartesianSeries=!0);k.length&&(t=k[k.length-1]);e._i=h(t&&t._i,-1)+1;a.orderSeries(this.insert(k));f(this,"afterInit")},insert:function(a){var b=this.options.index,d;if(z(b)){for(d=a.length;d--;)if(b>=h(a[d].options.index,a[d]._i)){a.splice(d+1,0,this);break}-1===d&&a.unshift(this);d+=1}else a.push(this);return h(d,a.length-1)},bindAxes:function(){var a=
this,b=a.options,d=a.chart,e;f(this,"bindAxes",null,function(){(a.axisTypes||[]).forEach(function(f){d[f].forEach(function(d){e=d.options;if(b[f]===e.index||void 0!==b[f]&&b[f]===e.id||void 0===b[f]&&0===e.index)a.insert(d.series),a[f]=d,d.isDirty=!0});a[f]||a.optionalAxis===f||c.error(18,!0,d)})})},updateParallelArrays:function(a,b){var d=a.series,c=arguments,f=z(b)?function(c){var f="y"===c&&d.toYData?d.toYData(a):a[c];d[c+"Data"][b]=f}:function(a){Array.prototype[b].apply(d[a+"Data"],Array.prototype.slice.call(c,
2))};d.parallelArrays.forEach(f)},hasData:function(){return this.visible&&void 0!==this.dataMax&&void 0!==this.dataMin||this.visible&&this.yData&&0<this.yData.length},autoIncrement:function(){var a=this.options,b=this.xIncrement,d,c=a.pointIntervalUnit,f=this.chart.time;b=h(b,a.pointStart,0);this.pointInterval=d=h(this.pointInterval,a.pointInterval,1);c&&(a=new f.Date(b),"day"===c?f.set("Date",a,f.get("Date",a)+d):"month"===c?f.set("Month",a,f.get("Month",a)+d):"year"===c&&f.set("FullYear",a,f.get("FullYear",
a)+d),d=a.getTime()-b);this.xIncrement=b+d;return b},setOptions:function(a){var d=this.chart,c=d.options,k=c.plotOptions,w=d.userOptions||{};a=e(a);d=d.styledMode;var l={plotOptions:k,userOptions:a};f(this,"setOptions",l);var g=l.plotOptions[this.type],q=w.plotOptions||{};this.userOptions=l.userOptions;w=e(g,k.series,w.plotOptions&&w.plotOptions[this.type],a);this.tooltipOptions=e(b.tooltip,b.plotOptions.series&&b.plotOptions.series.tooltip,b.plotOptions[this.type].tooltip,c.tooltip.userOptions,k.series&&
k.series.tooltip,k[this.type].tooltip,a.tooltip);this.stickyTracking=h(a.stickyTracking,q[this.type]&&q[this.type].stickyTracking,q.series&&q.series.stickyTracking,this.tooltipOptions.shared&&!this.noSharedTooltip?!0:w.stickyTracking);null===g.marker&&delete w.marker;this.zoneAxis=w.zoneAxis;c=this.zones=(w.zones||[]).slice();!w.negativeColor&&!w.negativeFillColor||w.zones||(k={value:w[this.zoneAxis+"Threshold"]||w.threshold||0,className:"highcharts-negative"},d||(k.color=w.negativeColor,k.fillColor=
w.negativeFillColor),c.push(k));c.length&&A(c[c.length-1].value)&&c.push(d?{}:{color:this.color,fillColor:this.fillColor});f(this,"afterSetOptions",{options:w});return w},getName:function(){return h(this.options.name,"Series "+(this.index+1))},getCyclic:function(a,b,d){var c=this.chart,f=this.userOptions,e=a+"Index",k=a+"Counter",t=d?d.length:h(c.options.chart[a+"Count"],c[a+"Count"]);if(!b){var B=h(f[e],f["_"+e]);A(B)||(c.series.length||(c[k]=0),f["_"+e]=B=c[k]%t,c[k]+=1);d&&(b=d[B])}void 0!==B&&
(this[e]=B);this[a]=b},getColor:function(){this.chart.styledMode?this.getCyclic("color"):this.options.colorByPoint?this.options.color=null:this.getCyclic("color",this.options.color||a[this.type].color,this.chart.options.colors)},getSymbol:function(){this.getCyclic("symbol",this.options.marker.symbol,this.chart.options.symbols)},findPointIndex:function(a,b){var d=a.id;a=a.x;var c=this.points,f;if(d){var e=(d=this.chart.get(d))&&d.index;void 0!==e&&(f=!0)}void 0===e&&z(a)&&(e=this.xData.indexOf(a,b));
-1!==e&&void 0!==e&&this.cropped&&(e=e>=this.cropStart?e-this.cropStart:e);!f&&c[e]&&c[e].touched&&(e=void 0);return e},drawLegendSymbol:c.LegendSymbolMixin.drawLineMarker,updateData:function(a){var b=this.options,d=this.points,c=[],f,e,k,h=this.requireSorting,g=a.length===d.length,q=!0;this.xIncrement=null;a.forEach(function(a,e){var l=A(a)&&this.pointClass.prototype.optionsToObject.call({series:this},a)||{};var t=l.x;if(l.id||z(t))if(t=this.findPointIndex(l,k),-1===t||void 0===t?c.push(a):d[t]&&
a!==b.data[t]?(d[t].update(a,!1,null,!1),d[t].touched=!0,h&&(k=t+1)):d[t]&&(d[t].touched=!0),!g||e!==t||this.hasDerivedData)f=!0},this);if(f)for(a=d.length;a--;)(e=d[a])&&!e.touched&&e.remove(!1);else g?a.forEach(function(a,b){d[b].update&&a!==d[b].y&&d[b].update(a,!1,null,!1)}):q=!1;d.forEach(function(a){a&&(a.touched=!1)});if(!q)return!1;c.forEach(function(a){this.addPoint(a,!1,null,null,!1)},this);return!0},setData:function(a,b,d,f){var e=this,k=e.points,t=k&&k.length||0,g,q=e.options,v=e.chart,
m=null,B=e.xAxis,p=q.turboThreshold,I=this.xData,r=this.yData,x=(g=e.pointArrayMap)&&g.length,n=q.keys,y=0,E=1,A;a=a||[];g=a.length;b=h(b,!0);!1!==f&&g&&t&&!e.cropped&&!e.hasGroupedData&&e.visible&&!e.isSeriesBoosting&&(A=this.updateData(a));if(!A){e.xIncrement=null;e.colorCounter=0;this.parallelArrays.forEach(function(a){e[a+"Data"].length=0});if(p&&g>p){for(d=0;null===m&&d<g;)m=a[d],d++;if(z(m))for(d=0;d<g;d++)I[d]=this.autoIncrement(),r[d]=a[d];else if(F(m))if(x)for(d=0;d<g;d++)m=a[d],I[d]=m[0],
r[d]=m.slice(1,x+1);else for(n&&(y=n.indexOf("x"),E=n.indexOf("y"),y=0<=y?y:0,E=0<=E?E:1),d=0;d<g;d++)m=a[d],I[d]=m[y],r[d]=m[E];else c.error(12,!1,v)}else for(d=0;d<g;d++)void 0!==a[d]&&(m={series:e},e.pointClass.prototype.applyOptions.apply(m,[a[d]]),e.updateParallelArrays(m,d));r&&u(r[0])&&c.error(14,!0,v);e.data=[];e.options.data=e.userOptions.data=a;for(d=t;d--;)k[d]&&k[d].destroy&&k[d].destroy();B&&(B.minRange=B.userMinRange);e.isDirty=v.isDirtyBox=!0;e.isDirtyData=!!k;d=!1}"point"===q.legendType&&
(this.processData(),this.generatePoints());b&&v.redraw(d)},processData:function(a){var b=this.xData,d=this.yData,f=b.length;var e=0;var k=this.xAxis,h=this.options;var g=h.cropThreshold;var q=this.getExtremesFromAll||h.getExtremesFromAll,m=this.isCartesian;h=k&&k.val2lin;var v=k&&k.isLog,p=this.requireSorting;if(m&&!this.isDirty&&!k.isDirty&&!this.yAxis.isDirty&&!a)return!1;if(k){a=k.getExtremes();var r=a.min;var x=a.max}if(m&&this.sorted&&!q&&(!g||f>g||this.forceCrop))if(b[f-1]<r||b[0]>x)b=[],d=
[];else if(this.yData&&(b[0]<r||b[f-1]>x)){e=this.cropData(this.xData,this.yData,r,x);b=e.xData;d=e.yData;e=e.start;var n=!0}for(g=b.length||1;--g;)if(f=v?h(b[g])-h(b[g-1]):b[g]-b[g-1],0<f&&(void 0===u||f<u))var u=f;else 0>f&&p&&(c.error(15,!1,this.chart),p=!1);this.cropped=n;this.cropStart=e;this.processedXData=b;this.processedYData=d;this.closestPointRange=this.basePointRange=u},cropData:function(a,b,d,c,f){var e=a.length,k=0,t=e,g;f=h(f,this.cropShoulder);for(g=0;g<e;g++)if(a[g]>=d){k=Math.max(0,
g-f);break}for(d=g;d<e;d++)if(a[d]>c){t=d+f;break}return{xData:a.slice(k,t),yData:b.slice(k,t),start:k,end:t}},generatePoints:function(){var a=this.options,b=a.data,c=this.data,e,h=this.processedXData,l=this.processedYData,g=this.pointClass,q=h.length,m=this.cropStart||0,v=this.hasGroupedData;a=a.keys;var p=[],r;c||v||(c=[],c.length=b.length,c=this.data=c);a&&v&&(this.options.keys=!1);for(r=0;r<q;r++){var x=m+r;if(v){var n=(new g).init(this,[h[r]].concat(y(l[r])));n.dataGroup=this.groupMap[r];n.dataGroup.options&&
(n.options=n.dataGroup.options,d(n,n.dataGroup.options),delete n.dataLabels)}else(n=c[x])||void 0===b[x]||(c[x]=n=(new g).init(this,b[x],h[r]));n&&(n.index=x,p[r]=n)}this.options.keys=a;if(c&&(q!==(e=c.length)||v))for(r=0;r<e;r++)r!==m||v||(r+=q),c[r]&&(c[r].destroyElements(),c[r].plotX=void 0);this.data=c;this.points=p;f(this,"afterGeneratePoints")},getXExtremes:function(a){return{min:p(a),max:m(a)}},getExtremes:function(a){var b=this.xAxis,d=this.yAxis,c=this.processedXData||this.xData,e=[],k=0,
h=0;var g=0;var q=this.requireSorting?this.cropShoulder:0,v=d?d.positiveValuesOnly:!1,r;a=a||this.stackedYData||this.processedYData||[];d=a.length;b&&(g=b.getExtremes(),h=g.min,g=g.max);for(r=0;r<d;r++){var x=c[r];var n=a[r];var u=(z(n)||F(n))&&(n.length||0<n||!v);x=this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||!b||(c[r+q]||x)>=h&&(c[r-q]||x)<=g;if(u&&x)if(u=n.length)for(;u--;)z(n[u])&&(e[k++]=n[u]);else e[k++]=n}this.dataMin=p(e);this.dataMax=m(e);f(this,"afterGetExtremes")},
translate:function(){this.processedXData||this.processData();this.generatePoints();var a=this.options,b=a.stacking,d=this.xAxis,c=d.categories,e=this.yAxis,l=this.points,q=l.length,m=!!this.modifyValue,v,p=this.pointPlacementToXValue(),r=z(p),n=a.threshold,x=a.startFromThreshold?n:0,u,y=this.zoneAxis||"y",E=Number.MAX_VALUE;for(v=0;v<q;v++){var C=l[v],L=C.x;var D=C.y;var H=C.low,N=b&&e.stacks[(this.negStacks&&D<(x?0:n)?"-":"")+this.stackKey];e.positiveValuesOnly&&null!==D&&0>=D&&(C.isNull=!0);C.plotX=
u=g(Math.min(Math.max(-1E5,d.translate(L,0,0,0,1,p,"flags"===this.type)),1E5));if(b&&this.visible&&N&&N[L]){var W=this.getStackIndicator(W,L,this.index);if(!C.isNull){var P=N[L];var X=P.points[W.key]}}F(X)&&(H=X[0],D=X[1],H===x&&W.key===N[L].base&&(H=h(z(n)&&n,e.min)),e.positiveValuesOnly&&0>=H&&(H=null),C.total=C.stackTotal=P.total,C.percentage=P.total&&C.y/P.total*100,C.stackY=D,this.irregularWidths||P.setOffset(this.pointXOffset||0,this.barW||0));C.yBottom=A(H)?Math.min(Math.max(-1E5,e.translate(H,
0,1,0,1)),1E5):null;m&&(D=this.modifyValue(D,C));C.plotY=D="number"===typeof D&&Infinity!==D?Math.min(Math.max(-1E5,e.translate(D,0,1,0,1)),1E5):void 0;C.isInside=void 0!==D&&0<=D&&D<=e.len&&0<=u&&u<=d.len;C.clientX=r?g(d.translate(L,0,0,0,1,p)):u;C.negative=C[y]<(a[y+"Threshold"]||n||0);C.category=c&&void 0!==c[C.x]?c[C.x]:C.x;if(!C.isNull){void 0!==Y&&(E=Math.min(E,Math.abs(u-Y)));var Y=u}C.zone=this.zones.length&&C.getZone()}this.closestPointRangePx=E;f(this,"afterTranslate")},getValidPoints:function(a,
b,d){var c=this.chart;return(a||this.points||[]).filter(function(a){return b&&!c.isInsidePlot(a.plotX,a.plotY,c.inverted)?!1:d||!a.isNull})},getClipBox:function(a,b){var d=this.options,c=this.chart,f=c.inverted,e=this.xAxis,k=e&&this.yAxis;a&&!1===d.clip&&k?a=f?{y:-c.chartWidth+k.len+k.pos,height:c.chartWidth,width:c.chartHeight,x:-c.chartHeight+e.len+e.pos}:{y:-k.pos,height:c.chartHeight,width:c.chartWidth,x:-e.pos}:(a=this.clipBox||c.clipBox,b&&(a.width=c.plotSizeX,a.x=0));return b?{width:a.width,
x:a.x}:a},setClip:function(a){var b=this.chart,d=this.options,c=b.renderer,f=b.inverted,e=this.clipBox,k=this.getClipBox(a),h=this.sharedClipKey||["_sharedClip",a&&a.duration,a&&a.easing,k.height,d.xAxis,d.yAxis].join(),g=b[h],q=b[h+"m"];g||(a&&(k.width=0,f&&(k.x=b.plotSizeX+(!1!==d.clip?0:b.plotTop)),b[h+"m"]=q=c.clipRect(f?b.plotSizeX+99:-99,f?-b.plotLeft:-b.plotTop,99,f?b.chartWidth:b.chartHeight)),b[h]=g=c.clipRect(k),g.count={length:0});a&&!g.count[this.index]&&(g.count[this.index]=!0,g.count.length+=
1);if(!1!==d.clip||a)this.group.clip(a||e?g:b.clipRect),this.markerGroup.clip(q),this.sharedClipKey=h;a||(g.count[this.index]&&(delete g.count[this.index],--g.count.length),0===g.count.length&&h&&b[h]&&(e||(b[h]=b[h].destroy()),b[h+"m"]&&(b[h+"m"]=b[h+"m"].destroy())))},animate:function(a){var b=this.chart,d=x(this.options.animation);if(a)this.setClip(d);else{var c=this.sharedClipKey;a=b[c];var f=this.getClipBox(d,!0);a&&a.animate(f,d);b[c+"m"]&&b[c+"m"].animate({width:f.width+99,x:f.x-(b.inverted?
0:99)},d);this.animate=null}},afterAnimate:function(){this.setClip();f(this,"afterAnimate");this.finishedAnimating=!0},drawPoints:function(){var a=this.points,b=this.chart,d,c=this.options.marker,f=this[this.specialGroup]||this.markerGroup;var e=this.xAxis;var g=h(c.enabled,!e||e.isRadial?!0:null,this.closestPointRangePx>=c.enabledThreshold*c.radius);if(!1!==c.enabled||this._hasPointMarkers)for(e=0;e<a.length;e++){var q=a[e];var m=(d=q.graphic)?"animate":"attr";var v=q.marker||{};var p=!!q.marker;
var r=g&&void 0===v.enabled||v.enabled;var n=!1!==q.isInside;if(r&&!q.isNull){r=h(v.symbol,this.symbol);var x=this.markerAttribs(q,q.selected&&"select");d?d[n?"show":"hide"](n).animate(x):n&&(0<x.width||q.hasImage)&&(q.graphic=d=b.renderer.symbol(r,x.x,x.y,x.width,x.height,p?v:c).add(f));if(d&&!b.styledMode)d[m](this.pointAttribs(q,q.selected&&"select"));d&&d.addClass(q.getClassName(),!0)}else d&&(q.graphic=d.destroy())}},markerAttribs:function(a,b){var d=this.options.marker,c=a.marker||{},f=c.symbol||
d.symbol,e=h(c.radius,d.radius);b&&(d=d.states[b],b=c.states&&c.states[b],e=h(b&&b.radius,d&&d.radius,e+(d&&d.radiusPlus||0)));a.hasImage=f&&0===f.indexOf("url");a.hasImage&&(e=0);a={x:Math.floor(a.plotX)-e,y:a.plotY-e};e&&(a.width=a.height=2*e);return a},pointAttribs:function(a,b){var d=this.options.marker,c=a&&a.options,f=c&&c.marker||{},e=this.color,k=c&&c.color,t=a&&a.color;c=h(f.lineWidth,d.lineWidth);var g=a&&a.zone&&a.zone.color;a=1;e=k||g||t||e;k=f.fillColor||d.fillColor||e;e=f.lineColor||
d.lineColor||e;b=b||"normal";d=d.states[b];b=f.states&&f.states[b]||{};c=h(b.lineWidth,d.lineWidth,c+h(b.lineWidthPlus,d.lineWidthPlus,0));k=b.fillColor||d.fillColor||k;e=b.lineColor||d.lineColor||e;a=h(b.opacity,d.opacity,a);return{stroke:e,"stroke-width":c,fill:k,opacity:a}},destroy:function(a){var b=this,d=b.chart,e=/AppleWebKit\/533/.test(v.navigator.userAgent),k,l,h=b.data||[],g,q;f(b,"destroy");a||r(b);(b.axisTypes||[]).forEach(function(a){(q=b[a])&&q.series&&(D(q.series,b),q.isDirty=q.forceRedraw=
!0)});b.legendItem&&b.chart.legend.destroyItem(b);for(l=h.length;l--;)(g=h[l])&&g.destroy&&g.destroy();b.points=null;c.clearTimeout(b.animationTimeout);L(b,function(a,b){a instanceof E&&!a.survive&&(k=e&&"group"===b?"hide":"destroy",a[k]())});d.hoverSeries===b&&(d.hoverSeries=null);D(d.series,b);d.orderSeries();L(b,function(d,c){a&&"hcEvents"===c||delete b[c]})},getGraphPath:function(a,b,d){var c=this,f=c.options,e=f.step,k,h=[],t=[],g;a=a||c.points;(k=a.reversed)&&a.reverse();(e={right:1,center:2}[e]||
e&&3)&&k&&(e=4-e);!f.connectNulls||b||d||(a=this.getValidPoints(a));a.forEach(function(k,l){var q=k.plotX,v=k.plotY,m=a[l-1];(k.leftCliff||m&&m.rightCliff)&&!d&&(g=!0);k.isNull&&!A(b)&&0<l?g=!f.connectNulls:k.isNull&&!b?g=!0:(0===l||g?l=["M",k.plotX,k.plotY]:c.getPointSpline?l=c.getPointSpline(a,k,l):e?(l=1===e?["L",m.plotX,v]:2===e?["L",(m.plotX+q)/2,m.plotY,"L",(m.plotX+q)/2,v]:["L",q,m.plotY],l.push("L",q,v)):l=["L",q,v],t.push(k.x),e&&(t.push(k.x),2===e&&t.push(k.x)),h.push.apply(h,l),g=!1)});
h.xMap=t;return c.graphPath=h},drawGraph:function(){var a=this,b=this.options,d=(this.gappedPath||this.getGraphPath).call(this),c=this.chart.styledMode,f=[["graph","highcharts-graph"]];c||f[0].push(b.lineColor||this.color||"#cccccc",b.dashStyle);f=a.getZonesGraphs(f);f.forEach(function(f,e){var k=f[0],l=a[k],h=l?"animate":"attr";l?(l.endX=a.preventGraphAnimation?null:d.xMap,l.animate({d:d})):d.length&&(a[k]=l=a.chart.renderer.path(d).addClass(f[1]).attr({zIndex:1}).add(a.group));l&&!c&&(k={stroke:f[2],
"stroke-width":b.lineWidth,fill:a.fillGraph&&a.color||"none"},f[3]?k.dashstyle=f[3]:"square"!==b.linecap&&(k["stroke-linecap"]=k["stroke-linejoin"]="round"),l[h](k).shadow(2>e&&b.shadow));l&&(l.startX=d.xMap,l.isArea=d.isArea)})},getZonesGraphs:function(a){this.zones.forEach(function(b,d){d=["zone-graph-"+d,"highcharts-graph highcharts-zone-graph-"+d+" "+(b.className||"")];this.chart.styledMode||d.push(b.color||this.color,b.dashStyle||this.options.dashStyle);a.push(d)},this);return a},applyZones:function(){var a=
this,b=this.chart,d=b.renderer,c=this.zones,f,e,g=this.clips||[],q,m=this.graph,v=this.area,p=Math.max(b.chartWidth,b.chartHeight),r=this[(this.zoneAxis||"y")+"Axis"],n=b.inverted,x,u,y,E=!1;if(c.length&&(m||v)&&r&&void 0!==r.min){var z=r.reversed;var A=r.horiz;m&&!this.showLine&&m.hide();v&&v.hide();var C=r.getExtremes();c.forEach(function(c,k){f=z?A?b.plotWidth:0:A?0:r.toPixels(C.min)||0;f=Math.min(Math.max(h(e,f),0),p);e=Math.min(Math.max(Math.round(r.toPixels(h(c.value,C.max),!0)||0),0),p);E&&
(f=e=r.toPixels(C.max));x=Math.abs(f-e);u=Math.min(f,e);y=Math.max(f,e);r.isXAxis?(q={x:n?y:u,y:0,width:x,height:p},A||(q.x=b.plotHeight-q.x)):(q={x:0,y:n?y:u,width:p,height:x},A&&(q.y=b.plotWidth-q.y));n&&d.isVML&&(q=r.isXAxis?{x:0,y:z?u:y,height:q.width,width:b.chartWidth}:{x:q.y-b.plotLeft-b.spacingBox.x,y:0,width:q.height,height:b.chartHeight});g[k]?g[k].animate(q):g[k]=d.clipRect(q);m&&a["zone-graph-"+k].clip(g[k]);v&&a["zone-area-"+k].clip(g[k]);E=c.value>C.max;a.resetZones&&0===e&&(e=void 0)});
this.clips=g}else a.visible&&(m&&m.show(!0),v&&v.show(!0))},invertGroups:function(a){function b(){["group","markerGroup"].forEach(function(b){d[b]&&(c.renderer.isVML&&d[b].attr({width:d.yAxis.len,height:d.xAxis.len}),d[b].width=d.yAxis.len,d[b].height=d.xAxis.len,d[b].invert(a))})}var d=this,c=d.chart;if(d.xAxis){var f=C(c,"resize",b);C(d,"destroy",f);b(a);d.invertGroups=b}},plotGroup:function(a,b,d,c,f){var e=this[a],k=!e;k&&(this[a]=e=this.chart.renderer.g().attr({zIndex:c||.1}).add(f));e.addClass("highcharts-"+
b+" highcharts-series-"+this.index+" highcharts-"+this.type+"-series "+(A(this.colorIndex)?"highcharts-color-"+this.colorIndex+" ":"")+(this.options.className||"")+(e.hasClass("highcharts-tracker")?" highcharts-tracker":""),!0);e.attr({visibility:d})[k?"attr":"animate"](this.getPlotBox());return e},getPlotBox:function(){var a=this.chart,b=this.xAxis,d=this.yAxis;a.inverted&&(b=d,d=this.xAxis);return{translateX:b?b.left:a.plotLeft,translateY:d?d.top:a.plotTop,scaleX:1,scaleY:1}},render:function(){var a=
this,b=a.chart,d=a.options,c=!!a.animate&&b.renderer.isSVG&&x(d.animation).duration,e=a.visible?"inherit":"hidden",l=d.zIndex,h=a.hasRendered,g=b.seriesGroup,m=b.inverted;f(this,"render");var v=a.plotGroup("group","series",e,l,g);a.markerGroup=a.plotGroup("markerGroup","markers",e,l,g);c&&a.animate(!0);v.inverted=a.isCartesian||a.invertable?m:!1;a.drawGraph&&(a.drawGraph(),a.applyZones());a.visible&&a.drawPoints();a.drawDataLabels&&a.drawDataLabels();a.redrawPoints&&a.redrawPoints();a.drawTracker&&
!1!==a.options.enableMouseTracking&&a.drawTracker();a.invertGroups(m);!1===d.clip||a.sharedClipKey||h||v.clip(b.clipRect);c&&a.animate();h||(a.animationTimeout=q(function(){a.afterAnimate()},c));a.isDirty=!1;a.hasRendered=!0;f(a,"afterRender")},redraw:function(){var a=this.chart,b=this.isDirty||this.isDirtyData,d=this.group,c=this.xAxis,f=this.yAxis;d&&(a.inverted&&d.attr({width:a.plotWidth,height:a.plotHeight}),d.animate({translateX:h(c&&c.left,a.plotLeft),translateY:h(f&&f.top,a.plotTop)}));this.translate();
this.render();b&&delete this.kdTree},kdAxisArray:["clientX","plotY"],searchPoint:function(a,b){var d=this.xAxis,c=this.yAxis,f=this.chart.inverted;return this.searchKDTree({clientX:f?d.len-a.chartY+d.pos:a.chartX-d.pos,plotY:f?c.len-a.chartX+c.pos:a.chartY-c.pos},b,a)},buildKDTree:function(a){function b(a,c,f){var e;if(e=a&&a.length){var k=d.kdAxisArray[c%f];a.sort(function(a,b){return a[k]-b[k]});e=Math.floor(e/2);return{point:a[e],left:b(a.slice(0,e),c+1,f),right:b(a.slice(e+1),c+1,f)}}}this.buildingKdTree=
!0;var d=this,c=-1<d.options.findNearestPointBy.indexOf("y")?2:1;delete d.kdTree;q(function(){d.kdTree=b(d.getValidPoints(null,!d.directTouch),c,c);d.buildingKdTree=!1},d.options.kdNow||a&&"touchstart"===a.type?0:1)},searchKDTree:function(a,b,d){function c(a,b,d,l){var g=b.point,q=f.kdAxisArray[d%l],t=g;var m=A(a[e])&&A(g[e])?Math.pow(a[e]-g[e],2):null;var v=A(a[k])&&A(g[k])?Math.pow(a[k]-g[k],2):null;v=(m||0)+(v||0);g.dist=A(v)?Math.sqrt(v):Number.MAX_VALUE;g.distX=A(m)?Math.sqrt(m):Number.MAX_VALUE;
q=a[q]-g[q];v=0>q?"left":"right";m=0>q?"right":"left";b[v]&&(v=c(a,b[v],d+1,l),t=v[h]<t[h]?v:g);b[m]&&Math.sqrt(q*q)<t[h]&&(a=c(a,b[m],d+1,l),t=a[h]<t[h]?a:t);return t}var f=this,e=this.kdAxisArray[0],k=this.kdAxisArray[1],h=b?"distX":"dist";b=-1<f.options.findNearestPointBy.indexOf("y")?2:1;this.kdTree||this.buildingKdTree||this.buildKDTree(d);if(this.kdTree)return c(a,this.kdTree,b,b)},pointPlacementToXValue:function(){var a=this.options.pointPlacement;"between"===a&&(a=.5);z(a)&&(a*=h(this.options.pointRange||
this.xAxis.pointRange));return a}});""});N(H,"parts/Stacking.js",[H["parts/Globals.js"],H["parts/Utilities.js"]],function(c,n){var A=n.defined,D=n.objectEach;n=c.Axis;var F=c.Chart,z=c.correctFloat,u=c.destroyObjectProperties,L=c.format,y=c.pick,C=c.Series;c.StackItem=function(c,m,p,g,b){var a=c.chart.inverted;this.axis=c;this.isNegative=p;this.options=m=m||{};this.x=g;this.total=null;this.points={};this.stack=b;this.rightCliff=this.leftCliff=0;this.alignOptions={align:m.align||(a?p?"left":"right":
"center"),verticalAlign:m.verticalAlign||(a?"middle":p?"bottom":"top"),y:m.y,x:m.x};this.textAlign=m.textAlign||(a?p?"right":"left":"center")};c.StackItem.prototype={destroy:function(){u(this,this.axis)},render:function(c){var m=this.axis.chart,p=this.options,g=p.format;g=g?L(g,this,m.time):p.formatter.call(this);this.label?this.label.attr({text:g,visibility:"hidden"}):(this.label=m.renderer.label(g,null,null,p.shape,null,null,p.useHTML,!1,"stack-labels"),g={text:g,align:this.textAlign,rotation:p.rotation,
padding:y(p.padding,0),visibility:"hidden"},this.label.attr(g),m.styledMode||this.label.css(p.style),this.label.added||this.label.add(c));this.label.labelrank=m.plotHeight},setOffset:function(c,m,p,g,b){var a=this.axis,d=a.chart;g=a.translate(a.usePercentage?100:g?g:this.total,0,0,0,1);p=a.translate(p?p:0);p=A(g)&&Math.abs(g-p);c=y(b,d.xAxis[0].translate(this.x))+c;a=A(g)&&this.getStackBox(d,this,c,g,m,p,a);m=this.label;c=this.isNegative;b="justify"===y(this.options.overflow,"justify");if(m&&a){p=
m.getBBox();var f=d.inverted?c?p.width:0:p.width/2,e=d.inverted?p.height/2:c?-4:p.height+4;this.alignOptions.x=y(this.options.x,0);m.align(this.alignOptions,null,a);g=m.alignAttr;m.show();g.y-=e;b&&(g.x-=f,C.prototype.justifyDataLabel.call(this.axis,m,this.alignOptions,g,p,a),g.x+=f);g.x=m.alignAttr.x;m.attr({x:g.x,y:g.y});y(!b&&this.options.crop,!0)&&((d=d.isInsidePlot(m.x+(d.inverted?0:-p.width/2),m.y)&&d.isInsidePlot(m.x+(d.inverted?c?-p.width:p.width:p.width/2),m.y+p.height))||m.hide())}},getStackBox:function(c,
m,p,g,b,a,d){var f=m.axis.reversed,e=c.inverted;c=d.height+d.pos-(e?c.plotLeft:c.plotTop);m=m.isNegative&&!f||!m.isNegative&&f;return{x:e?m?g:g-a:p,y:e?c-p-b:m?c-g-a:c-g,width:e?a:b,height:e?b:a}}};F.prototype.getStacks=function(){var c=this,m=c.inverted;c.yAxis.forEach(function(c){c.stacks&&c.hasVisibleSeries&&(c.oldStacks=c.stacks)});c.series.forEach(function(p){var g=p.xAxis&&p.xAxis.options||{};!p.options.stacking||!0!==p.visible&&!1!==c.options.chart.ignoreHiddenSeries||(p.stackKey=[p.type,y(p.options.stack,
""),m?g.top:g.left,m?g.height:g.width].join())})};n.prototype.buildStacks=function(){var c=this.series,m=y(this.options.reversedStacks,!0),p=c.length,g;if(!this.isXAxis){this.usePercentage=!1;for(g=p;g--;)c[m?g:p-g-1].setStackedPoints();for(g=0;g<p;g++)c[g].modifyStacks()}};n.prototype.renderStackTotals=function(){var c=this.chart,m=c.renderer,p=this.stacks,g=this.stackTotalGroup;g||(this.stackTotalGroup=g=m.g("stack-labels").attr({visibility:"visible",zIndex:6}).add());g.translate(c.plotLeft,c.plotTop);
D(p,function(b){D(b,function(a){a.render(g)})})};n.prototype.resetStacks=function(){var c=this,m=c.stacks;c.isXAxis||D(m,function(m){D(m,function(g,b){g.touched<c.stacksTouched?(g.destroy(),delete m[b]):(g.total=null,g.cumulative=null)})})};n.prototype.cleanStacks=function(){if(!this.isXAxis){if(this.oldStacks)var c=this.stacks=this.oldStacks;D(c,function(c){D(c,function(c){c.cumulative=c.total})})}};C.prototype.setStackedPoints=function(){if(this.options.stacking&&(!0===this.visible||!1===this.chart.options.chart.ignoreHiddenSeries)){var n=
this.processedXData,m=this.processedYData,p=[],g=m.length,b=this.options,a=b.threshold,d=y(b.startFromThreshold&&a,0),f=b.stack;b=b.stacking;var e=this.stackKey,h="-"+e,r=this.negStacks,u=this.yAxis,q=u.stacks,v=u.oldStacks,k,t;u.stacksTouched+=1;for(t=0;t<g;t++){var B=n[t];var I=m[t];var w=this.getStackIndicator(w,B,this.index);var l=w.key;var J=(k=r&&I<(d?0:a))?h:e;q[J]||(q[J]={});q[J][B]||(v[J]&&v[J][B]?(q[J][B]=v[J][B],q[J][B].total=null):q[J][B]=new c.StackItem(u,u.options.stackLabels,k,B,f));
J=q[J][B];null!==I?(J.points[l]=J.points[this.index]=[y(J.cumulative,d)],A(J.cumulative)||(J.base=l),J.touched=u.stacksTouched,0<w.index&&!1===this.singleStacks&&(J.points[l][0]=J.points[this.index+","+B+",0"][0])):J.points[l]=J.points[this.index]=null;"percent"===b?(k=k?e:h,r&&q[k]&&q[k][B]?(k=q[k][B],J.total=k.total=Math.max(k.total,J.total)+Math.abs(I)||0):J.total=z(J.total+(Math.abs(I)||0))):J.total=z(J.total+(I||0));J.cumulative=y(J.cumulative,d)+(I||0);null!==I&&(J.points[l].push(J.cumulative),
p[t]=J.cumulative)}"percent"===b&&(u.usePercentage=!0);this.stackedYData=p;u.oldStacks={}}};C.prototype.modifyStacks=function(){var c=this,m=c.stackKey,p=c.yAxis.stacks,g=c.processedXData,b,a=c.options.stacking;c[a+"Stacker"]&&[m,"-"+m].forEach(function(d){for(var f=g.length,e,h;f--;)if(e=g[f],b=c.getStackIndicator(b,e,c.index,d),h=(e=p[d]&&p[d][e])&&e.points[b.key])c[a+"Stacker"](h,e,f)})};C.prototype.percentStacker=function(c,m,p){m=m.total?100/m.total:0;c[0]=z(c[0]*m);c[1]=z(c[1]*m);this.stackedYData[p]=
c[1]};C.prototype.getStackIndicator=function(c,m,p,g){!A(c)||c.x!==m||g&&c.key!==g?c={x:m,index:0,key:g}:c.index++;c.key=[p,m,c.index].join();return c}});N(H,"parts/Dynamics.js",[H["parts/Globals.js"],H["parts/Utilities.js"]],function(c,n){var A=n.defined,D=n.erase,F=n.isArray,z=n.isNumber,u=n.isObject,L=n.isString,y=n.objectEach,C=n.splat,x=c.addEvent,m=c.animate,p=c.Axis;n=c.Chart;var g=c.createElement,b=c.css,a=c.extend,d=c.fireEvent,f=c.merge,e=c.pick,h=c.Point,r=c.Series,E=c.seriesTypes,q=c.setAnimation;
c.cleanRecursively=function(a,b){var d={};y(a,function(f,e){if(u(a[e],!0)&&!a.nodeType&&b[e])f=c.cleanRecursively(a[e],b[e]),Object.keys(f).length&&(d[e]=f);else if(u(a[e])||a[e]!==b[e])d[e]=a[e]});return d};a(n.prototype,{addSeries:function(a,b,c){var f,k=this;a&&(b=e(b,!0),d(k,"addSeries",{options:a},function(){f=k.initSeries(a);k.isDirtyLegend=!0;k.linkSeries();d(k,"afterAddSeries",{series:f});b&&k.redraw(c)}));return f},addAxis:function(a,b,d,c){return this.createAxis(b?"xAxis":"yAxis",{axis:a,
redraw:d,animation:c})},addColorAxis:function(a,b,d){return this.createAxis("colorAxis",{axis:a,redraw:b,animation:d})},createAxis:function(a,b){var d=this.options,k="colorAxis"===a,h=b.redraw,g=b.animation;b=f(b.axis,{index:this[a].length,isX:"xAxis"===a});var l=k?new c.ColorAxis(this,b):new p(this,b);d[a]=C(d[a]||{});d[a].push(b);k&&(this.isDirtyLegend=!0);e(h,!0)&&this.redraw(g);return l},showLoading:function(d){var c=this,f=c.options,h=c.loadingDiv,q=f.loading,v=function(){h&&b(h,{left:c.plotLeft+
"px",top:c.plotTop+"px",width:c.plotWidth+"px",height:c.plotHeight+"px"})};h||(c.loadingDiv=h=g("div",{className:"highcharts-loading highcharts-loading-hidden"},null,c.container),c.loadingSpan=g("span",{className:"highcharts-loading-inner"},null,h),x(c,"redraw",v));h.className="highcharts-loading";c.loadingSpan.innerHTML=e(d,f.lang.loading,"");c.styledMode||(b(h,a(q.style,{zIndex:10})),b(c.loadingSpan,q.labelStyle),c.loadingShown||(b(h,{opacity:0,display:""}),m(h,{opacity:q.style.opacity||.5},{duration:q.showDuration||
0})));c.loadingShown=!0;v()},hideLoading:function(){var a=this.options,d=this.loadingDiv;d&&(d.className="highcharts-loading highcharts-loading-hidden",this.styledMode||m(d,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){b(d,{display:"none"})}}));this.loadingShown=!1},propsRequireDirtyBox:"backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),propsRequireReflow:"margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(" "),
propsRequireUpdateSeries:"chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" "),collectionsWithUpdate:"xAxis yAxis zAxis series colorAxis pane".split(" "),update:function(a,b,h,g){var k=this,q={credits:"addCredits",title:"setTitle",subtitle:"setSubtitle",caption:"setCaption"},l,m,t,v=a.isResponsiveOptions,r=[];d(k,"update",{options:a});v||k.setResponsive(!1,!0);a=c.cleanRecursively(a,k.options);f(!0,k.userOptions,a);if(l=a.chart){f(!0,k.options.chart,
l);"className"in l&&k.setClassName(l.className);"reflow"in l&&k.setReflow(l.reflow);if("inverted"in l||"polar"in l||"type"in l){k.propFromSeries();var p=!0}"alignTicks"in l&&(p=!0);y(l,function(a,b){-1!==k.propsRequireUpdateSeries.indexOf("chart."+b)&&(m=!0);-1!==k.propsRequireDirtyBox.indexOf(b)&&(k.isDirtyBox=!0);v||-1===k.propsRequireReflow.indexOf(b)||(t=!0)});!k.styledMode&&"style"in l&&k.renderer.setStyle(l.style)}!k.styledMode&&a.colors&&(this.options.colors=a.colors);a.plotOptions&&f(!0,this.options.plotOptions,
a.plotOptions);a.time&&this.time===c.time&&(this.time=new c.Time(a.time));y(a,function(a,b){if(k[b]&&"function"===typeof k[b].update)k[b].update(a,!1);else if("function"===typeof k[q[b]])k[q[b]](a);"chart"!==b&&-1!==k.propsRequireUpdateSeries.indexOf(b)&&(m=!0)});this.collectionsWithUpdate.forEach(function(b){if(a[b]){if("series"===b){var d=[];k[b].forEach(function(a,b){a.options.isInternal||d.push(e(a.options.index,b))})}C(a[b]).forEach(function(a,c){(c=A(a.id)&&k.get(a.id)||k[b][d?d[c]:c])&&c.coll===
b&&(c.update(a,!1),h&&(c.touched=!0));!c&&h&&k.collectionsWithInit[b]&&(k.collectionsWithInit[b][0].apply(k,[a].concat(k.collectionsWithInit[b][1]||[]).concat([!1])).touched=!0)});h&&k[b].forEach(function(a){a.touched||a.options.isInternal?delete a.touched:r.push(a)})}});r.forEach(function(a){a.remove&&a.remove(!1)});p&&k.axes.forEach(function(a){a.update({},!1)});m&&k.series.forEach(function(a){a.update({},!1)});a.loading&&f(!0,k.options.loading,a.loading);p=l&&l.width;l=l&&l.height;L(l)&&(l=c.relativeLength(l,
p||k.chartWidth));t||z(p)&&p!==k.chartWidth||z(l)&&l!==k.chartHeight?k.setSize(p,l,g):e(b,!0)&&k.redraw(g);d(k,"afterUpdate",{options:a,redraw:b,animation:g})},setSubtitle:function(a,b){this.applyDescription("subtitle",a);this.layOutTitles(b)},setCaption:function(a,b){this.applyDescription("caption",a);this.layOutTitles(b)}});n.prototype.collectionsWithInit={xAxis:[n.prototype.addAxis,[!0]],yAxis:[n.prototype.addAxis,[!1]],colorAxis:[n.prototype.addColorAxis,[!1]],series:[n.prototype.addSeries]};
a(h.prototype,{update:function(a,b,d,c){function f(){k.applyOptions(a);null===k.y&&h&&(k.graphic=h.destroy());u(a,!0)&&(h&&h.element&&a&&a.marker&&void 0!==a.marker.symbol&&(k.graphic=h.destroy()),a&&a.dataLabels&&k.dataLabel&&(k.dataLabel=k.dataLabel.destroy()),k.connector&&(k.connector=k.connector.destroy()));g=k.index;l.updateParallelArrays(k,g);m.data[g]=u(m.data[g],!0)||u(a,!0)?k.options:e(a,m.data[g]);l.isDirty=l.isDirtyData=!0;!l.fixedBox&&l.hasCartesianSeries&&(q.isDirtyBox=!0);"point"===
m.legendType&&(q.isDirtyLegend=!0);b&&q.redraw(d)}var k=this,l=k.series,h=k.graphic,g,q=l.chart,m=l.options;b=e(b,!0);!1===c?f():k.firePointEvent("update",{options:a},f)},remove:function(a,b){this.series.removePoint(this.series.data.indexOf(this),a,b)}});a(r.prototype,{addPoint:function(a,b,c,f,h){var k=this.options,l=this.data,g=this.chart,q=this.xAxis;q=q&&q.hasNames&&q.names;var m=k.data,t=this.xData,v;b=e(b,!0);var r={series:this};this.pointClass.prototype.applyOptions.apply(r,[a]);var p=r.x;
var n=t.length;if(this.requireSorting&&p<t[n-1])for(v=!0;n&&t[n-1]>p;)n--;this.updateParallelArrays(r,"splice",n,0,0);this.updateParallelArrays(r,n);q&&r.name&&(q[p]=r.name);m.splice(n,0,a);v&&(this.data.splice(n,0,null),this.processData());"point"===k.legendType&&this.generatePoints();c&&(l[0]&&l[0].remove?l[0].remove(!1):(l.shift(),this.updateParallelArrays(r,"shift"),m.shift()));!1!==h&&d(this,"addPoint",{point:r});this.isDirtyData=this.isDirty=!0;b&&g.redraw(f)},removePoint:function(a,b,d){var c=
this,f=c.data,k=f[a],l=c.points,h=c.chart,g=function(){l&&l.length===f.length&&l.splice(a,1);f.splice(a,1);c.options.data.splice(a,1);c.updateParallelArrays(k||{series:c},"splice",a,1);k&&k.destroy();c.isDirty=!0;c.isDirtyData=!0;b&&h.redraw()};q(d,h);b=e(b,!0);k?k.firePointEvent("remove",null,g):g()},remove:function(a,b,c,f){function k(){h.destroy(f);h.remove=null;l.isDirtyLegend=l.isDirtyBox=!0;l.linkSeries();e(a,!0)&&l.redraw(b)}var h=this,l=h.chart;!1!==c?d(h,"remove",null,k):k()},update:function(b,
k){b=c.cleanRecursively(b,this.userOptions);d(this,"update",{options:b});var h=this,g=h.chart,q=h.userOptions,m=h.initialType||h.type,l=b.type||q.type||g.options.chart.type,r=!(this.hasDerivedData||b.dataGrouping||l&&l!==this.type||void 0!==b.pointStart||b.pointInterval||b.pointIntervalUnit||b.keys),p=E[m].prototype,v,n=["group","markerGroup","dataLabelsGroup","transformGroup"],u=["eventOptions","navigatorSeries","baseSeries"],x=h.finishedAnimating&&{animation:!1},y={};r&&(u.push("data","isDirtyData",
"points","processedXData","processedYData","xIncrement","_hasPointMarkers","_hasPointLabels","mapMap","mapData","minY","maxY","minX","maxX"),!1!==b.visible&&u.push("area","graph"),h.parallelArrays.forEach(function(a){u.push(a+"Data")}),b.data&&this.setData(b.data,!1));b=f(q,x,{index:void 0===q.index?h.index:q.index,pointStart:e(q.pointStart,h.xData[0])},!r&&{data:h.options.data},b);r&&b.data&&(b.data=h.options.data);u=n.concat(u);u.forEach(function(a){u[a]=h[a];delete h[a]});h.remove(!1,null,!1,!0);
for(v in p)h[v]=void 0;E[l||m]?a(h,E[l||m].prototype):c.error(17,!0,g);u.forEach(function(a){h[a]=u[a]});h.init(g,b);if(r&&this.points){var z=h.options;!1===z.visible?(y.graphic=1,y.dataLabel=1):h._hasPointLabels||(l=z.marker,p=z.dataLabels,l&&(!1===l.enabled||"symbol"in l)&&(y.graphic=1),p&&!1===p.enabled&&(y.dataLabel=1));this.points.forEach(function(a){a&&a.series&&(a.resolveColor(),Object.keys(y).length&&a.destroyElements(y),!1===z.showInLegend&&a.legendItem&&g.legend.destroyItem(a))},this)}b.zIndex!==
q.zIndex&&n.forEach(function(a){h[a]&&h[a].attr({zIndex:b.zIndex})});h.initialType=m;g.linkSeries();d(this,"afterUpdate");e(k,!0)&&g.redraw(r?void 0:!1)},setName:function(a){this.name=this.options.name=this.userOptions.name=a;this.chart.isDirtyLegend=!0}});a(p.prototype,{update:function(b,d){var c=this.chart,k=b&&b.events||{};b=f(this.userOptions,b);c.options[this.coll].indexOf&&(c.options[this.coll][c.options[this.coll].indexOf(this.userOptions)]=b);y(c.options[this.coll].events,function(a,b){"undefined"===
typeof k[b]&&(k[b]=void 0)});this.destroy(!0);this.init(c,a(b,{events:k}));c.isDirtyBox=!0;e(d,!0)&&c.redraw()},remove:function(a){for(var b=this.chart,d=this.coll,c=this.series,f=c.length;f--;)c[f]&&c[f].remove(!1);D(b.axes,this);D(b[d],this);F(b.options[d])?b.options[d].splice(this.options.index,1):delete b.options[d];b[d].forEach(function(a,b){a.options.index=a.userOptions.index=b});this.destroy();b.isDirtyBox=!0;e(a,!0)&&b.redraw()},setTitle:function(a,b){this.update({title:a},b)},setCategories:function(a,
b){this.update({categories:a},b)}})});N(H,"parts/AreaSeries.js",[H["parts/Globals.js"],H["parts/Utilities.js"]],function(c,n){var A=n.objectEach,D=c.color,F=c.pick,z=c.Series;n=c.seriesType;n("area","line",{softThreshold:!1,threshold:0},{singleStacks:!1,getStackPoints:function(c){var n=[],u=[],z=this.xAxis,x=this.yAxis,m=x.stacks[this.stackKey],p={},g=this.index,b=x.series,a=b.length,d=F(x.options.reversedStacks,!0)?1:-1,f;c=c||this.points;if(this.options.stacking){for(f=0;f<c.length;f++)c[f].leftNull=
c[f].rightNull=null,p[c[f].x]=c[f];A(m,function(a,b){null!==a.total&&u.push(b)});u.sort(function(a,b){return a-b});var e=b.map(function(a){return a.visible});u.forEach(function(b,c){var h=0,q,r;if(p[b]&&!p[b].isNull)n.push(p[b]),[-1,1].forEach(function(k){var h=1===k?"rightNull":"leftNull",v=0,n=m[u[c+k]];if(n)for(f=g;0<=f&&f<a;)q=n.points[f],q||(f===g?p[b][h]=!0:e[f]&&(r=m[b].points[f])&&(v-=r[1]-r[0])),f+=d;p[b][1===k?"rightCliff":"leftCliff"]=v});else{for(f=g;0<=f&&f<a;){if(q=m[b].points[f]){h=
q[1];break}f+=d}h=x.translate(h,0,1,0,1);n.push({isNull:!0,plotX:z.translate(b,0,0,0,1),x:b,plotY:h,yBottom:h})}})}return n},getGraphPath:function(n){var u=z.prototype.getGraphPath,y=this.options,A=y.stacking,x=this.yAxis,m,p=[],g=[],b=this.index,a=x.stacks[this.stackKey],d=y.threshold,f=Math.round(x.getThreshold(y.threshold));y=c.pick(y.connectNulls,"percent"===A);var e=function(c,e,k){var h=n[c];c=A&&a[h.x].points[b];var q=h[k+"Null"]||0;k=h[k+"Cliff"]||0;h=!0;if(k||q){var m=(q?c[0]:c[1])+k;var v=
c[0]+k;h=!!q}else!A&&n[e]&&n[e].isNull&&(m=v=d);void 0!==m&&(g.push({plotX:r,plotY:null===m?f:x.getThreshold(m),isNull:h,isCliff:!0}),p.push({plotX:r,plotY:null===v?f:x.getThreshold(v),doCurve:!1}))};n=n||this.points;A&&(n=this.getStackPoints(n));for(m=0;m<n.length;m++){var h=n[m].isNull;var r=F(n[m].rectPlotX,n[m].plotX);var E=F(n[m].yBottom,f);if(!h||y)y||e(m,m-1,"left"),h&&!A&&y||(g.push(n[m]),p.push({x:m,plotX:r,plotY:E})),y||e(m,m+1,"right")}m=u.call(this,g,!0,!0);p.reversed=!0;h=u.call(this,
p,!0,!0);h.length&&(h[0]="L");h=m.concat(h);u=u.call(this,g,!1,y);h.xMap=m.xMap;this.areaPath=h;return u},drawGraph:function(){this.areaPath=[];z.prototype.drawGraph.apply(this);var c=this,n=this.areaPath,y=this.options,A=[["area","highcharts-area",this.color,y.fillColor]];this.zones.forEach(function(n,m){A.push(["zone-area-"+m,"highcharts-area highcharts-zone-area-"+m+" "+n.className,n.color||c.color,n.fillColor||y.fillColor])});A.forEach(function(u){var m=u[0],p=c[m],g=p?"animate":"attr",b={};p?
(p.endX=c.preventGraphAnimation?null:n.xMap,p.animate({d:n})):(b.zIndex=0,p=c[m]=c.chart.renderer.path(n).addClass(u[1]).add(c.group),p.isArea=!0);c.chart.styledMode||(b.fill=F(u[3],D(u[2]).setOpacity(F(y.fillOpacity,.75)).get()));p[g](b);p.startX=n.xMap;p.shiftUnit=y.step?2:1})},drawLegendSymbol:c.LegendSymbolMixin.drawRectangle});""});N(H,"parts/SplineSeries.js",[H["parts/Globals.js"]],function(c){var n=c.pick;c=c.seriesType;c("spline","line",{},{getPointSpline:function(c,D,F){var z=D.plotX,u=D.plotY,
A=c[F-1];F=c[F+1];if(A&&!A.isNull&&!1!==A.doCurve&&!D.isCliff&&F&&!F.isNull&&!1!==F.doCurve&&!D.isCliff){c=A.plotY;var y=F.plotX;F=F.plotY;var C=0;var x=(1.5*z+A.plotX)/2.5;var m=(1.5*u+c)/2.5;y=(1.5*z+y)/2.5;var p=(1.5*u+F)/2.5;y!==x&&(C=(p-m)*(y-z)/(y-x)+u-p);m+=C;p+=C;m>c&&m>u?(m=Math.max(c,u),p=2*u-m):m<c&&m<u&&(m=Math.min(c,u),p=2*u-m);p>F&&p>u?(p=Math.max(F,u),m=2*u-p):p<F&&p<u&&(p=Math.min(F,u),m=2*u-p);D.rightContX=y;D.rightContY=p}D=["C",n(A.rightContX,A.plotX),n(A.rightContY,A.plotY),n(x,
z),n(m,u),z,u];A.rightContX=A.rightContY=null;return D}});""});N(H,"parts/AreaSplineSeries.js",[H["parts/Globals.js"]],function(c){var n=c.seriesTypes.area.prototype,A=c.seriesType;A("areaspline","spline",c.defaultPlotOptions.area,{getStackPoints:n.getStackPoints,getGraphPath:n.getGraphPath,drawGraph:n.drawGraph,drawLegendSymbol:c.LegendSymbolMixin.drawRectangle});""});N(H,"parts/ColumnSeries.js",[H["parts/Globals.js"],H["parts/Utilities.js"]],function(c,n){var A=n.defined,D=n.isNumber,F=c.animObject,
z=c.color,u=c.extend,L=c.merge,y=c.pick,C=c.Series;n=c.seriesType;var x=c.svg;n("column","line",{borderRadius:0,crisp:!0,groupPadding:.2,marker:null,pointPadding:.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{halo:!1,brightness:.1},select:{color:"#cccccc",borderColor:"#000000"}},dataLabels:{align:null,verticalAlign:null,y:null},softThreshold:!1,startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0,borderColor:"#ffffff"},{cropShoulder:0,directTouch:!0,trackerGroups:["group",
"dataLabelsGroup"],negStacks:!0,init:function(){C.prototype.init.apply(this,arguments);var c=this,p=c.chart;p.hasRendered&&p.series.forEach(function(g){g.type===c.type&&(g.isDirty=!0)})},getColumnMetrics:function(){var c=this,p=c.options,g=c.xAxis,b=c.yAxis,a=g.options.reversedStacks;a=g.reversed&&!a||!g.reversed&&a;var d,f={},e=0;!1===p.grouping?e=1:c.chart.series.forEach(function(a){var h=a.yAxis,k=a.options;if(a.type===c.type&&(a.visible||!c.chart.options.chart.ignoreHiddenSeries)&&b.len===h.len&&
b.pos===h.pos){if(k.stacking){d=a.stackKey;void 0===f[d]&&(f[d]=e++);var g=f[d]}else!1!==k.grouping&&(g=e++);a.columnIndex=g}});var h=Math.min(Math.abs(g.transA)*(g.ordinalSlope||p.pointRange||g.closestPointRange||g.tickInterval||1),g.len),r=h*p.groupPadding,n=(h-2*r)/(e||1);p=Math.min(p.maxPointWidth||g.len,y(p.pointWidth,n*(1-2*p.pointPadding)));c.columnMetrics={width:p,offset:(n-p)/2+(r+((c.columnIndex||0)+(a?1:0))*n-h/2)*(a?-1:1)};return c.columnMetrics},crispCol:function(c,p,g,b){var a=this.chart,
d=this.borderWidth,f=-(d%2?.5:0);d=d%2?.5:1;a.inverted&&a.renderer.isVML&&(d+=1);this.options.crisp&&(g=Math.round(c+g)+f,c=Math.round(c)+f,g-=c);b=Math.round(p+b)+d;f=.5>=Math.abs(p)&&.5<b;p=Math.round(p)+d;b-=p;f&&b&&(--p,b+=1);return{x:c,y:p,width:g,height:b}},translate:function(){var c=this,p=c.chart,g=c.options,b=c.dense=2>c.closestPointRange*c.xAxis.transA;b=c.borderWidth=y(g.borderWidth,b?0:1);var a=c.yAxis,d=g.threshold,f=c.translatedThreshold=a.getThreshold(d),e=y(g.minPointLength,5),h=c.getColumnMetrics(),
r=h.width,n=c.barW=Math.max(r,1+2*b),q=c.pointXOffset=h.offset,v=c.dataMin,k=c.dataMax;p.inverted&&(f-=.5);g.pointPadding&&(n=Math.ceil(n));C.prototype.translate.apply(c);c.points.forEach(function(b){var h=y(b.yBottom,f),g=999+Math.abs(h),m=r;g=Math.min(Math.max(-g,b.plotY),a.len+g);var l=b.plotX+q,t=n,u=Math.min(g,h),x=Math.max(g,h)-u;if(e&&Math.abs(x)<e){x=e;var z=!a.reversed&&!b.negative||a.reversed&&b.negative;b.y===d&&c.dataMax<=d&&a.min<d&&v!==k&&(z=!z);u=Math.abs(u-f)>e?h-e:f-(z?e:0)}A(b.options.pointWidth)&&
(m=t=Math.ceil(b.options.pointWidth),l-=Math.round((m-r)/2));b.barX=l;b.pointWidth=m;b.tooltipPos=p.inverted?[a.len+a.pos-p.plotLeft-g,c.xAxis.len-l-t/2,x]:[l+t/2,g+a.pos-p.plotTop,x];b.shapeType=c.pointClass.prototype.shapeType||"rect";b.shapeArgs=c.crispCol.apply(c,b.isNull?[l,f,t,0]:[l,u,t,x])})},getSymbol:c.noop,drawLegendSymbol:c.LegendSymbolMixin.drawRectangle,drawGraph:function(){this.group[this.dense?"addClass":"removeClass"]("highcharts-dense-data")},pointAttribs:function(c,p){var g=this.options,
b=this.pointAttrToOptions||{};var a=b.stroke||"borderColor";var d=b["stroke-width"]||"borderWidth",f=c&&c.color||this.color,e=c&&c[a]||g[a]||this.color||f,h=c&&c[d]||g[d]||this[d]||0;b=c&&c.options.dashStyle||g.dashStyle;var m=y(g.opacity,1);if(c&&this.zones.length){var n=c.getZone();f=c.options.color||n&&(n.color||c.nonZonedColor)||this.color;n&&(e=n.borderColor||e,b=n.dashStyle||b,h=n.borderWidth||h)}p&&(c=L(g.states[p],c.options.states&&c.options.states[p]||{}),p=c.brightness,f=c.color||void 0!==
p&&z(f).brighten(c.brightness).get()||f,e=c[a]||e,h=c[d]||h,b=c.dashStyle||b,m=y(c.opacity,m));a={fill:f,stroke:e,"stroke-width":h,opacity:m};b&&(a.dashstyle=b);return a},drawPoints:function(){var c=this,p=this.chart,g=c.options,b=p.renderer,a=g.animationLimit||250,d;c.points.forEach(function(f){var e=f.graphic,h=e&&p.pointCount<a?"animate":"attr";if(D(f.plotY)&&null!==f.y){d=f.shapeArgs;e&&e.element.nodeName!==f.shapeType&&(e=e.destroy());if(e)e[h](L(d));else f.graphic=e=b[f.shapeType](d).add(f.group||
c.group);if(g.borderRadius)e[h]({r:g.borderRadius});p.styledMode||e[h](c.pointAttribs(f,f.selected&&"select")).shadow(!1!==f.allowShadow&&g.shadow,null,g.stacking&&!g.borderRadius);e.addClass(f.getClassName(),!0)}else e&&(f.graphic=e.destroy())})},animate:function(c){var m=this,g=this.yAxis,b=m.options,a=this.chart.inverted,d={},f=a?"translateX":"translateY";if(x)if(c)d.scaleY=.001,c=Math.min(g.pos+g.len,Math.max(g.pos,g.toPixels(b.threshold))),a?d.translateX=c-g.len:d.translateY=c,m.clipBox&&m.setClip(),
m.group.attr(d);else{var e=m.group.attr(f);m.group.animate({scaleY:1},u(F(m.options.animation),{step:function(a,b){d[f]=e+b.pos*(g.pos-e);m.group.attr(d)}}));m.animate=null}},remove:function(){var c=this,p=c.chart;p.hasRendered&&p.series.forEach(function(g){g.type===c.type&&(g.isDirty=!0)});C.prototype.remove.apply(c,arguments)}});""});N(H,"parts/BarSeries.js",[H["parts/Globals.js"]],function(c){c=c.seriesType;c("bar","column",null,{inverted:!0});""});N(H,"parts/ScatterSeries.js",[H["parts/Globals.js"]],
function(c){var n=c.Series,A=c.seriesType;A("scatter","line",{lineWidth:0,findNearestPointBy:"xy",jitter:{x:0,y:0},marker:{enabled:!0},tooltip:{headerFormat:'<span style="color:{point.color}">\u25cf</span> <span style="font-size: 10px"> {series.name}</span><br/>',pointFormat:"x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"}},{sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,drawGraph:function(){this.options.lineWidth&&
n.prototype.drawGraph.call(this)},applyJitter:function(){var c=this,n=this.options.jitter,z=this.points.length;n&&this.points.forEach(function(u,A){["x","y"].forEach(function(y,C){var x="plot"+y.toUpperCase();if(n[y]&&!u.isNull){var m=c[y+"Axis"];var p=n[y]*m.transA;if(m&&!m.isLog){var g=Math.max(0,u[x]-p);m=Math.min(m.len,u[x]+p);C=1E4*Math.sin(A+C*z);u[x]=g+(m-g)*(C-Math.floor(C));"x"===y&&(u.clientX=u.plotX)}}})})}});c.addEvent(n,"afterTranslate",function(){this.applyJitter&&this.applyJitter()});
""});N(H,"mixins/centered-series.js",[H["parts/Globals.js"],H["parts/Utilities.js"]],function(c,n){var A=n.isNumber,D=c.deg2rad,F=c.pick,z=c.relativeLength;c.CenteredSeriesMixin={getCenter:function(){var c=this.options,n=this.chart,y=2*(c.slicedOffset||0),A=n.plotWidth-2*y;n=n.plotHeight-2*y;var x=c.center;x=[F(x[0],"50%"),F(x[1],"50%"),c.size||"100%",c.innerSize||0];var m=Math.min(A,n),p;for(p=0;4>p;++p){var g=x[p];c=2>p||2===p&&/%$/.test(g);x[p]=z(g,[A,n,m,x[2]][p])+(c?y:0)}x[3]>x[2]&&(x[3]=x[2]);
return x},getStartAndEndRadians:function(c,n){c=A(c)?c:0;n=A(n)&&n>c&&360>n-c?n:c+360;return{start:D*(c+-90),end:D*(n+-90)}}}});N(H,"parts/PieSeries.js",[H["parts/Globals.js"],H["parts/Utilities.js"]],function(c,n){var A=n.defined,D=n.isNumber,F=c.addEvent;n=c.CenteredSeriesMixin;var z=n.getStartAndEndRadians,u=c.merge,H=c.noop,y=c.pick,C=c.Point,x=c.Series,m=c.seriesType,p=c.fireEvent,g=c.setAnimation;m("pie","line",{center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{allowOverlap:!0,connectorPadding:5,
distance:30,enabled:!0,formatter:function(){return this.point.isNull?void 0:this.point.name},softConnector:!0,x:0,connectorShape:"fixedOffset",crookDistance:"70%"},fillColor:void 0,ignoreHiddenPoint:!0,inactiveOtherPoints:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,stickyTracking:!1,tooltip:{followPointer:!0},borderColor:"#ffffff",borderWidth:1,states:{hover:{brightness:.1}}},{isCartesian:!1,requireSorting:!1,directTouch:!0,noSharedTooltip:!0,trackerGroups:["group",
"dataLabelsGroup"],axisTypes:[],pointAttribs:c.seriesTypes.column.prototype.pointAttribs,animate:function(b){var a=this,d=a.points,c=a.startAngleRad;b||(d.forEach(function(b){var d=b.graphic,f=b.shapeArgs;d&&(d.attr({r:b.startR||a.center[3]/2,start:c,end:c}),d.animate({r:f.r,start:f.start,end:f.end},a.options.animation))}),a.animate=null)},hasData:function(){return!!this.processedXData.length},updateTotals:function(){var b,a=0,d=this.points,c=d.length,e=this.options.ignoreHiddenPoint;for(b=0;b<c;b++){var h=
d[b];a+=e&&!h.visible?0:h.isNull?0:h.y}this.total=a;for(b=0;b<c;b++)h=d[b],h.percentage=0<a&&(h.visible||!e)?h.y/a*100:0,h.total=a},generatePoints:function(){x.prototype.generatePoints.call(this);this.updateTotals()},getX:function(b,a,d){var c=this.center,e=this.radii?this.radii[d.index]:c[2]/2;return c[0]+(a?-1:1)*Math.cos(Math.asin(Math.max(Math.min((b-c[1])/(e+d.labelDistance),1),-1)))*(e+d.labelDistance)+(0<d.labelDistance?(a?-1:1)*this.options.dataLabels.padding:0)},translate:function(b){this.generatePoints();
var a=0,d=this.options,f=d.slicedOffset,e=f+(d.borderWidth||0),h=z(d.startAngle,d.endAngle),g=this.startAngleRad=h.start;h=(this.endAngleRad=h.end)-g;var m=this.points,q=d.dataLabels.distance;d=d.ignoreHiddenPoint;var v,k=m.length;b||(this.center=b=this.getCenter());for(v=0;v<k;v++){var t=m[v];var n=g+a*h;if(!d||t.visible)a+=t.percentage/100;var u=g+a*h;t.shapeType="arc";t.shapeArgs={x:b[0],y:b[1],r:b[2]/2,innerR:b[3]/2,start:Math.round(1E3*n)/1E3,end:Math.round(1E3*u)/1E3};t.labelDistance=y(t.options.dataLabels&&
t.options.dataLabels.distance,q);t.labelDistance=c.relativeLength(t.labelDistance,t.shapeArgs.r);this.maxLabelDistance=Math.max(this.maxLabelDistance||0,t.labelDistance);u=(u+n)/2;u>1.5*Math.PI?u-=2*Math.PI:u<-Math.PI/2&&(u+=2*Math.PI);t.slicedTranslation={translateX:Math.round(Math.cos(u)*f),translateY:Math.round(Math.sin(u)*f)};var w=Math.cos(u)*b[2]/2;var l=Math.sin(u)*b[2]/2;t.tooltipPos=[b[0]+.7*w,b[1]+.7*l];t.half=u<-Math.PI/2||u>Math.PI/2?1:0;t.angle=u;n=Math.min(e,t.labelDistance/5);t.labelPosition=
{natural:{x:b[0]+w+Math.cos(u)*t.labelDistance,y:b[1]+l+Math.sin(u)*t.labelDistance},"final":{},alignment:0>t.labelDistance?"center":t.half?"right":"left",connectorPosition:{breakAt:{x:b[0]+w+Math.cos(u)*n,y:b[1]+l+Math.sin(u)*n},touchingSliceAt:{x:b[0]+w,y:b[1]+l}}}}p(this,"afterTranslate")},drawEmpty:function(){var b=this.options;if(0===this.total){var a=this.center[0];var d=this.center[1];this.graph||(this.graph=this.chart.renderer.circle(a,d,0).addClass("highcharts-graph").add(this.group));this.graph.animate({"stroke-width":b.borderWidth,
cx:a,cy:d,r:this.center[2]/2,fill:b.fillColor||"none",stroke:b.color||"#cccccc"})}else this.graph&&(this.graph=this.graph.destroy())},redrawPoints:function(){var b=this,a=b.chart,d=a.renderer,c,e,h,g,m=b.options.shadow;this.drawEmpty();!m||b.shadowGroup||a.styledMode||(b.shadowGroup=d.g("shadow").attr({zIndex:-1}).add(b.group));b.points.forEach(function(f){var q={};e=f.graphic;if(!f.isNull&&e){g=f.shapeArgs;c=f.getTranslate();if(!a.styledMode){var k=f.shadowGroup;m&&!k&&(k=f.shadowGroup=d.g("shadow").add(b.shadowGroup));
k&&k.attr(c);h=b.pointAttribs(f,f.selected&&"select")}f.delayedRendering?(e.setRadialReference(b.center).attr(g).attr(c),a.styledMode||e.attr(h).attr({"stroke-linejoin":"round"}).shadow(m,k),f.delayedRendering=!1):(e.setRadialReference(b.center),a.styledMode||u(!0,q,h),u(!0,q,g,c),e.animate(q));e.attr({visibility:f.visible?"inherit":"hidden"});e.addClass(f.getClassName())}else e&&(f.graphic=e.destroy())})},drawPoints:function(){var b=this.chart.renderer;this.points.forEach(function(a){a.graphic||
(a.graphic=b[a.shapeType](a.shapeArgs).add(a.series.group),a.delayedRendering=!0)})},searchPoint:H,sortByAngle:function(b,a){b.sort(function(b,c){return void 0!==b.angle&&(c.angle-b.angle)*a})},drawLegendSymbol:c.LegendSymbolMixin.drawRectangle,getCenter:n.getCenter,getSymbol:H,drawGraph:null},{init:function(){C.prototype.init.apply(this,arguments);var b=this;b.name=y(b.name,"Slice");var a=function(a){b.slice("select"===a.type)};F(b,"select",a);F(b,"unselect",a);return b},isValid:function(){return D(this.y)&&
0<=this.y},setVisible:function(b,a){var c=this,f=c.series,e=f.chart,h=f.options.ignoreHiddenPoint;a=y(a,h);b!==c.visible&&(c.visible=c.options.visible=b=void 0===b?!c.visible:b,f.options.data[f.data.indexOf(c)]=c.options,["graphic","dataLabel","connector","shadowGroup"].forEach(function(a){if(c[a])c[a][b?"show":"hide"](!0)}),c.legendItem&&e.legend.colorizeItem(c,b),b||"hover"!==c.state||c.setState(""),h&&(f.isDirty=!0),a&&e.redraw())},slice:function(b,a,c){var d=this.series;g(c,d.chart);y(a,!0);this.sliced=
this.options.sliced=A(b)?b:!this.sliced;d.options.data[d.data.indexOf(this)]=this.options;this.graphic.animate(this.getTranslate());this.shadowGroup&&this.shadowGroup.animate(this.getTranslate())},getTranslate:function(){return this.sliced?this.slicedTranslation:{translateX:0,translateY:0}},haloPath:function(b){var a=this.shapeArgs;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(a.x,a.y,a.r+b,a.r+b,{innerR:a.r-1,start:a.start,end:a.end})},connectorShapes:{fixedOffset:function(b,
a,c){var d=a.breakAt;a=a.touchingSliceAt;return["M",b.x,b.y].concat(c.softConnector?["C",b.x+("left"===b.alignment?-5:5),b.y,2*d.x-a.x,2*d.y-a.y,d.x,d.y]:["L",d.x,d.y]).concat(["L",a.x,a.y])},straight:function(b,a){a=a.touchingSliceAt;return["M",b.x,b.y,"L",a.x,a.y]},crookedLine:function(b,a,d){a=a.touchingSliceAt;var f=this.series,e=f.center[0],h=f.chart.plotWidth,g=f.chart.plotLeft;f=b.alignment;var m=this.shapeArgs.r;d=c.relativeLength(d.crookDistance,1);d="left"===f?e+m+(h+g-e-m)*(1-d):g+(e-m)*
d;e=["L",d,b.y];if("left"===f?d>b.x||d<a.x:d<b.x||d>a.x)e=[];return["M",b.x,b.y].concat(e).concat(["L",a.x,a.y])}},getConnectorPath:function(){var b=this.labelPosition,a=this.series.options.dataLabels,c=a.connectorShape,f=this.connectorShapes;f[c]&&(c=f[c]);return c.call(this,{x:b.final.x,y:b.final.y,alignment:b.alignment},b.connectorPosition,a)}});""});N(H,"parts/DataLabels.js",[H["parts/Globals.js"],H["parts/Utilities.js"]],function(c,n){var A=n.defined,D=n.isArray,F=n.objectEach,z=n.splat,u=c.arrayMax,
H=c.extend,y=c.format,C=c.merge;n=c.noop;var x=c.pick,m=c.relativeLength,p=c.Series,g=c.seriesTypes,b=c.stableSort;c.distribute=function(a,d,f){function e(a,b){return a.target-b.target}var h,g=!0,m=a,q=[];var p=0;var k=m.reducedLen||d;for(h=a.length;h--;)p+=a[h].size;if(p>k){b(a,function(a,b){return(b.rank||0)-(a.rank||0)});for(p=h=0;p<=k;)p+=a[h].size,h++;q=a.splice(h-1,a.length)}b(a,e);for(a=a.map(function(a){return{size:a.size,targets:[a.target],align:x(a.align,.5)}});g;){for(h=a.length;h--;)g=
a[h],p=(Math.min.apply(0,g.targets)+Math.max.apply(0,g.targets))/2,g.pos=Math.min(Math.max(0,p-g.size*g.align),d-g.size);h=a.length;for(g=!1;h--;)0<h&&a[h-1].pos+a[h-1].size>a[h].pos&&(a[h-1].size+=a[h].size,a[h-1].targets=a[h-1].targets.concat(a[h].targets),a[h-1].align=.5,a[h-1].pos+a[h-1].size>d&&(a[h-1].pos=d-a[h-1].size),a.splice(h,1),g=!0)}m.push.apply(m,q);h=0;a.some(function(a){var b=0;if(a.targets.some(function(){m[h].pos=a.pos+b;if(Math.abs(m[h].pos-m[h].target)>f)return m.slice(0,h+1).forEach(function(a){delete a.pos}),
m.reducedLen=(m.reducedLen||d)-.1*d,m.reducedLen>.1*d&&c.distribute(m,d,f),!0;b+=m[h].size;h++}))return!0});b(m,e)};p.prototype.drawDataLabels=function(){function a(a,b){var c=b.filter;return c?(b=c.operator,a=a[c.property],c=c.value,">"===b&&a>c||"<"===b&&a<c||">="===b&&a>=c||"<="===b&&a<=c||"=="===b&&a==c||"==="===b&&a===c?!0:!1):!0}function b(a,b){var c=[],d;if(D(a)&&!D(b))c=a.map(function(a){return C(a,b)});else if(D(b)&&!D(a))c=b.map(function(b){return C(a,b)});else if(D(a)||D(b))for(d=Math.max(a.length,
b.length);d--;)c[d]=C(a[d],b[d]);else c=C(a,b);return c}var f=this,e=f.chart,h=f.options,g=h.dataLabels,m=f.points,q,p=f.hasRendered||0,k=c.animObject(h.animation).duration,t=Math.min(k,200),n=!e.renderer.forExport&&x(g.defer,0<t),u=e.renderer;g=b(b(e.options.plotOptions&&e.options.plotOptions.series&&e.options.plotOptions.series.dataLabels,e.options.plotOptions&&e.options.plotOptions[f.type]&&e.options.plotOptions[f.type].dataLabels),g);c.fireEvent(this,"drawDataLabels");if(D(g)||g.enabled||f._hasPointLabels){var w=
f.plotGroup("dataLabelsGroup","data-labels",n&&!p?"hidden":"inherit",g.zIndex||6);n&&(w.attr({opacity:+p}),p||setTimeout(function(){var a=f.dataLabelsGroup;a&&(f.visible&&w.show(!0),a[h.animation?"animate":"attr"]({opacity:1},{duration:t}))},k-t));m.forEach(function(c){q=z(b(g,c.dlOptions||c.options&&c.options.dataLabels));q.forEach(function(b,d){var k=b.enabled&&(!c.isNull||c.dataLabelOnNull)&&a(c,b),g=c.dataLabels?c.dataLabels[d]:c.dataLabel,l=c.connectors?c.connectors[d]:c.connector,q=x(b.distance,
c.labelDistance),m=!g;if(k){var t=c.getLabelConfig();var p=x(b[c.formatPrefix+"Format"],b.format);t=A(p)?y(p,t,e.time):(b[c.formatPrefix+"Formatter"]||b.formatter).call(t,b);p=b.style;var n=b.rotation;e.styledMode||(p.color=x(b.color,p.color,f.color,"#000000"),"contrast"===p.color&&(c.contrastColor=u.getContrast(c.color||f.color),p.color=!A(q)&&b.inside||0>q||h.stacking?c.contrastColor:"#000000"),h.cursor&&(p.cursor=h.cursor));var r={r:b.borderRadius||0,rotation:n,padding:b.padding,zIndex:1};e.styledMode||
(r.fill=b.backgroundColor,r.stroke=b.borderColor,r["stroke-width"]=b.borderWidth);F(r,function(a,b){void 0===a&&delete r[b]})}!g||k&&A(t)?k&&A(t)&&(g?r.text=t:(c.dataLabels=c.dataLabels||[],g=c.dataLabels[d]=n?u.text(t,0,-9999).addClass("highcharts-data-label"):u.label(t,0,-9999,b.shape,null,null,b.useHTML,null,"data-label"),d||(c.dataLabel=g),g.addClass(" highcharts-data-label-color-"+c.colorIndex+" "+(b.className||"")+(b.useHTML?" highcharts-tracker":""))),g.options=b,g.attr(r),e.styledMode||g.css(p).shadow(b.shadow),
g.added||g.add(w),b.textPath&&!b.useHTML&&g.setTextPath(c.getDataLabelPath&&c.getDataLabelPath(g)||c.graphic,b.textPath),f.alignDataLabel(c,g,b,null,m)):(c.dataLabel=c.dataLabel&&c.dataLabel.destroy(),c.dataLabels&&(1===c.dataLabels.length?delete c.dataLabels:delete c.dataLabels[d]),d||delete c.dataLabel,l&&(c.connector=c.connector.destroy(),c.connectors&&(1===c.connectors.length?delete c.connectors:delete c.connectors[d])))})})}c.fireEvent(this,"afterDrawDataLabels")};p.prototype.alignDataLabel=
function(a,b,c,e,h){var d=this.chart,f=this.isCartesian&&d.inverted,g=x(a.dlBox&&a.dlBox.centerX,a.plotX,-9999),m=x(a.plotY,-9999),k=b.getBBox(),p=c.rotation,n=c.align,u=this.visible&&(a.series.forceDL||d.isInsidePlot(g,Math.round(m),f)||e&&d.isInsidePlot(g,f?e.x+1:e.y+e.height-1,f)),w="justify"===x(c.overflow,"justify");if(u){var l=d.renderer.fontMetrics(d.styledMode?void 0:c.style.fontSize,b).b;e=H({x:f?this.yAxis.len-m:g,y:Math.round(f?this.xAxis.len-g:m),width:0,height:0},e);H(c,{width:k.width,
height:k.height});p?(w=!1,g=d.renderer.rotCorr(l,p),g={x:e.x+c.x+e.width/2+g.x,y:e.y+c.y+{top:0,middle:.5,bottom:1}[c.verticalAlign]*e.height},b[h?"attr":"animate"](g).attr({align:n}),m=(p+720)%360,m=180<m&&360>m,"left"===n?g.y-=m?k.height:0:"center"===n?(g.x-=k.width/2,g.y-=k.height/2):"right"===n&&(g.x-=k.width,g.y-=m?0:k.height),b.placed=!0,b.alignAttr=g):(b.align(c,null,e),g=b.alignAttr);w&&0<=e.height?this.justifyDataLabel(b,c,g,k,e,h):x(c.crop,!0)&&(u=d.isInsidePlot(g.x,g.y)&&d.isInsidePlot(g.x+
k.width,g.y+k.height));if(c.shape&&!p)b[h?"attr":"animate"]({anchorX:f?d.plotWidth-a.plotY:a.plotX,anchorY:f?d.plotHeight-a.plotX:a.plotY})}u||(b.hide(!0),b.placed=!1)};p.prototype.justifyDataLabel=function(a,b,c,e,g,m){var d=this.chart,f=b.align,h=b.verticalAlign,k=a.box?0:a.padding||0;var p=c.x+k;if(0>p){"right"===f?(b.align="left",b.inside=!0):b.x=-p;var n=!0}p=c.x+e.width-k;p>d.plotWidth&&("left"===f?(b.align="right",b.inside=!0):b.x=d.plotWidth-p,n=!0);p=c.y+k;0>p&&("bottom"===h?(b.verticalAlign=
"top",b.inside=!0):b.y=-p,n=!0);p=c.y+e.height-k;p>d.plotHeight&&("top"===h?(b.verticalAlign="bottom",b.inside=!0):b.y=d.plotHeight-p,n=!0);n&&(a.placed=!m,a.align(b,null,g));return n};g.pie&&(g.pie.prototype.dataLabelPositioners={radialDistributionY:function(a){return a.top+a.distributeBox.pos},radialDistributionX:function(a,b,c,e){return a.getX(c<b.top+2||c>b.bottom-2?e:c,b.half,b)},justify:function(a,b,c){return c[0]+(a.half?-1:1)*(b+a.labelDistance)},alignToPlotEdges:function(a,b,c,e){a=a.getBBox().width;
return b?a+e:c-a-e},alignToConnectors:function(a,b,c,e){var d=0,f;a.forEach(function(a){f=a.dataLabel.getBBox().width;f>d&&(d=f)});return b?d+e:c-d-e}},g.pie.prototype.drawDataLabels=function(){var a=this,b=a.data,f,e=a.chart,g=a.options.dataLabels,m=g.connectorPadding,n,q=e.plotWidth,v=e.plotHeight,k=e.plotLeft,t=Math.round(e.chartWidth/3),y,z=a.center,w=z[2]/2,l=z[1],J,D,F,H,L=[[],[]],M,G,N,Q,P=[0,0,0,0],U=a.dataLabelPositioners,V;a.visible&&(g.enabled||a._hasPointLabels)&&(b.forEach(function(a){a.dataLabel&&
a.visible&&a.dataLabel.shortened&&(a.dataLabel.attr({width:"auto"}).css({width:"auto",textOverflow:"clip"}),a.dataLabel.shortened=!1)}),p.prototype.drawDataLabels.apply(a),b.forEach(function(a){a.dataLabel&&(a.visible?(L[a.half].push(a),a.dataLabel._pos=null,!A(g.style.width)&&!A(a.options.dataLabels&&a.options.dataLabels.style&&a.options.dataLabels.style.width)&&a.dataLabel.getBBox().width>t&&(a.dataLabel.css({width:.7*t}),a.dataLabel.shortened=!0)):(a.dataLabel=a.dataLabel.destroy(),a.dataLabels&&
1===a.dataLabels.length&&delete a.dataLabels))}),L.forEach(function(b,d){var h=b.length,p=[],n;if(h){a.sortByAngle(b,d-.5);if(0<a.maxLabelDistance){var t=Math.max(0,l-w-a.maxLabelDistance);var r=Math.min(l+w+a.maxLabelDistance,e.plotHeight);b.forEach(function(a){0<a.labelDistance&&a.dataLabel&&(a.top=Math.max(0,l-w-a.labelDistance),a.bottom=Math.min(l+w+a.labelDistance,e.plotHeight),n=a.dataLabel.getBBox().height||21,a.distributeBox={target:a.labelPosition.natural.y-a.top+n/2,size:n,rank:a.y},p.push(a.distributeBox))});
t=r+n-t;c.distribute(p,t,t/5)}for(Q=0;Q<h;Q++){f=b[Q];F=f.labelPosition;J=f.dataLabel;N=!1===f.visible?"hidden":"inherit";G=t=F.natural.y;p&&A(f.distributeBox)&&(void 0===f.distributeBox.pos?N="hidden":(H=f.distributeBox.size,G=U.radialDistributionY(f)));delete f.positionIndex;if(g.justify)M=U.justify(f,w,z);else switch(g.alignTo){case "connectors":M=U.alignToConnectors(b,d,q,k);break;case "plotEdges":M=U.alignToPlotEdges(J,d,q,k);break;default:M=U.radialDistributionX(a,f,G,t)}J._attr={visibility:N,
align:F.alignment};J._pos={x:M+g.x+({left:m,right:-m}[F.alignment]||0),y:G+g.y-10};F.final.x=M;F.final.y=G;x(g.crop,!0)&&(D=J.getBBox().width,t=null,M-D<m&&1===d?(t=Math.round(D-M+m),P[3]=Math.max(t,P[3])):M+D>q-m&&0===d&&(t=Math.round(M+D-q+m),P[1]=Math.max(t,P[1])),0>G-H/2?P[0]=Math.max(Math.round(-G+H/2),P[0]):G+H/2>v&&(P[2]=Math.max(Math.round(G+H/2-v),P[2])),J.sideOverflow=t)}}}),0===u(P)||this.verifyDataLabelOverflow(P))&&(this.placeDataLabels(),this.points.forEach(function(b){V=C(g,b.options.dataLabels);
if(n=x(V.connectorWidth,1)){var c;y=b.connector;if((J=b.dataLabel)&&J._pos&&b.visible&&0<b.labelDistance){N=J._attr.visibility;if(c=!y)b.connector=y=e.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-"+b.colorIndex+(b.className?" "+b.className:"")).add(a.dataLabelsGroup),e.styledMode||y.attr({"stroke-width":n,stroke:V.connectorColor||b.color||"#666666"});y[c?"attr":"animate"]({d:b.getConnectorPath()});y.attr("visibility",N)}else y&&(b.connector=y.destroy())}}))},g.pie.prototype.placeDataLabels=
function(){this.points.forEach(function(a){var b=a.dataLabel,c;b&&a.visible&&((c=b._pos)?(b.sideOverflow&&(b._attr.width=Math.max(b.getBBox().width-b.sideOverflow,0),b.css({width:b._attr.width+"px",textOverflow:(this.options.dataLabels.style||{}).textOverflow||"ellipsis"}),b.shortened=!0),b.attr(b._attr),b[b.moved?"animate":"attr"](c),b.moved=!0):b&&b.attr({y:-9999}));delete a.distributeBox},this)},g.pie.prototype.alignDataLabel=n,g.pie.prototype.verifyDataLabelOverflow=function(a){var b=this.center,
c=this.options,e=c.center,g=c.minSize||80,p=null!==c.size;if(!p){if(null!==e[0])var n=Math.max(b[2]-Math.max(a[1],a[3]),g);else n=Math.max(b[2]-a[1]-a[3],g),b[0]+=(a[3]-a[1])/2;null!==e[1]?n=Math.max(Math.min(n,b[2]-Math.max(a[0],a[2])),g):(n=Math.max(Math.min(n,b[2]-a[0]-a[2]),g),b[1]+=(a[0]-a[2])/2);n<b[2]?(b[2]=n,b[3]=Math.min(m(c.innerSize||0,n),n),this.translate(b),this.drawDataLabels&&this.drawDataLabels()):p=!0}return p});g.column&&(g.column.prototype.alignDataLabel=function(a,b,c,e,g){var d=
this.chart.inverted,f=a.series,h=a.dlBox||a.shapeArgs,m=x(a.below,a.plotY>x(this.translatedThreshold,f.yAxis.len)),k=x(c.inside,!!this.options.stacking);h&&(e=C(h),0>e.y&&(e.height+=e.y,e.y=0),h=e.y+e.height-f.yAxis.len,0<h&&(e.height-=h),d&&(e={x:f.yAxis.len-e.y-e.height,y:f.xAxis.len-e.x-e.width,width:e.height,height:e.width}),k||(d?(e.x+=m?0:e.width,e.width=0):(e.y+=m?e.height:0,e.height=0)));c.align=x(c.align,!d||k?"center":m?"right":"left");c.verticalAlign=x(c.verticalAlign,d||k?"middle":m?"top":
"bottom");p.prototype.alignDataLabel.call(this,a,b,c,e,g);c.inside&&a.contrastColor&&b.css({color:a.contrastColor})})});N(H,"modules/overlapping-datalabels.src.js",[H["parts/Globals.js"],H["parts/Utilities.js"]],function(c,n){var A=n.isArray,D=n.objectEach;n=c.Chart;var F=c.pick,z=c.addEvent,u=c.fireEvent;z(n,"render",function(){var c=[];(this.labelCollectors||[]).forEach(function(n){c=c.concat(n())});(this.yAxis||[]).forEach(function(n){n.options.stackLabels&&!n.options.stackLabels.allowOverlap&&
D(n.stacks,function(n){D(n,function(n){c.push(n.label)})})});(this.series||[]).forEach(function(n){var u=n.options.dataLabels;n.visible&&(!1!==u.enabled||n._hasPointLabels)&&n.points.forEach(function(n){n.visible&&(A(n.dataLabels)?n.dataLabels:n.dataLabel?[n.dataLabel]:[]).forEach(function(m){var p=m.options;m.labelrank=F(p.labelrank,n.labelrank,n.shapeArgs&&n.shapeArgs.height);p.allowOverlap||c.push(m)})})});this.hideOverlappingLabels(c)});n.prototype.hideOverlappingLabels=function(c){var n=this,
z=c.length,x=n.renderer,m,p,g;var b=function(a){var b=a.box?0:a.padding||0;var c=0;if(a&&(!a.alignAttr||a.placed)){var d=a.alignAttr||{x:a.attr("x"),y:a.attr("y")};var f=a.parentGroup;a.width||(c=a.getBBox(),a.width=c.width,a.height=c.height,c=x.fontMetrics(null,a.element).h);return{x:d.x+(f.translateX||0)+b,y:d.y+(f.translateY||0)+b-c,width:a.width-2*b,height:a.height-2*b}}};for(p=0;p<z;p++)if(m=c[p])m.oldOpacity=m.opacity,m.newOpacity=1,m.absoluteBox=b(m);c.sort(function(a,b){return(b.labelrank||
0)-(a.labelrank||0)});for(p=0;p<z;p++){var a=(b=c[p])&&b.absoluteBox;for(m=p+1;m<z;++m){var d=(g=c[m])&&g.absoluteBox;!a||!d||b===g||0===b.newOpacity||0===g.newOpacity||d.x>a.x+a.width||d.x+d.width<a.x||d.y>a.y+a.height||d.y+d.height<a.y||((b.labelrank<g.labelrank?b:g).newOpacity=0)}}c.forEach(function(a){var b;if(a){var c=a.newOpacity;a.oldOpacity!==c&&(a.alignAttr&&a.placed?(c?a.show(!0):b=function(){a.hide(!0);a.placed=!1},a.alignAttr.opacity=c,a[a.isOld?"animate":"attr"](a.alignAttr,null,b),u(n,
"afterHideOverlappingLabels")):a.attr({opacity:c}));a.isOld=!0}})}});N(H,"parts/Interaction.js",[H["parts/Globals.js"],H["parts/Utilities.js"]],function(c,n){var A=n.defined,D=n.isArray,F=n.isObject,z=n.objectEach,u=c.addEvent;n=c.Chart;var H=c.createElement,y=c.css,C=c.defaultOptions,x=c.defaultPlotOptions,m=c.extend,p=c.fireEvent,g=c.hasTouch,b=c.Legend,a=c.merge,d=c.pick,f=c.Point,e=c.Series,h=c.seriesTypes,r=c.svg;var E=c.TrackerMixin={drawTrackerPoint:function(){var a=this,b=a.chart,c=b.pointer,
d=function(a){var b=c.getPointFromEvent(a);void 0!==b&&(c.isDirectTouch=!0,b.onMouseOver(a))},e;a.points.forEach(function(a){e=D(a.dataLabels)?a.dataLabels:a.dataLabel?[a.dataLabel]:[];a.graphic&&(a.graphic.element.point=a);e.forEach(function(b){b.div?b.div.point=a:b.element.point=a})});a._hasTracking||(a.trackerGroups.forEach(function(e){if(a[e]){a[e].addClass("highcharts-tracker").on("mouseover",d).on("mouseout",function(a){c.onTrackerMouseOut(a)});if(g)a[e].on("touchstart",d);!b.styledMode&&a.options.cursor&&
a[e].css(y).css({cursor:a.options.cursor})}}),a._hasTracking=!0);p(this,"afterDrawTracker")},drawTrackerGraph:function(){var a=this,b=a.options,c=b.trackByArea,d=[].concat(c?a.areaPath:a.graphPath),e=d.length,f=a.chart,h=f.pointer,l=f.renderer,m=f.options.tooltip.snap,n=a.tracker,u,x=function(){if(f.hoverSeries!==a)a.onMouseOver()},y="rgba(192,192,192,"+(r?.0001:.002)+")";if(e&&!c)for(u=e+1;u--;)"M"===d[u]&&d.splice(u+1,0,d[u+1]-m,d[u+2],"L"),(u&&"M"===d[u]||u===e)&&d.splice(u,0,"L",d[u-2]+m,d[u-
1]);n?n.attr({d:d}):a.graph&&(a.tracker=l.path(d).attr({visibility:a.visible?"visible":"hidden",zIndex:2}).addClass(c?"highcharts-tracker-area":"highcharts-tracker-line").add(a.group),f.styledMode||a.tracker.attr({"stroke-linejoin":"round",stroke:y,fill:c?y:"none","stroke-width":a.graph.strokeWidth()+(c?0:2*m)}),[a.tracker,a.markerGroup].forEach(function(a){a.addClass("highcharts-tracker").on("mouseover",x).on("mouseout",function(a){h.onTrackerMouseOut(a)});b.cursor&&!f.styledMode&&a.css({cursor:b.cursor});
if(g)a.on("touchstart",x)}));p(this,"afterDrawTracker")}};h.column&&(h.column.prototype.drawTracker=E.drawTrackerPoint);h.pie&&(h.pie.prototype.drawTracker=E.drawTrackerPoint);h.scatter&&(h.scatter.prototype.drawTracker=E.drawTrackerPoint);m(b.prototype,{setItemEvents:function(b,c,d){var e=this,g=e.chart.renderer.boxWrapper,k=b instanceof f,h="highcharts-legend-"+(k?"point":"series")+"-active",l=e.chart.styledMode;(d?c:b.legendGroup).on("mouseover",function(){b.visible&&e.allItems.forEach(function(a){b!==
a&&a.setState("inactive",!k)});b.setState("hover");b.visible&&g.addClass(h);l||c.css(e.options.itemHoverStyle)}).on("mouseout",function(){e.chart.styledMode||c.css(a(b.visible?e.itemStyle:e.itemHiddenStyle));e.allItems.forEach(function(a){b!==a&&a.setState("",!k)});g.removeClass(h);b.setState()}).on("click",function(a){var c=function(){b.setVisible&&b.setVisible();e.allItems.forEach(function(a){b!==a&&a.setState(b.visible?"inactive":"",!k)})};g.removeClass(h);a={browserEvent:a};b.firePointEvent?b.firePointEvent("legendItemClick",
a,c):p(b,"legendItemClick",a,c)})},createCheckboxForItem:function(a){a.checkbox=H("input",{type:"checkbox",className:"highcharts-legend-checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);u(a.checkbox,"click",function(b){p(a.series||a,"checkboxClick",{checked:b.target.checked,item:a},function(){a.select()})})}});m(n.prototype,{showResetZoom:function(){function a(){b.zoomOut()}var b=this,c=C.lang,d=b.options.chart.resetZoomButton,e=d.theme,f=
e.states,g="chart"===d.relativeTo||"spaceBox"===d.relativeTo?null:"plotBox";p(this,"beforeShowResetZoom",null,function(){b.resetZoomButton=b.renderer.button(c.resetZoom,null,null,a,e,f&&f.hover).attr({align:d.position.align,title:c.resetZoomTitle}).addClass("highcharts-reset-zoom").add().align(d.position,!1,g)});p(this,"afterShowResetZoom")},zoomOut:function(){p(this,"selection",{resetSelection:!0},this.zoom)},zoom:function(a){var b=this,c,e=b.pointer,f=!1,g=b.inverted?e.mouseDownX:e.mouseDownY;!a||
a.resetSelection?(b.axes.forEach(function(a){c=a.zoom()}),e.initiated=!1):a.xAxis.concat(a.yAxis).forEach(function(a){var d=a.axis,k=b.inverted?d.left:d.top,h=b.inverted?k+d.width:k+d.height,l=d.isXAxis,m=!1;if(!l&&g>=k&&g<=h||l||!A(g))m=!0;e[l?"zoomX":"zoomY"]&&m&&(c=d.zoom(a.min,a.max),d.displayBtn&&(f=!0))});var h=b.resetZoomButton;f&&!h?b.showResetZoom():!f&&F(h)&&(b.resetZoomButton=h.destroy());c&&b.redraw(d(b.options.chart.animation,a&&a.animation,100>b.pointCount))},pan:function(a,b){var c=
this,d=c.hoverPoints,e;p(this,"pan",{originalEvent:a},function(){d&&d.forEach(function(a){a.setState()});("xy"===b?[1,0]:[1]).forEach(function(b){b=c[b?"xAxis":"yAxis"][0];var d=b.horiz,f=a[d?"chartX":"chartY"];d=d?"mouseDownX":"mouseDownY";var g=c[d],k=(b.pointRange||0)/2,h=b.reversed&&!c.inverted||!b.reversed&&c.inverted?-1:1,m=b.getExtremes(),n=b.toValue(g-f,!0)+k*h;h=b.toValue(g+b.len-f,!0)-k*h;var p=h<n;g=p?h:n;n=p?n:h;h=Math.min(m.dataMin,k?m.min:b.toValue(b.toPixels(m.min)-b.minPixelPadding));
k=Math.max(m.dataMax,k?m.max:b.toValue(b.toPixels(m.max)+b.minPixelPadding));p=h-g;0<p&&(n+=p,g=h);p=n-k;0<p&&(n=k,g-=p);b.series.length&&g!==m.min&&n!==m.max&&(b.setExtremes(g,n,!1,!1,{trigger:"pan"}),e=!0);c[d]=f});e&&c.redraw(!1);y(c.container,{cursor:"move"})})}});m(f.prototype,{select:function(a,b){var c=this,e=c.series,f=e.chart;this.selectedStaging=a=d(a,!c.selected);c.firePointEvent(a?"select":"unselect",{accumulate:b},function(){c.selected=c.options.selected=a;e.options.data[e.data.indexOf(c)]=
c.options;c.setState(a&&"select");b||f.getSelectedPoints().forEach(function(a){var b=a.series;a.selected&&a!==c&&(a.selected=a.options.selected=!1,b.options.data[b.data.indexOf(a)]=a.options,a.setState(f.hoverPoints&&b.options.inactiveOtherPoints?"inactive":""),a.firePointEvent("unselect"))})});delete this.selectedStaging},onMouseOver:function(a){var b=this.series.chart,c=b.pointer;a=a?c.normalize(a):c.getChartCoordinatesFromPoint(this,b.inverted);c.runPointActions(a,this)},onMouseOut:function(){var a=
this.series.chart;this.firePointEvent("mouseOut");this.series.options.inactiveOtherPoints||(a.hoverPoints||[]).forEach(function(a){a.setState()});a.hoverPoints=a.hoverPoint=null},importEvents:function(){if(!this.hasImportedEvents){var b=this,d=a(b.series.options.point,b.options).events;b.events=d;z(d,function(a,d){c.isFunction(a)&&u(b,d,a)});this.hasImportedEvents=!0}},setState:function(a,b){var c=this.series,e=this.state,f=c.options.states[a||"normal"]||{},g=x[c.type].marker&&c.options.marker,h=
g&&!1===g.enabled,l=g&&g.states&&g.states[a||"normal"]||{},n=!1===l.enabled,q=c.stateMarkerGraphic,r=this.marker||{},v=c.chart,u=c.halo,y,z=g&&c.markerAttribs;a=a||"";if(!(a===this.state&&!b||this.selected&&"select"!==a||!1===f.enabled||a&&(n||h&&!1===l.enabled)||a&&r.states&&r.states[a]&&!1===r.states[a].enabled)){this.state=a;z&&(y=c.markerAttribs(this,a));if(this.graphic){e&&this.graphic.removeClass("highcharts-point-"+e);a&&this.graphic.addClass("highcharts-point-"+a);if(!v.styledMode){var A=
c.pointAttribs(this,a);var C=d(v.options.chart.animation,f.animation);c.options.inactiveOtherPoints&&((this.dataLabels||[]).forEach(function(a){a&&a.animate({opacity:A.opacity},C)}),this.connector&&this.connector.animate({opacity:A.opacity},C));this.graphic.animate(A,C)}y&&this.graphic.animate(y,d(v.options.chart.animation,l.animation,g.animation));q&&q.hide()}else{if(a&&l){e=r.symbol||c.symbol;q&&q.currentSymbol!==e&&(q=q.destroy());if(y)if(q)q[b?"animate":"attr"]({x:y.x,y:y.y});else e&&(c.stateMarkerGraphic=
q=v.renderer.symbol(e,y.x,y.y,y.width,y.height).add(c.markerGroup),q.currentSymbol=e);!v.styledMode&&q&&q.attr(c.pointAttribs(this,a))}q&&(q[a&&this.isInside?"show":"hide"](),q.element.point=this)}a=f.halo;f=(q=this.graphic||q)&&q.visibility||"inherit";a&&a.size&&q&&"hidden"!==f?(u||(c.halo=u=v.renderer.path().add(q.parentGroup)),u.show()[b?"animate":"attr"]({d:this.haloPath(a.size)}),u.attr({"class":"highcharts-halo highcharts-color-"+d(this.colorIndex,c.colorIndex)+(this.className?" "+this.className:
""),visibility:f,zIndex:-1}),u.point=this,v.styledMode||u.attr(m({fill:this.color||c.color,"fill-opacity":a.opacity},a.attributes))):u&&u.point&&u.point.haloPath&&u.animate({d:u.point.haloPath(0)},null,u.hide);p(this,"afterSetState")}},haloPath:function(a){return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX)-a,this.plotY-a,2*a,2*a)}});m(e.prototype,{onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&p(this,"mouseOver");
this.setState("hover");a.hoverSeries=this},onMouseOut:function(){var a=this.options,b=this.chart,c=b.tooltip,d=b.hoverPoint;b.hoverSeries=null;if(d)d.onMouseOut();this&&a.events.mouseOut&&p(this,"mouseOut");!c||this.stickyTracking||c.shared&&!this.noSharedTooltip||c.hide();b.series.forEach(function(a){a.setState("",!0)})},setState:function(a,b){var c=this,e=c.options,f=c.graph,g=e.inactiveOtherPoints,h=e.states,l=e.lineWidth,m=e.opacity,n=d(h[a||"normal"]&&h[a||"normal"].animation,c.chart.options.chart.animation);
e=0;a=a||"";if(c.state!==a&&([c.group,c.markerGroup,c.dataLabelsGroup].forEach(function(b){b&&(c.state&&b.removeClass("highcharts-series-"+c.state),a&&b.addClass("highcharts-series-"+a))}),c.state=a,!c.chart.styledMode)){if(h[a]&&!1===h[a].enabled)return;a&&(l=h[a].lineWidth||l+(h[a].lineWidthPlus||0),m=d(h[a].opacity,m));if(f&&!f.dashstyle)for(h={"stroke-width":l},f.animate(h,n);c["zone-graph-"+e];)c["zone-graph-"+e].attr(h),e+=1;g||[c.group,c.markerGroup,c.dataLabelsGroup,c.labelBySeries].forEach(function(a){a&&
a.animate({opacity:m},n)})}b&&g&&c.points&&c.setAllPointsToState(a)},setAllPointsToState:function(a){this.points.forEach(function(b){b.setState&&b.setState(a)})},setVisible:function(a,b){var c=this,d=c.chart,e=c.legendItem,f=d.options.chart.ignoreHiddenSeries,g=c.visible;var h=(c.visible=a=c.options.visible=c.userOptions.visible=void 0===a?!g:a)?"show":"hide";["group","dataLabelsGroup","markerGroup","tracker","tt"].forEach(function(a){if(c[a])c[a][h]()});if(d.hoverSeries===c||(d.hoverPoint&&d.hoverPoint.series)===
c)c.onMouseOut();e&&d.legend.colorizeItem(c,a);c.isDirty=!0;c.options.stacking&&d.series.forEach(function(a){a.options.stacking&&a.visible&&(a.isDirty=!0)});c.linkedSeries.forEach(function(b){b.setVisible(a,!1)});f&&(d.isDirtyBox=!0);p(c,h);!1!==b&&d.redraw()},show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=this.options.selected=void 0===a?!this.selected:a;this.checkbox&&(this.checkbox.checked=a);p(this,a?"select":"unselect")},drawTracker:E.drawTrackerGraph})});
N(H,"parts/Responsive.js",[H["parts/Globals.js"],H["parts/Utilities.js"]],function(c,n){var A=n.isArray,D=n.isObject,F=n.objectEach,z=n.splat;n=c.Chart;var u=c.pick;n.prototype.setResponsive=function(n,u){var y=this.options.responsive,x=[],m=this.currentResponsive;!u&&y&&y.rules&&y.rules.forEach(function(m){void 0===m._id&&(m._id=c.uniqueKey());this.matchResponsiveRule(m,x)},this);u=c.merge.apply(0,x.map(function(m){return c.find(y.rules,function(c){return c._id===m}).chartOptions}));u.isResponsiveOptions=
!0;x=x.toString()||void 0;x!==(m&&m.ruleIds)&&(m&&this.update(m.undoOptions,n,!0),x?(m=this.currentOptions(u),m.isResponsiveOptions=!0,this.currentResponsive={ruleIds:x,mergedOptions:u,undoOptions:m},this.update(u,n,!0)):this.currentResponsive=void 0)};n.prototype.matchResponsiveRule=function(c,n){var y=c.condition;(y.callback||function(){return this.chartWidth<=u(y.maxWidth,Number.MAX_VALUE)&&this.chartHeight<=u(y.maxHeight,Number.MAX_VALUE)&&this.chartWidth>=u(y.minWidth,0)&&this.chartHeight>=u(y.minHeight,
0)}).call(this)&&n.push(c._id)};n.prototype.currentOptions=function(c){function n(c,p,g,b){var a;F(c,function(c,f){if(!b&&-1<u.collectionsWithUpdate.indexOf(f))for(c=z(c),g[f]=[],a=0;a<c.length;a++)p[f][a]&&(g[f][a]={},n(c[a],p[f][a],g[f][a],b+1));else D(c)?(g[f]=A(c)?[]:{},n(c,p[f]||{},g[f],b+1)):g[f]=void 0===p[f]?null:p[f]})}var u=this,x={};n(c,this.options,x,0);return x}});N(H,"masters/highcharts.src.js",[H["parts/Globals.js"],H["parts/Utilities.js"]],function(c,n){var A=c.extend;A(c,{attr:n.attr,
defined:n.defined,erase:n.erase,isArray:n.isArray,isClass:n.isClass,isDOMElement:n.isDOMElement,isNumber:n.isNumber,isObject:n.isObject,isString:n.isString,objectEach:n.objectEach,pInt:n.pInt,splat:n.splat});return c});H["masters/highcharts.src.js"]._modules=H;return H["masters/highcharts.src.js"]});
//# sourceMappingURL=highcharts.js.map

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(13);
module.exports = __webpack_require__(47);


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_axios__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highcharts_vue__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highcharts_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_highcharts_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_highcharts__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_highcharts__);









__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_axios___default.a, __WEBPACK_IMPORTED_MODULE_2_axios___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_3_vue_router__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_4_highcharts_vue___default.a);

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('chart-component', __webpack_require__(38));

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
    el: '#app'
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

if (false) {
  module.exports = require('./vue.common.prod.js')
} else {
  module.exports = __webpack_require__(15)
}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */


/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Generate a string containing static keys from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

{
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if (!config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (isUndef(target) || isPrimitive(target)
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (isUndef(target) || isPrimitive(target)
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
{
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var isUsingMicroTask = false;

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Techinically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

{
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

{
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if (!isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if (key !== '' && key !== null) {
      // null is a speical value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  }
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack becaues all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
      warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                "timeout (" + (res.timeout) + "ms)"
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if (!config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = expOrFn.toString();
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
      warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if (sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    {
      initProxy(vm);
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if (!(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.10';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false'
    ? 'false'
    // allow arbitrary string value for contenteditable
    : key === 'contenteditable' && isValidContentEditableValue(value)
      ? value
      : 'true'
};

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        {
          checkDuplicateKeys(ch);
        }
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if (typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if (typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes(parentElm, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && value !== '' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
  }
}

/*  */



/* eslint-disable no-unused-vars */
function baseWarn (msg, range) {
  console.error(("[Vue compiler]: " + msg));
}
/* eslint-enable no-unused-vars */

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value, range, dynamic) {
  (el.props || (el.props = [])).push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
  el.plain = false;
}

function addAttr (el, name, value, range, dynamic) {
  var attrs = dynamic
    ? (el.dynamicAttrs || (el.dynamicAttrs = []))
    : (el.attrs || (el.attrs = []));
  attrs.push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr (el, name, value, range) {
  el.attrsMap[name] = value;
  el.attrsList.push(rangeSetItem({ name: name, value: value }, range));
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  isDynamicArg,
  modifiers,
  range
) {
  (el.directives || (el.directives = [])).push(rangeSetItem({
    name: name,
    rawName: rawName,
    value: value,
    arg: arg,
    isDynamicArg: isDynamicArg,
    modifiers: modifiers
  }, range));
  el.plain = false;
}

function prependModifierMarker (symbol, name, dynamic) {
  return dynamic
    ? ("_p(" + name + ",\"" + symbol + "\")")
    : symbol + name // mark the event as captured
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn,
  range,
  dynamic
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    warn &&
    modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.',
      range
    );
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (modifiers.right) {
    if (dynamic) {
      name = "(" + name + ")==='click'?'contextmenu':(" + name + ")";
    } else if (name === 'click') {
      name = 'contextmenu';
      delete modifiers.right;
    }
  } else if (modifiers.middle) {
    if (dynamic) {
      name = "(" + name + ")==='click'?'mouseup':(" + name + ")";
    } else if (name === 'click') {
      name = 'mouseup';
    }
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = prependModifierMarker('!', name, dynamic);
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = prependModifierMarker('~', name, dynamic);
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = prependModifierMarker('&', name, dynamic);
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = rangeSetItem({ value: value.trim(), dynamic: dynamic }, range);
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getRawBindingAttr (
  el,
  name
) {
  return el.rawAttrsMap[':' + name] ||
    el.rawAttrsMap['v-bind:' + name] ||
    el.rawAttrsMap[name]
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

function getAndRemoveAttrByRegex (
  el,
  name
) {
  var list = el.attrsList;
  for (var i = 0, l = list.length; i < l; i++) {
    var attr = list[i];
    if (name.test(attr.name)) {
      list.splice(i, 1);
      return attr
    }
  }
}

function rangeSetItem (
  item,
  range
) {
  if (range) {
    if (range.start != null) {
      item.start = range.start;
    }
    if (range.end != null) {
      item.end = range.end;
    }
  }
  return item
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
      "? " + baseValueExpression + ".trim()" +
      ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: JSON.stringify(value),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len, str, chr, index$1, expressionPos, expressionEndPos;



function parseModel (val) {
  // Fix https://github.com/vuejs/vue/pull/7730
  // allow v-model="obj.val " (trailing whitespace)
  val = val.trim();
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead.",
        el.rawAttrsMap['v-model']
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.',
      el.rawAttrsMap['v-model']
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
    "?_i(" + value + "," + valueBinding + ")>-1" + (
      trueValueBinding === 'true'
        ? (":(" + value + ")")
        : (":_q(" + value + "," + trueValueBinding + ")")
    )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
      "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  // except for inputs with v-bind:type
  {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (value$1 && !typeBinding) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(
        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
        'because the latter already expands to a value binding internally',
        el.rawAttrsMap[binding]
      );
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.
var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1 (
  name,
  handler,
  capture,
  passive
) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;
    handler = original._wrapper = function (e) {
      if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget ||
        // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp ||
        // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 ||
        // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document
      ) {
        return original.apply(this, arguments)
      }
    };
  }
  target$1.addEventListener(
    name,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  name,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    name,
    handler._wrapper || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

var svgContainer;

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;
      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }
      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if (
      // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecesarry `checked` update.
      cur !== oldProps[key]
    ) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if (mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if (config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});



function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if (staticClass) {
    var res = parseText(staticClass, options.delimiters);
    if (res) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.',
        el.rawAttrsMap['class']
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    {
      var res = parseText(staticStyle, options.delimiters);
      if (res) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.',
          el.rawAttrsMap['style']
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
};

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
};

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
var dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + (unicodeRegExp.source) + "]*";
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being pased as HTML comment when inlined in page
var comment = /^<!\--/;
var conditionalComment = /^<!\[/;

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t',
  '&#39;': "'"
};
var encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3);
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
      }

      if (textEnd < 0) {
        text = html;
      }

      if (text) {
        advance(text.length);
      }

      if (options.chars && text) {
        options.chars(text, index - text.length, index);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if (!stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""), { start: index + html.length });
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(dynamicArgAttribute) || html.match(attribute))) {
        attr.start = index;
        advance(attr[0].length);
        attr.end = index;
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
      if (options.outputSourceRange) {
        attrs[i].start = args.start + args[0].match(/^\s*/).length;
        attrs[i].end = args.end;
      }
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs, start: match.start, end: match.end });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    // Find the closest opened tag of the same type
    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if (i > pos || !tagName &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag."),
            { start: stack[i].start, end: stack[i].end }
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;
var dynamicArgRE = /^\[.*\]$/;

var argRE = /:(.*)$/;
var bindRE = /^:|^\.|^v-bind:/;
var modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;

var slotRE = /^v-slot(:|$)|^#/;

var lineBreakRE = /[\r\n]/;
var whitespaceRE$1 = /\s+/g;

var invalidAttributeRE = /[\s"'<>\/=]/;

var decodeHTMLCached = cached(he.decode);

var emptySlotScopeToken = "_empty_";

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;
var maybeComponent;

function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    rawAttrsMap: {},
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;
  var isReservedTag = options.isReservedTag || no;
  maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var whitespaceOption = options.whitespace;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg, range) {
    if (!warned) {
      warned = true;
      warn$2(msg, range);
    }
  }

  function closeElement (element) {
    trimEndingWhitespace(element);
    if (!inVPre && !element.processed) {
      element = processElement(element, options);
    }
    // tree management
    if (!stack.length && element !== root) {
      // allow root elements with v-if, v-else-if and v-else
      if (root.if && (element.elseif || element.else)) {
        {
          checkRootConstraints(element);
        }
        addIfCondition(root, {
          exp: element.elseif,
          block: element
        });
      } else {
        warnOnce(
          "Component template should contain exactly one root element. " +
          "If you are using v-if on multiple elements, " +
          "use v-else-if to chain them instead.",
          { start: element.start }
        );
      }
    }
    if (currentParent && !element.forbidden) {
      if (element.elseif || element.else) {
        processIfConditions(element, currentParent);
      } else {
        if (element.slotScope) {
          // scoped slot
          // keep it in the children list so that v-else(-if) conditions can
          // find it as the prev node.
          var name = element.slotTarget || '"default"'
          ;(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        }
        currentParent.children.push(element);
        element.parent = currentParent;
      }
    }

    // final children cleanup
    // filter out scoped slots
    element.children = element.children.filter(function (c) { return !(c).slotScope; });
    // remove trailing whitespace node again
    trimEndingWhitespace(element);

    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  function trimEndingWhitespace (el) {
    // remove trailing whitespace node
    if (!inPre) {
      var lastNode;
      while (
        (lastNode = el.children[el.children.length - 1]) &&
        lastNode.type === 3 &&
        lastNode.text === ' '
      ) {
        el.children.pop();
      }
    }
  }

  function checkRootConstraints (el) {
    if (el.tag === 'slot' || el.tag === 'template') {
      warnOnce(
        "Cannot use <" + (el.tag) + "> as component root element because it may " +
        'contain multiple nodes.',
        { start: el.start }
      );
    }
    if (el.attrsMap.hasOwnProperty('v-for')) {
      warnOnce(
        'Cannot use v-for on stateful component root element because ' +
        'it renders multiple elements.',
        el.rawAttrsMap['v-for']
      );
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    outputSourceRange: options.outputSourceRange,
    start: function start (tag, attrs, unary, start$1, end) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      {
        if (options.outputSourceRange) {
          element.start = start$1;
          element.end = end;
          element.rawAttrsMap = element.attrsList.reduce(function (cumulated, attr) {
            cumulated[attr.name] = attr;
            return cumulated
          }, {});
        }
        attrs.forEach(function (attr) {
          if (invalidAttributeRE.test(attr.name)) {
            warn$2(
              "Invalid dynamic argument expression: attribute names cannot contain " +
              "spaces, quotes, <, >, / or =.",
              {
                start: attr.start + attr.name.indexOf("["),
                end: attr.start + attr.name.length
              }
            );
          }
        });
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.',
          { start: element.start }
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
      }

      if (!root) {
        root = element;
        {
          checkRootConstraints(root);
        }
      }

      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end (tag, start, end$1) {
      var element = stack[stack.length - 1];
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      if (options.outputSourceRange) {
        element.end = end$1;
      }
      closeElement(element);
    },

    chars: function chars (text, start, end) {
      if (!currentParent) {
        {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.',
              { start: start }
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored."),
              { start: start }
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      if (inPre || text.trim()) {
        text = isTextTag(currentParent) ? text : decodeHTMLCached(text);
      } else if (!children.length) {
        // remove the whitespace-only node right after an opening tag
        text = '';
      } else if (whitespaceOption) {
        if (whitespaceOption === 'condense') {
          // in condense mode, remove the whitespace node if it contains
          // line break, otherwise condense to a single space
          text = lineBreakRE.test(text) ? '' : ' ';
        } else {
          text = ' ';
        }
      } else {
        text = preserveWhitespace ? ' ' : '';
      }
      if (text) {
        if (!inPre && whitespaceOption === 'condense') {
          // condense consecutive whitespaces into single space
          text = text.replace(whitespaceRE$1, ' ');
        }
        var res;
        var child;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          child = {
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          };
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          child = {
            type: 3,
            text: text
          };
        }
        if (child) {
          if (options.outputSourceRange) {
            child.start = start;
            child.end = end;
          }
          children.push(child);
        }
      }
    },
    comment: function comment (text, start, end) {
      // adding anyting as a sibling to the root node is forbidden
      // comments should still be allowed, but ignored
      if (currentParent) {
        var child = {
          type: 3,
          text: text,
          isComment: true
        };
        if (options.outputSourceRange) {
          child.start = start;
          child.end = end;
        }
        currentParent.children.push(child);
      }
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var list = el.attrsList;
  var len = list.length;
  if (len) {
    var attrs = el.attrs = new Array(len);
    for (var i = 0; i < len; i++) {
      attrs[i] = {
        name: list[i].name,
        value: JSON.stringify(list[i].value)
      };
      if (list[i].start != null) {
        attrs[i].start = list[i].start;
        attrs[i].end = list[i].end;
      }
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (
  element,
  options
) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = (
    !element.key &&
    !element.scopedSlots &&
    !element.attrsList.length
  );

  processRef(element);
  processSlotContent(element);
  processSlotOutlet(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
  return element
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    {
      if (el.tag === 'template') {
        warn$2(
          "<template> cannot be keyed. Place the key on real elements instead.",
          getRawBindingAttr(el, 'key')
        );
      }
      if (el.for) {
        var iterator = el.iterator2 || el.iterator1;
        var parent = el.parent;
        if (iterator && iterator === exp && parent && parent.tag === 'transition-group') {
          warn$2(
            "Do not use v-for index as key on <transition-group> children, " +
            "this is the same as not using keys.",
            getRawBindingAttr(el, 'key'),
            true /* tip */
          );
        }
      }
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else {
      warn$2(
        ("Invalid v-for expression: " + exp),
        el.rawAttrsMap['v-for']
      );
    }
  }
}



function parseFor (exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) { return }
  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '').trim();
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if.",
      el.rawAttrsMap[el.elseif ? 'v-else-if' : 'v-else']
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if (children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored.",
          children[i]
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

// handle content being passed to a component as slot,
// e.g. <template slot="xxx">, <div slot-scope="xxx">
function processSlotContent (el) {
  var slotScope;
  if (el.tag === 'template') {
    slotScope = getAndRemoveAttr(el, 'scope');
    /* istanbul ignore if */
    if (slotScope) {
      warn$2(
        "the \"scope\" attribute for scoped slots have been deprecated and " +
        "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
        "can also be used on plain elements in addition to <template> to " +
        "denote scoped slots.",
        el.rawAttrsMap['scope'],
        true
      );
    }
    el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
  } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
    /* istanbul ignore if */
    if (el.attrsMap['v-for']) {
      warn$2(
        "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
        "(v-for takes higher priority). Use a wrapper <template> for the " +
        "scoped slot to make it clearer.",
        el.rawAttrsMap['slot-scope'],
        true
      );
    }
    el.slotScope = slotScope;
  }

  // slot="xxx"
  var slotTarget = getBindingAttr(el, 'slot');
  if (slotTarget) {
    el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
    el.slotTargetDynamic = !!(el.attrsMap[':slot'] || el.attrsMap['v-bind:slot']);
    // preserve slot as an attribute for native shadow DOM compat
    // only for non-scoped slots.
    if (el.tag !== 'template' && !el.slotScope) {
      addAttr(el, 'slot', slotTarget, getRawBindingAttr(el, 'slot'));
    }
  }

  // 2.6 v-slot syntax
  {
    if (el.tag === 'template') {
      // v-slot on <template>
      var slotBinding = getAndRemoveAttrByRegex(el, slotRE);
      if (slotBinding) {
        {
          if (el.slotTarget || el.slotScope) {
            warn$2(
              "Unexpected mixed usage of different slot syntaxes.",
              el
            );
          }
          if (el.parent && !maybeComponent(el.parent)) {
            warn$2(
              "<template v-slot> can only appear at the root level inside " +
              "the receiving the component",
              el
            );
          }
        }
        var ref = getSlotName(slotBinding);
        var name = ref.name;
        var dynamic = ref.dynamic;
        el.slotTarget = name;
        el.slotTargetDynamic = dynamic;
        el.slotScope = slotBinding.value || emptySlotScopeToken; // force it into a scoped slot for perf
      }
    } else {
      // v-slot on component, denotes default slot
      var slotBinding$1 = getAndRemoveAttrByRegex(el, slotRE);
      if (slotBinding$1) {
        {
          if (!maybeComponent(el)) {
            warn$2(
              "v-slot can only be used on components or <template>.",
              slotBinding$1
            );
          }
          if (el.slotScope || el.slotTarget) {
            warn$2(
              "Unexpected mixed usage of different slot syntaxes.",
              el
            );
          }
          if (el.scopedSlots) {
            warn$2(
              "To avoid scope ambiguity, the default slot should also use " +
              "<template> syntax when there are other named slots.",
              slotBinding$1
            );
          }
        }
        // add the component's children to its default slot
        var slots = el.scopedSlots || (el.scopedSlots = {});
        var ref$1 = getSlotName(slotBinding$1);
        var name$1 = ref$1.name;
        var dynamic$1 = ref$1.dynamic;
        var slotContainer = slots[name$1] = createASTElement('template', [], el);
        slotContainer.slotTarget = name$1;
        slotContainer.slotTargetDynamic = dynamic$1;
        slotContainer.children = el.children.filter(function (c) {
          if (!c.slotScope) {
            c.parent = slotContainer;
            return true
          }
        });
        slotContainer.slotScope = slotBinding$1.value || emptySlotScopeToken;
        // remove children as they are returned from scopedSlots now
        el.children = [];
        // mark el non-plain so data gets generated
        el.plain = false;
      }
    }
  }
}

function getSlotName (binding) {
  var name = binding.name.replace(slotRE, '');
  if (!name) {
    if (binding.name[0] !== '#') {
      name = 'default';
    } else {
      warn$2(
        "v-slot shorthand syntax requires a slot name.",
        binding
      );
    }
  }
  return dynamicArgRE.test(name)
    // dynamic [name]
    ? { name: name.slice(1, -1), dynamic: true }
    // static name
    : { name: ("\"" + name + "\""), dynamic: false }
}

// handle <slot/> outlets
function processSlotOutlet (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if (el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead.",
        getRawBindingAttr(el, 'key')
      );
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, syncGen, isDynamic;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name.replace(dirRE, ''));
      // support .foo shorthand syntax for the .prop modifier
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isDynamic = dynamicArgRE.test(name);
        if (isDynamic) {
          name = name.slice(1, -1);
        }
        if (
          value.trim().length === 0
        ) {
          warn$2(
            ("The value for a v-bind expression cannot be empty. Found in \"v-bind:" + name + "\"")
          );
        }
        if (modifiers) {
          if (modifiers.prop && !isDynamic) {
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel && !isDynamic) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            syncGen = genAssignmentCode(value, "$event");
            if (!isDynamic) {
              addHandler(
                el,
                ("update:" + (camelize(name))),
                syncGen,
                null,
                false,
                warn$2,
                list[i]
              );
              if (hyphenate(name) !== camelize(name)) {
                addHandler(
                  el,
                  ("update:" + (hyphenate(name))),
                  syncGen,
                  null,
                  false,
                  warn$2,
                  list[i]
                );
              }
            } else {
              // handler w/ dynamic event name
              addHandler(
                el,
                ("\"update:\"+(" + name + ")"),
                syncGen,
                null,
                false,
                warn$2,
                list[i],
                true // dynamic
              );
            }
          }
        }
        if ((modifiers && modifiers.prop) || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value, list[i], isDynamic);
        } else {
          addAttr(el, name, value, list[i], isDynamic);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        isDynamic = dynamicArgRE.test(name);
        if (isDynamic) {
          name = name.slice(1, -1);
        }
        addHandler(el, name, value, modifiers, false, warn$2, list[i], isDynamic);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        isDynamic = false;
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
          if (dynamicArgRE.test(arg)) {
            arg = arg.slice(1, -1);
            isDynamic = true;
          }
        }
        addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);
        if (name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      {
        var res = parseText(value, delimiters);
        if (res) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.',
            list[i]
          );
        }
      }
      addAttr(el, name, JSON.stringify(value), list[i]);
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true', list[i]);
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name, attrs[i]);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead.",
        el.rawAttrsMap['v-model']
      );
    }
    _el = _el.parent;
  }
}

/*  */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (!map['v-model']) {
      return
    }

    var typeBinding;
    if (map[':type'] || map['v-bind:type']) {
      typeBinding = getBindingAttr(el, 'type');
    }
    if (!map.type && !typeBinding && map['v-bind']) {
      typeBinding = "(" + (map['v-bind']) + ").type";
    }

    if (typeBinding) {
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

var model$1 = {
  preTransformNode: preTransformNode
};

var modules$1 = [
  klass$1,
  style$1,
  model$1
];

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"), dir);
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"), dir);
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*(?:[\w$]+)?\s*\(/;
var fnInvokeRE = /\([^)]*?\);*$/;
var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

// KeyboardEvent.keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// KeyboardEvent.key aliases
var keyNames = {
  // #7880: IE11 and Edge use `Esc` for Escape key name.
  esc: ['Esc', 'Escape'],
  tab: 'Tab',
  enter: 'Enter',
  // #9112: IE11 uses `Spacebar` for Space key name.
  space: [' ', 'Spacebar'],
  // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
  up: ['Up', 'ArrowUp'],
  left: ['Left', 'ArrowLeft'],
  right: ['Right', 'ArrowRight'],
  down: ['Down', 'ArrowDown'],
  // #9112: IE11 uses `Del` for Delete key name.
  'delete': ['Backspace', 'Delete', 'Del']
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative
) {
  var prefix = isNative ? 'nativeOn:' : 'on:';
  var staticHandlers = "";
  var dynamicHandlers = "";
  for (var name in events) {
    var handlerCode = genHandler(events[name]);
    if (events[name] && events[name].dynamic) {
      dynamicHandlers += name + "," + handlerCode + ",";
    } else {
      staticHandlers += "\"" + name + "\":" + handlerCode + ",";
    }
  }
  staticHandlers = "{" + (staticHandlers.slice(0, -1)) + "}";
  if (dynamicHandlers) {
    return prefix + "_d(" + staticHandlers + ",[" + (dynamicHandlers.slice(0, -1)) + "])"
  } else {
    return prefix + staticHandlers
  }
}

function genHandler (handler) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);
  var isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ''));

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value
    }
    return ("function($event){" + (isFunctionInvocation ? ("return " + (handler.value)) : handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? ("return " + (handler.value) + "($event)")
      : isFunctionExpression
        ? ("return (" + (handler.value) + ")($event)")
        : isFunctionInvocation
          ? ("return " + (handler.value))
          : handler.value;
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return (
    // make sure the key filters only apply to KeyboardEvents
    // #9441: can't use 'keyCode' in $event because Chrome autofill fires fake
    // key events that do not have keyCode property...
    "if(!$event.type.indexOf('key')&&" +
    (keys.map(genFilterCode).join('&&')) + ")return null;"
  )
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var keyCode = keyCodes[key];
  var keyName = keyNames[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(keyCode)) + "," +
    "$event.key," +
    "" + (JSON.stringify(keyName)) +
    ")"
  )
}

/*  */

function on (el, dir) {
  if (dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
};

/*  */





var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
  this.pre = false;
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.parent) {
    el.pre = el.pre || el.parent.pre;
  }

  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data;
      if (!el.plain || (el.pre && state.maybeComponent(el))) {
        data = genData$2(el, state);
      }

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  // Some elements (templates) need to behave differently inside of a v-pre
  // node.  All pre nodes are static roots, so we can use this as a location to
  // wrap a state change and reset it upon exiting the pre node.
  var originalPreState = state.pre;
  if (el.pre) {
    state.pre = el.pre;
  }
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  state.pre = originalPreState;
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      state.warn(
        "v-once can only be used inside v-for that is keyed. ",
        el.rawAttrsMap['v-once']
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if (state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      el.rawAttrsMap['v-for'],
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:" + (genProps(el.attrs)) + ",";
  }
  // DOM props
  if (el.props) {
    data += "domProps:" + (genProps(el.props)) + ",";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el, el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind dynamic argument wrap
  // v-bind with dynamic arguments must be applied using the same v-bind object
  // merge helper so that class/style/mustUseProp attrs are handled correctly.
  if (el.dynamicAttrs) {
    data = "_b(" + data + ",\"" + (el.tag) + "\"," + (genProps(el.dynamicAttrs)) + ")";
  }
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:" + (dir.isDynamicArg ? dir.arg : ("\"" + (dir.arg) + "\""))) : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if (el.children.length !== 1 || ast.type !== 1) {
    state.warn(
      'Inline-template components must have exactly one child element.',
      { start: el.start }
    );
  }
  if (ast && ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  el,
  slots,
  state
) {
  // by default scoped slots are considered "stable", this allows child
  // components with only scoped slots to skip forced updates from parent.
  // but in some cases we have to bail-out of this optimization
  // for example if the slot contains dynamic names, has v-if or v-for on them...
  var needsForceUpdate = el.for || Object.keys(slots).some(function (key) {
    var slot = slots[key];
    return (
      slot.slotTargetDynamic ||
      slot.if ||
      slot.for ||
      containsSlotChild(slot) // is passing down slot from parent which may be dynamic
    )
  });

  // #9534: if a component with scoped slots is inside a conditional branch,
  // it's possible for the same component to be reused but with different
  // compiled slot content. To avoid that, we generate a unique key based on
  // the generated code of all the slot contents.
  var needsKey = !!el.if;

  // OR when it is inside another scoped slot or v-for (the reactivity may be
  // disconnected due to the intermediate scope variable)
  // #9438, #9506
  // TODO: this can be further optimized by properly analyzing in-scope bindings
  // and skip force updating ones that do not actually use scope variables.
  if (!needsForceUpdate) {
    var parent = el.parent;
    while (parent) {
      if (
        (parent.slotScope && parent.slotScope !== emptySlotScopeToken) ||
        parent.for
      ) {
        needsForceUpdate = true;
        break
      }
      if (parent.if) {
        needsKey = true;
      }
      parent = parent.parent;
    }
  }

  var generatedSlots = Object.keys(slots)
    .map(function (key) { return genScopedSlot(slots[key], state); })
    .join(',');

  return ("scopedSlots:_u([" + generatedSlots + "]" + (needsForceUpdate ? ",null,true" : "") + (!needsForceUpdate && needsKey ? (",null,false," + (hash(generatedSlots))) : "") + ")")
}

function hash(str) {
  var hash = 5381;
  var i = str.length;
  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }
  return hash >>> 0
}

function containsSlotChild (el) {
  if (el.type === 1) {
    if (el.tag === 'slot') {
      return true
    }
    return el.children.some(containsSlotChild)
  }
  return false
}

function genScopedSlot (
  el,
  state
) {
  var isLegacySyntax = el.attrsMap['slot-scope'];
  if (el.if && !el.ifProcessed && !isLegacySyntax) {
    return genIf(el, state, genScopedSlot, "null")
  }
  if (el.for && !el.forProcessed) {
    return genFor(el, state, genScopedSlot)
  }
  var slotScope = el.slotScope === emptySlotScopeToken
    ? ""
    : String(el.slotScope);
  var fn = "function(" + slotScope + "){" +
    "return " + (el.tag === 'template'
      ? el.if && isLegacySyntax
        ? ("(" + (el.if) + ")?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  // reverse proxy v-slot without scope on this.$slots
  var reverseProxy = slotScope ? "" : ",proxy:true";
  return ("{key:" + (el.slotTarget || "\"default\"") + ",fn:" + fn + reverseProxy + "}")
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      var normalizationType = checkSkip
        ? state.maybeComponent(el$1) ? ",1" : ",0"
        : "";
      return ("" + ((altGenElement || genElement)(el$1, state)) + normalizationType)
    }
    var normalizationType$1 = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType$1 ? ("," + normalizationType$1) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } else if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs || el.dynamicAttrs
    ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map(function (attr) { return ({
        // slot props are camelized
        name: camelize(attr.name),
        value: attr.value,
        dynamic: attr.dynamic
      }); }))
    : null;
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var staticProps = "";
  var dynamicProps = "";
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    var value = transformSpecialNewlines(prop.value);
    if (prop.dynamic) {
      dynamicProps += (prop.name) + "," + value + ",";
    } else {
      staticProps += "\"" + (prop.name) + "\":" + value + ",";
    }
  }
  staticProps = "{" + (staticProps.slice(0, -1)) + "}";
  if (dynamicProps) {
    return ("_d(" + staticProps + ",[" + (dynamicProps.slice(0, -1)) + "])")
  } else {
    return staticProps
  }
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */



// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast, warn) {
  if (ast) {
    checkNode(ast, warn);
  }
}

function checkNode (node, warn) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          var range = node.rawAttrsMap[name];
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), warn, range);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), warn, range);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), warn, range);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], warn);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, warn, node);
  }
}

function checkEvent (exp, text, warn, range) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    warn(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim()),
      range
    );
  }
  checkExpression(exp, text, warn, range);
}

function checkFor (node, text, warn, range) {
  checkExpression(node.for || '', text, warn, range);
  checkIdentifier(node.alias, 'v-for alias', text, warn, range);
  checkIdentifier(node.iterator1, 'v-for iterator', text, warn, range);
  checkIdentifier(node.iterator2, 'v-for iterator', text, warn, range);
}

function checkIdentifier (
  ident,
  type,
  text,
  warn,
  range
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      warn(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())), range);
    }
  }
}

function checkExpression (exp, text, warn, range) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      warn(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim()),
        range
      );
    } else {
      warn(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n",
        range
      );
    }
  }
}

/*  */

var range = 2;

function generateCodeFrame (
  source,
  start,
  end
) {
  if ( start === void 0 ) start = 0;
  if ( end === void 0 ) end = source.length;

  var lines = source.split(/\r?\n/);
  var count = 0;
  var res = [];
  for (var i = 0; i < lines.length; i++) {
    count += lines[i].length + 1;
    if (count >= start) {
      for (var j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length) { continue }
        res.push(("" + (j + 1) + (repeat$1(" ", 3 - String(j + 1).length)) + "|  " + (lines[j])));
        var lineLength = lines[j].length;
        if (j === i) {
          // push underline
          var pad = start - (count - lineLength) + 1;
          var length = end > count ? lineLength - pad : end - start;
          res.push("   |  " + repeat$1(" ", pad) + repeat$1("^", length));
        } else if (j > i) {
          if (end > count) {
            var length$1 = Math.min(end - count, lineLength);
            res.push("   |  " + repeat$1("^", length$1));
          }
          count += lineLength + 1;
        }
      }
      break
    }
  }
  return res.join('\n')
}

function repeat$1 (str, n) {
  var result = '';
  if (n > 0) {
    while (true) { // eslint-disable-line
      if (n & 1) { result += str; }
      n >>>= 1;
      if (n <= 0) { break }
      str += str;
    }
  }
  return result
}

/*  */



function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    {
      if (compiled.errors && compiled.errors.length) {
        if (options.outputSourceRange) {
          compiled.errors.forEach(function (e) {
            warn$$1(
              "Error compiling template:\n\n" + (e.msg) + "\n\n" +
              generateCodeFrame(template, e.start, e.end),
              vm
            );
          });
        } else {
          warn$$1(
            "Error compiling template:\n\n" + template + "\n\n" +
            compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
            vm
          );
        }
      }
      if (compiled.tips && compiled.tips.length) {
        if (options.outputSourceRange) {
          compiled.tips.forEach(function (e) { return tip(e.msg, vm); });
        } else {
          compiled.tips.forEach(function (msg) { return tip(msg, vm); });
        }
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];

      var warn = function (msg, range, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        if (options.outputSourceRange) {
          // $flow-disable-line
          var leadingSpaceLength = template.match(/^\s*/)[0].length;

          warn = function (msg, range, tip) {
            var data = { msg: msg };
            if (range) {
              if (range.start != null) {
                data.start = range.start + leadingSpaceLength;
              }
              if (range.end != null) {
                data.end = range.end + leadingSpaceLength;
              }
            }
            (tip ? tips : errors).push(data);
          };
        }
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      finalOptions.warn = warn;

      var compiled = baseCompile(template.trim(), finalOptions);
      {
        detectErrors(compiled.ast, warn);
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compile = ref$1.compile;
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if (!template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if (config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        outputSourceRange: "development" !== 'production',
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if (config.performance && mark) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue.compile = compileToFunctions;

module.exports = Vue;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(16).setImmediate))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(17);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
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
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
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
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
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
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
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

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(2)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o};!function(){function o(e,t){if(!o.installed){if(o.installed=!0,!t)return void console.error("You have to install axios");e.axios=t,Object.defineProperties(e.prototype,{axios:{get:function(){return t}},$http:{get:function(){return t}}})}}"object"==( false?"undefined":_typeof(exports))?module.exports=o: true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return o}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):window.Vue&&window.axios&&Vue.use(o,window.axios)}();

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(20);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(3);
var Axios = __webpack_require__(22);
var mergeConfig = __webpack_require__(9);
var defaults = __webpack_require__(6);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(10);
axios.CancelToken = __webpack_require__(34);
axios.isCancel = __webpack_require__(5);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(35);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

module.exports = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var buildURL = __webpack_require__(4);
var InterceptorManager = __webpack_require__(23);
var dispatchRequest = __webpack_require__(24);
var mergeConfig = __webpack_require__(9);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);
  config.method = config.method ? config.method.toLowerCase() : 'get';

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(25);
var isCancel = __webpack_require__(5);
var defaults = __webpack_require__(6);
var isAbsoluteURL = __webpack_require__(32);
var combineURLs = __webpack_require__(33);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(8);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(10);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*!
  * vue-router v3.1.3
  * (c) 2019 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if ("development" !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

function isExtendedError (constructor, err) {
  return (
    err instanceof constructor ||
    // _name is to support IE9 too
    (err && (err.name === constructor.name || err._name === constructor._name))
  )
}

function extend (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

var View = {
  name: 'RouterView',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    // used by devtools to display a router-view badge
    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      var vnodeData = parent.$vnode && parent.$vnode.data;
      if (vnodeData) {
        if (vnodeData.routerView) {
          depth++;
        }
        if (vnodeData.keepAlive && parent._inactive) {
          inactive = true;
        }
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // register instance in init hook
    // in case kept-alive component be actived when routes changed
    data.hook.init = function (vnode) {
      if (vnode.data.keepAlive &&
        vnode.componentInstance &&
        vnode.componentInstance !== matched.instances[name]
      ) {
        matched.instances[name] = vnode.componentInstance;
      }
    };

    // resolve props
    var propsToPass = data.props = resolveProps(route, matched.props && matched.props[name]);
    if (propsToPass) {
      // clone to prevent mutation
      propsToPass = data.props = extend({}, propsToPass);
      // pass non-declared props as attrs
      var attrs = data.attrs = data.attrs || {};
      for (var key in propsToPass) {
        if (!component.props || !(key in component.props)) {
          attrs[key] = propsToPass[key];
          delete propsToPass[key];
        }
      }
    }

    return h(component, data, children)
  }
};

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (true) {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    "development" !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    parsedQuery[key] = extraQuery[key];
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */

var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery);
  }
  return Object.freeze(route)
}

function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res
  } else {
    return value
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  // handle null value #1566
  if (!a || !b) { return a === b }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}
pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  params = params || {};
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path));

    // Fix #2505 resolving asterisk routes { name: 'not-found', params: { pathMatch: '/not-found' }}
    if (params.pathMatch) { params[0] = params.pathMatch; }

    return filler(params, { pretty: true })
  } catch (e) {
    if (true) {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  } finally {
    // delete the 0 if it was added
    delete params[0];
  }
}

/*  */

function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next._normalized) {
    return next
  } else if (next.name) {
    return extend({}, raw)
  }

  // relative params
  if (!next.path && next.params && current) {
    next = extend({}, next);
    next._normalized = true;
    var params = extend(extend({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (true) {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var noop = function () {};

var Link = {
  name: 'RouterLink',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(
      this.to,
      current,
      this.append
    );
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback =
      globalActiveClass == null ? 'router-link-active' : globalActiveClass;
    var exactActiveClassFallback =
      globalExactActiveClass == null
        ? 'router-link-exact-active'
        : globalExactActiveClass;
    var activeClass =
      this.activeClass == null ? activeClassFallback : this.activeClass;
    var exactActiveClass =
      this.exactActiveClass == null
        ? exactActiveClassFallback
        : this.exactActiveClass;

    var compareTarget = route.redirectedFrom
      ? createRoute(null, normalizeLocation(route.redirectedFrom), null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location, noop);
        } else {
          router.push(location, noop);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) {
        on[e] = handler;
      });
    } else {
      on[this.event] = handler;
    }

    var data = { class: classes };

    var scopedSlot =
      !this.$scopedSlots.$hasNormal &&
      this.$scopedSlots.default &&
      this.$scopedSlots.default({
        href: href,
        route: route,
        navigate: handler,
        isActive: classes[activeClass],
        isExactActive: classes[exactActiveClass]
      });

    if (scopedSlot) {
      if (scopedSlot.length === 1) {
        return scopedSlot[0]
      } else if (scopedSlot.length > 1 || !scopedSlot.length) {
        if (true) {
          warn(
            false,
            ("RouterLink with to=\"" + (this.props.to) + "\" is trying to use a scoped slot but it didn't provide exactly one child.")
          );
        }
        return scopedSlot.length === 0 ? h() : h('span', {}, scopedSlot)
      }
    }

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var aData = (a.data = extend({}, a.data));
        aData.on = aData.on || {};
        // transform existing events in both objects into arrays so we can push later
        for (var event in aData.on) {
          var handler$1 = aData.on[event];
          if (event in on) {
            aData.on[event] = Array.isArray(handler$1) ? handler$1 : [handler$1];
          }
        }
        // append new listeners for router-link
        for (var event$1 in on) {
          if (event$1 in aData.on) {
            // on[event] is always a function
            aData.on[event$1].push(on[event$1]);
          } else {
            aData.on[event$1] = handler;
          }
        }

        var aAttrs = (a.data.attrs = extend({}, a.data.attrs));
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed && _Vue === Vue) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('RouterView', View);
  Vue.component('RouterLink', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  if (true) {
    // warn if routes do not include leading slashes
    var found = pathList
    // check for missing leading slash
      .filter(function (path) { return path && path.charAt(0) !== '*' && path.charAt(0) !== '/'; });

    if (found.length > 0) {
      var pathNames = found.map(function (path) { return ("- " + path); }).join('\n');
      warn(false, ("Non-nested routes must include a leading slash character. Fix the following routes: \n" + pathNames));
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (true) {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(
        path || name
      )) + " cannot be a " + "string id. Use an actual component instead."
    );
  }

  var pathToRegexpOptions =
    route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(path, parent, pathToRegexpOptions.strict);

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props:
      route.props == null
        ? {}
        : route.components
          ? route.props
          : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (true) {
      if (
        route.name &&
        !route.redirect &&
        route.children.some(function (child) { return /^\/?$/.test(child.path); })
      ) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
            "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
            "the default child route will not be rendered. Remove the name from " +
            "this route and use the name of the default child route for named " +
            "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias) ? route.alias : [route.alias];
    for (var i = 0; i < aliases.length; ++i) {
      var alias = aliases[i];
      if ("development" !== 'production' && alias === path) {
        warn(
          false,
          ("Found an alias with the same value as the path: \"" + path + "\". You have to remove that alias. It will be ignored in development.")
        );
        // skip in dev to make it work
        continue
      }

      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    }
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if ("development" !== 'production' && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
          "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (
  path,
  pathToRegexpOptions
) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (true) {
    var keys = Object.create(null);
    regex.keys.forEach(function (key) {
      warn(
        !keys[key.name],
        ("Duplicate param keys in route with path: \"" + path + "\"")
      );
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (
  path,
  parent,
  strict
) {
  if (!strict) { path = path.replace(/\/$/, ''); }
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */



function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (true) {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
      return _createRoute(record, location, redirectedFrom)
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
      ? originalRedirect(createRoute(record, location, null, router))
      : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (true) {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (true) {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (true) {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      // Fix #1994: using * with props: true generates a param named 0
      params[key.name || 'pathMatch'] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */

// use User Timing api (if present) for more accurate key precision
var Time =
  inBrowser && window.performance && window.performance.now
    ? window.performance
    : Date;

function genStateKey () {
  return Time.now().toFixed(3)
}

var _key = genStateKey();

function getStateKey () {
  return _key
}

function setStateKey (key) {
  return (_key = key)
}

/*  */

var positionStore = Object.create(null);

function setupScroll () {
  // Fix for #1585 for Firefox
  // Fix for #2195 Add optional third attribute to workaround a bug in safari https://bugs.webkit.org/show_bug.cgi?id=182678
  // Fix for #2774 Support for apps loaded from Windows file shares not mapped to network drives: replaced location.origin with
  // window.location.protocol + '//' + window.location.host
  // location.host contains the port and location.hostname doesn't
  var protocolAndPath = window.location.protocol + '//' + window.location.host;
  var absolutePath = window.location.href.replace(protocolAndPath, '');
  window.history.replaceState({ key: getStateKey() }, '', absolutePath);
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (true) {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior.call(
      router,
      to,
      from,
      isPop ? position : null
    );

    if (!shouldScroll) {
      return
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll
        .then(function (shouldScroll) {
          scrollToPosition((shouldScroll), position);
        })
        .catch(function (err) {
          if (true) {
            assert(false, err.toString());
          }
        });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

var hashStartsWithNumberRE = /^#\d/;

function scrollToPosition (shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    // getElementById would still fail if the selector contains a more complicated query like #main[data-attr]
    // but at the same time, it doesn't make much sense to select an element with an id and an extra selector
    var el = hashStartsWithNumberRE.test(shouldScroll.selector) // $flow-disable-line
      ? document.getElementById(shouldScroll.selector.slice(1)) // $flow-disable-line
      : document.querySelector(shouldScroll.selector);

    if (el) {
      var offset =
        shouldScroll.offset && typeof shouldScroll.offset === 'object'
          ? shouldScroll.offset
          : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    window.scrollTo(position.x, position.y);
  }
}

/*  */

var supportsPushState =
  inBrowser &&
  (function () {
    var ua = window.navigator.userAgent;

    if (
      (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
      ua.indexOf('Mobile Safari') !== -1 &&
      ua.indexOf('Chrome') === -1 &&
      ua.indexOf('Windows Phone') === -1
    ) {
      return false
    }

    return window.history && 'pushState' in window.history
  })();

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: getStateKey() }, '', url);
    } else {
      history.pushState({ key: setStateKey(genStateKey()) }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          "development" !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol';

function isESModule (obj) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

var NavigationDuplicated = /*@__PURE__*/(function (Error) {
  function NavigationDuplicated (normalizedLocation) {
    Error.call(this);
    this.name = this._name = 'NavigationDuplicated';
    // passing the message to super() doesn't seem to work in the transpiled version
    this.message = "Navigating to current location (\"" + (normalizedLocation.fullPath) + "\") is not allowed";
    // add a stack property so services like Sentry can correctly display it
    Object.defineProperty(this, 'stack', {
      value: new Error().stack,
      writable: true,
      configurable: true
    });
    // we could also have used
    // Error.captureStackTrace(this, this.constructor)
    // but it only exists on node and chrome
  }

  if ( Error ) NavigationDuplicated.__proto__ = Error;
  NavigationDuplicated.prototype = Object.create( Error && Error.prototype );
  NavigationDuplicated.prototype.constructor = NavigationDuplicated;

  return NavigationDuplicated;
}(Error));

// support IE9
NavigationDuplicated._name = 'NavigationDuplicated';

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (
  location,
  onComplete,
  onAbort
) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(
    route,
    function () {
      this$1.updateRoute(route);
      onComplete && onComplete(route);
      this$1.ensureURL();

      // fire ready cbs once
      if (!this$1.ready) {
        this$1.ready = true;
        this$1.readyCbs.forEach(function (cb) {
          cb(route);
        });
      }
    },
    function (err) {
      if (onAbort) {
        onAbort(err);
      }
      if (err && !this$1.ready) {
        this$1.ready = true;
        this$1.readyErrorCbs.forEach(function (cb) {
          cb(err);
        });
      }
    }
  );
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    // after merging https://github.com/vuejs/vue-router/pull/2771 we
    // When the user navigates through history through back/forward buttons
    // we do not want to throw the error. We only throw it if directly calling
    // push/replace. That's why it's not included in isError
    if (!isExtendedError(NavigationDuplicated, err) && isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) {
          cb(err);
        });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort(new NavigationDuplicated(route))
  }

  var ref = resolveQueue(
    this.current.matched,
    route.matched
  );
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' &&
            (typeof to.path === 'string' || typeof to.name === 'string'))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) {
            cb();
          });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(
    activated,
    'beforeRouteEnter',
    function (guard, _, match, key) {
      return bindEnterGuard(guard, match, key, cbs, isValid)
    }
  )
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
      next(cb);
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (
    instances[key] &&
    !instances[key]._isBeingDestroyed // do not reuse being destroyed instance
  ) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */

var HTML5History = /*@__PURE__*/(function (History) {
  function HTML5History (router, base) {
    var this$1 = this;

    History.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    var initLocation = getLocation(this.base);
    window.addEventListener('popstate', function (e) {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === initLocation) {
        return
      }

      this$1.transitionTo(location, function (route) {
        if (supportsScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if ( History ) HTML5History.__proto__ = History;
  HTML5History.prototype = Object.create( History && History.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = decodeURI(window.location.pathname);
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */

var HashHistory = /*@__PURE__*/(function (History) {
  function HashHistory (router, base, fallback) {
    History.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History ) HashHistory.__proto__ = History;
  HashHistory.prototype = Object.create( History && History.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    window.addEventListener(
      supportsPushState ? 'popstate' : 'hashchange',
      function () {
        var current = this$1.current;
        if (!ensureSlash()) {
          return
        }
        this$1.transitionTo(getHash(), function (route) {
          if (supportsScroll) {
            handleScroll(this$1.router, route, current, true);
          }
          if (!supportsPushState) {
            replaceHash(route.fullPath);
          }
        });
      }
    );
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(
      location,
      function (route) {
        pushHash(route.fullPath);
        handleScroll(this$1.router, route, fromRoute, false);
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(
      location,
      function (route) {
        replaceHash(route.fullPath);
        handleScroll(this$1.router, route, fromRoute, false);
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(cleanPath(base + '/#' + location));
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  // empty path
  if (index < 0) { return '' }

  href = href.slice(index + 1);
  // decode the hash but not the search or hash
  // as search(query) is already decoded
  // https://github.com/vuejs/vue-router/issues/2708
  var searchIndex = href.indexOf('?');
  if (searchIndex < 0) {
    var hashIndex = href.indexOf('#');
    if (hashIndex > -1) {
      href = decodeURI(href.slice(0, hashIndex)) + href.slice(hashIndex);
    } else { href = decodeURI(href); }
  } else {
    if (searchIndex > -1) {
      href = decodeURI(href.slice(0, searchIndex)) + href.slice(searchIndex);
    }
  }

  return href
}

function getUrl (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return (base + "#" + path)
}

function pushHash (path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash (path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */

var AbstractHistory = /*@__PURE__*/(function (History) {
  function AbstractHistory (router, base) {
    History.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History ) AbstractHistory.__proto__ = History;
  AbstractHistory.prototype = Object.create( History && History.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(
      location,
      function (route) {
        this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
        this$1.index++;
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(
      location,
      function (route) {
        this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(
      route,
      function () {
        this$1.index = targetIndex;
        this$1.updateRoute(route);
      },
      function (err) {
        if (isExtendedError(NavigationDuplicated, err)) {
          this$1.index = targetIndex;
        }
      }
    );
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */



var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (true) {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  "development" !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // set up app destroyed handler
  // https://github.com/vuejs/vue-router/issues/2639
  app.$once('hook:destroyed', function () {
    // clean out app from this.apps array once destroyed
    var index = this$1.apps.indexOf(app);
    if (index > -1) { this$1.apps.splice(index, 1); }
    // ensure we still have a main app or null if no apps
    // we do not release the router so it can be reused
    if (this$1.app === app) { this$1.app = this$1.apps[0] || null; }
  });

  // main app previously initialized
  // return as we don't need to set up new history listener
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

  // $flow-disable-line
  if (!onComplete && !onAbort && typeof Promise !== 'undefined') {
    return new Promise(function (resolve, reject) {
      this$1.history.push(location, resolve, reject);
    })
  } else {
    this.history.push(location, onComplete, onAbort);
  }
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

  // $flow-disable-line
  if (!onComplete && !onAbort && typeof Promise !== 'undefined') {
    return new Promise(function (resolve, reject) {
      this$1.history.replace(location, resolve, reject);
    })
  } else {
    this.history.replace(location, onComplete, onAbort);
  }
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  current = current || this.history.current;
  var location = normalizeLocation(
    to,
    current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '3.1.3';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["a"] = (VueRouter);


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e(__webpack_require__(11)):"function"==typeof define&&define.amd?define(["highcharts"],e):"object"==typeof exports?exports.HighchartsVue=e(require("highcharts")):t.HighchartsVue=e(t.Highcharts)}("undefined"!=typeof self?self:this,function(t){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(e,r){e.exports=t},function(t,e,r){"use strict";function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.component(e.tagName||"highcharts",Object(o.a)(e.highcharts||i.a))}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n,r.d(e,"Chart",function(){return a});var o=r(2),c=r(0),i=r.n(c),a=Object(o.a)(i.a)},function(t,e,r){"use strict";function n(t){return i(t)||c(t)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function i(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}var a=r(3),s=function(t){return{template:'<div ref="chart"></div>',render:function(t){return t("div",{ref:"chart"})},props:{constructorType:{type:String,default:"chart"},options:{type:Object,required:!0},callback:Function,updateArgs:{type:Array,default:function(){return[!0,!0]}},highcharts:{type:Object},deepCopyOnUpdate:{type:Boolean,default:!0}},watch:{options:{handler:function(t){var e;(e=this.chart).update.apply(e,[Object(a.a)(t,this.deepCopyOnUpdate)].concat(n(this.updateArgs)))},deep:!0}},mounted:function(){var e=this.highcharts||t;this.options&&e[this.constructorType]?this.chart=e[this.constructorType](this.$refs.chart,Object(a.a)(this.options,!0),this.callback?this.callback:null):this.options?console.warn("'".concat(this.constructorType,"' constructor-type is incorrect. Sometimes this error is caused by the fact, that the corresponding module wasn't imported.")):console.warn('The "options" parameter was not passed.')},beforeDestroy:function(){this.chart&&this.chart.destroy()}}};e.a=s},function(t,e,r){"use strict";function n(t,e,r){function o(o,i){!c.a.isObject(o,!r)||c.a.isClass(o)||c.a.isDOMElement(o)?t[i]=e[i]:t[i]=n(t[i]||c.a.isArray(o)?[]:{},o,r)}return c.a.isArray(e)?e.forEach(o):c.a.objectEach(e,o),t}r.d(e,"a",function(){return i});var o=r(0),c=r.n(o),i=function(t,e){return n({},t,e)}}])});

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(39)
}
var normalizeComponent = __webpack_require__(44)
/* script */
var __vue_script__ = __webpack_require__(45)
/* template */
var __vue_template__ = __webpack_require__(46)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-30973183"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/Chart.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-30973183", Component.options)
  } else {
    hotAPI.reload("data-v-30973183", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(42)("6942a2f5", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-30973183\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Chart.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-30973183\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Chart.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(41)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 41 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(43)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 43 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 44 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['chartdata', 'options'],
    data: function data() {
        return {
            chartType: 'Spline',
            colorInputIsSupported: null,
            animationDuration: 1000,
            chartOptions: {}

        };
    },
    beforeMount: function beforeMount() {
        var _this = this;

        var uri = '/api/insights';
        this.axios.get(uri).then(function (response) {
            var chart_data = response.data;
            _this.chartOptions = {

                chart: {
                    type: 'spline'

                },
                title: {
                    text: 'Users Retention Curve'
                },
                xAxis: {
                    categories: chart_data.xAxis,
                    title: { text: "The steps in the Onboarding Flow (based on the onboarding percentage)" }

                },
                yAxis: {
                    categories: chart_data.yAxis,
                    title: { text: "Percentage of users who have been or are still in this step" },
                    type: 'linear',
                    tickInterval: 20
                },
                tooltip: {
                    formatter: function formatter() {
                        return '<b>' + this.series.name + '</b>: ' + this.y + ' % of users at ' + this.x + '% of the Onboarding Steps';
                    }
                },
                series: chart_data.series,
                responsive: {
                    rules: [{
                        condition: {
                            maxWidth: 500
                        },
                        chartOptions: {
                            legend: {
                                align: 'center',
                                verticalAlign: 'bottom',
                                layout: 'horizontal'
                            }
                        }
                    }]
                }

            };
        });
    }
});

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("highcharts", {
    staticClass: "chart",
    attrs: { options: _vm.chartOptions }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-30973183", module.exports)
  }
}

/***/ }),
/* 47 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
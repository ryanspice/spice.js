webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

var global    = __webpack_require__(6)
  , core      = __webpack_require__(21)
  , hide      = __webpack_require__(18)
  , redefine  = __webpack_require__(14)
  , ctx       = __webpack_require__(16)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
    , key, own, out, exp;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && key in target;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if(target && !own)redefine(target, key, out);
    // export
    if(exports[key] != out)hide(exports, key, exp);
    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;  // forced
$export.G = 2;  // global
$export.S = 4;  // static
$export.P = 8;  // proto
$export.B = 16; // bind
$export.W = 32; // wrap
module.exports = $export;

/***/ },
/* 1 */
/***/ function(module, exports) {

var $Object = Object;
module.exports = {
  create:     $Object.create,
  getProto:   $Object.getPrototypeOf,
  isEnum:     {}.propertyIsEnumerable,
  getDesc:    $Object.getOwnPropertyDescriptor,
  setDesc:    $Object.defineProperty,
  setDescs:   $Object.defineProperties,
  getKeys:    $Object.keys,
  getNames:   $Object.getOwnPropertyNames,
  getSymbols: $Object.getOwnPropertySymbols,
  each:       [].forEach
};

/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

var store  = __webpack_require__(84)('wks')
  , uid    = __webpack_require__(27)
  , Symbol = __webpack_require__(6).Symbol;
module.exports = function(name){
  return store[name] || (store[name] =
    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "n", function() { return object; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return IApp; });
/* unused harmony export ICore */
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return IExt; });
/* harmony export (binding) */ __webpack_require__.d(exports, "p", function() { return ICookies; });
/* harmony export (binding) */ __webpack_require__.d(exports, "q", function() { return IUseragent; });
/* harmony export (binding) */ __webpack_require__.d(exports, "r", function() { return IMetatags; });
/* harmony export (binding) */ __webpack_require__.d(exports, "s", function() { return ICursor; });
/* harmony export (binding) */ __webpack_require__.d(exports, "t", function() { return IConnect; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return IOptions; });
/* harmony export (binding) */ __webpack_require__.d(exports, "f", function() { return IPace; });
/* harmony export (binding) */ __webpack_require__.d(exports, "g", function() { return IStep; });
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return IState; });
/* harmony export (binding) */ __webpack_require__.d(exports, "l", function() { return IRoom; });
/* harmony export (binding) */ __webpack_require__.d(exports, "k", function() { return IStatsBuffer; });
/* unused harmony export TClient */
/* harmony export (binding) */ __webpack_require__.d(exports, "h", function() { return IClient; });
/* harmony export (binding) */ __webpack_require__.d(exports, "i", function() { return IVector; });
/* unused harmony export vector */
/* unused harmony export app */
/* harmony export (binding) */ __webpack_require__.d(exports, "m", function() { return weakmap; });
/* unused harmony export method */
/* unused harmony export metatag */
/* unused harmony export element */
/* unused harmony export array */
/* harmony export (binding) */ __webpack_require__.d(exports, "o", function() { return array_string; });
/* unused harmony export array_number */
/* unused harmony export _vector */
/* unused harmony export _weakmap */
/* unused harmony export _number */
/* unused harmony export _string */
/* unused harmony export _method */
/* unused harmony export _object */
/* unused harmony export _array */
/* unused harmony export _array_string */
/* unused harmony export _array_number */
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// @typecheck: production, some


//console.time('Types2');

var _NodeCallback_ = function () {
	function _NodeCallback_(input) {
		return typeof input === 'function';
	}

	;
	Object.defineProperty(_NodeCallback_, Symbol.hasInstance, {
		value: function value(input) {
			return _NodeCallback_(input);
		}
	});
	return _NodeCallback_;
}();

var object = function () {
	function object(input) {
		return input instanceof Object;
	}

	;
	Object.defineProperty(object, Symbol.hasInstance, {
		value: function value(input) {
			return object(input);
		}
	});
	return object;
}();

//export type string = string;

/**
 * @interface App
 */

var IApp = function () {
	function IApp(input) {
		return input != null && typeof input.OnLoad === 'function' && input.client instanceof Object && IOptions(input.options) && typeof input.scale === 'number' && (input.main === undefined || IState(input.main));
	}

	;
	Object.defineProperty(IApp, Symbol.hasInstance, {
		value: function value(input) {
			return IApp(input);
		}
	});
	return IApp;
}();
/*



scale:number;
width:number;
height:number;

*/

/**
* @interface App
*/

var ICore = function () {
	function ICore(input) {
		return input != null && IOptions(input.options) && IExt(input.ext) && input.visuals instanceof Object && input.input instanceof Object && input.user instanceof dtoFacebook && input.client instanceof Object && input.math instanceof Object && typeof input.time === 'number' && typeof input.scale === 'number' && IApp(input.app) && typeof input.id === 'number';
	}

	;
	Object.defineProperty(ICore, Symbol.hasInstance, {
		value: function value(input) {
			return ICore(input);
		}
	});
	return ICore;
}();

/**
* @interface
*/

var IExt = function () {
	function IExt(input) {
		return input != null && input.useragent instanceof Object && input.cookies instanceof Object && IMetatags(input.metatag) && input.cursor instanceof Object && input.connect instanceof Object;
	}

	;
	Object.defineProperty(IExt, Symbol.hasInstance, {
		value: function value(input) {
			return IExt(input);
		}
	});
	return IExt;
}();

/**
* @interface
*/

var ICookies = function () {
	function ICookies(input) {
		return input != null && (typeof input === "undefined" ? "undefined" : _typeof(input)) === 'object';
	}

	;
	Object.defineProperty(ICookies, Symbol.hasInstance, {
		value: function value(input) {
			return ICookies(input);
		}
	});
	return ICookies;
}();

/**
* @interface
*/

var IUseragent = function () {
	function IUseragent(input) {
		return input != null && typeof input.mouse === 'boolean' && typeof input.touch === 'boolean' && typeof input.keyboard === 'boolean' && typeof input.windows === 'boolean' && typeof input.chrome === 'boolean' && typeof input.safari === 'boolean' && typeof input.iemobile === 'boolean' && typeof input.nokia === 'boolean' && typeof input.ie === 'boolean' && typeof input.ios === 'boolean' && typeof input.blackberry === 'boolean' && typeof input.playbook === 'boolean' && typeof input.bb10 === 'boolean' && typeof input.mobile === 'boolean' && typeof input.IE === 'function' && typeof input.iOS === 'function' && typeof input.Nokia === 'function' && typeof input.Mobile === 'function' && typeof input.Chrome === 'function' && typeof input.Safari === 'function' && typeof input.Desktop === 'function' && typeof input.Android === 'function' && typeof input.IEMobile === 'function' && typeof input.BlackBerry === 'function';
	}

	;
	Object.defineProperty(IUseragent, Symbol.hasInstance, {
		value: function value(input) {
			return IUseragent(input);
		}
	});
	return IUseragent;
}();

/**
* @interface
*/

var IMetatags = function () {
	function IMetatags(input) {
		return input != null && typeof input.ms_taphighlight === 'string' && typeof input.apple_webapp === 'string' && typeof input.apple_statusbar === 'string' && typeof input.devicedpi === 'boolean' && typeof input.devicewidth === 'boolean' && typeof input.width === 'number' && typeof input.cache === 'boolean' && typeof input.cacheage === 'number' && typeof input.metaFavicon === 'function' && typeof input.metaLink === 'function' && typeof input.new === 'function' && typeof input.append === 'function';
	}

	;
	Object.defineProperty(IMetatags, Symbol.hasInstance, {
		value: function value(input) {
			return IMetatags(input);
		}
	});
	return IMetatags;
}();

/**
* @interface
*/

var ICursor = function () {
	function ICursor(input) {
		return input != null && typeof input.current === 'string' && typeof input.last === 'string' && typeof input.changed === 'boolean' && typeof input.count === 'number' && typeof input.lock === 'number' && typeof input.delay === 'number' && typeof input.set === 'function';
	}

	;
	Object.defineProperty(ICursor, Symbol.hasInstance, {
		value: function value(input) {
			return ICursor(input);
		}
	});
	return ICursor;
}();

/**
* @interface
*/

var IConnect = function () {
	function IConnect(input) {
		return input != null && typeof input.DisableDefaultCallback === 'boolean' && input.XMLHttpRequest instanceof XMLHttpRequest && typeof input.Error === 'string' && typeof input.ErrorAttempt === 'string' && typeof input.ErrorOffline === 'string' && typeof input.ConnectionAttempts === 'number' && typeof input.offline === 'boolean' && typeof input.testurl === 'string' && input.window instanceof window && typeof input.XML === 'function' && typeof input.ready === 'function';
	}

	;
	Object.defineProperty(IConnect, Symbol.hasInstance, {
		value: function value(input) {
			return IConnect(input);
		}
	});
	return IConnect;
}();

/**
* @interface Options
*/

var IOptions = function () {
	function IOptions(input) {
		return input != null && typeof input.overridescroll === 'boolean' && typeof input.drag === 'number' && typeof input.targetfps === 'number' && typeof input.mute === 'boolean' && input.paths instanceof Object && input.target instanceof Object && input.global instanceof Object && input.flags instanceof Object && input.canvas instanceof Object && input.msFlags instanceof Object && input.override instanceof Object && typeof input.get === 'function' && typeof input.set === 'function';
	}

	;
	Object.defineProperty(IOptions, Symbol.hasInstance, {
		value: function value(input) {
			return IOptions(input);
		}
	});
	return IOptions;
}();

/**
 * @interface Pace
 */

var IPace = function () {
	function IPace(input) {
		return input != null && typeof input.delta === 'number' && typeof input.offset === 'number' && typeof input.rate === 'number' && typeof input.targetFPS === 'number' && typeof input.currentTime === 'number' && typeof input.Step === 'function' && typeof input.CalculateDelta === 'function';
	}

	;
	Object.defineProperty(IPace, Symbol.hasInstance, {
		value: function value(input) {
			return IPace(input);
		}
	});
	return IPace;
}();

/**
 * @interface Step
 */

var IStep = function () {
	function IStep(input) {
		return input != null && IApp(input.app) && typeof input.delta === 'number' && typeof input.frames === 'number' && typeof input.pending === 'number' && typeof input.padding === 'number' && typeof input.increment === 'number' && typeof input.delta_speed === 'number' && typeof input.fps === 'number' && typeof input.focus === 'function' && typeof input.clean === 'function' && typeof input.tick === 'function' && typeof input.second === 'function' && typeof input.first === 'function';
	}

	;
	Object.defineProperty(IStep, Symbol.hasInstance, {
		value: function value(input) {
			return IStep(input);
		}
	});
	return IStep;
}();

/**
 * @interface State
 */

var IState = function () {
	function IState(input) {
		return input != null && (input.name === undefined || typeof input.name === 'string') && (input.app === undefined || input.app instanceof Object) && (input.visuals === undefined || input.visuals instanceof Object) && (input.graphics === undefined || input.graphics instanceof Object) && (input.initalized === undefined || typeof input.initalized === 'boolean') && typeof input.update === 'function' && typeof input.draw === 'function' && typeof input.init === 'function';
	}

	;
	Object.defineProperty(IState, Symbol.hasInstance, {
		value: function value(input) {
			return IState(input);
		}
	});
	return IState;
}();

/**
 * @interface Room
 */

var IRoom = function () {
	function IRoom(input) {
		return input != null && typeof input.started === 'boolean' && typeof input.Started === 'function';
	}

	;
	Object.defineProperty(IRoom, Symbol.hasInstance, {
		value: function value(input) {
			return IRoom(input);
		}
	});
	return IRoom;
}();

/**
 * @interface StatsBuffer
 */

var IStatsBuffer = function () {
	function IStatsBuffer(input) {
		return input != null && typeof input.x === 'number' && typeof input.y === 'number' && typeof input.w === 'number' && typeof input.h === 'number' && typeof input.s === 'number' && typeof input.a === 'number' && typeof input.c === 'number' && typeof input.colour === 'string' && typeof input.oldcol === 'string' && typeof input.set === 'function';
	}

	;
	Object.defineProperty(IStatsBuffer, Symbol.hasInstance, {
		value: function value(input) {
			return IStatsBuffer(input);
		}
	});
	return IStatsBuffer;
}();

var TClient = function () {
	function TClient(input) {
		return input != null && typeof input.discription === 'string' && IVector(input.projectSize) && object(input.app) && object(input.Math) && object(input.particles) && object(input.visuals) && object(input.graphics) && object(input.ext) && object(input.room) && object(input.audio) && object(input.mainLoop) && object(input.second) && object(input.loader) && object(input.update) && object(input.renderer) && object(input.data) && typeof input.width === 'number' && typeof input.height === 'number' && typeof input.setWidth === 'number' && typeof input.setHeight === 'number';
	}

	;
	Object.defineProperty(TClient, Symbol.hasInstance, {
		value: function value(input) {
			return TClient(input);
		}
	});
	return TClient;
}();

var IClient = function () {
	function IClient(input) {
		return TClient(input);
	}

	;
	Object.defineProperty(IClient, Symbol.hasInstance, {
		value: function value(input) {
			return IClient(input);
		}
	});
	return IClient;
}();

var IVector = function () {
	function IVector(input) {
		return input != null && typeof input.x === 'number' && typeof input.y === 'number' && typeof input.Difference === 'function' && typeof input.equals === 'function' && typeof input.sum === 'function' && typeof input.multiply === 'function' && typeof input.offset === 'function';
	}

	;
	Object.defineProperty(IVector, Symbol.hasInstance, {
		value: function value(input) {
			return IVector(input);
		}
	});
	return IVector;
}();

var vector = function () {
	function vector(input) {
		return input != null && input.x === 0 && input.y === 0;
	}

	;
	Object.defineProperty(vector, Symbol.hasInstance, {
		value: function value(input) {
			return vector(input);
		}
	});
	return vector;
}();

var app = function () {
	function app(input) {
		return input != null && input.app instanceof APP && input.visuals instanceof VISUALS && input.graphics instanceof GRAPHICS;
	}

	;
	Object.defineProperty(app, Symbol.hasInstance, {
		value: function value(input) {
			return app(input);
		}
	});
	return app;
}();

var _weakmap = function () {
	function _weakmap(input) {
		return input instanceof WeakMap;
	}

	;
	Object.defineProperty(_weakmap, Symbol.hasInstance, {
		value: function value(input) {
			return _weakmap(input);
		}
	});
	return _weakmap;
}();

var weakmap = function () {
	function weakmap(input) {
		return input instanceof WeakMap;
	}

	;
	Object.defineProperty(weakmap, Symbol.hasInstance, {
		value: function value(input) {
			return weakmap(input);
		}
	});
	return weakmap;
}();

//var weakmap:weakmap;

//export type number = number;
var method = function () {
	function method(input) {
		return typeof input === 'function';
	}

	;
	Object.defineProperty(method, Symbol.hasInstance, {
		value: function value(input) {
			return method(input);
		}
	});
	return method;
}();

var _metatag = document.createElement('meta');

var metatag = function () {
	function metatag(input) {
		return input instanceof _metatag;
	}

	;
	Object.defineProperty(metatag, Symbol.hasInstance, {
		value: function value(input) {
			return metatag(input);
		}
	});
	return metatag;
}();

var element = function () {
	function element(input) {
		return object(input);
	}

	;
	Object.defineProperty(element, Symbol.hasInstance, {
		value: function value(input) {
			return element(input);
		}
	});
	return element;
}();

var array = function () {
	function array(input) {
		return Array.isArray(input);
	}

	;
	Object.defineProperty(array, Symbol.hasInstance, {
		value: function value(input) {
			return array(input);
		}
	});
	return array;
}();
var array_string = function () {
	function array_string(input) {
		return Array.isArray(input) && input.every(function (item) {
			return typeof item === 'string';
		});
	}

	;
	Object.defineProperty(array_string, Symbol.hasInstance, {
		value: function value(input) {
			return array_string(input);
		}
	});
	return array_string;
}();
var array_number = function () {
	function array_number(input) {
		return Array.isArray(input) && input.every(function (item) {
			return typeof item === 'number';
		});
	}

	;
	Object.defineProperty(array_number, Symbol.hasInstance, {
		value: function value(input) {
			return array_number(input);
		}
	});
	return array_number;
}();

var _object = {};

if (!object(_object)) {
	throw new TypeError("Value of variable \"_object\" violates contract.\n\nExpected:\nobject\n\nGot:\n" + _inspect(_object));
}

var _string = "";
var _vector = { x: 0, y: 0 };

//window.t = weakmap;

//const _weakmap:WeakMap;

//console.log(_weakmap,weakmap);


if (!vector(_vector)) {
	throw new TypeError("Value of variable \"_vector\" violates contract.\n\nExpected:\nvector\n\nGot:\n" + _inspect(_vector));
}

var _number = 0;
var _method = function _method() {};

if (!method(_method)) {
	throw new TypeError("Value of variable \"_method\" violates contract.\n\nExpected:\nmethod\n\nGot:\n" + _inspect(_method));
}

var _array = [];

if (!array(_array)) {
	throw new TypeError("Value of variable \"_array\" violates contract.\n\nExpected:\narray\n\nGot:\n" + _inspect(_array));
}

var _array_number = [0];

if (!array_number(_array_number)) {
	throw new TypeError("Value of variable \"_array_number\" violates contract.\n\nExpected:\narray_number\n\nGot:\n" + _inspect(_array_number));
}

var _array_string = [""];

if (!array_string(_array_string)) {
	throw new TypeError("Value of variable \"_array_string\" violates contract.\n\nExpected:\narray_string\n\nGot:\n" + _inspect(_array_string));
}

var types = [['_object', _object], ['_vector', _vector], ['_string', _string],
/*    ['_weakmap',_weakmap],*/
['_number', _number], ['_method', _method], ['_array', _array], ['_array_number', _array_number], ['_array_string', _array_string]];

if (!array(types)) {
	throw new TypeError("Value of variable \"types\" violates contract.\n\nExpected:\narray\n\nGot:\n" + _inspect(types));
}

var _ITypes = function () {
	function _ITypes(input) {
		return input != null && array(input.list) && method(input.get);
	}

	;
	Object.defineProperty(_ITypes, Symbol.hasInstance, {
		value: function value(input) {
			return _ITypes(input);
		}
	});
	return _ITypes;
}();

;

var ITypes = function () {
	function ITypes() {
		_classCallCheck(this, ITypes);

		this.get().forEach(function (entry, e) {

			window[entry[0]] = entry[1];
		});
	}

	_createClass(ITypes, [{
		key: "get",
		value: function get() {
			function _ref2(_id2) {
				if (!array(_id2)) {
					throw new TypeError("Function return value violates contract.\n\nExpected:\narray\n\nGot:\n" + _inspect(_id2));
				}

				return _id2;
			}

			return _ref2(types);
		}
	}]);

	return ITypes;
}();

;

//console.timeEnd('Types2');



/* harmony default export */ exports["b"] = ITypes;

function _inspect(input, depth) {
	var maxDepth = 4;
	var maxKeys = 15;

	if (depth === undefined) {
		depth = 0;
	}

	depth += 1;

	if (input === null) {
		return 'null';
	} else if (input === undefined) {
		return 'void';
	} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
		return typeof input === "undefined" ? "undefined" : _typeof(input);
	} else if (Array.isArray(input)) {
		if (input.length > 0) {
			var _ret = function () {
				if (depth > maxDepth) return {
						v: '[...]'
					};

				var first = _inspect(input[0], depth);

				if (input.every(function (item) {
					return _inspect(item, depth) === first;
				})) {
					return {
						v: first.trim() + '[]'
					};
				} else {
					return {
						v: '[' + input.slice(0, maxKeys).map(function (item) {
							return _inspect(item, depth);
						}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
					};
				}
			}();

			if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
		} else {
			return 'Array';
		}
	} else {
		var keys = Object.keys(input);

		if (!keys.length) {
			if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
				return input.constructor.name;
			} else {
				return 'Object';
			}
		}

		if (depth > maxDepth) return '{...}';
		var indent = '  '.repeat(depth - 1);
		var entries = keys.slice(0, maxKeys).map(function (key) {
			return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
		}).join('\n  ' + indent);

		if (keys.length >= maxKeys) {
			entries += '\n  ' + indent + '...';
		}

		if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
			return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
		} else {
			return '{\n  ' + indent + entries + '\n' + indent + '}';
		}
	}
}

/***/ },
/* 6 */
/***/ function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_ITypes__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_js__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thingy_js__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return _SJSClass; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.time('SJS:B:sjs.js');

var IApp = __WEBPACK_IMPORTED_MODULE_0__interfaces_ITypes__["a" /* IApp */];






/** SJSClass - Used to create objects which inherit the Application.
* @module */

var _SJSClass = function (_WeakMapThingy) {
	_inherits(_SJSClass, _WeakMapThingy);

	function _SJSClass(app) {
		_classCallCheck(this, _SJSClass);

		if (!IApp(app)) {
			throw new TypeError('Value of argument "app" violates contract.\n\nExpected:\nIApp\n\nGot:\n' + _inspect(app));
		}

		var _this = _possibleConstructorReturn(this, (_SJSClass.__proto__ || Object.getPrototypeOf(_SJSClass)).call(this, new WeakMap()));

		var appReference = app;

		if (!IApp(appReference)) {
			throw new TypeError('Value of variable "appReference" violates contract.\n\nExpected:\nIApp\n\nGot:\n' + _inspect(appReference));
		}

		if (typeof appReference == 'undefined') {

			appReference = window.SJS.controller.list();

			if (!IApp(appReference)) {
				throw new TypeError('Value of variable "appReference" violates contract.\n\nExpected:\nIApp\n\nGot:\n' + _inspect(appReference));
			}

			_this.warn('Unable to find app reference.', 'Using ', appReference, ' for ', _this);
		}

		if (_this.constructor.name == "Client") {
			//return;
		}

		if (typeof appReference != 'undefined') {

			_this.app = appReference;

			if (!IApp(_this.app)) {
				throw new TypeError('Value of "this.app" violates contract.\n\nExpected:\nIApp\n\nGot:\n' + _inspect(_this.app));
			}

			if (appReference.client && appReference.client.visuals) {

				_this.visuals = appReference.client.visuals;
			} else {

				_this.visuals = null;
				_this.warn('Unable to find app visuals reference.', 'Using ', appReference, ' for ', _this);
			}

			if (appReference.client && appReference.client.graphics) {

				_this.graphics = appReference.client.graphics;
			} else {

				_this.graphics = null;
				console.trace('Unable to find app loader reference.', 'Using ', appReference, ' for ', _this);
			}
		} else {

			_this.graphics = null;
			_this.visuals = null;
			_this.warn('Unable to find app reference.', 'Using ', appReference, ' for ', _this);
		}

		return _this;
	}

	/**
 * @param */

	/** This is the constructor for the class
 * @param {Object} app[ - instance of spicejs] */


	_createClass(_SJSClass, [{
		key: 'warn',
		value: function warn(a0, a1, a2, a3, a4) {

			//console.trace(a0,this);
			//console.log(this);
			console.warn(a1, a2, a3, a4);
		}

		/**
  * @param */

	}, {
		key: 'log',
		value: function log(a0) {

			console.trace(a0, '\n', this);
		}
	}]);

	return _SJSClass;
}(__WEBPACK_IMPORTED_MODULE_2__thingy_js__["a" /* default */]);;

console.timeEnd('SJS:B:sjs.js');

function _inspect(input, depth) {
	var maxDepth = 4;
	var maxKeys = 15;

	if (depth === undefined) {
		depth = 0;
	}

	depth += 1;

	if (input === null) {
		return 'null';
	} else if (input === undefined) {
		return 'void';
	} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
		return typeof input === 'undefined' ? 'undefined' : _typeof(input);
	} else if (Array.isArray(input)) {
		if (input.length > 0) {
			var _ret = function () {
				if (depth > maxDepth) return {
						v: '[...]'
					};

				var first = _inspect(input[0], depth);

				if (input.every(function (item) {
					return _inspect(item, depth) === first;
				})) {
					return {
						v: first.trim() + '[]'
					};
				} else {
					return {
						v: '[' + input.slice(0, maxKeys).map(function (item) {
							return _inspect(item, depth);
						}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
					};
				}
			}();

			if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
		} else {
			return 'Array';
		}
	} else {
		var keys = Object.keys(input);

		if (!keys.length) {
			if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
				return input.constructor.name;
			} else {
				return 'Object';
			}
		}

		if (depth > maxDepth) return '{...}';
		var indent = '  '.repeat(depth - 1);
		var entries = keys.slice(0, maxKeys).map(function (key) {
			return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
		}).join('\n  ' + indent);

		if (keys.length >= maxKeys) {
			entries += '\n  ' + indent + '...';
		}

		if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
			return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
		} else {
			return '{\n  ' + indent + entries + '\n' + indent + '}';
		}
	}
}

/***/ },
/* 9 */
/***/ function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(34)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var support = __webpack_require__(28);
var compressions = __webpack_require__(58);
var nodeBuffer = __webpack_require__(59);
/**
 * Convert a string to a "binary string" : a string containing only char codes between 0 and 255.
 * @param {string} str the string to transform.
 * @return {String} the binary string.
 */
exports.string2binary = function(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        result += String.fromCharCode(str.charCodeAt(i) & 0xff);
    }
    return result;
};
exports.arrayBuffer2Blob = function(buffer, mimeType) {
    exports.checkSupport("blob");
	mimeType = mimeType || 'application/zip';

    try {
        // Blob constructor
        return new Blob([buffer], {
            type: mimeType
        });
    }
    catch (e) {

        try {
            // deprecated, browser only, old way
            var Builder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
            var builder = new Builder();
            builder.append(buffer);
            return builder.getBlob(mimeType);
        }
        catch (e) {

            // well, fuck ?!
            throw new Error("Bug : can't construct the Blob.");
        }
    }


};
/**
 * The identity function.
 * @param {Object} input the input.
 * @return {Object} the same input.
 */
function identity(input) {
    return input;
}

/**
 * Fill in an array with a string.
 * @param {String} str the string to use.
 * @param {Array|ArrayBuffer|Uint8Array|Buffer} array the array to fill in (will be mutated).
 * @return {Array|ArrayBuffer|Uint8Array|Buffer} the updated array.
 */
function stringToArrayLike(str, array) {
    for (var i = 0; i < str.length; ++i) {
        array[i] = str.charCodeAt(i) & 0xFF;
    }
    return array;
}

/**
 * Transform an array-like object to a string.
 * @param {Array|ArrayBuffer|Uint8Array|Buffer} array the array to transform.
 * @return {String} the result.
 */
function arrayLikeToString(array) {
    // Performances notes :
    // --------------------
    // String.fromCharCode.apply(null, array) is the fastest, see
    // see http://jsperf.com/converting-a-uint8array-to-a-string/2
    // but the stack is limited (and we can get huge arrays !).
    //
    // result += String.fromCharCode(array[i]); generate too many strings !
    //
    // This code is inspired by http://jsperf.com/arraybuffer-to-string-apply-performance/2
    var chunk = 65536;
    var result = [],
        len = array.length,
        type = exports.getTypeOf(array),
        k = 0,
        canUseApply = true;
      try {
         switch(type) {
            case "uint8array":
               String.fromCharCode.apply(null, new Uint8Array(0));
               break;
            case "nodebuffer":
               String.fromCharCode.apply(null, nodeBuffer(0));
               break;
         }
      } catch(e) {
         canUseApply = false;
      }

      // no apply : slow and painful algorithm
      // default browser on android 4.*
      if (!canUseApply) {
         var resultStr = "";
         for(var i = 0; i < array.length;i++) {
            resultStr += String.fromCharCode(array[i]);
         }
    return resultStr;
    }
    while (k < len && chunk > 1) {
        try {
            if (type === "array" || type === "nodebuffer") {
                result.push(String.fromCharCode.apply(null, array.slice(k, Math.min(k + chunk, len))));
            }
            else {
                result.push(String.fromCharCode.apply(null, array.subarray(k, Math.min(k + chunk, len))));
            }
            k += chunk;
        }
        catch (e) {
            chunk = Math.floor(chunk / 2);
        }
    }
    return result.join("");
}

exports.applyFromCharCode = arrayLikeToString;


/**
 * Copy the data from an array-like to an other array-like.
 * @param {Array|ArrayBuffer|Uint8Array|Buffer} arrayFrom the origin array.
 * @param {Array|ArrayBuffer|Uint8Array|Buffer} arrayTo the destination array which will be mutated.
 * @return {Array|ArrayBuffer|Uint8Array|Buffer} the updated destination array.
 */
function arrayLikeToArrayLike(arrayFrom, arrayTo) {
    for (var i = 0; i < arrayFrom.length; i++) {
        arrayTo[i] = arrayFrom[i];
    }
    return arrayTo;
}

// a matrix containing functions to transform everything into everything.
var transform = {};

// string to ?
transform["string"] = {
    "string": identity,
    "array": function(input) {
        return stringToArrayLike(input, new Array(input.length));
    },
    "arraybuffer": function(input) {
        return transform["string"]["uint8array"](input).buffer;
    },
    "uint8array": function(input) {
        return stringToArrayLike(input, new Uint8Array(input.length));
    },
    "nodebuffer": function(input) {
        return stringToArrayLike(input, nodeBuffer(input.length));
    }
};

// array to ?
transform["array"] = {
    "string": arrayLikeToString,
    "array": identity,
    "arraybuffer": function(input) {
        return (new Uint8Array(input)).buffer;
    },
    "uint8array": function(input) {
        return new Uint8Array(input);
    },
    "nodebuffer": function(input) {
        return nodeBuffer(input);
    }
};

// arraybuffer to ?
transform["arraybuffer"] = {
    "string": function(input) {
        return arrayLikeToString(new Uint8Array(input));
    },
    "array": function(input) {
        return arrayLikeToArrayLike(new Uint8Array(input), new Array(input.byteLength));
    },
    "arraybuffer": identity,
    "uint8array": function(input) {
        return new Uint8Array(input);
    },
    "nodebuffer": function(input) {
        return nodeBuffer(new Uint8Array(input));
    }
};

// uint8array to ?
transform["uint8array"] = {
    "string": arrayLikeToString,
    "array": function(input) {
        return arrayLikeToArrayLike(input, new Array(input.length));
    },
    "arraybuffer": function(input) {
        return input.buffer;
    },
    "uint8array": identity,
    "nodebuffer": function(input) {
        return nodeBuffer(input);
    }
};

// nodebuffer to ?
transform["nodebuffer"] = {
    "string": arrayLikeToString,
    "array": function(input) {
        return arrayLikeToArrayLike(input, new Array(input.length));
    },
    "arraybuffer": function(input) {
        return transform["nodebuffer"]["uint8array"](input).buffer;
    },
    "uint8array": function(input) {
        return arrayLikeToArrayLike(input, new Uint8Array(input.length));
    },
    "nodebuffer": identity
};

/**
 * Transform an input into any type.
 * The supported output type are : string, array, uint8array, arraybuffer, nodebuffer.
 * If no output type is specified, the unmodified input will be returned.
 * @param {String} outputType the output type.
 * @param {String|Array|ArrayBuffer|Uint8Array|Buffer} input the input to convert.
 * @throws {Error} an Error if the browser doesn't support the requested output type.
 */
exports.transformTo = function(outputType, input) {
    if (!input) {
        // undefined, null, etc
        // an empty string won't harm.
        input = "";
    }
    if (!outputType) {
        return input;
    }
    exports.checkSupport(outputType);
    var inputType = exports.getTypeOf(input);
    var result = transform[inputType][outputType](input);
    return result;
};

/**
 * Return the type of the input.
 * The type will be in a format valid for JSZip.utils.transformTo : string, array, uint8array, arraybuffer.
 * @param {Object} input the input to identify.
 * @return {String} the (lowercase) type of the input.
 */
exports.getTypeOf = function(input) {
    if (typeof input === "string") {
        return "string";
    }
    if (Object.prototype.toString.call(input) === "[object Array]") {
        return "array";
    }
    if (support.nodebuffer && nodeBuffer.test(input)) {
        return "nodebuffer";
    }
    if (support.uint8array && input instanceof Uint8Array) {
        return "uint8array";
    }
    if (support.arraybuffer && input instanceof ArrayBuffer) {
        return "arraybuffer";
    }
};

/**
 * Throw an exception if the type is not supported.
 * @param {String} type the type to check.
 * @throws {Error} an Error if the browser doesn't support the requested type.
 */
exports.checkSupport = function(type) {
    var supported = support[type.toLowerCase()];
    if (!supported) {
        throw new Error(type + " is not supported by this browser");
    }
};
exports.MAX_VALUE_16BITS = 65535;
exports.MAX_VALUE_32BITS = -1; // well, "\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF" is parsed as -1

/**
 * Prettify a string read as binary.
 * @param {string} str the string to prettify.
 * @return {string} a pretty string.
 */
exports.pretty = function(str) {
    var res = '',
        code, i;
    for (i = 0; i < (str || "").length; i++) {
        code = str.charCodeAt(i);
        res += '\\x' + (code < 16 ? "0" : "") + code.toString(16).toUpperCase();
    }
    return res;
};

/**
 * Find a compression registered in JSZip.
 * @param {string} compressionMethod the method magic to find.
 * @return {Object|null} the JSZip compression object, null if none found.
 */
exports.findCompression = function(compressionMethod) {
    for (var method in compressions) {
        if (!compressions.hasOwnProperty(method)) {
            continue;
        }
        if (compressions[method].magic === compressionMethod) {
            return compressions[method];
        }
    }
    return null;
};
/**
* Cross-window, cross-Node-context regular expression detection
* @param  {Object}  object Anything
* @return {Boolean}        true if the object is a regular expression,
* false otherwise
*/
exports.isRegExp = function (object) {
    return Object.prototype.toString.call(object) === "[object RegExp]";
};

/**
 * Merge the objects passed as parameters into a new one.
 * @private
 * @param {...Object} var_args All objects to merge.
 * @return {Object} a new object with the data of the others.
 */
exports.extend = function() {
    var result = {}, i, attr;
    for (i = 0; i < arguments.length; i++) { // arguments is not enumerable in some browsers
        for (attr in arguments[i]) {
            if (arguments[i].hasOwnProperty(attr) && typeof result[attr] === "undefined") {
                result[attr] = arguments[i][attr];
            }
        }
    }
    return result;
};



/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(7)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(0)
  , core    = __webpack_require__(21)
  , fails   = __webpack_require__(7);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

// add fake Function#toString
// for correct work wrapped methods / constructors with methods like LoDash isNative
var global    = __webpack_require__(6)
  , hide      = __webpack_require__(18)
  , SRC       = __webpack_require__(27)('src')
  , TO_STRING = 'toString'
  , $toString = Function[TO_STRING]
  , TPL       = ('' + $toString).split(TO_STRING);

__webpack_require__(21).inspectSource = function(it){
  return $toString.call(it);
};

(module.exports = function(O, key, val, safe){
  if(typeof val == 'function'){
    val.hasOwnProperty(SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
    val.hasOwnProperty('name') || hide(val, 'name', key);
  }
  if(O === global){
    O[key] = val;
  } else {
    if(!safe)delete O[key];
    hide(O, key, val);
  }
})(Function.prototype, TO_STRING, function toString(){
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(40)
  , defined = __webpack_require__(17);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(25);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ },
/* 17 */
/***/ function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

var $          = __webpack_require__(1)
  , createDesc = __webpack_require__(24);
module.exports = __webpack_require__(12) ? function(object, key, value){
  return $.setDesc(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_ITypes__ = __webpack_require__(5);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Types = new __WEBPACK_IMPORTED_MODULE_0__interfaces_ITypes__["b" /* default */]();

/** The Main Inherited Interface for SpiceJS, interfaces must have a private weakmap which can be accessed by *.get('key')
* You can also access the name of an interface with *.name
* @interface
* @private
*/

var _IMap = new WeakMap();

var K = function () {
    function K(input) {
        return true;
    }

    ;
    Object.defineProperty(K, Symbol.hasInstance, {
        value: function value(input) {
            return K(input);
        }
    });
    return K;
}();

var V = function () {
    function V(input) {
        return true;
    }

    ;
    Object.defineProperty(V, Symbol.hasInstance, {
        value: function value(input) {
            return V(input);
        }
    });
    return V;
}();

var WeakMapThingy = function () {

    /**  @type {constructor} */

    function WeakMapThingy(x) {
        _classCallCheck(this, WeakMapThingy);

        this.map = _IMap;


        //console.log(this.constructor.map.set(this,this.constructor.properties),this)

        if (typeof x != 'undefined') {

            this.constructor.map = x;
            //this.private = true;
            this.constructor.map.set(this, this.constructor.properties);
        } else {
            console.warn(x);

            x = new WeakMap();
            this.constructor.map = x;
            //this.private = false;
            this.constructor.map.set(this, this.constructor.properties);
        }
    }

    /**  @type {WeakMap} */

    _createClass(WeakMapThingy, [{
        key: 'get',


        /**  @type {mixed} */

        value: function get(value) {
            function _ref2(_id2) {
                if (!(_id2 instanceof Object)) {
                    throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id2));
                }

                return _id2;
            }

            if (!(typeof value === 'string')) {
                throw new TypeError('Value of argument "value" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(value));
            }

            return _ref2(this.constructor.map.get(this)[value]);
        }

        /**  @type {string} */
        /*
            get name():mixed {
                return this.constructor.map.get(this)['name'];
            }
        */

    }, {
        key: 'map',
        set: function set(value) {

            this.constructor.map = value;
        }
    }]);

    return WeakMapThingy;
}();

WeakMapThingy.properties = { name: 'sjsclass', map: null, version: 0 };
WeakMapThingy.map = _IMap;
;

/* harmony default export */ exports["a"] = WeakMapThingy;

function _inspect(input, depth) {
    var maxDepth = 4;
    var maxKeys = 15;

    if (depth === undefined) {
        depth = 0;
    }

    depth += 1;

    if (input === null) {
        return 'null';
    } else if (input === undefined) {
        return 'void';
    } else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
        return typeof input === 'undefined' ? 'undefined' : _typeof(input);
    } else if (Array.isArray(input)) {
        if (input.length > 0) {
            var _ret = function () {
                if (depth > maxDepth) return {
                        v: '[...]'
                    };

                var first = _inspect(input[0], depth);

                if (input.every(function (item) {
                    return _inspect(item, depth) === first;
                })) {
                    return {
                        v: first.trim() + '[]'
                    };
                } else {
                    return {
                        v: '[' + input.slice(0, maxKeys).map(function (item) {
                            return _inspect(item, depth);
                        }).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
                    };
                }
            }();

            if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
        } else {
            return 'Array';
        }
    } else {
        var keys = Object.keys(input);

        if (!keys.length) {
            if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
                return input.constructor.name;
            } else {
                return 'Object';
            }
        }

        if (depth > maxDepth) return '{...}';
        var indent = '  '.repeat(depth - 1);
        var entries = keys.slice(0, maxKeys).map(function (key) {
            return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
        }).join('\n  ' + indent);

        if (keys.length >= maxKeys) {
            entries += '\n  ' + indent + '...';
        }

        if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
            return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
        } else {
            return '{\n  ' + indent + entries + '\n' + indent + '}';
        }
    }
}

/***/ },
/* 20 */
/***/ function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ },
/* 21 */
/***/ function(module, exports) {

var core = module.exports = {version: '1.2.6'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(17);
module.exports = function(it){
  return Object(defined(it));
};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

"use strict";



var TYPED_OK =  (typeof Uint8Array !== 'undefined') &&
                (typeof Uint16Array !== 'undefined') &&
                (typeof Int32Array !== 'undefined');


exports.assign = function (obj /*from1, from2, from3, ...*/) {
  var sources = Array.prototype.slice.call(arguments, 1);
  while (sources.length) {
    var source = sources.shift();
    if (!source) { continue; }

    if (typeof source !== 'object') {
      throw new TypeError(source + 'must be non-object');
    }

    for (var p in source) {
      if (source.hasOwnProperty(p)) {
        obj[p] = source[p];
      }
    }
  }

  return obj;
};


// reduce buffer size, avoiding mem copy
exports.shrinkBuf = function (buf, size) {
  if (buf.length === size) { return buf; }
  if (buf.subarray) { return buf.subarray(0, size); }
  buf.length = size;
  return buf;
};


var fnTyped = {
  arraySet: function (dest, src, src_offs, len, dest_offs) {
    if (src.subarray && dest.subarray) {
      dest.set(src.subarray(src_offs, src_offs + len), dest_offs);
      return;
    }
    // Fallback to ordinary array
    for (var i = 0; i < len; i++) {
      dest[dest_offs + i] = src[src_offs + i];
    }
  },
  // Join array of chunks to single array.
  flattenChunks: function (chunks) {
    var i, l, len, pos, chunk, result;

    // calculate data length
    len = 0;
    for (i = 0, l = chunks.length; i < l; i++) {
      len += chunks[i].length;
    }

    // join chunks
    result = new Uint8Array(len);
    pos = 0;
    for (i = 0, l = chunks.length; i < l; i++) {
      chunk = chunks[i];
      result.set(chunk, pos);
      pos += chunk.length;
    }

    return result;
  }
};

var fnUntyped = {
  arraySet: function (dest, src, src_offs, len, dest_offs) {
    for (var i = 0; i < len; i++) {
      dest[dest_offs + i] = src[src_offs + i];
    }
  },
  // Join array of chunks to single array.
  flattenChunks: function (chunks) {
    return [].concat.apply([], chunks);
  }
};


// Enable/Disable typed arrays use, for testing
//
exports.setTyped = function (on) {
  if (on) {
    exports.Buf8  = Uint8Array;
    exports.Buf16 = Uint16Array;
    exports.Buf32 = Int32Array;
    exports.assign(exports, fnTyped);
  } else {
    exports.Buf8  = Array;
    exports.Buf16 = Array;
    exports.Buf32 = Array;
    exports.assign(exports, fnUntyped);
  }
};

exports.setTyped(TYPED_OK);


/***/ },
/* 24 */
/***/ function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ },
/* 25 */
/***/ function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(4)('unscopables')
  , ArrayProto  = Array.prototype;
if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(18)(ArrayProto, UNSCOPABLES, {});
module.exports = function(key){
  ArrayProto[UNSCOPABLES][key] = true;
};

/***/ },
/* 27 */
/***/ function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
exports.base64 = true;
exports.array = true;
exports.string = true;
exports.arraybuffer = typeof ArrayBuffer !== "undefined" && typeof Uint8Array !== "undefined";
// contains true if JSZip can read/generate nodejs Buffer, false otherwise.
// Browserify will provide a Buffer implementation for browsers, which is
// an augmented Uint8Array (i.e., can be used as either Buffer or U8).
exports.nodebuffer = typeof Buffer !== "undefined";
// contains true if JSZip can read/generate Uint8Array, false otherwise.
exports.uint8array = typeof Uint8Array !== "undefined";

if (typeof ArrayBuffer === "undefined") {
    exports.blob = false;
}
else {
    var buffer = new ArrayBuffer(0);
    try {
        exports.blob = new Blob([buffer], {
            type: "application/zip"
        }).size === 0;
    }
    catch (e) {
        try {
            var Builder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
            var builder = new Builder();
            builder.append(buffer);
            exports.blob = builder.getBlob('application/zip').size === 0;
        }
        catch (e) {
            exports.blob = false;
        }
    }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(90).Buffer))

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__thingy__ = __webpack_require__(19);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
import type {

	IVector

} from "../interfaces/ITypes";
*/


/** Vector2
* @module
* @access public
* @example let vector = new Math.Vector2(1,1); */
/*
export class Vector2 extends WeakMapThingy<IVector> {

    static properties:object = { name:'Vector2',x:0, y:0 };

    constructor(x:number = 0, y:number = 0){
        super(new weakmap());
        this.position = {x ,y};
    };

}
*/
/** Vector
* @module
* @access public
* @example
* let vector = new Vector(1,1);
*/

var Vector = function (_WeakMapThingy) {
    _inherits(Vector, _WeakMapThingy);

    _createClass(Vector, [{
        key: "position",


        /**
        * Get vector position
        * @type {Object}
        */

        get: function get() {
            function _ref(_id) {
                if (!(_id instanceof Object)) {
                    throw new TypeError("Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n" + _inspect(_id));
                }

                return _id;
            }

            return _ref(this);
        }

        /**
        * Set vector position
        * @type {Object}
        * @example
        * var PointA = new Vector(2,1);
        * PointA.position = new Vector(5,5);
        * PointA.position = {x:0,y:0};
        */

        /** Set Vector private variables
           * @type {Object}
           * @protected */

        ,
        set: function set(value) {

            this.x = value.x;

            if (!(typeof this.x === 'number')) {
                throw new TypeError("Value of \"this.x\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(this.x));
            }

            this.y = value.y;

            if (!(typeof this.y === 'number')) {
                throw new TypeError("Value of \"this.y\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(this.y));
            }
        }

        /**
        * Get x position
        * @type {Number}
        */

    }, {
        key: "x",
        get: function get() {

            return this._x;
        }

        /**
        * Set x position
        * @type {Number}
        * @example
        * var PointA = new Vector(2,1);
        * PointA.position.x = {x:0,y:0};
        * PointA.x = 2;
        */

        ,
        set: function set(value) {
            if (!(typeof value === 'number')) {
                throw new TypeError("Value of argument \"value\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(value));
            }

            this._x = value;
        }

        /**
        * Get y position
        * @type {Number}
        */

    }, {
        key: "y",
        get: function get() {

            return this._y;
        }

        /**
        * Set y position
        * @type {Number}
        * @example
        * var PointA = new Vector(2,1);
        * PointA.y = 2;
        */

        ,
        set: function set(value) {
            if (!(typeof value === 'number')) {
                throw new TypeError("Value of argument \"value\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(value));
            }

            this._y = value;
        }

        /** This is the constructor for the vector
        * @param {number} x - position.x
        * @param {number} y - position.y */

    }]);

    function Vector() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, Vector);

        if (!(typeof x === 'number')) {
            throw new TypeError("Value of argument \"x\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(x));
        }

        if (!(typeof y === 'number')) {
            throw new TypeError("Value of argument \"y\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(y));
        }

        var _this = _possibleConstructorReturn(this, (Vector.__proto__ || Object.getPrototypeOf(Vector)).call(this, new WeakMap()));

        _this.position.x = x;
        _this.position.y = y;

        //return (this:IVector);
        return _this;
    }

    _createClass(Vector, [{
        key: "Difference",


        /**
        * @method
        */

        //toString() { return `Point<${ this.#x },${ this.#y }>` }

        /**
        * @method
        */

        value: function Difference(a, b) {
            if (!(a instanceof Vector)) {
                throw new TypeError("Value of argument \"a\" violates contract.\n\nExpected:\nVector\n\nGot:\n" + _inspect(a));
            }

            if (!(b instanceof Vector)) {
                throw new TypeError("Value of argument \"b\" violates contract.\n\nExpected:\nVector\n\nGot:\n" + _inspect(b));
            }

            var x = a.x - b.x;
            var y = a.y - b.y;

            return new Vector(x, y);
        }

        /**
        * @method
        */

    }, {
        key: "equals",
        value: function equals(p) {
            if (!(p instanceof Vector)) {
                throw new TypeError("Value of argument \"p\" violates contract.\n\nExpected:\nVector\n\nGot:\n" + _inspect(p));
            }

            return this.x === p.x && this.y === p.y;
        }

        /**
        * @method
        */

    }, {
        key: "sum",
        value: function sum() {
            function _ref9(_id9) {
                if (!(typeof _id9 === 'number')) {
                    throw new TypeError("Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(_id9));
                }

                return _id9;
            }

            return _ref9(this.x + this.y);
        }

        /**
        * Multiply vector position
        * @method
        * @param {Number} a - multiply X
        * @param {Number} b - multiply Y
        * @return {Vector}
        */

    }, {
        key: "multiply",
        value: function multiply(a, b) {
            function _ref10(_id10) {
                if (!(_id10 instanceof Vector)) {
                    throw new TypeError("Function return value violates contract.\n\nExpected:\nVector\n\nGot:\n" + _inspect(_id10));
                }

                return _id10;
            }

            if (!(typeof a === 'number')) {
                throw new TypeError("Value of argument \"a\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(a));
            }

            if (!(typeof b === 'number')) {
                throw new TypeError("Value of argument \"b\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(b));
            }

            this._x *= a;
            this._y *= b;

            return _ref10(this);
        }

        /**
        * Offset vector position
        * @method
        * @param {Number} a - multiply X
        * @param {Number} b - multiply Y
        * @return {Vector}
        */

    }, {
        key: "offset",
        value: function offset(a, b) {
            function _ref11(_id11) {
                if (!(_id11 instanceof Vector)) {
                    throw new TypeError("Function return value violates contract.\n\nExpected:\nVector\n\nGot:\n" + _inspect(_id11));
                }

                return _id11;
            }

            if (!(typeof a === 'number')) {
                throw new TypeError("Value of argument \"a\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(a));
            }

            if (!(typeof b === 'number')) {
                throw new TypeError("Value of argument \"b\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(b));
            }

            this._x += a;
            this._y += b;

            return _ref11(this);
        }
    }]);

    return Vector;
}(__WEBPACK_IMPORTED_MODULE_0__thingy__["a" /* default */]);

Vector.properties = {
    name: "Vector",
    x: null,
    y: null
};
/* harmony default export */ exports["a"] = Vector;

function _inspect(input, depth) {
    var maxDepth = 4;
    var maxKeys = 15;

    if (depth === undefined) {
        depth = 0;
    }

    depth += 1;

    if (input === null) {
        return 'null';
    } else if (input === undefined) {
        return 'void';
    } else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
        return typeof input === "undefined" ? "undefined" : _typeof(input);
    } else if (Array.isArray(input)) {
        if (input.length > 0) {
            var _ret = function () {
                if (depth > maxDepth) return {
                        v: '[...]'
                    };

                var first = _inspect(input[0], depth);

                if (input.every(function (item) {
                    return _inspect(item, depth) === first;
                })) {
                    return {
                        v: first.trim() + '[]'
                    };
                } else {
                    return {
                        v: '[' + input.slice(0, maxKeys).map(function (item) {
                            return _inspect(item, depth);
                        }).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
                    };
                }
            }();

            if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
        } else {
            return 'Array';
        }
    } else {
        var keys = Object.keys(input);

        if (!keys.length) {
            if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
                return input.constructor.name;
            } else {
                return 'Object';
            }
        }

        if (depth > maxDepth) return '{...}';
        var indent = '  '.repeat(depth - 1);
        var entries = keys.slice(0, maxKeys).map(function (key) {
            return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
        }).join('\n  ' + indent);

        if (keys.length >= maxKeys) {
            entries += '\n  ' + indent + '...';
        }

        if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
            return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
        } else {
            return '{\n  ' + indent + entries + '\n' + indent + '}';
        }
    }
}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

var ctx         = __webpack_require__(16)
  , call        = __webpack_require__(77)
  , isArrayIter = __webpack_require__(74)
  , anObject    = __webpack_require__(3)
  , toLength    = __webpack_require__(10)
  , getIterFn   = __webpack_require__(88);
module.exports = function(iterable, entries, fn, that){
  var iterFn = getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    call(iterator, f, step.value, entries);
  }
};

/***/ },
/* 31 */
/***/ function(module, exports) {

module.exports = {};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

var def = __webpack_require__(1).setDesc
  , has = __webpack_require__(9)
  , TAG = __webpack_require__(4)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(34)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ },
/* 34 */
/***/ function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx      = __webpack_require__(16)
  , IObject  = __webpack_require__(40)
  , toObject = __webpack_require__(22)
  , toLength = __webpack_require__(10)
  , asc      = __webpack_require__(144);
module.exports = function(TYPE){
  var IS_MAP        = TYPE == 1
    , IS_FILTER     = TYPE == 2
    , IS_SOME       = TYPE == 3
    , IS_EVERY      = TYPE == 4
    , IS_FIND_INDEX = TYPE == 6
    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX;
  return function($this, callbackfn, that){
    var O      = toObject($this)
      , self   = IObject(O)
      , f      = ctx(callbackfn, that, 3)
      , length = toLength(self.length)
      , index  = 0
      , result = IS_MAP ? asc($this, length) : IS_FILTER ? asc($this, 0) : undefined
      , val, res;
    for(;length > index; index++)if(NO_HOLES || index in self){
      val = self[index];
      res = f(val, index, O);
      if(TYPE){
        if(IS_MAP)result[index] = res;            // map
        else if(res)switch(TYPE){
          case 3: return true;                    // some
          case 5: return val;                     // find
          case 6: return index;                   // findIndex
          case 2: result.push(val);               // filter
        } else if(IS_EVERY)return false;          // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(20)
  , TAG = __webpack_require__(4)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var global         = __webpack_require__(6)
  , $export        = __webpack_require__(0)
  , redefine       = __webpack_require__(14)
  , redefineAll    = __webpack_require__(41)
  , forOf          = __webpack_require__(30)
  , strictNew      = __webpack_require__(43)
  , isObject       = __webpack_require__(2)
  , fails          = __webpack_require__(7)
  , $iterDetect    = __webpack_require__(50)
  , setToStringTag = __webpack_require__(32);

module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
  var Base  = global[NAME]
    , C     = Base
    , ADDER = IS_MAP ? 'set' : 'add'
    , proto = C && C.prototype
    , O     = {};
  var fixMethod = function(KEY){
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function(a){
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a){
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a){
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
    new C().entries().next();
  }))){
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
  } else {
    var instance             = new C
      // early implementations not supports chaining
      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
      // most early implementations doesn't supports iterables, most modern - not close it correctly
      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
      // for early implementations -0 and +0 not the same
      , BUGGY_ZERO;
    if(!ACCEPT_ITERABLES){ 
      C = wrapper(function(target, iterable){
        strictNew(target, C, NAME);
        var that = new Base;
        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    IS_WEAK || instance.forEach(function(val, key){
      BUGGY_ZERO = 1 / key === -Infinity;
    });
    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
    // weak collections should not contains .clear method
    if(IS_WEAK && proto.clear)delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

  return C;
};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var hide     = __webpack_require__(18)
  , redefine = __webpack_require__(14)
  , fails    = __webpack_require__(7)
  , defined  = __webpack_require__(17)
  , wks      = __webpack_require__(4);

module.exports = function(KEY, length, exec){
  var SYMBOL   = wks(KEY)
    , original = ''[KEY];
  if(fails(function(){
    var O = {};
    O[SYMBOL] = function(){ return 7; };
    return ''[KEY](O) != 7;
  })){
    redefine(String.prototype, KEY, exec(defined, SYMBOL, original));
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function(string, arg){ return original.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function(string){ return original.call(string, this); }
    );
  }
};

/***/ },
/* 39 */
/***/ function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(20);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(14);
module.exports = function(target, src){
  for(var key in src)redefine(target, key, src[key]);
  return target;
};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var global      = __webpack_require__(6)
  , $           = __webpack_require__(1)
  , DESCRIPTORS = __webpack_require__(12)
  , SPECIES     = __webpack_require__(4)('species');

module.exports = function(KEY){
  var C = global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};

/***/ },
/* 43 */
/***/ function(module, exports) {

module.exports = function(it, Constructor, name){
  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
  return it;
};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0)
  , defined = __webpack_require__(17)
  , fails   = __webpack_require__(7)
  , spaces  = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
      '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF'
  , space   = '[' + spaces + ']'
  , non     = '\u200b\u0085'
  , ltrim   = RegExp('^' + space + space + '*')
  , rtrim   = RegExp(space + space + '*$');

var exporter = function(KEY, exec){
  var exp  = {};
  exp[KEY] = exec(trim);
  $export($export.P + $export.F * fails(function(){
    return !!spaces[KEY]() || non[KEY]() != non;
  }), 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function(string, TYPE){
  string = String(defined(string));
  if(TYPE & 1)string = string.replace(ltrim, '');
  if(TYPE & 2)string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;

/***/ },
/* 45 */
/***/ function(module, exports) {

var g;

// This works in non-strict mode
g = (function() { return this; })();

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


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_thingy__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_interfaces_ITypes__ = __webpack_require__(5);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* @noflow - no flow due to destructuring */




var IState = __WEBPACK_IMPORTED_MODULE_1__core_interfaces_ITypes__["e" /* IState */];

/** The state class which the main game state inherits
*	@module */

var State = function (_WeakMapThingy) {
	_inherits(State, _WeakMapThingy);

	/** Construct and assign privates
 * @param [Object] obj - Pass an object with update, draw, init.
 * @method */

	/** @private */

	function State(obj, app) {
		var _ret;

		_classCallCheck(this, State);

		if (!(app instanceof Object || app == null)) {
			throw new TypeError('Value of argument "app" violates contract.\n\nExpected:\nObject | void\n\nGot:\n' + _inspect(app));
		}

		var _this = _possibleConstructorReturn(this, (State.__proto__ || Object.getPrototypeOf(State)).call(this, new WeakMap()));

		_this.initalized = false;


		if ((typeof app === 'undefined' ? 'undefined' : _typeof(app)) == 'object') {

			_this.app = app;
			_this.visuals = _this.app.client.visuals;

			if (!(_this.visuals instanceof Object)) {
				throw new TypeError('Value of "this.visuals" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_this.visuals));
			}

			_this.graphics = _this.app.client.graphics;

			if (!(_this.graphics instanceof Object)) {
				throw new TypeError('Value of "this.graphics" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_this.graphics));
			}
		}

		if (typeof obj != 'undefined') {
			var _ref5 = [obj.update, obj.draw, obj.init, obj.name, obj.html];
			_this.update = _ref5[0];
			_this.draw = _ref5[1];
			_this.init = _ref5[2];
			_this.name = _ref5[3];
			_this.html = _ref5[4];
		}

		return _ret = _this, _possibleConstructorReturn(_this, _ret);
	}

	/** This method is overridden to draw the state.
 * @method
 * @override	*/

	/** @public */

	_createClass(State, [{
		key: 'update',
		value: function update() {}

		/** This method is overridden to draw the state.
  * @method
  * @override	*/

	}, {
		key: 'draw',
		value: function draw() {}

		/** Method is overridden to name the state.
  * @method
  * @override	*/

	}, {
		key: 'name',
		value: function name() {}

		/** This method is overridden to initialize the state.
  * @method
  * @override	*/

	}, {
		key: 'init',
		value: function init() {}
	}]);

	return State;
}(__WEBPACK_IMPORTED_MODULE_0__core_thingy__["a" /* default */]);

State.properties = {

	render: function render() {},

	update: function update() {},

	draw: function draw() {},

	init: function init() {}

};
/* harmony default export */ exports["a"] = State;
;

function _inspect(input, depth) {
	var maxDepth = 4;
	var maxKeys = 15;

	if (depth === undefined) {
		depth = 0;
	}

	depth += 1;

	if (input === null) {
		return 'null';
	} else if (input === undefined) {
		return 'void';
	} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
		return typeof input === 'undefined' ? 'undefined' : _typeof(input);
	} else if (Array.isArray(input)) {
		if (input.length > 0) {
			var _ret2 = function () {
				if (depth > maxDepth) return {
						v: '[...]'
					};

				var first = _inspect(input[0], depth);

				if (input.every(function (item) {
					return _inspect(item, depth) === first;
				})) {
					return {
						v: first.trim() + '[]'
					};
				} else {
					return {
						v: '[' + input.slice(0, maxKeys).map(function (item) {
							return _inspect(item, depth);
						}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
					};
				}
			}();

			if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
		} else {
			return 'Array';
		}
	} else {
		var keys = Object.keys(input);

		if (!keys.length) {
			if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
				return input.constructor.name;
			} else {
				return 'Object';
			}
		}

		if (depth > maxDepth) return '{...}';
		var indent = '  '.repeat(depth - 1);
		var entries = keys.slice(0, maxKeys).map(function (key) {
			return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
		}).join('\n  ' + indent);

		if (keys.length >= maxKeys) {
			entries += '\n  ' + indent + '...';
		}

		if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
			return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
		} else {
			return '{\n  ' + indent + entries + '\n' + indent + '}';
		}
	}
}

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(4)('match');
module.exports = function(KEY){
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch(e){
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch(f){ /* empty */ }
  } return true;
};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(20);
module.exports = Array.isArray || function(arg){
  return cof(arg) == 'Array';
};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(51)
  , $export        = __webpack_require__(0)
  , redefine       = __webpack_require__(14)
  , hide           = __webpack_require__(18)
  , has            = __webpack_require__(9)
  , Iterators      = __webpack_require__(31)
  , $iterCreate    = __webpack_require__(78)
  , setToStringTag = __webpack_require__(32)
  , getProto       = __webpack_require__(1).getProto
  , ITERATOR       = __webpack_require__(4)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , methods, key;
  // Fix native
  if($native){
    var IteratorPrototype = getProto($default.call(new Base));
    // Set @@toStringTag to native iterators
    setToStringTag(IteratorPrototype, TAG, true);
    // FF fix
    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    // fix Array#{values, @@iterator}.name in V8 / FF
    if(DEF_VALUES && $native.name !== VALUES){
      VALUES_BUG = true;
      $default = function values(){ return $native.call(this); };
    }
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES  ? $default : getMethod(VALUES),
      keys:    IS_SET      ? $default : getMethod(KEYS),
      entries: !DEF_VALUES ? $default : getMethod('entries')
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(4)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ safe = true; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ },
/* 51 */
/***/ function(module, exports) {

module.exports = false;

/***/ },
/* 52 */
/***/ function(module, exports) {

// 20.2.2.14 Math.expm1(x)
module.exports = Math.expm1 || function expm1(x){
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
};

/***/ },
/* 53 */
/***/ function(module, exports) {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x){
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var getDesc  = __webpack_require__(1).getDesc
  , isObject = __webpack_require__(2)
  , anObject = __webpack_require__(3);
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = __webpack_require__(16)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(34)
  , defined   = __webpack_require__(17);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(76)
  , defined  = __webpack_require__(17);

module.exports = function(that, searchString, NAME){
  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

// private property
var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";


// public method for encoding
exports.encode = function(input, utf8) {
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;

    while (i < input.length) {

        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);

        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;

        if (isNaN(chr2)) {
            enc3 = enc4 = 64;
        }
        else if (isNaN(chr3)) {
            enc4 = 64;
        }

        output = output + _keyStr.charAt(enc1) + _keyStr.charAt(enc2) + _keyStr.charAt(enc3) + _keyStr.charAt(enc4);

    }

    return output;
};

// public method for decoding
exports.decode = function(input, utf8) {
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;

    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    while (i < input.length) {

        enc1 = _keyStr.indexOf(input.charAt(i++));
        enc2 = _keyStr.indexOf(input.charAt(i++));
        enc3 = _keyStr.indexOf(input.charAt(i++));
        enc4 = _keyStr.indexOf(input.charAt(i++));

        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;

        output = output + String.fromCharCode(chr1);

        if (enc3 != 64) {
            output = output + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
            output = output + String.fromCharCode(chr3);
        }

    }

    return output;

};


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

exports.STORE = {
    magic: "\x00\x00",
    compress: function(content, compressionOptions) {
        return content; // no compression
    },
    uncompress: function(content) {
        return content; // no compression
    },
    compressInputType: null,
    uncompressInputType: null
};
exports.DEFLATE = __webpack_require__(263);


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
module.exports = function(data, encoding){
    return new Buffer(data, encoding);
};
module.exports.test = function(b){
    return Buffer.isBuffer(b);
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(90).Buffer))

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var support = __webpack_require__(28);
var utils = __webpack_require__(11);
var crc32 = __webpack_require__(261);
var signature = __webpack_require__(95);
var defaults = __webpack_require__(94);
var base64 = __webpack_require__(57);
var compressions = __webpack_require__(58);
var CompressedObject = __webpack_require__(92);
var nodeBuffer = __webpack_require__(59);
var utf8 = __webpack_require__(98);
var StringWriter = __webpack_require__(267);
var Uint8ArrayWriter = __webpack_require__(268);

/**
 * Returns the raw data of a ZipObject, decompress the content if necessary.
 * @param {ZipObject} file the file to use.
 * @return {String|ArrayBuffer|Uint8Array|Buffer} the data.
 */
var getRawData = function(file) {
    if (file._data instanceof CompressedObject) {
        file._data = file._data.getContent();
        file.options.binary = true;
        file.options.base64 = false;

        if (utils.getTypeOf(file._data) === "uint8array") {
            var copy = file._data;
            // when reading an arraybuffer, the CompressedObject mechanism will keep it and subarray() a Uint8Array.
            // if we request a file in the same format, we might get the same Uint8Array or its ArrayBuffer (the original zip file).
            file._data = new Uint8Array(copy.length);
            // with an empty Uint8Array, Opera fails with a "Offset larger than array size"
            if (copy.length !== 0) {
                file._data.set(copy, 0);
            }
        }
    }
    return file._data;
};

/**
 * Returns the data of a ZipObject in a binary form. If the content is an unicode string, encode it.
 * @param {ZipObject} file the file to use.
 * @return {String|ArrayBuffer|Uint8Array|Buffer} the data.
 */
var getBinaryData = function(file) {
    var result = getRawData(file),
        type = utils.getTypeOf(result);
    if (type === "string") {
        if (!file.options.binary) {
            // unicode text !
            // unicode string => binary string is a painful process, check if we can avoid it.
            if (support.nodebuffer) {
                return nodeBuffer(result, "utf-8");
            }
        }
        return file.asBinary();
    }
    return result;
};

/**
 * Transform this._data into a string.
 * @param {function} filter a function String -> String, applied if not null on the result.
 * @return {String} the string representing this._data.
 */
var dataToString = function(asUTF8) {
    var result = getRawData(this);
    if (result === null || typeof result === "undefined") {
        return "";
    }
    // if the data is a base64 string, we decode it before checking the encoding !
    if (this.options.base64) {
        result = base64.decode(result);
    }
    if (asUTF8 && this.options.binary) {
        // JSZip.prototype.utf8decode supports arrays as input
        // skip to array => string step, utf8decode will do it.
        result = out.utf8decode(result);
    }
    else {
        // no utf8 transformation, do the array => string step.
        result = utils.transformTo("string", result);
    }

    if (!asUTF8 && !this.options.binary) {
        result = utils.transformTo("string", out.utf8encode(result));
    }
    return result;
};
/**
 * A simple object representing a file in the zip file.
 * @constructor
 * @param {string} name the name of the file
 * @param {String|ArrayBuffer|Uint8Array|Buffer} data the data
 * @param {Object} options the options of the file
 */
var ZipObject = function(name, data, options) {
    this.name = name;
    this.dir = options.dir;
    this.date = options.date;
    this.comment = options.comment;
    this.unixPermissions = options.unixPermissions;
    this.dosPermissions = options.dosPermissions;

    this._data = data;
    this.options = options;

    /*
     * This object contains initial values for dir and date.
     * With them, we can check if the user changed the deprecated metadata in
     * `ZipObject#options` or not.
     */
    this._initialMetadata = {
      dir : options.dir,
      date : options.date
    };
};

ZipObject.prototype = {
    /**
     * Return the content as UTF8 string.
     * @return {string} the UTF8 string.
     */
    asText: function() {
        return dataToString.call(this, true);
    },
    /**
     * Returns the binary content.
     * @return {string} the content as binary.
     */
    asBinary: function() {
        return dataToString.call(this, false);
    },
    /**
     * Returns the content as a nodejs Buffer.
     * @return {Buffer} the content as a Buffer.
     */
    asNodeBuffer: function() {
        var result = getBinaryData(this);
        return utils.transformTo("nodebuffer", result);
    },
    /**
     * Returns the content as an Uint8Array.
     * @return {Uint8Array} the content as an Uint8Array.
     */
    asUint8Array: function() {
        var result = getBinaryData(this);
        return utils.transformTo("uint8array", result);
    },
    /**
     * Returns the content as an ArrayBuffer.
     * @return {ArrayBuffer} the content as an ArrayBufer.
     */
    asArrayBuffer: function() {
        return this.asUint8Array().buffer;
    }
};

/**
 * Transform an integer into a string in hexadecimal.
 * @private
 * @param {number} dec the number to convert.
 * @param {number} bytes the number of bytes to generate.
 * @returns {string} the result.
 */
var decToHex = function(dec, bytes) {
    var hex = "",
        i;
    for (i = 0; i < bytes; i++) {
        hex += String.fromCharCode(dec & 0xff);
        dec = dec >>> 8;
    }
    return hex;
};

/**
 * Transforms the (incomplete) options from the user into the complete
 * set of options to create a file.
 * @private
 * @param {Object} o the options from the user.
 * @return {Object} the complete set of options.
 */
var prepareFileAttrs = function(o) {
    o = o || {};
    if (o.base64 === true && (o.binary === null || o.binary === undefined)) {
        o.binary = true;
    }
    o = utils.extend(o, defaults);
    o.date = o.date || new Date();
    if (o.compression !== null) o.compression = o.compression.toUpperCase();

    return o;
};

/**
 * Add a file in the current folder.
 * @private
 * @param {string} name the name of the file
 * @param {String|ArrayBuffer|Uint8Array|Buffer} data the data of the file
 * @param {Object} o the options of the file
 * @return {Object} the new file.
 */
var fileAdd = function(name, data, o) {
    // be sure sub folders exist
    var dataType = utils.getTypeOf(data),
        parent;

    o = prepareFileAttrs(o);

    if (typeof o.unixPermissions === "string") {
        o.unixPermissions = parseInt(o.unixPermissions, 8);
    }

    // UNX_IFDIR  0040000 see zipinfo.c
    if (o.unixPermissions && (o.unixPermissions & 0x4000)) {
        o.dir = true;
    }
    // Bit 4    Directory
    if (o.dosPermissions && (o.dosPermissions & 0x0010)) {
        o.dir = true;
    }

    if (o.dir) {
        name = forceTrailingSlash(name);
    }

    if (o.createFolders && (parent = parentFolder(name))) {
        folderAdd.call(this, parent, true);
    }

    if (o.dir || data === null || typeof data === "undefined") {
        o.base64 = false;
        o.binary = false;
        data = null;
        dataType = null;
    }
    else if (dataType === "string") {
        if (o.binary && !o.base64) {
            // optimizedBinaryString == true means that the file has already been filtered with a 0xFF mask
            if (o.optimizedBinaryString !== true) {
                // this is a string, not in a base64 format.
                // Be sure that this is a correct "binary string"
                data = utils.string2binary(data);
            }
        }
    }
    else { // arraybuffer, uint8array, ...
        o.base64 = false;
        o.binary = true;

        if (!dataType && !(data instanceof CompressedObject)) {
            throw new Error("The data of '" + name + "' is in an unsupported format !");
        }

        // special case : it's way easier to work with Uint8Array than with ArrayBuffer
        if (dataType === "arraybuffer") {
            data = utils.transformTo("uint8array", data);
        }
    }

    var object = new ZipObject(name, data, o);
    this.files[name] = object;
    return object;
};

/**
 * Find the parent folder of the path.
 * @private
 * @param {string} path the path to use
 * @return {string} the parent folder, or ""
 */
var parentFolder = function (path) {
    if (path.slice(-1) == '/') {
        path = path.substring(0, path.length - 1);
    }
    var lastSlash = path.lastIndexOf('/');
    return (lastSlash > 0) ? path.substring(0, lastSlash) : "";
};


/**
 * Returns the path with a slash at the end.
 * @private
 * @param {String} path the path to check.
 * @return {String} the path with a trailing slash.
 */
var forceTrailingSlash = function(path) {
    // Check the name ends with a /
    if (path.slice(-1) != "/") {
        path += "/"; // IE doesn't like substr(-1)
    }
    return path;
};
/**
 * Add a (sub) folder in the current folder.
 * @private
 * @param {string} name the folder's name
 * @param {boolean=} [createFolders] If true, automatically create sub
 *  folders. Defaults to false.
 * @return {Object} the new folder.
 */
var folderAdd = function(name, createFolders) {
    createFolders = (typeof createFolders !== 'undefined') ? createFolders : false;

    name = forceTrailingSlash(name);

    // Does this folder already exist?
    if (!this.files[name]) {
        fileAdd.call(this, name, null, {
            dir: true,
            createFolders: createFolders
        });
    }
    return this.files[name];
};

/**
 * Generate a JSZip.CompressedObject for a given zipOject.
 * @param {ZipObject} file the object to read.
 * @param {JSZip.compression} compression the compression to use.
 * @param {Object} compressionOptions the options to use when compressing.
 * @return {JSZip.CompressedObject} the compressed result.
 */
var generateCompressedObjectFrom = function(file, compression, compressionOptions) {
    var result = new CompressedObject(),
        content;

    // the data has not been decompressed, we might reuse things !
    if (file._data instanceof CompressedObject) {
        result.uncompressedSize = file._data.uncompressedSize;
        result.crc32 = file._data.crc32;

        if (result.uncompressedSize === 0 || file.dir) {
            compression = compressions['STORE'];
            result.compressedContent = "";
            result.crc32 = 0;
        }
        else if (file._data.compressionMethod === compression.magic) {
            result.compressedContent = file._data.getCompressedContent();
        }
        else {
            content = file._data.getContent();
            // need to decompress / recompress
            result.compressedContent = compression.compress(utils.transformTo(compression.compressInputType, content), compressionOptions);
        }
    }
    else {
        // have uncompressed data
        content = getBinaryData(file);
        if (!content || content.length === 0 || file.dir) {
            compression = compressions['STORE'];
            content = "";
        }
        result.uncompressedSize = content.length;
        result.crc32 = crc32(content);
        result.compressedContent = compression.compress(utils.transformTo(compression.compressInputType, content), compressionOptions);
    }

    result.compressedSize = result.compressedContent.length;
    result.compressionMethod = compression.magic;

    return result;
};




/**
 * Generate the UNIX part of the external file attributes.
 * @param {Object} unixPermissions the unix permissions or null.
 * @param {Boolean} isDir true if the entry is a directory, false otherwise.
 * @return {Number} a 32 bit integer.
 *
 * adapted from http://unix.stackexchange.com/questions/14705/the-zip-formats-external-file-attribute :
 *
 * TTTTsstrwxrwxrwx0000000000ADVSHR
 * ^^^^____________________________ file type, see zipinfo.c (UNX_*)
 *     ^^^_________________________ setuid, setgid, sticky
 *        ^^^^^^^^^________________ permissions
 *                 ^^^^^^^^^^______ not used ?
 *                           ^^^^^^ DOS attribute bits : Archive, Directory, Volume label, System file, Hidden, Read only
 */
var generateUnixExternalFileAttr = function (unixPermissions, isDir) {

    var result = unixPermissions;
    if (!unixPermissions) {
        // I can't use octal values in strict mode, hence the hexa.
        //  040775 => 0x41fd
        // 0100664 => 0x81b4
        result = isDir ? 0x41fd : 0x81b4;
    }

    return (result & 0xFFFF) << 16;
};

/**
 * Generate the DOS part of the external file attributes.
 * @param {Object} dosPermissions the dos permissions or null.
 * @param {Boolean} isDir true if the entry is a directory, false otherwise.
 * @return {Number} a 32 bit integer.
 *
 * Bit 0     Read-Only
 * Bit 1     Hidden
 * Bit 2     System
 * Bit 3     Volume Label
 * Bit 4     Directory
 * Bit 5     Archive
 */
var generateDosExternalFileAttr = function (dosPermissions, isDir) {

    // the dir flag is already set for compatibility

    return (dosPermissions || 0)  & 0x3F;
};

/**
 * Generate the various parts used in the construction of the final zip file.
 * @param {string} name the file name.
 * @param {ZipObject} file the file content.
 * @param {JSZip.CompressedObject} compressedObject the compressed object.
 * @param {number} offset the current offset from the start of the zip file.
 * @param {String} platform let's pretend we are this platform (change platform dependents fields)
 * @param {Function} encodeFileName the function to encode the file name / comment.
 * @return {object} the zip parts.
 */
var generateZipParts = function(name, file, compressedObject, offset, platform, encodeFileName) {
    var data = compressedObject.compressedContent,
        useCustomEncoding = encodeFileName !== utf8.utf8encode,
        encodedFileName = utils.transformTo("string", encodeFileName(file.name)),
        utfEncodedFileName = utils.transformTo("string", utf8.utf8encode(file.name)),
        comment = file.comment || "",
        encodedComment = utils.transformTo("string", encodeFileName(comment)),
        utfEncodedComment = utils.transformTo("string", utf8.utf8encode(comment)),
        useUTF8ForFileName = utfEncodedFileName.length !== file.name.length,
        useUTF8ForComment = utfEncodedComment.length !== comment.length,
        o = file.options,
        dosTime,
        dosDate,
        extraFields = "",
        unicodePathExtraField = "",
        unicodeCommentExtraField = "",
        dir, date;


    // handle the deprecated options.dir
    if (file._initialMetadata.dir !== file.dir) {
        dir = file.dir;
    } else {
        dir = o.dir;
    }

    // handle the deprecated options.date
    if(file._initialMetadata.date !== file.date) {
        date = file.date;
    } else {
        date = o.date;
    }

    var extFileAttr = 0;
    var versionMadeBy = 0;
    if (dir) {
        // dos or unix, we set the dos dir flag
        extFileAttr |= 0x00010;
    }
    if(platform === "UNIX") {
        versionMadeBy = 0x031E; // UNIX, version 3.0
        extFileAttr |= generateUnixExternalFileAttr(file.unixPermissions, dir);
    } else { // DOS or other, fallback to DOS
        versionMadeBy = 0x0014; // DOS, version 2.0
        extFileAttr |= generateDosExternalFileAttr(file.dosPermissions, dir);
    }

    // date
    // @see http://www.delorie.com/djgpp/doc/rbinter/it/52/13.html
    // @see http://www.delorie.com/djgpp/doc/rbinter/it/65/16.html
    // @see http://www.delorie.com/djgpp/doc/rbinter/it/66/16.html

    dosTime = date.getHours();
    dosTime = dosTime << 6;
    dosTime = dosTime | date.getMinutes();
    dosTime = dosTime << 5;
    dosTime = dosTime | date.getSeconds() / 2;

    dosDate = date.getFullYear() - 1980;
    dosDate = dosDate << 4;
    dosDate = dosDate | (date.getMonth() + 1);
    dosDate = dosDate << 5;
    dosDate = dosDate | date.getDate();

    if (useUTF8ForFileName) {
        // set the unicode path extra field. unzip needs at least one extra
        // field to correctly handle unicode path, so using the path is as good
        // as any other information. This could improve the situation with
        // other archive managers too.
        // This field is usually used without the utf8 flag, with a non
        // unicode path in the header (winrar, winzip). This helps (a bit)
        // with the messy Windows' default compressed folders feature but
        // breaks on p7zip which doesn't seek the unicode path extra field.
        // So for now, UTF-8 everywhere !
        unicodePathExtraField =
            // Version
            decToHex(1, 1) +
            // NameCRC32
            decToHex(crc32(encodedFileName), 4) +
            // UnicodeName
            utfEncodedFileName;

        extraFields +=
            // Info-ZIP Unicode Path Extra Field
            "\x75\x70" +
            // size
            decToHex(unicodePathExtraField.length, 2) +
            // content
            unicodePathExtraField;
    }

    if(useUTF8ForComment) {

        unicodeCommentExtraField =
            // Version
            decToHex(1, 1) +
            // CommentCRC32
            decToHex(this.crc32(encodedComment), 4) +
            // UnicodeName
            utfEncodedComment;

        extraFields +=
            // Info-ZIP Unicode Path Extra Field
            "\x75\x63" +
            // size
            decToHex(unicodeCommentExtraField.length, 2) +
            // content
            unicodeCommentExtraField;
    }

    var header = "";

    // version needed to extract
    header += "\x0A\x00";
    // general purpose bit flag
    // set bit 11 if utf8
    header += !useCustomEncoding && (useUTF8ForFileName || useUTF8ForComment) ? "\x00\x08" : "\x00\x00";
    // compression method
    header += compressedObject.compressionMethod;
    // last mod file time
    header += decToHex(dosTime, 2);
    // last mod file date
    header += decToHex(dosDate, 2);
    // crc-32
    header += decToHex(compressedObject.crc32, 4);
    // compressed size
    header += decToHex(compressedObject.compressedSize, 4);
    // uncompressed size
    header += decToHex(compressedObject.uncompressedSize, 4);
    // file name length
    header += decToHex(encodedFileName.length, 2);
    // extra field length
    header += decToHex(extraFields.length, 2);


    var fileRecord = signature.LOCAL_FILE_HEADER + header + encodedFileName + extraFields;

    var dirRecord = signature.CENTRAL_FILE_HEADER +
    // version made by (00: DOS)
    decToHex(versionMadeBy, 2) +
    // file header (common to file and central directory)
    header +
    // file comment length
    decToHex(encodedComment.length, 2) +
    // disk number start
    "\x00\x00" +
    // internal file attributes TODO
    "\x00\x00" +
    // external file attributes
    decToHex(extFileAttr, 4) +
    // relative offset of local header
    decToHex(offset, 4) +
    // file name
    encodedFileName +
    // extra field
    extraFields +
    // file comment
    encodedComment;

    return {
        fileRecord: fileRecord,
        dirRecord: dirRecord,
        compressedObject: compressedObject
    };
};


// return the actual prototype of JSZip
var out = {
    /**
     * Read an existing zip and merge the data in the current JSZip object.
     * The implementation is in jszip-load.js, don't forget to include it.
     * @param {String|ArrayBuffer|Uint8Array|Buffer} stream  The stream to load
     * @param {Object} options Options for loading the stream.
     *  options.base64 : is the stream in base64 ? default : false
     * @return {JSZip} the current JSZip object
     */
    load: function(stream, options) {
        throw new Error("Load method is not defined. Is the file jszip-load.js included ?");
    },

    /**
     * Filter nested files/folders with the specified function.
     * @param {Function} search the predicate to use :
     * function (relativePath, file) {...}
     * It takes 2 arguments : the relative path and the file.
     * @return {Array} An array of matching elements.
     */
    filter: function(search) {
        var result = [],
            filename, relativePath, file, fileClone;
        for (filename in this.files) {
            if (!this.files.hasOwnProperty(filename)) {
                continue;
            }
            file = this.files[filename];
            // return a new object, don't let the user mess with our internal objects :)
            fileClone = new ZipObject(file.name, file._data, utils.extend(file.options));
            relativePath = filename.slice(this.root.length, filename.length);
            if (filename.slice(0, this.root.length) === this.root && // the file is in the current root
            search(relativePath, fileClone)) { // and the file matches the function
                result.push(fileClone);
            }
        }
        return result;
    },

    /**
     * Add a file to the zip file, or search a file.
     * @param   {string|RegExp} name The name of the file to add (if data is defined),
     * the name of the file to find (if no data) or a regex to match files.
     * @param   {String|ArrayBuffer|Uint8Array|Buffer} data  The file data, either raw or base64 encoded
     * @param   {Object} o     File options
     * @return  {JSZip|Object|Array} this JSZip object (when adding a file),
     * a file (when searching by string) or an array of files (when searching by regex).
     */
    file: function(name, data, o) {
        if (arguments.length === 1) {
            if (utils.isRegExp(name)) {
                var regexp = name;
                return this.filter(function(relativePath, file) {
                    return !file.dir && regexp.test(relativePath);
                });
            }
            else { // text
                return this.filter(function(relativePath, file) {
                    return !file.dir && relativePath === name;
                })[0] || null;
            }
        }
        else { // more than one argument : we have data !
            name = this.root + name;
            fileAdd.call(this, name, data, o);
        }
        return this;
    },

    /**
     * Add a directory to the zip file, or search.
     * @param   {String|RegExp} arg The name of the directory to add, or a regex to search folders.
     * @return  {JSZip} an object with the new directory as the root, or an array containing matching folders.
     */
    folder: function(arg) {
        if (!arg) {
            return this;
        }

        if (utils.isRegExp(arg)) {
            return this.filter(function(relativePath, file) {
                return file.dir && arg.test(relativePath);
            });
        }

        // else, name is a new folder
        var name = this.root + arg;
        var newFolder = folderAdd.call(this, name);

        // Allow chaining by returning a new object with this folder as the root
        var ret = this.clone();
        ret.root = newFolder.name;
        return ret;
    },

    /**
     * Delete a file, or a directory and all sub-files, from the zip
     * @param {string} name the name of the file to delete
     * @return {JSZip} this JSZip object
     */
    remove: function(name) {
        name = this.root + name;
        var file = this.files[name];
        if (!file) {
            // Look for any folders
            if (name.slice(-1) != "/") {
                name += "/";
            }
            file = this.files[name];
        }

        if (file && !file.dir) {
            // file
            delete this.files[name];
        } else {
            // maybe a folder, delete recursively
            var kids = this.filter(function(relativePath, file) {
                return file.name.slice(0, name.length) === name;
            });
            for (var i = 0; i < kids.length; i++) {
                delete this.files[kids[i].name];
            }
        }

        return this;
    },

    /**
     * Generate the complete zip file
     * @param {Object} options the options to generate the zip file :
     * - base64, (deprecated, use type instead) true to generate base64.
     * - compression, "STORE" by default.
     * - type, "base64" by default. Values are : string, base64, uint8array, arraybuffer, blob.
     * @return {String|Uint8Array|ArrayBuffer|Buffer|Blob} the zip file
     */
    generate: function(options) {
        options = utils.extend(options || {}, {
            base64: true,
            compression: "STORE",
            compressionOptions : null,
            type: "base64",
            platform: "DOS",
            comment: null,
            mimeType: 'application/zip',
            encodeFileName: utf8.utf8encode
        });

        utils.checkSupport(options.type);

        // accept nodejs `process.platform`
        if(
          options.platform === 'darwin' ||
          options.platform === 'freebsd' ||
          options.platform === 'linux' ||
          options.platform === 'sunos'
        ) {
          options.platform = "UNIX";
        }
        if (options.platform === 'win32') {
          options.platform = "DOS";
        }

        var zipData = [],
            localDirLength = 0,
            centralDirLength = 0,
            writer, i,
            encodedComment = utils.transformTo("string", options.encodeFileName(options.comment || this.comment || ""));

        // first, generate all the zip parts.
        for (var name in this.files) {
            if (!this.files.hasOwnProperty(name)) {
                continue;
            }
            var file = this.files[name];

            var compressionName = file.options.compression || options.compression.toUpperCase();
            var compression = compressions[compressionName];
            if (!compression) {
                throw new Error(compressionName + " is not a valid compression method !");
            }
            var compressionOptions = file.options.compressionOptions || options.compressionOptions || {};

            var compressedObject = generateCompressedObjectFrom.call(this, file, compression, compressionOptions);

            var zipPart = generateZipParts.call(this, name, file, compressedObject, localDirLength, options.platform, options.encodeFileName);
            localDirLength += zipPart.fileRecord.length + compressedObject.compressedSize;
            centralDirLength += zipPart.dirRecord.length;
            zipData.push(zipPart);
        }

        var dirEnd = "";

        // end of central dir signature
        dirEnd = signature.CENTRAL_DIRECTORY_END +
        // number of this disk
        "\x00\x00" +
        // number of the disk with the start of the central directory
        "\x00\x00" +
        // total number of entries in the central directory on this disk
        decToHex(zipData.length, 2) +
        // total number of entries in the central directory
        decToHex(zipData.length, 2) +
        // size of the central directory   4 bytes
        decToHex(centralDirLength, 4) +
        // offset of start of central directory with respect to the starting disk number
        decToHex(localDirLength, 4) +
        // .ZIP file comment length
        decToHex(encodedComment.length, 2) +
        // .ZIP file comment
        encodedComment;


        // we have all the parts (and the total length)
        // time to create a writer !
        var typeName = options.type.toLowerCase();
        if(typeName==="uint8array"||typeName==="arraybuffer"||typeName==="blob"||typeName==="nodebuffer") {
            writer = new Uint8ArrayWriter(localDirLength + centralDirLength + dirEnd.length);
        }else{
            writer = new StringWriter(localDirLength + centralDirLength + dirEnd.length);
        }

        for (i = 0; i < zipData.length; i++) {
            writer.append(zipData[i].fileRecord);
            writer.append(zipData[i].compressedObject.compressedContent);
        }
        for (i = 0; i < zipData.length; i++) {
            writer.append(zipData[i].dirRecord);
        }

        writer.append(dirEnd);

        var zip = writer.finalize();



        switch(options.type.toLowerCase()) {
            // case "zip is an Uint8Array"
            case "uint8array" :
            case "arraybuffer" :
            case "nodebuffer" :
               return utils.transformTo(options.type.toLowerCase(), zip);
            case "blob" :
               return utils.arrayBuffer2Blob(utils.transformTo("arraybuffer", zip), options.mimeType);
            // case "zip is a string"
            case "base64" :
               return (options.base64) ? base64.encode(zip) : zip;
            default : // case "string" :
               return zip;
         }

    },

    /**
     * @deprecated
     * This method will be removed in a future version without replacement.
     */
    crc32: function (input, crc) {
        return crc32(input, crc);
    },

    /**
     * @deprecated
     * This method will be removed in a future version without replacement.
     */
    utf8encode: function (string) {
        return utils.transformTo("string", utf8.utf8encode(string));
    },

    /**
     * @deprecated
     * This method will be removed in a future version without replacement.
     */
    utf8decode: function (input) {
        return utf8.utf8decode(input);
    }
};
module.exports = out;


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  2:      'need dictionary',     /* Z_NEED_DICT       2  */
  1:      'stream end',          /* Z_STREAM_END      1  */
  0:      '',                    /* Z_OK              0  */
  '-1':   'file error',          /* Z_ERRNO         (-1) */
  '-2':   'stream error',        /* Z_STREAM_ERROR  (-2) */
  '-3':   'data error',          /* Z_DATA_ERROR    (-3) */
  '-4':   'insufficient memory', /* Z_MEM_ERROR     (-4) */
  '-5':   'buffer error',        /* Z_BUF_ERROR     (-5) */
  '-6':   'incompatible version' /* Z_VERSION_ERROR (-6) */
};


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_core__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__state__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__canvas__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_interfaces_ITypes__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__client__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__input_input__ = __webpack_require__(126);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** App is the main app controller, here you can access input, math, data and graphics controllers.
*	@module */








var IApp = __WEBPACK_IMPORTED_MODULE_3__core_interfaces_ITypes__["a" /* IApp */],
    IOptions = __WEBPACK_IMPORTED_MODULE_3__core_interfaces_ITypes__["c" /* IOptions */];

/** WIP Modules
*	@module */





//import Particles from './particles.js'; // (unfinished) To be built into application

//window.SJSParticleController = Particles; // Temporary for snowflakes

/** Core of the framework, initalizes client, input and listeners.
* @module
* @protected */

var App = function (_Core) {
    _inherits(App, _Core);

    function App() {
        var _ref7;

        var _temp, _this, _ret;

        _classCallCheck(this, App);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref7 = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref7, [this].concat(args))), _this), _this.canvas = __WEBPACK_IMPORTED_MODULE_2__canvas__["a" /* default */], _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(App, [{
        key: 'loop',


        /** The main loop for the application, use arrow functions, if arrows exist
        * @method
        * @private */

        value: function loop(self) {
            var _this2 = this;

            if (!IApp(self)) {
                throw new TypeError('Value of argument "self" violates contract.\n\nExpected:\nIApp\n\nGot:\n' + _inspect(self));
            }

            //Use arrow function if available

            var usearrow = true;
            if (usearrow) {

                setTimeout(function () {

                    function AppLoop() {
                        self.client.loop();
                        self.client.loopData();
                    }

                    function AppLoopData() {

                        ///For loops that dont need to be run at 60fps

                    }

                    _this2.client.initalize(AppLoop, AppLoopData, _this2.scale);
                }, this.time);
            } else {

                setTimeout(function () {

                    function AppLoop() {
                        self.client.loop();
                        self.client.loopData();
                    }

                    function AppLoopData() {

                        ///For loops that dont need to be run at 60fps

                    }

                    self.client.initalize(AppLoop, AppLoopData, self.scale);
                }, this.time);
            }
        }

        /** This function starts the application.
        * @method
        * @override */

    }, {
        key: 'start',
        value: function start() {
            var w = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var h = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            if (!(typeof w === 'number' || w == null)) {
                throw new TypeError('Value of argument "w" violates contract.\n\nExpected:\nnumber | null\n\nGot:\n' + _inspect(w));
            }

            if (!(typeof h === 'number' || h == null)) {
                throw new TypeError('Value of argument "h" violates contract.\n\nExpected:\nnumber | null\n\nGot:\n' + _inspect(h));
            }

            var clientProposedWidth = w || this.app.options.width;

            var clientProposedHeight = h || this.app.options.height;

            this.main = Object.create(this.main);

            this.canvas = new this.canvas(this);

            if (!(this.canvas instanceof __WEBPACK_IMPORTED_MODULE_2__canvas__["a" /* default */])) {
                throw new TypeError('Value of "this.canvas" violates contract.\n\nExpected:\nCanvas\n\nGot:\n' + _inspect(this.canvas));
            }

            this.client = new __WEBPACK_IMPORTED_MODULE_4__client__["a" /* default */](this, clientProposedWidth, clientProposedHeight);

            this.client.update.inital(this);

            this.input = new __WEBPACK_IMPORTED_MODULE_5__input_input__["a" /* default */](this);

            this.loop(this);
        }

        /** Triggers when the application first loops.
        * @method
           * @param {Object} [self] - Reference to the app.
        * @override	*/

    }, {
        key: 'OnLoad',
        value: function OnLoad(self) {
            if (!(self instanceof Object)) {
                throw new TypeError('Value of argument "self" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(self));
            }

            self.start();
        }

        /** Triggers on dom content load.
        * @method
           * @param {Event} [evt] - The passing event.
        * @override	*/

    }, {
        key: 'OnApplicationLoad',
        value: function OnApplicationLoad(evt) {

            evt.target.app.OnLoad(evt.target.app);
        }

        /** Event listener polyfill.
        * @method
           * @param {Element} [obj] - Element to trigger event on, fallback on window.
           * @param {Event} [evt] - The passing event.
           * @param {String} [listener] - The listener to build.
           * @param {Object} [param] - Paramater to pass.
        * @example
        * Application.Listener(window,'click',function(){////console.log('eh');},'');
        * Application.Click(new Event,window);	*/

    }, {
        key: 'Listener',
        value: function Listener(obj, evt, listener, param) {
            if (!(obj instanceof Object)) {
                throw new TypeError('Value of argument "obj" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(obj));
            }

            if (_typeof(obj[0]) === "object") {
                obj = obj[0] || window;
            }

            if (obj.addEventListener) {
                obj.addEventListener(evt, listener, false);
            } else {
                obj.attachEvent("on" + evt, listener);
            }

            obj.app = window.apps[this.id] = this;
        }

        /** Object constructor/factory polyfill. MAY be unnecessary.
        * @method
           * @param {Object} [prototype] - An object prototype.
           * @param {Object} [constructor] - An object constructor. */

    }, {
        key: 'Construct',
        value: function Construct(prototype, constructor) {
            if (!(prototype instanceof Object)) {
                throw new TypeError('Value of argument "prototype" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(prototype));
            }

            if (!(typeof constructor === 'function')) {
                throw new TypeError('Value of argument "constructor" violates contract.\n\nExpected:\nFunction\n\nGot:\n' + _inspect(constructor));
            }

            var isObj = false;
            var obj = prototype;
            var proto = prototype;
            var construct = constructor;
            var ret = {};
            var type = void 0;

            /* if prototype contains a prototype and constructor. */

            if (typeof obj.prototype !== 'undefined') if (typeof obj.constructor !== 'undefined') {
                construct = obj.constructor;

                if (!(typeof construct === 'function')) {
                    throw new TypeError('Value of variable "construct" violates contract.\n\nExpected:\nFunction\n\nGot:\n' + _inspect(construct));
                }

                proto = obj.prototype;

                if (!(proto instanceof Object)) {
                    throw new TypeError('Value of variable "proto" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(proto));
                }

                isObj = true;
            }

            /* Grab type of constructor */

            type = typeof construct === 'undefined' ? 'undefined' : _typeof(construct);

            /* Return & Create object based on constructor */
            switch (type) {

                /* Use only the prototype */
                case 'undefined':
                    ret = Object.create(proto);

                    if (!(ret instanceof Object)) {
                        throw new TypeError('Value of variable "ret" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(ret));
                    }

                    break;

                /* Use constructor as object */
                case 'object':
                    ret = Object.create(proto, construct);

                    if (!(ret instanceof Object)) {
                        throw new TypeError('Value of variable "ret" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(ret));
                    }

                    break;

                /* Use constructor as function */
                case 'function':
                    ret = Object.create(proto, construct(this));

                    if (!(ret instanceof Object)) {
                        throw new TypeError('Value of variable "ret" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(ret));
                    }

                    break;

                /* Expected a type */
                default:
                    console.warn("Expected 'object' or 'function': Type is " + type);

            }

            if (isObj) prototype = ret;

            //console.warn(ret,typeof ret);

            return ret;
        }
    }]);

    return App;
}(__WEBPACK_IMPORTED_MODULE_0__core_core__["a" /* default */]);

/* harmony default export */ exports["a"] = App;

function _inspect(input, depth) {
    var maxDepth = 4;
    var maxKeys = 15;

    if (depth === undefined) {
        depth = 0;
    }

    depth += 1;

    if (input === null) {
        return 'null';
    } else if (input === undefined) {
        return 'void';
    } else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
        return typeof input === 'undefined' ? 'undefined' : _typeof(input);
    } else if (Array.isArray(input)) {
        if (input.length > 0) {
            var _ret2 = function () {
                if (depth > maxDepth) return {
                        v: '[...]'
                    };

                var first = _inspect(input[0], depth);

                if (input.every(function (item) {
                    return _inspect(item, depth) === first;
                })) {
                    return {
                        v: first.trim() + '[]'
                    };
                } else {
                    return {
                        v: '[' + input.slice(0, maxKeys).map(function (item) {
                            return _inspect(item, depth);
                        }).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
                    };
                }
            }();

            if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
        } else {
            return 'Array';
        }
    } else {
        var keys = Object.keys(input);

        if (!keys.length) {
            if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
                return input.constructor.name;
            } else {
                return 'Object';
            }
        }

        if (depth > maxDepth) return '{...}';
        var indent = '  '.repeat(depth - 1);
        var entries = keys.slice(0, maxKeys).map(function (key) {
            return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
        }).join('\n  ' + indent);

        if (keys.length >= maxKeys) {
            entries += '\n  ' + indent + '...';
        }

        if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
            return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
        } else {
            return '{\n  ' + indent + entries + '\n' + indent + '}';
        }
    }
}

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vector_js__ = __webpack_require__(29);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



window.Math.vector = window.Math.Vector = __WEBPACK_IMPORTED_MODULE_0__vector_js__["a" /* default */];

/**
2DSprite
* @interface
* @private
*/
/*
const _private_Sprite = new WeakMap();

class _Sprite extends Vector {

	static properties = {
		sx:0,
		sy:0

	};

	get position(){

		return this;

	}

	constructor(){


		super();

		_private_Sprite.set(this,this.constructor.properties);

	}


}

window.sprite = _Sprite;

window.sprite2 = new _Sprite();
*/

/**
* @module
* @access public
* @example
* Application.client.math
*/

var Math = function () {
	_createClass(Math, [{
		key: "minmax4",


		/**
  * Return the min max of 4 values
  * @method
  * @param {Number} a - value
  * @param {Number} b - value
  * @param {Number} c - value
  * @param {Number} d - value
  * @return {Object}
  * @private
  */

		value: function minmax4(a, b, c, d) {

			if (a < b) {
				if (c < d) {
					// sort order: (a, c) (b, d)
					if (a < c) minresult = a;else minresult = c;

					if (b > d) maxresult = b;else maxresult = d;
				} else {
					// sort order: (a, d) (b, c)
					if (a < d) minresult = a;else minresult = d;

					if (b > c) maxresult = b;else maxresult = c;
				}
			} else {
				if (c < d) {
					// sort order: (b, c) (a, d)
					if (b < c) minresult = b;else minresult = c;

					if (a > d) maxresult = a;else maxresult = d;
				} else {
					// sort order: (b, d) (a, c)
					if (b < d) minresult = b;else minresult = d;

					if (a > c) maxresult = a;else maxresult = c;
				}
			}

			return { min: minresult, max: maxresult };
		}

		/**
  * Testing rectangle overlap
  * @ignore
  * @method
  * @param {Rect} r - rectangle collision
  * @param {Rect} b - collision boundry
  * @return {Object}
  * @private
  */

	}, {
		key: "testRectOverlap",
		value: function testRectOverlap(r, b) {
			// Instances don't overlap themselves.  Also return false early if either object has collisions disabled.
			if (!b || !b.collisionsEnabled) return false;

			/**PREVIEWONLY**/this.collisioncheck_count++;

			b.update_bbox();

			var layerb = b.layer;
			var haspolyb, polyb;

			// Reject via bounding boxes first (fastest)
			if (!b.bbox.intersects_rect(r)) return false;

			// Test rect against tilemap
			if (b.tilemap_exists) {
				b.getCollisionRectCandidates(r, collrect_candidates);

				var collrects = collrect_candidates;
				var i, len, c, tilerc;
				var tmx = b.x;
				var tmy = b.y;

				for (i = 0, len = collrects.length; i < len; ++i) {
					c = collrects[i];
					tilerc = c.rc;
					/**PREVIEWONLY**/this.collisioncheck_count++;

					if (r.intersects_rect_off(tilerc, tmx, tmy)) {
						// Check against tile poly if present
						if (c.poly) {
							/**PREVIEWONLY**/this.polycheck_count++;

							this.temp_poly.set_from_rect(r, 0, 0);

							if (c.poly.intersects_poly(this.temp_poly, -(tmx + tilerc.left), -(tmy + tilerc.top))) {
								cr.clearArray(collrect_candidates);
								return true;
							}
						}
						// No poly: bounding boxes overlap so register a collision
						else {
								cr.clearArray(collrect_candidates);
								return true;
							}
					}
				}

				cr.clearArray(collrect_candidates);
				return false;
			}
			// Test rect against object
			else {
					/**PREVIEWONLY**/this.polycheck_count++;

					tmpQuad.set_from_rect(r);

					// Reject via bounding quads second (presumably next fastest)
					if (!b.bquad.intersects_quad(tmpQuad)) return false;

					haspolyb = b.collision_poly && !b.collision_poly.is_empty();

					// Does not have collision poly: must be in bounding quad overlap
					if (!haspolyb) return true;

					b.collision_poly.cache_poly(b.width, b.height, b.angle);
					tmpQuad.offset(-r.left, -r.top);
					this.temp_poly.set_from_quad(tmpQuad, 0, 0, 1, 1);

					return b.collision_poly.intersects_poly(this.temp_poly, r.left - b.x, r.top - b.y);
				}
		}

		/** @private */

	}, {
		key: "testSegmentOverlap",
		value: function testSegmentOverlap(x1, y1, x2, y2, b) {
			if (!b || !b.collisionsEnabled) return false;

			/**PREVIEWONLY**/this.collisioncheck_count++;
			b.update_bbox();

			var layerb = b.layer;
			var haspolyb, polyb;

			// Reject via bounding boxes first (fastest). Create temporary bounding box around the segment.
			tmpRect.set(cr.min(x1, x2), cr.min(y1, y2), cr.max(x1, x2), cr.max(y1, y2));

			if (!b.bbox.intersects_rect(tmpRect)) return false;

			// Test segment against tilemap
			if (b.tilemap_exists) {
				b.getCollisionRectCandidates(tmpRect, collrect_candidates);
				var collrects = collrect_candidates;
				var i, len, c, tilerc;
				var tmx = b.x;
				var tmy = b.y;

				for (i = 0, len = collrects.length; i < len; ++i) {
					c = collrects[i];
					tilerc = c.rc;
					/**PREVIEWONLY**/this.collisioncheck_count++;

					// Segment bounding box intersects this tile collision rectangle
					if (tmpRect.intersects_rect_off(tilerc, tmx, tmy)) {
						/**PREVIEWONLY**/this.polycheck_count++;

						// Test real segment intersection
						tmpQuad.set_from_rect(tilerc);
						tmpQuad.offset(tmx, tmy);

						if (tmpQuad.intersects_segment(x1, y1, x2, y2)) {
							// Check against tile collision poly if any
							if (c.poly) {
								if (c.poly.intersects_segment(tmx + tilerc.left, tmy + tilerc.top, x1, y1, x2, y2)) {
									cr.clearArray(collrect_candidates);
									return true;
								}
							}
							// Otherwise is intersecting tile box
							else {
									cr.clearArray(collrect_candidates);
									return true;
								}
						}
					}
				}

				cr.clearArray(collrect_candidates);
				return false;
			} else {
				/**PREVIEWONLY**/this.polycheck_count++;

				// Reject via bounding quads second (presumably next fastest)
				if (!b.bquad.intersects_segment(x1, y1, x2, y2)) return false;

				haspolyb = b.collision_poly && !b.collision_poly.is_empty();

				// Does not have collision poly: must be in bounding quad intersection
				if (!haspolyb) return true;

				b.collision_poly.cache_poly(b.width, b.height, b.angle);

				return b.collision_poly.intersects_segment(b.x, b.y, x1, y1, x2, y2);
			}
		}

		/** @private
  * Push to try and move out of solid.  Pass -1, 0 or 1 for xdir and ydir to specify a push direction.
  */

	}, {
		key: "pushOutSolid",
		value: function pushOutSolid(inst, xdir, ydir, dist, include_jumpthrus, specific_jumpthru) {
			var push_dist = dist || 50;

			var oldx = inst.x;
			var oldy = inst.y;

			var i;
			var last_overlapped = null,
			    secondlast_overlapped = null;

			for (i = 0; i < push_dist; i++) {
				inst.x = oldx + xdir * i;
				inst.y = oldy + ydir * i;
				inst.set_bbox_changed();

				// Test if we've cleared the last instance we were overlapping
				if (!this.testOverlap(inst, last_overlapped)) {
					// See if we're still overlapping a different solid
					last_overlapped = this.testOverlapSolid(inst);

					if (last_overlapped) secondlast_overlapped = last_overlapped;

					// We're clear of all solids - check jumpthrus
					if (!last_overlapped) {
						if (include_jumpthrus) {
							if (specific_jumpthru) last_overlapped = this.testOverlap(inst, specific_jumpthru) ? specific_jumpthru : null;else last_overlapped = this.testOverlapJumpThru(inst);

							if (last_overlapped) secondlast_overlapped = last_overlapped;
						}

						// Clear of both - completed push out.  Adjust fractionally to 1/16th of a pixel.
						if (!last_overlapped) {
							if (secondlast_overlapped) this.pushInFractional(inst, xdir, ydir, secondlast_overlapped, 16);

							return true;
						}
					}
				}
			}

			// Didn't get out a solid: oops, we're stuck.
			// Restore old position.
			inst.x = oldx;
			inst.y = oldy;
			inst.set_bbox_changed();
			return false;
		}

		/** @private */

	}, {
		key: "pushOut",
		value: function pushOut(inst, xdir, ydir, dist, otherinst) {
			var push_dist = dist || 50;

			var oldx = inst.x;
			var oldy = inst.y;

			var i;

			for (i = 0; i < push_dist; i++) {
				inst.x = oldx + xdir * i;
				inst.y = oldy + ydir * i;
				inst.set_bbox_changed();

				// Test if we've cleared the last instance we were overlapping
				if (!this.testOverlap(inst, otherinst)) return true;
			}

			// Didn't get out a solid: oops, we're stuck.
			// Restore old position.
			inst.x = oldx;
			inst.y = oldy;
			inst.set_bbox_changed();
			return false;
		}

		/** @private */

	}, {
		key: "pushInFractional",
		value: function pushInFractional(inst, xdir, ydir, obj, limit) {
			var divisor = 2;
			var frac;
			var forward = false;
			var overlapping = false;
			var bestx = inst.x;
			var besty = inst.y;

			while (divisor <= limit) {
				frac = 1 / divisor;
				divisor *= 2;

				inst.x += xdir * frac * (forward ? 1 : -1);
				inst.y += ydir * frac * (forward ? 1 : -1);
				inst.set_bbox_changed();

				if (this.testOverlap(inst, obj)) {
					// Overlapped something: try going forward again
					forward = true;
					overlapping = true;
				} else {
					// Didn't overlap anything: keep going back
					forward = false;
					overlapping = false;
					bestx = inst.x;
					besty = inst.y;
				}
			}

			// If left overlapping, move back to last place not overlapping
			if (overlapping) {
				inst.x = bestx;
				inst.y = besty;
				inst.set_bbox_changed();
			}
		}
	}, {
		key: "pushOutSolidNearest",


		/** @private */

		value: function pushOutSolidNearest(inst, max_dist_) {
			var max_dist = cr.is_undefined(max_dist_) ? 100 : max_dist_;
			var dist = 0;
			var oldx = inst.x;
			var oldy = inst.y;

			var dir = 0;
			var dx = 0,
			    dy = 0;
			var last_overlapped = this.testOverlapSolid(inst);

			if (!last_overlapped) return true; // already clear of solids

			// 8-direction spiral scan
			while (dist <= max_dist) {
				switch (dir) {
					case 0:
						dx = 0;dy = -1;dist++;break;
					case 1:
						dx = 1;dy = -1;break;
					case 2:
						dx = 1;dy = 0;break;
					case 3:
						dx = 1;dy = 1;break;
					case 4:
						dx = 0;dy = 1;break;
					case 5:
						dx = -1;dy = 1;break;
					case 6:
						dx = -1;dy = 0;break;
					case 7:
						dx = -1;dy = -1;break;
				}

				dir = (dir + 1) % 8;

				inst.x = cr.floor(oldx + dx * dist);
				inst.y = cr.floor(oldy + dy * dist);
				inst.set_bbox_changed();

				// Test if we've cleared the last instance we were overlapping
				if (!this.testOverlap(inst, last_overlapped)) {
					// See if we're still overlapping a different solid
					last_overlapped = this.testOverlapSolid(inst);

					// We're clear of all solids
					if (!last_overlapped) return true;
				}
			}

			// Didn't get pushed out: restore old position and return false
			inst.x = oldx;
			inst.y = oldy;
			inst.set_bbox_changed();
			return false;
		}
	}, {
		key: "registerCollision",


		/** @private */

		value: function registerCollision(a, b) {
			// Ignore if either instance has disabled collisions
			if (!a.collisionsEnabled || !b.collisionsEnabled) return;

			this.registered_collisions.push([a, b]);
		}

		/** @private */

	}, {
		key: "checkRegisteredCollision",
		value: function checkRegisteredCollision(a, b) {
			var i, len, x;
			for (i = 0, len = this.registered_collisions.length; i < len; i++) {
				x = this.registered_collisions[i];

				if (x[0] == a && x[1] == b || x[0] == b && x[1] == a) return true;
			}

			return false;
		}

		/** @private */

	}, {
		key: "calculateSolidBounceAngle",
		value: function calculateSolidBounceAngle(inst, startx, starty, obj) {
			var objx = inst.x;
			var objy = inst.y;
			var radius = cr.max(10, cr.distanceTo(startx, starty, objx, objy));
			var startangle = cr.angleTo(startx, starty, objx, objy);
			var firstsolid = obj || this.testOverlapSolid(inst);

			// Not overlapping a solid: function used wrong, return inverse of object angle (so it bounces back in reverse direction)
			if (!firstsolid) return cr.clamp_angle(startangle + cr.PI);

			var cursolid = firstsolid;

			// Rotate anticlockwise in 5 degree increments until no longer overlapping
			// Don't search more than 175 degrees around (36 * 5 = 180)
			var i, curangle, anticlockwise_free_angle, clockwise_free_angle;
			var increment = cr.to_radians(5); // 5 degree increments

			for (i = 1; i < 36; i++) {
				curangle = startangle - i * increment;
				inst.x = startx + Math.cos(curangle) * radius;
				inst.y = starty + Math.sin(curangle) * radius;
				inst.set_bbox_changed();

				// No longer overlapping current solid
				if (!this.testOverlap(inst, cursolid)) {
					// Search for any other solid
					cursolid = obj ? null : this.testOverlapSolid(inst);

					// Not overlapping any other solid: we've now reached the anticlockwise free angle
					if (!cursolid) {
						anticlockwise_free_angle = curangle;
						break;
					}
				}
			}

			// Did not manage to free up in anticlockwise direction: use reverse angle
			if (i === 36) anticlockwise_free_angle = cr.clamp_angle(startangle + cr.PI);

			var cursolid = firstsolid;

			// Now search in clockwise direction
			for (i = 1; i < 36; i++) {
				curangle = startangle + i * increment;
				inst.x = startx + Math.cos(curangle) * radius;
				inst.y = starty + Math.sin(curangle) * radius;
				inst.set_bbox_changed();

				// No longer overlapping current solid
				if (!this.testOverlap(inst, cursolid)) {
					// Search for any other solid
					cursolid = obj ? null : this.testOverlapSolid(inst);

					// Not overlapping any other solid: we've now reached the clockwise free angle
					if (!cursolid) {
						clockwise_free_angle = curangle;
						break;
					}
				}
			}

			// Did not manage to free up in clockwise direction: use reverse angle
			if (i === 36) clockwise_free_angle = cr.clamp_angle(startangle + cr.PI);

			// Put the object back to its original position
			inst.x = objx;
			inst.y = objy;
			inst.set_bbox_changed();

			// Both angles match: can only be if object completely contained by solid and both searches went all
			// the way round to backwards.  Just return the back angle.
			if (clockwise_free_angle === anticlockwise_free_angle) return clockwise_free_angle;

			// We now have the first anticlockwise and first clockwise angles that are free.
			// Calculate the normal.
			var half_diff = cr.angleDiff(clockwise_free_angle, anticlockwise_free_angle) / 2;
			var normal;

			// Acute angle
			if (cr.angleClockwise(clockwise_free_angle, anticlockwise_free_angle)) {
				normal = cr.clamp_angle(anticlockwise_free_angle + half_diff + cr.PI);
			}
			// Obtuse angle
			else {
					normal = cr.clamp_angle(clockwise_free_angle + half_diff);
				}

			assert2(!isNaN(normal), "Bounce normal computed as NaN");

			// Reflect startangle about normal (r = v - 2 (v . n) n)
			var vx = Math.cos(startangle);
			var vy = Math.sin(startangle);
			var nx = Math.cos(normal);
			var ny = Math.sin(normal);
			var v_dot_n = vx * nx + vy * ny;
			var rx = vx - 2 * v_dot_n * nx;
			var ry = vy - 2 * v_dot_n * ny;
			return cr.angleTo(0, 0, rx, ry);
		}

		/** @private */

	}, {
		key: "saveInstanceToJSON",
		value: function saveInstanceToJSON(inst, state_only) {

			var i, len, world, behinst, et;
			var type = inst.type;
			var plugin = type.plugin;

			var o = {};

			if (state_only) o["c2"] = true; // mark as known json data from Construct 2
			else o["uid"] = inst.uid;

			if (cr.hasAnyOwnProperty(inst.extra)) o["ex"] = CopyExtraObject(inst.extra);

			// Save instance variables
			if (inst.instance_vars && inst.instance_vars.length) {
				o["ivs"] = {};

				for (i = 0, len = inst.instance_vars.length; i < len; i++) {
					o["ivs"][inst.type.instvar_sids[i].toString()] = inst.instance_vars[i];
				}
			}

			// Save world data
			if (plugin.is_world) {
				world = {
					"x": inst.x,
					"y": inst.y,
					"w": inst.width,
					"h": inst.height,
					"l": inst.layer.sid,
					"zi": inst.get_zindex()
				};

				if (inst.angle !== 0) world["a"] = inst.angle;

				if (inst.opacity !== 1) world["o"] = inst.opacity;

				if (inst.hotspotX !== 0.5) world["hX"] = inst.hotspotX;

				if (inst.hotspotY !== 0.5) world["hY"] = inst.hotspotY;

				if (inst.blend_mode !== 0) world["bm"] = inst.blend_mode;

				if (!inst.visible) world["v"] = inst.visible;

				if (!inst.collisionsEnabled) world["ce"] = inst.collisionsEnabled;

				if (inst.my_timescale !== -1) world["mts"] = inst.my_timescale;

				if (type.effect_types.length) {
					world["fx"] = [];

					for (i = 0, len = type.effect_types.length; i < len; i++) {
						et = type.effect_types[i];
						world["fx"].push({ "name": et.name,
							"active": inst.active_effect_flags[et.index],
							"params": inst.effect_params[et.index] });
					}
				}

				o["w"] = world;
			}

			// Save behaviors
			if (inst.behavior_insts && inst.behavior_insts.length) {
				o["behs"] = {};

				for (i = 0, len = inst.behavior_insts.length; i < len; i++) {
					behinst = inst.behavior_insts[i];

					if (behinst.saveToJSON) o["behs"][behinst.type.sid.toString()] = behinst.saveToJSON();
				}
			}

			// Save plugin own data
			if (inst.saveToJSON) o["data"] = inst.saveToJSON();

			return o;
		}

		/** @private */

	}], [{
		key: "segments_intersect",
		value: function segments_intersect(a1x, a1y, a2x, a2y, b1x, b1y, b2x, b2y) {

			var max_ax, min_ax, max_ay, min_ay, max_bx, min_bx, max_by, min_by;

			// Long-hand code since this is a performance hotspot and this type of
			// code minimises the number of conditional tests necessary.
			if (a1x < a2x) {
				min_ax = a1x;
				max_ax = a2x;
			} else {
				min_ax = a2x;
				max_ax = a1x;
			}

			if (b1x < b2x) {
				min_bx = b1x;
				max_bx = b2x;
			} else {
				min_bx = b2x;
				max_bx = b1x;
			}

			if (max_ax < min_bx || min_ax > max_bx) return false;

			if (a1y < a2y) {
				min_ay = a1y;
				max_ay = a2y;
			} else {
				min_ay = a2y;
				max_ay = a1y;
			}

			if (b1y < b2y) {
				min_by = b1y;
				max_by = b2y;
			} else {
				min_by = b2y;
				max_by = b1y;
			}

			if (max_ay < min_by || min_ay > max_by) return false;

			var dpx = b1x - a1x + b2x - a2x;
			var dpy = b1y - a1y + b2y - a2y;
			var qax = a2x - a1x;
			var qay = a2y - a1y;
			var qbx = b2x - b1x;
			var qby = b2y - b1y;

			var d = cr.abs(qay * qbx - qby * qax);
			var la = qbx * dpy - qby * dpx;

			if (cr.abs(la) > d) return false;

			var lb = qax * dpy - qay * dpx;

			return cr.abs(lb) <= d;
		}
	}]);

	/**
 * Builds new math into global math and Application.math
 * @param {number} x - position.x
 * @param {number} y - position.y
 */

	function Math() {
		_classCallCheck(this, Math);
	}

	return Math;
}();

/* harmony default export */ exports["a"] = Math;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_ITypes_js__ = __webpack_require__(5);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };


var IOptions = __WEBPACK_IMPORTED_MODULE_0__interfaces_ITypes_js__["c" /* IOptions */];


/* harmony default export */ exports["a"] = {

    overridescroll: false,
    drag: 0,
    targetfps: 60,
    mute: false,

    paths: {

        data: "data/",
        images: "images/",
        url: ""

    },

    target: {
        canvas: null, // String - Id of the main canvas
        buffer: null, // String - Id of the buffer canvas
        blitter: null },

    global: {

        imageSmoothingEnabled: false,

        globalCompositeOperation: "destination-in" },

    flags: {

        webGL: false,

        canvas: true,
        mstouch: true,
        seamless: false,
        tight: true,
        touchprevent: false,
        opaque: true

    },

    canvas: {

        opacity: 0,
        override: false, //Toggle the use of options.canvas
        name: 'canvas', //Use canvas.name
        buffername: 'buffer', //Use canvas.buffer
        buffer: true, //Toggle the use of double-buffering
        background: '#000000', //Assign canvas element background colour

        //Assign canvas element position properties
        position: {
            //position:'absolute',
            //top:0,
            //left:window.innerWidth/2,
            //center:true,
            //z:1
            position: 'absolute',
            top: "",
            left: window.innerWidth * 2,
            //left:"",
            center: false,
            z: 1
        },

        //Assign canvas size properties
        size: {

            width: window.innerWidth,
            height: window.innerHeight

        }

    },

    msFlags: {

        msZoom: false

    },

    //Override Functions
    override: {

        keyboard: false,
        mouse: false,
        MSHoldVisual: false,
        SelectStart: false,
        ContextMenu: false,
        Drag: false

    },

    //Return Options Value
    get: function get(attr) {

        //If Attribute
        if (attr) {

            //Get list of apps
            var list = SJS.controller.list();

            //list is object
            if ((typeof list === "undefined" ? "undefined" : _typeof(list)) == "object") {
                //return window.apps.option.
                for (var attrname in this) {
                    if (attrname == attr) return eval("list.options." + attrname);
                }
            } else {
                for (var i = window.apps.length - 1; i >= 0; i--) {
                    for (var attrname in this) {
                        if (attrname == attr) {
                            var l = [];
                            l.push(eval("list[" + i + "].options." + attrname));
                        }
                    }
                }return l;
            }

            return null;
        } else return this;
    },

    set: function set(options) {

        for (var attrname in options) {
            this[attrname] = options[attrname];
        };

        return this;
    }

};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_ITypes__ = __webpack_require__(5);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var IStatsBuffer = __WEBPACK_IMPORTED_MODULE_0__interfaces_ITypes__["k" /* IStatsBuffer */];

/*
*
*/

var StatsBuffer = function () {

		/*
  *
  */

		function StatsBuffer(col, colold) {
				_classCallCheck(this, StatsBuffer);

				this.x = 0;
				this.y = 0;
				this.w = 0;
				this.h = 0;
				this.s = 0;
				this.a = 0;
				this.c = 0;
				this.colour = "";
				this.oldcol = "";

				if (!(typeof col === 'string' || col == null)) {
						throw new TypeError("Value of argument \"col\" violates contract.\n\nExpected:\nstring | void\n\nGot:\n" + _inspect(col));
				}

				if (!(typeof colold === 'string' || colold == null)) {
						throw new TypeError("Value of argument \"colold\" violates contract.\n\nExpected:\nstring | void\n\nGot:\n" + _inspect(colold));
				}

				this.init();

				return this;
		}

		/*
  *
  */

		_createClass(StatsBuffer, [{
				key: "set",
				value: function set(obj) {
						if (!(obj instanceof Object)) {
								throw new TypeError("Value of argument \"obj\" violates contract.\n\nExpected:\nObject\n\nGot:\n" + _inspect(obj));
						}

						this.x = obj.x;

						if (!(typeof this.x === 'number')) {
								throw new TypeError("Value of \"this.x\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(this.x));
						}

						this.y = obj.y;

						if (!(typeof this.y === 'number')) {
								throw new TypeError("Value of \"this.y\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(this.y));
						}

						this.w = obj.w;

						if (!(typeof this.w === 'number')) {
								throw new TypeError("Value of \"this.w\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(this.w));
						}

						this.h = obj.h;

						if (!(typeof this.h === 'number')) {
								throw new TypeError("Value of \"this.h\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(this.h));
						}

						this.s = obj.s;

						if (!(typeof this.s === 'number')) {
								throw new TypeError("Value of \"this.s\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(this.s));
						}

						this.a = obj.a;

						if (!(typeof this.a === 'number')) {
								throw new TypeError("Value of \"this.a\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(this.a));
						}

						this.c = obj.c;

						if (!(typeof this.c === 'number')) {
								throw new TypeError("Value of \"this.c\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(this.c));
						}

						this.colour = obj.colour;

						if (!(typeof this.colour === 'string')) {
								throw new TypeError("Value of \"this.colour\" violates contract.\n\nExpected:\nstring\n\nGot:\n" + _inspect(this.colour));
						}

						this.oldcol = obj.oldcol;

						if (!(typeof this.oldcol === 'string')) {
								throw new TypeError("Value of \"this.oldcol\" violates contract.\n\nExpected:\nstring\n\nGot:\n" + _inspect(this.oldcol));
						}
				}

				/*
    *
    */

		}, {
				key: "init",
				value: function init(col, colold) {
						if (!(typeof col === 'string' || col == null)) {
								throw new TypeError("Value of argument \"col\" violates contract.\n\nExpected:\nstring | void\n\nGot:\n" + _inspect(col));
						}

						if (!(typeof colold === 'string' || colold == null)) {
								throw new TypeError("Value of argument \"colold\" violates contract.\n\nExpected:\nstring | void\n\nGot:\n" + _inspect(colold));
						}

						this.x = 0;

						this.y = 0;

						this.w = 0;

						this.h = 0;

						this.s = 0;

						this.a = 0;

						this.c = 0;

						this.colour = col || "";

						this.oldcol = colold || "";
				}
		}]);

		return StatsBuffer;
}();

/* harmony default export */ exports["a"] = StatsBuffer;

function _inspect(input, depth) {
		var maxDepth = 4;
		var maxKeys = 15;

		if (depth === undefined) {
				depth = 0;
		}

		depth += 1;

		if (input === null) {
				return 'null';
		} else if (input === undefined) {
				return 'void';
		} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
				return typeof input === "undefined" ? "undefined" : _typeof(input);
		} else if (Array.isArray(input)) {
				if (input.length > 0) {
						var _ret = function () {
								if (depth > maxDepth) return {
												v: '[...]'
										};

								var first = _inspect(input[0], depth);

								if (input.every(function (item) {
										return _inspect(item, depth) === first;
								})) {
										return {
												v: first.trim() + '[]'
										};
								} else {
										return {
												v: '[' + input.slice(0, maxKeys).map(function (item) {
														return _inspect(item, depth);
												}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
										};
								}
						}();

						if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
				} else {
						return 'Array';
				}
		} else {
				var keys = Object.keys(input);

				if (!keys.length) {
						if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
								return input.constructor.name;
						} else {
								return 'Object';
						}
				}

				if (depth > maxDepth) return '{...}';
				var indent = '  '.repeat(depth - 1);
				var entries = keys.slice(0, maxKeys).map(function (key) {
						return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
				}).join('\n  ' + indent);

				if (keys.length >= maxKeys) {
						entries += '\n  ' + indent + '...';
				}

				if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
						return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
				} else {
						return '{\n  ' + indent + entries + '\n' + indent + '}';
				}
		}
}

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(15)
  , toLength  = __webpack_require__(10)
  , toIndex   = __webpack_require__(33);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index;
    } return !IS_INCLUDES && -1;
  };
};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var $            = __webpack_require__(1)
  , hide         = __webpack_require__(18)
  , redefineAll  = __webpack_require__(41)
  , ctx          = __webpack_require__(16)
  , strictNew    = __webpack_require__(43)
  , defined      = __webpack_require__(17)
  , forOf        = __webpack_require__(30)
  , $iterDefine  = __webpack_require__(49)
  , step         = __webpack_require__(79)
  , ID           = __webpack_require__(27)('id')
  , $has         = __webpack_require__(9)
  , isObject     = __webpack_require__(2)
  , setSpecies   = __webpack_require__(42)
  , DESCRIPTORS  = __webpack_require__(12)
  , isExtensible = Object.isExtensible || isObject
  , SIZE         = DESCRIPTORS ? '_s' : 'size'
  , id           = 0;

var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!$has(it, ID)){
    // can't set id to frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add id
    if(!create)return 'E';
    // add missing object id
    hide(it, ID, ++id);
  // return object id with prefix
  } return 'O' + it[ID];
};

var getEntry = function(that, key){
  // fast case
  var index = fastKey(key), entry;
  if(index !== 'F')return that._i[index];
  // frozen object case
  for(entry = that._f; entry; entry = entry.n){
    if(entry.k == key)return entry;
  }
};

module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      strictNew(that, C, NAME);
      that._i = $.create(null); // index
      that._f = undefined;      // first entry
      that._l = undefined;      // last entry
      that[SIZE] = 0;           // size
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear(){
        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
          entry.r = true;
          if(entry.p)entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function(key){
        var that  = this
          , entry = getEntry(that, key);
        if(entry){
          var next = entry.n
            , prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if(prev)prev.n = next;
          if(next)next.p = prev;
          if(that._f == entry)that._f = next;
          if(that._l == entry)that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /*, that = undefined */){
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
          , entry;
        while(entry = entry ? entry.n : this._f){
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while(entry && entry.r)entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key){
        return !!getEntry(this, key);
      }
    });
    if(DESCRIPTORS)$.setDesc(C.prototype, 'size', {
      get: function(){
        return defined(this[SIZE]);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var entry = getEntry(that, key)
      , prev, index;
    // change existing entry
    if(entry){
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if(!that._f)that._f = entry;
      if(prev)prev.n = entry;
      that[SIZE]++;
      // add to index
      if(index !== 'F')that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function(C, NAME, IS_MAP){
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function(iterated, kind){
      this._t = iterated;  // target
      this._k = kind;      // kind
      this._l = undefined; // previous
    }, function(){
      var that  = this
        , kind  = that._k
        , entry = that._l;
      // revert to the last existing entry
      while(entry && entry.r)entry = entry.p;
      // get next entry
      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if(kind == 'keys'  )return step(0, entry.k);
      if(kind == 'values')return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var forOf   = __webpack_require__(30)
  , classof = __webpack_require__(36);
module.exports = function(NAME){
  return function toJSON(){
    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
    var arr = [];
    forOf(this, false, arr.push, arr);
    return arr;
  };
};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var hide              = __webpack_require__(18)
  , redefineAll       = __webpack_require__(41)
  , anObject          = __webpack_require__(3)
  , isObject          = __webpack_require__(2)
  , strictNew         = __webpack_require__(43)
  , forOf             = __webpack_require__(30)
  , createArrayMethod = __webpack_require__(35)
  , $has              = __webpack_require__(9)
  , WEAK              = __webpack_require__(27)('weak')
  , isExtensible      = Object.isExtensible || isObject
  , arrayFind         = createArrayMethod(5)
  , arrayFindIndex    = createArrayMethod(6)
  , id                = 0;

// fallback for frozen keys
var frozenStore = function(that){
  return that._l || (that._l = new FrozenStore);
};
var FrozenStore = function(){
  this.a = [];
};
var findFrozen = function(store, key){
  return arrayFind(store.a, function(it){
    return it[0] === key;
  });
};
FrozenStore.prototype = {
  get: function(key){
    var entry = findFrozen(this, key);
    if(entry)return entry[1];
  },
  has: function(key){
    return !!findFrozen(this, key);
  },
  set: function(key, value){
    var entry = findFrozen(this, key);
    if(entry)entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function(key){
    var index = arrayFindIndex(this.a, function(it){
      return it[0] === key;
    });
    if(~index)this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      strictNew(that, C, NAME);
      that._i = id++;      // collection id
      that._l = undefined; // leak store for frozen objects
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function(key){
        if(!isObject(key))return false;
        if(!isExtensible(key))return frozenStore(this)['delete'](key);
        return $has(key, WEAK) && $has(key[WEAK], this._i) && delete key[WEAK][this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key){
        if(!isObject(key))return false;
        if(!isExtensible(key))return frozenStore(this).has(key);
        return $has(key, WEAK) && $has(key[WEAK], this._i);
      }
    });
    return C;
  },
  def: function(that, key, value){
    if(!isExtensible(anObject(key))){
      frozenStore(that).set(key, value);
    } else {
      $has(key, WEAK) || hide(key, WEAK, {});
      key[WEAK][that._i] = value;
    } return that;
  },
  frozenStore: frozenStore,
  WEAK: WEAK
};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2)
  , document = __webpack_require__(6).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(3);
module.exports = function(){
  var that   = anObject(this)
    , result = '';
  if(that.global)     result += 'g';
  if(that.ignoreCase) result += 'i';
  if(that.multiline)  result += 'm';
  if(that.unicode)    result += 'u';
  if(that.sticky)     result += 'y';
  return result;
};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(15)
  , getNames  = __webpack_require__(1).getNames
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return getNames(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.get = function getOwnPropertyNames(it){
  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
  return getNames(toIObject(it));
};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6).document && document.documentElement;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(31)
  , ITERATOR   = __webpack_require__(4)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(2)
  , floor    = Math.floor;
module.exports = function isInteger(it){
  return !isObject(it) && isFinite(it) && floor(it) === it;
};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(2)
  , cof      = __webpack_require__(20)
  , MATCH    = __webpack_require__(4)('match');
module.exports = function(it){
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(3);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var $              = __webpack_require__(1)
  , descriptor     = __webpack_require__(24)
  , setToStringTag = __webpack_require__(32)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(18)(IteratorPrototype, __webpack_require__(4)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ },
/* 79 */
/***/ function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ },
/* 80 */
/***/ function(module, exports) {

// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x){
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

var $         = __webpack_require__(1)
  , toIObject = __webpack_require__(15)
  , isEnum    = $.isEnum;
module.exports = function(isEntries){
  return function(it){
    var O      = toIObject(it)
      , keys   = $.getKeys(O)
      , length = keys.length
      , i      = 0
      , result = []
      , key;
    while(length > i)if(isEnum.call(O, key = keys[i++])){
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var $        = __webpack_require__(1)
  , anObject = __webpack_require__(3)
  , Reflect  = __webpack_require__(6).Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
  var keys       = $.getNames(anObject(it))
    , getSymbols = $.getSymbols;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};

/***/ },
/* 83 */
/***/ function(module, exports) {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y){
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

var global = __webpack_require__(6)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

// https://github.com/ljharb/proposal-string-pad-left-right
var toLength = __webpack_require__(10)
  , repeat   = __webpack_require__(86)
  , defined  = __webpack_require__(17);

module.exports = function(that, maxLength, fillString, left){
  var S            = String(defined(that))
    , stringLength = S.length
    , fillStr      = fillString === undefined ? ' ' : String(fillString)
    , intMaxLength = toLength(maxLength);
  if(intMaxLength <= stringLength)return S;
  if(fillStr == '')fillStr = ' ';
  var fillLen = intMaxLength - stringLength
    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__(34)
  , defined   = __webpack_require__(17);

module.exports = function repeat(count){
  var str = String(defined(this))
    , res = ''
    , n   = toInteger(count);
  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
  return res;
};

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

var ctx                = __webpack_require__(16)
  , invoke             = __webpack_require__(39)
  , html               = __webpack_require__(73)
  , cel                = __webpack_require__(70)
  , global             = __webpack_require__(6)
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listner = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(__webpack_require__(20)(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listner;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listner, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(36)
  , ITERATOR  = __webpack_require__(4)('iterator')
  , Iterators = __webpack_require__(31);
module.exports = __webpack_require__(21).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(26)
  , step             = __webpack_require__(79)
  , Iterators        = __webpack_require__(31)
  , toIObject        = __webpack_require__(15);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(49)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(257)
var ieee754 = __webpack_require__(259)
var isArray = __webpack_require__(258)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45)))

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var DataReader = __webpack_require__(93);

function ArrayReader(data) {
    if (data) {
        this.data = data;
        this.length = this.data.length;
        this.index = 0;
        this.zero = 0;

        for(var i = 0; i < this.data.length; i++) {
            data[i] = data[i] & 0xFF;
        }
    }
}
ArrayReader.prototype = new DataReader();
/**
 * @see DataReader.byteAt
 */
ArrayReader.prototype.byteAt = function(i) {
    return this.data[this.zero + i];
};
/**
 * @see DataReader.lastIndexOfSignature
 */
ArrayReader.prototype.lastIndexOfSignature = function(sig) {
    var sig0 = sig.charCodeAt(0),
        sig1 = sig.charCodeAt(1),
        sig2 = sig.charCodeAt(2),
        sig3 = sig.charCodeAt(3);
    for (var i = this.length - 4; i >= 0; --i) {
        if (this.data[i] === sig0 && this.data[i + 1] === sig1 && this.data[i + 2] === sig2 && this.data[i + 3] === sig3) {
            return i - this.zero;
        }
    }

    return -1;
};
/**
 * @see DataReader.readData
 */
ArrayReader.prototype.readData = function(size) {
    this.checkOffset(size);
    if(size === 0) {
        return [];
    }
    var result = this.data.slice(this.zero + this.index, this.zero + this.index + size);
    this.index += size;
    return result;
};
module.exports = ArrayReader;


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

function CompressedObject() {
    this.compressedSize = 0;
    this.uncompressedSize = 0;
    this.crc32 = 0;
    this.compressionMethod = null;
    this.compressedContent = null;
}

CompressedObject.prototype = {
    /**
     * Return the decompressed content in an unspecified format.
     * The format will depend on the decompressor.
     * @return {Object} the decompressed content.
     */
    getContent: function() {
        return null; // see implementation
    },
    /**
     * Return the compressed content in an unspecified format.
     * The format will depend on the compressed conten source.
     * @return {Object} the compressed content.
     */
    getCompressedContent: function() {
        return null; // see implementation
    }
};
module.exports = CompressedObject;


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var utils = __webpack_require__(11);

function DataReader(data) {
    this.data = null; // type : see implementation
    this.length = 0;
    this.index = 0;
    this.zero = 0;
}
DataReader.prototype = {
    /**
     * Check that the offset will not go too far.
     * @param {string} offset the additional offset to check.
     * @throws {Error} an Error if the offset is out of bounds.
     */
    checkOffset: function(offset) {
        this.checkIndex(this.index + offset);
    },
    /**
     * Check that the specifed index will not be too far.
     * @param {string} newIndex the index to check.
     * @throws {Error} an Error if the index is out of bounds.
     */
    checkIndex: function(newIndex) {
        if (this.length < this.zero + newIndex || newIndex < 0) {
            throw new Error("End of data reached (data length = " + this.length + ", asked index = " + (newIndex) + "). Corrupted zip ?");
        }
    },
    /**
     * Change the index.
     * @param {number} newIndex The new index.
     * @throws {Error} if the new index is out of the data.
     */
    setIndex: function(newIndex) {
        this.checkIndex(newIndex);
        this.index = newIndex;
    },
    /**
     * Skip the next n bytes.
     * @param {number} n the number of bytes to skip.
     * @throws {Error} if the new index is out of the data.
     */
    skip: function(n) {
        this.setIndex(this.index + n);
    },
    /**
     * Get the byte at the specified index.
     * @param {number} i the index to use.
     * @return {number} a byte.
     */
    byteAt: function(i) {
        // see implementations
    },
    /**
     * Get the next number with a given byte size.
     * @param {number} size the number of bytes to read.
     * @return {number} the corresponding number.
     */
    readInt: function(size) {
        var result = 0,
            i;
        this.checkOffset(size);
        for (i = this.index + size - 1; i >= this.index; i--) {
            result = (result << 8) + this.byteAt(i);
        }
        this.index += size;
        return result;
    },
    /**
     * Get the next string with a given byte size.
     * @param {number} size the number of bytes to read.
     * @return {string} the corresponding string.
     */
    readString: function(size) {
        return utils.transformTo("string", this.readData(size));
    },
    /**
     * Get raw data without conversion, <size> bytes.
     * @param {number} size the number of bytes to read.
     * @return {Object} the raw data, implementation specific.
     */
    readData: function(size) {
        // see implementations
    },
    /**
     * Find the last occurence of a zip signature (4 bytes).
     * @param {string} sig the signature to find.
     * @return {number} the index of the last occurence, -1 if not found.
     */
    lastIndexOfSignature: function(sig) {
        // see implementations
    },
    /**
     * Get the next date.
     * @return {Date} the date.
     */
    readDate: function() {
        var dostime = this.readInt(4);
        return new Date(
        ((dostime >> 25) & 0x7f) + 1980, // year
        ((dostime >> 21) & 0x0f) - 1, // month
        (dostime >> 16) & 0x1f, // day
        (dostime >> 11) & 0x1f, // hour
        (dostime >> 5) & 0x3f, // minute
        (dostime & 0x1f) << 1); // second
    }
};
module.exports = DataReader;


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

exports.base64 = false;
exports.binary = false;
exports.dir = false;
exports.createFolders = false;
exports.date = null;
exports.compression = null;
exports.compressionOptions = null;
exports.comment = null;
exports.unixPermissions = null;
exports.dosPermissions = null;


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

exports.LOCAL_FILE_HEADER = "PK\x03\x04";
exports.CENTRAL_FILE_HEADER = "PK\x01\x02";
exports.CENTRAL_DIRECTORY_END = "PK\x05\x06";
exports.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x06\x07";
exports.ZIP64_CENTRAL_DIRECTORY_END = "PK\x06\x06";
exports.DATA_DESCRIPTOR = "PK\x07\x08";


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var DataReader = __webpack_require__(93);
var utils = __webpack_require__(11);

function StringReader(data, optimizedBinaryString) {
    this.data = data;
    if (!optimizedBinaryString) {
        this.data = utils.string2binary(this.data);
    }
    this.length = this.data.length;
    this.index = 0;
    this.zero = 0;
}
StringReader.prototype = new DataReader();
/**
 * @see DataReader.byteAt
 */
StringReader.prototype.byteAt = function(i) {
    return this.data.charCodeAt(this.zero + i);
};
/**
 * @see DataReader.lastIndexOfSignature
 */
StringReader.prototype.lastIndexOfSignature = function(sig) {
    return this.data.lastIndexOf(sig) - this.zero;
};
/**
 * @see DataReader.readData
 */
StringReader.prototype.readData = function(size) {
    this.checkOffset(size);
    // this will work because the constructor applied the "& 0xff" mask.
    var result = this.data.slice(this.zero + this.index, this.zero + this.index + size);
    this.index += size;
    return result;
};
module.exports = StringReader;


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var ArrayReader = __webpack_require__(91);

function Uint8ArrayReader(data) {
    if (data) {
        this.data = data;
        this.length = this.data.length;
        this.index = 0;
        this.zero = 0;
    }
}
Uint8ArrayReader.prototype = new ArrayReader();
/**
 * @see DataReader.readData
 */
Uint8ArrayReader.prototype.readData = function(size) {
    this.checkOffset(size);
    if(size === 0) {
        // in IE10, when using subarray(idx, idx), we get the array [0x00] instead of [].
        return new Uint8Array(0);
    }
    var result = this.data.subarray(this.zero + this.index, this.zero + this.index + size);
    this.index += size;
    return result;
};
module.exports = Uint8ArrayReader;


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(11);
var support = __webpack_require__(28);
var nodeBuffer = __webpack_require__(59);

/**
 * The following functions come from pako, from pako/lib/utils/strings
 * released under the MIT license, see pako https://github.com/nodeca/pako/
 */

// Table with utf8 lengths (calculated by first byte of sequence)
// Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
// because max possible codepoint is 0x10ffff
var _utf8len = new Array(256);
for (var i=0; i<256; i++) {
  _utf8len[i] = (i >= 252 ? 6 : i >= 248 ? 5 : i >= 240 ? 4 : i >= 224 ? 3 : i >= 192 ? 2 : 1);
}
_utf8len[254]=_utf8len[254]=1; // Invalid sequence start

// convert string to array (typed, when possible)
var string2buf = function (str) {
    var buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;

    // count binary size
    for (m_pos = 0; m_pos < str_len; m_pos++) {
        c = str.charCodeAt(m_pos);
        if ((c & 0xfc00) === 0xd800 && (m_pos+1 < str_len)) {
            c2 = str.charCodeAt(m_pos+1);
            if ((c2 & 0xfc00) === 0xdc00) {
                c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
                m_pos++;
            }
        }
        buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
    }

    // allocate buffer
    if (support.uint8array) {
        buf = new Uint8Array(buf_len);
    } else {
        buf = new Array(buf_len);
    }

    // convert
    for (i=0, m_pos = 0; i < buf_len; m_pos++) {
        c = str.charCodeAt(m_pos);
        if ((c & 0xfc00) === 0xd800 && (m_pos+1 < str_len)) {
            c2 = str.charCodeAt(m_pos+1);
            if ((c2 & 0xfc00) === 0xdc00) {
                c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
                m_pos++;
            }
        }
        if (c < 0x80) {
            /* one byte */
            buf[i++] = c;
        } else if (c < 0x800) {
            /* two bytes */
            buf[i++] = 0xC0 | (c >>> 6);
            buf[i++] = 0x80 | (c & 0x3f);
        } else if (c < 0x10000) {
            /* three bytes */
            buf[i++] = 0xE0 | (c >>> 12);
            buf[i++] = 0x80 | (c >>> 6 & 0x3f);
            buf[i++] = 0x80 | (c & 0x3f);
        } else {
            /* four bytes */
            buf[i++] = 0xf0 | (c >>> 18);
            buf[i++] = 0x80 | (c >>> 12 & 0x3f);
            buf[i++] = 0x80 | (c >>> 6 & 0x3f);
            buf[i++] = 0x80 | (c & 0x3f);
        }
    }

    return buf;
};

// Calculate max possible position in utf8 buffer,
// that will not break sequence. If that's not possible
// - (very small limits) return max size as is.
//
// buf[] - utf8 bytes array
// max   - length limit (mandatory);
var utf8border = function(buf, max) {
    var pos;

    max = max || buf.length;
    if (max > buf.length) { max = buf.length; }

    // go back from last position, until start of sequence found
    pos = max-1;
    while (pos >= 0 && (buf[pos] & 0xC0) === 0x80) { pos--; }

    // Fuckup - very small and broken sequence,
    // return max, because we should return something anyway.
    if (pos < 0) { return max; }

    // If we came to start of buffer - that means vuffer is too small,
    // return max too.
    if (pos === 0) { return max; }

    return (pos + _utf8len[buf[pos]] > max) ? pos : max;
};

// convert array to string
var buf2string = function (buf) {
    var str, i, out, c, c_len;
    var len = buf.length;

    // Reserve max possible length (2 words per char)
    // NB: by unknown reasons, Array is significantly faster for
    //     String.fromCharCode.apply than Uint16Array.
    var utf16buf = new Array(len*2);

    for (out=0, i=0; i<len;) {
        c = buf[i++];
        // quick process ascii
        if (c < 0x80) { utf16buf[out++] = c; continue; }

        c_len = _utf8len[c];
        // skip 5 & 6 byte codes
        if (c_len > 4) { utf16buf[out++] = 0xfffd; i += c_len-1; continue; }

        // apply mask on first byte
        c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;
        // join the rest
        while (c_len > 1 && i < len) {
            c = (c << 6) | (buf[i++] & 0x3f);
            c_len--;
        }

        // terminated by end of string?
        if (c_len > 1) { utf16buf[out++] = 0xfffd; continue; }

        if (c < 0x10000) {
            utf16buf[out++] = c;
        } else {
            c -= 0x10000;
            utf16buf[out++] = 0xd800 | ((c >> 10) & 0x3ff);
            utf16buf[out++] = 0xdc00 | (c & 0x3ff);
        }
    }

    // shrinkBuf(utf16buf, out)
    if (utf16buf.length !== out) {
        if(utf16buf.subarray) {
            utf16buf = utf16buf.subarray(0, out);
        } else {
            utf16buf.length = out;
        }
    }

    // return String.fromCharCode.apply(null, utf16buf);
    return utils.applyFromCharCode(utf16buf);
};


// That's all for the pako functions.


/**
 * Transform a javascript string into an array (typed if possible) of bytes,
 * UTF-8 encoded.
 * @param {String} str the string to encode
 * @return {Array|Uint8Array|Buffer} the UTF-8 encoded string.
 */
exports.utf8encode = function utf8encode(str) {
    if (support.nodebuffer) {
        return nodeBuffer(str, "utf-8");
    }

    return string2buf(str);
};


/**
 * Transform a bytes array (or a representation) representing an UTF-8 encoded
 * string into a javascript string.
 * @param {Array|Uint8Array|Buffer} buf the data de decode
 * @return {String} the decoded string.
 */
exports.utf8decode = function utf8decode(buf) {
    if (support.nodebuffer) {
        return utils.transformTo("nodebuffer", buf).toString("utf-8");
    }

    buf = utils.transformTo(support.uint8array ? "uint8array" : "array", buf);

    // return buf2string(buf);
    // Chrome prefers to work with "small" chunks of data
    // for the method buf2string.
    // Firefox and Chrome has their own shortcut, IE doesn't seem to really care.
    var result = [], k = 0, len = buf.length, chunk = 65536;
    while (k < len) {
        var nextBoundary = utf8border(buf, Math.min(k + chunk, len));
        if (support.uint8array) {
            result.push(buf2string(buf.subarray(k, nextBoundary)));
        } else {
            result.push(buf2string(buf.slice(k, nextBoundary)));
        }
        k = nextBoundary;
    }
    return result.join("");

};
// vim: set shiftwidth=4 softtabstop=4:


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
// String encode/decode helpers



var utils = __webpack_require__(23);


// Quick check if we can use fast array to bin string conversion
//
// - apply(Array) can fail on Android 2.2
// - apply(Uint8Array) can fail on iOS 5.1 Safary
//
var STR_APPLY_OK = true;
var STR_APPLY_UIA_OK = true;

try { String.fromCharCode.apply(null, [ 0 ]); } catch (__) { STR_APPLY_OK = false; }
try { String.fromCharCode.apply(null, new Uint8Array(1)); } catch (__) { STR_APPLY_UIA_OK = false; }


// Table with utf8 lengths (calculated by first byte of sequence)
// Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
// because max possible codepoint is 0x10ffff
var _utf8len = new utils.Buf8(256);
for (var q = 0; q < 256; q++) {
  _utf8len[q] = (q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1);
}
_utf8len[254] = _utf8len[254] = 1; // Invalid sequence start


// convert string to array (typed, when possible)
exports.string2buf = function (str) {
  var buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;

  // count binary size
  for (m_pos = 0; m_pos < str_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
        m_pos++;
      }
    }
    buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
  }

  // allocate buffer
  buf = new utils.Buf8(buf_len);

  // convert
  for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
        m_pos++;
      }
    }
    if (c < 0x80) {
      /* one byte */
      buf[i++] = c;
    } else if (c < 0x800) {
      /* two bytes */
      buf[i++] = 0xC0 | (c >>> 6);
      buf[i++] = 0x80 | (c & 0x3f);
    } else if (c < 0x10000) {
      /* three bytes */
      buf[i++] = 0xE0 | (c >>> 12);
      buf[i++] = 0x80 | (c >>> 6 & 0x3f);
      buf[i++] = 0x80 | (c & 0x3f);
    } else {
      /* four bytes */
      buf[i++] = 0xf0 | (c >>> 18);
      buf[i++] = 0x80 | (c >>> 12 & 0x3f);
      buf[i++] = 0x80 | (c >>> 6 & 0x3f);
      buf[i++] = 0x80 | (c & 0x3f);
    }
  }

  return buf;
};

// Helper (used in 2 places)
function buf2binstring(buf, len) {
  // use fallback for big arrays to avoid stack overflow
  if (len < 65537) {
    if ((buf.subarray && STR_APPLY_UIA_OK) || (!buf.subarray && STR_APPLY_OK)) {
      return String.fromCharCode.apply(null, utils.shrinkBuf(buf, len));
    }
  }

  var result = '';
  for (var i = 0; i < len; i++) {
    result += String.fromCharCode(buf[i]);
  }
  return result;
}


// Convert byte array to binary string
exports.buf2binstring = function (buf) {
  return buf2binstring(buf, buf.length);
};


// Convert binary string (typed, when possible)
exports.binstring2buf = function (str) {
  var buf = new utils.Buf8(str.length);
  for (var i = 0, len = buf.length; i < len; i++) {
    buf[i] = str.charCodeAt(i);
  }
  return buf;
};


// convert array to string
exports.buf2string = function (buf, max) {
  var i, out, c, c_len;
  var len = max || buf.length;

  // Reserve max possible length (2 words per char)
  // NB: by unknown reasons, Array is significantly faster for
  //     String.fromCharCode.apply than Uint16Array.
  var utf16buf = new Array(len * 2);

  for (out = 0, i = 0; i < len;) {
    c = buf[i++];
    // quick process ascii
    if (c < 0x80) { utf16buf[out++] = c; continue; }

    c_len = _utf8len[c];
    // skip 5 & 6 byte codes
    if (c_len > 4) { utf16buf[out++] = 0xfffd; i += c_len - 1; continue; }

    // apply mask on first byte
    c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;
    // join the rest
    while (c_len > 1 && i < len) {
      c = (c << 6) | (buf[i++] & 0x3f);
      c_len--;
    }

    // terminated by end of string?
    if (c_len > 1) { utf16buf[out++] = 0xfffd; continue; }

    if (c < 0x10000) {
      utf16buf[out++] = c;
    } else {
      c -= 0x10000;
      utf16buf[out++] = 0xd800 | ((c >> 10) & 0x3ff);
      utf16buf[out++] = 0xdc00 | (c & 0x3ff);
    }
  }

  return buf2binstring(utf16buf, out);
};


// Calculate max possible position in utf8 buffer,
// that will not break sequence. If that's not possible
// - (very small limits) return max size as is.
//
// buf[] - utf8 bytes array
// max   - length limit (mandatory);
exports.utf8border = function (buf, max) {
  var pos;

  max = max || buf.length;
  if (max > buf.length) { max = buf.length; }

  // go back from last position, until start of sequence found
  pos = max - 1;
  while (pos >= 0 && (buf[pos] & 0xC0) === 0x80) { pos--; }

  // Fuckup - very small and broken sequence,
  // return max, because we should return something anyway.
  if (pos < 0) { return max; }

  // If we came to start of buffer - that means vuffer is too small,
  // return max too.
  if (pos === 0) { return max; }

  return (pos + _utf8len[buf[pos]] > max) ? pos : max;
};


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


// Note: adler32 takes 12% for level 0 and 2% for level 6.
// It doesn't worth to make additional optimizationa as in original.
// Small size is preferable.

function adler32(adler, buf, len, pos) {
  var s1 = (adler & 0xffff) |0,
      s2 = ((adler >>> 16) & 0xffff) |0,
      n = 0;

  while (len !== 0) {
    // Set limit ~ twice less than 5552, to keep
    // s2 in 31-bits, because we force signed ints.
    // in other case %= will fail.
    n = len > 2000 ? 2000 : len;
    len -= n;

    do {
      s1 = (s1 + buf[pos++]) |0;
      s2 = (s2 + s1) |0;
    } while (--n);

    s1 %= 65521;
    s2 %= 65521;
  }

  return (s1 | (s2 << 16)) |0;
}


module.exports = adler32;


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

"use strict";



module.exports = {

  /* Allowed flush values; see deflate() and inflate() below for details */
  Z_NO_FLUSH:         0,
  Z_PARTIAL_FLUSH:    1,
  Z_SYNC_FLUSH:       2,
  Z_FULL_FLUSH:       3,
  Z_FINISH:           4,
  Z_BLOCK:            5,
  Z_TREES:            6,

  /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */
  Z_OK:               0,
  Z_STREAM_END:       1,
  Z_NEED_DICT:        2,
  Z_ERRNO:           -1,
  Z_STREAM_ERROR:    -2,
  Z_DATA_ERROR:      -3,
  //Z_MEM_ERROR:     -4,
  Z_BUF_ERROR:       -5,
  //Z_VERSION_ERROR: -6,

  /* compression levels */
  Z_NO_COMPRESSION:         0,
  Z_BEST_SPEED:             1,
  Z_BEST_COMPRESSION:       9,
  Z_DEFAULT_COMPRESSION:   -1,


  Z_FILTERED:               1,
  Z_HUFFMAN_ONLY:           2,
  Z_RLE:                    3,
  Z_FIXED:                  4,
  Z_DEFAULT_STRATEGY:       0,

  /* Possible values of the data_type field (though see inflate()) */
  Z_BINARY:                 0,
  Z_TEXT:                   1,
  //Z_ASCII:                1, // = Z_TEXT (deprecated)
  Z_UNKNOWN:                2,

  /* The deflate compression method */
  Z_DEFLATED:               8
  //Z_NULL:                 null // Use -1 or null inline, depending on var type
};


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


// Note: we can't get significant speed boost here.
// So write code to minimize size - no pregenerated tables
// and array tools dependencies.


// Use ordinary array, since untyped makes no boost here
function makeTable() {
  var c, table = [];

  for (var n = 0; n < 256; n++) {
    c = n;
    for (var k = 0; k < 8; k++) {
      c = ((c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
    }
    table[n] = c;
  }

  return table;
}

// Create table on load. Just 255 signed longs. Not a problem.
var crcTable = makeTable();


function crc32(crc, buf, len, pos) {
  var t = crcTable,
      end = pos + len;

  crc ^= -1;

  for (var i = pos; i < end; i++) {
    crc = (crc >>> 8) ^ t[(crc ^ buf[i]) & 0xFF];
  }

  return (crc ^ (-1)); // >>> 0;
}


module.exports = crc32;


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

"use strict";



function ZStream() {
  /* next input byte */
  this.input = null; // JS specific, because we have no pointers
  this.next_in = 0;
  /* number of bytes available at input */
  this.avail_in = 0;
  /* total number of input bytes read so far */
  this.total_in = 0;
  /* next output byte should be put there */
  this.output = null; // JS specific, because we have no pointers
  this.next_out = 0;
  /* remaining free space at output */
  this.avail_out = 0;
  /* total number of bytes output so far */
  this.total_out = 0;
  /* last error message, NULL if no error */
  this.msg = ''/*Z_NULL*/;
  /* not visible by applications */
  this.state = null;
  /* best guess about the data type: binary or text */
  this.data_type = 2/*Z_UNKNOWN*/;
  /* adler32 value of the uncompressed data */
  this.adler = 0;
}

module.exports = ZStream;


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_render_setInnerHTML_js__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_render_twitter_js__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_core_build__ = __webpack_require__(111);
/* harmony export (binding) */ __webpack_require__.d(exports, "SpiceJS", function() { return SpiceJS; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*  - due to jszip and jszip-tils require not being defined
*
*	The Main Entrypoint for SpiceJS customized for Ryanspice.com
*	@module
*	Core components
*	Statistics - used to monitor the application
*	Build - controls instanciating App/Canvas instances
* 	setInnerHTML -	A polyfill based off react's core rendering
*/

/* WIP - extras */


//import Statistics from './modules/etc/statistics';

/* Build - the core canvas framework */



/**
* SpiceJS is the main corns and beans, this returns an app object which you can control all aspects of the  game. The main class will be instance specific alowing you to define multiple canvases. You can also view statistics and control group canvases through the object.
* @public
* @emits {SpiceJS} Emit the application controller.
* @example
*
*	((SpiceJS.create()).OnLoad = function (self) {
*
*		self.main = {
*
*		    init:function() {
*
*		    },
*
*		    update:function() {
*
*		    },
*
*		    draw:function() {
*
*		        this.visuals.text_ext(this.app.fps,100,100,"#FFFFFF",1,1);
*
*		    }
*
*		};
*
*	    self.start( 320, 720);
*
*	    window.Application = this;
*
*	});
*
*/

var SpiceJS = function (_Build) {
		_inherits(SpiceJS, _Build);

		function SpiceJS(map) {
				_classCallCheck(this, SpiceJS);

				if (!(map instanceof Object)) {
						throw new TypeError('Value of argument "map" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(map));
				}

				return _possibleConstructorReturn(this, (SpiceJS.__proto__ || Object.getPrototypeOf(SpiceJS)).call(this, map));

				/*	Temp - Disabled not ready for testing
    *		this.constructor.properties.statistics = new this.constructor.properties.statistics();
    */
		}

		return SpiceJS;
}(__WEBPACK_IMPORTED_MODULE_2__modules_core_build__["a" /* default */]);

/* harmony default export */ exports["default"] = new SpiceJS(new WeakMap());

function _inspect(input, depth) {
		var maxDepth = 4;
		var maxKeys = 15;

		if (depth === undefined) {
				depth = 0;
		}

		depth += 1;

		if (input === null) {
				return 'null';
		} else if (input === undefined) {
				return 'void';
		} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
				return typeof input === 'undefined' ? 'undefined' : _typeof(input);
		} else if (Array.isArray(input)) {
				if (input.length > 0) {
						var _ret = function () {
								if (depth > maxDepth) return {
												v: '[...]'
										};

								var first = _inspect(input[0], depth);

								if (input.every(function (item) {
										return _inspect(item, depth) === first;
								})) {
										return {
												v: first.trim() + '[]'
										};
								} else {
										return {
												v: '[' + input.slice(0, maxKeys).map(function (item) {
														return _inspect(item, depth);
												}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
										};
								}
						}();

						if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
				} else {
						return 'Array';
				}
		} else {
				var keys = Object.keys(input);

				if (!keys.length) {
						if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
								return input.constructor.name;
						} else {
								return 'Object';
						}
				}

				if (depth > maxDepth) return '{...}';
				var indent = '  '.repeat(depth - 1);
				var entries = keys.slice(0, maxKeys).map(function (key) {
						return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
				}).join('\n  ' + indent);

				if (keys.length >= maxKeys) {
						entries += '\n  ' + indent + '...';
				}

				if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
						return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
				} else {
						return '{\n  ' + indent + entries + '\n' + indent + '}';
				}
		}
}

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

__webpack_require__(256);

__webpack_require__(141);

if (global._babelPolyfill) {
  throw new Error("only one instance of babel-polyfill is allowed");
}
global._babelPolyfill = true;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45)))

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_thingy__ = __webpack_require__(19);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



/**
* Canvas Interface
* @module
* @interface
* @protected
* Initalizes canvas elements or attaches to existing elements at options.target.canvas. Handles creation of header and style elements.
* @protected
* @module
*
*/

var Canvas = function (_WeakMapThingy) {
    _inherits(Canvas, _WeakMapThingy);

    _createClass(Canvas, [{
        key: 'doc',


        /**
           * Get document element
           * @type {Element}
           * @protected
           */

        get: function get() {
            function _ref(_id) {
                if (!(_id instanceof Object)) {
                    throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id));
                }

                return _id;
            }

            return _ref(this.get('docs'));
        }

        /**
        * Get header element
        * @type {Element}
        * @protected
        */

        /**
        * Set documents private variables
        * @type {Object}
        * @protected
        */

    }, {
        key: 'head',
        get: function get() {
            function _ref2(_id2) {
                if (!(_id2 instanceof Object)) {
                    throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id2));
                }

                return _id2;
            }

            return _ref2(this.get('head'));
        }

        /**
        * Get gendering element
        * @type {Element}
        * @protected
        */

    }, {
        key: 'rendering_style',
        get: function get() {
            function _ref3(_id3) {
                if (!(_id3 instanceof Object)) {
                    throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id3));
                }

                return _id3;
            }

            return _ref3(this.get('_rendering_style'));
        }

        /**
        * Set rendering element styles
        * @type {CSS}
        * @protected
        * @example
        * var Style = "canvas { position:fixed; z-index:25; }"
        * Application.canvas.rendering_style(Style)
        */

        ,
        set: function set(style) {

            var customstyle = style || "";

            var viewport = '@-ms-viewport {width:100%;height:100%;}';

            var img_rendering = '#Client, #Buffer, img[srcApp=".gif"],img[srcApp=".jpg"], img[srcApp=".png"] {image-rendering: -moz-crisp-edges;image-rendering:-o-crisp-edges;image-rendering: crisp-edges;image-rendering: -webkit-optimize-contrast;}';

            var rendering = this.get('_rendering_style');

            rendering.innerHTML = rendering.innerText = viewport + img_rendering + customstyle;
        }

        /**
        * Get rendering canvas
        * @type {Element}
        * @protected
        */

    }, {
        key: 'canvas',
        get: function get() {
            function _ref5(_id5) {
                if (!(_id5 instanceof Object)) {
                    throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id5));
                }

                return _id5;
            }

            return _ref5(this.get('canvas')[0]);
        }

        /**
        * Set rendering canvas
        * @type {Element}
        * @protected
        */

        ,
        set: function set(canvas) {
            if (!(canvas instanceof Object)) {
                throw new TypeError('Value of argument "canvas" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(canvas));
            }

            this.get('canvas')[0] = canvas;
        }

        /**
        * Get buffering canvas
        * @type {Element}
        * @protected
        */

    }, {
        key: 'buffer',
        get: function get() {
            function _ref7(_id7) {
                if (!(_id7 instanceof Object)) {
                    throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id7));
                }

                return _id7;
            }

            return _ref7(this.get('canvas')[1]);
        }

        /**
        * Set buffering canvas
        * @type {Element}
        * @protected
        */

        ,
        set: function set(canvas) {
            if (!(canvas instanceof Object)) {
                throw new TypeError('Value of argument "canvas" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(canvas));
            }

            this.get('canvas')[1] = canvas;
        }

        /**
        * Get blitting canvas
        * @type {Element}
        */

    }, {
        key: 'blitter',
        get: function get() {
            function _ref9(_id9) {
                if (!(_id9 instanceof Object)) {
                    throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id9));
                }

                return _id9;
            }

            return _ref9(this.get('canvas')[2]);
        }

        /**
        * Set blitting canvas
        * @type {Element}
        */

        ,
        set: function set(canvas) {
            if (!(canvas instanceof Object)) {
                throw new TypeError('Value of argument "canvas" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(canvas));
            }

            this.get('canvas')[2] = canvas;
            //this._blitter = canvas;
        }

        /**
        * This is the constructor for the canvas module.
        * @param {number} x - position.x
        * @param {number} y - position.y
        */

    }]);

    function Canvas(app) {
        var _ret;

        _classCallCheck(this, Canvas);

        var _this = _possibleConstructorReturn(this, (Canvas.__proto__ || Object.getPrototypeOf(Canvas)).call(this, new WeakMap()));

        _this.options = app.options;

        if (!(_this.options instanceof Object)) {
            throw new TypeError('Value of "this.options" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_this.options));
        }

        _this.id = app.id;

        //SGL.start();

        //Cache canvases
        var temp_canvas = _this.doc.getElementById(_this.options.target.canvas);

        if (!(temp_canvas instanceof Object || temp_canvas == null)) {
            throw new TypeError('Value of variable "temp_canvas" violates contract.\n\nExpected:\nObject | null\n\nGot:\n' + _inspect(temp_canvas));
        }

        var temp_buffer = _this.doc.getElementById(_this.options.target.buffer);

        if (!(temp_buffer instanceof Object || temp_buffer == null)) {
            throw new TypeError('Value of variable "temp_buffer" violates contract.\n\nExpected:\nObject | null\n\nGot:\n' + _inspect(temp_buffer));
        }

        var temp_blitter = _this.doc.getElementById(_this.options.target.blitter) || _this.construct_canvas('blitter');

        if (!(temp_blitter instanceof Object)) {
            throw new TypeError('Value of variable "temp_blitter" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(temp_blitter));
        }

        temp_blitter.style.position = "fixed";

        //Check canvas variables
        if (temp_canvas) {

            //    if (temp_buffer)
            //        temp_buffer;

        } else {

            temp_canvas = _this.construct_canvas(_this.options.canvas.name);

            if (!(temp_canvas instanceof Object || temp_canvas == null)) {
                throw new TypeError('Value of variable "temp_canvas" violates contract.\n\nExpected:\nObject | null\n\nGot:\n' + _inspect(temp_canvas));
            }

            if (_this.options.canvas.buffer) {

                temp_buffer = _this.construct_canvas(_this.options.canvas.buffername);

                if (!(temp_buffer instanceof Object || temp_buffer == null)) {
                    throw new TypeError('Value of variable "temp_buffer" violates contract.\n\nExpected:\nObject | null\n\nGot:\n' + _inspect(temp_buffer));
                }
            }
        }

        temp_canvas.mozOpaque = _this.options.flags.opaque;

        //Assign canvas elements

        var _this$style = _this.style(temp_canvas, temp_buffer, temp_blitter, _this.options.canvas.style);

        var _this$style2 = _slicedToArray(_this$style, 4);

        _this.canvas = _this$style2[0];
        _this.buffer = _this$style2[1];
        _this.blitter = _this$style2[2];
        _this.rendering_style = _this$style2[3];


        _this.head.appendChild(_this.rendering_style);

        return _ret = true, _possibleConstructorReturn(_this, _ret);
    }

    /**
    * Style provided canvases
    * @type {null}
    * @param {Element, Element, Element} a - Pass 3 canvases: main, buffer and blitting canvas
    */

    _createClass(Canvas, [{
        key: 'style',
        value: function style(temp_canvas, temp_buffer, temp_blitter) {
            if (!(temp_canvas instanceof Object)) {
                throw new TypeError('Value of argument "temp_canvas" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(temp_canvas));
            }

            if (!(temp_buffer instanceof Object)) {
                throw new TypeError('Value of argument "temp_buffer" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(temp_buffer));
            }

            if (!(temp_blitter instanceof Object)) {
                throw new TypeError('Value of argument "temp_blitter" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(temp_blitter));
            }

            temp_canvas.style.position = this.options.canvas.position.position;

            temp_canvas.style.zIndex = this.options.canvas.position.z;

            if (this.options.canvas.buffer) {
                temp_buffer.style.position = this.options.canvas.position.position;

                temp_buffer.style.zIndex = this.options.canvas.position.z - 1;
            }

            if (this.options.canvas.override) {

                temp_canvas.style.left = this.options.canvas.position.left + "px";

                temp_canvas.style.top = this.options.canvas.position.top + "px";

                if (this.options.canvas.buffer) {
                    temp_buffer.style.left = this.options.canvas.position.left + "px";

                    temp_buffer.style.top = this.options.canvas.position.top + "px";
                }
            }

            return [temp_canvas, temp_buffer, temp_blitter];
        }

        /**
        * Construct a canvas element.
        * @type {Id}
        * @param {Element} a - Creates a canvas element and attaches it to the body.
        */

    }, {
        key: 'construct_canvas',
        value: function construct_canvas() {
            var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "0";

            function _ref12(_id12) {
                if (!(_id12 instanceof Object)) {
                    throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id12));
                }

                return _id12;
            }

            if (!(typeof id === 'string')) {
                throw new TypeError('Value of argument "id" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(id));
            }

            var canvas = this.doc.createElement("canvas");

            var canvas_id = id + "_" + this.id;

            canvas.id = canvas_id;

            this.doc.body.appendChild(canvas);

            return _ref12(this.doc.getElementById(canvas_id));
        }
    }]);

    return Canvas;
}(__WEBPACK_IMPORTED_MODULE_0__core_thingy__["a" /* default */]);

Canvas.properties = {
    name: 'canvas',
    canvas: [],
    docs: document,
    head: document.getElementsByTagName('head')[0],
    _rendering_style: document.createElement('style')
};
/* harmony default export */ exports["a"] = Canvas;
;

function _inspect(input, depth) {
    var maxDepth = 4;
    var maxKeys = 15;

    if (depth === undefined) {
        depth = 0;
    }

    depth += 1;

    if (input === null) {
        return 'null';
    } else if (input === undefined) {
        return 'void';
    } else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
        return typeof input === 'undefined' ? 'undefined' : _typeof(input);
    } else if (Array.isArray(input)) {
        if (input.length > 0) {
            var _ret2 = function () {
                if (depth > maxDepth) return {
                        v: '[...]'
                    };

                var first = _inspect(input[0], depth);

                if (input.every(function (item) {
                    return _inspect(item, depth) === first;
                })) {
                    return {
                        v: first.trim() + '[]'
                    };
                } else {
                    return {
                        v: '[' + input.slice(0, maxKeys).map(function (item) {
                            return _inspect(item, depth);
                        }).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
                    };
                }
            }();

            if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
        } else {
            return 'Array';
        }
    } else {
        var keys = Object.keys(input);

        if (!keys.length) {
            if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
                return input.constructor.name;
            } else {
                return 'Object';
            }
        }

        if (depth > maxDepth) return '{...}';
        var indent = '  '.repeat(depth - 1);
        var entries = keys.slice(0, maxKeys).map(function (key) {
            return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
        }).join('\n  ' + indent);

        if (keys.length >= maxKeys) {
            entries += '\n  ' + indent + '...';
        }

        if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
            return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
        } else {
            return '{\n  ' + indent + entries + '\n' + indent + '}';
        }
    }
}

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_sjs__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_math_vector__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_options__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visuals_js__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__graphics_js__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ext__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_room_js__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_timing_pace__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_interfaces_ITypes__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__renderer_js__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__update_js__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__loader_js__ = __webpack_require__(131);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


















var IPace = __WEBPACK_IMPORTED_MODULE_8__core_interfaces_ITypes__["f" /* IPace */];








/** Client object controls all the details of the application.
* @module
* @protected */

var ClientCore = function (_SJSClass2) {
		_inherits(ClientCore, _SJSClass2);

		function ClientCore() {
				var _ref4;

				var _temp, _this, _ret;

				_classCallCheck(this, ClientCore);

				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
						args[_key] = arguments[_key];
				}

				return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref4 = ClientCore.__proto__ || Object.getPrototypeOf(ClientCore)).call.apply(_ref4, [this].concat(args))), _this), _this.ext = __WEBPACK_IMPORTED_MODULE_5__ext__["a" /* default */], _this.room = __WEBPACK_IMPORTED_MODULE_6__core_room_js__["a" /* default */], _this.visuals = __WEBPACK_IMPORTED_MODULE_3__visuals_js__["a" /* default */], _this.graphics = __WEBPACK_IMPORTED_MODULE_4__graphics_js__["a" /* default */], _this.loader = __WEBPACK_IMPORTED_MODULE_11__loader_js__["a" /* default */], _this.update = __WEBPACK_IMPORTED_MODULE_10__update_js__["a" /* default */], _this.renderer = __WEBPACK_IMPORTED_MODULE_9__renderer_js__["a" /* default */], _this.pace = __WEBPACK_IMPORTED_MODULE_7__core_timing_pace__["a" /* default */], _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(ClientCore, [{
				key: 'verifySize',


				/*
    *	Verify the Input for the Application Width and Height
    */

				value: function verifySize() {
						var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
						var h = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

						if (!(typeof size === 'number' || size instanceof vector)) {
								throw new TypeError('Value of argument "size" violates contract.\n\nExpected:\nnumber | vector\n\nGot:\n' + _inspect(size));
						}

						if (!(typeof h === 'number')) {
								throw new TypeError('Value of argument "h" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(h));
						}

						var x = 0,
						    y = 0;

						if (typeof size == "vector") {

								x = size.x;

								if (!(typeof x === 'number')) {
										throw new TypeError('Value of variable "x" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(x));
								}

								y = size.y;

								if (!(typeof y === 'number')) {
										throw new TypeError('Value of variable "y" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(y));
								}
						} else {

								x = this.width = this.setWidth = size;
								y = this.height = this.setHeight = h;
						}

						this.projectSize = new __WEBPACK_IMPORTED_MODULE_1__core_math_vector__["a" /* default */](x, y);
				}

				/*
    *	Initalize the client's loop and loopdata
    */

		}, {
				key: 'initalize',
				value: function initalize(loop, loopdata, scale) {
						var _this2 = this;

						if (!(loop instanceof Object)) {
								throw new TypeError('Value of argument "loop" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(loop));
						}

						if (!(loopdata instanceof Object)) {
								throw new TypeError('Value of argument "loopdata" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(loopdata));
						}

						if (!(typeof scale === 'number')) {
								throw new TypeError('Value of argument "scale" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(scale));
						}

						this.scale = scale;

						this.client_f = loop;

						this.client_data = loopdata;

						requestAnimationFrame(this.client_f);

						setTimeout(function () {

								_this2.client_data();
						}, 1000 / 59);
						/*Assign the cursor and log the time it took to get here _WIP  */

						//this.app.ext.cursor.set(this.app.ext.cursor.def);

						return;
				}

				/*
    *	Main game loop. Removed arrow function, kept comment for safe.
    */

		}, {
				key: 'loop',
				value: function loop() {

						//const loop:Function = ()=>{

						//Return true or false if resized, update size
						this.resized = this.update.size(this);

						//Update scale
						this.scale = this.update.scale(this);

						//Draw frame
						this.visuals.flip(this.scale);

						//Update frames per second
						this.fps = this.update.step.tick(this.second, this.mainLoop);

						//Update client
						requestAnimationFrame(this.client_f);

						/*
      }
      		DISABLED, reenable for future Debugging clause
      		 	SpiceJS.statistics.monitor(loop).then(function(){
      		        SpiceJS.statistics.log("fps",SpiceJS.controller.list().fps,'state');
              SpiceJS.statistics.log("scale",SpiceJS.controller.list().client.scale,'state');
      		    });
      */

						//loop();
				}
		}]);

		return ClientCore;
}(__WEBPACK_IMPORTED_MODULE_0__core_sjs__["a" /* _SJSClass */]);

/* harmony default export */ exports["a"] = ClientCore;

function _inspect(input, depth) {
		var maxDepth = 4;
		var maxKeys = 15;

		if (depth === undefined) {
				depth = 0;
		}

		depth += 1;

		if (input === null) {
				return 'null';
		} else if (input === undefined) {
				return 'void';
		} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
				return typeof input === 'undefined' ? 'undefined' : _typeof(input);
		} else if (Array.isArray(input)) {
				if (input.length > 0) {
						var _ret2 = function () {
								if (depth > maxDepth) return {
												v: '[...]'
										};

								var first = _inspect(input[0], depth);

								if (input.every(function (item) {
										return _inspect(item, depth) === first;
								})) {
										return {
												v: first.trim() + '[]'
										};
								} else {
										return {
												v: '[' + input.slice(0, maxKeys).map(function (item) {
														return _inspect(item, depth);
												}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
										};
								}
						}();

						if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
				} else {
						return 'Array';
				}
		} else {
				var keys = Object.keys(input);

				if (!keys.length) {
						if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
								return input.constructor.name;
						} else {
								return 'Object';
						}
				}

				if (depth > maxDepth) return '{...}';
				var indent = '  '.repeat(depth - 1);
				var entries = keys.slice(0, maxKeys).map(function (key) {
						return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
				}).join('\n  ' + indent);

				if (keys.length >= maxKeys) {
						entries += '\n  ' + indent + '...';
				}

				if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
						return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
				} else {
						return '{\n  ' + indent + entries + '\n' + indent + '}';
				}
		}
}

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_math_math_js__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__client_core__ = __webpack_require__(107);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



/* JSZip & JSZipUtils
* 		Library to read Zip files from the server.
*/

var JSZip = __webpack_require__(264);

if (!(JSZip instanceof Object)) {
	throw new TypeError("Value of variable \"JSZip\" violates contract.\n\nExpected:\nObject\n\nGot:\n" + _inspect(JSZip));
}

var JSZipUtils = __webpack_require__(260);

if (!(JSZipUtils instanceof Object)) {
	throw new TypeError("Value of variable \"JSZipUtils\" violates contract.\n\nExpected:\nObject\n\nGot:\n" + _inspect(JSZipUtils));
}

var _Math = {
	Vec: function Vec(x, y) {
		this.x = x;
		this.y = y;
	},
	Clamp: function Clamp(x, min, max) {
		return x < min ? min : x > max ? max : x;
	},
	Wrap: function Wrap(x, min, max) {
		return x < min ? max : x > max ? min : x;
	},
	Difference: function Difference(a, b) {
		return a - b;
	},
	Pythageon: function Pythageon(a, b) {
		return Math.sqrt(a * a + b * b);
	},
	Vector: {
		x: 0, y: 0,
		Difference: function Difference(a, b) {
			return { x: a.x - b.x, y: a.y - b.y };
		},
		Sum: function Sum(a, b) {
			return { x: a.x + b.x, y: a.y + b.y };
		}
	},
	Data: {

		/*
  Total:function(){
  return this.total = this.kilobyteCount(App);
  },
  Update:function(){
  if (App.client.update.state.initalized)
  	return this.update = this.byteCount(App.client.update.state.current.update);
  	else
  	return this.update = this.byteCount(Object.create(null,App.client.room));
  },
  isFunction:function(functionToCheck) {
  	 var getType = {};
  	 return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
  },
  byteCount:function (object) {
  	if (this.isFunction(object))
  		return this.byteCountF(object.toString().length*2);
  	this.objectList = [];
  	this.stack = [ object ];
  	this.bytes = 0;
  	while ( this.stack.length ) {
  		this.value = this.stack.pop();
  		if ( typeof this.value === 'trueean' ) {
  			this.bytes += 4;
  		}
  		else if ( typeof this.value === 'string' ) {
  			this.bytes += this.value.length * 2;
  		}
  		else if ( typeof this.value === 'number' ) {
  			this.bytes += 8;
  		}
  		else if	(typeof this.value === 'object' && this.objectList.indexOf( this.value ) === -1) {
  			this.objectList.push( this.value );
  			for( i in this.value ) {
  				if ((this.value[i]==object)||(this.value[i]==window)){
  					if ((this.selfCount>0)||(this.value[i]==window))
  						{
  							this.selfCount = 0;
  							break;
  						}
  					this.selfCount++;
  				}
  				this.stack.push( this.value[ i ] );
  			}
  		}
  	}
  	return this.bytes;
  },
  byteCountF:function(s){
  	return encodeURI(s).split(/%..|./).length - 1;
  },
  kilobyteCount:function(object){
  	return  Math.round((this.byteCount(object)*this.KB)*100)/100;
  },
  kb:0.0078125,
  KB:0.0009765625,
  objectList:[{}],
  selfCount:0,
  update:0,
  stack:[{}],
  value:{},
  bytes:0,
  total:0,
  		*/
	}
};



var ClientExperamental = function (_ClientCore) {
	_inherits(ClientExperamental, _ClientCore);

	function ClientExperamental() {
		var _ref2;

		var _temp, _this, _ret;

		_classCallCheck(this, ClientExperamental);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = ClientExperamental.__proto__ || Object.getPrototypeOf(ClientExperamental)).call.apply(_ref2, [this].concat(args))), _this), _this.Math = _Math, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(ClientExperamental, [{
		key: "loadZip",

		/*
  	particles:Object = {
          p:0,
          draw:function(l){
  
              for (this.p=_Rain.size-1; this.p;--this.p)
                  if (_RainParticles[this.p].y>App.client.visuals.fixY(0))
                  if (_RainParticles[this.p].y<App.client.visuals.fixY(App.client.setHeight))
                  _RainParticles[this.p].draw(App.client.visuals,l);
          },
          update:function(){
              for (var _R=0; _R<_Rain.size;++_R)
                  _RainParticles[_R].update();
          }
      };
  */

		/* loads a bundle _WIP  */

		value: function loadZip() {

			this.data = {
				Zip: null,
				JSZip: JSZip,
				JSZipUtils: JSZipUtils
			};

			//Pull in zip for images.
			//		let self = this;
			var bundle = './img.bundle.zip';

			///Watch the bundle timer.
			//timer(bundle);


			//Asyncronus
			/*
   this.data.JSZipUtils.getBinaryContent(bundle, (err, data)=> {
   			//this.renderer.renderMarkup();
   	if(err) {
   				console.warn(err); // or handle err
   			} else {
   				let seconds = timerEnd(bundle);
   				console.warn(`The package ${bundle} loaded in ${seconds} seconds.`);
   				//self.bundles[ bundle.split('/')[1] ] = window.ZID = new JSZip(data);
   		//self.bundles[ bundle.split('/')[1] ] =
   				this.data.Zip = new this.data.JSZip(data);
   				(self.update.state = Object.create(self.update.state.prototype,self.update.state.constructor(self))).init(self.main);
   			}
   		});
   */
		}

		/*
  *	Main Loop Data for Resizing and Input
  */

	}, {
		key: "loopData",
		value: function loopData() {

			//if (this.app)
			//if (this.app.input)
			//if (this.app.input.update)
			//{

			//Return true or false, update audio
			//this.mute = this.audio.update();

			this.update.sizedelta(this);

			//Update Input
			this.app.input.update();
			//}

			setTimeout(this.client_data, 1000 / 60);
		}
	}]);

	return ClientExperamental;
}(__WEBPACK_IMPORTED_MODULE_1__client_core__["a" /* default */]);

/* harmony default export */ exports["a"] = ClientExperamental;

function _inspect(input, depth) {
	var maxDepth = 4;
	var maxKeys = 15;

	if (depth === undefined) {
		depth = 0;
	}

	depth += 1;

	if (input === null) {
		return 'null';
	} else if (input === undefined) {
		return 'void';
	} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
		return typeof input === "undefined" ? "undefined" : _typeof(input);
	} else if (Array.isArray(input)) {
		if (input.length > 0) {
			var _ret2 = function () {
				if (depth > maxDepth) return {
						v: '[...]'
					};

				var first = _inspect(input[0], depth);

				if (input.every(function (item) {
					return _inspect(item, depth) === first;
				})) {
					return {
						v: first.trim() + '[]'
					};
				} else {
					return {
						v: '[' + input.slice(0, maxKeys).map(function (item) {
							return _inspect(item, depth);
						}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
					};
				}
			}();

			if ((typeof _ret2 === "undefined" ? "undefined" : _typeof(_ret2)) === "object") return _ret2.v;
		} else {
			return 'Array';
		}
	} else {
		var keys = Object.keys(input);

		if (!keys.length) {
			if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
				return input.constructor.name;
			} else {
				return 'Object';
			}
		}

		if (depth > maxDepth) return '{...}';
		var indent = '  '.repeat(depth - 1);
		var entries = keys.slice(0, maxKeys).map(function (key) {
			return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
		}).join('\n  ' + indent);

		if (keys.length >= maxKeys) {
			entries += '\n  ' + indent + '...';
		}

		if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
			return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
		} else {
			return '{\n  ' + indent + entries + '\n' + indent + '}';
		}
	}
}

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_sjs__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_math_vector__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__client_experamental__ = __webpack_require__(108);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Client = function (_ClientExperamental) {
				_inherits(Client, _ClientExperamental);

				/**
    *	The client, or base of an app.
    */

				function Client(app, size, h) {
								_classCallCheck(this, Client);

								if (!(app instanceof Object)) {
												throw new TypeError('Value of argument "app" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(app));
								}

								if (!(size instanceof __WEBPACK_IMPORTED_MODULE_1__core_math_vector__["a" /* default */] || typeof size === 'number')) {
												throw new TypeError('Value of argument "size" violates contract.\n\nExpected:\nVector | number\n\nGot:\n' + _inspect(size));
								}

								if (!(typeof h === 'number' || h == null)) {
												throw new TypeError('Value of argument "h" violates contract.\n\nExpected:\nnumber | void\n\nGot:\n' + _inspect(h));
								}

								var _this = _possibleConstructorReturn(this, (Client.__proto__ || Object.getPrototypeOf(Client)).call(this, app));

								_this.discription = "Instanciates an object to hold data pertaining to a single instanciated app";


								var name = ''; //Unused ?

								_this.verifySize(size, h);

								//Build Extensions

								_this.visuals = new _this.visuals(_this.app);

								_this.graphics = new _this.graphics(_this.app);

								_this.ext = new _this.ext(_this.app);

								_this.room = new _this.room(_this.app);

								_this.audio = {};

								/* Timing Solution A */

								_this.mainLoop = new _this.pace(app.options.targetfps, app.options.targetfps);

								_this.second = new _this.pace(1.0, app.options.targetfps);

								/* Load Main */

								_this.loader = window.Loader = new _this.loader(_this.app);

								_this.update = new _this.update(_this.app);

								_this.renderer = new _this.renderer();

								_this.loadZip();

								_this.renderer.renderMarkup();

								return _possibleConstructorReturn(_this);
				}

				return Client;
}(__WEBPACK_IMPORTED_MODULE_2__client_experamental__["a" /* default */]);

/* harmony default export */ exports["a"] = Client;

function _inspect(input, depth) {
				var maxDepth = 4;
				var maxKeys = 15;

				if (depth === undefined) {
								depth = 0;
				}

				depth += 1;

				if (input === null) {
								return 'null';
				} else if (input === undefined) {
								return 'void';
				} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
								return typeof input === 'undefined' ? 'undefined' : _typeof(input);
				} else if (Array.isArray(input)) {
								if (input.length > 0) {
												var _ret = function () {
																if (depth > maxDepth) return {
																								v: '[...]'
																				};

																var first = _inspect(input[0], depth);

																if (input.every(function (item) {
																				return _inspect(item, depth) === first;
																})) {
																				return {
																								v: first.trim() + '[]'
																				};
																} else {
																				return {
																								v: '[' + input.slice(0, maxKeys).map(function (item) {
																												return _inspect(item, depth);
																								}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
																				};
																}
												}();

												if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
								} else {
												return 'Array';
								}
				} else {
								var keys = Object.keys(input);

								if (!keys.length) {
												if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
																return input.constructor.name;
												} else {
																return 'Object';
												}
								}

								if (depth > maxDepth) return '{...}';
								var indent = '  '.repeat(depth - 1);
								var entries = keys.slice(0, maxKeys).map(function (key) {
												return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
								}).join('\n  ' + indent);

								if (keys.length >= maxKeys) {
												entries += '\n  ' + indent + '...';
								}

								if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
												return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
								} else {
												return '{\n  ' + indent + entries + '\n' + indent + '}';
								}
				}
}

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sjs__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stats__ = __webpack_require__(65);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/*
var pipe = function(){

	var parentArguments = arguments;

	return function() {

		var result = null;

		for (var i = 0; i < parentArguments.length; i++){

			//if (!result)
				result = parentArguments[i](result||arguments);
				//else
				//result = parentArguments[i](result);

		}

		return result;
	}

}

var foo = function(data){ return data; };
var bar = function(data){ return data; };
var baz = function(data){ return data; };
var end = pipe(foo,bar,baz)(1,1,2);
console.log(end);
*/

var API = function (_SJSClass) {
		_inherits(API, _SJSClass);

		/**
     *
     */

		/* Check variables */
		function API(app) {
				_classCallCheck(this, API);

				if (!(app instanceof Object)) {
						throw new TypeError('Value of argument "app" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(app));
				}

				// make sure aspect scale is correctly set in advance of first tick
				/*if (this.fullscreen_mode >= 2)
    {
    	var orig_aspect = this.original_width / this.original_height;
    	var cur_aspect = this.width / this.height;
    			// note mode 2 (scale inner) inverts this logic and will use window width when width wider.
    	if ((this.fullscreen_mode !== 2 && cur_aspect > orig_aspect) || (this.fullscreen_mode === 2 && cur_aspect < orig_aspect))
    		this.aspect_scale = this.height / this.original_height;
    	else
    			this.aspect_scale = this.width / this.original_width;
    }
    		*/
				// Non-fullscreen games on retina displays never call setSize to enable hi-dpi display.
				// Do this now if the device has hi-dpi support.
				//if (this.fullscreen_mode === 0 && this.isRetina && this.devicePixelRatio > 1)
				//{
				//	this["setSize"](this.original_width, this.original_height, true);
				//}

				var _this = _possibleConstructorReturn(this, (API.__proto__ || Object.getPrototypeOf(API)).call(this, app));

				_this.free = false;
				_this.seamless = false;
				_this.tight = true;
				_this.disable = false;
				_this.alpha = 0;
				_this.bleed = 1;
				_this.point = 14;
				_this.zindex = 1;
				_this.buffer_target = 0;
				_this.scale = 0;
				_this.fillStyle = null;
				_this.fontT = "";
				_this.fontL = "";
				_this.stat2 = Object.create(null);
				_this.grd = Object.create(null);
				_this.canvas = Object.create(null);
				_this.buffer = Object.create(null);
				_this.blitter = Object.create(null);
				_this.canvas_context = Object.create(null);
				_this.buffer_context = Object.create(null);
				_this.blitter_context = Object.create(null);
				_this.blitter_image = new Image();
				_this.within = false;
				_this.laststyle = "false";
				_this.debug = true;
				_this.setting = true;
				_this.image_count = 0;
				_this.log('SJS:I:Visuals');

				return _this;
		}

		/**
     * @property
     */

		/**
     *
     */

		_createClass(API, [{
				key: 'clean',


				/** Resets the stats buffer.
    * @method
       */

				value: function clean() {

						//this.cleanAlpha?this.opacity(1):null;
						this.colour(this.stat.oldcol);
						this.stat.init(this.colour(), this.stat.oldcol);
						//this.stat.init();
				}

				/** Controls changing the draw colour
    * @method
    *  */

		}, {
				key: 'colour',
				value: function colour(colour1, colour2) {
						function _ref2(_id2) {
								if (!(typeof _id2 === 'string')) {
										throw new TypeError('Function return value violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(_id2));
								}

								return _id2;
						}

						if (!(typeof colour1 === 'string' || colour1 == null)) {
								throw new TypeError('Value of argument "colour1" violates contract.\n\nExpected:\nstring | void\n\nGot:\n' + _inspect(colour1));
						}

						if (!(typeof colour2 === 'string' || colour2 == null)) {
								throw new TypeError('Value of argument "colour2" violates contract.\n\nExpected:\nstring | void\n\nGot:\n' + _inspect(colour2));
						}

						if (colour1) return colour1 && (this.buffer_context.fillStyle = colour1); //colour2&&(this.buffer_context.strokeStyle=colour2);
						else return _ref2(this.buffer_context.fillStyle);
				}

				/** Calls Colour */

		}, {
				key: 'color',
				value: function color(colour1, colour2) {
						function _ref3(_id3) {
								if (!(typeof _id3 === 'string')) {
										throw new TypeError('Function return value violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(_id3));
								}

								return _id3;
						}

						if (!(typeof colour1 === 'string' || colour1 == null)) {
								throw new TypeError('Value of argument "colour1" violates contract.\n\nExpected:\nstring | void\n\nGot:\n' + _inspect(colour1));
						}

						if (!(typeof colour2 === 'string' || colour2 == null)) {
								throw new TypeError('Value of argument "colour2" violates contract.\n\nExpected:\nstring | void\n\nGot:\n' + _inspect(colour2));
						}

						return _ref3(this.colour(colour1, colour2));
				}

				/** Controls changing the draw opacity
    * @method
    *  */

		}, {
				key: 'opacity',
				value: function opacity(_opacity) {
						if (!(typeof _opacity === 'number')) {
								throw new TypeError('Value of argument "opacity" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(_opacity));
						}

						return _opacity != this.alpha && (this.alpha = _opacity, this.canvas_context.globalAlpha = this.buffer_context.globalAlpha = _opacity != this.lastopacity ? _opacity : 1);
				}

				/** Controls changing the draw font WIP
    * @method
    *  */

		}, {
				key: 'font',
				value: function font(_font) {
						if (!(typeof _font === 'string')) {
								throw new TypeError('Value of argument "font" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(_font));
						}

						return this.canvas_context.font = this.buffer_context.font = this.fontT = _font;
						//return font!=this.fontT&&(this.canvas_context.font=this.buffer_context.font=this.fontT=font?font:this.fontL);
						//if (font)
						//	this.buffer_context.font = font;
						//return this.buffer_context.font;
				}

				/** Controls changing the draw shadow
    * @method
    *  */

		}, {
				key: 'shadow',
				value: function shadow(col, blur, x, y) {
						if (!(typeof col === 'string')) {
								throw new TypeError('Value of argument "col" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(col));
						}

						if (!(typeof blur === 'number')) {
								throw new TypeError('Value of argument "blur" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(blur));
						}

						if (!(typeof x === 'number')) {
								throw new TypeError('Value of argument "x" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(x));
						}

						if (!(typeof y === 'number')) {
								throw new TypeError('Value of argument "y" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(y));
						}

						this.buffer_context.shadowColor = col;

						this.buffer_context.shadowBlur = blur;

						this.buffer_context.shadowOffsetX = x;

						this.buffer_context.shadowOffsetY = y;
				}

				/** Resets the draw shadow
    * @method
    *  */

		}, {
				key: 'shadow_clear',
				value: function shadow_clear() {

						this.buffer_context.shadowBlur = 0;
				}

				/** Controls changing the draw shadow
    * @method
    *  */

		}, {
				key: 'checkValues',
				value: function checkValues(x, y, w, h, s, a, c, colour, font) {
						if (!(typeof x === 'number')) {
								throw new TypeError('Value of argument "x" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(x));
						}

						if (!(typeof y === 'number')) {
								throw new TypeError('Value of argument "y" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(y));
						}

						if (!(typeof w === 'number')) {
								throw new TypeError('Value of argument "w" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(w));
						}

						if (!(typeof h === 'number')) {
								throw new TypeError('Value of argument "h" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(h));
						}

						if (!(typeof s === 'number')) {
								throw new TypeError('Value of argument "s" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(s));
						}

						if (!(typeof a === 'number' || a == null)) {
								throw new TypeError('Value of argument "a" violates contract.\n\nExpected:\nnumber | void\n\nGot:\n' + _inspect(a));
						}

						if (!(typeof c === 'number')) {
								throw new TypeError('Value of argument "c" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(c));
						}

						if (!(typeof colour === 'string' || colour == null)) {
								throw new TypeError('Value of argument "colour" violates contract.\n\nExpected:\nstring | void\n\nGot:\n' + _inspect(colour));
						}

						if (!(typeof font === 'string' || font == null)) {
								throw new TypeError('Value of argument "font" violates contract.\n\nExpected:\nstring | void\n\nGot:\n' + _inspect(font));
						}

						this.checkValuesColour = this.colour();

						if (!(typeof this.checkValuesColour === 'string')) {
								throw new TypeError('Value of "this.checkValuesColour" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(this.checkValuesColour));
						}

						if (!a) a = 1;

						this.opacity(a);

						this.colour(colour);

						if (!this.free) {

								this.stat.set({
										x: this.fixX(x),
										y: this.fixY(y),
										w: this.fixW(w) * s,
										h: this.fixH(h) * s,
										s: s,
										a: this.app.client.Math.Clamp(a, 0, 1) || 0,
										c: c || 0,
										colour: colour || this.colour(),
										oldcol: this.checkValuesColour,
										font: font || this.font,
										init: this.stat.init
								});
						} else {

								this.stat.set({
										x: x, y: y,
										w: w * s || 0,
										h: h * s || 0,
										s: s,
										a: this.app.client.Math.Clamp(a, 0, 1) || 1,
										c: c || 0,
										colour: colour || this.colour(),
										oldcol: this.checkValuesColour,
										font: font,
										init: this.stat.init
								});
						}
				}

				/**
    * @method
    *  */

		}, {
				key: 'touch_within',
				value: function touch_within(x, y, w, h, c) {

						var doc = document.documentElement;
						this.left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
						this.top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
						y = y - this.top;
						x = x - this.left;
						return c ? App.input.x > x - w / 2 && App.input.x < x + w / 2 && App.input.y > y - h / 2 && App.input.y < y + h / 2 ? true : false : App.input.x > x && App.input.x < x + w && App.input.y > y && App.input.y < y + h ? true : false;
				}

				/**
    * @method
    *  */

		}, {
				key: 'touch_within2',
				value: function touch_within2(x, y, w, h, c) {
						var stat = this.checkValues(x, y, w, h, 1, 1, c);
						var doc = document.documentElement;
						this.left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
						this.top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
						stat.y = stat.y - this.top;
						stat.x = stat.x - this.left;
						return stat.c ? this.app.input.x > stat.x - stat.w / 2 && this.app.input.x < stat.x + stat.w / 2 && this.app.input.y > stat.y - stat.h / 2 && this.app.input.y < stat.y + stat.h / 2 ? true : false : this.app.input.x > stat.x && this.app.input.x < stat.x + stat.w && this.app.input.y > stat.y && this.app.input.y < stat.y + stat.h ? true : false;
				}

				/**
    * @method
    *  */

		}, {
				key: 'touch_within_stat',
				value: function touch_within_stat(stat, r) {

						var doc = document.documentElement;
						var w = window;

						this.left = (w.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
						this.top = (w.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

						stat.y = stat.y - this.top;
						stat.x = stat.x - this.left;

						var position = this.app.input.position;

						var x = position.x;
						var y = position.y;

						/*
                    if (!r){
                  x = this.app.input.touched.last.x;
                  y = this.app.input.touched.last.y;}
      */

						return stat.c ? x > stat.x - stat.w / 2 && x < stat.x + stat.w / 2 && y > stat.y - stat.h / 2 && y < stat.y + stat.h / 2 ? true : false : y > stat.x && x < stat.x + stat.w && y > stat.y && y < stat.y + stat.h ? true : false;
				}

				/** Offers a blitting method for images. Pass IMG and set the offset. 32 only WIP
    * @method
    *  */

		}, {
				key: 'blit',
				value: function blit(img, offx, offy) {
						function _ref9(_id9) {
								if (!(_id9 instanceof object)) {
										throw new TypeError('Function return value violates contract.\n\nExpected:\nobject\n\nGot:\n' + _inspect(_id9));
								}

								return _id9;
						}

						if (!(img instanceof object)) {
								throw new TypeError('Value of argument "img" violates contract.\n\nExpected:\nobject\n\nGot:\n' + _inspect(img));
						}

						if (!(typeof offx === 'number')) {
								throw new TypeError('Value of argument "offx" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(offx));
						}

						if (!(typeof offy === 'number')) {
								throw new TypeError('Value of argument "offy" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(offy));
						}

						var _img = this.blitter_image = new Image();

						if (!(this.blitter_image instanceof Object)) {
								throw new TypeError('Value of "this.blitter_image" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(this.blitter_image));
						}

						var canvas = this.blitter;
						var ctx = this.blitter_context;

						canvas.style.background = 'transparent';
						canvas.background = 'transparent';
						canvas.width = img.width / 16;
						canvas.height = img.height / 16;

						//    ctx.beginPath();
						//    ctx.arc(75, 75, 70, 0, Math.PI*2, true);
						//    ctx.closePath();
						//    ctx.fill();

						//    ctx.drawImage(img, 0, 0);

						ctx.drawImage(img, offx, offy, 32, 32, 0, 0, img.width / 16, img.height / 16);
						//(img,sx,sy,swidth,sheight,x,y,width,height);

						//SJS.statistics.monitor(function () {

						_img.src = canvas.toDataURL("image/png");
						window.T = _img;
						//}, 10).then(function () {

						//}, 10);

						return _ref9(_img);
				}

				/** Draws text to the canvas
    * @method
    *  */

		}, {
				key: 'text_shadow',
				value: function text_shadow(blur, x, y, colour) {
						this.buffer_context.shadowColor = colour;
						this.buffer_context.shadowBlur = blur;
						this.buffer_context.shadowOffsetX = x;
						this.buffer_context.shadowOffsetY = y;
				}

				/** Draws text to the canvas
    * @method
    *  */

		}, {
				key: 'text',
				value: function text(string, x, y, colour) {
						if (!(typeof string === 'string' || typeof string === 'number')) {
								throw new TypeError('Value of argument "string" violates contract.\n\nExpected:\nstring | number\n\nGot:\n' + _inspect(string));
						}

						if (!(typeof x === 'number')) {
								throw new TypeError('Value of argument "x" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(x));
						}

						if (!(typeof y === 'number')) {
								throw new TypeError('Value of argument "y" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(y));
						}

						if (!(typeof colour === 'string')) {
								throw new TypeError('Value of argument "colour" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(colour));
						}

						this.text_ext(string, x, y, colour, 1, 1, 0, "Calibri");
				}

				/** Draws text with extra arguments
    * @method
    *  */

		}, {
				key: 'text_ext',
				value: function text_ext(string, x, y, colour, s, a, c, style) {
						if (!(typeof string === 'string' || typeof string === 'number')) {
								throw new TypeError('Value of argument "string" violates contract.\n\nExpected:\nstring | number\n\nGot:\n' + _inspect(string));
						}

						if (!(typeof x === 'number')) {
								throw new TypeError('Value of argument "x" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(x));
						}

						if (!(typeof y === 'number')) {
								throw new TypeError('Value of argument "y" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(y));
						}

						if (!(typeof colour === 'string')) {
								throw new TypeError('Value of argument "colour" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(colour));
						}

						if (!(typeof s === 'number')) {
								throw new TypeError('Value of argument "s" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(s));
						}

						if (!(typeof a === 'number')) {
								throw new TypeError('Value of argument "a" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(a));
						}

						if (!(typeof c === 'number')) {
								throw new TypeError('Value of argument "c" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(c));
						}

						if (!(typeof style === 'string')) {
								throw new TypeError('Value of argument "style" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(style));
						}

						this.checkValues(x, y, this.text_width(string), s, s, a, c, colour, '');

						var f = this.font('');

						this.stat.h = this.stat.s * this.scale;

						this.font(this.stat.h + "em " + style);

						this.stat.h = this.point * this.stat.h;

						this.buffer_context.fillText(string, this.stat.x - Math.floor(this.stat.w / 2) - this.stat.s, this.stat.y - Math.floor(this.stat.h / 2));

						//(this.stat.c)?this.buffer_context.fillText(string,this.stat.x-Math.floor(this.stat.w/2)-this.stat.s,this.stat.y-Math.floor(this.stat.h/2)):this.buffer_context.fillText(string,this.stat.x,this.stat.y+Math.floor(this.stat.h/2));

						this.font(f);

						this.clean();
				}

				/** Draws text without restrictions set by scaling
    * @method
    *  */

		}, {
				key: 'text_free',
				value: function text_free(string, x, y, colour) {
						if (!(typeof string === 'string' || typeof string === 'number')) {
								throw new TypeError('Value of argument "string" violates contract.\n\nExpected:\nstring | number\n\nGot:\n' + _inspect(string));
						}

						if (!(typeof x === 'number')) {
								throw new TypeError('Value of argument "x" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(x));
						}

						if (!(typeof y === 'number')) {
								throw new TypeError('Value of argument "y" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(y));
						}

						if (!(typeof colour === 'string')) {
								throw new TypeError('Value of argument "colour" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(colour));
						}

						this.colour(colour);

						this.font(Math.round(this.point * this.scale) + "px " + "sans-serif");

						this.buffer_context.fillText(string, x - this.text_width(string) / 2 - this.point, y - this.point / 2);

						this.clean();
				}

				/** TEXT BUTTON _ WIP
    * @method
    *  */

		}, {
				key: 'text_button',
				value: function text_button(string, x, y, colour, s, a, c, style) {
						if (!(typeof string === 'string' || typeof string === 'number')) {
								throw new TypeError('Value of argument "string" violates contract.\n\nExpected:\nstring | number\n\nGot:\n' + _inspect(string));
						}

						if (!(typeof x === 'number')) {
								throw new TypeError('Value of argument "x" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(x));
						}

						if (!(typeof y === 'number')) {
								throw new TypeError('Value of argument "y" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(y));
						}

						if (!(typeof colour === 'string')) {
								throw new TypeError('Value of argument "colour" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(colour));
						}

						if (!(typeof s === 'number')) {
								throw new TypeError('Value of argument "s" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(s));
						}

						if (!(typeof a === 'number')) {
								throw new TypeError('Value of argument "a" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(a));
						}

						if (!(typeof c === 'number')) {
								throw new TypeError('Value of argument "c" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(c));
						}

						if (!(typeof style === 'string')) {
								throw new TypeError('Value of argument "style" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(style));
						}

						this.checkValues(x, y, this.text_width(string), s, s, a, c, colour, '');
						var f = this.font('');
						this.stat.h = this.stat.s * this.scale;
						this.font(this.stat.h + "em " + style);
						this.stat.h = this.point * this.stat.h;
						if (this.touch_within_stat(this.stat)) {
								this.opacity(this.stat.a - this.app.input.pressed * 0.2);
								this.app.ext.cursor.set(this.app.ext.cursor.pointer, true);
								//if (App.input.released)
								//	if (App.input.delay<1)
								//		loc(),App.input.delay = 1;
								this.stat.c ? this.buffer_context.fillText(string, this.stat.x - Math.floor(this.stat.w / 2) - this.stat.s, this.stat.y - Math.floor(this.stat.h / 2)) : this.buffer_context.fillText(string, this.stat.x, this.stat.y + Math.floor(this.stat.h / 2));
						} else {
								this.opacity(this.stat.a * 0.75);
								this.stat.c ? this.buffer_context.fillText(string, this.stat.x - Math.floor(this.stat.w / 2) - this.stat.s, this.stat.y - Math.floor(this.stat.h / 2)) : this.buffer_context.fillText(string, this.stat.x, this.stat.y + Math.floor(this.stat.h / 2));
						}
						this.font(f);
						this.clean();
				}

				/** TEXT BUTTTON BG  _ WIP
    * @method
    *  */

		}, {
				key: 'text_button_bg',
				value: function text_button_bg(string, x, y, colour, s, a, c, loc, style) {
						if (!(typeof string === 'string' || typeof string === 'number')) {
								throw new TypeError('Value of argument "string" violates contract.\n\nExpected:\nstring | number\n\nGot:\n' + _inspect(string));
						}

						if (!(typeof x === 'number')) {
								throw new TypeError('Value of argument "x" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(x));
						}

						if (!(typeof y === 'number')) {
								throw new TypeError('Value of argument "y" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(y));
						}

						if (!(typeof colour === 'string')) {
								throw new TypeError('Value of argument "colour" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(colour));
						}

						if (!(typeof s === 'number')) {
								throw new TypeError('Value of argument "s" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(s));
						}

						if (!(typeof a === 'number')) {
								throw new TypeError('Value of argument "a" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(a));
						}

						if (!(typeof c === 'number')) {
								throw new TypeError('Value of argument "c" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(c));
						}

						if (!(typeof style === 'string')) {
								throw new TypeError('Value of argument "style" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(style));
						}

						this.checkValues(x, y, this.text_width(string), s, s, a, c, colour, '');

						this.shadow("#AAAAAA", 1, 1, 1);

						var f = this.font('');

						this.stat.h = this.stat.s * this.scale;

						this.font(this.stat.h + "em " + style);

						this.stat.h = this.point * this.stat.h;

						this.within = this.touch_within_stat(this.stat);

						if (!(this.within instanceof Boolean)) {
								throw new TypeError('Value of "this.within" violates contract.\n\nExpected:\nBoolean\n\nGot:\n' + _inspect(this.within));
						}

						if (this.within) {
								this.colour("#00A0F1");
								this.buffer_context.beginPath();
								this.stat.c ? this.buffer_context.rect(this.stat.x - Math.floor(this.stat.w / 2), this.stat.y - Math.floor(this.stat.h / 2), this.stat.w, this.stat.h) : this.buffer_context.rect(this.stat.x - this.stat.w * 0.2, this.stat.y - this.stat.h * 0.2, this.stat.w * 1.1, this.stat.h * 1.1);
								this.buffer_context.fill();

								this.colour("#DDDDDD");
								//this.rect_ext(this.stat.x-this.stat.w/4,this.stat.y-this.stat.h/5,this.stat.w*1.1,this.stat.h*1.1,1,1,0,"#00A0F1");
								this.opacity(this.stat.a - App.input.pressed * 0.2);
								App.ext.cursor.set(App.ext.cursor.pointer, true);
								this.app.ext.cursor.set(this.app.ext.cursor.pointer, true);
								if (this.app.input.released) {
										loc();
										this.app.input.delay = 1;
								}

								this.stat.c ? this.buffer_context.fillText(string, this.stat.x - Math.floor(this.stat.w / 2) - this.stat.s, this.stat.y - Math.floor(this.stat.h / 2)) : this.buffer_context.fillText(string, this.stat.x, this.stat.y + Math.floor(this.stat.h / 2));
						} else {
								this.opacity(this.stat.a * 0.75);
								this.stat.c ? this.buffer_context.fillText(string, this.stat.x - Math.floor(this.stat.w / 2) - this.stat.s, this.stat.y - Math.floor(this.stat.h / 2)) : this.buffer_context.fillText(string, this.stat.x, this.stat.y + Math.floor(this.stat.h / 2));
						}
						this.font(f);
						this.clean();
				}

				/*
      *	Visuals Rectangle Functions
      */

				/** Draws basic rectangle of colour
    * @method
    *  */

		}, {
				key: 'rect',
				value: function rect(x, y, w, h, colour) {
						if (!(typeof x === 'number')) {
								throw new TypeError('Value of argument "x" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(x));
						}

						if (!(typeof y === 'number')) {
								throw new TypeError('Value of argument "y" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(y));
						}

						if (!(typeof w === 'number')) {
								throw new TypeError('Value of argument "w" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(w));
						}

						if (!(typeof h === 'number')) {
								throw new TypeError('Value of argument "h" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(h));
						}

						if (!(typeof colour === 'string')) {
								throw new TypeError('Value of argument "colour" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(colour));
						}

						this.rect_ext(x, y, w, h, 1, 1, 0, colour);
				}

				/** Draw a basic centered rectangle of colour
    * @method
    *  */

		}, {
				key: 'rect_centered',
				value: function rect_centered(x, y, w, h, colour) {
						if (!(typeof x === 'number')) {
								throw new TypeError('Value of argument "x" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(x));
						}

						if (!(typeof y === 'number')) {
								throw new TypeError('Value of argument "y" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(y));
						}

						if (!(typeof w === 'number')) {
								throw new TypeError('Value of argument "w" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(w));
						}

						if (!(typeof h === 'number')) {
								throw new TypeError('Value of argument "h" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(h));
						}

						if (!(typeof colour === 'string')) {
								throw new TypeError('Value of argument "colour" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(colour));
						}

						this.rect_ext(x, y, w, h, 1, 1, 1, colour);
				}

				/** Draw an extended rectangle
    * @method
    *  */

		}, {
				key: 'rect_ext',
				value: function rect_ext(x, y, w, h, s, a, c, colour) {

						this.checkValues(x, y, w, h, s, a, c, colour, '');

						this.buffer_context.beginPath();

						this.stat.c ? this.buffer_context.rect(this.stat.x - Math.floor(this.stat.w / 2), this.stat.y - Math.floor(this.stat.h / 2), this.stat.w, this.stat.h) : this.buffer_context.rect(this.stat.x, this.stat.y, this.stat.w, this.stat.h);

						this.buffer_context.fill();

						this.clean();
				}

				/** Draw an extended rectangle with a stroke
    * @method
    *  */

		}, {
				key: 'rect_stroke',
				value: function rect_stroke(x, y, w, h, s, a, c, colour, l) {

						this.checkValues(x, y, w, h, s, a, c, colour, '');

						this.buffer_context.beginPath();

						this.stat.c ? this.buffer_context.rect(this.stat.x - Math.floor(this.stat.w / 2), this.stat.y - Math.floor(this.stat.h / 2), this.stat.w, this.stat.h) : this.buffer_context.rect(this.stat.x, this.stat.y, this.stat.w, this.stat.h);

						this.buffer_context.fillStyle = 'transparent';

						this.buffer_context.fill();

						this.buffer_context.lineWidth = l || 1;

						this.buffer_context.strokeStyle = colour;

						this.buffer_context.stroke();

						this.clean();
				}

				/** Draws a rectangle witha function when clicked _ WIP
    * @method
    *  */

		}, {
				key: 'rect_button',
				value: function rect_button(x, y, w, h, s, a, colour, loc, c) {

						this.checkValues(x, y, w, h, s, a, c, colour, '');
						var t = false;

						//if (this.touch_within(this.stat.x,this.stat.y,this.stat.w,this.stat.h,this.stat.c))
						if (this.touch_within_stat(this.stat)) {
								t = true;
								//    this.app.ext.cursor.set(this.app.ext.cursor.pointer,true);

								//   if (this.app.input.delay<1)

								if (this.app.input.released) loc(), this.app.input.delay = 1;
						}

						//if (this.setting)
						this.rect_ext(x, y, w, h, s, a, c, colour, '');
						//else
						//    var ww = 1;
						//    if (t)
						//    this.rect_ext(x-ww,y-ww,w+ww*2,h+ww*2,s,a,c,colour,'');
				}

				/** Draws a rotated rectangle
    * @method
    *  */

		}, {
				key: 'rect_rotate',
				value: function rect_rotate(x, y, w, h, colour, s, a, angle) {

						this.checkValues(x, y, w, h, s, a, 1, colour, '');

						this.buffer_context.translate(this.stat.x, this.stat.y);

						this.buffer_context.rotate(angle * 0.0174532925);

						this.stat.c ? this.buffer_context.rect(0 - Math.floor(this.stat.w / 2), 0 - Math.floor(this.stat.h / 2), this.stat.w, this.stat.h) : this.buffer_context.rect(0, 0, this.stat.w, this.stat.h);

						this.buffer_context.rotate(-angle * 0.0174532925);

						this.buffer_context.translate(-this.stat.x, -this.stat.y);

						this.clean();
				}

				/** Draws a rectangle with a gradient fill
    * @method
    *  */

		}, {
				key: 'rect_gradient',
				value: function rect_gradient(x, y, w, h, s, a, c, colour, colour2, angle) {

						this.checkValues(x, y, w, h, s, a, c, colour, '');

						this.buffer_context.translate(this.stat.x, this.stat.y);

						this.buffer_context.rotate(angle * 0.0174532925);

						if (!this.stat.w) return;
						if (!this.stat.h) return;
						if (!this.stat.x) return;
						if (!this.stat.y) return;

						this.stat.c ? this.grd = this.buffer_context.createLinearGradient(Math.floor(this.stat.w / 2), 0, Math.floor(this.stat.w / 2), Math.floor(this.stat.h / 2)) : this.grd = this.buffer_context.createLinearGradient(0, 0, this.stat.w, this.stat.h);

						if (!(this.grd instanceof Object)) {
								throw new TypeError('Value of "this.grd" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(this.grd));
						}

						if (!(this.grd instanceof Object)) {
								throw new TypeError('Value of "this.grd" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(this.grd));
						}

						this.buffer_context.beginPath();

						this.stat.c ? this.buffer_context.rect(0 - Math.floor(this.stat.w / 2), 0 - Math.floor(this.stat.h / 2), this.stat.w, this.stat.h) : this.buffer_context.rect(0, 0, this.stat.w, this.stat.h);

						this.grd.addColorStop(0, colour);

						this.grd.addColorStop(1, colour2);

						this.buffer_context.fillStyle = this.grd;

						this.buffer_context.fill();

						this.buffer_context.rotate(-angle * 0.0174532925);

						this.buffer_context.translate(-this.stat.x, -this.stat.y);

						this.clean();
				}

				/** Draws text without restrictions set by scaling
    * @method
    *  */

		}, {
				key: 'rect_free',
				value: function rect_free(x, y, w, h, s, a, c, colour) {

						this.checkValues(x, y, w, h, s, a, c, colour, '');

						this.buffer_context.beginPath();

						c ? this.buffer_context.rect(x - w / 2, y - h / 2, w, h) : this.buffer_context.rect(x, y, w, h);

						this.buffer_context.fill();

						this.clean();
				}

				/** Draws text without restrictions set by scaling
    * @method
    *  */

		}, {
				key: 'screen_fill',
				value: function screen_fill(a, colour) {
						this.checkValues(0, 0, 1, 1, 1, a, 1, colour, '');

						this.buffer_context.beginPath();

						this.buffer_context.rect(0, 0, window.innerWidth, window.innerHeight);

						this.buffer_context.fill();

						this.clean();
				}
		}, {
				key: 'image_element',

				/** Draws text without restrictions set by scaling
    * @method
    *  */

				value: function image_element(image) {
						this.elm = document.createElement("image");
						this.elm.draw = function (image, x, y, s, loc, xscale, yscale, a, c) {
								var s = this.style;
								App.client.visuals.checkValues(x, y, image.width, image.height, s, a, c);
								s.position = "fixed";
								s.left = this.stat.x + "px";
								s.top = this.stat.y + "px";
								s.width = this.stat.w + "px";
								s.height = this.stat.h + "px";
								s.opacity = this.stat.a;
								s.onclick = this.loc;
								this.src = image;
						};
						document.body.appendChild(this.elm);
						this.elm.src = image.src;
						return this.elm;
						//(this.stat.c)?this.buffer_context.drawImage(image,this.stat.x-Math.floor(this.stat.w/2),this.stat.y-Math.floor(this.stat.h/2),this.stat.w,this.stat.h):this.buffer_context.drawImage(image,this.stat.x,this.stat.y,this.stat.w,this.stat.h);
				}
				/** Draws text without restrictions set by scaling
    * @method
    *  */

		}, {
				key: 'image_replacecol',
				value: function image_replacecol(image, x, y, s, a, c, colour) {

						this.checkValues(x, y, image.width, image.height, s, a, c);

						var is = new Image();
						is.src = image;

						function getBase64Image(img) {
								// Create an empty canvas element
								var canvas = document.createElement("canvas");
								canvas.width = img.width;
								canvas.height = img.height;

								// Copy the image contents to the canvas
								var ctx = canvas.getContext("2d");
								ctx.drawImage(img, 0, 0);

								// Get the data-URL formatted image
								// Firefox supports PNG and JPEG. You could check img.src to
								// guess the original format, but be aware the using "image/jpg"
								// will re-encode the image.
								//var dataURL = canvas.toDataURL("image/png");
								var dataURL = ctx.getImageData(0, 0, canvas.width, canvas.height);

								return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
						}
						var imageData = getBase64Image(image);
						is.src = getBase64Image(is);
						image = is;
						var pixel = imageData.data;

						var r = 0,
						    g = 1,
						    b = 2,
						    a = 3;
						for (var p = 0; p < pixel.length; p += 4) {
								if (pixel[p + r] == 0 && pixel[p + g] == 0 && pixel[p + b] == 0) // if white then change alpha to 0
										{
												pixel[p + a] = 255;
										}
						}

						ctx.putImageData(imageData, 0, 0);
						image.src = c.toDataURL('image/png');

						this.stat.c ? this.buffer_context.drawImage(image, this.stat.x - Math.floor(this.stat.w / 2), this.stat.y - Math.floor(this.stat.h / 2), this.stat.w, this.stat.h) : this.buffer_context.drawImage(image, this.stat.x, this.stat.y, this.stat.w, this.stat.h);
				}

				/**
    * @method
    				// save old getContext
    var oldgetContext = HTMLCanvasElement.prototype.getContext ;
    		// get a context, set it to smoothed if it was a 2d context, and return it.
    function getSmoothContext(contextType) {
      var resCtx = oldgetContext.apply(this, arguments);
      if (contextType == '2d') {
       setToFalse(resCtx, 'imageSmoothingEnabled');
       setToFalse(resCtx, 'mozImageSmoothingEnabled');
       setToFalse(resCtx, 'oImageSmoothingEnabled');
       setToFalse(resCtx, 'webkitImageSmoothingEnabled');
      }
      return resCtx ;
    }
    		function setToFalse(obj, prop) { if ( obj[prop] !== undefined ) obj[prop] = false; }
    		// inject new smoothed getContext
    HTMLCanvasElement.prototype.getContext = getSmoothContext ;
    
    
    		*  */

		}, {
				key: 'image_ext',
				value: function image_ext(image, x, y, s, a, c) {

						this.checkValues(x, y, image.width, image.height, s, a, c);

						this.buffer_context.oImageSmoothingEnabled = false;
						this.buffer_context.mozImageSmoothingEnabled = false;
						this.buffer_context.webkitImageSmoothingEnabled = false;
						this.buffer_context.msImageSmoothingEnabled = false;
						this.buffer_context.imageSmoothingEnabled = false;

						this.stat.c ? this.buffer_context.drawImage(image, this.stat.x - Math.floor(this.stat.w / 2), this.stat.y - Math.floor(this.stat.h / 2), this.stat.w, this.stat.h) : this.buffer_context.drawImage(image, this.stat.x, this.stat.y, this.stat.w, this.stat.h);
				}
				/**
    * @method
    *  */

		}, {
				key: 'image_ext2',
				value: function image_ext2(image, x, y, sx, sy, a, c) {
						this.checkValues(x, y, image.width, image.height, sx, a, c);
						this.stat2 = this.checkValues(x, y, image.width, image.height, sy, a, c);

						if (!(this.stat2 instanceof Object)) {
								throw new TypeError('Value of "this.stat2" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(this.stat2));
						}

						this.stat.c ? this.buffer_context.drawImage(image, this.stat.x - Math.floor(this.stat.w / 2), this.stat.y - Math.floor(this.stat.h / 2), this.stat.w * this.stat.s, this.stat.h * this.stat2.s) : this.buffer_context.drawImage(image, this.stat.x, this.stat.y, this.stat.w * this.stat.s, this.stat.h * this.stat2.s);
				}
				/**
    * @method
    *  */

		}, {
				key: 'image_centered',
				value: function image_centered(image, x, y, a) {
						this.image_ext(image, x, y, 1, a, 1);
				}
				/**
    * @method
    *  */

		}, {
				key: 'image',
				value: function image(_image, x, y) {
						this.image_ext(_image, x, y, 1, 1, 0);
				}
				/**
    * @method
    *  */

		}, {
				key: 'image_scaled',
				value: function image_scaled(image, x, y, s) {
						this.image_ext(image, x, y, s, 1, 0);
				}
				/**
    * @method
    *  */

		}, {
				key: 'image_stat',
				value: function image_stat(image, x, y, s, a, c, xx, yy, w, h) {
						this.checkValues(x, y, w, h, s, a, c);
						return this.stat;
				}
				/**
    * @method
    *  */

		}, {
				key: 'image_flip',
				value: function image_flip(x, y) {

						this.checkValues(x, y, 1, 1, 1, 1, 1);
						this.buffer_context.save();
						this.buffer_context.scale(-1, 1);
						this.buffer_context.translate(-this.stat.x * 2, 0);
				}
				/**
    * @method
    *  */

		}, {
				key: 'image_restore',
				value: function image_restore(x, y) {}

				//this.buffer_context.restore();


				/**
    * @method
    *  */

		}, {
				key: 'putData',
				value: function putData(myImageData, dx, dy) {

						this.buffer_context.putImageData(myImageData, dx, dy);
						//this.clean();
				}
				/**
    * @method
    *  */

		}, {
				key: 'image_part',
				value: function image_part(image, x, y, s, a, c, xx, yy, w, h) {
						this.checkValues(x, y, w, h, s, a, c);

						//var scale = (1.1*this.stat.s)*this.app.getScale();
						this.stat.c ? this.buffer_context.drawImage(image, xx, yy, w, h, this.stat.x - Math.floor(this.stat.w / 2), this.stat.y - Math.floor(this.stat.h / 2), this.stat.w, this.stat.h) : this.buffer_context.drawImage(image, xx, yy, w, h, this.stat.x, this.stat.y, this.stat.w, this.stat.h);
						this.opacity(1);
				}
		}, {
				key: 'image_part_flip',
				value: function image_part_flip(image, x, y, s, a, c, xx, yy, w, h) {
						this.checkValues(x, y, w, h, s, a, c);

						this.buffer_context.scale(-1, 1);
						//var scale = (1.1*this.stat.s)*this.app.getScale();
						this.stat.c ? this.buffer_context.drawImage(image, xx, yy, w, h, this.stat.x - Math.floor(this.stat.w / 2), this.stat.y - Math.floor(this.stat.h / 2), this.stat.w, this.stat.h) : this.buffer_context.drawImage(image, xx, yy, w, h, this.stat.x, this.stat.y, this.stat.w, this.stat.h);

						this.buffer_context.scale(-1, 1);
				}
				/**
    * @method
    *  */

		}, {
				key: 'image_part_rotate',
				value: function image_part_rotate(image, x, y, s, a, c, xx, yy, w, h, angle) {
						this.checkValues(x, y, w, h, s, a, c);

						//var scale = (1.1*this.stat.s)*this.app.getScale();
						this.buffer_context.save();
						this.buffer_context.translate(this.stat.x, this.stat.y);
						this.buffer_context.rotate(angle * 0.0174532925);
						this.stat.c ? this.buffer_context.drawImage(image, xx, yy, w, h, 0 - Math.floor(this.stat.w / 2), 0 - Math.floor(this.stat.h / 2), this.stat.w, this.stat.h) : this.buffer_context.drawImage(image, xx, yy, w, h, 0, 0, this.stat.w, this.stat.h);

						//this.buffer_context.restore();
						this.buffer_context.rotate(-angle * 0.0174532925);
						this.buffer_context.translate(-this.stat.x, -this.stat.y);
				}
				/**
    * @method
    *  */

		}, {
				key: 'image_rotate',
				value: function image_rotate(image, x, y, s, angle, a, xoff, yoff) {
						if (typeof image == 'undefined') image = new Image(), ////console.log('Image fialed to render');
						this.checkValues(x, y, image.width, image.height, s, a, true);
						this.buffer_context.translate(this.stat.x, this.stat.y);
						this.buffer_context.rotate(angle * 0.0174532925);
						this.stat.c ? this.buffer_context.drawImage(image, 0 - Math.floor(this.stat.w / 2), 0 - Math.floor(this.stat.h / 2), this.stat.w, this.stat.h) : this.buffer_context.drawImage(image, 0, 0, this.stat.w, this.stat.h);
						this.buffer_context.rotate(-angle * 0.0174532925);
						this.buffer_context.translate(-this.stat.x, -this.stat.y);
				}
				/**
    * @method
    *  */

		}, {
				key: 'texture',
				value: function texture(_texture, xx, yy, w, h, yoff, xoff, xonly, xo, yo, s) {

						var yoff = yoff || 0;
						var yo = yo || 0;
						var xo = xo || 0;
						var y = 0;
						var img = _texture;
						var width = w;
						var height = h;

						var s = s;

						xo *= s;
						yo *= s;

						var bh = img.height;
						var img_width = img.width;
						var img_height = img.height;

						var img_width_scaled = +img_width * s;
						var img_height_scaled = +img_height * s;

						var offy = yy;
						var offx = xx;

						var by = Math.round((offy / s + height + (-yoff / s - height)) % img_height_scaled - img_height_scaled);
						var by_first = by;

						var bx = -width * s / 2 + (offx / s + width * s) % img_width_scaled - img_width_scaled;

						var span_width = (width + img_width) * s + img_width_scaled;
						var span_height = (height + bh) * s + img_height_scaled;

						if (xonly) span_width = 0;

						if (xonly) {
								var x = bx - width * s / 2 - s * bx / img_width;

								for (by = by_first; by < span_height; by += img_height_scaled) {
										var y = -by + height * s + s * by / bh;

										if (!xonly) this.image_ext(img, xo + x, yo + y, s, 1, 1);
										if (xonly) this.image_scaled(img, xo + x, yo + y, s, 1, 1);
								}
						} else for (bx; bx < span_width; bx += img_width_scaled) {
								var x = bx - width * s / 2 - 1 * bx / img_width;

								for (by = by_first; by < span_height; by += img_height_scaled) {
										var y = -by + height * s + 1 * by / bh;

										if (!xonly) this.image_ext(img, xo + x, yo + y, s, 1, 1);
										if (xonly) this.image_scaled(img, xo + x, yo + y, s, 1, 1);
								}
						}
				}

				/**
    * @method
    *  */

		}, {
				key: 'rotate_at',
				value: function rotate_at(angle, x, y) {
						if ((typeof x === 'undefined' ? 'undefined' : _typeof(x)) === "object") var x = x.x,
						    y = y.y;else var x = x,
						    y = y;

						this.checkValues(x, y, 1, 1, 1, 1, 1);
						this.buffer_context.translate(-this.stat.x, -this.stat.y);

						this.buffer_context.rotate(angle * 0.0174532925);
				}

				/**
    * @method
    *  */

		}, {
				key: 'rotate',
				value: function rotate(angle) {

						return this.buffer_context.rotate(angle * 0.0174532925);
				}
				/**
    * @method
    *  */

		}, {
				key: 'translate',
				value: function translate(x, y) {

						if ((typeof x === 'undefined' ? 'undefined' : _typeof(x)) === "object") var x = x.x,
						    y = y.y;else var x = x,
						    y = y;

						this.checkValues(x, y, 1, 1, 1, 1, 1);
						return this.buffer_context.translate(-this.stat.x, -this.stat.y);
				}

				/** LEGACY TAKE OUT
    * @method
    *  */

		}, {
				key: 'button',
				value: function button(img, x, y, f) {
						this.image_button(img, x, y, 1, f, true, 1, 1, 1, 1);
				}
				/** LEGACY TAKE OUT
    * @method
    *  */

		}, {
				key: 'button_scaled',
				value: function button_scaled(img, x, y, s, f) {
						this.image_button(img, x, y, s, f, true, 1, 1, 1, 1);
				}
				/** LEGACY TAKE OUT
    * @method
    *  */

		}, {
				key: 'buttonH',
				value: function buttonH(img, x, y, s, f) {
						this.image_buttonH(img, x, y, s, f, true, 1, 1, 1, 1);
				}

				/** IMAGE_BUTTON LEGACY TAKE OUT
    * @method
    *  */

		}, {
				key: 'image_button',
				value: function image_button(image, x, y, s, loc, highlight, xscale, yscale, a, centered) {

						this.checkValues(x, y, image.width * s * xscale, image.height * s * yscale, s, a, centered);

						var s = this.stat2 = this.checkValues(x, y, image.width * s * xscale * 0.9, image.height * s * yscale * 0.9, s, a, centered);

						if (!(this.stat2 instanceof Object)) {
								throw new TypeError('Value of "this.stat2" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(this.stat2));
						}

						var w = false;

						if (this.touch_within_stat(s)) {
								w = true;
								if (this.highlight) this.opacity(this.stat.a - this.app.input.pressed * 0.2);
								this.app.ext.cursor.set(this.app.ext.cursor.pointer, true);
								if (this.app.input.released) {
										loc();
										this.app.input.delay = 1;
								}
								this.stat.c ? this.buffer_context.drawImage(image, this.stat.x - Math.floor(this.stat.w / 2), this.stat.y - Math.floor(this.stat.h / 2), this.stat.w, this.stat.h) : this.buffer_context.drawImage(image, this.stat.x, this.stat.y, this.stat.w, this.stat.h);
						} else {
								if (this.highlight) this.opacity(this.stat.a * 0.75);
								this.stat.c ? this.buffer_context.drawImage(image, this.stat.x - Math.floor(this.stat.w / 2), this.stat.y - Math.floor(this.stat.h / 2), this.stat.w, this.stat.h) : this.buffer_context.drawImage(image, this.stat.x, this.stat.y, this.stat.w, this.stat.h);
						}
						return w;
				}
				/** IMAGE_BUTTON LEGACY TAKE OUT
    * @method
    *  */

		}, {
				key: 'image_buttonH',
				value: function image_buttonH(image, x, y, s, loc, highlight, xscale, yscale, a, centered) {
						this.checkValues(x, y, image.width * s * xscale, image.height * s * yscale, s, a, centered);
						var s = this.stat2 = this.checkValues(x, y, image.width * s * xscale * 0.9, image.height * s * yscale * 0.9, s, a, centered);

						if (!(this.stat2 instanceof Object)) {
								throw new TypeError('Value of "this.stat2" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(this.stat2));
						}

						var w = false;
						if (this.touch_within_stat(s, true)) {
								w = true;
								if (this.highlight) this.opacity(this.stat.a - this.app.input.pressed * 0.2);
								this.app.ext.cursor.set(this.app.ext.cursor.pointer, true);
								if (this.app.input.pressed) loc(), this.app.input.delay = 1;
								this.stat.c ? this.buffer_context.drawImage(image, this.stat.x - Math.floor(this.stat.w / 2), this.stat.y - Math.floor(this.stat.h / 2), this.stat.w, this.stat.h) : this.buffer_context.drawImage(image, this.stat.x, this.stat.y, this.stat.w, this.stat.h);
						} else {
								if (this.highlight) this.opacity(this.stat.a * 0.75);
								this.stat.c ? this.buffer_context.drawImage(image, this.stat.x - Math.floor(this.stat.w / 2), this.stat.y - Math.floor(this.stat.h / 2), this.stat.w, this.stat.h) : this.buffer_context.drawImage(image, this.stat.x, this.stat.y, this.stat.w, this.stat.h);
						}
						return w;
				}

				/*  ^ IMAGE BUTTON LEGACY TAKE OUT ^ */

		}, {
				key: 'line2',
				value: function line2(vec, vec2, col, a, free) {

						var x = vec.x;
						var y = vec.y;
						var x2 = vec2.x;
						var y2 = vec2.y;
						this.checkValues(x, y, x2, y2, 1, a, true);
						this.stat2 = this.checkValues(x2, y2, x2, y2, 1, a, true);

						if (!(this.stat2 instanceof Object)) {
								throw new TypeError('Value of "this.stat2" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(this.stat2));
						}

						this.buffer_context.beginPath();
						this.buffer_context.moveTo(this.stat.x, this.stat.y);
						this.buffer_context.lineTo(this.stat2.x, this.stat2.y);
						this.buffer_context.strokeStyle = col;
						this.buffer_context.stroke();
				}
		}, {
				key: 'line',
				value: function line(x, y, x2, y2, col, a) {
						this.checkValues(x, y, x2, y2, 1, a, true);
						this.stat2 = this.checkValues(x2, y2, x2, y2, 1, a, true);

						if (!(this.stat2 instanceof Object)) {
								throw new TypeError('Value of "this.stat2" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(this.stat2));
						}

						this.buffer_context.beginPath();
						this.buffer_context.moveTo(this.stat.x, this.stat.y);
						this.buffer_context.lineTo(this.stat2.x, this.stat2.y);
						this.buffer_context.strokeStyle = col;
						this.buffer_context.stroke();
						this.clean();
				}
		}, {
				key: 'lines',
				value: function lines(x, y, x2, y2, col, a, s) {
						this.checkValues(x, y, x2, y2, 1, a, true);
						this.stat2 = this.checkValues(x2, y2, x2, y2, 1, a, true);

						if (!(this.stat2 instanceof Object)) {
								throw new TypeError('Value of "this.stat2" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(this.stat2));
						}

						this.buffer_context.moveTo(this.stat.x * s, this.stat.y * s);
						this.opacity(a);
						this.buffer_context.strokeStyle = col;
						this.buffer_context.lineTo(this.stat2.x * s, this.stat2.y * s);
				}
		}, {
				key: 'lineend',
				value: function lineend() {
						this.buffer_context.stroke();
				}
		}, {
				key: 'linestart',
				value: function linestart() {
						this.buffer_context.beginPath();
				}
		}, {
				key: 'triangle',
				value: function triangle(x0, y0, x1, y1, x2, y2, col, col2, width) {
						//this.buffer_context.fillStyle = col;
						//this.buffer_context.strokeStyle = col2;
						this.colour(col, col2);
						this.buffer_context.lineWidth = width;
						this.buffer_context.moveTo(x0, y0); // give the (x,y) coordinates
						this.buffer_context.lineTo(x1, y1);
						this.buffer_context.lineTo(x2, y2);
						this.buffer_context.lineTo(x0, y0);
						this.buffer_context.fill();
						this.buffer_context.stroke();
						this.buffer_context.closePath();
						this.clean();
				}
		}, {
				key: 'quadraticCurve',
				value: function quadraticCurve(x, y, x2, y2, a, col) {
						var t = this.buffer_context.strokeStyle;
						var tF = this.buffer_context.fillStyle;
						this.checkValues(x, y, 1, 1, 1, a, true, col);
						this.stat2 = this.checkValues(x2, y2, 1, 1, 1, a, true, col);

						if (!(this.stat2 instanceof Object)) {
								throw new TypeError('Value of "this.stat2" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(this.stat2));
						}

						this.buffer_context.beginPath();
						this.buffer_context.quadraticCurveTo(this.stat.x, this.stat.y, this.stat2.x, this.stat2.y);
						this.buffer_context.strokeStyle = col;
						this.buffer_context.stroke();
						this.buffer_context.fill();
						this.checkValues(x, y, 1, 1, 1, a, true, t);
						this.stat2 = this.checkValues(x2, y2, 1, 1, 1, a, true, t);

						if (!(this.stat2 instanceof Object)) {
								throw new TypeError('Value of "this.stat2" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(this.stat2));
						}

						this.buffer_context.strokeStyle = t;
						this.buffer_context.fillStyle = tF;
				}

				/* visuals.paths */
				/*
    	        paths:Object = {
    
    
    	            //list of paths
    		        //    _initalized:boolean  = false
    		        //    ,_count: boolean  = false
    
    	            //Reinitalize the objects functions,
    	            //Required for use
    
    	            init(visuals){
    	                this._initalized = false;
    	        		this._count = false;
    	                this.list = [];
    
    	                this.visuals = visuals;
    
    	                this._initalized = true;
    
    	                this._count = 0;
    
    	                return this;
    
    	            }
    
    	            list:any = [];
    
    	            render(path){
    
    	                var list = path.list;
    	                var length = path.list.length;
    	                var i = 0;
    
    
    	                for(i=0;i<=length-1;i++)
    	                    this.visuals.rect(list[i].x,list[i].y,1,1,"#FFFFFF");
    
    	                return true;
    	            }
    
    	            addPath(id,tempX,tempY){
    	                var path =  {name:id,x:tempX,y:tempY};
    	                path.addPoint = this.addPoint;
    	                path.list = [];
    	                path.p = this;
    	                //////console.log(path);
    
    
    	                var t = this.list.push(path);
    	                 t.p = this;
    	                return this.list[this._count++];
    	            }
    
    	            addPoint(tempX,tempY){
    
    	                (this.list.push({x:this.x+tempX,y:this.y+tempY}));
    
    	            }
    
    	        }
    */

				/**
    /* CIRCLE TEST
        circle now allows passing vectors
          Test: argument based functions
            Method1:
                if based on first argument
                    Method2 (unused):
                        inherit _circle function and pass accordingly
      */

		}, {
				key: 'circle',
				value: function circle(XVec, YR, RC, CA, A) {

						var x = void 0,
						    y = void 0,
						    r = void 0,
						    col = void 0,
						    a = void 0;

						x = XVec;
						y = YR;
						r = RC;
						col = CA;
						a = A;

						if ((typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object') {

								x = XVec.x;
								y = XVec.y;
								r = YR;
								col = RC;
								a = CA;
						}

						this._circle(x, y, r, col, a);
				}
		}, {
				key: '_circle',
				value: function _circle(x, y, r, col, a) {
						this.checkValues(x, y, 1, 1, r, a, 0, col, "");
						this.buffer_context.beginPath();
						this.buffer_context.arc(this.stat.x, this.stat.y, this.stat.s * this.scale, 0, 2 * Math.PI, false);
						this.buffer_context.fillStyle = this.stat.colour;
						this.buffer_context.fill();
						this.clean();
				}
		}, {
				key: 'circle_free',
				value: function circle_free(x, y, r, col, a) {
						this.checkValues(x, y, r, r, r, a, 1, col);
						this.buffer_context.beginPath();
						this.buffer_context.arc(x, y, r * this.scale, 0, 2 * Math.PI, false);
						this.buffer_context.fillStyle = this.stat.col;
						this.buffer_context.fill();
						this.clean();
				}
		}, {
				key: 'text_width',
				value: function text_width(string) {
						return this.buffer_context.measureText(string).width; // Not WOrking
				}

				/**
    /* END CIRCLE TEST
    */

		}, {
				key: 'trytolockOrientation',
				value: function trytolockOrientation() {
						/*
      if (!this.autoLockOrientation || this.orientations === 0)
      return;
      */
						var orientation = "portrait";
						var works = false;

						//if (this.orientations === 2)
						orientation = "landscape";

						// Note IE/Edge can throw exceptions here if in an iframe (WrongDocumentError), which also affects the debugger.
						/*	try {
       			if (screen["orientation"] && screen["orientation"]["lock"])
      			works = screen["orientation"]["lock"](orientation);
      		else if (screen["lockOrientation"])
      			works = screen["lockOrientation"](orientation);
      		else if (screen["webkitLockOrientation"])
      			works = screen["webkitLockOrientation"](orientation);
      		else if (screen["mozLockOrientation"])
      			works = screen["mozLockOrientation"](orientation);
      		else if (screen["msLockOrientation"])
      			works = screen["msLockOrientation"](orientation);
      	}
      	catch (e)
      	{
      		if (console && console.warn)
      			console.warn("Failed to lock orientation: ", e);
      	}
      */

						return works;
				}
		}, {
				key: 'newscale',
				value: function newscale(w, h, force) {
						var offx = 0,
						    offy = 0;
						var neww = 0,
						    newh = 0,
						    intscale = 0;

						// Hide address bar on iPhone iOS 6 only
						var tryHideAddressBar = this.isiPhoneiOS6 && this.isSafari && !navigator["standalone"] && !this.isDomFree && !this.isCordova;

						if (tryHideAddressBar) h += 60; // height of Safari iPhone iOS 6 address bar

						// Ignore redundant events
						if (this.lastWindowWidth === w && this.lastWindowHeight === h && !force) return;

						this.lastWindowWidth = w;
						this.lastWindowHeight = h;

						var mode = this.fullscreen_mode;
						var orig_aspect, cur_aspect;

						var isfullscreen = (document["mozFullScreen"] || document["webkitIsFullScreen"] || !!document["msFullscreenElement"] || document["fullScreen"] || this.isNodeFullscreen) && !this.isCordova;

						if (!isfullscreen && this.fullscreen_mode === 0 && !force) return; // ignore size events when not fullscreen and not using a fullscreen-in-browser mode

						if (isfullscreen && this.fullscreen_scaling > 0) mode = this.fullscreen_scaling;

						var dpr = this.devicePixelRatio;

						// Letterbox or letterbox integer scale modes: adjust width and height and offset canvas accordingly
						if (mode >= 4) {
								orig_aspect = this.original_width / this.original_height;
								cur_aspect = w / h;

								// too wide: scale to fit height
								if (cur_aspect > orig_aspect) {
										neww = h * orig_aspect;

										if (mode === 5) // integer scaling
												{
														// integer scale by device pixels, not CSS pixels, since DPR may be non-integral
														intscale = neww * dpr / this.original_width;
														if (intscale > 1) intscale = Math.floor(intscale);else if (intscale < 1) intscale = 1 / Math.ceil(1 / intscale);
														neww = this.original_width * intscale / dpr;
														newh = this.original_height * intscale / dpr;
														offx = (w - neww) / 2;
														offy = (h - newh) / 2;
														w = neww;
														h = newh;
												} else {
												offx = (w - neww) / 2;
												w = neww;
										}
								}
								// otherwise scale to fit width
								else {
												newh = w / orig_aspect;

												if (mode === 5) // integer scaling
														{
																intscale = newh * dpr / this.original_height;
																if (intscale > 1) intscale = Math.floor(intscale);else if (intscale < 1) intscale = 1 / Math.ceil(1 / intscale);
																neww = this.original_width * intscale / dpr;
																newh = this.original_height * intscale / dpr;
																offx = (w - neww) / 2;
																offy = (h - newh) / 2;
																w = neww;
																h = newh;
														} else {
														offy = (h - newh) / 2;
														h = newh;
												}
										}

								if (isfullscreen && !this.isNWjs) {
										offx = 0;
										offy = 0;
								}
						}
						// Centered mode in NW.js: keep canvas size the same and just center it
						else if (this.isNWjs && this.isNodeFullscreen && this.fullscreen_mode_set === 0) {
										offx = Math.floor((w - this.original_width) / 2);
										offy = Math.floor((h - this.original_height) / 2);
										w = this.original_width;
										h = this.original_height;
								}

						if (mode < 2) this.aspect_scale = dpr;

						// iPad 3 Retina bug workaround: if in retina display and the width is 2048, for some reason
						// performance is massively reduced.  Workaround (found by Arima) is to set a width of 2046 instead.
						if (this.isRetina && this.isiPad && dpr > 1) // don't apply to iPad 1-2
								{
										if (w >= 1024) w = 1023; // 2046 retina pixels
										if (h >= 1024) h = 1023;
								}

						// hacks for iOS retina
						this.cssWidth = Math.round(w);
						this.cssHeight = Math.round(h);
						this.width = Math.round(w * dpr);
						this.height = Math.round(h * dpr);
						this.redraw = true;

						if (this.wantFullscreenScalingQuality) {
								this.draw_width = this.width;
								this.draw_height = this.height;
								this.fullscreenScalingQuality = true;
						} else {
								// Render directly even in low-res scale mode if the display area is smaller than the window size area,
								// or in crop mode (since no engine scaling happens)
								if (this.width < this.original_width && this.height < this.original_height || mode === 1) {
										this.draw_width = this.width;
										this.draw_height = this.height;
										this.fullscreenScalingQuality = true;
								} else {
										this.draw_width = this.original_width;
										this.draw_height = this.original_height;
										this.fullscreenScalingQuality = false;

										/*var orig_aspect = this.original_width / this.original_height;
          var cur_aspect = this.width / this.height;
          		// note mode 2 (scale inner) inverts this logic and will use window width when width wider.
          if ((this.fullscreen_mode !== 2 && cur_aspect > orig_aspect) || (this.fullscreen_mode === 2 && cur_aspect < orig_aspect))
          	this.aspect_scale = this.height / this.original_height;
          else
          	this.aspect_scale = this.width / this.original_width;*/

										// Scale inner or scale outer mode: adjust the draw size to be proportional
										// to the window size, since the draw size is simply stretched-to-fit in the window
										if (mode === 2) // scale inner
												{
														orig_aspect = this.original_width / this.original_height;
														cur_aspect = this.lastWindowWidth / this.lastWindowHeight;

														if (cur_aspect < orig_aspect) this.draw_width = this.draw_height * cur_aspect;else if (cur_aspect > orig_aspect) this.draw_height = this.draw_width / cur_aspect;
												} else if (mode === 3) {
												orig_aspect = this.original_width / this.original_height;
												cur_aspect = this.lastWindowWidth / this.lastWindowHeight;

												if (cur_aspect > orig_aspect) this.draw_width = this.draw_height * cur_aspect;else if (cur_aspect < orig_aspect) this.draw_height = this.draw_width / cur_aspect;
										}
								}
						}

						if (this.canvasdiv && !this.isDomFree) {
								jQuery(this.canvasdiv).css({ "width": Math.round(w) + "px",
										"height": Math.round(h) + "px",
										"margin-left": Math.floor(offx) + "px",
										"margin-top": Math.floor(offy) + "px" });

								if (typeof cr_is_preview !== "undefined") {
										jQuery("#borderwrap").css({ "width": Math.round(w) + "px",
												"height": Math.round(h) + "px" });
								}
						}

						if (this.canvas) {
								this.canvas.width = Math.round(w * dpr);
								this.canvas.height = Math.round(h * dpr);

								if (this.isEjecta) {
										this.canvas.style.left = Math.floor(offx) + "px";
										this.canvas.style.top = Math.floor(offy) + "px";
										this.canvas.style.width = Math.round(w) + "px";
										this.canvas.style.height = Math.round(h) + "px";
								} else if (this.isRetina && !this.isDomFree) {
										this.canvas.style.width = Math.round(w) + "px";
										this.canvas.style.height = Math.round(h) + "px";
								}
						}

						if (this.overlay_canvas) {
								this.overlay_canvas.width = Math.round(w * dpr);
								this.overlay_canvas.height = Math.round(h * dpr);

								this.overlay_canvas.style.width = this.cssWidth + "px";
								this.overlay_canvas.style.height = this.cssHeight + "px";
						}

						if (this.glwrap) {
								this.glwrap.setSize(Math.round(w * dpr), Math.round(h * dpr));
						}

						if (this.isDirectCanvas && this.ctx) {
								this.ctx.width = Math.round(w);
								this.ctx.height = Math.round(h);
						}

						if (this.ctx) {
								// Re-apply the image smoothing property, since resizing the canvas resets its state
								this.ctx["webkitImageSmoothingEnabled"] = this.linearSampling;
								this.ctx["mozImageSmoothingEnabled"] = this.linearSampling;
								this.ctx["msImageSmoothingEnabled"] = this.linearSampling;
								this.ctx["imageSmoothingEnabled"] = this.linearSampling;
						}

						// Try to lock orientation to the project setting
						this.tryLockOrientation();

						// Attempt to hide address bar on iPhone
						// iOS 7.1 bug: weird glitch where a big space appears at the bottom of the
						// screen when going in to landscape mode. This call to scrollTo seems to
						// fix it, so always run this on iPhone.
						if (!this.isDomFree && (tryHideAddressBar || this.isiPhone)) {
								window.setTimeout(function () {
										window.scrollTo(0, 1);
								}, 100);
						}
				}

				/** Get ImageData
       * @
       */

				/*
    	getData(){
    		        let width = this.buffer.width;
            let height = this.buffer.height;
    				let buffer = this.buffer_context;
    		        let imageData = buffer.getImageData(0,0,width,height);
    				        let w2 = width/2;
            let d = imageData.data;
    		        for(y=0; y<=height;y++){
    		            inpos = y * width * 4;
                outpos = inpos+ w2 *4;
    		            for (x = 0; x<w2;x++) {
    		                var r = d[inpos++];
                    var g = d[inpos++];
                    var b = d[inpos++];
                    var a = d[inpos++];
    		                 b = Math.min(255,b);
    		                if ((r==0)&&(g==0)&&(b==0))
                    {
                        inpos++;
                        inpos++;
                        inpos++;
                    	imageData.data[inpos++] = 0;
                    }
                    else
                    {
                        inpos++;
                        inpos++;
                        inpos++;
                        inpos++;
                    }
    		            }
    		        }
    		        buffer.putImageData(imageData,0,0);
    			}
    */

				/**
         debug(){
               /*
             if (!App.ext.debug.strength=="Normal")
                 return;
             if ((App.ext.debug.strength=="off")||(App.ext.debug.strength=="none"))
                 return;
             this.rect_ext(-this.app.client.setWidth,0,this.app.client.setWidth+this.app.client.setWidth+this.app.client.setWidth,this.point,1,0.1,0);
             this.rect_ext(0,0,this.app.client.setWidth,this.point,1,0.1,0);
             this.text_ext("0",	0,this.point*0.9,this.point*0.9);
             this.text_ext(this.app.client.setWidth,	this.app.client.setWidth-25,this.point*0.9,this.point*0.9);
             if (window.innerWidth>(this.app.client.setWidth*1.1)*this.scale)
                 {
                     this.text_free(0-this.fixX(0),	30,4+this.fixY(this.point),this.point*0.99);
                     this.text_free(this.app.client.width,	window.innerWidth-15,4+this.fixY(this.point),this.point*0.99);
                 }
             //this.text_ext("Debug",	this.app.client.setWidth/2.5,this.point*0.9,this.point*0.9);
             //this.text_ext(this.app.client.name,5,25,"#FFFFFF",4,1,0);
             //this.text_ext("app.ext.input",15,40,"#FFFFFF",1,1,0);
             //this.text_ext("x "+Math.round(App.input.x*100)/100		,25,55,"#FFFFFF",1,1,0);
             //this.text_ext("x: "+Math.round(App.input.window.x*100)/100,75,55,"#FFFFFF",1,1,0);
             //this.text_ext("y "+Math.round(App.input.y*100)/100		,25,70,"#FFFFFF",1,1,0);
             //this.text_ext("y: "+Math.round(App.input.window.y*100)/100,75,70,"#FFFFFF",1,1,0);
             if (App.fps<20)
             ////console.log("FPSLow: "+App.fps);
               var data = [
                         [this.app.client.name],
                         [App.code+ " " +App.codefmk],
                         [this.app.client.name],
                         [
                         "app.ext.input",
                         "x "+Math.round(App.input.x*100)/100		,
                         "x "+Math.round(App.input.window.x*100)/100,
                         "d "+App.input.pressed+"   p "+App.input.duration,
    	                        "y "+Math.round(App.input.y*100)/100		,
                         "y "+Math.round(App.input.window.y*100)/100,
                         (App.ext.useragent.trident)?"Input: "+"Touch":"Input: Mouse",
                         ],
                         [
                         "app.client",
                         "discription","","",
                         "width" ,this.app.client.setWidth,this.app.client.width,
                         "height",this.app.client.setHeight,this.app.client.height,
                         "fps",Math.round(this.app.client.fps)+"/"+this.app.client.targetfps+":"+Math.round(this.app.client.fps*1000)/1000,"",
                         "scale",this.app.client.scale,"",
                         "delta",this.app.client.delta,"",
                         "buffer","double","",
                         ],
                         [
                         "app.client.state","",
                         "[ "+this.app.client.update.state.name+" ] : "+this.app.client.Math.Data.Update()+"B",
                         "",
                         ""
                         ],
                         [
                         "app.client.data","",
                         "visuals ",(App.ext.debug.strength!=="Lite"?this.app.client.Math.Data.kilobyteCount(this.app.client.visuals):"?"),"",
                         "graphics ",(App.ext.debug.strength!=="Lite"?this.app.client.Math.Data.kilobyteCount(this.app.client.graphics):"?"),"",
                         "audio ",(App.ext.debug.strength!=="Lite"?this.app.client.Math.Data.kilobyteCount(this.app.client.audio):"?"),"",
                         "state ",(App.ext.debug.strength!=="Lite"?this.app.client.Math.Data.kilobyteCount(this.app.client.update.state.current):"?"),"",
                         "ext ",(App.ext.debug.strength!=="Lite"?this.app.client.Math.Data.kilobyteCount(App.ext):"?"),"",
                         "Total ",(App.ext.debug.strength!=="Lite"?this.app.client.Math.Data.Total():"?"),""
                           ]
                     ];
                     for(var t=0,tt=0,p=65,tr=0,ii=0;ii<data.length&&(6!=ii||"Lite"!=App.ext.debug.strength);++ii)
                         {
                         for(var i=data[ii].length;0<i;--i)
                             0==i%3&&(t=0,tr=15,tt++),
                             this.text_ext(data[ii][data[ii].length-i],tr+15+p*t,25+1.1*this.point*tt,"#AAAAAA",1,1,0),
                             tr=0,
                             t++;
                         t=0;
                         tt++
                         };
               //this.text_ext("D: "+App.input.duration,210,55);
             //this.text_ext("P: "+App.input.pressed,160,55);
             //(App.ext.useragent.trident)?this.text_ext("Input: "+"Touch",160,70):this.text_ext("Input: "+"Mouse",160,70);
             //this.text_ext("I: "+App.input.window.inside+" X: "+App.input.window.x+" Y: "+App.input.window.y,155,70);
             //this.text_ext("app.client",15,85,"#FFFFFF",1,1,0);
             //this.text_ext("Discription: "+this.app.client.discription,25,100,"#FFFFFF",1,1,0);
             //this.text_ext("Fps: "+Math.round(this.app.client.fps)+"/"+this.app.client.targetfps+":"+Math.round(App.ext.fps*1000)/1000,25,115,"#FFFFFF",1,1,0);
             //this.text_ext("Width: "+this.app.client.width,25,130,"#FFFFFF",1,1,0);
             //this.text_ext("Height: "+this.app.client.height,25,145,"#FFFFFF",1,1,0);
             //this.text_ext("setWidth: "+this.app.client.setWidth,110,130,"#FFFFFF",1,1,0);
             //this.text_ext("setHeight: "+this.app.client.setHeight,110,145,"#FFFFFF",1,1,0);
             //this.text_ext("Scale: "+this.scale,25,160,"#FFFFFF",1,1,0);
             //this.text_ext("Delta: "+this.app.client.delta,25,175,"#FFFFFF",1,1,0);
             //this.text_ext("Buffering: "+"Double",25,190,"#FFFFFF",1,1,0);
             //this.text_ext("client.data",15,205,"#FFFFFF",1,1,0);
             //this.text_ext("[ "+this.app.client.update.state.name+" ] : "+this.app.client.Math.Data.Update()+"B",25,220,"#FFFFFF",1,1,0);
             this.text_ext("Log: "+App.ext.debug.text,35,this.app.client.setHeight-25,this.point);
             if (App.ext.debug.strength=="Lite")
                 return;
                   try {
             //this.text_ext("visuals: " 	+ this.app.client.Math.Data.kilobyteCount(this.app.client.visuals) 		+"kb",25,235,"#FFFFFF",1,1,0);
             }catch(e){}
             //this.text_ext("graphics: " + this.app.client.Math.Data.kilobyteCount(this.app.client.graphics) 		+"kb",25,250,"#FFFFFF",1,1,0);
             //this.text_ext("audio: " 	+ this.app.client.Math.Data.kilobyteCount(this.app.client.audio) 		+"kb",25,265,"#FFFFFF",1,1,0);
             //this.text_ext("State: " 	+ this.app.client.Math.Data.kilobyteCount(this.app.client.update.state) 	+"kb",25,280,"#FFFFFF",1,1,0);
             //this.text_ext("ext: " 		+ this.app.client.Math.Data.kilobyteCount(App.ext) 					+"kb",25,295,"#FFFFFF",1,1,0);
             //this.text_ext("Total: "		+ this.app.client.Math.Data.Total()								+"kb",25,325,"#FFFFFF",1,1,0);
    	*/

				/*					    }
    		*/

		}, {
				key: 'stat',
				set: function set(s) {

						this.get('data')[0] = s;
				}

				/**
       * @property
       */

				,
				get: function get() {

						return this.get('data')[0];
				}
		}]);

		return API;
}(__WEBPACK_IMPORTED_MODULE_0__sjs__["a" /* _SJSClass */]);

API.properties = {

		data: [__WEBPACK_IMPORTED_MODULE_1__stats__["a" /* default */]]

};
/* harmony default export */ exports["a"] = API;

function _inspect(input, depth) {
		var maxDepth = 4;
		var maxKeys = 15;

		if (depth === undefined) {
				depth = 0;
		}

		depth += 1;

		if (input === null) {
				return 'null';
		} else if (input === undefined) {
				return 'void';
		} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
				return typeof input === 'undefined' ? 'undefined' : _typeof(input);
		} else if (Array.isArray(input)) {
				if (input.length > 0) {
						var _ret = function () {
								if (depth > maxDepth) return {
												v: '[...]'
										};

								var first = _inspect(input[0], depth);

								if (input.every(function (item) {
										return _inspect(item, depth) === first;
								})) {
										return {
												v: first.trim() + '[]'
										};
								} else {
										return {
												v: '[' + input.slice(0, maxKeys).map(function (item) {
														return _inspect(item, depth);
												}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
										};
								}
						}();

						if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
				} else {
						return 'Array';
				}
		} else {
				var keys = Object.keys(input);

				if (!keys.length) {
						if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
								return input.constructor.name;
						} else {
								return 'Object';
						}
				}

				if (depth > maxDepth) return '{...}';
				var indent = '  '.repeat(depth - 1);
				var entries = keys.slice(0, maxKeys).map(function (key) {
						return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
				}).join('\n  ' + indent);

				if (keys.length >= maxKeys) {
						entries += '\n  ' + indent + '...';
				}

				if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
						return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
				} else {
						return '{\n  ' + indent + entries + '\n' + indent + '}';
				}
		}
}

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_ITypes__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__thingy__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_js__ = __webpack_require__(62);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var IApp = __WEBPACK_IMPORTED_MODULE_0__interfaces_ITypes__["a" /* IApp */];

/** Builds references, listeners and the app prototype.
*	@module
*	@private */



/* utils - universal helper functions */





/* Window & Windows - Cache window into Window const. Query for Windows. */

var Window = window;

if (!(Window instanceof Object)) {
	throw new TypeError('Value of variable "Window" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(Window));
}

var Windows = Window.Windows = typeof Window == 'undefined' ? Window : Window;

/* Console - cache console var */

var Console = console;

if (!(Console instanceof Object)) {
	throw new TypeError('Value of variable "Console" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(Console));
}

var Build = function (_WeakMapThingy) {
	_inherits(Build, _WeakMapThingy);

	/** Attaches a reference to the Statistics module.
 *	@constructor	*/

	function Build(map) {
		_classCallCheck(this, Build);

		if (!(map instanceof WeakMap)) {
			throw new TypeError('Value of argument "map" violates contract.\n\nExpected:\nWeakMap<>\n\nGot:\n' + _inspect(map));
		}

		var _this = _possibleConstructorReturn(this, (Build.__proto__ || Object.getPrototypeOf(Build)).call(this, map));

		_this.id = 0;
		_this.document = document;


		_this.app = __WEBPACK_IMPORTED_MODULE_3__app_js__["a" /* default */];

		if (!(typeof _this.app === 'function')) {
			throw new TypeError('Value of "this.app" violates contract.\n\nExpected:\nFunction\n\nGot:\n' + _inspect(_this.app));
		}

		_this.buildWindowReferences();

		return _this;
	}

	/** Reference to the Window object.
 * @type {Element}	*/

	/**
  * 	Common Functions
  * 	@private
  */

	_createClass(Build, [{
		key: 'time',


		/**
  * @type {Element}	*/

		value: function time(str) {
			if (!(typeof str === 'string')) {
				throw new TypeError('Value of argument "str" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(str));
			}

			Console.timeEnd(str);
		}

		/**
  * @type {Element}	*/

	}, {
		key: 'timeEnd',
		value: function timeEnd(str) {
			if (!(typeof str === 'string')) {
				throw new TypeError('Value of argument "str" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(str));
			}

			Console.timeEnd(str);
		}

		/** Attaches references to the global.window object.
  *	@type {void} */

	}, {
		key: 'buildWindowReferences',
		value: function buildWindowReferences() {

			if (_typeof(this.window.scripts) != _typeof([])) {
				this.window.scripts = [];
			}

			this.window.SpiceJS = this.window.SJS = this;

			/* if no apps have been defined, create a new array */

			if (!this.window.apps) {
				this.window.apps = new Array(1);
			}

			/* if appsNextId isnt larger or equal to 0 assign it to 0 */

			if (!this.window.appsNextId >= 0) {
				this.window.appsNextId = 0;
			}
		}

		/** Generates the app prototype.
  *	@type {Object} */

	}, {
		key: 'buildPrototype',
		value: function buildPrototype() {
			function _ref11(_id11) {
				if (!(_id11 instanceof Object)) {
					throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id11));
				}

				return _id11;
			}

			/* temp stores the app during the create process, it is then returned */
			var temp = {};

			temp = new this.app(new WeakMap());

			temp.window = this.window;

			temp.document = document;

			temp.controller = this;

			temp.id = this.window.appsNextId;

			this.window.apps[temp.id] = temp;

			this.window.appsNextId++;

			return _ref11(this.window.apps[temp.id]);
		}

		/**	Initalize the listeners for the application.
  *   @param {temp} temp - pass a reference to attach listeners
  *   @return {Method} returns self */

	}, {
		key: 'buildListeners',
		value: function buildListeners(temp) {
			if (!(temp instanceof __WEBPACK_IMPORTED_MODULE_3__app_js__["a" /* default */])) {
				throw new TypeError('Value of argument "temp" violates contract.\n\nExpected:\nApp\n\nGot:\n' + _inspect(temp));
			}

			if (this.document.readyState == "complete" || "loaded" || "interactive") {
				console.log('ready');
			}

			temp.Listener(document, "DOMContentLoaded", temp.OnApplicationLoad);

			return temp;
		}

		/** Begins the app build promise.
  *	@return {App} a temp reference */

	}, {
		key: 'create',
		value: function create() {

			var time = new Date().getTime();

			if (!(typeof time === 'number')) {
				throw new TypeError('Value of variable "time" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(time));
			}

			var listReference = void 0;

			var tempReference = void 0;

			var tempReferenceId = void 0;

			//this.statistics.monitor(()=> {

			//this.name = "scriptloadtime";

			// Load External JS files.

			this.utils.loadExternalJS(window.scripts);

			tempReference = this.buildPrototype();

			tempReferenceId = tempReference.id;

			///Temporary Fix for Safari and IE
			//      document

			listReference = this.controller.list(tempReferenceId);

			this.buildListeners(listReference);
			/*
         // ^ F
       }).then(() => {
               this.statistics.log("compileloadtime", new Date().getTime() - time, 'build');
               listReference = this.controller.list(tempReferenceId);
               /// New for After Loaded
             this.statistics.monitor(() => {
                   //this.name = "loadtime";
                   //this.initListeners(listReference);
               }).then(() => {
                   this.statistics.log("scriptloadtime", new Date().getTime() - time, 'build');
                   this.statistics.log("build",time);
               });
       })*/

			return tempReference;
		}
	}, {
		key: 'window',
		get: function get() {
			return Window;
		}

		/** Reference UTILS
  * @type {Element}	*/

	}, {
		key: 'utils',
		get: function get() {
			function _ref4(_id4) {
				if (!(_id4 instanceof Object)) {
					throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id4));
				}

				return _id4;
			}

			return _ref4(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* default */]);
		}

		/** Reference the state object
  * @type {Element}	*/

	}, {
		key: 'aState',
		get: function get() {
			function _ref5(_id5) {
				if (!(_id5 instanceof Object)) {
					throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id5));
				}

				return _id5;
			}

			return _ref5(this.app.main);
		}

		/** Reference to the canvas/app global controller.
  * @type {Object}
  * @protected	*/

	}, {
		key: 'controller',
		get: function get() {
			function _ref6(_id6) {
				if (!(_id6 instanceof Object)) {
					throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id6));
				}

				return _id6;
			}

			return _ref6(this.constructor.map.get(this)['controller']);
		}

		/** Reference to the statistics object.
  * @type {Object}
  * @protected	*/

	}, {
		key: 'statistics',
		get: function get() {
			function _ref7(_id7) {
				if (!(_id7 instanceof Object)) {
					throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id7));
				}

				return _id7;
			}

			return _ref7(this.constructor.map.get(this)['statistics']);
		}
	}]);

	return Build;
}(__WEBPACK_IMPORTED_MODULE_1__thingy__["a" /* default */]);

Build.properties = {

	temp: {},

	/* WIP - temp removed
 statistics:Statistics,
 */

	controller: {

		/** List all of the instances of SpiceJS or
  * @type {method}
  * @param {number} id - Specify a specific instance to return.	*/

		list: function list() {
			var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

			function _ref(_id) {
				if (!(_id == null || _id instanceof Object)) {
					throw new TypeError('Function return value violates contract.\n\nExpected:\nvoid | Object\n\nGot:\n' + _inspect(_id));
				}

				return _id;
			}

			if (!(typeof id === 'number')) {
				throw new TypeError('Value of argument "id" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(id));
			}

			if (id) return _ref(Window.apps[id]);else if (Window.apps.length > 1) return _ref(Window.apps);else return _ref(Window.apps[0]);
		}

	}

};
/* harmony default export */ exports["a"] = Build;
;

function _inspect(input, depth) {
	var maxDepth = 4;
	var maxKeys = 15;

	if (depth === undefined) {
		depth = 0;
	}

	depth += 1;

	if (input === null) {
		return 'null';
	} else if (input === undefined) {
		return 'void';
	} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
		return typeof input === 'undefined' ? 'undefined' : _typeof(input);
	} else if (Array.isArray(input)) {
		if (input.length > 0) {
			var _ret = function () {
				if (depth > maxDepth) return {
						v: '[...]'
					};

				var first = _inspect(input[0], depth);

				if (input.every(function (item) {
					return _inspect(item, depth) === first;
				})) {
					return {
						v: first.trim() + '[]'
					};
				} else {
					return {
						v: '[' + input.slice(0, maxKeys).map(function (item) {
							return _inspect(item, depth);
						}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
					};
				}
			}();

			if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
		} else {
			return 'Array';
		}
	} else {
		var keys = Object.keys(input);

		if (!keys.length) {
			if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
				return input.constructor.name;
			} else {
				return 'Object';
			}
		}

		if (depth > maxDepth) return '{...}';
		var indent = '  '.repeat(depth - 1);
		var entries = keys.slice(0, maxKeys).map(function (key) {
			return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
		}).join('\n  ' + indent);

		if (keys.length >= maxKeys) {
			entries += '\n  ' + indent + '...';
		}

		if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
			return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
		} else {
			return '{\n  ' + indent + entries + '\n' + indent + '}';
		}
	}
}

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__options__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dto_facebook_user__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_math__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__legacy_legacy_core__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__interfaces_ITypes_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dto_dtoTypes__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_version__ = __webpack_require__(140);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var _BUILD_OFFICIAL_ = '0.8.2';
var _BUILD_RENDERER_ = '0.0.1';
var _BUILD_CANVAS_ = '0.8.1';
var _BUILD_LAST_ = '08-2016';
var _BUILD_FIRST_ = '12-2013';


var IApp = __WEBPACK_IMPORTED_MODULE_4__interfaces_ITypes_js__["a" /* IApp */],
    IExt = __WEBPACK_IMPORTED_MODULE_4__interfaces_ITypes_js__["d" /* IExt */],
    IOptions = __WEBPACK_IMPORTED_MODULE_4__interfaces_ITypes_js__["c" /* IOptions */],
    IState = __WEBPACK_IMPORTED_MODULE_4__interfaces_ITypes_js__["e" /* IState */];

var dtoFacebook = __WEBPACK_IMPORTED_MODULE_5__dto_dtoTypes__["a" /* dtoFacebook */];

var IoVersion = __WEBPACK_IMPORTED_MODULE_6__shared_version__["a" /* IoVersion */];

/** core component to the application, including version info, the main reference, and other details
* @module
* @protected */

var Core = function (_legacy_core) {
	_inherits(Core, _legacy_core);

	function Core() {
		var _ref8;

		var _temp, _this, _ret;

		_classCallCheck(this, Core);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref8 = Core.__proto__ || Object.getPrototypeOf(Core)).call.apply(_ref8, [this].concat(args))), _this), _this.options = __WEBPACK_IMPORTED_MODULE_0__options__["a" /* default */], _this.user = __WEBPACK_IMPORTED_MODULE_1__dto_facebook_user__["a" /* default */], _this.client = { visuals: function visuals() {}, graphics: function graphics() {} }, _this.math = new __WEBPACK_IMPORTED_MODULE_2__math_math__["a" /* default */](), _this.time = 0, _this.id = 0, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Core, [{
		key: 'width',


		/**  @type {number} */

		get: function get() {
			function _ref(_id) {
				if (!(typeof _id === 'number')) {
					throw new TypeError('Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(_id));
				}

				return _id;
			}

			return _ref(this.client.setWidth);
		}

		/**  @type {number} */

	}, {
		key: 'height',
		get: function get() {
			function _ref2(_id2) {
				if (!(typeof _id2 === 'number')) {
					throw new TypeError('Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(_id2));
				}

				return _id2;
			}

			return _ref2(this.client.setHeight);
		}

		/**  @type {number} */

	}, {
		key: 'scale',
		get: function get() {
			function _ref3(_id3) {
				if (!(typeof _id3 === 'number')) {
					throw new TypeError('Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(_id3));
				}

				return _id3;
			}

			var scale = 1;

			if (this.client.scale) {
				scale = this.client.scale;
			}

			return _ref3(scale);
		}

		/**  @type {number} */

	}, {
		key: 'version',
		get: function get() {
			function _ref4(_id4) {
				if (!(_id4 instanceof String)) {
					throw new TypeError('Function return value violates contract.\n\nExpected:\nString\n\nGot:\n' + _inspect(_id4));
				}

				return _id4;
			}

			return _ref4(this.get('version'));
		}

		/**  @type {number} */

	}, {
		key: 'fps',
		get: function get() {
			function _ref5(_id5) {
				if (!(typeof _id5 === 'number')) {
					throw new TypeError('Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(_id5));
				}

				return _id5;
			}

			return _ref5(this.client.update.step.fps.toFixedNumber(2));
		}

		/**  @type {object} */

	}, {
		key: 'main',
		get: function get() {
			function _ref6(_id6) {
				if (!IState(_id6)) {
					throw new TypeError('Function return value violates contract.\n\nExpected:\nIState\n\nGot:\n' + _inspect(_id6));
				}

				return _id6;
			}

			return _ref6(this.get('main'));
		}

		/**  @type {object} Legacy, pre Object.Assign
  set main(newmain:Object):Object {
  let state:Object = this.get('main');
  let newstate:Object = newmain;
  state.name = newstate.name;
  state.init = newstate.init;
  state.update = newstate.update;
  state.draw = newstate.draw;
  state.app = this;
  state.visuals = this.client.visuals;
  state.graphics = this.client.graphics;
  return state;
  }
  */

		/**  @type {object} New Object Assign Method
  */

		,
		set: function set(newState) {
			function _ref7(_id7) {
				if (!IState(_id7)) {
					throw new TypeError('Function return value violates contract.\n\nExpected:\nIState\n\nGot:\n' + _inspect(_id7));
				}

				return _id7;
			}

			if (!IState(newState)) {
				throw new TypeError('Value of argument "newState" violates contract.\n\nExpected:\nIState\n\nGot:\n' + _inspect(newState));
			}

			var currentState = this.main;

			if (!IState(currentState)) {
				throw new TypeError('Value of variable "currentState" violates contract.\n\nExpected:\nIState\n\nGot:\n' + _inspect(currentState));
			}

			return _ref7(currentState = Object.assign(currentState, newState));

			if (!IState(currentState)) {
				throw new TypeError('Value of variable "currentState" violates contract.\n\nExpected:\nIState\n\nGot:\n' + _inspect(currentState));
			}
		}
	}]);

	return Core;
}(__WEBPACK_IMPORTED_MODULE_3__legacy_legacy_core__["a" /* default */]);

Core.properties = {
	main: { init: function init() {}, update: function update() {}, draw: function draw() {} },
	version: _BUILD_OFFICIAL_ + _BUILD_LAST_,
	version_details: {
		_official_: _BUILD_OFFICIAL_,
		_renderer_: _BUILD_RENDERER_,
		_canvas_: _BUILD_CANVAS_,
		_firstbuild_: _BUILD_LAST_,
		_lastbuild_: _BUILD_FIRST_
	}
};
/* harmony default export */ exports["a"] = Core;

function _inspect(input, depth) {
	var maxDepth = 4;
	var maxKeys = 15;

	if (depth === undefined) {
		depth = 0;
	}

	depth += 1;

	if (input === null) {
		return 'null';
	} else if (input === undefined) {
		return 'void';
	} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
		return typeof input === 'undefined' ? 'undefined' : _typeof(input);
	} else if (Array.isArray(input)) {
		if (input.length > 0) {
			var _ret2 = function () {
				if (depth > maxDepth) return {
						v: '[...]'
					};

				var first = _inspect(input[0], depth);

				if (input.every(function (item) {
					return _inspect(item, depth) === first;
				})) {
					return {
						v: first.trim() + '[]'
					};
				} else {
					return {
						v: '[' + input.slice(0, maxKeys).map(function (item) {
							return _inspect(item, depth);
						}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
					};
				}
			}();

			if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
		} else {
			return 'Array';
		}
	} else {
		var keys = Object.keys(input);

		if (!keys.length) {
			if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
				return input.constructor.name;
			} else {
				return 'Object';
			}
		}

		if (depth > maxDepth) return '{...}';
		var indent = '  '.repeat(depth - 1);
		var entries = keys.slice(0, maxKeys).map(function (key) {
			return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
		}).join('\n  ' + indent);

		if (keys.length >= maxKeys) {
			entries += '\n  ' + indent + '...';
		}

		if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
			return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
		} else {
			return '{\n  ' + indent + entries + '\n' + indent + '}';
		}
	}
}

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__thingy__ = __webpack_require__(19);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var ILegacyCore = function () {
    function ILegacyCore(input) {
        return input != null && input.create instanceof Object && typeof input.getConnectionAttempts === 'function';
    }

    ;
    Object.defineProperty(ILegacyCore, Symbol.hasInstance, {
        value: function value(input) {
            return ILegacyCore(input);
        }
    });
    return ILegacyCore;
}();

var bammarjara = function bammarjara() {
    _classCallCheck(this, bammarjara);

    this;
};

var legacy_core = function (_WeakMapThingy) {
    _inherits(legacy_core, _WeakMapThingy);

    function legacy_core(map) {
        _classCallCheck(this, legacy_core);

        if (!(map instanceof WeakMap)) {
            throw new TypeError('Value of argument "map" violates contract.\n\nExpected:\nWeakMap\n\nGot:\n' + _inspect(map));
        }

        var _this = _possibleConstructorReturn(this, (legacy_core.__proto__ || Object.getPrototypeOf(legacy_core)).call(this, map));

        _this.tracecount = 0;
        return _this;
    }

    /** Legacy functions.
    *       support for these functions is limited, and planned to be removed completely
    *        this space is primarally used for legacy funtionality
    *       dont use
    */

    _createClass(legacy_core, [{
        key: 'create',
        value: function create(a) {
            function _ref2(_id2) {
                if (!(_id2 instanceof Object)) {
                    throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id2));
                }

                return _id2;
            }

            if (!(a instanceof Object)) {
                throw new TypeError('Value of argument "a" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(a));
            }

            console.trace('	    create(a)');
            return _ref2(this.Construct(a || {}, this.client.room));
        }
    }, {
        key: 'getCurrent',
        value: function getCurrent() {
            function _ref3(_id3) {
                if (!(_id3 instanceof Object)) {
                    throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id3));
                }

                return _id3;
            }

            console.trace('SJS:legacy-core.js:	    getCurrent()');
            return _ref3(this.client.update.state.current);
        }
    }, {
        key: 'getConnection',
        value: function getConnection() {
            function _ref4(_id4) {
                if (!(typeof _id4 === 'string')) {
                    throw new TypeError('Function return value violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(_id4));
                }

                return _id4;
            }

            console.trace('SJS:legacy-core.js:	    getConnection()');
            return _ref4(this.ext.connect.offline);
        }
    }, {
        key: 'getConnectionError',
        value: function getConnectionError() {
            function _ref5(_id5) {
                if (!(typeof _id5 === 'string')) {
                    throw new TypeError('Function return value violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(_id5));
                }

                return _id5;
            }

            console.trace('SJS:legacy-core.js:	    getConnectionError()');
            return _ref5(this.ext.connect.error);
        }
    }, {
        key: 'getConnectionAttempts',
        value: function getConnectionAttempts() {
            function _ref6(_id6) {
                if (!(typeof _id6 === 'string')) {
                    throw new TypeError('Function return value violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(_id6));
                }

                return _id6;
            }

            console.trace('SJS:legacy-core.js:	    getConnectionAttempts()');
            return _ref6(this.ext.connect.connectionAttempts);
        }
    }, {
        key: 'getDelta',
        value: function getDelta() {
            function _ref7(_id7) {
                if (!(typeof _id7 === 'number')) {
                    throw new TypeError('Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(_id7));
                }

                return _id7;
            }

            console.trace('SJS:legacy-core.js:	    getDelta()');
            return _ref7(this.client.update.step.delta);
        }
    }, {
        key: 'getScale',
        value: function getScale() {
            function _ref8(_id8) {
                if (!(typeof _id8 === 'number')) {
                    throw new TypeError('Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(_id8));
                }

                return _id8;
            }

            if (this.tracecount++ < 15) console.trace('SJS:legacy-core.js:	    getScale()');
            return _ref8(this.client.scale);
        }
    }, {
        key: 'getWidth',
        value: function getWidth() {
            function _ref9(_id9) {
                if (!(typeof _id9 === 'number')) {
                    throw new TypeError('Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(_id9));
                }

                return _id9;
            }

            console.trace('SJS:legacy-core.js:	    getWidth()');
            return _ref9(this.client.setWidth);
        }
    }, {
        key: 'getHeight',
        value: function getHeight() {
            function _ref10(_id10) {
                if (!(typeof _id10 === 'number')) {
                    throw new TypeError('Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(_id10));
                }

                return _id10;
            }

            console.trace('SJS:legacy-core.js:	    getHeight()');
            return _ref10(this.client.setHeight);
        }
    }, {
        key: 'getScaledWidth',
        value: function getScaledWidth() {
            function _ref11(_id11) {
                if (!(typeof _id11 === 'number')) {
                    throw new TypeError('Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(_id11));
                }

                return _id11;
            }

            console.trace('SJS:legacy-core.js:	    getScaledWidth()');
            return _ref11(this.client.width);
        }
    }, {
        key: 'getScaledHeight',
        value: function getScaledHeight() {
            function _ref12(_id12) {
                if (!(typeof _id12 === 'number')) {
                    throw new TypeError('Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(_id12));
                }

                return _id12;
            }

            console.trace('SJS:legacy-core.js:	    getScaledHeight()');
            return _ref12(this.client.height);
        }
    }, {
        key: 'setTitle',
        value: function setTitle(title) {
            if (!(typeof title === 'string')) {
                throw new TypeError('Value of argument "title" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(title));
            }

            console.trace('SJS:legacy-core.js:	     setTitle(title)');
            return document.title == title ? document.title : document.title = title;
        }
    }, {
        key: 'setState',
        value: function setState(state) {
            function _ref14(_id14) {
                if (!(_id14 instanceof Object)) {
                    throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id14));
                }

                return _id14;
            }

            if (!(state instanceof Object)) {
                throw new TypeError('Value of argument "state" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(state));
            }

            console.trace('SJS:legacy-core.js:	     setState(state)');
            return _ref14(this.client.update.state.set(state, true));
        }
    }, {
        key: 'toggleWidescreen',
        value: function toggleWidescreen() {
            console.trace('SJS:legacy-core.js:	    toggleWidescreen()');
            return this.client.update.fullscale = !this.client.update.fullscale;
        }
    }]);

    return legacy_core;
}(__WEBPACK_IMPORTED_MODULE_0__thingy__["a" /* default */]);

/* harmony default export */ exports["a"] = legacy_core;

function _inspect(input, depth) {
    var maxDepth = 4;
    var maxKeys = 15;

    if (depth === undefined) {
        depth = 0;
    }

    depth += 1;

    if (input === null) {
        return 'null';
    } else if (input === undefined) {
        return 'void';
    } else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
        return typeof input === 'undefined' ? 'undefined' : _typeof(input);
    } else if (Array.isArray(input)) {
        if (input.length > 0) {
            var _ret = function () {
                if (depth > maxDepth) return {
                        v: '[...]'
                    };

                var first = _inspect(input[0], depth);

                if (input.every(function (item) {
                    return _inspect(item, depth) === first;
                })) {
                    return {
                        v: first.trim() + '[]'
                    };
                } else {
                    return {
                        v: '[' + input.slice(0, maxKeys).map(function (item) {
                            return _inspect(item, depth);
                        }).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
                    };
                }
            }();

            if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
        } else {
            return 'Array';
        }
    } else {
        var keys = Object.keys(input);

        if (!keys.length) {
            if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
                return input.constructor.name;
            } else {
                return 'Object';
            }
        }

        if (depth > maxDepth) return '{...}';
        var indent = '  '.repeat(depth - 1);
        var entries = keys.slice(0, maxKeys).map(function (key) {
            return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
        }).join('\n  ' + indent);

        if (keys.length >= maxKeys) {
            entries += '\n  ' + indent + '...';
        }

        if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
            return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
        } else {
            return '{\n  ' + indent + entries + '\n' + indent + '}';
        }
    }
}

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sjs_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_ITypes__ = __webpack_require__(5);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var IApp = __WEBPACK_IMPORTED_MODULE_1__interfaces_ITypes__["a" /* IApp */],
    IRoom = __WEBPACK_IMPORTED_MODULE_1__interfaces_ITypes__["l" /* IRoom */];

/**
*
*/

var Room = function (_SJSClass) {
	_inherits(Room, _SJSClass);

	/**
 *
 */

	function Room(app) {
		var _ret;

		_classCallCheck(this, Room);

		if (!IApp(app)) {
			throw new TypeError("Value of argument \"app\" violates contract.\n\nExpected:\nIApp\n\nGot:\n" + _inspect(app));
		}

		var _this = _possibleConstructorReturn(this, (Room.__proto__ || Object.getPrototypeOf(Room)).call(this, app));

		_this.started = false;


		return _ret = _this, _possibleConstructorReturn(_this, _ret);
	}

	/**
 *
 */

	_createClass(Room, [{
		key: "Started",
		value: function Started() {

			return function () {
				var a = this.Started;
				//this.app.set_scale();
				this.Started = true;
				return a;
			};
		}
	}]);

	return Room;
}(__WEBPACK_IMPORTED_MODULE_0__sjs_js__["a" /* _SJSClass */]);

/* harmony default export */ exports["a"] = Room;
;

function _inspect(input, depth) {
	var maxDepth = 4;
	var maxKeys = 15;

	if (depth === undefined) {
		depth = 0;
	}

	depth += 1;

	if (input === null) {
		return 'null';
	} else if (input === undefined) {
		return 'void';
	} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
		return typeof input === "undefined" ? "undefined" : _typeof(input);
	} else if (Array.isArray(input)) {
		if (input.length > 0) {
			var _ret2 = function () {
				if (depth > maxDepth) return {
						v: '[...]'
					};

				var first = _inspect(input[0], depth);

				if (input.every(function (item) {
					return _inspect(item, depth) === first;
				})) {
					return {
						v: first.trim() + '[]'
					};
				} else {
					return {
						v: '[' + input.slice(0, maxKeys).map(function (item) {
							return _inspect(item, depth);
						}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
					};
				}
			}();

			if ((typeof _ret2 === "undefined" ? "undefined" : _typeof(_ret2)) === "object") return _ret2.v;
		} else {
			return 'Array';
		}
	} else {
		var keys = Object.keys(input);

		if (!keys.length) {
			if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
				return input.constructor.name;
			} else {
				return 'Object';
			}
		}

		if (depth > maxDepth) return '{...}';
		var indent = '  '.repeat(depth - 1);
		var entries = keys.slice(0, maxKeys).map(function (key) {
			return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
		}).join('\n  ' + indent);

		if (keys.length >= maxKeys) {
			entries += '\n  ' + indent + '...';
		}

		if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
			return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
		} else {
			return '{\n  ' + indent + entries + '\n' + indent + '}';
		}
	}
}

/***/ },
/* 115 */,
/* 116 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_ITypes_js__ = __webpack_require__(5);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var IApp = __WEBPACK_IMPORTED_MODULE_0__interfaces_ITypes_js__["a" /* IApp */],
    IPace = __WEBPACK_IMPORTED_MODULE_0__interfaces_ITypes_js__["f" /* IPace */];

/*
* Base Pace class for caluclating the Pacing of the Application
*/

var Pace = function () {
	function Pace(rate, fps) {
		_classCallCheck(this, Pace);

		if (!(typeof rate === 'number')) {
			throw new TypeError("Value of argument \"rate\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(rate));
		}

		if (!(typeof fps === 'number')) {
			throw new TypeError("Value of argument \"fps\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(fps));
		}

		this.targetFPS = fps;

		this.currentTime = Date.now();

		if (!(typeof this.currentTime === 'number')) {
			throw new TypeError("Value of \"this.currentTime\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(this.currentTime));
		}

		this.rate = rate / 1000.0;

		if (!(typeof this.rate === 'number')) {
			throw new TypeError("Value of \"this.rate\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(this.rate));
		}

		this.offset = this.currentTime - 1000.0 / rate;

		if (!(typeof this.offset === 'number')) {
			throw new TypeError("Value of \"this.offset\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(this.offset));
		}

		this.delta = 0.0;

		//Fake Flow Interfacing
		return this;
	}

	/*
 *	Delta between the last frame and this frame
 */

	_createClass(Pace, [{
		key: "CalculateDelta",
		value: function CalculateDelta() {
			function _ref(_id) {
				if (!(typeof _id === 'number')) {
					throw new TypeError("Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(_id));
				}

				return _id;
			}

			this.currentTime = Date.now();

			if (!(typeof this.currentTime === 'number')) {
				throw new TypeError("Value of \"this.currentTime\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(this.currentTime));
			}

			return _ref(this.currentTime - this.offset);
		}

		/*
  *
  */

	}, {
		key: "Step",
		value: function Step() {

			this.delta = this.CalculateDelta();

			if (!(typeof this.delta === 'number')) {
				throw new TypeError("Value of \"this.delta\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(this.delta));
			}

			var step = this.rate * this.delta;

			if (step > 1.0) {

				//this.offset += Math.floor(step)/this.rate;
				this.offset += (step << 0) / this.rate;

				if (!(typeof this.offset === 'number')) {
					throw new TypeError("Value of \"this.offset\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(this.offset));
				}
			}

			return step - 1.0 > 0.0 ? true : false;
		}
	}]);

	return Pace;
}();

/* harmony default export */ exports["a"] = Pace;

function _inspect(input, depth) {
	var maxDepth = 4;
	var maxKeys = 15;

	if (depth === undefined) {
		depth = 0;
	}

	depth += 1;

	if (input === null) {
		return 'null';
	} else if (input === undefined) {
		return 'void';
	} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
		return typeof input === "undefined" ? "undefined" : _typeof(input);
	} else if (Array.isArray(input)) {
		if (input.length > 0) {
			var _ret = function () {
				if (depth > maxDepth) return {
						v: '[...]'
					};

				var first = _inspect(input[0], depth);

				if (input.every(function (item) {
					return _inspect(item, depth) === first;
				})) {
					return {
						v: first.trim() + '[]'
					};
				} else {
					return {
						v: '[' + input.slice(0, maxKeys).map(function (item) {
							return _inspect(item, depth);
						}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
					};
				}
			}();

			if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
		} else {
			return 'Array';
		}
	} else {
		var keys = Object.keys(input);

		if (!keys.length) {
			if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
				return input.constructor.name;
			} else {
				return 'Object';
			}
		}

		if (depth > maxDepth) return '{...}';
		var indent = '  '.repeat(depth - 1);
		var entries = keys.slice(0, maxKeys).map(function (key) {
			return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
		}).join('\n  ' + indent);

		if (keys.length >= maxKeys) {
			entries += '\n  ' + indent + '...';
		}

		if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
			return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
		} else {
			return '{\n  ' + indent + entries + '\n' + indent + '}';
		}
	}
}

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return dtoFacebook; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var dtoFacebook = function () {
  function dtoFacebook(input) {
    return input != null && (typeof input === "undefined" ? "undefined" : _typeof(input)) === 'object';
  }

  ;
  Object.defineProperty(dtoFacebook, Symbol.hasInstance, {
    value: function value(input) {
      return dtoFacebook(input);
    }
  });
  return dtoFacebook;
}();

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
    //	//To ensure your data is filled, use a callback return your response data.
    //	var facebook = function(){ return App.user.pull();};
    //
    //	//Your facebook ID, callback function(){}
    //	App.user.fbconnect(id, facebook)
    name: "",
    id: "",
    locale: "",
    gender: "",
    updated_time: "",
    timezone: "",
    quotes: "",
    response: {},

    //returns the response object
    get: function get() {
        return this.response;
    },

    //facebook connection
    fbconnect: function con(appid, callback) {
        window.fbAsyncInit = function () {
            FB.init({
                appId: appid,
                status: true, // check login status
                cookie: true, // enable cookies to allow the server to access the session
                xfbml: true // parse XFBML
            });
            FB.login(function () {
                FB.api('/me/feed', 'post', { message: 'Hello, world!' });
            }, { scope: 'publish_actions' });
        };

        // Load the SDK asynchronously
        (function (d) {
            var js,
                id = 'facebook-jssdk',
                ref = d.getElementsByTagName('script')[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement('script');js.id = id;js.async = true;
            js.src = "//connect.facebook.net/en_US/all.js";
            ref.parentNode.insertBefore(js, ref);
        })(document);

        // Here we run a very simple Flappy of the Graph API after login is successful.
        // This testAPI() function is only called in those cases.

        /*
        function testAPI() {
        console.log('Welcome!  Fetching your information.... ');
           FB.api('/me', function(response) {
              App.user.facebook(response);
              callback(response);
            log('Good to see you, ' + response.name + '.');
          });
        }
          */
    },

    //facebook callback
    facebook: function facebook(response) {
        this.response = response;
        this.name = this.response.name;
        this.id = this.response.id;
        this.locale = this.response.locale;
        this.gender = this.response.gender;
        this.updated_time = this.response.updated_time;
        this.timezone = this.response.timezone;
        this.quotes = this.response.quotes;
    }

};

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_interfaces_ITypes__ = __webpack_require__(5);
var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var ICookies = __WEBPACK_IMPORTED_MODULE_0__core_interfaces_ITypes__["p" /* ICookies */];

/**
* <a href="https://github.com/ScottHamper/Cookies">Cookies Polyfill by ScottHamper</a>, modified to ES6
* @noflow
* @module
* @public
*/

var Cookies =

/**
* The constructor will fill window.Cookies with a new instance.
* @param {Object} app - reference to the app.
*/

function Cookies() {
    _classCallCheck(this, Cookies);

    var factory = function factory(window) {
        if (_typeof(window.document) !== 'object') {
            throw new Error('Cookies.js requires a `window` with a `document` object');
        }

        var Cookies = window.Cookies = function (key, value, options) {
            return arguments.length === 1 ? Cookies.get(key) : Cookies.set(key, value, options);
        };

        // Allows for setter injection in unit tests
        Cookies._document = window.document;

        // Used to ensure cookie keys do not collide with
        // built-in `Object` properties
        Cookies._cacheKeyPrefix = 'cookey.'; // Hurr hurr, :)

        Cookies._maxExpireDate = new Date('Fri, 31 Dec 9999 23:59:59 UTC');

        Cookies.defaults = {
            path: '/',
            secure: false
        };

        Cookies.get = function (key) {
            if (Cookies._cachedDocumentCookie !== Cookies._document.cookie) {
                Cookies._renewCache();
            }

            return Cookies._cache[Cookies._cacheKeyPrefix + key];
        };

        Cookies.set = function (key, value, options) {
            options = Cookies._getExtendedOptions(options);
            options.expires = Cookies._getExpiresDate(value === undefined ? -1 : options.expires);

            Cookies._document.cookie = Cookies._generateCookieString(key, value, options);

            return Cookies;
        };

        Cookies.expire = function (key, options) {
            return Cookies.set(key, undefined, options);
        };

        Cookies._getExtendedOptions = function (options) {
            return {
                path: options && options.path || Cookies.defaults.path,
                domain: options && options.domain || Cookies.defaults.domain,
                expires: options && options.expires || Cookies.defaults.expires,
                secure: options && options.secure !== undefined ? options.secure : Cookies.defaults.secure
            };
        };

        Cookies._isValidDate = function (date) {
            return Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date.getTime());
        };

        Cookies._getExpiresDate = function (expires, now) {
            now = now || new Date();

            if (typeof expires === 'number') {
                expires = expires === Infinity ? Cookies._maxExpireDate : new Date(now.getTime() + expires * 1000);
            } else if (typeof expires === 'string') {
                expires = new Date(expires);
            }

            if (expires && !Cookies._isValidDate(expires)) {
                throw new Error('`expires` parameter cannot be converted to a valid Date instance');
            }

            return expires;
        };

        Cookies._generateCookieString = function (key, value, options) {
            key = key.replace(/[^#$&+\^`|]/g, encodeURIComponent);
            key = key.replace(/\(/g, '%28').replace(/\)/g, '%29');
            value = (value + '').replace(/[^!#$&-+\--:<-\[\]-~]/g, encodeURIComponent);
            options = options || {};

            var cookieString = key + '=' + value;
            cookieString += options.path ? ';path=' + options.path : '';
            cookieString += options.domain ? ';domain=' + options.domain : '';
            cookieString += options.expires ? ';expires=' + options.expires.toUTCString() : '';
            cookieString += options.secure ? ';secure' : '';

            return cookieString;
        };

        Cookies._getCacheFromString = function (documentCookie) {
            var cookieCache = {};
            var cookiesArray = documentCookie ? documentCookie.split('; ') : [];

            for (var i = 0; i < cookiesArray.length; i++) {
                var cookieKvp = Cookies._getKeyValuePairFromCookieString(cookiesArray[i]);

                if (cookieCache[Cookies._cacheKeyPrefix + cookieKvp.key] === undefined) {
                    cookieCache[Cookies._cacheKeyPrefix + cookieKvp.key] = cookieKvp.value;
                }
            }

            return cookieCache;
        };

        Cookies._getKeyValuePairFromCookieString = function (cookieString) {
            // "=" is a valid character in a cookie value according to RFC6265, so cannot `split('=')`
            var separatorIndex = cookieString.indexOf('=');

            // IE omits the "=" when the cookie value is an empty string
            separatorIndex = separatorIndex < 0 ? cookieString.length : separatorIndex;

            return {
                key: decodeURIComponent(cookieString.substr(0, separatorIndex)),
                value: decodeURIComponent(cookieString.substr(separatorIndex + 1))
            };
        };

        Cookies._renewCache = function () {
            Cookies._cache = Cookies._getCacheFromString(Cookies._document.cookie);
            Cookies._cachedDocumentCookie = Cookies._document.cookie;
        };

        Cookies._areEnabled = function () {
            var testKey = 'cookies.js';
            var areEnabled = Cookies.set(testKey, 1).get(testKey) === '1';
            Cookies.expire(testKey);
            return areEnabled;
        };

        Cookies.enabled = Cookies._areEnabled();

        return Cookies;
    };

    var cookiesExport = _typeof(global.document) === 'object' ? factory(global) : factory;
    var AMD = "function" === 'function' && __webpack_require__(281);
    var objectExports = ( false ? 'undefined' : _typeof(exports)) === 'object';
    var moduleExports = ( false ? 'undefined' : _typeof(module)) === 'object' && _typeof(module.exports) === 'object';
    // AMD support
    if (AMD) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
            return cookiesExport;
        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        // CommonJS/Node.js support
    } else if (objectExports) {
        // Support Node.js specific `module.exports` (which can be a function)
        if (moduleExports) {
            exports = module.exports = cookiesExport;
        }
        // But always support CommonJS module 1.1.1 spec (`exports` cannot be a function)
        exports.Cookies = cookiesExport;
    } else {
        global.Cookies = cookiesExport;
    }

    return Cookies;
};

/* harmony default export */ exports["a"] = Cookies;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45), __webpack_require__(282)(module)))

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_thingy__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_interfaces_ITypes__ = __webpack_require__(5);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** Assign metatags via Metatags global object
*	@module
*	@public */




var IMetatags = __WEBPACK_IMPORTED_MODULE_1__core_interfaces_ITypes__["r" /* IMetatags */];

var Metatags = function () {

		/*
  *
  */

		function Metatags(url) {
				_classCallCheck(this, Metatags);

				this.ms_taphighlight = "no";
				this.apple_webapp = "yes";
				this.apple_statusbar = "black";
				this.devicedpi = true;
				this.devicewidth = true;
				this.head = document.getElementsByTagName('head')[0];
				this.link = null;
				this.meta = null;
				this.count = 0;
				this.width = 0;
				this.cache = false;
				this.cacheage = 3;

				if (!(typeof url === 'string' || url == null)) {
						throw new TypeError("Value of argument \"url\" violates contract.\n\nExpected:\nstring | void\n\nGot:\n" + _inspect(url));
				}

				this.width = window.innerWidth;

				//Touch

				if (!(typeof this.width === 'number')) {
						throw new TypeError("Value of \"this.width\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(this.width));
				}

				this.append(this.new("msapplication-tap-highlight", this.ms_taphighlight));

				this.append(this.new("apple-mobile-web-app-capable", this.apple_webapp));

				this.append(this.new("apple-mobile-web-app-status-bar-style", this.apple_statusbar));

				this.append(this.new("cursor-event-mode", "native"));

				this.append(this.new("touch-event-mode", "native"));

				this.append(this.new("HandheldFriendly", "True"));

				//Dpi/View

				if (this.devicewidth) {

						this.append(this.new("viewport", "width=device-width, user-scalable=no"));
				}

				if (this.devicedpi) {

						this.append(this.new("viewport", "target-densitydpi=" + this.width + ",-webkit-min-device-pixel-ratio=1,min-resolution:=" + this.width + ",-moz-device-pixel-ratio=1"));
				}

				this.append(this.new("viewport", "user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1"));

				//Cache

				if (!this.cache) {

						this.append(this.new("cache-control", "max-age=0"));

						this.append(this.new("cache-control", "no-cache"));

						this.append(this.new("pragma", "no-cache"));
				} else {

						this.append(this.new("cache-control", "max-age=" + this.cacheage));
				}

				this.append(this.new("expires", "Tue, 01 Jan 1980 1:00:00 GMT"));

				return this;
		}

		/*
  *	Favicon. Automatically fills a standard metaAppend while needing only one argument, sets favicon
  */

		_createClass(Metatags, [{
				key: "metaFavicon",
				value: function metaFavicon(img) {
						if (!(typeof img === 'string')) {
								throw new TypeError("Value of argument \"img\" violates contract.\n\nExpected:\nstring\n\nGot:\n" + _inspect(img));
						}

						this.append(this.metaLink(img, "shortcut icon", "image/png"));
				}

				/*
    * Construct a standard metaLink element
    */

		}, {
				key: "metaLink",
				value: function metaLink(href, rel, type) {
						function _ref2(_id2) {
								if (!(_id2 instanceof Object)) {
										throw new TypeError("Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n" + _inspect(_id2));
								}

								return _id2;
						}

						if (!(typeof href === 'string')) {
								throw new TypeError("Value of argument \"href\" violates contract.\n\nExpected:\nstring\n\nGot:\n" + _inspect(href));
						}

						if (!(typeof rel === 'string')) {
								throw new TypeError("Value of argument \"rel\" violates contract.\n\nExpected:\nstring\n\nGot:\n" + _inspect(rel));
						}

						if (!(typeof type === 'string')) {
								throw new TypeError("Value of argument \"type\" violates contract.\n\nExpected:\nstring\n\nGot:\n" + _inspect(type));
						}

						//Create link element
						this.link = document.createElement('link');

						//Assign element values
						this.link.href = href;

						this.link.rel = rel;

						this.link.type = type;

						//Return link
						return _ref2(this.link);
				}

				/*
    * Construct a standard metaTag element
    */

		}, {
				key: "new",
				value: function _new() {
						var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
						var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

						function _ref3(_id3) {
								if (!(_id3 instanceof Object)) {
										throw new TypeError("Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n" + _inspect(_id3));
								}

								return _id3;
						}

						if (!(typeof name === 'string')) {
								throw new TypeError("Value of argument \"name\" violates contract.\n\nExpected:\nstring\n\nGot:\n" + _inspect(name));
						}

						if (!(typeof content === 'string')) {
								throw new TypeError("Value of argument \"content\" violates contract.\n\nExpected:\nstring\n\nGot:\n" + _inspect(content));
						}

						this.meta = document.createElement('meta');

						this.meta.content = content;

						this.meta.name = name;

						return _ref3(this.meta);
				}

				/*
    * Append a meta object to the <head>
    */

		}, {
				key: "append",
				value: function append(meta) {

						var result = false;

						if (this.head.appendChild(meta)) {

								this.count++;

								result = true;
						} else {

								result = false;
						}

						return result;
				}
		}]);

		return Metatags;
}();

/* harmony default export */ exports["a"] = Metatags;

function _inspect(input, depth) {
		var maxDepth = 4;
		var maxKeys = 15;

		if (depth === undefined) {
				depth = 0;
		}

		depth += 1;

		if (input === null) {
				return 'null';
		} else if (input === undefined) {
				return 'void';
		} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
				return typeof input === "undefined" ? "undefined" : _typeof(input);
		} else if (Array.isArray(input)) {
				if (input.length > 0) {
						var _ret = function () {
								if (depth > maxDepth) return {
												v: '[...]'
										};

								var first = _inspect(input[0], depth);

								if (input.every(function (item) {
										return _inspect(item, depth) === first;
								})) {
										return {
												v: first.trim() + '[]'
										};
								} else {
										return {
												v: '[' + input.slice(0, maxKeys).map(function (item) {
														return _inspect(item, depth);
												}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
										};
								}
						}();

						if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
				} else {
						return 'Array';
				}
		} else {
				var keys = Object.keys(input);

				if (!keys.length) {
						if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
								return input.constructor.name;
						} else {
								return 'Object';
						}
				}

				if (depth > maxDepth) return '{...}';
				var indent = '  '.repeat(depth - 1);
				var entries = keys.slice(0, maxKeys).map(function (key) {
						return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
				}).join('\n  ' + indent);

				if (keys.length >= maxKeys) {
						entries += '\n  ' + indent + '...';
				}

				if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
						return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
				} else {
						return '{\n  ' + indent + entries + '\n' + indent + '}';
				}
		}
}

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_interfaces_ITypes__ = __webpack_require__(5);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var IConnect = __WEBPACK_IMPORTED_MODULE_0__core_interfaces_ITypes__["t" /* IConnect */];

var Useragent = function () {

	/*
 *
 */

	function Useragent() {
		_classCallCheck(this, Useragent);

		this.agent = navigator.userAgent;
		this.mouse = false;
		this.touch = false;
		this.keyboard = false;
		this.windows = false;
		this.chrome = false;
		this.safari = false;
		this.iemobile = false;
		this.nokia = false;
		this.ie = false;
		this.ios = false;
		this.blackberry = false;
		this.playbook = false;
		this.bb10 = false;
		this.mobile = false;


		//Query Browser
		this.chrome = this.Chrome();

		if (!(typeof this.chrome === 'boolean')) {
			throw new TypeError("Value of \"this.chrome\" violates contract.\n\nExpected:\nboolean\n\nGot:\n" + _inspect(this.chrome));
		}

		this.safari = this.Safari();

		if (!(typeof this.safari === 'boolean')) {
			throw new TypeError("Value of \"this.safari\" violates contract.\n\nExpected:\nboolean\n\nGot:\n" + _inspect(this.safari));
		}

		this.iemobile = this.IEMobile();

		if (!(typeof this.iemobile === 'boolean')) {
			throw new TypeError("Value of \"this.iemobile\" violates contract.\n\nExpected:\nboolean\n\nGot:\n" + _inspect(this.iemobile));
		}

		this.nokia = this.Nokia();

		if (!(typeof this.nokia === 'boolean')) {
			throw new TypeError("Value of \"this.nokia\" violates contract.\n\nExpected:\nboolean\n\nGot:\n" + _inspect(this.nokia));
		}

		this.ie = this.trident = this.IE();

		if (!(typeof this.ie === 'boolean')) {
			throw new TypeError("Value of \"this.ie\" violates contract.\n\nExpected:\nboolean\n\nGot:\n" + _inspect(this.ie));
		}

		this.blackberry = this.BlackBerry();

		if (!(typeof this.blackberry === 'boolean')) {
			throw new TypeError("Value of \"this.blackberry\" violates contract.\n\nExpected:\nboolean\n\nGot:\n" + _inspect(this.blackberry));
		}

		this.ios = this.iOS();

		if (!(typeof this.ios === 'boolean')) {
			throw new TypeError("Value of \"this.ios\" violates contract.\n\nExpected:\nboolean\n\nGot:\n" + _inspect(this.ios));
		}

		this.android = this.Android();

		this.touch = this.Mobile();

		if (!(typeof this.touch === 'boolean')) {
			throw new TypeError("Value of \"this.touch\" violates contract.\n\nExpected:\nboolean\n\nGot:\n" + _inspect(this.touch));
		}

		this.mouse = !this.Mobile() || this.BlackBerry();

		this.keyboard = this.Desktop() || this.BlackBerry();

		if (!(typeof this.keyboard === 'boolean')) {
			throw new TypeError("Value of \"this.keyboard\" violates contract.\n\nExpected:\nboolean\n\nGot:\n" + _inspect(this.keyboard));
		}

		this.Mobile();
		this.Desktop();

		return this;
		//this.app.ext.useragent = this;
	}

	/*
 *	Match user agent for IE
 */


	//Cached Navigator.userAgent


	_createClass(Useragent, [{
		key: "IE",
		value: function IE() {

			return this.agent.match(/Trident/i) ? true : false;
		}

		/*
  *	Match user agent for iOS
  */

	}, {
		key: "iOS",
		value: function iOS() {

			return this.agent.match(/iPhone|iPad|iPod/i) ? true : false;
		}

		/*
  *	Match user agent for Nokia
  */

	}, {
		key: "Nokia",
		value: function Nokia() {

			return this.agent.match(/Nokia/i) ? true : false;
		}

		/*
  *	Determine mobile or windows based on useragent
  */

	}, {
		key: "Mobile",
		value: function Mobile() {
			function _ref4(_id4) {
				if (!(typeof _id4 === 'boolean')) {
					throw new TypeError("Function return value violates contract.\n\nExpected:\nboolean\n\nGot:\n" + _inspect(_id4));
				}

				return _id4;
			}

			return _ref4(this.mobile = this.IEMobile() || this.BlackBerry() || this.iOS() || this.Android() || this.Nokia());

			if (!(typeof this.mobile === 'boolean')) {
				throw new TypeError("Value of \"this.mobile\" violates contract.\n\nExpected:\nboolean\n\nGot:\n" + _inspect(this.mobile));
			}
		}

		/*
  *	Match user agent for Chrome
  */

	}, {
		key: "Chrome",
		value: function Chrome() {

			return this.chrome = this.agent.match(/Chrome/i) ? true : false;
		}

		/*
  *	Match user agent for Safari
  */

	}, {
		key: "Safari",
		value: function Safari() {

			return (this.agent.match(/Safari/i) || this.agent.match(/AppleWebKit/i)) && !this.agent.match(/Chrome/i) ? true : false;
		}
	}, {
		key: "Desktop",
		value: function Desktop() {

			return this.windows = this.IEMobile() || this.IE() || !this.Mobile();
		}

		/*
  *	Match user agent for Android
  */

	}, {
		key: "Android",
		value: function Android() {
			return this.agent.match(/Android/i) ? true : false;
		}

		/*
  *	Match user agent for IEMobile
  */

	}, {
		key: "IEMobile",
		value: function IEMobile() {

			var trident = this.agent.match(/IEMobile/i);
			var windowsphone = this.agent.match(/Windows Phone/i);
			var touch = this.agent.match(/touch/i);

			return trident || windowsphone || touch ? true : false;
		}

		/*
  *	Match user agent for Blackberry
  */

	}, {
		key: "BlackBerry",
		value: function BlackBerry() {
			this.playbook = this.agent.match(/PlayBook/i) || false;
			this.bb10 = this.agent.match(/BB10/i) || false;
			return this.agent.match(/BlackBerry/i) || this.playbook || this.bb10 ? true : false;
		}
	}]);

	return Useragent;
}();

/* harmony default export */ exports["a"] = Useragent;

function _inspect(input, depth) {
	var maxDepth = 4;
	var maxKeys = 15;

	if (depth === undefined) {
		depth = 0;
	}

	depth += 1;

	if (input === null) {
		return 'null';
	} else if (input === undefined) {
		return 'void';
	} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
		return typeof input === "undefined" ? "undefined" : _typeof(input);
	} else if (Array.isArray(input)) {
		if (input.length > 0) {
			var _ret = function () {
				if (depth > maxDepth) return {
						v: '[...]'
					};

				var first = _inspect(input[0], depth);

				if (input.every(function (item) {
					return _inspect(item, depth) === first;
				})) {
					return {
						v: first.trim() + '[]'
					};
				} else {
					return {
						v: '[' + input.slice(0, maxKeys).map(function (item) {
							return _inspect(item, depth);
						}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
					};
				}
			}();

			if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
		} else {
			return 'Array';
		}
	} else {
		var keys = Object.keys(input);

		if (!keys.length) {
			if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
				return input.constructor.name;
			} else {
				return 'Object';
			}
		}

		if (depth > maxDepth) return '{...}';
		var indent = '  '.repeat(depth - 1);
		var entries = keys.slice(0, maxKeys).map(function (key) {
			return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
		}).join('\n  ' + indent);

		if (keys.length >= maxKeys) {
			entries += '\n  ' + indent + '...';
		}

		if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
			return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
		} else {
			return '{\n  ' + indent + entries + '\n' + indent + '}';
		}
	}
}

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_sjs__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_interfaces_ITypes__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__etc_cookies__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__network_connection__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__input_cursor__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__etc_metatags__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__etc_useragent__ = __webpack_require__(121);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var weakmap = __WEBPACK_IMPORTED_MODULE_1__core_interfaces_ITypes__["m" /* weakmap */],
    object = __WEBPACK_IMPORTED_MODULE_1__core_interfaces_ITypes__["n" /* object */],
    array_string = __WEBPACK_IMPORTED_MODULE_1__core_interfaces_ITypes__["o" /* array_string */],
    IApp = __WEBPACK_IMPORTED_MODULE_1__core_interfaces_ITypes__["a" /* IApp */],
    IExt = __WEBPACK_IMPORTED_MODULE_1__core_interfaces_ITypes__["d" /* IExt */],
    ICookies = __WEBPACK_IMPORTED_MODULE_1__core_interfaces_ITypes__["p" /* ICookies */],
    IUseragent = __WEBPACK_IMPORTED_MODULE_1__core_interfaces_ITypes__["q" /* IUseragent */],
    IMetatags = __WEBPACK_IMPORTED_MODULE_1__core_interfaces_ITypes__["r" /* IMetatags */],
    ICursor = __WEBPACK_IMPORTED_MODULE_1__core_interfaces_ITypes__["s" /* ICursor */],
    IConnect = __WEBPACK_IMPORTED_MODULE_1__core_interfaces_ITypes__["t" /* IConnect */];












var Ext = function (_SJSClass2) {
	_inherits(Ext, _SJSClass2);

	/*	Constructor
 /*	*/

	/*	Cursor Handler
 /*	Logs last cursor and allows to easily change the cursor on the fly
 /*	*/


	/*	Cookie Storage
 /*	Polyfill provided by ScottHamper
 /*	https://github.com/ScottHamper/Cookies#api-reference
 /*	*/

	function Ext(app) {
		var _ret;

		_classCallCheck(this, Ext);

		if (!IApp(app)) {
			throw new TypeError('Value of argument "app" violates contract.\n\nExpected:\nIApp\n\nGot:\n' + _inspect(app));
		}

		//Checks for If node?

		//	window.m1 = this.metatags;
		//	this.metatags = new this.metatags;
		//this.app = app;
		var _this = _possibleConstructorReturn(this, (Ext.__proto__ || Object.getPrototypeOf(Ext)).call(this, app));

		_this.useragent = new __WEBPACK_IMPORTED_MODULE_6__etc_useragent__["a" /* default */]();
		_this.cookies = new __WEBPACK_IMPORTED_MODULE_2__etc_cookies__["a" /* default */]();
		_this.metatag = new __WEBPACK_IMPORTED_MODULE_5__etc_metatags__["a" /* default */]();
		_this.cursor = new __WEBPACK_IMPORTED_MODULE_4__input_cursor__["a" /* default */]();
		_this.connect = new __WEBPACK_IMPORTED_MODULE_3__network_connection__["a" /* default */]();
		return _ret = _this, _possibleConstructorReturn(_this, _ret);
	}

	/*	Connection Controller
 /*	Assists in making ajax calls and allows you to test your connection.
 /*	hostReachable by jpsilvashy - https://gist.github.com/jpsilvashy/5725579
 /*	*/

	/*	MetaTag Handler
 /*	Assists in dynamically applying metatags.
 /*	Automatically applies Microsoft, Apple and common metatags.
 /*	*/

	/*	UserAgent Information
 /*	Assists in detecting the platform that you are running on.
 /*	*/

	return Ext;
}(__WEBPACK_IMPORTED_MODULE_0__core_sjs__["a" /* _SJSClass */]);

/* harmony default export */ exports["a"] = Ext;

function _inspect(input, depth) {
	var maxDepth = 4;
	var maxKeys = 15;

	if (depth === undefined) {
		depth = 0;
	}

	depth += 1;

	if (input === null) {
		return 'null';
	} else if (input === undefined) {
		return 'void';
	} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
		return typeof input === 'undefined' ? 'undefined' : _typeof(input);
	} else if (Array.isArray(input)) {
		if (input.length > 0) {
			var _ret2 = function () {
				if (depth > maxDepth) return {
						v: '[...]'
					};

				var first = _inspect(input[0], depth);

				if (input.every(function (item) {
					return _inspect(item, depth) === first;
				})) {
					return {
						v: first.trim() + '[]'
					};
				} else {
					return {
						v: '[' + input.slice(0, maxKeys).map(function (item) {
							return _inspect(item, depth);
						}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
					};
				}
			}();

			if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
		} else {
			return 'Array';
		}
	} else {
		var keys = Object.keys(input);

		if (!keys.length) {
			if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
				return input.constructor.name;
			} else {
				return 'Object';
			}
		}

		if (depth > maxDepth) return '{...}';
		var indent = '  '.repeat(depth - 1);
		var entries = keys.slice(0, maxKeys).map(function (key) {
			return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
		}).join('\n  ' + indent);

		if (keys.length >= maxKeys) {
			entries += '\n  ' + indent + '...';
		}

		if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
			return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
		} else {
			return '{\n  ' + indent + entries + '\n' + indent + '}';
		}
	}
}

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_sjs_js__ = __webpack_require__(8);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/**
BASE iamge class  _WIP
*/

var Base = function () {
		function Base() {
				_classCallCheck(this, Base);
		}

		_createClass(Base, [{
				key: 'get',


				/**
    Get an image  _WIP
    */

				value: function get() {
						function _ref(_id) {
								if (!(_id instanceof Object)) {
										throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id));
								}

								return _id;
						}

						var img = new Image();
						img.src = this.src;
						img.file = this.file;
						img.name = this.name;
						img.number = 1 + window.apps[0].client.graphics.SpriteLoadErrors++;

						img.onload = function () {

								window.apps[0].client.graphics.SpriteLoadErrors--;
						};

						return _ref(img);
				}

				/**
    Retrieve Zip _WIP
    */

		}, {
				key: 'retrieveZipFile',
				value: function retrieveZipFile(file) {
						if (!(typeof file === 'string')) {
								throw new TypeError('Value of argument "file" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(file));
						}

						file = String(file);

						var t = Application.client.data.Zip.file(file).asUint8Array();

						var strings = [],
						    chunksize = 0xffff;

						var len = t.length;

						// There is a maximum stack size. We cannot call String.fromCharCode with as many arguments as we want

						if (!(typeof len === 'number')) {
								throw new TypeError('Value of variable "len" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(len));
						}

						for (var i = 0; i * chunksize < len; i++) {

								strings.push(String.fromCharCode.apply(null, t.subarray(i * chunksize, (i + 1) * chunksize)));
						}

						var content = btoa(strings.join(''));

						return "data:image/png;base64," + String(content).trim();
				}

				/**
    Get from retrieved Zip _WIP
    */

		}, {
				key: 'getFromZip',
				value: function getFromZip() {

						var img = new Image();

						if (!(img instanceof Object)) {
								throw new TypeError('Value of variable "img" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(img));
						}

						var file = String(this.src);

						if (!(typeof file === 'string')) {
								throw new TypeError('Value of variable "file" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(file));
						}

						img.src = this.retrieveZipFile(this.src);

						img.file = this.file;

						img.name = this.name;

						img.number = 1 + window.apps[0].client.graphics.SpriteLoadErrors++;

						img.onload = function () {

								window.apps[0].client.graphics.SpriteLoadErrors--;
						};

						return img;
				}

				/**
    Unload graphics
    */

		}, {
				key: 'unload',
				value: function unload() {

						this.Sources.unload(this.name);
				}
		}]);

		return Base;
}();

;

var Library = function (_SJSClass) {
		_inherits(Library, _SJSClass);

		function Library() {
				var _ref11;

				var _temp, _this, _ret;

				_classCallCheck(this, Library);

				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
						args[_key] = arguments[_key];
				}

				return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref11 = Library.__proto__ || Object.getPrototypeOf(Library)).call.apply(_ref11, [this].concat(args))), _this), _this.path = "", _this.SpriteWebItems = new Array(0), _this.SpriteLoadNumber = 0, _this.SpriteLoadErrors = 0, _this.SpriteLoadTime = 0, _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(Library, [{
				key: 'graphicsLibrary',


				/**
    * Loads objects used for loadng images _WIP to refractor
    * @param name - internal file name.
    * @param address - http link.
    */

				value: function graphicsLibrary() {

						this.Sprite = {};

						this.Sources = {};

						this.Sources.prototype = {

								get: function get() {
										return this.index;
								},

								getByName: function getByName(name) {
										return this.index[name];
								},

								getName: function getName(name) {
										return this.index[name].name;
								}

						};

						this.Sprite = Object.create(this.Base, {
								constructor: function Sprite(path, filename) {
										this.path = path;this.filename = filename;return path;
								},

								src: { value: "S:undefined" },

								file: { value: "S:undefined" },

								name: { value: "S:undefined" }

						});

						if (!(this.Sprite instanceof Object)) {
								throw new TypeError('Value of "this.Sprite" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(this.Sprite));
						}

						this.Sources = Object.create(this.Sources.prototype, {
								count: { writable: true, configurable: true, value: 0 },
								index: { value: new Array() },
								append: { value: function append(image) {
												if (this.index[image.name] == image) return;
												this.index[image.name] = image;
												this.count++;
										} },
								unload: { value: function unload(name) {
												this.index[name] = null;
												return this.index[name];
										} }
						});

						if (!(this.Sources instanceof Object)) {
								throw new TypeError('Value of "this.Sources" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(this.Sources));
						}

						return true;
				}
		}]);

		return Library;
}(__WEBPACK_IMPORTED_MODULE_0__core_sjs_js__["a" /* _SJSClass */]);

var Graphics = function (_Library) {
		_inherits(Graphics, _Library);

		function Graphics(app) {
				_classCallCheck(this, Graphics);

				var _this2 = _possibleConstructorReturn(this, (Graphics.__proto__ || Object.getPrototypeOf(Graphics)).call(this, app));

				_this2.Base = new Base();


				_this2.graphicsLibrary();

				return _this2;
		}

		/** Load a PNG
     * @method
     * @param name - client's reference name of the image, also filename if file is void
     * @param file - name of the file to load,optional
     * @method
     */

		_createClass(Graphics, [{
				key: 'load',
				value: function load(name, file) {
						function _ref4(_id4) {
								if (!(_id4 instanceof Object)) {
										throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id4));
								}

								return _id4;
						}

						if (!(typeof name === 'string')) {
								throw new TypeError('Value of argument "name" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(name));
						}

						if (!(typeof file === 'string' || file == null)) {
								throw new TypeError('Value of argument "file" violates contract.\n\nExpected:\nstring | void\n\nGot:\n' + _inspect(file));
						}

						if (typeof file === "undefined") file = this.app.options.get("paths").images + "" + name;

						this.Sources.append(this.SpriteAppend(name, file));

						return _ref4(this.Sources.getByName(name));
				}

				/** Load a PNG from a Zip _ WIP uses global zip name
       * @method
       * @param name - client's reference name of the image, also filename
       * @method
       */

		}, {
				key: 'loadFromZip',
				value: function loadFromZip(name) {
						function _ref5(_id5) {
								if (!(_id5 instanceof Object)) {
										throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id5));
								}

								return _id5;
						}

						if (!(typeof name === 'string')) {
								throw new TypeError('Value of argument "name" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(name));
						}

						var file = name;

						this.Sources.append(this.SpriteAppendZip(name, file));

						return _ref5(this.Sources.getByName(name));
				}

				/** Creates a sprite object and logs it.
       * @method
       * @param file - client's reference name of the image
       * @param src - source path
       * @param name - internal name of the sprite
       * @method
       */

		}, {
				key: 'SpriteCreate',
				value: function SpriteCreate(file, src, name) {
						function _ref6(_id6) {
								if (!(_id6 instanceof Object)) {
										throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id6));
								}

								return _id6;
						}

						if (!(typeof file === 'string')) {
								throw new TypeError('Value of argument "file" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(file));
						}

						if (!(typeof src === 'string')) {
								throw new TypeError('Value of argument "src" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(src));
						}

						if (!(typeof name === 'string')) {
								throw new TypeError('Value of argument "name" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(name));
						}

						this.SpriteLoadNumber++;

						this.SpriteLoadTime += 10 * this.app.delta_speed * this.SpriteLoadNumber;

						return _ref6(this.sprite = Object.create(this.Sprite, { file: { value: file }, src: { value: src }, name: { value: name } }));
				}

				/** Creates a sprite object and logs it.
       * @method
       * @param name - internal name of the sprite
       * @param file - source filename
       * @method
       */

		}, {
				key: 'SpriteAppend',
				value: function SpriteAppend(name, file) {
						function _ref7(_id7) {
								if (!(_id7 instanceof Object)) {
										throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id7));
								}

								return _id7;
						}

						if (!(typeof name === 'string')) {
								throw new TypeError('Value of argument "name" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(name));
						}

						if (!(typeof file === 'string')) {
								throw new TypeError('Value of argument "file" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(file));
						}

						var image = (this.img = this.SpriteCreate(file, this.path + file + ".png", name)).get();

						return _ref7(image);
				}

				/**
    * Create Sprite and Append @method
    * @param name - File Name
    * @param file - Zip file to look in
    */

		}, {
				key: 'SpriteAppendZip',
				value: function SpriteAppendZip(name, file) {
						function _ref8(_id8) {
								if (!(_id8 instanceof Object)) {
										throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id8));
								}

								return _id8;
						}

						if (!(typeof name === 'string')) {
								throw new TypeError('Value of argument "name" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(name));
						}

						if (!(typeof file === 'string')) {
								throw new TypeError('Value of argument "file" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(file));
						}

						// KEEP let image;

						var image = (this.img = this.SpriteCreate(file, file, name)).getFromZip();

						return _ref8(image);
				}

				/**
    * Unloads an image _WIP
    * @param name - File Name
    */

		}, {
				key: 'SpriteUnload',
				value: function SpriteUnload(name) {
						if (!(typeof name === 'string')) {
								throw new TypeError('Value of argument "name" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(name));
						}
				}

				//To implement deleting the source file
				//delete this.Sources.getByName(name);

				/**
    * Loads an image from the web
    * @param name - internal file name.
    * @param address - http link.
    */

		}, {
				key: 'webLoad',
				value: function webLoad(name, address) {
						function _ref10(_id10) {
								if (!(_id10 instanceof Object)) {
										throw new TypeError('Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(_id10));
								}

								return _id10;
						}

						if (!(typeof name === 'string')) {
								throw new TypeError('Value of argument "name" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(name));
						}

						if (!(typeof address === 'string')) {
								throw new TypeError('Value of argument "address" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(address));
						}

						this.SpriteWebItems[name] = new Image();

						this.SpriteWebItems[name].src = address;

						return _ref10(this.SpriteWebItems[name]);
				}
		}, {
				key: 'getErrors',
				value: function getErrors() {

						return this.SpriteLoadErrors;
				}
		}, {
				key: 'getImage',
				value: function getImage(name) {

						return this.Sources.getByName(name);
				}
		}]);

		return Graphics;
}(Library);

/* harmony default export */ exports["a"] = Graphics;

function _inspect(input, depth) {
		var maxDepth = 4;
		var maxKeys = 15;

		if (depth === undefined) {
				depth = 0;
		}

		depth += 1;

		if (input === null) {
				return 'null';
		} else if (input === undefined) {
				return 'void';
		} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
				return typeof input === 'undefined' ? 'undefined' : _typeof(input);
		} else if (Array.isArray(input)) {
				if (input.length > 0) {
						var _ret2 = function () {
								if (depth > maxDepth) return {
												v: '[...]'
										};

								var first = _inspect(input[0], depth);

								if (input.every(function (item) {
										return _inspect(item, depth) === first;
								})) {
										return {
												v: first.trim() + '[]'
										};
								} else {
										return {
												v: '[' + input.slice(0, maxKeys).map(function (item) {
														return _inspect(item, depth);
												}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
										};
								}
						}();

						if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
				} else {
						return 'Array';
				}
		} else {
				var keys = Object.keys(input);

				if (!keys.length) {
						if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
								return input.constructor.name;
						} else {
								return 'Object';
						}
				}

				if (depth > maxDepth) return '{...}';
				var indent = '  '.repeat(depth - 1);
				var entries = keys.slice(0, maxKeys).map(function (key) {
						return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
				}).join('\n  ' + indent);

				if (keys.length >= maxKeys) {
						entries += '\n  ' + indent + '...';
				}

				if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
						return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
				} else {
						return '{\n  ' + indent + entries + '\n' + indent + '}';
				}
		}
}

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_interfaces_ITypes__ = __webpack_require__(5);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var ICursor = __WEBPACK_IMPORTED_MODULE_0__core_interfaces_ITypes__["s" /* ICursor */];

var Cursor = function () {

	//Properties
	function Cursor(url) {
		_classCallCheck(this, Cursor);

		this.current = "auto";
		this.last = "auto";
		this.changed = false;
		this.count = 0;
		this.lock = 0;
		this.delay = 4;

		if (!(typeof url === 'string' || url == null)) {
			throw new TypeError("Value of argument \"url\" violates contract.\n\nExpected:\nstring | void\n\nGot:\n" + _inspect(url));
		}

		return this;
		/*
  		this.set(this.wait);
  		this.app.ext.cursor = this;*/
	}

	/*
 *
 */

	_createClass(Cursor, [{
		key: "set",
		value: function set() {}

		/*
  	set(cursor,lock) {
  
  			if	((this.last==cursor)||(this.lock))
  				return;
  
  			this.last = this.current;
  
  			this.current = cursor;
  
  			/*
  			if (this.app.options.target.buffer)
  				this.app.canvas.buffer.style.cursor=this.current;
  				this.app.canvas.canvas.style.cursor=this.current;
  
  			document.body.style.cursor=this.current;
  			*/
		/*
  this.changed = true;
  this.count++;
  }
  */

	}]);

	return Cursor;
}();

Cursor.Types = {

	//Cached cursor types
	auto: "auto",
	inherit: "inherit",
	crosshair: "crosshair",
	def: "default",
	help: "help",
	move: "move",
	pointer: "pointer",
	progress: "progress",
	text: "text",
	wait: "wait",
	eresize: "e-resize",
	neresize: "ne-resize",
	nwresize: "nw-resize",
	nresize: "n-resize",
	seresize: "se-resize",
	swresize: "sw-resize",
	sresize: "s-resize",
	wresize: "w-resize"

};
/* harmony default export */ exports["a"] = Cursor;


window.Cursor = Cursor;

function _inspect(input, depth) {
	var maxDepth = 4;
	var maxKeys = 15;

	if (depth === undefined) {
		depth = 0;
	}

	depth += 1;

	if (input === null) {
		return 'null';
	} else if (input === undefined) {
		return 'void';
	} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
		return typeof input === "undefined" ? "undefined" : _typeof(input);
	} else if (Array.isArray(input)) {
		if (input.length > 0) {
			var _ret = function () {
				if (depth > maxDepth) return {
						v: '[...]'
					};

				var first = _inspect(input[0], depth);

				if (input.every(function (item) {
					return _inspect(item, depth) === first;
				})) {
					return {
						v: first.trim() + '[]'
					};
				} else {
					return {
						v: '[' + input.slice(0, maxKeys).map(function (item) {
							return _inspect(item, depth);
						}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
					};
				}
			}();

			if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
		} else {
			return 'Array';
		}
	} else {
		var keys = Object.keys(input);

		if (!keys.length) {
			if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
				return input.constructor.name;
			} else {
				return 'Object';
			}
		}

		if (depth > maxDepth) return '{...}';
		var indent = '  '.repeat(depth - 1);
		var entries = keys.slice(0, maxKeys).map(function (key) {
			return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
		}).join('\n  ' + indent);

		if (keys.length >= maxKeys) {
			entries += '\n  ' + indent + '...';
		}

		if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
			return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
		} else {
			return '{\n  ' + indent + entries + '\n' + indent + '}';
		}
	}
}

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

window.position = { x: 0, y: 0 };
window.vel = { x: 0, y: 0 };
window.addEventListener("gamepadconnected", function (e) {
	console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.", e.gamepad.index, e.gamepad.id, e.gamepad.buttons.length, e.gamepad.axes.length);
});
function buttonPressed(b) {
	if ((typeof b === "undefined" ? "undefined" : _typeof(b)) == "object") {
		return b.pressed;
	}
	return b == 1.0;
}

/* harmony default export */ exports["a"] = function () {

	var gamepads = navigator.getGamepads ? navigator.getGamepads() : navigator.webkitGetGamepads ? navigator.webkitGetGamepads : [];
	if (!gamepads) {
		return;
	}

	var gp = gamepads[0];

	var trigger_left = false;
	var left = false;
	var right = false;
	var up = false;
	var down = false;
	var a = false;
	var y = false;
	var x = false;
	var b = false;
	if (gp) for (var i = gp.buttons.length; i > 0; i--) {

		if (buttonPressed(gp.buttons[i])) {

			//console.log(i,gp.buttons[i]);
			/*
   if (new Date().getTime()%2 == 0){
   xhttp.onreadystatechange = function() {
     if (xhttp.readyState == 4 && xhttp.status == 200) {
   	//window.position.x = Math.round(xhttp.responseText) + 25;
   	eval(xhttp.responseText);
     }
   };
   var request = "file.php?x="+Math.round(this.position.x);
   request += "&y=" + Math.round(this.position.y);
   request += "&velx=" + Math.round(this.vel.x);
   request += "&vely=" + Math.round(this.vel.y);
   xhttp.open("GET", request, true);
   xhttp.send();
   	}*/

			switch (i) {

				case 1:
					a = true;
					break;
				case 2:
					y = true;
					break;
				case 3:
					x = true;
					break;
				case 6:
					b = true;
					break;

				case 4:
					trigger_left = true;
					break;

				case 14:
					left = true;
					break;
				case 15:
					right = true;
					break;
				case 12:
					up = true;
					break;
				case 13:
					down = true;
					break;

			}
		}
	}
	return {
		gp: gp,
		trigger_left: trigger_left,
		left: left,
		right: right,
		up: up,
		down: down,
		a: a,
		y: y,
		x: x,
		b: b
	};

	/*
 if (buttonPressed(gp.buttons[0])) {
   console.log(gp.buttons[0]);
 } else if (buttonPressed(gp.buttons[2])) {
   console.log(gp.buttons[2]);
 }
 if (buttonPressed(gp.buttons[1])) {
   console.log(gp.buttons[1]);
 } else if (buttonPressed(gp.buttons[3])) {
   console.log(gp.buttons[3]);
   console.log(gp);
 }
 
 if (buttonPressed(gp.axes[0])) {
   console.log(gp.axes[0]);
 } else if (buttonPressed(gp.axes[2])) {
   console.log(gp.axes[2]);
 }
 if (buttonPressed(gp.axes[1])) {
   console.log(gp.axes[1]);
 } else if (buttonPressed(gp.axes[3])) {
   console.log(gp.axes[3]);
 
 }
 
 */
};

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gamepad__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__inputcontroller_js__ = __webpack_require__(127);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/**
* Main game controller. Handles instanciating instances and tracking information.
* @access private
* @module
*
*/

var Input = function (_inputcontroller) {
    _inherits(Input, _inputcontroller);

    function Input(app, pointerPoint) {
        _classCallCheck(this, Input);

        var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, app));

        _this.delay = 0;

        _this.touch = false;

        _this.touch_dist = { x: 0, y: 0 };

        _this.key = false;

        _this.keyPower = 0;

        _this.keyup = false;

        _this.keydown = false;

        _this.codes = [];

        _this.codeList = [];

        _this.control = false;

        _this.confine = false;

        _this.preventNext = true;

        _this.init_options();

        _this.keyController.init(_this.app);

        _this.down = new _this.constructor._Listener("pointerdown", "MSPointerDown", "mousedown", "touchstart", _this.app.window, _this.pointerdown);

        _this.up = new _this.constructor._Listener("pointerup", "MSPointerUp", "mouseup", "touchmove", _this.app.window, _this.pointerup);

        _this.move = new _this.constructor._Listener("pointermove", "MSPointerMove", "mousemove", "touchend", _this.app.window, _this.pointermove);

        _this.scrollController = _this.app.Construct(_this.scrollController.prototype, _this.scrollController.constructor).init();

        _this.pointerPoint = pointerPoint; //this.support(pointerPoint);

        _this.setup_universalMultitouch();

        _this.setup_documentListeners();

        //this.setup_msUniversalAppTouch();

        return _this;
    }

    /* Too refractor this below code into the input ? /**/

    /** Artificial click CASE 1	_ WIP
    * @method
       * @param {Event} [event] - Passing of the event.
       * @param {Element} [anchorObj] - Element to click. */

    _createClass(Input, [{
        key: 'click',
        value: function click(event, anchorObj) {
            if (!(event instanceof object)) {
                throw new TypeError('Value of argument "event" violates contract.\n\nExpected:\nobject\n\nGot:\n' + _inspect(event));
            }

            if (!(anchorObj instanceof object)) {
                throw new TypeError('Value of argument "anchorObj" violates contract.\n\nExpected:\nobject\n\nGot:\n' + _inspect(anchorObj));
            }
        }

        /** Artificial Click CASE 2	_ WIP
        * @method
           * @param {Event} [event] - Passing of the event.
           * @param {Element} [anchorObj] - Element to click.	*/

    }, {
        key: 'Click',
        value: function Click(event, anchorObj) {
            if (!(event instanceof object || event == null)) {
                throw new TypeError('Value of argument "event" violates contract.\n\nExpected:\nobject | null\n\nGot:\n' + _inspect(event));
            }

            if (!(anchorObj instanceof object || anchorObj == null)) {
                throw new TypeError('Value of argument "anchorObj" violates contract.\n\nExpected:\nobject | null\n\nGot:\n' + _inspect(anchorObj));
            }

            console.log(this.document);
            if (typeof anchorObj != 'undefined') if (anchorObj.click) {

                anchorObj.click();
            } else if (document.createEvent) {

                console.log(this.document);
                if (event.target !== anchorObj) {
                    var evt = document.createEvent("MouseEvents");

                    evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

                    anchorObj.dispatchEvent(evt);
                }
            }
        }
    }, {
        key: 'preventDefault',
        value: function preventDefault(e) {
            e.preventDefault();return e.target.app;
        }
    }, {
        key: 'preventNextInput',
        value: function preventNextInput() {
            return this.preventNext = true;
        }
    }, {
        key: 'confineMouse',
        value: function confineMouse() {

            return this.confine ? (this.y < this.app.client.visuals.fixY(0) ? (this.app.window.y = 0, this.app.window.inside -= 1) : this.y > this.app.client.visuals.fixY(this.app.client.setHeight) ? (this.app.window.y = this.app.client.visuals.fixW(this.app.client.setHeight), this.app.window.inside += 1) : this.app.window.y = -this.app.client.visuals.fixY(0) + this.y, this.x < this.app.client.visuals.fixX(0) ? (this.app.window.x = 0, this.app.window.inside -= 1) : this.x > this.app.client.visuals.fixX(this.app.client.setWidth) ? (this.app.window.x = this.app.client.visuals.fixW(this.app.client.setWidth), this.app.window.inside += 1) : this.app.window.x = -this.app.client.visuals.fixX(0) + this.x) : (this.y < this.app.client.visuals.fixY(0) ? this.app.window.y = -this.app.client.visuals.fixY(0) + this.y : this.y > this.app.client.visuals.fixY(this.app.client.setHeight) ? this.app.window.y = -this.app.client.visuals.fixY(0) + this.y : this.app.window.y = -this.app.client.visuals.fixY(0) + this.y, this.x < this.app.client.visuals.fixX(0) ? this.app.window.x = -this.app.client.visuals.fixX(0) + this.x : this.x > this.app.client.visuals.fixX(this.app.client.setWidth) ? this.app.window.x = -this.app.client.visuals.fixX(0) + this.x : this.app.window.x = -this.app.client.visuals.fixX(0) + this.x);
        }
    }, {
        key: 'init_options',
        value: function init_options() {

            //Temporary Disabled due to ClosureCompilerPlugin
            //return;

            /*	Overrides the selection start event for selecting events	*/

            if (!this.app.options.get("override").SelectStart) {
                this.app.Listener(this.app.canvas.canvas, 'selectstart', this.preventDefault);
            }

            /*	Overrides the 'holdtouch, MSHoldVisual' event */

            if (!this.app.options.get("override").MSHoldVisual) {
                this.app.Listener(this.app.canvas.canvas, 'MSHoldVisual', this.preventDefault);
            }

            /* Overrides the ContextMenu event */

            if (this.app.options.get("override").ContextMenu) {
                this.app.document.oncontextmenu = this.preventDefault;
                this.app.window.self.oncontextmenu = this.preventDefault;
            }

            /*	Overrides dragstart event		*/

            if (this.app.options.get("override").Drag) {
                this.app.document.ondragstart = this.preventDefault;
                this.app.window.self.ondragstart = this.preventDefault;
            }

            /*	CSS based Overrides
                     - mstouch
                    - seamless ( toggles overflow )
                    - tight ( zeros padding and margin )
             */

            if (this.app.options.get("flags").mstouch) {
                this.app.document.body.setAttribute("style", "-ms-touch-action: none; ms-content-zooming: none; touch-action: none; -ms-overflow-style: none;");
            }

            if (this.app.options.get("flags").seamless) {
                this.app.document.body.style.overflow = "hidden";
            }

            if (this.app.options.get("flags").tight) {
                this.app.document.body.style.padding = "0px", this.app.document.body.style.margin = "0px auto";
            }
        }
    }, {
        key: 'update',
        value: function update() {

            this.confineMouse();
            this.gamepads = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gamepad__["a" /* default */])();

            //Reset variables
            this.press = false;
            this.touch = 0;
            this.app.window.inside = 0;
            this.wheelDelta = 0;

            this.pressed ? this.duration++ : this.duration = 0;

            this.released ? (this.released = false, this.dist.x = 0, this.dist.y = 0) : null;

            //this.setup_msUniversalAppTouch();

            if (this.delay > 0) {

                this.delay -= Math.floor(this.delay - 1 * this.app.getDelta());
            }

            //reset code released, unused?
            this.codereleased = 0;

            return true;
        }
    }, {
        key: 'setup_documentListeners',
        value: function setup_documentListeners() {

            var doc = document;
            var win = window;

            doc.addEventListener("mousedown", function () {
                window.focus();
            }, true);
            doc.addEventListener("touchstart", function () {
                window.focus();
            }, true);

            // Inform all plugins and behaviors of blur events so they can reset any keyboard key flags
            win.addEventListener("blur", function () {
                self.onWindowBlur();
            });

            win.onWindowBlur = function (evt) {

                console.log('blur');
                SJS.controller.list().input.pointerup(evt);
            };

            win.setSuspended = function (state) {

                if (state) console.log('suspended');else console.log('resume');
            };

            // Pause and resume on page becoming visible/invisible
            function onVisibilityChanged() {
                if (document.hidden || document.mozHidden || document.webkitHidden || document.msHidden) setSuspended(true);else setSuspended(false);
            };

            doc.addEventListener("visibilitychange", onVisibilityChanged, false);
            doc.addEventListener("mozvisibilitychange", onVisibilityChanged, false);
            doc.addEventListener("webkitvisibilitychange", onVisibilityChanged, false);
            doc.addEventListener("msvisibilitychange", onVisibilityChanged, false);
        }
    }, {
        key: 'setup_universalMultitouch',
        value: function setup_universalMultitouch() {

            //touch-action: none;

            if (window.PointerEvent) {
                // Pointer events are supported.

                // Test for touch capable hardware
                if (navigator.maxTouchPoints) {}

                // Test for multi-touch capable hardware
                if (navigator.maxTouchPoints && navigator.maxTouchPoints > 1) {}

                // Check the maximum number of touch points the hardware supports
                //var touchPoints = navigator.maxTouchPoints;
            }

            this.multi = {

                list: []

            };

            this.touched = {

                count: 0,
                uplist: [],
                downlist: [],
                last: { x: 0, y: 0 },
                CheckTouchUp: function CheckTouchUp() {

                    return this.uplist[this.uplist.length - 1];
                },
                CheckTouchDown: function CheckTouchDown() {}

            };
        }
    }, {
        key: 'setup_msUniversalAppTouch',
        value: function setup_msUniversalAppTouch() {

            return;

            var i = 0;

            var data = {
                app: this.app,
                x: 0,
                y: 0
            };

            if (this.pressed === false && this.lastpressed === true) {
                this.released = true, this.dist.x = 0, this.dist.y = 0;

                this.controls.up(data);
            }

            this.lastpressed = this.pressed;
            /*
                    if (!this.wininitalize)
                    try {
            
                        //var w = Windows;
                        //var p = Windows.UI.Input.PointerPoint.getCurrentPoint(1);
            
            
                        this.pressed = (Windows.UI.Input.PointerPoint.getCurrentPoint(1).isInContact);
                        this.pointerDevice = (Windows.UI.Input.PointerPoint.getCurrentPoint(1).pointerDevice);
                        this.wininitalize = true;
            
            
                        data = {
                            app:this.app,
                            x:this.winposition.x,
                            y:this.winposition.y
                        };
            
                    }catch(e){
            
                        data = {
                            app:this.app,
                            x:0,
                            y:0
                        };
            
                    }
                    else{
                        this.winpoint = Windows.UI.Input.PointerPoint.getCurrentPoint(1);
                        this.winposition = this.pointerPoint.getCurrentPoint(1).rawPosition;
                        this.pressed = (this.winpoint.isInContact);
                        this.pointerDevice = (this.winpoint.pointerDevice);
            
                        var pt = this.pointerPoint.getCurrentPoint(1);
                        var ptTargetProperties = pt.properties;
            
            
                                if (this.released)
                                                    {
            
                                                                var details = "Pointer Id: " + pt.pointerId + " device: " + pt.pointerDevice.pointerDeviceType;
            
                                                                switch (pt.pointerDevice.pointerDeviceType) {
                                                                    case "mouse":
                                                                    case 2:
                                                                        details += "\nPointer type: mouse";
                                                                        details += "\nLeft button: " + ptTargetProperties.isLeftButtonPressed;
                                                                        details += "\nRight button: " + ptTargetProperties.isRightButtonPressed;
                                                                        details += "\nWheel button: " + ptTargetProperties.isMiddleButtonPressed;
                                                                        details += "\nX1 button: " + ptTargetProperties.isXButton1Pressed;
                                                                        details += "\nX2 button: " + ptTargetProperties.isXButton2Pressed;
                                                                        break;
                                                                    case "pen":
                                                                        details += "\nPointer type: pen";
                                                                        if (pt.isInContact) {
                                                                            details += "\nPressure: " + ptTargetProperties.pressure;
                                                                            details += "\nrotation: " + ptTargetProperties.rotation;
                                                                            details += "\nTilt X: " + ptTargetProperties.tiltX;
                                                                            details += "\nTilt Y: " + ptTargetProperties.tiltY;
                                                                            details += "\nBarrel button pressed: " + ptTargetProperties.isBarrelButtonPressed;
                                                                        }
                                                                        break;
                                                                    case "touch":
                                                                        details += "\nPointer type: touch";
                                                                        details += "\nPressure: " + ptTargetProperties.pressure;
                                                                        details += "\nrotation: " + ptTargetProperties.rotation;
                                                                        details += "\nTilt X: " + ptTargetProperties.tiltX;
                                                                        details += "\nTilt Y: " + ptTargetProperties.tiltY;
                                                                        break;
                                                                    default:
                                                                        details += "\nPointer type: " + "n/a";
                                                                        break;
                                                                }
                                                        details+="\n x:"+this.winposition.x + " y: "+this.winposition.y;
                                                               //details += "\nPointer location (target): " + pt.offsetX + ", " + pt.offsetY;
                                                               //details += "\nPointer location (screen): " + pt.screenX + ", " + pt.screenY;
                                                        //console.log(pt.pointerDevice);
                                                        //console.log(details);
                                                    }
                                                    i=this.winpoint;
            
                        data.x = this.winposition.x;
                        data.y = this.winposition.y;
            
            
                    if ((this.pressed===true)&&(this.lastpressed===true))
                        this.controls.move(data);
            
                    }*/

            if (this.pressed === true && this.lastpressed === false) this.controls.down(data);

            // console.log(i)
            //  if (Windows)
            //  if (Windows.UI.Input.PointerPoint.getCurrentPoint(1).isInContact)
            //  this.pressed = (Windows.UI.Input.PointerPoint.getCurrentPoint(1).isInContact);

        }
    }]);

    return Input;
}(__WEBPACK_IMPORTED_MODULE_1__inputcontroller_js__["a" /* default */]);

/* harmony default export */ exports["a"] = Input;

function _inspect(input, depth) {
    var maxDepth = 4;
    var maxKeys = 15;

    if (depth === undefined) {
        depth = 0;
    }

    depth += 1;

    if (input === null) {
        return 'null';
    } else if (input === undefined) {
        return 'void';
    } else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
        return typeof input === 'undefined' ? 'undefined' : _typeof(input);
    } else if (Array.isArray(input)) {
        if (input.length > 0) {
            var _ret = function () {
                if (depth > maxDepth) return {
                        v: '[...]'
                    };

                var first = _inspect(input[0], depth);

                if (input.every(function (item) {
                    return _inspect(item, depth) === first;
                })) {
                    return {
                        v: first.trim() + '[]'
                    };
                } else {
                    return {
                        v: '[' + input.slice(0, maxKeys).map(function (item) {
                            return _inspect(item, depth);
                        }).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
                    };
                }
            }();

            if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
        } else {
            return 'Array';
        }
    } else {
        var keys = Object.keys(input);

        if (!keys.length) {
            if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
                return input.constructor.name;
            } else {
                return 'Object';
            }
        }

        if (depth > maxDepth) return '{...}';
        var indent = '  '.repeat(depth - 1);
        var entries = keys.slice(0, maxKeys).map(function (key) {
            return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
        }).join('\n  ' + indent);

        if (keys.length >= maxKeys) {
            entries += '\n  ' + indent + '...';
        }

        if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
            return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
        } else {
            return '{\n  ' + indent + entries + '\n' + indent + '}';
        }
    }
}

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_math_vector__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_sjs__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inputlistener_js__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inputkeycontroller_js__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inputscrollcontroller_js__ = __webpack_require__(130);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











/**
* Stores input data
* @access private
* @module
*
*/

var inputcontroller = function (_SJSClass) {
    _inherits(inputcontroller, _SJSClass);

    function inputcontroller() {
        _classCallCheck(this, inputcontroller);

        return _possibleConstructorReturn(this, (inputcontroller.__proto__ || Object.getPrototypeOf(inputcontroller)).apply(this, arguments));
    }

    _createClass(inputcontroller, [{
        key: 'pointerup',
        value: function pointerup(evt) {

            if (typeof evt === 'undefined') return;
            if (typeof evt.target.app === 'undefined') return;

            var target = evt.target.app.input.constructor;

            target._pointerup(evt);
        }
    }, {
        key: 'pointermove',
        value: function pointermove(evt) {

            if (typeof evt === 'undefined') return;
            if (typeof evt.target.app === 'undefined') return;

            var target = evt.target.app.input.constructor;

            target._pointermove(evt);
        }
    }, {
        key: 'pointerdown',
        value: function pointerdown(evt) {

            if (typeof evt === 'undefined') return;
            if (typeof evt.target.app === 'undefined') return;

            var target = evt.target.app.input.constructor;

            target._pointerdown(evt);
        }
    }, {
        key: 'x',
        get: function get() {

            return this.constructor._x;
        },
        set: function set(value) {

            this.constructor._x = value;
        }
    }, {
        key: 'y',
        get: function get() {

            return this.constructor._y;
        },
        set: function set(value) {

            this.constructor._y = value;
        }
    }, {
        key: 'last',
        get: function get() {

            return this.constructor._last;
        },
        set: function set(value) {

            this.constructor._last = value;
        }
    }, {
        key: 'pos',
        get: function get() {

            return this.constructor._pos;
        },
        set: function set(value) {

            this.constructor._pos = value;
        }
    }, {
        key: 'dist',
        get: function get() {

            return this.constructor._dist;
        },
        set: function set(value) {

            this.constructor._dist = value;
        }
    }, {
        key: 'end',
        get: function get() {

            return this.constructor._end;
        },
        set: function set(value) {

            this.constructor._end = value;
        }
    }, {
        key: 'start',
        get: function get() {

            return this.constructor._start;
        },
        set: function set(value) {

            this.constructor._start = value;
        }
    }, {
        key: 'duration',
        get: function get() {

            return this.constructor._duration;
        },
        set: function set(value) {

            this.constructor._duration = value;
        }
    }, {
        key: 'angle',
        get: function get() {

            return 57.2957795 * Math.atan2(this.end.y - this.start.y, this.end.x - this.start.x);
        }
    }, {
        key: 'angleDelta',
        get: function get() {

            var delta = (this.dist.x * this.dist.x + this.dist.y * this.dist.y) / 2;
            return delta;
        }
    }, {
        key: 'position',
        get: function get() {

            return new __WEBPACK_IMPORTED_MODULE_0__core_math_vector__["a" /* default */](this.x, this.y);
        },
        set: function set(value) {

            this.x = value.x;
            this.y = value.y;
        }
    }, {
        key: 'released',
        get: function get() {

            return this.constructor._released;
        },
        set: function set(value) {

            return this.constructor._released = value;
        }
    }, {
        key: 'pressed',
        get: function get() {

            return this.constructor._pressed;
        },
        set: function set(value) {

            return this.constructor._pressed = value;
        }
    }, {
        key: 'keyController',
        get: function get() {

            return this.constructor._keyController;
        },
        set: function set(value) {

            return this.constructor._keyController = value;
        }
    }, {
        key: 'scrollController',
        get: function get() {

            return this.constructor._scrollController;
        },
        set: function set(value) {

            return this.constructor._scrollController = value;
        }
    }, {
        key: 'horizontal',
        get: function get() {

            var wasd = this.app.input.keyController.keyboardCheck("a") - this.app.input.keyController.keyboardCheck("d");
            var arrows = this.app.input.keyController.keyboardCheck("leftarrow") - this.app.input.keyController.keyboardCheck("rightarrow");
            var mouse = -this.pressed * this.app.input.dist.x;
            var touch = -this.pressed * this.app.input.dist.x; //was touched

            var keyboard = this.app.client.Math.Clamp(wasd || arrows, -1, 1);
            var touched = this.app.client.Math.Clamp(mouse || touch, -1, 1);

            return { keyboard: keyboard, touch: touched };
        }
    }, {
        key: 'vertical',
        get: function get() {

            var wasd = this.app.input.keyController.keyboardCheck("s") - this.app.input.keyController.keyboardCheck("w");
            var arrows = this.app.input.keyController.keyboardCheck("downarrow") - this.app.input.keyController.keyboardCheck("uparrow");
            var mouse = this.pressed * this.app.input.dist.y;
            var touch = this.pressed * this.app.input.dist.y; //was touched

            var keyboard = this.app.client.Math.Clamp(wasd || arrows, -1, 1);
            var touched = this.app.client.Math.Clamp(mouse || touch, -1, 1);

            return { keyboard: keyboard, touch: touched };
        }
    }], [{
        key: '_pointerup',
        value: function _pointerup(evt) {

            var input = evt.target.app.input;

            var x = evt.x || evt.clientX || evt.pageX;

            var y = evt.y || evt.clientY || evt.pageY;

            input.last = input.end = new __WEBPACK_IMPORTED_MODULE_0__core_math_vector__["a" /* default */](x, y);

            input.pressed = false;

            input.released = true;

            return true;
        }
    }, {
        key: '_pointermove',
        value: function _pointermove(evt) {

            var input = evt.target.app.input;
            var x = Number(evt.x || evt.clientX || evt.pageX);
            var y = Number(evt.y || evt.clientY || evt.pageY);

            //var mouse_last = this.mouse_last;

            input.last = input.position = new __WEBPACK_IMPORTED_MODULE_0__core_math_vector__["a" /* default */](x, y);

            if (input.pressed) {

                var dx = (input.x - input.start.x) * evt.target.app.scale;
                var dy = (input.y - input.start.y) * evt.target.app.scale;
                input.dist = new __WEBPACK_IMPORTED_MODULE_0__core_math_vector__["a" /* default */](dx.toFixedNumber(2), dy.toFixedNumber(2));
            }

            if (input.dist.x > 0) if (this.mouse_last * 0.99 > input.dist.x) input.start.x = input.x, input.dist.x = 0;

            if (input.dist.x < 0) if (this.mouse_last * 0.99 < input.dist.x) input.start.x = input.x, input.dist.x = 0;

            this.mouse_last = input.dist.x;
        }
    }, {
        key: '_pointerdown',
        value: function _pointerdown(evt) {

            var input = evt.target.app.input;

            var x = Number(evt.x || evt.clientX || evt.pageX);

            var y = Number(evt.y || evt.clientY || evt.pageY);
            input.start = new __WEBPACK_IMPORTED_MODULE_0__core_math_vector__["a" /* default */](x, y);

            input.pressed = true;

            input.touch = true;

            input.touched.count++;

            input.touched.downlist.push(input.position);

            input.dist = new __WEBPACK_IMPORTED_MODULE_0__core_math_vector__["a" /* default */](0, 0);
        }
    }]);

    return inputcontroller;
}(__WEBPACK_IMPORTED_MODULE_1__core_sjs__["a" /* _SJSClass */]);

inputcontroller._x = 0;
inputcontroller._y = 0;
inputcontroller._last = new __WEBPACK_IMPORTED_MODULE_0__core_math_vector__["a" /* default */](0, 0);
inputcontroller._pos = new __WEBPACK_IMPORTED_MODULE_0__core_math_vector__["a" /* default */](0, 0);
inputcontroller._dist = new __WEBPACK_IMPORTED_MODULE_0__core_math_vector__["a" /* default */](0, 0);
inputcontroller._end = new __WEBPACK_IMPORTED_MODULE_0__core_math_vector__["a" /* default */](0, 0);
inputcontroller._start = new __WEBPACK_IMPORTED_MODULE_0__core_math_vector__["a" /* default */](0, 0);
inputcontroller._duration = 0;
inputcontroller._pressed = false;
inputcontroller._released = false;
inputcontroller._Listener = __WEBPACK_IMPORTED_MODULE_2__inputlistener_js__["a" /* default */];
inputcontroller._keyController = new __WEBPACK_IMPORTED_MODULE_3__inputkeycontroller_js__["a" /* default */]();
inputcontroller._scrollController = __WEBPACK_IMPORTED_MODULE_4__inputscrollcontroller_js__["a" /* default */];
/* harmony default export */ exports["a"] = inputcontroller;

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Stores key input data
* @access private
* @module
*
*/

var inputkeycontroller = function () {
    function inputkeycontroller() {
        _classCallCheck(this, inputkeycontroller);
    }

    _createClass(inputkeycontroller, [{
        key: "key_down",
        value: function key_down(evt) {

            evt.input.key = true;
            evt.input.kpressed = true;
        }
    }, {
        key: "key_up",
        value: function key_up(evt) {
            evt.input.key = false;
            evt.input.kpressed = false;
            evt.input.kreleased = true;
            evt.input.kpressed = false;
        }
    }, {
        key: "keyboardCheck",
        value: function keyboardCheck(code) {

            var e = this.codeList.length - 1;

            for (var i = e; i >= 0; --i) {
                if (this.codeList[i] == code) return true;
            }return false;
        }
    }, {
        key: "keyboardPop",
        value: function keyboardPop(code) {

            var e = this.codeList.length - 1;
            for (var i = e; i >= 0; --i) {
                if (this.codeList[i] == code) this.codeList.splice(i, 1);
            }
        }
    }, {
        key: "init",
        value: function init(app) {

            app.Listener(app.window.self, 'keydown', function (evt) {

                if (app.input.preventNext === true) evt.preventDefault();

                app.input.preventNext = false;

                app.input.keyController.codedown = app.input.keyController.keyCodes[evt.keyCode];
                app.input.keyController.codeList.push(app.input.keyController.codedown);

                if (evt.ctrlKey) app.input.control = true;

                //app.input.pressed = true;
                app.input.released = false;

                app.input.keyController.key_down(app);
            });

            app.Listener(app.window.self, 'keyup', function (evt) {

                if (app.input.preventNext) evt.preventDefault();

                app.input.preventNext = false;
                app.input.codeup = app.input.keyController.keyCodes[evt.keyCode];

                app.input.keyController.keyboardPop(app.input.codeup);

                app.input.control = false;
                app.input.pressed = false;
                app.input.released = true;
                app.input.true = true;

                app.input.keyController.key_up(app);
            });

            return this.codes;
        }
    }, {
        key: "codeList",
        get: function get() {

            return this.constructor._codeList;
        }
    }, {
        key: "keyCodes",
        get: function get() {

            return this.constructor._keyCodes;
        }
    }], [{
        key: "_keyCodes",
        get: function get() {

            this.codes = [], this.codes[0] = "", this.codes[1] = "", this.codes[2] = "", this.codes[3] = "", this.codes[4] = "", this.codes[5] = "", this.codes[6] = "", this.codes[7] = "", this.codes[8] = "backspace", this.codes[9] = "tab", this.codes[13] = "enter", this.codes[16] = "shift", this.codes[17] = "ctrl", this.codes[18] = "alt", this.codes[19] = "pause/break", this.codes[20] = "capslock", this.codes[27] = "escape", this.codes[32] = "space", this.codes[33] = "pageup", this.codes[34] = "pagedown", this.codes[35] = "end", this.codes[36] = "home", this.codes[37] = "leftarrow", this.codes[38] = "uparrow", this.codes[39] = "rightarrow", this.codes[40] = "downarrow", this.codes[45] = "insert", this.codes[46] = "delete", this.codes[48] = "0", this.codes[49] = "1", this.codes[50] = "2", this.codes[51] = "3", this.codes[52] = "4", this.codes[53] = "5", this.codes[54] = "6", this.codes[55] = "7", this.codes[56] = "8", this.codes[57] = "9", this.codes[65] = "a", this.codes[66] = "b", this.codes[67] = "c", this.codes[68] = "d", this.codes[69] = "e", this.codes[70] = "f", this.codes[71] = "g", this.codes[72] = "h", this.codes[73] = "i", this.codes[74] = "j", this.codes[75] = "k", this.codes[76] = "l", this.codes[77] = "m", this.codes[78] = "n", this.codes[79] = "o", this.codes[80] = "p", this.codes[81] = "q", this.codes[82] = "r", this.codes[83] = "s", this.codes[84] = "t", this.codes[85] = "u", this.codes[86] = "v", this.codes[87] = "w", this.codes[88] = "x", this.codes[89] = "y", this.codes[90] = "z", this.codes[91] = "leftwindowkey", this.codes[92] = "rightwindowkey", this.codes[93] = "selectkey", this.codes[96] = "numpad0", this.codes[97] = "numpad1", this.codes[98] = "numpad2", this.codes[99] = "numpad3", this.codes[100] = "numpad4", this.codes[101] = "numpad5", this.codes[102] = "numpad6", this.codes[103] = "numpad7", this.codes[104] = "numpad8", this.codes[105] = "numpad9", this.codes[106] = "multiply", this.codes[107] = "add", this.codes[109] = "subtract", this.codes[110] = "decimalpoint", this.codes[111] = "divide", this.codes[112] = "f1", this.codes[113] = "f2", this.codes[114] = "f3", this.codes[115] = "f4", this.codes[116] = "f5", this.codes[117] = "f6", this.codes[118] = "f7", this.codes[119] = "f8", this.codes[120] = "f9", this.codes[121] = "f10", this.codes[122] = "f11", this.codes[123] = "f12", this.codes[144] = "numlock", this.codes[145] = "scrolllock", this.codes[175] = "Up (Wii?)", this.codes[176] = "Down (Wii?)", this.codes[177] = "Left (Wii?)", this.codes[178] = "Right (Wii?)", this.codes[170] = "- (Wii?)", this.codes[174] = "+ (Wii?)", this.codes[172] = "1 (Wii?)", this.codes[173] = "2 (Wii?)", this.codes[186] = "semi-colon", this.codes[187] = "equalsign", this.codes[188] = "comma", this.codes[189] = "dash", this.codes[190] = "period", this.codes[191] = "forwardslash", this.codes[192] = "graveaccent", this.codes[219] = "openbracket", this.codes[220] = "backslash", this.codes[221] = "closebraket", this.codes[222] = "singlequote";

            return this.codes;
        }
    }]);

    return inputkeycontroller;
}();

inputkeycontroller._codeList = [];
/* harmony default export */ exports["a"] = inputkeycontroller;

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
*  Sets up input listeners.
* @access private
* @module
* @example
* SJSInputListener
*    [listener0,listener1,listener2,element,function]
*
*    let down = new SJSInputListener("pointerdown","MSPointerDown","mousedown",this.app.window,this.pointerdown);
*    let up = new SJSInputListener("pointerup","MSPointerUp","mouseup",this.app.window,this.pointerup);
*    let move = new SJSInputListener("pointermove","MSPointerMove","mousemove",this.app.window,this.pointermove);
*
*/

var InputListener = function () {
    function InputListener(a, b, c, d, elm, evt) {
        _classCallCheck(this, InputListener);

        this.elm = elm;

        if (window.PointerEvent) this.msPointer(a, evt);else if (window.MSPointerEvent) this.Pointer(b, evt);else this.mousePointer(c, evt);

        if ('ontouchstart' in window || navigator.maxTouchPoints) this.touchPointer(d, evt);
    }

    /**
    * @method Microsoft Pointers
    */

    _createClass(InputListener, [{
        key: 'msPointer',
        value: function msPointer(e, evt) {

            window.addEventListener(e, evt, false);
        }

        /**
        * @method Universal Pointers
        */

    }, {
        key: 'Pointer',
        value: function Pointer(e, evt) {

            window.addEventListener(e, evt, false);
        }

        /**
        * @method Touch Pointers
        */

    }, {
        key: 'touchPointer',
        value: function touchPointer(e, evt) {

            window.addEventListener(e, evt, false);
        }

        /**
        * @method Mouse Pointers
        */

    }, {
        key: 'mousePointer',
        value: function mousePointer(e, evt) {

            window.addEventListener(e, evt, false);
        }
    }]);

    return InputListener;
}();

/* harmony default export */ exports["a"] = InputListener;

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

/**
* Sets up smooth scrolling
* @access private
* @module
*
*/

var inputscrollcontroller = {

    prototype: {

        /* Cache */

        x: 0,
        y: 1,
        target: { x: 0, y: 0 },

        accel: 1,

        active: null,
        reverse: false,
        //    a:false,

        window: window,
        doc: document.documentElement,

        //ScrollWheel Event
        event: function event(evt, delta) {

            if (this.app.options.get("seamless")) this.app.input.scroll.a = true;

            if (this.app.options.get("seamless")) evt.preventDefault();

            //if (this.app.options.get("overridescroll")==false)
            return;

            /*
            this.app.input.wheelDelta = evt.wheelDelta;
             var doc = document.documentElement;
            var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
            var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
                 //Flip for horizontal scrolling
               if (this.reverse)
               {
                   this.app.input.scroll.target.x = left;
                   this.app.input.scroll.target.y = top-evt.wheelDelta;
                   this.app.input.scroll.x = left;
                   this.app.input.scroll.y = top-evt.wheelDelta;
               }
               else{
                   this.app.input.scroll.target.y = 0;
                   this.app.input.scroll.target.x = left-evt.wheelDelta;
                   this.app.input.scroll.y = 0;
                   this.app.input.scroll.x = left-evt.wheelDelta;
               }
              */
            //App.ext.scroll.active = false;$
        },

        up: function up() {

            var transitionSpeed = 1;

            if (this.target.x > this.x) this.x += this.app.client.Math.Clamp(Math.floor((this.target.x - this.x) * transitionSpeed), 1, 100), this.a = true;

            if (this.target.x < this.x) this.x -= this.app.client.Math.Clamp(Math.floor((this.x - this.target.x) * transitionSpeed), 1, 100), this.a = true;

            this.x = this.app.client.Math.Clamp(this.x, 0, window.innerWidth * 3);
            this.target.x = this.app.client.Math.Clamp(this.target.x, 0, window.innerWidth * 3);

            //if (this.a)
            //this.app.window.scrollTo(this.x,this.y),this.a = false;

            log(this.x, this.y);
        },

        //Update the position for smooth scrolling

        update: function update(x, y) {

            var left = (this.app.window.pageXOffset || this.app.document.scrollLeft) - (this.app.document.clientLeft || 0);
            var top = (this.app.window.pageYOffset || this.app.document.scrollTop) - (this.app.document.clientTop || 0);

            /* DEACTIVATE IF CONFUSED */
            if (!this.active) return;

            var LD = Math.round(-this.x + this.target.x) / 10;
            var YD = Math.round(-this.y + this.target.y) / 10;

            if (left < this.target.x) this.x += this.accel * LD;
            if (left > this.target.x) this.x += this.accel * LD;
            if (top < this.target.y) this.y += this.accel * YD;
            if (top > this.target.y) this.y += this.accel * YD;

            //	this.app.window.scrollTo(this.x,this.y);

            if (Math.round(this.x / 10) == Math.round(this.target.x / 10) && Math.round(this.y / 10) == Math.round(this.target.y / 10)) return false;

            return true;
        },

        //Set position,

        to: function to(x, y) {

            this.target.x = x;
            this.target.y = y;
        },
        gMaps: function gMaps() {

            var t = document.getElementById('maps');

            if (window.ScrollControl.elementInViewport(t)) {

                if (window.ScrollControl.mapInView == false) {
                    window.ScrollControl.mapInView = true;
                    var mapsHtml = "";
                    mapsHtml += "				<iframe style=\"float:left;border-radius: 7px;margin:0px auto;width:100%;\" height=\"200\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" src=\"https:\/\/maps.google.ca\/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Toronto,+ON,+Canada&amp;aq=0&amp;oq=Toronto+Cana&amp;sll=43.656877,-79.32085&amp;sspn=0.873329,2.113495&amp;ie=UTF8&amp;hq=&amp;hnear=Toronto,+Toronto+Division,+Ontario&amp;ll=43.653226,-79.383184&amp;spn=61.734526,135.263672&amp;t=m&amp;z=4&amp;output=embed\"><\/iframe>";
                    mapsHtml += "				<br>";
                    mapsHtml += "				<a href=\"https:\/\/maps.google.ca\/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Toronto,+ON,+Canada&amp;aq=0&amp;oq=Toronto+Cana&amp;sll=43.656877,-79.32085&amp;sspn=0.873329,2.113495&amp;ie=UTF8&amp;hq=&amp;hnear=Toronto,+Toronto+Division,+Ontario&amp;ll=43.653226,-79.383184&amp;spn=61.734526,135.263672&amp;t=m&amp;z=4\"><\/a>";
                    mapsHtml += "				<br>";
                    t.innerHTML = mapsHtml;
                }
            }
        },
        scroll: function scroll(e) {

            window.ScrollControl.gMaps();

            if (window.pageYOffset != undefined) {

                this.x = pageXOffset;
                this.y = pageYOffset;

                return [pageXOffset, pageYOffset];
            } else {

                var sx = undefined,
                    sy = undefined,
                    d = document,
                    r = d.documentElement,
                    b = d.body;
                sx = r.scrollLeft || b.scrollLeft || 0;

                sy = r.scrollTop || b.scrollTop || 0;

                this.x = sx;
                this.y = sy;

                return [sx, sy];
            }
        }

    },

    constructor: function constructor(a) {
        return {
            app: { value: a },
            init: { value: function value() {
                    this.to(0, 0);
                    return this;
                }
            }
        };
    }

};

/* harmony default export */ exports["a"] = inputscrollcontroller;

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_sjs__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__test_js__ = __webpack_require__(136);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





window.test = __WEBPACK_IMPORTED_MODULE_1__test_js__["a" /* default */];

var _loader = function (_SJSClass) {
	_inherits(_loader, _SJSClass);

	function _loader(app) {
		_classCallCheck(this, _loader);

		var _this = _possibleConstructorReturn(this, (_loader.__proto__ || Object.getPrototypeOf(_loader)).call(this, app));

		_this.ImageCache = [];
		_this.ImageMap = new Map();

		var self = _this;
		_this.ImageCache.push = function () {

			var A = Array.prototype.push.apply(this, arguments);

			self.ImageMap = self.ImageCache.map(function (a) {
				return a.name;
			});

			return A;
		};

		_this.ImageBuffer = [];

		_this.ImageBufferTime = 3;
		_this.asyncLoadCacheIndex = 0;

		window.Loader = _this;

		return _this;
	}

	_createClass(_loader, [{
		key: 'checkLoaded',
		value: function checkLoaded(name) {
			var _this2 = this;

			if (!this.getImageReference(name).complete) {

				setTimeout(function () {

					_this2.checkLoaded(name);
				}, this.ImageBufferTime);
			} else {

				this.ImageBuffer.splice(this.ImageBuffer.indexOf(name));
			}

			return this.getImageReference(name);
		}
	}, {
		key: 'getBufferLength',
		value: function getBufferLength() {

			return this.ImageBuffer.length;
		}
	}, {
		key: 'getImageReference',
		value: function getImageReference(string) {

			return this.ImageCache[this.ImageMap.indexOf(string)];
		}
	}, {
		key: 'loadImage',
		value: function loadImage(string) {
			var _this3 = this;

			var name = string;

			var img = this.graphics.load(string);

			var cacheIndex = this.ImageCache.push(img);

			img.string = name;

			this.ImageBuffer.push(name);

			setTimeout(function () {

				_this3.checkLoaded(name);
			}, this.ImageBufferTime + 0.1 * this.ImageBuffer.length);

			return this.ImageCache[cacheIndex - 1];
		}
	}, {
		key: 'getBase64Image',
		value: function getBase64Image(img) {

			// Create an empty canvas element
			var canvas = document.createElement("canvas");
			canvas.width = img.width;
			canvas.height = img.height;

			// Copy the image contents to the canvas
			var ctx = canvas.getContext("2d");
			ctx.drawImage(img, 0, 0);

			// Get the data-URL formatted image
			// Firefox supports PNG and JPEG. You could check img.src to
			// guess the original format, but be aware the using "image/jpg"
			// will re-encode the image.
			var dataURL = canvas.toDataURL("image/png");

			return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
		}
	}, {
		key: 'createImageData',
		value: function createImageData(img) {

			// Create an empty canvas element
			var canvas = document.createElement("canvas");
			var ctx = canvas.getContext("2d");

			canvas.width = img.width;
			canvas.height = img.height;
			canvas.style.background = 'transparent';
			canvas.background = 'transparent';

			var canvas2 = this.app.canvas.buffer.getContext('2d');
			//var canvas2_data = canvas2.getImageData(0,0,img.width,img.height);
			var canvas2_data = canvas2.getImageData(0, 0, 100, 100);

			//var canvas2_img = new Image();
			//canvas2_img.src = canvas2_data;

			var img = document.createElement("img");
			img.src = this.app.canvas.canvas.toDataURL("image/png");

			// Copy the image contents to the canvas
			//this.visuals.putData(canvas2_data,0,0);


			//var newData = canvas2.getImageData(0,0,img.width,img.height);

			//ctx.putImageData(canvas2_data,0,0);

			ctx.drawImage(img, 0, 0);
			//ctx.drawImage(canvas2_img, 0, 0);

			var newData2 = ctx.getImageData(0, 0, img.width, img.height);

			return newData2;
		}
	}, {
		key: 'asyncLoadImage',
		value: function () {
			var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(string, suffex) {
				var _this4 = this;

				var name, img, cacheIndex;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								name = string;
								_context.next = 3;
								return this.app.client.graphics.load(name);

							case 3:
								img = _context.sent;


								img.string = name;

								_context.next = 7;
								return this.ImageCache.push(img);

							case 7:
								cacheIndex = _context.sent;
								_context.next = 10;
								return this.ImageBuffer.push(name + suffex);

							case 10:
								_context.next = 12;
								return setTimeout(function () {

									var _img = _this4.checkLoaded(name);

									//_img.base64 = this.getBase64Image(_img);
									//_img.imgdata = this.createImageData(_img);


									_this4.ImageCache[cacheIndex - 1] = _img;

									//console.log(this.getBase64Image(_img))
									//			console.log(this.ImageCache[cacheIndex - 1] );
									//this.ImageCache[cacheIndex - 1].src = this.getBase64Image(this.checkLoaded(name));

									//console.log(this.ImageCache[cacheIndex-1])
								}, this.ImageBufferTime + 0.1 * this.ImageBuffer.length);

							case 12:
								this.asyncLoadCacheIndex = cacheIndex;

								return _context.abrupt('return', this.ImageCache[cacheIndex - 1]);

							case 14:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			return function asyncLoadImage(_x, _x2) {
				return ref.apply(this, arguments);
			};
		}()
	}, {
		key: 'asyncLoadZipImage',
		value: function () {
			var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(string, suffex) {
				var _this5 = this;

				var name, img, cacheIndex;
				return regeneratorRuntime.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								name = string;
								_context2.next = 3;
								return this.graphics.loadFromZip(name);

							case 3:
								img = _context2.sent;


								img.string = name;

								_context2.next = 7;
								return this.ImageCache.push(img);

							case 7:
								cacheIndex = _context2.sent;
								_context2.next = 10;
								return this.ImageBuffer.push(name + suffex);

							case 10:
								_context2.next = 12;
								return setTimeout(function () {

									var _img = _this5.checkLoaded(name);

									//_img.base64 = this.getBase64Image(_img);
									//_img.imgdata = this.createImageData(_img);


									_this5.ImageCache[cacheIndex - 1] = _img;

									//console.log(this.getBase64Image(_img))
									//			console.log(this.ImageCache[cacheIndex - 1] );
									//this.ImageCache[cacheIndex - 1].src = this.getBase64Image(this.checkLoaded(name));

									//console.log(this.ImageCache[cacheIndex-1])
								}, this.ImageBufferTime + 0.1 * this.ImageBuffer.length);

							case 12:
								this.asyncLoadCacheIndex = cacheIndex;

								return _context2.abrupt('return', this.ImageCache[cacheIndex - 1]);

							case 14:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			return function asyncLoadZipImage(_x3, _x4) {
				return ref.apply(this, arguments);
			};
		}()
	}, {
		key: 'asyncLoadImageData',
		value: function () {
			var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(string, string2, x, y) {
				var _this6 = this;

				var _index, _image;

				return regeneratorRuntime.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								_index = this.asyncLoadCacheIndex;
								_context3.next = 3;
								return this.asyncLoadImage(string, "_blit").then(function (img) {

									//let _cacheIndex =  this.ImageCache.push(img);

									//console.log( this.ImageCache[_cacheIndex-1]=img)

									var buffindex = _this6.ImageBuffer.push(string + "_blit");

									_this6[string2] = img;
									_this6[string2].addEventListener('load', function () {

										_this6[string2] = _this6.visuals.blit(_this6[string2], x, y);

										_this6[string2].string = string2;

										_this6.ImageCache.push(_this6[string2]);

										_this6.ImageBuffer.splice(_this6.ImageBuffer.indexOf(string + "_blit2"), 1);
									});
								});

							case 3:
								_image = _context3.sent;
								return _context3.abrupt('return', _image);

							case 5:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, this);
			}));

			return function asyncLoadImageData(_x5, _x6, _x7, _x8) {
				return ref.apply(this, arguments);
			};
		}()
	}, {
		key: 'asyncLoadImageDataFromZip',
		value: function () {
			var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(string, string2, x, y) {
				var _index, _image;

				return regeneratorRuntime.wrap(function _callee4$(_context4) {
					while (1) {
						switch (_context4.prev = _context4.next) {
							case 0:
								_index = this.asyncLoadCacheIndex;
								_context4.next = 3;
								return this.asyncLoadZipImage(string, "_blit").then(function (img) {

									//let _cacheIndex =  this.ImageCache.push(img);
									//				console.log( this.ImageCache[_cacheIndex-1]=img)
									/*
         				let buffindex = this.ImageBuffer.push(string+"_blit");
         
                         this[string2] = img;
                         this[string2].addEventListener('load',()=>{
         
                                 this[string2] = this.visuals.blit(this[string2],x,y)
         
         		                this[string2].string = string2;
         
         						this.ImageCache.push(this[string2]);
         
         								this.ImageBuffer.splice(this.ImageBuffer.indexOf(string+"_blit2"),1);
                         })
         */
								});

							case 3:
								_image = _context4.sent;
								return _context4.abrupt('return', _image || string);

							case 5:
							case 'end':
								return _context4.stop();
						}
					}
				}, _callee4, this);
			}));

			return function asyncLoadImageDataFromZip(_x9, _x10, _x11, _x12) {
				return ref.apply(this, arguments);
			};
		}()
	}]);

	return _loader;
}(__WEBPACK_IMPORTED_MODULE_0__core_sjs__["a" /* _SJSClass */]);

/* harmony default export */ exports["a"] = _loader;

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_interfaces_ITypes__ = __webpack_require__(5);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var IConnect = __WEBPACK_IMPORTED_MODULE_0__core_interfaces_ITypes__["t" /* IConnect */];

var Connection = function () {

		/*
  *
  *
  */

		function Connection(url) {
				_classCallCheck(this, Connection);

				this.DisableDefaultCallback = false;
				this.XMLHttpRequest = window.XMLHttpRequest || ActiveXObject("Microsoft.XMLHTTP");
				this.Error = '';
				this.ErrorAttempt = "SJS:XML:Request";
				this.ErrorOffline = "SJS:Offline";
				this.ConnectionAttempts = 0;
				this.offline = false;
				this.testurl = 'https://httpbin.org/get';
				this.window = window;

				if (!(typeof url === 'string' || url == null)) {
						throw new TypeError("Value of argument \"url\" violates contract.\n\nExpected:\nstring | void\n\nGot:\n" + _inspect(url));
				}

				this.offline = true;
				this.XML(url || this.testurl);

				return this;
		}

		/**	Request a URL via XMLHttpRequest
  *   @callback {ready}  - Triggers on request success
  *   @param {address} string - URL
  *   @param {callback} function - Callback function
  *   @param {arg0} mixed|void - User defined argument
  *   @param {arg1} mixed|void - User defined argument  */

		_createClass(Connection, [{
				key: "XML",
				value: function () {
						var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(address, callback, arg0, arg1) {
								var _this = this;

								var xmlhttp;
								return regeneratorRuntime.wrap(function _callee$(_context) {
										while (1) {
												switch (_context.prev = _context.next) {
														case 0:
																if (typeof address === 'string') {
																		_context.next = 2;
																		break;
																}

																throw new TypeError("Value of argument \"address\" violates contract.\n\nExpected:\nstring\n\nGot:\n" + _inspect(address));

														case 2:
																if (callback == null) {
																		_context.next = 4;
																		break;
																}

																throw new TypeError("Value of argument \"callback\" violates contract.\n\nExpected:\nany | void\n\nGot:\n" + _inspect(callback));

														case 4:
																if (arg0 == null) {
																		_context.next = 6;
																		break;
																}

																throw new TypeError("Value of argument \"arg0\" violates contract.\n\nExpected:\nmixed | void\n\nGot:\n" + _inspect(arg0));

														case 6:
																if (arg1 == null) {
																		_context.next = 8;
																		break;
																}

																throw new TypeError("Value of argument \"arg1\" violates contract.\n\nExpected:\nmixed | void\n\nGot:\n" + _inspect(arg1));

														case 8:
																if (!(this.offline == true)) {
																		_context.next = 12;
																		break;
																}

																this.Error = this.ErrorOffline;
																console.warn(this.Error);
																return _context.abrupt("return");

														case 12:

																this.Error = this.ErrorAttempt + '' + this.ConnectionAttempts;

																if (typeof this.Error === 'string') {
																		_context.next = 15;
																		break;
																}

																throw new TypeError("Value of \"this.Error\" violates contract.\n\nExpected:\nstring\n\nGot:\n" + _inspect(this.Error));

														case 15:
																console.time(this.Error);

																if (this.XMLHttpRequest) {
																		_context.next = 20;
																		break;
																}

																this.XMLHttpRequest = ActiveXObject("Microsoft.XMLHTTP");

																if (this.XMLHttpRequest instanceof XMLHttpRequest) {
																		_context.next = 20;
																		break;
																}

																throw new TypeError("Value of \"this.XMLHttpRequest\" violates contract.\n\nExpected:\nXMLHttpRequest\n\nGot:\n" + _inspect(this.XMLHttpRequest));

														case 20:
																xmlhttp = new this.XMLHttpRequest();

																if (xmlhttp instanceof XMLHttpRequest) {
																		_context.next = 23;
																		break;
																}

																throw new TypeError("Value of variable \"xmlhttp\" violates contract.\n\nExpected:\nXMLHttpRequest\n\nGot:\n" + _inspect(xmlhttp));

														case 23:

																xmlhttp.onreadystatechange = function () {

																		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
																				if (callback) callback(xmlhttp.response, arg0, arg1);

																				_this.ready(xmlhttp.response, arg0, arg1);
																		}
																};

																// Open new request as a HEAD to the root hostname with a random param to bust the cache
																_context.next = 26;
																return xmlhttp.open("HEAD", address + "?h=" + Math.floor((1 + Math.random()) * 0x10000), false);

														case 26:
																_context.next = 28;
																return xmlhttp.send();

														case 28:
														case "end":
																return _context.stop();
												}
										}
								}, _callee, this);
						}));

						return function XML(_x, _x2, _x3, _x4) {
								return ref.apply(this, arguments);
						};
				}()

				/**	Default callback function, use Connection.DisableDefaultCallback = false;
       *   @param {response} string - Response as string
       *   @param {arg0} mixed|void - User defined argument
       *   @param {arg1} mixed|void - User defined argument  */

		}, {
				key: "ready",
				value: function () {
						var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(response, arg0, arg1) {
								return regeneratorRuntime.wrap(function _callee2$(_context2) {
										while (1) {
												switch (_context2.prev = _context2.next) {
														case 0:
																if (typeof response === 'string') {
																		_context2.next = 2;
																		break;
																}

																throw new TypeError("Value of argument \"response\" violates contract.\n\nExpected:\nstring\n\nGot:\n" + _inspect(response));

														case 2:
																if (arg0 == null) {
																		_context2.next = 4;
																		break;
																}

																throw new TypeError("Value of argument \"arg0\" violates contract.\n\nExpected:\nmixed | void\n\nGot:\n" + _inspect(arg0));

														case 4:
																if (arg1 == null) {
																		_context2.next = 6;
																		break;
																}

																throw new TypeError("Value of argument \"arg1\" violates contract.\n\nExpected:\nmixed | void\n\nGot:\n" + _inspect(arg1));

														case 6:

																this.Error = this.ErrorAttempt + '' + this.ConnectionAttempts;

																if (typeof this.Error === 'string') {
																		_context2.next = 9;
																		break;
																}

																throw new TypeError("Value of \"this.Error\" violates contract.\n\nExpected:\nstring\n\nGot:\n" + _inspect(this.Error));

														case 9:
																console.timeEnd(this.Error);
																this.ConnectionAttempts++;

														case 11:
														case "end":
																return _context2.stop();
												}
										}
								}, _callee2, this);
						}));

						return function ready(_x5, _x6, _x7) {
								return ref.apply(this, arguments);
						};
				}()
		}]);

		return Connection;
}();

/* harmony default export */ exports["a"] = Connection;

function _inspect(input, depth) {
		var maxDepth = 4;
		var maxKeys = 15;

		if (depth === undefined) {
				depth = 0;
		}

		depth += 1;

		if (input === null) {
				return 'null';
		} else if (input === undefined) {
				return 'void';
		} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
				return typeof input === "undefined" ? "undefined" : _typeof(input);
		} else if (Array.isArray(input)) {
				if (input.length > 0) {
						var _ret = function () {
								if (depth > maxDepth) return {
												v: '[...]'
										};

								var first = _inspect(input[0], depth);

								if (input.every(function (item) {
										return _inspect(item, depth) === first;
								})) {
										return {
												v: first.trim() + '[]'
										};
								} else {
										return {
												v: '[' + input.slice(0, maxKeys).map(function (item) {
														return _inspect(item, depth);
												}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
										};
								}
						}();

						if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
				} else {
						return 'Array';
				}
		} else {
				var keys = Object.keys(input);

				if (!keys.length) {
						if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
								return input.constructor.name;
						} else {
								return 'Object';
						}
				}

				if (depth > maxDepth) return '{...}';
				var indent = '  '.repeat(depth - 1);
				var entries = keys.slice(0, maxKeys).map(function (key) {
						return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
				}).join('\n  ' + indent);

				if (keys.length >= maxKeys) {
						entries += '\n  ' + indent + '...';
				}

				if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
						return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
				} else {
						return '{\n  ' + indent + entries + '\n' + indent + '}';
				}
		}
}

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule createMicrosoftUnsafeLocalFunction
 */

/* globals MSApp */



/**
 * Create a function which has 'unsafe' privileges (required by windows8 apps)
 */

var createMicrosoftUnsafeLocalFunction = function createMicrosoftUnsafeLocalFunction(func) {
  if (typeof MSApp !== 'undefined' && MSApp.execUnsafeLocalFunction) {
    return function (arg0, arg1, arg2, arg3) {
      MSApp.execUnsafeLocalFunction(function () {
        return func(arg0, arg1, arg2, arg3);
      });
    };
  } else {
    return func;
  }
};

//var ExecutionEnvironment = require('ExecutionEnvironment');

var WHITESPACE_TEST = /^[ \r\n\t\f]/;
var NONVISIBLE_TEST = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/;

//var createMicrosoftUnsafeLocalFunction = require('createMicrosoftUnsafeLocalFunction');

/**
 * Set the innerHTML property of a node, ensuring that whitespace is preserved
 * even in IE8.
 *
 * @param {DOMElement} node
 * @param {string} html
 * @internal
 */
var setInnerHTML = createMicrosoftUnsafeLocalFunction(function (node, html) {
  node.innerHTML = html;
});

//if (ExecutionEnvironment.canUseDOM) {
// IE8: When updating a just created node with innerHTML only leading
// whitespace is removed. When updating an existing node with innerHTML
// whitespace in root TextNodes is also collapsed.
// @see quirksmode.org/bugreports/archives/2004/11/innerhtml_and_t.html

// Feature detection; only IE8 is known to behave improperly like this.
var testElement = document.createElement('div');
testElement.innerHTML = ' ';
if (testElement.innerHTML === '') {
  setInnerHTML = function setInnerHTML(node, html) {
    // Magic theory: IE8 supposedly differentiates between added and updated
    // nodes when processing innerHTML, innerHTML on updated nodes suffers
    // from worse whitespace behavior. Re-adding a node like this triggers
    // the initial and more favorable whitespace behavior.
    // TODO: What to do on a detached node?
    if (node.parentNode) {
      node.parentNode.replaceChild(node, node);
    }

    // We also implement a workaround for non-visible tags disappearing into
    // thin air on IE8, this only happens if there is no visible text
    // in-front of the non-visible tags. Piggyback on the whitespace fix
    // and simply check if any non-visible tags appear in the source.
    if (WHITESPACE_TEST.test(html) || html[0] === '<' && NONVISIBLE_TEST.test(html)) {
      // Recover leading whitespace by temporarily prepending any character.
      // \uFEFF has the potential advantage of being zero-width/invisible.
      // UglifyJS drops U+FEFF chars when parsing, so use String.fromCharCode
      // in hopes that this is preserved even if "\uFEFF" is transformed to
      // the actual Unicode character (by Babel, for example).
      // https://github.com/mishoo/UglifyJS2/blob/v2.4.20/lib/parse.js#L216
      node.innerHTML = String.fromCharCode(0xFEFF) + html;

      // deleteData leaves an empty `TextNode` which offsets the index of all
      // children. Definitely want to avoid this.
      var textNode = node.firstChild;
      if (textNode.data.length === 1) {
        node.removeChild(textNode);
      } else {
        textNode.deleteData(0, 1);
      }
    } else {
      node.innerHTML = html;
    }
  };
}
//}

window.setInnerHTML = setInnerHTML;

/* unused harmony default export */ var _unused_webpack_default_export = setInnerHTML;

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Twitter = function Twitter() {
    _classCallCheck(this, Twitter);

    !function (d, s, id) {
        if (!(d instanceof Object)) {
            throw new TypeError('Value of argument "d" violates contract.\n\nExpected:\nObject\n\nGot:\n' + _inspect(d));
        }

        if (!(typeof s === 'string')) {
            throw new TypeError('Value of argument "s" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(s));
        }

        if (!(typeof id === 'string')) {
            throw new TypeError('Value of argument "id" violates contract.\n\nExpected:\nstring\n\nGot:\n' + _inspect(id));
        }

        var js,
            fjs = d.getElementsByTagName(s)[0],
            p = /^http:/.test(d.location) ? 'http' : 'https';
        if (!d.getElementById(id)) {
            js = d.createElement(s);
            js.id = id;
            js.src = p + "://platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js, fjs);
        }
    }(document, "script", "twitter-wjs");
};

/* unused harmony default export */ var _unused_webpack_default_export = Twitter;
;

function _inspect(input, depth) {
    var maxDepth = 4;
    var maxKeys = 15;

    if (depth === undefined) {
        depth = 0;
    }

    depth += 1;

    if (input === null) {
        return 'null';
    } else if (input === undefined) {
        return 'void';
    } else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
        return typeof input === 'undefined' ? 'undefined' : _typeof(input);
    } else if (Array.isArray(input)) {
        if (input.length > 0) {
            var _ret = function () {
                if (depth > maxDepth) return {
                        v: '[...]'
                    };

                var first = _inspect(input[0], depth);

                if (input.every(function (item) {
                    return _inspect(item, depth) === first;
                })) {
                    return {
                        v: first.trim() + '[]'
                    };
                } else {
                    return {
                        v: '[' + input.slice(0, maxKeys).map(function (item) {
                            return _inspect(item, depth);
                        }).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
                    };
                }
            }();

            if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
        } else {
            return 'Array';
        }
    } else {
        var keys = Object.keys(input);

        if (!keys.length) {
            if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
                return input.constructor.name;
            } else {
                return 'Object';
            }
        }

        if (depth > maxDepth) return '{...}';
        var indent = '  '.repeat(depth - 1);
        var entries = keys.slice(0, maxKeys).map(function (key) {
            return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
        }).join('\n  ' + indent);

        if (keys.length >= maxKeys) {
            entries += '\n  ' + indent + '...';
        }

        if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
            return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
        } else {
            return '{\n  ' + indent + entries + '\n' + indent + '}';
        }
    }
}

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__(46);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



/**
* _private
* @protected
*/

var _private = new WeakMap();

/**
* Renderer
* @module
* @protected
*/

var Renderer = function (_State) {
	_inherits(Renderer, _State);

	/**
 *	Constructor
 *	@type {Object}
 */

	function Renderer(str, l) {
		_classCallCheck(this, Renderer);

		var _this = _possibleConstructorReturn(this, (Renderer.__proto__ || Object.getPrototypeOf(Renderer)).call(this));

		window.Renderer = _this;

		_private.set(_this, _this.constructor.properties);

		var a = str;
		var i = l;

		console.trace(_this);

		for (i; i >= 0; i--) {

			_this.buffer = str[i];
		}

		return _this;
	}

	/**
 * private variables
 * @type {Object}
 * @protected
 */

	_createClass(Renderer, [{
		key: 'rRender',
		value: function rRender(node, html) {

			setInnerHTML(node, html);
		}
	}, {
		key: 'aRender',
		value: function aRender(node, html) {

			if (typeof node == 'undefined' || typeof node == 'null') node = document.getElementsByTagName('body')[0];

			if (html != 'undefined') if (html != 'undefinedundefined') node.insertAdjacentHTML('beforeend', html);

			//console.log(node.innerHtml);
			//var htmlNew = node.innerHTML+" "+html;
			//setInnerHTML(node,htmlNew);
		}

		/*
  
  */

	}, {
		key: 'queueMarkup',
		value: function queueMarkup(func) {

			var markup = func();
			markup = markup.replace(/>\s+</g, '><');
			markup = markup.trim();

			return markup;
		}

		/*
  
  */

	}, {
		key: 'renderMarkup',
		value: function () {
			var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(node) {
				var arr, is, i, markup;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								arr = this.buffer, is = arr.length, i = is - 1;
								i;

							case 2:
								if (!(i >= 0)) {
									_context.next = 9;
									break;
								}

								markup = arr[i];
								_context.next = 6;
								return this.aRender(node, markup);

							case 6:
								i--;
								_context.next = 2;
								break;

							case 9:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			return function renderMarkup(_x) {
				return ref.apply(this, arguments);
			};
		}()
	}, {
		key: 'buffer',
		get: function get() {

			return this.get('buffer');
		},
		set: function set(value) {

			this.get('buffer').push(value);
		}
	}]);

	return Renderer;
}(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */]);

Renderer.properties = {

	name: 'Renderer',
	buffer: [],
	version: '0.0.1'

};
/* harmony default export */ exports["a"] = Renderer;


new Renderer();

window.MarkupBuffer = [];
window.MarkupRecall = function (func) {

	var markup = func();
	markup = markup.replace(/>\s+</g, '><');

	//window.MarkupBuffer.push(markup);
	Renderer.buffer.push(markup);

	//return func();
};

window.MarkupRender = function () {

	var node = document.getElementsByTagName('body')[0];

	var time = 10;

	for (var i = 0; i < Renderer.buffer.length; i++) {
		var markup = Renderer.buffer[i];
		var node = node;
		//setTimeout(()=>{
		Renderer.aRender(node, markup);
		//},50*i+1)
	}
};

window.rRender = Renderer.rRender;
window.aRender = Renderer.aRender;

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_sjs__ = __webpack_require__(8);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


/**
* Test Module for running tyhe game
* @module
* @private
*/

var test = function (_SJSClass) {
    _inherits(test, _SJSClass);

    function test(app) {
        _classCallCheck(this, test);

        //this.Loader = this.app.getCurrent().Loader;
        /*
                this.SplashScreen = [];
        
        		this.SplashScreen[0] = this.Loader.loadImage('intro/SplashScreen');
        
        		this.SplashScreen[1] = this.Loader.loadImage('intro/spicejsicon');
        
        		this.SplashScreen[2] = this.Loader.loadImage('intro/ryanspice');
        
                this.Background = this.Loader.loadImage('intro/background');
        
                this.begin = this.Loader.loadImage('intro/begin');
        
        		this.ScoreNumber = [];
        
        		this.ScoreNumber[0] = this.Loader.loadImage('interface/score/score_0');
        		this.ScoreNumber[1] = this.Loader.loadImage('interface/score/score_1');
        		this.ScoreNumber[2] = this.Loader.loadImage('interface/score/score_2');
        		this.ScoreNumber[3] = this.Loader.loadImage('interface/score/score_3');
        		this.ScoreNumber[4] = this.Loader.loadImage('interface/score/score_4');
        		this.ScoreNumber[5] = this.Loader.loadImage('interface/score/score_5');
        		this.ScoreNumber[6] = this.Loader.loadImage('interface/score/score_6');
        		this.ScoreNumber[7] = this.Loader.loadImage('interface/score/score_7');
        		this.ScoreNumber[8] = this.Loader.loadImage('interface/score/score_8');
        		this.ScoreNumber[9] = this.Loader.loadImage('interface/score/score_9');
        
                this.Loader.loadImage('interface/iconoffline');
        
                this.Loader.loadImage('interface/iconp');
        
                this.Loader.loadImage('interface/iconvolume');
        
                this.Loader.loadImage('interface/iconx');
        */
        var _this = _possibleConstructorReturn(this, (test.__proto__ || Object.getPrototypeOf(test)).call(this, app));

        _this.StartPhase = 2;
        _this.StartAlpha = 2;

        _this.xxx = 0;
        _this.start = false;

        //		(this.particles = this.app.create(SB_.prototype)).init();

        //(this.loading = this.app.create(Loading.prototype)).init();
        //(this.statusicons = this.app.create(StatusIco.prototype)).init();
        //(this.characterselect = this.app.create(Characterselect.prototype)).init();

        //    this.particles = new SB_(this.app);

        //        this.loading = new Loading(this.app);

        //        this.statusicons = new StatusIco(this.app);

        //        this.characterselect = new Characterselect(this.app);

        _this.continue = false;

        _this.sceneX = -190;
        _this.scenePhase = 0;
        _this.sceneEndX = 1;

        _this.sceneStartSpeed = 3;
        _this.sceneEndSpeed = 4;

        _this.sceneSpeed = _this.sceneStartSpeed;
        return _this;
    }

    _createClass(test, [{
        key: "draw",
        value: function draw() {

            //    if (this.Loader.getBufferLength()>0)
            //        return;

            var sw = this.app.getScaledWidth();
            var sh = this.app.getScaledHeight();
            var h = this.app.getHeight();
            var w = this.app.getWidth();
            var alpha = 0.5 + Math.sin(this.sceneX / 120) * 0.5;

            if (this.scenePhase == 2) if (this.sceneX > 320) alpha = 0.5 + Math.sin(320 / 120) * 0.5;

            this.Background = {};
            this.Background.width = sw;

            var alpha2 = 0.25 + Math.sin(this.sceneX / 120) * 0.55 - this.sceneEndX;

            if (this.scenePhase == 2) alpha2 = this.sceneEndX, this.sceneSpeed = this.sceneEndSpeed;
            /*
                    this.visuals.image_ext(this.Background,this.app.getWidth()/2,this.app.getHeight()/2, 1,alpha,true);
            
                    if (this.scenePhase==2)
                        this.visuals.rect_ext(this.app.getWidth()/2,this.app.getHeight()/2,this.app.getScaledWidth()*2,this.app.getHeight(), 1,alpha2,true,"#FFFFFF");
                    else
                        this.visuals.rect_ext(-sw,0,sw*3,h,1,1,0,"#000000");
            */
            this.visuals.rect_gradient(w / 2, h / 2, this.Background.width, h, 1, alpha * 0.9, 1, "transparent", "#5e5fdf");
            /*
                    if (this.continue == true)
            			this.characterselect.draw();
                    else
                        this.visuals.image_ext(this.SplashScreen[2-this.scenePhase],this.app.getWidth()/2,300, 1,alpha,true);
            */

            this.visuals.rect_gradient(w / 2, h * 0, this.Background.width, h * 2, 1, alpha * 0.9, 1, "transparent", "#5e5fdf");

            if (this.scenePhase == 2) {
                if (this.sceneEndX > 0) this.sceneEndX -= 0.1;else this.sceneEndX = 0;
                /*
                			this.particles._draw();
                
                			if (this.graphics.getErrors())
                				this.loading.draw();
                			else	{
                				var a = this.app.client.Math.Clamp(Math.cos(this.sceneX/25),0,1);
                				if (this.continue==false)
                				this.visuals.image_ext(this.begin,this.app.getWidth()/2,500, 1,a,1);
                
                				this.app.ext.cursor.set('pointer');
                
                			}
                            */
            } else {}

                //	this.loading.draw();


                //	this.statusicons.draw(0.29);

        }
    }, {
        key: "update",
        value: function update() {

            //    this.loading.update();
            //	this.statusicons.update();

            //    if (this.Loader.getBufferLength()>0)
            //        return;

            var tick = this.sceneSpeed;

            if (this.scenePhase > 2) this.scenePhase = 2;else if (this.scenePhase == 2) {
                //    this.particles._update();
                //	this.characterselect.update();
                this.sceneX += tick;
            } else if (this.scenePhase < 2) {

                if (this.scenePhase == 2) if (this.app.input.released) if (this.continue == false) this.continue = true;

                if (this.app.input.released) this.sceneSpeed = 10;

                this.sceneX += tick;

                if (this.sceneX > 520) this.sceneX = -190, this.scenePhase++;

                if (this.scenePhase > 2) this.scenePhase = 2;
            }
        }
    }]);

    return test;
}(__WEBPACK_IMPORTED_MODULE_0__core_sjs__["a" /* _SJSClass */]);

/* harmony default export */ exports["a"] = test;

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_interfaces_ITypes__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_sjs_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_timing_step__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__state__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_math_vector__ = __webpack_require__(29);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var IApp = __WEBPACK_IMPORTED_MODULE_0__core_interfaces_ITypes__["a" /* IApp */],
    IStep = __WEBPACK_IMPORTED_MODULE_0__core_interfaces_ITypes__["g" /* IStep */],
    IState = __WEBPACK_IMPORTED_MODULE_0__core_interfaces_ITypes__["e" /* IState */],
    IClient = __WEBPACK_IMPORTED_MODULE_0__core_interfaces_ITypes__["h" /* IClient */],
    IVector = __WEBPACK_IMPORTED_MODULE_0__core_interfaces_ITypes__["i" /* IVector */],
    IScaler = __WEBPACK_IMPORTED_MODULE_0__core_interfaces_ITypes__["IScaler"];










/*
*	The Update class handles scaling, resizing, and the app state.
*/

var Update = function (_SJSClass) {
	_inherits(Update, _SJSClass);

	function Update() {
		var _ref8;

		var _temp, _this, _ret;

		_classCallCheck(this, Update);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref8 = Update.__proto__ || Object.getPrototypeOf(Update)).call.apply(_ref8, [this].concat(args))), _this), _this.last = new __WEBPACK_IMPORTED_MODULE_4__core_math_vector__["a" /* default */](), _this.difference = new __WEBPACK_IMPORTED_MODULE_4__core_math_vector__["a" /* default */](), _this.scaler = { s: 1, x: 1, y: 1 }, _this.scaling = true, _this.scalediff = 0, _this.lastscale = 1, _this.fullscale = false, _this.resized = false, _this.frames = 0, _this.pause = 0, _temp), _possibleConstructorReturn(_this, _ret);
	}

	/**
    * @public
    */

	_createClass(Update, [{
		key: 'inital',


		/**
  * Initalize the state and step objects.
  * Step is delayed untill step is initiated so to prevent value mismatch.
  * @method
  * @private
  */

		value: function inital(app) {
			if (!IApp(app)) {
				throw new TypeError('Value of argument "app" violates contract.\n\nExpected:\nIApp\n\nGot:\n' + _inspect(app));
			}

			this.step = new __WEBPACK_IMPORTED_MODULE_2__core_timing_step__["a" /* default */](app);

			if (!IStep(this.step)) {
				throw new TypeError('Value of "this.step" violates contract.\n\nExpected:\nIStep\n\nGot:\n' + _inspect(this.step));
			}

			this.state = new __WEBPACK_IMPORTED_MODULE_3__state__["a" /* default */](app.main, app);

			if (!IState(this.state)) {
				throw new TypeError('Value of "this.state" violates contract.\n\nExpected:\nIState\n\nGot:\n' + _inspect(this.state));
			}
		}

		/**
  * Calculates the scale of the canvas based on inital size inputs.
  * Disabled if overriding canvas properties.
  * @method
  * @private
  */

	}, {
		key: 'scale',
		value: function scale(client) {
			function _ref5(_id5) {
				if (!(typeof _id5 === 'number')) {
					throw new TypeError('Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(_id5));
				}

				return _id5;
			}

			if (this == window) {
				console.log('Warning: Scale: [this === window]');return 0;
			} else if (this.pause > 0.5) {
				console.log('Warning: Paused', 30);return 0;
			} else if (this.set == 1) {
				console.log('Warning: Scale: Duplicate Run', 30);return 0;
			}

			var windowSize = new __WEBPACK_IMPORTED_MODULE_4__core_math_vector__["a" /* default */](window.innerWidth, window.innerHeight);

			//Check if overriding

			if (client.app.options.canvas.override) {

				//Set width to override

				if (client.app.options.canvas.size.width !== client.width) {

					client.width = client.app.options.canvas.size.width;

					if (document.body.clientHeight > windowSize.y) {

						//FUCK

					}
				}

				//Set height to override

				if (client.app.options.canvas.size.height !== client.height) {

					client.height = client.app.options.canvas.size.height;
				}

				//Check if centered

				if (client.app.options.canvas.position.center) {

					//if not aligned

					if (client.app.options.canvas.size.left !== client.app.width / 2) {

						//align

						client.app.canvas.getCanvas().style.left = -client.width / 2 + windowSize.x / 2 + "px";

						//if buffer align

						if (client.app.options.canvas.buffer) {

							client.app.canvas.getBuffer().style.left = -client.width / 2 + windowSize.x / 2 + "px";
						}
					}
				}
			} else {

				if (windowSize.y !== client.height) {

					client.height = windowSize.y;
				}

				if (windowSize.x !== client.width) {

					client.width = windowSize.x;
				}
			}

			if (this.difference.sum() == 0) {
				this.set = 0;
				this.scalediff = 0;
				return this.lastscale;
			}

			//Calculate sccalers

			this.set = 1;
			this.scaler.x = client.height / client.setHeight;
			this.scaler.y = client.width / client.setWidth;

			//Toggle wither or not to scale

			this.fullscale ? this.scaler.s = this.scaler.x : this.scaler.s = this.scaler.x < this.scaler.y ? this.scaler.x : this.scaler.y;

			//if scaler.s is not a number
			/*
   if (isNaN(this.scaler.s)){
   
   	console.warn("Scale is NAN");
   	return this.set = 0;
   		}
   */

			//Scale difference
			this.scalediff = this.scaler.s - this.lastscale;

			//If scaled different, scroll to the top
			//(this.scalediff)?app.app.input.scroll.to(true):app.app.input.scroll.to(false);

			if (!(typeof this.scalediff === 'number')) {
				throw new TypeError('Value of "this.scalediff" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(this.scalediff));
			}

			this.set = 0;

			//Save scale
			this.lastscale = this.scaler.s;

			if (!(typeof this.lastscale === 'number')) {
				throw new TypeError('Value of "this.lastscale" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(this.lastscale));
			}

			return _ref5(this.scaler.s);
		}

		/**
  * Perform hard resize of the canvas.
  * @method
  * @private
  */

	}, {
		key: 'size',
		value: function size(client) {

			if (this.difference.sum() == 0) return false;

			client.app.canvas.canvas.width = this.last.x = client.width;

			client.app.canvas.canvas.height = this.last.y = client.height;

			client.app.canvas.buffer.width = this.last.x = client.width;

			client.app.canvas.buffer.height = this.last.y = client.height;

			return true;
		}

		/**
  * Calculate width and height delta differences between
  * the canvas size last frame and this frame.
  * @method
  * @private
  */

	}, {
		key: 'sizedelta',
		value: function sizedelta(client) {

			var vector_size0 = new __WEBPACK_IMPORTED_MODULE_4__core_math_vector__["a" /* default */](this.last.x, this.last.y);
			var vector_size1 = new __WEBPACK_IMPORTED_MODULE_4__core_math_vector__["a" /* default */](client.width, client.height);

			if (vector_size0.equals(vector_size1)) {

				this.difference = new __WEBPACK_IMPORTED_MODULE_4__core_math_vector__["a" /* default */]();

				if (!IVector(this.difference)) {
					throw new TypeError('Value of "this.difference" violates contract.\n\nExpected:\nIVector\n\nGot:\n' + _inspect(this.difference));
				}

				return false;
			} else {

				this.difference = new __WEBPACK_IMPORTED_MODULE_4__core_math_vector__["a" /* default */]().Difference(vector_size0, vector_size1);

				if (!IVector(this.difference)) {
					throw new TypeError('Value of "this.difference" violates contract.\n\nExpected:\nIVector\n\nGot:\n' + _inspect(this.difference));
				}
			}

			return true;
		}
	}, {
		key: 'step',


		/**
     *
     */

		set: function set(value) {
			if (!IStep(value)) {
				throw new TypeError('Value of argument "value" violates contract.\n\nExpected:\nIStep\n\nGot:\n' + _inspect(value));
			}

			this.get('data')[0] = value;
		}

		/**
     *
     */

		,
		get: function get() {
			function _ref2(_id2) {
				if (!IStep(_id2)) {
					throw new TypeError('Function return value violates contract.\n\nExpected:\nIStep\n\nGot:\n' + _inspect(_id2));
				}

				return _id2;
			}

			return _ref2(this.get('data')[0]);
		}

		/**
     *
     */

	}, {
		key: 'state',
		set: function set(value) {
			if (!IState(value)) {
				throw new TypeError('Value of argument "value" violates contract.\n\nExpected:\nIState\n\nGot:\n' + _inspect(value));
			}

			value.init();
			value.initalized = true;
			this.get('data')[1] = value;
		}

		/**
     *
     */

		,
		get: function get() {
			function _ref3(_id3) {
				if (!IState(_id3)) {
					throw new TypeError('Function return value violates contract.\n\nExpected:\nIState\n\nGot:\n' + _inspect(_id3));
				}

				return _id3;
			}

			return _ref3(this.get('data')[1]);
		}
	}]);

	return Update;
}(__WEBPACK_IMPORTED_MODULE_1__core_sjs_js__["a" /* _SJSClass */]);

Update.properties = {

	data: [__WEBPACK_IMPORTED_MODULE_2__core_timing_step__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__state__["a" /* default */]]

};
/* harmony default export */ exports["a"] = Update;

function _inspect(input, depth) {
	var maxDepth = 4;
	var maxKeys = 15;

	if (depth === undefined) {
		depth = 0;
	}

	depth += 1;

	if (input === null) {
		return 'null';
	} else if (input === undefined) {
		return 'void';
	} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
		return typeof input === 'undefined' ? 'undefined' : _typeof(input);
	} else if (Array.isArray(input)) {
		if (input.length > 0) {
			var _ret2 = function () {
				if (depth > maxDepth) return {
						v: '[...]'
					};

				var first = _inspect(input[0], depth);

				if (input.every(function (item) {
					return _inspect(item, depth) === first;
				})) {
					return {
						v: first.trim() + '[]'
					};
				} else {
					return {
						v: '[' + input.slice(0, maxKeys).map(function (item) {
							return _inspect(item, depth);
						}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
					};
				}
			}();

			if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
		} else {
			return 'Array';
		}
	} else {
		var keys = Object.keys(input);

		if (!keys.length) {
			if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
				return input.constructor.name;
			} else {
				return 'Object';
			}
		}

		if (depth > maxDepth) return '{...}';
		var indent = '  '.repeat(depth - 1);
		var entries = keys.slice(0, maxKeys).map(function (key) {
			return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
		}).join('\n  ' + indent);

		if (keys.length >= maxKeys) {
			entries += '\n  ' + indent + '...';
		}

		if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
			return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
		} else {
			return '{\n  ' + indent + entries + '\n' + indent + '}';
		}
	}
}

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

Number.prototype.toFixedNumber = function (x, base) {
    var pow = Math.pow(base || 10, x);
    return +(Math.round(this * pow) / pow);
};

function wait(t) {

    return new Promise(function (r) {
        return setTimeout(r, t);
    });
}

var timers = {};

window.timer = function timer(name) {
    timers[name + '_start'] = window.performance.now();
};

window.timerEnd = function timerEnd(name) {
    if (!timers[name + '_start']) return undefined;
    var time = window.performance.now() - timers[name + '_start'];
    var amount = timers[name + '_amount'] = timers[name + '_amount'] ? timers[name + '_amount'] + 1 : 1;
    var sum = timers[name + '_sum'] = timers[name + '_sum'] ? timers[name + '_sum'] + time : time;
    timers[name + '_avg'] = sum / amount;
    delete timers[name + '_start'];
    return time;
};

var utils = utils || {};

utils.FNV_OFFSET_32 = 0x811c9dc5;

utils.randomHash = function () {

    utils.FNV_OFFSET_32 = '#' + Math.floor(Math.random() * 16777215).toString(16);
};

utils.hashFnv32a = function (input) {

    var hval = utils.FNV_OFFSET_32;

    // Strips unicode bits, only the lower 8 bits of the values are used

    for (var i = 0; i < input.length; i++) {

        hval = hval ^ input.charCodeAt(i) & 0xFF;

        hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
    }

    return hval >>> 0;
};

utils.toHex = function (val) {

    return ("0000000" + (val >>> 0).toString(16)).substr(-8);
};

utils.requestAnimationFrame = function () {

    if (!Date.now) Date.now = function () {
        return new Date().getTime();
    };

    var vendors = ['webkit', 'moz'];

    for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {

        var vp = vendors[i];

        window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];

        window.cancelAnimationFrame = window[vp + 'CancelAnimationFrame'] || window[vp + 'CancelRequestAnimationFrame'];
    };

    if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {

        var lastTime = 0;

        window.requestAnimationFrame = function (callback) {

            var now = Date.now();

            var nextTime = Math.max(lastTime + 16, now);

            return setTimeout(function () {
                callback(lastTime = nextTime);
            }, nextTime - now);
        };

        window.cancelAnimationFrame = clearTimeout;
    };
};

utils.loadExternalJS = function (scripts) {

    !function (e, t, r) {

        function n() {

            for (; d[0] && "loaded" == d[0][f];) {
                c = d.shift(), c[o] = !i.parentNode.insertBefore(c, i);
            }
        };

        for (var s, a, c, d = [], i = e.scripts[0], o = "onreadystatechange", f = "readyState"; s = r.shift();) {
            a = e.createElement(t), "" in i ? (a.async = !1, e.head.appendChild(a)) : i[f] ? (d.push(a), a[o] = n) : e.write("<" + t + ' src="' + s + '" defer></' + t + ">"), a.src = s;
        }
    }(document, "script", scripts);
};

utils.convertArrayOfObjectsToCSV = function (args) {

    var result, ctr, keys, columnDelimiter, lineDelimiter, data;

    data = args.data || null;

    if (data == null || !data.length) {

        return null;
    }

    columnDelimiter = args.columnDelimiter || ',';

    lineDelimiter = args.lineDelimiter || '\n';

    keys = Object.keys(data[0]);

    result = '';

    result += keys.join(columnDelimiter);

    result += lineDelimiter;

    data.forEach(function (item) {

        ctr = 0;

        keys.forEach(function (key) {

            if (ctr > 0) result += columnDelimiter;

            result += item[key];

            ctr++;
        });

        result += lineDelimiter;
    });

    return result;
};

utils.writeToCSV = function (name) {

    var logStream = fs.createWriteStream('log.txt', { 'flags': 'a' });

    logStream.write('Initial line...');

    logStream.end('this is the end line');

    var dataString = "";

    var data = this.convertArrayOfObjectsToCSV(SpiceJS.logs('values')[1]);

    //console.log(this.convertArrayOfObjectsToCSV({eh:'eh'}))

    var csvContent = "data:text/csv;charset=utf-8,";

    data.forEach(function (infoArray, index) {

        dataString = infoArray.join(",");

        csvContent += index < data.length ? dataString + "\n" : dataString;
    });

    var encodedUri = encodeURI(csvContent);

    var link = document.createElement("a");

    link.setAttribute("href", encodedUri);

    link.setAttribute("download", name + ".csv");

    link.click();
};

/*
*	Date.now polyfill
*/

if (!Date.now) {

    console.warn('polyfill for Date.now used');

    Date.now = function now() {
        return new Date().getTime();
    };
}

window.wait = wait;

window.utils = utils;

/* harmony default export */ exports["a"] = window.utils;

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_sjs__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_stats__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_api__ = __webpack_require__(110);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import {Vector} from './math/vector.js';






//import WeakMapThingy from './core/thingy';

/*
class _Pipe {

    executeNext(){



    }
}
*/

var Visuals = function (_API) {
	_inherits(Visuals, _API);

	/**
    *
    */

	function Visuals(app) {
		_classCallCheck(this, Visuals);

		var _this = _possibleConstructorReturn(this, (Visuals.__proto__ || Object.getPrototypeOf(Visuals)).call(this, app));

		_this.stat = new _this.stat();

		var canvas = _this.app.canvas;

		window.utils.requestAnimationFrame(name, 0, 0);

		_this.scale = _this.app.scale;

		_this.canvas = canvas.canvas;

		_this.buffer = canvas.buffer;

		_this.blitter = canvas.blitter;

		var attribs = { alpha: true };

		_this.blitter_context = _this.blitter.getContext("2d", attribs);

		attribs = { alpha: false };

		_this.canvas_context = _this.canvas.getContext("2d", attribs);

		var globalCompositeOperation = _this.app.options.global.globalCompositeOperation;

		_this.canvas_context.globalCompositeOperation = globalCompositeOperation;
		_this.blitter_context.globalCompositeOperation = globalCompositeOperation;
		_this.buffer_context.globalCompositeOperation = globalCompositeOperation;

		if (_this.app.options.canvas.buffer) _this.buffer_context = _this.buffer.getContext("2d", attribs);else _this.buffer_context = _this.canvas.getContext("2d", attribs);

		_this.linearSampling = false;

		if (_this.buffer_context["imageSmoothingEnabled"] != _this.linearSampling) if (_this.buffer_context["mozImageSmoothingEnabled"] != _this.linearSampling) if (_this.buffer_context["msImageSmoothingEnabled"] != _this.linearSampling) if (_this.buffer_context["webkitImageSmoothingEnabled"] != _this.linearSampling) _this.buffer_context["webkitImageSmoothingEnabled"] = _this.linearSampling;

		return _this;
	}

	/**
    * @property
    */

	_createClass(Visuals, [{
		key: 'fixX',


		/**
     * @method
     */

		value: function fixX(x) {
			function _ref2(_id2) {
				if (!(typeof _id2 === 'number')) {
					throw new TypeError('Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(_id2));
				}

				return _id2;
			}

			if (!(typeof x === 'number')) {
				throw new TypeError('Value of argument "x" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(x));
			}

			return _ref2((x * this.scale + this.app.client.width / 2 - this.app.client.setWidth / 2 * this.scale).toFixedNumber(2));
		}

		/**
     * @method
     */

	}, {
		key: 'fixY',
		value: function fixY(y) {
			function _ref3(_id3) {
				if (!(typeof _id3 === 'number')) {
					throw new TypeError('Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(_id3));
				}

				return _id3;
			}

			if (!(typeof y === 'number')) {
				throw new TypeError('Value of argument "y" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(y));
			}

			return _ref3((y * this.scale + this.app.client.height / 2 - this.app.client.setHeight / 2 * this.scale).toFixedNumber(2));
		}

		/**
     * @method
     */

	}, {
		key: 'fixW',
		value: function fixW(w) {
			function _ref4(_id4) {
				if (!(typeof _id4 === 'number')) {
					throw new TypeError('Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(_id4));
				}

				return _id4;
			}

			if (!(typeof w === 'number')) {
				throw new TypeError('Value of argument "w" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(w));
			}

			return _ref4((w * this.scale).toFixedNumber(2));
		}

		/**
     * @method
     */

	}, {
		key: 'fixH',
		value: function fixH(h) {
			function _ref5(_id5) {
				if (!(typeof _id5 === 'number')) {
					throw new TypeError('Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(_id5));
				}

				return _id5;
			}

			if (!(typeof h === 'number')) {
				throw new TypeError('Value of argument "h" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(h));
			}

			return _ref5((h * this.scale).toFixedNumber(2));
		}

		/**
  * @method
     */

	}, {
		key: 'flip',
		value: function flip() {

			this.scale = this.app.client.scale;

			var style = String(this.app.canvas.canvas.style.background == "transparent");

			this.fillStyle = style = "false";

			if (style != this.laststyle) {

				this.fillStyle = style;
			} else {

				this.fillStyle = "false";

				this.screen_fill(this.app.client.visuals.bleed, this.app.options.canvas.background);
			}

			if (this.debug) if (this.app.client.fps) this.text(this.app.client.fps, this.app.client.setWidth - 125, 25, "#FFFFFF");

			//If double buffering
			if (this.app.options.canvas.buffer) {
				//If initalized, draw state
				if (this.app.client.update.state.initalized) this.app.client.update.state.draw();

				//Draw buffer to canvs
				this.canvas_context.drawImage(this.buffer, 0, 0);

				//Clear buffer
				if (this.fillStyle === true) this.buffer_context.clearRect(0, 0, this.window.innerWidth, this.window.innerHeight);
			} else {

				//If not double buffering, clear canvas
				if (this.fillStyle === true) this.buffer_context.clearRect(0, 0, this.window.innerWidth, this.window.innerHeight);

				//If initalized, draw state
				if (this.app.client.update.state.initalized) this.app.client.update.state.draw();
			}
		}
	}, {
		key: 'setBleed',
		value: function setBleed(threshold) {
			if (!(typeof threshold === 'number')) {
				throw new TypeError('Value of argument "threshold" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(threshold));
			}

			this.bleed = threshold;
		}
	}, {
		key: 'position',
		get: function get() {

			var x = (this.app.input.x - (-this.app.getWidth() / 2 + this.window.innerWidth / 2) + this.app.options.canvas.position.left / 3).toFixedNumber(2);
			var y = (this.app.input.y - this.app.options.canvas.position.top).toFixedNumber(2);

			return new Vector(x, y);
		}
	}]);

	return Visuals;
}(__WEBPACK_IMPORTED_MODULE_2__core_api__["a" /* default */]);

/* harmony default export */ exports["a"] = Visuals;

function _inspect(input, depth) {
	var maxDepth = 4;
	var maxKeys = 15;

	if (depth === undefined) {
		depth = 0;
	}

	depth += 1;

	if (input === null) {
		return 'null';
	} else if (input === undefined) {
		return 'void';
	} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
		return typeof input === 'undefined' ? 'undefined' : _typeof(input);
	} else if (Array.isArray(input)) {
		if (input.length > 0) {
			var _ret = function () {
				if (depth > maxDepth) return {
						v: '[...]'
					};

				var first = _inspect(input[0], depth);

				if (input.every(function (item) {
					return _inspect(item, depth) === first;
				})) {
					return {
						v: first.trim() + '[]'
					};
				} else {
					return {
						v: '[' + input.slice(0, maxKeys).map(function (item) {
							return _inspect(item, depth);
						}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
					};
				}
			}();

			if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
		} else {
			return 'Array';
		}
	} else {
		var keys = Object.keys(input);

		if (!keys.length) {
			if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
				return input.constructor.name;
			} else {
				return 'Object';
			}
		}

		if (depth > maxDepth) return '{...}';
		var indent = '  '.repeat(depth - 1);
		var entries = keys.slice(0, maxKeys).map(function (key) {
			return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
		}).join('\n  ' + indent);

		if (keys.length >= maxKeys) {
			entries += '\n  ' + indent + '...';
		}

		if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
			return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
		} else {
			return '{\n  ' + indent + entries + '\n' + indent + '}';
		}
	}
}

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return IoVersion; });


var IoVersion = function () {
	function IoVersion(input) {
		return input != null && typeof input.version === 'string' && input.version_details instanceof IoDetails;
	}

	;
	Object.defineProperty(IoVersion, Symbol.hasInstance, {
		value: function value(input) {
			return IoVersion(input);
		}
	});
	return IoVersion;
}();

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var hasOwn = Object.prototype.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var iteratorSymbol =
    typeof Symbol === "function" && Symbol.iterator || "@@iterator";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided, then outerFn.prototype instanceof Generator.
    var generator = Object.create((outerFn || Generator).prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `value instanceof AwaitArgument` to determine if the yielded value is
  // meant to be awaited. Some may consider the name of this method too
  // cutesy, but they are curmudgeons.
  runtime.awrap = function(arg) {
    return new AwaitArgument(arg);
  };

  function AwaitArgument(arg) {
    this.arg = arg;
  }

  function AsyncIterator(generator) {
    // This invoke function is written in a style that assumes some
    // calling function (or Promise) will handle exceptions.
    function invoke(method, arg) {
      var result = generator[method](arg);
      var value = result.value;
      return value instanceof AwaitArgument
        ? Promise.resolve(value.arg).then(invokeNext, invokeThrow)
        : Promise.resolve(value).then(function(unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration. If the Promise is rejected, however, the
            // result for this iteration will be rejected with the same
            // reason. Note that rejections of yielded Promises are not
            // thrown back into the generator function, as is the case
            // when an awaited Promise is rejected. This difference in
            // behavior between yield and await is important, because it
            // allows the consumer to decide what to do with the yielded
            // rejection (swallow it and continue, manually .throw it back
            // into the generator, abandon iteration, whatever). With
            // await, by contrast, there is no opportunity to examine the
            // rejection reason outside the generator function, so the
            // only option is to throw it from the await expression, and
            // let the generator function handle the exception.
            result.value = unwrapped;
            return result;
          });
    }

    if (typeof process === "object" && process.domain) {
      invoke = process.domain.bind(invoke);
    }

    var invokeNext = invoke.bind(generator, "next");
    var invokeThrow = invoke.bind(generator, "throw");
    var invokeReturn = invoke.bind(generator, "return");
    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return invoke(method, arg);
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : new Promise(function (resolve) {
          resolve(callInvokeWithMethodAndArg());
        });
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          if (method === "return" ||
              (method === "throw" && delegate.iterator[method] === undefined)) {
            // A return or throw (when the delegate iterator has no throw
            // method) always terminates the yield* loop.
            context.delegate = null;

            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            var returnMethod = delegate.iterator["return"];
            if (returnMethod) {
              var record = tryCatch(returnMethod, delegate.iterator, arg);
              if (record.type === "throw") {
                // If the return method threw an exception, let that
                // exception prevail over the original return or throw.
                method = "throw";
                arg = record.arg;
                continue;
              }
            }

            if (method === "return") {
              // Continue with the outer return, now that the delegate
              // iterator has been terminated.
              continue;
            }
          }

          var record = tryCatch(
            delegate.iterator[method],
            delegate.iterator,
            arg
          );

          if (record.type === "throw") {
            context.delegate = null;

            // Like returning generator.throw(uncaught), but without the
            // overhead of an extra function call.
            method = "throw";
            arg = record.arg;
            continue;
          }

          // Delegate generator ran and handled its own exceptions so
          // regardless of what the method was, we continue as if it is
          // "next" with an undefined arg.
          method = "next";
          arg = undefined;

          var info = record.arg;
          if (info.done) {
            context[delegate.resultName] = info.value;
            context.next = delegate.nextLoc;
          } else {
            state = GenStateSuspendedYield;
            return info;
          }

          context.delegate = null;
        }

        if (method === "next") {
          context._sent = arg;

          if (state === GenStateSuspendedYield) {
            context.sent = arg;
          } else {
            context.sent = undefined;
          }
        } else if (method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw arg;
          }

          if (context.dispatchException(arg)) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            method = "next";
            arg = undefined;
          }

        } else if (method === "return") {
          context.abrupt("return", arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          var info = {
            value: record.arg,
            done: context.done
          };

          if (record.arg === ContinueSentinel) {
            if (context.delegate && method === "next") {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              arg = undefined;
            }
          } else {
            return info;
          }

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(arg) call above.
          method = "throw";
          arg = record.arg;
        }
      }
    };
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      this.sent = undefined;
      this.done = false;
      this.delegate = null;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.next = finallyEntry.finallyLoc;
      } else {
        this.complete(record);
      }

      return ContinueSentinel;
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = record.arg;
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45), __webpack_require__(280)))

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

var toObject = __webpack_require__(22)
  , toIndex  = __webpack_require__(33)
  , toLength = __webpack_require__(10);

module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
  var O     = toObject(this)
    , len   = toLength(O.length)
    , to    = toIndex(target, len)
    , from  = toIndex(start, len)
    , $$    = arguments
    , end   = $$.length > 2 ? $$[2] : undefined
    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
    , inc   = 1;
  if(from < to && to < from + count){
    inc  = -1;
    from += count - 1;
    to   += count - 1;
  }
  while(count-- > 0){
    if(from in O)O[to] = O[from];
    else delete O[to];
    to   += inc;
    from += inc;
  } return O;
};

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__(22)
  , toIndex  = __webpack_require__(33)
  , toLength = __webpack_require__(10);
module.exports = [].fill || function fill(value /*, start = 0, end = @length */){
  var O      = toObject(this)
    , length = toLength(O.length)
    , $$     = arguments
    , $$len  = $$.length
    , index  = toIndex($$len > 1 ? $$[1] : undefined, length)
    , end    = $$len > 2 ? $$[2] : undefined
    , endPos = end === undefined ? length : toIndex(end, length);
  while(endPos > index)O[index++] = value;
  return O;
};

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var isObject = __webpack_require__(2)
  , isArray  = __webpack_require__(48)
  , SPECIES  = __webpack_require__(4)('species');
module.exports = function(original, length){
  var C;
  if(isArray(original)){
    C = original.constructor;
    // cross-realm fallback
    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
    if(isObject(C)){
      C = C[SPECIES];
      if(C === null)C = undefined;
    }
  } return new (C === undefined ? Array : C)(length);
};

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var $ = __webpack_require__(1);
module.exports = function(it){
  var keys       = $.getKeys(it)
    , getSymbols = $.getSymbols;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = $.isEnum
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
  }
  return keys;
};

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

var $         = __webpack_require__(1)
  , toIObject = __webpack_require__(15);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = $.getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

var global    = __webpack_require__(6)
  , macrotask = __webpack_require__(87).set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = __webpack_require__(20)(process) == 'process'
  , head, last, notify;

var flush = function(){
  var parent, domain, fn;
  if(isNode && (parent = process.domain)){
    process.domain = null;
    parent.exit();
  }
  while(head){
    domain = head.domain;
    fn     = head.fn;
    if(domain)domain.enter();
    fn(); // <- currently we use it only for Promise - try / catch not required
    if(domain)domain.exit();
    head = head.next;
  } last = undefined;
  if(parent)parent.enter();
};

// Node.js
if(isNode){
  notify = function(){
    process.nextTick(flush);
  };
// browsers with MutationObserver
} else if(Observer){
  var toggle = 1
    , node   = document.createTextNode('');
  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
  notify = function(){
    node.data = toggle = -toggle;
  };
// environments with maybe non-completely correct, but existent Promise
} else if(Promise && Promise.resolve){
  notify = function(){
    Promise.resolve().then(flush);
  };
// for other environments - macrotask based on:
// - setImmediate
// - MessageChannel
// - window.postMessag
// - onreadystatechange
// - setTimeout
} else {
  notify = function(){
    // strange IE + webpack dev server bug - use .call(global)
    macrotask.call(global, flush);
  };
}

module.exports = function asap(fn){
  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
  if(last)last.next = task;
  if(!head){
    head = task;
    notify();
  } last = task;
};

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.1 Object.assign(target, source, ...)
var $        = __webpack_require__(1)
  , toObject = __webpack_require__(22)
  , IObject  = __webpack_require__(40);

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = __webpack_require__(7)(function(){
  var a = Object.assign
    , A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , $$    = arguments
    , $$len = $$.length
    , index = 1
    , getKeys    = $.getKeys
    , getSymbols = $.getSymbols
    , isEnum     = $.isEnum;
  while($$len > index){
    var S      = IObject($$[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  }
  return T;
} : Object.assign;

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var path      = __webpack_require__(150)
  , invoke    = __webpack_require__(39)
  , aFunction = __webpack_require__(25);
module.exports = function(/* ...pargs */){
  var fn     = aFunction(this)
    , length = arguments.length
    , pargs  = Array(length)
    , i      = 0
    , _      = path._
    , holder = false;
  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
  return function(/* ...args */){
    var that  = this
      , $$    = arguments
      , $$len = $$.length
      , j = 0, k = 0, args;
    if(!holder && !$$len)return invoke(fn, pargs, that);
    args = pargs.slice();
    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = $$[k++];
    while($$len > k)args.push($$[k++]);
    return invoke(fn, args, that);
  };
};

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);

/***/ },
/* 151 */
/***/ function(module, exports) {

module.exports = function(regExp, replace){
  var replacer = replace === Object(replace) ? function(part){
    return replace[part];
  } : replace;
  return function(it){
    return String(it).replace(regExp, replacer);
  };
};

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = __webpack_require__(3)
  , aFunction = __webpack_require__(25)
  , SPECIES   = __webpack_require__(4)('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(2);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var $                 = __webpack_require__(1)
  , $export           = __webpack_require__(0)
  , DESCRIPTORS       = __webpack_require__(12)
  , createDesc        = __webpack_require__(24)
  , html              = __webpack_require__(73)
  , cel               = __webpack_require__(70)
  , has               = __webpack_require__(9)
  , cof               = __webpack_require__(20)
  , invoke            = __webpack_require__(39)
  , fails             = __webpack_require__(7)
  , anObject          = __webpack_require__(3)
  , aFunction         = __webpack_require__(25)
  , isObject          = __webpack_require__(2)
  , toObject          = __webpack_require__(22)
  , toIObject         = __webpack_require__(15)
  , toInteger         = __webpack_require__(34)
  , toIndex           = __webpack_require__(33)
  , toLength          = __webpack_require__(10)
  , IObject           = __webpack_require__(40)
  , IE_PROTO          = __webpack_require__(27)('__proto__')
  , createArrayMethod = __webpack_require__(35)
  , arrayIndexOf      = __webpack_require__(66)(false)
  , ObjectProto       = Object.prototype
  , ArrayProto        = Array.prototype
  , arraySlice        = ArrayProto.slice
  , arrayJoin         = ArrayProto.join
  , defineProperty    = $.setDesc
  , getOwnDescriptor  = $.getDesc
  , defineProperties  = $.setDescs
  , factories         = {}
  , IE8_DOM_DEFINE;

if(!DESCRIPTORS){
  IE8_DOM_DEFINE = !fails(function(){
    return defineProperty(cel('div'), 'a', {get: function(){ return 7; }}).a != 7;
  });
  $.setDesc = function(O, P, Attributes){
    if(IE8_DOM_DEFINE)try {
      return defineProperty(O, P, Attributes);
    } catch(e){ /* empty */ }
    if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
    if('value' in Attributes)anObject(O)[P] = Attributes.value;
    return O;
  };
  $.getDesc = function(O, P){
    if(IE8_DOM_DEFINE)try {
      return getOwnDescriptor(O, P);
    } catch(e){ /* empty */ }
    if(has(O, P))return createDesc(!ObjectProto.propertyIsEnumerable.call(O, P), O[P]);
  };
  $.setDescs = defineProperties = function(O, Properties){
    anObject(O);
    var keys   = $.getKeys(Properties)
      , length = keys.length
      , i = 0
      , P;
    while(length > i)$.setDesc(O, P = keys[i++], Properties[P]);
    return O;
  };
}
$export($export.S + $export.F * !DESCRIPTORS, 'Object', {
  // 19.1.2.6 / 15.2.3.3 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $.getDesc,
  // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
  defineProperty: $.setDesc,
  // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
  defineProperties: defineProperties
});

  // IE 8- don't enum bug keys
var keys1 = ('constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,' +
            'toLocaleString,toString,valueOf').split(',')
  // Additional keys for getOwnPropertyNames
  , keys2 = keys1.concat('length', 'prototype')
  , keysLen1 = keys1.length;

// Create object with `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = cel('iframe')
    , i      = keysLen1
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write('<script>document.F=Object</script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict.prototype[keys1[i]];
  return createDict();
};
var createGetKeys = function(names, length){
  return function(object){
    var O      = toIObject(object)
      , i      = 0
      , result = []
      , key;
    for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while(length > i)if(has(O, key = names[i++])){
      ~arrayIndexOf(result, key) || result.push(key);
    }
    return result;
  };
};
var Empty = function(){};
$export($export.S, 'Object', {
  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
  getPrototypeOf: $.getProto = $.getProto || function(O){
    O = toObject(O);
    if(has(O, IE_PROTO))return O[IE_PROTO];
    if(typeof O.constructor == 'function' && O instanceof O.constructor){
      return O.constructor.prototype;
    } return O instanceof Object ? ObjectProto : null;
  },
  // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $.getNames = $.getNames || createGetKeys(keys2, keys2.length, true),
  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
  create: $.create = $.create || function(O, /*?*/Properties){
    var result;
    if(O !== null){
      Empty.prototype = anObject(O);
      result = new Empty();
      Empty.prototype = null;
      // add "__proto__" for Object.getPrototypeOf shim
      result[IE_PROTO] = O;
    } else result = createDict();
    return Properties === undefined ? result : defineProperties(result, Properties);
  },
  // 19.1.2.14 / 15.2.3.14 Object.keys(O)
  keys: $.getKeys = $.getKeys || createGetKeys(keys1, keysLen1, false)
});

var construct = function(F, len, args){
  if(!(len in factories)){
    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  }
  return factories[len](F, args);
};

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
$export($export.P, 'Function', {
  bind: function bind(that /*, args... */){
    var fn       = aFunction(this)
      , partArgs = arraySlice.call(arguments, 1);
    var bound = function(/* args... */){
      var args = partArgs.concat(arraySlice.call(arguments));
      return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
    };
    if(isObject(fn.prototype))bound.prototype = fn.prototype;
    return bound;
  }
});

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * fails(function(){
  if(html)arraySlice.call(html);
}), 'Array', {
  slice: function(begin, end){
    var len   = toLength(this.length)
      , klass = cof(this);
    end = end === undefined ? len : end;
    if(klass == 'Array')return arraySlice.call(this, begin, end);
    var start  = toIndex(begin, len)
      , upTo   = toIndex(end, len)
      , size   = toLength(upTo - start)
      , cloned = Array(size)
      , i      = 0;
    for(; i < size; i++)cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});
$export($export.P + $export.F * (IObject != Object), 'Array', {
  join: function join(separator){
    return arrayJoin.call(IObject(this), separator === undefined ? ',' : separator);
  }
});

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
$export($export.S, 'Array', {isArray: __webpack_require__(48)});

var createArrayReduce = function(isRight){
  return function(callbackfn, memo){
    aFunction(callbackfn);
    var O      = IObject(this)
      , length = toLength(O.length)
      , index  = isRight ? length - 1 : 0
      , i      = isRight ? -1 : 1;
    if(arguments.length < 2)for(;;){
      if(index in O){
        memo = O[index];
        index += i;
        break;
      }
      index += i;
      if(isRight ? index < 0 : length <= index){
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for(;isRight ? index >= 0 : length > index; index += i)if(index in O){
      memo = callbackfn(memo, O[index], index, this);
    }
    return memo;
  };
};

var methodize = function($fn){
  return function(arg1/*, arg2 = undefined */){
    return $fn(this, arg1, arguments[1]);
  };
};

$export($export.P, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: $.each = $.each || methodize(createArrayMethod(0)),
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: methodize(createArrayMethod(1)),
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: methodize(createArrayMethod(2)),
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: methodize(createArrayMethod(3)),
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: methodize(createArrayMethod(4)),
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: createArrayReduce(false),
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: createArrayReduce(true),
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: methodize(arrayIndexOf),
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function(el, fromIndex /* = @[*-1] */){
    var O      = toIObject(this)
      , length = toLength(O.length)
      , index  = length - 1;
    if(arguments.length > 1)index = Math.min(index, toInteger(fromIndex));
    if(index < 0)index = toLength(length + index);
    for(;index >= 0; index--)if(index in O)if(O[index] === el)return index;
    return -1;
  }
});

// 20.3.3.1 / 15.9.4.4 Date.now()
$export($export.S, 'Date', {now: function(){ return +new Date; }});

var lz = function(num){
  return num > 9 ? num : '0' + num;
};

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (fails(function(){
  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
}) || !fails(function(){
  new Date(NaN).toISOString();
})), 'Date', {
  toISOString: function toISOString(){
    if(!isFinite(this))throw RangeError('Invalid time value');
    var d = this
      , y = d.getUTCFullYear()
      , m = d.getUTCMilliseconds()
      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
  }
});

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = __webpack_require__(0);

$export($export.P, 'Array', {copyWithin: __webpack_require__(142)});

__webpack_require__(26)('copyWithin');

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__(0);

$export($export.P, 'Array', {fill: __webpack_require__(143)});

__webpack_require__(26)('fill');

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__(0)
  , $find   = __webpack_require__(35)(6)
  , KEY     = 'findIndex'
  , forced  = true;
// Shouldn't skip holes
if(KEY in [])Array(1)[KEY](function(){ forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn/*, that = undefined */){
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(26)(KEY);

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(0)
  , $find   = __webpack_require__(35)(5)
  , KEY     = 'find'
  , forced  = true;
// Shouldn't skip holes
if(KEY in [])Array(1)[KEY](function(){ forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn/*, that = undefined */){
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(26)(KEY);

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var ctx         = __webpack_require__(16)
  , $export     = __webpack_require__(0)
  , toObject    = __webpack_require__(22)
  , call        = __webpack_require__(77)
  , isArrayIter = __webpack_require__(74)
  , toLength    = __webpack_require__(10)
  , getIterFn   = __webpack_require__(88);
$export($export.S + $export.F * !__webpack_require__(50)(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , $$      = arguments
      , $$len   = $$.length
      , mapfn   = $$len > 1 ? $$[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        result[index] = mapping ? mapfn(O[index], index) : O[index];
      }
    }
    result.length = index;
    return result;
  }
});


/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);

// WebKit Array.of isn't generic
$export($export.S + $export.F * __webpack_require__(7)(function(){
  function F(){}
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */){
    var index  = 0
      , $$     = arguments
      , $$len  = $$.length
      , result = new (typeof this == 'function' ? this : Array)($$len);
    while($$len > index)result[index] = $$[index++];
    result.length = $$len;
    return result;
  }
});

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(42)('Array');

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var $             = __webpack_require__(1)
  , isObject      = __webpack_require__(2)
  , HAS_INSTANCE  = __webpack_require__(4)('hasInstance')
  , FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if(!(HAS_INSTANCE in FunctionProto))$.setDesc(FunctionProto, HAS_INSTANCE, {value: function(O){
  if(typeof this != 'function' || !isObject(O))return false;
  if(!isObject(this.prototype))return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while(O = $.getProto(O))if(this.prototype === O)return true;
  return false;
}});

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

var setDesc    = __webpack_require__(1).setDesc
  , createDesc = __webpack_require__(24)
  , has        = __webpack_require__(9)
  , FProto     = Function.prototype
  , nameRE     = /^\s*function ([^ (]*)/
  , NAME       = 'name';
// 19.2.4.2 name
NAME in FProto || __webpack_require__(12) && setDesc(FProto, NAME, {
  configurable: true,
  get: function(){
    var match = ('' + this).match(nameRE)
      , name  = match ? match[1] : '';
    has(this, NAME) || setDesc(this, NAME, createDesc(5, name));
    return name;
  }
});

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(67);

// 23.1 Map Objects
__webpack_require__(37)('Map', function(get){
  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key){
    var entry = strong.getEntry(this, key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value){
    return strong.def(this, key === 0 ? 0 : key, value);
  }
}, strong, true);

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

// 20.2.2.3 Math.acosh(x)
var $export = __webpack_require__(0)
  , log1p   = __webpack_require__(80)
  , sqrt    = Math.sqrt
  , $acosh  = Math.acosh;

// V8 bug https://code.google.com/p/v8/issues/detail?id=3509
$export($export.S + $export.F * !($acosh && Math.floor($acosh(Number.MAX_VALUE)) == 710), 'Math', {
  acosh: function acosh(x){
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

// 20.2.2.5 Math.asinh(x)
var $export = __webpack_require__(0);

function asinh(x){
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

$export($export.S, 'Math', {asinh: asinh});

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

// 20.2.2.7 Math.atanh(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  atanh: function atanh(x){
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

// 20.2.2.9 Math.cbrt(x)
var $export = __webpack_require__(0)
  , sign    = __webpack_require__(53);

$export($export.S, 'Math', {
  cbrt: function cbrt(x){
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

// 20.2.2.11 Math.clz32(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  clz32: function clz32(x){
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

// 20.2.2.12 Math.cosh(x)
var $export = __webpack_require__(0)
  , exp     = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x){
    return (exp(x = +x) + exp(-x)) / 2;
  }
});

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

// 20.2.2.14 Math.expm1(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {expm1: __webpack_require__(52)});

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

// 20.2.2.16 Math.fround(x)
var $export   = __webpack_require__(0)
  , sign      = __webpack_require__(53)
  , pow       = Math.pow
  , EPSILON   = pow(2, -52)
  , EPSILON32 = pow(2, -23)
  , MAX32     = pow(2, 127) * (2 - EPSILON32)
  , MIN32     = pow(2, -126);

var roundTiesToEven = function(n){
  return n + 1 / EPSILON - 1 / EPSILON;
};


$export($export.S, 'Math', {
  fround: function fround(x){
    var $abs  = Math.abs(x)
      , $sign = sign(x)
      , a, result;
    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
    a = (1 + EPSILON32 / EPSILON) * $abs;
    result = a - (a - $abs);
    if(result > MAX32 || result != result)return $sign * Infinity;
    return $sign * result;
  }
});

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = __webpack_require__(0)
  , abs     = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
    var sum   = 0
      , i     = 0
      , $$    = arguments
      , $$len = $$.length
      , larg  = 0
      , arg, div;
    while(i < $$len){
      arg = abs($$[i++]);
      if(larg < arg){
        div  = larg / arg;
        sum  = sum * div * div + 1;
        larg = arg;
      } else if(arg > 0){
        div  = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

// 20.2.2.18 Math.imul(x, y)
var $export = __webpack_require__(0)
  , $imul   = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * __webpack_require__(7)(function(){
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y){
    var UINT16 = 0xffff
      , xn = +x
      , yn = +y
      , xl = UINT16 & xn
      , yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

// 20.2.2.21 Math.log10(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  log10: function log10(x){
    return Math.log(x) / Math.LN10;
  }
});

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

// 20.2.2.20 Math.log1p(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {log1p: __webpack_require__(80)});

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

// 20.2.2.22 Math.log2(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  log2: function log2(x){
    return Math.log(x) / Math.LN2;
  }
});

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {sign: __webpack_require__(53)});

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

// 20.2.2.30 Math.sinh(x)
var $export = __webpack_require__(0)
  , expm1   = __webpack_require__(52)
  , exp     = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * __webpack_require__(7)(function(){
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x){
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

// 20.2.2.33 Math.tanh(x)
var $export = __webpack_require__(0)
  , expm1   = __webpack_require__(52)
  , exp     = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x){
    var a = expm1(x = +x)
      , b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

// 20.2.2.34 Math.trunc(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  trunc: function trunc(it){
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var $           = __webpack_require__(1)
  , global      = __webpack_require__(6)
  , has         = __webpack_require__(9)
  , cof         = __webpack_require__(20)
  , toPrimitive = __webpack_require__(153)
  , fails       = __webpack_require__(7)
  , $trim       = __webpack_require__(44).trim
  , NUMBER      = 'Number'
  , $Number     = global[NUMBER]
  , Base        = $Number
  , proto       = $Number.prototype
  // Opera ~12 has broken Object#toString
  , BROKEN_COF  = cof($.create(proto)) == NUMBER
  , TRIM        = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function(argument){
  var it = toPrimitive(argument, false);
  if(typeof it == 'string' && it.length > 2){
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0)
      , third, radix, maxCode;
    if(first === 43 || first === 45){
      third = it.charCodeAt(2);
      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if(first === 48){
      switch(it.charCodeAt(1)){
        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default : return +it;
      }
      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if(code < 48 || code > maxCode)return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
  $Number = function Number(value){
    var it = arguments.length < 1 ? 0 : value
      , that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? new Base(toNumber(it)) : toNumber(it);
  };
  $.each.call(__webpack_require__(12) ? $.getNames(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), function(key){
    if(has(Base, key) && !has($Number, key)){
      $.setDesc($Number, key, $.getDesc(Base, key));
    }
  });
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__(14)(global, NUMBER, $Number);
}

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

// 20.1.2.1 Number.EPSILON
var $export = __webpack_require__(0);

$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

// 20.1.2.2 Number.isFinite(number)
var $export   = __webpack_require__(0)
  , _isFinite = __webpack_require__(6).isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it){
    return typeof it == 'number' && _isFinite(it);
  }
});

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(0);

$export($export.S, 'Number', {isInteger: __webpack_require__(75)});

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(0);

$export($export.S, 'Number', {
  isNaN: function isNaN(number){
    return number != number;
  }
});

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

// 20.1.2.5 Number.isSafeInteger(number)
var $export   = __webpack_require__(0)
  , isInteger = __webpack_require__(75)
  , abs       = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number){
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = __webpack_require__(0);

$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = __webpack_require__(0);

$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

// 20.1.2.12 Number.parseFloat(string)
var $export = __webpack_require__(0);

$export($export.S, 'Number', {parseFloat: parseFloat});

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

// 20.1.2.13 Number.parseInt(string, radix)
var $export = __webpack_require__(0);

$export($export.S, 'Number', {parseInt: parseInt});

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(0);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(148)});

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(2);

__webpack_require__(13)('freeze', function($freeze){
  return function freeze(it){
    return $freeze && isObject(it) ? $freeze(it) : it;
  };
});

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(15);

__webpack_require__(13)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
  return function getOwnPropertyDescriptor(it, key){
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(13)('getOwnPropertyNames', function(){
  return __webpack_require__(72).get;
});

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(22);

__webpack_require__(13)('getPrototypeOf', function($getPrototypeOf){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.11 Object.isExtensible(O)
var isObject = __webpack_require__(2);

__webpack_require__(13)('isExtensible', function($isExtensible){
  return function isExtensible(it){
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.12 Object.isFrozen(O)
var isObject = __webpack_require__(2);

__webpack_require__(13)('isFrozen', function($isFrozen){
  return function isFrozen(it){
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.13 Object.isSealed(O)
var isObject = __webpack_require__(2);

__webpack_require__(13)('isSealed', function($isSealed){
  return function isSealed(it){
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.3.10 Object.is(value1, value2)
var $export = __webpack_require__(0);
$export($export.S, 'Object', {is: __webpack_require__(83)});

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(22);

__webpack_require__(13)('keys', function($keys){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.15 Object.preventExtensions(O)
var isObject = __webpack_require__(2);

__webpack_require__(13)('preventExtensions', function($preventExtensions){
  return function preventExtensions(it){
    return $preventExtensions && isObject(it) ? $preventExtensions(it) : it;
  };
});

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.17 Object.seal(O)
var isObject = __webpack_require__(2);

__webpack_require__(13)('seal', function($seal){
  return function seal(it){
    return $seal && isObject(it) ? $seal(it) : it;
  };
});

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(0);
$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(54).set});

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(36)
  , test    = {};
test[__webpack_require__(4)('toStringTag')] = 'z';
if(test + '' != '[object z]'){
  __webpack_require__(14)(Object.prototype, 'toString', function toString(){
    return '[object ' + classof(this) + ']';
  }, true);
}

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var $          = __webpack_require__(1)
  , LIBRARY    = __webpack_require__(51)
  , global     = __webpack_require__(6)
  , ctx        = __webpack_require__(16)
  , classof    = __webpack_require__(36)
  , $export    = __webpack_require__(0)
  , isObject   = __webpack_require__(2)
  , anObject   = __webpack_require__(3)
  , aFunction  = __webpack_require__(25)
  , strictNew  = __webpack_require__(43)
  , forOf      = __webpack_require__(30)
  , setProto   = __webpack_require__(54).set
  , same       = __webpack_require__(83)
  , SPECIES    = __webpack_require__(4)('species')
  , speciesConstructor = __webpack_require__(152)
  , asap       = __webpack_require__(147)
  , PROMISE    = 'Promise'
  , process    = global.process
  , isNode     = classof(process) == 'process'
  , P          = global[PROMISE]
  , Wrapper;

var testResolve = function(sub){
  var test = new P(function(){});
  if(sub)test.constructor = Object;
  return P.resolve(test) === test;
};

var USE_NATIVE = function(){
  var works = false;
  function P2(x){
    var self = new P(x);
    setProto(self, P2.prototype);
    return self;
  }
  try {
    works = P && P.resolve && testResolve();
    setProto(P2, P);
    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
    // actual Firefox has broken subclass support, test that
    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
      works = false;
    }
    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
    if(works && __webpack_require__(12)){
      var thenableThenGotten = false;
      P.resolve($.setDesc({}, 'then', {
        get: function(){ thenableThenGotten = true; }
      }));
      works = thenableThenGotten;
    }
  } catch(e){ works = false; }
  return works;
}();

// helpers
var sameConstructor = function(a, b){
  // library wrapper special case
  if(LIBRARY && a === P && b === Wrapper)return true;
  return same(a, b);
};
var getConstructor = function(C){
  var S = anObject(C)[SPECIES];
  return S != undefined ? S : C;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var PromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve),
  this.reject  = aFunction(reject)
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(record, isReject){
  if(record.n)return;
  record.n = true;
  var chain = record.c;
  asap(function(){
    var value = record.v
      , ok    = record.s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , result, then;
      try {
        if(handler){
          if(!ok)record.h = true;
          result = handler === true ? value : handler(value);
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    chain.length = 0;
    record.n = false;
    if(isReject)setTimeout(function(){
      var promise = record.p
        , handler, console;
      if(isUnhandled(promise)){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      } record.a = undefined;
    }, 1);
  });
};
var isUnhandled = function(promise){
  var record = promise._d
    , chain  = record.a || record.c
    , i      = 0
    , reaction;
  if(record.h)return false;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var $reject = function(value){
  var record = this;
  if(record.d)return;
  record.d = true;
  record = record.r || record; // unwrap
  record.v = value;
  record.s = 2;
  record.a = record.c.slice();
  notify(record, true);
};
var $resolve = function(value){
  var record = this
    , then;
  if(record.d)return;
  record.d = true;
  record = record.r || record; // unwrap
  try {
    if(record.p === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      asap(function(){
        var wrapper = {r: record, d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      record.v = value;
      record.s = 1;
      notify(record, false);
    }
  } catch(e){
    $reject.call({r: record, d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  P = function Promise(executor){
    aFunction(executor);
    var record = this._d = {
      p: strictNew(this, P, PROMISE),         // <- promise
      c: [],                                  // <- awaiting reactions
      a: undefined,                           // <- checked in isUnhandled reactions
      s: 0,                                   // <- state
      d: false,                               // <- done
      v: undefined,                           // <- value
      h: false,                               // <- handled rejection
      n: false                                // <- notify
    };
    try {
      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
    } catch(err){
      $reject.call(record, err);
    }
  };
  __webpack_require__(41)(P.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction = new PromiseCapability(speciesConstructor(this, P))
        , promise  = reaction.promise
        , record   = this._d;
      reaction.ok   = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      record.c.push(reaction);
      if(record.a)record.a.push(reaction);
      if(record.s)notify(record, false);
      return promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
__webpack_require__(32)(P, PROMISE);
__webpack_require__(42)(PROMISE);
Wrapper = __webpack_require__(21)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = new PromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof P && sameConstructor(x.constructor, this))return x;
    var capability = new PromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(50)(function(iter){
  P.all(iter)['catch'](function(){});
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = getConstructor(this)
      , capability = new PromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject
      , values     = [];
    var abrupt = perform(function(){
      forOf(iterable, false, values.push, values);
      var remaining = values.length
        , results   = Array(remaining);
      if(remaining)$.each.call(values, function(promise, index){
        var alreadyCalled = false;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled = true;
          results[index] = value;
          --remaining || resolve(results);
        }, reject);
      });
      else resolve(results);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = getConstructor(this)
      , capability = new PromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = __webpack_require__(0)
  , _apply  = Function.apply;

$export($export.S, 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList){
    return _apply.call(target, thisArgument, argumentsList);
  }
});

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $         = __webpack_require__(1)
  , $export   = __webpack_require__(0)
  , aFunction = __webpack_require__(25)
  , anObject  = __webpack_require__(3)
  , isObject  = __webpack_require__(2)
  , bind      = Function.bind || __webpack_require__(21).Function.prototype.bind;

// MS Edge supports only 2 arguments
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
$export($export.S + $export.F * __webpack_require__(7)(function(){
  function F(){}
  return !(Reflect.construct(function(){}, [], F) instanceof F);
}), 'Reflect', {
  construct: function construct(Target, args /*, newTarget*/){
    aFunction(Target);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if(Target == newTarget){
      // w/o altered newTarget, optimization for 0-4 arguments
      if(args != undefined)switch(anObject(args).length){
        case 0: return new Target;
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args));
    }
    // with altered newTarget, not support built-in constructors
    var proto    = newTarget.prototype
      , instance = $.create(isObject(proto) ? proto : Object.prototype)
      , result   = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var $        = __webpack_require__(1)
  , $export  = __webpack_require__(0)
  , anObject = __webpack_require__(3);

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * __webpack_require__(7)(function(){
  Reflect.defineProperty($.setDesc({}, 1, {value: 1}), 1, {value: 2});
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes){
    anObject(target);
    try {
      $.setDesc(target, propertyKey, attributes);
      return true;
    } catch(e){
      return false;
    }
  }
});

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export  = __webpack_require__(0)
  , getDesc  = __webpack_require__(1).getDesc
  , anObject = __webpack_require__(3);

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey){
    var desc = getDesc(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

// 26.1.5 Reflect.enumerate(target)
var $export  = __webpack_require__(0)
  , anObject = __webpack_require__(3);
var Enumerate = function(iterated){
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = []       // keys
    , key;
  for(key in iterated)keys.push(key);
};
__webpack_require__(78)(Enumerate, 'Object', function(){
  var that = this
    , keys = that._k
    , key;
  do {
    if(that._i >= keys.length)return {value: undefined, done: true};
  } while(!((key = keys[that._i++]) in that._t));
  return {value: key, done: false};
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target){
    return new Enumerate(target);
  }
});

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var $        = __webpack_require__(1)
  , $export  = __webpack_require__(0)
  , anObject = __webpack_require__(3);

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
    return $.getDesc(anObject(target), propertyKey);
  }
});

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export  = __webpack_require__(0)
  , getProto = __webpack_require__(1).getProto
  , anObject = __webpack_require__(3);

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target){
    return getProto(anObject(target));
  }
});

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var $        = __webpack_require__(1)
  , has      = __webpack_require__(9)
  , $export  = __webpack_require__(0)
  , isObject = __webpack_require__(2)
  , anObject = __webpack_require__(3);

function get(target, propertyKey/*, receiver*/){
  var receiver = arguments.length < 3 ? target : arguments[2]
    , desc, proto;
  if(anObject(target) === receiver)return target[propertyKey];
  if(desc = $.getDesc(target, propertyKey))return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if(isObject(proto = $.getProto(target)))return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', {get: get});

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__(0);

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey){
    return propertyKey in target;
  }
});

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

// 26.1.10 Reflect.isExtensible(target)
var $export       = __webpack_require__(0)
  , anObject      = __webpack_require__(3)
  , $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target){
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(0);

$export($export.S, 'Reflect', {ownKeys: __webpack_require__(82)});

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

// 26.1.12 Reflect.preventExtensions(target)
var $export            = __webpack_require__(0)
  , anObject           = __webpack_require__(3)
  , $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target){
    anObject(target);
    try {
      if($preventExtensions)$preventExtensions(target);
      return true;
    } catch(e){
      return false;
    }
  }
});

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export  = __webpack_require__(0)
  , setProto = __webpack_require__(54);

if(setProto)$export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto){
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch(e){
      return false;
    }
  }
});

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var $          = __webpack_require__(1)
  , has        = __webpack_require__(9)
  , $export    = __webpack_require__(0)
  , createDesc = __webpack_require__(24)
  , anObject   = __webpack_require__(3)
  , isObject   = __webpack_require__(2);

function set(target, propertyKey, V/*, receiver*/){
  var receiver = arguments.length < 4 ? target : arguments[3]
    , ownDesc  = $.getDesc(anObject(target), propertyKey)
    , existingDescriptor, proto;
  if(!ownDesc){
    if(isObject(proto = $.getProto(target))){
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if(has(ownDesc, 'value')){
    if(ownDesc.writable === false || !isObject(receiver))return false;
    existingDescriptor = $.getDesc(receiver, propertyKey) || createDesc(0);
    existingDescriptor.value = V;
    $.setDesc(receiver, propertyKey, existingDescriptor);
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', {set: set});

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

var $        = __webpack_require__(1)
  , global   = __webpack_require__(6)
  , isRegExp = __webpack_require__(76)
  , $flags   = __webpack_require__(71)
  , $RegExp  = global.RegExp
  , Base     = $RegExp
  , proto    = $RegExp.prototype
  , re1      = /a/g
  , re2      = /a/g
  // "new" creates a new object, old webkit buggy here
  , CORRECT_NEW = new $RegExp(re1) !== re1;

if(__webpack_require__(12) && (!CORRECT_NEW || __webpack_require__(7)(function(){
  re2[__webpack_require__(4)('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))){
  $RegExp = function RegExp(p, f){
    var piRE = isRegExp(p)
      , fiU  = f === undefined;
    return !(this instanceof $RegExp) && piRE && p.constructor === $RegExp && fiU ? p
      : CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f);
  };
  $.each.call($.getNames(Base), function(key){
    key in $RegExp || $.setDesc($RegExp, key, {
      configurable: true,
      get: function(){ return Base[key]; },
      set: function(it){ Base[key] = it; }
    });
  });
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__(14)(global, 'RegExp', $RegExp);
}

__webpack_require__(42)('RegExp');

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
var $ = __webpack_require__(1);
if(__webpack_require__(12) && /./g.flags != 'g')$.setDesc(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(71)
});

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

// @@match logic
__webpack_require__(38)('match', 1, function(defined, MATCH){
  // 21.1.3.11 String.prototype.match(regexp)
  return function match(regexp){
    'use strict';
    var O  = defined(this)
      , fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  };
});

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

// @@replace logic
__webpack_require__(38)('replace', 2, function(defined, REPLACE, $replace){
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return function replace(searchValue, replaceValue){
    'use strict';
    var O  = defined(this)
      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  };
});

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

// @@search logic
__webpack_require__(38)('search', 1, function(defined, SEARCH){
  // 21.1.3.15 String.prototype.search(regexp)
  return function search(regexp){
    'use strict';
    var O  = defined(this)
      , fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  };
});

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

// @@split logic
__webpack_require__(38)('split', 2, function(defined, SPLIT, $split){
  // 21.1.3.17 String.prototype.split(separator, limit)
  return function split(separator, limit){
    'use strict';
    var O  = defined(this)
      , fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined
      ? fn.call(separator, O, limit)
      : $split.call(String(O), separator, limit);
  };
});

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(67);

// 23.2 Set Objects
__webpack_require__(37)('Set', function(get){
  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value){
    return strong.def(this, value = value === 0 ? 0 : value, value);
  }
}, strong);

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0)
  , $at     = __webpack_require__(55)(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos){
    return $at(this, pos);
  }
});

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])

var $export   = __webpack_require__(0)
  , toLength  = __webpack_require__(10)
  , context   = __webpack_require__(56)
  , ENDS_WITH = 'endsWith'
  , $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * __webpack_require__(47)(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /*, endPosition = @length */){
    var that = context(this, searchString, ENDS_WITH)
      , $$   = arguments
      , endPosition = $$.length > 1 ? $$[1] : undefined
      , len    = toLength(that.length)
      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
      , search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

var $export        = __webpack_require__(0)
  , toIndex        = __webpack_require__(33)
  , fromCharCode   = String.fromCharCode
  , $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
    var res   = []
      , $$    = arguments
      , $$len = $$.length
      , i     = 0
      , code;
    while($$len > i){
      code = +$$[i++];
      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export  = __webpack_require__(0)
  , context  = __webpack_require__(56)
  , INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(47)(INCLUDES), 'String', {
  includes: function includes(searchString /*, position = 0 */){
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(55)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(49)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

var $export   = __webpack_require__(0)
  , toIObject = __webpack_require__(15)
  , toLength  = __webpack_require__(10);

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite){
    var tpl   = toIObject(callSite.raw)
      , len   = toLength(tpl.length)
      , $$    = arguments
      , $$len = $$.length
      , res   = []
      , i     = 0;
    while(len > i){
      res.push(String(tpl[i++]));
      if(i < $$len)res.push(String($$[i]));
    } return res.join('');
  }
});

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: __webpack_require__(86)
});

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export     = __webpack_require__(0)
  , toLength    = __webpack_require__(10)
  , context     = __webpack_require__(56)
  , STARTS_WITH = 'startsWith'
  , $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__(47)(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /*, position = 0 */){
    var that   = context(this, searchString, STARTS_WITH)
      , $$     = arguments
      , index  = toLength(Math.min($$.length > 1 ? $$[1] : undefined, that.length))
      , search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

// 21.1.3.25 String.prototype.trim()
__webpack_require__(44)('trim', function($trim){
  return function trim(){
    return $trim(this, 3);
  };
});

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var $              = __webpack_require__(1)
  , global         = __webpack_require__(6)
  , has            = __webpack_require__(9)
  , DESCRIPTORS    = __webpack_require__(12)
  , $export        = __webpack_require__(0)
  , redefine       = __webpack_require__(14)
  , $fails         = __webpack_require__(7)
  , shared         = __webpack_require__(84)
  , setToStringTag = __webpack_require__(32)
  , uid            = __webpack_require__(27)
  , wks            = __webpack_require__(4)
  , keyOf          = __webpack_require__(146)
  , $names         = __webpack_require__(72)
  , enumKeys       = __webpack_require__(145)
  , isArray        = __webpack_require__(48)
  , anObject       = __webpack_require__(3)
  , toIObject      = __webpack_require__(15)
  , createDesc     = __webpack_require__(24)
  , getDesc        = $.getDesc
  , setDesc        = $.setDesc
  , _create        = $.create
  , getNames       = $names.get
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , setter         = false
  , HIDDEN         = wks('_hidden')
  , isEnum         = $.isEnum
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , useNative      = typeof $Symbol == 'function'
  , ObjectProto    = Object.prototype;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(setDesc({}, 'a', {
    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = getDesc(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  setDesc(it, key, D);
  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
} : setDesc;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol.prototype);
  sym._k = tag;
  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
    configurable: true,
    set: function(value){
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    }
  });
  return sym;
};

var isSymbol = function(it){
  return typeof it == 'symbol';
};

var $defineProperty = function defineProperty(it, key, D){
  if(D && has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return setDesc(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key);
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
    ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  var D = getDesc(it = toIObject(it), key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = getNames(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
  return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var names  = getNames(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
  return result;
};
var $stringify = function stringify(it){
  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
  var args = [it]
    , i    = 1
    , $$   = arguments
    , replacer, $replacer;
  while($$.length > i)args.push($$[i++]);
  replacer = args[1];
  if(typeof replacer == 'function')$replacer = replacer;
  if($replacer || !isArray(replacer))replacer = function(key, value){
    if($replacer)value = $replacer.call(this, key, value);
    if(!isSymbol(value))return value;
  };
  args[1] = replacer;
  return _stringify.apply($JSON, args);
};
var buggyJSON = $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
});

// 19.4.1.1 Symbol([description])
if(!useNative){
  $Symbol = function Symbol(){
    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
  };
  redefine($Symbol.prototype, 'toString', function toString(){
    return this._k;
  });

  isSymbol = function(it){
    return it instanceof $Symbol;
  };

  $.create     = $create;
  $.isEnum     = $propertyIsEnumerable;
  $.getDesc    = $getOwnPropertyDescriptor;
  $.setDesc    = $defineProperty;
  $.setDescs   = $defineProperties;
  $.getNames   = $names.get = $getOwnPropertyNames;
  $.getSymbols = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(51)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }
}

var symbolStatics = {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    return keyOf(SymbolRegistry, key);
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
};
// 19.4.2.2 Symbol.hasInstance
// 19.4.2.3 Symbol.isConcatSpreadable
// 19.4.2.4 Symbol.iterator
// 19.4.2.6 Symbol.match
// 19.4.2.8 Symbol.replace
// 19.4.2.9 Symbol.search
// 19.4.2.10 Symbol.species
// 19.4.2.11 Symbol.split
// 19.4.2.12 Symbol.toPrimitive
// 19.4.2.13 Symbol.toStringTag
// 19.4.2.14 Symbol.unscopables
$.each.call((
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
  'species,split,toPrimitive,toStringTag,unscopables'
).split(','), function(it){
  var sym = wks(it);
  symbolStatics[it] = useNative ? sym : wrap(sym);
});

setter = true;

$export($export.G + $export.W, {Symbol: $Symbol});

$export($export.S, 'Symbol', symbolStatics);

$export($export.S + $export.F * !useNative, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});

// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var $            = __webpack_require__(1)
  , redefine     = __webpack_require__(14)
  , weak         = __webpack_require__(69)
  , isObject     = __webpack_require__(2)
  , has          = __webpack_require__(9)
  , frozenStore  = weak.frozenStore
  , WEAK         = weak.WEAK
  , isExtensible = Object.isExtensible || isObject
  , tmp          = {};

// 23.3 WeakMap Objects
var $WeakMap = __webpack_require__(37)('WeakMap', function(get){
  return function WeakMap(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key){
    if(isObject(key)){
      if(!isExtensible(key))return frozenStore(this).get(key);
      if(has(key, WEAK))return key[WEAK][this._i];
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value){
    return weak.def(this, key, value);
  }
}, weak, true, true);

// IE11 WeakMap frozen keys fix
if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
  $.each.call(['delete', 'has', 'get', 'set'], function(key){
    var proto  = $WeakMap.prototype
      , method = proto[key];
    redefine(proto, key, function(a, b){
      // store frozen objects on leaky map
      if(isObject(a) && !isExtensible(a)){
        var result = frozenStore(this)[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var weak = __webpack_require__(69);

// 23.4 WeakSet Objects
__webpack_require__(37)('WeakSet', function(get){
  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value){
    return weak.def(this, value, true);
  }
}, weak, false, true);

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var $export   = __webpack_require__(0)
  , $includes = __webpack_require__(66)(true);

$export($export.P, 'Array', {
  // https://github.com/domenic/Array.prototype.includes
  includes: function includes(el /*, fromIndex = 0 */){
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(26)('includes');

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = __webpack_require__(0);

$export($export.P, 'Map', {toJSON: __webpack_require__(68)('Map')});

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

// http://goo.gl/XkBrjD
var $export  = __webpack_require__(0)
  , $entries = __webpack_require__(81)(true);

$export($export.S, 'Object', {
  entries: function entries(it){
    return $entries(it);
  }
});

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

// https://gist.github.com/WebReflection/9353781
var $          = __webpack_require__(1)
  , $export    = __webpack_require__(0)
  , ownKeys    = __webpack_require__(82)
  , toIObject  = __webpack_require__(15)
  , createDesc = __webpack_require__(24);

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
    var O       = toIObject(object)
      , setDesc = $.setDesc
      , getDesc = $.getDesc
      , keys    = ownKeys(O)
      , result  = {}
      , i       = 0
      , key, D;
    while(keys.length > i){
      D = getDesc(O, key = keys[i++]);
      if(key in result)setDesc(result, key, createDesc(0, D));
      else result[key] = D;
    } return result;
  }
});

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

// http://goo.gl/XkBrjD
var $export = __webpack_require__(0)
  , $values = __webpack_require__(81)(false);

$export($export.S, 'Object', {
  values: function values(it){
    return $values(it);
  }
});

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

// https://github.com/benjamingr/RexExp.escape
var $export = __webpack_require__(0)
  , $re     = __webpack_require__(151)(/[\\^$*+?.()|[\]{}]/g, '\\$&');

$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = __webpack_require__(0);

$export($export.P, 'Set', {toJSON: __webpack_require__(68)('Set')});

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/mathiasbynens/String.prototype.at
var $export = __webpack_require__(0)
  , $at     = __webpack_require__(55)(true);

$export($export.P, 'String', {
  at: function at(pos){
    return $at(this, pos);
  }
});

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0)
  , $pad    = __webpack_require__(85);

$export($export.P, 'String', {
  padLeft: function padLeft(maxLength /*, fillString = ' ' */){
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0)
  , $pad    = __webpack_require__(85);

$export($export.P, 'String', {
  padRight: function padRight(maxLength /*, fillString = ' ' */){
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(44)('trimLeft', function($trim){
  return function trimLeft(){
    return $trim(this, 1);
  };
});

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(44)('trimRight', function($trim){
  return function trimRight(){
    return $trim(this, 2);
  };
});

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

// JavaScript 1.6 / Strawman array statics shim
var $       = __webpack_require__(1)
  , $export = __webpack_require__(0)
  , $ctx    = __webpack_require__(16)
  , $Array  = __webpack_require__(21).Array || Array
  , statics = {};
var setStatics = function(keys, length){
  $.each.call(keys.split(','), function(key){
    if(length == undefined && key in $Array)statics[key] = $Array[key];
    else if(key in [])statics[key] = $ctx(Function.call, [][key], length);
  });
};
setStatics('pop,reverse,shift,keys,values,entries', 1);
setStatics('indexOf,every,some,forEach,map,filter,find,findIndex,includes', 3);
setStatics('join,slice,concat,push,splice,unshift,sort,lastIndexOf,' +
           'reduce,reduceRight,copyWithin,fill');
$export($export.S, 'Array', statics);

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(89);
var global      = __webpack_require__(6)
  , hide        = __webpack_require__(18)
  , Iterators   = __webpack_require__(31)
  , ITERATOR    = __webpack_require__(4)('iterator')
  , NL          = global.NodeList
  , HTC         = global.HTMLCollection
  , NLProto     = NL && NL.prototype
  , HTCProto    = HTC && HTC.prototype
  , ArrayValues = Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
if(NLProto && !NLProto[ITERATOR])hide(NLProto, ITERATOR, ArrayValues);
if(HTCProto && !HTCProto[ITERATOR])hide(HTCProto, ITERATOR, ArrayValues);

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0)
  , $task   = __webpack_require__(87);
$export($export.G + $export.B, {
  setImmediate:   $task.set,
  clearImmediate: $task.clear
});

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

// ie9- setTimeout & setInterval additional parameters fix
var global     = __webpack_require__(6)
  , $export    = __webpack_require__(0)
  , invoke     = __webpack_require__(39)
  , partial    = __webpack_require__(149)
  , navigator  = global.navigator
  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
var wrap = function(set){
  return MSIE ? function(fn, time /*, ...args */){
    return set(invoke(
      partial,
      [].slice.call(arguments, 2),
      typeof fn == 'function' ? fn : Function(fn)
    ), time);
  } : set;
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout:  wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(154);
__webpack_require__(237);
__webpack_require__(192);
__webpack_require__(200);
__webpack_require__(204);
__webpack_require__(205);
__webpack_require__(193);
__webpack_require__(203);
__webpack_require__(202);
__webpack_require__(198);
__webpack_require__(199);
__webpack_require__(197);
__webpack_require__(194);
__webpack_require__(196);
__webpack_require__(201);
__webpack_require__(195);
__webpack_require__(163);
__webpack_require__(162);
__webpack_require__(182);
__webpack_require__(183);
__webpack_require__(184);
__webpack_require__(185);
__webpack_require__(186);
__webpack_require__(187);
__webpack_require__(188);
__webpack_require__(189);
__webpack_require__(190);
__webpack_require__(191);
__webpack_require__(165);
__webpack_require__(166);
__webpack_require__(167);
__webpack_require__(168);
__webpack_require__(169);
__webpack_require__(170);
__webpack_require__(171);
__webpack_require__(172);
__webpack_require__(173);
__webpack_require__(174);
__webpack_require__(175);
__webpack_require__(176);
__webpack_require__(177);
__webpack_require__(178);
__webpack_require__(179);
__webpack_require__(180);
__webpack_require__(181);
__webpack_require__(230);
__webpack_require__(233);
__webpack_require__(236);
__webpack_require__(232);
__webpack_require__(228);
__webpack_require__(229);
__webpack_require__(231);
__webpack_require__(234);
__webpack_require__(235);
__webpack_require__(159);
__webpack_require__(160);
__webpack_require__(89);
__webpack_require__(161);
__webpack_require__(155);
__webpack_require__(156);
__webpack_require__(158);
__webpack_require__(157);
__webpack_require__(221);
__webpack_require__(222);
__webpack_require__(223);
__webpack_require__(224);
__webpack_require__(225);
__webpack_require__(226);
__webpack_require__(206);
__webpack_require__(164);
__webpack_require__(227);
__webpack_require__(238);
__webpack_require__(239);
__webpack_require__(207);
__webpack_require__(208);
__webpack_require__(209);
__webpack_require__(210);
__webpack_require__(211);
__webpack_require__(214);
__webpack_require__(212);
__webpack_require__(213);
__webpack_require__(215);
__webpack_require__(216);
__webpack_require__(217);
__webpack_require__(218);
__webpack_require__(220);
__webpack_require__(219);
__webpack_require__(240);
__webpack_require__(247);
__webpack_require__(248);
__webpack_require__(249);
__webpack_require__(250);
__webpack_require__(251);
__webpack_require__(245);
__webpack_require__(243);
__webpack_require__(244);
__webpack_require__(242);
__webpack_require__(241);
__webpack_require__(246);
__webpack_require__(252);
__webpack_require__(255);
__webpack_require__(254);
__webpack_require__(253);
module.exports = __webpack_require__(21);

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return b64.length * 3 / 4 - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, j, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr(len * 3 / 4 - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ },
/* 258 */
/***/ function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ },
/* 259 */
/***/ function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var JSZipUtils = {};
// just use the responseText with xhr1, response with xhr2.
// The transformation doesn't throw away high-order byte (with responseText)
// because JSZip handles that case. If not used with JSZip, you may need to
// do it, see https://developer.mozilla.org/En/Using_XMLHttpRequest#Handling_binary_data
JSZipUtils._getBinaryFromXHR = function (xhr) {
    // for xhr.responseText, the 0xFF mask is applied by JSZip
    return xhr.response || xhr.responseText;
};

// taken from jQuery
function createStandardXHR() {
    try {
        return new window.XMLHttpRequest();
    } catch( e ) {}
}

function createActiveXHR() {
    try {
        return new window.ActiveXObject("Microsoft.XMLHTTP");
    } catch( e ) {}
}

// Create the request object
var createXHR = window.ActiveXObject ?
    /* Microsoft failed to properly
     * implement the XMLHttpRequest in IE7 (can't request local files),
     * so we use the ActiveXObject when it is available
     * Additionally XMLHttpRequest can be disabled in IE7/IE8 so
     * we need a fallback.
     */
    function() {
    return createStandardXHR() || createActiveXHR();
} :
    // For all other browsers, use the standard XMLHttpRequest object
    createStandardXHR;



JSZipUtils.getBinaryContent = function(path, callback) {
    /*
     * Here is the tricky part : getting the data.
     * In firefox/chrome/opera/... setting the mimeType to 'text/plain; charset=x-user-defined'
     * is enough, the result is in the standard xhr.responseText.
     * cf https://developer.mozilla.org/En/XMLHttpRequest/Using_XMLHttpRequest#Receiving_binary_data_in_older_browsers
     * In IE <= 9, we must use (the IE only) attribute responseBody
     * (for binary data, its content is different from responseText).
     * In IE 10, the 'charset=x-user-defined' trick doesn't work, only the
     * responseType will work :
     * http://msdn.microsoft.com/en-us/library/ie/hh673569%28v=vs.85%29.aspx#Binary_Object_upload_and_download
     *
     * I'd like to use jQuery to avoid this XHR madness, but it doesn't support
     * the responseType attribute : http://bugs.jquery.com/ticket/11461
     */
    try {

        var xhr = createXHR();

        xhr.open('GET', path, true);

        // recent browsers
        if ("responseType" in xhr) {
            xhr.responseType = "arraybuffer";
        }

        // older browser
        if(xhr.overrideMimeType) {
            xhr.overrideMimeType("text/plain; charset=x-user-defined");
        }

        xhr.onreadystatechange = function(evt) {
            var file, err;
            // use `xhr` and not `this`... thanks IE
            if (xhr.readyState === 4) {
                if (xhr.status === 200 || xhr.status === 0) {
                    file = null;
                    err = null;
                    try {
                        file = JSZipUtils._getBinaryFromXHR(xhr);
                    } catch(e) {
                        err = new Error(e);
                    }
                    callback(err, file);
                } else {
                    callback(new Error("Ajax error for " + path + " : " + this.status + " " + this.statusText), null);
                }
            }
        };

        xhr.send();

    } catch (e) {
        callback(new Error(e), null);
    }
};

// export
module.exports = JSZipUtils;

// enforcing Stuk's coding style
// vim: set shiftwidth=4 softtabstop=4:


/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(11);

var table = [
    0x00000000, 0x77073096, 0xEE0E612C, 0x990951BA,
    0x076DC419, 0x706AF48F, 0xE963A535, 0x9E6495A3,
    0x0EDB8832, 0x79DCB8A4, 0xE0D5E91E, 0x97D2D988,
    0x09B64C2B, 0x7EB17CBD, 0xE7B82D07, 0x90BF1D91,
    0x1DB71064, 0x6AB020F2, 0xF3B97148, 0x84BE41DE,
    0x1ADAD47D, 0x6DDDE4EB, 0xF4D4B551, 0x83D385C7,
    0x136C9856, 0x646BA8C0, 0xFD62F97A, 0x8A65C9EC,
    0x14015C4F, 0x63066CD9, 0xFA0F3D63, 0x8D080DF5,
    0x3B6E20C8, 0x4C69105E, 0xD56041E4, 0xA2677172,
    0x3C03E4D1, 0x4B04D447, 0xD20D85FD, 0xA50AB56B,
    0x35B5A8FA, 0x42B2986C, 0xDBBBC9D6, 0xACBCF940,
    0x32D86CE3, 0x45DF5C75, 0xDCD60DCF, 0xABD13D59,
    0x26D930AC, 0x51DE003A, 0xC8D75180, 0xBFD06116,
    0x21B4F4B5, 0x56B3C423, 0xCFBA9599, 0xB8BDA50F,
    0x2802B89E, 0x5F058808, 0xC60CD9B2, 0xB10BE924,
    0x2F6F7C87, 0x58684C11, 0xC1611DAB, 0xB6662D3D,
    0x76DC4190, 0x01DB7106, 0x98D220BC, 0xEFD5102A,
    0x71B18589, 0x06B6B51F, 0x9FBFE4A5, 0xE8B8D433,
    0x7807C9A2, 0x0F00F934, 0x9609A88E, 0xE10E9818,
    0x7F6A0DBB, 0x086D3D2D, 0x91646C97, 0xE6635C01,
    0x6B6B51F4, 0x1C6C6162, 0x856530D8, 0xF262004E,
    0x6C0695ED, 0x1B01A57B, 0x8208F4C1, 0xF50FC457,
    0x65B0D9C6, 0x12B7E950, 0x8BBEB8EA, 0xFCB9887C,
    0x62DD1DDF, 0x15DA2D49, 0x8CD37CF3, 0xFBD44C65,
    0x4DB26158, 0x3AB551CE, 0xA3BC0074, 0xD4BB30E2,
    0x4ADFA541, 0x3DD895D7, 0xA4D1C46D, 0xD3D6F4FB,
    0x4369E96A, 0x346ED9FC, 0xAD678846, 0xDA60B8D0,
    0x44042D73, 0x33031DE5, 0xAA0A4C5F, 0xDD0D7CC9,
    0x5005713C, 0x270241AA, 0xBE0B1010, 0xC90C2086,
    0x5768B525, 0x206F85B3, 0xB966D409, 0xCE61E49F,
    0x5EDEF90E, 0x29D9C998, 0xB0D09822, 0xC7D7A8B4,
    0x59B33D17, 0x2EB40D81, 0xB7BD5C3B, 0xC0BA6CAD,
    0xEDB88320, 0x9ABFB3B6, 0x03B6E20C, 0x74B1D29A,
    0xEAD54739, 0x9DD277AF, 0x04DB2615, 0x73DC1683,
    0xE3630B12, 0x94643B84, 0x0D6D6A3E, 0x7A6A5AA8,
    0xE40ECF0B, 0x9309FF9D, 0x0A00AE27, 0x7D079EB1,
    0xF00F9344, 0x8708A3D2, 0x1E01F268, 0x6906C2FE,
    0xF762575D, 0x806567CB, 0x196C3671, 0x6E6B06E7,
    0xFED41B76, 0x89D32BE0, 0x10DA7A5A, 0x67DD4ACC,
    0xF9B9DF6F, 0x8EBEEFF9, 0x17B7BE43, 0x60B08ED5,
    0xD6D6A3E8, 0xA1D1937E, 0x38D8C2C4, 0x4FDFF252,
    0xD1BB67F1, 0xA6BC5767, 0x3FB506DD, 0x48B2364B,
    0xD80D2BDA, 0xAF0A1B4C, 0x36034AF6, 0x41047A60,
    0xDF60EFC3, 0xA867DF55, 0x316E8EEF, 0x4669BE79,
    0xCB61B38C, 0xBC66831A, 0x256FD2A0, 0x5268E236,
    0xCC0C7795, 0xBB0B4703, 0x220216B9, 0x5505262F,
    0xC5BA3BBE, 0xB2BD0B28, 0x2BB45A92, 0x5CB36A04,
    0xC2D7FFA7, 0xB5D0CF31, 0x2CD99E8B, 0x5BDEAE1D,
    0x9B64C2B0, 0xEC63F226, 0x756AA39C, 0x026D930A,
    0x9C0906A9, 0xEB0E363F, 0x72076785, 0x05005713,
    0x95BF4A82, 0xE2B87A14, 0x7BB12BAE, 0x0CB61B38,
    0x92D28E9B, 0xE5D5BE0D, 0x7CDCEFB7, 0x0BDBDF21,
    0x86D3D2D4, 0xF1D4E242, 0x68DDB3F8, 0x1FDA836E,
    0x81BE16CD, 0xF6B9265B, 0x6FB077E1, 0x18B74777,
    0x88085AE6, 0xFF0F6A70, 0x66063BCA, 0x11010B5C,
    0x8F659EFF, 0xF862AE69, 0x616BFFD3, 0x166CCF45,
    0xA00AE278, 0xD70DD2EE, 0x4E048354, 0x3903B3C2,
    0xA7672661, 0xD06016F7, 0x4969474D, 0x3E6E77DB,
    0xAED16A4A, 0xD9D65ADC, 0x40DF0B66, 0x37D83BF0,
    0xA9BCAE53, 0xDEBB9EC5, 0x47B2CF7F, 0x30B5FFE9,
    0xBDBDF21C, 0xCABAC28A, 0x53B39330, 0x24B4A3A6,
    0xBAD03605, 0xCDD70693, 0x54DE5729, 0x23D967BF,
    0xB3667A2E, 0xC4614AB8, 0x5D681B02, 0x2A6F2B94,
    0xB40BBE37, 0xC30C8EA1, 0x5A05DF1B, 0x2D02EF8D
];

/**
 *
 *  Javascript crc32
 *  http://www.webtoolkit.info/
 *
 */
module.exports = function crc32(input, crc) {
    if (typeof input === "undefined" || !input.length) {
        return 0;
    }

    var isArray = utils.getTypeOf(input) !== "string";

    if (typeof(crc) == "undefined") {
        crc = 0;
    }
    var x = 0;
    var y = 0;
    var b = 0;

    crc = crc ^ (-1);
    for (var i = 0, iTop = input.length; i < iTop; i++) {
        b = isArray ? input[i] : input.charCodeAt(i);
        y = (crc ^ b) & 0xFF;
        x = table[y];
        crc = (crc >>> 8) ^ x;
    }

    return crc ^ (-1);
};
// vim: set shiftwidth=4 softtabstop=4:


/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var utils = __webpack_require__(11);

/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */
exports.string2binary = function(str) {
    return utils.string2binary(str);
};

/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */
exports.string2Uint8Array = function(str) {
    return utils.transformTo("uint8array", str);
};

/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */
exports.uint8Array2String = function(array) {
    return utils.transformTo("string", array);
};

/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */
exports.string2Blob = function(str) {
    var buffer = utils.transformTo("arraybuffer", str);
    return utils.arrayBuffer2Blob(buffer);
};

/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */
exports.arrayBuffer2Blob = function(buffer) {
    return utils.arrayBuffer2Blob(buffer);
};

/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */
exports.transformTo = function(outputType, input) {
    return utils.transformTo(outputType, input);
};

/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */
exports.getTypeOf = function(input) {
    return utils.getTypeOf(input);
};

/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */
exports.checkSupport = function(type) {
    return utils.checkSupport(type);
};

/**
 * @deprecated
 * This value will be removed in a future version without replacement.
 */
exports.MAX_VALUE_16BITS = utils.MAX_VALUE_16BITS;

/**
 * @deprecated
 * This value will be removed in a future version without replacement.
 */
exports.MAX_VALUE_32BITS = utils.MAX_VALUE_32BITS;


/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */
exports.pretty = function(str) {
    return utils.pretty(str);
};

/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */
exports.findCompression = function(compressionMethod) {
    return utils.findCompression(compressionMethod);
};

/**
 * @deprecated
 * This function will be removed in a future version without replacement.
 */
exports.isRegExp = function (object) {
    return utils.isRegExp(object);
};



/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var USE_TYPEDARRAY = (typeof Uint8Array !== 'undefined') && (typeof Uint16Array !== 'undefined') && (typeof Uint32Array !== 'undefined');

var pako = __webpack_require__(271);
exports.uncompressInputType = USE_TYPEDARRAY ? "uint8array" : "array";
exports.compressInputType = USE_TYPEDARRAY ? "uint8array" : "array";

exports.magic = "\x08\x00";
exports.compress = function(input, compressionOptions) {
    return pako.deflateRaw(input, {
        level : compressionOptions.level || -1 // default compression
    });
};
exports.uncompress =  function(input) {
    return pako.inflateRaw(input);
};


/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var base64 = __webpack_require__(57);

/**
Usage:
   zip = new JSZip();
   zip.file("hello.txt", "Hello, World!").file("tempfile", "nothing");
   zip.folder("images").file("smile.gif", base64Data, {base64: true});
   zip.file("Xmas.txt", "Ho ho ho !", {date : new Date("December 25, 2007 00:00:01")});
   zip.remove("tempfile");

   base64zip = zip.generate();

**/

/**
 * Representation a of zip file in js
 * @constructor
 * @param {String=|ArrayBuffer=|Uint8Array=} data the data to load, if any (optional).
 * @param {Object=} options the options for creating this objects (optional).
 */
function JSZip(data, options) {
    // if this constructor is used without `new`, it adds `new` before itself:
    if(!(this instanceof JSZip)) return new JSZip(data, options);

    // object containing the files :
    // {
    //   "folder/" : {...},
    //   "folder/data.txt" : {...}
    // }
    this.files = {};

    this.comment = null;

    // Where we are in the hierarchy
    this.root = "";
    if (data) {
        this.load(data, options);
    }
    this.clone = function() {
        var newObj = new JSZip();
        for (var i in this) {
            if (typeof this[i] !== "function") {
                newObj[i] = this[i];
            }
        }
        return newObj;
    };
}
JSZip.prototype = __webpack_require__(60);
JSZip.prototype.load = __webpack_require__(265);
JSZip.support = __webpack_require__(28);
JSZip.defaults = __webpack_require__(94);

/**
 * @deprecated
 * This namespace will be removed in a future version without replacement.
 */
JSZip.utils = __webpack_require__(262);

JSZip.base64 = {
    /**
     * @deprecated
     * This method will be removed in a future version without replacement.
     */
    encode : function(input) {
        return base64.encode(input);
    },
    /**
     * @deprecated
     * This method will be removed in a future version without replacement.
     */
    decode : function(input) {
        return base64.decode(input);
    }
};
JSZip.compressions = __webpack_require__(58);
module.exports = JSZip;


/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var base64 = __webpack_require__(57);
var utf8 = __webpack_require__(98);
var utils = __webpack_require__(11);
var ZipEntries = __webpack_require__(269);
module.exports = function(data, options) {
    var files, zipEntries, i, input;
    options = utils.extend(options || {}, {
        base64: false,
        checkCRC32: false,
        optimizedBinaryString : false,
        createFolders: false,
        decodeFileName: utf8.utf8decode
    });
    if (options.base64) {
        data = base64.decode(data);
    }

    zipEntries = new ZipEntries(data, options);
    files = zipEntries.files;
    for (i = 0; i < files.length; i++) {
        input = files[i];
        this.file(input.fileNameStr, input.decompressed, {
            binary: true,
            optimizedBinaryString: true,
            date: input.date,
            dir: input.dir,
            comment : input.fileCommentStr.length ? input.fileCommentStr : null,
            unixPermissions : input.unixPermissions,
            dosPermissions : input.dosPermissions,
            createFolders: options.createFolders
        });
    }
    if (zipEntries.zipComment.length) {
        this.comment = zipEntries.zipComment;
    }

    return this;
};


/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var Uint8ArrayReader = __webpack_require__(97);

function NodeBufferReader(data) {
    this.data = data;
    this.length = this.data.length;
    this.index = 0;
    this.zero = 0;
}
NodeBufferReader.prototype = new Uint8ArrayReader();

/**
 * @see DataReader.readData
 */
NodeBufferReader.prototype.readData = function(size) {
    this.checkOffset(size);
    var result = this.data.slice(this.zero + this.index, this.zero + this.index + size);
    this.index += size;
    return result;
};
module.exports = NodeBufferReader;


/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(11);

/**
 * An object to write any content to a string.
 * @constructor
 */
var StringWriter = function() {
    this.data = [];
};
StringWriter.prototype = {
    /**
     * Append any content to the current string.
     * @param {Object} input the content to add.
     */
    append: function(input) {
        input = utils.transformTo("string", input);
        this.data.push(input);
    },
    /**
     * Finalize the construction an return the result.
     * @return {string} the generated string.
     */
    finalize: function() {
        return this.data.join("");
    }
};

module.exports = StringWriter;


/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(11);

/**
 * An object to write any content to an Uint8Array.
 * @constructor
 * @param {number} length The length of the array.
 */
var Uint8ArrayWriter = function(length) {
    this.data = new Uint8Array(length);
    this.index = 0;
};
Uint8ArrayWriter.prototype = {
    /**
     * Append any content to the current array.
     * @param {Object} input the content to add.
     */
    append: function(input) {
        if (input.length !== 0) {
            // with an empty Uint8Array, Opera fails with a "Offset larger than array size"
            input = utils.transformTo("uint8array", input);
            this.data.set(input, this.index);
            this.index += input.length;
        }
    },
    /**
     * Finalize the construction an return the result.
     * @return {Uint8Array} the generated array.
     */
    finalize: function() {
        return this.data;
    }
};

module.exports = Uint8ArrayWriter;


/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var StringReader = __webpack_require__(96);
var NodeBufferReader = __webpack_require__(266);
var Uint8ArrayReader = __webpack_require__(97);
var ArrayReader = __webpack_require__(91);
var utils = __webpack_require__(11);
var sig = __webpack_require__(95);
var ZipEntry = __webpack_require__(270);
var support = __webpack_require__(28);
var jszipProto = __webpack_require__(60);
//  class ZipEntries {{{
/**
 * All the entries in the zip file.
 * @constructor
 * @param {String|ArrayBuffer|Uint8Array} data the binary stream to load.
 * @param {Object} loadOptions Options for loading the stream.
 */
function ZipEntries(data, loadOptions) {
    this.files = [];
    this.loadOptions = loadOptions;
    if (data) {
        this.load(data);
    }
}
ZipEntries.prototype = {
    /**
     * Check that the reader is on the speficied signature.
     * @param {string} expectedSignature the expected signature.
     * @throws {Error} if it is an other signature.
     */
    checkSignature: function(expectedSignature) {
        var signature = this.reader.readString(4);
        if (signature !== expectedSignature) {
            throw new Error("Corrupted zip or bug : unexpected signature " + "(" + utils.pretty(signature) + ", expected " + utils.pretty(expectedSignature) + ")");
        }
    },
    /**
     * Check if the given signature is at the given index.
     * @param {number} askedIndex the index to check.
     * @param {string} expectedSignature the signature to expect.
     * @return {boolean} true if the signature is here, false otherwise.
     */
    isSignature: function(askedIndex, expectedSignature) {
        var currentIndex = this.reader.index;
        this.reader.setIndex(askedIndex);
        var signature = this.reader.readString(4);
        var result = signature === expectedSignature;
        this.reader.setIndex(currentIndex);
        return result;
    },
    /**
     * Read the end of the central directory.
     */
    readBlockEndOfCentral: function() {
        this.diskNumber = this.reader.readInt(2);
        this.diskWithCentralDirStart = this.reader.readInt(2);
        this.centralDirRecordsOnThisDisk = this.reader.readInt(2);
        this.centralDirRecords = this.reader.readInt(2);
        this.centralDirSize = this.reader.readInt(4);
        this.centralDirOffset = this.reader.readInt(4);

        this.zipCommentLength = this.reader.readInt(2);
        // warning : the encoding depends of the system locale
        // On a linux machine with LANG=en_US.utf8, this field is utf8 encoded.
        // On a windows machine, this field is encoded with the localized windows code page.
        var zipComment = this.reader.readData(this.zipCommentLength);
        var decodeParamType = support.uint8array ? "uint8array" : "array";
        // To get consistent behavior with the generation part, we will assume that
        // this is utf8 encoded unless specified otherwise.
        var decodeContent = utils.transformTo(decodeParamType, zipComment);
        this.zipComment = this.loadOptions.decodeFileName(decodeContent);
    },
    /**
     * Read the end of the Zip 64 central directory.
     * Not merged with the method readEndOfCentral :
     * The end of central can coexist with its Zip64 brother,
     * I don't want to read the wrong number of bytes !
     */
    readBlockZip64EndOfCentral: function() {
        this.zip64EndOfCentralSize = this.reader.readInt(8);
        this.versionMadeBy = this.reader.readString(2);
        this.versionNeeded = this.reader.readInt(2);
        this.diskNumber = this.reader.readInt(4);
        this.diskWithCentralDirStart = this.reader.readInt(4);
        this.centralDirRecordsOnThisDisk = this.reader.readInt(8);
        this.centralDirRecords = this.reader.readInt(8);
        this.centralDirSize = this.reader.readInt(8);
        this.centralDirOffset = this.reader.readInt(8);

        this.zip64ExtensibleData = {};
        var extraDataSize = this.zip64EndOfCentralSize - 44,
            index = 0,
            extraFieldId,
            extraFieldLength,
            extraFieldValue;
        while (index < extraDataSize) {
            extraFieldId = this.reader.readInt(2);
            extraFieldLength = this.reader.readInt(4);
            extraFieldValue = this.reader.readString(extraFieldLength);
            this.zip64ExtensibleData[extraFieldId] = {
                id: extraFieldId,
                length: extraFieldLength,
                value: extraFieldValue
            };
        }
    },
    /**
     * Read the end of the Zip 64 central directory locator.
     */
    readBlockZip64EndOfCentralLocator: function() {
        this.diskWithZip64CentralDirStart = this.reader.readInt(4);
        this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8);
        this.disksCount = this.reader.readInt(4);
        if (this.disksCount > 1) {
            throw new Error("Multi-volumes zip are not supported");
        }
    },
    /**
     * Read the local files, based on the offset read in the central part.
     */
    readLocalFiles: function() {
        var i, file;
        for (i = 0; i < this.files.length; i++) {
            file = this.files[i];
            this.reader.setIndex(file.localHeaderOffset);
            this.checkSignature(sig.LOCAL_FILE_HEADER);
            file.readLocalPart(this.reader);
            file.handleUTF8();
            file.processAttributes();
        }
    },
    /**
     * Read the central directory.
     */
    readCentralDir: function() {
        var file;

        this.reader.setIndex(this.centralDirOffset);
        while (this.reader.readString(4) === sig.CENTRAL_FILE_HEADER) {
            file = new ZipEntry({
                zip64: this.zip64
            }, this.loadOptions);
            file.readCentralPart(this.reader);
            this.files.push(file);
        }

        if (this.centralDirRecords !== this.files.length) {
            if (this.centralDirRecords !== 0 && this.files.length === 0) {
                // We expected some records but couldn't find ANY.
                // This is really suspicious, as if something went wrong.
                throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
            } else {
                // We found some records but not all.
                // Something is wrong but we got something for the user: no error here.
                // console.warn("expected", this.centralDirRecords, "records in central dir, got", this.files.length);
            }
        }
    },
    /**
     * Read the end of central directory.
     */
    readEndOfCentral: function() {
        var offset = this.reader.lastIndexOfSignature(sig.CENTRAL_DIRECTORY_END);
        if (offset < 0) {
            // Check if the content is a truncated zip or complete garbage.
            // A "LOCAL_FILE_HEADER" is not required at the beginning (auto
            // extractible zip for example) but it can give a good hint.
            // If an ajax request was used without responseType, we will also
            // get unreadable data.
            var isGarbage = !this.isSignature(0, sig.LOCAL_FILE_HEADER);

            if (isGarbage) {
                throw new Error("Can't find end of central directory : is this a zip file ? " +
                                "If it is, see http://stuk.github.io/jszip/documentation/howto/read_zip.html");
            } else {
                throw new Error("Corrupted zip : can't find end of central directory");
            }
        }
        this.reader.setIndex(offset);
        var endOfCentralDirOffset = offset;
        this.checkSignature(sig.CENTRAL_DIRECTORY_END);
        this.readBlockEndOfCentral();


        /* extract from the zip spec :
            4)  If one of the fields in the end of central directory
                record is too small to hold required data, the field
                should be set to -1 (0xFFFF or 0xFFFFFFFF) and the
                ZIP64 format record should be created.
            5)  The end of central directory record and the
                Zip64 end of central directory locator record must
                reside on the same disk when splitting or spanning
                an archive.
         */
        if (this.diskNumber === utils.MAX_VALUE_16BITS || this.diskWithCentralDirStart === utils.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === utils.MAX_VALUE_16BITS || this.centralDirRecords === utils.MAX_VALUE_16BITS || this.centralDirSize === utils.MAX_VALUE_32BITS || this.centralDirOffset === utils.MAX_VALUE_32BITS) {
            this.zip64 = true;

            /*
            Warning : the zip64 extension is supported, but ONLY if the 64bits integer read from
            the zip file can fit into a 32bits integer. This cannot be solved : Javascript represents
            all numbers as 64-bit double precision IEEE 754 floating point numbers.
            So, we have 53bits for integers and bitwise operations treat everything as 32bits.
            see https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/Bitwise_Operators
            and http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf section 8.5
            */

            // should look for a zip64 EOCD locator
            offset = this.reader.lastIndexOfSignature(sig.ZIP64_CENTRAL_DIRECTORY_LOCATOR);
            if (offset < 0) {
                throw new Error("Corrupted zip : can't find the ZIP64 end of central directory locator");
            }
            this.reader.setIndex(offset);
            this.checkSignature(sig.ZIP64_CENTRAL_DIRECTORY_LOCATOR);
            this.readBlockZip64EndOfCentralLocator();

            // now the zip64 EOCD record
            if (!this.isSignature(this.relativeOffsetEndOfZip64CentralDir, sig.ZIP64_CENTRAL_DIRECTORY_END)) {
                // console.warn("ZIP64 end of central directory not where expected.");
                this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(sig.ZIP64_CENTRAL_DIRECTORY_END);
                if (this.relativeOffsetEndOfZip64CentralDir < 0) {
                    throw new Error("Corrupted zip : can't find the ZIP64 end of central directory");
                }
            }
            this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir);
            this.checkSignature(sig.ZIP64_CENTRAL_DIRECTORY_END);
            this.readBlockZip64EndOfCentral();
        }

        var expectedEndOfCentralDirOffset = this.centralDirOffset + this.centralDirSize;
        if (this.zip64) {
            expectedEndOfCentralDirOffset += 20; // end of central dir 64 locator
            expectedEndOfCentralDirOffset += 12 /* should not include the leading 12 bytes */ + this.zip64EndOfCentralSize;
        }

        var extraBytes = endOfCentralDirOffset - expectedEndOfCentralDirOffset;

        if (extraBytes > 0) {
            // console.warn(extraBytes, "extra bytes at beginning or within zipfile");
            if (this.isSignature(endOfCentralDirOffset, sig.CENTRAL_FILE_HEADER)) {
                // The offsets seem wrong, but we have something at the specified offset.
                // So… we keep it.
            } else {
                // the offset is wrong, update the "zero" of the reader
                // this happens if data has been prepended (crx files for example)
                this.reader.zero = extraBytes;
            }
        } else if (extraBytes < 0) {
            throw new Error("Corrupted zip: missing " + Math.abs(extraBytes) + " bytes.");
        }
    },
    prepareReader: function(data) {
        var type = utils.getTypeOf(data);
        utils.checkSupport(type);
        if (type === "string" && !support.uint8array) {
            this.reader = new StringReader(data, this.loadOptions.optimizedBinaryString);
        }
        else if (type === "nodebuffer") {
            this.reader = new NodeBufferReader(data);
        }
        else if (support.uint8array) {
            this.reader = new Uint8ArrayReader(utils.transformTo("uint8array", data));
        } else if (support.array) {
            this.reader = new ArrayReader(utils.transformTo("array", data));
        } else {
            throw new Error("Unexpected error: unsupported type '" + type + "'");
        }
    },
    /**
     * Read a zip file and create ZipEntries.
     * @param {String|ArrayBuffer|Uint8Array|Buffer} data the binary string representing a zip file.
     */
    load: function(data) {
        this.prepareReader(data);
        this.readEndOfCentral();
        this.readCentralDir();
        this.readLocalFiles();
    }
};
// }}} end of ZipEntries
module.exports = ZipEntries;


/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var StringReader = __webpack_require__(96);
var utils = __webpack_require__(11);
var CompressedObject = __webpack_require__(92);
var jszipProto = __webpack_require__(60);
var support = __webpack_require__(28);

var MADE_BY_DOS = 0x00;
var MADE_BY_UNIX = 0x03;

// class ZipEntry {{{
/**
 * An entry in the zip file.
 * @constructor
 * @param {Object} options Options of the current file.
 * @param {Object} loadOptions Options for loading the stream.
 */
function ZipEntry(options, loadOptions) {
    this.options = options;
    this.loadOptions = loadOptions;
}
ZipEntry.prototype = {
    /**
     * say if the file is encrypted.
     * @return {boolean} true if the file is encrypted, false otherwise.
     */
    isEncrypted: function() {
        // bit 1 is set
        return (this.bitFlag & 0x0001) === 0x0001;
    },
    /**
     * say if the file has utf-8 filename/comment.
     * @return {boolean} true if the filename/comment is in utf-8, false otherwise.
     */
    useUTF8: function() {
        // bit 11 is set
        return (this.bitFlag & 0x0800) === 0x0800;
    },
    /**
     * Prepare the function used to generate the compressed content from this ZipFile.
     * @param {DataReader} reader the reader to use.
     * @param {number} from the offset from where we should read the data.
     * @param {number} length the length of the data to read.
     * @return {Function} the callback to get the compressed content (the type depends of the DataReader class).
     */
    prepareCompressedContent: function(reader, from, length) {
        return function() {
            var previousIndex = reader.index;
            reader.setIndex(from);
            var compressedFileData = reader.readData(length);
            reader.setIndex(previousIndex);

            return compressedFileData;
        };
    },
    /**
     * Prepare the function used to generate the uncompressed content from this ZipFile.
     * @param {DataReader} reader the reader to use.
     * @param {number} from the offset from where we should read the data.
     * @param {number} length the length of the data to read.
     * @param {JSZip.compression} compression the compression used on this file.
     * @param {number} uncompressedSize the uncompressed size to expect.
     * @return {Function} the callback to get the uncompressed content (the type depends of the DataReader class).
     */
    prepareContent: function(reader, from, length, compression, uncompressedSize) {
        return function() {

            var compressedFileData = utils.transformTo(compression.uncompressInputType, this.getCompressedContent());
            var uncompressedFileData = compression.uncompress(compressedFileData);

            if (uncompressedFileData.length !== uncompressedSize) {
                throw new Error("Bug : uncompressed data size mismatch");
            }

            return uncompressedFileData;
        };
    },
    /**
     * Read the local part of a zip file and add the info in this object.
     * @param {DataReader} reader the reader to use.
     */
    readLocalPart: function(reader) {
        var compression, localExtraFieldsLength;

        // we already know everything from the central dir !
        // If the central dir data are false, we are doomed.
        // On the bright side, the local part is scary  : zip64, data descriptors, both, etc.
        // The less data we get here, the more reliable this should be.
        // Let's skip the whole header and dash to the data !
        reader.skip(22);
        // in some zip created on windows, the filename stored in the central dir contains \ instead of /.
        // Strangely, the filename here is OK.
        // I would love to treat these zip files as corrupted (see http://www.info-zip.org/FAQ.html#backslashes
        // or APPNOTE#4.4.17.1, "All slashes MUST be forward slashes '/'") but there are a lot of bad zip generators...
        // Search "unzip mismatching "local" filename continuing with "central" filename version" on
        // the internet.
        //
        // I think I see the logic here : the central directory is used to display
        // content and the local directory is used to extract the files. Mixing / and \
        // may be used to display \ to windows users and use / when extracting the files.
        // Unfortunately, this lead also to some issues : http://seclists.org/fulldisclosure/2009/Sep/394
        this.fileNameLength = reader.readInt(2);
        localExtraFieldsLength = reader.readInt(2); // can't be sure this will be the same as the central dir
        this.fileName = reader.readData(this.fileNameLength);
        reader.skip(localExtraFieldsLength);

        if (this.compressedSize == -1 || this.uncompressedSize == -1) {
            throw new Error("Bug or corrupted zip : didn't get enough informations from the central directory " + "(compressedSize == -1 || uncompressedSize == -1)");
        }

        compression = utils.findCompression(this.compressionMethod);
        if (compression === null) { // no compression found
            throw new Error("Corrupted zip : compression " + utils.pretty(this.compressionMethod) + " unknown (inner file : " +  utils.transformTo("string", this.fileName) + ")");
        }
        this.decompressed = new CompressedObject();
        this.decompressed.compressedSize = this.compressedSize;
        this.decompressed.uncompressedSize = this.uncompressedSize;
        this.decompressed.crc32 = this.crc32;
        this.decompressed.compressionMethod = this.compressionMethod;
        this.decompressed.getCompressedContent = this.prepareCompressedContent(reader, reader.index, this.compressedSize, compression);
        this.decompressed.getContent = this.prepareContent(reader, reader.index, this.compressedSize, compression, this.uncompressedSize);

        // we need to compute the crc32...
        if (this.loadOptions.checkCRC32) {
            this.decompressed = utils.transformTo("string", this.decompressed.getContent());
            if (jszipProto.crc32(this.decompressed) !== this.crc32) {
                throw new Error("Corrupted zip : CRC32 mismatch");
            }
        }
    },

    /**
     * Read the central part of a zip file and add the info in this object.
     * @param {DataReader} reader the reader to use.
     */
    readCentralPart: function(reader) {
        this.versionMadeBy = reader.readInt(2);
        this.versionNeeded = reader.readInt(2);
        this.bitFlag = reader.readInt(2);
        this.compressionMethod = reader.readString(2);
        this.date = reader.readDate();
        this.crc32 = reader.readInt(4);
        this.compressedSize = reader.readInt(4);
        this.uncompressedSize = reader.readInt(4);
        this.fileNameLength = reader.readInt(2);
        this.extraFieldsLength = reader.readInt(2);
        this.fileCommentLength = reader.readInt(2);
        this.diskNumberStart = reader.readInt(2);
        this.internalFileAttributes = reader.readInt(2);
        this.externalFileAttributes = reader.readInt(4);
        this.localHeaderOffset = reader.readInt(4);

        if (this.isEncrypted()) {
            throw new Error("Encrypted zip are not supported");
        }

        this.fileName = reader.readData(this.fileNameLength);
        this.readExtraFields(reader);
        this.parseZIP64ExtraField(reader);
        this.fileComment = reader.readData(this.fileCommentLength);
    },

    /**
     * Parse the external file attributes and get the unix/dos permissions.
     */
    processAttributes: function () {
        this.unixPermissions = null;
        this.dosPermissions = null;
        var madeBy = this.versionMadeBy >> 8;

        // Check if we have the DOS directory flag set.
        // We look for it in the DOS and UNIX permissions
        // but some unknown platform could set it as a compatibility flag.
        this.dir = this.externalFileAttributes & 0x0010 ? true : false;

        if(madeBy === MADE_BY_DOS) {
            // first 6 bits (0 to 5)
            this.dosPermissions = this.externalFileAttributes & 0x3F;
        }

        if(madeBy === MADE_BY_UNIX) {
            this.unixPermissions = (this.externalFileAttributes >> 16) & 0xFFFF;
            // the octal permissions are in (this.unixPermissions & 0x01FF).toString(8);
        }

        // fail safe : if the name ends with a / it probably means a folder
        if (!this.dir && this.fileNameStr.slice(-1) === '/') {
            this.dir = true;
        }
    },

    /**
     * Parse the ZIP64 extra field and merge the info in the current ZipEntry.
     * @param {DataReader} reader the reader to use.
     */
    parseZIP64ExtraField: function(reader) {

        if (!this.extraFields[0x0001]) {
            return;
        }

        // should be something, preparing the extra reader
        var extraReader = new StringReader(this.extraFields[0x0001].value);

        // I really hope that these 64bits integer can fit in 32 bits integer, because js
        // won't let us have more.
        if (this.uncompressedSize === utils.MAX_VALUE_32BITS) {
            this.uncompressedSize = extraReader.readInt(8);
        }
        if (this.compressedSize === utils.MAX_VALUE_32BITS) {
            this.compressedSize = extraReader.readInt(8);
        }
        if (this.localHeaderOffset === utils.MAX_VALUE_32BITS) {
            this.localHeaderOffset = extraReader.readInt(8);
        }
        if (this.diskNumberStart === utils.MAX_VALUE_32BITS) {
            this.diskNumberStart = extraReader.readInt(4);
        }
    },
    /**
     * Read the central part of a zip file and add the info in this object.
     * @param {DataReader} reader the reader to use.
     */
    readExtraFields: function(reader) {
        var start = reader.index,
            extraFieldId,
            extraFieldLength,
            extraFieldValue;

        this.extraFields = this.extraFields || {};

        while (reader.index < start + this.extraFieldsLength) {
            extraFieldId = reader.readInt(2);
            extraFieldLength = reader.readInt(2);
            extraFieldValue = reader.readString(extraFieldLength);

            this.extraFields[extraFieldId] = {
                id: extraFieldId,
                length: extraFieldLength,
                value: extraFieldValue
            };
        }
    },
    /**
     * Apply an UTF8 transformation if needed.
     */
    handleUTF8: function() {
        var decodeParamType = support.uint8array ? "uint8array" : "array";
        if (this.useUTF8()) {
            this.fileNameStr = jszipProto.utf8decode(this.fileName);
            this.fileCommentStr = jszipProto.utf8decode(this.fileComment);
        } else {
            var upath = this.findExtraFieldUnicodePath();
            if (upath !== null) {
                this.fileNameStr = upath;
            } else {
                var fileNameByteArray =  utils.transformTo(decodeParamType, this.fileName);
                this.fileNameStr = this.loadOptions.decodeFileName(fileNameByteArray);
            }

            var ucomment = this.findExtraFieldUnicodeComment();
            if (ucomment !== null) {
                this.fileCommentStr = ucomment;
            } else {
                var commentByteArray =  utils.transformTo(decodeParamType, this.fileComment);
                this.fileCommentStr = this.loadOptions.decodeFileName(commentByteArray);
            }
        }
    },

    /**
     * Find the unicode path declared in the extra field, if any.
     * @return {String} the unicode path, null otherwise.
     */
    findExtraFieldUnicodePath: function() {
        var upathField = this.extraFields[0x7075];
        if (upathField) {
            var extraReader = new StringReader(upathField.value);

            // wrong version
            if (extraReader.readInt(1) !== 1) {
                return null;
            }

            // the crc of the filename changed, this field is out of date.
            if (jszipProto.crc32(this.fileName) !== extraReader.readInt(4)) {
                return null;
            }

            return jszipProto.utf8decode(extraReader.readString(upathField.length - 5));
        }
        return null;
    },

    /**
     * Find the unicode comment declared in the extra field, if any.
     * @return {String} the unicode comment, null otherwise.
     */
    findExtraFieldUnicodeComment: function() {
        var ucommentField = this.extraFields[0x6375];
        if (ucommentField) {
            var extraReader = new StringReader(ucommentField.value);

            // wrong version
            if (extraReader.readInt(1) !== 1) {
                return null;
            }

            // the crc of the comment changed, this field is out of date.
            if (jszipProto.crc32(this.fileComment) !== extraReader.readInt(4)) {
                return null;
            }

            return jszipProto.utf8decode(extraReader.readString(ucommentField.length - 5));
        }
        return null;
    }
};
module.exports = ZipEntry;


/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
// Top level file is just a mixin of submodules & constants


var assign    = __webpack_require__(23).assign;

var deflate   = __webpack_require__(272);
var inflate   = __webpack_require__(273);
var constants = __webpack_require__(101);

var pako = {};

assign(pako, deflate, inflate, constants);

module.exports = pako;


/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

"use strict";



var zlib_deflate = __webpack_require__(274);
var utils        = __webpack_require__(23);
var strings      = __webpack_require__(99);
var msg          = __webpack_require__(61);
var ZStream      = __webpack_require__(103);

var toString = Object.prototype.toString;

/* Public constants ==========================================================*/
/* ===========================================================================*/

var Z_NO_FLUSH      = 0;
var Z_FINISH        = 4;

var Z_OK            = 0;
var Z_STREAM_END    = 1;
var Z_SYNC_FLUSH    = 2;

var Z_DEFAULT_COMPRESSION = -1;

var Z_DEFAULT_STRATEGY    = 0;

var Z_DEFLATED  = 8;

/* ===========================================================================*/


/**
 * class Deflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[deflate]],
 * [[deflateRaw]] and [[gzip]].
 **/

/* internal
 * Deflate.chunks -> Array
 *
 * Chunks of output data, if [[Deflate#onData]] not overriden.
 **/

/**
 * Deflate.result -> Uint8Array|Array
 *
 * Compressed result, generated by default [[Deflate#onData]]
 * and [[Deflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Deflate#push]] with `Z_FINISH` / `true` param)  or if you
 * push a chunk with explicit flush (call [[Deflate#push]] with
 * `Z_SYNC_FLUSH` param).
 **/

/**
 * Deflate.err -> Number
 *
 * Error code after deflate finished. 0 (Z_OK) on success.
 * You will not need it in real life, because deflate errors
 * are possible only on wrong options or bad `onData` / `onEnd`
 * custom handlers.
 **/

/**
 * Deflate.msg -> String
 *
 * Error message, if [[Deflate.err]] != 0
 **/


/**
 * new Deflate(options)
 * - options (Object): zlib deflate options.
 *
 * Creates new deflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `level`
 * - `windowBits`
 * - `memLevel`
 * - `strategy`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw deflate
 * - `gzip` (Boolean) - create gzip wrapper
 * - `to` (String) - if equal to 'string', then result will be "binary string"
 *    (each char code [0..255])
 * - `header` (Object) - custom header for gzip
 *   - `text` (Boolean) - true if compressed data believed to be text
 *   - `time` (Number) - modification time, unix timestamp
 *   - `os` (Number) - operation system code
 *   - `extra` (Array) - array of bytes with extra data (max 65536)
 *   - `name` (String) - file name (binary string)
 *   - `comment` (String) - comment (binary string)
 *   - `hcrc` (Boolean) - true if header crc should be added
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
 *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * var deflate = new pako.Deflate({ level: 3});
 *
 * deflate.push(chunk1, false);
 * deflate.push(chunk2, true);  // true -> last chunk
 *
 * if (deflate.err) { throw new Error(deflate.err); }
 *
 * console.log(deflate.result);
 * ```
 **/
function Deflate(options) {
  if (!(this instanceof Deflate)) return new Deflate(options);

  this.options = utils.assign({
    level: Z_DEFAULT_COMPRESSION,
    method: Z_DEFLATED,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: Z_DEFAULT_STRATEGY,
    to: ''
  }, options || {});

  var opt = this.options;

  if (opt.raw && (opt.windowBits > 0)) {
    opt.windowBits = -opt.windowBits;
  }

  else if (opt.gzip && (opt.windowBits > 0) && (opt.windowBits < 16)) {
    opt.windowBits += 16;
  }

  this.err    = 0;      // error code, if happens (0 = Z_OK)
  this.msg    = '';     // error message
  this.ended  = false;  // used to avoid multiple onEnd() calls
  this.chunks = [];     // chunks of compressed data

  this.strm = new ZStream();
  this.strm.avail_out = 0;

  var status = zlib_deflate.deflateInit2(
    this.strm,
    opt.level,
    opt.method,
    opt.windowBits,
    opt.memLevel,
    opt.strategy
  );

  if (status !== Z_OK) {
    throw new Error(msg[status]);
  }

  if (opt.header) {
    zlib_deflate.deflateSetHeader(this.strm, opt.header);
  }

  if (opt.dictionary) {
    var dict;
    // Convert data if needed
    if (typeof opt.dictionary === 'string') {
      // If we need to compress text, change encoding to utf8.
      dict = strings.string2buf(opt.dictionary);
    } else if (toString.call(opt.dictionary) === '[object ArrayBuffer]') {
      dict = new Uint8Array(opt.dictionary);
    } else {
      dict = opt.dictionary;
    }

    status = zlib_deflate.deflateSetDictionary(this.strm, dict);

    if (status !== Z_OK) {
      throw new Error(msg[status]);
    }

    this._dict_set = true;
  }
}

/**
 * Deflate#push(data[, mode]) -> Boolean
 * - data (Uint8Array|Array|ArrayBuffer|String): input data. Strings will be
 *   converted to utf8 byte sequence.
 * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
 *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` meansh Z_FINISH.
 *
 * Sends input data to deflate pipe, generating [[Deflate#onData]] calls with
 * new compressed chunks. Returns `true` on success. The last data block must have
 * mode Z_FINISH (or `true`). That will flush internal pending buffers and call
 * [[Deflate#onEnd]]. For interim explicit flushes (without ending the stream) you
 * can use mode Z_SYNC_FLUSH, keeping the compression context.
 *
 * On fail call [[Deflate#onEnd]] with error code and return false.
 *
 * We strongly recommend to use `Uint8Array` on input for best speed (output
 * array format is detected automatically). Also, don't skip last param and always
 * use the same type in your code (boolean or number). That will improve JS speed.
 *
 * For regular `Array`-s make sure all elements are [0..255].
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/
Deflate.prototype.push = function (data, mode) {
  var strm = this.strm;
  var chunkSize = this.options.chunkSize;
  var status, _mode;

  if (this.ended) { return false; }

  _mode = (mode === ~~mode) ? mode : ((mode === true) ? Z_FINISH : Z_NO_FLUSH);

  // Convert data if needed
  if (typeof data === 'string') {
    // If we need to compress text, change encoding to utf8.
    strm.input = strings.string2buf(data);
  } else if (toString.call(data) === '[object ArrayBuffer]') {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }

  strm.next_in = 0;
  strm.avail_in = strm.input.length;

  do {
    if (strm.avail_out === 0) {
      strm.output = new utils.Buf8(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }
    status = zlib_deflate.deflate(strm, _mode);    /* no bad return value */

    if (status !== Z_STREAM_END && status !== Z_OK) {
      this.onEnd(status);
      this.ended = true;
      return false;
    }
    if (strm.avail_out === 0 || (strm.avail_in === 0 && (_mode === Z_FINISH || _mode === Z_SYNC_FLUSH))) {
      if (this.options.to === 'string') {
        this.onData(strings.buf2binstring(utils.shrinkBuf(strm.output, strm.next_out)));
      } else {
        this.onData(utils.shrinkBuf(strm.output, strm.next_out));
      }
    }
  } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== Z_STREAM_END);

  // Finalize on the last chunk.
  if (_mode === Z_FINISH) {
    status = zlib_deflate.deflateEnd(this.strm);
    this.onEnd(status);
    this.ended = true;
    return status === Z_OK;
  }

  // callback interim results if Z_SYNC_FLUSH.
  if (_mode === Z_SYNC_FLUSH) {
    this.onEnd(Z_OK);
    strm.avail_out = 0;
    return true;
  }

  return true;
};


/**
 * Deflate#onData(chunk) -> Void
 * - chunk (Uint8Array|Array|String): ouput data. Type of array depends
 *   on js engine support. When string output requested, each chunk
 *   will be string.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/
Deflate.prototype.onData = function (chunk) {
  this.chunks.push(chunk);
};


/**
 * Deflate#onEnd(status) -> Void
 * - status (Number): deflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called once after you tell deflate that the input stream is
 * complete (Z_FINISH) or should be flushed (Z_SYNC_FLUSH)
 * or if an error happened. By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/
Deflate.prototype.onEnd = function (status) {
  // On success - join
  if (status === Z_OK) {
    if (this.options.to === 'string') {
      this.result = this.chunks.join('');
    } else {
      this.result = utils.flattenChunks(this.chunks);
    }
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};


/**
 * deflate(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * Compress `data` with deflate algorithm and `options`.
 *
 * Supported options are:
 *
 * - level
 * - windowBits
 * - memLevel
 * - strategy
 * - dictionary
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 * - `to` (String) - if equal to 'string', then result will be "binary string"
 *    (each char code [0..255])
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , data = Uint8Array([1,2,3,4,5,6,7,8,9]);
 *
 * console.log(pako.deflate(data));
 * ```
 **/
function deflate(input, options) {
  var deflator = new Deflate(options);

  deflator.push(input, true);

  // That will never happens, if you don't cheat with options :)
  if (deflator.err) { throw deflator.msg || msg[deflator.err]; }

  return deflator.result;
}


/**
 * deflateRaw(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/
function deflateRaw(input, options) {
  options = options || {};
  options.raw = true;
  return deflate(input, options);
}


/**
 * gzip(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but create gzip wrapper instead of
 * deflate one.
 **/
function gzip(input, options) {
  options = options || {};
  options.gzip = true;
  return deflate(input, options);
}


exports.Deflate = Deflate;
exports.deflate = deflate;
exports.deflateRaw = deflateRaw;
exports.gzip = gzip;


/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

"use strict";



var zlib_inflate = __webpack_require__(277);
var utils        = __webpack_require__(23);
var strings      = __webpack_require__(99);
var c            = __webpack_require__(101);
var msg          = __webpack_require__(61);
var ZStream      = __webpack_require__(103);
var GZheader     = __webpack_require__(275);

var toString = Object.prototype.toString;

/**
 * class Inflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[inflate]]
 * and [[inflateRaw]].
 **/

/* internal
 * inflate.chunks -> Array
 *
 * Chunks of output data, if [[Inflate#onData]] not overriden.
 **/

/**
 * Inflate.result -> Uint8Array|Array|String
 *
 * Uncompressed result, generated by default [[Inflate#onData]]
 * and [[Inflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Inflate#push]] with `Z_FINISH` / `true` param) or if you
 * push a chunk with explicit flush (call [[Inflate#push]] with
 * `Z_SYNC_FLUSH` param).
 **/

/**
 * Inflate.err -> Number
 *
 * Error code after inflate finished. 0 (Z_OK) on success.
 * Should be checked if broken data possible.
 **/

/**
 * Inflate.msg -> String
 *
 * Error message, if [[Inflate.err]] != 0
 **/


/**
 * new Inflate(options)
 * - options (Object): zlib inflate options.
 *
 * Creates new inflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `windowBits`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw inflate
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 * By default, when no options set, autodetect deflate/gzip data format via
 * wrapper header.
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
 *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * var inflate = new pako.Inflate({ level: 3});
 *
 * inflate.push(chunk1, false);
 * inflate.push(chunk2, true);  // true -> last chunk
 *
 * if (inflate.err) { throw new Error(inflate.err); }
 *
 * console.log(inflate.result);
 * ```
 **/
function Inflate(options) {
  if (!(this instanceof Inflate)) return new Inflate(options);

  this.options = utils.assign({
    chunkSize: 16384,
    windowBits: 0,
    to: ''
  }, options || {});

  var opt = this.options;

  // Force window size for `raw` data, if not set directly,
  // because we have no header for autodetect.
  if (opt.raw && (opt.windowBits >= 0) && (opt.windowBits < 16)) {
    opt.windowBits = -opt.windowBits;
    if (opt.windowBits === 0) { opt.windowBits = -15; }
  }

  // If `windowBits` not defined (and mode not raw) - set autodetect flag for gzip/deflate
  if ((opt.windowBits >= 0) && (opt.windowBits < 16) &&
      !(options && options.windowBits)) {
    opt.windowBits += 32;
  }

  // Gzip header has no info about windows size, we can do autodetect only
  // for deflate. So, if window size not set, force it to max when gzip possible
  if ((opt.windowBits > 15) && (opt.windowBits < 48)) {
    // bit 3 (16) -> gzipped data
    // bit 4 (32) -> autodetect gzip/deflate
    if ((opt.windowBits & 15) === 0) {
      opt.windowBits |= 15;
    }
  }

  this.err    = 0;      // error code, if happens (0 = Z_OK)
  this.msg    = '';     // error message
  this.ended  = false;  // used to avoid multiple onEnd() calls
  this.chunks = [];     // chunks of compressed data

  this.strm   = new ZStream();
  this.strm.avail_out = 0;

  var status  = zlib_inflate.inflateInit2(
    this.strm,
    opt.windowBits
  );

  if (status !== c.Z_OK) {
    throw new Error(msg[status]);
  }

  this.header = new GZheader();

  zlib_inflate.inflateGetHeader(this.strm, this.header);
}

/**
 * Inflate#push(data[, mode]) -> Boolean
 * - data (Uint8Array|Array|ArrayBuffer|String): input data
 * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
 *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` meansh Z_FINISH.
 *
 * Sends input data to inflate pipe, generating [[Inflate#onData]] calls with
 * new output chunks. Returns `true` on success. The last data block must have
 * mode Z_FINISH (or `true`). That will flush internal pending buffers and call
 * [[Inflate#onEnd]]. For interim explicit flushes (without ending the stream) you
 * can use mode Z_SYNC_FLUSH, keeping the decompression context.
 *
 * On fail call [[Inflate#onEnd]] with error code and return false.
 *
 * We strongly recommend to use `Uint8Array` on input for best speed (output
 * format is detected automatically). Also, don't skip last param and always
 * use the same type in your code (boolean or number). That will improve JS speed.
 *
 * For regular `Array`-s make sure all elements are [0..255].
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/
Inflate.prototype.push = function (data, mode) {
  var strm = this.strm;
  var chunkSize = this.options.chunkSize;
  var dictionary = this.options.dictionary;
  var status, _mode;
  var next_out_utf8, tail, utf8str;
  var dict;

  // Flag to properly process Z_BUF_ERROR on testing inflate call
  // when we check that all output data was flushed.
  var allowBufError = false;

  if (this.ended) { return false; }
  _mode = (mode === ~~mode) ? mode : ((mode === true) ? c.Z_FINISH : c.Z_NO_FLUSH);

  // Convert data if needed
  if (typeof data === 'string') {
    // Only binary strings can be decompressed on practice
    strm.input = strings.binstring2buf(data);
  } else if (toString.call(data) === '[object ArrayBuffer]') {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }

  strm.next_in = 0;
  strm.avail_in = strm.input.length;

  do {
    if (strm.avail_out === 0) {
      strm.output = new utils.Buf8(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }

    status = zlib_inflate.inflate(strm, c.Z_NO_FLUSH);    /* no bad return value */

    if (status === c.Z_NEED_DICT && dictionary) {
      // Convert data if needed
      if (typeof dictionary === 'string') {
        dict = strings.string2buf(dictionary);
      } else if (toString.call(dictionary) === '[object ArrayBuffer]') {
        dict = new Uint8Array(dictionary);
      } else {
        dict = dictionary;
      }

      status = zlib_inflate.inflateSetDictionary(this.strm, dict);

    }

    if (status === c.Z_BUF_ERROR && allowBufError === true) {
      status = c.Z_OK;
      allowBufError = false;
    }

    if (status !== c.Z_STREAM_END && status !== c.Z_OK) {
      this.onEnd(status);
      this.ended = true;
      return false;
    }

    if (strm.next_out) {
      if (strm.avail_out === 0 || status === c.Z_STREAM_END || (strm.avail_in === 0 && (_mode === c.Z_FINISH || _mode === c.Z_SYNC_FLUSH))) {

        if (this.options.to === 'string') {

          next_out_utf8 = strings.utf8border(strm.output, strm.next_out);

          tail = strm.next_out - next_out_utf8;
          utf8str = strings.buf2string(strm.output, next_out_utf8);

          // move tail
          strm.next_out = tail;
          strm.avail_out = chunkSize - tail;
          if (tail) { utils.arraySet(strm.output, strm.output, next_out_utf8, tail, 0); }

          this.onData(utf8str);

        } else {
          this.onData(utils.shrinkBuf(strm.output, strm.next_out));
        }
      }
    }

    // When no more input data, we should check that internal inflate buffers
    // are flushed. The only way to do it when avail_out = 0 - run one more
    // inflate pass. But if output data not exists, inflate return Z_BUF_ERROR.
    // Here we set flag to process this error properly.
    //
    // NOTE. Deflate does not return error in this case and does not needs such
    // logic.
    if (strm.avail_in === 0 && strm.avail_out === 0) {
      allowBufError = true;
    }

  } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== c.Z_STREAM_END);

  if (status === c.Z_STREAM_END) {
    _mode = c.Z_FINISH;
  }

  // Finalize on the last chunk.
  if (_mode === c.Z_FINISH) {
    status = zlib_inflate.inflateEnd(this.strm);
    this.onEnd(status);
    this.ended = true;
    return status === c.Z_OK;
  }

  // callback interim results if Z_SYNC_FLUSH.
  if (_mode === c.Z_SYNC_FLUSH) {
    this.onEnd(c.Z_OK);
    strm.avail_out = 0;
    return true;
  }

  return true;
};


/**
 * Inflate#onData(chunk) -> Void
 * - chunk (Uint8Array|Array|String): ouput data. Type of array depends
 *   on js engine support. When string output requested, each chunk
 *   will be string.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/
Inflate.prototype.onData = function (chunk) {
  this.chunks.push(chunk);
};


/**
 * Inflate#onEnd(status) -> Void
 * - status (Number): inflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called either after you tell inflate that the input stream is
 * complete (Z_FINISH) or should be flushed (Z_SYNC_FLUSH)
 * or if an error happened. By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/
Inflate.prototype.onEnd = function (status) {
  // On success - join
  if (status === c.Z_OK) {
    if (this.options.to === 'string') {
      // Glue & convert here, until we teach pako to send
      // utf8 alligned strings to onData
      this.result = this.chunks.join('');
    } else {
      this.result = utils.flattenChunks(this.chunks);
    }
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};


/**
 * inflate(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Decompress `data` with inflate/ungzip and `options`. Autodetect
 * format via wrapper header by default. That's why we don't provide
 * separate `ungzip` method.
 *
 * Supported options are:
 *
 * - windowBits
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , input = pako.deflate([1,2,3,4,5,6,7,8,9])
 *   , output;
 *
 * try {
 *   output = pako.inflate(input);
 * } catch (err)
 *   console.log(err);
 * }
 * ```
 **/
function inflate(input, options) {
  var inflator = new Inflate(options);

  inflator.push(input, true);

  // That will never happens, if you don't cheat with options :)
  if (inflator.err) { throw inflator.msg || msg[inflator.err]; }

  return inflator.result;
}


/**
 * inflateRaw(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * The same as [[inflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/
function inflateRaw(input, options) {
  options = options || {};
  options.raw = true;
  return inflate(input, options);
}


/**
 * ungzip(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Just shortcut to [[inflate]], because it autodetects format
 * by header.content. Done for convenience.
 **/


exports.Inflate = Inflate;
exports.inflate = inflate;
exports.inflateRaw = inflateRaw;
exports.ungzip  = inflate;


/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var utils   = __webpack_require__(23);
var trees   = __webpack_require__(279);
var adler32 = __webpack_require__(100);
var crc32   = __webpack_require__(102);
var msg     = __webpack_require__(61);

/* Public constants ==========================================================*/
/* ===========================================================================*/


/* Allowed flush values; see deflate() and inflate() below for details */
var Z_NO_FLUSH      = 0;
var Z_PARTIAL_FLUSH = 1;
//var Z_SYNC_FLUSH    = 2;
var Z_FULL_FLUSH    = 3;
var Z_FINISH        = 4;
var Z_BLOCK         = 5;
//var Z_TREES         = 6;


/* Return codes for the compression/decompression functions. Negative values
 * are errors, positive values are used for special but normal events.
 */
var Z_OK            = 0;
var Z_STREAM_END    = 1;
//var Z_NEED_DICT     = 2;
//var Z_ERRNO         = -1;
var Z_STREAM_ERROR  = -2;
var Z_DATA_ERROR    = -3;
//var Z_MEM_ERROR     = -4;
var Z_BUF_ERROR     = -5;
//var Z_VERSION_ERROR = -6;


/* compression levels */
//var Z_NO_COMPRESSION      = 0;
//var Z_BEST_SPEED          = 1;
//var Z_BEST_COMPRESSION    = 9;
var Z_DEFAULT_COMPRESSION = -1;


var Z_FILTERED            = 1;
var Z_HUFFMAN_ONLY        = 2;
var Z_RLE                 = 3;
var Z_FIXED               = 4;
var Z_DEFAULT_STRATEGY    = 0;

/* Possible values of the data_type field (though see inflate()) */
//var Z_BINARY              = 0;
//var Z_TEXT                = 1;
//var Z_ASCII               = 1; // = Z_TEXT
var Z_UNKNOWN             = 2;


/* The deflate compression method */
var Z_DEFLATED  = 8;

/*============================================================================*/


var MAX_MEM_LEVEL = 9;
/* Maximum value for memLevel in deflateInit2 */
var MAX_WBITS = 15;
/* 32K LZ77 window */
var DEF_MEM_LEVEL = 8;


var LENGTH_CODES  = 29;
/* number of length codes, not counting the special END_BLOCK code */
var LITERALS      = 256;
/* number of literal bytes 0..255 */
var L_CODES       = LITERALS + 1 + LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */
var D_CODES       = 30;
/* number of distance codes */
var BL_CODES      = 19;
/* number of codes used to transfer the bit lengths */
var HEAP_SIZE     = 2 * L_CODES + 1;
/* maximum heap size */
var MAX_BITS  = 15;
/* All codes must not exceed MAX_BITS bits */

var MIN_MATCH = 3;
var MAX_MATCH = 258;
var MIN_LOOKAHEAD = (MAX_MATCH + MIN_MATCH + 1);

var PRESET_DICT = 0x20;

var INIT_STATE = 42;
var EXTRA_STATE = 69;
var NAME_STATE = 73;
var COMMENT_STATE = 91;
var HCRC_STATE = 103;
var BUSY_STATE = 113;
var FINISH_STATE = 666;

var BS_NEED_MORE      = 1; /* block not completed, need more input or more output */
var BS_BLOCK_DONE     = 2; /* block flush performed */
var BS_FINISH_STARTED = 3; /* finish started, need only more output at next deflate */
var BS_FINISH_DONE    = 4; /* finish done, accept no more input or output */

var OS_CODE = 0x03; // Unix :) . Don't detect, use this default.

function err(strm, errorCode) {
  strm.msg = msg[errorCode];
  return errorCode;
}

function rank(f) {
  return ((f) << 1) - ((f) > 4 ? 9 : 0);
}

function zero(buf) { var len = buf.length; while (--len >= 0) { buf[len] = 0; } }


/* =========================================================================
 * Flush as much pending output as possible. All deflate() output goes
 * through this function so some applications may wish to modify it
 * to avoid allocating a large strm->output buffer and copying into it.
 * (See also read_buf()).
 */
function flush_pending(strm) {
  var s = strm.state;

  //_tr_flush_bits(s);
  var len = s.pending;
  if (len > strm.avail_out) {
    len = strm.avail_out;
  }
  if (len === 0) { return; }

  utils.arraySet(strm.output, s.pending_buf, s.pending_out, len, strm.next_out);
  strm.next_out += len;
  s.pending_out += len;
  strm.total_out += len;
  strm.avail_out -= len;
  s.pending -= len;
  if (s.pending === 0) {
    s.pending_out = 0;
  }
}


function flush_block_only(s, last) {
  trees._tr_flush_block(s, (s.block_start >= 0 ? s.block_start : -1), s.strstart - s.block_start, last);
  s.block_start = s.strstart;
  flush_pending(s.strm);
}


function put_byte(s, b) {
  s.pending_buf[s.pending++] = b;
}


/* =========================================================================
 * Put a short in the pending buffer. The 16-bit value is put in MSB order.
 * IN assertion: the stream state is correct and there is enough room in
 * pending_buf.
 */
function putShortMSB(s, b) {
//  put_byte(s, (Byte)(b >> 8));
//  put_byte(s, (Byte)(b & 0xff));
  s.pending_buf[s.pending++] = (b >>> 8) & 0xff;
  s.pending_buf[s.pending++] = b & 0xff;
}


/* ===========================================================================
 * Read a new buffer from the current input stream, update the adler32
 * and total number of bytes read.  All deflate() input goes through
 * this function so some applications may wish to modify it to avoid
 * allocating a large strm->input buffer and copying from it.
 * (See also flush_pending()).
 */
function read_buf(strm, buf, start, size) {
  var len = strm.avail_in;

  if (len > size) { len = size; }
  if (len === 0) { return 0; }

  strm.avail_in -= len;

  // zmemcpy(buf, strm->next_in, len);
  utils.arraySet(buf, strm.input, strm.next_in, len, start);
  if (strm.state.wrap === 1) {
    strm.adler = adler32(strm.adler, buf, len, start);
  }

  else if (strm.state.wrap === 2) {
    strm.adler = crc32(strm.adler, buf, len, start);
  }

  strm.next_in += len;
  strm.total_in += len;

  return len;
}


/* ===========================================================================
 * Set match_start to the longest match starting at the given string and
 * return its length. Matches shorter or equal to prev_length are discarded,
 * in which case the result is equal to prev_length and match_start is
 * garbage.
 * IN assertions: cur_match is the head of the hash chain for the current
 *   string (strstart) and its distance is <= MAX_DIST, and prev_length >= 1
 * OUT assertion: the match length is not greater than s->lookahead.
 */
function longest_match(s, cur_match) {
  var chain_length = s.max_chain_length;      /* max hash chain length */
  var scan = s.strstart; /* current string */
  var match;                       /* matched string */
  var len;                           /* length of current match */
  var best_len = s.prev_length;              /* best match length so far */
  var nice_match = s.nice_match;             /* stop if match long enough */
  var limit = (s.strstart > (s.w_size - MIN_LOOKAHEAD)) ?
      s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0/*NIL*/;

  var _win = s.window; // shortcut

  var wmask = s.w_mask;
  var prev  = s.prev;

  /* Stop when cur_match becomes <= limit. To simplify the code,
   * we prevent matches with the string of window index 0.
   */

  var strend = s.strstart + MAX_MATCH;
  var scan_end1  = _win[scan + best_len - 1];
  var scan_end   = _win[scan + best_len];

  /* The code is optimized for HASH_BITS >= 8 and MAX_MATCH-2 multiple of 16.
   * It is easy to get rid of this optimization if necessary.
   */
  // Assert(s->hash_bits >= 8 && MAX_MATCH == 258, "Code too clever");

  /* Do not waste too much time if we already have a good match: */
  if (s.prev_length >= s.good_match) {
    chain_length >>= 2;
  }
  /* Do not look for matches beyond the end of the input. This is necessary
   * to make deflate deterministic.
   */
  if (nice_match > s.lookahead) { nice_match = s.lookahead; }

  // Assert((ulg)s->strstart <= s->window_size-MIN_LOOKAHEAD, "need lookahead");

  do {
    // Assert(cur_match < s->strstart, "no future");
    match = cur_match;

    /* Skip to next match if the match length cannot increase
     * or if the match length is less than 2.  Note that the checks below
     * for insufficient lookahead only occur occasionally for performance
     * reasons.  Therefore uninitialized memory will be accessed, and
     * conditional jumps will be made that depend on those values.
     * However the length of the match is limited to the lookahead, so
     * the output of deflate is not affected by the uninitialized values.
     */

    if (_win[match + best_len]     !== scan_end  ||
        _win[match + best_len - 1] !== scan_end1 ||
        _win[match]                !== _win[scan] ||
        _win[++match]              !== _win[scan + 1]) {
      continue;
    }

    /* The check at best_len-1 can be removed because it will be made
     * again later. (This heuristic is not always a win.)
     * It is not necessary to compare scan[2] and match[2] since they
     * are always equal when the other bytes match, given that
     * the hash keys are equal and that HASH_BITS >= 8.
     */
    scan += 2;
    match++;
    // Assert(*scan == *match, "match[2]?");

    /* We check for insufficient lookahead only every 8th comparison;
     * the 256th check will be made at strstart+258.
     */
    do {
      /*jshint noempty:false*/
    } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             scan < strend);

    // Assert(scan <= s->window+(unsigned)(s->window_size-1), "wild scan");

    len = MAX_MATCH - (strend - scan);
    scan = strend - MAX_MATCH;

    if (len > best_len) {
      s.match_start = cur_match;
      best_len = len;
      if (len >= nice_match) {
        break;
      }
      scan_end1  = _win[scan + best_len - 1];
      scan_end   = _win[scan + best_len];
    }
  } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);

  if (best_len <= s.lookahead) {
    return best_len;
  }
  return s.lookahead;
}


/* ===========================================================================
 * Fill the window when the lookahead becomes insufficient.
 * Updates strstart and lookahead.
 *
 * IN assertion: lookahead < MIN_LOOKAHEAD
 * OUT assertions: strstart <= window_size-MIN_LOOKAHEAD
 *    At least one byte has been read, or avail_in == 0; reads are
 *    performed for at least two bytes (required for the zip translate_eol
 *    option -- not supported here).
 */
function fill_window(s) {
  var _w_size = s.w_size;
  var p, n, m, more, str;

  //Assert(s->lookahead < MIN_LOOKAHEAD, "already enough lookahead");

  do {
    more = s.window_size - s.lookahead - s.strstart;

    // JS ints have 32 bit, block below not needed
    /* Deal with !@#$% 64K limit: */
    //if (sizeof(int) <= 2) {
    //    if (more == 0 && s->strstart == 0 && s->lookahead == 0) {
    //        more = wsize;
    //
    //  } else if (more == (unsigned)(-1)) {
    //        /* Very unlikely, but possible on 16 bit machine if
    //         * strstart == 0 && lookahead == 1 (input done a byte at time)
    //         */
    //        more--;
    //    }
    //}


    /* If the window is almost full and there is insufficient lookahead,
     * move the upper half to the lower one to make room in the upper half.
     */
    if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {

      utils.arraySet(s.window, s.window, _w_size, _w_size, 0);
      s.match_start -= _w_size;
      s.strstart -= _w_size;
      /* we now have strstart >= MAX_DIST */
      s.block_start -= _w_size;

      /* Slide the hash table (could be avoided with 32 bit values
       at the expense of memory usage). We slide even when level == 0
       to keep the hash table consistent if we switch back to level > 0
       later. (Using level 0 permanently is not an optimal usage of
       zlib, so we don't care about this pathological case.)
       */

      n = s.hash_size;
      p = n;
      do {
        m = s.head[--p];
        s.head[p] = (m >= _w_size ? m - _w_size : 0);
      } while (--n);

      n = _w_size;
      p = n;
      do {
        m = s.prev[--p];
        s.prev[p] = (m >= _w_size ? m - _w_size : 0);
        /* If n is not on any hash chain, prev[n] is garbage but
         * its value will never be used.
         */
      } while (--n);

      more += _w_size;
    }
    if (s.strm.avail_in === 0) {
      break;
    }

    /* If there was no sliding:
     *    strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&
     *    more == window_size - lookahead - strstart
     * => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
     * => more >= window_size - 2*WSIZE + 2
     * In the BIG_MEM or MMAP case (not yet supported),
     *   window_size == input_size + MIN_LOOKAHEAD  &&
     *   strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.
     * Otherwise, window_size == 2*WSIZE so more >= 2.
     * If there was sliding, more >= WSIZE. So in all cases, more >= 2.
     */
    //Assert(more >= 2, "more < 2");
    n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
    s.lookahead += n;

    /* Initialize the hash value now that we have some input: */
    if (s.lookahead + s.insert >= MIN_MATCH) {
      str = s.strstart - s.insert;
      s.ins_h = s.window[str];

      /* UPDATE_HASH(s, s->ins_h, s->window[str + 1]); */
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + 1]) & s.hash_mask;
//#if MIN_MATCH != 3
//        Call update_hash() MIN_MATCH-3 more times
//#endif
      while (s.insert) {
        /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
        s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;

        s.prev[str & s.w_mask] = s.head[s.ins_h];
        s.head[s.ins_h] = str;
        str++;
        s.insert--;
        if (s.lookahead + s.insert < MIN_MATCH) {
          break;
        }
      }
    }
    /* If the whole input has less than MIN_MATCH bytes, ins_h is garbage,
     * but this is not important since only literal bytes will be emitted.
     */

  } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);

  /* If the WIN_INIT bytes after the end of the current data have never been
   * written, then zero those bytes in order to avoid memory check reports of
   * the use of uninitialized (or uninitialised as Julian writes) bytes by
   * the longest match routines.  Update the high water mark for the next
   * time through here.  WIN_INIT is set to MAX_MATCH since the longest match
   * routines allow scanning to strstart + MAX_MATCH, ignoring lookahead.
   */
//  if (s.high_water < s.window_size) {
//    var curr = s.strstart + s.lookahead;
//    var init = 0;
//
//    if (s.high_water < curr) {
//      /* Previous high water mark below current data -- zero WIN_INIT
//       * bytes or up to end of window, whichever is less.
//       */
//      init = s.window_size - curr;
//      if (init > WIN_INIT)
//        init = WIN_INIT;
//      zmemzero(s->window + curr, (unsigned)init);
//      s->high_water = curr + init;
//    }
//    else if (s->high_water < (ulg)curr + WIN_INIT) {
//      /* High water mark at or above current data, but below current data
//       * plus WIN_INIT -- zero out to current data plus WIN_INIT, or up
//       * to end of window, whichever is less.
//       */
//      init = (ulg)curr + WIN_INIT - s->high_water;
//      if (init > s->window_size - s->high_water)
//        init = s->window_size - s->high_water;
//      zmemzero(s->window + s->high_water, (unsigned)init);
//      s->high_water += init;
//    }
//  }
//
//  Assert((ulg)s->strstart <= s->window_size - MIN_LOOKAHEAD,
//    "not enough room for search");
}

/* ===========================================================================
 * Copy without compression as much as possible from the input stream, return
 * the current block state.
 * This function does not insert new strings in the dictionary since
 * uncompressible data is probably not useful. This function is used
 * only for the level=0 compression option.
 * NOTE: this function should be optimized to avoid extra copying from
 * window to pending_buf.
 */
function deflate_stored(s, flush) {
  /* Stored blocks are limited to 0xffff bytes, pending_buf is limited
   * to pending_buf_size, and each stored block has a 5 byte header:
   */
  var max_block_size = 0xffff;

  if (max_block_size > s.pending_buf_size - 5) {
    max_block_size = s.pending_buf_size - 5;
  }

  /* Copy as much as possible from input to output: */
  for (;;) {
    /* Fill the window as much as possible: */
    if (s.lookahead <= 1) {

      //Assert(s->strstart < s->w_size+MAX_DIST(s) ||
      //  s->block_start >= (long)s->w_size, "slide too late");
//      if (!(s.strstart < s.w_size + (s.w_size - MIN_LOOKAHEAD) ||
//        s.block_start >= s.w_size)) {
//        throw  new Error("slide too late");
//      }

      fill_window(s);
      if (s.lookahead === 0 && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }

      if (s.lookahead === 0) {
        break;
      }
      /* flush the current block */
    }
    //Assert(s->block_start >= 0L, "block gone");
//    if (s.block_start < 0) throw new Error("block gone");

    s.strstart += s.lookahead;
    s.lookahead = 0;

    /* Emit a stored block if pending_buf will be full: */
    var max_start = s.block_start + max_block_size;

    if (s.strstart === 0 || s.strstart >= max_start) {
      /* strstart == 0 is possible when wraparound on 16-bit machine */
      s.lookahead = s.strstart - max_start;
      s.strstart = max_start;
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/


    }
    /* Flush if we may have to slide, otherwise block_start may become
     * negative and the data will be gone:
     */
    if (s.strstart - s.block_start >= (s.w_size - MIN_LOOKAHEAD)) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }

  s.insert = 0;

  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }

  if (s.strstart > s.block_start) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }

  return BS_NEED_MORE;
}

/* ===========================================================================
 * Compress as much as possible from the input stream, return the current
 * block state.
 * This function does not perform lazy evaluation of matches and inserts
 * new strings in the dictionary only for unmatched strings or for short
 * matches. It is used only for the fast compression options.
 */
function deflate_fast(s, flush) {
  var hash_head;        /* head of the hash chain */
  var bflush;           /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) {
        break; /* flush the current block */
      }
    }

    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    hash_head = 0/*NIL*/;
    if (s.lookahead >= MIN_MATCH) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }

    /* Find the longest match, discarding those <= prev_length.
     * At this point we have always match_length < MIN_MATCH
     */
    if (hash_head !== 0/*NIL*/ && ((s.strstart - hash_head) <= (s.w_size - MIN_LOOKAHEAD))) {
      /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */
      s.match_length = longest_match(s, hash_head);
      /* longest_match() sets match_start */
    }
    if (s.match_length >= MIN_MATCH) {
      // check_match(s, s.strstart, s.match_start, s.match_length); // for debug only

      /*** _tr_tally_dist(s, s.strstart - s.match_start,
                     s.match_length - MIN_MATCH, bflush); ***/
      bflush = trees._tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);

      s.lookahead -= s.match_length;

      /* Insert new strings in the hash table only if the match length
       * is not too large. This saves time but degrades compression.
       */
      if (s.match_length <= s.max_lazy_match/*max_insert_length*/ && s.lookahead >= MIN_MATCH) {
        s.match_length--; /* string at strstart already in table */
        do {
          s.strstart++;
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
          /* strstart never exceeds WSIZE-MAX_MATCH, so there are
           * always MIN_MATCH bytes ahead.
           */
        } while (--s.match_length !== 0);
        s.strstart++;
      } else
      {
        s.strstart += s.match_length;
        s.match_length = 0;
        s.ins_h = s.window[s.strstart];
        /* UPDATE_HASH(s, s.ins_h, s.window[s.strstart+1]); */
        s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + 1]) & s.hash_mask;

//#if MIN_MATCH != 3
//                Call UPDATE_HASH() MIN_MATCH-3 more times
//#endif
        /* If lookahead < MIN_MATCH, ins_h is garbage, but it does not
         * matter since it will be recomputed at next deflate call.
         */
      }
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s.window[s.strstart]));
      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = trees._tr_tally(s, 0, s.window[s.strstart]);

      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = ((s.strstart < (MIN_MATCH - 1)) ? s.strstart : MIN_MATCH - 1);
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* ===========================================================================
 * Same as above, but achieves better compression. We use a lazy
 * evaluation for matches: a match is finally adopted only if there is
 * no better match at the next window position.
 */
function deflate_slow(s, flush) {
  var hash_head;          /* head of hash chain */
  var bflush;              /* set if current block must be flushed */

  var max_insert;

  /* Process the input block. */
  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) { break; } /* flush the current block */
    }

    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    hash_head = 0/*NIL*/;
    if (s.lookahead >= MIN_MATCH) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }

    /* Find the longest match, discarding those <= prev_length.
     */
    s.prev_length = s.match_length;
    s.prev_match = s.match_start;
    s.match_length = MIN_MATCH - 1;

    if (hash_head !== 0/*NIL*/ && s.prev_length < s.max_lazy_match &&
        s.strstart - hash_head <= (s.w_size - MIN_LOOKAHEAD)/*MAX_DIST(s)*/) {
      /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */
      s.match_length = longest_match(s, hash_head);
      /* longest_match() sets match_start */

      if (s.match_length <= 5 &&
         (s.strategy === Z_FILTERED || (s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096/*TOO_FAR*/))) {

        /* If prev_match is also MIN_MATCH, match_start is garbage
         * but we will ignore the current match anyway.
         */
        s.match_length = MIN_MATCH - 1;
      }
    }
    /* If there was a match at the previous step and the current
     * match is not better, output the previous match:
     */
    if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
      max_insert = s.strstart + s.lookahead - MIN_MATCH;
      /* Do not insert strings in hash table beyond this. */

      //check_match(s, s.strstart-1, s.prev_match, s.prev_length);

      /***_tr_tally_dist(s, s.strstart - 1 - s.prev_match,
                     s.prev_length - MIN_MATCH, bflush);***/
      bflush = trees._tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
      /* Insert in hash table all strings up to the end of the match.
       * strstart-1 and strstart are already inserted. If there is not
       * enough lookahead, the last two strings are not inserted in
       * the hash table.
       */
      s.lookahead -= s.prev_length - 1;
      s.prev_length -= 2;
      do {
        if (++s.strstart <= max_insert) {
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
        }
      } while (--s.prev_length !== 0);
      s.match_available = 0;
      s.match_length = MIN_MATCH - 1;
      s.strstart++;

      if (bflush) {
        /*** FLUSH_BLOCK(s, 0); ***/
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
        /***/
      }

    } else if (s.match_available) {
      /* If there was no match at the previous position, output a
       * single literal. If there was a match but the current match
       * is longer, truncate the previous match to a single literal.
       */
      //Tracevv((stderr,"%c", s->window[s->strstart-1]));
      /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
      bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);

      if (bflush) {
        /*** FLUSH_BLOCK_ONLY(s, 0) ***/
        flush_block_only(s, false);
        /***/
      }
      s.strstart++;
      s.lookahead--;
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    } else {
      /* There is no previous match to compare with, wait for
       * the next step to decide.
       */
      s.match_available = 1;
      s.strstart++;
      s.lookahead--;
    }
  }
  //Assert (flush != Z_NO_FLUSH, "no flush?");
  if (s.match_available) {
    //Tracevv((stderr,"%c", s->window[s->strstart-1]));
    /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
    bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);

    s.match_available = 0;
  }
  s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }

  return BS_BLOCK_DONE;
}


/* ===========================================================================
 * For Z_RLE, simply look for runs of bytes, generate matches only of distance
 * one.  Do not maintain a hash table.  (It will be regenerated if this run of
 * deflate switches away from Z_RLE.)
 */
function deflate_rle(s, flush) {
  var bflush;            /* set if current block must be flushed */
  var prev;              /* byte at distance one to match */
  var scan, strend;      /* scan goes up to strend for length of run */

  var _win = s.window;

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the longest run, plus one for the unrolled loop.
     */
    if (s.lookahead <= MAX_MATCH) {
      fill_window(s);
      if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) { break; } /* flush the current block */
    }

    /* See how many times the previous byte repeats */
    s.match_length = 0;
    if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
      scan = s.strstart - 1;
      prev = _win[scan];
      if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
        strend = s.strstart + MAX_MATCH;
        do {
          /*jshint noempty:false*/
        } while (prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 scan < strend);
        s.match_length = MAX_MATCH - (strend - scan);
        if (s.match_length > s.lookahead) {
          s.match_length = s.lookahead;
        }
      }
      //Assert(scan <= s->window+(uInt)(s->window_size-1), "wild scan");
    }

    /* Emit match if have run of MIN_MATCH or longer, else emit literal */
    if (s.match_length >= MIN_MATCH) {
      //check_match(s, s.strstart, s.strstart - 1, s.match_length);

      /*** _tr_tally_dist(s, 1, s.match_length - MIN_MATCH, bflush); ***/
      bflush = trees._tr_tally(s, 1, s.match_length - MIN_MATCH);

      s.lookahead -= s.match_length;
      s.strstart += s.match_length;
      s.match_length = 0;
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s->window[s->strstart]));
      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = trees._tr_tally(s, 0, s.window[s.strstart]);

      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* ===========================================================================
 * For Z_HUFFMAN_ONLY, do not look for matches.  Do not maintain a hash table.
 * (It will be regenerated if this run of deflate switches away from Huffman.)
 */
function deflate_huff(s, flush) {
  var bflush;             /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we have a literal to write. */
    if (s.lookahead === 0) {
      fill_window(s);
      if (s.lookahead === 0) {
        if (flush === Z_NO_FLUSH) {
          return BS_NEED_MORE;
        }
        break;      /* flush the current block */
      }
    }

    /* Output a literal byte */
    s.match_length = 0;
    //Tracevv((stderr,"%c", s->window[s->strstart]));
    /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
    bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
    s.lookahead--;
    s.strstart++;
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* Values for max_lazy_match, good_match and max_chain_length, depending on
 * the desired pack level (0..9). The values given below have been tuned to
 * exclude worst case performance for pathological files. Better values may be
 * found for specific files.
 */
function Config(good_length, max_lazy, nice_length, max_chain, func) {
  this.good_length = good_length;
  this.max_lazy = max_lazy;
  this.nice_length = nice_length;
  this.max_chain = max_chain;
  this.func = func;
}

var configuration_table;

configuration_table = [
  /*      good lazy nice chain */
  new Config(0, 0, 0, 0, deflate_stored),          /* 0 store only */
  new Config(4, 4, 8, 4, deflate_fast),            /* 1 max speed, no lazy matches */
  new Config(4, 5, 16, 8, deflate_fast),           /* 2 */
  new Config(4, 6, 32, 32, deflate_fast),          /* 3 */

  new Config(4, 4, 16, 16, deflate_slow),          /* 4 lazy matches */
  new Config(8, 16, 32, 32, deflate_slow),         /* 5 */
  new Config(8, 16, 128, 128, deflate_slow),       /* 6 */
  new Config(8, 32, 128, 256, deflate_slow),       /* 7 */
  new Config(32, 128, 258, 1024, deflate_slow),    /* 8 */
  new Config(32, 258, 258, 4096, deflate_slow)     /* 9 max compression */
];


/* ===========================================================================
 * Initialize the "longest match" routines for a new zlib stream
 */
function lm_init(s) {
  s.window_size = 2 * s.w_size;

  /*** CLEAR_HASH(s); ***/
  zero(s.head); // Fill with NIL (= 0);

  /* Set the default configuration parameters:
   */
  s.max_lazy_match = configuration_table[s.level].max_lazy;
  s.good_match = configuration_table[s.level].good_length;
  s.nice_match = configuration_table[s.level].nice_length;
  s.max_chain_length = configuration_table[s.level].max_chain;

  s.strstart = 0;
  s.block_start = 0;
  s.lookahead = 0;
  s.insert = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  s.ins_h = 0;
}


function DeflateState() {
  this.strm = null;            /* pointer back to this zlib stream */
  this.status = 0;            /* as the name implies */
  this.pending_buf = null;      /* output still pending */
  this.pending_buf_size = 0;  /* size of pending_buf */
  this.pending_out = 0;       /* next pending byte to output to the stream */
  this.pending = 0;           /* nb of bytes in the pending buffer */
  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
  this.gzhead = null;         /* gzip header information to write */
  this.gzindex = 0;           /* where in extra, name, or comment */
  this.method = Z_DEFLATED; /* can only be DEFLATED */
  this.last_flush = -1;   /* value of flush param for previous deflate call */

  this.w_size = 0;  /* LZ77 window size (32K by default) */
  this.w_bits = 0;  /* log2(w_size)  (8..16) */
  this.w_mask = 0;  /* w_size - 1 */

  this.window = null;
  /* Sliding window. Input bytes are read into the second half of the window,
   * and move to the first half later to keep a dictionary of at least wSize
   * bytes. With this organization, matches are limited to a distance of
   * wSize-MAX_MATCH bytes, but this ensures that IO is always
   * performed with a length multiple of the block size.
   */

  this.window_size = 0;
  /* Actual size of window: 2*wSize, except when the user input buffer
   * is directly used as sliding window.
   */

  this.prev = null;
  /* Link to older string with same hash index. To limit the size of this
   * array to 64K, this link is maintained only for the last 32K strings.
   * An index in this array is thus a window index modulo 32K.
   */

  this.head = null;   /* Heads of the hash chains or NIL. */

  this.ins_h = 0;       /* hash index of string to be inserted */
  this.hash_size = 0;   /* number of elements in hash table */
  this.hash_bits = 0;   /* log2(hash_size) */
  this.hash_mask = 0;   /* hash_size-1 */

  this.hash_shift = 0;
  /* Number of bits by which ins_h must be shifted at each input
   * step. It must be such that after MIN_MATCH steps, the oldest
   * byte no longer takes part in the hash key, that is:
   *   hash_shift * MIN_MATCH >= hash_bits
   */

  this.block_start = 0;
  /* Window position at the beginning of the current output block. Gets
   * negative when the window is moved backwards.
   */

  this.match_length = 0;      /* length of best match */
  this.prev_match = 0;        /* previous match */
  this.match_available = 0;   /* set if previous match exists */
  this.strstart = 0;          /* start of string to insert */
  this.match_start = 0;       /* start of matching string */
  this.lookahead = 0;         /* number of valid bytes ahead in window */

  this.prev_length = 0;
  /* Length of the best match at previous step. Matches not greater than this
   * are discarded. This is used in the lazy match evaluation.
   */

  this.max_chain_length = 0;
  /* To speed up deflation, hash chains are never searched beyond this
   * length.  A higher limit improves compression ratio but degrades the
   * speed.
   */

  this.max_lazy_match = 0;
  /* Attempt to find a better match only when the current match is strictly
   * smaller than this value. This mechanism is used only for compression
   * levels >= 4.
   */
  // That's alias to max_lazy_match, don't use directly
  //this.max_insert_length = 0;
  /* Insert new strings in the hash table only if the match length is not
   * greater than this length. This saves time but degrades compression.
   * max_insert_length is used only for compression levels <= 3.
   */

  this.level = 0;     /* compression level (1..9) */
  this.strategy = 0;  /* favor or force Huffman coding*/

  this.good_match = 0;
  /* Use a faster search when the previous match is longer than this */

  this.nice_match = 0; /* Stop searching when current match exceeds this */

              /* used by trees.c: */

  /* Didn't use ct_data typedef below to suppress compiler warning */

  // struct ct_data_s dyn_ltree[HEAP_SIZE];   /* literal and length tree */
  // struct ct_data_s dyn_dtree[2*D_CODES+1]; /* distance tree */
  // struct ct_data_s bl_tree[2*BL_CODES+1];  /* Huffman tree for bit lengths */

  // Use flat array of DOUBLE size, with interleaved fata,
  // because JS does not support effective
  this.dyn_ltree  = new utils.Buf16(HEAP_SIZE * 2);
  this.dyn_dtree  = new utils.Buf16((2 * D_CODES + 1) * 2);
  this.bl_tree    = new utils.Buf16((2 * BL_CODES + 1) * 2);
  zero(this.dyn_ltree);
  zero(this.dyn_dtree);
  zero(this.bl_tree);

  this.l_desc   = null;         /* desc. for literal tree */
  this.d_desc   = null;         /* desc. for distance tree */
  this.bl_desc  = null;         /* desc. for bit length tree */

  //ush bl_count[MAX_BITS+1];
  this.bl_count = new utils.Buf16(MAX_BITS + 1);
  /* number of codes at each bit length for an optimal tree */

  //int heap[2*L_CODES+1];      /* heap used to build the Huffman trees */
  this.heap = new utils.Buf16(2 * L_CODES + 1);  /* heap used to build the Huffman trees */
  zero(this.heap);

  this.heap_len = 0;               /* number of elements in the heap */
  this.heap_max = 0;               /* element of largest frequency */
  /* The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
   * The same heap array is used to build all trees.
   */

  this.depth = new utils.Buf16(2 * L_CODES + 1); //uch depth[2*L_CODES+1];
  zero(this.depth);
  /* Depth of each subtree used as tie breaker for trees of equal frequency
   */

  this.l_buf = 0;          /* buffer index for literals or lengths */

  this.lit_bufsize = 0;
  /* Size of match buffer for literals/lengths.  There are 4 reasons for
   * limiting lit_bufsize to 64K:
   *   - frequencies can be kept in 16 bit counters
   *   - if compression is not successful for the first block, all input
   *     data is still in the window so we can still emit a stored block even
   *     when input comes from standard input.  (This can also be done for
   *     all blocks if lit_bufsize is not greater than 32K.)
   *   - if compression is not successful for a file smaller than 64K, we can
   *     even emit a stored file instead of a stored block (saving 5 bytes).
   *     This is applicable only for zip (not gzip or zlib).
   *   - creating new Huffman trees less frequently may not provide fast
   *     adaptation to changes in the input data statistics. (Take for
   *     example a binary file with poorly compressible code followed by
   *     a highly compressible string table.) Smaller buffer sizes give
   *     fast adaptation but have of course the overhead of transmitting
   *     trees more frequently.
   *   - I can't count above 4
   */

  this.last_lit = 0;      /* running index in l_buf */

  this.d_buf = 0;
  /* Buffer index for distances. To simplify the code, d_buf and l_buf have
   * the same number of elements. To use different lengths, an extra flag
   * array would be necessary.
   */

  this.opt_len = 0;       /* bit length of current block with optimal trees */
  this.static_len = 0;    /* bit length of current block with static trees */
  this.matches = 0;       /* number of string matches in current block */
  this.insert = 0;        /* bytes at end of window left to insert */


  this.bi_buf = 0;
  /* Output buffer. bits are inserted starting at the bottom (least
   * significant bits).
   */
  this.bi_valid = 0;
  /* Number of valid bits in bi_buf.  All bits above the last valid bit
   * are always zero.
   */

  // Used for window memory init. We safely ignore it for JS. That makes
  // sense only for pointers and memory check tools.
  //this.high_water = 0;
  /* High water mark offset in window for initialized bytes -- bytes above
   * this are set to zero in order to avoid memory check warnings when
   * longest match routines access bytes past the input.  This is then
   * updated to the new high water mark.
   */
}


function deflateResetKeep(strm) {
  var s;

  if (!strm || !strm.state) {
    return err(strm, Z_STREAM_ERROR);
  }

  strm.total_in = strm.total_out = 0;
  strm.data_type = Z_UNKNOWN;

  s = strm.state;
  s.pending = 0;
  s.pending_out = 0;

  if (s.wrap < 0) {
    s.wrap = -s.wrap;
    /* was made negative by deflate(..., Z_FINISH); */
  }
  s.status = (s.wrap ? INIT_STATE : BUSY_STATE);
  strm.adler = (s.wrap === 2) ?
    0  // crc32(0, Z_NULL, 0)
  :
    1; // adler32(0, Z_NULL, 0)
  s.last_flush = Z_NO_FLUSH;
  trees._tr_init(s);
  return Z_OK;
}


function deflateReset(strm) {
  var ret = deflateResetKeep(strm);
  if (ret === Z_OK) {
    lm_init(strm.state);
  }
  return ret;
}


function deflateSetHeader(strm, head) {
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  if (strm.state.wrap !== 2) { return Z_STREAM_ERROR; }
  strm.state.gzhead = head;
  return Z_OK;
}


function deflateInit2(strm, level, method, windowBits, memLevel, strategy) {
  if (!strm) { // === Z_NULL
    return Z_STREAM_ERROR;
  }
  var wrap = 1;

  if (level === Z_DEFAULT_COMPRESSION) {
    level = 6;
  }

  if (windowBits < 0) { /* suppress zlib wrapper */
    wrap = 0;
    windowBits = -windowBits;
  }

  else if (windowBits > 15) {
    wrap = 2;           /* write gzip wrapper instead */
    windowBits -= 16;
  }


  if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED ||
    windowBits < 8 || windowBits > 15 || level < 0 || level > 9 ||
    strategy < 0 || strategy > Z_FIXED) {
    return err(strm, Z_STREAM_ERROR);
  }


  if (windowBits === 8) {
    windowBits = 9;
  }
  /* until 256-byte window bug fixed */

  var s = new DeflateState();

  strm.state = s;
  s.strm = strm;

  s.wrap = wrap;
  s.gzhead = null;
  s.w_bits = windowBits;
  s.w_size = 1 << s.w_bits;
  s.w_mask = s.w_size - 1;

  s.hash_bits = memLevel + 7;
  s.hash_size = 1 << s.hash_bits;
  s.hash_mask = s.hash_size - 1;
  s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);

  s.window = new utils.Buf8(s.w_size * 2);
  s.head = new utils.Buf16(s.hash_size);
  s.prev = new utils.Buf16(s.w_size);

  // Don't need mem init magic for JS.
  //s.high_water = 0;  /* nothing written to s->window yet */

  s.lit_bufsize = 1 << (memLevel + 6); /* 16K elements by default */

  s.pending_buf_size = s.lit_bufsize * 4;

  //overlay = (ushf *) ZALLOC(strm, s->lit_bufsize, sizeof(ush)+2);
  //s->pending_buf = (uchf *) overlay;
  s.pending_buf = new utils.Buf8(s.pending_buf_size);

  // It is offset from `s.pending_buf` (size is `s.lit_bufsize * 2`)
  //s->d_buf = overlay + s->lit_bufsize/sizeof(ush);
  s.d_buf = 1 * s.lit_bufsize;

  //s->l_buf = s->pending_buf + (1+sizeof(ush))*s->lit_bufsize;
  s.l_buf = (1 + 2) * s.lit_bufsize;

  s.level = level;
  s.strategy = strategy;
  s.method = method;

  return deflateReset(strm);
}

function deflateInit(strm, level) {
  return deflateInit2(strm, level, Z_DEFLATED, MAX_WBITS, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY);
}


function deflate(strm, flush) {
  var old_flush, s;
  var beg, val; // for gzip header write only

  if (!strm || !strm.state ||
    flush > Z_BLOCK || flush < 0) {
    return strm ? err(strm, Z_STREAM_ERROR) : Z_STREAM_ERROR;
  }

  s = strm.state;

  if (!strm.output ||
      (!strm.input && strm.avail_in !== 0) ||
      (s.status === FINISH_STATE && flush !== Z_FINISH)) {
    return err(strm, (strm.avail_out === 0) ? Z_BUF_ERROR : Z_STREAM_ERROR);
  }

  s.strm = strm; /* just in case */
  old_flush = s.last_flush;
  s.last_flush = flush;

  /* Write the header */
  if (s.status === INIT_STATE) {

    if (s.wrap === 2) { // GZIP header
      strm.adler = 0;  //crc32(0L, Z_NULL, 0);
      put_byte(s, 31);
      put_byte(s, 139);
      put_byte(s, 8);
      if (!s.gzhead) { // s->gzhead == Z_NULL
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, s.level === 9 ? 2 :
                    (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
                     4 : 0));
        put_byte(s, OS_CODE);
        s.status = BUSY_STATE;
      }
      else {
        put_byte(s, (s.gzhead.text ? 1 : 0) +
                    (s.gzhead.hcrc ? 2 : 0) +
                    (!s.gzhead.extra ? 0 : 4) +
                    (!s.gzhead.name ? 0 : 8) +
                    (!s.gzhead.comment ? 0 : 16)
                );
        put_byte(s, s.gzhead.time & 0xff);
        put_byte(s, (s.gzhead.time >> 8) & 0xff);
        put_byte(s, (s.gzhead.time >> 16) & 0xff);
        put_byte(s, (s.gzhead.time >> 24) & 0xff);
        put_byte(s, s.level === 9 ? 2 :
                    (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
                     4 : 0));
        put_byte(s, s.gzhead.os & 0xff);
        if (s.gzhead.extra && s.gzhead.extra.length) {
          put_byte(s, s.gzhead.extra.length & 0xff);
          put_byte(s, (s.gzhead.extra.length >> 8) & 0xff);
        }
        if (s.gzhead.hcrc) {
          strm.adler = crc32(strm.adler, s.pending_buf, s.pending, 0);
        }
        s.gzindex = 0;
        s.status = EXTRA_STATE;
      }
    }
    else // DEFLATE header
    {
      var header = (Z_DEFLATED + ((s.w_bits - 8) << 4)) << 8;
      var level_flags = -1;

      if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
        level_flags = 0;
      } else if (s.level < 6) {
        level_flags = 1;
      } else if (s.level === 6) {
        level_flags = 2;
      } else {
        level_flags = 3;
      }
      header |= (level_flags << 6);
      if (s.strstart !== 0) { header |= PRESET_DICT; }
      header += 31 - (header % 31);

      s.status = BUSY_STATE;
      putShortMSB(s, header);

      /* Save the adler32 of the preset dictionary: */
      if (s.strstart !== 0) {
        putShortMSB(s, strm.adler >>> 16);
        putShortMSB(s, strm.adler & 0xffff);
      }
      strm.adler = 1; // adler32(0L, Z_NULL, 0);
    }
  }

//#ifdef GZIP
  if (s.status === EXTRA_STATE) {
    if (s.gzhead.extra/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */

      while (s.gzindex < (s.gzhead.extra.length & 0xffff)) {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            break;
          }
        }
        put_byte(s, s.gzhead.extra[s.gzindex] & 0xff);
        s.gzindex++;
      }
      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (s.gzindex === s.gzhead.extra.length) {
        s.gzindex = 0;
        s.status = NAME_STATE;
      }
    }
    else {
      s.status = NAME_STATE;
    }
  }
  if (s.status === NAME_STATE) {
    if (s.gzhead.name/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */
      //int val;

      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            val = 1;
            break;
          }
        }
        // JS specific: little magic to add zero terminator to end of string
        if (s.gzindex < s.gzhead.name.length) {
          val = s.gzhead.name.charCodeAt(s.gzindex++) & 0xff;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);

      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (val === 0) {
        s.gzindex = 0;
        s.status = COMMENT_STATE;
      }
    }
    else {
      s.status = COMMENT_STATE;
    }
  }
  if (s.status === COMMENT_STATE) {
    if (s.gzhead.comment/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */
      //int val;

      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            val = 1;
            break;
          }
        }
        // JS specific: little magic to add zero terminator to end of string
        if (s.gzindex < s.gzhead.comment.length) {
          val = s.gzhead.comment.charCodeAt(s.gzindex++) & 0xff;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);

      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (val === 0) {
        s.status = HCRC_STATE;
      }
    }
    else {
      s.status = HCRC_STATE;
    }
  }
  if (s.status === HCRC_STATE) {
    if (s.gzhead.hcrc) {
      if (s.pending + 2 > s.pending_buf_size) {
        flush_pending(strm);
      }
      if (s.pending + 2 <= s.pending_buf_size) {
        put_byte(s, strm.adler & 0xff);
        put_byte(s, (strm.adler >> 8) & 0xff);
        strm.adler = 0; //crc32(0L, Z_NULL, 0);
        s.status = BUSY_STATE;
      }
    }
    else {
      s.status = BUSY_STATE;
    }
  }
//#endif

  /* Flush as much pending output as possible */
  if (s.pending !== 0) {
    flush_pending(strm);
    if (strm.avail_out === 0) {
      /* Since avail_out is 0, deflate will be called again with
       * more output space, but possibly with both pending and
       * avail_in equal to zero. There won't be anything to do,
       * but this is not an error situation so make sure we
       * return OK instead of BUF_ERROR at next call of deflate:
       */
      s.last_flush = -1;
      return Z_OK;
    }

    /* Make sure there is something to do and avoid duplicate consecutive
     * flushes. For repeated and useless calls with Z_FINISH, we keep
     * returning Z_STREAM_END instead of Z_BUF_ERROR.
     */
  } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) &&
    flush !== Z_FINISH) {
    return err(strm, Z_BUF_ERROR);
  }

  /* User must not provide more input after the first FINISH: */
  if (s.status === FINISH_STATE && strm.avail_in !== 0) {
    return err(strm, Z_BUF_ERROR);
  }

  /* Start a new block or continue the current one.
   */
  if (strm.avail_in !== 0 || s.lookahead !== 0 ||
    (flush !== Z_NO_FLUSH && s.status !== FINISH_STATE)) {
    var bstate = (s.strategy === Z_HUFFMAN_ONLY) ? deflate_huff(s, flush) :
      (s.strategy === Z_RLE ? deflate_rle(s, flush) :
        configuration_table[s.level].func(s, flush));

    if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
      s.status = FINISH_STATE;
    }
    if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
      if (strm.avail_out === 0) {
        s.last_flush = -1;
        /* avoid BUF_ERROR next call, see above */
      }
      return Z_OK;
      /* If flush != Z_NO_FLUSH && avail_out == 0, the next call
       * of deflate should use the same flush parameter to make sure
       * that the flush is complete. So we don't have to output an
       * empty block here, this will be done at next call. This also
       * ensures that for a very small output buffer, we emit at most
       * one empty block.
       */
    }
    if (bstate === BS_BLOCK_DONE) {
      if (flush === Z_PARTIAL_FLUSH) {
        trees._tr_align(s);
      }
      else if (flush !== Z_BLOCK) { /* FULL_FLUSH or SYNC_FLUSH */

        trees._tr_stored_block(s, 0, 0, false);
        /* For a full flush, this empty block will be recognized
         * as a special marker by inflate_sync().
         */
        if (flush === Z_FULL_FLUSH) {
          /*** CLEAR_HASH(s); ***/             /* forget history */
          zero(s.head); // Fill with NIL (= 0);

          if (s.lookahead === 0) {
            s.strstart = 0;
            s.block_start = 0;
            s.insert = 0;
          }
        }
      }
      flush_pending(strm);
      if (strm.avail_out === 0) {
        s.last_flush = -1; /* avoid BUF_ERROR at next call, see above */
        return Z_OK;
      }
    }
  }
  //Assert(strm->avail_out > 0, "bug2");
  //if (strm.avail_out <= 0) { throw new Error("bug2");}

  if (flush !== Z_FINISH) { return Z_OK; }
  if (s.wrap <= 0) { return Z_STREAM_END; }

  /* Write the trailer */
  if (s.wrap === 2) {
    put_byte(s, strm.adler & 0xff);
    put_byte(s, (strm.adler >> 8) & 0xff);
    put_byte(s, (strm.adler >> 16) & 0xff);
    put_byte(s, (strm.adler >> 24) & 0xff);
    put_byte(s, strm.total_in & 0xff);
    put_byte(s, (strm.total_in >> 8) & 0xff);
    put_byte(s, (strm.total_in >> 16) & 0xff);
    put_byte(s, (strm.total_in >> 24) & 0xff);
  }
  else
  {
    putShortMSB(s, strm.adler >>> 16);
    putShortMSB(s, strm.adler & 0xffff);
  }

  flush_pending(strm);
  /* If avail_out is zero, the application will call deflate again
   * to flush the rest.
   */
  if (s.wrap > 0) { s.wrap = -s.wrap; }
  /* write the trailer only once! */
  return s.pending !== 0 ? Z_OK : Z_STREAM_END;
}

function deflateEnd(strm) {
  var status;

  if (!strm/*== Z_NULL*/ || !strm.state/*== Z_NULL*/) {
    return Z_STREAM_ERROR;
  }

  status = strm.state.status;
  if (status !== INIT_STATE &&
    status !== EXTRA_STATE &&
    status !== NAME_STATE &&
    status !== COMMENT_STATE &&
    status !== HCRC_STATE &&
    status !== BUSY_STATE &&
    status !== FINISH_STATE
  ) {
    return err(strm, Z_STREAM_ERROR);
  }

  strm.state = null;

  return status === BUSY_STATE ? err(strm, Z_DATA_ERROR) : Z_OK;
}


/* =========================================================================
 * Initializes the compression dictionary from the given byte
 * sequence without producing any compressed output.
 */
function deflateSetDictionary(strm, dictionary) {
  var dictLength = dictionary.length;

  var s;
  var str, n;
  var wrap;
  var avail;
  var next;
  var input;
  var tmpDict;

  if (!strm/*== Z_NULL*/ || !strm.state/*== Z_NULL*/) {
    return Z_STREAM_ERROR;
  }

  s = strm.state;
  wrap = s.wrap;

  if (wrap === 2 || (wrap === 1 && s.status !== INIT_STATE) || s.lookahead) {
    return Z_STREAM_ERROR;
  }

  /* when using zlib wrappers, compute Adler-32 for provided dictionary */
  if (wrap === 1) {
    /* adler32(strm->adler, dictionary, dictLength); */
    strm.adler = adler32(strm.adler, dictionary, dictLength, 0);
  }

  s.wrap = 0;   /* avoid computing Adler-32 in read_buf */

  /* if dictionary would fill window, just replace the history */
  if (dictLength >= s.w_size) {
    if (wrap === 0) {            /* already empty otherwise */
      /*** CLEAR_HASH(s); ***/
      zero(s.head); // Fill with NIL (= 0);
      s.strstart = 0;
      s.block_start = 0;
      s.insert = 0;
    }
    /* use the tail */
    // dictionary = dictionary.slice(dictLength - s.w_size);
    tmpDict = new utils.Buf8(s.w_size);
    utils.arraySet(tmpDict, dictionary, dictLength - s.w_size, s.w_size, 0);
    dictionary = tmpDict;
    dictLength = s.w_size;
  }
  /* insert dictionary into window and hash */
  avail = strm.avail_in;
  next = strm.next_in;
  input = strm.input;
  strm.avail_in = dictLength;
  strm.next_in = 0;
  strm.input = dictionary;
  fill_window(s);
  while (s.lookahead >= MIN_MATCH) {
    str = s.strstart;
    n = s.lookahead - (MIN_MATCH - 1);
    do {
      /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;

      s.prev[str & s.w_mask] = s.head[s.ins_h];

      s.head[s.ins_h] = str;
      str++;
    } while (--n);
    s.strstart = str;
    s.lookahead = MIN_MATCH - 1;
    fill_window(s);
  }
  s.strstart += s.lookahead;
  s.block_start = s.strstart;
  s.insert = s.lookahead;
  s.lookahead = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  strm.next_in = next;
  strm.input = input;
  strm.avail_in = avail;
  s.wrap = wrap;
  return Z_OK;
}


exports.deflateInit = deflateInit;
exports.deflateInit2 = deflateInit2;
exports.deflateReset = deflateReset;
exports.deflateResetKeep = deflateResetKeep;
exports.deflateSetHeader = deflateSetHeader;
exports.deflate = deflate;
exports.deflateEnd = deflateEnd;
exports.deflateSetDictionary = deflateSetDictionary;
exports.deflateInfo = 'pako deflate (from Nodeca project)';

/* Not implemented
exports.deflateBound = deflateBound;
exports.deflateCopy = deflateCopy;
exports.deflateParams = deflateParams;
exports.deflatePending = deflatePending;
exports.deflatePrime = deflatePrime;
exports.deflateTune = deflateTune;
*/


/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

"use strict";



function GZheader() {
  /* true if compressed data believed to be text */
  this.text       = 0;
  /* modification time */
  this.time       = 0;
  /* extra flags (not used when writing a gzip file) */
  this.xflags     = 0;
  /* operating system */
  this.os         = 0;
  /* pointer to extra field or Z_NULL if none */
  this.extra      = null;
  /* extra field length (valid if extra != Z_NULL) */
  this.extra_len  = 0; // Actually, we don't need it in JS,
                       // but leave for few code modifications

  //
  // Setup limits is not necessary because in js we should not preallocate memory
  // for inflate use constant limit in 65536 bytes
  //

  /* space at extra (only when reading header) */
  // this.extra_max  = 0;
  /* pointer to zero-terminated file name or Z_NULL */
  this.name       = '';
  /* space at name (only when reading header) */
  // this.name_max   = 0;
  /* pointer to zero-terminated comment or Z_NULL */
  this.comment    = '';
  /* space at comment (only when reading header) */
  // this.comm_max   = 0;
  /* true if there was or will be a header crc */
  this.hcrc       = 0;
  /* true when done reading gzip header (not used when writing a gzip file) */
  this.done       = false;
}

module.exports = GZheader;


/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


// See state defs from inflate.js
var BAD = 30;       /* got a data error -- remain here until reset */
var TYPE = 12;      /* i: waiting for type bits, including last-flag bit */

/*
   Decode literal, length, and distance codes and write out the resulting
   literal and match bytes until either not enough input or output is
   available, an end-of-block is encountered, or a data error is encountered.
   When large enough input and output buffers are supplied to inflate(), for
   example, a 16K input buffer and a 64K output buffer, more than 95% of the
   inflate execution time is spent in this routine.

   Entry assumptions:

        state.mode === LEN
        strm.avail_in >= 6
        strm.avail_out >= 258
        start >= strm.avail_out
        state.bits < 8

   On return, state.mode is one of:

        LEN -- ran out of enough output space or enough available input
        TYPE -- reached end of block code, inflate() to interpret next block
        BAD -- error in block data

   Notes:

    - The maximum input bits used by a length/distance pair is 15 bits for the
      length code, 5 bits for the length extra, 15 bits for the distance code,
      and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
      Therefore if strm.avail_in >= 6, then there is enough input to avoid
      checking for available input while decoding.

    - The maximum bytes that a single length/distance pair can output is 258
      bytes, which is the maximum length that can be coded.  inflate_fast()
      requires strm.avail_out >= 258 for each loop to avoid checking for
      output space.
 */
module.exports = function inflate_fast(strm, start) {
  var state;
  var _in;                    /* local strm.input */
  var last;                   /* have enough input while in < last */
  var _out;                   /* local strm.output */
  var beg;                    /* inflate()'s initial strm.output */
  var end;                    /* while out < end, enough space available */
//#ifdef INFLATE_STRICT
  var dmax;                   /* maximum distance from zlib header */
//#endif
  var wsize;                  /* window size or zero if not using window */
  var whave;                  /* valid bytes in the window */
  var wnext;                  /* window write index */
  // Use `s_window` instead `window`, avoid conflict with instrumentation tools
  var s_window;               /* allocated sliding window, if wsize != 0 */
  var hold;                   /* local strm.hold */
  var bits;                   /* local strm.bits */
  var lcode;                  /* local strm.lencode */
  var dcode;                  /* local strm.distcode */
  var lmask;                  /* mask for first level of length codes */
  var dmask;                  /* mask for first level of distance codes */
  var here;                   /* retrieved table entry */
  var op;                     /* code bits, operation, extra bits, or */
                              /*  window position, window bytes to copy */
  var len;                    /* match length, unused bytes */
  var dist;                   /* match distance */
  var from;                   /* where to copy match from */
  var from_source;


  var input, output; // JS specific, because we have no pointers

  /* copy state to local variables */
  state = strm.state;
  //here = state.here;
  _in = strm.next_in;
  input = strm.input;
  last = _in + (strm.avail_in - 5);
  _out = strm.next_out;
  output = strm.output;
  beg = _out - (start - strm.avail_out);
  end = _out + (strm.avail_out - 257);
//#ifdef INFLATE_STRICT
  dmax = state.dmax;
//#endif
  wsize = state.wsize;
  whave = state.whave;
  wnext = state.wnext;
  s_window = state.window;
  hold = state.hold;
  bits = state.bits;
  lcode = state.lencode;
  dcode = state.distcode;
  lmask = (1 << state.lenbits) - 1;
  dmask = (1 << state.distbits) - 1;


  /* decode literals and length/distances until end-of-block or not enough
     input data or output space */

  top:
  do {
    if (bits < 15) {
      hold += input[_in++] << bits;
      bits += 8;
      hold += input[_in++] << bits;
      bits += 8;
    }

    here = lcode[hold & lmask];

    dolen:
    for (;;) { // Goto emulation
      op = here >>> 24/*here.bits*/;
      hold >>>= op;
      bits -= op;
      op = (here >>> 16) & 0xff/*here.op*/;
      if (op === 0) {                          /* literal */
        //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
        //        "inflate:         literal '%c'\n" :
        //        "inflate:         literal 0x%02x\n", here.val));
        output[_out++] = here & 0xffff/*here.val*/;
      }
      else if (op & 16) {                     /* length base */
        len = here & 0xffff/*here.val*/;
        op &= 15;                           /* number of extra bits */
        if (op) {
          if (bits < op) {
            hold += input[_in++] << bits;
            bits += 8;
          }
          len += hold & ((1 << op) - 1);
          hold >>>= op;
          bits -= op;
        }
        //Tracevv((stderr, "inflate:         length %u\n", len));
        if (bits < 15) {
          hold += input[_in++] << bits;
          bits += 8;
          hold += input[_in++] << bits;
          bits += 8;
        }
        here = dcode[hold & dmask];

        dodist:
        for (;;) { // goto emulation
          op = here >>> 24/*here.bits*/;
          hold >>>= op;
          bits -= op;
          op = (here >>> 16) & 0xff/*here.op*/;

          if (op & 16) {                      /* distance base */
            dist = here & 0xffff/*here.val*/;
            op &= 15;                       /* number of extra bits */
            if (bits < op) {
              hold += input[_in++] << bits;
              bits += 8;
              if (bits < op) {
                hold += input[_in++] << bits;
                bits += 8;
              }
            }
            dist += hold & ((1 << op) - 1);
//#ifdef INFLATE_STRICT
            if (dist > dmax) {
              strm.msg = 'invalid distance too far back';
              state.mode = BAD;
              break top;
            }
//#endif
            hold >>>= op;
            bits -= op;
            //Tracevv((stderr, "inflate:         distance %u\n", dist));
            op = _out - beg;                /* max distance in output */
            if (dist > op) {                /* see if copy from window */
              op = dist - op;               /* distance back in window */
              if (op > whave) {
                if (state.sane) {
                  strm.msg = 'invalid distance too far back';
                  state.mode = BAD;
                  break top;
                }

// (!) This block is disabled in zlib defailts,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//                if (len <= op - whave) {
//                  do {
//                    output[_out++] = 0;
//                  } while (--len);
//                  continue top;
//                }
//                len -= op - whave;
//                do {
//                  output[_out++] = 0;
//                } while (--op > whave);
//                if (op === 0) {
//                  from = _out - dist;
//                  do {
//                    output[_out++] = output[from++];
//                  } while (--len);
//                  continue top;
//                }
//#endif
              }
              from = 0; // window index
              from_source = s_window;
              if (wnext === 0) {           /* very common case */
                from += wsize - op;
                if (op < len) {         /* some from window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = _out - dist;  /* rest from output */
                  from_source = output;
                }
              }
              else if (wnext < op) {      /* wrap around window */
                from += wsize + wnext - op;
                op -= wnext;
                if (op < len) {         /* some from end of window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = 0;
                  if (wnext < len) {  /* some from start of window */
                    op = wnext;
                    len -= op;
                    do {
                      output[_out++] = s_window[from++];
                    } while (--op);
                    from = _out - dist;      /* rest from output */
                    from_source = output;
                  }
                }
              }
              else {                      /* contiguous in window */
                from += wnext - op;
                if (op < len) {         /* some from window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = _out - dist;  /* rest from output */
                  from_source = output;
                }
              }
              while (len > 2) {
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                len -= 3;
              }
              if (len) {
                output[_out++] = from_source[from++];
                if (len > 1) {
                  output[_out++] = from_source[from++];
                }
              }
            }
            else {
              from = _out - dist;          /* copy direct from output */
              do {                        /* minimum length is three */
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                len -= 3;
              } while (len > 2);
              if (len) {
                output[_out++] = output[from++];
                if (len > 1) {
                  output[_out++] = output[from++];
                }
              }
            }
          }
          else if ((op & 64) === 0) {          /* 2nd level distance code */
            here = dcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
            continue dodist;
          }
          else {
            strm.msg = 'invalid distance code';
            state.mode = BAD;
            break top;
          }

          break; // need to emulate goto via "continue"
        }
      }
      else if ((op & 64) === 0) {              /* 2nd level length code */
        here = lcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
        continue dolen;
      }
      else if (op & 32) {                     /* end-of-block */
        //Tracevv((stderr, "inflate:         end of block\n"));
        state.mode = TYPE;
        break top;
      }
      else {
        strm.msg = 'invalid literal/length code';
        state.mode = BAD;
        break top;
      }

      break; // need to emulate goto via "continue"
    }
  } while (_in < last && _out < end);

  /* return unused bytes (on entry, bits < 8, so in won't go too far back) */
  len = bits >> 3;
  _in -= len;
  bits -= len << 3;
  hold &= (1 << bits) - 1;

  /* update state and return */
  strm.next_in = _in;
  strm.next_out = _out;
  strm.avail_in = (_in < last ? 5 + (last - _in) : 5 - (_in - last));
  strm.avail_out = (_out < end ? 257 + (end - _out) : 257 - (_out - end));
  state.hold = hold;
  state.bits = bits;
  return;
};


/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

"use strict";



var utils         = __webpack_require__(23);
var adler32       = __webpack_require__(100);
var crc32         = __webpack_require__(102);
var inflate_fast  = __webpack_require__(276);
var inflate_table = __webpack_require__(278);

var CODES = 0;
var LENS = 1;
var DISTS = 2;

/* Public constants ==========================================================*/
/* ===========================================================================*/


/* Allowed flush values; see deflate() and inflate() below for details */
//var Z_NO_FLUSH      = 0;
//var Z_PARTIAL_FLUSH = 1;
//var Z_SYNC_FLUSH    = 2;
//var Z_FULL_FLUSH    = 3;
var Z_FINISH        = 4;
var Z_BLOCK         = 5;
var Z_TREES         = 6;


/* Return codes for the compression/decompression functions. Negative values
 * are errors, positive values are used for special but normal events.
 */
var Z_OK            = 0;
var Z_STREAM_END    = 1;
var Z_NEED_DICT     = 2;
//var Z_ERRNO         = -1;
var Z_STREAM_ERROR  = -2;
var Z_DATA_ERROR    = -3;
var Z_MEM_ERROR     = -4;
var Z_BUF_ERROR     = -5;
//var Z_VERSION_ERROR = -6;

/* The deflate compression method */
var Z_DEFLATED  = 8;


/* STATES ====================================================================*/
/* ===========================================================================*/


var    HEAD = 1;       /* i: waiting for magic header */
var    FLAGS = 2;      /* i: waiting for method and flags (gzip) */
var    TIME = 3;       /* i: waiting for modification time (gzip) */
var    OS = 4;         /* i: waiting for extra flags and operating system (gzip) */
var    EXLEN = 5;      /* i: waiting for extra length (gzip) */
var    EXTRA = 6;      /* i: waiting for extra bytes (gzip) */
var    NAME = 7;       /* i: waiting for end of file name (gzip) */
var    COMMENT = 8;    /* i: waiting for end of comment (gzip) */
var    HCRC = 9;       /* i: waiting for header crc (gzip) */
var    DICTID = 10;    /* i: waiting for dictionary check value */
var    DICT = 11;      /* waiting for inflateSetDictionary() call */
var        TYPE = 12;      /* i: waiting for type bits, including last-flag bit */
var        TYPEDO = 13;    /* i: same, but skip check to exit inflate on new block */
var        STORED = 14;    /* i: waiting for stored size (length and complement) */
var        COPY_ = 15;     /* i/o: same as COPY below, but only first time in */
var        COPY = 16;      /* i/o: waiting for input or output to copy stored block */
var        TABLE = 17;     /* i: waiting for dynamic block table lengths */
var        LENLENS = 18;   /* i: waiting for code length code lengths */
var        CODELENS = 19;  /* i: waiting for length/lit and distance code lengths */
var            LEN_ = 20;      /* i: same as LEN below, but only first time in */
var            LEN = 21;       /* i: waiting for length/lit/eob code */
var            LENEXT = 22;    /* i: waiting for length extra bits */
var            DIST = 23;      /* i: waiting for distance code */
var            DISTEXT = 24;   /* i: waiting for distance extra bits */
var            MATCH = 25;     /* o: waiting for output space to copy string */
var            LIT = 26;       /* o: waiting for output space to write literal */
var    CHECK = 27;     /* i: waiting for 32-bit check value */
var    LENGTH = 28;    /* i: waiting for 32-bit length (gzip) */
var    DONE = 29;      /* finished check, done -- remain here until reset */
var    BAD = 30;       /* got a data error -- remain here until reset */
var    MEM = 31;       /* got an inflate() memory error -- remain here until reset */
var    SYNC = 32;      /* looking for synchronization bytes to restart inflate() */

/* ===========================================================================*/



var ENOUGH_LENS = 852;
var ENOUGH_DISTS = 592;
//var ENOUGH =  (ENOUGH_LENS+ENOUGH_DISTS);

var MAX_WBITS = 15;
/* 32K LZ77 window */
var DEF_WBITS = MAX_WBITS;


function zswap32(q) {
  return  (((q >>> 24) & 0xff) +
          ((q >>> 8) & 0xff00) +
          ((q & 0xff00) << 8) +
          ((q & 0xff) << 24));
}


function InflateState() {
  this.mode = 0;             /* current inflate mode */
  this.last = false;          /* true if processing last block */
  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
  this.havedict = false;      /* true if dictionary provided */
  this.flags = 0;             /* gzip header method and flags (0 if zlib) */
  this.dmax = 0;              /* zlib header max distance (INFLATE_STRICT) */
  this.check = 0;             /* protected copy of check value */
  this.total = 0;             /* protected copy of output count */
  // TODO: may be {}
  this.head = null;           /* where to save gzip header information */

  /* sliding window */
  this.wbits = 0;             /* log base 2 of requested window size */
  this.wsize = 0;             /* window size or zero if not using window */
  this.whave = 0;             /* valid bytes in the window */
  this.wnext = 0;             /* window write index */
  this.window = null;         /* allocated sliding window, if needed */

  /* bit accumulator */
  this.hold = 0;              /* input bit accumulator */
  this.bits = 0;              /* number of bits in "in" */

  /* for string and stored block copying */
  this.length = 0;            /* literal or length of data to copy */
  this.offset = 0;            /* distance back to copy string from */

  /* for table and code decoding */
  this.extra = 0;             /* extra bits needed */

  /* fixed and dynamic code tables */
  this.lencode = null;          /* starting table for length/literal codes */
  this.distcode = null;         /* starting table for distance codes */
  this.lenbits = 0;           /* index bits for lencode */
  this.distbits = 0;          /* index bits for distcode */

  /* dynamic table building */
  this.ncode = 0;             /* number of code length code lengths */
  this.nlen = 0;              /* number of length code lengths */
  this.ndist = 0;             /* number of distance code lengths */
  this.have = 0;              /* number of code lengths in lens[] */
  this.next = null;              /* next available space in codes[] */

  this.lens = new utils.Buf16(320); /* temporary storage for code lengths */
  this.work = new utils.Buf16(288); /* work area for code table building */

  /*
   because we don't have pointers in js, we use lencode and distcode directly
   as buffers so we don't need codes
  */
  //this.codes = new utils.Buf32(ENOUGH);       /* space for code tables */
  this.lendyn = null;              /* dynamic table for length/literal codes (JS specific) */
  this.distdyn = null;             /* dynamic table for distance codes (JS specific) */
  this.sane = 0;                   /* if false, allow invalid distance too far */
  this.back = 0;                   /* bits back of last unprocessed length/lit */
  this.was = 0;                    /* initial length of match */
}

function inflateResetKeep(strm) {
  var state;

  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  strm.total_in = strm.total_out = state.total = 0;
  strm.msg = ''; /*Z_NULL*/
  if (state.wrap) {       /* to support ill-conceived Java test suite */
    strm.adler = state.wrap & 1;
  }
  state.mode = HEAD;
  state.last = 0;
  state.havedict = 0;
  state.dmax = 32768;
  state.head = null/*Z_NULL*/;
  state.hold = 0;
  state.bits = 0;
  //state.lencode = state.distcode = state.next = state.codes;
  state.lencode = state.lendyn = new utils.Buf32(ENOUGH_LENS);
  state.distcode = state.distdyn = new utils.Buf32(ENOUGH_DISTS);

  state.sane = 1;
  state.back = -1;
  //Tracev((stderr, "inflate: reset\n"));
  return Z_OK;
}

function inflateReset(strm) {
  var state;

  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  state.wsize = 0;
  state.whave = 0;
  state.wnext = 0;
  return inflateResetKeep(strm);

}

function inflateReset2(strm, windowBits) {
  var wrap;
  var state;

  /* get the state */
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;

  /* extract wrap request from windowBits parameter */
  if (windowBits < 0) {
    wrap = 0;
    windowBits = -windowBits;
  }
  else {
    wrap = (windowBits >> 4) + 1;
    if (windowBits < 48) {
      windowBits &= 15;
    }
  }

  /* set number of window bits, free window if different */
  if (windowBits && (windowBits < 8 || windowBits > 15)) {
    return Z_STREAM_ERROR;
  }
  if (state.window !== null && state.wbits !== windowBits) {
    state.window = null;
  }

  /* update state and reset the rest of it */
  state.wrap = wrap;
  state.wbits = windowBits;
  return inflateReset(strm);
}

function inflateInit2(strm, windowBits) {
  var ret;
  var state;

  if (!strm) { return Z_STREAM_ERROR; }
  //strm.msg = Z_NULL;                 /* in case we return an error */

  state = new InflateState();

  //if (state === Z_NULL) return Z_MEM_ERROR;
  //Tracev((stderr, "inflate: allocated\n"));
  strm.state = state;
  state.window = null/*Z_NULL*/;
  ret = inflateReset2(strm, windowBits);
  if (ret !== Z_OK) {
    strm.state = null/*Z_NULL*/;
  }
  return ret;
}

function inflateInit(strm) {
  return inflateInit2(strm, DEF_WBITS);
}


/*
 Return state with length and distance decoding tables and index sizes set to
 fixed code decoding.  Normally this returns fixed tables from inffixed.h.
 If BUILDFIXED is defined, then instead this routine builds the tables the
 first time it's called, and returns those tables the first time and
 thereafter.  This reduces the size of the code by about 2K bytes, in
 exchange for a little execution time.  However, BUILDFIXED should not be
 used for threaded applications, since the rewriting of the tables and virgin
 may not be thread-safe.
 */
var virgin = true;

var lenfix, distfix; // We have no pointers in JS, so keep tables separate

function fixedtables(state) {
  /* build fixed huffman tables if first call (may not be thread safe) */
  if (virgin) {
    var sym;

    lenfix = new utils.Buf32(512);
    distfix = new utils.Buf32(32);

    /* literal/length table */
    sym = 0;
    while (sym < 144) { state.lens[sym++] = 8; }
    while (sym < 256) { state.lens[sym++] = 9; }
    while (sym < 280) { state.lens[sym++] = 7; }
    while (sym < 288) { state.lens[sym++] = 8; }

    inflate_table(LENS,  state.lens, 0, 288, lenfix,   0, state.work, { bits: 9 });

    /* distance table */
    sym = 0;
    while (sym < 32) { state.lens[sym++] = 5; }

    inflate_table(DISTS, state.lens, 0, 32,   distfix, 0, state.work, { bits: 5 });

    /* do this just once */
    virgin = false;
  }

  state.lencode = lenfix;
  state.lenbits = 9;
  state.distcode = distfix;
  state.distbits = 5;
}


/*
 Update the window with the last wsize (normally 32K) bytes written before
 returning.  If window does not exist yet, create it.  This is only called
 when a window is already in use, or when output has been written during this
 inflate call, but the end of the deflate stream has not been reached yet.
 It is also called to create a window for dictionary data when a dictionary
 is loaded.

 Providing output buffers larger than 32K to inflate() should provide a speed
 advantage, since only the last 32K of output is copied to the sliding window
 upon return from inflate(), and since all distances after the first 32K of
 output will fall in the output data, making match copies simpler and faster.
 The advantage may be dependent on the size of the processor's data caches.
 */
function updatewindow(strm, src, end, copy) {
  var dist;
  var state = strm.state;

  /* if it hasn't been done already, allocate space for the window */
  if (state.window === null) {
    state.wsize = 1 << state.wbits;
    state.wnext = 0;
    state.whave = 0;

    state.window = new utils.Buf8(state.wsize);
  }

  /* copy state->wsize or less output bytes into the circular window */
  if (copy >= state.wsize) {
    utils.arraySet(state.window, src, end - state.wsize, state.wsize, 0);
    state.wnext = 0;
    state.whave = state.wsize;
  }
  else {
    dist = state.wsize - state.wnext;
    if (dist > copy) {
      dist = copy;
    }
    //zmemcpy(state->window + state->wnext, end - copy, dist);
    utils.arraySet(state.window, src, end - copy, dist, state.wnext);
    copy -= dist;
    if (copy) {
      //zmemcpy(state->window, end - copy, copy);
      utils.arraySet(state.window, src, end - copy, copy, 0);
      state.wnext = copy;
      state.whave = state.wsize;
    }
    else {
      state.wnext += dist;
      if (state.wnext === state.wsize) { state.wnext = 0; }
      if (state.whave < state.wsize) { state.whave += dist; }
    }
  }
  return 0;
}

function inflate(strm, flush) {
  var state;
  var input, output;          // input/output buffers
  var next;                   /* next input INDEX */
  var put;                    /* next output INDEX */
  var have, left;             /* available input and output */
  var hold;                   /* bit buffer */
  var bits;                   /* bits in bit buffer */
  var _in, _out;              /* save starting available input and output */
  var copy;                   /* number of stored or match bytes to copy */
  var from;                   /* where to copy match bytes from */
  var from_source;
  var here = 0;               /* current decoding table entry */
  var here_bits, here_op, here_val; // paked "here" denormalized (JS specific)
  //var last;                   /* parent table entry */
  var last_bits, last_op, last_val; // paked "last" denormalized (JS specific)
  var len;                    /* length to copy for repeats, bits to drop */
  var ret;                    /* return code */
  var hbuf = new utils.Buf8(4);    /* buffer for gzip header crc calculation */
  var opts;

  var n; // temporary var for NEED_BITS

  var order = /* permutation of code lengths */
    [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ];


  if (!strm || !strm.state || !strm.output ||
      (!strm.input && strm.avail_in !== 0)) {
    return Z_STREAM_ERROR;
  }

  state = strm.state;
  if (state.mode === TYPE) { state.mode = TYPEDO; }    /* skip check */


  //--- LOAD() ---
  put = strm.next_out;
  output = strm.output;
  left = strm.avail_out;
  next = strm.next_in;
  input = strm.input;
  have = strm.avail_in;
  hold = state.hold;
  bits = state.bits;
  //---

  _in = have;
  _out = left;
  ret = Z_OK;

  inf_leave: // goto emulation
  for (;;) {
    switch (state.mode) {
    case HEAD:
      if (state.wrap === 0) {
        state.mode = TYPEDO;
        break;
      }
      //=== NEEDBITS(16);
      while (bits < 16) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      if ((state.wrap & 2) && hold === 0x8b1f) {  /* gzip header */
        state.check = 0/*crc32(0L, Z_NULL, 0)*/;
        //=== CRC2(state.check, hold);
        hbuf[0] = hold & 0xff;
        hbuf[1] = (hold >>> 8) & 0xff;
        state.check = crc32(state.check, hbuf, 2, 0);
        //===//

        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = FLAGS;
        break;
      }
      state.flags = 0;           /* expect zlib header */
      if (state.head) {
        state.head.done = false;
      }
      if (!(state.wrap & 1) ||   /* check if zlib header allowed */
        (((hold & 0xff)/*BITS(8)*/ << 8) + (hold >> 8)) % 31) {
        strm.msg = 'incorrect header check';
        state.mode = BAD;
        break;
      }
      if ((hold & 0x0f)/*BITS(4)*/ !== Z_DEFLATED) {
        strm.msg = 'unknown compression method';
        state.mode = BAD;
        break;
      }
      //--- DROPBITS(4) ---//
      hold >>>= 4;
      bits -= 4;
      //---//
      len = (hold & 0x0f)/*BITS(4)*/ + 8;
      if (state.wbits === 0) {
        state.wbits = len;
      }
      else if (len > state.wbits) {
        strm.msg = 'invalid window size';
        state.mode = BAD;
        break;
      }
      state.dmax = 1 << len;
      //Tracev((stderr, "inflate:   zlib header ok\n"));
      strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
      state.mode = hold & 0x200 ? DICTID : TYPE;
      //=== INITBITS();
      hold = 0;
      bits = 0;
      //===//
      break;
    case FLAGS:
      //=== NEEDBITS(16); */
      while (bits < 16) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      state.flags = hold;
      if ((state.flags & 0xff) !== Z_DEFLATED) {
        strm.msg = 'unknown compression method';
        state.mode = BAD;
        break;
      }
      if (state.flags & 0xe000) {
        strm.msg = 'unknown header flags set';
        state.mode = BAD;
        break;
      }
      if (state.head) {
        state.head.text = ((hold >> 8) & 1);
      }
      if (state.flags & 0x0200) {
        //=== CRC2(state.check, hold);
        hbuf[0] = hold & 0xff;
        hbuf[1] = (hold >>> 8) & 0xff;
        state.check = crc32(state.check, hbuf, 2, 0);
        //===//
      }
      //=== INITBITS();
      hold = 0;
      bits = 0;
      //===//
      state.mode = TIME;
      /* falls through */
    case TIME:
      //=== NEEDBITS(32); */
      while (bits < 32) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      if (state.head) {
        state.head.time = hold;
      }
      if (state.flags & 0x0200) {
        //=== CRC4(state.check, hold)
        hbuf[0] = hold & 0xff;
        hbuf[1] = (hold >>> 8) & 0xff;
        hbuf[2] = (hold >>> 16) & 0xff;
        hbuf[3] = (hold >>> 24) & 0xff;
        state.check = crc32(state.check, hbuf, 4, 0);
        //===
      }
      //=== INITBITS();
      hold = 0;
      bits = 0;
      //===//
      state.mode = OS;
      /* falls through */
    case OS:
      //=== NEEDBITS(16); */
      while (bits < 16) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      if (state.head) {
        state.head.xflags = (hold & 0xff);
        state.head.os = (hold >> 8);
      }
      if (state.flags & 0x0200) {
        //=== CRC2(state.check, hold);
        hbuf[0] = hold & 0xff;
        hbuf[1] = (hold >>> 8) & 0xff;
        state.check = crc32(state.check, hbuf, 2, 0);
        //===//
      }
      //=== INITBITS();
      hold = 0;
      bits = 0;
      //===//
      state.mode = EXLEN;
      /* falls through */
    case EXLEN:
      if (state.flags & 0x0400) {
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.length = hold;
        if (state.head) {
          state.head.extra_len = hold;
        }
        if (state.flags & 0x0200) {
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32(state.check, hbuf, 2, 0);
          //===//
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
      }
      else if (state.head) {
        state.head.extra = null/*Z_NULL*/;
      }
      state.mode = EXTRA;
      /* falls through */
    case EXTRA:
      if (state.flags & 0x0400) {
        copy = state.length;
        if (copy > have) { copy = have; }
        if (copy) {
          if (state.head) {
            len = state.head.extra_len - state.length;
            if (!state.head.extra) {
              // Use untyped array for more conveniend processing later
              state.head.extra = new Array(state.head.extra_len);
            }
            utils.arraySet(
              state.head.extra,
              input,
              next,
              // extra field is limited to 65536 bytes
              // - no need for additional size check
              copy,
              /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
              len
            );
            //zmemcpy(state.head.extra + len, next,
            //        len + copy > state.head.extra_max ?
            //        state.head.extra_max - len : copy);
          }
          if (state.flags & 0x0200) {
            state.check = crc32(state.check, input, copy, next);
          }
          have -= copy;
          next += copy;
          state.length -= copy;
        }
        if (state.length) { break inf_leave; }
      }
      state.length = 0;
      state.mode = NAME;
      /* falls through */
    case NAME:
      if (state.flags & 0x0800) {
        if (have === 0) { break inf_leave; }
        copy = 0;
        do {
          // TODO: 2 or 1 bytes?
          len = input[next + copy++];
          /* use constant limit because in js we should not preallocate memory */
          if (state.head && len &&
              (state.length < 65536 /*state.head.name_max*/)) {
            state.head.name += String.fromCharCode(len);
          }
        } while (len && copy < have);

        if (state.flags & 0x0200) {
          state.check = crc32(state.check, input, copy, next);
        }
        have -= copy;
        next += copy;
        if (len) { break inf_leave; }
      }
      else if (state.head) {
        state.head.name = null;
      }
      state.length = 0;
      state.mode = COMMENT;
      /* falls through */
    case COMMENT:
      if (state.flags & 0x1000) {
        if (have === 0) { break inf_leave; }
        copy = 0;
        do {
          len = input[next + copy++];
          /* use constant limit because in js we should not preallocate memory */
          if (state.head && len &&
              (state.length < 65536 /*state.head.comm_max*/)) {
            state.head.comment += String.fromCharCode(len);
          }
        } while (len && copy < have);
        if (state.flags & 0x0200) {
          state.check = crc32(state.check, input, copy, next);
        }
        have -= copy;
        next += copy;
        if (len) { break inf_leave; }
      }
      else if (state.head) {
        state.head.comment = null;
      }
      state.mode = HCRC;
      /* falls through */
    case HCRC:
      if (state.flags & 0x0200) {
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if (hold !== (state.check & 0xffff)) {
          strm.msg = 'header crc mismatch';
          state.mode = BAD;
          break;
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
      }
      if (state.head) {
        state.head.hcrc = ((state.flags >> 9) & 1);
        state.head.done = true;
      }
      strm.adler = state.check = 0;
      state.mode = TYPE;
      break;
    case DICTID:
      //=== NEEDBITS(32); */
      while (bits < 32) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      strm.adler = state.check = zswap32(hold);
      //=== INITBITS();
      hold = 0;
      bits = 0;
      //===//
      state.mode = DICT;
      /* falls through */
    case DICT:
      if (state.havedict === 0) {
        //--- RESTORE() ---
        strm.next_out = put;
        strm.avail_out = left;
        strm.next_in = next;
        strm.avail_in = have;
        state.hold = hold;
        state.bits = bits;
        //---
        return Z_NEED_DICT;
      }
      strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
      state.mode = TYPE;
      /* falls through */
    case TYPE:
      if (flush === Z_BLOCK || flush === Z_TREES) { break inf_leave; }
      /* falls through */
    case TYPEDO:
      if (state.last) {
        //--- BYTEBITS() ---//
        hold >>>= bits & 7;
        bits -= bits & 7;
        //---//
        state.mode = CHECK;
        break;
      }
      //=== NEEDBITS(3); */
      while (bits < 3) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      state.last = (hold & 0x01)/*BITS(1)*/;
      //--- DROPBITS(1) ---//
      hold >>>= 1;
      bits -= 1;
      //---//

      switch ((hold & 0x03)/*BITS(2)*/) {
      case 0:                             /* stored block */
        //Tracev((stderr, "inflate:     stored block%s\n",
        //        state.last ? " (last)" : ""));
        state.mode = STORED;
        break;
      case 1:                             /* fixed block */
        fixedtables(state);
        //Tracev((stderr, "inflate:     fixed codes block%s\n",
        //        state.last ? " (last)" : ""));
        state.mode = LEN_;             /* decode codes */
        if (flush === Z_TREES) {
          //--- DROPBITS(2) ---//
          hold >>>= 2;
          bits -= 2;
          //---//
          break inf_leave;
        }
        break;
      case 2:                             /* dynamic block */
        //Tracev((stderr, "inflate:     dynamic codes block%s\n",
        //        state.last ? " (last)" : ""));
        state.mode = TABLE;
        break;
      case 3:
        strm.msg = 'invalid block type';
        state.mode = BAD;
      }
      //--- DROPBITS(2) ---//
      hold >>>= 2;
      bits -= 2;
      //---//
      break;
    case STORED:
      //--- BYTEBITS() ---// /* go to byte boundary */
      hold >>>= bits & 7;
      bits -= bits & 7;
      //---//
      //=== NEEDBITS(32); */
      while (bits < 32) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      if ((hold & 0xffff) !== ((hold >>> 16) ^ 0xffff)) {
        strm.msg = 'invalid stored block lengths';
        state.mode = BAD;
        break;
      }
      state.length = hold & 0xffff;
      //Tracev((stderr, "inflate:       stored length %u\n",
      //        state.length));
      //=== INITBITS();
      hold = 0;
      bits = 0;
      //===//
      state.mode = COPY_;
      if (flush === Z_TREES) { break inf_leave; }
      /* falls through */
    case COPY_:
      state.mode = COPY;
      /* falls through */
    case COPY:
      copy = state.length;
      if (copy) {
        if (copy > have) { copy = have; }
        if (copy > left) { copy = left; }
        if (copy === 0) { break inf_leave; }
        //--- zmemcpy(put, next, copy); ---
        utils.arraySet(output, input, next, copy, put);
        //---//
        have -= copy;
        next += copy;
        left -= copy;
        put += copy;
        state.length -= copy;
        break;
      }
      //Tracev((stderr, "inflate:       stored end\n"));
      state.mode = TYPE;
      break;
    case TABLE:
      //=== NEEDBITS(14); */
      while (bits < 14) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      state.nlen = (hold & 0x1f)/*BITS(5)*/ + 257;
      //--- DROPBITS(5) ---//
      hold >>>= 5;
      bits -= 5;
      //---//
      state.ndist = (hold & 0x1f)/*BITS(5)*/ + 1;
      //--- DROPBITS(5) ---//
      hold >>>= 5;
      bits -= 5;
      //---//
      state.ncode = (hold & 0x0f)/*BITS(4)*/ + 4;
      //--- DROPBITS(4) ---//
      hold >>>= 4;
      bits -= 4;
      //---//
//#ifndef PKZIP_BUG_WORKAROUND
      if (state.nlen > 286 || state.ndist > 30) {
        strm.msg = 'too many length or distance symbols';
        state.mode = BAD;
        break;
      }
//#endif
      //Tracev((stderr, "inflate:       table sizes ok\n"));
      state.have = 0;
      state.mode = LENLENS;
      /* falls through */
    case LENLENS:
      while (state.have < state.ncode) {
        //=== NEEDBITS(3);
        while (bits < 3) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.lens[order[state.have++]] = (hold & 0x07);//BITS(3);
        //--- DROPBITS(3) ---//
        hold >>>= 3;
        bits -= 3;
        //---//
      }
      while (state.have < 19) {
        state.lens[order[state.have++]] = 0;
      }
      // We have separate tables & no pointers. 2 commented lines below not needed.
      //state.next = state.codes;
      //state.lencode = state.next;
      // Switch to use dynamic table
      state.lencode = state.lendyn;
      state.lenbits = 7;

      opts = { bits: state.lenbits };
      ret = inflate_table(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
      state.lenbits = opts.bits;

      if (ret) {
        strm.msg = 'invalid code lengths set';
        state.mode = BAD;
        break;
      }
      //Tracev((stderr, "inflate:       code lengths ok\n"));
      state.have = 0;
      state.mode = CODELENS;
      /* falls through */
    case CODELENS:
      while (state.have < state.nlen + state.ndist) {
        for (;;) {
          here = state.lencode[hold & ((1 << state.lenbits) - 1)];/*BITS(state.lenbits)*/
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if ((here_bits) <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        if (here_val < 16) {
          //--- DROPBITS(here.bits) ---//
          hold >>>= here_bits;
          bits -= here_bits;
          //---//
          state.lens[state.have++] = here_val;
        }
        else {
          if (here_val === 16) {
            //=== NEEDBITS(here.bits + 2);
            n = here_bits + 2;
            while (bits < n) {
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            //===//
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            if (state.have === 0) {
              strm.msg = 'invalid bit length repeat';
              state.mode = BAD;
              break;
            }
            len = state.lens[state.have - 1];
            copy = 3 + (hold & 0x03);//BITS(2);
            //--- DROPBITS(2) ---//
            hold >>>= 2;
            bits -= 2;
            //---//
          }
          else if (here_val === 17) {
            //=== NEEDBITS(here.bits + 3);
            n = here_bits + 3;
            while (bits < n) {
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            //===//
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            len = 0;
            copy = 3 + (hold & 0x07);//BITS(3);
            //--- DROPBITS(3) ---//
            hold >>>= 3;
            bits -= 3;
            //---//
          }
          else {
            //=== NEEDBITS(here.bits + 7);
            n = here_bits + 7;
            while (bits < n) {
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            //===//
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            len = 0;
            copy = 11 + (hold & 0x7f);//BITS(7);
            //--- DROPBITS(7) ---//
            hold >>>= 7;
            bits -= 7;
            //---//
          }
          if (state.have + copy > state.nlen + state.ndist) {
            strm.msg = 'invalid bit length repeat';
            state.mode = BAD;
            break;
          }
          while (copy--) {
            state.lens[state.have++] = len;
          }
        }
      }

      /* handle error breaks in while */
      if (state.mode === BAD) { break; }

      /* check for end-of-block code (better have one) */
      if (state.lens[256] === 0) {
        strm.msg = 'invalid code -- missing end-of-block';
        state.mode = BAD;
        break;
      }

      /* build code tables -- note: do not change the lenbits or distbits
         values here (9 and 6) without reading the comments in inftrees.h
         concerning the ENOUGH constants, which depend on those values */
      state.lenbits = 9;

      opts = { bits: state.lenbits };
      ret = inflate_table(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
      // We have separate tables & no pointers. 2 commented lines below not needed.
      // state.next_index = opts.table_index;
      state.lenbits = opts.bits;
      // state.lencode = state.next;

      if (ret) {
        strm.msg = 'invalid literal/lengths set';
        state.mode = BAD;
        break;
      }

      state.distbits = 6;
      //state.distcode.copy(state.codes);
      // Switch to use dynamic table
      state.distcode = state.distdyn;
      opts = { bits: state.distbits };
      ret = inflate_table(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
      // We have separate tables & no pointers. 2 commented lines below not needed.
      // state.next_index = opts.table_index;
      state.distbits = opts.bits;
      // state.distcode = state.next;

      if (ret) {
        strm.msg = 'invalid distances set';
        state.mode = BAD;
        break;
      }
      //Tracev((stderr, 'inflate:       codes ok\n'));
      state.mode = LEN_;
      if (flush === Z_TREES) { break inf_leave; }
      /* falls through */
    case LEN_:
      state.mode = LEN;
      /* falls through */
    case LEN:
      if (have >= 6 && left >= 258) {
        //--- RESTORE() ---
        strm.next_out = put;
        strm.avail_out = left;
        strm.next_in = next;
        strm.avail_in = have;
        state.hold = hold;
        state.bits = bits;
        //---
        inflate_fast(strm, _out);
        //--- LOAD() ---
        put = strm.next_out;
        output = strm.output;
        left = strm.avail_out;
        next = strm.next_in;
        input = strm.input;
        have = strm.avail_in;
        hold = state.hold;
        bits = state.bits;
        //---

        if (state.mode === TYPE) {
          state.back = -1;
        }
        break;
      }
      state.back = 0;
      for (;;) {
        here = state.lencode[hold & ((1 << state.lenbits) - 1)];  /*BITS(state.lenbits)*/
        here_bits = here >>> 24;
        here_op = (here >>> 16) & 0xff;
        here_val = here & 0xffff;

        if (here_bits <= bits) { break; }
        //--- PULLBYTE() ---//
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
        //---//
      }
      if (here_op && (here_op & 0xf0) === 0) {
        last_bits = here_bits;
        last_op = here_op;
        last_val = here_val;
        for (;;) {
          here = state.lencode[last_val +
                  ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if ((last_bits + here_bits) <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        //--- DROPBITS(last.bits) ---//
        hold >>>= last_bits;
        bits -= last_bits;
        //---//
        state.back += last_bits;
      }
      //--- DROPBITS(here.bits) ---//
      hold >>>= here_bits;
      bits -= here_bits;
      //---//
      state.back += here_bits;
      state.length = here_val;
      if (here_op === 0) {
        //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
        //        "inflate:         literal '%c'\n" :
        //        "inflate:         literal 0x%02x\n", here.val));
        state.mode = LIT;
        break;
      }
      if (here_op & 32) {
        //Tracevv((stderr, "inflate:         end of block\n"));
        state.back = -1;
        state.mode = TYPE;
        break;
      }
      if (here_op & 64) {
        strm.msg = 'invalid literal/length code';
        state.mode = BAD;
        break;
      }
      state.extra = here_op & 15;
      state.mode = LENEXT;
      /* falls through */
    case LENEXT:
      if (state.extra) {
        //=== NEEDBITS(state.extra);
        n = state.extra;
        while (bits < n) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.length += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
        //--- DROPBITS(state.extra) ---//
        hold >>>= state.extra;
        bits -= state.extra;
        //---//
        state.back += state.extra;
      }
      //Tracevv((stderr, "inflate:         length %u\n", state.length));
      state.was = state.length;
      state.mode = DIST;
      /* falls through */
    case DIST:
      for (;;) {
        here = state.distcode[hold & ((1 << state.distbits) - 1)];/*BITS(state.distbits)*/
        here_bits = here >>> 24;
        here_op = (here >>> 16) & 0xff;
        here_val = here & 0xffff;

        if ((here_bits) <= bits) { break; }
        //--- PULLBYTE() ---//
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
        //---//
      }
      if ((here_op & 0xf0) === 0) {
        last_bits = here_bits;
        last_op = here_op;
        last_val = here_val;
        for (;;) {
          here = state.distcode[last_val +
                  ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if ((last_bits + here_bits) <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        //--- DROPBITS(last.bits) ---//
        hold >>>= last_bits;
        bits -= last_bits;
        //---//
        state.back += last_bits;
      }
      //--- DROPBITS(here.bits) ---//
      hold >>>= here_bits;
      bits -= here_bits;
      //---//
      state.back += here_bits;
      if (here_op & 64) {
        strm.msg = 'invalid distance code';
        state.mode = BAD;
        break;
      }
      state.offset = here_val;
      state.extra = (here_op) & 15;
      state.mode = DISTEXT;
      /* falls through */
    case DISTEXT:
      if (state.extra) {
        //=== NEEDBITS(state.extra);
        n = state.extra;
        while (bits < n) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.offset += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
        //--- DROPBITS(state.extra) ---//
        hold >>>= state.extra;
        bits -= state.extra;
        //---//
        state.back += state.extra;
      }
//#ifdef INFLATE_STRICT
      if (state.offset > state.dmax) {
        strm.msg = 'invalid distance too far back';
        state.mode = BAD;
        break;
      }
//#endif
      //Tracevv((stderr, "inflate:         distance %u\n", state.offset));
      state.mode = MATCH;
      /* falls through */
    case MATCH:
      if (left === 0) { break inf_leave; }
      copy = _out - left;
      if (state.offset > copy) {         /* copy from window */
        copy = state.offset - copy;
        if (copy > state.whave) {
          if (state.sane) {
            strm.msg = 'invalid distance too far back';
            state.mode = BAD;
            break;
          }
// (!) This block is disabled in zlib defailts,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//          Trace((stderr, "inflate.c too far\n"));
//          copy -= state.whave;
//          if (copy > state.length) { copy = state.length; }
//          if (copy > left) { copy = left; }
//          left -= copy;
//          state.length -= copy;
//          do {
//            output[put++] = 0;
//          } while (--copy);
//          if (state.length === 0) { state.mode = LEN; }
//          break;
//#endif
        }
        if (copy > state.wnext) {
          copy -= state.wnext;
          from = state.wsize - copy;
        }
        else {
          from = state.wnext - copy;
        }
        if (copy > state.length) { copy = state.length; }
        from_source = state.window;
      }
      else {                              /* copy from output */
        from_source = output;
        from = put - state.offset;
        copy = state.length;
      }
      if (copy > left) { copy = left; }
      left -= copy;
      state.length -= copy;
      do {
        output[put++] = from_source[from++];
      } while (--copy);
      if (state.length === 0) { state.mode = LEN; }
      break;
    case LIT:
      if (left === 0) { break inf_leave; }
      output[put++] = state.length;
      left--;
      state.mode = LEN;
      break;
    case CHECK:
      if (state.wrap) {
        //=== NEEDBITS(32);
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          // Use '|' insdead of '+' to make sure that result is signed
          hold |= input[next++] << bits;
          bits += 8;
        }
        //===//
        _out -= left;
        strm.total_out += _out;
        state.total += _out;
        if (_out) {
          strm.adler = state.check =
              /*UPDATE(state.check, put - _out, _out);*/
              (state.flags ? crc32(state.check, output, _out, put - _out) : adler32(state.check, output, _out, put - _out));

        }
        _out = left;
        // NB: crc32 stored as signed 32-bit int, zswap32 returns signed too
        if ((state.flags ? hold : zswap32(hold)) !== state.check) {
          strm.msg = 'incorrect data check';
          state.mode = BAD;
          break;
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        //Tracev((stderr, "inflate:   check matches trailer\n"));
      }
      state.mode = LENGTH;
      /* falls through */
    case LENGTH:
      if (state.wrap && state.flags) {
        //=== NEEDBITS(32);
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if (hold !== (state.total & 0xffffffff)) {
          strm.msg = 'incorrect length check';
          state.mode = BAD;
          break;
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        //Tracev((stderr, "inflate:   length matches trailer\n"));
      }
      state.mode = DONE;
      /* falls through */
    case DONE:
      ret = Z_STREAM_END;
      break inf_leave;
    case BAD:
      ret = Z_DATA_ERROR;
      break inf_leave;
    case MEM:
      return Z_MEM_ERROR;
    case SYNC:
      /* falls through */
    default:
      return Z_STREAM_ERROR;
    }
  }

  // inf_leave <- here is real place for "goto inf_leave", emulated via "break inf_leave"

  /*
     Return from inflate(), updating the total counts and the check value.
     If there was no progress during the inflate() call, return a buffer
     error.  Call updatewindow() to create and/or update the window state.
     Note: a memory error from inflate() is non-recoverable.
   */

  //--- RESTORE() ---
  strm.next_out = put;
  strm.avail_out = left;
  strm.next_in = next;
  strm.avail_in = have;
  state.hold = hold;
  state.bits = bits;
  //---

  if (state.wsize || (_out !== strm.avail_out && state.mode < BAD &&
                      (state.mode < CHECK || flush !== Z_FINISH))) {
    if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) {
      state.mode = MEM;
      return Z_MEM_ERROR;
    }
  }
  _in -= strm.avail_in;
  _out -= strm.avail_out;
  strm.total_in += _in;
  strm.total_out += _out;
  state.total += _out;
  if (state.wrap && _out) {
    strm.adler = state.check = /*UPDATE(state.check, strm.next_out - _out, _out);*/
      (state.flags ? crc32(state.check, output, _out, strm.next_out - _out) : adler32(state.check, output, _out, strm.next_out - _out));
  }
  strm.data_type = state.bits + (state.last ? 64 : 0) +
                    (state.mode === TYPE ? 128 : 0) +
                    (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
  if (((_in === 0 && _out === 0) || flush === Z_FINISH) && ret === Z_OK) {
    ret = Z_BUF_ERROR;
  }
  return ret;
}

function inflateEnd(strm) {

  if (!strm || !strm.state /*|| strm->zfree == (free_func)0*/) {
    return Z_STREAM_ERROR;
  }

  var state = strm.state;
  if (state.window) {
    state.window = null;
  }
  strm.state = null;
  return Z_OK;
}

function inflateGetHeader(strm, head) {
  var state;

  /* check state */
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  if ((state.wrap & 2) === 0) { return Z_STREAM_ERROR; }

  /* save header structure */
  state.head = head;
  head.done = false;
  return Z_OK;
}

function inflateSetDictionary(strm, dictionary) {
  var dictLength = dictionary.length;

  var state;
  var dictid;
  var ret;

  /* check state */
  if (!strm /* == Z_NULL */ || !strm.state /* == Z_NULL */) { return Z_STREAM_ERROR; }
  state = strm.state;

  if (state.wrap !== 0 && state.mode !== DICT) {
    return Z_STREAM_ERROR;
  }

  /* check for correct dictionary identifier */
  if (state.mode === DICT) {
    dictid = 1; /* adler32(0, null, 0)*/
    /* dictid = adler32(dictid, dictionary, dictLength); */
    dictid = adler32(dictid, dictionary, dictLength, 0);
    if (dictid !== state.check) {
      return Z_DATA_ERROR;
    }
  }
  /* copy dictionary to window using updatewindow(), which will amend the
   existing dictionary if appropriate */
  ret = updatewindow(strm, dictionary, dictLength, dictLength);
  if (ret) {
    state.mode = MEM;
    return Z_MEM_ERROR;
  }
  state.havedict = 1;
  // Tracev((stderr, "inflate:   dictionary set\n"));
  return Z_OK;
}

exports.inflateReset = inflateReset;
exports.inflateReset2 = inflateReset2;
exports.inflateResetKeep = inflateResetKeep;
exports.inflateInit = inflateInit;
exports.inflateInit2 = inflateInit2;
exports.inflate = inflate;
exports.inflateEnd = inflateEnd;
exports.inflateGetHeader = inflateGetHeader;
exports.inflateSetDictionary = inflateSetDictionary;
exports.inflateInfo = 'pako inflate (from Nodeca project)';

/* Not implemented
exports.inflateCopy = inflateCopy;
exports.inflateGetDictionary = inflateGetDictionary;
exports.inflateMark = inflateMark;
exports.inflatePrime = inflatePrime;
exports.inflateSync = inflateSync;
exports.inflateSyncPoint = inflateSyncPoint;
exports.inflateUndermine = inflateUndermine;
*/


/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

"use strict";



var utils = __webpack_require__(23);

var MAXBITS = 15;
var ENOUGH_LENS = 852;
var ENOUGH_DISTS = 592;
//var ENOUGH = (ENOUGH_LENS+ENOUGH_DISTS);

var CODES = 0;
var LENS = 1;
var DISTS = 2;

var lbase = [ /* Length codes 257..285 base */
  3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31,
  35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0
];

var lext = [ /* Length codes 257..285 extra */
  16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18,
  19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78
];

var dbase = [ /* Distance codes 0..29 base */
  1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
  257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145,
  8193, 12289, 16385, 24577, 0, 0
];

var dext = [ /* Distance codes 0..29 extra */
  16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22,
  23, 23, 24, 24, 25, 25, 26, 26, 27, 27,
  28, 28, 29, 29, 64, 64
];

module.exports = function inflate_table(type, lens, lens_index, codes, table, table_index, work, opts)
{
  var bits = opts.bits;
      //here = opts.here; /* table entry for duplication */

  var len = 0;               /* a code's length in bits */
  var sym = 0;               /* index of code symbols */
  var min = 0, max = 0;          /* minimum and maximum code lengths */
  var root = 0;              /* number of index bits for root table */
  var curr = 0;              /* number of index bits for current table */
  var drop = 0;              /* code bits to drop for sub-table */
  var left = 0;                   /* number of prefix codes available */
  var used = 0;              /* code entries in table used */
  var huff = 0;              /* Huffman code */
  var incr;              /* for incrementing code, index */
  var fill;              /* index for replicating entries */
  var low;               /* low bits for current root entry */
  var mask;              /* mask for low root bits */
  var next;             /* next available space in table */
  var base = null;     /* base value table to use */
  var base_index = 0;
//  var shoextra;    /* extra bits table to use */
  var end;                    /* use base and extra for symbol > end */
  var count = new utils.Buf16(MAXBITS + 1); //[MAXBITS+1];    /* number of codes of each length */
  var offs = new utils.Buf16(MAXBITS + 1); //[MAXBITS+1];     /* offsets in table for each length */
  var extra = null;
  var extra_index = 0;

  var here_bits, here_op, here_val;

  /*
   Process a set of code lengths to create a canonical Huffman code.  The
   code lengths are lens[0..codes-1].  Each length corresponds to the
   symbols 0..codes-1.  The Huffman code is generated by first sorting the
   symbols by length from short to long, and retaining the symbol order
   for codes with equal lengths.  Then the code starts with all zero bits
   for the first code of the shortest length, and the codes are integer
   increments for the same length, and zeros are appended as the length
   increases.  For the deflate format, these bits are stored backwards
   from their more natural integer increment ordering, and so when the
   decoding tables are built in the large loop below, the integer codes
   are incremented backwards.

   This routine assumes, but does not check, that all of the entries in
   lens[] are in the range 0..MAXBITS.  The caller must assure this.
   1..MAXBITS is interpreted as that code length.  zero means that that
   symbol does not occur in this code.

   The codes are sorted by computing a count of codes for each length,
   creating from that a table of starting indices for each length in the
   sorted table, and then entering the symbols in order in the sorted
   table.  The sorted table is work[], with that space being provided by
   the caller.

   The length counts are used for other purposes as well, i.e. finding
   the minimum and maximum length codes, determining if there are any
   codes at all, checking for a valid set of lengths, and looking ahead
   at length counts to determine sub-table sizes when building the
   decoding tables.
   */

  /* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */
  for (len = 0; len <= MAXBITS; len++) {
    count[len] = 0;
  }
  for (sym = 0; sym < codes; sym++) {
    count[lens[lens_index + sym]]++;
  }

  /* bound code lengths, force root to be within code lengths */
  root = bits;
  for (max = MAXBITS; max >= 1; max--) {
    if (count[max] !== 0) { break; }
  }
  if (root > max) {
    root = max;
  }
  if (max === 0) {                     /* no symbols to code at all */
    //table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
    //table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
    //table.val[opts.table_index++] = 0;   //here.val = (var short)0;
    table[table_index++] = (1 << 24) | (64 << 16) | 0;


    //table.op[opts.table_index] = 64;
    //table.bits[opts.table_index] = 1;
    //table.val[opts.table_index++] = 0;
    table[table_index++] = (1 << 24) | (64 << 16) | 0;

    opts.bits = 1;
    return 0;     /* no symbols, but wait for decoding to report error */
  }
  for (min = 1; min < max; min++) {
    if (count[min] !== 0) { break; }
  }
  if (root < min) {
    root = min;
  }

  /* check for an over-subscribed or incomplete set of lengths */
  left = 1;
  for (len = 1; len <= MAXBITS; len++) {
    left <<= 1;
    left -= count[len];
    if (left < 0) {
      return -1;
    }        /* over-subscribed */
  }
  if (left > 0 && (type === CODES || max !== 1)) {
    return -1;                      /* incomplete set */
  }

  /* generate offsets into symbol table for each length for sorting */
  offs[1] = 0;
  for (len = 1; len < MAXBITS; len++) {
    offs[len + 1] = offs[len] + count[len];
  }

  /* sort symbols by length, by symbol order within each length */
  for (sym = 0; sym < codes; sym++) {
    if (lens[lens_index + sym] !== 0) {
      work[offs[lens[lens_index + sym]]++] = sym;
    }
  }

  /*
   Create and fill in decoding tables.  In this loop, the table being
   filled is at next and has curr index bits.  The code being used is huff
   with length len.  That code is converted to an index by dropping drop
   bits off of the bottom.  For codes where len is less than drop + curr,
   those top drop + curr - len bits are incremented through all values to
   fill the table with replicated entries.

   root is the number of index bits for the root table.  When len exceeds
   root, sub-tables are created pointed to by the root entry with an index
   of the low root bits of huff.  This is saved in low to check for when a
   new sub-table should be started.  drop is zero when the root table is
   being filled, and drop is root when sub-tables are being filled.

   When a new sub-table is needed, it is necessary to look ahead in the
   code lengths to determine what size sub-table is needed.  The length
   counts are used for this, and so count[] is decremented as codes are
   entered in the tables.

   used keeps track of how many table entries have been allocated from the
   provided *table space.  It is checked for LENS and DIST tables against
   the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in
   the initial root table size constants.  See the comments in inftrees.h
   for more information.

   sym increments through all symbols, and the loop terminates when
   all codes of length max, i.e. all codes, have been processed.  This
   routine permits incomplete codes, so another loop after this one fills
   in the rest of the decoding tables with invalid code markers.
   */

  /* set up for code type */
  // poor man optimization - use if-else instead of switch,
  // to avoid deopts in old v8
  if (type === CODES) {
    base = extra = work;    /* dummy value--not used */
    end = 19;

  } else if (type === LENS) {
    base = lbase;
    base_index -= 257;
    extra = lext;
    extra_index -= 257;
    end = 256;

  } else {                    /* DISTS */
    base = dbase;
    extra = dext;
    end = -1;
  }

  /* initialize opts for loop */
  huff = 0;                   /* starting code */
  sym = 0;                    /* starting code symbol */
  len = min;                  /* starting code length */
  next = table_index;              /* current table to fill in */
  curr = root;                /* current table index bits */
  drop = 0;                   /* current bits to drop from code for index */
  low = -1;                   /* trigger new sub-table when len > root */
  used = 1 << root;          /* use root table entries */
  mask = used - 1;            /* mask for comparing low */

  /* check available table space */
  if ((type === LENS && used > ENOUGH_LENS) ||
    (type === DISTS && used > ENOUGH_DISTS)) {
    return 1;
  }

  /* process all codes and make table entries */
  for (;;) {
    /* create table entry */
    here_bits = len - drop;
    if (work[sym] < end) {
      here_op = 0;
      here_val = work[sym];
    }
    else if (work[sym] > end) {
      here_op = extra[extra_index + work[sym]];
      here_val = base[base_index + work[sym]];
    }
    else {
      here_op = 32 + 64;         /* end of block */
      here_val = 0;
    }

    /* replicate for those indices with low len bits equal to huff */
    incr = 1 << (len - drop);
    fill = 1 << curr;
    min = fill;                 /* save offset to next table */
    do {
      fill -= incr;
      table[next + (huff >> drop) + fill] = (here_bits << 24) | (here_op << 16) | here_val |0;
    } while (fill !== 0);

    /* backwards increment the len-bit code huff */
    incr = 1 << (len - 1);
    while (huff & incr) {
      incr >>= 1;
    }
    if (incr !== 0) {
      huff &= incr - 1;
      huff += incr;
    } else {
      huff = 0;
    }

    /* go to next symbol, update count, len */
    sym++;
    if (--count[len] === 0) {
      if (len === max) { break; }
      len = lens[lens_index + work[sym]];
    }

    /* create new sub-table if needed */
    if (len > root && (huff & mask) !== low) {
      /* if first time, transition to sub-tables */
      if (drop === 0) {
        drop = root;
      }

      /* increment past last table */
      next += min;            /* here min is 1 << curr */

      /* determine length of next table */
      curr = len - drop;
      left = 1 << curr;
      while (curr + drop < max) {
        left -= count[curr + drop];
        if (left <= 0) { break; }
        curr++;
        left <<= 1;
      }

      /* check for enough space */
      used += 1 << curr;
      if ((type === LENS && used > ENOUGH_LENS) ||
        (type === DISTS && used > ENOUGH_DISTS)) {
        return 1;
      }

      /* point entry in root table to sub-table */
      low = huff & mask;
      /*table.op[low] = curr;
      table.bits[low] = root;
      table.val[low] = next - opts.table_index;*/
      table[low] = (root << 24) | (curr << 16) | (next - table_index) |0;
    }
  }

  /* fill in remaining table entry if code is incomplete (guaranteed to have
   at most one remaining entry, since if the code is incomplete, the
   maximum code length that was allowed to get this far is one bit) */
  if (huff !== 0) {
    //table.op[next + huff] = 64;            /* invalid code marker */
    //table.bits[next + huff] = len - drop;
    //table.val[next + huff] = 0;
    table[next + huff] = ((len - drop) << 24) | (64 << 16) |0;
  }

  /* set return parameters */
  //opts.table_index += used;
  opts.bits = root;
  return 0;
};


/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

"use strict";



var utils = __webpack_require__(23);

/* Public constants ==========================================================*/
/* ===========================================================================*/


//var Z_FILTERED          = 1;
//var Z_HUFFMAN_ONLY      = 2;
//var Z_RLE               = 3;
var Z_FIXED               = 4;
//var Z_DEFAULT_STRATEGY  = 0;

/* Possible values of the data_type field (though see inflate()) */
var Z_BINARY              = 0;
var Z_TEXT                = 1;
//var Z_ASCII             = 1; // = Z_TEXT
var Z_UNKNOWN             = 2;

/*============================================================================*/


function zero(buf) { var len = buf.length; while (--len >= 0) { buf[len] = 0; } }

// From zutil.h

var STORED_BLOCK = 0;
var STATIC_TREES = 1;
var DYN_TREES    = 2;
/* The three kinds of block type */

var MIN_MATCH    = 3;
var MAX_MATCH    = 258;
/* The minimum and maximum match lengths */

// From deflate.h
/* ===========================================================================
 * Internal compression state.
 */

var LENGTH_CODES  = 29;
/* number of length codes, not counting the special END_BLOCK code */

var LITERALS      = 256;
/* number of literal bytes 0..255 */

var L_CODES       = LITERALS + 1 + LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */

var D_CODES       = 30;
/* number of distance codes */

var BL_CODES      = 19;
/* number of codes used to transfer the bit lengths */

var HEAP_SIZE     = 2 * L_CODES + 1;
/* maximum heap size */

var MAX_BITS      = 15;
/* All codes must not exceed MAX_BITS bits */

var Buf_size      = 16;
/* size of bit buffer in bi_buf */


/* ===========================================================================
 * Constants
 */

var MAX_BL_BITS = 7;
/* Bit length codes must not exceed MAX_BL_BITS bits */

var END_BLOCK   = 256;
/* end of block literal code */

var REP_3_6     = 16;
/* repeat previous bit length 3-6 times (2 bits of repeat count) */

var REPZ_3_10   = 17;
/* repeat a zero length 3-10 times  (3 bits of repeat count) */

var REPZ_11_138 = 18;
/* repeat a zero length 11-138 times  (7 bits of repeat count) */

/* eslint-disable comma-spacing,array-bracket-spacing */
var extra_lbits =   /* extra bits for each length code */
  [0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0];

var extra_dbits =   /* extra bits for each distance code */
  [0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];

var extra_blbits =  /* extra bits for each bit length code */
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7];

var bl_order =
  [16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];
/* eslint-enable comma-spacing,array-bracket-spacing */

/* The lengths of the bit length codes are sent in order of decreasing
 * probability, to avoid transmitting the lengths for unused bit length codes.
 */

/* ===========================================================================
 * Local data. These are initialized only once.
 */

// We pre-fill arrays with 0 to avoid uninitialized gaps

var DIST_CODE_LEN = 512; /* see definition of array dist_code below */

// !!!! Use flat array insdead of structure, Freq = i*2, Len = i*2+1
var static_ltree  = new Array((L_CODES + 2) * 2);
zero(static_ltree);
/* The static literal tree. Since the bit lengths are imposed, there is no
 * need for the L_CODES extra codes used during heap construction. However
 * The codes 286 and 287 are needed to build a canonical tree (see _tr_init
 * below).
 */

var static_dtree  = new Array(D_CODES * 2);
zero(static_dtree);
/* The static distance tree. (Actually a trivial tree since all codes use
 * 5 bits.)
 */

var _dist_code    = new Array(DIST_CODE_LEN);
zero(_dist_code);
/* Distance codes. The first 256 values correspond to the distances
 * 3 .. 258, the last 256 values correspond to the top 8 bits of
 * the 15 bit distances.
 */

var _length_code  = new Array(MAX_MATCH - MIN_MATCH + 1);
zero(_length_code);
/* length code for each normalized match length (0 == MIN_MATCH) */

var base_length   = new Array(LENGTH_CODES);
zero(base_length);
/* First normalized length for each code (0 = MIN_MATCH) */

var base_dist     = new Array(D_CODES);
zero(base_dist);
/* First normalized distance for each code (0 = distance of 1) */


function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {

  this.static_tree  = static_tree;  /* static tree or NULL */
  this.extra_bits   = extra_bits;   /* extra bits for each code or NULL */
  this.extra_base   = extra_base;   /* base index for extra_bits */
  this.elems        = elems;        /* max number of elements in the tree */
  this.max_length   = max_length;   /* max bit length for the codes */

  // show if `static_tree` has data or dummy - needed for monomorphic objects
  this.has_stree    = static_tree && static_tree.length;
}


var static_l_desc;
var static_d_desc;
var static_bl_desc;


function TreeDesc(dyn_tree, stat_desc) {
  this.dyn_tree = dyn_tree;     /* the dynamic tree */
  this.max_code = 0;            /* largest code with non zero frequency */
  this.stat_desc = stat_desc;   /* the corresponding static tree */
}



function d_code(dist) {
  return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
}


/* ===========================================================================
 * Output a short LSB first on the stream.
 * IN assertion: there is enough room in pendingBuf.
 */
function put_short(s, w) {
//    put_byte(s, (uch)((w) & 0xff));
//    put_byte(s, (uch)((ush)(w) >> 8));
  s.pending_buf[s.pending++] = (w) & 0xff;
  s.pending_buf[s.pending++] = (w >>> 8) & 0xff;
}


/* ===========================================================================
 * Send a value on a given number of bits.
 * IN assertion: length <= 16 and value fits in length bits.
 */
function send_bits(s, value, length) {
  if (s.bi_valid > (Buf_size - length)) {
    s.bi_buf |= (value << s.bi_valid) & 0xffff;
    put_short(s, s.bi_buf);
    s.bi_buf = value >> (Buf_size - s.bi_valid);
    s.bi_valid += length - Buf_size;
  } else {
    s.bi_buf |= (value << s.bi_valid) & 0xffff;
    s.bi_valid += length;
  }
}


function send_code(s, c, tree) {
  send_bits(s, tree[c * 2]/*.Code*/, tree[c * 2 + 1]/*.Len*/);
}


/* ===========================================================================
 * Reverse the first len bits of a code, using straightforward code (a faster
 * method would use a table)
 * IN assertion: 1 <= len <= 15
 */
function bi_reverse(code, len) {
  var res = 0;
  do {
    res |= code & 1;
    code >>>= 1;
    res <<= 1;
  } while (--len > 0);
  return res >>> 1;
}


/* ===========================================================================
 * Flush the bit buffer, keeping at most 7 bits in it.
 */
function bi_flush(s) {
  if (s.bi_valid === 16) {
    put_short(s, s.bi_buf);
    s.bi_buf = 0;
    s.bi_valid = 0;

  } else if (s.bi_valid >= 8) {
    s.pending_buf[s.pending++] = s.bi_buf & 0xff;
    s.bi_buf >>= 8;
    s.bi_valid -= 8;
  }
}


/* ===========================================================================
 * Compute the optimal bit lengths for a tree and update the total bit length
 * for the current block.
 * IN assertion: the fields freq and dad are set, heap[heap_max] and
 *    above are the tree nodes sorted by increasing frequency.
 * OUT assertions: the field len is set to the optimal bit length, the
 *     array bl_count contains the frequencies for each bit length.
 *     The length opt_len is updated; static_len is also updated if stree is
 *     not null.
 */
function gen_bitlen(s, desc)
//    deflate_state *s;
//    tree_desc *desc;    /* the tree descriptor */
{
  var tree            = desc.dyn_tree;
  var max_code        = desc.max_code;
  var stree           = desc.stat_desc.static_tree;
  var has_stree       = desc.stat_desc.has_stree;
  var extra           = desc.stat_desc.extra_bits;
  var base            = desc.stat_desc.extra_base;
  var max_length      = desc.stat_desc.max_length;
  var h;              /* heap index */
  var n, m;           /* iterate over the tree elements */
  var bits;           /* bit length */
  var xbits;          /* extra bits */
  var f;              /* frequency */
  var overflow = 0;   /* number of elements with bit length too large */

  for (bits = 0; bits <= MAX_BITS; bits++) {
    s.bl_count[bits] = 0;
  }

  /* In a first pass, compute the optimal bit lengths (which may
   * overflow in the case of the bit length tree).
   */
  tree[s.heap[s.heap_max] * 2 + 1]/*.Len*/ = 0; /* root of the heap */

  for (h = s.heap_max + 1; h < HEAP_SIZE; h++) {
    n = s.heap[h];
    bits = tree[tree[n * 2 + 1]/*.Dad*/ * 2 + 1]/*.Len*/ + 1;
    if (bits > max_length) {
      bits = max_length;
      overflow++;
    }
    tree[n * 2 + 1]/*.Len*/ = bits;
    /* We overwrite tree[n].Dad which is no longer needed */

    if (n > max_code) { continue; } /* not a leaf node */

    s.bl_count[bits]++;
    xbits = 0;
    if (n >= base) {
      xbits = extra[n - base];
    }
    f = tree[n * 2]/*.Freq*/;
    s.opt_len += f * (bits + xbits);
    if (has_stree) {
      s.static_len += f * (stree[n * 2 + 1]/*.Len*/ + xbits);
    }
  }
  if (overflow === 0) { return; }

  // Trace((stderr,"\nbit length overflow\n"));
  /* This happens for example on obj2 and pic of the Calgary corpus */

  /* Find the first bit length which could increase: */
  do {
    bits = max_length - 1;
    while (s.bl_count[bits] === 0) { bits--; }
    s.bl_count[bits]--;      /* move one leaf down the tree */
    s.bl_count[bits + 1] += 2; /* move one overflow item as its brother */
    s.bl_count[max_length]--;
    /* The brother of the overflow item also moves one step up,
     * but this does not affect bl_count[max_length]
     */
    overflow -= 2;
  } while (overflow > 0);

  /* Now recompute all bit lengths, scanning in increasing frequency.
   * h is still equal to HEAP_SIZE. (It is simpler to reconstruct all
   * lengths instead of fixing only the wrong ones. This idea is taken
   * from 'ar' written by Haruhiko Okumura.)
   */
  for (bits = max_length; bits !== 0; bits--) {
    n = s.bl_count[bits];
    while (n !== 0) {
      m = s.heap[--h];
      if (m > max_code) { continue; }
      if (tree[m * 2 + 1]/*.Len*/ !== bits) {
        // Trace((stderr,"code %d bits %d->%d\n", m, tree[m].Len, bits));
        s.opt_len += (bits - tree[m * 2 + 1]/*.Len*/) * tree[m * 2]/*.Freq*/;
        tree[m * 2 + 1]/*.Len*/ = bits;
      }
      n--;
    }
  }
}


/* ===========================================================================
 * Generate the codes for a given tree and bit counts (which need not be
 * optimal).
 * IN assertion: the array bl_count contains the bit length statistics for
 * the given tree and the field len is set for all tree elements.
 * OUT assertion: the field code is set for all tree elements of non
 *     zero code length.
 */
function gen_codes(tree, max_code, bl_count)
//    ct_data *tree;             /* the tree to decorate */
//    int max_code;              /* largest code with non zero frequency */
//    ushf *bl_count;            /* number of codes at each bit length */
{
  var next_code = new Array(MAX_BITS + 1); /* next code value for each bit length */
  var code = 0;              /* running code value */
  var bits;                  /* bit index */
  var n;                     /* code index */

  /* The distribution counts are first used to generate the code values
   * without bit reversal.
   */
  for (bits = 1; bits <= MAX_BITS; bits++) {
    next_code[bits] = code = (code + bl_count[bits - 1]) << 1;
  }
  /* Check that the bit counts in bl_count are consistent. The last code
   * must be all ones.
   */
  //Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
  //        "inconsistent bit counts");
  //Tracev((stderr,"\ngen_codes: max_code %d ", max_code));

  for (n = 0;  n <= max_code; n++) {
    var len = tree[n * 2 + 1]/*.Len*/;
    if (len === 0) { continue; }
    /* Now reverse the bits */
    tree[n * 2]/*.Code*/ = bi_reverse(next_code[len]++, len);

    //Tracecv(tree != static_ltree, (stderr,"\nn %3d %c l %2d c %4x (%x) ",
    //     n, (isgraph(n) ? n : ' '), len, tree[n].Code, next_code[len]-1));
  }
}


/* ===========================================================================
 * Initialize the various 'constant' tables.
 */
function tr_static_init() {
  var n;        /* iterates over tree elements */
  var bits;     /* bit counter */
  var length;   /* length value */
  var code;     /* code value */
  var dist;     /* distance index */
  var bl_count = new Array(MAX_BITS + 1);
  /* number of codes at each bit length for an optimal tree */

  // do check in _tr_init()
  //if (static_init_done) return;

  /* For some embedded targets, global variables are not initialized: */
/*#ifdef NO_INIT_GLOBAL_POINTERS
  static_l_desc.static_tree = static_ltree;
  static_l_desc.extra_bits = extra_lbits;
  static_d_desc.static_tree = static_dtree;
  static_d_desc.extra_bits = extra_dbits;
  static_bl_desc.extra_bits = extra_blbits;
#endif*/

  /* Initialize the mapping length (0..255) -> length code (0..28) */
  length = 0;
  for (code = 0; code < LENGTH_CODES - 1; code++) {
    base_length[code] = length;
    for (n = 0; n < (1 << extra_lbits[code]); n++) {
      _length_code[length++] = code;
    }
  }
  //Assert (length == 256, "tr_static_init: length != 256");
  /* Note that the length 255 (match length 258) can be represented
   * in two different ways: code 284 + 5 bits or code 285, so we
   * overwrite length_code[255] to use the best encoding:
   */
  _length_code[length - 1] = code;

  /* Initialize the mapping dist (0..32K) -> dist code (0..29) */
  dist = 0;
  for (code = 0; code < 16; code++) {
    base_dist[code] = dist;
    for (n = 0; n < (1 << extra_dbits[code]); n++) {
      _dist_code[dist++] = code;
    }
  }
  //Assert (dist == 256, "tr_static_init: dist != 256");
  dist >>= 7; /* from now on, all distances are divided by 128 */
  for (; code < D_CODES; code++) {
    base_dist[code] = dist << 7;
    for (n = 0; n < (1 << (extra_dbits[code] - 7)); n++) {
      _dist_code[256 + dist++] = code;
    }
  }
  //Assert (dist == 256, "tr_static_init: 256+dist != 512");

  /* Construct the codes of the static literal tree */
  for (bits = 0; bits <= MAX_BITS; bits++) {
    bl_count[bits] = 0;
  }

  n = 0;
  while (n <= 143) {
    static_ltree[n * 2 + 1]/*.Len*/ = 8;
    n++;
    bl_count[8]++;
  }
  while (n <= 255) {
    static_ltree[n * 2 + 1]/*.Len*/ = 9;
    n++;
    bl_count[9]++;
  }
  while (n <= 279) {
    static_ltree[n * 2 + 1]/*.Len*/ = 7;
    n++;
    bl_count[7]++;
  }
  while (n <= 287) {
    static_ltree[n * 2 + 1]/*.Len*/ = 8;
    n++;
    bl_count[8]++;
  }
  /* Codes 286 and 287 do not exist, but we must include them in the
   * tree construction to get a canonical Huffman tree (longest code
   * all ones)
   */
  gen_codes(static_ltree, L_CODES + 1, bl_count);

  /* The static distance tree is trivial: */
  for (n = 0; n < D_CODES; n++) {
    static_dtree[n * 2 + 1]/*.Len*/ = 5;
    static_dtree[n * 2]/*.Code*/ = bi_reverse(n, 5);
  }

  // Now data ready and we can init static trees
  static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);
  static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0,          D_CODES, MAX_BITS);
  static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0,         BL_CODES, MAX_BL_BITS);

  //static_init_done = true;
}


/* ===========================================================================
 * Initialize a new block.
 */
function init_block(s) {
  var n; /* iterates over tree elements */

  /* Initialize the trees. */
  for (n = 0; n < L_CODES;  n++) { s.dyn_ltree[n * 2]/*.Freq*/ = 0; }
  for (n = 0; n < D_CODES;  n++) { s.dyn_dtree[n * 2]/*.Freq*/ = 0; }
  for (n = 0; n < BL_CODES; n++) { s.bl_tree[n * 2]/*.Freq*/ = 0; }

  s.dyn_ltree[END_BLOCK * 2]/*.Freq*/ = 1;
  s.opt_len = s.static_len = 0;
  s.last_lit = s.matches = 0;
}


/* ===========================================================================
 * Flush the bit buffer and align the output on a byte boundary
 */
function bi_windup(s)
{
  if (s.bi_valid > 8) {
    put_short(s, s.bi_buf);
  } else if (s.bi_valid > 0) {
    //put_byte(s, (Byte)s->bi_buf);
    s.pending_buf[s.pending++] = s.bi_buf;
  }
  s.bi_buf = 0;
  s.bi_valid = 0;
}

/* ===========================================================================
 * Copy a stored block, storing first the length and its
 * one's complement if requested.
 */
function copy_block(s, buf, len, header)
//DeflateState *s;
//charf    *buf;    /* the input data */
//unsigned len;     /* its length */
//int      header;  /* true if block header must be written */
{
  bi_windup(s);        /* align on byte boundary */

  if (header) {
    put_short(s, len);
    put_short(s, ~len);
  }
//  while (len--) {
//    put_byte(s, *buf++);
//  }
  utils.arraySet(s.pending_buf, s.window, buf, len, s.pending);
  s.pending += len;
}

/* ===========================================================================
 * Compares to subtrees, using the tree depth as tie breaker when
 * the subtrees have equal frequency. This minimizes the worst case length.
 */
function smaller(tree, n, m, depth) {
  var _n2 = n * 2;
  var _m2 = m * 2;
  return (tree[_n2]/*.Freq*/ < tree[_m2]/*.Freq*/ ||
         (tree[_n2]/*.Freq*/ === tree[_m2]/*.Freq*/ && depth[n] <= depth[m]));
}

/* ===========================================================================
 * Restore the heap property by moving down the tree starting at node k,
 * exchanging a node with the smallest of its two sons if necessary, stopping
 * when the heap property is re-established (each father smaller than its
 * two sons).
 */
function pqdownheap(s, tree, k)
//    deflate_state *s;
//    ct_data *tree;  /* the tree to restore */
//    int k;               /* node to move down */
{
  var v = s.heap[k];
  var j = k << 1;  /* left son of k */
  while (j <= s.heap_len) {
    /* Set j to the smallest of the two sons: */
    if (j < s.heap_len &&
      smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {
      j++;
    }
    /* Exit if v is smaller than both sons */
    if (smaller(tree, v, s.heap[j], s.depth)) { break; }

    /* Exchange v with the smallest son */
    s.heap[k] = s.heap[j];
    k = j;

    /* And continue down the tree, setting j to the left son of k */
    j <<= 1;
  }
  s.heap[k] = v;
}


// inlined manually
// var SMALLEST = 1;

/* ===========================================================================
 * Send the block data compressed using the given Huffman trees
 */
function compress_block(s, ltree, dtree)
//    deflate_state *s;
//    const ct_data *ltree; /* literal tree */
//    const ct_data *dtree; /* distance tree */
{
  var dist;           /* distance of matched string */
  var lc;             /* match length or unmatched char (if dist == 0) */
  var lx = 0;         /* running index in l_buf */
  var code;           /* the code to send */
  var extra;          /* number of extra bits to send */

  if (s.last_lit !== 0) {
    do {
      dist = (s.pending_buf[s.d_buf + lx * 2] << 8) | (s.pending_buf[s.d_buf + lx * 2 + 1]);
      lc = s.pending_buf[s.l_buf + lx];
      lx++;

      if (dist === 0) {
        send_code(s, lc, ltree); /* send a literal byte */
        //Tracecv(isgraph(lc), (stderr," '%c' ", lc));
      } else {
        /* Here, lc is the match length - MIN_MATCH */
        code = _length_code[lc];
        send_code(s, code + LITERALS + 1, ltree); /* send the length code */
        extra = extra_lbits[code];
        if (extra !== 0) {
          lc -= base_length[code];
          send_bits(s, lc, extra);       /* send the extra length bits */
        }
        dist--; /* dist is now the match distance - 1 */
        code = d_code(dist);
        //Assert (code < D_CODES, "bad d_code");

        send_code(s, code, dtree);       /* send the distance code */
        extra = extra_dbits[code];
        if (extra !== 0) {
          dist -= base_dist[code];
          send_bits(s, dist, extra);   /* send the extra distance bits */
        }
      } /* literal or match pair ? */

      /* Check that the overlay between pending_buf and d_buf+l_buf is ok: */
      //Assert((uInt)(s->pending) < s->lit_bufsize + 2*lx,
      //       "pendingBuf overflow");

    } while (lx < s.last_lit);
  }

  send_code(s, END_BLOCK, ltree);
}


/* ===========================================================================
 * Construct one Huffman tree and assigns the code bit strings and lengths.
 * Update the total bit length for the current block.
 * IN assertion: the field freq is set for all tree elements.
 * OUT assertions: the fields len and code are set to the optimal bit length
 *     and corresponding code. The length opt_len is updated; static_len is
 *     also updated if stree is not null. The field max_code is set.
 */
function build_tree(s, desc)
//    deflate_state *s;
//    tree_desc *desc; /* the tree descriptor */
{
  var tree     = desc.dyn_tree;
  var stree    = desc.stat_desc.static_tree;
  var has_stree = desc.stat_desc.has_stree;
  var elems    = desc.stat_desc.elems;
  var n, m;          /* iterate over heap elements */
  var max_code = -1; /* largest code with non zero frequency */
  var node;          /* new node being created */

  /* Construct the initial heap, with least frequent element in
   * heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
   * heap[0] is not used.
   */
  s.heap_len = 0;
  s.heap_max = HEAP_SIZE;

  for (n = 0; n < elems; n++) {
    if (tree[n * 2]/*.Freq*/ !== 0) {
      s.heap[++s.heap_len] = max_code = n;
      s.depth[n] = 0;

    } else {
      tree[n * 2 + 1]/*.Len*/ = 0;
    }
  }

  /* The pkzip format requires that at least one distance code exists,
   * and that at least one bit should be sent even if there is only one
   * possible code. So to avoid special checks later on we force at least
   * two codes of non zero frequency.
   */
  while (s.heap_len < 2) {
    node = s.heap[++s.heap_len] = (max_code < 2 ? ++max_code : 0);
    tree[node * 2]/*.Freq*/ = 1;
    s.depth[node] = 0;
    s.opt_len--;

    if (has_stree) {
      s.static_len -= stree[node * 2 + 1]/*.Len*/;
    }
    /* node is 0 or 1 so it does not have extra bits */
  }
  desc.max_code = max_code;

  /* The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
   * establish sub-heaps of increasing lengths:
   */
  for (n = (s.heap_len >> 1/*int /2*/); n >= 1; n--) { pqdownheap(s, tree, n); }

  /* Construct the Huffman tree by repeatedly combining the least two
   * frequent nodes.
   */
  node = elems;              /* next internal node of the tree */
  do {
    //pqremove(s, tree, n);  /* n = node of least frequency */
    /*** pqremove ***/
    n = s.heap[1/*SMALLEST*/];
    s.heap[1/*SMALLEST*/] = s.heap[s.heap_len--];
    pqdownheap(s, tree, 1/*SMALLEST*/);
    /***/

    m = s.heap[1/*SMALLEST*/]; /* m = node of next least frequency */

    s.heap[--s.heap_max] = n; /* keep the nodes sorted by frequency */
    s.heap[--s.heap_max] = m;

    /* Create a new node father of n and m */
    tree[node * 2]/*.Freq*/ = tree[n * 2]/*.Freq*/ + tree[m * 2]/*.Freq*/;
    s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
    tree[n * 2 + 1]/*.Dad*/ = tree[m * 2 + 1]/*.Dad*/ = node;

    /* and insert the new node in the heap */
    s.heap[1/*SMALLEST*/] = node++;
    pqdownheap(s, tree, 1/*SMALLEST*/);

  } while (s.heap_len >= 2);

  s.heap[--s.heap_max] = s.heap[1/*SMALLEST*/];

  /* At this point, the fields freq and dad are set. We can now
   * generate the bit lengths.
   */
  gen_bitlen(s, desc);

  /* The field len is now set, we can generate the bit codes */
  gen_codes(tree, max_code, s.bl_count);
}


/* ===========================================================================
 * Scan a literal or distance tree to determine the frequencies of the codes
 * in the bit length tree.
 */
function scan_tree(s, tree, max_code)
//    deflate_state *s;
//    ct_data *tree;   /* the tree to be scanned */
//    int max_code;    /* and its largest code of non zero frequency */
{
  var n;                     /* iterates over all tree elements */
  var prevlen = -1;          /* last emitted length */
  var curlen;                /* length of current code */

  var nextlen = tree[0 * 2 + 1]/*.Len*/; /* length of next code */

  var count = 0;             /* repeat count of the current code */
  var max_count = 7;         /* max repeat count */
  var min_count = 4;         /* min repeat count */

  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }
  tree[(max_code + 1) * 2 + 1]/*.Len*/ = 0xffff; /* guard */

  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1]/*.Len*/;

    if (++count < max_count && curlen === nextlen) {
      continue;

    } else if (count < min_count) {
      s.bl_tree[curlen * 2]/*.Freq*/ += count;

    } else if (curlen !== 0) {

      if (curlen !== prevlen) { s.bl_tree[curlen * 2]/*.Freq*/++; }
      s.bl_tree[REP_3_6 * 2]/*.Freq*/++;

    } else if (count <= 10) {
      s.bl_tree[REPZ_3_10 * 2]/*.Freq*/++;

    } else {
      s.bl_tree[REPZ_11_138 * 2]/*.Freq*/++;
    }

    count = 0;
    prevlen = curlen;

    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;

    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;

    } else {
      max_count = 7;
      min_count = 4;
    }
  }
}


/* ===========================================================================
 * Send a literal or distance tree in compressed form, using the codes in
 * bl_tree.
 */
function send_tree(s, tree, max_code)
//    deflate_state *s;
//    ct_data *tree; /* the tree to be scanned */
//    int max_code;       /* and its largest code of non zero frequency */
{
  var n;                     /* iterates over all tree elements */
  var prevlen = -1;          /* last emitted length */
  var curlen;                /* length of current code */

  var nextlen = tree[0 * 2 + 1]/*.Len*/; /* length of next code */

  var count = 0;             /* repeat count of the current code */
  var max_count = 7;         /* max repeat count */
  var min_count = 4;         /* min repeat count */

  /* tree[max_code+1].Len = -1; */  /* guard already set */
  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }

  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1]/*.Len*/;

    if (++count < max_count && curlen === nextlen) {
      continue;

    } else if (count < min_count) {
      do { send_code(s, curlen, s.bl_tree); } while (--count !== 0);

    } else if (curlen !== 0) {
      if (curlen !== prevlen) {
        send_code(s, curlen, s.bl_tree);
        count--;
      }
      //Assert(count >= 3 && count <= 6, " 3_6?");
      send_code(s, REP_3_6, s.bl_tree);
      send_bits(s, count - 3, 2);

    } else if (count <= 10) {
      send_code(s, REPZ_3_10, s.bl_tree);
      send_bits(s, count - 3, 3);

    } else {
      send_code(s, REPZ_11_138, s.bl_tree);
      send_bits(s, count - 11, 7);
    }

    count = 0;
    prevlen = curlen;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;

    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;

    } else {
      max_count = 7;
      min_count = 4;
    }
  }
}


/* ===========================================================================
 * Construct the Huffman tree for the bit lengths and return the index in
 * bl_order of the last bit length code to send.
 */
function build_bl_tree(s) {
  var max_blindex;  /* index of last bit length code of non zero freq */

  /* Determine the bit length frequencies for literal and distance trees */
  scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
  scan_tree(s, s.dyn_dtree, s.d_desc.max_code);

  /* Build the bit length tree: */
  build_tree(s, s.bl_desc);
  /* opt_len now includes the length of the tree representations, except
   * the lengths of the bit lengths codes and the 5+5+4 bits for the counts.
   */

  /* Determine the number of bit length codes to send. The pkzip format
   * requires that at least 4 bit length codes be sent. (appnote.txt says
   * 3 but the actual value used is 4.)
   */
  for (max_blindex = BL_CODES - 1; max_blindex >= 3; max_blindex--) {
    if (s.bl_tree[bl_order[max_blindex] * 2 + 1]/*.Len*/ !== 0) {
      break;
    }
  }
  /* Update opt_len to include the bit length tree and counts */
  s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
  //Tracev((stderr, "\ndyn trees: dyn %ld, stat %ld",
  //        s->opt_len, s->static_len));

  return max_blindex;
}


/* ===========================================================================
 * Send the header for a block using dynamic Huffman trees: the counts, the
 * lengths of the bit length codes, the literal tree and the distance tree.
 * IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
 */
function send_all_trees(s, lcodes, dcodes, blcodes)
//    deflate_state *s;
//    int lcodes, dcodes, blcodes; /* number of codes for each tree */
{
  var rank;                    /* index in bl_order */

  //Assert (lcodes >= 257 && dcodes >= 1 && blcodes >= 4, "not enough codes");
  //Assert (lcodes <= L_CODES && dcodes <= D_CODES && blcodes <= BL_CODES,
  //        "too many codes");
  //Tracev((stderr, "\nbl counts: "));
  send_bits(s, lcodes - 257, 5); /* not +255 as stated in appnote.txt */
  send_bits(s, dcodes - 1,   5);
  send_bits(s, blcodes - 4,  4); /* not -3 as stated in appnote.txt */
  for (rank = 0; rank < blcodes; rank++) {
    //Tracev((stderr, "\nbl code %2d ", bl_order[rank]));
    send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1]/*.Len*/, 3);
  }
  //Tracev((stderr, "\nbl tree: sent %ld", s->bits_sent));

  send_tree(s, s.dyn_ltree, lcodes - 1); /* literal tree */
  //Tracev((stderr, "\nlit tree: sent %ld", s->bits_sent));

  send_tree(s, s.dyn_dtree, dcodes - 1); /* distance tree */
  //Tracev((stderr, "\ndist tree: sent %ld", s->bits_sent));
}


/* ===========================================================================
 * Check if the data type is TEXT or BINARY, using the following algorithm:
 * - TEXT if the two conditions below are satisfied:
 *    a) There are no non-portable control characters belonging to the
 *       "black list" (0..6, 14..25, 28..31).
 *    b) There is at least one printable character belonging to the
 *       "white list" (9 {TAB}, 10 {LF}, 13 {CR}, 32..255).
 * - BINARY otherwise.
 * - The following partially-portable control characters form a
 *   "gray list" that is ignored in this detection algorithm:
 *   (7 {BEL}, 8 {BS}, 11 {VT}, 12 {FF}, 26 {SUB}, 27 {ESC}).
 * IN assertion: the fields Freq of dyn_ltree are set.
 */
function detect_data_type(s) {
  /* black_mask is the bit mask of black-listed bytes
   * set bits 0..6, 14..25, and 28..31
   * 0xf3ffc07f = binary 11110011111111111100000001111111
   */
  var black_mask = 0xf3ffc07f;
  var n;

  /* Check for non-textual ("black-listed") bytes. */
  for (n = 0; n <= 31; n++, black_mask >>>= 1) {
    if ((black_mask & 1) && (s.dyn_ltree[n * 2]/*.Freq*/ !== 0)) {
      return Z_BINARY;
    }
  }

  /* Check for textual ("white-listed") bytes. */
  if (s.dyn_ltree[9 * 2]/*.Freq*/ !== 0 || s.dyn_ltree[10 * 2]/*.Freq*/ !== 0 ||
      s.dyn_ltree[13 * 2]/*.Freq*/ !== 0) {
    return Z_TEXT;
  }
  for (n = 32; n < LITERALS; n++) {
    if (s.dyn_ltree[n * 2]/*.Freq*/ !== 0) {
      return Z_TEXT;
    }
  }

  /* There are no "black-listed" or "white-listed" bytes:
   * this stream either is empty or has tolerated ("gray-listed") bytes only.
   */
  return Z_BINARY;
}


var static_init_done = false;

/* ===========================================================================
 * Initialize the tree data structures for a new zlib stream.
 */
function _tr_init(s)
{

  if (!static_init_done) {
    tr_static_init();
    static_init_done = true;
  }

  s.l_desc  = new TreeDesc(s.dyn_ltree, static_l_desc);
  s.d_desc  = new TreeDesc(s.dyn_dtree, static_d_desc);
  s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);

  s.bi_buf = 0;
  s.bi_valid = 0;

  /* Initialize the first block of the first file: */
  init_block(s);
}


/* ===========================================================================
 * Send a stored block
 */
function _tr_stored_block(s, buf, stored_len, last)
//DeflateState *s;
//charf *buf;       /* input block */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{
  send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3);    /* send block type */
  copy_block(s, buf, stored_len, true); /* with header */
}


/* ===========================================================================
 * Send one empty static block to give enough lookahead for inflate.
 * This takes 10 bits, of which 7 may remain in the bit buffer.
 */
function _tr_align(s) {
  send_bits(s, STATIC_TREES << 1, 3);
  send_code(s, END_BLOCK, static_ltree);
  bi_flush(s);
}


/* ===========================================================================
 * Determine the best encoding for the current block: dynamic trees, static
 * trees or store, and output the encoded block to the zip file.
 */
function _tr_flush_block(s, buf, stored_len, last)
//DeflateState *s;
//charf *buf;       /* input block, or NULL if too old */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{
  var opt_lenb, static_lenb;  /* opt_len and static_len in bytes */
  var max_blindex = 0;        /* index of last bit length code of non zero freq */

  /* Build the Huffman trees unless a stored block is forced */
  if (s.level > 0) {

    /* Check if the file is binary or text */
    if (s.strm.data_type === Z_UNKNOWN) {
      s.strm.data_type = detect_data_type(s);
    }

    /* Construct the literal and distance trees */
    build_tree(s, s.l_desc);
    // Tracev((stderr, "\nlit data: dyn %ld, stat %ld", s->opt_len,
    //        s->static_len));

    build_tree(s, s.d_desc);
    // Tracev((stderr, "\ndist data: dyn %ld, stat %ld", s->opt_len,
    //        s->static_len));
    /* At this point, opt_len and static_len are the total bit lengths of
     * the compressed block data, excluding the tree representations.
     */

    /* Build the bit length tree for the above two trees, and get the index
     * in bl_order of the last bit length code to send.
     */
    max_blindex = build_bl_tree(s);

    /* Determine the best encoding. Compute the block lengths in bytes. */
    opt_lenb = (s.opt_len + 3 + 7) >>> 3;
    static_lenb = (s.static_len + 3 + 7) >>> 3;

    // Tracev((stderr, "\nopt %lu(%lu) stat %lu(%lu) stored %lu lit %u ",
    //        opt_lenb, s->opt_len, static_lenb, s->static_len, stored_len,
    //        s->last_lit));

    if (static_lenb <= opt_lenb) { opt_lenb = static_lenb; }

  } else {
    // Assert(buf != (char*)0, "lost buf");
    opt_lenb = static_lenb = stored_len + 5; /* force a stored block */
  }

  if ((stored_len + 4 <= opt_lenb) && (buf !== -1)) {
    /* 4: two words for the lengths */

    /* The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
     * Otherwise we can't have processed more than WSIZE input bytes since
     * the last block flush, because compression would have been
     * successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
     * transform a block into a stored block.
     */
    _tr_stored_block(s, buf, stored_len, last);

  } else if (s.strategy === Z_FIXED || static_lenb === opt_lenb) {

    send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
    compress_block(s, static_ltree, static_dtree);

  } else {
    send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
    send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
    compress_block(s, s.dyn_ltree, s.dyn_dtree);
  }
  // Assert (s->compressed_len == s->bits_sent, "bad compressed size");
  /* The above check is made mod 2^32, for files larger than 512 MB
   * and uLong implemented on 32 bits.
   */
  init_block(s);

  if (last) {
    bi_windup(s);
  }
  // Tracev((stderr,"\ncomprlen %lu(%lu) ", s->compressed_len>>3,
  //       s->compressed_len-7*last));
}

/* ===========================================================================
 * Save the match info and tally the frequency counts. Return true if
 * the current block must be flushed.
 */
function _tr_tally(s, dist, lc)
//    deflate_state *s;
//    unsigned dist;  /* distance of matched string */
//    unsigned lc;    /* match length-MIN_MATCH or unmatched char (if dist==0) */
{
  //var out_length, in_length, dcode;

  s.pending_buf[s.d_buf + s.last_lit * 2]     = (dist >>> 8) & 0xff;
  s.pending_buf[s.d_buf + s.last_lit * 2 + 1] = dist & 0xff;

  s.pending_buf[s.l_buf + s.last_lit] = lc & 0xff;
  s.last_lit++;

  if (dist === 0) {
    /* lc is the unmatched char */
    s.dyn_ltree[lc * 2]/*.Freq*/++;
  } else {
    s.matches++;
    /* Here, lc is the match length - MIN_MATCH */
    dist--;             /* dist = match distance - 1 */
    //Assert((ush)dist < (ush)MAX_DIST(s) &&
    //       (ush)lc <= (ush)(MAX_MATCH-MIN_MATCH) &&
    //       (ush)d_code(dist) < (ush)D_CODES,  "_tr_tally: bad match");

    s.dyn_ltree[(_length_code[lc] + LITERALS + 1) * 2]/*.Freq*/++;
    s.dyn_dtree[d_code(dist) * 2]/*.Freq*/++;
  }

// (!) This block is disabled in zlib defailts,
// don't enable it for binary compatibility

//#ifdef TRUNCATE_BLOCK
//  /* Try to guess if it is profitable to stop the current block here */
//  if ((s.last_lit & 0x1fff) === 0 && s.level > 2) {
//    /* Compute an upper bound for the compressed length */
//    out_length = s.last_lit*8;
//    in_length = s.strstart - s.block_start;
//
//    for (dcode = 0; dcode < D_CODES; dcode++) {
//      out_length += s.dyn_dtree[dcode*2]/*.Freq*/ * (5 + extra_dbits[dcode]);
//    }
//    out_length >>>= 3;
//    //Tracev((stderr,"\nlast_lit %u, in %ld, out ~%ld(%ld%%) ",
//    //       s->last_lit, in_length, out_length,
//    //       100L - out_length*100L/in_length));
//    if (s.matches < (s.last_lit>>1)/*int /2*/ && out_length < (in_length>>1)/*int /2*/) {
//      return true;
//    }
//  }
//#endif

  return (s.last_lit === s.lit_bufsize - 1);
  /* We avoid equality with lit_bufsize because of wraparound at 64K
   * on 16 bit machines and because stored blocks are restricted to
   * 64K-1 bytes.
   */
}

exports._tr_init  = _tr_init;
exports._tr_stored_block = _tr_stored_block;
exports._tr_flush_block  = _tr_flush_block;
exports._tr_tally = _tr_tally;
exports._tr_align = _tr_align;


/***/ },
/* 280 */
/***/ function(module, exports) {

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

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ },
/* 281 */
/***/ function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 282 */
/***/ function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			configurable: false,
			get: function() { return module.l; }
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			configurable: false,
			get: function() { return module.i; }
		});
		module.webpackPolyfill = 1;
	}
	return module;
}


/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(105);
module.exports = __webpack_require__(104);


/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__thingy__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_interfaces_ITypes__ = __webpack_require__(5);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var IApp = __WEBPACK_IMPORTED_MODULE_1__core_interfaces_ITypes__["a" /* IApp */],
    IPace = __WEBPACK_IMPORTED_MODULE_1__core_interfaces_ITypes__["f" /* IPace */],
    IStep = __WEBPACK_IMPORTED_MODULE_1__core_interfaces_ITypes__["g" /* IStep */];

/*
*	The state class which the main game state inherits
*/

var Step = function (_WeakMapThingy) {
	_inherits(Step, _WeakMapThingy);

	function Step(app) {
		var _ret;

		_classCallCheck(this, Step);

		if (!IApp(app)) {
			throw new TypeError('Value of argument "app" violates contract.\n\nExpected:\nIApp\n\nGot:\n' + _inspect(app));
		}

		var _this = _possibleConstructorReturn(this, (Step.__proto__ || Object.getPrototypeOf(Step)).call(this, new WeakMap()));

		_this.delta = 1;
		_this.frames = 0;
		_this.pending = 0;
		_this.padding = 0;
		_this.increment = 0;
		_this.delta_speed = 1;


		_this.app = app;

		if (!IApp(_this.app)) {
			throw new TypeError('Value of "this.app" violates contract.\n\nExpected:\nIApp\n\nGot:\n' + _inspect(_this.app));
		}

		return _ret = _this, _possibleConstructorReturn(_this, _ret);
	}

	/*
    *
    */

	_createClass(Step, [{
		key: 'focus',


		/* UNUSED? */

		value: function focus() {
			//if (this.app.ext.freezeonfocus)
			//    return document.hasFocus();
			return true;
		}

		/*
  *	Reset Frames
  */

	}, {
		key: 'clean',
		value: function clean() {
			function _ref4(_id4) {
				if (!(typeof _id4 === 'number')) {
					throw new TypeError('Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(_id4));
				}

				return _id4;
			}

			var f = this.frames || 1;

			this.frames = 0;

			return _ref4(f);
		}

		/*
  *	Game Loop, Increment Frames
  */

	}, {
		key: 'tick',
		value: function tick(a, b) {
			if (!IPace(a)) {
				throw new TypeError('Value of argument "a" violates contract.\n\nExpected:\nIPace\n\nGot:\n' + _inspect(a));
			}

			if (!IPace(b)) {
				throw new TypeError('Value of argument "b" violates contract.\n\nExpected:\nIPace\n\nGot:\n' + _inspect(b));
			}

			this.first(a);

			this.second(b);

			return this.fps;
		}

		/*
  *
  */

	}, {
		key: 'second',
		value: function second(step) {
			if (!IPace(step)) {
				throw new TypeError('Value of argument "step" violates contract.\n\nExpected:\nIPace\n\nGot:\n' + _inspect(step));
			}

			if (!step.Step()) return false;

			this.frames++;

			var stepPadding = this.padding;

			if (!(typeof stepPadding === 'number')) {
				throw new TypeError('Value of variable "stepPadding" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(stepPadding));
			}

			for (stepPadding; stepPadding >= 0; --stepPadding) {

				if (this.app.client.update.state.initalized) {

					this.focus() ? this.app.client.update.state.update() : null;
				}
			}

			this.padding = 0;

			return true;
		}

		/*
  *
  */

	}, {
		key: 'first',
		value: function first(step) {
			if (!IPace(step)) {
				throw new TypeError('Value of argument "step" violates contract.\n\nExpected:\nIPace\n\nGot:\n' + _inspect(step));
			}

			if (!step.Step()) return false;

			this.fps = step.delta;

			if (!(typeof this.fps === 'number')) {
				throw new TypeError('Value of "this.fps" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(this.fps));
			}

			var n = step.targetFPS / this.fps * 100000;

			this.delta = n + (n < 0 ? 0 : 1) >> 0;

			// Limit FPS Catchup

			if (!(typeof this.delta === 'number')) {
				throw new TypeError('Value of "this.delta" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(this.delta));
			}

			if (this.delta > 2.5) {

				this.delta = 2.5;
			}

			if (this.delta !== this.delta + 1) {

				this.app.client.delta = this.delta_speed = this.delta;
			} else {

				this.app.client.delta = this.delta_speed = 1;
			}

			if (this.fps == 0) {
				return false;
			}

			this.increment = -step.targetFPS + step.targetFPS * (step.targetFPS / this.fps);

			if (!(typeof this.increment === 'number')) {
				throw new TypeError('Value of "this.increment" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(this.increment));
			}

			this.pending += this.increment;

			if (this.pending > step.targetFPS) {

				this.pending -= this.padding / step.targetFPS * step.targetFPS;

				if (!(typeof this.pending === 'number')) {
					throw new TypeError('Value of "this.pending" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(this.pending));
				}

				this.padding++;
			}

			return true;
		}
	}, {
		key: 'fps',
		set: function set(val) {
			if (!(typeof val === 'number')) {
				throw new TypeError('Value of argument "val" violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(val));
			}

			this.get('data')[0] = 1 * (this.clean() / val * 1E3);
		}

		/*
     *
     */

		,
		get: function get() {
			function _ref2(_id2) {
				if (!(typeof _id2 === 'number')) {
					throw new TypeError('Function return value violates contract.\n\nExpected:\nnumber\n\nGot:\n' + _inspect(_id2));
				}

				return _id2;
			}

			return _ref2(this.get('data')[0]);
		}
	}]);

	return Step;
}(__WEBPACK_IMPORTED_MODULE_0__thingy__["a" /* default */]);

Step.properties = {

	data: [0]

};
/* harmony default export */ exports["a"] = Step;

function _inspect(input, depth) {
	var maxDepth = 4;
	var maxKeys = 15;

	if (depth === undefined) {
		depth = 0;
	}

	depth += 1;

	if (input === null) {
		return 'null';
	} else if (input === undefined) {
		return 'void';
	} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
		return typeof input === 'undefined' ? 'undefined' : _typeof(input);
	} else if (Array.isArray(input)) {
		if (input.length > 0) {
			var _ret2 = function () {
				if (depth > maxDepth) return {
						v: '[...]'
					};

				var first = _inspect(input[0], depth);

				if (input.every(function (item) {
					return _inspect(item, depth) === first;
				})) {
					return {
						v: first.trim() + '[]'
					};
				} else {
					return {
						v: '[' + input.slice(0, maxKeys).map(function (item) {
							return _inspect(item, depth);
						}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']'
					};
				}
			}();

			if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
		} else {
			return 'Array';
		}
	} else {
		var keys = Object.keys(input);

		if (!keys.length) {
			if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
				return input.constructor.name;
			} else {
				return 'Object';
			}
		}

		if (depth > maxDepth) return '{...}';
		var indent = '  '.repeat(depth - 1);
		var entries = keys.slice(0, maxKeys).map(function (key) {
			return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
		}).join('\n  ' + indent);

		if (keys.length >= maxKeys) {
			entries += '\n  ' + indent + '...';
		}

		if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
			return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
		} else {
			return '{\n  ' + indent + entries + '\n' + indent + '}';
		}
	}
}

/***/ }
],[283]);
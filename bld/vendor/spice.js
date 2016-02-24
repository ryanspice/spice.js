/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(191);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	__webpack_require__(2);

	__webpack_require__(189);

	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel-polyfill is allowed");
	}
	global._babelPolyfill = true;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	__webpack_require__(36);
	__webpack_require__(42);
	__webpack_require__(44);
	__webpack_require__(46);
	__webpack_require__(48);
	__webpack_require__(50);
	__webpack_require__(52);
	__webpack_require__(53);
	__webpack_require__(54);
	__webpack_require__(55);
	__webpack_require__(56);
	__webpack_require__(57);
	__webpack_require__(58);
	__webpack_require__(59);
	__webpack_require__(60);
	__webpack_require__(61);
	__webpack_require__(62);
	__webpack_require__(63);
	__webpack_require__(66);
	__webpack_require__(67);
	__webpack_require__(68);
	__webpack_require__(70);
	__webpack_require__(71);
	__webpack_require__(72);
	__webpack_require__(73);
	__webpack_require__(74);
	__webpack_require__(75);
	__webpack_require__(76);
	__webpack_require__(78);
	__webpack_require__(79);
	__webpack_require__(80);
	__webpack_require__(82);
	__webpack_require__(83);
	__webpack_require__(84);
	__webpack_require__(86);
	__webpack_require__(87);
	__webpack_require__(88);
	__webpack_require__(89);
	__webpack_require__(90);
	__webpack_require__(91);
	__webpack_require__(92);
	__webpack_require__(93);
	__webpack_require__(94);
	__webpack_require__(95);
	__webpack_require__(96);
	__webpack_require__(97);
	__webpack_require__(98);
	__webpack_require__(99);
	__webpack_require__(104);
	__webpack_require__(105);
	__webpack_require__(109);
	__webpack_require__(110);
	__webpack_require__(112);
	__webpack_require__(113);
	__webpack_require__(118);
	__webpack_require__(119);
	__webpack_require__(122);
	__webpack_require__(124);
	__webpack_require__(126);
	__webpack_require__(128);
	__webpack_require__(129);
	__webpack_require__(130);
	__webpack_require__(132);
	__webpack_require__(133);
	__webpack_require__(135);
	__webpack_require__(136);
	__webpack_require__(137);
	__webpack_require__(138);
	__webpack_require__(145);
	__webpack_require__(148);
	__webpack_require__(149);
	__webpack_require__(151);
	__webpack_require__(152);
	__webpack_require__(153);
	__webpack_require__(154);
	__webpack_require__(155);
	__webpack_require__(156);
	__webpack_require__(157);
	__webpack_require__(158);
	__webpack_require__(159);
	__webpack_require__(160);
	__webpack_require__(161);
	__webpack_require__(162);
	__webpack_require__(164);
	__webpack_require__(165);
	__webpack_require__(166);
	__webpack_require__(167);
	__webpack_require__(168);
	__webpack_require__(169);
	__webpack_require__(171);
	__webpack_require__(172);
	__webpack_require__(173);
	__webpack_require__(174);
	__webpack_require__(176);
	__webpack_require__(177);
	__webpack_require__(179);
	__webpack_require__(180);
	__webpack_require__(182);
	__webpack_require__(183);
	__webpack_require__(184);
	__webpack_require__(187);
	__webpack_require__(188);
	module.exports = __webpack_require__(7);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $                 = __webpack_require__(4)
	  , $export           = __webpack_require__(5)
	  , DESCRIPTORS       = __webpack_require__(10)
	  , createDesc        = __webpack_require__(9)
	  , html              = __webpack_require__(16)
	  , cel               = __webpack_require__(17)
	  , has               = __webpack_require__(19)
	  , cof               = __webpack_require__(20)
	  , invoke            = __webpack_require__(21)
	  , fails             = __webpack_require__(11)
	  , anObject          = __webpack_require__(22)
	  , aFunction         = __webpack_require__(15)
	  , isObject          = __webpack_require__(18)
	  , toObject          = __webpack_require__(23)
	  , toIObject         = __webpack_require__(25)
	  , toInteger         = __webpack_require__(27)
	  , toIndex           = __webpack_require__(28)
	  , toLength          = __webpack_require__(29)
	  , IObject           = __webpack_require__(26)
	  , IE_PROTO          = __webpack_require__(13)('__proto__')
	  , createArrayMethod = __webpack_require__(30)
	  , arrayIndexOf      = __webpack_require__(35)(false)
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
	$export($export.S, 'Array', {isArray: __webpack_require__(32)});

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
/* 4 */
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(6)
	  , core      = __webpack_require__(7)
	  , hide      = __webpack_require__(8)
	  , redefine  = __webpack_require__(12)
	  , ctx       = __webpack_require__(14)
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
/* 6 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 7 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(4)
	  , createDesc = __webpack_require__(9);
	module.exports = __webpack_require__(10) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 9 */
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(11)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// add fake Function#toString
	// for correct work wrapped methods / constructors with methods like LoDash isNative
	var global    = __webpack_require__(6)
	  , hide      = __webpack_require__(8)
	  , SRC       = __webpack_require__(13)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);

	__webpack_require__(7).inspectSource = function(it){
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
/* 13 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(15);
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
/* 15 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6).document && document.documentElement;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(18)
	  , document = __webpack_require__(6).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(18);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(24);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(26)
	  , defined = __webpack_require__(24);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(20);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(27)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(27)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(14)
	  , IObject  = __webpack_require__(26)
	  , toObject = __webpack_require__(23)
	  , toLength = __webpack_require__(29)
	  , asc      = __webpack_require__(31);
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var isObject = __webpack_require__(18)
	  , isArray  = __webpack_require__(32)
	  , SPECIES  = __webpack_require__(33)('species');
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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(20);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(34)('wks')
	  , uid    = __webpack_require__(13)
	  , Symbol = __webpack_require__(6).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(6)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(25)
	  , toLength  = __webpack_require__(29)
	  , toIndex   = __webpack_require__(28);
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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(4)
	  , global         = __webpack_require__(6)
	  , has            = __webpack_require__(19)
	  , DESCRIPTORS    = __webpack_require__(10)
	  , $export        = __webpack_require__(5)
	  , redefine       = __webpack_require__(12)
	  , $fails         = __webpack_require__(11)
	  , shared         = __webpack_require__(34)
	  , setToStringTag = __webpack_require__(37)
	  , uid            = __webpack_require__(13)
	  , wks            = __webpack_require__(33)
	  , keyOf          = __webpack_require__(38)
	  , $names         = __webpack_require__(39)
	  , enumKeys       = __webpack_require__(40)
	  , isArray        = __webpack_require__(32)
	  , anObject       = __webpack_require__(22)
	  , toIObject      = __webpack_require__(25)
	  , createDesc     = __webpack_require__(9)
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

	  if(DESCRIPTORS && !__webpack_require__(41)){
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
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(4).setDesc
	  , has = __webpack_require__(19)
	  , TAG = __webpack_require__(33)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(4)
	  , toIObject = __webpack_require__(25);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(25)
	  , getNames  = __webpack_require__(4).getNames
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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(4);
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
/* 41 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(5);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(43)});

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(4)
	  , toObject = __webpack_require__(23)
	  , IObject  = __webpack_require__(26);

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(11)(function(){
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
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(5);
	$export($export.S, 'Object', {is: __webpack_require__(45)});

/***/ },
/* 45 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(5);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(47).set});

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(4).getDesc
	  , isObject = __webpack_require__(18)
	  , anObject = __webpack_require__(22);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(14)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
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
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(49)
	  , test    = {};
	test[__webpack_require__(33)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(12)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(20)
	  , TAG = __webpack_require__(33)('toStringTag')
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
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(18);

	__webpack_require__(51)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(it) : it;
	  };
	});

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(5)
	  , core    = __webpack_require__(7)
	  , fails   = __webpack_require__(11);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(18);

	__webpack_require__(51)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(it) : it;
	  };
	});

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(18);

	__webpack_require__(51)('preventExtensions', function($preventExtensions){
	  return function preventExtensions(it){
	    return $preventExtensions && isObject(it) ? $preventExtensions(it) : it;
	  };
	});

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(18);

	__webpack_require__(51)('isFrozen', function($isFrozen){
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(18);

	__webpack_require__(51)('isSealed', function($isSealed){
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(18);

	__webpack_require__(51)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(25);

	__webpack_require__(51)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(23);

	__webpack_require__(51)('getPrototypeOf', function($getPrototypeOf){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(23);

	__webpack_require__(51)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(51)('getOwnPropertyNames', function(){
	  return __webpack_require__(39).get;
	});

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var setDesc    = __webpack_require__(4).setDesc
	  , createDesc = __webpack_require__(9)
	  , has        = __webpack_require__(19)
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';
	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(10) && setDesc(FProto, NAME, {
	  configurable: true,
	  get: function(){
	    var match = ('' + this).match(nameRE)
	      , name  = match ? match[1] : '';
	    has(this, NAME) || setDesc(this, NAME, createDesc(5, name));
	    return name;
	  }
	});

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $             = __webpack_require__(4)
	  , isObject      = __webpack_require__(18)
	  , HAS_INSTANCE  = __webpack_require__(33)('hasInstance')
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
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $           = __webpack_require__(4)
	  , global      = __webpack_require__(6)
	  , has         = __webpack_require__(19)
	  , cof         = __webpack_require__(20)
	  , toPrimitive = __webpack_require__(64)
	  , fails       = __webpack_require__(11)
	  , $trim       = __webpack_require__(65).trim
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
	  $.each.call(__webpack_require__(10) ? $.getNames(Base) : (
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
	  __webpack_require__(12)(global, NUMBER, $Number);
	}

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(18);
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
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(5)
	  , defined = __webpack_require__(24)
	  , fails   = __webpack_require__(11)
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
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(5);

	$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export   = __webpack_require__(5)
	  , _isFinite = __webpack_require__(6).isFinite;

	$export($export.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(5);

	$export($export.S, 'Number', {isInteger: __webpack_require__(69)});

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(18)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(5);

	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(5)
	  , isInteger = __webpack_require__(69)
	  , abs       = Math.abs;

	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(5);

	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(5);

	$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.12 Number.parseFloat(string)
	var $export = __webpack_require__(5);

	$export($export.S, 'Number', {parseFloat: parseFloat});

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.13 Number.parseInt(string, radix)
	var $export = __webpack_require__(5);

	$export($export.S, 'Number', {parseInt: parseInt});

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(5)
	  , log1p   = __webpack_require__(77)
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
/* 77 */
/***/ function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(5);

	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}

	$export($export.S, 'Math', {asinh: asinh});

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(5);

	$export($export.S, 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(5)
	  , sign    = __webpack_require__(81);

	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 81 */
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(5);

	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(5)
	  , exp     = Math.exp;

	$export($export.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(5);

	$export($export.S, 'Math', {expm1: __webpack_require__(85)});

/***/ },
/* 85 */
/***/ function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	module.exports = Math.expm1 || function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(5)
	  , sign      = __webpack_require__(81)
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
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(5)
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
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(5)
	  , $imul   = Math.imul;

	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(11)(function(){
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
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(5);

	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(5);

	$export($export.S, 'Math', {log1p: __webpack_require__(77)});

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(5);

	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(5);

	$export($export.S, 'Math', {sign: __webpack_require__(81)});

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(5)
	  , expm1   = __webpack_require__(85)
	  , exp     = Math.exp;

	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(5)
	  , expm1   = __webpack_require__(85)
	  , exp     = Math.exp;

	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(5);

	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(5)
	  , toIndex        = __webpack_require__(28)
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
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(5)
	  , toIObject = __webpack_require__(25)
	  , toLength  = __webpack_require__(29);

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
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(65)('trim', function($trim){
	  return function trim(){
	    return $trim(this, 3);
	  };
	});

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(100)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(101)(String, 'String', function(iterated){
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
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(27)
	  , defined   = __webpack_require__(24);
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
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(41)
	  , $export        = __webpack_require__(5)
	  , redefine       = __webpack_require__(12)
	  , hide           = __webpack_require__(8)
	  , has            = __webpack_require__(19)
	  , Iterators      = __webpack_require__(102)
	  , $iterCreate    = __webpack_require__(103)
	  , setToStringTag = __webpack_require__(37)
	  , getProto       = __webpack_require__(4).getProto
	  , ITERATOR       = __webpack_require__(33)('iterator')
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
/* 102 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(4)
	  , descriptor     = __webpack_require__(9)
	  , setToStringTag = __webpack_require__(37)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(8)(IteratorPrototype, __webpack_require__(33)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(5)
	  , $at     = __webpack_require__(100)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = __webpack_require__(5)
	  , toLength  = __webpack_require__(29)
	  , context   = __webpack_require__(106)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];

	$export($export.P + $export.F * __webpack_require__(108)(ENDS_WITH), 'String', {
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
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(107)
	  , defined  = __webpack_require__(24);

	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(18)
	  , cof      = __webpack_require__(20)
	  , MATCH    = __webpack_require__(33)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(33)('match');
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
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = __webpack_require__(5)
	  , context  = __webpack_require__(106)
	  , INCLUDES = 'includes';

	$export($export.P + $export.F * __webpack_require__(108)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(5);

	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(111)
	});

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(27)
	  , defined   = __webpack_require__(24);

	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = __webpack_require__(5)
	  , toLength    = __webpack_require__(29)
	  , context     = __webpack_require__(106)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];

	$export($export.P + $export.F * __webpack_require__(108)(STARTS_WITH), 'String', {
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
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(14)
	  , $export     = __webpack_require__(5)
	  , toObject    = __webpack_require__(23)
	  , call        = __webpack_require__(114)
	  , isArrayIter = __webpack_require__(115)
	  , toLength    = __webpack_require__(29)
	  , getIterFn   = __webpack_require__(116);
	$export($export.S + $export.F * !__webpack_require__(117)(function(iter){ Array.from(iter); }), 'Array', {
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
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(22);
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
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(102)
	  , ITERATOR   = __webpack_require__(33)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(49)
	  , ITERATOR  = __webpack_require__(33)('iterator')
	  , Iterators = __webpack_require__(102);
	module.exports = __webpack_require__(7).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(33)('iterator')
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
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(5);

	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(11)(function(){
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
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(120)
	  , step             = __webpack_require__(121)
	  , Iterators        = __webpack_require__(102)
	  , toIObject        = __webpack_require__(25);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(101)(Array, 'Array', function(iterated, kind){
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
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(33)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(8)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 121 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(123)('Array');

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(6)
	  , $           = __webpack_require__(4)
	  , DESCRIPTORS = __webpack_require__(10)
	  , SPECIES     = __webpack_require__(33)('species');

	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(5);

	$export($export.P, 'Array', {copyWithin: __webpack_require__(125)});

	__webpack_require__(120)('copyWithin');

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(23)
	  , toIndex  = __webpack_require__(28)
	  , toLength = __webpack_require__(29);

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
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(5);

	$export($export.P, 'Array', {fill: __webpack_require__(127)});

	__webpack_require__(120)('fill');

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(23)
	  , toIndex  = __webpack_require__(28)
	  , toLength = __webpack_require__(29);
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
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(5)
	  , $find   = __webpack_require__(30)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(120)(KEY);

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(5)
	  , $find   = __webpack_require__(30)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(120)(KEY);

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(4)
	  , global   = __webpack_require__(6)
	  , isRegExp = __webpack_require__(107)
	  , $flags   = __webpack_require__(131)
	  , $RegExp  = global.RegExp
	  , Base     = $RegExp
	  , proto    = $RegExp.prototype
	  , re1      = /a/g
	  , re2      = /a/g
	  // "new" creates a new object, old webkit buggy here
	  , CORRECT_NEW = new $RegExp(re1) !== re1;

	if(__webpack_require__(10) && (!CORRECT_NEW || __webpack_require__(11)(function(){
	  re2[__webpack_require__(33)('match')] = false;
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
	  __webpack_require__(12)(global, 'RegExp', $RegExp);
	}

	__webpack_require__(123)('RegExp');

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(22);
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
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	var $ = __webpack_require__(4);
	if(__webpack_require__(10) && /./g.flags != 'g')$.setDesc(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(131)
	});

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(134)('match', 1, function(defined, MATCH){
	  // 21.1.3.11 String.prototype.match(regexp)
	  return function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  };
	});

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(8)
	  , redefine = __webpack_require__(12)
	  , fails    = __webpack_require__(11)
	  , defined  = __webpack_require__(24)
	  , wks      = __webpack_require__(33);

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
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(134)('replace', 2, function(defined, REPLACE, $replace){
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
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(134)('search', 1, function(defined, SEARCH){
	  // 21.1.3.15 String.prototype.search(regexp)
	  return function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  };
	});

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(134)('split', 2, function(defined, SPLIT, $split){
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
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $          = __webpack_require__(4)
	  , LIBRARY    = __webpack_require__(41)
	  , global     = __webpack_require__(6)
	  , ctx        = __webpack_require__(14)
	  , classof    = __webpack_require__(49)
	  , $export    = __webpack_require__(5)
	  , isObject   = __webpack_require__(18)
	  , anObject   = __webpack_require__(22)
	  , aFunction  = __webpack_require__(15)
	  , strictNew  = __webpack_require__(139)
	  , forOf      = __webpack_require__(140)
	  , setProto   = __webpack_require__(47).set
	  , same       = __webpack_require__(45)
	  , SPECIES    = __webpack_require__(33)('species')
	  , speciesConstructor = __webpack_require__(141)
	  , asap       = __webpack_require__(142)
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
	    if(works && __webpack_require__(10)){
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
	  __webpack_require__(144)(P.prototype, {
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
	__webpack_require__(37)(P, PROMISE);
	__webpack_require__(123)(PROMISE);
	Wrapper = __webpack_require__(7)[PROMISE];

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
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(117)(function(iter){
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
/* 139 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(14)
	  , call        = __webpack_require__(114)
	  , isArrayIter = __webpack_require__(115)
	  , anObject    = __webpack_require__(22)
	  , toLength    = __webpack_require__(29)
	  , getIterFn   = __webpack_require__(116);
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
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(22)
	  , aFunction = __webpack_require__(15)
	  , SPECIES   = __webpack_require__(33)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(6)
	  , macrotask = __webpack_require__(143).set
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
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(14)
	  , invoke             = __webpack_require__(21)
	  , html               = __webpack_require__(16)
	  , cel                = __webpack_require__(17)
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
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(12);
	module.exports = function(target, src){
	  for(var key in src)redefine(target, key, src[key]);
	  return target;
	};

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(146);

	// 23.1 Map Objects
	__webpack_require__(147)('Map', function(get){
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
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $            = __webpack_require__(4)
	  , hide         = __webpack_require__(8)
	  , redefineAll  = __webpack_require__(144)
	  , ctx          = __webpack_require__(14)
	  , strictNew    = __webpack_require__(139)
	  , defined      = __webpack_require__(24)
	  , forOf        = __webpack_require__(140)
	  , $iterDefine  = __webpack_require__(101)
	  , step         = __webpack_require__(121)
	  , ID           = __webpack_require__(13)('id')
	  , $has         = __webpack_require__(19)
	  , isObject     = __webpack_require__(18)
	  , setSpecies   = __webpack_require__(123)
	  , DESCRIPTORS  = __webpack_require__(10)
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
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(6)
	  , $export        = __webpack_require__(5)
	  , redefine       = __webpack_require__(12)
	  , redefineAll    = __webpack_require__(144)
	  , forOf          = __webpack_require__(140)
	  , strictNew      = __webpack_require__(139)
	  , isObject       = __webpack_require__(18)
	  , fails          = __webpack_require__(11)
	  , $iterDetect    = __webpack_require__(117)
	  , setToStringTag = __webpack_require__(37);

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
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(146);

	// 23.2 Set Objects
	__webpack_require__(147)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $            = __webpack_require__(4)
	  , redefine     = __webpack_require__(12)
	  , weak         = __webpack_require__(150)
	  , isObject     = __webpack_require__(18)
	  , has          = __webpack_require__(19)
	  , frozenStore  = weak.frozenStore
	  , WEAK         = weak.WEAK
	  , isExtensible = Object.isExtensible || isObject
	  , tmp          = {};

	// 23.3 WeakMap Objects
	var $WeakMap = __webpack_require__(147)('WeakMap', function(get){
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
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide              = __webpack_require__(8)
	  , redefineAll       = __webpack_require__(144)
	  , anObject          = __webpack_require__(22)
	  , isObject          = __webpack_require__(18)
	  , strictNew         = __webpack_require__(139)
	  , forOf             = __webpack_require__(140)
	  , createArrayMethod = __webpack_require__(30)
	  , $has              = __webpack_require__(19)
	  , WEAK              = __webpack_require__(13)('weak')
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
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(150);

	// 23.4 WeakSet Objects
	__webpack_require__(147)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export = __webpack_require__(5)
	  , _apply  = Function.apply;

	$export($export.S, 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    return _apply.call(target, thisArgument, argumentsList);
	  }
	});

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $         = __webpack_require__(4)
	  , $export   = __webpack_require__(5)
	  , aFunction = __webpack_require__(15)
	  , anObject  = __webpack_require__(22)
	  , isObject  = __webpack_require__(18)
	  , bind      = Function.bind || __webpack_require__(7).Function.prototype.bind;

	// MS Edge supports only 2 arguments
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	$export($export.S + $export.F * __webpack_require__(11)(function(){
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
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var $        = __webpack_require__(4)
	  , $export  = __webpack_require__(5)
	  , anObject = __webpack_require__(22);

	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(11)(function(){
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
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(5)
	  , getDesc  = __webpack_require__(4).getDesc
	  , anObject = __webpack_require__(22);

	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = getDesc(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export  = __webpack_require__(5)
	  , anObject = __webpack_require__(22);
	var Enumerate = function(iterated){
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = []       // keys
	    , key;
	  for(key in iterated)keys.push(key);
	};
	__webpack_require__(103)(Enumerate, 'Object', function(){
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
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var $        = __webpack_require__(4)
	  , has      = __webpack_require__(19)
	  , $export  = __webpack_require__(5)
	  , isObject = __webpack_require__(18)
	  , anObject = __webpack_require__(22);

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
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var $        = __webpack_require__(4)
	  , $export  = __webpack_require__(5)
	  , anObject = __webpack_require__(22);

	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return $.getDesc(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(5)
	  , getProto = __webpack_require__(4).getProto
	  , anObject = __webpack_require__(22);

	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(5);

	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export       = __webpack_require__(5)
	  , anObject      = __webpack_require__(22)
	  , $isExtensible = Object.isExtensible;

	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(5);

	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(163)});

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var $        = __webpack_require__(4)
	  , anObject = __webpack_require__(22)
	  , Reflect  = __webpack_require__(6).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = $.getNames(anObject(it))
	    , getSymbols = $.getSymbols;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export            = __webpack_require__(5)
	  , anObject           = __webpack_require__(22)
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
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var $          = __webpack_require__(4)
	  , has        = __webpack_require__(19)
	  , $export    = __webpack_require__(5)
	  , createDesc = __webpack_require__(9)
	  , anObject   = __webpack_require__(22)
	  , isObject   = __webpack_require__(18);

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
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(5)
	  , setProto = __webpack_require__(47);

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
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export   = __webpack_require__(5)
	  , $includes = __webpack_require__(35)(true);

	$export($export.P, 'Array', {
	  // https://github.com/domenic/Array.prototype.includes
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	__webpack_require__(120)('includes');

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(5)
	  , $at     = __webpack_require__(100)(true);

	$export($export.P, 'String', {
	  at: function at(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(5)
	  , $pad    = __webpack_require__(170);

	$export($export.P, 'String', {
	  padLeft: function padLeft(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-string-pad-left-right
	var toLength = __webpack_require__(29)
	  , repeat   = __webpack_require__(111)
	  , defined  = __webpack_require__(24);

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
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(5)
	  , $pad    = __webpack_require__(170);

	$export($export.P, 'String', {
	  padRight: function padRight(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(65)('trimLeft', function($trim){
	  return function trimLeft(){
	    return $trim(this, 1);
	  };
	});

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(65)('trimRight', function($trim){
	  return function trimRight(){
	    return $trim(this, 2);
	  };
	});

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(5)
	  , $re     = __webpack_require__(175)(/[\\^$*+?.()|[\]{}]/g, '\\$&');

	$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ },
/* 175 */
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
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/WebReflection/9353781
	var $          = __webpack_require__(4)
	  , $export    = __webpack_require__(5)
	  , ownKeys    = __webpack_require__(163)
	  , toIObject  = __webpack_require__(25)
	  , createDesc = __webpack_require__(9);

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
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	// http://goo.gl/XkBrjD
	var $export = __webpack_require__(5)
	  , $values = __webpack_require__(178)(false);

	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(4)
	  , toIObject = __webpack_require__(25)
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
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	// http://goo.gl/XkBrjD
	var $export  = __webpack_require__(5)
	  , $entries = __webpack_require__(178)(true);

	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(5);

	$export($export.P, 'Map', {toJSON: __webpack_require__(181)('Map')});

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var forOf   = __webpack_require__(140)
	  , classof = __webpack_require__(49);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    var arr = [];
	    forOf(this, false, arr.push, arr);
	    return arr;
	  };
	};

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(5);

	$export($export.P, 'Set', {toJSON: __webpack_require__(181)('Set')});

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	// JavaScript 1.6 / Strawman array statics shim
	var $       = __webpack_require__(4)
	  , $export = __webpack_require__(5)
	  , $ctx    = __webpack_require__(14)
	  , $Array  = __webpack_require__(7).Array || Array
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
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global     = __webpack_require__(6)
	  , $export    = __webpack_require__(5)
	  , invoke     = __webpack_require__(21)
	  , partial    = __webpack_require__(185)
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
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var path      = __webpack_require__(186)
	  , invoke    = __webpack_require__(21)
	  , aFunction = __webpack_require__(15);
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
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6);

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(5)
	  , $task   = __webpack_require__(143);
	$export($export.G + $export.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(119);
	var global      = __webpack_require__(6)
	  , hide        = __webpack_require__(8)
	  , Iterators   = __webpack_require__(102)
	  , ITERATOR    = __webpack_require__(33)('iterator')
	  , NL          = global.NodeList
	  , HTC         = global.HTMLCollection
	  , NLProto     = NL && NL.prototype
	  , HTCProto    = HTC && HTC.prototype
	  , ArrayValues = Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
	if(NLProto && !NLProto[ITERATOR])hide(NLProto, ITERATOR, ArrayValues);
	if(HTCProto && !HTCProto[ITERATOR])hide(HTCProto, ITERATOR, ArrayValues);

/***/ },
/* 189 */
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

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(190)))

/***/ },
/* 190 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
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
	    var timeout = setTimeout(cleanUpNextTick);
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
	    clearTimeout(timeout);
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
	        setTimeout(drainQueue, 0);
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
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _statistics = __webpack_require__(192);

	var _statistics2 = _interopRequireDefault(_statistics);

	var _build = __webpack_require__(217);

	var _build2 = _interopRequireDefault(_build);

	var _sgl = __webpack_require__(218);

	var _sgl2 = _interopRequireDefault(_sgl);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _private = new WeakMap();
	var Window = window;
	var Windows = window.Windows = typeof Windows == 'undefined' ? Window : Windows;

	/**
	* SpiceJS is the main corns and beans, this returns an app object which you can control all aspects of the  game. The main class will be instance specific alowing you to define multiple canvases. You can also view statistics and control group canvases through the object.
	* @access public
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

	var SpiceJS = function (_Build2) {
		_inherits(SpiceJS, _Build2);

		/**
	    *  Creates a new SpiceJS() to instanciate multiple configurations. Constructor builds references.
	 * @private
	    */

		function SpiceJS() {
			_classCallCheck(this, SpiceJS);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SpiceJS).call(this));

			var statsReference = new _this.constructor.properties.statistics();

			_this.constructor.properties.statistics = statsReference;

			_private.set(_this, _this.constructor.properties);

			return _this;
		}

		/**
	 * Reference to the canvas/app global controller.
	 * @type {Object}
	 * @protected
	 */

		/**
	 * Private variables. Statistics and Controller are only accessable through reference.
	 * @type {Object}
	 */

		_createClass(SpiceJS, [{
			key: 'controller',
			get: function get() {

				return _private.get(this)['controller'];
			}

			/**
	  * Reference to the statistics object.
	  * @type {Object}
	  * @protected
	  */

		}, {
			key: 'statistics',
			get: function get() {

				return _private.get(this)['statistics'];
			}

			/**
	  * Reference to the Window object.
	  * @type {Element}
	  * @protected
	  */

		}, {
			key: 'window',
			get: function get() {

				return Window;
			}
		}]);

		return SpiceJS;
	}(_build2.default);

	SpiceJS.properties = {

		temp: {},

		controller: {

			/**
	  * List all of the instances of SpiceJS or
	  * @type {method}
	  * @param {number} id - Specify a specific instance to return.
	  */

			list: function list(id) {

				if (id) return window.apps[id];else if (window.apps.length > 1) return window.apps;else return window.apps[0];
			}

		},

		statistics: _statistics2.default

	};
	exports.default = SpiceJS;
	;

	/**
	 * Export SpiceJS
	 */

	exports.default = new SpiceJS();

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
					value: true
	});

	var _utils = __webpack_require__(193);

	var _utils2 = _interopRequireDefault(_utils);

	var _interfaces = __webpack_require__(195);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _private = new WeakMap();

	/** This module is designed to monitor functions.
	* @module
	* @public
	* @example
	*   Statistics.monitor(function () {
	*
	*       _this.name = "scriptloadtime";
	*
	*   }).then(function () {
	*
	*           _this.name = "scriptloadtime";
	*           _this.statistics.log("compileloadtime", new Date().getTime() - time, 'build');
	*           _this.statistics.monitor(function () {
	*
	*                   _this.name = "scriptloadtime2";
	*
	*               }).then(function () {
	*
	*                       _this.statistics.log("scriptloadtime", new Date().getTime() - time, 'build');
	*
	*                   });
	*       });
	*/

	var Statistics = function () {

					/* */

					function Statistics() {
									_classCallCheck(this, Statistics);

									this.logs = this.constructor.logs;
									this.logs.type = 'Array';

									this.count = 0;

									_private.set(this, this.constructor.properties);
					}

					/** Async Monitor of a function, returns duration.
	    * @type {Promise}
	    * @param {Function} func - Function to monitor
	    * @param {Arguments} arg - Arguments to pass
	    * @return {Number} as duration.
	    */

					/**
	    * Private variables.
	    * @type {Object}
	    */

					_createClass(Statistics, [{
									key: 'monitor',
									value: function () {
													var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(func, arg) {
																	var startTime, endTime;
																	return regeneratorRuntime.wrap(function _callee$(_context) {
																					while (1) {
																									switch (_context.prev = _context.next) {
																													case 0:
																																	startTime = new Date().getTime();
																																	_context.next = 3;
																																	return func(arg);

																													case 3:
																																	endTime = new Date().getTime();

																																	this.log("time", -startTime + endTime, func.name);

																																	return _context.abrupt('return', startTime - endTime);

																													case 6:
																													case 'end':
																																	return _context.stop();
																									}
																					}
																	}, _callee, this);
													}));

													return function monitor(_x, _x2) {
																	return ref.apply(this, arguments);
													};
									}()

									/** Async - Unused Asyn logging....
	         * @private
	         */

					}, {
									key: 'log',
									value: function () {
													var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
																	var name,
																	    curLog,
																	    newLog,
																	    hashLog,
																	    time,
																	    time2,
																	    timeHash,
																	    _args2 = arguments;
																	return regeneratorRuntime.wrap(function _callee2$(_context2) {
																					while (1) {
																									switch (_context2.prev = _context2.next) {
																													case 0:
																																	name = '';
																																	curLog = this.logs;
																																	newLog = {};
																																	hashLog = {};
																																	time = new Date().getTime();
																																	time2 = new Date().getTime();
																																	timeHash = this.count + time;

																																	timeHash = _utils2.default.hashFnv32a(timeHash.toString());

																																	if (typeof _args2[2] != 'undefined') {

																																					name = _args2[2];

																																					if (name == 'compile') newLog = curLog[name] || new _interfaces._Compile(name);else if (name == 'build') newLog = curLog[name] || new _interfaces._Build(name);else if (name == 'loop') newLog = curLog[name] || new _interfaces._Loop(name);else if (name == 'state') newLog = curLog[name] || new _interfaces._App(name);else newLog = curLog[name] || new _interfaces._Log(name);

																																					hashLog = newLog[this.count + " " + _args2[0]] || new _interfaces._Log(name);

																																					hashLog = _args2[1];

																																					newLog[_args2[0]] = hashLog;

																																					curLog[name] = newLog;
																																	} else {

																																					name = _args2[0];

																																					if (name == 'compile') newLog = curLog[name] || new _interfaces._Compile(name);else if (name == 'build') newLog = curLog[name] || new _interfaces._Build(name);else if (name == 'loop') newLog = curLog[name] || new _interfaces._Loop(name);else if (name == 'state') newLog = curLog[name] || new _interfaces._App(name);else newLog = curLog[name] || new _interfaces._Log(name);

																																					hashLog = newLog[this.count + " " + _args2[0]] || new _interfaces._Log(name);

																																					hashLog = _args2[1];

																																					newLog[_args2[0]] = hashLog;

																																					curLog[name] = newLog;
																																	}

																																	this.count++;

																																	this.logs = curLog;

																													case 11:
																													case 'end':
																																	return _context2.stop();
																									}
																					}
																	}, _callee2, this);
													}));

													return function log() {
																	return ref.apply(this, arguments);
													};
									}()

									/** watch //to come - to call a funnction periodically (based on argument 1)
	        * @private
	        	static watch(v){
	        		let w = v;
	        	}
	        */

					}, {
									key: 'count',
									get: function get() {

													return this.monitor.count;
									},
									set: function set(value) {

													this.monitor.count = value;
									}
					}, {
									key: 'details',
									get: function get() {

													return _Statistics_Core._details;
									},
									set: function set(value) {

													this._details = _Statistics_Core._details;
									}
					}], [{
									key: '_details',
									value: function _details(type) {

													type = type;

													switch (type) {

																	default:

																					return Object.keys(this.logs);

																	case 'details':

																					return Object.create(Object.getPrototypeOf(this.logs), Object.getOwnPropertyDescriptors(this.logs));

																	case 'entries':

																					return Object.entries(this.logs);

																	case 'values':

																					return Object.values(this.logs);

													}
									}
					}, {
									key: 'logs',
									get: function get() {

													return this.monitor.logs;
									},
									set: function set(value) {

													this.monitor = value;
									}
					}, {
									key: 'monitor',
									get: function get() {

													return this._monitor;
									},
									set: function set(value) {

													this._monitor = value;
									}
					}]);

					return Statistics;
	}();

	Statistics.properties = {};
	Statistics._monitor = {

					count: 0,

					logs: []

	};
	exports.default = Statistics;

/***/ },
/* 193 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
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

	function wait(t) {

	    return new Promise(function (r) {
	        return setTimeout(r, t);
	    });
	}

	//Fill animation frame

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

	/**
	* Converts and array of objects to CSV.
	* @module
	* @access private
	*/

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

	/**
	* Converts and array of objects to CSV.
	* @module
	* @access private
	*/

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

	window.wait = wait;

	window.utils = utils;

	exports.default = window.utils;

/***/ },
/* 194 */,
/* 195 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/** @type {Number} @private */

	var _number = 0;

	/** @type {Object} @private */

	var _object = {};

	/** @type {Method} @private */

	var _method = function _method() {};

	/** @type {Array<>} @private */

	var _array = [];

	/**
	_private
	* @private
	*/

	var _Interface_private = new WeakMap();

	/**
	Interface
	* @interface
	* @private
	*/

	var _Interface = function () {

	    /**  @type {Constructor} */

	    function _Interface() {
	        _classCallCheck(this, _Interface);

	        _Interface_private.set(this, this.constructor.properties);
	    }

	    /**  @type {Multi} */

	    /**  @type {Object} */

	    _createClass(_Interface, [{
	        key: 'get',
	        value: function get(value) {

	            return _Interface_private.get(this)[value];
	        }

	        /**  @type {String} */

	    }, {
	        key: 'name',
	        get: function get() {

	            return _Interface_private.get(this).name;
	        }
	    }]);

	    return _Interface;
	}();

	/*





	*/

	/**
	* Vector_private
	* @property
	* @private
	*/

	_Interface.properties = { name: 'interface' };
	var _Vector_private = new WeakMap();

	/**
	* Vector
	* @module
	* @interface
	* @private
	*/

	var _Vector = function (_Interface2) {
	    _inherits(_Vector, _Interface2);

	    /**
	    * This is the constructor for the vector
	    * @param {number} x - position.x
	    * @param {number} y - position.y
	    */

	    /**  @type {Method} */

	    /**  @type {Number} */

	    /**
	       * Set Vector private variables
	       * @type {Object}
	       * @protected
	       */

	    function _Vector() {
	        var x = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	        var y = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	        _classCallCheck(this, _Vector);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(_Vector).call(this));

	        _Vector_private.set(_this, _this.constructor.properties);

	        _this.position = { x: x, y: y };

	        return _this;
	    }

	    /**  @type {Method} */

	    /**  @type {Vector} */

	    /**  @type {Number} */

	    return _Vector;
	}(_Interface);

	/*





	*/

	/**
	* SJSClass
	* @module
	* @interface
	* @private
	*/

	_Vector.properties = {
	    x: 0,
	    y: 0
	};
	_Vector._x = _number;
	_Vector._y = _number;
	_Vector.position = _method;
	_Vector.multiply = _method;
	_Vector.offset = _method;

	var _SJSClass = function (_Interface3) {
	    _inherits(_SJSClass, _Interface3);

	    /**
	    * This is the constructor for the vector
	    * @param {Object} app[ - instance of spicejs]
	    */

	    /**  @type {Number} */

	    function _SJSClass(app) {
	        _classCallCheck(this, _SJSClass);

	        var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(_SJSClass).call(this));

	        var appReference = app;

	        if (typeof appReference == 'undefined') {

	            appReference = SJS.controller.list();

	            console.warn('Unable to find app reference.', 'Using ', appReference, ' for ', _this2);
	        }

	        _this2.app = appReference;

	        _this2.visuals = appReference.client.visuals;

	        _this2.graphics = appReference.client.graphics;

	        return _this2;
	    }

	    /**  @type {Vector} */

	    /**  @type {Number} */

	    return _SJSClass;
	}(_Interface);

	_SJSClass.app = _object;
	_SJSClass.visuals = _object;
	_SJSClass.graphics = _object;

	var _Legacy = function (_Interface4) {
	    _inherits(_Legacy, _Interface4);

	    function _Legacy() {
	        _classCallCheck(this, _Legacy);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(_Legacy).apply(this, arguments));
	    }

	    _createClass(_Legacy, [{
	        key: 'create',

	        /**
	        * Legacy functions.
	        * @method
	           * @param {Event} [event] - Passing of the event.
	           * @param {Element} [anchorObj] - Element to click.
	        */

	        value: function create(a) {
	            //console.warn('	    create(a)');
	            return this.Construct(a || {}, this.client.room);
	        }

	        /*
	            getFps(){
	                 return this.client.update.step.fps;
	           }
	        	*/

	    }, {
	        key: 'getCurrent',
	        value: function getCurrent() {
	            //console.warn('	    getCurrent()');
	            return this.client.update.state.current;
	        }
	    }, {
	        key: 'getConnection',
	        value: function getConnection() {
	            //console.warn('	    getConnection()');
	            return this.ext.connect.offline;
	        }
	    }, {
	        key: 'getConnectionError',
	        value: function getConnectionError() {
	            //console.warn('	    getConnectionError()');
	            return this.ext.connect.error;
	        }
	    }, {
	        key: 'getConnectionAttempts',
	        value: function getConnectionAttempts() {
	            //console.warn('	    getConnectionAttempts()');
	            return this.ext.connect.connectionAttempts;
	        }
	    }, {
	        key: 'getDelta',
	        value: function getDelta() {
	            //console.warn('	    getDelta()');
	            return this.client.update.step.delta;
	        }
	    }, {
	        key: 'getScale',
	        value: function getScale() {
	            //console.warn('	    getScale()');
	            return this.client.scale;
	        }
	    }, {
	        key: 'getWidth',
	        value: function getWidth() {
	            //console.warn('	    getWidth()');
	            return this.client.setWidth;
	        }
	    }, {
	        key: 'getHeight',
	        value: function getHeight() {
	            //console.warn('	    getHeight()');
	            return this.client.setHeight;
	        }
	    }, {
	        key: 'getScaledWidth',
	        value: function getScaledWidth() {
	            //console.warn('	    getScaledWidth()');
	            return this.client.width;
	        }
	    }, {
	        key: 'getScaledHeight',
	        value: function getScaledHeight() {
	            //console.warn('	    getScaledHeight()');
	            return this.client.height;
	        }
	    }, {
	        key: 'setTitle',
	        value: function setTitle(title) {
	            //console.warn('	    ');
	            return document.title == title ? document.title : document.title = title;
	        }
	    }, {
	        key: 'setState',
	        value: function setState(state) {
	            //console.warn('	    ');
	            return this.client.update.state.set(state, true);
	        }
	    }, {
	        key: 'toggleWidescreen',
	        value: function toggleWidescreen() {
	            //console.warn('	    toggleWidescreen()');
	            return this.client.update.fullscale = !this.client.update.fullscale;
	        }
	    }]);

	    return _Legacy;
	}(_Interface);

	/*  Extends SJSClass





	*/

	/**
	* Document
	* @constant
	* @private
	*/

	var doc = function doc() {

	    return document;
	};

	/**
	* Canvas Interface
	* @module
	* @interface
	* @protected
	*/

	var _Canvas_Core = function (_SJSClass2) {
	    _inherits(_Canvas_Core, _SJSClass2);

	    _createClass(_Canvas_Core, [{
	        key: 'doc',

	        /**
	        * Get document element
	        * @type {Element}
	        * @protected
	        */

	        get: function get() {

	            return this.get('docs');
	        }

	        /**
	        * Get header element
	        * @type {Element}
	        * @protected
	        */

	    }, {
	        key: 'head',
	        get: function get() {

	            return this.get('head');
	        }

	        /**
	        * Get gendering element
	        * @type {Element}
	        * @protected
	        */

	    }, {
	        key: 'rendering_style',
	        get: function get() {

	            return this.get('_rendering_style');
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
	            var img_rendering = '#Client, #Buffer, img[srcApp=".gif"],img[srcApp=".jpg"], img[srcApp=".png"] {image-rendering: -moz-crisp-edges;image-rendering:-o-crisp-edges;image-rendering: crisp-edges;image-rendering: -webkit-optimize-contrast;-ms-interpolation-mode: nearest-neighbor;}';

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

	            return this.get('canvas')[0];
	        }

	        /**
	        * Set rendering canvas
	        * @type {Element}
	        * @protected
	        */

	        ,
	        set: function set(canvas) {

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

	            return this.get('canvas')[1];
	        }

	        /**
	        * Set buffering canvas
	        * @type {Element}
	        * @protected
	        */

	        ,
	        set: function set(canvas) {

	            this.get('canvas')[1] = canvas;
	        }

	        /**
	        * Get blitting canvas
	        * @type {Element}
	        * @protected
	        */

	    }, {
	        key: 'blitter',
	        get: function get() {

	            return this.get('canvas')[2];
	        }

	        /**
	        * Set blitting canvas
	        * @type {Element}
	        * @protected
	        */

	        ,
	        set: function set(canvas) {

	            this.get('canvas')[2] = canvas;
	            //this._blitter = canvas;
	        }
	    }]);

	    function _Canvas_Core(app) {
	        _classCallCheck(this, _Canvas_Core);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(_Canvas_Core).call(this, app));
	    }

	    return _Canvas_Core;
	}(_SJSClass);

	/*





	*/

	/**
	*
	* @module
	* @interface
	* @protected
	*/

	var _Log = function () {
	    _createClass(_Log, null, [{
	        key: 'time',

	        /** @type {Number} */

	        get: function get() {

	            return this._time;
	        }

	        /** @type {Number} */

	        ,
	        set: function set(value) {

	            return this._time = value;
	        }

	        /** @type {Number} */

	    }, {
	        key: 'id',
	        get: function get() {

	            return this._id;
	        }

	        /** @type {Number} */

	        ,
	        set: function set(value) {

	            return this._id = value;
	        }

	        /**
	        * Assigns an id or 0
	        * @param {Number} [id] - instance of log
	        */

	    }]);

	    function _Log(id) {
	        _classCallCheck(this, _Log);

	        this.id = id || 0;
	    }

	    return _Log;
	}();

	/**
	*
	* @module
	* @interface
	* @private
	*/

	var _Loop = function (_Log2) {
	    _inherits(_Loop, _Log2);

	    function _Loop() {
	        _classCallCheck(this, _Loop);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(_Loop).call(this));
	    }

	    return _Loop;
	}(_Log);

	/**
	*
	* @module
	* @interface
	* @private
	*/

	var _Compile = function (_Log3) {
	    _inherits(_Compile, _Log3);

	    function _Compile() {
	        _classCallCheck(this, _Compile);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(_Compile).call(this));
	    }

	    return _Compile;
	}(_Log);

	/**
	*
	* @module
	* @interface
	* @private
	*/

	var _App = function () {
	    function _App() {
	        _classCallCheck(this, _App);
	    }

	    _createClass(_App, null, [{
	        key: 'fps',
	        get: function get() {

	            return this._fps;
	        },
	        set: function set(value) {

	            return this._fps = value;
	        }
	    }, {
	        key: 'scale',
	        get: function get() {

	            return this._scale;
	        },
	        set: function set(value) {

	            return this._scale = value;
	        }
	    }]);

	    return _App;
	}();

	/**
	*
	* @module
	* @interface
	* @private
	*/

	var _Build = function () {
	    function _Build() {
	        _classCallCheck(this, _Build);
	    }

	    _createClass(_Build, null, [{
	        key: 'build',
	        get: function get() {

	            return this._build;
	        },
	        set: function set(value) {

	            return this._build = value;
	        }
	    }, {
	        key: 'scriptloadtime',
	        get: function get() {

	            return this._scriptloadtime;
	        },
	        set: function set(value) {

	            return this._scriptloadtime = value;
	        }
	    }, {
	        key: 'uptime',
	        get: function get() {

	            return this._uptime;
	        },
	        set: function set(value) {

	            return this._uptime = value;
	        }
	    }]);

	    return _Build;
	}();

	exports._Interface = _Interface;
	exports._Vector = _Vector;
	exports._SJSClass = _SJSClass;
	exports._Log = _Log;
	exports._Loop = _Loop;
	exports._Compile = _Compile;
	exports._Canvas_Core = _Canvas_Core;
	exports._App = _App;
	exports._Build = _Build;
	exports._Legacy = _Legacy;

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	"strict mode";
	/** @module app */

	/** Name. */

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
				value: true
	});
	exports.name = undefined;

	var _math2 = __webpack_require__(197);

	var _math3 = _interopRequireDefault(_math2);

	var _options2 = __webpack_require__(199);

	var _options3 = _interopRequireDefault(_options2);

	var _input2 = __webpack_require__(200);

	var _input3 = _interopRequireDefault(_input2);

	var _client2 = __webpack_require__(205);

	var _client3 = _interopRequireDefault(_client2);

	var _core = __webpack_require__(207);

	var _core2 = _interopRequireDefault(_core);

	var _canvas2 = __webpack_require__(208);

	var _canvas3 = _interopRequireDefault(_canvas2);

	var _user2 = __webpack_require__(209);

	var _user3 = _interopRequireDefault(_user2);

	var _ext2 = __webpack_require__(210);

	var _ext3 = _interopRequireDefault(_ext2);

	var _loader = __webpack_require__(214);

	var _loader2 = _interopRequireDefault(_loader);

	var _particles = __webpack_require__(216);

	var _particles2 = _interopRequireDefault(_particles);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var name = exports.name = 'core'; // (unfinished) To be built into application (to override current)

	// (unfinished) To be built into application

	window.SJSParticleController = _particles2.default; // Temporary for snowflakes

	var date = new Date();

	/**
	* _Core_private
	* @property
	* @private
	*/

	//let _private = new WeakMap();

	/**
	* Core of the framework, initalizes client, input and listeners.
	* @protected
	* @module
	*
	*/

	var _App = function (_Core2) {
				_inherits(_App, _Core2);

				/** Builds the core modules of the Application. */

				function _App() {
							_classCallCheck(this, _App);

							//_private.set(this,this.constructor.properties);

							var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(_App).call(this));

							_this.time = 0;

							//this.main = {name:"Main",init:function() {},update:function() {},draw:function() {return true;}};

							_this.options = _options3.default;

							_this.user = _user3.default;

							_this.ext = _ext3.default;

							_this.input = _input3.default;

							_this.canvas = _canvas3.default;

							_this.client = _client3.default;

							_this.math = new _math3.default();

							return _this;
				}

				/**
	   * This function starts the application.
	   * @method
	   * @protected
	   */

				_createClass(_App, [{
							key: 'start',
							value: function start(w, h) {

										var name = '';

										this.client = this.Construct(this.client.prototype, this.client.constructor);

										this.canvas = new _canvas3.default(this);

										this.loop(this);

										this.client.init(w || this.app.options.width, h || this.app.options.height);

										this.input = new this.input(this);
							}

							/**
	      * The main loop for the application
	      * @method
	      * @private
	      */

				}, {
							key: 'loop',
							value: function loop(self) {
										var _this2 = this;

										//Use arrow function if available
										var usearrow = true;

										if (usearrow) {

													setTimeout(function () {

																function AppLoop() {
																			self.client.loop();
																}

																function AppLoopData() {
																			self.client.loopData();
																}

																_this2.client.initalize(AppLoop, AppLoopData, _this2.scale);
													}, this.time);
										} else {

													setTimeout(function () {

																function AppLoop() {
																			self.client.loop();
																}

																function AppLoopData() {
																			self.client.loopData();
																}

																self.client.initalize(AppLoop, AppLoopData, self.scale);
													}, this.time);
										}
							}
				}, {
							key: 'OnLoad',

							/**
	      * Triggers when the application first loops.
	      * @method
	         * @param {Object} [self] - Reference to the app.
	      * @override
	      */

							value: function OnLoad(self) {

										self.start();
							}

							/**
	      * Triggers on dom content load.
	      * @method
	         * @param {Event} [evt] - The passing event.
	      * @override
	      */

				}, {
							key: 'OnApplicationLoad',
							value: function OnApplicationLoad(evt) {

										//Run .OnLoad
										evt.target.app.OnLoad(evt.target.app);

										console.log(evt.target.app.getCurrent().name + ': OnApplicationLoad');
							}

							/**
	      * Event listener polyfill.
	      * @method
	         * @param {Element} [obj] - Element to trigger event on, fallback on window.
	         * @param {Event} [evt] - The passing event.
	         * @param {String} [listener] - The listener to build.
	         * @param {Object} [param] - Paramater to pass.
	      *
	      * @example
	      * Application.Listener(window,'click',function(){console.log('eh');},'');
	      * Application.Click(new Event,window);
	      */

				}, {
							key: 'Listener',
							value: function Listener(obj, evt, listener, param) {

										/* Check obj param */

										if (_typeof(obj[0]) === "object") {

													obj = obj[0] || window;
										}

										/* If addEventListener exist, add it, otherwise attachEvent. */

										if (obj.addEventListener) {

													obj.addEventListener(evt, listener, false);
										} else {

													obj.attachEvent("on" + evt, listener);
										}

										/* Assign App Reference */

										obj.app = window.apps[this.id] = this;
							}
				}, {
							key: 'Construct',

							/**
	      * Object constructor/factory polyfill.
	      * @method
	         * @param {Object} [prototype] - An object prototype.
	         * @param {Object} [constructor] - An object constructor.
	      */

							value: function Construct(prototype, constructor) {

										var isObj = false;
										var obj = prototype;
										var proto = prototype;
										var construct = constructor;
										var ret = {};
										var type = undefined;

										/* if prototype contains a prototype and constructor. */

										if (typeof obj.prototype !== 'undefined') if (typeof obj.constructor !== 'undefined') {
													construct = obj.constructor;
													proto = obj.prototype;
													isObj = true;
										}

										/* Grab type of constructor */

										type = typeof construct === 'undefined' ? 'undefined' : _typeof(construct);

										/* Return & Create object based on constructor */
										switch (type) {

													/* Use only the prototype */
													case 'undefined':
																ret = Object.create(proto);
																break;

													/* Use constructor as object */
													case 'object':
																ret = Object.create(proto, construct);
																break;

													/* Use constructor as function */
													case 'function':
																ret = Object.create(proto, construct(this));
																break;

													/* Expected a type */
													default:
																console.log("Expected 'object' or 'function': Type is " + c);

										}

										if (isObj) prototype = ret;

										return ret;
							}

							/**
	      * Artificial click
	      * @method
	         * @param {Event} [event] - Passing of the event.
	         * @param {Element} [anchorObj] - Element to click.
	      */

				}, {
							key: 'click',
							value: function click(event, anchorObj) {

										this.Click(event, anchorObj);
							}

							/**
	      * Artificial Click
	      * @method
	         * @param {Event} [event] - Passing of the event.
	         * @param {Element} [anchorObj] - Element to click.
	      */

				}, {
							key: 'Click',
							value: function Click(event, anchorObj) {

										if (typeof anchorObj != 'undefined') if (anchorObj.click) {

													anchorObj.click();
										} else if (document.createEvent) {

													if (event.target !== anchorObj) {

																var evt = document.createEvent("MouseEvents");

																evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

																anchorObj.dispatchEvent(evt);
													}
										}
							}
				}]);

				return _App;
	}(_core2.default);

	;

	exports.default = _App;

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _vector = __webpack_require__(198);

	var _vector2 = _interopRequireDefault(_vector);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

	exports.default = Math;

	window.Math.vector = window.Math.Vector = _vector2.default;

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _interfaces = __webpack_require__(195);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	* @module
	* @access public
	* @example
	* let vector = new Vector(1,1);
	*/

	var Vector = function (_Vector2) {
	    _inherits(Vector, _Vector2);

	    function Vector() {
	        _classCallCheck(this, Vector);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Vector).apply(this, arguments));
	    }

	    _createClass(Vector, [{
	        key: 'multiply',

	        //equals(p) { return this.#x === p.#x && this.#y === p.#y }

	        //toString() { return `Point<${ this.#x },${ this.#y }>` }
	        /**
	        * Multiply vector position
	        * @method
	        * @param {Number} a - multiply X
	        * @param {Number} b - multiply Y
	        * @return {Vector}
	        */

	        value: function multiply(a, b) {

	            this._x *= a;
	            this._y *= b;

	            return this;
	        }

	        /**
	        * Offset vector position
	        * @method
	        * @param {Number} a - multiply X
	        * @param {Number} b - multiply Y
	        * @return {Vector}
	        */

	    }, {
	        key: 'offset',
	        value: function offset(a, b) {

	            this._x += a;
	            this._y += b;

	            return this;
	        }

	        /**
	        * Get vector position
	        * @type {Object}
	        */

	    }, {
	        key: 'position',
	        get: function get() {

	            return this;
	        }

	        /**
	        * Set vector position
	        * @type {Object}
	        * @example
	        * var PointA = new Vector(2,1);
	        * PointA.position = new Vector(5,5);
	        * PointA.position = {x:0,y:0};
	        */

	        ,
	        set: function set(value) {

	            this.x = value.x;
	            this.y = value.y;
	        }

	        /**
	        * Get x position
	        * @type {Number}
	        */

	    }, {
	        key: 'x',
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

	            this._x = value;
	        }

	        /**
	        * Get y position
	        * @type {Number}
	        */

	    }, {
	        key: 'y',
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

	            this._y = value;
	        }
	    }]);

	    return Vector;
	}(_interfaces._Vector);

	exports.default = Vector;

/***/ },
/* 199 */
/***/ function(module, exports) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {

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

	    // String - Id of the blitting canvas
	    global: {

	        globalCompositeOperation: "destination-in" },

	    //or source-over //See list http://www.w3schools.com/tags/canvas_globalcompositeoperation.asp

	    flags: {

	        webGL: true,

	        canvas: true,
	        mstouch: true,
	        seamless: true,
	        tight: true,
	        touchprevent: true,
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

	        keyboard: true,
	        mouse: true,
	        MSHoldVisual: false,
	        SelectStart: false,
	        ContextMenu: true,
	        Drag: true

	    },

	    //Return Options Value
	    get: function get(attr) {

	        //If Attribute
	        if (attr) {

	            //Get list of apps
	            var list = SpiceJS.controller.list();

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
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _inputcontroller2 = __webpack_require__(201);

	var _inputcontroller3 = _interopRequireDefault(_inputcontroller2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Input).call(this, app));

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

	    _createClass(Input, [{
	        key: "preventDefault",
	        value: function preventDefault(e) {
	            e.preventDefault();return e.target.app;
	        }
	    }, {
	        key: "preventNextInput",
	        value: function preventNextInput() {
	            return this.preventNext = true;
	        }
	    }, {
	        key: "confineMouse",
	        value: function confineMouse() {

	            return this.confine ? (this.y < this.app.client.visuals.fixY(0) ? (this.app.window.y = 0, this.app.window.inside -= 1) : this.y > this.app.client.visuals.fixY(this.app.client.setHeight) ? (this.app.window.y = this.app.client.visuals.fixW(this.app.client.setHeight), this.app.window.inside += 1) : this.app.window.y = -this.app.client.visuals.fixY(0) + this.y, this.x < this.app.client.visuals.fixX(0) ? (this.app.window.x = 0, this.app.window.inside -= 1) : this.x > this.app.client.visuals.fixX(this.app.client.setWidth) ? (this.app.window.x = this.app.client.visuals.fixW(this.app.client.setWidth), this.app.window.inside += 1) : this.app.window.x = -this.app.client.visuals.fixX(0) + this.x) : (this.y < this.app.client.visuals.fixY(0) ? this.app.window.y = -this.app.client.visuals.fixY(0) + this.y : this.y > this.app.client.visuals.fixY(this.app.client.setHeight) ? this.app.window.y = -this.app.client.visuals.fixY(0) + this.y : this.app.window.y = -this.app.client.visuals.fixY(0) + this.y, this.x < this.app.client.visuals.fixX(0) ? this.app.window.x = -this.app.client.visuals.fixX(0) + this.x : this.x > this.app.client.visuals.fixX(this.app.client.setWidth) ? this.app.window.x = -this.app.client.visuals.fixX(0) + this.x : this.app.window.x = -this.app.client.visuals.fixX(0) + this.x);
	        }
	    }, {
	        key: "init_options",
	        value: function init_options() {

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
	        key: "update",
	        value: function update() {

	            this.confineMouse();

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
	        key: "setup_documentListeners",
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
	        key: "setup_universalMultitouch",
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
	        key: "setup_msUniversalAppTouch",
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

	            if (!this.wininitalize) try {

	                //var w = Windows;
	                //var p = Windows.UI.Input.PointerPoint.getCurrentPoint(1);

	                this.pressed = Windows.UI.Input.PointerPoint.getCurrentPoint(1).isInContact;
	                this.pointerDevice = Windows.UI.Input.PointerPoint.getCurrentPoint(1).pointerDevice;
	                this.wininitalize = true;

	                data = {
	                    app: this.app,
	                    x: this.winposition.x,
	                    y: this.winposition.y
	                };
	            } catch (e) {

	                data = {
	                    app: this.app,
	                    x: 0,
	                    y: 0
	                };
	            } else {
	                this.winpoint = Windows.UI.Input.PointerPoint.getCurrentPoint(1);
	                this.winposition = this.pointerPoint.getCurrentPoint(1).rawPosition;
	                this.pressed = this.winpoint.isInContact;
	                this.pointerDevice = this.winpoint.pointerDevice;

	                var pt = this.pointerPoint.getCurrentPoint(1);
	                var ptTargetProperties = pt.properties;

	                if (this.released) {

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
	                    details += "\n x:" + this.winposition.x + " y: " + this.winposition.y;
	                    //details += "\nPointer location (target): " + pt.offsetX + ", " + pt.offsetY;
	                    //details += "\nPointer location (screen): " + pt.screenX + ", " + pt.screenY;
	                    //console.log(pt.pointerDevice);
	                    //console.log(details);
	                }
	                i = this.winpoint;

	                data.x = this.winposition.x;
	                data.y = this.winposition.y;

	                if (this.pressed === true && this.lastpressed === true) this.controls.move(data);
	            }

	            if (this.pressed === true && this.lastpressed === false) this.controls.down(data);

	            // console.log(i)
	            //  if (Windows)
	            //  if (Windows.UI.Input.PointerPoint.getCurrentPoint(1).isInContact)
	            //  this.pressed = (Windows.UI.Input.PointerPoint.getCurrentPoint(1).isInContact);
	        }
	    }]);

	    return Input;
	}(_inputcontroller3.default);

	exports.default = Input;

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vector = __webpack_require__(198);

	var _vector2 = _interopRequireDefault(_vector);

	var _interfaces = __webpack_require__(195);

	var _inputlistener = __webpack_require__(202);

	var _inputlistener2 = _interopRequireDefault(_inputlistener);

	var _inputkeycontroller = __webpack_require__(203);

	var _inputkeycontroller2 = _interopRequireDefault(_inputkeycontroller);

	var _inputscrollcontroller = __webpack_require__(204);

	var _inputscrollcontroller2 = _interopRequireDefault(_inputscrollcontroller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(inputcontroller).apply(this, arguments));
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

	            return new _vector2.default(this.x, this.y);
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

	            input.last = input.end = new _vector2.default(x, y);

	            input.pressed = false;

	            input.released = true;

	            return true;
	        }
	    }, {
	        key: '_pointermove',
	        value: function _pointermove(evt) {

	            var input = evt.target.app.input;
	            var x = evt.x || evt.clientX || evt.pageX;
	            var y = evt.y || evt.clientY || evt.pageY;

	            //var mouse_last = this.mouse_last;

	            input.last = input.position = new _vector2.default(x, y);

	            if (input.pressed) {

	                var dx = (input.x - input.start.x) * evt.target.app.getScale();
	                var dy = (input.y - input.start.y) * evt.target.app.getScale();
	                input.dist = new _vector2.default(dx.toFixed(2), dy.toFixed(2));
	            }

	            if (input.dist.x > 0) if (this.mouse_last * 0.99 > input.dist.x) input.start.x = input.x, input.dist.x = 0;

	            if (input.dist.x < 0) if (this.mouse_last * 0.99 < input.dist.x) input.start.x = input.x, input.dist.x = 0;

	            this.mouse_last = input.dist.x;
	        }
	    }, {
	        key: '_pointerdown',
	        value: function _pointerdown(evt) {

	            var input = evt.target.app.input;

	            var x = evt.x || evt.clientX || evt.pageX;

	            var y = evt.y || evt.clientY || evt.pageY;

	            input.start = new _vector2.default(x, y);

	            input.pressed = true;

	            input.touch = true;

	            input.touched.count++;

	            input.touched.downlist.push(input.position);

	            input.dist = new _vector2.default(0, 0);
	        }
	    }]);

	    return inputcontroller;
	}(_interfaces._SJSClass);

	inputcontroller._x = 0;
	inputcontroller._y = 0;
	inputcontroller._last = new _vector2.default(0, 0);
	inputcontroller._pos = new _vector2.default(0, 0);
	inputcontroller._dist = new _vector2.default(0, 0);
	inputcontroller._end = new _vector2.default(0, 0);
	inputcontroller._start = new _vector2.default(0, 0);
	inputcontroller._duration = 0;
	inputcontroller._pressed = false;
	inputcontroller._released = false;
	inputcontroller._Listener = _inputlistener2.default;
	inputcontroller._keyController = new _inputkeycontroller2.default();
	inputcontroller._scrollController = _inputscrollcontroller2.default;
	exports.default = inputcontroller;

/***/ },
/* 202 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

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

	exports.default = InputListener;

/***/ },
/* 203 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

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
	                if (this.codeList[i] == code) this.codeList[i] = null;
	            }
	        }
	    }, {
	        key: "init",
	        value: function init(app) {

	            app.Listener(app.window.self, 'keydown', function (evt) {

	                if (app.input.preventNext === true) evt.preventDefault();

	                app.input.preventNext = false;

	                app.input.keyController.codedown = app.input.keyController.keyCodes[evt.keyCode];

	                app.input.keyController.codeList.push(app.input.codedown);

	                if (evt.ctrlKey) app.input.control = true;

	                app.input.pressed = true;
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
	exports.default = inputkeycontroller;

/***/ },
/* 204 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

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
	        a: false,

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

	exports.default = inputscrollcontroller;

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _visuals2 = __webpack_require__(206);

	var _visuals3 = _interopRequireDefault(_visuals2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {

	    constructor: function constructor(app) {

	        return {

	            app: { value: app },

	            init: { writable: false, configurable: false, enumerable: false, value: function value(w, h) {

	                    var name = '';

	                    //Set App.client.discription to the name
	                    this.discription = "description";

	                    //Depreciated setWidth-height: use w + h
	                    //Set App.client.w
	                    //Set App.client.h
	                    //Set App.client.width
	                    //Set App.client.height
	                    //Set App.client.setWidth
	                    //Set App.client.setHeight

	                    this.w = this.width = this.setWidth = w;
	                    this.h = this.height = this.setHeight = h;

	                    //Build Extensions
	                    (this.app.ext = this.app.Construct(this.app.ext.prototype, this.app.ext.constructor)).init(name);

	                    //Build Visuals
	                    (this.visuals = this.app.Construct(this.visuals.prototype, this.visuals.constructor)).init(this);

	                    //Build
	                    (this.graphics = this.app.Construct(this.graphics.prototype, this.graphics.constructor)).init();

	                    //Build
	                    this.room = Object.create(this.room.prototype, this.room.constructor(this.app)).init();

	                    //Build
	                    (this.audio = this.audio = Object.create(this.audio.prototype, this.audio.constructor())).init();

	                    //Build
	                    (this.mainLoop = Object.create(this.pace.prototype, this.pace.constructor(this))).init(app.options.targetfps, app.options.targetfps);

	                    //Build
	                    (this.second = Object.create(this.pace.prototype, this.pace.constructor(this))).init(1.0, app.options.targetfps);

	                    //Build
	                    this.main = Object.create(this.app.main);

	                    //Build
	                    (this.update.state = Object.create(this.update.state.prototype, this.update.state.constructor(this))).init(this.main);
	                }
	            }

	        };
	    },

	    //Client prototype, functions
	    prototype: {

	        //Client initalize
	        initalize: function initalize(loop, loopdata, scale) {
	            var _this = this;

	            //scale to scale
	            this.scale = scale;

	            //Assign client_f to loop
	            this.client_f = loop;

	            //Assign client_data to loop
	            this.client_data = loopdata;

	            //Request Animation Frame with this.client_f
	            requestAnimationFrame(this.client_f);

	            //setTimeout(loopdata,1000 / 60);

	            setTimeout(function () {

	                _this.client_data();
	            }, 1000 / 59);

	            this.app.ext.cursor.set(this.app.ext.cursor.def);

	            this.app.ext.time = (new Date().getTime() - SpiceJS.TimeToBuild) * 1;
	        },

	        //Client features loop
	        loopData: function loopData() {

	            //if (this.app)
	            //if (this.app.input)
	            //if (this.app.input.update)
	            //{

	            //Return true or false, update audio
	            //this.mute = this.audio.update();

	            this.update.size_difference(this);

	            //Update Input
	            this.app.input.update();
	            //}

	            setTimeout(this.client_data, 1000 / 60);
	        },

	        loop: function loop(a) {
	            var _this2 = this;

	            var loop = function loop() {

	                //Return true or false if resized, update size
	                _this2.resized = _this2.update.size(_this2);

	                //Update scale
	                _this2.scale = _this2.update.scale(_this2);

	                //Draw frame
	                _this2.visuals.flip(_this2.scale);

	                //Update frames per second
	                _this2.fps = _this2.update.step.tick(_this2.second, _this2.mainLoop, _this2.app);

	                //Update client
	                requestAnimationFrame(_this2.client_f);
	            };

	            SpiceJS.statistics.monitor(loop).then(function () {

	                SpiceJS.statistics.log("fps", SpiceJS.controller.list().fps, 'state');
	                SpiceJS.statistics.log("scale", SpiceJS.controller.list().getScale(), 'state');
	            });
	        },

	        /**
	        * Client Update Loop
	        * @class
	        * @protected
	        */

	        update: {

	            //Cache Vars
	            last: new Math.Vector(),
	            difference: new Math.Vector(),
	            scaler: { s: 1, x: 1, y: 1 },
	            scaling: true,
	            scalediff: 0,
	            lastscale: 1,
	            fullscale: false,
	            resized: false,
	            set: 0,
	            frames: 0,

	            /**
	            * Calculate differences between the canvas size last frame and this frame
	            * @method
	            * @private
	            */

	            size_difference: function size_difference(app) {

	                var x = this.last.x;

	                var y = this.last.y;

	                var w = app.width;

	                var h = app.height;

	                var vector_size0 = new Math.Vector(x, y);

	                var vector_size1 = new Math.Vector(w, h);

	                if (x == w) if (y == h) {

	                    this.difference = new Math.Vector(0, 0);

	                    return;
	                }

	                this.difference = app.Math.Vector.Difference(vector_size0, vector_size1);

	                return;
	            },

	            /**
	            * Resize the canvas
	            * @method
	            * @private
	            */

	            size: function size(app) {

	                //If distance hasnt changed
	                if (this.difference.x + this.difference.y == 0) return false;

	                //Reassign width and height
	                app.app.canvas.canvas.width = this.last.x = app.width;
	                app.app.canvas.canvas.height = this.last.y = app.height;
	                app.app.canvas.buffer.width = this.last.x = app.width;
	                app.app.canvas.buffer.height = this.last.y = app.height;

	                return true;
	            },

	            //Calculate client scale
	            scale: function scale(app) {

	                //Cache window
	                var w = window;
	                var ww = w.innerWidth;
	                var wh = w.innerHeight;

	                //Catch window
	                if (this == w) return log('Warning: Scale: [this === window]');else if (this.pause > 0.5) return log('Warning: Paused', 30);else if (this.set == 1) return log('Warning: Scale: Duplicate Run', 30);

	                //Check if overriding
	                if (app.app.options.canvas.override) {

	                    //Set width to override
	                    if (app.app.options.canvas.size.width !== app.width) app.width = app.app.options.canvas.size.width;
	                    if (document.body.clientHeight > window.innerHeight) {}
	                    // scrollbar

	                    //Set height to override
	                    if (app.app.options.canvas.size.height !== app.height) app.height = app.app.options.canvas.size.height;

	                    //Check if centered
	                    if (app.app.options.canvas.position.center) {

	                        //if not aligned
	                        if (app.app.options.canvas.size.left !== app.width / 2) {

	                            //align
	                            app.app.canvas.getCanvas().style.left = -app.width / 2 + w.innerWidth / 2 + "px";

	                            //if buffer align
	                            if (app.app.options.canvas.buffer) app.app.canvas.getBuffer().style.left = -app.width / 2 + w.innerWidth / 2 + "px";
	                        }
	                    }
	                } else {

	                    //Set height to window height
	                    if (wh !== app.height) app.height = wh;

	                    //Set width to window width
	                    if (ww !== app.width) app.width = ww;
	                }

	                //Calculate sccalers
	                this.set = 1;
	                this.scaler.x = app.height / app.setHeight;
	                this.scaler.y = app.width / app.setWidth;

	                //Toggle wither or not to scale
	                this.fullscale ? this.scaler.s = this.scaler.x : this.scaler.s = this.scaler.x < this.scaler.y ? this.scaler.x : this.scaler.y;

	                //if scaler.s is not a number
	                if (isNaN(this.scaler.s)) {
	                    this.set = 0;return;
	                }

	                //Scale difference
	                this.scalediff = this.scaler.s - this.lastscale;

	                //If scaled different, scroll to the top
	                //(this.scalediff)?app.app.input.scroll.to(true):app.app.input.scroll.to(false);

	                this.set = 0;

	                //Save scale
	                this.lastscale = this.scaler.s;

	                return this.scaler.s;
	            },

	            //Client state object
	            state: {

	                //State vars
	                name: "",
	                current: {},
	                initalized: false,

	                //State prototype
	                prototype: {

	                    //State init prototype
	                    init: function init() {
	                        if (typeof this.current.init !== 'undefined') this.current.init();
	                    },

	                    //State update proto
	                    update: function update() {
	                        if (typeof this.current.update !== 'undefined') this.current.update();
	                    },

	                    //State draw proto
	                    draw: function draw() {
	                        if (typeof this.current.draw !== 'undefined') this.current.draw();
	                    },

	                    //State set
	                    set: function set(state, start) {

	                        //log(this.input);
	                        //Set app input delay
	                        //this.app.input.delay = 1;

	                        //If state and not initialized, initalize via Object .create
	                        if ((this.name = state.name) && (this.initalized = !0)) {
	                            if (!state.started) this.current = Object.create(state, this.app.app.client.room);

	                            //if start, run init, current = started
	                            if (start) this.current.init(), this.current.started = true;
	                        }
	                    }

	                },

	                //State constructor
	                constructor: function constructor(app) {

	                    //State Return app and init
	                    return {

	                        //State Inherit app
	                        app: { value: app },

	                        //State Init function
	                        init: { value: function value(state) {

	                                //State Set state
	                                this.set(state, true);

	                                //State Initilizaed
	                                this.initalized = true;
	                            }
	                        }
	                    };
	                }
	            },
	            step: {
	                first: function first(step, app) {
	                    this.app = app;
	                    if (typeof step == 'undefined' || !step.Step(app)) return;
	                    this.fps = 1 * (this.clean() / step.delta * 1E3);
	                    this.delta = step.targetfps / this.fps;
	                    this.delta = Math.ceil(this.delta * 100000) / 100000;
	                    if (this.delta > 2.5) this.delta = 2.5;
	                    if (this.delta !== this.delta + 1) this.app.client.delta = this.delta_speed = this.delta;else this.app.client.delta = this.delta_speed = 1;
	                    //log(this.delta);
	                    /* Increment Time to increase performance */
	                    if (this.fps == 0) return;
	                    this.increment = -step.targetfps + step.targetfps * (step.targetfps / this.fps);
	                    this.adding += this.increment;
	                    if (this.adding > step.targetfps) this.adding -= this.adding / step.targetfps * step.targetfps, this.addings += 1;
	                    return;
	                },
	                focus: function focus() {
	                    if (this.app.ext.freezeonfocus) return document.hasFocus();
	                    return true;
	                },
	                second: function second(step, app) {
	                    if (typeof step == 'undefined' || !step.Step(app)) return false;
	                    this.frames++;
	                    for (var s = this.addings; s >= 0; --s) {
	                        if (app.client.update.state.initalized) this.focus() ? app.client.update.state.current.update() : null;
	                    }this.addings = 0;
	                },
	                tick: function tick(a, b, app) {
	                    this.first(a, app);
	                    this.second(b, app); /* Game Loop, Increment Frames */
	                    return this.fps;
	                },
	                clean: function clean() {
	                    var f = this.frames;
	                    this.frames = 0; /* Reset Frames, Return Frames ( Pass F*/
	                    return f;
	                },
	                delta_speed: 1,
	                increment: 0,
	                addings: 0,
	                adding: 0,
	                delta: 1,
	                frames: 0,
	                fps: 1
	            }
	        },
	        Math: {
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
	                Total: function Total() {
	                    return this.total = this.kilobyteCount(App);
	                },
	                Update: function Update() {
	                    if (App.client.update.state.initalized) return this.update = this.byteCount(App.client.update.state.current.update);else return this.update = this.byteCount(Object.create(null, App.client.room));
	                },
	                isFunction: function isFunction(functionToCheck) {
	                    var getType = {};
	                    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
	                },
	                byteCount: function byteCount(object) {
	                    if (this.isFunction(object)) return this.byteCountF(object.toString().length * 2);
	                    this.objectList = [];
	                    this.stack = [object];
	                    this.bytes = 0;
	                    while (this.stack.length) {
	                        this.value = this.stack.pop();
	                        if (typeof this.value === 'trueean') {
	                            this.bytes += 4;
	                        } else if (typeof this.value === 'string') {
	                            this.bytes += this.value.length * 2;
	                        } else if (typeof this.value === 'number') {
	                            this.bytes += 8;
	                        } else if (_typeof(this.value) === 'object' && this.objectList.indexOf(this.value) === -1) {
	                            this.objectList.push(this.value);
	                            for (i in this.value) {
	                                if (this.value[i] == object || this.value[i] == window) {
	                                    if (this.selfCount > 0 || this.value[i] == window) {
	                                        this.selfCount = 0;
	                                        break;
	                                    }
	                                    this.selfCount++;
	                                }
	                                this.stack.push(this.value[i]);
	                            }
	                        }
	                    }
	                    return this.bytes;
	                },
	                byteCountF: function byteCountF(s) {
	                    return encodeURI(s).split(/%..|./).length - 1;
	                },
	                kilobyteCount: function kilobyteCount(object) {
	                    return Math.round(this.byteCount(object) * this.KB * 100) / 100;
	                },
	                kb: 0.0078125,
	                KB: 0.0009765625,
	                objectList: [{}],
	                selfCount: 0,
	                update: 0,
	                stack: [{}],
	                value: {},
	                bytes: 0,
	                total: 0
	            }
	        },
	        Particles: {
	            p: 0,
	            draw: function draw(l) {

	                for (this.p = _Rain.size - 1; this.p; --this.p) {
	                    if (_RainParticles[this.p].y > App.client.visuals.fixY(0)) if (_RainParticles[this.p].y < App.client.visuals.fixY(App.client.setHeight)) _RainParticles[this.p].draw(App.client.visuals, l);
	                }
	            },
	            update: function update() {
	                for (var _R = 0; _R < _Rain.size; ++_R) {
	                    _RainParticles[_R].update();
	                }
	            }
	        },
	        room: {
	            prototype: {
	                init: null,
	                app: null,
	                visuals: null,
	                graphics: null,
	                started: false,
	                Started: {
	                    value: function value() {
	                        return function () {
	                            var a = this.Started;
	                            //this.app.set_scale();
	                            this.Started = true;
	                            return a;
	                        };
	                    }
	                }
	            },

	            constructor: function constructor(app) {
	                return {
	                    app: { value: app },
	                    visuals: { value: app.client.visuals },
	                    graphics: { value: app.client.graphics },
	                    init: { writable: false, configurable: false, enumerable: false, value: function value() {
	                            return {
	                                app: { value: app },
	                                visuals: { value: app.client.visuals },
	                                graphics: { value: app.client.graphics }
	                            };
	                        }
	                    }
	                };
	            }
	        },
	        pace: {
	            prototype: {
	                timer: 0,
	                rate: 0,
	                offset: 0,
	                delta: 1,
	                Time: function Time(app) {
	                    this.timer = new Date().getTime();
	                    return this.timer - this.offset;
	                },
	                Step: function Step(app) {
	                    this.delta = this.Time(app);
	                    var step = this.rate * this.delta;
	                    if (step > 1.0) this.offset += Math.floor(step) / this.rate;
	                    return step - 1.0 > 0.0 ? true : false;
	                },
	                GetStepsPerSecond: function GetStepsPerSecond() {
	                    return 1000.0 / this.delta;
	                }
	            },
	            constructor: function constructor() {
	                return {
	                    init: { value: function value(rate, fps) {
	                            //Debug.log('Pace: Init');
	                            this.targetfps = fps;
	                            this.timer = new Date().getTime();
	                            this.rate = rate / 1000.0;
	                            this.offset = this.timer - 1000.0 / rate;
	                            this.delta = 0.0;
	                            return true;
	                        } }
	                };
	            }
	        },
	        audio: {
	            prototype: {
	                mute: false,
	                quality: 0,
	                current: 0,
	                audio: new Audio(),
	                sound: new Array(new Audio()),
	                length: new Array(),
	                soundbyte: function soundbyte(filename, callback) {
	                    this.fname = new Audio(filename);
	                    this.play = function play() {
	                        this.fname.pause();
	                        this.fname.play();
	                    };
	                },
	                MultiChannelSound: function MultiChannelSound(filename, channelQ, callback) {
	                    if (App.ext.useragent.ie) return;
	                    this.fname = filename;
	                    this.channel = new Array();
	                    for (var i = 0; i != channelQ; ++i) {
	                        this.channel[i] = new Audio(filename);
	                    }
	                    this.currentChannel = 0;
	                    this.play = function play() {
	                        try {
	                            this.channel[this.currentChannel].currentTime = 0;
	                            this.channel[this.currentChannel].play();
	                            ++this.currentChannel;
	                            if (this.currentChannel == this.channel.length) {
	                                this.currentChannel = 0;
	                            }
	                        } catch (e) {}
	                    };
	                    this.stop = function stop() {
	                        this.channel[this.currentChannel].pause();
	                        ++this.currentChannel;
	                        if (this.currentChannel == this.channel.length) {
	                            this.currentChannel = 0;
	                        }
	                    };
	                },
	                toggle: function toggle() {
	                    this.mute = true;
	                },
	                set: function set(index, reset) {
	                    if (!this.mute) {
	                        this.sound[this.current].pause();
	                        this.sound[this.current] = index;
	                        try {
	                            this.sound[this.current].currentTime = 0;
	                        } catch (e) {}

	                        return;

	                        /*
	                                                for(var i=0;i>0;--i)
	                                                if (App.ext.useragent.mobile){
	                                                    index.play();
	                                                    return;
	                                                }
	                                                else
	                                                {
	                                                index.play();
	                                                    return;
	                                                }
	                        
	                                                    this.sound[this.current].pause();
	                                                    this.current = index;
	                                                    try{
	                                                    index.currentTime = 0;
	                                                    }catch(e){}
	                                                    index.play();
	                                                    */
	                    }
	                },
	                update: function update() {
	                    if (_typeof(this.sound) === 'object') if (this.sound[this.current].paused) this.sound[this.current].play();
	                    return;

	                    /*
	                     this.mute;
	                    if (this.sound[this.current]==="undefined")
	                        return;
	                    if (this.sound[this.current].currentTime >= this.length)
	                    {
	                        if (++this.current == soundtrackQ)
	                        {
	                            this.current = 0;
	                        }
	                         this.sound[this.current].currentTime = 0;
	                        this.sound[this.current].play();
	                    }
	                      */
	                }
	            },
	            constructor: function constructor() {
	                return {
	                    init: { value: function value() {
	                            return true;
	                        } }
	                };
	            }
	        },
	        _Animation: function _Animation(aniArray, aniSpeed, ani, origAni) {
	            ///Animation States
	            ///  -2 = set to idle.
	            /// -1 = animate backwards and stop.
	            ///  0 = set to first frame.
	            ///  1 = animate forwards and stop.
	            ///  2 = animate forwards and return to 0 and animate again.

	            this.aniImage = new Array();
	            this.aniImage = aniArray;
	            this.nextAni = new Array();
	            this.nextAni = origAni;

	            if (this.aniImage[0]) this.aniMax = this.aniImage.length - 1;else this.aniMax = 0;
	            this.aniCurrent = 0;
	            this.aniSpeed = aniSpeed * App.delta_speed;
	            this.animate = ani;
	            this.aniChanged = 0;
	            this.aniPrev = aniArray;
	            this.aniDir = 1;
	            this.recreate = function recreate(aniArray, aniSpeed, ani) {
	                this.aniCurrent = 0;
	                this.aniImage = aniArray;
	                this.aniSpeed = aniSpeed;
	                this.animate = ani;
	                this.aniDir = 1;
	            };
	            this.update = function update() {
	                if (!this.aniImage == this.aniPrev) this.aniPrev = this.aniImage, this.changed();
	                if (this.animate == -2) {
	                    //this.aniImage = snowboarding_loading.player_idle;
	                    if (this.aniCurrent >= this.aniMax) this.aniDir = -1;
	                    if (this.aniCurrent <= 0) this.aniDir = 1;
	                    if (this.aniCurrent <= this.aniMax) this.aniCurrent += this.aniSpeed * this.aniDir;
	                }
	                if (this.animate == -1) {
	                    if (this.aniCurrent > 0) this.aniCurrent -= this.aniSpeed;
	                }
	                if (this.animate == 0) {
	                    this.aniCurrent = 0;
	                }
	                if (this.animate == 1) {
	                    if (this.aniCurrent < this.aniMax) this.aniCurrent += this.aniSpeed;
	                    if (this.aniCurrent > this.aniMax) this.aniCurrent = this.aniMax;
	                }
	                if (this.animate == 2) {
	                    this.aniCurrent += this.aniSpeed;
	                    if (this.aniCurrent >= this.aniMax) this.aniCurrent = 0;
	                }
	            };
	            this.changed = function changed() {
	                this.recreate(this.nextAni, this.aniSpeed, 0);
	            };
	            this.reverse = function reverse() {
	                if (this.animate == 1) this.animate = -1;else this.animate = 1;
	            };
	            this.get_img = function get_img() {
	                if (this.aniImage[Math.round(this.aniCurrent)]) return this.aniImage[Math.round(this.aniCurrent)];else return this.aniImage;
	            };
	        },
	        graphics: {
	            prototype: {
	                path: "",
	                SpriteWebItems: new Array(0),
	                SpriteLoadNumber: 0,
	                SpriteLoadErrors: 0,
	                SpriteLoadTime: 0,
	                Sources: {},
	                Sprite: {},
	                sprite: {},
	                img: {},

	                load: function load(name, file) {

	                    if (typeof file === "undefined") file = this.app.options.get("paths").images + "" + name;

	                    this.Sources.append(this.SpriteAppend(name, file));

	                    return this.Sources.getByName(name);
	                },

	                SpriteCreate: function SpriteCreate(file, src, name) {

	                    this.SpriteLoadNumber++;

	                    this.SpriteLoadTime += 10 * this.app.delta_speed * this.SpriteLoadNumber;

	                    return this.sprite = Object.create(this.Sprite, { file: { value: file }, src: { value: src }, name: { value: name } });
	                },

	                SpriteAppend: function SpriteAppend(name, file) {

	                    return (this.img = this.SpriteCreate(file, this.path + file + ".png", name)).get();
	                },

	                SpriteUnload: function SpriteUnload(name, file) {

	                    delete this.Sources.getByName(name);
	                    //return this.SpriteLoad(name,file);
	                },

	                webLoad: function webLoad(name, address) {

	                    this.SpriteWebItems[name] = new Image();

	                    this.SpriteWebItems[name].src = address;
	                    return this.SpriteWebItems[name];
	                },
	                graphicsLibrary: function graphicsLibrary() {
	                    this.Sprite = Object.create(null);
	                    this.Sources = Object.create(null);
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
	                    return true;
	                },
	                Base: {
	                    get: function get() {
	                        var img = new Image();
	                        img.src = this.src;
	                        img.file = this.file;
	                        img.name = this.name;
	                        img.number = 1 + window.apps[0].client.graphics.SpriteLoadErrors++;
	                        img.onload = function () {
	                            window.apps[0].client.graphics.SpriteLoadErrors--;
	                        };
	                        return img;
	                    },
	                    unload: function unload() {
	                        this.Sources.unload(this.name);
	                    }
	                },
	                getErrors: function getErrors() {
	                    return this.SpriteLoadErrors;
	                },
	                getImage: function getImage(name) {
	                    return this.Sources.getByName(name);
	                }
	            },
	            constructor: function constructor(app) {
	                return {
	                    app: { value: app },
	                    init: { value: function value() {
	                            this.graphicsLibrary();
	                            return true;
	                        } }
	                };
	            }
	        },

	        //
	        //Visuals prototype
	        //
	        //      Global Scope
	        //          App.client.visuals
	        //
	        //      Local Scope
	        //          this.visuals
	        //

	        //Visuals Object
	        visuals: _visuals3.default
	    }
	};

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _interfaces = __webpack_require__(195);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Visuals = function (_SJSClass) {
	    _inherits(_Visuals, _SJSClass);

	    function _Visuals(app) {
	        _classCallCheck(this, _Visuals);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(_Visuals).call(this, app));
	    }

	    return _Visuals;
	}(_interfaces._SJSClass);

	var _Pipe = function () {
	    function _Pipe() {
	        _classCallCheck(this, _Pipe);
	    }

	    _createClass(_Pipe, [{
	        key: "executeNext",
	        value: function executeNext() {}
	    }]);

	    return _Pipe;
	}();

	var visuals = visuals || {};
	visuals = {

	    //Visuals Prototype
	    prototype: {

	        //draw flags

	        free: false,
	        alpha: 0,
	        seamless: false,
	        tight: true,
	        disable: false,

	        //draw vars
	        bleed: 1,
	        point: 14,
	        zindex: 1,
	        buffer_target: 0,
	        scale: 0,
	        fillStyle: null,
	        fontT: "",
	        fontL: "",

	        //Objects
	        stat2: Object.create(null),
	        grd: Object.create(null),

	        canvas: Object.create(null),
	        buffer: Object.create(null),
	        blitter: Object.create(null),
	        canvas_context: Object.create(null),
	        buffer_context: Object.create(null),
	        blitter_context: Object.create(null),
	        blitter_image: new Image(),

	        within: false,

	        //Draw Vars Buffer

	        stat: {
	            x: 0,
	            y: 0,
	            w: 0,
	            h: 0,
	            s: 0,
	            a: 0,
	            c: 0,
	            colour: "",
	            oldcol: "",
	            init: function init(col, colold) {
	                this.x = 0;
	                this.y = 0;
	                this.w = 0;
	                this.h = 0;
	                this.s = 0;
	                this.a = 0;
	                this.c = 0;
	                this.colour = col || 0;
	                this.oldcol = colold || 0;
	            }
	        },

	        window: window,

	        getData: function getData() {

	            var width = this.buffer.width;
	            var height = this.buffer.height;

	            var imageData = this.buffer_context.getImageData(0, 0, width, height);

	            var w2 = width / 2;
	            var d = imageData.data;
	            for (y = 0; y <= height; y++) {
	                inpos = y * width * 4;
	                outpos = inpos + w2 * 4;
	                for (x = 0; x < w2; x++) {
	                    var r = d[inpos++];
	                    var g = d[inpos++];
	                    var b = d[inpos++];
	                    var a = d[inpos++];
	                    b = Math.min(255, b);
	                    if (r == 0 && g == 0 && b == 0) {
	                        inpos++;
	                        inpos++;
	                        inpos++;
	                        imageData.data[inpos++] = 0;
	                    } else {
	                        inpos++;
	                        inpos++;
	                        inpos++;
	                        inpos++;
	                    }
	                }
	            }
	            this.buffer_context.putImageData(imageData, 0, 0);
	        },

	        flip: function flip() {

	            this.fillStyle = this.app.canvas.canvas.style.background == "transparent";

	            //this.buffer_context.save();
	            //Set scale to client scale
	            this.scale = this.app.client.scale;

	            if (this.fillStyle === false) this.screen_fill(this.app.client.visuals.bleed, this.app.options.canvas.background);

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
	            //this.buffer_context.restore();
	        },

	        //Get fixed X/Y positions

	        getX: function getX() {

	            return (this.app.input.x - (-this.app.getWidth() / 2 + this.window.innerWidth / 2) + this.app.options.canvas.position.left / 3).toFixed(2);
	        },

	        getY: function getY() {

	            return (this.app.input.y - this.app.options.canvas.position.top).toFixed(2);
	        },

	        //Fix positions relative to canvas

	        fixX: function fixX(x) {

	            return (x * this.scale + this.app.client.width / 2 - this.app.client.setWidth / 2 * this.scale).toFixed(2);
	        },

	        fixY: function fixY(y) {

	            return (y * this.scale + this.app.client.height / 2 - this.app.client.setHeight / 2 * this.scale).toFixed(2);
	        },

	        fixW: function fixW(w) {

	            return (w * this.scale).toFixed(2);
	        },

	        fixH: function fixH(h) {

	            return (h * this.scale).toFixed(2);
	        },

	        //Check variables
	        chkc: {},
	        chk: function chk(x, y, w, h, s, a, c, colour, font) {
	            this.chkc = this.colour();
	            this.opacity(a);
	            this.colour(colour);
	            if (!this.free) return {
	                x: this.fixX(x),
	                y: this.fixY(y),
	                w: this.fixW(w) * s,
	                h: this.fixH(h) * s,
	                s: s,
	                a: this.app.client.Math.Clamp(a, 0, 1) || 0,
	                c: c || false,
	                colour: colour || this.colour(),
	                oldcol: this.chkc,
	                font: font || this.font,
	                init: this.stat.init
	            };else return {
	                x: x, y: y,
	                w: w * s || 0,
	                h: h * s || 0,
	                s: s,
	                a: this.app.client.Math.Clamp(a, 0, 1) || 1,
	                c: c || false,
	                colour: colour || this.colour(),
	                oldcol: this.chkc,
	                font: font,
	                init: this.stat.init
	            };
	        },

	        debug: function debug() {

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
	            console.log("FPSLow: "+App.fps);
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
	            //this.text_ext("_State: " 	+ this.app.client.Math.Data.kilobyteCount(this.app.client.update.state) 	+"kb",25,280,"#FFFFFF",1,1,0);
	            //this.text_ext("ext: " 		+ this.app.client.Math.Data.kilobyteCount(App.ext) 					+"kb",25,295,"#FFFFFF",1,1,0);
	            //this.text_ext("Total: "		+ this.app.client.Math.Data.Total()								+"kb",25,325,"#FFFFFF",1,1,0);
	              */
	        },

	        blit: function blit(img, offx, offy) {

	            var _img = this.blitter_image = new Image();
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

	            SJS.statistics.monitor(function () {

	                _img.src = canvas.toDataURL("image/png");
	                window.T = _img;
	            }, 10).then(function () {}, 10);

	            return _img;
	        },

	        clean: function clean() {
	            //    this.cleanAlpha?this.opacity(1):null;
	            this.colour(this.stat.oldcol);
	            this.stat.init(this.colour(), this.stat.oldcol);
	        },

	        colour: function colour(colour1, colour2) {

	            if (colour1) {
	                return colour1 && (this.buffer_context.fillStyle = colour1); //colour2&&(this.buffer_context.strokeStyle=colour2);
	            } else return this.buffer_context.fillStyle;
	        },
	        opacity: function opacity(_opacity) {
	            return _opacity != this.alpha && (this.alpha = _opacity, this.canvas_context.globalAlpha = this.buffer_context.globalAlpha = _opacity != this.lastopacity ? _opacity : 1);
	        },
	        font: function font(_font) {
	            return this.canvas_context.font = this.buffer_context.font = this.fontT = _font;
	            //return font!=this.fontT&&(this.canvas_context.font=this.buffer_context.font=this.fontT=font?font:this.fontL);
	            //if (font)
	            //	this.buffer_context.font = font;
	            //return this.buffer_context.font;
	        },
	        shadow: function shadow(col, blur, x, y) {
	            this.buffer_context.shadowColor = col;
	            this.buffer_context.shadowBlur = blur;
	            this.buffer_context.shadowOffsetX = x;
	            this.buffer_context.shadowOffsetY = y;
	        },
	        shadow_clear: function shadow_clear() {
	            this.buffer_context.shadowBlur = 0;
	        },

	        //
	        //Visuals Text Functions
	        //

	        text_free: function text_free(string, x, y, colour) {
	            this.colour(colour);
	            this.font(Math.round(this.point * this.scale) + "px " + "sans-serif");
	            this.buffer_context.fillText(string, x - this.text_width(string) / 2 - this.point, y - this.point / 2);
	            this.clean();
	        },
	        text_ext: function text_ext(string, x, y, colour, s, a, c, style) {
	            this.stat = this.chk(x, y, this.text_width(string), s, s, a, c, colour);
	            var f = this.font();
	            this.stat.h = this.stat.s * this.scale;
	            this.font(this.stat.h + "em " + style);
	            this.stat.h = this.point * this.stat.h;

	            this.buffer_context.fillText(string, this.stat.x - Math.floor(this.stat.w / 2) - this.stat.s, this.stat.y - Math.floor(this.stat.h / 2));

	            //(this.stat.c)?this.buffer_context.fillText(string,this.stat.x-Math.floor(this.stat.w/2)-this.stat.s,this.stat.y-Math.floor(this.stat.h/2)):this.buffer_context.fillText(string,this.stat.x,this.stat.y+Math.floor(this.stat.h/2));
	            this.font(f);
	            this.clean();
	        },
	        text_button: function text_button(string, x, y, colour, s, a, c, style) {
	            this.stat = this.chk(x, y, this.text_width(string), s, s, a, c, colour);
	            var f = this.font();
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
	        },
	        text_button_bg: function text_button_bg(string, x, y, colour, s, a, c, loc, style) {
	            this.stat = this.chk(x, y, this.text_width(string), s, s, a, c, colour);

	            this.shadow("#AAAAAA", 1, 1, 1);

	            var f = this.font();
	            this.stat.h = this.stat.s * this.scale;
	            this.font(this.stat.h + "em " + style);
	            this.stat.h = this.point * this.stat.h;
	            this.within = this.touch_within_stat(this.stat);
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
	        },
	        text: function text(string, x, y, colour) {
	            this.text_ext(string, x, y, colour, 1, 1, 0, "Calibri");
	        },
	        text_shadow: function text_shadow(blur, x, y, colour) {
	            this.buffer_context.shadowColor = colour;
	            this.buffer_context.shadowBlur = blur;
	            this.buffer_context.shadowOffsetX = x;
	            this.buffer_context.shadowOffsetY = y;
	        },

	        //
	        //Visuals Rectangle Functions
	        //

	        rect: function rect(x, y, w, h, colour) {
	            this.rect_ext(x, y, w, h, 1, 1, 0, colour);
	        },
	        rect_centered: function rect_centered(x, y, w, h, colour) {
	            this.rect_ext(x, y, w, h, 1, 1, 1, colour);
	        },
	        rect_ext: function rect_ext(x, y, w, h, s, a, c, colour) {
	            this.stat = this.chk(x, y, w, h, s, a, c, colour);
	            this.buffer_context.beginPath();
	            this.stat.c ? this.buffer_context.rect(this.stat.x - Math.floor(this.stat.w / 2), this.stat.y - Math.floor(this.stat.h / 2), this.stat.w, this.stat.h) : this.buffer_context.rect(this.stat.x, this.stat.y, this.stat.w, this.stat.h);
	            this.buffer_context.fill();

	            this.clean();
	        },
	        rect_stroke: function rect_stroke(x, y, w, h, s, a, c, colour, l) {
	            this.stat = this.chk(x, y, w, h, s, a, c, colour);
	            this.buffer_context.beginPath();
	            this.stat.c ? this.buffer_context.rect(this.stat.x - Math.floor(this.stat.w / 2), this.stat.y - Math.floor(this.stat.h / 2), this.stat.w, this.stat.h) : this.buffer_context.rect(this.stat.x, this.stat.y, this.stat.w, this.stat.h);
	            this.buffer_context.fillStyle = 'transparent';
	            this.buffer_context.fill();
	            this.buffer_context.lineWidth = l || 1;
	            this.buffer_context.strokeStyle = colour;
	            this.buffer_context.stroke();

	            this.clean();
	        },
	        setting: true,

	        rect_button: function rect_button(x, y, w, h, s, a, colour, loc, c) {

	            this.stat = this.chk(x, y, w, h, s, a, c, colour);
	            var t = false;

	            //if (this.touch_within(this.stat.x,this.stat.y,this.stat.w,this.stat.h,this.stat.c))
	            if (this.touch_within_stat(this.stat)) {
	                t = true;
	                //    this.app.ext.cursor.set(this.app.ext.cursor.pointer,true);

	                //   if (this.app.input.delay<1)

	                if (this.app.input.released) loc(), this.app.input.delay = 1;
	            }

	            //if (this.setting)
	            this.rect_ext(x, y, w, h, s, a, c, colour);
	            //else
	            //    var ww = 1;
	            //    if (t)
	            //    this.rect_ext(x-ww,y-ww,w+ww*2,h+ww*2,s,a,c,colour);
	        },
	        rect_rotate: function rect_rotate(x, y, w, h, colour, s, a, angle) {
	            this.stat = this.chk(x, y, w, h, s, a, 1, colour);
	            this.buffer_context.translate(this.stat.x, this.stat.y);
	            this.buffer_context.rotate(angle * 0.0174532925);
	            this.stat.c ? this.buffer_context.rect(0 - Math.floor(this.stat.w / 2), 0 - Math.floor(this.stat.h / 2), this.stat.w, this.stat.h) : this.buffer_context.rect(0, 0, this.stat.w, this.stat.h);
	            this.buffer_context.rotate(-angle * 0.0174532925);
	            this.buffer_context.translate(-this.stat.x, -this.stat.y);
	            this.clean();
	        },
	        rect_gradient: function rect_gradient(x, y, w, h, s, a, c, colour, colour2, angle) {
	            this.stat = this.chk(x, y, w, h, s, a, c, colour);
	            this.buffer_context.translate(this.stat.x, this.stat.y);
	            this.buffer_context.rotate(angle * 0.0174532925);

	            if (!this.stat.w) return;
	            if (!this.stat.h) return;
	            if (!this.stat.x) return;
	            if (!this.stat.y) return;
	            this.stat.c ? this.grd = this.buffer_context.createLinearGradient(Math.floor(this.stat.w / 2), 0, Math.floor(this.stat.w / 2), Math.floor(this.stat.h / 2)) : this.grd = this.buffer_context.createLinearGradient(0, 0, this.stat.w, this.stat.h);
	            this.buffer_context.beginPath();
	            this.stat.c ? this.buffer_context.rect(0 - Math.floor(this.stat.w / 2), 0 - Math.floor(this.stat.h / 2), this.stat.w, this.stat.h) : this.buffer_context.rect(0, 0, this.stat.w, this.stat.h);
	            this.grd.addColorStop(0, colour);
	            this.grd.addColorStop(1, colour2);
	            this.buffer_context.fillStyle = this.grd;
	            this.buffer_context.fill();
	            this.buffer_context.rotate(-angle * 0.0174532925);
	            this.buffer_context.translate(-this.stat.x, -this.stat.y);
	            this.clean();
	        },
	        rect_free: function rect_free(x, y, w, h, s, a, c, colour) {
	            this.stat = this.chk(x, y, w, h, s, a, c, colour);
	            this.buffer_context.beginPath();
	            c ? this.buffer_context.rect(x - w / 2, y - h / 2, w, h) : this.buffer_context.rect(x, y, w, h);
	            this.buffer_context.fill();
	            this.clean();
	        },
	        screen_fill: function screen_fill(a, colour) {
	            this.stat = this.chk(0, 0, 1, 1, 1, a, 1, colour);
	            this.buffer_context.beginPath();
	            this.buffer_context.rect(0, 0, window.innerWidth, window.innerHeight);
	            this.buffer_context.fill();
	            this.clean();
	        },
	        image_count: 0,
	        image_element: function image_element(image) {
	            this.elm = document.createElement("image");
	            this.elm.draw = function (image, x, y, s, loc, xscale, yscale, a, c) {
	                var s = this.style;
	                this.stat = App.client.visuals.chk(x, y, image.width, image.height, s, a, c);
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
	        },
	        image_replacecol: function image_replacecol(image, x, y, s, a, c, colour) {

	            this.stat = this.chk(x, y, image.width, image.height, s, a, c);

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
	        },
	        image_ext: function image_ext(image, x, y, s, a, c) {
	            this.stat = this.chk(x, y, image.width, image.height, s, a, c);
	            this.stat.c ? this.buffer_context.drawImage(image, this.stat.x - Math.floor(this.stat.w / 2), this.stat.y - Math.floor(this.stat.h / 2), this.stat.w, this.stat.h) : this.buffer_context.drawImage(image, this.stat.x, this.stat.y, this.stat.w, this.stat.h);
	        },
	        image_ext2: function image_ext2(image, x, y, sx, sy, a, c) {
	            this.stat = this.chk(x, y, image.width, image.height, sx, a, c);
	            this.stat2 = this.chk(x, y, image.width, image.height, sy, a, c);
	            this.stat.c ? this.buffer_context.drawImage(image, this.stat.x - Math.floor(this.stat.w / 2), this.stat.y - Math.floor(this.stat.h / 2), this.stat.w * this.stat.s, this.stat.h * this.stat2.s) : this.buffer_context.drawImage(image, this.stat.x, this.stat.y, this.stat.w * this.stat.s, this.stat.h * this.stat2.s);
	        },
	        image_centered: function image_centered(image, x, y, a) {
	            this.image_ext(image, x, y, 1, a, true);
	        },
	        image: function image(_image, x, y) {
	            this.image_ext(_image, x, y, 1, 1, false);
	        },
	        image_scaled: function image_scaled(image, x, y, s) {
	            this.image_ext(image, x, y, s, 1, false);
	        },
	        image_stat: function image_stat(image, x, y, s, a, c, xx, yy, w, h) {
	            this.stat = this.chk(x, y, w, h, s, a, c);
	            return this.stat;
	        },

	        image_flip: function image_flip(x, y) {

	            this.stat = this.chk(x, y, 1, 1, 1, 1, 1);
	            this.buffer_context.save();
	            this.buffer_context.scale(-1, 1);
	            this.buffer_context.translate(-this.stat.x * 2, 0);
	        },

	        image_restore: function image_restore(x, y) {

	            //this.buffer_context.restore();
	        },

	        putData: function putData(myImageData, dx, dy) {

	            this.buffer_context.putImageData(myImageData, dx, dy);
	            //this.clean();
	        },

	        image_part: function image_part(image, x, y, s, a, c, xx, yy, w, h) {
	            this.stat = this.chk(x, y, w, h, s, a, c);

	            //var scale = (1.1*this.stat.s)*this.app.getScale();
	            this.stat.c ? this.buffer_context.drawImage(image, xx, yy, w, h, this.stat.x - Math.floor(this.stat.w / 2), this.stat.y - Math.floor(this.stat.h / 2), this.stat.w, this.stat.h) : this.buffer_context.drawImage(image, xx, yy, w, h, this.stat.x, this.stat.y, this.stat.w, this.stat.h);
	        },

	        image_part_rotate: function image_part_rotate(image, x, y, s, a, c, xx, yy, w, h, angle) {
	            this.stat = this.chk(x, y, w, h, s, a, c);

	            //var scale = (1.1*this.stat.s)*this.app.getScale();
	            this.buffer_context.save();
	            this.buffer_context.translate(this.stat.x, this.stat.y);
	            this.buffer_context.rotate(angle * 0.0174532925);
	            this.stat.c ? this.buffer_context.drawImage(image, xx, yy, w, h, 0 - Math.floor(this.stat.w / 2), 0 - Math.floor(this.stat.h / 2), this.stat.w, this.stat.h) : this.buffer_context.drawImage(image, xx, yy, w, h, 0, 0, this.stat.w, this.stat.h);

	            this.buffer_context.restore();
	            //    this.buffer_context.rotate(-angle*0.0174532925);
	            //    this.buffer_context.translate(-this.stat.x,-this.stat.y);
	        },
	        image_rotate: function image_rotate(image, x, y, s, angle, a, xoff, yoff) {
	            if (typeof image == 'undefined') image = new Image(), console.log('Image fialed to render');
	            this.stat = this.chk(x, y, image.width, image.height, s, a, true);
	            this.buffer_context.translate(this.stat.x, this.stat.y);
	            this.buffer_context.rotate(angle * 0.0174532925);
	            this.stat.c ? this.buffer_context.drawImage(image, 0 - Math.floor(this.stat.w / 2), 0 - Math.floor(this.stat.h / 2), this.stat.w, this.stat.h) : this.buffer_context.drawImage(image, 0, 0, this.stat.w, this.stat.h);
	            this.buffer_context.rotate(-angle * 0.0174532925);
	            this.buffer_context.translate(-this.stat.x, -this.stat.y);
	        },

	        texture: function texture(_texture, xx, yy, w, h, yoff, xoff, xonly, xo, yo, s) {

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

	                    if (!xonly) this.image_ext(img, xo + x, yo + y, s, 1, true);
	                    if (xonly) this.image_scaled(img, xo + x, yo + y, s, 1, true);
	                }
	            } else for (bx; bx < span_width; bx += img_width_scaled) {
	                var x = bx - width * s / 2 - 1 * bx / img_width;

	                for (by = by_first; by < span_height; by += img_height_scaled) {
	                    var y = -by + height * s + 1 * by / bh;

	                    if (!xonly) this.image_ext(img, xo + x, yo + y, s, 1, true);
	                    if (xonly) this.image_scaled(img, xo + x, yo + y, s, 1, true);
	                }
	            }
	        },

	        setBleed: function setBleed(threshold) {
	            this.bleed = threshold;
	        },

	        rotate_at: function rotate_at(angle, x, y) {
	            if ((typeof x === "undefined" ? "undefined" : _typeof(x)) === "object") var x = x.x,
	                y = y.y;else var x = x,
	                y = y;

	            this.stat = this.chk(x, y, 1, 1, 1, 1, 1);
	            this.buffer_context.translate(-this.stat.x, -this.stat.y);

	            this.buffer_context.rotate(angle * 0.0174532925);
	        },

	        rotate: function rotate(angle) {

	            return this.buffer_context.rotate(angle * 0.0174532925);
	        },

	        translate: function translate(x, y) {

	            if ((typeof x === "undefined" ? "undefined" : _typeof(x)) === "object") var x = x.x,
	                y = y.y;else var x = x,
	                y = y;

	            this.stat = this.chk(x, y, 1, 1, 1, 1, 1);
	            return this.buffer_context.translate(-this.stat.x, -this.stat.y);
	        },

	        button: function button(img, x, y, f) {
	            this.image_button(img, x, y, 1, f, true, 1, 1, 1, 1);
	        },
	        button_scaled: function button_scaled(img, x, y, s, f) {
	            this.image_button(img, x, y, s, f, true, 1, 1, 1, 1);
	        },
	        buttonH: function buttonH(img, x, y, s, f) {
	            this.image_buttonH(img, x, y, s, f, true, 1, 1, 1, 1);
	        },

	        /* IMAGE BUTTON LEGACY TAKE OUT */

	        image_button: function image_button(image, x, y, s, loc, highlight, xscale, yscale, a, centered) {

	            this.stat = this.chk(x, y, image.width * s * xscale, image.height * s * yscale, s, a, centered);

	            var s = this.stat2 = this.chk(x, y, image.width * s * xscale * 0.9, image.height * s * yscale * 0.9, s, a, centered);

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
	        },
	        image_buttonH: function image_buttonH(image, x, y, s, loc, highlight, xscale, yscale, a, centered) {
	            this.stat = this.chk(x, y, image.width * s * xscale, image.height * s * yscale, s, a, centered);
	            var s = this.stat2 = this.chk(x, y, image.width * s * xscale * 0.9, image.height * s * yscale * 0.9, s, a, centered);
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
	        },

	        /*  ^ IMAGE BUTTON LEGACY TAKE OUT ^ */

	        touch_within: function touch_within(x, y, w, h, c) {
	            var doc = document.documentElement;
	            this.left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
	            this.top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
	            y = y - this.top;
	            x = x - this.left;
	            return c ? App.input.x > x - w / 2 && App.input.x < x + w / 2 && App.input.y > y - h / 2 && App.input.y < y + h / 2 ? true : false : App.input.x > x && App.input.x < x + w && App.input.y > y && App.input.y < y + h ? true : false;
	        },
	        touch_within2: function touch_within2(x, y, w, h, c) {
	            var stat = this.stat = this.chk(x, y, w, h, 1, 1, c);
	            var doc = document.documentElement;
	            this.left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
	            this.top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
	            stat.y = stat.y - this.top;
	            stat.x = stat.x - this.left;
	            return stat.c ? this.app.input.x > stat.x - stat.w / 2 && this.app.input.x < stat.x + stat.w / 2 && this.app.input.y > stat.y - stat.h / 2 && this.app.input.y < stat.y + stat.h / 2 ? true : false : this.app.input.x > stat.x && this.app.input.x < stat.x + stat.w && this.app.input.y > stat.y && this.app.input.y < stat.y + stat.h ? true : false;
	        },

	        touch_within_stat: function touch_within_stat(stat, r) {

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
	        },

	        line2: function line2(vec, vec2, col, a, free) {

	            var x = vec.x;
	            var y = vec.y;
	            var x2 = vec2.x;
	            var y2 = vec2.y;
	            this.stat = this.chk(x, y, x2, y2, 1, a, true);
	            this.stat2 = this.chk(x2, y2, x2, y2, 1, a, true);
	            this.buffer_context.beginPath();
	            this.buffer_context.moveTo(this.stat.x, this.stat.y);
	            this.buffer_context.lineTo(this.stat2.x, this.stat2.y);
	            this.buffer_context.strokeStyle = col;
	            this.buffer_context.stroke();
	        },

	        line: function line(x, y, x2, y2, col, a) {
	            this.stat = this.chk(x, y, x2, y2, 1, a, true);
	            this.stat2 = this.chk(x2, y2, x2, y2, 1, a, true);
	            this.buffer_context.beginPath();
	            this.buffer_context.moveTo(this.stat.x, this.stat.y);
	            this.buffer_context.lineTo(this.stat2.x, this.stat2.y);
	            this.buffer_context.strokeStyle = col;
	            this.buffer_context.stroke();
	            this.clean();
	        },
	        lines: function lines(x, y, x2, y2, col, a, s) {
	            this.stat = this.chk(x, y, x2, y2, 1, a, true);
	            this.stat2 = this.chk(x2, y2, x2, y2, 1, a, true);
	            this.buffer_context.moveTo(this.stat.x * s, this.stat.y * s);
	            this.opacity(a);
	            this.buffer_context.strokeStyle = col;
	            this.buffer_context.lineTo(this.stat2.x * s, this.stat2.y * s);
	        },
	        lineend: function lineend() {
	            this.buffer_context.stroke();
	        },
	        linestart: function linestart() {
	            this.buffer_context.beginPath();
	        },
	        triangle: function triangle(x0, y0, x1, y1, x2, y2, col, col2, width) {
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
	        },
	        quadraticCurve: function quadraticCurve(x, y, x2, y2, a, col) {
	            var t = this.buffer_context.strokeStyle;
	            var tF = this.buffer_context.fillStyle;
	            this.stat = this.chk(x, y, 1, 1, 1, a, true, col);
	            this.stat2 = this.chk(x2, y2, 1, 1, 1, a, true, col);
	            this.buffer_context.beginPath();
	            this.buffer_context.quadraticCurveTo(this.stat.x, this.stat.y, this.stat2.x, this.stat2.y);
	            this.buffer_context.strokeStyle = col;
	            this.buffer_context.stroke();
	            this.buffer_context.fill();
	            this.stat = this.chk(x, y, 1, 1, 1, a, true, t);
	            this.stat2 = this.chk(x2, y2, 1, 1, 1, a, true, t);

	            this.buffer_context.strokeStyle = t;
	            this.buffer_context.fillStyle = tF;
	        },

	        /* visuals.paths */

	        paths: {

	            //list of paths
	            _initalized: false,
	            _count: false

	            //Reinitalize the objects functions,
	            //Required for use

	            , init: function init(visuals) {

	                this.list = [];

	                this.visuals = visuals;

	                this._initalized = true;

	                this._count = 0;

	                return this;
	            },

	            list: [],

	            render: function render(path) {

	                var list = path.list;
	                var length = path.list.length;
	                var i = 0;

	                for (i = 0; i <= length - 1; i++) {
	                    this.visuals.rect(list[i].x, list[i].y, 1, 1, "#FFFFFF");
	                }return true;
	            },

	            addPath: function addPath(id, tempX, tempY) {
	                var path = { name: id, x: tempX, y: tempY };
	                path.addPoint = this.addPoint;
	                path.list = [];
	                path.p = this;
	                //console.log(path);

	                var t = this.list.push(path);
	                t.p = this;
	                return this.list[this._count++];
	            },

	            addPoint: function addPoint(tempX, tempY) {

	                this.list.push({ x: this.x + tempX, y: this.y + tempY });
	            }

	        }

	        /*
	             circle now allows passing vectors
	             Test: argument based functions
	                Method1:
	                    if based on first argument
	                        Method2 (unused):
	                            inherit _circle function and pass accordingly
	         */

	        , circle: function circle(XVec, YR, RC, CA, A) {

	            var x = undefined,
	                y = undefined,
	                r = undefined,
	                col = undefined,
	                a = undefined;

	            x = XVec;
	            y = YR;
	            r = RC;
	            col = CA;
	            a = A;

	            if ((typeof x === "undefined" ? "undefined" : _typeof(x)) === 'object') {

	                x = XVec.x;
	                y = XVec.y;
	                r = YR;
	                col = RC;
	                a = CA;
	            }

	            this._circle(x, y, r, col, a);
	        },

	        _circle: function _circle(x, y, r, col, a) {
	            this.stat = this.chk(x, y, 1, 1, r, a, true, col);
	            this.buffer_context.beginPath();
	            this.buffer_context.arc(this.stat.x, this.stat.y, this.stat.s * this.scale, 0, 2 * Math.PI, false);
	            this.buffer_context.fillStyle = this.stat.colour;
	            this.buffer_context.fill();
	            this.clean();
	        },
	        circle_free: function circle_free(x, y, r, col, a) {
	            this.stat = this.chk(x, y, r, r, r, a, 1, col);
	            this.buffer_context.beginPath();
	            this.buffer_context.arc(x, y, r * this.scale, 0, 2 * Math.PI, false);
	            this.buffer_context.fillStyle = this.stat.col;
	            this.buffer_context.fill();
	            this.clean();
	        },
	        text_width: function text_width(string) {
	            return this.buffer_context.measureText(string).width; // Not WOrking
	        },

	        trytolockOrientation: function trytolockOrientation() {
	            /*
	            if (!this.autoLockOrientation || this.orientations === 0)
	            return;
	            */
	            var orientation = "portrait";
	            var works = false;

	            //if (this.orientations === 2)
	            orientation = "landscape";

	            // Note IE/Edge can throw exceptions here if in an iframe (WrongDocumentError), which also affects the debugger.
	            try {

	                if (screen["orientation"] && screen["orientation"]["lock"]) works = screen["orientation"]["lock"](orientation);else if (screen["lockOrientation"]) works = screen["lockOrientation"](orientation);else if (screen["webkitLockOrientation"]) works = screen["webkitLockOrientation"](orientation);else if (screen["mozLockOrientation"]) works = screen["mozLockOrientation"](orientation);else if (screen["msLockOrientation"]) works = screen["msLockOrientation"](orientation);
	            } catch (e) {
	                if (console && console.warn) console.warn("Failed to lock orientation: ", e);
	            }

	            return works;
	        },
	        newscale: function newscale(w, h, force) {
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

	    },
	    constructor: function constructor(app) {
	        return {
	            app: { value: app },
	            init: { value: function value() {

	                    var canvas = this.app.canvas;

	                    window.utils.requestAnimationFrame(name, 0, 0);

	                    this.scale = this.app.scale;

	                    this.canvas = canvas.canvas;

	                    this.buffer = canvas.buffer;

	                    this.blitter = canvas.blitter;

	                    var attribs = { alpha: true };

	                    this.blitter_context = this.blitter.getContext("2d", attribs);

	                    attribs = { alpha: false };

	                    this.canvas_context = this.canvas.getContext("2d", attribs);

	                    this.canvas_context.globalCompositeOperation = this.app.options.global.globalCompositeOperation;

	                    this.blitter_context.globalCompositeOperation = this.app.options.global.globalCompositeOperation;

	                    this.buffer_context.globalCompositeOperation = this.app.options.global.globalCompositeOperation;

	                    console.log(this.canvas_context);

	                    if (this.app.options.canvas.buffer) this.buffer_context = this.buffer.getContext("2d", attribs);else this.buffer_context = this.canvas.getContext("2d", attribs);

	                    this.linearSampling = true;
	                    if (this.buffer_context["imageSmoothingEnabled"] != this.linearSampling) if (this.buffer_context["mozImageSmoothingEnabled"] != this.linearSampling) if (this.buffer_context["msImageSmoothingEnabled"] != this.linearSampling) if (this.buffer_context["webkitImageSmoothingEnabled"] != this.linearSampling) this.buffer_context["webkitImageSmoothingEnabled"] = this.linearSampling;

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
	                }

	            }
	        };
	    }
	};

	exports.default = visuals;

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _interfaces = __webpack_require__(195);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	//import {_State} from './state.js';

	/**
	* _private
	* @protected
	*/

	var _private = new WeakMap();

	/**
	* Vector
	* @module
	* @interface
	* @protected
	*/

	var _Core = function (_Legacy2) {
		_inherits(_Core, _Legacy2);

		_createClass(_Core, [{
			key: 'main',

			/**  @type {Number} */

			get: function get() {

				return this.get('main');
			}

			/**  @type {Number} */

			/**
	  * private variables
	  * @type {Object}
	  * @protected
	  */

			,
			set: function set(newmain) {

				var state = this.get('main');
				var newstate = newmain;
				state.name = newstate.name;
				state.init = newstate.init;
				state.update = newstate.update;
				state.draw = newstate.draw;

				return state;
			}

			/**  @type {Number} */

		}, {
			key: 'version',
			get: function get() {

				return this.get('version');
			}

			/**  @type {Number} */

		}, {
			key: 'fps',
			get: function get() {

				return this.client.update.step.fps.toFixed(2);
			}

			/**  @type {Constructor} */

		}]);

		function _Core() {
			_classCallCheck(this, _Core);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(_Core).call(this));

			_private.set(_this, _this.constructor.properties);

			return _this;
		}

		return _Core;
	}(_interfaces._Legacy);

	_Core.properties = {

		main: {},
		version: '0.8.1'

	};
	exports.default = _Core;

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _interfaces = __webpack_require__(195);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	//import SGL from './sgl.js';

	/**
	* _private
	* @protected
	*/

	var _private = new WeakMap();

	/**
	* Initalizes canvas elements or attaches to existing elements at options.target.canvas. Handles creation of header and style elements.
	* @protected
	* @module
	*
	*/

	var Canvas = function (_Canvas_Core2) {
	    _inherits(Canvas, _Canvas_Core2);

	    /**
	    * This is the constructor for the canvas module.
	    * @param {number} x - position.x
	    * @param {number} y - position.y
	    */

	    function Canvas(app) {
	        var _ret;

	        _classCallCheck(this, Canvas);

	        //Assign private properties

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Canvas).call(this, app));

	        _private.set(_this, _this.constructor.properties);

	        //SGL.start();

	        //Cache canvases
	        var temp_canvas = document.getElementById(_this.app.options.target.canvas);
	        var temp_buffer = document.getElementById(_this.app.options.target.buffer);
	        var temp_blitter = document.getElementById(_this.app.options.target.blitter);
	        var options = _this.app.options;

	        //Check canvas variables
	        if (temp_canvas) {

	            //    if (temp_buffer)
	            //        temp_buffer;

	        } else {

	                temp_canvas = _this.construct_canvas(_this.app.options.canvas.name);

	                if (_this.app.options.canvas.buffer) temp_buffer = _this.construct_canvas(_this.app.options.canvas.buffername);
	            }
	        temp_canvas.mozOpaque = options.flags.opaque;
	        //Assign canvas elements

	        var _this$style = _this.style(temp_canvas, temp_buffer, _this.construct_canvas('blitter'), _this.app.options.canvas.style);

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
	    * @protected
	    */

	    /**
	    * Set documents private variables
	    * @type {Object}
	    * @protected
	    */

	    _createClass(Canvas, [{
	        key: 'style',
	        value: function style(temp_canvas, temp_buffer, temp_blitter) {

	            temp_canvas.style.position = this.app.options.canvas.position.position;

	            temp_canvas.style.zIndex = this.app.options.canvas.position.z;

	            if (this.app.options.canvas.buffer) {
	                temp_buffer.style.position = this.app.options.canvas.position.position;

	                temp_buffer.style.zIndex = this.app.options.canvas.position.z - 1;
	            }

	            if (this.app.options.canvas.override) {

	                temp_canvas.style.left = this.app.options.canvas.position.left + "px";

	                temp_canvas.style.top = this.app.options.canvas.position.top + "px";

	                if (this.app.options.canvas.buffer) {
	                    temp_buffer.style.left = this.app.options.canvas.position.left + "px";

	                    temp_buffer.style.top = this.app.options.canvas.position.top + "px";
	                }
	            }

	            return [temp_canvas, temp_buffer, temp_blitter];
	        }

	        /**
	        * Construct a canvas element.
	        * @type {Id}
	        * @param {Element} a - Creates a canvas element and attaches it to the body.
	        * @protected
	        */

	    }, {
	        key: 'construct_canvas',
	        value: function construct_canvas(id) {

	            var c = this.doc.createElement("canvas");

	            var c_id = id + "_" + this.app.id;

	            c.id = c_id;

	            this.doc.body.appendChild(c);

	            return this.doc.getElementById(c_id);
	        }
	    }]);

	    return Canvas;
	}(_interfaces._Canvas_Core);

	Canvas.properties = {
	    name: 'canvas',
	    canvas: [],
	    docs: document,
	    head: document.getElementsByTagName('head')[0],
	    _rendering_style: document.createElement('style')
	};
	exports.default = Canvas;
	;

/***/ },
/* 209 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
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
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _cookies = __webpack_require__(211);

	var _cookies2 = _interopRequireDefault(_cookies);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {

	    constructor: function constructor(app) {

	        return {

	            app: { writable: false, configurable: false, enumerable: false, value: app },

	            init: { writable: false, configurable: false, enumerable: false, value: function value(name) {

	                    //Set app/document title

	                    this.app.setTitle(document.title + "." + this.app.main.name);

	                    //Construct App.ext components

	                    this.app.Construct(this.useragent).init();

	                    this.app.Construct(this.metatag).init();

	                    //this.app.Construct(this.cookies).init();

	                    this.cookies = new _cookies2.default(this.app);

	                    this.app.Construct(this.cursor).init();

	                    this.app.Construct(this.connect).init();
	                }
	            }
	        };
	    },
	    prototype: {

	        //UserAgent Information
	        //	Assists in detecting the platform that you are running on.

	        useragent: {

	            //	Use useragent lightly as some would assume that sniffing the useragent is unreliable. I digress.

	            prototype: {

	                //Cached Navigator.userAgent
	                agent: navigator.userAgent,

	                //
	                mouse: false,
	                touch: false,
	                keyboard: false,
	                windows: false,
	                chrome: false,
	                safari: false,
	                iemobile: false,
	                nokia: false,
	                ie: false,
	                ios: false,
	                blackberry: false,
	                playbook: false,
	                bb10: false,
	                mobile: false,

	                //Match user agent for IE
	                IE: function IE() {

	                    return this.agent.match(/Trident/i) ? true : false;
	                },

	                //Match user agent for iOS
	                iOS: function iOS() {

	                    return this.agent.match(/iPhone|iPad|iPod/i) ? true : false;
	                },

	                //Match user agent for Nokia
	                Nokia: function Nokia() {

	                    return this.agent.match(/Nokia/i) ? true : false;
	                },

	                //Determine mobile or windows based on useragent
	                Mobile: function Mobile() {

	                    return this.mobile = this.IEMobile() || this.BlackBerry() || this.iOS() || this.Android() || this.Nokia();
	                },

	                //Match user agent for Chrome
	                Chrome: function Chrome() {

	                    return this.chrome = this.agent.match(/Chrome/i) ? true : false;
	                },

	                //Match user agent for Safari
	                Safari: function Safari() {

	                    return (this.agent.match(/Safari/i) || this.agent.match(/AppleWebKit/i)) && !this.agent.match(/Chrome/i) ? true : false;
	                },

	                Desktop: function Desktop() {

	                    return this.windows = this.IEMobile() || this.IE() || !this.Mobile();
	                },

	                //Match user agent for Android
	                Android: function Android() {
	                    return this.agent.match(/Android/i) ? true : false;
	                },

	                //Match user agent for IEMobile
	                IEMobile: function IEMobile() {

	                    var trident = this.agent.match(/IEMobile/i);
	                    var windowsphone = this.agent.match(/Windows Phone/i);
	                    var touch = this.agent.match(/touch/i);

	                    return trident || windowsphone || touch ? true : false;
	                },

	                //Match user agent for Blackberry
	                BlackBerry: function BlackBerry() {
	                    this.playbook = this.agent.match(/PlayBook/i) || false;
	                    this.bb10 = this.agent.match(/BB10/i) || false;
	                    return this.agent.match(/BlackBerry/i) || this.playbook || this.bb10 ? true : false;
	                }

	            },

	            constructor: function constructor(app) {

	                //Return constructed useragent object
	                return {
	                    app: { writable: false, configurable: false, enumerable: false, value: app },

	                    init: { writable: false, configurable: false, enumerable: false, value: function value() {

	                            //Query Browser
	                            this.chrome = this.Chrome();
	                            this.safari = this.Safari();
	                            this.iemobile = this.IEMobile();
	                            this.nokia = this.Nokia();
	                            this.ie = this.trident = this.IE();

	                            this.blackberry = this.BlackBerry();
	                            this.ios = this.iOS();
	                            this.android = this.Android();

	                            this.touch = this.Mobile();
	                            this.mouse = !this.Mobile() || this.BlackBerry();

	                            this.keyboard = this.Desktop() || this.BlackBerry();

	                            this.Mobile();
	                            this.Desktop();

	                            this.app.ext.useragent = this;
	                            //return this;
	                        }
	                    }
	                };
	            }

	        },

	        //Cookie Storage
	        //	Polyfill provided by ScottHamper
	        //	https://github.com/ScottHamper/Cookies#api-reference

	        cookies: _cookies2.default,

	        //MetaTag Handler
	        //	Assists in dynamically applying metatags.
	        //	Automatically applies Microsoft, Apple and common metatags.

	        metatag: {

	            constructor: function constructor(app) {

	                //Return constructed metatag object.
	                return {
	                    app: { writable: false, configurable: false, enumerable: false, value: app },

	                    init: { value: function value() {

	                            //execute polyfill
	                            this.metaAppend(this.metaTag("msapplication-tap-highlight", this.ms_taphighlight));
	                            this.metaAppend(this.metaTag("apple-mobile-web-app-capable", this.apple_webapp));
	                            this.metaAppend(this.metaTag("apple-mobile-web-app-status-bar-style", this.apple_statusbar));
	                            this.metaAppend(this.metaTag("cursor-event-mode", "native"));
	                            this.metaAppend(this.metaTag("touch-event-mode", "native"));
	                            this.metaAppend(this.metaTag("HandheldFriendly", "True"));

	                            if (this.devicewidth) this.metaAppend(this.metaTag("viewport", "width=device-width, user-scalable=no"));
	                            if (this.devicedpi) this.metaAppend(this.metaTag("viewport", "target-densitydpi=" + this.app.client.setWidth + ",-webkit-min-device-pixel-ratio=1,min-resolution:=" + this.app.client.setWidth + ",-moz-device-pixel-ratio=1"));

	                            this.metaAppend(this.metaTag("viewport", "user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1"));

	                            //Cache Control
	                            this.metaAppend(this.metaTag("cache-control", "max-age=0"));
	                            this.metaAppend(this.metaTag("cache-control", "no-cache"));
	                            this.metaAppend(this.metaTag("expires", "Tue, 01 Jan 1980 1:00:00 GMT"));
	                            this.metaAppend(this.metaTag("pragma", "no-cache"));

	                            this.app.ext.metatag = this;

	                            //Return this
	                            return this;
	                        }
	                    }
	                };
	            },

	            prototype: {

	                //Default injected tags
	                ms_taphighlight: "no",
	                apple_webapp: "yes",
	                apple_statusbar: "black",
	                devicedpi: true,
	                devicewidth: true,

	                //Favicon. Automatically fills a standard metaAppend while needing only one argument, sets favicon
	                metaFavicon: function metaFavicon(img) {

	                    this.metaAppend(this.metaLink(img, "shortcut icon", "image/png"));
	                },

	                //Construct a standard metaLink element
	                metaLink: function metaLink(href, rel, type) {

	                    //Create link element
	                    this.link = document.createElement('link');

	                    //Assign element values
	                    this.link.href = href;
	                    this.link.rel = rel;
	                    this.link.type = type;

	                    //Return link
	                    return this.link;
	                },

	                //Construct a standard metaTag element
	                metaTag: function metaTag(name, content) {

	                    //Create link element
	                    this.meta = document.createElement('meta');

	                    //Assign element values
	                    this.meta.content = content;
	                    this.meta.name = name;

	                    //Return tag
	                    return this.meta;
	                },

	                //Append a meta object to the <head>
	                metaAppend: function metaAppend(meta) {

	                    //Append child to header
	                    if (this.head.appendChild(meta)) {
	                        //Count number of headers
	                        this.count++;

	                        //Return success
	                        return true;
	                    } else return false;
	                },

	                //Cached data
	                head: document.getElementsByTagName('head')[0],
	                link: null,
	                meta: null,
	                count: 0

	            }

	        },

	        //Cursor Handler
	        //	Logs last cursor and allows to easily change the cursor on the fly

	        cursor: {

	            constructor: function constructor(app) {

	                //Return constructed metatag object.
	                return {
	                    app: { writable: false, configurable: false, enumerable: false, value: app },
	                    init: { value: function value() {

	                            this.set(this.wait);

	                            this.app.ext.cursor = this;
	                        }
	                    }
	                };
	            },

	            prototype: {

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
	                wresize: "w-resize",

	                //Properties
	                current: "auto",
	                last: "auto",
	                changed: false,
	                count: 0,
	                lock: 0,
	                delay: 4,

	                set: function set(cursor, lock) {

	                    if (this.last == cursor || this.lock) return;

	                    this.last = this.current;

	                    this.current = cursor;

	                    /*
	                    if (this.app.options.target.buffer)
	                        this.app.canvas.buffer.style.cursor=this.current;
	                        this.app.canvas.canvas.style.cursor=this.current;
	                     document.body.style.cursor=this.current;
	                    */
	                    this.changed = true;
	                    this.count++;
	                }

	            }

	        },

	        //Connection Controller
	        //	Assists in making ajax calls and allows you to test your connection.
	        //	hostReachable by jpsilvashy - https://gist.github.com/jpsilvashy/5725579

	        connect: {

	            constructor: function constructor(app) {

	                //Return constructed metatag object.
	                return {
	                    app: { writable: false, configurable: false, enumerable: false, value: app },
	                    init: { value: function value() {

	                            //Execute a test on the connection
	                            this.test();

	                            this.app.ext.connect = this;
	                        }
	                    }
	                };
	            },

	            prototype: {

	                //Properties
	                offline: false,
	                connectionAttempts: 0,
	                error: null,
	                window: window,

	                //An aJax request for a file of your choosing. runs callback once finished (response,arg0,arg1)
	                load: function load(address, callback, arg0, arg1) {

	                    var xmlhttp;
	                    if (window.XMLHttpRequest) {
	                        // code for IE7+, Firefox, Chrome, Opera, Safari
	                        xmlhttp = new XMLHttpRequest();
	                    } else {
	                        // code for IE6, IE5
	                        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	                    }
	                    xmlhttp.onreadystatechange = function () {
	                        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	                            callback(xmlhttp.response, arg0, arg1);
	                        }
	                    };
	                    xmlhttp.open("GET", address, true);
	                    xmlhttp.send();
	                },

	                //An aJax request to check wither or not you are connected to the internet
	                // jpsilvashy / hostReachable.js - https://gist.github.com/jpsilvashy/5725579
	                hostReachable: function hostReachable() {
	                    return;
	                    /*
	                                        //if local host return offline
	                                        if ((this.window.location.hostname).toString()=="127.0.0.1")
	                                            return false;
	                    
	                                        // Handle IE and more capable browsers
	                                        var xhr = new ( this.window.ActiveXObject || XMLHttpRequest )( "Microsoft.XMLHTTP" );
	                                        var status;
	                    
	                    
	                                        // Open new request as a HEAD to the root hostname with a random param to bust the cache
	                                        xhr.open( "HEAD", "//" + this.window.location.hostname + "/?rand=" + Math.floor((1 + Math.random()) * 0x10000), false );
	                    
	                                        // Issue request and handle response
	                                        try {
	                                            xhr.send();
	                                            return ( xhr.status >= 200 && xhr.status < 300 || xhr.status === 304 );
	                    
	                                        } catch (error) {
	                    
	                                            if (this.connectionAttempts<1)
	                                                this.connectionAttempts++,this.hostReachable();
	                                            this.error = error;
	                                            return false;
	                                        }
	                    */
	                },

	                test: function test(app) {

	                    return this.offline = this.hostReachable();
	                }

	            }

	        }

	    }
	};

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	* <a href="https://github.com/ScottHamper/Cookies">Cookies Polyfill by ScottHamper</a>, modified to ES6
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
	    var AMD = "function" === 'function' && __webpack_require__(213);
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

	exports.default = Cookies;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(212)(module)))

/***/ },
/* 212 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 213 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _interfaces = __webpack_require__(195);

	var _test2 = __webpack_require__(215);

	var _test3 = _interopRequireDefault(_test2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	window.test = _test3.default;

	var Loader = function (_SJSClass) {
		_inherits(Loader, _SJSClass);

		function Loader(app) {
			_classCallCheck(this, Loader);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Loader).call(this, app));

			_this.ImageCache = [];

			_this.ImageBuffer = [];

			_this.ImageBufferTime = 3;
			_this.asyncLoadCacheIndex = 0;

			window.Loader = _this;

			return _this;
		}

		_createClass(Loader, [{
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

				var elementPos = this.ImageCache.map(function (img) {

					return img.string;
				}).indexOf(string);

				var objectFound = this.ImageCache[elementPos];

				return objectFound;
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
									return this.graphics.load(name);

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
										//console.log('eh');
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
			key: 'asyncLoadImageData',
			value: function () {
				var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(string, string2, x, y) {
					var _this5 = this;

					var _index, _image;

					return regeneratorRuntime.wrap(function _callee2$(_context2) {
						while (1) {
							switch (_context2.prev = _context2.next) {
								case 0:
									_index = this.asyncLoadCacheIndex;
									_context2.next = 3;
									return this.asyncLoadImage(string, "_blit").then(function (img) {

										//let _cacheIndex =  this.ImageCache.push(img);

										//console.log( this.ImageCache[_cacheIndex-1]=img)

										var buffindex = _this5.ImageBuffer.push(string + "_blit");

										_this5[string2] = img;
										_this5[string2].addEventListener('load', function () {

											_this5[string2] = _this5.visuals.blit(_this5[string2], x, y);

											_this5[string2].string = string2;

											_this5.ImageCache.push(_this5[string2]);

											_this5.ImageBuffer.splice(_this5.ImageBuffer.indexOf(string + "_blit2"), 1);
										});
									});

								case 3:
									_image = _context2.sent;
									return _context2.abrupt('return', _image);

								case 5:
								case 'end':
									return _context2.stop();
							}
						}
					}, _callee2, this);
				}));

				return function asyncLoadImageData(_x3, _x4, _x5, _x6) {
					return ref.apply(this, arguments);
				};
			}()
		}]);

		return Loader;
	}(_interfaces._SJSClass);

	exports.default = Loader;

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _interfaces = __webpack_require__(195);

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

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(test).call(this, app));

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
	}(_interfaces._SJSClass);

	exports.default = test;

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _interfaces = __webpack_require__(195);

	var _vector = __webpack_require__(198);

	var _vector2 = _interopRequireDefault(_vector);

	var _loader = __webpack_require__(214);

	var _loader2 = _interopRequireDefault(_loader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var xOff = 0;

	var SJSParticleController = function (_Loader) {
	    _inherits(SJSParticleController, _Loader);

	    function SJSParticleController(app) {
	        _classCallCheck(this, SJSParticleController);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SJSParticleController).call(this, app));

	        _this.SJSParticleList = [];

	        _this.particleLimit = 1500;

	        _this.flakes = new Image();

	        _this.flakes0 = new Image();

	        for (var i = 0; i < 16; i++) {
	            _this['flakes' + i] = new Image();
	        }for (var i = 0; i < 16; i++) {
	            _this.asyncLoadImageData('../flakes', 'flakes' + i, i * 32, 0 * 32);
	        }return _this;
	    }

	    _createClass(SJSParticleController, [{
	        key: 'clear',
	        value: function clear() {

	            this.SJSParticleList = [];
	        }
	    }, {
	        key: 'appendParticle',
	        value: function appendParticle() {

	            var length = this.SJSParticleList.length;

	            if (length > this.particleLimit) return;

	            var width = this.app.getWidth();

	            var height = this.app.getHeight();

	            var scale = this.app.getScale();

	            var Start = new _vector2.default(xOff - width + Math.random() * width * 3, Math.random() * -25);

	            var End = new _vector2.default(Math.random() * width, 0);

	            End = new _vector2.default(Start.x + Math.random() * width - Math.random() * width, 0);

	            var newParticle = new SJSParticle(this.app, Start, { x: End.x, y: 2 * height / scale }, { x: Math.random() * 0.1 + 0.5, y: Math.random() * 0.15 + 0.1 }, "#AAFFFF", false);

	            this.SJSParticleList.push(newParticle);

	            return;
	        }
	    }, {
	        key: 'update',
	        value: function update() {

	            var length = this.SJSParticleList.length;

	            this.appendParticle();

	            if (length == 0) return;

	            var i = length - 1;

	            for (i; i; --i) {

	                var particle = this.SJSParticleList[i];

	                particle.update();
	            }

	            return;
	        }
	    }, {
	        key: 'draw',
	        value: function draw() {

	            var error = this.getBufferLength();

	            //    console.log(error)
	            if (error > 0) {
	                this.visuals.rect(0, 0, 10, 10, '#FF0000');
	                return;
	            }

	            var length = this.SJSParticleList.length;

	            if (length == 0) return;

	            var i = length - 1;

	            for (i; i; --i) {

	                var particle = this.SJSParticleList[i];

	                particle.draw();
	            }
	        }
	    }]);

	    return SJSParticleController;
	}(_loader2.default);

	exports.default = SJSParticleController;

	var SJSParticle = function (_SJSClass) {
	    _inherits(SJSParticle, _SJSClass);

	    function SJSParticle(app, pos, target, vel, marker, usePhysics) {
	        _classCallCheck(this, SJSParticle);

	        var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(SJSParticle).call(this, app));

	        var loader = window.Loader; // this.app.getCurrent().particleController;

	        //this.img = loader.getImageReference('../flakes');
	        _this2.img = loader.getImageReference('flakes' + Math.round(Math.random() * 15));

	        _this2.t = Math.round(1 + Math.random() * 5);

	        _this2.gravity = 0.5;

	        _this2.alpha = 0.75 + Math.random() * 0.25;

	        _this2.easing = Math.random() * 0.2;

	        _this2.fade = Math.random() * 0.1;

	        _this2.gridX = marker % 120;

	        _this2.gridY = Math.floor(marker / 120) * 12;

	        _this2.color = marker;

	        _this2.scale = 3 * Math.random() * 3 * Application.getScale();

	        _this2.start = 30 + Math.random() * 180;

	        _this2.offx = 32 * Math.round(Math.random() * (512 / 32));

	        _this2.offy = 32 * Math.round(Math.random() * (512 / 32));

	        _this2.del = false;

	        _this2.pos = {
	            x: pos.x || 0,
	            y: pos.y || 0
	        };

	        _this2.vel = {
	            x: vel.x || 0,
	            y: vel.y || 0
	        };

	        _this2.lastPos = {
	            x: _this2.pos.x,
	            y: _this2.pos.y
	        };

	        _this2.target = {
	            y: target.y || 0,
	            x: target.x || 0
	        };

	        _this2.pos = new _vector2.default(pos.x, pos.y);
	        _this2.vel = new _vector2.default(vel.x, vel.y);
	        _this2.lastPos = new _vector2.default(_this2.pos.x, _this2.pos.y);
	        _this2.target = new _vector2.default(target.x, target.y);

	        _this2.usePhysics = usePhysics || false;

	        if (!_this2.usePhysics) {

	            _this2.dir = Math.random() * 1;

	            if (_this2.dir > 0.5) _this2.dir = 1;else _this2.dir = -1;
	        } else {

	            if (pos.x - target.x >= 0) _this2.dir = 1;else _this2.dir = -1;
	        }

	        return _this2;
	    }

	    _createClass(SJSParticle, [{
	        key: 'update',
	        value: function update() {

	            var width = this.app.getWidth();

	            var height = this.app.getHeight();

	            var scale = this.app.getScale();

	            // Check to Delete

	            if (this.del) {

	                var start = new _vector2.default(-xOff - width + Math.random() * width * 3, Math.random() * -100);
	                var target = { x: Math.random() * width, y: 2 * height / scale };
	                var velocity = { x: Math.random() * 0.5, y: Math.random() * 0.1 };

	                this.constructor(this.app, start, target, velocity, "#AAFFFF", false);

	                return;
	            }

	            // Move Object

	            var distance = this.target.y - this.pos.y;

	            var val = this.target.x / 200;

	            this.pos.y += this.vel.y * (distance / 100) * (0.3 + this.easing * this.gravity) + Math.min(10, val) * (1 - this.usePhysics);

	            if (!this.usePhysics) if (Math.random() > 0.99) this.vel.y += 0.2;

	            val = this.pos.x / 200;

	            if (this.dir == 0) this.pos.x += this.dir * this.vel.x * Math.sin(this.pos.y / this.start) + (val - val / 2) * (1 - this.usePhysics);else this.pos.x += this.dir * this.vel.x * this.pos.y / this.start + (val - val / 2) * (1 - this.usePhysics);

	            var xdir = this.app.input.horizontal.keyboard || this.app.input.horizontal.touch;
	            var ydir = this.app.input.vertical.keyboard || this.app.input.vertical.touch;
	            this.pos.x += xdir;

	            // Check if out of bounds

	            if (this.pos.y > 600) {
	                this.alpha -= 0.01;

	                if (this.alpha < 0.01) this.del = true;
	            }

	            if (xOff + this.pos.x < -width || xOff + this.lastPos.x + 25 < -width || xOff + this.pos.x > width * 2 || xOff + this.lastPos.x + 25 > width * 2 || this.pos.y > height) this.del = true;
	        }
	    }, {
	        key: 'draw',
	        value: function draw() {

	            //if ((this.app.getFps()<25)||(this.app.getScale()<0.8))
	            //this.visuals.rect_ext(this.pos.x,this.pos.y,5,5,0.2+this.scale/10,this.alpha,1,"#FFFFFF",+this.offx,this.offy,32,32,this.vel.x+this.pos.y);
	            //else
	            //this.visuals.image_part_rotate(this.img,this.pos.x,this.pos.y,0.2+this.scale/30,this.alpha,1,+this.offx,this.offy,32,32,this.vel.x+this.pos.y);
	            //this.visuals.image_part_rotate(this.img,this.pos.x,this.pos.y,0.2+this.scale/30,this.alpha,1,+this.offx,this.offy,32,32,this.vel.x+this.pos.y);

	            this.visuals.image_rotate(this.img, this.pos.x, this.pos.y, 0.2 + this.scale / 30, this.vel.x - this.pos.y, this.alpha, 1, 1);
	        }
	    }]);

	    return SJSParticle;
	}(_interfaces._SJSClass);

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _app = __webpack_require__(196);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	* Contains functions necessary to build the application.
	* @private
	*/

	var _Build = function () {

		/**
	 *	Attaches a reference to the Statistics module.
	 *	@type {Object}
	 */

		function _Build() {
			_classCallCheck(this, _Build);

			this.buildWindowReferences();
		}

		/**
	 *	Generates the app prototype.
	 *	@type {Object}
	 */

		_createClass(_Build, [{
			key: "buildPrototype",
			value: function buildPrototype() {

				/* temp stores the app during the create process, it is then returned */

				var temp = {};

				temp = new _app2.default(this.app);

				temp.window = this.window;

				temp.document = document;

				temp.controller = this;

				temp.id = this.window.appsNextId;

				this.window.apps[temp.id] = temp;

				this.window.appsNextId++;

				return this.window.apps[temp.id];
			}

			/**
	  *	Initalize the listeners for the application.
	  *   @param {temp} temp - pass a reference to attach listeners
	  *   @return {Method} returns self
	  */

		}, {
			key: "buildListeners",
			value: function buildListeners(temp) {

				if (document.readyState == "complete" || document.readyState == "loaded") {
					// document is already ready to go

					console.log('ready');
				}

				temp.Listener(document, "DOMContentLoaded", temp.OnApplicationLoad);

				return temp;
			}

			/**
	  *	Attaches references to the global.window object.
	  *	@type {Object}
	  */

		}, {
			key: "buildWindowReferences",
			value: function buildWindowReferences() {

				var windowReference = window;

				if (typeof windowReference.scripts != 'array') windowReference.scripts = [];

				windowReference.SpiceJS = windowReference.SJS = this;

				/* if no apps have been defined, create a new array */

				if (!windowReference.apps) windowReference.apps = new Array(1);

				/* if appsNextId isnt larger or equal to 0 assign it to 0 */

				if (!windowReference.appsNextId >= 0) windowReference.appsNextId = 0;
			}

			/**
	  *	Begins the app build promise.
	  *	@return {Object} a - b
	  */

		}, {
			key: "create",
			value: function create() {
				var _this = this;

				var tempReference = {};

				var tempReferenceId = null;

				var listReference = null;

				var time = new Date().getTime();

				this.statistics.monitor(function () {

					//this.name = "scriptloadtime";

					window.utils.loadExternalJS(window.scripts);

					tempReference = _this.buildPrototype();

					tempReferenceId = tempReference.id;

					///Temporary Fix for Safari and IE
					//      document

					listReference = _this.controller.list(tempReferenceId);

					_this.buildListeners(listReference);

					// ^ F
				}).then(function () {

					_this.statistics.log("compileloadtime", new Date().getTime() - time, 'build');

					listReference = _this.controller.list(tempReferenceId);

					/// New for After Loaded
					_this.statistics.monitor(function () {

						//this.name = "loadtime";

						//this.initListeners(listReference);

					}).then(function () {

						_this.statistics.log("scriptloadtime", new Date().getTime() - time, 'build');

						_this.statistics.log("build", time);
					});
				});

				return tempReference;
			}
		}]);

		return _Build;
	}();

	exports.default = _Build;
	;

/***/ },
/* 218 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _SGL = function () {
	  function _SGL() {
	    _classCallCheck(this, _SGL);
	  }

	  _createClass(_SGL, [{
	    key: "start",
	    value: function start() {}
	  }, {
	    key: "square",
	    get: function get() {

	      return [100.0, 100.0, 0.0, -100.0, 100.0, 0.0, 100.0, -100.0, 0.0, -100.0, -100.0, 0.0];
	    }
	  }, {
	    key: "opacity",
	    get: function get() {

	      return 0;
	    }
	  }]);

	  return _SGL;
	}();

	_SGL.properties = {

	  opacity: 0

	};
	exports.default = _SGL;

	var SGL = new _SGL();

	var canvas;
	var gl;

	var cubeVerticesBuffer;
	var cubeVerticesTextureCoordBuffer;
	var cubeVerticesIndexBuffer;
	var cubeVerticesIndexBuffer;
	var cubeRotation = 0.0;
	var lastCubeUpdateTime = 0;

	var cubeImage;
	var cubeTexture;

	var mvMatrix;
	var shaderProgram;
	var vertexPositionAttribute;
	var textureCoordAttribute;
	var perspectiveMatrix;

	var squareVerticesBuffer;

	var angleInRadians = 0;
	var scale = 1;
	var translation = [0, 0];
	var width = 100;
	var height = 30;
	function setRectangle(gl, x, y, width, height) {
	  var x1 = x;
	  var x2 = x + width;
	  var y1 = y;
	  var y2 = y + height;
	  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([x1, y1, x2, y1, x1, y2, x1, y2, x2, y1, x2, y2]), gl.STATIC_DRAW);
	}
	var rect;

	//
	// start
	//
	// Called when the canvas is created to get the ball rolling.
	//
	function start() {
	  canvas = document.getElementById("glcanvas");

	  canvas.width = window.innerWidth;;
	  canvas.height = window.innerHeight;

	  initWebGL(canvas); // Initialize the GL context

	  // Only continue if WebGL is available and working

	  if (gl) {
	    gl.clearColor(0.0, 0.0, 0.0, SGL.opacity); // Clear to black, fully opaque
	    //    gl.clearDepth(1.0);                 // Clear everything

	    //gl.depthFunc(gl.LEQUAL);            // Near things obscure far things

	    // Disable depth testing. This way, the last object drawn is always in "front".
	    // WebGL will not attempt to determine whether one object lies behind another.
	    gl.disable(gl.DEPTH_TEST);

	    // Initialize the shaders; this is where all the lighting for the
	    // vertices and so forth is established.

	    initShaders();

	    // Here's where we call the routine that builds all the objects
	    // we'll be drawing.

	    initBuffers();

	    // Next, load and set up the textures we'll be using.

	    initTextures();

	    // Set up to draw the scene periodically.

	    setTimeout(function () {

	      setInterval(drawScene, 15);
	    }, 300);
	  }
	}

	function matrixMultiply(m1, m2) {
	  var result = [];
	  for (var i = 0; i < m1.length; i++) {
	    result[i] = [];
	    for (var j = 0; j < m2[0].length; j++) {
	      var sum = 0;
	      for (var k = 0; k < m1[0].length; k++) {
	        sum += m1[i][k] * m2[k][j];
	      }
	      result[i][j] = sum;
	    }
	  }
	  return result;
	}
	// Returns a random integer from 0 to range - 1.
	function randomInt(range) {
	  return Math.floor(Math.random() * range);
	}
	function makeTranslation(tx, ty) {
	  return [1, 0, 0, 0, 1, 0, tx, ty, 1];
	}

	function makeRotation(angleInRadians) {
	  var c = Math.cos(angleInRadians);
	  var s = Math.sin(angleInRadians);
	  return [c, -s, 0, s, c, 0, 0, 0, 1];
	}

	function makeScale(sx, sy) {
	  return [sx, 0, 0, 0, sy, 0, 0, 0, 1];
	}

	//
	// initWebGL
	//
	// Initialize WebGL, returning the GL context or null if
	// WebGL isn't available or could not be initialized.
	//
	function initWebGL() {
	  gl = null;

	  try {
	    gl = canvas.getContext("experimental-webgl");
	  } catch (e) {}

	  // If we don't have a GL context, give up now

	  if (!gl) {
	    alert("Unable to initialize WebGL. Your browser may not support it.");
	  }
	}

	//
	// initBuffers
	//
	// Initialize the buffers we'll need. For this demo, we just have
	// one object -- a simple two-dimensional cube.
	//
	function initBuffers() {

	  squareVerticesBuffer = gl.createBuffer();
	  gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesBuffer);
	  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(SGL.square), gl.STATIC_DRAW);

	  //	rect = new setRectangle(gl, 0,0,100,100);

	  // Create a buffer for the cube's vertices.

	  cubeVerticesBuffer = gl.createBuffer();

	  // Select the cubeVerticesBuffer as the one to apply vertex
	  // operations to from here out.

	  gl.bindBuffer(gl.ARRAY_BUFFER, cubeVerticesBuffer);

	  // Now create an array of vertices for the cube.

	  var vertices = [
	  // Front face
	  -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0, 1.0,

	  // Back face
	  -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0, -1.0,

	  // Top face
	  -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, -1.0,

	  // Bottom face
	  -1.0, -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, -1.0, -1.0, 1.0,

	  // Right face
	  1.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0,

	  // Left face
	  -1.0, -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0];

	  // Now pass the list of vertices into WebGL to build the shape. We
	  // do this by creating a Float32Array from the JavaScript array,
	  // then use it to fill the current vertex buffer.

	  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

	  // Map the texture onto the cube's faces.

	  cubeVerticesTextureCoordBuffer = gl.createBuffer();
	  gl.bindBuffer(gl.ARRAY_BUFFER, cubeVerticesTextureCoordBuffer);

	  var textureCoordinates = [
	  // Front
	  0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
	  // Back
	  0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
	  // Top
	  0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
	  // Bottom
	  0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
	  // Right
	  0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
	  // Left
	  0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0];

	  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordinates), gl.STATIC_DRAW);

	  // Build the element array buffer; this specifies the indices
	  // into the vertex array for each face's vertices.

	  cubeVerticesIndexBuffer = gl.createBuffer();
	  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVerticesIndexBuffer);

	  // This array defines each face as two triangles, using the
	  // indices into the vertex array to specify each triangle's
	  // position.

	  var cubeVertexIndices = [0, 1, 2, 0, 2, 3, // front
	  4, 5, 6, 4, 6, 7, // back
	  8, 9, 10, 8, 10, 11, // top
	  12, 13, 14, 12, 14, 15, // bottom
	  16, 17, 18, 16, 18, 19, // right
	  20, 21, 22, 20, 22, 23 // left
	  ];

	  // Now send the element array to GL

	  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(cubeVertexIndices), gl.STATIC_DRAW);
	}

	//
	// initTextures
	//
	// Initialize the textures we'll be using, then initiate a load of
	// the texture images. The handleTextureLoaded() callback will finish
	// the job; it gets called each time a texture finishes loading.
	//
	function initTextures() {
	  cubeTexture = gl.createTexture();
	  cubeImage = new Image();
	  cubeImage.onload = function () {
	    handleTextureLoaded(cubeImage, cubeTexture);
	  };
	  cubeImage.src = "./flakes.png";
	}

	function handleTextureLoaded(image, texture) {
	  console.log("handleTextureLoaded, image = " + image);
	  gl.bindTexture(gl.TEXTURE_2D, texture);
	  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
	  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
	  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
	  gl.generateMipmap(gl.TEXTURE_2D);
	  gl.bindTexture(gl.TEXTURE_2D, null);
	}

	function make2DProjection(width, height) {
	  // Note: This matrix flips the Y axis so that 0 is at the top.
	  return [2 / width, 0, 0, 0, -2 / height, 0, -1, 1, 1];
	}

	//
	// drawScene
	//
	// Draw the scene.
	//

	function drawScene() {

	  canvas = document.getElementById("glcanvas");

	  var sw = 32;
	  var sh = 32;
	  var w = window.innerWidth;
	  var h = window.innerHeight;
	  if (typeof Application != 'undefined') sw = Application.client.setWidth, sh = Application.client.setHeight, w = Application.client.width * Application.client.scale, h = Application.client.height * Application.client.scale;

	  canvas.width = w;
	  canvas.height = h;

	  perspectiveMatrix = makeOrtho(-w, w, -h, h, 0.1, 150);
	  perspectiveMatrix = makeOrtho(0, w * 2 * (sw / w), 0, h, 0.1, 150);
	  // Clear the canvas before we start drawing on it.

	  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

	  /*
	  var s = function(w,h){
	  
	  	return makeOrtho(w/2, 0, h/2, 0, 0.1,150);
	  
	  }
	  */
	  //  perspectiveMatrix = s(-w, w, -h, h, 0.1,150);

	  // Establish the perspective with which we want to view the
	  // scene. Our field of view is 45 degrees, with a width/height
	  // ratio of 640:480, and we only want to see objects between 0.1 units
	  // and 100 units away from the camera.

	  //perspectiveMatrix = makePerspective(45, 640.0/480.0, 0.1, 100.0);

	  //perspectiveMatrix = makeOrtho(-1.0, 1.0, -1.0, 1.0, 0.1, 100);

	  //mat4.ortho(perspectiveMatrix, -1.0, 1.0, -1.0, 1.0, 0.1, 100);

	  //perspectiveMatrix = mat4.ortho(makePerspective(45, 640.0/480.0, 0.1, 100.0), -1.0, 1.0, -1.0, 1.0, 0.1, 100);

	  // Set the drawing position to the "identity" point, which is
	  // the center of the scene.

	  loadIdentity();

	  // Now move the drawing position a bit to where we want to start
	  // drawing the cube.

	  mvTranslate([0, 0, -1.0]);

	  // Save the current matrix, then rotate before we draw.

	  mvPushMatrix();

	  // Setup a rectangle
	  //setRectangle(gl, translation[0], translation[1], width, height);

	  // Draw the rectangle.
	  //gl.drawArrays(gl.TRIANGLES, 0, 6);

	  //  mvRotate(cubeRotation, [1, 0, 1]);

	  var drawSquare = function drawSquare(x, y) {
	    y = 0;
	    mvTranslate([x, 0, -0.0]);
	    gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesBuffer);
	    gl.vertexAttribPointer(vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);
	    setMatrixUniforms();
	    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
	    mvTranslate([-x, 0, -0.0]);
	  };

	  drawSquare(0, h / 2);

	  return;

	  //  mvTranslate([-1.2, 0.5, -0.0]);
	  ///DrawSquare

	  perspectiveMatrix = makeOrtho(-w, w, -h, h, 0.1, 150);

	  /*
	  
	  gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesBuffer);
	  gl.vertexAttribPointer(vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);
	  setMatrixUniforms();
	  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
	  
	  */

	  //mvTranslate([1.2, 0.5, -0.0]);

	  // Draw the cube by binding the array buffer to the cube's vertices
	  // array, setting attributes, and pushing it to GL.

	  gl.bindBuffer(gl.ARRAY_BUFFER, cubeVerticesBuffer);
	  gl.vertexAttribPointer(vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);

	  // Set the texture coordinates attribute for the vertices.

	  gl.bindBuffer(gl.ARRAY_BUFFER, cubeVerticesTextureCoordBuffer);
	  gl.vertexAttribPointer(textureCoordAttribute, 2, gl.FLOAT, false, 0, 0);

	  // Specify the texture to map onto the faces.

	  gl.activeTexture(gl.TEXTURE0);
	  gl.bindTexture(gl.TEXTURE_2D, cubeTexture);
	  gl.uniform1i(gl.getUniformLocation(shaderProgram, "uSampler"), 0);

	  // Draw the cube.

	  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVerticesIndexBuffer);
	  setMatrixUniforms();

	  gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_SHORT, 0);

	  /**/

	  // Restore the original matrix

	  mvPopMatrix();

	  // Update the rotation for the next draw, if it's time to do so.

	  var currentTime = new Date().getTime();
	  if (lastCubeUpdateTime) {
	    var delta = currentTime - lastCubeUpdateTime;

	    cubeRotation += 30 * delta / 1000.0;
	  }

	  lastCubeUpdateTime = currentTime;
	}

	//
	// initShaders
	//
	// Initialize the shaders, so WebGL knows how to light our scene.
	//
	function initShaders() {
	  var fragmentShader = getShader(gl, "shader-fs");
	  var vertexShader = getShader(gl, "shader-vs");

	  // Create the shader program

	  shaderProgram = gl.createProgram();
	  gl.attachShader(shaderProgram, vertexShader);
	  gl.attachShader(shaderProgram, fragmentShader);
	  gl.linkProgram(shaderProgram);

	  // If creating the shader program failed, alert

	  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
	    alert("Unable to initialize the shader program.");
	  }

	  gl.useProgram(shaderProgram);

	  vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
	  gl.enableVertexAttribArray(vertexPositionAttribute);

	  //  textureCoordAttribute = gl.getAttribLocation(shaderProgram, "aTextureCoord");
	  // gl.enableVertexAttribArray(textureCoordAttribute);
	}

	//
	// getShader
	//
	// Loads a shader program by scouring the current document,
	// looking for a script with the specified ID.
	//
	function getShader(gl, id) {
	  var shaderScript, theSource, currentChild, shader;

	  shaderScript = document.getElementById(id);

	  // Didn't find an element with the specified ID; abort.

	  if (!shaderScript) {
	    return null;
	  }

	  // Walk through the source element's children, building the
	  // shader source string.

	  var theSource = "";
	  var currentChild = shaderScript.firstChild;

	  while (currentChild) {
	    if (currentChild.nodeType == 3) {
	      theSource += currentChild.textContent;
	    }

	    currentChild = currentChild.nextSibling;
	  }

	  // Now figure out what type of shader script we have,
	  // based on its MIME type.

	  var shader;

	  if (shaderScript.type == "x-shader/x-fragment") {
	    shader = gl.createShader(gl.FRAGMENT_SHADER);
	  } else if (shaderScript.type == "x-shader/x-vertex") {
	    shader = gl.createShader(gl.VERTEX_SHADER);
	  } else {
	    return null; // Unknown shader type
	  }

	  // Send the source to the shader object

	  gl.shaderSource(shader, theSource);

	  // Compile the shader program

	  gl.compileShader(shader);

	  // See if it compiled successfully

	  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
	    alert("An error occurred compiling the shaders: " + gl.getShaderInfoLog(shader));
	    return null;
	  }

	  return shader;
	}

	//
	// Matrix utility functions
	//

	function loadIdentity() {
	  mvMatrix = Matrix.I(4);
	}

	function multMatrix(m) {
	  mvMatrix = mvMatrix.x(m);
	}

	function mvTranslate(v) {
	  multMatrix(Matrix.Translation($V([v[0], v[1], v[2]])).ensure4x4());
	}

	function setMatrixUniforms() {
	  var pUniform = gl.getUniformLocation(shaderProgram, "uPMatrix");
	  gl.uniformMatrix4fv(pUniform, false, new Float32Array(perspectiveMatrix.flatten()));

	  var mvUniform = gl.getUniformLocation(shaderProgram, "uMVMatrix");
	  gl.uniformMatrix4fv(mvUniform, false, new Float32Array(mvMatrix.flatten()));
	}

	var mvMatrixStack = [];

	function mvPushMatrix(m) {
	  if (m) {
	    mvMatrixStack.push(m.dup());
	    mvMatrix = m.dup();
	  } else {
	    mvMatrixStack.push(mvMatrix.dup());
	  }
	}

	function mvPopMatrix() {
	  if (!mvMatrixStack.length) {
	    throw "Can't pop from an empty matrix stack.";
	  }

	  mvMatrix = mvMatrixStack.pop();
	  return mvMatrix;
	}

	function mvRotate(angle, v) {
	  var inRadians = angle * Math.PI / 180.0;
	  var m = Matrix.Rotation(inRadians, $V([v[0], v[1], v[2]])).ensure4x4();
	  multMatrix(m);
	}

	window.start = start;
	window.initWebGL = initWebGL;

/***/ }
/******/ ]);
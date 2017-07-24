//@flow


export const sortBy = (function() {

  const _DESC:RegExp = (/^desc:\s*/i);

  // Sests whether the input value is a string and has set the flag for descending order.
  const isDesc = (v) => typeof v === 'string' && _DESC.test(v);

  // Compares each element and defines the sort order.
  function comparer(prev, next) {
	let asc = 1;
	if (prev === next) return 0;
	if (isDesc(prev)) asc = -1;
	return (prev > next ? 1 : -1) * asc;
  }

  // Compares each decorated element.
  function sortItems(aprev, anext) {
	let sorted, i;
	for (i in aprev) { // eslint-disable-line
	  sorted = comparer(aprev[i], anext[i]);
	  if (sorted) return sorted;
	}
	return 0;
  }

  // Defines the default sort order (ASC)
  const defaultSort  = (p, n) => p < n ? -1 : +(p > n);

  /*
   * Sort an array and allows multiple sort criteria.
   *
   * @param  {Array} array: the collection to sort
   * @param  {Function} parser: transforms each item and specifies the sort order
   * @return {Array}
   */
  return function sortBy(array:Array<any>, parser:any) {
	let i, item;
	const arrLength = array.length;
	if (typeof parser === 'undefined') {
	  return array.sort(defaultSort);
	}
	// Schwartzian transform (decorate-sort-undecorate)
	for (i = arrLength; i;) {
	  item = array[i -= 1];
	  // decorate the array
	  array[i] = [].concat(parser.call(null, item, i), item);
	  // console.log('decorated: ', array[i]);
	}
	// sort the array
	array.sort(sortItems);
	// undecorate the array
	for (i = arrLength; i;) {
	  item = array[i -= 1];
	  array[i] = item[item.length - 1];
	}
	return array;
  }
}());

interface number {

	toFixedNumber:any

};



Number.prototype.toFixedNumber = function(x, base){
  var pow = Math.pow(base||10,x);
  return +( Math.round(this*pow) / pow );
}


function wait(t){

    return new Promise((r) => setTimeout(r, t));

}

var timers = {};

window.timer = function timer(name) {
    timers[name + '_start'] = window.performance.now();
}

window.timerEnd = function timerEnd(name) {
    if (!timers[name + '_start']) return undefined;
    var time = window.performance.now() - timers[name + '_start'];
    var amount = timers[name + '_amount'] = timers[name + '_amount'] ? timers[name + '_amount'] + 1 : 1;
    var sum = timers[name + '_sum'] = timers[name + '_sum'] ? timers[name + '_sum'] + time : time;
    timers[name + '_avg'] = sum / amount;
    delete timers[name + '_start'];
    return time;
}

var utils = utils || {};

utils.FNV_OFFSET_32 = 0x811c9dc5;

utils.randomHash = function(){

    utils.FNV_OFFSET_32 = '#'+Math.floor(Math.random()*16777215).toString(16);

};

utils.hashFnv32a = function (input) {

    var hval = utils.FNV_OFFSET_32;

    // Strips unicode bits, only the lower 8 bits of the values are used

    for (var i = 0; i < input.length; i++) {

        hval = hval ^ (input.charCodeAt(i) & 0xFF);

        hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);

    }

    return hval >>> 0;
};

utils.toHex = function (val) {


    return ("0000000" + (val >>> 0).toString(16)).substr(-8);

};

utils.requestAnimationFrame = async ()=>{

        if (!Date.now)
            Date.now = function() { return new Date().getTime(); };

        var vendors = ['webkit', 'moz'];

        for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {

            var vp = vendors[i];

            window.requestAnimationFrame = window[vp+'RequestAnimationFrame'];

            window.cancelAnimationFrame = (window[vp+'CancelAnimationFrame'] || window[vp+'CancelRequestAnimationFrame']);

        };

        if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {

            var lastTime = 0;

            window.requestAnimationFrame = function(callback) {

                var now = Date.now();

                var nextTime = Math.max(lastTime + 16, now);

                return setTimeout(function() { callback(lastTime = nextTime); },nextTime - now);
            };

            window.cancelAnimationFrame = clearTimeout;

        };
		utils.requestIdleCallback();
}

utils.requestIdleCallback = ()=> {

	/**
	 * Created by Denis Radin aka PixelsCommander
	 * http://pixelscommander.com
	 *
	 * Polyfill is build around the principe that janks are most harmful to UX when user is continously interacting with app.
	 * So we are basically preventing operation from being executed while user interacts with interface.
	 * Currently this implies scrolls, taps, clicks, mouse and touch movements.
	 * The condition is pretty simple - if there were no interactions for 300 msec there is a huge chance that we are in idle.
	 */

	var applyPolyfill = function () {
	    //By default we may assume that user stopped interaction if we are idle for 300 miliseconds
	    var IDLE_ENOUGH_DELAY = 300;
	    var timeoutId = null;
	    var callbacks = [];
	    var lastInteractionTime = Date.now();
	    var deadline = {
	        timeRemaining: IDLE_ENOUGH_DELAY
	    };

	    var isFree = function () {
	        return timeoutId === null;
	    }

	    var onContinousInteractionStarts = function (interactionName) {
	        deadline.timeRemaining = 0;
	        lastInteractionTime = Date.now();

	        if (!timeoutId) {
	            timeoutId = setTimeout(timeoutCompleted, IDLE_ENOUGH_DELAY);
	        }
	    }

	    var onContinousInteractionEnds = function (interactionName) {
	        clearTimeout(timeoutId);
	        timeoutId = null;

	        for (var i = 0; i < callbacks.length; i++) {
	            executeCallback(callbacks[i])
	        }
	    }

	    //Consider categorizing last interaction timestamp in order to add cancelling events like touchend, touchleave, touchcancel, mouseup, mouseout, mouseleave
	    document.addEventListener('keydown', onContinousInteractionStarts.bind(this, 'keydown'));
	    document.addEventListener('mousedown', onContinousInteractionStarts.bind(this, 'mousedown'));
	    document.addEventListener('touchstart', onContinousInteractionStarts.bind(this, 'touchstart'));
	    document.addEventListener('touchmove', onContinousInteractionStarts.bind(this, 'touchmove'));
	    document.addEventListener('mousemove', onContinousInteractionStarts.bind(this, 'mousemove'));
	    document.addEventListener('scroll', onContinousInteractionStarts.bind(this, 'scroll'), true);


	    var timeoutCompleted = function () {
	        var expectedEndTime = lastInteractionTime + IDLE_ENOUGH_DELAY;
	        var delta = expectedEndTime - Date.now();

	        if (delta > 0) {
	            timeoutId = setTimeout(timeoutCompleted, delta);
	        } else {
	            onContinousInteractionEnds();
	        }
	    }

	    var createCallbackObject = function (callback, timeout) {
	        var callbackObject = {
	            callback: callback,
	            timeoutId: null
	        };

	        callbackObject.timeoutId = timeout !== null ? setTimeout(executeCallback.bind(this, callbackObject), timeout) : null;

	        return callbackObject;
	    }

	    var addCallback = function (callbackObject, timeout) {
	        callbacks.push(callbackObject);
	    }

	    var executeCallback = function (callbackObject) {
	        var callbackIndex = callbacks.indexOf(callbackObject);

	        if (callbackIndex !== -1) {
	            callbacks.splice(callbacks.indexOf(callbackObject), 1);
	        }

	        callbackObject.callback(deadline);

	        if (callbackObject.timeoutId) {
	            clearTimeout(callbackObject.timeoutId);
	            callbackObject.timeoutId = null;
	        }
	    }

	    return function (callback, options) {
	        var timeout = (options && options.timeout) || null;
	        var callbackObject = createCallbackObject(callback, timeout);

	        if (isFree()) {
	            executeCallback(callbackObject);
	        } else {
	            addCallback(callbackObject);
	        }
	    };
	};

	if (!window.requestIdleCallback) {
	    window.ricActivated = true;
	    window.requestIdleCallback = applyPolyfill();
	}

	window.requestUserIdle = window.ricActivated && window.requestIdleCallback || applyPolyfill();

}

utils.loadExternalJS = function(scripts) {

    !function(e, t, r) {

        function n() {

            for (; d[0] && "loaded" == d[0][f];)
                c = d.shift(), c[o] = !i.parentNode.insertBefore(c, i);

        };

        for (var s, a, c, d = [], i = e.scripts[0], o = "onreadystatechange", f = "readyState"; s = r.shift();)
            a = e.createElement(t), "" in i ? (a.async = !1, e.head.appendChild(a)) : i[f] ? (d.push(a), a[o] = n) : e.write("<" + t + ' src="' + s + '" defer></' + t + ">"), a.src = s;

    }(document, "script", scripts);

}

utils.convertArrayOfObjectsToCSV = function(args) {

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

    data.forEach(function(item) {

        ctr = 0;

        keys.forEach(function(key) {

            if (ctr > 0) result += columnDelimiter;

            result += item[key];

            ctr++;

        });

        result += lineDelimiter;

    });

    return result;
}

utils.writeToCSV = function(name){

    var logStream = fs.createWriteStream('log.txt', {'flags': 'a'});

    logStream.write('Initial line...');

    logStream.end('this is the end line');

    let dataString = "";

    var data =this.convertArrayOfObjectsToCSV(SpiceJS.logs('values')[1]);

    //console.log(this.convertArrayOfObjectsToCSV({eh:'eh'}))

    var csvContent = "data:text/csv;charset=utf-8,";

    data.forEach(function(infoArray, index){

       dataString = infoArray.join(",");

       csvContent += index < data.length ? dataString+ "\n" : dataString;

    });

    var encodedUri = encodeURI(csvContent);

    var link = document.createElement("a");

    link.setAttribute("href", encodedUri);

    link.setAttribute("download", name+".csv");

    link.click();

}

/*
*	Date.now polyfill
*/

if (!Date.now) {

	console.warn('polyfill for Date.now used');

	Date.now = function now() {	return new Date().getTime(); };

}

window.wait = wait;

window.utils = utils;

export const RequestAnimationFrame = utils.requestAnimationFrame;

export default window.utils;

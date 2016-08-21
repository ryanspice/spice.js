/* @flow */

import utils from '../utils.js';

//import {_Log, _Loop, _Compile, App}  from './interfaces.js';

/** @module
* @interface
* @protected

class _Log {	static get time() {

        return (this._time);

    }
	static set time(value) {

        return (this._time = value);

    }
	static get id() {

        return (this._id);

    }
	static set id(value) {

        return (this._id = value);

    }

    constructor(id){

        this.id = id || 0;

    }

}


* @module
* @interface
* @private


class _Loop extends _Log  {

    constructor(){

        super();

    }

}


* @module
* @interface
* @private


class _Compile extends _Log  {

    constructor(){

        super();

    }

}


*
* @module
* @interface
* @private


class App {

    static get fps() {
        console.trace(this);
        return (this._fps);

    }

    static set fps(value) {
        console.trace(this);
        return (this._fps = value);

    }

    static get scale() {
        console.trace(this);
        return (this._scale);

    }

    static set scale(value) {
        console.trace(this);
        return (this._scale = value);

    }

}
*/

const _private = new WeakMap();

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

export default class Statistics {

	static properties = {};

	constructor(){

		this.count = 0;

        this.logs = this.constructor.logs;
        this.logs.type = 'Array';

		_private.set(this,this.constructor.properties);

    }

	/** Async Monitor of a function, returns duration.
	* @type {Promise}
	* @param {Function} func - Function to monitor
	* @param {Arguments} arg - Arguments to pass
	* @return {Number} as duration.	*/

	async monitor(func,arg){

	    let startTime = new Date().getTime();

	    await func(arg);

	    let endTime = new Date().getTime();

	    this.log("time",(-startTime+endTime),func.name);

	    return startTime - endTime;
	}

	/** Async - Unused Asyn logging....
	 * @private */

	async log(){

		return;

	    let name = '';

	    let curLog = this.logs;

	    let newLog = {};

	    let hashLog = {};

	    let time = (new Date().getTime());

	    let time2 = (new Date().getTime());

	    let timeHash = this.count + time;

	    timeHash = utils.hashFnv32a(timeHash.toString());

	    if (typeof arguments[2] != 'undefined')
	    {

	        name = arguments[2];

	        if (name=='compile')
	            newLog = curLog[name] || new _Compile(name);
	        //else
	        //if (name=='build')
	        //    newLog = curLog[name] || new _Build(name);
	        else
	        if (name=='loop')
	            newLog = curLog[name] || new _Loop(name);
	        else
	        if (name=='state')
	            newLog = curLog[name] || new App(name);
	        else
	            newLog = curLog[name] || new _Log(name);

	        hashLog = newLog[ this.count + " " +arguments[0]] || new _Log(name);

	        hashLog = arguments[1];

	        newLog[arguments[0]] = hashLog;

	        curLog[name] = newLog;

	    }
	    else {

	        name = arguments[0];

	        if (name=='compile')
	            newLog = curLog[name] || new _Compile(name);
	        //else
	        //if (name=='build')
	        //    newLog = curLog[name] || new _Build(name);
	        else
	        if (name=='loop')
	            newLog = curLog[name] || new _Loop(name);
	        else
	        if (name=='state')
	            newLog = curLog[name] || new App(name);
	        else
	            newLog = curLog[name] || new _Log(name);

	        hashLog = newLog[ this.count + " " +arguments[0]] || new _Log(name);

	        hashLog = arguments[1];

	        newLog[arguments[0]] = hashLog;

	        curLog[name] = newLog;

	    }

	    this.count++;

	    this.logs = curLog;

	}

	/** watch //to come - to call a funnction periodically (based on argument 1)
	* @private */

    get count() {

        return this.monitor.count;

    }

    set count(value) {

        this.monitor.count = value;

    }

    get details() {

        return _Statistics_Core._details;

    }

    set details(value) {

        this._details = _Statistics_Core._details;

    }

	static get logs() {

	    return this.monitor.logs;

	}

	static set logs(value) {

	    this.monitor = value;

	}

	static get monitor() {

	    return this._monitor;

	}

	static set monitor(value) {

	    this._monitor = value;

	}

    static _monitor = {

        count:0,

        logs:[]

    };

    static _details(type){

        type = type;

        switch (type)
        {

            default:

            return Object.keys(this.logs);

            case 'details':

            return Object.create(

              Object.getPrototypeOf(this.logs),

              Object.getOwnPropertyDescriptors(this.logs)

            );

            case 'entries':

            return Object.entries(this.logs);

            case 'values':

            return Object.values(this.logs);

        }

    };

}

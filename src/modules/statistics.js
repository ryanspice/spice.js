
import utils from './utils.js';
import {_Log, _Loop, _Compile, _App, _Build}  from './interfaces.js';

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

class Statistics {

	/**
	* Private variables.
	* @type {Object}
	*/

	static properties = {};

	/* */

	constructor(){

        this.logs = this.constructor.logs;
        this.logs.type = 'Array';

        this.count = 0;

		_private.set(this,this.constructor.properties);

    }

	/** Async Monitor of a function, returns duration.
	* @type {Promise}
	* @param {Function} func - Function to monitor
	* @param {Arguments} arg - Arguments to pass
	* @return {Number} as duration.
	*/

	async monitor(func,arg){

	    let startTime = new Date().getTime();

	    await func(arg);

	    let endTime = new Date().getTime();

	    this.log("time",(-startTime+endTime),func.name);

	    return startTime - endTime;
	}

	/** Async - Unused Asyn logging....
	 * @private
	 */

	async log(){

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
	        else
	        if (name=='build')
	            newLog = curLog[name] || new _Build(name);
	        else
	        if (name=='loop')
	            newLog = curLog[name] || new _Loop(name);
	        else
	        if (name=='state')
	            newLog = curLog[name] || new _App(name);
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
	        else
	        if (name=='build')
	            newLog = curLog[name] || new _Build(name);
	        else
	        if (name=='loop')
	            newLog = curLog[name] || new _Loop(name);
	        else
	        if (name=='state')
	            newLog = curLog[name] || new _App(name);
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
	* @private

	static watch(v){

		let w = v;

	}
	*/

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

export default Statistics;

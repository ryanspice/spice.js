
/**
* @module
* @private
*/

class StatisticsController {

    /**
    * @type {Object}
    * @private
    */

    static get logs() {

        return this.monitor.logs;

    }

    /**
    * @type {Function}
    * @private
    */

    static set logs(value) {

        this.monitor = value;

    }

    static get monitor() {

        return this._monitor;

    }

    static set monitor(value) {

        this._monitor = value;

    }

    get count() {

        return this.monitor.count;

    }

    set count(value) {

        this.monitor.count = value;

    }

    get details() {

        return StatisticsController._details;

    }

    set details(value) {

        this._details = StatisticsController._details;

    }

    static _monitor = {

        count:0,

        logs:[]

    }

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

    }

    constructor(){

        /** dfsdsf
        * @type {Array<>} sdf sdf
        * @private
        */

        this.logs = this.constructor.logs;
        this.logs.type = 'Array';

        this.count = 0;

    }

}

class Log {

    constructor(id){

        this.id = id || 0;

    }

    static get time() {

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

}

class Loop extends Log  {

    constructor(){

        super();

    }

}

class Compile extends Log  {

    constructor(){

        super();

    }

}

class App {

    static get fps() {

        return (this._fps);

    }

    static set fps(value) {

        return (this._fps = value);

    }

    static get scale() {

        return (this._scale);

    }

    static set scale(value) {

        return (this._scale = value);

    }

}

class Build {

    static get build() {

        return (this._build);

    }

    static set build(value) {

         return (this._build = value);

     }

    static get scriptloadtime() {

        return (this._scriptloadtime);

    }

    static set scriptloadtime(value) {

        return (this._scriptloadtime = value);

    }

    static get uptime() {

        return (this._uptime);

    }

    static set uptime(value) {

        return (this._uptime = value);

    }

}

export {Log, Loop, Compile, App, Build, StatisticsController};

/**
* _private
* @protected
*/

const _private = new WeakMap();

/**
* @module
* @private
*/

export default class _Statistics_Core {


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

    constructor(){

        /** dfsdsf
        * @type {Array<>} sdf sdf
        * @private
        */

        this.logs = this.constructor.logs;
        this.logs.type = 'Array';

        this.count = 0;

    };

}

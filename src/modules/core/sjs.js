/* @flow */

console.time('SJS:B:sjs.js');

import _IFace from './interfaces/IFace.js';

/** SJSClass - Used to create objects which inherit the Application.
* @module */

export class _SJSClass extends _IFace {

    /** This is the constructor for the class
    * @param {Object} app[ - instance of spicejs] */

    constructor(app:object):void {

        super(new _weakmap());

        let appReference:object = app;

        if (typeof appReference == 'undefined') {

            appReference = window.SJS.controller.list();
            console.warn('Unable to find app reference.', 'Using ', appReference, ' for ', this);

        }

        this.app = appReference;
        this.visuals = appReference.client.visuals;
        this.graphics = appReference.client.graphics;

    }

};

console.timeEnd('SJS:B:sjs.js');

/* @flow */

console.time('SJS:B:sjs.js');

<<<<<<< HEAD
import App from '../app.js';

=======
>>>>>>> origin/master
import _IFace from './interfaces/IFace.js';

/** SJSClass - Used to create objects which inherit the Application.
* @module */

export class _SJSClass extends _IFace {

    /** This is the constructor for the class
    * @param {Object} app[ - instance of spicejs] */

<<<<<<< HEAD
    constructor(app:App):void {

        super(new WeakMap());

        let appReference:App = app;
=======
    constructor(app:object):void {

        super(new _weakmap());

        let appReference:object = app;
>>>>>>> origin/master

        if (typeof appReference == 'undefined') {

            appReference = window.SJS.controller.list();
<<<<<<< HEAD

            this.warn('Unable to find app reference.', 'Using ', appReference, ' for ', this);

        }

		if (this.constructor.name == "Client"){
			//return;
		}

		if (typeof appReference != 'undefined') {

			this.app = appReference;

			if ((appReference.client) &&(appReference.client.visuals)) {

				this.visuals = appReference.client.visuals;

			} else {

				this.visuals = null;
				this.warn('Unable to find app visuals reference.', 'Using ', appReference, ' for ', this);

			}

			if ((appReference.client) &&(appReference.client.graphics)) {

				this.graphics = appReference.client.graphics;

			} else {

				this.graphics = null;
				this.trace('Unable to find app loader reference.', 'Using ', appReference, ' for ', this);

			}

		} else {

			this.graphics = null;
			this.visuals = null;
			this.warn('Unable to find app reference.', 'Using ', appReference, ' for ', this);

		}

    }

    /**
    * @param */

	warn(a0,a1,a2,a3,a4){

		//console.trace(a0,this);
		//console.log(this);
		console.warn(a1,a2,a3,a4);

	}

    /**
    * @param */

	log(a0){

		console.trace(a0, '\n'  ,this);

	}

=======
            console.warn('Unable to find app reference.', 'Using ', appReference, ' for ', this);

        }

        this.app = appReference;
        this.visuals = appReference.client.visuals;
        this.graphics = appReference.client.graphics;

    }

>>>>>>> origin/master
};

console.timeEnd('SJS:B:sjs.js');

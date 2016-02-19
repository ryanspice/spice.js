
import {_Legacy} from './interfaces.js';

/**
* _private
* @protected
*/

const s_private = new WeakMap();

/**
* Vector
* @module
* @interface
* @protected
*/
class State {

	static properties = {

		update:function(){}

	};

	name(){

	}

	init(){

	}

	get update(){

		return this._update;

	}

	set update(func){

		this._update = func;

	}

	draw(){

	}

	constructor(){

		s_private.set(this,this.constructor.properties);

		[this.update] = [function(){console.log('eh')}];

	}


}

/**
* _private
* @protected
*/

const _private = new WeakMap();

/**
* Vector
* @module
* @interface
* @protected
*/

export default class _Core extends _Legacy {

	/**
	* private variables
	* @type {Object}
	* @protected
	*/

	static properties = {

		main:new State(),
		version:'0.8.1'

	};

    /**  @type {Number} */

	get main() {

		return this.get('main');

	}

    /**  @type {Number} */

	set main(newmain) {

		let state = this.get('main');
		let newstate = newmain;
		state.name = newstate.name;
		state.init = newstate.init;
		state.update = newstate.update;
		state.draw = newstate.draw;

		return state;

	}

    /**  @type {Number} */

	get version() {

		return this.get('version');

	}

    /**  @type {Number} */

	get fps() {

		return this.client.update.step.fps.toFixed(2);

	}

    /**  @type {Constructor} */

    constructor() {

        super();

		_private.set(this,this.constructor.properties);

		console.log(this.head);

    }

}


import {_Interface} from './interfaces.js';

/**
* _private
* @protected
*/

const _private = new WeakMap();

/**
* State class
* @module
* @interface
*/

export default class _State extends _Interface {

	/**
	* This module's private variables
	*/

	static properties = {

		update:function(){}

	};

	/**
	* Gets the update function
	* @type {Function}
	*/

	get update(){

		return this._update;

	}

	/**
	* Sets the update function
	* @type {Function}
	*/

	set update(func){

		this._update = func;

	}

	/**
	* This method is overridden to draw the state.
	* @method
	* @override
	*/

	draw(){

	}

	/**
	* This method is overridden to initialize the state.
	* @method
	* @override
	*/

	init(){

	}

	/**
	* Method is overridden to name the state.
	* @method
	* @override
	*/

	name(){

	}

	/**
	* Construct and assign privates
	* @method
	*/

	constructor(){

		super();

		_private.set(this,this.constructor.properties);

		/* Pas Application.main and attache events below */


				if (typeof obj !='undefined') {

					[this.update,this.draw,this.init,this.name] = [obj.update,obj.draw,obj.init,obj.name];

				}



	}

}

/**
* Client Update Loop
* @class
* @protected
*/

import {_SJSClass as SJSClass} from './core/sjs.js';

import Step from './client/step.js';

import State from './core/state.js';

import Vector from './core/math/vector';

/**The Update class handles scaling, resizing, and the app state.
* @public
*/

export default class Update extends SJSClass   {

	/**
    * @public
    */

	last:Vector= new Vector();

	difference:Vector = new Vector();

	scaler:Object = {s:1,x:1,y:1};

	scaling:boolean = true;

	scalediff:number = 0;

	lastscale:number = 1;

	fullscale:boolean = false;

	resized:boolean = false;

	frames:number = 0;

	/**
    *
    */

	static properties = {

		data:[
			Step,
			State
		]

	};

	/**
    *
    */

	constructor(app:Object){

		super(app);

		if (this.app.main.init == undefined)
			this.warn(this,this.app.main,"Undefined main loop. ");

	}

	/**
    * @protected
    */

	set step(s){

    	this.get('data')[0] = s;

	}

	/**
    * @protected
    */

	get step(){

		return this.get('data')[0];

	}

	/**
    * @protected
    */

	set state(s){

		s.init();
		s.initalized = true;
    	this.get('data')[1] = s;

	}

	/**
    * @protected
    */

	get state(){

		return this.get('data')[1];

	}

	/**
	* Initalize the state and step objects.
	* Step is delayed untill step is initiated so to prevent value mismatch.
	* @method
	* @private
	*/

	inital(app:Object):void {

		this.step = new this.step(new WeakMap());
		this.state = new this.state(app.main,app);

	}

	/**
	* Calculates the scale of the canvas based on inital size inputs.
	* Disabled if overriding canvas properties.
	* @method
	* @private
	*/

	scale(client:Object):number {

		let windowSize = new Vector(window.innerWidth,window.innerHeight);

		if (this==window)
			return log('Warning: Scale: [this === window]');
			else
		if ((this.pause>0.5))
			return log('Warning: Paused',30);
			else
		if (this.set==1)
			return log('Warning: Scale: Duplicate Run',30);


		//Check if overriding

		if (client.app.options.canvas.override)	{

			//Set width to override

			if (client.app.options.canvas.size.width!==client.width) {

				client.width = client.app.options.canvas.size.width;

				if (document.body.clientHeight > windowSize.y) {

					//

				}

			}

			//Set height to override

			if (client.app.options.canvas.size.height!==client.height) {

				client.height = client.app.options.canvas.size.height;

			}

			//Check if centered

			if (client.app.options.canvas.position.center)	{

				//if not aligned

				if (client.app.options.canvas.size.left!==app.width/2)	{

					//align

					client.app.canvas.getCanvas().style.left  = -client.width/2 + windowSize.x/2+"px";

					//if buffer align

					if (client.app.options.canvas.buffer) {

						   client.app.canvas.getBuffer().style.left  = -client.width/2 + windowSize.x/2+"px";

					}

			   }

			}

		} else	{

			//Set height to window height

			if (windowSize.y!==client.height) {

				client.height = windowSize.y;

			}

			//Set width to window width

			if (windowSize.x!==client.width) {

				client.width = windowSize.x;

			}

		}

		//Calculate sccalers

		this.set = 1;
		this.scaler.x = client.height/client.setHeight;
		this.scaler.y = client.width/client.setWidth;
		//Toggle wither or not to scale
		(this.fullscale)?this.scaler.s = this.scaler.x:this.scaler.s = (this.scaler.x<this.scaler.y)?this.scaler.x:this.scaler.y;

		//if scaler.s is not a number
		if (isNaN(this.scaler.s)){

			return this.set = 0;;

		}

		//Scale difference
		this.scalediff = this.scaler.s-this.lastscale;

		//If scaled different, scroll to the top
		//(this.scalediff)?app.app.input.scroll.to(true):app.app.input.scroll.to(false);

		this.set = 0;

		//Save scale
		this.lastscale = this.scaler.s;

		return this.scaler.s;
	}

	/**
	* Perform hard resize of the canvas.
	* @method
	* @private
	*/

	size(client:Object ):boolean {

		//If distance hasnt changed

		if (this.difference.sum() == 0)
			return false;

		//Reassign width and height

		console.log(client.width)

		client.app.canvas.canvas.width  = this.last.x = client.width;

		client.app.canvas.canvas.height = this.last.y = client.height;

		client.app.canvas.buffer.width  = this.last.x = client.width;

		client.app.canvas.buffer.height = this.last.y = client.height;

		return true;
	}

	/**
	* Calculate width and height delta differences between
	* the canvas size last frame and this frame.
	* @method
	* @private
	*/

	sizedelta(client:Object):boolean {

		let vector_size0:Vector = new Vector(this.last.x,this.last.y);
		let vector_size1:Vector = new Vector(client.width,client.height);

		if (vector_size0.equals(vector_size1)) {

			this.difference = new Vector();

			return false;

		} else {

			this.difference = new Vector().Difference(vector_size0,vector_size1);

		}

		return true;

	}

}

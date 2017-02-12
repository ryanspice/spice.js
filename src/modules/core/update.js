/* @flow */

import State from '../state';

import Step from './timing/step';

import Vector from './math/vector';

import Scaler from './math/scaler';

import {_SJSClass as SJSClass} from './base/sjs.js';

import type {

	IApp,
	IStep,
	IState,
	IClient,
	IVector,
	IScaler,
	IUpdate

} from "./interfaces/ITypes";

/*
*	The Update class handles scaling, resizing, and the app state.
*/

export default class Update extends SJSClass {

	last:IVector= new Vector();

	difference:IVector = new Vector();

	scaler:IScaler = new Scaler(1,1,1);

	scaling:boolean = true;

	scalediff:number = 0;

	lastscale:number = 1;

	fullscale:boolean = false;

	resized:boolean = false;

	frames:number = 0;

	pause:number = 0;

	set:number;

	static properties = {

		data:[
			Step,
			State
		]

	};

	/**
    *
    */

	set step(value:IStep):void {

    	this.get('data')[0] = value;

	}

	get step():IStep  {

		return this.get('data')[0];

	}

	/**
    *
    */

	set state(value:IState){

		value.init();
		value.initalized = true;
    	this.get('data')[1] = value;

	}

	get state():IState {

		return this.get('data')[1];

	}

	constructor(
		map:Object
		) {

		super(map);

		return (this:IUpdate);

	}

	/**
	* Initalize the state and step objects.
	* Step is delayed untill step is initiated so to prevent value mismatch.
	*/

	inital(app:IApp):void {

		this.step = new Step(app);

		this.state = new State(app.main,app);

	}

	/**
	* Calculates the scale of the canvas based on inital size inputs.
	* Disabled if overriding canvas properties.
	*/

	scale(client:IClient):number {

		//CLEAN
		/*
		if (this==window)			{
			console.log('Warning: Scale: [this === window]');return (0);
		}else
		if ((this.pause>0.5))
			{console.log('Warning: Paused',30);return (0);}
			else
		if (this.set==1)
			{console.log('Warning: Scale: Duplicate Run',30);return (0);}
		*/
		//ENDCLEAN

		let windowSize:IVector = new Vector(window.innerWidth,window.innerHeight);

		//Check if overriding

		if (client.app.options.canvas.override)	{

			//Set width to override

			if (client.app.options.canvas.size.width!==client.width) {

				client.width = client.app.options.canvas.size.width;

				if (document.body.clientHeight > windowSize.y) {

					//FUCK?????????????????

				}

			}

			//Set height to override

			if (client.app.options.canvas.size.height!==client.height) {

				client.height = client.app.options.canvas.size.height;

			}

			//Check if centered

			if (client.app.options.canvas.position.center)	{

				//if not aligned

				if (client.app.options.canvas.size.left!==client.app.width/2)	{

					//align

					client.app.canvas.getCanvas().style.left  = -client.width/2 + windowSize.x/2+"px";

					//if buffer align

					if (client.app.options.canvas.buffer) {

						   client.app.canvas.getBuffer().style.left  = -client.width/2 + windowSize.x/2+"px";

					}

			   }

			}

		} else	{


			if (windowSize.y!==client.height) {

				client.height = windowSize.y;

			}

			if (windowSize.x!==client.width) {

				client.width = windowSize.x;

			}

		}

		if (this.difference.sum() == 0) {

			this.set = 0;

			this.scalediff = 0;

			return this.lastscale;
		}

		//Calculate scalers

		this.set = 1;

		this.scaler.x = client.height/client.setHeight;

		this.scaler.y = client.width/client.setWidth;

		//Toggle wither or not to scale

		(this.fullscale)?this.scaler.s = this.scaler.x:this.scaler.s = (this.scaler.x<this.scaler.y)?this.scaler.x:this.scaler.y;

		//Scale difference
		this.scalediff = this.scaler.s-this.lastscale;

		//LEGACY, scroll to top, If scaled different, scroll to the top
		//(this.scalediff)?app.app.input.scroll.to(true):app.app.input.scroll.to(false);

		this.set = 0;

		//Save scale
		this.lastscale = this.scaler.s;

		return this.scaler.s;
	}

	/**
	* Perform hard resize of the canvas.
	*/

	size(client:IClient):boolean {

//		console.log(this.app);

		if (this.difference.sum() == 0) {

			return false;
		}


		this.app.canvas.canvas.width  = this.last.x = this.app.client.width;

		this.app.canvas.canvas.height = this.last.y = this.app.client.height;

		this.app.canvas.buffer.width  = this.last.x = this.app.client.width;

		this.app.canvas.buffer.height = this.last.y = this.app.client.height;



		return true;
	}

	/**
	* Calculate width and height delta differences between
	* the canvas size last frame and this frame.
	*/

	sizedelta(client:IClient):boolean {

		let vector_size0:IVector = new Vector(this.last.x,this.last.y);

		let vector_size1:IVector = new Vector(client.width,client.height);

		if (vector_size0.equals(vector_size1)) {

			this.difference = new Vector();

			return false;

		} else {

			this.difference = new Vector().Difference(vector_size0,vector_size1);

		}

		return true;

	}

}

/* @flow */

import type {
	IApp,
	IPace
	} from "./interfaces/ITypes.js";

/*
* Base Pace class for caluclating the Pacing of the Application
*/

export default class Pace {

	delta:number;

	offset:number;

	rate:number;

	targetfps:number;

	timer:number;

	constructor(
		rate:number,
		fps:number
		) {

		this.targetfps = fps;

		//this.timer = new Date().getTime();

		this.timer = Date.now();

		this.rate = rate / 1000.0;

		this.offset = this.timer - 1000.0 / rate;

		this.delta = 0.0;

		//Fake Flow Interfacing
		return (this:IPace);
	}

	/*
	*	Returns the browsers time.
	*/

	Time(app:IApp):number {

		//this.timer = new Date().getTime();

		this.timer = Date.now();

		return this.timer - this.offset;
	}

	/*
	*
	*/

	Step(app:IApp):boolean {

		this.delta = this.Time(app);

		let step:number = this.rate*this.delta;

		if (step>1.0) {
			this.offset += Math.floor(step)/this.rate;
		}

		return (step - 1.0)>0.0?true:false;
	}

	/*
	*
	*/

	GetStepsPerSecond():number	{

		return 1000.0/this.delta;
	}

}

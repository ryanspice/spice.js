/* @flow */

import type {
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

		this.timer = new Date().getTime();

		this.rate = rate / 1000.0;

		this.offset = this.timer - 1000.0 / rate;

		this.delta = 0.0;

		//Fake Flow Interfacing
		return (this:IPace);
	}

	/*
	*
	*/

	Time(app:any):number {

		this.timer = new Date().getTime();

		return this.timer - this.offset;
	}

	/*
	*
	*/

	Step(app:any):boolean {

		this.delta = this.Time(app);

		let step = this.rate*this.delta;

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

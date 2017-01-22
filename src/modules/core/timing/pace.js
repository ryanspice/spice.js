/* @flow */

import type {
	IApp,
	IPace
} from "../interfaces/ITypes.js";

/*
* Base Pace class for caluclating the Pacing of the Application
*/

export default class Pace {

	delta:number;

	offset:number;

	rate:number;

	targetfps:number;

	currentTime:number;

	constructor(
		rate:number,
		fps:number
		) {

		this.targetfps = fps;

		this.currentTime = Date.now();

		this.rate = rate / 1000.0;

		this.offset = this.currentTime - 1000.0 / rate;

		this.delta = 0.0;

		//Fake Flow Interfacing
		return (this:IPace);
	}

	/*
	*	Delta between the last frame and this frame
	*/

	CalculateDelta():number {

		this.currentTime = Date.now();

		return this.currentTime - this.offset;
	}

	/*
	*
	*/

	Step():boolean {

		this.delta = this.CalculateDelta();

		let step:number = this.rate*this.delta;

		if (step>1.0) {

			//this.offset += Math.floor(step)/this.rate;
			this.offset += (step  << 0)/this.rate;

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

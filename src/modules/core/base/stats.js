/* @flow */

import type {
	IStatsBuffer
} from "../interfaces/ITypes";

/*
* The API buffer object used to store the last drawn information.
*/

export default class StatsBuffer {

	x:number = 0;

	y:number = 0;

	w:number = 0;

	h:number = 0;

	s:number = 0;

	a:number = 0;

	c:number = 0;

	colour:string = "";

	oldcol:string = "";

	constructor(col:string = "", colold:string = "") {

		this.init(col,colold);

		return (this:IStatsBuffer);
	}

	/*
	* Assigns stats.
	*/

	set(obj:Object):void {

		Object.assign(this,obj);

	}

	/*
	* Sets all values to default
	*/

	init(col:string = "", colold:string = ""):void {

		Object.assign(this,{
			x:0,
			y:0,
			w:0,
			h:0,
			s:0,
			a:0,
			c:0,
			colour:col||"",
			oldcol:colold||""
		});

	}

}

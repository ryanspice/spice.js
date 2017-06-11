/* @flow */

import {
	_EXPOSURE_,
	_IS_PROD_
} from "../../../config";

import Vector from "./vector";

import type {

	ICircle,
	IVisuals

} from "../interfaces/ITypes";

/** Basic Circle class
*/

export default class Circle extends Vector  {

	static onConstructor:Function = ()=>{};
	static count:number = 0;

	type:string = "circle";
	r:number;
	col:any;
	a:number;
	_id = Circle.count++;

    /** This is the constructor for the vector
    * @param {number} x - position.x
    * @param {number} y - position.y
    * @param {number} r - radius */

    constructor(
		x: number = 0,
		y: number = 0,
		r:number = 1,
		col:any = 1,
		a:any = 1,
		visuals:any
		) {

		super();

		this.x = x;
		this.y = y;
		this.r = r;
		this.col = col;
		this.a = a;

		this.visuals = visuals;
		if (this.visuals)
			this.visuals.appendNew(this);

		return (this:ICircle);
    };

		draw(){

			this.visuals.image_part(
				this.img,
				this.position.x,
				this.position.y,
				this.s,
				this.a,
				this.c,
				this.xx,//+this.off.x*16,
				this.yy,//+this.off.y*16,
				this.w,
				this.h
			);

		}

}

if ((_EXPOSURE_)&& (_IS_PROD_ == false)){

	window.Circle = Circle;

}

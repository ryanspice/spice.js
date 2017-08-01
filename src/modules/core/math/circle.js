/* @flow */

import {
	_EXPOSURE_,
	_IS_PROD_
} from "../../../config";

import Sprite from "../api/sprite";
import Vector from "./vector";

import type {

	ICircle,
	IVisuals

} from "../interfaces/ITypes";

/** Basic Circle class
*/

export default class Circle extends Sprite  {

	static onConstructor:Function = ()=>{};
	static count:number = 0;

	priority:number = 0;
	type:string = "circle";
	r:number;
	col:any;
	a:number;
	_id = Circle.count++;
	visuals:any;

    /** This is the constructor for the vector
    * @param {number} x - position.x
    * @param {number} y - position.y
    * @param {number} r - radius */

    constructor(
		x: number = 0,
		y: number = 0,
		r:number = 1,
		col:any,
		a:number = 1,
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

}

if ((_EXPOSURE_)&& (_IS_PROD_ == false)){

	window.Circle = Circle;

}

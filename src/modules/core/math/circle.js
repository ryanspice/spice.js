/* @flow */

import Vector from "./vector";

import type {

	ICircle

} from "../interfaces/ITypes";


/**
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
		a:any = 1
		) {

		super();

		this.x = x;
		this.y = y;
		this.r = r;
		this.col = col;
		this.a = a;

		return (this:ICircle);
    };

}

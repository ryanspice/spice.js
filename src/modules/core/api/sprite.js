/* @flow */

import Vector from "../math/vector";

import type {

	IVector

} from "../interfaces/ITypes";

/** Basic Circle class
*/
export default class Sprite extends Vector  {

	static onConstructor:Function = ()=>{};
	static count:number = 0;

	type:string = "_image_part";

	img:HTMLImageElement;
	priority:number = 1;

	xx:number;
	yy:number;
	w:number;
	h:number;

	s:number;
	a:number;
	c:number;
	_id = Sprite.count++;

    /** This is the constructor for the vector
    * @param {number} x - position.x
    * @param {number} y - position.y
    * @param {number} r - radius */

    constructor(
		img:HTMLImageElement = new Image(),
		x: number = 0,
		y: number = 0,
		s:number = 1,
		a:number = 1,
		c:number = 0,
		xx:number = 0,
		yy:number = 0,
		w:number = 0,
		h:number = 0
		) {

		super();

		this.img = img;
		this.x = x;
		this.y = y;
		this.s = s;
		this.a = a;
		this.c = c;
		this.xx = xx;
		this.yy = yy;
		this.w = w;
		this.h = h;

		return (this:any);
    };

};

window.Sprite = Sprite;

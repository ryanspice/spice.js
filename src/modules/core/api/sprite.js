/* @flow */
import * as config from "../../../config";

import Vector from "../math/vector";

import type {

	IVector,
	IVisuals

} from "../interfaces/ITypes";



/** Basic Circle class
*/
export default class Sprite extends Vector  {

	static onConstructor:Function = ()=>{};
	static count:number = 0;

	_id = Sprite.count++;
	type:string = "_image_part";

	img:HTMLImageElement;
	priority:number = 0;

	xx:number;
	yy:number;
	w:number;
	h:number;

	s:number;
	a:number;
	c:number;

	visuals:IVisuals|null;

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
		h:number = 0,
		visuals:any
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

		this.visuals = visuals;

		this.visuals = visuals;
		if (this.visuals)
		if (this.visuals.appendNew)
			this.visuals.appendNew(this);

		return (this:any);
    };

};

if ((config._EXPOSURE_)&& (config._IS_PROD_ == false)){

	window.Sprite = Sprite;

}

/* @flow */

import {
	_EXPOSURE_,
	_IS_PROD_
} from "../../../config";

import Vector from "../math/vector";

import Sprite from "./sprite";

import type {

	IVisuals,
	IVector,
	ISprite,
	ITile

} from "../interfaces/ITypes";

/** Basic Circle class
*/
export default class Tile extends Sprite  {

	_id = Tile.count++;
	type:string = "_image_part";

	visuals:any;

	off:IVector = new Vector(0,0);
	size:IVector = new Vector(0,0);


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
		visuals?:IVisuals
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

};

if ((_EXPOSURE_)&& (_IS_PROD_ == false)){

	window.Tile = Tile;

}

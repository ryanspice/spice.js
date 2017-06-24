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

	off:IVector = new Vector(0,0);
	size:IVector = new Vector(0,0);

	priority = 0;
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

		super(img,x,y,s,a,c,xx,yy,w,h,visuals);

		return (this:any);
    };

};

if ((_EXPOSURE_)&& (_IS_PROD_ == false)){

	window.Tile = Tile;

}

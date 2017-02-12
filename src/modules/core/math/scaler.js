/* @flow */

import type {

	IScaler

} from "../interfaces/ITypes";

/**
*/

export default class Scaler {

	x:number;
	y:number;
	s:number;

    /** This is the constructor for the vector
    * @param {number} x - position.x
    * @param {number} y - position.y
    * @param {number} s - position.s */

    constructor(x: number = 0,y: number = 0, s:number = 0) {

		this.x = x;
		this.y = y;
		this.s = y;

		return (this:IScaler);
    };

}

/* @flow */

import {_SJSClass as SJSClass} from '../base/sjs';

import type {
	IApp,
	IInput
} from '../interfaces/ITypes';

import {
	RequestAnimationFrame
} from "../../utils";

export default class APICore extends SJSClass {

	input:IInput = (this.app:IApp).input;

	canvas:HTMLCanvasElement;
	buffer:HTMLCanvasElement;
	blitter:HTMLCanvasElement;

	canvas_context:CanvasRenderingContext2D;
	buffer_context:CanvasRenderingContext2D;
	blitter_context:CanvasRenderingContext2D;
	overlay_canvas:CanvasRenderingContext2D;

	pollyFilledAnimationFrame:RequestAnimationFrame = RequestAnimationFrame;

	constructor(app:IApp) {

		super(app);

	}


}

/* @flow */

import {_SJSClass as SJSClass} from '../base/sjs';

export default class APICore extends SJSClass {

	input:any;

	canvas:HTMLCanvasElement;
	buffer:HTMLCanvasElement;
	blitter:HTMLCanvasElement;

	canvas_context:CanvasRenderingContext2D;
	buffer_context:CanvasRenderingContext2D;
	blitter_context:CanvasRenderingContext2D;
	overlay_canvas:CanvasRenderingContext2D;

	constructor(app:any) {

		super(app);

		this.input = this.app.input;

	}


}

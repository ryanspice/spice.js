
import {_SJSClass} from './core/sjs';

import Vector from './core/math/vector';

import Options from './client/options';

import Visuals from './visuals.js';

import Graphics from './graphics.js';

import Ext from './ext';

import Room from './core/room.js';

import Pace from './core/pace.js';

import Renderer from './renderer.js';

import Update from './update.js';

import _loader from './loader.js';

/** Client object controls all the details of the application.
* @module
* @protected */

export default class ClientCore extends _SJSClass {

	ext:Ext= Ext;

	room:Room= Room;

	visuals:Visuals = Visuals;

	graphics:Graphics = Graphics;

	loader:_loader = _loader;

	update:Update = Update;

	renderer:Renderer = Renderer;

	pace:Pace = Pace;

    /*
	*	Verify the Input for the Application Width and Height
	*/

    verifySize(size:number|vector=0,h:number=0):void {

        let x:number = 0, y:number = 0;

        if (typeof size == "vector") {

            x = size.x;
            y = size.y;

        }
        else {

            x = this.width = this.setWidth = size;
            y = this.height = this.setHeight = h;

        }

        this.projectSize = new Vector(x,y);

    }

	/*
	*	Initalize the client's loop and loopdata
	*/

	initalize(loop:Object,loopdata:Object,scale:number):void {

		this.scale = scale;

		this.client_f = loop;

		this.client_data = loopdata;

		requestAnimationFrame(this.client_f);

		setTimeout(()=>{

			this.client_data();

		},1000/59);

		/* STOPS HERE */
		return;

		/*Assign the cursor and log the time it took to get here _WIP  */

		this.app.ext.cursor.set(this.app.ext.cursor.def);

		this.app.ext.time = (( new Date().getTime())-SpiceJS.TimeToBuild)*1;

	}

	/*
	*	Main game loop.
	*	    //loop(a):void {  Not sure why A was here?
	*/

    loop():void {

        let loop = () => {

            //Return true or false if resized, update size
            this.resized = this.update.size(this);

            //Update scale
            this.scale = this.update.scale(this);

            //Draw frame
            this.visuals.flip(this.scale);

            //Update frames per second
            this.fps = this.update.step.tick(this.second,this.mainLoop,this.app);

            //Update client
            requestAnimationFrame(this.client_f);

        }

		/*
		DISABLED, reenable for future Debugging clause

		 	SpiceJS.statistics.monitor(loop).then(function(){

		        SpiceJS.statistics.log("fps",SpiceJS.controller.list().fps,'state');
		        SpiceJS.statistics.log("scale",SpiceJS.controller.list().client.scale,'state');

		    });
		*/

		loop();

    }

}

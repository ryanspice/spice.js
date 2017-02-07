/* @flow */

import {_SJSClass} from './core/base/sjs';

import Vector from './core/math/vector';

import Options from './core/base/options';

import Visuals from './visuals.js';

import Graphics from './graphics.js';

import Ext from './ext';

import Room from './core/base/room.js';

import Pace from './core/timing/pace';

import type {
	IExt,
	IClientCore,
	IVisuals,
	IRoom,
	IPace,
	IVector
} from "./core/interfaces/ITypes";

import Renderer from './renderer.js';


import _loader from './loader.js';

/** Client object controls all the details of the application.
* @module
* @protected */

export default class ClientCore extends _SJSClass {

	ext:IExt;

	room:IRoom;

	visuals:IVisuals;

	graphics:Graphics;

	loader:_loader = _loader;


	renderer:Renderer = Renderer;

	pace:IPace = Pace;

	constructor(app:any){

		super(app);

		this.room = new Room(this.app);

		this.graphics = new Graphics(this.app);

		this.visuals = new Visuals(this.app);

		this.ext = new Ext(this.app);

		return (this:IClientCore);
	}

    /*
	*	Verify the Input for the Application Width and Height
	*/

    verifySize(size:number|IVector=0,h:number=0):void {

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

	initalize(loop:Object, loopdata:Object, scale:number):void {

		this.scale = scale;

		this.client_f = loop;

		this.client_data = loopdata;

		requestAnimationFrame(this.client_f);

		setTimeout(()=>{

			this.client_data();

		},1000/59);
		/*Assign the cursor and log the time it took to get here _WIP  */

		//this.app.ext.cursor.set(this.app.ext.cursor.def);

		return;
	}

	/*
	*	Main game loop. Removed arrow function, kept comment for safe.
	*/

    loop():void {

		//const loop:Function = ()=>{

		//Return true or false if resized, update size
		this.resized = this.update.size(this);

		//Update scale

		this.update.scale(this);

		//Draw frame
		console.log
		this.visuals.flip(this.update.scaler.s);

		//Update frames per second
		this.fps = this.update.step.tick(this.second,this.mainLoop);

		//Update client
		requestAnimationFrame(this.client_f);

		/*
		}

		DISABLED, reenable for future Debugging clause

		 	SpiceJS.statistics.monitor(loop).then(function(){

		        SpiceJS.statistics.log("fps",SpiceJS.controller.list().fps,'state');
		        SpiceJS.statistics.log("scale",SpiceJS.controller.list().client.scale,'state');

		    });
		*/

		//loop();

    }

}

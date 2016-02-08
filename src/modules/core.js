"strict mode"
/** @module core */


/** Name. */
export const name = 'core';

import _options from './options.js';

import _input from './input/input.js';

import _math from './math/math.js';

import _client from './client.js';

import {_Core} from './interfaces.js';

import _canvas from './canvas.js';

import _user from './user.js';

import _ext from './ext.js';

import Loader from './loader.js'; // (unfinished) To be built into application (to override current)

import Particles from './particles.js'; // (unfinished) To be built into application

window.SJSParticleController = Particles; // Temporary for snowflakes


const date = new Date();

/**
* Core of the framework, initalizes client, input and listeners.
* @protected
* @module
*
*/

 class _core extends _Core {

    get version(){

        return this.constructor.VN;

    }

    set version(val){

        this.constructor.VN = val;

    }

    get fps() {

    //    return this._fps;
        return Application.getFps();

    }


    /** Builds the core modules of the Application. */

    constructor(){

        super();

        //setInterval(()=>{console.log(this.getFps())},200);

        this.time = 0;

        this.main = {name:"Main",init:function() {},update:function() {},draw:function() {return true;}};

        this.options = _options;

        this.user = _user;

        this.ext = _ext;

        this.input = _input;

        this.canvas = _canvas;

        this.client = _client;

        this.math = new _math();

    }


    Init(name, w, h){

        //console.log(this);
       var self = this;

       //Build client from prototype
       this.client = this.Construct(this.client.prototype,this.client.constructor);

       //Build canvas from prototype
       this.canvas =  new _canvas(this);

       console.log(this.canvas);

       //Use arrow function if available
       var usearrow = true;

       if (usearrow)
       {

           setTimeout(() => {

               function AppLoop(){
                   self.client.loop();
               }

               function AppLoopData(){
                   self.client.loopData();
               }

               this.client.initalize(AppLoop,AppLoopData,this.scale);

           }, this.time);

       }
       else
           {

               setTimeout(	(function(){

                           function AppLoop(){
                               self.client.loop();
                           }

                           function AppLoopData(){
                               self.client.loopData();
                           }

                           self.client.initalize(AppLoop,AppLoopData,self.scale);

               }),this.time);

           }

       this.client.init(name,w,h);

       this.input = new this.input(this);

    }

    OnLoad(self){

        //console.log(this)
        self.Init("",480,320);

    }

    OnApplicationLoad(evt){

        //console.log(evt)
       //Run .OnLoad
       evt.target.app.OnLoad(evt.target.app);

                               //console.log(this)
       console.log(evt.target.app.getCurrent().name+': OnApplicationLoad');

    }

    Listener(obj, evt, listener, param){

        //If addEventListener exist, add it, otherwise attachEvent
        if (obj.addEventListener)
            obj.addEventListener(evt, listener, false);
        else
            obj.attachEvent("on" + evt, listener);

        obj.app = window.apps[this.id] = this;

    }

    Construct(prototype,constructor){

       //Cache vars
       var isObj = false;
       var obj = prototype;
       var proto = prototype;
       var construct = constructor;
       var ret = {};

       //if prototype contains a prototype and constructor
       if (typeof obj.prototype !== 'undefined')
       if (typeof obj.constructor !== 'undefined')
           {
               construct = obj.constructor;
               proto = obj.prototype;
               isObj = true;
           }

       //Grab type of constructor
       var c = typeof construct;

       //Return & Create object based on constructor
       switch(c)
       {
       case 'undefined':

           //Use only the prototype
           ret = Object.create(proto);

       break;
       case 'object':

           //Use constructor as object
           ret = Object.create(proto,construct);

       break;
       case 'function':

           //Use constructor as function
           ret = Object.create(proto,construct(this));

       break;
       default:

           //Expected a type
       console.log("Expected 'object' or 'function': Type is "+c);
       }
       if (isObj)
           prototype = ret;


       return ret;

    }


    click(event, anchorObj){

       //If .click
       if (anchorObj.click)
           anchorObj.click();
           else
       if(document.createEvent)
       {

           if(event.target !== anchorObj)
           {

               var evt = document.createEvent("MouseEvents");

               evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

               anchorObj.dispatchEvent(evt);

           }

       }

    }


    //Legacy

    create(a){

        return this.Construct(a||{},this.client.room);
    }

    getFps(){

         return this.client.update.step.fps;
    }

    getCurrent(){

        return this.client.update.state.current;
    }

    getConnection(){

        return this.ext.connect.offline;
    }

    getConnectionError(){

        return this.ext.connect.error;
    }

    getConnectionAttempts(){

        return this.ext.connect.connectionAttempts;
    }

    getDelta(){

        return this.client.update.step.delta;
    }

    getScale(){

        return this.client.scale;
    }

    getWidth(){

        return this.client.setWidth;
    }

    getHeight(){

        return this.client.setHeight;
    }

    getScaledWidth(){

        return this.client.width;
    }

    getScaledHeight(){

        return this.client.height;
    }

    setTitle(title){

        return (document.title==title?(document.title):(document.title=title));

    }

    setState(state){

        return this.client.update.state.set(state,true);
    }

    toggleWidescreen(){

         return this.client.update.fullscale = !this.client.update.fullscale;
    }


}

export default _core;

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

     /**  @type {Number} */

    get version(){

        return this.constructor.VN;

    }

    /**  @type {Number} */

    set version(val){

        this.constructor.VN = val;

    }

    /**  @type {Number} */

    get fps() {

        return Number(this.client.fps);

    }

    /**
    * Method invoked to start the application
    * @method
    * @param {x} Width of the canvas
    * @param {y} Height of the canvas
    */

    start( w, h){

        let name = "";

        let self = this;

       this.client = this.Construct(this.client.prototype,this.client.constructor);

       this.canvas =  new _canvas(this);

       var usearrow = true;

       /**
       /* If use arrow functions is set to true
       /*   unknown and keeping for debugging
       */

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

    /**
    * OnLoad event
    * @method
    * @param {self} Pass a reference to the canvas.
    */

    OnLoad(self){

        self.start(480,320);

    }

    /**
    * OnApplicationLoad event (when the first cycle happens)
    * @method
    * @param {self} Pass a reference to the event.
    */

    OnApplicationLoad(evt){

        //console.log(evt)
        //Run .OnLoad
        evt.target.app.OnLoad(evt.target.app);

        console.log(evt.target.app.getCurrent().name+': OnApplicationLoad');

    }

    /**
    * Listener event polyfill
    * @method
    * @param {obj} object that it is firing on
    * @param {evt} passing the event
    * @param {listener} listener type
    * @param {param} any paramaters
    */

    Listener(obj, evt, listener, param){

        if (typeof obj[0] === "object")
            obj = obj[0] || window;

        //If addEventListener exist, add it, otherwise attachEvent
        if (obj.addEventListener)
            obj.addEventListener(evt, listener, false);
        else
            obj.attachEvent("on" + evt, listener);

        obj.app = window.apps[this.id] = this;

    }

    /**
    * Constructs prototype/constructor
    * @param {number} x - position.x
    * @param {number} y - position.y
    */

    Construct(prototype,constructor){

       //Cache vars
       var isObj = false;
       var obj = prototype;
       var proto = prototype;
       var construct = constructor;
       var ret = {};

       //if prototype contains a prototype and constructor
       if (typeof obj.prototype !== 'undefined')
           if (typeof obj.constructor !== 'undefined') {
               construct = obj.constructor;
               proto = obj.prototype;
               isObj = true;
           }

       //Grab type of constructor
       var c = typeof construct;

       //Return & Create object based on constructor
       switch(c) {

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

       if (isObj)   {
           prototype = ret;
       }

       return ret;

    };

    /**
    * on click(triggerclick?)
    * @param {number} x - position.x
    * @param {number} y - position.y
    */

    click(event, anchorObj){

       //If .click
       if (anchorObj.click) {

           anchorObj.click();

       }    else
       if(document.createEvent)
       {

           if(event.target !== anchorObj)
           {

               var evt = document.createEvent("MouseEvents");

               evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

               anchorObj.dispatchEvent(evt);

           }

       }

    };

    /**
    * Builds the core modules of the Application.
    */

    constructor(){

        super();

        this.time = 0;

        this.main = {name:"Main",init:function() {},update:function() {},draw:function() {return true;}};

        this.user = _user;

        this.ext = _ext;

        this.input = _input;

        this.canvas = _canvas;

        this.client = _client;

        this.math = new _math();

        let watch = (this.options = _options).watch;

        if (watch.fps==true)    {

            setInterval(()=>{console.log(this.fps)},200);

        }

    };


    /**
    * Legacy Functions
    *
    *
    *
    *
    *
    *
    *
    *
    *
    *
    */

    create(a){

        return this.Construct(a||{},this.client.room);
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

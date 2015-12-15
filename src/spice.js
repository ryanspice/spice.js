/*	SpiceJS by Ryan Spice	*/

let Steve = "cool";

const Windows = window.Windows =  (typeof Windows=='undefined'?window:Windows);

import * as utils from './modules/utils.js';

import _options from './modules/options.js';
import _user from './modules/user.js';
import _ext from './modules/ext.js';

import _input from './modules/input.js';
import Visuals from './modules/visuals.js';

import _client from './modules/client.js';
import _canvas from './modules/canvas.js';

import Loader from './modules/loader.js';
import Particles from './modules/particles.js';
import Statistics from './modules/statistics.js';

window.utils = utils.default;
window.Stats = Statistics;
window.SJSParticleController = Particles;


if (typeof window.scripts != 'array')
{
    window.scripts = [];
}

var SpiceJS = window.SpiceJS = Object.create({

	//Initalize SpiceJS Controller
	init:function(){

        //let time = this.TimeToBuild = new Date().getTime();

		this.window = window;

		//if no apps have been defined, create a new array
		if (!this.window.apps)
			this.window	.apps = new Array(1);

		//if appsNextId isnt larger or equal to 0 assign it to 0
		if (!this.window.appsNextId>=0)
			this.window	.appsNextId = 0;

        //Setup Statistics and Monitoring
        this.statistics = new this.statistics(this);

		return this;
	},

    statistics:Statistics,

	//return details and information on the current apps
	controller:{

		list:function(id){

            if (id)
                return window.apps[id];

			if (window.apps.length>1)
				return window.apps;
				else
				return window.apps[0];
		},


	},

	//

    logs:function(type){

        this.statistics.log("uptime",new Date().getTime()-this.TimeToBuild,'build');


        return this.statistics.details(type);

    },

	get:function(){

		return this.proto;
	},

	//

    create:function(target){

        let tempReference = {};

        let tempReferenceId = null;

        let listReference = null;

        let time = new Date().getTime();

        this.statistics.monitor(()=> {

                this.name = "scriptloadtime";

                window.utils.loadExternalJS(window.scripts);

                tempReference = this.create2();

                tempReferenceId = (tempReference.id);

            }).then(() => {

                        this.statistics.log("compileloadtime", new Date().getTime() - time, 'build');

                        listReference = this.controller.list(tempReferenceId);

                        this.statistics.monitor(() => {

                                this.name = "loadtime";

                                this.initListeners(listReference);

                            }).then(() => {

                                    this.statistics.log("scriptloadtime", new Date().getTime() - time, 'build');

                                    this.statistics.log("build",time);

                                });

                })

        return tempReference;

    },

	create2:function(){


        this.window = window;

		//temp stores the app during the create process, it is then returned
		var temp = {};
		temp = Object.create({

			constructor:{
				//Version Number
				VN:{
					//Config
					writable: false,
					configurable:false,
					enumerable:true,

					//VN
					value:'0.7.0.15.12.11'
				},

				//Build Client, Instantiate Loop, Build Canvas, Initalize Client
				Init:{

					//Config
					writable: false,
					configurable:false,
					enumerable:false,

					//Function
					value:function(name,w,h){

						//Store self
						var self = this;

						//Build client from prototype
						this.client = this.Construct(this.client.prototype,this.client.constructor);

						//Build canvas from prototype
						(this.canvas = this.Construct(this.canvas.prototype,this.canvas.constructor)).init();

                        setTimeout(() => {

    						function AppLoop(){
    							self.client.loop();
    						}

    						function AppLoopData(){
    							self.client.loopData();
    						}

    						this.client.initalize(AppLoop,AppLoopData,this.scale);

                        }, this.time);

						//Delay start the loop
                        /*

                            OLD NON PROMISE BASED LOOP, build fallback

						setTimeout(	(function(){

									function AppLoop(){
										self.client.loop();
									}

									function AppLoopData(){
										self.client.loopData();
									}

									self.client.initalize(AppLoop,AppLoopData,self.scale);

						}),this.time);
                        */
						//Initalize client
						this.client.init(name,w,h);


						// INIT INPUT


						this.input = new this.input(this);

					}

				},

				//Run by OnApplicationLoad, App.OnLoad to be overwritten.
				OnLoad:{

					//Config
					writable:true,
					configurable:false,
					enumerable:false,

					//Function
					value:function(self){

						//Default to App.
						self.Init("",480,320);

					}

				},

				//Runs on DOMContentLoaded
				OnApplicationLoad:{

					//Config
					writable:false,
					configurable:false,
					enumerable:false,

					//Function
					value:function(evt){

						//Run .OnLoad
						evt.target.app.OnLoad(evt.target.app);
					console.log(evt.target.app.getCurrent().name+': OnApplicationLoad');

					}
				},

				//AddEvent Listener
				Listener:{

					//Config
					writable:false,
					configurable:false,
					enumerable:false,

					//Function
					value:function (obj, evt, listener, param) {

						//If addEventListener exist, add it, otherwise attachEvent
						if (obj.addEventListener)
							obj.addEventListener(evt, listener, false);
						else
							obj.attachEvent("on" + evt, listener);

						obj.app = window.apps[this.id] = this;
					}
				},

				//Construct Objects from this.Construct(prototype,[constructor])
				Construct:{

					//Config
					writable:false,
					configurable:false,
					enumerable:false,

					//Function
					value:function(prototype,constructor){

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
				},

				//id:{writable:true, configurable:false, enumerable:false, value:0 },
				//canvas:{writable:true, configurable:false, enumerable:false, value:0 },
				//client:{writable:true, configurable:false, enumerable:false, value:0 },
				//ext:{writable:true, configurable:false, enumerable:false, value:0 },

				//Allows artificial clicking of elements
				click:{writable:false, configurable:false, enumerable:false, value:function(event, anchorObj) {

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
								var allowDefault = anchorObj.dispatchEvent(evt);
								// you can check allowDefault for false to see if
								// any handler called evt.preventDefault().
								// Firefox will *not* redirect to anchorObj.href
								// for you. However every other browser will.
							}
						}
					}
				},

				//App.create for creating objects with app, visuals and graphics inherited
				create:{writable:true, configurable:false, enumerable:false, value:function(a){ return this.Construct(a||{},this.client.room); } },

				//Getters for Common Data
				getFps:{writable:false, configurable:false, enumerable:false, value:function(){ return this.client.update.step.fps; } },

				getCurrent:{writable:false, configurable:false, enumerable:false, value:function(){ return this.client.update.state.current; } },

				getConnection:{writable:false, configurable:false, enumerable:false, value:function(){ return this.ext.connect.offline; } },

				getConnectionError:{writable:false, configurable:false, enumerable:false, value:function(){ return this.ext.connect.error; } },

				getConnectionAttempts:{writable:false, configurable:false, enumerable:false, value:function(){ return this.ext.connect.connectionAttempts; } },

				getDelta:{writable:false, configurable:false, enumerable:false, value:function(){ return this.client.update.step.delta; } },

				getScale:{writable:false, configurable:false, enumerable:false, value:function(){ return this.client.scale; } },

				getWidth:{writable:false, configurable:false, enumerable:false, value:function(){ return this.client.setWidth; } },

				getHeight:{writable:false, configurable:false, enumerable:false, value:function(){ return this.client.setHeight; } },

				getScaledWidth:{writable:false, configurable:false, enumerable:false, value:function(){ return this.client.width; } },

				getScaledHeight:{writable:false, configurable:false, enumerable:false, value:function(){ return this.client.height; } },

				setTitle:{writable:false, configurable:false, enumerable:false, value:function(title){ return (document.title==title?(document.title):(document.title=title)); } },

				setState:{writable:false, configurable:false, enumerable:false, value:function(state){ return this.client.update.state.set(state,true); } },

				toggleWidescreen:{writable:false, configurable:false, enumerable:false, value:function(){ return this.client.update.fullscale = !this.client.update.fullscale; } },

				time:{writable:true, configurable:false, enumerable:false, value:0 },

				main:{writable:true, configurable:false, enumerable:false, value:{name:"Main",init:function() {},update:function() {},draw:function() {return true;}} }
			},

			prototype:{

				//Prototype Vars

				//Global Options Panel
				//	These options have effect OnLoad only.

				options:_options,

				//Facebook User Information
				//	Current API structure is depreciated, and therefore this is unsuable
				//	Constructor not implemented

				user:_user,

				//App.ext - Client extensions
				//	These operations are extended variations on the canvas API.

				ext:_ext,

		        input:_input,

				//App.canvas - Canvas Element
				//	These operations are extended variations on the canvas API.

				canvas:_canvas,

				//Application.client;
				//	Handles game logic, audio, graphics, visuals
				client:_client
	},

			});

			temp = Object.create(temp.prototype,temp.constructor);

            temp.window = this.window;
            temp.document = document;

			temp.id = this.window.appsNextId;

			this.window.apps[temp.id] = temp;

			this.window.appsNextId++;

			return this.window.apps[temp.id];
		},

        initListeners:function(temp){


            			temp.Listener(document, "DOMContentLoaded", temp.OnApplicationLoad);

            return temp;
        }

	}).init();

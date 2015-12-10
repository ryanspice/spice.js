/*	SpiceJS by Ryan Spice	*/
/*
	Time: The time in x which this document begins
	SpiceJS:
		Creates a SpiceJS object which acts as a controller for your application.
		SpiceJS.init() - builts variables into the window for keeping track of the application(s)
		SpiceJS.get() - returns the app prototype
		SpiceJS.create() - returns an instanciated app
		SpiceJS.controller - Object
						.list()	- returns a list of currently running applications. Returns app if only one exists.
	TODO:
		Ensure varable stack
		Get Functions for Each public requested input
		Measure Touch/Keyboard sensitivity differences
		Research need for confining cursor
*/

const Windows = window.Windows =  (typeof Windows=='undefined'?window:Windows);

//import Loader from './modules/loader.js';

import * as utils from './modules/utils.js';
window.utils = utils.default;

import Particles from './modules/particles.js';

import SJSParticleController from './modules/particles.js';

window.SJSParticleController = SJSParticleController;

import Statistics from './modules/statistics.js';

import Input from './modules/input.js';

import Cookies from './modules/cookies.js';

//console.log(Cookies);

window.Stats = Statistics;

var stallon = 0;








var Steve;
var LOG_ENABLE = (false);

var log = ((LOG_ENABLE)?function(log){console.log(log)}:function(){});

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
					value:'0.7.0.15.11.17'
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
						log(evt.target.app.getCurrent().name+': OnApplicationLoad');

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
							log("Expected 'object' or 'function': Type is "+c);
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

				options:{
                    overridescroll:false,
					drag:0,
					targetfps:60,
					mute:false,
					paths:{
						data:"data/",
						images:"images/",
						url:""
					},

					canvas:{
						override:false,			//Toggle the use of options.canvas
						name:'canvas',			//Use canvas.name
						buffername:'buffer',	//Use canvas.buffer
						buffer:false,			//Toggle the use of double-buffering
						background:'#000000',		//Assign canvas element background colour
						position:{				//Assign canvas element position properties
							//position:'absolute',
							//top:0,
							//left:window.innerWidth/2,
							//center:true,
							//z:1
							position:'absolute',
							top:"",
							left:window.innerWidth*2,
							//left:"",
							center:false,
							z:1
						},
						size:{					//Assign canvas size properties
							width:window.innerWidth,
							height:window.innerHeight
						}
					},

					msFlags:{

						msZoom:false,

					},

					flags:{						//Feature Flags
						canvas:true,
						mstouch:true,
						seamless:true,
						tight:true,
						touchprevent:true,
					},

					override:{					//Override Functions
						keyboard:true,
						mouse:true,
						MSHoldVisual:false,
						SelectStart:false,
						ContextMenu:true,
						Drag:true
					},

			//Return Options Value
            get:function(attr){

				//If Attribute
				if (attr)
				{

					//Get list of apps
					var list = SpiceJS.controller.list();

					//list is object
					if (typeof list == "object")
					{
						//return window.apps.option.
						for (var attrname in this)
							if (attrname==attr)
								return eval("list.options." + attrname );
					}
					else
					{
						for(var i = window.apps.length-1;i>=0;i--)
							for(var attrname in this)
								if (attrname==attr)
								{
									var l = [];
									l.push(eval("list["+i+"].options." + attrname ));
								}
						return l;
					}

				return null;
				}
				else
				return this;
			},

			set:function(options){

				for (var attrname in options) { this[attrname] = options[attrname]; };

				return this;
			}

		},

				//Facebook User Information
				//	Current API structure is depreciated, and therefore this is unsuable
				//	Constructor not implemented

				user:{
					//	//To ensure your data is filled, use a callback return your response data.
					//	var facebook = function(){ return App.user.pull();};
					//
					//	//Your facebook ID, callback function(){}
					//	App.user.fbconnect(id, facebook)
					name		:"",
					id			:"",
					locale		:"",
					gender		:"",
					updated_time:"",
					timezone	:"",
					quotes		:"",
					response	:{},

					//returns the response object
					get:function(){return this.response;},

					//facebook connection
					fbconnect:function con(appid,callback){
							window.fbAsyncInit = function() {
							FB.init({
							appId      : appid,
							status     : true, // check login status
							cookie     : true, // enable cookies to allow the server to access the session
							xfbml      : true  // parse XFBML
							});
							FB.login(function(){
								FB.api('/me/feed', 'post', {message: 'Hello, world!'});}, {scope: 'publish_actions'});
							};

						  // Load the SDK asynchronously
						  (function(d){
						   var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
						   if (d.getElementById(id)) {return;}
						   js = d.createElement('script'); js.id = id; js.async = true;
						   js.src = "//connect.facebook.net/en_US/all.js";
						   ref.parentNode.insertBefore(js, ref);
						  }(document));

						  // Here we run a very simple Flappy of the Graph API after login is successful.
						  // This testAPI() function is only called in those cases.

                          /*
                          function testAPI() {
							log('Welcome!  Fetching your information.... ');

							FB.api('/me', function(response) {
								App.user.facebook(response);
								callback(response);
							  log('Good to see you, ' + response.name + '.');
							});
						  }


                          */
						},

					//facebook callback
					facebook:function(response){
						this.response = response;
						this.name = this.response.name;
						this.id = this.response.id;
						this.locale = this.response.locale;
						this.gender = this.response.gender;
						this.updated_time = this.response.updated_time;
						this.timezone = this.response.timezone;
						this.quotes = this.response.quotes;
					}

				},

				//App.ext - Client extensions
				//	These operations are extended variations on the canvas API.

				ext:{

					constructor:function(app){

						return{

							app:{writable:false, configurable:false, enumerable:false, value:app},

							init:{writable:false, configurable:false, enumerable:false,value:function(name){

								//Set app/document title

								this.app.setTitle(document.title+"."+this.app.main.name);

								//Construct App.ext components

								this.app.Construct(this.useragent).init();

								this.app.Construct(this.metatag).init();

								this.app.Construct(this.cookies).init();

								this.app.Construct(this.cursor).init();

								this.app.Construct(this.connect).init();

								}
							}
						}
					},
					prototype:{

						//UserAgent Information
						//	Assists in detecting the platform that you are running on.

						useragent:{

							//	Use useragent lightly as some would assume that sniffing the useragent is unreliable. I digress.

							prototype:{

								//Cached Navigator.userAgent
								agent:navigator.userAgent,

								//
								mouse:false,
								touch:false,
								keyboard:false,
								windows:false,
								chrome:false,
								safari:false,
								iemobile:false,
								nokia:false,
								ie:false,
								ios:false,
								blackberry:false,
								playbook:false,
								bb10:false,
								mobile:false,

								//Match user agent for IE
								IE: function(){

									return  this.agent.match(/Trident/i) ? true : false;
								},

								//Match user agent for iOS
								iOS:function(){

									return this.agent.match(/iPhone|iPad|iPod/i) ? true : false;
								},

								//Match user agent for Nokia
								Nokia: function(){

									return  this.agent.match(/Nokia/i) ? true : false;
								},

								//Determine mobile or windows based on useragent
								Mobile: function(){

									return this.mobile = this.IEMobile() || this.BlackBerry() || this.iOS() || this.Android() || this.Nokia();
								},

								//Match user agent for Chrome
								Chrome: function(){

									return this.chrome = this.agent.match(/Chrome/i) ? true : false;
								},

								//Match user agent for Safari
								Safari: function(){

									return (this.agent.match(/Safari/i) || this.agent.match(/AppleWebKit/i)) && !this.agent.match(/Chrome/i) ? true : false;
								},

								Desktop: function(){

									return this.windows = this.IEMobile() || this.IE() || !this.Mobile();
								},

								//Match user agent for Android
								Android: function(){
									return this.agent.match(/Android/i) ? true : false;
								},

								//Match user agent for IEMobile
								IEMobile: function(){

									var trident = this.agent.match(/IEMobile/i);
									var windowsphone = this.agent.match(/Windows Phone/i);
									var touch = this.agent.match(/touch/i);

									return  trident || windowsphone || touch ? true : false;
								},

								//Match user agent for Blackberry
								BlackBerry:function(){
									this.playbook = this.agent.match(/PlayBook/i) || false;
									this.bb10 = this.agent.match(/BB10/i) || false;
									return this.agent.match(/BlackBerry/i)||this.playbook||this.bb10 ? true : false;
								},

							},

							constructor:function(app){

								//Return constructed useragent object
								return {
									app:{writable:false, configurable:false, enumerable:false, value:app},

									init:{writable:false, configurable:false, enumerable:false, value:function(){

											//Query Browser
											this.chrome = this.Chrome();
											this.safari = this.Safari();
											this.iemobile = this.IEMobile();
											this.nokia = this.Nokia();
											this.ie = this.trident = this.IE();

											this.blackberry = this.BlackBerry();
											this.ios = this.iOS();
											this.android = this.Android();

											this.touch = this.Mobile();
											this.mouse = !this.Mobile() || this.BlackBerry();

											this.keyboard = this.Desktop() ||  this.BlackBerry();


											this.Mobile();
											this.Desktop();

											this.app.ext.useragent = this;
											//return this;
										}
									}
								}
							}

						},

						//Cookie Storage
						//	Polyfill provided by ScottHamper
						//	https://github.com/ScottHamper/Cookies#api-reference

						cookies:Cookies,

						//MetaTag Handler
						//	Assists in dynamically applying metatags.
						//	Automatically applies Microsoft, Apple and common metatags.

						metatag:{

							constructor:function(app){

								//Return constructed metatag object.
								return {
									app:{writable:false, configurable:false, enumerable:false, value:app},

									init:{value:function(){

											//execute polyfill
											this.metaAppend(this.metaTag("msapplication-tap-highlight",this.ms_taphighlight));
											this.metaAppend(this.metaTag("apple-mobile-web-app-capable",this.apple_webapp));
											this.metaAppend(this.metaTag("apple-mobile-web-app-status-bar-style",this.apple_statusbar));
											this.metaAppend(this.metaTag("cursor-event-mode","native"));
											this.metaAppend(this.metaTag("touch-event-mode","native"));
											this.metaAppend(this.metaTag("HandheldFriendly","True"));

											//if (this.devicewidth)
											this.metaAppend(this.metaTag("viewport","width=device-width, user-scalable=no"));
											//if (this.devicedpi)
											this.metaAppend(this.metaTag("viewport","target-densitydpi="+this.app.client.setWidth+",-webkit-min-device-pixel-ratio=1,min-resolution:="+this.app.client.setWidth+",-moz-device-pixel-ratio=1"));

											this.metaAppend(this.metaTag("viewport","user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1"));

											this.app.ext.metatag = this;

											//Return this
											return this;
										}
									}
								}
							},

							prototype:{

								//Default injected tags
								ms_taphighlight:"no",
								apple_webapp:"yes",
								apple_statusbar:"black",
								devicedpi:true,
								devicewidth:true,

								//Favicon. Automatically fills a standard metaAppend while needing only one argument, sets favicon
								metaFavicon: function(img) {

									this.metaAppend(this.metaLink(img,"shortcut icon","image/png"));
								},

								//Construct a standard metaLink element
								metaLink: function(href,rel,type) {

									//Create link element
									this.link = document.createElement('link');

									//Assign element values
									this.link.href = href;
									this.link.rel = rel;
									this.link.type = type;

									//Return link
									return this.link;
								},

								//Construct a standard metaTag element
								metaTag: function(name,content) {

									//Create link element
									this.meta = document.createElement('meta');

									//Assign element values
									this.meta.content = content;
									this.meta.name = name;

									//Return tag
									return this.meta;
								},

								//Append a meta object to the <head>
								metaAppend: function(meta) {

									//Append child to header
									if (this.head.appendChild(meta))
										{
										//Count number of headers
										this.count++;

										//Return success
										return true;
										}
									else
										return false;

								},

								//Cached data
								head:document.getElementsByTagName('head')[0],
								link:null,
								meta:null,
								count:0

							}

						},

						//Cursor Handler
						//	Logs last cursor and allows to easily change the cursor on the fly

						cursor:{

							constructor:function(app){

								//Return constructed metatag object.
								return {
									app:{writable:false, configurable:false, enumerable:false, value:app},
									init:{value:function(){

											this.set(this.wait);

											this.app.ext.cursor = this;
										},
									}
								}
							},

							prototype:{

								//Cached cursor types
								auto		: "auto",
								inherit		: "inherit",
								crosshair	: "crosshair",
								def			: "default",
								help		: "help",
								move		: "move",
								pointer		: "pointer",
								progress	: "progress",
								text		: "text",
								wait		: "wait",
								eresize		: "e-resize",
								neresize	: "ne-resize",
								nwresize	: "nw-resize",
								nresize		: "n-resize",
								seresize	: "se-resize",
								swresize	: "sw-resize",
								sresize		: "s-resize",
								wresize		: "w-resize",

								//Properties
								current 	: "auto",
								last 		: "auto",
								changed		:false,
								count		:0,
								lock		:0,
								delay		:4,

								set:function(cursor,lock){

									if	((this.last==cursor)||(this.lock))
										return;

									this.last = this.current;

									this.current = cursor;

									if (this.app.options.canvas.buffer)
										this.app.canvas.getBuffer().style.cursor=this.current;
										this.app.canvas.getCanvas().style.cursor=this.current;

									document.body.style.cursor=this.current;

									this.changed = true;
									this.count++;
								},

							},



						},

						//Connection Controller
						//	Assists in making ajax calls and allows you to test your connection.
						//	hostReachable by jpsilvashy - https://gist.github.com/jpsilvashy/5725579

						connect:{

							constructor:function(app){

								//Return constructed metatag object.
								return {
									app:{writable:false, configurable:false, enumerable:false, value:app},
									init:{value:function(){

											//Execute a test on the connection
											this.test();

											this.app.ext.connect = this;
										}
									}
								}
							},

							prototype:{

								//Properties
								offline:false,
								connectionAttempts:0,
								error:null,
								window:window,

								//An aJax request for a file of your choosing. runs callback once finished (response,arg0,arg1)
								load:function(address,callback,arg0,arg1){

									var xmlhttp;
									if (window.XMLHttpRequest)
									  {// code for IE7+, Firefox, Chrome, Opera, Safari
									  xmlhttp=new XMLHttpRequest();
									  }
									else
									  {// code for IE6, IE5
									  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
									  }
									xmlhttp.onreadystatechange=function()
									  {
									  if (xmlhttp.readyState==4 && xmlhttp.status==200)
										{
											callback(xmlhttp.response,arg0,arg1);
										}
									  }
									xmlhttp.open("GET",address,true);
									xmlhttp.send();

								},

								//An aJax request to check wither or not you are connected to the internet
								// jpsilvashy / hostReachable.js - https://gist.github.com/jpsilvashy/5725579
								hostReachable:function(){
return;
									//if local host return offline
									if ((this.window.location.hostname).toString()=="127.0.0.1")
										return false;

									// Handle IE and more capable browsers
									var xhr = new ( this.window.ActiveXObject || XMLHttpRequest )( "Microsoft.XMLHTTP" );
									var status;


									// Open new request as a HEAD to the root hostname with a random param to bust the cache
									xhr.open( "HEAD", "//" + this.window.location.hostname + "/?rand=" + Math.floor((1 + Math.random()) * 0x10000), false );

									// Issue request and handle response
									try {
										xhr.send();
										return ( xhr.status >= 200 && xhr.status < 300 || xhr.status === 304 );

									} catch (error) {

										if (this.connectionAttempts<1)
											this.connectionAttempts++,this.hostReachable();
										this.error = error;
										return false;
									}

								},

								test:function(app){

									return this.offline = this.hostReachable();
								}

							},


				}

			}
		},

		input:Input,

				//App.canvas - Canvas Element
				//	These operations are extended variations on the canvas API.

				canvas:{

					prototype:{

						//Cache canvas vars
						canvas:{},
						buffer:{},
						head:document.getElementsByTagName('head')[0],
						rendering_style:document.createElement('style'),
						canvasList:document.getElementsByTagName('canvas'),
						doc:document,

						//Gets

						getCanvas:function(){return this.canvas;},

						getBuffer:function(){return this.buffer;},

						setCanvas:function(c){this.canvas = c;},

						setBuffer:function(b){this.buffer = b;},

						setBackground:function(value) {

							if (this.app.options.canvas.buffer)
								this.buffer.style.background = value;

							this.app.options.canvas.background = this.canvas.style.background = value;

						},

						getBackground:function() {

							return this.buffer.style.background;
						},

						createCanvas:function(){

							var c = this.doc.createElement("canvas");

							c.id = this.app.options.canvas.name;

							this.doc.body.appendChild(c);

							return this.doc.getElementById(this.app.options.canvas.name);
						},

						createBuffer:function(){

							var c = this.doc.createElement("canvas");

							c.id = this.app.options.canvas.buffername;

							this.doc.body.appendChild(c);

							return this.doc.getElementById(this.app.options.canvas.buffername);
						},

						//Style canvas

						styleCanvas:function(){

							this.getCanvas().style.position = this.app.options.canvas.position.position;

							this.getCanvas().style.zIndex = this.app.options.canvas.position.z;

							if (this.app.options.canvas.buffer)
							{
								this.getBuffer().style.position = this.app.options.canvas.position.position;

								this.getBuffer().style.zIndex = this.app.options.canvas.position.z-1;
							}

							if (this.app.options.canvas.override)
							{

								this.getCanvas().style.left = this.app.options.canvas.position.left+"px";

								this.getCanvas().style.top = this.app.options.canvas.position.top+"px";

								if (this.app.options.canvas.buffer)
								{
									this.getBuffer().style.left = this.app.options.canvas.position.left+"px";

									this.getBuffer().style.top = this.app.options.canvas.position.top+"px";
								}

							}

						},

					},
					constructor:function(app){return{
						app:{value:app},
						init:{writable: false,  configurable:false, enumerable:false, value:function(){
								var getcanvas = document.getElementById(this.app.options.canvas.name);
								if (getcanvas)
									{
									this.setCanvas(getcanvas);
									if (app.options.canvas.buffer)
										{
										var getbuffer = document.getElementById(this.app.options.canvas.buffername);
										if (getbuffer)
											this.setBuffer(getbuffer);
											else
											{
											this.createBuffer();
											}
										}
									}
									else
									{
									this.setCanvas(this.createCanvas());
									if (this.app.options.canvas.buffer)
										this.setBuffer(this.createBuffer());
									}
								this.styleCanvas();
								this.rendering_style.innerHTML = this.rendering_style.innerText = '@-ms-viewport {width:100%;height:100%;} #Client, #Buffer, img[srcApp=".gif"],img[srcApp=".jpg"], img[srcApp=".png"] {image-rendering: -moz-crisp-edges;image-rendering:-o-crisp-edges;image-rendering: crisp-edges;image-rendering: -webkit-optimize-contrast;-ms-interpolation-mode: nearest-neighbor;}';
								this.head.appendChild(this.rendering_style);
								}
							}
						}
					}
				},

				//Application.client;
				//	Handles game logic, audio, graphics, visuals
				client:{

					constructor:function(app){

						return{

							app:{value:app},

							init:{writable: false,configurable:false,enumerable:false,value:function(name,w,h){

								//Set App.client.discription to the name
								this.discription = name;

								//Depreciated setWidth-height: use w + h
								//Set App.client.w
								//Set App.client.h
								//Set App.client.width
								//Set App.client.height
								//Set App.client.setWidth
								//Set App.client.setHeight

								this.w = this.width = this.setWidth = w;
								this.h = this.height = this.setHeight = h;

								//Build Extensions
								(this.app.ext = this.app.Construct(this.app.ext.prototype,this.app.ext.constructor)).init(name);

								//Build Visuals
								(this.visuals = this.app.Construct(this.visuals.prototype,this.visuals.constructor)).init(this);

								//Build
								(this.graphics = this.app.Construct(this.graphics.prototype,this.graphics.constructor)).init();

								//Build
								this.room = Object.create(this.room.prototype,this.room.constructor(this.app)).init();

								//Build
								(this.audio = this.audio = Object.create(this.audio.prototype,this.audio.constructor())).init();

								//Build
								(this.mainLoop = Object.create(this.pace.prototype,this.pace.constructor(this))).init(app.options.targetfps,app.options.targetfps);

								//Build
								(this.second = Object.create(this.pace.prototype,this.pace.constructor(this))).init(1.0,app.options.targetfps);

								//Build
								this.main = Object.create(this.app.main);

								//Build
								(this.update.state = Object.create(this.update.state.prototype,this.update.state.constructor(this))).init(this.main);


								}
							}

						}

					},

					//Client prototype, functions
					prototype:{

						//Client initalize
						initalize:function(loop,loopdata,scale) {

							//scale to scale
							this.scale = scale;

							//Assign client_f to loop
							this.client_f = loop;

							//Assign client_data to loop
							this.client_data = loopdata;

							//Request Animation Frame with this.client_f
							requestAnimationFrame(this.client_f);

                            //setTimeout(loopdata,1000 / 60);

                            setTimeout(()=>{

                                this.client_data();

                            },1000/60)


							this.app.ext.cursor.set(this.app.ext.cursor.def);

							this.app.ext.time = (( new Date().getTime())-SpiceJS.TimeToBuild)*1;

						},

						//Client features loop
                        loopData:function(){

                            if (this.app)
                            if (this.app.input)
                            if (this.app.input.update)
                            {
							//Return true or false, update audio
							//this.mute = this.audio.update();

                                    this.update.size_difference(this);

							        //Update Input
							        this.app.input.update();
                            }

                            setTimeout(this.client_data,1000 / 60);
                        },

						loop:function(a){

                            let loop = () => {

        						//Return true or false if resized, update size
        						this.resized = this.update.size(this);

        						//Draw frame
        						this.visuals.flip(this.scale);

        						//Update scale
        						this.scale = this.update.scale(this);

        						//Update frames per second
        						this.fps = this.update.step.tick(this.second,this.mainLoop,this.app);

        						//Update client
        						requestAnimationFrame(this.client_f);

                            }

                            SpiceJS.statistics.monitor(loop).then(function(){

                                SpiceJS.statistics.log("fps",SpiceJS.controller.list().getFps(),'state');
                                SpiceJS.statistics.log("scale",SpiceJS.controller.list().getScale(),'state');

                            });

						},

						//Client update loop
						update:{

							//Cache Vars
							last:{w:0,h:0},
							difference:{x:0,y:0},
							scaler:{s:1,x:1,y:1},
							scaling:true,
							scalediff:0,
							lastscale:1,
							fullscale:false,
							resized:false,
							set:0,
							frames:0,

							//Calculate client size
                            size_difference:function(app){

								//Calculate difference of with and height in this frame vs last frame
								this.difference = (app.Math.Vector.Difference(new app.Math.Vec(this.last.w.toFixed(4),this.last.h.toFixed(4)),new app.Math.Vec(app.width.toFixed(4),app.height.toFixed(4))));

                            },

							size:function(app){

								//If distance hasnt changed
								if ((this.difference.x + this.difference.y==0))
									return false;

								//Reassign width and height
								app.app.canvas.getCanvas().width  = this.last.w = app.width;
								app.app.canvas.getCanvas().height = this.last.h = app.height;
								app.app.canvas.getBuffer().width  = this.last.w = app.width;
								app.app.canvas.getBuffer().height = this.last.h = app.height;

								return true;
							},

							//Calculate client scale
							scale:function(app) {

								//Cache window
								var w = window;
								var ww = w.innerWidth;
								var wh = w.innerHeight;

								//Catch window
								if (this==w)
									return log('Warning: Scale: [this === window]');
									else
								if ((this.pause>0.5))
									return log('Warning: Paused',30);
									else
								if (this.set==1)
									return log('Warning: Scale: Duplicate Run',30);

								//Check if overriding
								if (app.app.options.canvas.override)
								{

									//Set width to override
									if (app.app.options.canvas.size.width!==app.width)
										app.width = app.app.options.canvas.size.width;
                                        if (document.body.clientHeight > window.innerHeight) {
                                            // scrollbar


                                        }


									//Set height to override
									if (app.app.options.canvas.size.height!==app.height)
										app.height = app.app.options.canvas.size.height;

									//Check if centered
									if (app.app.options.canvas.position.center)
										{

										//if not aligned
										if (app.app.options.canvas.size.left!==app.width/2)
											{

											//align
											app.app.canvas.getCanvas().style.left  = -app.width/2 + w.innerWidth/2+"px";

											//if buffer align
											if (app.app.options.canvas.buffer)
											   app.app.canvas.getBuffer().style.left  = -app.width/2 + w.innerWidth/2+"px";

											}
										}
								}
								else
								{

									//Set height to window height
									if (wh!==app.height)
										app.height = wh;

									//Set width to window width
									if (ww!==app.width)
										app.width = ww;

								}

								//Calculate sccalers
								this.set = 1;
								this.scaler.x = app.height/app.setHeight;
								this.scaler.y = app.width/app.setWidth;

								//Toggle wither or not to scale
								(this.fullscale)?this.scaler.s = this.scaler.x:this.scaler.s = (this.scaler.x<this.scaler.y)?this.scaler.x:this.scaler.y;

								//if scaler.s is not a number
								if (isNaN(this.scaler.s)){this.set = 0;return;}

								//Scale difference
								this.scalediff = this.scaler.s-this.lastscale;

								//If scaled different, scroll to the top
								//(this.scalediff)?app.app.input.scroll.to(true):app.app.input.scroll.to(false);

								this.set = 0;

								//Save scale
								this.lastscale = this.scaler.s;

								return this.scaler.s;
							},

							//Client state object
							state:{

								//State vars
								name:"",
								current:{},
								initalized:false,

								//State prototype
								prototype:{

									//State init prototype
									init:function(){
										if (typeof this.current.init !=='undefined')
										this.current.init();
									},

									//State update proto
									update:function(){
										if (typeof this.current.update !=='undefined')
											this.current.update();
									},

									//State draw proto
									draw:function(){
										if (typeof this.current.draw !=='undefined')
											this.current.draw();
									},

									//State set
									set:function(state,start){

										//log(this.input);
										//Set app input delay
										//this.app.input.delay = 1;

										//If state and not initialized, initalize via Object .create
										if ((this.name=state.name)&&(this.initalized=!0))
											{
											if (!state.started)
												this.current=Object.create(state,this.app.app.client.room);

											//if start, run init, current = started
											if (start)
												this.current.init(),this.current.started = true;

											}
									}

								},

								//State constructor
								constructor:function(app){

									//State Return app and init
									return	{

										//State Inherit app
										app:{value:app},

										//State Init function
										init:{value:function(state){

												//State Set state
												this.set(state,true);

												//State Initilizaed
												this.initalized = true;
											}
										}
									}
								}
							},
							step:{
								first:function(step,app){
									this.app = app;
									if ((typeof step == 'undefined')||(!step.Step(app)))
										return;
									this.fps = 1 * (this.clean() / step.delta * 1E3);
									this.delta = step.targetfps / this.fps;
									this.delta = Math.ceil(this.delta*100000)/100000;
									if ((this.delta>2.5))
										this.delta = 2.5;
									if (this.delta!==this.delta+1)
										this.app.client.delta = this.delta_speed = this.delta;
										else
										this.app.client.delta = this.delta_speed = 1;
										//log(this.delta);
									/* Increment Time to increase performance */
										if (this.fps==0)
											return;
										this.increment = -step.targetfps+ (step.targetfps*(step.targetfps / this.fps));
										this.adding+=this.increment;
										if (this.adding>step.targetfps)
											this.adding-=(this.adding/step.targetfps)*step.targetfps,this.addings+=1;
									return;
								},
								focus:function(){
									if (this.app.ext.freezeonfocus)
										return document.hasFocus();
									return true;
								},
								second:function(step,app){
									if ((typeof step == 'undefined')||(!step.Step(app)))
										return false;
									this.frames++;
									for(var s =this.addings;s>=0;--s)
										if (app.client.update.state.initalized)
											(this.focus())?app.client.update.state.current.update():null;
									this.addings = 0;
								},
								tick:function(a,b,app){
									this.first(a,app);
									this.second(b,app); /* Game Loop, Increment Frames */
									return this.fps;
								},
								clean:function(){
									var f = this.frames;
									this.frames = 0;	/* Reset Frames, Return Frames ( Pass F*/
									return f;
								},
								delta_speed:1,
								increment:0,
								addings:0,
								adding:0,
								delta:1,
								frames:0,
								fps:1
							}
						},
					Math:{
						Vec: function(x,y){
							this.x = x;
							this.y = y;
						},
						Clamp:function(x,min,max){
							return x < min ? min : (x > max ? max : x);
						},
						Wrap:function(x,min,max){
							return x < min ? max : (x > max ? min : x);
						},
						Difference:function(a,b){
							return a-b;
						},
						Pythageon:function(a,b){
							return Math.sqrt((a*a) + (b*b));
						},
						Vector:{
							x:0,y:0,
							Difference:function(a,b){
								return {x:a.x-b.x,y:a.y-b.y};
							},
							Sum:function(a,b){
								return {x:a.x+b.x,y:a.y+b.y};
							}
						},
						Data:{
							Total:function(){
							return this.total = this.kilobyteCount(App);
							},
							Update:function(){
							if (App.client.update.state.initalized)
								return this.update = this.byteCount(App.client.update.state.current.update);
								else
								return this.update = this.byteCount(Object.create(null,App.client.room));
							},
							isFunction:function(functionToCheck) {
								 var getType = {};
								 return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
							},
							byteCount:function (object) {
								if (this.isFunction(object))
									return this.byteCountF(object.toString().length*2);
								this.objectList = [];
								this.stack = [ object ];
								this.bytes = 0;
								while ( this.stack.length ) {
									this.value = this.stack.pop();
									if ( typeof this.value === 'trueean' ) {
										this.bytes += 4;
									}
									else if ( typeof this.value === 'string' ) {
										this.bytes += this.value.length * 2;
									}
									else if ( typeof this.value === 'number' ) {
										this.bytes += 8;
									}
									else if	(typeof this.value === 'object' && this.objectList.indexOf( this.value ) === -1) {
										this.objectList.push( this.value );
										for( i in this.value ) {
											if ((this.value[i]==object)||(this.value[i]==window)){
												if ((this.selfCount>0)||(this.value[i]==window))
													{
														this.selfCount = 0;
														break;
													}
												this.selfCount++;
											}
											this.stack.push( this.value[ i ] );
										}
									}
								}
								return this.bytes;
							},
							byteCountF:function(s){
								return encodeURI(s).split(/%..|./).length - 1;
							},
							kilobyteCount:function(object){
								return  Math.round((this.byteCount(object)*this.KB)*100)/100;
							},
							kb:0.0078125,
							KB:0.0009765625,
							objectList:[{}],
							selfCount:0,
							update:0,
							stack:[{}],
							value:{},
							bytes:0,
							total:0,
						}
					},
					Particles:{
						p:0,
						draw:function(l){

							for (this.p=_Rain.size-1; this.p;--this.p)
								if (_RainParticles[this.p].y>App.client.visuals.fixY(0))
								if (_RainParticles[this.p].y<App.client.visuals.fixY(App.client.setHeight))
								_RainParticles[this.p].draw(App.client.visuals,l);
						},
						update:function(){
							for (var _R=0; _R<_Rain.size;++_R)
								_RainParticles[_R].update();
						}
					},
					room:{
							prototype:{
								init:null,
								app:null,
								visuals:null,
								graphics:null,
								started:false,
								Started:{
									value:function(){
										return function() {
											var a = this.Started;
											//this.app.set_scale();
											this.Started = true;
											return a;
										};

									}
								}
							},

					constructor:function(app){return{
						app:{value:app},
						visuals:{value:app.client.visuals},
						graphics:{value:app.client.graphics},
						init:{writable: false,  configurable:false, enumerable:false, value:function(){
										return {
										app : {value:app},
										visuals :   {value:app.client.visuals},
										graphics :  {value:app.client.graphics}
										};
									}
							 }
								}
							}
						},
					pace:{
						prototype:{
						timer:	0,
						rate:	0,
						offset:	0,
						delta:	1,
						Time:	function(app)
							{
								this.timer = new Date().getTime();
								return this.timer - this.offset;
							},
						Step:	function(app)
							{
								this.delta = this.Time(app);
								var step = this.rate*this.delta;
								if (step>1.0)
									this.offset+=Math.floor(step)/this.rate;
								return (step - 1.0)>0.0?true:false;
							},
						GetStepsPerSecond:	function()
							{
								return 1000.0/this.delta;
							}
						},
						constructor:function(){return {
							init:{value:function(rate,fps){
									//Debug.log('Pace: Init');
									this.targetfps = fps;
									this.timer = new Date().getTime();
									this.rate = rate/1000.0;
									this.offset = this.timer-1000.0/rate;
									this.delta = 0.0;
									return true;
								}}
							}
						}
					},
					audio:{
						prototype:{
							mute:false,
							quality:0,
							current:0,
							audio: new Audio(),
							sound: new Array(new Audio()),
							length: new Array(),
							soundbyte:function(filename,callback){
								this.fname = new Audio(filename);
								this.play = function play() {
									this.fname.pause();
									this.fname.play();
								}
							},
							MultiChannelSound:function(filename,channelQ,callback){
								if (App.ext.useragent.ie)
									return;
								this.fname = filename;
								this.channel = new Array();
								for (var i = 0; i != channelQ; ++i)
								{
									this.channel[i] = new Audio(filename);
								}
								this.currentChannel = 0;
								this.play = function play()
								{
									try{
									this.channel[this.currentChannel].currentTime = 0;
									this.channel[this.currentChannel].play();
									++this.currentChannel;
									if (this.currentChannel == this.channel.length)
									{
										this.currentChannel = 0;
									}
									}catch(e){}
								}
								this.stop = function stop()
								{
									this.channel[this.currentChannel].pause();
									++this.currentChannel;
									if (this.currentChannel == this.channel.length)
									{
										this.currentChannel = 0;
									}
								}
							},
							toggle:function() {
								this.mute = true;
							},
							set:function(index,reset){
								if (!this.mute)
									{
								this.sound[this.current].pause()
								this.sound[this.current] = index;
								try{
									this.sound[this.current].currentTime = 0;
									}catch(e){}
								return;for(var i=0;i>0;--i)
								if (App.ext.useragent.mobile){
									index.play();
									return;
								}
								else
								{
								index.play();
									return;
								}
									this.sound[this.current].pause();
									this.current = index;
									try{
									index.currentTime = 0;
									}catch(e){}
									index.play();
									}
							},
							update:function() {
								if (typeof this.sound === 'object')
									if (this.sound[this.current].paused)
										this.sound[this.current].play();
								return this.mute;
								if (this.sound[this.current]==="undefined")
									return;
								if (this.sound[this.current].currentTime >= this.length)
								{
									if (++this.current == soundtrackQ)
									{
										this.current = 0;
									}

									this.sound[this.current].currentTime = 0;
									this.sound[this.current].play();
								}
							}
						},
						constructor:function(){return {
							init:{value:function(){
									return true;
								}}
							}
						}
					},
					_Animation:function(aniArray,aniSpeed,ani,origAni){
						///Animation States
						///  -2 = set to idle.
						/// -1 = animate backwards and stop.
						///  0 = set to first frame.
						///  1 = animate forwards and stop.
						///  2 = animate forwards and return to 0 and animate again.

						this.aniImage = new Array();
						this.aniImage = aniArray;
						this.nextAni = new Array();
						this.nextAni = origAni;

						if (this.aniImage[0])
							this.aniMax = this.aniImage.length-1;
							else
							this.aniMax = 0;
						this.aniCurrent = 0;
						this.aniSpeed = aniSpeed*App.delta_speed;
						this.animate = ani;
						this.aniChanged = 0;
						this.aniPrev = aniArray;
						this.aniDir = 1;
						this.recreate = function recreate(aniArray,aniSpeed,ani)
						{
							this.aniCurrent = 0;
							this.aniImage = aniArray;
							this.aniSpeed = aniSpeed;
							this.animate = ani;
							this.aniDir = 1;
						}
						this.update = function update()
						{
							if (!this.aniImage==this.aniPrev)
								this.aniPrev = this.aniImage,this.changed();
							if (this.animate==-2)
							{
								//this.aniImage = snowboarding_loading.player_idle;
								if (this.aniCurrent>=this.aniMax)
									this.aniDir = -1;
								if (this.aniCurrent<=0)
									this.aniDir = 1;
								if (this.aniCurrent<=this.aniMax)
									this.aniCurrent+=this.aniSpeed * this.aniDir;

							}
							if (this.animate==-1)
							{
								if (this.aniCurrent>0)
									this.aniCurrent-=this.aniSpeed;
							}
							if (this.animate==0)
							{
								this.aniCurrent = 0;
							}
							if (this.animate==1)
							{
								if (this.aniCurrent<this.aniMax)
									this.aniCurrent+=this.aniSpeed;
								if (this.aniCurrent>this.aniMax)
									this.aniCurrent = this.aniMax;
							}
							if (this.animate==2)
							{
								this.aniCurrent+=this.aniSpeed;
								if (this.aniCurrent>=this.aniMax)
									this.aniCurrent=0;
							}
						}
						this.changed = function changed()
						{
							this.recreate(this.nextAni,this.aniSpeed,0);
						}
						this.reverse = function reverse()
						{
							if (this.animate==1)
								this.animate=-1;
								else
								this.animate=1;
						}
						this.get_img = function get_img()
						{
							if ( this.aniImage[Math.round(this.aniCurrent)])
								return this.aniImage[Math.round(this.aniCurrent)];
								else
								return this.aniImage;
						}
					},
					graphics:{
						prototype:{
							path:"",
							SpriteWebItems:new Array(0),
							SpriteLoadNumber:0,
							SpriteLoadErrors:0,
							SpriteLoadTime:0,
							Sources:{},
							Sprite:{},
							sprite:{},
							img:{},

							load:function(name,file){

								if (typeof file==="undefined")
									file =  this.app.options.get("paths").images+""+name;

								this.Sources.append(this.SpriteAppend(name,file));

								return this.Sources.getByName(name);

							},

							SpriteCreate:function(file,src,name){

								this.SpriteLoadNumber++;

								this.SpriteLoadTime += (10*this.app.delta_speed)*this.SpriteLoadNumber;

								return this.sprite = Object.create(this.Sprite,{file:{value:file},src:{value:src},name:{value:name}});

							},

							SpriteAppend:function(name,file){

								return (this.img = this.SpriteCreate(file,this.path + file + ".png",name)).get();

							},

							SpriteUnload:function(name,file){

								delete this.Sources.getByName(name);
								//return this.SpriteLoad(name,file);

							},

							webLoad:function(name,address){

								this.SpriteWebItems[name] = new Image();

								this.SpriteWebItems[name].src = address;
								return this.SpriteWebItems[name];

							},
							graphicsLibrary:function(){
								this.Sprite = Object.create(null);
								this.Sources = Object.create(null);
								this.Sources.prototype = {
									get:function get(){return this.index;},
									getByName:function getByName(name){return this.index[name];},
									getName:function getName(name){return this.index[name].name;},
								}
								this.Sprite = Object.create(this.Base,
								{
									constructor:function Sprite(path,filename){this.path=path;this.filename=filename;return path;},
									src:	{value:"S:undefined"},
									file:	{value:"S:undefined"},
									name:	{value:"S:undefined"}
								});
								this.Sources = Object.create(this.Sources.prototype,
								{
									count:{writable: true,  configurable:true,value:0},
									index:{value:new Array()},
									append:{value:function append(image)
									{
										if (this.index[image.name]==image)
											return;
										this.index[image.name]=image;
										this.count++;
									}},
									unload:{value:function unload(name)
									{
										this.index[name]=null;
										return this.index[name];
									}},
								});
								return true;
							},
							Base:{
								get:function() {
										var img = new Image();
										img.src = this.src;
										img.file = this.file;
										img.name = this.name;
										img.number = 1+ window.apps[0].client.graphics.SpriteLoadErrors++;
										img.onload = function() {
												window.apps[0].client.graphics.SpriteLoadErrors--;

											};
										return img;
									},
								unload:function() {
										this.Sources.unload(this.name);
									}
							},
							getErrors:function(){
								return this.SpriteLoadErrors;
							},
							getImage:function(name){
								return this.Sources.getByName(name);
							},
						},
						constructor:function(app){return {
							app:{value:app},
							init:{value:function(){
									this.graphicsLibrary();
									return true;
								}}
							}
						}
					},




					//
					//Visuals prototype
					//
					//      Global Scope
					//          App.client.visuals
					//
					//      Local Scope
					//          this.visuals
					//

					//Visuals Object
					visuals:{

						//Visuals Prototype
						prototype:{

							//Cached
							stat2:(Object.create(null)),
							alpha:0,
							free:false,
							point:14,
							grd:(Object.create(null)),
							zindex:1,
							seamless:false,
							tight:true,
							disable:false,
							buffer_target:0,
							bleed:1,

							canvas:(Object.create(null)),
							buffer:(Object.create(null)),
							canvas_context:(Object.create(null)),
							buffer_context:(Object.create(null)),
							fillStyle:null,
							scale:0,
							fontT:"",
							fontL:"",
							within:false,
							stat:{
									x:0,
									y:0,
									w:0,
									h:0,
									s:0,
									a:0,
									c:0,
									colour:"",
									oldcol:"",
									init:function(col, colold){
									this.x = 0;
									this.y = 0;
									this.w = 0;
									this.h = 0;
									this.s = 0;
									this.a = 0;
									this.c = 0;
									this.colour = col || 0;
									this.oldcol = colold || 0;
									}
								},

							window:window,


							getData:function(){


								var width = this.buffer.width;
								var height = this.buffer.height;

								var imageData = this.buffer_context.getImageData(0,0,width,height);

								var w2 = width/2;
								var d = imageData.data;
								for(y=0; y<=height;y++){
									inpos = y * width * 4;
									outpos = inpos+ w2 *4;
									for (x = 0; x<w2;x++) {
										var r = d[inpos++];
										var g = d[inpos++];
										var b = d[inpos++];
										var a = d[inpos++];
										 b = Math.min(255,b);
										if ((r==0)&&(g==0)&&(b==0))
										{
											inpos++;
											inpos++;
											inpos++;
										imageData.data[inpos++] = 0;
										}
										else
										{
											inpos++;
											inpos++;
											inpos++;
											inpos++;
										}
									}
								}
								this.buffer_context.putImageData(imageData,0,0);

							},


							//Used to batch draw all sprites to the screen
								//

							flip:function(){

								this.fillStyle = (this.app.canvas.canvas.style.background=="transparent");



								//this.buffer_context.save();
								//Set scale to client scale
								this.scale = this.app.client.scale;


								if (this.fillStyle==false)
									this.screen_fill(this.app.client.visuals.bleed,this.app.options.canvas.background);

								//If double buffering
								if (this.app.options.canvas.buffer)
								{
									//Draw buffer to canvs
									this.canvas_context.drawImage(this.buffer,0,0);

									//Clear buffer
									if (this.fillStyle==true)
									this.buffer_context.clearRect(0,0,this.window.innerWidth,this.window.innerHeight);
								}
								else {

									//If not double buffering, clear canvas
									if (this.fillStyle==true)
									this.buffer_context.clearRect(0,0,this.window.innerWidth,this.window.innerHeight);

									//If initalized, draw state
									if (this.app.client.update.state.initalized)
										this.app.client.update.state.draw();

								}
								//this.buffer_context.restore();
							},

							//Get fixed X/Y positions

							getX:function(){

								return (this.app.input.x-(-this.app.getWidth()/2+this.window.innerWidth/2)+this.app.options.canvas.position.left/3).toFixed(2);
							},

							getY:function(){

								return (this.app.input.y-this.app.options.canvas.position.top).toFixed(2);
							},

							//Fix positions relative to canvas

							fixX:function(x){

								return ((x*this.scale)+(this.app.client.width/2)-(this.app.client.setWidth/2)*this.scale).toFixed(2);
							},

							fixY:function(y){

								return ((y*this.scale)+(this.app.client.height/2)-(this.app.client.setHeight/2)*this.scale).toFixed(2);
							},

							fixW:function(w){

								return (w*this.scale).toFixed(2);
							},

							fixH:function(h){

								return (h*this.scale).toFixed(2);
							},

							//Check variables
							chkc:{},
							chk:function(x,y,w,h,s,a,c,colour,font){
								this.chkc = this.colour();
								this.opacity(a);
								this.colour(colour);
								if (!this.free)	return {
									x:this.fixX(x),
									y:this.fixY(y),
									w:this.fixW(w)*s,
									h:this.fixH(h)*s,
									s:s,
									a:this.app.client.Math.Clamp(a,0,1) || 0,
									c:c || false,
									colour:colour || this.colour(),
									oldcol:this.chkc,
									font:font || this.font,
									init:this.stat.init
								}
								else return {
									x:x,y:y,
									w:w*s || 0,
									h:h*s || 0,
									s:s,
									a:this.app.client.Math.Clamp(a,0,1) || 1,
									c:c || false,
									colour:colour || this.colour(),
									oldcol:this.chkc,
									font:font,
									init:this.stat.init
								}
							},

							debug:function(){
								if (!App.ext.debug.strength=="Normal")
									return;
								if ((App.ext.debug.strength=="off")||(App.ext.debug.strength=="none"))
									return;
								this.rect_ext(-this.app.client.setWidth,0,this.app.client.setWidth+this.app.client.setWidth+this.app.client.setWidth,this.point,1,0.1,0);
								this.rect_ext(0,0,this.app.client.setWidth,this.point,1,0.1,0);
								this.text_ext("0",	0,this.point*0.9,this.point*0.9);
								this.text_ext(this.app.client.setWidth,	this.app.client.setWidth-25,this.point*0.9,this.point*0.9);
								if (window.innerWidth>(this.app.client.setWidth*1.1)*this.scale)
									{
										this.text_free(0-this.fixX(0),	30,4+this.fixY(this.point),this.point*0.99);
										this.text_free(this.app.client.width,	window.innerWidth-15,4+this.fixY(this.point),this.point*0.99);
									}
								//this.text_ext("Debug",	this.app.client.setWidth/2.5,this.point*0.9,this.point*0.9);
								//this.text_ext(this.app.client.name,5,25,"#FFFFFF",4,1,0);
								//this.text_ext("app.ext.input",15,40,"#FFFFFF",1,1,0);
								//this.text_ext("x "+Math.round(App.input.x*100)/100		,25,55,"#FFFFFF",1,1,0);
								//this.text_ext("x: "+Math.round(App.input.window.x*100)/100,75,55,"#FFFFFF",1,1,0);
								//this.text_ext("y "+Math.round(App.input.y*100)/100		,25,70,"#FFFFFF",1,1,0);
								//this.text_ext("y: "+Math.round(App.input.window.y*100)/100,75,70,"#FFFFFF",1,1,0);
								if (App.fps<20)
									log("FPSLow: "+App.fps);

								var data = [
											[this.app.client.name],
											[App.code+ " " +App.codefmk],
											[this.app.client.name],
											[
											"app.ext.input",
											"x "+Math.round(App.input.x*100)/100		,
											"x "+Math.round(App.input.window.x*100)/100,
											"d "+App.input.pressed+"   p "+App.input.duration,


											"y "+Math.round(App.input.y*100)/100		,
											"y "+Math.round(App.input.window.y*100)/100,
											(App.ext.useragent.trident)?"Input: "+"Touch":"Input: Mouse",
											],
											[
											"app.client",
											"discription","","",
											"width" ,this.app.client.setWidth,this.app.client.width,
											"height",this.app.client.setHeight,this.app.client.height,
											"fps",Math.round(this.app.client.fps)+"/"+this.app.client.targetfps+":"+Math.round(this.app.client.fps*1000)/1000,"",
											"scale",this.app.client.scale,"",
											"delta",this.app.client.delta,"",
											"buffer","double","",
											],
											[
											"app.client.state","",
											"[ "+this.app.client.update.state.name+" ] : "+this.app.client.Math.Data.Update()+"B",
											"",
											""
											],
											[
											"app.client.data","",
											"visuals ",(App.ext.debug.strength!=="Lite"?this.app.client.Math.Data.kilobyteCount(this.app.client.visuals):"?"),"",
											"graphics ",(App.ext.debug.strength!=="Lite"?this.app.client.Math.Data.kilobyteCount(this.app.client.graphics):"?"),"",
											"audio ",(App.ext.debug.strength!=="Lite"?this.app.client.Math.Data.kilobyteCount(this.app.client.audio):"?"),"",
											"state ",(App.ext.debug.strength!=="Lite"?this.app.client.Math.Data.kilobyteCount(this.app.client.update.state.current):"?"),"",
											"ext ",(App.ext.debug.strength!=="Lite"?this.app.client.Math.Data.kilobyteCount(App.ext):"?"),"",
											"Total ",(App.ext.debug.strength!=="Lite"?this.app.client.Math.Data.Total():"?"),""

											]
										];
										for(var t=0,tt=0,p=65,tr=0,ii=0;ii<data.length&&(6!=ii||"Lite"!=App.ext.debug.strength);++ii)
											{
											for(var i=data[ii].length;0<i;--i)
												0==i%3&&(t=0,tr=15,tt++),
												this.text_ext(data[ii][data[ii].length-i],tr+15+p*t,25+1.1*this.point*tt,"#AAAAAA",1,1,0),
												tr=0,
												t++;
											t=0;
											tt++
											};

								//this.text_ext("D: "+App.input.duration,210,55);
								//this.text_ext("P: "+App.input.pressed,160,55);
								//(App.ext.useragent.trident)?this.text_ext("Input: "+"Touch",160,70):this.text_ext("Input: "+"Mouse",160,70);
								//this.text_ext("I: "+App.input.window.inside+" X: "+App.input.window.x+" Y: "+App.input.window.y,155,70);
								//this.text_ext("app.client",15,85,"#FFFFFF",1,1,0);
								//this.text_ext("Discription: "+this.app.client.discription,25,100,"#FFFFFF",1,1,0);
								//this.text_ext("Fps: "+Math.round(this.app.client.fps)+"/"+this.app.client.targetfps+":"+Math.round(App.ext.fps*1000)/1000,25,115,"#FFFFFF",1,1,0);
								//this.text_ext("Width: "+this.app.client.width,25,130,"#FFFFFF",1,1,0);
								//this.text_ext("Height: "+this.app.client.height,25,145,"#FFFFFF",1,1,0);
								//this.text_ext("setWidth: "+this.app.client.setWidth,110,130,"#FFFFFF",1,1,0);
								//this.text_ext("setHeight: "+this.app.client.setHeight,110,145,"#FFFFFF",1,1,0);
								//this.text_ext("Scale: "+this.scale,25,160,"#FFFFFF",1,1,0);
								//this.text_ext("Delta: "+this.app.client.delta,25,175,"#FFFFFF",1,1,0);
								//this.text_ext("Buffering: "+"Double",25,190,"#FFFFFF",1,1,0);
								//this.text_ext("client.data",15,205,"#FFFFFF",1,1,0);
								//this.text_ext("[ "+this.app.client.update.state.name+" ] : "+this.app.client.Math.Data.Update()+"B",25,220,"#FFFFFF",1,1,0);
								this.text_ext("Log: "+App.ext.debug.text,35,this.app.client.setHeight-25,this.point);
								if (App.ext.debug.strength=="Lite")
									return;

									try {
								//this.text_ext("visuals: " 	+ this.app.client.Math.Data.kilobyteCount(this.app.client.visuals) 		+"kb",25,235,"#FFFFFF",1,1,0);
								}catch(e){}
								//this.text_ext("graphics: " + this.app.client.Math.Data.kilobyteCount(this.app.client.graphics) 		+"kb",25,250,"#FFFFFF",1,1,0);
								//this.text_ext("audio: " 	+ this.app.client.Math.Data.kilobyteCount(this.app.client.audio) 		+"kb",25,265,"#FFFFFF",1,1,0);
								//this.text_ext("_State: " 	+ this.app.client.Math.Data.kilobyteCount(this.app.client.update.state) 	+"kb",25,280,"#FFFFFF",1,1,0);
								//this.text_ext("ext: " 		+ this.app.client.Math.Data.kilobyteCount(App.ext) 					+"kb",25,295,"#FFFFFF",1,1,0);
								//this.text_ext("Total: "		+ this.app.client.Math.Data.Total()								+"kb",25,325,"#FFFFFF",1,1,0);
							},
							clean:function(){
								this.cleanAlpha?this.opacity(1):null;
								this.colour(this.stat.oldcol);
								this.stat.init(this.colour(),this.stat.oldcol);
							},
							colour:function(colour1,colour2) {
								if (colour1)
									{
										return colour1&&(this.buffer_context.fillStyle=colour1);colour2&&(this.buffer_context.strokeStyle=colour2);
									}
									else
									return this.buffer_context.fillStyle;
							},
							opacity:function(opacity) {
								return opacity!=this.alpha&&(this.alpha=opacity,this.canvas_context.globalAlpha=this.buffer_context.globalAlpha=opacity!=this.lastopacity?opacity:1);
							},
							font:function(font)	{
								return this.canvas_context.font = this.buffer_context.font=this.fontT=font;
								return font!=this.fontT&&(this.canvas_context.font=this.buffer_context.font=this.fontT=font?font:this.fontL);
								//if (font)
								//	this.buffer_context.font = font;
								//return this.buffer_context.font;
							},
							shadow:function(col,blur,x,y){
								this.buffer_context.shadowColor = col;
								this.buffer_context.shadowBlur = blur;
								this.buffer_context.shadowOffsetX = x;
								this.buffer_context.shadowOffsetY = y;
							},
							shadow_clear:function(){
								this.buffer_context.shadowBlur = 0;
							},

							//
							//Visuals Text Functions
							//

							text_free:function(string, x, y,colour){
								this.colour(colour);
								this.font(Math.round(this.point*this.scale)+"px "+"sans-serif");
								this.buffer_context.fillText(string,x-this.text_width(string)/2-this.point,y-this.point/2);
								this.clean();
							},
							text_ext:function(string,x,y,colour,s,a,c,style){
								this.stat = this.chk(x,y,this.text_width(string),s,s,a,c,colour);
								var f = this.font();
								this.stat.h = this.stat.s*this.scale;
								this.font(this.stat.h+"em "+style);
								this.stat.h = this.point*this.stat.h;

								this.buffer_context.fillText(string,this.stat.x-Math.floor(this.stat.w/2)-this.stat.s,this.stat.y-Math.floor(this.stat.h/2));

								//(this.stat.c)?this.buffer_context.fillText(string,this.stat.x-Math.floor(this.stat.w/2)-this.stat.s,this.stat.y-Math.floor(this.stat.h/2)):this.buffer_context.fillText(string,this.stat.x,this.stat.y+Math.floor(this.stat.h/2));
								this.font(f);
								this.clean();
							},
							text_button:function(string,x,y,colour,s,a,c,style){
								this.stat = this.chk(x,y,this.text_width(string),s,s,a,c,colour);
								var f = this.font();
								this.stat.h = this.stat.s*this.scale;
								this.font(this.stat.h+"em "+style);
								this.stat.h = this.point*this.stat.h;
								if (this.touch_within_stat(this.stat))
								{
									this.opacity(this.stat.a-(this.app.input.pressed*0.2));
									this.app.ext.cursor.set(this.app.ext.cursor.pointer,true);
									//if (App.input.released)
									//	if (App.input.delay<1)
									//		loc(),App.input.delay = 1;
									(this.stat.c)?this.buffer_context.fillText(string,this.stat.x-Math.floor(this.stat.w/2)-this.stat.s,this.stat.y-Math.floor(this.stat.h/2)):this.buffer_context.fillText(string,this.stat.x,this.stat.y+Math.floor(this.stat.h/2));
								}
								else
								{
									this.opacity(this.stat.a*0.75);
									(this.stat.c)?this.buffer_context.fillText(string,this.stat.x-Math.floor(this.stat.w/2)-this.stat.s,this.stat.y-Math.floor(this.stat.h/2)):this.buffer_context.fillText(string,this.stat.x,this.stat.y+Math.floor(this.stat.h/2));
								}
								this.font(f);
								this.clean();
							},
							text_button_bg:function(string,x,y,colour,s,a,c,loc,style){
								this.stat = this.chk(x,y,this.text_width(string),s,s,a,c,colour);


								this.shadow("#AAAAAA",1,1,1);

								var f = this.font();
								this.stat.h = this.stat.s*this.scale;
								this.font(this.stat.h+"em "+style);
								this.stat.h = this.point*this.stat.h;
								this.within = this.touch_within_stat(this.stat);
								if (this.within)
								{
								this.colour("#00A0F1");
								this.buffer_context.beginPath();
								this.stat.c?this.buffer_context.rect(this.stat.x-Math.floor(this.stat.w/2), this.stat.y-Math.floor(this.stat.h/2), this.stat.w, this.stat.h):this.buffer_context.rect(this.stat.x-this.stat.w*0.2, this.stat.y-this.stat.h*0.2, this.stat.w*1.1, this.stat.h*1.1);
								this.buffer_context.fill();

								this.colour("#DDDDDD");
									//this.rect_ext(this.stat.x-this.stat.w/4,this.stat.y-this.stat.h/5,this.stat.w*1.1,this.stat.h*1.1,1,1,0,"#00A0F1");
									this.opacity(this.stat.a-(App.input.pressed*0.2));
									App.ext.cursor.set(App.ext.cursor.pointer,true);
									this.app.ext.cursor.set(this.app.ext.cursor.pointer,true);
									if (this.app.input.released)
									{
											loc();
										this.app.input.delay = 1;
									}


									(this.stat.c)?this.buffer_context.fillText(string,this.stat.x-Math.floor(this.stat.w/2)-this.stat.s,this.stat.y-Math.floor(this.stat.h/2)):this.buffer_context.fillText(string,this.stat.x,this.stat.y+Math.floor(this.stat.h/2));
								}
								else
								{
									this.opacity(this.stat.a*0.75);
									(this.stat.c)?this.buffer_context.fillText(string,this.stat.x-Math.floor(this.stat.w/2)-this.stat.s,this.stat.y-Math.floor(this.stat.h/2)):this.buffer_context.fillText(string,this.stat.x,this.stat.y+Math.floor(this.stat.h/2));
								}
								this.font(f);
								this.clean();
							},
							text:function(string, x, y,colour){
								this.text_ext(string,x,y,colour,1,1,0,"Calibri");
							},
							text_shadow:function(blur,x,y,colour){
								this.buffer_context.shadowColor = colour;
								this.buffer_context.shadowBlur = blur;
								this.buffer_context.shadowOffsetX = x;
								this.buffer_context.shadowOffsetY = y;
							},


							//
							//Visuals Rectangle Functions
							//

							rect:function (x,y,w,h,colour){
								this.rect_ext(x,y,w,h,1,1,0,colour);
							},
							rect_centered:function (x,y,w,h,colour){
								this.rect_ext(x,y,w,h,1,1,1,colour);
							},
							rect_ext:function(x,y,w,h,s,a,c,colour){
								this.stat = this.chk(x,y,w,h,s,a,c,colour);
								this.buffer_context.beginPath();
								this.stat.c?this.buffer_context.rect(this.stat.x-Math.floor(this.stat.w/2), this.stat.y-Math.floor(this.stat.h/2), this.stat.w, this.stat.h):this.buffer_context.rect(this.stat.x, this.stat.y, this.stat.w, this.stat.h);
								this.buffer_context.fill();

								this.clean();
							},
							rect_stroke:function(x,y,w,h,s,a,c,colour,l){
								this.stat = this.chk(x,y,w,h,s,a,c,colour);
								this.buffer_context.beginPath();
								this.stat.c?this.buffer_context.rect(this.stat.x-Math.floor(this.stat.w/2), this.stat.y-Math.floor(this.stat.h/2), this.stat.w, this.stat.h):this.buffer_context.rect(this.stat.x, this.stat.y, this.stat.w, this.stat.h);
								this.buffer_context.fillStyle = 'transparent';
								this.buffer_context.fill();
								this.buffer_context.lineWidth = l || 1;
								this.buffer_context.strokeStyle = colour;
								this.buffer_context.stroke();

								this.clean();
							},
							setting:true,
							rect_button:function(x,y,w,h,s,a,colour,loc,c){
								this.stat = this.chk(x,y,w,h,s,a,c,colour);
								var t = false;
								if (this.touch_within(this.stat.x,this.stat.y,this.stat.w,this.stat.h,this.stat.c))
								{
									t = true;
									App.ext.cursor.set(App.ext.cursor.pointer,true);
									if (App.input.released)
										if (App.input.delay<1)
											loc(),App.input.delay = 1;
								}
								if (this.setting)
									this.rect_ext(x,y,w,h,s,a,c,colour);
									//else
									var ww = 1;
									if (t)
									this.rect_ext(x-ww,y-ww,w+ww*2,h+ww*2,s,a,c,colour);
							},
							rect_rotate:function(x,y,w,h,colour,s,a,angle){
								this.stat = this.chk(x,y,w,h,s,a,1,colour);
								this.buffer_context.translate(this.stat.x,this.stat.y);
								this.buffer_context.rotate(angle*0.0174532925);
								this.stat.c?this.buffer_context.rect(0-Math.floor(this.stat.w/2),0-Math.floor(this.stat.h/2), this.stat.w, this.stat.h):this.buffer_context.rect(0, 0, this.stat.w, this.stat.h);
								this.buffer_context.rotate(-angle*0.0174532925);
								this.buffer_context.translate(-this.stat.x,-this.stat.y);
								this.clean();
							},
							rect_gradient:function(x,y,w,h,s,a,c,colour,colour2,angle){
								this.stat = this.chk(x,y,w,h,s,a,c,colour);
								this.buffer_context.translate(this.stat.x,this.stat.y);
								this.buffer_context.rotate(angle*0.0174532925);

								if (!this.stat.w)
									return
								if (!this.stat.h)
									return
								if (!this.stat.x)
									return
								if (!this.stat.y)
									return
								this.stat.c?this.grd = this.buffer_context.createLinearGradient(Math.floor(this.stat.w/2),0, Math.floor(this.stat.w/2), Math.floor(this.stat.h/2)):this.grd = this.buffer_context.createLinearGradient(0,0, this.stat.w, this.stat.h);
								this.buffer_context.beginPath();
								this.stat.c?this.buffer_context.rect(0-Math.floor(this.stat.w/2),0-Math.floor(this.stat.h/2), this.stat.w, this.stat.h):this.buffer_context.rect(0, 0, this.stat.w, this.stat.h);
								this.grd.addColorStop(0, colour);
								this.grd.addColorStop(1, colour2);
								this.buffer_context.fillStyle = this.grd;
								this.buffer_context.fill();
								this.buffer_context.rotate(-angle*0.0174532925);
								this.buffer_context.translate(-this.stat.x,-this.stat.y);
								this.clean();
							},
							rect_free:function(x,y,w,h,s,a,c,colour){
								this.stat = this.chk(x,y,w,h,s,a,c,colour);
								this.buffer_context.beginPath();
								(c)?this.buffer_context.rect(x-w/2, y-h/2, w, h):this.buffer_context.rect(x, y, w, h);
								this.buffer_context.fill();
								this.clean();
							},
							screen_fill:function(a,colour){
								this.stat = this.chk(0,0,1,1,1,a,1,colour);
								this.buffer_context.beginPath();
								this.buffer_context.rect(0, 0, window.innerWidth,window.innerHeight)
								this.buffer_context.fill();
								this.clean();
							},
							image_count:0,
							image_element:function(image){
								this.elm = document.createElement("image");
								this.elm.draw = function(image,x,y,s,loc,xscale,yscale,a,c) {
									var s = this.style;
									  this.stat = App.client.visuals.chk(x,y,image.width,image.height,s,a,c);
									s.position = "fixed";
									s.left = this.stat.x+"px";
									s.top = this.stat.y+"px";
									s.width = this.stat.w+"px";
									s.height = this.stat.h+"px";
									s.opacity = this.stat.a;
									s.onclick = this.loc;
									this.src = image;
								}
								document.body.appendChild(this.elm);
								this.elm.src = image.src;
								return this.elm;
								//(this.stat.c)?this.buffer_context.drawImage(image,this.stat.x-Math.floor(this.stat.w/2),this.stat.y-Math.floor(this.stat.h/2),this.stat.w,this.stat.h):this.buffer_context.drawImage(image,this.stat.x,this.stat.y,this.stat.w,this.stat.h);
							},
							image_replacecol:function(image,x,y,s,a,c,colour){

								this.stat = this.chk(x,y,image.width,image.height,s,a,c);

								var is = new Image();
								is.src = image;

								function getBase64Image(img) {
											// Create an empty canvas element
											var canvas = document.createElement("canvas");
											canvas.width = img.width;
											canvas.height = img.height;

											// Copy the image contents to the canvas
											var ctx = canvas.getContext("2d");
											ctx.drawImage(img, 0, 0);

											// Get the data-URL formatted image
											// Firefox supports PNG and JPEG. You could check img.src to
											// guess the original format, but be aware the using "image/jpg"
											// will re-encode the image.
											//var dataURL = canvas.toDataURL("image/png");
											var dataURL = ctx.getImageData(0,0, canvas.width, canvas.height);

											return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
										}
								var imageData = getBase64Image(image);
								is.src = getBase64Image(is);
								image = is;
								var pixel = imageData.data;

								var r=0, g=1, b=2,a=3;
								for (var p = 0; p<pixel.length; p+=4)
								{
								  if (
									  pixel[p+r] == 0 &&
									  pixel[p+g] == 0 &&
									  pixel[p+b] == 0) // if white then change alpha to 0
								  {pixel[p+a] = 255;}
								}

								ctx.putImageData(imageData,0,0);
								image.src = c.toDataURL('image/png');


								(this.stat.c)?this.buffer_context.drawImage(image,this.stat.x-Math.floor(this.stat.w/2),this.stat.y-Math.floor(this.stat.h/2),this.stat.w,this.stat.h):this.buffer_context.drawImage(image,this.stat.x,this.stat.y,this.stat.w,this.stat.h);
							},
							image_ext:function(image,x,y,s,a,c){
								this.stat = this.chk(x,y,image.width,image.height,s,a,c);
								(this.stat.c)?this.buffer_context.drawImage(image,this.stat.x-Math.floor(this.stat.w/2),this.stat.y-Math.floor(this.stat.h/2),this.stat.w,this.stat.h):this.buffer_context.drawImage(image,this.stat.x,this.stat.y,this.stat.w,this.stat.h);
							},
							image_ext2:function(image,x,y,sx,sy,a,c){
								this.stat = this.chk(x,y,image.width,image.height,sx,a,c);
								this.stat2 = this.chk(x,y,image.width,image.height,sy,a,c);
								(this.stat.c)?this.buffer_context.drawImage(image,this.stat.x-Math.floor(this.stat.w/2),this.stat.y-Math.floor(this.stat.h/2),this.stat.w*this.stat.s,this.stat.h*this.stat2.s):this.buffer_context.drawImage(image,this.stat.x,this.stat.y,this.stat.w*this.stat.s,this.stat.h*this.stat2.s);
							},
							image_centered:function(image,x,y,a){
								this.image_ext(image,x,y,1,a,true);
							},
							image:function(image,x,y){
								this.image_ext(image,x,y,1,1,false);
							},
							image_scaled:function(image,x,y,s){
								this.image_ext(image,x,y,s,1,false);
							},
							image_stat:function(image,x,y,s,a,c,xx,yy,w,h){
								this.stat = this.chk(x,y,w,h,s,a,c);
								return this.stat;
							},
							image_flip:function(x,y){

								this.stat = this.chk(x,y,1,1,1,1,1);
								this.buffer_context.save();
								this.buffer_context.scale(-1, 1);
								this.buffer_context.translate(-this.stat.x*2, 0);
							},
							image_restore:function(x,y){

								//this.buffer_context.restore();
							},
							image_part:function(image,x,y,s,a,c,xx,yy,w,h){
								this.stat = this.chk(x,y,w,h,s,a,c);
								var scale = (1.1*this.stat.s)*this.app.getScale();



								(this.stat.c)?this.buffer_context.drawImage(image,xx,yy,w,h,this.stat.x-Math.floor(this.stat.w/2),this.stat.y-Math.floor(this.stat.h/2),this.stat.w,this.stat.h):this.buffer_context.drawImage(image,xx,yy,w,h,this.stat.x,this.stat.y,this.stat.w,this.stat.h);


							},
							image_part_rotate:function(image,x,y,s,a,c,xx,yy,w,h,angle){
								this.stat = this.chk(x,y,w,h,s,a,c);

								var scale = (1.1*this.stat.s)*this.app.getScale();
								this.buffer_context.translate(this.stat.x,this.stat.y);
								this.buffer_context.rotate(angle*0.0174532925);
								(this.stat.c)?this.buffer_context.drawImage(image,xx,yy,w,h,0-Math.floor(this.stat.w/2),0-Math.floor(this.stat.h/2),this.stat.w,this.stat.h):this.buffer_context.drawImage(image,xx,yy,w,h,0,0,this.stat.w,this.stat.h);
								this.buffer_context.rotate(-angle*0.0174532925);
								this.buffer_context.translate(-this.stat.x,-this.stat.y);
							},
							image_rotate:function(image,x,y,s,angle,a,xoff,yoff){
								this.stat = this.chk(x,y,image.width,image.height,s,a,true);
								this.buffer_context.translate(this.stat.x,this.stat.y);
								this.buffer_context.rotate(angle*0.0174532925);
								(this.stat.c)?this.buffer_context.drawImage(image,0-Math.floor(this.stat.w/2),0-Math.floor(this.stat.h/2),this.stat.w,this.stat.h):this.buffer_context.drawImage(image,0,0,this.stat.w,this.stat.h);
								this.buffer_context.rotate(-angle*0.0174532925);
								this.buffer_context.translate(-this.stat.x,-this.stat.y);
							},

							texture:function(texture,xx,yy,w,h,yoff,xoff,xonly,xo,yo,s){

								var yoff = yoff||0;
								var yo = yo||0;
								var xo = xo||0;
								var y = 0;
								var img = texture;
								var width =w;
								var height = h;

								var s = s;


								xo*=s;
								yo*=s;


								var bh = img.height;
								var img_width = img.width;
								var img_height = img.height;

								var img_width_scaled = +img_width*s;
								var img_height_scaled =+img_height*s;

								var offy = yy;
								var offx = xx;

								var by = Math.round((offy/s+height+(-yoff/s-height))%img_height_scaled-img_height_scaled);
								var by_first = by;



								var bx =  -width*s/2+(offx/s+(width*s))%img_width_scaled-img_width_scaled;

								var span_width = (width+img_width)*s+img_width_scaled;
								var span_height = (height+bh)*s+img_height_scaled;



								if (xonly)
									span_width = 0;


								if (xonly)
								{
									var x = (bx-(width*s)/2)-s*bx/img_width;

									for (by = by_first; by < span_height; by += img_height_scaled)
									{
										var y = (-by+height*s)+s*by/bh;


								if (!xonly)
										this.image_ext(img,xo+x,yo+y,s,1,true);
								if (xonly)
										this.image_scaled(img,xo+x,yo+y,s,1,true);


									}
								}
								else
								for (bx; bx < span_width; bx += img_width_scaled)
								{
									var x = (bx-(width*s)/2)-1*bx/img_width;

									for (by = by_first; by < span_height; by += img_height_scaled)
									{
										var y = (-by+height*s)+1*by/bh;

								if (!xonly)
										this.image_ext(img,xo+x,yo+y,s,1,true);
								if (xonly)
										this.image_scaled(img,xo+x,yo+y,s,1,true);

									}
								}

							},



							setBleed:function(threshold){
								this.bleed = threshold;
							},

							rotate_at:function(angle,x,y){
								if (typeof x === "object")
									var x = x.x, y = y.y;
									else
									var x = x, y = y;

								this.stat = this.chk(x,y,1,1,1,1,1);
								this.buffer_context.translate(-this.stat.x,-this.stat.y);

								this.buffer_context.rotate(angle*0.0174532925);

							},


							rotate:function(angle){

								return this.buffer_context.rotate(angle*0.0174532925);

							},

							//visuals.translate ({x,y}) (x,y)
							translate:function(x,y){

								if (typeof x === "object")
									var x = x.x, y = y.y;
									else
									var x = x, y = y;

								this.stat = this.chk(x,y,1,1,1,1,1);
								return this.buffer_context.translate(-this.stat.x,-this.stat.y);

							},


							button:function(img,x,y,f){
								this.image_button(img,x,y,1,f,true,1,1,1,1);
							},
							button_scaled:function(img,x,y,s,f){
								this.image_button(img,x,y,s,f,true,1,1,1,1);
							},
							buttonH:function(img,x,y,s,f){
								this.image_buttonH(img,x,y,s,f,true,1,1,1,1);
							},
							image_button:function(image,x,y,s,loc,highlight,xscale,yscale,a,centered){
								this.stat = this.chk(x,y,image.width*s*xscale,image.height*s*yscale,s,a,centered);
								var s = this.stat2 = this.chk(x,y,(image.width*s*xscale)*0.9,(image.height*s*yscale)*0.9,s,a,centered);
								var w = false;
								if (this.touch_within_stat(s))
								{
									w = true;
									if (this.highlight)
									this.opacity(this.stat.a-(this.app.input.pressed*0.2));
									this.app.ext.cursor.set(this.app.ext.cursor.pointer,true);
									if (this.app.input.released)
									{
											loc();
										this.app.input.delay = 1;
									}
									(this.stat.c)?this.buffer_context.drawImage(image,this.stat.x-Math.floor(this.stat.w/2),this.stat.y-Math.floor(this.stat.h/2),this.stat.w,this.stat.h):this.buffer_context.drawImage(image,this.stat.x,this.stat.y,this.stat.w,this.stat.h);
								}
								else
								{
									if (this.highlight)
									this.opacity(this.stat.a*0.75);
									(this.stat.c)?this.buffer_context.drawImage(image,this.stat.x-Math.floor(this.stat.w/2),this.stat.y-Math.floor(this.stat.h/2),this.stat.w,this.stat.h):this.buffer_context.drawImage(image,this.stat.x,this.stat.y,this.stat.w,this.stat.h);
								}
								return w;
							},
							image_buttonH:function(image,x,y,s,loc,highlight,xscale,yscale,a,centered){
								this.stat = this.chk(x,y,image.width*s*xscale,image.height*s*yscale,s,a,centered);
								var s = this.stat2 = this.chk(x,y,(image.width*s*xscale)*0.9,(image.height*s*yscale)*0.9,s,a,centered);
								var w = false;
								if (this.touch_within_stat(s,true))
								{
									w = true;
									if (this.highlight)
									this.opacity(this.stat.a-(this.app.input.pressed*0.2));
									this.app.ext.cursor.set(this.app.ext.cursor.pointer,true);
									if (this.app.input.pressed)
											loc(),this.app.input.delay = 1;
									(this.stat.c)?this.buffer_context.drawImage(image,this.stat.x-Math.floor(this.stat.w/2),this.stat.y-Math.floor(this.stat.h/2),this.stat.w,this.stat.h):this.buffer_context.drawImage(image,this.stat.x,this.stat.y,this.stat.w,this.stat.h);
								}
								else
								{
									if (this.highlight)
									this.opacity(this.stat.a*0.75);
									(this.stat.c)?this.buffer_context.drawImage(image,this.stat.x-Math.floor(this.stat.w/2),this.stat.y-Math.floor(this.stat.h/2),this.stat.w,this.stat.h):this.buffer_context.drawImage(image,this.stat.x,this.stat.y,this.stat.w,this.stat.h);
								}
								return w;
							},
							touch_within:function(x, y, w, h,c) {
								var doc = document.documentElement;
								this.left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
								this.top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
								y = y - this.top;
								x = x - this.left;
								return c?((App.input.x>x-w/2&&App.input.x<x+w/2&&App.input.y>y-h/2&&App.input.y<y+h/2)?true:false):((App.input.x>x&&App.input.x<x+w&&App.input.y>y&&App.input.y<y+h)?true:false);
							},
							touch_within2:function(x, y, w, h,c) {
								var stat = this.stat = this.chk(x,y,w,h,1,1,c);
								var doc = document.documentElement;
								this.left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
								this.top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
								stat.y = stat.y - this.top;
								stat.x = stat.x - this.left;
								return stat.c?((this.app.input.x>stat.x-stat.w/2&&this.app.input.x<stat.x+stat.w/2&&this.app.input.y>stat.y-stat.h/2&&this.app.input.y<stat.y+stat.h/2)?true:false):((this.app.input.x>stat.x&&this.app.input.x<stat.x+stat.w&&this.app.input.y>stat.y&&this.app.input.y<stat.y+stat.h)?true:false);
							},
							touch_within_stat:function(stat,r) {
								var doc = document.documentElement;
								var w = window;
								this.left = (w.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
								this.top = (w.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
								stat.y = stat.y - this.top;
								stat.x = stat.x - this.left;
								var x = this.app.input.x;
								var y = this.app.input.y;

								if (!r){
								x = this.app.input.touched.last.x;
								y = this.app.input.touched.last.y;}
								return stat.c?((x>stat.x-stat.w/2&&x<stat.x+stat.w/2&&y>stat.y-stat.h/2&&y<stat.y+stat.h/2)?true:false):((y>stat.x&&x<stat.x+stat.w&&y>stat.y&&y<stat.y+stat.h)?true:false);
							},

                            line2:function(vec,vec2,col,a,free){

                                let x = vec.x;
                                let y = vec.y;
                                let x2 = vec2.x;
                                let y2 = vec2.y;
								this.stat = this.chk(x,y,x2,y2,1,a,true);
								this.stat2 = this.chk(x2,y2,x2,y2,1,a,true);
								this.buffer_context.beginPath();
								this.buffer_context.moveTo(this.stat.x,this.stat.y);
								this.buffer_context.lineTo(this.stat2.x,this.stat2.y);
								this.buffer_context.strokeStyle = col;
								this.buffer_context.stroke();

                            },

							line:function(x,y,x2,y2,col,a){
								this.stat = this.chk(x,y,x2,y2,1,a,true);
								this.stat2 = this.chk(x2,y2,x2,y2,1,a,true);
								this.buffer_context.beginPath();
								this.buffer_context.moveTo(this.stat.x,this.stat.y);
								this.buffer_context.lineTo(this.stat2.x,this.stat2.y);
								this.buffer_context.strokeStyle = col;
								this.buffer_context.stroke();
								this.clean();
							},
							lines:function(x,y,x2,y2,col,a,s){
								this.stat = this.chk(x,y,x2,y2,1,a,true);
								this.stat2 = this.chk(x2,y2,x2,y2,1,a,true);
								this.buffer_context.moveTo(this.stat.x*s,this.stat.y*s);
								this.opacity(a);
								this.buffer_context.strokeStyle = col;
								this.buffer_context.lineTo(this.stat2.x*s,this.stat2.y*s);
							},
							lineend:function(){
								this.buffer_context.stroke();
							},
							linestart:function(){
								this.buffer_context.beginPath();
							},
							triangle:function(x0,y0,x1,y1,x2,y2,col,col2,width){
							//this.buffer_context.fillStyle = col;
							//this.buffer_context.strokeStyle = col2;
								this.colour(col,col2);
								this.buffer_context.lineWidth = width;
								this.buffer_context.moveTo(x0,y0); // give the (x,y) coordinates
								this.buffer_context.lineTo(x1,y1);
								this.buffer_context.lineTo(x2,y2);
								this.buffer_context.lineTo(x0,y0);
								this.buffer_context.fill();
								this.buffer_context.stroke();
								this.buffer_context.closePath();
								this.clean();
							},
							quadraticCurve:function(x,y,x2,y2,a,col){
								var t = this.buffer_context.strokeStyle;
								var tF = this.buffer_context.fillStyle;
								this.stat = this.chk(x,y,1,1,1,a,true,col);
								this.stat2 = this.chk(x2,y2,1,1,1,a,true,col);
								this.buffer_context.beginPath();
								this.buffer_context.quadraticCurveTo(this.stat.x, this.stat.y, this.stat2.x, this.stat2.y);
								this.buffer_context.strokeStyle = col;
								this.buffer_context.stroke();
								this.buffer_context.fill();
								this.stat = this.chk(x,y,1,1,1,a,true,t);
								this.stat2 = this.chk(x2,y2,1,1,1,a,true,t);

								this.buffer_context.strokeStyle = t;
								this.buffer_context.fillStyle = tF;
							},

							/* visuals.paths */

							paths:{


								//list of paths
								_initalized:false
								,_count:false

								//Reinitalize the objects functions,
								//Required for use

								,init:function(visuals){

									this.list = [];

									this.visuals = visuals;

									this._initalized = true;

									this._count = 0;

									return this;

								}

								,list:[]

								,render:function(path){

									var list = path.list;
									var length = path.list.length;
									var i = 0;


									for(i=0;i<=length-1;i++)
										this.visuals.rect(list[i].x,list[i].y,1,1,"#FFFFFF");

									return true;
								}

								,addPath:function(id,tempX,tempY){
									var path =  {name:id,x:tempX,y:tempY};
									path.addPoint = this.addPoint;
									path.list = [];
									path.p = this;
									//console.log(path);


									var t = this.list.push(path);
									 t.p = this;
									return this.list[this._count++];
								}

								,addPoint:function(tempX,tempY){

									(this.list.push({x:this.x+tempX,y:this.y+tempY}));

								}

							}

                            /*

                                circle now allows passing vectors

                                Test: argument based functions
                                    Method1:
                                        if based on first argument
                                            Method2 (unused):
                                                inherit _circle function and pass accordingly

                            */

							,circle:function(XVec,YR,RC,CA,A){

                                let x, y, r, col , a;

                                x = XVec;
                                y = YR;
                                r = RC;
                                col = CA;
                                a = A;

                                if (typeof x === 'object')
                                {

                                    x = XVec.x;
                                    y = XVec.y;
                                    r = YR;
                                    col = RC;
                                    a = CA;

                                }

                                this._circle(x,y,r,col,a);

							}

							,_circle:function(x,y,r,col,a){
								this.stat = this.chk(x,y,1,1,r,a,true,col);
								this.buffer_context.beginPath();
								this.buffer_context.arc(this.stat.x, this.stat.y, this.stat.s*this.scale, 0, 2 * Math.PI, false);
								this.buffer_context.fillStyle = this.stat.colour;
								this.buffer_context.fill();
								this.clean();
							},
							circle_free:function(x,y,r,col,a){
								this.stat = this.chk(x,y,r,r,r,a,1,col);
								this.buffer_context.beginPath();
								this.buffer_context.arc(x, y, r*this.scale, 0, 2 * Math.PI, false);
								this.buffer_context.fillStyle = this.stat.col;
								this.buffer_context.fill();
								this.clean();
							},
							text_width:function(string) {
								return this.buffer_context.measureText(string).width; // Not WOrking
							}
						},
						constructor:function(app){return {
							app:{value:app},
							init:{value:function(){

                                    window.utils.requestAnimationFrame(name,0,0);

									this.scale = this.app.scale;
									this.canvas = this.app.canvas.getCanvas();
									this.buffer = this.app.canvas.getBuffer();
									this.canvas_context = this.canvas.getContext("2d");
									if (this.app.options.canvas.buffer)
										this.buffer_context = this.buffer.getContext("2d");
										else
										this.buffer_context = this.canvas.getContext("2d");
									}
								}
							}
						}
					},
			}
		},
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

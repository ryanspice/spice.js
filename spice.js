/*
 ,-.                         
(   `     o            o     
 `-.  ;-. . ,-. ,-.    , ,-. 
.   ) | | | |   |-'    | `-. 
 `-'  |-' ' `-' `-' o  | `-' 
      '               -'     
	  Created By: Ryan Spice-Finnie
	  
*/
"use strict";



/*
var A = Object.create(null,{name:{value:"eh"}});
	
	
var Properties = Object.create(null,{
		value:{
				writeable:true,
				configurable:true,
				value:""
			},
		acessor:{
			configurable:false,
			get:function(){return this.value;},
			Set:function(v){this.value = v;}
		}
	});
	Properties.acessor.set(1);
console.log(Properties);*/
var _Rectangle = {};_Rectangle.prototype = {
	x:0,
	y:0,
	a:0,
	draw:function(x,y,w,h,a,c){
		if (this.a!=a)
			this.a=a;
		App.client.visuals.rect_ext(this.x+x,this.y+y,w,h,1,this.a,0,c||"#111111");
	}
}
var addListener = function(obj, eventName, listener) {
	if(obj.addEventListener)
		obj.addEventListener(eventName, listener, false);
		else 
		obj.attachEvent("on" + eventName, listener);
}


	var sprite = Object.create(null);
	var img = Object.create(null);
	var Scripts, _Main = Object.create(null,{name:{value:"Main"}}),
	Type=Object.create(null,{prototype:{value:{value:null,writable:{value:!1},configurable:{value:!1},enumerable:{value:!1},set:function(a){this.value=a;return this}}}}),Secure=Object.create(Type.prototype),Private=Object.create(Type.prototype,{enumerable:{value:!0}}),Protected=Object.create(Type.prototype,{writable:{value:!0}}),Public=Object.create(Type.prototype,{writable:{value:!0},configurable:{value:!0},enumerable:{value:!0}}),DefaultFunction=function(){return !0;},DefaultFalse=function(){return !1;},DefaultObject = Object.create(null);
	
	

	
	
	
	
var NullObject = Object.create(null);
var Debug = NullObject;
var Sprite = NullObject;
var Sprite = NullObject;


var TT = new Date().getTime();
var App = Object.create({
	prototype:{
		options:{
			canvas:{
				name:'canvas',
				buffername:'buffer',
				buffer:false,
				override:false,
				color:'#0000000',
				position:{
					position:'absolute',
					top:0,
					left:window.innerWidth/2,
					center:true,
					z:1
					},
				size:{
					width:320,
					height:480
					}
			},
			flags:{
				canvas:true,
				mstouch:false,
				seamless:false,
				tight:true
			},
			override:{
				keyboard:true,
				mouse:true,
				MSHoldVisual:false,
				SelectStart:false
				},
			paths:{
				data:"data/",
				images:"images/",
				url:""
			}
		},
		user:{
			name		:"",
			id			:"",
			locale		:"",
			gender		:"",
			updated_time:"",
			timezone	:"",
			quotes		:"",
			info:Object.create({
				response:{},
				facebook:function(response){
					this.response = response;
					App.user.name = this.response.name;
					App.user.id = this.response.id;
					App.user.locale = this.response.locale;
					App.user.gender = this.response.gender;
					App.user.updated_time = this.response.updated_time;
					App.user.timezone = this.response.timezone;
					App.user.quotes = this.response.quotes;
				},
				connect:function con(appid){
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
				  function testAPI() {
					console.log('Welcome!  Fetching your information.... ');
					
					FB.api('/me', function(response) {
						App.user.info.facebook(response);
					console.log(App.user);
					  console.log('Good to see you, ' + response.name + '.');
					});
				  }
				}
			})
		},
		ext:{
			prototype:{
				freezeonfocus:false,
				fps:0,
				ping:0,
				offline:false,
				delta_speed:0,
				connectionAttempts:0,
				connectDate:new Date(),
				connectDatere:new Date(),
				scroll:{
					event:function(evt,delta) {
						if (App.client.visuals.seamless)
							evt.preventDefault();
						App.ext.input.wheelDelta = event.wheelDelta;
					},
					blockforce:false,
					to:function(force) {
						if (force)
							if (this.blockforce)
							window.scrollTo(this.x,this.y);
							
						//if (document.documentElement.offsetLeft!==0)
						//	window.scrollTo(0,document.documentElement.offsetTop)
						//if ((this.lock)||(force))
						//{
						//window.scrollTo(this.x,this.y);
						//if (this.y<0)
						//	this.y = 0;
						//	else
						//	if (this.y>document.documentElement.clientHeight)
						//		this.y=document.documentElement.clientHeight;
						//}
						//console.log(this.y);
					},
					lock:{x:true,y:false},
					x:0,
					y:1
				},
				click:function(event, anchorObj) {
					if (anchorObj.click) {
						anchorObj.click();
						} else if(document.createEvent) {
						if(event.target !== anchorObj) {
						var evt = document.createEvent("MouseEvents"); 
						evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null); 
						var allowDefault = anchorObj.dispatchEvent(evt);
						// you can check allowDefault for false to see if
						// any handler called evt.preventDefault().
						// Firefox will *not* redirect to anchorObj.href
						// for you. However every other browser will.
						}
					}
				},
				top:function(){
					App.client.update.fullscale = !App.client.update.fullscale;
				},
				title:function(title){
					return document.title==title?true:(document.title=title);
				},
				debug:{
					prototype:{
						delay:0,
						text:String,
						strength:"Normal",
						log:function(txt,n)	{
							this.text = txt;
							this.delay.value--;
							if ((this.delay.value==0)&&(typeof n!=="undefined"))
								this.delay.value=n;
							if ((this.delay.value==0)||(this.delay.value==1)||(typeof n ==="undefined"))
								if (this.app.debug)
									if (App.debug==true)
									//console.log("SJS:"+txt);
							return true;
						},
						toggle:function(txt) {
							if ((txt=="lite")||(txt=="Lite")||(txt==1))
								this.strength = "Lite";
							if ((txt=="off")||(txt=="none")||(txt==0))
								this.strength = "none";
							if ((txt=="normal")||(txt=="Normal")||(txt==2))
								this.strength = "Normal";
							return this.app.debug = !this.app.debug;
						}
					},
					constructor:function(a){return {
						app:{value:a},
						init:{value:function(){
									this.log('Debug:     '+this.strength);
									Debug = this;
								}
							}
						}
					}
				},
				useragent:{
					prototype:{
						agent:String,
						mouse:false,
						touch:false,
						keyboard:false,
						windows:false,
						chrome:false,
						safari:false,
						Chrome: function(){
							return this.chrome = navigator.userAgent.match(/Chrome/i) ? true : false;
						},
						Safari: function(){
							return this.safari = navigator.userAgent.match(/Safari/i) ? true : false;
						},
						Android: function(){
							return navigator.userAgent.match(/Android/i) ? true : false;
						},
						BlackBerry:function(){
							return navigator.userAgent.match(/BlackBerry/i) ? true : false;
						},
						iOS:function(){
							return  navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
						},
						iemobile:false,
						IEMobile: function(){
							return  navigator.userAgent.match(/IEMobile/i) ? true : false;
						},
						ie:false,
						IE: function(){
							return  navigator.userAgent.match(/Trident/i) ? true : false;
						},
						any: function(){
							return (this.Android() || this.BlackBerry() || this.iOS());
						}
					},
					constructor:function(){return {
						init:{value:function(){
								this.agent = navigator.userAgent;
								this.chrome = this.Chrome();
								this.safari = this.Safari();
								this.mouse = this.any();
								
								this.iemobile = this.IEMobile();
								this.windows = this.IEMobile() || this.IE() || !this.any();
								
								this.ie = this.trident = this.IE();
								this.touch = this.any();
								this.mouse = !this.any() || this.BlackBerry();
								this.keyboard = this.windows ||  this.BlackBerry() || !this.any();
								Debug.log('UserAgent: '+this.agent);
								}
							}
						}
					}
				},
				metatag:{
					prototype:{
						metaLink: function(href,rel,type) {
							this.link = document.createElement('link');
							this.link.href = href;
							this.link.rel = rel;		
							this.link.type = type;	
							return this.link;
						},
						metaTag: function(name,content) {
							this.meta = document.createElement('meta');
							this.meta.content = content;
							this.meta.name = name;
							return this.meta;
						},
						metaAppend: function(meta) {
							this.head.appendChild(meta);
							this.count++;
						},
						link:document.createElement('link'),
						meta:document.createElement('meta'),
						head:document.getElementsByTagName('head')[0],
						count:0,
						ms_taphighlight:"no",
						apple_webapp:"yes",
						apple_statusbar:"black",
						devicedpi:true,
						devicewidth:true
					},
					constructor:function(){return {
						init:{value:function(){
								this.metaAppend(this.metaTag("msapplication-tap-highlight",this.ms_taphighlight));
								this.metaAppend(this.metaTag("apple-mobile-web-app-capable",this.apple_webapp));
								this.metaAppend(this.metaTag("apple-mobile-web-app-status-bar-style",this.apple_statusbar));
								this.metaAppend(this.metaTag("cursor-event-mode","native"));
								this.metaAppend(this.metaTag("touch-event-mode","native"));
								this.metaAppend(this.metaTag("HandheldFriendly","True"));
								
								//if (this.devicewidth)
									this.metaAppend(this.metaTag("viewport","width=device-width, user-scalable=no"));
								//if (this.devicedpi)
									this.metaAppend(this.metaTag("viewport","target-densitydpi="+App.client.setWidth));
								Debug.log('Debug:     MetaCount/'+this.count);
							return true;
							}
						}
					}
				}
				},
				colour:{
					prototype:{
						Teal		:["#008299",	"#00A0B1"],
						Blue		:["#2672EC",	"#2E8DEF"],
						Purple		:["#8C0095",	"#A700AE"],
						DarkPurple	:["#5133AB",	"#643EBF"],
						Red			:["#AC193D",	"#BF1E4B"],
						Orange		:["#D24726",	"#DC572E"],
						Green		:["#008A00",	"#00A600"],
						SkyBlue		:["#094AB2",	"#0A5BC4"],
						White		:["#AFAFAF",	"#F9FAF2"],
						Black		:["#0F0F0F",	"#A1A1A1"],
						Current		:["#0F0F0F",	"#AFAFAF"],
						shade		:0,
						getCurrent	:function(){return this.Current},
						get			:function(){var g = (this.shade)?this.Current[0]:this.Current[1];return g;},
						getAlt		:function(){var g = (this.shade)?this.Current[1]:this.Current[0];return g;},
						set			:function(set){this.Current = set; var g = (this.shade)?this.Current[0]:this.Current[1];return this.Current;},
						setAlt		:function(set){this.shade = set;}
					},
					constructor:function(){return {
						init:{value:function(){
									this.set(this.Black);
									Debug.log("Colour:    "+this.Current[0]+"/"+this.Current[1]);
								}
							}
						}
					}
				},
				cursor:{
					prototype:{
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
						current 	: "auto",
						last 		: "auto",
						delay 		: 2,
						changed		:false,
						count		:0,
						lock		:0,
						set:function(cursor,lock){
							//if (this.delay>0){
							//	this.delay--;this.count=0;this.changed=false;return;}
							//	else
							//	delay =1;
							if (this.lock >0)
								this.lock--;
							if (lock)
								this.lock += 1;
							//if (this.changed==true)
							//	return;
							if	((this.last==cursor)||(this.lock))
								return;
							//console.log(this.app.client.visuals);
							this.last = this.current;
							this.current = App.canvas.getCanvas().style.cursor;
							if (this.app.options.canvas.buffer)
								this.app.canvas.getBuffer().style.cursor=cursor;
							document.body.style.cursor=cursor;
							this.changed = true;
							this.count++;
							Debug.log("Cursor:    "+this.current+" - "+this.last);
						}
					},
					constructor:function(a){return{
						app:{value:a},
						init:{value:function(){
									//this.set(this.wait);
									setTimeout(function(){App.ext.cursor.set(App.ext.cursor.def)},2000);
								}
							}
						}
					}
				},
				input:{
					prototype:{
						init:false,
						parent:Private,
						x: 0,
						y: 0,
						keyup:false,keydown:false,
						start: 		{x:0,y:0},				
						control:false,
						window:{
							play:15,
							x:false,
							y:false,
							inside:false
						},
						getX:function(){return this.x;},
						getY:function(){return this.y;},
						getLastX:function(){return this.last.x;},
						getLastY:function(){return this.last.y;},
						getStartX:function(){return this.start.x;},
						getStartY:function(){return this.start.y;},
						getDuration:function(){return this.duration;},
						getPressed:function(){return this.pressed;},
						getReleased:function(){return this.released;},
						listener:{
							down:function(mouse,input) {
								if (input.delay>0)
									return;
								input.start.x = mouse.x || input.x;
								input.start.y = mouse.y || input.y;
								input.pressed = true;
								input.press = true;
								//if ((input.pressed)||(input.delay))
								//	return;
								//input.pressed = true;
								//input.press = true;
								//
								//
								//
								//
								//
								//
								input.dist.x = 0;
								input.dist.y = 0;
							},
							move:function(move,touch,input){
								if (input.delay>0)
									return;
								//if ((input.delay))
								//	return;
								input.x = move.x || input.x;
								input.y = move.y || input.y;
								input.dist.x = (input.x-input.start.x)/App.client.scale;
								input.dist.y = (input.y-input.start.y)/App.client.scale;
								//((!touch) ? input.mouse_distance : input.touch_distance)(touch);
							},
							up:function(mouse,input) {
								input.end.x = mouse.x || input.x;
								input.end.y = mouse.y || input.y;
								input.pressed = false;
								input.released = true;
								
								input.dist.x = input.end.x-input.start.x;
								input.dist.y = input.end.y-input.start.y;
							},
							touch:function(touch,input){
								if (input.delay>0)
									return;
								input.x = touch.pageX;
								input.y = touch.pageY;
								input.pos.x = touch.pageX;
								input.pos.y = touch.pageY;
								input.start.x = touch.pageX;
								input.start.y = touch.pageY;
								input.released = false;
								input.duration = 0;
								//input.dist.x = 0;
								//input.dist.y = 0;
							},
							keydown:function(a,input) {
								if (input.delay>0)
									return;
								input.key = true;
								input.kpressed = true;
								input.keyPower = -a;
								input.keyPower 	= input.keyPower;
								Debug.log(input.key + " " + input.keyPower);
							},
							keyup:function(input) {
								input.key = false;
								input.keyPower = 0;
								input.kreleased = true;
								input.kpressed = false;
							}
							,
							ups:function(a,input){
								a==1?input.keyup=true:input.keyup=false;
								
							},
							downs:function(a,input){
								if (input.delay>0)
									return;
								a==1?input.keydown=true:input.keydown=false;
							}
						},
						pressed: 	false,
						released: false,
						press: 		false,
						delta: 0,
						wheelDelta: 0,
						duration: 0,
						dist: {x:0,y:0},
						pos: {x:0,y:0},
						
						last: {x:0,y:0},
						end: {x:0,y:0},
						delay:0,
						key:false,
						keyPower:0,
						menu:false,
						drag:false,
						confine:false,
						position:function(canvas,evt) {
							if ((!canvas)||(!evt))
									return false;
							return {x: evt.clientX,y: evt.clientY};
						},
						mouse:function() {
							if (!App.ext.input.pressed)
								App.ext.input.dist =  App.client.Math.Vector.Difference(App.ext.input,App.ext.input.start);
						},
						mouse_distance:function() {
							if (!App.ext.input.pressed)
								App.ext.input.dist =  App.client.Math.Vector.Difference(App.ext.input.start,App.ext.input.end);
						},
						touch_distance:function(touch) {
							if (!touch)
								return;
							App.ext.input.x = touch.pageX;
							App.ext.input.y = touch.pageY;
							//if (!App.ext.input.input.pressed)
								App.ext.input.dist =  App.client.Math.Vector.Difference(App.ext.input.start,App.ext.input.end);
						},
						get_angle: function(){
							return 57.2957795 * Math.atan2(this.end.y-this.start.y,this.end.x-this.start.x);
						},
						get_delta: function(){
							return this.dist.x*this.dist.x+this.dist.y*this.dist.y;
						},
						set: function(x,y){
							this.x=x;this.y=y;
						},
						update:function UPDATE() {
							this.last.x = this.x;
							this.last.y = this.y;
							this.press = false;
							this.window.inside = 0;
							this.wheelDelta = 0;
							this.pressed?this.duration++:this.duration=0;
							
							this.confine?(
								((this.y<this.app.client.visuals.fixY(0))?
									(this.window.y=0,this.window.inside -= 1):
										((this.y>this.app.client.visuals.fixY(this.app.client.setHeight))?
											(this.window.y=this.app.client.visuals.fixW(this.app.client.setHeight),this.window.inside += 1):
											(this.window.y=-this.app.client.visuals.fixY(0)+this.y)
										),
										((this.x<this.app.client.visuals.fixX(0))?
											(this.window.x = 0,this.window.inside -=1):
											((this.x>this.app.client.visuals.fixX(this.app.client.setWidth))?
												(this.window.x = this.app.client.visuals.fixW(this.app.client.setWidth),this.window.inside += 1):
												(this.window.x = -this.app.client.visuals.fixX(0)+this.x)
											)
										)
									)
								):((this.y<this.app.client.visuals.fixY(0))?
										(this.window.y=-this.app.client.visuals.fixY(0)+this.y):
										((this.y>this.app.client.visuals.fixY(this.app.client.setHeight))?
											(this.window.y=-this.app.client.visuals.fixY(0)+this.y):
											(this.window.y=-this.app.client.visuals.fixY(0)+this.y)
									),
									((this.x<this.app.client.visuals.fixX(0))?
										(this.window.x=-this.app.client.visuals.fixX(0)+this.x):
										((this.x>this.app.client.visuals.fixX(this.app.client.setWidth))?
											(this.window.x=-this.app.client.visuals.fixX(0)+this.x):
											(this.window.x=-this.app.client.visuals.fixX(0)+this.x)
										)
									));
							this.released?(this.released=false,this.dist.x=0,this.dist.y=0):null;
							this.codereleased = 0;
							//this.duration>0?(this.released=false);
							//(this.released==true)?(this.released=false,this.duration=0,this.dist.x=0,this.dist.y=0):null;
							(this.delay>0)?this.delay-=0.1:null;
						return true;
						},
					},
					constructor:function(a){return{
						app:{value:a},
						codes:{value:new Array()},
						init:{value:function Initalize(a){
							this.codes[0]  = '';
							this.codes[1]  = '';
							this.codes[2]  = '';
							this.codes[3]  = '';
							this.codes[4]  = '';
							this.codes[5]  = '';
							this.codes[6]  = '';
							this.codes[7]  = '';
							this.codes[8]  ='backspace';
							this.codes[9]  ='tab'                ;
							this.codes[13] ='enter'             ;
							this.codes[16] ='shift'             ;
							this.codes[17] ='ctrl'              ;
							this.codes[18] ='alt'               ;
							this.codes[19] ='pause/break'       ;
							this.codes[20] ='capslock'          ;
							this.codes[27] ='escape'            ;
							this.codes[32] ='space'            ;
							this.codes[33] ='pageup'            ;
							this.codes[34] ='pagedown'          ;
							this.codes[35] ='end'               ;
							this.codes[36] ='home'              ;
							this.codes[37] ='leftarrow'         ;
							this.codes[38] ='uparrow'           ;
							this.codes[39] ='rightarrow'        ;
							this.codes[40] ='downarrow'         ;
							this.codes[45] ='insert'            ;
							this.codes[46] ='delete'            ;
							this.codes[48] ='0'                 ;
							this.codes[49] ='1'                 ;
							this.codes[50] ='2'                 ;
							this.codes[51] ='3'                 ;
							this.codes[52] ='4'                 ;
							this.codes[53] ='5'                 ;
							this.codes[54] ='6'                 ;
							this.codes[55] ='7'                 ;
							this.codes[56] ='8'                 ;
							this.codes[57] ='9'                 ;
							this.codes[65] ='a'                 ;
							this.codes[66] ='b'                 ;
							this.codes[67] ='c'                 ;
							this.codes[68] ='d'                 ;
							this.codes[69] ='e'                 ;
							this.codes[70] ='f'                 ;
							this.codes[71] ='g'                 ;
							this.codes[72] ='h'                 ;
							this.codes[73] ='i'                 ;
							this.codes[74] ='j'                 ;
							this.codes[75] ='k'                 ;
							this.codes[76] ='l'                 ;
							this.codes[77] ='m'                 ;
							this.codes[78] ='n'                 ;
							this.codes[79] ='o'                 ;
							this.codes[80] ='p'                 ;
							this.codes[81] ='q'                 ;
							this.codes[82] ='r'                 ;
							this.codes[83] ='s'                 ;
							this.codes[84] ='t'                 ;
							this.codes[85] ='u'                 ;
							this.codes[86] ='v'                 ;
							this.codes[87] ='w'                 ;
							this.codes[88] ='x'                 ;
							this.codes[89] ='y'                 ;
							this.codes[90] ='z'                 ;
							this.codes[91] ='leftwindowkey'     ;
							this.codes[92] ='rightwindowkey'    ;
							this.codes[93] ='selectkey'         ;
							this.codes[96] ='numpad0'           ;
							this.codes[97] ='numpad1'           ;
							this.codes[98] ='numpad2'           ;
							this.codes[99] ='numpad3'           ;
							this.codes[100]='numpad4'          ;
							this.codes[101]='numpad5'          ;
							this.codes[102]='numpad6'          ;
							this.codes[103]='numpad7'          ;
							this.codes[104]='numpad8'          ;
							this.codes[105]='numpad9'          ;
							this.codes[106]='multiply'         ;
							this.codes[107]='add'              ;
							this.codes[109]='subtract'         ;
							this.codes[110]='decimalpoint'     ;
							this.codes[111]='divide'           ;
							this.codes[112]='f1'               ;
							this.codes[113]='f2'               ;
							this.codes[114]='f3'               ;
							this.codes[115]='f4'               ;
							this.codes[116]='f5'               ;
							this.codes[117]='f6'               ;
							this.codes[118]='f7'               ;
							this.codes[119]='f8'               ;
							this.codes[120]='f9'               ;
							this.codes[121]='f10'              ;
							this.codes[122]='f11'              ;
							this.codes[123]='f12'              ;
							this.codes[144]='numlock'          ;
							this.codes[145]='scrolllock'       ;

							//"Nintendo Wii" 
							this.codes[175]='Up (Wii?)';	//(CAUTION! ALSO SCROLLS UP)
							this.codes[176]='Down (Wii?)';	//(CAUTION! ALSO SCROLLS UP)
							this.codes[177]='Left (Wii?)';	//(CAUTION! ALSO SCROLLS UP)
							this.codes[178]='Right (Wii?)';	//(CAUTION! ALSO SCROLLS UP)

							this.codes[170]='- (Wii?)';		//(CAUTION! ALSO ZOOMS OUT)
							this.codes[174]='+ (Wii?)';		//(CAUTION! ALSO ZOOMS IN)
							this.codes[172]='1 (Wii?)';		//
							this.codes[173]='2 (Wii?)';		//(CAUTION! ALSO SPLITS SCREEN INTO SINGLE COLUMN MODE)


							/*
							PS3:
							Platform: "PLAYSTATION 3"
							Up: 38
							Down: 40
							Left: 37
							Right: 39
							X: 63 (CAUTION! ALSO CLICKS)
							Nintendo 3ds:
							Platform: "Nintendo 3ds"
							Up: 38
							Down: 40
							Left: 37
							Right: 39
							LG Smart TV:
							Platform: "Linux 35230"
							0-9: 48-57
							Play: 445
							Pause: 19
							Rewind: 412
							FF: 417
							*/


							this.codes[186]='semi-colon';
							this.codes[187]='equalsign';
							this.codes[188]='comma';
							this.codes[189]='dash';
							this.codes[190]='period';
							this.codes[191]='forwardslash';
							this.codes[192]='graveaccent';
							this.codes[219]='openbracket';
							this.codes[220]='backslash';
							this.codes[221]='closebraket';
							this.codes[222]='singlequote';
							
							
							if (!this.app.options.override.SelectStart)
								this.app.canvas.canvas.addEventListener("selectstart", function(e) { e.preventDefault(); }, false);
							if (!App.options.override.MSHoldVisual)
								this.app.canvas.canvas.addEventListener("MSHoldVisual", function(e) { e.preventDefault(); }, false);
							var body = document.body;
							if (!App.options.flags.mstouch)
								body.setAttribute("style","-ms-touch-action: none; ms-content-zooming: none; touch-action: none; -ms-overflow-style: none;");
							if (App.options.flags.seamless)
								body.style.overflow = "hidden";
							if (App.options.flags.tight)
								body.style.padding = "0px", body.style.margin = "0px auto";
								
								
								
								
								
							if (!this.menu) {
									document.oncontextmenu = function(evt) {evt.preventDefault(); return false; };
									window.oncontextmenu = function(evt) {evt.preventDefault(); return false; };
								}
							if (!this.drag) {
									document.ondragstart   = function(evt) {evt.preventDefault(); return false; };
									window.ondragstart   = function(evt) {evt.preventDefault(); return false; };
								}
								
							if ((App.ext.useragent.keyboard)||(App.options.override.keyboard)) {
									window.addEventListener('keydown', 	function(event) {
										App.ext.input.codedown = App.ext.input.codes[event.keyCode];
										if (event.ctrlKey)
											App.ext.input.control = true;
										
											switch(event.keyCode) 
											{
											case 37:App.ext.input.listener.keydown(-1,App.ext.input);break;
											case 65:App.ext.input.listener.keydown(-1,App.ext.input);break;
											case 39:App.ext.input.listener.keydown(1,App.ext.input);break;
											case 68:App.ext.input.listener.keydown(1,App.ext.input);break;
											case 40:App.ext.input.listener.downs(1,App.ext.input);break;
											case 83:App.ext.input.listener.downs(1,App.ext.input);break;
											case 38:App.ext.input.listener.ups(1,App.ext.input);break;
											case 87:App.ext.input.listener.ups(1,App.ext.input);break;
											}
									},true);
									
									window.addEventListener('keyup', 	function(event) {
										App.ext.input.codeup = App.ext.input.codes[event.keyCode];
										if (event.ctrlKey)
											App.ext.input.control = false;
											switch(event.keyCode) 
											{
											case 37:App.ext.input.listener.keyup(App.ext.input);break;
											case 65:App.ext.input.listener.keyup(App.ext.input);break;
											case 39:App.ext.input.listener.keyup(App.ext.input);break;
											case 68:App.ext.input.listener.keyup(App.ext.input);break;
											case 40:App.ext.input.listener.downs(2,App.ext.input);break;
											case 83:App.ext.input.listener.downs(2,App.ext.input);break;
											case 38:App.ext.input.listener.ups(2,App.ext.input);break;
											case 87:App.ext.input.listener.ups(2,App.ext.input);break;
											}
										App.ext.input.codereleased = true;
									},true);
								}
							window.addEventListener('mousewheel',App.ext.scroll.event,true);
							if (App.ext.useragent.mouse) {
								window.addEventListener('mousedown',function(evt) {
										App.ext.input.listener.down(App.ext.input.position(App.canvas.getCanvas(), evt),App.ext.input);
									},true);
								window.addEventListener('mousemove',function(evt) {
										App.ext.input.listener.move(App.ext.input.position(App.canvas.getCanvas(), evt),null,App.ext.input);
									},true);
								window.addEventListener('mouseup',function(evt) {
										App.ext.input.listener.up(App.ext.input.position(App.canvas.getCanvas(), evt),App.ext.input);
									},true);
								}
							if (!App.ext.useragent.touch) {
								window.addEventListener('touchstart',	function(evt) {
										evt.preventDefault();
										App.ext.input.listener.touch(evt.targetTouches[0],App.ext.input);
									},true);
								window.addEventListener('touchend',		function(evt) {
										evt.preventDefault();
										App.ext.input.listener.up(evt,App.ext.input);
									},true);
								window.addEventListener('touchmove',	function(evt) {
										evt.preventDefault();
										App.ext.input.listener.move(App.ext.input.position(App.canvas.getCanvas(), evt), evt.targetTouches[0],App.ext.input);
									},true);
								}
							if (App.ext.useragent.windows) {
								window.addEventListener('MSPointerDown',function(evt) {
										App.ext.input.listener.down(App.ext.input.position(App.client.c, evt),App.ext.input);
									},true);
								window.addEventListener('MSPointerMove',function(evt) {
										App.ext.input.listener.move(App.ext.input.position(App.client.c, evt),null,App.ext.input);
									},true);
								window.addEventListener('MSPointerUp',	function(evt) {
										App.ext.input.listener.up(App.ext.input.position(App.client.c, evt),App.ext.input);
									},true);
								}
							}
						}
					}
				}
				},
				con:false,
				connection:null,
				connect:function(app){
				return;
					if ((this.offline)||(this.connectionAttempts>0))
						return this.offline = this.con;
					this.connectionAttempts++;
					Debug.log("Network:   Attempt: "+this.connectionAttempts);
					if (window.XMLHttpRequest)
						this.connection = new XMLHttpRequest();
						else
						this.connection = new ActiveXObject("Microsoft.XMLHTTP");
					this.connection.onreadystatechange = function()
						{
						if (this.connection.readyState==4 && connection.status==200)
							{
							this.offline = this.con = false;
							this.connectDatere = new Date;
							this.connectDatere = this.connectDatere.getTime();
							this.ping = this.connectDatere - this.connectDate;
							}
							else
							{
							this.offline = this.con = true;
							this.ping = 1;
							}
						}
						try {
							this.connection.open("GET","http://www.google.com",true);
							this.connection.send();
							} 
					catch(e){Debug.log('No0ernet');}
					return this.offline = this.con;
				}
			},
			constructor:function(a){return{
				app:{value:a},
				init:{value:function(name){
						this.title(name);
						(this.debug = this.app.Construct(this.debug.prototype,this.debug.constructor)).init();
						(this.cursor = this.app.Construct(this.cursor.prototype,this.cursor.constructor)).init();
						(this.useragent = this.app.Construct(this.useragent.prototype,this.useragent.constructor)).init();
						(this.input = this.app.Construct(this.input.prototype,this.input.constructor)).init();
						(this.colour =	this.app.Construct(this.colour.prototype,this.colour.constructor)).init();
						(this.metatag =	this.app.Construct(this.metatag.prototype,this.metatag.constructor)).init();
						}
					}
				}
			}
		},
		canvas:{
			prototype:{
				head:document.getElementsByTagName('head')[0],
				rendering_style:document.createElement('style'),
				canvas:NullObject,
				buffer:NullObject,
				canvasList:document.getElementsByTagName('canvas'),
				getCanvas:function(){return this.canvas;},
				getBuffer:function(){return this.buffer;},
				setCanvas:function(c){this.canvas = c;},
				setBuffer:function(b){this.buffer = b;},
				createCanvas:function(){
					var c = document.createElement("canvas");
						c.id = this.app.options.canvas.name;
						document.body.appendChild(c);
					return document.getElementById(this.app.options.canvas.name);
				},
				createBuffer:function(){
					var c = document.createElement("canvas");
						c.id = this.app.options.canvas.buffername;
						document.body.appendChild(c);
					return document.getElementById(this.app.options.canvas.buffername);
				},
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
				background_set:function(value) {
					if (App.options.canvas.buffer)
					this.buffer.style.background = value;
					this.canvas.style.background = value;
				},
				background_get:function() {
					return this.buffer.style.background;
				},
			},
			constructor:function(app){return{
				app:{value:app},
				init:{writable: false,  configurable:false, enumerable:false, value:function(){
						var getcanvas = document.getElementById(app.options.canvas.name);
						if (getcanvas)
							{
							this.setCanvas(getcanvas);
							if (app.options.canvas.buffer)
								{
								var getbuffer = document.getElementById(app.options.canvas.buffername);
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
							if (app.options.canvas.buffer)
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
		client:{
			prototype:{
				start:function(loop,scale){
					this.scale = scale;
					this.client_f = loop;
					requestNextAnimationFrame(this.client_f);
				},
				loop:function(a){
					//this.mute = this._Audio.update();
					this.scale = this.update.scale(this);
					this.fps = this.update.step.tick(this.second,this.mainLoop,a);
					App.ext.cursor.set("auto");
					this.resized = this.update.size(this);
					this.visuals.draw(this.scale);
					a.ext.input.update();
					requestNextAnimationFrame(this.client_f);
				},
				update:{
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
					size:function(app){
						this.difference = app.Math.Vector.Difference(new app.Math.Vec(this.last.w,this.last.h),new app.Math.Vec(app.width,app.height));
						if ((this.difference.x + this.difference.y==0))
							return false;
						App.canvas.getCanvas().width  = this.last.w = app.width;
						App.canvas.getCanvas().height = this.last.h = app.height;
						App.canvas.getBuffer().width  = this.last.w = app.width;
						App.canvas.getBuffer().height = this.last.h = app.height;
						return true;
						},
					scale:function(app) {
						if (this==window) 
							return console.log('Warning: Scale: [this === window]');
							else
						if ((this.pause>0.5))
							return console.log('Warning: Paused',30); 
							else
						if (this.set==1)
							return console.log('Warning: Scale: Duplicate Run',30); 
							
						if (App.options.canvas.override)
						{
							if (App.options.canvas.size.width!==app.width)
								app.width = App.options.canvas.size.width;
							if (App.options.canvas.size.height!==app.height)
								app.height = App.options.canvas.size.height;
							
							if (App.options.canvas.position.center)
								{
								if (App.options.canvas.size.left!==app.width/2)
									{
									App.canvas.getCanvas().style.left  = -app.width/2 + window.innerWidth/2+"px";
								if (App.options.canvas.buffer)          
									App.canvas.getBuffer().style.left  = -app.width/2 + window.innerWidth/2+"px";
									}
								}
						}
						else
						{
						
						if (window.innerHeight!==app.height)
							app.height = window.innerHeight;
						if (window.innerWidth!==app.width)
							app.width = window.innerWidth,console.log('');
						}	
						
						
						
						this.set = 1;
						this.scaler.x = app.height/app.setHeight;
						this.scaler.y = app.width/app.setWidth;
						(this.fullscale)?this.scaler.s = this.scaler.x:this.scaler.s = (this.scaler.x<this.scaler.y)?this.scaler.x:this.scaler.y;
						if (isNaN(this.scaler.s)){this.set = 0;return;}
						this.scalediff = this.scaler.s-this.lastscale;
						
						
						
						(this.scalediff)?App.ext.scroll.to(true):App.ext.scroll.to(false);
						this.set = 0;
						this.lastscale = this.scaler.s;
						return this.scaler.s;
					},
					state:{
						prototype:{
							init:function(){
								if (typeof this.current.init !=='undefined')
								this.current.init();
							},
							draw:function(){
								if (typeof this.current.draw !=='undefined')
								this.current.draw();
							},
							update:function(){
								if (typeof this.current.update !=='undefined')
								this.current.update();
							},
							set:function(state,start){
								App.ext.input.delay = 1;
								if ((this.name=state.name)&&(this.initalized=!0)) {
									if (!state.started)
										this.current=Object.create(state,App.client._Room);
								if (start)
									this.current.init(),this.current.started = true;
								};
							},
							name:"",
							current:{},
							initalized:false
						},
						constructor:function(app){
							return	{
								app:{value:app},
								init:{value:function(state){
										this.set(state,true);
										this.initalized = true;
									}
								}
							}
						}
					},
					step:{
						first:function(step,app){ 
							
							if ((typeof step == 'undefined')||(!step.Step(app)))
								return;
							this.fps = 1 * (this.clean()/step.delta * 1E3);
							this.delta = step.targetfps / this.fps;
							this.delta = Math.ceil(this.delta*100000)/100000;
							if ((this.delta>2.5))
								this.delta = 2.5;
								
							if (this.delta!==this.delta+1)
								App.delta = App.client.delta = this.delta_speed = this.delta;
								else
								App.delta = App.client.delta = this.delta_speed = 1;
								//console.log(this.delta);
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
							if (App.ext.freezeonfocus)
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
							return this.update = this.byteCount(Object.create(null,App.client._Room));
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
						_RainParticles[this.p].draw(App.client.visuals,l);
				},
				update:function(){
					for (var _R=0; _R<_Rain.size;++_R)
						_RainParticles[_R].update();
				}
			},
			_Room:{
					prototype:{
					init:DefaultObject,
					app:DefaultObject,
					visuals:DefaultObject,
					graphics:DefaultObject,
					started:false,
					Started:{value:function(){return function() {var a = this.Started;App.set_scale();this.Started = true; return a};}}
					},
					constructor:function(){return {
						init:{value:function(){
								return {
								app : {value:App},
								visuals :   {value:App.client.visuals},
								graphics :  {value:App.client.graphics}
								};
							}}
						}
					}
				},
			_Pace:{
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
							Debug.log('Pace: Init');
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
			_Audio:{
				prototype:{
					mute:false,
					quality:0,
					current:0,
					audio: new Audio(),
					sound: new Array(new Audio()),
					length: new Array(),
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
						//(this.mute)?this.sound[this.current].play():this.sound.[this.current].pause();
						return this.mute = !this.mute;
					},
					set:function(index){
						if (App.ext.useragent.ie)
							return;
						if (!this.mute)
							{
							this.sound[this.current].pause();
							this.current = index;
							try{
							index.currentTime = 0;
							}catch(e){}
							index.play();
							}
					},
					update:function() {
						return;
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
							Debug.log('Audio: Init');
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
					load:function(name,file){
						if (typeof file==="undefined")
							file = name;
						this.Sources.append(this.SpriteAppend(name,file));
						return this.Sources.getByName(name);
					},
					SpriteCreate:function(file,src,name){		
						this.SpriteLoadNumber++;
						this.SpriteLoadTime += (10*App.delta_speed)*this.SpriteLoadNumber;
						return sprite = Object.create(Sprite,{file:{value:file},src:{value:src},name:{value:name}});
					},
					SpriteAppend:function(name,file){	
						return (img = this.SpriteCreate(file,this.path + file + ".png",name)).get();
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
						Sprite = Object.create(null);
						this.Sources = Object.create(null);
						this.Sources.prototype = {	
							get:function get(){return this.index;},
							getByName:function getByName(name){return this.index[name];},
							getName:function getName(name){return this.index[name].name;},
						}
						Sprite = Object.create(this.Base,
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
								Debug.log("GraphicsController: load: "+image.name + ":"+this.count);
							}},
							unload:{value:function unload(name)
							{
								this.index[name]=null; 
								Debug.log('GraphicsController: unload: '+name);
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
								img.number = 1+ this.app.client.graphics.SpriteLoadErrors++;
								img.onload = function() {
										this.app.client.graphics.SpriteLoadErrors--;
										Debug.log("GraphicsController: loaded: "+this.name+":"+(this.app.client.graphics.SpriteLoadErrors));
										
									};
								return img;
							},
						unload:function() {
								this.Sources.unload(this.name);
								Debug.log("GraphicsController: unload: "+image.name + ":"+this.count);
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
			visuals:{
				prototype:{
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
					stat2:DefaultObject,
					alpha:0,
					free:false,
					point:14,
					grd:DefaultObject,
					zindex:1,
					seamless:false,
					tight:true,
					disable:false,
					buffer_target:0,
					
					canvas:DefaultObject,
					buffer:DefaultObject,
					canvas_context:DefaultObject,
					buffer_context:DefaultObject,
					scale:0,
					draw:function(){
						this.canvas_context.clearRect(0,0,window.innerWidth,window.innerHeight);
						if (this.app.client.update.state.initalized)
							this.app.client.update.state.draw();
						this.flip();
							//this.debug();
						this.scale = this.app.client.scale;
					},
					getX:function(){
						return App.ext.input.x-(-App.client.setWidth/2+window.innerWidth/2)+this.app.options.canvas.position.left/3;
					},
					getY:function(){
						return App.ext.input.y-this.app.options.canvas.position.top;
					},
					flip:function(){
						if (this.app.options.canvas.buffer)
						{
							this.canvas_context.drawImage(this.buffer,0,0);
							this.buffer_context.clearRect(0,0,window.innerWidth,window.innerHeight);
						}
					},
					fixX:function(x){
						return ((x*this.scale)+(this.app.client.width/2)-(this.app.client.setWidth/2)*this.scale);
					},
					fixY:function(y){
						return ((y*this.scale)+(this.app.client.height/2)-(this.app.client.setHeight/2)*this.scale);
					},
					fixW:function(w){
						return (w*this.scale);
					},
					fixH:function(h){
						return (h*this.scale);
					},
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
							a:a || 0,
							c:c || false,
							colour:colour || this.colour(),
							oldcol:this.chkc,
							font:font || this.font,
							init:this.stat.init
						}
						else return {
							x:x,y:y,
							w:w || 0,
							h:h || 0,
							s:s,
							a:a || 1,
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
						//this.text_ext("x "+Math.round(App.ext.input.x*100)/100		,25,55,"#FFFFFF",1,1,0);
						//this.text_ext("x: "+Math.round(App.ext.input.window.x*100)/100,75,55,"#FFFFFF",1,1,0);
						//this.text_ext("y "+Math.round(App.ext.input.y*100)/100		,25,70,"#FFFFFF",1,1,0);
						//this.text_ext("y: "+Math.round(App.ext.input.window.y*100)/100,75,70,"#FFFFFF",1,1,0);
						if (App.fps<20)
							console.log(App.fps);
						
						var data = [
									[this.app.client.name],
									[App.code+ " " +App.codefmk],
									[this.app.client.name],
									[
									"app.ext.input",
									"x "+Math.round(App.ext.input.x*100)/100		,
									"x "+Math.round(App.ext.input.window.x*100)/100,
									"d "+App.ext.input.pressed+"   p "+App.ext.input.duration,
									
									
									"y "+Math.round(App.ext.input.y*100)/100		,
									"y "+Math.round(App.ext.input.window.y*100)/100,
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
									"audio ",(App.ext.debug.strength!=="Lite"?this.app.client.Math.Data.kilobyteCount(this.app.client._Audio):"?"),"",
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

						//this.text_ext("D: "+App.ext.input.duration,210,55);
						//this.text_ext("P: "+App.ext.input.pressed,160,55);
						//(App.ext.useragent.trident)?this.text_ext("Input: "+"Touch",160,70):this.text_ext("Input: "+"Mouse",160,70);
						//this.text_ext("I: "+App.ext.input.window.inside+" X: "+App.ext.input.window.x+" Y: "+App.ext.input.window.y,155,70);
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
						//this.text_ext("_Audio: " 	+ this.app.client.Math.Data.kilobyteCount(this.app.client._Audio) 		+"kb",25,265,"#FFFFFF",1,1,0);
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
					fontT:"",
					fontL:"",
					font:function(font)	{ 
						return font!=this.fontT&&(this.canvas_context.font=this.buffer_context.font=this.fontT=font?font:this.fontL);
						//if (font)
						//	this.buffer_context.font = font;
						//return this.buffer_context.font;
					},			
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
						(this.stat.c)?this.buffer_context.fillText(string,this.stat.x-this.stat.w/2-this.stat.s,this.stat.y-this.stat.h/2):this.buffer_context.fillText(string,this.stat.x,this.stat.y+this.stat.h/2);
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
							this.opacity(this.stat.a-(App.ext.input.pressed*0.2));
							App.ext.cursor.set(App.ext.cursor.pointer,true);
							//if (App.ext.input.released)
							//	if (App.ext.input.delay<1)
							//		loc(),App.ext.input.delay = 1;
							(this.stat.c)?this.buffer_context.fillText(string,this.stat.x-this.stat.w/2-this.stat.s,this.stat.y-this.stat.h/2):this.buffer_context.fillText(string,this.stat.x,this.stat.y+this.stat.h/2);
						}
						else
						{
							this.opacity(this.stat.a*0.75);
							(this.stat.c)?this.buffer_context.fillText(string,this.stat.x-this.stat.w/2-this.stat.s,this.stat.y-this.stat.h/2):this.buffer_context.fillText(string,this.stat.x,this.stat.y+this.stat.h/2);
						}		
						this.font(f);
						this.clean();
					},
					within:false,
					shadow:function(col,blur,x,y){
						this.buffer_context.shadowColor = col;
						this.buffer_context.shadowBlur = blur;
						this.buffer_context.shadowOffsetX = x;
						this.buffer_context.shadowOffsetY = y;
					},
					shadow_clear:function(){
						this.buffer_context.shadowBlur = 0;
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
						this.stat.c?this.buffer_context.rect(this.stat.x-this.stat.w/2, this.stat.y-this.stat.h/2, this.stat.w, this.stat.h):this.buffer_context.rect(this.stat.x-this.stat.w*0.2, this.stat.y-this.stat.h*0.2, this.stat.w*1.1, this.stat.h*1.1);
						this.buffer_context.fill();
						
						this.colour("#DDDDDD");
							//this.rect_ext(this.stat.x-this.stat.w/4,this.stat.y-this.stat.h/5,this.stat.w*1.1,this.stat.h*1.1,1,1,0,"#00A0F1");
							this.opacity(this.stat.a-(App.ext.input.pressed*0.2));
							App.ext.cursor.set(App.ext.cursor.pointer,true);
							if (App.ext.input.released)
								if (App.ext.input.delay<1)
									loc(),App.ext.input.delay = 1;
							
							
							(this.stat.c)?this.buffer_context.fillText(string,this.stat.x-this.stat.w/2-this.stat.s,this.stat.y-this.stat.h/2):this.buffer_context.fillText(string,this.stat.x,this.stat.y+this.stat.h/2);
						}
						else
						{
							this.opacity(this.stat.a*0.75);
							(this.stat.c)?this.buffer_context.fillText(string,this.stat.x-this.stat.w/2-this.stat.s,this.stat.y-this.stat.h/2):this.buffer_context.fillText(string,this.stat.x,this.stat.y+this.stat.h/2);
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
					rect:function (x,y,w,h,colour){
						this.rect_ext(x,y,w,h,1,1,0,colour);
					},
					rect_centered:function (x,y,w,h,colour){
						this.rect_ext(x,y,w,h,1,1,1,colour);
					},
					rect_ext:function(x,y,w,h,s,a,c,colour){
						this.stat = this.chk(x,y,w,h,s,a,c,colour);
						this.buffer_context.beginPath();
						this.stat.c?this.buffer_context.rect(this.stat.x-this.stat.w/2, this.stat.y-this.stat.h/2, this.stat.w, this.stat.h):this.buffer_context.rect(this.stat.x, this.stat.y, this.stat.w, this.stat.h);
						this.buffer_context.fill();
						
						this.clean();
					},	
					rect_stroke:function(x,y,w,h,s,a,c,colour,l){
						this.stat = this.chk(x,y,w,h,s,a,c,colour);
						this.buffer_context.beginPath();
						this.stat.c?this.buffer_context.rect(this.stat.x-this.stat.w/2, this.stat.y-this.stat.h/2, this.stat.w, this.stat.h):this.buffer_context.rect(this.stat.x, this.stat.y, this.stat.w, this.stat.h);
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
							if (App.ext.input.released)
								if (App.ext.input.delay<1)
									loc(),App.ext.input.delay = 1;
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
						this.stat.c?this.buffer_context.rect(0-this.stat.w/2,0-this.stat.h/2, this.stat.w, this.stat.h):this.buffer_context.rect(0, 0, this.stat.w, this.stat.h);
						this.buffer_context.rotate(-angle*0.0174532925);
						this.buffer_context.translate(-this.stat.x,-this.stat.y);
						this.clean();
					},
					rect_gradient:function(x,y,w,h,s,a,c,colour,colour2,angle){
						this.stat = this.chk(x,y,w,h,s,a,c,colour);
						this.buffer_context.translate(this.stat.x,this.stat.y);
						this.buffer_context.rotate(angle*0.0174532925);
						this.stat.c?this.grd = this.buffer_context.createLinearGradient(this.stat.w/2,0, this.stat.w/2, this.stat.h/2):this.grd = this.buffer_context.createLinearGradient(0,0, this.stat.w, this.stat.h);
						this.buffer_context.beginPath();
						this.stat.c?this.buffer_context.rect(0-this.stat.w/2,0-this.stat.h/2, this.stat.w, this.stat.h):this.buffer_context.rect(0, 0, this.stat.w, this.stat.h);
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
					image_ext:function(image,x,y,s,a,c){		
						this.stat = this.chk(x,y,image.width,image.height,s,a,c);
						(this.stat.c)?this.buffer_context.drawImage(image,this.stat.x-this.stat.w/2,this.stat.y-this.stat.h/2,this.stat.w,this.stat.h):this.buffer_context.drawImage(image,this.stat.x,this.stat.y,this.stat.w,this.stat.h);
					},
					image_centered:function(image,x,y){		
						this.image_ext(image,x,y,1,1,true);
					},
					image:function(image,x,y){		
						this.image_ext(image,x,y,1,1,false);
					},
					image_part:function(image,x,y,s,a,c,xx,yy,w,h){
						this.stat = this.chk(x,y,w,h,s,a,c);
						this.buffer_context.drawImage(image,this.stat.x-this.stat.w/2,this.stat.y-this.stat.h/2,this.stat.w,this.stat.h,1,1,image.width,image.height);
					},
					image_rotate:function(image,x,y,s,angle,a,xoff,yoff){
						this.stat = this.chk(x,y,image.width,image.height,s,a,true);
						this.buffer_context.translate(this.stat.x,this.stat.y);
						this.buffer_context.rotate(angle*0.0174532925);
						(this.stat.c)?this.buffer_context.drawImage(image,0-this.stat.w/2,0-this.stat.h/2,this.stat.w,this.stat.h):this.buffer_context.drawImage(image,0,0,this.stat.w,this.stat.h);
						this.buffer_context.rotate(-angle*0.0174532925);
						this.buffer_context.translate(-this.stat.x,-this.stat.y);
					},
					
					image_button:function(image,x,y,s,loc,highlight,xscale,yscale,a,centered){
						this.stat = this.chk(x,y,image.width*s*xscale,image.height*s*yscale,s,a,centered);
						this.stat2 = this.chk(x,y,(image.width*s*xscale)*0.9,(image.height*s*yscale)*0.9,s,a,centered);
						var w = false;
						if (this.touch_within_stat(this.stat2))
						{
							w = true;
							this.opacity(this.stat.a-(App.ext.input.pressed*0.2));
							App.ext.cursor.set(App.ext.cursor.pointer,true);
							if (App.ext.input.released)
								if (App.ext.input.delay<1)
									loc(),App.ext.input.delay = 1;
							(this.stat.c)?this.buffer_context.drawImage(image,this.stat.x-this.stat.w/2,this.stat.y-this.stat.h/2,this.stat.w,this.stat.h):this.buffer_context.drawImage(image,this.stat.x,this.stat.y,this.stat.w,this.stat.h);
						}
						else
						{
							this.opacity(this.stat.a*0.75);
							(this.stat.c)?this.buffer_context.drawImage(image,this.stat.x-this.stat.w/2,this.stat.y-this.stat.h/2,this.stat.w,this.stat.h):this.buffer_context.drawImage(image,this.stat.x,this.stat.y,this.stat.w,this.stat.h);
						}			
						return w;
					},
					touch_within:function(x, y, w, h,c) {
						return c?((App.ext.input.x>x-w/2&&App.ext.input.x<x+w/2&&App.ext.input.y>y-h/2&&App.ext.input.y<y+h/2)?true:false):((App.ext.input.x>x&&App.ext.input.x<x+w&&App.ext.input.y>y&&App.ext.input.y<y+h)?true:false);
					},
					touch_within_stat:function(stat) {
						return stat.c?((App.ext.input.x>stat.x-stat.w/2&&App.ext.input.x<stat.x+stat.w/2&&App.ext.input.y>stat.y-stat.h/2&&App.ext.input.y<stat.y+stat.h/2)?true:false):((App.ext.input.x>stat.x&&App.ext.input.x<stat.x+stat.w&&App.ext.input.y>stat.y&&App.ext.input.y<stat.y+stat.h)?true:false);
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
					circle:function(x,y,r,col,a){
						this.stat = this.chk(x,y,1,1,r,a,true,col);
						this.buffer_context.beginPath();
						this.buffer_context.arc(this.stat.x, this.stat.y, this.stat.s*this.scale, 0, 2 * Math.PI, false);
						this.buffer_context.fillStyle = this.stat.colour;
						this.buffer_context.fill();
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
			_Cookies:{
				prototype:{
					list:new Array(),
					expires:"",
					nameEQ:"=",
					ca:"",
					createCookie:function(name,value,days){
						if (days) {
							var date = new Date();
							date.setTime(date.getTime()+(days*24*60*60*1000));
							this.expires = "; expires="+date.toGMTString();
						}
						else this.expires = "";
						document.cookie = name+"="+value+";"+this.expires+"; path=/";
					return this.list.push(value);
					},
					readCookie:function(name){
						this.nameEQ = name + "=";
						this.ca = document.cookie.split(';');
						for(var i=0;i < this.ca.length;i++) {
							var c = this.ca[i];
							while (c.charAt(0)==' ') c = c.substring(1,c.length);
							if (c.indexOf(this.nameEQ) == 0) return c.substring(this.nameEQ.length,c.length);
						}
						//return null;
					},
					eraseCookie:function(name){
						this.createCookie(name,"",-1);
					}
				},
				constructor:function(){return {
						init:{value:function(){
									Debug.log('Cookies: Init');
								return true;
								}
							}
						}
					}
				},
				discription:"",
				scale:1,
				delta:1,
				width:0,
				height:0,
				setWidth:0,
				setHeight:0,
				resized:false,
				targetfps:60,
				_Main:{constructor:function(){return {name:{value:"Main"}};}}
				},
			constructor:function(a){return{
				app:{value:a},
				init:{value:function(name,w,h){
							(this.app.ext = this.app.Construct(this.app.ext.prototype,this.app.ext.constructor)).init(name);
							this.discription = "Eh";
							this.w = this.width = this.setWidth = w;
							this.h = this.height = this.setHeight = h;
							(this.visuals = this.app.Construct(this.visuals.prototype,this.visuals.constructor)).init(this);
							(this.graphics = this.app.Construct(this.graphics.prototype,this.graphics.constructor)).init();
							
							this._Room = Object.create(this._Room.prototype,this._Room.constructor()).init();
							(this.cookies = this._Cookies = Object.create(this._Cookies.prototype,this._Cookies.constructor())).init();
							(this.audio = this._Audio = Object.create(this._Audio.prototype,this._Audio.constructor())).init();
							(this.mainLoop = Object.create(this._Pace.prototype,this._Pace.constructor(this))).init(this.targetfps,this.targetfps);
							(this.second = Object.create(this._Pace.prototype,this._Pace.constructor(this))).init(1.0,this.targetfps);
							this._Main = Object.create(_Main.prototype,this._Main.constructor());
							(this.update.state = Object.create(this.update.state.prototype,this.update.state.constructor())).init(this._Main);
						}
					}
				}
			}
		}
	},
	constructor:{	
			Init:{writable: true,  configurable:true, enumerable:false, value:function(name,w,h){	
				(this.canvas = this.Construct(this.canvas.prototype,this.canvas.constructor)).init();
				this.client.init(name,w,h);
				}
			},		
			Construct:{writable:false, configurable:false, enumerable:false, value:function(prototype,constructor){
				var c = typeof constructor;
				switch(c)
					{
					case 'undefined':
						return Object.create(prototype);
					break;
					case 'object':
						return Object.create(prototype,constructor);
					break;
					case 'function':
						return Object.create(prototype,constructor(this));
					break;
					default:
						console.log("Expected 'object' or 'function': Type is "+c);
						return {};
					}
				}
			},
			OnApplicationLoad:{writable:false, configurable:false, enumerable:false, value:function(){
				App.OnStart();
				App.OnLoad();
				}
			},	
			OnStart:{writable:false, configurable:false, enumerable:false, value:function(){
				(this.client = this.Construct(this.client.prototype,this.client.constructor));
				(this.time = (( new Date().getTime())-TT)*100);
				setTimeout(	function(A){
				
								function AppLoop(){
									App=A;
									A.client.loop(A);
								}
								A.client.start(AppLoop,A.scale);
							}(this),this.time);
				}
			},
			OnLoad:{writable:true, configurable:false, enumerable:false, value:function(){
				App.Init("Spice.js",480,320);
				}
			},
			scripts:{value:window.scripts},
			codefmk:{value:'0.6.50.14.26.06.min'},
			code:{value:"0"}
	},
	scripts:[],
	framesT:0.0,
	frames:0.0,
	delta:0.0,
	debug:false,
	
	time:0,
	fps:0,
	width:320,
	height:480
});

App = Object.create(App.prototype,App.constructor);
addListener(document, "DOMContentLoaded", App.OnApplicationLoad);
/*	Dynamically Loading Scripts 
Scripts = window.scripts = [''];
				if ((!function(e,t,r){function n(){for(;d[0]&&"loaded"==d[0][f];)c=d.shift(),c[o]=!i.parentNode.insertBefore(c,i)}for(var s,a,c,d=[],i=e.scripts[0],o="onreadystatechange",f="readyState";s=r.shift();)a=e.createElement(t),"async"in i?(a.async=!1,e.head.appendChild(a)):i[f]?(d.push(a),a[o]=n):e.write("<"+t+' src="'+App.options.paths.data+s+'" defer></'+t+">"),a.src=App.options.paths.data+s}(document,"script",window.scripts))){};
*/

/* Custom Polyfill for RequestAnimationFrame */
document.requestNextAnimationFrame = window.requestNextAnimationFrame =
		    (function () {
			var originalWebkitRequestAnimationFrame = undefined;
			var wrapper = undefined;
			var callback = undefined;
			var geckoVersion = 0;
			var userAgent = navigator.userAgent;
			var index = 0;
			var self = this;
			if (window.webkitRequestAnimationFrame) 
				{
					wrapper = function (time) {
					if (time === undefined) 
						{
							time = +new Date();
						}
					self.callback(time);
				 };
				 originalWebkitRequestAnimationFrame = window.webkitRequestAnimationFrame;
				 window.webkitRequestAnimationFrame = function (callback, element) 
				 {
					self.callback = callback;
					originalWebkitRequestAnimationFrame(wrapper, element);
				 }
				}
			if (window.mozRequestAnimationFrame) 
				{
				 index = userAgent.indexOf('rv:');
				 if (userAgent.indexOf('Gecko') != -1) 
					{
					geckoVersion = userAgent.substr(index + 3, 3);
					if (geckoVersion === '2.0') 
						{
					   window.mozRequestAnimationFrame = undefined;
						}
					}
			  }
			  return window.requestAnimationFrame   ||
				 window.webkitRequestAnimationFrame ||
				 window.mozRequestAnimationFrame    ||
				 window.oRequestAnimationFrame      ||
				 window.msRequestAnimationFrame     ||
				 function (callback, element) 
				 {
					var start;
					var finish;
					window.setTimeout( function () 
						{
							start = +new Date();
							callback(start);
							finish = +new Date();
							self.timeout = 1000 / 60 - (finish - start);
						}, self.timeout);
				 };
			  }
		   )();
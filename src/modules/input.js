
import SJSClass from './sjsclass.js';

export default class Input extends SJSClass {

    constructor(app,pointerPoint){

        super(app);

        this.x = 0;
		this.y = 0;
		this.delay = 0;
		this.duration =  0;
		this.press = false;
		this.pressed = false;
		this.released = false;
		this.end =  {x:0,y:0};
		this.pos =  {x:0,y:0};
		this.dist =  {x:0,y:0};
		this.start = {x:0,y:0};
		this.last =  {x:0,y:0};
        this.touch=false;
        this.touch_dist={x:0,y:0};

        this.key=false;
        this.keyPower=0;
        this.keyup=false;
        this.keydown=false;

        this.control = false;

        this.body=document.body;
        this.codes = [];
        this.codeList = [];
        this.confine = false;
        this.preventNext = true;

        this.multi = {

          list:[]

        };

        this.doc = document;

        this.window = window;

        this.name = "eh";

        this.pointerPoint = pointerPoint;


        this.init_options();

        if (!this.pointerPoint)
            this.init_pointerEvents();

        if (!this.pointerPoint)
            this.init_keys();

        this.detect();



        this.controls = {

            app:null,

            mouse_lastx:null,

            up:function(data){

                var input;

                if (!this.app)
                    this.app = data.app;

                input = this.app.input;


				input.end.x = data.x;
				input.end.y = data.y;

				input.touched.uplist.push({x:input.x,y:input.y});
				input.touched.last = {x:input.x,y:input.y};
				input.touched.count = 0;

				input.press = false;
				input.pressed = false;
				input.released = true;
				input.touch = false;
				input.dist.x = (input.x-input.start.x)*this.app.getScale();
				input.dist.y = (input.y-input.start.y)*this.app.getScale();

                return true;
            },

            down:function(data){

                var input;

                if (!this.app)
                    this.app = data.app;

                input = this.app.input;

                input.x = input.start.x = data.x;
                input.y = input.start.y = data.y;

                input.press = true;
                input.pressed = true;

				input.dist.x = 0;
				input.dist.y = 0;

				input.touched.downlist.push({x:input.x,y:input.y});

                return true;

            },

            move:function(data){

                var input;

                if (!this.app)
                    this.app = data.app;

                input = this.app.input;

                if (input.pressed)
                {
					input.press = true;
					input.x = data.x;
					input.y = data.y;
					input.dist.x = (input.x-input.start.x)*this.app.getScale();
					input.dist.y = (input.y-input.start.y)*this.app.getScale();


					if (input.dist.x>0)
						if (this.mouse_lastx>input.dist.x)
                        {
							input.start.x = input.x;
                            input.dist.x = 0;
                        }

					if (input.dist.x<0)
						if (this.mouse_lastx<input.dist.x)
                        {
							input.start.x = input.x;
                            input.dist.x = 0;
                        }

					this.mouse_lastx =  input.dist.x;
                }

                return true;

            },

        };

        this.scroll = {

            prototype:{

                /* Cache */

                x:0,
                y:1,
                target:{x:0,y:0},

                accel:1,

                active:null,
                reverse:false,
                a:false,

                window:window,
                doc:document.documentElement,

                //ScrollWheel Event
                event:function(evt,delta) {

                    if (this.app.options.get("seamless"))
                       this.app.input.scroll.a = true;

                    if (this.app.options.get("seamless"))
                        evt.preventDefault();

                    //if (this.app.options.get("overridescroll")==false)
                        return;


                    /*
                    this.app.input.wheelDelta = evt.wheelDelta;

                    var doc = document.documentElement;
                    var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
                    var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);


                       //Flip for horizontal scrolling
                       if (this.reverse)
                       {
                           this.app.input.scroll.target.x = left;
                           this.app.input.scroll.target.y = top-evt.wheelDelta;
                           this.app.input.scroll.x = left;
                           this.app.input.scroll.y = top-evt.wheelDelta;
                       }
                       else{
                           this.app.input.scroll.target.y = 0;
                           this.app.input.scroll.target.x = left-evt.wheelDelta;
                           this.app.input.scroll.y = 0;
                           this.app.input.scroll.x = left-evt.wheelDelta;
                       }
                      */
                    //App.ext.scroll.active = false;$

                },

                up:function(){

                    var transitionSpeed = 1;

                    if (this.target.x>this.x)
                        this.x+=this.app.client.Math.Clamp(Math.floor((this.target.x-this.x)*(transitionSpeed)),1,100),this.a=true;

                    if (this.target.x<this.x)
                        this.x-=this.app.client.Math.Clamp(Math.floor((this.x-this.target.x)*(transitionSpeed)),1,100),this.a=true;

                    this.x = this.app.client.Math.Clamp(this.x,0,window.innerWidth*3);
                    this.target.x = this.app.client.Math.Clamp(this.target.x,0,window.innerWidth*3);

                    //if (this.a)
                    //this.window.scrollTo(this.x,this.y),this.a = false;

                    log(this.x,this.y);

                },

                //Update the position for smooth scrolling

                update:function(x,y){

                    var left = (this.window.pageXOffset || this.doc.scrollLeft) - (this.doc.clientLeft || 0);
                    var top = (this.window.pageYOffset || this.doc.scrollTop)  - (this.doc.clientTop || 0);

                    /* DEACTIVATE IF CONFUSED */
                    if (!this.active)
                        return;

                    var LD = Math.round(-this.x+this.target.x)/10;
                    var YD = Math.round(-this.y+this.target.y)/10;

                    if (left<this.target.x)
                        this.x+=this.accel*LD;
                    if (left>this.target.x)
                        this.x+=this.accel*LD;
                    if (top<this.target.y)
                        this.y+=this.accel*YD;
                    if (top>this.target.y)
                        this.y+=this.accel*YD;

                //	this.window.scrollTo(this.x,this.y);

                    if ((Math.round(this.x/10) == Math.round(this.target.x/10))&&
                        (Math.round(this.y/10) == Math.round(this.target.y/10)))
                        return false;

                    return true;
                },

                //Set position,

                to:function(x,y) {

                    this.target.x = x;
                    this.target.y = y;

                }

            },

            constructor:function(a){return {
                app:{value:a},
                init:{value:function(){
                            this.to(0,0);
                            return this;
                        }
                    }
                }
            }

        },

        this.listener = {

			touchpoints:0,

			//Input down/press polyfill
			down:function(evt) {
				//Grab parent
				var input = evt.target.app.input;

				//Save Latest X/Y or 0

				input.x = input.start.x = evt.x || evt.clientX || evt.pageX;
				input.y = input.start.y = evt.y || evt.clientY || evt.pageY;

				//Increment Touch Count
				input.touched.count++;

				//Add positions to touch list
				input.touched.downlist.push({x:input.x,y:input.y});

				//Track touch downs, make CheckTouchDown and CheckTouchUp for buttons

				//Flags
                if (!Windows)
				input.pressed = true;
                if (!Windows)
				input.press = true;

				//Reset distance
				input.dist.x = 0;
				input.dist.y = 0;
			},

			//input move fill

			mouse_last:0,
			move:function(evt){

				//Grab parent
				var input = evt.target.app.input;

				evt = evt || input || {clientX:null,clientY:null};

				var mouse_last = this.mouse_last;
				//sET PRESS

                if (input.pressed)
                {
                if (!Windows)
				input.press = true;
				input.x = evt.clientX || evt.x || evt.pageX;
				input.y = evt.clientY || evt.y || evt.pageY;
				input.dist.x = (input.x-input.start.x)*evt.target.app.getScale();
				input.dist.y = (input.y-input.start.y)*evt.target.app.getScale();


				if (input.dist.x>0)
					if (this.mouse_last>input.dist.x)
						input.start.x = input.x, input.dist.x = 0;

				if (input.dist.x<0)
					if (this.mouse_last<input.dist.x)
						input.start.x = input.x, input.dist.x = 0;

				this.mouse_last =  input.dist.x;
                }

			},

			up:function(evt) {

				var input = evt.target.app.input;

				input.end.x = evt.x || input.x;
				input.end.y = evt.y || input.y;

				input.touched.uplist.push({x:input.x,y:input.y});
				input.touched.last = {x:input.x,y:input.y};
				input.touched.count--;
				//Track touch downs, make CheckTouchDown and CheckTouchUp for buttons


				input.press = false;
				input.pressed = false;
				input.released = true;
				input.touch = false;
				input.dist.x = (input.x-input.start.x)*evt.target.app.getScale();
				input.dist.y = (input.y-input.start.y)*evt.target.app.getScale();
			},

			key_down:function(evt){
				evt.input.key = true;
				evt.input.kpressed = true;
			},

			key_up:function(evt){
				evt.input.key = false;
				evt.input.kpressed = false;
				evt.input.kreleased = true;
				evt.input.kpressed = false;
			},

			touch:function(evt){
                return;
			                         //	var input = touch.target.app.input;


				//log(input,touch);
				try {
				var input = evt.target.app.input || evt;
				} catch (e){
					var input = evt; log(evt);
				};
				input.touch = true;

				input.x = evt.clientX || evt.x || evt.pageX;
				input.y = evt.clientY || evt.y || evt.pageY;

				input.pos = {x:0,y:0};
				input.pos.x = evt.pageX||evt.clientX;
				input.pos.y = evt.pageY||evt.clientY;
				input.released = false;
				input.duration = 0;

			},

		};

		this.touched = {

			count:0,
			uplist:[],
			downlist:[],
			last:{x:0,y:0},
			CheckTouchUp:function(){

				return this.uplist[this.uplist.length-1];
			},
			CheckTouchDown:function(){

			}

		};

        this.scroll = (this.app.Construct(this.scroll.prototype,this.scroll.constructor)).init();

    }

    init_options(){

        /*	Overrides the selection start event for selecting events	*/

        if (!this.app.options.get("override").SelectStart){
            this.app.Listener(this.app.canvas.canvas,'selectstart',this.preventDefault);
        }

        /*	Overrides the 'holdtouch, MSHoldVisual' event */

        if (!this.app.options.get("override").MSHoldVisual){
            this.app.Listener(this.app.canvas.canvas,'MSHoldVisual',this.preventDefault);
        }

        /* Overrides the ContextMenu event */

        if (this.app.options.get("override").ContextMenu) {
            this.doc.oncontextmenu = this.preventDefault;
            this.window.self.oncontextmenu = this.preventDefault;
        }

        /*	Overrides dragstart event		*/

        if (this.app.options.get("override").Drag) {
            this.doc.ondragstart   = this.preventDefault;
            this.window.self.ondragstart   = this.preventDefault;
        }

        /*	CSS based Overrides

                - mstouch
                - seamless ( toggles overflow )
                - tight ( zeros padding and margin )

        */

        if (this.app.options.get("flags").mstouch){
            this.doc.body.setAttribute("style","-ms-touch-action: none; ms-content-zooming: none; touch-action: none; -ms-overflow-style: none;");
        }

        if (this.app.options.get("flags").seamless){
            this.doc.body.style.overflow = "hidden";
        }

        if (this.app.options.get("flags").tight){
            this.doc.body.style.padding = "0px", this.doc.body.style.margin = "0px auto";
        }

    }

    init_keys(){

		/* 	Key Down and Key Up Events - Populates supported codes */

		this.populateCodes();

		this.app.Listener(this.window.self,'keydown',function(evt){

				if (this.app.input.preventNext==true)
					evt.preventDefault();

				this.app.input.preventNext = false;
				this.app.input.codedown = this.app.input.codes[evt.keyCode];

				this.app.input.codeList.push(this.app.input.codedown);

				if (evt.ctrlKey)
					this.app.input.control = true;

				this.app.input.pressed = true;
				this.app.input.released = false;

				this.app.input.listener.key_down(this.app);

		});

		this.app.Listener(this.window.self,'keyup',function(evt) {

				if (this.app.input.preventNext)
					evt.preventDefault();

				this.app.input.preventNext = false;
				this.app.input.codeup = this.app.input.codes[evt.keyCode];

				this.app.input.keyboardPop(this.app.input.codeup);

				this.app.input.control = false;
				this.app.input.pressed = false;
				this.app.input.released = true;
				this.app.input.true = true;

				this.app.input.listener.key_up(this.app);

		});

    }

    init_win(){

       // this.upointer = window.WinPointer;
       // console.log(this.upointer);
        this.wininitalize = false;
        this.winpoint = null;

    }

    init_pointerEvents(){

		/* mousewheel event			*/

		//this.app.Listener(this.window.self,'mousewheel',this.scroll.event);

		/*

			Pointer events

				- Modern Touch Events
				- MS Pointer Events
				- Legacy Mouse and Touch Events

		*/
		var typeofEvent =( 0 || this.window.self.PointerEvent || this.window.self.MSPointerEvent );
		var events = [];
		var _functions = [];
		var self = this.window.self;


        /*

		switch (typeofEvent) {

			case this.window.self.PointerEvent:

				events = [
					'pointerdown',
					'pointerup',
					'pointermove'
				];

				_functions = [
					function(){},
					function(){},
					function(){}
				]

			break;

			case this.window.self.MSPointerEvent:

				events = [
					'MSPointerDown',
					'MSPointerMove',
					'MSPointerUp'
				];

				_functions = [
					function(){},
					function(){},
					function(){}
				]

			break;

			case 'touch':

				events = [
					'touchdown',
					'touchup',
					'touchmove'
				];

				_functions = [
					function(){},
					function(){},
					function(){}
				]

			break;

			default:

				events = [
					'mousedown',
					'mouseup',
					'mousemove'
				];

				_functions = [
					function(){},
					function(){},
					function(){}
				]

			break;
	 	}

        */

		for(var e = events.length-1; e>0; e--)
			this.app.Listener(self,events[e],_function);



		if	(this.window.self.PointerEvent){

			this.app.Listener(this.window.self,'pointerdown',function(evt) {

				if (!evt.target.app)
					return;
				evt.target.app.input.touch = true;
				evt.target.app.input.listener.down(evt);

			});

			this.app.Listener(this.window.self,'pointermove',function(evt) {

				if (!evt.target.app)
					return;
				evt.target.app.input.touch = true;
				evt.target.app.input.listener.move(evt);

			});

			this.app.Listener(this.window.self,'pointerup',	function(evt) {

				if (!evt.target.app)
					return;
				evt.target.app.input.touch = false;
				evt.target.app.input.listener.up(evt);

			});

		}
		else
		if (this.window.self.MSPointerEvent) {

				//MS Pointer Events
				this.app.Listener(this.window.self,'MSPointerDown',function(evt) {

						if (!evt.target.app)
							return;
						evt.target.app.input.touch = true;
						evt.target.app.input.listener.down(evt);

				});

				this.app.Listener(this.window.self,'MSPointerMove',function(evt) {

						if (!evt.target.app)
							return;
						evt.target.app.input.touch = true;
						evt.target.app.input.listener.move(evt);

				});

				this.app.Listener(this.window.self,'MSPointerUp',	function(evt) {

						if (!evt.target.app)
							return;
						evt.target.app.input.touch = false;
						evt.target.app.input.listener.up(evt);

				});

		}
		else
		{

			this.app.Listener(this.window.self,'mousedown',function(evt) {

					if (!evt.target.app)
						return;

					evt.target.app.input.listener.down(evt);

			});

			this.app.Listener(this.window.self,'mousemove',function(evt) {

					if (!evt.target.app)
						return;

					evt.target.app.input.listener.move(evt);

			});

			this.app.Listener(this.window.self,'mouseup',function(evt) {

					if (!evt.target.app)
						return;

					evt.target.app.input.touch = false;
					evt.target.app.input.listener.up(evt,evt);

			});

			this.app.Listener(this.window.self,'touchstart',	function(evt) {

					if (!evt.target.app)
						return;

					evt.target.app.input.touch = true;
					evt.target.app.input.listener.touch(evt.targetTouches[0]);

					if (evt.target.app.options.flags.touchprevent)
						evt.preventDefault();

			});

			this.app.Listener(this.window.self,'touchmove',	function(evt) {

					if (!evt.target.app)
						return;

					if (evt.target.app.options.flags.touchprevent)
						evt.preventDefault();

					evt.target.app.input.touch = true;
					evt.target.app.input.listener.move(evt,evt.targetTouches[0]);

			});

			this.app.Listener(this.window.self,'touchend',		function(evt) {

					if (!evt.target.app)
						return;

					evt.target.app.input.touch = false;
					evt.target.app.input.listener.up(evt);

					if (evt.target.app.options.flags.touchprevent)
						evt.preventDefault();
			});

		}
    }


    detect(){

      // if (window.winPointer)
      //     this.init_win();
      // else
      //     log("No Win");

    }

    preventDefault(e) {  e.preventDefault(); return e.target.app; }
    preventNextInput() { return this.preventNext = true; }

    winupdate(){

        var i = 0;

        var data = {
            app:this.app,
            x:0,
            y:0
        }


        if ((this.pressed==false)&&(this.lastpressed==true))
        {
            this.released = true,this.dist.x=0,this.dist.y=0;

            this.controls.up(data);
        }

        this.lastpressed = this.pressed;

        if (!this.wininitalize)
        try {

            var w = Windows;
            var p = Windows.UI.Input.PointerPoint.getCurrentPoint(1);


            this.pressed = (Windows.UI.Input.PointerPoint.getCurrentPoint(1).isInContact);
            this.pointerDevice = (Windows.UI.Input.PointerPoint.getCurrentPoint(1).pointerDevice);
            this.wininitalize = true;


            data = {
                app:this.app,
                x:this.winposition.x,
                y:this.winposition.y
            };

        }catch(e){

            data = {
                app:this.app,
                x:0,
                y:0
            };

        }
        else{
            this.winpoint = Windows.UI.Input.PointerPoint.getCurrentPoint(1);
            this.winposition = this.pointerPoint.getCurrentPoint(1).rawPosition;
            this.pressed = (this.winpoint.isInContact);
            this.pointerDevice = (this.winpoint.pointerDevice);

            var pt = this.pointerPoint.getCurrentPoint(1);
            var ptTargetProperties = pt.properties;


                    if (this.released)
                                        {

                                                    var details = "Pointer Id: " + pt.pointerId + " device: " + pt.pointerDevice.pointerDeviceType;

                                                    switch (pt.pointerDevice.pointerDeviceType) {
                                                        case "mouse":
                                                        case 2:
                                                            details += "\nPointer type: mouse";
                                                            details += "\nLeft button: " + ptTargetProperties.isLeftButtonPressed;
                                                            details += "\nRight button: " + ptTargetProperties.isRightButtonPressed;
                                                            details += "\nWheel button: " + ptTargetProperties.isMiddleButtonPressed;
                                                            details += "\nX1 button: " + ptTargetProperties.isXButton1Pressed;
                                                            details += "\nX2 button: " + ptTargetProperties.isXButton2Pressed;
                                                            break;
                                                        case "pen":
                                                            details += "\nPointer type: pen";
                                                            if (pt.isInContact) {
                                                                details += "\nPressure: " + ptTargetProperties.pressure;
                                                                details += "\nrotation: " + ptTargetProperties.rotation;
                                                                details += "\nTilt X: " + ptTargetProperties.tiltX;
                                                                details += "\nTilt Y: " + ptTargetProperties.tiltY;
                                                                details += "\nBarrel button pressed: " + ptTargetProperties.isBarrelButtonPressed;
                                                            }
                                                            break;
                                                        case "touch":
                                                            details += "\nPointer type: touch";
                                                            details += "\nPressure: " + ptTargetProperties.pressure;
                                                            details += "\nrotation: " + ptTargetProperties.rotation;
                                                            details += "\nTilt X: " + ptTargetProperties.tiltX;
                                                            details += "\nTilt Y: " + ptTargetProperties.tiltY;
                                                            break;
                                                        default:
                                                            details += "\nPointer type: " + "n/a";
                                                            break;
                                                    }
                                            details+="\n x:"+this.winposition.x + " y: "+this.winposition.y;
                                                   //details += "\nPointer location (target): " + pt.offsetX + ", " + pt.offsetY;
                                                   //details += "\nPointer location (screen): " + pt.screenX + ", " + pt.screenY;
                                            //console.log(pt.pointerDevice);
                                            //console.log(details);
                                        }
                                        i=this.winpoint;

            data.x = this.winposition.x;
            data.y = this.winposition.y;


        if ((this.pressed==true)&&(this.lastpressed==true))
            this.controls.move(data);

        }



        if ((this.pressed==true)&&(this.lastpressed==false))
            this.controls.down(data);

       // console.log(i)
      //  if (Windows)
      //  if (Windows.UI.Input.PointerPoint.getCurrentPoint(1).isInContact)
      //  this.pressed = (Windows.UI.Input.PointerPoint.getCurrentPoint(1).isInContact);

    }

    		update() {


    			//Reset last positions
    			this.last.x = this.x;
    			this.last.y = this.y;

    			//Confine x,y
    			this.confined();

    			//Reset variables
    			this.press = false;
    			this.touch = 0;
    			this.window.inside = 0;
    			this.wheelDelta = 0;

    			//If pressed, increase duration, otherwise reset
    			this.pressed?this.duration++:this.duration=0;

    			//if released, reset release and distance. else nothing.
    			this.released?(this.released=false,this.dist.x=0,this.dist.y=0):null;

                this.winupdate();

    			//reset code released, unused?
    			this.codereleased = 0;

    			//decrease delay if delay>0
    			(this.delay>0)?this.delay-=Math.floor(this.delay-1*this.app.getDelta()):null;





    		return true;
    		}


            		confined(){

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

            		}

            		/*

            			Populates this.codes with an array of codes

            		*/

            		populateCodes(){

            			// Keyboard Codes 0 - whatver, includes keypad, wii and controllers

            			this.codes = [],this.codes[0]="",this.codes[1]="",this.codes[2]="",this.codes[3]="",this.codes[4]="",this.codes[5]="",this.codes[6]="",this.codes[7]="",this.codes[8]="backspace",this.codes[9]="tab",this.codes[13]="enter",this.codes[16]="shift",this.codes[17]="ctrl",this.codes[18]="alt",this.codes[19]="pause/break",this.codes[20]="capslock",this.codes[27]="escape",this.codes[32]="space",this.codes[33]="pageup",this.codes[34]="pagedown",this.codes[35]="end",this.codes[36]="home",this.codes[37]="leftarrow",this.codes[38]="uparrow",this.codes[39]="rightarrow",this.codes[40]="downarrow",this.codes[45]="insert",this.codes[46]="delete",this.codes[48]="0",this.codes[49]="1",this.codes[50]="2",this.codes[51]="3",this.codes[52]="4",this.codes[53]="5",this.codes[54]="6",this.codes[55]="7",this.codes[56]="8",this.codes[57]="9",this.codes[65]="a",this.codes[66]="b",this.codes[67]="c",this.codes[68]="d",this.codes[69]="e",this.codes[70]="f",this.codes[71]="g",this.codes[72]="h",this.codes[73]="i",this.codes[74]="j",this.codes[75]="k",this.codes[76]="l",this.codes[77]="m",this.codes[78]="n",this.codes[79]="o",this.codes[80]="p",this.codes[81]="q",this.codes[82]="r",this.codes[83]="s",this.codes[84]="t",this.codes[85]="u",this.codes[86]="v",this.codes[87]="w",this.codes[88]="x",this.codes[89]="y",this.codes[90]="z",this.codes[91]="leftwindowkey",this.codes[92]="rightwindowkey",this.codes[93]="selectkey",this.codes[96]="numpad0",this.codes[97]="numpad1",this.codes[98]="numpad2",this.codes[99]="numpad3",this.codes[100]="numpad4",this.codes[101]="numpad5",this.codes[102]="numpad6",this.codes[103]="numpad7",this.codes[104]="numpad8",this.codes[105]="numpad9",this.codes[106]="multiply",this.codes[107]="add",this.codes[109]="subtract",this.codes[110]="decimalpoint",this.codes[111]="divide",this.codes[112]="f1",this.codes[113]="f2",this.codes[114]="f3",this.codes[115]="f4",this.codes[116]="f5",this.codes[117]="f6",this.codes[118]="f7",this.codes[119]="f8",this.codes[120]="f9",this.codes[121]="f10",this.codes[122]="f11",this.codes[123]="f12",this.codes[144]="numlock",this.codes[145]="scrolllock",this.codes[175]="Up (Wii?)",this.codes[176]="Down (Wii?)",this.codes[177]="Left (Wii?)",this.codes[178]="Right (Wii?)",this.codes[170]="- (Wii?)",this.codes[174]="+ (Wii?)",this.codes[172]="1 (Wii?)",this.codes[173]="2 (Wii?)",this.codes[186]="semi-colon",this.codes[187]="equalsign",this.codes[188]="comma",this.codes[189]="dash",this.codes[190]="period",this.codes[191]="forwardslash",this.codes[192]="graveaccent",this.codes[219]="openbracket",this.codes[220]="backslash",this.codes[221]="closebraket",this.codes[222]="singlequote";

            			/*



            			*/
            		}

            		/*

            			Check if keyboard key is pressed

            		*/

            		keyboardCheck(code){

            			var e = this.codeList.length-1;
            			for (var i = e;i>=0;--i)
            				if (this.codeList[i]==code)
            					return true;

            		return false;
            		}

            		/*

            			Add code to array

            		*/

            		keyboardPop(code){
            				var e = this.codeList.length-1;
            				for (var i = e;i>=0;--i)
            					if (this.codeList[i]==code)
            						this.codeList[i] = null;
            		}

            		/*
            			Unused? Legacy Functions
            		*/

            		mouse() {

            			if (!App.input.pressed)
            				App.input.dist =  App.client.Math.Vector.Difference(App.ext.input,App.input.start);

            		}
            		mouse_distance() {

            			if (!App.input.pressed)
            				App.input.dist =  App.client.Math.Vector.Difference(App.input.start,App.input.end);

            		}

            		touch_distance(touch) {

            			if (!touch)
            				return;
            			App.input.x = touch.pageX||touch.clientX;
            			App.input.y = touch.pageY||touch.clientX;
            			//if (!App.input.input.pressed)
            				App.input.dist =  App.client.Math.Vector.Difference(App.input.start,App.input.end);

            		}

                    getPosition(canvas,evt) {
                        if ((!canvas)||(!evt))
                                return false;
                        return {x: evt.clientX,y: evt.clientY};
                    }
                    //
                    getAngle(){

                        //Convert to degrees
                        return 57.2957795 * Math.atan2(this.end.y-this.start.y,this.end.x-this.start.x);
                    }
                    //
                    getAngleDistance(){

                        //Return the delta between x and y
                        var delta = (this.dist.x*this.dist.x+this.dist.y*this.dist.y)/2;
                        return delta;
                    }
                    //
                    getHorizontal(){

                        var wasd = this.app.input.keyboardCheck("a") - this.app.input.keyboardCheck("d");
                        var arrows = this.app.input.keyboardCheck("leftarrow") - this.app.input.keyboardCheck("rightarrow") ;
                        var mouse = -this.getPressed()*this.app.input.dist.x;
                        var touch = -this.getTouched()*this.app.input.dist.x;


                        var keyboard = this.app.client.Math.Clamp(wasd || arrows,-1,1);
                        var touched = this.app.client.Math.Clamp(mouse || touch,-1,1);

                        return {keyboard:keyboard,touch:touched};
                    }
                    //
                    getVertical(){

                        var wasd = this.app.input.keyboardCheck("s") - this.app.input.keyboardCheck("w");
                        var arrows = this.app.input.keyboardCheck("downarrow") - this.app.input.keyboardCheck("uparrow");
                        var mouse = this.getPressed()*this.app.input.dist.y;
                        var touch = this.getTouched()*this.app.input.dist.y;


                        var keyboard = this.app.client.Math.Clamp(wasd || arrows,-1,1);
                        var touched = this.app.client.Math.Clamp(mouse || touch,-1,1);

                        return {keyboard:keyboard,touch:touched};
                    }

                    getX(){return this.x;}
                    //
                    getY(){return this.y;}
                    //
                    getLastX(){return this.last.x;}
                    //
                    getLastY(){return this.last.y;}
                    //
                    getStartX(){return this.start.x;}
                    //
                    getStartY(){return this.start.y;}
                    //
                    getDuration(){return this.duration;}
                    //
                    getTouched(){return this.touch;}
                    //
                    getPressed(){return this.pressed;}
                    //
                    getReleased(){return this.released;}

}

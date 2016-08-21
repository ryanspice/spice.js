
import gamepad from './gamepad';

import inputcontroller from './inputcontroller.js';

/**
* Main game controller. Handles instanciating instances and tracking information.
* @access private
* @module
*
*/

export default class Input extends inputcontroller {

    constructor(app,pointerPoint){

        super(app);

		this.delay = 0;

        this.touch=false;

        this.touch_dist={x:0,y:0};

        this.key=false;

        this.keyPower=0;

        this.keyup=false;

        this.keydown=false;

        this.codes = [];

        this.codeList = [];

        this.control = false;

        this.confine = false;

        this.preventNext = true;

        this.init_options();

        this.keyController.init(this.app);

        this.down = new this.constructor._Listener("pointerdown","MSPointerDown","mousedown","touchstart",this.app.window,this.pointerdown);

        this.up = new this.constructor._Listener("pointerup","MSPointerUp","mouseup","touchmove",this.app.window,this.pointerup);

        this.move = new this.constructor._Listener("pointermove","MSPointerMove","mousemove","touchend",this.app.window,this.pointermove);

        this.scrollController = (this.app.Construct(this.scrollController.prototype,this.scrollController.constructor)).init();

        this.pointerPoint = pointerPoint;//this.support(pointerPoint);

        this.setup_universalMultitouch();

        this.setup_documentListeners();

        //this.setup_msUniversalAppTouch();

    }

	/* Too refractor this below code into the input ? /**/

	/** Artificial click CASE 1	_ WIP
	* @method
    * @param {Event} [event] - Passing of the event.
    * @param {Element} [anchorObj] - Element to click. */

    click(event:object, anchorObj:object):void {
     }

	/** Artificial Click CASE 2	_ WIP
	* @method
    * @param {Event} [event] - Passing of the event.
    * @param {Element} [anchorObj] - Element to click.	*/

    Click(event:object|null, anchorObj:object|null):void {

						console.log(this.document)
		if (typeof anchorObj != 'undefined')
		if (anchorObj.click){

			anchorObj.click();

		} else if (document.createEvent){

				console.log(this.document)
			if(event.target !== anchorObj){
			let evt:any = document.createEvent("MouseEvents");

			evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

			anchorObj.dispatchEvent(evt);

			}

		}

    }

    preventDefault(e) {  e.preventDefault(); return e.target.app; }

    preventNextInput() { return this.preventNext = true; }

	confineMouse(){

        return this.confine?(
			((this.y<this.app.client.visuals.fixY(0))?
				(this.app.window.y=0,this.app.window.inside -= 1):
					((this.y>this.app.client.visuals.fixY(this.app.client.setHeight))?
						(this.app.window.y=this.app.client.visuals.fixW(this.app.client.setHeight),this.app.window.inside += 1):
						(this.app.window.y=-this.app.client.visuals.fixY(0)+this.y)
					),
					((this.x<this.app.client.visuals.fixX(0))?
						(this.app.window.x = 0,this.app.window.inside -=1):
						((this.x>this.app.client.visuals.fixX(this.app.client.setWidth))?
							(this.app.window.x = this.app.client.visuals.fixW(this.app.client.setWidth),this.app.window.inside += 1):
							(this.app.window.x = -this.app.client.visuals.fixX(0)+this.x)
						)
					)
				)
			):((this.y<this.app.client.visuals.fixY(0))?
					(this.app.window.y=-this.app.client.visuals.fixY(0)+this.y):
					((this.y>this.app.client.visuals.fixY(this.app.client.setHeight))?
						(this.app.window.y=-this.app.client.visuals.fixY(0)+this.y):
						(this.app.window.y=-this.app.client.visuals.fixY(0)+this.y)
				),
				((this.x<this.app.client.visuals.fixX(0))?
					(this.app.window.x=-this.app.client.visuals.fixX(0)+this.x):
					((this.x>this.app.client.visuals.fixX(this.app.client.setWidth))?
						(this.app.window.x=-this.app.client.visuals.fixX(0)+this.x):
						(this.app.window.x=-this.app.client.visuals.fixX(0)+this.x)
					)
				));
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
            this.app.document.oncontextmenu = this.preventDefault;
            this.app.window.self.oncontextmenu = this.preventDefault;
        }

        /*	Overrides dragstart event		*/

        if (this.app.options.get("override").Drag) {
            this.app.document.ondragstart   = this.preventDefault;
            this.app.window.self.ondragstart   = this.preventDefault;
        }

        /*	CSS based Overrides

                - mstouch
                - seamless ( toggles overflow )
                - tight ( zeros padding and margin )

        */

        if (this.app.options.get("flags").mstouch){
            this.app.document.body.setAttribute("style","-ms-touch-action: none; ms-content-zooming: none; touch-action: none; -ms-overflow-style: none;");
        }

        if (this.app.options.get("flags").seamless){
            this.app.document.body.style.overflow = "hidden";
        }

        if (this.app.options.get("flags").tight){
            this.app.document.body.style.padding = "0px", this.app.document.body.style.margin = "0px auto";
        }

    }

    update(){

		this.confineMouse();
		this.gamepads = gamepad();

		//Reset variables
		this.press = false;
		this.touch = 0;
		this.app.window.inside = 0;
		this.wheelDelta = 0;

		this.pressed?this.duration++:this.duration=0;

		this.released?(this.released=false,this.dist.x=0,this.dist.y=0):null;

        //this.setup_msUniversalAppTouch();

        if (this.delay>0)   {

            this.delay -= Math.floor(this.delay-1*this.app.getDelta());

        }

		//reset code released, unused?
		this.codereleased = 0;

        return true;
    }

    setup_documentListeners(){

        let doc = document;
        let win = window;

        doc.addEventListener("mousedown", function () {
            window.focus();
        }, true);
        doc.addEventListener("touchstart", function () {
            window.focus();
        }, true);

        // Inform all plugins and behaviors of blur events so they can reset any keyboard key flags
		win.addEventListener("blur", function () {
			self.onWindowBlur();
		});



        win.onWindowBlur = function(evt){

            console.log('blur');
            SJS.controller.list().input.pointerup(evt);

        }

        win.setSuspended = function(state){

            if (state)
            console.log('suspended');
            else
            console.log('resume');

        }

                // Pause and resume on page becoming visible/invisible
        function onVisibilityChanged() {
            if (document.hidden || document.mozHidden || document.webkitHidden || document.msHidden)
                setSuspended(true);
            else
                setSuspended(false);
        };

        doc.addEventListener("visibilitychange", onVisibilityChanged, false);
        doc.addEventListener("mozvisibilitychange", onVisibilityChanged, false);
        doc.addEventListener("webkitvisibilitychange", onVisibilityChanged, false);
        doc.addEventListener("msvisibilitychange", onVisibilityChanged, false);

    }

    setup_universalMultitouch(){

        //touch-action: none;

        if (window.PointerEvent) {
          // Pointer events are supported.

          // Test for touch capable hardware
          if(navigator.maxTouchPoints) {



          }

          // Test for multi-touch capable hardware
          if(navigator.maxTouchPoints && navigator.maxTouchPoints > 1) {



          }

          // Check the maximum number of touch points the hardware supports
          //var touchPoints = navigator.maxTouchPoints;

        }





        this.multi = {

          list:[]

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

    }

    setup_msUniversalAppTouch(){


        return;

        var i = 0;

        var data = {
            app:this.app,
            x:0,
            y:0
        }


        if ((this.pressed===false)&&(this.lastpressed===true))
        {
            this.released = true,this.dist.x=0,this.dist.y=0;

            this.controls.up(data);
        }

        this.lastpressed = this.pressed;
/*
        if (!this.wininitalize)
        try {

            //var w = Windows;
            //var p = Windows.UI.Input.PointerPoint.getCurrentPoint(1);


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


        if ((this.pressed===true)&&(this.lastpressed===true))
            this.controls.move(data);

        }*/



        if ((this.pressed===true)&&(this.lastpressed===false))
            this.controls.down(data);

       // console.log(i)
      //  if (Windows)
      //  if (Windows.UI.Input.PointerPoint.getCurrentPoint(1).isInContact)
      //  this.pressed = (Windows.UI.Input.PointerPoint.getCurrentPoint(1).isInContact);


    }

}

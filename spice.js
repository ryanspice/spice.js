///////////////////////////////////////////////////////0/2/1////
////  "Client.js" by Ryan Spice,                  
////                                                
////	                                            
////			How To                              
////                                                
////            destination = "Canvas Element Id";  
////            App = new Client("Title","Canvas Element Id",width,scalex,scaley);
////             	             
////            App._state(init, update, draw)
////            	init, update, draw = functions;
////            	var menu_state = App._state(menu_refresh,menu_update,menu_draw);
////				menu_state.enable();
////
////               Client.client_start(f,scale)
////               Client.client_loop()
////               Client.client_fps() 
////               Client.client_init()
////                                   
////                                   
////////////////////////////////////////////////////////////////

var App, AppId;
var blueGesture;
var Main_, Game_;
var loader;



/*
* @param {string} name Client Name
*/
function Client(name,destination,width,height)
{
	App = this;
	document.title = name || "Spice.js";
	this.name = name;
	this.canvas = destination;
	this.visuals = destination;
	this.width = width;
	this.height = height;
		this.setWidth = width;
		this.setHeight = height;
	this.defaultText = 12;
	//var sc = 1*(((window.innerHeight > 0) ? window.innerHeight : this.height)/this.height);
	////var sc2 = 0.5*(((window.innerWidth > 0) ? window.innerWidth : this.width)/this.width);
	////if (sc>sc2)
	////	sc = sc2;
	////	//sc = 1;
	//this.scale = sc;
	this.scale = 1;
	
	//this.width = window.innerWidth;
	//this.height = window.innerHeight;
	
	xs = Math.round((window.innerWidth*0.5)-(this.width*0.5));
	document.getElementById("Client").style.position = "absolute";
	document.getElementById("Client").style.left = 0+"px";		
	
	
	this.client_run = true;
	this.client_f;
	this.client_state;
	
	this.time_now = new Date();
	this.time_diff = 0;
	this.fps_date = this.time_now;
	this.fps_count = 0;
	this.fps_target = 60;
	this.fps_ = 0;
	this.delta_speed = 1;

	this.INPUT_mousePos;

	this.Initalized = false;
	this.STATE_current = this;
	
	
	this.client_init = function()
	{
	this.ScaleOnResize = false;
	this.set_scale();
		//document.getElementById("Client").width = this.width;
		//document.getElementById("Client").height = this.height;
		////this.width /= this.scale;
		//this.height /= this.scale;
		document.getElementById("ClientDiv").style.position = "absolute";
		document.getElementById("ClientDiv").style.left = xs+"px";	
		function AppLoop(){App.client_loop();}
		setTimeout(function(){App.client_start(AppLoop,this.scale);},200);
		
		this.inputInit();
	}

	this.client_start =function(f,scale)	
	{
		this.client_f = f;
		input_canvas = this.visuals;
		this.visuals = new Visuals(this.visuals,this.visuals,this.scale);
		
		this.STATE_current = Main_;
		this.STATE_current.start();
		if (requestNextAnimationFrame(this.client_f))
			{
			this.Initalized = true;
			}
		this.set_scale();
	}
	this.client_loop = function()
	{
	
	this.visuals.canvas.width = App.width;
	this.visuals.canvas.height = App.height;	
	this.visuals.canvas.style.cursor = "default";
	
	
	if (this.STATE_current)
		this.STATE_current.update();
	input_update();
	this.visuals._Update(this.scale);
	requestNextAnimationFrame(this.client_f);
	this.client_fps();
	}
	this.client_fps = function()
	{
		window.scrollTo(0, 1);
		var time_now = new Date();
		var time_diff = time_now.getTime() - this.fps_date.getTime();
		this.fps_ = 1000 / time_diff;
		this.fps_date = time_now;
		this.delta_speed = this.fps_target / this.fps_;
		delete time_now, time_diff; 
	}
	this.inputInit = function()
	{
		window.addEventListener('MSPointerDown',function(evt)	{
			var mousePos = getMousePos(canvas, evt);
			INPUT_start = mousePos;
			INPUT_up = false;
			INPUT_duration = 0;
			INPUT_dirX = 0;
			INPUT_dirY = 0;
		},true);
		window.addEventListener('mousedown',function(evt)	{
			var mousePos = getMousePos(canvas, evt);
			INPUT_start = mousePos;
			INPUT_up = false;
			INPUT_duration = 0;
			INPUT_dirX = 0;
			INPUT_dirY = 0;
		},true);
		window.addEventListener('MSPointerUp',function(evt)	{
			var mousePos = getMousePos(canvas, evt);
			i++;
			INPUT_end = mousePos;
			INPUT_delta = 0;
			INPUT_duration = 0;
			INPUT_dirX = INPUT_end.x-INPUT_start.x;
			INPUT_dirY = INPUT_end.y-INPUT_start.y;
			INPUT_delta = ((INPUT_dirX)*(INPUT_dirX)) + ((INPUT_dirY)*(INPUT_dirY));
			INPUT_delta = INPUT_delta;
			INPUT_angle = Math.round(Math.atan2(INPUT_end.y-INPUT_start.y,INPUT_end.x-INPUT_start.x) * 57.2957795);
			INPUT_up = true;
			INPUT_released = true;
		},true);
		window.addEventListener('mouseup',function(evt)	{
			var mousePos = getMousePos(canvas, evt);
			i++;
			INPUT_end = mousePos;
			INPUT_delta = 0;
			INPUT_duration = 0;
			INPUT_dirX = INPUT_end.x-INPUT_start.x;
			INPUT_dirY = INPUT_end.y-INPUT_start.y;
			INPUT_delta = ((INPUT_dirX)*(INPUT_dirX)) + ((INPUT_dirY)*(INPUT_dirY));
			INPUT_delta = INPUT_delta;
			INPUT_angle = Math.round(Math.atan2(INPUT_end.y-INPUT_start.y,INPUT_end.x-INPUT_start.x) * 57.2957795);
			INPUT_up = true;
			INPUT_released = true;
		},true);
		window.addEventListener('mousemove',function(evt)	{
		var mousePos = getMousePos(canvas, evt);
			INPUT = mousePos; 
			INPUT_dirX = INPUT.x-INPUT_start.x;
			INPUT_dirY = INPUT.y-INPUT_start.y;
		},true);
		window.addEventListener('touchstart',function(evt)	{
			var touch = evt.targetTouches[0];
			INPUT_start.x = touch.pageX;
			INPUT_start.y = touch.pageY;
			INPUT_up = false;
			INPUT_duration = 0;
			INPUT_dirX = 0;
			INPUT_dirY = 0;
			
		},true);
		window.addEventListener('touchmove',function(evt)	{
			evt.preventDefault();
			var touch = evt.targetTouches[0];
			INPUT.x = touch.pageX;
			INPUT.y = touch.pageY;
			INPUT_dirX = INPUT.x-INPUT_start.x;
			INPUT_dirY = INPUT.y-INPUT_start.y;
		},true);
		window.addEventListener('touchend',function(evt)	{
			INPUT_end = INPUT;
			INPUT_delta = 0;
			INPUT_duration = 0;
			INPUT_dirX = INPUT_end.x-INPUT_start.x;
			INPUT_dirY = INPUT_end.y-INPUT_start.y;
			INPUT_delta = ((INPUT_dirX)*(INPUT_dirX)) + ((INPUT_dirY)*(INPUT_dirY));
			INPUT_delta = INPUT_delta;
			INPUT_angle = Math.round(Math.atan2(INPUT_end.y-INPUT_start.y,INPUT_end.x-INPUT_start.x) * 57.2957795);
			INPUT_up = true;
			INPUT_released = true;
		},true);
		window.addEventListener('resize',function(evt)	{
			if (App.ScaleOnResize)
				App.set_scale();
		},true);
	}
	
	///FUNCTIONS
	this.set_scale = function()
	{
			var scr = 1;
			var sc = App.height/App.setHeight;
			var sc2 = App.width/App.setWidth;
			if (sc>=sc2)
				scr = sc2;
				else
				scr = sc;
			this.scale = scr;
			this.height = window.innerHeight;
			this.width = window.innerWidth;
			xs = Math.round((window.innerWidth*0.5)-(this.width*0.5));
			document.getElementById("Client").style.left = xs+"px";						
	}
	this.set_state = function(state,start)
	{
	this.STATE_current = state;
	if (start)
		this.STATE_current.start();
	console.log(this.STATE_current);
	}
	this.client_init();
}
///Additional Operations
///Custom RequestAnimationFrame
window.requestNextAnimationFrame =
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
   )
();

////////////////////////////////////////////////////////////////
////	"Visuals.js" by Ryan Spice,                      	////
////               
////               
////    s: scaled  
////    a: alpha   
////    c: centered
////               
////    Functions  
////      	Visuals._draw = function(image, x, y)
////		Visuals._draw_a = function(image,x,y,a)
////		Visuals._draw_s = function(image,x,y,s)
////		Visuals._draw_sa = function(image,x,y,s,a)
////		Visuals._draw_c = function(image,x,y)
////		Visuals._draw_sc = function(image,x,y,s)
////		Visuals._draw_sca = function(image,x,y,s,a)
////		Visuals._draw_r = function(image,x,y,angle)
////		Visuals._text_draw = function(string, x, y)
////		Visuals._text_draw_s = function(string, x, y, s)
////		Visuals._text_draw_c = function(string, x, y)
////		Visuals._text_draw_sc = function(string, x, y, s, style, style2)
////		Visuals._text_draw_button = function(string,x,y,s,style,style2,loc)
////		Visuals._draw_button = function(image,x,y,s,loc)
////		Visuals._clear = function(x,y,width,height)
////		Visuals._rect_draw_c = function(x, y, width, height)
////		Visuals._rect_draw = function(x, y, width, height)
////		Visuals._rect_draw_cx = function(x, y, width, height)
////		Visuals._text_align = function(align)
////		Visuals._text_baseline = function(align)
////		Visuals._font = function(font)
////		Visuals._color = function(colour)
////		Visuals._colour = function(colour)
////		Visuals._opacity = function(opacity)
////		Visuals.text_width = function(string)
////		Visuals.touch_within_c = function(x, y, w, h)
////		Visuals.image_load = function(name)                
////                                                        
////////////////////////////////////////////////////////////////
function Visuals(canvas,buffer,scale)
{
	this.scale = App.scale;
	this.context;
	this.buffer;
	this.canvas;
	this.canvas_context;
	////Base Functions
	this._init = function(canvas,buffer,scale)
	{
	this.scale = scale;
	this.canvas = document.getElementById(canvas);
	this.canvas_context = this.canvas.getContext("2d");
	if (buffer!=null)
		{
			this.buffer = document.getElementById(canvas);
		}
		else
		{
			this.buffer = document.getElementById(buffer);
		} 
		this.context = this.buffer.getContext("2d");
	}
	this._Update = function(sc)
	{
	try {
	
		this.canvas_context.drawImage(this.canvas,0,0);
		this.scale = sc;
		}
	catch(e){}
	}
	this._init(canvas,buffer,scale);
	////Drawing Functions
	this.rect = function(x,y,w,h,s,a,c)
	{
		var x = x || 0;
		var y = y || 0;
		var w = w || 1;
		var h = h || 1;
		var s = s || 1;
		var a = a || 1;
		var c = c || false;
		x = Math.round(x);
		y = Math.round(y);
		w = Math.round(w*this.scale*s);
		h = Math.round(h*this.scale*s);
		
		this._opacity(a);
		this.context.beginPath();
		if (c)
			this.context.rect(x-w/2, y-h/2, w, h);
			else
			this.context.rect(x, y, w, h);
		this.context.fill();
		this._opacity(1);
	}
	this.image = function(image,x,y,s,a,c)
	{
		var x = x || 0;
		var y = y || 0;
		var s = s || 1;
		var a = a || 1;
		var c = c || false;
		var w = image.width*this.scale*s;
		var h = image.height*this.scale*s;
		x = Math.round(x);
		y = Math.round(y);
		w = Math.round(w);
		h = Math.round(h);
		//s = Math.round(s);
		this._opacity(a);
		try	{
			if (c)
				this.context.drawImage(image,x-w/2,y-h/2,w,h);
				else                               
				this.context.drawImage(image,x,y,w,h);
				
				
			}
			catch(e)	
			{
			this.context.rect(x-w/2, y-h/2, w, h);
			}

		this._opacity(1);
	}
	
	this.image_button = function(image,x,y,s,loc,highlight)
	{
		var x = x || 0;
		var y = y || 0;
		var s = s || 1;
		var a = a || 1;
		var c = c || true;
		var highlight = highlight || null;
		var w = image.width*this.scale*s;
		var h = image.height*this.scale*s;
		var press = 0;
		var hi = false;
		x = Math.round(x);
		y = Math.round(y);
		if (this.touch_within_c(x,y,w,h))
			{
			if (highlight)
				hi = true;
			press = INPUT_duration*1.5;
			if (press>2)
				press = 2;
			x = x + press;
			y = y + press;
			if ((mousestate.released)||(INPUT_released))
				{
					if ((INPUT_dirX<25*this.scale)&&(INPUT_dirX>-25*this.scale))
						if ((INPUT.x>0)&&(INPUT.x<App.width))
							loc();
				}			
			if (press>3)
				{
				press = 3;
				ret = true;
				if ((INPUT_delta>40)&&(INPUT_dirX>0))
					{
					ret = true;
					}
				}
			}
			else 
	        {
	        	press = 0;
	        }
		var ret = false;
		if (!hi)
			this.context.drawImage(image,x-w/2,y-h/2,w,h);
			else
			this.context.drawImage(highlight,x-w/2,y-h/2,w,h);
		delete x,y,s,a,c,w,h,press,ret;
		return ret;
	}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	this.text = function(string, x, y,s,a,c,style)
	{
		var x = x || 0;
		var y = y || 0;
		var s = s || 1;
		var a = a || 1;
		var c = c || false;
		var w = this.text_width(string);
		w = Math.round(w*App.scale);
		x = Math.round(x);
		y = Math.round(y);
		s = s * App.scale;
		var style = style || "";
		this._font(style+" "+Math.floor(s)+"px "+"sans-serif");
		if (c)
			this.context.fillText(string,x-w-s,y-s/2);
			else                               
			this.context.fillText(string,x,y);
		this._font(style+" "+Math.floor(App.defaultText)+"px "+"sans-serif");
	}
	
	
	
	
	this.arch = function(x,y,r,col)
	{
		this.context.beginPath();
		this.context.arc(x, y, r, 0, 2 * Math.PI, false);
		this.context.fillStyle = col;
		this.context.fill();
	}

	this._draw_a = function(image,x,y,a)
	{
		var at = 1-a;
		this._opacity(a);
		s = 1;
		x = x ;
		y = y ;
	this.context.drawImage(image,x,y,image.width*this.scale,image.height*this.scale);
		this._opacity(1);
		delete a;
	}
	this._draw_s = function(image,x,y,s)
	{
		x = x *this.scale;
		y = y *this.scale;
	this.context.drawImage(image,x,y,image.width*this.scale*s,image.height*this.scale*s);
	}
	this._draw_sa = function(image,x,y,s,a)
	{
		var at = 1-a;
		this._opacity(a);
		x = x *this.scale;
		y = y *this.scale;
	this.context.drawImage(image,x,y,image.width*this.scale*s,image.height*this.scale*s);
		this._opacity(1);
		delete a;
	}
	this._draw_c = function(image,x,y)
	{
		s = 1;
		x = x *this.scale;
		y = y *this.scale;
		var iws = image.width*this.scale*s;
		var ihs = image.height*this.scale*s;
	this.context.drawImage(image,x-iws/2,y-ihs/2,iws,ihs);
		delete iws, ihs;
	}
	this._draw_sc = function(image,x,y,s)
	{
		x = x *this.scale;
		y = y *this.scale;
		var iws = image.width*this.scale*s;
		var ihs = image.height*this.scale*s;
		this.context.drawImage(image,x-iws/2,y-ihs/2,iws,ihs);
		delete iws, ihs;
	}
	this._draw_sca = function(image,x,y,s,a)
	{
		if (a<0)
			a = 0;
		var at = 1-a;
		this._opacity(a);
		x = x ;
		y = y ;
		var iws = image.width *this.scale*s;
		var ihs = image.height*this.scale*s;
	this.context.drawImage(image,x-iws/2,y-ihs/2,iws,ihs);
		this._opacity(1);
		delete iws, ihs,at;
	}
	this._draw_r = function(image,x,y,angle)
	{
		x = x *this.scale;
		y = y *this.scale;
	this.context.translate(x,y);
		this.context.rotate(angle*0.0174532925);
			this.context.drawImage(image, -image.width/2, -image.height/2, image.width, image.height);
		this.context.rotate(-angle*0.0174532925);
	this.context.translate(-x,-y);
	}
	this._draw_rs = function(image,x,y,angle,s)
	{
		x = x *this.scale*s;
		y = y *this.scale*s;
	this.context.translate(x,y);
		this.context.rotate(angle*0.0174532925);
			this.context.drawImage(image, -image.width/2*s, -image.height/2*s, image.width*s, image.height*s);
		this.context.rotate(-angle*0.0174532925);
	this.context.translate(-x,-y);
	}
	this._draw_rsc = function(image,x,y,angle,s)
	{
		x = x *this.scale*s;
		y = y *this.scale*s;
	this.context.translate(x,y);
		this.context.rotate(angle*0.0174532925);
			this.context.drawImage(image, -image.width*s/2, -image.height*s/2, image.width*s, image.height*s);
		this.context.rotate(-angle*0.0174532925);
	this.context.translate(-x,-y);
	}
	this._text_draw = function(string, x, y)
	{
		x = x *this.scale;
		y = y *this.scale;
	this.context.fillText(string, x, y);
	}
	this._text_draw_s = function(string, x, y, s, style, style2)
	{
		if (s<6)
			s = 6;
		x = x *this.scale;
		y = y *this.scale;
		s = s*this.scale;
		if (!style)
			style = "";
		if (!style2)
			style2 = "sans-serif";

		//this._font(s+"px sans-serif");
		this._font(style+" "+Math.floor(s)+"px " + style2);
	this.context.fillText(string, x, y);
	}
	this._text_draw_c = function(string, x, y)
	{
		x = x *this.scale;
		y = y *this.scale;
		
	this.context.fillText(string, x-(this.text_width(string)/2),y);
	}
	this._text_draw_sc = function(string, x, y, s, style, style2)
	{
		x = x *this.scale;
		y = y *this.scale;
		//s = s *App.scale;
		if (s<8)
			s = 8;
		if (!style)
			style = "";
		if (!style2)
			style2 = "sans-serif";
		this._font(style+" "+Math.floor(s*this.scale)+"px " + style2);
	this.context.fillText(string, x-(this.text_width(string)/2),y);
	}
this._text_draw_button = function(string,x,y,s,style,style2,loc)
	{
		if (!style)
			style = "";
		if (!style2)
			style2 = "sans-serif";
		x = x ;
		y = y ;
		s = s *this.scale;
		this._font(style+" "+Math.floor(s)+"px " + style2);
		if (this.touch_within_c(x,y,(this.text_width(string)),s))
			{
				if ((mousestate.released)||(INPUT_released))
					{
						loc();
					}			
			}	
		this.context.fillText(string, x-(this.text_width(string)/2),y);
	}

	
	this._clear = function(x,y,width,height)
	{
		x = x *this.scale;
		y = y *this.scale;
		width = width *this.scale;
		height = height *this.scale;
		this.context.clearRect ( x , y , width , height );
	}

	this._tri_draw = function(p1,p2,p3)
	{
		this.context.beginPath();
		this.context.moveTo(p1.x,p1.y);
		this.context.lineTo(p2.x,p2.y);
		this.context.lineTo(p3.x,p3.y);
		this.context.fill();
	}
	this._circ_draw = function(x,y,r)
	{
		this.context.beginPath();
		this.context.arc(x, y, r, 0, 2 * Math.PI, false);
		this.context.fill();
	}
	this._rect_draw_c = function(x, y, width, height)
	{
		x = x *this.scale;
		y = y *this.scale;
		this.context.beginPath();
		this.context.rect(x-(width*this.scale)/2, y-(height*this.scale)/2, width*this.scale, height*this.scale);
		this.context.fill();
	}
	this._rect_draw_cx = function(x, y, width, height)
	{
		x = x *this.scale;
		y = y *this.scale;
	this.context.beginPath();
	this.context.rect(x-(width*this.scale/2), y, width*this.scale, height*this.scale);
	this.context.fill();
	}
	
	this._text_align = function(align)
	{
	this.context.textAlign = align;
	}
	
	this._text_baseline = function(align)
	{
	this.context.textBaseline = align;
	}
	this._font = function(font)
	{
	this.context.font = font;
	}
	
	this._color = function(colour)
	{
	this.context.fillStyle = colour;
	this.context.strokeStyle = colour;
	}
	
	this._colour = function(colour)
	{
	this.context.fillStyle = colour;
	this.context.strokeStyle = colour;
	}
	
	this._opacity = function(opacity)
	{
	this.context.globalAlpha = opacity;
	}
	
	this.text_width = function(string)
	{
	return this.context.measureText(string).width;
	}
	this.touch_within_c = function(x, y, w, h)
	{
		
		x = x ;
		y = y ;
		w = w ;
		h = h ;
		if ((INPUT.x > x-w/2) && (INPUT.x < x + w/2) && (INPUT.y > y-h/2) && (INPUT.y < y + h/2))
			{
				this.canvas.style.cursor = "pointer";
				return true;
			}
			else
			{
				
				return false;
			}
	}
	
	
	
	this._draw_bgs = function(image,x,y,x2,y2,s)
	{
		x = x ;
		y = y ;
		var bx, by, by_first, iw, ih;
		iw = Math.round(image.width*App.scale);
		ih = Math.round(image.height*App.scale);
		//by = Math.round((App.height+(-y2-App.height)*1*1) % ih - ih);
		//by_first = by;
		//for (bx = Math.round((App.width+(x2+App.width)*App.scale*s) % iw - iw); bx < App.width+iw; bx += iw)
		//	for (by = by_first; by < App.height+ih; by += ih)
		
		
		for (bx = -x2; bx < (App.width+(x2+App.width)*App.scale); bx+=iw)
			for (by = -y2; by < y2+App.height+ih*2; by+=ih)
				this.context.drawImage(image,bx, by-y2, iw, ih);
	}
	
	
	
	
	
	this._draw_onmap = function _draw_onmap(image, x, y)
	{
	
	
	
	try {
		this.context.drawImage(image, (App.AppWidth/2)+(x-arcade.viewx-(App.AppWidth/2))*App.scale*1, (App.AppHeight/2)+(y-arcade.viewy-(App.AppHeight/2))*App.scale*1, image.width*App.scale*1, image.height*App.scale*1);
		}catch(err) {}
	}
	
	
	
	
	
	
	
	this.image_count = 0;
	this.image_max = 90;
	
	this.image_load = function(name)
	{

		var image = new Image();
		//image.onload = function(){App.visuals.image_count++;};
		image.src = name + ".png";
		return image;
	}
	this.image_check = function()
	{
		if (this.image_count<=this.image_max)
			return false;
			else
			return true;
	}
}
	///Animation States
	///  -2 = set to idle.
	/// -1 = animate backwards and stop.
	///  0 = set to first frame.
	///  1 = animate forwards and stop.
	///  2 = animate forwards and return to 0 and animate again.

function animation(aniArray,aniSpeed,ani,origAni)
{

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
	this.recreate = function create(aniArray,aniSpeed,ani)
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
}
////////////////////////////////////////////////////////////////
////	"Audio.js" by Benjamin Bowen,                       ////
////					Edited by Ryan Spice                ////
////                                                        ////
////	                                                    ////
////			How To                                      ////
////                                                        ////
////	-Define an array to store all sound files.          ////
////		var soundtrack = new Array();                   ////
////                                                        ////
////	-Creating a new sound file. [path,channel]          ////
////		soundtrack[0] = new MultiChannelSound("",2);    ////
////                                                        ////
////	-Playing a sound                                    ////
////		playSound(soundtrack[0]);                       ////
////                                                        ////
////////////////////////////////////////////////////////////////
function MultiChannelSound(filename, channelQ)
{
	this.fname = filename;
	this.channel = new Array();
	for (var i = 0; i != channelQ; ++i)
	{
		this.channel[i] = new Audio(filename);
	}
	this.currentChannel = 0;
	this.play = function play()
	{
		this.channel[this.currentChannel].currentTime = 0;
		this.channel[this.currentChannel].play();
		++this.currentChannel;
		if (this.currentChannel == this.channel.length)
		{
			this.currentChannel = 0;
		}
	}
}
function playSound(sound)
{
sound.play();
return sound.fname;
}
////////////////////////////////////
////	"Spice.js" by Ryan Spice,    
////                                
////    Default particle system.
////	
////                                
////////////////////////////////////
var s = 0;
var PID = 0;
var Particle = function(img,pos, target, vel, marker, usePhysics) {
 
  // properties for animation
  // and colouring
  this.image = img;
  this.gravity  = 0.9;
  this.alpha    = 0.5+Math.random()*0.5;
  this.easing   = Math.random() * 0.2;
  this.fade     = Math.random() * 0.1;
  this.gridX    = marker % 120;
  this.gridY    = Math.floor(marker / 120) * 12;
  this.color    = marker;
  this.scale = 1;
  this.start = 30 + Math.random()*180;
 this.del = false;
  this.pos = {
    x: pos.x || 0,
    y: pos.y || 0
  };
 
  this.vel = {
    x: vel.x || 0,
    y: vel.y || 0
  };
 
  this.lastPos = {
    x: this.pos.x,
    y: this.pos.y
  };
 
  this.target = {
    y: target.y || 0,
    x: target.x || 0
  };
  
   if (!usePhysics)
	{
		this.dir = Math.random()*1;
		
		if (this.dir>0.5)
			this.dir = 1;
			else
			this.dir = -1;
	}
	else
	{
		if (pos.x - target.x>=0)
			this.dir = 1;
			else
			this.dir = -1;
		
	}


 this.draw = function()
 {

 var distance = (this.target.y - this.pos.y);
 
 
 if (!usePhysics)
	if (Math.random()>0.99)
		this.vel.y +=0.2;
// ease the position
//this.pos.y +=  this.vel.y *(distance/100) * (0.3 + this.easing * this.gravity);
this.pos.y += this.vel.y * (distance/100) * (0.3 + this.easing * this.gravity)+(Math.min(10,(INPUT.y/200))*(1-usePhysics));

if (this.dir==0)
	this.pos.x +=this.dir* this.vel.x* Math.sin(this.pos.y/this.start)+((INPUT.x/100-INPUT.x/100/2)*(1-usePhysics));
	else
	this.pos.x +=this.dir* this.vel.x* this.pos.y/this.start+((INPUT.x/100-INPUT.x/100/2)*(1-usePhysics));
	//else
	//this.pos.x -= 0.1;
if (this.pos.y>440)
	this.alpha -=0.01;
	
if (Math.random()>0.9)
	this.alpha -=0.01;
else
if (Math.random()>0.9)
	this.alpha +=0.01;


if ((distance<4)&&(distance>-4))
	this.del = true;
	
if (this.alpha<0.1)
	{
	this.del=true;
	return;
	}


	
	if (this.image)
		App.visuals._draw_sca(this.image,Math.round(this.pos.x+BackPos),Math.round(this.pos.y),this.scale,this.alpha/2);
		else
		{
		App.visuals._color(this.color);
		App.visuals._opacity(this.alpha-0.4);
		App.visuals._circ_draw(this.pos.x+BackPos,this.pos.y,this.alpha*2);
		App.visuals._opacity(1);
		}

  
 }

  this.usePhysics = usePhysics || false;
 
};
particlesand = new Array();
////////////////////////////////////////////////////////////////
////	"Touch.js" by RyanSpice,        	                ////
////	Original "Input.js" by Benjamin Bowen,        	    ////
////////////////////////////////////////////////////////////////

	////////////////////////////////////////////////////
	////	GLOBAL VARIABLES        	    		////
	////////////////////////////////////////////////////
		var INPUT = {x:100,y:100};			/*	 VECTOR2{x,y}		*//*	Current position of mousemove, touchmove */
		var INPUT_start = {x:100,y:100};	/*	 VECTOR2{x,y}		*//*	Position of MSPointerDown, mousedown, touchstart */
		var INPUT_end = {x:100,y:100};  	/*	 VECTOR2{x,y}		*//*	Position of MSPointerUp, mouseup, touchend */
		var INPUT_mouse = 0;            	/*	 BOOLEAN			*//*	Unused, detects which mouse button */
		var INPUT_delta = 1;            	/*	 FLOAT 				*//*	Delta between INPUT_start and INPUT_end */
		var INPUT_angle = 0;            	/*	 FLOAT 	            *//*	Angle between INPUT_start and INPUT_end */
		var INPUT_dirX = 0;             
		var INPUT_dirY = 0;             
		var INPUT_distX = 0;            	/*	 FLOAT 				*//*	Distance between INPUT_start.x and INPUT_end.x */
		var INPUT_distY = 0;            	/*	 FLOAT 				*//*	Distance between INPUT_start.y and INPUT_end.y */
		var INPUT_duration = 0;         	/*	 INT 				*//*	Duration between a mouse down and a mouse up event */
		var INPUT_up = true;            	/*	 BOOLEAN			*//*	Mouse pressed state */
		var INPUT_released = false;     	/*	 BOOLEAN			*//*	Mouse released last step */
		var INPUT_wheelDelta = 0;       	/*	 DOUBLE 			*//*	Mouse wheel delta */
		var i = 0;                      	/*	                    *//*	 */
		var mx = 0;                     	/*	                    *//*	 */
		var canvas = document.getElementById("Client");
		var context = canvas.getContext('2d');
		
	////////////////////////////////////////////////////
	////	FUNCTIONS				        	    ////
	////////////////////////////////////////////////////
	
			////////
			////	FUNCTIONS
			////////

	
	window.addEventListener("load",function() {
  // Set a timeout...
  setTimeout(function(){
    // Hide the address bar!
    window.scrollTo(0, 1);
  }, 0);
});
    function getMousePos(canvas, evt) 
	{
		var rect = canvas.getBoundingClientRect();///Grabs the event location and returns a position relative to the top left corner of the canvas.
		return {
				x: evt.clientX,
				y: evt.clientY
				};
    }
	window.addEventListener('mousewheel',function(evt)	{
		
		INPUT_wheelDelta = evt.wheelDelta;
	},true);
	
	

	
	
	
	


var k_left = 37, k_right = 39, k_up = 38, k_down = 40, k_enter = 13, k_shift = 16, k_e = 69 , k_r = 82;
var k_w = 87;
var k_a = 65;
var k_s = 83;
var k_d = 68;
var input_canvas;
function Trigger()
{
	this.push = false;
	this.previous = false; // Previous state of 'Push.'

	this.pressed = false;
	this.released = false;
}

var mouse_x = 0, mouse_y = 0;
var mousestate = new Trigger();
var keystate = new Array();

function input_track_key(code)
{
	keystate[code] = new Trigger();
}

function input_update()
{
INPUT_released = false;
if (INPUT_up==false)
	INPUT_duration+=1;
		if (mousestate.push != mousestate.previous)
		{
			mousestate.pressed = mousestate.push;
			mousestate.released = !mousestate.push;
		}
		else
		{
			mousestate.pressed = false;
			mousestate.released = false;
		}
		mousestate.previous = mousestate.push;
		var i, key;
		for (i in keystate)
		{
			key = keystate[i];
			if (key.push != key.previous)
			{
				key.pressed = key.push;
			}
			else
			{
				key.pressed = false;
				key.released = false;
			}

			key.previous = key.push;
		}
		delete i, key;
}

////////////////////////////////////////////////////////////////
////	"semblance.js:" by RyanSpice,        	            ////
////							        	                ////
////	GraphicsController = new semblance( array ); //Array list of images
////	GraphicsController.getImage( image );	//Returns an image from the array; 
////////////////////////////////////////////////////////////////
function semblance(array)
{
	this.semblanceArray = array||new Array();
	this.webItems = new Array();
	this.webLoad = function(name,address)
	{
		this.webItems[name] = new Image();
		this.webItems[name].src = address;
	}
	this.packLoad = function(name,file,type)
	{
		var type = type || "png";
		var name = name || "";
		this.semblanceArray[name] = new Image();
		this.semblanceArray[name].src = file + "." + type;
	}
	this.graphicsInit = function()
	{

	}
	this.getImage = function(name)
	{
	return this.semblanceArray[name];
	}
} 

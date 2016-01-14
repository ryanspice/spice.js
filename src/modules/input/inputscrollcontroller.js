
/**
* Sets up smooth scrolling
* @access private
* @module
*
*/

var inputscrollcontroller =  {

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
            //this.app.window.scrollTo(this.x,this.y),this.a = false;

            log(this.x,this.y);

        },

        //Update the position for smooth scrolling

        update:function(x,y){

            var left = (this.app.window.pageXOffset || this.app.document.scrollLeft) - (this.app.document.clientLeft || 0);
            var top = (this.app.window.pageYOffset || this.app.document.scrollTop)  - (this.app.document.clientTop || 0);

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

        //	this.app.window.scrollTo(this.x,this.y);

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

};

export default inputscrollcontroller;

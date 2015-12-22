
var visuals = visuals || {};
visuals = {

    //Visuals Prototype
    prototype:{

        //draw flags

        free:false,
        alpha:0,
        seamless:false,
        tight:true,
        disable:false,

        //draw vars
        bleed:1,
        point:14,
        zindex:1,
        buffer_target:0,
        scale:0,
        fillStyle:null,
        fontT:"",
        fontL:"",

        //Objects
        stat2:(Object.create(null)),
        grd:(Object.create(null)),

        canvas:(Object.create(null)),
        buffer:(Object.create(null)),
        blitter:(Object.create(null)),
        canvas_context:(Object.create(null)),
        buffer_context:(Object.create(null)),
        blitter_context:(Object.create(null)),
        blitter_image:new Image,


        within:false,

        //Draw Vars Buffer

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

        flip:function(){

            this.fillStyle = (this.app.canvas.canvas.style.background=="transparent");



            //this.buffer_context.save();
            //Set scale to client scale
            this.scale = this.app.client.scale;


            if (this.fillStyle===false)
                this.screen_fill(this.app.client.visuals.bleed,this.app.options.canvas.background);

            //If double buffering
            if (this.app.options.canvas.buffer)
            {
                //If initalized, draw state
                if (this.app.client.update.state.initalized)
                    this.app.client.update.state.draw();


                //Draw buffer to canvs
                this.canvas_context.drawImage(this.buffer,0,0);

                //Clear buffer
                if (this.fillStyle===true)
                this.buffer_context.clearRect(0,0,this.window.innerWidth,this.window.innerHeight);
            }
            else {

                //If not double buffering, clear canvas
                if (this.fillStyle===true)
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

            /*
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
            console.log("FPSLow: "+App.fps);

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


            */
        },





        blit:function(img,offx,offy) {


            var _img = this.blitter_image;
            var canvas =this.blitter;
            var ctx = this.blitter_context;

            canvas.style.background = 'transparent';
            canvas.background = 'transparent';
            canvas.width = img.width / 16;
            canvas.height = img.height / 16;

            //    ctx.beginPath();
            //    ctx.arc(75, 75, 70, 0, Math.PI*2, true);
            //    ctx.closePath();
            //    ctx.fill();

        //    ctx.drawImage(img, 0, 0);

            ctx.drawImage(img, 0, 0, 32, 32, 0, 0, img.width / 16, img.height / 16);
            //(img,sx,sy,swidth,sheight,x,y,width,height);

            SJS.statistics.monitor(function () {

                _img.src = canvas.toDataURL("image/png");
                window.T = _img;
            }, 10).then(function () {

            }, 10);

            return _img;

        },








        clean:function(){
        //    this.cleanAlpha?this.opacity(1):null;
            this.colour(this.stat.oldcol);
            this.stat.init(this.colour(),this.stat.oldcol);
        },

        colour:function colour(colour1,colour2) {

            if (colour1)
                {
                    return colour1&&(this.buffer_context.fillStyle=colour1);//colour2&&(this.buffer_context.strokeStyle=colour2);
                }
                else
                return this.buffer_context.fillStyle;

        },
        opacity:function(opacity) {
            return opacity!=this.alpha&&(this.alpha=opacity,this.canvas_context.globalAlpha=this.buffer_context.globalAlpha=opacity!=this.lastopacity?opacity:1);
        },
        font:function(font)	{
            return this.canvas_context.font = this.buffer_context.font=this.fontT=font;
            //return font!=this.fontT&&(this.canvas_context.font=this.buffer_context.font=this.fontT=font?font:this.fontL);
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



            //if (this.touch_within(this.stat.x,this.stat.y,this.stat.w,this.stat.h,this.stat.c))
            if (this.touch_within_stat(this.stat))
            {
                t = true;
            //    this.app.ext.cursor.set(this.app.ext.cursor.pointer,true);

//   if (this.app.input.delay<1)

                if (this.app.input.released)
                        loc(),this.app.input.delay = 1;
            }


            //if (this.setting)
                this.rect_ext(x,y,w,h,s,a,c,colour);
                //else
            //    var ww = 1;
            //    if (t)
            //    this.rect_ext(x-ww,y-ww,w+ww*2,h+ww*2,s,a,c,colour);

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


        putData:function(myImageData, dx, dy){

            this.buffer_context.putImageData(myImageData, dx, dy);
            //this.clean();
        },

        image_part:function(image,x,y,s,a,c,xx,yy,w,h){
            this.stat = this.chk(x,y,w,h,s,a,c);

            //var scale = (1.1*this.stat.s)*this.app.getScale();
            (this.stat.c)?this.buffer_context.drawImage(image,xx,yy,w,h,this.stat.x-Math.floor(this.stat.w/2),this.stat.y-Math.floor(this.stat.h/2),this.stat.w,this.stat.h):this.buffer_context.drawImage(image,xx,yy,w,h,this.stat.x,this.stat.y,this.stat.w,this.stat.h);
        },

        image_part_rotate:function(image,x,y,s,a,c,xx,yy,w,h,angle){
            this.stat = this.chk(x,y,w,h,s,a,c);

            //var scale = (1.1*this.stat.s)*this.app.getScale();
            this.buffer_context.save();
            this.buffer_context.translate(this.stat.x,this.stat.y);
            this.buffer_context.rotate(angle*0.0174532925);
            (this.stat.c)?this.buffer_context.drawImage(image,xx,yy,w,h,0-Math.floor(this.stat.w/2),0-Math.floor(this.stat.h/2),this.stat.w,this.stat.h):this.buffer_context.drawImage(image,xx,yy,w,h,0,0,this.stat.w,this.stat.h);

            this.buffer_context.restore();
        //    this.buffer_context.rotate(-angle*0.0174532925);
        //    this.buffer_context.translate(-this.stat.x,-this.stat.y);
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





/* IMAGE BUTTON LEGACY TAKE OUT */

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



        /*  ^ IMAGE BUTTON LEGACY TAKE OUT ^ */








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

            let position = this.app.input.position;

            let x = position.x;
            let y = position.y;

                /*

                            if (!r){
                            x = this.app.input.touched.last.x;
                            y = this.app.input.touched.last.y;}
                */

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
        },


        trytolockOrientation:function(){
            /*
            if (!this.autoLockOrientation || this.orientations === 0)
    			return;
    		*/
    		var orientation = "portrait";
                            var works = false


    		//if (this.orientations === 2)
    			orientation = "landscape";

    		// Note IE/Edge can throw exceptions here if in an iframe (WrongDocumentError), which also affects the debugger.
    		try {

    			if (screen["orientation"] && screen["orientation"]["lock"])
    				works = screen["orientation"]["lock"](orientation);
    			else if (screen["lockOrientation"])
    				works = screen["lockOrientation"](orientation);
    			else if (screen["webkitLockOrientation"])
    				works = screen["webkitLockOrientation"](orientation);
    			else if (screen["mozLockOrientation"])
    				works = screen["mozLockOrientation"](orientation);
    			else if (screen["msLockOrientation"])
    				works = screen["msLockOrientation"](orientation);
    		}
    		catch (e)
    		{
    			if (console && console.warn)
    				console.warn("Failed to lock orientation: ", e);
    		}


            return works;
        },
        newscale:function(w, h, force)
	{
		var offx = 0, offy = 0;
		var neww = 0, newh = 0, intscale = 0;

		// Hide address bar on iPhone iOS 6 only
		var tryHideAddressBar = (this.isiPhoneiOS6 && this.isSafari && !navigator["standalone"] && !this.isDomFree && !this.isCordova);

		if (tryHideAddressBar)
			h += 60;		// height of Safari iPhone iOS 6 address bar

		// Ignore redundant events
		if (this.lastWindowWidth === w && this.lastWindowHeight === h && !force)
			return;

		this.lastWindowWidth = w;
		this.lastWindowHeight = h;

		var mode = this.fullscreen_mode;
		var orig_aspect, cur_aspect;

		var isfullscreen = (document["mozFullScreen"] || document["webkitIsFullScreen"] || !!document["msFullscreenElement"] || document["fullScreen"] || this.isNodeFullscreen) && !this.isCordova;

		if (!isfullscreen && this.fullscreen_mode === 0 && !force)
			return;			// ignore size events when not fullscreen and not using a fullscreen-in-browser mode

		if (isfullscreen && this.fullscreen_scaling > 0)
			mode = this.fullscreen_scaling;

		var dpr = this.devicePixelRatio;

		// Letterbox or letterbox integer scale modes: adjust width and height and offset canvas accordingly
		if (mode >= 4)
		{
			orig_aspect = this.original_width / this.original_height;
			cur_aspect = w / h;

			// too wide: scale to fit height
			if (cur_aspect > orig_aspect)
			{
				neww = h * orig_aspect;

				if (mode === 5)	// integer scaling
				{
					// integer scale by device pixels, not CSS pixels, since DPR may be non-integral
					intscale = (neww * dpr) / this.original_width;
					if (intscale > 1)
						intscale = Math.floor(intscale);
					else if (intscale < 1)
						intscale = 1 / Math.ceil(1 / intscale);
					neww = this.original_width * intscale / dpr;
					newh = this.original_height * intscale / dpr;
					offx = (w - neww) / 2;
					offy = (h - newh) / 2;
					w = neww;
					h = newh;
				}
				else
				{
					offx = (w - neww) / 2;
					w = neww;
				}
			}
			// otherwise scale to fit width
			else
			{
				newh = w / orig_aspect;

				if (mode === 5)	// integer scaling
				{
					intscale = (newh * dpr) / this.original_height;
					if (intscale > 1)
						intscale = Math.floor(intscale);
					else if (intscale < 1)
						intscale = 1 / Math.ceil(1 / intscale);
					neww = this.original_width * intscale / dpr;
					newh = this.original_height * intscale / dpr;
					offx = (w - neww) / 2;
					offy = (h - newh) / 2;
					w = neww;
					h = newh;
				}
				else
				{
					offy = (h - newh) / 2;
					h = newh;
				}
			}

			if (isfullscreen && !this.isNWjs)
			{
				offx = 0;
				offy = 0;
			}
		}
		// Centered mode in NW.js: keep canvas size the same and just center it
		else if (this.isNWjs && this.isNodeFullscreen && this.fullscreen_mode_set === 0)
		{
			offx = Math.floor((w - this.original_width) / 2);
			offy = Math.floor((h - this.original_height) / 2);
			w = this.original_width;
			h = this.original_height;
		}

		if (mode < 2)
			this.aspect_scale = dpr;

		// iPad 3 Retina bug workaround: if in retina display and the width is 2048, for some reason
		// performance is massively reduced.  Workaround (found by Arima) is to set a width of 2046 instead.
		if (this.isRetina && this.isiPad && dpr > 1)	// don't apply to iPad 1-2
		{
			if (w >= 1024)
				w = 1023;		// 2046 retina pixels
			if (h >= 1024)
				h = 1023;
		}

		// hacks for iOS retina
		this.cssWidth = Math.round(w);
		this.cssHeight = Math.round(h);
		this.width = Math.round(w * dpr);
		this.height = Math.round(h * dpr);
		this.redraw = true;

		if (this.wantFullscreenScalingQuality)
		{
			this.draw_width = this.width;
			this.draw_height = this.height;
			this.fullscreenScalingQuality = true;
		}
		else
		{
			// Render directly even in low-res scale mode if the display area is smaller than the window size area,
			// or in crop mode (since no engine scaling happens)
			if ((this.width < this.original_width && this.height < this.original_height) || mode === 1)
			{
				this.draw_width = this.width;
				this.draw_height = this.height;
				this.fullscreenScalingQuality = true;
			}
			else
			{
				this.draw_width = this.original_width;
				this.draw_height = this.original_height;
				this.fullscreenScalingQuality = false;

				/*var orig_aspect = this.original_width / this.original_height;
				var cur_aspect = this.width / this.height;

				// note mode 2 (scale inner) inverts this logic and will use window width when width wider.
				if ((this.fullscreen_mode !== 2 && cur_aspect > orig_aspect) || (this.fullscreen_mode === 2 && cur_aspect < orig_aspect))
					this.aspect_scale = this.height / this.original_height;
				else
					this.aspect_scale = this.width / this.original_width;*/

				// Scale inner or scale outer mode: adjust the draw size to be proportional
				// to the window size, since the draw size is simply stretched-to-fit in the window
				if (mode === 2)		// scale inner
				{
					orig_aspect = this.original_width / this.original_height;
					cur_aspect = this.lastWindowWidth / this.lastWindowHeight;

					if (cur_aspect < orig_aspect)
						this.draw_width = this.draw_height * cur_aspect;
					else if (cur_aspect > orig_aspect)
						this.draw_height = this.draw_width / cur_aspect;
				}
				else if (mode === 3)
				{
					orig_aspect = this.original_width / this.original_height;
					cur_aspect = this.lastWindowWidth / this.lastWindowHeight;

					if (cur_aspect > orig_aspect)
						this.draw_width = this.draw_height * cur_aspect;
					else if (cur_aspect < orig_aspect)
						this.draw_height = this.draw_width / cur_aspect;
				}
			}
		}

		if (this.canvasdiv && !this.isDomFree)
		{
			jQuery(this.canvasdiv).css({"width": Math.round(w) + "px",
										"height": Math.round(h) + "px",
										"margin-left": Math.floor(offx) + "px",
										"margin-top": Math.floor(offy) + "px"});

			if (typeof cr_is_preview !== "undefined")
			{
				jQuery("#borderwrap").css({"width": Math.round(w) + "px",
											"height": Math.round(h) + "px"});
			}
		}

		if (this.canvas)
		{
			this.canvas.width = Math.round(w * dpr);
			this.canvas.height = Math.round(h * dpr);

			if (this.isEjecta)
			{
				this.canvas.style.left = Math.floor(offx) + "px";
				this.canvas.style.top = Math.floor(offy) + "px";
				this.canvas.style.width = Math.round(w) + "px";
				this.canvas.style.height = Math.round(h) + "px";
			}
			else if (this.isRetina && !this.isDomFree)
			{
				this.canvas.style.width = Math.round(w) + "px";
				this.canvas.style.height = Math.round(h) + "px";
			}
		}

		if (this.overlay_canvas)
		{
			this.overlay_canvas.width = Math.round(w * dpr);
			this.overlay_canvas.height = Math.round(h * dpr);

			this.overlay_canvas.style.width = this.cssWidth + "px";
			this.overlay_canvas.style.height = this.cssHeight + "px";
		}

		if (this.glwrap)
		{
			this.glwrap.setSize(Math.round(w * dpr), Math.round(h * dpr));
		}

		if (this.isDirectCanvas && this.ctx)
		{
			this.ctx.width = Math.round(w);
			this.ctx.height = Math.round(h);
		}

		if (this.ctx)
		{
			// Re-apply the image smoothing property, since resizing the canvas resets its state
			this.ctx["webkitImageSmoothingEnabled"] = this.linearSampling;
			this.ctx["mozImageSmoothingEnabled"] = this.linearSampling;
			this.ctx["msImageSmoothingEnabled"] = this.linearSampling;
			this.ctx["imageSmoothingEnabled"] = this.linearSampling;
		}

		// Try to lock orientation to the project setting
		this.tryLockOrientation();

		// Attempt to hide address bar on iPhone
		// iOS 7.1 bug: weird glitch where a big space appears at the bottom of the
		// screen when going in to landscape mode. This call to scrollTo seems to
		// fix it, so always run this on iPhone.
		if (!this.isDomFree && (tryHideAddressBar || this.isiPhone))
		{
			window.setTimeout(function () {
				window.scrollTo(0, 1);
			}, 100);
		}
	}



    },
    constructor:function(app){return {
        app:{value:app},
        init:{value:function(){

                window.utils.requestAnimationFrame(name,0,0);

                this.scale = this.app.scale;

                this.canvas = this.app.canvas.getCanvas();

                this.buffer = this.app.canvas.getBuffer();

                this.blitter = this.app.canvas.getBlitter();

                let attribs = {alpha:true};

                this.blitter_context = this.blitter.getContext("2d",attribs);

                attribs = {alpha:false};

                this.canvas_context = this.canvas.getContext("2d",attribs);

                if (this.app.options.canvas.buffer)
                    this.buffer_context = this.buffer.getContext("2d",attribs);
                    else
                    this.buffer_context = this.canvas.getContext("2d",attribs);

                this.linearSampling = true;
                if (this.buffer_context["imageSmoothingEnabled"] != this.linearSampling)
                if (this.buffer_context["mozImageSmoothingEnabled"] != this.linearSampling)
                if (this.buffer_context["msImageSmoothingEnabled"] != this.linearSampling)
                if (this.buffer_context["webkitImageSmoothingEnabled"] != this.linearSampling)
                    this.buffer_context["webkitImageSmoothingEnabled"] = this.linearSampling;


            		// make sure aspect scale is correctly set in advance of first tick
            		/*if (this.fullscreen_mode >= 2)
            		{
            			var orig_aspect = this.original_width / this.original_height;
            			var cur_aspect = this.width / this.height;

            			// note mode 2 (scale inner) inverts this logic and will use window width when width wider.
            			if ((this.fullscreen_mode !== 2 && cur_aspect > orig_aspect) || (this.fullscreen_mode === 2 && cur_aspect < orig_aspect))
            				this.aspect_scale = this.height / this.original_height;
            			else
            				this.aspect_scale = this.width / this.original_width;
            		}

                    */
                // Non-fullscreen games on retina displays never call setSize to enable hi-dpi display.
        		// Do this now if the device has hi-dpi support.
        		//if (this.fullscreen_mode === 0 && this.isRetina && this.devicePixelRatio > 1)
        		//{
        		//	this["setSize"](this.original_width, this.original_height, true);
        		//}




                }

            }
        }
    }
};

export default visuals;

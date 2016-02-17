
import _visuals from './visuals.js';

export default {

    constructor:function(app){

        return{

            app:{value:app},

            init:{writable: false,configurable:false,enumerable:false,value:function(w,h){

				var name  = '';

                //Set App.client.discription to the name
                this.discription = "description";

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

            },1000/59)


            this.app.ext.cursor.set(this.app.ext.cursor.def);

            this.app.ext.time = (( new Date().getTime())-SpiceJS.TimeToBuild)*1;

        },

        //Client features loop
        loopData:function(){

            //if (this.app)
            //if (this.app.input)
            //if (this.app.input.update)
            //{

            //Return true or false, update audio
            //this.mute = this.audio.update();

                    this.update.size_difference(this);

                    //Update Input
                    this.app.input.update();
            //}

            setTimeout(this.client_data,1000 / 60);
        },

        loop:function(a){

            let loop = () => {

                //Return true or false if resized, update size
                this.resized = this.update.size(this);

                //Update scale
                this.scale = this.update.scale(this);

                //Draw frame
                this.visuals.flip(this.scale);

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

		/**
		* Client Update Loop
		* @class
		* @protected
		*/

        update:{

            //Cache Vars
            last:new Math.Vector(),
            difference:new Math.Vector(),
            scaler:{s:1,x:1,y:1},
            scaling:true,
            scalediff:0,
            lastscale:1,
            fullscale:false,
            resized:false,
            set:0,
            frames:0,

			/**
			* Calculate differences between the canvas size last frame and this frame
			* @method
			* @private
			*/

            size_difference:function(app){

				let x = this.last.x;

				let y = this.last.y;

				let w = app.width;

				let h = app.height;

				let vector_size0 = new Math.Vector(x,y);

				let vector_size1 = new Math.Vector(w,h);

				if (x==w)
					if (y==h)
					{

						this.difference = new Math.Vector(0,0);

						return;

					}

				this.difference = app.Math.Vector.Difference(vector_size0,vector_size1);

				return;

            },

			/**
			* Resize the canvas
			* @method
			* @private
			*/

            size:function(app){

                //If distance hasnt changed
                if ((this.difference.x + this.difference.y==0))
                    return false;

                //Reassign width and height
                app.app.canvas.canvas.width  = this.last.x = app.width;
                app.app.canvas.canvas.height = this.last.y = app.height;
                app.app.canvas.buffer.width  = this.last.x = app.width;
                app.app.canvas.buffer.height = this.last.y = app.height;

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

                        return;


/*
                        for(var i=0;i>0;--i)
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
                            */
                }
            },
            update:function() {
                if (typeof this.sound === 'object')
                    if (this.sound[this.current].paused)
                        this.sound[this.current].play();
                return

                /*

                this.mute;
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


                */
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
    visuals:_visuals
}
};

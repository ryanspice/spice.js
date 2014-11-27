/////////////////////////////
/// RyanSpice.Com - Spice.js 
/// 08/22/2014

var Snowboarding = {Menu:{}};
Snowboarding.Menu = {
	name:"Menu",
	backgroundPos:0,
	End:1,
	init:function() {
		this.l = 0;
		this.h = 1;
		this.v = 0.1;
		this.x = 0;
		this.y = 0;
		this.s = 1;
		this.ss = 0;
		this.FogY = 0;
		this.FogY2 = 0;
		this.fader = 0;
		this.fade = false;
		this.StartAlpha = 0;
		this.FogY = 0;
		this.xxx = 0;
		this.selecter = 0;
		this.boxoffset = 0;
		this.revAngle = 0;
		this.gallery = [];
		this.alpha = [];
		this.alpha[0] = 1;
		this.alpha[1] = 1;
		this.alpha[2] = 1;
		this.alpha[3] = 1;
		this.alpha[4] = 1;
		this.alpha[5] = 1;
		this.alpha[6] = 1;
		
		
		this.gallerySnowBackgrounds = [];
		this.gallerySnowBackgrounds[0] = this.graphics.load("eh","SnowBoarding/bg_m1.min");
		this.gallerySnowBackgrounds[1] = this.graphics.load("be","SnowBoarding/bg_m2.min");
		this.gallerySnowBackgrounds[2] = this.graphics.load("ce","SnowBoarding/bg_fog1.min");
		this.gallerySnowBackgrounds[3] = this.graphics.load("de","SnowBoarding/bg_fog2.min");
		this.gallerySnowBackgrounds[4] = this.graphics.load("ee","SnowBoarding/bg_cloud1.min");
		this.gallerySnowBackgrounds[5] = this.graphics.load("ef","SnowBoarding/bg_cloud2.min");
		this.gallerySnowBackgrounds[6] = this.graphics.load("je","SnowBoarding/bg_m3.min");
		this.gallerySnowBackgrounds[7] = this.graphics.load("je","SnowBoarding/background_SnowBoarding");
		
		this.sel =0;
		this.WaterY = 0;
		this.viewX = 0;
		this.cloudX = 0;
		this.cloudSize = 25;
		this.cx=[];
		this.cc = 20 + Math.floor(this.app.client.setWidth/this.cloudSize);

		for(var i=this.cc;i>=0;--i)
			this.cx[i] = i*this.cloudSize;

		
		this.app.canvas.background_set("#000000");
		this.lfogY = 0;
		
		this.sy = 0;
		this.game2 = 0;
    return true;
    },
	update:function() {
		this.FogY-=1*this.app.delta;
		this.lastFogY = this.fogY;
		this.fogY = Math.sin(this.FogY/100);
		this.y+=(this.v*this.s)*(this.app.delta);
		this.StartAlpha+= 0.03*this.End*this.app.delta;
		
		this.backgroundPos = Math.sin(this.y/this.app.client.setWidth);
		this.FogY2 =(1+Math.sin(this.FogY/180)*0.5);
		this.FogY3 = 0.5+this.FogY2;
		this.FogY4 =(0.6+Math.sin(this.FogY/90)*0.5);
			
		0.9<this.StartAlpha&&(this.StartAlpha=0.9);-3>this.StartAlpha&&(this.StartAlpha=-3);
		this.y<-this.gallerySnowBackgrounds[0].width/4?1>this.v&&(this.v+=0.001*this.app.delta):this.y>this.gallerySnowBackgrounds[0].width/4&&-1<this.v&&(this.v-=0.001*this.app.delta);
		
		if (this.WaterY<0)
			{
			this.WaterY+=App.client.delta*1;
			return;
			}

		this.viewX +=App.client.delta*1;
		if (this.cloudX>-140)
			this.cloudX -= App.client.delta*1;
		else{
			this.cloudX = this.app.client.setWidth + 140;
			this.cloudY = Math.random()*200;
			} 
		for(var i=this.cc;i>=0;--i)
				if (-this.viewX +this.cx[i]<-this.cloudSize*5)
					this.cx[i] = this.viewX +this.app.client.setWidth+this.cloudSize*5;
        
var doc = document.documentElement;
//var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
        //this.sy = top;
        var a = (-this.sy+top*0.6)/2;
        if (this.sy<top*0.6)
        this.sy+=a;        
        
        if (this.sy>top*0.6)
        this.sy+=a;   
    return true;
	},
    backgroundFunction2:function(a){
		
                                //this.sy*=0.1;
                                //this.app.client.scale *= 1.1;
                                this.backgroundFunction('sb');
                                return;
                             var s  =this.sy;
                                this.sy = s*0.01;
                            this.visuals.image_ext(this.gallerySnowBackgrounds[0],this.app.client.setWidth*0.5-this.gallerySnowBackgrounds[0].width/2+this.backgroundPos*200,this.sy*0,1.3,1,0);
                                 this.sy =this.sy/1.5;
                            this.visuals.image(this.gallerySnowBackgrounds[1],this.app.client.setWidth*0.5-this.gallerySnowBackgrounds[6].width/2+this.backgroundPos*300,25+this.sy);
                            this.sy =this.sy/2;
                            this.visuals.image_ext(this.gallerySnowBackgrounds[2],this.app.client.setWidth*0.5-this.backgroundPos*900,this.app.client.setHeight/1.4-this.fogY+this.sy,1,1,1);
                            this.visuals.image_ext(this.gallerySnowBackgrounds[2],this.app.client.setWidth*0.5+this.backgroundPos*900,this.app.client.setHeight/1.4-this.fogY+this.sy,1,1,1);
                                 this.sy =this.sy/1.5;
                            this.visuals.image(this.gallerySnowBackgrounds[6],this.app.client.setWidth*0.5-this.gallerySnowBackgrounds[1].width/2+this.backgroundPos*600,0+this.sy);
                            this.visuals.image_ext(this.gallerySnowBackgrounds[3],this.app.client.setWidth*0.5-this.backgroundPos*800,this.app.client.setHeight-this.gallerySnowBackgrounds[3].height/2-this.fogY+this.sy,1,1,1);
                            this.visuals.image_ext(this.gallerySnowBackgrounds[3],this.app.client.setWidth*0.5+this.backgroundPos*800,this.app.client.setHeight-this.gallerySnowBackgrounds[3].height/2-this.fogY+this.sy,1,this.FogY3,1);
                                 this.sy =this.sy/1.5;
                            this.visuals.image_ext(this.gallerySnowBackgrounds[2],this.app.client.setWidth*0.5+this.backgroundPos*300,this.app.client.setHeight-this.gallerySnowBackgrounds[2].height/3-this.fogY*13+this.sy,this.FogY3,this.FogY4,1);
                            this.visuals.image_ext(this.gallerySnowBackgrounds[2],this.app.client.setWidth*0.5-this.backgroundPos*300,this.app.client.setHeight-this.gallerySnowBackgrounds[2].height/3-this.fogY*13+this.sy,this.FogY3,this.FogY4,1);
                            this.visuals.image_ext(this.gallerySnowBackgrounds[2],this.app.client.setWidth*0.5-this.backgroundPos*300,this.app.client.setHeight-this.gallerySnowBackgrounds[2].height*0.2-this.fogY*13+this.sy,this.FogY3,this.FogY4,1);
                                this.sy =s;
                            this.visuals.image_ext(this.gallerySnowBackgrounds[4],this.app.client.setWidth*0.5+this.backgroundPos*900,this.app.client.setHeight*0.5-this.gallerySnowBackgrounds[4].height*0.5+this.sy,1,0.5,1);
                            this.visuals.image_ext(this.gallerySnowBackgrounds[5],this.app.client.setWidth*0.5+this.backgroundPos*700,this.app.client.setHeight*0.5-this.gallerySnowBackgrounds[5].height*0.5+this.sy,1, 0.5,1);


                            this.visuals.rect_ext(-this.app.client.setWidth*0.7, 0,-this.app.client.setWidth/this.app.client.scale,this.app.client.setHeight+this.sy,1,1,0,"#000000");


                            this.visuals.rect_ext(this.app.client.setWidth*1.7, 0,this.app.client.setWidth/this.app.client.scale,this.app.client.setHeight+this.sy,1,1,0,"#000000");   
                           
                                
                            if ((this.game == "ReverenceLost")||(this.game2 == "rv"))
                            {
                                
                                this.backgroundFunction("rv");
                                return;
                            this.app.canvas.background_set("#000000");
                            this.visuals.image_ext(this.galleryRevBackgrounds[5],this.app.client.setWidth/2,0,1,0.4+Math.cos(this.revAngle/160)*0.1,1);

                            this.visuals.image_rotate(this.galleryRevBackgrounds[2],this.app.client.setWidth*1-this.galleryRevBackgrounds[2].width/2+this.backgroundPos*200+this.revAngle/1000,1+this.revAngle/1000,0.5,this.revAngle/100,1,0.5);
                                
                                
                                

                            this.visuals.image_ext(this.galleryRevBackgrounds[1],+this.sy+this.app.client.setWidth*1.75-this.gallerySnowBackgrounds[0].width/2-this.backgroundPos*300,0,1,0.2,0);
                            this.visuals.image_ext(this.galleryRevBackgrounds[3],+this.sy+this.app.client.setWidth*0.75-this.gallerySnowBackgrounds[0].width/2+this.backgroundPos*400,-this.app.client.setHeight/2,1,0.7,0);

                            this.visuals.image_ext(this.galleryRevBackgrounds[0],-this.sy*2+this.app.client.setWidth*0.5-this.gallerySnowBackgrounds[0].width/4-this.backgroundPos*600,0-this.sy,1,1,0);
                            this.visuals.image_ext(this.galleryRevBackgrounds[4],-this.sy+this.app.client.setWidth*1-this.gallerySnowBackgrounds[0].width/2+this.backgroundPos*500,this.app.client.setHeight/2+this.sy,1,0.7,0);
                            }
                                
    },
    backgroundFunction:function(a){
        this.game2 = a;
                        var s  =this.sy;
                        this.sy = s;
					//this.visuals.image_ext(this.gallerySnowBackgrounds[0],this.app.client.setWidth*0.5-this.gallerySnowBackgrounds[0].width/2+this.backgroundPos*200,-0+this.sy*0.1,1.3,1,0);
					this.visuals.image_ext(this.gallerySnowBackgrounds[7],this.app.client.setWidth*0.5-this.gallerySnowBackgrounds[0].width/2+this.backgroundPos*200,-200+this.sy*0,1.3,1,0);
					this.visuals.image_ext(this.gallerySnowBackgrounds[0],this.app.client.setWidth*0.5-this.gallerySnowBackgrounds[0].width/2+this.backgroundPos*200,this.sy,1.3,1,0);
                         this.sy =this.sy/1.5;
					this.visuals.image(this.gallerySnowBackgrounds[1],this.app.client.setWidth*0.5-this.gallerySnowBackgrounds[6].width/2+this.backgroundPos*300,25+this.sy);
                    this.sy =this.sy/2;
					this.visuals.image_ext(this.gallerySnowBackgrounds[2],this.app.client.setWidth*0.5-this.backgroundPos*900,this.app.client.setHeight/1.1-this.fogY+this.sy,1,1,1);
					this.visuals.image_ext(this.gallerySnowBackgrounds[2],this.app.client.setWidth*0.5+this.backgroundPos*900,this.app.client.setHeight/1.1-this.fogY+this.sy,1,1,1);
                         this.sy =this.sy/1.5;
					this.visuals.image(this.gallerySnowBackgrounds[6],this.app.client.setWidth*0.5-this.gallerySnowBackgrounds[1].width/2+this.backgroundPos*600,0+this.sy);
					this.visuals.image_ext(this.gallerySnowBackgrounds[3],this.app.client.setWidth*0.5-this.backgroundPos*800,this.app.client.setHeight-this.gallerySnowBackgrounds[3].height/2-this.fogY+this.sy,1,1,1);
					this.visuals.image_ext(this.gallerySnowBackgrounds[3],this.app.client.setWidth*0.5+this.backgroundPos*800,this.app.client.setHeight-this.gallerySnowBackgrounds[3].height/2-this.fogY+this.sy,1,this.FogY3,1);
                         this.sy =this.sy/1.5;
					this.visuals.image_ext(this.gallerySnowBackgrounds[2],this.app.client.setWidth*0.5+this.backgroundPos*300,this.app.client.setHeight-this.gallerySnowBackgrounds[2].height/3-this.fogY*13+this.sy,this.FogY3,this.FogY4,1);
					this.visuals.image_ext(this.gallerySnowBackgrounds[2],this.app.client.setWidth*0.5-this.backgroundPos*300,this.app.client.setHeight-this.gallerySnowBackgrounds[2].height/3-this.fogY*13+this.sy,this.FogY3,this.FogY4,1);
					this.visuals.image_ext(this.gallerySnowBackgrounds[2],this.app.client.setWidth*0.5-this.backgroundPos*300,this.app.client.setHeight-this.gallerySnowBackgrounds[2].height*0.2-this.fogY*13+this.sy,this.FogY3,this.FogY4,1);
                        this.sy =s;
					this.visuals.image_ext(this.gallerySnowBackgrounds[4],this.app.client.setWidth*0.5+this.backgroundPos*900,this.app.client.setHeight*0.5-this.gallerySnowBackgrounds[4].height*0.5+this.sy,1,0.5,1);
					this.visuals.image_ext(this.gallerySnowBackgrounds[5],this.app.client.setWidth*0.5+this.backgroundPos*700,this.app.client.setHeight*0.5-this.gallerySnowBackgrounds[5].height*0.5+this.sy,1, 0.5,1);
						 
						
					this.visuals.rect_ext(-this.app.client.setWidth*0.7, 0,-this.app.client.setWidth/this.app.client.scale,this.app.client.setHeight+this.sy,1,1,0,"#000000");
						
						
					this.visuals.rect_ext(this.app.client.setWidth*1.7, 0,this.app.client.setWidth/this.app.client.scale,this.app.client.setHeight+this.sy,1,1,0,"#000000");
						
                        //if (this.game)
                        //this.visuals.image_ext(this.gallery[0],this.app.client.setWidth/2,100-this.sy*1.3,0.5,1,1);
					
        
    },
	draw:function() {
		this.revAngle++;
			var a = 15;
			var c = 3;
			var d = 6;
			if (this.graphics.getErrors())
			{
				this.xxx = this.y;
				var b = this.xxx/10;
				this.visuals.rect_ext(this.app.client.setWidth*0.5,this.app.client.setHeight*0.5,this.app.client.setWidth*3,this.app.client.setHeight, 1,1-Math.sin(b/10),true,"#000000");
				for(var i=8;i>=0;--i)
					this.visuals.circle(-7+this.app.client.setWidth/2+Math.cos((b+i)*7)*a,this.app.client.setHeight/1.5+Math.sin((b+i)*7)*a,c,"#663333",0.5-Math.sin(((b+i)*(1*7))+360*(-Math.sin(this.xxx/1080)*0.1))*0.5);
			}
			else
		if (this.galSwitchCount===0)
		{
			if (this.graphics.getErrors())
			{
				this.xxx = this.y;
				var b = this.xxx/10;
				this.visuals.rect_ext(this.app.client.setWidth*0.5,this.app.client.setHeight*0.5,this.app.client.setWidth*3,this.app.client.setHeight, 1,1-Math.sin(b/10),true,"#000000");
				for(var i=8;i>=0;--i)
					this.visuals.circle(-7+this.app.client.setWidth/2+Math.cos((b+i)*7)*a,this.app.client.setHeight/1.5+Math.sin((b+i)*7)*a,c,"#663333",0.5-Math.sin(((b+i)*(1*7))+360*(-Math.sin(this.xxx/1080)*0.1))*0.5);
			}
			else
			{
				this.backgroundFunction2(a);
			}
		
		}
		
		
		
		
		
		
		
		
		
		
		
    return true;		
	},
	galS:1,
	galF:false,
	galFr:false,
	galFa:0,
	gallery:[],
	galSwitch:false,
	galSwitchi:0,
	galSwitchg:0,
	galSwitchCount:0,
};
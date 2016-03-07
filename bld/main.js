
var TIME = 10240;

((SpiceJS.create()).OnLoad = function (self) {

	self.controller.statistics.monitor(function(){

		self.main = {

		    name:"Example",

		    init:function() {


                this.visuals.setBleed(0.75);

		        this.intro = new test(this.app);

		    	this.particleController = new SJSParticleController(this.app);


                this.star = function(loc) {

                    var r = 2;


                    var r2 = (x+y)/(x/y);

                    var x = this.starLocations[loc].x;
                    var y = this.starLocations[loc].y;
                    var colour = this.starLocations[loc].colour;
                    var rad = this.starLocations[loc].radius;
                    var flicker = this.starLocations[loc].flicker;

                    var radius =  (r)+(r/2)*Math.sin(new Date()/(360+flicker));


                    this.visuals._circle(this.starLocations[loc].x,y,radius+rad+(loc/(x*y)),colour,0.15);


                };

                this.planet = function(loc) {

                    var x =this.app.getWidth()/2;// this.starLocations[loc].x;
                    var y = this.app.getHeight()/2;//this.starLocations[loc].y;
                    var colour = this.starLocations[loc].colour;
                    var rad = this.starLocations[loc].radius;
                    var flicker = this.starLocations[loc].flicker;
                    var size = this.starLocations[loc].size || 0;

                    var distanceX = this.starLocations[loc].x/(flicker/10) * Math.sin(new Date()/TIME+loc*Math.sin(x));
                    var distanceY = this.starLocations[loc].y/(flicker) * Math.cos(new Date()/TIME+loc*Math.sin(x));

                    var r = (flicker/5+size*1)+Math.sin(new Date()/360)*size+rad;
                    if (r<0.1)
                        r = 0.1;

                    this.visuals._circle(x+distanceX,y+distanceY,r+10+5*Math.sin(-360+new Date()/TIME),colour    ,0.85);



                };

                this.roid = function(loc) {

                    var x =this.app.getWidth()/2;// this.starLocations[loc].x;
                    var y = this.app.getHeight()/2;//this.starLocations[loc].y;
                    var colour = this.starLocations[loc].colour;
                    var rad = this.starLocations[loc].radius;
                    var flicker = this.starLocations[loc].flicker;
                    var size = this.starLocations[loc].size || 0;

                    var distanceX = this.starLocations[loc].x/(flicker/10) * Math.sin(new Date()/TIME+loc*Math.sin(x));


                    var distanceY = this.starLocations[loc].y/(flicker) * Math.cos(new Date()/TIME+loc*Math.sin(x));


                                        this.visuals._circle(x+distanceX,y+distanceY,(size+2)+Math.sin(new Date()/360)*0.1,"#FFFFFF"    ,0.25);


                };

                this.sun = function(x,y) {

                    var x = x;
                    var y = y;

                    var distanceX = 16 * Math.sin(new Date()/800+Math.sin(x));
                    var distanceY = 16 * Math.cos(new Date()/800+Math.sin(x));




                    this.visuals._circle(x,y,75+Math.sin(new Date()/360)*20,"#FDB813 ",0.01);

                    this.visuals._circle(x,y,105+Math.cos(new Date()/260)*20,"#FDB813 ",0.01);


                    this.visuals._circle(x,y,55+Math.sin(new Date()/360)*2,"#FDB813 ",0.01);

                    this.visuals._circle(x,y,55+Math.sin(new Date()/600)*2,"#FDB813 ",0.75);
                    this.visuals._circle(x,y,55+Math.cos(new Date()/600)*2,"#FDB813 ",0.75);


                };


                this.starLocations = [];

                for(var starLoc = 0; starLoc<=1024; starLoc++) {
                    this.starLocations[starLoc] = {x:Math.random()*this.app.client.width,y:Math.random()*this.app.client.height,colour:'#'+Math.floor(Math.random()*16777215).toString(16),
                            radius:-1+Math.random()*1.5,
                            flicker:Math.random()*90,
                        };
                }

                this.planetLocations = [];

                for(var planetLoc = 0; planetLoc<=12; planetLoc++) {
                    this.planetLocations[planetLoc] = {x:5*planetLoc-Math.random()*25,y:5*planetLoc+Math.random()*360,colour:'#'+Math.floor(Math.random()*16777215).toString(16),
                            radius:-1+Math.random()*1.5,
                            size:Math.floor(Math.random()*35),
                            flicker:Math.random()*90,
                        };
                }

                this.roidLocations = [];

                for(var roidLoc = 0; roidLoc<=512; roidLoc++) {
                    this.roidLocations[roidLoc] = {x:this.app.getWidth()/2,y:this.app.getHeight()/2,colour:'#'+Math.floor(Math.random()*16777215).toString(16),
                            radius:-1+Math.random()*1.5,
                            size:Math.floor(Math.random()*5),
                            flicker:Math.random()*90,
                        };
                }

		        return true;
		    },

		    update:function() {

				//this.intro.update();

				this.particleController.update();

		        return true;
		    },

		    draw:function() {

		        //this.intro.draw();

				//this.particleController.draw();

		        //this.visuals.text_ext(this.particleController.SJSParticleList.length,100,50,"#FFFFFF",1,1);

		        this.visuals.text_ext(this.app.fps,100,100,"#FFFFFF",1,1);
		        this.visuals.text_ext(this.app.version,100,150,"#FFFFFF",1,1);

                for(var starLoc = 0; starLoc<=this.starLocations.length-1; starLoc++)
                {
                    this.star(starLoc);
                    this.starLocations[starLoc].x+=1*(Math.random()*100)/100;
                }




                for(var roidLoc = 0; roidLoc<=this.roidLocations.length-1; roidLoc++)
                {
                    if (this.roidLocations[roidLoc].y>this.app.getHeight()/2)
                        continue;
                    this.roid(roidLoc);
                }


                for(var planetLoc = 0; planetLoc<=this.planetLocations.length-1; planetLoc++)
                {
                    if (this.planetLocations[planetLoc].y>this.app.getHeight()/2)
                        continue;
                    this.planet(planetLoc);
                }

                this.sun(this.app.getWidth()/2,this.app.getHeight()/2);

                for(var planetLoc = 0; planetLoc<=this.planetLocations.length-1; planetLoc++)
                {
                    if (this.planetLocations[planetLoc].y<this.app.getHeight()/2)
                        continue;
                    this.planet(planetLoc);
                }




		        return true;
		    }

		};

		self.start( 3840, 2160);

		console.log("Example: OnApplicationStart")

	})

    window.Application = this;

});

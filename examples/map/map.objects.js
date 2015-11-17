var Node;
var UI;
var Position;


Position = Object.create({
	x:0,
	y:0,
	set:function(x,y){this.x = x; this.y = y; return Object.create(this);}
});

Node = Object.create({
	position:function(x,y){this.x = x; this.y = y; return this;},
	set:function(x,y){return this.position(x,y);},
	draw:function(v){
		v.circle(this.x,this.y,5,"#FFFFFF",1/Application.getScale());
	}
});

UI = Object.create({
	window:window,
	off:Position.set(0,100),
	alpha:1,
	draw:function(v){
		v.rect_ext(this.window.innerWidth,this.window.innerHeight,-this.window.innerWidth,-this.off.y,1,this.alpha,0,"#FFFFFF");
		
		//v.text("Selected",75,this.window.innerHeight-55,75,this.off.y,1/this.app.g,this.alpha,0,"#FFFFFF");
		
		//v.text_ext("None",75,this.window.innerHeight-15,"#000000",0.8/this.app.g,this.alpha,0);
		
		for(var i = 1;i<10;i++)
		v.rect_ext(75+78*i,this.window.innerHeight-95,75,this.off.y,1,this.alpha,0,"#000000");
		//v.text("Node",110+78*i,this.window.innerHeight-55,75,this.off.y,1/this.app.g,this.alpha,0,"#FFFFFF");
		
	}
});
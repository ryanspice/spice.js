/* Rain Particles SpiceJS Example - particles.js
		ryanspice.com
*/

/// Global Variables

var particlesNumber = 100;
var particlesList = new Array();

///Random Functions

var randomX = function() {
	return -200+Math.random()*(window.innerWidth+100);	
};

var randomY = function() {
    return -200+-Math.random()*window.innerHeight;
};

var randomDelay = function() {
	return Math.random()*200;
};

var randomVelX = function() {
	return 2+Math.random()*3;	
};

var randomVelY = function() {
	return 15+Math.random()*10;	
};


///Type Definitions

var vector = {x:0,y:0};


//Particle Prototype

var particlesType = {};

particlesType.prototype = {
	
	delay:0,
	splashLength:0,
	splashStart:0,
	position:Object.create(vector),
	velocity: Object.create(vector),
	
	move:function(){
			
		if (this.splashStart)
		if (this.splashLength--<=0)
			this.init();
			
			
		if (this.delay-->0)
			return false;
		
		this.position.x += this.velocity.x;
		this.position.y += this.velocity.y;
		
		if (this.position.y>-this.position.x/10+window.innerHeight*(0.75+Math.random()*0.25))
			this.splash();
		
		return true;
	},
	
	splash:function(){
		
		this.velocity.y = Math.random()*this.velocity.y/10;
		this.velocity.x = Math.random()*-this.velocity.x + Math.random()*this.velocity.x;
		
		this.splashStart = true;
		
		if (window.innerHeight<720)
			this.init();
	},
	
	init:function(){
		
		this.splashLength = 20;
		this.splashStart = false; 
		
		this.delay = randomDelay();
		
		this.position = Object.create(vector);
		this.position.x = randomX();
		this.position.y = randomY();
		
		this.velocity = Object.create(vector);
		this.velocity.x = randomVelX();
		this.velocity.y = randomVelY();
		
		return this;
	}
}

// Init particles

var Leave;
for (Leave = particlesNumber-1; Leave>=0; Leave--)
{
	particlesList[Leave] = Object.create(particlesType.prototype).init();
}

//draw particles

var particlesDraw = function(app) {
	app.client.visuals.clean();
	app.client.visuals.linestart();
	app.client.visuals.free = true;
	var x;
	var x2;
	var y;
	var y2;
	var L;
	
	for (var Leave = particlesNumber-1; Leave>=0; Leave--)
	{
		L  = particlesList[Leave];
		x = L.position.x;
		x2 = L.position.x+L.velocity.x;
		y = L.position.y;
		y2 = y+L.velocity.y;

		app.client.visuals.lines(x,y ,x2,y2,"#FFFFFF",1,1);
		app.client.visuals.lines(x-100,y-50 ,x2-100,y2-50,"#FFFFFF",1,1);

		app.client.visuals.lines(x+150,y+100 ,x2+150,y2+100,"#FFFFFF",1,1);

		app.client.visuals.lines(x-150,y+50 ,x2-150,y2+50,"#FFFFFF",1,1);

		L.move();
	}

	app.client.visuals.free = false;
	
	app.client.visuals.lineend();
	
}
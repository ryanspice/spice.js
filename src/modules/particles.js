
import {_SJSClass as SJSClass} from './core/sjs';

import Vector from './core/math/vector';

import Loader from './loader.js';

        let xOff = 0;

export default class SJSParticleController extends Loader {

    constructor(app){

        super(app);

        this.SJSParticleList = [];

        this.particleLimit = 150;

        this.flakes = new Image();

        this.flakes0 = new Image();

        for(var i = 0; i<16; i++)
            this['flakes'+i] = new Image();

        for(var i = 0; i<16; i++)
            this.asyncLoadImageData('../flakes','flakes'+i, i*32, 0*32);



		for(var i = 0; i<3; i++)
	        this['bg'+i] = new Image();

	    for(var i = 0; i<3; i++)
	        this.asyncLoadImage('../bg'+i,'bg'+i);

    }

    clear() {

        this.SJSParticleList = [];

    }

    appendParticle(){

        let length = this.SJSParticleList.length;

        if (length>this.particleLimit)
            return;

        let width = this.app.getWidth();

        let height = this.app.getHeight();

        let scale = this.app.getScale();

        var Start = new Vector(xOff-width +Math.random()*width*3,Math.random()*-25);

        var End = new Vector(Math.random()*width,0);

        End = new Vector(Start.x+Math.random()*width - Math.random()*width,0);

        var newParticle = new SJSParticle(this.app,Start, {x:End.x,y:2*height/scale}, {x:Math.random()*0.1+0.5,y:Math.random()*0.15+0.1}, "#AAFFFF", false);

        this.SJSParticleList.push(newParticle);

        return;
    }

    update() {

        let length = this.SJSParticleList.length;

        this.appendParticle();

        if (length==0)
            return;

        let i = length-1;

        for(i; i; --i)
        {

            let particle = this.SJSParticleList[i];

            particle.update();

        }

        return;
    }

    draw()  {


        let error = (this.getBufferLength());

    //    console.log(error)
        if (error>0)
            {
                this.visuals.rect(0,0,10,10,'#FF0000')
                return;}


					//console.log(loader.bg0);

					//console.log( loader.ImageCache[0]);




        let length = this.SJSParticleList.length;

        if (length==0)
            return;

        let i = length-1;

        for(i; i; --i)
        {

            let particle = this.SJSParticleList[i];

            particle.draw();

        }

    }

}

class SJSParticle extends SJSClass {

    constructor(app,pos, target, vel, marker, usePhysics){

        super(app)

        let loader = window.Loader;// this.app.getCurrent().particleController;

        //this.img = loader.getImageReference('../flakes');
        this.img = loader.getImageReference('flakes'+Math.round(Math.random()*15));

        this.t = Math.round(1+Math.random()*5);

        this.gravity  = 0.5;

        this.alpha    = 0.75+Math.random()*0.25;

        this.easing   = Math.random() * 0.2;

        this.fade     = Math.random() * 0.1;

        this.gridX    = marker % 120;

        this.gridY    = Math.floor(marker / 120) * 12;

        this.color    = marker;

        this.scale = (3*Math.random()*3)*Application.getScale();

        this.start = 30 + Math.random()*180;

        this.offx = 32*Math.round(Math.random()*(512/32));

        this.offy = 32*Math.round(Math.random()*(512/32));

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


                        this.pos = new Vector(pos.x,pos.y);
                        this.vel = new Vector(vel.x,vel.y);
                        this.lastPos = new Vector(this.pos.x,this.pos.y);
                this.target = new Vector(target.x,target.y);


        this.usePhysics = usePhysics || false;

        if (!this.usePhysics)
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

    }

    update(){

        let width = this.app.getWidth();

        let height = this.app.getHeight();

        let scale = this.app.getScale();

        // Check to Delete

        if (this.del){


            let start = new Vector(-xOff-width +Math.random()*width*3,Math.random()*-100)
            let target  = {x:Math.random()*width,y:2*height/scale};
            let velocity = {x:Math.random()*0.5,y:Math.random()*0.1};

            this.constructor(this.app,start, target, velocity, "#AAFFFF", false);

            return;
        }

        // Move Object

        let distance = (this.target.y - this.pos.y);

        let val = this.target.x/200;

        this.pos.y += this.vel.y * (distance/100) * (0.3 + this.easing * this.gravity)+(Math.min(10,(val))*(1-this.usePhysics));

        if (!this.usePhysics)
            if (Math.random()>0.99)
                this.vel.y +=0.2;

        val = this.pos.x/200;

        if (this.dir==0)
            this.pos.x +=this.dir* this.vel.x* Math.sin(this.pos.y/this.start)+((val-val/2)*(1-this.usePhysics));
        else
            this.pos.x +=this.dir* this.vel.x* this.pos.y/this.start+((val-val/2)*(1-this.usePhysics));



            		var xdir =  (this.app.input.horizontal.keyboard ||  this.app.input.horizontal.touch);
            		var ydir =  (this.app.input.vertical.keyboard ||  this.app.input.vertical.touch);
                    this.pos.x += xdir;



        // Check if out of bounds

        if(this.pos.y>600)
        {
            this.alpha -=0.01;

            if (this.alpha<0.01)
                this.del=true;

        }

        if (
                (xOff+this.pos.x<-width)||
                (xOff+this.lastPos.x+25<-width)||
                (xOff+this.pos.x>width*2)||
                (xOff+this.lastPos.x+25>width*2)||
                (this.pos.y>height)
            )
            this.del = true;

    }

    draw() {

        //if ((this.app.getFps()<25)||(this.app.getScale()<0.8))
        //this.visuals.rect_ext(this.pos.x,this.pos.y,5,5,0.2+this.scale/10,this.alpha,1,"#FFFFFF",+this.offx,this.offy,32,32,this.vel.x+this.pos.y);
        //else
        //this.visuals.image_part_rotate(this.img,this.pos.x,this.pos.y,0.2+this.scale/30,this.alpha,1,+this.offx,this.offy,32,32,this.vel.x+this.pos.y);
        //this.visuals.image_part_rotate(this.img,this.pos.x,this.pos.y,0.2+this.scale/30,this.alpha,1,+this.offx,this.offy,32,32,this.vel.x+this.pos.y);

        this.visuals.image_rotate(this.img,this.pos.x,this.pos.y,0.2+this.scale/30,this.vel.x-this.pos.y,this.alpha,1,1);
    }

}

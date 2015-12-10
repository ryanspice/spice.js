
import SJSClass from './sjsclass.js';
import Loader from './loader.js';

/////Snowparticles

let xOff = 0;

export default class SJSParticleController extends Loader {

    constructor(app){

        super(app);

        this.SJSParticleList = [];
        this.particleLimit = 150;

        this.loadImage('../flakes');

    }

    clear() {

        this.SJSParticleList = [];

    }

    update() {

        let length = this.SJSParticleList.length;

        let width = this.app.getWidth();
        let height = this.app.getHeight();
        let scale = this.app.getScale();

        if (length<this.particleLimit)
        {
            var newParticle = new SJSParticle(this.app,{x:xOff-width +Math.random()*width*3,y:-100}, {x:Math.random()*width,y:2*height/scale}, {x:Math.random()*1+0.5,y:Math.random()*0.1+0.1}, "#AAFFFF", false);
            this.SJSParticleList.push(newParticle);
        }

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

        let Loader = this.app.getCurrent().particleController;

        this.img = Loader.getImageReference('../flakes');

        this.t = Math.round(1+Math.random()*5);

        this.gravity  = 0.5;

        this.alpha    = 0.5+Math.random()*0.5;

        this.easing   = Math.random() * 0.2;

        this.fade     = Math.random() * 0.1;

        this.gridX    = marker % 120;

        this.gridY    = Math.floor(marker / 120) * 12;

        this.color    = marker;

        this.scale = (2*Math.random()*2)*Application.getScale();

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

            let start = {x:-xOff-width +Math.random()*width*3,y:-100};
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

    draw(){

        this.visuals.image_part_rotate(this.img,this.pos.x,this.pos.y,0.2+this.scale/30,this.alpha,1,+this.offx,this.offy,32,32,this.vel.x+this.pos.y);
        //this.visuals.rect_ext(this.pos.x,this.pos.y,5,5,0.2+this.scale/10,this.alpha,1,"#FFFFFF",+this.offx,this.offy,32,32,this.vel.x+this.pos.y);

    }

}

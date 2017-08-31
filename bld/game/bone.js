class Bone extends RagPhysics {

		constructor(img,x,y,s,a,c,xx,yy,w,h,visuals){

			super(img,x,y,s,a,c,xx,yy,w,h,visuals);
			this.pState = 'fall';
			this.vel = new Vector(1,-2);
		}

		update(){
			this.x+=this.vel.x;
			this.y+=this.vel.y;
			this.vel.y+=0.1;
			this.vel.x*=0.9;



			this.xx =1*Math.round(this.index);
			this.w = (100/7);
			//if (this.index<4)
			//	this.index+=0.25;
		}


		draw(){
			this.update();
			if (this.s<0)
			this.visuals.image_flip(-1 + this.getX(),1),this.visuals._image_part(this.img,this.getX(),this.getY(),this.s,this.a,this.c,this.xx,this.yy,this.w,this.h)
			else
			this.visuals._image_part(this.img,this.getX(),this.getY(),this.s,this.a,this.c,this.xx,this.yy,this.w,this.h)
			if (this.s<0)
			this.visuals.image_flip(-1 + this.getX(),1)
			this.visuals.opacity(1);
		}


}

class RagPhysics extends Sprite {

	constructor(img,x,y,s,a,c,xx,yy,w,h,visuals){

		super(img,x,y,s,a,c,xx,yy,w,h,visuals);
		this.collision = false;
		this.hit = false;
	}

	getX(){

		return this.position.x-Player.offset.x;

	}
	getY(){

		return this.position.y+Player.offset.y;

	}

	getPosition(){

		return new Vector(this.getX(),this.getY());
	}

	bounds(){

		if (this.position.y<140)
			this.position.y=140, this.diry = 0;

		if (this.position.y>175)
			this.position.y=175;

		if (this.position.y<165)
			this.position.y=165;// this.diry = 0;

		if (this.position.y>165)
			this.position.y=165;



		if (this.position.x<-120)
			this.position.x=-120, this.pState = 'idle';

		//if (this.position.x>300)
		//	this.position.x=300, this.pState = 'idle';

	}

	move(vector){

		this.position = Vector.Combine(this.position,vector);

	}

	set state(val){
		this._state = val;
	}

	get state(){

		return this._state;

	}

}

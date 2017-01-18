function(aniArray,aniSpeed,ani,origAni){
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
}

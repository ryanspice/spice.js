
		class Skeleton extends RagPhysics {

			constructor(img,x,y,s,a,c,xx,yy,w,h,visuals){

				super(img,x,y,s,a,c,xx,yy,w,h,visuals);
				this.pState = 'walk';
				this.dS = 0;
				this.timeoutmax = 120;
				this.timeout = this.timeoutmax;
			}

			respawn(){

				if (this.timeout>0){
					this.timeout--;
					return;
				}
				this.timeout = this.timeoutmax;
				//this.position.x = Math.round(-1+Math.random()*2)*600;

				let r = Math.random() < 0.5 ? -1 : 1;

				this.position.x = Player.position.x + r*300;


				if (this.position.x == 0)
					this.position.x = 500;
				this.index = 0;
				this.pState = 'idle';
			}

			update(){

				let t = new Date().getTime();
				let z = 0;
				switch(this.pState){

					case 'idle':

						this.img = Skeleton.sprIdle;
						z = (264/11);
						this.w = (264/11);
						this.xx =z*Math.round(this.index);
						this.index = 5+Math.sin(t/1080)*5;



						if (this.collision>0){
							this.pState = 'idle';
							return;
						}

						if (this.getX()>Player.position.x)
						if (this.getX()<Player.position.x){


								this.pState = 'idle';
								return;
						}
						this.pState = 'walk';
						/*
						if (this.index<3.4)
							this.index+=0.05;
							else
							this.index = -0.5;
						*/
					break;

					case 'walk':

						this.img = Skeleton.sprWalk;
						z = (286/13);
						this.w = (286/13);
						this.xx =z*Math.round(this.index);
						if (this.index<12)
							this.index+=0.15;
							else
							this.index = 0;


							let xdir = this.s;

						//if (this.position.y<Player.position.y+5)
						//if (this.position.y>Player.position.y-5)


						let velX = 0;
						let velY = 0;
						if (this.getX()<Player.position.x)
						this.s = 1,velX += Math.sin(this.index/360) * 5;
						else
						if (this.getX()>Player.position.x)
						this.s = -1,velX -= Math.sin(this.index/360) * 5;

					if (this.getY()>Player.position.y)
						velY += Math.sin(this.index/360) * -1;
						else
						velY += Math.sin(this.index/360) * 1;

						if (this.collision==1){


								this.pState = 'attack';
								this.index = 0;
								return;
						}
						this.move(new Vector(velX,velY))



						/*
						if (this.index<3.4)
							this.index+=0.05;
							else
							this.index = -0.5;
						*/
					break;
					case 'attack':

						this.img = Skeleton.sprSkeleton[2];

						z = (774/18);
						this.xx =-8+z*Math.round(this.index);
						this.yy =3;
						this.w = (774/18);
						this.h = 37;
						if (this.index<18)
							this.index+=0.25;
							else{
								this.w = (264/11);
								this.h = 35;
								this.xx = 0;
								this.yy = 0;
								this.index = 0;
								this.pState = 'idle';
							}
					break;
					case 'hit':


						this.img = Skeleton.sprSkeleton[3];
						z = (240/8);
						this.xx =z*Math.round(this.index);
						this.w = (240/8);

														this.dS = this.s;
														console.log(this.s);
														this.index = 7;
						if (this.index<7)
							this.index+=0.25;
							else{

								this.index = 0;
								this.pState = 'dead';
								//this.delete = true;
								//this.x+=800;

							}
							this.x-=((7-this.index)/10)*this.s;
							this.hit = false;
					break;
					case 'dead':

						this.img = Skeleton.sprSkeleton[5];

						z = (495/15);
						this.xx =z*Math.round(this.index);
						this.w = (495/15);
						if (this.index<14)
							this.index+=0.25;
							else{

								this.respawn();
								//this.index = 0;
								//this.pState = 'idle';
								//this.delete = true;
								//this.x+=800;

							}
							//this.x-=((7-this.index)/10)*this.s;
							//this.hit = false;
					break;

				}
				this.bounds();


			}

			draw(){
				this.update();
				if (this.pState == 'dead'){



					if (this.dS<0)
					this.visuals.image_flip(-1 + this.getX(),1),this.visuals._image_part(this.img,this.getX(),this.getY(),this.s,this.a,this.c,this.xx,this.yy,this.w,this.h)
					else
					this.visuals._image_part(this.img,this.getX(),this.getY(),this.s,this.a,this.c,this.xx,this.yy,this.w,this.h)
					if (this.dS<0)
					this.visuals.image_flip(-1 + this.getX(),1)



					return;
				}

				if (this.s<0)
				this.visuals.image_flip(-1 + this.getX(),1),this.visuals._image_part(this.img,this.getX(),this.getY(),this.s,this.a,this.c,this.xx,this.yy,this.w,this.h)
				else
				this.visuals._image_part(this.img,this.getX(),this.getY(),this.s,this.a,this.c,this.xx,this.yy,this.w,this.h)
				if (this.s<0)
				this.visuals.image_flip(-1 + this.getX(),1)
			}

		}

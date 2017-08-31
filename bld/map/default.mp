{
	"name":"tim",
	"options":{

		"canvas":{
			"size":{
				"width":400,
				"height":300
			}
		}

	},
	"init":[
		"this.velocity=new Vector(-0.1,0);this.app.client.loader.graphics=this.graphics;this.items=[];let s=16;let i=16;let t=i;this.app.client.loader.asyncLoadImage('../tiles_packed','s').then((sprite)=>{this.snow=sprite;while(i-->=0)this.items.push(this.visuals.createMapObject('Tile',this.snow,0+t*i,100,1,1,1,0,0,16,16));this.visuals.createMapObject('Tile',this.snow,0+t*i,100,1,1,1,0,0,16,16);this.visuals.Tile(this.snow,100+t*i,125,1,1,1,0,0,16,16);this.visuals.push(new Ground(this.snow,50+t*i,150,1,1,1,0,0,16,16));new Ground(this.snow,50+t*i,200,1,1,1,0,0,16,16,this.visuals)});this.items.push(this.visuals.createMapObject('Circle',200,200,5,'#FF00FF',0.5));this.items.push(this.visuals.Circle(100,100,10,'#FFFFFF',1));this.items.push(this.visuals.push(new Circle(150,150,10,'#FFFFFF',1)));this.items.push(new Circle(100,150,10,'#FFFFFF',1,this.visuals));this.player=new Circle(0,0,25,'#FF0000',1,this.visuals);this.player.priority=3;"
	],
	"draw":[
		"this.visuals.circle : 25,25,2.5,'#FFFFFF' "
	],
	"update":[

		"if(this.app.input.duration)this.velocity.x+=0.1;for(let i=0;i<=this.items.length-1;i++){let y=this.items[i].y=this.items[i].y+Math.sin(new Date().getTime()/300+this.items[i].x/100)*1;let x=this.items[i].x;if(y-20<this.player.y)if(x-25<this.player.x)if(x+25>this.player.x){if(this.velocity.y>0)this.velocity.y=0;this.velocity.y-=0.025}}if(this.velocity.y<1)this.velocity.y+=0.025;this.velocity.x*=0.9;this.player.Move(this.velocity);this.player.r=20-this.velocity.y;"

	],
	"objects":[
		{
			"name":"a",
			"draw":[	"this.visuals.circle : 125,125,1.5,'#FF0000' "],
			"update":[],
			"init":[]
		},
		{
			"name":"b",
			"draw":[	"this.visuals.circle : 225,125,2.5,'#FF0000' "],
			"update":[],
			"init":[]
		}
	]
}

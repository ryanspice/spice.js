
//Application OnLoad
App.OnLoad = function () {
	
	//App.Init(title,width,height)
	App.Init("Isometric - SpiceJS", 1024, 720);

	//Set canvas background colour ( colour )
	App.canvas.background_set("#000000");

	//Assign favicon
	App.ext.metatag.metaFavicon("../../stan.png");
	
};

//Application main loop Object[init,update,draw]
App.main = {
	
	name:"Example",

	init:function() {

		//Initialization Logic
		
		//RandomTile Generation tile.
		this.randomTile = function()
		{
			var tile = 0;
			tile = Math.floor((Math.round((Math.random()*12)))* 64);
		return tile;	
		};
		
		//Load tileset image
		this.tileset = this.graphics.load('../grassland_tiles');
		
		//Set default tileset width and height
		this.tileWidth = 64;
		this.tileHeight = 32;
		
		//Set map scale
		this.scale = 1;
		
		//Set target x and y
		this.target = {x:0,y:0};
		
		//Set map values
		this.map = {
			x:32*32,
			y:16*16,
			velx:0,
			vely:0,
			vels:0,
			width:64,
			height:64,
		};
		
		//The map is split in to Even and Odd arrays, each tile works side by side on the map. [ type1] [type 2],[ type1] [type 2]
		
		//Random Threshold
		this.randomThreshHold = 55;
		
		//List of tiles
		this.tileList1 = new Array();
		this.tileList2 = new Array();
		this.tileList1[0] = new Array();
		this.tileList2[0] = new Array();
		
		//Tile type
		this.type = new Array();
		this.type2 = new Array();
		this.type[0] = new Array();
		this.type2[0] = new Array();
		
		//Populate empty lists type and tile
		for (var sx = 0; sx<=this.map.width; sx++)
			this.tileList1[sx]= new Array(this.map.height),this.tileList2[sx]= new Array(this.map.height),
			this.type[sx]= new Array(this.map.height),this.type2[sx]= new Array(this.map.height);
		
		//Generate random tiles
		for (var sx = 0; sx<this.map.width; sx++)
			for (var sy = 0; sy<this.map.height; sy++)
			{
			this.tileList1[sx][sy]=this.randomTile();
			this.tileList2[sx][sy]=this.randomTile();
			this.type[sx][sy]=Math.floor(Math.random()*this.randomThreshHold);
			this.type2[sx][sy]=Math.floor(Math.random()*this.randomThreshHold);
			}
		
		return true;
	},
	
	update:function() {

		//Game logic	
		//Zoom map with the wheelDelta
		if (this.scale +=this.app.ext.input.wheelDelta/10000)
			{
			
			///Unfinished map displacement code
			
			//this.map.velx=this.scale*(this.app.ext.input.x-(this.map.x+this.map.width/2))/100;
			//this.map.vely=this.scale*(this.app.ext.input.y-(this.map.y+this.map.width/2))/100;
			//this.map.x+=this.map.velx;
			//this.map.y+=this.map.vely;
			
			//this.target.x+=this.map.velx;
			//this.target.y+=this.map.vely;
			
			}
		
		//Zoom with left or right mouse
		if (this.app.ext.input.getPressed())
		if (this.app.ext.input.key==false)
		{
			if (this.app.ext.input.button==0)
			this.scale+=0.05;
			if (this.app.ext.input.button==2)
			this.scale-=0.05;
			
		}
		
		//Scroll horizontally
		if ((this.app.ext.input.horizontal))
			this.map.x -= 25*(this.app.ext.input.horizontal);
		
		//Clamp scale
		
		//Clamp Scale
		this.scale = this.app.client.Math.Clamp(this.scale,0.29,2);
		
		//Clamp map positions
		this.map.x = this.app.client.Math.Clamp(this.map.x,0,-this.app.client.setWidth+this.map.width*this.tileWidth);
		this.map.y = this.app.client.Math.Clamp(this.map.y,-this.map.height	, -this.app.client.setHeight + this.map.height*this.tileHeight);

		return true;
	},

	draw:function() {
		
		//Drawing vars 
		var buff = 256;
		var ins = false;
		var tilea;
		var tileb;
		var pressed = this.app.ext.input.pressed;
		
		//Ground Tiles
		for (x = this.map.width; x>0; --x)
		for (y =0; y<= this.map.height; ++y)
		{
			//Get position
			this.posX = -16+-this.map.x+x*this.tileWidth;
			this.posY = 8+-this.map.y+y*this.tileHeight;
			
			var xrs = (this.posX)*this.scale;
			var yrs = (this.posY)*this.scale;
			
			//Get tile
			tilea = this.tileList1[x][y];
			tileb = this.tileList2[x][y];
			
			//If within view
			if (yrs>-this.tileHeight*2)
			if (yrs<App.client.setHeight)
			if ((buff+-this.map.x+x*this.tileWidth)*this.scale>0)
			if ((-buff+-this.map.x+x*this.tileWidth)*this.scale<App.client.setWidth)
				{
				addListener
				//Draw tile A
				this.visuals.image_part(this.tileset,xrs,yrs,this.scale,1,1,tilea,32*(y%x==0),64,32);
					
				//Draw tile B
				this.visuals.image_part(this.tileset,(this.posX + 32)*this.scale,(16+this.posY)*this.scale,this.scale,1,1,tileb,32*(x%y==0),64,32);

				if (pressed)
					if (this.visuals.rect_button(xrs,yrs,64*this.scale,32*this.scale,1,0.0021,"#FFFFFF",function(){},1))
					{
						this.target.x =xrs;
						this.target.y =yrs;
					}
				}
			
		};
		
		//Object Tiles
		for (x = this.map.width; x>0; --x)
		for (y =0; y<= this.map.height; ++y)
		{
			
			//Get position
			this.posX = -16+-this.map.x+x*this.tileWidth;
			this.posY = 8+-this.map.y+y*this.tileHeight;

			//If within view
			if ((this.posY)*this.scale>-this.tileHeight*2)
			if ((this.posY)*this.scale<App.client.setHeight)
			if ((buff+-this.map.x+x*this.tileWidth)*this.scale>0)
			if ((-buff+-this.map.x+x*this.tileWidth)*this.scale<App.client.setWidth)
			{
				
				//Save offset
				var offset = (512/4)*(x%2==0)+(512/4)*(x%3==0)+(512/4)*(x%4==0);

				//Draw part of the tileset based on the type
				if (this.type[x][y]==4)
					this.visuals.image_part(this.tileset,(+8+this.posX)*this.scale,(-16+this.posY)*this.scale,this.scale,1,1,775+(64*(x%2==0))+(64*(x%3==0))+(64*(x%4==0)),412,64,64);

				if (this.type[x][y]==2)
					this.visuals.image_part(this.tileset,(this.posX)*this.scale,(-100+this.posY)*this.scale,this.scale,1,1,+512,1340-400,120,242);
				

				if (this.type[x][y]==1)
					this.visuals.image_part(this.tileset,((-512/4)/4+36+this.posX)*this.scale+Math.sin(new Date()/360+x+y),(-48+this.posY)*this.scale,this.scale+Math.sin(new Date()/360)/120,0.6+Math.sin(new Date()/360+x)/5,1,offset,1340-350,568/4,121),
					this.visuals.image_part(this.tileset,((-512/4)/4+36+this.posX)*this.scale,(-48+this.posY)*this.scale,this.scale,1,1,offset,1340-350,568/4,121);

				if (this.type[x][y]==0)
					this.visuals.image_part(this.tileset,((-512/4)/4+this.posX)*this.scale+Math.sin(new Date()/360+x+y)*2,(-64+this.posY)*this.scale,this.scale+Math.sin(new Date()/360)/120,0.6+Math.sin(new Date()/360+x)/5,1,offset,1340-200,512/4,200),
					this.visuals.image_part(this.tileset,((-512/4)/4+this.posX)*this.scale,(-64+this.posY)*this.scale,this.scale,1,1,offset,1340-200,512/4,200);
				
			}
		};
		
		return true;
	}
};
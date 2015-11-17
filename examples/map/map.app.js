
	var Application = SpiceJS.create();

	Application.OnLoad = function (self) {

		self.Init("Example SpiceJS", 720, 320);

		self.canvas.setBackground("#000000");

		self.ext.metatag.metaFavicon("favicon.png");

	};

	Application.main= {

		name:"Example",

		init:function() {
			
			this.nodeList = [];
			this.node = Node;
			this.ui = UI;
			
			//Initialization Logic
			this.img = this.graphics.load("../favicon");

			
			for(var i = 0;i<5;i++)
			this.createNode(10+25*i,200);
			this.visuals.free = true;
			return true;
		},

		createNode:function(x,y){
		
			return this.nodeList.push((Object.create(Node)).set(x,y));	
			
		},
		
		update:function() {
				
			if (this.app.input.getPressed())
			if (this.app.input.getDuration()<2)
			this.createNode(this.app.input.x,this.app.input.y);
			return true;
		},

		draw:function() {
			
			this.visuals.screen_fill(1,"#000000");
			
			//
			
			var obj = {x:0,y:200};
			var lobj = {x:0,y:200};
			for(var i = 0;i<this.nodeList.length;i++)
			{this.visuals.linestart();
				lobj = obj;
				obj = this.nodeList[i];
				obj.draw(this.visuals);
				this.visuals.quadraticCurve(obj.x,obj.y,lobj.x,lobj.y,1,"#00FF00",1,1);
			 this.visuals.lineend();
			
			}
			//
			
			this.ui.draw(this.visuals);
			
			return true;
		}

	};
Spice.js
========

HTML5 javascript framework based on canvas 2D Animation


To use simply apply the logic found in 'index.html', include Spice.js and you're ready to go. 

Suggested implementation in WebFrames for mobile devices, fullscreen applications, and iFrames. 

Setting your index.html
-----------------------


```bash
<!DOCTYPE html>
<html >
  <head>
	</head>
    <body>
	</body>
<script rel="prefetch" type="application/x-javascript" src="spice.js"></script>
<script rel="prefetch" name="main" type="text/javascript" defer>
_Main.prototype = {
	init:function() {
		//Game.init(this.app);
		this.app.ext.metatag.metaAppend(this.app.ext.metatag.metaLink("https://ryanspice.com/flappyfish/images/FlappyFish0.png","shortcut icon","image/png"));
		this.app.ext.debug.toggle("off");
		this.visuals.background_set("transparent");
		
		//this.bg = this.graphics.load("background","Sky-Clouds-Building-Landscape-City-Toronto-Canada");
		this.visuals.clearing.settings[0][1]=true;
		//this.visuals.clearing.settings[2][1]=true;
		this.app.ext.top();
		this.w = this.app.client.setWidth;
		this.h = this.app.client.setHeight;
		this.app.client.c.style.pointerEvents = "none";
		
		return true;
		},
	update:function() {
		
		return true;
		},
	draw:function() {
	console.log('eh');
		return true;
		}
};
App.init("yw8",320,480);
</script>
</html>
```
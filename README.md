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
	<body></body>
	<script rel=prefetch type="application/x-javascript" src="spice.js"></script>
	<script rel=prefetch name="main" type="text/javascript" defer>
				App.OnLoad = function(){
					App.init("sb",1920,480);
				}
				_Main.prototype = {
					name:"Menu",
					init:function() {
							this.app.ext.metatag.metaAppend(this.app.ext.metatag.metaLink("icon.png","shortcut icon","image/png"));
							this.app.ext.debug.toggle("off");
							this.visuals.background_set("#000000");
							this.visuals.clearing.settings[0][1]=true;
							this.app.ext.top();
							this.w = this.app.client.setWidth;
							this.h = this.app.client.setHeight;
							this.app.client.c.style.pointerEvents = "none";
							this.rect = Object.create(_Rectangle.prototype);
							this.x = 0;
							this.y = 0;
						return true;
						},
					update:function() {
						return true;
						},
					draw:function() {
							this.rect.draw(this.x,this.x,this.w,window.innerHeight);
						return true;
						}
				};
	</script>
	</html>
```

Setting up your Application
---------------------------

OnLoad:

App.OnLoad = function(){
	App.init("sb",1920,480);
}

Note: Stylesheet loads block script execution, so if you have a <script> after a <link rel="stylesheet" ...>, the page will not finish parsing - and DOMContentLoaded will not fire - until the stylesheet is loaded.

Window Scroll

```bash
App.ext.scroll = true||false;
App.ext.scroll.x = 0;
App.ext.scroll.y = 0;
App.ext.scroll.seamless = true || false;
```
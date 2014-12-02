
##table


* [examples][examples]
* [particle][particle]
* [animations][animations]
* [parallax][parallax]

[examples]: #examples
[particle]: #particle
[animations]: #animations
[parallax]: #parallax

##getting started



__B__efore you start developing your App in SpiceJS, it is reccomended to have some knowledge of Object.create and Prototype javascript notation. 

__S__piceJS, designed heavily on the Canvas API, has support across most popular devices and browsers. Any device which supports Html5 and Html5 Hardware Accelleration will have a nice time.

__T__he framework is designed on providing you the most efficient way to develop a cross platform, multi touch, and multi resolution application with ease.

__P__rior to recent times developers had to rely on functions such as setTimeout(), however, up to date browsers can support a new feature called requestAnimationFrame() which can provide a high calculation of Frame Rate. This allows developers to create extensive programs, and fully animated games.

##examples

### particle

This example provides a glimpse at creating particle factories to use with SpiceJS. In combination with Object.create methods you can create fast and flexible particle systems on the fly.

teaching points: <i>transparent background, vector line drawing</i>

reference: [vector math](http://higherorderfun.com/blog/2012/06/03/math-for-game-programmers-05-vector-cheat-sheet/), [Object.create()](http://www.htmlgoodies.com/beyond/javascript/object.create-the-new-way-to-create-objects-in-javascript.html), [object creation patterns](http://www.htmlgoodies.com/html5/javascript/some-useful-javascript-object-creation-patterns.html#fbid=T4GDU9yVQOc)

[view](https://github.com/ryanspice/spice.js/tree/master/examples/particles)

[download](https://github.com/ryanspice/spice.js/blob/master/examples/particles/particles.7z)

### animations

This example uses a number of images to compile an animation. I've included two versions: One which includes [Blitting] images to create the animations, and another for animations without Blitting. (Warning: non-blitting techniques are not recommended for use in games or applications with a number of animations)

teaching points: <i>sprites, blitting, animations</i>

reference: [LayersToSpriteSheet.js (script for photoshop)](https://ryanspice.com/js/LayersToSpriteSheet.js)

[view](https://github.com/ryanspice/spice.js/tree/master/examples/animation)

[download](https://github.com/ryanspice/spice.js/blob/master/examples/isometric/animation.7z)

### parallax

A small example previewing what it's like to use multiple backgrounds on a parallaxing path. 

teaching points: <i>external files, loading screen, parallaxing</i>

reference: [Art by Steve Mclean](https://www.linkedin.com/pub/steve-mclean/76/b5b/25a)

[view](https://github.com/ryanspice/spice.js/tree/master/examples/animation)

[download](https://github.com/ryanspice/spice.js/blob/master/examples/isometric/animation.7z)

### isometric

A small example previewing what it's like to use multiple backgrounds on a parallaxing path. 

teaching points: <i>sprites, blitting, viewport, drawing and working with isometric data</i>

reference: [javascript comma operator](http://javascriptweblog.wordpress.com/2011/04/04/the-javascript-comma-operator/?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+JavascriptJavascript+%28JavaScript%2C+JavaScript%29), [Object.create()](http://www.htmlgoodies.com/beyond/javascript/object.create-the-new-way-to-create-objects-in-javascript.html), [object creation patterns](http://www.htmlgoodies.com/html5/javascript/some-useful-javascript-object-creation-patterns.html#fbid=T4GDU9yVQOc)

[view](https://github.com/ryanspice/spice.js/tree/master/examples/animation)

[download](https://github.com/ryanspice/spice.js/blob/master/examples/isometric/animation.7z)

##EH

Spice.js is a clean, fast, and intuitive javascript framework designed to allow for the creation of Html5 games or apps.The framework relies heavily on [```Hardware Acceleration```](http://en.wikipedia.org/wiki/Hardware_acceleration) and the use of [```Request Animation Frame```](https://developer.mozilla.org/en/docs/Web/API/window.requestAnimationFrame)

Developed by: [Ryan Spice](http://twitter.com/ryanspice/)

To get started, check out <http://js.ryanspice.com>!

## Table of contents

 - [Setting your index.html](#your-index.html)


### Your index.html

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

### Setting up your Application


### Initial Functions

###### App.OnLoad

```bash
App.OnLoad = function(){
	App.init("sb",1920,480);
}
```

###### App.Construct

```bash
App.OnLoad = function(){
	App.init("sb",1920,480);
}
```


###### Window Scroll

```bash
App.ext.scroll = true||false;
App.ext.scroll.x = 0;
App.ext.scroll.y = 0;
App.ext.scroll.seamless = true || false;
```

##### Note: Stylesheet loads block script execution, so if you have a ```<script>``` after a ```<link rel="stylesheet" ...>```, the page will not finish parsing - and DOMContentLoaded will not fire - until the stylesheet is loaded.

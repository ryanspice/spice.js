Developed by: [Ryan Spice](http://twitter.com/ryanspice/)

To get started, check out <http://js.ryanspice.com>!

## table of contents

[examples]: #examples
[particle]: #particle
[animations]: #animations
[parallax]: #parallax
[isometric]: #isometric
[credit]: #credit
[documentation]: #documentation



[index.html]: #index.html

[getting started]: #getting-started
[setting up your application]: #setting-up-your-application
[further readings...]: #further-readings...

* [getting started][getting started]
 * [essential functions](#essential functions)
 * [setting up your application][setting-up-your-application]
 * [further readings...][further readings...]
 
* [examples][examples]
 * [particle][particle]
 * [animations][animations]
 * [parallax][parallax]
 * [isometric][isometric]
* [documentation][documentation]
 * [index.html][index.html]
 * [setting up your application][#setting-up-your-application]
 * [further reading..](http://js.ryanspice.com/)


## getting started

<b>B</b>efore you start developing your App in SpiceJS, it is reccomended to have some knowledge of Object.create and Prototype javascript notation. 

<b>S</b>piceJS, designed heavily on the Canvas API, has support across most popular devices and browsers. Any device which supports Html5 and Html5 Hardware Accelleration will have a nice time.

<b>T</b>he framework is designed on providing you the most efficient way to develop a cross platform, multi touch, and multi resolution application with ease.

<b>P</b>rior to recent times developers had to rely on functions such as setTimeout(), however, up to date browsers can support a new feature called requestAnimationFrame() which can provide a high calculation of Frame Rate. This allows developers to create extensive programs, and fully animated games.

[```Hardware Acceleration```](http://en.wikipedia.org/wiki/Hardware_acceleration) 
[```Request Animation Frame```](https://developer.mozilla.org/en/docs/Web/API/window.requestAnimationFrame)

### essential functions

 

###### App.OnLoad

```bash
App.OnLoad = function(){

	App.Init("sb",1920,480);
};
```

###### App.main

```bash
App.main = {
 init:function(){},
 update:function(){},
 draw:function(){}	
};
```

###### App.options

```bash
var options = {
            
            //Global
			mute:false,
            
            
            //Paths
			paths:{
				data:"data/",
				images:"images/",
				url:""
			},
            
            //Canvas
			canvas:{
                
                //Toggle the use of options.canvas
				override:false,
                
                //Use canvas.name, canvas.buffer
				name:'canvas',
				buffername:'buffer',
                
                //Toggle the use of double-buffering
				buffer:false,
                
                //Assign canvas element background colour
				color:'#0000000',
                
                //Assign canvas element position properties
				position:{
					position:'absolute',
					top:0,
					left:window.innerWidth/2,
					center:true,
					z:1
				},
				
                //Assign canvas size properties
                size:{
					width:320,
					height:480
				}
			}
```

###### Note: Stylesheet loads block script execution, so if you have a ```<script>``` after a ```<link rel="stylesheet" ...>```, the page will not finish parsing - and DOMContentLoaded will not fire - until the stylesheet is loaded.


### setting up your application

An example of the above essential functions used to create a basic SpiceJS App.

```bash
	<!DOCTYPE html>
	<html >
		<head>
			<script rel=prefetch type="application/x-javascript" src="spice.js"></script>
			<script rel=prefetch name="main" type="text/javascript" defer>
						App.OnLoad = function(){
							App.init("sb",1920,480);
						}
						App.main = {
							name:"Menu",
							init:function() {
								return true;
								},
							update:function() {
								return true;
								},
							draw:function() {
								return true;
								}
						};
			</script>
		</head>
		<body></body>
	</html>
```

### further reading...

You can read the [Documentation](http://js.ryanspice.com/) and more on SpiceJS and how to create SpiceJS apps at http://js.ryanspice.com/. 

## examples

### particle

This example provides a glimpse at creating particle factories to use with SpiceJS. In combination with Object.create methods you can create fast and flexible particle systems on the fly.

teaching points: <i>transparent background, vector line drawing</i>

[```Vector Math```](http://higherorderfun.com/blog/2012/06/03/math-for-game-programmers-05-vector-cheat-sheet/), [```Object.create()```](http://www.htmlgoodies.com/beyond/javascript/object.create-the-new-way-to-create-objects-in-javascript.html), [```Object Creation Patterns```](http://www.htmlgoodies.com/html5/javascript/some-useful-javascript-object-creation-patterns.html#fbid=T4GDU9yVQOc)

[view](https://github.com/ryanspice/spice.js/tree/master/examples/particles)

[download](https://github.com/ryanspice/spice.js/blob/master/examples/particles/particles.7z)

### animations

This example uses a number of images to compile an animation. I've included two versions: One which includes [Blitting] images to create the animations, and another for animations without Blitting. (Warning: non-blitting techniques are not recommended for use in games or applications with a number of animations)

teaching points: <i>sprites, blitting, animations</i>

[```LayersToSpriteSheet.js (script for photoshop)```](https://ryanspice.com/js/LayersToSpriteSheet.js)

[view](https://github.com/ryanspice/spice.js/tree/master/examples/animation)

[download](https://github.com/ryanspice/spice.js/blob/master/examples/animation/animation.7z)

### parallax

A small example previewing what it's like to use multiple backgrounds on a parallaxing path. 

teaching points: <i>external files, loading screen, parallaxing</i>

[```Art by Steve Mclean```](https://www.linkedin.com/pub/steve-mclean/76/b5b/25a)

[view](https://github.com/ryanspice/spice.js/tree/master/examples/parallax)

[download](https://github.com/ryanspice/spice.js/blob/master/examples/parallax/parallax.7z)

### isometric

Using mutliple arrays to store map background and object data. This example previews scaling and panning an isometric randomly generated map. 

teaching points: <i>sprites, blitting, viewport, drawing and working with isometric data</i>

[```JavaScript Comma Operator```](http://javascriptweblog.wordpress.com/2011/04/04/the-javascript-comma-operator/?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+JavascriptJavascript+%28JavaScript%2C+JavaScript%29), [```Object.create()```](http://www.htmlgoodies.com/beyond/javascript/object.create-the-new-way-to-create-objects-in-javascript.html), [```Object Creation Patterns```](http://www.htmlgoodies.com/html5/javascript/some-useful-javascript-object-creation-patterns.html#fbid=T4GDU9yVQOc)

[view](https://github.com/ryanspice/spice.js/tree/master/examples/isometric)

[download](https://github.com/ryanspice/spice.js/blob/master/examples/isometric/isometric.7z)



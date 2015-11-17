[examples]: #examples
[particle]: #particle
[animations]: #animations
[parallax]: #parallax
[isometric]: #isometric

[getting started]: #getting-started
[essential functions]: #essential-functions
[setting up your application]: #setting-up-your-application
[coming soon]: #coming-soon
[further readings...]: #further-readings
[features]: #features

[completed]:$completed;
[in-testing]:$in-testing;

Developed by: [Ryan Spice](http://twitter.com/ryanspice/)

To get started, check out [the documentation](http://js.ryanspice.com)!

Current documentation is for an older version of SpiceJS. 

## table of contents

* [features][features]

	* [completed][completed]
	* [in-testing][in-testing]
	* [coming soon][coming soon]
* [getting started][getting started]
	* [essential functions][essential functions]
	* [setting up your application][setting up your application]
	* [further readings...][further readings...]

* [examples][examples]
 * [particle][particle]
 * [animations][animations]
 * [parallax][parallax]
 * [isometric][isometric]

## features	 

<ul>
	 <ul>Cross-Browser</ul>
	 <ul>Lightweight</ul>
	  <ul>No dependencies</ul>
</ul>

####completed
<ul>
	 <li>game state logic</li>
	 <li>object inheritance </li>
	  <li>fps and delta time calculations</li>
	 <li>graphics handling</li>
	 <li>advanced scaling</li>
</ul>

####in-testing
<ul>
	 <li>app options</li>
	  <li>multi-touch + mouse & keyboard input detection</li>
	 <li>advanced drawing (blending, elements, buttons)</li>
	  <li>double buffering</li>
	  <li>linear and radial collision</li>
</ul>

####coming soon
 <ul>
	 <li>Independent Application</li>
	 <i>enable the ability to instantiate multiple app canvases on a single page</i>
	 <li>Multi-Channel Audio</li>
	 <i>IE Mobile is my main testing device, and audio is a hassle, and so this is on hold</i>
	 <li>Cookies</li>
	 <i>plans to incorporate cookies is not prioritized and I am currently using [Cookies.js by Scott Hamper](https://github.com/ScottHamper/Cookies)</i>
	 </ul>

## getting started

<b>B</b>efore you start developing your App in SpiceJS, it is recommended to have some knowledge of Object.create and Prototype javascript notation.

<b>S</b>piceJS, designed heavily on the Canvas API, has support across most popular devices and browsers. Any device which supports [```Request Animation Frame```](https://developer.mozilla.org/en/docs/Web/API/window.requestAnimationFrame) and [```Hardware Acceleration```](http://en.wikipedia.org/wiki/Hardware_acceleration)  will have a nice time.

<b>T</b>he framework is designed on providing you the most efficient way to develop a cross platform, multi touch, and multi resolution application with JavaScript.

<b>P</b>rior to recent times developers had to rely on functions such as setTimeout(), however, up to date browsers can support a new feature called requestAnimationFrame() which can provide a high calculation of Frame Rate. This allows developers to create extensive programs, and fully animated games.



### essential functions
##### Setup

After your ```<body> </body>``` you want to add your code into a script tag:

 ```<script rel="prefetch" name="main" type="text/javascript" defer></script> ```

Note: *You may load an external JavaScript file with the same code.*

##### App.OnLoad

For you to specify options before the application begins.
Every app must include an *App.OnLoad* override function.

```bash
App.OnLoad = function(){

	//App.Init(String::title, Int::width, Int::height)
	App.Init("Title", 1920, 480);

};
```

##### App.main

The application won't noticeably do anything aside from positioning and scaling the canvas at this point, and so what you want to do here is simply add your game logic in the correct place, and once the application starts up, it will replace its default loop with yours.

This is what an empty *App.main* override function looks like.

You must have these functions in order for the application loop to function properly.

```bash
App.main = {

 init:function(){},

 update:function(){},

 draw:function(){}


};
```

You can access the current state of the loop by calling ```App.client.update.state.current```, or ```App.getCurrent()```. This returns the current state object.

Note: *state shifting is implemented but disabled, support for multiple rooms/states to come*

##### App.options

Normally you find your options object inside SpiceJS, however during App.OnLoad, you can override settings, and make underlying changes to SpiceJS before the application starts.

You can do this by calling ```App.options = options```, ```App.options.* = *```, or ```App.setOptions(options) [soon]```.

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

Note: *Stylesheet loads block script execution, so if you have a ```<script>``` after a ```<link rel="stylesheet" ...>```, the page will not finish parsing - and DOMContentLoaded will not fire - until the stylesheet is loaded.*

### further readings...
#####[Documentation](http://js.ryanspice.com/)
You can read the [Documentation](http://js.ryanspice.com/) and more on SpiceJS and how to create SpiceJS apps [here](http://js.ryanspice.com/).

## examples

### particle

[view](https://github.com/ryanspice/spice.js/tree/master/examples/particles)

[live preview](https://ryanspice.com/rain/)

[download](https://github.com/ryanspice/spice.js/blob/master/examples/particles/particles.7z)

This example provides a glimpse at creating particle factories to use with SpiceJS. In combination with Object.create methods you can create fast and flexible particle systems on the fly.

teaching points: <i>transparent background, vector line drawing</i>

[```Vector Math```](http://higherorderfun.com/blog/2012/06/03/math-for-game-programmers-05-vector-cheat-sheet/), [```Object.create()```](http://www.htmlgoodies.com/beyond/javascript/object.create-the-new-way-to-create-objects-in-javascript.html), [```Object Creation Patterns```](http://www.htmlgoodies.com/html5/javascript/some-useful-javascript-object-creation-patterns.html#fbid=T4GDU9yVQOc)

### animations

[view](https://github.com/ryanspice/spice.js/tree/master/examples/animation)

[live preview](http://js.ryanspice.com/background/trees/)

[download](https://github.com/ryanspice/spice.js/blob/master/examples/animation/animation.7z)

This example uses a number of images to compile an animation. I've included two versions: One which includes [Blitting] images to create the animations, and another for animations without Blitting. (Warning: non-blitting techniques are not recommended for use in games or applications with a number of animations)

teaching points: <i>sprites, blitting, animations</i>

[```LayersToSpriteSheet.js (script for photoshop)```](https://ryanspice.com/js/LayersToSpriteSheet.js)

### parallax

[view](https://github.com/ryanspice/spice.js/tree/master/examples/parallax)

[live preview](http://js.ryanspice.com/background/)

[download](https://github.com/ryanspice/spice.js/blob/master/examples/parallax/parallax.7z)

A small example previewing what it's like to use multiple backgrounds on a parallaxing path.

teaching points: <i>external files, loading screen, parallaxing</i>

[```Art by Steve Mclean```](https://www.linkedin.com/pub/steve-mclean/76/b5b/25a)

### isometric

[view](https://github.com/ryanspice/spice.js/tree/master/examples/isometric)

[live preview](https://ryanspice.com/isometric)

[download](https://github.com/ryanspice/spice.js/blob/master/examples/isometric/isometric.7z)

Using multiple arrays to store map background and object data. This example previews scaling and panning an isometric randomly generated map.

teaching points: <i>sprites, blitting, viewport, drawing and working with isometric data</i>

[```JavaScript Comma Operator```](http://javascriptweblog.wordpress.com/2011/04/04/the-javascript-comma-operator/?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+JavascriptJavascript+%28JavaScript%2C+JavaScript%29), [```Object.create()```](http://www.htmlgoodies.com/beyond/javascript/object.create-the-new-way-to-create-objects-in-javascript.html), [```Object Creation Patterns```](http://www.htmlgoodies.com/html5/javascript/some-useful-javascript-object-creation-patterns.html#fbid=T4GDU9yVQOc)

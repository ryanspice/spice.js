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

### further readings...
#####[Documentation](http://js.ryanspice.com/)
You can read the [Documentation](http://js.ryanspice.com/) and more on SpiceJS and how to create SpiceJS apps [here](http://js.ryanspice.com/).

## examples

### particle

[view](https://github.com/ryanspice/spice.js/tree/master/0.6.71.15.08.01/examples/particles)

[live preview](https://ryanspice.com/rain/)

[download](https://github.com/ryanspice/spice.js/blob/master/0.6.71.15.08.01/examples/particles/particles.7z)

This example provides a glimpse at creating particle factories to use with SpiceJS. In combination with Object.create methods you can create fast and flexible particle systems on the fly.

teaching points: <i>transparent background, vector line drawing</i>

[```Vector Math```](http://higherorderfun.com/blog/2012/06/03/math-for-game-programmers-05-vector-cheat-sheet/), [```Object.create()```](http://www.htmlgoodies.com/beyond/javascript/object.create-the-new-way-to-create-objects-in-javascript.html), [```Object Creation Patterns```](http://www.htmlgoodies.com/html5/javascript/some-useful-javascript-object-creation-patterns.html#fbid=T4GDU9yVQOc)

### animations

[view](https://github.com/ryanspice/spice.js/tree/master/0.6.71.15.08.01/examples/animation)

[live preview](http://js.ryanspice.com/background/trees/)

[download](https://github.com/ryanspice/spice.js/blob/master/0.6.71.15.08.01/examples/animation/animation.7z)

This example uses a number of images to compile an animation. I've included two versions: One which includes [Blitting] images to create the animations, and another for animations without Blitting. (Warning: non-blitting techniques are not recommended for use in games or applications with a number of animations)

teaching points: <i>sprites, blitting, animations</i>

[```LayersToSpriteSheet.js (script for photoshop)```](https://ryanspice.com/js/LayersToSpriteSheet.js)

### parallax

[view](https://github.com/ryanspice/spice.js/tree/master/0.6.71.15.08.01/examples/parallax)

[live preview](http://js.ryanspice.com/background/)

[download](https://github.com/ryanspice/spice.js/blob/master/0.6.71.15.08.01/examples/parallax/parallax.7z)

A small example previewing what it's like to use multiple backgrounds on a parallaxing path.

teaching points: <i>external files, loading screen, parallaxing</i>

[```Art by Steve Mclean```](https://www.linkedin.com/pub/steve-mclean/76/b5b/25a)

### isometric

[view](https://github.com/ryanspice/spice.js/tree/master/0.6.71.15.08.01/examples/isometric)

[live preview](https://ryanspice.com/isometric)

[download](https://github.com/ryanspice/spice.js/blob/master/0.6.71.15.08.01/examples/isometric/isometric.7z)

Using multiple arrays to store map background and object data. This example previews scaling and panning an isometric randomly generated map.

teaching points: <i>sprites, blitting, viewport, drawing and working with isometric data</i>

[```JavaScript Comma Operator```](http://javascriptweblog.wordpress.com/2011/04/04/the-javascript-comma-operator/?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+JavascriptJavascript+%28JavaScript%2C+JavaScript%29), [```Object.create()```](http://www.htmlgoodies.com/beyond/javascript/object.create-the-new-way-to-create-objects-in-javascript.html), [```Object Creation Patterns```](http://www.htmlgoodies.com/html5/javascript/some-useful-javascript-object-creation-patterns.html#fbid=T4GDU9yVQOc)

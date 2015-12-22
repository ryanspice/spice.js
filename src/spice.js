/*	SpiceJS by Ryan Spice	*/

const Windows = window.Windows =  (typeof Windows=='undefined'?window:Windows);

import _controller from './modules/controller.js'
import _test from './modules/test.js'

window.test = _test;

export default SpiceJS = new _controller();

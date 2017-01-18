
import Vector from '../core/math/vector';

import {_SJSClass as SJSClass} from '../core/sjs';

import inputlistener from './inputlistener.js';

import inputkeycontroller from './inputkeycontroller.js';

import inputscrollcontroller from './inputscrollcontroller.js';

/**
* Stores input data
* @access private
* @module
*
*/

export default class inputcontroller extends SJSClass {

        static _x = 0;
        static _y = 0;
        static _last = new Vector(0,0);
        static _pos = new Vector(0,0);
        static _dist = new Vector(0,0);
        static _end = new Vector(0,0);
        static _start = new Vector(0,0);
        static _duration = 0;
        static _pressed = false;
        static _released = false;
        static _Listener = inputlistener;
        static _keyController = new inputkeycontroller();
        static _scrollController = inputscrollcontroller;

        static _pointerup(evt){



            let input = evt.target.app.input;



            let x = evt.x || evt.clientX || evt.pageX;

            let y = evt.y || evt.clientY || evt.pageY;

            input.last = input.end = new Vector(x,y);

            input.pressed = false;

            input.released = true;

            return true;
        }

        static _pointermove(evt){

            let input = evt.target.app.input;
            let x = Number(evt.x || evt.clientX || evt.pageX);
            let y = Number(evt.y || evt.clientY || evt.pageY);

            //var mouse_last = this.mouse_last;

            input.last = input.position = new Vector(x,y);

            if (input.pressed) {

                let dx = (input.x-input.start.x)*evt.target.app.scale;
                let dy = (input.y-input.start.y)*evt.target.app.scale;
                input.dist = new Vector(dx.toFixedNumber(2), dy.toFixedNumber(2));

            }

            if (input.dist.x>0)
                if (this.mouse_last*0.99>input.dist.x)
                    input.start.x = input.x, input.dist.x = 0;

            if (input.dist.x<0)
                if (this.mouse_last*0.99<input.dist.x)
                    input.start.x = input.x, input.dist.x = 0;

            this.mouse_last =  input.dist.x;

        }

        static _pointerdown(evt){

            let input = evt.target.app.input;

            let x = Number(evt.x || evt.clientX || evt.pageX);

            let y = Number(evt.y || evt.clientY || evt.pageY);
            input.start = new Vector(x,y);

            input.pressed = true;

            input.touch = true;

            input.touched.count++;

            input.touched.downlist.push(input.position);

            input.dist = new Vector(0,0);

        }

        pointerup(evt){

            if (typeof evt === 'undefined')
                return;
            if (typeof evt.target.app === 'undefined')
                return;

            let target = evt.target.app.input.constructor;

            target._pointerup(evt);

        }

        pointermove(evt){

            if (typeof evt === 'undefined')
                return;
            if (typeof evt.target.app === 'undefined')
                return;

            let target = evt.target.app.input.constructor;

            target._pointermove(evt);

        }

        pointerdown(evt){

            if (typeof evt === 'undefined')
                return;
            if (typeof evt.target.app === 'undefined')
                return;

            let target = evt.target.app.input.constructor;

            target._pointerdown(evt);

        }

        get x() {

            return this.constructor._x;

        }

        set x(value) {

            this.constructor._x = value;

        }

        get y() {

            return this.constructor._y;

        }

        set y(value) {

            this.constructor._y = value;

        }

        get last() {

            return this.constructor._last;

        }

        set last(value) {

            this.constructor._last = value;

        }

        get pos() {

            return this.constructor._pos;

        }

        set pos(value) {

            this.constructor._pos = value;

        }

        get dist() {

            return this.constructor._dist;

        }

        set dist(value) {

            this.constructor._dist = value;

        }

        get end() {

            return this.constructor._end;

        }

        set end(value) {

            this.constructor._end = value;

        }

        get start() {

            return this.constructor._start;

        }

        set start(value) {

            this.constructor._start = value;

        }

        get duration() {

            return this.constructor._duration;

        }

        set duration(value) {

            this.constructor._duration = value;

        }

        get angle() {

            return 57.2957795 * Math.atan2(this.end.y-this.start.y,this.end.x-this.start.x);

        }

        get angleDelta() {

            var delta = (this.dist.x*this.dist.x+this.dist.y*this.dist.y)/2;
            return delta;

        }

        get position() {

            return new Vector(this.x,this.y);

        }

        set position(value) {

            this.x = value.x;
            this.y = value.y;

        }

        get released() {

            return this.constructor._released;

        }

        set released(value) {

            return this.constructor._released = value;

        }

        get pressed() {

            return this.constructor._pressed;

        }

        set pressed(value) {

            return this.constructor._pressed = value;

        }

        get keyController() {

            return this.constructor._keyController;

        }

        set keyController(value) {

            return this.constructor._keyController = value;

        }

        get scrollController() {

            return this.constructor._scrollController;

        }

        set scrollController(value) {

            return this.constructor._scrollController = value;

        }

        get horizontal() {

                var wasd = this.app.input.keyController.keyboardCheck("a") - this.app.input.keyController.keyboardCheck("d");
                var arrows = this.app.input.keyController.keyboardCheck("leftarrow") - this.app.input.keyController.keyboardCheck("rightarrow");
                var mouse = -this.pressed * this.app.input.dist.x;
                var touch = -this.pressed * this.app.input.dist.x; //was touched

                var keyboard = this.app.client.Math.Clamp(wasd || arrows, -1, 1);
                var touched = this.app.client.Math.Clamp(mouse || touch, -1, 1);

                return { keyboard: keyboard, touch: touched };
            }

        get vertical() {

                var wasd = this.app.input.keyController.keyboardCheck("s") - this.app.input.keyController.keyboardCheck("w");
                var arrows = this.app.input.keyController.keyboardCheck("downarrow") - this.app.input.keyController.keyboardCheck("uparrow");
                var mouse = this.pressed * this.app.input.dist.y;
                var touch = this.pressed * this.app.input.dist.y; //was touched

                var keyboard = this.app.client.Math.Clamp(wasd || arrows, -1, 1);
                var touched = this.app.client.Math.Clamp(mouse || touch, -1, 1);

                return { keyboard: keyboard, touch: touched };
            }



}

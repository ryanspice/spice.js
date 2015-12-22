

class VectorController {

    multiply(a,b){

        this.x *= a;
        this.y *= b;

        return this;

    }

    offset(a,b){

        this.x += a;
        this.y += b;

        return this;

    }

    segments_intersect(a1x, a1y, a2x, a2y, b1x, b1y, b2x, b2y) {

		var max_ax, min_ax, max_ay, min_ay, max_bx, min_bx, max_by, min_by;

		// Long-hand code since this is a performance hotspot and this type of
		// code minimises the number of conditional tests necessary.
		if (a1x < a2x)
		{
			min_ax = a1x;
			max_ax = a2x;
		}
		else
		{
			min_ax = a2x;
			max_ax = a1x;
		}

		if (b1x < b2x)
		{
			min_bx = b1x;
			max_bx = b2x;
		}
		else
		{
			min_bx = b2x;
			max_bx = b1x;
		}

		if (max_ax < min_bx || min_ax > max_bx)
			return false;

		if (a1y < a2y)
		{
			min_ay = a1y;
			max_ay = a2y;
		}
		else
		{
			min_ay = a2y;
			max_ay = a1y;
		}

		if (b1y < b2y)
		{
			min_by = b1y;
			max_by = b2y;
		}
		else
		{
			min_by = b2y;
			max_by = b1y;
		}

		if (max_ay < min_by || min_ay > max_by)
			return false;

		var dpx = b1x - a1x + b2x - a2x;
		var dpy = b1y - a1y + b2y - a2y;
		var qax = a2x - a1x;
		var qay = a2y - a1y;
		var qbx = b2x - b1x;
		var qby = b2y - b1y;

		var d = cr.abs(qay * qbx - qby * qax);
		var la = qbx * dpy - qby * dpx;

		if (cr.abs(la) > d)
			return false;

		var lb = qax * dpy - qay * dpx;

		return cr.abs(lb) <= d;
	};


}

export default class Vector extends VectorController {

    constructor(x,y){

        super();
        this.x = x || this.constructor._x;
        this.y = y || this.constructor._y;

    }

    static position = {};
    static _x = 0;
    static _y = 0;

    static set _x(value) {

        this.position[0] = value;

    }

    static get _x() {

        return this.position[0];

    }

    static set _y(value) {

        this.position[1] = value;

    }

    static get _y() {

        return this.position[1];

    }

    set position(value) {

        this._x = value.x;
        this._y = value.y;

    }

    get position() {

        return new Vector(this._x,this._y);

    }

    set x(value) {

        this._x = value;

    }

    get x() {

        return this._x;

    }

    get y() {

        return this._y;

    }

    set y(value) {

        this._y = value;

    }

}

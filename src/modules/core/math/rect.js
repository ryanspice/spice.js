/** @ignore
*/
export default class Rect {

    static _top = 0;
    static _left = 0;
    static _right = 0;
    static _bottom = 0;

    static get top() {

        this._top;

    }

    static set top(value) {

        return this._top = value;

    }

    static get left() {

        this._left;

    }

    static set left(value) {

        return this._left = value;

    }

    static get right() {

        this._right;

    }

    static set right(value) {

        return this._right = value;

    }

    static get bottom() {

        this._bottom;

    }

    static set bottom(value) {

        return this._bottom = value;

    }

	constructor(left, top, width, height){

        let right = left + width;
        let bottom = top + height;

		this.set(left, top, right, bottom);

	}

	set(left, top, right, bottom)  {

		this.left = left;
		this.top = top;
		this.right = right;
		this.bottom = bottom;
	}

	copy(r)    {

		this.left = r.left;
		this.top = r.top;
		this.right = r.right;
		this.bottom = r.bottom;
	}

	width()    {

		return this.right - this.left;
	}

	height()   {

		return this.bottom - this.top;
	}

	offset(px, py) {

		this.left += px;
		this.top += py;
		this.right += px;
		this.bottom += py;

		return this;
	}

	normalize()    {

		var temp = 0;

		if (this.left > this.right)
		{
			temp = this.left;
			this.left = this.right;
			this.right = temp;
		}

		if (this.top > this.bottom)
		{
			temp = this.top;
			this.top = this.bottom;
			this.bottom = temp;
		}

	}

	intersects_rect(rc)    {

		return !(rc.right < this.left || rc.bottom < this.top || rc.left > this.right || rc.top > this.bottom);
	}

	intersects_rect_off(rc, ox, oy)    {

		return !(rc.right + ox < this.left || rc.bottom + oy < this.top || rc.left + ox > this.right || rc.top + oy > this.bottom);
	}

	contains_pt(x, y)  {

		return (x >= this.left && x <= this.right) && (y >= this.top && y <= this.bottom);
	}

	equals(r)  {

		return this.left === r.left && this.top === r.top && this.right === r.right && this.bottom === r.bottom;
	}

}

window.Rect = Rect;

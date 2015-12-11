
export default class Vector {

    constructor(x,y){

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

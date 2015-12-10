
export default class Vector {

    static _x = 0;
    static _y = 0;

    constructor(x,y){

        this.x = x;
        this.y = y;

    }

    set x(value) {

        this.constructor._x = value;

    }

    get x() {

        return this.constructor._x;

    }

    get y() {

        return this.constructor._y;

    }

    set y(value) {

        this.constructor._y = value;

    }

}

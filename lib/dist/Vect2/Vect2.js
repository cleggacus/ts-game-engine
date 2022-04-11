"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vect2 {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    get x() {
        return this._x;
    }
    set x(x) {
        this._x = x;
    }
    get y() {
        return this._y;
    }
    set y(y) {
        this._y = y;
    }
    static add(v1, v2) {
        return new Vect2(v1._x + v2._x, v1._y + v2._y);
    }
    static sub(v1, v2) {
        return new Vect2(v1._x - v2._x, v1._y - v2._y);
    }
    static mult(v1, v2) {
        return new Vect2(v1._x * v2._x, v1._y * v2._y);
    }
    static div(v1, v2) {
        return new Vect2(v1._x / v2._x, v1._y / v2._y);
    }
    add(v) {
        this._x += v._x;
        this._y += v._y;
    }
    sub(v) {
        this._x -= v._x;
        this._y -= v._y;
    }
    mult(v) {
        this._x *= v._x;
        this._y *= v._y;
    }
    div(v) {
        this._x /= v._x;
        this._y /= v._y;
    }
}
exports.default = Vect2;
//# sourceMappingURL=Vect2.js.map
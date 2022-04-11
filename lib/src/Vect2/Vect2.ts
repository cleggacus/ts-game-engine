class Vect2 {
  private _x: number;
  private _y: number;

  public constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  public get x(): number {
    return this._x;
  }

  public set x(x: number) {
    this._x = x;
  }

  public get y(): number {
    return this._y;
  }

  public set y(y: number) {
    this._y = y;
  }

  public static add(v1: Vect2, v2: Vect2): Vect2 {
    return new Vect2(v1._x + v2._x, v1._y + v2._y);
  }

  public static sub(v1: Vect2, v2: Vect2): Vect2 {
    return new Vect2(v1._x - v2._x, v1._y - v2._y);
  }

  public static mult(v1: Vect2, v2: Vect2): Vect2 {
    return new Vect2(v1._x * v2._x, v1._y * v2._y);
  }

  public static div(v1: Vect2, v2: Vect2): Vect2 {
    return new Vect2(v1._x / v2._x, v1._y / v2._y);
  }

  public add(v: Vect2): void {
    this._x += v._x;
    this._y += v._y;
  }

  public sub(v: Vect2): void {
    this._x -= v._x;
    this._y -= v._y;
  }

  public mult(v: Vect2): void {
    this._x *= v._x;
    this._y *= v._y;
  }

  public div(v: Vect2): void {
    this._x /= v._x;
    this._y /= v._y;
  }
}

export default Vect2;

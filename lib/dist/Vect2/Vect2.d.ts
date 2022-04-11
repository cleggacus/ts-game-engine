declare class Vect2 {
    private _x;
    private _y;
    constructor(x: number, y: number);
    get x(): number;
    set x(x: number);
    get y(): number;
    set y(y: number);
    static add(v1: Vect2, v2: Vect2): Vect2;
    static sub(v1: Vect2, v2: Vect2): Vect2;
    static mult(v1: Vect2, v2: Vect2): Vect2;
    static div(v1: Vect2, v2: Vect2): Vect2;
    add(v: Vect2): void;
    sub(v: Vect2): void;
    mult(v: Vect2): void;
    div(v: Vect2): void;
}
export default Vect2;

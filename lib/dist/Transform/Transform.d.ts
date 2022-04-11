import Vect2 from "../Vect2";
declare class Transform {
    private _position;
    private _scale;
    constructor(position: Vect2, scale: Vect2);
    set position(position: Vect2);
    get position(): Vect2;
    set scale(scale: Vect2);
    get scale(): Vect2;
}
export default Transform;

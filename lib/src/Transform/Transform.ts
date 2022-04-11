import Vect2 from "../Vect2";

class Transform {
  private _position: Vect2;
  private _scale: Vect2;

  public constructor(position: Vect2, scale: Vect2) {
    this._position = position;
    this._scale = scale; 
  }

  public set position(position: Vect2) {
    this._position = position;
  }

  public get position(): Vect2 {
    return this._position;
  }

  public set scale(scale: Vect2) {
    this._scale = scale;
  }

  public get scale(): Vect2 {
    return this._scale;
  }
}

export default Transform;

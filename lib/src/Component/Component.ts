import GameObject from "../GameObject";

abstract class Component {
  private _gameObject?: GameObject;

  public constructor() {
    this._gameObject = undefined;
  }

  public get gameObject(): GameObject | undefined {
    return this._gameObject;
  }

  public set gameObject(gameObject: GameObject | undefined) {
    this._gameObject = gameObject;
  }

  public abstract update(delta: number): void;
  public abstract draw(ctx: CanvasRenderingContext2D): void;
}

export default Component;

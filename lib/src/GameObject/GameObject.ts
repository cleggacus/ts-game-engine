import Component from "../Component";
import Transform from "../Transform";
import Vect2 from "../Vect2";

class GameObject {
  private _transform: Transform;
  private _components: Component[];

  public constructor() {
    this._components = [];
    this._transform = new Transform(new Vect2(0, 0), new Vect2(1, 1))
  }

  public get transform(): Transform {
    return this._transform;
  }

  public set transform(transform: Transform) {
    this._transform = transform;
  }

  public addComponent(component: Component) {
    component.gameObject = this;
    this._components.push(component);
  }

  public update(delta: number): void {
    for(const component of this._components)
      component.update(delta);
  }

  public draw(ctx: CanvasRenderingContext2D): void {
    for(const component of this._components)
      component.draw(ctx);
  }
}

export default GameObject;

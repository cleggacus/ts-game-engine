import Component from "../Component";
import Transform from "../Transform";
declare class GameObject {
    private _transform;
    private _components;
    constructor();
    get transform(): Transform;
    set transform(transform: Transform);
    addComponent(component: Component): void;
    update(delta: number): void;
    draw(ctx: CanvasRenderingContext2D): void;
}
export default GameObject;

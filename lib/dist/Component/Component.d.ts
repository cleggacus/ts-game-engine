import GameObject from "../GameObject";
declare abstract class Component {
    private _gameObject?;
    constructor();
    get gameObject(): GameObject | undefined;
    set gameObject(gameObject: GameObject | undefined);
    abstract update(delta: number): void;
    abstract draw(ctx: CanvasRenderingContext2D): void;
}
export default Component;

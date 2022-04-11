import ScreenSize from "./ScreenSize";
declare class Screen {
    private _bufferCavas;
    private _bufferCtx;
    private _canvas;
    private _ctx;
    constructor(canvas: HTMLCanvasElement, screenSize: ScreenSize);
    clear(): void;
    get width(): number;
    get height(): number;
    get dimensions(): [number, number];
    get bufferCtx(): CanvasRenderingContext2D;
    render(): void;
}
export default Screen;

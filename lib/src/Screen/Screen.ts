import ScreenSize, { resizeCanvas } from "./ScreenSize";

class Screen {
  private _bufferCavas: HTMLCanvasElement;
  private _bufferCtx: CanvasRenderingContext2D;

  private _canvas: HTMLCanvasElement;
  private _ctx: CanvasRenderingContext2D;

  public constructor(canvas: HTMLCanvasElement, screenSize: ScreenSize) {
    this._bufferCavas = document.createElement("canvas");
    this._canvas = canvas;

    resizeCanvas(this._bufferCavas, screenSize);
    resizeCanvas(this._canvas, screenSize);

    const ctx = this._canvas.getContext("2d");
    const bufferCtx = this._bufferCavas.getContext("2d");

    if(!ctx || !bufferCtx)
      throw new Error("Could not get canvas context");

    this._ctx = ctx;
    this._bufferCtx = bufferCtx;
  }

  public clear(): void {
    this._bufferCtx.fillStyle = "#ffffff"
    this._bufferCtx.fillRect(0, 0, this._bufferCavas.width, this._bufferCavas.height);
  }

  public get width(): number {
    return this._bufferCavas.width;
  }

  public get height(): number {
    return this._bufferCavas.height;
  }

  public get dimensions(): [number, number] {
    return [this._bufferCavas.width, this._bufferCavas.height];
  }

  public get bufferCtx(): CanvasRenderingContext2D {
    return this._bufferCtx;
  }

  public render(): void {
    this._ctx.drawImage(this._bufferCavas, 0, 0);
  }
}

export default Screen;
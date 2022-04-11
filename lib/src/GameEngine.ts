import GameObject from "./GameObject/GameObject";
import Keyboard from "./Keyboard";
import Screen from "./Screen/Screen";
import ScreenSize, { IndirectScreenSize } from "./Screen/ScreenSize";

abstract class GameEngine {
  private _keyboard: Keyboard;
  private _screen: Screen;
  private _gameObjects: GameObject[];
  private _lastTime: number;

  public constructor(canvas: HTMLCanvasElement, screenSize?: ScreenSize) {
    this._keyboard = new Keyboard();
    this._screen = new Screen(canvas, screenSize || IndirectScreenSize.Default);
    this._gameObjects = [];
    this._lastTime = 0;
  }

  public abstract onStart(): void;
  public abstract onUpdate(delta: number): void;

  public get keyboard(): Keyboard {
    return this._keyboard;
  }

  public get screen(): Screen {
    return this._screen;
  }

  public setSmoothing(smoothing: ImageSmoothingQuality | 'none') {
    const none = smoothing == 'none';
    this._screen.bufferCtx.imageSmoothingEnabled = !none;
    this._screen.bufferCtx.imageSmoothingQuality = none ? 'low' : smoothing;
  }

  public addGameObject(gameObject: GameObject): void {
    this._gameObjects.push(gameObject);
  }

  public start(): void {
    this._lastTime = Date.now();
    this.onStart();
    this.cycle();
  }

  private update(delta: number): void {
    for(const gameObject of this._gameObjects)
      gameObject.update(delta);

    this.onUpdate(delta);
  }

  private draw(): void {
    for(const gameObject of this._gameObjects)
      gameObject.draw(this._screen.bufferCtx);
  }

  private cycle(): void {
    const now = Date.now();
    const delta = now - this._lastTime;
    this._lastTime = now;

    this._screen.clear();
    this.update(delta);
    this.draw();
    this._screen.render();

    requestAnimationFrame(this.cycle.bind(this));
  }
}

export default GameEngine;
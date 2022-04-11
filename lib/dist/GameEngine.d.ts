import GameObject from "./GameObject/GameObject";
import Keyboard from "./Keyboard";
import Screen from "./Screen/Screen";
import ScreenSize from "./Screen/ScreenSize";
declare abstract class GameEngine {
    private _keyboard;
    private _screen;
    private _gameObjects;
    private _lastTime;
    constructor(canvas: HTMLCanvasElement, screenSize?: ScreenSize);
    abstract onStart(): void;
    abstract onUpdate(delta: number): void;
    get keyboard(): Keyboard;
    get screen(): Screen;
    setSmoothing(smoothing: ImageSmoothingQuality | 'none'): void;
    addGameObject(gameObject: GameObject): void;
    start(): void;
    private update;
    private draw;
    private cycle;
}
export default GameEngine;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Keyboard_1 = __importDefault(require("./Keyboard"));
const Screen_1 = __importDefault(require("./Screen/Screen"));
const ScreenSize_1 = require("./Screen/ScreenSize");
class GameEngine {
    constructor(canvas, screenSize) {
        this._keyboard = new Keyboard_1.default();
        this._screen = new Screen_1.default(canvas, screenSize || ScreenSize_1.IndirectScreenSize.Default);
        this._gameObjects = [];
        this._lastTime = 0;
    }
    get keyboard() {
        return this._keyboard;
    }
    get screen() {
        return this._screen;
    }
    setSmoothing(smoothing) {
        const none = smoothing == 'none';
        this._screen.bufferCtx.imageSmoothingEnabled = !none;
        this._screen.bufferCtx.imageSmoothingQuality = none ? 'low' : smoothing;
    }
    addGameObject(gameObject) {
        this._gameObjects.push(gameObject);
    }
    start() {
        this._lastTime = Date.now();
        this.onStart();
        this.cycle();
    }
    update(delta) {
        for (const gameObject of this._gameObjects)
            gameObject.update(delta);
        this.onUpdate(delta);
    }
    draw() {
        for (const gameObject of this._gameObjects)
            gameObject.draw(this._screen.bufferCtx);
    }
    cycle() {
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
exports.default = GameEngine;
//# sourceMappingURL=GameEngine.js.map
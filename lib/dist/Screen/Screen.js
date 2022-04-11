"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ScreenSize_1 = require("./ScreenSize");
class Screen {
    constructor(canvas, screenSize) {
        this._bufferCavas = document.createElement("canvas");
        this._canvas = canvas;
        (0, ScreenSize_1.resizeCanvas)(this._bufferCavas, screenSize);
        (0, ScreenSize_1.resizeCanvas)(this._canvas, screenSize);
        const ctx = this._canvas.getContext("2d");
        const bufferCtx = this._bufferCavas.getContext("2d");
        if (!ctx || !bufferCtx)
            throw new Error("Could not get canvas context");
        this._ctx = ctx;
        this._bufferCtx = bufferCtx;
    }
    clear() {
        this._bufferCtx.fillStyle = "#ffffff";
        this._bufferCtx.fillRect(0, 0, this._bufferCavas.width, this._bufferCavas.height);
    }
    get width() {
        return this._bufferCavas.width;
    }
    get height() {
        return this._bufferCavas.height;
    }
    get dimensions() {
        return [this._bufferCavas.width, this._bufferCavas.height];
    }
    get bufferCtx() {
        return this._bufferCtx;
    }
    render() {
        this._ctx.drawImage(this._bufferCavas, 0, 0);
    }
}
exports.default = Screen;
//# sourceMappingURL=Screen.js.map
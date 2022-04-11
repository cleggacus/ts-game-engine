"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Keyboard {
    constructor() {
        this._keysDown = new Map();
        this.init();
    }
    init() {
        addEventListener("keydown", e => {
            this._keysDown.set(e.key, true);
        });
        addEventListener("keyup", e => {
            this._keysDown.set(e.key, false);
        });
    }
    isKeyDown(key) {
        return !!this._keysDown.get(key);
    }
}
exports.default = Keyboard;
//# sourceMappingURL=Keyboard.js.map
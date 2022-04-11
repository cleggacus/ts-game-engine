"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Transform {
    constructor(position, scale) {
        this._position = position;
        this._scale = scale;
    }
    set position(position) {
        this._position = position;
    }
    get position() {
        return this._position;
    }
    set scale(scale) {
        this._scale = scale;
    }
    get scale() {
        return this._scale;
    }
}
exports.default = Transform;
//# sourceMappingURL=Transform.js.map
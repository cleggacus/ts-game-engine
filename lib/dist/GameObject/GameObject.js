"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Transform_1 = __importDefault(require("../Transform"));
const Vect2_1 = __importDefault(require("../Vect2"));
class GameObject {
    constructor() {
        this._components = [];
        this._transform = new Transform_1.default(new Vect2_1.default(0, 0), new Vect2_1.default(1, 1));
    }
    get transform() {
        return this._transform;
    }
    set transform(transform) {
        this._transform = transform;
    }
    addComponent(component) {
        component.gameObject = this;
        this._components.push(component);
    }
    update(delta) {
        for (const component of this._components)
            component.update(delta);
    }
    draw(ctx) {
        for (const component of this._components)
            component.draw(ctx);
    }
}
exports.default = GameObject;
//# sourceMappingURL=GameObject.js.map
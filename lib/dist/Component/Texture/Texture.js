"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = __importDefault(require("../Component"));
const Vect2_1 = __importDefault(require("../../Vect2"));
class Texture extends Component_1.default {
    constructor(size) {
        super();
        this._image = new Image();
        this._size = size;
        this._sourcePosition = new Vect2_1.default(0, 0);
    }
    get sourcePosition() {
        return this._sourcePosition;
    }
    set sourcePosition(sourcePositiion) {
        this._sourcePosition = Vect2_1.default.mult(sourcePositiion, this._size);
    }
    get size() {
        return this._size;
    }
    set size(size) {
        this._size = size;
    }
    get image() {
        return this._image.src;
    }
    set image(image) {
        this._image.src = image;
    }
    imageLoaded() {
        return (this._image.width != 0 &&
            this._image.height != 0 &&
            this._image.complete);
    }
    update(delta) { }
    draw(ctx) {
        if (this.gameObject && this.imageLoaded()) {
            const position = this.gameObject.transform.position;
            const scale = this.gameObject.transform.scale;
            console.log(scale.x, scale.y, this._size.x, this._size.y);
            ctx.drawImage(this._image, this._sourcePosition.x, this._sourcePosition.y, this._size.x, this._size.y, position.x, position.y, this._size.x * scale.x, this._size.y * scale.y);
        }
    }
}
exports.default = Texture;
//# sourceMappingURL=Texture.js.map
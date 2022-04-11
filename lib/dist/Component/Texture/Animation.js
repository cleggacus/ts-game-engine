"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAnimationFrames = void 0;
const Vect2_1 = __importDefault(require("../../Vect2"));
const Texture_1 = __importDefault(require("./Texture"));
const getAnimationFrames = (frames) => {
    const map = new Map();
    for (const frame of frames) {
        const framesVect2 = frame.frames.map(pos => {
            const [x, y] = pos;
            return new Vect2_1.default(x, y);
        });
        map.set(frame.name, framesVect2);
    }
    return map;
};
exports.getAnimationFrames = getAnimationFrames;
class Animation extends Texture_1.default {
    constructor(size, animations) {
        super(size);
        this._animations = new Map();
        this._timeElapsed = 0;
        this._currentFrame = 0;
        this._animations = animations;
        [this._currentAnimation] = this._animations.keys();
        this._frameTime = 100;
        this.sourcePosition = this.currentFramePosition;
    }
    get currentAnimationFrames() {
        return this._animations.get(this._currentAnimation) || [new Vect2_1.default(0, 0)];
    }
    get currentFramePosition() {
        return this.currentAnimationFrames[this._currentFrame];
    }
    set currentAnimation(animation) {
        if (!this._animations.get(animation)) {
            [this._currentAnimation] = this._animations.keys();
        }
        else {
            this._currentAnimation = animation;
        }
    }
    set frameTime(frameTime) {
        this._frameTime = frameTime;
    }
    get frameTime() {
        return this._frameTime;
    }
    set currentFrame(currentFrame) {
        this.currentFrame = currentFrame;
    }
    get currentFrame() {
        return this._currentFrame;
    }
    nextFrame() {
        this._currentFrame++;
        if (this._currentFrame >= this.currentAnimationFrames.length)
            this._currentFrame = 0;
        this.sourcePosition = this.currentFramePosition;
    }
    update(delta) {
        this._timeElapsed += delta;
        if (this._timeElapsed >= this._frameTime) {
            this._timeElapsed = 0;
            this.nextFrame();
        }
    }
}
exports.default = Animation;
//# sourceMappingURL=Animation.js.map
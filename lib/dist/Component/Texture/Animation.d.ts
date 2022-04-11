import Vect2 from "../../Vect2";
import Texture from "./Texture";
declare type AnimationFrames = Map<string, Vect2[]>;
declare const getAnimationFrames: (frames: {
    name: string;
    frames: [x: number, y: number][];
}[]) => AnimationFrames;
declare class Animation extends Texture {
    private _timeElapsed;
    private _frameTime;
    private _currentFrame;
    private _currentAnimation;
    private _animations;
    constructor(size: Vect2, animations: AnimationFrames);
    get currentAnimationFrames(): Vect2[];
    get currentFramePosition(): Vect2;
    set currentAnimation(animation: string);
    set frameTime(frameTime: number);
    get frameTime(): number;
    set currentFrame(currentFrame: number);
    get currentFrame(): number;
    nextFrame(): void;
    update(delta: number): void;
}
export default Animation;
export { AnimationFrames, getAnimationFrames };

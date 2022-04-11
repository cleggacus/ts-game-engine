import Vect2 from "../../Vect2";
import Texture from "./Texture";

type AnimationFrames = Map<string, Vect2[]>;

const getAnimationFrames = (frames: {
  name: string,
  frames: [x: number, y: number][]
}[]): AnimationFrames => {
  const map = new Map<string, Vect2[]>();

  for(const frame of frames) {
    const framesVect2 = frame.frames.map(pos => {
      const [x, y] = pos;
      return new Vect2(x, y);
    });

    map.set(frame.name, framesVect2);
  }

  return map;
}

class Animation extends Texture {
  private _timeElapsed: number;
  private _frameTime: number;
  private _currentFrame: number;
  private _currentAnimation: string;
  private _animations: AnimationFrames;

  public constructor(size: Vect2, animations: AnimationFrames) {
    super(size);
    this._animations = new Map()
    this._timeElapsed = 0;
    this._currentFrame = 0;
    this._animations = animations;
    [this._currentAnimation] = this._animations.keys();
    this._frameTime = 100;
    this.sourcePosition = this.currentFramePosition;
  }

  public get currentAnimationFrames(): Vect2[] {
    return this._animations.get(this._currentAnimation) || [new Vect2(0, 0)];
  }

  public get currentFramePosition(): Vect2 {
    return this.currentAnimationFrames[this._currentFrame];
  }

  public set currentAnimation(animation: string) {
    if(!this._animations.get(animation)) {
      [this._currentAnimation] = this._animations.keys();
    } else {
      this._currentAnimation = animation;
    }
  }

  public set frameTime(frameTime: number) {
    this._frameTime = frameTime;
  }

  public get frameTime(): number {
    return this._frameTime;
  }

  public set currentFrame(currentFrame: number) {
    this.currentFrame = currentFrame;
  }

  public get currentFrame(): number {
    return this._currentFrame;
  }

  public nextFrame(): void {
    this._currentFrame++;

    if(this._currentFrame >= this.currentAnimationFrames.length)
      this._currentFrame = 0;

    this.sourcePosition = this.currentFramePosition;
  }

  public update(delta: number): void {
    this._timeElapsed += delta;

    if(this._timeElapsed >= this._frameTime) {
      this._timeElapsed = 0;
      this.nextFrame();
    }
  }
}

export default Animation;

export {
  AnimationFrames,
  getAnimationFrames
}

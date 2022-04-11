import GameEngine, { GameObject, IndirectScreenSize, Animation, Vect2, getAnimationFrames } from "canvas-lib";

const anim = getAnimationFrames([
  {
    name: 'idle',
    frames: [[0, 0], [0, 0], [2, 0], [2, 0]]
  },
  {
    name: 'frontRun',
    frames: [[4, 0], [5, 0], [6, 0], [7, 0], [0, 1]]
  },
  {
    name: 'backRun',
    frames: [[1, 1], [2, 1], [3, 1], [4, 1], [5, 1]]
  },
  {
    name: 'rightRun',
    frames: [[6, 1], [7, 1], [0, 2], [1, 2], [2, 2], [3, 2]]
  },
  {
    name: 'leftRun',
    frames: [[4, 2], [5, 2], [6, 2], [7, 2], [0, 3], [1, 3]]
  },
])

class Game extends GameEngine {
  private texture: Animation;
  public constructor(canvas: HTMLCanvasElement) {
    super(canvas, IndirectScreenSize.NES);

    this.texture = new Animation(new Vect2(42, 42), anim);
    this.texture.frameTime = 70;
    this.texture.image = './assets/character.png';
  }

  public onStart(): void {

    const gameObject = new GameObject();
    gameObject.addComponent(this.texture);

    this.addGameObject(gameObject);
    this.setSmoothing('none');
  }

  public onUpdate(delta: number): void {
    const wDown = this.keyboard.isKeyDown('w');
    const sDown = this.keyboard.isKeyDown('s');
    const aDown = this.keyboard.isKeyDown('a');
    const dDown = this.keyboard.isKeyDown('d');

    const moving = wDown || sDown || aDown || dDown;

    if(wDown) {
      this.texture.currentAnimation = "backRun";
      this.texture.frameTime = 70;
      this.texture.gameObject.transform.position.add(new Vect2(0, -0.05 * delta));
    }
    
    if(sDown) {
      this.texture.currentAnimation = "frontRun";
      this.texture.frameTime = 70;
      this.texture.gameObject.transform.position.add(new Vect2(0, 0.05 * delta));
    }
    
    if(dDown) {
      this.texture.currentAnimation = "rightRun";
      this.texture.frameTime = 100;
      this.texture.gameObject.transform.position.add(new Vect2(0.05 * delta, 0));
    }
    
    if(aDown) {
      this.texture.currentAnimation = "leftRun";
      this.texture.frameTime = 100;
      this.texture.gameObject.transform.position.add(new Vect2(-0.05 * delta, 0));
    }
    
    if(!moving){
      this.texture.currentAnimation = "idle";
    }
  }
}

export default Game;

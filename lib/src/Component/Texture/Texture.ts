import Component from "../Component";
import Vect2 from "../../Vect2";

class Texture extends Component{
  private _sourcePosition: Vect2;
  private _size: Vect2;
  private _image: HTMLImageElement;

  public constructor(size: Vect2) {
    super();

    this._image = new Image();
    this._size = size;
    this._sourcePosition = new Vect2(0, 0);
  }

  public get sourcePosition(): Vect2 {
    return this._sourcePosition;
  }

  public set sourcePosition(sourcePositiion: Vect2) {
    this._sourcePosition = Vect2.mult(sourcePositiion, this._size);
  }

  public get size(): Vect2 {
    return this._size;
  }

  public set size(size: Vect2) {
    this._size = size;
  }

  public get image(): string {
    return this._image.src;
  }

  public set image(image: string) {
    this._image.src = image;
  }

  public imageLoaded(): boolean {
    return (
      this._image.width != 0 &&
      this._image.height != 0 &&
      this._image.complete
    );
  }

  public update(delta: number): void {}

  public draw(ctx: CanvasRenderingContext2D): void {
    if(this.gameObject && this.imageLoaded()) {
      const position = this.gameObject.transform.position;
      const scale = this.gameObject.transform.scale;
      console.log(scale.x, scale.y, this._size.x, this._size.y);

      ctx.drawImage(
        this._image, 

        this._sourcePosition.x, this._sourcePosition.y,
        this._size.x, this._size.y,

        position.x, position.y,
        this._size.x * scale.x, this._size.y * scale.y
      );
    }
  }
}

export default Texture;
import Component from "../Component";
import Vect2 from "../../Vect2";
declare class Texture extends Component {
    private _sourcePosition;
    private _size;
    private _image;
    constructor(size: Vect2);
    get sourcePosition(): Vect2;
    set sourcePosition(sourcePositiion: Vect2);
    get size(): Vect2;
    set size(size: Vect2);
    get image(): string;
    set image(image: string);
    imageLoaded(): boolean;
    update(delta: number): void;
    draw(ctx: CanvasRenderingContext2D): void;
}
export default Texture;

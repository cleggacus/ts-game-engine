declare class Keyboard {
    private _keysDown;
    constructor();
    init(): void;
    isKeyDown(key: string): boolean;
}
export default Keyboard;

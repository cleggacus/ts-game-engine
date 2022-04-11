declare enum IndirectScreenSize {
    Default = 0,
    MatchCanvas = 1,
    GameBoy = 2,
    NES = 3,
    HD_1080 = 4,
    HD_720 = 5
}
declare type DirectScreenSize = [width: number, height: number];
declare type ScreenSize = DirectScreenSize | IndirectScreenSize;
declare const resizeCanvas: (canvas: HTMLCanvasElement, screenSize: ScreenSize) => void;
export default ScreenSize;
export { DirectScreenSize, IndirectScreenSize, resizeCanvas };

enum IndirectScreenSize {
  Default,
  MatchCanvas,
  GameBoy,
  NES,
  HD_1080,
  HD_720,
};

type DirectScreenSize = [ width: number, height: number ];

type ScreenSize = DirectScreenSize | IndirectScreenSize;

const resizeCanvas = (canvas: HTMLCanvasElement, screenSize: ScreenSize) => {
  switch (screenSize) {
    case IndirectScreenSize.Default:
      resizeCanvas(canvas, IndirectScreenSize.HD_720)
      break;

    case IndirectScreenSize.MatchCanvas:
      resizeCanvas(canvas, [canvas.width, canvas.height]);
      break;

    case IndirectScreenSize.GameBoy:
      resizeCanvas(canvas, [160, 144]);
      break;

    case IndirectScreenSize.NES:
      resizeCanvas(canvas, [256, 240]);
      break;

    case IndirectScreenSize.GameBoy:
      resizeCanvas(canvas, [160, 144]);
      break;

    case IndirectScreenSize.HD_1080:
      resizeCanvas(canvas, [1920, 1080]);
      break;

    case IndirectScreenSize.HD_720:
      resizeCanvas(canvas, [1280, 720]);
      break;

    default:
      [canvas.width, canvas.height] = screenSize;
      break
  }
}

export default ScreenSize;

export {
  DirectScreenSize,
  IndirectScreenSize,
  resizeCanvas
}

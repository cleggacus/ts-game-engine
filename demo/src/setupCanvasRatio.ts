const setupCanvasRatio = (canvas: HTMLCanvasElement, gameWidth: number, gameHeight: number) => {
  const resize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const ratio = gameWidth / gameHeight;
    const newRatio = width / height;

    if (newRatio > ratio) {
      canvas.style.width = (gameWidth * height / gameHeight) + "px";
      canvas.style.height = "100%";
    } else {
      canvas.style.width = "100%";
      canvas.style.height = (gameHeight * width / gameWidth) + "px";
    }
  }

  addEventListener("resize", resize);
  resize();
}

export default setupCanvasRatio;

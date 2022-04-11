import Game from "./Game"; 
import setupCanvasRatio from "./setupCanvasRatio";

const canvas = document.querySelector("#canvas") as HTMLCanvasElement;

const game = new Game(canvas);

setupCanvasRatio(canvas, game.screen.width, game.screen.height);

game.start();

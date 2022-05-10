import BouncingBalls from "./bouncingBalls.js";

interface ICanvas {
  $target: Element
}

export default function Canvas({ $target }: ICanvas) {
  const $Canvas = document.createElement("canvas");
  $target.appendChild($Canvas);
  $Canvas.width = 1000;
  $Canvas.height = 500;
  $Canvas.style.cssText = `border: 1px solid black;`; 
  const ctx = $Canvas.getContext("2d");

  BouncingBalls({ ctx, $Canvas });
}

import { Ball } from "./Ball.js";

export default function Canvas($target: Element) {
  const $Canvas = document.createElement("canvas");
  $target.appendChild($Canvas);
  $Canvas.width = 1000;
  $Canvas.height = 500;
  $Canvas.style.cssText = `border: 1px solid black;`; 
  const ctx = $Canvas.getContext("2d");

  const ball1 = new Ball($Canvas.width, $Canvas.height);
  const ball2 = new Ball($Canvas.width, $Canvas.height);
  const ball3 = new Ball($Canvas.width, $Canvas.height);

  function animate(t?: unknown) {
    window.requestAnimationFrame(animate.bind(this));

    ctx.clearRect(0, 0, $Canvas.width, $Canvas.height);

    ball1.draw(ctx, $Canvas.width, $Canvas.height);
    ball2.draw(ctx, $Canvas.width, $Canvas.height);
    ball3.draw(ctx, $Canvas.width, $Canvas.height);
  }
  animate()
}

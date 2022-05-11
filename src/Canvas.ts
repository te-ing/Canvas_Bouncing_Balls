import { Ball } from "./Ball.js";

interface IBall {
  diameter: number;
  radius: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  draw: Function;
}

export default function Canvas($target: Element) {
  const $Canvas = document.createElement("canvas");
  $target.appendChild($Canvas);
  $Canvas.width = 1000;
  $Canvas.height = 500;
  $Canvas.style.cssText = `border: 1px solid black;`; 
  const ctx = $Canvas.getContext("2d");

  const balls: IBall[] = [];
  for (let i = 0; i < Math.floor(Math.random() * 10) + 10; i++){
    balls.push(new Ball($Canvas.width, $Canvas.height));
  }

  function animate(t?: unknown) {
    ctx.clearRect(0, 0, $Canvas.width, $Canvas.height);
    for (let i = 0; i < balls.length; i++){
      balls[i].draw(ctx, $Canvas.width, $Canvas.height);
    }
    window.requestAnimationFrame(animate.bind(this));
  }
  animate()
}

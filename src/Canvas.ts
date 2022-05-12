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
  for (let i = 0; i < Math.round(Math.random() * 10) + 10; i++){
    let newBall = new Ball($Canvas.width, $Canvas.height);
    for (let ball of balls) {
      while (Math.abs(ball.x - newBall.x) + Math.abs(ball.y - newBall.y) <= ball.diameter + newBall.diameter) {
        newBall = new Ball($Canvas.width, $Canvas.height);
      }
    }
    balls.push(newBall);
  }

  function animate(t?: unknown) {
    ctx.clearRect(0, 0, $Canvas.width, $Canvas.height);
    for (let i = 0; i < balls.length; i++){
      for (let j = 0; j < balls.length; j++) {
        if (i !== j && Math.abs(balls[i].x - balls[j].x) + Math.abs(balls[i].y - balls[j].y ) <= (balls[i].diameter + balls[j].diameter)) {
          balls[i].draw(ctx, $Canvas.width, $Canvas.height, true);
          break;
        }
      }
      balls[i].draw(ctx, $Canvas.width, $Canvas.height);
    }
    window.requestAnimationFrame(animate.bind(this));
  }
  animate()
}

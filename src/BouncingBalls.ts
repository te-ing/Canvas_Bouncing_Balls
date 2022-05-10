interface IBouncingBalls {
  ctx: CanvasRenderingContext2D;
  $Canvas: HTMLCanvasElement,
}

export default function BouncingBalls({ ctx, $Canvas }: IBouncingBalls) {
  const radius = Math.random() * 10 + 10;
  const diameter = +radius * 2;
  const x  = +radius + (Math.random() * ($Canvas.width - diameter));
  const y = +radius + (Math.random() * ($Canvas.height - diameter));

  ctx.beginPath();
  ctx.arc(x, y, diameter, 0, 2 * Math.PI);
  ctx.fill();
}

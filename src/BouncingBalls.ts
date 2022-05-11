export default function BouncingBalls( ctx: CanvasRenderingContext2D, width: Number, height: Number) {
  const radius = Math.random() * 10 + 10;
  const diameter = +radius * 2;
  const speed = Math.random() * 2 + 2;
  let x  = radius + (Math.random() * (+width - diameter));
  let y = radius + (Math.random() * (+height - diameter));
  let vx = speed;
  let vy = speed;

  function draw() {
    x += vx
    y += vy

    bounce();
    ctx.clearRect(0, 0, +width, +height);
    ctx.beginPath();
    ctx.arc(x, y, diameter, 0, 2 * Math.PI);
    ctx.fill();
    requestAnimationFrame(draw);
  }
  draw();

  function bounce() {
    const minX = diameter;
    const minY = diameter;
    const maxX = +width - diameter;
    const maxY = +height - diameter;
    if (x <= minX || x >= maxX) {
      vx *= -1;
      x += vx;
    } else if (y <= minY || y >= maxY) {
      vy *= -1;
      y += vy;
    }
  }
}

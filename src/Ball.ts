export class Ball {
  radius: number;
  x: number;
  y: number;
  diameter: number;
  vx: number;
  vy: number;
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;

  constructor(stageWidth: number, stageHeight: number) {
    this.radius = Math.random() * 10 + 10;
    this.diameter = this.radius * 2;
    this.vx = Math.random() * 2 + 2;
    this.vy = Math.random() * 2 + 2;
    this.x  = this.radius + (Math.random() * (+stageWidth - +this.diameter));
    this.y = this.radius + (Math.random() * (+stageHeight - +this.diameter));
  }
  
  draw(ctx: CanvasRenderingContext2D, stageWidth: number, stageHeight: number) {
    this.x = +this.x + +this.vx;
    this.y = +this.y + +this.vy;

    this.bounceStage(stageWidth, stageHeight);

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.diameter, 0, 2 * Math.PI);
    ctx.fill();
  }

  bounceStage(stageWidth: number, stageHeight: number) {
    const minX = this.diameter;
    const minY = this.diameter;
    const maxX = +stageWidth - this.diameter;
    const maxY = +stageHeight - this.diameter;

    if (this.x <= minX || this.x >= maxX) {
      this.vx *= -1;
      this.x += this.vx;
    } else if (this.y <= minY || this.y >= maxY) {
      this.vy *= -1;
      this.y += this.vy;
    }
  }
}

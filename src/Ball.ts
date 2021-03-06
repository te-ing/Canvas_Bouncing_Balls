export class Ball {
  radius: number;
  diameter: number;
  speed: number;
  direction: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;

  constructor(stageWidth: number, stageHeight: number) {
    this.radius = Math.random() * 10 + 10;
    this.diameter = this.radius * 2;
    this.speed = (Math.random() * 200 + 200) / 60;
    this.direction = Math.round(Math.random()) ? Math.random() : Math.random() * -1;
    this.vx = this.direction * this.speed;
    this.vy = (1 - this.direction) * this.speed;
    this.x  = this.diameter + (Math.random() * (stageWidth - this.diameter * 2));
    this.y = this.diameter + (Math.random() * (stageHeight - this.diameter * 2));
  }

  draw(ctx: CanvasRenderingContext2D, stageWidth: number, stageHeight: number, collision?: boolean) {
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    if (collision) {
      this.vx *= -1;
      this.vy *= -1;
      this.x += this.vx;
      this.y += this.vy;
    } else {
      this.bounceStage(stageWidth, stageHeight);
    }
    
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

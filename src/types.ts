export interface IBall {
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
  draw: Function;
}

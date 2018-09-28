class Obstacle extends GameObject {
  constructor(name, position, size) {
    super(name);
    this.position = position;
    this.body = new Body(this, size);
  }

  draw() {
    Game.drawer.ctx.strokeRect(
      this.position.x,
      this.position.y,
      this.body.size.x,
      this.body.size.y
    )
  }
}

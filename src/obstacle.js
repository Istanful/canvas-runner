class Obstacle extends GameObject {
  constructor(name, position, size) {
    super(name);
    this.body = new Body(position, size);
  }

  draw() {
    Drawer.ctx.strokeRect(
      this.body.position.x,
      this.body.position.y,
      this.body.size.x,
      this.body.size.y
    )
  }
}

class Obstacle extends GameObject {
  constructor(name, position, size) {
    super(name);
    this.position = position;
    this.body = new Body(this);
    this.hitbox = new Hitbox(this, size);
  }

  draw() {
    Game.drawer.ctx.strokeRect(
      this.position.x,
      this.position.y,
      this.hitbox.size.x,
      this.hitbox.size.y
    )
  }
}

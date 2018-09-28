class Obstacle extends GameObject {
  constructor(name, position, size) {
    super(name, position);
    this.body = new Body(this);
    this.hitbox = new Hitbox(this, size);
    this.graphic = Canvas.build(
      size,
      (ctx) => {
        ctx.strokeRect(
          0,
          0,
          this.hitbox.size.x,
          this.hitbox.size.y
        )
      }
    );
  }
}

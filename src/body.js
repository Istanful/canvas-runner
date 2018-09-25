class Body {
  constructor(position, size) {
    this.position = position;
    this.velocity = new Vector(0, 0);
    this.size = size;
    this.hitbox = new Hitbox(this);
  }

  update(deltaTime) {
    this.velocity = new Vector(
      this.velocity.x,
      this.velocity.y + Physic.gravity * (deltaTime / 1000)
    );

    this.position = new Vector(
      this.position.x + this.velocity.x,
      this.position.y + this.velocity.y
    );
  }

  get collisions() {
    return this.hitbox.collisions;
  }

  get isFalling() {
    return this.velocity.y > 0;
  }

  get isGrounded() {
    return this.velocity.y == 0;
  }

  get isRising() {
    return this.velocity.y < 0;
  }
}

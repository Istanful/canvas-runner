class Body {
  constructor(position) {
    this.position = position;
    this.gravity = Physic.gravity;
    this.velocity = new Vector(0, 0);
  }

  update(deltaTime) {
    this.velocity = new Vector(
      this.velocity.x,
      this.velocity.y + this.gravity * (deltaTime / 1000)
    );
    this.position = this.position.add(this.velocity);
  }
}

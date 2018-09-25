class Hitbox {
  constructor(body) {
    this.body = body;
  }

  get collisions() {
    return Game.gameObjects.map((gameObject) => {
      if (!gameObject.body) { return; }
      if (Object.is(gameObject.body.hitbox, this)) { return; }
      const collision = new Collision(this, gameObject.body.hitbox);
      return new Collision(this, gameObject.body.hitbox);
    }).compact();
  }

  includes(vector) {
    return vector.x > this.topLeftCorner.x &&
           vector.x < this.topRightCorner.x &&
           vector.y > this.topLeftCorner.y &&
           vector.y < this.bottomRightCorner.y
  }

  get corners() {
    return [
      this.topLeftCorner,
      this.topRightCorner,
      this.bottomRightCorner,
      this.bottomLeftCorner
    ];
  }

  get topLeftCorner() {
    return this.body.position;
  }

  get topRightCorner() {
    return this.body.position.add(
      new Vector(this.body.size.x, 0)
    )
  }

  get bottomRightCorner() {
    return this.body.position.add(this.body.size);
  }

  get bottomLeftCorner() {
    return this.body.position.add(
      new Vector(0, this.body.size.y)
    )
  }
}
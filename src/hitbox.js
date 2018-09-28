class Hitbox {
  constructor(gameObject) {
    this.gameObject = gameObject;
  }

  get collisions() {
    return Game.gameObjects.map((gameObject) => {
      if (!gameObject.body) { return; }
      const hitbox = gameObject.body.hitbox;
      if (Object.is(hitbox, this)) { return; }
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
    return this.gameObject.position;
  }

  get topRightCorner() {
    return this.gameObject.position.add(
      new Vector(this.gameObject.size.x, 0)
    )
  }

  get bottomRightCorner() {
    return this.gameObject.position.add(this.gameObject.size);
  }

  get bottomLeftCorner() {
    return this.gameObject.position.add(
      new Vector(0, this.gameObject.size.y)
    )
  }
}

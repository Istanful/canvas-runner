class Hitbox {
  constructor(gameObject, size) {
    this.gameObject = gameObject;
    this.size = size;
  }

  get collisions() {
    return Game.gameObjects.map((gameObject) => {
      if (!gameObject.hitbox) { return; }
      const hitbox = gameObject.hitbox;
      if (Object.is(hitbox, this)) { return; }
      const collision = new Collision(this, gameObject.hitbox);
      return new Collision(this, gameObject.hitbox);
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
      new Vector(this.size.x, 0)
    )
  }

  get bottomRightCorner() {
    return this.gameObject.position.add(this.size);
  }

  get bottomLeftCorner() {
    return this.gameObject.position.add(
      new Vector(0, this.size.y)
    )
  }
}

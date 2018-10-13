class Character extends GameObject {
  constructor(name) {
    super(name, new Vector(0, 700));
    this.animator = new CharacterAnimator(this);
    this.body = new Body(this);
    this.hitbox = new Hitbox(this, new Vector(30, 40));
  }

  update(deltaTime) {
    this.graphic = this.animator.animation.nextValue();
    this.body.velocity.x = Character.velocityX;
    this.body.update(deltaTime);
    this.handleCollision();
    super.update();
  }

  jump() {
    if (this.body.isGrounded) {
      this.body.velocity = new Vector(0, -10);
    }
  }

  land(collision) {
    this.body.velocity.y = 0;
    const otherCorner = collision.otherHitbox.topLeftCorner;
    this.position.y = otherCorner.y - this.hitbox.size.y
  }

  runInto(collision) {
    this.position.x = collision.otherHitbox.topLeftCorner.x - this.hitbox.size.x
  }

  get collisions() {
    return this.hitbox.collisions;
  }

  handleCollision() {
    this.collisions.forEach((collision) => {
      switch(collision.location) {
        case 'bottom':
          this.position.y = collision.otherHitbox.topLeftCorner.y - this.hitbox.size.y
          this.body.velocity.y = 0;
          break;
        case 'topRight':
          if (this.hitbox.topRightCorner.subtract(this.body.velocity).y >=
            collision.otherHitbox.bottomLeftCorner.y) {
            this.position.y = collision.otherHitbox.bottomLeftCorner.y
            this.body.velocity.y = 0;
          }
          else if (this.hitbox.topRightCorner.subtract(this.body.velocity).y <
            collision.otherHitbox.bottomLeftCorner.y) {
            this.position.x = collision.otherHitbox.bottomLeftCorner.x - this.hitbox.size.x
            this.body.velocity.x = 0;
          }
          break;
        case 'topLeft':
          if (this.hitbox.topLeftCorner.subtract(this.body.velocity).y >=
            collision.otherHitbox.bottomRightCorner.y) {
            this.position.y = collision.otherHitbox.bottomRightCorner.y
            this.body.velocity.y = 0;
          }
          else if (this.hitbox.topLeftCorner.subtract(this.body.velocity).y <
            collision.otherHitbox.bottomRightCorner.y) {
            this.position.x = collision.otherHitbox.bottomRightCorner.x - this.hitbox.size.x
            this.body.velocity.x = 0;
          }
          break;
        case 'bottomRight':
          if (this.hitbox.bottomRightCorner.subtract(this.body.velocity).y <=
            collision.otherHitbox.topLeftCorner.y) {
            this.position.y = collision.otherHitbox.topLeftCorner.y - this.hitbox.size.y
            this.body.velocity.y = 0;
          }
          else if (this.hitbox.bottomRightCorner.subtract(this.body.velocity).y >
            collision.otherHitbox.topLeftCorner.y) {
            this.position.x = collision.otherHitbox.topLeftCorner.x - this.hitbox.size.x
            this.body.velocity.x = 0;
          }
          break;
        case 'bottomLeft':
          if (this.hitbox.bottomLeftCorner.subtract(this.body.velocity).y <=
            collision.otherHitbox.bottomRightCorner.y) {
            this.position.y = collision.otherHitbox.topLeftCorner.y - this.hitbox.size.y
          }
          else if (this.hitbox.bottomLeftCorner.subtract(this.body.velocity).y >
            collision.otherHitbox.bottomRightCorner.y) {
            this.position.x = collision.otherHitbox.topLeftCorner.x - this.hitbox.size.x
            this.body.velocity.x = 0;
          }
          break;
        case 'top':
          this.position.y = collision.otherHitbox.bottomLeftCorner.y;
          this.body.velocity.y = 0;
          break;
      }
    })
  }
}
Character.velocityX = 6;

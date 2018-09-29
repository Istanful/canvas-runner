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
    this.handleRopeInteraction();
    super.update();
  }

  jump() {
    if (this.body.isGrounded) {
      this.body.velocity = new Vector(0, -10);
    } else if (!this.rope) {
      this.rope = new Rope(this);
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

  handleRopeInteraction() {
    if (this.rope && this.rope.stillAttached) {
      this.position.y = this.rope.jointPosition.y + this.rope.endPosition.y;
    } else if (this.rope) {
      this.body.velocity.y = 0;
      this.rope.destroy();
      this.rope = null;
    }
  }

  get collisions() {
    return this.hitbox.collisions;
  }

  handleCollision() {
    this.collisions.forEach((collision) => {
      switch(collision.location) {
        case 'right':
        case 'topRight':
          this.runInto(collision)
          break;
        case 'bottomRight':
          if (this.hitbox.bottomRightCorner.subtract(this.body.velocity).y <=
              collision.otherHitbox.topLeftCorner.y)
            this.land(collision);
          else if (this.hitbox.bottomRightCorner.subtract(this.body.velocity).y >
                   collision.otherHitbox.topLeftCorner.y)
            this.runInto(collision);
          else
            debugger;
          break;
        case 'bottomLeft':
          if (this.hitbox.bottomLeftCorner.subtract(this.body.velocity).y <=
              collision.otherHitbox.bottomRightCorner.y)
            this.land(collision);
          else if (this.hitbox.bottomLeftCorner.subtract(this.body.velocity).y >
                   collision.otherHitbox.bottomRightCorner.y)
            this.runInto(collision);
          break;
        case 'bottom':
          this.land(collision);
          break;
      }
    })
  }
}
Character.velocityX = 6;

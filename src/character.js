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
      if (collision.collidingCorners.length > 1) {
        switch(collision.location) {
          case 'top':
            this.position.y = collision.otherHitbox.bottomLeftCorner.y;
            this.body.velocity.y = 0;
            break;
          case 'bottom':
            this.position.y = collision.otherHitbox.topLeftCorner.y - this.hitbox.size.y
            this.body.velocity.y = 0;
            break;
          case 'left':
            this.position.x = collision.otherHitbox.bottomLeftCorner.x;
            this.body.velocity.x = 0;
            break;
          case 'right':
            this.position.x = collision.otherHitbox.bottomLeftCorner.x - this.hitbox.size.x;
            this.body.velocity.x = 0;
            break;
        }
      } else if (collision.collidingCorners.length == 1){
        const corner = this.hitbox[`${collision.location}Corner`];
        const previousCornerLocation = corner.subtract(this.body.velocity);
        const cornerMap = {
          'topRight': 'bottomLeft',
          'topLeft': 'bottomRight',
          'bottomRight': 'topLeft',
          'bottomLeft': 'topRight'
        }
        const otherCorner = collision.otherHitbox[`${cornerMap[collision.location]}Corner`];

        switch(collision.location) {
          case 'topRight':
          case 'topLeft':
            if (previousCornerLocation.y >= otherCorner.y) {
              this.position.y = otherCorner.y
              this.body.velocity.y = 0;
            }
            else if (previousCornerLocation.y < otherCorner.y) {
              this.position.x = otherCorner.x - this.hitbox.size.x
              this.body.velocity.x = 0;
            }
            break;
          case 'bottomRight':
          case 'bottomLeft':
            if (previousCornerLocation.y <= otherCorner.y) {
              this.position.y = otherCorner.y - this.hitbox.size.y
              this.body.velocity.y = 0;
            }
            else if (previousCornerLocation.y > otherCorner.y) {
              this.position.x = otherCorner.x - this.hitbox.size.x
              this.body.velocity.x = 0;
            }
            break;
        }
      }
    })
  }
}
Character.velocityX = 6;

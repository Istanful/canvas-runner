class Collision {
  constructor(hitbox, otherHitbox) {
    this.hitbox = hitbox;
    this.otherHitbox = otherHitbox;
    this.checksum = 0;
    this.collidingCorners = this.hitbox.corners.filter((corner, i) => {
      if (this.otherHitbox.includes(corner)) {
        this.checksum += Math.pow(2, i);
        return true;
      }
    });
  }

  get isColliding() {
    return this.collidingCorners.length > 0;
  }

  get location() {
    switch(this.checksum) {
      case 1:
        return 'topLeft';
      case 2:
        return 'topRight'
      case 3:
        return 'top';
      case 4:
        return 'bottomRight';
      case 6:
        return 'right';
      case 8:
        return 'bottomLeft';
      case 9:
        return 'left';
      case 12:
        return 'bottom';
    }
  }
}


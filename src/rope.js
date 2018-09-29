class Rope extends GameObject {
  constructor(gameObject) {
    const length = 100;
    const offsetX = Math.sin(Rope.angle) * length;
    const offsetY = -Math.cos(Rope.angle) * length;

    super(
      'rope',
      gameObject.position.add(
        new Vector(offsetX - length, offsetY)
      )
    );

    this.jointPosition = gameObject.position.add(
      new Vector(offsetX - gameObject.hitbox.size.x, offsetY)
    );
    this.gameObject = gameObject;
    this.length = length;
  }

  update() {
    if (this.stillAttached) {
      this.gameObject.position.y = this.jointPosition.y + this.endPosition.y;
    } else {
      this.gameObject.body.velocity.y = 0;
      this.destroy();
    }
  }

  get graphic() {
    return Canvas.build(
      new Vector(this.length  * 2, this.length),
      (ctx) => {
        ctx.moveTo(this.length, 0);
        ctx.lineTo(this.length + this.endPosition.x, this.endPosition.y);
        ctx.stroke();
      }
    );
  }

  get stillAttached() {
    return this.relativePosition.x < this.length + this.endPosition.x;
  }

  get relativePosition() {
    return this.gameObject.position.subtract(this.jointPosition);
  }

  get endPosition() {
    const distance = this.relativePosition.distance();
    const proportion = this.length / distance;
    return new Vector(
      this.relativePosition.x * proportion,
      this.relativePosition.y * proportion
    );
  }
}
Rope.angle = 0.9;

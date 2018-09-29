class Camera extends GameObject {
  constructor(name, subject) {
    super(name);
    this.drawer = new Drawer('mainCamera');
    this.subject = subject;
    this.offsetY = this.drawer.canvas.height / 2;
    this.position = this.subject.position.subtract(
      new Vector(
        this.drawer.canvas.width / 2,
        this.drawer.canvas.height / 2
      )
    );
    this.elasticity = 0.1;
  }

  update() {
    this.drawer.clear();
    Game.gameObjects.forEach((gameObject) => {
      if (gameObject.graphic) {
        const drawPosition = gameObject.position
                                       .subtract(this.position)
        this.drawer.ctx.drawImage(
          gameObject.graphic,
          drawPosition.x,
          drawPosition.y
        );
      }
    })
  }

  lateUpdate() {
    this.position = new Vector(
      this.nextX,
      this.nextY
    )
  }

  get nextX() {
    return this.position.x +
           Character.velocityX;
  }

  get nextY() {
    return this.position.y + this.deltaY * this.elasticity;
  }

  get currentY() {
    return this.position.y +
           this.drawer.canvas.height -
           this.subject.hitbox.size.y -
           this.offsetY;
  }

  get deltaY() {
    return this.subject.position.y - this.currentY;
  }
}

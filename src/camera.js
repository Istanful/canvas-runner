class Camera extends GameObject {
  constructor(name, subject) {
    super(name);
    this.drawer = new Drawer('mainCamera');
    this.subject = subject;
    this.position = new Vector(
      this.subject.position.x,
      this.subject.position.y
    );
    this.offsetY = 50;
    this.elasticity = 0.1;
  }

  update() {
  }

  lateUpdate() {
    this.position = new Vector(
      this.currentX,
      this.currentY
    );
    this.draw();
  }

  get currentX() {
    return this.subject.body.position.x;
  }

  get currentY() {
    return this.position.y +
           (this.subject.position.y - this.position.y) * this.elasticity;
  }

  get offset() {
    return new Vector(
      this.drawer.canvas.width / 2 - this.position.x,
      this.drawer.canvas.height - this.position.y -
        this.subject.body.size.y -
        this.offsetY
    )
  }

  draw() {
    this.drawer.ctx.clearRect(
      0,
      0,
      this.drawer.canvas.width,
      this.drawer.canvas.height
    );

    this.drawer.ctx.drawImage(
      Game.drawer.canvas,
      this.offset.x,
      this.offset.y,
      this.drawer.canvas.width,
      this.drawer.canvas.height
    );
  }
}

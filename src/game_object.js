class GameObject {
  constructor(name, position) {
    this.name = name;
    this.position = position;
    this.instantiate();
  }

  update() {
    this.draw();
  }

  lateUpdate() {
  }

  draw() {
    Game.drawer.ctx.drawImage(
      this.graphic,
      this.position.x,
      this.position.y
    );
  }

  instantiate() {
    Game.gameObjects.push(this);
  }
}

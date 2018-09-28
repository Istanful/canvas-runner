class GameObject {
  constructor(name) {
    this.name = name;
    this.instantiate();
  }

  update() {
    this.draw();
  }

  lateUpdate() {
  }

  draw() {
  }

  instantiate() {
    Game.gameObjects.push(this);
  }
}

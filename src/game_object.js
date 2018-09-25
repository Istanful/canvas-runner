class GameObject {
  constructor(name) {
    this.name = name;
    this.instantiate();
  }

  update() {
    this.draw();
  }

  draw() {
  }

  instantiate() {
    Game.gameObjects.push(this);
  }
}

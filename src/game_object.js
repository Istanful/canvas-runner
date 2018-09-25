class GameObject {
  constructor(name) {
    this.name = name;
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

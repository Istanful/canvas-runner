class GameObject {
  constructor(name) {
    this.name = name;
  }

  update() {
    this.draw();
  }

  draw() {
  }

  instantiate(game) {
    game.gameObjects.push(this);
  }
}

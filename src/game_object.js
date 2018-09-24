class GameObject {
  constructor(name) {
    this.name = name;
  }

  update(time) {
    this.draw(time);
  }

  draw(time) {
  }

  instantiate(game) {
    game.gameObjects.push(this);
  }
}

class GameObject {
  constructor(name, position) {
    this.name = name;
    this.position = position;
    this.instantiate();
  }

  update() {
  }

  lateUpdate() {
  }

  instantiate() {
    Game.gameObjects.push(this);
  }
}

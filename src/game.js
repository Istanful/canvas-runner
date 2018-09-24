class Game {
  constructor() {
    this.gameObjects = [];
  }

  update() {
    Drawer.clear();
    this.gameObjects.forEach((gameObject) => {
      return gameObject.update(this.currentTime)
    });
  }

  get currentTime() {
    return new Date().getTime()
  }
}


class Game {
  constructor() {
    this.gameObjects = [];
  }

  update() {
    Drawer.clear();
    this.previousTime = this.currentTime || Time.current;
    this.currentTime = Time.current;
    this.deltaTime = this.currentTime - this.previousTime;
    this.gameObjects.forEach((gameObject) => {
      return gameObject.update(this.deltaTime)
    });
    this.previousTime = this.currentTime;
  }
}


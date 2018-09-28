class Clock {
  static tick() {
    this.previousTime = this.currentTime || Time.current;
    this.currentTime = Time.current;
    this.deltaTime = this.currentTime - this.previousTime;
  }
}

class Game {
  static update() {
    Game.drawer.clear();
    Clock.tick();

    this.gameObjects.forEach((gameObject) => {
      gameObject.update(Clock.deltaTime)
    });

    this.gameObjects.forEach((gameObject) => {
      gameObject.lateUpdate(Clock.deltaTime)
    });
  }
}
Game.gameObjects = [];
Game.drawer = new Drawer('gameCanvas');

class Clock {
  static tick() {
    this.previousTime = this.currentTime || Time.current;
    this.currentTime = Time.current;
    this.deltaTime = this.currentTime - this.previousTime;
  }
}

class Game {
  static update() {
    Clock.tick();

    this.gameObjects.forEach((gameObject) => {
      gameObject.update(Clock.deltaTime)
    });

    this.gameObjects.forEach((gameObject) => {
      gameObject.lateUpdate(Clock.deltaTime)
    });
  }

  static get score() {
    return Math.floor(character.position.x / 100);
  }
}
Game.gameObjects = [];

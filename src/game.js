class Game {
  static start() {
    this.character = new Character('test');
    this.mainCamera = new Camera('mainCamera', this.character);

    new Floor();
    new ObstacleGenerator();

    KeyboardInput.on(' ', this.character.jump.bind(this.character));
    KeyboardInput.subscribe();

    setInterval(() => {
      ScoreBoard.update();
      this.update();
    }, 16)
  }

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
    return Math.floor(Game.character.position.x / 100);
  }
}
Game.gameObjects = [];

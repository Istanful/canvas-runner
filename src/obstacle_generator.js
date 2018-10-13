class ObstacleGenerator extends GameObject {
  constructor(delay) {
    super('obstacleGenerator');
    this.delay = delay;
    this.obstacleSize = new Vector(300, 50);
    this.obstacles = [];
    this.nextObstaclePosition = new Vector(Game.mainCamera.drawer.canvas.width
      / 2 + this.obstacleSize.x, 750);
  }

  update() {
    this.incrementNextObstaclePosition();
    if (this.notEnoughObstacles) {
      this.createNewObstacle();
    }
  }


  createNewObstacle() {
    const obstacle = new Obstacle(
      'box',
      this.nextObstaclePosition,
      this.obstacleSize
    );
    this.obstacles.push(obstacle);
  }

  get notEnoughObstacles() {
    return this.obstacles.length == 0 ||
      Game.character.position.x > (this.lastObstaclePosition.x -
      Game.mainCamera.drawer.canvas.width);
  }

  incrementNextObstaclePosition() {
    if (this.obstacles.length > 0) {
      this.nextObstaclePosition =
        this.lastObstaclePosition.add(this.nextObstacleIncremention);
    }
  }

  get lastObstaclePosition() {
    return this.obstacles.last().position;
  }

  get nextObstacleIncremention() {
    const y = Dice.roll({
      40: -this.obstacleSize.y,
      60: -this.obstacleSize.y * 2,
      80: this.obstacleSize.y * 2,
      100: this.obstacleSize.y * 2
    });

    const x = Dice.roll({
      50: this.obstacleSize.x,
      100: this.obstacleSize.x * 2
    });

    return new Vector(x, y);
  }
}

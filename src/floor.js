class Floor extends Obstacle {
  constructor() {
    super(
      'floor',
      new Vector(0, 450),
      new Vector(800, 450),
    );
  }

  update() {
    this.position.x = mainCamera.position.x;
    super.update();
  }
}

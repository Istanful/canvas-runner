class Floor extends Obstacle {
  constructor() {
    super(
      'floor',
      new Vector(0, 800),
      new Vector(900, 450),
    );
  }

  update() {
    this.position.x = mainCamera.position.x;
    super.update();
  }
}

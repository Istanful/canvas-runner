class Floor extends Obstacle {
  constructor() {
    super(
      'floor',
      new Vector(-mainCamera.drawer.canvas.width / 2, 800),
      new Vector(800, 450),
    );
  }
}

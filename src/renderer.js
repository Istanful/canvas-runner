class Renderer extends Animation {
  constructor(gameObject) {
    super();
    this.gameObject = gameObject;
  }

  draw(position, time) {
    Drawer.ctx.drawImage(
      this.gameObject.graphic(time),
      position.x,
      position.y
    );
  }

  frameIndex(time) {
    return Math.floor(
      (time / this.frameDuration) % (this.columnCount)
    );
  }

  get frameDuration() {
    return 1000 / this.framesPerSecond;
  }
}

class SpriteAnimation extends Animation {
  constructor(spriteSheet, framesPerSecond) {
    super();
    this.spriteSheet = spriteSheet;
    this.framesPerSecond = framesPerSecond;
  }

  nextValue(deltaTime) {
    return this.spriteSheet.getFrame(this.frameIndex());
  }

  frameIndex() {
    return Math.floor(
      (Time.current / this.frameDuration) % (this.spriteSheet.columnCount)
    );
  }

  get frameDuration() {
    return 1000 / this.framesPerSecond;
  }
}

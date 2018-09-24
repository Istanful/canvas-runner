class SpriteAnimation extends Animation {
  constructor(spriteSheet, framesPerSecond) {
    super();
    this.spriteSheet = spriteSheet;
    this.framesPerSecond = framesPerSecond;
  }

  nextValue(time) {
    return this.spriteSheet.getFrame(this.frameIndex(time));
  }

  frameIndex(time) {
    return Math.floor(
      (time / this.frameDuration) % (this.spriteSheet.columnCount)
    );
  }

  get frameDuration() {
    return 1000 / this.framesPerSecond;
  }
}

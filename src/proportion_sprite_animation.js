class ProportionSpriteAnimation extends Animation {
  constructor(spriteSheet, proportionCallback) {
    super();
    this.spriteSheet = spriteSheet;
    this.proportionCallback = proportionCallback;
  }

  nextValue() {
    return this.spriteSheet.getFrame(this.frameIndex)
  }

  get frameIndex() {
    const proportion = this.proportionCallback();
    return Math.floor(proportion * (this.spriteSheet.columnCount - 1));
  }
}

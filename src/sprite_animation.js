/**
 * Builds an animation from the given spritesheet and frames per second.
 */
class SpriteAnimation extends Animation {
  /**
   * @constructor
   * @param {SpriteSheet} - The spritesheet to use for the animation.
   * @param {Integer}     - The number of frames per second this animation will
   *                        play back in.
   */
  constructor(spriteSheet, framesPerSecond) {
    super();
    this.spriteSheet = spriteSheet;
    this.framesPerSecond = framesPerSecond;
  }

  /**
   * Obtain the next frame of the animation.
   * @returns {canvas}
   */
  nextValue() {
    return this.spriteSheet.getFrame(this.frameIndex());
  }

  /**
   * The index of the next frame to display.
   * @private
   * @returns {Integer}
   */
  frameIndex() {
    return Math.floor(
      (Time.current / this.frameDuration) % (this.spriteSheet.columnCount)
    );
  }

  /**
   * The duration of any given frame in this animation.
   * @private
   * @returns {number}
   */
  get frameDuration() {
    return 1000 / this.framesPerSecond;
  }
}

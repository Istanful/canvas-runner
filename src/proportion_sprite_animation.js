/**
 * Builds an animation from the given spritesheet and callback function
 */
class ProportionSpriteAnimation extends Animation {
  /**
   * @constructor
   * @param {SpriteSheet} - The spritesheet to use for the animation.
   * @param {function}    - The callback function to be used to determine the
   *                        proportion of the animation to play at any given
   *                        moment. Must return a number between 0 and 1.
   */
  constructor(spriteSheet, proportionCallback) {
    super();
    this.spriteSheet = spriteSheet;
    this.proportionCallback = proportionCallback;
  }

  /**
   * Obtain the next frame of the animation.
   * @return {canvas}
   */
  nextValue() {
    return this.spriteSheet.getFrame(this.frameIndex)
  }

  /**
   * The index of the next frame to display calculated based on the return value
   * of the proportion callback.
   * @private
   * @returns {Integer}
   */
  get frameIndex() {
    const proportion = this.proportionCallback();
    return Math.floor(proportion * (this.spriteSheet.columnCount - 1));
  }
}

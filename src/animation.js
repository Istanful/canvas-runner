/**
 * Base class for all animations.
 */
class Animation {
  /**
   * Returns the next value to be used by the consumer of the animation.
   * @abstract
   * @returns {canvas}
   */
  nextValue() {
    throw new Error('nextValue must be implemented by subclass!');
  }
}

/**
 * Used for determining the animation to use at any given time.
 * Determines the animation based on a hash and a statedeterminator.
 */
class Animator {
  /**
   * @constructor
   * @param gameObject {GameObject}       - The subject gameObject.
   * @param stateMap   {Object}           - An object where each key contains
   *                                        an animation.
   * @param stateDeterminator {function}  - A function that determines the state
   *                                        to be used at any given time. It is
   *                                        called with the gameObject when an
   *                                        animation is requested. Must return
   *                                        a string which represents the key of
   *                                        the animation to be used.
   */
  constructor(gameObject, stateMap, stateDeterminator) {
    this.gameObject = gameObject;
    this.stateMap = stateMap;
    this.stateDeterminator = stateDeterminator;
  }

  /**
   * Obtain the animation to be used determined by the state determinator.
   *
   * @example
   * // Create an animator.
   * const animator = new Animator(
   *   fish,
   *   {
   *     swim: new SwimAnimation(),
   *     sink: new SinkAnimation()
   *   },
   *   (fish) => {
   *     if (fish.isAlive) {
   *       return 'swim';
   *     } else {
   *       return 'sink';
   *     }
   *   }
   * )
   *
   * fish.isAlive = true;
   *
   * // Returns the SwimAnimation instance.
   * animator.animation;
   *
   * fish.isAlive = false;
   *
   * // Returns the SinkAnimation
   * animator.animation;
   *
   * @returns {Animation}
   */
  get animation() {
    return this.stateMap[this.stateDeterminator(this.gameObject)];
  }
}

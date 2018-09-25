class CharacterAnimator extends Animator {
  constructor(character) {
    super(
      character, {
        run: new SpriteAnimation(new SpriteSheet('assets/character_run.png', 5), 14),
        fall: new SpriteAnimation(new SpriteSheet('assets/character_fall.png', 1), 1),
        rise: new SpriteAnimation(new SpriteSheet('assets/character_rise.png', 1), 1)
      }, (gameObject) => {
      if (gameObject.body.isFalling) {
        return 'fall';
      } else if (gameObject.body.isRising) {
        return 'rise';
      } else {
        return 'run';
      }
    });
  }
}

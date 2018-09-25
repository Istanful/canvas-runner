class Animator {
  constructor(gameObject, stateMap, stateDeterminator) {
    this.gameObject = gameObject;
    this.stateMap = stateMap;
    this.stateDeterminator = stateDeterminator;
  }

  get animation() {
    return this.stateMap[this.stateDeterminator(this.gameObject)];
  }
}

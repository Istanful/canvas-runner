class Dice {
  static roll(oddsMap) {
    const percentage = Math.random() * 100;
    let val;
    for (const odds in oddsMap) {
      if (percentage < odds) {
        return oddsMap[odds];
      }
    }
  }
}

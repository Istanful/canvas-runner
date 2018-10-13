class Clock {
  static tick() {
    this.previousTime = this.currentTime || Time.current;
    this.currentTime = Time.current;
    this.deltaTime = this.currentTime - this.previousTime;
  }
}

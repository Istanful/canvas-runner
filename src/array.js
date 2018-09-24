Array.prototype.min = function() {
  let min = this[0];
  for (let i = 0; i < this.length; i++) {
    if (this[i] < min) {
      min = this[i];
    }
  }
  return min;
}

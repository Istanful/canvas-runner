Array.prototype.min = function() {
  let min = this[0];
  for (let i = 0; i < this.length; i++) {
    if (this[i] < min) {
      min = this[i];
    }
  }
  return min;
}

Array.prototype.compact = function() {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (this[i]) {
      result.push(this[i]);
    }
  }
  return result;
}

Array.prototype.last = function() {
  return this[this.length - 1];
}

Array.prototype.first = function() {
  return this[0];
}

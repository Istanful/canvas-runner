class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(other) {
    return new Vector(
      this.x + other.x,
      this.y + other.y
    );
  }

  subtract(other) {
    return new Vector(
      this.x - other.x,
      this.y - other.y
    );
  }

  abs() {
    return new Vector(
      Math.abs(this.x),
      Math.abs(this.y)
    )
  }

  distance() {
    return Math.sqrt(
      Math.pow(this.x, 2) +
      Math.pow(this.y, 2)
    );
  }

  clone() {
    return new Vector(
      this.x,
      this.y
    )
  }
}

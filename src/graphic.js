class Graphic {
  constructor(path) {
    this.path = path;
    this.load();
  }

  load() {
    this.image = new Image();
    this.image.src = this.path;
  }
}

class Drawer {
  constructor(id) {
    this.size = new Vector(800, 450);
    this.canvas = document.getElementById(id) || this.constructCanvas(id, this.size);
  }

  constructCanvas(id, size) {
    const canvas = document.createElement('canvas')
    canvas.id = id;
    canvas.width = size.x;
    canvas.height = size.y;
    return canvas;
  }

  get ctx() {
    return this.canvas.getContext('2d');
  }

  clear() {
    Game.drawer.ctx.clearRect(0, 0, Game.drawer.canvas.width, Game.drawer.canvas.height);
  }
}

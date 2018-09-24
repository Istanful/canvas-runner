class Drawer {
  static get ctx() {
    return Drawer.canvas.getContext('2d');
  }

  static get canvas() {
    return document.getElementById('canvas')
  }

  static clear() {
    Drawer.ctx.clearRect(0, 0, Drawer.canvas.width, Drawer.canvas.height);
  }
}

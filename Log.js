class Log extends Base_class {
    constructor(x, y, height, angle) {
      super(x, y, 20, height, angle)
      this.image = loadImage("sprites/wood2.png")
      Matter.Body.setAngle(this.body, angle)
    }
  };
  
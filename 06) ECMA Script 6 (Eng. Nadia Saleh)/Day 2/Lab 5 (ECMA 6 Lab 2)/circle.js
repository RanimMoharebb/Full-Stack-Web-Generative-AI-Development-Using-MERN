import Shape from "./shape.js";

export default class Circle extends Shape {
  #radius;
  #x;
  #y;

  constructor(radius, x, y, color) {
    super(color);
    this.radius = radius;
    this.#x = x;
    this.#y = y;
  }

  set radius(value) {
    if (value <= 0) {
      console.log("Radius must be greater than zero");
    } else {
      this.#radius = value;
    }
  }

  get radius() {
    return this.#radius;
  }

  calcArea() {
    return Math.PI * this.#radius ** 2;
  }

  calcPerimeter() {
    return 2 * Math.PI * this.#radius;
  }

  toString() {
    return `Circle => Color: ${this.color}, Area: ${this.calcArea().toFixed(2)}, Perimeter: ${this.calcPerimeter().toFixed(2)}`;
  }
}

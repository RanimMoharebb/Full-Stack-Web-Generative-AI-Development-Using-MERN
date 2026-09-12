import Shape from "./shape.js";

export default class Rectangle extends Shape {
  static count = 0;

  #width;
  #height;

  constructor(width, height, color) {
    super(color);
    this.width = width;
    this.height = height;
    Rectangle.count++;
  }

  set width(value) {
    if (value <= 0) {
      console.log("Width must be greater than zero");
    } else {
      this.#width = value;
    }
  }

  get width() {
    return this.#width;
  }

  set height(value) {
    if (value <= 0) {
      console.log("Height must be greater than zero");
    } else {
      this.#height = value;
    }
  }

  get height() {
    return this.#height;
  }

  calcArea() {
    return this.#width * this.#height;
  }

  calcPerimeter() {
    return 2 * (this.#width + this.#height);
  }

  static getCount() {
    return Rectangle.count;
  }

  toString() {
    return `Rectangle => Color: ${this.color}, Area: ${this.calcArea()}, Perimeter: ${this.calcPerimeter()}`;
  }
}

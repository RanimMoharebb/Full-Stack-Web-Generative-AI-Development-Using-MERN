import Rectangle from "./Rectangle.js";

export default class Square extends Rectangle {
  static count = 0;

  constructor(side, color) {
    super(side, side, color);
    Square.count++;
  }

  calcArea() {
    return this.width * this.width;
  }

  calcPerimeter() {
    return 4 * this.width;
  }

  printColor() {
    console.log(`Square Color: ${this.color}`);
  }

  static getCount() {
    return Square.count;
  }

  toString() {
    return `Square => Color: ${this.color}, Area: ${this.calcArea()}, Perimeter: ${this.calcPerimeter()}`;
  }
}

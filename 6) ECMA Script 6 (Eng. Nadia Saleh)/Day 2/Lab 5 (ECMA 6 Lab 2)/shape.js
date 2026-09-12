export default class Shape {
  #color;

  constructor(color = "black") {
    this.#color = color;
  }

  set color(value) {
    this.#color = value;
  }

  get color() {
    return this.#color;
  }

  printColor() {
    console.log(`Color: ${this.#color}`);
  }

  calcArea() {
    return 0;
  }

  calcPerimeter() {
    return 0;
  }
}

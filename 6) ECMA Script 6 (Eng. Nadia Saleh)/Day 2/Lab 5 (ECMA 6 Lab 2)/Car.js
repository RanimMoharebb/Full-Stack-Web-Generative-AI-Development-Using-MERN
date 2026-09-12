export default class Car {
  static count = 0;

  #serial;
  #name;
  #speed;

  constructor(name, speed) {
    this.#serial = Math.floor(Math.random() * 100000);
    this.#name = name;
    this.#speed = speed;
    Car.count++;
  }

  accelerate() {
    this.#speed += 10;
    console.log(`${this.#name} speed is ${this.#speed} km/h`);
  }

  brake() {
    this.#speed -= 5;
    console.log(`${this.#name} speed is ${this.#speed} km/h`);
  }

  static info(car) {
    console.log(`Car Serial: ${car.#serial}, Total Cars: ${Car.count}`);
  }

  get speed() {
    return this.#speed;
  }

  get name() {
    return this.#name;
  }
}

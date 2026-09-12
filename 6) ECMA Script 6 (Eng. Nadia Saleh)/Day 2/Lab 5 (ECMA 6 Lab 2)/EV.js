import Car from "./Car.js";

export default class EV extends Car {
  #charge;

  constructor(name, speed, charge) {
    super(name, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(`Battery charged to ${this.#charge}%`);
  }

  accelerate() {
    this.#charge -= 1;
    const newSpeed = this.speed + 20;
    console.log(`${this.name} going at ${newSpeed} km/h, with a charge of ${this.#charge}%`);
  }
}

import Rectangle from "./Rectangle.js";
import Square from "./Square.js";
import Circle from "./circle.js";
import Car from "./Car.js";
import EV from "./EV.js";

const shapes = [
  new Rectangle(10, 5, "red"),
  new Square(6, "blue"),
  new Rectangle(4, 8, "green"),
  new Square(3, "yellow"),
];

shapes.forEach(shape => {
  console.log(shape.calcArea());
});

console.log(Rectangle.getCount());
console.log(Square.getCount());

const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);

car1.accelerate();
car1.brake();

car2.accelerate();
car2.brake();

Car.info(car1);

const ev1 = new EV("Tesla", 120, 23);
ev1.accelerate();
ev1.brake();
ev1.chargeBattery(90);

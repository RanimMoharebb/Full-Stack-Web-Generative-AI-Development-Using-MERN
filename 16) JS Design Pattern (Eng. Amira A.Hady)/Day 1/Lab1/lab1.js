// q1 -> Pattern used: Singleton -> Since the company has only one CEO
class CEO {
  constructor(name, age, address) {
    if (CEO.instance) {
      return CEO.instance;
    }
    this.name = name;
    this.age = age;
    this.address = address;
    CEO.instance = this;
  }

  getInfo() {
    return `${this.name}, Age: ${this.age}, Address: ${this.address}`;
  }
}

let ceo1 = new CEO("Ranim Mohareb", 24, "Alexandria, Egypt");
let ceo2 = new CEO("Another Name", 50, "Cairo");
console.log(ceo1 === ceo2); 
console.log(ceo1.getInfo());



// q2 -> Pattern used: Factory -> Each car gets an engine object injected automatically
class Engine {
  constructor(location, power) {
    this.location = location;
    this.power = power;
  }
}

class Car {
  constructor(type, speed, engine) {
    this.type = type;
    this.speed = speed;
    this.engine = engine;
  }

  getDetails() {
    console.log(
      `${this.type} car with speed ${this.speed}, Engine: ${this.engine.location}, Power: ${this.engine.power}`
    );
  }
}

class CarFactory {
  createCar(type, speed, engineLocation, enginePower) {
    return new Car(type, speed, new Engine(engineLocation, enginePower));
  }
}

let factory = new CarFactory();

let car1 = factory.createCar("Sedan", 200, "USA", 1000);
let car2 = factory.createCar("SUV", 180, "Germany", 1200);

car1.getDetails();
car2.getDetails();


// q3 -> Pattern used: Factory -> We can use Factory to create ToyDuck and ToyCar objects
class ToyDuck {
  constructor(color, price) {
    this.color = color;
    this.price = price;
  }
}

class ToyCar {
  constructor(color, price, name) {
    this.color = color;
    this.price = price;
    this.name = name;
  }
}

class ToyFactory {
  constructor(type, props) {
    this.type = type;
    this.props = props;
  }

  createToy() {
    switch (this.type) {
      case "Duck":
        return new ToyDuck(this.props.color, this.props.price);
      case "Car":
        return new ToyCar(this.props.color, this.props.price, this.props.name);
      default:
        throw new Error("Unknown toy type");
    }
  }
}

let duck = new ToyFactory("Duck", { color: "yellow", price: 10 }).createToy();
let car = new ToyFactory("Car", { color: "red", price: 50, name: "Ferrari" }).createToy();

console.log(duck);
console.log(car);

// q4 -> Pattern used: Singleton -> We need a singleton configuration with default values
class ConfigureVals {
  constructor(xpoint = 0, ypoint = 0, shape = null) {
    if (ConfigureVals.instance) {
      return ConfigureVals.instance;
    }

    this.xpoint = xpoint;
    this.ypoint = ypoint;
    this.shape = shape;

    ConfigureVals.instance = this;
  }

  static getConfiguration(xpoint, ypoint, shape) {
    if (!ConfigureVals.instance) {
      ConfigureVals.instance = new ConfigureVals(xpoint, ypoint, shape);
    }
    return ConfigureVals.instance;
  }

  getConfig() {
    return `x: ${this.xpoint}, y: ${this.ypoint}, shape: ${this.shape}`;
  }
}

let config1 = ConfigureVals.getConfiguration(10, 20, "Circle");
let config2 = ConfigureVals.getConfiguration(50, 50, "Square");

console.log(config1 === config2); 
console.log(config1.getConfig());
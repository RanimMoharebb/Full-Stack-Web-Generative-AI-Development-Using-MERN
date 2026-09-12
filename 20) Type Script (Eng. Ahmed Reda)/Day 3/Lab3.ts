
/************************************************************
LAB 2 - TYPESCRIPT OOP + GENERICS
************************************************************/

/************************************************************
0- difference between Type Assertions & Type Guards
************************************************************/

/*
Type Assertions:
- You tell TypeScript: "trust me, I know the type"
- No runtime checking
- Example: value as string

Type Guards:
- Real runtime checks that narrow types safely
- Example: typeof, instanceof, custom checks
*/

function exampleAssertion(value: any) {
  const str = value as string; // forcing type
  console.log(str.length);
}

function exampleTypeGuard(value: any) {
  if (typeof value === "string") {
    console.log(value.length); // safe narrowing
  }
}

/************************************************************
1- BankAccount class
************************************************************/

class BankAccount {
  private balance: number = 0;

  deposit(amount: number): void {
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

// Test
const acc = new BankAccount();
acc.deposit(100);
console.log("Balance:", acc.getBalance());

/************************************************************
2- Animal + Dog (inheritance + protected)
************************************************************/

class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  protected makeSound(): void {
    console.log("Some sound");
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  override makeSound(): void {
    console.log("Woof!");
  }

  testSound() {
    this.makeSound();
  }
}

// Test
const dog = new Dog("Buddy");
dog.testSound();

/************************************************************
3- Person with readonly id
************************************************************/

class Person {
  readonly id: number;

  constructor(id: number) {
    this.id = id;
  }
}

// Test
const p1 = new Person(1);
// p1.id = 5; ❌ Error: cannot assign to readonly

/************************************************************
4- Parameter properties (Person refactor)
************************************************************/

class Person2 {
  constructor(public name: string, public age: number) {}
}

// Test
const p2 = new Person2("Ranim", 24);
console.log(p2.name, p2.age);

/************************************************************
5- MathUtils static class
************************************************************/

class MathUtils {
  static PI: number = 3.14;

  static calculateCircumference(radius: number): number {
    return 2 * MathUtils.PI * radius;
  }
}

// Test
console.log("Circumference:", MathUtils.calculateCircumference(5));

/************************************************************
6- Abstract class Shape + Circle
************************************************************/

abstract class Shape {
  abstract calculateArea(): number;
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

// Test
const c = new Circle(5);
console.log("Area:", c.calculateArea());

/************************************************************
7- Temperature class (getter/setter)
************************************************************/

class Temperature {
  private _celsius: number = 0;

  get celsius(): number {
    return this._celsius;
  }

  set celsius(value: number) {
    if (value < -273.15) {
      throw new Error("Temperature below absolute zero!");
    }
    this._celsius = value;
  }
}

// Test
const temp = new Temperature();
temp.celsius = 25;
console.log("Temp:", temp.celsius);
// temp.celsius = -300; ❌ error

/************************************************************
8- Employee + Manager
************************************************************/

class Employee {
  constructor(
    readonly id: number,
    private salary: number,
    protected department: string
  ) {}

  getDetails(): string {
    return `ID: ${this.id}, Salary: ${this.salary}, Dept: ${this.department}`;
  }
}

class Manager extends Employee {
  constructor(
    id: number,
    salary: number,
    department: string,
    private teamSize: number
  ) {
    super(id, salary, department);
  }

  override getDetails(): string {
    return `${super.getDetails()}, Team Size: ${this.teamSize}`;
  }
}

// Test
const m = new Manager(1, 5000, "IT", 10);
console.log(m.getDetails());

/************************************************************
9- Generic Box class
************************************************************/

class Box<T> {
  private value!: T;

  setValue(val: T): void {
    this.value = val;
  }

  getValue(): T {
    return this.value;
  }
}

// Test
const stringBox = new Box<string>();
stringBox.setValue("Hello");
console.log(stringBox.getValue());

const numberBox = new Box<number>();
numberBox.setValue(123);
console.log(numberBox.getValue());

/************************************************************
10- Generic identity function
************************************************************/

function identity<T>(value: T): T {
  return value;
}

// Test
console.log(identity<number>(10));
console.log(identity<string>("Hello"));
console.log(identity<boolean>(true));

/************************************************************
11- Generic function printLength
************************************************************/

function printLength<T extends { length: number }>(arg: T): void {
  console.log("Length:", arg.length);
}

// Test
printLength("Hello");
printLength([1, 2, 3, 4]);
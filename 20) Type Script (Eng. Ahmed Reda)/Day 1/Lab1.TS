// ======================================================
// 1) Create an interface User with properties name (string) and age (number).
//    required create an object with only the name property.
// ======================================================

interface User {
  name: string;
  age: number;
}

// Using type assertion to bypass missing age
const user1 = {
  name: "Ranim"
} as User;


// ======================================================
// 2) Create an interface Profile with optional properties username (string) and email (string).
//    required create an object with both properties.
// ======================================================

interface Profile {
  username?: string;
  email?: string;
}

const profile1: Profile = {
  username: "ranim123",
  email: "ranim@email.com"
};


// ======================================================
// 3) Use Record to create an object where keys are "red", "green", and "blue",
//    and values are their corresponding hex color codes (strings).
//    Test by accessing the red key.
// ======================================================

const colors: Record<"red" | "green" | "blue", string> = {
  red: "#FF0000",
  green: "#00FF00",
  blue: "#0000FF"
};

console.log(colors.red);


// ======================================================
// 4) Create an interface Person with properties name (string), age (number), and email (string).
//    create a new type with only the name and email properties.
//    Test by creating an object with these properties.
// ======================================================

interface Person {
  name: string;
  age: number;
  email: string;
}

type PersonBasic = Pick<Person, "name" | "email">;

const person1: PersonBasic = {
  name: "Ranim",
  email: "ranim@email.com"
};


// ======================================================
// 5) Use the same Person interface from the previous question.
//    create a new type without the age property.
//    Test by creating an object with only name and email.
// ======================================================

type PersonWithoutAge = Omit<Person, "age">;

const person2: PersonWithoutAge = {
  name: "Ranim",
  email: "ranim@email.com"
};


// ======================================================
// 6) Create a union type Colors = "red" | "green" | "blue" | "yellow".
//    create a new type without "yellow".
//    Test by assigning a value of the new type.
// ======================================================

type Colors = "red" | "green" | "blue" | "yellow";

type ColorsWithoutYellow = Exclude<Colors, "yellow">;

const color1: ColorsWithoutYellow = "red";


// ======================================================
// 7) Use the same Colors union type from the previous question.
//    create a new type with only "red" and "blue".
//    Test by assigning a value of the new type.
// ======================================================

type RedBlueOnly = Extract<Colors, "red" | "blue">;

const color2: RedBlueOnly = "blue";


// ======================================================
// 8) Create a union type MaybeString = string | null | undefined.
//    create a new type without null or undefined.
//    Test by assigning a value of the new type.
// ======================================================

type MaybeString = string | null | undefined;

type CleanString = NonNullable<MaybeString>;

const text: CleanString = "Hello";


// ======================================================
// 9) create interface with function
// ======================================================

interface Calculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
}

const calc: Calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  }
};

console.log(calc.add(5, 3));
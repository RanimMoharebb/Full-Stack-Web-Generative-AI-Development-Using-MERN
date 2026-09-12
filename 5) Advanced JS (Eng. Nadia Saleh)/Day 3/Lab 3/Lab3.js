
/***********************
PART 1
Use Constructor function to create Shape Base Abstract Class which contains 
- color property
- PrintColor method 
- CalcArea method 
- Calcperimeter method  
***********************/
function Shape(color) 
{
  this.color = color;
}

Shape.prototype.printColor = function () 
{
  console.log("Color:", this.color);
};

Shape.prototype.calcArea = function () 
{
  return 0;
};

Shape.prototype.calcPerimeter = function () 
{
  return 0;
};


/***********************
- Define Rect Class Which inherits from Shape Abstract Class  
- Define Width and Height Properties for Rect Class  
 ***********************/
function Rect(width, height, color) 
{
  Shape.call(this, color); 
  this.width = width;
  this.height = height;

  Rect.count++;
}

Rect.count = 0;

Rect.getCount = function() 
{
  return Rect.count;
}

// prototype inheritance
Rect.prototype = Object.create(Shape.prototype);
Rect.prototype.constructor = Rect;

// override methods
Rect.prototype.calcArea = function () 
{
  return this.width * this.height;
};

Rect.prototype.calcPerimeter = function () 
{
  return 2 * (this.width + this.height);
};

Rect.prototype.printColor = function () 
{
  console.log("Rect Color:", this.color);
};


Rect.prototype.toString = function () 
{
  return "Rect -> Color: " + this.color + ", Area: " + this.calcArea() + ", Perimeter: " + this.calcPerimeter();
};



/***********************
Define Square Class Which inherits from Rect Class 
- override CalcArea , calcperimeter , printColor , toString 
which will display color , area and perimeter in rect and square classes  
************************/
function Square(side, color) 
{
  Rect.call(this, side, side, color);
  
  Square.count++;
}

Square.count = 0;

Square.getCount = function() 
{
  return Square.count;
}


// prototype inheritance
Square.prototype = Object.create(Rect.prototype);
Square.prototype.constructor = Square;

// override methods
Square.prototype.calcArea = function () 
{
  return this.width * this.width;
};

Square.prototype.calcPerimeter = function () 
{
  return 4 * this.width;
};

Square.prototype.printColor = function () 
{
  console.log("Square Color:", this.color);
};

Square.prototype.toString = function () 
{
  return `Square -> Color: ${this.color}, Area: ${this.calcArea()}, Perimeter: ${this.calcPerimeter()}`;
};


/***********************
create array object which will contains set of objects from rect and square classes 
then display it’s areas   
************************/
var r1 = new Rect(10, 5, "Red");
var r2 = new Rect(4, 6, "Blue");
var s1 = new Square(5, "Green");
var s2 = new Square(8, "Black");

// array of objects
var shapes = [r1, r2, s1, s2];

// display areas
shapes.forEach(function (shape) {
  console.log(shape.toString());
});

console.log("Rect objects:", Rect.count);
console.log("Square objects:", Square.count);









/***********************
 PART 2
 ***********************/
function Car(name, speed) 
{
  this.name = name;
  this.speed = speed;
}

Car.prototype.accelerate = function () 
{
  this.speed += 10;
  console.log(this.name + " speed is " + this.speed + " km/h");
};

Car.prototype.brake = function () 
{
  this.speed -= 5;
  console.log(this.name + " speed is " + this.speed + " km/h");
};



var car1 = new Car("BMW", 120);
var car2 = new Car("Mercedes", 95);

car1.accelerate();
car1.brake();
car1.accelerate();

car2.brake();
car2.accelerate();






/***********************
PART 3 
 ***********************/
function EV(name, speed, charge) 
{
  Car.call(this, name, speed);
  this.charge = charge;
}

// prototype inheritance
EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;

// chargeBattery method
EV.prototype.chargeBattery = function (chargeTo) 
{
  this.charge = chargeTo;
  console.log(this.name + " charged to " + this.charge + "%");
};

// override accelerate method
EV.prototype.accelerate = function () 
{
  this.speed += 20;
  this.charge -= 1;
  console.log(
    this.name +
      " going at " +
      this.speed +
      " km/h, with a charge of " +
      this.charge +
      "%"
  );
};



var tesla = new EV("Tesla", 120, 23);

tesla.accelerate();
tesla.brake();      
tesla.chargeBattery(90);
tesla.accelerate();

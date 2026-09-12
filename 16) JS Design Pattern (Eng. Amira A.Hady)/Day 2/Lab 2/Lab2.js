// Question 1  -> Observer Pattern
class Customer {
    constructor(name) {
        this.name = name;
    }

    update(product) {
        console.log(this.name + " received notification: New product -> " + product);
    }
}

class Store {
    constructor() {
        this.customers = [];
    }

    subscribe(customer) {
        this.customers.push(customer);
    }

    unsubscribe(customer) {
        this.customers = this.customers.filter(c => c !== customer);
    }

    addProduct(product) {
        console.log("\nStore added new product:", product);
        this.notify(product);
    }

    notify(product) {
        this.customers.forEach(customer => customer.update(product));
    }
}

const store = new Store();

const c1 = new Customer("Ranim");
const c2 = new Customer("Ali");

store.subscribe(c1);
store.subscribe(c2);

store.addProduct("iPhone 15");
store.addProduct("PlayStation 5");



// Question 2

class AttackStrategy {
    play() {
        console.log("Playing Attack Strategy");
    }
}

class DefenceStrategy {
    play() {
        console.log("Playing Defence Strategy");
    }
}

class MediumStrategy {
    play() {
        console.log("Playing Medium Strategy");
    }
}

class Game {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    play() {
        this.strategy.play();
    }
}

const game = new Game(new AttackStrategy());
game.play();

game.setStrategy(new DefenceStrategy());
game.play();

game.setStrategy(new MediumStrategy());
game.play();
class Person {
    #id;
    constructor(id, name, age) {
        //^prevent take new Instance from Person
        if (this.constructor.name == "Person")
            throw new Error("can not take instance from Person");
        this.Id = id;
        this.Name = name;
        this.Age = age;
    }
    set Id(v) {
        if (typeof v == "string")
            throw new Error("id must be Number");
        else
            this.#id = v;
    }
    get Id() {
        return this.#id;
    }
    toString() {
        return `Data ${this.Name} Age: ${this.Age}`;
    }
}

export default Person;
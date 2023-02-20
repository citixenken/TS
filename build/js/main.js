"use strict";
class Coder {
    constructor(name, music, age, lang = "TypeScript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const Dave = new Coder("Dave", "Rock and Roll", 56);
console.log(Dave.getAge());
// console.log(Dave.age);
// console.log(Dave.lang);
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
        // return `I write ${this.age}`;
    }
}
const Ken = new WebDev("Macbook", "Lisa", "Amapiano", 34);
console.log(Ken.getLang());
console.log(Ken.name);
console.log(Ken.music);
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Mike = new Guitarist("Mike", "guitar");
console.log(Mike.play("riffs"));
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");
console.log(Peeps.count);
console.log(`There are ${Peeps.getCount()} peeps!`);
console.log(Steve.name);
console.log(John.name);
console.log(Amy.name);
console.log(Steve.id);
console.log(Amy.id);
console.log(John.id);
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) &&
            value.every((elem) => typeof elem === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Param is not an array of strings...");
    }
}
const MyBands = new Bands();
MyBands.data = ["Neil Young", "Led Zeppelin"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "Jimmy Page", "John Lennon"];
console.log(MyBands.data);

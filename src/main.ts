class Coder {
  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "TypeScript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `Hello, I'm ${this.age}`;
  }
}

const Dave = new Coder("Dave", "Rock and Roll", 56);
console.log(Dave.getAge());
// console.log(Dave.age);
// console.log(Dave.lang);

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  public getLang() {
    return `I write ${this.lang}`;
    // return `I write ${this.age}`;
  }
}
const Ken = new WebDev("Macbook", "Lisa", "Amapiano", 34);
console.log(Ken.getLang());
console.log(Ken.name);
console.log(Ken.music);
// console.log(Ken.lang);
// console.log(Ken.age);

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const Mike = new Guitarist("Mike", "guitar");
console.log(Mike.play("riffs"));

class Peeps {
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }
  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

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
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }
  public set data(value: string[]) {
    if (
      Array.isArray(value) &&
      value.every((elem) => typeof elem === "string")
    ) {
      this.dataState = value;
      return;
    } else throw new Error("Param is not an array of strings...");
  }
}

const MyBands = new Bands();
MyBands.data = ["Neil Young", "Led Zeppelin"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "Jimmy Page", "John Lennon"];
console.log(MyBands.data);

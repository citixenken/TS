let stringArr: string[];

let planets: (string | number)[];

let mixedData: (string | boolean | number)[];

let test = [];

let bands: string[] = [];

stringArr = ["Alpha", "Beta", "Gamma"];
planets = ["Mars", 3, "Saturn"];
mixedData = ["CVT", 1984, false];

planets = stringArr;
bands.unshift("Metallica");

//tuple
let myTuple: [string, number, boolean] = ["Oaxaca", 9, false];

let mixedArray = ["Jim", 7, true];

mixedArray = myTuple;

// myTuple = mixedArray; ❌

// objects
let myObj: object;
myObj = [];
console.log(typeof myObj);
myObj = stringArr;
myObj = {};

const userData = {
  name: "John",
  age: 16,
};

// type v interface
// type Guitarist = {
//   name: string;
//   active?: boolean;
//   albums: (string | number)[];
// };

interface Guitarist {
  name?: string;
  active?: boolean;
  albums?: (string | number)[];
}

let evh: Guitarist;
let jp: Guitarist;

evh = { name: "Eddie van Halen", active: false, albums: ["OU812", 1984, 5150] };
jp = { albums: ["I", "II", "IV"] };

evh = jp;

const welcomeGuitarist = (guitarist: Guitarist) => {
  //   return `Welcome, ${guitarist.name?.toUpperCase()}!`;
  if (guitarist.name) {
    return `Welcome, ${guitarist.name.toUpperCase()}!`;
  }
  return "Hello!";
};

console.log(welcomeGuitarist(evh));

// enums
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime";

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.D);

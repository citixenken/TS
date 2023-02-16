"use strict";
let stringArr;
let planets;
let mixedData;
let test = [];
let bands = [];
stringArr = ["Alpha", "Beta", "Gamma"];
planets = ["Mars", 3, "Saturn"];
mixedData = ["CVT", 1984, false];
planets = stringArr;
bands.unshift("Metallica");
//tuple
let myTuple = ["Oaxaca", 9, false];
let mixedArray = ["Jim", 7, true];
mixedArray = myTuple;
// myTuple = mixedArray; ❌
// objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = stringArr;
myObj = {};
const userData = {
    name: "John",
    age: 16,
};
let evh;
let jp;
evh = { name: "Eddie van Halen", active: false, albums: ["OU812", 1984, 5150] };
jp = { albums: ["I", "II", "IV"] };
evh = jp;
const welcomeGuitarist = (guitarist) => {
    //   return `Welcome, ${guitarist.name?.toUpperCase()}!`;
    if (guitarist.name) {
        return `Welcome, ${guitarist.name.toUpperCase()}!`;
    }
    return "Hello!";
};
console.log(welcomeGuitarist(evh));
// enums
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime";
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.D);

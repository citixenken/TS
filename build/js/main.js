"use strict";
// Type Aliases
// interface PostID = stringOrNumber; ❌
//Literal types
let myName;
// 👆const myName = "CitixenKen";
let userName;
// Functions
const add = (a, b) => a + b;
// has no return value
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hey!");
logMsg(add(5, 12));
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction {
//   (a: number, b: number): number;
// }
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(3, 5));
// optional params => should be last on list
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
// Default param value
const sumAll = (a, b, c = 7) => {
    return a + b + c;
};
logMsg(addAll(1, 2));
logMsg(sumAll(1, 2));
// Rest params => should come at the end
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr, 0);
};
logMsg(total(100, 2, 3, 4));
// never => for errors and infinite loops
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let x = 1;
    while (true) {
        x++;
        if (x > 100)
            break;
    }
};
// custom type guard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
// use of the never type
const numberOrString = (value) => {
    if (typeof value === "string")
        return "String";
    if (isNumber(value))
        return "Number";
    return createError("This should never happen...");
};
logMsg(numberOrString(7));

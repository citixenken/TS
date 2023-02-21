"use strict";
const echo = (arg) => arg;
// console.log(echo(42));
const isObj = (arg) => {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
console.log(isObj(true)); //false
console.log(isObj("John")); //false
console.log(isObj([7, 69, 420])); //false
console.log(isObj({ name: "Saf" })); //true
console.log(isObj(null)); //false
/***************************************************************************/

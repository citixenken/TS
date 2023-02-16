"use strict";
let a = "hello";
let b = a;
let c = a;
let d = "world";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b; // '' coerce into string
};
let myWord = addOrConcat(5, 2, "concat");
let myVal = addOrConcat(5, 2, "add");
console.log(myWord);
console.log(myVal);
// double casting OR forced casting
let x = 23;
console.log(x);
// assertions in the DOM
const img = document.querySelector("img"); //non-null assertion
const myImg = document.getElementById("#img");
const nextImg = document.getElementById("#img"); // this wouldn't work in TSX files!!!
// img.src;
// myImg.src;
// nextImg.src;

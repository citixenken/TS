type One = string;
type Two = string | number;
type Three = "hello";

let a: One = "hello";
let b = a as Two;
let c = a as Three;

let d = <One>"world";
let e = <string | number>"world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b; // '' coerce into string
};

let myWord: string = addOrConcat(5, 2, "concat") as string;
let myVal: number = addOrConcat(5, 2, "add") as number;

console.log(myWord);
console.log(myVal);

// double casting OR forced casting
let x = 23 as unknown as string;
console.log(x);

// assertions in the DOM
const img = document.querySelector("img")!; //non-null assertion
const myImg = document.getElementById("#img") as HTMLImageElement;
const nextImg = <HTMLImageElement>document.getElementById("#img"); // this wouldn't work in TSX files!!!

// img.src;
// myImg.src;
// nextImg.src;

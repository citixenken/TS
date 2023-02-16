// Type Aliases

type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
};

type UserID = stringOrNumber;
// interface PostID = stringOrNumber; ❌

//Literal types

let myName: "CitixenKen";

// 👆const myName = "CitixenKen";

let userName: "Mary" | "John" | "Sue";

// Functions

const add = (a: number, b: number): number => a + b;

// has no return value
const logMsg = (message: any): void => {
  console.log(message);
};

logMsg("Hey!");
logMsg(add(5, 12));

let subtract = function (c: number, d: number): number {
  return c - d;
};

type mathFunction = (a: number, b: number) => number;
// interface mathFunction {
//   (a: number, b: number): number;
// }
let multiply: mathFunction = function (c, d) {
  return c * d;
};

logMsg(multiply(3, 5));

// optional params => should be last on list
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

// Default param value
const sumAll = (a: number, b: number, c: number = 7): number => {
  return a + b + c;
};
logMsg(addAll(1, 2));
logMsg(sumAll(1, 2));

// Rest params => should come at the end
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr, 0);
};

logMsg(total(100, 2, 3, 4));

// never => for errors and infinite loops
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const infinite = () => {
  let x: number = 1;
  while (true) {
    x++;
    if (x > 100) break;
  }
};
// custom type guard
const isNumber = (value: number): boolean => {
  return typeof value === "number" ? true : false;
};

// use of the never type
const numberOrString = (value: stringOrNumber): string => {
  if (typeof value === "string") return "String";
  if (isNumber(value)) return "Number";
  return createError("This should never happen...");
};

logMsg(numberOrString(7));

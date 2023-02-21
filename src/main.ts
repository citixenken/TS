const echo = <T>(arg: T): T => arg;

// console.log(echo(42));

const isObj = <T>(arg: T) => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

console.log(isObj(true)); //false
console.log(isObj("John")); //false
console.log(isObj([7, 69, 420])); //false
console.log(isObj({ name: "Saf" })); //true
console.log(isObj(null)); //false

/***************************************************************************/

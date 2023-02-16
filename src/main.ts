let myName: string = "citixenken";
let meaningOfLife: number;
let isLoading: boolean;
let album: any;

//union type
let track: string | number;
let isActive: number | boolean | string;

// regex
let re: RegExp;

myName = "John Wick";
meaningOfLife = 42;
isLoading = false;
album = true;
track = 1;
isActive = 0;
re = /\w+/g;

const sum = (a: number, b: number) => {
  return a + b;
};

console.log(sum(6, 12));

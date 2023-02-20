// index signatures
interface TransactionObj {
  readonly [index: string]: number;

  Pizza: number;
  Books: number;
  Job: number;
}

// interface TransactionObj {
//   readonly [index: string]: number;
// }

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
};

// console.log(`Accessibility: ${(todaysTransactions.Books = 40)}`);
console.log(`Accessibility: ${todaysTransactions.Books}`);

let prop: string = "Books";

console.log(`Using index signatures: ${todaysTransactions[prop]}`);

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
};

console.log(todaysNet(todaysTransactions));
console.log(todaysTransactions["Jeff"]); //undefined

interface Student {
  // [key: string]: any;
  // [key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: "Duke",
  GPA: 3.9,
  classes: [150, 200],
};

// console.log(student.grade);

// for (const key in student) {
//   console.log(`${key}: ${student[key]}`);
// }

////////////////////////////////////////////////////////////////

for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`);
}
////////////////////////////////////////////////////////////////

Object.keys(student).map((key) => {
  console.log(student[key as keyof typeof student]);
});
////////////////////////////////////////////////////////////////

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
};

logStudentKey(student, "name");
////////////////////////////////////////////////////////////////

// interface Incomes {
//   [key: string]: number;
// }

type Streams = "salary" | "bonus" | "sidehustle";

type Incomes = Record<Streams, number>;

const monthlyIncomes: Incomes = {
  salary: 420,
  bonus: 69,
  sidehustle: 1774,
};

for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes]);
}

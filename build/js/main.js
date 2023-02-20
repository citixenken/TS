"use strict";
// interface TransactionObj {
//   readonly [index: string]: number;
// }
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
// console.log(`Accessibility: ${(todaysTransactions.Books = 40)}`);
console.log(`Accessibility: ${todaysTransactions.Books}`);
let prop = "Books";
console.log(`Using index signatures: ${todaysTransactions[prop]}`);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
console.log(todaysTransactions["Jeff"]); //undefined
const student = {
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
    console.log(`${key}: ${student[key]}`);
}
////////////////////////////////////////////////////////////////
Object.keys(student).map((key) => {
    console.log(student[key]);
});
////////////////////////////////////////////////////////////////
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, "name");
const monthlyIncomes = {
    salary: 420,
    bonus: 69,
    sidehustle: 1774,
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}

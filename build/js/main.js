"use strict";
// partial
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "compsco069",
    title: "Final Project",
    grade: 0,
};
console.log(updateAssignment(assign1, { grade: 69 }));
const assignGraded = updateAssignment(assign1, { grade: 69 });
// required and readonly
const recordAssignment = (assign) => {
    // send to DB
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
//record
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};
const finalGrades = {
    Sara: "U",
    Kelly: "B",
};
const score = {
    studentId: "Maverick",
    grade: 76,
};
const preview = {
    studentId: "Maverick02",
    title: "End of Semester Project",
};

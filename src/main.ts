// partial

interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: "compsco069",
  title: "Final Project",
  grade: 0,
};

console.log(updateAssignment(assign1, { grade: 69 }));
const assignGraded: Assignment = updateAssignment(assign1, { grade: 69 });

// required and readonly
const recordAssignment = (assign: Required<Assignment>): Assignment => {
  // send to DB
  return assign;
};
const assignVerified: Readonly<Assignment> = {
  ...assignGraded,
  verified: true,
};

//record
const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};

type Students = "Sara" | "Kelly";

type LetterGrades = "A" | "B" | "C" | "D" | "U";

const finalGrades: Record<Students, LetterGrades> = {
  Sara: "U",
  Kelly: "B",
};

// pick and omit

type AssignResult = Pick<Assignment, "studentId" | "grade">;

const score: AssignResult = {
  studentId: "Maverick",
  grade: 76,
};
type AssignPreview = Omit<Assignment, "grade" | "verified">;

const preview: AssignPreview = {
  studentId: "Maverick02",
  title: "End of Semester Project",
};

// exclude and extract
type adjustedGrade = Exclude<LetterGrades, "U">;
type highGrades = Extract<LetterGrades, "A" | "B">;

// Non-nullable
type AllPossibleUsers = "Monty" | "Sienna" | null | undefined;

type NamesOnly = NonNullable<AllPossibleUsers>;

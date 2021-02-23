let studentNumber = (15);
let mentorNumber = (8);
let percentageOfTotalMentor = mentorNumber * 100 / (studentNumber + mentorNumber);
let percentageOfTotalStudent = studentNumber * 100 / (studentNumber + mentorNumber);

console.log (`Percentage students: ${Math.round(percentageOfTotalStudent)}%`);
console.log (`Percentage mentors: ${Math.round(percentageOfTotalMentor)}%`);

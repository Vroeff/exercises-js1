/*

function calculationMentors (){
    let studentNumber = (15);
    let mentorNumber = (8);
    let percentageOfTotalMentor = mentorNumber * 100 / (studentNumber + mentorNumber);
return percentageOfTotalMentor 
}

function calculationStudent (){
    let studentNumber = (15);
    let mentorNumber = (8);
    let percentageOfTotalStudent = studentNumber * 100 / (studentNumber + mentorNumber);
return percentageOfTotalStudent 
}

function messageStudent (){
    return (`Percentage students: ${Math.round(calculationStudent)}%`);
  }

function messageMentors (){
    return (`Percentage mentors: ${Math.round(calculationMentors)}%`);
}

let resultMentors = messageMentors();
let resultStudent = messageStudent();

console.log (resultMentors);
console.log (resultStudent);

*/

function percentage(students, mentors){
    let total = students + mentors;
    let pStudents = Math.round(students / total * 100);
    let pMentors = Math.round(mentors / total * 100);
    console.log(pStudents, pMentors);
}

percentage (400, 75)

function message (){
    
}
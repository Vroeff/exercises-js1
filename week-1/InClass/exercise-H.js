// this function calculates how old you are.
function total(name, dateOfBirth){
    let birthyear = 2021 - dateOfBirth;
    return "Hello " + name + " you are " + birthyear + " years old";
}

let calculation = total("Guido", 1986);

console.log (calculation);


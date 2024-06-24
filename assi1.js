// Question 1: Data Types and Variables

let String = "Hello, World!"; 
let Number = 42; 
let Boolean = true; 
let Object = { name: "Alice", age: 30 }; 
let Array = [1, 2, 3, 4, 5]; 

console.log("Value:", String, "Type:", typeof String);
console.log("Value:", Number, "Type:", typeof Number);
console.log("Value:", Boolean, "Type:", typeof Boolean);
console.log("Value:", Object, "Type:", typeof Object);
console.log("Value:", Array, "Type:", typeof Array);

// Question 2: Operators and Expressions


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the first number: ', (firstInput) => {
    rl.question('Enter the second number: ', (secondInput) => {
        const num1 = parseFloat(firstInput);
        const num2 = parseFloat(secondInput);

        console.log("Addition:", num1 + num2);
        console.log("Subtraction:", num1 - num2);
        console.log("Multiplication:", num1 * num2);
        console.log("Division:", num1 / num2);

        rl.close();
    });
});

// Question 3: Conditional Statements

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number: ', (input) => {
    let number = Number(input);

    if (number > 0) {
        console.log("The number is positive.");
    } else if (number < 0) {
        console.log("The number is negative.");
    } else {
        console.log("The number is zero.");
    }

    rl.close();
});

// Question 4: Control Flow Keywords


for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);
}


// Question 5: Combining Concepts
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your grade (0-100): ', (input) => {
    let grade = Number(input);

    let letterGrade;
    if (grade >= 90 && grade <= 100) {
        letterGrade = 'A';
    } else if (grade >= 80 && grade < 90) {
        letterGrade = 'B';
    } else if (grade >= 70 && grade < 80) {
        letterGrade = 'C';
    } else if (grade >= 60 && grade < 70) {
        letterGrade = 'D';
    } else if (grade >= 0 && grade < 60) {
        letterGrade = 'F';
    } else {
        letterGrade = 'Invalid grade';
    }

    console.log("Letter Grade:", letterGrade);

    rl.close();
});

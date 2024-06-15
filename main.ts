#!/usr/bin/env node
 
import inquirer from "inquirer"
// 1) computer will generate a random number

// 2) user input for guessing number

// 3) compare user input with computer generate number and show result

const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber)
const answers = await inquirer.prompt([
    {
    
    name: "userGuessedNumber",
    type: "number",
    massage:"please guess a number"
},
]);

if(answers.userGuessedNumber === randomNumber){
    console.log("Conratulation! you guessed number 1-6")
} else{
   console.log("You guessed wrong number");
}
 

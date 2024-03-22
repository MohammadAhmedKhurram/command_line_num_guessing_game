#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate a random number - Done
// 2) User input for guessing number - Done
// 3) Compare user input with computer generated number and show result - Done
const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log("Welcome to a world of hidden numbers!");
const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Your challenge is to guess a number from 1 through 10.",
    },
]);
if (answers.userGuessNumber == randomNumber) {
    console.log("Perfect guess! You've chosen the right number.");
}
else {
    console.log("Your guess missed the mark with that number.");
}

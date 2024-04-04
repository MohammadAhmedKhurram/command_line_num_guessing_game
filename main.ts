#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const randomNumber = Math.floor(Math.random() * 5 + 1);
const randomNumber2 = Math.floor(Math.random() * 8 + 1);
const randomNumber3 = Math.floor(Math.random() * 10 + 1);


console.log(chalk.yellow("Welcome to a world of hidden numbers!"));

const difficulty = await inquirer.prompt([
    {
        type: "list",
        message: "Pls choose a difficulty level!",
        name: "level",
        choices: ["Easy", "Normal", "Hard"],
    }
]);

if (difficulty.level === "Easy"){
    const input = await inquirer.prompt([
        {
          type: "input",
          message: "Your challenge is to guess a number from 1 through 5.",
          name: "easy",
          filter: (val) => Number(val) 

        }
    ]);

    if (input.easy === randomNumber){
        console.log(chalk.green("Perfect guess! You've chosen the right number."));
    }
    else {
        console.log(chalk.red("Your guess missed the mark. Try Again!"));
        console.log(chalk.green(`The number was ${randomNumber}`));

    }
}

if (difficulty.level === "Normal"){
    const input2 = await inquirer.prompt([
        {
          type: "input",
          message: "Your challenge is to guess a number from 1 through 8.",
          name: "normal", 
          filter: (val) => Number(val) 

        }
    ]);

    if (input2.normal === randomNumber2){
        console.log(chalk.green("Perfect guess! You've chosen the right number."));
    }
    else {
        console.log(chalk.red("Your guess missed the mark. Try Again!"));
        console.log(chalk.green(`The number was ${randomNumber2}`));
    }
}

if (difficulty.level === "Hard"){
    const input3 = await inquirer.prompt([
        {
          type: "input",
          message: "Your challenge is to guess a number from 1 through 10.",
          name: "hard",
          filter: (val) => Number(val) 
        }
    ]);

    if (input3.hard === randomNumber3){
        console.log(chalk.green("Perfect guess! You've chosen the right number."));
    }
    else {
        console.log(chalk.red("Your guess missed the mark. Try Again!"));
        console.log(chalk.green(`The number was ${randomNumber3}`));

    }
}


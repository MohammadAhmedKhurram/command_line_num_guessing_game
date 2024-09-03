#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue("Welcome to the hidden world!"));

const input1 = await inquirer.prompt({
    type: "list",
    message: "Choose a difficulty level...",
    name: "difficultyLevel",
    choices: ["Simple", "Standard", "Difficult"]
});

let condition = true;
while (condition) {
    if (input1.difficultyLevel == "Simple") {
        const randomNumber1: number = Math.floor(Math.random() * 5 + 1);
        const input2 = await inquirer.prompt({
            type: "number",
            message: "Your challenge is to guess a number from 1 to 5",
            name: "easy"
        });

        if (input2.easy === randomNumber1) {
            console.log(chalk.green("Correct guess!"));
            condition = false;
        } else {
            console.log(chalk.red("Wrong guess!"));
            console.log(chalk.yellow("The number was"), chalk.bold.greenBright(`${randomNumber1} .`));
        }
    }

    if (input1.difficultyLevel == "Standard") {
        const randomNumber2: number = Math.floor(Math.random() * 8 + 1);
        const input3 = await inquirer.prompt({
            type: "number",
            message: "Your challenge is to guess a number from 1 to 8",
            name: "normal"
        });

        if (input3.normal === randomNumber2) {
            console.log(chalk.green("Correct guess!"));
            condition = false;
        } else {
            console.log(chalk.red("Wrong guess"));
            console.log(chalk.yellow("The number was"), chalk.bold.greenBright(`${randomNumber2} .`));
        }
    }

    if (input1.difficultyLevel == "Difficult") {
        const randomNumber3: number = Math.floor(Math.random() * 10 + 1);
        const input4 = await inquirer.prompt({
            type: "number",
            message: "Your challenge is to guess a number from 1 to 10",
            name: "hard"
        });

        if (input4.hard === randomNumber3) {
            console.log(chalk.green("Correct guess!"));
            condition = false;
        } else {
            console.log(chalk.red("Wrong guess"));
            console.log(chalk.yellow("The number was"), chalk.bold.greenBright(`${randomNumber3} .`));
        }
    }
}

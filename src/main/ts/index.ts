import { Square } from "./lib/square.js";
import { questionsArray } from "./lib/prompt/question.js";
import inquirer from "inquirer";

const square = new Square(300, "green", {content: "XXX", color: "black"});

console.log(square);

// const answers = await inquirer.prompt(questionsArray);

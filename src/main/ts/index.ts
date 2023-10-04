import { Square } from "./lib/square.js";
import { questionsArray } from "./lib/prompt/question.js";
import inquirer from "inquirer";

const square = new Square(300, "green", {content: "XXX", size: 60, color: "black"});

console.log(square.xml);

// const answers = await inquirer.prompt(questionsArray);

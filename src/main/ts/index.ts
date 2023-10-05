import { questionsArray, editAnswersQuestion, confirmQuestion } from "./lib/prompt/question.js";
import { Shape, ShapeType } from "./lib/shape.js";
import { create300x200Square } from "./lib/square.js";
import { create300x200Circle } from "./lib/circle.js";
import { create300x200Triangle } from "./lib/triangle.js";
import inquirer, { Answers } from "inquirer";
import { resolve as resolvePath } from "node:path";
import { writeFile } from "node:fs";

let answers = await inquirer.prompt(questionsArray);

// Loop to prompt for input until user confirms settings for generated SVG file are correct.
while(answers.confirm === false)
{
    // Delete confirm answer before overwriting it.
    delete answers.confirm;

    // Get array of answer names user wants to edit.
    const answersToEdit: readonly Answers[] = await inquirer.prompt(editAnswersQuestion, answers)
        .then(answersWithAnswersToEdit => answersWithAnswersToEdit.answersToEdit as readonly Answers[])
        .catch(err => {throw err;});

    // If there are answers user wants to edit...
    if (answersToEdit.length !== 0)
    {
        // Prompt user with questions they want to edit.
        let newAnswers = await inquirer.prompt(answersToEdit.map(answerToEdit => questionsArray.find(question => answerToEdit === question.name))).catch(err => {throw err});

        // Update answers with newly updated answers
        answers = {...answers, ...newAnswers};
    }

    // Prompt user for confirmation that new settings for generated SVG are correct.
    answers = await inquirer.prompt(confirmQuestion, answers).catch(err => {throw err;});
}

let shape: Shape;

switch (answers.shape) {
    case ShapeType.SQUARE:
        shape = create300x200Square(answers.shapeColor, answers.textContent, answers.textColor);
        break;
    case ShapeType.CIRCLE:
        shape = create300x200Circle(answers.shapeColor, answers.textContent, answers.textColor);
        break;
    case ShapeType.TRIANGLE:
        shape = create300x200Triangle(answers.shapeColor, answers.textContent, answers.textColor);
        break;
    default:
        throw new Error(`Invalid shape type: "${answers.shape}"`);
}

const outputFilePath = resolvePath("./logo.svg");

writeFile(outputFilePath, shape.xml, (err) => {
    if (err) { throw err; }
    console.log(`Generated ${outputFilePath}`);
});

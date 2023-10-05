import { ShapeType } from "../shape.js";
import { isColor } from "./validate-input.js";
import { type Answers } from "inquirer";

const PREFIX = ">>>";
const SUFFIX = ":";

const toString = (arg: unknown) => typeof arg === "string" ? `"${arg}"` : arg;

const textContentQuestion: Readonly<Answers> = Object.freeze({
    type: "input",
    name: "textContent",
    message: "Text",
    validate: (input: string) => new Promise((resolve) => {
        if (input.length > 3)
        {
            resolve("Text must be 0 to 3 characters.");
            return;
        }

        resolve(true);
    }),
    prefix: PREFIX,
    suffix: SUFFIX,
});

const textColorQuestion: Readonly<Answers> = Object.freeze({
    type: "input",
    name: "textColor",
    message: "Text color",
    filter: (input: string) => new Promise((resolve) => {
        const trimmedInput = input.trim();
        resolve(trimmedInput.startsWith("#") ? trimmedInput.toUpperCase() : trimmedInput.toLowerCase());
    }),
    validate: (input: string) => isColor("text", input),
    prefix: PREFIX,
    suffix: SUFFIX,
});

const shapeQuestion: Readonly<Answers> = Object.freeze({
    type: "list",
    name: "shape",
    message: "Shape",
    choices: () => Promise.resolve(Object.values(ShapeType)),
    prefix: PREFIX,
    suffix: SUFFIX,
});

const shapeColorQuestion: Readonly<Answers> = Object.freeze({
    type: "input",
    name: "shapeColor",
    message: "Shape color",
    filter: (input: string) => new Promise((resolve) => {
        const trimmedInput = input.trim();
        resolve(trimmedInput.startsWith("#") ? trimmedInput.toUpperCase() : trimmedInput.toLowerCase());
    }),
    validate: (input: string) => isColor("shape", input),
    prefix: PREFIX,
    suffix: SUFFIX,
});

export const confirmQuestion = Object.freeze({
    type: "confirm",
    name: "confirm",
    message: (answers: Record<string, any>) => {
        const answersString = Object.entries(answers).filter(entry => entry[1].length !== 0).map(entry => `${entry[0]}: ${toString(entry[1])}`).join("\n");
        return `\n${answersString}\n\nCreate SVG with the above properties?`;
    },
    prefix: "",
    suffix: SUFFIX
 });

export const question = Object.freeze({
    textContent: textContentQuestion,
    textColor: textColorQuestion,
    shape: shapeQuestion,
    shapeColor: shapeColorQuestion,
    confirm: confirmQuestion
});

export const editAnswersQuestion = Object.freeze({
    type: "checkbox",
    name: "answersToEdit",
    message: "Choose properties to edit",
    when: (answers: Record<string, unknown>) => Promise.resolve(answers.confirm !== true),
    choices: (answers: Record<string, unknown>) => Promise.resolve(
        Object.entries(answers).map( (answerEntry) => ({
            name: `${answerEntry[0]}: ${toString(answerEntry[1])}`,
            value: answerEntry[0]
        }))
    ),
    prefix: PREFIX,
    suffix: SUFFIX
});

export const questionsArray: readonly Answers[] = Object.freeze(Object.values(question));

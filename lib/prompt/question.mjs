/**
 * @module question
 */
import { ShapeType } from "../shape/shape-type.mjs";
import { isColor } from "./validate-input.mjs";
const PREFIX = ">>>";
const SUFFIX = ":";
const toString = (arg) => typeof arg === "string" ? `"${arg}"` : arg;
/**
 * Inquirer question to set the text content of the generated SVG.
 */
const textContentQuestion = Object.freeze({
    type: "input",
    name: "textContent",
    message: "Text",
    validate: (input) => Promise.resolve(input.length > 3 ? "Text must be 0 to 3 characters." : true),
    prefix: PREFIX,
    suffix: SUFFIX,
});
/**
 * Inquirer question to set the text color of the generated SVG.
 */
const textColorQuestion = Object.freeze({
    type: "input",
    name: "textColor",
    message: "Text color",
    filter: (input) => new Promise((resolve) => {
        const trimmedInput = input.trim();
        resolve(trimmedInput.startsWith("#") ? trimmedInput.toUpperCase() : trimmedInput.toLowerCase());
    }),
    validate: (input) => isColor("text", input),
    prefix: PREFIX,
    suffix: SUFFIX,
});
/**
 * Inquirer question to set the shape of the generated SVG.
 */
const shapeQuestion = Object.freeze({
    type: "list",
    name: "shape",
    message: "Shape",
    choices: () => Promise.resolve(Object.values(ShapeType)),
    prefix: PREFIX,
    suffix: SUFFIX,
});
/**
 * Inquirer question to set the shape fill color of the generated SVG.
 */
const shapeColorQuestion = Object.freeze({
    type: "input",
    name: "shapeColor",
    message: "Shape color",
    filter: (input) => new Promise((resolve) => {
        const trimmedInput = input.trim();
        resolve(trimmedInput.startsWith("#") ? trimmedInput.toUpperCase() : trimmedInput.toLowerCase());
    }),
    validate: (input) => isColor("shape", input),
    prefix: PREFIX,
    suffix: SUFFIX,
});
/**
 * Inquirer question to confirm properties for SVG that's going to be generated.
 */
export const confirmQuestion = Object.freeze({
    type: "confirm",
    name: "confirm",
    message: (answers) => {
        const answersString = Object.entries(answers).filter(entry => entry[1].length !== 0).map(entry => `${entry[0]}: ${toString(entry[1])}`).join("\n");
        return `\n${answersString}\n\nCreate SVG with the above properties?`;
    },
    prefix: "",
    suffix: SUFFIX
});
/**
 * All Inquirer questions for getting the info needed to generate an SVG, except
 * the {@link answersToEditQuestion} question.
 */
export const question = Object.freeze({
    textContent: textContentQuestion,
    textColor: textColorQuestion,
    shape: shapeQuestion,
    shapeColor: shapeColorQuestion,
    confirm: confirmQuestion
});
/**
 * Inquirer question to confirm that all other questions are correct.
 */
export const answersToEditQuestion = Object.freeze({
    type: "checkbox",
    name: "answersToEdit",
    message: "Choose properties to edit",
    when: (answers) => Promise.resolve(answers.confirm !== true),
    choices: (answers) => Promise.resolve(Object.entries(answers).map((answerEntry) => ({
        name: `${answerEntry[0]}: ${toString(answerEntry[1])}`,
        value: answerEntry[0]
    }))),
    prefix: PREFIX,
    suffix: SUFFIX
});
/**
 * Array of all Inquirer questions for SVG generator prompts except for {@link answersToEditQuestion}.
 */
export const questionsArray = Object.freeze(Object.values(question));

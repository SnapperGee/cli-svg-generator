/**
 * @module question
 */

import { ShapeType } from "../shape.js";
import { isColor } from "./validate-input.js";
import { type Answers } from "inquirer";

const PREFIX = ">>>";
const SUFFIX = ":";

const toString = (arg: unknown) => typeof arg === "string" ? `"${arg}"` : arg;

/**
 * Inquirer question to set the text content of the generated SVG.
 */
const textContentQuestion: Readonly<Answers> = Object.freeze({
    type: "input",
    name: "textContent",
    message: "Text",
    validate: (input: string) => Promise.resolve(input.length > 3 ? "Text must be 0 to 3 characters." : true),
    prefix: PREFIX,
    suffix: SUFFIX,
});

/**
 * Inquirer question to set the text color of the generated SVG.
 */
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

/**
 * Inquirer question to set the shape of the generated SVG.
 */
const shapeQuestion: Readonly<Answers> = Object.freeze({
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

/**
 * Inquirer question to confirm properties for SVG that's going to be generated.
 */
export const confirmQuestion: Readonly<Answers> = Object.freeze({
    type: "confirm",
    name: "confirm",
    message: (answers: Record<string, any>) => {
        const answersString = Object.entries(answers).filter(entry => entry[1].length !== 0).map(entry => `${entry[0]}: ${toString(entry[1])}`).join("\n");
        return `\n${answersString}\n\nCreate SVG with the above properties?`;
    },
    prefix: "",
    suffix: SUFFIX
 });

/**
 * All Inquirer questions for getting the info needed to generate an SVG, except
 * the {@link editAnswersQuestion} question.
 */
export const question: Record<"textContent" | "textColor" | "shape" | "shapeColor" | "confirm", Readonly<Answers>> = Object.freeze({
    textContent: textContentQuestion,
    textColor: textColorQuestion,
    shape: shapeQuestion,
    shapeColor: shapeColorQuestion,
    confirm: confirmQuestion
});

/**
 * Inquirer question to confirm that all other questions are correct.
 */
export const editAnswersQuestion: Readonly<Answers> = Object.freeze({
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

/**
 * Array of all Inquirer questions for SVG generator prompts except for {@link editAnswersQuestion}.
 */
export const questionsArray: readonly Answers[] = Object.freeze(Object.values(question));

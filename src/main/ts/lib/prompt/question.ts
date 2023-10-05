import { ShapeType } from "../shape.js";
import { isNonNegativeNumber, isColor } from "./validate-input.js";
import { type Answers } from "inquirer";
import { resolve as resolvePath } from "node:path";
import { existsSync, lstat } from "node:fs";

const PREFIX = ">>>";
const SUFFIX = ":";

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

const textSizeQuestion: Readonly<Answers> = Object.freeze({
    type: "input",
    name: "textSize",
    message: "Text size",
    validate: (input: string) => isNonNegativeNumber(input),
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

const shapeSizeQuestion: Readonly<Answers> = Object.freeze({
    type: "input",
    name: "shapeSize",
    message: "Shape size",
    validate: (input: string) => isNonNegativeNumber(input),
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

export const question = Object.freeze({
    textContent: textContentQuestion,
    textSize: textSizeQuestion,
    textColor: textColorQuestion,
    shape: shapeQuestion,
    shapeSize: shapeSizeQuestion,
    shapeColor: shapeColorQuestion
});

export const questionsArray: readonly Answers[] = Object.freeze(Object.values(question));

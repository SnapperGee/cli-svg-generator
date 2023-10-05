import { colorNames } from "./color.js";
import { ShapeType } from "../shape.js";
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

const textColorQuestion: Readonly<Answers> = Object.freeze({
    type: "input",
    name: "textColor",
    message: "Text color",
    filter: (input: string) => new Promise((resolve) => {
        const trimmedInput = input.trim();
        resolve(trimmedInput.startsWith("#") ? trimmedInput.toUpperCase() : trimmedInput.toLowerCase());
    }),
    validate: (input: string) => new Promise((resolve) => {
        if (input.length === 0)
        {
            resolve("A text color name or hex value is required.");
            return;
        }

        if (input.startsWith("#") && input.length > 7)
        {
            resolve("Hex value cannot consist of more than 7 characters (including leading hashtag symbol).");
            return;
        }

        if ( ! input.startsWith("#") && ! colorNames.includes(input))
        {
            resolve(`Unrecognized color: "${input}". Use a hex value with a leading '#' character to use a custom color.`);
            return;
        }

        resolve(true);
    }),
    prefix: PREFIX,
    suffix: SUFFIX,
});

const shapeQuestion: Readonly<Answers> = Object.freeze({
    type: "list",
    name: "shape",
    message: "Choose SVG shape",
    choices: () => Promise.resolve(Object.values(ShapeType)),
    prefix: PREFIX,
    suffix: SUFFIX,
});

export const question = Object.freeze({
    shape: shapeQuestion,
    textContent: textContentQuestion,
    textColor: textColorQuestion
});

export const questionsArray: readonly Answers[] = Object.freeze(Object.values(question));

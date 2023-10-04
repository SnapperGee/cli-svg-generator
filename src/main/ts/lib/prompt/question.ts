import inquirer from "inquirer";

const PREFIX = ">>>";
const SUFFIX = ":";
const BLANK_INPUT_MSG = "";

const textQuestion = Object.freeze({
    type: "input",
    name: "title",
    message: "Title",
    filter: (input: string) => Promise.resolve(input.trim()),
    validate: (input: string) => Promise.resolve(input.length <= 3 || "Text must be 0 to 3 characters."),
    prefix: PREFIX,
    suffix: SUFFIX
});

import { colorNames } from "./color.js";

export const isNonNegativeNumber = (input: string): Promise<string | boolean> => {
    if (input.trim().length === 0)
    {
        return Promise.resolve("A number is required.");
    }

    const numberInput = Number(input);

    if (Number.isNaN(numberInput))
    {
        return Promise.resolve("A number is required.");
    }

    if (numberInput < 0)
    {
        return Promise.resolve("A non-negative number is required.");
    }

    return Promise.resolve(true);
}

export const isValidColor = (valueBeingValidated: string, input: string): Promise<string | boolean> =>
{
    if (input.length === 0)
    {
        return Promise.resolve(`A ${valueBeingValidated} color name or hex value is required.`);
    }

    if (input.startsWith("#") && input.length > 7)
    {
        return Promise.resolve("Hex value cannot consist of more than 7 characters (including leading hashtag symbol).");
    }

    if ( ! input.startsWith("#") && ! colorNames.includes(input))
    {
        return Promise.resolve(`Unrecognized color: "${input}". Use a hex value with a leading '#' character to use a custom color.`);
    }

    return Promise.resolve(true);
}

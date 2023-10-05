import { colorNames } from "./color.js";

const validHexChars: readonly string[] = Object.freeze(Array.from("ABCDEFabcdef0123456789"));

export const isNonNegativeNumber = async (input: string): Promise<string | boolean> => {
    if (input.trim().length === 0)
    {
        return "A number is required.";
    }

    const numberInput = Number(input);

    if (Number.isNaN(numberInput))
    {
        return "A number is required.";
    }

    if (numberInput < 0)
    {
        return "A non-negative number is required.";
    }

    return true;
}

export const isValidColor = async (valueBeingValidated: string, input: string): Promise<string | boolean> =>
{
    if (input.length === 0)
    {
        return `A ${valueBeingValidated} color name or hex value is required.`;
    }

    if (input.startsWith("#"))
    {
        if (input.length > 7)
        {
            return "Hex value cannot consist of more than 7 characters (including leading hashtag symbol).";
        }

        for (const char of input.slice(1))
        {
            if ( ! validHexChars.includes(char))
            {
                return `Hex value contains invalid character: '${char}'`;
            }
        }
    }

    if ( ! input.startsWith("#") && ! colorNames.includes(input))
    {
        return `Unrecognized color: "${input}". Use a hex value with a leading '#' character to use a custom color.`;
    }

    return true;
}

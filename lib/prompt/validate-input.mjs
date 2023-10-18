/**
 * @module validate-input
 */
import { colorNames } from "./color.mjs";
const validHexChars = Object.freeze(Array.from("ABCDEFabcdef0123456789"));
/**
 * Verifies whether a `string` is a valid color or not. It makes sure that it's either a recognized color name or a hex value.
 *
 * @param typeOfValueBeingValidated A `string` used in the message returned if the input isn't a valid color.
 *
 * @param input The `string` being  validated for being a color.
 *
 * @returns Returns a promise containing `true` if the input is a valid color or `false` or a `string` message if the
 *          input is an invalid color.
 */
export const isColor = async (typeOfValueBeingValidated, input) => {
    if (input.length === 0) {
        return `A ${typeOfValueBeingValidated} color name or hex value is required.`;
    }
    if (input.startsWith("#")) {
        if (input.length < 4 || input.length > 7) {
            return `Hex value must be 4 to 7 characters (including leading hashtag symbol): "${input}" has length ${input.length}`;
        }
        for (const char of input.slice(1)) {
            if (!validHexChars.includes(char)) {
                return `Hex value contains invalid character: '${char}'`;
            }
        }
    }
    if (!input.startsWith("#") && !colorNames.includes(input)) {
        return `Unrecognized color: "${input}". Use a hex value with a leading '#' character to use a custom color.`;
    }
    return true;
};

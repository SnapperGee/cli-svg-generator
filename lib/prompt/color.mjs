/**
 * @module color
 */
/**
 * The color "aqua" with hex value #00FFFF.
 */
export const aqua = Object.freeze({
    name: "aqua",
    hex: "#00FFFF"
});
/**
 * The color "black" with hex value #000000.
 */
export const black = Object.freeze({
    name: "black",
    hex: "#000000"
});
/**
 * The color "blue" with hex value #0000FF.
 */
export const blue = Object.freeze({
    name: "blue",
    hex: "#0000FF"
});
/**
 * The color "brown" with hex value #A52A2A.
 */
export const brown = Object.freeze({
    name: "brown",
    hex: "#A52A2A"
});
/**
 * The color "cyan" with hex value #00FFFF.
 */
export const cyan = Object.freeze({
    name: "cyan",
    hex: "#00FFFF"
});
/**
 * The color "fuchsia" with hex value #FF00FF.
 */
export const fuchsia = Object.freeze({
    name: "fuchsia",
    hex: "#FF00FF"
});
/**
 * The color "gray" with hex value #808080.
 */
export const gray = Object.freeze({
    name: "gray",
    hex: "#808080"
});
/**
 * The color "green" with hex value #008000.
 */
export const green = Object.freeze({
    name: "green",
    hex: "#008000"
});
/**
 * The color "grey" with hex value #808080.
 */
export const grey = Object.freeze(Object.assign(Object.assign({}, gray), { name: "grey" }));
/**
 * The color "ivory" with hex value #FFFFF0.
 */
export const ivory = Object.freeze({
    name: "ivory",
    hex: "#FFFFF0"
});
/**
 * The color "lavender" with hex value #E6E6FA.
 */
export const lavender = Object.freeze({
    name: "lavender",
    hex: "#E6E6FA"
});
/**
 * The color "magenta" with hex value #FF00FF.
 */
export const magenta = Object.freeze({
    name: "magenta",
    hex: "#FF00FF"
});
/**
 * The color "orange" with hex value #FFA500.
 */
export const orange = Object.freeze({
    name: "orange",
    hex: "#FFA500"
});
/**
 * The color "pink" with hex value #FFC0CB.
 */
export const pink = Object.freeze({
    name: "pink",
    hex: "#FFC0CB"
});
/**
 * The color "purple" with hex value #800080.
 */
export const purple = Object.freeze({
    name: "purple",
    hex: "#800080"
});
/**
 * The color "red" with hex value #FF0000.
 */
export const red = Object.freeze({
    name: "red",
    hex: "#FF0000"
});
/**
 * The color "violet" with hex value #EE82EE.
 */
export const violet = Object.freeze({
    name: "violet",
    hex: "#EE82EE"
});
/**
 * The color "white" with hex value #FFFFFF.
 */
export const white = Object.freeze({
    name: "white",
    hex: "#FFFFFF"
});
/**
 * The color "yellow" with hex value #FFFF00.
 */
export const yellow = Object.freeze({
    name: "yellow",
    hex: "#FFFF00"
});
/**
 * Object containing all color objects of {@link color} module.
 */
export const color = Object.freeze({
    aqua, black, blue, brown, cyan, fuchsia, gray, green, grey, ivory, lavender,
    magenta, orange, pink, purple, red, violet, white, yellow
});
/**
 * Array of all name `string` values of colors contained within {@link color} module.
 */
export const colorNames = Object.freeze(Object.values(color).map(color => color.name));
export default color;

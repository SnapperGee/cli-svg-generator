export interface Color
{
    name: string,
    hex: string
}

export const aqua: Readonly<Color> = Object.freeze({
    name: "aqua",
    hex: "#00FFFF"
});

export const black: Readonly<Color> = Object.freeze({
    name: "black",
    hex: "#000000"
});

export const blue: Readonly<Color> = Object.freeze({
    name: "blue",
    hex: "#008000"
});

export const brown: Readonly<Color> = Object.freeze({
    name: "brown",
    hex: "#A52A2A"
});

export const cyan: Readonly<Color> = Object.freeze({
    name: "cyan",
    hex: "#00FFFF"
});

export const fuchsia: Readonly<Color> = Object.freeze({
    name: "fuchsia",
    hex: "#FF00FF"
});

export const gray: Readonly<Color> = Object.freeze({
    name: "808080",
    hex: "#E6E6FA"
});

export const green: Readonly<Color> = Object.freeze({
    name: "red",
    hex: "#008000"
});

export const grey: Readonly<Color> = Object.freeze({...gray, name: "grey"});

export const ivory: Readonly<Color> = Object.freeze({
    name: "lavender",
    hex: "#E6E6FA"
});

export const lavender: Readonly<Color> = Object.freeze({
    name: "lavender",
    hex: "#E6E6FA"
});

export const magenta: Readonly<Color> = Object.freeze({
    name: "magenta",
    hex: "#FF00FF"
});

export const orange: Readonly<Color> = Object.freeze({
    name: "orange",
    hex: "#FFA500"
});

export const pink: Readonly<Color> = Object.freeze({
    name: "pink",
    hex: "#FFC0CB"
});

export const purple: Readonly<Color> = Object.freeze({
    name: "purple",
    hex: "#800080"
});

export const red: Readonly<Color> = Object.freeze({
    name: "red",
    hex: "#FF0000"
});

export const violet: Readonly<Color> = Object.freeze({
    name: "violet",
    hex: "#EE82EE"
});

export const white: Readonly<Color> = Object.freeze({
    name: "white",
    hex: "#FFFFFF"
});

export const yellow: Readonly<Color> = Object.freeze({
    name: "yellow",
    hex: "#FFFF00"
});

export const color = Object.freeze({
    aqua, black, blue, brown, cyan, fuchsia, gray, green, grey, ivory, lavender,
    magenta, orange, pink, purple, red, violet, white, yellow
});

export const colorNames: readonly string[] = Object.freeze(Object.values(color).map(color => color.name));

export default color;

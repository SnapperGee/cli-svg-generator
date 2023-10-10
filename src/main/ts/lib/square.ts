/**
 * @module square
 */

import { AbstractShape, ShapeType, Text } from "./abstract-shape.js";
import { create as createXML } from "xmlbuilder2";

/**
 * Class used to create an SVG containing a filled square and text.
 */
export class Square extends AbstractShape
{
    readonly #xml: string;

    /**
     * Class for generating a square SVG with text located in the center of it.
     *
     * @param width The width of the generated SVG.
     *
     * @param height The height of the generated SVG.
     *
     * @param color The color to fill the generated square with.
     *
     * @param text The text centered in the square.
     */
    public constructor(width: number, height: number, color: string, text: Text)
    {
        super(ShapeType.SQUARE, width, height, color, text);

        const size: number = this.width < this.height ? this.width : this.height;

        this.#xml = createXML().ele("svg", {version: 1.1, width: this.width, height: this.height, xmlns: "http://www.w3.org/2000/svg"})
            .ele("rect", {width: size, height: size, fill: this.color}).up()
            .ele("text", {x: size / 2, y: size / 2, "font-size": this.text.size, "text-anchor": "middle", "dominant-baseline": "middle", fill: this.text.color}).txt(this.text.content)
            .end({headless: true});
    }

    /**
     * Getter for the xml `string` of the SVG.
     */
    public override get xml(): string { return this.#xml; }
}

/**
 * Creates a {@link Square} object with a width and height of 300px by 200px.
 *
 * @param shapeColor A color hex or name value to use as the rectangle fill.
 *
 * @param text The text located in the center of the square.
 *
 * @param textColor The color of the text.
 *
 * @returns A {@link Square} object with a preset width and height of 300px x 200px.
 */
export const create300x200Square = (shapeColor: string, text: string, textColor: string): Square => new Square(300, 200, shapeColor, {content: text, size: 60, color: textColor});

export default Square;

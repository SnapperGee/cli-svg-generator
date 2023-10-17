/**
 * @module triangle
 */

import { type Text } from "./text.mjs";
import { ShapeType } from "./shape-type.mjs";
import { AbstractShape } from "./abstract-shape.mjs";
import { create as createXML } from "xmlbuilder2";

/**
 * Class used to create an SVG containing a filled triangle and text.
 */
export class Triangle extends AbstractShape
{
    readonly #xml: string;

    /**
     * Class for generating a triangle SVG with text located in the center of it.
     *
     * @param width The width of the generated SVG.
     *
     * @param height The height of the generated SVG.
     *
     * @param color The color to fill the generated triangle with.
     *
     * @param text The text centered in the triangle.
     */
    public constructor(width: number, height: number, color: string, text: Text)
    {
        super(ShapeType.TRIANGLE, width, height, color, text);

        this.#xml = createXML().ele("svg", {version: 1.1, width: this.width, height: this.height, xmlns: "http://www.w3.org/2000/svg"})
            .ele("polygon", {points: `0,${this.width} ${this.width},${this.width} ${this.width / 2},0`, fill: this.color}).up()
            .ele("text", {x: this.width / 2, y: (2/3) * this.height, "font-size": this.text.size, "text-anchor": "middle", "dominant-baseline": "middle", fill: this.text.color}).txt(this.text.content)
            .end({headless: true});
    }

    /**
     * Getter for the xml `string` of the SVG.
     */
    public override get xml(): string { return this.#xml; }
}

/**
 * Creates a {@link Triangle} object with a width and height of 300px by 200px.
 *
 * @param shapeColor A color hex or name value to use as the triangle fill.
 *
 * @param text The text located in the center of the triangle.
 *
 * @param textColor The color of the text.
 *
 * @returns A {@link Triangle} object with a preset width and height of 300px x 200px.
 */
export const create300x200Triangle = (shapeColor: string, text: string, textColor: string): Triangle => new Triangle(300, 200, shapeColor, {content: text, size: 48, color: textColor});

export default Triangle;

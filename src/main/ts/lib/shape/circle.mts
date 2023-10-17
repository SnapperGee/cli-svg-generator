/**
 * @module circle
 */

import { type Text } from "./text.mjs";
import { ShapeType } from "./shape-type.mjs";
import { AbstractShape } from "./abstract-shape.mjs";
import { create as createXML } from "xmlbuilder2";

/**
 * Class used to create an SVG containing a filled circle and text.
 */
export class Circle extends AbstractShape
{
    readonly #xml: string;

    /**
     * Class for generating a circle SVG with text located in the center of it.
     *
     * @param width The width of the generated SVG.
     *
     * @param height The height of the generated SVG.
     *
     * @param color The color to fill the generated circle with.
     *
     * @param text The text centered in the circle.
     */
    public constructor(width: number, height: number, color: string, text: Text)
    {
        super(ShapeType.CIRCLE, width, height, color, text);

        const size: number = this.width < this.height ? this.width : this.height;

        this.#xml = createXML().ele("svg", {version: 1.1, width: this.width, height: this.height, xmlns: "http://www.w3.org/2000/svg"})
            .ele("circle", {cx: this.width / 2, cy: this.height / 2, r: size / 2, fill: this.color}).up()
            .ele("text", {x: this.width / 2, y: (this.height / 2) + 20, "font-size": this.text.size, "text-anchor": "middle", "dominant-baseline": "middle", fill: this.text.color}).txt(this.text.content)
            .end({headless: true});
    }

    /**
     * Getter for the xml `string` of the SVG.
     */
    public override get xml(): string { return this.#xml; }
}

/**
 * Creates a {@link Circle} object with a width and height of 300px by 200px.
 *
 * @param shapeColor A color hex or name value to use as the circle fill.
 *
 * @param text The text located in the center of the circle.
 *
 * @param textColor The color of the text.
 *
 * @returns A {@link Circle} object with a preset width and height of 300px x 200px.
 */
export const create300x200Circle = (shapeColor: string, text: string, textColor: string): Circle => new Circle(300, 200, shapeColor, {content: text, size: 60, color: textColor});

export default Circle;

import { ShapeType } from "./shape-type.js";
import { AbstractShape, Text } from "./abstract-shape.js";
import { create as createXML } from "xmlbuilder2";

export class Triangle extends AbstractShape
{
    readonly #xml: string;

    public constructor(width: number, height: number, color: string, text: Text)
    {
        super(ShapeType.TRIANGLE, width, height, color, text);

        this.#xml = createXML().ele("svg", {version: 1.1, width: this.width, height: this.height, xmlns: "http://www.w3.org/2000/svg"})
            .ele("polygon", {points: `0,${this.width} ${this.width},${this.width} ${this.width / 2}, 0`, fill: this.color}).up()
            .ele("text", {x: this.width / 2, y: (2/3) * this.height, "font-size": this.text.size, "text-anchor": "middle", "dominant-baseline": "middle", fill: this.text.color}).txt(this.text.content)
            .end({headless: true});
    }

    public override get xml(): string { return this.#xml; }
}

export const create300x200Triangle = (shapeColor: string, text: string, textColor: string): Triangle => new Triangle(300, 200, shapeColor, {content: text, size: 48, color: textColor});

export default Triangle;

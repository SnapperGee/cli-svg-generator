import { Shape, ShapeType, Text } from "./shape.js";
import { create as createXML } from "xmlbuilder2";

export class Triangle extends Shape
{
    readonly #xml: string;

    public constructor(size: number, color: string, text: Text)
    {
        super(ShapeType.TRIANGLE, size, size, color, text);

        this.#xml = createXML().ele("svg", {version: 1.1, xmlns: "http://www.w3.org/2000/svg"})
            .ele("polygon", {points: `0,${this.width} ${this.height},${this.width} ${this.height / 2}, 0`, fill: this.color}).up()
            .ele("text", {x: this.width / 2, y: (2/3) * this.height, "font-size": this.text.size, "text-anchor": "middle", fill: this.text.color}).txt(this.text.content)
            .end({headless: true});
    }

    public override get xml(): string { return this.#xml; }
}

export default Triangle;

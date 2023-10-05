import { Shape, ShapeType, Text } from "./shape.js";
import { create as createXML } from "xmlbuilder2";

export class Circle extends Shape
{
    readonly #xml: string;

    public constructor(diameter: number, color: string, text: Text)
    {
        super(ShapeType.CIRCLE, diameter, diameter, color, text);
        this.#xml = createXML().ele("svg", {version: 1.1, viewBox: `0 0 ${this.width} ${this.height}`, xmlns: "http://www.w3.org/2000/svg"})
            .ele("circle", {cx: this.width / 2, cy: this.height / 2, r: this.width / 2, fill: this.color}).up()
            .ele("text", {x: this.width / 2, y: (this.height / 2) + 20, "font-size": this.text.size, "text-anchor": "middle", fill: this.text.color}).txt(this.text.content)
            .end({headless: true});
    }

    public override get xml(): string { return this.#xml; }
}

export default Circle;

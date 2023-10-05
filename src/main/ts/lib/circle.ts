import { Shape, ShapeType, Text } from "./shape.js";
import { create as createXML } from "xmlbuilder2";

export class Circle extends Shape
{
    readonly #xml: string;

    public constructor(width: number, height: number, color: string, text: Text)
    {
        super(ShapeType.CIRCLE, width, height, color, text);

        const size: number = this.width < this.height ? this.width : this.height;

        this.#xml = createXML().ele("svg", {version: 1.1, width: this.width, height: this.height, xmlns: "http://www.w3.org/2000/svg"})
            .ele("circle", {cx: this.width / 2, cy: this.height / 2, r: size / 2, fill: this.color}).up()
            .ele("text", {x: this.width / 2, y: (this.height / 2) + 20, "font-size": this.text.size, "text-anchor": "middle", "dominant-baseline": "middle", fill: this.text.color}).txt(this.text.content)
            .end({headless: true});
    }

    public override get xml(): string { return this.#xml; }
}

export default Circle;

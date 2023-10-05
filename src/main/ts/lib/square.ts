import { Shape, ShapeType, Text } from "./shape.js";
import { create as createXML } from "xmlbuilder2";

export class Square extends Shape
{
    readonly #xml: string;
    public constructor(width: number, height: number, color: string, text: Text)
    {
        super(ShapeType.SQUARE, width, height, color, text);

        const size: number = this.width < this.height ? this.width : this.height;

        this.#xml = createXML().ele("svg", {version: 1.1, width: this.width, height: this.height, xmlns: "http://www.w3.org/2000/svg"})
            .ele("rect", {width: size, height: size, fill: this.color}).up()
            .ele("text", {x: size / 2, y: size / 2, "font-size": this.text.size, "text-anchor": "middle", "dominant-baseline": "middle", fill: this.text.color}).txt(this.text.content)
            .end({headless: true});
    }

    public override get xml(): string { return this.#xml; }
}

export const create300x200Square = (shapeColor: string, text: string, textColor: string): Square => new Square(300, 200, shapeColor, {content: text, size: 60, color: textColor});

export default Square;

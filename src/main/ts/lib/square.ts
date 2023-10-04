import { Shape, ShapeType, Text } from "./shape.js";
import { create as createXML } from "xmlbuilder2";

export class Square extends Shape
{
    readonly #xml: string;
    public constructor(size: number, color: string, text: Text)
    {
        super(ShapeType.SQUARE, size, size, color, text);

        this.#xml = createXML({version: "1.1"}).ele("svg", {version: "1.1", xmlns: "http://www.w3.org/2000/svg"})
            .ele("rect", {width: this.width, height: this.height})
            .ele("text", {x: this.width / 2, y: this.height / 2, "font-size": this.text.size, "text-anchor": "middle"}).txt(this.text.content)
            .end({prettyPrint: true});
    }

    public override get xml(): string { return this.#xml; }
}

export default Square;

import { Shape, ShapeType, Text } from "./shape.js";
import { create as createXML } from "xmlbuilder2";

export class Square extends Shape
{
    readonly #xml: any;
    public constructor(size: number, text: Text)
    {
        super(ShapeType.SQUARE, size, size, text);

        this.#xml = createXML({version: "1.1"})
            .ele("rect", {width: this.width, height: this.height})
            .up().ele("text", {x: this.width / 2, y: this.height / 2, "text-anchor": "middle"});
    }
}

export default Square;

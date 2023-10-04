import { Shape, ShapeType, Text } from "./shape.js";

export class Triangle extends Shape
{
    readonly #xml: string;

    public constructor(width: number, height: number, color: string, text: Text)
    {
        super(ShapeType.TRIANGLE, width, height, color, text);
        this.#xml = "";
    }

    public override get xml(): string { return this.#xml; }
}

export default Triangle;

import { Shape, ShapeType, Text } from "./shape.js";

export class Circle extends Shape
{
    readonly #xml: string;

    public constructor(diameter: number, color: string, text: Text)
    {
        super(ShapeType.CIRCLE, diameter, diameter, color, text);
        this.#xml = "";
    }

    public override get xml(): string { return this.#xml; }
}

export default Circle;

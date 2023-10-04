import { Shape, ShapeType, Text } from "./shape.js";

export class Circle extends Shape
{
    public constructor(diameter: number, color: string, text: Text)
    {
        super(ShapeType.CIRCLE, diameter, diameter, color, text);
    }
}

export default Circle;

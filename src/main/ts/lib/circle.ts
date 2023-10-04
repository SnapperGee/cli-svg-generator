import { Shape, ShapeType, Text } from "./shape.js";

export class Circle extends Shape
{
    public constructor(diameter: number, text: Text)
    {
        super(ShapeType.CIRCLE, diameter, diameter, text);
    }
}

export default Circle;

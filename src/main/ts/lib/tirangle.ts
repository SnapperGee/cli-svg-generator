import { Shape, ShapeType, Text } from "./shape.js";

export class Triangle extends Shape
{
    public constructor(width: number, height: number, color: string, text: Text)
    {
        super(ShapeType.TRIANGLE, width, height, color, text);
    }
}

export default Triangle;

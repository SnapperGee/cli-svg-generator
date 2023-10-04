import { Shape, ShapeType, Text } from "./shape.js";

export class Triangle extends Shape
{
    public constructor(width: number, height: number, text: Text)
    {
        super(ShapeType.TRIANGLE, width, height, text);
    }
}

export default Triangle;

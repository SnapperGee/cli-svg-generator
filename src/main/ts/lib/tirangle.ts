import { Shape, ShapeType } from "./shape.js";

export class Triangle extends Shape
{
    public constructor(width: number, height: number, text: string)
    {
        super(ShapeType.TRIANGLE, width, height, text);
    }
}

export default Triangle;

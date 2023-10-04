import { Shape, ShapeType } from "./shape.js";

export class Square extends Shape
{
    public constructor(size: number, text: string)
    {
        super(ShapeType.SQUARE, size, size, text);
    }
}

export default Square;

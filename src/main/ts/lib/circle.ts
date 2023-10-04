import { Shape, ShapeType } from "./shape.js";

export class Circle extends Shape
{
    public constructor(diameter: number, text: string)
    {
        super(ShapeType.CIRCLE, diameter, diameter, text);
    }
}

export default Circle;

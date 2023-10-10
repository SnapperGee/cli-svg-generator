import { ShapeType } from "./shape-type.js";
import { inspect } from "util";

export interface Text
{
    content: string,
    size: number,
    color: string
}

export abstract class AbstractShape
{
    readonly #type: ShapeType;
    readonly #width: number;
    readonly #height: number;
    readonly #color: string;
    readonly #text: Text;
    readonly #string: string;

    protected constructor(type: ShapeType, width: number, height: number, color: string, text: Text)
    {
        if (width < 0)
        {
            throw new RangeError(`${new.target.name}: width less than 0: ${width}`);
        }

        if (height < 0)
        {
            throw new RangeError(`${new.target.name}: height less than 0: ${height}`);
        }

        this.#type = type;
        this.#width = width;
        this.#height = height;
        this.#color = color;
        this.#text = text;
        this.#string = `${new.target.name} {width: ${this.#width}, height: ${this.#height}, color: "${this.#color}", text: {content: "${this.text.content}", size: ${this.text.size}, color: "${this.text.color}"}}`;
    }

    public get type(): ShapeType { return this.#type; }
    public get width(): number { return this.#width; }
    public get height(): number { return this.#height; }
    public get color(): string { return this.#color; }
    public get text(): Text { return this.#text; }
    public abstract get xml(): string;

    public [inspect.custom](): string { return this.#string; }
    public toString(): string { return this.#string; }
}

export default AbstractShape;

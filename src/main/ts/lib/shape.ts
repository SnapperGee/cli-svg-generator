export const enum ShapeType
{
    SQUARE = "square",
    CIRCLE = "circle",
    TRIANGLE = "triangle"
}

export abstract class Shape
{
    readonly #type: ShapeType;
    readonly #width: number;
    readonly #height: number;
    readonly #text: string;

    protected constructor(type: ShapeType, width: number, height: number, text: string)
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
        this.#text = text;
    }

    public get type(): ShapeType { return this.#type; }
    public get width(): number { return this.#width; }
    public get height(): number { return this.#height; }
    public get text(): string { return this.#text; }
}

export default Shape;

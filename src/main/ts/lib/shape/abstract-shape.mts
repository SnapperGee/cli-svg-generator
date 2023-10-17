import { type Text } from "./text.mjs";
import { ShapeType } from "./shape-type.mjs";
import { inspect } from "util";

/**
 * Root parent class for created the SVG xml `string` of various logos and shapes.
 */
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

    /**
     * Getter for this {@link AbstractShape Shape} object's {@link ShapeType}.
     */
    public get type(): ShapeType { return this.#type; }

    /**
     * Getter for this {@link AbstractShape Shape} object's width `number`.
     */
    public get width(): number { return this.#width; }

    /**
     * Getter for this {@link AbstractShape Shape} object's height `number`.
     */
    public get height(): number { return this.#height; }

    /**
     * Getter for this {@link AbstractShape Shape} object's color name `string`.
     */
    public get color(): string { return this.#color; }

    /**
     * Getter for this {@link AbstractShape Shape} object's text properties.
     */
    public get text(): Text { return this.#text; }

    /**
     * Getter for this {@link AbstractShape Shape} object's xml `string`.
     */
    public abstract get xml(): string;

    /**
     * Returns a `string` representation of this {@link AbstractShape Shape} object.
     * @returns a `string` representation of this {@link AbstractShape Shape} object.
     */

    public [inspect.custom](): string { return this.#string; }

    /**
     * Returns a `string` representation of this {@link AbstractShape Shape} object.
     * @returns a `string` representation of this {@link AbstractShape Shape} object.
     */
    public toString(): string { return this.#string; }
}

export default AbstractShape;

/**
 * @module text
 */

/**
 * Interface to define `Text` object shape used to create the text in the center
 * of generated logo SVG shape.
 */
export interface Text
{
    /**
     * The `string` context of the text.
     */
    content: string,

    /**
     * The size of the text.
     */
    size: number,

    /**
     * The `string` color name or hex value of the text color.
     */
    color: string
}

export default Text;

/**
 * @module square
 */
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Square_xml;
import { ShapeType } from "./shape-type.mjs";
import { AbstractShape } from "./abstract-shape.mjs";
import { create as createXML } from "xmlbuilder2";
/**
 * Class used to create an SVG containing a filled square and text. Regardless
 * of the set width and height, the generated SVG will contain a square path
 * with sides equal to the smaller of the set width and height dimension.
 */
export class Square extends AbstractShape {
    /**
     * Class for generating a square SVG with text located in the center of it.
     *
     * @param width The width of the generated SVG.
     *
     * @param height The height of the generated SVG.
     *
     * @param color The color to fill the generated square with.
     *
     * @param text The text centered in the square.
     */
    constructor(width, height, color, text) {
        super(ShapeType.SQUARE, width, height, color, text);
        _Square_xml.set(this, void 0);
        const size = this.width < this.height ? this.width : this.height;
        __classPrivateFieldSet(this, _Square_xml, createXML().ele("svg", { version: 1.1, width: this.width, height: this.height, xmlns: "http://www.w3.org/2000/svg" })
            .ele("rect", { width: size, height: size, fill: this.color }).up()
            .ele("text", { x: size / 2, y: size / 2, "font-size": this.text.size, "text-anchor": "middle", "dominant-baseline": "middle", fill: this.text.color }).txt(this.text.content)
            .end({ headless: true }), "f");
    }
    /**
     * Getter for the xml `string` of the SVG.
     */
    get xml() { return __classPrivateFieldGet(this, _Square_xml, "f"); }
}
_Square_xml = new WeakMap();
/**
 * Creates a {@link Square} object with a width and height of 300px by 200px.
 *
 * @param shapeColor A color hex or name value to use as the rectangle fill.
 *
 * @param text The text located in the center of the square.
 *
 * @param textColor The color of the text.
 *
 * @returns A {@link Square} object with a preset width and height of 300px x 200px.
 */
export const create300x200Square = (shapeColor, text, textColor) => new Square(300, 200, shapeColor, { content: text, size: 60, color: textColor });
export default Square;

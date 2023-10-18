/**
 * @module triangle
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
var _Triangle_xml;
import { ShapeType } from "./shape-type.mjs";
import { AbstractShape } from "./abstract-shape.mjs";
import { create as createXML } from "xmlbuilder2";
/**
 * Class used to create an SVG containing a filled triangle and text.
 */
export class Triangle extends AbstractShape {
    /**
     * Class for generating a triangle SVG with text located in the center of it.
     *
     * @param width The width of the generated SVG.
     *
     * @param height The height of the generated SVG.
     *
     * @param color The color to fill the generated triangle with.
     *
     * @param text The text centered in the triangle.
     */
    constructor(width, height, color, text) {
        super(ShapeType.TRIANGLE, width, height, color, text);
        _Triangle_xml.set(this, void 0);
        __classPrivateFieldSet(this, _Triangle_xml, createXML().ele("svg", { version: 1.1, width: this.width, height: this.height, xmlns: "http://www.w3.org/2000/svg" })
            .ele("polygon", { points: `0,${this.width} ${this.width},${this.width} ${this.width / 2},0`, fill: this.color }).up()
            .ele("text", { x: this.width / 2, y: (2 / 3) * this.height, "font-size": this.text.size, "text-anchor": "middle", "dominant-baseline": "middle", fill: this.text.color }).txt(this.text.content)
            .end({ headless: true }), "f");
    }
    /**
     * Getter for the xml `string` of the SVG.
     */
    get xml() { return __classPrivateFieldGet(this, _Triangle_xml, "f"); }
}
_Triangle_xml = new WeakMap();
/**
 * Creates a {@link Triangle} object with a width and height of 300px by 200px.
 *
 * @param shapeColor A color hex or name value to use as the triangle fill.
 *
 * @param text The text located in the center of the triangle.
 *
 * @param textColor The color of the text.
 *
 * @returns A {@link Triangle} object with a preset width and height of 300px x 200px.
 */
export const create300x200Triangle = (shapeColor, text, textColor) => new Triangle(300, 200, shapeColor, { content: text, size: 48, color: textColor });
export default Triangle;

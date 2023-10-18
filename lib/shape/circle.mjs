/**
 * @module circle
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
var _Circle_xml;
import { ShapeType } from "./shape-type.mjs";
import { AbstractShape } from "./abstract-shape.mjs";
import { create as createXML } from "xmlbuilder2";
/**
 * Class used to create an SVG containing a filled circle and text.
 */
export class Circle extends AbstractShape {
    /**
     * Class for generating a circle SVG with text located in the center of it.
     *
     * @param width The width of the generated SVG.
     *
     * @param height The height of the generated SVG.
     *
     * @param color The color to fill the generated circle with.
     *
     * @param text The text centered in the circle.
     */
    constructor(width, height, color, text) {
        super(ShapeType.CIRCLE, width, height, color, text);
        _Circle_xml.set(this, void 0);
        const size = this.width < this.height ? this.width : this.height;
        __classPrivateFieldSet(this, _Circle_xml, createXML().ele("svg", { version: 1.1, width: this.width, height: this.height, xmlns: "http://www.w3.org/2000/svg" })
            .ele("circle", { cx: this.width / 2, cy: this.height / 2, r: size / 2, fill: this.color }).up()
            .ele("text", { x: this.width / 2, y: (this.height / 2) + 20, "font-size": this.text.size, "text-anchor": "middle", "dominant-baseline": "middle", fill: this.text.color }).txt(this.text.content)
            .end({ headless: true }), "f");
    }
    /**
     * Getter for the xml `string` of the SVG.
     */
    get xml() { return __classPrivateFieldGet(this, _Circle_xml, "f"); }
}
_Circle_xml = new WeakMap();
/**
 * Creates a {@link Circle} object with a width and height of 300px by 200px.
 *
 * @param shapeColor A color hex or name value to use as the circle fill.
 *
 * @param text The text located in the center of the circle.
 *
 * @param textColor The color of the text.
 *
 * @returns A {@link Circle} object with a preset width and height of 300px x 200px.
 */
export const create300x200Circle = (shapeColor, text, textColor) => new Circle(300, 200, shapeColor, { content: text, size: 60, color: textColor });
export default Circle;

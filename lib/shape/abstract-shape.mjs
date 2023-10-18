/**
 * @module abstract-shape
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
var _AbstractShape_type, _AbstractShape_width, _AbstractShape_height, _AbstractShape_color, _AbstractShape_text, _AbstractShape_string;
import { inspect } from "util";
/**
 * Class used to create an SVG containing a filled shaped and centered-ish text.
 */
export class AbstractShape {
    constructor(type, width, height, color, text) {
        _AbstractShape_type.set(this, void 0);
        _AbstractShape_width.set(this, void 0);
        _AbstractShape_height.set(this, void 0);
        _AbstractShape_color.set(this, void 0);
        _AbstractShape_text.set(this, void 0);
        _AbstractShape_string.set(this, void 0);
        if (width < 0) {
            throw new RangeError(`${new.target.name}: width less than 0: ${width}`);
        }
        if (height < 0) {
            throw new RangeError(`${new.target.name}: height less than 0: ${height}`);
        }
        __classPrivateFieldSet(this, _AbstractShape_type, type, "f");
        __classPrivateFieldSet(this, _AbstractShape_width, width, "f");
        __classPrivateFieldSet(this, _AbstractShape_height, height, "f");
        __classPrivateFieldSet(this, _AbstractShape_color, color, "f");
        __classPrivateFieldSet(this, _AbstractShape_text, text, "f");
        __classPrivateFieldSet(this, _AbstractShape_string, `${new.target.name} {width: ${__classPrivateFieldGet(this, _AbstractShape_width, "f")}, height: ${__classPrivateFieldGet(this, _AbstractShape_height, "f")}, color: "${__classPrivateFieldGet(this, _AbstractShape_color, "f")}", text: {content: "${this.text.content}", size: ${this.text.size}, color: "${this.text.color}"}}`, "f");
    }
    /**
     * Getter for this {@link AbstractShape Shape} object's {@link ShapeType}.
     */
    get type() { return __classPrivateFieldGet(this, _AbstractShape_type, "f"); }
    /**
     * Getter for this {@link AbstractShape Shape} object's width `number`.
     */
    get width() { return __classPrivateFieldGet(this, _AbstractShape_width, "f"); }
    /**
     * Getter for this {@link AbstractShape Shape} object's height `number`.
     */
    get height() { return __classPrivateFieldGet(this, _AbstractShape_height, "f"); }
    /**
     * Getter for this {@link AbstractShape Shape} object's color name `string`.
     */
    get color() { return __classPrivateFieldGet(this, _AbstractShape_color, "f"); }
    /**
     * Getter for this {@link AbstractShape Shape} object's text properties.
     */
    get text() { return __classPrivateFieldGet(this, _AbstractShape_text, "f"); }
    /**
     * Returns the SVG `string` of this {@link AbstractShape Shape}.
     * @returns the SVG `string` of this {@link AbstractShape Shape}.
     */
    render() { return this.xml; }
    ;
    /**
     * Returns a `string` representation of this {@link AbstractShape Shape} object.
     * @returns a `string` representation of this {@link AbstractShape Shape} object.
     */
    [(_AbstractShape_type = new WeakMap(), _AbstractShape_width = new WeakMap(), _AbstractShape_height = new WeakMap(), _AbstractShape_color = new WeakMap(), _AbstractShape_text = new WeakMap(), _AbstractShape_string = new WeakMap(), inspect.custom)]() { return __classPrivateFieldGet(this, _AbstractShape_string, "f"); }
    /**
     * Returns a `string` representation of this {@link AbstractShape Shape} object.
     * @returns a `string` representation of this {@link AbstractShape Shape} object.
     */
    toString() { return __classPrivateFieldGet(this, _AbstractShape_string, "f"); }
}
export default AbstractShape;

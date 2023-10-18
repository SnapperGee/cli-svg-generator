/**
 * The different types of shapes that can be generated as SVG.
 */
export var ShapeType;
(function (ShapeType) {
    /**
     * Circle SVG shape
     */
    ShapeType["CIRCLE"] = "circle";
    /**
     * Square SVG shape.
     */
    ShapeType["SQUARE"] = "square";
    /**
     * Triangle SVG shape.
     */
    ShapeType["TRIANGLE"] = "triangle";
})(ShapeType || (ShapeType = {}));
export default ShapeType;

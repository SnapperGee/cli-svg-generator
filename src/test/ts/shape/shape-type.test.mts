import { ShapeType } from "../../../main/ts/lib/shape/shape-type.mjs";
import { assert, expect } from "chai";

suite("ShapeType", function testSuiteShapeType() {
    test("ShapeType.CIRCLE property exists", function testShapeTypeShouldHavePropertyCircle() {
        expect(ShapeType).to.have.property("CIRCLE");
    });

    test("ShapeType.SQUARE property exists", function testShapeTypeShouldHavePropertySquare() {
        expect(ShapeType).to.have.property("SQUARE");
    });

    test("ShapeType.TRIANGLE property exists", function testShapeTypeShouldHavePropertyTriangle() {
        expect(ShapeType).to.have.property("TRIANGLE");
    });

    test("ShapeType.CIRCLE value is lowercase property name", function testShapeTypeCircleShouldEqualCircle() {
        assert.strictEqual(ShapeType.CIRCLE, "circle", "ShapeType.CIRCLE doesn't equal \"circle\"");
    });

    test("ShapeType.SQUARE value is lowercase property name", function testShapeTypeCircleShouldEqualSquare() {
        assert.strictEqual(ShapeType.SQUARE, "square", "ShapeType.SQUARE doesn't equal \"square\"");
    });

    test("ShapeType.TRIANGLE value is lowercase property name", function testShapeTypeCircleShouldEqualTriangle() {
        assert.strictEqual(ShapeType.TRIANGLE, "triangle", "ShapeType.TRIANGLE doesn't equal \"triangle\"");
    });
});

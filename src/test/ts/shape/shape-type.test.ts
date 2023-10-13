import { ShapeType } from "../../../main/ts/lib/shape/shape-type.mjs";
import { describe , expect, test } from "@jest/globals";

describe("ShapeType", () => {
    test("ShapeType.CIRCLE property exists", () => {
        expect(ShapeType).toHaveProperty("CIRCLE");
    });

    test("ShapeType.SQUARE property exists", () => {
        expect(ShapeType).toHaveProperty("SQUARE");
    });

    test("ShapeType.TRIANGLE property exists", () => {
        expect(ShapeType).toHaveProperty("TRIANGLE");
    });

    test("ShapeType.CIRCLE value is lowercase property name", () => {
        expect(ShapeType.CIRCLE).toBe("circle");
    });

    test("ShapeType.SQUARE value is lowercase property name", () => {
        expect(ShapeType.SQUARE).toBe("square");
    });

    test("ShapeType.TRIANGLE value is lowercase property name", () => {
        expect(ShapeType.TRIANGLE).toBe("triangle");
    });
});

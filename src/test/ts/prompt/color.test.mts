import { color, colorNames } from "../../../main/ts/lib/prompt/color.mjs";
import { expect } from "chai";

const _color = Object.freeze([
    Object.freeze({name: "aqua", hex: "#00FFFF"}),
    Object.freeze({name: "black", hex: "#000000"}),
    Object.freeze({name: "blue", hex: "#0000FF"}),
    Object.freeze({name: "brown", hex: "#A52A2A"}),
    Object.freeze({name: "cyan", hex: "#00FFFF"}),
    Object.freeze({name: "fuchsia", hex: "#FF00FF"}),
    Object.freeze({name: "gray", hex: "#808080"}),
    Object.freeze({name: "green", hex: "#008000"}),
    Object.freeze({name: "grey", hex: "#808080"}),
    Object.freeze({name: "ivory", hex: "#FFFFF0"}),
    Object.freeze({name: "lavender", hex: "#E6E6FA"}),
    Object.freeze({name: "magenta", hex: "#FF00FF"}),
    Object.freeze({name: "orange", hex: "#FFA500"}),
    Object.freeze({name: "pink", hex: "#FFC0CB"}),
    Object.freeze({name: "purple", hex: "#800080"}),
    Object.freeze({name: "red", hex: "#FF0000"}),
    Object.freeze({name: "violet", hex: "#EE82EE"}),
    Object.freeze({name: "white", hex: "#FFFFFF"}),
    Object.freeze({name: "yellow", hex: "#FFFF00"})
]);

const _colorNames = Object.freeze(_color.map(color => color.name));

suite("color object", function testSuiteColorObject()
{
    for (const colorName of _colorNames)
    {
        test(`color object has property "${colorName}"`, function testColorObjectPropertyIsColorName()
        {
            expect(color).to.have.property(colorName);
        });
    }
});

suite("individual color objects", function testSuiteIndividualColorObjects()
{
    suite("color name property value", function testIndividualColorNamePropertyValue()
    {
        for (const colorName of _colorNames)
        {
            test(`"${colorName}" color object has "name" property with value "${colorName}"`, function testIndividualColorObjectNamePropertyValue()
            {
                expect(color[colorName]).to.have.property("name", colorName);
            });
        }
    });

    suite("color hex property value", function testIndividualColorHexPropertyValue()
    {
        for (const aColor of _color)
        {
            test(`"${aColor.name}" color object has "hex" property with value "${aColor.hex}"`, function testIndividualColorObjectHexPropertyValue()
            {
                expect(color[aColor.name]).to.have.property("hex", aColor.hex);
            });
        }
    });
});

suite("color names", function testSuiteColorNames()
{
    for (const colorName of _colorNames)
    {
        test(`color names contains "${colorName}"`, function testColorNames()
        {
            expect(colorNames).to.include(colorName);
        });
    }
});

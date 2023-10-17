import { isColor } from "../../../main/ts/lib/prompt/validate-input.mjs";
import { assert } from "chai";

const hexChars = Object.freeze(Array.from("ABCDEF0123456789"));

const hexChar = (): string => hexChars[Math.floor(Math.random() * hexChars.length)];

const generateValidHexString = (): string =>
{
    let hexString = "#";

    while(hexString.length !== 7)
    {
        hexString += hexChar();
    }

    return hexString;
};

const colorNames = Object.freeze([
    "aqua", "black", "blue", "brown", "cyan", "fuchsia", "gray", "green", "grey", "ivory",
    "lavender", "magenta", "orange", "pink", "purple", "red", "violet", "white", "yellow"
]);

suite("isColor(string, string) function", function testSuiteIsColorFunction()
{
    suite("isColor(string, string) passed valid color names and hex values", function testSuiteIsColorPassedValidColorNamesAndHexValues()
    {
        const validColorHex = generateValidHexString();

        test(`isColor("", "${validColorHex}") returns true`, async function testIsValidReturnsTrueWhenPassedHexColor()
        {
            const isColorResult: boolean | string = await isColor("", validColorHex);
            assert.isTrue(isColorResult, `isColor("", "${validColorHex}") did not return true`);
        });

        for (const colorName of colorNames)
        {
            test(`isColor("", "${colorName}") returns true`, async function testIsValidReturnsTrueWhenPassedColorNames()
            {
                const isColorResult: boolean | string = await isColor("", colorName);
                assert.isTrue(isColorResult, `isColor("", "${colorName}") did not return true`);
            });
        }
    });

    suite("isColor(string, string) passed valid color names and hex values", function testSuiteIsColorPassedValidColorNamesAndHexValues()
    {
        test('isColor("", "") returns a string', async function testIsValidReturnsAStringWhenPassedEmptyString()
        {
            const isColorResult: boolean | string = await isColor("", "");
            assert.isString(isColorResult, 'isColor("", "") did not return a string');
        });

        const invalidHexColors = Object.freeze([
            generateValidHexString().slice(0, 3),
            generateValidHexString() + hexChar(),
            colorNames[Math.floor(Math.random() * colorNames.length)] + colorNames[Math.floor(Math.random() * colorNames.length)]
        ]);

        for (const invalidHexColor of invalidHexColors)
        {
            test(`isColor("", "${invalidHexColor}") returns a string`, async function testIsValidReturnsStringWhenPassedInvalid()
            {
                const isColorResult: boolean | string = await isColor("", invalidHexColor);
                assert.isString(isColorResult, `isColor("", "${invalidHexColor}") did not return a string`);
            });
        }
    });
});

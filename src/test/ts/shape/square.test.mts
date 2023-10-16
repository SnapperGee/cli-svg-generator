import { ShapeType } from "../../../main/ts/lib/shape/shape-type.mjs";
import { AbstractShape } from "../../../main/ts/lib/shape/abstract-shape.mjs";
import { Square } from "../../../main/ts/lib/shape/square.mjs";
import { assert, expect } from "chai";

const WIDTH = 42;
const HEIGHT = 66;
const COLOR = "blue";
const TEXT = Object.freeze({content: "SQR", size: 60, color: "black"});

const XML = '<svg version="1.1" width="42" height="66" xmlns="http://www.w3.org/2000/svg"><rect width="42" height="42" fill="blue"/><text x="21" y="21" font-size="60" text-anchor="middle" dominant-baseline="middle" fill="black">SQR</text></svg>';

const toString = `${Square.name} {width: ${WIDTH}, height: ${HEIGHT}, color: "${COLOR}", text: {content: "${TEXT.content}", size: ${TEXT.size}, color: "${TEXT.color}"}}`;

suite(`${Square.name} class`, function testSuiteSquareClass()
{
    test(`${Square.name} instance of ${AbstractShape.name}`, function testSquareObjectIsInstanceOfAbstractShape()
    {
        const square = new Square(WIDTH, HEIGHT, COLOR, TEXT);

        assert.instanceOf(square, AbstractShape, `${Square.name} not instance of ${AbstractShape.name}`);
    });

    suite(`${Square.name} constructor`, function testSuiteSquareConstructor()
    {
        test(`${Square.name} constructor throws ${RangeError.name} when passed negative width`, function testSquareConstructorThrowsWhenPassedNegativeWidth()
        {
            assert.throws(() => new Square(-1, 1, COLOR, TEXT), RangeError);
        });

        test(`${Square.name} constructor throws ${RangeError.name} when passed negative height`, function testSquareConstructorThrowsWhenPassedNegativeHeight()
        {
            assert.throws(() => new Square(1, -1, COLOR, TEXT), RangeError);
        });

        test(`${Square.name} constructor does not throw when passed valid arguments height`, function testSquareConstructorDoesNotThrowsWhenPassedValidArguments()
        {
            assert.doesNotThrow(() => new Square(WIDTH, HEIGHT, COLOR, TEXT));
        });
    });

    suite(`${Square.name} getters`, function testSuiteSquareGetters()
    {
        let square: Square;

        this.beforeEach("init Square mock object", function initSquareMockObject()
        {
            square = new Square(WIDTH, HEIGHT, COLOR, TEXT);
        });

        test(`${Square.name}.prototype.type equals ShapeType.SQUARE`, function testSquareTypeToEqualShapeTypeSquare()
        {
            assert.strictEqual(square.type, ShapeType.SQUARE, `${Square.name}.prototype.type not equal to ShapeType.SQUARE` );
        })

        test(`${Square.name}.prototype.width getter returns width number`, function testSquareWidthGetterToReturnWidthNumber()
        {
            expect(square.width).to.be.a("number").and.equal(WIDTH);
        })

        test(`${Square.name}.prototype.height getter returns height number`, function testSquareWidthGetterToReturnHeightNumber()
        {
            expect(square.height).to.be.a("number").and.equal(HEIGHT);
        })

        test(`${Square.name}.prototype.color getter returns color string`, function testSquareWidthGetterToReturnColorString()
        {
            expect(square.color).to.be.a("string").and.equal(COLOR);
        })

        test(`${Square.name}.prototype.text getter returns text object`, function testSquareWidthGetterToReturnTextObject()
        {
            expect(square.text).to.be.an("object").and.equal(TEXT);
        })

        test(`${Square.name}.prototype.xml getter returns xml string`, function testSquareWidthGetterToReturnXmlString()
        {
            expect(square.xml).to.be.a("string").and.equal(XML);
        })

        test(`${Square.name}.prototype.toString() method returns toString string`, function testSquareToStringMethodReturnsToString()
        {
            expect(square.toString()).to.be.a("string").and.equal(toString);
        })
    });
});

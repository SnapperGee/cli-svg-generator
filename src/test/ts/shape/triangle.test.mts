import { ShapeType } from "../../../main/ts/lib/shape/shape-type.mjs";
import { AbstractShape } from "../../../main/ts/lib/shape/abstract-shape.mjs";
import { Triangle } from "../../../main/ts/lib/shape/triangle.mjs";
import { assert, expect } from "chai";

const WIDTH = 42;
const HEIGHT = 66;
const COLOR = "blue";
const TEXT = Object.freeze({content: "TRI", size: 60, color: "black"});

const XML = '<svg version="1.1" width="42" height="66" xmlns="http://www.w3.org/2000/svg"><polygon points="0,42 42,42 21,0" fill="blue"/><text x="21" y="44" font-size="60" text-anchor="middle" dominant-baseline="middle" fill="black">TRI</text></svg>';

const toString = `${Triangle.name} {width: ${WIDTH}, height: ${HEIGHT}, color: "${COLOR}", text: {content: "${TEXT.content}", size: ${TEXT.size}, color: "${TEXT.color}"}}`;

suite(`${Triangle.name} class`, function testSuiteTriangleClass()
{
    test(`${Triangle.name} instance of ${AbstractShape.name}`, function testTriangleObjectIsInstanceOfAbstractShape()
    {
        const triangle = new Triangle(WIDTH, HEIGHT, COLOR, TEXT);

        assert.instanceOf(triangle, AbstractShape, `${Triangle.name} not instance of ${AbstractShape.name}`);
    });

    suite(`${Triangle.name} constructor`, function testSuiteTriangleConstructor()
    {
        test(`${Triangle.name} constructor throws ${RangeError.name} when passed negative width`, function testTriangleConstructorThrowsWhenPassedNegativeWidth()
        {
            assert.throws(() => new Triangle(-1, 1, COLOR, TEXT), RangeError);
        });

        test(`${Triangle.name} constructor throws ${RangeError.name} when passed negative height`, function testTriangleConstructorThrowsWhenPassedNegativeHeight()
        {
            assert.throws(() => new Triangle(1, -1, COLOR, TEXT), RangeError);
        });

        test(`${Triangle.name} constructor does not throw when passed valid arguments height`, function testTriangleConstructorDoesNotThrowsWhenPassedValidArguments()
        {
            assert.doesNotThrow(() => new Triangle(WIDTH, HEIGHT, COLOR, TEXT));
        });
    });

    suite(`${Triangle.name} getters`, function testSuiteTriangleGetters()
    {
        let triangle: Triangle;

        this.beforeEach("init Triangle mock object", function initTriangleMockObject() {
            triangle = new Triangle(WIDTH, HEIGHT, COLOR, TEXT);
        });

        test(`${Triangle.name}.prototype.type equals ShapeType.TRIANGLE`, function testTriangleTypeToEqualShapeTypeTriangle() {
            assert.strictEqual(triangle.type, ShapeType.TRIANGLE, `${Triangle.name}.prototype.type not equal to ShapeType.TRIANGLE` );
        })

        test(`${Triangle.name}.prototype.width getter returns width number`, function testTriangleWidthGetterToReturnWidthNumber() {
            expect(triangle.width).to.be.a("number").and.equal(WIDTH);
        })

        test(`${Triangle.name}.prototype.height getter returns height number`, function testTriangleWidthGetterToReturnHeightNumber() {
            expect(triangle.height).to.be.a("number").and.equal(HEIGHT);
        })

        test(`${Triangle.name}.prototype.color getter returns color string`, function testTriangleWidthGetterToReturnColorString() {
            expect(triangle.color).to.be.a("string").and.equal(COLOR);
        })

        test(`${Triangle.name}.prototype.text getter returns text object`, function testTriangleWidthGetterToReturnTextObject() {
            expect(triangle.text).to.be.an("object").and.equal(TEXT);
        })

        test(`${Triangle.name}.prototype.xml getter returns xml string`, function testTriangleWidthGetterToReturnXmlString() {
            expect(triangle.xml).to.be.a("string").and.equal(XML);
        })

        test(`${Triangle.name}.prototype.toString() method returns toString string`, function testTriangleToStringMethodReturnsToString() {
            expect(triangle.toString()).to.be.a("string").and.equal(toString);
        })
    });
});

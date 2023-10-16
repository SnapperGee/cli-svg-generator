import { ShapeType } from "../../../main/ts/lib/shape/shape-type.mjs";
import { AbstractShape } from "../../../main/ts/lib/shape/abstract-shape.mjs";
import { Circle } from "../../../main/ts/lib/shape/circle.mjs";
import { assert, expect } from "chai";

const WIDTH = 42;
const HEIGHT = 66;
const COLOR = "blue";
const TEXT = Object.freeze({content: "CIR", size: 60, color: "black"});

const XML = '<svg version="1.1" width="42" height="66" xmlns="http://www.w3.org/2000/svg"><circle cx="21" cy="33" r="21" fill="blue"/><text x="21" y="53" font-size="60" text-anchor="middle" dominant-baseline="middle" fill="black">CIR</text></svg>';

const toString = `${Circle.name} {width: ${WIDTH}, height: ${HEIGHT}, color: "${COLOR}", text: {content: "${TEXT.content}", size: ${TEXT.size}, color: "${TEXT.color}"}}`;

suite(`${Circle.name} class`, function testSuiteCircleClass()
{
    test(`${Circle.name} instance of ${AbstractShape.name}`, function testCircleObjectIsInstanceOfAbstractShape()
    {
        const circle = new Circle(WIDTH, HEIGHT, COLOR, TEXT);

        assert.instanceOf(circle, AbstractShape, `${Circle.name} not instance of ${AbstractShape.name}`);
    });

    suite(`${Circle.name} constructor`, function testSuiteCircleConstructor()
    {
        test(`${Circle.name} constructor throws ${RangeError.name} when passed negative width`, function testCircleConstructorThrowsWhenPassedNegativeWidth()
        {
            assert.throws(() => new Circle(-1, 1, COLOR, TEXT), RangeError);
        });

        test(`${Circle.name} constructor throws ${RangeError.name} when passed negative height`, function testCircleConstructorThrowsWhenPassedNegativeHeight()
        {
            assert.throws(() => new Circle(1, -1, COLOR, TEXT), RangeError);
        });

        test(`${Circle.name} constructor does not throw when passed valid arguments height`, function testCircleConstructorDoesNotThrowsWhenPassedValidArguments()
        {
            assert.doesNotThrow(() => new Circle(WIDTH, HEIGHT, COLOR, TEXT));
        });
    });

    suite(`${Circle.name} getters`, function testSuiteCircleGetters()
    {
        let circle: Circle;

        this.beforeEach("init Circle mock object", function initCircleMockObject()
        {
            circle = new Circle(WIDTH, HEIGHT, COLOR, TEXT);
        });

        test(`${Circle.name}.prototype.type equals ShapeType.CIRCLE`, function testCircleTypeToEqualShapeTypeCircle()
        {
            assert.strictEqual(circle.type, ShapeType.CIRCLE, `${Circle.name}.prototype.type not equal to ShapeType.CIRCLE` );
        })

        test(`${Circle.name}.prototype.width getter returns width number`, function testCircleWidthGetterToReturnWidthNumber()
        {
            expect(circle.width).to.be.a("number").and.equal(WIDTH);
        })

        test(`${Circle.name}.prototype.height getter returns height number`, function testCircleWidthGetterToReturnHeightNumber()
        {
            expect(circle.height).to.be.a("number").and.equal(HEIGHT);
        })

        test(`${Circle.name}.prototype.color getter returns color string`, function testCircleWidthGetterToReturnColorString()
        {
            expect(circle.color).to.be.a("string").and.equal(COLOR);
        })

        test(`${Circle.name}.prototype.text getter returns text object`, function testCircleWidthGetterToReturnTextObject()
        {
            expect(circle.text).to.be.an("object").and.equal(TEXT);
        })

        test(`${Circle.name}.prototype.xml getter returns xml string`, function testCircleWidthGetterToReturnXmlString()
        {
            expect(circle.xml).to.be.a("string").and.equal(XML);
        })

        test(`${Circle.name}.prototype.toString() method returns toString string`, function testCircleToStringMethodReturnsToString()
        {
            expect(circle.toString()).to.be.a("string").and.equal(toString);
        })
    });

});

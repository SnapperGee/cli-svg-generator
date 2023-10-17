import { question, answersToEditQuestion } from "../../../main/ts/lib/prompt/question.mjs";
import { assert, expect } from "chai";

const questionNames = Object.freeze([
    "textContent", "textColor", "shape", "shapeColor", "confirm"
]);

suite("question module", function QuestionModuleTestSuite()
{
    test(`question object contains properties ["${questionNames.join('", "')}"]`, function testQuestionProperties()
    {
        assert.hasAllKeys(question, questionNames);
    });

    const questions = Object.freeze({...question, answersToEdit: answersToEditQuestion});

    const allQuestionNames = Object.freeze(questionNames.concat("answersToEdit"));

    for (const questionName of allQuestionNames)
    {
        test("question name property values", function testQuestionNamePropertyValues()
        {
            expect(questions[questionName]).to.have.property("name", questionName);
        });
    }

    const char = Object.freeze({prefix: Object.freeze(">>>"), suffix: ":"});

    for (const questionPropKey in questions)
    {
        const question = questions[questionPropKey];

        test(`${question} suffix is "${char.suffix}"`, function testQuestionSuffix()
        {
            expect(question).to.have.property("suffix", char.suffix);
        });

        test(`${question} suffix is "${char.prefix}" or ""`, function testQuestionPrefix()
        {
            if (question === questions["confirm"])
            {
                expect(question).to.have.property("prefix", "");
            }
            else
            {
                expect(question).to.have.property("prefix", char.prefix);
            }
        });
    }

});

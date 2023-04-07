import {expect, test} from '@jest/globals';
import './utils/validatorLoader';

// It could be loaded from other files, but I think it is not the main purpose of this code test.
const testingObjs = [
    {
        "topic": "A",
        "name": "a",
        "description": "something"
    },
    {
        "topic": "A",
        "name": "a",
        "description": "something something"
    },
    {
        "topic": "B",
        "name": "a",
        "description": "something"
    },
    {
        "topic": "C",
        "name": "c",
        "description": "something"
    },
    {
        "topic": "J",
        "name": "Javascript",
        "description": "fun and versatile language",
        "tags": ["javascript", "js", "nodejs", "node", "react", "vue", "angular", "typescript", "ts", "es6"]
    },
];


testingObjs.forEach((obj) => {
    test(`Testing Topic ${obj.topic}`, () => {
        expect(obj).toBeValidTopic();
    });
})

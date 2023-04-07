// Loading rules and setup a custom matcher for Jest

import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import {expect} from '@jest/globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let topicValidatorMap = {};

// load validating rules from ./rules folder to topicValidatorMap
export async function loadValidator(rulePath) {
    topicValidatorMap = {};
    const pluginFileList = fs.readdirSync(rulePath)
    for (const pluginFile of pluginFileList) {
        // jest.useFakeTimers();
        const moduleA = await import(path.join(rulePath, pluginFile));
        topicValidatorMap[path.parse(pluginFile).name] = moduleA.default;
    }
    return topicValidatorMap
}

// define a custom matcher Jest
export function toBeValidTopic(obj) {
    const vt = topicValidatorMap[obj.topic];
    if (!vt) { // no validator for this topic
        return {
            message: () => `No Validator for Topic: ${obj.topic}`,
            pass: false
        };
    } else {
        const vErrs = vt(obj);
        if (vErrs === undefined) {
            return {
                message: () => `Rule should return an array of error messages or null.`,
                pass: false
            };            
        }
        else if (vErrs && vErrs.length > 0) {
            return {
                message: () => vErrs.join('\r\n'),
                pass: false
            };            
        }
    }
    return { pass: true };
}

expect.extend({
    toBeValidTopic,
});

const rulePath = path.join(__dirname, '../rules');
loadValidator(rulePath);
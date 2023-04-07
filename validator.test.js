import {expect, test} from '@jest/globals';
import {loadValidator, toBeValidTopic} from './utils/validatorLoader';

import path from 'path';
import { fileURLToPath } from 'url';

// for test, load rules from ./test_rules folder
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
await loadValidator(path.join(__dirname, './test_rules'));

const testObjs = {
    nameZ: {
        "topic": "nameZ",
        "name": "Z",
        "description": "nameZ rule should be valid for name Z"
    },
    nameZ_fail: {
        "topic": "nameZ is a valid rule for name Z",
        "name": "A",
        "description": "nameZ rule should reject for name A"
    },
    noReturn:{
        "topic": "noReturn",
        "name": "N",
        "description": "If noReturn does not return, it should not pass."
    },
    notExist:{
        "topic": "notExist",
        "name": "N",
        "description": "If rule does not exist, it should not pass."
    },    
}

test(testObjs.nameZ.description, () => {
    expect(toBeValidTopic(testObjs.nameZ)).toEqual({pass: true});
});
test(testObjs.nameZ_fail.description, () => {
    expect(toBeValidTopic(testObjs.nameZ_fail).pass).toEqual(false);
});
test(testObjs.noReturn.description, () => {
    expect(toBeValidTopic(testObjs.noReturn).pass).toEqual(false);
});
test(testObjs.notExist.description, () => {
    expect(toBeValidTopic(testObjs.notExist).pass).toEqual(false);
});

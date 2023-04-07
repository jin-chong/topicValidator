### Design goals
- Easy to add new rules
- Easy to maintain the existing rules
- Easy to integrate it with CI tools.

### How to setup
- Git clone: 
  `git clone https://github.com/jin-chong/topicValidator.git`
- move to folder: `cd topicValidator`
- run `npm install`

### How to run
- run `npm start`
- It runs Jest with index.test.js.

### Design key points
- Easy to add new rules
  - Just add `category_name.js` file under `rules` folder
  - A rule JS should follow this pattern:
  ```
  // obj is the object to test
  // if there is any error, return the string array with errors.
  // if no error, return [] or null.
  export default (obj) => {
    const vErrors = [];
    if (obj.name.length < 10) { 
        vErrors.push("Name is too short");
    }
    if (!obj.description) {
        vError.push("Description should not be empty.");
    ]
    return vErrors;
  }
  ```
- Easy to maintain rules with Git
  - It is easy to trace the individual rule file changes by Git
- Easy to integrate with CI tool
  - It uses Jest and most CI tools understand Jest output.

### How it works ###
- validatorLoader loads rules from `./rules` folder, then setup a Map by category name
- validatorLoader set up a custom Jest matcher, toBeValidTopic
- validator.test.js is a normal Jest test file.  It tests given object array by Jest and custom Jest matcher.

### Unit test
- run `npm test`
- It runs validator.test.js
- It loads test rules from `./test_rules` folder

### File/folder Structure ###
- rules/*: rule folders
- utils/validatorLoader.js:  Load rules and set up a Jest custom matcher
- index.test.js: main file
- validator.test.js: test file.
- test_rules/*: unit test rule folders



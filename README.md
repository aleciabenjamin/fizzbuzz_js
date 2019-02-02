# Fizz Buzz Challenge
---
## Installing
`$ npm init`
https://www.npmjs.com/package/e2e_training_wheels


Install the package using the automatic setup

`$npm run test`


## Prerequisites
node version above 10.0.2


## Built with

- Javascript
- npm
- Tailwind
- mocha


### <strong>Questions</strong>

1. Please explain what the following lines of code do.
```
let  fizzBuzz = fs.readFileSync('./src/js/fizz-buzz.js');
eval( fizzBuzz + `\nexports.FizzBuzz = FizzBuzz;`)
```
#### <strong>Answer<strong>
The fs module provides an API for interacting with the file system.  It allows node.js to read fizz-buzz.js and store it in the fizzBuzz variable.  The eval function evaluates the argument and exports


2. Please explain why we are placing the let fizzBuzz = new FizzBuzz outside the it block.

#### <strong>Answer<strong>
By defining fizzBuzz before the 'it' blocks, it is accessible to all the 'it' blocks below the 'describe' block.

























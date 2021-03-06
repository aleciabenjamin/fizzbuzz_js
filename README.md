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
- chai


**Questions**

1. Please explain what the following lines of code do.
```
let  fizzBuzz = fs.readFileSync('./src/js/fizz-buzz.js');
eval( fizzBuzz + `\nexports.FizzBuzz = FizzBuzz;`)
```
#### **Answer**

The fs module provides an API for interacting with the file system.  It allows node.js to read fizz-buzz.js and store it in the fizzBuzz variable.  The eval function evaluates the argument, but I am unsure about where it is exported, if at all.

2. Please explain why we are placing the let fizzBuzz = new FizzBuzz outside the 'it' block.

#### **Answer**
By defining fizzBuzz before the 'it' blocks, it is accessible to all the 'it' blocks below the 'describe' block.


3. Explain the difference between using === and == in JS.

#### **Answer**
When using the triple equals operator (===), one is testing for strict equality where both the type and value have to be the same.  In the case of double equals (==), one is testing for loose equality where the two values are only compared after Javascript attempts to convert them into a common type.

4. Explain why we are moving (number % 5 === 0) to the top?  
#### **Answer**

By moving (5 === 0) above (3 === 0) we are ensuring that the larger number is being parsed through the numbers first.  Because there are numbers divisible by 3 and 5 and the game only allows one expression per number, the largest should be placed first with the smaller next and the smallest last.  

5. Explain the difference between feature and unit test.
#### **Answer**

Unit tests are written by developers to ensure that a specific method (unit) of a class is performing its tasks, whereas feature tests test a portion of functionality from the user's perspective and may interact with dependencies like Web Services and Databases.

6. Please explain what this following code does:
````
describe('User can input a value and get FizzBuzz results', () => {
    before(async () => {
        await  browser.init()
        await  browser.visitPage('http://localhost:8080/')
    });

    beforeEach(async () => {
        await  browser.page.reload();
    })

    after(async ()=> {
        await  browser.close();
    })
})
````
#### **Answer**


Placing async first ensures that the function returns a promise.  Await then pauses the asynchronous programming until the promise is resolved, then returns the result.  In this case it initializes the browser and visits the server's root path, reloads before each test, and ensures that the browser closes after the test is finished.

7. Explain what expectations in the context of testing are.

#### **Answer**

Expectations in this context are what you anticipate your code will do and continue to do when you make changes.  

8. Write a line to line explanation of what is happening in this code:
```
<script src="./js/fizz-buzz.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            let button = document.getElementById('button')
            let displayDiv = document.getElementById('display_answer')
            button.addEventListener('click', () =>{
                let value = document.getElementById('value').value
                let fizzBuzz = new FizzBuzz
                let result = fizzBuzz.check(value)
                displayDiv.innerHTML = result;
            })
        })
    </script>
```
````
<script src="./js/fizz-buzz.js"></script>
````
fizz-buzz.js is declared as the source for the code that follows.
```
document.addEventListener('DOMContentLoaded', () => {
```
This attaches an event handler to the document after the DOM is loaded.
```
let button = document.getElementById('button')
```
This assigns the 'button' variable.
```
let displayDiv = document.getElementById('display_answer')
```
This assigns the 'displayDiv' variable.

```
button.addEventListener('click', () =>{
```
This assigns the 'click' event.
```
let value = document.getElementById('value').value
```
This assigns the 'value' variable.
```
let fizzBuzz = new FizzBuzz
```
This creates a new instance of the FizzBuzz class and stores it in the 'fizzbuzz' variable.
```
let result = fizzBuzz.check(value)
```

This assigns the 'result' variable to the result of the function.
```
displayDiv.innerHTML = result;
```
The 'displayDiv' variable which displays the answer becomes the 'result' variable.

9. Explain what a CDN (Content Delivery Network) is.

#### **Answer** 
A CDN is a system of geographically distributed servers that allow for the quick transfer of content to users based on the geographic location of the user.  





 

































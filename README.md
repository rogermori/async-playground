This project contains a set of asynchronous code examples.

The examples compute the algebraic expression `(2 + 3) * 4 / 2 = 10` asynchronously by using callbacks, promises, and generators.

AsyncPlayground uses [Jest](https://facebook.github.io/jest/) as its test runner.

### Getting Started
Checkout this repo, install dependencies, then run the tests and examples:

```
> git clone https://github.com/rogermori/async-playground.git
> cd async-playground
> npm install
```
#### Run the tests
```
> npm run test 
```
#### Run the examples
```
> node [callback|promise]/example 
```

### Directory Structure
```
 callback 
 promise
 generator
```
Each directory contains equivalent code: the math module, tests, and an example 

### Supported Language Features
This project uses JavaScript [ES6](https://github.com/lukehoban/es6features)


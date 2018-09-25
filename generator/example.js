const sum = require('../promise/math').sum;
const multiply = require('../promise/math').multiply;
const divide = require('../promise/math').divide;

//(2 + 3) * 4 / 2 = 10
function* compute() {
    try {
        const sum2N3 = yield sum(2,3);
        console.log('2 + 3 = ', sum2N3);
        const sumTimes4 = yield multiply(sum2N3,4);
        console.log('(2 + 3) * 4 = ',sumTimes4);
        const total = yield divide(sumTimes4,2);
        console.log('(2 + 3) * 4 / 2 = ',total);
        return total;
    } catch (error) {
        console.log(`Error: ${error.stack}`);
    }
}

function runGenerator(generator) {
    // generator functions return an iterator
    const iterator = compute();
    // recursive function iterates tru the generator body
    function next(result) {
        const { done, value } = iterator.next(result);
        if (done) return value;
        if (value && value.then) {
            return value.then(answer=>next(answer));
        } else {
            return next(value);
        }
    }
    next();
}

runGenerator(compute);



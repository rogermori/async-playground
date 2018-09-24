const sum = require('./math').sum;
const multiply = require('./math').multiply;
const divide = require('./math').divide;

//(2 + 3) * 4 / 2 = 10
sum(2,3).then(totalSum=> {
    console.log('2+3 =',totalSum);
    return multiply(totalSum,4);
}).then(totalMultiply=>{
    console.log('(2 + 3) * 4 =', totalMultiply);
    return divide(totalMultiply,2);
}).then(total=>console.log('(2 + 3) * 4 / 2 =',total))
  .catch(error=>console.log(error));


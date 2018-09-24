const ErrorMessagesSum = require('../config').errorMessage.sum;
const ErrorMessagesMultiply = require('../config').errorMessage.multiply;
const ErrorMessagesDivide = require('../config').errorMessage.divide;

module.exports.sum = (a,b) => new Promise ((resolve,reject)=>{
    if (!a || isNaN(a)) {
        reject(ErrorMessagesSum.invalidFirstElement);
    } else if (!b || isNaN(b)) {
         reject(ErrorMessagesSum.invalidSecondElement);
    } else {
        resolve(a + b);
    }
});


module.exports.multiply = (a,b) => new Promise ((resolve,reject)=>{
    if (!a || isNaN(a)) {
        reject(ErrorMessagesMultiply.invalidFirstElement);
    } else if (!b || isNaN(b)) {
        reject(ErrorMessagesMultiply.invalidSecondElement);
    } else {
        resolve(a * b);
    }
});

module.exports.divide = (a,b) => new Promise ((resolve,reject)=>{
    if (!a || isNaN(a)) {
        reject(ErrorMessagesDivide.invalidFirstElement);
    } else if (!b || isNaN(b)) {
        reject (ErrorMessagesDivide.invalidSecondElement);
    } else if (b === 0 ) {
        reject(ErrorMessagesDivide.divisionByZero);
    } else {
        resolve(a / b);
    }
});

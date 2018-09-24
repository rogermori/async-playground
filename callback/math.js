const ErrorMessagesSum = require('../config').errorMessage.sum;
const ErrorMessagesMultiply = require('../config').errorMessage.multiply;
const ErrorMessagesDivide = require('../config').errorMessage.divide;

module.exports.sum = (a,b, callBack) => {
   if (!a || isNaN(a)) {
       return callBack(ErrorMessagesSum.invalidFirstElement);
   }
    if (!b || isNaN(b)) {
        return callBack(ErrorMessagesSum.invalidSecondElement);
    }
    callBack(null,(a+b));
};

module.exports.multiply = (a,b, callBack) => {
    if (!a || isNaN(a)) {
        return callBack(ErrorMessagesMultiply.invalidFirstElement);
    }
    if (!b || isNaN(b)) {
        return callBack(ErrorMessagesMultiply.invalidSecondElement);
    }
    callBack(null,(a*b));
};

module.exports.divide = (a,b, callBack) => {
    if (!a || isNaN(a)) {
        return callBack(ErrorMessagesDivide.invalidFirstElement);
    }
    if (!b || isNaN(b)) {
        return callBack(ErrorMessagesDivide.invalidSecondElement);
    }
    if (b === 0 ) {
        return callBack(ErrorMessagesDivide.divisionByZero);
    }

    callBack(null,(a/b));
};

const ErrorMessagesSum = require('../../config').errorMessage.sum;
const ErrorMessagesMultiply = require('../../config').errorMessage.multiply;
const ErrorMessagesDivide = require('../../config').errorMessage.divide;
const sum = require('../math').sum;
const multiply = require('../math').multiply;
const divide = require('../math').divide;

describe('sum',()=>{
    it('1 + 2 = 3', () => {
        function callBack(error, data) {
            expect(data).toBe(3);
        }
        sum(1, 2, callBack);
    });
    it(`'a' + 2 errors out`, () => {
        function callBack(error, data) {
            expect(error).toBe(ErrorMessagesSum.invalidFirstElement);
        }
        sum('a', 2, callBack);
    });
    it('null + 2 errors out', () => {
        function callBack(error, data) {
            expect(error).toBe(ErrorMessagesSum.invalidFirstElement);
        }
        sum(null, 2, callBack);
    });
    it('undefined + 2 errors out', () => {
        function callBack(error, data) {
            expect(error).toBe(ErrorMessagesSum.invalidFirstElement);
        }
        sum(undefined, 2, callBack);
    });
    it(`1 + 'b' errors out`, () => {
        function callBack(error, data) {
            expect(error).toBe(ErrorMessagesSum.invalidSecondElement);
        }
        sum(1, 'b', callBack);
    });
    it('1 + null errors out', () => {
        function callBack(error, data) {
            expect(error).toBe(ErrorMessagesSum.invalidSecondElement);
        }
        sum(1, null, callBack);
    });
    it('1 + undefined  errors out', () => {
        function callBack(error, data) {
            expect(error).toBe(ErrorMessagesSum.invalidSecondElement);
        }
        sum(1,undefined, callBack);
    });
});

describe('multiply',()=>{
    it('2 x 3 = 6', () => {
        function callBack(error, data) {
            expect(data).toBe(6);
        }
        multiply(2, 3, callBack);
    });
    it(`'a' x 3 errors out`, () => {
        function callBack(error, data) {
            expect(error).toBe(ErrorMessagesMultiply.invalidFirstElement);
        }
        multiply('a', 3, callBack);
    });
    it('null x 3 errors out', () => {
        function callBack(error, data) {
            expect(error).toBe(ErrorMessagesMultiply.invalidFirstElement);
        }
        multiply(null, 3, callBack);
    });
    it('undefined x  3 errors out', () => {
        function callBack(error, data) {
            expect(error).toBe(ErrorMessagesMultiply.invalidFirstElement);
        }
        multiply(undefined, 3, callBack);
    });
    it(`2 x 'b' errors out`, () => {
        function callBack(error, data) {
            expect(error).toBe(ErrorMessagesMultiply.invalidSecondElement);
        }
        multiply(2, 'b', callBack);
    });
    it('2 x null errors out', () => {
        function callBack(error, data) {
            expect(error).toBe(ErrorMessagesMultiply.invalidSecondElement);
        }
        multiply(2, null, callBack);
    });
    it('2 x undefined  errors out', () => {
        function callBack(error, data) {
            expect(error).toBe(ErrorMessagesMultiply.invalidSecondElement);
        }
        multiply(2,undefined, callBack);
    });
});

describe('division',()=>{
    it('10 / 2  = 5', () => {
        function callBack(error, data) {
            expect(data).toBe(5);
        }
        divide(10, 2, callBack);
    });
    it(`'a' x 2 errors out`, () => {
        function callBack(error, data) {
            expect(error).toBe(ErrorMessagesDivide.invalidFirstElement);
        }
        divide('a', 2, callBack);
    });
    it('null / 2 errors out', () => {
        function callBack(error, data) {
            expect(error).toBe(ErrorMessagesDivide.invalidFirstElement);
        }
        divide(null, 3, callBack);
    });
    it('undefined /  2 errors out', () => {
        function callBack(error, data) {
            expect(error).toBe(ErrorMessagesDivide.invalidFirstElement);
        }
        divide(undefined, 2, callBack);
    });
    it(`10 / 'b' errors out`, () => {
        function callBack(error, data) {
            expect(error).toBe(ErrorMessagesDivide.invalidSecondElement);
        }
        divide(10, 'b', callBack);
    });
    it('10 / null errors out', () => {
        function callBack(error, data) {
            expect(error).toBe(ErrorMessagesDivide.invalidSecondElement);
        }
        divide(10, null, callBack);
    });
    it('10 / undefined  errors out', () => {
        function callBack(error, data) {
            expect(error).toBe(ErrorMessagesDivide.invalidSecondElement);
        }
        divide(2,undefined, callBack);
    });
});

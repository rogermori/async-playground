const ErrorMessagesSum = require('../../config').errorMessage.sum;
const ErrorMessagesMultiply = require('../../config').errorMessage.multiply;
const ErrorMessagesDivide = require('../../config').errorMessage.divide;
const sum = require('../math').sum;
const multiply = require('../math').multiply;
const divide = require('../math').divide;

describe('sum',()=>{
    it('1 + 2 = 3', () => {
        expect.assertions(1);
        return expect(sum(1, 2)).resolves.toEqual(3);
    });
    it(`'a' + 2 errors out`, () => {
        expect.assertions(1);
        return expect(sum('a', 2)).rejects.toEqual(ErrorMessagesSum.invalidFirstElement);
    });
    it('null + 2 errors out', () => {
        expect.assertions(1);
        return expect(sum(null, 2)).rejects.toEqual(ErrorMessagesSum.invalidFirstElement);

    });

    it('undefined + 2 errors out', () => {
        expect.assertions(1);
        return expect(sum(undefined, 2)).rejects.toEqual(ErrorMessagesSum.invalidFirstElement);

    });
    it(`1 + 'b' errors out`, () => {
        expect.assertions(1);
        return expect(sum(1, 'b')).rejects.toEqual(ErrorMessagesSum.invalidSecondElement);
    });
    it('1 + null errors out', () => {
        expect.assertions(1);
        return expect(sum(1, null)).rejects.toEqual(ErrorMessagesSum.invalidSecondElement);
    });
    it('1 + undefined  errors out', () => {
        expect.assertions(1);
        return expect(sum(1, undefined)).rejects.toEqual(ErrorMessagesSum.invalidSecondElement);
    });
});

describe('multiply',()=>{
    it('2 x 3 = 6', () => {
        expect.assertions(1);
        return expect(multiply(2, 3)).resolves.toEqual(6);
    });
    it(`'a' x 3 errors out`, () => {
        expect.assertions(1);
        return expect(multiply('a', 3)).rejects.toEqual(ErrorMessagesMultiply.invalidFirstElement);
    });
    it('null x 3 errors out', () => {
        expect.assertions(1);
        return expect(multiply(null, 3)).rejects.toEqual(ErrorMessagesMultiply.invalidFirstElement);
    });
    it('undefined x  3 errors out', () => {
        expect.assertions(1);
        return expect(multiply(undefined, 3)).rejects.toEqual(ErrorMessagesMultiply.invalidFirstElement);
    });
    it(`2 x 'b' errors out`, () => {
        expect.assertions(1);
        return expect(multiply(2, 'b')).rejects.toEqual(ErrorMessagesMultiply.invalidSecondElement);
    });
    it('2 x null errors out', () => {
        expect.assertions(1);
        return expect(multiply(2, null)).rejects.toEqual(ErrorMessagesMultiply.invalidSecondElement);
    });
    it('2 x undefined  errors out', () => {
        expect.assertions(1);
        return expect(multiply(2, undefined)).rejects.toEqual(ErrorMessagesMultiply.invalidSecondElement);
    });
});

describe('division',()=>{
    it('10 / 2  = 5', () => {
        expect.assertions(1);
        return expect(divide(10, 2)).resolves.toEqual(5);
    });
    it(`'a' x 2 errors out`, () => {
        expect.assertions(1);
        return expect(divide('a', 2)).rejects.toEqual(ErrorMessagesDivide.invalidFirstElement);
    });
    it('null / 2 errors out', () => {
        expect.assertions(1);
        return expect(divide(null, 2)).rejects.toEqual(ErrorMessagesDivide.invalidFirstElement);
    });
    it('undefined /  2 errors out', () => {
        expect.assertions(1);
        return expect(divide(undefined, 2)).rejects.toEqual(ErrorMessagesDivide.invalidFirstElement);
    });
    it(`10 / 'b' errors out`, () => {
        expect.assertions(1);
        return expect(divide(10, 'b')).rejects.toEqual(ErrorMessagesDivide.invalidSecondElement);
    });
    it('10 / null errors out', () => {
        expect.assertions(1);
        return expect(divide(10, null)).rejects.toEqual(ErrorMessagesDivide.invalidSecondElement);
    });
    it('10 / undefined  errors out', () => {
        expect.assertions(1);
        return expect(divide(10, undefined)).rejects.toEqual(ErrorMessagesDivide.invalidSecondElement);
    });
});


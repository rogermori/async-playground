const sum = require('../math').sum;
const multiply = require('../math').multiply;
const divide = require('../math').divide;

it('1 + 2 = 3', () => {
    expect.assertions(1);
    return expect(
        sum(2,3).then(
            sum=>multiply(sum,4)
        ).then(subtotal=>divide(subtotal,2))
    ).resolves.toBe(10)
});

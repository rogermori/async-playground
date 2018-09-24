const sum = require('../math').sum;
const multiply = require('../math').multiply;
const divide = require('../math').divide;

let total;

beforeAll(()=>{
   total = 10;
   totalSum = 5;
   totalSumTimes4 = 20;
});
describe('(2 + 3) * 4 / 2 = 10', ()=>{
    it('1 + 2 = 3', () => {
        function callBack(error, data) {
            expect(data).toBe(totalSum);
            multiply(totalSum, 4, (error,data)=>{
                expect(data).toBe(totalSumTimes4);
                divide(totalSumTimes4, 2, (error,data)=>{
                    expect(data).toBe(total);
                })
            })
        }
        sum(2, 3, callBack);
    });
});

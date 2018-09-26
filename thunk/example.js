const sum = require('../callback/math').sum;
const multiply = require('../callback/math').multiply;
const divide = require('../callback/math').divide;

//(2 + 3) * 4 / 2 = 10
const thunkSum2N3 = callBack => sum(2,3,callBack);

thunkSum2N3((error,sum)=>{
    if (error) throw new Error(error);
    const thunkSumTimes4 = callBack => multiply(sum,4, callBack);
    console.log('2+3 =',sum);
    thunkSumTimes4((error,product)=>{
        if (error) throw new Error(error);
        const thunkProductDividedBy2 = callBack => divide(product,2,callBack);
        console.log('(2 + 3) * 4 =',product);
        thunkProductDividedBy2((error,total)=>{
            if (error) throw new Error(error);
            console.log('(2 + 3) * 4 /2  =',total);
        })
    })
});

const sum = require('./math').sum;
const multiply = require('./math').multiply;
const divide = require('./math').divide;
//(2 + 3) * 4 / 2 = 10
sum(2,3, (error,data)=>{
    if (error) throw new Error(error);
    console.log('2+3 =',data);
    multiply(data,4, (error,data)=>{
        if (error) throw new Error(error);
        console.log('(2 + 3) * 4 =', data);
        divide(data,2, (error,data)=>{
            if (error) throw new Error(error);
            console.log('(2 + 3) * 4 / 2 =',data);
        })
    })
});

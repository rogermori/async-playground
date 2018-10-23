const  doJob= (effort,i) =>{
    console.log(effort);
    return new Promise((resolve,reject)=>{
            setTimeout(()=>resolve(i),effort);
        }
    )
};

const effort = (i)=> Math.floor(Math.random()*100)*(20-i);

(async function() {
    const myArr = [];
    for (let i = 3; i < 8; i++) {
        myArr.push(doJob(effort(i),i));
    }
    const response = await Promise.all(myArr);
    console.log(response);
    console.log(myArr);
})();






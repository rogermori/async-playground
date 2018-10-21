let i = 0;

for (let j = 0 ; i < 3 ; j++) {
    i++;
    setTimeout(()=>{console.log('i = ',i)},1000);
}

i = 0;
for (let j = 0 ; i < 3 ; j++) {
    i++;
    (function(){
        let x = i;
        setTimeout(()=>{console.log('i = ',x)},1000);
    })()
}

i = 0;
for (let j = 0 ; i < 3 ; j++) {
    i++;
    (function(x){
        setTimeout(()=>{console.log('i = ',x)},1000);
    })(i)
}



let a = 1;

function print() {
    console.log('a=',a);
}

function calPrint(p) {
    p();
}

calPrint(print);

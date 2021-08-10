// 10! = 1*2*3*4*5*6*7*8*9*10

function factorial(n){
    let fact = 1;
    for(let i = 1; i <= n; i++){
        fact = fact * i;
    }
    return fact;
}
var result = factorial(5);
console.log(result);

var result1 = factorial(0);
console.log(result1);
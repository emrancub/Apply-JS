// 0 1 1 2 3 5 8 13 21 34 55
function fibonacci(n){
    if(n == 0){
        return [0];
    }
    else if(n == 1){
        return [0, 1];
    }
    else{
        let fibo = fibonacci(n - 1);
        let nextElement = fibo[n - 1] + fibo[n - 2];
        fibo.push(nextElement);
        return fibo;
    }
}
const result = fibonacci(9);
console.log(result);
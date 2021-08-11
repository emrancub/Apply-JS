function fibonacci(n){
    let fibo = [0, 1];
    for(let i = 2; i < n; i++){
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
const result = fibonacci(10);
console.log(result);








// let fib = [0, 1];
// for (let i = 2; i < 10; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//     // console.log(fib[i - 2], fib[i - 1], fib[i]);
// }
// console.log(fib);
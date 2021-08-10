// 6! = 1*2*3*4*5*6
//    = 5! * 6
//    = (6-1)! * 6
// n! = (n-1)! * n

function factorial(n) {
    if (n == 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}
const result = factorial(6);
console.log(result);
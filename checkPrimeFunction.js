function isPrime(n){
    for(let i = 2 ; i < n; i++){
        if (n % i == 0){
            return 'Not Prime';
        }
    }
    return 'Prime';
}
const result = isPrime(29);
console.log(result);